var mr = function (r, t) { return mr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, o) { e.__proto__ = o; } || function (e, o) { for (var n in o)
    Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]); }, mr(r, t); };
function E(r, t) { if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null"); mr(r, t); function e() { this.constructor = r; } r.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e); }
function br(r, t, e, o) { function n(i) { return i instanceof e ? i : new e(function (f) { f(i); }); } return new (e || (e = Promise))(function (i, f) { function a(m) { try {
    u(o.next(m));
}
catch (x) {
    f(x);
} } function c(m) { try {
    u(o.throw(m));
}
catch (x) {
    f(x);
} } function u(m) { m.done ? i(m.value) : n(m.value).then(a, c); } u((o = o.apply(r, t || [])).next()); }); }
function B(r, t) { var e = { label: 0, sent: function () { if (i[0] & 1)
        throw i[1]; return i[1]; }, trys: [], ops: [] }, o, n, i, f = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype); return f.next = a(0), f.throw = a(1), f.return = a(2), typeof Symbol == "function" && (f[Symbol.iterator] = function () { return this; }), f; function a(u) { return function (m) { return c([u, m]); }; } function c(u) { if (o)
    throw new TypeError("Generator is already executing."); for (; f && (f = 0, u[0] && (e = 0)), e;)
    try {
        if (o = 1, n && (i = u[0] & 2 ? n.return : u[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, u[1])).done)
            return i;
        switch (n = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
            case 0:
            case 1:
                i = u;
                break;
            case 4: return e.label++, { value: u[1], done: !1 };
            case 5:
                e.label++, n = u[1], u = [0];
                continue;
            case 7:
                u = e.ops.pop(), e.trys.pop();
                continue;
            default:
                if (i = e.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                    e = 0;
                    continue;
                }
                if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
                    e.label = u[1];
                    break;
                }
                if (u[0] === 6 && e.label < i[1]) {
                    e.label = i[1], i = u;
                    break;
                }
                if (i && e.label < i[2]) {
                    e.label = i[2], e.ops.push(u);
                    break;
                }
                i[2] && e.ops.pop(), e.trys.pop();
                continue;
        }
        u = t.call(r, e);
    }
    catch (m) {
        u = [6, m], n = 0;
    }
    finally {
        o = i = 0;
    } if (u[0] & 5)
    throw u[1]; return { value: u[0] ? u[1] : void 0, done: !0 }; } }
function g(r) { var t = typeof Symbol == "function" && Symbol.iterator, e = t && r[t], o = 0; if (e)
    return e.call(r); if (r && typeof r.length == "number")
    return { next: function () { return r && o >= r.length && (r = void 0), { value: r && r[o++], done: !r }; } }; throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined."); }
function A(r, t) { var e = typeof Symbol == "function" && r[Symbol.iterator]; if (!e)
    return r; var o = e.call(r), n, i = [], f; try {
    for (; (t === void 0 || t-- > 0) && !(n = o.next()).done;)
        i.push(n.value);
}
catch (a) {
    f = { error: a };
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
function wr(r, t, e) { if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined."); var o = e.apply(r, t || []), n, i = []; return n = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", f), n[Symbol.asyncIterator] = function () { return this; }, n; function f(s) { return function (b) { return Promise.resolve(b).then(s, x); }; } function a(s, b) { o[s] && (n[s] = function (v) { return new Promise(function (q, j) { i.push([s, v, q, j]) > 1 || c(s, v); }); }, b && (n[s] = b(n[s]))); } function c(s, b) { try {
    u(o[s](b));
}
catch (v) {
    S(i[0][3], v);
} } function u(s) { s.value instanceof F ? Promise.resolve(s.value.v).then(m, x) : S(i[0][2], s); } function m(s) { c("next", s); } function x(s) { c("throw", s); } function S(s, b) { s(b), i.shift(), i.length && c(i[0][0], i[0][1]); } }
function Sr(r) { if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined."); var t = r[Symbol.asyncIterator], e; return t ? t.call(r) : (r = typeof g == "function" ? g(r) : r[Symbol.iterator](), e = {}, o("next"), o("throw"), o("return"), e[Symbol.asyncIterator] = function () { return this; }, e); function o(i) { e[i] = r[i] && function (f) { return new Promise(function (a, c) { f = r[i](f), n(a, c, f.done, f.value); }); }; } function n(i, f, a, c) { Promise.resolve(c).then(function (u) { i({ value: u, done: a }); }, f); } }
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
                for (var a = g(f), c = a.next(); !c.done; c = a.next()) {
                    var u = c.value;
                    u.remove(this);
                }
            }
            catch (v) {
                t = { error: v };
            }
            finally {
                try {
                    c && !c.done && (e = a.return) && e.call(a);
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
                    gr(b);
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
        gr(t);
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
function gr(r) { p(r) ? r() : r.unsubscribe(); }
function _r(r) { return r && p(r.schedule); }
function Or(r) { return r[r.length - 1]; }
function Er(r) { return p(Or(r)) ? r.pop() : void 0; }
function I(r) { return _r(Or(r)) ? r.pop() : void 0; }
var J = function (r) { return r && typeof r.length == "number" && typeof r != "function"; };
function $(r) { return p(r?.then); }
var _ = { onUnhandledError: null, onStoppedNotification: null, Promise: void 0, useDeprecatedSynchronousErrorHandling: !1, useDeprecatedNextContext: !1 };
var M = { setTimeout: function (r, t) { for (var e = [], o = 2; o < arguments.length; o++)
        e[o - 2] = arguments[o]; var n = M.delegate; return n?.setTimeout ? n.setTimeout.apply(n, P([r, t], A(e))) : setTimeout.apply(void 0, P([r, t], A(e))); }, clearTimeout: function (r) { var t = M.delegate; return (t?.clearTimeout || clearTimeout)(r); }, delegate: void 0 };
function Q(r) { M.setTimeout(function () { var t = _.onUnhandledError; if (t)
    t(r);
else
    throw r; }); }
function V() { }
var Ar = (function () { return dr("C", void 0, void 0); })();
function Pr(r) { return dr("E", void 0, r); }
function Ir(r) { return dr("N", r, void 0); }
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
function Tr(r) { _.useDeprecatedSynchronousErrorHandling && R && (R.errorThrown = !0, R.error = r); }
var Y = (function (r) { E(t, r); function t(e) { var o = r.call(this) || this; return o.isStopped = !1, e ? (o.destination = e, K(e) && e.add(o)) : o.destination = re, o; } return t.create = function (e, o, n) { return new Z(e, o, n); }, t.prototype.next = function (e) { this.isStopped ? yr(Ir(e), this) : this._next(e); }, t.prototype.error = function (e) { this.isStopped ? yr(Pr(e), this) : (this.isStopped = !0, this._error(e)); }, t.prototype.complete = function () { this.isStopped ? yr(Ar, this) : (this.isStopped = !0, this._complete()); }, t.prototype.unsubscribe = function () { this.closed || (this.isStopped = !0, r.prototype.unsubscribe.call(this), this.destination = null); }, t.prototype._next = function (e) { this.destination.next(e); }, t.prototype._error = function (e) { try {
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
var Qr = Function.prototype.bind;
function vr(r, t) { return Qr.call(r, t); }
var Xr = (function () { function r(t) { this.partialObserver = t; } return r.prototype.next = function (t) { var e = this.partialObserver; if (e.next)
    try {
        e.next(t);
    }
    catch (o) {
        X(o);
    } }, r.prototype.error = function (t) { var e = this.partialObserver; if (e.error)
    try {
        e.error(t);
    }
    catch (o) {
        X(o);
    }
else
    X(t); }, r.prototype.complete = function () { var t = this.partialObserver; if (t.complete)
    try {
        t.complete();
    }
    catch (e) {
        X(e);
    } }, r; })(), Z = (function (r) { E(t, r); function t(e, o, n) { var i = r.call(this) || this, f; if (p(e) || !e)
    f = { next: e ?? void 0, error: o ?? void 0, complete: n ?? void 0 };
else {
    var a;
    i && _.useDeprecatedNextContext ? (a = Object.create(e), a.unsubscribe = function () { return i.unsubscribe(); }, f = { next: e.next && vr(e.next, a), error: e.error && vr(e.error, a), complete: e.complete && vr(e.complete, a) }) : f = e;
} return i.destination = new Xr(f), i; } return t; })(Y);
function X(r) { _.useDeprecatedSynchronousErrorHandling ? Tr(r) : Q(r); }
function Zr(r) { throw r; }
function yr(r, t) { var e = _.onStoppedNotification; e && M.setTimeout(function () { return e(r, t); }); }
var re = { closed: !0, next: V, error: Zr, complete: V };
var L = (function () { return typeof Symbol == "function" && Symbol.observable || "@@observable"; })();
function O(r) { return r; }
function ee() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return xr(r); }
function xr(r) { return r.length === 0 ? O : r.length === 1 ? r[0] : function (e) { return r.reduce(function (o, n) { return n(o); }, e); }; }
var d = (function () { function r(t) { t && (this._subscribe = t); } return r.prototype.lift = function (t) { var e = new r; return e.source = this, e.operator = t, e; }, r.prototype.subscribe = function (t, e, o) { var n = this, i = oe(t) ? t : new Z(t, e, o); return U(function () { var f = n, a = f.operator, c = f.source; i.add(a ? a.call(i, c) : c ? n._subscribe(i) : n._trySubscribe(i)); }), i; }, r.prototype._trySubscribe = function (t) { try {
    return this._subscribe(t);
}
catch (e) {
    t.error(e);
} }, r.prototype.forEach = function (t, e) { var o = this; return e = jr(e), new e(function (n, i) { var f = new Z({ next: function (a) { try {
        t(a);
    }
    catch (c) {
        i(c), f.unsubscribe();
    } }, error: i, complete: n }); o.subscribe(f); }); }, r.prototype._subscribe = function (t) { var e; return (e = this.source) === null || e === void 0 ? void 0 : e.subscribe(t); }, r.prototype[L] = function () { return this; }, r.prototype.pipe = function () { for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e]; return xr(t)(this); }, r.prototype.toPromise = function (t) { var e = this; return t = jr(t), new t(function (o, n) { var i; e.subscribe(function (f) { return i = f; }, function (f) { return n(f); }, function () { return o(i); }); }); }, r.create = function (t) { return new r(t); }, r; })();
function jr(r) { var t; return (t = r ?? _.Promise) !== null && t !== void 0 ? t : Promise; }
function te(r) { return r && p(r.next) && p(r.error) && p(r.complete); }
function oe(r) { return r && r instanceof Y || te(r) && K(r); }
function rr(r) { return p(r[L]); }
function er(r) { return Symbol.asyncIterator && p(r?.[Symbol.asyncIterator]); }
function tr(r) { return new TypeError("You provided " + (r !== null && typeof r == "object" ? "an invalid object" : "'" + r + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable."); }
function ne() { return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator; }
var or = ne();
function nr(r) { return p(r?.[or]); }
function ir(r) { return wr(this, arguments, function () { var e, o, n, i; return B(this, function (f) { switch (f.label) {
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
function fr(r) { return p(r?.getReader); }
function y(r) { if (r instanceof d)
    return r; if (r != null) {
    if (rr(r))
        return ie(r);
    if (J(r))
        return fe(r);
    if ($(r))
        return ue(r);
    if (er(r))
        return Fr(r);
    if (nr(r))
        return ae(r);
    if (fr(r))
        return ce(r);
} throw tr(r); }
function ie(r) { return new d(function (t) { var e = r[L](); if (p(e.subscribe))
    return e.subscribe(t); throw new TypeError("Provided object does not correctly implement Symbol.observable"); }); }
function fe(r) { return new d(function (t) { for (var e = 0; e < r.length && !t.closed; e++)
    t.next(r[e]); t.complete(); }); }
function ue(r) { return new d(function (t) { r.then(function (e) { t.closed || (t.next(e), t.complete()); }, function (e) { return t.error(e); }).then(null, Q); }); }
function ae(r) { return new d(function (t) { var e, o; try {
    for (var n = g(r), i = n.next(); !i.done; i = n.next()) {
        var f = i.value;
        if (t.next(f), t.closed)
            return;
    }
}
catch (a) {
    e = { error: a };
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
function Fr(r) { return new d(function (t) { pe(r, t).catch(function (e) { return t.error(e); }); }); }
function ce(r) { return Fr(ir(r)); }
function pe(r, t) { var e, o, n, i; return br(this, void 0, void 0, function () { var f, a; return B(this, function (c) { switch (c.label) {
    case 0: c.trys.push([0, 5, 6, 11]), e = Sr(r), c.label = 1;
    case 1: return [4, e.next()];
    case 2:
        if (o = c.sent(), !!o.done)
            return [3, 4];
        if (f = o.value, t.next(f), t.closed)
            return [2];
        c.label = 3;
    case 3: return [3, 1];
    case 4: return [3, 11];
    case 5: return a = c.sent(), n = { error: a }, [3, 11];
    case 6: return c.trys.push([6, , 9, 10]), o && !o.done && (i = e.return) ? [4, i.call(e)] : [3, 8];
    case 7: c.sent(), c.label = 8;
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
function se(r) { return p(r?.lift); }
function l(r) { return function (t) { if (se(t))
    return t.lift(function (e) { try {
        return r(e, this);
    }
    catch (o) {
        this.error(o);
    } }); throw new TypeError("Unable to lift unknown Observable type"); }; }
function h(r, t, e, o, n) { return new le(r, t, e, o, n); }
var le = (function (r) { E(t, r); function t(e, o, n, i, f, a) { var c = r.call(this, e) || this; return c.onFinalize = f, c.shouldUnsubscribe = a, c._next = o ? function (u) { try {
    o(u);
}
catch (m) {
    e.error(m);
} } : r.prototype._next, c._error = i ? function (u) { try {
    i(u);
}
catch (m) {
    e.error(m);
}
finally {
    this.unsubscribe();
} } : r.prototype._error, c._complete = n ? function () { try {
    n();
}
catch (u) {
    e.error(u);
}
finally {
    this.unsubscribe();
} } : r.prototype._complete, c; } return t.prototype.unsubscribe = function () { var e; if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
    var o = this.closed;
    r.prototype.unsubscribe.call(this), !o && ((e = this.onFinalize) === null || e === void 0 || e.call(this));
} }, t; })(Y);
function ur(r, t) { return t === void 0 && (t = 0), l(function (e, o) { e.subscribe(h(o, function (n) { return w(o, r, function () { return o.next(n); }, t); }, function () { return w(o, r, function () { return o.complete(); }, t); }, function (n) { return w(o, r, function () { return o.error(n); }, t); })); }); }
function ar(r, t) { return t === void 0 && (t = 0), l(function (e, o) { o.add(r.schedule(function () { return e.subscribe(o); }, t)); }); }
function Cr(r, t) { return y(r).pipe(ar(t), ur(t)); }
function Rr(r, t) { return y(r).pipe(ar(t), ur(t)); }
function kr(r, t) { return new d(function (e) { var o = 0; return t.schedule(function () { o === r.length ? e.complete() : (e.next(r[o++]), e.closed || this.schedule()); }); }); }
function Mr(r, t) { return new d(function (e) { var o; return w(e, t, function () { o = r[or](), w(e, t, function () { var n, i, f; try {
    n = o.next(), i = n.value, f = n.done;
}
catch (a) {
    e.error(a);
    return;
} f ? e.complete() : e.next(i); }, 0, !0); }), function () { return p(o?.return) && o.return(); }; }); }
function cr(r, t) { if (!r)
    throw new Error("Iterable cannot be null"); return new d(function (e) { w(e, t, function () { var o = r[Symbol.asyncIterator](); w(e, t, function () { o.next().then(function (n) { n.done ? e.complete() : e.next(n.value); }); }, 0, !0); }); }); }
function Ur(r, t) { return cr(ir(r), t); }
function Lr(r, t) { if (r != null) {
    if (rr(r))
        return Cr(r, t);
    if (J(r))
        return kr(r, t);
    if ($(r))
        return Rr(r, t);
    if (er(r))
        return cr(r, t);
    if (nr(r))
        return Mr(r, t);
    if (fr(r))
        return Ur(r, t);
} throw tr(r); }
function T(r, t) { return t ? Lr(r, t) : y(r); }
function me() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = I(r); return T(r, e); }
function tn(r, t, e) { var o = p(r) || t || e ? { next: r, error: t, complete: e } : r; return o ? l(function (n, i) { var f; (f = o.subscribe) === null || f === void 0 || f.call(o); var a = !0; n.subscribe(h(i, function (c) { var u; (u = o.next) === null || u === void 0 || u.call(o, c), i.next(c); }, function () { var c; a = !1, (c = o.complete) === null || c === void 0 || c.call(o), i.complete(); }, function (c) { var u; a = !1, (u = o.error) === null || u === void 0 || u.call(o, c), i.error(c); }, function () { var c, u; a && ((c = o.unsubscribe) === null || c === void 0 || c.call(o)), (u = o.finalize) === null || u === void 0 || u.call(o); })); }) : O; }
var Dr = k(function (r) { return function () { r(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"; }; });
var pr = (function (r) { E(t, r); function t() { var e = r.call(this) || this; return e.closed = !1, e.currentObservers = null, e.observers = [], e.isStopped = !1, e.hasError = !1, e.thrownError = null, e; } return t.prototype.lift = function (e) { var o = new Wr(this, this); return o.operator = e, o; }, t.prototype._throwIfClosed = function () { if (this.closed)
    throw new Dr; }, t.prototype.next = function (e) { var o = this; U(function () { var n, i; if (o._throwIfClosed(), !o.isStopped) {
    o.currentObservers || (o.currentObservers = Array.from(o.observers));
    try {
        for (var f = g(o.currentObservers), a = f.next(); !a.done; a = f.next()) {
            var c = a.value;
            c.next(e);
        }
    }
    catch (u) {
        n = { error: u };
    }
    finally {
        try {
            a && !a.done && (i = f.return) && i.call(f);
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
} }); }, t.prototype.unsubscribe = function () { this.isStopped = this.closed = !0, this.observers = this.currentObservers = null; }, Object.defineProperty(t.prototype, "observed", { get: function () { var e; return ((e = this.observers) === null || e === void 0 ? void 0 : e.length) > 0; }, enumerable: !1, configurable: !0 }), t.prototype._trySubscribe = function (e) { return this._throwIfClosed(), r.prototype._trySubscribe.call(this, e); }, t.prototype._subscribe = function (e) { return this._throwIfClosed(), this._checkFinalizedStatuses(e), this._innerSubscribe(e); }, t.prototype._innerSubscribe = function (e) { var o = this, n = this, i = n.hasError, f = n.isStopped, a = n.observers; return i || f ? hr : (this.currentObservers = null, a.push(e), new C(function () { o.currentObservers = null, W(a, e); })); }, t.prototype._checkFinalizedStatuses = function (e) { var o = this, n = o.hasError, i = o.thrownError, f = o.isStopped; n ? e.error(i) : f && e.complete(); }, t.prototype.asObservable = function () { var e = new d; return e.source = this, e; }, t.create = function (e, o) { return new Wr(e, o); }, t; })(d);
var Wr = (function (r) { E(t, r); function t(e, o) { var n = r.call(this) || this; return n.destination = e, n.source = o, n; } return t.prototype.next = function (e) { var o, n; (n = (o = this.destination) === null || o === void 0 ? void 0 : o.next) === null || n === void 0 || n.call(o, e); }, t.prototype.error = function (e) { var o, n; (n = (o = this.destination) === null || o === void 0 ? void 0 : o.error) === null || n === void 0 || n.call(o, e); }, t.prototype.complete = function () { var e, o; (o = (e = this.destination) === null || e === void 0 ? void 0 : e.complete) === null || o === void 0 || o.call(e); }, t.prototype._subscribe = function (e) { var o, n; return (n = (o = this.source) === null || o === void 0 ? void 0 : o.subscribe(e)) !== null && n !== void 0 ? n : hr; }, t; })(pr);
var he = (function (r) { E(t, r); function t(e) { var o = r.call(this) || this; return o._value = e, o; } return Object.defineProperty(t.prototype, "value", { get: function () { return this.getValue(); }, enumerable: !1, configurable: !0 }), t.prototype._subscribe = function (e) { var o = r.prototype._subscribe.call(this, e); return !o.closed && e.next(this._value), o; }, t.prototype.getValue = function () { var e = this, o = e.hasError, n = e.thrownError, i = e._value; if (o)
    throw n; return this._throwIfClosed(), i; }, t.prototype.next = function (e) { r.prototype.next.call(this, this._value = e); }, t; })(pr);
var N = new d(function (r) { return r.complete(); });
function de(r, t) { var e = p(r) ? r : function () { return r; }, o = function (n) { return n.error(e()); }; return new d(t ? function (n) { return t.schedule(o, 0, n); } : o); }
function ve(r) { return !!r && (r instanceof d || p(r.lift) && p(r.subscribe)); }
var G = k(function (r) { return function () { r(this), this.name = "EmptyError", this.message = "no elements in sequence"; }; });
function sr(r, t) { return l(function (e, o) { var n = 0; e.subscribe(h(o, function (i) { o.next(r.call(t, i, n++)); })); }); }
var ye = Array.isArray;
function xe(r, t) { return ye(t) ? r.apply(void 0, P([], A(t))) : r(t); }
function Vr(r) { return sr(function (t) { return xe(r, t); }); }
var be = Array.isArray, we = Object.getPrototypeOf, Se = Object.prototype, ge = Object.keys;
function Yr(r) { if (r.length === 1) {
    var t = r[0];
    if (be(t))
        return { args: t, keys: null };
    if (_e(t)) {
        var e = ge(t);
        return { args: e.map(function (o) { return t[o]; }), keys: e };
    }
} return { args: r, keys: null }; }
function _e(r) { return r && typeof r == "object" && we(r) === Se; }
function Nr(r, t) { return r.reduce(function (e, o, n) { return e[o] = t[n], e; }, {}); }
function Oe() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = I(r), o = Er(r), n = Yr(r), i = n.args, f = n.keys; if (i.length === 0)
    return T([], e); var a = new d(Ee(i, e, f ? function (c) { return Nr(f, c); } : O)); return o ? a.pipe(Vr(o)) : a; }
function Ee(r, t, e) { return e === void 0 && (e = O), function (o) { Gr(t, function () { for (var n = r.length, i = new Array(n), f = n, a = n, c = function (m) { Gr(t, function () { var x = T(r[m], t), S = !1; x.subscribe(h(o, function (s) { i[m] = s, S || (S = !0, a--), a || o.next(e(i.slice())); }, function () { --f || o.complete(); })); }, o); }, u = 0; u < n; u++)
    c(u); }, o); }; }
function Gr(r, t, e) { r ? w(e, r, t) : t(); }
function qr(r, t, e, o, n, i, f, a) { var c = [], u = 0, m = 0, x = !1, S = function () { x && !c.length && !u && t.complete(); }, s = function (v) { return u < o ? b(v) : c.push(v); }, b = function (v) { i && t.next(v), u++; var q = !1; y(e(v, m++)).subscribe(h(t, function (j) { n?.(j), i ? s(j) : t.next(j); }, function () { q = !0; }, void 0, function () { if (q)
    try {
        u--;
        for (var j = function () { var z = c.shift(); f ? w(t, f, function () { return b(z); }) : b(z); }; c.length && u < o;)
            j();
        S();
    }
    catch (z) {
        t.error(z);
    } })); }; return r.subscribe(h(t, s, function () { x = !0, S(); })), function () { a?.(); }; }
function D(r, t, e) { return e === void 0 && (e = 1 / 0), p(t) ? D(function (o, n) { return sr(function (i, f) { return t(o, i, n, f); })(y(r(o, n))); }, e) : (typeof t == "number" && (e = t), l(function (o, n) { return qr(o, n, r, e); })); }
function zr(r) { return r === void 0 && (r = 1 / 0), D(O, r); }
function Br() { return zr(1); }
function lr() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return Br()(T(r, I(r))); }
function Ae(r) { return new d(function (t) { y(r()).subscribe(t); }); }
function Hr(r, t) { return l(function (e, o) { var n = 0; e.subscribe(h(o, function (i) { return r.call(t, i, n++) && o.next(i); })); }); }
function Pe(r) { return l(function (t, e) { var o = null, n = !1, i; o = t.subscribe(h(e, void 0, void 0, function (f) { i = y(r(f, Pe(r)(t))), o ? (o.unsubscribe(), o = null, i.subscribe(e)) : n = !0; })), n && (o.unsubscribe(), o = null, i.subscribe(e)); }); }
function gi(r, t) { return p(t) ? D(r, t, 1) : D(r, 1); }
function Kr(r) { return l(function (t, e) { var o = !1; t.subscribe(h(e, function (n) { o = !0, e.next(n); }, function () { o || e.next(r), e.complete(); })); }); }
function Jr(r) { return r <= 0 ? function () { return N; } : l(function (t, e) { var o = 0; t.subscribe(h(e, function (n) { ++o <= r && (e.next(n), r <= o && e.complete()); })); }); }
function $r(r) { return r === void 0 && (r = Ie), l(function (t, e) { var o = !1; t.subscribe(h(e, function (n) { o = !0, e.next(n); }, function () { return o ? e.complete() : e.error(r()); })); }); }
function Ie() { return new G; }
function Ui(r) { return l(function (t, e) { try {
    t.subscribe(e);
}
finally {
    e.add(r);
} }); }
function qi(r, t) { var e = arguments.length >= 2; return function (o) { return o.pipe(r ? Hr(function (n, i) { return r(n, i, o); }) : O, Jr(1), e ? Kr(t) : $r(function () { return new G; })); }; }
function $i(r) { return r <= 0 ? function () { return N; } : l(function (t, e) { var o = []; t.subscribe(h(e, function (n) { o.push(n), r < o.length && o.shift(); }, function () { var n, i; try {
    for (var f = g(o), a = f.next(); !a.done; a = f.next()) {
        var c = a.value;
        e.next(c);
    }
}
catch (u) {
    n = { error: u };
}
finally {
    try {
        a && !a.done && (i = f.return) && i.call(f);
    }
    finally {
        if (n)
            throw n.error;
    }
} e.complete(); }, void 0, function () { o = null; })); }); }
function ef() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = I(r); return l(function (o, n) { (e ? lr(r, o, e) : lr(r, o)).subscribe(n); }); }
function uf(r, t) { return l(function (e, o) { var n = null, i = 0, f = !1, a = function () { return f && !n && o.complete(); }; e.subscribe(h(o, function (c) { n?.unsubscribe(); var u = 0, m = i++; y(r(c, m)).subscribe(n = h(o, function (x) { return o.next(t ? t(c, x, m, u++) : x); }, function () { n = null, a(); })); }, function () { f = !0, a(); })); }); }
function mf(r) { return l(function (t, e) { y(r).subscribe(h(e, function () { return e.complete(); }, V)), !e.closed && t.subscribe(e); }); }
export { C as a, ee as b, d as c, pr as d, he as e, N as f, T as g, me as h, de as i, ve as j, G as k, sr as l, Oe as m, D as n, zr as o, lr as p, Ae as q, Hr as r, Pe as s, gi as t, Jr as u, Ui as v, qi as w, $i as x, ef as y, uf as z, mf as A, tn as B };
