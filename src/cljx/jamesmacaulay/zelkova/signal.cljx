#+clj
(ns jamesmacaulay.zelkova.signal
  (:refer-clojure :exclude [merge count])
  (:require [clojure.core :as core]
            [clojure.zip :as zip]
            [clojure.core.async :as async :refer [go go-loop chan <! >!]]
            [clojure.core.async.impl.protocols :as impl]
            [clojure.core.async.impl.channels :as channels]
            [jamesmacaulay.async-tools.core :as tools]
            [alandipert.kahn :as kahn]))

#+cljs
(ns jamesmacaulay.zelkova.signal
  (:refer-clojure :exclude [merge count])
  (:require [cljs.core :as core]
            [clojure.zip :as zip]
            [cljs.core.async :as async :refer [chan <! >!]]
            [cljs.core.async.impl.protocols :as impl]
            [cljs.core.async.impl.channels :as channels]
            [jamesmacaulay.async-tools.core :as tools]
            [alandipert.kahn :as kahn])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(defn gen-topic
  []
  (keyword (gensym)))

(defrecord Event
  [topic value])

(defprotocol Message
  (fresh? [msg]))

(defrecord Fresh
  [value]
  Message
  (fresh? [_] true))

(defrecord Cached
  [value]
  Message
  (fresh? [_] false))

(defprotocol SignalProtocol
  (sources [s])
  (message-emitter [s]))

(defn signal?
  [x]
  (satisfies? SignalProtocol x))

(defn- relayed-events-message-emitter
  [topics]
  (let [topics (if (set? topics) topics (set topics))]
    (fn [prev event]
      (if (contains? topics (:topic event))
        (->Fresh (:value event))
        (->Cached (:value prev))))))

(defrecord Signal
  [init message-emitter relayed-events deps event-sources]
  SignalProtocol
  (sources [_]
    (or deps
        (let [tmpl (first message-emitter)
              tmpl-seq (if (sequential? tmpl) tmpl (vector tmpl))]
          (into #{} (filter signal?) tmpl-seq))))
  (message-emitter [_]
    (cond
      message-emitter message-emitter
      relayed-events [:events (relayed-events-message-emitter relayed-events)])))

(defn- messages-from-events
  [topic]
  (fn [prev event]
    (if (= topic (:topic event))
      (->Fresh (:value event))
      (->Cached (:value prev)))))

(defn values-fn->events-fn
  [value-channel-fn topic]
  (fn [graph opts]
    (let [ch (value-channel-fn graph opts)]
      (async/pipe ch (chan 1 (map (partial ->Event topic)))))))

(defn input
  ([init] (input init (gen-topic)))
  ([init topic]
   (map->Signal {:init init
                 :relayed-events #{topic}}))
  ([init topic value-channel-fn]
   (let [event-channel-fn (values-fn->events-fn value-channel-fn
                                                topic)]
     (map->Signal {:init init
                   :relayed-events #{topic}
                   :event-sources {topic event-channel-fn}}))))

(defn constant
  [x]
  (let [cached (->Cached x)]
    (map->Signal {:init x
                  :message-emitter [:events (constantly cached)]})))

(defn liftseq
  [f sources]
  (if (empty? sources)
    (constant (f))
    (let [emit-message (fn [prev messages]
                         (if (some fresh? messages)
                           (->Fresh (apply f (mapv :value messages)))
                           (->Cached (:value prev))))]
      (map->Signal {:init (->> sources
                               (mapv (comp ->Fresh :init))
                               (emit-message nil)
                               :value)
                    :message-emitter [sources emit-message]}))))

(defn lift
  [f & sources]
  (liftseq f sources))

(defn template
  [signal-map]
  (let [ks (keys signal-map)]
    (liftseq (fn [& values]
               (zipmap ks values))
             (vals signal-map))))

(defn foldp
  [f init source]
  (map->Signal {:init init
                :message-emitter [source (fn [acc message]
                                           (if (fresh? message)
                                             (->Fresh (f (:value message) (:value acc)))
                                             (->Cached (:value acc))))]}))

(defn drop-repeats
  [sig]
  (map->Signal {:init (:init sig)
                :message-emitter [sig (fn [prev msg]
                                        (if (and (fresh? msg)
                                                 (not= (:value msg) (:value prev)))
                                          msg
                                          (->Cached (:value prev))))]}))


(defn reducep
  ([f source] (reducep f (f) source))
  ([f init source]
   (->> source
        (foldp (fn [val acc] (f acc val)) init)
        drop-repeats)))

(defn transducep
  ([xform f source] (reducep (xform f) (f) source))
  ([xform f init source]
   (reducep (xform f) init source)))

(defn async
  [source]
  (let [topic source
        msgs->events (comp (filter fresh?)
                           (map (fn [msg]
                                  (->Event topic (:value msg)))))
        events-channel-fn (fn [live-graph _]
                            (async/tap (get (:mult-map live-graph) source)
                                       (chan 1 msgs->events)))]
    (map->Signal {:init (:init source)
                  :deps #{source}
                  :event-sources {topic events-channel-fn}
                  :relayed-events #{topic}})))

(defn mergeseq
  [sigs]
  (map->Signal {:init (:init (first sigs))
                :message-emitter [sigs (fn [prev messages]
                                         (or (first (filter fresh? messages))
                                             (->Cached (:value prev))))]}))

(defn merge
  [& sigs]
  (mergeseq sigs))

(defn combine
  [sigs]
  (liftseq vector sigs))

(defn sample-on
  [sampler-sig value-sig]
  (map->Signal {:init (:init value-sig)
                :message-emitter [[sampler-sig value-sig]
                                  (fn [prev [sampler-msg value-msg]]
                                    (if (fresh? sampler-msg)
                                      (->Fresh (:value value-msg))
                                      (->Cached (:value prev))))]}))

(defn count
  [sig]
  (foldp #(inc %2) 0 sig))

(defn count-if
  [pred sig]
  (foldp (fn [v c]
           (if (pred v) (inc c) c))
         0
         sig))

(defn keep-if
  [pred base sig]
  (map->Signal {:init (if (pred (:init sig))
                        (:init sig)
                        base)
                :message-emitter [sig (fn [prev msg]
                                        (if (and (fresh? msg)
                                                 (pred (:value msg)))
                                          (->Fresh (:value msg))
                                          (->Cached (:value prev))))]}))

(defn drop-if
  [pred base sig]
  (keep-if (complement pred) base sig))

(defn keep-when
  [switch-sig base value-sig]
  (->> value-sig
       (lift vector (sample-on value-sig switch-sig))
       (keep-if first [false base])
       (lift second)))

(defn drop-when
  [switch-sig base value-sig]
  (keep-when (lift not switch-sig) base value-sig))

#+cljs
(defn console-log
  [sig]
  (lift (fn [x] (js/console.log x) x) sig))

(defn log
  [sig]
  (lift (fn [x] (pr x) x) sig))

; helpers:

(def fresh-values (comp (filter fresh?)
                        (map :value)))

; compiling graphs:

(defn node-graph-zipper
  [output-node]
  (zip/zipper (constantly true)
              (comp seq sources)
              nil
              output-node))

(defn skip-subtree
  [loc]
  (or (zip/right loc)
      (loop [p loc]
        (if (zip/up p)
          (or (zip/right (zip/up p))
              (recur (zip/up p)))
          [(zip/node p) :end]))))

(defn output-node->dependency-map
  [output-node]
  (loop [deps {}
         loc (node-graph-zipper output-node)]
    (cond
      (zip/end? loc)
      deps
      (contains? deps (zip/node loc))
      (recur deps
             (skip-subtree loc))
      :else
      (let [n (zip/node loc)]
        (recur (if (sequential? n)
                 deps
                 (assoc deps n (sources n)))
               (zip/next loc))))))

(defn topsort
  [output]
  (-> output
      output-node->dependency-map
      kahn/kahn-sort
      reverse))

(defrecord CompiledGraph
  [output-signal sorted-signals])

(defn compile-graph
  [output-signal]
  (let [sorted-signals (topsort output-signal)]
    (->CompiledGraph output-signal sorted-signals)))


; wiring up channels:

(defn- tap-template
  [tmpl mult-map]
  (if (sequential? tmpl)
    (->> tmpl
         (mapv #(async/tap (get mult-map %) (chan)))
         (async/map vector))
    (async/tap (get mult-map tmpl) (chan))))

(defn- spawn-message-loop!
  [init msg-fn c-in c-out]
  (go-loop [prev (->Fresh init)]
    (let [in-val (<! c-in)]
      (if (nil? in-val)
        (async/close! c-out)
        (let [out-val (msg-fn prev in-val)]
          (>! c-out out-val)
          (recur out-val))))))

(defn- build-message-mult
  [signal mult-map]
  (if-let [[tmpl msg-fn] (message-emitter signal)]
    (let [c-in (tap-template tmpl mult-map)
          c-out (chan)]
      (spawn-message-loop! (:init signal) msg-fn c-in c-out)
      (async/mult c-out))))

(defn build-message-mult-map
  [sorted-signals events-mult]
  (reduce (fn [mult-map signal]
            (assoc mult-map
              signal (build-message-mult signal mult-map)))
          {:events events-mult}
          sorted-signals))

(defn gather-event-sources
  [sorted-signals]
  (into {} (map :event-sources) sorted-signals))

(defprotocol LiveChannelGraphProtocol
  (output-mult [g])
  (connect-to-world [g opts]))

(defrecord LiveChannelGraph
  [compiled-graph events-channel mult-map]
  LiveChannelGraphProtocol
  (output-mult [_] (get mult-map (:output-signal compiled-graph)))
  (connect-to-world [g opts]
    (let [world (gather-event-sources (:sorted-signals compiled-graph))]
      (doseq [channel-fn (vals world)]
        (async/pipe (channel-fn g opts)
                    events-channel)))
    g)
  impl/Channel
  (close! [_] (impl/close! events-channel))
  (closed? [_] (impl/closed? events-channel))
  impl/WritePort
  (put! [_ val fn1] (impl/put! events-channel val fn1))
  async/Mult
  (tap* [g ch close?] (async/tap* (output-mult g) ch close?))
  (untap* [g ch] (async/untap* (output-mult g) ch))
  (untap-all* [g] (async/untap-all* (output-mult g))))

(defprotocol SignalLike
  (init [x])
  (spawn* [x opts])
  (pipe-to-atom* [x a ks]))

(extend-protocol SignalLike
  LiveChannelGraph
  (init [g] (init (:compiled-graph g)))
  (spawn* [g opts] (spawn* (:compiled-graph g) opts))
  (pipe-to-atom* [g atm ks]
    (tools/do-effects (if (seq ks)
                        (partial swap! atm assoc-in ks)
                        (partial reset! atm))
                      (async/tap g (async/chan 1 fresh-values)))
    atm)
  CompiledGraph
  (init [g] (:init (:output-signal g)))
  (spawn* [g opts]
    (let [events-channel (chan)
          events-mult (async/mult events-channel)
          mult-map (build-message-mult-map (:sorted-signals g) events-mult)]
      (-> g
          (->LiveChannelGraph events-channel mult-map)
          (connect-to-world opts))))
  (pipe-to-atom* [g atm ks]
    (pipe-to-atom* (spawn* g nil) atm ks))
  Signal
  (init [s] (:init s))
  (spawn* [s opts] (spawn* (compile-graph s) opts))
  (pipe-to-atom* [s atm ks]
    (pipe-to-atom* (spawn* s nil) atm ks)))

(defn spawn
  ([g] (spawn* g nil))
  ([g opts] (spawn* g opts)))

(defn pipe-to-atom
  ([x]
   (let [live-graph (spawn x)]
     (pipe-to-atom live-graph
                   (atom (init live-graph)
                         :meta {::source live-graph}))))
  ([x atm] (pipe-to-atom* x atm nil))
  ([x atm ks] (pipe-to-atom* x atm ks)))
