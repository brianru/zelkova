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
jamesmacaulay.zelkova.time.fps_channel_fn = (function fps_channel_fn(n){return (function (graph,opts){var ms_per_frame = ((1000) / n);var out = cljs.core.async.chan.call(null);var c__6478__auto___24205 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___24205,ms_per_frame,out){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___24205,ms_per_frame,out){
return (function (state_24191){var state_val_24192 = (state_24191[(1)]);if((state_val_24192 === (5)))
{var inst_24174 = (state_24191[(7)]);var inst_24173 = (state_24191[(8)]);var inst_24180 = (state_24191[(9)]);var inst_24183 = (state_24191[(2)]);var inst_24184 = (inst_24180 - inst_24173);var inst_24185 = (inst_24184 - ms_per_frame);var inst_24186 = (inst_24174 + inst_24185);var inst_24173__$1 = inst_24180;var inst_24174__$1 = inst_24186;var state_24191__$1 = (function (){var statearr_24193 = state_24191;(statearr_24193[(7)] = inst_24174__$1);
(statearr_24193[(10)] = inst_24183);
(statearr_24193[(8)] = inst_24173__$1);
return statearr_24193;
})();var statearr_24194_24206 = state_24191__$1;(statearr_24194_24206[(2)] = null);
(statearr_24194_24206[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24192 === (4)))
{var inst_24173 = (state_24191[(8)]);var inst_24180 = (state_24191[(9)]);var inst_24179 = (state_24191[(2)]);var inst_24180__$1 = jamesmacaulay.zelkova.time.now.call(null);var inst_24181 = (inst_24180__$1 - inst_24173);var state_24191__$1 = (function (){var statearr_24195 = state_24191;(statearr_24195[(9)] = inst_24180__$1);
(statearr_24195[(11)] = inst_24179);
return statearr_24195;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24191__$1,(5),out,inst_24181);
} else
{if((state_val_24192 === (3)))
{var inst_24189 = (state_24191[(2)]);var state_24191__$1 = state_24191;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24191__$1,inst_24189);
} else
{if((state_val_24192 === (2)))
{var inst_24174 = (state_24191[(7)]);var inst_24176 = (ms_per_frame - inst_24174);var inst_24177 = cljs.core.async.timeout.call(null,inst_24176);var state_24191__$1 = state_24191;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24191__$1,(4),inst_24177);
} else
{if((state_val_24192 === (1)))
{var inst_24172 = jamesmacaulay.zelkova.time.now.call(null);var inst_24173 = inst_24172;var inst_24174 = (0);var state_24191__$1 = (function (){var statearr_24196 = state_24191;(statearr_24196[(7)] = inst_24174);
(statearr_24196[(8)] = inst_24173);
return statearr_24196;
})();var statearr_24197_24207 = state_24191__$1;(statearr_24197_24207[(2)] = null);
(statearr_24197_24207[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6478__auto___24205,ms_per_frame,out))
;return ((function (switch__6463__auto__,c__6478__auto___24205,ms_per_frame,out){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_24201 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24201[(0)] = state_machine__6464__auto__);
(statearr_24201[(1)] = (1));
return statearr_24201;
});
var state_machine__6464__auto____1 = (function (state_24191){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_24191);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e24202){if((e24202 instanceof Object))
{var ex__6467__auto__ = e24202;var statearr_24203_24208 = state_24191;(statearr_24203_24208[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24191);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24202;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24209 = state_24191;
state_24191 = G__24209;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_24191){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_24191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___24205,ms_per_frame,out))
})();var state__6480__auto__ = (function (){var statearr_24204 = f__6479__auto__.call(null);(statearr_24204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___24205);
return statearr_24204;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___24205,ms_per_frame,out))
);
return out;
});
});
jamesmacaulay.zelkova.time.fps = (function fps(n){return jamesmacaulay.zelkova.signal.input.call(null,(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jamesmacaulay.zelkova.time","fps","jamesmacaulay.zelkova.time/fps",2069466524),n], null),jamesmacaulay.zelkova.time.fps_channel_fn.call(null,n));
});
jamesmacaulay.zelkova.time.every_channel_fn = (function every_channel_fn(ms){return (function (graph,opts){var out = cljs.core.async.chan.call(null);var c__6478__auto___24274 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___24274,out){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___24274,out){
return (function (state_24260){var state_val_24261 = (state_24260[(1)]);if((state_val_24261 === (5)))
{var inst_24243 = (state_24260[(7)]);var inst_24244 = (state_24260[(8)]);var inst_24250 = (state_24260[(9)]);var inst_24252 = (state_24260[(2)]);var inst_24253 = (inst_24250 - inst_24243);var inst_24254 = (inst_24253 - ms);var inst_24255 = (inst_24244 + inst_24254);var inst_24243__$1 = inst_24250;var inst_24244__$1 = inst_24255;var state_24260__$1 = (function (){var statearr_24262 = state_24260;(statearr_24262[(10)] = inst_24252);
(statearr_24262[(7)] = inst_24243__$1);
(statearr_24262[(8)] = inst_24244__$1);
return statearr_24262;
})();var statearr_24263_24275 = state_24260__$1;(statearr_24263_24275[(2)] = null);
(statearr_24263_24275[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24261 === (4)))
{var inst_24250 = (state_24260[(9)]);var inst_24249 = (state_24260[(2)]);var inst_24250__$1 = jamesmacaulay.zelkova.time.now.call(null);var state_24260__$1 = (function (){var statearr_24264 = state_24260;(statearr_24264[(11)] = inst_24249);
(statearr_24264[(9)] = inst_24250__$1);
return statearr_24264;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24260__$1,(5),out,inst_24250__$1);
} else
{if((state_val_24261 === (3)))
{var inst_24258 = (state_24260[(2)]);var state_24260__$1 = state_24260;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24260__$1,inst_24258);
} else
{if((state_val_24261 === (2)))
{var inst_24244 = (state_24260[(8)]);var inst_24246 = (ms - inst_24244);var inst_24247 = cljs.core.async.timeout.call(null,inst_24246);var state_24260__$1 = state_24260;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24260__$1,(4),inst_24247);
} else
{if((state_val_24261 === (1)))
{var inst_24242 = jamesmacaulay.zelkova.time.now.call(null);var inst_24243 = inst_24242;var inst_24244 = (0);var state_24260__$1 = (function (){var statearr_24265 = state_24260;(statearr_24265[(7)] = inst_24243);
(statearr_24265[(8)] = inst_24244);
return statearr_24265;
})();var statearr_24266_24276 = state_24260__$1;(statearr_24266_24276[(2)] = null);
(statearr_24266_24276[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6478__auto___24274,out))
;return ((function (switch__6463__auto__,c__6478__auto___24274,out){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_24270 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24270[(0)] = state_machine__6464__auto__);
(statearr_24270[(1)] = (1));
return statearr_24270;
});
var state_machine__6464__auto____1 = (function (state_24260){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_24260);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e24271){if((e24271 instanceof Object))
{var ex__6467__auto__ = e24271;var statearr_24272_24277 = state_24260;(statearr_24272_24277[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24260);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24271;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24278 = state_24260;
state_24260 = G__24278;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_24260){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_24260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___24274,out))
})();var state__6480__auto__ = (function (){var statearr_24273 = f__6479__auto__.call(null);(statearr_24273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___24274);
return statearr_24273;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___24274,out))
);
return out;
});
});
jamesmacaulay.zelkova.time.every = (function every(ms){return jamesmacaulay.zelkova.signal.input.call(null,jamesmacaulay.zelkova.time.now.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jamesmacaulay.zelkova.time","every","jamesmacaulay.zelkova.time/every",-895641586),ms], null),jamesmacaulay.zelkova.time.every_channel_fn.call(null,ms));
});

//# sourceMappingURL=time.js.map