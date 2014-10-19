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
drag_and_drop.core.init_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placed-boxes","placed-boxes",-26091459),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"drag","drag",449951290),null], null);
drag_and_drop.core.pos__GT_hue = (function pos__GT_hue(p__10681){var vec__10683 = p__10681;var x = cljs.core.nth.call(null,vec__10683,(0),null);var y = cljs.core.nth.call(null,vec__10683,(1),null);return cljs.core.mod.call(null,((x / (2)) + (y / (2))),(360));
});
drag_and_drop.core.build_box = (function build_box(p__10684,p__10685){var vec__10690 = p__10684;var x1 = cljs.core.nth.call(null,vec__10690,(0),null);var y1 = cljs.core.nth.call(null,vec__10690,(1),null);var vec__10691 = p__10685;var x2 = cljs.core.nth.call(null,vec__10691,(0),null);var y2 = cljs.core.nth.call(null,vec__10691,(1),null);var vec__10692 = cljs.core.sort.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y1,y2], null));var top = cljs.core.nth.call(null,vec__10692,(0),null);var bottom = cljs.core.nth.call(null,vec__10692,(1),null);var vec__10693 = cljs.core.sort.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,x2], null));var left = cljs.core.nth.call(null,vec__10693,(0),null);var right = cljs.core.nth.call(null,vec__10693,(1),null);var centre = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((left + right) / (2)),((top + bottom) / (2))], null);return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"top","top",-1856271961),top,new cljs.core.Keyword(null,"left","left",-399115937),left,new cljs.core.Keyword(null,"width","width",-384071477),(right - left),new cljs.core.Keyword(null,"height","height",1025178622),(bottom - top),new cljs.core.Keyword(null,"hue","hue",-508078848),drag_and_drop.core.pos__GT_hue.call(null,centre)], null);
});
drag_and_drop.core.centred_box = (function centred_box(centre_pos){var scale = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(20)], null);return drag_and_drop.core.build_box.call(null,cljs.core.map.call(null,cljs.core._,centre_pos,scale),cljs.core.map.call(null,cljs.core._PLUS_,centre_pos,scale));
});
drag_and_drop.core.in_box_QMARK_ = (function in_box_QMARK_(p__10694,p__10695){var vec__10698 = p__10694;var x = cljs.core.nth.call(null,vec__10698,(0),null);var y = cljs.core.nth.call(null,vec__10698,(1),null);var map__10699 = p__10695;var map__10699__$1 = ((cljs.core.seq_QMARK_.call(null,map__10699))?cljs.core.apply.call(null,cljs.core.hash_map,map__10699):map__10699);var height = cljs.core.get.call(null,map__10699__$1,new cljs.core.Keyword(null,"height","height",1025178622));var width = cljs.core.get.call(null,map__10699__$1,new cljs.core.Keyword(null,"width","width",-384071477));var left = cljs.core.get.call(null,map__10699__$1,new cljs.core.Keyword(null,"left","left",-399115937));var top = cljs.core.get.call(null,map__10699__$1,new cljs.core.Keyword(null,"top","top",-1856271961));return (((left < x)) && ((x < (left + width)))) && (((top < y)) && ((y < (top + height))));
});
drag_and_drop.core.add_box = (function add_box(pos,state){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"placed-boxes","placed-boxes",-26091459)], null),(function (boxes){if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.partial.call(null,drag_and_drop.core.in_box_QMARK_,pos),cljs.core.concat.call(null,boxes,new cljs.core.Keyword(null,"moving-boxes","moving-boxes",245301315).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"drag","drag",449951290).cljs$core$IFn$_invoke$arity$1(state))))))
{return boxes;
} else
{return cljs.core.conj.call(null,boxes,drag_and_drop.core.centred_box.call(null,pos));
}
}));
});
drag_and_drop.core.topleft_pos = (function topleft_pos(p__10700){var map__10702 = p__10700;var map__10702__$1 = ((cljs.core.seq_QMARK_.call(null,map__10702))?cljs.core.apply.call(null,cljs.core.hash_map,map__10702):map__10702);var top = cljs.core.get.call(null,map__10702__$1,new cljs.core.Keyword(null,"top","top",-1856271961));var left = cljs.core.get.call(null,map__10702__$1,new cljs.core.Keyword(null,"left","left",-399115937));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null);
});
drag_and_drop.core.start_drag = (function start_drag(pos,state){var drag_target_QMARK_ = cljs.core.partial.call(null,drag_and_drop.core.in_box_QMARK_,pos);var drag_offset = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core._,pos),drag_and_drop.core.topleft_pos);var state_with_drag = cljs.core.reduce.call(null,((function (drag_target_QMARK_,drag_offset){
return (function (state__$1,box){if(cljs.core.truth_(drag_target_QMARK_.call(null,box)))
{return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drag","drag",449951290),new cljs.core.Keyword(null,"moving-boxes","moving-boxes",245301315)], null),cljs.core.conj,cljs.core.assoc.call(null,box,new cljs.core.Keyword(null,"drag-offset","drag-offset",538763357),drag_offset.call(null,box)));
} else
{return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"placed-boxes","placed-boxes",-26091459)], null),cljs.core.conj,box);
}
});})(drag_target_QMARK_,drag_offset))
,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"placed-boxes","placed-boxes",-26091459),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"drag","drag",449951290),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"moving-boxes","moving-boxes",245301315),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"resizing-box","resizing-box",1629709880),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),pos], null)),new cljs.core.Keyword(null,"placed-boxes","placed-boxes",-26091459).cljs$core$IFn$_invoke$arity$1(state));if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"moving-boxes","moving-boxes",245301315).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"drag","drag",449951290).cljs$core$IFn$_invoke$arity$1(state_with_drag))))
{return state_with_drag;
} else
{return cljs.core.assoc_in.call(null,state_with_drag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drag","drag",449951290),new cljs.core.Keyword(null,"resizing-box","resizing-box",1629709880)], null),drag_and_drop.core.build_box.call(null,pos,pos));
}
});
drag_and_drop.core.drag = (function drag(pos,state){var drag_to_pos = (function (box){var vec__10704 = cljs.core.map.call(null,cljs.core._,pos,new cljs.core.Keyword(null,"drag-offset","drag-offset",538763357).cljs$core$IFn$_invoke$arity$1(box));var left = cljs.core.nth.call(null,vec__10704,(0),null);var top = cljs.core.nth.call(null,vec__10704,(1),null);return cljs.core.assoc.call(null,box,new cljs.core.Keyword(null,"left","left",-399115937),left,new cljs.core.Keyword(null,"top","top",-1856271961),top);
});return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drag","drag",449951290),new cljs.core.Keyword(null,"moving-boxes","moving-boxes",245301315)], null),cljs.core.partial.call(null,cljs.core.mapv,drag_to_pos)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drag","drag",449951290),new cljs.core.Keyword(null,"resizing-box","resizing-box",1629709880)], null),((function (drag_to_pos){
return (function (box){if(cljs.core.truth_(box))
{return drag_and_drop.core.build_box.call(null,pos,new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"drag","drag",449951290).cljs$core$IFn$_invoke$arity$1(state)));
} else
{return null;
}
});})(drag_to_pos))
);
});
drag_and_drop.core.drop_moving_boxes = (function drop_moving_boxes(state){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"placed-boxes","placed-boxes",-26091459)], null),(function (boxes){var moved_boxes = cljs.core.map.call(null,(function (p1__10705_SHARP_){return cljs.core.dissoc.call(null,p1__10705_SHARP_,new cljs.core.Keyword(null,"drag-offset","drag-offset",538763357));
}),new cljs.core.Keyword(null,"moving-boxes","moving-boxes",245301315).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"drag","drag",449951290).cljs$core$IFn$_invoke$arity$1(state)));return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,boxes,moved_boxes));
}));
});
drag_and_drop.core.drop_resizing_box = (function drop_resizing_box(state){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"placed-boxes","placed-boxes",-26091459)], null),(function (boxes){var temp__4220__auto__ = new cljs.core.Keyword(null,"resizing-box","resizing-box",1629709880).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"drag","drag",449951290).cljs$core$IFn$_invoke$arity$1(state));if(cljs.core.truth_(temp__4220__auto__))
{var resizing_box = temp__4220__auto__;return cljs.core.conj.call(null,boxes,resizing_box);
} else
{return boxes;
}
}));
});
drag_and_drop.core.stop_drag = (function stop_drag(state){return cljs.core.assoc.call(null,drag_and_drop.core.drop_resizing_box.call(null,drag_and_drop.core.drop_moving_boxes.call(null,state)),new cljs.core.Keyword(null,"drag","drag",449951290),null);
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
drag_and_drop.core.NoOp.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4236__auto__,k10707,else__4237__auto__){var self__ = this;
var this__4236__auto____$1 = this;var G__10710 = k10707;switch (G__10710) {
default:
return cljs.core.get.call(null,self__.__extmap,k10707,else__4237__auto__);

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
drag_and_drop.core.NoOp.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4241__auto__,k__4242__auto__,G__10706){var self__ = this;
var this__4241__auto____$1 = this;var pred__10711 = cljs.core.keyword_identical_QMARK_;var expr__10712 = k__4242__auto__;return (new drag_and_drop.core.NoOp(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4242__auto__,G__10706),null));
});
drag_and_drop.core.NoOp.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4246__auto__){var self__ = this;
var this__4246__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
drag_and_drop.core.NoOp.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4233__auto__,G__10706){var self__ = this;
var this__4233__auto____$1 = this;return (new drag_and_drop.core.NoOp(G__10706,self__.__extmap,self__.__hash));
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
drag_and_drop.core.NoOp.prototype.apply = (function (self__,args10709){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10709)));
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
drag_and_drop.core.map__GT_NoOp = (function map__GT_NoOp(G__10708){return (new drag_and_drop.core.NoOp(null,cljs.core.dissoc.call(null,G__10708)));
});

/**
* @constructor
* @param {*} pos
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
drag_and_drop.core.AddBox = (function (pos,__meta,__extmap){
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
drag_and_drop.core.AddBox.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4234__auto__,k__4235__auto__){var self__ = this;
var this__4234__auto____$1 = this;return cljs.core._lookup.call(null,this__4234__auto____$1,k__4235__auto__,null);
});
drag_and_drop.core.AddBox.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4236__auto__,k10716,else__4237__auto__){var self__ = this;
var this__4236__auto____$1 = this;var G__10719 = (((k10716 instanceof cljs.core.Keyword))?k10716.fqn:null);switch (G__10719) {
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10716,else__4237__auto__);

}
});
drag_and_drop.core.AddBox.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4248__auto__,writer__4249__auto__,opts__4250__auto__){var self__ = this;
var this__4248__auto____$1 = this;var pr_pair__4251__auto__ = ((function (this__4248__auto____$1){
return (function (keyval__4252__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4249__auto__,cljs.core.pr_writer,""," ","",opts__4250__auto__,keyval__4252__auto__);
});})(this__4248__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4249__auto__,pr_pair__4251__auto__,"#drag-and-drop.core.AddBox{",", ","}",opts__4250__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});
drag_and_drop.core.AddBox.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4232__auto__){var self__ = this;
var this__4232__auto____$1 = this;return self__.__meta;
});
drag_and_drop.core.AddBox.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4228__auto__){var self__ = this;
var this__4228__auto____$1 = this;return (new drag_and_drop.core.AddBox(self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});
drag_and_drop.core.AddBox.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4238__auto__){var self__ = this;
var this__4238__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
drag_and_drop.core.AddBox.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4229__auto__){var self__ = this;
var this__4229__auto____$1 = this;var h__4050__auto__ = self__.__hash;if(!((h__4050__auto__ == null)))
{return h__4050__auto__;
} else
{var h__4050__auto____$1 = cljs.core.hash_imap.call(null,this__4229__auto____$1);self__.__hash = h__4050__auto____$1;
return h__4050__auto____$1;
}
});
drag_and_drop.core.AddBox.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4230__auto__,other__4231__auto__){var self__ = this;
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
drag_and_drop.core.AddBox.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4243__auto__,k__4244__auto__){var self__ = this;
var this__4243__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),null], null), null),k__4244__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4243__auto____$1),self__.__meta),k__4244__auto__);
} else
{return (new drag_and_drop.core.AddBox(self__.pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4244__auto__)),null));
}
});
drag_and_drop.core.AddBox.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4241__auto__,k__4242__auto__,G__10715){var self__ = this;
var this__4241__auto____$1 = this;var pred__10720 = cljs.core.keyword_identical_QMARK_;var expr__10721 = k__4242__auto__;if(cljs.core.truth_(pred__10720.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__10721)))
{return (new drag_and_drop.core.AddBox(G__10715,self__.__meta,self__.__extmap,null));
} else
{return (new drag_and_drop.core.AddBox(self__.pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4242__auto__,G__10715),null));
}
});
drag_and_drop.core.AddBox.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4246__auto__){var self__ = this;
var this__4246__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});
drag_and_drop.core.AddBox.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4233__auto__,G__10715){var self__ = this;
var this__4233__auto____$1 = this;return (new drag_and_drop.core.AddBox(self__.pos,G__10715,self__.__extmap,self__.__hash));
});
drag_and_drop.core.AddBox.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4239__auto__,entry__4240__auto__){var self__ = this;
var this__4239__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4240__auto__))
{return cljs.core._assoc.call(null,this__4239__auto____$1,cljs.core._nth.call(null,entry__4240__auto__,(0)),cljs.core._nth.call(null,entry__4240__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4239__auto____$1,entry__4240__auto__);
}
});
drag_and_drop.core.AddBox.prototype.call = (function (self__,state){var self__ = this;
var self____$1 = this;var _ = self____$1;return drag_and_drop.core.add_box.call(null,self__.pos,state);
});
drag_and_drop.core.AddBox.prototype.apply = (function (self__,args10718){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10718)));
});
drag_and_drop.core.AddBox.prototype.cljs$core$IFn$_invoke$arity$1 = (function (state){var self__ = this;
var _ = this;return drag_and_drop.core.add_box.call(null,self__.pos,state);
});
drag_and_drop.core.AddBox.cljs$lang$type = true;
drag_and_drop.core.AddBox.cljs$lang$ctorPrSeq = (function (this__4268__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"drag-and-drop.core/AddBox");
});
drag_and_drop.core.AddBox.cljs$lang$ctorPrWriter = (function (this__4268__auto__,writer__4269__auto__){return cljs.core._write.call(null,writer__4269__auto__,"drag-and-drop.core/AddBox");
});
drag_and_drop.core.__GT_AddBox = (function __GT_AddBox(pos){return (new drag_and_drop.core.AddBox(pos));
});
drag_and_drop.core.map__GT_AddBox = (function map__GT_AddBox(G__10717){return (new drag_and_drop.core.AddBox(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__10717),null,cljs.core.dissoc.call(null,G__10717,new cljs.core.Keyword(null,"pos","pos",-864607220))));
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
drag_and_drop.core.StartDrag.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4236__auto__,k10725,else__4237__auto__){var self__ = this;
var this__4236__auto____$1 = this;var G__10728 = (((k10725 instanceof cljs.core.Keyword))?k10725.fqn:null);switch (G__10728) {
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10725,else__4237__auto__);

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
drag_and_drop.core.StartDrag.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4241__auto__,k__4242__auto__,G__10724){var self__ = this;
var this__4241__auto____$1 = this;var pred__10729 = cljs.core.keyword_identical_QMARK_;var expr__10730 = k__4242__auto__;if(cljs.core.truth_(pred__10729.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__10730)))
{return (new drag_and_drop.core.StartDrag(G__10724,self__.__meta,self__.__extmap,null));
} else
{return (new drag_and_drop.core.StartDrag(self__.pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4242__auto__,G__10724),null));
}
});
drag_and_drop.core.StartDrag.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4246__auto__){var self__ = this;
var this__4246__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});
drag_and_drop.core.StartDrag.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4233__auto__,G__10724){var self__ = this;
var this__4233__auto____$1 = this;return (new drag_and_drop.core.StartDrag(self__.pos,G__10724,self__.__extmap,self__.__hash));
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
drag_and_drop.core.StartDrag.prototype.apply = (function (self__,args10727){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10727)));
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
drag_and_drop.core.map__GT_StartDrag = (function map__GT_StartDrag(G__10726){return (new drag_and_drop.core.StartDrag(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__10726),null,cljs.core.dissoc.call(null,G__10726,new cljs.core.Keyword(null,"pos","pos",-864607220))));
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
drag_and_drop.core.Drag.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4236__auto__,k10734,else__4237__auto__){var self__ = this;
var this__4236__auto____$1 = this;var G__10737 = (((k10734 instanceof cljs.core.Keyword))?k10734.fqn:null);switch (G__10737) {
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10734,else__4237__auto__);

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
drag_and_drop.core.Drag.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4241__auto__,k__4242__auto__,G__10733){var self__ = this;
var this__4241__auto____$1 = this;var pred__10738 = cljs.core.keyword_identical_QMARK_;var expr__10739 = k__4242__auto__;if(cljs.core.truth_(pred__10738.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__10739)))
{return (new drag_and_drop.core.Drag(G__10733,self__.__meta,self__.__extmap,null));
} else
{return (new drag_and_drop.core.Drag(self__.pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4242__auto__,G__10733),null));
}
});
drag_and_drop.core.Drag.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4246__auto__){var self__ = this;
var this__4246__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});
drag_and_drop.core.Drag.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4233__auto__,G__10733){var self__ = this;
var this__4233__auto____$1 = this;return (new drag_and_drop.core.Drag(self__.pos,G__10733,self__.__extmap,self__.__hash));
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
drag_and_drop.core.Drag.prototype.apply = (function (self__,args10736){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10736)));
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
drag_and_drop.core.map__GT_Drag = (function map__GT_Drag(G__10735){return (new drag_and_drop.core.Drag(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__10735),null,cljs.core.dissoc.call(null,G__10735,new cljs.core.Keyword(null,"pos","pos",-864607220))));
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
drag_and_drop.core.StopDrag.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4236__auto__,k10743,else__4237__auto__){var self__ = this;
var this__4236__auto____$1 = this;var G__10746 = k10743;switch (G__10746) {
default:
return cljs.core.get.call(null,self__.__extmap,k10743,else__4237__auto__);

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
drag_and_drop.core.StopDrag.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4241__auto__,k__4242__auto__,G__10742){var self__ = this;
var this__4241__auto____$1 = this;var pred__10747 = cljs.core.keyword_identical_QMARK_;var expr__10748 = k__4242__auto__;return (new drag_and_drop.core.StopDrag(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4242__auto__,G__10742),null));
});
drag_and_drop.core.StopDrag.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4246__auto__){var self__ = this;
var this__4246__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
drag_and_drop.core.StopDrag.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4233__auto__,G__10742){var self__ = this;
var this__4233__auto____$1 = this;return (new drag_and_drop.core.StopDrag(G__10742,self__.__extmap,self__.__hash));
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
drag_and_drop.core.StopDrag.prototype.apply = (function (self__,args10745){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10745)));
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
drag_and_drop.core.map__GT_StopDrag = (function map__GT_StopDrag(G__10744){return (new drag_and_drop.core.StopDrag(null,cljs.core.dissoc.call(null,G__10744)));
});
drag_and_drop.core.state_signal = (function (){var dragging_positions = jamesmacaulay.zelkova.signal.keep_when.call(null,jamesmacaulay.zelkova.mouse.down_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),jamesmacaulay.zelkova.mouse.position);var dragging_QMARK_ = jamesmacaulay.zelkova.signal.drop_repeats.call(null,jamesmacaulay.zelkova.signal.merge.call(null,jamesmacaulay.zelkova.signal.keep_if.call(null,cljs.core.not,false,jamesmacaulay.zelkova.mouse.down_QMARK_),jamesmacaulay.zelkova.signal.lift.call(null,cljs.core.constantly.call(null,true),dragging_positions)));var dragstarts = jamesmacaulay.zelkova.signal.keep_if.call(null,cljs.core.identity,true,dragging_QMARK_);var dragstops = jamesmacaulay.zelkova.signal.keep_if.call(null,cljs.core.not,false,dragging_QMARK_);var new_box_positions = jamesmacaulay.zelkova.signal.drop_when.call(null,dragging_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),jamesmacaulay.zelkova.signal.sample_on.call(null,jamesmacaulay.zelkova.mouse.clicks,jamesmacaulay.zelkova.mouse.position));var actions = jamesmacaulay.zelkova.signal.log.call(null,jamesmacaulay.zelkova.signal.merge.call(null,jamesmacaulay.zelkova.signal.constant.call(null,drag_and_drop.core.__GT_NoOp.call(null)),jamesmacaulay.zelkova.signal.sample_on.call(null,dragstarts,jamesmacaulay.zelkova.signal.lift.call(null,drag_and_drop.core.__GT_StartDrag,jamesmacaulay.zelkova.mouse.position)),jamesmacaulay.zelkova.signal.lift.call(null,cljs.core.constantly.call(null,drag_and_drop.core.__GT_StopDrag.call(null)),dragstops),jamesmacaulay.zelkova.signal.lift.call(null,drag_and_drop.core.__GT_Drag,dragging_positions),jamesmacaulay.zelkova.signal.lift.call(null,drag_and_drop.core.__GT_AddBox,new_box_positions)));return jamesmacaulay.zelkova.signal.foldp.call(null,((function (dragging_positions,dragging_QMARK_,dragstarts,dragstops,new_box_positions,actions){
return (function (action,state){return action.call(null,state);
});})(dragging_positions,dragging_QMARK_,dragstarts,dragstops,new_box_positions,actions))
,drag_and_drop.core.init_state,actions);
})();
drag_and_drop.core.app_state = jamesmacaulay.zelkova.signal.pipe_to_atom.call(null,drag_and_drop.core.state_signal);
drag_and_drop.core.box_color = (function box_color(opacity,box){return ("hsla("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hue","hue",-508078848).cljs$core$IFn$_invoke$arity$1(box))+",50%,50%,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(opacity)+")");
});
drag_and_drop.core.render_box = (function render_box(opacity,box){if(cljs.core.truth_(box))
{return React.DOM.div({"style": {"height": new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(box), "width": new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(box), "left": new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(box), "top": new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(box), "position": "absolute", "backgroundColor": drag_and_drop.core.box_color.call(null,opacity,box)}},null);
} else
{return null;
}
});
drag_and_drop.core.render_solid_box = cljs.core.partial.call(null,drag_and_drop.core.render_box,(1));
drag_and_drop.core.render_ghost_box = cljs.core.partial.call(null,drag_and_drop.core.render_box,0.5);
drag_and_drop.core.render_state = (function render_state(state){var placed_boxes = new cljs.core.Keyword(null,"placed-boxes","placed-boxes",-26091459).cljs$core$IFn$_invoke$arity$1(state);var moving_boxes = new cljs.core.Keyword(null,"moving-boxes","moving-boxes",245301315).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"drag","drag",449951290).cljs$core$IFn$_invoke$arity$1(state));var resizing_box = new cljs.core.Keyword(null,"resizing-box","resizing-box",1629709880).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"drag","drag",449951290).cljs$core$IFn$_invoke$arity$1(state));return cljs.core.apply.call(null,om.dom.div,null,cljs.core.concat.call(null,cljs.core.map.call(null,drag_and_drop.core.render_solid_box,new cljs.core.Keyword(null,"placed-boxes","placed-boxes",-26091459).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.map.call(null,drag_and_drop.core.render_ghost_box,(cljs.core.truth_(resizing_box)?cljs.core.conj.call(null,moving_boxes,resizing_box):moving_boxes))));
});
om.core.root.call(null,(function (app,owner){if(typeof drag_and_drop.core.t10751 !== 'undefined')
{} else
{
/**
* @constructor
*/
drag_and_drop.core.t10751 = (function (owner,app,meta10752){
this.owner = owner;
this.app = app;
this.meta10752 = meta10752;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
drag_and_drop.core.t10751.cljs$lang$type = true;
drag_and_drop.core.t10751.cljs$lang$ctorStr = "drag-and-drop.core/t10751";
drag_and_drop.core.t10751.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"drag-and-drop.core/t10751");
});
drag_and_drop.core.t10751.prototype.om$core$IRender$ = true;
drag_and_drop.core.t10751.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return drag_and_drop.core.render_state.call(null,self__.app);
});
drag_and_drop.core.t10751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10753){var self__ = this;
var _10753__$1 = this;return self__.meta10752;
});
drag_and_drop.core.t10751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10753,meta10752__$1){var self__ = this;
var _10753__$1 = this;return (new drag_and_drop.core.t10751(self__.owner,self__.app,meta10752__$1));
});
drag_and_drop.core.__GT_t10751 = (function __GT_t10751(owner__$1,app__$1,meta10752){return (new drag_and_drop.core.t10751(owner__$1,app__$1,meta10752));
});
}
return (new drag_and_drop.core.t10751(owner,app,null));
}),drag_and_drop.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map