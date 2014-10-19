// Compiled by ClojureScript 0.0-2356
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12286 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12286 = (function (f,fn_handler,meta12287){
this.f = f;
this.fn_handler = fn_handler;
this.meta12287 = meta12287;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12286.cljs$lang$type = true;
cljs.core.async.t12286.cljs$lang$ctorStr = "cljs.core.async/t12286";
cljs.core.async.t12286.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t12286");
});
cljs.core.async.t12286.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12286.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12286.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12288){var self__ = this;
var _12288__$1 = this;return self__.meta12287;
});
cljs.core.async.t12286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12288,meta12287__$1){var self__ = this;
var _12288__$1 = this;return (new cljs.core.async.t12286(self__.f,self__.fn_handler,meta12287__$1));
});
cljs.core.async.__GT_t12286 = (function __GT_t12286(f__$1,fn_handler__$1,meta12287){return (new cljs.core.async.t12286(f__$1,fn_handler__$1,meta12287));
});
}
return (new cljs.core.async.t12286(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12290 = buff;if(G__12290)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__12290.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12290.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12290);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12290);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_12291 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12291);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_12291,ret){
return (function (){return fn1.call(null,val_12291);
});})(val_12291,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4220__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4220__auto__))
{var ret = temp__4220__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4220__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4220__auto__))
{var retb = temp__4220__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4220__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4220__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___12292 = n;var x_12293 = (0);while(true){
if((x_12293 < n__4508__auto___12292))
{(a[x_12293] = (0));
{
var G__12294 = (x_12293 + (1));
x_12293 = G__12294;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__12295 = (i + (1));
i = G__12295;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12299 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12299 = (function (flag,alt_flag,meta12300){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12300 = meta12300;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12299.cljs$lang$type = true;
cljs.core.async.t12299.cljs$lang$ctorStr = "cljs.core.async/t12299";
cljs.core.async.t12299.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t12299");
});})(flag))
;
cljs.core.async.t12299.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12299.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t12299.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t12299.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12301){var self__ = this;
var _12301__$1 = this;return self__.meta12300;
});})(flag))
;
cljs.core.async.t12299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12301,meta12300__$1){var self__ = this;
var _12301__$1 = this;return (new cljs.core.async.t12299(self__.flag,self__.alt_flag,meta12300__$1));
});})(flag))
;
cljs.core.async.__GT_t12299 = ((function (flag){
return (function __GT_t12299(flag__$1,alt_flag__$1,meta12300){return (new cljs.core.async.t12299(flag__$1,alt_flag__$1,meta12300));
});})(flag))
;
}
return (new cljs.core.async.t12299(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12305 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12305 = (function (cb,flag,alt_handler,meta12306){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12306 = meta12306;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12305.cljs$lang$type = true;
cljs.core.async.t12305.cljs$lang$ctorStr = "cljs.core.async/t12305";
cljs.core.async.t12305.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t12305");
});
cljs.core.async.t12305.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12305.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12305.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12307){var self__ = this;
var _12307__$1 = this;return self__.meta12306;
});
cljs.core.async.t12305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12307,meta12306__$1){var self__ = this;
var _12307__$1 = this;return (new cljs.core.async.t12305(self__.cb,self__.flag,self__.alt_handler,meta12306__$1));
});
cljs.core.async.__GT_t12305 = (function __GT_t12305(cb__$1,flag__$1,alt_handler__$1,meta12306){return (new cljs.core.async.t12305(cb__$1,flag__$1,alt_handler__$1,meta12306));
});
}
return (new cljs.core.async.t12305(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12308_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12308_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12309_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12309_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3639__auto__ = wport;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__12310 = (i + (1));
i = G__12310;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3639__auto__ = ret;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4222__auto__ = (function (){var and__3627__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3627__auto__;
}
})();if(cljs.core.truth_(temp__4222__auto__))
{var got = temp__4222__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__12311){var map__12313 = p__12311;var map__12313__$1 = ((cljs.core.seq_QMARK_.call(null,map__12313))?cljs.core.apply.call(null,cljs.core.hash_map,map__12313):map__12313);var opts = map__12313__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__12311 = null;if (arguments.length > 1) {
  p__12311 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12311);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12314){
var ports = cljs.core.first(arglist__12314);
var p__12311 = cljs.core.rest(arglist__12314);
return alts_BANG___delegate(ports,p__12311);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6478__auto___12409 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___12409){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___12409){
return (function (state_12385){var state_val_12386 = (state_12385[(1)]);if((state_val_12386 === (7)))
{var inst_12381 = (state_12385[(2)]);var state_12385__$1 = state_12385;var statearr_12387_12410 = state_12385__$1;(statearr_12387_12410[(2)] = inst_12381);
(statearr_12387_12410[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12386 === (1)))
{var state_12385__$1 = state_12385;var statearr_12388_12411 = state_12385__$1;(statearr_12388_12411[(2)] = null);
(statearr_12388_12411[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12386 === (4)))
{var inst_12364 = (state_12385[(7)]);var inst_12364__$1 = (state_12385[(2)]);var inst_12365 = (inst_12364__$1 == null);var state_12385__$1 = (function (){var statearr_12389 = state_12385;(statearr_12389[(7)] = inst_12364__$1);
return statearr_12389;
})();if(cljs.core.truth_(inst_12365))
{var statearr_12390_12412 = state_12385__$1;(statearr_12390_12412[(1)] = (5));
} else
{var statearr_12391_12413 = state_12385__$1;(statearr_12391_12413[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12386 === (13)))
{var state_12385__$1 = state_12385;var statearr_12392_12414 = state_12385__$1;(statearr_12392_12414[(2)] = null);
(statearr_12392_12414[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12386 === (6)))
{var inst_12364 = (state_12385[(7)]);var state_12385__$1 = state_12385;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12385__$1,(11),to,inst_12364);
} else
{if((state_val_12386 === (3)))
{var inst_12383 = (state_12385[(2)]);var state_12385__$1 = state_12385;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12385__$1,inst_12383);
} else
{if((state_val_12386 === (12)))
{var state_12385__$1 = state_12385;var statearr_12393_12415 = state_12385__$1;(statearr_12393_12415[(2)] = null);
(statearr_12393_12415[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12386 === (2)))
{var state_12385__$1 = state_12385;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12385__$1,(4),from);
} else
{if((state_val_12386 === (11)))
{var inst_12374 = (state_12385[(2)]);var state_12385__$1 = state_12385;if(cljs.core.truth_(inst_12374))
{var statearr_12394_12416 = state_12385__$1;(statearr_12394_12416[(1)] = (12));
} else
{var statearr_12395_12417 = state_12385__$1;(statearr_12395_12417[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12386 === (9)))
{var state_12385__$1 = state_12385;var statearr_12396_12418 = state_12385__$1;(statearr_12396_12418[(2)] = null);
(statearr_12396_12418[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12386 === (5)))
{var state_12385__$1 = state_12385;if(cljs.core.truth_(close_QMARK_))
{var statearr_12397_12419 = state_12385__$1;(statearr_12397_12419[(1)] = (8));
} else
{var statearr_12398_12420 = state_12385__$1;(statearr_12398_12420[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12386 === (14)))
{var inst_12379 = (state_12385[(2)]);var state_12385__$1 = state_12385;var statearr_12399_12421 = state_12385__$1;(statearr_12399_12421[(2)] = inst_12379);
(statearr_12399_12421[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12386 === (10)))
{var inst_12371 = (state_12385[(2)]);var state_12385__$1 = state_12385;var statearr_12400_12422 = state_12385__$1;(statearr_12400_12422[(2)] = inst_12371);
(statearr_12400_12422[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12386 === (8)))
{var inst_12368 = cljs.core.async.close_BANG_.call(null,to);var state_12385__$1 = state_12385;var statearr_12401_12423 = state_12385__$1;(statearr_12401_12423[(2)] = inst_12368);
(statearr_12401_12423[(1)] = (10));
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
}
}
}
});})(c__6478__auto___12409))
;return ((function (switch__6463__auto__,c__6478__auto___12409){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_12405 = [null,null,null,null,null,null,null,null];(statearr_12405[(0)] = state_machine__6464__auto__);
(statearr_12405[(1)] = (1));
return statearr_12405;
});
var state_machine__6464__auto____1 = (function (state_12385){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_12385);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e12406){if((e12406 instanceof Object))
{var ex__6467__auto__ = e12406;var statearr_12407_12424 = state_12385;(statearr_12407_12424[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12385);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12406;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12425 = state_12385;
state_12385 = G__12425;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_12385){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_12385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___12409))
})();var state__6480__auto__ = (function (){var statearr_12408 = f__6479__auto__.call(null);(statearr_12408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___12409);
return statearr_12408;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___12409))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__12609){var vec__12610 = p__12609;var v = cljs.core.nth.call(null,vec__12610,(0),null);var p = cljs.core.nth.call(null,vec__12610,(1),null);var job = vec__12610;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6478__auto___12792 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___12792,res,vec__12610,v,p,job,jobs,results){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___12792,res,vec__12610,v,p,job,jobs,results){
return (function (state_12615){var state_val_12616 = (state_12615[(1)]);if((state_val_12616 === (2)))
{var inst_12612 = (state_12615[(2)]);var inst_12613 = cljs.core.async.close_BANG_.call(null,res);var state_12615__$1 = (function (){var statearr_12617 = state_12615;(statearr_12617[(7)] = inst_12612);
return statearr_12617;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12615__$1,inst_12613);
} else
{if((state_val_12616 === (1)))
{var state_12615__$1 = state_12615;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12615__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6478__auto___12792,res,vec__12610,v,p,job,jobs,results))
;return ((function (switch__6463__auto__,c__6478__auto___12792,res,vec__12610,v,p,job,jobs,results){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_12621 = [null,null,null,null,null,null,null,null];(statearr_12621[(0)] = state_machine__6464__auto__);
(statearr_12621[(1)] = (1));
return statearr_12621;
});
var state_machine__6464__auto____1 = (function (state_12615){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_12615);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e12622){if((e12622 instanceof Object))
{var ex__6467__auto__ = e12622;var statearr_12623_12793 = state_12615;(statearr_12623_12793[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12615);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12622;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12794 = state_12615;
state_12615 = G__12794;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_12615){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_12615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___12792,res,vec__12610,v,p,job,jobs,results))
})();var state__6480__auto__ = (function (){var statearr_12624 = f__6479__auto__.call(null);(statearr_12624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___12792);
return statearr_12624;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___12792,res,vec__12610,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__12625){var vec__12626 = p__12625;var v = cljs.core.nth.call(null,vec__12626,(0),null);var p = cljs.core.nth.call(null,vec__12626,(1),null);var job = vec__12626;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___12795 = n;var __12796 = (0);while(true){
if((__12796 < n__4508__auto___12795))
{var G__12627_12797 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__12627_12797) {
case "async":
var c__6478__auto___12799 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12796,c__6478__auto___12799,G__12627_12797,n__4508__auto___12795,jobs,results,process,async){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (__12796,c__6478__auto___12799,G__12627_12797,n__4508__auto___12795,jobs,results,process,async){
return (function (state_12640){var state_val_12641 = (state_12640[(1)]);if((state_val_12641 === (7)))
{var inst_12636 = (state_12640[(2)]);var state_12640__$1 = state_12640;var statearr_12642_12800 = state_12640__$1;(statearr_12642_12800[(2)] = inst_12636);
(statearr_12642_12800[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12641 === (6)))
{var state_12640__$1 = state_12640;var statearr_12643_12801 = state_12640__$1;(statearr_12643_12801[(2)] = null);
(statearr_12643_12801[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12641 === (5)))
{var state_12640__$1 = state_12640;var statearr_12644_12802 = state_12640__$1;(statearr_12644_12802[(2)] = null);
(statearr_12644_12802[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12641 === (4)))
{var inst_12630 = (state_12640[(2)]);var inst_12631 = async.call(null,inst_12630);var state_12640__$1 = state_12640;if(cljs.core.truth_(inst_12631))
{var statearr_12645_12803 = state_12640__$1;(statearr_12645_12803[(1)] = (5));
} else
{var statearr_12646_12804 = state_12640__$1;(statearr_12646_12804[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12641 === (3)))
{var inst_12638 = (state_12640[(2)]);var state_12640__$1 = state_12640;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12640__$1,inst_12638);
} else
{if((state_val_12641 === (2)))
{var state_12640__$1 = state_12640;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12640__$1,(4),jobs);
} else
{if((state_val_12641 === (1)))
{var state_12640__$1 = state_12640;var statearr_12647_12805 = state_12640__$1;(statearr_12647_12805[(2)] = null);
(statearr_12647_12805[(1)] = (2));
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
});})(__12796,c__6478__auto___12799,G__12627_12797,n__4508__auto___12795,jobs,results,process,async))
;return ((function (__12796,switch__6463__auto__,c__6478__auto___12799,G__12627_12797,n__4508__auto___12795,jobs,results,process,async){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_12651 = [null,null,null,null,null,null,null];(statearr_12651[(0)] = state_machine__6464__auto__);
(statearr_12651[(1)] = (1));
return statearr_12651;
});
var state_machine__6464__auto____1 = (function (state_12640){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_12640);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e12652){if((e12652 instanceof Object))
{var ex__6467__auto__ = e12652;var statearr_12653_12806 = state_12640;(statearr_12653_12806[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12640);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12652;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12807 = state_12640;
state_12640 = G__12807;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_12640){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_12640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(__12796,switch__6463__auto__,c__6478__auto___12799,G__12627_12797,n__4508__auto___12795,jobs,results,process,async))
})();var state__6480__auto__ = (function (){var statearr_12654 = f__6479__auto__.call(null);(statearr_12654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___12799);
return statearr_12654;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(__12796,c__6478__auto___12799,G__12627_12797,n__4508__auto___12795,jobs,results,process,async))
);

break;
case "compute":
var c__6478__auto___12808 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12796,c__6478__auto___12808,G__12627_12797,n__4508__auto___12795,jobs,results,process,async){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (__12796,c__6478__auto___12808,G__12627_12797,n__4508__auto___12795,jobs,results,process,async){
return (function (state_12667){var state_val_12668 = (state_12667[(1)]);if((state_val_12668 === (7)))
{var inst_12663 = (state_12667[(2)]);var state_12667__$1 = state_12667;var statearr_12669_12809 = state_12667__$1;(statearr_12669_12809[(2)] = inst_12663);
(statearr_12669_12809[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12668 === (6)))
{var state_12667__$1 = state_12667;var statearr_12670_12810 = state_12667__$1;(statearr_12670_12810[(2)] = null);
(statearr_12670_12810[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12668 === (5)))
{var state_12667__$1 = state_12667;var statearr_12671_12811 = state_12667__$1;(statearr_12671_12811[(2)] = null);
(statearr_12671_12811[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12668 === (4)))
{var inst_12657 = (state_12667[(2)]);var inst_12658 = process.call(null,inst_12657);var state_12667__$1 = state_12667;if(cljs.core.truth_(inst_12658))
{var statearr_12672_12812 = state_12667__$1;(statearr_12672_12812[(1)] = (5));
} else
{var statearr_12673_12813 = state_12667__$1;(statearr_12673_12813[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12668 === (3)))
{var inst_12665 = (state_12667[(2)]);var state_12667__$1 = state_12667;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12667__$1,inst_12665);
} else
{if((state_val_12668 === (2)))
{var state_12667__$1 = state_12667;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12667__$1,(4),jobs);
} else
{if((state_val_12668 === (1)))
{var state_12667__$1 = state_12667;var statearr_12674_12814 = state_12667__$1;(statearr_12674_12814[(2)] = null);
(statearr_12674_12814[(1)] = (2));
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
});})(__12796,c__6478__auto___12808,G__12627_12797,n__4508__auto___12795,jobs,results,process,async))
;return ((function (__12796,switch__6463__auto__,c__6478__auto___12808,G__12627_12797,n__4508__auto___12795,jobs,results,process,async){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_12678 = [null,null,null,null,null,null,null];(statearr_12678[(0)] = state_machine__6464__auto__);
(statearr_12678[(1)] = (1));
return statearr_12678;
});
var state_machine__6464__auto____1 = (function (state_12667){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_12667);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e12679){if((e12679 instanceof Object))
{var ex__6467__auto__ = e12679;var statearr_12680_12815 = state_12667;(statearr_12680_12815[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12667);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12679;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12816 = state_12667;
state_12667 = G__12816;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_12667){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_12667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(__12796,switch__6463__auto__,c__6478__auto___12808,G__12627_12797,n__4508__auto___12795,jobs,results,process,async))
})();var state__6480__auto__ = (function (){var statearr_12681 = f__6479__auto__.call(null);(statearr_12681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___12808);
return statearr_12681;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(__12796,c__6478__auto___12808,G__12627_12797,n__4508__auto___12795,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__12817 = (__12796 + (1));
__12796 = G__12817;
continue;
}
} else
{}
break;
}
var c__6478__auto___12818 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___12818,jobs,results,process,async){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___12818,jobs,results,process,async){
return (function (state_12703){var state_val_12704 = (state_12703[(1)]);if((state_val_12704 === (9)))
{var inst_12696 = (state_12703[(2)]);var state_12703__$1 = (function (){var statearr_12705 = state_12703;(statearr_12705[(7)] = inst_12696);
return statearr_12705;
})();var statearr_12706_12819 = state_12703__$1;(statearr_12706_12819[(2)] = null);
(statearr_12706_12819[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12704 === (8)))
{var inst_12689 = (state_12703[(8)]);var inst_12694 = (state_12703[(2)]);var state_12703__$1 = (function (){var statearr_12707 = state_12703;(statearr_12707[(9)] = inst_12694);
return statearr_12707;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12703__$1,(9),results,inst_12689);
} else
{if((state_val_12704 === (7)))
{var inst_12699 = (state_12703[(2)]);var state_12703__$1 = state_12703;var statearr_12708_12820 = state_12703__$1;(statearr_12708_12820[(2)] = inst_12699);
(statearr_12708_12820[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12704 === (6)))
{var inst_12689 = (state_12703[(8)]);var inst_12684 = (state_12703[(10)]);var inst_12689__$1 = cljs.core.async.chan.call(null,(1));var inst_12690 = cljs.core.PersistentVector.EMPTY_NODE;var inst_12691 = [inst_12684,inst_12689__$1];var inst_12692 = (new cljs.core.PersistentVector(null,2,(5),inst_12690,inst_12691,null));var state_12703__$1 = (function (){var statearr_12709 = state_12703;(statearr_12709[(8)] = inst_12689__$1);
return statearr_12709;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12703__$1,(8),jobs,inst_12692);
} else
{if((state_val_12704 === (5)))
{var inst_12687 = cljs.core.async.close_BANG_.call(null,jobs);var state_12703__$1 = state_12703;var statearr_12710_12821 = state_12703__$1;(statearr_12710_12821[(2)] = inst_12687);
(statearr_12710_12821[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12704 === (4)))
{var inst_12684 = (state_12703[(10)]);var inst_12684__$1 = (state_12703[(2)]);var inst_12685 = (inst_12684__$1 == null);var state_12703__$1 = (function (){var statearr_12711 = state_12703;(statearr_12711[(10)] = inst_12684__$1);
return statearr_12711;
})();if(cljs.core.truth_(inst_12685))
{var statearr_12712_12822 = state_12703__$1;(statearr_12712_12822[(1)] = (5));
} else
{var statearr_12713_12823 = state_12703__$1;(statearr_12713_12823[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12704 === (3)))
{var inst_12701 = (state_12703[(2)]);var state_12703__$1 = state_12703;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12703__$1,inst_12701);
} else
{if((state_val_12704 === (2)))
{var state_12703__$1 = state_12703;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12703__$1,(4),from);
} else
{if((state_val_12704 === (1)))
{var state_12703__$1 = state_12703;var statearr_12714_12824 = state_12703__$1;(statearr_12714_12824[(2)] = null);
(statearr_12714_12824[(1)] = (2));
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
});})(c__6478__auto___12818,jobs,results,process,async))
;return ((function (switch__6463__auto__,c__6478__auto___12818,jobs,results,process,async){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_12718 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12718[(0)] = state_machine__6464__auto__);
(statearr_12718[(1)] = (1));
return statearr_12718;
});
var state_machine__6464__auto____1 = (function (state_12703){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_12703);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e12719){if((e12719 instanceof Object))
{var ex__6467__auto__ = e12719;var statearr_12720_12825 = state_12703;(statearr_12720_12825[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12703);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12719;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12826 = state_12703;
state_12703 = G__12826;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_12703){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_12703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___12818,jobs,results,process,async))
})();var state__6480__auto__ = (function (){var statearr_12721 = f__6479__auto__.call(null);(statearr_12721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___12818);
return statearr_12721;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___12818,jobs,results,process,async))
);
var c__6478__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto__,jobs,results,process,async){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto__,jobs,results,process,async){
return (function (state_12759){var state_val_12760 = (state_12759[(1)]);if((state_val_12760 === (7)))
{var inst_12755 = (state_12759[(2)]);var state_12759__$1 = state_12759;var statearr_12761_12827 = state_12759__$1;(statearr_12761_12827[(2)] = inst_12755);
(statearr_12761_12827[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12760 === (20)))
{var state_12759__$1 = state_12759;var statearr_12762_12828 = state_12759__$1;(statearr_12762_12828[(2)] = null);
(statearr_12762_12828[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12760 === (1)))
{var state_12759__$1 = state_12759;var statearr_12763_12829 = state_12759__$1;(statearr_12763_12829[(2)] = null);
(statearr_12763_12829[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12760 === (4)))
{var inst_12724 = (state_12759[(7)]);var inst_12724__$1 = (state_12759[(2)]);var inst_12725 = (inst_12724__$1 == null);var state_12759__$1 = (function (){var statearr_12764 = state_12759;(statearr_12764[(7)] = inst_12724__$1);
return statearr_12764;
})();if(cljs.core.truth_(inst_12725))
{var statearr_12765_12830 = state_12759__$1;(statearr_12765_12830[(1)] = (5));
} else
{var statearr_12766_12831 = state_12759__$1;(statearr_12766_12831[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12760 === (15)))
{var inst_12737 = (state_12759[(8)]);var state_12759__$1 = state_12759;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12759__$1,(18),to,inst_12737);
} else
{if((state_val_12760 === (21)))
{var inst_12750 = (state_12759[(2)]);var state_12759__$1 = state_12759;var statearr_12767_12832 = state_12759__$1;(statearr_12767_12832[(2)] = inst_12750);
(statearr_12767_12832[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12760 === (13)))
{var inst_12752 = (state_12759[(2)]);var state_12759__$1 = (function (){var statearr_12768 = state_12759;(statearr_12768[(9)] = inst_12752);
return statearr_12768;
})();var statearr_12769_12833 = state_12759__$1;(statearr_12769_12833[(2)] = null);
(statearr_12769_12833[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12760 === (6)))
{var inst_12724 = (state_12759[(7)]);var state_12759__$1 = state_12759;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12759__$1,(11),inst_12724);
} else
{if((state_val_12760 === (17)))
{var inst_12745 = (state_12759[(2)]);var state_12759__$1 = state_12759;if(cljs.core.truth_(inst_12745))
{var statearr_12770_12834 = state_12759__$1;(statearr_12770_12834[(1)] = (19));
} else
{var statearr_12771_12835 = state_12759__$1;(statearr_12771_12835[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12760 === (3)))
{var inst_12757 = (state_12759[(2)]);var state_12759__$1 = state_12759;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12759__$1,inst_12757);
} else
{if((state_val_12760 === (12)))
{var inst_12734 = (state_12759[(10)]);var state_12759__$1 = state_12759;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12759__$1,(14),inst_12734);
} else
{if((state_val_12760 === (2)))
{var state_12759__$1 = state_12759;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12759__$1,(4),results);
} else
{if((state_val_12760 === (19)))
{var state_12759__$1 = state_12759;var statearr_12772_12836 = state_12759__$1;(statearr_12772_12836[(2)] = null);
(statearr_12772_12836[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12760 === (11)))
{var inst_12734 = (state_12759[(2)]);var state_12759__$1 = (function (){var statearr_12773 = state_12759;(statearr_12773[(10)] = inst_12734);
return statearr_12773;
})();var statearr_12774_12837 = state_12759__$1;(statearr_12774_12837[(2)] = null);
(statearr_12774_12837[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12760 === (9)))
{var state_12759__$1 = state_12759;var statearr_12775_12838 = state_12759__$1;(statearr_12775_12838[(2)] = null);
(statearr_12775_12838[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12760 === (5)))
{var state_12759__$1 = state_12759;if(cljs.core.truth_(close_QMARK_))
{var statearr_12776_12839 = state_12759__$1;(statearr_12776_12839[(1)] = (8));
} else
{var statearr_12777_12840 = state_12759__$1;(statearr_12777_12840[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12760 === (14)))
{var inst_12737 = (state_12759[(8)]);var inst_12739 = (state_12759[(11)]);var inst_12737__$1 = (state_12759[(2)]);var inst_12738 = (inst_12737__$1 == null);var inst_12739__$1 = cljs.core.not.call(null,inst_12738);var state_12759__$1 = (function (){var statearr_12778 = state_12759;(statearr_12778[(8)] = inst_12737__$1);
(statearr_12778[(11)] = inst_12739__$1);
return statearr_12778;
})();if(inst_12739__$1)
{var statearr_12779_12841 = state_12759__$1;(statearr_12779_12841[(1)] = (15));
} else
{var statearr_12780_12842 = state_12759__$1;(statearr_12780_12842[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12760 === (16)))
{var inst_12739 = (state_12759[(11)]);var state_12759__$1 = state_12759;var statearr_12781_12843 = state_12759__$1;(statearr_12781_12843[(2)] = inst_12739);
(statearr_12781_12843[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12760 === (10)))
{var inst_12731 = (state_12759[(2)]);var state_12759__$1 = state_12759;var statearr_12782_12844 = state_12759__$1;(statearr_12782_12844[(2)] = inst_12731);
(statearr_12782_12844[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12760 === (18)))
{var inst_12742 = (state_12759[(2)]);var state_12759__$1 = state_12759;var statearr_12783_12845 = state_12759__$1;(statearr_12783_12845[(2)] = inst_12742);
(statearr_12783_12845[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12760 === (8)))
{var inst_12728 = cljs.core.async.close_BANG_.call(null,to);var state_12759__$1 = state_12759;var statearr_12784_12846 = state_12759__$1;(statearr_12784_12846[(2)] = inst_12728);
(statearr_12784_12846[(1)] = (10));
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
});})(c__6478__auto__,jobs,results,process,async))
;return ((function (switch__6463__auto__,c__6478__auto__,jobs,results,process,async){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_12788 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12788[(0)] = state_machine__6464__auto__);
(statearr_12788[(1)] = (1));
return statearr_12788;
});
var state_machine__6464__auto____1 = (function (state_12759){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_12759);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e12789){if((e12789 instanceof Object))
{var ex__6467__auto__ = e12789;var statearr_12790_12847 = state_12759;(statearr_12790_12847[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12759);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12789;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12848 = state_12759;
state_12759 = G__12848;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_12759){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_12759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto__,jobs,results,process,async))
})();var state__6480__auto__ = (function (){var statearr_12791 = f__6479__auto__.call(null);(statearr_12791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto__);
return statearr_12791;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto__,jobs,results,process,async))
);
return c__6478__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6478__auto___12949 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___12949,tc,fc){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___12949,tc,fc){
return (function (state_12924){var state_val_12925 = (state_12924[(1)]);if((state_val_12925 === (7)))
{var inst_12920 = (state_12924[(2)]);var state_12924__$1 = state_12924;var statearr_12926_12950 = state_12924__$1;(statearr_12926_12950[(2)] = inst_12920);
(statearr_12926_12950[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12925 === (1)))
{var state_12924__$1 = state_12924;var statearr_12927_12951 = state_12924__$1;(statearr_12927_12951[(2)] = null);
(statearr_12927_12951[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12925 === (4)))
{var inst_12901 = (state_12924[(7)]);var inst_12901__$1 = (state_12924[(2)]);var inst_12902 = (inst_12901__$1 == null);var state_12924__$1 = (function (){var statearr_12928 = state_12924;(statearr_12928[(7)] = inst_12901__$1);
return statearr_12928;
})();if(cljs.core.truth_(inst_12902))
{var statearr_12929_12952 = state_12924__$1;(statearr_12929_12952[(1)] = (5));
} else
{var statearr_12930_12953 = state_12924__$1;(statearr_12930_12953[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12925 === (13)))
{var state_12924__$1 = state_12924;var statearr_12931_12954 = state_12924__$1;(statearr_12931_12954[(2)] = null);
(statearr_12931_12954[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12925 === (6)))
{var inst_12901 = (state_12924[(7)]);var inst_12907 = p.call(null,inst_12901);var state_12924__$1 = state_12924;if(cljs.core.truth_(inst_12907))
{var statearr_12932_12955 = state_12924__$1;(statearr_12932_12955[(1)] = (9));
} else
{var statearr_12933_12956 = state_12924__$1;(statearr_12933_12956[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12925 === (3)))
{var inst_12922 = (state_12924[(2)]);var state_12924__$1 = state_12924;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12924__$1,inst_12922);
} else
{if((state_val_12925 === (12)))
{var state_12924__$1 = state_12924;var statearr_12934_12957 = state_12924__$1;(statearr_12934_12957[(2)] = null);
(statearr_12934_12957[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12925 === (2)))
{var state_12924__$1 = state_12924;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12924__$1,(4),ch);
} else
{if((state_val_12925 === (11)))
{var inst_12901 = (state_12924[(7)]);var inst_12911 = (state_12924[(2)]);var state_12924__$1 = state_12924;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12924__$1,(8),inst_12911,inst_12901);
} else
{if((state_val_12925 === (9)))
{var state_12924__$1 = state_12924;var statearr_12935_12958 = state_12924__$1;(statearr_12935_12958[(2)] = tc);
(statearr_12935_12958[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12925 === (5)))
{var inst_12904 = cljs.core.async.close_BANG_.call(null,tc);var inst_12905 = cljs.core.async.close_BANG_.call(null,fc);var state_12924__$1 = (function (){var statearr_12936 = state_12924;(statearr_12936[(8)] = inst_12904);
return statearr_12936;
})();var statearr_12937_12959 = state_12924__$1;(statearr_12937_12959[(2)] = inst_12905);
(statearr_12937_12959[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12925 === (14)))
{var inst_12918 = (state_12924[(2)]);var state_12924__$1 = state_12924;var statearr_12938_12960 = state_12924__$1;(statearr_12938_12960[(2)] = inst_12918);
(statearr_12938_12960[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12925 === (10)))
{var state_12924__$1 = state_12924;var statearr_12939_12961 = state_12924__$1;(statearr_12939_12961[(2)] = fc);
(statearr_12939_12961[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12925 === (8)))
{var inst_12913 = (state_12924[(2)]);var state_12924__$1 = state_12924;if(cljs.core.truth_(inst_12913))
{var statearr_12940_12962 = state_12924__$1;(statearr_12940_12962[(1)] = (12));
} else
{var statearr_12941_12963 = state_12924__$1;(statearr_12941_12963[(1)] = (13));
}
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
}
}
}
});})(c__6478__auto___12949,tc,fc))
;return ((function (switch__6463__auto__,c__6478__auto___12949,tc,fc){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_12945 = [null,null,null,null,null,null,null,null,null];(statearr_12945[(0)] = state_machine__6464__auto__);
(statearr_12945[(1)] = (1));
return statearr_12945;
});
var state_machine__6464__auto____1 = (function (state_12924){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_12924);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e12946){if((e12946 instanceof Object))
{var ex__6467__auto__ = e12946;var statearr_12947_12964 = state_12924;(statearr_12947_12964[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12924);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12946;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12965 = state_12924;
state_12924 = G__12965;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_12924){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_12924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___12949,tc,fc))
})();var state__6480__auto__ = (function (){var statearr_12948 = f__6479__auto__.call(null);(statearr_12948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___12949);
return statearr_12948;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___12949,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6478__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto__){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto__){
return (function (state_13012){var state_val_13013 = (state_13012[(1)]);if((state_val_13013 === (7)))
{var inst_13008 = (state_13012[(2)]);var state_13012__$1 = state_13012;var statearr_13014_13030 = state_13012__$1;(statearr_13014_13030[(2)] = inst_13008);
(statearr_13014_13030[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13013 === (6)))
{var inst_13001 = (state_13012[(7)]);var inst_12998 = (state_13012[(8)]);var inst_13005 = f.call(null,inst_12998,inst_13001);var inst_12998__$1 = inst_13005;var state_13012__$1 = (function (){var statearr_13015 = state_13012;(statearr_13015[(8)] = inst_12998__$1);
return statearr_13015;
})();var statearr_13016_13031 = state_13012__$1;(statearr_13016_13031[(2)] = null);
(statearr_13016_13031[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13013 === (5)))
{var inst_12998 = (state_13012[(8)]);var state_13012__$1 = state_13012;var statearr_13017_13032 = state_13012__$1;(statearr_13017_13032[(2)] = inst_12998);
(statearr_13017_13032[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13013 === (4)))
{var inst_13001 = (state_13012[(7)]);var inst_13001__$1 = (state_13012[(2)]);var inst_13002 = (inst_13001__$1 == null);var state_13012__$1 = (function (){var statearr_13018 = state_13012;(statearr_13018[(7)] = inst_13001__$1);
return statearr_13018;
})();if(cljs.core.truth_(inst_13002))
{var statearr_13019_13033 = state_13012__$1;(statearr_13019_13033[(1)] = (5));
} else
{var statearr_13020_13034 = state_13012__$1;(statearr_13020_13034[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13013 === (3)))
{var inst_13010 = (state_13012[(2)]);var state_13012__$1 = state_13012;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13012__$1,inst_13010);
} else
{if((state_val_13013 === (2)))
{var state_13012__$1 = state_13012;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13012__$1,(4),ch);
} else
{if((state_val_13013 === (1)))
{var inst_12998 = init;var state_13012__$1 = (function (){var statearr_13021 = state_13012;(statearr_13021[(8)] = inst_12998);
return statearr_13021;
})();var statearr_13022_13035 = state_13012__$1;(statearr_13022_13035[(2)] = null);
(statearr_13022_13035[(1)] = (2));
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
});})(c__6478__auto__))
;return ((function (switch__6463__auto__,c__6478__auto__){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_13026 = [null,null,null,null,null,null,null,null,null];(statearr_13026[(0)] = state_machine__6464__auto__);
(statearr_13026[(1)] = (1));
return statearr_13026;
});
var state_machine__6464__auto____1 = (function (state_13012){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_13012);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e13027){if((e13027 instanceof Object))
{var ex__6467__auto__ = e13027;var statearr_13028_13036 = state_13012;(statearr_13028_13036[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13012);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13027;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13037 = state_13012;
state_13012 = G__13037;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_13012){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_13012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto__))
})();var state__6480__auto__ = (function (){var statearr_13029 = f__6479__auto__.call(null);(statearr_13029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto__);
return statearr_13029;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto__))
);
return c__6478__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6478__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto__){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto__){
return (function (state_13111){var state_val_13112 = (state_13111[(1)]);if((state_val_13112 === (7)))
{var inst_13093 = (state_13111[(2)]);var state_13111__$1 = state_13111;var statearr_13113_13136 = state_13111__$1;(statearr_13113_13136[(2)] = inst_13093);
(statearr_13113_13136[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13112 === (1)))
{var inst_13087 = cljs.core.seq.call(null,coll);var inst_13088 = inst_13087;var state_13111__$1 = (function (){var statearr_13114 = state_13111;(statearr_13114[(7)] = inst_13088);
return statearr_13114;
})();var statearr_13115_13137 = state_13111__$1;(statearr_13115_13137[(2)] = null);
(statearr_13115_13137[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13112 === (4)))
{var inst_13088 = (state_13111[(7)]);var inst_13091 = cljs.core.first.call(null,inst_13088);var state_13111__$1 = state_13111;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13111__$1,(7),ch,inst_13091);
} else
{if((state_val_13112 === (13)))
{var inst_13105 = (state_13111[(2)]);var state_13111__$1 = state_13111;var statearr_13116_13138 = state_13111__$1;(statearr_13116_13138[(2)] = inst_13105);
(statearr_13116_13138[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13112 === (6)))
{var inst_13096 = (state_13111[(2)]);var state_13111__$1 = state_13111;if(cljs.core.truth_(inst_13096))
{var statearr_13117_13139 = state_13111__$1;(statearr_13117_13139[(1)] = (8));
} else
{var statearr_13118_13140 = state_13111__$1;(statearr_13118_13140[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13112 === (3)))
{var inst_13109 = (state_13111[(2)]);var state_13111__$1 = state_13111;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13111__$1,inst_13109);
} else
{if((state_val_13112 === (12)))
{var state_13111__$1 = state_13111;var statearr_13119_13141 = state_13111__$1;(statearr_13119_13141[(2)] = null);
(statearr_13119_13141[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13112 === (2)))
{var inst_13088 = (state_13111[(7)]);var state_13111__$1 = state_13111;if(cljs.core.truth_(inst_13088))
{var statearr_13120_13142 = state_13111__$1;(statearr_13120_13142[(1)] = (4));
} else
{var statearr_13121_13143 = state_13111__$1;(statearr_13121_13143[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13112 === (11)))
{var inst_13102 = cljs.core.async.close_BANG_.call(null,ch);var state_13111__$1 = state_13111;var statearr_13122_13144 = state_13111__$1;(statearr_13122_13144[(2)] = inst_13102);
(statearr_13122_13144[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13112 === (9)))
{var state_13111__$1 = state_13111;if(cljs.core.truth_(close_QMARK_))
{var statearr_13123_13145 = state_13111__$1;(statearr_13123_13145[(1)] = (11));
} else
{var statearr_13124_13146 = state_13111__$1;(statearr_13124_13146[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13112 === (5)))
{var inst_13088 = (state_13111[(7)]);var state_13111__$1 = state_13111;var statearr_13125_13147 = state_13111__$1;(statearr_13125_13147[(2)] = inst_13088);
(statearr_13125_13147[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13112 === (10)))
{var inst_13107 = (state_13111[(2)]);var state_13111__$1 = state_13111;var statearr_13126_13148 = state_13111__$1;(statearr_13126_13148[(2)] = inst_13107);
(statearr_13126_13148[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13112 === (8)))
{var inst_13088 = (state_13111[(7)]);var inst_13098 = cljs.core.next.call(null,inst_13088);var inst_13088__$1 = inst_13098;var state_13111__$1 = (function (){var statearr_13127 = state_13111;(statearr_13127[(7)] = inst_13088__$1);
return statearr_13127;
})();var statearr_13128_13149 = state_13111__$1;(statearr_13128_13149[(2)] = null);
(statearr_13128_13149[(1)] = (2));
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
}
}
});})(c__6478__auto__))
;return ((function (switch__6463__auto__,c__6478__auto__){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_13132 = [null,null,null,null,null,null,null,null];(statearr_13132[(0)] = state_machine__6464__auto__);
(statearr_13132[(1)] = (1));
return statearr_13132;
});
var state_machine__6464__auto____1 = (function (state_13111){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_13111);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e13133){if((e13133 instanceof Object))
{var ex__6467__auto__ = e13133;var statearr_13134_13150 = state_13111;(statearr_13134_13150[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13111);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13133;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13151 = state_13111;
state_13111 = G__13151;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_13111){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_13111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto__))
})();var state__6480__auto__ = (function (){var statearr_13135 = f__6479__auto__.call(null);(statearr_13135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto__);
return statearr_13135;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto__))
);
return c__6478__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj13153 = {};return obj13153;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3627__auto__ = _;if(and__3627__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4275__auto__ = (((_ == null))?null:_);return (function (){var or__3639__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj13155 = {};return obj13155;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13377 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13377 = (function (cs,ch,mult,meta13378){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13378 = meta13378;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13377.cljs$lang$type = true;
cljs.core.async.t13377.cljs$lang$ctorStr = "cljs.core.async/t13377";
cljs.core.async.t13377.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t13377");
});})(cs))
;
cljs.core.async.t13377.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13377.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13377.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13377.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13377.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13377.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13377.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13379){var self__ = this;
var _13379__$1 = this;return self__.meta13378;
});})(cs))
;
cljs.core.async.t13377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13379,meta13378__$1){var self__ = this;
var _13379__$1 = this;return (new cljs.core.async.t13377(self__.cs,self__.ch,self__.mult,meta13378__$1));
});})(cs))
;
cljs.core.async.__GT_t13377 = ((function (cs){
return (function __GT_t13377(cs__$1,ch__$1,mult__$1,meta13378){return (new cljs.core.async.t13377(cs__$1,ch__$1,mult__$1,meta13378));
});})(cs))
;
}
return (new cljs.core.async.t13377(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6478__auto___13598 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___13598,cs,m,dchan,dctr,done){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___13598,cs,m,dchan,dctr,done){
return (function (state_13510){var state_val_13511 = (state_13510[(1)]);if((state_val_13511 === (7)))
{var inst_13506 = (state_13510[(2)]);var state_13510__$1 = state_13510;var statearr_13512_13599 = state_13510__$1;(statearr_13512_13599[(2)] = inst_13506);
(statearr_13512_13599[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (20)))
{var inst_13411 = (state_13510[(7)]);var inst_13421 = cljs.core.first.call(null,inst_13411);var inst_13422 = cljs.core.nth.call(null,inst_13421,(0),null);var inst_13423 = cljs.core.nth.call(null,inst_13421,(1),null);var state_13510__$1 = (function (){var statearr_13513 = state_13510;(statearr_13513[(8)] = inst_13422);
return statearr_13513;
})();if(cljs.core.truth_(inst_13423))
{var statearr_13514_13600 = state_13510__$1;(statearr_13514_13600[(1)] = (22));
} else
{var statearr_13515_13601 = state_13510__$1;(statearr_13515_13601[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (27)))
{var inst_13382 = (state_13510[(9)]);var inst_13451 = (state_13510[(10)]);var inst_13453 = (state_13510[(11)]);var inst_13458 = (state_13510[(12)]);var inst_13458__$1 = cljs.core._nth.call(null,inst_13451,inst_13453);var inst_13459 = cljs.core.async.put_BANG_.call(null,inst_13458__$1,inst_13382,done);var state_13510__$1 = (function (){var statearr_13516 = state_13510;(statearr_13516[(12)] = inst_13458__$1);
return statearr_13516;
})();if(cljs.core.truth_(inst_13459))
{var statearr_13517_13602 = state_13510__$1;(statearr_13517_13602[(1)] = (30));
} else
{var statearr_13518_13603 = state_13510__$1;(statearr_13518_13603[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (1)))
{var state_13510__$1 = state_13510;var statearr_13519_13604 = state_13510__$1;(statearr_13519_13604[(2)] = null);
(statearr_13519_13604[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (24)))
{var inst_13411 = (state_13510[(7)]);var inst_13428 = (state_13510[(2)]);var inst_13429 = cljs.core.next.call(null,inst_13411);var inst_13391 = inst_13429;var inst_13392 = null;var inst_13393 = (0);var inst_13394 = (0);var state_13510__$1 = (function (){var statearr_13520 = state_13510;(statearr_13520[(13)] = inst_13394);
(statearr_13520[(14)] = inst_13393);
(statearr_13520[(15)] = inst_13391);
(statearr_13520[(16)] = inst_13428);
(statearr_13520[(17)] = inst_13392);
return statearr_13520;
})();var statearr_13521_13605 = state_13510__$1;(statearr_13521_13605[(2)] = null);
(statearr_13521_13605[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (39)))
{var state_13510__$1 = state_13510;var statearr_13525_13606 = state_13510__$1;(statearr_13525_13606[(2)] = null);
(statearr_13525_13606[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (4)))
{var inst_13382 = (state_13510[(9)]);var inst_13382__$1 = (state_13510[(2)]);var inst_13383 = (inst_13382__$1 == null);var state_13510__$1 = (function (){var statearr_13526 = state_13510;(statearr_13526[(9)] = inst_13382__$1);
return statearr_13526;
})();if(cljs.core.truth_(inst_13383))
{var statearr_13527_13607 = state_13510__$1;(statearr_13527_13607[(1)] = (5));
} else
{var statearr_13528_13608 = state_13510__$1;(statearr_13528_13608[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (15)))
{var inst_13394 = (state_13510[(13)]);var inst_13393 = (state_13510[(14)]);var inst_13391 = (state_13510[(15)]);var inst_13392 = (state_13510[(17)]);var inst_13407 = (state_13510[(2)]);var inst_13408 = (inst_13394 + (1));var tmp13522 = inst_13393;var tmp13523 = inst_13391;var tmp13524 = inst_13392;var inst_13391__$1 = tmp13523;var inst_13392__$1 = tmp13524;var inst_13393__$1 = tmp13522;var inst_13394__$1 = inst_13408;var state_13510__$1 = (function (){var statearr_13529 = state_13510;(statearr_13529[(18)] = inst_13407);
(statearr_13529[(13)] = inst_13394__$1);
(statearr_13529[(14)] = inst_13393__$1);
(statearr_13529[(15)] = inst_13391__$1);
(statearr_13529[(17)] = inst_13392__$1);
return statearr_13529;
})();var statearr_13530_13609 = state_13510__$1;(statearr_13530_13609[(2)] = null);
(statearr_13530_13609[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (21)))
{var inst_13432 = (state_13510[(2)]);var state_13510__$1 = state_13510;var statearr_13534_13610 = state_13510__$1;(statearr_13534_13610[(2)] = inst_13432);
(statearr_13534_13610[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (31)))
{var inst_13458 = (state_13510[(12)]);var inst_13462 = done.call(null,null);var inst_13463 = cljs.core.async.untap_STAR_.call(null,m,inst_13458);var state_13510__$1 = (function (){var statearr_13535 = state_13510;(statearr_13535[(19)] = inst_13462);
return statearr_13535;
})();var statearr_13536_13611 = state_13510__$1;(statearr_13536_13611[(2)] = inst_13463);
(statearr_13536_13611[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (32)))
{var inst_13451 = (state_13510[(10)]);var inst_13450 = (state_13510[(20)]);var inst_13453 = (state_13510[(11)]);var inst_13452 = (state_13510[(21)]);var inst_13465 = (state_13510[(2)]);var inst_13466 = (inst_13453 + (1));var tmp13531 = inst_13451;var tmp13532 = inst_13450;var tmp13533 = inst_13452;var inst_13450__$1 = tmp13532;var inst_13451__$1 = tmp13531;var inst_13452__$1 = tmp13533;var inst_13453__$1 = inst_13466;var state_13510__$1 = (function (){var statearr_13537 = state_13510;(statearr_13537[(22)] = inst_13465);
(statearr_13537[(10)] = inst_13451__$1);
(statearr_13537[(20)] = inst_13450__$1);
(statearr_13537[(11)] = inst_13453__$1);
(statearr_13537[(21)] = inst_13452__$1);
return statearr_13537;
})();var statearr_13538_13612 = state_13510__$1;(statearr_13538_13612[(2)] = null);
(statearr_13538_13612[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (40)))
{var inst_13478 = (state_13510[(23)]);var inst_13482 = done.call(null,null);var inst_13483 = cljs.core.async.untap_STAR_.call(null,m,inst_13478);var state_13510__$1 = (function (){var statearr_13539 = state_13510;(statearr_13539[(24)] = inst_13482);
return statearr_13539;
})();var statearr_13540_13613 = state_13510__$1;(statearr_13540_13613[(2)] = inst_13483);
(statearr_13540_13613[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (33)))
{var inst_13469 = (state_13510[(25)]);var inst_13471 = cljs.core.chunked_seq_QMARK_.call(null,inst_13469);var state_13510__$1 = state_13510;if(inst_13471)
{var statearr_13541_13614 = state_13510__$1;(statearr_13541_13614[(1)] = (36));
} else
{var statearr_13542_13615 = state_13510__$1;(statearr_13542_13615[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (13)))
{var inst_13401 = (state_13510[(26)]);var inst_13404 = cljs.core.async.close_BANG_.call(null,inst_13401);var state_13510__$1 = state_13510;var statearr_13543_13616 = state_13510__$1;(statearr_13543_13616[(2)] = inst_13404);
(statearr_13543_13616[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (22)))
{var inst_13422 = (state_13510[(8)]);var inst_13425 = cljs.core.async.close_BANG_.call(null,inst_13422);var state_13510__$1 = state_13510;var statearr_13544_13617 = state_13510__$1;(statearr_13544_13617[(2)] = inst_13425);
(statearr_13544_13617[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (36)))
{var inst_13469 = (state_13510[(25)]);var inst_13473 = cljs.core.chunk_first.call(null,inst_13469);var inst_13474 = cljs.core.chunk_rest.call(null,inst_13469);var inst_13475 = cljs.core.count.call(null,inst_13473);var inst_13450 = inst_13474;var inst_13451 = inst_13473;var inst_13452 = inst_13475;var inst_13453 = (0);var state_13510__$1 = (function (){var statearr_13545 = state_13510;(statearr_13545[(10)] = inst_13451);
(statearr_13545[(20)] = inst_13450);
(statearr_13545[(11)] = inst_13453);
(statearr_13545[(21)] = inst_13452);
return statearr_13545;
})();var statearr_13546_13618 = state_13510__$1;(statearr_13546_13618[(2)] = null);
(statearr_13546_13618[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (41)))
{var inst_13469 = (state_13510[(25)]);var inst_13485 = (state_13510[(2)]);var inst_13486 = cljs.core.next.call(null,inst_13469);var inst_13450 = inst_13486;var inst_13451 = null;var inst_13452 = (0);var inst_13453 = (0);var state_13510__$1 = (function (){var statearr_13547 = state_13510;(statearr_13547[(10)] = inst_13451);
(statearr_13547[(20)] = inst_13450);
(statearr_13547[(11)] = inst_13453);
(statearr_13547[(21)] = inst_13452);
(statearr_13547[(27)] = inst_13485);
return statearr_13547;
})();var statearr_13548_13619 = state_13510__$1;(statearr_13548_13619[(2)] = null);
(statearr_13548_13619[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (43)))
{var state_13510__$1 = state_13510;var statearr_13549_13620 = state_13510__$1;(statearr_13549_13620[(2)] = null);
(statearr_13549_13620[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (29)))
{var inst_13494 = (state_13510[(2)]);var state_13510__$1 = state_13510;var statearr_13550_13621 = state_13510__$1;(statearr_13550_13621[(2)] = inst_13494);
(statearr_13550_13621[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (44)))
{var inst_13503 = (state_13510[(2)]);var state_13510__$1 = (function (){var statearr_13551 = state_13510;(statearr_13551[(28)] = inst_13503);
return statearr_13551;
})();var statearr_13552_13622 = state_13510__$1;(statearr_13552_13622[(2)] = null);
(statearr_13552_13622[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (6)))
{var inst_13442 = (state_13510[(29)]);var inst_13441 = cljs.core.deref.call(null,cs);var inst_13442__$1 = cljs.core.keys.call(null,inst_13441);var inst_13443 = cljs.core.count.call(null,inst_13442__$1);var inst_13444 = cljs.core.reset_BANG_.call(null,dctr,inst_13443);var inst_13449 = cljs.core.seq.call(null,inst_13442__$1);var inst_13450 = inst_13449;var inst_13451 = null;var inst_13452 = (0);var inst_13453 = (0);var state_13510__$1 = (function (){var statearr_13553 = state_13510;(statearr_13553[(10)] = inst_13451);
(statearr_13553[(20)] = inst_13450);
(statearr_13553[(30)] = inst_13444);
(statearr_13553[(11)] = inst_13453);
(statearr_13553[(21)] = inst_13452);
(statearr_13553[(29)] = inst_13442__$1);
return statearr_13553;
})();var statearr_13554_13623 = state_13510__$1;(statearr_13554_13623[(2)] = null);
(statearr_13554_13623[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (28)))
{var inst_13469 = (state_13510[(25)]);var inst_13450 = (state_13510[(20)]);var inst_13469__$1 = cljs.core.seq.call(null,inst_13450);var state_13510__$1 = (function (){var statearr_13555 = state_13510;(statearr_13555[(25)] = inst_13469__$1);
return statearr_13555;
})();if(inst_13469__$1)
{var statearr_13556_13624 = state_13510__$1;(statearr_13556_13624[(1)] = (33));
} else
{var statearr_13557_13625 = state_13510__$1;(statearr_13557_13625[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (25)))
{var inst_13453 = (state_13510[(11)]);var inst_13452 = (state_13510[(21)]);var inst_13455 = (inst_13453 < inst_13452);var inst_13456 = inst_13455;var state_13510__$1 = state_13510;if(cljs.core.truth_(inst_13456))
{var statearr_13558_13626 = state_13510__$1;(statearr_13558_13626[(1)] = (27));
} else
{var statearr_13559_13627 = state_13510__$1;(statearr_13559_13627[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (34)))
{var state_13510__$1 = state_13510;var statearr_13560_13628 = state_13510__$1;(statearr_13560_13628[(2)] = null);
(statearr_13560_13628[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (17)))
{var state_13510__$1 = state_13510;var statearr_13561_13629 = state_13510__$1;(statearr_13561_13629[(2)] = null);
(statearr_13561_13629[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (3)))
{var inst_13508 = (state_13510[(2)]);var state_13510__$1 = state_13510;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13510__$1,inst_13508);
} else
{if((state_val_13511 === (12)))
{var inst_13437 = (state_13510[(2)]);var state_13510__$1 = state_13510;var statearr_13562_13630 = state_13510__$1;(statearr_13562_13630[(2)] = inst_13437);
(statearr_13562_13630[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (2)))
{var state_13510__$1 = state_13510;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13510__$1,(4),ch);
} else
{if((state_val_13511 === (23)))
{var state_13510__$1 = state_13510;var statearr_13563_13631 = state_13510__$1;(statearr_13563_13631[(2)] = null);
(statearr_13563_13631[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (35)))
{var inst_13492 = (state_13510[(2)]);var state_13510__$1 = state_13510;var statearr_13564_13632 = state_13510__$1;(statearr_13564_13632[(2)] = inst_13492);
(statearr_13564_13632[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (19)))
{var inst_13411 = (state_13510[(7)]);var inst_13415 = cljs.core.chunk_first.call(null,inst_13411);var inst_13416 = cljs.core.chunk_rest.call(null,inst_13411);var inst_13417 = cljs.core.count.call(null,inst_13415);var inst_13391 = inst_13416;var inst_13392 = inst_13415;var inst_13393 = inst_13417;var inst_13394 = (0);var state_13510__$1 = (function (){var statearr_13565 = state_13510;(statearr_13565[(13)] = inst_13394);
(statearr_13565[(14)] = inst_13393);
(statearr_13565[(15)] = inst_13391);
(statearr_13565[(17)] = inst_13392);
return statearr_13565;
})();var statearr_13566_13633 = state_13510__$1;(statearr_13566_13633[(2)] = null);
(statearr_13566_13633[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (11)))
{var inst_13391 = (state_13510[(15)]);var inst_13411 = (state_13510[(7)]);var inst_13411__$1 = cljs.core.seq.call(null,inst_13391);var state_13510__$1 = (function (){var statearr_13567 = state_13510;(statearr_13567[(7)] = inst_13411__$1);
return statearr_13567;
})();if(inst_13411__$1)
{var statearr_13568_13634 = state_13510__$1;(statearr_13568_13634[(1)] = (16));
} else
{var statearr_13569_13635 = state_13510__$1;(statearr_13569_13635[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (9)))
{var inst_13439 = (state_13510[(2)]);var state_13510__$1 = state_13510;var statearr_13570_13636 = state_13510__$1;(statearr_13570_13636[(2)] = inst_13439);
(statearr_13570_13636[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (5)))
{var inst_13389 = cljs.core.deref.call(null,cs);var inst_13390 = cljs.core.seq.call(null,inst_13389);var inst_13391 = inst_13390;var inst_13392 = null;var inst_13393 = (0);var inst_13394 = (0);var state_13510__$1 = (function (){var statearr_13571 = state_13510;(statearr_13571[(13)] = inst_13394);
(statearr_13571[(14)] = inst_13393);
(statearr_13571[(15)] = inst_13391);
(statearr_13571[(17)] = inst_13392);
return statearr_13571;
})();var statearr_13572_13637 = state_13510__$1;(statearr_13572_13637[(2)] = null);
(statearr_13572_13637[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (14)))
{var state_13510__$1 = state_13510;var statearr_13573_13638 = state_13510__$1;(statearr_13573_13638[(2)] = null);
(statearr_13573_13638[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (45)))
{var inst_13500 = (state_13510[(2)]);var state_13510__$1 = state_13510;var statearr_13574_13639 = state_13510__$1;(statearr_13574_13639[(2)] = inst_13500);
(statearr_13574_13639[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (26)))
{var inst_13442 = (state_13510[(29)]);var inst_13496 = (state_13510[(2)]);var inst_13497 = cljs.core.seq.call(null,inst_13442);var state_13510__$1 = (function (){var statearr_13575 = state_13510;(statearr_13575[(31)] = inst_13496);
return statearr_13575;
})();if(inst_13497)
{var statearr_13576_13640 = state_13510__$1;(statearr_13576_13640[(1)] = (42));
} else
{var statearr_13577_13641 = state_13510__$1;(statearr_13577_13641[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (16)))
{var inst_13411 = (state_13510[(7)]);var inst_13413 = cljs.core.chunked_seq_QMARK_.call(null,inst_13411);var state_13510__$1 = state_13510;if(inst_13413)
{var statearr_13578_13642 = state_13510__$1;(statearr_13578_13642[(1)] = (19));
} else
{var statearr_13579_13643 = state_13510__$1;(statearr_13579_13643[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (38)))
{var inst_13489 = (state_13510[(2)]);var state_13510__$1 = state_13510;var statearr_13580_13644 = state_13510__$1;(statearr_13580_13644[(2)] = inst_13489);
(statearr_13580_13644[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (30)))
{var state_13510__$1 = state_13510;var statearr_13581_13645 = state_13510__$1;(statearr_13581_13645[(2)] = null);
(statearr_13581_13645[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (10)))
{var inst_13394 = (state_13510[(13)]);var inst_13392 = (state_13510[(17)]);var inst_13400 = cljs.core._nth.call(null,inst_13392,inst_13394);var inst_13401 = cljs.core.nth.call(null,inst_13400,(0),null);var inst_13402 = cljs.core.nth.call(null,inst_13400,(1),null);var state_13510__$1 = (function (){var statearr_13582 = state_13510;(statearr_13582[(26)] = inst_13401);
return statearr_13582;
})();if(cljs.core.truth_(inst_13402))
{var statearr_13583_13646 = state_13510__$1;(statearr_13583_13646[(1)] = (13));
} else
{var statearr_13584_13647 = state_13510__$1;(statearr_13584_13647[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (18)))
{var inst_13435 = (state_13510[(2)]);var state_13510__$1 = state_13510;var statearr_13585_13648 = state_13510__$1;(statearr_13585_13648[(2)] = inst_13435);
(statearr_13585_13648[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (42)))
{var state_13510__$1 = state_13510;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13510__$1,(45),dchan);
} else
{if((state_val_13511 === (37)))
{var inst_13382 = (state_13510[(9)]);var inst_13469 = (state_13510[(25)]);var inst_13478 = (state_13510[(23)]);var inst_13478__$1 = cljs.core.first.call(null,inst_13469);var inst_13479 = cljs.core.async.put_BANG_.call(null,inst_13478__$1,inst_13382,done);var state_13510__$1 = (function (){var statearr_13586 = state_13510;(statearr_13586[(23)] = inst_13478__$1);
return statearr_13586;
})();if(cljs.core.truth_(inst_13479))
{var statearr_13587_13649 = state_13510__$1;(statearr_13587_13649[(1)] = (39));
} else
{var statearr_13588_13650 = state_13510__$1;(statearr_13588_13650[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13511 === (8)))
{var inst_13394 = (state_13510[(13)]);var inst_13393 = (state_13510[(14)]);var inst_13396 = (inst_13394 < inst_13393);var inst_13397 = inst_13396;var state_13510__$1 = state_13510;if(cljs.core.truth_(inst_13397))
{var statearr_13589_13651 = state_13510__$1;(statearr_13589_13651[(1)] = (10));
} else
{var statearr_13590_13652 = state_13510__$1;(statearr_13590_13652[(1)] = (11));
}
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
}
});})(c__6478__auto___13598,cs,m,dchan,dctr,done))
;return ((function (switch__6463__auto__,c__6478__auto___13598,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_13594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13594[(0)] = state_machine__6464__auto__);
(statearr_13594[(1)] = (1));
return statearr_13594;
});
var state_machine__6464__auto____1 = (function (state_13510){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_13510);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e13595){if((e13595 instanceof Object))
{var ex__6467__auto__ = e13595;var statearr_13596_13653 = state_13510;(statearr_13596_13653[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13510);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13595;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13654 = state_13510;
state_13510 = G__13654;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_13510){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_13510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___13598,cs,m,dchan,dctr,done))
})();var state__6480__auto__ = (function (){var statearr_13597 = f__6479__auto__.call(null);(statearr_13597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___13598);
return statearr_13597;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___13598,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj13656 = {};return obj13656;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__13657){var map__13662 = p__13657;var map__13662__$1 = ((cljs.core.seq_QMARK_.call(null,map__13662))?cljs.core.apply.call(null,cljs.core.hash_map,map__13662):map__13662);var opts = map__13662__$1;var statearr_13663_13666 = state;(statearr_13663_13666[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4222__auto__ = cljs.core.async.do_alts.call(null,((function (map__13662,map__13662__$1,opts){
return (function (val){var statearr_13664_13667 = state;(statearr_13664_13667[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13662,map__13662__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4222__auto__))
{var cb = temp__4222__auto__;var statearr_13665_13668 = state;(statearr_13665_13668[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__13657 = null;if (arguments.length > 3) {
  p__13657 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__13657);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__13669){
var state = cljs.core.first(arglist__13669);
arglist__13669 = cljs.core.next(arglist__13669);
var cont_block = cljs.core.first(arglist__13669);
arglist__13669 = cljs.core.next(arglist__13669);
var ports = cljs.core.first(arglist__13669);
var p__13657 = cljs.core.rest(arglist__13669);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__13657);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t13789 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13789 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13790){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13790 = meta13790;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13789.cljs$lang$type = true;
cljs.core.async.t13789.cljs$lang$ctorStr = "cljs.core.async/t13789";
cljs.core.async.t13789.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t13789");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13789.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13789.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13789.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13789.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13789.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13789.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13789.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13789.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13789.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13791){var self__ = this;
var _13791__$1 = this;return self__.meta13790;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13791,meta13790__$1){var self__ = this;
var _13791__$1 = this;return (new cljs.core.async.t13789(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13790__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13789 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13789(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13790){return (new cljs.core.async.t13789(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13790));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13789(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6478__auto___13908 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___13908,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___13908,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13861){var state_val_13862 = (state_13861[(1)]);if((state_val_13862 === (7)))
{var inst_13805 = (state_13861[(7)]);var inst_13810 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13805);var state_13861__$1 = state_13861;var statearr_13863_13909 = state_13861__$1;(statearr_13863_13909[(2)] = inst_13810);
(statearr_13863_13909[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13862 === (20)))
{var inst_13820 = (state_13861[(8)]);var state_13861__$1 = state_13861;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13861__$1,(23),out,inst_13820);
} else
{if((state_val_13862 === (1)))
{var inst_13795 = (state_13861[(9)]);var inst_13795__$1 = calc_state.call(null);var inst_13796 = cljs.core.seq_QMARK_.call(null,inst_13795__$1);var state_13861__$1 = (function (){var statearr_13864 = state_13861;(statearr_13864[(9)] = inst_13795__$1);
return statearr_13864;
})();if(inst_13796)
{var statearr_13865_13910 = state_13861__$1;(statearr_13865_13910[(1)] = (2));
} else
{var statearr_13866_13911 = state_13861__$1;(statearr_13866_13911[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13862 === (24)))
{var inst_13813 = (state_13861[(10)]);var inst_13805 = inst_13813;var state_13861__$1 = (function (){var statearr_13867 = state_13861;(statearr_13867[(7)] = inst_13805);
return statearr_13867;
})();var statearr_13868_13912 = state_13861__$1;(statearr_13868_13912[(2)] = null);
(statearr_13868_13912[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13862 === (4)))
{var inst_13795 = (state_13861[(9)]);var inst_13801 = (state_13861[(2)]);var inst_13802 = cljs.core.get.call(null,inst_13801,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13803 = cljs.core.get.call(null,inst_13801,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13804 = cljs.core.get.call(null,inst_13801,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_13805 = inst_13795;var state_13861__$1 = (function (){var statearr_13869 = state_13861;(statearr_13869[(7)] = inst_13805);
(statearr_13869[(11)] = inst_13802);
(statearr_13869[(12)] = inst_13803);
(statearr_13869[(13)] = inst_13804);
return statearr_13869;
})();var statearr_13870_13913 = state_13861__$1;(statearr_13870_13913[(2)] = null);
(statearr_13870_13913[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13862 === (15)))
{var state_13861__$1 = state_13861;var statearr_13871_13914 = state_13861__$1;(statearr_13871_13914[(2)] = null);
(statearr_13871_13914[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13862 === (21)))
{var inst_13813 = (state_13861[(10)]);var inst_13805 = inst_13813;var state_13861__$1 = (function (){var statearr_13872 = state_13861;(statearr_13872[(7)] = inst_13805);
return statearr_13872;
})();var statearr_13873_13915 = state_13861__$1;(statearr_13873_13915[(2)] = null);
(statearr_13873_13915[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13862 === (13)))
{var inst_13857 = (state_13861[(2)]);var state_13861__$1 = state_13861;var statearr_13874_13916 = state_13861__$1;(statearr_13874_13916[(2)] = inst_13857);
(statearr_13874_13916[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13862 === (22)))
{var inst_13855 = (state_13861[(2)]);var state_13861__$1 = state_13861;var statearr_13875_13917 = state_13861__$1;(statearr_13875_13917[(2)] = inst_13855);
(statearr_13875_13917[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13862 === (6)))
{var inst_13859 = (state_13861[(2)]);var state_13861__$1 = state_13861;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13861__$1,inst_13859);
} else
{if((state_val_13862 === (25)))
{var state_13861__$1 = state_13861;var statearr_13876_13918 = state_13861__$1;(statearr_13876_13918[(2)] = null);
(statearr_13876_13918[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13862 === (17)))
{var inst_13835 = (state_13861[(14)]);var state_13861__$1 = state_13861;var statearr_13877_13919 = state_13861__$1;(statearr_13877_13919[(2)] = inst_13835);
(statearr_13877_13919[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13862 === (3)))
{var inst_13795 = (state_13861[(9)]);var state_13861__$1 = state_13861;var statearr_13878_13920 = state_13861__$1;(statearr_13878_13920[(2)] = inst_13795);
(statearr_13878_13920[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13862 === (12)))
{var inst_13821 = (state_13861[(15)]);var inst_13835 = (state_13861[(14)]);var inst_13816 = (state_13861[(16)]);var inst_13835__$1 = inst_13816.call(null,inst_13821);var state_13861__$1 = (function (){var statearr_13879 = state_13861;(statearr_13879[(14)] = inst_13835__$1);
return statearr_13879;
})();if(cljs.core.truth_(inst_13835__$1))
{var statearr_13880_13921 = state_13861__$1;(statearr_13880_13921[(1)] = (17));
} else
{var statearr_13881_13922 = state_13861__$1;(statearr_13881_13922[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13862 === (2)))
{var inst_13795 = (state_13861[(9)]);var inst_13798 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13795);var state_13861__$1 = state_13861;var statearr_13882_13923 = state_13861__$1;(statearr_13882_13923[(2)] = inst_13798);
(statearr_13882_13923[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13862 === (23)))
{var inst_13846 = (state_13861[(2)]);var state_13861__$1 = state_13861;if(cljs.core.truth_(inst_13846))
{var statearr_13883_13924 = state_13861__$1;(statearr_13883_13924[(1)] = (24));
} else
{var statearr_13884_13925 = state_13861__$1;(statearr_13884_13925[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13862 === (19)))
{var inst_13843 = (state_13861[(2)]);var state_13861__$1 = state_13861;if(cljs.core.truth_(inst_13843))
{var statearr_13885_13926 = state_13861__$1;(statearr_13885_13926[(1)] = (20));
} else
{var statearr_13886_13927 = state_13861__$1;(statearr_13886_13927[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13862 === (11)))
{var inst_13820 = (state_13861[(8)]);var inst_13826 = (inst_13820 == null);var state_13861__$1 = state_13861;if(cljs.core.truth_(inst_13826))
{var statearr_13887_13928 = state_13861__$1;(statearr_13887_13928[(1)] = (14));
} else
{var statearr_13888_13929 = state_13861__$1;(statearr_13888_13929[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13862 === (9)))
{var inst_13813 = (state_13861[(10)]);var inst_13813__$1 = (state_13861[(2)]);var inst_13814 = cljs.core.get.call(null,inst_13813__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13815 = cljs.core.get.call(null,inst_13813__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13816 = cljs.core.get.call(null,inst_13813__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_13861__$1 = (function (){var statearr_13889 = state_13861;(statearr_13889[(17)] = inst_13815);
(statearr_13889[(10)] = inst_13813__$1);
(statearr_13889[(16)] = inst_13816);
return statearr_13889;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_13861__$1,(10),inst_13814);
} else
{if((state_val_13862 === (5)))
{var inst_13805 = (state_13861[(7)]);var inst_13808 = cljs.core.seq_QMARK_.call(null,inst_13805);var state_13861__$1 = state_13861;if(inst_13808)
{var statearr_13890_13930 = state_13861__$1;(statearr_13890_13930[(1)] = (7));
} else
{var statearr_13891_13931 = state_13861__$1;(statearr_13891_13931[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13862 === (14)))
{var inst_13821 = (state_13861[(15)]);var inst_13828 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13821);var state_13861__$1 = state_13861;var statearr_13892_13932 = state_13861__$1;(statearr_13892_13932[(2)] = inst_13828);
(statearr_13892_13932[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13862 === (26)))
{var inst_13851 = (state_13861[(2)]);var state_13861__$1 = state_13861;var statearr_13893_13933 = state_13861__$1;(statearr_13893_13933[(2)] = inst_13851);
(statearr_13893_13933[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13862 === (16)))
{var inst_13831 = (state_13861[(2)]);var inst_13832 = calc_state.call(null);var inst_13805 = inst_13832;var state_13861__$1 = (function (){var statearr_13894 = state_13861;(statearr_13894[(7)] = inst_13805);
(statearr_13894[(18)] = inst_13831);
return statearr_13894;
})();var statearr_13895_13934 = state_13861__$1;(statearr_13895_13934[(2)] = null);
(statearr_13895_13934[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13862 === (10)))
{var inst_13821 = (state_13861[(15)]);var inst_13820 = (state_13861[(8)]);var inst_13819 = (state_13861[(2)]);var inst_13820__$1 = cljs.core.nth.call(null,inst_13819,(0),null);var inst_13821__$1 = cljs.core.nth.call(null,inst_13819,(1),null);var inst_13822 = (inst_13820__$1 == null);var inst_13823 = cljs.core._EQ_.call(null,inst_13821__$1,change);var inst_13824 = (inst_13822) || (inst_13823);var state_13861__$1 = (function (){var statearr_13896 = state_13861;(statearr_13896[(15)] = inst_13821__$1);
(statearr_13896[(8)] = inst_13820__$1);
return statearr_13896;
})();if(cljs.core.truth_(inst_13824))
{var statearr_13897_13935 = state_13861__$1;(statearr_13897_13935[(1)] = (11));
} else
{var statearr_13898_13936 = state_13861__$1;(statearr_13898_13936[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13862 === (18)))
{var inst_13821 = (state_13861[(15)]);var inst_13815 = (state_13861[(17)]);var inst_13816 = (state_13861[(16)]);var inst_13838 = cljs.core.empty_QMARK_.call(null,inst_13816);var inst_13839 = inst_13815.call(null,inst_13821);var inst_13840 = cljs.core.not.call(null,inst_13839);var inst_13841 = (inst_13838) && (inst_13840);var state_13861__$1 = state_13861;var statearr_13899_13937 = state_13861__$1;(statearr_13899_13937[(2)] = inst_13841);
(statearr_13899_13937[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13862 === (8)))
{var inst_13805 = (state_13861[(7)]);var state_13861__$1 = state_13861;var statearr_13900_13938 = state_13861__$1;(statearr_13900_13938[(2)] = inst_13805);
(statearr_13900_13938[(1)] = (9));
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
}
}
}
}
});})(c__6478__auto___13908,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6463__auto__,c__6478__auto___13908,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_13904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13904[(0)] = state_machine__6464__auto__);
(statearr_13904[(1)] = (1));
return statearr_13904;
});
var state_machine__6464__auto____1 = (function (state_13861){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_13861);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e13905){if((e13905 instanceof Object))
{var ex__6467__auto__ = e13905;var statearr_13906_13939 = state_13861;(statearr_13906_13939[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13861);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13905;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13940 = state_13861;
state_13861 = G__13940;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_13861){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_13861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___13908,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6480__auto__ = (function (){var statearr_13907 = f__6479__auto__.call(null);(statearr_13907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___13908);
return statearr_13907;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___13908,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj13942 = {};return obj13942;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3639__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3639__auto__,mults){
return (function (p1__13943_SHARP_){if(cljs.core.truth_(p1__13943_SHARP_.call(null,topic)))
{return p1__13943_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13943_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14066 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14066 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14067){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14067 = meta14067;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14066.cljs$lang$type = true;
cljs.core.async.t14066.cljs$lang$ctorStr = "cljs.core.async/t14066";
cljs.core.async.t14066.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t14066");
});})(mults,ensure_mult))
;
cljs.core.async.t14066.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14066.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14066.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4222__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4222__auto__))
{var m = temp__4222__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14066.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14066.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14066.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14066.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14066.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14068){var self__ = this;
var _14068__$1 = this;return self__.meta14067;
});})(mults,ensure_mult))
;
cljs.core.async.t14066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14068,meta14067__$1){var self__ = this;
var _14068__$1 = this;return (new cljs.core.async.t14066(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14067__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14066 = ((function (mults,ensure_mult){
return (function __GT_t14066(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14067){return (new cljs.core.async.t14066(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14067));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14066(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6478__auto___14188 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___14188,mults,ensure_mult,p){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___14188,mults,ensure_mult,p){
return (function (state_14140){var state_val_14141 = (state_14140[(1)]);if((state_val_14141 === (7)))
{var inst_14136 = (state_14140[(2)]);var state_14140__$1 = state_14140;var statearr_14142_14189 = state_14140__$1;(statearr_14142_14189[(2)] = inst_14136);
(statearr_14142_14189[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14141 === (20)))
{var state_14140__$1 = state_14140;var statearr_14143_14190 = state_14140__$1;(statearr_14143_14190[(2)] = null);
(statearr_14143_14190[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14141 === (1)))
{var state_14140__$1 = state_14140;var statearr_14144_14191 = state_14140__$1;(statearr_14144_14191[(2)] = null);
(statearr_14144_14191[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14141 === (24)))
{var inst_14119 = (state_14140[(7)]);var inst_14128 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14119);var state_14140__$1 = state_14140;var statearr_14145_14192 = state_14140__$1;(statearr_14145_14192[(2)] = inst_14128);
(statearr_14145_14192[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14141 === (4)))
{var inst_14071 = (state_14140[(8)]);var inst_14071__$1 = (state_14140[(2)]);var inst_14072 = (inst_14071__$1 == null);var state_14140__$1 = (function (){var statearr_14146 = state_14140;(statearr_14146[(8)] = inst_14071__$1);
return statearr_14146;
})();if(cljs.core.truth_(inst_14072))
{var statearr_14147_14193 = state_14140__$1;(statearr_14147_14193[(1)] = (5));
} else
{var statearr_14148_14194 = state_14140__$1;(statearr_14148_14194[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14141 === (15)))
{var inst_14113 = (state_14140[(2)]);var state_14140__$1 = state_14140;var statearr_14149_14195 = state_14140__$1;(statearr_14149_14195[(2)] = inst_14113);
(statearr_14149_14195[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14141 === (21)))
{var inst_14133 = (state_14140[(2)]);var state_14140__$1 = (function (){var statearr_14150 = state_14140;(statearr_14150[(9)] = inst_14133);
return statearr_14150;
})();var statearr_14151_14196 = state_14140__$1;(statearr_14151_14196[(2)] = null);
(statearr_14151_14196[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14141 === (13)))
{var inst_14095 = (state_14140[(10)]);var inst_14097 = cljs.core.chunked_seq_QMARK_.call(null,inst_14095);var state_14140__$1 = state_14140;if(inst_14097)
{var statearr_14152_14197 = state_14140__$1;(statearr_14152_14197[(1)] = (16));
} else
{var statearr_14153_14198 = state_14140__$1;(statearr_14153_14198[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14141 === (22)))
{var inst_14125 = (state_14140[(2)]);var state_14140__$1 = state_14140;if(cljs.core.truth_(inst_14125))
{var statearr_14154_14199 = state_14140__$1;(statearr_14154_14199[(1)] = (23));
} else
{var statearr_14155_14200 = state_14140__$1;(statearr_14155_14200[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14141 === (6)))
{var inst_14121 = (state_14140[(11)]);var inst_14119 = (state_14140[(7)]);var inst_14071 = (state_14140[(8)]);var inst_14119__$1 = topic_fn.call(null,inst_14071);var inst_14120 = cljs.core.deref.call(null,mults);var inst_14121__$1 = cljs.core.get.call(null,inst_14120,inst_14119__$1);var state_14140__$1 = (function (){var statearr_14156 = state_14140;(statearr_14156[(11)] = inst_14121__$1);
(statearr_14156[(7)] = inst_14119__$1);
return statearr_14156;
})();if(cljs.core.truth_(inst_14121__$1))
{var statearr_14157_14201 = state_14140__$1;(statearr_14157_14201[(1)] = (19));
} else
{var statearr_14158_14202 = state_14140__$1;(statearr_14158_14202[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14141 === (25)))
{var inst_14130 = (state_14140[(2)]);var state_14140__$1 = state_14140;var statearr_14159_14203 = state_14140__$1;(statearr_14159_14203[(2)] = inst_14130);
(statearr_14159_14203[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14141 === (17)))
{var inst_14095 = (state_14140[(10)]);var inst_14104 = cljs.core.first.call(null,inst_14095);var inst_14105 = cljs.core.async.muxch_STAR_.call(null,inst_14104);var inst_14106 = cljs.core.async.close_BANG_.call(null,inst_14105);var inst_14107 = cljs.core.next.call(null,inst_14095);var inst_14081 = inst_14107;var inst_14082 = null;var inst_14083 = (0);var inst_14084 = (0);var state_14140__$1 = (function (){var statearr_14160 = state_14140;(statearr_14160[(12)] = inst_14082);
(statearr_14160[(13)] = inst_14081);
(statearr_14160[(14)] = inst_14083);
(statearr_14160[(15)] = inst_14084);
(statearr_14160[(16)] = inst_14106);
return statearr_14160;
})();var statearr_14161_14204 = state_14140__$1;(statearr_14161_14204[(2)] = null);
(statearr_14161_14204[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14141 === (3)))
{var inst_14138 = (state_14140[(2)]);var state_14140__$1 = state_14140;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14140__$1,inst_14138);
} else
{if((state_val_14141 === (12)))
{var inst_14115 = (state_14140[(2)]);var state_14140__$1 = state_14140;var statearr_14162_14205 = state_14140__$1;(statearr_14162_14205[(2)] = inst_14115);
(statearr_14162_14205[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14141 === (2)))
{var state_14140__$1 = state_14140;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14140__$1,(4),ch);
} else
{if((state_val_14141 === (23)))
{var state_14140__$1 = state_14140;var statearr_14163_14206 = state_14140__$1;(statearr_14163_14206[(2)] = null);
(statearr_14163_14206[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14141 === (19)))
{var inst_14121 = (state_14140[(11)]);var inst_14071 = (state_14140[(8)]);var inst_14123 = cljs.core.async.muxch_STAR_.call(null,inst_14121);var state_14140__$1 = state_14140;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14140__$1,(22),inst_14123,inst_14071);
} else
{if((state_val_14141 === (11)))
{var inst_14081 = (state_14140[(13)]);var inst_14095 = (state_14140[(10)]);var inst_14095__$1 = cljs.core.seq.call(null,inst_14081);var state_14140__$1 = (function (){var statearr_14164 = state_14140;(statearr_14164[(10)] = inst_14095__$1);
return statearr_14164;
})();if(inst_14095__$1)
{var statearr_14165_14207 = state_14140__$1;(statearr_14165_14207[(1)] = (13));
} else
{var statearr_14166_14208 = state_14140__$1;(statearr_14166_14208[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14141 === (9)))
{var inst_14117 = (state_14140[(2)]);var state_14140__$1 = state_14140;var statearr_14167_14209 = state_14140__$1;(statearr_14167_14209[(2)] = inst_14117);
(statearr_14167_14209[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14141 === (5)))
{var inst_14078 = cljs.core.deref.call(null,mults);var inst_14079 = cljs.core.vals.call(null,inst_14078);var inst_14080 = cljs.core.seq.call(null,inst_14079);var inst_14081 = inst_14080;var inst_14082 = null;var inst_14083 = (0);var inst_14084 = (0);var state_14140__$1 = (function (){var statearr_14168 = state_14140;(statearr_14168[(12)] = inst_14082);
(statearr_14168[(13)] = inst_14081);
(statearr_14168[(14)] = inst_14083);
(statearr_14168[(15)] = inst_14084);
return statearr_14168;
})();var statearr_14169_14210 = state_14140__$1;(statearr_14169_14210[(2)] = null);
(statearr_14169_14210[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14141 === (14)))
{var state_14140__$1 = state_14140;var statearr_14173_14211 = state_14140__$1;(statearr_14173_14211[(2)] = null);
(statearr_14173_14211[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14141 === (16)))
{var inst_14095 = (state_14140[(10)]);var inst_14099 = cljs.core.chunk_first.call(null,inst_14095);var inst_14100 = cljs.core.chunk_rest.call(null,inst_14095);var inst_14101 = cljs.core.count.call(null,inst_14099);var inst_14081 = inst_14100;var inst_14082 = inst_14099;var inst_14083 = inst_14101;var inst_14084 = (0);var state_14140__$1 = (function (){var statearr_14174 = state_14140;(statearr_14174[(12)] = inst_14082);
(statearr_14174[(13)] = inst_14081);
(statearr_14174[(14)] = inst_14083);
(statearr_14174[(15)] = inst_14084);
return statearr_14174;
})();var statearr_14175_14212 = state_14140__$1;(statearr_14175_14212[(2)] = null);
(statearr_14175_14212[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14141 === (10)))
{var inst_14082 = (state_14140[(12)]);var inst_14081 = (state_14140[(13)]);var inst_14083 = (state_14140[(14)]);var inst_14084 = (state_14140[(15)]);var inst_14089 = cljs.core._nth.call(null,inst_14082,inst_14084);var inst_14090 = cljs.core.async.muxch_STAR_.call(null,inst_14089);var inst_14091 = cljs.core.async.close_BANG_.call(null,inst_14090);var inst_14092 = (inst_14084 + (1));var tmp14170 = inst_14082;var tmp14171 = inst_14081;var tmp14172 = inst_14083;var inst_14081__$1 = tmp14171;var inst_14082__$1 = tmp14170;var inst_14083__$1 = tmp14172;var inst_14084__$1 = inst_14092;var state_14140__$1 = (function (){var statearr_14176 = state_14140;(statearr_14176[(12)] = inst_14082__$1);
(statearr_14176[(13)] = inst_14081__$1);
(statearr_14176[(14)] = inst_14083__$1);
(statearr_14176[(17)] = inst_14091);
(statearr_14176[(15)] = inst_14084__$1);
return statearr_14176;
})();var statearr_14177_14213 = state_14140__$1;(statearr_14177_14213[(2)] = null);
(statearr_14177_14213[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14141 === (18)))
{var inst_14110 = (state_14140[(2)]);var state_14140__$1 = state_14140;var statearr_14178_14214 = state_14140__$1;(statearr_14178_14214[(2)] = inst_14110);
(statearr_14178_14214[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14141 === (8)))
{var inst_14083 = (state_14140[(14)]);var inst_14084 = (state_14140[(15)]);var inst_14086 = (inst_14084 < inst_14083);var inst_14087 = inst_14086;var state_14140__$1 = state_14140;if(cljs.core.truth_(inst_14087))
{var statearr_14179_14215 = state_14140__$1;(statearr_14179_14215[(1)] = (10));
} else
{var statearr_14180_14216 = state_14140__$1;(statearr_14180_14216[(1)] = (11));
}
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
}
}
}
});})(c__6478__auto___14188,mults,ensure_mult,p))
;return ((function (switch__6463__auto__,c__6478__auto___14188,mults,ensure_mult,p){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_14184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14184[(0)] = state_machine__6464__auto__);
(statearr_14184[(1)] = (1));
return statearr_14184;
});
var state_machine__6464__auto____1 = (function (state_14140){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_14140);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e14185){if((e14185 instanceof Object))
{var ex__6467__auto__ = e14185;var statearr_14186_14217 = state_14140;(statearr_14186_14217[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14140);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14185;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14218 = state_14140;
state_14140 = G__14218;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_14140){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_14140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___14188,mults,ensure_mult,p))
})();var state__6480__auto__ = (function (){var statearr_14187 = f__6479__auto__.call(null);(statearr_14187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___14188);
return statearr_14187;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___14188,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6478__auto___14355 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___14355,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___14355,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14325){var state_val_14326 = (state_14325[(1)]);if((state_val_14326 === (7)))
{var state_14325__$1 = state_14325;var statearr_14327_14356 = state_14325__$1;(statearr_14327_14356[(2)] = null);
(statearr_14327_14356[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14326 === (1)))
{var state_14325__$1 = state_14325;var statearr_14328_14357 = state_14325__$1;(statearr_14328_14357[(2)] = null);
(statearr_14328_14357[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14326 === (4)))
{var inst_14289 = (state_14325[(7)]);var inst_14291 = (inst_14289 < cnt);var state_14325__$1 = state_14325;if(cljs.core.truth_(inst_14291))
{var statearr_14329_14358 = state_14325__$1;(statearr_14329_14358[(1)] = (6));
} else
{var statearr_14330_14359 = state_14325__$1;(statearr_14330_14359[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14326 === (15)))
{var inst_14321 = (state_14325[(2)]);var state_14325__$1 = state_14325;var statearr_14331_14360 = state_14325__$1;(statearr_14331_14360[(2)] = inst_14321);
(statearr_14331_14360[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14326 === (13)))
{var inst_14314 = cljs.core.async.close_BANG_.call(null,out);var state_14325__$1 = state_14325;var statearr_14332_14361 = state_14325__$1;(statearr_14332_14361[(2)] = inst_14314);
(statearr_14332_14361[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14326 === (6)))
{var state_14325__$1 = state_14325;var statearr_14333_14362 = state_14325__$1;(statearr_14333_14362[(2)] = null);
(statearr_14333_14362[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14326 === (3)))
{var inst_14323 = (state_14325[(2)]);var state_14325__$1 = state_14325;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14325__$1,inst_14323);
} else
{if((state_val_14326 === (12)))
{var inst_14311 = (state_14325[(8)]);var inst_14311__$1 = (state_14325[(2)]);var inst_14312 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14311__$1);var state_14325__$1 = (function (){var statearr_14334 = state_14325;(statearr_14334[(8)] = inst_14311__$1);
return statearr_14334;
})();if(cljs.core.truth_(inst_14312))
{var statearr_14335_14363 = state_14325__$1;(statearr_14335_14363[(1)] = (13));
} else
{var statearr_14336_14364 = state_14325__$1;(statearr_14336_14364[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14326 === (2)))
{var inst_14288 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14289 = (0);var state_14325__$1 = (function (){var statearr_14337 = state_14325;(statearr_14337[(7)] = inst_14289);
(statearr_14337[(9)] = inst_14288);
return statearr_14337;
})();var statearr_14338_14365 = state_14325__$1;(statearr_14338_14365[(2)] = null);
(statearr_14338_14365[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14326 === (11)))
{var inst_14289 = (state_14325[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14325,(10),Object,null,(9));var inst_14298 = chs__$1.call(null,inst_14289);var inst_14299 = done.call(null,inst_14289);var inst_14300 = cljs.core.async.take_BANG_.call(null,inst_14298,inst_14299);var state_14325__$1 = state_14325;var statearr_14339_14366 = state_14325__$1;(statearr_14339_14366[(2)] = inst_14300);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14325__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14326 === (9)))
{var inst_14289 = (state_14325[(7)]);var inst_14302 = (state_14325[(2)]);var inst_14303 = (inst_14289 + (1));var inst_14289__$1 = inst_14303;var state_14325__$1 = (function (){var statearr_14340 = state_14325;(statearr_14340[(7)] = inst_14289__$1);
(statearr_14340[(10)] = inst_14302);
return statearr_14340;
})();var statearr_14341_14367 = state_14325__$1;(statearr_14341_14367[(2)] = null);
(statearr_14341_14367[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14326 === (5)))
{var inst_14309 = (state_14325[(2)]);var state_14325__$1 = (function (){var statearr_14342 = state_14325;(statearr_14342[(11)] = inst_14309);
return statearr_14342;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14325__$1,(12),dchan);
} else
{if((state_val_14326 === (14)))
{var inst_14311 = (state_14325[(8)]);var inst_14316 = cljs.core.apply.call(null,f,inst_14311);var state_14325__$1 = state_14325;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14325__$1,(16),out,inst_14316);
} else
{if((state_val_14326 === (16)))
{var inst_14318 = (state_14325[(2)]);var state_14325__$1 = (function (){var statearr_14343 = state_14325;(statearr_14343[(12)] = inst_14318);
return statearr_14343;
})();var statearr_14344_14368 = state_14325__$1;(statearr_14344_14368[(2)] = null);
(statearr_14344_14368[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14326 === (10)))
{var inst_14293 = (state_14325[(2)]);var inst_14294 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14325__$1 = (function (){var statearr_14345 = state_14325;(statearr_14345[(13)] = inst_14293);
return statearr_14345;
})();var statearr_14346_14369 = state_14325__$1;(statearr_14346_14369[(2)] = inst_14294);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14325__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14326 === (8)))
{var inst_14307 = (state_14325[(2)]);var state_14325__$1 = state_14325;var statearr_14347_14370 = state_14325__$1;(statearr_14347_14370[(2)] = inst_14307);
(statearr_14347_14370[(1)] = (5));
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
}
}
}
}
}
});})(c__6478__auto___14355,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6463__auto__,c__6478__auto___14355,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_14351 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14351[(0)] = state_machine__6464__auto__);
(statearr_14351[(1)] = (1));
return statearr_14351;
});
var state_machine__6464__auto____1 = (function (state_14325){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_14325);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e14352){if((e14352 instanceof Object))
{var ex__6467__auto__ = e14352;var statearr_14353_14371 = state_14325;(statearr_14353_14371[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14325);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14352;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14372 = state_14325;
state_14325 = G__14372;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_14325){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_14325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___14355,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6480__auto__ = (function (){var statearr_14354 = f__6479__auto__.call(null);(statearr_14354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___14355);
return statearr_14354;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___14355,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6478__auto___14480 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___14480,out){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___14480,out){
return (function (state_14456){var state_val_14457 = (state_14456[(1)]);if((state_val_14457 === (7)))
{var inst_14436 = (state_14456[(7)]);var inst_14435 = (state_14456[(8)]);var inst_14435__$1 = (state_14456[(2)]);var inst_14436__$1 = cljs.core.nth.call(null,inst_14435__$1,(0),null);var inst_14437 = cljs.core.nth.call(null,inst_14435__$1,(1),null);var inst_14438 = (inst_14436__$1 == null);var state_14456__$1 = (function (){var statearr_14458 = state_14456;(statearr_14458[(7)] = inst_14436__$1);
(statearr_14458[(8)] = inst_14435__$1);
(statearr_14458[(9)] = inst_14437);
return statearr_14458;
})();if(cljs.core.truth_(inst_14438))
{var statearr_14459_14481 = state_14456__$1;(statearr_14459_14481[(1)] = (8));
} else
{var statearr_14460_14482 = state_14456__$1;(statearr_14460_14482[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14457 === (1)))
{var inst_14427 = cljs.core.vec.call(null,chs);var inst_14428 = inst_14427;var state_14456__$1 = (function (){var statearr_14461 = state_14456;(statearr_14461[(10)] = inst_14428);
return statearr_14461;
})();var statearr_14462_14483 = state_14456__$1;(statearr_14462_14483[(2)] = null);
(statearr_14462_14483[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14457 === (4)))
{var inst_14428 = (state_14456[(10)]);var state_14456__$1 = state_14456;return cljs.core.async.ioc_alts_BANG_.call(null,state_14456__$1,(7),inst_14428);
} else
{if((state_val_14457 === (6)))
{var inst_14452 = (state_14456[(2)]);var state_14456__$1 = state_14456;var statearr_14463_14484 = state_14456__$1;(statearr_14463_14484[(2)] = inst_14452);
(statearr_14463_14484[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14457 === (3)))
{var inst_14454 = (state_14456[(2)]);var state_14456__$1 = state_14456;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14456__$1,inst_14454);
} else
{if((state_val_14457 === (2)))
{var inst_14428 = (state_14456[(10)]);var inst_14430 = cljs.core.count.call(null,inst_14428);var inst_14431 = (inst_14430 > (0));var state_14456__$1 = state_14456;if(cljs.core.truth_(inst_14431))
{var statearr_14465_14485 = state_14456__$1;(statearr_14465_14485[(1)] = (4));
} else
{var statearr_14466_14486 = state_14456__$1;(statearr_14466_14486[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14457 === (11)))
{var inst_14428 = (state_14456[(10)]);var inst_14445 = (state_14456[(2)]);var tmp14464 = inst_14428;var inst_14428__$1 = tmp14464;var state_14456__$1 = (function (){var statearr_14467 = state_14456;(statearr_14467[(11)] = inst_14445);
(statearr_14467[(10)] = inst_14428__$1);
return statearr_14467;
})();var statearr_14468_14487 = state_14456__$1;(statearr_14468_14487[(2)] = null);
(statearr_14468_14487[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14457 === (9)))
{var inst_14436 = (state_14456[(7)]);var state_14456__$1 = state_14456;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14456__$1,(11),out,inst_14436);
} else
{if((state_val_14457 === (5)))
{var inst_14450 = cljs.core.async.close_BANG_.call(null,out);var state_14456__$1 = state_14456;var statearr_14469_14488 = state_14456__$1;(statearr_14469_14488[(2)] = inst_14450);
(statearr_14469_14488[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14457 === (10)))
{var inst_14448 = (state_14456[(2)]);var state_14456__$1 = state_14456;var statearr_14470_14489 = state_14456__$1;(statearr_14470_14489[(2)] = inst_14448);
(statearr_14470_14489[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14457 === (8)))
{var inst_14436 = (state_14456[(7)]);var inst_14435 = (state_14456[(8)]);var inst_14437 = (state_14456[(9)]);var inst_14428 = (state_14456[(10)]);var inst_14440 = (function (){var c = inst_14437;var v = inst_14436;var vec__14433 = inst_14435;var cs = inst_14428;return ((function (c,v,vec__14433,cs,inst_14436,inst_14435,inst_14437,inst_14428,state_val_14457,c__6478__auto___14480,out){
return (function (p1__14373_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14373_SHARP_);
});
;})(c,v,vec__14433,cs,inst_14436,inst_14435,inst_14437,inst_14428,state_val_14457,c__6478__auto___14480,out))
})();var inst_14441 = cljs.core.filterv.call(null,inst_14440,inst_14428);var inst_14428__$1 = inst_14441;var state_14456__$1 = (function (){var statearr_14471 = state_14456;(statearr_14471[(10)] = inst_14428__$1);
return statearr_14471;
})();var statearr_14472_14490 = state_14456__$1;(statearr_14472_14490[(2)] = null);
(statearr_14472_14490[(1)] = (2));
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
});})(c__6478__auto___14480,out))
;return ((function (switch__6463__auto__,c__6478__auto___14480,out){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_14476 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14476[(0)] = state_machine__6464__auto__);
(statearr_14476[(1)] = (1));
return statearr_14476;
});
var state_machine__6464__auto____1 = (function (state_14456){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_14456);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e14477){if((e14477 instanceof Object))
{var ex__6467__auto__ = e14477;var statearr_14478_14491 = state_14456;(statearr_14478_14491[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14456);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14477;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14492 = state_14456;
state_14456 = G__14492;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_14456){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_14456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___14480,out))
})();var state__6480__auto__ = (function (){var statearr_14479 = f__6479__auto__.call(null);(statearr_14479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___14480);
return statearr_14479;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___14480,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6478__auto___14585 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___14585,out){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___14585,out){
return (function (state_14562){var state_val_14563 = (state_14562[(1)]);if((state_val_14563 === (7)))
{var inst_14544 = (state_14562[(7)]);var inst_14544__$1 = (state_14562[(2)]);var inst_14545 = (inst_14544__$1 == null);var inst_14546 = cljs.core.not.call(null,inst_14545);var state_14562__$1 = (function (){var statearr_14564 = state_14562;(statearr_14564[(7)] = inst_14544__$1);
return statearr_14564;
})();if(inst_14546)
{var statearr_14565_14586 = state_14562__$1;(statearr_14565_14586[(1)] = (8));
} else
{var statearr_14566_14587 = state_14562__$1;(statearr_14566_14587[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14563 === (1)))
{var inst_14539 = (0);var state_14562__$1 = (function (){var statearr_14567 = state_14562;(statearr_14567[(8)] = inst_14539);
return statearr_14567;
})();var statearr_14568_14588 = state_14562__$1;(statearr_14568_14588[(2)] = null);
(statearr_14568_14588[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14563 === (4)))
{var state_14562__$1 = state_14562;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14562__$1,(7),ch);
} else
{if((state_val_14563 === (6)))
{var inst_14557 = (state_14562[(2)]);var state_14562__$1 = state_14562;var statearr_14569_14589 = state_14562__$1;(statearr_14569_14589[(2)] = inst_14557);
(statearr_14569_14589[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14563 === (3)))
{var inst_14559 = (state_14562[(2)]);var inst_14560 = cljs.core.async.close_BANG_.call(null,out);var state_14562__$1 = (function (){var statearr_14570 = state_14562;(statearr_14570[(9)] = inst_14559);
return statearr_14570;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14562__$1,inst_14560);
} else
{if((state_val_14563 === (2)))
{var inst_14539 = (state_14562[(8)]);var inst_14541 = (inst_14539 < n);var state_14562__$1 = state_14562;if(cljs.core.truth_(inst_14541))
{var statearr_14571_14590 = state_14562__$1;(statearr_14571_14590[(1)] = (4));
} else
{var statearr_14572_14591 = state_14562__$1;(statearr_14572_14591[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14563 === (11)))
{var inst_14539 = (state_14562[(8)]);var inst_14549 = (state_14562[(2)]);var inst_14550 = (inst_14539 + (1));var inst_14539__$1 = inst_14550;var state_14562__$1 = (function (){var statearr_14573 = state_14562;(statearr_14573[(10)] = inst_14549);
(statearr_14573[(8)] = inst_14539__$1);
return statearr_14573;
})();var statearr_14574_14592 = state_14562__$1;(statearr_14574_14592[(2)] = null);
(statearr_14574_14592[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14563 === (9)))
{var state_14562__$1 = state_14562;var statearr_14575_14593 = state_14562__$1;(statearr_14575_14593[(2)] = null);
(statearr_14575_14593[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14563 === (5)))
{var state_14562__$1 = state_14562;var statearr_14576_14594 = state_14562__$1;(statearr_14576_14594[(2)] = null);
(statearr_14576_14594[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14563 === (10)))
{var inst_14554 = (state_14562[(2)]);var state_14562__$1 = state_14562;var statearr_14577_14595 = state_14562__$1;(statearr_14577_14595[(2)] = inst_14554);
(statearr_14577_14595[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14563 === (8)))
{var inst_14544 = (state_14562[(7)]);var state_14562__$1 = state_14562;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14562__$1,(11),out,inst_14544);
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
});})(c__6478__auto___14585,out))
;return ((function (switch__6463__auto__,c__6478__auto___14585,out){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_14581 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14581[(0)] = state_machine__6464__auto__);
(statearr_14581[(1)] = (1));
return statearr_14581;
});
var state_machine__6464__auto____1 = (function (state_14562){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_14562);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e14582){if((e14582 instanceof Object))
{var ex__6467__auto__ = e14582;var statearr_14583_14596 = state_14562;(statearr_14583_14596[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14562);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14582;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14597 = state_14562;
state_14562 = G__14597;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_14562){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_14562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___14585,out))
})();var state__6480__auto__ = (function (){var statearr_14584 = f__6479__auto__.call(null);(statearr_14584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___14585);
return statearr_14584;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___14585,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14605 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14605 = (function (ch,f,map_LT_,meta14606){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14606 = meta14606;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14605.cljs$lang$type = true;
cljs.core.async.t14605.cljs$lang$ctorStr = "cljs.core.async/t14605";
cljs.core.async.t14605.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t14605");
});
cljs.core.async.t14605.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14605.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t14605.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14605.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14608 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14608 = (function (fn1,_,meta14606,ch,f,map_LT_,meta14609){
this.fn1 = fn1;
this._ = _;
this.meta14606 = meta14606;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14609 = meta14609;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14608.cljs$lang$type = true;
cljs.core.async.t14608.cljs$lang$ctorStr = "cljs.core.async/t14608";
cljs.core.async.t14608.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t14608");
});})(___$1))
;
cljs.core.async.t14608.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14608.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14608.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14598_SHARP_){return f1.call(null,(((p1__14598_SHARP_ == null))?null:self__.f.call(null,p1__14598_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14608.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14610){var self__ = this;
var _14610__$1 = this;return self__.meta14609;
});})(___$1))
;
cljs.core.async.t14608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14610,meta14609__$1){var self__ = this;
var _14610__$1 = this;return (new cljs.core.async.t14608(self__.fn1,self__._,self__.meta14606,self__.ch,self__.f,self__.map_LT_,meta14609__$1));
});})(___$1))
;
cljs.core.async.__GT_t14608 = ((function (___$1){
return (function __GT_t14608(fn1__$1,___$2,meta14606__$1,ch__$2,f__$2,map_LT___$2,meta14609){return (new cljs.core.async.t14608(fn1__$1,___$2,meta14606__$1,ch__$2,f__$2,map_LT___$2,meta14609));
});})(___$1))
;
}
return (new cljs.core.async.t14608(fn1,___$1,self__.meta14606,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3627__auto__ = ret;if(cljs.core.truth_(and__3627__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3627__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14605.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14605.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14605.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14607){var self__ = this;
var _14607__$1 = this;return self__.meta14606;
});
cljs.core.async.t14605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14607,meta14606__$1){var self__ = this;
var _14607__$1 = this;return (new cljs.core.async.t14605(self__.ch,self__.f,self__.map_LT_,meta14606__$1));
});
cljs.core.async.__GT_t14605 = (function __GT_t14605(ch__$1,f__$1,map_LT___$1,meta14606){return (new cljs.core.async.t14605(ch__$1,f__$1,map_LT___$1,meta14606));
});
}
return (new cljs.core.async.t14605(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14614 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14614 = (function (ch,f,map_GT_,meta14615){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14615 = meta14615;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14614.cljs$lang$type = true;
cljs.core.async.t14614.cljs$lang$ctorStr = "cljs.core.async/t14614";
cljs.core.async.t14614.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t14614");
});
cljs.core.async.t14614.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14614.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t14614.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14614.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14614.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14614.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14616){var self__ = this;
var _14616__$1 = this;return self__.meta14615;
});
cljs.core.async.t14614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14616,meta14615__$1){var self__ = this;
var _14616__$1 = this;return (new cljs.core.async.t14614(self__.ch,self__.f,self__.map_GT_,meta14615__$1));
});
cljs.core.async.__GT_t14614 = (function __GT_t14614(ch__$1,f__$1,map_GT___$1,meta14615){return (new cljs.core.async.t14614(ch__$1,f__$1,map_GT___$1,meta14615));
});
}
return (new cljs.core.async.t14614(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14620 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14620 = (function (ch,p,filter_GT_,meta14621){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14621 = meta14621;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14620.cljs$lang$type = true;
cljs.core.async.t14620.cljs$lang$ctorStr = "cljs.core.async/t14620";
cljs.core.async.t14620.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t14620");
});
cljs.core.async.t14620.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14620.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t14620.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14620.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14620.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14620.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14620.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14622){var self__ = this;
var _14622__$1 = this;return self__.meta14621;
});
cljs.core.async.t14620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14622,meta14621__$1){var self__ = this;
var _14622__$1 = this;return (new cljs.core.async.t14620(self__.ch,self__.p,self__.filter_GT_,meta14621__$1));
});
cljs.core.async.__GT_t14620 = (function __GT_t14620(ch__$1,p__$1,filter_GT___$1,meta14621){return (new cljs.core.async.t14620(ch__$1,p__$1,filter_GT___$1,meta14621));
});
}
return (new cljs.core.async.t14620(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6478__auto___14705 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___14705,out){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___14705,out){
return (function (state_14684){var state_val_14685 = (state_14684[(1)]);if((state_val_14685 === (7)))
{var inst_14680 = (state_14684[(2)]);var state_14684__$1 = state_14684;var statearr_14686_14706 = state_14684__$1;(statearr_14686_14706[(2)] = inst_14680);
(statearr_14686_14706[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14685 === (1)))
{var state_14684__$1 = state_14684;var statearr_14687_14707 = state_14684__$1;(statearr_14687_14707[(2)] = null);
(statearr_14687_14707[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14685 === (4)))
{var inst_14666 = (state_14684[(7)]);var inst_14666__$1 = (state_14684[(2)]);var inst_14667 = (inst_14666__$1 == null);var state_14684__$1 = (function (){var statearr_14688 = state_14684;(statearr_14688[(7)] = inst_14666__$1);
return statearr_14688;
})();if(cljs.core.truth_(inst_14667))
{var statearr_14689_14708 = state_14684__$1;(statearr_14689_14708[(1)] = (5));
} else
{var statearr_14690_14709 = state_14684__$1;(statearr_14690_14709[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14685 === (6)))
{var inst_14666 = (state_14684[(7)]);var inst_14671 = p.call(null,inst_14666);var state_14684__$1 = state_14684;if(cljs.core.truth_(inst_14671))
{var statearr_14691_14710 = state_14684__$1;(statearr_14691_14710[(1)] = (8));
} else
{var statearr_14692_14711 = state_14684__$1;(statearr_14692_14711[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14685 === (3)))
{var inst_14682 = (state_14684[(2)]);var state_14684__$1 = state_14684;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14684__$1,inst_14682);
} else
{if((state_val_14685 === (2)))
{var state_14684__$1 = state_14684;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14684__$1,(4),ch);
} else
{if((state_val_14685 === (11)))
{var inst_14674 = (state_14684[(2)]);var state_14684__$1 = state_14684;var statearr_14693_14712 = state_14684__$1;(statearr_14693_14712[(2)] = inst_14674);
(statearr_14693_14712[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14685 === (9)))
{var state_14684__$1 = state_14684;var statearr_14694_14713 = state_14684__$1;(statearr_14694_14713[(2)] = null);
(statearr_14694_14713[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14685 === (5)))
{var inst_14669 = cljs.core.async.close_BANG_.call(null,out);var state_14684__$1 = state_14684;var statearr_14695_14714 = state_14684__$1;(statearr_14695_14714[(2)] = inst_14669);
(statearr_14695_14714[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14685 === (10)))
{var inst_14677 = (state_14684[(2)]);var state_14684__$1 = (function (){var statearr_14696 = state_14684;(statearr_14696[(8)] = inst_14677);
return statearr_14696;
})();var statearr_14697_14715 = state_14684__$1;(statearr_14697_14715[(2)] = null);
(statearr_14697_14715[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14685 === (8)))
{var inst_14666 = (state_14684[(7)]);var state_14684__$1 = state_14684;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14684__$1,(11),out,inst_14666);
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
});})(c__6478__auto___14705,out))
;return ((function (switch__6463__auto__,c__6478__auto___14705,out){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_14701 = [null,null,null,null,null,null,null,null,null];(statearr_14701[(0)] = state_machine__6464__auto__);
(statearr_14701[(1)] = (1));
return statearr_14701;
});
var state_machine__6464__auto____1 = (function (state_14684){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_14684);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e14702){if((e14702 instanceof Object))
{var ex__6467__auto__ = e14702;var statearr_14703_14716 = state_14684;(statearr_14703_14716[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14684);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14702;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14717 = state_14684;
state_14684 = G__14717;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_14684){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_14684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___14705,out))
})();var state__6480__auto__ = (function (){var statearr_14704 = f__6479__auto__.call(null);(statearr_14704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___14705);
return statearr_14704;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___14705,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6478__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto__){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto__){
return (function (state_14883){var state_val_14884 = (state_14883[(1)]);if((state_val_14884 === (7)))
{var inst_14879 = (state_14883[(2)]);var state_14883__$1 = state_14883;var statearr_14885_14926 = state_14883__$1;(statearr_14885_14926[(2)] = inst_14879);
(statearr_14885_14926[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14884 === (20)))
{var inst_14849 = (state_14883[(7)]);var inst_14860 = (state_14883[(2)]);var inst_14861 = cljs.core.next.call(null,inst_14849);var inst_14835 = inst_14861;var inst_14836 = null;var inst_14837 = (0);var inst_14838 = (0);var state_14883__$1 = (function (){var statearr_14886 = state_14883;(statearr_14886[(8)] = inst_14835);
(statearr_14886[(9)] = inst_14836);
(statearr_14886[(10)] = inst_14837);
(statearr_14886[(11)] = inst_14860);
(statearr_14886[(12)] = inst_14838);
return statearr_14886;
})();var statearr_14887_14927 = state_14883__$1;(statearr_14887_14927[(2)] = null);
(statearr_14887_14927[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14884 === (1)))
{var state_14883__$1 = state_14883;var statearr_14888_14928 = state_14883__$1;(statearr_14888_14928[(2)] = null);
(statearr_14888_14928[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14884 === (4)))
{var inst_14824 = (state_14883[(13)]);var inst_14824__$1 = (state_14883[(2)]);var inst_14825 = (inst_14824__$1 == null);var state_14883__$1 = (function (){var statearr_14889 = state_14883;(statearr_14889[(13)] = inst_14824__$1);
return statearr_14889;
})();if(cljs.core.truth_(inst_14825))
{var statearr_14890_14929 = state_14883__$1;(statearr_14890_14929[(1)] = (5));
} else
{var statearr_14891_14930 = state_14883__$1;(statearr_14891_14930[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14884 === (15)))
{var state_14883__$1 = state_14883;var statearr_14895_14931 = state_14883__$1;(statearr_14895_14931[(2)] = null);
(statearr_14895_14931[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14884 === (21)))
{var state_14883__$1 = state_14883;var statearr_14896_14932 = state_14883__$1;(statearr_14896_14932[(2)] = null);
(statearr_14896_14932[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14884 === (13)))
{var inst_14835 = (state_14883[(8)]);var inst_14836 = (state_14883[(9)]);var inst_14837 = (state_14883[(10)]);var inst_14838 = (state_14883[(12)]);var inst_14845 = (state_14883[(2)]);var inst_14846 = (inst_14838 + (1));var tmp14892 = inst_14835;var tmp14893 = inst_14836;var tmp14894 = inst_14837;var inst_14835__$1 = tmp14892;var inst_14836__$1 = tmp14893;var inst_14837__$1 = tmp14894;var inst_14838__$1 = inst_14846;var state_14883__$1 = (function (){var statearr_14897 = state_14883;(statearr_14897[(8)] = inst_14835__$1);
(statearr_14897[(9)] = inst_14836__$1);
(statearr_14897[(14)] = inst_14845);
(statearr_14897[(10)] = inst_14837__$1);
(statearr_14897[(12)] = inst_14838__$1);
return statearr_14897;
})();var statearr_14898_14933 = state_14883__$1;(statearr_14898_14933[(2)] = null);
(statearr_14898_14933[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14884 === (22)))
{var state_14883__$1 = state_14883;var statearr_14899_14934 = state_14883__$1;(statearr_14899_14934[(2)] = null);
(statearr_14899_14934[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14884 === (6)))
{var inst_14824 = (state_14883[(13)]);var inst_14833 = f.call(null,inst_14824);var inst_14834 = cljs.core.seq.call(null,inst_14833);var inst_14835 = inst_14834;var inst_14836 = null;var inst_14837 = (0);var inst_14838 = (0);var state_14883__$1 = (function (){var statearr_14900 = state_14883;(statearr_14900[(8)] = inst_14835);
(statearr_14900[(9)] = inst_14836);
(statearr_14900[(10)] = inst_14837);
(statearr_14900[(12)] = inst_14838);
return statearr_14900;
})();var statearr_14901_14935 = state_14883__$1;(statearr_14901_14935[(2)] = null);
(statearr_14901_14935[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14884 === (17)))
{var inst_14849 = (state_14883[(7)]);var inst_14853 = cljs.core.chunk_first.call(null,inst_14849);var inst_14854 = cljs.core.chunk_rest.call(null,inst_14849);var inst_14855 = cljs.core.count.call(null,inst_14853);var inst_14835 = inst_14854;var inst_14836 = inst_14853;var inst_14837 = inst_14855;var inst_14838 = (0);var state_14883__$1 = (function (){var statearr_14902 = state_14883;(statearr_14902[(8)] = inst_14835);
(statearr_14902[(9)] = inst_14836);
(statearr_14902[(10)] = inst_14837);
(statearr_14902[(12)] = inst_14838);
return statearr_14902;
})();var statearr_14903_14936 = state_14883__$1;(statearr_14903_14936[(2)] = null);
(statearr_14903_14936[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14884 === (3)))
{var inst_14881 = (state_14883[(2)]);var state_14883__$1 = state_14883;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14883__$1,inst_14881);
} else
{if((state_val_14884 === (12)))
{var inst_14869 = (state_14883[(2)]);var state_14883__$1 = state_14883;var statearr_14904_14937 = state_14883__$1;(statearr_14904_14937[(2)] = inst_14869);
(statearr_14904_14937[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14884 === (2)))
{var state_14883__$1 = state_14883;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14883__$1,(4),in$);
} else
{if((state_val_14884 === (23)))
{var inst_14877 = (state_14883[(2)]);var state_14883__$1 = state_14883;var statearr_14905_14938 = state_14883__$1;(statearr_14905_14938[(2)] = inst_14877);
(statearr_14905_14938[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14884 === (19)))
{var inst_14864 = (state_14883[(2)]);var state_14883__$1 = state_14883;var statearr_14906_14939 = state_14883__$1;(statearr_14906_14939[(2)] = inst_14864);
(statearr_14906_14939[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14884 === (11)))
{var inst_14835 = (state_14883[(8)]);var inst_14849 = (state_14883[(7)]);var inst_14849__$1 = cljs.core.seq.call(null,inst_14835);var state_14883__$1 = (function (){var statearr_14907 = state_14883;(statearr_14907[(7)] = inst_14849__$1);
return statearr_14907;
})();if(inst_14849__$1)
{var statearr_14908_14940 = state_14883__$1;(statearr_14908_14940[(1)] = (14));
} else
{var statearr_14909_14941 = state_14883__$1;(statearr_14909_14941[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14884 === (9)))
{var inst_14871 = (state_14883[(2)]);var inst_14872 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_14883__$1 = (function (){var statearr_14910 = state_14883;(statearr_14910[(15)] = inst_14871);
return statearr_14910;
})();if(cljs.core.truth_(inst_14872))
{var statearr_14911_14942 = state_14883__$1;(statearr_14911_14942[(1)] = (21));
} else
{var statearr_14912_14943 = state_14883__$1;(statearr_14912_14943[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14884 === (5)))
{var inst_14827 = cljs.core.async.close_BANG_.call(null,out);var state_14883__$1 = state_14883;var statearr_14913_14944 = state_14883__$1;(statearr_14913_14944[(2)] = inst_14827);
(statearr_14913_14944[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14884 === (14)))
{var inst_14849 = (state_14883[(7)]);var inst_14851 = cljs.core.chunked_seq_QMARK_.call(null,inst_14849);var state_14883__$1 = state_14883;if(inst_14851)
{var statearr_14914_14945 = state_14883__$1;(statearr_14914_14945[(1)] = (17));
} else
{var statearr_14915_14946 = state_14883__$1;(statearr_14915_14946[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14884 === (16)))
{var inst_14867 = (state_14883[(2)]);var state_14883__$1 = state_14883;var statearr_14916_14947 = state_14883__$1;(statearr_14916_14947[(2)] = inst_14867);
(statearr_14916_14947[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14884 === (10)))
{var inst_14836 = (state_14883[(9)]);var inst_14838 = (state_14883[(12)]);var inst_14843 = cljs.core._nth.call(null,inst_14836,inst_14838);var state_14883__$1 = state_14883;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14883__$1,(13),out,inst_14843);
} else
{if((state_val_14884 === (18)))
{var inst_14849 = (state_14883[(7)]);var inst_14858 = cljs.core.first.call(null,inst_14849);var state_14883__$1 = state_14883;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14883__$1,(20),out,inst_14858);
} else
{if((state_val_14884 === (8)))
{var inst_14837 = (state_14883[(10)]);var inst_14838 = (state_14883[(12)]);var inst_14840 = (inst_14838 < inst_14837);var inst_14841 = inst_14840;var state_14883__$1 = state_14883;if(cljs.core.truth_(inst_14841))
{var statearr_14917_14948 = state_14883__$1;(statearr_14917_14948[(1)] = (10));
} else
{var statearr_14918_14949 = state_14883__$1;(statearr_14918_14949[(1)] = (11));
}
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
}
});})(c__6478__auto__))
;return ((function (switch__6463__auto__,c__6478__auto__){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_14922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14922[(0)] = state_machine__6464__auto__);
(statearr_14922[(1)] = (1));
return statearr_14922;
});
var state_machine__6464__auto____1 = (function (state_14883){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_14883);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e14923){if((e14923 instanceof Object))
{var ex__6467__auto__ = e14923;var statearr_14924_14950 = state_14883;(statearr_14924_14950[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14883);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14923;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14951 = state_14883;
state_14883 = G__14951;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_14883){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_14883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto__))
})();var state__6480__auto__ = (function (){var statearr_14925 = f__6479__auto__.call(null);(statearr_14925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto__);
return statearr_14925;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto__))
);
return c__6478__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6478__auto___15048 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___15048,out){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___15048,out){
return (function (state_15023){var state_val_15024 = (state_15023[(1)]);if((state_val_15024 === (7)))
{var inst_15018 = (state_15023[(2)]);var state_15023__$1 = state_15023;var statearr_15025_15049 = state_15023__$1;(statearr_15025_15049[(2)] = inst_15018);
(statearr_15025_15049[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15024 === (1)))
{var inst_15000 = null;var state_15023__$1 = (function (){var statearr_15026 = state_15023;(statearr_15026[(7)] = inst_15000);
return statearr_15026;
})();var statearr_15027_15050 = state_15023__$1;(statearr_15027_15050[(2)] = null);
(statearr_15027_15050[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15024 === (4)))
{var inst_15003 = (state_15023[(8)]);var inst_15003__$1 = (state_15023[(2)]);var inst_15004 = (inst_15003__$1 == null);var inst_15005 = cljs.core.not.call(null,inst_15004);var state_15023__$1 = (function (){var statearr_15028 = state_15023;(statearr_15028[(8)] = inst_15003__$1);
return statearr_15028;
})();if(inst_15005)
{var statearr_15029_15051 = state_15023__$1;(statearr_15029_15051[(1)] = (5));
} else
{var statearr_15030_15052 = state_15023__$1;(statearr_15030_15052[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15024 === (6)))
{var state_15023__$1 = state_15023;var statearr_15031_15053 = state_15023__$1;(statearr_15031_15053[(2)] = null);
(statearr_15031_15053[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15024 === (3)))
{var inst_15020 = (state_15023[(2)]);var inst_15021 = cljs.core.async.close_BANG_.call(null,out);var state_15023__$1 = (function (){var statearr_15032 = state_15023;(statearr_15032[(9)] = inst_15020);
return statearr_15032;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15023__$1,inst_15021);
} else
{if((state_val_15024 === (2)))
{var state_15023__$1 = state_15023;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15023__$1,(4),ch);
} else
{if((state_val_15024 === (11)))
{var inst_15003 = (state_15023[(8)]);var inst_15012 = (state_15023[(2)]);var inst_15000 = inst_15003;var state_15023__$1 = (function (){var statearr_15033 = state_15023;(statearr_15033[(10)] = inst_15012);
(statearr_15033[(7)] = inst_15000);
return statearr_15033;
})();var statearr_15034_15054 = state_15023__$1;(statearr_15034_15054[(2)] = null);
(statearr_15034_15054[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15024 === (9)))
{var inst_15003 = (state_15023[(8)]);var state_15023__$1 = state_15023;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15023__$1,(11),out,inst_15003);
} else
{if((state_val_15024 === (5)))
{var inst_15003 = (state_15023[(8)]);var inst_15000 = (state_15023[(7)]);var inst_15007 = cljs.core._EQ_.call(null,inst_15003,inst_15000);var state_15023__$1 = state_15023;if(inst_15007)
{var statearr_15036_15055 = state_15023__$1;(statearr_15036_15055[(1)] = (8));
} else
{var statearr_15037_15056 = state_15023__$1;(statearr_15037_15056[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15024 === (10)))
{var inst_15015 = (state_15023[(2)]);var state_15023__$1 = state_15023;var statearr_15038_15057 = state_15023__$1;(statearr_15038_15057[(2)] = inst_15015);
(statearr_15038_15057[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15024 === (8)))
{var inst_15000 = (state_15023[(7)]);var tmp15035 = inst_15000;var inst_15000__$1 = tmp15035;var state_15023__$1 = (function (){var statearr_15039 = state_15023;(statearr_15039[(7)] = inst_15000__$1);
return statearr_15039;
})();var statearr_15040_15058 = state_15023__$1;(statearr_15040_15058[(2)] = null);
(statearr_15040_15058[(1)] = (2));
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
});})(c__6478__auto___15048,out))
;return ((function (switch__6463__auto__,c__6478__auto___15048,out){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_15044 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15044[(0)] = state_machine__6464__auto__);
(statearr_15044[(1)] = (1));
return statearr_15044;
});
var state_machine__6464__auto____1 = (function (state_15023){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_15023);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e15045){if((e15045 instanceof Object))
{var ex__6467__auto__ = e15045;var statearr_15046_15059 = state_15023;(statearr_15046_15059[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15023);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15045;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15060 = state_15023;
state_15023 = G__15060;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_15023){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_15023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___15048,out))
})();var state__6480__auto__ = (function (){var statearr_15047 = f__6479__auto__.call(null);(statearr_15047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___15048);
return statearr_15047;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___15048,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6478__auto___15195 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___15195,out){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___15195,out){
return (function (state_15165){var state_val_15166 = (state_15165[(1)]);if((state_val_15166 === (7)))
{var inst_15161 = (state_15165[(2)]);var state_15165__$1 = state_15165;var statearr_15167_15196 = state_15165__$1;(statearr_15167_15196[(2)] = inst_15161);
(statearr_15167_15196[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15166 === (1)))
{var inst_15128 = (new Array(n));var inst_15129 = inst_15128;var inst_15130 = (0);var state_15165__$1 = (function (){var statearr_15168 = state_15165;(statearr_15168[(7)] = inst_15129);
(statearr_15168[(8)] = inst_15130);
return statearr_15168;
})();var statearr_15169_15197 = state_15165__$1;(statearr_15169_15197[(2)] = null);
(statearr_15169_15197[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15166 === (4)))
{var inst_15133 = (state_15165[(9)]);var inst_15133__$1 = (state_15165[(2)]);var inst_15134 = (inst_15133__$1 == null);var inst_15135 = cljs.core.not.call(null,inst_15134);var state_15165__$1 = (function (){var statearr_15170 = state_15165;(statearr_15170[(9)] = inst_15133__$1);
return statearr_15170;
})();if(inst_15135)
{var statearr_15171_15198 = state_15165__$1;(statearr_15171_15198[(1)] = (5));
} else
{var statearr_15172_15199 = state_15165__$1;(statearr_15172_15199[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15166 === (15)))
{var inst_15155 = (state_15165[(2)]);var state_15165__$1 = state_15165;var statearr_15173_15200 = state_15165__$1;(statearr_15173_15200[(2)] = inst_15155);
(statearr_15173_15200[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15166 === (13)))
{var state_15165__$1 = state_15165;var statearr_15174_15201 = state_15165__$1;(statearr_15174_15201[(2)] = null);
(statearr_15174_15201[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15166 === (6)))
{var inst_15130 = (state_15165[(8)]);var inst_15151 = (inst_15130 > (0));var state_15165__$1 = state_15165;if(cljs.core.truth_(inst_15151))
{var statearr_15175_15202 = state_15165__$1;(statearr_15175_15202[(1)] = (12));
} else
{var statearr_15176_15203 = state_15165__$1;(statearr_15176_15203[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15166 === (3)))
{var inst_15163 = (state_15165[(2)]);var state_15165__$1 = state_15165;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15165__$1,inst_15163);
} else
{if((state_val_15166 === (12)))
{var inst_15129 = (state_15165[(7)]);var inst_15153 = cljs.core.vec.call(null,inst_15129);var state_15165__$1 = state_15165;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15165__$1,(15),out,inst_15153);
} else
{if((state_val_15166 === (2)))
{var state_15165__$1 = state_15165;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15165__$1,(4),ch);
} else
{if((state_val_15166 === (11)))
{var inst_15145 = (state_15165[(2)]);var inst_15146 = (new Array(n));var inst_15129 = inst_15146;var inst_15130 = (0);var state_15165__$1 = (function (){var statearr_15177 = state_15165;(statearr_15177[(10)] = inst_15145);
(statearr_15177[(7)] = inst_15129);
(statearr_15177[(8)] = inst_15130);
return statearr_15177;
})();var statearr_15178_15204 = state_15165__$1;(statearr_15178_15204[(2)] = null);
(statearr_15178_15204[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15166 === (9)))
{var inst_15129 = (state_15165[(7)]);var inst_15143 = cljs.core.vec.call(null,inst_15129);var state_15165__$1 = state_15165;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15165__$1,(11),out,inst_15143);
} else
{if((state_val_15166 === (5)))
{var inst_15133 = (state_15165[(9)]);var inst_15138 = (state_15165[(11)]);var inst_15129 = (state_15165[(7)]);var inst_15130 = (state_15165[(8)]);var inst_15137 = (inst_15129[inst_15130] = inst_15133);var inst_15138__$1 = (inst_15130 + (1));var inst_15139 = (inst_15138__$1 < n);var state_15165__$1 = (function (){var statearr_15179 = state_15165;(statearr_15179[(12)] = inst_15137);
(statearr_15179[(11)] = inst_15138__$1);
return statearr_15179;
})();if(cljs.core.truth_(inst_15139))
{var statearr_15180_15205 = state_15165__$1;(statearr_15180_15205[(1)] = (8));
} else
{var statearr_15181_15206 = state_15165__$1;(statearr_15181_15206[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15166 === (14)))
{var inst_15158 = (state_15165[(2)]);var inst_15159 = cljs.core.async.close_BANG_.call(null,out);var state_15165__$1 = (function (){var statearr_15183 = state_15165;(statearr_15183[(13)] = inst_15158);
return statearr_15183;
})();var statearr_15184_15207 = state_15165__$1;(statearr_15184_15207[(2)] = inst_15159);
(statearr_15184_15207[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15166 === (10)))
{var inst_15149 = (state_15165[(2)]);var state_15165__$1 = state_15165;var statearr_15185_15208 = state_15165__$1;(statearr_15185_15208[(2)] = inst_15149);
(statearr_15185_15208[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15166 === (8)))
{var inst_15138 = (state_15165[(11)]);var inst_15129 = (state_15165[(7)]);var tmp15182 = inst_15129;var inst_15129__$1 = tmp15182;var inst_15130 = inst_15138;var state_15165__$1 = (function (){var statearr_15186 = state_15165;(statearr_15186[(7)] = inst_15129__$1);
(statearr_15186[(8)] = inst_15130);
return statearr_15186;
})();var statearr_15187_15209 = state_15165__$1;(statearr_15187_15209[(2)] = null);
(statearr_15187_15209[(1)] = (2));
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
}
}
}
}
});})(c__6478__auto___15195,out))
;return ((function (switch__6463__auto__,c__6478__auto___15195,out){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_15191 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15191[(0)] = state_machine__6464__auto__);
(statearr_15191[(1)] = (1));
return statearr_15191;
});
var state_machine__6464__auto____1 = (function (state_15165){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_15165);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e15192){if((e15192 instanceof Object))
{var ex__6467__auto__ = e15192;var statearr_15193_15210 = state_15165;(statearr_15193_15210[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15165);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15192;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15211 = state_15165;
state_15165 = G__15211;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_15165){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_15165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___15195,out))
})();var state__6480__auto__ = (function (){var statearr_15194 = f__6479__auto__.call(null);(statearr_15194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___15195);
return statearr_15194;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___15195,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6478__auto___15354 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6478__auto___15354,out){
return (function (){var f__6479__auto__ = (function (){var switch__6463__auto__ = ((function (c__6478__auto___15354,out){
return (function (state_15324){var state_val_15325 = (state_15324[(1)]);if((state_val_15325 === (7)))
{var inst_15320 = (state_15324[(2)]);var state_15324__$1 = state_15324;var statearr_15326_15355 = state_15324__$1;(statearr_15326_15355[(2)] = inst_15320);
(statearr_15326_15355[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15325 === (1)))
{var inst_15283 = [];var inst_15284 = inst_15283;var inst_15285 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_15324__$1 = (function (){var statearr_15327 = state_15324;(statearr_15327[(7)] = inst_15285);
(statearr_15327[(8)] = inst_15284);
return statearr_15327;
})();var statearr_15328_15356 = state_15324__$1;(statearr_15328_15356[(2)] = null);
(statearr_15328_15356[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15325 === (4)))
{var inst_15288 = (state_15324[(9)]);var inst_15288__$1 = (state_15324[(2)]);var inst_15289 = (inst_15288__$1 == null);var inst_15290 = cljs.core.not.call(null,inst_15289);var state_15324__$1 = (function (){var statearr_15329 = state_15324;(statearr_15329[(9)] = inst_15288__$1);
return statearr_15329;
})();if(inst_15290)
{var statearr_15330_15357 = state_15324__$1;(statearr_15330_15357[(1)] = (5));
} else
{var statearr_15331_15358 = state_15324__$1;(statearr_15331_15358[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15325 === (15)))
{var inst_15314 = (state_15324[(2)]);var state_15324__$1 = state_15324;var statearr_15332_15359 = state_15324__$1;(statearr_15332_15359[(2)] = inst_15314);
(statearr_15332_15359[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15325 === (13)))
{var state_15324__$1 = state_15324;var statearr_15333_15360 = state_15324__$1;(statearr_15333_15360[(2)] = null);
(statearr_15333_15360[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15325 === (6)))
{var inst_15284 = (state_15324[(8)]);var inst_15309 = inst_15284.length;var inst_15310 = (inst_15309 > (0));var state_15324__$1 = state_15324;if(cljs.core.truth_(inst_15310))
{var statearr_15334_15361 = state_15324__$1;(statearr_15334_15361[(1)] = (12));
} else
{var statearr_15335_15362 = state_15324__$1;(statearr_15335_15362[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15325 === (3)))
{var inst_15322 = (state_15324[(2)]);var state_15324__$1 = state_15324;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15324__$1,inst_15322);
} else
{if((state_val_15325 === (12)))
{var inst_15284 = (state_15324[(8)]);var inst_15312 = cljs.core.vec.call(null,inst_15284);var state_15324__$1 = state_15324;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15324__$1,(15),out,inst_15312);
} else
{if((state_val_15325 === (2)))
{var state_15324__$1 = state_15324;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15324__$1,(4),ch);
} else
{if((state_val_15325 === (11)))
{var inst_15288 = (state_15324[(9)]);var inst_15292 = (state_15324[(10)]);var inst_15302 = (state_15324[(2)]);var inst_15303 = [];var inst_15304 = inst_15303.push(inst_15288);var inst_15284 = inst_15303;var inst_15285 = inst_15292;var state_15324__$1 = (function (){var statearr_15336 = state_15324;(statearr_15336[(11)] = inst_15304);
(statearr_15336[(12)] = inst_15302);
(statearr_15336[(7)] = inst_15285);
(statearr_15336[(8)] = inst_15284);
return statearr_15336;
})();var statearr_15337_15363 = state_15324__$1;(statearr_15337_15363[(2)] = null);
(statearr_15337_15363[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15325 === (9)))
{var inst_15284 = (state_15324[(8)]);var inst_15300 = cljs.core.vec.call(null,inst_15284);var state_15324__$1 = state_15324;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15324__$1,(11),out,inst_15300);
} else
{if((state_val_15325 === (5)))
{var inst_15288 = (state_15324[(9)]);var inst_15285 = (state_15324[(7)]);var inst_15292 = (state_15324[(10)]);var inst_15292__$1 = f.call(null,inst_15288);var inst_15293 = cljs.core._EQ_.call(null,inst_15292__$1,inst_15285);var inst_15294 = cljs.core.keyword_identical_QMARK_.call(null,inst_15285,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_15295 = (inst_15293) || (inst_15294);var state_15324__$1 = (function (){var statearr_15338 = state_15324;(statearr_15338[(10)] = inst_15292__$1);
return statearr_15338;
})();if(cljs.core.truth_(inst_15295))
{var statearr_15339_15364 = state_15324__$1;(statearr_15339_15364[(1)] = (8));
} else
{var statearr_15340_15365 = state_15324__$1;(statearr_15340_15365[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15325 === (14)))
{var inst_15317 = (state_15324[(2)]);var inst_15318 = cljs.core.async.close_BANG_.call(null,out);var state_15324__$1 = (function (){var statearr_15342 = state_15324;(statearr_15342[(13)] = inst_15317);
return statearr_15342;
})();var statearr_15343_15366 = state_15324__$1;(statearr_15343_15366[(2)] = inst_15318);
(statearr_15343_15366[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15325 === (10)))
{var inst_15307 = (state_15324[(2)]);var state_15324__$1 = state_15324;var statearr_15344_15367 = state_15324__$1;(statearr_15344_15367[(2)] = inst_15307);
(statearr_15344_15367[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15325 === (8)))
{var inst_15288 = (state_15324[(9)]);var inst_15292 = (state_15324[(10)]);var inst_15284 = (state_15324[(8)]);var inst_15297 = inst_15284.push(inst_15288);var tmp15341 = inst_15284;var inst_15284__$1 = tmp15341;var inst_15285 = inst_15292;var state_15324__$1 = (function (){var statearr_15345 = state_15324;(statearr_15345[(14)] = inst_15297);
(statearr_15345[(7)] = inst_15285);
(statearr_15345[(8)] = inst_15284__$1);
return statearr_15345;
})();var statearr_15346_15368 = state_15324__$1;(statearr_15346_15368[(2)] = null);
(statearr_15346_15368[(1)] = (2));
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
}
}
}
}
});})(c__6478__auto___15354,out))
;return ((function (switch__6463__auto__,c__6478__auto___15354,out){
return (function() {
var state_machine__6464__auto__ = null;
var state_machine__6464__auto____0 = (function (){var statearr_15350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15350[(0)] = state_machine__6464__auto__);
(statearr_15350[(1)] = (1));
return statearr_15350;
});
var state_machine__6464__auto____1 = (function (state_15324){while(true){
var ret_value__6465__auto__ = (function (){try{while(true){
var result__6466__auto__ = switch__6463__auto__.call(null,state_15324);if(cljs.core.keyword_identical_QMARK_.call(null,result__6466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6466__auto__;
}
break;
}
}catch (e15351){if((e15351 instanceof Object))
{var ex__6467__auto__ = e15351;var statearr_15352_15369 = state_15324;(statearr_15352_15369[(5)] = ex__6467__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15324);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15351;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15370 = state_15324;
state_15324 = G__15370;
continue;
}
} else
{return ret_value__6465__auto__;
}
break;
}
});
state_machine__6464__auto__ = function(state_15324){
switch(arguments.length){
case 0:
return state_machine__6464__auto____0.call(this);
case 1:
return state_machine__6464__auto____1.call(this,state_15324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6464__auto____0;
state_machine__6464__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6464__auto____1;
return state_machine__6464__auto__;
})()
;})(switch__6463__auto__,c__6478__auto___15354,out))
})();var state__6480__auto__ = (function (){var statearr_15353 = f__6479__auto__.call(null);(statearr_15353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6478__auto___15354);
return statearr_15353;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6480__auto__);
});})(c__6478__auto___15354,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map