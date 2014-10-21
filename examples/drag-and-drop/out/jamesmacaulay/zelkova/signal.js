// Compiled by ClojureScript 0.0-2356
goog.provide('jamesmacaulay.zelkova.signal');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.protocols');
goog.require('clojure.zip');
goog.require('alandipert.kahn');
goog.require('cljs.core.async');
goog.require('jamesmacaulay.async_tools.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.protocols');
goog.require('alandipert.kahn');
goog.require('jamesmacaulay.async_tools.core');
goog.require('clojure.zip');
goog.require('cljs.core');
jamesmacaulay.zelkova.signal.gen_topic = (function gen_topic(){return cljs.core.keyword.call(null,cljs.core.gensym.call(null));
});

/**
* @constructor
* @param {*} topic
* @param {*} value
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
jamesmacaulay.zelkova.signal.Event = (function (topic,value,__meta,__extmap){
this.topic = topic;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
jamesmacaulay.zelkova.signal.Event.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4234__auto__,k__4235__auto__){var self__ = this;
var this__4234__auto____$1 = this;return cljs.core._lookup.call(null,this__4234__auto____$1,k__4235__auto__,null);
});
jamesmacaulay.zelkova.signal.Event.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4236__auto__,k38818,else__4237__auto__){var self__ = this;
var this__4236__auto____$1 = this;var G__38820 = (((k38818 instanceof cljs.core.Keyword))?k38818.fqn:null);switch (G__38820) {
case "value":
return self__.value;

break;
case "topic":
return self__.topic;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k38818,else__4237__auto__);

}
});
jamesmacaulay.zelkova.signal.Event.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4248__auto__,writer__4249__auto__,opts__4250__auto__){var self__ = this;
var this__4248__auto____$1 = this;var pr_pair__4251__auto__ = ((function (this__4248__auto____$1){
return (function (keyval__4252__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4249__auto__,cljs.core.pr_writer,""," ","",opts__4250__auto__,keyval__4252__auto__);
});})(this__4248__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4249__auto__,pr_pair__4251__auto__,"#jamesmacaulay.zelkova.signal.Event{",", ","}",opts__4250__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"topic","topic",-1960480691),self__.topic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});
jamesmacaulay.zelkova.signal.Event.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4232__auto__){var self__ = this;
var this__4232__auto____$1 = this;return self__.__meta;
});
jamesmacaulay.zelkova.signal.Event.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4228__auto__){var self__ = this;
var this__4228__auto____$1 = this;return (new jamesmacaulay.zelkova.signal.Event(self__.topic,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});
jamesmacaulay.zelkova.signal.Event.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4238__auto__){var self__ = this;
var this__4238__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
jamesmacaulay.zelkova.signal.Event.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4229__auto__){var self__ = this;
var this__4229__auto____$1 = this;var h__4050__auto__ = self__.__hash;if(!((h__4050__auto__ == null)))
{return h__4050__auto__;
} else
{var h__4050__auto____$1 = cljs.core.hash_imap.call(null,this__4229__auto____$1);self__.__hash = h__4050__auto____$1;
return h__4050__auto____$1;
}
});
jamesmacaulay.zelkova.signal.Event.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4230__auto__,other__4231__auto__){var self__ = this;
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
jamesmacaulay.zelkova.signal.Event.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4243__auto__,k__4244__auto__){var self__ = this;
var this__4243__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"topic","topic",-1960480691),null], null), null),k__4244__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4243__auto____$1),self__.__meta),k__4244__auto__);
} else
{return (new jamesmacaulay.zelkova.signal.Event(self__.topic,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4244__auto__)),null));
}
});
jamesmacaulay.zelkova.signal.Event.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4241__auto__,k__4242__auto__,G__38817){var self__ = this;
var this__4241__auto____$1 = this;var pred__38821 = cljs.core.keyword_identical_QMARK_;var expr__38822 = k__4242__auto__;if(cljs.core.truth_(pred__38821.call(null,new cljs.core.Keyword(null,"topic","topic",-1960480691),expr__38822)))
{return (new jamesmacaulay.zelkova.signal.Event(G__38817,self__.value,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__38821.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__38822)))
{return (new jamesmacaulay.zelkova.signal.Event(self__.topic,G__38817,self__.__meta,self__.__extmap,null));
} else
{return (new jamesmacaulay.zelkova.signal.Event(self__.topic,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4242__auto__,G__38817),null));
}
}
});
jamesmacaulay.zelkova.signal.Event.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4246__auto__){var self__ = this;
var this__4246__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"topic","topic",-1960480691),self__.topic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});
jamesmacaulay.zelkova.signal.Event.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4233__auto__,G__38817){var self__ = this;
var this__4233__auto____$1 = this;return (new jamesmacaulay.zelkova.signal.Event(self__.topic,self__.value,G__38817,self__.__extmap,self__.__hash));
});
jamesmacaulay.zelkova.signal.Event.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4239__auto__,entry__4240__auto__){var self__ = this;
var this__4239__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4240__auto__))
{return cljs.core._assoc.call(null,this__4239__auto____$1,cljs.core._nth.call(null,entry__4240__auto__,(0)),cljs.core._nth.call(null,entry__4240__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4239__auto____$1,entry__4240__auto__);
}
});
jamesmacaulay.zelkova.signal.Event.cljs$lang$type = true;
jamesmacaulay.zelkova.signal.Event.cljs$lang$ctorPrSeq = (function (this__4268__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"jamesmacaulay.zelkova.signal/Event");
});
jamesmacaulay.zelkova.signal.Event.cljs$lang$ctorPrWriter = (function (this__4268__auto__,writer__4269__auto__){return cljs.core._write.call(null,writer__4269__auto__,"jamesmacaulay.zelkova.signal/Event");
});
jamesmacaulay.zelkova.signal.__GT_Event = (function __GT_Event(topic,value){return (new jamesmacaulay.zelkova.signal.Event(topic,value));
});
jamesmacaulay.zelkova.signal.map__GT_Event = (function map__GT_Event(G__38819){return (new jamesmacaulay.zelkova.signal.Event(new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(G__38819),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__38819),null,cljs.core.dissoc.call(null,G__38819,new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"value","value",305978217))));
});
jamesmacaulay.zelkova.signal.Message = (function (){var obj38826 = {};return obj38826;
})();
jamesmacaulay.zelkova.signal.fresh_QMARK_ = (function fresh_QMARK_(msg){if((function (){var and__3627__auto__ = msg;if(and__3627__auto__)
{return msg.jamesmacaulay$zelkova$signal$Message$fresh_QMARK_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return msg.jamesmacaulay$zelkova$signal$Message$fresh_QMARK_$arity$1(msg);
} else
{var x__4275__auto__ = (((msg == null))?null:msg);return (function (){var or__3639__auto__ = (jamesmacaulay.zelkova.signal.fresh_QMARK_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (jamesmacaulay.zelkova.signal.fresh_QMARK_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Message.fresh?",msg);
}
}
})().call(null,msg);
}
});

/**
* @constructor
* @param {*} value
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
jamesmacaulay.zelkova.signal.Fresh = (function (value,__meta,__extmap){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
jamesmacaulay.zelkova.signal.Fresh.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4234__auto__,k__4235__auto__){var self__ = this;
var this__4234__auto____$1 = this;return cljs.core._lookup.call(null,this__4234__auto____$1,k__4235__auto__,null);
});
jamesmacaulay.zelkova.signal.Fresh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4236__auto__,k38828,else__4237__auto__){var self__ = this;
var this__4236__auto____$1 = this;var G__38830 = (((k38828 instanceof cljs.core.Keyword))?k38828.fqn:null);switch (G__38830) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k38828,else__4237__auto__);

}
});
jamesmacaulay.zelkova.signal.Fresh.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4248__auto__,writer__4249__auto__,opts__4250__auto__){var self__ = this;
var this__4248__auto____$1 = this;var pr_pair__4251__auto__ = ((function (this__4248__auto____$1){
return (function (keyval__4252__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4249__auto__,cljs.core.pr_writer,""," ","",opts__4250__auto__,keyval__4252__auto__);
});})(this__4248__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4249__auto__,pr_pair__4251__auto__,"#jamesmacaulay.zelkova.signal.Fresh{",", ","}",opts__4250__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});
jamesmacaulay.zelkova.signal.Fresh.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4232__auto__){var self__ = this;
var this__4232__auto____$1 = this;return self__.__meta;
});
jamesmacaulay.zelkova.signal.Fresh.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4228__auto__){var self__ = this;
var this__4228__auto____$1 = this;return (new jamesmacaulay.zelkova.signal.Fresh(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});
jamesmacaulay.zelkova.signal.Fresh.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4238__auto__){var self__ = this;
var this__4238__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
jamesmacaulay.zelkova.signal.Fresh.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4229__auto__){var self__ = this;
var this__4229__auto____$1 = this;var h__4050__auto__ = self__.__hash;if(!((h__4050__auto__ == null)))
{return h__4050__auto__;
} else
{var h__4050__auto____$1 = cljs.core.hash_imap.call(null,this__4229__auto____$1);self__.__hash = h__4050__auto____$1;
return h__4050__auto____$1;
}
});
jamesmacaulay.zelkova.signal.Fresh.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4230__auto__,other__4231__auto__){var self__ = this;
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
jamesmacaulay.zelkova.signal.Fresh.prototype.jamesmacaulay$zelkova$signal$Message$ = true;
jamesmacaulay.zelkova.signal.Fresh.prototype.jamesmacaulay$zelkova$signal$Message$fresh_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
jamesmacaulay.zelkova.signal.Fresh.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4243__auto__,k__4244__auto__){var self__ = this;
var this__4243__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4244__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4243__auto____$1),self__.__meta),k__4244__auto__);
} else
{return (new jamesmacaulay.zelkova.signal.Fresh(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4244__auto__)),null));
}
});
jamesmacaulay.zelkova.signal.Fresh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4241__auto__,k__4242__auto__,G__38827){var self__ = this;
var this__4241__auto____$1 = this;var pred__38831 = cljs.core.keyword_identical_QMARK_;var expr__38832 = k__4242__auto__;if(cljs.core.truth_(pred__38831.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__38832)))
{return (new jamesmacaulay.zelkova.signal.Fresh(G__38827,self__.__meta,self__.__extmap,null));
} else
{return (new jamesmacaulay.zelkova.signal.Fresh(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4242__auto__,G__38827),null));
}
});
jamesmacaulay.zelkova.signal.Fresh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4246__auto__){var self__ = this;
var this__4246__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});
jamesmacaulay.zelkova.signal.Fresh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4233__auto__,G__38827){var self__ = this;
var this__4233__auto____$1 = this;return (new jamesmacaulay.zelkova.signal.Fresh(self__.value,G__38827,self__.__extmap,self__.__hash));
});
jamesmacaulay.zelkova.signal.Fresh.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4239__auto__,entry__4240__auto__){var self__ = this;
var this__4239__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4240__auto__))
{return cljs.core._assoc.call(null,this__4239__auto____$1,cljs.core._nth.call(null,entry__4240__auto__,(0)),cljs.core._nth.call(null,entry__4240__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4239__auto____$1,entry__4240__auto__);
}
});
jamesmacaulay.zelkova.signal.Fresh.cljs$lang$type = true;
jamesmacaulay.zelkova.signal.Fresh.cljs$lang$ctorPrSeq = (function (this__4268__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"jamesmacaulay.zelkova.signal/Fresh");
});
jamesmacaulay.zelkova.signal.Fresh.cljs$lang$ctorPrWriter = (function (this__4268__auto__,writer__4269__auto__){return cljs.core._write.call(null,writer__4269__auto__,"jamesmacaulay.zelkova.signal/Fresh");
});
jamesmacaulay.zelkova.signal.__GT_Fresh = (function __GT_Fresh(value){return (new jamesmacaulay.zelkova.signal.Fresh(value));
});
jamesmacaulay.zelkova.signal.map__GT_Fresh = (function map__GT_Fresh(G__38829){return (new jamesmacaulay.zelkova.signal.Fresh(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__38829),null,cljs.core.dissoc.call(null,G__38829,new cljs.core.Keyword(null,"value","value",305978217))));
});

/**
* @constructor
* @param {*} value
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
jamesmacaulay.zelkova.signal.Cached = (function (value,__meta,__extmap){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
jamesmacaulay.zelkova.signal.Cached.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4234__auto__,k__4235__auto__){var self__ = this;
var this__4234__auto____$1 = this;return cljs.core._lookup.call(null,this__4234__auto____$1,k__4235__auto__,null);
});
jamesmacaulay.zelkova.signal.Cached.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4236__auto__,k38836,else__4237__auto__){var self__ = this;
var this__4236__auto____$1 = this;var G__38838 = (((k38836 instanceof cljs.core.Keyword))?k38836.fqn:null);switch (G__38838) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k38836,else__4237__auto__);

}
});
jamesmacaulay.zelkova.signal.Cached.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4248__auto__,writer__4249__auto__,opts__4250__auto__){var self__ = this;
var this__4248__auto____$1 = this;var pr_pair__4251__auto__ = ((function (this__4248__auto____$1){
return (function (keyval__4252__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4249__auto__,cljs.core.pr_writer,""," ","",opts__4250__auto__,keyval__4252__auto__);
});})(this__4248__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4249__auto__,pr_pair__4251__auto__,"#jamesmacaulay.zelkova.signal.Cached{",", ","}",opts__4250__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});
jamesmacaulay.zelkova.signal.Cached.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4232__auto__){var self__ = this;
var this__4232__auto____$1 = this;return self__.__meta;
});
jamesmacaulay.zelkova.signal.Cached.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4228__auto__){var self__ = this;
var this__4228__auto____$1 = this;return (new jamesmacaulay.zelkova.signal.Cached(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});
jamesmacaulay.zelkova.signal.Cached.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4238__auto__){var self__ = this;
var this__4238__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
jamesmacaulay.zelkova.signal.Cached.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4229__auto__){var self__ = this;
var this__4229__auto____$1 = this;var h__4050__auto__ = self__.__hash;if(!((h__4050__auto__ == null)))
{return h__4050__auto__;
} else
{var h__4050__auto____$1 = cljs.core.hash_imap.call(null,this__4229__auto____$1);self__.__hash = h__4050__auto____$1;
return h__4050__auto____$1;
}
});
jamesmacaulay.zelkova.signal.Cached.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4230__auto__,other__4231__auto__){var self__ = this;
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
jamesmacaulay.zelkova.signal.Cached.prototype.jamesmacaulay$zelkova$signal$Message$ = true;
jamesmacaulay.zelkova.signal.Cached.prototype.jamesmacaulay$zelkova$signal$Message$fresh_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return false;
});
jamesmacaulay.zelkova.signal.Cached.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4243__auto__,k__4244__auto__){var self__ = this;
var this__4243__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4244__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4243__auto____$1),self__.__meta),k__4244__auto__);
} else
{return (new jamesmacaulay.zelkova.signal.Cached(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4244__auto__)),null));
}
});
jamesmacaulay.zelkova.signal.Cached.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4241__auto__,k__4242__auto__,G__38835){var self__ = this;
var this__4241__auto____$1 = this;var pred__38839 = cljs.core.keyword_identical_QMARK_;var expr__38840 = k__4242__auto__;if(cljs.core.truth_(pred__38839.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__38840)))
{return (new jamesmacaulay.zelkova.signal.Cached(G__38835,self__.__meta,self__.__extmap,null));
} else
{return (new jamesmacaulay.zelkova.signal.Cached(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4242__auto__,G__38835),null));
}
});
jamesmacaulay.zelkova.signal.Cached.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4246__auto__){var self__ = this;
var this__4246__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});
jamesmacaulay.zelkova.signal.Cached.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4233__auto__,G__38835){var self__ = this;
var this__4233__auto____$1 = this;return (new jamesmacaulay.zelkova.signal.Cached(self__.value,G__38835,self__.__extmap,self__.__hash));
});
jamesmacaulay.zelkova.signal.Cached.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4239__auto__,entry__4240__auto__){var self__ = this;
var this__4239__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4240__auto__))
{return cljs.core._assoc.call(null,this__4239__auto____$1,cljs.core._nth.call(null,entry__4240__auto__,(0)),cljs.core._nth.call(null,entry__4240__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4239__auto____$1,entry__4240__auto__);
}
});
jamesmacaulay.zelkova.signal.Cached.cljs$lang$type = true;
jamesmacaulay.zelkova.signal.Cached.cljs$lang$ctorPrSeq = (function (this__4268__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"jamesmacaulay.zelkova.signal/Cached");
});
jamesmacaulay.zelkova.signal.Cached.cljs$lang$ctorPrWriter = (function (this__4268__auto__,writer__4269__auto__){return cljs.core._write.call(null,writer__4269__auto__,"jamesmacaulay.zelkova.signal/Cached");
});
jamesmacaulay.zelkova.signal.__GT_Cached = (function __GT_Cached(value){return (new jamesmacaulay.zelkova.signal.Cached(value));
});
jamesmacaulay.zelkova.signal.map__GT_Cached = (function map__GT_Cached(G__38837){return (new jamesmacaulay.zelkova.signal.Cached(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__38837),null,cljs.core.dissoc.call(null,G__38837,new cljs.core.Keyword(null,"value","value",305978217))));
});
jamesmacaulay.zelkova.signal.SignalProtocol = (function (){var obj38844 = {};return obj38844;
})();
jamesmacaulay.zelkova.signal.sources = (function sources(s){if((function (){var and__3627__auto__ = s;if(and__3627__auto__)
{return s.jamesmacaulay$zelkova$signal$SignalProtocol$sources$arity$1;
} else
{return and__3627__auto__;
}
})())
{return s.jamesmacaulay$zelkova$signal$SignalProtocol$sources$arity$1(s);
} else
{var x__4275__auto__ = (((s == null))?null:s);return (function (){var or__3639__auto__ = (jamesmacaulay.zelkova.signal.sources[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (jamesmacaulay.zelkova.signal.sources["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"SignalProtocol.sources",s);
}
}
})().call(null,s);
}
});
jamesmacaulay.zelkova.signal.message_emitter = (function message_emitter(s){if((function (){var and__3627__auto__ = s;if(and__3627__auto__)
{return s.jamesmacaulay$zelkova$signal$SignalProtocol$message_emitter$arity$1;
} else
{return and__3627__auto__;
}
})())
{return s.jamesmacaulay$zelkova$signal$SignalProtocol$message_emitter$arity$1(s);
} else
{var x__4275__auto__ = (((s == null))?null:s);return (function (){var or__3639__auto__ = (jamesmacaulay.zelkova.signal.message_emitter[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (jamesmacaulay.zelkova.signal.message_emitter["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"SignalProtocol.message-emitter",s);
}
}
})().call(null,s);
}
});
jamesmacaulay.zelkova.signal.signal_QMARK_ = (function signal_QMARK_(x){var G__38846 = x;if(G__38846)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__38846.jamesmacaulay$zelkova$signal$SignalProtocol$;
}
})()))
{return true;
} else
{if((!G__38846.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,jamesmacaulay.zelkova.signal.SignalProtocol,G__38846);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,jamesmacaulay.zelkova.signal.SignalProtocol,G__38846);
}
});
jamesmacaulay.zelkova.signal.relayed_events_message_emitter = (function relayed_events_message_emitter(topics){var topics__$1 = ((cljs.core.set_QMARK_.call(null,topics))?topics:cljs.core.set.call(null,topics));return ((function (topics__$1){
return (function (prev,event){if(cljs.core.contains_QMARK_.call(null,topics__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(event)))
{return jamesmacaulay.zelkova.signal.__GT_Fresh.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(event));
} else
{return jamesmacaulay.zelkova.signal.__GT_Cached.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(prev));
}
});
;})(topics__$1))
});

/**
* @constructor
* @param {*} init
* @param {*} message_emitter
* @param {*} relayed_events
* @param {*} deps
* @param {*} event_sources
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
jamesmacaulay.zelkova.signal.Signal = (function (init,message_emitter,relayed_events,deps,event_sources,__meta,__extmap){
this.init = init;
this.message_emitter = message_emitter;
this.relayed_events = relayed_events;
this.deps = deps;
this.event_sources = event_sources;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
jamesmacaulay.zelkova.signal.Signal.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4234__auto__,k__4235__auto__){var self__ = this;
var this__4234__auto____$1 = this;return cljs.core._lookup.call(null,this__4234__auto____$1,k__4235__auto__,null);
});
jamesmacaulay.zelkova.signal.Signal.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4236__auto__,k38848,else__4237__auto__){var self__ = this;
var this__4236__auto____$1 = this;var G__38850 = (((k38848 instanceof cljs.core.Keyword))?k38848.fqn:null);switch (G__38850) {
case "event-sources":
return self__.event_sources;

break;
case "deps":
return self__.deps;

break;
case "relayed-events":
return self__.relayed_events;

break;
case "message-emitter":
return self__.message_emitter;

break;
case "init":
return self__.init;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k38848,else__4237__auto__);

}
});
jamesmacaulay.zelkova.signal.Signal.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4248__auto__,writer__4249__auto__,opts__4250__auto__){var self__ = this;
var this__4248__auto____$1 = this;var pr_pair__4251__auto__ = ((function (this__4248__auto____$1){
return (function (keyval__4252__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4249__auto__,cljs.core.pr_writer,""," ","",opts__4250__auto__,keyval__4252__auto__);
});})(this__4248__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4249__auto__,pr_pair__4251__auto__,"#jamesmacaulay.zelkova.signal.Signal{",", ","}",opts__4250__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init","init",-1875481434),self__.init],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"message-emitter","message-emitter",-1588447509),self__.message_emitter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relayed-events","relayed-events",56051903),self__.relayed_events],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"deps","deps",1883360319),self__.deps],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-sources","event-sources",708931713),self__.event_sources],null))], null),self__.__extmap));
});
jamesmacaulay.zelkova.signal.Signal.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4232__auto__){var self__ = this;
var this__4232__auto____$1 = this;return self__.__meta;
});
jamesmacaulay.zelkova.signal.Signal.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4228__auto__){var self__ = this;
var this__4228__auto____$1 = this;return (new jamesmacaulay.zelkova.signal.Signal(self__.init,self__.message_emitter,self__.relayed_events,self__.deps,self__.event_sources,self__.__meta,self__.__extmap,self__.__hash));
});
jamesmacaulay.zelkova.signal.Signal.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4238__auto__){var self__ = this;
var this__4238__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
jamesmacaulay.zelkova.signal.Signal.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4229__auto__){var self__ = this;
var this__4229__auto____$1 = this;var h__4050__auto__ = self__.__hash;if(!((h__4050__auto__ == null)))
{return h__4050__auto__;
} else
{var h__4050__auto____$1 = cljs.core.hash_imap.call(null,this__4229__auto____$1);self__.__hash = h__4050__auto____$1;
return h__4050__auto____$1;
}
});
jamesmacaulay.zelkova.signal.Signal.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4230__auto__,other__4231__auto__){var self__ = this;
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
jamesmacaulay.zelkova.signal.Signal.prototype.jamesmacaulay$zelkova$signal$SignalProtocol$ = true;
jamesmacaulay.zelkova.signal.Signal.prototype.jamesmacaulay$zelkova$signal$SignalProtocol$sources$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var or__3639__auto__ = self__.deps;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{var tmpl = cljs.core.first.call(null,self__.message_emitter);var tmpl_seq = ((cljs.core.sequential_QMARK_.call(null,tmpl))?tmpl:(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[tmpl],null)));return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,jamesmacaulay.zelkova.signal.signal_QMARK_),tmpl_seq);
}
});
jamesmacaulay.zelkova.signal.Signal.prototype.jamesmacaulay$zelkova$signal$SignalProtocol$message_emitter$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.message_emitter))
{return self__.message_emitter;
} else
{if(cljs.core.truth_(self__.relayed_events))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events","events",1792552201),jamesmacaulay.zelkova.signal.relayed_events_message_emitter.call(null,self__.relayed_events)], null);
} else
{return null;
}
}
});
jamesmacaulay.zelkova.signal.Signal.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4243__auto__,k__4244__auto__){var self__ = this;
var this__4243__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"event-sources","event-sources",708931713),null,new cljs.core.Keyword(null,"init","init",-1875481434),null,new cljs.core.Keyword(null,"message-emitter","message-emitter",-1588447509),null,new cljs.core.Keyword(null,"deps","deps",1883360319),null,new cljs.core.Keyword(null,"relayed-events","relayed-events",56051903),null], null), null),k__4244__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4243__auto____$1),self__.__meta),k__4244__auto__);
} else
{return (new jamesmacaulay.zelkova.signal.Signal(self__.init,self__.message_emitter,self__.relayed_events,self__.deps,self__.event_sources,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4244__auto__)),null));
}
});
jamesmacaulay.zelkova.signal.Signal.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4241__auto__,k__4242__auto__,G__38847){var self__ = this;
var this__4241__auto____$1 = this;var pred__38851 = cljs.core.keyword_identical_QMARK_;var expr__38852 = k__4242__auto__;if(cljs.core.truth_(pred__38851.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),expr__38852)))
{return (new jamesmacaulay.zelkova.signal.Signal(G__38847,self__.message_emitter,self__.relayed_events,self__.deps,self__.event_sources,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__38851.call(null,new cljs.core.Keyword(null,"message-emitter","message-emitter",-1588447509),expr__38852)))
{return (new jamesmacaulay.zelkova.signal.Signal(self__.init,G__38847,self__.relayed_events,self__.deps,self__.event_sources,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__38851.call(null,new cljs.core.Keyword(null,"relayed-events","relayed-events",56051903),expr__38852)))
{return (new jamesmacaulay.zelkova.signal.Signal(self__.init,self__.message_emitter,G__38847,self__.deps,self__.event_sources,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__38851.call(null,new cljs.core.Keyword(null,"deps","deps",1883360319),expr__38852)))
{return (new jamesmacaulay.zelkova.signal.Signal(self__.init,self__.message_emitter,self__.relayed_events,G__38847,self__.event_sources,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__38851.call(null,new cljs.core.Keyword(null,"event-sources","event-sources",708931713),expr__38852)))
{return (new jamesmacaulay.zelkova.signal.Signal(self__.init,self__.message_emitter,self__.relayed_events,self__.deps,G__38847,self__.__meta,self__.__extmap,null));
} else
{return (new jamesmacaulay.zelkova.signal.Signal(self__.init,self__.message_emitter,self__.relayed_events,self__.deps,self__.event_sources,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4242__auto__,G__38847),null));
}
}
}
}
}
});
jamesmacaulay.zelkova.signal.Signal.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4246__auto__){var self__ = this;
var this__4246__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init","init",-1875481434),self__.init],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"message-emitter","message-emitter",-1588447509),self__.message_emitter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relayed-events","relayed-events",56051903),self__.relayed_events],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"deps","deps",1883360319),self__.deps],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-sources","event-sources",708931713),self__.event_sources],null))], null),self__.__extmap));
});
jamesmacaulay.zelkova.signal.Signal.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4233__auto__,G__38847){var self__ = this;
var this__4233__auto____$1 = this;return (new jamesmacaulay.zelkova.signal.Signal(self__.init,self__.message_emitter,self__.relayed_events,self__.deps,self__.event_sources,G__38847,self__.__extmap,self__.__hash));
});
jamesmacaulay.zelkova.signal.Signal.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4239__auto__,entry__4240__auto__){var self__ = this;
var this__4239__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4240__auto__))
{return cljs.core._assoc.call(null,this__4239__auto____$1,cljs.core._nth.call(null,entry__4240__auto__,(0)),cljs.core._nth.call(null,entry__4240__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4239__auto____$1,entry__4240__auto__);
}
});
jamesmacaulay.zelkova.signal.Signal.cljs$lang$type = true;
jamesmacaulay.zelkova.signal.Signal.cljs$lang$ctorPrSeq = (function (this__4268__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"jamesmacaulay.zelkova.signal/Signal");
});
jamesmacaulay.zelkova.signal.Signal.cljs$lang$ctorPrWriter = (function (this__4268__auto__,writer__4269__auto__){return cljs.core._write.call(null,writer__4269__auto__,"jamesmacaulay.zelkova.signal/Signal");
});
jamesmacaulay.zelkova.signal.__GT_Signal = (function __GT_Signal(init,message_emitter,relayed_events,deps,event_sources){return (new jamesmacaulay.zelkova.signal.Signal(init,message_emitter,relayed_events,deps,event_sources));
});
jamesmacaulay.zelkova.signal.map__GT_Signal = (function map__GT_Signal(G__38849){return (new jamesmacaulay.zelkova.signal.Signal(new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(G__38849),new cljs.core.Keyword(null,"message-emitter","message-emitter",-1588447509).cljs$core$IFn$_invoke$arity$1(G__38849),new cljs.core.Keyword(null,"relayed-events","relayed-events",56051903).cljs$core$IFn$_invoke$arity$1(G__38849),new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(G__38849),new cljs.core.Keyword(null,"event-sources","event-sources",708931713).cljs$core$IFn$_invoke$arity$1(G__38849),null,cljs.core.dissoc.call(null,G__38849,new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"message-emitter","message-emitter",-1588447509),new cljs.core.Keyword(null,"relayed-events","relayed-events",56051903),new cljs.core.Keyword(null,"deps","deps",1883360319),new cljs.core.Keyword(null,"event-sources","event-sources",708931713))));
});
jamesmacaulay.zelkova.signal.messages_from_events = (function messages_from_events(topic){return (function (prev,event){if(cljs.core._EQ_.call(null,topic,new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(event)))
{return jamesmacaulay.zelkova.signal.__GT_Fresh.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(event));
} else
{return jamesmacaulay.zelkova.signal.__GT_Cached.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(prev));
}
});
});
jamesmacaulay.zelkova.signal.values_fn__GT_events_fn = (function values_fn__GT_events_fn(value_channel_fn,topic){return (function (graph,opts){var ch = value_channel_fn.call(null,graph,opts);return cljs.core.async.pipe.call(null,ch,cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,cljs.core.partial.call(null,jamesmacaulay.zelkova.signal.__GT_Event,topic))));
});
});
jamesmacaulay.zelkova.signal.input = (function() {
var input = null;
var input__1 = (function (init){return input.call(null,init,jamesmacaulay.zelkova.signal.gen_topic.call(null));
});
var input__2 = (function (init,topic){return jamesmacaulay.zelkova.signal.map__GT_Signal.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),init,new cljs.core.Keyword(null,"relayed-events","relayed-events",56051903),cljs.core.PersistentHashSet.fromArray([topic], true)], null));
});
var input__3 = (function (init,topic,value_channel_fn){var event_channel_fn = jamesmacaulay.zelkova.signal.values_fn__GT_events_fn.call(null,value_channel_fn,topic);return jamesmacaulay.zelkova.signal.map__GT_Signal.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),init,new cljs.core.Keyword(null,"relayed-events","relayed-events",56051903),cljs.core.PersistentHashSet.fromArray([topic], true),new cljs.core.Keyword(null,"event-sources","event-sources",708931713),new cljs.core.PersistentArrayMap.fromArray([topic,event_channel_fn], true, false)], null));
});
input = function(init,topic,value_channel_fn){
switch(arguments.length){
case 1:
return input__1.call(this,init);
case 2:
return input__2.call(this,init,topic);
case 3:
return input__3.call(this,init,topic,value_channel_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
input.cljs$core$IFn$_invoke$arity$1 = input__1;
input.cljs$core$IFn$_invoke$arity$2 = input__2;
input.cljs$core$IFn$_invoke$arity$3 = input__3;
return input;
})()
;
jamesmacaulay.zelkova.signal.constant = (function constant(x){var cached = jamesmacaulay.zelkova.signal.__GT_Cached.call(null,x);return jamesmacaulay.zelkova.signal.map__GT_Signal.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),x,new cljs.core.Keyword(null,"message-emitter","message-emitter",-1588447509),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.constantly.call(null,cached)], null)], null));
});
jamesmacaulay.zelkova.signal.liftseq = (function liftseq(f,sources){if(cljs.core.empty_QMARK_.call(null,sources))
{return jamesmacaulay.zelkova.signal.constant.call(null,f.call(null));
} else
{var emit_message = (function (prev,messages){if(cljs.core.truth_(cljs.core.some.call(null,jamesmacaulay.zelkova.signal.fresh_QMARK_,messages)))
{return jamesmacaulay.zelkova.signal.__GT_Fresh.call(null,cljs.core.apply.call(null,f,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"value","value",305978217),messages)));
} else
{return jamesmacaulay.zelkova.signal.__GT_Cached.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(prev));
}
});return jamesmacaulay.zelkova.signal.map__GT_Signal.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(emit_message.call(null,null,cljs.core.mapv.call(null,cljs.core.comp.call(null,jamesmacaulay.zelkova.signal.__GT_Fresh,new cljs.core.Keyword(null,"init","init",-1875481434)),sources))),new cljs.core.Keyword(null,"message-emitter","message-emitter",-1588447509),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sources,emit_message], null)], null));
}
});
/**
* @param {...*} var_args
*/
jamesmacaulay.zelkova.signal.lift = (function() { 
var lift__delegate = function (f,sources){return jamesmacaulay.zelkova.signal.liftseq.call(null,f,sources);
};
var lift = function (f,var_args){
var sources = null;if (arguments.length > 1) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lift__delegate.call(this,f,sources);};
lift.cljs$lang$maxFixedArity = 1;
lift.cljs$lang$applyTo = (function (arglist__38855){
var f = cljs.core.first(arglist__38855);
var sources = cljs.core.rest(arglist__38855);
return lift__delegate(f,sources);
});
lift.cljs$core$IFn$_invoke$arity$variadic = lift__delegate;
return lift;
})()
;
jamesmacaulay.zelkova.signal.template = (function template(signal_map){var ks = cljs.core.keys.call(null,signal_map);return jamesmacaulay.zelkova.signal.liftseq.call(null,((function (ks){
return (function() { 
var G__38856__delegate = function (values){return cljs.core.zipmap.call(null,ks,values);
};
var G__38856 = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__38856__delegate.call(this,values);};
G__38856.cljs$lang$maxFixedArity = 0;
G__38856.cljs$lang$applyTo = (function (arglist__38857){
var values = cljs.core.seq(arglist__38857);
return G__38856__delegate(values);
});
G__38856.cljs$core$IFn$_invoke$arity$variadic = G__38856__delegate;
return G__38856;
})()
;})(ks))
,cljs.core.vals.call(null,signal_map));
});
jamesmacaulay.zelkova.signal.foldp = (function foldp(f,init,source){return jamesmacaulay.zelkova.signal.map__GT_Signal.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),init,new cljs.core.Keyword(null,"message-emitter","message-emitter",-1588447509),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source,(function (acc,message){if(cljs.core.truth_(jamesmacaulay.zelkova.signal.fresh_QMARK_.call(null,message)))
{return jamesmacaulay.zelkova.signal.__GT_Fresh.call(null,f.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(message),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(acc)));
} else
{return jamesmacaulay.zelkova.signal.__GT_Cached.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(acc));
}
})], null)], null));
});
jamesmacaulay.zelkova.signal.drop_repeats = (function drop_repeats(sig){return jamesmacaulay.zelkova.signal.map__GT_Signal.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(sig),new cljs.core.Keyword(null,"message-emitter","message-emitter",-1588447509),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,(function (prev,msg){if(cljs.core.truth_((function (){var and__3627__auto__ = jamesmacaulay.zelkova.signal.fresh_QMARK_.call(null,msg);if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(prev));
} else
{return and__3627__auto__;
}
})()))
{return msg;
} else
{return jamesmacaulay.zelkova.signal.__GT_Cached.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(prev));
}
})], null)], null));
});
jamesmacaulay.zelkova.signal.reducep = (function() {
var reducep = null;
var reducep__2 = (function (f,source){return reducep.call(null,f,f.call(null),source);
});
var reducep__3 = (function (f,init,source){return jamesmacaulay.zelkova.signal.drop_repeats.call(null,jamesmacaulay.zelkova.signal.foldp.call(null,(function (val,acc){return f.call(null,acc,val);
}),init,source));
});
reducep = function(f,init,source){
switch(arguments.length){
case 2:
return reducep__2.call(this,f,init);
case 3:
return reducep__3.call(this,f,init,source);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reducep.cljs$core$IFn$_invoke$arity$2 = reducep__2;
reducep.cljs$core$IFn$_invoke$arity$3 = reducep__3;
return reducep;
})()
;
jamesmacaulay.zelkova.signal.transducep = (function() {
var transducep = null;
var transducep__3 = (function (xform,f,source){return jamesmacaulay.zelkova.signal.reducep.call(null,xform.call(null,f),f.call(null),source);
});
var transducep__4 = (function (xform,f,init,source){return jamesmacaulay.zelkova.signal.reducep.call(null,xform.call(null,f),init,source);
});
transducep = function(xform,f,init,source){
switch(arguments.length){
case 3:
return transducep__3.call(this,xform,f,init);
case 4:
return transducep__4.call(this,xform,f,init,source);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transducep.cljs$core$IFn$_invoke$arity$3 = transducep__3;
transducep.cljs$core$IFn$_invoke$arity$4 = transducep__4;
return transducep;
})()
;
jamesmacaulay.zelkova.signal.async = (function async(source){var topic = source;var msgs__GT_events = cljs.core.comp.call(null,cljs.core.filter.call(null,jamesmacaulay.zelkova.signal.fresh_QMARK_),cljs.core.map.call(null,((function (topic){
return (function (msg){return jamesmacaulay.zelkova.signal.__GT_Event.call(null,topic,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(msg));
});})(topic))
));var events_channel_fn = ((function (topic,msgs__GT_events){
return (function (live_graph,_){return cljs.core.async.tap.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"mult-map","mult-map",460417931).cljs$core$IFn$_invoke$arity$1(live_graph),source),cljs.core.async.chan.call(null,(1),msgs__GT_events));
});})(topic,msgs__GT_events))
;return jamesmacaulay.zelkova.signal.map__GT_Signal.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(source),new cljs.core.Keyword(null,"deps","deps",1883360319),cljs.core.PersistentHashSet.fromArray([source], true),new cljs.core.Keyword(null,"event-sources","event-sources",708931713),new cljs.core.PersistentArrayMap.fromArray([topic,events_channel_fn], true, false),new cljs.core.Keyword(null,"relayed-events","relayed-events",56051903),cljs.core.PersistentHashSet.fromArray([topic], true)], null));
});
jamesmacaulay.zelkova.signal.mergeseq = (function mergeseq(sigs){return jamesmacaulay.zelkova.signal.map__GT_Signal.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,sigs)),new cljs.core.Keyword(null,"message-emitter","message-emitter",-1588447509),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sigs,(function (prev,messages){var or__3639__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,jamesmacaulay.zelkova.signal.fresh_QMARK_,messages));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return jamesmacaulay.zelkova.signal.__GT_Cached.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(prev));
}
})], null)], null));
});
/**
* @param {...*} var_args
*/
jamesmacaulay.zelkova.signal.merge = (function() { 
var merge__delegate = function (sigs){return jamesmacaulay.zelkova.signal.mergeseq.call(null,sigs);
};
var merge = function (var_args){
var sigs = null;if (arguments.length > 0) {
  sigs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return merge__delegate.call(this,sigs);};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__38858){
var sigs = cljs.core.seq(arglist__38858);
return merge__delegate(sigs);
});
merge.cljs$core$IFn$_invoke$arity$variadic = merge__delegate;
return merge;
})()
;
jamesmacaulay.zelkova.signal.combine = (function combine(sigs){return jamesmacaulay.zelkova.signal.liftseq.call(null,cljs.core.vector,sigs);
});
jamesmacaulay.zelkova.signal.sample_on = (function sample_on(sampler_sig,value_sig){return jamesmacaulay.zelkova.signal.map__GT_Signal.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(value_sig),new cljs.core.Keyword(null,"message-emitter","message-emitter",-1588447509),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sampler_sig,value_sig], null),(function (prev,p__38861){var vec__38862 = p__38861;var sampler_msg = cljs.core.nth.call(null,vec__38862,(0),null);var value_msg = cljs.core.nth.call(null,vec__38862,(1),null);if(cljs.core.truth_(jamesmacaulay.zelkova.signal.fresh_QMARK_.call(null,sampler_msg)))
{return jamesmacaulay.zelkova.signal.__GT_Fresh.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value_msg));
} else
{return jamesmacaulay.zelkova.signal.__GT_Cached.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(prev));
}
})], null)], null));
});
jamesmacaulay.zelkova.signal.count = (function count(sig){return jamesmacaulay.zelkova.signal.foldp.call(null,(function (p1__38864_SHARP_,p2__38863_SHARP_){return (p2__38863_SHARP_ + (1));
}),(0),sig);
});
jamesmacaulay.zelkova.signal.count_if = (function count_if(pred,sig){return jamesmacaulay.zelkova.signal.foldp.call(null,(function (v,c){if(cljs.core.truth_(pred.call(null,v)))
{return (c + (1));
} else
{return c;
}
}),(0),sig);
});
jamesmacaulay.zelkova.signal.keep_if = (function keep_if(pred,base,sig){return jamesmacaulay.zelkova.signal.map__GT_Signal.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),(cljs.core.truth_(pred.call(null,new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(sig)))?new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(sig):base),new cljs.core.Keyword(null,"message-emitter","message-emitter",-1588447509),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,(function (prev,msg){if(cljs.core.truth_((function (){var and__3627__auto__ = jamesmacaulay.zelkova.signal.fresh_QMARK_.call(null,msg);if(cljs.core.truth_(and__3627__auto__))
{return pred.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(msg));
} else
{return and__3627__auto__;
}
})()))
{return jamesmacaulay.zelkova.signal.__GT_Fresh.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(msg));
} else
{return jamesmacaulay.zelkova.signal.__GT_Cached.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(prev));
}
})], null)], null));
});
jamesmacaulay.zelkova.signal.drop_if = (function drop_if(pred,base,sig){return jamesmacaulay.zelkova.signal.keep_if.call(null,cljs.core.complement.call(null,pred),base,sig);
});
jamesmacaulay.zelkova.signal.keep_when = (function keep_when(switch_sig,base,value_sig){return jamesmacaulay.zelkova.signal.lift.call(null,cljs.core.second,jamesmacaulay.zelkova.signal.keep_if.call(null,cljs.core.first,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,base], null),jamesmacaulay.zelkova.signal.lift.call(null,cljs.core.vector,jamesmacaulay.zelkova.signal.sample_on.call(null,value_sig,switch_sig),value_sig)));
});
jamesmacaulay.zelkova.signal.drop_when = (function drop_when(switch_sig,base,value_sig){return jamesmacaulay.zelkova.signal.keep_when.call(null,jamesmacaulay.zelkova.signal.lift.call(null,cljs.core.not,switch_sig),base,value_sig);
});
jamesmacaulay.zelkova.signal.console_log = (function console_log(sig){return jamesmacaulay.zelkova.signal.lift.call(null,(function (x){console.log(x);
return x;
}),sig);
});
jamesmacaulay.zelkova.signal.log = (function log(sig){return jamesmacaulay.zelkova.signal.lift.call(null,(function (x){cljs.core.pr.call(null,x);
return x;
}),sig);
});
jamesmacaulay.zelkova.signal.fresh_values = cljs.core.comp.call(null,cljs.core.filter.call(null,jamesmacaulay.zelkova.signal.fresh_QMARK_),cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217)));
jamesmacaulay.zelkova.signal.node_graph_zipper = (function node_graph_zipper(output_node){return clojure.zip.zipper.call(null,cljs.core.constantly.call(null,true),cljs.core.comp.call(null,cljs.core.seq,jamesmacaulay.zelkova.signal.sources),null,output_node);
});
jamesmacaulay.zelkova.signal.skip_subtree = (function skip_subtree(loc){var or__3639__auto__ = clojure.zip.right.call(null,loc);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{var p = loc;while(true){
if(cljs.core.truth_(clojure.zip.up.call(null,p)))
{var or__3639__auto____$1 = clojure.zip.right.call(null,clojure.zip.up.call(null,p));if(cljs.core.truth_(or__3639__auto____$1))
{return or__3639__auto____$1;
} else
{{
var G__38865 = clojure.zip.up.call(null,p);
p = G__38865;
continue;
}
}
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.node.call(null,p),new cljs.core.Keyword(null,"end","end",-268185958)], null);
}
break;
}
}
});
jamesmacaulay.zelkova.signal.output_node__GT_dependency_map = (function output_node__GT_dependency_map(output_node){var deps = cljs.core.PersistentArrayMap.EMPTY;var loc = jamesmacaulay.zelkova.signal.node_graph_zipper.call(null,output_node);while(true){
if(clojure.zip.end_QMARK_.call(null,loc))
{return deps;
} else
{if(cljs.core.contains_QMARK_.call(null,deps,clojure.zip.node.call(null,loc)))
{{
var G__38866 = deps;
var G__38867 = jamesmacaulay.zelkova.signal.skip_subtree.call(null,loc);
deps = G__38866;
loc = G__38867;
continue;
}
} else
{var n = clojure.zip.node.call(null,loc);{
var G__38868 = ((cljs.core.sequential_QMARK_.call(null,n))?deps:cljs.core.assoc.call(null,deps,n,jamesmacaulay.zelkova.signal.sources.call(null,n)));
var G__38869 = clojure.zip.next.call(null,loc);
deps = G__38868;
loc = G__38869;
continue;
}

}
}
break;
}
});
jamesmacaulay.zelkova.signal.topsort = (function topsort(output){return cljs.core.reverse.call(null,alandipert.kahn.kahn_sort.call(null,jamesmacaulay.zelkova.signal.output_node__GT_dependency_map.call(null,output)));
});

/**
* @constructor
* @param {*} output_signal
* @param {*} sorted_signals
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
jamesmacaulay.zelkova.signal.CompiledGraph = (function (output_signal,sorted_signals,__meta,__extmap){
this.output_signal = output_signal;
this.sorted_signals = sorted_signals;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
jamesmacaulay.zelkova.signal.CompiledGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4234__auto__,k__4235__auto__){var self__ = this;
var this__4234__auto____$1 = this;return cljs.core._lookup.call(null,this__4234__auto____$1,k__4235__auto__,null);
});
jamesmacaulay.zelkova.signal.CompiledGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4236__auto__,k38871,else__4237__auto__){var self__ = this;
var this__4236__auto____$1 = this;var G__38873 = (((k38871 instanceof cljs.core.Keyword))?k38871.fqn:null);switch (G__38873) {
case "sorted-signals":
return self__.sorted_signals;

break;
case "output-signal":
return self__.output_signal;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k38871,else__4237__auto__);

}
});
jamesmacaulay.zelkova.signal.CompiledGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4248__auto__,writer__4249__auto__,opts__4250__auto__){var self__ = this;
var this__4248__auto____$1 = this;var pr_pair__4251__auto__ = ((function (this__4248__auto____$1){
return (function (keyval__4252__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4249__auto__,cljs.core.pr_writer,""," ","",opts__4250__auto__,keyval__4252__auto__);
});})(this__4248__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4249__auto__,pr_pair__4251__auto__,"#jamesmacaulay.zelkova.signal.CompiledGraph{",", ","}",opts__4250__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-signal","output-signal",-1571674326),self__.output_signal],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sorted-signals","sorted-signals",-75259912),self__.sorted_signals],null))], null),self__.__extmap));
});
jamesmacaulay.zelkova.signal.CompiledGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4232__auto__){var self__ = this;
var this__4232__auto____$1 = this;return self__.__meta;
});
jamesmacaulay.zelkova.signal.CompiledGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4228__auto__){var self__ = this;
var this__4228__auto____$1 = this;return (new jamesmacaulay.zelkova.signal.CompiledGraph(self__.output_signal,self__.sorted_signals,self__.__meta,self__.__extmap,self__.__hash));
});
jamesmacaulay.zelkova.signal.CompiledGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4238__auto__){var self__ = this;
var this__4238__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
jamesmacaulay.zelkova.signal.CompiledGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4229__auto__){var self__ = this;
var this__4229__auto____$1 = this;var h__4050__auto__ = self__.__hash;if(!((h__4050__auto__ == null)))
{return h__4050__auto__;
} else
{var h__4050__auto____$1 = cljs.core.hash_imap.call(null,this__4229__auto____$1);self__.__hash = h__4050__auto____$1;
return h__4050__auto____$1;
}
});
jamesmacaulay.zelkova.signal.CompiledGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4230__auto__,other__4231__auto__){var self__ = this;
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
jamesmacaulay.zelkova.signal.CompiledGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4243__auto__,k__4244__auto__){var self__ = this;
var this__4243__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"output-signal","output-signal",-1571674326),null,new cljs.core.Keyword(null,"sorted-signals","sorted-signals",-75259912),null], null), null),k__4244__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4243__auto____$1),self__.__meta),k__4244__auto__);
} else
{return (new jamesmacaulay.zelkova.signal.CompiledGraph(self__.output_signal,self__.sorted_signals,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4244__auto__)),null));
}
});
jamesmacaulay.zelkova.signal.CompiledGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4241__auto__,k__4242__auto__,G__38870){var self__ = this;
var this__4241__auto____$1 = this;var pred__38874 = cljs.core.keyword_identical_QMARK_;var expr__38875 = k__4242__auto__;if(cljs.core.truth_(pred__38874.call(null,new cljs.core.Keyword(null,"output-signal","output-signal",-1571674326),expr__38875)))
{return (new jamesmacaulay.zelkova.signal.CompiledGraph(G__38870,self__.sorted_signals,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__38874.call(null,new cljs.core.Keyword(null,"sorted-signals","sorted-signals",-75259912),expr__38875)))
{return (new jamesmacaulay.zelkova.signal.CompiledGraph(self__.output_signal,G__38870,self__.__meta,self__.__extmap,null));
} else
{return (new jamesmacaulay.zelkova.signal.CompiledGraph(self__.output_signal,self__.sorted_signals,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4242__auto__,G__38870),null));
}
}
});
jamesmacaulay.zelkova.signal.CompiledGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4246__auto__){var self__ = this;
var this__4246__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-signal","output-signal",-1571674326),self__.output_signal],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sorted-signals","sorted-signals",-75259912),self__.sorted_signals],null))], null),self__.__extmap));
});
jamesmacaulay.zelkova.signal.CompiledGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4233__auto__,G__38870){var self__ = this;
var this__4233__auto____$1 = this;return (new jamesmacaulay.zelkova.signal.CompiledGraph(self__.output_signal,self__.sorted_signals,G__38870,self__.__extmap,self__.__hash));
});
jamesmacaulay.zelkova.signal.CompiledGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4239__auto__,entry__4240__auto__){var self__ = this;
var this__4239__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4240__auto__))
{return cljs.core._assoc.call(null,this__4239__auto____$1,cljs.core._nth.call(null,entry__4240__auto__,(0)),cljs.core._nth.call(null,entry__4240__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4239__auto____$1,entry__4240__auto__);
}
});
jamesmacaulay.zelkova.signal.CompiledGraph.cljs$lang$type = true;
jamesmacaulay.zelkova.signal.CompiledGraph.cljs$lang$ctorPrSeq = (function (this__4268__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"jamesmacaulay.zelkova.signal/CompiledGraph");
});
jamesmacaulay.zelkova.signal.CompiledGraph.cljs$lang$ctorPrWriter = (function (this__4268__auto__,writer__4269__auto__){return cljs.core._write.call(null,writer__4269__auto__,"jamesmacaulay.zelkova.signal/CompiledGraph");
});
jamesmacaulay.zelkova.signal.__GT_CompiledGraph = (function __GT_CompiledGraph(output_signal,sorted_signals){return (new jamesmacaulay.zelkova.signal.CompiledGraph(output_signal,sorted_signals));
});
jamesmacaulay.zelkova.signal.map__GT_CompiledGraph = (function map__GT_CompiledGraph(G__38872){return (new jamesmacaulay.zelkova.signal.CompiledGraph(new cljs.core.Keyword(null,"output-signal","output-signal",-1571674326).cljs$core$IFn$_invoke$arity$1(G__38872),new cljs.core.Keyword(null,"sorted-signals","sorted-signals",-75259912).cljs$core$IFn$_invoke$arity$1(G__38872),null,cljs.core.dissoc.call(null,G__38872,new cljs.core.Keyword(null,"output-signal","output-signal",-1571674326),new cljs.core.Keyword(null,"sorted-signals","sorted-signals",-75259912))));
});
jamesmacaulay.zelkova.signal.compile_graph = (function compile_graph(output_signal){var sorted_signals = jamesmacaulay.zelkova.signal.topsort.call(null,output_signal);return jamesmacaulay.zelkova.signal.__GT_CompiledGraph.call(null,output_signal,sorted_signals);
});
jamesmacaulay.zelkova.signal.tap_template = (function tap_template(tmpl,mult_map){if(cljs.core.sequential_QMARK_.call(null,tmpl))
{return cljs.core.async.map.call(null,cljs.core.vector,cljs.core.mapv.call(null,(function (p1__38878_SHARP_){return cljs.core.async.tap.call(null,cljs.core.get.call(null,mult_map,p1__38878_SHARP_),cljs.core.async.chan.call(null));
}),tmpl));
} else
{return cljs.core.async.tap.call(null,cljs.core.get.call(null,mult_map,tmpl),cljs.core.async.chan.call(null));
}
});
jamesmacaulay.zelkova.signal.spawn_message_loop_BANG_ = (function spawn_message_loop_BANG_(init,msg_fn,c_in,c_out){var c__6478__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto__){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto__){
return (function (state_38934){var state_val_38935 = (state_38934[(1)]);if((state_val_38935 === (8)))
{var inst_38925 = (state_38934[(7)]);var inst_38927 = (state_38934[(2)]);var inst_38917 = inst_38925;var state_38934__$1 = (function (){var statearr_38936 = state_38934;(statearr_38936[(8)] = inst_38927);
(statearr_38936[(9)] = inst_38917);
return statearr_38936;
})();var statearr_38937_38953 = state_38934__$1;(statearr_38937_38953[(2)] = null);
(statearr_38937_38953[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38935 === (7)))
{var inst_38930 = (state_38934[(2)]);var state_38934__$1 = state_38934;var statearr_38938_38954 = state_38934__$1;(statearr_38938_38954[(2)] = inst_38930);
(statearr_38938_38954[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38935 === (6)))
{var inst_38925 = (state_38934[(7)]);var inst_38917 = (state_38934[(9)]);var inst_38920 = (state_38934[(10)]);var inst_38925__$1 = msg_fn.call(null,inst_38917,inst_38920);var state_38934__$1 = (function (){var statearr_38939 = state_38934;(statearr_38939[(7)] = inst_38925__$1);
return statearr_38939;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38934__$1,(8),c_out,inst_38925__$1);
} else
{if((state_val_38935 === (5)))
{var inst_38923 = cljs.core.async.close_BANG_.call(null,c_out);var state_38934__$1 = state_38934;var statearr_38940_38955 = state_38934__$1;(statearr_38940_38955[(2)] = inst_38923);
(statearr_38940_38955[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38935 === (4)))
{var inst_38920 = (state_38934[(10)]);var inst_38920__$1 = (state_38934[(2)]);var inst_38921 = (inst_38920__$1 == null);var state_38934__$1 = (function (){var statearr_38941 = state_38934;(statearr_38941[(10)] = inst_38920__$1);
return statearr_38941;
})();if(cljs.core.truth_(inst_38921))
{var statearr_38942_38956 = state_38934__$1;(statearr_38942_38956[(1)] = (5));
} else
{var statearr_38943_38957 = state_38934__$1;(statearr_38943_38957[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38935 === (3)))
{var inst_38932 = (state_38934[(2)]);var state_38934__$1 = state_38934;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38934__$1,inst_38932);
} else
{if((state_val_38935 === (2)))
{var state_38934__$1 = state_38934;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38934__$1,(4),c_in);
} else
{if((state_val_38935 === (1)))
{var inst_38916 = jamesmacaulay.zelkova.signal.__GT_Fresh.call(null,init);var inst_38917 = inst_38916;var state_38934__$1 = (function (){var statearr_38944 = state_38934;(statearr_38944[(9)] = inst_38917);
return statearr_38944;
})();var statearr_38945_38958 = state_38934__$1;(statearr_38945_38958[(2)] = null);
(statearr_38945_38958[(1)] = (2));
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
});})(c__6478__auto__))
;return ((function (switch__6463__auto__,c__6478__auto__){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_38949 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_38949[(0)] = state_machine__6464__auto__);
(statearr_38949[(1)] = (1));
return statearr_38949;
});
var state_machine__6464__auto____1 = (function (state_38934){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_38934);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e38950){if((e38950 instanceof Object))
{var ex__6467__auto__ = e38950;var statearr_38951_38959 = state_38934;(statearr_38951_38959[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38934);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38950;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38960 = state_38934;
state_38934 = G__38960;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_38934){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_38934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto__))
})();var state__6480__auto__ = (function (){var statearr_38952 = f__6479__auto__.call(null);(statearr_38952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto__);
return statearr_38952;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto__))
);
return c__6478__auto__;
});
jamesmacaulay.zelkova.signal.build_message_mult = (function build_message_mult(signal,mult_map){var temp__4220__auto__ = jamesmacaulay.zelkova.signal.message_emitter.call(null,signal);if(cljs.core.truth_(temp__4220__auto__))
{var vec__38962 = temp__4220__auto__;var tmpl = cljs.core.nth.call(null,vec__38962,(0),null);var msg_fn = cljs.core.nth.call(null,vec__38962,(1),null);var c_in = jamesmacaulay.zelkova.signal.tap_template.call(null,tmpl,mult_map);var c_out = cljs.core.async.chan.call(null);jamesmacaulay.zelkova.signal.spawn_message_loop_BANG_.call(null,new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(signal),msg_fn,c_in,c_out);
return cljs.core.async.mult.call(null,c_out);
} else
{return null;
}
});
jamesmacaulay.zelkova.signal.build_message_mult_map = (function build_message_mult_map(sorted_signals,events_mult){return cljs.core.reduce.call(null,(function (mult_map,signal){return cljs.core.assoc.call(null,mult_map,signal,jamesmacaulay.zelkova.signal.build_message_mult.call(null,signal,mult_map));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"events","events",1792552201),events_mult], null),sorted_signals);
});
jamesmacaulay.zelkova.signal.gather_event_sources = (function gather_event_sources(sorted_signals){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,new cljs.core.Keyword(null,"event-sources","event-sources",708931713)),sorted_signals);
});
jamesmacaulay.zelkova.signal.LiveChannelGraphProtocol = (function (){var obj38964 = {};return obj38964;
})();
jamesmacaulay.zelkova.signal.output_mult = (function output_mult(g){if((function (){var and__3627__auto__ = g;if(and__3627__auto__)
{return g.jamesmacaulay$zelkova$signal$LiveChannelGraphProtocol$output_mult$arity$1;
} else
{return and__3627__auto__;
}
})())
{return g.jamesmacaulay$zelkova$signal$LiveChannelGraphProtocol$output_mult$arity$1(g);
} else
{var x__4275__auto__ = (((g == null))?null:g);return (function (){var or__3639__auto__ = (jamesmacaulay.zelkova.signal.output_mult[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (jamesmacaulay.zelkova.signal.output_mult["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"LiveChannelGraphProtocol.output-mult",g);
}
}
})().call(null,g);
}
});
jamesmacaulay.zelkova.signal.connect_to_world = (function connect_to_world(g,opts){if((function (){var and__3627__auto__ = g;if(and__3627__auto__)
{return g.jamesmacaulay$zelkova$signal$LiveChannelGraphProtocol$connect_to_world$arity$2;
} else
{return and__3627__auto__;
}
})())
{return g.jamesmacaulay$zelkova$signal$LiveChannelGraphProtocol$connect_to_world$arity$2(g,opts);
} else
{var x__4275__auto__ = (((g == null))?null:g);return (function (){var or__3639__auto__ = (jamesmacaulay.zelkova.signal.connect_to_world[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (jamesmacaulay.zelkova.signal.connect_to_world["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"LiveChannelGraphProtocol.connect-to-world",g);
}
}
})().call(null,g,opts);
}
});

/**
* @constructor
* @param {*} compiled_graph
* @param {*} events_channel
* @param {*} mult_map
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
jamesmacaulay.zelkova.signal.LiveChannelGraph = (function (compiled_graph,events_channel,mult_map,__meta,__extmap){
this.compiled_graph = compiled_graph;
this.events_channel = events_channel;
this.mult_map = mult_map;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
jamesmacaulay.zelkova.signal.LiveChannelGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4234__auto__,k__4235__auto__){var self__ = this;
var this__4234__auto____$1 = this;return cljs.core._lookup.call(null,this__4234__auto____$1,k__4235__auto__,null);
});
jamesmacaulay.zelkova.signal.LiveChannelGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4236__auto__,k38966,else__4237__auto__){var self__ = this;
var this__4236__auto____$1 = this;var G__38968 = (((k38966 instanceof cljs.core.Keyword))?k38966.fqn:null);switch (G__38968) {
case "mult-map":
return self__.mult_map;

break;
case "events-channel":
return self__.events_channel;

break;
case "compiled-graph":
return self__.compiled_graph;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k38966,else__4237__auto__);

}
});
jamesmacaulay.zelkova.signal.LiveChannelGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4248__auto__,writer__4249__auto__,opts__4250__auto__){var self__ = this;
var this__4248__auto____$1 = this;var pr_pair__4251__auto__ = ((function (this__4248__auto____$1){
return (function (keyval__4252__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4249__auto__,cljs.core.pr_writer,""," ","",opts__4250__auto__,keyval__4252__auto__);
});})(this__4248__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4249__auto__,pr_pair__4251__auto__,"#jamesmacaulay.zelkova.signal.LiveChannelGraph{",", ","}",opts__4250__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"compiled-graph","compiled-graph",-1595890187),self__.compiled_graph],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"events-channel","events-channel",1892177121),self__.events_channel],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mult-map","mult-map",460417931),self__.mult_map],null))], null),self__.__extmap));
});
jamesmacaulay.zelkova.signal.LiveChannelGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4232__auto__){var self__ = this;
var this__4232__auto____$1 = this;return self__.__meta;
});
jamesmacaulay.zelkova.signal.LiveChannelGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4228__auto__){var self__ = this;
var this__4228__auto____$1 = this;return (new jamesmacaulay.zelkova.signal.LiveChannelGraph(self__.compiled_graph,self__.events_channel,self__.mult_map,self__.__meta,self__.__extmap,self__.__hash));
});
jamesmacaulay.zelkova.signal.LiveChannelGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4238__auto__){var self__ = this;
var this__4238__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
jamesmacaulay.zelkova.signal.LiveChannelGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4229__auto__){var self__ = this;
var this__4229__auto____$1 = this;var h__4050__auto__ = self__.__hash;if(!((h__4050__auto__ == null)))
{return h__4050__auto__;
} else
{var h__4050__auto____$1 = cljs.core.hash_imap.call(null,this__4229__auto____$1);self__.__hash = h__4050__auto____$1;
return h__4050__auto____$1;
}
});
jamesmacaulay.zelkova.signal.LiveChannelGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4230__auto__,other__4231__auto__){var self__ = this;
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
jamesmacaulay.zelkova.signal.LiveChannelGraph.prototype.jamesmacaulay$zelkova$signal$LiveChannelGraphProtocol$ = true;
jamesmacaulay.zelkova.signal.LiveChannelGraph.prototype.jamesmacaulay$zelkova$signal$LiveChannelGraphProtocol$output_mult$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.get.call(null,self__.mult_map,new cljs.core.Keyword(null,"output-signal","output-signal",-1571674326).cljs$core$IFn$_invoke$arity$1(self__.compiled_graph));
});
jamesmacaulay.zelkova.signal.LiveChannelGraph.prototype.jamesmacaulay$zelkova$signal$LiveChannelGraphProtocol$connect_to_world$arity$2 = (function (g,opts){var self__ = this;
var g__$1 = this;var world_38977 = jamesmacaulay.zelkova.signal.gather_event_sources.call(null,new cljs.core.Keyword(null,"sorted-signals","sorted-signals",-75259912).cljs$core$IFn$_invoke$arity$1(self__.compiled_graph));var seq__38969_38978 = cljs.core.seq.call(null,cljs.core.vals.call(null,world_38977));var chunk__38970_38979 = null;var count__38971_38980 = (0);var i__38972_38981 = (0);while(true){
if((i__38972_38981 < count__38971_38980))
{var channel_fn_38982 = cljs.core._nth.call(null,chunk__38970_38979,i__38972_38981);cljs.core.async.pipe.call(null,channel_fn_38982.call(null,g__$1,opts),self__.events_channel);
{
var G__38983 = seq__38969_38978;
var G__38984 = chunk__38970_38979;
var G__38985 = count__38971_38980;
var G__38986 = (i__38972_38981 + (1));
seq__38969_38978 = G__38983;
chunk__38970_38979 = G__38984;
count__38971_38980 = G__38985;
i__38972_38981 = G__38986;
continue;
}
} else
{var temp__4222__auto___38987 = cljs.core.seq.call(null,seq__38969_38978);if(temp__4222__auto___38987)
{var seq__38969_38988__$1 = temp__4222__auto___38987;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38969_38988__$1))
{var c__4408__auto___38989 = cljs.core.chunk_first.call(null,seq__38969_38988__$1);{
var G__38990 = cljs.core.chunk_rest.call(null,seq__38969_38988__$1);
var G__38991 = c__4408__auto___38989;
var G__38992 = cljs.core.count.call(null,c__4408__auto___38989);
var G__38993 = (0);
seq__38969_38978 = G__38990;
chunk__38970_38979 = G__38991;
count__38971_38980 = G__38992;
i__38972_38981 = G__38993;
continue;
}
} else
{var channel_fn_38994 = cljs.core.first.call(null,seq__38969_38988__$1);cljs.core.async.pipe.call(null,channel_fn_38994.call(null,g__$1,opts),self__.events_channel);
{
var G__38995 = cljs.core.next.call(null,seq__38969_38988__$1);
var G__38996 = null;
var G__38997 = (0);
var G__38998 = (0);
seq__38969_38978 = G__38995;
chunk__38970_38979 = G__38996;
count__38971_38980 = G__38997;
i__38972_38981 = G__38998;
continue;
}
}
} else
{}
}
break;
}
return g__$1;
});
jamesmacaulay.zelkova.signal.LiveChannelGraph.prototype.cljs$core$async$impl$protocols$Channel$ = true;
jamesmacaulay.zelkova.signal.LiveChannelGraph.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.events_channel);
});
jamesmacaulay.zelkova.signal.LiveChannelGraph.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.events_channel);
});
jamesmacaulay.zelkova.signal.LiveChannelGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4243__auto__,k__4244__auto__){var self__ = this;
var this__4243__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"events-channel","events-channel",1892177121),null,new cljs.core.Keyword(null,"mult-map","mult-map",460417931),null,new cljs.core.Keyword(null,"compiled-graph","compiled-graph",-1595890187),null], null), null),k__4244__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4243__auto____$1),self__.__meta),k__4244__auto__);
} else
{return (new jamesmacaulay.zelkova.signal.LiveChannelGraph(self__.compiled_graph,self__.events_channel,self__.mult_map,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4244__auto__)),null));
}
});
jamesmacaulay.zelkova.signal.LiveChannelGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4241__auto__,k__4242__auto__,G__38965){var self__ = this;
var this__4241__auto____$1 = this;var pred__38973 = cljs.core.keyword_identical_QMARK_;var expr__38974 = k__4242__auto__;if(cljs.core.truth_(pred__38973.call(null,new cljs.core.Keyword(null,"compiled-graph","compiled-graph",-1595890187),expr__38974)))
{return (new jamesmacaulay.zelkova.signal.LiveChannelGraph(G__38965,self__.events_channel,self__.mult_map,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__38973.call(null,new cljs.core.Keyword(null,"events-channel","events-channel",1892177121),expr__38974)))
{return (new jamesmacaulay.zelkova.signal.LiveChannelGraph(self__.compiled_graph,G__38965,self__.mult_map,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__38973.call(null,new cljs.core.Keyword(null,"mult-map","mult-map",460417931),expr__38974)))
{return (new jamesmacaulay.zelkova.signal.LiveChannelGraph(self__.compiled_graph,self__.events_channel,G__38965,self__.__meta,self__.__extmap,null));
} else
{return (new jamesmacaulay.zelkova.signal.LiveChannelGraph(self__.compiled_graph,self__.events_channel,self__.mult_map,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4242__auto__,G__38965),null));
}
}
}
});
jamesmacaulay.zelkova.signal.LiveChannelGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4246__auto__){var self__ = this;
var this__4246__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"compiled-graph","compiled-graph",-1595890187),self__.compiled_graph],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"events-channel","events-channel",1892177121),self__.events_channel],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mult-map","mult-map",460417931),self__.mult_map],null))], null),self__.__extmap));
});
jamesmacaulay.zelkova.signal.LiveChannelGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4233__auto__,G__38965){var self__ = this;
var this__4233__auto____$1 = this;return (new jamesmacaulay.zelkova.signal.LiveChannelGraph(self__.compiled_graph,self__.events_channel,self__.mult_map,G__38965,self__.__extmap,self__.__hash));
});
jamesmacaulay.zelkova.signal.LiveChannelGraph.prototype.cljs$core$async$Mult$ = true;
jamesmacaulay.zelkova.signal.LiveChannelGraph.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (g,ch,close_QMARK_){var self__ = this;
var g__$1 = this;return cljs.core.async.tap_STAR_.call(null,jamesmacaulay.zelkova.signal.output_mult.call(null,g__$1),ch,close_QMARK_);
});
jamesmacaulay.zelkova.signal.LiveChannelGraph.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (g,ch){var self__ = this;
var g__$1 = this;return cljs.core.async.untap_STAR_.call(null,jamesmacaulay.zelkova.signal.output_mult.call(null,g__$1),ch);
});
jamesmacaulay.zelkova.signal.LiveChannelGraph.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (g){var self__ = this;
var g__$1 = this;return cljs.core.async.untap_all_STAR_.call(null,jamesmacaulay.zelkova.signal.output_mult.call(null,g__$1));
});
jamesmacaulay.zelkova.signal.LiveChannelGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4239__auto__,entry__4240__auto__){var self__ = this;
var this__4239__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4240__auto__))
{return cljs.core._assoc.call(null,this__4239__auto____$1,cljs.core._nth.call(null,entry__4240__auto__,(0)),cljs.core._nth.call(null,entry__4240__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4239__auto____$1,entry__4240__auto__);
}
});
jamesmacaulay.zelkova.signal.LiveChannelGraph.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
jamesmacaulay.zelkova.signal.LiveChannelGraph.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.events_channel,val,fn1);
});
jamesmacaulay.zelkova.signal.LiveChannelGraph.cljs$lang$type = true;
jamesmacaulay.zelkova.signal.LiveChannelGraph.cljs$lang$ctorPrSeq = (function (this__4268__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"jamesmacaulay.zelkova.signal/LiveChannelGraph");
});
jamesmacaulay.zelkova.signal.LiveChannelGraph.cljs$lang$ctorPrWriter = (function (this__4268__auto__,writer__4269__auto__){return cljs.core._write.call(null,writer__4269__auto__,"jamesmacaulay.zelkova.signal/LiveChannelGraph");
});
jamesmacaulay.zelkova.signal.__GT_LiveChannelGraph = (function __GT_LiveChannelGraph(compiled_graph,events_channel,mult_map){return (new jamesmacaulay.zelkova.signal.LiveChannelGraph(compiled_graph,events_channel,mult_map));
});
jamesmacaulay.zelkova.signal.map__GT_LiveChannelGraph = (function map__GT_LiveChannelGraph(G__38967){return (new jamesmacaulay.zelkova.signal.LiveChannelGraph(new cljs.core.Keyword(null,"compiled-graph","compiled-graph",-1595890187).cljs$core$IFn$_invoke$arity$1(G__38967),new cljs.core.Keyword(null,"events-channel","events-channel",1892177121).cljs$core$IFn$_invoke$arity$1(G__38967),new cljs.core.Keyword(null,"mult-map","mult-map",460417931).cljs$core$IFn$_invoke$arity$1(G__38967),null,cljs.core.dissoc.call(null,G__38967,new cljs.core.Keyword(null,"compiled-graph","compiled-graph",-1595890187),new cljs.core.Keyword(null,"events-channel","events-channel",1892177121),new cljs.core.Keyword(null,"mult-map","mult-map",460417931))));
});
jamesmacaulay.zelkova.signal.SignalLike = (function (){var obj39000 = {};return obj39000;
})();
jamesmacaulay.zelkova.signal.init = (function init(x){if((function (){var and__3627__auto__ = x;if(and__3627__auto__)
{return x.jamesmacaulay$zelkova$signal$SignalLike$init$arity$1;
} else
{return and__3627__auto__;
}
})())
{return x.jamesmacaulay$zelkova$signal$SignalLike$init$arity$1(x);
} else
{var x__4275__auto__ = (((x == null))?null:x);return (function (){var or__3639__auto__ = (jamesmacaulay.zelkova.signal.init[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (jamesmacaulay.zelkova.signal.init["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"SignalLike.init",x);
}
}
})().call(null,x);
}
});
jamesmacaulay.zelkova.signal.spawn_STAR_ = (function spawn_STAR_(x,opts){if((function (){var and__3627__auto__ = x;if(and__3627__auto__)
{return x.jamesmacaulay$zelkova$signal$SignalLike$spawn_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return x.jamesmacaulay$zelkova$signal$SignalLike$spawn_STAR_$arity$2(x,opts);
} else
{var x__4275__auto__ = (((x == null))?null:x);return (function (){var or__3639__auto__ = (jamesmacaulay.zelkova.signal.spawn_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (jamesmacaulay.zelkova.signal.spawn_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"SignalLike.spawn*",x);
}
}
})().call(null,x,opts);
}
});
jamesmacaulay.zelkova.signal.pipe_to_atom_STAR_ = (function pipe_to_atom_STAR_(x,a,ks){if((function (){var and__3627__auto__ = x;if(and__3627__auto__)
{return x.jamesmacaulay$zelkova$signal$SignalLike$pipe_to_atom_STAR_$arity$3;
} else
{return and__3627__auto__;
}
})())
{return x.jamesmacaulay$zelkova$signal$SignalLike$pipe_to_atom_STAR_$arity$3(x,a,ks);
} else
{var x__4275__auto__ = (((x == null))?null:x);return (function (){var or__3639__auto__ = (jamesmacaulay.zelkova.signal.pipe_to_atom_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (jamesmacaulay.zelkova.signal.pipe_to_atom_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"SignalLike.pipe-to-atom*",x);
}
}
})().call(null,x,a,ks);
}
});
jamesmacaulay.zelkova.signal.Signal.prototype.jamesmacaulay$zelkova$signal$SignalLike$ = true;
jamesmacaulay.zelkova.signal.Signal.prototype.jamesmacaulay$zelkova$signal$SignalLike$init$arity$1 = (function (s){var s__$1 = this;return new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(s__$1);
});
jamesmacaulay.zelkova.signal.Signal.prototype.jamesmacaulay$zelkova$signal$SignalLike$spawn_STAR_$arity$2 = (function (s,opts){var s__$1 = this;return jamesmacaulay.zelkova.signal.spawn_STAR_.call(null,jamesmacaulay.zelkova.signal.compile_graph.call(null,s__$1),opts);
});
jamesmacaulay.zelkova.signal.Signal.prototype.jamesmacaulay$zelkova$signal$SignalLike$pipe_to_atom_STAR_$arity$3 = (function (s,atm,ks){var s__$1 = this;return jamesmacaulay.zelkova.signal.pipe_to_atom_STAR_.call(null,jamesmacaulay.zelkova.signal.spawn_STAR_.call(null,s__$1,null),atm,ks);
});
jamesmacaulay.zelkova.signal.CompiledGraph.prototype.jamesmacaulay$zelkova$signal$SignalLike$ = true;
jamesmacaulay.zelkova.signal.CompiledGraph.prototype.jamesmacaulay$zelkova$signal$SignalLike$init$arity$1 = (function (g){var g__$1 = this;return new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output-signal","output-signal",-1571674326).cljs$core$IFn$_invoke$arity$1(g__$1));
});
jamesmacaulay.zelkova.signal.CompiledGraph.prototype.jamesmacaulay$zelkova$signal$SignalLike$spawn_STAR_$arity$2 = (function (g,opts){var g__$1 = this;var events_channel = cljs.core.async.chan.call(null);var events_mult = cljs.core.async.mult.call(null,events_channel);var mult_map = jamesmacaulay.zelkova.signal.build_message_mult_map.call(null,new cljs.core.Keyword(null,"sorted-signals","sorted-signals",-75259912).cljs$core$IFn$_invoke$arity$1(g__$1),events_mult);return jamesmacaulay.zelkova.signal.connect_to_world.call(null,jamesmacaulay.zelkova.signal.__GT_LiveChannelGraph.call(null,g__$1,events_channel,mult_map),opts);
});
jamesmacaulay.zelkova.signal.CompiledGraph.prototype.jamesmacaulay$zelkova$signal$SignalLike$pipe_to_atom_STAR_$arity$3 = (function (g,atm,ks){var g__$1 = this;return jamesmacaulay.zelkova.signal.pipe_to_atom_STAR_.call(null,jamesmacaulay.zelkova.signal.spawn_STAR_.call(null,g__$1,null),atm,ks);
});
jamesmacaulay.zelkova.signal.LiveChannelGraph.prototype.jamesmacaulay$zelkova$signal$SignalLike$ = true;
jamesmacaulay.zelkova.signal.LiveChannelGraph.prototype.jamesmacaulay$zelkova$signal$SignalLike$init$arity$1 = (function (g){var g__$1 = this;return jamesmacaulay.zelkova.signal.init.call(null,new cljs.core.Keyword(null,"compiled-graph","compiled-graph",-1595890187).cljs$core$IFn$_invoke$arity$1(g__$1));
});
jamesmacaulay.zelkova.signal.LiveChannelGraph.prototype.jamesmacaulay$zelkova$signal$SignalLike$spawn_STAR_$arity$2 = (function (g,opts){var g__$1 = this;return jamesmacaulay.zelkova.signal.spawn_STAR_.call(null,new cljs.core.Keyword(null,"compiled-graph","compiled-graph",-1595890187).cljs$core$IFn$_invoke$arity$1(g__$1),opts);
});
jamesmacaulay.zelkova.signal.LiveChannelGraph.prototype.jamesmacaulay$zelkova$signal$SignalLike$pipe_to_atom_STAR_$arity$3 = (function (g,atm,ks){var g__$1 = this;jamesmacaulay.async_tools.core.do_effects.call(null,((cljs.core.seq.call(null,ks))?cljs.core.partial.call(null,cljs.core.swap_BANG_,atm,cljs.core.assoc_in,ks):cljs.core.partial.call(null,cljs.core.reset_BANG_,atm)),cljs.core.async.tap.call(null,g__$1,cljs.core.async.chan.call(null,(1),jamesmacaulay.zelkova.signal.fresh_values)));
return atm;
});
jamesmacaulay.zelkova.signal.spawn = (function() {
var spawn = null;
var spawn__1 = (function (g){return jamesmacaulay.zelkova.signal.spawn_STAR_.call(null,g,null);
});
var spawn__2 = (function (g,opts){return jamesmacaulay.zelkova.signal.spawn_STAR_.call(null,g,opts);
});
spawn = function(g,opts){
switch(arguments.length){
case 1:
return spawn__1.call(this,g);
case 2:
return spawn__2.call(this,g,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
spawn.cljs$core$IFn$_invoke$arity$1 = spawn__1;
spawn.cljs$core$IFn$_invoke$arity$2 = spawn__2;
return spawn;
})()
;
jamesmacaulay.zelkova.signal.pipe_to_atom = (function() {
var pipe_to_atom = null;
var pipe_to_atom__1 = (function (x){var live_graph = jamesmacaulay.zelkova.signal.spawn.call(null,x);return pipe_to_atom.call(null,live_graph,cljs.core.atom.call(null,jamesmacaulay.zelkova.signal.init.call(null,live_graph),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("jamesmacaulay.zelkova.signal","source","jamesmacaulay.zelkova.signal/source",-943992700),live_graph], null)));
});
var pipe_to_atom__2 = (function (x,atm){return jamesmacaulay.zelkova.signal.pipe_to_atom_STAR_.call(null,x,atm,null);
});
var pipe_to_atom__3 = (function (x,atm,ks){return jamesmacaulay.zelkova.signal.pipe_to_atom_STAR_.call(null,x,atm,ks);
});
pipe_to_atom = function(x,atm,ks){
switch(arguments.length){
case 1:
return pipe_to_atom__1.call(this,x);
case 2:
return pipe_to_atom__2.call(this,x,atm);
case 3:
return pipe_to_atom__3.call(this,x,atm,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe_to_atom.cljs$core$IFn$_invoke$arity$1 = pipe_to_atom__1;
pipe_to_atom.cljs$core$IFn$_invoke$arity$2 = pipe_to_atom__2;
pipe_to_atom.cljs$core$IFn$_invoke$arity$3 = pipe_to_atom__3;
return pipe_to_atom;
})()
;

//# sourceMappingURL=signal.js.map