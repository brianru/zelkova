// Compiled by ClojureScript 0.0-2356
goog.provide('jamesmacaulay.zelkova.mouse');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
goog.require('jamesmacaulay.zelkova.signal');
goog.require('jamesmacaulay.zelkova.signal');
/**
* @param {...*} var_args
*/
jamesmacaulay.zelkova.mouse.listen = (function() { 
var listen__delegate = function (el,type,args){var out = cljs.core.apply.call(null,cljs.core.async.chan,(1),args);goog.events.listen(el,type,((function (out){
return (function (e){return cljs.core.async.put_BANG_.call(null,out,e);
});})(out))
);
return out;
};
var listen = function (el,type,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return listen__delegate.call(this,el,type,args);};
listen.cljs$lang$maxFixedArity = 2;
listen.cljs$lang$applyTo = (function (arglist__38816){
var el = cljs.core.first(arglist__38816);
arglist__38816 = cljs.core.next(arglist__38816);
var type = cljs.core.first(arglist__38816);
var args = cljs.core.rest(arglist__38816);
return listen__delegate(el,type,args);
});
listen.cljs$core$IFn$_invoke$arity$variadic = listen__delegate;
return listen;
})()
;
jamesmacaulay.zelkova.mouse.position_channel = (function position_channel(graph,opts){return jamesmacaulay.zelkova.mouse.listen.call(null,document,"mousemove",cljs.core.map.call(null,(function (e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.event_.pageX,e.event_.pageY], null);
})));
});
jamesmacaulay.zelkova.mouse.position = jamesmacaulay.zelkova.signal.input.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword("jamesmacaulay.zelkova.mouse","position","jamesmacaulay.zelkova.mouse/position",-1580821834),jamesmacaulay.zelkova.mouse.position_channel);
jamesmacaulay.zelkova.mouse.x = jamesmacaulay.zelkova.signal.lift.call(null,cljs.core.first,jamesmacaulay.zelkova.mouse.position);
jamesmacaulay.zelkova.mouse.y = jamesmacaulay.zelkova.signal.lift.call(null,cljs.core.second,jamesmacaulay.zelkova.mouse.position);
jamesmacaulay.zelkova.mouse.clicks_channel = (function clicks_channel(graph,opts){return jamesmacaulay.zelkova.mouse.listen.call(null,document,"click",cljs.core.map.call(null,cljs.core.constantly.call(null,new cljs.core.Keyword(null,"click","click",1912301393))));
});
jamesmacaulay.zelkova.mouse.clicks = jamesmacaulay.zelkova.signal.input.call(null,new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword("jamesmacaulay.zelkova.mouse","clicks","jamesmacaulay.zelkova.mouse/clicks",-630111803),jamesmacaulay.zelkova.mouse.clicks_channel);
jamesmacaulay.zelkova.mouse.down_QMARK__channel = (function down_QMARK__channel(graph,opts){var down_events = jamesmacaulay.zelkova.mouse.listen.call(null,document,"mousedown",cljs.core.map.call(null,cljs.core.constantly.call(null,true)));var up_events = jamesmacaulay.zelkova.mouse.listen.call(null,document,"mouseup",cljs.core.map.call(null,cljs.core.constantly.call(null,false)));return cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [down_events,up_events], null));
});
jamesmacaulay.zelkova.mouse.down_QMARK_ = jamesmacaulay.zelkova.signal.input.call(null,false,new cljs.core.Keyword("jamesmacaulay.zelkova.mouse","down?","jamesmacaulay.zelkova.mouse/down?",1268016359),jamesmacaulay.zelkova.mouse.down_QMARK__channel);

//# sourceMappingURL=mouse.js.map