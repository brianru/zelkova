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
jamesmacaulay.zelkova.time.fps_channel_fn = (function fps_channel_fn(n){return (function (graph,opts){var ms_per_frame = ((1000) / n);var out = cljs.core.async.chan.call(null);var c__6478__auto___11014 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___11014,ms_per_frame,out){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___11014,ms_per_frame,out){
return (function (state_11000){var state_val_11001 = (state_11000[(1)]);if((state_val_11001 === (5)))
{var inst_10983 = (state_11000[(7)]);var inst_10982 = (state_11000[(8)]);var inst_10989 = (state_11000[(9)]);var inst_10992 = (state_11000[(2)]);var inst_10993 = (inst_10989 - inst_10982);var inst_10994 = (inst_10993 - ms_per_frame);var inst_10995 = (inst_10983 + inst_10994);var inst_10982__$1 = inst_10989;var inst_10983__$1 = inst_10995;var state_11000__$1 = (function (){var statearr_11002 = state_11000;(statearr_11002[(7)] = inst_10983__$1);
(statearr_11002[(10)] = inst_10992);
(statearr_11002[(8)] = inst_10982__$1);
return statearr_11002;
})();var statearr_11003_11015 = state_11000__$1;(statearr_11003_11015[(2)] = null);
(statearr_11003_11015[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11001 === (4)))
{var inst_10982 = (state_11000[(8)]);var inst_10989 = (state_11000[(9)]);var inst_10988 = (state_11000[(2)]);var inst_10989__$1 = jamesmacaulay.zelkova.time.now.call(null);var inst_10990 = (inst_10989__$1 - inst_10982);var state_11000__$1 = (function (){var statearr_11004 = state_11000;(statearr_11004[(11)] = inst_10988);
(statearr_11004[(9)] = inst_10989__$1);
return statearr_11004;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11000__$1,(5),out,inst_10990);
} else
{if((state_val_11001 === (3)))
{var inst_10998 = (state_11000[(2)]);var state_11000__$1 = state_11000;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11000__$1,inst_10998);
} else
{if((state_val_11001 === (2)))
{var inst_10983 = (state_11000[(7)]);var inst_10985 = (ms_per_frame - inst_10983);var inst_10986 = cljs.core.async.timeout.call(null,inst_10985);var state_11000__$1 = state_11000;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11000__$1,(4),inst_10986);
} else
{if((state_val_11001 === (1)))
{var inst_10981 = jamesmacaulay.zelkova.time.now.call(null);var inst_10982 = inst_10981;var inst_10983 = (0);var state_11000__$1 = (function (){var statearr_11005 = state_11000;(statearr_11005[(7)] = inst_10983);
(statearr_11005[(8)] = inst_10982);
return statearr_11005;
})();var statearr_11006_11016 = state_11000__$1;(statearr_11006_11016[(2)] = null);
(statearr_11006_11016[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6478__auto___11014,ms_per_frame,out))
;return ((function (switch__6463__auto__,c__6478__auto___11014,ms_per_frame,out){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_11010 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11010[(0)] = state_machine__6464__auto__);
(statearr_11010[(1)] = (1));
return statearr_11010;
});
var state_machine__6464__auto____1 = (function (state_11000){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_11000);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e11011){if((e11011 instanceof Object))
{var ex__6467__auto__ = e11011;var statearr_11012_11017 = state_11000;(statearr_11012_11017[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11000);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11011;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11018 = state_11000;
state_11000 = G__11018;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_11000){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_11000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___11014,ms_per_frame,out))
})();var state__6480__auto__ = (function (){var statearr_11013 = f__6479__auto__.call(null);(statearr_11013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___11014);
return statearr_11013;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___11014,ms_per_frame,out))
);
return out;
});
});
jamesmacaulay.zelkova.time.fps = (function fps(n){return jamesmacaulay.zelkova.signal.input.call(null,(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jamesmacaulay.zelkova.time","fps","jamesmacaulay.zelkova.time/fps",2069466524),n], null),jamesmacaulay.zelkova.time.fps_channel_fn.call(null,n));
});
jamesmacaulay.zelkova.time.every_channel_fn = (function every_channel_fn(ms){return (function (graph,opts){var out = cljs.core.async.chan.call(null);var c__6478__auto___11083 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___11083,out){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___11083,out){
return (function (state_11069){var state_val_11070 = (state_11069[(1)]);if((state_val_11070 === (5)))
{var inst_11053 = (state_11069[(7)]);var inst_11052 = (state_11069[(8)]);var inst_11059 = (state_11069[(9)]);var inst_11061 = (state_11069[(2)]);var inst_11062 = (inst_11059 - inst_11052);var inst_11063 = (inst_11062 - ms);var inst_11064 = (inst_11053 + inst_11063);var inst_11052__$1 = inst_11059;var inst_11053__$1 = inst_11064;var state_11069__$1 = (function (){var statearr_11071 = state_11069;(statearr_11071[(7)] = inst_11053__$1);
(statearr_11071[(8)] = inst_11052__$1);
(statearr_11071[(10)] = inst_11061);
return statearr_11071;
})();var statearr_11072_11084 = state_11069__$1;(statearr_11072_11084[(2)] = null);
(statearr_11072_11084[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11070 === (4)))
{var inst_11059 = (state_11069[(9)]);var inst_11058 = (state_11069[(2)]);var inst_11059__$1 = jamesmacaulay.zelkova.time.now.call(null);var state_11069__$1 = (function (){var statearr_11073 = state_11069;(statearr_11073[(11)] = inst_11058);
(statearr_11073[(9)] = inst_11059__$1);
return statearr_11073;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11069__$1,(5),out,inst_11059__$1);
} else
{if((state_val_11070 === (3)))
{var inst_11067 = (state_11069[(2)]);var state_11069__$1 = state_11069;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11069__$1,inst_11067);
} else
{if((state_val_11070 === (2)))
{var inst_11053 = (state_11069[(7)]);var inst_11055 = (ms - inst_11053);var inst_11056 = cljs.core.async.timeout.call(null,inst_11055);var state_11069__$1 = state_11069;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11069__$1,(4),inst_11056);
} else
{if((state_val_11070 === (1)))
{var inst_11051 = jamesmacaulay.zelkova.time.now.call(null);var inst_11052 = inst_11051;var inst_11053 = (0);var state_11069__$1 = (function (){var statearr_11074 = state_11069;(statearr_11074[(7)] = inst_11053);
(statearr_11074[(8)] = inst_11052);
return statearr_11074;
})();var statearr_11075_11085 = state_11069__$1;(statearr_11075_11085[(2)] = null);
(statearr_11075_11085[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6478__auto___11083,out))
;return ((function (switch__6463__auto__,c__6478__auto___11083,out){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_11079 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11079[(0)] = state_machine__6464__auto__);
(statearr_11079[(1)] = (1));
return statearr_11079;
});
var state_machine__6464__auto____1 = (function (state_11069){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_11069);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e11080){if((e11080 instanceof Object))
{var ex__6467__auto__ = e11080;var statearr_11081_11086 = state_11069;(statearr_11081_11086[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11069);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11080;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11087 = state_11069;
state_11069 = G__11087;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_11069){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_11069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___11083,out))
})();var state__6480__auto__ = (function (){var statearr_11082 = f__6479__auto__.call(null);(statearr_11082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___11083);
return statearr_11082;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___11083,out))
);
return out;
});
});
jamesmacaulay.zelkova.time.every = (function every(ms){return jamesmacaulay.zelkova.signal.input.call(null,jamesmacaulay.zelkova.time.now.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jamesmacaulay.zelkova.time","every","jamesmacaulay.zelkova.time/every",-895641586),ms], null),jamesmacaulay.zelkova.time.every_channel_fn.call(null,ms));
});

//# sourceMappingURL=time.js.map