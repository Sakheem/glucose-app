function d(r) { return typeof r == "function"; }
function Ke(r) { return d(r?.lift); }
function p(r) { return e => { if (Ke(e))
    return e.lift(function (t) { try {
        return r(t, this);
    }
    catch (o) {
        this.error(o);
    } }); throw new TypeError("Unable to lift unknown Observable type"); }; }
import { __asyncValues as ft, __awaiter as pt } from "tslib";
var be = r => r && typeof r.length == "number" && typeof r != "function";
function ye(r) { return d(r?.then); }
function R(r) { let t = r(o => { Error.call(o), o.stack = new Error().stack; }); return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t; }
var ve = R(r => function (t) {
    r(this), this.message = t ? `${t.length} errors occurred during unsubscription:
${t.map((o, n) => `${n + 1}) ${o.toString()}`).join(`
  `)}` : "", this.name = "UnsubscriptionError", this.errors = t;
});
function F(r, e) { if (r) {
    let t = r.indexOf(e);
    0 <= t && r.splice(t, 1);
} }
var I = class r {
    constructor(e) { this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null; }
    unsubscribe() { let e; if (!this.closed) {
        this.closed = !0;
        let { _parentage: t } = this;
        if (t)
            if (this._parentage = null, Array.isArray(t))
                for (let i of t)
                    i.remove(this);
            else
                t.remove(this);
        let { initialTeardown: o } = this;
        if (d(o))
            try {
                o();
            }
            catch (i) {
                e = i instanceof ve ? i.errors : [i];
            }
        let { _finalizers: n } = this;
        if (n) {
            this._finalizers = null;
            for (let i of n)
                try {
                    Ir(i);
                }
                catch (s) {
                    e = e ?? [], s instanceof ve ? e = [...e, ...s.errors] : e.push(s);
                }
        }
        if (e)
            throw new ve(e);
    } }
    add(e) { var t; if (e && e !== this)
        if (this.closed)
            Ir(e);
        else {
            if (e instanceof r) {
                if (e.closed || e._hasParent(this))
                    return;
                e._addParent(this);
            }
            (this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(e);
        } }
    _hasParent(e) { let { _parentage: t } = this; return t === e || Array.isArray(t) && t.includes(e); }
    _addParent(e) { let { _parentage: t } = this; this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e; }
    _removeParent(e) { let { _parentage: t } = this; t === e ? this._parentage = null : Array.isArray(t) && F(t, e); }
    remove(e) { let { _finalizers: t } = this; t && F(t, e), e instanceof r && e._removeParent(this); }
};
I.EMPTY = (() => { let r = new I; return r.closed = !0, r; })();
var Ze = I.EMPTY;
function we(r) { return r instanceof I || r && "closed" in r && d(r.remove) && d(r.add) && d(r.unsubscribe); }
function Ir(r) { d(r) ? r() : r.unsubscribe(); }
var L = { onUnhandledError: null, onStoppedNotification: null, Promise: void 0, useDeprecatedSynchronousErrorHandling: !1, useDeprecatedNextContext: !1 };
var te = { setTimeout(r, e, ...t) { let { delegate: o } = te; return o?.setTimeout ? o.setTimeout(r, e, ...t) : setTimeout(r, e, ...t); }, clearTimeout(r) { let { delegate: e } = te; return (e?.clearTimeout || clearTimeout)(r); }, delegate: void 0 };
function Se(r) { te.setTimeout(() => { let { onUnhandledError: e } = L; if (e)
    e(r);
else
    throw r; }); }
function S() { }
var Ar = Je("C", void 0, void 0);
function Tr(r) { return Je("E", void 0, r); }
function Fr(r) { return Je("N", r, void 0); }
function Je(r, e, t) { return { kind: r, value: e, error: t }; }
var Z = null;
function oe(r) { if (L.useDeprecatedSynchronousErrorHandling) {
    let e = !Z;
    if (e && (Z = { errorThrown: !1, error: null }), r(), e) {
        let { errorThrown: t, error: o } = Z;
        if (Z = null, t)
            throw o;
    }
}
else
    r(); }
function Cr(r) { L.useDeprecatedSynchronousErrorHandling && Z && (Z.errorThrown = !0, Z.error = r); }
var J = class extends I {
    constructor(e) { super(), this.isStopped = !1, e ? (this.destination = e, we(e) && e.add(this)) : this.destination = ot; }
    static create(e, t, o) { return new z(e, t, o); }
    next(e) { this.isStopped ? He(Fr(e), this) : this._next(e); }
    error(e) { this.isStopped ? He(Tr(e), this) : (this.isStopped = !0, this._error(e)); }
    complete() { this.isStopped ? He(Ar, this) : (this.isStopped = !0, this._complete()); }
    unsubscribe() { this.closed || (this.isStopped = !0, super.unsubscribe(), this.destination = null); }
    _next(e) { this.destination.next(e); }
    _error(e) { try {
        this.destination.error(e);
    }
    finally {
        this.unsubscribe();
    } }
    _complete() { try {
        this.destination.complete();
    }
    finally {
        this.unsubscribe();
    } }
}, rt = Function.prototype.bind;
function Xe(r, e) { return rt.call(r, e); }
var Qe = class {
    constructor(e) { this.partialObserver = e; }
    next(e) { let { partialObserver: t } = this; if (t.next)
        try {
            t.next(e);
        }
        catch (o) {
            _e(o);
        } }
    error(e) { let { partialObserver: t } = this; if (t.error)
        try {
            t.error(e);
        }
        catch (o) {
            _e(o);
        }
    else
        _e(e); }
    complete() { let { partialObserver: e } = this; if (e.complete)
        try {
            e.complete();
        }
        catch (t) {
            _e(t);
        } }
}, z = class extends J {
    constructor(e, t, o) { super(); let n; if (d(e) || !e)
        n = { next: e ?? void 0, error: t ?? void 0, complete: o ?? void 0 };
    else {
        let i;
        this && L.useDeprecatedNextContext ? (i = Object.create(e), i.unsubscribe = () => this.unsubscribe(), n = { next: e.next && Xe(e.next, i), error: e.error && Xe(e.error, i), complete: e.complete && Xe(e.complete, i) }) : n = e;
    } this.destination = new Qe(n); }
};
function _e(r) { L.useDeprecatedSynchronousErrorHandling ? Cr(r) : Se(r); }
function tt(r) { throw r; }
function He(r, e) { let { onStoppedNotification: t } = L; t && te.setTimeout(() => t(r, e)); }
var ot = { closed: !0, next: S, error: tt, complete: S };
var ne = typeof Symbol == "function" && Symbol.observable || "@@observable";
function g(r) { return r; }
function ge(...r) { return er(r); }
function er(r) { return r.length === 0 ? g : r.length === 1 ? r[0] : function (t) { return r.reduce((o, n) => n(o), t); }; }
var w = (() => { class r {
    constructor(t) { t && (this._subscribe = t); }
    lift(t) { let o = new r; return o.source = this, o.operator = t, o; }
    subscribe(t, o, n) { let i = it(t) ? t : new z(t, o, n); return oe(() => { let { operator: s, source: f } = this; i.add(s ? s.call(i, f) : f ? this._subscribe(i) : this._trySubscribe(i)); }), i; }
    _trySubscribe(t) { try {
        return this._subscribe(t);
    }
    catch (o) {
        t.error(o);
    } }
    forEach(t, o) { return o = kr(o), new o((n, i) => { let s = new z({ next: f => { try {
            t(f);
        }
        catch (m) {
            i(m), s.unsubscribe();
        } }, error: i, complete: n }); this.subscribe(s); }); }
    _subscribe(t) { var o; return (o = this.source) === null || o === void 0 ? void 0 : o.subscribe(t); }
    [ne]() { return this; }
    pipe(...t) { return er(t)(this); }
    toPromise(t) { return t = kr(t), new t((o, n) => { let i; this.subscribe(s => i = s, s => n(s), () => o(i)); }); }
} return r.create = e => new r(e), r; })();
function kr(r) { var e; return (e = r ?? L.Promise) !== null && e !== void 0 ? e : Promise; }
function nt(r) { return r && d(r.next) && d(r.error) && d(r.complete); }
function it(r) { return r && r instanceof J || nt(r) && we(r); }
function Ee(r) { return d(r[ne]); }
function Oe(r) { return Symbol.asyncIterator && d(r?.[Symbol.asyncIterator]); }
function Ie(r) { return new TypeError(`You provided ${r !== null && typeof r == "object" ? "an invalid object" : `'${r}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`); }
function st() { return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator; }
var Ae = st();
function Te(r) { return d(r?.[Ae]); }
import { __asyncGenerator as mt, __await as rr } from "tslib";
function Fe(r) { return mt(this, arguments, function* () { let t = r.getReader(); try {
    for (;;) {
        let { value: o, done: n } = yield rr(t.read());
        if (n)
            return yield rr(void 0);
        yield yield rr(o);
    }
}
finally {
    t.releaseLock();
} }); }
function Ce(r) { return d(r?.getReader); }
function c(r) { if (r instanceof w)
    return r; if (r != null) {
    if (Ee(r))
        return lt(r);
    if (be(r))
        return ut(r);
    if (ye(r))
        return ct(r);
    if (Oe(r))
        return Rr(r);
    if (Te(r))
        return at(r);
    if (Ce(r))
        return dt(r);
} throw Ie(r); }
function lt(r) { return new w(e => { let t = r[ne](); if (d(t.subscribe))
    return t.subscribe(e); throw new TypeError("Provided object does not correctly implement Symbol.observable"); }); }
function ut(r) { return new w(e => { for (let t = 0; t < r.length && !e.closed; t++)
    e.next(r[t]); e.complete(); }); }
function ct(r) { return new w(e => { r.then(t => { e.closed || (e.next(t), e.complete()); }, t => e.error(t)).then(null, Se); }); }
function at(r) { return new w(e => { for (let t of r)
    if (e.next(t), e.closed)
        return; e.complete(); }); }
function Rr(r) { return new w(e => { ht(r, e).catch(t => e.error(t)); }); }
function dt(r) { return Rr(Fe(r)); }
function ht(r, e) { var t, o, n, i; return pt(this, void 0, void 0, function* () { try {
    for (t = ft(r); o = yield t.next(), !o.done;) {
        let s = o.value;
        if (e.next(s), e.closed)
            return;
    }
}
catch (s) {
    n = { error: s };
}
finally {
    try {
        o && !o.done && (i = t.return) && (yield i.call(t));
    }
    finally {
        if (n)
            throw n.error;
    }
} e.complete(); }); }
function l(r, e, t, o, n) { return new X(r, e, t, o, n); }
var X = class extends J {
    constructor(e, t, o, n, i, s) { super(e), this.onFinalize = i, this.shouldUnsubscribe = s, this._next = t ? function (f) { try {
        t(f);
    }
    catch (m) {
        e.error(m);
    } } : super._next, this._error = n ? function (f) { try {
        n(f);
    }
    catch (m) {
        e.error(m);
    }
    finally {
        this.unsubscribe();
    } } : super._error, this._complete = o ? function () { try {
        o();
    }
    catch (f) {
        e.error(f);
    }
    finally {
        this.unsubscribe();
    } } : super._complete; }
    unsubscribe() { var e; if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
        let { closed: t } = this;
        super.unsubscribe(), !t && ((e = this.onFinalize) === null || e === void 0 || e.call(this));
    } }
};
function tr(r) { return p((e, t) => { let o = !1, n = null, i = null, s = !1, f = () => { if (i?.unsubscribe(), i = null, o) {
    o = !1;
    let u = n;
    n = null, t.next(u);
} s && t.complete(); }, m = () => { i = null, s && t.complete(); }; e.subscribe(l(t, u => { o = !0, n = u, i || c(r(u)).subscribe(i = l(t, f, m)); }, () => { s = !0, (!o || !i || i.closed) && t.complete(); })); }); }
var ke = class extends I {
    constructor(e, t) { super(); }
    schedule(e, t = 0) { return this; }
};
var le = { setInterval(r, e, ...t) { let { delegate: o } = le; return o?.setInterval ? o.setInterval(r, e, ...t) : setInterval(r, e, ...t); }, clearInterval(r) { let { delegate: e } = le; return (e?.clearInterval || clearInterval)(r); }, delegate: void 0 };
var Re = class extends ke {
    constructor(e, t) { super(e, t), this.scheduler = e, this.work = t, this.pending = !1; }
    schedule(e, t = 0) { var o; if (this.closed)
        return this; this.state = e; let n = this.id, i = this.scheduler; return n != null && (this.id = this.recycleAsyncId(i, n, t)), this.pending = !0, this.delay = t, this.id = (o = this.id) !== null && o !== void 0 ? o : this.requestAsyncId(i, this.id, t), this; }
    requestAsyncId(e, t, o = 0) { return le.setInterval(e.flush.bind(e, this), o); }
    recycleAsyncId(e, t, o = 0) { if (o != null && this.delay === o && this.pending === !1)
        return t; t != null && le.clearInterval(t); }
    execute(e, t) { if (this.closed)
        return new Error("executing a cancelled action"); this.pending = !1; let o = this._execute(e, t); if (o)
        return o; this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null)); }
    _execute(e, t) { let o = !1, n; try {
        this.work(e);
    }
    catch (i) {
        o = !0, n = i || new Error("Scheduled action threw falsy error");
    } if (o)
        return this.unsubscribe(), n; }
    unsubscribe() { if (!this.closed) {
        let { id: e, scheduler: t } = this, { actions: o } = t;
        this.work = this.state = this.scheduler = null, this.pending = !1, F(o, this), e != null && (this.id = this.recycleAsyncId(t, e, null)), this.delay = null, super.unsubscribe();
    } }
};
var H = { now() { return (H.delegate || Date).now(); }, delegate: void 0 };
var ie = class r {
    constructor(e, t = r.now) { this.schedulerActionCtor = e, this.now = t; }
    schedule(e, t = 0, o) { return new this.schedulerActionCtor(this, e).schedule(o, t); }
};
ie.now = H.now;
var Pe = class extends ie {
    constructor(e, t = ie.now) { super(e, t), this.actions = [], this._active = !1; }
    flush(e) { let { actions: t } = this; if (this._active) {
        t.push(e);
        return;
    } let o; this._active = !0; do
        if (o = e.execute(e.state, e.delay))
            break;
    while (e = t.shift()); if (this._active = !1, o) {
        for (; e = t.shift();)
            e.unsubscribe();
        throw o;
    } }
};
var T = new Pe(Re), Me = T;
function je(r) { return r && d(r.schedule); }
function se(r) { return r instanceof Date && !isNaN(r); }
function M(r = 0, e, t = Me) { let o = -1; return e != null && (je(e) ? t = e : o = e), new w(n => { let i = se(r) ? +r - t.now() : r; i < 0 && (i = 0); let s = 0; return t.schedule(function () { n.closed || (n.next(s++), 0 <= o ? this.schedule(void 0, o) : n.complete()); }, i); }); }
function xt(r, e = T) { return tr(() => M(r, e)); }
function bt(r) { return p((e, t) => { let o = []; return e.subscribe(l(t, n => o.push(n), () => { t.next(o), t.complete(); })), c(r).subscribe(l(t, () => { let n = o; o = [], t.next(n); }, S)), () => { o = null; }; }); }
function yt(r, e = null) { return e = e ?? r, p((t, o) => { let n = [], i = 0; t.subscribe(l(o, s => { let f = null; i++ % e === 0 && n.push([]); for (let m of n)
    m.push(s), r <= m.length && (f = f ?? [], f.push(m)); if (f)
    for (let m of f)
        F(n, m), o.next(m); }, () => { for (let s of n)
    o.next(s); o.complete(); }, void 0, () => { n = null; })); }); }
function or(r) { return r[r.length - 1]; }
function Y(r) { return d(or(r)) ? r.pop() : void 0; }
function C(r) { return je(or(r)) ? r.pop() : void 0; }
function Pr(r, e) { return typeof or(r) == "number" ? r.pop() : e; }
function A(r, e, t, o = 0, n = !1) { let i = e.schedule(function () { t(), n ? r.add(this.schedule(null, o)) : this.unsubscribe(); }, o); if (r.add(i), !n)
    return i; }
function vt(r, ...e) { var t, o; let n = (t = C(e)) !== null && t !== void 0 ? t : T, i = (o = e[0]) !== null && o !== void 0 ? o : null, s = e[1] || 1 / 0; return p((f, m) => { let u = [], a = !1, b = x => { let { buffer: h, subs: y } = x; y.unsubscribe(), F(u, x), m.next(h), a && v(); }, v = () => { if (u) {
    let x = new I;
    m.add(x);
    let y = { buffer: [], subs: x };
    u.push(y), A(x, n, () => b(y), r);
} }; i !== null && i >= 0 ? A(m, n, v, i, !0) : a = !0, v(); let E = l(m, x => { let h = u.slice(); for (let y of h) {
    let { buffer: O } = y;
    O.push(x), s <= O.length && b(y);
} }, () => { for (; u?.length;)
    m.next(u.shift().buffer); E?.unsubscribe(), m.complete(), m.unsubscribe(); }, void 0, () => u = null); f.subscribe(E); }); }
function wt(r, e) { return p((t, o) => { let n = []; c(r).subscribe(l(o, i => { let s = []; n.push(s); let f = new I, m = () => { F(n, s), o.next(s), f.unsubscribe(); }; f.add(c(e(i)).subscribe(l(o, m, S))); }, S)), t.subscribe(l(o, i => { for (let s of n)
    s.push(i); }, () => { for (; n.length > 0;)
    o.next(n.shift()); o.complete(); })); }); }
function St(r) { return p((e, t) => { let o = null, n = null, i = () => { n?.unsubscribe(); let s = o; o = [], s && t.next(s), c(r()).subscribe(n = l(t, i, S)); }; i(), e.subscribe(l(t, s => o?.push(s), () => { o && t.next(o), t.complete(); }, void 0, () => o = n = null)); }); }
function Mr(r) { return p((e, t) => { let o = null, n = !1, i; o = e.subscribe(l(t, void 0, void 0, s => { i = c(r(s, Mr(r)(e))), o ? (o.unsubscribe(), o = null, i.subscribe(t)) : n = !0; })), n && (o.unsubscribe(), o = null, i.subscribe(t)); }); }
var { isArray: _t } = Array, { getPrototypeOf: gt, prototype: Et, keys: Ot } = Object;
function jr(r) { if (r.length === 1) {
    let e = r[0];
    if (_t(e))
        return { args: e, keys: null };
    if (It(e)) {
        let t = Ot(e);
        return { args: t.map(o => e[o]), keys: t };
    }
} return { args: r, keys: null }; }
function It(r) { return r && typeof r == "object" && gt(r) === Et; }
function ue(r, e = 0) { return p((t, o) => { t.subscribe(l(o, n => A(o, r, () => o.next(n), e), () => A(o, r, () => o.complete(), e), n => A(o, r, () => o.error(n), e))); }); }
function ce(r, e = 0) { return p((t, o) => { o.add(r.schedule(() => t.subscribe(o), e)); }); }
function Wr(r, e) { return c(r).pipe(ce(e), ue(e)); }
function Lr(r, e) { return c(r).pipe(ce(e), ue(e)); }
function Ur(r, e) { return new w(t => { let o = 0; return e.schedule(function () { o === r.length ? t.complete() : (t.next(r[o++]), t.closed || this.schedule()); }); }); }
function Vr(r, e) { return new w(t => { let o; return A(t, e, () => { o = r[Ae](), A(t, e, () => { let n, i; try {
    ({ value: n, done: i } = o.next());
}
catch (s) {
    t.error(s);
    return;
} i ? t.complete() : t.next(n); }, 0, !0); }), () => d(o?.return) && o.return(); }); }
function We(r, e) { if (!r)
    throw new Error("Iterable cannot be null"); return new w(t => { A(t, e, () => { let o = r[Symbol.asyncIterator](); A(t, e, () => { o.next().then(n => { n.done ? t.complete() : t.next(n.value); }); }, 0, !0); }); }); }
function Nr(r, e) { return We(Fe(r), e); }
function zr(r, e) { if (r != null) {
    if (Ee(r))
        return Wr(r, e);
    if (be(r))
        return Ur(r, e);
    if (ye(r))
        return Lr(r, e);
    if (Oe(r))
        return We(r, e);
    if (Te(r))
        return Vr(r, e);
    if (Ce(r))
        return Nr(r, e);
} throw Ie(r); }
function U(r, e) { return e ? zr(r, e) : c(r); }
function P(r, e) { return p((t, o) => { let n = 0; t.subscribe(l(o, i => { o.next(r.call(e, i, n++)); })); }); }
var { isArray: At } = Array;
function Tt(r, e) { return At(e) ? r(...e) : r(e); }
function me(r) { return P(e => Tt(r, e)); }
function Dr(r, e) { return r.reduce((t, o, n) => (t[o] = e[n], t), {}); }
function qr(...r) { let e = C(r), t = Y(r), { args: o, keys: n } = jr(r); if (o.length === 0)
    return U([], e); let i = new w(nr(o, e, n ? s => Dr(n, s) : g)); return t ? i.pipe(me(t)) : i; }
function nr(r, e, t = g) { return o => { Yr(e, () => { let { length: n } = r, i = new Array(n), s = n, f = n; for (let m = 0; m < n; m++)
    Yr(e, () => { let u = U(r[m], e), a = !1; u.subscribe(l(o, b => { i[m] = b, a || (a = !0, f--), f || o.next(t(i.slice())); }, () => { --s || o.complete(); })); }, o); }, o); }; }
function Yr(r, e, t) { r ? A(t, r, e) : e(); }
function fe(r, e, t, o, n, i, s, f) { let m = [], u = 0, a = 0, b = !1, v = () => { b && !m.length && !u && e.complete(); }, E = h => u < o ? x(h) : m.push(h), x = h => { i && e.next(h), u++; let y = !1; c(t(h, a++)).subscribe(l(e, O => { n?.(O), i ? E(O) : e.next(O); }, () => { y = !0; }, void 0, () => { if (y)
    try {
        for (u--; m.length && u < o;) {
            let O = m.shift();
            s ? A(e, s, () => x(O)) : x(O);
        }
        v();
    }
    catch (O) {
        e.error(O);
    } })); }; return r.subscribe(l(e, E, () => { b = !0, v(); })), () => { f?.(); }; }
function k(r, e, t = 1 / 0) { return d(e) ? k((o, n) => P((i, s) => e(o, i, n, s))(c(r(o, n))), t) : (typeof e == "number" && (t = e), p((o, n) => fe(o, n, r, t))); }
function Le(r, e, t, o, n) { return (i, s) => { let f = t, m = e, u = 0; i.subscribe(l(s, a => { let b = u++; m = f ? r(m, a, b) : (f = !0, a), o && s.next(m); }, n && (() => { f && s.next(m), s.complete(); }))); }; }
function D(r, e) { return p(Le(r, e, arguments.length >= 2, !1, !0)); }
var Ft = (r, e) => (r.push(e), r);
function ir() { return p((r, e) => { D(Ft, [])(r).subscribe(e); }); }
function Ue(r, e) { return ge(ir(), k(t => r(t)), e ? me(e) : g); }
function sr(r) { return Ue(qr, r); }
var Ct = sr;
var { isArray: kt } = Array;
function V(r) { return r.length === 1 && kt(r[0]) ? r[0] : r; }
function Ve(...r) { let e = Y(r); return e ? ge(Ve(...r), me(e)) : p((t, o) => { nr([t, ...V(r)])(o); }); }
function Rt(...r) { return Ve(...r); }
function ae(r = 1 / 0) { return k(g, r); }
function de() { return ae(1); }
function mr(...r) { let e = C(r); return p((t, o) => { de()(U([t, ...r], e)).subscribe(o); }); }
function Ne(r, e) { return d(e) ? k(r, e, 1) : k(r, 1); }
function Pt(r, e) { return d(e) ? Ne(() => r, e) : Ne(() => r); }
function Mt(...r) { return mr(...r); }
var $r = R(r => function () { r(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"; });
var _ = (() => { class r extends w {
    constructor() { super(), this.closed = !1, this.currentObservers = null, this.observers = [], this.isStopped = !1, this.hasError = !1, this.thrownError = null; }
    lift(t) { let o = new ze(this, this); return o.operator = t, o; }
    _throwIfClosed() { if (this.closed)
        throw new $r; }
    next(t) { oe(() => { if (this._throwIfClosed(), !this.isStopped) {
        this.currentObservers || (this.currentObservers = Array.from(this.observers));
        for (let o of this.currentObservers)
            o.next(t);
    } }); }
    error(t) { oe(() => { if (this._throwIfClosed(), !this.isStopped) {
        this.hasError = this.isStopped = !0, this.thrownError = t;
        let { observers: o } = this;
        for (; o.length;)
            o.shift().error(t);
    } }); }
    complete() { oe(() => { if (this._throwIfClosed(), !this.isStopped) {
        this.isStopped = !0;
        let { observers: t } = this;
        for (; t.length;)
            t.shift().complete();
    } }); }
    unsubscribe() { this.isStopped = this.closed = !0, this.observers = this.currentObservers = null; }
    get observed() { var t; return ((t = this.observers) === null || t === void 0 ? void 0 : t.length) > 0; }
    _trySubscribe(t) { return this._throwIfClosed(), super._trySubscribe(t); }
    _subscribe(t) { return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t); }
    _innerSubscribe(t) { let { hasError: o, isStopped: n, observers: i } = this; return o || n ? Ze : (this.currentObservers = null, i.push(t), new I(() => { this.currentObservers = null, F(i, t); })); }
    _checkFinalizedStatuses(t) { let { hasError: o, thrownError: n, isStopped: i } = this; o ? t.error(n) : i && t.complete(); }
    asObservable() { let t = new w; return t.source = this, t; }
} return r.create = (e, t) => new ze(e, t), r; })(), ze = class extends _ {
    constructor(e, t) { super(), this.destination = e, this.source = t; }
    next(e) { var t, o; (o = (t = this.destination) === null || t === void 0 ? void 0 : t.next) === null || o === void 0 || o.call(t, e); }
    error(e) { var t, o; (o = (t = this.destination) === null || t === void 0 ? void 0 : t.error) === null || o === void 0 || o.call(t, e); }
    complete() { var e, t; (t = (e = this.destination) === null || e === void 0 ? void 0 : e.complete) === null || t === void 0 || t.call(e); }
    _subscribe(e) { var t, o; return (o = (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(e)) !== null && o !== void 0 ? o : Ze; }
};
function Gr(r) { return new w(e => r.subscribe(e)); }
var jt = { connector: () => new _ };
function he(r, e = jt) { let { connector: t } = e; return p((o, n) => { let i = t(); c(r(Gr(i))).subscribe(n), n.add(o.subscribe(i)); }); }
function Wt(r) { return D((e, t, o) => !r || r(t, o) ? e + 1 : e, 0); }
function Lt(r) { return p((e, t) => { let o = !1, n = null, i = null, s = () => { if (i?.unsubscribe(), i = null, o) {
    o = !1;
    let f = n;
    n = null, t.next(f);
} }; e.subscribe(l(t, f => { i?.unsubscribe(), o = !0, n = f, i = l(t, s, S), c(r(f)).subscribe(i); }, () => { s(), t.complete(); }, void 0, () => { n = i = null; })); }); }
function Ut(r, e = T) { return p((t, o) => { let n = null, i = null, s = null, f = () => { if (n) {
    n.unsubscribe(), n = null;
    let u = i;
    i = null, o.next(u);
} }; function m() { let u = s + r, a = e.now(); if (a < u) {
    n = this.schedule(void 0, u - a), o.add(n);
    return;
} f(); } t.subscribe(l(o, u => { i = u, s = e.now(), n || (n = e.schedule(m, r), o.add(n)); }, () => { f(), o.complete(); }, void 0, () => { i = n = null; })); }); }
function Q(r) { return p((e, t) => { let o = !1; e.subscribe(l(t, n => { o = !0, t.next(n); }, () => { o || t.next(r), t.complete(); })); }); }
function ee(...r) { return de()(U(r, C(r))); }
var N = new w(r => r.complete());
function q(r) { return r <= 0 ? () => N : p((e, t) => { let o = 0; e.subscribe(l(t, n => { ++o <= r && (t.next(n), r <= o && t.complete()); })); }); }
function fr() { return p((r, e) => { r.subscribe(l(e, S)); }); }
function pr(r) { return P(() => r); }
function De(r, e) { return e ? t => ee(e.pipe(q(1), fr()), t.pipe(De(r))) : k((t, o) => c(r(t, o)).pipe(q(1), pr(t))); }
function Vt(r, e = T) { let t = M(r, e); return De(() => t); }
function Ye(...r) { let e = C(r); return U(r, e); }
function Br(r, e) { let t = d(r) ? r : () => r, o = n => n.error(t()); return new w(e ? n => e.schedule(o, 0, n) : o); }
var $ = class r {
    constructor(e, t, o) { this.kind = e, this.value = t, this.error = o, this.hasValue = e === "N"; }
    observe(e) { return lr(this, e); }
    do(e, t, o) { let { kind: n, value: i, error: s } = this; return n === "N" ? e?.(i) : n === "E" ? t?.(s) : o?.(); }
    accept(e, t, o) { var n; return d((n = e) === null || n === void 0 ? void 0 : n.next) ? this.observe(e) : this.do(e, t, o); }
    toObservable() { let { kind: e, value: t, error: o } = this, n = e === "N" ? Ye(t) : e === "E" ? Br(() => o) : e === "C" ? N : 0; if (!n)
        throw new TypeError(`Unexpected notification kind ${e}`); return n; }
    static createNext(e) { return new r("N", e); }
    static createError(e) { return new r("E", void 0, e); }
    static createComplete() { return r.completeNotification; }
};
$.completeNotification = new $("C");
function lr(r, e) { var t, o, n; let { kind: i, value: s, error: f } = r; if (typeof i != "string")
    throw new TypeError('Invalid notification, missing "kind"'); i === "N" ? (t = e.next) === null || t === void 0 || t.call(e, s) : i === "E" ? (o = e.error) === null || o === void 0 || o.call(e, f) : (n = e.complete) === null || n === void 0 || n.call(e); }
function Nt() { return p((r, e) => { r.subscribe(l(e, t => lr(t, e))); }); }
function zt(r, e) { return p((t, o) => { let n = new Set; t.subscribe(l(o, i => { let s = r ? r(i) : i; n.has(s) || (n.add(s), o.next(i)); })), e && c(e).subscribe(l(o, () => n.clear(), S)); }); }
function ur(r, e = g) { return r = r ?? Dt, p((t, o) => { let n, i = !0; t.subscribe(l(o, s => { let f = e(s); (i || !r(n, f)) && (i = !1, n = f, o.next(s)); })); }); }
function Dt(r, e) { return r === e; }
function Yt(r, e) { return ur((t, o) => e ? e(t[r], o[r]) : t[r] === o[r]); }
var cr = R(r => function () { r(this), this.name = "ArgumentOutOfRangeError", this.message = "argument out of range"; });
function j(r, e) { return p((t, o) => { let n = 0; t.subscribe(l(o, i => r.call(e, i, n++) && o.next(i))); }); }
var G = R(r => function () { r(this), this.name = "EmptyError", this.message = "no elements in sequence"; });
function re(r = qt) { return p((e, t) => { let o = !1; e.subscribe(l(t, n => { o = !0, t.next(n); }, () => o ? t.complete() : t.error(r()))); }); }
function qt() { return new G; }
function $t(r, e) { if (r < 0)
    throw new cr; let t = arguments.length >= 2; return o => o.pipe(j((n, i) => i === r), q(1), t ? Q(e) : re(() => new cr)); }
function Gt(...r) { return e => ee(e, Ye(...r)); }
function Bt(r, e) { return p((t, o) => { let n = 0; t.subscribe(l(o, i => { r.call(e, i, n++, t) || (o.next(!1), o.complete()); }, () => { o.next(!0), o.complete(); })); }); }
function qe(r, e) { return e ? t => t.pipe(qe((o, n) => c(r(o, n)).pipe(P((i, s) => e(o, i, n, s))))) : p((t, o) => { let n = 0, i = null, s = !1; t.subscribe(l(o, f => { i || (i = l(o, void 0, () => { i = null, s && o.complete(); }), c(r(f, n++)).subscribe(i)); }, () => { s = !0, !i && o.complete(); })); }); }
function ar() { return qe(g); }
var Kt = ar;
function Zt(r, e = 1 / 0, t) { return e = (e || 0) < 1 ? 1 / 0 : e, p((o, n) => fe(o, n, r, e, void 0, !0, t)); }
function Jt(r) { return p((e, t) => { try {
    e.subscribe(t);
}
finally {
    t.add(r);
} }); }
function Xt(r, e) { return p(dr(r, e, "value")); }
function dr(r, e, t) { let o = t === "index"; return (n, i) => { let s = 0; n.subscribe(l(i, f => { let m = s++; r.call(e, f, m, n) && (i.next(o ? m : f), i.complete()); }, () => { i.next(o ? -1 : void 0), i.complete(); })); }; }
function Ht(r, e) { return p(dr(r, e, "index")); }
function Qt(r, e) { let t = arguments.length >= 2; return o => o.pipe(r ? j((n, i) => r(n, i, o)) : g, q(1), t ? Q(e) : re(() => new G)); }
function eo(r, e, t, o) { return p((n, i) => { let s; !e || typeof e == "function" ? s = e : { duration: t, element: s, connector: o } = e; let f = new Map, m = x => { f.forEach(x), x(i); }, u = x => m(h => h.error(x)), a = 0, b = !1, v = new X(i, x => { try {
    let h = r(x), y = f.get(h);
    if (!y) {
        f.set(h, y = o ? o() : new _);
        let O = E(h, y);
        if (i.next(O), t) {
            let W = l(y, () => { y.complete(), W?.unsubscribe(); }, void 0, void 0, () => f.delete(h));
            v.add(c(t(O)).subscribe(W));
        }
    }
    y.next(s ? s(x) : x);
}
catch (h) {
    u(h);
} }, () => m(x => x.complete()), u, () => f.clear(), () => (b = !0, a === 0)); n.subscribe(v); function E(x, h) { let y = new w(O => { a++; let W = h.subscribe(O); return () => { W.unsubscribe(), --a === 0 && b && v.unsubscribe(); }; }); return y.key = x, y; } }); }
function ro() { return p((r, e) => { r.subscribe(l(e, () => { e.next(!1), e.complete(); }, () => { e.next(!0), e.complete(); })); }); }
function hr(r) { return r <= 0 ? () => N : p((e, t) => { let o = []; e.subscribe(l(t, n => { o.push(n), r < o.length && o.shift(); }, () => { for (let n of o)
    t.next(n); t.complete(); }, void 0, () => { o = null; })); }); }
function to(r, e) { let t = arguments.length >= 2; return o => o.pipe(r ? j((n, i) => r(n, i, o)) : g, hr(1), t ? Q(e) : re(() => new G)); }
function oo() { return p((r, e) => { r.subscribe(l(e, t => { e.next($.createNext(t)); }, () => { e.next($.createComplete()), e.complete(); }, t => { e.next($.createError(t)), e.complete(); })); }); }
function no(r) { return D(d(r) ? (e, t) => r(e, t) > 0 ? e : t : (e, t) => e > t ? e : t); }
function xr(...r) { let e = C(r), t = Pr(r, 1 / 0); return p((o, n) => { ae(t)(U([o, ...r], e)).subscribe(n); }); }
var io = k;
function so(r, e, t = 1 / 0) { return d(e) ? k(() => r, e, t) : (typeof e == "number" && (t = e), k(() => r, t)); }
function mo(r, e, t = 1 / 0) { return p((o, n) => { let i = e; return fe(o, n, (s, f) => r(i, s, f), t, s => { i = s; }, !1, void 0, () => i = null); }); }
function fo(...r) { return xr(...r); }
function po(r) { return D(d(r) ? (e, t) => r(e, t) < 0 ? e : t : (e, t) => e < t ? e : t); }
function br() { return p((r, e) => { let t = null; r._refCount++; let o = l(e, void 0, void 0, void 0, () => { if (!r || r._refCount <= 0 || 0 < --r._refCount) {
    t = null;
    return;
} let n = r._connection, i = t; t = null, n && (!i || n === i) && n.unsubscribe(), e.unsubscribe(); }); r.subscribe(o), o.closed || (t = r.connect()); }); }
var B = class extends w {
    constructor(e, t) { super(), this.source = e, this.subjectFactory = t, this._subject = null, this._refCount = 0, this._connection = null, Ke(e) && (this.lift = e.lift); }
    _subscribe(e) { return this.getSubject().subscribe(e); }
    getSubject() { let e = this._subject; return (!e || e.isStopped) && (this._subject = this.subjectFactory()), this._subject; }
    _teardown() { this._refCount = 0; let { _connection: e } = this; this._subject = this._connection = null, e?.unsubscribe(); }
    connect() { let e = this._connection; if (!e) {
        e = this._connection = new I;
        let t = this.getSubject();
        e.add(this.source.subscribe(l(t, void 0, () => { this._teardown(), t.complete(); }, o => { this._teardown(), t.error(o); }, () => this._teardown()))), e.closed && (this._connection = null, e = I.EMPTY);
    } return e; }
    refCount() { return br()(this); }
};
function xe(r, e) { let t = d(r) ? r : () => r; return d(e) ? he(e, { connector: t }) : o => new B(o, t); }
function Kr(...r) { let e = V(r); return new w(t => { let o = 0, n = () => { if (o < e.length) {
    let i;
    try {
        i = c(e[o++]);
    }
    catch {
        n();
        return;
    }
    let s = new X(t, void 0, S, S);
    i.subscribe(s), s.add(n);
}
else
    t.complete(); }; n(); }); }
function lo(...r) { let e = V(r); return t => Kr(t, ...e); }
var uo = lo;
function co() { return p((r, e) => { let t, o = !1; r.subscribe(l(e, n => { let i = t; t = n, o && e.next([i, n]), o = !0; })); }); }
function Zr(r, e) { return (t, o) => !r.call(e, t, o); }
function ao(r, e) { return t => [j(r, e)(t), j(Zr(r, e))(t)]; }
function ho(...r) { let e = r.length; if (e === 0)
    throw new Error("list of properties cannot be empty."); return P(t => { let o = t; for (let n = 0; n < e; n++) {
    let i = o?.[r[n]];
    if (typeof i < "u")
        o = i;
    else
        return;
} return o; }); }
function xo(r) { return r ? e => he(r)(e) : e => xe(new _)(e); }
var $e = class extends _ {
    constructor(e) { super(), this._value = e; }
    get value() { return this.getValue(); }
    _subscribe(e) { let t = super._subscribe(e); return !t.closed && e.next(this._value), t; }
    getValue() { let { hasError: e, thrownError: t, _value: o } = this; if (e)
        throw t; return this._throwIfClosed(), o; }
    next(e) { super.next(this._value = e); }
};
function bo(r) { return e => { let t = new $e(r); return new B(e, () => t); }; }
var Ge = class extends _ {
    constructor() { super(...arguments), this._value = null, this._hasValue = !1, this._isComplete = !1; }
    _checkFinalizedStatuses(e) { let { hasError: t, _hasValue: o, _value: n, thrownError: i, isStopped: s, _isComplete: f } = this; t ? e.error(i) : (s || f) && (o && e.next(n), e.complete()); }
    next(e) { this.isStopped || (this._value = e, this._hasValue = !0); }
    complete() { let { _hasValue: e, _value: t, _isComplete: o } = this; o || (this._isComplete = !0, e && super.next(t), super.complete()); }
};
function yo() { return r => { let e = new Ge; return new B(r, () => e); }; }
var pe = class extends _ {
    constructor(e = 1 / 0, t = 1 / 0, o = H) { super(), this._bufferSize = e, this._windowTime = t, this._timestampProvider = o, this._buffer = [], this._infiniteTimeWindow = !0, this._infiniteTimeWindow = t === 1 / 0, this._bufferSize = Math.max(1, e), this._windowTime = Math.max(1, t); }
    next(e) { let { isStopped: t, _buffer: o, _infiniteTimeWindow: n, _timestampProvider: i, _windowTime: s } = this; t || (o.push(e), !n && o.push(i.now() + s)), this._trimBuffer(), super.next(e); }
    _subscribe(e) { this._throwIfClosed(), this._trimBuffer(); let t = this._innerSubscribe(e), { _infiniteTimeWindow: o, _buffer: n } = this, i = n.slice(); for (let s = 0; s < i.length && !e.closed; s += o ? 1 : 2)
        e.next(i[s]); return this._checkFinalizedStatuses(e), t; }
    _trimBuffer() { let { _bufferSize: e, _timestampProvider: t, _buffer: o, _infiniteTimeWindow: n } = this, i = (n ? 1 : 2) * e; if (e < 1 / 0 && i < o.length && o.splice(0, o.length - i), !n) {
        let s = t.now(), f = 0;
        for (let m = 1; m < o.length && o[m] <= s; m += 2)
            f = m;
        f && o.splice(0, f + 1);
    } }
};
function vo(r, e, t, o) { t && !d(t) && (o = t); let n = d(t) ? t : void 0; return i => xe(new pe(r, e, o), n)(i); }
function Jr(r) { return e => { let t = []; for (let o = 0; t && !e.closed && o < r.length; o++)
    t.push(c(r[o]).subscribe(l(e, n => { if (t) {
        for (let i = 0; i < t.length; i++)
            i !== o && t[i].unsubscribe();
        t = null;
    } e.next(n); }))); }; }
function yr(...r) { return r.length ? p((e, t) => { Jr([e, ...r])(t); }) : g; }
function wo(...r) { return yr(...V(r)); }
function So(r) { let e = 1 / 0, t; return r != null && (typeof r == "object" ? { count: e = 1 / 0, delay: t } = r : e = r), e <= 0 ? () => N : p((o, n) => { let i = 0, s, f = () => { if (s?.unsubscribe(), s = null, t != null) {
    let u = typeof t == "number" ? M(t) : c(t(i)), a = l(n, () => { a.unsubscribe(), m(); });
    u.subscribe(a);
}
else
    m(); }, m = () => { let u = !1; s = o.subscribe(l(n, void 0, () => { ++i < e ? s ? f() : u = !0 : n.complete(); })), u && f(); }; m(); }); }
function _o(r) { return p((e, t) => { let o, n = !1, i, s = !1, f = !1, m = () => f && s && (t.complete(), !0), u = () => (i || (i = new _, c(r(i)).subscribe(l(t, () => { o ? a() : n = !0; }, () => { s = !0, m(); }))), i), a = () => { f = !1, o = e.subscribe(l(t, void 0, () => { f = !0, !m() && u().next(); })), n && (o.unsubscribe(), o = null, n = !1, a()); }; a(); }); }
function go(r = 1 / 0) { let e; r && typeof r == "object" ? e = r : e = { count: r }; let { count: t = 1 / 0, delay: o, resetOnSuccess: n = !1 } = e; return t <= 0 ? g : p((i, s) => { let f = 0, m, u = () => { let a = !1; m = i.subscribe(l(s, b => { n && (f = 0), s.next(b); }, void 0, b => { if (f++ < t) {
    let v = () => { m ? (m.unsubscribe(), m = null, u()) : a = !0; };
    if (o != null) {
        let E = typeof o == "number" ? M(o) : c(o(b, f)), x = l(s, () => { x.unsubscribe(), v(); }, () => { s.complete(); });
        E.subscribe(x);
    }
    else
        v();
}
else
    s.error(b); })), a && (m.unsubscribe(), m = null, u()); }; u(); }); }
function Eo(r) { return p((e, t) => { let o, n = !1, i, s = () => { o = e.subscribe(l(t, void 0, void 0, f => { i || (i = new _, c(r(i)).subscribe(l(t, () => o ? s() : n = !0))), i && i.next(f); })), n && (o.unsubscribe(), o = null, n = !1, s()); }; s(); }); }
function vr(r) { return p((e, t) => { let o = !1, n = null; e.subscribe(l(t, i => { o = !0, n = i; })), c(r).subscribe(l(t, () => { if (o) {
    o = !1;
    let i = n;
    n = null, t.next(i);
} }, S)); }); }
function Xr(r = 0, e = T) { return r < 0 && (r = 0), M(r, r, e); }
function Oo(r, e = T) { return vr(Xr(r, e)); }
function Io(r, e) { return p(Le(r, e, arguments.length >= 2, !0)); }
function Ao(r, e = (t, o) => t === o) { return p((t, o) => { let n = Hr(), i = Hr(), s = m => { o.next(m), o.complete(); }, f = (m, u) => { let a = l(o, b => { let { buffer: v, complete: E } = u; v.length === 0 ? E ? s(!1) : m.buffer.push(b) : !e(b, v.shift()) && s(!1); }, () => { m.complete = !0; let { complete: b, buffer: v } = u; b && s(v.length === 0), a?.unsubscribe(); }); return a; }; t.subscribe(f(n, i)), c(r).subscribe(f(i, n)); }); }
function Hr() { return { buffer: [], complete: !1 }; }
function Sr(r = {}) { let { connector: e = () => new _, resetOnError: t = !0, resetOnComplete: o = !0, resetOnRefCountZero: n = !0 } = r; return i => { let s, f, m, u = 0, a = !1, b = !1, v = () => { f?.unsubscribe(), f = void 0; }, E = () => { v(), s = m = void 0, a = b = !1; }, x = () => { let h = s; E(), h?.unsubscribe(); }; return p((h, y) => { u++, !b && !a && v(); let O = m = m ?? e(); y.add(() => { u--, u === 0 && !b && !a && (f = wr(x, n)); }), O.subscribe(y), !s && u > 0 && (s = new z({ next: W => O.next(W), error: W => { b = !0, v(), f = wr(E, t, W), O.error(W); }, complete: () => { a = !0, v(), f = wr(E, o), O.complete(); } }), c(h).subscribe(s)); })(i); }; }
function wr(r, e, ...t) { if (e === !0) {
    r();
    return;
} if (e === !1)
    return; let o = new z({ next: () => { o.unsubscribe(), r(); } }); return c(e(...t)).subscribe(o); }
function To(r, e, t) { let o, n = !1; return r && typeof r == "object" ? { bufferSize: o = 1 / 0, windowTime: e = 1 / 0, refCount: n = !1, scheduler: t } = r : o = r ?? 1 / 0, Sr({ connector: () => new pe(o, e, t), resetOnError: !0, resetOnComplete: !1, resetOnRefCountZero: n }); }
var Qr = R(r => function (t) { r(this), this.name = "SequenceError", this.message = t; });
var et = R(r => function (t) { r(this), this.name = "NotFoundError", this.message = t; });
function Fo(r) { return p((e, t) => { let o = !1, n, i = !1, s = 0; e.subscribe(l(t, f => { i = !0, (!r || r(f, s++, e)) && (o && t.error(new Qr("Too many matching values")), o = !0, n = f); }, () => { o ? (t.next(n), t.complete()) : t.error(i ? new et("No matching values") : new G); })); }); }
function Co(r) { return j((e, t) => r <= t); }
function ko(r) { return r <= 0 ? g : p((e, t) => { let o = new Array(r), n = 0; return e.subscribe(l(t, i => { let s = n++; if (s < r)
    o[s] = i;
else {
    let f = s % r, m = o[f];
    o[f] = i, t.next(m);
} })), () => { o = null; }; }); }
function Ro(r) { return p((e, t) => { let o = !1, n = l(t, () => { n?.unsubscribe(), o = !0; }, S); c(r).subscribe(n), e.subscribe(l(t, i => o && t.next(i))); }); }
function Po(r) { return p((e, t) => { let o = !1, n = 0; e.subscribe(l(t, i => (o || (o = !r(i, n++))) && t.next(i))); }); }
function Mo(...r) { let e = C(r); return p((t, o) => { (e ? ee(r, t, e) : ee(r, t)).subscribe(o); }); }
function K(r, e) { return p((t, o) => { let n = null, i = 0, s = !1, f = () => s && !n && o.complete(); t.subscribe(l(o, m => { n?.unsubscribe(); let u = 0, a = i++; c(r(m, a)).subscribe(n = l(o, b => o.next(e ? e(m, b, a, u++) : b), () => { n = null, f(); })); }, () => { s = !0, f(); })); }); }
function jo() { return K(g); }
function Wo(r, e) { return d(e) ? K(() => r, e) : K(() => r); }
function Lo(r, e) { return p((t, o) => { let n = e; return K((i, s) => r(n, i, s), (i, s) => (n = s, s))(t).subscribe(o), () => { n = null; }; }); }
function Uo(r) { return p((e, t) => { c(r).subscribe(l(t, () => t.complete(), S)), !t.closed && e.subscribe(t); }); }
function Vo(r, e = !1) { return p((t, o) => { let n = 0; t.subscribe(l(o, i => { let s = r(i, n++); (s || e) && o.next(i), !s && o.complete(); })); }); }
function No(r, e, t) { let o = d(r) || e || t ? { next: r, error: e, complete: t } : r; return o ? p((n, i) => { var s; (s = o.subscribe) === null || s === void 0 || s.call(o); let f = !0; n.subscribe(l(i, m => { var u; (u = o.next) === null || u === void 0 || u.call(o, m), i.next(m); }, () => { var m; f = !1, (m = o.complete) === null || m === void 0 || m.call(o), i.complete(); }, m => { var u; f = !1, (u = o.error) === null || u === void 0 || u.call(o, m), i.error(m); }, () => { var m, u; f && ((m = o.unsubscribe) === null || m === void 0 || m.call(o)), (u = o.finalize) === null || u === void 0 || u.call(o); })); }) : g; }
function _r(r, e) { return p((t, o) => { let { leading: n = !0, trailing: i = !1 } = e ?? {}, s = !1, f = null, m = null, u = !1, a = () => { m?.unsubscribe(), m = null, i && (E(), u && o.complete()); }, b = () => { m = null, u && o.complete(); }, v = x => m = c(r(x)).subscribe(l(o, a, b)), E = () => { if (s) {
    s = !1;
    let x = f;
    f = null, o.next(x), !u && v(x);
} }; t.subscribe(l(o, x => { s = !0, f = x, !(m && !m.closed) && (n ? E() : v(x)); }, () => { u = !0, !(i && s && m && !m.closed) && o.complete(); })); }); }
function zo(r, e = T, t) { let o = M(r, e); return _r(() => o, t); }
function Do(r = T) { return p((e, t) => { let o = r.now(); e.subscribe(l(t, n => { let i = r.now(), s = i - o; o = i, t.next(new gr(n, s)); })); }); }
var gr = class {
    constructor(e, t) { this.value = e, this.interval = t; }
};
var Yo = R(r => function (t = null) { r(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = t; });
function Er(r, e) { let { first: t, each: o, with: n = qo, scheduler: i = e ?? T, meta: s = null } = se(r) ? { first: r } : typeof r == "number" ? { each: r } : r; if (t == null && o == null)
    throw new TypeError("No timeout provided."); return p((f, m) => { let u, a, b = null, v = 0, E = x => { a = A(m, i, () => { try {
    u.unsubscribe(), c(n({ meta: s, lastValue: b, seen: v })).subscribe(m);
}
catch (h) {
    m.error(h);
} }, x); }; u = f.subscribe(l(m, x => { a?.unsubscribe(), v++, m.next(b = x), o > 0 && E(o); }, void 0, void 0, () => { a?.closed || a?.unsubscribe(), b = null; })), !v && E(t != null ? typeof t == "number" ? t : +t - i.now() : o); }); }
function qo(r) { throw new Yo(r); }
function $o(r, e, t) { let o, n, i; if (t = t ?? Me, se(r) ? o = r : typeof r == "number" && (n = r), e)
    i = () => e;
else
    throw new TypeError("No observable provided to switch to"); if (o == null && n == null)
    throw new TypeError("No timeout provided."); return Er({ first: o, each: n, scheduler: t, with: i }); }
function Go(r = H) { return P(e => ({ value: e, timestamp: r.now() })); }
function Bo(r) { return p((e, t) => { let o = new _; t.next(o.asObservable()); let n = i => { o.error(i), t.error(i); }; return e.subscribe(l(t, i => o?.next(i), () => { o.complete(), t.complete(); }, n)), c(r).subscribe(l(t, () => { o.complete(), t.next(o = new _); }, S, n)), () => { o?.unsubscribe(), o = null; }; }); }
function Ko(r, e = 0) { let t = e > 0 ? e : r; return p((o, n) => { let i = [new _], s = [], f = 0; n.next(i[0].asObservable()), o.subscribe(l(n, m => { for (let a of i)
    a.next(m); let u = f - r + 1; if (u >= 0 && u % t === 0 && i.shift().complete(), ++f % t === 0) {
    let a = new _;
    i.push(a), n.next(a.asObservable());
} }, () => { for (; i.length > 0;)
    i.shift().complete(); n.complete(); }, m => { for (; i.length > 0;)
    i.shift().error(m); n.error(m); }, () => { s = null, i = null; })); }); }
function Zo(r, ...e) { var t, o; let n = (t = C(e)) !== null && t !== void 0 ? t : T, i = (o = e[0]) !== null && o !== void 0 ? o : null, s = e[1] || 1 / 0; return p((f, m) => { let u = [], a = !1, b = h => { let { window: y, subs: O } = h; y.complete(), O.unsubscribe(), F(u, h), a && v(); }, v = () => { if (u) {
    let h = new I;
    m.add(h);
    let y = new _, O = { window: y, subs: h, seen: 0 };
    u.push(O), m.next(y.asObservable()), A(h, n, () => b(O), r);
} }; i !== null && i >= 0 ? A(m, n, v, i, !0) : a = !0, v(); let E = h => u.slice().forEach(h), x = h => { E(({ window: y }) => h(y)), h(m), m.unsubscribe(); }; return f.subscribe(l(m, h => { E(y => { y.window.next(h), s <= ++y.seen && b(y); }); }, () => x(h => h.complete()), h => x(y => y.error(h)))), () => { u = null; }; }); }
function Jo(r, e) { return p((t, o) => { let n = [], i = s => { for (; 0 < n.length;)
    n.shift().error(s); o.error(s); }; c(r).subscribe(l(o, s => { let f = new _; n.push(f); let m = new I, u = () => { F(n, f), f.complete(), m.unsubscribe(); }, a; try {
    a = c(e(s));
}
catch (b) {
    i(b);
    return;
} o.next(f.asObservable()), m.add(a.subscribe(l(o, u, S, i))); }, S)), t.subscribe(l(o, s => { let f = n.slice(); for (let m of f)
    m.next(s); }, () => { for (; 0 < n.length;)
    n.shift().complete(); o.complete(); }, i, () => { for (; 0 < n.length;)
    n.shift().unsubscribe(); })); }); }
function Xo(r) { return p((e, t) => { let o, n, i = f => { o.error(f), t.error(f); }, s = () => { n?.unsubscribe(), o?.complete(), o = new _, t.next(o.asObservable()); let f; try {
    f = c(r());
}
catch (m) {
    i(m);
    return;
} f.subscribe(n = l(t, s, s, i)); }; s(), e.subscribe(l(t, f => o.next(f), () => { o.complete(), t.complete(); }, i, () => { n?.unsubscribe(), o = null; })); }); }
function Ho(...r) { let e = Y(r); return p((t, o) => { let n = r.length, i = new Array(n), s = r.map(() => !1), f = !1; for (let m = 0; m < n; m++)
    c(r[m]).subscribe(l(o, u => { i[m] = u, !f && !s[m] && (s[m] = !0, (f = s.every(g)) && (s = null)); }, S)); t.subscribe(l(o, m => { if (f) {
    let u = [m, ...i];
    o.next(e ? e(...u) : u);
} })); }); }
function Be(...r) { let e = Y(r), t = V(r); return t.length ? new w(o => { let n = t.map(() => []), i = t.map(() => !1); o.add(() => { n = i = null; }); for (let s = 0; !o.closed && s < t.length; s++)
    c(t[s]).subscribe(l(o, f => { if (n[s].push(f), n.every(m => m.length)) {
        let m = n.map(u => u.shift());
        o.next(e ? e(...m) : m), n.some((u, a) => !u.length && i[a]) && o.complete();
    } }, () => { i[s] = !0, !n[s].length && o.complete(); })); return () => { n = i = null; }; }) : N; }
function Or(...r) { return p((e, t) => { Be(e, ...r).subscribe(t); }); }
function Qo(r) { return Ue(Be, r); }
function en(...r) { return Or(...r); }
export { tr as audit, xt as auditTime, bt as buffer, yt as bufferCount, vt as bufferTime, wt as bufferToggle, St as bufferWhen, Mr as catchError, Ct as combineAll, Ve as combineLatest, sr as combineLatestAll, Rt as combineLatestWith, mr as concat, de as concatAll, Ne as concatMap, Pt as concatMapTo, Mt as concatWith, he as connect, Wt as count, Lt as debounce, Ut as debounceTime, Q as defaultIfEmpty, Vt as delay, De as delayWhen, Nt as dematerialize, zt as distinct, ur as distinctUntilChanged, Yt as distinctUntilKeyChanged, $t as elementAt, Gt as endWith, Bt as every, Kt as exhaust, ar as exhaustAll, qe as exhaustMap, Zt as expand, j as filter, Jt as finalize, Xt as find, Ht as findIndex, Qt as first, io as flatMap, eo as groupBy, fr as ignoreElements, ro as isEmpty, to as last, P as map, pr as mapTo, oo as materialize, no as max, xr as merge, ae as mergeAll, k as mergeMap, so as mergeMapTo, mo as mergeScan, fo as mergeWith, po as min, xe as multicast, ue as observeOn, uo as onErrorResumeNext, co as pairwise, ao as partition, ho as pluck, xo as publish, bo as publishBehavior, yo as publishLast, vo as publishReplay, wo as race, yr as raceWith, D as reduce, br as refCount, So as repeat, _o as repeatWhen, go as retry, Eo as retryWhen, vr as sample, Oo as sampleTime, Io as scan, Ao as sequenceEqual, Sr as share, To as shareReplay, Fo as single, Co as skip, ko as skipLast, Ro as skipUntil, Po as skipWhile, Mo as startWith, ce as subscribeOn, jo as switchAll, K as switchMap, Wo as switchMapTo, Lo as switchScan, q as take, hr as takeLast, Uo as takeUntil, Vo as takeWhile, No as tap, _r as throttle, zo as throttleTime, re as throwIfEmpty, Do as timeInterval, Er as timeout, $o as timeoutWith, Go as timestamp, ir as toArray, Bo as window, Ko as windowCount, Zo as windowTime, Jo as windowToggle, Xo as windowWhen, Ho as withLatestFrom, Or as zip, Qo as zipAll, en as zipWith };
