import { a as ne, b as D, f as te } from "@nf-internal/chunk-SLWIJEXV";
import { F as Ve, G as $e, H as qe, I as re, J as He, K as Ge, a as y, b as I, c as Pe, s as ee, w as Le, y as Ae } from "@nf-internal/chunk-YEU6INBQ";
import { a as A, b as V, d as z } from "@nf-internal/chunk-4CLCTAJ7";
import { BehaviorSubject as Bn, Observable as Un, Subject as Wn, Subscription as Yn } from "rxjs";
import { setActiveConsumer as b } from "@angular/core/primitives/signals";
import { isNotFound as Jn } from "@angular/core/primitives/di";
var ie = class {
    full;
    major;
    minor;
    patch;
    constructor(n) { this.full = n; let t = n.split("."); this.major = t[0], this.minor = t[1], this.patch = t.slice(2).join("."); }
}, xr = new ie("21.1.0");
var Rr = "https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss", f = class extends Error {
    code;
    constructor(n, t) { super(Te(n, t)), this.code = n; }
};
function Qn(e) { return `NG0${Math.abs(e)}`; }
function Te(e, n) { return `${Qn(e)}${n ? ": " + n : ""}`; }
var Fr = globalThis;
function d(e) { for (let n in e)
    if (e[n] === d)
        return n; throw Error(""); }
function jr(e, n) { for (let t in n)
    n.hasOwnProperty(t) && !e.hasOwnProperty(t) && (e[t] = n[t]); }
function k(e) {
    if (typeof e == "string")
        return e;
    if (Array.isArray(e))
        return `[${e.map(k).join(", ")}]`;
    if (e == null)
        return "" + e;
    let n = e.overriddenName || e.name;
    if (n)
        return `${n}`;
    let t = e.toString();
    if (t == null)
        return "" + t;
    let r = t.indexOf(`
`);
    return r >= 0 ? t.slice(0, r) : t;
}
function kr(e, n) { return e ? n ? `${e} ${n}` : e : n || ""; }
function Or(e, n = 100) { if (!e || n < 1 || e.length <= n)
    return e; if (n == 1)
    return e.substring(0, 1) + "..."; let t = Math.round(n / 2); return e.substring(0, t) + "..." + e.substring(e.length - t); }
var Kn = d({ __forward_ref__: d });
function rn(e) { return e.__forward_ref__ = rn, e.toString = function () { return k(this()); }, e; }
function v(e) { return Xn(e) ? e() : e; }
function Xn(e) { return typeof e == "function" && e.hasOwnProperty(Kn) && e.__forward_ref__ === rn; }
function Sr(e, n, t) { e != n && on(t, e, n, "=="); }
function on(e, n, t, r) { throw new Error(`ASSERTION ERROR: ${e}` + (r == null ? "" : ` [Expected=> ${t} ${r} ${n} <=Actual]`)); }
function P(e) { return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 }; }
function Pr(e) { return { providers: e.providers || [], imports: e.imports || [] }; }
function J(e) { return zn(e, sn); }
function Lr(e) { return J(e) !== null; }
function zn(e, n) { return e.hasOwnProperty(n) && e[n] || null; }
function et(e) { let n = e?.[sn] ?? null; return n || null; }
function Ze(e) { return e && e.hasOwnProperty(Be) ? e[Be] : null; }
var sn = d({ \u0275prov: d }), Be = d({ \u0275inj: d }), h = class {
    _desc;
    ngMetadataName = "InjectionToken";
    \u0275prov;
    constructor(n, t) { this._desc = n, this.\u0275prov = void 0, typeof t == "number" ? this.__NG_ELEMENT_ID__ = t : t !== void 0 && (this.\u0275prov = P({ token: this, providedIn: t.providedIn || "root", factory: t.factory })); }
    get multi() { return this; }
    toString() { return `InjectionToken ${this._desc}`; }
}, Ue;
function Ar(e) { on("setInjectorProfilerContext should never be called in production mode"); let n = Ue; return Ue = e, n; }
function un(e) { return e && !!e.\u0275providers; }
var nt = d({ \u0275cmp: d }), tt = d({ \u0275dir: d }), rt = d({ \u0275pipe: d }), ot = d({ \u0275mod: d }), We = d({ \u0275fac: d }), Vr = d({ __NG_ELEMENT_ID__: d }), Ye = d({ __NG_ENV_ID__: d });
function it(e) { return Q(e, "@NgModule"), e[ot] || null; }
function $r(e) { let n = it(e); if (!n)
    throw new f(915, !1); return n; }
function an(e) { return Q(e, "@Component"), e[nt] || null; }
function st(e) { return Q(e, "@Directive"), e[tt] || null; }
function ut(e) { return Q(e, "@Pipe"), e[rt] || null; }
function Q(e, n) { if (e == null)
    throw new f(-919, !1); }
function qr(e) { let n = an(e) || st(e) || ut(e); return n !== null && n.standalone; }
function at(e) { return typeof e == "string" ? e : e == null ? "" : String(e); }
function Hr(e) { return typeof e == "function" ? e.name || e.toString() : typeof e == "object" && e != null && typeof e.type == "function" ? e.type.name || e.type.toString() : at(e); }
var cn = d({ ngErrorCode: d }), ct = d({ ngErrorMessage: d }), dt = d({ ngTokenPath: d });
function lt(e, n) { return dn("", -200, n); }
function ft(e, n) { throw new f(-201, !1); }
function dn(e, n, t) { let r = new f(n, e); return r[cn] = n, r[ct] = e, t && (r[dt] = t), r; }
function gt(e) { return e[cn]; }
var se;
function ln() { return se; }
function E(e) { let n = se; return se = e, n; }
function ht(e, n, t) { let r = J(e); if (r && r.providedIn == "root")
    return r.value === void 0 ? r.value = r.factory() : r.value; if (t & 8)
    return null; if (n !== void 0)
    return n; ft(e, ""); }
var pt = {}, N = pt, ue = "__NG_DI_FLAG__", ae = class {
    injector;
    constructor(n) { this.injector = n; }
    retrieve(n, t) { let r = q(t) || 0; try {
        return this.injector.get(n, r & 8 ? null : N, r);
    }
    catch (o) {
        if (te(o))
            return o;
        throw o;
    } }
};
function mt(e, n = 0) { let t = ne(); if (t === void 0)
    throw new f(-203, !1); if (t === null)
    return ht(e, void 0, n); {
    let r = vt(n), o = t.retrieve(e, r);
    if (te(o)) {
        if (r.optional)
            return null;
        throw o;
    }
    return o;
} }
function x(e, n = 0) { return (ln() || mt)(v(e), n); }
function Gr(e) { throw new f(202, !1); }
function g(e, n) { return x(e, q(n)); }
function q(e) { return typeof e > "u" || typeof e == "number" ? e : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4); }
function vt(e) { return { optional: !!(e & 8), host: !!(e & 1), self: !!(e & 2), skipSelf: !!(e & 4) }; }
function ce(e) { let n = []; for (let t = 0; t < e.length; t++) {
    let r = v(e[t]);
    if (Array.isArray(r)) {
        if (r.length === 0)
            throw new f(900, !1);
        let o, i = 0;
        for (let s = 0; s < r.length; s++) {
            let c = r[s], a = yt(c);
            typeof a == "number" ? a === -1 ? o = c.token : i |= a : o = c;
        }
        n.push(x(o, i));
    }
    else
        n.push(x(r));
} return n; }
function Zr(e, n) { return e[ue] = n, e.prototype[ue] = n, e; }
function yt(e) { return e[ue]; }
function H(e, n) { let t = e.hasOwnProperty(We); return t ? e[We] : null; }
function Br(e, n, t) { if (e.length !== n.length)
    return !1; for (let r = 0; r < e.length; r++) {
    let o = e[r], i = n[r];
    if (t && (o = t(o), i = t(i)), i !== o)
        return !1;
} return !0; }
function Ur(e) { return e.flat(Number.POSITIVE_INFINITY); }
function we(e, n) { e.forEach(t => Array.isArray(t) ? we(t, n) : n(t)); }
function Wr(e, n, t) { n >= e.length ? e.push(t) : e.splice(n, 0, t); }
function Yr(e, n) { return n >= e.length - 1 ? e.pop() : e.splice(n, 1)[0]; }
function Jr(e, n) { let t = []; for (let r = 0; r < e; r++)
    t.push(n); return t; }
function Qr(e, n, t) { let r = e.length - t; for (; n < r;)
    e[n] = e[n + t], n++; for (; t--;)
    e.pop(); }
function Dt(e, n, t, r) { let o = e.length; if (o == n)
    e.push(t, r);
else if (o === 1)
    e.push(r, e[0]), e[0] = t;
else {
    for (o--, e.push(e[o - 1], e[o]); o > n;) {
        let i = o - 2;
        e[o] = e[i], o--;
    }
    e[n] = t, e[n + 1] = r;
} }
function Kr(e, n, t) { let r = fn(e, n); return r >= 0 ? e[r | 1] = t : (r = ~r, Dt(e, r, n, t)), r; }
function Xr(e, n) { let t = fn(e, n); if (t >= 0)
    return e[t | 1]; }
function fn(e, n) { return It(e, n, 1); }
function It(e, n, t) { let r = 0, o = e.length >> t; for (; o !== r;) {
    let i = r + (o - r >> 1), s = e[i << t];
    if (n === s)
        return i << t;
    s > n ? o = i : r = i + 1;
} return ~(o << t); }
var zr = {}, G = [], K = new h(""), gn = new h("", -1), hn = new h(""), Z = class {
    get(n, t = N) { if (t === N) {
        let o = dn("", -201);
        throw o.name = "\u0275NotFound", o;
    } return t; }
};
function pn(e) { return { \u0275providers: e }; }
function Et(e) { return pn([{ provide: K, multi: !0, useValue: e }]); }
function Tt(...e) { return { \u0275providers: wt(!0, e), \u0275fromNgModule: !0 }; }
function wt(e, ...n) { let t = [], r = new Set, o, i = s => { t.push(s); }; return we(n, s => { let c = s; de(c, i, [], r) && (o ||= [], o.push(c)); }), o !== void 0 && mn(o, i), t; }
function mn(e, n) { for (let t = 0; t < e.length; t++) {
    let { ngModule: r, providers: o } = e[t];
    Ne(o, i => { n(i, r); });
} }
function de(e, n, t, r) { if (e = v(e), !e)
    return !1; let o = null, i = Ze(e), s = !i && an(e); if (!i && !s) {
    let a = e.ngModule;
    if (i = Ze(a), i)
        o = a;
    else
        return !1;
}
else {
    if (s && !s.standalone)
        return !1;
    o = e;
} let c = r.has(o); if (s) {
    if (c)
        return !1;
    if (r.add(o), s.dependencies) {
        let a = typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
        for (let l of a)
            de(l, n, t, r);
    }
}
else if (i) {
    if (i.imports != null && !c) {
        r.add(o);
        let l;
        we(i.imports, w => { de(w, n, t, r) && (l ||= [], l.push(w)); }), l !== void 0 && mn(l, n);
    }
    if (!c) {
        let l = H(o) || (() => new o);
        n({ provide: o, useFactory: l, deps: G }, o), n({ provide: hn, useValue: o, multi: !0 }, o), n({ provide: K, useValue: () => x(o), multi: !0 }, o);
    }
    let a = i.providers;
    if (a != null && !c) {
        let l = e;
        Ne(a, w => { n(w, l); });
    }
}
else
    return !1; return o !== e && e.providers !== void 0; }
function Ne(e, n) { for (let t of e)
    un(t) && (t = t.\u0275providers), Array.isArray(t) ? Ne(t, n) : n(t); }
var Nt = d({ provide: String, useValue: d });
function vn(e) { return e !== null && typeof e == "object" && Nt in e; }
function Mt(e) { return !!(e && e.useExisting); }
function bt(e) { return !!(e && e.useFactory); }
function le(e) { return typeof e == "function"; }
function eo(e) { return !!e.useClass; }
var _t = new h(""), $ = {}, Je = {}, oe;
function yn() { return oe === void 0 && (oe = new Z), oe; }
var O = class {
}, B = class extends O {
    parent;
    source;
    scopes;
    records = new Map;
    _ngOnDestroyHooks = new Set;
    _onDestroyHooks = [];
    get destroyed() { return this._destroyed; }
    _destroyed = !1;
    injectorDefTypes;
    constructor(n, t, r, o) { super(), this.parent = t, this.source = r, this.scopes = o, ge(n, s => this.processProvider(s)), this.records.set(gn, _(void 0, this)), o.has("environment") && this.records.set(O, _(void 0, this)); let i = this.records.get(_t); i != null && typeof i.value == "string" && this.scopes.add(i.value), this.injectorDefTypes = new Set(this.get(hn, G, { self: !0 })); }
    retrieve(n, t) { let r = q(t) || 0; try {
        return this.get(n, N, r);
    }
    catch (o) {
        if (Jn(o))
            return o;
        throw o;
    } }
    destroy() { j(this), this._destroyed = !0; let n = b(null); try {
        for (let r of this._ngOnDestroyHooks)
            r.ngOnDestroy();
        let t = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let r of t)
            r();
    }
    finally {
        this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear(), b(n);
    } }
    onDestroy(n) { return j(this), this._onDestroyHooks.push(n), () => this.removeOnDestroy(n); }
    runInContext(n) { j(this); let t = D(this), r = E(void 0), o; try {
        return n();
    }
    finally {
        D(t), E(r);
    } }
    get(n, t = N, r) { if (j(this), n.hasOwnProperty(Ye))
        return n[Ye](this); let o = q(r), i, s = D(this), c = E(void 0); try {
        if (!(o & 4)) {
            let l = this.records.get(n);
            if (l === void 0) {
                let w = kt(n) && J(n);
                w && this.injectableDefInScope(w) ? l = _(fe(n), $) : l = null, this.records.set(n, l);
            }
            if (l != null)
                return this.hydrate(n, l, o);
        }
        let a = o & 2 ? yn() : this.parent;
        return t = o & 8 && t === N ? null : t, a.get(n, t);
    }
    catch (a) {
        let l = gt(a);
        throw l === -200 || l === -201 ? new f(l, null) : a;
    }
    finally {
        E(c), D(s);
    } }
    resolveInjectorInitializers() { let n = b(null), t = D(this), r = E(void 0), o; try {
        let i = this.get(K, G, { self: !0 });
        for (let s of i)
            s();
    }
    finally {
        D(t), E(r), b(n);
    } }
    toString() { let n = [], t = this.records; for (let r of t.keys())
        n.push(k(r)); return `R3Injector[${n.join(", ")}]`; }
    processProvider(n) { n = v(n); let t = le(n) ? n : v(n && n.provide), r = xt(n); if (!le(n) && n.multi === !0) {
        let o = this.records.get(t);
        o || (o = _(void 0, $, !0), o.factory = () => ce(o.multi), this.records.set(t, o)), t = n, o.multi.push(n);
    } this.records.set(t, r); }
    hydrate(n, t, r) { let o = b(null); try {
        if (t.value === Je)
            throw lt(k(n));
        return t.value === $ && (t.value = Je, t.value = t.factory(void 0, r)), typeof t.value == "object" && t.value && jt(t.value) && this._ngOnDestroyHooks.add(t.value), t.value;
    }
    finally {
        b(o);
    } }
    injectableDefInScope(n) { if (!n.providedIn)
        return !1; let t = v(n.providedIn); return typeof t == "string" ? t === "any" || this.scopes.has(t) : this.injectorDefTypes.has(t); }
    removeOnDestroy(n) { let t = this._onDestroyHooks.indexOf(n); t !== -1 && this._onDestroyHooks.splice(t, 1); }
};
function fe(e) { let n = J(e), t = n !== null ? n.factory : H(e); if (t !== null)
    return t; if (e instanceof h)
    throw new f(204, !1); if (e instanceof Function)
    return Ct(e); throw new f(204, !1); }
function Ct(e) { if (e.length > 0)
    throw new f(204, !1); let t = et(e); return t !== null ? () => t.factory(e) : () => new e; }
function xt(e) { if (vn(e))
    return _(void 0, e.useValue); {
    let n = Rt(e);
    return _(n, $);
} }
function Rt(e, n, t) { let r; if (le(e)) {
    let o = v(e);
    return H(o) || fe(o);
}
else if (vn(e))
    r = () => v(e.useValue);
else if (bt(e))
    r = () => e.useFactory(...ce(e.deps || []));
else if (Mt(e))
    r = (o, i) => x(v(e.useExisting), i !== void 0 && i & 8 ? 8 : void 0);
else {
    let o = v(e && (e.useClass || e.provide));
    if (Ft(e))
        r = () => new o(...ce(e.deps));
    else
        return H(o) || fe(o);
} return r; }
function j(e) { if (e.destroyed)
    throw new f(205, !1); }
function _(e, n, t = !1) { return { factory: e, value: n, multi: t ? [] : void 0 }; }
function Ft(e) { return !!e.deps; }
function jt(e) { return e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"; }
function kt(e) { return typeof e == "function" || typeof e == "object" && e.ngMetadataName === "InjectionToken"; }
function ge(e, n) { for (let t of e)
    Array.isArray(t) ? ge(t, n) : t && un(t) ? ge(t.\u0275providers, n) : n(t); }
function no(e, n) { let t; e instanceof B ? (j(e), t = e) : t = new ae(e); let r, o = D(t), i = E(void 0); try {
    return n();
}
finally {
    D(o), E(i);
} }
function Dn() { return ln() !== void 0 || ne() != null; }
function to(e) { if (!Dn())
    throw new f(-203, !1); }
var Me = 0, In = 1, p = 2, he = 3, ro = 4, Ot = 5, oo = 6, St = 7, En = 8, io = 9, Tn = 10, so = 11, uo = 12, ao = 13, wn = 14, co = 15, lo = 16, Pt = 17, fo = 18, go = 19, ho = 20, C = 21, po = 22, pe = 23, Lt = 24, mo = 25, vo = 26, yo = 27, be = 1, Do = 6, Io = 7, Eo = 8, To = 9, wo = 10;
function At(e) { return Array.isArray(e) && typeof e[be] == "object"; }
function Nn(e) { return Array.isArray(e) && e[be] === !0; }
function No(e) { return (e.flags & 4) !== 0; }
function Mo(e) { return e.componentOffset > -1; }
function bo(e) { return (e.flags & 1) === 1; }
function _o(e) { return !!e.template; }
function Co(e) { return (e[p] & 512) !== 0; }
function xo(e) { return (e.type & 16) === 16; }
function Ro(e) { return (e[p] & 32) === 32; }
function Mn(e) { return (e[p] & 256) === 256; }
var Vt = "svg", $t = "math";
function _e(e) { for (; Array.isArray(e);)
    e = e[Me]; return e; }
function Fo(e) { for (; Array.isArray(e);) {
    if (typeof e[be] == "object")
        return e;
    e = e[Me];
} return null; }
function jo(e, n) { return _e(n[e]); }
function ko(e, n) { return _e(n[e.index]); }
function Oo(e, n) { let t = e === null ? -1 : e.index; return t !== -1 ? _e(n[t]) : null; }
function qt(e, n) { return e.data[n]; }
function So(e, n) { return e[n]; }
function Po(e, n, t, r) { t >= e.data.length && (e.data[t] = null, e.blueprint[t] = null), n[t] = r; }
function Lo(e, n) { let t = n[e]; return At(t) ? t : t[Me]; }
function Ao(e) { return (e[p] & 4) === 4; }
function bn(e) { return (e[p] & 128) === 128; }
function Vo(e) { return Nn(e[he]); }
function $o(e, n) { return n == null ? null : e[n]; }
function qo(e) { e[Pt] = 0; }
function Ho(e) { e[p] & 1024 || (e[p] |= 1024, bn(e) && Ce(e)); }
function Ht(e, n) { for (; e > 0;)
    n = n[wn], e--; return n; }
function Gt(e) { return !!(e[p] & 9216 || e[Lt]?.dirty); }
function Go(e) { e[Tn].changeDetectionScheduler?.notify(8), e[p] & 64 && (e[p] |= 1024), Gt(e) && Ce(e); }
function Ce(e) { e[Tn].changeDetectionScheduler?.notify(0); let n = Qe(e); for (; n !== null && !(n[p] & 8192 || (n[p] |= 8192, !bn(n)));)
    n = Qe(n); }
function Zt(e, n) { if (Mn(e))
    throw new f(911, !1); e[C] === null && (e[C] = []), e[C].push(n); }
function Bt(e, n) { if (e[C] === null)
    return; let t = e[C].indexOf(n); t !== -1 && e[C].splice(t, 1); }
function Qe(e) { let n = e[he]; return Nn(n) ? n[he] : n; }
function Ut(e) { return e[St] ??= []; }
function Wt(e) { return e.cleanup ??= []; }
function Zo(e, n, t, r) { let o = Ut(n); o.push(t), e.firstCreatePass && Wt(e).push(r, o.length - 1); }
var u = { lFrame: xn(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var me = !1;
function Bo() { return u.lFrame.elementDepthCount; }
function Uo() { u.lFrame.elementDepthCount++; }
function Wo() { u.lFrame.elementDepthCount--; }
function Yo() { return u.bindingsEnabled; }
function Jo() { return u.skipHydrationRootTNode !== null; }
function Qo(e) { return u.skipHydrationRootTNode === e; }
function Ko() { u.bindingsEnabled = !0; }
function Xo(e) { u.skipHydrationRootTNode = e; }
function zo() { u.bindingsEnabled = !1; }
function ei() { u.skipHydrationRootTNode = null; }
function _n() { return u.lFrame.lView; }
function ni() { return u.lFrame.tView; }
function ti(e) { return u.lFrame.contextLView = e, e[En]; }
function ri(e) { return u.lFrame.contextLView = null, e; }
function Yt() { let e = Jt(); for (; e !== null && e.type === 64;)
    e = e.parent; return e; }
function Jt() { return u.lFrame.currentTNode; }
function oi() { let e = u.lFrame, n = e.currentTNode; return e.isParent ? n : n.parent; }
function ii(e, n) { let t = u.lFrame; t.currentTNode = e, t.isParent = n; }
function si() { return u.lFrame.isParent; }
function ui() { u.lFrame.isParent = !1; }
function ai() { return u.lFrame.contextLView; }
function ci() { return me; }
function Ke(e) { let n = me; return me = e, n; }
function di() { let e = u.lFrame, n = e.bindingRootIndex; return n === -1 && (n = e.bindingRootIndex = e.tView.bindingStartIndex), n; }
function li() { return u.lFrame.bindingIndex; }
function fi(e) { return u.lFrame.bindingIndex = e; }
function gi() { return u.lFrame.bindingIndex++; }
function hi(e) { let n = u.lFrame, t = n.bindingIndex; return n.bindingIndex = n.bindingIndex + e, t; }
function pi() { return u.lFrame.inI18n; }
function mi(e) { u.lFrame.inI18n = e; }
function vi(e, n) { let t = u.lFrame; t.bindingIndex = t.bindingRootIndex = e, Qt(n); }
function yi() { return u.lFrame.currentDirectiveIndex; }
function Qt(e) { u.lFrame.currentDirectiveIndex = e; }
function Di(e) { let n = u.lFrame.currentDirectiveIndex; return n === -1 ? null : e[n]; }
function Ii() { return u.lFrame.currentQueryIndex; }
function Ei(e) { u.lFrame.currentQueryIndex = e; }
function Kt(e) { let n = e[In]; return n.type === 2 ? n.declTNode : n.type === 1 ? e[Ot] : null; }
function Ti(e, n, t) { if (t & 4) {
    let o = n, i = e;
    for (; o = o.parent, o === null && !(t & 1);)
        if (o = Kt(i), o === null || (i = i[wn], o.type & 10))
            break;
    if (o === null)
        return !1;
    n = o, e = i;
} let r = u.lFrame = Cn(); return r.currentTNode = n, r.lView = e, !0; }
function wi(e) { let n = Cn(), t = e[In]; u.lFrame = n, n.currentTNode = t.firstChild, n.lView = e, n.tView = t, n.contextLView = e, n.bindingIndex = t.bindingStartIndex, n.inI18n = !1; }
function Cn() { let e = u.lFrame, n = e === null ? null : e.child; return n === null ? xn(e) : n; }
function xn(e) { let n = { currentTNode: null, isParent: !0, lView: null, tView: null, selectedIndex: -1, contextLView: null, elementDepthCount: 0, currentNamespace: null, currentDirectiveIndex: -1, bindingRootIndex: -1, bindingIndex: -1, currentQueryIndex: 0, parent: e, child: null, inI18n: !1 }; return e !== null && (e.child = n), n; }
function Rn() { let e = u.lFrame; return u.lFrame = e.parent, e.currentTNode = null, e.lView = null, e; }
var Ni = Rn;
function Mi() { let e = Rn(); e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0; }
function bi(e) { return (u.lFrame.contextLView = Ht(e, u.lFrame.contextLView))[En]; }
function _i() { return u.lFrame.selectedIndex; }
function Ci(e) { u.lFrame.selectedIndex = e; }
function xi() { let e = u.lFrame; return qt(e.tView, e.selectedIndex); }
function Ri() { u.lFrame.currentNamespace = Vt; }
function Fi() { u.lFrame.currentNamespace = $t; }
function ji() { Xt(); }
function Xt() { u.lFrame.currentNamespace = null; }
function ki() { return u.lFrame.currentNamespace; }
var Fn = !0;
function Oi() { return Fn; }
function Si(e) { Fn = e; }
function Xe(e, n = null, t = null, r) { let o = zt(e, n, t, r); return o.resolveInjectorInitializers(), o; }
function zt(e, n = null, t = null, r, o = new Set) { let i = [t || G, Tt(e)]; return r = r || (typeof e == "object" ? void 0 : k(e)), new B(i, n || yn(), r || null, o); }
var S = class e {
    static THROW_IF_NOT_FOUND = N;
    static NULL = new Z;
    static create(n, t) { if (Array.isArray(n))
        return Xe({ name: "" }, t, n, ""); {
        let r = n.name ?? "";
        return Xe({ name: r }, n.parent, n.providers, r);
    } }
    static \u0275prov = P({ token: e, providedIn: "any", factory: () => x(gn) });
    static __NG_ELEMENT_ID__ = -1;
}, er = new h(""), M = (() => { class e {
    static __NG_ELEMENT_ID__ = nr;
    static __NG_ENV_ID__ = t => t;
} return e; })(), U = class extends M {
    _lView;
    constructor(n) { super(), this._lView = n; }
    get destroyed() { return Mn(this._lView); }
    onDestroy(n) { let t = this._lView; return Zt(t, n), () => Bt(t, n); }
};
function nr() { return new U(_n()); }
var tr = !1, rr = new h(""), jn = (() => { class e {
    taskId = 0;
    pendingTasks = new Set;
    destroyed = !1;
    pendingTask = new Bn(!1);
    debugTaskTracker = g(rr, { optional: !0 });
    get hasPendingTasks() { return this.destroyed ? !1 : this.pendingTask.value; }
    get hasPendingTasksObservable() { return this.destroyed ? new Un(t => { t.next(!1), t.complete(); }) : this.pendingTask; }
    add() { !this.hasPendingTasks && !this.destroyed && this.pendingTask.next(!0); let t = this.taskId++; return this.pendingTasks.add(t), this.debugTaskTracker?.add(t), t; }
    has(t) { return this.pendingTasks.has(t); }
    remove(t) { this.pendingTasks.delete(t), this.debugTaskTracker?.remove(t), this.pendingTasks.size === 0 && this.hasPendingTasks && this.pendingTask.next(!1); }
    ngOnDestroy() { this.pendingTasks.clear(), this.hasPendingTasks && this.pendingTask.next(!1), this.destroyed = !0, this.pendingTask.unsubscribe(); }
    static \u0275prov = P({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), ve = class extends Wn {
    __isAsync;
    destroyRef = void 0;
    pendingTasks = void 0;
    constructor(n = !1) { super(), this.__isAsync = n, Dn() && (this.destroyRef = g(M, { optional: !0 }) ?? void 0, this.pendingTasks = g(jn, { optional: !0 }) ?? void 0); }
    emit(n) { let t = I(null); try {
        super.next(n);
    }
    finally {
        I(t);
    } }
    subscribe(n, t, r) { let o = n, i = t || (() => null), s = r; if (n && typeof n == "object") {
        let a = n;
        o = a.next?.bind(a), i = a.error?.bind(a), s = a.complete?.bind(a);
    } this.__isAsync && (i = this.wrapInTimeout(i), o && (o = this.wrapInTimeout(o)), s && (s = this.wrapInTimeout(s))); let c = super.subscribe({ next: o, error: i, complete: s }); return n instanceof Yn && n.add(c), c; }
    wrapInTimeout(n) { return t => { let r = this.pendingTasks?.add(); setTimeout(() => { try {
        n(t);
    }
    finally {
        r !== void 0 && this.pendingTasks?.remove(r);
    } }); }; }
}, T = ve;
function W(...e) { }
function or(e) { let n, t; function r() { e = W; try {
    t !== void 0 && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(t), n !== void 0 && clearTimeout(n);
}
catch { } } return n = setTimeout(() => { e(), r(); }), typeof requestAnimationFrame == "function" && (t = requestAnimationFrame(() => { e(), r(); })), () => r(); }
function Pi(e) { return queueMicrotask(() => e()), () => { e = W; }; }
var xe = "isAngularZone", ze = xe + "_ID", ir = 0, ye = class e {
    hasPendingMacrotasks = !1;
    hasPendingMicrotasks = !1;
    isStable = !0;
    onUnstable = new T(!1);
    onMicrotaskEmpty = new T(!1);
    onStable = new T(!1);
    onError = new T(!1);
    constructor(n) { let { enableLongStackTrace: t = !1, shouldCoalesceEventChangeDetection: r = !1, shouldCoalesceRunChangeDetection: o = !1, scheduleInRootZone: i = tr } = n; if (typeof Zone > "u")
        throw new f(908, !1); Zone.assertZonePatched(); let s = this; s._nesting = 0, s._outer = s._inner = Zone.current, Zone.TaskTrackingZoneSpec && (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec)), t && Zone.longStackTraceZoneSpec && (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)), s.shouldCoalesceEventChangeDetection = !o && r, s.shouldCoalesceRunChangeDetection = o, s.callbackScheduled = !1, s.scheduleInRootZone = i, ar(s); }
    static isInAngularZone() { return typeof Zone < "u" && Zone.current.get(xe) === !0; }
    static assertInAngularZone() { if (!e.isInAngularZone())
        throw new f(909, !1); }
    static assertNotInAngularZone() { if (e.isInAngularZone())
        throw new f(909, !1); }
    run(n, t, r) { return this._inner.run(n, t, r); }
    runTask(n, t, r, o) { let i = this._inner, s = i.scheduleEventTask("NgZoneEvent: " + o, n, sr, W, W); try {
        return i.runTask(s, t, r);
    }
    finally {
        i.cancelTask(s);
    } }
    runGuarded(n, t, r) { return this._inner.runGuarded(n, t, r); }
    runOutsideAngular(n) { return this._outer.run(n); }
}, sr = {};
function Re(e) { if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
        e._nesting++, e.onMicrotaskEmpty.emit(null);
    }
    finally {
        if (e._nesting--, !e.hasPendingMicrotasks)
            try {
                e.runOutsideAngular(() => e.onStable.emit(null));
            }
            finally {
                e.isStable = !0;
            }
    } }
function ur(e) { if (e.isCheckStableRunning || e.callbackScheduled)
    return; e.callbackScheduled = !0; function n() { or(() => { e.callbackScheduled = !1, De(e), e.isCheckStableRunning = !0, Re(e), e.isCheckStableRunning = !1; }); } e.scheduleInRootZone ? Zone.root.run(() => { n(); }) : e._outer.run(() => { n(); }), De(e); }
function ar(e) { let n = () => { ur(e); }, t = ir++; e._inner = e._inner.fork({ name: "angular", properties: { [xe]: !0, [ze]: t, [ze + t]: !0 }, onInvokeTask: (r, o, i, s, c, a) => { if (cr(a))
        return r.invokeTask(i, s, c, a); try {
        return en(e), r.invokeTask(i, s, c, a);
    }
    finally {
        (e.shouldCoalesceEventChangeDetection && s.type === "eventTask" || e.shouldCoalesceRunChangeDetection) && n(), nn(e);
    } }, onInvoke: (r, o, i, s, c, a, l) => { try {
        return en(e), r.invoke(i, s, c, a, l);
    }
    finally {
        e.shouldCoalesceRunChangeDetection && !e.callbackScheduled && !dr(a) && n(), nn(e);
    } }, onHasTask: (r, o, i, s) => { r.hasTask(i, s), o === i && (s.change == "microTask" ? (e._hasPendingMicrotasks = s.microTask, De(e), Re(e)) : s.change == "macroTask" && (e.hasPendingMacrotasks = s.macroTask)); }, onHandleError: (r, o, i, s) => (r.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1) }); }
function De(e) { e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && e.callbackScheduled === !0 ? e.hasPendingMicrotasks = !0 : e.hasPendingMicrotasks = !1; }
function en(e) { e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null)); }
function nn(e) { e._nesting--, Re(e); }
var tn = class {
    hasPendingMicrotasks = !1;
    hasPendingMacrotasks = !1;
    isStable = !0;
    onUnstable = new T;
    onMicrotaskEmpty = new T;
    onStable = new T;
    onError = new T;
    run(n, t, r) { return n.apply(t, r); }
    runGuarded(n, t, r) { return n.apply(t, r); }
    runOutsideAngular(n) { return n(); }
    runTask(n, t, r, o) { return n.apply(t, r); }
};
function cr(e) { return kn(e, "__ignore_ng_zone__"); }
function dr(e) { return kn(e, "__scheduler_tick__"); }
function kn(e, n) { return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[n] === !0; }
var R = class {
    _console = console;
    handleError(n) { this._console.error("ERROR", n); }
}, On = new h("", { factory: () => { let e = g(ye), n = g(O), t; return r => { e.runOutsideAngular(() => { n.destroyed && !t ? setTimeout(() => { throw r; }) : (t ??= n.get(R), t.handleError(r)); }); }; } }), Li = { provide: K, useValue: () => { let e = g(R, { optional: !0 }); }, multi: !0 }, lr = new h("", { factory: () => { if (typeof ngServerMode < "u" && ngServerMode)
        return; let e = g(er).defaultView; if (!e)
        return; let n = g(On), t = i => { n(i.reason), i.preventDefault(); }, r = i => { i.error ? n(i.error) : n(new Error(i.message, { cause: i })), i.preventDefault(); }, o = () => { e.addEventListener("unhandledrejection", t), e.addEventListener("error", r); }; typeof Zone < "u" ? Zone.root.run(o) : o(), g(M).onDestroy(() => { e.removeEventListener("error", r), e.removeEventListener("unhandledrejection", t); }); } });
function Ai() { return pn([Et(() => { g(lr); })]); }
function Vi(e) { return null; }
function L(e, n) { let [t, r, o] = Ae(e, n?.equal), i = t, s = i[y]; return i.set = r, i.update = o, i.asReadonly = X.bind(i), i; }
function X() { let e = this[y]; if (e.readonlyFn === void 0) {
    let n = () => this();
    n[y] = e, e.readonlyFn = n;
} return e.readonlyFn; }
function $i(e, n) { if (Pe() !== null)
    throw new f(-602, !1); }
var Sn = (() => { class e {
    view;
    node;
    constructor(t, r) { this.view = t, this.node = r; }
    static __NG_ELEMENT_ID__ = fr;
} return e; })();
function fr() { return new Sn(_n(), Yt()); }
var Y = class {
}, qi = new h("", { factory: () => !0 }), Hi = new h("", { factory: () => !1 }), Gi = new h(""), Pn = (() => { class e {
    internalPendingTasks = g(jn);
    scheduler = g(Y);
    errorHandler = g(On);
    add() { let t = this.internalPendingTasks.add(); return () => { this.internalPendingTasks.has(t) && (this.scheduler.notify(11), this.internalPendingTasks.remove(t)); }; }
    run(t) { let r = this.add(); t().catch(this.errorHandler).finally(r); }
    static \u0275prov = P({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), gr = (() => { class e {
    static \u0275prov = P({ token: e, providedIn: "root", factory: () => new Ie });
} return e; })(), Ie = class {
    dirtyEffectCount = 0;
    queues = new Map;
    add(n) { this.enqueue(n), this.schedule(n); }
    schedule(n) { n.dirty && this.dirtyEffectCount++; }
    remove(n) { let t = n.zone, r = this.queues.get(t); r.has(n) && (r.delete(n), n.dirty && this.dirtyEffectCount--); }
    enqueue(n) { let t = n.zone; this.queues.has(t) || this.queues.set(t, new Set); let r = this.queues.get(t); r.has(n) || r.add(n); }
    flush() { for (; this.dirtyEffectCount > 0;) {
        let n = !1;
        for (let [t, r] of this.queues)
            t === null ? n ||= this.flushQueue(r) : n ||= t.run(() => this.flushQueue(r));
        n || (this.dirtyEffectCount = 0);
    } }
    flushQueue(n) { let t = !1; for (let r of n)
        r.dirty && (this.dirtyEffectCount--, t = !0, r.run()); return t; }
}, Ee = class {
    [y];
    constructor(n) { this[y] = n; }
    destroy() { this[y].destroy(); }
};
function Ln(e, n) { let t = n?.injector ?? g(S), r = n?.manualCleanup !== !0 ? t.get(M) : null, o, i = t.get(Sn, null, { optional: !0 }), s = t.get(Y); return i !== null ? (o = mr(i.view, s, e), r instanceof U && r._lView === i.view && (r = null)) : o = vr(e, t.get(gr), s), o.injector = t, r !== null && (o.onDestroyFns = [r.onDestroy(() => o.destroy())]), new Ee(o); }
var An = V(A({}, $e), { cleanupFns: void 0, zone: null, onDestroyFns: null, run() { let e = Ke(!1); try {
        qe(this);
    }
    finally {
        Ke(e);
    } }, cleanup() { if (!this.cleanupFns?.length)
        return; let e = I(null); try {
        for (; this.cleanupFns.length;)
            this.cleanupFns.pop()();
    }
    finally {
        this.cleanupFns = [], I(e);
    } } }), hr = V(A({}, An), { consumerMarkedDirty() { this.scheduler.schedule(this), this.notifier.notify(12); }, destroy() { if (ee(this), this.onDestroyFns !== null)
        for (let e of this.onDestroyFns)
            e(); this.cleanup(), this.scheduler.remove(this); } }), pr = V(A({}, An), { consumerMarkedDirty() { this.view[p] |= 8192, Ce(this.view), this.notifier.notify(13); }, destroy() { if (ee(this), this.onDestroyFns !== null)
        for (let e of this.onDestroyFns)
            e(); this.cleanup(), this.view[pe]?.delete(this); } });
function mr(e, n, t) { let r = Object.create(pr); return r.view = e, r.zone = typeof Zone < "u" ? Zone.current : null, r.notifier = n, r.fn = Vn(r, t), e[pe] ??= new Set, e[pe].add(r), r.consumerMarkedDirty(r), r; }
function vr(e, n, t) { let r = Object.create(hr); return r.fn = Vn(r, e), r.scheduler = n, r.notifier = t, r.zone = typeof Zone < "u" ? Zone.current : null, r.scheduler.add(r), r.notifier.notify(12), r; }
function Vn(e, n) { return () => { n(t => (e.cleanupFns ??= []).push(t)); }; }
function m(e) { return Ve(e); }
var $n = class {
    destroyed = !1;
    listeners = null;
    errorHandler = g(R, { optional: !0 });
    destroyRef = g(M);
    constructor() { this.destroyRef.onDestroy(() => { this.destroyed = !0, this.listeners = null; }); }
    subscribe(n) { if (this.destroyed)
        throw new f(953, !1); return (this.listeners ??= []).push(n), { unsubscribe: () => { let t = this.listeners?.indexOf(n); t !== void 0 && t !== -1 && this.listeners?.splice(t, 1); } }; }
    emit(n) { if (this.destroyed) {
        console.warn(Te(953, !1));
        return;
    } if (this.listeners === null)
        return; let t = I(null); try {
        for (let r of this.listeners)
            try {
                r(n);
            }
            catch (o) {
                this.errorHandler?.handleError(o);
            }
    }
    finally {
        I(t);
    } }
};
function Qi(e) { return e.destroyRef; }
function F(e, n) { return Le(e, n?.equal); }
var yr = e => e;
function qn(e, n) { if (typeof e == "function") {
    let t = re(e, yr, n?.equal);
    return Hn(t, n?.debugName);
}
else {
    let t = re(e.source, e.computation, e.equal);
    return Hn(t, e.debugName);
} }
function Hn(e, n) { let t = e[y], r = e; return r.set = o => He(t, o), r.update = o => Ge(t, o), r.asReadonly = X.bind(e), r; }
function Ki(e) { let n = e.request, t = e.params ?? n ?? (() => null); return new je(t, Ir(e), e.defaultValue, e.equal ? Dr(e.equal) : void 0, e.debugName, e.injector ?? g(S)); }
var Fe = class {
    value;
    isLoading;
    constructor(n, t) { this.value = n, this.value.set = this.set.bind(this), this.value.update = this.update.bind(this), this.value.asReadonly = X, this.isLoading = F(() => this.status() === "loading" || this.status() === "reloading", void 0); }
    isError = F(() => this.status() === "error");
    update(n) { this.set(n(m(this.value))); }
    isValueDefined = F(() => this.isError() ? !1 : this.value() !== void 0);
    hasValue() { return this.isValueDefined(); }
    asReadonly() { return this; }
}, je = class extends Fe {
    loaderFn;
    equal;
    debugName;
    pendingTasks;
    state;
    extRequest;
    effectRef;
    pendingController;
    resolvePendingTask = void 0;
    destroyed = !1;
    unregisterOnDestroy;
    status;
    error;
    constructor(n, t, r, o, i, s) { super(F(() => { let c = this.state().stream?.(); if (!c || this.state().status === "loading" && this.error())
        return r; if (!ke(c))
        throw new Oe(this.error()); return c.value; }, { equal: o }), i), this.loaderFn = t, this.equal = o, this.debugName = i, this.extRequest = qn({ source: n, computation: c => ({ request: c, reload: 0 }) }), this.state = qn({ source: this.extRequest, computation: (c, a) => { let l = c.request === void 0 ? "idle" : "loading"; return a ? { extRequest: c, status: l, previousStatus: Gn(a.value), stream: a.value.extRequest.request === c.request ? a.value.stream : void 0 } : { extRequest: c, status: l, previousStatus: "idle", stream: void 0 }; } }), this.effectRef = Ln(this.loadEffect.bind(this), { injector: s, manualCleanup: !0 }), this.pendingTasks = s.get(Pn), this.unregisterOnDestroy = s.get(M).onDestroy(() => this.destroy()), this.status = F(() => Gn(this.state()), void 0), this.error = F(() => { let c = this.state().stream?.(); return c && !ke(c) ? c.error : void 0; }, void 0); }
    set(n) { if (this.destroyed)
        return; let t = m(this.error), r = m(this.state); if (!t) {
        let o = m(this.value);
        if (r.status === "local" && (this.equal ? this.equal(o, n) : o === n))
            return;
    } this.state.set({ extRequest: r.extRequest, status: "local", previousStatus: "local", stream: L({ value: n }, void 0) }), this.abortInProgressLoad(); }
    reload() { let { status: n } = m(this.state); return n === "idle" || n === "loading" ? !1 : (this.extRequest.update(({ request: t, reload: r }) => ({ request: t, reload: r + 1 })), !0); }
    destroy() { this.destroyed = !0, this.unregisterOnDestroy(), this.effectRef.destroy(), this.abortInProgressLoad(), this.state.set({ extRequest: { request: void 0, reload: 0 }, status: "idle", previousStatus: "idle", stream: void 0 }); }
    loadEffect() { return z(this, null, function* () { let n = this.extRequest(), { status: t, previousStatus: r } = m(this.state); if (n.request === void 0)
        return; if (t !== "loading")
        return; this.abortInProgressLoad(); let o = this.resolvePendingTask = this.pendingTasks.add(), { signal: i } = this.pendingController = new AbortController; try {
        let s = yield m(() => this.loaderFn({ params: n.request, request: n.request, abortSignal: i, previous: { status: r } }));
        if (i.aborted || m(this.extRequest) !== n)
            return;
        this.state.set({ extRequest: n, status: "resolved", previousStatus: "resolved", stream: s });
    }
    catch (s) {
        if (i.aborted || m(this.extRequest) !== n)
            return;
        this.state.set({ extRequest: n, status: "resolved", previousStatus: "error", stream: L({ error: Zn(s) }, void 0) });
    }
    finally {
        o?.(), o = void 0;
    } }); }
    abortInProgressLoad() { m(() => this.pendingController?.abort()), this.pendingController = void 0, this.resolvePendingTask?.(), this.resolvePendingTask = void 0; }
};
function Dr(e) { return (n, t) => n === void 0 || t === void 0 ? n === t : e(n, t); }
function Ir(e) { return Er(e) ? e.stream : n => z(null, null, function* () { try {
    return L({ value: yield e.loader(n) }, void 0);
}
catch (t) {
    return L({ error: Zn(t) }, void 0);
} }); }
function Er(e) { return !!e.stream; }
function Gn(e) { switch (e.status) {
    case "loading": return e.extRequest.reload === 0 ? "loading" : "reloading";
    case "resolved": return ke(e.stream()) ? "resolved" : "error";
    default: return e.status;
} }
function ke(e) { return e.error === void 0; }
function Zn(e) { return Tr(e) ? e : new Se(e); }
function Tr(e) { return e instanceof Error || typeof e == "object" && typeof e.name == "string" && typeof e.message == "string"; }
var Oe = class extends Error {
    constructor(n) { super(n.message, { cause: n }); }
}, Se = class extends Error {
    constructor(n) { super(String(n), { cause: n }); }
};
export { ie as a, xr as b, Rr as c, f as d, Te as e, Fr as f, d as g, jr as h, k as i, kr as j, Or as k, rn as l, v as m, Xn as n, Sr as o, P as p, Pr as q, J as r, Lr as s, sn as t, Be as u, h as v, Ar as w, un as x, nt as y, tt as z, rt as A, ot as B, We as C, Vr as D, it as E, $r as F, an as G, st as H, ut as I, qr as J, at as K, Hr as L, lt as M, ft as N, E as O, ht as P, x as Q, Gr as R, g as S, q as T, Zr as U, H as V, Br as W, Ur as X, Wr as Y, Yr as Z, Jr as _, Qr as $, Dt as aa, Kr as ba, Xr as ca, fn as da, zr as ea, G as fa, K as ga, gn as ha, pn as ia, Et as ja, Tt as ka, wt as la, le as ma, eo as na, _t as oa, yn as pa, O as qa, B as ra, Rt as sa, no as ta, Dn as ua, to as va, Me as wa, In as xa, p as ya, he as za, ro as Aa, Ot as Ba, oo as Ca, St as Da, En as Ea, io as Fa, Tn as Ga, so as Ha, uo as Ia, ao as Ja, wn as Ka, co as La, lo as Ma, Pt as Na, fo as Oa, go as Pa, ho as Qa, C as Ra, po as Sa, pe as Ta, Lt as Ua, mo as Va, vo as Wa, yo as Xa, Do as Ya, Io as Za, Eo as _a, To as $a, wo as ab, At as bb, Nn as cb, No as db, Mo as eb, bo as fb, _o as gb, Co as hb, xo as ib, Ro as jb, Mn as kb, Vt as lb, $t as mb, _e as nb, Fo as ob, jo as pb, ko as qb, Oo as rb, qt as sb, So as tb, Po as ub, Lo as vb, Ao as wb, bn as xb, Vo as yb, $o as zb, qo as Ab, Ho as Bb, Ht as Cb, Gt as Db, Go as Eb, Ce as Fb, Zt as Gb, Bt as Hb, Qe as Ib, Ut as Jb, Wt as Kb, Zo as Lb, Bo as Mb, Uo as Nb, Wo as Ob, Yo as Pb, Jo as Qb, Qo as Rb, Ko as Sb, Xo as Tb, zo as Ub, ei as Vb, _n as Wb, ni as Xb, ti as Yb, ri as Zb, Yt as _b, Jt as $b, oi as ac, ii as bc, si as cc, ui as dc, ai as ec, ci as fc, Ke as gc, di as hc, li as ic, fi as jc, gi as kc, hi as lc, pi as mc, mi as nc, vi as oc, yi as pc, Qt as qc, Di as rc, Ii as sc, Ei as tc, Ti as uc, wi as vc, Ni as wc, Mi as xc, bi as yc, _i as zc, Ci as Ac, xi as Bc, Ri as Cc, Fi as Dc, ji as Ec, ki as Fc, Oi as Gc, Si as Hc, Xe as Ic, zt as Jc, S as Kc, er as Lc, M as Mc, tr as Nc, rr as Oc, jn as Pc, T as Qc, or as Rc, Pi as Sc, ze as Tc, ye as Uc, tn as Vc, R as Wc, On as Xc, Li as Yc, Ai as Zc, Vi as _c, L as $c, X as ad, $i as bd, Sn as cd, Y as dd, qi as ed, Hi as fd, Gi as gd, Pn as hd, gr as id, Ln as jd, m as kd, $n as ld, Qi as md, F as nd, qn as od, Ki as pd, je as qd, Zn as rd };
/*! Bundled license information:

@angular/core/fesm2022/_untracked-chunk.mjs:
@angular/core/fesm2022/_resource-chunk.mjs:
  (**
   * @license Angular v21.1.0
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
