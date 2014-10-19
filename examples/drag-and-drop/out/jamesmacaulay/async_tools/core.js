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
var concat__delegate = function (chs){var out = cljs.core.async.chan.call(null);var c__6478__auto___30585 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___30585,out){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___30585,out){
return (function (state_30560){var state_val_30561 = (state_30560[(1)]);if((state_val_30561 === (7)))
{var inst_30544 = (state_30560[(7)]);var inst_30544__$1 = (state_30560[(2)]);var inst_30545 = (inst_30544__$1 == null);var state_30560__$1 = (function (){var statearr_30562 = state_30560;(statearr_30562[(7)] = inst_30544__$1);
return statearr_30562;
})();if(cljs.core.truth_(inst_30545))
{var statearr_30563_30586 = state_30560__$1;(statearr_30563_30586[(1)] = (8));
} else
{var statearr_30564_30587 = state_30560__$1;(statearr_30564_30587[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30561 === (1)))
{var inst_30536 = chs;var state_30560__$1 = (function (){var statearr_30565 = state_30560;(statearr_30565[(8)] = inst_30536);
return statearr_30565;
})();var statearr_30566_30588 = state_30560__$1;(statearr_30566_30588[(2)] = null);
(statearr_30566_30588[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30561 === (4)))
{var inst_30541 = cljs.core.async.close_BANG_.call(null,out);var state_30560__$1 = state_30560;var statearr_30567_30589 = state_30560__$1;(statearr_30567_30589[(2)] = inst_30541);
(statearr_30567_30589[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30561 === (6)))
{var inst_30556 = (state_30560[(2)]);var state_30560__$1 = state_30560;var statearr_30568_30590 = state_30560__$1;(statearr_30568_30590[(2)] = inst_30556);
(statearr_30568_30590[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30561 === (3)))
{var inst_30558 = (state_30560[(2)]);var state_30560__$1 = state_30560;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30560__$1,inst_30558);
} else
{if((state_val_30561 === (2)))
{var inst_30536 = (state_30560[(8)]);var inst_30538 = (state_30560[(9)]);var inst_30538__$1 = cljs.core.first.call(null,inst_30536);var inst_30539 = (inst_30538__$1 == null);var state_30560__$1 = (function (){var statearr_30570 = state_30560;(statearr_30570[(9)] = inst_30538__$1);
return statearr_30570;
})();if(cljs.core.truth_(inst_30539))
{var statearr_30571_30591 = state_30560__$1;(statearr_30571_30591[(1)] = (4));
} else
{var statearr_30572_30592 = state_30560__$1;(statearr_30572_30592[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30561 === (11)))
{var inst_30536 = (state_30560[(8)]);var inst_30551 = (state_30560[(2)]);var tmp30569 = inst_30536;var inst_30536__$1 = tmp30569;var state_30560__$1 = (function (){var statearr_30573 = state_30560;(statearr_30573[(10)] = inst_30551);
(statearr_30573[(8)] = inst_30536__$1);
return statearr_30573;
})();var statearr_30574_30593 = state_30560__$1;(statearr_30574_30593[(2)] = null);
(statearr_30574_30593[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30561 === (9)))
{var inst_30544 = (state_30560[(7)]);var state_30560__$1 = state_30560;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30560__$1,(11),out,inst_30544);
} else
{if((state_val_30561 === (5)))
{var inst_30538 = (state_30560[(9)]);var state_30560__$1 = state_30560;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30560__$1,(7),inst_30538);
} else
{if((state_val_30561 === (10)))
{var inst_30554 = (state_30560[(2)]);var state_30560__$1 = state_30560;var statearr_30575_30594 = state_30560__$1;(statearr_30575_30594[(2)] = inst_30554);
(statearr_30575_30594[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30561 === (8)))
{var inst_30536 = (state_30560[(8)]);var inst_30547 = cljs.core.next.call(null,inst_30536);var inst_30536__$1 = inst_30547;var state_30560__$1 = (function (){var statearr_30576 = state_30560;(statearr_30576[(8)] = inst_30536__$1);
return statearr_30576;
})();var statearr_30577_30595 = state_30560__$1;(statearr_30577_30595[(2)] = null);
(statearr_30577_30595[(1)] = (2));
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
});})(c__6478__auto___30585,out))
;return ((function (switch__6463__auto__,c__6478__auto___30585,out){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_30581 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_30581[(0)] = state_machine__6464__auto__);
(statearr_30581[(1)] = (1));
return statearr_30581;
});
var state_machine__6464__auto____1 = (function (state_30560){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_30560);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e30582){if((e30582 instanceof Object))
{var ex__6467__auto__ = e30582;var statearr_30583_30596 = state_30560;(statearr_30583_30596[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30560);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30582;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30597 = state_30560;
state_30560 = G__30597;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_30560){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_30560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___30585,out))
})();var state__6480__auto__ = (function (){var statearr_30584 = f__6479__auto__.call(null);(statearr_30584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___30585);
return statearr_30584;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___30585,out))
);
return out;
};
var concat = function (var_args){
var chs = null;if (arguments.length > 0) {
  chs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return concat__delegate.call(this,chs);};
concat.cljs$lang$maxFixedArity = 0;
concat.cljs$lang$applyTo = (function (arglist__30598){
var chs = cljs.core.seq(arglist__30598);
return concat__delegate(chs);
});
concat.cljs$core$IFn$_invoke$arity$variadic = concat__delegate;
return concat;
})()
;
jamesmacaulay.async_tools.core.do_effects = (function do_effects(f_BANG_,ch){var c__6478__auto___30659 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___30659){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___30659){
return (function (state_30642){var state_val_30643 = (state_30642[(1)]);if((state_val_30643 === (7)))
{var inst_30638 = (state_30642[(2)]);var state_30642__$1 = state_30642;var statearr_30644_30660 = state_30642__$1;(statearr_30644_30660[(2)] = inst_30638);
(statearr_30644_30660[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30643 === (6)))
{var inst_30631 = (state_30642[(7)]);var inst_30635 = f_BANG_.call(null,inst_30631);var state_30642__$1 = (function (){var statearr_30645 = state_30642;(statearr_30645[(8)] = inst_30635);
return statearr_30645;
})();var statearr_30646_30661 = state_30642__$1;(statearr_30646_30661[(2)] = null);
(statearr_30646_30661[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30643 === (5)))
{var state_30642__$1 = state_30642;var statearr_30647_30662 = state_30642__$1;(statearr_30647_30662[(2)] = null);
(statearr_30647_30662[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30643 === (4)))
{var inst_30631 = (state_30642[(7)]);var inst_30631__$1 = (state_30642[(2)]);var inst_30632 = (inst_30631__$1 == null);var state_30642__$1 = (function (){var statearr_30648 = state_30642;(statearr_30648[(7)] = inst_30631__$1);
return statearr_30648;
})();if(cljs.core.truth_(inst_30632))
{var statearr_30649_30663 = state_30642__$1;(statearr_30649_30663[(1)] = (5));
} else
{var statearr_30650_30664 = state_30642__$1;(statearr_30650_30664[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30643 === (3)))
{var inst_30640 = (state_30642[(2)]);var state_30642__$1 = state_30642;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30642__$1,inst_30640);
} else
{if((state_val_30643 === (2)))
{var state_30642__$1 = state_30642;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30642__$1,(4),ch);
} else
{if((state_val_30643 === (1)))
{var state_30642__$1 = state_30642;var statearr_30651_30665 = state_30642__$1;(statearr_30651_30665[(2)] = null);
(statearr_30651_30665[(1)] = (2));
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
});})(c__6478__auto___30659))
;return ((function (switch__6463__auto__,c__6478__auto___30659){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_30655 = [null,null,null,null,null,null,null,null,null];(statearr_30655[(0)] = state_machine__6464__auto__);
(statearr_30655[(1)] = (1));
return statearr_30655;
});
var state_machine__6464__auto____1 = (function (state_30642){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_30642);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e30656){if((e30656 instanceof Object))
{var ex__6467__auto__ = e30656;var statearr_30657_30666 = state_30642;(statearr_30657_30666[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30642);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30656;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30667 = state_30642;
state_30642 = G__30667;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_30642){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_30642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___30659))
})();var state__6480__auto__ = (function (){var statearr_30658 = f__6479__auto__.call(null);(statearr_30658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___30659);
return statearr_30658;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___30659))
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
);var seq__30672_30676 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(state));var chunk__30673_30677 = null;var count__30674_30678 = (0);var i__30675_30679 = (0);while(true){
if((i__30675_30679 < count__30674_30678))
{var handler_30680 = cljs.core._nth.call(null,chunk__30673_30677,i__30675_30679);cljs.core.async.impl.protocols.commit.call(null,handler_30680).call(null,value);
{
var G__30681 = seq__30672_30676;
var G__30682 = chunk__30673_30677;
var G__30683 = count__30674_30678;
var G__30684 = (i__30675_30679 + (1));
seq__30672_30676 = G__30681;
chunk__30673_30677 = G__30682;
count__30674_30678 = G__30683;
i__30675_30679 = G__30684;
continue;
}
} else
{var temp__4222__auto___30685 = cljs.core.seq.call(null,seq__30672_30676);if(temp__4222__auto___30685)
{var seq__30672_30686__$1 = temp__4222__auto___30685;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30672_30686__$1))
{var c__4408__auto___30687 = cljs.core.chunk_first.call(null,seq__30672_30686__$1);{
var G__30688 = cljs.core.chunk_rest.call(null,seq__30672_30686__$1);
var G__30689 = c__4408__auto___30687;
var G__30690 = cljs.core.count.call(null,c__4408__auto___30687);
var G__30691 = (0);
seq__30672_30676 = G__30688;
chunk__30673_30677 = G__30689;
count__30674_30678 = G__30690;
i__30675_30679 = G__30691;
continue;
}
} else
{var handler_30692 = cljs.core.first.call(null,seq__30672_30686__$1);cljs.core.async.impl.protocols.commit.call(null,handler_30692).call(null,value);
{
var G__30693 = cljs.core.next.call(null,seq__30672_30686__$1);
var G__30694 = null;
var G__30695 = (0);
var G__30696 = (0);
seq__30672_30676 = G__30693;
chunk__30673_30677 = G__30694;
count__30674_30678 = G__30695;
i__30675_30679 = G__30696;
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
jamesmacaulay.async_tools.core.readport_QMARK_ = (function readport_QMARK_(x){var G__30698 = x;if(G__30698)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__30698.cljs$core$async$impl$protocols$ReadPort$;
}
})()))
{return true;
} else
{if((!G__30698.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,G__30698);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,G__30698);
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
return (function (state_30716){var state_val_30717 = (state_30716[(1)]);if((state_val_30717 === (2)))
{var inst_30713 = (state_30716[(2)]);var inst_30714 = cljs.core.first.call(null,inst_30713);var state_30716__$1 = state_30716;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30716__$1,inst_30714);
} else
{if((state_val_30717 === (1)))
{var state_30716__$1 = state_30716;return cljs.core.async.ioc_alts_BANG_.call(null,state_30716__$1,(2),xs);
} else
{return null;
}
}
});})(c__6478__auto__,non_readports))
;return ((function (switch__6463__auto__,c__6478__auto__,non_readports){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_30721 = [null,null,null,null,null,null,null];(statearr_30721[(0)] = state_machine__6464__auto__);
(statearr_30721[(1)] = (1));
return statearr_30721;
});
var state_machine__6464__auto____1 = (function (state_30716){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_30716);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e30722){if((e30722 instanceof Object))
{var ex__6467__auto__ = e30722;var statearr_30723_30725 = state_30716;(statearr_30723_30725[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30716);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30722;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30726 = state_30716;
state_30716 = G__30726;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_30716){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_30716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto__,non_readports))
})();var state__6480__auto__ = (function (){var statearr_30724 = f__6479__auto__.call(null);(statearr_30724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto__);
return statearr_30724;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto__,non_readports))
);
return c__6478__auto__;
})());
}
});

//# sourceMappingURL=core.js.map