// Compiled by ClojureScript 0.0-2356
goog.provide('jamesmacaulay.zelkova.keyboard');
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
jamesmacaulay.zelkova.keyboard.listen = (function() { 
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
listen.cljs$lang$applyTo = (function (arglist__22753){
var el = cljs.core.first(arglist__22753);
arglist__22753 = cljs.core.next(arglist__22753);
var type = cljs.core.first(arglist__22753);
var args = cljs.core.rest(arglist__22753);
return listen__delegate(el,type,args);
});
listen.cljs$core$IFn$_invoke$arity$variadic = listen__delegate;
return listen;
})()
;
jamesmacaulay.zelkova.keyboard.keydown_channel = (function keydown_channel(graph,opts){return jamesmacaulay.zelkova.keyboard.listen.call(null,document,"keydown");
});
jamesmacaulay.zelkova.keyboard.keyup_channel = (function keyup_channel(graph,opts){return jamesmacaulay.zelkova.keyboard.listen.call(null,document,"keyup");
});
jamesmacaulay.zelkova.keyboard.blur_channel = (function blur_channel(graph,opts){return jamesmacaulay.zelkova.keyboard.listen.call(null,window,"blur");
});
jamesmacaulay.zelkova.keyboard.down_events = jamesmacaulay.zelkova.signal.input.call(null,(0),new cljs.core.Keyword("jamesmacaulay.zelkova.keyboard","down-events","jamesmacaulay.zelkova.keyboard/down-events",-435596590),jamesmacaulay.zelkova.keyboard.keydown_channel);
jamesmacaulay.zelkova.keyboard.up_events = jamesmacaulay.zelkova.signal.input.call(null,(0),new cljs.core.Keyword("jamesmacaulay.zelkova.keyboard","up-events","jamesmacaulay.zelkova.keyboard/up-events",-1589836342),jamesmacaulay.zelkova.keyboard.keyup_channel);
jamesmacaulay.zelkova.keyboard.blur_events = jamesmacaulay.zelkova.signal.input.call(null,(0),new cljs.core.Keyword("jamesmacaulay.zelkova.keyboard","blur-events","jamesmacaulay.zelkova.keyboard/blur-events",-453638708),jamesmacaulay.zelkova.keyboard.blur_channel);
jamesmacaulay.zelkova.keyboard.empty_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"alt-key","alt-key",-965170049),false,new cljs.core.Keyword(null,"meta-key","meta-key",280559106),false,new cljs.core.Keyword(null,"key-codes","key-codes",284454881),cljs.core.PersistentHashSet.EMPTY], null);
jamesmacaulay.zelkova.keyboard.event_action = (function (){var method_table__4518__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4519__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4520__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4521__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4522__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("event-action",((function (method_table__4518__auto__,prefer_table__4519__auto__,method_cache__4520__auto__,cached_hierarchy__4521__auto__,hierarchy__4522__auto__){
return (function (state,event){return event.type;
});})(method_table__4518__auto__,prefer_table__4519__auto__,method_cache__4520__auto__,cached_hierarchy__4521__auto__,hierarchy__4522__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4522__auto__,method_table__4518__auto__,prefer_table__4519__auto__,method_cache__4520__auto__,cached_hierarchy__4521__auto__));
})();
cljs.core._add_method.call(null,jamesmacaulay.zelkova.keyboard.event_action,"keydown",(function (state,event){return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-codes","key-codes",284454881)], null),cljs.core.conj,event.keyCode),new cljs.core.Keyword(null,"alt","alt",-3214426),event.altKey,new cljs.core.Keyword(null,"meta","meta",1499536964),event.metaKey);
}));
cljs.core._add_method.call(null,jamesmacaulay.zelkova.keyboard.event_action,"keyup",(function (state,event){return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-codes","key-codes",284454881)], null),cljs.core.disj,event.keyCode),new cljs.core.Keyword(null,"alt","alt",-3214426),event.altKey,new cljs.core.Keyword(null,"meta","meta",1499536964),event.metaKey);
}));
cljs.core._add_method.call(null,jamesmacaulay.zelkova.keyboard.event_action,"blur",(function (state,event){return jamesmacaulay.zelkova.keyboard.empty_state;
}));
jamesmacaulay.zelkova.keyboard.key_merge = jamesmacaulay.zelkova.signal.reducep.call(null,jamesmacaulay.zelkova.keyboard.event_action,jamesmacaulay.zelkova.keyboard.empty_state,jamesmacaulay.zelkova.signal.merge.call(null,jamesmacaulay.zelkova.keyboard.down_events,jamesmacaulay.zelkova.keyboard.up_events,jamesmacaulay.zelkova.keyboard.blur_events));
jamesmacaulay.zelkova.keyboard.key_signal = (function key_signal(f){return jamesmacaulay.zelkova.signal.drop_repeats.call(null,jamesmacaulay.zelkova.signal.lift.call(null,f,jamesmacaulay.zelkova.keyboard.key_merge));
});
jamesmacaulay.zelkova.keyboard.keys_down = jamesmacaulay.zelkova.keyboard.key_signal.call(null,new cljs.core.Keyword(null,"key-codes","key-codes",284454881));
jamesmacaulay.zelkova.keyboard.directions = (function directions(up,down,left,right){return jamesmacaulay.zelkova.keyboard.key_signal.call(null,(function (p__22756){var map__22757 = p__22756;var map__22757__$1 = ((cljs.core.seq_QMARK_.call(null,map__22757))?cljs.core.apply.call(null,cljs.core.hash_map,map__22757):map__22757);var key_codes = cljs.core.get.call(null,map__22757__$1,new cljs.core.Keyword(null,"key-codes","key-codes",284454881));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((cljs.core.truth_(key_codes.call(null,right))?(1):(0)) + (cljs.core.truth_(key_codes.call(null,left))?(-1):(0))),new cljs.core.Keyword(null,"y","y",-1757859776),((cljs.core.truth_(key_codes.call(null,up))?(1):(0)) + (cljs.core.truth_(key_codes.call(null,down))?(-1):(0)))], null);
}));
});
jamesmacaulay.zelkova.keyboard.arrows = jamesmacaulay.zelkova.keyboard.directions.call(null,(38),(40),(37),(39));
jamesmacaulay.zelkova.keyboard.wasd = jamesmacaulay.zelkova.keyboard.directions.call(null,(87),(83),(65),(68));
jamesmacaulay.zelkova.keyboard.down_QMARK_ = (function down_QMARK_(code){return jamesmacaulay.zelkova.keyboard.key_signal.call(null,(function (p__22760){var map__22761 = p__22760;var map__22761__$1 = ((cljs.core.seq_QMARK_.call(null,map__22761))?cljs.core.apply.call(null,cljs.core.hash_map,map__22761):map__22761);var key_codes = cljs.core.get.call(null,map__22761__$1,new cljs.core.Keyword(null,"key-codes","key-codes",284454881));return cljs.core.boolean$.call(null,key_codes.call(null,code));
}));
});
jamesmacaulay.zelkova.keyboard.alt = jamesmacaulay.zelkova.keyboard.key_signal.call(null,new cljs.core.Keyword(null,"alt","alt",-3214426));
jamesmacaulay.zelkova.keyboard.meta = jamesmacaulay.zelkova.keyboard.key_signal.call(null,new cljs.core.Keyword(null,"meta","meta",1499536964));
jamesmacaulay.zelkova.keyboard.ctrl = jamesmacaulay.zelkova.keyboard.down_QMARK_.call(null,(17));
jamesmacaulay.zelkova.keyboard.shift = jamesmacaulay.zelkova.keyboard.down_QMARK_.call(null,(16));
jamesmacaulay.zelkova.keyboard.space = jamesmacaulay.zelkova.keyboard.down_QMARK_.call(null,(32));
jamesmacaulay.zelkova.keyboard.enter = jamesmacaulay.zelkova.keyboard.down_QMARK_.call(null,(13));
jamesmacaulay.zelkova.keyboard.last_pressed = jamesmacaulay.zelkova.signal.lift.call(null,(function (p1__22762_SHARP_){return p1__22762_SHARP_.keyCode;
}),jamesmacaulay.zelkova.keyboard.down_events);

//# sourceMappingURL=keyboard.js.map