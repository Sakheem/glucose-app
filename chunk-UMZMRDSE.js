var Zr = Object.defineProperty, re = Object.defineProperties;
var ee = Object.getOwnPropertyDescriptors;
var br = Object.getOwnPropertySymbols;
var te = Object.prototype.hasOwnProperty, oe = Object.prototype.propertyIsEnumerable;
var wr = (r, t, e) => t in r ? Zr(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e, Ue = (r, t) => { for (var e in t ||= {})
    te.call(t, e) && wr(r, e, t[e]); if (br)
    for (var e of br(t))
        oe.call(t, e) && wr(r, e, t[e]); return r; }, Le = (r, t) => re(r, ee(t));
var De = (r, t, e) => new Promise((o, n) => { var i = u => { try {
    c(e.next(u));
}
catch (a) {
    n(a);
} }, f = u => { try {
    c(e.throw(u));
}
catch (a) {
    n(a);
} }, c = u => u.done ? o(u.value) : Promise.resolve(u.value).then(i, f); c((e = e.apply(r, t)).next()); });
var mr = function (r, t) { return mr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, o) { e.__proto__ = o; } || function (e, o) { for (var n in o)
    Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]); }, mr(r, t); };
function E(r, t) { if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null"); mr(r, t); function e() { this.constructor = r; } r.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e); }
function Sr(r, t, e, o) { function n(i) { return i instanceof e ? i : new e(function (f) { f(i); }); } return new (e || (e = Promise))(function (i, f) { function c(m) { try {
    a(o.next(m));
}
catch (x) {
    f(x);
} } function u(m) { try {
    a(o.throw(m));
}
catch (x) {
    f(x);
} } function a(m) { m.done ? i(m.value) : n(m.value).then(c, u); } a((o = o.apply(r, t || [])).next()); }); }
function B(r, t) { var e = { label: 0, sent: function () { if (i[0] & 1)
        throw i[1]; return i[1]; }, trys: [], ops: [] }, o, n, i, f = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype); return f.next = c(0), f.throw = c(1), f.return = c(2), typeof Symbol == "function" && (f[Symbol.iterator] = function () { return this; }), f; function c(a) { return function (m) { return u([a, m]); }; } function u(a) { if (o)
    throw new TypeError("Generator is already executing."); for (; f && (f = 0, a[0] && (e = 0)), e;)
    try {
        if (o = 1, n && (i = a[0] & 2 ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done)
            return i;
        switch (n = 0, i && (a = [a[0] & 2, i.value]), a[0]) {
            case 0:
            case 1:
                i = a;
                break;
            case 4: return e.label++, { value: a[1], done: !1 };
            case 5:
                e.label++, n = a[1], a = [0];
                continue;
            case 7:
                a = e.ops.pop(), e.trys.pop();
                continue;
            default:
                if (i = e.trys, !(i = i.length > 0 && i[i.length - 1]) && (a[0] === 6 || a[0] === 2)) {
                    e = 0;
                    continue;
                }
                if (a[0] === 3 && (!i || a[1] > i[0] && a[1] < i[3])) {
                    e.label = a[1];
                    break;
                }
                if (a[0] === 6 && e.label < i[1]) {
                    e.label = i[1], i = a;
                    break;
                }
                if (i && e.label < i[2]) {
                    e.label = i[2], e.ops.push(a);
                    break;
                }
                i[2] && e.ops.pop(), e.trys.pop();
                continue;
        }
        a = t.call(r, e);
    }
    catch (m) {
        a = [6, m], n = 0;
    }
    finally {
        o = i = 0;
    } if (a[0] & 5)
    throw a[1]; return { value: a[0] ? a[1] : void 0, done: !0 }; } }
function g(r) { var t = typeof Symbol == "function" && Symbol.iterator, e = t && r[t], o = 0; if (e)
    return e.call(r); if (r && typeof r.length == "number")
    return { next: function () { return r && o >= r.length && (r = void 0), { value: r && r[o++], done: !r }; } }; throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined."); }
function A(r, t) { var e = typeof Symbol == "function" && r[Symbol.iterator]; if (!e)
    return r; var o = e.call(r), n, i = [], f; try {
    for (; (t === void 0 || t-- > 0) && !(n = o.next()).done;)
        i.push(n.value);
}
catch (c) {
    f = { error: c };
}
finally {
    try {
        n && !n.done && (e = o.return) && e.call(o);
    }
    finally {
        if (f)
            throw f.error;
    }
} return i; }
function P(r, t, e) { if (e || arguments.length === 2)
    for (var o = 0, n = t.length, i; o < n; o++)
        (i || !(o in t)) && (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]); return r.concat(i || Array.prototype.slice.call(t)); }
function F(r) { return this instanceof F ? (this.v = r, this) : new F(r); }
function gr(r, t, e) { if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined."); var o = e.apply(r, t || []), n, i = []; return n = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), c("next"), c("throw"), c("return", f), n[Symbol.asyncIterator] = function () { return this; }, n; function f(s) { return function (b) { return Promise.resolve(b).then(s, x); }; } function c(s, b) { o[s] && (n[s] = function (v) { return new Promise(function (q, j) { i.push([s, v, q, j]) > 1 || u(s, v); }); }, b && (n[s] = b(n[s]))); } function u(s, b) { try {
    a(o[s](b));
}
catch (v) {
    S(i[0][3], v);
} } function a(s) { s.value instanceof F ? Promise.resolve(s.value.v).then(m, x) : S(i[0][2], s); } function m(s) { u("next", s); } function x(s) { u("throw", s); } function S(s, b) { s(b), i.shift(), i.length && u(i[0][0], i[0][1]); } }
function _r(r) { if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined."); var t = r[Symbol.asyncIterator], e; return t ? t.call(r) : (r = typeof g == "function" ? g(r) : r[Symbol.iterator](), e = {}, o("next"), o("throw"), o("return"), e[Symbol.asyncIterator] = function () { return this; }, e); function o(i) { e[i] = r[i] && function (f) { return new Promise(function (c, u) { f = r[i](f), n(c, u, f.done, f.value); }); }; } function n(i, f, c, u) { Promise.resolve(u).then(function (a) { i({ value: a, done: c }); }, f); } }
function p(r) { return typeof r == "function"; }
function k(r) { var t = function (o) { Error.call(o), o.stack = new Error().stack; }, e = r(t); return e.prototype = Object.create(Error.prototype), e.prototype.constructor = e, e; }
var H = k(function (r) {
    return function (e) {
        r(this), this.message = e ? e.length + ` errors occurred during unsubscription:
` + e.map(function (o, n) { return n + 1 + ") " + o.toString(); }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = e;
    };
});
function W(r, t) { if (r) {
    var e = r.indexOf(t);
    0 <= e && r.splice(e, 1);
} }
var C = (function () { function r(t) { this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null; } return r.prototype.unsubscribe = function () { var t, e, o, n, i; if (!this.closed) {
    this.closed = !0;
    var f = this._parentage;
    if (f)
        if (this._parentage = null, Array.isArray(f))
            try {
                for (var c = g(f), u = c.next(); !u.done; u = c.next()) {
                    var a = u.value;
                    a.remove(this);
                }
            }
            catch (v) {
                t = { error: v };
            }
            finally {
                try {
                    u && !u.done && (e = c.return) && e.call(c);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        else
            f.remove(this);
    var m = this.initialTeardown;
    if (p(m))
        try {
            m();
        }
        catch (v) {
            i = v instanceof H ? v.errors : [v];
        }
    var x = this._finalizers;
    if (x) {
        this._finalizers = null;
        try {
            for (var S = g(x), s = S.next(); !s.done; s = S.next()) {
                var b = s.value;
                try {
                    Or(b);
                }
                catch (v) {
                    i = i ?? [], v instanceof H ? i = P(P([], A(i)), A(v.errors)) : i.push(v);
                }
            }
        }
        catch (v) {
            o = { error: v };
        }
        finally {
            try {
                s && !s.done && (n = S.return) && n.call(S);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
    }
    if (i)
        throw new H(i);
} }, r.prototype.add = function (t) { var e; if (t && t !== this)
    if (this.closed)
        Or(t);
    else {
        if (t instanceof r) {
            if (t.closed || t._hasParent(this))
                return;
            t._addParent(this);
        }
        (this._finalizers = (e = this._finalizers) !== null && e !== void 0 ? e : []).push(t);
    } }, r.prototype._hasParent = function (t) { var e = this._parentage; return e === t || Array.isArray(e) && e.includes(t); }, r.prototype._addParent = function (t) { var e = this._parentage; this._parentage = Array.isArray(e) ? (e.push(t), e) : e ? [e, t] : t; }, r.prototype._removeParent = function (t) { var e = this._parentage; e === t ? this._parentage = null : Array.isArray(e) && W(e, t); }, r.prototype.remove = function (t) { var e = this._finalizers; e && W(e, t), t instanceof r && t._removeParent(this); }, r.EMPTY = (function () { var t = new r; return t.closed = !0, t; })(), r; })();
var hr = C.EMPTY;
function K(r) { return r instanceof C || r && "closed" in r && p(r.remove) && p(r.add) && p(r.unsubscribe); }
function Or(r) { p(r) ? r() : r.unsubscribe(); }
var _ = { onUnhandledError: null, onStoppedNotification: null, Promise: void 0, useDeprecatedSynchronousErrorHandling: !1, useDeprecatedNextContext: !1 };
var M = { setTimeout: function (r, t) { for (var e = [], o = 2; o < arguments.length; o++)
        e[o - 2] = arguments[o]; var n = M.delegate; return n?.setTimeout ? n.setTimeout.apply(n, P([r, t], A(e))) : setTimeout.apply(void 0, P([r, t], A(e))); }, clearTimeout: function (r) { var t = M.delegate; return (t?.clearTimeout || clearTimeout)(r); }, delegate: void 0 };
function J(r) { M.setTimeout(function () { var t = _.onUnhandledError; if (t)
    t(r);
else
    throw r; }); }
function V() { }
var Er = (function () { return dr("C", void 0, void 0); })();
function Ar(r) { return dr("E", void 0, r); }
function Pr(r) { return dr("N", r, void 0); }
function dr(r, t, e) { return { kind: r, value: t, error: e }; }
var R = null;
function U(r) { if (_.useDeprecatedSynchronousErrorHandling) {
    var t = !R;
    if (t && (R = { errorThrown: !1, error: null }), r(), t) {
        var e = R, o = e.errorThrown, n = e.error;
        if (R = null, o)
            throw n;
    }
}
else
    r(); }
function Ir(r) { _.useDeprecatedSynchronousErrorHandling && R && (R.errorThrown = !0, R.error = r); }
var Y = (function (r) { E(t, r); function t(e) { var o = r.call(this) || this; return o.isStopped = !1, e ? (o.destination = e, K(e) && e.add(o)) : o.destination = ue, o; } return t.create = function (e, o, n) { return new Q(e, o, n); }, t.prototype.next = function (e) { this.isStopped ? yr(Pr(e), this) : this._next(e); }, t.prototype.error = function (e) { this.isStopped ? yr(Ar(e), this) : (this.isStopped = !0, this._error(e)); }, t.prototype.complete = function () { this.isStopped ? yr(Er, this) : (this.isStopped = !0, this._complete()); }, t.prototype.unsubscribe = function () { this.closed || (this.isStopped = !0, r.prototype.unsubscribe.call(this), this.destination = null); }, t.prototype._next = function (e) { this.destination.next(e); }, t.prototype._error = function (e) { try {
    this.destination.error(e);
}
finally {
    this.unsubscribe();
} }, t.prototype._complete = function () { try {
    this.destination.complete();
}
finally {
    this.unsubscribe();
} }, t; })(C);
var ne = Function.prototype.bind;
function vr(r, t) { return ne.call(r, t); }
var ie = (function () { function r(t) { this.partialObserver = t; } return r.prototype.next = function (t) { var e = this.partialObserver; if (e.next)
    try {
        e.next(t);
    }
    catch (o) {
        $(o);
    } }, r.prototype.error = function (t) { var e = this.partialObserver; if (e.error)
    try {
        e.error(t);
    }
    catch (o) {
        $(o);
    }
else
    $(t); }, r.prototype.complete = function () { var t = this.partialObserver; if (t.complete)
    try {
        t.complete();
    }
    catch (e) {
        $(e);
    } }, r; })(), Q = (function (r) { E(t, r); function t(e, o, n) { var i = r.call(this) || this, f; if (p(e) || !e)
    f = { next: e ?? void 0, error: o ?? void 0, complete: n ?? void 0 };
else {
    var c;
    i && _.useDeprecatedNextContext ? (c = Object.create(e), c.unsubscribe = function () { return i.unsubscribe(); }, f = { next: e.next && vr(e.next, c), error: e.error && vr(e.error, c), complete: e.complete && vr(e.complete, c) }) : f = e;
} return i.destination = new ie(f), i; } return t; })(Y);
function $(r) { _.useDeprecatedSynchronousErrorHandling ? Ir(r) : J(r); }
function fe(r) { throw r; }
function yr(r, t) { var e = _.onStoppedNotification; e && M.setTimeout(function () { return e(r, t); }); }
var ue = { closed: !0, next: V, error: fe, complete: V };
var L = (function () { return typeof Symbol == "function" && Symbol.observable || "@@observable"; })();
function O(r) { return r; }
function ae() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return xr(r); }
function xr(r) { return r.length === 0 ? O : r.length === 1 ? r[0] : function (e) { return r.reduce(function (o, n) { return n(o); }, e); }; }
var d = (function () { function r(t) { t && (this._subscribe = t); } return r.prototype.lift = function (t) { var e = new r; return e.source = this, e.operator = t, e; }, r.prototype.subscribe = function (t, e, o) { var n = this, i = pe(t) ? t : new Q(t, e, o); return U(function () { var f = n, c = f.operator, u = f.source; i.add(c ? c.call(i, u) : u ? n._subscribe(i) : n._trySubscribe(i)); }), i; }, r.prototype._trySubscribe = function (t) { try {
    return this._subscribe(t);
}
catch (e) {
    t.error(e);
} }, r.prototype.forEach = function (t, e) { var o = this; return e = Tr(e), new e(function (n, i) { var f = new Q({ next: function (c) { try {
        t(c);
    }
    catch (u) {
        i(u), f.unsubscribe();
    } }, error: i, complete: n }); o.subscribe(f); }); }, r.prototype._subscribe = function (t) { var e; return (e = this.source) === null || e === void 0 ? void 0 : e.subscribe(t); }, r.prototype[L] = function () { return this; }, r.prototype.pipe = function () { for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e]; return xr(t)(this); }, r.prototype.toPromise = function (t) { var e = this; return t = Tr(t), new t(function (o, n) { var i; e.subscribe(function (f) { return i = f; }, function (f) { return n(f); }, function () { return o(i); }); }); }, r.create = function (t) { return new r(t); }, r; })();
function Tr(r) { var t; return (t = r ?? _.Promise) !== null && t !== void 0 ? t : Promise; }
function ce(r) { return r && p(r.next) && p(r.error) && p(r.complete); }
function pe(r) { return r && r instanceof Y || ce(r) && K(r); }
function se(r) { return p(r?.lift); }
function l(r) { return function (t) { if (se(t))
    return t.lift(function (e) { try {
        return r(e, this);
    }
    catch (o) {
        this.error(o);
    } }); throw new TypeError("Unable to lift unknown Observable type"); }; }
function h(r, t, e, o, n) { return new le(r, t, e, o, n); }
var le = (function (r) { E(t, r); function t(e, o, n, i, f, c) { var u = r.call(this, e) || this; return u.onFinalize = f, u.shouldUnsubscribe = c, u._next = o ? function (a) { try {
    o(a);
}
catch (m) {
    e.error(m);
} } : r.prototype._next, u._error = i ? function (a) { try {
    i(a);
}
catch (m) {
    e.error(m);
}
finally {
    this.unsubscribe();
} } : r.prototype._error, u._complete = n ? function () { try {
    n();
}
catch (a) {
    e.error(a);
}
finally {
    this.unsubscribe();
} } : r.prototype._complete, u; } return t.prototype.unsubscribe = function () { var e; if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
    var o = this.closed;
    r.prototype.unsubscribe.call(this), !o && ((e = this.onFinalize) === null || e === void 0 || e.call(this));
} }, t; })(Y);
var jr = k(function (r) { return function () { r(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"; }; });
var X = (function (r) { E(t, r); function t() { var e = r.call(this) || this; return e.closed = !1, e.currentObservers = null, e.observers = [], e.isStopped = !1, e.hasError = !1, e.thrownError = null, e; } return t.prototype.lift = function (e) { var o = new Fr(this, this); return o.operator = e, o; }, t.prototype._throwIfClosed = function () { if (this.closed)
    throw new jr; }, t.prototype.next = function (e) { var o = this; U(function () { var n, i; if (o._throwIfClosed(), !o.isStopped) {
    o.currentObservers || (o.currentObservers = Array.from(o.observers));
    try {
        for (var f = g(o.currentObservers), c = f.next(); !c.done; c = f.next()) {
            var u = c.value;
            u.next(e);
        }
    }
    catch (a) {
        n = { error: a };
    }
    finally {
        try {
            c && !c.done && (i = f.return) && i.call(f);
        }
        finally {
            if (n)
                throw n.error;
        }
    }
} }); }, t.prototype.error = function (e) { var o = this; U(function () { if (o._throwIfClosed(), !o.isStopped) {
    o.hasError = o.isStopped = !0, o.thrownError = e;
    for (var n = o.observers; n.length;)
        n.shift().error(e);
} }); }, t.prototype.complete = function () { var e = this; U(function () { if (e._throwIfClosed(), !e.isStopped) {
    e.isStopped = !0;
    for (var o = e.observers; o.length;)
        o.shift().complete();
} }); }, t.prototype.unsubscribe = function () { this.isStopped = this.closed = !0, this.observers = this.currentObservers = null; }, Object.defineProperty(t.prototype, "observed", { get: function () { var e; return ((e = this.observers) === null || e === void 0 ? void 0 : e.length) > 0; }, enumerable: !1, configurable: !0 }), t.prototype._trySubscribe = function (e) { return this._throwIfClosed(), r.prototype._trySubscribe.call(this, e); }, t.prototype._subscribe = function (e) { return this._throwIfClosed(), this._checkFinalizedStatuses(e), this._innerSubscribe(e); }, t.prototype._innerSubscribe = function (e) { var o = this, n = this, i = n.hasError, f = n.isStopped, c = n.observers; return i || f ? hr : (this.currentObservers = null, c.push(e), new C(function () { o.currentObservers = null, W(c, e); })); }, t.prototype._checkFinalizedStatuses = function (e) { var o = this, n = o.hasError, i = o.thrownError, f = o.isStopped; n ? e.error(i) : f && e.complete(); }, t.prototype.asObservable = function () { var e = new d; return e.source = this, e; }, t.create = function (e, o) { return new Fr(e, o); }, t; })(d);
var Fr = (function (r) { E(t, r); function t(e, o) { var n = r.call(this) || this; return n.destination = e, n.source = o, n; } return t.prototype.next = function (e) { var o, n; (n = (o = this.destination) === null || o === void 0 ? void 0 : o.next) === null || n === void 0 || n.call(o, e); }, t.prototype.error = function (e) { var o, n; (n = (o = this.destination) === null || o === void 0 ? void 0 : o.error) === null || n === void 0 || n.call(o, e); }, t.prototype.complete = function () { var e, o; (o = (e = this.destination) === null || e === void 0 ? void 0 : e.complete) === null || o === void 0 || o.call(e); }, t.prototype._subscribe = function (e) { var o, n; return (n = (o = this.source) === null || o === void 0 ? void 0 : o.subscribe(e)) !== null && n !== void 0 ? n : hr; }, t; })(X);
var me = (function (r) { E(t, r); function t(e) { var o = r.call(this) || this; return o._value = e, o; } return Object.defineProperty(t.prototype, "value", { get: function () { return this.getValue(); }, enumerable: !1, configurable: !0 }), t.prototype._subscribe = function (e) { var o = r.prototype._subscribe.call(this, e); return !o.closed && e.next(this._value), o; }, t.prototype.getValue = function () { var e = this, o = e.hasError, n = e.thrownError, i = e._value; if (o)
    throw n; return this._throwIfClosed(), i; }, t.prototype.next = function (e) { r.prototype.next.call(this, this._value = e); }, t; })(X);
var N = new d(function (r) { return r.complete(); });
function Cr(r) { return r && p(r.schedule); }
function Rr(r) { return r[r.length - 1]; }
function kr(r) { return p(Rr(r)) ? r.pop() : void 0; }
function I(r) { return Cr(Rr(r)) ? r.pop() : void 0; }
var Z = function (r) { return r && typeof r.length == "number" && typeof r != "function"; };
function rr(r) { return p(r?.then); }
function er(r) { return p(r[L]); }
function tr(r) { return Symbol.asyncIterator && p(r?.[Symbol.asyncIterator]); }
function or(r) { return new TypeError("You provided " + (r !== null && typeof r == "object" ? "an invalid object" : "'" + r + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable."); }
function he() { return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator; }
var nr = he();
function ir(r) { return p(r?.[nr]); }
function fr(r) { return gr(this, arguments, function () { var e, o, n, i; return B(this, function (f) { switch (f.label) {
    case 0: e = r.getReader(), f.label = 1;
    case 1: f.trys.push([1, , 9, 10]), f.label = 2;
    case 2: return [4, F(e.read())];
    case 3: return o = f.sent(), n = o.value, i = o.done, i ? [4, F(void 0)] : [3, 5];
    case 4: return [2, f.sent()];
    case 5: return [4, F(n)];
    case 6: return [4, f.sent()];
    case 7: return f.sent(), [3, 2];
    case 8: return [3, 10];
    case 9: return e.releaseLock(), [7];
    case 10: return [2];
} }); }); }
function ur(r) { return p(r?.getReader); }
function y(r) { if (r instanceof d)
    return r; if (r != null) {
    if (er(r))
        return de(r);
    if (Z(r))
        return ve(r);
    if (rr(r))
        return ye(r);
    if (tr(r))
        return Mr(r);
    if (ir(r))
        return xe(r);
    if (ur(r))
        return be(r);
} throw or(r); }
function de(r) { return new d(function (t) { var e = r[L](); if (p(e.subscribe))
    return e.subscribe(t); throw new TypeError("Provided object does not correctly implement Symbol.observable"); }); }
function ve(r) { return new d(function (t) { for (var e = 0; e < r.length && !t.closed; e++)
    t.next(r[e]); t.complete(); }); }
function ye(r) { return new d(function (t) { r.then(function (e) { t.closed || (t.next(e), t.complete()); }, function (e) { return t.error(e); }).then(null, J); }); }
function xe(r) { return new d(function (t) { var e, o; try {
    for (var n = g(r), i = n.next(); !i.done; i = n.next()) {
        var f = i.value;
        if (t.next(f), t.closed)
            return;
    }
}
catch (c) {
    e = { error: c };
}
finally {
    try {
        i && !i.done && (o = n.return) && o.call(n);
    }
    finally {
        if (e)
            throw e.error;
    }
} t.complete(); }); }
function Mr(r) { return new d(function (t) { we(r, t).catch(function (e) { return t.error(e); }); }); }
function be(r) { return Mr(fr(r)); }
function we(r, t) { var e, o, n, i; return Sr(this, void 0, void 0, function () { var f, c; return B(this, function (u) { switch (u.label) {
    case 0: u.trys.push([0, 5, 6, 11]), e = _r(r), u.label = 1;
    case 1: return [4, e.next()];
    case 2:
        if (o = u.sent(), !!o.done)
            return [3, 4];
        if (f = o.value, t.next(f), t.closed)
            return [2];
        u.label = 3;
    case 3: return [3, 1];
    case 4: return [3, 11];
    case 5: return c = u.sent(), n = { error: c }, [3, 11];
    case 6: return u.trys.push([6, , 9, 10]), o && !o.done && (i = e.return) ? [4, i.call(e)] : [3, 8];
    case 7: u.sent(), u.label = 8;
    case 8: return [3, 10];
    case 9:
        if (n)
            throw n.error;
        return [7];
    case 10: return [7];
    case 11: return t.complete(), [2];
} }); }); }
function w(r, t, e, o, n) { o === void 0 && (o = 0), n === void 0 && (n = !1); var i = t.schedule(function () { e(), n ? r.add(this.schedule(null, o)) : this.unsubscribe(); }, o); if (r.add(i), !n)
    return i; }
function ar(r, t) { return t === void 0 && (t = 0), l(function (e, o) { e.subscribe(h(o, function (n) { return w(o, r, function () { return o.next(n); }, t); }, function () { return w(o, r, function () { return o.complete(); }, t); }, function (n) { return w(o, r, function () { return o.error(n); }, t); })); }); }
function cr(r, t) { return t === void 0 && (t = 0), l(function (e, o) { o.add(r.schedule(function () { return e.subscribe(o); }, t)); }); }
function Ur(r, t) { return y(r).pipe(cr(t), ar(t)); }
function Lr(r, t) { return y(r).pipe(cr(t), ar(t)); }
function Dr(r, t) { return new d(function (e) { var o = 0; return t.schedule(function () { o === r.length ? e.complete() : (e.next(r[o++]), e.closed || this.schedule()); }); }); }
function Wr(r, t) { return new d(function (e) { var o; return w(e, t, function () { o = r[nr](), w(e, t, function () { var n, i, f; try {
    n = o.next(), i = n.value, f = n.done;
}
catch (c) {
    e.error(c);
    return;
} f ? e.complete() : e.next(i); }, 0, !0); }), function () { return p(o?.return) && o.return(); }; }); }
function pr(r, t) { if (!r)
    throw new Error("Iterable cannot be null"); return new d(function (e) { w(e, t, function () { var o = r[Symbol.asyncIterator](); w(e, t, function () { o.next().then(function (n) { n.done ? e.complete() : e.next(n.value); }); }, 0, !0); }); }); }
function Vr(r, t) { return pr(fr(r), t); }
function Yr(r, t) { if (r != null) {
    if (er(r))
        return Ur(r, t);
    if (Z(r))
        return Dr(r, t);
    if (rr(r))
        return Lr(r, t);
    if (tr(r))
        return pr(r, t);
    if (ir(r))
        return Wr(r, t);
    if (ur(r))
        return Vr(r, t);
} throw or(r); }
function T(r, t) { return t ? Yr(r, t) : y(r); }
function Se() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = I(r); return T(r, e); }
function ge(r, t) { var e = p(r) ? r : function () { return r; }, o = function (n) { return n.error(e()); }; return new d(t ? function (n) { return t.schedule(o, 0, n); } : o); }
function _e(r) { return !!r && (r instanceof d || p(r.lift) && p(r.subscribe)); }
var G = k(function (r) { return function () { r(this), this.name = "EmptyError", this.message = "no elements in sequence"; }; });
function sr(r, t) { return l(function (e, o) { var n = 0; e.subscribe(h(o, function (i) { o.next(r.call(t, i, n++)); })); }); }
var Oe = Array.isArray;
function Ee(r, t) { return Oe(t) ? r.apply(void 0, P([], A(t))) : r(t); }
function Nr(r) { return sr(function (t) { return Ee(r, t); }); }
var Ae = Array.isArray, Pe = Object.getPrototypeOf, Ie = Object.prototype, Te = Object.keys;
function Gr(r) { if (r.length === 1) {
    var t = r[0];
    if (Ae(t))
        return { args: t, keys: null };
    if (je(t)) {
        var e = Te(t);
        return { args: e.map(function (o) { return t[o]; }), keys: e };
    }
} return { args: r, keys: null }; }
function je(r) { return r && typeof r == "object" && Pe(r) === Ie; }
function qr(r, t) { return r.reduce(function (e, o, n) { return e[o] = t[n], e; }, {}); }
function Fe() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = I(r), o = kr(r), n = Gr(r), i = n.args, f = n.keys; if (i.length === 0)
    return T([], e); var c = new d(Ce(i, e, f ? function (u) { return qr(f, u); } : O)); return o ? c.pipe(Nr(o)) : c; }
function Ce(r, t, e) { return e === void 0 && (e = O), function (o) { zr(t, function () { for (var n = r.length, i = new Array(n), f = n, c = n, u = function (m) { zr(t, function () { var x = T(r[m], t), S = !1; x.subscribe(h(o, function (s) { i[m] = s, S || (S = !0, c--), c || o.next(e(i.slice())); }, function () { --f || o.complete(); })); }, o); }, a = 0; a < n; a++)
    u(a); }, o); }; }
function zr(r, t, e) { r ? w(e, r, t) : t(); }
function Br(r, t, e, o, n, i, f, c) { var u = [], a = 0, m = 0, x = !1, S = function () { x && !u.length && !a && t.complete(); }, s = function (v) { return a < o ? b(v) : u.push(v); }, b = function (v) { i && t.next(v), a++; var q = !1; y(e(v, m++)).subscribe(h(t, function (j) { n?.(j), i ? s(j) : t.next(j); }, function () { q = !0; }, void 0, function () { if (q)
    try {
        a--;
        for (var j = function () { var z = u.shift(); f ? w(t, f, function () { return b(z); }) : b(z); }; u.length && a < o;)
            j();
        S();
    }
    catch (z) {
        t.error(z);
    } })); }; return r.subscribe(h(t, s, function () { x = !0, S(); })), function () { c?.(); }; }
function D(r, t, e) { return e === void 0 && (e = 1 / 0), p(t) ? D(function (o, n) { return sr(function (i, f) { return t(o, i, n, f); })(y(r(o, n))); }, e) : (typeof t == "number" && (e = t), l(function (o, n) { return Br(o, n, r, e); })); }
function Hr(r) { return r === void 0 && (r = 1 / 0), D(O, r); }
function Kr() { return Hr(1); }
function lr() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return Kr()(T(r, I(r))); }
function Re(r) { return new d(function (t) { y(r()).subscribe(t); }); }
function Jr(r, t) { return l(function (e, o) { var n = 0; e.subscribe(h(o, function (i) { return r.call(t, i, n++) && o.next(i); })); }); }
function ke(r) { return l(function (t, e) { var o = null, n = !1, i; o = t.subscribe(h(e, void 0, void 0, function (f) { i = y(r(f, ke(r)(t))), o ? (o.unsubscribe(), o = null, i.subscribe(e)) : n = !0; })), n && (o.unsubscribe(), o = null, i.subscribe(e)); }); }
function Pi(r, t) { return p(t) ? D(r, t, 1) : D(r, 1); }
function $r(r) { return l(function (t, e) { var o = !1; t.subscribe(h(e, function (n) { o = !0, e.next(n); }, function () { o || e.next(r), e.complete(); })); }); }
function Qr(r) { return r <= 0 ? function () { return N; } : l(function (t, e) { var o = 0; t.subscribe(h(e, function (n) { ++o <= r && (e.next(n), r <= o && e.complete()); })); }); }
function Xr(r) { return r === void 0 && (r = Me), l(function (t, e) { var o = !1; t.subscribe(h(e, function (n) { o = !0, e.next(n); }, function () { return o ? e.complete() : e.error(r()); })); }); }
function Me() { return new G; }
function Yi(r) { return l(function (t, e) { try {
    t.subscribe(e);
}
finally {
    e.add(r);
} }); }
function Ji(r, t) { var e = arguments.length >= 2; return function (o) { return o.pipe(r ? Jr(function (n, i) { return r(n, i, o); }) : O, Qr(1), e ? $r(t) : Xr(function () { return new G; })); }; }
function ef(r) { return r <= 0 ? function () { return N; } : l(function (t, e) { var o = []; t.subscribe(h(e, function (n) { o.push(n), r < o.length && o.shift(); }, function () { var n, i; try {
    for (var f = g(o), c = f.next(); !c.done; c = f.next()) {
        var u = c.value;
        e.next(u);
    }
}
catch (a) {
    n = { error: a };
}
finally {
    try {
        c && !c.done && (i = f.return) && i.call(f);
    }
    finally {
        if (n)
            throw n.error;
    }
} e.complete(); }, void 0, function () { o = null; })); }); }
function uf() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = I(r); return l(function (o, n) { (e ? lr(r, o, e) : lr(r, o)).subscribe(n); }); }
function lf(r, t) { return l(function (e, o) { var n = null, i = 0, f = !1, c = function () { return f && !n && o.complete(); }; e.subscribe(h(o, function (u) { n?.unsubscribe(); var a = 0, m = i++; y(r(u, m)).subscribe(n = h(o, function (x) { return o.next(t ? t(u, x, m, a++) : x); }, function () { n = null, c(); })); }, function () { f = !0, c(); })); }); }
function xf(r) { return l(function (t, e) { y(r).subscribe(h(e, function () { return e.complete(); }, V)), !e.closed && t.subscribe(e); }); }
function Of(r, t, e) { var o = p(r) || t || e ? { next: r, error: t, complete: e } : r; return o ? l(function (n, i) { var f; (f = o.subscribe) === null || f === void 0 || f.call(o); var c = !0; n.subscribe(h(i, function (u) { var a; (a = o.next) === null || a === void 0 || a.call(o, u), i.next(u); }, function () { var u; c = !1, (u = o.complete) === null || u === void 0 || u.call(o), i.complete(); }, function (u) { var a; c = !1, (a = o.error) === null || a === void 0 || a.call(o, u), i.error(u); }, function () { var u, a; c && ((u = o.unsubscribe) === null || u === void 0 || u.call(o)), (a = o.finalize) === null || a === void 0 || a.call(o); })); }) : O; }
export { Ue as a, Le as b, De as c, C as d, ae as e, d as f, X as g, me as h, N as i, T as j, Se as k, ge as l, _e as m, G as n, sr as o, Fe as p, D as q, Hr as r, lr as s, Re as t, Jr as u, ke as v, Pi as w, Qr as x, Yi as y, Ji as z, ef as A, uf as B, lf as C, xf as D, Of as E };
