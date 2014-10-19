// Compiled by ClojureScript 0.0-2356
goog.provide('jamesmacaulay.async_tools.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
/**
* @param {...*} var_args
*/
jamesmacaulay.async_tools.core.concat = (function() { 
var concat__delegate = function (chs){var out = cljs.core.async.chan.call(null);var c__6478__auto___24377 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___24377,out){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___24377,out){
return (function (state_24352){var state_val_24353 = (state_24352[(1)]);if((state_val_24353 === (7)))
{var inst_24336 = (state_24352[(7)]);var inst_24336__$1 = (state_24352[(2)]);var inst_24337 = (inst_24336__$1 == null);var state_24352__$1 = (function (){var statearr_24354 = state_24352;(statearr_24354[(7)] = inst_24336__$1);
return statearr_24354;
})();if(cljs.core.truth_(inst_24337))
{var statearr_24355_24378 = state_24352__$1;(statearr_24355_24378[(1)] = (8));
} else
{var statearr_24356_24379 = state_24352__$1;(statearr_24356_24379[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24353 === (1)))
{var inst_24328 = chs;var state_24352__$1 = (function (){var statearr_24357 = state_24352;(statearr_24357[(8)] = inst_24328);
return statearr_24357;
})();var statearr_24358_24380 = state_24352__$1;(statearr_24358_24380[(2)] = null);
(statearr_24358_24380[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24353 === (4)))
{var inst_24333 = cljs.core.async.close_BANG_.call(null,out);var state_24352__$1 = state_24352;var statearr_24359_24381 = state_24352__$1;(statearr_24359_24381[(2)] = inst_24333);
(statearr_24359_24381[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24353 === (6)))
{var inst_24348 = (state_24352[(2)]);var state_24352__$1 = state_24352;var statearr_24360_24382 = state_24352__$1;(statearr_24360_24382[(2)] = inst_24348);
(statearr_24360_24382[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24353 === (3)))
{var inst_24350 = (state_24352[(2)]);var state_24352__$1 = state_24352;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24352__$1,inst_24350);
} else
{if((state_val_24353 === (2)))
{var inst_24328 = (state_24352[(8)]);var inst_24330 = (state_24352[(9)]);var inst_24330__$1 = cljs.core.first.call(null,inst_24328);var inst_24331 = (inst_24330__$1 == null);var state_24352__$1 = (function (){var statearr_24362 = state_24352;(statearr_24362[(9)] = inst_24330__$1);
return statearr_24362;
})();if(cljs.core.truth_(inst_24331))
{var statearr_24363_24383 = state_24352__$1;(statearr_24363_24383[(1)] = (4));
} else
{var statearr_24364_24384 = state_24352__$1;(statearr_24364_24384[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24353 === (11)))
{var inst_24328 = (state_24352[(8)]);var inst_24343 = (state_24352[(2)]);var tmp24361 = inst_24328;var inst_24328__$1 = tmp24361;var state_24352__$1 = (function (){var statearr_24365 = state_24352;(statearr_24365[(10)] = inst_24343);
(statearr_24365[(8)] = inst_24328__$1);
return statearr_24365;
})();var statearr_24366_24385 = state_24352__$1;(statearr_24366_24385[(2)] = null);
(statearr_24366_24385[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24353 === (9)))
{var inst_24336 = (state_24352[(7)]);var state_24352__$1 = state_24352;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24352__$1,(11),out,inst_24336);
} else
{if((state_val_24353 === (5)))
{var inst_24330 = (state_24352[(9)]);var state_24352__$1 = state_24352;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24352__$1,(7),inst_24330);
} else
{if((state_val_24353 === (10)))
{var inst_24346 = (state_24352[(2)]);var state_24352__$1 = state_24352;var statearr_24367_24386 = state_24352__$1;(statearr_24367_24386[(2)] = inst_24346);
(statearr_24367_24386[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24353 === (8)))
{var inst_24328 = (state_24352[(8)]);var inst_24339 = cljs.core.next.call(null,inst_24328);var inst_24328__$1 = inst_24339;var state_24352__$1 = (function (){var statearr_24368 = state_24352;(statearr_24368[(8)] = inst_24328__$1);
return statearr_24368;
})();var statearr_24369_24387 = state_24352__$1;(statearr_24369_24387[(2)] = null);
(statearr_24369_24387[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6478__auto___24377,out))
;return ((function (switch__6463__auto__,c__6478__auto___24377,out){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_24373 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24373[(0)] = state_machine__6464__auto__);
(statearr_24373[(1)] = (1));
return statearr_24373;
});
var state_machine__6464__auto____1 = (function (state_24352){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_24352);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e24374){if((e24374 instanceof Object))
{var ex__6467__auto__ = e24374;var statearr_24375_24388 = state_24352;(statearr_24375_24388[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24352);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24374;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24389 = state_24352;
state_24352 = G__24389;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_24352){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_24352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___24377,out))
})();var state__6480__auto__ = (function (){var statearr_24376 = f__6479__auto__.call(null);(statearr_24376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___24377);
return statearr_24376;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___24377,out))
);
return out;
};
var concat = function (var_args){
var chs = null;if (arguments.length > 0) {
  chs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return concat__delegate.call(this,chs);};
concat.cljs$lang$maxFixedArity = 0;
concat.cljs$lang$applyTo = (function (arglist__24390){
var chs = cljs.core.seq(arglist__24390);
return concat__delegate(chs);
});
concat.cljs$core$IFn$_invoke$arity$variadic = concat__delegate;
return concat;
})()
;
jamesmacaulay.async_tools.core.do_effects = (function do_effects(f_BANG_,ch){var c__6478__auto___24451 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___24451){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___24451){
return (function (state_24434){var state_val_24435 = (state_24434[(1)]);if((state_val_24435 === (7)))
{var inst_24430 = (state_24434[(2)]);var state_24434__$1 = state_24434;var statearr_24436_24452 = state_24434__$1;(statearr_24436_24452[(2)] = inst_24430);
(statearr_24436_24452[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24435 === (6)))
{var inst_24423 = (state_24434[(7)]);var inst_24427 = f_BANG_.call(null,inst_24423);var state_24434__$1 = (function (){var statearr_24437 = state_24434;(statearr_24437[(8)] = inst_24427);
return statearr_24437;
})();var statearr_24438_24453 = state_24434__$1;(statearr_24438_24453[(2)] = null);
(statearr_24438_24453[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24435 === (5)))
{var state_24434__$1 = state_24434;var statearr_24439_24454 = state_24434__$1;(statearr_24439_24454[(2)] = null);
(statearr_24439_24454[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24435 === (4)))
{var inst_24423 = (state_24434[(7)]);var inst_24423__$1 = (state_24434[(2)]);var inst_24424 = (inst_24423__$1 == null);var state_24434__$1 = (function (){var statearr_24440 = state_24434;(statearr_24440[(7)] = inst_24423__$1);
return statearr_24440;
})();if(cljs.core.truth_(inst_24424))
{var statearr_24441_24455 = state_24434__$1;(statearr_24441_24455[(1)] = (5));
} else
{var statearr_24442_24456 = state_24434__$1;(statearr_24442_24456[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24435 === (3)))
{var inst_24432 = (state_24434[(2)]);var state_24434__$1 = state_24434;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24434__$1,inst_24432);
} else
{if((state_val_24435 === (2)))
{var state_24434__$1 = state_24434;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24434__$1,(4),ch);
} else
{if((state_val_24435 === (1)))
{var state_24434__$1 = state_24434;var statearr_24443_24457 = state_24434__$1;(statearr_24443_24457[(2)] = null);
(statearr_24443_24457[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6478__auto___24451))
;return ((function (switch__6463__auto__,c__6478__auto___24451){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_24447 = [null,null,null,null,null,null,null,null,null];(statearr_24447[(0)] = state_machine__6464__auto__);
(statearr_24447[(1)] = (1));
return statearr_24447;
});
var state_machine__6464__auto____1 = (function (state_24434){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_24434);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e24448){if((e24448 instanceof Object))
{var ex__6467__auto__ = e24448;var statearr_24449_24458 = state_24434;(statearr_24449_24458[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24434);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24448;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24459 = state_24434;
state_24434 = G__24459;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_24434){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_24434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___24451))
})();var state__6480__auto__ = (function (){var statearr_24450 = f__6479__auto__.call(null);(statearr_24450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___24451);
return statearr_24450;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___24451))
);
return ch;
});
jamesmacaulay.async_tools.core.log_mult = (function log_mult(mult){return jamesmacaulay.async_tools.core.do_effects.call(null,cljs.core.println,cljs.core.async.tap.call(null,mult,cljs.core.async.chan.call(null)));
});
jamesmacaulay.async_tools.core.log_channel = (function log_channel(ch){return cljs.core.async.map.call(null,(function (x){cljs.core.println.call(null,x);
return x;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch], null));
});

/**
* @constructor
*/
jamesmacaulay.async_tools.core.ConstantReadPort = (function (boxed_value){
this.boxed_value = boxed_value;
})
jamesmacaulay.async_tools.core.ConstantReadPort.cljs$lang$type = true;
jamesmacaulay.async_tools.core.ConstantReadPort.cljs$lang$ctorStr = "jamesmacaulay.async-tools.core/ConstantReadPort";
jamesmacaulay.async_tools.core.ConstantReadPort.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"jamesmacaulay.async-tools.core/ConstantReadPort");
});
jamesmacaulay.async_tools.core.ConstantReadPort.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
jamesmacaulay.async_tools.core.ConstantReadPort.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return self__.boxed_value;
});
jamesmacaulay.async_tools.core.__GT_ConstantReadPort = (function __GT_ConstantReadPort(boxed_value){return (new jamesmacaulay.async_tools.core.ConstantReadPort(boxed_value));
});
jamesmacaulay.async_tools.core.constant = (function constant(x){return (new jamesmacaulay.async_tools.core.ConstantReadPort(cljs.core.async.impl.channels.box.call(null,x)));
});

/**
* @constructor
*/
jamesmacaulay.async_tools.core.AsyncFuture = (function (state_atom){
this.state_atom = state_atom;
})
jamesmacaulay.async_tools.core.AsyncFuture.cljs$lang$type = true;
jamesmacaulay.async_tools.core.AsyncFuture.cljs$lang$ctorStr = "jamesmacaulay.async-tools.core/AsyncFuture";
jamesmacaulay.async_tools.core.AsyncFuture.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"jamesmacaulay.async-tools.core/AsyncFuture");
});
jamesmacaulay.async_tools.core.AsyncFuture.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
jamesmacaulay.async_tools.core.AsyncFuture.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,handler){var self__ = this;
var ___$1 = this;return new cljs.core.Keyword(null,"boxed-value","boxed-value",-1089054597).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,self__.state_atom,((function (___$1){
return (function (state){if((new cljs.core.Keyword(null,"boxed-value","boxed-value",-1089054597).cljs$core$IFn$_invoke$arity$1(state) == null))
{return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781)], null),cljs.core.conj,handler);
} else
{return state;
}
});})(___$1))
));
});
jamesmacaulay.async_tools.core.__GT_AsyncFuture = (function __GT_AsyncFuture(state_atom){return (new jamesmacaulay.async_tools.core.AsyncFuture(state_atom));
});
jamesmacaulay.async_tools.core.async_future_state_atom = (function async_future_state_atom(f){var state_atom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boxed-value","boxed-value",-1089054597),null,new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.PersistentVector.EMPTY], null));var resolve_BANG_ = ((function (state_atom){
return (function (value){var state = cljs.core.swap_BANG_.call(null,state_atom,((function (state_atom){
return (function (state){if((new cljs.core.Keyword(null,"boxed-value","boxed-value",-1089054597).cljs$core$IFn$_invoke$arity$1(state) == null))
{} else
{throw cljs.core.ex_info.call(null,"Can't call an async-future's `resolve!` function more than once.",cljs.core.PersistentArrayMap.EMPTY);
}
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"boxed-value","boxed-value",-1089054597),cljs.core.async.impl.channels.box.call(null,value));
});})(state_atom))
);var seq__24464_24468 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(state));var chunk__24465_24469 = null;var count__24466_24470 = (0);var i__24467_24471 = (0);while(true){
if((i__24467_24471 < count__24466_24470))
{var handler_24472 = cljs.core._nth.call(null,chunk__24465_24469,i__24467_24471);cljs.core.async.impl.protocols.commit.call(null,handler_24472).call(null,value);
{
var G__24473 = seq__24464_24468;
var G__24474 = chunk__24465_24469;
var G__24475 = count__24466_24470;
var G__24476 = (i__24467_24471 + (1));
seq__24464_24468 = G__24473;
chunk__24465_24469 = G__24474;
count__24466_24470 = G__24475;
i__24467_24471 = G__24476;
continue;
}
} else
{var temp__4222__auto___24477 = cljs.core.seq.call(null,seq__24464_24468);if(temp__4222__auto___24477)
{var seq__24464_24478__$1 = temp__4222__auto___24477;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24464_24478__$1))
{var c__4408__auto___24479 = cljs.core.chunk_first.call(null,seq__24464_24478__$1);{
var G__24480 = cljs.core.chunk_rest.call(null,seq__24464_24478__$1);
var G__24481 = c__4408__auto___24479;
var G__24482 = cljs.core.count.call(null,c__4408__auto___24479);
var G__24483 = (0);
seq__24464_24468 = G__24480;
chunk__24465_24469 = G__24481;
count__24466_24470 = G__24482;
i__24467_24471 = G__24483;
continue;
}
} else
{var handler_24484 = cljs.core.first.call(null,seq__24464_24478__$1);cljs.core.async.impl.protocols.commit.call(null,handler_24484).call(null,value);
{
var G__24485 = cljs.core.next.call(null,seq__24464_24478__$1);
var G__24486 = null;
var G__24487 = (0);
var G__24488 = (0);
seq__24464_24468 = G__24485;
chunk__24465_24469 = G__24486;
count__24466_24470 = G__24487;
i__24467_24471 = G__24488;
continue;
}
}
} else
{}
}
break;
}
cljs.core.swap_BANG_.call(null,state_atom,cljs.core.dissoc,new cljs.core.Keyword(null,"handlers","handlers",79528781));
return null;
});})(state_atom))
;f.call(null,resolve_BANG_);
return state_atom;
});
jamesmacaulay.async_tools.core.async_future_STAR_ = (function async_future_STAR_(f){return (new jamesmacaulay.async_tools.core.AsyncFuture(jamesmacaulay.async_tools.core.async_future_state_atom.call(null,f)));
});
jamesmacaulay.async_tools.core.async_future_LT_ = (function async_future_LT_(ch){return jamesmacaulay.async_tools.core.async_future_STAR_.call(null,cljs.core.partial.call(null,cljs.core.async.take_BANG_,ch));
});
jamesmacaulay.async_tools.core.readport_QMARK_ = (function readport_QMARK_(x){var G__24490 = x;if(G__24490)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__24490.cljs$core$async$impl$protocols$ReadPort$;
}
})()))
{return true;
} else
{if((!G__24490.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,G__24490);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,G__24490);
}
});
jamesmacaulay.async_tools.core.cast_as_readport = (function cast_as_readport(x){if(jamesmacaulay.async_tools.core.readport_QMARK_.call(null,x))
{return x;
} else
{return jamesmacaulay.async_tools.core.constant.call(null,x);
}
});
jamesmacaulay.async_tools.core.then_LT_ = (function then_LT_(f,ch){return jamesmacaulay.async_tools.core.async_future_STAR_.call(null,(function (cb){return cljs.core.async.take_BANG_.call(null,ch,cljs.core.comp.call(null,cb,f));
}));
});
jamesmacaulay.async_tools.core.all_LT_ = (function all_LT_(xs){return jamesmacaulay.async_tools.core.async_future_LT_.call(null,cljs.core.async.map.call(null,cljs.core.list,cljs.core.map.call(null,jamesmacaulay.async_tools.core.cast_as_readport,xs)));
});
jamesmacaulay.async_tools.core.race_LT_ = (function race_LT_(xs){var non_readports = cljs.core.remove.call(null,jamesmacaulay.async_tools.core.readport_QMARK_,xs);if(cljs.core.seq.call(null,non_readports))
{return jamesmacaulay.async_tools.core.constant.call(null,cljs.core.first.call(null,non_readports));
} else
{return jamesmacaulay.async_tools.core.async_future_LT_.call(null,(function (){var c__6478__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto__,non_readports){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto__,non_readports){
return (function (state_24508){var state_val_24509 = (state_24508[(1)]);if((state_val_24509 === (2)))
{var inst_24505 = (state_24508[(2)]);var inst_24506 = cljs.core.first.call(null,inst_24505);var state_24508__$1 = state_24508;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24508__$1,inst_24506);
} else
{if((state_val_24509 === (1)))
{var state_24508__$1 = state_24508;return cljs.core.async.ioc_alts_BANG_.call(null,state_24508__$1,(2),xs);
} else
{return null;
}
}
});})(c__6478__auto__,non_readports))
;return ((function (switch__6463__auto__,c__6478__auto__,non_readports){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_24513 = [null,null,null,null,null,null,null];(statearr_24513[(0)] = state_machine__6464__auto__);
(statearr_24513[(1)] = (1));
return statearr_24513;
});
var state_machine__6464__auto____1 = (function (state_24508){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_24508);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e24514){if((e24514 instanceof Object))
{var ex__6467__auto__ = e24514;var statearr_24515_24517 = state_24508;(statearr_24515_24517[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24508);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24514;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24518 = state_24508;
state_24508 = G__24518;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_24508){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_24508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto__,non_readports))
})();var state__6480__auto__ = (function (){var statearr_24516 = f__6479__auto__.call(null);(statearr_24516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto__);
return statearr_24516;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto__,non_readports))
);
return c__6478__auto__;
})());
}
});

//# sourceMappingURL=core.js.map