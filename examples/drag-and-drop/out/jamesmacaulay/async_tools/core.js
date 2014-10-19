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
var concat__delegate = function (chs){var out = cljs.core.async.chan.call(null);var c__6478__auto___11186 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___11186,out){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___11186,out){
return (function (state_11161){var state_val_11162 = (state_11161[(1)]);if((state_val_11162 === (7)))
{var inst_11145 = (state_11161[(7)]);var inst_11145__$1 = (state_11161[(2)]);var inst_11146 = (inst_11145__$1 == null);var state_11161__$1 = (function (){var statearr_11163 = state_11161;(statearr_11163[(7)] = inst_11145__$1);
return statearr_11163;
})();if(cljs.core.truth_(inst_11146))
{var statearr_11164_11187 = state_11161__$1;(statearr_11164_11187[(1)] = (8));
} else
{var statearr_11165_11188 = state_11161__$1;(statearr_11165_11188[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11162 === (1)))
{var inst_11137 = chs;var state_11161__$1 = (function (){var statearr_11166 = state_11161;(statearr_11166[(8)] = inst_11137);
return statearr_11166;
})();var statearr_11167_11189 = state_11161__$1;(statearr_11167_11189[(2)] = null);
(statearr_11167_11189[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11162 === (4)))
{var inst_11142 = cljs.core.async.close_BANG_.call(null,out);var state_11161__$1 = state_11161;var statearr_11168_11190 = state_11161__$1;(statearr_11168_11190[(2)] = inst_11142);
(statearr_11168_11190[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11162 === (6)))
{var inst_11157 = (state_11161[(2)]);var state_11161__$1 = state_11161;var statearr_11169_11191 = state_11161__$1;(statearr_11169_11191[(2)] = inst_11157);
(statearr_11169_11191[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11162 === (3)))
{var inst_11159 = (state_11161[(2)]);var state_11161__$1 = state_11161;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11161__$1,inst_11159);
} else
{if((state_val_11162 === (2)))
{var inst_11137 = (state_11161[(8)]);var inst_11139 = (state_11161[(9)]);var inst_11139__$1 = cljs.core.first.call(null,inst_11137);var inst_11140 = (inst_11139__$1 == null);var state_11161__$1 = (function (){var statearr_11171 = state_11161;(statearr_11171[(9)] = inst_11139__$1);
return statearr_11171;
})();if(cljs.core.truth_(inst_11140))
{var statearr_11172_11192 = state_11161__$1;(statearr_11172_11192[(1)] = (4));
} else
{var statearr_11173_11193 = state_11161__$1;(statearr_11173_11193[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11162 === (11)))
{var inst_11137 = (state_11161[(8)]);var inst_11152 = (state_11161[(2)]);var tmp11170 = inst_11137;var inst_11137__$1 = tmp11170;var state_11161__$1 = (function (){var statearr_11174 = state_11161;(statearr_11174[(8)] = inst_11137__$1);
(statearr_11174[(10)] = inst_11152);
return statearr_11174;
})();var statearr_11175_11194 = state_11161__$1;(statearr_11175_11194[(2)] = null);
(statearr_11175_11194[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11162 === (9)))
{var inst_11145 = (state_11161[(7)]);var state_11161__$1 = state_11161;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11161__$1,(11),out,inst_11145);
} else
{if((state_val_11162 === (5)))
{var inst_11139 = (state_11161[(9)]);var state_11161__$1 = state_11161;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11161__$1,(7),inst_11139);
} else
{if((state_val_11162 === (10)))
{var inst_11155 = (state_11161[(2)]);var state_11161__$1 = state_11161;var statearr_11176_11195 = state_11161__$1;(statearr_11176_11195[(2)] = inst_11155);
(statearr_11176_11195[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11162 === (8)))
{var inst_11137 = (state_11161[(8)]);var inst_11148 = cljs.core.next.call(null,inst_11137);var inst_11137__$1 = inst_11148;var state_11161__$1 = (function (){var statearr_11177 = state_11161;(statearr_11177[(8)] = inst_11137__$1);
return statearr_11177;
})();var statearr_11178_11196 = state_11161__$1;(statearr_11178_11196[(2)] = null);
(statearr_11178_11196[(1)] = (2));
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
});})(c__6478__auto___11186,out))
;return ((function (switch__6463__auto__,c__6478__auto___11186,out){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_11182 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11182[(0)] = state_machine__6464__auto__);
(statearr_11182[(1)] = (1));
return statearr_11182;
});
var state_machine__6464__auto____1 = (function (state_11161){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_11161);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e11183){if((e11183 instanceof Object))
{var ex__6467__auto__ = e11183;var statearr_11184_11197 = state_11161;(statearr_11184_11197[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11161);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11183;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11198 = state_11161;
state_11161 = G__11198;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_11161){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_11161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___11186,out))
})();var state__6480__auto__ = (function (){var statearr_11185 = f__6479__auto__.call(null);(statearr_11185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___11186);
return statearr_11185;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___11186,out))
);
return out;
};
var concat = function (var_args){
var chs = null;if (arguments.length > 0) {
  chs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return concat__delegate.call(this,chs);};
concat.cljs$lang$maxFixedArity = 0;
concat.cljs$lang$applyTo = (function (arglist__11199){
var chs = cljs.core.seq(arglist__11199);
return concat__delegate(chs);
});
concat.cljs$core$IFn$_invoke$arity$variadic = concat__delegate;
return concat;
})()
;
jamesmacaulay.async_tools.core.do_effects = (function do_effects(f_BANG_,ch){var c__6478__auto___11260 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___11260){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___11260){
return (function (state_11243){var state_val_11244 = (state_11243[(1)]);if((state_val_11244 === (7)))
{var inst_11239 = (state_11243[(2)]);var state_11243__$1 = state_11243;var statearr_11245_11261 = state_11243__$1;(statearr_11245_11261[(2)] = inst_11239);
(statearr_11245_11261[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11244 === (6)))
{var inst_11232 = (state_11243[(7)]);var inst_11236 = f_BANG_.call(null,inst_11232);var state_11243__$1 = (function (){var statearr_11246 = state_11243;(statearr_11246[(8)] = inst_11236);
return statearr_11246;
})();var statearr_11247_11262 = state_11243__$1;(statearr_11247_11262[(2)] = null);
(statearr_11247_11262[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11244 === (5)))
{var state_11243__$1 = state_11243;var statearr_11248_11263 = state_11243__$1;(statearr_11248_11263[(2)] = null);
(statearr_11248_11263[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11244 === (4)))
{var inst_11232 = (state_11243[(7)]);var inst_11232__$1 = (state_11243[(2)]);var inst_11233 = (inst_11232__$1 == null);var state_11243__$1 = (function (){var statearr_11249 = state_11243;(statearr_11249[(7)] = inst_11232__$1);
return statearr_11249;
})();if(cljs.core.truth_(inst_11233))
{var statearr_11250_11264 = state_11243__$1;(statearr_11250_11264[(1)] = (5));
} else
{var statearr_11251_11265 = state_11243__$1;(statearr_11251_11265[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11244 === (3)))
{var inst_11241 = (state_11243[(2)]);var state_11243__$1 = state_11243;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11243__$1,inst_11241);
} else
{if((state_val_11244 === (2)))
{var state_11243__$1 = state_11243;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11243__$1,(4),ch);
} else
{if((state_val_11244 === (1)))
{var state_11243__$1 = state_11243;var statearr_11252_11266 = state_11243__$1;(statearr_11252_11266[(2)] = null);
(statearr_11252_11266[(1)] = (2));
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
});})(c__6478__auto___11260))
;return ((function (switch__6463__auto__,c__6478__auto___11260){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_11256 = [null,null,null,null,null,null,null,null,null];(statearr_11256[(0)] = state_machine__6464__auto__);
(statearr_11256[(1)] = (1));
return statearr_11256;
});
var state_machine__6464__auto____1 = (function (state_11243){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_11243);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e11257){if((e11257 instanceof Object))
{var ex__6467__auto__ = e11257;var statearr_11258_11267 = state_11243;(statearr_11258_11267[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11243);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11257;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11268 = state_11243;
state_11243 = G__11268;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_11243){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_11243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___11260))
})();var state__6480__auto__ = (function (){var statearr_11259 = f__6479__auto__.call(null);(statearr_11259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___11260);
return statearr_11259;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___11260))
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
);var seq__11273_11277 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(state));var chunk__11274_11278 = null;var count__11275_11279 = (0);var i__11276_11280 = (0);while(true){
if((i__11276_11280 < count__11275_11279))
{var handler_11281 = cljs.core._nth.call(null,chunk__11274_11278,i__11276_11280);cljs.core.async.impl.protocols.commit.call(null,handler_11281).call(null,value);
{
var G__11282 = seq__11273_11277;
var G__11283 = chunk__11274_11278;
var G__11284 = count__11275_11279;
var G__11285 = (i__11276_11280 + (1));
seq__11273_11277 = G__11282;
chunk__11274_11278 = G__11283;
count__11275_11279 = G__11284;
i__11276_11280 = G__11285;
continue;
}
} else
{var temp__4222__auto___11286 = cljs.core.seq.call(null,seq__11273_11277);if(temp__4222__auto___11286)
{var seq__11273_11287__$1 = temp__4222__auto___11286;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11273_11287__$1))
{var c__4408__auto___11288 = cljs.core.chunk_first.call(null,seq__11273_11287__$1);{
var G__11289 = cljs.core.chunk_rest.call(null,seq__11273_11287__$1);
var G__11290 = c__4408__auto___11288;
var G__11291 = cljs.core.count.call(null,c__4408__auto___11288);
var G__11292 = (0);
seq__11273_11277 = G__11289;
chunk__11274_11278 = G__11290;
count__11275_11279 = G__11291;
i__11276_11280 = G__11292;
continue;
}
} else
{var handler_11293 = cljs.core.first.call(null,seq__11273_11287__$1);cljs.core.async.impl.protocols.commit.call(null,handler_11293).call(null,value);
{
var G__11294 = cljs.core.next.call(null,seq__11273_11287__$1);
var G__11295 = null;
var G__11296 = (0);
var G__11297 = (0);
seq__11273_11277 = G__11294;
chunk__11274_11278 = G__11295;
count__11275_11279 = G__11296;
i__11276_11280 = G__11297;
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
jamesmacaulay.async_tools.core.readport_QMARK_ = (function readport_QMARK_(x){var G__11299 = x;if(G__11299)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__11299.cljs$core$async$impl$protocols$ReadPort$;
}
})()))
{return true;
} else
{if((!G__11299.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,G__11299);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,G__11299);
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
return (function (state_11317){var state_val_11318 = (state_11317[(1)]);if((state_val_11318 === (2)))
{var inst_11314 = (state_11317[(2)]);var inst_11315 = cljs.core.first.call(null,inst_11314);var state_11317__$1 = state_11317;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11317__$1,inst_11315);
} else
{if((state_val_11318 === (1)))
{var state_11317__$1 = state_11317;return cljs.core.async.ioc_alts_BANG_.call(null,state_11317__$1,(2),xs);
} else
{return null;
}
}
});})(c__6478__auto__,non_readports))
;return ((function (switch__6463__auto__,c__6478__auto__,non_readports){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_11322 = [null,null,null,null,null,null,null];(statearr_11322[(0)] = state_machine__6464__auto__);
(statearr_11322[(1)] = (1));
return statearr_11322;
});
var state_machine__6464__auto____1 = (function (state_11317){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_11317);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e11323){if((e11323 instanceof Object))
{var ex__6467__auto__ = e11323;var statearr_11324_11326 = state_11317;(statearr_11324_11326[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11317);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11323;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11327 = state_11317;
state_11317 = G__11327;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_11317){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_11317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto__,non_readports))
})();var state__6480__auto__ = (function (){var statearr_11325 = f__6479__auto__.call(null);(statearr_11325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto__);
return statearr_11325;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto__,non_readports))
);
return c__6478__auto__;
})());
}
});

//# sourceMappingURL=core.js.map