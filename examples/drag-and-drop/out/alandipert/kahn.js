// Compiled by ClojureScript 0.0-2356
goog.provide('alandipert.kahn');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');
/**
* Returns set s with x removed.
*/
alandipert.kahn.without = (function without(s,x){return clojure.set.difference.call(null,s,cljs.core.PersistentHashSet.fromArray([x], true));
});
/**
* Returns the pair [element, s'] where s' is set s with element removed.
*/
alandipert.kahn.take_1 = (function take_1(s){if(!(cljs.core.empty_QMARK_.call(null,s)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"s","s",-948495851,null))))))));
}
var item = cljs.core.first.call(null,s);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,alandipert.kahn.without.call(null,s,item)], null);
});
/**
* Returns the set of nodes in graph g for which there are no incoming
* edges, where g is a map of nodes to sets of nodes.
*/
alandipert.kahn.no_incoming = (function no_incoming(g){var nodes = cljs.core.set.call(null,cljs.core.keys.call(null,g));var have_incoming = cljs.core.apply.call(null,clojure.set.union,cljs.core.vals.call(null,g));return clojure.set.difference.call(null,nodes,have_incoming);
});
/**
* Returns g with empty outgoing edges added for nodes with incoming
* edges only.  Example: {:a #{:b}} => {:a #{:b}, :b #{}}
*/
alandipert.kahn.normalize = (function normalize(g){var have_incoming = cljs.core.apply.call(null,clojure.set.union,cljs.core.vals.call(null,g));return cljs.core.reduce.call(null,((function (have_incoming){
return (function (p1__38350_SHARP_,p2__38351_SHARP_){if(cljs.core.truth_(cljs.core.get.call(null,p1__38350_SHARP_,p2__38351_SHARP_)))
{return p1__38350_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__38350_SHARP_,p2__38351_SHARP_,cljs.core.PersistentHashSet.EMPTY);
}
});})(have_incoming))
,g,have_incoming);
});
/**
* Proposes a topological sort for directed graph g using Kahn's
* algorithm, where g is a map of nodes to sets of nodes. If g is
* cyclic, returns nil.
*/
alandipert.kahn.kahn_sort = (function() {
var kahn_sort = null;
var kahn_sort__1 = (function (g){return kahn_sort.call(null,alandipert.kahn.normalize.call(null,g),cljs.core.PersistentVector.EMPTY,alandipert.kahn.no_incoming.call(null,g));
});
var kahn_sort__3 = (function (g,l,s){while(true){
if(cljs.core.empty_QMARK_.call(null,s))
{if(cljs.core.every_QMARK_.call(null,cljs.core.empty_QMARK_,cljs.core.vals.call(null,g)))
{return l;
} else
{return null;
}
} else
{var vec__38355 = alandipert.kahn.take_1.call(null,s);var n = cljs.core.nth.call(null,vec__38355,(0),null);var s_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__38355,(1),null);var m = g.call(null,n);var g_SINGLEQUOTE_ = cljs.core.reduce.call(null,((function (g,l,s,vec__38355,n,s_SINGLEQUOTE_,m){
return (function (p1__38352_SHARP_,p2__38353_SHARP_){return cljs.core.update_in.call(null,p1__38352_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),alandipert.kahn.without,p2__38353_SHARP_);
});})(g,l,s,vec__38355,n,s_SINGLEQUOTE_,m))
,g,m);{
var G__38356 = g_SINGLEQUOTE_;
var G__38357 = cljs.core.conj.call(null,l,n);
var G__38358 = clojure.set.union.call(null,s_SINGLEQUOTE_,clojure.set.intersection.call(null,alandipert.kahn.no_incoming.call(null,g_SINGLEQUOTE_),m));
g = G__38356;
l = G__38357;
s = G__38358;
continue;
}
}
break;
}
});
kahn_sort = function(g,l,s){
switch(arguments.length){
case 1:
return kahn_sort__1.call(this,g);
case 3:
return kahn_sort__3.call(this,g,l,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kahn_sort.cljs$core$IFn$_invoke$arity$1 = kahn_sort__1;
kahn_sort.cljs$core$IFn$_invoke$arity$3 = kahn_sort__3;
return kahn_sort;
})()
;

//# sourceMappingURL=kahn.js.map