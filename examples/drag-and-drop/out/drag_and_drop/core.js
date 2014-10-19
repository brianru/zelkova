// Compiled by ClojureScript 0.0-2356
goog.provide('drag_and_drop.core');
goog.require('cljs.core');
goog.require('jamesmacaulay.zelkova.signal');
goog.require('cljs.core.async');
goog.require('jamesmacaulay.zelkova.mouse');
goog.require('om.dom');
goog.require('jamesmacaulay.zelkova.signal');
goog.require('jamesmacaulay.zelkova.time');
goog.require('cljs.core.async');
goog.require('jamesmacaulay.async_tools.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('jamesmacaulay.async_tools.core');
goog.require('jamesmacaulay.zelkova.time');
goog.require('jamesmacaulay.zelkova.mouse');
goog.require('om.core');
goog.require('om.core');
goog.require('jamesmacaulay.zelkova.signal');
cljs.core.enable_console_print_BANG_();
drag_and_drop.core.init_state = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$96,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$97,null], null);
drag_and_drop.core.pos__GT_hue = (function pos__GT_hue(p__15827){var vec__15829 = p__15827;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15829,(0),null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15829,(1),null);return cljs.core.mod(((x / (2)) + (y / (2))),(360));
});
drag_and_drop.core.build_box = (function build_box(p__15830,p__15831){var vec__15836 = p__15830;var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15836,(0),null);var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15836,(1),null);var vec__15837 = p__15831;var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15837,(0),null);var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15837,(1),null);var vec__15838 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y1,y2], null));var top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15838,(0),null);var bottom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15838,(1),null);var vec__15839 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,x2], null));var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15839,(0),null);var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15839,(1),null);var centre = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((left + right) / (2)),((top + bottom) / (2))], null);return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$98,top,cljs.core.constant$keyword$99,left,cljs.core.constant$keyword$100,(right - left),cljs.core.constant$keyword$101,(bottom - top),cljs.core.constant$keyword$102,drag_and_drop.core.pos__GT_hue(centre)], null);
});
drag_and_drop.core.in_box_QMARK_ = (function in_box_QMARK_(p__15840,p__15841){var vec__15844 = p__15840;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15844,(0),null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15844,(1),null);var map__15845 = p__15841;var map__15845__$1 = ((cljs.core.seq_QMARK_(map__15845))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15845):map__15845);var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15845__$1,cljs.core.constant$keyword$101);var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15845__$1,cljs.core.constant$keyword$100);var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15845__$1,cljs.core.constant$keyword$99);var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15845__$1,cljs.core.constant$keyword$98);return (((left < x)) && ((x < (left + width)))) && (((top < y)) && ((y < (top + height))));
});
drag_and_drop.core.all_boxes = (function all_boxes(state){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(state),cljs.core.constant$keyword$103.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(state))),cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(state)));
});
drag_and_drop.core.clicked_boxes = (function clicked_boxes(pos,state){return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(drag_and_drop.core.in_box_QMARK_,pos)),drag_and_drop.core.all_boxes(state));
});
drag_and_drop.core.remove_boxes = (function remove_boxes(clicked_boxes,state){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$96], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,clicked_boxes)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$97,cljs.core.constant$keyword$103], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,clicked_boxes)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$97,cljs.core.constant$keyword$104], null),(function (box){if(cljs.core.truth_((function (){var G__15847 = box;return (clicked_boxes.cljs$core$IFn$_invoke$arity$1 ? clicked_boxes.cljs$core$IFn$_invoke$arity$1(G__15847) : clicked_boxes.call(null,G__15847));
})()))
{return null;
} else
{return box;
}
}));
});
drag_and_drop.core.click = (function click(pos,state){return drag_and_drop.core.remove_boxes(drag_and_drop.core.clicked_boxes(pos,state),state);
});
drag_and_drop.core.topleft_pos = (function topleft_pos(p__15848){var map__15850 = p__15848;var map__15850__$1 = ((cljs.core.seq_QMARK_(map__15850))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15850):map__15850);var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15850__$1,cljs.core.constant$keyword$98);var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15850__$1,cljs.core.constant$keyword$99);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null);
});
drag_and_drop.core.start_drag = (function start_drag(pos,state){var drag_target_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(drag_and_drop.core.in_box_QMARK_,pos);var drag_offset = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._,pos),drag_and_drop.core.topleft_pos);var state_with_drag = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (drag_target_QMARK_,drag_offset){
return (function (state__$1,box){if(cljs.core.truth_((function (){var G__15853 = box;return (drag_target_QMARK_.cljs$core$IFn$_invoke$arity$1 ? drag_target_QMARK_.cljs$core$IFn$_invoke$arity$1(G__15853) : drag_target_QMARK_.call(null,G__15853));
})()))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$97,cljs.core.constant$keyword$103], null),cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(box,cljs.core.constant$keyword$105,(function (){var G__15854 = box;return (drag_offset.cljs$core$IFn$_invoke$arity$1 ? drag_offset.cljs$core$IFn$_invoke$arity$1(G__15854) : drag_offset.call(null,G__15854));
})()));
} else
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$96], null),cljs.core.conj,box);
}
});})(drag_target_QMARK_,drag_offset))
,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.constant$keyword$96,cljs.core.PersistentVector.EMPTY,cljs.core.array_seq([cljs.core.constant$keyword$97,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$103,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$104,null,cljs.core.constant$keyword$106,pos], null)], 0)),cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(state));if(cljs.core.seq(cljs.core.constant$keyword$103.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(state_with_drag))))
{return state_with_drag;
} else
{return cljs.core.assoc_in(state_with_drag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$97,cljs.core.constant$keyword$104], null),drag_and_drop.core.build_box(pos,pos));
}
});
drag_and_drop.core.drag = (function drag(pos,state){var drag_to_pos = (function (box){var vec__15856 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,pos,cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(box));var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15856,(0),null);var top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15856,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(box,cljs.core.constant$keyword$99,left,cljs.core.array_seq([cljs.core.constant$keyword$98,top], 0));
});return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$97,cljs.core.constant$keyword$103], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,drag_to_pos)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$97,cljs.core.constant$keyword$104], null),((function (drag_to_pos){
return (function (box){if(cljs.core.truth_(box))
{return drag_and_drop.core.build_box(pos,cljs.core.constant$keyword$106.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(state)));
} else
{return null;
}
});})(drag_to_pos))
);
});
drag_and_drop.core.drop_moving_boxes = (function drop_moving_boxes(state){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$96], null),(function (boxes){var moved_boxes = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15857_SHARP_){return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__15857_SHARP_,cljs.core.constant$keyword$105);
}),cljs.core.constant$keyword$103.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(state)));return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boxes,moved_boxes));
}));
});
drag_and_drop.core.drop_resizing_box = (function drop_resizing_box(state){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$96], null),(function (boxes){var temp__4220__auto__ = cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(state));if(cljs.core.truth_(temp__4220__auto__))
{var resizing_box = temp__4220__auto__;return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(boxes,resizing_box);
} else
{return boxes;
}
}));
});
drag_and_drop.core.stop_drag = (function stop_drag(state){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(drag_and_drop.core.drop_resizing_box(drag_and_drop.core.drop_moving_boxes(state)),cljs.core.constant$keyword$97,null);
});

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
drag_and_drop.core.NoOp = (function (__meta,__extmap){
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667595;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>0){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
drag_and_drop.core.NoOp.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4234__auto__,k__4235__auto__){var self__ = this;
var this__4234__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4234__auto____$1,k__4235__auto__,null);
});
drag_and_drop.core.NoOp.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4236__auto__,k15859,else__4237__auto__){var self__ = this;
var this__4236__auto____$1 = this;var G__15862 = k15859;switch (G__15862) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15859,else__4237__auto__);

}
});
drag_and_drop.core.NoOp.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4248__auto__,writer__4249__auto__,opts__4250__auto__){var self__ = this;
var this__4248__auto____$1 = this;var pr_pair__4251__auto__ = ((function (this__4248__auto____$1){
return (function (keyval__4252__auto__){return cljs.core.pr_sequential_writer(writer__4249__auto__,cljs.core.pr_writer,""," ","",opts__4250__auto__,keyval__4252__auto__);
});})(this__4248__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4249__auto__,pr_pair__4251__auto__,"#drag-and-drop.core.NoOp{",", ","}",opts__4250__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
drag_and_drop.core.NoOp.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4232__auto__){var self__ = this;
var this__4232__auto____$1 = this;return self__.__meta;
});
drag_and_drop.core.NoOp.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4228__auto__){var self__ = this;
var this__4228__auto____$1 = this;return (new drag_and_drop.core.NoOp(self__.__meta,self__.__extmap,self__.__hash));
});
drag_and_drop.core.NoOp.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4238__auto__){var self__ = this;
var this__4238__auto____$1 = this;return (0 + cljs.core.count(self__.__extmap));
});
drag_and_drop.core.NoOp.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4229__auto__){var self__ = this;
var this__4229__auto____$1 = this;var h__4050__auto__ = self__.__hash;if(!((h__4050__auto__ == null)))
{return h__4050__auto__;
} else
{var h__4050__auto____$1 = cljs.core.hash_imap(this__4229__auto____$1);self__.__hash = h__4050__auto____$1;
return h__4050__auto____$1;
}
});
drag_and_drop.core.NoOp.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4230__auto__,other__4231__auto__){var self__ = this;
var this__4230__auto____$1 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = other__4231__auto__;if(cljs.core.truth_(and__3627__auto__))
{return ((this__4230__auto____$1.constructor === other__4231__auto__.constructor)) && (cljs.core.equiv_map(this__4230__auto____$1,other__4231__auto__));
} else
{return and__3627__auto__;
}
})()))
{return true;
} else
{return false;
}
});
drag_and_drop.core.NoOp.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4243__auto__,k__4244__auto__){var self__ = this;
var this__4243__auto____$1 = this;if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4244__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4243__auto____$1),self__.__meta),k__4244__auto__);
} else
{return (new drag_and_drop.core.NoOp(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4244__auto__)),null));
}
});
drag_and_drop.core.NoOp.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4241__auto__,k__4242__auto__,G__15858){var self__ = this;
var this__4241__auto____$1 = this;var pred__15863 = cljs.core.keyword_identical_QMARK_;var expr__15864 = k__4242__auto__;return (new drag_and_drop.core.NoOp(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4242__auto__,G__15858),null));
});
drag_and_drop.core.NoOp.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4246__auto__){var self__ = this;
var this__4246__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
drag_and_drop.core.NoOp.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4233__auto__,G__15858){var self__ = this;
var this__4233__auto____$1 = this;return (new drag_and_drop.core.NoOp(G__15858,self__.__extmap,self__.__hash));
});
drag_and_drop.core.NoOp.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4239__auto__,entry__4240__auto__){var self__ = this;
var this__4239__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4240__auto__))
{return cljs.core._assoc(this__4239__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4240__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4240__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4239__auto____$1,entry__4240__auto__);
}
});
drag_and_drop.core.NoOp.prototype.call = (function (self__,state){var self__ = this;
var self____$1 = this;var _ = self____$1;return state;
});
drag_and_drop.core.NoOp.prototype.apply = (function (self__,args15861){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15861)));
});
drag_and_drop.core.NoOp.prototype.cljs$core$IFn$_invoke$arity$1 = (function (state){var self__ = this;
var _ = this;return state;
});
drag_and_drop.core.NoOp.cljs$lang$type = true;
drag_and_drop.core.NoOp.cljs$lang$ctorPrSeq = (function (this__4268__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"drag-and-drop.core/NoOp");
});
drag_and_drop.core.NoOp.cljs$lang$ctorPrWriter = (function (this__4268__auto__,writer__4269__auto__){return cljs.core._write(writer__4269__auto__,"drag-and-drop.core/NoOp");
});
drag_and_drop.core.__GT_NoOp = (function __GT_NoOp(){return (new drag_and_drop.core.NoOp());
});
drag_and_drop.core.map__GT_NoOp = (function map__GT_NoOp(G__15860){return (new drag_and_drop.core.NoOp(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__15860)));
});

/**
* @constructor
* @param {*} pos
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
drag_and_drop.core.Click = (function (pos,__meta,__extmap){
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667595;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
drag_and_drop.core.Click.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4234__auto__,k__4235__auto__){var self__ = this;
var this__4234__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4234__auto____$1,k__4235__auto__,null);
});
drag_and_drop.core.Click.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4236__auto__,k15868,else__4237__auto__){var self__ = this;
var this__4236__auto____$1 = this;var G__15871 = (((k15868 instanceof cljs.core.Keyword))?k15868.fqn:null);switch (G__15871) {
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15868,else__4237__auto__);

}
});
drag_and_drop.core.Click.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4248__auto__,writer__4249__auto__,opts__4250__auto__){var self__ = this;
var this__4248__auto____$1 = this;var pr_pair__4251__auto__ = ((function (this__4248__auto____$1){
return (function (keyval__4252__auto__){return cljs.core.pr_sequential_writer(writer__4249__auto__,cljs.core.pr_writer,""," ","",opts__4250__auto__,keyval__4252__auto__);
});})(this__4248__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4249__auto__,pr_pair__4251__auto__,"#drag-and-drop.core.Click{",", ","}",opts__4250__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$107,self__.pos],null))], null),self__.__extmap));
});
drag_and_drop.core.Click.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4232__auto__){var self__ = this;
var this__4232__auto____$1 = this;return self__.__meta;
});
drag_and_drop.core.Click.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4228__auto__){var self__ = this;
var this__4228__auto____$1 = this;return (new drag_and_drop.core.Click(self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});
drag_and_drop.core.Click.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4238__auto__){var self__ = this;
var this__4238__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
drag_and_drop.core.Click.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4229__auto__){var self__ = this;
var this__4229__auto____$1 = this;var h__4050__auto__ = self__.__hash;if(!((h__4050__auto__ == null)))
{return h__4050__auto__;
} else
{var h__4050__auto____$1 = cljs.core.hash_imap(this__4229__auto____$1);self__.__hash = h__4050__auto____$1;
return h__4050__auto____$1;
}
});
drag_and_drop.core.Click.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4230__auto__,other__4231__auto__){var self__ = this;
var this__4230__auto____$1 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = other__4231__auto__;if(cljs.core.truth_(and__3627__auto__))
{return ((this__4230__auto____$1.constructor === other__4231__auto__.constructor)) && (cljs.core.equiv_map(this__4230__auto____$1,other__4231__auto__));
} else
{return and__3627__auto__;
}
})()))
{return true;
} else
{return false;
}
});
drag_and_drop.core.Click.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4243__auto__,k__4244__auto__){var self__ = this;
var this__4243__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$107,null], null), null),k__4244__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4243__auto____$1),self__.__meta),k__4244__auto__);
} else
{return (new drag_and_drop.core.Click(self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4244__auto__)),null));
}
});
drag_and_drop.core.Click.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4241__auto__,k__4242__auto__,G__15867){var self__ = this;
var this__4241__auto____$1 = this;var pred__15872 = cljs.core.keyword_identical_QMARK_;var expr__15873 = k__4242__auto__;if(cljs.core.truth_((function (){var G__15875 = cljs.core.constant$keyword$107;var G__15876 = expr__15873;return (pred__15872.cljs$core$IFn$_invoke$arity$2 ? pred__15872.cljs$core$IFn$_invoke$arity$2(G__15875,G__15876) : pred__15872.call(null,G__15875,G__15876));
})()))
{return (new drag_and_drop.core.Click(G__15867,self__.__meta,self__.__extmap,null));
} else
{return (new drag_and_drop.core.Click(self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4242__auto__,G__15867),null));
}
});
drag_and_drop.core.Click.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4246__auto__){var self__ = this;
var this__4246__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$107,self__.pos],null))], null),self__.__extmap));
});
drag_and_drop.core.Click.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4233__auto__,G__15867){var self__ = this;
var this__4233__auto____$1 = this;return (new drag_and_drop.core.Click(self__.pos,G__15867,self__.__extmap,self__.__hash));
});
drag_and_drop.core.Click.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4239__auto__,entry__4240__auto__){var self__ = this;
var this__4239__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4240__auto__))
{return cljs.core._assoc(this__4239__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4240__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4240__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4239__auto____$1,entry__4240__auto__);
}
});
drag_and_drop.core.Click.prototype.call = (function (self__,state){var self__ = this;
var self____$1 = this;var _ = self____$1;return drag_and_drop.core.click(self__.pos,state);
});
drag_and_drop.core.Click.prototype.apply = (function (self__,args15870){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15870)));
});
drag_and_drop.core.Click.prototype.cljs$core$IFn$_invoke$arity$1 = (function (state){var self__ = this;
var _ = this;return drag_and_drop.core.click(self__.pos,state);
});
drag_and_drop.core.Click.cljs$lang$type = true;
drag_and_drop.core.Click.cljs$lang$ctorPrSeq = (function (this__4268__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"drag-and-drop.core/Click");
});
drag_and_drop.core.Click.cljs$lang$ctorPrWriter = (function (this__4268__auto__,writer__4269__auto__){return cljs.core._write(writer__4269__auto__,"drag-and-drop.core/Click");
});
drag_and_drop.core.__GT_Click = (function __GT_Click(pos){return (new drag_and_drop.core.Click(pos));
});
drag_and_drop.core.map__GT_Click = (function map__GT_Click(G__15869){return (new drag_and_drop.core.Click(cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__15869),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15869,cljs.core.constant$keyword$107)));
});

/**
* @constructor
* @param {*} pos
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
drag_and_drop.core.StartDrag = (function (pos,__meta,__extmap){
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667595;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
drag_and_drop.core.StartDrag.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4234__auto__,k__4235__auto__){var self__ = this;
var this__4234__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4234__auto____$1,k__4235__auto__,null);
});
drag_and_drop.core.StartDrag.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4236__auto__,k15879,else__4237__auto__){var self__ = this;
var this__4236__auto____$1 = this;var G__15882 = (((k15879 instanceof cljs.core.Keyword))?k15879.fqn:null);switch (G__15882) {
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15879,else__4237__auto__);

}
});
drag_and_drop.core.StartDrag.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4248__auto__,writer__4249__auto__,opts__4250__auto__){var self__ = this;
var this__4248__auto____$1 = this;var pr_pair__4251__auto__ = ((function (this__4248__auto____$1){
return (function (keyval__4252__auto__){return cljs.core.pr_sequential_writer(writer__4249__auto__,cljs.core.pr_writer,""," ","",opts__4250__auto__,keyval__4252__auto__);
});})(this__4248__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4249__auto__,pr_pair__4251__auto__,"#drag-and-drop.core.StartDrag{",", ","}",opts__4250__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$107,self__.pos],null))], null),self__.__extmap));
});
drag_and_drop.core.StartDrag.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4232__auto__){var self__ = this;
var this__4232__auto____$1 = this;return self__.__meta;
});
drag_and_drop.core.StartDrag.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4228__auto__){var self__ = this;
var this__4228__auto____$1 = this;return (new drag_and_drop.core.StartDrag(self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});
drag_and_drop.core.StartDrag.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4238__auto__){var self__ = this;
var this__4238__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
drag_and_drop.core.StartDrag.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4229__auto__){var self__ = this;
var this__4229__auto____$1 = this;var h__4050__auto__ = self__.__hash;if(!((h__4050__auto__ == null)))
{return h__4050__auto__;
} else
{var h__4050__auto____$1 = cljs.core.hash_imap(this__4229__auto____$1);self__.__hash = h__4050__auto____$1;
return h__4050__auto____$1;
}
});
drag_and_drop.core.StartDrag.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4230__auto__,other__4231__auto__){var self__ = this;
var this__4230__auto____$1 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = other__4231__auto__;if(cljs.core.truth_(and__3627__auto__))
{return ((this__4230__auto____$1.constructor === other__4231__auto__.constructor)) && (cljs.core.equiv_map(this__4230__auto____$1,other__4231__auto__));
} else
{return and__3627__auto__;
}
})()))
{return true;
} else
{return false;
}
});
drag_and_drop.core.StartDrag.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4243__auto__,k__4244__auto__){var self__ = this;
var this__4243__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$107,null], null), null),k__4244__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4243__auto____$1),self__.__meta),k__4244__auto__);
} else
{return (new drag_and_drop.core.StartDrag(self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4244__auto__)),null));
}
});
drag_and_drop.core.StartDrag.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4241__auto__,k__4242__auto__,G__15878){var self__ = this;
var this__4241__auto____$1 = this;var pred__15883 = cljs.core.keyword_identical_QMARK_;var expr__15884 = k__4242__auto__;if(cljs.core.truth_((function (){var G__15886 = cljs.core.constant$keyword$107;var G__15887 = expr__15884;return (pred__15883.cljs$core$IFn$_invoke$arity$2 ? pred__15883.cljs$core$IFn$_invoke$arity$2(G__15886,G__15887) : pred__15883.call(null,G__15886,G__15887));
})()))
{return (new drag_and_drop.core.StartDrag(G__15878,self__.__meta,self__.__extmap,null));
} else
{return (new drag_and_drop.core.StartDrag(self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4242__auto__,G__15878),null));
}
});
drag_and_drop.core.StartDrag.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4246__auto__){var self__ = this;
var this__4246__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$107,self__.pos],null))], null),self__.__extmap));
});
drag_and_drop.core.StartDrag.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4233__auto__,G__15878){var self__ = this;
var this__4233__auto____$1 = this;return (new drag_and_drop.core.StartDrag(self__.pos,G__15878,self__.__extmap,self__.__hash));
});
drag_and_drop.core.StartDrag.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4239__auto__,entry__4240__auto__){var self__ = this;
var this__4239__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4240__auto__))
{return cljs.core._assoc(this__4239__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4240__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4240__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4239__auto____$1,entry__4240__auto__);
}
});
drag_and_drop.core.StartDrag.prototype.call = (function (self__,state){var self__ = this;
var self____$1 = this;var _ = self____$1;return drag_and_drop.core.start_drag(self__.pos,state);
});
drag_and_drop.core.StartDrag.prototype.apply = (function (self__,args15881){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15881)));
});
drag_and_drop.core.StartDrag.prototype.cljs$core$IFn$_invoke$arity$1 = (function (state){var self__ = this;
var _ = this;return drag_and_drop.core.start_drag(self__.pos,state);
});
drag_and_drop.core.StartDrag.cljs$lang$type = true;
drag_and_drop.core.StartDrag.cljs$lang$ctorPrSeq = (function (this__4268__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"drag-and-drop.core/StartDrag");
});
drag_and_drop.core.StartDrag.cljs$lang$ctorPrWriter = (function (this__4268__auto__,writer__4269__auto__){return cljs.core._write(writer__4269__auto__,"drag-and-drop.core/StartDrag");
});
drag_and_drop.core.__GT_StartDrag = (function __GT_StartDrag(pos){return (new drag_and_drop.core.StartDrag(pos));
});
drag_and_drop.core.map__GT_StartDrag = (function map__GT_StartDrag(G__15880){return (new drag_and_drop.core.StartDrag(cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__15880),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15880,cljs.core.constant$keyword$107)));
});

/**
* @constructor
* @param {*} pos
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
drag_and_drop.core.Drag = (function (pos,__meta,__extmap){
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667595;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
drag_and_drop.core.Drag.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4234__auto__,k__4235__auto__){var self__ = this;
var this__4234__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4234__auto____$1,k__4235__auto__,null);
});
drag_and_drop.core.Drag.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4236__auto__,k15890,else__4237__auto__){var self__ = this;
var this__4236__auto____$1 = this;var G__15893 = (((k15890 instanceof cljs.core.Keyword))?k15890.fqn:null);switch (G__15893) {
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15890,else__4237__auto__);

}
});
drag_and_drop.core.Drag.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4248__auto__,writer__4249__auto__,opts__4250__auto__){var self__ = this;
var this__4248__auto____$1 = this;var pr_pair__4251__auto__ = ((function (this__4248__auto____$1){
return (function (keyval__4252__auto__){return cljs.core.pr_sequential_writer(writer__4249__auto__,cljs.core.pr_writer,""," ","",opts__4250__auto__,keyval__4252__auto__);
});})(this__4248__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4249__auto__,pr_pair__4251__auto__,"#drag-and-drop.core.Drag{",", ","}",opts__4250__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$107,self__.pos],null))], null),self__.__extmap));
});
drag_and_drop.core.Drag.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4232__auto__){var self__ = this;
var this__4232__auto____$1 = this;return self__.__meta;
});
drag_and_drop.core.Drag.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4228__auto__){var self__ = this;
var this__4228__auto____$1 = this;return (new drag_and_drop.core.Drag(self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});
drag_and_drop.core.Drag.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4238__auto__){var self__ = this;
var this__4238__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
drag_and_drop.core.Drag.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4229__auto__){var self__ = this;
var this__4229__auto____$1 = this;var h__4050__auto__ = self__.__hash;if(!((h__4050__auto__ == null)))
{return h__4050__auto__;
} else
{var h__4050__auto____$1 = cljs.core.hash_imap(this__4229__auto____$1);self__.__hash = h__4050__auto____$1;
return h__4050__auto____$1;
}
});
drag_and_drop.core.Drag.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4230__auto__,other__4231__auto__){var self__ = this;
var this__4230__auto____$1 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = other__4231__auto__;if(cljs.core.truth_(and__3627__auto__))
{return ((this__4230__auto____$1.constructor === other__4231__auto__.constructor)) && (cljs.core.equiv_map(this__4230__auto____$1,other__4231__auto__));
} else
{return and__3627__auto__;
}
})()))
{return true;
} else
{return false;
}
});
drag_and_drop.core.Drag.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4243__auto__,k__4244__auto__){var self__ = this;
var this__4243__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$107,null], null), null),k__4244__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4243__auto____$1),self__.__meta),k__4244__auto__);
} else
{return (new drag_and_drop.core.Drag(self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4244__auto__)),null));
}
});
drag_and_drop.core.Drag.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4241__auto__,k__4242__auto__,G__15889){var self__ = this;
var this__4241__auto____$1 = this;var pred__15894 = cljs.core.keyword_identical_QMARK_;var expr__15895 = k__4242__auto__;if(cljs.core.truth_((function (){var G__15897 = cljs.core.constant$keyword$107;var G__15898 = expr__15895;return (pred__15894.cljs$core$IFn$_invoke$arity$2 ? pred__15894.cljs$core$IFn$_invoke$arity$2(G__15897,G__15898) : pred__15894.call(null,G__15897,G__15898));
})()))
{return (new drag_and_drop.core.Drag(G__15889,self__.__meta,self__.__extmap,null));
} else
{return (new drag_and_drop.core.Drag(self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4242__auto__,G__15889),null));
}
});
drag_and_drop.core.Drag.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4246__auto__){var self__ = this;
var this__4246__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$107,self__.pos],null))], null),self__.__extmap));
});
drag_and_drop.core.Drag.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4233__auto__,G__15889){var self__ = this;
var this__4233__auto____$1 = this;return (new drag_and_drop.core.Drag(self__.pos,G__15889,self__.__extmap,self__.__hash));
});
drag_and_drop.core.Drag.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4239__auto__,entry__4240__auto__){var self__ = this;
var this__4239__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4240__auto__))
{return cljs.core._assoc(this__4239__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4240__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4240__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4239__auto____$1,entry__4240__auto__);
}
});
drag_and_drop.core.Drag.prototype.call = (function (self__,state){var self__ = this;
var self____$1 = this;var _ = self____$1;return drag_and_drop.core.drag(self__.pos,state);
});
drag_and_drop.core.Drag.prototype.apply = (function (self__,args15892){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15892)));
});
drag_and_drop.core.Drag.prototype.cljs$core$IFn$_invoke$arity$1 = (function (state){var self__ = this;
var _ = this;return drag_and_drop.core.drag(self__.pos,state);
});
drag_and_drop.core.Drag.cljs$lang$type = true;
drag_and_drop.core.Drag.cljs$lang$ctorPrSeq = (function (this__4268__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"drag-and-drop.core/Drag");
});
drag_and_drop.core.Drag.cljs$lang$ctorPrWriter = (function (this__4268__auto__,writer__4269__auto__){return cljs.core._write(writer__4269__auto__,"drag-and-drop.core/Drag");
});
drag_and_drop.core.__GT_Drag = (function __GT_Drag(pos){return (new drag_and_drop.core.Drag(pos));
});
drag_and_drop.core.map__GT_Drag = (function map__GT_Drag(G__15891){return (new drag_and_drop.core.Drag(cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(G__15891),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15891,cljs.core.constant$keyword$107)));
});

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
drag_and_drop.core.StopDrag = (function (__meta,__extmap){
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667595;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>0){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
drag_and_drop.core.StopDrag.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4234__auto__,k__4235__auto__){var self__ = this;
var this__4234__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4234__auto____$1,k__4235__auto__,null);
});
drag_and_drop.core.StopDrag.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4236__auto__,k15901,else__4237__auto__){var self__ = this;
var this__4236__auto____$1 = this;var G__15904 = k15901;switch (G__15904) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15901,else__4237__auto__);

}
});
drag_and_drop.core.StopDrag.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4248__auto__,writer__4249__auto__,opts__4250__auto__){var self__ = this;
var this__4248__auto____$1 = this;var pr_pair__4251__auto__ = ((function (this__4248__auto____$1){
return (function (keyval__4252__auto__){return cljs.core.pr_sequential_writer(writer__4249__auto__,cljs.core.pr_writer,""," ","",opts__4250__auto__,keyval__4252__auto__);
});})(this__4248__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4249__auto__,pr_pair__4251__auto__,"#drag-and-drop.core.StopDrag{",", ","}",opts__4250__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
drag_and_drop.core.StopDrag.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4232__auto__){var self__ = this;
var this__4232__auto____$1 = this;return self__.__meta;
});
drag_and_drop.core.StopDrag.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4228__auto__){var self__ = this;
var this__4228__auto____$1 = this;return (new drag_and_drop.core.StopDrag(self__.__meta,self__.__extmap,self__.__hash));
});
drag_and_drop.core.StopDrag.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4238__auto__){var self__ = this;
var this__4238__auto____$1 = this;return (0 + cljs.core.count(self__.__extmap));
});
drag_and_drop.core.StopDrag.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4229__auto__){var self__ = this;
var this__4229__auto____$1 = this;var h__4050__auto__ = self__.__hash;if(!((h__4050__auto__ == null)))
{return h__4050__auto__;
} else
{var h__4050__auto____$1 = cljs.core.hash_imap(this__4229__auto____$1);self__.__hash = h__4050__auto____$1;
return h__4050__auto____$1;
}
});
drag_and_drop.core.StopDrag.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4230__auto__,other__4231__auto__){var self__ = this;
var this__4230__auto____$1 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = other__4231__auto__;if(cljs.core.truth_(and__3627__auto__))
{return ((this__4230__auto____$1.constructor === other__4231__auto__.constructor)) && (cljs.core.equiv_map(this__4230__auto____$1,other__4231__auto__));
} else
{return and__3627__auto__;
}
})()))
{return true;
} else
{return false;
}
});
drag_and_drop.core.StopDrag.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4243__auto__,k__4244__auto__){var self__ = this;
var this__4243__auto____$1 = this;if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4244__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4243__auto____$1),self__.__meta),k__4244__auto__);
} else
{return (new drag_and_drop.core.StopDrag(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4244__auto__)),null));
}
});
drag_and_drop.core.StopDrag.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4241__auto__,k__4242__auto__,G__15900){var self__ = this;
var this__4241__auto____$1 = this;var pred__15905 = cljs.core.keyword_identical_QMARK_;var expr__15906 = k__4242__auto__;return (new drag_and_drop.core.StopDrag(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4242__auto__,G__15900),null));
});
drag_and_drop.core.StopDrag.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4246__auto__){var self__ = this;
var this__4246__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
drag_and_drop.core.StopDrag.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4233__auto__,G__15900){var self__ = this;
var this__4233__auto____$1 = this;return (new drag_and_drop.core.StopDrag(G__15900,self__.__extmap,self__.__hash));
});
drag_and_drop.core.StopDrag.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4239__auto__,entry__4240__auto__){var self__ = this;
var this__4239__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4240__auto__))
{return cljs.core._assoc(this__4239__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4240__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4240__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4239__auto____$1,entry__4240__auto__);
}
});
drag_and_drop.core.StopDrag.prototype.call = (function (self__,state){var self__ = this;
var self____$1 = this;var _ = self____$1;return drag_and_drop.core.stop_drag(state);
});
drag_and_drop.core.StopDrag.prototype.apply = (function (self__,args15903){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15903)));
});
drag_and_drop.core.StopDrag.prototype.cljs$core$IFn$_invoke$arity$1 = (function (state){var self__ = this;
var _ = this;return drag_and_drop.core.stop_drag(state);
});
drag_and_drop.core.StopDrag.cljs$lang$type = true;
drag_and_drop.core.StopDrag.cljs$lang$ctorPrSeq = (function (this__4268__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"drag-and-drop.core/StopDrag");
});
drag_and_drop.core.StopDrag.cljs$lang$ctorPrWriter = (function (this__4268__auto__,writer__4269__auto__){return cljs.core._write(writer__4269__auto__,"drag-and-drop.core/StopDrag");
});
drag_and_drop.core.__GT_StopDrag = (function __GT_StopDrag(){return (new drag_and_drop.core.StopDrag());
});
drag_and_drop.core.map__GT_StopDrag = (function map__GT_StopDrag(G__15902){return (new drag_and_drop.core.StopDrag(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__15902)));
});
drag_and_drop.core.state_signal = (function (){var dragging_positions = jamesmacaulay.zelkova.signal.keep_when(jamesmacaulay.zelkova.mouse.down_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),jamesmacaulay.zelkova.mouse.position);var dragging_QMARK_ = jamesmacaulay.zelkova.signal.drop_repeats(jamesmacaulay.zelkova.signal.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([jamesmacaulay.zelkova.signal.keep_if(cljs.core.not,false,jamesmacaulay.zelkova.mouse.down_QMARK_),jamesmacaulay.zelkova.signal.lift.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constantly(true),cljs.core.array_seq([dragging_positions], 0))], 0)));var dragstarts = jamesmacaulay.zelkova.signal.keep_if(cljs.core.identity,true,dragging_QMARK_);var dragstops = jamesmacaulay.zelkova.signal.keep_if(cljs.core.not,false,dragging_QMARK_);var click_positions = jamesmacaulay.zelkova.signal.drop_when(dragging_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),jamesmacaulay.zelkova.signal.sample_on(jamesmacaulay.zelkova.mouse.clicks,jamesmacaulay.zelkova.mouse.position));var actions = jamesmacaulay.zelkova.signal.log(jamesmacaulay.zelkova.signal.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([jamesmacaulay.zelkova.signal.constant(drag_and_drop.core.__GT_NoOp()),jamesmacaulay.zelkova.signal.lift.cljs$core$IFn$_invoke$arity$variadic(drag_and_drop.core.__GT_StartDrag,cljs.core.array_seq([jamesmacaulay.zelkova.signal.sample_on(dragstarts,jamesmacaulay.zelkova.mouse.position)], 0)),jamesmacaulay.zelkova.signal.lift.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constantly(drag_and_drop.core.__GT_StopDrag()),cljs.core.array_seq([dragstops], 0)),jamesmacaulay.zelkova.signal.lift.cljs$core$IFn$_invoke$arity$variadic(drag_and_drop.core.__GT_Drag,cljs.core.array_seq([dragging_positions], 0)),jamesmacaulay.zelkova.signal.lift.cljs$core$IFn$_invoke$arity$variadic(drag_and_drop.core.__GT_Click,cljs.core.array_seq([click_positions], 0))], 0)));return jamesmacaulay.zelkova.signal.foldp(((function (dragging_positions,dragging_QMARK_,dragstarts,dragstops,click_positions,actions){
return (function (action,state){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__15909 = state;return (action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(G__15909) : action.call(null,G__15909));
})(),cljs.core.constant$keyword$108,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([action], 0)));
});})(dragging_positions,dragging_QMARK_,dragstarts,dragstops,click_positions,actions))
,drag_and_drop.core.init_state,actions);
})();
drag_and_drop.core.app_state = jamesmacaulay.zelkova.signal.pipe_to_atom.cljs$core$IFn$_invoke$arity$1(drag_and_drop.core.state_signal);
drag_and_drop.core.box_color = (function box_color(opacity,box){return ("hsla("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(box))+",50%,50%,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(opacity)+")");
});
drag_and_drop.core.render_box = (function render_box(opacity,box){if(cljs.core.truth_(box))
{var G__15912 = {"style": {"height": cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(box), "width": cljs.core.constant$keyword$100.cljs$core$IFn$_invoke$arity$1(box), "left": cljs.core.constant$keyword$99.cljs$core$IFn$_invoke$arity$1(box), "top": cljs.core.constant$keyword$98.cljs$core$IFn$_invoke$arity$1(box), "position": "absolute", "backgroundColor": drag_and_drop.core.box_color(opacity,box)}};var G__15913 = null;return React.DOM.div(G__15912,G__15913);
} else
{return null;
}
});
drag_and_drop.core.render_solid_box = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(drag_and_drop.core.render_box,(1));
drag_and_drop.core.render_ghost_box = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(drag_and_drop.core.render_box,0.5);
drag_and_drop.core.render_state = (function render_state(state){var placed_boxes = cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(state);var moving_boxes = cljs.core.constant$keyword$103.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(state));var resizing_box = cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(state));var G__15936 = {"style": {"user-select": "none", "-ms-user-select": "none", "-moz-user-select": "none", "-khtml-user-select": "none", "-webkit-user-select": "none", "-webkit-touch-callout": "none"}};var G__15937 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,{"class": "placed-boxes"},cljs.core.map.cljs$core$IFn$_invoke$arity$2(drag_and_drop.core.render_solid_box,cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(state)));var G__15938 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,{"class": "moving-boxes"},cljs.core.map.cljs$core$IFn$_invoke$arity$2(drag_and_drop.core.render_ghost_box,moving_boxes));var G__15939 = (function (){var G__15941 = resizing_box;return (drag_and_drop.core.render_ghost_box.cljs$core$IFn$_invoke$arity$1 ? drag_and_drop.core.render_ghost_box.cljs$core$IFn$_invoke$arity$1(G__15941) : drag_and_drop.core.render_ghost_box.call(null,G__15941));
})();var G__15940 = (function (){var G__15942 = {"style": {"position": "relative"}};var G__15943 = (function (){var G__15947 = null;var G__15948 = "Drag and drop";return React.DOM.h1(G__15947,G__15948);
})();var G__15944 = (function (){var G__15949 = null;var G__15950 = (function (){var G__15952 = {"href": "https://github.com/jamesmacaulay/zelkova/blob/gh-pages/examples/drag-and-drop/src/drag_and_drop/core.cljs"};var G__15953 = "View source";return React.DOM.a(G__15952,G__15953);
})();var G__15951 = ".";return React.DOM.p(G__15949,G__15950,G__15951);
})();var G__15945 = (function (){var G__15954 = null;var G__15955 = "Drag to create boxes, drag to move them around, and click to remove them.";return React.DOM.p(G__15954,G__15955);
})();var G__15946 = (function (){var G__15956 = null;var G__15957 = JSON.stringify(cljs.core.clj__GT_js(state),null,(2));return React.DOM.pre(G__15956,G__15957);
})();return React.DOM.div(G__15942,G__15943,G__15944,G__15945,G__15946);
})();return React.DOM.div(G__15936,G__15937,G__15938,G__15939,G__15940);
});
om.core.root((function (app,owner){if(typeof drag_and_drop.core.t15958 !== 'undefined')
{} else
{
/**
* @constructor
*/
drag_and_drop.core.t15958 = (function (owner,app,meta15959){
this.owner = owner;
this.app = app;
this.meta15959 = meta15959;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
drag_and_drop.core.t15958.cljs$lang$type = true;
drag_and_drop.core.t15958.cljs$lang$ctorStr = "drag-and-drop.core/t15958";
drag_and_drop.core.t15958.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"drag-and-drop.core/t15958");
});
drag_and_drop.core.t15958.prototype.om$core$IRender$ = true;
drag_and_drop.core.t15958.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return drag_and_drop.core.render_state(self__.app);
});
drag_and_drop.core.t15958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15960){var self__ = this;
var _15960__$1 = this;return self__.meta15959;
});
drag_and_drop.core.t15958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15960,meta15959__$1){var self__ = this;
var _15960__$1 = this;return (new drag_and_drop.core.t15958(self__.owner,self__.app,meta15959__$1));
});
drag_and_drop.core.__GT_t15958 = (function __GT_t15958(owner__$1,app__$1,meta15959){return (new drag_and_drop.core.t15958(owner__$1,app__$1,meta15959));
});
}
return (new drag_and_drop.core.t15958(owner,app,null));
}),drag_and_drop.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$95,document.getElementById("app")], null));
