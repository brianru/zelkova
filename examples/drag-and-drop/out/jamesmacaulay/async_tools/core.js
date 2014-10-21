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
var concat__delegate = function (chs){var out = cljs.core.async.chan.call(null);var c__6478__auto___38597 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___38597,out){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___38597,out){
return (function (state_38572){var state_val_38573 = (state_38572[(1)]);if((state_val_38573 === (7)))
{var inst_38556 = (state_38572[(7)]);var inst_38556__$1 = (state_38572[(2)]);var inst_38557 = (inst_38556__$1 == null);var state_38572__$1 = (function (){var statearr_38574 = state_38572;(statearr_38574[(7)] = inst_38556__$1);
return statearr_38574;
})();if(cljs.core.truth_(inst_38557))
{var statearr_38575_38598 = state_38572__$1;(statearr_38575_38598[(1)] = (8));
} else
{var statearr_38576_38599 = state_38572__$1;(statearr_38576_38599[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38573 === (1)))
{var inst_38548 = chs;var state_38572__$1 = (function (){var statearr_38577 = state_38572;(statearr_38577[(8)] = inst_38548);
return statearr_38577;
})();var statearr_38578_38600 = state_38572__$1;(statearr_38578_38600[(2)] = null);
(statearr_38578_38600[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38573 === (4)))
{var inst_38553 = cljs.core.async.close_BANG_.call(null,out);var state_38572__$1 = state_38572;var statearr_38579_38601 = state_38572__$1;(statearr_38579_38601[(2)] = inst_38553);
(statearr_38579_38601[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38573 === (6)))
{var inst_38568 = (state_38572[(2)]);var state_38572__$1 = state_38572;var statearr_38580_38602 = state_38572__$1;(statearr_38580_38602[(2)] = inst_38568);
(statearr_38580_38602[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38573 === (3)))
{var inst_38570 = (state_38572[(2)]);var state_38572__$1 = state_38572;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38572__$1,inst_38570);
} else
{if((state_val_38573 === (2)))
{var inst_38548 = (state_38572[(8)]);var inst_38550 = (state_38572[(9)]);var inst_38550__$1 = cljs.core.first.call(null,inst_38548);var inst_38551 = (inst_38550__$1 == null);var state_38572__$1 = (function (){var statearr_38582 = state_38572;(statearr_38582[(9)] = inst_38550__$1);
return statearr_38582;
})();if(cljs.core.truth_(inst_38551))
{var statearr_38583_38603 = state_38572__$1;(statearr_38583_38603[(1)] = (4));
} else
{var statearr_38584_38604 = state_38572__$1;(statearr_38584_38604[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38573 === (11)))
{var inst_38548 = (state_38572[(8)]);var inst_38563 = (state_38572[(2)]);var tmp38581 = inst_38548;var inst_38548__$1 = tmp38581;var state_38572__$1 = (function (){var statearr_38585 = state_38572;(statearr_38585[(8)] = inst_38548__$1);
(statearr_38585[(10)] = inst_38563);
return statearr_38585;
})();var statearr_38586_38605 = state_38572__$1;(statearr_38586_38605[(2)] = null);
(statearr_38586_38605[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38573 === (9)))
{var inst_38556 = (state_38572[(7)]);var state_38572__$1 = state_38572;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38572__$1,(11),out,inst_38556);
} else
{if((state_val_38573 === (5)))
{var inst_38550 = (state_38572[(9)]);var state_38572__$1 = state_38572;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38572__$1,(7),inst_38550);
} else
{if((state_val_38573 === (10)))
{var inst_38566 = (state_38572[(2)]);var state_38572__$1 = state_38572;var statearr_38587_38606 = state_38572__$1;(statearr_38587_38606[(2)] = inst_38566);
(statearr_38587_38606[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38573 === (8)))
{var inst_38548 = (state_38572[(8)]);var inst_38559 = cljs.core.next.call(null,inst_38548);var inst_38548__$1 = inst_38559;var state_38572__$1 = (function (){var statearr_38588 = state_38572;(statearr_38588[(8)] = inst_38548__$1);
return statearr_38588;
})();var statearr_38589_38607 = state_38572__$1;(statearr_38589_38607[(2)] = null);
(statearr_38589_38607[(1)] = (2));
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
});})(c__6478__auto___38597,out))
;return ((function (switch__6463__auto__,c__6478__auto___38597,out){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_38593 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_38593[(0)] = state_machine__6464__auto__);
(statearr_38593[(1)] = (1));
return statearr_38593;
});
var state_machine__6464__auto____1 = (function (state_38572){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_38572);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e38594){if((e38594 instanceof Object))
{var ex__6467__auto__ = e38594;var statearr_38595_38608 = state_38572;(statearr_38595_38608[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38572);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38594;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38609 = state_38572;
state_38572 = G__38609;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_38572){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_38572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___38597,out))
})();var state__6480__auto__ = (function (){var statearr_38596 = f__6479__auto__.call(null);(statearr_38596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___38597);
return statearr_38596;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___38597,out))
);
return out;
};
var concat = function (var_args){
var chs = null;if (arguments.length > 0) {
  chs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return concat__delegate.call(this,chs);};
concat.cljs$lang$maxFixedArity = 0;
concat.cljs$lang$applyTo = (function (arglist__38610){
var chs = cljs.core.seq(arglist__38610);
return concat__delegate(chs);
});
concat.cljs$core$IFn$_invoke$arity$variadic = concat__delegate;
return concat;
})()
;
jamesmacaulay.async_tools.core.do_effects = (function do_effects(f_BANG_,ch){var c__6478__auto___38671 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___38671){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___38671){
return (function (state_38654){var state_val_38655 = (state_38654[(1)]);if((state_val_38655 === (7)))
{var inst_38650 = (state_38654[(2)]);var state_38654__$1 = state_38654;var statearr_38656_38672 = state_38654__$1;(statearr_38656_38672[(2)] = inst_38650);
(statearr_38656_38672[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38655 === (6)))
{var inst_38643 = (state_38654[(7)]);var inst_38647 = f_BANG_.call(null,inst_38643);var state_38654__$1 = (function (){var statearr_38657 = state_38654;(statearr_38657[(8)] = inst_38647);
return statearr_38657;
})();var statearr_38658_38673 = state_38654__$1;(statearr_38658_38673[(2)] = null);
(statearr_38658_38673[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38655 === (5)))
{var state_38654__$1 = state_38654;var statearr_38659_38674 = state_38654__$1;(statearr_38659_38674[(2)] = null);
(statearr_38659_38674[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38655 === (4)))
{var inst_38643 = (state_38654[(7)]);var inst_38643__$1 = (state_38654[(2)]);var inst_38644 = (inst_38643__$1 == null);var state_38654__$1 = (function (){var statearr_38660 = state_38654;(statearr_38660[(7)] = inst_38643__$1);
return statearr_38660;
})();if(cljs.core.truth_(inst_38644))
{var statearr_38661_38675 = state_38654__$1;(statearr_38661_38675[(1)] = (5));
} else
{var statearr_38662_38676 = state_38654__$1;(statearr_38662_38676[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38655 === (3)))
{var inst_38652 = (state_38654[(2)]);var state_38654__$1 = state_38654;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38654__$1,inst_38652);
} else
{if((state_val_38655 === (2)))
{var state_38654__$1 = state_38654;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38654__$1,(4),ch);
} else
{if((state_val_38655 === (1)))
{var state_38654__$1 = state_38654;var statearr_38663_38677 = state_38654__$1;(statearr_38663_38677[(2)] = null);
(statearr_38663_38677[(1)] = (2));
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
});})(c__6478__auto___38671))
;return ((function (switch__6463__auto__,c__6478__auto___38671){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_38667 = [null,null,null,null,null,null,null,null,null];(statearr_38667[(0)] = state_machine__6464__auto__);
(statearr_38667[(1)] = (1));
return statearr_38667;
});
var state_machine__6464__auto____1 = (function (state_38654){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_38654);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e38668){if((e38668 instanceof Object))
{var ex__6467__auto__ = e38668;var statearr_38669_38678 = state_38654;(statearr_38669_38678[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38654);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38668;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38679 = state_38654;
state_38654 = G__38679;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_38654){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_38654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___38671))
})();var state__6480__auto__ = (function (){var statearr_38670 = f__6479__auto__.call(null);(statearr_38670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___38671);
return statearr_38670;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___38671))
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
);var seq__38684_38688 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(state));var chunk__38685_38689 = null;var count__38686_38690 = (0);var i__38687_38691 = (0);while(true){
if((i__38687_38691 < count__38686_38690))
{var handler_38692 = cljs.core._nth.call(null,chunk__38685_38689,i__38687_38691);cljs.core.async.impl.protocols.commit.call(null,handler_38692).call(null,value);
{
var G__38693 = seq__38684_38688;
var G__38694 = chunk__38685_38689;
var G__38695 = count__38686_38690;
var G__38696 = (i__38687_38691 + (1));
seq__38684_38688 = G__38693;
chunk__38685_38689 = G__38694;
count__38686_38690 = G__38695;
i__38687_38691 = G__38696;
continue;
}
} else
{var temp__4222__auto___38697 = cljs.core.seq.call(null,seq__38684_38688);if(temp__4222__auto___38697)
{var seq__38684_38698__$1 = temp__4222__auto___38697;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38684_38698__$1))
{var c__4408__auto___38699 = cljs.core.chunk_first.call(null,seq__38684_38698__$1);{
var G__38700 = cljs.core.chunk_rest.call(null,seq__38684_38698__$1);
var G__38701 = c__4408__auto___38699;
var G__38702 = cljs.core.count.call(null,c__4408__auto___38699);
var G__38703 = (0);
seq__38684_38688 = G__38700;
chunk__38685_38689 = G__38701;
count__38686_38690 = G__38702;
i__38687_38691 = G__38703;
continue;
}
} else
{var handler_38704 = cljs.core.first.call(null,seq__38684_38698__$1);cljs.core.async.impl.protocols.commit.call(null,handler_38704).call(null,value);
{
var G__38705 = cljs.core.next.call(null,seq__38684_38698__$1);
var G__38706 = null;
var G__38707 = (0);
var G__38708 = (0);
seq__38684_38688 = G__38705;
chunk__38685_38689 = G__38706;
count__38686_38690 = G__38707;
i__38687_38691 = G__38708;
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
jamesmacaulay.async_tools.core.readport_QMARK_ = (function readport_QMARK_(x){var G__38710 = x;if(G__38710)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__38710.cljs$core$async$impl$protocols$ReadPort$;
}
})()))
{return true;
} else
{if((!G__38710.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,G__38710);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,G__38710);
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
return (function (state_38728){var state_val_38729 = (state_38728[(1)]);if((state_val_38729 === (2)))
{var inst_38725 = (state_38728[(2)]);var inst_38726 = cljs.core.first.call(null,inst_38725);var state_38728__$1 = state_38728;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38728__$1,inst_38726);
} else
{if((state_val_38729 === (1)))
{var state_38728__$1 = state_38728;return cljs.core.async.ioc_alts_BANG_.call(null,state_38728__$1,(2),xs);
} else
{return null;
}
}
});})(c__6478__auto__,non_readports))
;return ((function (switch__6463__auto__,c__6478__auto__,non_readports){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_38733 = [null,null,null,null,null,null,null];(statearr_38733[(0)] = state_machine__6464__auto__);
(statearr_38733[(1)] = (1));
return statearr_38733;
});
var state_machine__6464__auto____1 = (function (state_38728){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_38728);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e38734){if((e38734 instanceof Object))
{var ex__6467__auto__ = e38734;var statearr_38735_38737 = state_38728;(statearr_38735_38737[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38728);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38734;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38738 = state_38728;
state_38728 = G__38738;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_38728){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_38728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto__,non_readports))
})();var state__6480__auto__ = (function (){var statearr_38736 = f__6479__auto__.call(null);(statearr_38736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto__);
return statearr_38736;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto__,non_readports))
);
return c__6478__auto__;
})());
}
});

//# sourceMappingURL=core.js.map