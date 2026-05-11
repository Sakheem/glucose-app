import { B as bc, E as Ac, F as uh, G as dh, H as Rc, I as gh, J as mh, K as yh, L as NM, a as ae, b as R, c as Ri, f as Sc, g as ki, n as Go, p as Oi, r as xi, s as Ot, w as Pi, x as ch, y as lh } from "@nf-internal/chunk-76HC7EGV";
import "@nf-internal/chunk-FIE2NKNJ";
import { a as Ln, c as fh, d as Wo, e as ph, l as hh } from "@nf-internal/chunk-K7B64FOA";
import { a as z, b as we, d as ze } from "@nf-internal/chunk-4CLCTAJ7";
var kc;
function Oc() { return kc; }
function nt(e) { let t = kc; return kc = e, t; }
var wM = Symbol("NotFound");
function xc(e) { return e === wM || e?.name === "\u0275NotFound"; }
import { setActiveConsumer as Fn } from "@angular/core/primitives/signals";
import { isNotFound as _M } from "@angular/core/primitives/di";
var Fi = class {
    full;
    major;
    minor;
    patch;
    constructor(t) { this.full = t; let n = t.split("."); this.major = n[0], this.minor = n[1], this.patch = n.slice(2).join("."); }
}, Lc = new Fi("21.2.10"), Zc = (() => { let e = Lc.full; return `https://${e.includes("-next") || e.includes("-rc") || e === "0.0.0-PLACEHOLDER" ? "next" : `v${Lc.major}`}.angular.dev`; })();
var $i = "https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss", D = class extends Error {
    code;
    constructor(t, n) { super(Xo(t, n)), this.code = t; }
};
function SM(e) { return `NG0${Math.abs(e)}`; }
function Xo(e, t) { return `${SM(e)}${t ? ": " + t : ""}`; }
var Se = globalThis;
function j(e) { for (let t in e)
    if (e[t] === j)
        return t; throw Error(""); }
function Ch(e, t) { for (let n in t)
    t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]); }
function er(e) {
    if (typeof e == "string")
        return e;
    if (Array.isArray(e))
        return `[${e.map(er).join(", ")}]`;
    if (e == null)
        return "" + e;
    let t = e.overriddenName || e.name;
    if (t)
        return `${t}`;
    let n = e.toString();
    if (n == null)
        return "" + n;
    let o = n.indexOf(`
`);
    return o >= 0 ? n.slice(0, o) : n;
}
function Ui(e, t) { return e ? t ? `${e} ${t}` : e : t || ""; }
function bM(e, t = 100) { if (!e || t < 1 || e.length <= t)
    return e; if (t == 1)
    return e.substring(0, 1) + "..."; let n = Math.round(t / 2); return e.substring(0, n) + "..." + e.substring(e.length - n); }
var AM = j({ __forward_ref__: j });
function tr(e) { return e.__forward_ref__ = tr, e; }
function x(e) { return nr(e) ? e() : e; }
function nr(e) { return typeof e == "function" && e.hasOwnProperty(AM) && e.__forward_ref__ === tr; }
function Mh(e, t, n) { e != t && Yc(n, e, t, "=="); }
function Yc(e, t, n, o) { throw new Error(`ASSERTION ERROR: ${e}` + (o == null ? "" : ` [Expected=> ${n} ${o} ${t} <=Actual]`)); }
function B(e) { return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 }; }
function or(e) { return { providers: e.providers || [], imports: e.imports || [] }; }
function rr(e) { return kM(e, Vn); }
function RM(e) { return rr(e) !== null; }
function kM(e, t) { return e.hasOwnProperty(t) && e[t] || null; }
function OM(e) { let t = e?.[Vn] ?? null; return t || null; }
function Fc(e) { return e && e.hasOwnProperty(Qo) ? e[Qo] : null; }
var Vn = j({ \u0275prov: j }), Qo = j({ \u0275inj: j }), C = class {
    _desc;
    ngMetadataName = "InjectionToken";
    \u0275prov;
    constructor(t, n) { this._desc = t, this.\u0275prov = void 0, typeof n == "number" ? this.__NG_ELEMENT_ID__ = n : n !== void 0 && (this.\u0275prov = B({ token: this, providedIn: n.providedIn || "root", factory: n.factory })); }
    get multi() { return this; }
    toString() { return `InjectionToken ${this._desc}`; }
}, vh;
function xM(e) { Yc("setInjectorProfilerContext should never be called in production mode"); let t = vh; return vh = e, t; }
function Kc(e) { return e && !!e.\u0275providers; }
var rn = j({ \u0275cmp: j }), ir = j({ \u0275dir: j }), sr = j({ \u0275pipe: j }), qi = j({ \u0275mod: j }), ot = j({ \u0275fac: j }), sn = j({ __NG_ELEMENT_ID__: j }), Eh = j({ __NG_ENV_ID__: j });
function an(e) { return Wi(e, "@NgModule"), e[qi] || null; }
function Gi(e) { let t = an(e); if (!t)
    throw new D(915, !1); return t; }
function W(e) { return Wi(e, "@Component"), e[rn] || null; }
function be(e) { return Wi(e, "@Directive"), e[ir] || null; }
function Qe(e) { return Wi(e, "@Pipe"), e[sr] || null; }
function Wi(e, t) { if (e == null)
    throw new D(-919, !1); }
function ar(e) { let t = W(e) || be(e) || Qe(e); return t !== null && t.standalone; }
function b(e) { return typeof e == "string" ? e : e == null ? "" : String(e); }
function Pe(e) { return typeof e == "function" ? e.name || e.toString() : typeof e == "object" && e != null && typeof e.type == "function" ? e.type.name || e.type.toString() : b(e); }
var Nh = j({ ngErrorCode: j }), PM = j({ ngErrorMessage: j }), LM = j({ ngTokenPath: j });
function Jc(e, t) { return wh("", -200, t); }
function zi(e, t) { throw new D(-201, !1); }
function wh(e, t, n) { let o = new D(t, e); return o[Nh] = t, o[PM] = e, n && (o[LM] = n), o; }
function FM(e) { return e[Nh]; }
var jc;
function _h() { return jc; }
function Ie(e) { let t = jc; return jc = e, t; }
function Xc(e, t, n) { let o = rr(e); if (o && o.providedIn == "root")
    return o.value === void 0 ? o.value = o.factory() : o.value; if (n & 8)
    return null; if (t !== void 0)
    return t; zi(e, ""); }
var jM = {}, en = jM, Vc = "__NG_DI_FLAG__", Hc = class {
    injector;
    constructor(t) { this.injector = t; }
    retrieve(t, n) { let o = tn(n) || 0; try {
        return this.injector.get(t, o & 8 ? null : en, o);
    }
    catch (r) {
        if (xc(r))
            return r;
        throw r;
    } }
};
function VM(e, t = 0) { let n = Oc(); if (n === void 0)
    throw new D(-203, !1); if (n === null)
    return Xc(e, void 0, t); {
    let o = HM(t), r = n.retrieve(e, o);
    if (xc(r)) {
        if (o.optional)
            return null;
        throw r;
    }
    return r;
} }
function pe(e, t = 0) { return (_h() || VM)(x(e), t); }
function Qi(e) { throw new D(202, !1); }
function v(e, t) { return pe(e, tn(t)); }
function tn(e) { return typeof e > "u" || typeof e == "number" ? e : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4); }
function HM(e) { return { optional: !!(e & 8), host: !!(e & 1), self: !!(e & 2), skipSelf: !!(e & 4) }; }
function Bc(e) { let t = []; for (let n = 0; n < e.length; n++) {
    let o = x(e[n]);
    if (Array.isArray(o)) {
        if (o.length === 0)
            throw new D(900, !1);
        let r, i = 0;
        for (let s = 0; s < o.length; s++) {
            let a = o[s], c = BM(a);
            typeof c == "number" ? c === -1 ? r = a.token : i |= c : r = a;
        }
        t.push(pe(r, i));
    }
    else
        t.push(pe(o));
} return t; }
function Hn(e, t) { return e[Vc] = t, e.prototype[Vc] = t, e; }
function BM(e) { return e[Vc]; }
function xt(e, t) { let n = e.hasOwnProperty(ot); return n ? e[ot] : null; }
function Sh(e, t, n) { if (e.length !== t.length)
    return !1; for (let o = 0; o < e.length; o++) {
    let r = e[o], i = t[o];
    if (n && (r = n(r), i = n(i)), i !== r)
        return !1;
} return !0; }
function Ze(e) { return e.flat(Number.POSITIVE_INFINITY); }
function Zi(e, t) { e.forEach(n => Array.isArray(n) ? Zi(n, t) : t(n)); }
function el(e, t, n) { t >= e.length ? e.push(n) : e.splice(t, 0, n); }
function cr(e, t) { return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]; }
function lr(e, t) { let n = []; for (let o = 0; o < e; o++)
    n.push(t); return n; }
function tl(e, t, n) { let o = e.length - n; for (; t < o;)
    e[t] = e[t + n], t++; for (; n--;)
    e.pop(); }
function nl(e, t, n, o) { let r = e.length; if (r == t)
    e.push(n, o);
else if (r === 1)
    e.push(o, e[0]), e[0] = n;
else {
    for (r--, e.push(e[r - 1], e[r]); r > t;) {
        let i = r - 2;
        e[r] = e[i], r--;
    }
    e[t] = n, e[t + 1] = o;
} }
function ur(e, t, n) { let o = Bn(e, t); return o >= 0 ? e[o | 1] = n : (o = ~o, nl(e, o, t, n)), o; }
function Yi(e, t) { let n = Bn(e, t); if (n >= 0)
    return e[n | 1]; }
function Bn(e, t) { return $M(e, t, 1); }
function $M(e, t, n) { let o = 0, r = e.length >> n; for (; r !== o;) {
    let i = o + (r - o >> 1), s = e[i << n];
    if (t === s)
        return i << n;
    s > t ? r = i : o = i + 1;
} return ~(r << n); }
var Le = {}, F = [], Fe = new C(""), ol = new C("", -1), rl = new C(""), Zo = class {
    get(t, n = en) { if (n === en) {
        let r = wh("", -201);
        throw r.name = "\u0275NotFound", r;
    } return n; }
};
function Ye(e) { return { \u0275providers: e }; }
function bh(e) { return Ye([{ provide: Fe, multi: !0, useValue: e }]); }
function Ah(...e) { return { \u0275providers: Ki(!0, e), \u0275fromNgModule: !0 }; }
function Ki(e, ...t) { let n = [], o = new Set, r, i = s => { n.push(s); }; return Zi(t, s => { let a = s; ji(a, i, [], o) && (r ||= [], r.push(a)); }), r !== void 0 && Rh(r, i), n; }
function Rh(e, t) { for (let n = 0; n < e.length; n++) {
    let { ngModule: o, providers: r } = e[n];
    il(r, i => { t(i, o); });
} }
function ji(e, t, n, o) { if (e = x(e), !e)
    return !1; let r = null, i = Fc(e), s = !i && W(e); if (!i && !s) {
    let c = e.ngModule;
    if (i = Fc(c), i)
        r = c;
    else
        return !1;
}
else {
    if (s && !s.standalone)
        return !1;
    r = e;
} let a = o.has(r); if (s) {
    if (a)
        return !1;
    if (o.add(r), s.dependencies) {
        let c = typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
        for (let l of c)
            ji(l, t, n, o);
    }
}
else if (i) {
    if (i.imports != null && !a) {
        o.add(r);
        let l;
        Zi(i.imports, u => { ji(u, t, n, o) && (l ||= [], l.push(u)); }), l !== void 0 && Rh(l, t);
    }
    if (!a) {
        let l = xt(r) || (() => new r);
        t({ provide: r, useFactory: l, deps: F }, r), t({ provide: rl, useValue: r, multi: !0 }, r), t({ provide: Fe, useValue: () => pe(r), multi: !0 }, r);
    }
    let c = i.providers;
    if (c != null && !a) {
        let l = e;
        il(c, u => { t(u, l); });
    }
}
else
    return !1; return r !== e && e.providers !== void 0; }
function il(e, t) { for (let n of e)
    Kc(n) && (n = n.\u0275providers), Array.isArray(n) ? il(n, t) : t(n); }
var UM = j({ provide: String, useValue: j });
function kh(e) { return e !== null && typeof e == "object" && UM in e; }
function qM(e) { return !!(e && e.useExisting); }
function GM(e) { return !!(e && e.useFactory); }
function nn(e) { return typeof e == "function"; }
function Oh(e) { return !!e.useClass; }
var sl = new C(""), Li = {}, Ih = {}, Pc;
function $n() { return Pc === void 0 && (Pc = new Zo), Pc; }
var _e = class {
}, on = class extends _e {
    parent;
    source;
    scopes;
    records = new Map;
    _ngOnDestroyHooks = new Set;
    _onDestroyHooks = [];
    get destroyed() { return this._destroyed; }
    _destroyed = !1;
    injectorDefTypes;
    constructor(t, n, o, r) { super(), this.parent = n, this.source = o, this.scopes = r, Uc(t, s => this.processProvider(s)), this.records.set(ol, jn(void 0, this)), r.has("environment") && this.records.set(_e, jn(void 0, this)); let i = this.records.get(sl); i != null && typeof i.value == "string" && this.scopes.add(i.value), this.injectorDefTypes = new Set(this.get(rl, F, { self: !0 })); }
    retrieve(t, n) { let o = tn(n) || 0; try {
        return this.get(t, en, o);
    }
    catch (r) {
        if (_M(r))
            return r;
        throw r;
    } }
    destroy() { zo(this), this._destroyed = !0; let t = Fn(null); try {
        for (let o of this._ngOnDestroyHooks)
            o.ngOnDestroy();
        let n = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let o of n)
            o();
    }
    finally {
        this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear(), Fn(t);
    } }
    onDestroy(t) { return zo(this), this._onDestroyHooks.push(t), () => this.removeOnDestroy(t); }
    runInContext(t) { zo(this); let n = nt(this), o = Ie(void 0), r; try {
        return t();
    }
    finally {
        nt(n), Ie(o);
    } }
    get(t, n = en, o) { if (zo(this), t.hasOwnProperty(Eh))
        return t[Eh](this); let r = tn(o), i, s = nt(this), a = Ie(void 0); try {
        if (!(r & 4)) {
            let l = this.records.get(t);
            if (l === void 0) {
                let u = YM(t) && rr(t);
                u && this.injectableDefInScope(u) ? l = jn($c(t), Li) : l = null, this.records.set(t, l);
            }
            if (l != null)
                return this.hydrate(t, l, r);
        }
        let c = r & 2 ? $n() : this.parent;
        return n = r & 8 && n === en ? null : n, c.get(t, n);
    }
    catch (c) {
        let l = FM(c);
        throw l === -200 || l === -201 ? new D(l, null) : c;
    }
    finally {
        Ie(a), nt(s);
    } }
    resolveInjectorInitializers() { let t = Fn(null), n = nt(this), o = Ie(void 0), r; try {
        let i = this.get(Fe, F, { self: !0 });
        for (let s of i)
            s();
    }
    finally {
        nt(n), Ie(o), Fn(t);
    } }
    toString() { return "R3Injector[...]"; }
    processProvider(t) { t = x(t); let n = nn(t) ? t : x(t && t.provide), o = zM(t); if (!nn(t) && t.multi === !0) {
        let r = this.records.get(n);
        r || (r = jn(void 0, Li, !0), r.factory = () => Bc(r.multi), this.records.set(n, r)), n = t, r.multi.push(t);
    } this.records.set(n, o); }
    hydrate(t, n, o) { let r = Fn(null); try {
        if (n.value === Ih)
            throw Jc("");
        return n.value === Li && (n.value = Ih, n.value = n.factory(void 0, o)), typeof n.value == "object" && n.value && ZM(n.value) && this._ngOnDestroyHooks.add(n.value), n.value;
    }
    finally {
        Fn(r);
    } }
    injectableDefInScope(t) { if (!t.providedIn)
        return !1; let n = x(t.providedIn); return typeof n == "string" ? n === "any" || this.scopes.has(n) : this.injectorDefTypes.has(n); }
    removeOnDestroy(t) { let n = this._onDestroyHooks.indexOf(t); n !== -1 && this._onDestroyHooks.splice(n, 1); }
};
function $c(e) { let t = rr(e), n = t !== null ? t.factory : xt(e); if (n !== null)
    return n; if (e instanceof C)
    throw new D(-204, !1); if (e instanceof Function)
    return WM(e); throw new D(-204, !1); }
function WM(e) { if (e.length > 0)
    throw new D(-204, !1); let n = OM(e); return n !== null ? () => n.factory(e) : () => new e; }
function zM(e) { if (kh(e))
    return jn(void 0, e.useValue); {
    let t = al(e);
    return jn(t, Li);
} }
function al(e, t, n) { let o; if (nn(e)) {
    let r = x(e);
    return xt(r) || $c(r);
}
else if (kh(e))
    o = () => x(e.useValue);
else if (GM(e))
    o = () => e.useFactory(...Bc(e.deps || []));
else if (qM(e))
    o = (r, i) => pe(x(e.useExisting), i !== void 0 && i & 8 ? 8 : void 0);
else {
    let r = x(e && (e.useClass || e.provide));
    if (QM(e))
        o = () => new r(...Bc(e.deps));
    else
        return xt(r) || $c(r);
} return o; }
function zo(e) { if (e.destroyed)
    throw new D(-205, !1); }
function jn(e, t, n = !1) { return { factory: e, value: t, multi: n ? [] : void 0 }; }
function QM(e) { return !!e.deps; }
function ZM(e) { return e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"; }
function YM(e) { return typeof e == "function" || typeof e == "object" && e.ngMetadataName === "InjectionToken"; }
function Uc(e, t) { for (let n of e)
    Array.isArray(n) ? Uc(n, t) : n && Kc(n) ? Uc(n.\u0275providers, t) : t(n); }
function Ji(e, t) { let n; e instanceof on ? (zo(e), n = e) : n = new Hc(e); let o, r = nt(n), i = Ie(void 0); try {
    return t();
}
finally {
    nt(r), Ie(i);
} }
function Xi() { return _h() !== void 0 || Oc() != null; }
function KM(e) { if (!Xi())
    throw new D(-203, !1); }
var U = 0, m = 1, N = 2, Q = 3, he = 4, le = 5, ue = 6, Lt = 7, $ = 8, P = 9, je = 10, w = 11, Ft = 12, dr = 13, cn = 14, ee = 15, jt = 16, ln = 17, rt = 18, Ve = 19, cl = 20, mt = 21, es = 22, Pt = 23, Ae = 24, un = 25, it = 26, I = 27, ll = 1, Re = 6, Ke = 7, fr = 8, dn = 9, G = 10;
function ne(e) { return Array.isArray(e) && typeof e[ll] == "object"; }
function K(e) { return Array.isArray(e) && e[ll] === !0; }
function ul(e) { return (e.flags & 4) !== 0; }
function De(e) { return e.componentOffset > -1; }
function Un(e) { return (e.flags & 1) === 1; }
function He(e) { return !!e.template; }
function st(e) { return (e[N] & 512) !== 0; }
function dl(e) { return (e.type & 16) === 16; }
function xh(e) { return (e[N] & 32) === 32; }
function at(e) { return (e[N] & 256) === 256; }
var fl = "svg", pl = "math";
function L(e) { for (; Array.isArray(e);)
    e = e[U]; return e; }
function pr(e) { for (; Array.isArray(e);) {
    if (typeof e[ll] == "object")
        return e;
    e = e[U];
} return null; }
function fn(e, t) { return L(t[e]); }
function ie(e, t) { return L(t[e.index]); }
function Ph(e, t) { let n = e === null ? -1 : e.index; return n !== -1 ? L(t[n]) : null; }
function Vt(e, t) { return e.data[t]; }
function Ht(e, t) { return e[t]; }
function hr(e, t, n, o) { n >= e.data.length && (e.data[n] = null, e.blueprint[n] = null), t[n] = o; }
function ye(e, t) { let n = t[e]; return ne(n) ? n : n[U]; }
function Lh(e) { return (e[N] & 4) === 4; }
function ts(e) { return (e[N] & 128) === 128; }
function Fh(e) { return K(e[Q]); }
function ge(e, t) { return t == null ? null : e[t]; }
function hl(e) { e[ln] = 0; }
function ns(e) { e[N] & 1024 || (e[N] |= 1024, ts(e) && pn(e)); }
function gl(e, t) { for (; e > 0;)
    t = t[cn], e--; return t; }
function qn(e) { return !!(e[N] & 9216 || e[Ae]?.dirty); }
function os(e) { e[je].changeDetectionScheduler?.notify(8), e[N] & 64 && (e[N] |= 1024), qn(e) && pn(e); }
function pn(e) { e[je].changeDetectionScheduler?.notify(0); let t = yt(e); for (; t !== null && !(t[N] & 8192 || (t[N] |= 8192, !ts(t)));)
    t = yt(t); }
function gr(e, t) { if (at(e))
    throw new D(911, !1); e[mt] === null && (e[mt] = []), e[mt].push(t); }
function rs(e, t) { if (e[mt] === null)
    return; let n = e[mt].indexOf(t); n !== -1 && e[mt].splice(n, 1); }
function yt(e) { let t = e[Q]; return K(t) ? t[Q] : t; }
function ml(e) { return e[Lt] ??= []; }
function yl(e) { return e.cleanup ??= []; }
function jh(e, t, n, o) { let r = ml(t); r.push(n), e.firstCreatePass && yl(e).push(o, r.length - 1); }
var S = { lFrame: Wh(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var qc = !1;
function Vh() { return S.lFrame.elementDepthCount; }
function Hh() { S.lFrame.elementDepthCount++; }
function vl() { S.lFrame.elementDepthCount--; }
function is() { return S.bindingsEnabled; }
function mr() { return S.skipHydrationRootTNode !== null; }
function El(e) { return S.skipHydrationRootTNode === e; }
function Il() { S.bindingsEnabled = !0; }
function Bh(e) { S.skipHydrationRootTNode = e; }
function Dl() { S.bindingsEnabled = !1; }
function Tl() { S.skipHydrationRootTNode = null; }
function g() { return S.lFrame.lView; }
function A() { return S.lFrame.tView; }
function Cl(e) { return S.lFrame.contextLView = e, e[$]; }
function Ml(e) { return S.lFrame.contextLView = null, e; }
function _() { let e = Nl(); for (; e !== null && e.type === 64;)
    e = e.parent; return e; }
function Nl() { return S.lFrame.currentTNode; }
function Gn() { let e = S.lFrame, t = e.currentTNode; return e.isParent ? t : t.parent; }
function ct(e, t) { let n = S.lFrame; n.currentTNode = e, n.isParent = t; }
function wl() { return S.lFrame.isParent; }
function _l() { S.lFrame.isParent = !1; }
function Sl() { return S.lFrame.contextLView; }
function bl() { return qc; }
function Yo(e) { let t = qc; return qc = e, t; }
function me() { let e = S.lFrame, t = e.bindingRootIndex; return t === -1 && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t; }
function lt() { return S.lFrame.bindingIndex; }
function Al(e) { return S.lFrame.bindingIndex = e; }
function ve() { return S.lFrame.bindingIndex++; }
function ut(e) { let t = S.lFrame, n = t.bindingIndex; return t.bindingIndex = t.bindingIndex + e, n; }
function $h() { return S.lFrame.inI18n; }
function Rl(e) { S.lFrame.inI18n = e; }
function Uh(e, t) { let n = S.lFrame; n.bindingIndex = n.bindingRootIndex = e, ss(t); }
function qh() { return S.lFrame.currentDirectiveIndex; }
function ss(e) { S.lFrame.currentDirectiveIndex = e; }
function as(e) { let t = S.lFrame.currentDirectiveIndex; return t === -1 ? null : e[t]; }
function cs() { return S.lFrame.currentQueryIndex; }
function yr(e) { S.lFrame.currentQueryIndex = e; }
function JM(e) { let t = e[m]; return t.type === 2 ? t.declTNode : t.type === 1 ? e[le] : null; }
function kl(e, t, n) { if (n & 4) {
    let r = t, i = e;
    for (; r = r.parent, r === null && !(n & 1);)
        if (r = JM(i), r === null || (i = i[cn], r.type & 10))
            break;
    if (r === null)
        return !1;
    t = r, e = i;
} let o = S.lFrame = Gh(); return o.currentTNode = t, o.lView = e, !0; }
function ls(e) { let t = Gh(), n = e[m]; S.lFrame = t, t.currentTNode = n.firstChild, t.lView = e, t.tView = n, t.contextLView = e, t.bindingIndex = n.bindingStartIndex, t.inI18n = !1; }
function Gh() { let e = S.lFrame, t = e === null ? null : e.child; return t === null ? Wh(e) : t; }
function Wh(e) { let t = { currentTNode: null, isParent: !0, lView: null, tView: null, selectedIndex: -1, contextLView: null, elementDepthCount: 0, currentNamespace: null, currentDirectiveIndex: -1, bindingRootIndex: -1, bindingIndex: -1, currentQueryIndex: 0, parent: e, child: null, inI18n: !1 }; return e !== null && (e.child = t), t; }
function zh() { let e = S.lFrame; return S.lFrame = e.parent, e.currentTNode = null, e.lView = null, e; }
var Ol = zh;
function us() { let e = zh(); e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0; }
function Qh(e) { return (S.lFrame.contextLView = gl(e, S.lFrame.contextLView))[$]; }
function de() { return S.lFrame.selectedIndex; }
function Bt(e) { S.lFrame.selectedIndex = e; }
function ke() { let e = S.lFrame; return Vt(e.tView, e.selectedIndex); }
function xl() { S.lFrame.currentNamespace = fl; }
function Pl() { S.lFrame.currentNamespace = pl; }
function Ll() { XM(); }
function XM() { S.lFrame.currentNamespace = null; }
function Fl() { return S.lFrame.currentNamespace; }
var Zh = !0;
function vr() { return Zh; }
function Je(e) { Zh = e; }
function Gc(e, t = null, n = null, o) { let r = jl(e, t, n, o); return r.resolveInjectorInitializers(), r; }
function jl(e, t = null, n = null, o, r = new Set) { let i = [n || F, Ah(e)], s; return new on(i, t || $n(), s || null, r); }
var ce = class e {
    static THROW_IF_NOT_FOUND = en;
    static NULL = new Zo;
    static create(t, n) { if (Array.isArray(t))
        return Gc({ name: "" }, n, t, ""); {
        let o = t.name ?? "";
        return Gc({ name: o }, t.parent, t.providers, o);
    } }
    static \u0275prov = B({ token: e, providedIn: "any", factory: () => pe(ol) });
    static __NG_ELEMENT_ID__ = -1;
}, $t = new C(""), Be = (() => { class e {
    static __NG_ELEMENT_ID__ = eN;
    static __NG_ENV_ID__ = n => n;
} return e; })(), Vi = class extends Be {
    _lView;
    constructor(t) { super(), this._lView = t; }
    get destroyed() { return at(this._lView); }
    onDestroy(t) { let n = this._lView; return gr(n, t), () => rs(n, t); }
};
function eN() { return new Vi(g()); }
var Vl = !1, Hl = new C(""), Et = (() => { class e {
    taskId = 0;
    pendingTasks = new Set;
    destroyed = !1;
    pendingTask = new ph(!1);
    debugTaskTracker = v(Hl, { optional: !0 });
    get hasPendingTasks() { return this.destroyed ? !1 : this.pendingTask.value; }
    get hasPendingTasksObservable() { return this.destroyed ? new fh(n => { n.next(!1), n.complete(); }) : this.pendingTask; }
    add() { !this.hasPendingTasks && !this.destroyed && this.pendingTask.next(!0); let n = this.taskId++; return this.pendingTasks.add(n), this.debugTaskTracker?.add(n), n; }
    has(n) { return this.pendingTasks.has(n); }
    remove(n) { this.pendingTasks.delete(n), this.debugTaskTracker?.remove(n), this.pendingTasks.size === 0 && this.hasPendingTasks && this.pendingTask.next(!1); }
    ngOnDestroy() { this.pendingTasks.clear(), this.hasPendingTasks && this.pendingTask.next(!1), this.destroyed = !0, this.pendingTask.unsubscribe(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Wc = class extends Wo {
    __isAsync;
    destroyRef = void 0;
    pendingTasks = void 0;
    constructor(t = !1) { super(), this.__isAsync = t, Xi() && (this.destroyRef = v(Be, { optional: !0 }) ?? void 0, this.pendingTasks = v(Et, { optional: !0 }) ?? void 0); }
    emit(t) { let n = R(null); try {
        super.next(t);
    }
    finally {
        R(n);
    } }
    subscribe(t, n, o) { let r = t, i = n || (() => null), s = o; if (t && typeof t == "object") {
        let c = t;
        r = c.next?.bind(c), i = c.error?.bind(c), s = c.complete?.bind(c);
    } this.__isAsync && (i = this.wrapInTimeout(i), r && (r = this.wrapInTimeout(r)), s && (s = this.wrapInTimeout(s))); let a = super.subscribe({ next: r, error: i, complete: s }); return t instanceof Ln && t.add(a), a; }
    wrapInTimeout(t) { return n => { let o = this.pendingTasks?.add(); setTimeout(() => { try {
        t(n);
    }
    finally {
        o !== void 0 && this.pendingTasks?.remove(o);
    } }); }; }
}, gt = Wc;
function Hi(...e) { }
function Bl(e) { let t, n; function o() { e = Hi; try {
    n !== void 0 && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(n), t !== void 0 && clearTimeout(t);
}
catch { } } return t = setTimeout(() => { e(), o(); }), typeof requestAnimationFrame == "function" && (n = requestAnimationFrame(() => { e(), o(); })), () => o(); }
function Yh(e) { return queueMicrotask(() => e()), () => { e = Hi; }; }
var $l = "isAngularZone", Ko = $l + "_ID", tN = 0, q = class e {
    hasPendingMacrotasks = !1;
    hasPendingMicrotasks = !1;
    isStable = !0;
    onUnstable = new gt(!1);
    onMicrotaskEmpty = new gt(!1);
    onStable = new gt(!1);
    onError = new gt(!1);
    constructor(t) { let { enableLongStackTrace: n = !1, shouldCoalesceEventChangeDetection: o = !1, shouldCoalesceRunChangeDetection: r = !1, scheduleInRootZone: i = Vl } = t; if (typeof Zone > "u")
        throw new D(908, !1); Zone.assertZonePatched(); let s = this; s._nesting = 0, s._outer = s._inner = Zone.current, Zone.TaskTrackingZoneSpec && (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec)), n && Zone.longStackTraceZoneSpec && (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)), s.shouldCoalesceEventChangeDetection = !r && o, s.shouldCoalesceRunChangeDetection = r, s.callbackScheduled = !1, s.scheduleInRootZone = i, rN(s); }
    static isInAngularZone() { return typeof Zone < "u" && Zone.current.get($l) === !0; }
    static assertInAngularZone() { if (!e.isInAngularZone())
        throw new D(909, !1); }
    static assertNotInAngularZone() { if (e.isInAngularZone())
        throw new D(909, !1); }
    run(t, n, o) { return this._inner.run(t, n, o); }
    runTask(t, n, o, r) { let i = this._inner, s = i.scheduleEventTask("NgZoneEvent: " + r, t, nN, Hi, Hi); try {
        return i.runTask(s, n, o);
    }
    finally {
        i.cancelTask(s);
    } }
    runGuarded(t, n, o) { return this._inner.runGuarded(t, n, o); }
    runOutsideAngular(t) { return this._outer.run(t); }
}, nN = {};
function Ul(e) { if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
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
function oN(e) { if (e.isCheckStableRunning || e.callbackScheduled)
    return; e.callbackScheduled = !0; function t() { Bl(() => { e.callbackScheduled = !1, zc(e), e.isCheckStableRunning = !0, Ul(e), e.isCheckStableRunning = !1; }); } e.scheduleInRootZone ? Zone.root.run(() => { t(); }) : e._outer.run(() => { t(); }), zc(e); }
function rN(e) { let t = () => { oN(e); }, n = tN++; e._inner = e._inner.fork({ name: "angular", properties: { [$l]: !0, [Ko]: n, [Ko + n]: !0 }, onInvokeTask: (o, r, i, s, a, c) => { if (iN(c))
        return o.invokeTask(i, s, a, c); try {
        return Dh(e), o.invokeTask(i, s, a, c);
    }
    finally {
        (e.shouldCoalesceEventChangeDetection && s.type === "eventTask" || e.shouldCoalesceRunChangeDetection) && t(), Th(e);
    } }, onInvoke: (o, r, i, s, a, c, l) => { try {
        return Dh(e), o.invoke(i, s, a, c, l);
    }
    finally {
        e.shouldCoalesceRunChangeDetection && !e.callbackScheduled && !sN(c) && t(), Th(e);
    } }, onHasTask: (o, r, i, s) => { o.hasTask(i, s), r === i && (s.change == "microTask" ? (e._hasPendingMicrotasks = s.microTask, zc(e), Ul(e)) : s.change == "macroTask" && (e.hasPendingMacrotasks = s.macroTask)); }, onHandleError: (o, r, i, s) => (o.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1) }); }
function zc(e) { e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && e.callbackScheduled === !0 ? e.hasPendingMicrotasks = !0 : e.hasPendingMicrotasks = !1; }
function Dh(e) { e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null)); }
function Th(e) { e._nesting--, Ul(e); }
var Jo = class {
    hasPendingMicrotasks = !1;
    hasPendingMacrotasks = !1;
    isStable = !0;
    onUnstable = new gt;
    onMicrotaskEmpty = new gt;
    onStable = new gt;
    onError = new gt;
    run(t, n, o) { return t.apply(n, o); }
    runGuarded(t, n, o) { return t.apply(n, o); }
    runOutsideAngular(t) { return t(); }
    runTask(t, n, o, r) { return t.apply(n, o); }
};
function iN(e) { return Kh(e, "__ignore_ng_zone__"); }
function sN(e) { return Kh(e, "__scheduler_tick__"); }
function Kh(e, t) { return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0; }
var vt = class {
    _console = console;
    handleError(t) { this._console.error("ERROR", t); }
}, It = new C("", { factory: () => { let e = v(q), t = v(_e), n; return o => { e.runOutsideAngular(() => { t.destroyed && !n ? setTimeout(() => { throw o; }) : (n ??= t.get(vt), n.handleError(o)); }); }; } }), ql = { provide: Fe, useValue: () => { let e = v(vt, { optional: !0 }); }, multi: !0 }, aN = new C("", { factory: () => { if (typeof ngServerMode < "u" && ngServerMode)
        return; let e = v($t).defaultView; if (!e)
        return; let t = v(It), n = i => { t(i.reason), i.preventDefault(); }, o = i => { i.error ? t(i.error) : t(new Error(i.message, { cause: i })), i.preventDefault(); }, r = () => { e.addEventListener("unhandledrejection", n), e.addEventListener("error", o); }; typeof Zone < "u" ? Zone.root.run(r) : r(), v(Be).onDestroy(() => { e.removeEventListener("error", o), e.removeEventListener("unhandledrejection", n); }); } });
function cN() { return Ye([bh(() => { v(aN); })]); }
function lN(e) { return null; }
function Ut(e, t) { let [n, o, r] = lh(e, t?.equal), i = n, s = i[ae]; return i.set = o, i.update = r, i.asReadonly = Wn.bind(i), i; }
function Wn() { let e = this[ae]; if (e.readonlyFn === void 0) {
    let t = () => this();
    t[ae] = e, e.readonlyFn = t;
} return e.readonlyFn; }
function uN(e, t) { if (Ri() !== null)
    throw new D(-602, !1); }
var zn = (() => { class e {
    view;
    node;
    constructor(n, o) { this.view = n, this.node = o; }
    static __NG_ELEMENT_ID__ = dN;
} return e; })();
function dN() { return new zn(g(), _()); }
var xe = class {
}, Qn = new C("", { factory: () => !0 }), fN = new C("", { factory: () => !1 }), ds = new C(""), Er = (() => { class e {
    internalPendingTasks = v(Et);
    scheduler = v(xe);
    errorHandler = v(It);
    add() { let n = this.internalPendingTasks.add(); return () => { this.internalPendingTasks.has(n) && (this.scheduler.notify(11), this.internalPendingTasks.remove(n)); }; }
    run(n) { let o = this.add(); n().catch(this.errorHandler).finally(o); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), fs = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new Qc });
} return e; })(), Qc = class {
    dirtyEffectCount = 0;
    queues = new Map;
    add(t) { this.enqueue(t), this.schedule(t); }
    schedule(t) { t.dirty && this.dirtyEffectCount++; }
    remove(t) { let n = t.zone, o = this.queues.get(n); o.has(t) && (o.delete(t), t.dirty && this.dirtyEffectCount--); }
    enqueue(t) { let n = t.zone; this.queues.has(n) || this.queues.set(n, new Set); let o = this.queues.get(n); o.has(t) || o.add(t); }
    flush() { for (; this.dirtyEffectCount > 0;) {
        let t = !1;
        for (let [n, o] of this.queues)
            n === null ? t ||= this.flushQueue(o) : t ||= n.run(() => this.flushQueue(o));
        t || (this.dirtyEffectCount = 0);
    } }
    flushQueue(t) { let n = !1; for (let o of t)
        o.dirty && (this.dirtyEffectCount--, n = !0, o.run()); return n; }
}, Bi = class {
    [ae];
    constructor(t) { this[ae] = t; }
    destroy() { this[ae].destroy(); }
};
function Gl(e, t) { let n = t?.injector ?? v(ce), o = t?.manualCleanup !== !0 ? n.get(Be) : null, r, i = n.get(zn, null, { optional: !0 }), s = n.get(xe); return i !== null ? (r = gN(i.view, s, e), o instanceof Vi && o._lView === i.view && (o = null)) : r = mN(e, n.get(fs), s), r.injector = n, o !== null && (r.onDestroyFns = [o.onDestroy(() => r.destroy())]), new Bi(r); }
var Jh = we(z({}, uh), { cleanupFns: void 0, zone: null, onDestroyFns: null, run() { let e = Yo(!1); try {
        dh(this);
    }
    finally {
        Yo(e);
    } }, cleanup() { if (!this.cleanupFns?.length)
        return; let e = R(null); try {
        for (; this.cleanupFns.length;)
            this.cleanupFns.pop()();
    }
    finally {
        this.cleanupFns = [], R(e);
    } } }), pN = we(z({}, Jh), { consumerMarkedDirty() { this.scheduler.schedule(this), this.notifier.notify(12); }, destroy() { if (Ot(this), this.onDestroyFns !== null)
        for (let e of this.onDestroyFns)
            e(); this.cleanup(), this.scheduler.remove(this); } }), hN = we(z({}, Jh), { consumerMarkedDirty() { this.view[N] |= 8192, pn(this.view), this.notifier.notify(13); }, destroy() { if (Ot(this), this.onDestroyFns !== null)
        for (let e of this.onDestroyFns)
            e(); this.cleanup(), this.view[Pt]?.delete(this); } });
function gN(e, t, n) { let o = Object.create(hN); return o.view = e, o.zone = typeof Zone < "u" ? Zone.current : null, o.notifier = t, o.fn = Xh(o, n), e[Pt] ??= new Set, e[Pt].add(o), o.consumerMarkedDirty(o), o; }
function mN(e, t, n) { let o = Object.create(pN); return o.fn = Xh(o, e), o.scheduler = t, o.notifier = n, o.zone = typeof Zone < "u" ? Zone.current : null, o.scheduler.add(o), o.notifier.notify(12), o; }
function Xh(e, t) { return () => { t(n => (e.cleanupFns ??= []).push(n)); }; }
import { setActiveConsumer as Kn } from "@angular/core/primitives/signals";
var Zn = { JSACTION: "jsaction" };
function ft(e) { return { toString: e }.toString(); }
var Jn = "__annotations__", Xn = "__parameters__", eo = "__prop__metadata__";
function ti(e, t, n, o, r) { return ft(() => { let i = vd(t); function s(...a) { if (this instanceof s)
    return i.call(this, ...a), this; let c = new s(...a); return function (u) { return r && r(u, ...a), (u.hasOwnProperty(Jn) ? u[Jn] : Object.defineProperty(u, Jn, { value: [] })[Jn]).push(c), u; }; } return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = e, s.annotationCls = s, s; }); }
function vd(e) { return function (...n) { if (e) {
    let o = e(...n);
    for (let r in o)
        this[r] = o[r];
} }; }
function To(e, t, n) { return ft(() => { let o = vd(t); function r(...i) { if (this instanceof r)
    return o.apply(this, i), this; let s = new r(...i); return a.annotation = s, a; function a(c, l, u) { let d = c.hasOwnProperty(Xn) ? c[Xn] : Object.defineProperty(c, Xn, { value: [] })[Xn]; for (; d.length <= u;)
    d.push(null); return (d[u] = d[u] || []).push(s), c; } } return r.prototype.ngMetadataName = e, r.annotationCls = r, r; }); }
function wt(e, t, n, o) { return ft(() => { let r = vd(t); function i(...s) { if (this instanceof i)
    return r.apply(this, s), this; let a = new i(...s); function c(l, u) { if (l === void 0)
    throw new Error("Standard Angular field decorators are not supported in JIT mode."); let d = l.constructor, f = d.hasOwnProperty(eo) ? d[eo] : Object.defineProperty(d, eo, { value: {} })[eo]; f[u] = f.hasOwnProperty(u) && f[u] || [], f[u].unshift(a); } return c; } return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i; }); }
var gm = Hn(To("Inject", e => ({ token: e })), -1), mm = Hn(To("Optional"), 8), ym = Hn(To("Self"), 2), vm = Hn(To("SkipSelf"), 4), Em = Hn(To("Host"), 1);
function re(e) { let t = Se.ng; if (t && t.\u0275compilerFacade)
    return t.\u0275compilerFacade; throw new Error("JIT compiler unavailable"); }
var eg = { \u0275\u0275defineInjectable: B, \u0275\u0275defineInjector: or, \u0275\u0275inject: pe, \u0275\u0275invalidFactoryDep: Qi, resolveForwardRef: x }, Im = Function;
function Tr(e) { return typeof e == "function"; }
var yN = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/, vN = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/, EN = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/, IN = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{[^}]*super\(\.\.\.arguments\)/;
function DN(e) { return yN.test(e) || IN.test(e) || vN.test(e) && !EN.test(e); }
var xs = class {
    _reflect;
    constructor(t) { this._reflect = t || Se.Reflect; }
    factory(t) { return (...n) => new t(...n); }
    _zipTypesAndAnnotations(t, n) { let o; typeof t > "u" ? o = lr(n.length) : o = lr(t.length); for (let r = 0; r < o.length; r++)
        typeof t > "u" ? o[r] = [] : t[r] && t[r] != Object ? o[r] = [t[r]] : o[r] = [], n && n[r] != null && (o[r] = o[r].concat(n[r])); return o; }
    _ownParameters(t, n) { let o = t.toString(); if (DN(o))
        return null; if (t.parameters && t.parameters !== n.parameters)
        return t.parameters; let r = t.ctorParameters; if (r && r !== n.ctorParameters) {
        let a = typeof r == "function" ? r() : r, c = a.map(u => u && u.type), l = a.map(u => u && Wl(u.decorators));
        return this._zipTypesAndAnnotations(c, l);
    } let i = t.hasOwnProperty(Xn) && t[Xn], s = this._reflect && this._reflect.getOwnMetadata && this._reflect.getOwnMetadata("design:paramtypes", t); return s || i ? this._zipTypesAndAnnotations(s, i) : lr(t.length); }
    parameters(t) { if (!Tr(t))
        return []; let n = ps(t), o = this._ownParameters(t, n); return !o && n !== Object && (o = this.parameters(n)), o || []; }
    _ownAnnotations(t, n) { if (t.annotations && t.annotations !== n.annotations) {
        let o = t.annotations;
        return typeof o == "function" && o.annotations && (o = o.annotations), o;
    } return t.decorators && t.decorators !== n.decorators ? Wl(t.decorators) : t.hasOwnProperty(Jn) ? t[Jn] : null; }
    annotations(t) { if (!Tr(t))
        return []; let n = ps(t), o = this._ownAnnotations(t, n) || []; return (n !== Object ? this.annotations(n) : []).concat(o); }
    _ownPropMetadata(t, n) { if (t.propMetadata && t.propMetadata !== n.propMetadata) {
        let o = t.propMetadata;
        return typeof o == "function" && o.propMetadata && (o = o.propMetadata), o;
    } if (t.propDecorators && t.propDecorators !== n.propDecorators) {
        let o = t.propDecorators, r = {};
        return Object.keys(o).forEach(i => { r[i] = Wl(o[i]); }), r;
    } return t.hasOwnProperty(eo) ? t[eo] : null; }
    propMetadata(t) { if (!Tr(t))
        return {}; let n = ps(t), o = {}; if (n !== Object) {
        let i = this.propMetadata(n);
        Object.keys(i).forEach(s => { o[s] = i[s]; });
    } let r = this._ownPropMetadata(t, n); return r && Object.keys(r).forEach(i => { let s = []; o.hasOwnProperty(i) && s.push(...o[i]), s.push(...r[i]), o[i] = s; }), o; }
    ownPropMetadata(t) { return Tr(t) ? this._ownPropMetadata(t, ps(t)) || {} : {}; }
    hasLifecycleHook(t, n) { return t instanceof Im && n in t.prototype; }
};
function Wl(e) { return e ? e.map(t => { let o = t.type.annotationCls, r = t.args ? t.args : []; return new o(...r); }) : []; }
function ps(e) { let t = e.prototype ? Object.getPrototypeOf(e.prototype) : null; return (t ? t.constructor : null) || Object; }
function Dm(e, t, n, o) { t !== null ? t.applyValueToInputSignal(t, o) : e[n] = o; }
var Ps = class {
    previousValue;
    currentValue;
    firstChange;
    constructor(t, n, o) { this.previousValue = t, this.currentValue = n, this.firstChange = o; }
    isFirstChange() { return this.firstChange; }
}, Tm = (() => { let e = () => Cm; return e.ngInherit = !0, e; })();
function Cm(e) { return e.type.prototype.ngOnChanges && (e.setInput = CN), TN; }
function TN() { let e = Nm(this), t = e?.current; if (t) {
    let n = e.previous;
    if (n === Le)
        e.previous = t;
    else
        for (let o in t)
            n[o] = t[o];
    e.current = null, this.ngOnChanges(t);
} }
function CN(e, t, n, o, r) { let i = this.declaredInputs[o], s = Nm(e) || MN(e, { previous: Le, current: null }), a = s.current || (s.current = {}), c = s.previous, l = c[i]; a[i] = new Ps(l && l.currentValue, n, c === Le), Dm(e, t, r, n); }
var Mm = "__ngSimpleChanges__";
function Nm(e) { return e[Mm] || null; }
function MN(e, t) { return e[Mm] = t; }
var tg = [];
var V = function (e, t = null, n) { for (let o = 0; o < tg.length; o++) {
    let r = tg[o];
    r(e, t, n);
} }, O = (function (e) { return e[e.TemplateCreateStart = 0] = "TemplateCreateStart", e[e.TemplateCreateEnd = 1] = "TemplateCreateEnd", e[e.TemplateUpdateStart = 2] = "TemplateUpdateStart", e[e.TemplateUpdateEnd = 3] = "TemplateUpdateEnd", e[e.LifecycleHookStart = 4] = "LifecycleHookStart", e[e.LifecycleHookEnd = 5] = "LifecycleHookEnd", e[e.OutputStart = 6] = "OutputStart", e[e.OutputEnd = 7] = "OutputEnd", e[e.BootstrapApplicationStart = 8] = "BootstrapApplicationStart", e[e.BootstrapApplicationEnd = 9] = "BootstrapApplicationEnd", e[e.BootstrapComponentStart = 10] = "BootstrapComponentStart", e[e.BootstrapComponentEnd = 11] = "BootstrapComponentEnd", e[e.ChangeDetectionStart = 12] = "ChangeDetectionStart", e[e.ChangeDetectionEnd = 13] = "ChangeDetectionEnd", e[e.ChangeDetectionSyncStart = 14] = "ChangeDetectionSyncStart", e[e.ChangeDetectionSyncEnd = 15] = "ChangeDetectionSyncEnd", e[e.AfterRenderHooksStart = 16] = "AfterRenderHooksStart", e[e.AfterRenderHooksEnd = 17] = "AfterRenderHooksEnd", e[e.ComponentStart = 18] = "ComponentStart", e[e.ComponentEnd = 19] = "ComponentEnd", e[e.DeferBlockStateStart = 20] = "DeferBlockStateStart", e[e.DeferBlockStateEnd = 21] = "DeferBlockStateEnd", e[e.DynamicComponentStart = 22] = "DynamicComponentStart", e[e.DynamicComponentEnd = 23] = "DynamicComponentEnd", e[e.HostBindingsUpdateStart = 24] = "HostBindingsUpdateStart", e[e.HostBindingsUpdateEnd = 25] = "HostBindingsUpdateEnd", e; })(O || {});
function NN(e, t, n) { let { ngOnChanges: o, ngOnInit: r, ngDoCheck: i } = t.type.prototype; if (o) {
    let s = Cm(t);
    (n.preOrderHooks ??= []).push(e, s), (n.preOrderCheckHooks ??= []).push(e, s);
} r && (n.preOrderHooks ??= []).push(0 - e, r), i && ((n.preOrderHooks ??= []).push(e, i), (n.preOrderCheckHooks ??= []).push(e, i)); }
function wm(e, t) { for (let n = t.directiveStart, o = t.directiveEnd; n < o; n++) {
    let i = e.data[n].type.prototype, { ngAfterContentInit: s, ngAfterContentChecked: a, ngAfterViewInit: c, ngAfterViewChecked: l, ngOnDestroy: u } = i;
    s && (e.contentHooks ??= []).push(-n, s), a && ((e.contentHooks ??= []).push(n, a), (e.contentCheckHooks ??= []).push(n, a)), c && (e.viewHooks ??= []).push(-n, c), l && ((e.viewHooks ??= []).push(n, l), (e.viewCheckHooks ??= []).push(n, l)), u != null && (e.destroyHooks ??= []).push(n, u);
} }
function Ms(e, t, n) { _m(e, t, 3, n); }
function Ns(e, t, n, o) { (e[N] & 3) === n && _m(e, t, n, o); }
function zl(e, t) { let n = e[N]; (n & 3) === t && (n &= 16383, n += 1, e[N] = n); }
function _m(e, t, n, o) { let r = o !== void 0 ? e[ln] & 65535 : 0, i = o ?? -1, s = t.length - 1, a = 0; for (let c = r; c < s; c++)
    if (typeof t[c + 1] == "number") {
        if (a = t[c], o != null && a >= o)
            break;
    }
    else
        t[c] < 0 && (e[ln] += 65536), (a < i || i == -1) && (wN(e, n, t, c), e[ln] = (e[ln] & 4294901760) + c + 2), c++; }
function ng(e, t) { V(O.LifecycleHookStart, e, t); let n = R(null); try {
    t.call(e);
}
finally {
    R(n), V(O.LifecycleHookEnd, e, t);
} }
function wN(e, t, n, o) { let r = n[o] < 0, i = n[o + 1], s = r ? -n[o] : n[o], a = e[s]; r ? e[N] >> 14 < e[ln] >> 16 && (e[N] & 3) === t && (e[N] += 16384, ng(a, i)) : ng(a, i); }
var ro = -1, In = class {
    factory;
    name;
    injectImpl;
    resolving = !1;
    canSeeViewProviders;
    multi;
    componentProviders;
    index;
    providerFactory;
    constructor(t, n, o, r) { this.factory = t, this.name = r, this.canSeeViewProviders = n, this.injectImpl = o; }
};
function la(e) { return e != null && typeof e == "object" && (e.insertBeforeIndex === null || typeof e.insertBeforeIndex == "number" || Array.isArray(e.insertBeforeIndex)); }
function Sm(e) { return !!(e.type & 128); }
function _N(e) { return (e.flags & 8) !== 0; }
function SN(e) { return (e.flags & 16) !== 0; }
function bN(e, t, n) { let o = 0; for (; o < n.length;) {
    let r = n[o];
    if (typeof r == "number") {
        if (r !== 0)
            break;
        o++;
        let i = n[o++], s = n[o++], a = n[o++];
        e.setAttribute(t, s, a, i);
    }
    else {
        let i = r, s = n[++o];
        AN(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), o++;
    }
} return o; }
function bm(e) { return e === 3 || e === 4 || e === 6; }
function AN(e) { return e.charCodeAt(0) === 64; }
function uo(e, t) { if (!(t === null || t.length === 0))
    if (e === null || e.length === 0)
        e = t.slice();
    else {
        let n = -1;
        for (let o = 0; o < t.length; o++) {
            let r = t[o];
            typeof r == "number" ? n = r : n === 0 || (n === -1 || n === 2 ? og(e, n, r, null, t[++o]) : og(e, n, r, null, null));
        }
    } return e; }
function og(e, t, n, o, r) { let i = 0, s = e.length; if (t === -1)
    s = -1;
else
    for (; i < e.length;) {
        let a = e[i++];
        if (typeof a == "number") {
            if (a === t) {
                s = -1;
                break;
            }
            else if (a > t) {
                s = i - 1;
                break;
            }
        }
    } for (; i < e.length;) {
    let a = e[i];
    if (typeof a == "number")
        break;
    if (a === n) {
        r !== null && (e[i + 1] = r);
        return;
    }
    i++, r !== null && i++;
} s !== -1 && (e.splice(s, 0, t), i = s + 1), e.splice(i++, 0, n), r !== null && e.splice(i++, 0, r); }
function Am(e) { return e !== ro; }
function Ls(e) { return e & 32767; }
function RN(e) { return e >> 16; }
function Fs(e, t) { let n = RN(e), o = t; for (; n > 0;)
    o = o[cn], n--; return o; }
var mu = !0;
function js(e) { let t = mu; return mu = e, t; }
var kN = 256, Rm = kN - 1, km = 5, ON = 0, dt = {};
function xN(e, t, n) { let o; typeof n == "string" ? o = n.charCodeAt(0) || 0 : n.hasOwnProperty(sn) && (o = n[sn]), o == null && (o = n[sn] = ON++); let r = o & Rm, i = 1 << r; t.data[e + (r >> km)] |= i; }
function Vs(e, t) { let n = Om(e, t); if (n !== -1)
    return n; let o = t[m]; o.firstCreatePass && (e.injectorIndex = t.length, Ql(o.data, e), Ql(t, null), Ql(o.blueprint, null)); let r = Ed(e, t), i = e.injectorIndex; if (Am(r)) {
    let s = Ls(r), a = Fs(r, t), c = a[m].data;
    for (let l = 0; l < 8; l++)
        t[i + l] = a[s + l] | c[s + l];
} return t[i + 8] = r, i; }
function Ql(e, t) { e.push(0, 0, 0, 0, 0, 0, 0, 0, t); }
function Om(e, t) { return e.injectorIndex === -1 || e.parent && e.parent.injectorIndex === e.injectorIndex || t[e.injectorIndex + 8] === null ? -1 : e.injectorIndex; }
function Ed(e, t) { if (e.parent && e.parent.injectorIndex !== -1)
    return e.parent.injectorIndex; let n = 0, o = null, r = t; for (; r !== null;) {
    if (o = Vm(r), o === null)
        return ro;
    if (n++, r = r[cn], o.injectorIndex !== -1)
        return o.injectorIndex | n << 16;
} return ro; }
function yu(e, t, n) { xN(e, t, n); }
function PN(e, t) { if (t === "class")
    return e.classes; if (t === "style")
    return e.styles; let n = e.attrs; if (n) {
    let o = n.length, r = 0;
    for (; r < o;) {
        let i = n[r];
        if (bm(i))
            break;
        if (i === 0)
            r = r + 2;
        else if (typeof i == "number")
            for (r++; r < o && typeof n[r] == "string";)
                r++;
        else {
            if (i === t)
                return n[r + 1];
            r = r + 2;
        }
    }
} return null; }
function xm(e, t, n) { if (n & 8 || e !== void 0)
    return e; zi(t, "NodeInjector"); }
function Pm(e, t, n, o) { if (n & 8 && o === void 0 && (o = null), (n & 3) === 0) {
    let r = e[P], i = Ie(void 0);
    try {
        return r ? r.get(t, o, n & 8) : Xc(t, o, n & 8);
    }
    finally {
        Ie(i);
    }
} return xm(o, t, n); }
function Lm(e, t, n, o = 0, r) { if (e !== null) {
    if (t[N] & 2048 && !(o & 2)) {
        let s = VN(e, t, n, o, dt);
        if (s !== dt)
            return s;
    }
    let i = Fm(e, t, n, o, dt);
    if (i !== dt)
        return i;
} return Pm(t, n, o, r); }
function Fm(e, t, n, o, r) { let i = FN(n); if (typeof i == "function") {
    if (!kl(t, e, o))
        return o & 1 ? xm(r, n, o) : Pm(t, n, o, r);
    try {
        let s;
        if (s = i(o), s == null && !(o & 8))
            zi(n);
        else
            return s;
    }
    finally {
        Ol();
    }
}
else if (typeof i == "number") {
    let s = null, a = Om(e, t), c = ro, l = o & 1 ? t[ee][le] : null;
    for ((a === -1 || o & 4) && (c = a === -1 ? Ed(e, t) : t[a + 8], c === ro || !ig(o, !1) ? a = -1 : (s = t[m], a = Ls(c), t = Fs(c, t))); a !== -1;) {
        let u = t[m];
        if (rg(i, a, u.data)) {
            let d = LN(a, t, n, s, o, l);
            if (d !== dt)
                return d;
        }
        c = t[a + 8], c !== ro && ig(o, t[m].data[a + 8] === l) && rg(i, a, t) ? (s = u, a = Ls(c), t = Fs(c, t)) : a = -1;
    }
} return r; }
function LN(e, t, n, o, r, i) { let s = t[m], a = s.data[e + 8], c = o == null ? De(a) && mu : o != s && (a.type & 3) !== 0, l = r & 1 && i === a, u = ws(a, s, n, c, l); return u !== null ? Pr(t, s, u, a, r) : dt; }
function ws(e, t, n, o, r) { let i = e.providerIndexes, s = t.data, a = i & 1048575, c = e.directiveStart, l = e.directiveEnd, u = i >> 20, d = o ? a : a + u, f = r ? a + u : l; for (let p = d; p < f; p++) {
    let h = s[p];
    if (p < c && n === h || p >= c && h.type === n)
        return p;
} if (r) {
    let p = s[c];
    if (p && He(p) && p.type === n)
        return c;
} return null; }
function Pr(e, t, n, o, r) { let i = e[n], s = t.data; if (i instanceof In) {
    let a = i;
    if (a.resolving)
        throw Jc("");
    let c = js(a.canSeeViewProviders);
    a.resolving = !0;
    let l = s[n].type || s[n], u, d = a.injectImpl ? Ie(a.injectImpl) : null, f = kl(e, o, 0);
    try {
        i = e[n] = a.factory(void 0, r, s, e, o), t.firstCreatePass && n >= o.directiveStart && NN(n, s[n], t);
    }
    finally {
        d !== null && Ie(d), js(c), a.resolving = !1, Ol();
    }
} return i; }
function FN(e) { if (typeof e == "string")
    return e.charCodeAt(0) || 0; let t = e.hasOwnProperty(sn) ? e[sn] : void 0; return typeof t == "number" ? t >= 0 ? t & Rm : jN : t; }
function rg(e, t, n) { let o = 1 << e; return !!(n[t + (e >> km)] & o); }
function ig(e, t) { return !(e & 2) && !(e & 1 && t); }
var Wt = class {
    _tNode;
    _lView;
    constructor(t, n) { this._tNode = t, this._lView = n; }
    get(t, n, o) { return Lm(this._tNode, this._lView, t, tn(o), n); }
};
function jN() { return new Wt(_(), g()); }
function jm(e) { return ft(() => { let t = e.prototype.constructor, n = t[ot] || vu(t), o = Object.prototype, r = Object.getPrototypeOf(e.prototype).constructor; for (; r && r !== o;) {
    let i = r[ot] || vu(r);
    if (i && i !== n)
        return i;
    r = Object.getPrototypeOf(r);
} return i => new i; }); }
function vu(e) { return nr(e) ? () => { let t = vu(x(e)); return t && t(); } : xt(e); }
function VN(e, t, n, o, r) { let i = e, s = t; for (; i !== null && s !== null && s[N] & 2048 && !st(s);) {
    let a = Fm(i, s, n, o | 2, dt);
    if (a !== dt)
        return a;
    let c = i.parent;
    if (!c) {
        let l = s[cl];
        if (l) {
            let u = l.get(n, dt, o & -5);
            if (u !== dt)
                return u;
        }
        c = Vm(s), s = s[cn];
    }
    i = c;
} return r; }
function Vm(e) { let t = e[m], n = t.type; return n === 2 ? t.declTNode : n === 1 ? e[le] : null; }
function ua(e) { return PN(_(), e); }
var Hm = To("Attribute", e => ({ attributeName: e, __NG_ELEMENT_ID__: () => ua(e) })), sg = null;
function Id() { return sg = sg || new xs; }
function da(e) { return Bm(Id().parameters(e)); }
function Bm(e) { return e.map(t => HN(t)); }
function HN(e) { let t = { token: null, attribute: null, host: !1, optional: !1, self: !1, skipSelf: !1 }; if (Array.isArray(e) && e.length > 0)
    for (let n = 0; n < e.length; n++) {
        let o = e[n];
        if (o === void 0)
            continue;
        let r = Object.getPrototypeOf(o);
        if (o instanceof mm || r.ngMetadataName === "Optional")
            t.optional = !0;
        else if (o instanceof vm || r.ngMetadataName === "SkipSelf")
            t.skipSelf = !0;
        else if (o instanceof ym || r.ngMetadataName === "Self")
            t.self = !0;
        else if (o instanceof Em || r.ngMetadataName === "Host")
            t.host = !0;
        else if (o instanceof gm)
            t.token = o.token;
        else if (o instanceof Hm) {
            if (o.attributeName === void 0)
                throw new D(-204, !1);
            t.attribute = o.attributeName;
        }
        else
            t.token = o;
    }
else
    e === void 0 || Array.isArray(e) && e.length === 0 ? t.token = null : t.token = e; return t; }
function BN(e, t) { let n = null, o = null; e.hasOwnProperty(Vn) || Object.defineProperty(e, Vn, { get: () => (n === null && (n = re({ usage: 0, kind: "injectable", type: e }).compileInjectable(eg, `ng:///${e.name}/\u0275prov.js`, GN(e, t))), n) }), e.hasOwnProperty(ot) || Object.defineProperty(e, ot, { get: () => { if (o === null) {
        let r = re({ usage: 0, kind: "injectable", type: e });
        o = r.compileFactory(eg, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, typeArgumentCount: 0, deps: da(e), target: r.FactoryTarget.Injectable });
    } return o; }, configurable: !0 }); }
var $N = j({ provide: String, useValue: j });
function ag(e) { return e.useClass !== void 0; }
function UN(e) { return $N in e; }
function cg(e) { return e.useFactory !== void 0; }
function qN(e) { return e.useExisting !== void 0; }
function GN(e, t) { let n = t || { providedIn: null }, o = { name: e.name, type: e, typeArgumentCount: 0, providedIn: n.providedIn }; return (ag(n) || cg(n)) && n.deps !== void 0 && (o.deps = Bm(n.deps)), ag(n) ? o.useClass = n.useClass : UN(n) ? o.useValue = n.useValue : cg(n) ? o.useFactory = n.useFactory : qN(n) && (o.useExisting = n.useExisting), o; }
var WN = ti("Injectable", void 0, void 0, void 0, (e, t) => BN(e, t));
function zN() { return Co(_(), g()); }
function Co(e, t) { return new ni(ie(e, t)); }
var ni = (() => { class e {
    nativeElement;
    constructor(n) { this.nativeElement = n; }
    static __NG_ELEMENT_ID__ = zN;
} return e; })();
function $m(e) { return e instanceof ni ? e.nativeElement : e; }
function QN() { return this._results[Symbol.iterator](); }
var Hs = class {
    _emitDistinctChangesOnly;
    dirty = !0;
    _onDirty = void 0;
    _results = [];
    _changesDetected = !1;
    _changes = void 0;
    length = 0;
    first = void 0;
    last = void 0;
    get changes() { return this._changes ??= new Wo; }
    constructor(t = !1) { this._emitDistinctChangesOnly = t; }
    get(t) { return this._results[t]; }
    map(t) { return this._results.map(t); }
    filter(t) { return this._results.filter(t); }
    find(t) { return this._results.find(t); }
    reduce(t, n) { return this._results.reduce(t, n); }
    forEach(t) { this._results.forEach(t); }
    some(t) { return this._results.some(t); }
    toArray() { return this._results.slice(); }
    toString() { return this._results.toString(); }
    reset(t, n) { this.dirty = !1; let o = Ze(t); (this._changesDetected = !Sh(this._results, o, n)) && (this._results = o, this.length = o.length, this.last = o[this.length - 1], this.first = o[0]); }
    notifyOnChanges() { this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.next(this); }
    onDirty(t) { this._onDirty = t; }
    setDirty() { this.dirty = !0, this._onDirty?.(); }
    destroy() { this._changes !== void 0 && (this._changes.complete(), this._changes.unsubscribe()); }
    [Symbol.iterator] = QN;
}, Mo = "ngSkipHydration", ZN = "ngskiphydration";
function Dd(e) { let t = e.mergedAttrs; if (t === null)
    return !1; for (let n = 0; n < t.length; n += 2) {
    let o = t[n];
    if (typeof o == "number")
        return !1;
    if (typeof o == "string" && o.toLowerCase() === ZN)
        return !0;
} return !1; }
function Um(e) { return e.hasAttribute(Mo); }
function Lr(e) { return (e.flags & 128) === 128; }
function No(e) { if (Lr(e))
    return !0; let t = e.parent; for (; t;) {
    if (Lr(e) || Dd(t))
        return !0;
    t = t.parent;
} return !1; }
function qm(e) { return Lr(e) || Dd(e) || No(e); }
var fa = (function (e) { return e[e.OnPush = 0] = "OnPush", e[e.Eager = 1] = "Eager", e[e.Default = 1] = "Default", e; })(fa || {}), pa = new Map, YN = 0;
function KN() { return YN++; }
function JN(e) { pa.set(e[Ve], e); }
function Gm(e) { return pa.get(e) || null; }
function Eu(e) { pa.delete(e[Ve]); }
function XN() { return pa; }
var Bs = class {
    lViewId;
    nodeIndex;
    native;
    component;
    directives;
    localRefs;
    get lView() { return Gm(this.lViewId); }
    constructor(t, n, o) { this.lViewId = t, this.nodeIndex = n, this.native = o; }
};
function Me(e) { let t = _s(e); if (t) {
    if (ne(t)) {
        let n = t, o, r, i;
        if (Wm(e)) {
            if (o = ow(n, e), o == -1)
                throw new Error("The provided component was not found in the application");
            r = e;
        }
        else if (tw(e)) {
            if (o = rw(n, e), o == -1)
                throw new Error("The provided directive was not found in the application");
            i = zm(o, n);
        }
        else if (o = ug(n, e), o == -1)
            return null;
        let s = L(n[o]), a = _s(s), c = a && !Array.isArray(a) ? a : lg(n, o, s);
        if (r && c.component === void 0 && (c.component = r, $e(c.component, c)), i && c.directives === void 0) {
            c.directives = i;
            for (let l = 0; l < i.length; l++)
                $e(i[l], c);
        }
        $e(c.native, c), t = c;
    }
}
else {
    let n = e, o = n;
    for (; o = o.parentNode;) {
        let r = _s(o);
        if (r) {
            let i = Array.isArray(r) ? r : r.lView;
            if (!i)
                return null;
            let s = ug(i, n);
            if (s >= 0) {
                let a = L(i[s]), c = lg(i, s, a);
                $e(a, c), t = c;
                break;
            }
        }
    }
} return t || null; }
function lg(e, t, n) { return new Bs(e[Ve], t, n); }
var Iu = "__ngContext__";
function $e(e, t) { ne(t) ? (e[Iu] = t[Ve], JN(t)) : e[Iu] = t; }
function _s(e) { let t = e[Iu]; return typeof t == "number" ? Gm(t) : t || null; }
function ew(e) { let t = _s(e); return t ? ne(t) ? t : t.lView : null; }
function Wm(e) { return e && e.constructor && e.constructor.\u0275cmp; }
function tw(e) { return e && e.constructor && e.constructor.\u0275dir; }
function ug(e, t) { let n = e[m]; for (let o = I; o < n.bindingStartIndex; o++)
    if (L(e[o]) === t)
        return o; return -1; }
function nw(e) { if (e.child)
    return e.child; if (e.next)
    return e.next; for (; e.parent && !e.parent.next;)
    e = e.parent; return e.parent && e.parent.next; }
function ow(e, t) { let n = e[m].components; if (n)
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        if (ye(r, e)[$] === t)
            return r;
    }
else if (ye(I, e)[$] === t)
    return I; return -1; }
function rw(e, t) { let n = e[m].firstChild; for (; n;) {
    let o = n.directiveStart, r = n.directiveEnd;
    for (let i = o; i < r; i++)
        if (e[i] === t)
            return n.index;
    n = nw(n);
} return -1; }
function zm(e, t) { let n = t[m].data[e]; if (n.directiveStart === 0)
    return F; let o = []; for (let r = n.directiveStart; r < n.directiveEnd; r++) {
    let i = t[r];
    Wm(i) || o.push(i);
} return o; }
function iw(e, t) { let n = t[m].data[e]; return De(n) ? t[n.directiveStart + n.componentOffset] : null; }
function sw(e, t) { let n = e[m].data[t]; if (n && n.localNames) {
    let o = {}, r = n.index + 1;
    for (let i = 0; i < n.localNames.length; i += 2)
        o[n.localNames[i]] = e[r], r++;
    return o;
} return null; }
function Qm(e) { return Ym(e[Ft]); }
function Zm(e) { return Ym(e[he]); }
function Ym(e) { for (; e !== null && !K(e);)
    e = e[he]; return e; }
function dg(e) { let t = Me(e); if (t === null)
    return null; if (t.component === void 0) {
    let n = t.lView;
    if (n === null)
        return null;
    t.component = iw(t.nodeIndex, n);
} return t.component; }
function aw(e) { yw(e); let t = Me(e), n = t ? t.lView : null; return n === null ? null : n[$]; }
function cw(e) { let t = Me(e), n = t ? t.lView : null; if (n === null)
    return null; let o; for (; n[m].type === 2 && (o = yt(n));)
    n = o; return st(n) ? null : n[$]; }
function lw(e) { let t = Me(e), n = t ? t.lView : null; if (n === null)
    return ce.NULL; let o = n[m].data[t.nodeIndex]; return new Wt(o, n); }
function uw(e) { let t = Me(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[m], r = o.data[t.nodeIndex], i = [], s = r.providerIndexes & 1048575, a = r.directiveEnd; for (let c = s; c < a; c++) {
    let l = o.data[c];
    mw(l) && (l = l.type), i.push(l);
} return i; }
function dw(e) { if (e instanceof Text)
    return []; let t = Me(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[m], r = t.nodeIndex; return o?.data[r] ? (t.directives === void 0 && (t.directives = zm(r, n)), t.directives === null ? [] : [...t.directives]) : []; }
var Km = (function (e) { return e[e.Default = 0] = "Default", e[e.OnPush = 1] = "OnPush", e; })(Km || {}), Jm = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 1] = "None", e; })(Jm || {});
function fw(e) { let t = Me(e); if (t === null)
    return {}; if (t.localRefs === void 0) {
    let n = t.lView;
    if (n === null)
        return {};
    t.localRefs = sw(n, t.nodeIndex);
} return t.localRefs || {}; }
function pw(e) { return Me(e).native; }
function hw(e) { let t = Me(e), n = t === null ? null : t.lView; if (n === null)
    return []; let o = n[m], r = n[Lt], i = o.cleanup, s = []; if (i && r)
    for (let a = 0; a < i.length;) {
        let c = i[a++], l = i[a++];
        if (typeof c == "string") {
            let u = c, d = L(n[l]), f = r[i[a++]], p = i[a++], h = typeof p == "boolean" || p >= 0 ? "dom" : "output", y = typeof p == "boolean" ? p : !1;
            e == d && s.push({ element: e, name: u, callback: f, useCapture: y, type: h });
        }
    } return s.sort(gw), s; }
function gw(e, t) { return e.name == t.name ? 0 : e.name < t.name ? -1 : 1; }
function mw(e) { return e.type !== void 0 && e.declaredInputs !== void 0 && e.resolveHostDirectives !== void 0; }
function yw(e) { if (typeof Element < "u" && !(e instanceof Element))
    throw new Error("Expecting instance of DOM Element"); }
var Du;
function vw(e) { Du = e; }
function ha() { if (Du !== void 0)
    return Du; if (typeof document < "u")
    return document; throw new D(210, !1); }
var _t = new C("", { factory: () => Ew }), Ew = "ng";
var Td = new C(""), Iw = new C("", { providedIn: "platform", factory: () => "unknown" }), Dw = new C(""), Tw = new C("", { factory: () => v($t).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null }), Xm = { breakpoints: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840], placeholderResolution: 30, disableImageSizeWarning: !1, disableImageLazyLoadWarning: !1 }, Cw = new C("", { factory: () => Xm });
function Mw(e) { return e; }
var wo = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => { let n = new e; return (typeof ngServerMode > "u" || !ngServerMode) && (n.store = ey(v($t), v(_t))), n; } });
    store = {};
    onSerializeCallbacks = {};
    get(n, o) { return this.store[n] !== void 0 ? this.store[n] : o; }
    set(n, o) { this.store[n] = o; }
    remove(n) { delete this.store[n]; }
    hasKey(n) { return this.store.hasOwnProperty(n); }
    get isEmpty() { return Object.keys(this.store).length === 0; }
    onSerialize(n, o) { this.onSerializeCallbacks[n] = o; }
    toJson() { for (let n in this.onSerializeCallbacks)
        if (this.onSerializeCallbacks.hasOwnProperty(n))
            try {
                this.store[n] = this.onSerializeCallbacks[n]();
            }
            catch (o) {
                console.warn("Exception in onSerialize callback: ", o);
            } return JSON.stringify(this.store).replace(/</g, "\\u003C").replace(/\//g, "\\u002F"); }
} return e; })();
function ey(e, t) { let n = e.getElementById(t + "-state"); if (n?.textContent)
    try {
        return JSON.parse(n.textContent);
    }
    catch (o) {
        console.warn("Exception while restoring TransferState for app " + t, o);
    } return {}; }
var Cd = "h", Md = "b", ty = "f", ny = "n", oi = "e", ga = "t", _o = "c", ri = "x", Mt = "r", ma = "i", ii = "n", So = "d", ya = "l", va = "di", si = "s", Nd = "p", ai = "t", An = new C(""), oy = !1, wd = new C("", { factory: () => oy }), _d = new C(""), Ea = new C(""), Sd = !1, ry = new C("", { factory: () => [] }), bd = new C(""), ci = new C("", { factory: () => new Map }), Nw = new C(""), $s = { passive: !0, capture: !0 }, Zl = new WeakMap, Yl = new WeakMap, Gt = new WeakMap, Us = ["click", "keydown"], qs = ["mouseenter", "mouseover", "focusin"], hs = new Map, Fr = class {
    callbacks = new Set;
    listener = () => { for (let t of this.callbacks)
        t(); };
};
function iy(e, t) { let n = Yl.get(e); if (!n) {
    n = new Fr, Yl.set(e, n);
    for (let o of Us)
        e.addEventListener(o, n.listener, $s);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    Yl.delete(e);
    for (let i of Us)
        e.removeEventListener(i, r, $s);
} }; }
function sy(e, t) { let n = Zl.get(e); if (!n) {
    n = new Fr, Zl.set(e, n);
    for (let o of qs)
        e.addEventListener(o, n.listener, $s);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    for (let i of qs)
        e.removeEventListener(i, r, $s);
    Zl.delete(e);
} }; }
function ww(e) { let t = ay(e); return new IntersectionObserver(n => { for (let o of n)
    o.isIntersecting && Gt.has(o.target) && Gt.get(o.target)?.get(t)?.listener(); }, e); }
function _w(e, t, n, o) { let r = ay(o), i = Gt.get(e)?.get(r); hs.has(r) || hs.set(r, { observer: n(o), count: 0 }); let s = hs.get(r); if (!i) {
    i = new Fr, s.observer.observe(e);
    let a = Gt.get(e);
    a ? a.set(r, i) : (a = new Map, Gt.set(e, a)), a.set(r, i), s.count++;
} return i.callbacks.add(t), () => { if (Gt.get(e)?.has(r)) {
    if (i.callbacks.delete(t), i.callbacks.size === 0) {
        s.observer.unobserve(e), s.count--;
        let a = Gt.get(e);
        a && (a.delete(r), a.size === 0 && Gt.delete(e));
    }
    s.count === 0 && (s.observer.disconnect(), hs.delete(r));
} }; }
function ay(e) {
    return e ? `${e.rootMargin}/${typeof e.threshold == "number" ? e.threshold : e.threshold?.join(`
`)}` : "";
}
var bo = "ngb";
function Ad(e, t, n = null) { if (t.length === 0 || e.nodeType !== Node.ELEMENT_NODE)
    return; let o = e.getAttribute(Zn.JSACTION), r = t.reduce((s, a) => (o?.indexOf(a) ?? -1) === -1 ? s + a + ":;" : s, ""); e.setAttribute(Zn.JSACTION, `${o ?? ""}${r}`); let i = n ?? ""; i !== "" && r.length > 0 && e.setAttribute(bo, i); }
var cy = (e, t, n) => { let o = e, r = o.__jsaction_fns ?? new Map, i = r.get(t) ?? []; i.push(n), r.set(t, i), o.__jsaction_fns = r; }, Rd = (e, t) => { let n = e, o = n.getAttribute(bo) ?? "", r = t.get(o) ?? new Set; r.has(n) || r.add(n), t.set(o, r); };
function Sw(e, t) { if (e.length > 0) {
    let n = [];
    for (let r of e)
        t.has(r) && (n = [...n, ...t.get(r)]);
    new Set(n).forEach(kd);
} }
var kd = e => { e.removeAttribute(Zn.JSACTION), e.removeAttribute(bo), e.__jsaction_fns = void 0; }, Od = new C("", { factory: () => ({}) });
function xd(e, t) { let n = t?.__jsaction_fns?.get(e.type); if (!(!n || !t?.isConnected))
    for (let o of n)
        o(e); }
var Tu = new Map;
function ly(e, t) { return Tu.set(e, t), () => Tu.delete(e); }
var fg = !1, uy = (e, t, n, o) => { };
function bw(e, t, n, o) { uy(e, t, n, o); }
function dy() { fg || (uy = (e, t, n, o) => { let r = e[P].get(_t); Tu.get(r)?.(t, n, o); }, fg = !0); }
var St = new C(""), fy = (() => { class e {
    registry = new Map;
    cleanupFns = new Map;
    jsActionMap = v(ci);
    contract = v(Od);
    add(n, o) { if (this.registry.set(n, o), this.awaitingCallbacks.has(n)) {
        let r = this.awaitingCallbacks.get(n);
        for (let i of r)
            i();
    } }
    get(n) { return this.registry.get(n) ?? null; }
    has(n) { return this.registry.has(n); }
    cleanup(n) { Sw(n, this.jsActionMap); for (let o of n)
        this.registry.delete(o), this.jsActionMap.delete(o), this.invokeTriggerCleanupFns(o), this.hydrating.delete(o), this.awaitingCallbacks.delete(o); this.size === 0 && this.contract.instance?.cleanUp(); }
    get size() { return this.registry.size; }
    addCleanupFn(n, o) { let r = []; this.cleanupFns.has(n) && (r = this.cleanupFns.get(n)), r.push(o), this.cleanupFns.set(n, r); }
    invokeTriggerCleanupFns(n) { let o = this.cleanupFns.get(n) ?? []; for (let r of o)
        r(); this.cleanupFns.delete(n); }
    hydrating = new Map;
    awaitingCallbacks = new Map;
    awaitParentBlock(n, o) { let r = this.awaitingCallbacks.get(n) ?? []; r.push(o), this.awaitingCallbacks.set(n, r); }
    static \u0275prov = B({ token: e, providedIn: null, factory: () => new e });
} return e; })();
function Ao(e) { return (e.flags & 32) === 32; }
var py = "__nghData__", Ia = py, hy = "__nghDeferData__", Da = hy;
function Aw(e) { return e === py || e === hy; }
var io = "ngh", gy = "nghm", my = () => null;
function Rw(e, t, n = !1) { let o = e.getAttribute(io); if (o == null)
    return null; let [r, i] = o.split("|"); if (o = n ? i : r, !o)
    return null; let s = i ? `|${i}` : "", a = n ? r : s, c = {}; if (o !== "") {
    let u = t.get(wo, null, { optional: !0 });
    u !== null && (c = u.get(Ia, [])[Number(o)]);
} let l = { data: c, firstChild: e.firstChild ?? null }; return n && (l.firstChild = e, Ta(l, 0, e.nextSibling)), a ? e.setAttribute(io, a) : e.removeAttribute(io), l; }
function yy() { my = Rw; }
function vy(e, t, n = !1) { return my(e, t, n); }
function Pd(e) { let t = e._lView; return t[m].type === 2 ? null : (st(t) && (t = t[I]), t); }
function kw(e) { return e.textContent?.replace(/\s/gm, ""); }
function Ow(e) { let t = ha(), n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, { acceptNode(i) { let s = kw(i); return s === "ngetn" || s === "ngtns" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; } }), o, r = []; for (; o = n.nextNode();)
    r.push(o); for (let i of r)
    i.textContent === "ngetn" ? i.replaceWith(t.createTextNode("")) : i.remove(); }
var Ey = (function (e) { return e.Hydrated = "hydrated", e.Skipped = "skipped", e.Mismatched = "mismatched", e; })(Ey || {}), xw = "__ngDebugHydrationInfo__";
function Pw(e) { return e[xw] ?? null; }
function Ta(e, t, n) { e.segmentHeads ??= {}, e.segmentHeads[t] = n; }
function Cu(e, t) { return e.segmentHeads?.[t] ?? null; }
function li(e) { return e.get(bd, !1, { optional: !0 }); }
var Lw = !1;
function Fw() { Lw = !1; }
function Iy(e, t) { let n = e.data, o = n[oi]?.[t] ?? null; return o === null && n[_o]?.[t] && (o = Ld(e, t)), o; }
function jw(e, t) { return e.data[oi]?.[t] !== void 0; }
function Dy(e, t) { return e.data[_o]?.[t] ?? null; }
function Ld(e, t) { let n = Dy(e, t) ?? [], o = 0; for (let r of n)
    o += r[Mt] * (r[ri] ?? 1); return o; }
function Ty(e) { if (typeof e.disconnectedNodes > "u") {
    let t = e.data[So];
    e.disconnectedNodes = t ? new Set(t) : null;
} return e.disconnectedNodes; }
function Ca(e, t) { if (typeof e.disconnectedNodes > "u") {
    let n = e.data[So];
    e.disconnectedNodes = n ? new Set(n) : null;
} return !!Ty(e)?.has(t); }
function Ma(e, t) { let n = e[ue]; return n !== null && !mr() && !Ao(t) && !Ca(n, t.index - I); }
function Fd(e, t) { let n = t, o = e.corruptedTextNodes; n.textContent === "" ? o.set(n, "ngetn") : n.nextSibling?.nodeType === Node.TEXT_NODE && o.set(n, "ngtns"); }
function Cy(e) { let t = []; return e !== null && (e.has(4) && t.push(...qs), e.has(3) && t.push(...Us)), t; }
function Vw(e, t) { let n = t.get(St), r = t.get(wo).get(Da, {}), i = !1, s = e, a = null, c = []; for (; !i && s;) {
    i = n.has(s);
    let l = n.hydrating.get(s);
    if (a === null && l != null) {
        a = l.promise;
        break;
    }
    c.unshift(s), s = r[s][Nd];
} return { parentBlockPromise: a, hydrationQueue: c }; }
function Hw(e) { let t = e.body.querySelectorAll("[jsaction]"), n = new Set, o = [qs.join(":;"), Us.join(":;")].join("|"); for (let r of t) {
    let i = r.getAttribute("jsaction"), s = r.getAttribute("ngb");
    i?.match(o) && s !== null && n.add(r);
} return n; }
function My(e, t) { let n = Hw(e), o = t.get(ci); for (let r of n)
    Rd(r, o); }
var Ny = () => ({});
function Bw(e) { let t = e.get(wo, null, { optional: !0 }); return t !== null ? t.get(Da, {}) : {}; }
function wy() { Ny = Bw; }
function $w(e) { return Ny(e); }
function Uw(e) { return typeof e == "object" && e.trigger === 5; }
function qw(e) { return e[ai]?.find(n => Uw(n))?.delay ?? null; }
function Gw(e) { let t = e[ai]; if (t)
    for (let n of t) {
        if (n === 2)
            return !0;
        if (typeof n == "object" && n.trigger === 2)
            return n.intersectionObserverOptions || !0;
    } return null; }
function pg(e, t) { return e[ai]?.includes(t) ?? !1; }
function Ww(e) { return { data: e, hydrate: { idle: pg(e, 0), immediate: pg(e, 1), timer: qw(e), viewport: Gw(e) } }; }
function _y(e) { let t = $w(e), n = new Map; for (let o in t)
    n.set(o, Ww(t[o])); return n; }
function Kl(e) { return !!e && e.nodeType === Node.COMMENT_NODE && e.textContent?.trim() === gy; }
function hg(e) { for (; e && e.nodeType === Node.TEXT_NODE;)
    e = e.previousSibling; return e; }
function Sy(e) { for (let o of e.body.childNodes)
    if (Kl(o))
        return; let t = hg(e.body.previousSibling); if (Kl(t))
    return; let n = hg(e.head.lastChild); if (!Kl(n))
    throw new D(-507, !1); }
function by(e, t) { let n = e.contentQueries; if (n !== null) {
    let o = R(null);
    try {
        for (let r = 0; r < n.length; r += 2) {
            let i = n[r], s = n[r + 1];
            if (s !== -1) {
                let a = e.data[s];
                yr(i), a.contentQueries(2, t[s], s);
            }
        }
    }
    finally {
        R(o);
    }
} }
function Mu(e, t, n) { yr(0); let o = R(null); try {
    t(e, n);
}
finally {
    R(o);
} }
function jd(e, t, n) { if (ul(t)) {
    let o = R(null);
    try {
        let r = t.directiveStart, i = t.directiveEnd;
        for (let s = r; s < i; s++) {
            let a = e.data[s];
            if (a.contentQueries) {
                let c = n[s];
                a.contentQueries(1, c, s);
            }
        }
    }
    finally {
        R(o);
    }
} }
var Ue = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", e[e.ExperimentalIsolatedShadowDom = 4] = "ExperimentalIsolatedShadowDom", e; })(Ue || {}), zw = { name: "custom-elements" }, Qw = { name: "no-errors-schema" }, Ay = !1;
function Zw(e) { Ay = e; }
function Yw() { return Ay; }
var Ry = !1;
function Kw(e) { Ry = e; }
function Jw() { return Ry; }
var gs;
function ky() { if (gs === void 0 && (gs = null, Se.trustedTypes))
    try {
        gs = Se.trustedTypes.createPolicy("angular", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return gs; }
function Ro(e) { return ky()?.createHTML(e) || e; }
function Xw(e) { return ky()?.createScriptURL(e) || e; }
var ms;
function Vd() { if (ms === void 0 && (ms = null, Se.trustedTypes))
    try {
        ms = Se.trustedTypes.createPolicy("angular#unsafe-bypass", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return ms; }
function gg(e) { return Vd()?.createHTML(e) || e; }
function mg(e) { return Vd()?.createScript(e) || e; }
function yg(e) { return Vd()?.createScriptURL(e) || e; }
var Nt = class {
    changingThisBreaksApplicationSecurity;
    constructor(t) { this.changingThisBreaksApplicationSecurity = t; }
    toString() { return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${$i})`; }
}, Nu = class extends Nt {
    getTypeName() { return "HTML"; }
}, wu = class extends Nt {
    getTypeName() { return "Style"; }
}, _u = class extends Nt {
    getTypeName() { return "Script"; }
}, Su = class extends Nt {
    getTypeName() { return "URL"; }
}, bu = class extends Nt {
    getTypeName() { return "ResourceURL"; }
};
function bt(e) { return e instanceof Nt ? e.changingThisBreaksApplicationSecurity : e; }
function ko(e, t) { let n = Oy(e); if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL")
        return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${$i})`);
} return n === t; }
function Oy(e) { return e instanceof Nt && e.getTypeName() || null; }
function e_(e) { return new Nu(e); }
function t_(e) { return new wu(e); }
function n_(e) { return new _u(e); }
function o_(e) { return new Su(e); }
function r_(e) { return new bu(e); }
function xy(e) { let t = new Ru(e); return i_() ? new Au(t) : t; }
var Au = class {
    inertDocumentHelper;
    constructor(t) { this.inertDocumentHelper = t; }
    getInertBodyElement(t) { t = "<body><remove></remove>" + t; try {
        let n = new window.DOMParser().parseFromString(Ro(t), "text/html").body;
        return n === null ? this.inertDocumentHelper.getInertBodyElement(t) : (n.firstChild?.remove(), n);
    }
    catch {
        return null;
    } }
}, Ru = class {
    defaultDoc;
    inertDocument;
    constructor(t) { this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"); }
    getInertBodyElement(t) { let n = this.inertDocument.createElement("template"); return n.innerHTML = Ro(t), n; }
};
function i_() { try {
    return !!new window.DOMParser().parseFromString(Ro(""), "text/html");
}
catch {
    return !1;
} }
var s_ = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function ui(e) { return e = String(e), e.match(s_) ? e : "unsafe:" + e; }
function pt(e) { let t = {}; for (let n of e.split(","))
    t[n] = !0; return t; }
function Oo(...e) { let t = {}; for (let n of e)
    for (let o in n)
        n.hasOwnProperty(o) && (t[o] = !0); return t; }
var Py = pt("area,br,col,hr,img,wbr"), Ly = pt("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), Fy = pt("rp,rt"), a_ = Oo(Fy, Ly), c_ = Oo(Ly, pt("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), l_ = Oo(Fy, pt("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), ku = Oo(Py, c_, l_, a_), Hd = pt("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), u_ = pt("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), d_ = pt("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"), Ou = Oo(Hd, u_, d_), f_ = pt("script,style,template"), xu = Oo(Hd, pt("action,formaction,data,codebase")), Pu = class {
    sanitizedSomething = !1;
    buf = [];
    sanitizeChildren(t) { let n = t.firstChild, o = !0, r = []; for (; n;) {
        if (n.nodeType === Node.ELEMENT_NODE ? o = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, o && n.firstChild) {
            r.push(n), n = g_(n);
            continue;
        }
        for (; n;) {
            n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
            let i = h_(n);
            if (i) {
                n = i;
                break;
            }
            n = r.pop();
        }
    } return this.buf.join(""); }
    startElement(t) { let n = vg(t).toLowerCase(); if (!ku.hasOwnProperty(n))
        return this.sanitizedSomething = !0, !f_.hasOwnProperty(n); this.buf.push("<"), this.buf.push(n); let o = t.attributes; for (let r = 0; r < o.length; r++) {
        let i = o.item(r), s = i.name, a = s.toLowerCase();
        if (!Ou.hasOwnProperty(a)) {
            this.sanitizedSomething = !0;
            continue;
        }
        let c = i.value;
        Hd[a] && (c = ui(c)), this.buf.push(" ", s, '="', Eg(c), '"');
    } return this.buf.push(">"), !0; }
    endElement(t) { let n = vg(t).toLowerCase(); ku.hasOwnProperty(n) && !Py.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">")); }
    chars(t) { this.buf.push(Eg(t)); }
};
function p_(e, t) { return (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !== Node.DOCUMENT_POSITION_CONTAINED_BY; }
function h_(e) { let t = e.nextSibling; if (t && e !== t.previousSibling)
    throw jy(t); return t; }
function g_(e) { let t = e.firstChild; if (t && p_(e, t))
    throw jy(t); return t; }
function vg(e) { let t = e.nodeName; return typeof t == "string" ? t : "FORM"; }
function jy(e) { return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`); }
var m_ = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, y_ = /([^\#-~ |!])/g;
function Eg(e) { return e.replace(/&/g, "&amp;").replace(m_, function (t) { let n = t.charCodeAt(0), o = t.charCodeAt(1); return "&#" + ((n - 55296) * 1024 + (o - 56320) + 65536) + ";"; }).replace(y_, function (t) { return "&#" + t.charCodeAt(0) + ";"; }).replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
var ys;
function Vy(e, t) { let n = null; try {
    ys = ys || xy(e);
    let o = t ? String(t) : "";
    n = ys.getInertBodyElement(o);
    let r = 5, i = o;
    do {
        if (r === 0)
            throw new Error("Failed to sanitize html because the input is unstable");
        r--, o = i, i = n.innerHTML, n = ys.getInertBodyElement(o);
    } while (o !== i);
    let a = new Pu().sanitizeChildren(Lu(n) || n);
    return Ro(a);
}
finally {
    if (n) {
        let o = Lu(n) || n;
        for (; o.firstChild;)
            o.firstChild.remove();
    }
} }
function Lu(e) { return "content" in e && v_(e) ? e.content : null; }
function v_(e) { return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE"; }
var E_ = /^>|^->|<!--|-->|--!>|<!-$/g, I_ = /(<|>)/g, D_ = "\u200B$1\u200B";
function T_(e) { return e.replace(E_, t => t.replace(I_, D_)); }
function Bd(e, t) { return e.createText(t); }
function Hy(e, t, n) { e.setValue(t, n); }
function $d(e, t) { return e.createComment(T_(t)); }
function Na(e, t, n) { return e.createElement(t, n); }
function Dn(e, t, n, o, r) { e.insertBefore(t, n, o, r); }
function By(e, t, n) { e.appendChild(t, n); }
function Ig(e, t, n, o, r) { o !== null ? Dn(e, t, n, o, r) : By(e, t, n); }
function di(e, t, n, o) { e.removeChild(null, t, n, o); }
function $y(e) { e.textContent = ""; }
function C_(e, t, n) { e.setAttribute(t, "style", n); }
function M_(e, t, n) { n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n); }
function Uy(e, t, n) { let { mergedAttrs: o, classes: r, styles: i } = n; o !== null && bN(e, t, o), r !== null && M_(e, t, r), i !== null && C_(e, t, i); }
function N_(e) { let t = g(); e.src = "", e.srcdoc = Ro(""), di(t[w], e); }
var Rn = (function (e) { return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e; })(Rn || {});
function qy(e) { let t = fi(); return t ? gg(t.sanitize(Rn.HTML, e) || "") : ko(e, "HTML") ? gg(bt(e)) : Vy(ha(), b(e)); }
function Gy(e) { let t = fi(); return t ? t.sanitize(Rn.STYLE, e) || "" : ko(e, "Style") ? bt(e) : b(e); }
function Ud(e) { let t = fi(); return t ? t.sanitize(Rn.URL, e) || "" : ko(e, "URL") ? bt(e) : ui(b(e)); }
function qd(e) { let t = fi(); if (t)
    return yg(t.sanitize(Rn.RESOURCE_URL, e) || ""); if (ko(e, "ResourceURL"))
    return yg(bt(e)); throw new D(904, !1); }
function Wy(e) { let t = fi(); if (t)
    return mg(t.sanitize(Rn.SCRIPT, e) || ""); if (ko(e, "Script"))
    return mg(bt(e)); throw new D(905, !1); }
function zy(e) { return Ro(e[0]); }
function Qy(e) { return Xw(e[0]); }
var w_ = { embed: { src: !0 }, frame: { src: !0 }, iframe: { src: !0 }, media: { src: !0 }, script: { src: !0, href: !0, "xlink:href": !0 }, base: { href: !0 }, link: { href: !0 }, object: { data: !0, codebase: !0 } };
function __(e, t) { return w_[e]?.[t] === !0 ? qd : Ud; }
function Zy(e, t, n) { return __(t, n)(e); }
function fi() { let e = g(); return e && e[je].sanitizer; }
var vs = new Set(["href", "xlink:href"]), S_ = { iframe: { sandbox: !0, allow: !0, allowfullscreen: !0, referrerpolicy: !0, csp: !0, fetchpriority: !0 }, animate: { attributename: !0, to: vs, values: vs, from: vs }, set: { attributename: !0, to: vs }, animatemotion: { attributename: !0 }, animatetransform: { attributename: !0 } };
function Yy(e, t, n) { let o = t.toLowerCase(), r = n.toLowerCase(), i = S_[o]?.[r]; if (!i)
    return e; let s = ke(); if (s.type !== 2)
    return e; let a = g(); if (o === "iframe") {
    let l = ie(s, a);
    N_(l);
} if (typeof i != "boolean") {
    let u = ie(s, a).getAttribute("attributeName");
    if (u && i.has(u.toLowerCase()))
        throw new D(-910, !1);
    return e;
} let c = !1; throw new D(-910, c); }
function b_() { return Ye([]); }
function Ky(e) { return e.ownerDocument.defaultView; }
function Jy(e) { return e.ownerDocument; }
function Gd(e) { return e.ownerDocument.body; }
var A_ = "\uFFFD";
function to(e) { return e instanceof Function ? e() : e; }
function R_(e, t, n) { let o = e.length; for (;;) {
    let r = e.indexOf(t, n);
    if (r === -1)
        return r;
    if (r === 0 || e.charCodeAt(r - 1) <= 32) {
        let i = t.length;
        if (r + i === o || e.charCodeAt(r + i) <= 32)
            return r;
    }
    n = r + 1;
} }
var Xy = "ng-template";
function k_(e, t, n, o) { let r = 0; if (o) {
    for (; r < t.length && typeof t[r] == "string"; r += 2)
        if (t[r] === "class" && R_(t[r + 1].toLowerCase(), n, 0) !== -1)
            return !0;
}
else if (Wd(e))
    return !1; if (r = t.indexOf(1, r), r > -1) {
    let i;
    for (; ++r < t.length && typeof (i = t[r]) == "string";)
        if (i.toLowerCase() === n)
            return !0;
} return !1; }
function Wd(e) { return e.type === 4 && e.value !== Xy; }
function O_(e, t, n) { let o = e.type === 4 && !n ? Xy : e.value; return t === o; }
function x_(e, t, n) { let o = 4, r = e.attrs, i = r !== null ? F_(r) : 0, s = !1; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "number") {
        if (!s && !Xe(o) && !Xe(c))
            return !1;
        if (s && Xe(c))
            continue;
        s = !1, o = c | o & 1;
        continue;
    }
    if (!s)
        if (o & 4) {
            if (o = 2 | o & 1, c !== "" && !O_(e, c, n) || c === "" && t.length === 1) {
                if (Xe(o))
                    return !1;
                s = !0;
            }
        }
        else if (o & 8) {
            if (r === null || !k_(e, r, c, n)) {
                if (Xe(o))
                    return !1;
                s = !0;
            }
        }
        else {
            let l = t[++a], u = P_(c, r, Wd(e), n);
            if (u === -1) {
                if (Xe(o))
                    return !1;
                s = !0;
                continue;
            }
            if (l !== "") {
                let d;
                if (u > i ? d = "" : d = r[u + 1].toLowerCase(), o & 2 && l !== d) {
                    if (Xe(o))
                        return !1;
                    s = !0;
                }
            }
        }
} return Xe(o) || s; }
function Xe(e) { return (e & 1) === 0; }
function P_(e, t, n, o) { if (t === null)
    return -1; let r = 0; if (o || !n) {
    let i = !1;
    for (; r < t.length;) {
        let s = t[r];
        if (s === e)
            return r;
        if (s === 3 || s === 6)
            i = !0;
        else if (s === 1 || s === 2) {
            let a = t[++r];
            for (; typeof a == "string";)
                a = t[++r];
            continue;
        }
        else {
            if (s === 4)
                break;
            if (s === 0) {
                r += 4;
                continue;
            }
        }
        r += i ? 1 : 2;
    }
    return -1;
}
else
    return j_(t, e); }
function ev(e, t, n = !1) { for (let o = 0; o < t.length; o++)
    if (x_(e, t[o], n))
        return !0; return !1; }
function L_(e) { let t = e.attrs; if (t != null) {
    let n = t.indexOf(5);
    if ((n & 1) === 0)
        return t[n + 1];
} return null; }
function F_(e) { for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (bm(n))
        return t;
} return e.length; }
function j_(e, t) { let n = e.indexOf(4); if (n > -1)
    for (n++; n < e.length;) {
        let o = e[n];
        if (typeof o == "number")
            return -1;
        if (o === t)
            return n;
        n++;
    } return -1; }
function V_(e, t) { e: for (let n = 0; n < t.length; n++) {
    let o = t[n];
    if (e.length === o.length) {
        for (let r = 0; r < e.length; r++)
            if (e[r] !== o[r])
                continue e;
        return !0;
    }
} return !1; }
function Dg(e, t) { return e ? ":not(" + t.trim() + ")" : t; }
function H_(e) { let t = e[0], n = 1, o = 2, r = "", i = !1; for (; n < e.length;) {
    let s = e[n];
    if (typeof s == "string")
        if (o & 2) {
            let a = e[++n];
            r += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
        }
        else
            o & 8 ? r += "." + s : o & 4 && (r += " " + s);
    else
        r !== "" && !Xe(s) && (t += Dg(i, r), r = ""), o = s, i = i || !Xe(o);
    n++;
} return r !== "" && (t += Dg(i, r)), t; }
function B_(e) { return e.map(H_).join(","); }
function $_(e) { let t = [], n = [], o = 1, r = 2; for (; o < e.length;) {
    let i = e[o];
    if (typeof i == "string")
        r === 2 ? i !== "" && t.push(i, e[++o]) : r === 8 && n.push(i);
    else {
        if (!Xe(r))
            break;
        r = i;
    }
    o++;
} return n.length && t.push(1, ...n), t; }
var H = {};
function zd(e, t, n, o, r, i, s, a, c, l, u) { let d = I + o, f = d + r, p = U_(d, f), h = typeof l == "function" ? l() : l; return p[m] = { type: e, blueprint: p, template: n, queries: null, viewQuery: a, declTNode: t, data: p.slice().fill(null, d), bindingStartIndex: d, expandoStartIndex: f, hostBindingOpCodes: null, firstCreatePass: !0, firstUpdatePass: !0, staticViewQueries: !1, staticContentQueries: !1, preOrderHooks: null, preOrderCheckHooks: null, contentHooks: null, contentCheckHooks: null, viewHooks: null, viewCheckHooks: null, destroyHooks: null, cleanup: null, contentQueries: null, components: null, directiveRegistry: typeof i == "function" ? i() : i, pipeRegistry: typeof s == "function" ? s() : s, firstChild: null, schemas: c, consts: h, incompleteFirstPass: !1, ssrId: u }; }
function U_(e, t) { let n = []; for (let o = 0; o < t; o++)
    n.push(o < e ? null : H); return n; }
function tv(e) { let t = e.tView; return t === null || t.incompleteFirstPass ? e.tView = zd(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t; }
function wa(e, t, n, o, r, i, s, a, c, l, u) { let d = t.blueprint.slice(); return d[U] = r, d[N] = o | 4 | 128 | 8 | 64 | 1024, (l !== null || e && e[N] & 2048) && (d[N] |= 2048), hl(d), d[Q] = d[cn] = e, d[$] = n, d[je] = s || e && e[je], d[w] = a || e && e[w], d[P] = c || e && e[P] || null, d[le] = i, d[Ve] = KN(), d[ue] = u, d[cl] = l, d[ee] = t.type == 2 ? e[ee] : d, d; }
function q_(e, t, n) { let o = ie(t, e), r = tv(n), i = e[je].rendererFactory, s = Zd(e, wa(e, r, null, Qd(n), o, t, null, i.createRenderer(o, n), null, null, null)); return e[t.index] = s; }
function Qd(e) { let t = 16; return e.signals ? t = 4096 : e.onPush && (t = 64), t; }
function pi(e, t, n, o) { if (n === 0)
    return -1; let r = t.length; for (let i = 0; i < n; i++)
    t.push(o), e.blueprint.push(o), e.data.push(null); return r; }
function Zd(e, t) { return e[Ft] ? e[dr][he] = t : e[Ft] = t, e[dr] = t, t; }
function nv(e = 1) { ov(A(), g(), de() + e, !1); }
function ov(e, t, n, o) { if (!o)
    if ((t[N] & 3) === 3) {
        let i = e.preOrderCheckHooks;
        i !== null && Ms(t, i, n);
    }
    else {
        let i = e.preOrderHooks;
        i !== null && Ns(t, i, 0, n);
    } Bt(n); }
var _a = (function (e) { return e[e.None = 0] = "None", e[e.SignalBased = 1] = "SignalBased", e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", e; })(_a || {});
function zt(e, t, n, o) { let r = R(null); try {
    let [i, s, a] = e.inputs[n], c = null;
    (s & _a.SignalBased) !== 0 && (c = t[i][ae]), c !== null && c.transformFn !== void 0 ? o = c.transformFn(o) : a !== null && (o = a.call(t, o)), e.setInput !== null ? e.setInput(t, c, o, n, i) : Dm(t, c, i, o);
}
finally {
    R(r);
} }
var Gs = (function (e) { return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e; })(Gs || {}), Fu;
function Yd(e, t) { return Fu(e, t); }
function G_(e) { Fu === void 0 && (Fu = e()); }
var rv = new C("", { factory: () => !1 }), iv = new C("", { factory: () => W_ }), W_ = 4e3, z_ = !1, kn = (typeof ngServerMode > "u" || !ngServerMode) && typeof document < "u" && typeof document?.documentElement?.getAnimations == "function";
function Sa(e) { return e[P].get(rv, z_); }
function Q_(e, t, n) { let o = fo.get(e); if (o) {
    for (let r of t)
        o.classList.push(r);
    for (let r of n)
        o.cleanupFns.push(r);
}
else
    fo.set(e, { classList: t, cleanupFns: n }); }
function Kd(e) { let t = fo.get(e); if (t) {
    for (let n of t.cleanupFns)
        n();
    fo.delete(e);
} En.delete(e); }
var Z_ = () => { }, fo = new WeakMap, En = new WeakMap, jr = new WeakMap, Cr = new WeakSet;
function ju(e, t) { let n = jr.get(e); if (n && n.length > 0) {
    let o = n.findIndex(r => r === t);
    o > -1 && n.splice(o, 1);
} n?.length === 0 && jr.delete(e); }
function Y_(e, t) { let n = jr.get(e); if (!n || n.length === 0)
    return; let o = t.parentNode, r = t.previousSibling; for (let i = n.length - 1; i >= 0; i--) {
    let s = n[i], a = s.parentNode;
    s === t ? (n.splice(i, 1), Cr.add(s), s.dispatchEvent(new CustomEvent("animationend", { detail: { cancel: !0 } }))) : (r && s === r || a && o && a !== o) && (n.splice(i, 1), s.dispatchEvent(new CustomEvent("animationend", { detail: { cancel: !0 } })), s.parentNode?.removeChild(s));
} }
function Jd(e, t) { let n = jr.get(e); n ? n.includes(t) || n.push(t) : jr.set(e, [t]); }
function Ws(e) { let t = e[it] ??= {}; return t.enter ??= new Map; }
function Tn(e) { let t = e[it] ??= {}; return t.leave ??= new Map; }
function sv(e) { let t = typeof e == "function" ? e() : e, n = Array.isArray(t) ? t : null; return typeof t == "string" && (n = t.trim().split(/\s+/).filter(o => o)), n; }
function K_(e, t) { if (!kn)
    return; let n = fo.get(e); if (n && n.classList.length > 0 && J_(e, n.classList))
    for (let o of n.classList)
        t.removeClass(e, o); Kd(e); }
function J_(e, t) { for (let n of t)
    if (e.classList.contains(n))
        return !0; return !1; }
function Vr(e) { return e.composedPath ? e.composedPath()[0] : e.target; }
function Xd(e, t) { let n = En.get(t); return n === void 0 ? !0 : t === Vr(e) && (n.animationName !== void 0 && e.animationName === n.animationName || n.propertyName !== void 0 && (n.propertyName === "all" || e.propertyName === n.propertyName)); }
function ba(e, t, n) { let o = e.get(t.index) ?? { animateFns: [] }; o.animateFns.push(n), e.set(t.index, o); }
function Vu(e, t) { if (e)
    for (let n of e)
        n(); for (let n of t)
    n(); }
function Hu(e, t) { let n = Tn(e).get(t.index); n && (n.resolvers = void 0); }
function Es(e, t, n, o, r) { ju(t, n), Vu(o, r), Hu(e, t); }
function zs(e) { if (!e)
    return 0; let t = e.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3; return parseFloat(e) * t; }
function yn(e, t) { return e.getPropertyValue(t).split(",").map(o => o.trim()); }
function X_(e) { let t = yn(e, "transition-property"), n = yn(e, "transition-duration"), o = yn(e, "transition-delay"), r = { propertyName: "", duration: 0, animationName: void 0 }; for (let i = 0; i < t.length; i++) {
    let s = zs(o[i]) + zs(n[i]);
    s > r.duration && (r.propertyName = t[i], r.duration = s);
} return r; }
function eS(e) { let t = yn(e, "animation-name"), n = yn(e, "animation-delay"), o = yn(e, "animation-duration"), r = yn(e, "animation-iteration-count"), i = { animationName: "", propertyName: void 0, duration: 0 }; for (let s = 0; s < t.length; s++) {
    let a = zs(n[s]) + zs(o[s]), c = r[s];
    a > i.duration && c !== "infinite" && (i.animationName = t[s], i.duration = a);
} return i; }
function av(e, t) { return e !== void 0 && e.duration > t.duration; }
function cv(e) { return (e.animationName != null || e.propertyName != null) && e.duration > 0; }
function tS(e, t) { let n = getComputedStyle(e), o = eS(n), r = X_(n), i = o.duration > r.duration ? o : r; av(t.get(e), i) || cv(i) && t.set(e, i); }
function lv(e, t, n) { if (!n)
    return; let o = e.getAnimations(); return o.length === 0 ? tS(e, t) : nS(e, t, o); }
function nS(e, t, n) { let o = { animationName: void 0, propertyName: void 0, duration: 0 }; for (let r of n) {
    let i = r.effect?.getTiming();
    if (i?.iterations === 1 / 0)
        continue;
    let s = typeof i?.duration == "number" ? i.duration : 0, a = (i?.delay ?? 0) + s, c = r.playbackRate;
    c !== void 0 && c !== 0 && c !== 1 && (a /= Math.abs(c));
    let l, u;
    r.animationName ? u = r.animationName : l = r.transitionProperty, a >= o.duration && (o = { animationName: u, propertyName: l, duration: a });
} av(t.get(e), o) || cv(o) && t.set(e, o); }
var Cn = new Set, Aa = (function (e) { return e[e.CHANGE_DETECTION = 0] = "CHANGE_DETECTION", e[e.AFTER_NEXT_RENDER = 1] = "AFTER_NEXT_RENDER", e; })(Aa || {}), On = new C(""), Tg = new Set;
function J(e) { Tg.has(e) || (Tg.add(e), performance?.mark?.("mark_feature_usage", { detail: { feature: e } })); }
var Ra = (() => { class e {
    impl = null;
    execute() { this.impl?.execute(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), ef = [0, 1, 2, 3], tf = (() => { class e {
    ngZone = v(q);
    scheduler = v(xe);
    errorHandler = v(vt, { optional: !0 });
    sequences = new Set;
    deferredRegistrations = new Set;
    executing = !1;
    constructor() { v(On, { optional: !0 }); }
    execute() { let n = this.sequences.size > 0; n && V(O.AfterRenderHooksStart), this.executing = !0; for (let o of ef)
        for (let r of this.sequences)
            if (!(r.erroredOrDestroyed || !r.hooks[o]))
                try {
                    r.pipelinedValue = this.ngZone.runOutsideAngular(() => this.maybeTrace(() => { let i = r.hooks[o]; return i(r.pipelinedValue); }, r.snapshot));
                }
                catch (i) {
                    r.erroredOrDestroyed = !0, this.errorHandler?.handleError(i);
                } this.executing = !1; for (let o of this.sequences)
        o.afterRun(), o.once && (this.sequences.delete(o), o.destroy()); for (let o of this.deferredRegistrations)
        this.sequences.add(o); this.deferredRegistrations.size > 0 && this.scheduler.notify(7), this.deferredRegistrations.clear(), n && V(O.AfterRenderHooksEnd); }
    register(n) { let { view: o } = n; o !== void 0 ? ((o[un] ??= []).push(n), pn(o), o[N] |= 8192) : this.executing ? this.deferredRegistrations.add(n) : this.addSequence(n); }
    addSequence(n) { this.sequences.add(n), this.scheduler.notify(7); }
    unregister(n) { this.executing && this.sequences.has(n) ? (n.erroredOrDestroyed = !0, n.pipelinedValue = void 0, n.once = !0) : (this.sequences.delete(n), this.deferredRegistrations.delete(n)); }
    maybeTrace(n, o) { return o ? o.run(Aa.AFTER_NEXT_RENDER, n) : n(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Hr = class {
    impl;
    hooks;
    view;
    once;
    snapshot;
    erroredOrDestroyed = !1;
    pipelinedValue = void 0;
    unregisterOnDestroy;
    constructor(t, n, o, r, i, s = null) { this.impl = t, this.hooks = n, this.view = o, this.once = r, this.snapshot = s, this.unregisterOnDestroy = i?.onDestroy(() => this.destroy()); }
    afterRun() { this.erroredOrDestroyed = !1, this.pipelinedValue = void 0, this.snapshot?.dispose(), this.snapshot = null; }
    destroy() { this.impl.unregister(this), this.unregisterOnDestroy?.(); let t = this.view?.[un]; t && (this.view[un] = t.filter(n => n !== this)); }
};
function uv(e, t) { let n = t?.injector ?? v(ce); return typeof ngServerMode < "u" && ngServerMode ? ka : (J("NgAfterRender"), dv(e, n, t, !1)); }
function nf(e, t) { let n = t?.injector ?? v(ce); return typeof ngServerMode < "u" && ngServerMode ? ka : (J("NgAfterNextRender"), dv(e, n, t, !0)); }
function oS(e) { return e instanceof Function ? [void 0, void 0, e, void 0] : [e.earlyRead, e.write, e.mixedReadWrite, e.read]; }
function dv(e, t, n, o) { let r = t.get(Ra); r.impl ??= t.get(tf); let i = t.get(On, null, { optional: !0 }), s = n?.manualCleanup !== !0 ? t.get(Be) : null, a = t.get(zn, null, { optional: !0 }), c = new Hr(r.impl, oS(e), a?.view, o, s, i?.snapshot(null)); return r.impl.register(c), c; }
var ka = { destroy() { } }, Oa = new C("", { factory: () => ({ queue: new Set, isScheduled: !1, scheduler: null, injector: v(_e) }) });
function fv(e, t, n) { let o = e.get(Oa); if (Array.isArray(t))
    for (let r of t)
        o.queue.add(r), n?.detachedLeaveAnimationFns?.push(r);
else
    o.queue.add(t), n?.detachedLeaveAnimationFns?.push(t); o.scheduler && o.scheduler(e); }
function rS(e, t) { let n = e.get(Oa); if (t.detachedLeaveAnimationFns) {
    for (let o of t.detachedLeaveAnimationFns)
        n.queue.delete(o);
    t.detachedLeaveAnimationFns = void 0;
} }
function iS(e) { let t = e.get(Oa); t.isScheduled || (nf(() => { t.isScheduled = !1; for (let n of t.queue)
    n(); t.queue.clear(); }, { injector: t.injector }), t.isScheduled = !0); }
function xa(e) { let t = e.get(Oa); t.scheduler = iS, t.scheduler(e); }
function of(e, t) { for (let [n, o] of t)
    fv(e, o.animateFns); }
function Cg(e, t, n, o) { let r = e?.[it]?.enter; t !== null && r && r.has(n.index) && of(o, r); }
function no(e, t, n, o, r, i, s, a) { if (r != null) {
    let c, l = !1;
    K(r) ? c = r : ne(r) && (l = !0, r = r[U]);
    let u = L(r);
    e === 0 && o !== null ? (Cg(a, o, i, n), s == null ? By(t, o, u) : Dn(t, o, u, s || null, !0)) : e === 1 && o !== null ? (Cg(a, o, i, n), Dn(t, o, u, s || null, !0), Y_(i, u)) : e === 2 ? (a?.[it]?.leave?.has(i.index) && Jd(i, u), Cr.delete(u), Mg(a, i, n, d => { if (Cr.has(u)) {
        Cr.delete(u);
        return;
    } di(t, u, l, d); })) : e === 3 && (Cr.delete(u), Mg(a, i, n, () => { t.destroyNode(u); })), c != null && fS(t, e, n, c, i, o, s);
} }
function pv(e, t) { hv(e, t), t[U] = null, t[le] = null; }
function sS(e, t, n, o, r, i) { o[U] = r, o[le] = t, Pa(e, o, n, 1, r, i); }
function hv(e, t) { t[je].changeDetectionScheduler?.notify(9), Pa(e, t, t[w], 2, null, null); }
function aS(e) { let t = e[Ft]; if (!t)
    return Jl(e[m], e); for (; t;) {
    let n = null;
    if (ne(t))
        n = t[Ft];
    else {
        let o = t[G];
        o && (n = o);
    }
    if (!n) {
        for (; t && !t[he] && t !== e;)
            ne(t) && Jl(t[m], t), t = t[Q];
        t === null && (t = e), ne(t) && Jl(t[m], t), n = t && t[he];
    }
    t = n;
} }
function rf(e, t) { let n = e[dn], o = n.indexOf(t); n.splice(o, 1); }
function hi(e, t) { if (at(t))
    return; let n = t[w]; n.destroyNode && Pa(e, t, n, 3, null, null), aS(t); }
function Jl(e, t) { if (at(t))
    return; let n = R(null); try {
    t[N] &= -129, t[N] |= 256, t[Ae] && Ot(t[Ae]), uS(e, t), lS(e, t), t[m].type === 1 && t[w].destroy();
    let o = t[jt];
    if (o !== null && K(t[Q])) {
        o !== t[Q] && rf(o, t);
        let r = t[rt];
        r !== null && r.detachView(e);
    }
    Eu(t);
}
finally {
    R(n);
} }
function Mg(e, t, n, o) { let r = e?.[it]; if (r == null || r.leave == null || !r.leave.has(t.index))
    return o(!1); e && Cn.add(e[Ve]), fv(n, () => { if (r.leave && r.leave.has(t.index)) {
    let s = r.leave.get(t.index), a = [];
    if (s) {
        for (let c = 0; c < s.animateFns.length; c++) {
            let l = s.animateFns[c], { promise: u } = l();
            a.push(u);
        }
        r.detachedLeaveAnimationFns = void 0;
    }
    r.running = Promise.allSettled(a), cS(e, o);
}
else
    e && Cn.delete(e[Ve]), o(!1); }, r); }
function cS(e, t) { let n = e[it]?.running; if (n) {
    n.then(() => { e[it].running = void 0, Cn.delete(e[Ve]), t(!0); });
    return;
} t(!1); }
function lS(e, t) { let n = e.cleanup, o = t[Lt]; if (n !== null)
    for (let s = 0; s < n.length - 1; s += 2)
        if (typeof n[s] == "string") {
            let a = n[s + 3];
            a >= 0 ? o[a]() : o[-a].unsubscribe(), s += 2;
        }
        else {
            let a = o[n[s + 1]];
            n[s].call(a);
        } o !== null && (t[Lt] = null); let r = t[mt]; if (r !== null) {
    t[mt] = null;
    for (let s = 0; s < r.length; s++) {
        let a = r[s];
        a();
    }
} let i = t[Pt]; if (i !== null) {
    t[Pt] = null;
    for (let s of i)
        s.destroy();
} }
function uS(e, t) { let n; if (e != null && (n = e.destroyHooks) != null)
    for (let o = 0; o < n.length; o += 2) {
        let r = t[n[o]];
        if (!(r instanceof In)) {
            let i = n[o + 1];
            if (Array.isArray(i))
                for (let s = 0; s < i.length; s += 2) {
                    let a = r[i[s]], c = i[s + 1];
                    V(O.LifecycleHookStart, a, c);
                    try {
                        c.call(a);
                    }
                    finally {
                        V(O.LifecycleHookEnd, a, c);
                    }
                }
            else {
                V(O.LifecycleHookStart, r, i);
                try {
                    i.call(r);
                }
                finally {
                    V(O.LifecycleHookEnd, r, i);
                }
            }
        }
    } }
function sf(e, t, n) { return gv(e, t.parent, n); }
function gv(e, t, n) { let o = t; for (; o !== null && o.type & 168;)
    t = o, o = t.parent; if (o === null)
    return n[U]; if (De(o)) {
    let { encapsulation: r } = e.data[o.directiveStart + o.componentOffset];
    if (r === Ue.None || r === Ue.Emulated)
        return null;
} return ie(o, n); }
function mv(e, t, n) { return vv(e, t, n); }
function yv(e, t, n) { return e.type & 40 ? ie(e, n) : null; }
var vv = yv, Bu;
function Ev(e, t) { vv = e, Bu = t; }
function af(e, t, n, o) { let r = sf(e, o, t), i = t[w], s = o.parent || t[le], a = mv(s, o, t); if (r != null)
    if (Array.isArray(n))
        for (let c = 0; c < n.length; c++)
            Ig(i, r, n[c], a, !1);
    else
        Ig(i, r, n, a, !1); Bu !== void 0 && Bu(i, o, t, n, r); }
function vn(e, t) { if (t !== null) {
    let n = t.type;
    if (n & 3)
        return ie(t, e);
    if (n & 4)
        return $u(-1, e[t.index]);
    if (n & 8) {
        let o = t.child;
        if (o !== null)
            return vn(e, o);
        {
            let r = e[t.index];
            return K(r) ? $u(-1, r) : L(r);
        }
    }
    else {
        if (n & 128)
            return vn(e, t.next);
        if (n & 32)
            return Yd(t, e)() || L(e[t.index]);
        {
            let o = Iv(e, t);
            if (o !== null) {
                if (Array.isArray(o))
                    return o[0];
                let r = yt(e[ee]);
                return vn(r, o);
            }
            else
                return vn(e, t.next);
        }
    }
} return null; }
function Iv(e, t) { if (t !== null) {
    let o = e[ee][le], r = t.projection;
    return o.projection[r];
} return null; }
function $u(e, t) { let n = G + e + 1; if (n < t.length) {
    let o = t[n], r = o[m].firstChild;
    if (r !== null)
        return vn(o, r);
} return t[Ke]; }
function cf(e, t, n, o, r, i, s) { for (; n != null;) {
    let a = o[P];
    if (n.type === 128) {
        n = n.next;
        continue;
    }
    let c = o[n.index], l = n.type;
    if (s && t === 0 && (c && $e(L(c), o), n.flags |= 2), !Ao(n))
        if (l & 8)
            cf(e, t, n.child, o, r, i, !1), no(t, e, a, r, c, n, i, o);
        else if (l & 32) {
            let u = Yd(n, o), d;
            for (; d = u();)
                no(t, e, a, r, d, n, i, o);
            no(t, e, a, r, c, n, i, o);
        }
        else
            l & 16 ? Dv(e, t, o, n, r, i) : no(t, e, a, r, c, n, i, o);
    n = s ? n.projectionNext : n.next;
} }
function Pa(e, t, n, o, r, i) { cf(n, o, e.firstChild, t, r, i, !1); }
function dS(e, t, n) { let o = t[w], r = sf(e, n, t), i = n.parent || t[le], s = mv(i, n, t); Dv(o, 0, t, n, r, s); }
function Dv(e, t, n, o, r, i) { let s = n[ee], c = s[le].projection[o.projection]; if (Array.isArray(c))
    for (let l = 0; l < c.length; l++) {
        let u = c[l];
        no(t, e, n[P], r, u, o, i, n);
    }
else {
    let l = c, u = s[Q];
    Lr(o) && (l.flags |= 128), cf(e, t, l, u, r, i, !0);
} }
function fS(e, t, n, o, r, i, s) { let a = o[Ke], c = L(o); a !== c && no(t, e, n, i, a, r, s); for (let l = G; l < o.length; l++) {
    let u = o[l];
    Pa(u[m], u, e, t, i, a);
} }
function pS(e, t, n, o, r) { if (t)
    r ? e.addClass(n, o) : e.removeClass(n, o);
else {
    let i = o.indexOf("-") === -1 ? void 0 : Gs.DashCase;
    r == null ? e.removeStyle(n, o, i) : (typeof r == "string" && r.endsWith("!important") && (r = r.slice(0, -10), i |= Gs.Important), e.setStyle(n, o, r, i));
} }
function Tv(e, t, n, o, r) { let i = de(), s = o & 2; try {
    Bt(-1), s && t.length > I && ov(e, t, I, !1);
    let a = s ? O.TemplateUpdateStart : O.TemplateCreateStart;
    V(a, r, n), n(o, r);
}
finally {
    Bt(i);
    let a = s ? O.TemplateUpdateEnd : O.TemplateCreateEnd;
    V(a, r, n);
} }
function La(e, t, n) { vS(e, t, n), (n.flags & 64) === 64 && ES(e, t, n); }
function xo(e, t, n = ie) { let o = t.localNames; if (o !== null) {
    let r = t.index + 1;
    for (let i = 0; i < o.length; i += 2) {
        let s = o[i + 1], a = s === -1 ? n(t, e) : e[s];
        e[r++] = a;
    }
} }
function hS(e, t, n, o) { let i = o.get(wd, oy) || n === Ue.ShadowDom || n === Ue.ExperimentalIsolatedShadowDom, s = e.selectRootElement(t, i); return gS(s), s; }
function gS(e) { Cv(e); }
var Cv = () => null;
function mS(e) { Um(e) ? $y(e) : Ow(e); }
function Mv() { Cv = mS; }
function yS(e) { return e === "class" ? "className" : e === "for" ? "htmlFor" : e === "formaction" ? "formAction" : e === "innerHtml" ? "innerHTML" : e === "readonly" ? "readOnly" : e === "tabindex" ? "tabIndex" : e; }
function lf(e, t, n, o, r, i) { let s = t[m]; if (Ha(e, s, t, n, o)) {
    De(e) && Nv(t, e.index);
    return;
} e.type & 3 && (n = yS(n)), uf(e, t, n, o, r, i); }
function uf(e, t, n, o, r, i) { if (e.type & 3) {
    let s = ie(e, t);
    o = i != null ? i(o, e.value || "", n) : o, r.setProperty(s, n, o);
}
else
    e.type & 12; }
function Nv(e, t) { let n = ye(t, e); n[N] & 16 || (n[N] |= 64); }
function vS(e, t, n) { let o = n.directiveStart, r = n.directiveEnd; De(n) && q_(t, n, e.data[o + n.componentOffset]), e.firstCreatePass || Vs(n, t); let i = n.initialInputs; for (let s = o; s < r; s++) {
    let a = e.data[s], c = Pr(t, e, s, n);
    if ($e(c, t), i !== null && TS(t, s - o, c, a, n, i), He(a)) {
        let l = ye(n.index, t);
        l[$] = Pr(t, e, s, n);
    }
} }
function ES(e, t, n) { let o = n.directiveStart, r = n.directiveEnd, i = n.index, s = qh(); try {
    Bt(i);
    for (let a = o; a < r; a++) {
        let c = e.data[a], l = t[a];
        ss(a), (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) && IS(c, l);
    }
}
finally {
    Bt(-1), ss(s);
} }
function IS(e, t) { e.hostBindings !== null && e.hostBindings(1, t); }
function df(e, t) { let n = e.directiveRegistry, o = null; if (n)
    for (let r = 0; r < n.length; r++) {
        let i = n[r];
        ev(t, i.selectors, !1) && (o ??= [], He(i) ? o.unshift(i) : o.push(i));
    } return o; }
function DS(e, t, n, o, r, i) { let s = ie(e, t); Fa(t[w], s, i, e.value, n, o, r); }
function Fa(e, t, n, o, r, i, s) { if (i == null)
    e.removeAttribute(t, r, n);
else {
    let a = s == null ? b(i) : s(i, o || "", r);
    e.setAttribute(t, r, a, n);
} }
function TS(e, t, n, o, r, i) { let s = i[t]; if (s !== null)
    for (let a = 0; a < s.length; a += 2) {
        let c = s[a], l = s[a + 1];
        zt(o, n, c, l);
    } }
function ja(e, t, n, o, r) { let i = I + n, s = t[m], a = r(s, t, e, o, n); t[i] = a, ct(e, !0); let c = e.type === 2; return c ? (Uy(t[w], a, e), (Vh() === 0 || Un(e)) && $e(a, t), Hh()) : $e(a, t), vr() && (!c || !Ao(e)) && af(s, t, a, e), e; }
function Va(e) { let t = e; return wl() ? _l() : (t = t.parent, ct(t, !1)), t; }
function wv(e, t, n) { return (e === null || He(e)) && (n = pr(n[t.index])), n[w]; }
function ff(e, t) { let n = e[P]; if (!n)
    return; let o; try {
    o = n.get(It, null);
}
catch {
    o = null;
} o?.(t); }
function Ha(e, t, n, o, r) { let i = e.inputs?.[o], s = e.hostDirectiveInputs?.[o], a = !1; if (s)
    for (let c = 0; c < s.length; c += 2) {
        let l = s[c], u = s[c + 1], d = t.data[l];
        zt(d, n[l], u, r), a = !0;
    } if (i)
    for (let c of i) {
        let l = n[c], u = t.data[c];
        zt(u, l, o, r), a = !0;
    } return a; }
function CS(e, t, n, o, r, i) { let s = null, a = null, c = null, l = !1, u = e.directiveToIndex.get(o.type); if (typeof u == "number" ? s = u : [s, a, c] = u, a !== null && c !== null && e.hostDirectiveInputs?.hasOwnProperty(r)) {
    let d = e.hostDirectiveInputs[r];
    for (let f = 0; f < d.length; f += 2) {
        let p = d[f];
        if (p >= a && p <= c) {
            let h = t.data[p], y = d[f + 1];
            zt(h, n[p], y, i), l = !0;
        }
        else if (p > c)
            break;
    }
} return s !== null && o.inputs.hasOwnProperty(r) && (zt(o, n[s], r, i), l = !0), l; }
function MS(e, t) { let n = ye(t, e), o = n[m]; NS(o, n); let r = n[U]; r !== null && n[ue] === null && (n[ue] = vy(r, n[P])), V(O.ComponentStart); try {
    Ba(o, n, n[$]);
}
finally {
    V(O.ComponentEnd, n[$]);
} }
function NS(e, t) { for (let n = t.length; n < e.blueprint.length; n++)
    t.push(e.blueprint[n]); }
function Ba(e, t, n) { ls(t); try {
    let o = e.viewQuery;
    o !== null && Mu(1, o, n);
    let r = e.template;
    r !== null && Tv(e, t, r, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), t[rt]?.finishViewCreation(e), e.staticContentQueries && by(e, t), e.staticViewQueries && Mu(2, e.viewQuery, n);
    let i = e.components;
    i !== null && wS(t, i);
}
catch (o) {
    throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), o;
}
finally {
    t[N] &= -5, us();
} }
function wS(e, t) { for (let n = 0; n < t.length; n++)
    MS(e, t[n]); }
function Po(e, t, n, o) { let r = R(null); try {
    let i = t.tView, a = e[N] & 4096 ? 4096 : 16, c = wa(e, i, n, a, null, t, null, null, o?.injector ?? null, o?.embeddedViewInjector ?? null, o?.dehydratedView ?? null), l = e[t.index];
    c[jt] = l;
    let u = e[rt];
    return u !== null && (c[rt] = u.createEmbeddedView(i)), Ba(i, c, n), c;
}
finally {
    R(r);
} }
function Mn(e, t) { return !t || t.firstChild === null || Lr(e); }
function po(e, t, n, o, r = !1) { for (; n !== null;) {
    if (n.type === 128) {
        n = r ? n.projectionNext : n.next;
        continue;
    }
    let i = t[n.index];
    i !== null && o.push(L(i)), K(i) && $a(i, o);
    let s = n.type;
    if (s & 8)
        po(e, t, n.child, o);
    else if (s & 32) {
        let a = Yd(n, t), c;
        for (; c = a();)
            o.push(c);
    }
    else if (s & 16) {
        let a = Iv(t, n);
        if (Array.isArray(a))
            o.push(...a);
        else {
            let c = yt(t[ee]);
            po(c[m], c, a, o, !0);
        }
    }
    n = r ? n.projectionNext : n.next;
} return o; }
function $a(e, t) { for (let n = G; n < e.length; n++) {
    let o = e[n], r = o[m].firstChild;
    r !== null && po(o[m], o, r, t);
} e[Ke] !== e[U] && t.push(e[Ke]); }
function _v(e) { if (e[un] !== null) {
    for (let t of e[un])
        t.impl.addSequence(t);
    e[un].length = 0;
} }
var Sv = [];
function _S(e) { return e[Ae] ?? SS(e); }
function SS(e) { let t = Sv.pop() ?? Object.create(AS); return t.lView = e, t; }
function bS(e) { e.lView[Ae] !== e && (e.lView = null, Sv.push(e)); }
var AS = we(z({}, Sc), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { pn(e.lView); }, consumerOnSignalRead() { this.lView[Ae] = this; } });
function RS(e) { let t = e[Ae] ?? Object.create(kS); return t.lView = e, t; }
var kS = we(z({}, Sc), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { let t = yt(e.lView); for (; t && !bv(t[m]);)
        t = yt(t); t && ns(t); }, consumerOnSignalRead() { this.lView[Ae] = this; } });
function bv(e) { return e.type !== 2; }
function Av(e) { if (e[Pt] === null)
    return; let t = !0; for (; t;) {
    let n = !1;
    for (let o of e[Pt])
        o.dirty && (n = !0, o.zone === null || Zone.current === o.zone ? o.run() : o.zone.run(() => o.run()));
    t = n && !!(e[N] & 8192);
} }
var OS = 100;
function Rv(e, t = 0) { let o = e[je].rendererFactory, r = !1; r || o.begin?.(); try {
    xS(e, t);
}
finally {
    r || o.end?.();
} }
function xS(e, t) { let n = bl(); try {
    Yo(!0), Uu(e, t);
    let o = 0;
    for (; qn(e);) {
        if (o === OS)
            throw new D(103, !1);
        o++, Uu(e, 1);
    }
}
finally {
    Yo(n);
} }
function kv(e, t, n, o) { if (at(t))
    return; let r = t[N], i = !1, s = !1; ls(t); let a = !0, c = null, l = null; i || (bv(e) ? (l = _S(t), c = Go(l)) : Ri() === null ? (a = !1, l = RS(t), c = Go(l)) : t[Ae] && (Ot(t[Ae]), t[Ae] = null)); try {
    hl(t), Al(e.bindingStartIndex), n !== null && Tv(e, t, n, 2, o);
    let u = (r & 3) === 3;
    if (!i)
        if (u) {
            let p = e.preOrderCheckHooks;
            p !== null && Ms(t, p, null);
        }
        else {
            let p = e.preOrderHooks;
            p !== null && Ns(t, p, 0, null), zl(t, 0);
        }
    if (s || PS(t), Av(t), Ov(t, 0), e.contentQueries !== null && by(e, t), !i)
        if (u) {
            let p = e.contentCheckHooks;
            p !== null && Ms(t, p);
        }
        else {
            let p = e.contentHooks;
            p !== null && Ns(t, p, 1), zl(t, 1);
        }
    FS(e, t);
    let d = e.components;
    d !== null && Pv(t, d, 0);
    let f = e.viewQuery;
    if (f !== null && Mu(2, f, o), !i)
        if (u) {
            let p = e.viewCheckHooks;
            p !== null && Ms(t, p);
        }
        else {
            let p = e.viewHooks;
            p !== null && Ns(t, p, 2), zl(t, 2);
        }
    if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[es]) {
        for (let p of t[es])
            p();
        t[es] = null;
    }
    i || (_v(t), t[N] &= -73);
}
catch (u) {
    throw i || pn(t), u;
}
finally {
    l !== null && (Oi(l, c), a && bS(l)), us();
} }
function Ov(e, t) { for (let n = Qm(e); n !== null; n = Zm(n))
    for (let o = G; o < n.length; o++) {
        let r = n[o];
        xv(r, t);
    } }
function PS(e) { for (let t = Qm(e); t !== null; t = Zm(t)) {
    if (!(t[N] & 2))
        continue;
    let n = t[dn];
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        ns(r);
    }
} }
function LS(e, t, n) { V(O.ComponentStart); let o = ye(t, e); try {
    xv(o, n);
}
finally {
    V(O.ComponentEnd, o[$]);
} }
function xv(e, t) { ts(e) && Uu(e, t); }
function Uu(e, t) { let o = e[m], r = e[N], i = e[Ae], s = !!(t === 0 && r & 16); if (s ||= !!(r & 64 && t === 0), s ||= !!(r & 1024), s ||= !!(i?.dirty && xi(i)), s ||= !1, i && (i.dirty = !1), e[N] &= -9217, s)
    kv(o, e, o.template, e[$]);
else if (r & 8192) {
    let a = R(null);
    try {
        Av(e), Ov(e, 1);
        let c = o.components;
        c !== null && Pv(e, c, 1), _v(e);
    }
    finally {
        R(a);
    }
} }
function Pv(e, t, n) { for (let o = 0; o < t.length; o++)
    LS(e, t[o], n); }
function FS(e, t) { let n = e.hostBindingOpCodes; if (n !== null)
    try {
        for (let o = 0; o < n.length; o++) {
            let r = n[o];
            if (r < 0)
                Bt(~r);
            else {
                let i = r, s = n[++o], a = n[++o];
                Uh(s, i);
                let c = t[i];
                V(O.HostBindingsUpdateStart, c);
                try {
                    a(2, c);
                }
                finally {
                    V(O.HostBindingsUpdateEnd, c);
                }
            }
        }
    }
    finally {
        Bt(-1);
    } }
function gi(e, t) { let n = bl() ? 64 : 1088; for (e[je].changeDetectionScheduler?.notify(t); e;) {
    e[N] |= n;
    let o = yt(e);
    if (st(e) && !o)
        return e;
    e = o;
} return null; }
function Lv(e, t, n, o) { return [e, !0, 0, t, null, o, null, n, null, null]; }
function Fv(e, t) { let n = G + t; if (n < e.length)
    return e[n]; }
function Lo(e, t, n, o = !0) { let r = t[m]; if (jS(r, t, e, n), o) {
    let s = $u(n, e), a = t[w], c = a.parentNode(e[Ke]);
    c !== null && sS(r, e[le], a, t, c, s);
} let i = t[ue]; i !== null && i.firstChild !== null && (i.firstChild = null); }
function pf(e, t) { let n = Br(e, t); return n !== void 0 && hi(n[m], n), n; }
function Br(e, t) { if (e.length <= G)
    return; let n = G + t, o = e[n]; if (o) {
    let r = o[jt];
    r !== null && r !== e && rf(r, o), t > 0 && (e[n - 1][he] = o[he]);
    let i = cr(e, G + t);
    pv(o[m], o);
    let s = i[rt];
    s !== null && s.detachView(i[m]), o[Q] = null, o[he] = null, o[N] &= -129;
} return o; }
function jS(e, t, n, o) { let r = G + o, i = n.length; o > 0 && (n[r - 1][he] = t), o < i - G ? (t[he] = n[r], el(n, G + o, t)) : (n.push(t), t[he] = null), t[Q] = n; let s = t[jt]; s !== null && n !== s && jv(s, t); let a = t[rt]; a !== null && a.insertView(e), os(t), t[N] |= 128; }
function jv(e, t) { let n = e[dn], o = t[Q]; if (ne(o))
    e[N] |= 2;
else {
    let r = o[Q][ee];
    t[ee] !== r && (e[N] |= 2);
} n === null ? e[dn] = [t] : n.push(t); }
var Zt = class {
    _lView;
    _cdRefInjectingView;
    _appRef = null;
    _attachedToViewContainer = !1;
    exhaustive;
    get rootNodes() { let t = this._lView, n = t[m]; return po(n, t, n.firstChild, []); }
    constructor(t, n) { this._lView = t, this._cdRefInjectingView = n; }
    get context() { return this._lView[$]; }
    set context(t) { this._lView[$] = t; }
    get destroyed() { return at(this._lView); }
    destroy() { if (this._appRef)
        this._appRef.detachView(this);
    else if (this._attachedToViewContainer) {
        let t = this._lView[Q];
        if (K(t)) {
            let n = t[fr], o = n ? n.indexOf(this) : -1;
            o > -1 && (Br(t, o), cr(n, o));
        }
        this._attachedToViewContainer = !1;
    } hi(this._lView[m], this._lView); }
    onDestroy(t) { gr(this._lView, t); }
    markForCheck() { gi(this._cdRefInjectingView || this._lView, 4); }
    detach() { this._lView[N] &= -129; }
    reattach() { os(this._lView), this._lView[N] |= 128; }
    detectChanges() { this._lView[N] |= 1024, Rv(this._lView); }
    checkNoChanges() { }
    attachToViewContainerRef() { if (this._appRef)
        throw new D(902, !1); this._attachedToViewContainer = !0; }
    detachFromAppRef() { this._appRef = null; let t = st(this._lView), n = this._lView[jt]; n !== null && !t && rf(n, this._lView), hv(this._lView[m], this._lView); }
    attachToAppRef(t) { if (this._attachedToViewContainer)
        throw new D(902, !1); this._appRef = t; let n = st(this._lView), o = this._lView[jt]; o !== null && !n && jv(o, this._lView), os(this._lView); }
};
function VS(e) { return qn(e._lView) || !!(e._lView[N] & 64); }
function HS(e) { ns(e._lView); }
var $r = (() => { class e {
    _declarationLView;
    _declarationTContainer;
    elementRef;
    static __NG_ELEMENT_ID__ = BS;
    constructor(n, o, r) { this._declarationLView = n, this._declarationTContainer = o, this.elementRef = r; }
    get ssrId() { return this._declarationTContainer.tView?.ssrId || null; }
    createEmbeddedView(n, o) { return this.createEmbeddedViewImpl(n, o); }
    createEmbeddedViewImpl(n, o, r) { let i = Po(this._declarationLView, this._declarationTContainer, n, { embeddedViewInjector: o, dehydratedView: r }); return new Zt(i); }
} return e; })();
function BS() { return Ua(_(), g()); }
function Ua(e, t) { return e.type & 4 ? new $r(t, e, Co(e, t)) : null; }
var qu = "<-- AT THIS LOCATION", $S = "/guide/hydration#third-party-scripts-with-dom-manipulation";
function US(e) { switch (e) {
    case 4: return "view container";
    case 2: return "element";
    case 8: return "ng-container";
    case 32: return "icu";
    case 64: return "i18n";
    case 16: return "projection";
    case 1: return "text";
    case 128: return "@let";
    default: return "<unknown>";
} }
function qS(e, t) {
    let n = `During serialization, Angular was unable to find an element in the DOM:

`, o = `${QS(e, t, !1)}

`, r = YS();
    throw new D(-502, n + o + r);
}
function Vv(e) {
    let t = "During serialization, Angular detected DOM nodes that were created outside of Angular context and provided as projectable nodes (likely via `ViewContainerRef.createComponent` or `createComponent` APIs). Hydration is not supported for such cases, consider refactoring the code to avoid this pattern or using `ngSkipHydration` on the host element of the component.\n\n", n = `${ZS(e)}

`, o = t + n + KS();
    return new D(-503, o);
}
function GS(e) { let t = []; if (e.attrs)
    for (let n = 0; n < e.attrs.length;) {
        let o = e.attrs[n++];
        if (typeof o == "number")
            break;
        let r = e.attrs[n++];
        t.push(`${o}="${Qs(r)}"`);
    } return t.join(" "); }
var WS = new Set(["ngh", "ng-version", "ng-server-context"]);
function zS(e) { let t = []; for (let n = 0; n < e.attributes.length; n++) {
    let o = e.attributes[n];
    WS.has(o.name) || t.push(`${o.name}="${Qs(o.value)}"`);
} return t.join(" "); }
function Xl(e, t = "\u2026") { switch (e.type) {
    case 1: return `#text${e.value ? `(${e.value})` : ""}`;
    case 2:
        let o = GS(e), r = e.value.toLowerCase();
        return `<${r}${o ? " " + o : ""}>${t}</${r}>`;
    case 8: return "<!-- ng-container -->";
    case 4: return "<!-- container -->";
    default: return `#node(${US(e.type)})`;
} }
function Ss(e, t = "\u2026") { let n = e; switch (n.nodeType) {
    case Node.ELEMENT_NODE:
        let o = n.tagName.toLowerCase(), r = zS(n);
        return `<${o}${r ? " " + r : ""}>${t}</${o}>`;
    case Node.TEXT_NODE:
        let i = n.textContent ? Qs(n.textContent) : "";
        return `#text${i ? `(${i})` : ""}`;
    case Node.COMMENT_NODE: return `<!-- ${Qs(n.textContent ?? "")} -->`;
    default: return `#node(${n.nodeType})`;
} }
function QS(e, t, n) {
    let r = "";
    t.prev ? (r += `  \u2026
`, r += "  " + Xl(t.prev) + `
`) : t.type && t.type & 12 && (r += `  \u2026
`), n ? (r += "  " + Xl(t) + `
`, r += `  <!-- container -->  ${qu}
`) : r += "  " + Xl(t) + `  ${qu}
`, r += `  \u2026
`;
    let i = t.type ? sf(e[m], t, e) : null;
    return i && (r = Ss(i, `
` + r)), r;
}
function ZS(e) {
    let n = "", o = e;
    return o.previousSibling && (n += `  \u2026
`, n += "  " + Ss(o.previousSibling) + `
`), n += "  " + Ss(o) + `  ${qu}
`, e.nextSibling && (n += `  \u2026
`), e.parentNode && (n = Ss(o.parentNode, `
` + n)), n;
}
function YS(e) {
    return `To fix this problem:
  * check ${e ? `the "${e}"` : "corresponding"} component for hydration-related issues
  * check to see if your template has valid HTML structure
  * check if there are any third-party scripts that manipulate the DOM. More info: ${Zc}${$S}
  * or skip hydration by adding the \`ngSkipHydration\` attribute to its host node in a template

`;
}
function KS() {
    return `Note: attributes are only displayed to better represent the DOM but have no effect on hydration mismatches.

`;
}
function JS(e) { return e.replace(/\s+/gm, ""); }
function Qs(e, t = 50) { return e ? (e = JS(e), e.length > t ? `${e.substring(0, t - 1)}\u2026` : e) : ""; }
function Hv(e, t, n) { let o = t.insertBeforeIndex, r = Array.isArray(o) ? o[0] : o; return r === null ? yv(e, t, n) : L(n[r]); }
function Bv(e, t, n, o, r) { let i = t.insertBeforeIndex; if (Array.isArray(i)) {
    let s = o, a = null;
    if (t.type & 3 || (a = s, s = r), s !== null && t.componentOffset === -1)
        for (let c = 1; c < i.length; c++) {
            let l = n[i[c]];
            Dn(e, s, l, a, !1);
        }
} }
function xn(e, t, n, o, r) { let i = e.data[t]; if (i === null)
    i = hf(e, t, n, o, r), $h() && (i.flags |= 32);
else if (i.type & 64) {
    i.type = n, i.value = o, i.attrs = r;
    let s = Gn();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
} return ct(i, !0), i; }
function hf(e, t, n, o, r) { let i = Nl(), s = wl(), a = s ? i : i && i.parent, c = e.data[t] = eb(e, a, n, t, o, r); return XS(e, c, i, s), c; }
function XS(e, t, n, o) { e.firstChild === null && (e.firstChild = t), n !== null && (o ? n.child == null && t.parent !== null && (n.child = t) : n.next === null && (n.next = t, t.prev = n)); }
function eb(e, t, n, o, r, i) { let s = t ? t.injectorIndex : -1, a = 0; return mr() && (a |= 128), { type: n, index: o, insertBeforeIndex: null, injectorIndex: s, directiveStart: -1, directiveEnd: -1, directiveStylingLast: -1, componentOffset: -1, controlDirectiveIndex: -1, customControlIndex: -1, propertyBindings: null, flags: a, providerIndexes: 0, value: r, attrs: i, mergedAttrs: null, localNames: null, initialInputs: null, inputs: null, hostDirectiveInputs: null, outputs: null, hostDirectiveOutputs: null, directiveToIndex: null, tView: null, next: null, prev: null, projectionNext: null, child: null, parent: t, projection: null, styles: null, stylesWithoutHost: null, residualStyles: void 0, classes: null, classesWithoutHost: null, residualClasses: void 0, classBindings: 0, styleBindings: 0 }; }
function $v(e, t) { if (e.push(t), e.length > 1)
    for (let n = e.length - 2; n >= 0; n--) {
        let o = e[n];
        Uv(o) || tb(o, t) && nb(o) === null && ob(o, t.index);
    } }
function Uv(e) { return !(e.type & 64); }
function tb(e, t) { return Uv(t) || e.index > t.index; }
function nb(e) { let t = e.insertBeforeIndex; return Array.isArray(t) ? t[0] : t; }
function ob(e, t) { let n = e.insertBeforeIndex; Array.isArray(n) ? n[0] = t : (Ev(Hv, Bv), e.insertBeforeIndex = t); }
function Nr(e, t) { let n = e.data[t]; return n === null || typeof n == "string" ? null : n.hasOwnProperty("currentCaseLViewIndex") ? n : n.value; }
function rb(e, t, n) { let o = e.data[t]; o === null ? e.data[t] = n : o.value = n; }
function ib(e, t) { let n = e.insertBeforeIndex; n === null ? (Ev(Hv, Bv), n = e.insertBeforeIndex = [null, t]) : (Mh(Array.isArray(n), !0, "Expecting array here"), n.push(t)); }
function sb(e, t, n) { let o = hf(e, n, 64, null, null); return $v(t, o), o; }
function qa(e, t) { let n = t[e.currentCaseLViewIndex]; return n === null ? n : n < 0 ? ~n : n; }
function ab(e) { return e >>> 17; }
function cb(e) { return (e & 131070) >>> 1; }
function lb(e, t, n) { return e | t << 17 | n << 1; }
function qv(e) { return e === -1; }
function gf(e, t, n) { e.index = 0; let o = qa(t, n); o !== null ? e.removes = t.remove[o] : e.removes = F; }
function Zs(e) { if (e.index < e.removes.length) {
    let t = e.removes[e.index++];
    if (t > 0)
        return e.lView[t];
    {
        e.stack.push(e.index, e.removes);
        let n = ~t, o = e.lView[m].data[n];
        return gf(e, o, e.lView), Zs(e);
    }
}
else
    return e.stack.length === 0 ? (e.lView = void 0, null) : (e.removes = e.stack.pop(), e.index = e.stack.pop(), Zs(e)); }
function ub() { let e = { stack: [], index: -1 }; function t(n, o) { for (e.lView = o; e.stack.length;)
    e.stack.pop(); return gf(e, n.value, o), Zs.bind(null, e); } return t; }
function db(e, t) { let n = { stack: [], index: -1, lView: t }; return gf(n, e, t), Zs.bind(null, n); }
var fb = new RegExp(`^(\\d+)*(${Md}|${Cd})*(.*)`);
function pb(e, t) { let n = [e]; for (let o of t) {
    let r = n.length - 1;
    if (r > 0 && n[r - 1] === o) {
        let i = n[r] || 1;
        n[r] = i + 1;
    }
    else
        n.push(o, "");
} return n.join(""); }
function hb(e) { let t = e.match(fb), [n, o, r, i] = t, s = o ? parseInt(o, 10) : r, a = []; for (let [c, l, u] of i.matchAll(/(f|n)(\d*)/g)) {
    let d = parseInt(u, 10) || 1;
    a.push(l, d);
} return [s, ...a]; }
function gb(e) { return !e.prev && e.parent?.type === 8; }
function eu(e) { return e.index - I; }
function Fo(e, t) { return !(e.type & 144) && !!t[e.index] && Gv(L(t[e.index])); }
function Gv(e) { return !!e && !e.isConnected; }
function Wv(e, t) { let n = e.i18nNodes; if (n)
    return n.get(t); }
function mb(e, t, n) { let r = e.data[ii]?.[n]; return r ? zv(r, t) : null; }
function mi(e, t, n, o) { let r = eu(o), i = Wv(e, r); if (i === void 0) {
    let s = e.data[ii];
    if (s?.[r])
        i = zv(s[r], n);
    else if (t.firstChild === o)
        i = e.firstChild;
    else {
        let a = o.prev === null, c = o.prev ?? o.parent;
        if (gb(o)) {
            let l = eu(o.parent);
            i = Cu(e, l);
        }
        else {
            let l = ie(c, n);
            if (a)
                i = l.firstChild;
            else {
                let u = eu(c), d = Cu(e, u);
                if (c.type === 2 && d) {
                    let p = Ld(e, u) + 1;
                    i = Ga(p, d);
                }
                else
                    i = l.nextSibling;
            }
        }
    }
} return i; }
function Ga(e, t) { let n = t; for (let o = 0; o < e; o++)
    n = n.nextSibling; return n; }
function yb(e, t) { let n = e; for (let o = 0; o < t.length; o += 2) {
    let r = t[o], i = t[o + 1];
    for (let s = 0; s < i; s++)
        switch (r) {
            case ty:
                n = n.firstChild;
                break;
            case ny:
                n = n.nextSibling;
                break;
        }
} return n; }
function zv(e, t) { let [n, ...o] = hb(e), r; if (n === Cd)
    r = t[ee][U];
else if (n === Md)
    r = Gd(t[ee][U]);
else {
    let i = Number(n);
    r = L(t[i + I]);
} return yb(r, o); }
function Gu(e, t) { if (e === t)
    return []; if (e.parentElement == null || t.parentElement == null)
    return null; if (e.parentElement === t.parentElement)
    return vb(e, t); {
    let n = t.parentElement, o = Gu(e, n), r = Gu(n.firstChild, t);
    return !o || !r ? null : [...o, ty, ...r];
} }
function vb(e, t) { let n = [], o = null; for (o = e; o != null && o !== t; o = o.nextSibling)
    n.push(ny); return o == null ? null : n; }
function Ng(e, t, n) { let o = Gu(e, t); return o === null ? null : pb(n, o); }
function Qv(e, t, n) { let o = e.parent, r, i, s; for (; o !== null && (Fo(o, t) || n?.has(o.index));)
    o = o.parent; o === null || !(o.type & 3) ? (r = s = Cd, i = t[ee][U]) : (r = o.index, i = L(t[r]), s = b(r - I)); let a = L(t[e.index]); if (e.type & 44) {
    let l = vn(t, e);
    l && (a = l);
} let c = Ng(i, a, s); if (c === null && i !== a) {
    let l = i.ownerDocument.body;
    if (c = Ng(l, a, Md), c === null)
        throw qS(t, e);
} return c; }
function Zv(e, t) { let n = e.createNodeIterator(t, NodeFilter.SHOW_COMMENT, { acceptNode: Eb }), o, r = new Map; for (; o = n.nextNode();) {
    let i = "ngh=", s = o?.textContent, a = s?.indexOf(i) ?? -1;
    if (a > -1) {
        let c = s.substring(a + i.length).trim();
        r.set(c, o);
    }
} return r; }
function Eb(e) { return e.textContent?.trimStart().startsWith("ngh=") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; }
var Yv = !1, Kv = () => { };
function mf(e) { Yv = e; }
function Wa() { return Yv; }
function Ib(e, t, n, o) { Kv(e, t, n, o); }
function Jv() { Kv = Nb; }
function Xv(e) { return e = e ?? v(ce), e.get(_d, !1); }
function eE(e, t) { let n = t.i18nChildren.get(e); return n === void 0 && (n = Db(e), t.i18nChildren.set(e, n)), n; }
function Db(e) { let t = new Set; function n(o) { switch (t.add(o.index), o.kind) {
    case 1:
    case 2: {
        for (let r of o.children)
            n(r);
        break;
    }
    case 3: {
        for (let r of o.cases)
            for (let i of r)
                n(i);
        break;
    }
} } for (let o = I; o < e.bindingStartIndex; o++) {
    let r = e.data[o];
    if (!(!r || !r.ast))
        for (let i of r.ast)
            n(i);
} return t.size === 0 ? null : t; }
function tE(e, t, n) { if (!n.isI18nHydrationEnabled)
    return null; let o = e[m], r = o.data[t]; if (!r || !r.ast)
    return null; let i = o.data[r.parentTNodeIndex]; if (i && qm(i))
    return null; let s = { caseQueue: [], disconnectedNodes: new Set, disjointNodes: new Set }; return Wu(e, s, n, r.ast), s.caseQueue.length === 0 && s.disconnectedNodes.size === 0 && s.disjointNodes.size === 0 ? null : s; }
function Wu(e, t, n, o) { let r = null; for (let i of o) {
    let s = Cb(e, t, n, i);
    s && (Tb(r, s) && t.disjointNodes.add(i.index - I), r = s);
} return r; }
function Tb(e, t) { return e && e.nextSibling !== t; }
function Cb(e, t, n, o) { let r = L(e[o.index]); if (!r || Gv(r))
    return t.disconnectedNodes.add(o.index - I), null; let i = r; switch (o.kind) {
    case 0: {
        Fd(n, i);
        break;
    }
    case 1:
    case 2: {
        Wu(e, t, n, o.children);
        break;
    }
    case 3: {
        let s = e[o.currentCaseLViewIndex];
        if (s != null) {
            let a = s < 0 ? ~s : s;
            t.caseQueue.push(a), Wu(e, t, n, o.cases[a]);
        }
        break;
    }
} return Mb(e, o); }
function Mb(e, t) { let o = e[m].data[t.index]; return la(o) ? vn(e, o) : t.kind === 3 ? db(o, e)() ?? L(e[t.index]) : L(e[t.index]) ?? null; }
function hn(e, t) { e.currentNode = t; }
function Ir(e, t, n) { let o = n.index - I, { disconnectedNodes: r } = e, i = t.currentNode; return t.isConnected ? (e.i18nNodes.set(o, i), r.delete(o)) : r.add(o), i; }
function tu(e, t) { let n = e.currentNode; for (let o = 0; o < t && n; o++)
    n = n?.nextSibling ?? null; return n; }
function nu(e, t) { return { currentNode: t, isConnected: e.isConnected }; }
function Nb(e, t, n, o) { let r = e[ue]; if (!r || !Wa() || n && (qm(n) || Ca(r, n.index - I)))
    return; let i = e[m], s = i.data[t]; function a() { if (qv(o)) {
    let p = mi(r, i, e, n);
    return n.type & 8 ? p : p.firstChild;
} return r?.firstChild; } let c = a(), l = Ty(r) ?? new Set, u = r.i18nNodes ??= new Map, d = r.data[ya]?.[t - I] ?? [], f = r.dehydratedIcuData ??= new Map; Yn({ hydrationInfo: r, lView: e, i18nNodes: u, disconnectedNodes: l, caseQueue: d, dehydratedIcuData: f }, { currentNode: c, isConnected: !0 }, s.ast), r.disconnectedNodes = l.size === 0 ? null : l; }
function Yn(e, t, n) { if (Array.isArray(n)) {
    let o = t;
    for (let r of n) {
        let i = mb(e.hydrationInfo, e.lView, r.index - I);
        i && (o = nu(t, i)), Yn(e, o, r);
    }
}
else {
    if (e.disconnectedNodes.has(n.index - I))
        return;
    switch (n.kind) {
        case 0: {
            let o = Ir(e, t, n);
            hn(t, o?.nextSibling ?? null);
            break;
        }
        case 1: {
            Yn(e, nu(t, t.currentNode?.firstChild ?? null), n.children);
            let o = Ir(e, t, n);
            hn(t, o?.nextSibling ?? null);
            break;
        }
        case 2: {
            let o = n.index - I, { hydrationInfo: r } = e, i = Iy(r, o);
            switch (n.type) {
                case 0: {
                    let s = Ir(e, t, n);
                    if (jw(r, o)) {
                        Yn(e, t, n.children);
                        let a = tu(t, 1);
                        hn(t, a);
                    }
                    else if (Yn(e, nu(t, t.currentNode?.firstChild ?? null), n.children), hn(t, s?.nextSibling ?? null), i !== null) {
                        let a = tu(t, i + 1);
                        hn(t, a);
                    }
                    break;
                }
                case 1: {
                    Ir(e, t, n);
                    let s = tu(t, i + 1);
                    hn(t, s);
                    break;
                }
            }
            break;
        }
        case 3: {
            let o = t.isConnected ? e.caseQueue.shift() : null, r = { currentNode: null, isConnected: !1 };
            for (let s = 0; s < n.cases.length; s++)
                Yn(e, s === o ? t : r, n.cases[s]);
            o !== null && e.dehydratedIcuData.set(n.index, { case: o, node: n });
            let i = Ir(e, t, n);
            hn(t, i?.nextSibling ?? null);
            break;
        }
    }
} }
var nE = () => { };
function wb(e, t, n) { nE(e, t, n); }
function oE() { nE = _b; }
function _b(e, t, n) { let o = e[ue]?.dehydratedIcuData; o && o.get(t)?.case === n && o.delete(t); }
function Sb(e) { let t = e[ue]; if (t) {
    let { i18nNodes: n, dehydratedIcuData: o } = t;
    if (n && o) {
        let r = e[w];
        for (let i of o.values())
            bb(r, n, i);
    }
    t.i18nNodes = void 0, t.dehydratedIcuData = void 0;
} }
function bb(e, t, n) { for (let o of n.node.cases[n.case]) {
    let r = t.get(o.index - I);
    r && di(e, r, !1);
} }
function za(e) { let t = e[Re] ?? [], o = e[Q][w], r = []; for (let i of t)
    i.data[va] !== void 0 ? r.push(i) : rE(i, o); e[Re] = r; }
function Ab(e) { let { lContainer: t } = e, n = t[Re]; if (n === null)
    return; let r = t[Q][w]; for (let i of n)
    rE(i, r); }
function rE(e, t) { let n = 0, o = e.firstChild; if (o) {
    let r = e.data[Mt];
    for (; n < r;) {
        let i = o.nextSibling;
        di(t, o, !1), o = i, n++;
    }
} }
function Qa(e) { za(e); let t = e[U]; ne(t) && Ur(t); for (let n = G; n < e.length; n++)
    Ur(e[n]); }
function Ur(e) { Sb(e); let t = e[m]; for (let n = I; n < t.bindingStartIndex; n++)
    if (K(e[n])) {
        let o = e[n];
        Qa(o);
    }
    else
        ne(e[n]) && Ur(e[n]); }
function yf(e) { let t = e._views; for (let n of t) {
    let o = Pd(n);
    o !== null && o[U] !== null && (ne(o) ? Ur(o) : Qa(o));
} }
function Rb(e, t, n, o) { e !== null && (n.cleanup(t), Qa(e.lContainer), yf(o)); }
function kb(e, t) { let n = []; for (let o of t)
    for (let r = 0; r < (o[ri] ?? 1); r++) {
        let i = { data: o, firstChild: null };
        o[Mt] > 0 && (i.firstChild = e, e = Ga(o[Mt], e)), n.push(i);
    } return [e, n]; }
var iE = () => null, sE = () => null;
function aE() { iE = Ob, sE = xb; }
function Ob(e, t) { return lE(e, t) ? e[Re].shift() : (za(e), null); }
function qr(e, t) { return iE(e, t); }
function xb(e, t, n) { if (t.tView.ssrId === null)
    return null; let o = qr(e, t.tView.ssrId); return n[m].firstUpdatePass && o === null && Pb(n, t), o; }
function cE(e, t, n) { return sE(e, t, n); }
function Pb(e, t) { let n = t; for (; n;) {
    if (wg(e, n))
        return;
    if ((n.flags & 256) === 256)
        break;
    n = n.prev;
} for (n = t.next; n && (n.flags & 512) === 512;) {
    if (wg(e, n))
        return;
    n = n.next;
} }
function lE(e, t) { let n = e[Re]; return !t || n === null || n.length === 0 ? !1 : n[0].data[ma] === t; }
function wg(e, t) { let n = t.tView?.ssrId; if (n == null)
    return !1; let o = e[t.index]; return K(o) && lE(o, n) ? (za(o), !0) : !1; }
var uE = class {
}, Za = class {
}, zu = class {
    resolveComponentFactory(t) { throw new D(917, !1); }
}, yi = class {
    static NULL = new zu;
}, Gr = class {
}, Lb = (() => { class e {
    destroyNode = null;
    static __NG_ELEMENT_ID__ = () => Fb();
} return e; })();
function Fb() { let e = g(), t = _(), n = ye(t.index, e); return (ne(n) ? n : e)[w]; }
var dE = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => null });
} return e; })();
function vf(e) { return e.ngModule !== void 0; }
function gn(e) { return !!an(e); }
function Is(e) { return !!Qe(e); }
function _g(e) { return !!be(e); }
function wr(e) { return !!W(e); }
function jb(e) { return W(e) ? "component" : be(e) ? "directive" : Qe(e) ? "pipe" : "type"; }
function Vb(e, t) { if (nr(e) && (e = x(e), !e))
    throw new Error(`Expected forwardRef function, imported from "${Pe(t)}", to return a standalone entity or NgModule but got "${Pe(e) || e}".`); if (an(e) == null) {
    let n = W(e) || be(e) || Qe(e);
    if (n != null) {
        if (!n.standalone) {
            let o = jb(e);
            throw new Error(`The "${Pe(e)}" ${o}, imported from "${Pe(t)}", is not standalone. Does the ${o} have the standalone: false flag?`);
        }
    }
    else
        throw vf(e) ? new Error(`A module with providers was imported from "${Pe(t)}". Modules with providers are not supported in standalone components imports.`) : new Error(`The "${Pe(e)}" type, imported from "${Pe(t)}", must be a standalone component / directive / pipe or an NgModule. Did you forget to add the required @Component / @Directive / @Pipe or @NgModule annotation?`);
} }
var Qu = class {
    ownerNgModule = new WeakMap;
    ngModulesWithSomeUnresolvedDecls = new Set;
    ngModulesScopeCache = new WeakMap;
    standaloneComponentsScopeCache = new WeakMap;
    resolveNgModulesDecls() { if (this.ngModulesWithSomeUnresolvedDecls.size !== 0) {
        for (let t of this.ngModulesWithSomeUnresolvedDecls) {
            let n = an(t);
            if (n?.declarations)
                for (let o of to(n.declarations))
                    wr(o) && this.ownerNgModule.set(o, t);
        }
        this.ngModulesWithSomeUnresolvedDecls.clear();
    } }
    getComponentDependencies(t, n) { this.resolveNgModulesDecls(); let o = W(t); if (o === null)
        throw new Error(`Attempting to get component dependencies for a type that is not a component: ${t}`); if (o.standalone) {
        let r = this.getStandaloneComponentScope(t, n);
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes, ...r.compilation.ngModules] };
    }
    else {
        if (!this.ownerNgModule.has(t))
            return { dependencies: [] };
        let r = this.getNgModuleScope(this.ownerNgModule.get(t));
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes] };
    } }
    registerNgModule(t, n) { if (!gn(t))
        throw new Error(`Attempting to register a Type which is not NgModule as NgModule: ${t}`); this.ngModulesWithSomeUnresolvedDecls.add(t); }
    clearScopeCacheFor(t) { this.ngModulesScopeCache.delete(t), this.standaloneComponentsScopeCache.delete(t); }
    getNgModuleScope(t) { if (this.ngModulesScopeCache.has(t))
        return this.ngModulesScopeCache.get(t); let n = this.computeNgModuleScope(t); return this.ngModulesScopeCache.set(t, n), n; }
    computeNgModuleScope(t) { let n = Gi(t), o = { exported: { directives: new Set, pipes: new Set }, compilation: { directives: new Set, pipes: new Set } }; for (let r of to(n.imports))
        if (gn(r)) {
            let i = this.getNgModuleScope(r);
            qt(i.exported.directives, o.compilation.directives), qt(i.exported.pipes, o.compilation.pipes);
        }
        else if (ar(r))
            if (_g(r) || wr(r))
                o.compilation.directives.add(r);
            else if (Is(r))
                o.compilation.pipes.add(r);
            else
                throw new D(980, "The standalone imported type is neither a component nor a directive nor a pipe");
        else {
            o.compilation.isPoisoned = !0;
            break;
        } if (!o.compilation.isPoisoned)
        for (let r of to(n.declarations)) {
            if (gn(r) || ar(r)) {
                o.compilation.isPoisoned = !0;
                break;
            }
            Is(r) ? o.compilation.pipes.add(r) : o.compilation.directives.add(r);
        } for (let r of to(n.exports))
        if (gn(r)) {
            let i = this.getNgModuleScope(r);
            qt(i.exported.directives, o.exported.directives), qt(i.exported.pipes, o.exported.pipes), qt(i.exported.directives, o.compilation.directives), qt(i.exported.pipes, o.compilation.pipes);
        }
        else
            Is(r) ? o.exported.pipes.add(r) : o.exported.directives.add(r); return o; }
    getStandaloneComponentScope(t, n) { if (this.standaloneComponentsScopeCache.has(t))
        return this.standaloneComponentsScopeCache.get(t); let o = this.computeStandaloneComponentScope(t, n); return this.standaloneComponentsScopeCache.set(t, o), o; }
    computeStandaloneComponentScope(t, n) { let o = { compilation: { directives: new Set([t]), pipes: new Set, ngModules: new Set } }; for (let r of Ze(n ?? [])) {
        let i = x(r);
        try {
            Vb(i, t);
        }
        catch {
            return o.compilation.isPoisoned = !0, o;
        }
        if (gn(i)) {
            o.compilation.ngModules.add(i);
            let s = this.getNgModuleScope(i);
            if (s.exported.isPoisoned)
                return o.compilation.isPoisoned = !0, o;
            qt(s.exported.directives, o.compilation.directives), qt(s.exported.pipes, o.compilation.pipes);
        }
        else if (Is(i))
            o.compilation.pipes.add(i);
        else if (_g(i) || wr(i))
            o.compilation.directives.add(i);
        else
            return o.compilation.isPoisoned = !0, o;
    } return o; }
    isOrphanComponent(t) { let n = W(t); return !n || n.standalone ? !1 : (this.resolveNgModulesDecls(), !this.ownerNgModule.has(t)); }
};
function qt(e, t) { for (let n of e)
    t.add(n); }
var ho = new Qu, bs = {}, so = class {
    injector;
    parentInjector;
    constructor(t, n) { this.injector = t, this.parentInjector = n; }
    get(t, n, o) { let r = this.injector.get(t, bs, o); return r !== bs || n === bs ? r : this.parentInjector.get(t, n, o); }
};
function Ys(e, t, n) { let o = n ? e.styles : null, r = n ? e.classes : null, i = 0; if (t !== null)
    for (let s = 0; s < t.length; s++) {
        let a = t[s];
        if (typeof a == "number")
            i = a;
        else if (i == 1)
            r = Ui(r, a);
        else if (i == 2) {
            let c = a, l = t[++s];
            o = Ui(o, c + ": " + l + ";");
        }
    } n ? e.styles = o : e.stylesWithoutHost = o, n ? e.classes = r : e.classesWithoutHost = r; }
function jo(e, t = 0) { let n = g(); if (n === null)
    return pe(e, t); let o = _(); return Lm(o, n, x(e), t); }
function fE() { let e = "invalid"; throw new Error(e); }
function pE(e, t, n, o, r) { let i = o === null ? null : { "": -1 }, s = r(e, n); if (s !== null) {
    let a = s, c = null, l = null;
    for (let u of s)
        if (u.resolveHostDirectives !== null) {
            [a, c, l] = u.resolveHostDirectives(s);
            break;
        }
    $b(e, t, n, a, i, c, l);
} i !== null && o !== null && Hb(n, o, i); }
function Hb(e, t, n) { let o = e.localNames = []; for (let r = 0; r < t.length; r += 2) {
    let i = n[t[r + 1]];
    if (i == null)
        throw new D(-301, !1);
    o.push(t[r], i);
} }
function Bb(e, t, n) { t.componentOffset = n, (e.components ??= []).push(t.index); }
function $b(e, t, n, o, r, i, s) { let a = o.length, c = null; for (let f = 0; f < a; f++) {
    let p = o[f];
    c === null && He(p) && (c = p, Bb(e, n, f)), yu(Vs(n, t), e, p.type);
} Qb(n, e.data.length, a), c?.viewProvidersResolver && c.viewProvidersResolver(c); for (let f = 0; f < a; f++) {
    let p = o[f];
    p.providersResolver && p.providersResolver(p);
} let l = !1, u = !1, d = pi(e, t, a, null); a > 0 && (n.directiveToIndex = new Map); for (let f = 0; f < a; f++) {
    let p = o[f];
    if (n.mergedAttrs = uo(n.mergedAttrs, p.hostAttrs), qb(e, n, t, d, p), zb(d, p, r), s !== null && s.has(p)) {
        let [y, E] = s.get(p);
        n.directiveToIndex.set(p.type, [d, y + n.directiveStart, E + n.directiveStart]);
    }
    else
        (i === null || !i.has(p)) && n.directiveToIndex.set(p.type, d);
    p.contentQueries !== null && (n.flags |= 4), (p.hostBindings !== null || p.hostAttrs !== null || p.hostVars !== 0) && (n.flags |= 64);
    let h = p.type.prototype;
    !l && (h.ngOnChanges || h.ngOnInit || h.ngDoCheck) && ((e.preOrderHooks ??= []).push(n.index), l = !0), !u && (h.ngOnChanges || h.ngDoCheck) && ((e.preOrderCheckHooks ??= []).push(n.index), u = !0), d++;
} Ub(e, n, i); }
function Ub(e, t, n) { for (let o = t.directiveStart; o < t.directiveEnd; o++) {
    let r = e.data[o];
    if (n === null || !n.has(r))
        Sg(0, t, r, o), Sg(1, t, r, o), Ag(t, o, !1);
    else {
        let i = n.get(r);
        bg(0, t, i, o), bg(1, t, i, o), Ag(t, o, !0);
    }
} }
function Sg(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s;
        e === 0 ? s = t.inputs ??= {} : s = t.outputs ??= {}, s[i] ??= [], s[i].push(o), hE(t, i);
    } }
function bg(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s = r[i], a;
        e === 0 ? a = t.hostDirectiveInputs ??= {} : a = t.hostDirectiveOutputs ??= {}, a[s] ??= [], a[s].push(o, i), hE(t, s);
    } }
function hE(e, t) { t === "class" ? e.flags |= 8 : t === "style" && (e.flags |= 16); }
function Ag(e, t, n) { let { attrs: o, inputs: r, hostDirectiveInputs: i } = e; if (o === null || !n && r === null || n && i === null || Wd(e)) {
    e.initialInputs ??= [], e.initialInputs.push(null);
    return;
} let s = null, a = 0; for (; a < o.length;) {
    let c = o[a];
    if (c === 0) {
        a += 4;
        continue;
    }
    else if (c === 5) {
        a += 2;
        continue;
    }
    else if (typeof c == "number")
        break;
    if (!n && r.hasOwnProperty(c)) {
        let l = r[c];
        for (let u of l)
            if (u === t) {
                s ??= [], s.push(c, o[a + 1]);
                break;
            }
    }
    else if (n && i.hasOwnProperty(c)) {
        let l = i[c];
        for (let u = 0; u < l.length; u += 2)
            if (l[u] === t) {
                s ??= [], s.push(l[u + 1], o[a + 1]);
                break;
            }
    }
    a += 2;
} e.initialInputs ??= [], e.initialInputs.push(s); }
function qb(e, t, n, o, r) { e.data[o] = r; let i = r.factory || (r.factory = xt(r.type, !0)), s = new In(i, He(r), jo, null); e.blueprint[o] = s, n[o] = s, Gb(e, t, o, pi(e, n, r.hostVars, H), r); }
function Gb(e, t, n, o, r) { let i = r.hostBindings; if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    Wb(s) != a && s.push(a), s.push(n, o, i);
} }
function Wb(e) { let t = e.length; for (; t > 0;) {
    let n = e[--t];
    if (typeof n == "number" && n < 0)
        return n;
} return 0; }
function zb(e, t, n) { if (n) {
    if (t.exportAs)
        for (let o = 0; o < t.exportAs.length; o++)
            n[t.exportAs[o]] = e;
    He(t) && (n[""] = e);
} }
function Qb(e, t, n) { e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t; }
function Ef(e, t, n, o, r, i, s, a) { let c = t[m], l = c.consts, u = ge(l, s), d = xn(c, e, n, o, u); return i && pE(c, t, d, ge(l, a), r), d.mergedAttrs = uo(d.mergedAttrs, d.attrs), d.attrs !== null && Ys(d, d.attrs, !1), d.mergedAttrs !== null && Ys(d, d.mergedAttrs, !0), c.queries !== null && c.queries.elementStart(c, d), d; }
function If(e, t) { wm(e, t), ul(t) && e.queries.elementEnd(t); }
function gE(e, t, n, o, r, i) { let s = t.consts, a = ge(s, r), c = xn(t, e, n, o, a); if (c.mergedAttrs = uo(c.mergedAttrs, c.attrs), i != null) {
    let l = ge(s, i);
    c.localNames = [];
    for (let u = 0; u < l.length; u += 2)
        c.localNames.push(l[u], -1);
} return c.attrs !== null && Ys(c, c.attrs, !1), c.mergedAttrs !== null && Ys(c, c.mergedAttrs, !0), t.queries !== null && t.queries.elementStart(t, c), c; }
function Wr(e) { return Ya(e) ? Array.isArray(e) || !(e instanceof Map) && Symbol.iterator in e : !1; }
function Zb(e, t, n) { let o = e[Symbol.iterator](), r = t[Symbol.iterator](); for (;;) {
    let i = o.next(), s = r.next();
    if (i.done && s.done)
        return !0;
    if (i.done || s.done || !n(i.value, s.value))
        return !1;
} }
function mE(e, t) { if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
        t(e[n]);
else {
    let n = e[Symbol.iterator](), o;
    for (; !(o = n.next()).done;)
        t(o.value);
} }
function Ya(e) { return e !== null && (typeof e == "function" || typeof e == "object"); }
function yE(e, t) { let n = Wr(e), o = Wr(t); return n && o ? Zb(e, t, yE) : !n && (e && (typeof e == "object" || typeof e == "function")) && !o && (t && (typeof t == "object" || typeof t == "function")) ? !0 : Object.is(e, t); }
function et(e, t, n) { return e[t] = n; }
function Vo(e, t) { return e[t]; }
function Y(e, t, n) { if (n === H)
    return !1; let o = e[t]; return Object.is(o, n) ? !1 : (e[t] = n, !0); }
function Nn(e, t, n, o) { let r = Y(e, t, n); return Y(e, t + 1, o) || r; }
function Ka(e, t, n, o, r) { let i = Nn(e, t, n, o); return Y(e, t + 2, r) || i; }
function qe(e, t, n, o, r, i) { let s = Nn(e, t, n, o); return Nn(e, t + 2, r, i) || s; }
function Qt(e, t, n) { return function o(r) { let i = De(e) ? ye(e.index, t) : t; gi(i, 5); let s = t[$], a = Rg(t, s, n, r), c = o.__ngNextListenerFn__; for (; c;)
    a = Rg(t, s, c, r) && a, c = c.__ngNextListenerFn__; return a; }; }
function Rg(e, t, n, o) { let r = Kn(null); try {
    return V(O.OutputStart, t, n), n(o) !== !1;
}
catch (i) {
    return ff(e, i), !1;
}
finally {
    V(O.OutputEnd, t, n), Kn(r);
} }
function Df(e, t, n, o, r, i, s, a) { let c = Un(e), l = !1, u = null; if (!o && c && (u = Kb(t, n, i, e.index)), u !== null) {
    let d = u.__ngLastListenerFn__ || u;
    d.__ngNextListenerFn__ = s, u.__ngLastListenerFn__ = s, l = !0;
}
else {
    let d = ie(e, n), f = o ? o(d) : d;
    bw(n, f, i, a);
    let p = r.listen(f, i, a);
    if (!Yb(i)) {
        let h = o ? y => o(L(y[e.index])) : e.index;
        vE(h, t, n, i, a, p, !1);
    }
} return l; }
function Yb(e) { return e.startsWith("animation") || e.startsWith("transition"); }
function Kb(e, t, n, o) { let r = e.cleanup; if (r != null)
    for (let i = 0; i < r.length - 1; i += 2) {
        let s = r[i];
        if (s === n && r[i + 1] === o) {
            let a = t[Lt], c = r[i + 2];
            return a && a.length > c ? a[c] : null;
        }
        typeof s == "string" && (i += 2);
    } return null; }
function vE(e, t, n, o, r, i, s) { let a = t.firstCreatePass ? yl(t) : null, c = ml(n), l = c.length; c.push(r, i), a && a.push(o, e, l, (l + 1) * (s ? -1 : 1)); }
function Jb(e, t, n, o, r) { let i = Qt(e, t, n), s = Xb(e, t, o, r, i); }
function Xb(e, t, n, o, r) { let i = null, s = null, a = null, c = !1, l = e.directiveToIndex.get(n.type); if (typeof l == "number" ? i = l : [i, s, a] = l, s !== null && a !== null && e.hostDirectiveOutputs?.hasOwnProperty(o)) {
    let u = e.hostDirectiveOutputs[o];
    for (let d = 0; d < u.length; d += 2) {
        let f = u[d];
        if (f >= s && f <= a)
            c = !0, go(e, t, f, u[d + 1], o, r);
        else if (f > a)
            break;
    }
} return n.outputs.hasOwnProperty(o) && (c = !0, go(e, t, i, o, o, r)), c; }
function go(e, t, n, o, r, i) { let s = t[n], a = t[m], l = a.data[n].outputs[o], d = s[l].subscribe(i); vE(e.index, a, t, r, i, d, !0); }
function EE() { IE(); }
function IE() { let e = g(), t = A(), n = _(); if (t.firstCreatePass && eA(t, n), n.controlDirectiveIndex === -1)
    return; J("NgSignalForms"); let o = e[n.controlDirectiveIndex]; t.data[n.controlDirectiveIndex].controlDef.create(o, new Ks(e, t, n)); }
function DE() { TE(); }
function TE() { let e = g(), t = A(), n = ke(); if (n.controlDirectiveIndex === -1)
    return; let o = t.data[n.controlDirectiveIndex].controlDef, r = e[n.controlDirectiveIndex]; o.update(r, new Ks(e, t, n)); }
var Ks = class {
    lView;
    tView;
    tNode;
    hasPassThrough;
    constructor(t, n, o) { this.lView = t, this.tView = n, this.tNode = o, this.hasPassThrough = !!(o.flags & 4096); }
    get customControl() { return this.tNode.customControlIndex !== -1 ? this.lView[this.tNode.customControlIndex] : void 0; }
    get descriptor() { return `<${this.tNode.value}>`; }
    listenToCustomControlOutput(t, n) { CE(this.tView.data[this.tNode.customControlIndex], t) && go(this.tNode, this.lView, this.tNode.customControlIndex, t, t, Qt(this.tNode, this.lView, n)); }
    listenToCustomControlModel(t) { let n = this.tNode.flags & 1024 ? "valueChange" : "checkedChange"; go(this.tNode, this.lView, this.tNode.customControlIndex, n, n, Qt(this.tNode, this.lView, t)); }
    listenToDom(t, n) { Df(this.tNode, this.tView, this.lView, void 0, this.lView[w], t, n, Qt(this.tNode, this.lView, n)); }
    setInputOnDirectives(t, n) { let o = this.tNode.inputs?.[t], r = this.tNode.hostDirectiveInputs?.[t]; if (!o && !r)
        return !1; if (o)
        for (let i of o) {
            let s = this.tView.data[i], a = this.lView[i];
            zt(s, a, t, n);
        } if (r)
        for (let i = 0; i < r.length; i += 2) {
            let s = r[i], a = r[i + 1], c = this.tView.data[s], l = this.lView[s];
            zt(c, l, a, n);
        } return !0; }
    setCustomControlModelInput(t) { let n = this.lView[this.tNode.customControlIndex], o = this.tView.data[this.tNode.customControlIndex], r = this.tNode.flags & 1024 ? "value" : "checked"; zt(o, n, r, t); }
    customControlHasInput(t) { return this.tNode.customControlIndex === -1 ? !1 : this.tView.data[this.tNode.customControlIndex].inputs[t] != null; }
};
function eA(e, t, n) { for (let r = t.directiveStart; r < t.directiveEnd; r++)
    if (e.data[r].controlDef) {
        t.controlDirectiveIndex = r;
        break;
    } if (t.controlDirectiveIndex === -1)
    return; let o = e.data[t.controlDirectiveIndex].controlDef; if (o.passThroughInput && (t.inputs?.[o.passThroughInput]?.length ?? 0) > 1) {
    t.flags |= 4096;
    return;
} tA(e, t); }
function tA(e, t) { for (let n = t.directiveStart; n < t.directiveEnd; n++) {
    let o = e.data[n];
    if (kg(o, "value")) {
        t.flags |= 1024, t.customControlIndex = n;
        return;
    }
    if (kg(o, "checked")) {
        t.flags |= 2048, t.customControlIndex = n;
        return;
    }
} }
function kg(e, t) { return nA(e, t) && CE(e, t + "Change"); }
function nA(e, t) { return t in e.inputs; }
function CE(e, t) { return t in e.outputs; }
var Ct = Symbol("BINDING"), Og = { kind: "input", requiredVars: 1 }, oA = { kind: "output", requiredVars: 0 };
function xg(e, t, n) { let o = g(), r = ve(); if (Y(o, r, n)) {
    let i = o[m], s = ke(), a = ye(s.index, o);
    gi(a, 1);
    let c = i.directiveRegistry[e], l = CS(s, i, o, c, t, n);
} }
function ME(e, t) { if (e === "formField") {
    let o = { [Ct]: Og, create: () => { IE(); }, update: () => { xg(o.targetIdx, e, t()), TE(); } };
    return o;
} let n = { [Ct]: Og, update: () => xg(n.targetIdx, e, t()) }; return n; }
function NE(e, t) { let n = { [Ct]: oA, create: () => { let o = g(), r = _(), s = o[m].directiveRegistry[n.targetIdx]; Jb(r, o, t, s, e); } }; return n; }
function rA(e, t) { let n = ME(e, t), o = NE(e + "Change", i => t.set(i)); return { [Ct]: { kind: "twoWay", requiredVars: n[Ct].requiredVars + o[Ct].requiredVars }, set targetIdx(i) { n.targetIdx = i, o.targetIdx = i; }, create: o.create, update: n.update }; }
function iA(e) { let t = e; for (; t;) {
    let n = ew(t);
    if (n !== null)
        for (let o = I; o < n.length; o++) {
            let r = n[o];
            if (!ne(r) && !K(r) || r[U] !== t)
                continue;
            let i = n[m], s = Vt(i, o);
            if (De(s)) {
                let a = i.data[s.directiveStart + s.componentOffset], c = Tf(a);
                if (c !== null)
                    return c;
                break;
            }
        }
    t = t.parentNode;
} return null; }
function Tf(e) { return e.debugInfo?.className || e.type.name || null; }
var Js = class extends yi {
    ngModule;
    constructor(t) { super(), this.ngModule = t; }
    resolveComponentFactory(t) { let n = W(t); return new Yt(n, this.ngModule); }
};
function sA(e) { return Object.keys(e).map(t => { let [n, o, r] = e[t], i = { propName: n, templateName: t, isSignal: (o & _a.SignalBased) !== 0 }; return r && (i.transform = r), i; }); }
function aA(e) { return Object.keys(e).map(t => ({ propName: e[t], templateName: t })); }
function cA(e, t, n) { let o = t instanceof _e ? t : t?.injector; return o && e.getStandaloneInjector !== null && (o = e.getStandaloneInjector(o) || o), o ? new so(n, o) : n; }
function lA(e) { let t = e.get(Gr, null); if (t === null)
    throw new D(407, !1); let n = e.get(dE, null), o = e.get(xe, null), r = e.get(On, null, { optional: !0 }); return { rendererFactory: t, sanitizer: n, changeDetectionScheduler: o, ngReflect: !1, tracingService: r }; }
function uA(e, t) { let n = wE(e); return Na(t, n, n === "svg" ? fl : n === "math" ? pl : null); }
function wE(e) { return (e.selectors[0][0] || "div").toLowerCase(); }
var Yt = class extends Za {
    componentDef;
    ngModule;
    selector;
    componentType;
    ngContentSelectors;
    isBoundToModule;
    cachedInputs = null;
    cachedOutputs = null;
    get inputs() { return this.cachedInputs ??= sA(this.componentDef.inputs), this.cachedInputs; }
    get outputs() { return this.cachedOutputs ??= aA(this.componentDef.outputs), this.cachedOutputs; }
    constructor(t, n) { super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = B_(t.selectors), this.ngContentSelectors = t.ngContentSelectors ?? [], this.isBoundToModule = !!n; }
    create(t, n, o, r, i, s) { V(O.DynamicComponentStart); let a = R(null); try {
        let c = this.componentDef, l = cA(c, r || this.ngModule, t), u = lA(l), d = u.tracingService;
        return d && d.componentCreate ? d.componentCreate(Tf(c), () => this.createComponentRef(u, l, n, o, i, s)) : this.createComponentRef(u, l, n, o, i, s);
    }
    finally {
        R(a);
    } }
    createComponentRef(t, n, o, r, i, s) { let a = this.componentDef, c = dA(r, a, s, i), l = t.rendererFactory.createRenderer(null, a), u = r ? hS(l, r, a.encapsulation, n) : uA(a, l), d = s?.some(Pg) || i?.some(h => typeof h != "function" && h.bindings.some(Pg)), f = wa(null, c, null, 512 | Qd(a), null, null, t, l, n, null, vy(u, n, !0)); f[I] = u, ls(f); let p = null; try {
        let h = Ef(I, f, 2, "#host", () => c.directiveRegistry, !0, 0);
        Uy(l, u, h), $e(u, f), La(c, f, h), jd(c, h, f), If(c, h), o !== void 0 && pA(h, this.ngContentSelectors, o), p = ye(h.index, f), f[$] = p[$], Ba(c, f, null);
    }
    catch (h) {
        throw p !== null && Eu(p), Eu(f), h;
    }
    finally {
        V(O.DynamicComponentEnd), us();
    } return new Xs(this.componentType, f, !!d); }
};
function dA(e, t, n, o) { let r = e ? ["ng-version", "21.2.10"] : $_(t.selectors[0]), i = null, s = null, a = 0; if (n)
    for (let u of n)
        a += u[Ct].requiredVars, u.create && (u.targetIdx = 0, (i ??= []).push(u)), u.update && (u.targetIdx = 0, (s ??= []).push(u)); if (o)
    for (let u = 0; u < o.length; u++) {
        let d = o[u];
        if (typeof d != "function")
            for (let f of d.bindings) {
                a += f[Ct].requiredVars;
                let p = u + 1;
                f.create && (f.targetIdx = p, (i ??= []).push(f)), f.update && (f.targetIdx = p, (s ??= []).push(f));
            }
    } let c = [t]; if (o)
    for (let u of o) {
        let d = typeof u == "function" ? u : u.type, f = be(d);
        c.push(f);
    } return zd(0, null, fA(i, s), 1, a, c, null, null, null, [r], null); }
function fA(e, t) { return !e && !t ? null : n => { if (n & 1 && e)
    for (let o of e)
        o.create(); if (n & 2 && t)
    for (let o of t)
        o.update(); }; }
function Pg(e) { let t = e[Ct].kind; return t === "input" || t === "twoWay"; }
var Xs = class extends uE {
    _rootLView;
    _hasInputBindings;
    instance;
    hostView;
    changeDetectorRef;
    componentType;
    location;
    previousInputValues = null;
    _tNode;
    constructor(t, n, o) { super(), this._rootLView = n, this._hasInputBindings = o, this._tNode = Vt(n[m], I), this.location = Co(this._tNode, n), this.instance = ye(this._tNode.index, n)[$], this.hostView = this.changeDetectorRef = new Zt(n, void 0), this.componentType = t; }
    setInput(t, n) { this._hasInputBindings; let o = this._tNode; if (this.previousInputValues ??= new Map, this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n))
        return; let r = this._rootLView, i = Ha(o, r[m], r, t, n); this.previousInputValues.set(t, n); let s = ye(o.index, r); gi(s, 1); }
    get injector() { return new Wt(this._tNode, this._rootLView); }
    destroy() { this.hostView.destroy(); }
    onDestroy(t) { this.hostView.onDestroy(t); }
};
function pA(e, t, n) { let o = e.projection = []; for (let r = 0; r < t.length; r++) {
    let i = n[r];
    o.push(i != null && i.length ? Array.from(i) : null);
} }
var Ja = (() => { class e {
    static __NG_ELEMENT_ID__ = hA;
} return e; })();
function hA() { let e = _(); return _E(e, g()); }
var Zu = class e extends Ja {
    _lContainer;
    _hostTNode;
    _hostLView;
    constructor(t, n, o) { super(), this._lContainer = t, this._hostTNode = n, this._hostLView = o; }
    get element() { return Co(this._hostTNode, this._hostLView); }
    get injector() { return new Wt(this._hostTNode, this._hostLView); }
    get parentInjector() { let t = Ed(this._hostTNode, this._hostLView); if (Am(t)) {
        let n = Fs(t, this._hostLView), o = Ls(t), r = n[m].data[o + 8];
        return new Wt(r, n);
    }
    else
        return new Wt(null, this._hostLView); }
    clear() { for (; this.length > 0;)
        this.remove(this.length - 1); }
    get(t) { let n = Lg(this._lContainer); return n !== null && n[t] || null; }
    get length() { return this._lContainer.length - G; }
    createEmbeddedView(t, n, o) { let r, i; typeof o == "number" ? r = o : o != null && (r = o.index, i = o.injector); let s = qr(this._lContainer, t.ssrId), a = t.createEmbeddedViewImpl(n || {}, i, s); return this.insertImpl(a, r, Mn(this._hostTNode, s)), a; }
    createComponent(t, n, o, r, i, s, a) { let c = t && !Tr(t), l; if (c)
        l = n;
    else {
        let E = n || {};
        l = E.index, o = E.injector, r = E.projectableNodes, i = E.environmentInjector || E.ngModuleRef, s = E.directives, a = E.bindings;
    } let u = c ? t : new Yt(W(t)), d = o || this.parentInjector; if (!i && u.ngModule == null) {
        let T = (c ? d : this.parentInjector).get(_e, null);
        T && (i = T);
    } let f = W(u.componentType ?? {}), p = qr(this._lContainer, f?.id ?? null), h = p?.firstChild ?? null, y = u.create(d, r, h, i, s, a); return this.insertImpl(y.hostView, l, Mn(this._hostTNode, p)), y; }
    insert(t, n) { return this.insertImpl(t, n, !0); }
    insertImpl(t, n, o) { let r = t._lView; if (Fh(r)) {
        let a = this.indexOf(t);
        if (a !== -1)
            this.detach(a);
        else {
            let c = r[Q], l = new e(c, c[le], c[Q]);
            l.detach(l.indexOf(t));
        }
    } let i = this._adjustIndex(n), s = this._lContainer; return Lo(s, r, i, o), t.attachToViewContainerRef(), el(ou(s), i, t), t; }
    move(t, n) { return this.insert(t, n); }
    indexOf(t) { let n = Lg(this._lContainer); return n !== null ? n.indexOf(t) : -1; }
    remove(t) { let n = this._adjustIndex(t, -1), o = Br(this._lContainer, n); o && (cr(ou(this._lContainer), n), hi(o[m], o)); }
    detach(t) { let n = this._adjustIndex(t, -1), o = Br(this._lContainer, n); return o && cr(ou(this._lContainer), n) != null ? new Zt(o) : null; }
    _adjustIndex(t, n = 0) { return t ?? this.length + n; }
};
function Lg(e) { return e[fr]; }
function ou(e) { return e[fr] || (e[fr] = []); }
function _E(e, t) { let n, o = t[e.index]; return K(o) ? n = o : (n = Lv(o, t, null, e), t[e.index] = n, Zd(t, n)), SE(n, t, e, o), new Zu(n, e, t); }
function gA(e, t) { let n = e[w], o = n.createComment(""), r = ie(t, e), i = n.parentNode(r); return Dn(n, i, o, n.nextSibling(r), !1), o; }
var SE = AE, Cf = () => !1;
function bE(e, t, n) { return Cf(e, t, n); }
function AE(e, t, n, o) { if (e[Ke])
    return; let r; n.type & 8 ? r = L(o) : r = gA(t, n), e[Ke] = r; }
function mA(e, t, n) { if (e[Ke] && e[Re])
    return !0; let o = n[ue], r = t.index - I; if (!o || No(t) || Ca(o, r))
    return !1; let s = Cu(o, r), a = o.data[_o]?.[r]; if (a === void 0)
    return !1; let [c, l] = kb(s, a); return e[Ke] = c, e[Re] = l, !0; }
function yA(e, t, n, o) { Cf(e, n, t) || AE(e, t, n, o); }
function RE() { SE = yA, Cf = mA; }
var Yu = class e {
    queryList;
    matches = null;
    constructor(t) { this.queryList = t; }
    clone() { return new e(this.queryList); }
    setDirty() { this.queryList.setDirty(); }
}, Ku = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    createEmbeddedView(t) { let n = t.queries; if (n !== null) {
        let o = t.contentQueries !== null ? t.contentQueries[0] : n.length, r = [];
        for (let i = 0; i < o; i++) {
            let s = n.getByIndex(i), a = this.queries[s.indexInDeclarationView];
            r.push(a.clone());
        }
        return new e(r);
    } return null; }
    insertView(t) { this.dirtyQueriesWithMatches(t); }
    detachView(t) { this.dirtyQueriesWithMatches(t); }
    finishViewCreation(t) { this.dirtyQueriesWithMatches(t); }
    dirtyQueriesWithMatches(t) { for (let n = 0; n < this.queries.length; n++)
        Nf(t, n).matches !== null && this.queries[n].setDirty(); }
}, ea = class {
    flags;
    read;
    predicate;
    constructor(t, n, o = null) { this.flags = n, this.read = o, typeof t == "string" ? this.predicate = TA(t) : this.predicate = t; }
}, Ju = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    elementStart(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].elementStart(t, n); }
    elementEnd(t) { for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t); }
    embeddedTView(t) { let n = null; for (let o = 0; o < this.length; o++) {
        let r = n !== null ? n.length : 0, i = this.getByIndex(o).embeddedTView(t, r);
        i && (i.indexInDeclarationView = o, n !== null ? n.push(i) : n = [i]);
    } return n !== null ? new e(n) : null; }
    template(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].template(t, n); }
    getByIndex(t) { return this.queries[t]; }
    get length() { return this.queries.length; }
    track(t) { this.queries.push(t); }
}, Xu = class e {
    metadata;
    matches = null;
    indexInDeclarationView = -1;
    crossesNgTemplate = !1;
    _declarationNodeIndex;
    _appliesToNextNode = !0;
    constructor(t, n = -1) { this.metadata = t, this._declarationNodeIndex = n; }
    elementStart(t, n) { this.isApplyingToNode(n) && this.matchTNode(t, n); }
    elementEnd(t) { this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1); }
    template(t, n) { this.elementStart(t, n); }
    embeddedTView(t, n) { return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, n), new e(this.metadata)) : null; }
    isApplyingToNode(t) { if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex, o = t.parent;
        for (; o !== null && o.type & 8 && o.index !== n;)
            o = o.parent;
        return n === (o !== null ? o.index : -1);
    } return this._appliesToNextNode; }
    matchTNode(t, n) { let o = this.metadata.predicate; if (Array.isArray(o))
        for (let r = 0; r < o.length; r++) {
            let i = o[r];
            this.matchTNodeWithReadOption(t, n, vA(n, i)), this.matchTNodeWithReadOption(t, n, ws(n, t, i, !1, !1));
        }
    else
        o === $r ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, ws(n, t, o, !1, !1)); }
    matchTNodeWithReadOption(t, n, o) { if (o !== null) {
        let r = this.metadata.read;
        if (r !== null)
            if (r === ni || r === Ja || r === $r && n.type & 4)
                this.addMatch(n.index, -2);
            else {
                let i = ws(n, t, r, !1, !1);
                i !== null && this.addMatch(n.index, i);
            }
        else
            this.addMatch(n.index, o);
    } }
    addMatch(t, n) { this.matches === null ? this.matches = [t, n] : this.matches.push(t, n); }
};
function vA(e, t) { let n = e.localNames; if (n !== null) {
    for (let o = 0; o < n.length; o += 2)
        if (n[o] === t)
            return n[o + 1];
} return null; }
function EA(e, t) { return e.type & 11 ? Co(e, t) : e.type & 4 ? Ua(e, t) : null; }
function IA(e, t, n, o) { return n === -1 ? EA(t, e) : n === -2 ? DA(e, t, o) : Pr(e, e[m], n, t); }
function DA(e, t, n) { if (n === ni)
    return Co(t, e); if (n === $r)
    return Ua(t, e); if (n === Ja)
    return _E(t, e); }
function kE(e, t, n, o) { let r = t[rt].queries[o]; if (r.matches === null) {
    let i = e.data, s = n.matches, a = [];
    for (let c = 0; s !== null && c < s.length; c += 2) {
        let l = s[c];
        if (l < 0)
            a.push(null);
        else {
            let u = i[l];
            a.push(IA(t, u, s[c + 1], n.metadata.read));
        }
    }
    r.matches = a;
} return r.matches; }
function ed(e, t, n, o) { let r = e.queries.getByIndex(n), i = r.matches; if (i !== null) {
    let s = kE(e, t, r, n);
    for (let a = 0; a < i.length; a += 2) {
        let c = i[a];
        if (c > 0)
            o.push(s[a / 2]);
        else {
            let l = i[a + 1], u = t[-c];
            for (let d = G; d < u.length; d++) {
                let f = u[d];
                f[jt] === f[Q] && ed(f[m], f, l, o);
            }
            if (u[dn] !== null) {
                let d = u[dn];
                for (let f = 0; f < d.length; f++) {
                    let p = d[f];
                    ed(p[m], p, l, o);
                }
            }
        }
    }
} return o; }
function Mf(e, t) { return e[rt].queries[t].queryList; }
function OE(e, t, n) { let o = new Hs((n & 4) === 4); return jh(e, t, o, o.destroy), (t[rt] ??= new Ku).queries.push(new Yu(o)) - 1; }
function xE(e, t, n) { let o = A(); return o.firstCreatePass && (LE(o, new ea(e, t, n), -1), (t & 2) === 2 && (o.staticViewQueries = !0)), OE(o, g(), t); }
function PE(e, t, n, o) { let r = A(); if (r.firstCreatePass) {
    let i = _();
    LE(r, new ea(t, n, o), i.index), CA(r, e), (n & 2) === 2 && (r.staticContentQueries = !0);
} return OE(r, g(), n); }
function TA(e) { return e.split(",").map(t => t.trim()); }
function LE(e, t, n) { e.queries === null && (e.queries = new Ju), e.queries.track(new Xu(t, n)); }
function CA(e, t) { let n = e.contentQueries || (e.contentQueries = []), o = n.length ? n[n.length - 1] : -1; t !== o && n.push(e.queries.length - 1, t); }
function Nf(e, t) { return e.queries.getByIndex(t); }
function FE(e, t) { let n = e[m], o = Nf(n, t); return o.crossesNgTemplate ? ed(n, e, t, []) : kE(n, e, o, t); }
function wf(e, t, n) { let o, r = Pi(() => { o._dirtyCounter(); let i = MA(o, e); if (t && i === void 0)
    throw new D(-951, !1); return i; }); return o = r[ae], o._dirtyCounter = Ut(0), o._flatValue = void 0, r; }
function _f(e) { return wf(!0, !1, e); }
function Sf(e) { return wf(!0, !0, e); }
function bf(e) { return wf(!1, !1, e); }
function jE(e, t) { let n = e[ae]; n._lView = g(), n._queryIndex = t, n._queryList = Mf(n._lView, t), n._queryList.onDirty(() => n._dirtyCounter.update(o => o + 1)); }
function MA(e, t) { let n = e._lView, o = e._queryIndex; if (n === void 0 || o === void 0 || n[N] & 4)
    return t ? void 0 : F; let r = Mf(n, o), i = FE(n, o); return r.reset(i, $m), t ? r.first : r._changesDetected || e._flatValue === void 0 ? e._flatValue = r.toArray() : e._flatValue; }
var wn = new Map, zr = new Set;
function VE(e) { return ze(this, null, function* () { let t = wn; wn = new Map; let n = new Map; function o(i) { let s = n.get(i); if (s)
    return s; let a = e(i).then(c => bA(i, c)); return n.set(i, a), a; } let r = Array.from(t).map(a => ze(null, [a], function* ([i, s]) { if (s.styleUrl && s.styleUrls?.length)
    throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple"); let c = []; s.templateUrl && c.push(o(s.templateUrl).then(f => { s.template = f; })); let l = typeof s.styles == "string" ? [s.styles] : s.styles ?? []; s.styles = l; let { styleUrl: u, styleUrls: d } = s; if (u && (d = [u], s.styleUrl = void 0), d?.length) {
    let f = Promise.all(d.map(p => o(p))).then(p => { l.push(...p), s.styleUrls = void 0; });
    c.push(f);
} yield Promise.all(c), zr.delete(i); })); yield Promise.all(r); }); }
function NA(e, t) { HE(t) && (wn.set(e, t), zr.add(e)); }
function wA(e) { return zr.has(e); }
function HE(e) { return !!(e.templateUrl && !e.hasOwnProperty("template") || e.styleUrls?.length || e.styleUrl); }
function _A() { let e = wn; return wn = new Map, e; }
function SA(e) { zr.clear(); for (let t of e.keys())
    zr.add(t); wn = e; }
function BE() { return wn.size === 0; }
function bA(e, t) { return ze(this, null, function* () { if (typeof t == "string")
    return t; if (t.status !== void 0 && t.status !== 200)
    throw new D(918, !1); return t.text(); }); }
var td = new Map, $E = !0;
function AA(e, t, n) { if (t && t !== n && $E)
    throw new D(921, !1); }
function Af(e, t) { let n = td.get(t) || null; AA(t, n, e), td.set(t, e); }
function Rf(e) { return td.get(e); }
function RA(e) { $E = !e; }
var mo = class {
}, UE = class {
};
function qE(e, t) { return new yo(e, t ?? null, []); }
var kA = qE, yo = class extends mo {
    ngModuleType;
    _parent;
    _bootstrapComponents = [];
    _r3Injector;
    instance;
    destroyCbs = [];
    componentFactoryResolver = new Js(this);
    constructor(t, n, o, r = !0) { super(), this.ngModuleType = t, this._parent = n; let i = an(t); this._bootstrapComponents = to(i.bootstrap), this._r3Injector = jl(t, n, [{ provide: mo, useValue: this }, { provide: yi, useValue: this.componentFactoryResolver }, ...o], er(t), new Set(["environment"])), r && this.resolveInjectorInitializers(); }
    resolveInjectorInitializers() { this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(this.ngModuleType); }
    get injector() { return this._r3Injector; }
    destroy() { let t = this._r3Injector; !t.destroyed && t.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null; }
    onDestroy(t) { this.destroyCbs.push(t); }
}, vo = class extends UE {
    moduleType;
    constructor(t) { super(), this.moduleType = t; }
    create(t) { return new yo(this.moduleType, t, []); }
};
function GE(e, t, n) { return new yo(e, t, n, !1); }
var Qr = class extends mo {
    injector;
    componentFactoryResolver = new Js(this);
    instance = null;
    constructor(t) { super(); let n = new on([...t.providers, { provide: mo, useValue: this }, { provide: yi, useValue: this.componentFactoryResolver }], t.parent || $n(), t.debugName, new Set(["environment"])); this.injector = n, t.runEnvironmentInitializers && n.resolveInjectorInitializers(); }
    destroy() { this.injector.destroy(); }
    onDestroy(t) { this.injector.onDestroy(t); }
};
function kf(e, t, n = null) { return new Qr({ providers: e, parent: t, debugName: n, runEnvironmentInitializers: !0 }).injector; }
var OA = (() => { class e {
    _injector;
    cachedInjectors = new Map;
    constructor(n) { this._injector = n; }
    getOrCreateStandaloneInjector(n) { if (!n.standalone)
        return null; if (!this.cachedInjectors.has(n)) {
        let o = Ki(!1, n.type), r = o.length > 0 ? kf([o], this._injector, "") : null;
        this.cachedInjectors.set(n, r);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = B({ token: e, providedIn: "environment", factory: () => new e(pe(_e)) });
} return e; })();
function WE(e) { return ft(() => { let t = YE(e), n = we(z({}, t), { decls: e.decls, vars: e.vars, template: e.template, consts: e.consts || null, ngContentSelectors: e.ngContentSelectors, onPush: e.changeDetection === fa.OnPush, directiveDefs: null, pipeDefs: null, dependencies: t.standalone && e.dependencies || null, getStandaloneInjector: t.standalone ? r => r.get(OA).getOrCreateStandaloneInjector(n) : null, getExternalStyles: null, signals: e.signals ?? !1, data: e.data || {}, encapsulation: e.encapsulation || Ue.Emulated, styles: e.styles || F, _: null, schemas: e.schemas || null, tView: null, id: "" }); t.standalone && J("NgStandalone"), KE(n); let o = e.dependencies; return n.directiveDefs = ta(o, zE), n.pipeDefs = ta(o, Qe), n.id = FA(n), n; }); }
function zE(e) { return W(e) || be(e); }
function Of(e) { return ft(() => ({ type: e.type, bootstrap: e.bootstrap || F, declarations: e.declarations || F, imports: e.imports || F, exports: e.exports || F, transitiveCompileScopes: null, schemas: e.schemas || null, id: e.id || null })); }
function xA(e, t) { if (e == null)
    return Le; let n = {}; for (let o in e)
    if (e.hasOwnProperty(o)) {
        let r = e[o], i, s, a, c;
        Array.isArray(r) ? (a = r[0], i = r[1], s = r[2] ?? i, c = r[3] || null) : (i = r, s = r, a = _a.None, c = null), n[i] = [o, a, c], t[i] = s;
    } return n; }
function PA(e) { if (e == null)
    return Le; let t = {}; for (let n in e)
    e.hasOwnProperty(n) && (t[e[n]] = n); return t; }
function QE(e) { return ft(() => { let t = YE(e); return KE(t), t; }); }
function ZE(e) { return { type: e.type, name: e.name, factory: null, pure: e.pure !== !1, standalone: e.standalone ?? !0, onDestroy: e.type.prototype.ngOnDestroy || null }; }
function YE(e) { let t = {}; return { type: e.type, providersResolver: null, viewProvidersResolver: null, factory: null, hostBindings: e.hostBindings || null, hostVars: e.hostVars || 0, hostAttrs: e.hostAttrs || null, contentQueries: e.contentQueries || null, declaredInputs: t, inputConfig: e.inputs || Le, exportAs: e.exportAs || null, standalone: e.standalone ?? !0, signals: e.signals === !0, selectors: e.selectors || F, viewQuery: e.viewQuery || null, features: e.features || null, setInput: null, resolveHostDirectives: null, hostDirectives: null, controlDef: null, inputs: xA(e.inputs, t), outputs: PA(e.outputs), debugInfo: null }; }
function KE(e) { e.features?.forEach(t => t(e)); }
function ta(e, t) { return e ? () => { let n = typeof e == "function" ? e() : e, o = []; for (let r of n) {
    let i = t(r);
    i !== null && o.push(i);
} return o; } : null; }
var LA = new Map;
function FA(e) { let t = 0, n = typeof e.consts == "function" ? "" : e.consts, o = [e.selectors, e.ngContentSelectors, e.hostVars, e.hostAttrs, n, e.vars, e.decls, e.encapsulation, e.standalone, e.signals, e.exportAs, JSON.stringify(e.inputs), JSON.stringify(e.outputs), Object.getOwnPropertyNames(e.type.prototype), !!e.contentQueries, !!e.viewQuery]; for (let i of o.join("|"))
    t = Math.imul(31, t) + i.charCodeAt(0) << 0; return t += 2147483648, "c" + t; }
function JE(e) { return t => { t.controlDef = { create: (n, o) => { n?.\u0275ngControlCreate(o); }, update: (n, o) => { n?.\u0275ngControlUpdate?.(o); }, passThroughInput: e }; }; }
function XE(e) { let t = n => { let o = Array.isArray(e); n.hostDirectives === null ? (n.resolveHostDirectives = jA, n.hostDirectives = o ? e.map(nd) : [e]) : o ? n.hostDirectives.unshift(...e.map(nd)) : n.hostDirectives.unshift(e); }; return t.ngInherit = !0, t; }
function jA(e) { let t = [], n = !1, o = null, r = null; for (let i = 0; i < e.length; i++) {
    let s = e[i];
    if (s.hostDirectives !== null) {
        let a = t.length;
        o ??= new Map, r ??= new Map, eI(s, t, o), r.set(s, [a, t.length - 1]);
    }
    i === 0 && He(s) && (n = !0, t.push(s));
} for (let i = n ? 1 : 0; i < e.length; i++)
    t.push(e[i]); return [t, o, r]; }
function eI(e, t, n) { if (e.hostDirectives !== null)
    for (let o of e.hostDirectives)
        if (typeof o == "function") {
            let r = o();
            for (let i of r)
                Fg(nd(i), t, n);
        }
        else
            Fg(o, t, n); }
function Fg(e, t, n) { let o = be(e.directive); VA(o.declaredInputs, e.inputs), eI(o, t, n), n.set(o, e), t.push(o); }
function nd(e) { return typeof e == "function" ? { directive: x(e), inputs: Le, outputs: Le } : { directive: x(e.directive), inputs: jg(e.inputs), outputs: jg(e.outputs) }; }
function jg(e) { if (e === void 0 || e.length === 0)
    return Le; let t = {}; for (let n = 0; n < e.length; n += 2)
    t[e[n]] = e[n + 1]; return t; }
function VA(e, t) { for (let n in t)
    if (t.hasOwnProperty(n)) {
        let o = t[n], r = e[n];
        e[o] = r;
    } }
function HA(e) { return Object.getPrototypeOf(e.prototype).constructor; }
function xf(e) { let t = HA(e.type), n = !0, o = [e]; for (; t;) {
    let r;
    if (He(e))
        r = t.\u0275cmp || t.\u0275dir;
    else {
        if (t.\u0275cmp)
            throw new D(903, !1);
        r = t.\u0275dir;
    }
    if (r) {
        if (n) {
            o.push(r);
            let s = e;
            s.inputs = ru(e.inputs), s.declaredInputs = ru(e.declaredInputs), s.outputs = ru(e.outputs);
            let a = r.hostBindings;
            a && GA(e, a);
            let c = r.viewQuery, l = r.contentQueries;
            if (c && UA(e, c), l && qA(e, l), BA(e, r), Ch(e.outputs, r.outputs), He(r) && r.data.animation) {
                let u = e.data;
                u.animation = (u.animation || []).concat(r.data.animation);
            }
        }
        let i = r.features;
        if (i)
            for (let s = 0; s < i.length; s++) {
                let a = i[s];
                a && a.ngInherit && a(e), a === xf && (n = !1);
            }
    }
    t = Object.getPrototypeOf(t);
} $A(o); }
function BA(e, t) { for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n))
        continue;
    let o = t.inputs[n];
    o !== void 0 && (e.inputs[n] = o, e.declaredInputs[n] = t.declaredInputs[n]);
} }
function $A(e) { let t = 0, n = null; for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    r.hostVars = t += r.hostVars, r.hostAttrs = uo(r.hostAttrs, n = uo(n, r.hostAttrs));
} }
function ru(e) { return e === Le ? {} : e === F ? [] : e; }
function UA(e, t) { let n = e.viewQuery; n ? e.viewQuery = (o, r) => { t(o, r), n(o, r); } : e.viewQuery = t; }
function qA(e, t) { let n = e.contentQueries; n ? e.contentQueries = (o, r, i) => { t(o, r, i), n(o, r, i); } : e.contentQueries = t; }
function GA(e, t) { let n = e.hostBindings; n ? e.hostBindings = (o, r) => { t(o, r), n(o, r); } : e.hostBindings = t; }
function tI(e, t, n, o, r, i, s, a) { if (n.firstCreatePass) {
    e.mergedAttrs = uo(e.mergedAttrs, e.attrs);
    let u = e.tView = zd(2, e, r, i, s, n.directiveRegistry, n.pipeRegistry, null, n.schemas, n.consts, null);
    n.queries !== null && (n.queries.template(n, e), u.queries = n.queries.embeddedTView(e));
} a && (e.flags |= a), ct(e, !1); let c = nI(n, t, e, o); vr() && af(n, t, c, e), $e(c, t); let l = Lv(c, t, c, e); t[o + I] = l, Zd(t, l), bE(l, e, t); }
function WA(e, t, n, o, r, i, s, a, c, l, u) { let d = n + I, f; return t.firstCreatePass ? (f = xn(t, d, 4, s || null, a || null), is() && pE(t, e, f, ge(t.consts, l), df), wm(t, f)) : f = t.data[d], tI(f, e, t, n, o, r, i, c), Un(f) && La(t, e, f), l != null && xo(e, f, u), f; }
function _n(e, t, n, o, r, i, s, a, c, l, u) { let d = n + I, f; if (t.firstCreatePass) {
    if (f = xn(t, d, 4, s || null, a || null), l != null) {
        let p = ge(t.consts, l);
        f.localNames = [];
        for (let h = 0; h < p.length; h += 2)
            f.localNames.push(p[h], -1);
    }
}
else
    f = t.data[d]; return tI(f, e, t, n, o, r, i, c), l != null && xo(e, f, u), f; }
function Pf(e, t, n, o, r, i, s, a) { let c = g(), l = A(), u = ge(l.consts, i); return WA(c, l, e, t, n, o, r, u, void 0, s, a), Pf; }
function Lf(e, t, n, o, r, i, s, a) { let c = g(), l = A(), u = ge(l.consts, i); return _n(c, l, e, t, n, o, r, u, void 0, s, a), Lf; }
var nI = oI;
function oI(e, t, n, o) { return Je(!0), t[w].createComment(""); }
function zA(e, t, n, o) { let r = !Ma(t, n); Je(r); let i = t[ue]?.data[ga]?.[o] ?? null; if (i !== null && n.tView !== null && n.tView.ssrId === null && (n.tView.ssrId = i), r)
    return oI(e, t); let s = t[ue], a = mi(s, e, t, n); Ta(s, o, a); let c = Ld(s, o); return Ga(c, a); }
function rI() { nI = zA; }
var oe = (function (e) { return e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.IN_PROGRESS = 1] = "IN_PROGRESS", e[e.COMPLETE = 2] = "COMPLETE", e[e.FAILED = 3] = "FAILED", e; })(oe || {}), Vg = 0, QA = 1, Z = (function (e) { return e[e.Placeholder = 0] = "Placeholder", e[e.Loading = 1] = "Loading", e[e.Complete = 2] = "Complete", e[e.Error = 3] = "Error", e; })(Z || {}), Zr = (function (e) { return e[e.Initial = -1] = "Initial", e; })(Zr || {}), ao = 0, At = 1, Mr = 2, Ds = 3, ZA = 4, YA = 5, Xa = 6, KA = 7, co = 8, JA = 9, Ff = (function (e) { return e[e.Manual = 0] = "Manual", e[e.Playthrough = 1] = "Playthrough", e; })(Ff || {});
function vi(e, t, n) { let o = sI(e); t[o] === null && (t[o] = []), t[o].push(n); }
function As(e, t) { let n = sI(e), o = t[n]; if (o !== null) {
    for (let r of o)
        r();
    t[n] = null;
} }
function iI(e) { As(1, e), As(0, e), As(2, e); }
function sI(e) { let t = ZA; return e === 1 ? t = YA : e === 2 && (t = JA), t; }
function Ei(e) { return e + 1; }
function Te(e, t) { let n = e[m], o = Ei(t.index); return e[o]; }
function XA(e, t, n) { let o = e[m], r = Ei(t); e[r] = n; }
function fe(e, t) { let n = Ei(t.index); return e.data[n]; }
function eR(e, t, n) { let o = Ei(t); e.data[o] = n; }
function tR(e, t, n) { let o = t[m], r = fe(o, n); switch (e) {
    case Z.Complete: return r.primaryTmplIndex;
    case Z.Loading: return r.loadingTmplIndex;
    case Z.Error: return r.errorTmplIndex;
    case Z.Placeholder: return r.placeholderTmplIndex;
    default: return null;
} }
function od(e, t) { return t === Z.Placeholder ? e.placeholderBlockConfig?.[Vg] ?? null : t === Z.Loading ? e.loadingBlockConfig?.[Vg] ?? null : null; }
function aI(e) { return e.loadingBlockConfig?.[QA] ?? null; }
function Hg(e, t) { if (!e || e.length === 0)
    return t; let n = new Set(e); for (let o of t)
    n.add(o); return e.length === n.size ? e : Array.from(n); }
function nR(e, t) { let n = t.primaryTmplIndex + I; return Vt(e, n); }
function cI(e) { return e !== null && typeof e == "object" && typeof e.primaryTmplIndex == "number"; }
function lI(e, t) { let n = null, o = Ei(t.index); return I < o && o < e.bindingStartIndex && (n = fe(e, t)), !!n && cI(n); }
function jf(e, t, n, o) { let r = n.get(q); return _w(e, () => r.run(t), i => r.runOutsideAngular(() => ww(i)), o); }
function oR(e, t, n) { return n == null ? e : n >= 0 ? gl(n, e) : e[t.index][G] ?? null; }
function rR(e, t) { return fn(I + t, e); }
function Ho(e, t, n, o, r, i, s, a) { let c = e[P], l = c.get(q), u; function d() { if (at(e)) {
    u.destroy();
    return;
} let f = Te(e, t), p = f[At]; if (p !== Zr.Initial && p !== Z.Placeholder) {
    u.destroy();
    return;
} let h = oR(e, t, o); if (!h || (u.destroy(), at(h)))
    return; let y = rR(h, n), E = r(y, () => { l.run(() => { e !== h && rs(h, E), i(); }); }, c, a); e !== h && gr(h, E), vi(s, f, E); } u = uv({ read: d }, { injector: c }); }
function ec(e, t) { let n = t.get(aR), o = () => n.remove(e); return n.add(e), o; }
var iR = () => typeof requestIdleCallback < "u" ? requestIdleCallback : setTimeout, sR = () => typeof requestIdleCallback < "u" ? cancelIdleCallback : clearTimeout, aR = (() => { class e {
    executingCallbacks = !1;
    idleId = null;
    current = new Set;
    deferred = new Set;
    ngZone = v(q);
    requestIdleCallbackFn = iR().bind(globalThis);
    cancelIdleCallbackFn = sR().bind(globalThis);
    add(n) { (this.executingCallbacks ? this.deferred : this.current).add(n), this.idleId === null && this.scheduleIdleCallback(); }
    remove(n) { let { current: o, deferred: r } = this; o.delete(n), r.delete(n), o.size === 0 && r.size === 0 && this.cancelIdleCallback(); }
    scheduleIdleCallback() { let n = () => { this.cancelIdleCallback(), this.executingCallbacks = !0; for (let o of this.current)
        o(); if (this.current.clear(), this.executingCallbacks = !1, this.deferred.size > 0) {
        for (let o of this.deferred)
            this.current.add(o);
        this.deferred.clear(), this.scheduleIdleCallback();
    } }; this.idleId = this.requestIdleCallbackFn(() => this.ngZone.run(n)); }
    cancelIdleCallback() { this.idleId !== null && (this.cancelIdleCallbackFn(this.idleId), this.idleId = null); }
    ngOnDestroy() { this.cancelIdleCallback(), this.current.clear(), this.deferred.clear(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })();
function tc(e) { return (t, n) => uI(e, t, n); }
function uI(e, t, n) { let o = n.get(dI), r = n.get(q), i = () => o.remove(t); return o.add(e, t, r), i; }
var dI = (() => { class e {
    executingCallbacks = !1;
    timeoutId = null;
    invokeTimerAt = null;
    current = [];
    deferred = [];
    add(n, o, r) { let i = this.executingCallbacks ? this.deferred : this.current; this.addToQueue(i, Date.now() + n, o), this.scheduleTimer(r); }
    remove(n) { let { current: o, deferred: r } = this; this.removeFromQueue(o, n) === -1 && this.removeFromQueue(r, n), o.length === 0 && r.length === 0 && this.clearTimeout(); }
    addToQueue(n, o, r) { let i = n.length; for (let s = 0; s < n.length; s += 2)
        if (n[s] > o) {
            i = s;
            break;
        } nl(n, i, o, r); }
    removeFromQueue(n, o) { let r = -1; for (let i = 0; i < n.length; i += 2)
        if (n[i + 1] === o) {
            r = i;
            break;
        } return r > -1 && tl(n, r, 2), r; }
    scheduleTimer(n) { let o = () => { this.clearTimeout(), this.executingCallbacks = !0; let i = [...this.current], s = Date.now(); for (let c = 0; c < i.length; c += 2) {
        let l = i[c], u = i[c + 1];
        if (l <= s)
            u();
        else
            break;
    } let a = -1; for (let c = 0; c < this.current.length && this.current[c] <= s; c += 2)
        a = c + 1; if (a >= 0 && tl(this.current, 0, a + 1), this.executingCallbacks = !1, this.deferred.length > 0) {
        for (let c = 0; c < this.deferred.length; c += 2) {
            let l = this.deferred[c], u = this.deferred[c + 1];
            this.addToQueue(this.current, l, u);
        }
        this.deferred.length = 0;
    } this.scheduleTimer(n); }; if (this.current.length > 0) {
        let i = Date.now(), s = this.current[0];
        if (this.timeoutId === null || this.invokeTimerAt && this.invokeTimerAt - s > 16) {
            this.clearTimeout();
            let a = Math.max(s - i, 16);
            this.invokeTimerAt = s, this.timeoutId = n.runOutsideAngular(() => setTimeout(() => n.run(o), a));
        }
    } }
    clearTimeout() { this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null); }
    ngOnDestroy() { this.clearTimeout(), this.current.length = 0, this.deferred.length = 0; }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), cR = (() => { class e {
    cachedInjectors = new Map;
    getOrCreateInjector(n, o, r, i) { if (!this.cachedInjectors.has(n)) {
        let s = r.length > 0 ? kf(r, o, i) : null;
        this.cachedInjectors.set(n, s);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = B({ token: e, providedIn: "environment", factory: () => new e });
} return e; })(), lR = new C("DEFER_BLOCK_DEPENDENCY_INTERCEPTOR"), fI = new C("");
function iu(e, t, n) { return e.get(cR).getOrCreateInjector(t, e, n, ""); }
function uR(e, t, n) { if (e instanceof so) {
    let r = e.injector, i = e.parentInjector, s = iu(i, t, n);
    return new so(r, s);
} let o = e.get(_e); if (o !== e) {
    let r = iu(o, t, n);
    return new so(e, r);
} return iu(e, t, n); }
function Tt(e, t, n, o = !1) { let r = n[Q], i = r[m]; if (at(r))
    return; let s = Te(r, t), a = s[At], c = s[KA]; if (!(c !== null && e < c) && $g(a, e) && $g(s[ao] ?? -1, e)) {
    let l = fe(i, t), d = !o && (typeof ngServerMode > "u" || !ngServerMode) && (aI(l) !== null || od(l, Z.Loading) !== null || od(l, Z.Placeholder)) ? rd : pI;
    try {
        d(e, s, n, t, r);
    }
    catch (f) {
        ff(r, f);
    }
} }
function dR(e, t) { let n = e[Re]?.findIndex(r => r.data[si] === t[At]) ?? -1; return { dehydratedView: n > -1 ? e[Re][n] : null, dehydratedViewIx: n }; }
function pI(e, t, n, o, r) { V(O.DeferBlockStateStart); let i = tR(e, r, o); if (i !== null) {
    t[At] = e;
    let s = r[m], a = i + I, c = Vt(s, a), l = 0;
    pf(n, l);
    let u;
    if (e === Z.Complete) {
        let h = fe(s, o), y = h.providers;
        y && y.length > 0 && (u = uR(r[P], h, y));
    }
    let { dehydratedView: d, dehydratedViewIx: f } = dR(n, t), p = Po(r, c, null, { injector: u, dehydratedView: d });
    if (Lo(n, p, l, Mn(c, d)), gi(p, 2), f > -1 && n[Re]?.splice(f, 1), (e === Z.Complete || e === Z.Error) && Array.isArray(t[co])) {
        for (let h of t[co])
            h();
        t[co] = null;
    }
} V(O.DeferBlockStateEnd); }
function fR(e, t, n, o, r) { let i = Date.now(), s = r[m], a = fe(s, o); if (t[Mr] === null || t[Mr] <= i) {
    t[Mr] = null;
    let c = aI(a), l = t[Ds] !== null;
    if (e === Z.Loading && c !== null && !l) {
        t[ao] = e;
        let u = Bg(c, t, o, n, r);
        t[Ds] = u;
    }
    else {
        e > Z.Loading && l && (t[Ds](), t[Ds] = null, t[ao] = null), pI(e, t, n, o, r);
        let u = od(a, e);
        u !== null && (t[Mr] = i + u, Bg(u, t, o, n, r));
    }
}
else
    t[ao] = e; }
function Bg(e, t, n, o, r) { return uI(e, () => { let s = t[ao]; t[Mr] = null, t[ao] = null, s !== null && Tt(s, n, o); }, r[P]); }
function $g(e, t) { return e < t; }
function Bo(e, t) { let n = e[t.index]; Tt(Z.Placeholder, t, n); }
function Ug(e, t, n) { e.loadingPromise.then(() => { e.loadingState === oe.COMPLETE ? Tt(Z.Complete, t, n) : e.loadingState === oe.FAILED && Tt(Z.Error, t, n); }); }
var rd = null;
function hI(e, t, n, o) { let r = e.consts; n != null && (t.placeholderBlockConfig = ge(r, n)), o != null && (t.loadingBlockConfig = ge(r, o)), rd === null && (rd = fR); }
var Rs = "__ngAsyncComponentMetadataFn__";
function pR(e) { return e[Rs] ?? null; }
function gI(e, t, n) { let o = e; return o[Rs] = () => Promise.all(t()).then(r => (n(...r), o[Rs] = null, r)), o[Rs]; }
function Vf(e, t, n, o) { return ft(() => { let r = e; t !== null && (r.hasOwnProperty("decorators") && r.decorators !== void 0 ? r.decorators.push(...t) : r.decorators = t), n !== null && (r.ctorParameters = n), o !== null && (r.hasOwnProperty("propDecorators") && r.propDecorators !== void 0 ? r.propDecorators = z(z({}, r.propDecorators), o) : r.propDecorators = o); }); }
var hR = (() => { class e {
    log(n) { console.log(n); }
    warn(n) { console.warn(n); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function Hf(e) { return typeof e == "function" && e[ae] !== void 0; }
function Bf(e) { return Hf(e) && typeof e.set == "function"; }
function ks(e, t) { let n = e[m]; for (let o = I; o < n.bindingStartIndex; o++)
    if (K(e[o])) {
        let r = e[o];
        if (!(o === n.bindingStartIndex - 1)) {
            let s = n.data[o], a = fe(n, s);
            if (cI(a)) {
                t.push({ lContainer: r, lView: e, tNode: s, tDetails: a });
                continue;
            }
        }
        ne(r[U]) && ks(r[U], t);
        for (let s = G; s < r.length; s++)
            ks(r[s], t);
    }
    else
        ne(e[o]) && ks(e[o], t); }
function gR() { return J("Chrome DevTools profiling"), () => { }; }
function mR(e) { let t = e.get($t), n = e.get(_t), o = ey(t, n), r = {}; for (let [i, s] of Object.entries(o))
    Aw(i) || (r[i] = s); return r; }
var qg = "ng";
function yR(e, t) { vR(e, t); }
function vR(e, t) { if (typeof COMPILED > "u" || !COMPILED) {
    let n = Se;
    n[qg] ??= {}, n[qg][e] = t;
} }
var mI = new C(""), yI = new C(""), ER = (() => { class e {
    _ngZone;
    registry;
    _isZoneStable = !0;
    _callbacks = [];
    _taskTrackingZone = null;
    _destroyRef;
    constructor(n, o, r) { this._ngZone = n, this.registry = o, Xi() && (this._destroyRef = v(Be, { optional: !0 }) ?? void 0), $f || (EI(r), r.addToWindow(o)), this._watchAngularEvents(), n.run(() => { this._taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone"); }); }
    _watchAngularEvents() { let n = this._ngZone.onUnstable.subscribe({ next: () => { this._isZoneStable = !1; } }), o = this._ngZone.runOutsideAngular(() => this._ngZone.onStable.subscribe({ next: () => { q.assertNotInAngularZone(), queueMicrotask(() => { this._isZoneStable = !0, this._runCallbacksIfReady(); }); } })); this._destroyRef?.onDestroy(() => { n.unsubscribe(), o.unsubscribe(); }); }
    isStable() { return this._isZoneStable && !this._ngZone.hasPendingMacrotasks; }
    _runCallbacksIfReady() { if (this.isStable())
        queueMicrotask(() => { for (; this._callbacks.length !== 0;) {
            let n = this._callbacks.pop();
            clearTimeout(n.timeoutId), n.doneCb();
        } });
    else {
        let n = this.getPendingTasks();
        this._callbacks = this._callbacks.filter(o => o.updateCb && o.updateCb(n) ? (clearTimeout(o.timeoutId), !1) : !0);
    } }
    getPendingTasks() { return this._taskTrackingZone ? this._taskTrackingZone.macroTasks.map(n => ({ source: n.source, creationLocation: n.creationLocation, data: n.data })) : []; }
    addCallback(n, o, r) { let i = -1; o && o > 0 && (i = setTimeout(() => { this._callbacks = this._callbacks.filter(s => s.timeoutId !== i), n(); }, o)), this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: r }); }
    whenStable(n, o, r) { if (r && !this._taskTrackingZone)
        throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'); this.addCallback(n, o, r), this._runCallbacksIfReady(); }
    registerApplication(n) { this.registry.registerApplication(n, this); }
    unregisterApplication(n) { this.registry.unregisterApplication(n); }
    findProviders(n, o, r) { return []; }
    static \u0275fac = function (o) { return new (o || e)(pe(q), pe(vI), pe(yI)); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac });
} return e; })(), vI = (() => { class e {
    _applications = new Map;
    registerApplication(n, o) { this._applications.set(n, o); }
    unregisterApplication(n) { this._applications.delete(n); }
    unregisterAllApplications() { this._applications.clear(); }
    getTestability(n) { return this._applications.get(n) || null; }
    getAllTestabilities() { return Array.from(this._applications.values()); }
    getAllRootElements() { return Array.from(this._applications.keys()); }
    findTestabilityInTree(n, o = !0) { return $f?.findTestabilityInTree(this, n, o) ?? null; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function EI(e) { $f = e; }
var $f;
function Uf(e) { return !!e && typeof e.then == "function"; }
function II(e) { return !!e && typeof e.subscribe == "function"; }
var qf = new C("");
function DI(e) { return Ye([{ provide: qf, multi: !0, useValue: e }]); }
var Gf = (() => { class e {
    resolve;
    reject;
    initialized = !1;
    done = !1;
    donePromise = new Promise((n, o) => { this.resolve = n, this.reject = o; });
    appInits = v(qf, { optional: !0 }) ?? [];
    injector = v(ce);
    constructor() { }
    runInitializers() { if (this.initialized)
        return; let n = []; for (let r of this.appInits) {
        let i = Ji(this.injector, r);
        if (Uf(i))
            n.push(i);
        else if (II(i)) {
            let s = new Promise((a, c) => { i.subscribe({ complete: a, error: c }); });
            n.push(s);
        }
    } let o = () => { this.done = !0, this.resolve(); }; Promise.all(n).then(() => { o(); }).catch(r => { this.reject(r); }), n.length === 0 && o(), this.initialized = !0; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), Ii = new C("");
function Wf() { ch(() => { let e = ""; throw new D(600, e); }); }
function TI(e) { return e.isBoundToModule; }
var IR = 10;
function zf(e, t) { return Array.isArray(t) ? t.reduce(zf, e) : z(z({}, e), t); }
var Ge = (() => { class e {
    _runningTick = !1;
    _destroyed = !1;
    _destroyListeners = [];
    _views = [];
    internalErrorHandler = v(It);
    afterRenderManager = v(Ra);
    zonelessEnabled = v(Qn);
    rootEffectScheduler = v(fs);
    dirtyFlags = 0;
    tracingSnapshot = null;
    allTestViews = new Set;
    autoDetectTestViews = new Set;
    includeAllTestViews = !1;
    afterTick = new Wo;
    get allViews() { return [...(this.includeAllTestViews ? this.allTestViews : this.autoDetectTestViews).keys(), ...this._views]; }
    get destroyed() { return this._destroyed; }
    componentTypes = [];
    components = [];
    internalPendingTask = v(Et);
    get isStable() { return this.internalPendingTask.hasPendingTasksObservable.pipe(hh(n => !n)); }
    constructor() { v(On, { optional: !0 }); }
    whenStable() { let n; return new Promise(o => { n = this.isStable.subscribe({ next: r => { r && o(); } }); }).finally(() => { n.unsubscribe(); }); }
    _injector = v(_e);
    _rendererFactory = null;
    get injector() { return this._injector; }
    bootstrap(n, o) { return this.bootstrapImpl(n, o); }
    bootstrapImpl(n, o, r = ce.NULL) { return this._injector.get(q).run(() => { V(O.BootstrapComponentStart); let s = n instanceof Za; if (!this._injector.get(Gf).done) {
        let h = "";
        throw new D(405, h);
    } let c; s ? c = n : c = this._injector.get(yi).resolveComponentFactory(n), this.componentTypes.push(c.componentType); let l = TI(c) ? void 0 : this._injector.get(mo), u = o || c.selector, d = c.create(r, [], u, l), f = d.location.nativeElement, p = d.injector.get(mI, null); return p?.registerApplication(f), d.onDestroy(() => { this.detachView(d.hostView), _r(this.components, d), p?.unregisterApplication(f); }), this._loadComponent(d), V(O.BootstrapComponentEnd, d), d; }); }
    tick() { this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick(); }
    _tick() { V(O.ChangeDetectionStart), this.tracingSnapshot !== null ? this.tracingSnapshot.run(Aa.CHANGE_DETECTION, this.tickImpl) : this.tickImpl(); }
    tickImpl = () => { if (this._runningTick)
        throw V(O.ChangeDetectionEnd), new D(101, !1); let n = R(null); try {
        this._runningTick = !0, this.synchronize();
    }
    finally {
        this._runningTick = !1, this.tracingSnapshot?.dispose(), this.tracingSnapshot = null, R(n), this.afterTick.next(), V(O.ChangeDetectionEnd);
    } };
    synchronize() { this._rendererFactory === null && !this._injector.destroyed && (this._rendererFactory = this._injector.get(Gr, null, { optional: !0 })); let n = 0; for (; this.dirtyFlags !== 0 && n++ < IR;) {
        V(O.ChangeDetectionSyncStart);
        try {
            this.synchronizeOnce();
        }
        finally {
            V(O.ChangeDetectionSyncEnd);
        }
    } }
    synchronizeOnce() { this.dirtyFlags & 16 && (this.dirtyFlags &= -17, this.rootEffectScheduler.flush()); let n = !1; if (this.dirtyFlags & 7) {
        let o = !!(this.dirtyFlags & 1);
        this.dirtyFlags &= -8, this.dirtyFlags |= 8;
        for (let { _lView: r } of this.allViews) {
            if (!o && !qn(r))
                continue;
            let i = o && !this.zonelessEnabled ? 0 : 1;
            Rv(r, i), n = !0;
        }
        if (this.dirtyFlags &= -5, this.syncDirtyFlagsWithViews(), this.dirtyFlags & 23)
            return;
    } n || (this._rendererFactory?.begin?.(), this._rendererFactory?.end?.()), this.dirtyFlags & 8 && (this.dirtyFlags &= -9, this.afterRenderManager.execute()), this.syncDirtyFlagsWithViews(); }
    syncDirtyFlagsWithViews() { if (this.allViews.some(({ _lView: n }) => qn(n))) {
        this.dirtyFlags |= 2;
        return;
    }
    else
        this.dirtyFlags &= -8; }
    attachView(n) { let o = n; this._views.push(o), o.attachToAppRef(this); }
    detachView(n) { let o = n; _r(this._views, o), o.detachFromAppRef(); }
    _loadComponent(n) { this.attachView(n.hostView); try {
        this.tick();
    }
    catch (r) {
        this.internalErrorHandler(r);
    } this.components.push(n), this._injector.get(Ii, []).forEach(r => r(n)); }
    ngOnDestroy() { if (!this._destroyed)
        try {
            this._destroyListeners.forEach(n => n()), this._views.slice().forEach(n => n.destroy());
        }
        finally {
            this._destroyed = !0, this._views = [], this._destroyListeners = [];
        } }
    onDestroy(n) { return this._destroyListeners.push(n), () => _r(this._destroyListeners, n); }
    destroy() { if (this._destroyed)
        throw new D(406, !1); let n = this._injector; n.destroy && !n.destroyed && n.destroy(); }
    get viewCount() { return this._views.length; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function _r(e, t) { let n = e.indexOf(t); n > -1 && e.splice(n, 1); }
function nc() { let e, t; return { promise: new Promise((o, r) => { e = o, t = r; }), resolve: e, reject: t }; }
function CI(e) { let t = g(), n = _(); if (Bo(t, n), !wI(0, t))
    return; let o = t[P], r = Te(t, n), i = e(() => Ce(0, t, n), o); vi(0, r, i); }
function MI(e) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let t = g(), n = t[P], o = _(), r = t[m], i = fe(r, o); if (i.loadingState === oe.NOT_STARTED) {
    let s = Te(t, o), c = e(() => Di(i, t, o), n);
    vi(1, s, c);
} }
function NI(e, t, n) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let o = t[P], r = Te(t, n), i = r[Xa], s = e(() => Rt(o, i), o); vi(2, r, s); }
function Di(e, t, n) { oc(e, t, n); }
function oc(e, t, n) { let o = t[P], r = t[m]; if (e.loadingState !== oe.NOT_STARTED)
    return e.loadingPromise ?? Promise.resolve(); let i = Te(t, n), s = nR(r, e); e.loadingState = oe.IN_PROGRESS, As(1, i); let a = e.dependencyResolverFn, c = o.get(Er).add(); return a ? (e.loadingPromise = Promise.allSettled(a()).then(l => { let u = !1, d = null, f = [], p = []; for (let h = 0; h < l.length; h++) {
    let y = l[h];
    if (y.status === "fulfilled") {
        let E = y.value, T = W(E) || be(E);
        if (T)
            f.push(T);
        else {
            let k = Qe(E);
            k && p.push(k);
        }
    }
    else {
        u = !0, d = y.reason instanceof Error ? y.reason : new Error(String(y.reason));
        break;
    }
} if (u) {
    if (e.loadingState = oe.FAILED, e.errorTmplIndex === null) {
        let y = "", E = new D(-750, y);
        ff(t, E);
    }
}
else {
    e.loadingState = oe.COMPLETE;
    let h = s.tView;
    if (f.length > 0) {
        h.directiveRegistry = Hg(h.directiveRegistry, f);
        let y = f.map(T => T.type), E = Ki(!1, ...y);
        e.providers = E;
    }
    p.length > 0 && (h.pipeRegistry = Hg(h.pipeRegistry, p));
} }), e.loadingPromise.finally(() => { e.loadingPromise = null, c(); })) : (e.loadingPromise = Promise.resolve().then(() => { e.loadingPromise = null, e.loadingState = oe.COMPLETE, c(); }), e.loadingPromise); }
function wI(e, t) { return !(e === 0 && typeof ngServerMode < "u" && ngServerMode || t[P].get(fI, null, { optional: !0 })?.behavior === Ff.Manual); }
function Ce(e, t, n) { let o = t[m], r = t[n.index]; if (!wI(e, t))
    return; let i = Te(t, n), s = fe(o, n); switch (iI(i), s.loadingState) {
    case oe.NOT_STARTED:
        Tt(Z.Loading, n, r), oc(s, t, n), s.loadingState === oe.IN_PROGRESS && Ug(s, n, r);
        break;
    case oe.IN_PROGRESS:
        Tt(Z.Loading, n, r), Ug(s, n, r);
        break;
    case oe.COMPLETE:
        Tt(Z.Complete, n, r);
        break;
    case oe.FAILED:
        Tt(Z.Error, n, r);
        break;
    default:
} }
function Rt(e, t, n) { return ze(this, null, function* () { let o = e.get(St); if (o.hydrating.has(t))
    return; let { parentBlockPromise: i, hydrationQueue: s } = Vw(t, e); if (s.length === 0)
    return; i !== null && s.shift(), CR(o, s), i !== null && (yield i); let a = s[0]; o.has(a) ? yield Gg(e, s, n) : o.awaitParentBlock(a, () => ze(null, null, function* () { return yield Gg(e, s, n); })); }); }
function Gg(e, t, n) { return ze(this, null, function* () { let o = e.get(St), r = o.hydrating, i = e.get(Et), s = i.add(); for (let c = 0; c < t.length; c++) {
    let l = t[c], u = o.get(l);
    if (u != null) {
        if (yield NR(u), yield MR(e), DR(u)) {
            Ab(u), Wg(t.slice(c), o);
            break;
        }
        r.get(l).resolve();
    }
    else {
        TR(c, t, o), Wg(t.slice(c), o);
        break;
    }
} let a = t[t.length - 1]; yield r.get(a)?.promise, i.remove(s), n && n(t), Rb(o.get(a), t, o, e.get(Ge)); }); }
function DR(e) { return Te(e.lView, e.tNode)[At] === Z.Error; }
function TR(e, t, n) { let o = e - 1, r = o > -1 ? n.get(t[o]) : null; r && Qa(r.lContainer); }
function Wg(e, t) { let n = t.hydrating; for (let o in e)
    n.get(o)?.reject(); t.cleanup(e); }
function CR(e, t) { for (let n of t)
    e.hydrating.set(n, nc()); }
function MR(e) { return new Promise(t => nf(t, { injector: e })); }
function NR(e) { return ze(this, null, function* () { let { tNode: t, lView: n } = e, o = Te(n, t); return new Promise(r => { wR(o, r), Ce(2, n, t); }); }); }
function wR(e, t) { Array.isArray(e[co]) || (e[co] = []), e[co].push(t); }
function X(e, t, n) { return e === 0 ? zg(t, n) : e === 2 ? !zg(t, n) : !(typeof ngServerMode < "u" && ngServerMode); }
function _R(e) { return e != null && (e & 1) === 1; }
function zg(e, t) { let n = e[P], o = fe(e[m], t), r = li(n), i = _R(o.flags); if (typeof ngServerMode < "u" && ngServerMode)
    return !r || !i; let a = Te(e, t)[Xa] !== null; return !(i && a && r); }
function Kt(e, t) { let n = fe(e, t); return n.hydrateTriggers ??= new Map; }
function _I(e, t, n) { let o = [], r = [], i = [], s = []; for (let [a, c] of t) {
    let l = n.get(a);
    if (l !== void 0) {
        let u = c.data[Mt], d = l;
        for (let f = 0; f < u; f++) {
            if (d = d.previousSibling, d.nodeType !== Node.ELEMENT_NODE)
                continue;
            let p = { el: d, blockName: a };
            c.hydrate.idle && o.push(p), c.hydrate.immediate && s.push(p), c.hydrate.timer !== null && (p.delay = c.hydrate.timer, r.push(p)), c.hydrate.viewport && (typeof c.hydrate.viewport != "boolean" && (p.intersectionObserverOptions = c.hydrate.viewport), i.push(p));
        }
    }
} SR(e, o), RR(e, s), bR(e, i), AR(e, r); }
function SR(e, t) { for (let n of t) {
    let o = e.get(St), i = ec(() => Rt(e, n.blockName), e);
    o.addCleanupFn(n.blockName, i);
} }
function bR(e, t) { if (t.length > 0) {
    let n = e.get(St);
    for (let o of t) {
        let r = jf(o.el, () => Rt(e, o.blockName), e, o.intersectionObserverOptions);
        n.addCleanupFn(o.blockName, r);
    }
} }
function AR(e, t) { for (let n of t) {
    let o = e.get(St), r = () => Rt(e, n.blockName), s = tc(n.delay)(r, e);
    o.addCleanupFn(n.blockName, s);
} }
function RR(e, t) { for (let n of t)
    Rt(e, n.blockName); }
function SI(e, t, n, o, r, i, s, a, c, l) { let u = g(), d = A(), f = e + I, p = _n(u, d, e, null, 0, 0), h = u[P], y = li(h); if (d.firstCreatePass) {
    J("NgDefer");
    let ht = { primaryTmplIndex: t, loadingTmplIndex: o ?? null, placeholderTmplIndex: r ?? null, errorTmplIndex: i ?? null, placeholderBlockConfig: null, loadingBlockConfig: null, dependencyResolverFn: n ?? null, loadingState: oe.NOT_STARTED, loadingPromise: null, providers: null, hydrateTriggers: null, debug: null, flags: l ?? 0 };
    c?.(d, ht, a, s), eR(d, f, ht);
} let E = u[f]; bE(E, p, u); let T = null, k = null; if (E[Re]?.length > 0) {
    let ht = E[Re][0].data;
    k = ht[va] ?? null, T = ht[si];
} let te = [null, Zr.Initial, null, null, null, null, k, T, null, null]; XA(u, f, te); let We = null; k !== null && y && (We = h.get(St), We.add(k, { lView: u, tNode: p, lContainer: E })); let Oe = () => { iI(te), k !== null && We?.cleanup([k]); }; vi(0, te, () => rs(u, Oe)), gr(u, Oe); }
function bI(e) { let t = g(), n = ke(); if (!X(0, t, n))
    return; let o = ve(); if (Y(t, o, e)) {
    let r = R(null);
    try {
        let i = !!e, a = Te(t, n)[At];
        i === !1 && a === Zr.Initial ? Bo(t, n) : i === !0 && (a === Zr.Initial || a === Z.Placeholder) && Ce(0, t, n);
    }
    finally {
        R(r);
    }
} }
function AI(e) { let t = g(), n = ke(); if (!X(1, t, n))
    return; let o = ve(); if (Y(t, o, e)) {
    let r = R(null);
    try {
        let i = !!e, s = t[m], a = fe(s, n);
        i === !0 && a.loadingState === oe.NOT_STARTED && Di(a, t, n);
    }
    finally {
        R(r);
    }
} }
function RI(e) { let t = g(), n = ke(); if (!X(2, t, n))
    return; let o = ve(), r = A(); if (Kt(r, n).set(6, null), Y(t, o, e))
    if (typeof ngServerMode < "u" && ngServerMode)
        Ce(2, t, n);
    else {
        let s = t[P], a = R(null);
        try {
            if (!!e === !0) {
                let u = Te(t, n)[Xa];
                Rt(s, u);
            }
        }
        finally {
            R(a);
        }
    } }
function kI() { let e = g(), t = _(); if (!X(2, e, t))
    return; Kt(A(), t).set(7, null), typeof ngServerMode < "u" && ngServerMode && Ce(2, e, t); }
function OI() { let e = g(), t = _(); X(0, e, t) && CI(ec); }
function xI() { let e = g(), t = _(); X(1, e, t) && MI(ec); }
function PI() { let e = g(), t = _(); if (!X(2, e, t))
    return; Kt(A(), t).set(0, null), typeof ngServerMode < "u" && ngServerMode ? Ce(2, e, t) : NI(ec, e, t); }
function LI() { let e = g(), t = _(); if (!X(0, e, t))
    return; fe(e[m], t).loadingTmplIndex === null && Bo(e, t), Ce(0, e, t); }
function FI() { let e = g(), t = _(); if (!X(1, e, t))
    return; let n = e[m], o = fe(n, t); o.loadingState === oe.NOT_STARTED && oc(o, e, t); }
function jI() { let e = g(), t = _(); if (!X(2, e, t))
    return; if (Kt(A(), t).set(1, null), typeof ngServerMode < "u" && ngServerMode)
    Ce(2, e, t);
else {
    let o = e[P], i = Te(e, t)[Xa];
    Rt(o, i);
} }
function VI(e) { let t = g(), n = _(); X(0, t, n) && CI(tc(e)); }
function HI(e) { let t = g(), n = _(); X(1, t, n) && MI(tc(e)); }
function BI(e) { let t = g(), n = _(); if (!X(2, t, n))
    return; Kt(A(), n).set(5, { type: 5, delay: e }), typeof ngServerMode < "u" && ngServerMode ? Ce(2, t, n) : NI(tc(e), t, n); }
function $I(e, t) { let n = g(), o = _(); X(0, n, o) && (Bo(n, o), typeof ngServerMode < "u" && ngServerMode || Ho(n, o, e, t, sy, () => Ce(0, n, o), 0)); }
function UI(e, t) { let n = g(), o = _(); if (!X(1, n, o))
    return; let r = n[m], i = fe(r, o); i.loadingState === oe.NOT_STARTED && Ho(n, o, e, t, sy, () => Di(i, n, o), 1); }
function qI() { let e = g(), t = _(); if (!X(2, e, t))
    return; Kt(A(), t).set(4, null), typeof ngServerMode < "u" && ngServerMode && Ce(2, e, t); }
function GI(e, t) { let n = g(), o = _(); X(0, n, o) && (Bo(n, o), typeof ngServerMode < "u" && ngServerMode || Ho(n, o, e, t, iy, () => Ce(0, n, o), 0)); }
function WI(e, t) { let n = g(), o = _(); if (!X(1, n, o))
    return; let r = n[m], i = fe(r, o); i.loadingState === oe.NOT_STARTED && Ho(n, o, e, t, iy, () => Di(i, n, o), 1); }
function zI() { let e = g(), t = _(); if (!X(2, e, t))
    return; Kt(A(), t).set(3, null), typeof ngServerMode < "u" && ngServerMode && Ce(2, e, t); }
function QI(e, t, n) { let o = g(), r = _(); X(0, o, r) && (Bo(o, r), typeof ngServerMode < "u" && ngServerMode || Ho(o, r, e, t, jf, () => Ce(0, o, r), 0, n)); }
function ZI(e, t, n) { let o = g(), r = _(); if (!X(1, o, r))
    return; let i = o[m], s = fe(i, r); s.loadingState === oe.NOT_STARTED && Ho(o, r, e, t, jf, () => Di(s, o, r), 1, n); }
function YI(e) { let t = g(), n = _(); if (!X(2, t, n))
    return; Kt(A(), n).set(2, e ? { type: 2, intersectionObserverOptions: e } : null), typeof ngServerMode < "u" && ngServerMode && Ce(2, t, n); }
function Qf(e, t) { let n = g(), o = ve(); if (Y(n, o, t)) {
    let r = A(), i = ke();
    if (Ha(i, r, n, e, t))
        De(i) && Nv(n, i.index);
    else {
        let a = ie(i, n);
        Fa(n[w], a, null, i.value, e, t, null);
    }
} return Qf; }
function Zf(e, t, n, o) { let r = g(), i = ve(); if (Y(r, i, t)) {
    let s = A(), a = ke();
    DS(a, r, e, t, n, o);
} return Zf; }
function Sr(e) { if (J("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !kn)
    return Sr; let t = g(); if (Sa(t))
    return Sr; let n = _(), o = t[P].get(q); return ba(Ws(t), n, () => kR(t, n, e, o)), xa(t[P]), of(t[P], Ws(t)), Sr; }
function kR(e, t, n, o) { let r = ie(t, e), i = e[w], s = sv(n), a = [], c = !1, l = d => { if (Vr(d) !== r)
    return; let f = d instanceof AnimationEvent ? "animationend" : "transitionend"; o.runOutsideAngular(() => { i.listen(r, f, u); }); }, u = d => { Vr(d) === r && (Xd(d, r) && (c = !0), OR(d, r, i)); }; if (s && s.length > 0) {
    o.runOutsideAngular(() => { a.push(i.listen(r, "animationstart", l)), a.push(i.listen(r, "transitionstart", l)); }), Q_(r, s, a);
    for (let d of s)
        i.addClass(r, d);
    o.runOutsideAngular(() => { requestAnimationFrame(() => { if (!c && (lv(r, En, kn), !En.has(r))) {
        for (let d of s)
            i.removeClass(r, d);
        Kd(r);
    } }); });
} }
function OR(e, t, n) { let o = fo.get(t); if (!(Vr(e) !== t || !o) && Xd(e, t)) {
    e.stopPropagation();
    for (let r of o.classList)
        n.removeClass(t, r);
    Kd(t);
} }
function br(e) { if (J("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !kn)
    return br; let t = g(); if (Sa(t))
    return br; let n = _(); return ba(Ws(t), n, () => xR(t, n, e)), xa(t[P]), of(t[P], Ws(t)), br; }
function xR(e, t, n) { let o = ie(t, e); n.call(e[$], { target: o, animationComplete: Z_ }); }
function Ar(e) { if (J("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !kn)
    return Ar; let t = g(); if (Sa(t))
    return Ar; let o = _(), r = t[P].get(q); return ba(Tn(t), o, () => PR(t, o, e, r)), xa(t[P]), Ar; }
function PR(e, t, n, o) { let { promise: r, resolve: i } = nc(), s = ie(t, e), a = e[w]; Cn.add(e[Ve]), (Tn(e).get(t.index).resolvers ??= []).push(i); let c = sv(n); return c && c.length > 0 ? LR(s, t, e, c, a, o) : i(), { promise: r, resolve: i }; }
function LR(e, t, n, o, r, i) { K_(e, r); let s = [], a = Tn(n).get(t.index)?.resolvers, c, l = !1, u = d => { if (!(Vr(d) !== e && d.type !== "animation-fallback") && (d.type === "animation-fallback" || Xd(d, e))) {
    if (l = !0, c && clearTimeout(c), d.type !== "animation-fallback" && d.stopPropagation(), En.delete(e), ju(t, e), Array.isArray(t.projection))
        for (let p of o)
            r.removeClass(e, p);
    Vu(a, s), Hu(n, t);
} }; i.runOutsideAngular(() => { s.push(r.listen(e, "animationend", u)), s.push(r.listen(e, "transitionend", u)); }), Jd(t, e); for (let d of o)
    r.addClass(e, d); i.runOutsideAngular(() => { requestAnimationFrame(() => { if (l)
    return; lv(e, En, kn); let d = En.get(e); d ? (c = setTimeout(() => { u(new CustomEvent("animation-fallback")); }, d.duration + 50), s.push(() => clearTimeout(c))) : (ju(t, e), Vu(a, s), Hu(n, t)); }); }); }
function na(e) { if (J("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !kn)
    return na; let t = g(), n = _(); Cn.add(t[Ve]); let o = t[P].get(q), r = t[P].get(iv); return ba(Tn(t), n, () => FR(t, n, e, o, r)), xa(t[P]), na; }
function FR(e, t, n, o, r) { let { promise: i, resolve: s } = nc(), a = ie(t, e), c = [], l = e[w], u = Sa(e); (Tn(e).get(t.index).resolvers ??= []).push(s); let d = Tn(e).get(t.index)?.resolvers; if (u)
    Es(e, t, a, d, c);
else {
    let f = setTimeout(() => Es(e, t, a, d, c), r), p = { target: a, animationComplete: () => { Es(e, t, a, d, c), clearTimeout(f); } };
    Jd(t, a), o.runOutsideAngular(() => { c.push(l.listen(a, "animationend", () => { Es(e, t, a, d, c), clearTimeout(f); }, { once: !0 })); }), n.call(e[$], p);
} return { promise: i, resolve: s }; }
function KI() { return g()[ee][$]; }
var id = class {
    destroy(t) { }
    updateValue(t, n) { }
    swap(t, n) { let o = Math.min(t, n), r = Math.max(t, n), i = this.detach(r); if (r - o > 1) {
        let s = this.detach(o);
        this.attach(o, i), this.attach(r, s);
    }
    else
        this.attach(o, i); }
    move(t, n) { this.attach(n, this.detach(t)); }
};
function su(e, t, n, o, r) { return e === n && Object.is(t, o) ? 1 : Object.is(r(e, t), r(n, o)) ? -1 : 0; }
function jR(e, t, n, o) { let r, i, s = 0, a = e.length - 1, c = void 0; if (Array.isArray(t)) {
    Kn(o);
    let l = t.length - 1;
    for (Kn(null); s <= a && s <= l;) {
        let u = e.at(s), d = t[s], f = su(s, u, s, d, n);
        if (f !== 0) {
            f < 0 && e.updateValue(s, d), s++;
            continue;
        }
        let p = e.at(a), h = t[l], y = su(a, p, l, h, n);
        if (y !== 0) {
            y < 0 && e.updateValue(a, h), a--, l--;
            continue;
        }
        let E = n(s, u), T = n(a, p), k = n(s, d);
        if (Object.is(k, T)) {
            let te = n(l, h);
            Object.is(te, E) ? (e.swap(s, a), e.updateValue(a, h), l--, a--) : e.move(a, s), e.updateValue(s, d), s++;
            continue;
        }
        if (r ??= new oa, i ??= Zg(e, s, a, n), sd(e, r, s, k))
            e.updateValue(s, d), s++, a++;
        else if (i.has(k))
            r.set(E, e.detach(s)), a--;
        else {
            let te = e.create(s, t[s]);
            e.attach(s, te), s++, a++;
        }
    }
    for (; s <= l;)
        Qg(e, r, n, s, t[s]), s++;
}
else if (t != null) {
    Kn(o);
    let l = t[Symbol.iterator]();
    Kn(null);
    let u = l.next();
    for (; !u.done && s <= a;) {
        let d = e.at(s), f = u.value, p = su(s, d, s, f, n);
        if (p !== 0)
            p < 0 && e.updateValue(s, f), s++, u = l.next();
        else {
            r ??= new oa, i ??= Zg(e, s, a, n);
            let h = n(s, f);
            if (sd(e, r, s, h))
                e.updateValue(s, f), s++, a++, u = l.next();
            else if (!i.has(h))
                e.attach(s, e.create(s, f)), s++, a++, u = l.next();
            else {
                let y = n(s, d);
                r.set(y, e.detach(s)), a--;
            }
        }
    }
    for (; !u.done;)
        Qg(e, r, n, e.length, u.value), u = l.next();
} for (; s <= a;)
    e.destroy(e.detach(a--)); r?.forEach(l => { e.destroy(l); }); }
function sd(e, t, n, o) { return t !== void 0 && t.has(o) ? (e.attach(n, t.get(o)), t.delete(o), !0) : !1; }
function Qg(e, t, n, o, r) { if (sd(e, t, o, n(o, r)))
    e.updateValue(o, r);
else {
    let i = e.create(o, r);
    e.attach(o, i);
} }
function Zg(e, t, n, o) { let r = new Set; for (let i = t; i <= n; i++)
    r.add(o(i, e.at(i))); return r; }
var oa = class {
    kvMap = new Map;
    _vMap = void 0;
    has(t) { return this.kvMap.has(t); }
    delete(t) { if (!this.has(t))
        return !1; let n = this.kvMap.get(t); return this._vMap !== void 0 && this._vMap.has(n) ? (this.kvMap.set(t, this._vMap.get(n)), this._vMap.delete(n)) : this.kvMap.delete(t), !0; }
    get(t) { return this.kvMap.get(t); }
    set(t, n) { if (this.kvMap.has(t)) {
        let o = this.kvMap.get(t);
        this._vMap === void 0 && (this._vMap = new Map);
        let r = this._vMap;
        for (; r.has(o);)
            o = r.get(o);
        r.set(o, n);
    }
    else
        this.kvMap.set(t, n); }
    forEach(t) { for (let [n, o] of this.kvMap)
        if (t(o, n), this._vMap !== void 0) {
            let r = this._vMap;
            for (; r.has(o);)
                o = r.get(o), t(o, n);
        } }
};
function JI(e, t, n, o, r, i, s, a) { J("NgControlFlow"); let c = g(), l = A(), u = ge(l.consts, i); return _n(c, l, e, t, n, o, r, u, 256, s, a), rc; }
function rc(e, t, n, o, r, i, s, a) { J("NgControlFlow"); let c = g(), l = A(), u = ge(l.consts, i); return _n(c, l, e, t, n, o, r, u, 512, s, a), rc; }
function XI(e, t) { J("NgControlFlow"); let n = g(), o = ve(), r = n[o] !== H ? n[o] : -1, i = r !== -1 ? ra(n, I + r) : void 0, s = 0; if (Y(n, o, e)) {
    let a = R(null);
    try {
        if (i !== void 0 && pf(i, s), e !== -1) {
            let c = I + e, l = ra(n, c), u = ud(n[m], c), d = cE(l, u, n), f = Po(n, u, t, { dehydratedView: d });
            Lo(l, f, s, Mn(u, d));
        }
    }
    finally {
        R(a);
    }
}
else if (i !== void 0) {
    let a = Fv(i, s);
    a !== void 0 && (a[$] = t);
} }
var ad = class {
    lContainer;
    $implicit;
    $index;
    constructor(t, n, o) { this.lContainer = t, this.$implicit = n, this.$index = o; }
    get $count() { return this.lContainer.length - G; }
};
function eD(e) { return e; }
function tD(e, t) { return t; }
var cd = class {
    hasEmptyBlock;
    trackByFn;
    liveCollection;
    constructor(t, n, o) { this.hasEmptyBlock = t, this.trackByFn = n, this.liveCollection = o; }
};
function nD(e, t, n, o, r, i, s, a, c, l, u, d, f) { J("NgControlFlow"); let p = g(), h = A(), y = c !== void 0, E = g(), T = a ? s.bind(E[ee][$]) : s, k = new cd(y, T); E[I + e] = k, _n(p, h, e + 1, t, n, o, r, ge(h.consts, i), 256), y && _n(p, h, e + 2, c, l, u, d, ge(h.consts, f), 512); }
var ld = class extends id {
    lContainer;
    hostLView;
    templateTNode;
    operationsCounter = void 0;
    needsIndexUpdate = !1;
    constructor(t, n, o) { super(), this.lContainer = t, this.hostLView = n, this.templateTNode = o; }
    get length() { return this.lContainer.length - G; }
    at(t) { return this.getLView(t)[$].$implicit; }
    attach(t, n) { let o = n[ue]; this.needsIndexUpdate ||= t !== this.length, Lo(this.lContainer, n, t, Mn(this.templateTNode, o)), VR(this.lContainer, t); }
    detach(t) { return this.needsIndexUpdate ||= t !== this.length - 1, HR(this.lContainer, t), BR(this.lContainer, t); }
    create(t, n) { let o = qr(this.lContainer, this.templateTNode.tView.ssrId); return Po(this.hostLView, this.templateTNode, new ad(this.lContainer, n, t), { dehydratedView: o }); }
    destroy(t) { hi(t[m], t); }
    updateValue(t, n) { this.getLView(t)[$].$implicit = n; }
    reset() { this.needsIndexUpdate = !1; }
    updateIndexes() { if (this.needsIndexUpdate)
        for (let t = 0; t < this.length; t++)
            this.getLView(t)[$].$index = t; }
    getLView(t) { return $R(this.lContainer, t); }
};
function oD(e) { let t = R(null), n = de(); try {
    let o = g(), r = o[m], i = o[n], s = n + 1, a = ra(o, s);
    if (i.liveCollection === void 0) {
        let l = ud(r, s);
        i.liveCollection = new ld(a, o, l);
    }
    else
        i.liveCollection.reset();
    let c = i.liveCollection;
    if (jR(c, e, i.trackByFn, t), c.updateIndexes(), i.hasEmptyBlock) {
        let l = ve(), u = c.length === 0;
        if (Y(o, l, u)) {
            let d = n + 2, f = ra(o, d);
            if (u) {
                let p = ud(r, d), h = cE(f, p, o), y = Po(o, p, void 0, { dehydratedView: h });
                Lo(f, y, 0, Mn(p, h));
            }
            else
                r.firstUpdatePass && za(f), pf(f, 0);
        }
    }
}
finally {
    R(t);
} }
function ra(e, t) { return e[t]; }
function VR(e, t) { if (e.length <= G)
    return; let n = G + t, o = e[n], r = o ? o[it] : void 0; if (o && r && r.detachedLeaveAnimationFns && r.detachedLeaveAnimationFns.length > 0) {
    let i = o[P];
    rS(i, r), Cn.delete(o[Ve]), r.detachedLeaveAnimationFns = void 0;
} }
function HR(e, t) { if (e.length <= G)
    return; let n = G + t, o = e[n], r = o ? o[it] : void 0; r && r.leave && r.leave.size > 0 && (r.detachedLeaveAnimationFns = []); }
function BR(e, t) { return Br(e, t); }
function $R(e, t) { return Fv(e, t); }
function ud(e, t) { return Vt(e, t); }
function Yf(e, t, n) { let o = g(), r = ve(); if (Y(o, r, t)) {
    let i = A(), s = ke();
    lf(s, o, e, t, o[w], n);
} return Yf; }
function dd(e, t, n, o, r) { Ha(t, e, n, r ? "class" : "style", o); }
function Yr(e, t, n, o) { let r = g(), i = r[m], s = e + I, a = i.firstCreatePass ? Ef(s, r, 2, t, df, is(), n, o) : i.data[s]; if (De(a)) {
    let c = r[je].tracingService;
    if (c && c.componentCreate) {
        let l = i.data[a.directiveStart + a.componentOffset];
        return c.componentCreate(Tf(l), () => (Yg(e, t, r, a, o), Yr));
    }
} return Yg(e, t, r, a, o), Yr; }
function Yg(e, t, n, o, r) { if (ja(o, n, e, t, Xf), Un(o)) {
    let i = n[m];
    La(i, n, o), jd(i, o, n);
} r != null && xo(n, o); }
function ic() { let e = A(), t = _(), n = Va(t); return e.firstCreatePass && If(e, n), El(n) && Tl(), vl(), n.classesWithoutHost != null && _N(n) && dd(e, n, g(), n.classesWithoutHost, !0), n.stylesWithoutHost != null && SN(n) && dd(e, n, g(), n.stylesWithoutHost, !1), ic; }
function Kf(e, t, n, o) { return Yr(e, t, n, o), ic(), Kf; }
function sc(e, t, n, o) { let r = g(), i = r[m], s = e + I, a = i.firstCreatePass ? gE(s, i, 2, t, n, o) : i.data[s]; return ja(a, r, e, t, Xf), o != null && xo(r, a), sc; }
function ac() { let e = _(), t = Va(e); return El(t) && Tl(), vl(), ac; }
function Jf(e, t, n, o) { return sc(e, t, n, o), ac(), Jf; }
var Xf = (e, t, n, o, r) => (Je(!0), Na(t[w], o, Fl()));
function UR(e, t, n, o, r) { let i = !Ma(t, n); if (Je(i), i)
    return Na(t[w], o, Fl()); let s = t[ue], a = mi(s, e, t, n); return Dy(s, r) && Ta(s, r, a.nextSibling), s && (Dd(n) || Um(a)) && De(n) && (Bh(n), $y(a)), a; }
function rD() { Xf = UR; }
function cc(e, t, n) { let o = g(), r = o[m], i = e + I, s = r.firstCreatePass ? Ef(i, o, 8, "ng-container", df, is(), t, n) : r.data[i]; if (ja(s, o, e, "ng-container", op), Un(s)) {
    let a = o[m];
    La(a, o, s), jd(a, s, o);
} return n != null && xo(o, s), cc; }
function Ti() { let e = A(), t = _(), n = Va(t); return e.firstCreatePass && If(e, n), Ti; }
function ep(e, t, n) { return cc(e, t, n), Ti(), ep; }
function lc(e, t, n) { let o = g(), r = o[m], i = e + I, s = r.firstCreatePass ? gE(i, r, 8, "ng-container", t, n) : r.data[i]; return ja(s, o, e, "ng-container", op), n != null && xo(o, s), lc; }
function tp() { let e = _(), t = Va(e); return Ti; }
function np(e, t, n) { return lc(e, t, n), tp(), np; }
var op = (e, t, n, o, r) => (Je(!0), $d(t[w], ""));
function qR(e, t, n, o, r) { let i, s = !Ma(t, n); if (Je(s), s)
    return $d(t[w], ""); let a = t[ue], c = mi(a, e, t, n), l = Iy(a, r); return Ta(a, r, c), i = Ga(l, c), i; }
function iD() { op = qR; }
function sD() { return g(); }
function rp(e, t, n) { let o = g(), r = ve(); if (Y(o, r, t)) {
    let i = A(), s = ke();
    uf(s, o, e, t, o[w], n);
} return rp; }
function ip(e, t, n) { let o = g(), r = ve(); if (Y(o, r, t)) {
    let i = A(), s = ke(), a = as(i.data), c = wv(a, s, o);
    uf(s, o, e, t, c, n);
} return ip; }
var Dr = void 0;
function GR(e) { let t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length; return t === 1 && n === 0 ? 1 : 5; }
var WR = ["en", [["a", "p"], ["AM", "PM"]], [["AM", "PM"]], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], Dr, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], Dr, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm\u202Fa", "h:mm:ss\u202Fa", "h:mm:ss\u202Fa z", "h:mm:ss\u202Fa zzzz"], ["{1}, {0}", Dr, Dr, Dr], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", GR], lo = {};
function zR(e, t, n) { typeof t != "string" && (n = t, t = e[Eo.LocaleId]), t = t.toLowerCase().replace(/_/g, "-"), lo[t] = e, n && (lo[t][Eo.ExtraData] = n); }
function sp(e) { let t = YR(e), n = Kg(t); if (n)
    return n; let o = t.split("-")[0]; if (n = Kg(o), n)
    return n; if (o === "en")
    return WR; throw new D(701, !1); }
function QR(e) { return sp(e)[Eo.CurrencyCode] || null; }
function aD(e) { return sp(e)[Eo.PluralCase]; }
function Kg(e) { return e in lo || (lo[e] = Se.ng && Se.ng.common && Se.ng.common.locales && Se.ng.common.locales[e]), lo[e]; }
function ZR() { lo = {}; }
var Eo = (function (e) { return e[e.LocaleId = 0] = "LocaleId", e[e.DayPeriodsFormat = 1] = "DayPeriodsFormat", e[e.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", e[e.DaysFormat = 3] = "DaysFormat", e[e.DaysStandalone = 4] = "DaysStandalone", e[e.MonthsFormat = 5] = "MonthsFormat", e[e.MonthsStandalone = 6] = "MonthsStandalone", e[e.Eras = 7] = "Eras", e[e.FirstDayOfWeek = 8] = "FirstDayOfWeek", e[e.WeekendRange = 9] = "WeekendRange", e[e.DateFormat = 10] = "DateFormat", e[e.TimeFormat = 11] = "TimeFormat", e[e.DateTimeFormat = 12] = "DateTimeFormat", e[e.NumberSymbols = 13] = "NumberSymbols", e[e.NumberFormats = 14] = "NumberFormats", e[e.CurrencyCode = 15] = "CurrencyCode", e[e.CurrencySymbol = 16] = "CurrencySymbol", e[e.CurrencyName = 17] = "CurrencyName", e[e.Currencies = 18] = "Currencies", e[e.Directionality = 19] = "Directionality", e[e.PluralCase = 20] = "PluralCase", e[e.ExtraData = 21] = "ExtraData", e; })(Eo || {});
function YR(e) { return e.toLowerCase().replace(/_/g, "-"); }
var KR = ["zero", "one", "two", "few", "many"];
function JR(e, t) { let n = aD(t)(parseInt(e, 10)), o = KR[n]; return o !== void 0 ? o : "other"; }
var Ci = "en-US", XR = "USD", cD = { marker: "element" }, lD = { marker: "ICU" }, Dt = (function (e) { return e[e.SHIFT = 2] = "SHIFT", e[e.APPEND_EAGERLY = 1] = "APPEND_EAGERLY", e[e.COMMENT = 2] = "COMMENT", e; })(Dt || {}), uD = Ci;
function dD(e) { typeof e == "string" && (uD = e.toLowerCase().replace(/_/g, "-")); }
function ek() { return uD; }
var Kr = 0, Rr = 0;
function tk(e) { e && (Kr = Kr | 1 << Math.min(Rr, 31)), Rr++; }
function nk(e, t, n) { if (Rr > 0) {
    let o = e.data[n], r = Array.isArray(o) ? o : o.update, i = lt() - Rr - 1;
    gD(e, t, r, i, Kr);
} Kr = 0, Rr = 0; }
function fD(e, t, n) { let o = e[w]; switch (n) {
    case Node.COMMENT_NODE: return $d(o, t);
    case Node.TEXT_NODE: return Bd(o, t);
    case Node.ELEMENT_NODE: return Na(o, t, null);
} }
var kr = (e, t, n, o) => (Je(!0), fD(e, n, o));
function ok(e, t, n, o) { let r = e[ue], i = t - I, s = !Wa() || !r || mr() || Ca(r, i); return Je(s), s ? fD(e, n, o) : Wv(r, i); }
function pD() { kr = ok; }
function rk(e, t, n, o) { let r = e[w]; for (let i = 0; i < t.length; i++) {
    let s = t[i++], a = t[i], c = (s & Dt.COMMENT) === Dt.COMMENT, l = (s & Dt.APPEND_EAGERLY) === Dt.APPEND_EAGERLY, u = s >>> Dt.SHIFT, d = e[u], f = !1;
    d === null && (d = e[u] = kr(e, u, a, c ? Node.COMMENT_NODE : Node.TEXT_NODE), f = vr()), l && n !== null && f && Dn(r, n, d, o, !1);
} }
function hD(e, t, n, o) { let r = n[w], i = null, s; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "string") {
        let l = t[++a];
        n[l] === null && (n[l] = kr(n, l, c, Node.TEXT_NODE));
    }
    else if (typeof c == "number")
        switch (c & 1) {
            case 0:
                let l = ab(c);
                i === null && (i = l, s = r.parentNode(o));
                let u, d;
                if (l === i ? (u = o, d = s) : (u = null, d = L(n[l])), d !== null) {
                    let y = cb(c), E = n[y];
                    Dn(r, d, E, u, !1);
                    let T = Nr(e, y);
                    if (T !== null && typeof T == "object") {
                        let k = qa(T, n);
                        k !== null && hD(e, T.create[k], n, n[T.anchorIdx]);
                    }
                }
                break;
            case 1:
                let f = c >>> 1, p = t[++a], h = t[++a];
                Fa(r, fn(f, n), null, null, p, h, null);
                break;
            default:
        }
    else
        switch (c) {
            case lD:
                let l = t[++a], u = t[++a];
                if (n[u] === null) {
                    let p = n[u] = kr(n, u, l, Node.COMMENT_NODE);
                    $e(p, n);
                }
                break;
            case cD:
                let d = t[++a], f = t[++a];
                if (n[f] === null) {
                    let p = n[f] = kr(n, f, d, Node.ELEMENT_NODE);
                    $e(p, n);
                }
                break;
            default:
        }
} }
function gD(e, t, n, o, r) { for (let i = 0; i < n.length; i++) {
    let s = n[i], a = n[++i];
    if (s & r) {
        let c = "";
        for (let l = i + 1; l <= i + a; l++) {
            let u = n[l];
            if (typeof u == "string")
                c += u;
            else if (typeof u == "number")
                if (u < 0)
                    c += b(t[o - u]);
                else {
                    let d = u >>> 2;
                    switch (u & 3) {
                        case 1:
                            let f = n[++l], p = n[++l], h = e.data[d];
                            typeof h == "string" ? Fa(t[w], t[d], null, h, f, c, p) : lf(h, t, f, c, t[w], p);
                            break;
                        case 0:
                            let y = t[d];
                            y !== null && Hy(t[w], y, c);
                            break;
                        case 2:
                            ik(e, Nr(e, d), t, c);
                            break;
                        case 3:
                            Jg(e, Nr(e, d), o, t);
                            break;
                    }
                }
        }
    }
    else {
        let c = n[i + 1];
        if (c > 0 && (c & 3) === 3) {
            let l = c >>> 2, u = Nr(e, l);
            t[u.currentCaseLViewIndex] < 0 && Jg(e, u, o, t);
        }
    }
    i += a;
} }
function Jg(e, t, n, o) { let r = o[t.currentCaseLViewIndex]; if (r !== null) {
    let i = Kr;
    r < 0 && (r = o[t.currentCaseLViewIndex] = ~r, i = -1), gD(e, o, t.update[r], n, i);
} }
function ik(e, t, n, o) { let r = sk(t, o); if (qa(t, n) !== r && (mD(e, t, n), n[t.currentCaseLViewIndex] = r === null ? null : ~r, r !== null)) {
    let s = n[t.anchorIdx];
    s && hD(e, t.create[r], n, s), wb(n, t.anchorIdx, r);
} }
function mD(e, t, n) { let o = qa(t, n); if (o !== null) {
    let r = t.remove[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i];
        if (s > 0) {
            let a = fn(s, n);
            a !== null && di(n[w], a);
        }
        else
            mD(e, Nr(e, ~s), n);
    }
} }
function sk(e, t) { let n = e.cases.indexOf(t); if (n === -1)
    switch (e.type) {
        case 1: {
            let o = JR(t, ek());
            n = e.cases.indexOf(o), n === -1 && o !== "other" && (n = e.cases.indexOf("other"));
            break;
        }
        case 0: {
            n = e.cases.indexOf("other");
            break;
        }
    } return n === -1 ? null : n; }
var ia = /�(\d+):?\d*�/gi, ak = /({\s*�\d+:?\d*�\s*,\s*\S{6}\s*,[\s\S]*})/gi, ck = /�(\d+)�/, yD = /^\s*(�\d+:?\d*�)\s*,\s*(select|plural)\s*,/, Or = "\uFFFD", lk = /�\/?\*(\d+:\d+)�/gi, uk = /�(\/?[#*]\d+):?\d*�/gi, dk = /\uE500/g;
function fk(e) { return e.replace(dk, " "); }
function pk(e, t, n, o, r, i) { let s = Gn(), a = [], c = [], l = [[]], u = [[]]; r = yk(r, i); let d = fk(r).split(uk); for (let f = 0; f < d.length; f++) {
    let p = d[f];
    if ((f & 1) === 0) {
        let h = fd(p);
        for (let y = 0; y < h.length; y++) {
            let E = h[y];
            if ((y & 1) === 0) {
                let T = E;
                T !== "" && hk(u[0], e, s, l[0], a, c, n, T);
            }
            else {
                let T = E;
                if (typeof T != "object")
                    throw new Error(`Unable to parse ICU expression in "${r}" message.`);
                let te = vD(e, s, l[0], n, a, "", !0).index;
                ID(u[0], e, n, c, t, T, te);
            }
        }
    }
    else {
        let h = p.charCodeAt(0) === 47, y = p.charCodeAt(h ? 1 : 0), E = I + Number.parseInt(p.substring(h ? 2 : 1));
        if (h)
            l.shift(), u.shift(), ct(Gn(), !1);
        else {
            let T = sb(e, l[0], E);
            l.unshift([]), ct(T, !0);
            let k = { kind: 2, index: E, children: [], type: y === 35 ? 0 : 1 };
            u[0].push(k), u.unshift(k.children);
        }
    }
} e.data[o] = { create: a, update: c, ast: u[0], parentTNodeIndex: t }; }
function vD(e, t, n, o, r, i, s) { let a = pi(e, o, 1, null), c = a << Dt.SHIFT, l = Gn(); t === l && (l = null), l === null && (c |= Dt.APPEND_EAGERLY), s && (c |= Dt.COMMENT, G_(ub)), r.push(c, i === null ? "" : i); let u = hf(e, a, s ? 32 : 1, i === null ? "" : i, null); $v(n, u); let d = u.index; return ct(u, !1), l !== null && t !== l && ib(l, d), u; }
function hk(e, t, n, o, r, i, s, a) { let c = a.match(ia), u = vD(t, n, o, s, r, c ? null : a, !1).index; c && sa(i, a, u, null, 0, null), e.push({ kind: 0, index: u }); }
function gk(e, t, n) { let r = _().index, i = []; if (e.firstCreatePass && e.data[t] === null) {
    for (let s = 0; s < n.length; s += 2) {
        let a = n[s], c = n[s + 1];
        if (c !== "") {
            if (ak.test(c))
                throw new Error(`ICU expressions are not supported in attributes. Message: "${c}".`);
            sa(i, c, r, a, mk(i), xu[a.toLowerCase()] ? ui : null);
        }
    }
    e.data[t] = i;
} }
function sa(e, t, n, o, r, i) { let s = e.length, a = s + 1; e.push(null, null); let c = s + 2, l = t.split(ia), u = 0; for (let d = 0; d < l.length; d++) {
    let f = l[d];
    if (d & 1) {
        let p = r + parseInt(f, 10);
        e.push(-1 - p), u = u | ED(p);
    }
    else
        f !== "" && e.push(f);
} return e.push(n << 2 | (o ? 1 : 0)), o && e.push(o, i), e[s] = u, e[a] = e.length - c, u; }
function mk(e) { let t = 0; for (let n = 0; n < e.length; n++) {
    let o = e[n];
    typeof o == "number" && o < 0 && t++;
} return t; }
function ED(e) { return 1 << Math.min(e, 31); }
function Xg(e) { let t, n = "", o = 0, r = !1, i; for (; (t = lk.exec(e)) !== null;)
    r ? t[0] === `${Or}/*${i}${Or}` && (o = t.index, r = !1) : (n += e.substring(o, t.index + t[0].length), i = t[1], r = !0); return n += e.slice(o), n; }
function yk(e, t) { if (qv(t))
    return Xg(e); {
    let n = e.indexOf(`:${t}${Or}`) + 2 + t.toString().length, o = e.search(new RegExp(`${Or}\\/\\*\\d+:${t}${Or}`));
    return Xg(e.substring(n, o));
} }
function ID(e, t, n, o, r, i, s) { let a = 0, c = { type: i.type, currentCaseLViewIndex: pi(t, n, 1, null), anchorIdx: s, cases: [], create: [], remove: [], update: [] }; Dk(o, i, s), rb(t, s, c); let l = i.values, u = []; for (let d = 0; d < l.length; d++) {
    let f = l[d], p = [];
    for (let y = 0; y < f.length; y++) {
        let E = f[y];
        if (typeof E != "string") {
            let T = p.push(E) - 1;
            f[y] = `<!--\uFFFD${T}\uFFFD-->`;
        }
    }
    let h = [];
    u.push(h), a = Ek(h, t, c, n, o, r, i.cases[d], f.join(""), p) | a;
} a && Tk(o, a, s), e.push({ kind: 3, index: s, cases: u, currentCaseLViewIndex: c.currentCaseLViewIndex }); }
function vk(e) { let t = [], n = [], o = 1, r = 0; e = e.replace(yD, function (s, a, c) { return c === "select" ? o = 0 : o = 1, r = parseInt(a.slice(1), 10), ""; }); let i = fd(e); for (let s = 0; s < i.length;) {
    let a = i[s++].trim();
    o === 1 && (a = a.replace(/\s*(?:=)?(\w+)\s*/, "$1")), a.length && t.push(a);
    let c = fd(i[s++]);
    t.length > n.length && n.push(c);
} return { type: o, mainBinding: r, cases: t, values: n }; }
function fd(e) { if (!e)
    return []; let t = 0, n = [], o = [], r = /[{}]/g; r.lastIndex = 0; let i; for (; i = r.exec(e);) {
    let a = i.index;
    if (i[0] == "}") {
        if (n.pop(), n.length == 0) {
            let c = e.substring(t, a);
            yD.test(c) ? o.push(vk(c)) : o.push(c), t = a + 1;
        }
    }
    else {
        if (n.length == 0) {
            let c = e.substring(t, a);
            o.push(c), t = a + 1;
        }
        n.push("{");
    }
} let s = e.substring(t); return o.push(s), o; }
function Ek(e, t, n, o, r, i, s, a, c) { let l = [], u = [], d = []; n.cases.push(s), n.create.push(l), n.remove.push(u), n.update.push(d); let p = xy(ha()).getInertBodyElement(a), h = Lu(p) || p; return h ? DD(e, t, n, o, r, l, u, d, h, i, c, 0) : 0; }
function DD(e, t, n, o, r, i, s, a, c, l, u, d) { let f = 0, p = c.firstChild; for (; p;) {
    let h = pi(t, o, 1, null);
    switch (p.nodeType) {
        case Node.ELEMENT_NODE:
            let y = p, E = y.tagName.toLowerCase();
            if (ku.hasOwnProperty(E)) {
                au(i, cD, E, l, h), t.data[h] = E;
                let We = y.attributes;
                for (let ht = 0; ht < We.length; ht++) {
                    let Xt = We.item(ht), Ai = Xt.name.toLowerCase();
                    !!Xt.value.match(ia) ? Ou.hasOwnProperty(Ai) && sa(a, Xt.value, h, Xt.name, 0, xu[Ai] ? ui : null) : Ou[Ai] && (xu[Ai] ? tm(i, h, Xt.name, "unsafe:blocked") : tm(i, h, Xt.name, Xt.value));
                }
                let Oe = { kind: 1, index: h, children: [] };
                e.push(Oe), f = DD(Oe.children, t, n, o, r, i, s, a, p, h, u, d + 1) | f, em(s, h, d);
            }
            break;
        case Node.TEXT_NODE:
            let T = p.textContent || "", k = T.match(ia);
            au(i, null, k ? "" : T, l, h), em(s, h, d), k && (f = sa(a, T, h, null, 0, null) | f), e.push({ kind: 0, index: h });
            break;
        case Node.COMMENT_NODE:
            let te = ck.exec(p.textContent || "");
            if (te) {
                let We = parseInt(te[1], 10), Oe = u[We];
                au(i, lD, "", l, h), ID(e, t, o, r, l, Oe, h), Ik(s, h, d);
            }
            break;
    }
    p = p.nextSibling;
} return f; }
function em(e, t, n) { n === 0 && e.push(t); }
function Ik(e, t, n) { n === 0 && (e.push(~t), e.push(t)); }
function Dk(e, t, n) { e.push(ED(t.mainBinding), 2, -1 - t.mainBinding, n << 2 | 2); }
function Tk(e, t, n) { e.push(t, 1, n << 2 | 3); }
function au(e, t, n, o, r) { t !== null && e.push(t), e.push(n, r, lb(0, o, r)); }
function tm(e, t, n, o) { e.push(t << 1 | 1, n, o); }
var nm = 0, Ck = /\[(�.+?�?)\]/, Mk = /\[(�.+?�?)\]|(�\/?\*\d+:\d+�)/g, Nk = /({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g, wk = /{([A-Z0-9_]+)}/g, _k = /�I18N_EXP_(ICU(_\d+)?)�/g, Sk = /\/\*/, bk = /\d+\:(\d+)/;
function Ak(e, t = {}) { let n = e; if (Ck.test(e)) {
    let o = {}, r = [nm];
    n = n.replace(Mk, (i, s, a) => { let c = s || a, l = o[c] || []; if (l.length || (c.split("|").forEach(y => { let E = y.match(bk), T = E ? parseInt(E[1], 10) : nm, k = Sk.test(y); l.push([T, k, y]); }), o[c] = l), !l.length)
        throw new Error(`i18n postprocess: unmatched placeholder - ${c}`); let u = r[r.length - 1], d = 0; for (let y = 0; y < l.length; y++)
        if (l[y][0] === u) {
            d = y;
            break;
        } let [f, p, h] = l[d]; return p ? r.pop() : u !== f && r.push(f), l.splice(d, 1), h; });
} return Object.keys(t).length && (n = n.replace(Nk, (o, r, i, s, a, c) => t.hasOwnProperty(i) ? `${r}${t[i]}${c}` : o), n = n.replace(wk, (o, r) => t.hasOwnProperty(r) ? t[r] : o), n = n.replace(_k, (o, r) => { if (t.hasOwnProperty(r)) {
    let i = t[r];
    if (!i.length)
        throw new Error(`i18n postprocess: unmatched ICU - ${o} with key: ${r}`);
    return i.shift();
} return o; })), n; }
function ap(e, t, n = -1) { let o = A(), r = g(), i = I + e, s = ge(o.consts, t), a = Gn(); if (o.firstCreatePass && pk(o, a === null ? 0 : a.index, r, i, s, n), o.type === 2) {
    let f = r[ee];
    f[N] |= 32;
}
else
    r[N] |= 32; let c = o.data[i], l = a === r[le] ? null : a, u = gv(o, l, r), d = a && a.type & 8 ? r[a.index] : null; Ib(r, i, a, n), rk(r, c.create, u, d), Rl(!0); }
function cp() { Rl(!1); }
function TD(e, t, n) { ap(e, t, n), cp(); }
function CD(e, t) { let n = A(), o = ge(n.consts, t); gk(n, e + I, o); }
function lp(e) { let t = g(); return tk(Y(t, ve(), e)), lp; }
function MD(e) { nk(A(), g(), e + I); }
function ND(e, t = {}) { return Ak(e, t); }
function up(e, t, n) { let o = g(), r = A(), i = _(); return pp(r, o, o[w], i, e, t, n), up; }
function dp(e, t) { let n = _(), o = g(), r = A(), i = as(r.data), s = wv(i, n, o); return pp(r, o, s, n, e, t), dp; }
function fp(e, t, n) { let o = g(), r = A(), i = _(); return (i.type & 3 || n) && Df(i, r, o, n, o[w], e, t, Qt(i, o, t)), fp; }
function pp(e, t, n, o, r, i, s) { let a = !0, c = null; if ((o.type & 3 || s) && (c ??= Qt(o, t, i), Df(o, e, t, s, n, r, i, c) && (a = !1)), a) {
    let l = o.outputs?.[r], u = o.hostDirectiveOutputs?.[r];
    if (u && u.length)
        for (let d = 0; d < u.length; d += 2) {
            let f = u[d], p = u[d + 1];
            c ??= Qt(o, t, i), go(o, t, f, p, r, c);
        }
    if (l && l.length)
        for (let d of l)
            c ??= Qt(o, t, i), go(o, t, d, r, r, c);
} }
function wD(e = 1) { return Qh(e); }
function Rk(e, t) { let n = null, o = L_(e); for (let r = 0; r < t.length; r++) {
    let i = t[r];
    if (i === "*") {
        n = r;
        continue;
    }
    if (o === null ? ev(e, i, !0) : V_(o, i))
        return r;
} return n; }
function _D(e) { let t = g()[ee][le]; if (!t.projection) {
    let n = e ? e.length : 1, o = t.projection = lr(n, null), r = o.slice(), i = t.child;
    for (; i !== null;) {
        if (i.type !== 128) {
            let s = e ? Rk(i, e) : 0;
            s !== null && (r[s] ? r[s].projectionNext = i : o[s] = i, r[s] = i);
        }
        i = i.next;
    }
} }
function SD(e, t = 0, n, o, r, i) { let s = g(), a = A(), c = o ? e + 1 : null; c !== null && _n(s, a, c, o, r, i, null, n); let l = xn(a, I + e, 16, null, n || null); l.projection === null && (l.projection = t), _l(); let d = !s[ue] || mr(); s[ee][le].projection[l.projection] === null && c !== null ? kk(s, a, c) : d && !Ao(l) && dS(a, s, l); }
function kk(e, t, n) { let o = I + n, r = t.data[o], i = e[o], s = qr(i, r.tView.ssrId), a = Po(e, r, void 0, { dehydratedView: s }); Lo(i, a, 0, Mn(r, s)); }
function hp(e, t, n, o) { return PE(e, t, n, o), hp; }
function gp(e, t, n) { return xE(e, t, n), gp; }
function bD(e) { let t = g(), n = A(), o = cs(); yr(o + 1); let r = Nf(n, o); if (e.dirty && Lh(t) === ((r.metadata.flags & 2) === 2)) {
    if (r.matches === null)
        e.reset([]);
    else {
        let i = FE(t, o);
        e.reset(i, $m), e.notifyOnChanges();
    }
    return !0;
} return !1; }
function AD() { return Mf(g(), cs()); }
function mp(e, t, n, o, r) { return jE(t, PE(e, n, o, r)), mp; }
function yp(e, t, n, o) { return jE(e, xE(t, n, o)), yp; }
function RD(e = 1) { yr(cs() + e); }
function kD(e) { let t = Sl(); return Ht(t, I + e); }
function Ts(e, t) { return e << 17 | t << 2; }
function Sn(e) { return e >> 17 & 32767; }
function Ok(e) { return (e & 2) == 2; }
function xk(e, t) { return e & 131071 | t << 17; }
function pd(e) { return e | 2; }
function Io(e) { return (e & 131068) >> 2; }
function cu(e, t) { return e & -131069 | t << 2; }
function Pk(e) { return (e & 1) === 1; }
function hd(e) { return e | 1; }
function Lk(e, t, n, o, r, i) { let s = i ? t.classBindings : t.styleBindings, a = Sn(s), c = Io(s); e[o] = n; let l = !1, u; if (Array.isArray(n)) {
    let d = n;
    u = d[1], (u === null || Bn(d, u) > 0) && (l = !0);
}
else
    u = n; if (r)
    if (c !== 0) {
        let f = Sn(e[a + 1]);
        e[o + 1] = Ts(f, a), f !== 0 && (e[f + 1] = cu(e[f + 1], o)), e[a + 1] = xk(e[a + 1], o);
    }
    else
        e[o + 1] = Ts(a, 0), a !== 0 && (e[a + 1] = cu(e[a + 1], o)), a = o;
else
    e[o + 1] = Ts(c, 0), a === 0 ? a = o : e[c + 1] = cu(e[c + 1], o), c = o; l && (e[o + 1] = pd(e[o + 1])), om(e, u, o, !0), om(e, u, o, !1), Fk(t, u, e, o, i), s = Ts(a, c), i ? t.classBindings = s : t.styleBindings = s; }
function Fk(e, t, n, o, r) { let i = r ? e.residualClasses : e.residualStyles; i != null && typeof t == "string" && Bn(i, t) >= 0 && (n[o + 1] = hd(n[o + 1])); }
function om(e, t, n, o) { let r = e[n + 1], i = t === null, s = o ? Sn(r) : Io(r), a = !1; for (; s !== 0 && (a === !1 || i);) {
    let c = e[s], l = e[s + 1];
    jk(c, t) && (a = !0, e[s + 1] = o ? hd(l) : pd(l)), s = o ? Sn(l) : Io(l);
} a && (e[n + 1] = o ? pd(r) : hd(r)); }
function jk(e, t) { return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t ? !0 : Array.isArray(e) && typeof t == "string" ? Bn(e, t) >= 0 : !1; }
var se = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function OD(e) { return e.substring(se.key, se.keyEnd); }
function Vk(e) { return e.substring(se.value, se.valueEnd); }
function Hk(e) { return LD(e), xD(e, Do(e, 0, se.textEnd)); }
function xD(e, t) { let n = se.textEnd; return n === t ? -1 : (t = se.keyEnd = $k(e, se.key = t, n), Do(e, t, n)); }
function Bk(e) { return LD(e), PD(e, Do(e, 0, se.textEnd)); }
function PD(e, t) { let n = se.textEnd, o = se.key = Do(e, t, n); return n === o ? -1 : (o = se.keyEnd = Uk(e, o, n), o = rm(e, o, n, 58), o = se.value = Do(e, o, n), o = se.valueEnd = qk(e, o, n), rm(e, o, n, 59)); }
function LD(e) { se.key = 0, se.keyEnd = 0, se.value = 0, se.valueEnd = 0, se.textEnd = e.length; }
function Do(e, t, n) { for (; t < n && e.charCodeAt(t) <= 32;)
    t++; return t; }
function $k(e, t, n) { for (; t < n && e.charCodeAt(t) > 32;)
    t++; return t; }
function Uk(e, t, n) { let o; for (; t < n && ((o = e.charCodeAt(t)) === 45 || o === 95 || (o & -33) >= 65 && (o & -33) <= 90 || o >= 48 && o <= 57);)
    t++; return t; }
function rm(e, t, n, o) { return t = Do(e, t, n), t < n && t++, t; }
function qk(e, t, n) { let o = -1, r = -1, i = -1, s = t, a = s; for (; s < n;) {
    let c = e.charCodeAt(s++);
    if (c === 59)
        return a;
    c === 34 || c === 39 ? a = s = im(e, c, s, n) : t === s - 4 && i === 85 && r === 82 && o === 76 && c === 40 ? a = s = im(e, 41, s, n) : c > 32 && (a = s), i = r, r = o, o = c & -33;
} return a; }
function im(e, t, n, o) { let r = -1, i = n; for (; i < o;) {
    let s = e.charCodeAt(i++);
    if (s == t && r !== 92)
        return i;
    s == 92 && r === 92 ? r = 0 : r = s;
} throw new Error; }
function vp(e, t, n) { return VD(e, t, n, !1), vp; }
function Ep(e, t) { return VD(e, t, null, !0), Ep; }
function FD(e) { HD(UD, Gk, e, !1); }
function Gk(e, t) { for (let n = Bk(t); n >= 0; n = PD(t, n))
    UD(e, OD(t), Vk(t)); }
function jD(e) { HD(Jk, Wk, e, !0); }
function Wk(e, t) { for (let n = Hk(t); n >= 0; n = xD(t, n))
    ur(e, OD(t), !0); }
function VD(e, t, n, o) { let r = g(), i = A(), s = ut(2); if (i.firstUpdatePass && $D(i, e, s, o), t !== H && Y(r, s, t)) {
    let a = i.data[de()];
    qD(i, a, r, r[w], e, r[s + 1] = eO(t, n), o, s);
} }
function HD(e, t, n, o) { let r = A(), i = ut(2); r.firstUpdatePass && $D(r, null, i, o); let s = g(); if (n !== H && Y(s, i, n)) {
    let a = r.data[de()];
    if (GD(a, o) && !BD(r, i)) {
        let c = o ? a.classesWithoutHost : a.stylesWithoutHost;
        c !== null && (n = Ui(c, n || "")), dd(r, a, s, n, o);
    }
    else
        Xk(r, a, s, s[w], s[i + 1], s[i + 1] = Kk(e, t, n), o, i);
} }
function BD(e, t) { return t >= e.expandoStartIndex; }
function $D(e, t, n, o) { let r = e.data; if (r[n + 1] === null) {
    let i = r[de()], s = BD(e, n);
    GD(i, o) && t === null && !s && (t = !1), t = zk(r, i, t, o), Lk(r, i, t, n, s, o);
} }
function zk(e, t, n, o) { let r = as(e), i = o ? t.residualClasses : t.residualStyles; if (r === null)
    (o ? t.classBindings : t.styleBindings) === 0 && (n = lu(null, e, t, n, o), n = Jr(n, t.attrs, o), i = null);
else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== r)
        if (n = lu(r, e, t, n, o), i === null) {
            let c = Qk(e, t, o);
            c !== void 0 && Array.isArray(c) && (c = lu(null, e, t, c[1], o), c = Jr(c, t.attrs, o), Zk(e, t, o, c));
        }
        else
            i = Yk(e, t, o);
} return i !== void 0 && (o ? t.residualClasses = i : t.residualStyles = i), n; }
function Qk(e, t, n) { let o = n ? t.classBindings : t.styleBindings; if (Io(o) !== 0)
    return e[Sn(o)]; }
function Zk(e, t, n, o) { let r = n ? t.classBindings : t.styleBindings; e[Sn(r)] = o; }
function Yk(e, t, n) { let o, r = t.directiveEnd; for (let i = 1 + t.directiveStylingLast; i < r; i++) {
    let s = e[i].hostAttrs;
    o = Jr(o, s, n);
} return Jr(o, t.attrs, n); }
function lu(e, t, n, o, r) { let i = null, s = n.directiveEnd, a = n.directiveStylingLast; for (a === -1 ? a = n.directiveStart : a++; a < s && (i = t[a], o = Jr(o, i.hostAttrs, r), i !== e);)
    a++; return e !== null && (n.directiveStylingLast = a), o; }
function Jr(e, t, n) { let o = n ? 1 : 2, r = -1; if (t !== null)
    for (let i = 0; i < t.length; i++) {
        let s = t[i];
        typeof s == "number" ? r = s : r === o && (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]), ur(e, s, n ? !0 : t[++i]));
    } return e === void 0 ? null : e; }
function Kk(e, t, n) { if (n == null || n === "")
    return F; let o = [], r = bt(n); if (Array.isArray(r))
    for (let i = 0; i < r.length; i++)
        e(o, r[i], !0);
else if (r instanceof Set)
    for (let i of r)
        e(o, i, !0);
else if (typeof r == "object")
    for (let i in r)
        r.hasOwnProperty(i) && e(o, i, r[i]);
else
    typeof r == "string" && t(o, r); return o; }
function UD(e, t, n) { ur(e, t, bt(n)); }
function Jk(e, t, n) { let o = String(t); o !== "" && !o.includes(" ") && ur(e, o, n); }
function Xk(e, t, n, o, r, i, s, a) { r === H && (r = F); let c = 0, l = 0, u = 0 < r.length ? r[0] : null, d = 0 < i.length ? i[0] : null; for (; u !== null || d !== null;) {
    let f = c < r.length ? r[c + 1] : void 0, p = l < i.length ? i[l + 1] : void 0, h = null, y;
    u === d ? (c += 2, l += 2, f !== p && (h = d, y = p)) : d === null || u !== null && u < d ? (c += 2, h = u) : (l += 2, h = d, y = p), h !== null && qD(e, t, n, o, h, y, s, a), u = c < r.length ? r[c] : null, d = l < i.length ? i[l] : null;
} }
function qD(e, t, n, o, r, i, s, a) { if (!(t.type & 3))
    return; let c = e.data, l = c[a + 1], u = Pk(l) ? sm(c, t, n, r, Io(l), s) : void 0; if (!aa(u)) {
    aa(i) || Ok(l) && (i = sm(c, null, n, r, a, s));
    let d = fn(de(), n);
    pS(o, s, d, r, i);
} }
function sm(e, t, n, o, r, i) { let s = t === null, a; for (; r > 0;) {
    let c = e[r], l = Array.isArray(c), u = l ? c[1] : c, d = u === null, f = n[r + 1];
    f === H && (f = d ? F : void 0);
    let p = d ? Yi(f, o) : u === o ? f : void 0;
    if (l && !aa(p) && (p = Yi(c, o)), aa(p) && (a = p, s))
        return a;
    let h = e[r + 1];
    r = s ? Sn(h) : Io(h);
} if (t !== null) {
    let c = i ? t.residualClasses : t.residualStyles;
    c != null && (a = Yi(c, o));
} return a; }
function aa(e) { return e !== void 0; }
function eO(e, t) { return e == null || e === "" || (typeof t == "string" ? e = e + t : typeof e == "object" && (e = er(bt(e)))), e; }
function GD(e, t) { return (e.flags & (t ? 8 : 16)) !== 0; }
function WD(e, t = "") { let n = g(), o = A(), r = e + I, i = o.firstCreatePass ? xn(o, r, 1, t, null) : o.data[r], s = zD(o, n, i, t); n[r] = s, vr() && af(o, n, s, i), ct(i, !1); }
var zD = (e, t, n, o) => (Je(!0), Bd(t[w], o));
function tO(e, t, n, o) { let r = !Ma(t, n); if (Je(r), r)
    return Bd(t[w], o); let i = t[ue]; return mi(i, e, t, n); }
function QD() { zD = tO; }
function ZD(e, t) { let n = !1, o = lt(); for (let i = 1; i < t.length; i += 2)
    n = Y(e, o++, t[i]) || n; if (Al(o), !n)
    return H; let r = t[0]; for (let i = 1; i < t.length; i += 2)
    r += b(t[i]) + (i + 1 !== t.length ? t[i + 1] : ""); return r; }
function YD(e, t, n, o = "") { return Y(e, ve(), n) ? t + b(n) + o : H; }
function KD(e, t, n, o, r, i = "") { let s = lt(), a = Nn(e, s, n, r); return ut(2), a ? t + b(n) + o + b(r) + i : H; }
function JD(e, t, n, o, r, i, s, a = "") { let c = lt(), l = Ka(e, c, n, r, s); return ut(3), l ? t + b(n) + o + b(r) + i + b(s) + a : H; }
function XD(e, t, n, o, r, i, s, a, c, l = "") { let u = lt(), d = qe(e, u, n, r, s, c); return ut(4), d ? t + b(n) + o + b(r) + i + b(s) + a + b(c) + l : H; }
function eT(e, t, n, o, r, i, s, a, c, l, u, d = "") { let f = lt(), p = qe(e, f, n, r, s, c); return p = Y(e, f + 4, u) || p, ut(5), p ? t + b(n) + o + b(r) + i + b(s) + a + b(c) + l + b(u) + d : H; }
function tT(e, t, n, o, r, i, s, a, c, l, u, d, f, p = "") { let h = lt(), y = qe(e, h, n, r, s, c); return y = Nn(e, h + 4, u, f) || y, ut(6), y ? t + b(n) + o + b(r) + i + b(s) + a + b(c) + l + b(u) + d + b(f) + p : H; }
function nT(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y = "") { let E = lt(), T = qe(e, E, n, r, s, c); return T = Ka(e, E + 4, u, f, h) || T, ut(7), T ? t + b(n) + o + b(r) + i + b(s) + a + b(c) + l + b(u) + d + b(f) + p + b(h) + y : H; }
function oT(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, E, T = "") { let k = lt(), te = qe(e, k, n, r, s, c); return te = qe(e, k + 4, u, f, h, E) || te, ut(8), te ? t + b(n) + o + b(r) + i + b(s) + a + b(c) + l + b(u) + d + b(f) + p + b(h) + y + b(E) + T : H; }
function Ip(e) { return uc("", e), Ip; }
function uc(e, t, n) { let o = g(), r = YD(o, e, t, n); return r !== H && kt(o, de(), r), uc; }
function Dp(e, t, n, o, r) { let i = g(), s = KD(i, e, t, n, o, r); return s !== H && kt(i, de(), s), Dp; }
function Tp(e, t, n, o, r, i, s) { let a = g(), c = JD(a, e, t, n, o, r, i, s); return c !== H && kt(a, de(), c), Tp; }
function Cp(e, t, n, o, r, i, s, a, c) { let l = g(), u = XD(l, e, t, n, o, r, i, s, a, c); return u !== H && kt(l, de(), u), Cp; }
function Mp(e, t, n, o, r, i, s, a, c, l, u) { let d = g(), f = eT(d, e, t, n, o, r, i, s, a, c, l, u); return f !== H && kt(d, de(), f), Mp; }
function Np(e, t, n, o, r, i, s, a, c, l, u, d, f) { let p = g(), h = tT(p, e, t, n, o, r, i, s, a, c, l, u, d, f); return h !== H && kt(p, de(), h), Np; }
function wp(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h) { let y = g(), E = nT(y, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); return E !== H && kt(y, de(), E), wp; }
function _p(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, E) { let T = g(), k = oT(T, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, E); return k !== H && kt(T, de(), k), _p; }
function Sp(e) { let t = g(), n = ZD(t, e); return n !== H && kt(t, de(), n), Sp; }
function kt(e, t, n) { let o = fn(t, e); Hy(e[w], o, n); }
function bp(e, t, n) { Bf(t) && (t = t()); let o = g(), r = ve(); if (Y(o, r, t)) {
    let i = A(), s = ke();
    lf(s, o, e, t, o[w], n);
} return bp; }
function rT(e, t) { let n = Bf(e); return n && e.set(t), n; }
function Ap(e, t) { let n = g(), o = A(), r = _(); return pp(o, n, n[w], r, e, t), Ap; }
var iT = {};
function Rp(e) { J("NgLet"); let t = A(), n = g(), o = e + I, r = xn(t, o, 128, null, null); return ct(r, !1), hr(t, n, o, iT), Rp; }
function sT(e) { let t = A(), n = g(), o = de(); return hr(t, n, o, e), e; }
function aT(e) { let t = Sl(), n = Ht(t, I + e); if (n === iT)
    throw new D(314, !1); return n; }
function cT(e, t) { let n = A(), o = g(), r = o[w], i = "data-ng-source-location"; for (let [s, a, c, l] of t) {
    let u = Vt(n, s + I), d = fn(s + I, o);
    if (!d.hasAttribute(i)) {
        let f = `${e}@o:${a},l:${c},c:${l}`;
        r.setAttribute(d, i, f);
    }
} }
function lT(e) { return Y(g(), ve(), e) ? b(e) : H; }
function uT(e, t, n = "") { return YD(g(), e, t, n); }
function dT(e, t, n, o, r = "") { return KD(g(), e, t, n, o, r); }
function fT(e, t, n, o, r, i, s = "") { return JD(g(), e, t, n, o, r, i, s); }
function pT(e, t, n, o, r, i, s, a, c = "") { return XD(g(), e, t, n, o, r, i, s, a, c); }
function hT(e, t, n, o, r, i, s, a, c, l, u = "") { return eT(g(), e, t, n, o, r, i, s, a, c, l, u); }
function gT(e, t, n, o, r, i, s, a, c, l, u, d, f = "") { return tT(g(), e, t, n, o, r, i, s, a, c, l, u, d, f); }
function mT(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h = "") { return nT(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); }
function yT(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, E = "") { return oT(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, E); }
function vT(e) { return ZD(g(), e); }
function ET(e, t, n) { let o = me() + e, r = g(); return r[o] === H ? et(r, o, t(n, r)) : Vo(r, o); }
function am(e, t, n) { let o = A(); o.firstCreatePass && IT(t, o.data, o.blueprint, He(e), n); }
function IT(e, t, n, o, r) { if (e = x(e), Array.isArray(e))
    for (let i = 0; i < e.length; i++)
        IT(e[i], t, n, o, r);
else {
    let i = A(), s = g(), a = _(), c = nn(e) ? e : x(e.provide), l = al(e), u = a.providerIndexes & 1048575, d = a.directiveStart, f = a.providerIndexes >> 20;
    if (nn(e) || !e.multi) {
        let p = new In(l, r, jo, null), h = du(c, t, r ? u : u + f, d);
        h === -1 ? (yu(Vs(a, s), i, c), uu(i, e, t.length), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(p), s.push(p)) : (n[h] = p, s[h] = p);
    }
    else {
        let p = du(c, t, u + f, d), h = du(c, t, u, u + f), y = p >= 0 && n[p], E = h >= 0 && n[h];
        if (r && !E || !r && !y) {
            yu(Vs(a, s), i, c);
            let T = rO(r ? oO : nO, n.length, r, o, l, e);
            !r && E && (n[h].providerFactory = T), uu(i, e, t.length, 0), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(T), s.push(T);
        }
        else {
            let T = DT(n[r ? h : p], l, !r && o);
            uu(i, e, p > -1 ? p : h, T);
        }
        !r && o && E && n[h].componentProviders++;
    }
} }
function uu(e, t, n, o) { let r = nn(t), i = Oh(t); if (r || i) {
    let c = (i ? x(t.useClass) : t).prototype.ngOnDestroy;
    if (c) {
        let l = e.destroyHooks || (e.destroyHooks = []);
        if (!r && t.multi) {
            let u = l.indexOf(n);
            u === -1 ? l.push(n, [o, c]) : l[u + 1].push(o, c);
        }
        else
            l.push(n, c);
    }
} }
function DT(e, t, n) { return n && e.componentProviders++, e.multi.push(t) - 1; }
function du(e, t, n, o) { for (let r = n; r < o; r++)
    if (t[r] === e)
        return r; return -1; }
function nO(e, t, n, o, r) { return gd(this.multi, []); }
function oO(e, t, n, o, r) { let i = this.multi, s; if (this.providerFactory) {
    let a = this.providerFactory.componentProviders, c = Pr(o, o[m], this.providerFactory.index, r);
    s = c.slice(0, a), gd(i, s);
    for (let l = a; l < c.length; l++)
        s.push(c[l]);
}
else
    s = [], gd(i, s); return s; }
function gd(e, t) { for (let n = 0; n < e.length; n++) {
    let o = e[n];
    t.push(o());
} return t; }
function rO(e, t, n, o, r, i) { let s = new In(e, n, jo, null); return s.multi = [], s.index = t, s.componentProviders = 0, DT(s, r, o && !n), s; }
function TT(e, t) { return n => { n.providersResolver = (o, r) => am(o, r ? r(e) : e, !1), t && (n.viewProvidersResolver = (o, r) => am(o, r ? r(t) : t, !0)); }; }
function CT(e) { return t => { e.length < 1 || (t.getExternalStyles = n => e.map(r => r + "?ngcomp" + (n ? "=" + encodeURIComponent(n) : "") + "&e=" + t.encapsulation)); }; }
function MT(e, t, n) { let o = e.\u0275cmp; o.directiveDefs = ta(t, zE), o.pipeDefs = ta(n, Qe); }
function NT(e, t) { return ft(() => { let n = Gi(e); n.declarations = Cs(t.declarations || F), n.imports = Cs(t.imports || F), n.exports = Cs(t.exports || F), t.bootstrap && (n.bootstrap = Cs(t.bootstrap)), ho.registerNgModule(e, t); }); }
function Cs(e) { if (typeof e == "function")
    return e; let t = Ze(e); return t.some(nr) ? () => t.map(x).map(cm) : t.map(cm); }
function cm(e) { return vf(e) ? e.ngModule : e; }
function wT(e, t) { let n = me() + e, o = g(); return o[n] === H ? et(o, n, t()) : Vo(o, n); }
function _T(e, t, n) { return LT(g(), me(), e, t, n); }
function ST(e, t, n, o) { return FT(g(), me(), e, t, n, o); }
function bT(e, t, n, o, r) { return jT(g(), me(), e, t, n, o, r); }
function AT(e, t, n, o, r, i, s) { return VT(g(), me(), e, t, n, o, r, i); }
function RT(e, t, n, o, r, i, s) { let a = me() + e, c = g(), l = qe(c, a, n, o, r, i); return Y(c, a + 4, s) || l ? et(c, a + 5, t(n, o, r, i, s)) : Vo(c, a + 5); }
function kT(e, t, n, o, r, i, s, a) { let c = me() + e, l = g(), u = qe(l, c, n, o, r, i); return Nn(l, c + 4, s, a) || u ? et(l, c + 6, t(n, o, r, i, s, a)) : Vo(l, c + 6); }
function OT(e, t, n, o, r, i, s, a, c) { let l = me() + e, u = g(), d = qe(u, l, n, o, r, i); return Ka(u, l + 4, s, a, c) || d ? et(u, l + 7, t(n, o, r, i, s, a, c)) : Vo(u, l + 7); }
function xT(e, t, n, o, r, i, s, a, c, l) { let u = me() + e, d = g(), f = qe(d, u, n, o, r, i); return qe(d, u + 4, s, a, c, l) || f ? et(d, u + 8, t(n, o, r, i, s, a, c, l)) : Vo(d, u + 8); }
function PT(e, t, n) { return HT(g(), me(), e, t, n); }
function Mi(e, t) { let n = e[t]; return n === H ? void 0 : n; }
function LT(e, t, n, o, r, i) { let s = t + n; return Y(e, s, r) ? et(e, s + 1, i ? o.call(i, r) : o(r)) : Mi(e, s + 1); }
function FT(e, t, n, o, r, i, s) { let a = t + n; return Nn(e, a, r, i) ? et(e, a + 2, s ? o.call(s, r, i) : o(r, i)) : Mi(e, a + 2); }
function jT(e, t, n, o, r, i, s, a) { let c = t + n; return Ka(e, c, r, i, s) ? et(e, c + 3, a ? o.call(a, r, i, s) : o(r, i, s)) : Mi(e, c + 3); }
function VT(e, t, n, o, r, i, s, a, c) { let l = t + n; return qe(e, l, r, i, s, a) ? et(e, l + 4, c ? o.call(c, r, i, s, a) : o(r, i, s, a)) : Mi(e, l + 4); }
function HT(e, t, n, o, r, i) { let s = t + n, a = !1; for (let c = 0; c < r.length; c++)
    Y(e, s++, r[c]) && (a = !0); return a ? et(e, s, o.apply(i, r)) : Mi(e, s); }
function BT(e, t) { let n = A(), o, r = e + I; n.firstCreatePass ? (o = iO(t, n.pipeRegistry), n.data[r] = o, o.onDestroy && (n.destroyHooks ??= []).push(r, o.onDestroy)) : o = n.data[r]; let i = o.factory || (o.factory = xt(o.type, !0)), s, a = Ie(jo); try {
    let c = js(!1), l = i();
    return js(c), hr(n, g(), r, l), l;
}
finally {
    Ie(a);
} }
function iO(e, t) { if (t)
    for (let n = t.length - 1; n >= 0; n--) {
        let o = t[n];
        if (e === o.name)
            return o;
    } }
function $T(e, t, n) { let o = e + I, r = g(), i = Ht(r, o); return Ni(r, o) ? LT(r, me(), t, i.transform, n, i) : i.transform(n); }
function UT(e, t, n, o) { let r = e + I, i = g(), s = Ht(i, r); return Ni(i, r) ? FT(i, me(), t, s.transform, n, o, s) : s.transform(n, o); }
function qT(e, t, n, o, r) { let i = e + I, s = g(), a = Ht(s, i); return Ni(s, i) ? jT(s, me(), t, a.transform, n, o, r, a) : a.transform(n, o, r); }
function GT(e, t, n, o, r, i) { let s = e + I, a = g(), c = Ht(a, s); return Ni(a, s) ? VT(a, me(), t, c.transform, n, o, r, i, c) : c.transform(n, o, r, i); }
function WT(e, t, n) { let o = e + I, r = g(), i = Ht(r, o); return Ni(r, o) ? HT(r, me(), t, i.transform, n, i) : i.transform.apply(i, n); }
function Ni(e, t) { return e[m].data[t].pure; }
function zT(e, t) { return Ua(e, t); }
function QT(e, t) { return () => { try {
    return ho.getComponentDependencies(e, t).dependencies;
}
catch (n) {
    throw console.error(`Computing dependencies in local compilation mode for the component "${e.name}" failed with the exception:`, n), n;
} }; }
function ZT(e, t) { let n = W(e); n !== null && (n.debugInfo = t); }
function YT(e, t, n) { let o = `./@ng/component?c=${e}&t=${encodeURIComponent(t)}`; return new URL(o, n).href; }
function KT(e, t, n, o, r = null, i = null) { let s = W(e); t.apply(null, [e, n, ...o]); let { newDef: a, oldDef: c } = sO(s, W(e)); if (e[rn] = a, c.tView) {
    let l = XN().values();
    for (let u of l)
        st(u) && u[Q] === null && Os(r, i, a, c, u);
} }
function sO(e, t) { let n = z({}, e); return { newDef: Object.assign(e, t, { directiveDefs: n.directiveDefs, pipeDefs: n.pipeDefs, setInput: n.setInput, type: n.type }), oldDef: n }; }
function Os(e, t, n, o, r) { let i = r[m]; if (i === o.tView) {
    cO(e, t, n, o, r);
    return;
} for (let s = I; s < i.bindingStartIndex; s++) {
    let a = r[s];
    if (K(a)) {
        ne(a[U]) && Os(e, t, n, o, a[U]);
        for (let c = G; c < a.length; c++)
            Os(e, t, n, o, a[c]);
    }
    else
        ne(a) && Os(e, t, n, o, a);
} }
function aO(e, t) { e.componentReplaced?.(t.id); }
function cO(e, t, n, o, r) { let i = r[$], s = r[U], a = r[Q], c = r[le], l = r[P].get(q, null), u = () => { if (o.encapsulation === Ue.ShadowDom || o.encapsulation === Ue.ExperimentalIsolatedShadowDom) {
    let h = s.cloneNode(!1);
    s.replaceWith(h), s = h;
} let d = tv(n), f = wa(a, d, i, Qd(n), s, c, null, null, null, null, null); lO(a, r, f, c.index), hi(r[m], r), Ur(r); let p = r[je].rendererFactory; aO(p, o), f[w] = p.createRenderer(s, n), pv(r[m], r), uO(c), Ba(d, f, i), kv(d, f, d.template, i); }; l === null ? lm(e, t, u) : l.run(() => lm(e, t, u)); }
function lm(e, t, n) {
    try {
        n();
    }
    catch (o) {
        let r = o;
        if (t !== null && r.message) {
            let i = r.message + (r.stack ? `
` + r.stack : "");
            e?.hot?.send?.("angular:invalidate", { id: t, message: i, error: !0 });
        }
        throw o;
    }
}
function lO(e, t, n, o) { for (let r = I; r < e[m].bindingStartIndex; r++) {
    let i = e[r];
    if ((ne(i) || K(i)) && i[he] === t) {
        i[he] = n;
        break;
    }
} e[Ft] === t && (e[Ft] = n), e[dr] === t && (e[dr] = n), n[he] = t[he], t[he] = null, e[o] = n; }
function uO(e) { if (e.projection !== null) {
    for (let t of e.projection)
        la(t) && (t.projectionNext = null, t.flags &= -3);
    e.projection = null;
} }
var Ee = { \u0275\u0275animateEnter: Sr, \u0275\u0275animateEnterListener: br, \u0275\u0275animateLeave: Ar, \u0275\u0275animateLeaveListener: na, \u0275\u0275attribute: Zf, \u0275\u0275defineComponent: WE, \u0275\u0275defineDirective: QE, \u0275\u0275defineInjectable: B, \u0275\u0275defineInjector: or, \u0275\u0275defineNgModule: Of, \u0275\u0275definePipe: ZE, \u0275\u0275directiveInject: jo, \u0275\u0275getInheritedFactory: jm, \u0275\u0275inject: pe, \u0275\u0275injectAttribute: ua, \u0275\u0275invalidFactory: fE, \u0275\u0275invalidFactoryDep: Qi, \u0275\u0275templateRefExtractor: zT, \u0275\u0275resetView: Ml, \u0275\u0275HostDirectivesFeature: XE, \u0275\u0275NgOnChangesFeature: Tm, \u0275\u0275ControlFeature: JE, \u0275\u0275ProvidersFeature: TT, \u0275\u0275InheritDefinitionFeature: xf, \u0275\u0275ExternalStylesFeature: CT, \u0275\u0275nextContext: wD, \u0275\u0275namespaceHTML: Ll, \u0275\u0275namespaceMathML: Pl, \u0275\u0275namespaceSVG: xl, \u0275\u0275enableBindings: Il, \u0275\u0275disableBindings: Dl, \u0275\u0275elementStart: Yr, \u0275\u0275elementEnd: ic, \u0275\u0275element: Kf, \u0275\u0275elementContainerStart: cc, \u0275\u0275elementContainerEnd: Ti, \u0275\u0275domElement: Jf, \u0275\u0275domElementStart: sc, \u0275\u0275domElementEnd: ac, \u0275\u0275domElementContainer: np, \u0275\u0275domElementContainerStart: lc, \u0275\u0275domElementContainerEnd: tp, \u0275\u0275domTemplate: Lf, \u0275\u0275domListener: fp, \u0275\u0275elementContainer: ep, \u0275\u0275pureFunction0: wT, \u0275\u0275pureFunction1: _T, \u0275\u0275pureFunction2: ST, \u0275\u0275pureFunction3: bT, \u0275\u0275pureFunction4: AT, \u0275\u0275pureFunction5: RT, \u0275\u0275pureFunction6: kT, \u0275\u0275pureFunction7: OT, \u0275\u0275pureFunction8: xT, \u0275\u0275pureFunctionV: PT, \u0275\u0275getCurrentView: sD, \u0275\u0275restoreView: Cl, \u0275\u0275listener: up, \u0275\u0275projection: SD, \u0275\u0275syntheticHostProperty: ip, \u0275\u0275syntheticHostListener: dp, \u0275\u0275pipeBind1: $T, \u0275\u0275pipeBind2: UT, \u0275\u0275pipeBind3: qT, \u0275\u0275pipeBind4: GT, \u0275\u0275pipeBindV: WT, \u0275\u0275projectionDef: _D, \u0275\u0275domProperty: rp, \u0275\u0275ariaProperty: Qf, \u0275\u0275property: Yf, \u0275\u0275control: DE, \u0275\u0275controlCreate: EE, \u0275\u0275pipe: BT, \u0275\u0275queryRefresh: bD, \u0275\u0275queryAdvance: RD, \u0275\u0275viewQuery: gp, \u0275\u0275viewQuerySignal: yp, \u0275\u0275loadQuery: AD, \u0275\u0275contentQuery: hp, \u0275\u0275contentQuerySignal: mp, \u0275\u0275reference: kD, \u0275\u0275classMap: jD, \u0275\u0275styleMap: FD, \u0275\u0275styleProp: vp, \u0275\u0275classProp: Ep, \u0275\u0275advance: nv, \u0275\u0275template: Pf, \u0275\u0275conditional: XI, \u0275\u0275conditionalCreate: JI, \u0275\u0275conditionalBranchCreate: rc, \u0275\u0275defer: SI, \u0275\u0275deferWhen: bI, \u0275\u0275deferOnIdle: OI, \u0275\u0275deferOnImmediate: LI, \u0275\u0275deferOnTimer: VI, \u0275\u0275deferOnHover: $I, \u0275\u0275deferOnInteraction: GI, \u0275\u0275deferOnViewport: QI, \u0275\u0275deferPrefetchWhen: AI, \u0275\u0275deferPrefetchOnIdle: xI, \u0275\u0275deferPrefetchOnImmediate: FI, \u0275\u0275deferPrefetchOnTimer: HI, \u0275\u0275deferPrefetchOnHover: UI, \u0275\u0275deferPrefetchOnInteraction: WI, \u0275\u0275deferPrefetchOnViewport: ZI, \u0275\u0275deferHydrateWhen: RI, \u0275\u0275deferHydrateNever: kI, \u0275\u0275deferHydrateOnIdle: PI, \u0275\u0275deferHydrateOnImmediate: jI, \u0275\u0275deferHydrateOnTimer: BI, \u0275\u0275deferHydrateOnHover: qI, \u0275\u0275deferHydrateOnInteraction: zI, \u0275\u0275deferHydrateOnViewport: YI, \u0275\u0275deferEnableTimerScheduling: hI, \u0275\u0275repeater: oD, \u0275\u0275repeaterCreate: nD, \u0275\u0275repeaterTrackByIndex: eD, \u0275\u0275repeaterTrackByIdentity: tD, \u0275\u0275componentInstance: KI, \u0275\u0275text: WD, \u0275\u0275textInterpolate: Ip, \u0275\u0275textInterpolate1: uc, \u0275\u0275textInterpolate2: Dp, \u0275\u0275textInterpolate3: Tp, \u0275\u0275textInterpolate4: Cp, \u0275\u0275textInterpolate5: Mp, \u0275\u0275textInterpolate6: Np, \u0275\u0275textInterpolate7: wp, \u0275\u0275textInterpolate8: _p, \u0275\u0275textInterpolateV: Sp, \u0275\u0275i18n: TD, \u0275\u0275i18nAttributes: CD, \u0275\u0275i18nExp: lp, \u0275\u0275i18nStart: ap, \u0275\u0275i18nEnd: cp, \u0275\u0275i18nApply: MD, \u0275\u0275i18nPostprocess: ND, \u0275\u0275resolveWindow: Ky, \u0275\u0275resolveDocument: Jy, \u0275\u0275resolveBody: Gd, \u0275\u0275setComponentScope: MT, \u0275\u0275setNgModuleScope: NT, \u0275\u0275registerNgModuleType: Af, \u0275\u0275getComponentDepsFactory: QT, \u0275setClassDebugInfo: ZT, \u0275\u0275declareLet: Rp, \u0275\u0275storeLet: sT, \u0275\u0275arrowFunction: ET, \u0275\u0275readContextLet: aT, \u0275\u0275attachSourceLocations: cT, \u0275\u0275interpolate: lT, \u0275\u0275interpolate1: uT, \u0275\u0275interpolate2: dT, \u0275\u0275interpolate3: fT, \u0275\u0275interpolate4: pT, \u0275\u0275interpolate5: hT, \u0275\u0275interpolate6: gT, \u0275\u0275interpolate7: mT, \u0275\u0275interpolate8: yT, \u0275\u0275interpolateV: vT, \u0275\u0275sanitizeHtml: qy, \u0275\u0275sanitizeStyle: Gy, \u0275\u0275sanitizeResourceUrl: qd, \u0275\u0275sanitizeScript: Wy, \u0275\u0275validateAttribute: Yy, \u0275\u0275sanitizeUrl: Ud, \u0275\u0275sanitizeUrlOrResourceUrl: Zy, \u0275\u0275trustConstantHtml: zy, \u0275\u0275trustConstantResourceUrl: Qy, forwardRef: tr, resolveForwardRef: x, \u0275\u0275twoWayProperty: bp, \u0275\u0275twoWayBindingSet: rT, \u0275\u0275twoWayListener: Ap, \u0275\u0275replaceMetadata: KT, \u0275\u0275getReplaceMetadataURL: YT }, oo = null;
function JT(e) { oo !== null && (e.defaultEncapsulation !== oo.defaultEncapsulation || e.preserveWhitespaces !== oo.preserveWhitespaces) || (oo = e); }
function dO() { return oo; }
function fO() { oo = null; }
var xr = [];
function pO(e, t) { xr.push({ moduleType: e, ngModule: t }); }
var fu = !1;
function XT() { if (!fu) {
    fu = !0;
    try {
        for (let e = xr.length - 1; e >= 0; e--) {
            let { moduleType: t, ngModule: n } = xr[e];
            n.declarations && n.declarations.every(eC) && (xr.splice(e, 1), vO(t, n));
        }
    }
    finally {
        fu = !1;
    }
} }
function eC(e) { return Array.isArray(e) ? e.every(eC) : !!x(e); }
function tC(e, t = {}) { nC(e, t), t.id !== void 0 && Af(e, t.id), pO(e, t); }
function nC(e, t, n = !1) { let o = Ze(t.declarations || F), r = null; Object.defineProperty(e, qi, { configurable: !0, get: () => (r === null && (r = re({ usage: 0, kind: "NgModule", type: e }).compileNgModule(Ee, `ng:///${e.name}/\u0275mod.js`, { type: e, bootstrap: Ze(t.bootstrap || F).map(x), declarations: o.map(x), imports: Ze(t.imports || F).map(x).map(um), exports: Ze(t.exports || F).map(x).map(um), schemas: t.schemas ? Ze(t.schemas) : null, id: t.id || null }), r.schemas || (r.schemas = [])), r) }); let i = null; Object.defineProperty(e, ot, { get: () => { if (i === null) {
        let a = re({ usage: 0, kind: "NgModule", type: e });
        i = a.compileFactory(Ee, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, deps: da(e), target: a.FactoryTarget.NgModule, typeArgumentCount: 0 });
    } return i; }, configurable: !1 }); let s = null; Object.defineProperty(e, Qo, { get: () => { if (s === null) {
        let a = { name: e.name, type: e, providers: t.providers || F, imports: [(t.imports || F).map(x), (t.exports || F).map(x)] };
        s = re({ usage: 0, kind: "NgModule", type: e }).compileInjector(Ee, `ng:///${e.name}/\u0275inj.js`, a);
    } return s; }, configurable: !1 }); }
function hO(e, t) { let n = `Unexpected "${Pe(e)}" found in the "declarations" array of the`, o = `"${Pe(e)}" is marked as standalone and can't be declared in any NgModule - did you intend to import it instead (by adding it to the "imports" array)?`; return `${n} ${t}, ${o}`; }
var gO = new WeakMap, mO = new WeakMap;
function yO() { gO = new WeakMap, mO = new WeakMap, xr.length = 0, LA.clear(); }
function vO(e, t) { let n = Ze(t.declarations || F), o = Op(e); n.forEach(r => { if (r = x(r), r.hasOwnProperty(rn)) {
    let s = W(r);
    kp(s, o);
}
else
    !r.hasOwnProperty(ir) && !r.hasOwnProperty(sr) && (r.ngSelectorScope = e); }); }
function kp(e, t) { e.directiveDefs = () => Array.from(t.compilation.directives).map(n => n.hasOwnProperty(rn) ? W(n) : be(n)).filter(n => !!n), e.pipeDefs = () => Array.from(t.compilation.pipes).map(n => Qe(n)), e.schemas = t.schemas, e.tView = null; }
function Op(e) { if (gn(e)) {
    let t = ho.getNgModuleScope(e), n = Gi(e);
    return z({ schemas: n.schemas || null }, t);
}
else if (ar(e)) {
    if ((W(e) || be(e)) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set([e]), pipes: new Set } };
    if (Qe(e) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set, pipes: new Set([e]) } };
} throw new Error(`${e.name} does not have a module def (\u0275mod property)`); }
function um(e) { return vf(e) ? e.ngModule : e; }
var pu = 0;
function oC(e, t) {
    let n = null;
    NA(e, t), iC(e, t), Object.defineProperty(e, rn, { get: () => {
            if (n === null) {
                let o = re({ usage: 0, kind: "component", type: e });
                if (HE(t)) {
                    let u = [`Component '${e.name}' is not resolved:`];
                    throw t.templateUrl && u.push(` - templateUrl: ${t.templateUrl}`), t.styleUrls && t.styleUrls.length && u.push(` - styleUrls: ${JSON.stringify(t.styleUrls)}`), t.styleUrl && u.push(` - styleUrl: ${t.styleUrl}`), u.push("Did you run and wait for 'resolveComponentResources()'?"), new Error(u.join(`
`));
                }
                let r = dO(), i = t.preserveWhitespaces;
                i === void 0 && (r !== null && r.preserveWhitespaces !== void 0 ? i = r.preserveWhitespaces : i = !1);
                let s = t.encapsulation;
                s === void 0 && (r !== null && r.defaultEncapsulation !== void 0 ? s = r.defaultEncapsulation : s = Ue.Emulated);
                let a = t.templateUrl || `ng:///${e.name}/template.html`, c = sC(e, t), l = we(z({}, c), { typeSourceSpan: o.createParseSourceSpan("Component", e.name, a), template: t.template || "", preserveWhitespaces: i, styles: typeof t.styles == "string" ? [t.styles] : t.styles || F, animations: t.animations, declarations: [], changeDetection: t.changeDetection, encapsulation: s, viewProviders: t.viewProviders || null, hasDirectiveDependencies: !c.isStandalone || t.imports != null && t.imports.length > 0 });
                pu++;
                try {
                    if (l.usesInheritance && aC(e), n = o.compileComponent(Ee, a, l), l.isStandalone) {
                        let u = Ze(t.imports || F), { directiveDefs: d, pipeDefs: f } = EO(e, u);
                        n.directiveDefs = d, n.pipeDefs = f, n.dependencies = () => u.map(x);
                    }
                }
                finally {
                    pu--;
                }
                if (pu === 0 && XT(), IO(e)) {
                    let u = Op(e.ngSelectorScope);
                    kp(n, u);
                }
                if (t.schemas)
                    if (l.isStandalone)
                        n.schemas = t.schemas;
                    else
                        throw new Error(`The 'schemas' was specified for the ${Pe(e)} but is only valid on a component that is standalone.`);
                else
                    l.isStandalone && (n.schemas = []);
            }
            return n;
        }, set: o => { n = o; }, configurable: !1 });
}
function EO(e, t) { return { directiveDefs: () => wr(e) ? [...ho.getStandaloneComponentScope(e, t).compilation.directives].map(i => W(i) || be(i)).filter(i => i !== null) : [], pipeDefs: () => wr(e) ? [...ho.getStandaloneComponentScope(e, t).compilation.pipes].map(i => Qe(i)).filter(i => i !== null) : [] }; }
function IO(e) { return e.ngSelectorScope !== void 0; }
function xp(e, t) { let n = null; iC(e, t || {}), Object.defineProperty(e, ir, { get: () => { if (n === null) {
        let o = rC(e, t || {});
        n = re({ usage: 0, kind: "directive", type: e }).compileDirective(Ee, o.sourceMapUrl, o.metadata);
    } return n; }, configurable: !1 }); }
function rC(e, t) { let n = e && e.name, o = `ng:///${n}/\u0275dir.js`, r = re({ usage: 0, kind: "directive", type: e }), i = sC(e, t); return i.typeSourceSpan = r.createParseSourceSpan("Directive", n, o), i.usesInheritance && aC(e), { metadata: i, sourceMapUrl: o }; }
function iC(e, t) { let n = null; Object.defineProperty(e, ot, { get: () => { if (n === null) {
        let o = rC(e, t), r = re({ usage: 0, kind: "directive", type: e });
        n = r.compileFactory(Ee, `ng:///${e.name}/\u0275fac.js`, { name: o.metadata.name, type: o.metadata.type, typeArgumentCount: 0, deps: da(e), target: r.FactoryTarget.Directive });
    } return n; }, configurable: !1 }); }
function DO(e) { return Object.getPrototypeOf(e.prototype) === Object.prototype; }
function sC(e, t) { let n = Id(), o = n.ownPropMetadata(e); return { name: e.name, type: e, selector: t.selector !== void 0 ? t.selector : null, host: t.host || Le, propMetadata: o, inputs: t.inputs || F, outputs: t.outputs || F, queries: dm(e, o, cC), lifecycle: { usesOnChanges: n.hasLifecycleHook(e, "ngOnChanges") }, controlCreate: null, typeSourceSpan: null, usesInheritance: !DO(e), exportAs: MO(t.exportAs), providers: t.providers || null, viewQueries: dm(e, o, lC), isStandalone: t.standalone === void 0 ? !0 : !!t.standalone, isSignal: !!t.signals, hostDirectives: t.hostDirectives?.map(r => typeof r == "function" ? { directive: r } : r) || null }; }
function aC(e) { let t = Object.prototype, n = Object.getPrototypeOf(e.prototype).constructor; for (; n && n !== t;)
    !be(n) && !W(n) && wO(n) && xp(n, null), n = Object.getPrototypeOf(n); }
function TO(e) { return typeof e == "string" ? dC(e) : x(e); }
function CO(e, t) { return { propertyName: e, predicate: TO(t.selector), descendants: t.descendants, first: t.first, read: t.read ? t.read : null, static: !!t.static, emitDistinctChangesOnly: !!t.emitDistinctChangesOnly, isSignal: !!t.isSignal }; }
function dm(e, t, n) { let o = []; for (let r in t)
    if (t.hasOwnProperty(r)) {
        let i = t[r];
        i.forEach(s => { if (n(s)) {
            if (!s.selector)
                throw new Error(`Can't construct a query for the property "${r}" of "${Pe(e)}" since the query selector wasn't defined.`);
            if (i.some(uC))
                throw new Error("Cannot combine @Input decorators with query decorators");
            o.push(CO(r, s));
        } });
    } return o; }
function MO(e) { return e === void 0 ? null : dC(e); }
function cC(e) { let t = e.ngMetadataName; return t === "ContentChild" || t === "ContentChildren"; }
function lC(e) { let t = e.ngMetadataName; return t === "ViewChild" || t === "ViewChildren"; }
function uC(e) { return e.ngMetadataName === "Input"; }
function dC(e) { return e.split(",").map(t => t.trim()); }
var NO = ["ngOnChanges", "ngOnInit", "ngOnDestroy", "ngDoCheck", "ngAfterViewInit", "ngAfterViewChecked", "ngAfterContentInit", "ngAfterContentChecked"];
function wO(e) { let t = Id(); if (NO.some(o => t.hasLifecycleHook(e, o)))
    return !0; let n = t.propMetadata(e); for (let o in n) {
    let r = n[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i], a = s.ngMetadataName;
        if (uC(s) || cC(s) || lC(s) || a === "Output" || a === "HostBinding" || a === "HostListener")
            return !0;
    }
} return !1; }
function fC(e, t) { let n = null, o = null; Object.defineProperty(e, ot, { get: () => { if (o === null) {
        let r = fm(e, t), i = re({ usage: 0, kind: "pipe", type: r.type });
        o = i.compileFactory(Ee, `ng:///${r.name}/\u0275fac.js`, { name: r.name, type: r.type, typeArgumentCount: 0, deps: da(e), target: i.FactoryTarget.Pipe });
    } return o; }, configurable: !1 }), Object.defineProperty(e, sr, { get: () => { if (n === null) {
        let r = fm(e, t);
        n = re({ usage: 0, kind: "pipe", type: r.type }).compilePipe(Ee, `ng:///${r.name}/\u0275pipe.js`, r);
    } return n; }, configurable: !1 }); }
function fm(e, t) { return { type: e, name: e.name, pipeName: t.name, pure: t.pure !== void 0 ? t.pure : !0, isStandalone: t.standalone === void 0 ? !0 : !!t.standalone }; }
var pC = ti("Directive", (e = {}) => e, void 0, void 0, (e, t) => xp(e, t)), _O = ti("Component", (e = {}) => z({ changeDetection: fa.Eager }, e), pC, void 0, (e, t) => oC(e, t)), SO = ti("Pipe", e => z({ pure: !0 }, e), void 0, void 0, (e, t) => fC(e, t)), bO = wt("Input", e => e ? typeof e == "string" ? { alias: e } : e : {}), AO = wt("Output", e => ({ alias: e })), RO = wt("HostBinding", e => ({ hostPropertyName: e })), kO = wt("HostListener", (e, t) => ({ eventName: e, args: t })), OO = ti("NgModule", e => e, void 0, void 0, (e, t) => tC(e, t)), ca = class {
    ngModuleFactory;
    componentFactories;
    constructor(t, n) { this.ngModuleFactory = t, this.componentFactories = n; }
}, xO = (() => { class e {
    compileModuleSync(n) { return new vo(n); }
    compileModuleAsync(n) { return Promise.resolve(this.compileModuleSync(n)); }
    compileModuleAndAllComponentsSync(n) { let o = this.compileModuleSync(n), r = an(n), i = to(r.declarations).reduce((s, a) => { let c = W(a); return c && s.push(new Yt(c)), s; }, []); return new ca(o, i); }
    compileModuleAndAllComponentsAsync(n) { return Promise.resolve(this.compileModuleAndAllComponentsSync(n)); }
    clearCache() { }
    clearCacheFor(n) { }
    getModuleId(n) { }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), hC = new C(""), md = class {
};
var gC = (() => { class e {
    applicationErrorHandler = v(It);
    appRef = v(Ge);
    taskService = v(Et);
    ngZone = v(q);
    zonelessEnabled = v(Qn);
    tracing = v(On, { optional: !0 });
    zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
    schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }];
    subscriptions = new Ln;
    angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(Ko) : null;
    scheduleInRootZone = !this.zonelessEnabled && this.zoneIsDefined && (v(ds, { optional: !0 }) ?? !1);
    cancelScheduledCallback = null;
    useMicrotaskScheduler = !1;
    runningTick = !1;
    pendingRenderTaskId = null;
    constructor() { this.subscriptions.add(this.appRef.afterTick.subscribe(() => { let n = this.taskService.add(); if (!this.runningTick && (this.cleanup(), !this.zonelessEnabled || this.appRef.includeAllTestViews)) {
        this.taskService.remove(n);
        return;
    } this.switchToMicrotaskScheduler(), this.taskService.remove(n); })), this.subscriptions.add(this.ngZone.onUnstable.subscribe(() => { this.runningTick || this.cleanup(); })); }
    switchToMicrotaskScheduler() { this.ngZone.runOutsideAngular(() => { let n = this.taskService.add(); this.useMicrotaskScheduler = !0, queueMicrotask(() => { this.useMicrotaskScheduler = !1, this.taskService.remove(n); }); }); }
    notify(n) { if (!this.zonelessEnabled && n === 5)
        return; switch (n) {
        case 0: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
            this.appRef.dirtyFlags |= 4;
            break;
        }
        case 6: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 12: {
            this.appRef.dirtyFlags |= 16;
            break;
        }
        case 13: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 11: break;
        default: this.appRef.dirtyFlags |= 8;
    } if (this.appRef.tracingSnapshot = this.tracing?.snapshot(this.appRef.tracingSnapshot) ?? null, !this.shouldScheduleTick())
        return; let o = this.useMicrotaskScheduler ? Yh : Bl; this.pendingRenderTaskId = this.taskService.add(), this.scheduleInRootZone ? this.cancelScheduledCallback = Zone.root.run(() => o(() => this.tick())) : this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() => o(() => this.tick())); }
    shouldScheduleTick() { return !(this.appRef.destroyed || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && Zone.current.get(Ko + this.angularZoneId)); }
    tick() { if (this.runningTick || this.appRef.destroyed)
        return; if (this.appRef.dirtyFlags === 0) {
        this.cleanup();
        return;
    } !this.zonelessEnabled && this.appRef.dirtyFlags & 7 && (this.appRef.dirtyFlags |= 1); let n = this.taskService.add(); try {
        this.ngZone.run(() => { this.runningTick = !0, this.appRef._tick(); }, void 0, this.schedulerTickApplyArgs);
    }
    catch (o) {
        this.applicationErrorHandler(o);
    }
    finally {
        this.taskService.remove(n), this.cleanup();
    } }
    ngOnDestroy() { this.subscriptions.unsubscribe(), this.cleanup(); }
    cleanup() { if (this.runningTick = !1, this.cancelScheduledCallback?.(), this.cancelScheduledCallback = null, this.pendingRenderTaskId !== null) {
        let n = this.pendingRenderTaskId;
        this.pendingRenderTaskId = null, this.taskService.remove(n);
    } }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function PO() { return J("NgZoneless"), Ye([...dc(), []]); }
function dc() { return [{ provide: xe, useExisting: gC }, { provide: q, useClass: Jo }, { provide: Qn, useValue: !0 }]; }
function LO() { return typeof $localize < "u" && $localize.locale || Ci; }
var Pp = new C("", { factory: () => v(Pp, { optional: !0, skipSelf: !0 }) || LO() }), FO = new C("", { factory: () => XR }), jO = new C(""), VO = new C(""), mC = (function (e) { return e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Ignore = 2] = "Ignore", e; })(mC || {}), yd = class {
    name;
    callback;
    constructor(t, n) { this.name = t, this.callback = n; }
};
function HO(e) { return e.map(t => t.nativeElement); }
var Xr = class {
    nativeNode;
    constructor(t) { this.nativeNode = t; }
    get parent() { let t = this.nativeNode.parentNode; return t ? new bn(t) : null; }
    get injector() { return lw(this.nativeNode); }
    get componentInstance() { let t = this.nativeNode; return t && (dg(t) || cw(t)); }
    get context() { return dg(this.nativeNode) || aw(this.nativeNode); }
    get listeners() { return hw(this.nativeNode).filter(t => t.type === "dom"); }
    get references() { return fw(this.nativeNode); }
    get providerTokens() { return uw(this.nativeNode); }
}, bn = class extends Xr {
    constructor(t) { super(t); }
    get nativeElement() { return this.nativeNode.nodeType == Node.ELEMENT_NODE ? this.nativeNode : null; }
    get name() { let t = Me(this.nativeNode), n = t ? t.lView : null; return n !== null ? n[m].data[t.nodeIndex].value : this.nativeNode.nodeName; }
    get properties() { let t = Me(this.nativeNode), n = t ? t.lView : null; if (n === null)
        return {}; let o = n[m].data, r = o[t.nodeIndex], i = {}; return BO(this.nativeElement, i), UO(i, r, n, o), i; }
    get attributes() { let t = {}, n = this.nativeElement; if (!n)
        return t; let o = Me(n), r = o ? o.lView : null; if (r === null)
        return {}; let i = r[m].data[o.nodeIndex].attrs, s = []; if (i) {
        let a = 0;
        for (; a < i.length;) {
            let c = i[a];
            if (typeof c != "string")
                break;
            let l = i[a + 1];
            t[c] = l, s.push(c.toLowerCase()), a += 2;
        }
    } for (let a of n.attributes)
        s.includes(a.name) || (t[a.name] = a.value); return t; }
    get styles() { return this.nativeElement?.style ?? {}; }
    get classes() { let t = {}, o = this.nativeElement.className; return (typeof o != "string" ? o.baseVal.split(" ") : o.split(" ")).forEach(i => t[i] = !0), t; }
    get childNodes() { let t = this.nativeNode.childNodes, n = []; for (let o = 0; o < t.length; o++) {
        let r = t[o];
        n.push(ei(r));
    } return n; }
    get children() { let t = this.nativeElement; if (!t)
        return []; let n = t.children, o = []; for (let r = 0; r < n.length; r++) {
        let i = n[r];
        o.push(ei(i));
    } return o; }
    query(t) { return this.queryAll(t)[0] || null; }
    queryAll(t) { let n = []; return pm(this, t, n, !0), n; }
    queryAllNodes(t) { let n = []; return pm(this, t, n, !1), n; }
    triggerEventHandler(t, n) { let o = this.nativeNode, r = []; this.listeners.forEach(i => { if (i.name === t) {
        let s = i.callback;
        s.call(o, n), r.push(s);
    } }), typeof o.eventListeners == "function" && o.eventListeners(t).forEach(i => { if (i.toString().indexOf("__ngUnwrap__") !== -1) {
        let s = i("__ngUnwrap__");
        return r.indexOf(s) === -1 && s.call(o, n);
    } }); }
};
function BO(e, t) { if (e) {
    let n = Object.getPrototypeOf(e), o = Node.prototype;
    for (; n !== null && n !== o;) {
        let r = Object.getOwnPropertyDescriptors(n);
        for (let i in r)
            if (!i.startsWith("__") && !i.startsWith("on")) {
                let s = e[i];
                $O(s) && (t[i] = s);
            }
        n = Object.getPrototypeOf(n);
    }
} }
function $O(e) { return typeof e == "string" || typeof e == "boolean" || typeof e == "number" || e === null; }
function pm(e, t, n, o) { let r = Me(e.nativeNode), i = r ? r.lView : null; if (i !== null) {
    let s = i[m].data[r.nodeIndex];
    mn(s, i, t, n, o, e.nativeNode);
}
else
    Lp(e.nativeNode, t, n, o); }
function mn(e, t, n, o, r, i) { let s = Ph(e, t); if (e.type & 11) {
    if (hu(s, n, o, r, i), De(e)) {
        let c = ye(e.index, t);
        c && c[m].firstChild && mn(c[m].firstChild, c, n, o, r, i);
    }
    else
        e.child && mn(e.child, t, n, o, r, i), s && Lp(s, n, o, r);
    let a = t[e.index];
    K(a) && hm(a, n, o, r, i);
}
else if (e.type & 4) {
    let a = t[e.index];
    hu(a[Ke], n, o, r, i), hm(a, n, o, r, i);
}
else if (e.type & 16) {
    let a = t[ee], l = a[le].projection[e.projection];
    if (Array.isArray(l))
        for (let u of l)
            hu(u, n, o, r, i);
    else if (l) {
        let u = a[Q], d = u[m].data[l.index];
        mn(d, u, n, o, r, i);
    }
}
else
    e.child && mn(e.child, t, n, o, r, i); if (i !== s) {
    let a = e.flags & 2 ? e.projectionNext : e.next;
    a && mn(a, t, n, o, r, i);
} }
function hm(e, t, n, o, r) { for (let i = G; i < e.length; i++) {
    let s = e[i], a = s[m].firstChild;
    a && mn(a, s, t, n, o, r);
} }
function hu(e, t, n, o, r) { if (r !== e) {
    let i = ei(e);
    if (!i)
        return;
    (o && i instanceof bn && t(i) && n.indexOf(i) === -1 || !o && t(i) && n.indexOf(i) === -1) && n.push(i);
} }
function Lp(e, t, n, o) { let r = e.childNodes, i = r.length; for (let s = 0; s < i; s++) {
    let a = r[s], c = ei(a);
    c && ((o && c instanceof bn && t(c) && n.indexOf(c) === -1 || !o && t(c) && n.indexOf(c) === -1) && n.push(c), Lp(a, t, n, o));
} }
function UO(e, t, n, o) { let r = t.propertyBindings; if (r !== null)
    for (let i = 0; i < r.length; i++) {
        let s = r[i], c = o[s].split(A_), l = c[0];
        if (c.length > 1) {
            let u = c[1];
            for (let d = 1; d < c.length - 1; d++)
                u += b(n[s + d - 1]) + c[d + 1];
            e[l] = u;
        }
        else
            e[l] = n[s];
    } }
var gu = "__ng_debug__";
function ei(e) { return e instanceof Node ? (e.hasOwnProperty(gu) || (e[gu] = e.nodeType == Node.ELEMENT_NODE ? new bn(e) : new Xr(e)), e[gu]) : null; }
var wi = class {
    destroyed = !1;
    listeners = null;
    errorHandler = v(vt, { optional: !0 });
    destroyRef = v(Be);
    constructor() { this.destroyRef.onDestroy(() => { this.destroyed = !0, this.listeners = null; }); }
    subscribe(t) { if (this.destroyed)
        throw new D(953, !1); return (this.listeners ??= []).push(t), { unsubscribe: () => { let n = this.listeners?.indexOf(t); n !== void 0 && n !== -1 && this.listeners?.splice(n, 1); } }; }
    emit(t) { if (this.destroyed) {
        console.warn(Xo(953, !1));
        return;
    } if (this.listeners === null)
        return; let n = R(null); try {
        for (let o of this.listeners)
            try {
                o(t);
            }
            catch (r) {
                this.errorHandler?.handleError(r);
            }
    }
    finally {
        R(n);
    } }
};
function qO(e) { return e.destroyRef; }
function tt(e) { return yh(e); }
function Ne(e, t) { return Pi(e, t?.equal); }
var GO = e => e;
function Fp(e, t) { if (typeof e == "function") {
    let n = Rc(e, GO, t?.equal);
    return yC(n, t?.debugName);
}
else {
    let n = Rc(e.source, e.computation, e.equal);
    return yC(n, e.debugName);
} }
function yC(e, t) { let n = e[ae], o = e; return o.set = r => gh(n, r), o.update = r => mh(n, r), o.asReadonly = Wn.bind(e), o; }
function WO(e) { let t = e.request, n = e.params ?? t ?? (() => null); return new fc(n, QO(e), e.defaultValue, e.equal ? zO(e.equal) : void 0, e.debugName, e.injector ?? v(ce)); }
var jp = class {
    value;
    isLoading;
    constructor(t, n) { this.value = t, this.value.set = this.set.bind(this), this.value.update = this.update.bind(this), this.value.asReadonly = Wn, this.isLoading = Ne(() => this.status() === "loading" || this.status() === "reloading", void 0); }
    isError = Ne(() => this.status() === "error");
    update(t) { this.set(t(tt(this.value))); }
    isValueDefined = Ne(() => this.isError() ? !1 : this.value() !== void 0);
    _snapshot;
    get snapshot() { return this._snapshot ??= Ne(() => { let t = this.status(); return t === "error" ? { status: "error", error: this.error() } : { status: t, value: this.value() }; }); }
    hasValue() { return this.isValueDefined(); }
    asReadonly() { return this; }
}, fc = class extends jp {
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
    constructor(t, n, o, r, i, s, a) { super(Ne(() => { let c = this.state().stream?.(); if (!c || this.state().status === "loading" && this.error())
        return o; if (!Vp(c))
        throw new _i(this.error()); return c.value; }, { equal: r }), i), this.loaderFn = n, this.equal = r, this.debugName = i, this.extRequest = Fp({ source: t, computation: c => ({ request: c, reload: 0 }) }), this.state = Fp({ source: this.extRequest, computation: (c, l) => { if (l) {
            let u = c.request === void 0 ? "idle" : "loading";
            return { extRequest: c, status: u, previousStatus: vC(l.value), stream: l.value.extRequest.request === c.request ? l.value.stream : void 0 };
        }
        else {
            let u = a?.(c.request);
            a = void 0;
            let d = c.request === void 0 ? "idle" : u ? "resolved" : "loading";
            return { extRequest: c, status: d, previousStatus: "idle", stream: u };
        } } }), this.effectRef = Gl(this.loadEffect.bind(this), { injector: s, manualCleanup: !0 }), this.pendingTasks = s.get(Er), this.unregisterOnDestroy = s.get(Be).onDestroy(() => this.destroy()), this.status = Ne(() => vC(this.state()), void 0), this.error = Ne(() => { let c = this.state().stream?.(); return c && !Vp(c) ? c.error : void 0; }, void 0); }
    set(t) { if (this.destroyed)
        return; let n = tt(this.error), o = tt(this.state); if (!n) {
        let r = tt(this.value);
        if (o.status === "local" && (this.equal ? this.equal(r, t) : r === t))
            return;
    } this.state.set({ extRequest: o.extRequest, status: "local", previousStatus: "local", stream: Ut({ value: t }, void 0) }), this.abortInProgressLoad(); }
    reload() { let { status: t } = tt(this.state); return t === "idle" || t === "loading" ? !1 : (this.extRequest.update(({ request: n, reload: o }) => ({ request: n, reload: o + 1 })), !0); }
    destroy() { this.destroyed = !0, this.unregisterOnDestroy(), this.effectRef.destroy(), this.abortInProgressLoad(), this.state.set({ extRequest: { request: void 0, reload: 0 }, status: "idle", previousStatus: "idle", stream: void 0 }); }
    loadEffect() { return ze(this, null, function* () { let t = this.extRequest(), { status: n, previousStatus: o } = tt(this.state); if (t.request === void 0)
        return; if (n !== "loading")
        return; this.abortInProgressLoad(); let r = this.resolvePendingTask = this.pendingTasks.add(), { signal: i } = this.pendingController = new AbortController; try {
        let s = yield tt(() => this.loaderFn({ params: t.request, abortSignal: i, previous: { status: o } }));
        if (i.aborted || tt(this.extRequest) !== t)
            return;
        this.state.set({ extRequest: t, status: "resolved", previousStatus: "resolved", stream: s });
    }
    catch (s) {
        if (i.aborted || tt(this.extRequest) !== t)
            return;
        this.state.set({ extRequest: t, status: "resolved", previousStatus: "error", stream: Ut({ error: Bp(s) }, void 0) });
    }
    finally {
        r?.(), r = void 0;
    } }); }
    abortInProgressLoad() { tt(() => this.pendingController?.abort()), this.pendingController = void 0, this.resolvePendingTask?.(), this.resolvePendingTask = void 0; }
};
function zO(e) { return (t, n) => t === void 0 || n === void 0 ? t === n : e(t, n); }
function QO(e) { return ZO(e) ? e.stream : t => ze(null, null, function* () { try {
    return Ut({ value: yield e.loader(t) }, void 0);
}
catch (n) {
    return Ut({ error: Bp(n) }, void 0);
} }); }
function ZO(e) { return !!e.stream; }
function vC(e) { switch (e.status) {
    case "loading": return e.extRequest.reload === 0 ? "loading" : "reloading";
    case "resolved": return Vp(e.stream()) ? "resolved" : "error";
    default: return e.status;
} }
function Vp(e) { return e.error === void 0; }
function Bp(e) { return YO(e) ? e : new Hp(e); }
function YO(e) { return e instanceof Error || typeof e == "object" && typeof e.name == "string" && typeof e.message == "string"; }
var _i = class extends Error {
    constructor(t) { super(t.message, { cause: t }); }
}, Hp = class extends Error {
    constructor(t) { super(String(t), { cause: t }); }
};
var Wp = { JSACTION: "__jsaction", OWNER: "__owner" }, TC = {};
function KO(e) { return e[Wp.JSACTION]; }
function EC(e, t) { e[Wp.JSACTION] = t; }
function JO(e) { return TC[e]; }
function XO(e, t) { TC[e] = t; }
var M = { CLICK: "click", CLICKMOD: "clickmod", DBLCLICK: "dblclick", FOCUS: "focus", FOCUSIN: "focusin", BLUR: "blur", FOCUSOUT: "focusout", SUBMIT: "submit", KEYDOWN: "keydown", KEYPRESS: "keypress", KEYUP: "keyup", MOUSEOVER: "mouseover", MOUSEOUT: "mouseout", MOUSEENTER: "mouseenter", MOUSELEAVE: "mouseleave", POINTEROVER: "pointerover", POINTEROUT: "pointerout", POINTERENTER: "pointerenter", POINTERLEAVE: "pointerleave", ERROR: "error", LOAD: "load", TOUCHSTART: "touchstart", TOUCHEND: "touchend", TOUCHMOVE: "touchmove", TOGGLE: "toggle" }, ex = [M.MOUSEENTER, M.MOUSELEAVE, "pointerenter", "pointerleave"], tx = [M.CLICK, M.DBLCLICK, M.FOCUSIN, M.FOCUSOUT, M.KEYDOWN, M.KEYUP, M.KEYPRESS, M.MOUSEOVER, M.MOUSEOUT, M.SUBMIT, M.TOUCHSTART, M.TOUCHEND, M.TOUCHMOVE, "touchcancel", "auxclick", "change", "compositionstart", "compositionupdate", "compositionend", "beforeinput", "input", "select", "copy", "cut", "paste", "mousedown", "mouseup", "wheel", "contextmenu", "dragover", "dragenter", "dragleave", "drop", "dragstart", "dragend", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerover", "pointerout", "gotpointercapture", "lostpointercapture", "ended", "loadedmetadata", "pagehide", "pageshow", "visibilitychange", "beforematch"], CC = [M.FOCUS, M.BLUR, M.ERROR, M.LOAD, M.TOGGLE], vc = e => CC.indexOf(e) >= 0, nx = tx.concat(CC), MC = e => nx.indexOf(e) >= 0;
function ox(e) { return e === M.MOUSEENTER ? M.MOUSEOVER : e === M.MOUSELEAVE ? M.MOUSEOUT : e === M.POINTERENTER ? M.POINTEROVER : e === M.POINTERLEAVE ? M.POINTEROUT : e; }
function rx(e, t, n, o) { let r = !1; vc(t) && (r = !0); let i = typeof o == "boolean" ? { capture: r, passive: o } : r; return e.addEventListener(t, n, i), { eventType: t, handler: n, capture: r, passive: o }; }
function ix(e, t) { if (e.removeEventListener) {
    let n = typeof t.passive == "boolean" ? { capture: t.capture } : t.capture;
    e.removeEventListener(t.eventType, t.handler, n);
}
else
    e.detachEvent && e.detachEvent(`on${t.eventType}`, t.handler); }
function sx(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1; }
var IC = typeof navigator < "u" && /Macintosh/.test(navigator.userAgent);
function ax(e) { return e.which === 2 || e.which == null && e.button === 4; }
function cx(e) { return IC && e.metaKey || !IC && e.ctrlKey || ax(e) || e.shiftKey; }
function lx(e, t, n) { let o = e.relatedTarget; return (e.type === M.MOUSEOVER && t === M.MOUSEENTER || e.type === M.MOUSEOUT && t === M.MOUSELEAVE || e.type === M.POINTEROVER && t === M.POINTERENTER || e.type === M.POINTEROUT && t === M.POINTERLEAVE) && (!o || o !== n && !n.contains(o)); }
function ux(e, t) { let n = {}; for (let o in e) {
    if (o === "srcElement" || o === "target")
        continue;
    let r = o, i = e[r];
    typeof i != "function" && (n[r] = i);
} return e.type === M.MOUSEOVER ? n.type = M.MOUSEENTER : e.type === M.MOUSEOUT ? n.type = M.MOUSELEAVE : e.type === M.POINTEROVER ? n.type = M.POINTERENTER : n.type = M.POINTERLEAVE, n.target = n.srcElement = t, n.bubbles = !1, n._originalEvent = e, n; }
var mc = class {
    element;
    handlerInfos = [];
    constructor(t) { this.element = t; }
    addEventListener(t, n, o) { this.handlerInfos.push(rx(this.element, t, n(this.element), o)); }
    cleanUp() { for (let t = 0; t < this.handlerInfos.length; t++)
        ix(this.element, this.handlerInfos[t]); this.handlerInfos = []; }
}, dx = { EVENT_ACTION_SEPARATOR: ":" };
function Jt(e) { return e.eventType; }
function zp(e, t) { e.eventType = t; }
function hc(e) { return e.event; }
function NC(e, t) { e.event = t; }
function wC(e) { return e.targetElement; }
function _C(e, t) { e.targetElement = t; }
function SC(e) { return e.eic; }
function fx(e, t) { e.eic = t; }
function px(e) { return e.timeStamp; }
function hx(e, t) { e.timeStamp = t; }
function gc(e) { return e.eia; }
function bC(e, t, n) { e.eia = [t, n]; }
function $p(e) { e.eia = void 0; }
function pc(e) { return e[1]; }
function gx(e) { return e.eirp; }
function AC(e, t) { e.eirp = t; }
function RC(e) { return e.eir; }
function kC(e, t) { e.eir = t; }
function OC(e) { return { eventType: e.eventType, event: e.event, targetElement: e.targetElement, eic: e.eic, eia: e.eia, timeStamp: e.timeStamp, eirp: e.eirp, eiack: e.eiack, eir: e.eir }; }
function mx(e, t, n, o, r, i, s, a) { return { eventType: e, event: t, targetElement: n, eic: o, timeStamp: r, eia: i, eirp: s, eiack: a }; }
var Up = class e {
    eventInfo;
    constructor(t) { this.eventInfo = t; }
    getEventType() { return Jt(this.eventInfo); }
    setEventType(t) { zp(this.eventInfo, t); }
    getEvent() { return hc(this.eventInfo); }
    setEvent(t) { NC(this.eventInfo, t); }
    getTargetElement() { return wC(this.eventInfo); }
    setTargetElement(t) { _C(this.eventInfo, t); }
    getContainer() { return SC(this.eventInfo); }
    setContainer(t) { fx(this.eventInfo, t); }
    getTimestamp() { return px(this.eventInfo); }
    setTimestamp(t) { hx(this.eventInfo, t); }
    getAction() { let t = gc(this.eventInfo); if (t)
        return { name: t[0], element: t[1] }; }
    setAction(t) { if (!t) {
        $p(this.eventInfo);
        return;
    } bC(this.eventInfo, t.name, t.element); }
    getIsReplay() { return gx(this.eventInfo); }
    setIsReplay(t) { AC(this.eventInfo, t); }
    getResolved() { return RC(this.eventInfo); }
    setResolved(t) { kC(this.eventInfo, t); }
    clone() { return new e(OC(this.eventInfo)); }
}, yx = {}, vx = /\s*;\s*/, Ex = M.CLICK, qp = class {
    a11yClickSupport = !1;
    clickModSupport = !0;
    syntheticMouseEventSupport;
    updateEventInfoForA11yClick = void 0;
    preventDefaultForA11yClick = void 0;
    populateClickOnlyAction = void 0;
    constructor({ syntheticMouseEventSupport: t = !1, clickModSupport: n = !0 } = {}) { this.syntheticMouseEventSupport = t, this.clickModSupport = n; }
    resolveEventType(t) { this.clickModSupport && Jt(t) === M.CLICK && cx(hc(t)) ? zp(t, M.CLICKMOD) : this.a11yClickSupport && this.updateEventInfoForA11yClick(t); }
    resolveAction(t) { RC(t) || (this.populateAction(t, wC(t)), kC(t, !0)); }
    resolveParentAction(t) { let n = gc(t), o = n && pc(n); $p(t); let r = o && this.getParentNode(o); r && this.populateAction(t, r); }
    populateAction(t, n) { let o = n; for (; o && o !== SC(t) && (o.nodeType === Node.ELEMENT_NODE && this.populateActionOnElement(o, t), !gc(t));)
        o = this.getParentNode(o); let r = gc(t); if (r && (this.a11yClickSupport && this.preventDefaultForA11yClick(t), this.syntheticMouseEventSupport && (Jt(t) === M.MOUSEENTER || Jt(t) === M.MOUSELEAVE || Jt(t) === M.POINTERENTER || Jt(t) === M.POINTERLEAVE)))
        if (lx(hc(t), Jt(t), pc(r))) {
            let i = ux(hc(t), pc(r));
            NC(t, i), _C(t, pc(r));
        }
        else
            $p(t); }
    getParentNode(t) { let n = t[Wp.OWNER]; if (n)
        return n; let o = t.parentNode; return o?.nodeName === "#document-fragment" ? o?.host ?? null : o; }
    populateActionOnElement(t, n) { let o = this.parseActions(t), r = o[Jt(n)]; r !== void 0 && bC(n, r, t), this.a11yClickSupport && this.populateClickOnlyAction(t, n, o); }
    parseActions(t) { let n = KO(t); if (!n) {
        let o = t.getAttribute(Zn.JSACTION);
        if (!o)
            n = yx, EC(t, n);
        else {
            if (n = JO(o), !n) {
                n = {};
                let r = o.split(vx);
                for (let i = 0; i < r.length; i++) {
                    let s = r[i];
                    if (!s)
                        continue;
                    let a = s.indexOf(dx.EVENT_ACTION_SEPARATOR), c = a !== -1, l = c ? s.substr(0, a).trim() : Ex, u = c ? s.substr(a + 1).trim() : s;
                    n[l] = u;
                }
                XO(o, n);
            }
            EC(t, n);
        }
    } return n; }
    addA11yClickSupport(t, n, o) { this.a11yClickSupport = !0, this.updateEventInfoForA11yClick = t, this.preventDefaultForA11yClick = n, this.populateClickOnlyAction = o; }
}, xC = (function (e) { return e[e.I_AM_THE_JSACTION_FRAMEWORK = 0] = "I_AM_THE_JSACTION_FRAMEWORK", e; })(xC || {}), Gp = class {
    dispatchDelegate;
    actionResolver;
    eventReplayer;
    eventReplayScheduled = !1;
    replayEventInfoWrappers = [];
    constructor(t, { actionResolver: n, eventReplayer: o } = {}) { this.dispatchDelegate = t, this.actionResolver = n, this.eventReplayer = o; }
    dispatch(t) { let n = new Up(t); this.actionResolver?.resolveEventType(t), this.actionResolver?.resolveAction(t); let o = n.getAction(); if (o && Ix(o.element, n) && sx(n.getEvent()), this.eventReplayer && n.getIsReplay()) {
        this.scheduleEventInfoWrapperReplay(n);
        return;
    } this.dispatchDelegate(n); }
    scheduleEventInfoWrapperReplay(t) { this.replayEventInfoWrappers.push(t), !this.eventReplayScheduled && (this.eventReplayScheduled = !0, Promise.resolve().then(() => { this.eventReplayScheduled = !1, this.eventReplayer(this.replayEventInfoWrappers); })); }
};
function Ix(e, t) { return e.tagName === "A" && (t.getEventType() === M.CLICK || t.getEventType() === M.CLICKMOD); }
var PC = Symbol.for("propagationStopped"), Qp = { REPLAY: 101 };
var Dx = "`preventDefault` called during event replay.";
var Tx = "`composedPath` called during event replay.", yc = class {
    dispatchDelegate;
    clickModSupport;
    actionResolver;
    dispatcher;
    constructor(t, n = !0) { this.dispatchDelegate = t, this.clickModSupport = n, this.actionResolver = new qp({ clickModSupport: n }), this.dispatcher = new Gp(o => { this.dispatchToDelegate(o); }, { actionResolver: this.actionResolver }); }
    dispatch(t) { this.dispatcher.dispatch(t); }
    dispatchToDelegate(t) { for (t.getIsReplay() && Nx(t), Cx(t); t.getAction();) {
        if (wx(t), vc(t.getEventType()) && t.getAction().element !== t.getTargetElement() || (this.dispatchDelegate(t.getEvent(), t.getAction().name), Mx(t)))
            return;
        this.actionResolver.resolveParentAction(t.eventInfo);
    } }
};
function Cx(e) { let t = e.getEvent(), n = e.getEvent().stopPropagation.bind(t), o = () => { t[PC] = !0, n(); }; Pn(t, "stopPropagation", o), Pn(t, "stopImmediatePropagation", o); }
function Mx(e) { return !!e.getEvent()[PC]; }
function Nx(e) { let t = e.getEvent(), n = e.getTargetElement(), o = t.preventDefault.bind(t); Pn(t, "target", n), Pn(t, "eventPhase", Qp.REPLAY), Pn(t, "preventDefault", () => { throw o(), new Error(Dx + ""); }), Pn(t, "composedPath", () => { throw new Error(Tx + ""); }); }
function wx(e) { let t = e.getEvent(), n = e.getAction()?.element; n && Pn(t, "currentTarget", n, { configurable: !0 }); }
function Pn(e, t, n, { configurable: o = !1 } = {}) { Object.defineProperty(e, t, { value: n, configurable: o }); }
function LC(e, t) { e.ecrd(n => { t.dispatch(n); }, xC.I_AM_THE_JSACTION_FRAMEWORK); }
function _x(e) { return e?.q ?? []; }
function Sx(e) { e && (DC(e.c, e.et, e.h), DC(e.c, e.etc, e.h, !0)); }
function DC(e, t, n, o) { for (let r = 0; r < t.length; r++)
    e.removeEventListener(t[r], n, o); }
var bx = !1, FC = (() => { class e {
    static MOUSE_SPECIAL_SUPPORT = bx;
    containerManager;
    eventHandlers = {};
    browserEventTypeToExtraEventTypes = {};
    dispatcher = null;
    queuedEventInfos = [];
    constructor(n) { this.containerManager = n; }
    handleEvent(n, o, r) { let i = mx(n, o, o.target, r, Date.now()); this.handleEventInfo(i); }
    handleEventInfo(n) { if (!this.dispatcher) {
        AC(n, !0), this.queuedEventInfos?.push(n);
        return;
    } this.dispatcher(n); }
    addEvent(n, o, r) { if (n in this.eventHandlers || !this.containerManager || !e.MOUSE_SPECIAL_SUPPORT && ex.indexOf(n) >= 0)
        return; let i = (a, c, l) => { this.handleEvent(a, c, l); }; this.eventHandlers[n] = i; let s = ox(o || n); if (s !== n) {
        let a = this.browserEventTypeToExtraEventTypes[s] || [];
        a.push(n), this.browserEventTypeToExtraEventTypes[s] = a;
    } this.containerManager.addEventListener(s, a => c => { i(n, c, a); }, r); }
    replayEarlyEvents(n = window._ejsa) { n && (this.replayEarlyEventInfos(n.q), Sx(n), delete window._ejsa); }
    replayEarlyEventInfos(n) { for (let o = 0; o < n.length; o++) {
        let r = n[o], i = this.getEventTypesForBrowserEventType(r.eventType);
        for (let s = 0; s < i.length; s++) {
            let a = OC(r);
            zp(a, i[s]), this.handleEventInfo(a);
        }
    } }
    getEventTypesForBrowserEventType(n) { let o = []; return this.eventHandlers[n] && o.push(n), this.browserEventTypeToExtraEventTypes[n] && o.push(...this.browserEventTypeToExtraEventTypes[n]), o; }
    handler(n) { return this.eventHandlers[n]; }
    cleanUp() { this.containerManager?.cleanUp(), this.containerManager = null, this.eventHandlers = {}, this.browserEventTypeToExtraEventTypes = {}, this.dispatcher = null, this.queuedEventInfos = []; }
    registerDispatcher(n, o) { this.ecrd(n, o); }
    ecrd(n, o) { if (this.dispatcher = n, this.queuedEventInfos?.length) {
        for (let r = 0; r < this.queuedEventInfos.length; r++)
            this.handleEventInfo(this.queuedEventInfos[r]);
        this.queuedEventInfos = null;
    } }
} return e; })();
function jC(e, t = window) { return _x(t._ejsas?.[e]); }
function Zp(e, t = window) { t._ejsas && (t._ejsas[e] = void 0); }
import "@angular/core/primitives/signals";
import "@angular/core/primitives/di";
typeof globalThis.ngServerMode > "u" && (globalThis.ngServerMode = typeof window > "u");
var Nc = Symbol("InputSignalNode#UNSET"), iM = we(z({}, Ac), { transformFn: void 0, applyValueToInputSignal(e, t) { bc(e, t); } }), IF = Symbol();
function sM(e, t) { let n = Object.create(iM); n.value = e, n.transformFn = t?.transform; function o() { if (ki(n), n.value === Nc) {
    let r = null;
    throw new D(-950, r);
} return n.value; } return o[ae] = n, o; }
var $o = (function (e) { return e[e.Directive = 0] = "Directive", e[e.Component = 1] = "Component", e[e.Injectable = 2] = "Injectable", e[e.Pipe = 3] = "Pipe", e[e.NgModule = 4] = "NgModule", e; })($o || {});
var Ax = (function (e) { return e.Angular = "angular", e.ACX = "acx", e.Wiz = "wiz", e; })(Ax || {}), VC = class {
    attributeName;
    constructor(t) { this.attributeName = t; }
    __NG_ELEMENT_ID__ = () => ua(this.attributeName);
    toString() { return `HostAttributeToken ${this.attributeName}`; }
}, DF = (() => { let e = new C(""); return e.__NG_ELEMENT_ID__ = t => { let n = _(); if (n === null)
    throw new D(-204, !1); if (n.type & 2)
    return n.value; if (t & 8)
    return null; throw new D(-204, !1); }, e; })();
function TF(e) { return new wi; }
function HC(e, t) { return sM(e, t); }
function Rx(e) { return sM(Nc, e); }
var CF = (HC.required = Rx, HC);
function BC(e, t) { return _f(t); }
function kx(e, t) { return Sf(t); }
var MF = (BC.required = kx, BC);
function NF(e, t) { return bf(t); }
function $C(e, t) { return _f(t); }
function Ox(e, t) { return Sf(t); }
var wF = ($C.required = Ox, $C);
function _F(e, t) { return bf(t); }
function aM(e, t) { let n = Object.create(iM), o = new wi; n.value = e; function r() { return ki(n), UC(n.value), n.value; } return r[ae] = n, r.asReadonly = Wn.bind(r), r.set = i => { n.equal(n.value, i) || (bc(n, i), o.emit(i)); }, r.update = i => { UC(n.value), r.set(i(n.value)); }, r.subscribe = o.subscribe.bind(o), r.destroyRef = o.destroyRef, r; }
function UC(e) { if (e === Nc)
    throw new D(952, !1); }
function qC(e, t) { return aM(e, t); }
function xx(e) { return aM(Nc, e); }
var SF = (qC.required = xx, qC), cM = !0, qo = class {
}, bF = wt("ContentChildren", (e, t = {}) => z({ selector: e, first: !1, isViewQuery: !1, descendants: !1, emitDistinctChangesOnly: cM }, t), qo), AF = wt("ContentChild", (e, t = {}) => z({ selector: e, first: !0, isViewQuery: !1, descendants: !0 }, t), qo), RF = wt("ViewChildren", (e, t = {}) => z({ selector: e, first: !1, isViewQuery: !0, descendants: !0, emitDistinctChangesOnly: cM }, t), qo), kF = wt("ViewChild", (e, t) => z({ selector: e, first: !0, isViewQuery: !0, descendants: !0 }, t), qo);
function Px(e, t, n) { let o = new vo(n); return Promise.resolve(o); }
function GC(e) { for (let t = e.length - 1; t >= 0; t--)
    if (e[t] !== void 0)
        return e[t]; }
var Lx = (() => { class e {
    zone = v(q);
    changeDetectionScheduler = v(xe);
    applicationRef = v(Ge);
    applicationErrorHandler = v(It);
    _onMicrotaskEmptySubscription;
    initialize() { this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({ next: () => { this.changeDetectionScheduler.runningTick || this.zone.run(() => { try {
            this.applicationRef.dirtyFlags |= 1, this.applicationRef._tick();
        }
        catch (n) {
            this.applicationErrorHandler(n);
        } }); } })); }
    ngOnDestroy() { this._onMicrotaskEmptySubscription?.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), Fx = new C("", { factory: () => !1 });
function jx({ ngZoneFactory: e, scheduleInRootZone: t }) { return e ??= () => new q(we(z({}, lM()), { scheduleInRootZone: t })), [{ provide: Qn, useValue: !1 }, { provide: q, useFactory: e }, { provide: Fe, multi: !0, useFactory: () => { let n = v(Lx, { optional: !0 }); return () => n.initialize(); } }, { provide: Fe, multi: !0, useFactory: () => { let n = v(Vx); return () => { n.initialize(); }; } }, { provide: ds, useValue: t ?? Vl }]; }
function OF(e) { let t = e?.scheduleInRootZone, n = jx({ ngZoneFactory: () => { let o = lM(e); return o.scheduleInRootZone = t, o.shouldCoalesceEventChangeDetection && J("NgZone_CoalesceEvent"), new q(o); }, scheduleInRootZone: t }); return Ye([{ provide: Fx, useValue: !0 }, n]); }
function lM(e) { return { enableLongStackTrace: !1, shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1, shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1 }; }
var Vx = (() => { class e {
    subscription = new Ln;
    initialized = !1;
    zone = v(q);
    pendingTasks = v(Et);
    initialize() { if (this.initialized)
        return; this.initialized = !0; let n = null; !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (n = this.pendingTasks.add()), this.zone.runOutsideAngular(() => { this.subscription.add(this.zone.onStable.subscribe(() => { q.assertNotInAngularZone(), queueMicrotask(() => { n !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(n), n = null); }); })); }), this.subscription.add(this.zone.onUnstable.subscribe(() => { q.assertInAngularZone(), n ??= this.pendingTasks.add(); })); }
    ngOnDestroy() { this.subscription.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
var Ic = new C(""), Hx = new C("");
function Si(e) { return !e.moduleRef; }
function uM(e) { let t = Si(e) ? e.r3Injector : e.moduleRef.injector, n = t.get(q); return n.run(() => { Si(e) ? e.r3Injector.resolveInjectorInitializers() : e.moduleRef.resolveInjectorInitializers(); let o = t.get(It), r; if (n.runOutsideAngular(() => { r = n.onError.subscribe({ next: o }); }), Si(e)) {
    let i = () => t.destroy(), s = e.platformInjector.get(Ic);
    s.add(i), t.onDestroy(() => { r.unsubscribe(), s.delete(i); });
}
else {
    let i = () => e.moduleRef.destroy(), s = e.platformInjector.get(Ic);
    s.add(i), e.moduleRef.onDestroy(() => { _r(e.allPlatformModules, e.moduleRef), r.unsubscribe(), s.delete(i); });
} return $x(o, n, () => { let i = t.get(Et), s = i.add(), a = t.get(Gf); return a.runInitializers(), a.donePromise.then(() => { let c = t.get(Pp, Ci); if (dD(c || Ci), !t.get(Hx, !0))
    return Si(e) ? t.get(Ge) : (e.allPlatformModules.push(e.moduleRef), e.moduleRef); if (Si(e)) {
    let u = t.get(Ge);
    return e.rootComponent !== void 0 && u.bootstrap(e.rootComponent), u;
}
else
    return dM?.(e.moduleRef, e.allPlatformModules), e.moduleRef; }).finally(() => { i.remove(s); }); }); }); }
var dM;
function WC() { dM = Bx; }
function Bx(e, t) { let n = e.injector.get(Ge); if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach(o => n.bootstrap(o));
else if (e.instance.ngDoBootstrap)
    e.instance.ngDoBootstrap(n);
else
    throw new D(-403, !1); t.push(e); }
function $x(e, t, n) { try {
    let o = n();
    return Uf(o) ? o.catch(r => { throw t.runOutsideAngular(() => e(r)), r; }) : o;
}
catch (o) {
    throw t.runOutsideAngular(() => e(o)), o;
} }
var fM = (() => { class e {
    _injector;
    _modules = [];
    _destroyListeners = [];
    _destroyed = !1;
    constructor(n) { this._injector = n; }
    bootstrapModuleFactory(n, o) { let r = [dc(), ...o?.applicationProviders ?? [], ql], i = GE(n.moduleType, this.injector, r); return WC(), uM({ moduleRef: i, allPlatformModules: this._modules, platformInjector: this.injector }); }
    bootstrapModule(n, o = []) { let r = zf({}, o); return WC(), Px(this.injector, r, n).then(i => this.bootstrapModuleFactory(i, r)); }
    onDestroy(n) { this._destroyListeners.push(n); }
    get injector() { return this._injector; }
    destroy() { if (this._destroyed)
        throw new D(404, !1); this._modules.slice().forEach(o => o.destroy()), this._destroyListeners.forEach(o => o()); let n = this._injector.get(Ic, null); n && (n.forEach(o => o()), n.clear()), this._destroyed = !0; }
    get destroyed() { return this._destroyed; }
    static \u0275fac = function (o) { return new (o || e)(pe(ce)); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })(), Uo = null;
function Ux(e) { if (wc())
    throw new D(400, !1); Wf(), Uo = typeof ngServerMode > "u" || !ngServerMode ? e : null; let t = e.get(fM); return hM(e), t; }
function qx(e, t, n = []) { let o = `Platform: ${t}`, r = new C(o); return (i = []) => { let s = wc(); if (!s) {
    let a = [...n, ...i, { provide: r, useValue: !0 }];
    s = e?.(a) ?? Ux(pM(a, o));
} return typeof ngServerMode < "u" && ngServerMode ? s : Gx(r); }; }
function pM(e = [], t) { return ce.create({ name: t, providers: [{ provide: sl, useValue: "platform" }, { provide: Ic, useValue: new Set([() => Uo = null]) }, ...e] }); }
function Gx(e) { let t = wc(); if (!t)
    throw new D(-401, !1); return t; }
function wc() { return typeof ngServerMode < "u" && ngServerMode ? null : Uo?.get(fM) ?? null; }
function xF() { wc()?.destroy(); }
function Wx(e = []) { if (Uo)
    return Uo; let t = pM(e); return (typeof ngServerMode > "u" || !ngServerMode) && (Uo = t), Wf(), hM(t), t; }
function PF(e) { return { provide: Td, useValue: e, multi: !0 }; }
function hM(e) { let t = e.get(Td, null); Ji(e, () => { t?.forEach(n => n()); }); }
function LF(e) { return Ye([]); }
function FF() { return !1; }
function jF() { }
var Ec = new WeakSet, zC = "";
function QC(e) { return e.get(Ea, Sd); }
function zx() { let e = [{ provide: Ea, useFactory: () => { let t = !0; if (typeof ngServerMode > "u" || !ngServerMode) {
            let n = v(_t);
            t = !!window._ejsas?.[n];
        } return t && J("NgEventReplay"), t; } }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: Fe, useValue: () => { let t = v(Ge), { injector: n } = t; if (!Ec.has(t)) {
        let o = v(ci);
        if (QC(n)) {
            dy();
            let r = n.get(_t), i = ly(r, (s, a, c) => { s.nodeType === Node.ELEMENT_NODE && (cy(s, a, c), Rd(s, o)); });
            t.onDestroy(i);
        }
    } }, multi: !0 }, { provide: Ii, useFactory: () => { let t = v(Ge), { injector: n } = t; return () => { if (!QC(n) || Ec.has(t))
        return; Ec.add(t); let o = n.get(_t); t.onDestroy(() => { Ec.delete(t), typeof ngServerMode < "u" && !ngServerMode && Zp(o); }), t.whenStable().then(() => { if (t.destroyed)
        return; let r = n.get(Od); Qx(r, n); let i = n.get(ci); i.get(zC)?.forEach(kd), i.delete(zC); let s = r.instance; li(n) ? t.onDestroy(() => s.cleanUp()) : s.cleanUp(); }); }; }, multi: !0 }), e; }
var Qx = (e, t) => { let n = t.get(_t), o = window._ejsas[n], r = e.instance = new FC(new mc(o.c)); for (let a of o.et)
    r.addEvent(a); for (let a of o.etc)
    r.addEvent(a); let i = jC(n); r.replayEarlyEventInfos(i), Zp(n); let s = new yc(a => { Yx(t, a, a.currentTarget); }); LC(r, s); };
function Zx(e, t, n) { let o = new Map, r = t[Lt], i = e.cleanup; if (!i || !r)
    return o; for (let s = 0; s < i.length;) {
    let a = i[s++], c = i[s++];
    if (typeof a != "string")
        continue;
    let l = a;
    if (!MC(l))
        continue;
    vc(l) ? n.capture.add(l) : n.regular.add(l);
    let u = L(t[c]);
    s++;
    let d = i[s++];
    (typeof d == "boolean" || d >= 0) && (o.has(u) ? o.get(u).push(l) : o.set(u, [l]));
} return o; }
function Yx(e, t, n) { let o = (n && n.getAttribute(bo)) ?? ""; /d\d+/.test(o) ? Kx(o, e, t, n) : t.eventPhase === Qp.REPLAY && xd(t, n); }
function Kx(e, t, n, o) { let r = t.get(ry); r.push({ event: n, currentTarget: o }), Rt(t, e, Jx(r)); }
function Jx(e) { return t => { let n = new Set(t), o = []; for (let { event: r, currentTarget: i } of e) {
    let s = i.getAttribute(bo);
    n.has(s) ? xd(r, i) : o.push({ event: r, currentTarget: i });
} e.length = 0, e.push(...o); }; }
var ZC = !1, YC = !1, KC = !1, Xx = 1e4;
function eP() { ZC || (ZC = !0, yy(), rD(), QD(), iD(), rI(), RE(), aE(), Mv()); }
function tP() { YC || (YC = !0, pD(), Jv(), oE()); }
function nP() { KC || (KC = !0, wy()); }
function oP(e) { return e.whenStable(); }
var VF = "ngcm";
function HF() { let e = [{ provide: An, useFactory: () => { let t = !0; return (typeof ngServerMode > "u" || !ngServerMode) && (t = !!v(wo, { optional: !0 })?.get(Ia, null)), t && J("NgHydration"), t; } }, { provide: Fe, useValue: () => { if (mf(!1), typeof ngServerMode < "u" && ngServerMode)
            return; let t = v($t); v(An) && (Sy(t), eP()); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: wd, useFactory: () => v(An) }, { provide: Ii, useFactory: () => { let t = v(xe); if (v(An)) {
        let n = v(Ge);
        return () => { oP(n).then(() => { n.destroyed || (yf(n), t.notify(7)); }); };
    } return () => { }; }, multi: !0 }), Ye(e); }
function BF() { return [{ provide: _d, useFactory: () => v(An) }, { provide: Fe, useValue: () => { v(An) && (tP(), mf(!0), J("NgI18nHydration")); }, multi: !0 }]; }
function $F() { let e = [zx(), { provide: bd, useValue: !0 }, { provide: St, useClass: fy }, { provide: Fe, useValue: () => { nP(), J("NgIncrementalHydration"); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: Ii, useFactory: () => { let t = v(ce), n = v($t); return () => { let o = _y(t), r = Zv(n, n.body); _I(t, o, r), My(n, t); }; }, multi: !0 }), e; }
var JC = Xx - 1e3, Jp = class {
    openTasks = new Map;
    add(t) { this.openTasks.set(t, new Error("Task stack tracking error")); }
    remove(t) { this.openTasks.delete(t); }
};
function UF() { let e = new Jp, { openTasks: t } = e; return Ye([{ provide: Hl, useValue: e }, DI(() => { console.warn("Stability debugging utility was provided in production mode. This will cause debug code to be included in production bundles. If this is intentional because you are debugging stability issues in a production environment, you can ignore this warning."); let n = v(q), o = v(Ge), r = null; typeof Zone < "u" && n.run(() => { r = Zone.current.get("TaskTrackingZone"); }), n.runOutsideAngular(() => { let i = setTimeout(() => { if (console.debug(`---- Application did not stabilize within ${JC / 1e3} seconds ----`), typeof Zone < "u" && !r && console.info('Zone.js is present but no TaskTrackingZone found. To enable better debugging of tasks in the Angular Zone, import "zone.js/plugins/task-tracking" in your application.'), r?.macroTasks?.length) {
        console.group("Macrotasks keeping Angular Zone unstable:");
        for (let s of r?.macroTasks ?? [])
            console.debug(s.creationLocation.stack);
        console.groupEnd();
    } console.group("PendingTasks keeping application unstable:"); for (let s of t.values())
        console.debug(s.stack); console.groupEnd(); }, JC); o.whenStable().then(() => { clearTimeout(i); }); }); })]); }
function qF(e) { let t = Rf(e); if (!t)
    throw gM(e); return new vo(t); }
function GF(e) { let t = Rf(e); if (!t)
    throw gM(e); return t; }
function gM(e) { return new D(920, !1); }
var rP = (() => { class e {
    static __NG_ELEMENT_ID__ = iP;
} return e; })();
function iP(e) { return sP(_(), g(), (e & 16) === 16); }
function sP(e, t, n) { if (De(e) && !n) {
    let o = ye(e.index, t);
    return new Zt(o, o);
}
else if (e.type & 175) {
    let o = t[ee];
    return new Zt(o, t);
} return null; }
var Xp = class extends rP {
}, XC = class extends Xp {
}, Dc = class {
    supports(t) { return Wr(t); }
    create(t) { return new eh(t); }
}, aP = (e, t) => t, eh = class {
    length = 0;
    collection;
    _linkedRecords = null;
    _unlinkedRecords = null;
    _previousItHead = null;
    _itHead = null;
    _itTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _movesHead = null;
    _movesTail = null;
    _removalsHead = null;
    _removalsTail = null;
    _identityChangesHead = null;
    _identityChangesTail = null;
    _trackByFn;
    constructor(t) { this._trackByFn = t || aP; }
    forEachItem(t) { let n; for (n = this._itHead; n !== null; n = n._next)
        t(n); }
    forEachOperation(t) { let n = this._itHead, o = this._removalsHead, r = 0, i = null; for (; n || o;) {
        let s = !o || n && n.currentIndex < eM(o, r, i) ? n : o, a = eM(s, r, i), c = s.currentIndex;
        if (s === o)
            r--, o = o._nextRemoved;
        else if (n = n._next, s.previousIndex == null)
            r++;
        else {
            i || (i = []);
            let l = a - r, u = c - r;
            if (l != u) {
                for (let f = 0; f < l; f++) {
                    let p = f < i.length ? i[f] : i[f] = 0, h = p + f;
                    u <= h && h < l && (i[f] = p + 1);
                }
                let d = s.previousIndex;
                i[d] = u - l;
            }
        }
        a !== c && t(s, a, c);
    } }
    forEachPreviousItem(t) { let n; for (n = this._previousItHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachMovedItem(t) { let n; for (n = this._movesHead; n !== null; n = n._nextMoved)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    forEachIdentityChange(t) { let n; for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange)
        t(n); }
    diff(t) { if (t == null && (t = []), !Wr(t))
        throw new D(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._itHead, o = !1, r, i, s; if (Array.isArray(t)) {
        this.length = t.length;
        for (let a = 0; a < this.length; a++)
            i = t[a], s = this._trackByFn(a, i), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, i, s, a), o = !0) : (o && (n = this._verifyReinsertion(n, i, s, a)), Object.is(n.item, i) || this._addIdentityChange(n, i)), n = n._next;
    }
    else
        r = 0, mE(t, a => { s = this._trackByFn(r, a), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, a, s, r), o = !0) : (o && (n = this._verifyReinsertion(n, a, s, r)), Object.is(n.item, a) || this._addIdentityChange(n, a)), n = n._next, r++; }), this.length = r; return this._truncate(n), this.collection = t, this.isDirty; }
    get isDirty() { return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null; }
    _reset() { if (this.isDirty) {
        let t;
        for (t = this._previousItHead = this._itHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._additionsHead; t !== null; t = t._nextAdded)
            t.previousIndex = t.currentIndex;
        for (this._additionsHead = this._additionsTail = null, t = this._movesHead; t !== null; t = t._nextMoved)
            t.previousIndex = t.currentIndex;
        this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null;
    } }
    _mismatch(t, n, o, r) { let i; return t === null ? i = this._itTail : (i = t._prev, this._remove(t)), t = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, i, r)) : (t = this._linkedRecords === null ? null : this._linkedRecords.get(o, r), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, i, r)) : t = this._addAfter(new th(n, o), i, r)), t; }
    _verifyReinsertion(t, n, o, r) { let i = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null); return i !== null ? t = this._reinsertAfter(i, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t; }
    _truncate(t) { for (; t !== null;) {
        let n = t._next;
        this._addToRemovals(this._unlink(t)), t = n;
    } this._unlinkedRecords !== null && this._unlinkedRecords.clear(), this._additionsTail !== null && (this._additionsTail._nextAdded = null), this._movesTail !== null && (this._movesTail._nextMoved = null), this._itTail !== null && (this._itTail._next = null), this._removalsTail !== null && (this._removalsTail._nextRemoved = null), this._identityChangesTail !== null && (this._identityChangesTail._nextIdentityChange = null); }
    _reinsertAfter(t, n, o) { this._unlinkedRecords !== null && this._unlinkedRecords.remove(t); let r = t._prevRemoved, i = t._nextRemoved; return r === null ? this._removalsHead = i : r._nextRemoved = i, i === null ? this._removalsTail = r : i._prevRemoved = r, this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _moveAfter(t, n, o) { return this._unlink(t), this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _addAfter(t, n, o) { return this._insertAfter(t, n, o), this._additionsTail === null ? this._additionsTail = this._additionsHead = t : this._additionsTail = this._additionsTail._nextAdded = t, t; }
    _insertAfter(t, n, o) { let r = n === null ? this._itHead : n._next; return t._next = r, t._prev = n, r === null ? this._itTail = t : r._prev = t, n === null ? this._itHead = t : n._next = t, this._linkedRecords === null && (this._linkedRecords = new Tc), this._linkedRecords.put(t), t.currentIndex = o, t; }
    _remove(t) { return this._addToRemovals(this._unlink(t)); }
    _unlink(t) { this._linkedRecords !== null && this._linkedRecords.remove(t); let n = t._prev, o = t._next; return n === null ? this._itHead = o : n._next = o, o === null ? this._itTail = n : o._prev = n, t; }
    _addToMoves(t, n) { return t.previousIndex === n || (this._movesTail === null ? this._movesTail = this._movesHead = t : this._movesTail = this._movesTail._nextMoved = t), t; }
    _addToRemovals(t) { return this._unlinkedRecords === null && (this._unlinkedRecords = new Tc), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, this._removalsTail === null ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t; }
    _addIdentityChange(t, n) { return t.item = n, this._identityChangesTail === null ? this._identityChangesTail = this._identityChangesHead = t : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = t, t; }
}, th = class {
    item;
    trackById;
    currentIndex = null;
    previousIndex = null;
    _nextPrevious = null;
    _prev = null;
    _next = null;
    _prevDup = null;
    _nextDup = null;
    _prevRemoved = null;
    _nextRemoved = null;
    _nextAdded = null;
    _nextMoved = null;
    _nextIdentityChange = null;
    constructor(t, n) { this.item = t, this.trackById = n; }
}, nh = class {
    _head = null;
    _tail = null;
    add(t) { this._head === null ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t); }
    get(t, n) { let o; for (o = this._head; o !== null; o = o._nextDup)
        if ((n === null || n <= o.currentIndex) && Object.is(o.trackById, t))
            return o; return null; }
    remove(t) { let n = t._prevDup, o = t._nextDup; return n === null ? this._head = o : n._nextDup = o, o === null ? this._tail = n : o._prevDup = n, this._head === null; }
}, Tc = class {
    map = new Map;
    put(t) { let n = t.trackById, o = this.map.get(n); o || (o = new nh, this.map.set(n, o)), o.add(t); }
    get(t, n) { let o = t, r = this.map.get(o); return r ? r.get(t, n) : null; }
    remove(t) { let n = t.trackById; return this.map.get(n).remove(t) && this.map.delete(n), t; }
    get isEmpty() { return this.map.size === 0; }
    clear() { this.map.clear(); }
};
function eM(e, t, n) { let o = e.previousIndex; if (o === null)
    return o; let r = 0; return n && o < n.length && (r = n[o]), o + t + r; }
var Cc = class {
    supports(t) { return t instanceof Map || Ya(t); }
    create() { return new oh; }
}, oh = class {
    _records = new Map;
    _mapHead = null;
    _appendAfter = null;
    _previousMapHead = null;
    _changesHead = null;
    _changesTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _removalsHead = null;
    get isDirty() { return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null; }
    forEachItem(t) { let n; for (n = this._mapHead; n !== null; n = n._next)
        t(n); }
    forEachPreviousItem(t) { let n; for (n = this._previousMapHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachChangedItem(t) { let n; for (n = this._changesHead; n !== null; n = n._nextChanged)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    diff(t) { if (!t)
        t = new Map;
    else if (!(t instanceof Map || Ya(t)))
        throw new D(900, !1); return this.check(t) ? this : null; }
    check(t) { this._reset(); let n = this._mapHead; if (this._appendAfter = null, this._forEach(t, (o, r) => { if (n && n.key === r)
        this._maybeAddToChanges(n, o), this._appendAfter = n, n = n._next;
    else {
        let i = this._getOrCreateRecordForKey(r, o);
        n = this._insertBeforeOrAppend(n, i);
    } }), n) {
        n._prev && (n._prev._next = null), this._removalsHead = n;
        for (let o = n; o !== null; o = o._nextRemoved)
            o === this._mapHead && (this._mapHead = null), this._records.delete(o.key), o._nextRemoved = o._next, o.previousValue = o.currentValue, o.currentValue = null, o._prev = null, o._next = null;
    } return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty; }
    _insertBeforeOrAppend(t, n) { if (t) {
        let o = t._prev;
        return n._next = t, n._prev = o, t._prev = n, o && (o._next = n), t === this._mapHead && (this._mapHead = n), this._appendAfter = t, t;
    } return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null; }
    _getOrCreateRecordForKey(t, n) { if (this._records.has(t)) {
        let r = this._records.get(t);
        this._maybeAddToChanges(r, n);
        let i = r._prev, s = r._next;
        return i && (i._next = s), s && (s._prev = i), r._next = null, r._prev = null, r;
    } let o = new rh(t); return this._records.set(t, o), o.currentValue = n, this._addToAdditions(o), o; }
    _reset() { if (this.isDirty) {
        let t;
        for (this._previousMapHead = this._mapHead, t = this._previousMapHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._changesHead; t !== null; t = t._nextChanged)
            t.previousValue = t.currentValue;
        for (t = this._additionsHead; t != null; t = t._nextAdded)
            t.previousValue = t.currentValue;
        this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null;
    } }
    _maybeAddToChanges(t, n) { Object.is(n, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = n, this._addToChanges(t)); }
    _addToAdditions(t) { this._additionsHead === null ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t); }
    _addToChanges(t) { this._changesHead === null ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t); }
    _forEach(t, n) { t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(o => n(t[o], o)); }
}, rh = class {
    key;
    previousValue = null;
    currentValue = null;
    _nextPrevious = null;
    _next = null;
    _prev = null;
    _nextAdded = null;
    _nextRemoved = null;
    _nextChanged = null;
    constructor(t) { this.key = t; }
};
function tM() { return new mM([new Dc]); }
var mM = (() => { class e {
    factories;
    static \u0275prov = B({ token: e, providedIn: "root", factory: tM });
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o != null) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = v(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || tM()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o != null)
        return o; throw new D(901, !1); }
} return e; })();
function nM() { return new yM([new Cc]); }
var yM = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: nM });
    factories;
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = v(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || nM()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o)
        return o; throw new D(901, !1); }
} return e; })(), cP = [new Cc], lP = [new Dc], WF = new mM(lP), zF = new yM(cP), QF = qx(null, "core", []), ZF = (() => { class e {
    constructor(n) { }
    static \u0275fac = function (o) { return new (o || e)(pe(Ge)); };
    static \u0275mod = Of({ type: e });
    static \u0275inj = or({});
} return e; })();
function YF(e) { let { rootComponent: t, appProviders: n, platformProviders: o, platformRef: r } = e; if (V(O.BootstrapApplicationStart), typeof ngServerMode < "u" && ngServerMode && !r)
    throw new D(-401, !1); try {
    let i = r?.injector ?? Wx(o), s = [dc(), ql, ...n || []], a = new Qr({ providers: s, parent: i, debugName: "", runEnvironmentInitializers: !1 });
    return uM({ r3Injector: a.injector, platformInjector: i, rootComponent: t });
}
catch (i) {
    return Promise.reject(i);
}
finally {
    V(O.BootstrapApplicationEnd);
} }
var ih = class {
    views = [];
    indexByContent = new Map;
    add(t) { let n = JSON.stringify(t); if (!this.indexByContent.has(n)) {
        let o = this.views.length;
        return this.views.push(t), this.indexByContent.set(n, o), o;
    } return this.indexByContent.get(n); }
    getAll() { return this.views; }
}, uP = 0;
function vM(e) { return e.ssrId || (e.ssrId = `t${uP++}`), e.ssrId; }
function EM(e, t, n) { let o = []; return po(e, t, n, o), o.length; }
function dP(e) { let t = []; return $a(e, t), t.length; }
function IM(e, t) { let n = e[U]; return n && !n.hasAttribute(Mo) ? Mc(n, e, null, t) : null; }
function DM(e, t) { let n = pr(e[U]), o = IM(n, t); if (o === null)
    return; let r = L(n[U]), i = e[Q], s = Mc(r, i, null, t), a = n[w], c = `${o}|${s}`; a.setAttribute(r, io, c); }
function KF(e, t) { let n = e.injector, o = Xv(n), r = li(n), i = new ih, s = new Map, a = e._views, c = n.get(Ea, Sd), l = { regular: new Set, capture: new Set }, u = new Map; e.injector.get(_t); for (let p of a) {
    let h = Pd(p);
    if (h !== null) {
        let y = { serializedViewCollection: i, corruptedTextNodes: s, isI18nHydrationEnabled: o, isIncrementalHydrationEnabled: r, i18nChildren: new Map, eventTypesToReplay: l, shouldReplayEvents: c, deferBlocks: u };
        K(h) ? DM(h, y) : IM(h, y), mP(s, t);
    }
} let d = i.getAll(), f = n.get(wo); if (f.set(Ia, d), u.size > 0) {
    let p = {};
    for (let [h, y] of u.entries())
        p[h] = y;
    f.set(Da, p);
} return l; }
function fP(e, t, n, o, r) { let i = [], s = ""; for (let a = G; a < e.length; a++) {
    let c = e[a], l, u, d;
    if (st(c) && (c = c[I], K(c))) {
        u = dP(c) + 1, DM(c, r);
        let p = pr(c[U]);
        d = { [ma]: p[m].ssrId, [Mt]: u };
    }
    if (!d) {
        let p = c[m];
        p.type === 1 ? (l = p.ssrId, u = 1) : (l = vM(p), u = EM(p, c, p.firstChild)), d = { [ma]: l, [Mt]: u };
        let h = !1;
        if (lI(n[m], t)) {
            let y = Te(n, t), E = fe(n[m], t);
            if (r.isIncrementalHydrationEnabled && E.hydrateTriggers !== null) {
                let T = `d${r.deferBlocks.size}`;
                E.hydrateTriggers.has(7) && (h = !0);
                let k = [];
                $a(e, k);
                let te = { [Mt]: k.length, [si]: y[At] }, We = pP(E.hydrateTriggers);
                We.length > 0 && (te[ai] = We), o !== null && (te[Nd] = o), r.deferBlocks.set(T, te);
                let Oe = L(e);
                Oe !== void 0 ? Oe.nodeType === Node.COMMENT_NODE && oM(Oe, T) : oM(Oe, T), h || vP(E, k, T, r), o = T, d[va] = T;
            }
            d[si] = y[At];
        }
        h || Object.assign(d, TM(e[a], o, r));
    }
    let f = JSON.stringify(d);
    if (i.length > 0 && f === s) {
        let p = i[i.length - 1];
        p[ri] ??= 1, p[ri]++;
    }
    else
        s = f, i.push(d);
} return i; }
function pP(e) { let t = new Set([0, 1, 2, 5]), n = []; for (let [o, r] of e)
    t.has(o) && (r === null ? n.push(o) : r.type === 5 ? n.push({ trigger: o, delay: r.delay }) : n.push({ trigger: o, intersectionObserverOptions: r.intersectionObserverOptions })); return n; }
function bi(e, t, n, o) { let r = t.index - I; e[ii] ??= {}, e[ii][r] ??= Qv(t, n, o); }
function Yp(e, t) { let n = typeof t == "number" ? t : t.index - I; e[So] ??= [], e[So].includes(n) || e[So].push(n); }
function TM(e, t = null, n) { let o = {}, r = e[m], i = eE(r, n), s = n.shouldReplayEvents ? Zx(r, e, n.eventTypesToReplay) : null; for (let a = I; a < r.bindingStartIndex; a++) {
    let c = r.data[a], l = a - I, u = tE(e, a, n);
    if (u) {
        o[ya] ??= {}, o[ya][l] = u.caseQueue;
        for (let d of u.disconnectedNodes)
            Yp(o, d);
        for (let d of u.disjointNodes) {
            let f = r.data[d + I];
            bi(o, f, e, i);
        }
        continue;
    }
    if (la(c) && !Ao(c)) {
        if (K(e[a]) && c.tView && (o[ga] ??= {}, o[ga][l] = vM(c.tView)), Fo(c, e) && yP(c)) {
            Yp(o, c);
            continue;
        }
        if (Array.isArray(c.projection)) {
            for (let d of c.projection)
                if (d)
                    if (!Array.isArray(d))
                        !dl(d) && !No(d) && (Fo(d, e) ? Yp(o, d) : bi(o, d, e, i));
                    else
                        throw Vv(L(e[a]));
        }
        if (hP(o, c, e, i), K(e[a])) {
            let d = e[a][U];
            if (Array.isArray(d)) {
                let f = L(d);
                f.hasAttribute(Mo) || Mc(f, d, t, n);
            }
            o[_o] ??= {}, o[_o][l] = fP(e[a], c, e, t, n);
        }
        else if (Array.isArray(e[a]) && !Sm(c)) {
            let d = L(e[a][U]);
            d.hasAttribute(Mo) || Mc(d, e[a], t, n);
        }
        else if (c.type & 8)
            o[oi] ??= {}, o[oi][l] = EM(r, e, c.child);
        else if (c.type & 144) {
            let d = c.next;
            for (; d !== null && d.type & 144;)
                d = d.next;
            d && !No(d) && bi(o, d, e, i);
        }
        else if (c.type & 1) {
            let d = L(e[a]);
            Fd(n, d);
        }
        if (s && c.type & 2) {
            let d = L(e[a]);
            s.has(d) && Ad(d, s.get(d), t);
        }
    }
} return o; }
function hP(e, t, n, o) { dl(t) || (t.projectionNext && t.projectionNext !== t.next && !No(t.projectionNext) && bi(e, t.projectionNext, n, o), t.prev === null && t.parent !== null && Fo(t.parent, n) && !Fo(t, n) && bi(e, t, n, o)); }
function gP(e) { let t = e[$]; if (!t?.constructor)
    return !1; let n = W(t.constructor); return n?.encapsulation === Ue.ShadowDom || n?.encapsulation === Ue.ExperimentalIsolatedShadowDom; }
function Mc(e, t, n, o) { let r = t[w]; if (xh(t) && !Wa() || gP(t))
    return r.setAttribute(e, Mo, ""), null; {
    let i = TM(t, n, o), s = o.serializedViewCollection.add(i);
    return r.setAttribute(e, io, s.toString()), s;
} }
function oM(e, t) { e.textContent = `ngh=${t}`; }
function mP(e, t) { for (let [n, o] of e)
    n.after(t.createComment(o)); }
function yP(e) { let t = e; for (; t != null;) {
    if (De(t))
        return !0;
    t = t.parent;
} return !1; }
function vP(e, t, n, o) { let r = Cy(e.hydrateTriggers); for (let i of r)
    o.eventTypesToReplay.regular.add(i); if (r.length > 0) {
    let i = t.filter(s => s.nodeType === Node.ELEMENT_NODE);
    for (let s of i)
        Ad(s, r, n);
} }
function JF(e) { return typeof e == "boolean" ? e : e != null && e !== "false"; }
function XF(e, t = NaN) { return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t; }
var EP = "\u{1F170}\uFE0F", _c = !1;
function e1(e) { if (!_c)
    return; let { startLabel: t } = CM(e); performance.mark(t); }
function t1(e) { if (!_c)
    return; let { startLabel: t, labelName: n, endLabel: o } = CM(e); performance.mark(o), performance.measure(n, t, o), performance.clearMarks(t), performance.clearMarks(o); }
function CM(e) { let t = `${EP}:${e}`; return { labelName: t, startLabel: `start:${t}`, endLabel: `end:${t}` }; }
var rM = !1;
function n1() { if (!rM && (typeof performance > "u" || !performance.mark || !performance.measure)) {
    rM = !0, console.warn("Performance API is not supported on this platform");
    return;
} _c = !0; }
function o1() { _c = !1; }
function r1(e) { }
function i1(e) { return re({ usage: 1, kind: "directive", type: e.type }).compileDirectiveDeclaration(Ee, `ng:///${e.type.name}/\u0275fac.js`, e); }
function s1(e) { Vf(e.type, e.decorators, e.ctorParameters ?? null, e.propDecorators ?? null); }
function a1(e) { gI(e.type, e.resolveDeferredDeps, (...t) => { let n = e.resolveMetadata(...t); Vf(e.type, n.decorators, n.ctorParameters, n.propDecorators); }); }
function c1(e) { return re({ usage: 1, kind: "component", type: e.type }).compileComponentDeclaration(Ee, `ng:///${e.type.name}/\u0275cmp.js`, e); }
function l1(e) { return re({ usage: 1, kind: IP(e.target), type: e.type }).compileFactoryDeclaration(Ee, `ng:///${e.type.name}/\u0275fac.js`, e); }
function IP(e) { switch (e) {
    case $o.Directive: return "directive";
    case $o.Component: return "component";
    case $o.Injectable: return "injectable";
    case $o.Pipe: return "pipe";
    case $o.NgModule: return "NgModule";
} }
function u1(e) { return re({ usage: 1, kind: "injectable", type: e.type }).compileInjectableDeclaration(Ee, `ng:///${e.type.name}/\u0275prov.js`, e); }
function d1(e) { return re({ usage: 1, kind: "NgModule", type: e.type }).compileInjectorDeclaration(Ee, `ng:///${e.type.name}/\u0275inj.js`, e); }
function f1(e) { return re({ usage: 1, kind: "NgModule", type: e.type }).compileNgModuleDeclaration(Ee, `ng:///${e.type.name}/\u0275mod.js`, e); }
function p1(e) { return re({ usage: 1, kind: "pipe", type: e.type }).compilePipeDeclaration(Ee, `ng:///${e.type.name}/\u0275pipe.js`, e); }
var Kp = Symbol("NOT_SET"), MM = new Set, DP = we(z({}, Ac), { kind: "afterRenderEffectPhase", consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !0, value: Kp, cleanup: null, consumerMarkedDirty() { if (this.sequence.impl.executing) {
        if (this.sequence.lastPhase === null || this.sequence.lastPhase < this.phase)
            return;
        this.sequence.erroredOrDestroyed = !0;
    } this.sequence.scheduler.notify(7); }, phaseFn(e) { if (this.sequence.lastPhase = this.phase, !this.dirty)
        return this.signal; if (this.dirty = !1, this.value !== Kp && !xi(this))
        return this.signal; try {
        for (let r of this.cleanup ?? MM)
            r();
    }
    finally {
        this.cleanup?.clear();
    } let t = []; e !== void 0 && t.push(e), t.push(this.registerCleanupFn); let n = Go(this), o; try {
        o = this.userFn.apply(null, t);
    }
    finally {
        Oi(this, n);
    } return (this.value === Kp || !this.equal(this.value, o)) && (this.value = o, this.version++), this.signal; } }), sh = class extends Hr {
    scheduler;
    lastPhase = null;
    nodes = [void 0, void 0, void 0, void 0];
    onDestroyFns = null;
    constructor(t, n, o, r, i, s = null) { super(t, [void 0, void 0, void 0, void 0], o, !1, i.get(Be), s), this.scheduler = r; for (let a of ef) {
        let c = n[a];
        if (c === void 0)
            continue;
        let l = Object.create(DP);
        l.sequence = this, l.phase = a, l.userFn = c, l.dirty = !0, l.signal = () => (ki(l), l.value), l.signal[ae] = l, l.registerCleanupFn = u => (l.cleanup ??= new Set).add(u), this.nodes[a] = l, this.hooks[a] = u => l.phaseFn(u);
    } }
    afterRun() { super.afterRun(), this.lastPhase = null; }
    destroy() { if (this.onDestroyFns !== null)
        for (let t of this.onDestroyFns)
            t(); super.destroy(); for (let t of this.nodes)
        if (t)
            try {
                for (let n of t.cleanup ?? MM)
                    n();
            }
            finally {
                Ot(t);
            } }
};
function h1(e, t) { if (typeof ngServerMode < "u" && ngServerMode)
    return ka; let n = t?.injector ?? v(ce), o = n.get(xe), r = n.get(Ra), i = n.get(On, null, { optional: !0 }); r.impl ??= n.get(tf); let s = e; typeof s == "function" && (s = { mixedReadWrite: e }); let a = n.get(zn, null, { optional: !0 }), c = new sh(r.impl, [s.earlyRead, s.write, s.mixedReadWrite, s.read], a?.view, o, n, i?.snapshot(null)); return r.impl.register(c), c; }
function g1(e) { return new ah(Hf(e) ? e : Ne(e)); }
var ah = class {
    snapshot;
    constructor(t) { this.snapshot = t; }
    get state() { return this.snapshot(); }
    value = Ne(() => { if (this.state.status === "error")
        throw new _i(this.state.error); return this.state.value; });
    status = Ne(() => this.state.status);
    error = Ne(() => this.state.status === "error" ? this.state.error : void 0);
    isLoading = Ne(() => this.state.status === "loading" || this.state.status === "reloading");
    isValueDefined = Ne(() => this.state.status !== "error" && this.state.value !== void 0);
    hasValue() { return this.isValueDefined(); }
};
function m1(e, t) { let n = W(e), o = t.elementInjector || $n(); return new Yt(n).create(o, t.projectableNodes, t.hostElement, t.environmentInjector, t.directives, t.bindings); }
function y1(e) { let t = W(e); if (!t)
    return null; let n = new Yt(t); return { get selector() { return n.selector; }, get type() { return n.componentType; }, get inputs() { return n.inputs; }, get outputs() { return n.outputs; }, get ngContentSelectors() { return n.ngContentSelectors; }, get isStandalone() { return t.standalone; }, get isSignal() { return t.signals; } }; }
function v1(...e) { return e.reduce((t, n) => Object.assign(t, n, { providers: [...t.providers, ...n.providers] }), { providers: [] }); }
var E1 = new C("", { providedIn: "platform", factory: () => null }), I1 = new C("", { providedIn: "platform", factory: () => null }), D1 = new C("", { providedIn: "platform", factory: () => null });
export { Dw as ANIMATION_MODULE_TYPE, Ii as APP_BOOTSTRAP_LISTENER, _t as APP_ID, qf as APP_INITIALIZER, Gf as ApplicationInitStatus, ZF as ApplicationModule, Ge as ApplicationRef, Hm as Attribute, hC as COMPILER_OPTIONS, Tw as CSP_NONCE, zw as CUSTOM_ELEMENTS_SCHEMA, fa as ChangeDetectionStrategy, rP as ChangeDetectorRef, xO as Compiler, md as CompilerFactory, _O as Component, Za as ComponentFactory, yi as ComponentFactoryResolver, uE as ComponentRef, AF as ContentChild, bF as ContentChildren, FO as DEFAULT_CURRENCY_CODE, $t as DOCUMENT, bn as DebugElement, yd as DebugEventListener, Xr as DebugNode, eh as DefaultIterableDiffer, Be as DestroyRef, pC as Directive, Fe as ENVIRONMENT_INITIALIZER, ni as ElementRef, XC as EmbeddedViewRef, _e as EnvironmentInjector, vt as ErrorHandler, gt as EventEmitter, DF as HOST_TAG_NAME, Em as Host, VC as HostAttributeToken, RO as HostBinding, kO as HostListener, ol as INJECTOR, gm as Inject, WN as Injectable, C as InjectionToken, ce as Injector, bO as Input, mM as IterableDiffers, yM as KeyValueDiffers, Pp as LOCALE_ID, iv as MAX_ANIMATION_TIMEOUT, mC as MissingTranslationStrategy, ca as ModuleWithComponentFactories, Qw as NO_ERRORS_SCHEMA, OO as NgModule, UE as NgModuleFactory, mo as NgModuleRef, q as NgZone, mm as Optional, AO as Output, wi as OutputEmitterRef, Iw as PLATFORM_ID, Td as PLATFORM_INITIALIZER, Er as PendingTasks, SO as Pipe, fM as PlatformRef, qo as Query, Hs as QueryList, E1 as REQUEST, D1 as REQUEST_CONTEXT, I1 as RESPONSE_INIT, Lb as Renderer2, Gr as RendererFactory2, Gs as RendererStyleFlags2, dE as Sanitizer, Rn as SecurityContext, ym as Self, Ps as SimpleChange, vm as SkipSelf, jO as TRANSLATIONS, VO as TRANSLATIONS_FORMAT, $r as TemplateRef, ER as Testability, vI as TestabilityRegistry, wo as TransferState, Im as Type, Lc as VERSION, Fi as Version, kF as ViewChild, RF as ViewChildren, Ja as ViewContainerRef, Ue as ViewEncapsulation, Xp as ViewRef, uv as afterEveryRender, nf as afterNextRender, h1 as afterRenderEffect, HO as asNativeElements, KM as assertInInjectionContext, uN as assertNotInReactiveContext, Gx as assertPlatform, JF as booleanAttribute, Ne as computed, wF as contentChild, _F as contentChildren, m1 as createComponent, kf as createEnvironmentInjector, qE as createNgModule, kA as createNgModuleRef, Ux as createPlatform, qx as createPlatformFactory, xF as destroyPlatform, Gl as effect, jF as enableProdMode, gR as enableProfiling, tr as forwardRef, ei as getDebugNode, qF as getModuleFactory, GF as getNgModuleById, wc as getPlatform, Ah as importProvidersFrom, v as inject, CF as input, ME as inputBinding, FF as isDevMode, Hf as isSignal, ar as isStandalone, Bf as isWritableSignal, Fp as linkedSignal, Ye as makeEnvironmentProviders, Mw as makeStateKey, v1 as mergeApplicationConfig, SF as model, XF as numberAttribute, TF as output, NE as outputBinding, QF as platformCore, DI as provideAppInitializer, cN as provideBrowserGlobalErrorListeners, LF as provideCheckNoChangesConfig, bh as provideEnvironmentInitializer, b_ as provideNgReflectAttributes, PF as providePlatformInitializer, UF as provideStabilityDebugging, OF as provideZoneChangeDetection, PO as provideZonelessChangeDetection, y1 as reflectComponentType, x as resolveForwardRef, WO as resource, g1 as resourceFromSnapshots, Ji as runInInjectionContext, EI as setTestabilityGetter, Ut as signal, rA as twoWayBinding, tt as untracked, MF as viewChild, NF as viewChildren, rv as \u0275ANIMATIONS_DISABLED, Km as \u0275AcxChangeDetectionStrategy, Jm as \u0275AcxViewEncapsulation, Ra as \u0275AfterRenderManager, VF as \u0275CLIENT_RENDER_MODE_FLAG, G as \u0275CONTAINER_HEADER_OFFSET, xe as \u0275ChangeDetectionScheduler, Za as \u0275ComponentFactory, hR as \u0275Console, Ci as \u0275DEFAULT_LOCALE_ID, fI as \u0275DEFER_BLOCK_CONFIG, lR as \u0275DEFER_BLOCK_DEPENDENCY_INTERCEPTOR, St as \u0275DEHYDRATED_BLOCK_REGISTRY, Ff as \u0275DeferBlockBehavior, Z as \u0275DeferBlockState, Hx as \u0275ENABLE_ROOT_COMPONENT_BOOTSTRAP, ry as \u0275EVENT_REPLAY_QUEUE, fs as \u0275EffectScheduler, Ax as \u0275Framework, Ey as \u0275HydrationStatus, Cw as \u0275IMAGE_CONFIG, Xm as \u0275IMAGE_CONFIG_DEFAULTS, sl as \u0275INJECTOR_SCOPE, IF as \u0275INPUT_SIGNAL_BRAND_WRITE_TYPE, It as \u0275INTERNAL_APPLICATION_ERROR_HANDLER, Nw as \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION, An as \u0275IS_HYDRATION_DOM_REUSE_ENABLED, bd as \u0275IS_INCREMENTAL_HYDRATION_ENABLED, ci as \u0275JSACTION_BLOCK_ELEMENT_MAP, Od as \u0275JSACTION_EVENT_CONTRACT, Bs as \u0275LContext, Eo as \u0275LocaleDataIndex, rn as \u0275NG_COMP_DEF, ir as \u0275NG_DIR_DEF, sn as \u0275NG_ELEMENT_ID, Qo as \u0275NG_INJ_DEF, qi as \u0275NG_MOD_DEF, sr as \u0275NG_PIPE_DEF, Vn as \u0275NG_PROV_DEF, bs as \u0275NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, H as \u0275NO_CHANGE, vo as \u0275NgModuleFactory, Jo as \u0275NoopNgZone, EP as \u0275PERFORMANCE_MARK_PREFIX, Fx as \u0275PROVIDED_NG_ZONE, fN as \u0275PROVIDED_ZONELESS, Et as \u0275PendingTasksInternal, O as \u0275ProfilerEvent, on as \u0275R3Injector, xs as \u0275ReflectionCapabilities, Yt as \u0275Render3ComponentFactory, Xs as \u0275Render3ComponentRef, yo as \u0275Render3NgModuleRef, fc as \u0275ResourceImpl, D as \u0275RuntimeError, ae as \u0275SIGNAL, gy as \u0275SSR_CONTENT_INTEGRITY_MARKER, mI as \u0275TESTABILITY, yI as \u0275TESTABILITY_GETTER, dI as \u0275TimerScheduler, Aa as \u0275TracingAction, On as \u0275TracingService, Zt as \u0275ViewRef, $i as \u0275XSS_SECURITY_URL, Qn as \u0275ZONELESS_ENABLED, Vy as \u0275_sanitizeHtml, ui as \u0275_sanitizeUrl, Cn as \u0275allLeavingAnimations, ko as \u0275allowSanitizationBypassAndThrow, KF as \u0275annotateForHydration, r1 as \u0275assertType, e_ as \u0275bypassSanitizationTrustHtml, r_ as \u0275bypassSanitizationTrustResourceUrl, n_ as \u0275bypassSanitizationTrustScript, t_ as \u0275bypassSanitizationTrustStyle, o_ as \u0275bypassSanitizationTrustUrl, _A as \u0275clearResolutionOfComponentResourcesQueue, oC as \u0275compileComponent, xp as \u0275compileDirective, tC as \u0275compileNgModule, nC as \u0275compileNgModuleDefs, Px as \u0275compileNgModuleFactory, fC as \u0275compilePipe, tn as \u0275convertToBitFlags, Gc as \u0275createInjector, Wx as \u0275createOrReusePlatformInjector, WF as \u0275defaultIterableDiffers, zF as \u0275defaultKeyValueDiffers, ho as \u0275depsTracker, yE as \u0275devModeEqual, o1 as \u0275disableProfiling, n1 as \u0275enableProfiling, Bp as \u0275encapsulateResourceError, sp as \u0275findLocaleData, XT as \u0275flushModuleScopingQueueAsMuchAsPossible, Xo as \u0275formatRuntimeError, hO as \u0275generateStandaloneInDeclarationsError, pR as \u0275getAsyncClassMetadataFn, iA as \u0275getClosestComponentName, W as \u0275getComponentDef, ks as \u0275getDeferBlocks, dw as \u0275getDirectives, ha as \u0275getDocument, pw as \u0275getHostElement, rr as \u0275getInjectableDef, Me as \u0275getLContext, QR as \u0275getLocaleCurrencyCode, aD as \u0275getLocalePluralCase, qO as \u0275getOutputDestroyRef, Oy as \u0275getSanitizationBypassType, mR as \u0275getTransferState, Yw as \u0275getUnknownElementStrictMode, Jw as \u0275getUnknownPropertyStrictMode, Se as \u0275global, wE as \u0275inferTagNameFromDefinition, iP as \u0275injectChangeDetectorRef, YF as \u0275internalCreateApplication, jx as \u0275internalProvideZoneChangeDetection, TI as \u0275isBoundToModule, wA as \u0275isComponentDefPendingResolution, Kc as \u0275isEnvironmentProviders, RM as \u0275isInjectable, gn as \u0275isNgModule, Uf as \u0275isPromise, II as \u0275isSubscribable, VS as \u0275isViewDirty, HS as \u0275markForRefresh, ft as \u0275noSideEffects, kp as \u0275patchComponentDefWithScope, J as \u0275performanceMarkFeature, nc as \u0275promiseWithResolvers, dc as \u0275provideZonelessChangeDetectionInternal, yR as \u0275publishExternalGlobalUtil, Pw as \u0275readHydrationInfo, zR as \u0275registerLocaleData, Tt as \u0275renderDeferBlockState, yO as \u0275resetCompiledComponents, Fw as \u0275resetIncrementalHydrationEnabledWarnedForTests, fO as \u0275resetJitOptions, VE as \u0275resolveComponentResources, SA as \u0275restoreComponentResolutionQueue, RA as \u0275setAllowDuplicateNgModuleIdsForTest, NM as \u0275setAlternateWeakRefImpl, ZT as \u0275setClassDebugInfo, Vf as \u0275setClassMetadata, gI as \u0275setClassMetadataAsync, nt as \u0275setCurrentInjector, vw as \u0275setDocument, xM as \u0275setInjectorProfilerContext, dD as \u0275setLocaleId, Zw as \u0275setUnknownElementStrictMode, Kw as \u0275setUnknownPropertyStrictMode, e1 as \u0275startMeasuring, t1 as \u0275stopMeasuring, hr as \u0275store, er as \u0275stringify, Op as \u0275transitiveScopesFor, oc as \u0275triggerResourceLoading, bM as \u0275truncateMiddle, ZR as \u0275unregisterLocaleData, bt as \u0275unwrapSafeValue, lN as \u0275unwrapWritableSignal, HF as \u0275withDomHydration, zx as \u0275withEventReplay, BF as \u0275withI18nSupport, $F as \u0275withIncrementalHydration, JE as \u0275\u0275ControlFeature, CT as \u0275\u0275ExternalStylesFeature, $o as \u0275\u0275FactoryTarget, XE as \u0275\u0275HostDirectivesFeature, xf as \u0275\u0275InheritDefinitionFeature, Tm as \u0275\u0275NgOnChangesFeature, TT as \u0275\u0275ProvidersFeature, nv as \u0275\u0275advance, Sr as \u0275\u0275animateEnter, br as \u0275\u0275animateEnterListener, Ar as \u0275\u0275animateLeave, na as \u0275\u0275animateLeaveListener, Qf as \u0275\u0275ariaProperty, ET as \u0275\u0275arrowFunction, cT as \u0275\u0275attachSourceLocations, Zf as \u0275\u0275attribute, jD as \u0275\u0275classMap, Ep as \u0275\u0275classProp, KI as \u0275\u0275componentInstance, XI as \u0275\u0275conditional, rc as \u0275\u0275conditionalBranchCreate, JI as \u0275\u0275conditionalCreate, hp as \u0275\u0275contentQuery, mp as \u0275\u0275contentQuerySignal, DE as \u0275\u0275control, EE as \u0275\u0275controlCreate, Rp as \u0275\u0275declareLet, SI as \u0275\u0275defer, hI as \u0275\u0275deferEnableTimerScheduling, kI as \u0275\u0275deferHydrateNever, qI as \u0275\u0275deferHydrateOnHover, PI as \u0275\u0275deferHydrateOnIdle, jI as \u0275\u0275deferHydrateOnImmediate, zI as \u0275\u0275deferHydrateOnInteraction, BI as \u0275\u0275deferHydrateOnTimer, YI as \u0275\u0275deferHydrateOnViewport, RI as \u0275\u0275deferHydrateWhen, $I as \u0275\u0275deferOnHover, OI as \u0275\u0275deferOnIdle, LI as \u0275\u0275deferOnImmediate, GI as \u0275\u0275deferOnInteraction, VI as \u0275\u0275deferOnTimer, QI as \u0275\u0275deferOnViewport, UI as \u0275\u0275deferPrefetchOnHover, xI as \u0275\u0275deferPrefetchOnIdle, FI as \u0275\u0275deferPrefetchOnImmediate, WI as \u0275\u0275deferPrefetchOnInteraction, HI as \u0275\u0275deferPrefetchOnTimer, ZI as \u0275\u0275deferPrefetchOnViewport, AI as \u0275\u0275deferPrefetchWhen, bI as \u0275\u0275deferWhen, WE as \u0275\u0275defineComponent, QE as \u0275\u0275defineDirective, B as \u0275\u0275defineInjectable, or as \u0275\u0275defineInjector, Of as \u0275\u0275defineNgModule, ZE as \u0275\u0275definePipe, jo as \u0275\u0275directiveInject, Dl as \u0275\u0275disableBindings, Jf as \u0275\u0275domElement, np as \u0275\u0275domElementContainer, tp as \u0275\u0275domElementContainerEnd, lc as \u0275\u0275domElementContainerStart, ac as \u0275\u0275domElementEnd, sc as \u0275\u0275domElementStart, fp as \u0275\u0275domListener, rp as \u0275\u0275domProperty, Lf as \u0275\u0275domTemplate, Kf as \u0275\u0275element, ep as \u0275\u0275elementContainer, Ti as \u0275\u0275elementContainerEnd, cc as \u0275\u0275elementContainerStart, ic as \u0275\u0275elementEnd, Yr as \u0275\u0275elementStart, Il as \u0275\u0275enableBindings, QT as \u0275\u0275getComponentDepsFactory, sD as \u0275\u0275getCurrentView, jm as \u0275\u0275getInheritedFactory, YT as \u0275\u0275getReplaceMetadataURL, TD as \u0275\u0275i18n, MD as \u0275\u0275i18nApply, CD as \u0275\u0275i18nAttributes, cp as \u0275\u0275i18nEnd, lp as \u0275\u0275i18nExp, ND as \u0275\u0275i18nPostprocess, ap as \u0275\u0275i18nStart, pe as \u0275\u0275inject, ua as \u0275\u0275injectAttribute, lT as \u0275\u0275interpolate, uT as \u0275\u0275interpolate1, dT as \u0275\u0275interpolate2, fT as \u0275\u0275interpolate3, pT as \u0275\u0275interpolate4, hT as \u0275\u0275interpolate5, gT as \u0275\u0275interpolate6, mT as \u0275\u0275interpolate7, yT as \u0275\u0275interpolate8, vT as \u0275\u0275interpolateV, fE as \u0275\u0275invalidFactory, Qi as \u0275\u0275invalidFactoryDep, up as \u0275\u0275listener, AD as \u0275\u0275loadQuery, Ll as \u0275\u0275namespaceHTML, Pl as \u0275\u0275namespaceMathML, xl as \u0275\u0275namespaceSVG, wD as \u0275\u0275nextContext, s1 as \u0275\u0275ngDeclareClassMetadata, a1 as \u0275\u0275ngDeclareClassMetadataAsync, c1 as \u0275\u0275ngDeclareComponent, i1 as \u0275\u0275ngDeclareDirective, l1 as \u0275\u0275ngDeclareFactory, u1 as \u0275\u0275ngDeclareInjectable, d1 as \u0275\u0275ngDeclareInjector, f1 as \u0275\u0275ngDeclareNgModule, p1 as \u0275\u0275ngDeclarePipe, BT as \u0275\u0275pipe, $T as \u0275\u0275pipeBind1, UT as \u0275\u0275pipeBind2, qT as \u0275\u0275pipeBind3, GT as \u0275\u0275pipeBind4, WT as \u0275\u0275pipeBindV, SD as \u0275\u0275projection, _D as \u0275\u0275projectionDef, Yf as \u0275\u0275property, wT as \u0275\u0275pureFunction0, _T as \u0275\u0275pureFunction1, ST as \u0275\u0275pureFunction2, bT as \u0275\u0275pureFunction3, AT as \u0275\u0275pureFunction4, RT as \u0275\u0275pureFunction5, kT as \u0275\u0275pureFunction6, OT as \u0275\u0275pureFunction7, xT as \u0275\u0275pureFunction8, PT as \u0275\u0275pureFunctionV, RD as \u0275\u0275queryAdvance, bD as \u0275\u0275queryRefresh, aT as \u0275\u0275readContextLet, kD as \u0275\u0275reference, Af as \u0275\u0275registerNgModuleType, oD as \u0275\u0275repeater, nD as \u0275\u0275repeaterCreate, tD as \u0275\u0275repeaterTrackByIdentity, eD as \u0275\u0275repeaterTrackByIndex, KT as \u0275\u0275replaceMetadata, Ml as \u0275\u0275resetView, Gd as \u0275\u0275resolveBody, Jy as \u0275\u0275resolveDocument, Ky as \u0275\u0275resolveWindow, Cl as \u0275\u0275restoreView, qy as \u0275\u0275sanitizeHtml, qd as \u0275\u0275sanitizeResourceUrl, Wy as \u0275\u0275sanitizeScript, Gy as \u0275\u0275sanitizeStyle, Ud as \u0275\u0275sanitizeUrl, Zy as \u0275\u0275sanitizeUrlOrResourceUrl, MT as \u0275\u0275setComponentScope, NT as \u0275\u0275setNgModuleScope, sT as \u0275\u0275storeLet, FD as \u0275\u0275styleMap, vp as \u0275\u0275styleProp, dp as \u0275\u0275syntheticHostListener, ip as \u0275\u0275syntheticHostProperty, Pf as \u0275\u0275template, zT as \u0275\u0275templateRefExtractor, WD as \u0275\u0275text, Ip as \u0275\u0275textInterpolate, uc as \u0275\u0275textInterpolate1, Dp as \u0275\u0275textInterpolate2, Tp as \u0275\u0275textInterpolate3, Cp as \u0275\u0275textInterpolate4, Mp as \u0275\u0275textInterpolate5, Np as \u0275\u0275textInterpolate6, wp as \u0275\u0275textInterpolate7, _p as \u0275\u0275textInterpolate8, Sp as \u0275\u0275textInterpolateV, zy as \u0275\u0275trustConstantHtml, Qy as \u0275\u0275trustConstantResourceUrl, rT as \u0275\u0275twoWayBindingSet, Ap as \u0275\u0275twoWayListener, bp as \u0275\u0275twoWayProperty, Yy as \u0275\u0275validateAttribute, gp as \u0275\u0275viewQuery, yp as \u0275\u0275viewQuerySignal };
/*! Bundled license information:

@angular/core/fesm2022/_not_found-chunk.mjs:
@angular/core/fesm2022/_effect-chunk2.mjs:
@angular/core/fesm2022/_attribute-chunk.mjs:
@angular/core/fesm2022/_debug_node-chunk.mjs:
@angular/core/fesm2022/_resource-chunk.mjs:
@angular/core/fesm2022/primitives-event-dispatch.mjs:
@angular/core/fesm2022/core.mjs:
  (**
   * @license Angular v21.2.10
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
