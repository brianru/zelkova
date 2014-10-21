// Compiled by ClojureScript 0.0-2356
goog.provide('jamesmacaulay.zelkova.time');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('jamesmacaulay.zelkova.signal');
goog.require('jamesmacaulay.zelkova.signal');
jamesmacaulay.zelkova.time.now = (function now(){return (new Date()).valueOf();
});
jamesmacaulay.zelkova.time.millisecond = (1);
jamesmacaulay.zelkova.time.second = (1000);
jamesmacaulay.zelkova.time.minute = ((60) * jamesmacaulay.zelkova.time.second);
jamesmacaulay.zelkova.time.hour = ((60) * jamesmacaulay.zelkova.time.minute);
jamesmacaulay.zelkova.time.in_milliseconds = (function in_milliseconds(n){return (n / jamesmacaulay.zelkova.time.millisecond);
});
jamesmacaulay.zelkova.time.in_seconds = (function in_seconds(n){return (n / jamesmacaulay.zelkova.time.second);
});
jamesmacaulay.zelkova.time.in_minutes = (function in_minutes(n){return (n / jamesmacaulay.zelkova.time.minute);
});
jamesmacaulay.zelkova.time.in_hours = (function in_hours(n){return (n / jamesmacaulay.zelkova.time.hour);
});
jamesmacaulay.zelkova.time.fps_channel_fn = (function fps_channel_fn(n){return (function (graph,opts){var ms_per_frame = ((1000) / n);var out = cljs.core.async.chan.call(null);var c__6478__auto___39067 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___39067,ms_per_frame,out){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___39067,ms_per_frame,out){
return (function (state_39053){var state_val_39054 = (state_39053[(1)]);if((state_val_39054 === (5)))
{var inst_39035 = (state_39053[(7)]);var inst_39036 = (state_39053[(8)]);var inst_39042 = (state_39053[(9)]);var inst_39045 = (state_39053[(2)]);var inst_39046 = (inst_39042 - inst_39035);var inst_39047 = (inst_39046 - ms_per_frame);var inst_39048 = (inst_39036 + inst_39047);var inst_39035__$1 = inst_39042;var inst_39036__$1 = inst_39048;var state_39053__$1 = (function (){var statearr_39055 = state_39053;(statearr_39055[(7)] = inst_39035__$1);
(statearr_39055[(10)] = inst_39045);
(statearr_39055[(8)] = inst_39036__$1);
return statearr_39055;
})();var statearr_39056_39068 = state_39053__$1;(statearr_39056_39068[(2)] = null);
(statearr_39056_39068[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39054 === (4)))
{var inst_39035 = (state_39053[(7)]);var inst_39042 = (state_39053[(9)]);var inst_39041 = (state_39053[(2)]);var inst_39042__$1 = jamesmacaulay.zelkova.time.now.call(null);var inst_39043 = (inst_39042__$1 - inst_39035);var state_39053__$1 = (function (){var statearr_39057 = state_39053;(statearr_39057[(11)] = inst_39041);
(statearr_39057[(9)] = inst_39042__$1);
return statearr_39057;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39053__$1,(5),out,inst_39043);
} else
{if((state_val_39054 === (3)))
{var inst_39051 = (state_39053[(2)]);var state_39053__$1 = state_39053;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39053__$1,inst_39051);
} else
{if((state_val_39054 === (2)))
{var inst_39036 = (state_39053[(8)]);var inst_39038 = (ms_per_frame - inst_39036);var inst_39039 = cljs.core.async.timeout.call(null,inst_39038);var state_39053__$1 = state_39053;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39053__$1,(4),inst_39039);
} else
{if((state_val_39054 === (1)))
{var inst_39034 = jamesmacaulay.zelkova.time.now.call(null);var inst_39035 = inst_39034;var inst_39036 = (0);var state_39053__$1 = (function (){var statearr_39058 = state_39053;(statearr_39058[(7)] = inst_39035);
(statearr_39058[(8)] = inst_39036);
return statearr_39058;
})();var statearr_39059_39069 = state_39053__$1;(statearr_39059_39069[(2)] = null);
(statearr_39059_39069[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6478__auto___39067,ms_per_frame,out))
;return ((function (switch__6463__auto__,c__6478__auto___39067,ms_per_frame,out){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_39063 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39063[(0)] = state_machine__6464__auto__);
(statearr_39063[(1)] = (1));
return statearr_39063;
});
var state_machine__6464__auto____1 = (function (state_39053){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_39053);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e39064){if((e39064 instanceof Object))
{var ex__6467__auto__ = e39064;var statearr_39065_39070 = state_39053;(statearr_39065_39070[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39053);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e39064;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__39071 = state_39053;
state_39053 = G__39071;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_39053){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_39053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___39067,ms_per_frame,out))
})();var state__6480__auto__ = (function (){var statearr_39066 = f__6479__auto__.call(null);(statearr_39066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___39067);
return statearr_39066;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___39067,ms_per_frame,out))
);
return out;
});
});
jamesmacaulay.zelkova.time.fps = (function fps(n){return jamesmacaulay.zelkova.signal.input.call(null,(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jamesmacaulay.zelkova.time","fps","jamesmacaulay.zelkova.time/fps",2069466524),n], null),jamesmacaulay.zelkova.time.fps_channel_fn.call(null,n));
});
jamesmacaulay.zelkova.time.every_channel_fn = (function every_channel_fn(ms){return (function (graph,opts){var out = cljs.core.async.chan.call(null);var c__6478__auto___39136 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___39136,out){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___39136,out){
return (function (state_39122){var state_val_39123 = (state_39122[(1)]);if((state_val_39123 === (5)))
{var inst_39105 = (state_39122[(7)]);var inst_39112 = (state_39122[(8)]);var inst_39106 = (state_39122[(9)]);var inst_39114 = (state_39122[(2)]);var inst_39115 = (inst_39112 - inst_39105);var inst_39116 = (inst_39115 - ms);var inst_39117 = (inst_39106 + inst_39116);var inst_39105__$1 = inst_39112;var inst_39106__$1 = inst_39117;var state_39122__$1 = (function (){var statearr_39124 = state_39122;(statearr_39124[(7)] = inst_39105__$1);
(statearr_39124[(9)] = inst_39106__$1);
(statearr_39124[(10)] = inst_39114);
return statearr_39124;
})();var statearr_39125_39137 = state_39122__$1;(statearr_39125_39137[(2)] = null);
(statearr_39125_39137[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39123 === (4)))
{var inst_39112 = (state_39122[(8)]);var inst_39111 = (state_39122[(2)]);var inst_39112__$1 = jamesmacaulay.zelkova.time.now.call(null);var state_39122__$1 = (function (){var statearr_39126 = state_39122;(statearr_39126[(8)] = inst_39112__$1);
(statearr_39126[(11)] = inst_39111);
return statearr_39126;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39122__$1,(5),out,inst_39112__$1);
} else
{if((state_val_39123 === (3)))
{var inst_39120 = (state_39122[(2)]);var state_39122__$1 = state_39122;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39122__$1,inst_39120);
} else
{if((state_val_39123 === (2)))
{var inst_39106 = (state_39122[(9)]);var inst_39108 = (ms - inst_39106);var inst_39109 = cljs.core.async.timeout.call(null,inst_39108);var state_39122__$1 = state_39122;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39122__$1,(4),inst_39109);
} else
{if((state_val_39123 === (1)))
{var inst_39104 = jamesmacaulay.zelkova.time.now.call(null);var inst_39105 = inst_39104;var inst_39106 = (0);var state_39122__$1 = (function (){var statearr_39127 = state_39122;(statearr_39127[(7)] = inst_39105);
(statearr_39127[(9)] = inst_39106);
return statearr_39127;
})();var statearr_39128_39138 = state_39122__$1;(statearr_39128_39138[(2)] = null);
(statearr_39128_39138[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6478__auto___39136,out))
;return ((function (switch__6463__auto__,c__6478__auto___39136,out){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_39132 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39132[(0)] = state_machine__6464__auto__);
(statearr_39132[(1)] = (1));
return statearr_39132;
});
var state_machine__6464__auto____1 = (function (state_39122){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_39122);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e39133){if((e39133 instanceof Object))
{var ex__6467__auto__ = e39133;var statearr_39134_39139 = state_39122;(statearr_39134_39139[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39122);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e39133;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__39140 = state_39122;
state_39122 = G__39140;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_39122){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_39122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___39136,out))
})();var state__6480__auto__ = (function (){var statearr_39135 = f__6479__auto__.call(null);(statearr_39135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___39136);
return statearr_39135;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___39136,out))
);
return out;
});
});
jamesmacaulay.zelkova.time.every = (function every(ms){return jamesmacaulay.zelkova.signal.input.call(null,jamesmacaulay.zelkova.time.now.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jamesmacaulay.zelkova.time","every","jamesmacaulay.zelkova.time/every",-895641586),ms], null),jamesmacaulay.zelkova.time.every_channel_fn.call(null,ms));
});

//# sourceMappingURL=time.js.map