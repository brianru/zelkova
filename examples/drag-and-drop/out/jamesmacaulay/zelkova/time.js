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
jamesmacaulay.zelkova.time.fps_channel_fn = (function fps_channel_fn(n){return (function (graph,opts){var ms_per_frame = ((1000) / n);var out = cljs.core.async.chan.call(null);var c__6478__auto___30413 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___30413,ms_per_frame,out){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___30413,ms_per_frame,out){
return (function (state_30399){var state_val_30400 = (state_30399[(1)]);if((state_val_30400 === (5)))
{var inst_30382 = (state_30399[(7)]);var inst_30381 = (state_30399[(8)]);var inst_30388 = (state_30399[(9)]);var inst_30391 = (state_30399[(2)]);var inst_30392 = (inst_30388 - inst_30381);var inst_30393 = (inst_30392 - ms_per_frame);var inst_30394 = (inst_30382 + inst_30393);var inst_30381__$1 = inst_30388;var inst_30382__$1 = inst_30394;var state_30399__$1 = (function (){var statearr_30401 = state_30399;(statearr_30401[(7)] = inst_30382__$1);
(statearr_30401[(8)] = inst_30381__$1);
(statearr_30401[(10)] = inst_30391);
return statearr_30401;
})();var statearr_30402_30414 = state_30399__$1;(statearr_30402_30414[(2)] = null);
(statearr_30402_30414[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30400 === (4)))
{var inst_30381 = (state_30399[(8)]);var inst_30388 = (state_30399[(9)]);var inst_30387 = (state_30399[(2)]);var inst_30388__$1 = jamesmacaulay.zelkova.time.now.call(null);var inst_30389 = (inst_30388__$1 - inst_30381);var state_30399__$1 = (function (){var statearr_30403 = state_30399;(statearr_30403[(11)] = inst_30387);
(statearr_30403[(9)] = inst_30388__$1);
return statearr_30403;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30399__$1,(5),out,inst_30389);
} else
{if((state_val_30400 === (3)))
{var inst_30397 = (state_30399[(2)]);var state_30399__$1 = state_30399;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30399__$1,inst_30397);
} else
{if((state_val_30400 === (2)))
{var inst_30382 = (state_30399[(7)]);var inst_30384 = (ms_per_frame - inst_30382);var inst_30385 = cljs.core.async.timeout.call(null,inst_30384);var state_30399__$1 = state_30399;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30399__$1,(4),inst_30385);
} else
{if((state_val_30400 === (1)))
{var inst_30380 = jamesmacaulay.zelkova.time.now.call(null);var inst_30381 = inst_30380;var inst_30382 = (0);var state_30399__$1 = (function (){var statearr_30404 = state_30399;(statearr_30404[(7)] = inst_30382);
(statearr_30404[(8)] = inst_30381);
return statearr_30404;
})();var statearr_30405_30415 = state_30399__$1;(statearr_30405_30415[(2)] = null);
(statearr_30405_30415[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6478__auto___30413,ms_per_frame,out))
;return ((function (switch__6463__auto__,c__6478__auto___30413,ms_per_frame,out){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_30409 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30409[(0)] = state_machine__6464__auto__);
(statearr_30409[(1)] = (1));
return statearr_30409;
});
var state_machine__6464__auto____1 = (function (state_30399){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_30399);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e30410){if((e30410 instanceof Object))
{var ex__6467__auto__ = e30410;var statearr_30411_30416 = state_30399;(statearr_30411_30416[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30399);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30410;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30417 = state_30399;
state_30399 = G__30417;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_30399){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_30399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___30413,ms_per_frame,out))
})();var state__6480__auto__ = (function (){var statearr_30412 = f__6479__auto__.call(null);(statearr_30412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___30413);
return statearr_30412;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___30413,ms_per_frame,out))
);
return out;
});
});
jamesmacaulay.zelkova.time.fps = (function fps(n){return jamesmacaulay.zelkova.signal.input.call(null,(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jamesmacaulay.zelkova.time","fps","jamesmacaulay.zelkova.time/fps",2069466524),n], null),jamesmacaulay.zelkova.time.fps_channel_fn.call(null,n));
});
jamesmacaulay.zelkova.time.every_channel_fn = (function every_channel_fn(ms){return (function (graph,opts){var out = cljs.core.async.chan.call(null);var c__6478__auto___30482 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___30482,out){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___30482,out){
return (function (state_30468){var state_val_30469 = (state_30468[(1)]);if((state_val_30469 === (5)))
{var inst_30458 = (state_30468[(7)]);var inst_30452 = (state_30468[(8)]);var inst_30451 = (state_30468[(9)]);var inst_30460 = (state_30468[(2)]);var inst_30461 = (inst_30458 - inst_30451);var inst_30462 = (inst_30461 - ms);var inst_30463 = (inst_30452 + inst_30462);var inst_30451__$1 = inst_30458;var inst_30452__$1 = inst_30463;var state_30468__$1 = (function (){var statearr_30470 = state_30468;(statearr_30470[(10)] = inst_30460);
(statearr_30470[(8)] = inst_30452__$1);
(statearr_30470[(9)] = inst_30451__$1);
return statearr_30470;
})();var statearr_30471_30483 = state_30468__$1;(statearr_30471_30483[(2)] = null);
(statearr_30471_30483[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30469 === (4)))
{var inst_30458 = (state_30468[(7)]);var inst_30457 = (state_30468[(2)]);var inst_30458__$1 = jamesmacaulay.zelkova.time.now.call(null);var state_30468__$1 = (function (){var statearr_30472 = state_30468;(statearr_30472[(7)] = inst_30458__$1);
(statearr_30472[(11)] = inst_30457);
return statearr_30472;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30468__$1,(5),out,inst_30458__$1);
} else
{if((state_val_30469 === (3)))
{var inst_30466 = (state_30468[(2)]);var state_30468__$1 = state_30468;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30468__$1,inst_30466);
} else
{if((state_val_30469 === (2)))
{var inst_30452 = (state_30468[(8)]);var inst_30454 = (ms - inst_30452);var inst_30455 = cljs.core.async.timeout.call(null,inst_30454);var state_30468__$1 = state_30468;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30468__$1,(4),inst_30455);
} else
{if((state_val_30469 === (1)))
{var inst_30450 = jamesmacaulay.zelkova.time.now.call(null);var inst_30451 = inst_30450;var inst_30452 = (0);var state_30468__$1 = (function (){var statearr_30473 = state_30468;(statearr_30473[(8)] = inst_30452);
(statearr_30473[(9)] = inst_30451);
return statearr_30473;
})();var statearr_30474_30484 = state_30468__$1;(statearr_30474_30484[(2)] = null);
(statearr_30474_30484[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6478__auto___30482,out))
;return ((function (switch__6463__auto__,c__6478__auto___30482,out){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_30478 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30478[(0)] = state_machine__6464__auto__);
(statearr_30478[(1)] = (1));
return statearr_30478;
});
var state_machine__6464__auto____1 = (function (state_30468){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_30468);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e30479){if((e30479 instanceof Object))
{var ex__6467__auto__ = e30479;var statearr_30480_30485 = state_30468;(statearr_30480_30485[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30468);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30479;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30486 = state_30468;
state_30468 = G__30486;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_30468){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_30468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___30482,out))
})();var state__6480__auto__ = (function (){var statearr_30481 = f__6479__auto__.call(null);(statearr_30481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___30482);
return statearr_30481;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___30482,out))
);
return out;
});
});
jamesmacaulay.zelkova.time.every = (function every(ms){return jamesmacaulay.zelkova.signal.input.call(null,jamesmacaulay.zelkova.time.now.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jamesmacaulay.zelkova.time","every","jamesmacaulay.zelkova.time/every",-895641586),ms], null),jamesmacaulay.zelkova.time.every_channel_fn.call(null,ms));
});

//# sourceMappingURL=time.js.map