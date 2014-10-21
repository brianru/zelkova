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
cljs.core.enable_console_print_BANG_.call(null);
drag_and_drop.core.init_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boxes","boxes",-420813822),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"drag","drag",449951290),null], null);
drag_and_drop.core.pos__GT_hue = (function pos__GT_hue(p__38739){var vec__38741 = p__38739;var x = cljs.core.nth.call(null,vec__38741,(0),null);var y = cljs.core.nth.call(null,vec__38741,(1),null);return cljs.core.mod.call(null,((x / (2)) + (y / (2))),(360));
});
drag_and_drop.core.build_box = (function build_box(p__38742,p__38743){var vec__38748 = p__38742;var x1 = cljs.core.nth.call(null,vec__38748,(0),null);var y1 = cljs.core.nth.call(null,vec__38748,(1),null);var vec__38749 = p__38743;var x2 = cljs.core.nth.call(null,vec__38749,(0),null);var y2 = cljs.core.nth.call(null,vec__38749,(1),null);var vec__38750 = cljs.core.sort.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y1,y2], null));var top = cljs.core.nth.call(null,vec__38750,(0),null);var bottom = cljs.core.nth.call(null,vec__38750,(1),null);var vec__38751 = cljs.core.sort.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,x2], null));var left = cljs.core.nth.call(null,vec__38751,(0),null);var right = cljs.core.nth.call(null,vec__38751,(1),null);var centre = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((left + right) / (2)),((top + bottom) / (2))], null);return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),top,new cljs.core.Keyword(null,"left","left",-399115937),left,new cljs.core.Keyword(null,"width","width",-384071477),(right - left),new cljs.core.Keyword(null,"height","height",1025178622),(bottom - top),new cljs.core.Keyword(null,"hue","hue",-508078848),drag_and_drop.core.pos__GT_hue.call(null,centre),new cljs.core.Keyword(null,"resizing?","resizing?",1963364160),true], null);
});
drag_and_drop.core.in_box_QMARK_ = (function in_box_QMARK_(p__38752,p__38753){var vec__38756 = p__38752;var x = cljs.core.nth.call(null,vec__38756,(0),null);var y = cljs.core.nth.call(null,vec__38756,(1),null);var map__38757 = p__38753;var map__38757__$1 = ((cljs.core.seq_QMARK_.call(null,map__38757))?cljs.core.apply.call(null,cljs.core.hash_map,map__38757):map__38757);var height = cljs.core.get.call(null,map__38757__$1,new cljs.core.Keyword(null,"height","height",1025178622));var width = cljs.core.get.call(null,map__38757__$1,new cljs.core.Keyword(null,"width","width",-384071477));var left = cljs.core.get.call(null,map__38757__$1,new cljs.core.Keyword(null,"left","left",-399115937));var top = cljs.core.get.call(null,map__38757__$1,new cljs.core.Keyword(null,"top","top",-1856271961));return (((left < x)) && ((x < (left + width)))) && (((top < y)) && ((y < (top + height))));
});
drag_and_drop.core.moving_QMARK_ = (function moving_QMARK_(box){return cljs.core.contains_QMARK_.call(null,box,new cljs.core.Keyword(null,"drag-offset","drag-offset",538763357));
});
drag_and_drop.core.resizing_QMARK_ = (function resizing_QMARK_(box){return new cljs.core.Keyword(null,"resizing?","resizing?",1963364160).cljs$core$IFn$_invoke$arity$1(box);
});
drag_and_drop.core.click = (function click(pos,state){var without_clicked = cljs.core.remove.call(null,cljs.core.partial.call(null,drag_and_drop.core.in_box_QMARK_,pos));return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boxes","boxes",-420813822)], null),cljs.core.partial.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,without_clicked));
});
drag_and_drop.core.topleft_pos = (function topleft_pos(p__38758){var map__38760 = p__38758;var map__38760__$1 = ((cljs.core.seq_QMARK_.call(null,map__38760))?cljs.core.apply.call(null,cljs.core.hash_map,map__38760):map__38760);var top = cljs.core.get.call(null,map__38760__$1,new cljs.core.Keyword(null,"top","top",-1856271961));var left = cljs.core.get.call(null,map__38760__$1,new cljs.core.Keyword(null,"left","left",-399115937));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null);
});
drag_and_drop.core.start_dragging_box_from_pos = (function start_dragging_box_from_pos(pos,box){var offset = cljs.core.map.call(null,cljs.core._,pos,drag_and_drop.core.topleft_pos.call(null,box));return cljs.core.assoc.call(null,box,new cljs.core.Keyword(null,"drag-offset","drag-offset",538763357),offset);
});
drag_and_drop.core.start_drag = (function start_drag(pos,state){var drag_target_QMARK_ = cljs.core.partial.call(null,drag_and_drop.core.in_box_QMARK_,pos);var map__38762 = cljs.core.group_by.call(null,drag_target_QMARK_,new cljs.core.Keyword(null,"boxes","boxes",-420813822).cljs$core$IFn$_invoke$arity$1(state));var map__38762__$1 = ((cljs.core.seq_QMARK_.call(null,map__38762))?cljs.core.apply.call(null,cljs.core.hash_map,map__38762):map__38762);var targets = cljs.core.get.call(null,map__38762__$1,true);var non_targets = cljs.core.get.call(null,map__38762__$1,false);var boxes_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,non_targets,cljs.core.map.call(null,cljs.core.partial.call(null,drag_and_drop.core.start_dragging_box_from_pos,pos),targets),((cljs.core.empty_QMARK_.call(null,targets))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drag_and_drop.core.build_box.call(null,pos,pos)], null):null)));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"boxes","boxes",-420813822),boxes_SINGLEQUOTE_,new cljs.core.Keyword(null,"drag","drag",449951290),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-pos","start-pos",668789086),pos], null));
});
drag_and_drop.core.drag = (function drag(pos,state){var box_category = (function (p1__38763_SHARP_){if(drag_and_drop.core.moving_QMARK_.call(null,p1__38763_SHARP_))
{return new cljs.core.Keyword(null,"moving","moving",1760797240);
} else
{if(cljs.core.truth_(drag_and_drop.core.resizing_QMARK_.call(null,p1__38763_SHARP_)))
{return new cljs.core.Keyword(null,"resizing","resizing",614477988);
} else
{return new cljs.core.Keyword(null,"placed","placed",2080582174);

}
}
});var map__38766 = cljs.core.group_by.call(null,box_category,new cljs.core.Keyword(null,"boxes","boxes",-420813822).cljs$core$IFn$_invoke$arity$1(state));var map__38766__$1 = ((cljs.core.seq_QMARK_.call(null,map__38766))?cljs.core.apply.call(null,cljs.core.hash_map,map__38766):map__38766);var resizing = cljs.core.get.call(null,map__38766__$1,new cljs.core.Keyword(null,"resizing","resizing",614477988));var moving = cljs.core.get.call(null,map__38766__$1,new cljs.core.Keyword(null,"moving","moving",1760797240));var placed = cljs.core.get.call(null,map__38766__$1,new cljs.core.Keyword(null,"placed","placed",2080582174));var drag_to_pos = ((function (box_category,map__38766,map__38766__$1,resizing,moving,placed){
return (function (box){var vec__38767 = cljs.core.map.call(null,cljs.core._,pos,new cljs.core.Keyword(null,"drag-offset","drag-offset",538763357).cljs$core$IFn$_invoke$arity$1(box));var left = cljs.core.nth.call(null,vec__38767,(0),null);var top = cljs.core.nth.call(null,vec__38767,(1),null);return cljs.core.assoc.call(null,box,new cljs.core.Keyword(null,"left","left",-399115937),left,new cljs.core.Keyword(null,"top","top",-1856271961),top);
});})(box_category,map__38766,map__38766__$1,resizing,moving,placed))
;var boxes_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,placed,cljs.core.map.call(null,drag_to_pos,moving),cljs.core.map.call(null,((function (box_category,map__38766,map__38766__$1,resizing,moving,placed,drag_to_pos){
return (function (_){return drag_and_drop.core.build_box.call(null,pos,new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"drag","drag",449951290).cljs$core$IFn$_invoke$arity$1(state)));
});})(box_category,map__38766,map__38766__$1,resizing,moving,placed,drag_to_pos))
,resizing)));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"boxes","boxes",-420813822),boxes_SINGLEQUOTE_);
});
drag_and_drop.core.drop_boxes = (function drop_boxes(state){var drop_box = (function (box){return cljs.core.dissoc.call(null,box,new cljs.core.Keyword(null,"drag-offset","drag-offset",538763357),new cljs.core.Keyword(null,"resizing?","resizing?",1963364160));
});return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boxes","boxes",-420813822)], null),cljs.core.partial.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,drop_box)));
});
drag_and_drop.core.stop_drag = (function stop_drag(state){return cljs.core.assoc.call(null,drag_and_drop.core.drop_boxes.call(null,state),new cljs.core.Keyword(null,"drag","drag",449951290),null);
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
var this__4234__auto____$1 = this;return cljs.core._lookup.call(null,this__4234__auto____$1,k__4235__auto__,null);
});
drag_and_drop.core.NoOp.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4236__auto__,k38769,else__4237__auto__){var self__ = this;
var this__4236__auto____$1 = this;var G__38772 = k38769;switch (G__38772) {
default:
return cljs.core.get.call(null,self__.__extmap,k38769,else__4237__auto__);

}
});
drag_and_drop.core.NoOp.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4248__auto__,writer__4249__auto__,opts__4250__auto__){var self__ = this;
var this__4248__auto____$1 = this;var pr_pair__4251__auto__ = ((function (this__4248__auto____$1){
return (function (keyval__4252__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4249__auto__,cljs.core.pr_writer,""," ","",opts__4250__auto__,keyval__4252__auto__);
});})(this__4248__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4249__auto__,pr_pair__4251__auto__,"#drag-and-drop.core.NoOp{",", ","}",opts__4250__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
drag_and_drop.core.NoOp.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4232__auto__){var self__ = this;
var this__4232__auto____$1 = this;return self__.__meta;
});
drag_and_drop.core.NoOp.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4228__auto__){var self__ = this;
var this__4228__auto____$1 = this;return (new drag_and_drop.core.NoOp(self__.__meta,self__.__extmap,self__.__hash));
});
drag_and_drop.core.NoOp.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4238__auto__){var self__ = this;
var this__4238__auto____$1 = this;return (0 + cljs.core.count.call(null,self__.__extmap));
});
drag_and_drop.core.NoOp.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4229__auto__){var self__ = this;
var this__4229__auto____$1 = this;var h__4050__auto__ = self__.__hash;if(!((h__4050__auto__ == null)))
{return h__4050__auto__;
} else
{var h__4050__auto____$1 = cljs.core.hash_imap.call(null,this__4229__auto____$1);self__.__hash = h__4050__auto____$1;
return h__4050__auto____$1;
}
});
drag_and_drop.core.NoOp.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4230__auto__,other__4231__auto__){var self__ = this;
var this__4230__auto____$1 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = other__4231__auto__;if(cljs.core.truth_(and__3627__auto__))
{return ((this__4230__auto____$1.constructor === other__4231__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4230__auto____$1,other__4231__auto__));
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
var this__4243__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4244__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4243__auto____$1),self__.__meta),k__4244__auto__);
} else
{return (new drag_and_drop.core.NoOp(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4244__auto__)),null));
}
});
drag_and_drop.core.NoOp.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4241__auto__,k__4242__auto__,G__38768){var self__ = this;
var this__4241__auto____$1 = this;var pred__38773 = cljs.core.keyword_identical_QMARK_;var expr__38774 = k__4242__auto__;return (new drag_and_drop.core.NoOp(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4242__auto__,G__38768),null));
});
drag_and_drop.core.NoOp.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4246__auto__){var self__ = this;
var this__4246__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
drag_and_drop.core.NoOp.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4233__auto__,G__38768){var self__ = this;
var this__4233__auto____$1 = this;return (new drag_and_drop.core.NoOp(G__38768,self__.__extmap,self__.__hash));
});
drag_and_drop.core.NoOp.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4239__auto__,entry__4240__auto__){var self__ = this;
var this__4239__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4240__auto__))
{return cljs.core._assoc.call(null,this__4239__auto____$1,cljs.core._nth.call(null,entry__4240__auto__,(0)),cljs.core._nth.call(null,entry__4240__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4239__auto____$1,entry__4240__auto__);
}
});
drag_and_drop.core.NoOp.prototype.call = (function (self__,state){var self__ = this;
var self____$1 = this;var _ = self____$1;return state;
});
drag_and_drop.core.NoOp.prototype.apply = (function (self__,args38771){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args38771)));
});
drag_and_drop.core.NoOp.prototype.cljs$core$IFn$_invoke$arity$1 = (function (state){var self__ = this;
var _ = this;return state;
});
drag_and_drop.core.NoOp.cljs$lang$type = true;
drag_and_drop.core.NoOp.cljs$lang$ctorPrSeq = (function (this__4268__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"drag-and-drop.core/NoOp");
});
drag_and_drop.core.NoOp.cljs$lang$ctorPrWriter = (function (this__4268__auto__,writer__4269__auto__){return cljs.core._write.call(null,writer__4269__auto__,"drag-and-drop.core/NoOp");
});
drag_and_drop.core.__GT_NoOp = (function __GT_NoOp(){return (new drag_and_drop.core.NoOp());
});
drag_and_drop.core.map__GT_NoOp = (function map__GT_NoOp(G__38770){return (new drag_and_drop.core.NoOp(null,cljs.core.dissoc.call(null,G__38770)));
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
var this__4234__auto____$1 = this;return cljs.core._lookup.call(null,this__4234__auto____$1,k__4235__auto__,null);
});
drag_and_drop.core.Click.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4236__auto__,k38778,else__4237__auto__){var self__ = this;
var this__4236__auto____$1 = this;var G__38781 = (((k38778 instanceof cljs.core.Keyword))?k38778.fqn:null);switch (G__38781) {
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k38778,else__4237__auto__);

}
});
drag_and_drop.core.Click.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4248__auto__,writer__4249__auto__,opts__4250__auto__){var self__ = this;
var this__4248__auto____$1 = this;var pr_pair__4251__auto__ = ((function (this__4248__auto____$1){
return (function (keyval__4252__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4249__auto__,cljs.core.pr_writer,""," ","",opts__4250__auto__,keyval__4252__auto__);
});})(this__4248__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4249__auto__,pr_pair__4251__auto__,"#drag-and-drop.core.Click{",", ","}",opts__4250__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});
drag_and_drop.core.Click.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4232__auto__){var self__ = this;
var this__4232__auto____$1 = this;return self__.__meta;
});
drag_and_drop.core.Click.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4228__auto__){var self__ = this;
var this__4228__auto____$1 = this;return (new drag_and_drop.core.Click(self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});
drag_and_drop.core.Click.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4238__auto__){var self__ = this;
var this__4238__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
drag_and_drop.core.Click.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4229__auto__){var self__ = this;
var this__4229__auto____$1 = this;var h__4050__auto__ = self__.__hash;if(!((h__4050__auto__ == null)))
{return h__4050__auto__;
} else
{var h__4050__auto____$1 = cljs.core.hash_imap.call(null,this__4229__auto____$1);self__.__hash = h__4050__auto____$1;
return h__4050__auto____$1;
}
});
drag_and_drop.core.Click.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4230__auto__,other__4231__auto__){var self__ = this;
var this__4230__auto____$1 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = other__4231__auto__;if(cljs.core.truth_(and__3627__auto__))
{return ((this__4230__auto____$1.constructor === other__4231__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4230__auto____$1,other__4231__auto__));
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
var this__4243__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),null], null), null),k__4244__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4243__auto____$1),self__.__meta),k__4244__auto__);
} else
{return (new drag_and_drop.core.Click(self__.pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4244__auto__)),null));
}
});
drag_and_drop.core.Click.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4241__auto__,k__4242__auto__,G__38777){var self__ = this;
var this__4241__auto____$1 = this;var pred__38782 = cljs.core.keyword_identical_QMARK_;var expr__38783 = k__4242__auto__;if(cljs.core.truth_(pred__38782.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__38783)))
{return (new drag_and_drop.core.Click(G__38777,self__.__meta,self__.__extmap,null));
} else
{return (new drag_and_drop.core.Click(self__.pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4242__auto__,G__38777),null));
}
});
drag_and_drop.core.Click.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4246__auto__){var self__ = this;
var this__4246__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});
drag_and_drop.core.Click.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4233__auto__,G__38777){var self__ = this;
var this__4233__auto____$1 = this;return (new drag_and_drop.core.Click(self__.pos,G__38777,self__.__extmap,self__.__hash));
});
drag_and_drop.core.Click.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4239__auto__,entry__4240__auto__){var self__ = this;
var this__4239__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4240__auto__))
{return cljs.core._assoc.call(null,this__4239__auto____$1,cljs.core._nth.call(null,entry__4240__auto__,(0)),cljs.core._nth.call(null,entry__4240__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4239__auto____$1,entry__4240__auto__);
}
});
drag_and_drop.core.Click.prototype.call = (function (self__,state){var self__ = this;
var self____$1 = this;var _ = self____$1;return drag_and_drop.core.click.call(null,self__.pos,state);
});
drag_and_drop.core.Click.prototype.apply = (function (self__,args38780){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args38780)));
});
drag_and_drop.core.Click.prototype.cljs$core$IFn$_invoke$arity$1 = (function (state){var self__ = this;
var _ = this;return drag_and_drop.core.click.call(null,self__.pos,state);
});
drag_and_drop.core.Click.cljs$lang$type = true;
drag_and_drop.core.Click.cljs$lang$ctorPrSeq = (function (this__4268__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"drag-and-drop.core/Click");
});
drag_and_drop.core.Click.cljs$lang$ctorPrWriter = (function (this__4268__auto__,writer__4269__auto__){return cljs.core._write.call(null,writer__4269__auto__,"drag-and-drop.core/Click");
});
drag_and_drop.core.__GT_Click = (function __GT_Click(pos){return (new drag_and_drop.core.Click(pos));
});
drag_and_drop.core.map__GT_Click = (function map__GT_Click(G__38779){return (new drag_and_drop.core.Click(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__38779),null,cljs.core.dissoc.call(null,G__38779,new cljs.core.Keyword(null,"pos","pos",-864607220))));
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
var this__4234__auto____$1 = this;return cljs.core._lookup.call(null,this__4234__auto____$1,k__4235__auto__,null);
});
drag_and_drop.core.StartDrag.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4236__auto__,k38787,else__4237__auto__){var self__ = this;
var this__4236__auto____$1 = this;var G__38790 = (((k38787 instanceof cljs.core.Keyword))?k38787.fqn:null);switch (G__38790) {
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k38787,else__4237__auto__);

}
});
drag_and_drop.core.StartDrag.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4248__auto__,writer__4249__auto__,opts__4250__auto__){var self__ = this;
var this__4248__auto____$1 = this;var pr_pair__4251__auto__ = ((function (this__4248__auto____$1){
return (function (keyval__4252__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4249__auto__,cljs.core.pr_writer,""," ","",opts__4250__auto__,keyval__4252__auto__);
});})(this__4248__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4249__auto__,pr_pair__4251__auto__,"#drag-and-drop.core.StartDrag{",", ","}",opts__4250__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});
drag_and_drop.core.StartDrag.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4232__auto__){var self__ = this;
var this__4232__auto____$1 = this;return self__.__meta;
});
drag_and_drop.core.StartDrag.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4228__auto__){var self__ = this;
var this__4228__auto____$1 = this;return (new drag_and_drop.core.StartDrag(self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});
drag_and_drop.core.StartDrag.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4238__auto__){var self__ = this;
var this__4238__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
drag_and_drop.core.StartDrag.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4229__auto__){var self__ = this;
var this__4229__auto____$1 = this;var h__4050__auto__ = self__.__hash;if(!((h__4050__auto__ == null)))
{return h__4050__auto__;
} else
{var h__4050__auto____$1 = cljs.core.hash_imap.call(null,this__4229__auto____$1);self__.__hash = h__4050__auto____$1;
return h__4050__auto____$1;
}
});
drag_and_drop.core.StartDrag.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4230__auto__,other__4231__auto__){var self__ = this;
var this__4230__auto____$1 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = other__4231__auto__;if(cljs.core.truth_(and__3627__auto__))
{return ((this__4230__auto____$1.constructor === other__4231__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4230__auto____$1,other__4231__auto__));
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
var this__4243__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),null], null), null),k__4244__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4243__auto____$1),self__.__meta),k__4244__auto__);
} else
{return (new drag_and_drop.core.StartDrag(self__.pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4244__auto__)),null));
}
});
drag_and_drop.core.StartDrag.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4241__auto__,k__4242__auto__,G__38786){var self__ = this;
var this__4241__auto____$1 = this;var pred__38791 = cljs.core.keyword_identical_QMARK_;var expr__38792 = k__4242__auto__;if(cljs.core.truth_(pred__38791.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__38792)))
{return (new drag_and_drop.core.StartDrag(G__38786,self__.__meta,self__.__extmap,null));
} else
{return (new drag_and_drop.core.StartDrag(self__.pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4242__auto__,G__38786),null));
}
});
drag_and_drop.core.StartDrag.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4246__auto__){var self__ = this;
var this__4246__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});
drag_and_drop.core.StartDrag.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4233__auto__,G__38786){var self__ = this;
var this__4233__auto____$1 = this;return (new drag_and_drop.core.StartDrag(self__.pos,G__38786,self__.__extmap,self__.__hash));
});
drag_and_drop.core.StartDrag.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4239__auto__,entry__4240__auto__){var self__ = this;
var this__4239__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4240__auto__))
{return cljs.core._assoc.call(null,this__4239__auto____$1,cljs.core._nth.call(null,entry__4240__auto__,(0)),cljs.core._nth.call(null,entry__4240__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4239__auto____$1,entry__4240__auto__);
}
});
drag_and_drop.core.StartDrag.prototype.call = (function (self__,state){var self__ = this;
var self____$1 = this;var _ = self____$1;return drag_and_drop.core.start_drag.call(null,self__.pos,state);
});
drag_and_drop.core.StartDrag.prototype.apply = (function (self__,args38789){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args38789)));
});
drag_and_drop.core.StartDrag.prototype.cljs$core$IFn$_invoke$arity$1 = (function (state){var self__ = this;
var _ = this;return drag_and_drop.core.start_drag.call(null,self__.pos,state);
});
drag_and_drop.core.StartDrag.cljs$lang$type = true;
drag_and_drop.core.StartDrag.cljs$lang$ctorPrSeq = (function (this__4268__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"drag-and-drop.core/StartDrag");
});
drag_and_drop.core.StartDrag.cljs$lang$ctorPrWriter = (function (this__4268__auto__,writer__4269__auto__){return cljs.core._write.call(null,writer__4269__auto__,"drag-and-drop.core/StartDrag");
});
drag_and_drop.core.__GT_StartDrag = (function __GT_StartDrag(pos){return (new drag_and_drop.core.StartDrag(pos));
});
drag_and_drop.core.map__GT_StartDrag = (function map__GT_StartDrag(G__38788){return (new drag_and_drop.core.StartDrag(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__38788),null,cljs.core.dissoc.call(null,G__38788,new cljs.core.Keyword(null,"pos","pos",-864607220))));
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
var this__4234__auto____$1 = this;return cljs.core._lookup.call(null,this__4234__auto____$1,k__4235__auto__,null);
});
drag_and_drop.core.Drag.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4236__auto__,k38796,else__4237__auto__){var self__ = this;
var this__4236__auto____$1 = this;var G__38799 = (((k38796 instanceof cljs.core.Keyword))?k38796.fqn:null);switch (G__38799) {
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k38796,else__4237__auto__);

}
});
drag_and_drop.core.Drag.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4248__auto__,writer__4249__auto__,opts__4250__auto__){var self__ = this;
var this__4248__auto____$1 = this;var pr_pair__4251__auto__ = ((function (this__4248__auto____$1){
return (function (keyval__4252__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4249__auto__,cljs.core.pr_writer,""," ","",opts__4250__auto__,keyval__4252__auto__);
});})(this__4248__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4249__auto__,pr_pair__4251__auto__,"#drag-and-drop.core.Drag{",", ","}",opts__4250__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});
drag_and_drop.core.Drag.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4232__auto__){var self__ = this;
var this__4232__auto____$1 = this;return self__.__meta;
});
drag_and_drop.core.Drag.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4228__auto__){var self__ = this;
var this__4228__auto____$1 = this;return (new drag_and_drop.core.Drag(self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});
drag_and_drop.core.Drag.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4238__auto__){var self__ = this;
var this__4238__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
drag_and_drop.core.Drag.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4229__auto__){var self__ = this;
var this__4229__auto____$1 = this;var h__4050__auto__ = self__.__hash;if(!((h__4050__auto__ == null)))
{return h__4050__auto__;
} else
{var h__4050__auto____$1 = cljs.core.hash_imap.call(null,this__4229__auto____$1);self__.__hash = h__4050__auto____$1;
return h__4050__auto____$1;
}
});
drag_and_drop.core.Drag.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4230__auto__,other__4231__auto__){var self__ = this;
var this__4230__auto____$1 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = other__4231__auto__;if(cljs.core.truth_(and__3627__auto__))
{return ((this__4230__auto____$1.constructor === other__4231__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4230__auto____$1,other__4231__auto__));
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
var this__4243__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),null], null), null),k__4244__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4243__auto____$1),self__.__meta),k__4244__auto__);
} else
{return (new drag_and_drop.core.Drag(self__.pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4244__auto__)),null));
}
});
drag_and_drop.core.Drag.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4241__auto__,k__4242__auto__,G__38795){var self__ = this;
var this__4241__auto____$1 = this;var pred__38800 = cljs.core.keyword_identical_QMARK_;var expr__38801 = k__4242__auto__;if(cljs.core.truth_(pred__38800.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__38801)))
{return (new drag_and_drop.core.Drag(G__38795,self__.__meta,self__.__extmap,null));
} else
{return (new drag_and_drop.core.Drag(self__.pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4242__auto__,G__38795),null));
}
});
drag_and_drop.core.Drag.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4246__auto__){var self__ = this;
var this__4246__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});
drag_and_drop.core.Drag.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4233__auto__,G__38795){var self__ = this;
var this__4233__auto____$1 = this;return (new drag_and_drop.core.Drag(self__.pos,G__38795,self__.__extmap,self__.__hash));
});
drag_and_drop.core.Drag.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4239__auto__,entry__4240__auto__){var self__ = this;
var this__4239__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4240__auto__))
{return cljs.core._assoc.call(null,this__4239__auto____$1,cljs.core._nth.call(null,entry__4240__auto__,(0)),cljs.core._nth.call(null,entry__4240__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4239__auto____$1,entry__4240__auto__);
}
});
drag_and_drop.core.Drag.prototype.call = (function (self__,state){var self__ = this;
var self____$1 = this;var _ = self____$1;return drag_and_drop.core.drag.call(null,self__.pos,state);
});
drag_and_drop.core.Drag.prototype.apply = (function (self__,args38798){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args38798)));
});
drag_and_drop.core.Drag.prototype.cljs$core$IFn$_invoke$arity$1 = (function (state){var self__ = this;
var _ = this;return drag_and_drop.core.drag.call(null,self__.pos,state);
});
drag_and_drop.core.Drag.cljs$lang$type = true;
drag_and_drop.core.Drag.cljs$lang$ctorPrSeq = (function (this__4268__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"drag-and-drop.core/Drag");
});
drag_and_drop.core.Drag.cljs$lang$ctorPrWriter = (function (this__4268__auto__,writer__4269__auto__){return cljs.core._write.call(null,writer__4269__auto__,"drag-and-drop.core/Drag");
});
drag_and_drop.core.__GT_Drag = (function __GT_Drag(pos){return (new drag_and_drop.core.Drag(pos));
});
drag_and_drop.core.map__GT_Drag = (function map__GT_Drag(G__38797){return (new drag_and_drop.core.Drag(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__38797),null,cljs.core.dissoc.call(null,G__38797,new cljs.core.Keyword(null,"pos","pos",-864607220))));
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
var this__4234__auto____$1 = this;return cljs.core._lookup.call(null,this__4234__auto____$1,k__4235__auto__,null);
});
drag_and_drop.core.StopDrag.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4236__auto__,k38805,else__4237__auto__){var self__ = this;
var this__4236__auto____$1 = this;var G__38808 = k38805;switch (G__38808) {
default:
return cljs.core.get.call(null,self__.__extmap,k38805,else__4237__auto__);

}
});
drag_and_drop.core.StopDrag.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4248__auto__,writer__4249__auto__,opts__4250__auto__){var self__ = this;
var this__4248__auto____$1 = this;var pr_pair__4251__auto__ = ((function (this__4248__auto____$1){
return (function (keyval__4252__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4249__auto__,cljs.core.pr_writer,""," ","",opts__4250__auto__,keyval__4252__auto__);
});})(this__4248__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4249__auto__,pr_pair__4251__auto__,"#drag-and-drop.core.StopDrag{",", ","}",opts__4250__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
drag_and_drop.core.StopDrag.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4232__auto__){var self__ = this;
var this__4232__auto____$1 = this;return self__.__meta;
});
drag_and_drop.core.StopDrag.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4228__auto__){var self__ = this;
var this__4228__auto____$1 = this;return (new drag_and_drop.core.StopDrag(self__.__meta,self__.__extmap,self__.__hash));
});
drag_and_drop.core.StopDrag.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4238__auto__){var self__ = this;
var this__4238__auto____$1 = this;return (0 + cljs.core.count.call(null,self__.__extmap));
});
drag_and_drop.core.StopDrag.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4229__auto__){var self__ = this;
var this__4229__auto____$1 = this;var h__4050__auto__ = self__.__hash;if(!((h__4050__auto__ == null)))
{return h__4050__auto__;
} else
{var h__4050__auto____$1 = cljs.core.hash_imap.call(null,this__4229__auto____$1);self__.__hash = h__4050__auto____$1;
return h__4050__auto____$1;
}
});
drag_and_drop.core.StopDrag.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4230__auto__,other__4231__auto__){var self__ = this;
var this__4230__auto____$1 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = other__4231__auto__;if(cljs.core.truth_(and__3627__auto__))
{return ((this__4230__auto____$1.constructor === other__4231__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4230__auto____$1,other__4231__auto__));
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
var this__4243__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4244__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4243__auto____$1),self__.__meta),k__4244__auto__);
} else
{return (new drag_and_drop.core.StopDrag(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4244__auto__)),null));
}
});
drag_and_drop.core.StopDrag.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4241__auto__,k__4242__auto__,G__38804){var self__ = this;
var this__4241__auto____$1 = this;var pred__38809 = cljs.core.keyword_identical_QMARK_;var expr__38810 = k__4242__auto__;return (new drag_and_drop.core.StopDrag(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4242__auto__,G__38804),null));
});
drag_and_drop.core.StopDrag.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4246__auto__){var self__ = this;
var this__4246__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
drag_and_drop.core.StopDrag.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4233__auto__,G__38804){var self__ = this;
var this__4233__auto____$1 = this;return (new drag_and_drop.core.StopDrag(G__38804,self__.__extmap,self__.__hash));
});
drag_and_drop.core.StopDrag.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4239__auto__,entry__4240__auto__){var self__ = this;
var this__4239__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4240__auto__))
{return cljs.core._assoc.call(null,this__4239__auto____$1,cljs.core._nth.call(null,entry__4240__auto__,(0)),cljs.core._nth.call(null,entry__4240__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4239__auto____$1,entry__4240__auto__);
}
});
drag_and_drop.core.StopDrag.prototype.call = (function (self__,state){var self__ = this;
var self____$1 = this;var _ = self____$1;return drag_and_drop.core.stop_drag.call(null,state);
});
drag_and_drop.core.StopDrag.prototype.apply = (function (self__,args38807){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args38807)));
});
drag_and_drop.core.StopDrag.prototype.cljs$core$IFn$_invoke$arity$1 = (function (state){var self__ = this;
var _ = this;return drag_and_drop.core.stop_drag.call(null,state);
});
drag_and_drop.core.StopDrag.cljs$lang$type = true;
drag_and_drop.core.StopDrag.cljs$lang$ctorPrSeq = (function (this__4268__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"drag-and-drop.core/StopDrag");
});
drag_and_drop.core.StopDrag.cljs$lang$ctorPrWriter = (function (this__4268__auto__,writer__4269__auto__){return cljs.core._write.call(null,writer__4269__auto__,"drag-and-drop.core/StopDrag");
});
drag_and_drop.core.__GT_StopDrag = (function __GT_StopDrag(){return (new drag_and_drop.core.StopDrag());
});
drag_and_drop.core.map__GT_StopDrag = (function map__GT_StopDrag(G__38806){return (new drag_and_drop.core.StopDrag(null,cljs.core.dissoc.call(null,G__38806)));
});
drag_and_drop.core.state_signal = (function (){var dragging_positions = jamesmacaulay.zelkova.signal.keep_when.call(null,jamesmacaulay.zelkova.mouse.down_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),jamesmacaulay.zelkova.mouse.position);var dragging_QMARK_ = jamesmacaulay.zelkova.signal.drop_repeats.call(null,jamesmacaulay.zelkova.signal.merge.call(null,jamesmacaulay.zelkova.signal.keep_if.call(null,cljs.core.not,false,jamesmacaulay.zelkova.mouse.down_QMARK_),jamesmacaulay.zelkova.signal.sample_on.call(null,dragging_positions,jamesmacaulay.zelkova.signal.constant.call(null,true))));var dragstarts = jamesmacaulay.zelkova.signal.keep_if.call(null,cljs.core.identity,true,dragging_QMARK_);var dragstops = jamesmacaulay.zelkova.signal.keep_if.call(null,cljs.core.not,false,dragging_QMARK_);var click_positions = jamesmacaulay.zelkova.signal.drop_when.call(null,dragging_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),jamesmacaulay.zelkova.signal.sample_on.call(null,jamesmacaulay.zelkova.mouse.clicks,jamesmacaulay.zelkova.mouse.position));var actions = jamesmacaulay.zelkova.signal.log.call(null,jamesmacaulay.zelkova.signal.merge.call(null,jamesmacaulay.zelkova.signal.constant.call(null,drag_and_drop.core.__GT_NoOp.call(null)),jamesmacaulay.zelkova.signal.lift.call(null,drag_and_drop.core.__GT_StartDrag,jamesmacaulay.zelkova.signal.sample_on.call(null,dragstarts,jamesmacaulay.zelkova.mouse.position)),jamesmacaulay.zelkova.signal.lift.call(null,cljs.core.constantly.call(null,drag_and_drop.core.__GT_StopDrag.call(null)),dragstops),jamesmacaulay.zelkova.signal.lift.call(null,drag_and_drop.core.__GT_Drag,dragging_positions),jamesmacaulay.zelkova.signal.lift.call(null,drag_and_drop.core.__GT_Click,click_positions)));return jamesmacaulay.zelkova.signal.foldp.call(null,((function (dragging_positions,dragging_QMARK_,dragstarts,dragstops,click_positions,actions){
return (function (action,state){return cljs.core.assoc.call(null,action.call(null,state),new cljs.core.Keyword(null,"last-action","last-action",1526677844),cljs.core.pr_str.call(null,action));
});})(dragging_positions,dragging_QMARK_,dragstarts,dragstops,click_positions,actions))
,drag_and_drop.core.init_state,actions);
})();
drag_and_drop.core.app_state = jamesmacaulay.zelkova.signal.pipe_to_atom.call(null,drag_and_drop.core.state_signal);
drag_and_drop.core.box_color = (function box_color(box){var opacity = (cljs.core.truth_((function (){var or__3639__auto__ = drag_and_drop.core.moving_QMARK_.call(null,box);if(or__3639__auto__)
{return or__3639__auto__;
} else
{return drag_and_drop.core.resizing_QMARK_.call(null,box);
}
})())?0.5:(1));return ("hsla("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hue","hue",-508078848).cljs$core$IFn$_invoke$arity$1(box))+",50%,50%,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(opacity)+")");
});
drag_and_drop.core.render_box = (function render_box(box){if(cljs.core.truth_(box))
{return React.DOM.div({"style": {"height": new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(box), "width": new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(box), "left": new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(box), "top": new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(box), "position": "absolute", "backgroundColor": drag_and_drop.core.box_color.call(null,box)}},null);
} else
{return null;
}
});
drag_and_drop.core.render_state = (function render_state(state){return React.DOM.div({"style": {"user-select": "none", "-ms-user-select": "none", "-moz-user-select": "none", "-khtml-user-select": "none", "-webkit-user-select": "none", "-webkit-touch-callout": "none"}},cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,drag_and_drop.core.render_box,new cljs.core.Keyword(null,"boxes","boxes",-420813822).cljs$core$IFn$_invoke$arity$1(state))),React.DOM.div({"style": {"position": "relative"}},React.DOM.h1(null,"Drag and drop"),React.DOM.p(null,React.DOM.a({"href": "https://github.com/jamesmacaulay/zelkova/blob/gh-pages/examples/drag-and-drop/src/drag_and_drop/core.cljs"},"View source"),"."),React.DOM.p(null,"Drag to create boxes, drag to move them around, and click to remove them."),React.DOM.pre(null,JSON.stringify(cljs.core.clj__GT_js.call(null,state),null,(2)))));
});
om.core.root.call(null,(function (app,owner){if(typeof drag_and_drop.core.t38813 !== 'undefined')
{} else
{
/**
* @constructor
*/
drag_and_drop.core.t38813 = (function (owner,app,meta38814){
this.owner = owner;
this.app = app;
this.meta38814 = meta38814;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
drag_and_drop.core.t38813.cljs$lang$type = true;
drag_and_drop.core.t38813.cljs$lang$ctorStr = "drag-and-drop.core/t38813";
drag_and_drop.core.t38813.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"drag-and-drop.core/t38813");
});
drag_and_drop.core.t38813.prototype.om$core$IRender$ = true;
drag_and_drop.core.t38813.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return drag_and_drop.core.render_state.call(null,self__.app);
});
drag_and_drop.core.t38813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38815){var self__ = this;
var _38815__$1 = this;return self__.meta38814;
});
drag_and_drop.core.t38813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38815,meta38814__$1){var self__ = this;
var _38815__$1 = this;return (new drag_and_drop.core.t38813(self__.owner,self__.app,meta38814__$1));
});
drag_and_drop.core.__GT_t38813 = (function __GT_t38813(owner__$1,app__$1,meta38814){return (new drag_and_drop.core.t38813(owner__$1,app__$1,meta38814));
});
}
return (new drag_and_drop.core.t38813(owner,app,null));
}),drag_and_drop.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map