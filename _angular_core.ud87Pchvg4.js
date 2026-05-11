import { a as gi, c as cp, d as lp, e as up, g as dp, h as fp, i as pp, j as gp, l as hp, o as Mc } from "@nf-internal/chunk-RFVP6F36";
import { a as JC } from "@nf-internal/chunk-VF5MYEDV";
import { $ as ja, $a as Pt, $b as Kf, $c as Ec, A as Wr, Aa as le, Ab as Wa, Ac as Mt, B as La, Ba as ue, Bb as ni, Bc as me, C as yt, Ca as ie, Cb as Gf, Cc as fc, D as kt, Da as Ot, Db as So, Dc as pc, E as dn, Ea as F, Eb as oi, Ec as gc, F as qr, Fa as R, Fb as ri, Fc as hc, G, Ga as Xe, Gb as ii, Gc as Ro, H as Ne, Ha as C, Hb as qa, Hc as je, I as Be, Ia as Et, Ib as Ht, Ic as jC, J as vo, Ja as Co, Jb as Wf, Jc as np, K as N, Ka as To, Kb as qf, Kc as Te, L as De, La as J, Lb as Qa, Lc as jt, M as Af, Ma as et, Mb as Qf, Mc as ko, N as Pa, Na as pn, Nb as Zf, Nc as op, O as xt, Oa as $e, Ob as Za, Oc as rp, P as Rf, Pa as we, Pb as si, Pc as Vt, Q as Le, Qa as $a, Qb as bo, Qc as VC, R as Qr, Ra as Ua, Rb as Ya, Rc as ip, S as D, Sa as ti, Sb as Ka, Sc as sp, T as Fa, Ta as Mo, Tb as Yf, Tc as mc, U as fn, Ua as Se, Ub as Ja, Uc as $, V as Zr, Va as Lt, Vb as Xa, Vc as yc, W as kf, Wa as tt, Wb as h, Wc as vc, X as Pe, Xa as I, Xb as T, Xc as Bt, Y as Ha, Ya as Ce, Yb as ec, Yc as Ic, Z as Io, Za as Fe, Zb as tc, Zc as BC, _ as Eo, _a as No, _b as M, _c as $C, a as SC, aa as xf, ab as H, ac as hn, ad as ap, b as bC, ba as Do, bb as ee, bc as ze, bd as UC, c as Vr, ca as Yr, cb as te, cc as nc, cd as di, d as _, da as Kr, db as za, dc as oc, dd as $t, e as wf, ea as _e, eb as he, ec as rc, ed as mn, f as Ee, fa as P, fb as gn, fc as ic, fd as zC, g as K, ga as vt, gb as be, gc as sc, gd as fi, h as Sf, ha as LC, hb as Ue, hc as pe, hd as Dc, i as Br, ia as Je, ib as Ga, ic as He, id as Cc, j as $r, ja as PC, jb as Hf, jc as ac, jd as GC, k as AC, ka as FC, kb as Dt, kc as se, kd as pi, l as xa, la as Va, lb as jf, lc as Ge, ld as Tc, m as z, ma as Jr, mb as Vf, mc as Jf, md as WC, n as Ur, na as Of, nb as O, nc as cc, nd as qC, o as bf, oa as Lf, ob as _o, oc as Xf, od as QC, p as B, pa as Xr, pb as Ft, pc as ep, pd as ZC, q as yo, qa as It, qb as W, qc as lc, qd as YC, r as RC, ra as Ba, rb as Bf, rc as ai, rd as KC, s as kC, sa as Pf, sb as Ct, sc as ci, t as zr, ta as ei, tb as Tt, tc as Ao, u as Oa, ua as Ff, ub as wo, uc, v as w, va as HC, vb as fe, vc as li, w as xC, wa as j, wb as $f, wc as dc, x as OC, xa as y, xb as Uf, xc as ui, y as un, ya as S, yb as zf, yc as tp, z as Gr, za as q, zb as de, zc as ae } from "@nf-internal/chunk-GSMICYHT";
import { b as wC } from "@nf-internal/chunk-SLWIJEXV";
import { B as Ra, E as ka, a as Ke, b as x, c as Mf, f as Aa, g as Fr, n as ho, p as Hr, r as jr, s as mo, w as Nf, x as _f } from "@nf-internal/chunk-YEU6INBQ";
import { a as Y, b as Ye, d as mt } from "@nf-internal/chunk-4CLCTAJ7";
import { Subject as xg, Subscription as XC } from "rxjs";
import { setActiveConsumer as vn } from "@angular/core/primitives/signals";
import { map as eT } from "rxjs/operators";
function qe(e) { return { toString: e }.toString(); }
var In = "__annotations__", En = "__parameters__", Dn = "__prop__metadata__";
function lr(e, t, n, o, r) { return qe(() => { let i = ql(t); function s(...a) { if (this instanceof s)
    return i.call(this, ...a), this; let c = new s(...a); return function (u) { return r && r(u, ...a), (u.hasOwnProperty(In) ? u[In] : Object.defineProperty(u, In, { value: [] })[In]).push(c), u; }; } return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = e, s.annotationCls = s, s; }); }
function ql(e) { return function (...n) { if (e) {
    let o = e(...n);
    for (let r in o)
        this[r] = o[r];
} }; }
function Wn(e, t, n) { return qe(() => { let o = ql(t); function r(...i) { if (this instanceof r)
    return o.apply(this, i), this; let s = new r(...i); return a.annotation = s, a; function a(c, l, u) { let d = c.hasOwnProperty(En) ? c[En] : Object.defineProperty(c, En, { value: [] })[En]; for (; d.length <= u;)
    d.push(null); return (d[u] = d[u] || []).push(s), c; } } return r.prototype.ngMetadataName = e, r.annotationCls = r, r; }); }
function ct(e, t, n, o) { return qe(() => { let r = ql(t); function i(...s) { if (this instanceof i)
    return r.apply(this, s), this; let a = new i(...s); function c(l, u) { if (l === void 0)
    throw new Error("Standard Angular field decorators are not supported in JIT mode."); let d = l.constructor, f = d.hasOwnProperty(Dn) ? d[Dn] : Object.defineProperty(d, Dn, { value: {} })[Dn]; f[u] = f.hasOwnProperty(u) && f[u] || [], f[u].unshift(a); } return c; } return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i; }); }
var Og = fn(Wn("Inject", e => ({ token: e })), -1), Lg = fn(Wn("Optional"), 8), Pg = fn(Wn("Self"), 2), Fg = fn(Wn("SkipSelf"), 4), Hg = fn(Wn("Host"), 1);
function oe(e) { let t = Ee.ng; if (t && t.\u0275compilerFacade)
    return t.\u0275compilerFacade; throw new Error("JIT compiler unavailable"); }
var mp = { \u0275\u0275defineInjectable: B, \u0275\u0275defineInjector: yo, \u0275\u0275inject: Le, \u0275\u0275invalidFactoryDep: Qr, resolveForwardRef: z }, jg = Function;
function Lo(e) { return typeof e == "function"; }
var tT = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/, nT = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/, oT = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/, rT = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{[^}]*super\(\.\.\.arguments\)/;
function iT(e) { return tT.test(e) || rT.test(e) || nT.test(e) && !oT.test(e); }
var Pi = class {
    _reflect;
    constructor(t) { this._reflect = t || Ee.Reflect; }
    factory(t) { return (...n) => new t(...n); }
    _zipTypesAndAnnotations(t, n) { let o; typeof t > "u" ? o = Eo(n.length) : o = Eo(t.length); for (let r = 0; r < o.length; r++)
        typeof t > "u" ? o[r] = [] : t[r] && t[r] != Object ? o[r] = [t[r]] : o[r] = [], n && n[r] != null && (o[r] = o[r].concat(n[r])); return o; }
    _ownParameters(t, n) { let o = t.toString(); if (iT(o))
        return null; if (t.parameters && t.parameters !== n.parameters)
        return t.parameters; let r = t.ctorParameters; if (r && r !== n.ctorParameters) {
        let a = typeof r == "function" ? r() : r, c = a.map(u => u && u.type), l = a.map(u => u && Nc(u.decorators));
        return this._zipTypesAndAnnotations(c, l);
    } let i = t.hasOwnProperty(En) && t[En], s = this._reflect && this._reflect.getOwnMetadata && this._reflect.getOwnMetadata("design:paramtypes", t); return s || i ? this._zipTypesAndAnnotations(s, i) : Eo(t.length); }
    parameters(t) { if (!Lo(t))
        return []; let n = hi(t), o = this._ownParameters(t, n); return !o && n !== Object && (o = this.parameters(n)), o || []; }
    _ownAnnotations(t, n) { if (t.annotations && t.annotations !== n.annotations) {
        let o = t.annotations;
        return typeof o == "function" && o.annotations && (o = o.annotations), o;
    } return t.decorators && t.decorators !== n.decorators ? Nc(t.decorators) : t.hasOwnProperty(In) ? t[In] : null; }
    annotations(t) { if (!Lo(t))
        return []; let n = hi(t), o = this._ownAnnotations(t, n) || []; return (n !== Object ? this.annotations(n) : []).concat(o); }
    _ownPropMetadata(t, n) { if (t.propMetadata && t.propMetadata !== n.propMetadata) {
        let o = t.propMetadata;
        return typeof o == "function" && o.propMetadata && (o = o.propMetadata), o;
    } if (t.propDecorators && t.propDecorators !== n.propDecorators) {
        let o = t.propDecorators, r = {};
        return Object.keys(o).forEach(i => { r[i] = Nc(o[i]); }), r;
    } return t.hasOwnProperty(Dn) ? t[Dn] : null; }
    propMetadata(t) { if (!Lo(t))
        return {}; let n = hi(t), o = {}; if (n !== Object) {
        let i = this.propMetadata(n);
        Object.keys(i).forEach(s => { o[s] = i[s]; });
    } let r = this._ownPropMetadata(t, n); return r && Object.keys(r).forEach(i => { let s = []; o.hasOwnProperty(i) && s.push(...o[i]), s.push(...r[i]), o[i] = s; }), o; }
    ownPropMetadata(t) { return Lo(t) ? this._ownPropMetadata(t, hi(t)) || {} : {}; }
    hasLifecycleHook(t, n) { return t instanceof jg && n in t.prototype; }
};
function Nc(e) { return e ? e.map(t => { let o = t.type.annotationCls, r = t.args ? t.args : []; return new o(...r); }) : []; }
function hi(e) { let t = e.prototype ? Object.getPrototypeOf(e.prototype) : null; return (t ? t.constructor : null) || Object; }
function Vg(e, t, n, o) { t !== null ? t.applyValueToInputSignal(t, o) : e[n] = o; }
var Fi = class {
    previousValue;
    currentValue;
    firstChange;
    constructor(t, n, o) { this.previousValue = t, this.currentValue = n, this.firstChange = o; }
    isFirstChange() { return this.firstChange; }
}, Bg = (() => { let e = () => $g; return e.ngInherit = !0, e; })();
function $g(e) { return e.type.prototype.ngOnChanges && (e.setInput = aT), sT; }
function sT() { let e = zg(this), t = e?.current; if (t) {
    let n = e.previous;
    if (n === _e)
        e.previous = t;
    else
        for (let o in t)
            n[o] = t[o];
    e.current = null, this.ngOnChanges(t);
} }
function aT(e, t, n, o, r) { let i = this.declaredInputs[o], s = zg(e) || cT(e, { previous: _e, current: null }), a = s.current || (s.current = {}), c = s.previous, l = c[i]; a[i] = new Fi(l && l.currentValue, n, c === _e), Vg(e, t, r, n); }
var Ug = "__ngSimpleChanges__";
function zg(e) { return e[Ug] || null; }
function cT(e, t) { return e[Ug] = t; }
var yp = [];
var k = function (e, t = null, n) { for (let o = 0; o < yp.length; o++) {
    let r = yp[o];
    r(e, t, n);
} }, b = (function (e) { return e[e.TemplateCreateStart = 0] = "TemplateCreateStart", e[e.TemplateCreateEnd = 1] = "TemplateCreateEnd", e[e.TemplateUpdateStart = 2] = "TemplateUpdateStart", e[e.TemplateUpdateEnd = 3] = "TemplateUpdateEnd", e[e.LifecycleHookStart = 4] = "LifecycleHookStart", e[e.LifecycleHookEnd = 5] = "LifecycleHookEnd", e[e.OutputStart = 6] = "OutputStart", e[e.OutputEnd = 7] = "OutputEnd", e[e.BootstrapApplicationStart = 8] = "BootstrapApplicationStart", e[e.BootstrapApplicationEnd = 9] = "BootstrapApplicationEnd", e[e.BootstrapComponentStart = 10] = "BootstrapComponentStart", e[e.BootstrapComponentEnd = 11] = "BootstrapComponentEnd", e[e.ChangeDetectionStart = 12] = "ChangeDetectionStart", e[e.ChangeDetectionEnd = 13] = "ChangeDetectionEnd", e[e.ChangeDetectionSyncStart = 14] = "ChangeDetectionSyncStart", e[e.ChangeDetectionSyncEnd = 15] = "ChangeDetectionSyncEnd", e[e.AfterRenderHooksStart = 16] = "AfterRenderHooksStart", e[e.AfterRenderHooksEnd = 17] = "AfterRenderHooksEnd", e[e.ComponentStart = 18] = "ComponentStart", e[e.ComponentEnd = 19] = "ComponentEnd", e[e.DeferBlockStateStart = 20] = "DeferBlockStateStart", e[e.DeferBlockStateEnd = 21] = "DeferBlockStateEnd", e[e.DynamicComponentStart = 22] = "DynamicComponentStart", e[e.DynamicComponentEnd = 23] = "DynamicComponentEnd", e[e.HostBindingsUpdateStart = 24] = "HostBindingsUpdateStart", e[e.HostBindingsUpdateEnd = 25] = "HostBindingsUpdateEnd", e; })(b || {});
function lT(e, t, n) { let { ngOnChanges: o, ngOnInit: r, ngDoCheck: i } = t.type.prototype; if (o) {
    let s = $g(t);
    (n.preOrderHooks ??= []).push(e, s), (n.preOrderCheckHooks ??= []).push(e, s);
} r && (n.preOrderHooks ??= []).push(0 - e, r), i && ((n.preOrderHooks ??= []).push(e, i), (n.preOrderCheckHooks ??= []).push(e, i)); }
function Gg(e, t) { for (let n = t.directiveStart, o = t.directiveEnd; n < o; n++) {
    let i = e.data[n].type.prototype, { ngAfterContentInit: s, ngAfterContentChecked: a, ngAfterViewInit: c, ngAfterViewChecked: l, ngOnDestroy: u } = i;
    s && (e.contentHooks ??= []).push(-n, s), a && ((e.contentHooks ??= []).push(n, a), (e.contentCheckHooks ??= []).push(n, a)), c && (e.viewHooks ??= []).push(-n, c), l && ((e.viewHooks ??= []).push(n, l), (e.viewCheckHooks ??= []).push(n, l)), u != null && (e.destroyHooks ??= []).push(n, u);
} }
function _i(e, t, n) { Wg(e, t, 3, n); }
function wi(e, t, n, o) { (e[S] & 3) === n && Wg(e, t, n, o); }
function _c(e, t) { let n = e[S]; (n & 3) === t && (n &= 16383, n += 1, e[S] = n); }
function Wg(e, t, n, o) { let r = o !== void 0 ? e[pn] & 65535 : 0, i = o ?? -1, s = t.length - 1, a = 0; for (let c = r; c < s; c++)
    if (typeof t[c + 1] == "number") {
        if (a = t[c], o != null && a >= o)
            break;
    }
    else
        t[c] < 0 && (e[pn] += 65536), (a < i || i == -1) && (uT(e, n, t, c), e[pn] = (e[pn] & 4294901760) + c + 2), c++; }
function vp(e, t) { k(b.LifecycleHookStart, e, t); let n = x(null); try {
    t.call(e);
}
finally {
    x(n), k(b.LifecycleHookEnd, e, t);
} }
function uT(e, t, n, o) { let r = n[o] < 0, i = n[o + 1], s = r ? -n[o] : n[o], a = e[s]; r ? e[S] >> 14 < e[pn] >> 16 && (e[S] & 3) === t && (e[S] += 16384, vp(a, i)) : vp(a, i); }
var Nn = -1, Qt = class {
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
function fs(e) { return e != null && typeof e == "object" && (e.insertBeforeIndex === null || typeof e.insertBeforeIndex == "number" || Array.isArray(e.insertBeforeIndex)); }
function qg(e) { return !!(e.type & 128); }
function dT(e) { return (e.flags & 8) !== 0; }
function fT(e) { return (e.flags & 16) !== 0; }
function pT(e, t, n) { let o = 0; for (; o < n.length;) {
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
        gT(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), o++;
    }
} return o; }
function Ql(e) { return e === 3 || e === 4 || e === 6; }
function gT(e) { return e.charCodeAt(0) === 64; }
function xn(e, t) { if (!(t === null || t.length === 0))
    if (e === null || e.length === 0)
        e = t.slice();
    else {
        let n = -1;
        for (let o = 0; o < t.length; o++) {
            let r = t[o];
            typeof r == "number" ? n = r : n === 0 || (n === -1 || n === 2 ? Ip(e, n, r, null, t[++o]) : Ip(e, n, r, null, null));
        }
    } return e; }
function Ip(e, t, n, o, r) { let i = 0, s = e.length; if (t === -1)
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
function Qg(e) { return e !== Nn; }
function Hi(e) { return e & 32767; }
function hT(e) { return e >> 16; }
function ji(e, t) { let n = hT(e), o = t; for (; n > 0;)
    o = o[To], n--; return o; }
var Zc = !0;
function Vi(e) { let t = Zc; return Zc = e, t; }
var mT = 256, Zg = mT - 1, Yg = 5, yT = 0, We = {};
function vT(e, t, n) { let o; typeof n == "string" ? o = n.charCodeAt(0) || 0 : n.hasOwnProperty(kt) && (o = n[kt]), o == null && (o = n[kt] = yT++); let r = o & Zg, i = 1 << r; t.data[e + (r >> Yg)] |= i; }
function Bi(e, t) { let n = Kg(e, t); if (n !== -1)
    return n; let o = t[y]; o.firstCreatePass && (e.injectorIndex = t.length, wc(o.data, e), wc(t, null), wc(o.blueprint, null)); let r = Zl(e, t), i = e.injectorIndex; if (Qg(r)) {
    let s = Hi(r), a = ji(r, t), c = a[y].data;
    for (let l = 0; l < 8; l++)
        t[i + l] = a[s + l] | c[s + l];
} return t[i + 8] = r, i; }
function wc(e, t) { e.push(0, 0, 0, 0, 0, 0, 0, 0, t); }
function Kg(e, t) { return e.injectorIndex === -1 || e.parent && e.parent.injectorIndex === e.injectorIndex || t[e.injectorIndex + 8] === null ? -1 : e.injectorIndex; }
function Zl(e, t) { if (e.parent && e.parent.injectorIndex !== -1)
    return e.parent.injectorIndex; let n = 0, o = null, r = t; for (; r !== null;) {
    if (o = oh(r), o === null)
        return Nn;
    if (n++, r = r[To], o.injectorIndex !== -1)
        return o.injectorIndex | n << 16;
} return Nn; }
function Yc(e, t, n) { vT(e, t, n); }
function IT(e, t) { if (t === "class")
    return e.classes; if (t === "style")
    return e.styles; let n = e.attrs; if (n) {
    let o = n.length, r = 0;
    for (; r < o;) {
        let i = n[r];
        if (Ql(i))
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
function Jg(e, t, n) { if (n & 8 || e !== void 0)
    return e; Pa(t, "NodeInjector"); }
function Xg(e, t, n, o) { if (n & 8 && o === void 0 && (o = null), (n & 3) === 0) {
    let r = e[R], i = xt(void 0);
    try {
        return r ? r.get(t, o, n & 8) : Rf(t, o, n & 8);
    }
    finally {
        xt(i);
    }
} return Jg(o, t, n); }
function eh(e, t, n, o = 0, r) { if (e !== null) {
    if (t[S] & 2048 && !(o & 2)) {
        let s = TT(e, t, n, o, We);
        if (s !== We)
            return s;
    }
    let i = th(e, t, n, o, We);
    if (i !== We)
        return i;
} return Xg(t, n, o, r); }
function th(e, t, n, o, r) { let i = DT(n); if (typeof i == "function") {
    if (!uc(t, e, o))
        return o & 1 ? Jg(r, n, o) : Xg(t, n, o, r);
    try {
        let s;
        if (s = i(o), s == null && !(o & 8))
            Pa(n);
        else
            return s;
    }
    finally {
        dc();
    }
}
else if (typeof i == "number") {
    let s = null, a = Kg(e, t), c = Nn, l = o & 1 ? t[J][ue] : null;
    for ((a === -1 || o & 4) && (c = a === -1 ? Zl(e, t) : t[a + 8], c === Nn || !Dp(o, !1) ? a = -1 : (s = t[y], a = Hi(c), t = ji(c, t))); a !== -1;) {
        let u = t[y];
        if (Ep(i, a, u.data)) {
            let d = ET(a, t, n, s, o, l);
            if (d !== We)
                return d;
        }
        c = t[a + 8], c !== Nn && Dp(o, t[y].data[a + 8] === l) && Ep(i, a, t) ? (s = u, a = Hi(c), t = ji(c, t)) : a = -1;
    }
} return r; }
function ET(e, t, n, o, r, i) { let s = t[y], a = s.data[e + 8], c = o == null ? he(a) && Zc : o != s && (a.type & 3) !== 0, l = r & 1 && i === a, u = Si(a, s, n, c, l); return u !== null ? Qo(t, s, u, a, r) : We; }
function Si(e, t, n, o, r) { let i = e.providerIndexes, s = t.data, a = i & 1048575, c = e.directiveStart, l = e.directiveEnd, u = i >> 20, d = o ? a : a + u, f = r ? a + u : l; for (let p = d; p < f; p++) {
    let g = s[p];
    if (p < c && n === g || p >= c && g.type === n)
        return p;
} if (r) {
    let p = s[c];
    if (p && be(p) && p.type === n)
        return c;
} return null; }
function Qo(e, t, n, o, r) { let i = e[n], s = t.data; if (i instanceof Qt) {
    let a = i;
    if (a.resolving) {
        let p = De(s[n]);
        throw Af(p);
    }
    let c = Vi(a.canSeeViewProviders);
    a.resolving = !0;
    let l = s[n].type || s[n], u, d = a.injectImpl ? xt(a.injectImpl) : null, f = uc(e, o, 0);
    try {
        i = e[n] = a.factory(void 0, r, s, e, o), t.firstCreatePass && n >= o.directiveStart && lT(n, s[n], t);
    }
    finally {
        d !== null && xt(d), Vi(c), a.resolving = !1, dc();
    }
} return i; }
function DT(e) { if (typeof e == "string")
    return e.charCodeAt(0) || 0; let t = e.hasOwnProperty(kt) ? e[kt] : void 0; return typeof t == "number" ? t >= 0 ? t & Zg : CT : t; }
function Ep(e, t, n) { let o = 1 << e; return !!(n[t + (e >> Yg)] & o); }
function Dp(e, t) { return !(e & 2) && !(e & 1 && t); }
var wt = class {
    _tNode;
    _lView;
    constructor(t, n) { this._tNode = t, this._lView = n; }
    get(t, n, o) { return eh(this._tNode, this._lView, t, Fa(o), n); }
};
function CT() { return new wt(M(), h()); }
function nh(e) { return qe(() => { let t = e.prototype.constructor, n = t[yt] || Kc(t), o = Object.prototype, r = Object.getPrototypeOf(e.prototype).constructor; for (; r && r !== o;) {
    let i = r[yt] || Kc(r);
    if (i && i !== n)
        return i;
    r = Object.getPrototypeOf(r);
} return i => new i; }); }
function Kc(e) { return Ur(e) ? () => { let t = Kc(z(e)); return t && t(); } : Zr(e); }
function TT(e, t, n, o, r) { let i = e, s = t; for (; i !== null && s !== null && s[S] & 2048 && !Ue(s);) {
    let a = th(i, s, n, o | 2, We);
    if (a !== We)
        return a;
    let c = i.parent;
    if (!c) {
        let l = s[$a];
        if (l) {
            let u = l.get(n, We, o);
            if (u !== We)
                return u;
        }
        c = oh(s), s = s[To];
    }
    i = c;
} return r; }
function oh(e) { let t = e[y], n = t.type; return n === 2 ? t.declTNode : n === 1 ? e[ue] : null; }
function ps(e) { return IT(M(), e); }
var rh = Wn("Attribute", e => ({ attributeName: e, __NG_ELEMENT_ID__: () => ps(e) })), Cp = null;
function Yl() { return Cp = Cp || new Pi; }
function gs(e) { return ih(Yl().parameters(e)); }
function ih(e) { return e.map(t => MT(t)); }
function MT(e) { let t = { token: null, attribute: null, host: !1, optional: !1, self: !1, skipSelf: !1 }; if (Array.isArray(e) && e.length > 0)
    for (let n = 0; n < e.length; n++) {
        let o = e[n];
        if (o === void 0)
            continue;
        let r = Object.getPrototypeOf(o);
        if (o instanceof Lg || r.ngMetadataName === "Optional")
            t.optional = !0;
        else if (o instanceof Fg || r.ngMetadataName === "SkipSelf")
            t.skipSelf = !0;
        else if (o instanceof Pg || r.ngMetadataName === "Self")
            t.self = !0;
        else if (o instanceof Hg || r.ngMetadataName === "Host")
            t.host = !0;
        else if (o instanceof Og)
            t.token = o.token;
        else if (o instanceof rh) {
            if (o.attributeName === void 0)
                throw new _(204, !1);
            t.attribute = o.attributeName;
        }
        else
            t.token = o;
    }
else
    e === void 0 || Array.isArray(e) && e.length === 0 ? t.token = null : t.token = e; return t; }
function NT(e, t) { let n = null, o = null; e.hasOwnProperty(zr) || Object.defineProperty(e, zr, { get: () => (n === null && (n = oe({ usage: 0, kind: "injectable", type: e }).compileInjectable(mp, `ng:///${e.name}/\u0275prov.js`, bT(e, t))), n) }), e.hasOwnProperty(yt) || Object.defineProperty(e, yt, { get: () => { if (o === null) {
        let r = oe({ usage: 0, kind: "injectable", type: e });
        o = r.compileFactory(mp, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, typeArgumentCount: 0, deps: gs(e), target: r.FactoryTarget.Injectable });
    } return o; }, configurable: !0 }); }
var _T = K({ provide: String, useValue: K });
function Tp(e) { return e.useClass !== void 0; }
function wT(e) { return _T in e; }
function Mp(e) { return e.useFactory !== void 0; }
function ST(e) { return e.useExisting !== void 0; }
function bT(e, t) { let n = t || { providedIn: null }, o = { name: e.name, type: e, typeArgumentCount: 0, providedIn: n.providedIn }; return (Tp(n) || Mp(n)) && n.deps !== void 0 && (o.deps = ih(n.deps)), Tp(n) ? o.useClass = n.useClass : wT(n) ? o.useValue = n.useValue : Mp(n) ? o.useFactory = n.useFactory : ST(n) && (o.useExisting = n.useExisting), o; }
var AT = lr("Injectable", void 0, void 0, void 0, (e, t) => NT(e, t));
function RT() { return qn(M(), h()); }
function qn(e, t) { return new ur(W(e, t)); }
var ur = (() => { class e {
    nativeElement;
    constructor(n) { this.nativeElement = n; }
    static __NG_ELEMENT_ID__ = RT;
} return e; })();
function sh(e) { return e instanceof ur ? e.nativeElement : e; }
function kT() { return this._results[Symbol.iterator](); }
var $i = class {
    _emitDistinctChangesOnly;
    dirty = !0;
    _onDirty = void 0;
    _results = [];
    _changesDetected = !1;
    _changes = void 0;
    length = 0;
    first = void 0;
    last = void 0;
    get changes() { return this._changes ??= new xg; }
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
    reset(t, n) { this.dirty = !1; let o = Pe(t); (this._changesDetected = !kf(this._results, o, n)) && (this._results = o, this.length = o.length, this.last = o[this.length - 1], this.first = o[0]); }
    notifyOnChanges() { this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.next(this); }
    onDirty(t) { this._onDirty = t; }
    setDirty() { this.dirty = !0, this._onDirty?.(); }
    destroy() { this._changes !== void 0 && (this._changes.complete(), this._changes.unsubscribe()); }
    [Symbol.iterator] = kT;
}, Qn = "ngSkipHydration", xT = "ngskiphydration";
function Kl(e) { let t = e.mergedAttrs; if (t === null)
    return !1; for (let n = 0; n < t.length; n += 2) {
    let o = t[n];
    if (typeof o == "number")
        return !1;
    if (typeof o == "string" && o.toLowerCase() === xT)
        return !0;
} return !1; }
function ah(e) { return e.hasAttribute(Qn); }
function Zo(e) { return (e.flags & 128) === 128; }
function Zn(e) { if (Zo(e))
    return !0; let t = e.parent; for (; t;) {
    if (Zo(e) || Kl(t))
        return !0;
    t = t.parent;
} return !1; }
function ch(e) { return Zo(e) || Kl(e) || Zn(e); }
var hs = (function (e) { return e[e.OnPush = 0] = "OnPush", e[e.Default = 1] = "Default", e; })(hs || {}), ms = new Map, OT = 0;
function LT() { return OT++; }
function PT(e) { ms.set(e[we], e); }
function lh(e) { return ms.get(e) || null; }
function Jc(e) { ms.delete(e[we]); }
function FT() { return ms; }
var Ui = class {
    lViewId;
    nodeIndex;
    native;
    component;
    directives;
    localRefs;
    get lView() { return lh(this.lViewId); }
    constructor(t, n, o) { this.lViewId = t, this.nodeIndex = n, this.native = o; }
};
function Ie(e) { let t = bi(e); if (t) {
    if (ee(t)) {
        let n = t, o, r, i;
        if (dh(e)) {
            if (o = VT(n, e), o == -1)
                throw new Error("The provided component was not found in the application");
            r = e;
        }
        else if (HT(e)) {
            if (o = BT(n, e), o == -1)
                throw new Error("The provided directive was not found in the application");
            i = fh(o, n);
        }
        else if (o = _p(n, e), o == -1)
            return null;
        let s = O(n[o]), a = bi(s), c = a && !Array.isArray(a) ? a : Np(n, o, s);
        if (r && c.component === void 0 && (c.component = r, Ae(c.component, c)), i && c.directives === void 0) {
            c.directives = i;
            for (let l = 0; l < i.length; l++)
                Ae(i[l], c);
        }
        Ae(c.native, c), t = c;
    }
}
else {
    let n = e, o = n;
    for (; o = o.parentNode;) {
        let r = bi(o);
        if (r) {
            let i = Array.isArray(r) ? r : r.lView;
            if (!i)
                return null;
            let s = _p(i, n);
            if (s >= 0) {
                let a = O(i[s]), c = Np(i, s, a);
                Ae(a, c), t = c;
                break;
            }
        }
    }
} return t || null; }
function Np(e, t, n) { return new Ui(e[we], t, n); }
var Xc = "__ngContext__";
function Ae(e, t) { ee(t) ? (e[Xc] = t[we], PT(t)) : e[Xc] = t; }
function bi(e) { let t = e[Xc]; return typeof t == "number" ? lh(t) : t || null; }
function uh(e) { let t = bi(e); return t ? ee(t) ? t : t.lView : null; }
function dh(e) { return e && e.constructor && e.constructor.\u0275cmp; }
function HT(e) { return e && e.constructor && e.constructor.\u0275dir; }
function _p(e, t) { let n = e[y]; for (let o = I; o < n.bindingStartIndex; o++)
    if (O(e[o]) === t)
        return o; return -1; }
function jT(e) { if (e.child)
    return e.child; if (e.next)
    return e.next; for (; e.parent && !e.parent.next;)
    e = e.parent; return e.parent && e.parent.next; }
function VT(e, t) { let n = e[y].components; if (n)
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        if (fe(r, e)[F] === t)
            return r;
    }
else if (fe(I, e)[F] === t)
    return I; return -1; }
function BT(e, t) { let n = e[y].firstChild; for (; n;) {
    let o = n.directiveStart, r = n.directiveEnd;
    for (let i = o; i < r; i++)
        if (e[i] === t)
            return n.index;
    n = jT(n);
} return -1; }
function fh(e, t) { let n = t[y].data[e]; if (n.directiveStart === 0)
    return P; let o = []; for (let r = n.directiveStart; r < n.directiveEnd; r++) {
    let i = t[r];
    dh(i) || o.push(i);
} return o; }
function $T(e, t) { let n = t[y].data[e]; return he(n) ? t[n.directiveStart + n.componentOffset] : null; }
function UT(e, t) { let n = e[y].data[t]; if (n && n.localNames) {
    let o = {}, r = n.index + 1;
    for (let i = 0; i < n.localNames.length; i += 2)
        o[n.localNames[i]] = e[r], r++;
    return o;
} return null; }
function ph(e) { return hh(e[Et]); }
function gh(e) { return hh(e[le]); }
function hh(e) { for (; e !== null && !te(e);)
    e = e[le]; return e; }
function wp(e) { let t = Ie(e); if (t === null)
    return null; if (t.component === void 0) {
    let n = t.lView;
    if (n === null)
        return null;
    t.component = $T(t.nodeIndex, n);
} return t.component; }
function zT(e) { eM(e); let t = Ie(e), n = t ? t.lView : null; return n === null ? null : n[F]; }
function GT(e) { let t = Ie(e), n = t ? t.lView : null; if (n === null)
    return null; let o; for (; n[y].type === 2 && (o = Ht(n));)
    n = o; return Ue(n) ? null : n[F]; }
function WT(e) { let t = Ie(e), n = t ? t.lView : null; if (n === null)
    return Te.NULL; let o = n[y].data[t.nodeIndex]; return new wt(o, n); }
function qT(e) { let t = Ie(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[y], r = o.data[t.nodeIndex], i = [], s = r.providerIndexes & 1048575, a = r.directiveEnd; for (let c = s; c < a; c++) {
    let l = o.data[c];
    XT(l) && (l = l.type), i.push(l);
} return i; }
function QT(e) { if (e instanceof Text)
    return []; let t = Ie(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[y], r = t.nodeIndex; return o?.data[r] ? (t.directives === void 0 && (t.directives = fh(r, n)), t.directives === null ? [] : [...t.directives]) : []; }
var mh = (function (e) { return e[e.Default = 0] = "Default", e[e.OnPush = 1] = "OnPush", e; })(mh || {}), yh = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 1] = "None", e; })(yh || {});
function ZT(e) { let t = Ie(e); if (t === null)
    return {}; if (t.localRefs === void 0) {
    let n = t.lView;
    if (n === null)
        return {};
    t.localRefs = UT(n, t.nodeIndex);
} return t.localRefs || {}; }
function YT(e) { return Ie(e).native; }
function KT(e) { let t = Ie(e), n = t === null ? null : t.lView; if (n === null)
    return []; let o = n[y], r = n[Ot], i = o.cleanup, s = []; if (i && r)
    for (let a = 0; a < i.length;) {
        let c = i[a++], l = i[a++];
        if (typeof c == "string") {
            let u = c, d = O(n[l]), f = r[i[a++]], p = i[a++], g = typeof p == "boolean" || p >= 0 ? "dom" : "output", m = typeof p == "boolean" ? p : !1;
            e == d && s.push({ element: e, name: u, callback: f, useCapture: m, type: g });
        }
    } return s.sort(JT), s; }
function JT(e, t) { return e.name == t.name ? 0 : e.name < t.name ? -1 : 1; }
function XT(e) { return e.type !== void 0 && e.declaredInputs !== void 0 && e.resolveHostDirectives !== void 0; }
function eM(e) { if (typeof Element < "u" && !(e instanceof Element))
    throw new Error("Expecting instance of DOM Element"); }
var el;
function tM(e) { el = e; }
function ys() { if (el !== void 0)
    return el; if (typeof document < "u")
    return document; throw new _(210, !1); }
var lt = new w("", { factory: () => nM }), nM = "ng";
var Jl = new w(""), oM = new w("", { providedIn: "platform", factory: () => "unknown" }), rM = new w(""), iM = new w("", { factory: () => D(jt).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null }), vh = { breakpoints: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840], placeholderResolution: 30, disableImageSizeWarning: !1, disableImageLazyLoadWarning: !1 }, sM = new w("", { factory: () => vh });
function aM(e) { return e; }
var Yn = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => { let n = new e; return (typeof ngServerMode > "u" || !ngServerMode) && (n.store = Ih(D(jt), D(lt))), n; } });
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
            } return JSON.stringify(this.store).replace(/</g, "\\u003C"); }
} return e; })();
function Ih(e, t) { let n = e.getElementById(t + "-state"); if (n?.textContent)
    try {
        return JSON.parse(n.textContent);
    }
    catch (o) {
        console.warn("Exception while restoring TransferState for app " + t, o);
    } return {}; }
var Xl = "h", eu = "b", Eh = "f", Dh = "n", dr = "e", vs = "t", Kn = "c", fr = "x", st = "r", Is = "i", pr = "n", Jn = "d", Es = "l", Ds = "di", gr = "s", tu = "p", hr = "t", sn = new w(""), Ch = !1, nu = new w("", { factory: () => Ch }), ou = new w(""), Cs = new w(""), ru = !1, Th = new w("", { factory: () => [] }), iu = new w(""), mr = new w("", { factory: () => new Map }), cM = new w(""), zi = { passive: !0, capture: !0 }, Sc = new WeakMap, bc = new WeakMap, _t = new WeakMap, Gi = ["click", "keydown"], Wi = ["mouseenter", "mouseover", "focusin"], mi = new Map, Yo = class {
    callbacks = new Set;
    listener = () => { for (let t of this.callbacks)
        t(); };
};
function Mh(e, t) { let n = bc.get(e); if (!n) {
    n = new Yo, bc.set(e, n);
    for (let o of Gi)
        e.addEventListener(o, n.listener, zi);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    bc.delete(e);
    for (let i of Gi)
        e.removeEventListener(i, r, zi);
} }; }
function Nh(e, t) { let n = Sc.get(e); if (!n) {
    n = new Yo, Sc.set(e, n);
    for (let o of Wi)
        e.addEventListener(o, n.listener, zi);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    for (let i of Wi)
        e.removeEventListener(i, r, zi);
    Sc.delete(e);
} }; }
function lM(e) { let t = _h(e); return new IntersectionObserver(n => { for (let o of n)
    o.isIntersecting && _t.has(o.target) && _t.get(o.target)?.get(t)?.listener(); }, e); }
function uM(e, t, n, o) { let r = _h(o), i = _t.get(e)?.get(r); mi.has(r) || mi.set(r, { observer: n(o), count: 0 }); let s = mi.get(r); if (!i) {
    i = new Yo, s.observer.observe(e);
    let a = _t.get(e);
    a ? a.set(r, i) : (a = new Map, _t.set(e, a)), a.set(r, i), s.count++;
} return i.callbacks.add(t), () => { if (_t.get(e)?.has(r)) {
    if (i.callbacks.delete(t), i.callbacks.size === 0) {
        s.observer.unobserve(e), s.count--;
        let a = _t.get(e);
        a && (a.delete(r), a.size === 0 && _t.delete(e));
    }
    s.count === 0 && (s.observer.disconnect(), mi.delete(r));
} }; }
function _h(e) {
    return e ? `${e.rootMargin}/${typeof e.threshold == "number" ? e.threshold : e.threshold?.join(`
`)}` : "";
}
var Xn = "ngb";
function su(e, t, n = null) { if (t.length === 0 || e.nodeType !== Node.ELEMENT_NODE)
    return; let o = e.getAttribute(gi.JSACTION), r = t.reduce((s, a) => (o?.indexOf(a) ?? -1) === -1 ? s + a + ":;" : s, ""); e.setAttribute(gi.JSACTION, `${o ?? ""}${r}`); let i = n ?? ""; i !== "" && r.length > 0 && e.setAttribute(Xn, i); }
var wh = (e, t, n) => { let o = e, r = o.__jsaction_fns ?? new Map, i = r.get(t) ?? []; i.push(n), r.set(t, i), o.__jsaction_fns = r; }, au = (e, t) => { let n = e, o = n.getAttribute(Xn) ?? "", r = t.get(o) ?? new Set; r.has(n) || r.add(n), t.set(o, r); };
function dM(e, t) { if (e.length > 0) {
    let n = [];
    for (let r of e)
        t.has(r) && (n = [...n, ...t.get(r)]);
    new Set(n).forEach(cu);
} }
var cu = e => { e.removeAttribute(gi.JSACTION), e.removeAttribute(Xn), e.__jsaction_fns = void 0; }, lu = new w("", { factory: () => ({}) });
function uu(e, t) { let n = t?.__jsaction_fns?.get(e.type); if (!(!n || !t?.isConnected))
    for (let o of n)
        o(e); }
var tl = new Map;
function Sh(e, t) { return tl.set(e, t), () => tl.delete(e); }
var Sp = !1, bh = (e, t, n, o) => { };
function fM(e, t, n, o) { bh(e, t, n, o); }
function Ah() { Sp || (bh = (e, t, n, o) => { let r = e[R].get(lt); tl.get(r)?.(t, n, o); }, Sp = !0); }
var ut = new w(""), Rh = (() => { class e {
    registry = new Map;
    cleanupFns = new Map;
    jsActionMap = D(mr);
    contract = D(lu);
    add(n, o) { if (this.registry.set(n, o), this.awaitingCallbacks.has(n)) {
        let r = this.awaitingCallbacks.get(n);
        for (let i of r)
            i();
    } }
    get(n) { return this.registry.get(n) ?? null; }
    has(n) { return this.registry.has(n); }
    cleanup(n) { dM(n, this.jsActionMap); for (let o of n)
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
function eo(e) { return (e.flags & 32) === 32; }
var kh = "__nghData__", Ts = kh, xh = "__nghDeferData__", Ms = xh;
function pM(e) { return e === kh || e === xh; }
var _n = "ngh", Oh = "nghm", Lh = () => null;
function gM(e, t, n = !1) { let o = e.getAttribute(_n); if (o == null)
    return null; let [r, i] = o.split("|"); if (o = n ? i : r, !o)
    return null; let s = i ? `|${i}` : "", a = n ? r : s, c = {}; if (o !== "") {
    let u = t.get(Yn, null, { optional: !0 });
    u !== null && (c = u.get(Ts, [])[Number(o)]);
} let l = { data: c, firstChild: e.firstChild ?? null }; return n && (l.firstChild = e, Ns(l, 0, e.nextSibling)), a ? e.setAttribute(_n, a) : e.removeAttribute(_n), l; }
function Ph() { Lh = gM; }
function Fh(e, t, n = !1) { return Lh(e, t, n); }
function du(e) { let t = e._lView; return t[y].type === 2 ? null : (Ue(t) && (t = t[I]), t); }
function hM(e) { return e.textContent?.replace(/\s/gm, ""); }
function mM(e) { let t = ys(), n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, { acceptNode(i) { let s = hM(i); return s === "ngetn" || s === "ngtns" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; } }), o, r = []; for (; o = n.nextNode();)
    r.push(o); for (let i of r)
    i.textContent === "ngetn" ? i.replaceWith(t.createTextNode("")) : i.remove(); }
var Hh = (function (e) { return e.Hydrated = "hydrated", e.Skipped = "skipped", e.Mismatched = "mismatched", e; })(Hh || {}), yM = "__ngDebugHydrationInfo__";
function vM(e) { return e[yM] ?? null; }
function Ns(e, t, n) { e.segmentHeads ??= {}, e.segmentHeads[t] = n; }
function nl(e, t) { return e.segmentHeads?.[t] ?? null; }
function yr(e) { return e.get(iu, !1, { optional: !0 }); }
var IM = !1;
function EM() { IM = !1; }
function jh(e, t) { let n = e.data, o = n[dr]?.[t] ?? null; return o === null && n[Kn]?.[t] && (o = fu(e, t)), o; }
function DM(e, t) { return e.data[dr]?.[t] !== void 0; }
function Vh(e, t) { return e.data[Kn]?.[t] ?? null; }
function fu(e, t) { let n = Vh(e, t) ?? [], o = 0; for (let r of n)
    o += r[st] * (r[fr] ?? 1); return o; }
function Bh(e) { if (typeof e.disconnectedNodes > "u") {
    let t = e.data[Jn];
    e.disconnectedNodes = t ? new Set(t) : null;
} return e.disconnectedNodes; }
function _s(e, t) { if (typeof e.disconnectedNodes > "u") {
    let n = e.data[Jn];
    e.disconnectedNodes = n ? new Set(n) : null;
} return !!Bh(e)?.has(t); }
function ws(e, t) { let n = e[ie]; return n !== null && !bo() && !eo(t) && !_s(n, t.index - I); }
function pu(e, t) { let n = t, o = e.corruptedTextNodes; n.textContent === "" ? o.set(n, "ngetn") : n.nextSibling?.nodeType === Node.TEXT_NODE && o.set(n, "ngtns"); }
function $h(e) { let t = []; return e !== null && (e.has(4) && t.push(...Wi), e.has(3) && t.push(...Gi)), t; }
function CM(e, t) { let n = t.get(ut), r = t.get(Yn).get(Ms, {}), i = !1, s = e, a = null, c = []; for (; !i && s;) {
    i = n.has(s);
    let l = n.hydrating.get(s);
    if (a === null && l != null) {
        a = l.promise;
        break;
    }
    c.unshift(s), s = r[s][tu];
} return { parentBlockPromise: a, hydrationQueue: c }; }
function TM(e) { let t = e.body.querySelectorAll("[jsaction]"), n = new Set, o = [Wi.join(":;"), Gi.join(":;")].join("|"); for (let r of t) {
    let i = r.getAttribute("jsaction"), s = r.getAttribute("ngb");
    i?.match(o) && s !== null && n.add(r);
} return n; }
function Uh(e, t) { let n = TM(e), o = t.get(mr); for (let r of n)
    au(r, o); }
var zh = () => ({});
function MM(e) { let t = e.get(Yn, null, { optional: !0 }); return t !== null ? t.get(Ms, {}) : {}; }
function Gh() { zh = MM; }
function NM(e) { return zh(e); }
function _M(e) { return typeof e == "object" && e.trigger === 5; }
function wM(e) { return e[hr]?.find(n => _M(n))?.delay ?? null; }
function SM(e) { let t = e[hr]; if (t)
    for (let n of t) {
        if (n === 2)
            return !0;
        if (typeof n == "object" && n.trigger === 2)
            return n.intersectionObserverOptions || !0;
    } return null; }
function bp(e, t) { return e[hr]?.includes(t) ?? !1; }
function bM(e) { return { data: e, hydrate: { idle: bp(e, 0), immediate: bp(e, 1), timer: wM(e), viewport: SM(e) } }; }
function Wh(e) { let t = NM(e), n = new Map; for (let o in t)
    n.set(o, bM(t[o])); return n; }
function Ac(e) { return !!e && e.nodeType === Node.COMMENT_NODE && e.textContent?.trim() === Oh; }
function Ap(e) { for (; e && e.nodeType === Node.TEXT_NODE;)
    e = e.previousSibling; return e; }
function qh(e) { for (let o of e.body.childNodes)
    if (Ac(o))
        return; let t = Ap(e.body.previousSibling); if (Ac(t))
    return; let n = Ap(e.head.lastChild); if (!Ac(n))
    throw new _(-507, !1); }
function Qh(e, t) { let n = e.contentQueries; if (n !== null) {
    let o = x(null);
    try {
        for (let r = 0; r < n.length; r += 2) {
            let i = n[r], s = n[r + 1];
            if (s !== -1) {
                let a = e.data[s];
                Ao(i), a.contentQueries(2, t[s], s);
            }
        }
    }
    finally {
        x(o);
    }
} }
function ol(e, t, n) { Ao(0); let o = x(null); try {
    t(e, n);
}
finally {
    x(o);
} }
function gu(e, t, n) { if (za(t)) {
    let o = x(null);
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
        x(o);
    }
} }
var Re = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", e[e.ExperimentalIsolatedShadowDom = 4] = "ExperimentalIsolatedShadowDom", e; })(Re || {}), AM = { name: "custom-elements" }, RM = { name: "no-errors-schema" }, Zh = !1;
function kM(e) { Zh = e; }
function xM() { return Zh; }
var Yh = !1;
function OM(e) { Yh = e; }
function LM() { return Yh; }
var yi;
function Kh() { if (yi === void 0 && (yi = null, Ee.trustedTypes))
    try {
        yi = Ee.trustedTypes.createPolicy("angular", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return yi; }
function to(e) { return Kh()?.createHTML(e) || e; }
function PM(e) { return Kh()?.createScriptURL(e) || e; }
var vi;
function hu() { if (vi === void 0 && (vi = null, Ee.trustedTypes))
    try {
        vi = Ee.trustedTypes.createPolicy("angular#unsafe-bypass", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return vi; }
function Rp(e) { return hu()?.createHTML(e) || e; }
function kp(e) { return hu()?.createScript(e) || e; }
function xp(e) { return hu()?.createScriptURL(e) || e; }
var at = class {
    changingThisBreaksApplicationSecurity;
    constructor(t) { this.changingThisBreaksApplicationSecurity = t; }
    toString() { return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Vr})`; }
}, rl = class extends at {
    getTypeName() { return "HTML"; }
}, il = class extends at {
    getTypeName() { return "Style"; }
}, sl = class extends at {
    getTypeName() { return "Script"; }
}, al = class extends at {
    getTypeName() { return "URL"; }
}, cl = class extends at {
    getTypeName() { return "ResourceURL"; }
};
function dt(e) { return e instanceof at ? e.changingThisBreaksApplicationSecurity : e; }
function no(e, t) { let n = Jh(e); if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL")
        return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${Vr})`);
} return n === t; }
function Jh(e) { return e instanceof at && e.getTypeName() || null; }
function FM(e) { return new rl(e); }
function HM(e) { return new il(e); }
function jM(e) { return new sl(e); }
function VM(e) { return new al(e); }
function BM(e) { return new cl(e); }
function Xh(e) { let t = new ul(e); return $M() ? new ll(t) : t; }
var ll = class {
    inertDocumentHelper;
    constructor(t) { this.inertDocumentHelper = t; }
    getInertBodyElement(t) { t = "<body><remove></remove>" + t; try {
        let n = new window.DOMParser().parseFromString(to(t), "text/html").body;
        return n === null ? this.inertDocumentHelper.getInertBodyElement(t) : (n.firstChild?.remove(), n);
    }
    catch {
        return null;
    } }
}, ul = class {
    defaultDoc;
    inertDocument;
    constructor(t) { this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"); }
    getInertBodyElement(t) { let n = this.inertDocument.createElement("template"); return n.innerHTML = to(t), n; }
};
function $M() { try {
    return !!new window.DOMParser().parseFromString(to(""), "text/html");
}
catch {
    return !1;
} }
var UM = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function Ss(e) { return e = String(e), e.match(UM) ? e : "unsafe:" + e; }
function ft(e) { let t = {}; for (let n of e.split(","))
    t[n] = !0; return t; }
function vr(...e) { let t = {}; for (let n of e)
    for (let o in n)
        n.hasOwnProperty(o) && (t[o] = !0); return t; }
var em = ft("area,br,col,hr,img,wbr"), tm = ft("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), nm = ft("rp,rt"), zM = vr(nm, tm), GM = vr(tm, ft("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), WM = vr(nm, ft("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), dl = vr(em, GM, WM, zM), mu = ft("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), qM = ft("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), QM = ft("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"), om = vr(mu, qM, QM), ZM = ft("script,style,template"), fl = class {
    sanitizedSomething = !1;
    buf = [];
    sanitizeChildren(t) { let n = t.firstChild, o = !0, r = []; for (; n;) {
        if (n.nodeType === Node.ELEMENT_NODE ? o = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, o && n.firstChild) {
            r.push(n), n = JM(n);
            continue;
        }
        for (; n;) {
            n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
            let i = KM(n);
            if (i) {
                n = i;
                break;
            }
            n = r.pop();
        }
    } return this.buf.join(""); }
    startElement(t) { let n = Op(t).toLowerCase(); if (!dl.hasOwnProperty(n))
        return this.sanitizedSomething = !0, !ZM.hasOwnProperty(n); this.buf.push("<"), this.buf.push(n); let o = t.attributes; for (let r = 0; r < o.length; r++) {
        let i = o.item(r), s = i.name, a = s.toLowerCase();
        if (!om.hasOwnProperty(a)) {
            this.sanitizedSomething = !0;
            continue;
        }
        let c = i.value;
        mu[a] && (c = Ss(c)), this.buf.push(" ", s, '="', Lp(c), '"');
    } return this.buf.push(">"), !0; }
    endElement(t) { let n = Op(t).toLowerCase(); dl.hasOwnProperty(n) && !em.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">")); }
    chars(t) { this.buf.push(Lp(t)); }
};
function YM(e, t) { return (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !== Node.DOCUMENT_POSITION_CONTAINED_BY; }
function KM(e) { let t = e.nextSibling; if (t && e !== t.previousSibling)
    throw rm(t); return t; }
function JM(e) { let t = e.firstChild; if (t && YM(e, t))
    throw rm(t); return t; }
function Op(e) { let t = e.nodeName; return typeof t == "string" ? t : "FORM"; }
function rm(e) { return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`); }
var XM = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, eN = /([^\#-~ |!])/g;
function Lp(e) { return e.replace(/&/g, "&amp;").replace(XM, function (t) { let n = t.charCodeAt(0), o = t.charCodeAt(1); return "&#" + ((n - 55296) * 1024 + (o - 56320) + 65536) + ";"; }).replace(eN, function (t) { return "&#" + t.charCodeAt(0) + ";"; }).replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
var Ii;
function im(e, t) { let n = null; try {
    Ii = Ii || Xh(e);
    let o = t ? String(t) : "";
    n = Ii.getInertBodyElement(o);
    let r = 5, i = o;
    do {
        if (r === 0)
            throw new Error("Failed to sanitize html because the input is unstable");
        r--, o = i, i = n.innerHTML, n = Ii.getInertBodyElement(o);
    } while (o !== i);
    let a = new fl().sanitizeChildren(pl(n) || n);
    return to(a);
}
finally {
    if (n) {
        let o = pl(n) || n;
        for (; o.firstChild;)
            o.firstChild.remove();
    }
} }
function pl(e) { return "content" in e && tN(e) ? e.content : null; }
function tN(e) { return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE"; }
var nN = /^>|^->|<!--|-->|--!>|<!-$/g, oN = /(<|>)/g, rN = "\u200B$1\u200B";
function iN(e) { return e.replace(nN, t => t.replace(oN, rN)); }
function yu(e, t) { return e.createText(t); }
function sm(e, t, n) { e.setValue(t, n); }
function vu(e, t) { return e.createComment(iN(t)); }
function bs(e, t, n) { return e.createElement(t, n); }
function Zt(e, t, n, o, r) { e.insertBefore(t, n, o, r); }
function am(e, t, n) { e.appendChild(t, n); }
function Pp(e, t, n, o, r) { o !== null ? Zt(e, t, n, o, r) : am(e, t, n); }
function Ir(e, t, n, o) { e.removeChild(null, t, n, o); }
function cm(e) { e.textContent = ""; }
function sN(e, t, n) { e.setAttribute(t, "style", n); }
function aN(e, t, n) { n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n); }
function lm(e, t, n) { let { mergedAttrs: o, classes: r, styles: i } = n; o !== null && pT(e, t, o), r !== null && aN(e, t, r), i !== null && sN(e, t, i); }
function cN(e) { let t = h(); e.src = "", e.srcdoc = to(""), Ir(t[C], e); }
var an = (function (e) { return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e; })(an || {});
function um(e) { let t = Er(); return t ? Rp(t.sanitize(an.HTML, e) || "") : no(e, "HTML") ? Rp(dt(e)) : im(ys(), N(e)); }
function dm(e) { let t = Er(); return t ? t.sanitize(an.STYLE, e) || "" : no(e, "Style") ? dt(e) : N(e); }
function Iu(e) { let t = Er(); return t ? t.sanitize(an.URL, e) || "" : no(e, "URL") ? dt(e) : Ss(N(e)); }
function Eu(e) { let t = Er(); if (t)
    return xp(t.sanitize(an.RESOURCE_URL, e) || ""); if (no(e, "ResourceURL"))
    return xp(dt(e)); throw new _(904, !1); }
function fm(e) { let t = Er(); if (t)
    return kp(t.sanitize(an.SCRIPT, e) || ""); if (no(e, "Script"))
    return kp(dt(e)); throw new _(905, !1); }
function pm(e) { return to(e[0]); }
function gm(e) { return PM(e[0]); }
var lN = new Set(["embed", "frame", "iframe", "media", "script"]), uN = new Set(["base", "link", "script"]);
function dN(e, t) { return t === "src" && lN.has(e) || t === "href" && uN.has(e) || t === "xlink:href" && e === "script" ? Eu : Iu; }
function hm(e, t, n) { return dN(t, n)(e); }
function Er() { let e = h(); return e && e[Xe].sanitizer; }
var Ei = new Set(["attributename"]), fN = { iframe: new Set(["sandbox", "allow", "allowfullscreen", "referrerpolicy", "csp", "fetchpriority"]), animate: Ei, set: Ei, animatemotion: Ei, animatetransform: Ei };
function mm(e, t, n) { let o = t.toLowerCase(), r = n.toLowerCase(); if (!fN[o]?.has(r))
    return e; let i = me(); if (i.type !== 2)
    return e; let s = h(); if (o === "iframe") {
    let c = W(i, s);
    cN(c);
} let a = !1; throw new _(-910, a); }
function pN() { return Je([]); }
function ym(e) { return e.ownerDocument.defaultView; }
function vm(e) { return e.ownerDocument; }
function Du(e) { return e.ownerDocument.body; }
var gN = "\uFFFD";
function Cn(e) { return e instanceof Function ? e() : e; }
function hN(e, t, n) { let o = e.length; for (;;) {
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
var Im = "ng-template";
function mN(e, t, n, o) { let r = 0; if (o) {
    for (; r < t.length && typeof t[r] == "string"; r += 2)
        if (t[r] === "class" && hN(t[r + 1].toLowerCase(), n, 0) !== -1)
            return !0;
}
else if (Cu(e))
    return !1; if (r = t.indexOf(1, r), r > -1) {
    let i;
    for (; ++r < t.length && typeof (i = t[r]) == "string";)
        if (i.toLowerCase() === n)
            return !0;
} return !1; }
function Cu(e) { return e.type === 4 && e.value !== Im; }
function yN(e, t, n) { let o = e.type === 4 && !n ? Im : e.value; return t === o; }
function vN(e, t, n) { let o = 4, r = e.attrs, i = r !== null ? DN(r) : 0, s = !1; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "number") {
        if (!s && !Ve(o) && !Ve(c))
            return !1;
        if (s && Ve(c))
            continue;
        s = !1, o = c | o & 1;
        continue;
    }
    if (!s)
        if (o & 4) {
            if (o = 2 | o & 1, c !== "" && !yN(e, c, n) || c === "" && t.length === 1) {
                if (Ve(o))
                    return !1;
                s = !0;
            }
        }
        else if (o & 8) {
            if (r === null || !mN(e, r, c, n)) {
                if (Ve(o))
                    return !1;
                s = !0;
            }
        }
        else {
            let l = t[++a], u = IN(c, r, Cu(e), n);
            if (u === -1) {
                if (Ve(o))
                    return !1;
                s = !0;
                continue;
            }
            if (l !== "") {
                let d;
                if (u > i ? d = "" : d = r[u + 1].toLowerCase(), o & 2 && l !== d) {
                    if (Ve(o))
                        return !1;
                    s = !0;
                }
            }
        }
} return Ve(o) || s; }
function Ve(e) { return (e & 1) === 0; }
function IN(e, t, n, o) { if (t === null)
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
    return CN(t, e); }
function Em(e, t, n = !1) { for (let o = 0; o < t.length; o++)
    if (vN(e, t[o], n))
        return !0; return !1; }
function EN(e) { let t = e.attrs; if (t != null) {
    let n = t.indexOf(5);
    if ((n & 1) === 0)
        return t[n + 1];
} return null; }
function DN(e) { for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (Ql(n))
        return t;
} return e.length; }
function CN(e, t) { let n = e.indexOf(4); if (n > -1)
    for (n++; n < e.length;) {
        let o = e[n];
        if (typeof o == "number")
            return -1;
        if (o === t)
            return n;
        n++;
    } return -1; }
function TN(e, t) { e: for (let n = 0; n < t.length; n++) {
    let o = t[n];
    if (e.length === o.length) {
        for (let r = 0; r < e.length; r++)
            if (e[r] !== o[r])
                continue e;
        return !0;
    }
} return !1; }
function Fp(e, t) { return e ? ":not(" + t.trim() + ")" : t; }
function MN(e) { let t = e[0], n = 1, o = 2, r = "", i = !1; for (; n < e.length;) {
    let s = e[n];
    if (typeof s == "string")
        if (o & 2) {
            let a = e[++n];
            r += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
        }
        else
            o & 8 ? r += "." + s : o & 4 && (r += " " + s);
    else
        r !== "" && !Ve(s) && (t += Fp(i, r), r = ""), o = s, i = i || !Ve(o);
    n++;
} return r !== "" && (t += Fp(i, r)), t; }
function NN(e) { return e.map(MN).join(","); }
function _N(e) { let t = [], n = [], o = 1, r = 2; for (; o < e.length;) {
    let i = e[o];
    if (typeof i == "string")
        r === 2 ? i !== "" && t.push(i, e[++o]) : r === 8 && n.push(i);
    else {
        if (!Ve(r))
            break;
        r = i;
    }
    o++;
} return n.length && t.push(1, ...n), t; }
var L = {};
function Tu(e, t, n, o, r, i, s, a, c, l, u) { let d = I + o, f = d + r, p = wN(d, f), g = typeof l == "function" ? l() : l; return p[y] = { type: e, blueprint: p, template: n, queries: null, viewQuery: a, declTNode: t, data: p.slice().fill(null, d), bindingStartIndex: d, expandoStartIndex: f, hostBindingOpCodes: null, firstCreatePass: !0, firstUpdatePass: !0, staticViewQueries: !1, staticContentQueries: !1, preOrderHooks: null, preOrderCheckHooks: null, contentHooks: null, contentCheckHooks: null, viewHooks: null, viewCheckHooks: null, destroyHooks: null, cleanup: null, contentQueries: null, components: null, directiveRegistry: typeof i == "function" ? i() : i, pipeRegistry: typeof s == "function" ? s() : s, firstChild: null, schemas: c, consts: g, incompleteFirstPass: !1, ssrId: u }; }
function wN(e, t) { let n = []; for (let o = 0; o < t; o++)
    n.push(o < e ? null : L); return n; }
function Dm(e) { let t = e.tView; return t === null || t.incompleteFirstPass ? e.tView = Tu(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t; }
function As(e, t, n, o, r, i, s, a, c, l, u) { let d = t.blueprint.slice(); return d[j] = r, d[S] = o | 4 | 128 | 8 | 64 | 1024, (l !== null || e && e[S] & 2048) && (d[S] |= 2048), Wa(d), d[q] = d[To] = e, d[F] = n, d[Xe] = s || e && e[Xe], d[C] = a || e && e[C], d[R] = c || e && e[R] || null, d[ue] = i, d[we] = LT(), d[ie] = u, d[$a] = l, d[J] = t.type == 2 ? e[J] : d, d; }
function SN(e, t, n) { let o = W(t, e), r = Dm(n), i = e[Xe].rendererFactory, s = Nu(e, As(e, r, null, Mu(n), o, t, null, i.createRenderer(o, n), null, null, null)); return e[t.index] = s; }
function Mu(e) { let t = 16; return e.signals ? t = 4096 : e.onPush && (t = 64), t; }
function Dr(e, t, n, o) { if (n === 0)
    return -1; let r = t.length; for (let i = 0; i < n; i++)
    t.push(o), e.blueprint.push(o), e.data.push(null); return r; }
function Nu(e, t) { return e[Et] ? e[Co][le] = t : e[Et] = t, e[Co] = t, t; }
function Cm(e = 1) { Tm(T(), h(), ae() + e, !1); }
function Tm(e, t, n, o) { if (!o)
    if ((t[S] & 3) === 3) {
        let i = e.preOrderCheckHooks;
        i !== null && _i(t, i, n);
    }
    else {
        let i = e.preOrderHooks;
        i !== null && wi(t, i, 0, n);
    } Mt(n); }
var Rs = (function (e) { return e[e.None = 0] = "None", e[e.SignalBased = 1] = "SignalBased", e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", e; })(Rs || {});
function Yt(e, t, n, o) { let r = x(null); try {
    let [i, s, a] = e.inputs[n], c = null;
    (s & Rs.SignalBased) !== 0 && (c = t[i][Ke]), c !== null && c.transformFn !== void 0 ? o = c.transformFn(o) : a !== null && (o = a.call(t, o)), e.setInput !== null ? e.setInput(t, c, o, n, i) : Vg(t, c, i, o);
}
finally {
    x(r);
} }
var qi = (function (e) { return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e; })(qi || {}), gl;
function _u(e, t) { return gl(e, t); }
function bN(e) { gl === void 0 && (gl = e()); }
function Qi(e) { if (!e)
    return 0; let t = e.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3; return parseFloat(e) * t; }
function wn(e, t) { return e.getPropertyValue(t).split(",").map(o => o.trim()); }
function AN(e) { let t = wn(e, "transition-property"), n = wn(e, "transition-duration"), o = wn(e, "transition-delay"), r = { propertyName: "", duration: 0, animationName: void 0 }; for (let i = 0; i < t.length; i++) {
    let s = Qi(o[i]) + Qi(n[i]);
    s > r.duration && (r.propertyName = t[i], r.duration = s);
} return r; }
function RN(e) { let t = wn(e, "animation-name"), n = wn(e, "animation-delay"), o = wn(e, "animation-duration"), r = { animationName: "", propertyName: void 0, duration: 0 }; for (let i = 0; i < t.length; i++) {
    let s = Qi(n[i]) + Qi(o[i]);
    s > r.duration && (r.animationName = t[i], r.duration = s);
} return r; }
function Mm(e, t) { return e !== void 0 && e.duration > t.duration; }
function Nm(e) { return (e.animationName != null || e.propertyName != null) && e.duration > 0; }
function kN(e, t) { let n = getComputedStyle(e), o = RN(n), r = AN(n), i = o.duration > r.duration ? o : r; Mm(t.get(e), i) || Nm(i) && t.set(e, i); }
function _m(e, t, n) { if (!n)
    return; let o = e.getAnimations(); return o.length === 0 ? kN(e, t) : xN(e, t, o); }
function xN(e, t, n) { let o = { animationName: void 0, propertyName: void 0, duration: 0 }; for (let r of n) {
    let i = r.effect?.getTiming(), s = typeof i?.duration == "number" ? i.duration : 0, a = (i?.delay ?? 0) + s, c, l;
    r.animationName ? l = r.animationName : c = r.transitionProperty, a >= o.duration && (o = { animationName: l, propertyName: c, duration: a });
} Mm(t.get(e), o) || Nm(o) && t.set(e, o); }
var Kt = new Set, ks = (function (e) { return e[e.CHANGE_DETECTION = 0] = "CHANGE_DETECTION", e[e.AFTER_NEXT_RENDER = 1] = "AFTER_NEXT_RENDER", e; })(ks || {}), oo = new w(""), Hp = new Set;
function Q(e) { Hp.has(e) || (Hp.add(e), performance?.mark?.("mark_feature_usage", { detail: { feature: e } })); }
var xs = (() => { class e {
    impl = null;
    execute() { this.impl?.execute(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), wu = [0, 1, 2, 3], Su = (() => { class e {
    ngZone = D($);
    scheduler = D($t);
    errorHandler = D(vc, { optional: !0 });
    sequences = new Set;
    deferredRegistrations = new Set;
    executing = !1;
    constructor() { D(oo, { optional: !0 }); }
    execute() { let n = this.sequences.size > 0; n && k(b.AfterRenderHooksStart), this.executing = !0; for (let o of wu)
        for (let r of this.sequences)
            if (!(r.erroredOrDestroyed || !r.hooks[o]))
                try {
                    r.pipelinedValue = this.ngZone.runOutsideAngular(() => this.maybeTrace(() => { let i = r.hooks[o]; return i(r.pipelinedValue); }, r.snapshot));
                }
                catch (i) {
                    r.erroredOrDestroyed = !0, this.errorHandler?.handleError(i);
                } this.executing = !1; for (let o of this.sequences)
        o.afterRun(), o.once && (this.sequences.delete(o), o.destroy()); for (let o of this.deferredRegistrations)
        this.sequences.add(o); this.deferredRegistrations.size > 0 && this.scheduler.notify(7), this.deferredRegistrations.clear(), n && k(b.AfterRenderHooksEnd); }
    register(n) { let { view: o } = n; o !== void 0 ? ((o[Lt] ??= []).push(n), ri(o), o[S] |= 8192) : this.executing ? this.deferredRegistrations.add(n) : this.addSequence(n); }
    addSequence(n) { this.sequences.add(n), this.scheduler.notify(7); }
    unregister(n) { this.executing && this.sequences.has(n) ? (n.erroredOrDestroyed = !0, n.pipelinedValue = void 0, n.once = !0) : (this.sequences.delete(n), this.deferredRegistrations.delete(n)); }
    maybeTrace(n, o) { return o ? o.run(ks.AFTER_NEXT_RENDER, n) : n(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Ko = class {
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
    destroy() { this.impl.unregister(this), this.unregisterOnDestroy?.(); let t = this.view?.[Lt]; t && (this.view[Lt] = t.filter(n => n !== this)); }
};
function wm(e, t) { let n = t?.injector ?? D(Te); return typeof ngServerMode < "u" && ngServerMode ? Os : (Q("NgAfterRender"), Sm(e, n, t, !1)); }
function bu(e, t) { let n = t?.injector ?? D(Te); return typeof ngServerMode < "u" && ngServerMode ? Os : (Q("NgAfterNextRender"), Sm(e, n, t, !0)); }
function ON(e) { return e instanceof Function ? [void 0, void 0, e, void 0] : [e.earlyRead, e.write, e.mixedReadWrite, e.read]; }
function Sm(e, t, n, o) { let r = t.get(xs); r.impl ??= t.get(Su); let i = t.get(oo, null, { optional: !0 }), s = n?.manualCleanup !== !0 ? t.get(ko) : null, a = t.get(di, null, { optional: !0 }), c = new Ko(r.impl, ON(e), a?.view, o, s, i?.snapshot(null)); return r.impl.register(c), c; }
var Os = { destroy() { } }, Ls = new w("", { factory: () => ({ queue: new Set, isScheduled: !1, scheduler: null, injector: D(It) }) });
function bm(e, t, n) { let o = e.get(Ls); if (Array.isArray(t))
    for (let r of t)
        o.queue.add(r), n?.detachedLeaveAnimationFns?.push(r);
else
    o.queue.add(t), n?.detachedLeaveAnimationFns?.push(t); o.scheduler && o.scheduler(e); }
function LN(e, t) { let n = e.get(Ls); if (t.detachedLeaveAnimationFns) {
    for (let o of t.detachedLeaveAnimationFns)
        n.queue.delete(o);
    t.detachedLeaveAnimationFns = void 0;
} }
function PN(e) { let t = e.get(Ls); t.isScheduled || (bu(() => { t.isScheduled = !1; for (let n of t.queue)
    n(); t.queue.clear(); }, { injector: t.injector }), t.isScheduled = !0); }
function Ps(e) { let t = e.get(Ls); t.scheduler = PN, t.scheduler(e); }
function Au(e, t) { for (let [n, o] of t)
    bm(e, o.animateFns); }
function jp(e, t, n, o) { let r = e?.[tt]?.enter; t !== null && r && r.has(n.index) && Au(o, r); }
function Tn(e, t, n, o, r, i, s, a) { if (r != null) {
    let c, l = !1;
    te(r) ? c = r : ee(r) && (l = !0, r = r[j]);
    let u = O(r);
    e === 0 && o !== null ? (jp(a, o, i, n), s == null ? am(t, o, u) : Zt(t, o, u, s || null, !0)) : e === 1 && o !== null ? (jp(a, o, i, n), Zt(t, o, u, s || null, !0)) : e === 2 ? Vp(a, i, n, d => { Ir(t, u, l, d); }) : e === 3 && Vp(a, i, n, () => { t.destroyNode(u); }), c != null && UN(t, e, n, c, i, o, s);
} }
function Am(e, t) { Rm(e, t), t[j] = null, t[ue] = null; }
function FN(e, t, n, o, r, i) { o[j] = r, o[ue] = t, Fs(e, o, n, 1, r, i); }
function Rm(e, t) { t[Xe].changeDetectionScheduler?.notify(9), Fs(e, t, t[C], 2, null, null); }
function HN(e) { let t = e[Et]; if (!t)
    return Rc(e[y], e); for (; t;) {
    let n = null;
    if (ee(t))
        n = t[Et];
    else {
        let o = t[H];
        o && (n = o);
    }
    if (!n) {
        for (; t && !t[le] && t !== e;)
            ee(t) && Rc(t[y], t), t = t[q];
        t === null && (t = e), ee(t) && Rc(t[y], t), n = t && t[le];
    }
    t = n;
} }
function Ru(e, t) { let n = e[Pt], o = n.indexOf(t); n.splice(o, 1); }
function Cr(e, t) { if (Dt(t))
    return; let n = t[C]; n.destroyNode && Fs(e, t, n, 3, null, null), HN(t); }
function Rc(e, t) { if (Dt(t))
    return; let n = x(null); try {
    t[S] &= -129, t[S] |= 256, t[Se] && mo(t[Se]), BN(e, t), VN(e, t), t[y].type === 1 && t[C].destroy();
    let o = t[et];
    if (o !== null && te(t[q])) {
        o !== t[q] && Ru(o, t);
        let r = t[$e];
        r !== null && r.detachView(e);
    }
    Jc(t);
}
finally {
    x(n);
} }
function Vp(e, t, n, o) { let r = e?.[tt]; if (r == null || r.leave == null || !r.leave.has(t.index))
    return o(!1); e && Kt.add(e[we]), bm(n, () => { if (r.leave && r.leave.has(t.index)) {
    let s = r.leave.get(t.index), a = [];
    if (s) {
        for (let c = 0; c < s.animateFns.length; c++) {
            let l = s.animateFns[c], { promise: u } = l();
            a.push(u);
        }
        r.detachedLeaveAnimationFns = void 0;
    }
    r.running = Promise.allSettled(a), jN(e, o);
}
else
    e && Kt.delete(e[we]), o(!1); }, r); }
function jN(e, t) { let n = e[tt]?.running; if (n) {
    n.then(() => { e[tt].running = void 0, Kt.delete(e[we]), t(!0); });
    return;
} t(!1); }
function VN(e, t) { let n = e.cleanup, o = t[Ot]; if (n !== null)
    for (let s = 0; s < n.length - 1; s += 2)
        if (typeof n[s] == "string") {
            let a = n[s + 3];
            a >= 0 ? o[a]() : o[-a].unsubscribe(), s += 2;
        }
        else {
            let a = o[n[s + 1]];
            n[s].call(a);
        } o !== null && (t[Ot] = null); let r = t[Ua]; if (r !== null) {
    t[Ua] = null;
    for (let s = 0; s < r.length; s++) {
        let a = r[s];
        a();
    }
} let i = t[Mo]; if (i !== null) {
    t[Mo] = null;
    for (let s of i)
        s.destroy();
} }
function BN(e, t) { let n; if (e != null && (n = e.destroyHooks) != null)
    for (let o = 0; o < n.length; o += 2) {
        let r = t[n[o]];
        if (!(r instanceof Qt)) {
            let i = n[o + 1];
            if (Array.isArray(i))
                for (let s = 0; s < i.length; s += 2) {
                    let a = r[i[s]], c = i[s + 1];
                    k(b.LifecycleHookStart, a, c);
                    try {
                        c.call(a);
                    }
                    finally {
                        k(b.LifecycleHookEnd, a, c);
                    }
                }
            else {
                k(b.LifecycleHookStart, r, i);
                try {
                    i.call(r);
                }
                finally {
                    k(b.LifecycleHookEnd, r, i);
                }
            }
        }
    } }
function ku(e, t, n) { return km(e, t.parent, n); }
function km(e, t, n) { let o = t; for (; o !== null && o.type & 168;)
    t = o, o = t.parent; if (o === null)
    return n[j]; if (he(o)) {
    let { encapsulation: r } = e.data[o.directiveStart + o.componentOffset];
    if (r === Re.None || r === Re.Emulated)
        return null;
} return W(o, n); }
function xm(e, t, n) { return Lm(e, t, n); }
function Om(e, t, n) { return e.type & 40 ? W(e, n) : null; }
var Lm = Om, hl;
function Pm(e, t) { Lm = e, hl = t; }
function xu(e, t, n, o) { let r = ku(e, o, t), i = t[C], s = o.parent || t[ue], a = xm(s, o, t); if (r != null)
    if (Array.isArray(n))
        for (let c = 0; c < n.length; c++)
            Pp(i, r, n[c], a, !1);
    else
        Pp(i, r, n, a, !1); hl !== void 0 && hl(i, o, t, n, r); }
function Wt(e, t) { if (t !== null) {
    let n = t.type;
    if (n & 3)
        return W(t, e);
    if (n & 4)
        return Zi(-1, e[t.index]);
    if (n & 8) {
        let o = t.child;
        if (o !== null)
            return Wt(e, o);
        {
            let r = e[t.index];
            return te(r) ? Zi(-1, r) : O(r);
        }
    }
    else {
        if (n & 128)
            return Wt(e, t.next);
        if (n & 32)
            return _u(t, e)() || O(e[t.index]);
        {
            let o = Fm(e, t);
            if (o !== null) {
                if (Array.isArray(o))
                    return o[0];
                let r = Ht(e[J]);
                return Wt(r, o);
            }
            else
                return Wt(e, t.next);
        }
    }
} return null; }
function Fm(e, t) { if (t !== null) {
    let o = e[J][ue], r = t.projection;
    return o.projection[r];
} return null; }
function Zi(e, t) { let n = H + e + 1; if (n < t.length) {
    let o = t[n], r = o[y].firstChild;
    if (r !== null)
        return Wt(o, r);
} return t[Fe]; }
function Ou(e, t, n, o, r, i, s) { for (; n != null;) {
    let a = o[R];
    if (n.type === 128) {
        n = n.next;
        continue;
    }
    let c = o[n.index], l = n.type;
    if (s && t === 0 && (c && Ae(O(c), o), n.flags |= 2), !eo(n))
        if (l & 8)
            Ou(e, t, n.child, o, r, i, !1), Tn(t, e, a, r, c, n, i, o);
        else if (l & 32) {
            let u = _u(n, o), d;
            for (; d = u();)
                Tn(t, e, a, r, d, n, i, o);
            Tn(t, e, a, r, c, n, i, o);
        }
        else
            l & 16 ? Hm(e, t, o, n, r, i) : Tn(t, e, a, r, c, n, i, o);
    n = s ? n.projectionNext : n.next;
} }
function Fs(e, t, n, o, r, i) { Ou(n, o, e.firstChild, t, r, i, !1); }
function $N(e, t, n) { let o = t[C], r = ku(e, n, t), i = n.parent || t[ue], s = xm(i, n, t); Hm(o, 0, t, n, r, s); }
function Hm(e, t, n, o, r, i) { let s = n[J], c = s[ue].projection[o.projection]; if (Array.isArray(c))
    for (let l = 0; l < c.length; l++) {
        let u = c[l];
        Tn(t, e, n[R], r, u, o, i, n);
    }
else {
    let l = c, u = s[q];
    Zo(o) && (l.flags |= 128), Ou(e, t, l, u, r, i, !0);
} }
function UN(e, t, n, o, r, i, s) { let a = o[Fe], c = O(o); a !== c && Tn(t, e, n, i, a, r, s); for (let l = H; l < o.length; l++) {
    let u = o[l];
    Fs(u[y], u, e, t, i, a);
} }
function zN(e, t, n, o, r) { if (t)
    r ? e.addClass(n, o) : e.removeClass(n, o);
else {
    let i = o.indexOf("-") === -1 ? void 0 : qi.DashCase;
    r == null ? e.removeStyle(n, o, i) : (typeof r == "string" && r.endsWith("!important") && (r = r.slice(0, -10), i |= qi.Important), e.setStyle(n, o, r, i));
} }
function jm(e, t, n, o, r) { let i = ae(), s = o & 2; try {
    Mt(-1), s && t.length > I && Tm(e, t, I, !1);
    let a = s ? b.TemplateUpdateStart : b.TemplateCreateStart;
    k(a, r, n), n(o, r);
}
finally {
    Mt(i);
    let a = s ? b.TemplateUpdateEnd : b.TemplateCreateEnd;
    k(a, r, n);
} }
function Hs(e, t, n) { ZN(e, t, n), (n.flags & 64) === 64 && YN(e, t, n); }
function ro(e, t, n = W) { let o = t.localNames; if (o !== null) {
    let r = t.index + 1;
    for (let i = 0; i < o.length; i += 2) {
        let s = o[i + 1], a = s === -1 ? n(t, e) : e[s];
        e[r++] = a;
    }
} }
function GN(e, t, n, o) { let i = o.get(nu, Ch) || n === Re.ShadowDom || n === Re.ExperimentalIsolatedShadowDom, s = e.selectRootElement(t, i); return WN(s), s; }
function WN(e) { Vm(e); }
var Vm = () => null;
function qN(e) { ah(e) ? cm(e) : mM(e); }
function Bm() { Vm = qN; }
function QN(e) { return e === "class" ? "className" : e === "for" ? "htmlFor" : e === "formaction" ? "formAction" : e === "innerHtml" ? "innerHTML" : e === "readonly" ? "readOnly" : e === "tabindex" ? "tabIndex" : e; }
function js(e, t, n, o, r, i) { let s = t[y]; if (Us(e, s, t, n, o)) {
    he(e) && $m(t, e.index);
    return;
} e.type & 3 && (n = QN(n)), Lu(e, t, n, o, r, i); }
function Lu(e, t, n, o, r, i) { if (e.type & 3) {
    let s = W(e, t);
    o = i != null ? i(o, e.value || "", n) : o, r.setProperty(s, n, o);
}
else
    e.type & 12; }
function $m(e, t) { let n = fe(t, e); n[S] & 16 || (n[S] |= 64); }
function ZN(e, t, n) { let o = n.directiveStart, r = n.directiveEnd; he(n) && SN(t, n, e.data[o + n.componentOffset]), e.firstCreatePass || Bi(n, t); let i = n.initialInputs; for (let s = o; s < r; s++) {
    let a = e.data[s], c = Qo(t, e, s, n);
    if (Ae(c, t), i !== null && XN(t, s - o, c, a, n, i), be(a)) {
        let l = fe(n.index, t);
        l[F] = Qo(t, e, s, n);
    }
} }
function YN(e, t, n) { let o = n.directiveStart, r = n.directiveEnd, i = n.index, s = ep(); try {
    Mt(i);
    for (let a = o; a < r; a++) {
        let c = e.data[a], l = t[a];
        lc(a), (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) && KN(c, l);
    }
}
finally {
    Mt(-1), lc(s);
} }
function KN(e, t) { e.hostBindings !== null && e.hostBindings(1, t); }
function Pu(e, t) { let n = e.directiveRegistry, o = null; if (n)
    for (let r = 0; r < n.length; r++) {
        let i = n[r];
        Em(t, i.selectors, !1) && (o ??= [], be(i) ? o.unshift(i) : o.push(i));
    } return o; }
function JN(e, t, n, o, r, i) { let s = W(e, t); Vs(t[C], s, i, e.value, n, o, r); }
function Vs(e, t, n, o, r, i, s) { if (i == null)
    e.removeAttribute(t, r, n);
else {
    let a = s == null ? N(i) : s(i, o || "", r);
    e.setAttribute(t, r, a, n);
} }
function XN(e, t, n, o, r, i) { let s = i[t]; if (s !== null)
    for (let a = 0; a < s.length; a += 2) {
        let c = s[a], l = s[a + 1];
        Yt(o, n, c, l);
    } }
function Bs(e, t, n, o, r) { let i = I + n, s = t[y], a = r(s, t, e, o, n); t[i] = a, ze(e, !0); let c = e.type === 2; return c ? (lm(t[C], a, e), (Qf() === 0 || gn(e)) && Ae(a, t), Zf()) : Ae(a, t), Ro() && (!c || !eo(e)) && xu(s, t, a, e), e; }
function $s(e) { let t = e; return nc() ? oc() : (t = t.parent, ze(t, !1)), t; }
function Um(e, t, n) { return (e === null || be(e)) && (n = _o(n[t.index])), n[C]; }
function Fu(e, t) { let n = e[R]; if (!n)
    return; let o; try {
    o = n.get(Bt, null);
}
catch {
    o = null;
} o?.(t); }
function Us(e, t, n, o, r) { let i = e.inputs?.[o], s = e.hostDirectiveInputs?.[o], a = !1; if (s)
    for (let c = 0; c < s.length; c += 2) {
        let l = s[c], u = s[c + 1], d = t.data[l];
        Yt(d, n[l], u, r), a = !0;
    } if (i)
    for (let c of i) {
        let l = n[c], u = t.data[c];
        Yt(u, l, o, r), a = !0;
    } return a; }
function e_(e, t, n, o, r, i) { let s = null, a = null, c = null, l = !1, u = e.directiveToIndex.get(o.type); if (typeof u == "number" ? s = u : [s, a, c] = u, a !== null && c !== null && e.hostDirectiveInputs?.hasOwnProperty(r)) {
    let d = e.hostDirectiveInputs[r];
    for (let f = 0; f < d.length; f += 2) {
        let p = d[f];
        if (p >= a && p <= c) {
            let g = t.data[p], m = d[f + 1];
            Yt(g, n[p], m, i), l = !0;
        }
        else if (p > c)
            break;
    }
} return s !== null && o.inputs.hasOwnProperty(r) && (Yt(o, n[s], r, i), l = !0), l; }
function t_(e, t) { let n = fe(t, e), o = n[y]; n_(o, n); let r = n[j]; r !== null && n[ie] === null && (n[ie] = Fh(r, n[R])), k(b.ComponentStart); try {
    zs(o, n, n[F]);
}
finally {
    k(b.ComponentEnd, n[F]);
} }
function n_(e, t) { for (let n = t.length; n < e.blueprint.length; n++)
    t.push(e.blueprint[n]); }
function zs(e, t, n) { li(t); try {
    let o = e.viewQuery;
    o !== null && ol(1, o, n);
    let r = e.template;
    r !== null && jm(e, t, r, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), t[$e]?.finishViewCreation(e), e.staticContentQueries && Qh(e, t), e.staticViewQueries && ol(2, e.viewQuery, n);
    let i = e.components;
    i !== null && o_(t, i);
}
catch (o) {
    throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), o;
}
finally {
    t[S] &= -5, ui();
} }
function o_(e, t) { for (let n = 0; n < t.length; n++)
    t_(e, t[n]); }
function io(e, t, n, o) { let r = x(null); try {
    let i = t.tView, a = e[S] & 4096 ? 4096 : 16, c = As(e, i, n, a, null, t, null, null, o?.injector ?? null, o?.embeddedViewInjector ?? null, o?.dehydratedView ?? null), l = e[t.index];
    c[et] = l;
    let u = e[$e];
    return u !== null && (c[$e] = u.createEmbeddedView(i)), zs(i, c, n), c;
}
finally {
    x(r);
} }
function Jt(e, t) { return !t || t.firstChild === null || Zo(e); }
function On(e, t, n, o, r = !1) { for (; n !== null;) {
    if (n.type === 128) {
        n = r ? n.projectionNext : n.next;
        continue;
    }
    let i = t[n.index];
    i !== null && o.push(O(i)), te(i) && Gs(i, o);
    let s = n.type;
    if (s & 8)
        On(e, t, n.child, o);
    else if (s & 32) {
        let a = _u(n, t), c;
        for (; c = a();)
            o.push(c);
    }
    else if (s & 16) {
        let a = Fm(t, n);
        if (Array.isArray(a))
            o.push(...a);
        else {
            let c = Ht(t[J]);
            On(c[y], c, a, o, !0);
        }
    }
    n = r ? n.projectionNext : n.next;
} return o; }
function Gs(e, t) { for (let n = H; n < e.length; n++) {
    let o = e[n], r = o[y].firstChild;
    r !== null && On(o[y], o, r, t);
} e[Fe] !== e[j] && t.push(e[Fe]); }
function zm(e) { if (e[Lt] !== null) {
    for (let t of e[Lt])
        t.impl.addSequence(t);
    e[Lt].length = 0;
} }
var Gm = [];
function r_(e) { return e[Se] ?? i_(e); }
function i_(e) { let t = Gm.pop() ?? Object.create(a_); return t.lView = e, t; }
function s_(e) { e.lView[Se] !== e && (e.lView = null, Gm.push(e)); }
var a_ = Ye(Y({}, Aa), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { ri(e.lView); }, consumerOnSignalRead() { this.lView[Se] = this; } });
function c_(e) { let t = e[Se] ?? Object.create(l_); return t.lView = e, t; }
var l_ = Ye(Y({}, Aa), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { let t = Ht(e.lView); for (; t && !Wm(t[y]);)
        t = Ht(t); t && ni(t); }, consumerOnSignalRead() { this.lView[Se] = this; } });
function Wm(e) { return e.type !== 2; }
function qm(e) { if (e[Mo] === null)
    return; let t = !0; for (; t;) {
    let n = !1;
    for (let o of e[Mo])
        o.dirty && (n = !0, o.zone === null || Zone.current === o.zone ? o.run() : o.zone.run(() => o.run()));
    t = n && !!(e[S] & 8192);
} }
var u_ = 100;
function Qm(e, t = 0) { let o = e[Xe].rendererFactory, r = !1; r || o.begin?.(); try {
    d_(e, t);
}
finally {
    r || o.end?.();
} }
function d_(e, t) { let n = ic(); try {
    sc(!0), ml(e, t);
    let o = 0;
    for (; So(e);) {
        if (o === u_)
            throw new _(103, !1);
        o++, ml(e, 1);
    }
}
finally {
    sc(n);
} }
function Zm(e, t, n, o) { if (Dt(t))
    return; let r = t[S], i = !1, s = !1; li(t); let a = !0, c = null, l = null; i || (Wm(e) ? (l = r_(t), c = ho(l)) : Mf() === null ? (a = !1, l = c_(t), c = ho(l)) : t[Se] && (mo(t[Se]), t[Se] = null)); try {
    Wa(t), ac(e.bindingStartIndex), n !== null && jm(e, t, n, 2, o);
    let u = (r & 3) === 3;
    if (!i)
        if (u) {
            let p = e.preOrderCheckHooks;
            p !== null && _i(t, p, null);
        }
        else {
            let p = e.preOrderHooks;
            p !== null && wi(t, p, 0, null), _c(t, 0);
        }
    if (s || f_(t), qm(t), Ym(t, 0), e.contentQueries !== null && Qh(e, t), !i)
        if (u) {
            let p = e.contentCheckHooks;
            p !== null && _i(t, p);
        }
        else {
            let p = e.contentHooks;
            p !== null && wi(t, p, 1), _c(t, 1);
        }
    g_(e, t);
    let d = e.components;
    d !== null && Jm(t, d, 0);
    let f = e.viewQuery;
    if (f !== null && ol(2, f, o), !i)
        if (u) {
            let p = e.viewCheckHooks;
            p !== null && _i(t, p);
        }
        else {
            let p = e.viewHooks;
            p !== null && wi(t, p, 2), _c(t, 2);
        }
    if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[ti]) {
        for (let p of t[ti])
            p();
        t[ti] = null;
    }
    i || (zm(t), t[S] &= -73);
}
catch (u) {
    throw i || ri(t), u;
}
finally {
    l !== null && (Hr(l, c), a && s_(l)), ui();
} }
function Ym(e, t) { for (let n = ph(e); n !== null; n = gh(n))
    for (let o = H; o < n.length; o++) {
        let r = n[o];
        Km(r, t);
    } }
function f_(e) { for (let t = ph(e); t !== null; t = gh(t)) {
    if (!(t[S] & 2))
        continue;
    let n = t[Pt];
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        ni(r);
    }
} }
function p_(e, t, n) { k(b.ComponentStart); let o = fe(t, e); try {
    Km(o, n);
}
finally {
    k(b.ComponentEnd, o[F]);
} }
function Km(e, t) { Uf(e) && ml(e, t); }
function ml(e, t) { let o = e[y], r = e[S], i = e[Se], s = !!(t === 0 && r & 16); if (s ||= !!(r & 64 && t === 0), s ||= !!(r & 1024), s ||= !!(i?.dirty && jr(i)), s ||= !1, i && (i.dirty = !1), e[S] &= -9217, s)
    Zm(o, e, o.template, e[F]);
else if (r & 8192) {
    let a = x(null);
    try {
        qm(e), Ym(e, 1);
        let c = o.components;
        c !== null && Jm(e, c, 1), zm(e);
    }
    finally {
        x(a);
    }
} }
function Jm(e, t, n) { for (let o = 0; o < t.length; o++)
    p_(e, t[o], n); }
function g_(e, t) { let n = e.hostBindingOpCodes; if (n !== null)
    try {
        for (let o = 0; o < n.length; o++) {
            let r = n[o];
            if (r < 0)
                Mt(~r);
            else {
                let i = r, s = n[++o], a = n[++o];
                Xf(s, i);
                let c = t[i];
                k(b.HostBindingsUpdateStart, c);
                try {
                    a(2, c);
                }
                finally {
                    k(b.HostBindingsUpdateEnd, c);
                }
            }
        }
    }
    finally {
        Mt(-1);
    } }
function Tr(e, t) { let n = ic() ? 64 : 1088; for (e[Xe].changeDetectionScheduler?.notify(t); e;) {
    e[S] |= n;
    let o = Ht(e);
    if (Ue(e) && !o)
        return e;
    e = o;
} return null; }
function Xm(e, t, n, o) { return [e, !0, 0, t, null, o, null, n, null, null]; }
function ey(e, t) { let n = H + t; if (n < e.length)
    return e[n]; }
function so(e, t, n, o = !0) { let r = t[y]; if (h_(r, t, e, n), o) {
    let s = Zi(n, e), a = t[C], c = a.parentNode(e[Fe]);
    c !== null && FN(r, e[ue], a, t, c, s);
} let i = t[ie]; i !== null && i.firstChild !== null && (i.firstChild = null); }
function Hu(e, t) { let n = Jo(e, t); return n !== void 0 && Cr(n[y], n), n; }
function Jo(e, t) { if (e.length <= H)
    return; let n = H + t, o = e[n]; if (o) {
    let r = o[et];
    r !== null && r !== e && Ru(r, o), t > 0 && (e[n - 1][le] = o[le]);
    let i = Io(e, H + t);
    Am(o[y], o);
    let s = i[$e];
    s !== null && s.detachView(i[y]), o[q] = null, o[le] = null, o[S] &= -129;
} return o; }
function h_(e, t, n, o) { let r = H + o, i = n.length; o > 0 && (n[r - 1][le] = t), o < i - H ? (t[le] = n[r], Ha(n, H + o, t)) : (n.push(t), t[le] = null), t[q] = n; let s = t[et]; s !== null && n !== s && ty(s, t); let a = t[$e]; a !== null && a.insertView(e), oi(t), t[S] |= 128; }
function ty(e, t) { let n = e[Pt], o = t[q]; if (ee(o))
    e[S] |= 2;
else {
    let r = o[q][J];
    t[J] !== r && (e[S] |= 2);
} n === null ? e[Pt] = [t] : n.push(t); }
var St = class {
    _lView;
    _cdRefInjectingView;
    _appRef = null;
    _attachedToViewContainer = !1;
    exhaustive;
    get rootNodes() { let t = this._lView, n = t[y]; return On(n, t, n.firstChild, []); }
    constructor(t, n) { this._lView = t, this._cdRefInjectingView = n; }
    get context() { return this._lView[F]; }
    set context(t) { this._lView[F] = t; }
    get destroyed() { return Dt(this._lView); }
    destroy() { if (this._appRef)
        this._appRef.detachView(this);
    else if (this._attachedToViewContainer) {
        let t = this._lView[q];
        if (te(t)) {
            let n = t[No], o = n ? n.indexOf(this) : -1;
            o > -1 && (Jo(t, o), Io(n, o));
        }
        this._attachedToViewContainer = !1;
    } Cr(this._lView[y], this._lView); }
    onDestroy(t) { ii(this._lView, t); }
    markForCheck() { Tr(this._cdRefInjectingView || this._lView, 4); }
    detach() { this._lView[S] &= -129; }
    reattach() { oi(this._lView), this._lView[S] |= 128; }
    detectChanges() { this._lView[S] |= 1024, Qm(this._lView); }
    checkNoChanges() { }
    attachToViewContainerRef() { if (this._appRef)
        throw new _(902, !1); this._attachedToViewContainer = !0; }
    detachFromAppRef() { this._appRef = null; let t = Ue(this._lView), n = this._lView[et]; n !== null && !t && Ru(n, this._lView), Rm(this._lView[y], this._lView); }
    attachToAppRef(t) { if (this._attachedToViewContainer)
        throw new _(902, !1); this._appRef = t; let n = Ue(this._lView), o = this._lView[et]; o !== null && !n && ty(o, this._lView), oi(this._lView); }
};
function m_(e) { return So(e._lView) || !!(e._lView[S] & 64); }
function y_(e) { ni(e._lView); }
var Xo = (() => { class e {
    _declarationLView;
    _declarationTContainer;
    elementRef;
    static __NG_ELEMENT_ID__ = v_;
    constructor(n, o, r) { this._declarationLView = n, this._declarationTContainer = o, this.elementRef = r; }
    get ssrId() { return this._declarationTContainer.tView?.ssrId || null; }
    createEmbeddedView(n, o) { return this.createEmbeddedViewImpl(n, o); }
    createEmbeddedViewImpl(n, o, r) { let i = io(this._declarationLView, this._declarationTContainer, n, { embeddedViewInjector: o, dehydratedView: r }); return new St(i); }
} return e; })();
function v_() { return Ws(M(), h()); }
function Ws(e, t) { return e.type & 4 ? new Xo(t, e, qn(e, t)) : null; }
var yl = "<-- AT THIS LOCATION";
function I_(e) { switch (e) {
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
function E_(e, t) {
    let n = `During serialization, Angular was unable to find an element in the DOM:

`, o = `${M_(e, t, !1)}

`, r = __();
    throw new _(-502, n + o + r);
}
function ny(e) {
    let t = "During serialization, Angular detected DOM nodes that were created outside of Angular context and provided as projectable nodes (likely via `ViewContainerRef.createComponent` or `createComponent` APIs). Hydration is not supported for such cases, consider refactoring the code to avoid this pattern or using `ngSkipHydration` on the host element of the component.\n\n", n = `${N_(e)}

`, o = t + n + w_();
    return new _(-503, o);
}
function D_(e) { let t = []; if (e.attrs)
    for (let n = 0; n < e.attrs.length;) {
        let o = e.attrs[n++];
        if (typeof o == "number")
            break;
        let r = e.attrs[n++];
        t.push(`${o}="${Yi(r)}"`);
    } return t.join(" "); }
var C_ = new Set(["ngh", "ng-version", "ng-server-context"]);
function T_(e) { let t = []; for (let n = 0; n < e.attributes.length; n++) {
    let o = e.attributes[n];
    C_.has(o.name) || t.push(`${o.name}="${Yi(o.value)}"`);
} return t.join(" "); }
function kc(e, t = "\u2026") { switch (e.type) {
    case 1: return `#text${e.value ? `(${e.value})` : ""}`;
    case 2:
        let o = D_(e), r = e.value.toLowerCase();
        return `<${r}${o ? " " + o : ""}>${t}</${r}>`;
    case 8: return "<!-- ng-container -->";
    case 4: return "<!-- container -->";
    default: return `#node(${I_(e.type)})`;
} }
function Ai(e, t = "\u2026") { let n = e; switch (n.nodeType) {
    case Node.ELEMENT_NODE:
        let o = n.tagName.toLowerCase(), r = T_(n);
        return `<${o}${r ? " " + r : ""}>${t}</${o}>`;
    case Node.TEXT_NODE:
        let i = n.textContent ? Yi(n.textContent) : "";
        return `#text${i ? `(${i})` : ""}`;
    case Node.COMMENT_NODE: return `<!-- ${Yi(n.textContent ?? "")} -->`;
    default: return `#node(${n.nodeType})`;
} }
function M_(e, t, n) {
    let r = "";
    t.prev ? (r += `  \u2026
`, r += "  " + kc(t.prev) + `
`) : t.type && t.type & 12 && (r += `  \u2026
`), n ? (r += "  " + kc(t) + `
`, r += `  <!-- container -->  ${yl}
`) : r += "  " + kc(t) + `  ${yl}
`, r += `  \u2026
`;
    let i = t.type ? ku(e[y], t, e) : null;
    return i && (r = Ai(i, `
` + r)), r;
}
function N_(e) {
    let n = "", o = e;
    return o.previousSibling && (n += `  \u2026
`, n += "  " + Ai(o.previousSibling) + `
`), n += "  " + Ai(o) + `  ${yl}
`, e.nextSibling && (n += `  \u2026
`), e.parentNode && (n = Ai(o.parentNode, `
` + n)), n;
}
function __(e) {
    return `To fix this problem:
  * check ${e ? `the "${e}"` : "corresponding"} component for hydration-related issues
  * check to see if your template has valid HTML structure
  * or skip hydration by adding the \`ngSkipHydration\` attribute to its host node in a template

`;
}
function w_() {
    return `Note: attributes are only displayed to better represent the DOM but have no effect on hydration mismatches.

`;
}
function S_(e) { return e.replace(/\s+/gm, ""); }
function Yi(e, t = 50) { return e ? (e = S_(e), e.length > t ? `${e.substring(0, t - 1)}\u2026` : e) : ""; }
function oy(e, t, n) { let o = t.insertBeforeIndex, r = Array.isArray(o) ? o[0] : o; return r === null ? Om(e, t, n) : O(n[r]); }
function ry(e, t, n, o, r) { let i = t.insertBeforeIndex; if (Array.isArray(i)) {
    let s = o, a = null;
    if (t.type & 3 || (a = s, s = r), s !== null && t.componentOffset === -1)
        for (let c = 1; c < i.length; c++) {
            let l = n[i[c]];
            Zt(e, s, l, a, !1);
        }
} }
function cn(e, t, n, o, r) { let i = e.data[t]; if (i === null)
    i = ju(e, t, n, o, r), Jf() && (i.flags |= 32);
else if (i.type & 64) {
    i.type = n, i.value = o, i.attrs = r;
    let s = hn();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
} return ze(i, !0), i; }
function ju(e, t, n, o, r) { let i = Kf(), s = nc(), a = s ? i : i && i.parent, c = e.data[t] = A_(e, a, n, t, o, r); return b_(e, c, i, s), c; }
function b_(e, t, n, o) { e.firstChild === null && (e.firstChild = t), n !== null && (o ? n.child == null && t.parent !== null && (n.child = t) : n.next === null && (n.next = t, t.prev = n)); }
function A_(e, t, n, o, r, i) { let s = t ? t.injectorIndex : -1, a = 0; return bo() && (a |= 128), { type: n, index: o, insertBeforeIndex: null, injectorIndex: s, directiveStart: -1, directiveEnd: -1, directiveStylingLast: -1, componentOffset: -1, fieldIndex: -1, customControlIndex: -1, propertyBindings: null, flags: a, providerIndexes: 0, value: r, attrs: i, mergedAttrs: null, localNames: null, initialInputs: null, inputs: null, hostDirectiveInputs: null, outputs: null, hostDirectiveOutputs: null, directiveToIndex: null, tView: null, next: null, prev: null, projectionNext: null, child: null, parent: t, projection: null, styles: null, stylesWithoutHost: null, residualStyles: void 0, classes: null, classesWithoutHost: null, residualClasses: void 0, classBindings: 0, styleBindings: 0 }; }
function iy(e, t) { if (e.push(t), e.length > 1)
    for (let n = e.length - 2; n >= 0; n--) {
        let o = e[n];
        sy(o) || R_(o, t) && k_(o) === null && x_(o, t.index);
    } }
function sy(e) { return !(e.type & 64); }
function R_(e, t) { return sy(t) || e.index > t.index; }
function k_(e) { let t = e.insertBeforeIndex; return Array.isArray(t) ? t[0] : t; }
function x_(e, t) { let n = e.insertBeforeIndex; Array.isArray(n) ? n[0] = t : (Pm(oy, ry), e.insertBeforeIndex = t); }
function Fo(e, t) { let n = e.data[t]; return n === null || typeof n == "string" ? null : n.hasOwnProperty("currentCaseLViewIndex") ? n : n.value; }
function O_(e, t, n) { let o = e.data[t]; o === null ? e.data[t] = n : o.value = n; }
function L_(e, t) { let n = e.insertBeforeIndex; n === null ? (Pm(oy, ry), n = e.insertBeforeIndex = [null, t]) : (bf(Array.isArray(n), !0, "Expecting array here"), n.push(t)); }
function P_(e, t, n) { let o = ju(e, n, 64, null, null); return iy(t, o), o; }
function qs(e, t) { let n = t[e.currentCaseLViewIndex]; return n === null ? n : n < 0 ? ~n : n; }
function F_(e) { return e >>> 17; }
function H_(e) { return (e & 131070) >>> 1; }
function j_(e, t, n) { return e | t << 17 | n << 1; }
function ay(e) { return e === -1; }
function Vu(e, t, n) { e.index = 0; let o = qs(t, n); o !== null ? e.removes = t.remove[o] : e.removes = P; }
function Ki(e) { if (e.index < e.removes.length) {
    let t = e.removes[e.index++];
    if (t > 0)
        return e.lView[t];
    {
        e.stack.push(e.index, e.removes);
        let n = ~t, o = e.lView[y].data[n];
        return Vu(e, o, e.lView), Ki(e);
    }
}
else
    return e.stack.length === 0 ? (e.lView = void 0, null) : (e.removes = e.stack.pop(), e.index = e.stack.pop(), Ki(e)); }
function V_() { let e = { stack: [], index: -1 }; function t(n, o) { for (e.lView = o; e.stack.length;)
    e.stack.pop(); return Vu(e, n.value, o), Ki.bind(null, e); } return t; }
function B_(e, t) { let n = { stack: [], index: -1, lView: t }; return Vu(n, e, t), Ki.bind(null, n); }
var $_ = new RegExp(`^(\\d+)*(${eu}|${Xl})*(.*)`);
function U_(e, t) { let n = [e]; for (let o of t) {
    let r = n.length - 1;
    if (r > 0 && n[r - 1] === o) {
        let i = n[r] || 1;
        n[r] = i + 1;
    }
    else
        n.push(o, "");
} return n.join(""); }
function z_(e) { let t = e.match($_), [n, o, r, i] = t, s = o ? parseInt(o, 10) : r, a = []; for (let [c, l, u] of i.matchAll(/(f|n)(\d*)/g)) {
    let d = parseInt(u, 10) || 1;
    a.push(l, d);
} return [s, ...a]; }
function G_(e) { return !e.prev && e.parent?.type === 8; }
function xc(e) { return e.index - I; }
function ao(e, t) { return !(e.type & 144) && !!t[e.index] && cy(O(t[e.index])); }
function cy(e) { return !!e && !e.isConnected; }
function ly(e, t) { let n = e.i18nNodes; if (n)
    return n.get(t); }
function W_(e, t, n) { let r = e.data[pr]?.[n]; return r ? uy(r, t) : null; }
function Mr(e, t, n, o) { let r = xc(o), i = ly(e, r); if (i === void 0) {
    let s = e.data[pr];
    if (s?.[r])
        i = uy(s[r], n);
    else if (t.firstChild === o)
        i = e.firstChild;
    else {
        let a = o.prev === null, c = o.prev ?? o.parent;
        if (G_(o)) {
            let l = xc(o.parent);
            i = nl(e, l);
        }
        else {
            let l = W(c, n);
            if (a)
                i = l.firstChild;
            else {
                let u = xc(c), d = nl(e, u);
                if (c.type === 2 && d) {
                    let p = fu(e, u) + 1;
                    i = Qs(p, d);
                }
                else
                    i = l.nextSibling;
            }
        }
    }
} return i; }
function Qs(e, t) { let n = t; for (let o = 0; o < e; o++)
    n = n.nextSibling; return n; }
function q_(e, t) { let n = e; for (let o = 0; o < t.length; o += 2) {
    let r = t[o], i = t[o + 1];
    for (let s = 0; s < i; s++)
        switch (r) {
            case Eh:
                n = n.firstChild;
                break;
            case Dh:
                n = n.nextSibling;
                break;
        }
} return n; }
function uy(e, t) { let [n, ...o] = z_(e), r; if (n === Xl)
    r = t[J][j];
else if (n === eu)
    r = Du(t[J][j]);
else {
    let i = Number(n);
    r = O(t[i + I]);
} return q_(r, o); }
function vl(e, t) { if (e === t)
    return []; if (e.parentElement == null || t.parentElement == null)
    return null; if (e.parentElement === t.parentElement)
    return Q_(e, t); {
    let n = t.parentElement, o = vl(e, n), r = vl(n.firstChild, t);
    return !o || !r ? null : [...o, Eh, ...r];
} }
function Q_(e, t) { let n = [], o = null; for (o = e; o != null && o !== t; o = o.nextSibling)
    n.push(Dh); return o == null ? null : n; }
function Bp(e, t, n) { let o = vl(e, t); return o === null ? null : U_(n, o); }
function dy(e, t, n) { let o = e.parent, r, i, s; for (; o !== null && (ao(o, t) || n?.has(o.index));)
    o = o.parent; o === null || !(o.type & 3) ? (r = s = Xl, i = t[J][j]) : (r = o.index, i = O(t[r]), s = N(r - I)); let a = O(t[e.index]); if (e.type & 44) {
    let l = Wt(t, e);
    l && (a = l);
} let c = Bp(i, a, s); if (c === null && i !== a) {
    let l = i.ownerDocument.body;
    if (c = Bp(l, a, eu), c === null)
        throw E_(t, e);
} return c; }
function fy(e, t) { let n = e.createNodeIterator(t, NodeFilter.SHOW_COMMENT, { acceptNode: Z_ }), o, r = new Map; for (; o = n.nextNode();) {
    let i = "ngh=", s = o?.textContent, a = s?.indexOf(i) ?? -1;
    if (a > -1) {
        let c = s.substring(a + i.length).trim();
        r.set(c, o);
    }
} return r; }
function Z_(e) { return e.textContent?.trimStart().startsWith("ngh=") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; }
var py = !1, gy = () => { };
function Bu(e) { py = e; }
function Zs() { return py; }
function Y_(e, t, n, o) { gy(e, t, n, o); }
function hy() { gy = tw; }
function my(e) { return e = e ?? D(Te), e.get(ou, !1); }
function yy(e, t) { let n = t.i18nChildren.get(e); return n === void 0 && (n = K_(e), t.i18nChildren.set(e, n)), n; }
function K_(e) { let t = new Set; function n(o) { switch (t.add(o.index), o.kind) {
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
function vy(e, t, n) { if (!n.isI18nHydrationEnabled)
    return null; let o = e[y], r = o.data[t]; if (!r || !r.ast)
    return null; let i = o.data[r.parentTNodeIndex]; if (i && ch(i))
    return null; let s = { caseQueue: [], disconnectedNodes: new Set, disjointNodes: new Set }; return Il(e, s, n, r.ast), s.caseQueue.length === 0 && s.disconnectedNodes.size === 0 && s.disjointNodes.size === 0 ? null : s; }
function Il(e, t, n, o) { let r = null; for (let i of o) {
    let s = X_(e, t, n, i);
    s && (J_(r, s) && t.disjointNodes.add(i.index - I), r = s);
} return r; }
function J_(e, t) { return e && e.nextSibling !== t; }
function X_(e, t, n, o) { let r = O(e[o.index]); if (!r || cy(r))
    return t.disconnectedNodes.add(o.index - I), null; let i = r; switch (o.kind) {
    case 0: {
        pu(n, i);
        break;
    }
    case 1:
    case 2: {
        Il(e, t, n, o.children);
        break;
    }
    case 3: {
        let s = e[o.currentCaseLViewIndex];
        if (s != null) {
            let a = s < 0 ? ~s : s;
            t.caseQueue.push(a), Il(e, t, n, o.cases[a]);
        }
        break;
    }
} return ew(e, o); }
function ew(e, t) { let o = e[y].data[t.index]; return fs(o) ? Wt(e, o) : t.kind === 3 ? B_(o, e)() ?? O(e[t.index]) : O(e[t.index]) ?? null; }
function Ut(e, t) { e.currentNode = t; }
function xo(e, t, n) { let o = n.index - I, { disconnectedNodes: r } = e, i = t.currentNode; return t.isConnected ? (e.i18nNodes.set(o, i), r.delete(o)) : r.add(o), i; }
function Oc(e, t) { let n = e.currentNode; for (let o = 0; o < t && n; o++)
    n = n?.nextSibling ?? null; return n; }
function Lc(e, t) { return { currentNode: t, isConnected: e.isConnected }; }
function tw(e, t, n, o) { let r = e[ie]; if (!r || !Zs() || n && (ch(n) || _s(r, n.index - I)))
    return; let i = e[y], s = i.data[t]; function a() { if (ay(o)) {
    let p = Mr(r, i, e, n);
    return n.type & 8 ? p : p.firstChild;
} return r?.firstChild; } let c = a(), l = Bh(r) ?? new Set, u = r.i18nNodes ??= new Map, d = r.data[Es]?.[t - I] ?? [], f = r.dehydratedIcuData ??= new Map; yn({ hydrationInfo: r, lView: e, i18nNodes: u, disconnectedNodes: l, caseQueue: d, dehydratedIcuData: f }, { currentNode: c, isConnected: !0 }, s.ast), r.disconnectedNodes = l.size === 0 ? null : l; }
function yn(e, t, n) { if (Array.isArray(n)) {
    let o = t;
    for (let r of n) {
        let i = W_(e.hydrationInfo, e.lView, r.index - I);
        i && (o = Lc(t, i)), yn(e, o, r);
    }
}
else {
    if (e.disconnectedNodes.has(n.index - I))
        return;
    switch (n.kind) {
        case 0: {
            let o = xo(e, t, n);
            Ut(t, o?.nextSibling ?? null);
            break;
        }
        case 1: {
            yn(e, Lc(t, t.currentNode?.firstChild ?? null), n.children);
            let o = xo(e, t, n);
            Ut(t, o?.nextSibling ?? null);
            break;
        }
        case 2: {
            let o = n.index - I, { hydrationInfo: r } = e, i = jh(r, o);
            switch (n.type) {
                case 0: {
                    let s = xo(e, t, n);
                    if (DM(r, o)) {
                        yn(e, t, n.children);
                        let a = Oc(t, 1);
                        Ut(t, a);
                    }
                    else if (yn(e, Lc(t, t.currentNode?.firstChild ?? null), n.children), Ut(t, s?.nextSibling ?? null), i !== null) {
                        let a = Oc(t, i + 1);
                        Ut(t, a);
                    }
                    break;
                }
                case 1: {
                    xo(e, t, n);
                    let s = Oc(t, i + 1);
                    Ut(t, s);
                    break;
                }
            }
            break;
        }
        case 3: {
            let o = t.isConnected ? e.caseQueue.shift() : null, r = { currentNode: null, isConnected: !1 };
            for (let s = 0; s < n.cases.length; s++)
                yn(e, s === o ? t : r, n.cases[s]);
            o !== null && e.dehydratedIcuData.set(n.index, { case: o, node: n });
            let i = xo(e, t, n);
            Ut(t, i?.nextSibling ?? null);
            break;
        }
    }
} }
var Iy = () => { };
function nw(e, t, n) { Iy(e, t, n); }
function Ey() { Iy = ow; }
function ow(e, t, n) { let o = e[ie]?.dehydratedIcuData; o && o.get(t)?.case === n && o.delete(t); }
function rw(e) { let t = e[ie]; if (t) {
    let { i18nNodes: n, dehydratedIcuData: o } = t;
    if (n && o) {
        let r = e[C];
        for (let i of o.values())
            iw(r, n, i);
    }
    t.i18nNodes = void 0, t.dehydratedIcuData = void 0;
} }
function iw(e, t, n) { for (let o of n.node.cases[n.case]) {
    let r = t.get(o.index - I);
    r && Ir(e, r, !1);
} }
function Ys(e) { let t = e[Ce] ?? [], o = e[q][C], r = []; for (let i of t)
    i.data[Ds] !== void 0 ? r.push(i) : Dy(i, o); e[Ce] = r; }
function sw(e) { let { lContainer: t } = e, n = t[Ce]; if (n === null)
    return; let r = t[q][C]; for (let i of n)
    Dy(i, r); }
function Dy(e, t) { let n = 0, o = e.firstChild; if (o) {
    let r = e.data[st];
    for (; n < r;) {
        let i = o.nextSibling;
        Ir(t, o, !1), o = i, n++;
    }
} }
function Ks(e) { Ys(e); let t = e[j]; ee(t) && Ji(t); for (let n = H; n < e.length; n++)
    Ji(e[n]); }
function Ji(e) { rw(e); let t = e[y]; for (let n = I; n < t.bindingStartIndex; n++)
    if (te(e[n])) {
        let o = e[n];
        Ks(o);
    }
    else
        ee(e[n]) && Ji(e[n]); }
function $u(e) { let t = e._views; for (let n of t) {
    let o = du(n);
    o !== null && o[j] !== null && (ee(o) ? Ji(o) : Ks(o));
} }
function aw(e, t, n, o) { e !== null && (n.cleanup(t), Ks(e.lContainer), $u(o)); }
function cw(e, t) { let n = []; for (let o of t)
    for (let r = 0; r < (o[fr] ?? 1); r++) {
        let i = { data: o, firstChild: null };
        o[st] > 0 && (i.firstChild = e, e = Qs(o[st], e)), n.push(i);
    } return [e, n]; }
var Cy = () => null, Ty = () => null;
function My() { Cy = lw, Ty = uw; }
function lw(e, t) { return _y(e, t) ? e[Ce].shift() : (Ys(e), null); }
function er(e, t) { return Cy(e, t); }
function uw(e, t, n) { if (t.tView.ssrId === null)
    return null; let o = er(e, t.tView.ssrId); return n[y].firstUpdatePass && o === null && dw(n, t), o; }
function Ny(e, t, n) { return Ty(e, t, n); }
function dw(e, t) { let n = t; for (; n;) {
    if ($p(e, n))
        return;
    if ((n.flags & 256) === 256)
        break;
    n = n.prev;
} for (n = t.next; n && (n.flags & 512) === 512;) {
    if ($p(e, n))
        return;
    n = n.next;
} }
function _y(e, t) { let n = e[Ce]; return !t || n === null || n.length === 0 ? !1 : n[0].data[Is] === t; }
function $p(e, t) { let n = t.tView?.ssrId; if (n == null)
    return !1; let o = e[t.index]; return te(o) && _y(o, n) ? (Ys(o), !0) : !1; }
var wy = class {
}, Js = class {
}, El = class {
    resolveComponentFactory(t) { throw new _(917, !1); }
}, Nr = class {
    static NULL = new El;
}, tr = class {
}, fw = (() => { class e {
    destroyNode = null;
    static __NG_ELEMENT_ID__ = () => pw();
} return e; })();
function pw() { let e = h(), t = M(), n = fe(t.index, e); return (ee(n) ? n : e)[C]; }
var Sy = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => null });
} return e; })();
function Uu(e) { return e.ngModule !== void 0; }
function zt(e) { return !!dn(e); }
function Di(e) { return !!Be(e); }
function Up(e) { return !!Ne(e); }
function Ho(e) { return !!G(e); }
function gw(e) { return G(e) ? "component" : Ne(e) ? "directive" : Be(e) ? "pipe" : "type"; }
function hw(e, t) { if (Ur(e) && (e = z(e), !e))
    throw new Error(`Expected forwardRef function, imported from "${De(t)}", to return a standalone entity or NgModule but got "${De(e) || e}".`); if (dn(e) == null) {
    let n = G(e) || Ne(e) || Be(e);
    if (n != null) {
        if (!n.standalone) {
            let o = gw(e);
            throw new Error(`The "${De(e)}" ${o}, imported from "${De(t)}", is not standalone. Does the ${o} have the standalone: false flag?`);
        }
    }
    else
        throw Uu(e) ? new Error(`A module with providers was imported from "${De(t)}". Modules with providers are not supported in standalone components imports.`) : new Error(`The "${De(e)}" type, imported from "${De(t)}", must be a standalone component / directive / pipe or an NgModule. Did you forget to add the required @Component / @Directive / @Pipe or @NgModule annotation?`);
} }
var Dl = class {
    ownerNgModule = new Map;
    ngModulesWithSomeUnresolvedDecls = new Set;
    ngModulesScopeCache = new Map;
    standaloneComponentsScopeCache = new Map;
    resolveNgModulesDecls() { if (this.ngModulesWithSomeUnresolvedDecls.size !== 0) {
        for (let t of this.ngModulesWithSomeUnresolvedDecls) {
            let n = dn(t);
            if (n?.declarations)
                for (let o of Cn(n.declarations))
                    Ho(o) && this.ownerNgModule.set(o, t);
        }
        this.ngModulesWithSomeUnresolvedDecls.clear();
    } }
    getComponentDependencies(t, n) { this.resolveNgModulesDecls(); let o = G(t); if (o === null)
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
    registerNgModule(t, n) { if (!zt(t))
        throw new Error(`Attempting to register a Type which is not NgModule as NgModule: ${t}`); this.ngModulesWithSomeUnresolvedDecls.add(t); }
    clearScopeCacheFor(t) { this.ngModulesScopeCache.delete(t), this.standaloneComponentsScopeCache.delete(t); }
    getNgModuleScope(t) { if (this.ngModulesScopeCache.has(t))
        return this.ngModulesScopeCache.get(t); let n = this.computeNgModuleScope(t); return this.ngModulesScopeCache.set(t, n), n; }
    computeNgModuleScope(t) { let n = qr(t), o = { exported: { directives: new Set, pipes: new Set }, compilation: { directives: new Set, pipes: new Set } }; for (let r of Cn(n.imports))
        if (zt(r)) {
            let i = this.getNgModuleScope(r);
            Nt(i.exported.directives, o.compilation.directives), Nt(i.exported.pipes, o.compilation.pipes);
        }
        else if (vo(r))
            if (Up(r) || Ho(r))
                o.compilation.directives.add(r);
            else if (Di(r))
                o.compilation.pipes.add(r);
            else
                throw new _(980, "The standalone imported type is neither a component nor a directive nor a pipe");
        else {
            o.compilation.isPoisoned = !0;
            break;
        } if (!o.compilation.isPoisoned)
        for (let r of Cn(n.declarations)) {
            if (zt(r) || vo(r)) {
                o.compilation.isPoisoned = !0;
                break;
            }
            Di(r) ? o.compilation.pipes.add(r) : o.compilation.directives.add(r);
        } for (let r of Cn(n.exports))
        if (zt(r)) {
            let i = this.getNgModuleScope(r);
            Nt(i.exported.directives, o.exported.directives), Nt(i.exported.pipes, o.exported.pipes), Nt(i.exported.directives, o.compilation.directives), Nt(i.exported.pipes, o.compilation.pipes);
        }
        else
            Di(r) ? o.exported.pipes.add(r) : o.exported.directives.add(r); return o; }
    getStandaloneComponentScope(t, n) { if (this.standaloneComponentsScopeCache.has(t))
        return this.standaloneComponentsScopeCache.get(t); let o = this.computeStandaloneComponentScope(t, n); return this.standaloneComponentsScopeCache.set(t, o), o; }
    computeStandaloneComponentScope(t, n) { let o = { compilation: { directives: new Set([t]), pipes: new Set, ngModules: new Set } }; for (let r of Pe(n ?? [])) {
        let i = z(r);
        try {
            hw(i, t);
        }
        catch {
            return o.compilation.isPoisoned = !0, o;
        }
        if (zt(i)) {
            o.compilation.ngModules.add(i);
            let s = this.getNgModuleScope(i);
            if (s.exported.isPoisoned)
                return o.compilation.isPoisoned = !0, o;
            Nt(s.exported.directives, o.compilation.directives), Nt(s.exported.pipes, o.compilation.pipes);
        }
        else if (Di(i))
            o.compilation.pipes.add(i);
        else if (Up(i) || Ho(i))
            o.compilation.directives.add(i);
        else
            return o.compilation.isPoisoned = !0, o;
    } return o; }
    isOrphanComponent(t) { let n = G(t); return !n || n.standalone ? !1 : (this.resolveNgModulesDecls(), !this.ownerNgModule.has(t)); }
};
function Nt(e, t) { for (let n of e)
    t.add(n); }
var Ln = new Dl, Ri = {}, Sn = class {
    injector;
    parentInjector;
    constructor(t, n) { this.injector = t, this.parentInjector = n; }
    get(t, n, o) { let r = this.injector.get(t, Ri, o); return r !== Ri || n === Ri ? r : this.parentInjector.get(t, n, o); }
};
function Xi(e, t, n) { let o = n ? e.styles : null, r = n ? e.classes : null, i = 0; if (t !== null)
    for (let s = 0; s < t.length; s++) {
        let a = t[s];
        if (typeof a == "number")
            i = a;
        else if (i == 1)
            r = $r(r, a);
        else if (i == 2) {
            let c = a, l = t[++s];
            o = $r(o, c + ": " + l + ";");
        }
    } n ? e.styles = o : e.stylesWithoutHost = o, n ? e.classes = r : e.classesWithoutHost = r; }
function co(e, t = 0) { let n = h(); if (n === null)
    return Le(e, t); let o = M(); return eh(o, n, z(e), t); }
function by() { let e = "invalid"; throw new Error(e); }
function Ay(e, t, n, o, r) { let i = o === null ? null : { "": -1 }, s = r(e, n); if (s !== null) {
    let a = s, c = null, l = null;
    for (let u of s)
        if (u.resolveHostDirectives !== null) {
            [a, c, l] = u.resolveHostDirectives(s);
            break;
        }
    vw(e, t, n, a, i, c, l);
} i !== null && o !== null && mw(n, o, i); }
function mw(e, t, n) { let o = e.localNames = []; for (let r = 0; r < t.length; r += 2) {
    let i = n[t[r + 1]];
    if (i == null)
        throw new _(-301, !1);
    o.push(t[r], i);
} }
function yw(e, t, n) { t.componentOffset = n, (e.components ??= []).push(t.index); }
function vw(e, t, n, o, r, i, s) { let a = o.length, c = null; for (let f = 0; f < a; f++) {
    let p = o[f];
    c === null && be(p) && (c = p, yw(e, n, f)), Yc(Bi(n, t), e, p.type);
} Mw(n, e.data.length, a), c?.viewProvidersResolver && c.viewProvidersResolver(c); for (let f = 0; f < a; f++) {
    let p = o[f];
    p.providersResolver && p.providersResolver(p);
} let l = !1, u = !1, d = Dr(e, t, a, null); a > 0 && (n.directiveToIndex = new Map); for (let f = 0; f < a; f++) {
    let p = o[f];
    if (n.mergedAttrs = xn(n.mergedAttrs, p.hostAttrs), Ew(e, n, t, d, p), Tw(d, p, r), s !== null && s.has(p)) {
        let [m, v] = s.get(p);
        n.directiveToIndex.set(p.type, [d, m + n.directiveStart, v + n.directiveStart]);
    }
    else
        (i === null || !i.has(p)) && n.directiveToIndex.set(p.type, d);
    p.contentQueries !== null && (n.flags |= 4), (p.hostBindings !== null || p.hostAttrs !== null || p.hostVars !== 0) && (n.flags |= 64);
    let g = p.type.prototype;
    !l && (g.ngOnChanges || g.ngOnInit || g.ngDoCheck) && ((e.preOrderHooks ??= []).push(n.index), l = !0), !u && (g.ngOnChanges || g.ngDoCheck) && ((e.preOrderCheckHooks ??= []).push(n.index), u = !0), d++;
} Iw(e, n, i); }
function Iw(e, t, n) { for (let o = t.directiveStart; o < t.directiveEnd; o++) {
    let r = e.data[o];
    if (n === null || !n.has(r))
        zp(0, t, r, o), zp(1, t, r, o), Wp(t, o, !1);
    else {
        let i = n.get(r);
        Gp(0, t, i, o), Gp(1, t, i, o), Wp(t, o, !0);
    }
} }
function zp(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s;
        e === 0 ? s = t.inputs ??= {} : s = t.outputs ??= {}, s[i] ??= [], s[i].push(o), Ry(t, i);
    } }
function Gp(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s = r[i], a;
        e === 0 ? a = t.hostDirectiveInputs ??= {} : a = t.hostDirectiveOutputs ??= {}, a[s] ??= [], a[s].push(o, i), Ry(t, s);
    } }
function Ry(e, t) { t === "class" ? e.flags |= 8 : t === "style" && (e.flags |= 16); }
function Wp(e, t, n) { let { attrs: o, inputs: r, hostDirectiveInputs: i } = e; if (o === null || !n && r === null || n && i === null || Cu(e)) {
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
function Ew(e, t, n, o, r) { e.data[o] = r; let i = r.factory || (r.factory = Zr(r.type, !0)), s = new Qt(i, be(r), co, null); e.blueprint[o] = s, n[o] = s, Dw(e, t, o, Dr(e, n, r.hostVars, L), r); }
function Dw(e, t, n, o, r) { let i = r.hostBindings; if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    Cw(s) != a && s.push(a), s.push(n, o, i);
} }
function Cw(e) { let t = e.length; for (; t > 0;) {
    let n = e[--t];
    if (typeof n == "number" && n < 0)
        return n;
} return 0; }
function Tw(e, t, n) { if (n) {
    if (t.exportAs)
        for (let o = 0; o < t.exportAs.length; o++)
            n[t.exportAs[o]] = e;
    be(t) && (n[""] = e);
} }
function Mw(e, t, n) { e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t; }
function zu(e, t, n, o, r, i, s, a) { let c = t[y], l = c.consts, u = de(l, s), d = cn(c, e, n, o, u); return i && Ay(c, t, d, de(l, a), r), d.mergedAttrs = xn(d.mergedAttrs, d.attrs), d.attrs !== null && Xi(d, d.attrs, !1), d.mergedAttrs !== null && Xi(d, d.mergedAttrs, !0), c.queries !== null && c.queries.elementStart(c, d), d; }
function Gu(e, t) { Gg(e, t), za(t) && e.queries.elementEnd(t); }
function ky(e, t, n, o, r, i) { let s = t.consts, a = de(s, r), c = cn(t, e, n, o, a); if (c.mergedAttrs = xn(c.mergedAttrs, c.attrs), i != null) {
    let l = de(s, i);
    c.localNames = [];
    for (let u = 0; u < l.length; u += 2)
        c.localNames.push(l[u], -1);
} return c.attrs !== null && Xi(c, c.attrs, !1), c.mergedAttrs !== null && Xi(c, c.mergedAttrs, !0), t.queries !== null && t.queries.elementStart(t, c), c; }
function nr(e) { return Xs(e) ? Array.isArray(e) || !(e instanceof Map) && Symbol.iterator in e : !1; }
function Nw(e, t, n) { let o = e[Symbol.iterator](), r = t[Symbol.iterator](); for (;;) {
    let i = o.next(), s = r.next();
    if (i.done && s.done)
        return !0;
    if (i.done || s.done || !n(i.value, s.value))
        return !1;
} }
function xy(e, t) { if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
        t(e[n]);
else {
    let n = e[Symbol.iterator](), o;
    for (; !(o = n.next()).done;)
        t(o.value);
} }
function Xs(e) { return e !== null && (typeof e == "function" || typeof e == "object"); }
function Oy(e, t) { let n = nr(e), o = nr(t); return n && o ? Nw(e, t, Oy) : !n && (e && (typeof e == "object" || typeof e == "function")) && !o && (t && (typeof t == "object" || typeof t == "function")) ? !0 : Object.is(e, t); }
function Qe(e, t, n) { return e[t] = n; }
function _r(e, t) { return e[t]; }
function V(e, t, n) { if (n === L)
    return !1; let o = e[t]; return Object.is(o, n) ? !1 : (e[t] = n, !0); }
function Xt(e, t, n, o) { let r = V(e, t, n); return V(e, t + 1, o) || r; }
function ea(e, t, n, o, r) { let i = Xt(e, t, n, o); return V(e, t + 2, r) || i; }
function ke(e, t, n, o, r, i) { let s = Xt(e, t, n, o); return Xt(e, t + 2, r, i) || s; }
var Wu = Symbol("CONTROL");
function rt(e, t, n) { return function o(r) { let i = he(e) ? fe(e.index, t) : t; Tr(i, 5); let s = t[F], a = qp(t, s, n, r), c = o.__ngNextListenerFn__; for (; c;)
    a = qp(t, s, c, r) && a, c = c.__ngNextListenerFn__; return a; }; }
function qp(e, t, n, o) { let r = vn(null); try {
    return k(b.OutputStart, t, n), n(o) !== !1;
}
catch (i) {
    return Fu(e, i), !1;
}
finally {
    k(b.OutputEnd, t, n), vn(r);
} }
function es(e, t, n, o, r, i, s, a) { let c = gn(e), l = !1, u = null; if (!o && c && (u = ww(t, n, i, e.index)), u !== null) {
    let d = u.__ngLastListenerFn__ || u;
    d.__ngNextListenerFn__ = s, u.__ngLastListenerFn__ = s, l = !0;
}
else {
    let d = W(e, n), f = o ? o(d) : d;
    fM(n, f, i, a);
    let p = r.listen(f, i, a);
    if (!_w(i)) {
        let g = o ? m => o(O(m[e.index])) : e.index;
        Ly(g, t, n, i, a, p, !1);
    }
} return l; }
function _w(e) { return e.startsWith("animation") || e.startsWith("transition"); }
function ww(e, t, n, o) { let r = e.cleanup; if (r != null)
    for (let i = 0; i < r.length - 1; i += 2) {
        let s = r[i];
        if (s === n && r[i + 1] === o) {
            let a = t[Ot], c = r[i + 2];
            return a && a.length > c ? a[c] : null;
        }
        typeof s == "string" && (i += 2);
    } return null; }
function Ly(e, t, n, o, r, i, s) { let a = t.firstCreatePass ? qf(t) : null, c = Wf(n), l = c.length; c.push(r, i), a && a.push(o, e, l, (l + 1) * (s ? -1 : 1)); }
function Sw(e, t, n, o, r) { let i = rt(e, t, n), s = bw(e, t, o, r, i); }
function bw(e, t, n, o, r) { let i = null, s = null, a = null, c = !1, l = e.directiveToIndex.get(n.type); if (typeof l == "number" ? i = l : [i, s, a] = l, s !== null && a !== null && e.hostDirectiveOutputs?.hasOwnProperty(o)) {
    let u = e.hostDirectiveOutputs[o];
    for (let d = 0; d < u.length; d += 2) {
        let f = u[d];
        if (f >= s && f <= a)
            c = !0, Pn(e, t, f, u[d + 1], o, r);
        else if (f > a)
            break;
    }
} return n.outputs.hasOwnProperty(o) && (c = !0, Pn(e, t, i, o, o, r)), c; }
function Pn(e, t, n, o, r, i) { let s = t[n], a = t[y], l = a.data[n].outputs[o], d = s[l].subscribe(i); Ly(e.index, a, t, r, i, d, !0); }
var it = Symbol("BINDING"), Aw = { kind: "input", requiredVars: 1 }, Rw = { kind: "field", requiredVars: 2 }, kw = { kind: "output", requiredVars: 0 };
function Qp(e, t, n) { let o = h(), r = se(); if (V(o, r, n)) {
    let i = o[y], s = me(), a = fe(s.index, o);
    Tr(a, 1);
    let c = i.directiveRegistry[e], l = e_(s, i, o, c, t, n);
} }
function Zp(e, t) { return h()[t.directiveStart + e.targetIdx][Wu]; }
function Py(e, t) { if (e === "formField") {
    let o = { [it]: Rw, create: () => { Zp(o, M())?.create(); }, update: () => { Qp(o.targetIdx, e, t()), Zp(o, me())?.update(); } };
    return o;
} let n = { [it]: Aw, update: () => Qp(n.targetIdx, e, t()) }; return n; }
function Fy(e, t) { let n = { [it]: kw, create: () => { let o = h(), r = M(), s = o[y].directiveRegistry[n.targetIdx]; Sw(r, o, t, s, e); } }; return n; }
function xw(e, t) { let n = Py(e, t), o = Fy(e + "Change", i => t.set(i)); return { [it]: { kind: "twoWay", requiredVars: n[it].requiredVars + o[it].requiredVars }, set targetIdx(i) { n.targetIdx = i, o.targetIdx = i; }, create: o.create, update: n.update }; }
var ts = class extends Nr {
    ngModule;
    constructor(t) { super(), this.ngModule = t; }
    resolveComponentFactory(t) { let n = G(t); return new bt(n, this.ngModule); }
};
function Ow(e) { return Object.keys(e).map(t => { let [n, o, r] = e[t], i = { propName: n, templateName: t, isSignal: (o & Rs.SignalBased) !== 0 }; return r && (i.transform = r), i; }); }
function Lw(e) { return Object.keys(e).map(t => ({ propName: e[t], templateName: t })); }
function Pw(e, t, n) { let o = t instanceof It ? t : t?.injector; return o && e.getStandaloneInjector !== null && (o = e.getStandaloneInjector(o) || o), o ? new Sn(n, o) : n; }
function Fw(e) { let t = e.get(tr, null); if (t === null)
    throw new _(407, !1); let n = e.get(Sy, null), o = e.get($t, null); return { rendererFactory: t, sanitizer: n, changeDetectionScheduler: o, ngReflect: !1 }; }
function Hw(e, t) { let n = Hy(e); return bs(t, n, n === "svg" ? jf : n === "math" ? Vf : null); }
function Hy(e) { return (e.selectors[0][0] || "div").toLowerCase(); }
var bt = class extends Js {
    componentDef;
    ngModule;
    selector;
    componentType;
    ngContentSelectors;
    isBoundToModule;
    cachedInputs = null;
    cachedOutputs = null;
    get inputs() { return this.cachedInputs ??= Ow(this.componentDef.inputs), this.cachedInputs; }
    get outputs() { return this.cachedOutputs ??= Lw(this.componentDef.outputs), this.cachedOutputs; }
    constructor(t, n) { super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = NN(t.selectors), this.ngContentSelectors = t.ngContentSelectors ?? [], this.isBoundToModule = !!n; }
    create(t, n, o, r, i, s) { k(b.DynamicComponentStart); let a = x(null); try {
        let c = this.componentDef, l = jw(o, c, s, i), u = Pw(c, r || this.ngModule, t), d = Fw(u), f = d.rendererFactory.createRenderer(null, c), p = o ? GN(f, o, c.encapsulation, u) : Hw(c, f), g = s?.some(Yp) || i?.some(E => typeof E != "function" && E.bindings.some(Yp)), m = As(null, l, null, 512 | Mu(c), null, null, d, f, u, null, Fh(p, u, !0));
        m[I] = p, li(m);
        let v = null;
        try {
            let E = zu(I, m, 2, "#host", () => l.directiveRegistry, !0, 0);
            lm(f, p, E), Ae(p, m), Hs(l, m, E), gu(l, E, m), Gu(l, E), n !== void 0 && Bw(E, this.ngContentSelectors, n), v = fe(E.index, m), m[F] = v[F], zs(l, m, null);
        }
        catch (E) {
            throw v !== null && Jc(v), Jc(m), E;
        }
        finally {
            k(b.DynamicComponentEnd), ui();
        }
        return new ns(this.componentType, m, !!g);
    }
    finally {
        x(a);
    } }
};
function jw(e, t, n, o) { let r = e ? ["ng-version", "21.1.0"] : _N(t.selectors[0]), i = null, s = null, a = 0; if (n)
    for (let u of n)
        a += u[it].requiredVars, u.create && (u.targetIdx = 0, (i ??= []).push(u)), u.update && (u.targetIdx = 0, (s ??= []).push(u)); if (o)
    for (let u = 0; u < o.length; u++) {
        let d = o[u];
        if (typeof d != "function")
            for (let f of d.bindings) {
                a += f[it].requiredVars;
                let p = u + 1;
                f.create && (f.targetIdx = p, (i ??= []).push(f)), f.update && (f.targetIdx = p, (s ??= []).push(f));
            }
    } let c = [t]; if (o)
    for (let u of o) {
        let d = typeof u == "function" ? u : u.type, f = Ne(d);
        c.push(f);
    } return Tu(0, null, Vw(i, s), 1, a, c, null, null, null, [r], null); }
function Vw(e, t) { return !e && !t ? null : n => { if (n & 1 && e)
    for (let o of e)
        o.create(); if (n & 2 && t)
    for (let o of t)
        o.update(); }; }
function Yp(e) { let t = e[it].kind; return t === "input" || t === "twoWay"; }
var ns = class extends wy {
    _rootLView;
    _hasInputBindings;
    instance;
    hostView;
    changeDetectorRef;
    componentType;
    location;
    previousInputValues = null;
    _tNode;
    constructor(t, n, o) { super(), this._rootLView = n, this._hasInputBindings = o, this._tNode = Ct(n[y], I), this.location = qn(this._tNode, n), this.instance = fe(this._tNode.index, n)[F], this.hostView = this.changeDetectorRef = new St(n, void 0), this.componentType = t; }
    setInput(t, n) { this._hasInputBindings; let o = this._tNode; if (this.previousInputValues ??= new Map, this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n))
        return; let r = this._rootLView, i = Us(o, r[y], r, t, n); this.previousInputValues.set(t, n); let s = fe(o.index, r); Tr(s, 1); }
    get injector() { return new wt(this._tNode, this._rootLView); }
    destroy() { this.hostView.destroy(); }
    onDestroy(t) { this.hostView.onDestroy(t); }
};
function Bw(e, t, n) { let o = e.projection = []; for (let r = 0; r < t.length; r++) {
    let i = n[r];
    o.push(i != null && i.length ? Array.from(i) : null);
} }
var ta = (() => { class e {
    static __NG_ELEMENT_ID__ = $w;
} return e; })();
function $w() { let e = M(); return Vy(e, h()); }
var Uw = ta, jy = class extends Uw {
    _lContainer;
    _hostTNode;
    _hostLView;
    constructor(t, n, o) { super(), this._lContainer = t, this._hostTNode = n, this._hostLView = o; }
    get element() { return qn(this._hostTNode, this._hostLView); }
    get injector() { return new wt(this._hostTNode, this._hostLView); }
    get parentInjector() { let t = Zl(this._hostTNode, this._hostLView); if (Qg(t)) {
        let n = ji(t, this._hostLView), o = Hi(t), r = n[y].data[o + 8];
        return new wt(r, n);
    }
    else
        return new wt(null, this._hostLView); }
    clear() { for (; this.length > 0;)
        this.remove(this.length - 1); }
    get(t) { let n = Kp(this._lContainer); return n !== null && n[t] || null; }
    get length() { return this._lContainer.length - H; }
    createEmbeddedView(t, n, o) { let r, i; typeof o == "number" ? r = o : o != null && (r = o.index, i = o.injector); let s = er(this._lContainer, t.ssrId), a = t.createEmbeddedViewImpl(n || {}, i, s); return this.insertImpl(a, r, Jt(this._hostTNode, s)), a; }
    createComponent(t, n, o, r, i, s, a) { let c = t && !Lo(t), l; if (c)
        l = n;
    else {
        let v = n || {};
        l = v.index, o = v.injector, r = v.projectableNodes, i = v.environmentInjector || v.ngModuleRef, s = v.directives, a = v.bindings;
    } let u = c ? t : new bt(G(t)), d = o || this.parentInjector; if (!i && u.ngModule == null) {
        let E = (c ? d : this.parentInjector).get(It, null);
        E && (i = E);
    } let f = G(u.componentType ?? {}), p = er(this._lContainer, f?.id ?? null), g = p?.firstChild ?? null, m = u.create(d, r, g, i, s, a); return this.insertImpl(m.hostView, l, Jt(this._hostTNode, p)), m; }
    insert(t, n) { return this.insertImpl(t, n, !0); }
    insertImpl(t, n, o) { let r = t._lView; if (zf(r)) {
        let a = this.indexOf(t);
        if (a !== -1)
            this.detach(a);
        else {
            let c = r[q], l = new jy(c, c[ue], c[q]);
            l.detach(l.indexOf(t));
        }
    } let i = this._adjustIndex(n), s = this._lContainer; return so(s, r, i, o), t.attachToViewContainerRef(), Ha(Pc(s), i, t), t; }
    move(t, n) { return this.insert(t, n); }
    indexOf(t) { let n = Kp(this._lContainer); return n !== null ? n.indexOf(t) : -1; }
    remove(t) { let n = this._adjustIndex(t, -1), o = Jo(this._lContainer, n); o && (Io(Pc(this._lContainer), n), Cr(o[y], o)); }
    detach(t) { let n = this._adjustIndex(t, -1), o = Jo(this._lContainer, n); return o && Io(Pc(this._lContainer), n) != null ? new St(o) : null; }
    _adjustIndex(t, n = 0) { return t ?? this.length + n; }
};
function Kp(e) { return e[No]; }
function Pc(e) { return e[No] || (e[No] = []); }
function Vy(e, t) { let n, o = t[e.index]; return te(o) ? n = o : (n = Xm(o, t, null, e), t[e.index] = n, Nu(t, n)), By(n, t, e, o), new jy(n, e, t); }
function zw(e, t) { let n = e[C], o = n.createComment(""), r = W(t, e), i = n.parentNode(r); return Zt(n, i, o, n.nextSibling(r), !1), o; }
var By = Uy, qu = () => !1;
function $y(e, t, n) { return qu(e, t, n); }
function Uy(e, t, n, o) { if (e[Fe])
    return; let r; n.type & 8 ? r = O(o) : r = zw(t, n), e[Fe] = r; }
function Gw(e, t, n) { if (e[Fe] && e[Ce])
    return !0; let o = n[ie], r = t.index - I; if (!o || Zn(t) || _s(o, r))
    return !1; let s = nl(o, r), a = o.data[Kn]?.[r], [c, l] = cw(s, a); return e[Fe] = c, e[Ce] = l, !0; }
function Ww(e, t, n, o) { qu(e, n, t) || Uy(e, t, n, o); }
function zy() { By = Ww, qu = Gw; }
var Cl = class e {
    queryList;
    matches = null;
    constructor(t) { this.queryList = t; }
    clone() { return new e(this.queryList); }
    setDirty() { this.queryList.setDirty(); }
}, Tl = class e {
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
        Zu(t, n).matches !== null && this.queries[n].setDirty(); }
}, os = class {
    flags;
    read;
    predicate;
    constructor(t, n, o = null) { this.flags = n, this.read = o, typeof t == "string" ? this.predicate = Kw(t) : this.predicate = t; }
}, Ml = class e {
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
}, Nl = class e {
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
            this.matchTNodeWithReadOption(t, n, qw(n, i)), this.matchTNodeWithReadOption(t, n, Si(n, t, i, !1, !1));
        }
    else
        o === Xo ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, Si(n, t, o, !1, !1)); }
    matchTNodeWithReadOption(t, n, o) { if (o !== null) {
        let r = this.metadata.read;
        if (r !== null)
            if (r === ur || r === ta || r === Xo && n.type & 4)
                this.addMatch(n.index, -2);
            else {
                let i = Si(n, t, r, !1, !1);
                i !== null && this.addMatch(n.index, i);
            }
        else
            this.addMatch(n.index, o);
    } }
    addMatch(t, n) { this.matches === null ? this.matches = [t, n] : this.matches.push(t, n); }
};
function qw(e, t) { let n = e.localNames; if (n !== null) {
    for (let o = 0; o < n.length; o += 2)
        if (n[o] === t)
            return n[o + 1];
} return null; }
function Qw(e, t) { return e.type & 11 ? qn(e, t) : e.type & 4 ? Ws(e, t) : null; }
function Zw(e, t, n, o) { return n === -1 ? Qw(t, e) : n === -2 ? Yw(e, t, o) : Qo(e, e[y], n, t); }
function Yw(e, t, n) { if (n === ur)
    return qn(t, e); if (n === Xo)
    return Ws(t, e); if (n === ta)
    return Vy(t, e); }
function Gy(e, t, n, o) { let r = t[$e].queries[o]; if (r.matches === null) {
    let i = e.data, s = n.matches, a = [];
    for (let c = 0; s !== null && c < s.length; c += 2) {
        let l = s[c];
        if (l < 0)
            a.push(null);
        else {
            let u = i[l];
            a.push(Zw(t, u, s[c + 1], n.metadata.read));
        }
    }
    r.matches = a;
} return r.matches; }
function _l(e, t, n, o) { let r = e.queries.getByIndex(n), i = r.matches; if (i !== null) {
    let s = Gy(e, t, r, n);
    for (let a = 0; a < i.length; a += 2) {
        let c = i[a];
        if (c > 0)
            o.push(s[a / 2]);
        else {
            let l = i[a + 1], u = t[-c];
            for (let d = H; d < u.length; d++) {
                let f = u[d];
                f[et] === f[q] && _l(f[y], f, l, o);
            }
            if (u[Pt] !== null) {
                let d = u[Pt];
                for (let f = 0; f < d.length; f++) {
                    let p = d[f];
                    _l(p[y], p, l, o);
                }
            }
        }
    }
} return o; }
function Qu(e, t) { return e[$e].queries[t].queryList; }
function Wy(e, t, n) { let o = new $i((n & 4) === 4); return Qa(e, t, o, o.destroy), (t[$e] ??= new Tl).queries.push(new Cl(o)) - 1; }
function qy(e, t, n) { let o = T(); return o.firstCreatePass && (Zy(o, new os(e, t, n), -1), (t & 2) === 2 && (o.staticViewQueries = !0)), Wy(o, h(), t); }
function Qy(e, t, n, o) { let r = T(); if (r.firstCreatePass) {
    let i = M();
    Zy(r, new os(t, n, o), i.index), Jw(r, e), (n & 2) === 2 && (r.staticContentQueries = !0);
} return Wy(r, h(), n); }
function Kw(e) { return e.split(",").map(t => t.trim()); }
function Zy(e, t, n) { e.queries === null && (e.queries = new Ml), e.queries.track(new Nl(t, n)); }
function Jw(e, t) { let n = e.contentQueries || (e.contentQueries = []), o = n.length ? n[n.length - 1] : -1; t !== o && n.push(e.queries.length - 1, t); }
function Zu(e, t) { return e.queries.getByIndex(t); }
function Yy(e, t) { let n = e[y], o = Zu(n, t); return o.crossesNgTemplate ? _l(n, e, t, []) : Gy(n, e, o, t); }
function Yu(e, t, n) { let o, r = Nf(() => { o._dirtyCounter(); let i = Xw(o, e); if (t && i === void 0)
    throw new _(-951, !1); return i; }); return o = r[Ke], o._dirtyCounter = Ec(0), o._flatValue = void 0, r; }
function Ku(e) { return Yu(!0, !1, e); }
function Ju(e) { return Yu(!0, !0, e); }
function Xu(e) { return Yu(!1, !1, e); }
function Ky(e, t) { let n = e[Ke]; n._lView = h(), n._queryIndex = t, n._queryList = Qu(n._lView, t), n._queryList.onDirty(() => n._dirtyCounter.update(o => o + 1)); }
function Xw(e, t) { let n = e._lView, o = e._queryIndex; if (n === void 0 || o === void 0 || n[S] & 4)
    return t ? void 0 : P; let r = Qu(n, o), i = Yy(n, o); return r.reset(i, sh), t ? r.first : r._changesDetected || e._flatValue === void 0 ? e._flatValue = r.toArray() : e._flatValue; }
var en = new Map, or = new Set;
function Jy(e) { return mt(this, null, function* () { let t = en; en = new Map; let n = new Map; function o(i) { let s = n.get(i); if (s)
    return s; let a = e(i).then(c => rS(i, c)); return n.set(i, a), a; } let r = Array.from(t).map(a => mt(null, [a], function* ([i, s]) { if (s.styleUrl && s.styleUrls?.length)
    throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple"); let c = []; s.templateUrl && c.push(o(s.templateUrl).then(f => { s.template = f; })); let l = typeof s.styles == "string" ? [s.styles] : s.styles ?? []; s.styles = l; let { styleUrl: u, styleUrls: d } = s; if (u && (d = [u], s.styleUrl = void 0), d?.length) {
    let f = Promise.all(d.map(p => o(p))).then(p => { l.push(...p), s.styleUrls = void 0; });
    c.push(f);
} yield Promise.all(c), or.delete(i); })); yield Promise.all(r); }); }
function eS(e, t) { Xy(t) && (en.set(e, t), or.add(e)); }
function tS(e) { return or.has(e); }
function Xy(e) { return !!(e.templateUrl && !e.hasOwnProperty("template") || e.styleUrls?.length || e.styleUrl); }
function nS() { let e = en; return en = new Map, e; }
function oS(e) { or.clear(); for (let t of e.keys())
    or.add(t); en = e; }
function ev() { return en.size === 0; }
function rS(e, t) { return mt(this, null, function* () { if (typeof t == "string")
    return t; if (t.status !== void 0 && t.status !== 200)
    throw new _(918, !1); return t.text(); }); }
var wl = new Map, tv = !0;
function iS(e, t, n) { if (t && t !== n && tv)
    throw new _(921, !1); }
function ed(e, t) { let n = wl.get(t) || null; iS(t, n, e), wl.set(t, e); }
function td(e) { return wl.get(e); }
function sS(e) { tv = !e; }
var Fn = class {
}, nv = class {
};
function ov(e, t) { return new Hn(e, t ?? null, []); }
var aS = ov, Hn = class extends Fn {
    ngModuleType;
    _parent;
    _bootstrapComponents = [];
    _r3Injector;
    instance;
    destroyCbs = [];
    componentFactoryResolver = new ts(this);
    constructor(t, n, o, r = !0) { super(), this.ngModuleType = t, this._parent = n; let i = dn(t); this._bootstrapComponents = Cn(i.bootstrap), this._r3Injector = np(t, n, [{ provide: Fn, useValue: this }, { provide: Nr, useValue: this.componentFactoryResolver }, ...o], Br(t), new Set(["environment"])), r && this.resolveInjectorInitializers(); }
    resolveInjectorInitializers() { this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(this.ngModuleType); }
    get injector() { return this._r3Injector; }
    destroy() { let t = this._r3Injector; !t.destroyed && t.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null; }
    onDestroy(t) { this.destroyCbs.push(t); }
}, jn = class extends nv {
    moduleType;
    constructor(t) { super(), this.moduleType = t; }
    create(t) { return new Hn(this.moduleType, t, []); }
};
function rv(e, t, n) { return new Hn(e, t, n, !1); }
var rr = class extends Fn {
    injector;
    componentFactoryResolver = new ts(this);
    instance = null;
    constructor(t) { super(); let n = new Ba([...t.providers, { provide: Fn, useValue: this }, { provide: Nr, useValue: this.componentFactoryResolver }], t.parent || Xr(), t.debugName, new Set(["environment"])); this.injector = n, t.runEnvironmentInitializers && n.resolveInjectorInitializers(); }
    destroy() { this.injector.destroy(); }
    onDestroy(t) { this.injector.onDestroy(t); }
};
function nd(e, t, n = null) { return new rr({ providers: e, parent: t, debugName: n, runEnvironmentInitializers: !0 }).injector; }
var cS = (() => { class e {
    _injector;
    cachedInjectors = new Map;
    constructor(n) { this._injector = n; }
    getOrCreateStandaloneInjector(n) { if (!n.standalone)
        return null; if (!this.cachedInjectors.has(n)) {
        let o = Va(!1, n.type), r = o.length > 0 ? nd([o], this._injector, "") : null;
        this.cachedInjectors.set(n, r);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = B({ token: e, providedIn: "environment", factory: () => new e(Le(It)) });
} return e; })();
function iv(e) { return qe(() => { let t = lv(e), n = Ye(Y({}, t), { decls: e.decls, vars: e.vars, template: e.template, consts: e.consts || null, ngContentSelectors: e.ngContentSelectors, onPush: e.changeDetection === hs.OnPush, directiveDefs: null, pipeDefs: null, dependencies: t.standalone && e.dependencies || null, getStandaloneInjector: t.standalone ? r => r.get(cS).getOrCreateStandaloneInjector(n) : null, getExternalStyles: null, signals: e.signals ?? !1, data: e.data || {}, encapsulation: e.encapsulation || Re.Emulated, styles: e.styles || P, _: null, schemas: e.schemas || null, tView: null, id: "" }); t.standalone && Q("NgStandalone"), uv(n); let o = e.dependencies; return n.directiveDefs = rs(o, sv), n.pipeDefs = rs(o, Be), n.id = fS(n), n; }); }
function sv(e) { return G(e) || Ne(e); }
function od(e) { return qe(() => ({ type: e.type, bootstrap: e.bootstrap || P, declarations: e.declarations || P, imports: e.imports || P, exports: e.exports || P, transitiveCompileScopes: null, schemas: e.schemas || null, id: e.id || null })); }
function lS(e, t) { if (e == null)
    return _e; let n = {}; for (let o in e)
    if (e.hasOwnProperty(o)) {
        let r = e[o], i, s, a, c;
        Array.isArray(r) ? (a = r[0], i = r[1], s = r[2] ?? i, c = r[3] || null) : (i = r, s = r, a = Rs.None, c = null), n[i] = [o, a, c], t[i] = s;
    } return n; }
function uS(e) { if (e == null)
    return _e; let t = {}; for (let n in e)
    e.hasOwnProperty(n) && (t[e[n]] = n); return t; }
function av(e) { return qe(() => { let t = lv(e); return uv(t), t; }); }
function cv(e) { return { type: e.type, name: e.name, factory: null, pure: e.pure !== !1, standalone: e.standalone ?? !0, onDestroy: e.type.prototype.ngOnDestroy || null }; }
function lv(e) { let t = {}; return { type: e.type, providersResolver: null, viewProvidersResolver: null, factory: null, hostBindings: e.hostBindings || null, hostVars: e.hostVars || 0, hostAttrs: e.hostAttrs || null, contentQueries: e.contentQueries || null, declaredInputs: t, inputConfig: e.inputs || _e, exportAs: e.exportAs || null, standalone: e.standalone ?? !0, signals: e.signals === !0, selectors: e.selectors || P, viewQuery: e.viewQuery || null, features: e.features || null, setInput: null, resolveHostDirectives: null, hostDirectives: null, inputs: lS(e.inputs, t), outputs: uS(e.outputs), debugInfo: null }; }
function uv(e) { e.features?.forEach(t => t(e)); }
function rs(e, t) { return e ? () => { let n = typeof e == "function" ? e() : e, o = []; for (let r of n) {
    let i = t(r);
    i !== null && o.push(i);
} return o; } : null; }
var dS = new Map;
function fS(e) { let t = 0, n = typeof e.consts == "function" ? "" : e.consts, o = [e.selectors, e.ngContentSelectors, e.hostVars, e.hostAttrs, n, e.vars, e.decls, e.encapsulation, e.standalone, e.signals, e.exportAs, JSON.stringify(e.inputs), JSON.stringify(e.outputs), Object.getOwnPropertyNames(e.type.prototype), !!e.contentQueries, !!e.viewQuery]; for (let i of o.join("|"))
    t = Math.imul(31, t) + i.charCodeAt(0) << 0; return t += 2147483648, "c" + t; }
function dv(e) { let t = n => { let o = Array.isArray(e); n.hostDirectives === null ? (n.resolveHostDirectives = pS, n.hostDirectives = o ? e.map(Sl) : [e]) : o ? n.hostDirectives.unshift(...e.map(Sl)) : n.hostDirectives.unshift(e); }; return t.ngInherit = !0, t; }
function pS(e) { let t = [], n = !1, o = null, r = null; for (let i = 0; i < e.length; i++) {
    let s = e[i];
    if (s.hostDirectives !== null) {
        let a = t.length;
        o ??= new Map, r ??= new Map, fv(s, t, o), r.set(s, [a, t.length - 1]);
    }
    i === 0 && be(s) && (n = !0, t.push(s));
} for (let i = n ? 1 : 0; i < e.length; i++)
    t.push(e[i]); return [t, o, r]; }
function fv(e, t, n) { if (e.hostDirectives !== null)
    for (let o of e.hostDirectives)
        if (typeof o == "function") {
            let r = o();
            for (let i of r)
                Jp(Sl(i), t, n);
        }
        else
            Jp(o, t, n); }
function Jp(e, t, n) { let o = Ne(e.directive); gS(o.declaredInputs, e.inputs), fv(o, t, n), n.set(o, e), t.push(o); }
function Sl(e) { return typeof e == "function" ? { directive: z(e), inputs: _e, outputs: _e } : { directive: z(e.directive), inputs: Xp(e.inputs), outputs: Xp(e.outputs) }; }
function Xp(e) { if (e === void 0 || e.length === 0)
    return _e; let t = {}; for (let n = 0; n < e.length; n += 2)
    t[e[n]] = e[n + 1]; return t; }
function gS(e, t) { for (let n in t)
    if (t.hasOwnProperty(n)) {
        let o = t[n], r = e[n];
        e[o] = r;
    } }
function hS(e) { return Object.getPrototypeOf(e.prototype).constructor; }
function rd(e) { let t = hS(e.type), n = !0, o = [e]; for (; t;) {
    let r;
    if (be(e))
        r = t.\u0275cmp || t.\u0275dir;
    else {
        if (t.\u0275cmp)
            throw new _(903, !1);
        r = t.\u0275dir;
    }
    if (r) {
        if (n) {
            o.push(r);
            let s = e;
            s.inputs = Fc(e.inputs), s.declaredInputs = Fc(e.declaredInputs), s.outputs = Fc(e.outputs);
            let a = r.hostBindings;
            a && ES(e, a);
            let c = r.viewQuery, l = r.contentQueries;
            if (c && vS(e, c), l && IS(e, l), mS(e, r), Sf(e.outputs, r.outputs), be(r) && r.data.animation) {
                let u = e.data;
                u.animation = (u.animation || []).concat(r.data.animation);
            }
        }
        let i = r.features;
        if (i)
            for (let s = 0; s < i.length; s++) {
                let a = i[s];
                a && a.ngInherit && a(e), a === rd && (n = !1);
            }
    }
    t = Object.getPrototypeOf(t);
} yS(o); }
function mS(e, t) { for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n))
        continue;
    let o = t.inputs[n];
    o !== void 0 && (e.inputs[n] = o, e.declaredInputs[n] = t.declaredInputs[n]);
} }
function yS(e) { let t = 0, n = null; for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    r.hostVars = t += r.hostVars, r.hostAttrs = xn(r.hostAttrs, n = xn(n, r.hostAttrs));
} }
function Fc(e) { return e === _e ? {} : e === P ? [] : e; }
function vS(e, t) { let n = e.viewQuery; n ? e.viewQuery = (o, r) => { t(o, r), n(o, r); } : e.viewQuery = t; }
function IS(e, t) { let n = e.contentQueries; n ? e.contentQueries = (o, r, i) => { t(o, r, i), n(o, r, i); } : e.contentQueries = t; }
function ES(e, t) { let n = e.hostBindings; n ? e.hostBindings = (o, r) => { t(o, r), n(o, r); } : e.hostBindings = t; }
function pv(e, t, n, o, r, i, s, a) { if (n.firstCreatePass) {
    e.mergedAttrs = xn(e.mergedAttrs, e.attrs);
    let u = e.tView = Tu(2, e, r, i, s, n.directiveRegistry, n.pipeRegistry, null, n.schemas, n.consts, null);
    n.queries !== null && (n.queries.template(n, e), u.queries = n.queries.embeddedTView(e));
} a && (e.flags |= a), ze(e, !1); let c = gv(n, t, e, o); Ro() && xu(n, t, c, e), Ae(c, t); let l = Xm(c, t, c, e); t[o + I] = l, Nu(t, l), $y(l, e, t); }
function DS(e, t, n, o, r, i, s, a, c, l, u) { let d = n + I, f; return t.firstCreatePass ? (f = cn(t, d, 4, s || null, a || null), si() && Ay(t, e, f, de(t.consts, l), Pu), Gg(t, f)) : f = t.data[d], pv(f, e, t, n, o, r, i, c), gn(f) && Hs(t, e, f), l != null && ro(e, f, u), f; }
function tn(e, t, n, o, r, i, s, a, c, l, u) { let d = n + I, f; if (t.firstCreatePass) {
    if (f = cn(t, d, 4, s || null, a || null), l != null) {
        let p = de(t.consts, l);
        f.localNames = [];
        for (let g = 0; g < p.length; g += 2)
            f.localNames.push(p[g], -1);
    }
}
else
    f = t.data[d]; return pv(f, e, t, n, o, r, i, c), l != null && ro(e, f, u), f; }
function id(e, t, n, o, r, i, s, a) { let c = h(), l = T(), u = de(l.consts, i); return DS(c, l, e, t, n, o, r, u, void 0, s, a), id; }
function sd(e, t, n, o, r, i, s, a) { let c = h(), l = T(), u = de(l.consts, i); return tn(c, l, e, t, n, o, r, u, void 0, s, a), sd; }
var gv = hv;
function hv(e, t, n, o) { return je(!0), t[C].createComment(""); }
function CS(e, t, n, o) { let r = !ws(t, n); je(r); let i = t[ie]?.data[vs]?.[o] ?? null; if (i !== null && n.tView !== null && n.tView.ssrId === null && (n.tView.ssrId = i), r)
    return hv(e, t); let s = t[ie], a = Mr(s, e, t, n); Ns(s, o, a); let c = fu(s, o); return Qs(c, a); }
function mv() { gv = CS; }
var ne = (function (e) { return e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.IN_PROGRESS = 1] = "IN_PROGRESS", e[e.COMPLETE = 2] = "COMPLETE", e[e.FAILED = 3] = "FAILED", e; })(ne || {}), eg = 0, TS = 1, U = (function (e) { return e[e.Placeholder = 0] = "Placeholder", e[e.Loading = 1] = "Loading", e[e.Complete = 2] = "Complete", e[e.Error = 3] = "Error", e; })(U || {}), ir = (function (e) { return e[e.Initial = -1] = "Initial", e; })(ir || {}), bn = 0, pt = 1, Po = 2, Ci = 3, MS = 4, NS = 5, na = 6, _S = 7, An = 8, wS = 9, ad = (function (e) { return e[e.Manual = 0] = "Manual", e[e.Playthrough = 1] = "Playthrough", e; })(ad || {});
function wr(e, t, n) { let o = vv(e); t[o] === null && (t[o] = []), t[o].push(n); }
function ki(e, t) { let n = vv(e), o = t[n]; if (o !== null) {
    for (let r of o)
        r();
    t[n] = null;
} }
function yv(e) { ki(1, e), ki(0, e), ki(2, e); }
function vv(e) { let t = MS; return e === 1 ? t = NS : e === 2 && (t = wS), t; }
function Sr(e) { return e + 1; }
function ye(e, t) { let n = e[y], o = Sr(t.index); return e[o]; }
function SS(e, t, n) { let o = e[y], r = Sr(t); e[r] = n; }
function ce(e, t) { let n = Sr(t.index); return e.data[n]; }
function bS(e, t, n) { let o = Sr(t); e.data[o] = n; }
function AS(e, t, n) { let o = t[y], r = ce(o, n); switch (e) {
    case U.Complete: return r.primaryTmplIndex;
    case U.Loading: return r.loadingTmplIndex;
    case U.Error: return r.errorTmplIndex;
    case U.Placeholder: return r.placeholderTmplIndex;
    default: return null;
} }
function bl(e, t) { return t === U.Placeholder ? e.placeholderBlockConfig?.[eg] ?? null : t === U.Loading ? e.loadingBlockConfig?.[eg] ?? null : null; }
function Iv(e) { return e.loadingBlockConfig?.[TS] ?? null; }
function tg(e, t) { if (!e || e.length === 0)
    return t; let n = new Set(e); for (let o of t)
    n.add(o); return e.length === n.size ? e : Array.from(n); }
function RS(e, t) { let n = t.primaryTmplIndex + I; return Ct(e, n); }
function Ev(e) { return e !== null && typeof e == "object" && typeof e.primaryTmplIndex == "number"; }
function Dv(e, t) { let n = null, o = Sr(t.index); return I < o && o < e.bindingStartIndex && (n = ce(e, t)), !!n && Ev(n); }
function cd(e, t, n, o) { let r = n.get($); return uM(e, () => r.run(t), i => r.runOutsideAngular(() => lM(i)), o); }
function kS(e, t, n) { return n == null ? e : n >= 0 ? Gf(n, e) : e[t.index][H] ?? null; }
function xS(e, t) { return Ft(I + t, e); }
function lo(e, t, n, o, r, i, s, a) { let c = e[R], l = c.get($), u; function d() { if (Dt(e)) {
    u.destroy();
    return;
} let f = ye(e, t), p = f[pt]; if (p !== ir.Initial && p !== U.Placeholder) {
    u.destroy();
    return;
} let g = kS(e, t, o); if (!g || (u.destroy(), Dt(g)))
    return; let m = xS(g, n), v = r(m, () => { l.run(() => { e !== g && qa(g, v), i(); }); }, c, a); e !== g && ii(g, v), wr(s, f, v); } u = wm({ read: d }, { injector: c }); }
function oa(e, t) { let n = t.get(PS), o = () => n.remove(e); return n.add(e), o; }
var OS = () => typeof requestIdleCallback < "u" ? requestIdleCallback : setTimeout, LS = () => typeof requestIdleCallback < "u" ? cancelIdleCallback : clearTimeout, PS = (() => { class e {
    executingCallbacks = !1;
    idleId = null;
    current = new Set;
    deferred = new Set;
    ngZone = D($);
    requestIdleCallbackFn = OS().bind(globalThis);
    cancelIdleCallbackFn = LS().bind(globalThis);
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
function ra(e) { return (t, n) => Cv(e, t, n); }
function Cv(e, t, n) { let o = n.get(Tv), r = n.get($), i = () => o.remove(t); return o.add(e, t, r), i; }
var Tv = (() => { class e {
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
        } xf(n, i, o, r); }
    removeFromQueue(n, o) { let r = -1; for (let i = 0; i < n.length; i += 2)
        if (n[i + 1] === o) {
            r = i;
            break;
        } return r > -1 && ja(n, r, 2), r; }
    scheduleTimer(n) { let o = () => { this.clearTimeout(), this.executingCallbacks = !0; let i = [...this.current], s = Date.now(); for (let c = 0; c < i.length; c += 2) {
        let l = i[c], u = i[c + 1];
        if (l <= s)
            u();
        else
            break;
    } let a = -1; for (let c = 0; c < this.current.length && this.current[c] <= s; c += 2)
        a = c + 1; if (a >= 0 && ja(this.current, 0, a + 1), this.executingCallbacks = !1, this.deferred.length > 0) {
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
} return e; })(), FS = (() => { class e {
    cachedInjectors = new Map;
    getOrCreateInjector(n, o, r, i) { if (!this.cachedInjectors.has(n)) {
        let s = r.length > 0 ? nd(r, o, i) : null;
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
} return e; })(), HS = new w("DEFER_BLOCK_DEPENDENCY_INTERCEPTOR"), Mv = new w("");
function Hc(e, t, n) { return e.get(FS).getOrCreateInjector(t, e, n, ""); }
function jS(e, t, n) { if (e instanceof Sn) {
    let r = e.injector, i = e.parentInjector, s = Hc(i, t, n);
    return new Sn(r, s);
} let o = e.get(It); if (o !== e) {
    let r = Hc(o, t, n);
    return new Sn(e, r);
} return Hc(e, t, n); }
function ot(e, t, n, o = !1) { let r = n[q], i = r[y]; if (Dt(r))
    return; let s = ye(r, t), a = s[pt], c = s[_S]; if (!(c !== null && e < c) && og(a, e) && og(s[bn] ?? -1, e)) {
    let l = ce(i, t), d = !o && (typeof ngServerMode > "u" || !ngServerMode) && (Iv(l) !== null || bl(l, U.Loading) !== null || bl(l, U.Placeholder)) ? Al : Nv;
    try {
        d(e, s, n, t, r);
    }
    catch (f) {
        Fu(r, f);
    }
} }
function VS(e, t) { let n = e[Ce]?.findIndex(r => r.data[gr] === t[pt]) ?? -1; return { dehydratedView: n > -1 ? e[Ce][n] : null, dehydratedViewIx: n }; }
function Nv(e, t, n, o, r) { k(b.DeferBlockStateStart); let i = AS(e, r, o); if (i !== null) {
    t[pt] = e;
    let s = r[y], a = i + I, c = Ct(s, a), l = 0;
    Hu(n, l);
    let u;
    if (e === U.Complete) {
        let g = ce(s, o), m = g.providers;
        m && m.length > 0 && (u = jS(r[R], g, m));
    }
    let { dehydratedView: d, dehydratedViewIx: f } = VS(n, t), p = io(r, c, null, { injector: u, dehydratedView: d });
    if (so(n, p, l, Jt(c, d)), Tr(p, 2), f > -1 && n[Ce]?.splice(f, 1), (e === U.Complete || e === U.Error) && Array.isArray(t[An])) {
        for (let g of t[An])
            g();
        t[An] = null;
    }
} k(b.DeferBlockStateEnd); }
function BS(e, t, n, o, r) { let i = Date.now(), s = r[y], a = ce(s, o); if (t[Po] === null || t[Po] <= i) {
    t[Po] = null;
    let c = Iv(a), l = t[Ci] !== null;
    if (e === U.Loading && c !== null && !l) {
        t[bn] = e;
        let u = ng(c, t, o, n, r);
        t[Ci] = u;
    }
    else {
        e > U.Loading && l && (t[Ci](), t[Ci] = null, t[bn] = null), Nv(e, t, n, o, r);
        let u = bl(a, e);
        u !== null && (t[Po] = i + u, ng(u, t, o, n, r));
    }
}
else
    t[bn] = e; }
function ng(e, t, n, o, r) { return Cv(e, () => { let s = t[bn]; t[Po] = null, t[bn] = null, s !== null && ot(s, n, o); }, r[R]); }
function og(e, t) { return e < t; }
function uo(e, t) { let n = e[t.index]; ot(U.Placeholder, t, n); }
function rg(e, t, n) { e.loadingPromise.then(() => { e.loadingState === ne.COMPLETE ? ot(U.Complete, t, n) : e.loadingState === ne.FAILED && ot(U.Error, t, n); }); }
var Al = null;
function _v(e, t, n, o) { let r = e.consts; n != null && (t.placeholderBlockConfig = de(r, n)), o != null && (t.loadingBlockConfig = de(r, o)), Al === null && (Al = BS); }
var xi = "__ngAsyncComponentMetadataFn__";
function $S(e) { return e[xi] ?? null; }
function wv(e, t, n) { let o = e; return o[xi] = () => Promise.all(t()).then(r => (n(...r), o[xi] = null, r)), o[xi]; }
function ld(e, t, n, o) { return qe(() => { let r = e; t !== null && (r.hasOwnProperty("decorators") && r.decorators !== void 0 ? r.decorators.push(...t) : r.decorators = t), n !== null && (r.ctorParameters = n), o !== null && (r.hasOwnProperty("propDecorators") && r.propDecorators !== void 0 ? r.propDecorators = Y(Y({}, r.propDecorators), o) : r.propDecorators = o); }); }
var US = (() => { class e {
    log(n) { console.log(n); }
    warn(n) { console.warn(n); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function Sv(e) { return typeof e == "function" && e[Ke] !== void 0; }
function ud(e) { return Sv(e) && typeof e.set == "function"; }
function Oi(e, t) { let n = e[y]; for (let o = I; o < n.bindingStartIndex; o++)
    if (te(e[o])) {
        let r = e[o];
        if (!(o === n.bindingStartIndex - 1)) {
            let s = n.data[o], a = ce(n, s);
            if (Ev(a)) {
                t.push({ lContainer: r, lView: e, tNode: s, tDetails: a });
                continue;
            }
        }
        ee(r[j]) && Oi(r[j], t);
        for (let s = H; s < r.length; s++)
            Oi(r[s], t);
    }
    else
        ee(e[o]) && Oi(e[o], t); }
function zS() { return Q("Chrome DevTools profiling"), () => { }; }
function GS(e) { let t = e.get(jt), n = e.get(lt), o = Ih(t, n), r = {}; for (let [i, s] of Object.entries(o))
    pM(i) || (r[i] = s); return r; }
var ig = "ng";
function WS(e, t) { qS(e, t); }
function qS(e, t) { if (typeof COMPILED > "u" || !COMPILED) {
    let n = Ee;
    n[ig] ??= {}, n[ig][e] = t;
} }
var bv = new w(""), Av = new w(""), QS = (() => { class e {
    _ngZone;
    registry;
    _isZoneStable = !0;
    _callbacks = [];
    _taskTrackingZone = null;
    _destroyRef;
    constructor(n, o, r) { this._ngZone = n, this.registry = o, Ff() && (this._destroyRef = D(ko, { optional: !0 }) ?? void 0), dd || (kv(r), r.addToWindow(o)), this._watchAngularEvents(), n.run(() => { this._taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone"); }); }
    _watchAngularEvents() { let n = this._ngZone.onUnstable.subscribe({ next: () => { this._isZoneStable = !1; } }), o = this._ngZone.runOutsideAngular(() => this._ngZone.onStable.subscribe({ next: () => { $.assertNotInAngularZone(), queueMicrotask(() => { this._isZoneStable = !0, this._runCallbacksIfReady(); }); } })); this._destroyRef?.onDestroy(() => { n.unsubscribe(), o.unsubscribe(); }); }
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
    static \u0275fac = function (o) { return new (o || e)(Le($), Le(Rv), Le(Av)); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac });
} return e; })(), Rv = (() => { class e {
    _applications = new Map;
    registerApplication(n, o) { this._applications.set(n, o); }
    unregisterApplication(n) { this._applications.delete(n); }
    unregisterAllApplications() { this._applications.clear(); }
    getTestability(n) { return this._applications.get(n) || null; }
    getAllTestabilities() { return Array.from(this._applications.values()); }
    getAllRootElements() { return Array.from(this._applications.keys()); }
    findTestabilityInTree(n, o = !0) { return dd?.findTestabilityInTree(this, n, o) ?? null; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function kv(e) { dd = e; }
var dd;
function fd(e) { return !!e && typeof e.then == "function"; }
function xv(e) { return !!e && typeof e.subscribe == "function"; }
var pd = new w("");
function Ov(e) { return Je([{ provide: pd, multi: !0, useValue: e }]); }
var gd = (() => { class e {
    resolve;
    reject;
    initialized = !1;
    done = !1;
    donePromise = new Promise((n, o) => { this.resolve = n, this.reject = o; });
    appInits = D(pd, { optional: !0 }) ?? [];
    injector = D(Te);
    constructor() { }
    runInitializers() { if (this.initialized)
        return; let n = []; for (let r of this.appInits) {
        let i = ei(this.injector, r);
        if (fd(i))
            n.push(i);
        else if (xv(i)) {
            let s = new Promise((a, c) => { i.subscribe({ complete: a, error: c }); });
            n.push(s);
        }
    } let o = () => { this.done = !0, this.resolve(); }; Promise.all(n).then(() => { o(); }).catch(r => { this.reject(r); }), n.length === 0 && o(), this.initialized = !0; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), br = new w("");
function hd() { _f(() => { let e = ""; throw new _(600, e); }); }
function Lv(e) { return e.isBoundToModule; }
var ZS = 10;
function md(e, t) { return Array.isArray(t) ? t.reduce(md, e) : Y(Y({}, e), t); }
var xe = (() => { class e {
    _runningTick = !1;
    _destroyed = !1;
    _destroyListeners = [];
    _views = [];
    internalErrorHandler = D(Bt);
    afterRenderManager = D(xs);
    zonelessEnabled = D(mn);
    rootEffectScheduler = D(Cc);
    dirtyFlags = 0;
    tracingSnapshot = null;
    allTestViews = new Set;
    autoDetectTestViews = new Set;
    includeAllTestViews = !1;
    afterTick = new xg;
    get allViews() { return [...(this.includeAllTestViews ? this.allTestViews : this.autoDetectTestViews).keys(), ...this._views]; }
    get destroyed() { return this._destroyed; }
    componentTypes = [];
    components = [];
    internalPendingTask = D(Vt);
    get isStable() { return this.internalPendingTask.hasPendingTasksObservable.pipe(eT(n => !n)); }
    constructor() { D(oo, { optional: !0 }); }
    whenStable() { let n; return new Promise(o => { n = this.isStable.subscribe({ next: r => { r && o(); } }); }).finally(() => { n.unsubscribe(); }); }
    _injector = D(It);
    _rendererFactory = null;
    get injector() { return this._injector; }
    bootstrap(n, o) { return this.bootstrapImpl(n, o); }
    bootstrapImpl(n, o, r = Te.NULL) { return this._injector.get($).run(() => { k(b.BootstrapComponentStart); let s = n instanceof Js; if (!this._injector.get(gd).done) {
        let g = "";
        throw new _(405, g);
    } let c; s ? c = n : c = this._injector.get(Nr).resolveComponentFactory(n), this.componentTypes.push(c.componentType); let l = Lv(c) ? void 0 : this._injector.get(Fn), u = o || c.selector, d = c.create(r, [], u, l), f = d.location.nativeElement, p = d.injector.get(bv, null); return p?.registerApplication(f), d.onDestroy(() => { this.detachView(d.hostView), jo(this.components, d), p?.unregisterApplication(f); }), this._loadComponent(d), k(b.BootstrapComponentEnd, d), d; }); }
    tick() { this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick(); }
    _tick() { k(b.ChangeDetectionStart), this.tracingSnapshot !== null ? this.tracingSnapshot.run(ks.CHANGE_DETECTION, this.tickImpl) : this.tickImpl(); }
    tickImpl = () => { if (this._runningTick)
        throw k(b.ChangeDetectionEnd), new _(101, !1); let n = x(null); try {
        this._runningTick = !0, this.synchronize();
    }
    finally {
        this._runningTick = !1, this.tracingSnapshot?.dispose(), this.tracingSnapshot = null, x(n), this.afterTick.next(), k(b.ChangeDetectionEnd);
    } };
    synchronize() { this._rendererFactory === null && !this._injector.destroyed && (this._rendererFactory = this._injector.get(tr, null, { optional: !0 })); let n = 0; for (; this.dirtyFlags !== 0 && n++ < ZS;) {
        k(b.ChangeDetectionSyncStart);
        try {
            this.synchronizeOnce();
        }
        finally {
            k(b.ChangeDetectionSyncEnd);
        }
    } }
    synchronizeOnce() { this.dirtyFlags & 16 && (this.dirtyFlags &= -17, this.rootEffectScheduler.flush()); let n = !1; if (this.dirtyFlags & 7) {
        let o = !!(this.dirtyFlags & 1);
        this.dirtyFlags &= -8, this.dirtyFlags |= 8;
        for (let { _lView: r } of this.allViews) {
            if (!o && !So(r))
                continue;
            let i = o && !this.zonelessEnabled ? 0 : 1;
            Qm(r, i), n = !0;
        }
        if (this.dirtyFlags &= -5, this.syncDirtyFlagsWithViews(), this.dirtyFlags & 23)
            return;
    } n || (this._rendererFactory?.begin?.(), this._rendererFactory?.end?.()), this.dirtyFlags & 8 && (this.dirtyFlags &= -9, this.afterRenderManager.execute()), this.syncDirtyFlagsWithViews(); }
    syncDirtyFlagsWithViews() { if (this.allViews.some(({ _lView: n }) => So(n))) {
        this.dirtyFlags |= 2;
        return;
    }
    else
        this.dirtyFlags &= -8; }
    attachView(n) { let o = n; this._views.push(o), o.attachToAppRef(this); }
    detachView(n) { let o = n; jo(this._views, o), o.detachFromAppRef(); }
    _loadComponent(n) { this.attachView(n.hostView); try {
        this.tick();
    }
    catch (r) {
        this.internalErrorHandler(r);
    } this.components.push(n), this._injector.get(br, []).forEach(r => r(n)); }
    ngOnDestroy() { if (!this._destroyed)
        try {
            this._destroyListeners.forEach(n => n()), this._views.slice().forEach(n => n.destroy());
        }
        finally {
            this._destroyed = !0, this._views = [], this._destroyListeners = [];
        } }
    onDestroy(n) { return this._destroyListeners.push(n), () => jo(this._destroyListeners, n); }
    destroy() { if (this._destroyed)
        throw new _(406, !1); let n = this._injector; n.destroy && !n.destroyed && n.destroy(); }
    get viewCount() { return this._views.length; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function jo(e, t) { let n = e.indexOf(t); n > -1 && e.splice(n, 1); }
function ia() { let e, t; return { promise: new Promise((o, r) => { e = o, t = r; }), resolve: e, reject: t }; }
function Pv(e) { let t = h(), n = M(); if (uo(t, n), !jv(0, t))
    return; let o = t[R], r = ye(t, n), i = e(() => ve(0, t, n), o); wr(0, r, i); }
function Fv(e) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let t = h(), n = t[R], o = M(), r = t[y], i = ce(r, o); if (i.loadingState === ne.NOT_STARTED) {
    let s = ye(t, o), c = e(() => Ar(i, t, o), n);
    wr(1, s, c);
} }
function Hv(e, t, n) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let o = t[R], r = ye(t, n), i = r[na], s = e(() => gt(o, i), o); wr(2, r, s); }
function Ar(e, t, n) { sa(e, t, n); }
function sa(e, t, n) { let o = t[R], r = t[y]; if (e.loadingState !== ne.NOT_STARTED)
    return e.loadingPromise ?? Promise.resolve(); let i = ye(t, n), s = RS(r, e); e.loadingState = ne.IN_PROGRESS, ki(1, i); let a = e.dependencyResolverFn, c = o.get(Dc).add(); return a ? (e.loadingPromise = Promise.allSettled(a()).then(l => { let u = !1, d = [], f = []; for (let p of l)
    if (p.status === "fulfilled") {
        let g = p.value, m = G(g) || Ne(g);
        if (m)
            d.push(m);
        else {
            let v = Be(g);
            v && f.push(v);
        }
    }
    else {
        u = !0;
        break;
    } if (u) {
    if (e.loadingState = ne.FAILED, e.errorTmplIndex === null) {
        let g = new _(-750, !1);
        Fu(t, g);
    }
}
else {
    e.loadingState = ne.COMPLETE;
    let p = s.tView;
    if (d.length > 0) {
        p.directiveRegistry = tg(p.directiveRegistry, d);
        let g = d.map(v => v.type), m = Va(!1, ...g);
        e.providers = m;
    }
    f.length > 0 && (p.pipeRegistry = tg(p.pipeRegistry, f));
} }), e.loadingPromise.finally(() => { e.loadingPromise = null, c(); })) : (e.loadingPromise = Promise.resolve().then(() => { e.loadingPromise = null, e.loadingState = ne.COMPLETE, c(); }), e.loadingPromise); }
function jv(e, t) { return !(e === 0 && typeof ngServerMode < "u" && ngServerMode || t[R].get(Mv, null, { optional: !0 })?.behavior === ad.Manual); }
function ve(e, t, n) { let o = t[y], r = t[n.index]; if (!jv(e, t))
    return; let i = ye(t, n), s = ce(o, n); switch (yv(i), s.loadingState) {
    case ne.NOT_STARTED:
        ot(U.Loading, n, r), sa(s, t, n), s.loadingState === ne.IN_PROGRESS && rg(s, n, r);
        break;
    case ne.IN_PROGRESS:
        ot(U.Loading, n, r), rg(s, n, r);
        break;
    case ne.COMPLETE:
        ot(U.Complete, n, r);
        break;
    case ne.FAILED:
        ot(U.Error, n, r);
        break;
    default:
} }
function gt(e, t, n) { return mt(this, null, function* () { let o = e.get(ut); if (o.hydrating.has(t))
    return; let { parentBlockPromise: i, hydrationQueue: s } = CM(t, e); if (s.length === 0)
    return; i !== null && s.shift(), JS(o, s), i !== null && (yield i); let a = s[0]; o.has(a) ? yield sg(e, s, n) : o.awaitParentBlock(a, () => mt(null, null, function* () { return yield sg(e, s, n); })); }); }
function sg(e, t, n) { return mt(this, null, function* () { let o = e.get(ut), r = o.hydrating, i = e.get(Vt), s = i.add(); for (let c = 0; c < t.length; c++) {
    let l = t[c], u = o.get(l);
    if (u != null) {
        if (yield eb(u), yield XS(e), YS(u)) {
            sw(u), ag(t.slice(c), o);
            break;
        }
        r.get(l).resolve();
    }
    else {
        KS(c, t, o), ag(t.slice(c), o);
        break;
    }
} let a = t[t.length - 1]; yield r.get(a)?.promise, i.remove(s), n && n(t), aw(o.get(a), t, o, e.get(xe)); }); }
function YS(e) { return ye(e.lView, e.tNode)[pt] === U.Error; }
function KS(e, t, n) { let o = e - 1, r = o > -1 ? n.get(t[o]) : null; r && Ks(r.lContainer); }
function ag(e, t) { let n = t.hydrating; for (let o in e)
    n.get(o)?.reject(); t.cleanup(e); }
function JS(e, t) { for (let n of t)
    e.hydrating.set(n, ia()); }
function XS(e) { return new Promise(t => bu(t, { injector: e })); }
function eb(e) { return mt(this, null, function* () { let { tNode: t, lView: n } = e, o = ye(n, t); return new Promise(r => { tb(o, r), ve(2, n, t); }); }); }
function tb(e, t) { Array.isArray(e[An]) || (e[An] = []), e[An].push(t); }
function Z(e, t, n) { return e === 0 ? cg(t, n) : e === 2 ? !cg(t, n) : !(typeof ngServerMode < "u" && ngServerMode); }
function nb(e) { return e != null && (e & 1) === 1; }
function cg(e, t) { let n = e[R], o = ce(e[y], t), r = yr(n), i = nb(o.flags); if (typeof ngServerMode < "u" && ngServerMode)
    return !r || !i; let a = ye(e, t)[na] !== null; return !(i && a && r); }
function At(e, t) { let n = ce(e, t); return n.hydrateTriggers ??= new Map; }
function Vv(e, t, n) { let o = [], r = [], i = [], s = []; for (let [a, c] of t) {
    let l = n.get(a);
    if (l !== void 0) {
        let u = c.data[st], d = l;
        for (let f = 0; f < u; f++) {
            if (d = d.previousSibling, d.nodeType !== Node.ELEMENT_NODE)
                continue;
            let p = { el: d, blockName: a };
            c.hydrate.idle && o.push(p), c.hydrate.immediate && s.push(p), c.hydrate.timer !== null && (p.delay = c.hydrate.timer, r.push(p)), c.hydrate.viewport && (typeof c.hydrate.viewport != "boolean" && (p.intersectionObserverOptions = c.hydrate.viewport), i.push(p));
        }
    }
} ob(e, o), sb(e, s), rb(e, i), ib(e, r); }
function ob(e, t) { for (let n of t) {
    let o = e.get(ut), i = oa(() => gt(e, n.blockName), e);
    o.addCleanupFn(n.blockName, i);
} }
function rb(e, t) { if (t.length > 0) {
    let n = e.get(ut);
    for (let o of t) {
        let r = cd(o.el, () => gt(e, o.blockName), e, o.intersectionObserverOptions);
        n.addCleanupFn(o.blockName, r);
    }
} }
function ib(e, t) { for (let n of t) {
    let o = e.get(ut), r = () => gt(e, n.blockName), s = ra(n.delay)(r, e);
    o.addCleanupFn(n.blockName, s);
} }
function sb(e, t) { for (let n of t)
    gt(e, n.blockName); }
function Bv(e, t, n, o, r, i, s, a, c, l) { let u = h(), d = T(), f = e + I, p = tn(u, d, e, null, 0, 0), g = u[R], m = yr(g); if (d.firstCreatePass) {
    Q("NgDefer");
    let Ze = { primaryTmplIndex: t, loadingTmplIndex: o ?? null, placeholderTmplIndex: r ?? null, errorTmplIndex: i ?? null, placeholderBlockConfig: null, loadingBlockConfig: null, dependencyResolverFn: n ?? null, loadingState: ne.NOT_STARTED, loadingPromise: null, providers: null, hydrateTriggers: null, debug: null, flags: l ?? 0 };
    c?.(d, Ze, a, s), bS(d, f, Ze);
} let v = u[f]; $y(v, p, u); let E = null, A = null; if (v[Ce]?.length > 0) {
    let Ze = v[Ce][0].data;
    A = Ze[Ds] ?? null, E = Ze[gr];
} let X = [null, ir.Initial, null, null, null, null, A, E, null, null]; SS(u, f, X); let Oe = null; A !== null && m && (Oe = g.get(ut), Oe.add(A, { lView: u, tNode: p, lContainer: v })); let Me = () => { yv(X), A !== null && Oe?.cleanup([A]); }; wr(0, X, () => qa(u, Me)), ii(u, Me); }
function $v(e) { let t = h(), n = me(); if (!Z(0, t, n))
    return; let o = se(); if (V(t, o, e)) {
    let r = x(null);
    try {
        let i = !!e, a = ye(t, n)[pt];
        i === !1 && a === ir.Initial ? uo(t, n) : i === !0 && (a === ir.Initial || a === U.Placeholder) && ve(0, t, n);
    }
    finally {
        x(r);
    }
} }
function Uv(e) { let t = h(), n = me(); if (!Z(1, t, n))
    return; let o = se(); if (V(t, o, e)) {
    let r = x(null);
    try {
        let i = !!e, s = t[y], a = ce(s, n);
        i === !0 && a.loadingState === ne.NOT_STARTED && Ar(a, t, n);
    }
    finally {
        x(r);
    }
} }
function zv(e) { let t = h(), n = me(); if (!Z(2, t, n))
    return; let o = se(), r = T(); if (At(r, n).set(6, null), V(t, o, e))
    if (typeof ngServerMode < "u" && ngServerMode)
        ve(2, t, n);
    else {
        let s = t[R], a = x(null);
        try {
            if (!!e === !0) {
                let u = ye(t, n)[na];
                gt(s, u);
            }
        }
        finally {
            x(a);
        }
    } }
function Gv() { let e = h(), t = M(); if (!Z(2, e, t))
    return; At(T(), t).set(7, null), typeof ngServerMode < "u" && ngServerMode && ve(2, e, t); }
function Wv() { let e = h(), t = M(); Z(0, e, t) && Pv(oa); }
function qv() { let e = h(), t = M(); Z(1, e, t) && Fv(oa); }
function Qv() { let e = h(), t = M(); if (!Z(2, e, t))
    return; At(T(), t).set(0, null), typeof ngServerMode < "u" && ngServerMode ? ve(2, e, t) : Hv(oa, e, t); }
function Zv() { let e = h(), t = M(); if (!Z(0, e, t))
    return; ce(e[y], t).loadingTmplIndex === null && uo(e, t), ve(0, e, t); }
function Yv() { let e = h(), t = M(); if (!Z(1, e, t))
    return; let n = e[y], o = ce(n, t); o.loadingState === ne.NOT_STARTED && sa(o, e, t); }
function Kv() { let e = h(), t = M(); if (!Z(2, e, t))
    return; if (At(T(), t).set(1, null), typeof ngServerMode < "u" && ngServerMode)
    ve(2, e, t);
else {
    let o = e[R], i = ye(e, t)[na];
    gt(o, i);
} }
function Jv(e) { let t = h(), n = M(); Z(0, t, n) && Pv(ra(e)); }
function Xv(e) { let t = h(), n = M(); Z(1, t, n) && Fv(ra(e)); }
function eI(e) { let t = h(), n = M(); if (!Z(2, t, n))
    return; At(T(), n).set(5, { type: 5, delay: e }), typeof ngServerMode < "u" && ngServerMode ? ve(2, t, n) : Hv(ra(e), t, n); }
function tI(e, t) { let n = h(), o = M(); Z(0, n, o) && (uo(n, o), typeof ngServerMode < "u" && ngServerMode || lo(n, o, e, t, Nh, () => ve(0, n, o), 0)); }
function nI(e, t) { let n = h(), o = M(); if (!Z(1, n, o))
    return; let r = n[y], i = ce(r, o); i.loadingState === ne.NOT_STARTED && lo(n, o, e, t, Nh, () => Ar(i, n, o), 1); }
function oI() { let e = h(), t = M(); if (!Z(2, e, t))
    return; At(T(), t).set(4, null), typeof ngServerMode < "u" && ngServerMode && ve(2, e, t); }
function rI(e, t) { let n = h(), o = M(); Z(0, n, o) && (uo(n, o), typeof ngServerMode < "u" && ngServerMode || lo(n, o, e, t, Mh, () => ve(0, n, o), 0)); }
function iI(e, t) { let n = h(), o = M(); if (!Z(1, n, o))
    return; let r = n[y], i = ce(r, o); i.loadingState === ne.NOT_STARTED && lo(n, o, e, t, Mh, () => Ar(i, n, o), 1); }
function sI() { let e = h(), t = M(); if (!Z(2, e, t))
    return; At(T(), t).set(3, null), typeof ngServerMode < "u" && ngServerMode && ve(2, e, t); }
function aI(e, t, n) { let o = h(), r = M(); Z(0, o, r) && (uo(o, r), typeof ngServerMode < "u" && ngServerMode || lo(o, r, e, t, cd, () => ve(0, o, r), 0, n)); }
function cI(e, t, n) { let o = h(), r = M(); if (!Z(1, o, r))
    return; let i = o[y], s = ce(i, r); s.loadingState === ne.NOT_STARTED && lo(o, r, e, t, cd, () => Ar(s, o, r), 1, n); }
function lI(e) { let t = h(), n = M(); if (!Z(2, t, n))
    return; At(T(), n).set(2, e ? { type: 2, intersectionObserverOptions: e } : null), typeof ngServerMode < "u" && ngServerMode && ve(2, t, n); }
function yd(e, t) { let n = h(), o = se(); if (V(n, o, t)) {
    let r = T(), i = me();
    if (Us(i, r, n, e, t))
        he(i) && $m(n, i.index);
    else {
        let a = W(i, n);
        Vs(n[C], a, null, i.value, e, t, null);
    }
} return yd; }
function vd(e, t, n, o) { let r = h(), i = se(); if (V(r, i, t)) {
    let s = T(), a = me();
    JN(a, r, e, t, n, o);
} return vd; }
var uI = new w("", { factory: () => !1 }), dI = new w("", { factory: () => ab }), ab = 4e3, cb = !1, ln = (typeof ngServerMode > "u" || !ngServerMode) && typeof document < "u" && typeof document?.documentElement?.getAnimations == "function";
function aa(e) { return e[R].get(uI, cb); }
function lb(e, t, n) { let o = Vn.get(e); if (o) {
    for (let r of t)
        o.classList.push(r);
    for (let r of n)
        o.cleanupFns.push(r);
}
else
    Vn.set(e, { classList: t, cleanupFns: n }); }
function Id(e) { let t = Vn.get(e); if (t) {
    for (let n of t.cleanupFns)
        n();
    Vn.delete(e);
} qt.delete(e); }
var ub = () => { }, Vn = new WeakMap, qt = new WeakMap, Rn = new WeakMap;
function Rl(e, t) { let n = Rn.get(e); if (n && n.length > 0) {
    let o = n.findIndex(r => r === t);
    o > -1 && n.splice(o, 1);
} n?.length === 0 && Rn.delete(e); }
function ca(e, t) { let n = Rn.get(e)?.shift(), o = t[et]; if (o) {
    let i = Zi(e.index, o)?.previousSibling;
    n && i && n === i && n.dispatchEvent(new CustomEvent("animationend", { detail: { cancel: !0 } }));
} }
function fI(e, t) { Rn.has(e) ? Rn.get(e)?.push(t) : Rn.set(e, [t]); }
function is(e) { let t = e[tt] ??= {}; return t.enter ??= new Map; }
function nn(e) { let t = e[tt] ??= {}; return t.leave ??= new Map; }
function pI(e) { let t = typeof e == "function" ? e() : e, n = Array.isArray(t) ? t : null; return typeof t == "string" && (n = t.trim().split(/\s+/).filter(o => o)), n; }
function db(e, t) { if (!ln)
    return; let n = Vn.get(e); if (n && n.classList.length > 0 && fb(e, n.classList))
    for (let o of n.classList)
        t.removeClass(e, o); Id(e); }
function fb(e, t) { for (let n of t)
    if (e.classList.contains(n))
        return !0; return !1; }
function gI(e, t) { let n = qt.get(t); return n === void 0 ? !0 : t === e.target && (n.animationName !== void 0 && e.animationName === n.animationName || n.propertyName !== void 0 && e.propertyName === n.propertyName); }
function la(e, t, n) { let o = e.get(t.index) ?? { animateFns: [] }; o.animateFns.push(n), e.set(t.index, o); }
function kl(e, t) { if (e)
    for (let n of e)
        n(); for (let n of t)
    n(); }
function xl(e, t) { let n = nn(e).get(t.index); n && (n.resolvers = void 0); }
function Ti(e, t, n, o, r) { Rl(t, n), kl(o, r), xl(e, t); }
function Vo(e) { if (Q("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !ln)
    return Vo; let t = h(); if (aa(t))
    return Vo; let n = M(); return ca(n, t), la(is(t), n, () => pb(t, n, e)), Ps(t[R]), Au(t[R], is(t)), Vo; }
function pb(e, t, n) { let o = W(t, e), r = e[C], i = e[R].get($), s = pI(n), a = [], c = u => { if (u.target !== o)
    return; let d = u instanceof AnimationEvent ? "animationend" : "transitionend"; i.runOutsideAngular(() => { r.listen(o, d, l); }); }, l = u => { u.target === o && gb(u, o, r); }; if (s && s.length > 0) {
    i.runOutsideAngular(() => { a.push(r.listen(o, "animationstart", c)), a.push(r.listen(o, "transitionstart", c)); }), lb(o, s, a);
    for (let u of s)
        r.addClass(o, u);
    i.runOutsideAngular(() => { requestAnimationFrame(() => { if (_m(o, qt, ln), !qt.has(o)) {
        for (let u of s)
            r.removeClass(o, u);
        Id(o);
    } }); });
} }
function gb(e, t, n) { let o = Vn.get(t); if (!(e.target !== t || !o) && gI(e, t)) {
    e.stopImmediatePropagation();
    for (let r of o.classList)
        n.removeClass(t, r);
    Id(t);
} }
function Bo(e) { if (Q("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !ln)
    return Bo; let t = h(); if (aa(t))
    return Bo; let n = M(); return ca(n, t), la(is(t), n, () => hb(t, n, e)), Ps(t[R]), Au(t[R], is(t)), Bo; }
function hb(e, t, n) { let o = W(t, e); n.call(e[F], { target: o, animationComplete: ub }); }
function $o(e) { if (Q("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !ln)
    return $o; let t = h(); if (aa(t))
    return $o; let o = M(); return ca(o, t), la(nn(t), o, () => mb(t, o, e)), Ps(t[R]), $o; }
function mb(e, t, n) { let { promise: o, resolve: r } = ia(), i = W(t, e), s = e[C], a = e[R].get($); Kt.add(e[we]), (nn(e).get(t.index).resolvers ??= []).push(r); let c = pI(n); return c && c.length > 0 ? yb(i, t, e, c, s, a) : r(), { promise: o, resolve: r }; }
function yb(e, t, n, o, r, i) { db(e, r); let s = [], a = nn(n).get(t.index)?.resolvers, c = l => { if (l.target === e && (l instanceof CustomEvent || gI(l, e))) {
    if (l.stopImmediatePropagation(), qt.delete(e), Rl(t, e), Array.isArray(t.projection))
        for (let u of o)
            r.removeClass(e, u);
    kl(a, s), xl(n, t);
} }; i.runOutsideAngular(() => { s.push(r.listen(e, "animationend", c)), s.push(r.listen(e, "transitionend", c)); }), fI(t, e); for (let l of o)
    r.addClass(e, l); i.runOutsideAngular(() => { requestAnimationFrame(() => { _m(e, qt, ln), qt.has(e) || (Rl(t, e), kl(a, s), xl(n, t)); }); }); }
function ss(e) { if (Q("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !ln)
    return ss; let t = h(), n = M(); return ca(n, t), Kt.add(t[we]), la(nn(t), n, () => vb(t, n, e)), Ps(t[R]), ss; }
function vb(e, t, n) { let { promise: o, resolve: r } = ia(), i = W(t, e), s = [], a = e[C], c = aa(e), l = e[R].get($), u = e[R].get(dI); (nn(e).get(t.index).resolvers ??= []).push(r); let d = nn(e).get(t.index)?.resolvers; if (c)
    Ti(e, t, i, d, s);
else {
    let f = setTimeout(() => Ti(e, t, i, d, s), u), p = { target: i, animationComplete: () => { Ti(e, t, i, d, s), clearTimeout(f); } };
    fI(t, i), l.runOutsideAngular(() => { s.push(a.listen(i, "animationend", () => { Ti(e, t, i, d, s), clearTimeout(f); }, { once: !0 })); }), n.call(e[F], p);
} return { promise: o, resolve: r }; }
function hI() { return h()[J][F]; }
function mI() { let e = h(), t = T(), n = M(); t.firstCreatePass && Eb(t, n, e); let o = II(n, e); o && (Q("NgSignalForms"), n.flags & 1024 ? ug(e, n, o, "value") : n.flags & 2048 ? ug(e, n, o, "checked") : n.flags & 4096 ? Nb(o) : n.flags & 8192 && wb(e, n, o), o.\u0275register()); }
function yI(e, t, n) { let o = h(), r = me(), i = se(); if (V(o, i, e)) {
    let s = T();
    js(r, o, t, e, o[C], n);
} vI(o, r); }
function Ib() { let e = h(), t = me(); vI(e, t); }
function vI(e, t) { let n = II(t, e); n && (Ab(e, t, n), t.flags & 1024 ? dg(t, e, n, "value") : t.flags & 2048 ? dg(t, e, n, "checked") : t.flags & 4096 ? Rb(t, e, n) : kb(t, e, n)), se(); }
function Eb(e, t, n) { let o = t.inputs?.formField; if (!o || he(t) && o.includes(t.directiveStart + t.componentOffset))
    return; let r = o.find(s => Wu in n[s]); if (r === void 0)
    return; t.fieldIndex = r; let i = Db(t, n) || Cb(e, t); if (!(Tb(t) || i))
    throw new _(318, !1); }
function Db(e, t) { return t[e.fieldIndex].\u0275interopControl ? (e.flags |= 4096, !0) : !1; }
function Cb(e, t) { for (let n = t.directiveStart; n < t.directiveEnd; n++) {
    let o = e.data[n];
    if (lg(o, "value"))
        return t.flags |= 1024, t.customControlIndex = n, !0;
    if (lg(o, "checked"))
        return t.flags |= 2048, t.customControlIndex = n, !0;
} return !1; }
function Tb(e) { return _b(e) ? (e.flags |= 8192, xb(e) && (e.flags |= 16384), Ob(e) && (e.flags |= 32768), !0) : !1; }
function II(e, t) { let n = e.fieldIndex; return n === -1 ? null : t[n]; }
function lg(e, t) { return Mb(e, t) && EI(e, t + "Change"); }
function Mb(e, t) { return t in e.inputs; }
function EI(e, t) { return t in e.outputs; }
function ug(e, t, n, o) { let r = T(), i = t.customControlIndex, s = o + "Change"; Pn(t, e, i, s, s, rt(t, e, u => n.state().setControlValue(u))); let a = r.data[i], c = "touchedChange"; EI(a, c) && Pn(t, e, i, c, c, rt(t, e, () => n.state().markAsTouched())); let l = e[i]; n.focus = () => l.focus ? l.focus() : n.element.focus(); }
function Nb(e) { let t = e.\u0275interopControl; t.registerOnChange(n => e.state().setControlValue(n)), t.registerOnTouched(() => e.state().markAsTouched()), e.focus = () => e.element.focus(); }
function _b(e) { if (e.type !== 2)
    return !1; let t = e.value; return t === "input" || t === "textarea" || t === "select"; }
function wb(e, t, n) { let o = T(), r = e[C], i = W(t, e), s = () => { let c = n.state(); c.setControlValue(Lb(i, c.value)); }; es(t, o, e, void 0, r, "input", s, rt(t, e, s)); let a = () => { n.state().markAsTouched(); }; if (es(t, o, e, void 0, r, "blur", a, rt(t, e, a)), t.type === 2 && t.value === "select" && typeof MutationObserver == "function") {
    let c = Sb(i, n);
    Qa(o, e, c, c.disconnect);
} n.focus = () => i.focus(); }
function Sb(e, t) { let n = new MutationObserver(o => { o.some(r => bb(r)) && (e.value = t.state().value()); }); return n.observe(e, { attributes: !0, attributeFilter: ["value"], characterData: !0, childList: !0, subtree: !0 }), n; }
function bb(e) { if (e.type === "childList" || e.type === "characterData") {
    if (e.target instanceof Comment)
        return !1;
    for (let t of e.addedNodes)
        if (!(t instanceof Comment))
            return !0;
    for (let t of e.removedNodes)
        if (!(t instanceof Comment))
            return !0;
    return !1;
} return e.type === "attributes" && e.target instanceof HTMLOptionElement; }
function Ab(e, t, n) { if (n.classes) {
    let o = da(e);
    o.classes ??= {}, n.state();
    let r = e[C], i = W(t, e);
    for (let [s, a] of n.classes) {
        let c = a();
        zb(o.classes, s, c) && (c ? r.addClass(i, s) : r.removeClass(i, s));
    }
} }
function dg(e, t, n, o) { let r = T(), i = e.customControlIndex, s = t[i], a = r.data[i], c = n.state(), l = da(t), u = c.controlValue(); Bn(l, Cd, u) && Yt(a, s, o, u); let d = (e.flags & 8192) !== 0, f = d ? W(e, t) : null, p = t[C]; for (let g of Td) {
    let m = c[g]?.();
    if (Bn(l, g, m)) {
        let v = ua[g];
        Ed(e, t, v, m), d && !(v in a.inputs) && Dd(e, p, f, g, m, v);
    }
} }
function Rb(e, t, n) { let o = n.\u0275interopControl, r = da(t), i = n.state(), s = (e.flags & 8192) !== 0, a = s ? W(e, t) : null, c = t[C], l = i.value(); Bn(r, Cd, l) && pi(() => o.writeValue(l)); for (let u of Td) {
    let d = i[u]?.();
    if (Bn(r, u, d)) {
        let f = ua[u], p = Ed(e, t, f, d);
        u === CI ? o.setDisabledState && pi(() => o.setDisabledState(d)) : s && !p && Dd(e, c, a, u, d, f);
    }
} }
function kb(e, t, n) { let o = W(e, t), r = t[C], i = n.state(), s = da(t), a = i.controlValue(); Bn(s, Cd, a) && Pb(o, a); for (let c of Td) {
    let l = i[c]?.();
    if (Bn(s, c, l)) {
        let u = ua[c];
        Dd(e, r, o, c, l, u), Ed(e, t, u, l);
    }
} }
function Ed(e, t, n, o) { let r = e.inputs?.[n]; if (r) {
    let i = T();
    for (let s of r) {
        let a = i.data[s], c = t[s];
        Yt(a, c, n, o);
    }
    return !0;
} return !1; }
function Dd(e, t, n, o, r, i) { switch (o) {
    case Bb:
        t.setAttribute(n, i, r);
        break;
    case CI:
    case $b:
    case Ub:
        Gb(t, n, i, r);
        break;
    case Fb:
    case jb:
        e.flags & 16384 && pg(t, n, i, r);
        break;
    case Hb:
    case Vb:
        e.flags & 32768 && pg(t, n, i, r);
        break;
} }
function DI(e) { return e === null || e instanceof Date; }
function xb(e) { if (!e.attrs || e.value !== "input")
    return !1; for (let t = 0; t < e.attrs.length; t += 2) {
    let n = e.attrs[t];
    if (Ql(n))
        break;
    if (n === "type") {
        let o = e.attrs[t + 1];
        return o === "date" || o === "datetime-local" || o === "month" || o === "number" || o === "range" || o === "time" || o === "week";
    }
} return !1; }
function Ob(e) { return e.value !== "select"; }
function Lb(e, t) { switch (e.type) {
    case "checkbox": return e.checked;
    case "number":
    case "range":
    case "datetime-local":
        if (typeof t() == "number")
            return e.valueAsNumber;
        break;
    case "date":
    case "month":
    case "time":
    case "week":
        let n = t();
        if (DI(n))
            return e.valueAsDate;
        if (typeof n == "number")
            return e.valueAsNumber;
        break;
} return e.value; }
function Pb(e, t) { switch (e.type) {
    case "checkbox":
        e.checked = t;
        return;
    case "radio":
        e.checked = t === e.value;
        return;
    case "number":
    case "range":
    case "datetime-local":
        if (typeof t == "number") {
            fg(e, t);
            return;
        }
        break;
    case "date":
    case "month":
    case "time":
    case "week": if (DI(t)) {
        e.valueAsDate = t;
        return;
    }
    else if (typeof t == "number") {
        fg(e, t);
        return;
    }
} e.value = t; }
function fg(e, t) { isNaN(t) ? e.value = "" : e.valueAsNumber = t; }
var CI = K({ disabled: K }), Fb = K({ max: K }), Hb = K({ maxLength: K }), jb = K({ min: K }), Vb = K({ minLength: K }), Bb = K({ name: K }), $b = K({ readonly: K }), Ub = K({ required: K }), Cd = K({ controlValue: K }), ua = { disabled: "disabled", disabledReasons: "disabledReasons", dirty: "dirty", errors: "errors", hidden: "hidden", invalid: "invalid", max: "max", maxLength: "maxLength", min: "min", minLength: "minLength", name: "name", pattern: "pattern", pending: "pending", readonly: "readonly", required: "required", touched: "touched" }, Td = Object.keys(ua);
function da(e) { let t = He(), n = e[t]; return n === L && (n = e[t] = {}), n; }
function Bn(e, t, n) { let o = e[t]; return Object.is(o, n) ? !1 : (e[t] = n, !0); }
function zb(e, t, n) { let o = e[t]; return Object.is(o, n) ? !1 : (e[t] = n, !0); }
function Gb(e, t, n, o) { o ? e.setAttribute(t, n, "") : e.removeAttribute(t, n); }
function pg(e, t, n, o) { o !== void 0 ? e.setAttribute(t, n, o.toString()) : e.removeAttribute(t, n); }
var Ol = class {
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
function jc(e, t, n, o, r) { return e === n && Object.is(t, o) ? 1 : Object.is(r(e, t), r(n, o)) ? -1 : 0; }
function Wb(e, t, n, o) { let r, i, s = 0, a = e.length - 1, c = void 0; if (Array.isArray(t)) {
    vn(o);
    let l = t.length - 1;
    for (vn(null); s <= a && s <= l;) {
        let u = e.at(s), d = t[s], f = jc(s, u, s, d, n);
        if (f !== 0) {
            f < 0 && e.updateValue(s, d), s++;
            continue;
        }
        let p = e.at(a), g = t[l], m = jc(a, p, l, g, n);
        if (m !== 0) {
            m < 0 && e.updateValue(a, g), a--, l--;
            continue;
        }
        let v = n(s, u), E = n(a, p), A = n(s, d);
        if (Object.is(A, E)) {
            let X = n(l, g);
            Object.is(X, v) ? (e.swap(s, a), e.updateValue(a, g), l--, a--) : e.move(a, s), e.updateValue(s, d), s++;
            continue;
        }
        if (r ??= new as, i ??= hg(e, s, a, n), Ll(e, r, s, A))
            e.updateValue(s, d), s++, a++;
        else if (i.has(A))
            r.set(v, e.detach(s)), a--;
        else {
            let X = e.create(s, t[s]);
            e.attach(s, X), s++, a++;
        }
    }
    for (; s <= l;)
        gg(e, r, n, s, t[s]), s++;
}
else if (t != null) {
    vn(o);
    let l = t[Symbol.iterator]();
    vn(null);
    let u = l.next();
    for (; !u.done && s <= a;) {
        let d = e.at(s), f = u.value, p = jc(s, d, s, f, n);
        if (p !== 0)
            p < 0 && e.updateValue(s, f), s++, u = l.next();
        else {
            r ??= new as, i ??= hg(e, s, a, n);
            let g = n(s, f);
            if (Ll(e, r, s, g))
                e.updateValue(s, f), s++, a++, u = l.next();
            else if (!i.has(g))
                e.attach(s, e.create(s, f)), s++, a++, u = l.next();
            else {
                let m = n(s, d);
                r.set(m, e.detach(s)), a--;
            }
        }
    }
    for (; !u.done;)
        gg(e, r, n, e.length, u.value), u = l.next();
} for (; s <= a;)
    e.destroy(e.detach(a--)); r?.forEach(l => { e.destroy(l); }); }
function Ll(e, t, n, o) { return t !== void 0 && t.has(o) ? (e.attach(n, t.get(o)), t.delete(o), !0) : !1; }
function gg(e, t, n, o, r) { if (Ll(e, t, o, n(o, r)))
    e.updateValue(o, r);
else {
    let i = e.create(o, r);
    e.attach(o, i);
} }
function hg(e, t, n, o) { let r = new Set; for (let i = t; i <= n; i++)
    r.add(o(i, e.at(i))); return r; }
var as = class {
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
function TI(e, t, n, o, r, i, s, a) { Q("NgControlFlow"); let c = h(), l = T(), u = de(l.consts, i); return tn(c, l, e, t, n, o, r, u, 256, s, a), fa; }
function fa(e, t, n, o, r, i, s, a) { Q("NgControlFlow"); let c = h(), l = T(), u = de(l.consts, i); return tn(c, l, e, t, n, o, r, u, 512, s, a), fa; }
function MI(e, t) { Q("NgControlFlow"); let n = h(), o = se(), r = n[o] !== L ? n[o] : -1, i = r !== -1 ? cs(n, I + r) : void 0, s = 0; if (V(n, o, e)) {
    let a = x(null);
    try {
        if (i !== void 0 && Hu(i, s), e !== -1) {
            let c = I + e, l = cs(n, c), u = jl(n[y], c), d = Ny(l, u, n), f = io(n, u, t, { dehydratedView: d });
            so(l, f, s, Jt(u, d));
        }
    }
    finally {
        x(a);
    }
}
else if (i !== void 0) {
    let a = ey(i, s);
    a !== void 0 && (a[F] = t);
} }
var Pl = class {
    lContainer;
    $implicit;
    $index;
    constructor(t, n, o) { this.lContainer = t, this.$implicit = n, this.$index = o; }
    get $count() { return this.lContainer.length - H; }
};
function NI(e) { return e; }
function _I(e, t) { return t; }
var Fl = class {
    hasEmptyBlock;
    trackByFn;
    liveCollection;
    constructor(t, n, o) { this.hasEmptyBlock = t, this.trackByFn = n, this.liveCollection = o; }
};
function wI(e, t, n, o, r, i, s, a, c, l, u, d, f) { Q("NgControlFlow"); let p = h(), g = T(), m = c !== void 0, v = h(), E = a ? s.bind(v[J][F]) : s, A = new Fl(m, E); v[I + e] = A, tn(p, g, e + 1, t, n, o, r, de(g.consts, i), 256), m && tn(p, g, e + 2, c, l, u, d, de(g.consts, f), 512); }
var Hl = class extends Ol {
    lContainer;
    hostLView;
    templateTNode;
    operationsCounter = void 0;
    needsIndexUpdate = !1;
    constructor(t, n, o) { super(), this.lContainer = t, this.hostLView = n, this.templateTNode = o; }
    get length() { return this.lContainer.length - H; }
    at(t) { return this.getLView(t)[F].$implicit; }
    attach(t, n) { let o = n[ie]; this.needsIndexUpdate ||= t !== this.length, so(this.lContainer, n, t, Jt(this.templateTNode, o)), qb(this.lContainer, t); }
    detach(t) { return this.needsIndexUpdate ||= t !== this.length - 1, Qb(this.lContainer, t), Zb(this.lContainer, t); }
    create(t, n) { let o = er(this.lContainer, this.templateTNode.tView.ssrId); return io(this.hostLView, this.templateTNode, new Pl(this.lContainer, n, t), { dehydratedView: o }); }
    destroy(t) { Cr(t[y], t); }
    updateValue(t, n) { this.getLView(t)[F].$implicit = n; }
    reset() { this.needsIndexUpdate = !1; }
    updateIndexes() { if (this.needsIndexUpdate)
        for (let t = 0; t < this.length; t++)
            this.getLView(t)[F].$index = t; }
    getLView(t) { return Yb(this.lContainer, t); }
};
function SI(e) { let t = x(null), n = ae(); try {
    let o = h(), r = o[y], i = o[n], s = n + 1, a = cs(o, s);
    if (i.liveCollection === void 0) {
        let l = jl(r, s);
        i.liveCollection = new Hl(a, o, l);
    }
    else
        i.liveCollection.reset();
    let c = i.liveCollection;
    if (Wb(c, e, i.trackByFn, t), c.updateIndexes(), i.hasEmptyBlock) {
        let l = se(), u = c.length === 0;
        if (V(o, l, u)) {
            let d = n + 2, f = cs(o, d);
            if (u) {
                let p = jl(r, d), g = Ny(f, p, o), m = io(o, p, void 0, { dehydratedView: g });
                so(f, m, 0, Jt(p, g));
            }
            else
                r.firstUpdatePass && Ys(f), Hu(f, 0);
        }
    }
}
finally {
    x(t);
} }
function cs(e, t) { return e[t]; }
function qb(e, t) { if (e.length <= H)
    return; let n = H + t, o = e[n], r = o ? o[tt] : void 0; if (o && r && r.detachedLeaveAnimationFns && r.detachedLeaveAnimationFns.length > 0) {
    let i = o[R];
    LN(i, r), Kt.delete(o[we]), r.detachedLeaveAnimationFns = void 0;
} }
function Qb(e, t) { if (e.length <= H)
    return; let n = H + t, o = e[n], r = o ? o[tt] : void 0; r && r.leave && r.leave.size > 0 && (r.detachedLeaveAnimationFns = []); }
function Zb(e, t) { return Jo(e, t); }
function Yb(e, t) { return ey(e, t); }
function jl(e, t) { return Ct(e, t); }
function Md(e, t, n) { let o = h(), r = se(); if (V(o, r, t)) {
    let i = T(), s = me();
    js(s, o, e, t, o[C], n);
} return Md; }
function Vl(e, t, n, o, r) { Us(t, e, n, r ? "class" : "style", o); }
function pa(e, t, n, o) { let r = h(), i = r[y], s = e + I, a = i.firstCreatePass ? zu(s, r, 2, t, Pu, si(), n, o) : i.data[s]; if (Bs(a, r, e, t, wd), gn(a)) {
    let c = r[y];
    Hs(c, r, a), gu(c, a, r);
} return o != null && ro(r, a), pa; }
function ga() { let e = T(), t = M(), n = $s(t); return e.firstCreatePass && Gu(e, n), Ya(n) && Xa(), Za(), n.classesWithoutHost != null && dT(n) && Vl(e, n, h(), n.classesWithoutHost, !0), n.stylesWithoutHost != null && fT(n) && Vl(e, n, h(), n.stylesWithoutHost, !1), ga; }
function Nd(e, t, n, o) { return pa(e, t, n, o), ga(), Nd; }
function ha(e, t, n, o) { let r = h(), i = r[y], s = e + I, a = i.firstCreatePass ? ky(s, i, 2, t, n, o) : i.data[s]; return Bs(a, r, e, t, wd), o != null && ro(r, a), ha; }
function ma() { let e = M(), t = $s(e); return Ya(t) && Xa(), Za(), ma; }
function _d(e, t, n, o) { return ha(e, t, n, o), ma(), _d; }
var wd = (e, t, n, o, r) => (je(!0), bs(t[C], o, hc()));
function Kb(e, t, n, o, r) { let i = !ws(t, n); if (je(i), i)
    return bs(t[C], o, hc()); let s = t[ie], a = Mr(s, e, t, n); return Vh(s, r) && Ns(s, r, a.nextSibling), s && (Kl(n) || ah(a)) && he(n) && (Yf(n), cm(a)), a; }
function bI() { wd = Kb; }
function ya(e, t, n) { let o = h(), r = o[y], i = e + I, s = r.firstCreatePass ? zu(i, o, 8, "ng-container", Pu, si(), t, n) : r.data[i]; if (Bs(s, o, e, "ng-container", Rd), gn(s)) {
    let a = o[y];
    Hs(a, o, s), gu(a, s, o);
} return n != null && ro(o, s), ya; }
function Rr() { let e = T(), t = M(), n = $s(t); return e.firstCreatePass && Gu(e, n), Rr; }
function Sd(e, t, n) { return ya(e, t, n), Rr(), Sd; }
function va(e, t, n) { let o = h(), r = o[y], i = e + I, s = r.firstCreatePass ? ky(i, r, 8, "ng-container", t, n) : r.data[i]; return Bs(s, o, e, "ng-container", Rd), n != null && ro(o, s), va; }
function bd() { let e = M(), t = $s(e); return Rr; }
function Ad(e, t, n) { return va(e, t, n), bd(), Ad; }
var Rd = (e, t, n, o, r) => (je(!0), vu(t[C], ""));
function Jb(e, t, n, o, r) { let i, s = !ws(t, n); if (je(s), s)
    return vu(t[C], ""); let a = t[ie], c = Mr(a, e, t, n), l = jh(a, r); return Ns(a, r, c), i = Qs(l, c), i; }
function AI() { Rd = Jb; }
function RI() { return h(); }
function kd(e, t, n) { let o = h(), r = se(); if (V(o, r, t)) {
    let i = T(), s = me();
    Lu(s, o, e, t, o[C], n);
} return kd; }
function xd(e, t, n) { let o = h(), r = se(); if (V(o, r, t)) {
    let i = T(), s = me(), a = ai(i.data), c = Um(a, s, o);
    Lu(s, o, e, t, c, n);
} return xd; }
var Oo = void 0;
function Xb(e) { let t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length; return t === 1 && n === 0 ? 1 : 5; }
var eA = ["en", [["a", "p"], ["AM", "PM"]], [["AM", "PM"]], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], Oo, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], Oo, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm\u202Fa", "h:mm:ss\u202Fa", "h:mm:ss\u202Fa z", "h:mm:ss\u202Fa zzzz"], ["{1}, {0}", Oo, Oo, Oo], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", Xb], kn = {};
function tA(e, t, n) { typeof t != "string" && (n = t, t = e[$n.LocaleId]), t = t.toLowerCase().replace(/_/g, "-"), kn[t] = e, n && (kn[t][$n.ExtraData] = n); }
function Od(e) { let t = rA(e), n = mg(t); if (n)
    return n; let o = t.split("-")[0]; if (n = mg(o), n)
    return n; if (o === "en")
    return eA; throw new _(701, !1); }
function nA(e) { return Od(e)[$n.CurrencyCode] || null; }
function kI(e) { return Od(e)[$n.PluralCase]; }
function mg(e) { return e in kn || (kn[e] = Ee.ng && Ee.ng.common && Ee.ng.common.locales && Ee.ng.common.locales[e]), kn[e]; }
function oA() { kn = {}; }
var $n = (function (e) { return e[e.LocaleId = 0] = "LocaleId", e[e.DayPeriodsFormat = 1] = "DayPeriodsFormat", e[e.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", e[e.DaysFormat = 3] = "DaysFormat", e[e.DaysStandalone = 4] = "DaysStandalone", e[e.MonthsFormat = 5] = "MonthsFormat", e[e.MonthsStandalone = 6] = "MonthsStandalone", e[e.Eras = 7] = "Eras", e[e.FirstDayOfWeek = 8] = "FirstDayOfWeek", e[e.WeekendRange = 9] = "WeekendRange", e[e.DateFormat = 10] = "DateFormat", e[e.TimeFormat = 11] = "TimeFormat", e[e.DateTimeFormat = 12] = "DateTimeFormat", e[e.NumberSymbols = 13] = "NumberSymbols", e[e.NumberFormats = 14] = "NumberFormats", e[e.CurrencyCode = 15] = "CurrencyCode", e[e.CurrencySymbol = 16] = "CurrencySymbol", e[e.CurrencyName = 17] = "CurrencyName", e[e.Currencies = 18] = "Currencies", e[e.Directionality = 19] = "Directionality", e[e.PluralCase = 20] = "PluralCase", e[e.ExtraData = 21] = "ExtraData", e; })($n || {});
function rA(e) { return e.toLowerCase().replace(/_/g, "-"); }
var iA = ["zero", "one", "two", "few", "many"];
function sA(e, t) { let n = kI(t)(parseInt(e, 10)), o = iA[n]; return o !== void 0 ? o : "other"; }
var kr = "en-US", aA = "USD", xI = { marker: "element" }, OI = { marker: "ICU" }, nt = (function (e) { return e[e.SHIFT = 2] = "SHIFT", e[e.APPEND_EAGERLY = 1] = "APPEND_EAGERLY", e[e.COMMENT = 2] = "COMMENT", e; })(nt || {}), LI = kr;
function PI(e) { typeof e == "string" && (LI = e.toLowerCase().replace(/_/g, "-")); }
function cA() { return LI; }
var sr = 0, Uo = 0;
function lA(e) { e && (sr = sr | 1 << Math.min(Uo, 31)), Uo++; }
function uA(e, t, n) { if (Uo > 0) {
    let o = e.data[n], r = Array.isArray(o) ? o : o.update, i = He() - Uo - 1;
    VI(e, t, r, i, sr);
} sr = 0, Uo = 0; }
function FI(e, t, n) { let o = e[C]; switch (n) {
    case Node.COMMENT_NODE: return vu(o, t);
    case Node.TEXT_NODE: return yu(o, t);
    case Node.ELEMENT_NODE: return bs(o, t, null);
} }
var zo = (e, t, n, o) => (je(!0), FI(e, n, o));
function dA(e, t, n, o) { let r = e[ie], i = t - I, s = !Zs() || !r || bo() || _s(r, i); return je(s), s ? FI(e, n, o) : ly(r, i); }
function HI() { zo = dA; }
function fA(e, t, n, o) { let r = e[C]; for (let i = 0; i < t.length; i++) {
    let s = t[i++], a = t[i], c = (s & nt.COMMENT) === nt.COMMENT, l = (s & nt.APPEND_EAGERLY) === nt.APPEND_EAGERLY, u = s >>> nt.SHIFT, d = e[u], f = !1;
    d === null && (d = e[u] = zo(e, u, a, c ? Node.COMMENT_NODE : Node.TEXT_NODE), f = Ro()), l && n !== null && f && Zt(r, n, d, o, !1);
} }
function jI(e, t, n, o) { let r = n[C], i = null, s; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "string") {
        let l = t[++a];
        n[l] === null && (n[l] = zo(n, l, c, Node.TEXT_NODE));
    }
    else if (typeof c == "number")
        switch (c & 1) {
            case 0:
                let l = F_(c);
                i === null && (i = l, s = r.parentNode(o));
                let u, d;
                if (l === i ? (u = o, d = s) : (u = null, d = O(n[l])), d !== null) {
                    let m = H_(c), v = n[m];
                    Zt(r, d, v, u, !1);
                    let E = Fo(e, m);
                    if (E !== null && typeof E == "object") {
                        let A = qs(E, n);
                        A !== null && jI(e, E.create[A], n, n[E.anchorIdx]);
                    }
                }
                break;
            case 1:
                let f = c >>> 1, p = t[++a], g = t[++a];
                Vs(r, Ft(f, n), null, null, p, g, null);
                break;
            default:
        }
    else
        switch (c) {
            case OI:
                let l = t[++a], u = t[++a];
                if (n[u] === null) {
                    let p = n[u] = zo(n, u, l, Node.COMMENT_NODE);
                    Ae(p, n);
                }
                break;
            case xI:
                let d = t[++a], f = t[++a];
                if (n[f] === null) {
                    let p = n[f] = zo(n, f, d, Node.ELEMENT_NODE);
                    Ae(p, n);
                }
                break;
            default:
        }
} }
function VI(e, t, n, o, r) { for (let i = 0; i < n.length; i++) {
    let s = n[i], a = n[++i];
    if (s & r) {
        let c = "";
        for (let l = i + 1; l <= i + a; l++) {
            let u = n[l];
            if (typeof u == "string")
                c += u;
            else if (typeof u == "number")
                if (u < 0)
                    c += N(t[o - u]);
                else {
                    let d = u >>> 2;
                    switch (u & 3) {
                        case 1:
                            let f = n[++l], p = n[++l], g = e.data[d];
                            typeof g == "string" ? Vs(t[C], t[d], null, g, f, c, p) : js(g, t, f, c, t[C], p);
                            break;
                        case 0:
                            let m = t[d];
                            m !== null && sm(t[C], m, c);
                            break;
                        case 2:
                            pA(e, Fo(e, d), t, c);
                            break;
                        case 3:
                            yg(e, Fo(e, d), o, t);
                            break;
                    }
                }
        }
    }
    else {
        let c = n[i + 1];
        if (c > 0 && (c & 3) === 3) {
            let l = c >>> 2, u = Fo(e, l);
            t[u.currentCaseLViewIndex] < 0 && yg(e, u, o, t);
        }
    }
    i += a;
} }
function yg(e, t, n, o) { let r = o[t.currentCaseLViewIndex]; if (r !== null) {
    let i = sr;
    r < 0 && (r = o[t.currentCaseLViewIndex] = ~r, i = -1), VI(e, o, t.update[r], n, i);
} }
function pA(e, t, n, o) { let r = gA(t, o); if (qs(t, n) !== r && (BI(e, t, n), n[t.currentCaseLViewIndex] = r === null ? null : ~r, r !== null)) {
    let s = n[t.anchorIdx];
    s && jI(e, t.create[r], n, s), nw(n, t.anchorIdx, r);
} }
function BI(e, t, n) { let o = qs(t, n); if (o !== null) {
    let r = t.remove[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i];
        if (s > 0) {
            let a = Ft(s, n);
            a !== null && Ir(n[C], a);
        }
        else
            BI(e, Fo(e, ~s), n);
    }
} }
function gA(e, t) { let n = e.cases.indexOf(t); if (n === -1)
    switch (e.type) {
        case 1: {
            let o = sA(t, cA());
            n = e.cases.indexOf(o), n === -1 && o !== "other" && (n = e.cases.indexOf("other"));
            break;
        }
        case 0: {
            n = e.cases.indexOf("other");
            break;
        }
    } return n === -1 ? null : n; }
var ls = /�(\d+):?\d*�/gi, hA = /({\s*�\d+:?\d*�\s*,\s*\S{6}\s*,[\s\S]*})/gi, mA = /�(\d+)�/, $I = /^\s*(�\d+:?\d*�)\s*,\s*(select|plural)\s*,/, Go = "\uFFFD", yA = /�\/?\*(\d+:\d+)�/gi, vA = /�(\/?[#*]\d+):?\d*�/gi, IA = /\uE500/g;
function EA(e) { return e.replace(IA, " "); }
function DA(e, t, n, o, r, i) { let s = hn(), a = [], c = [], l = [[]], u = [[]]; r = NA(r, i); let d = EA(r).split(vA); for (let f = 0; f < d.length; f++) {
    let p = d[f];
    if ((f & 1) === 0) {
        let g = Bl(p);
        for (let m = 0; m < g.length; m++) {
            let v = g[m];
            if ((m & 1) === 0) {
                let E = v;
                E !== "" && CA(u[0], e, s, l[0], a, c, n, E);
            }
            else {
                let E = v;
                if (typeof E != "object")
                    throw new Error(`Unable to parse ICU expression in "${r}" message.`);
                let X = UI(e, s, l[0], n, a, "", !0).index;
                GI(u[0], e, n, c, t, E, X);
            }
        }
    }
    else {
        let g = p.charCodeAt(0) === 47, m = p.charCodeAt(g ? 1 : 0), v = I + Number.parseInt(p.substring(g ? 2 : 1));
        if (g)
            l.shift(), u.shift(), ze(hn(), !1);
        else {
            let E = P_(e, l[0], v);
            l.unshift([]), ze(E, !0);
            let A = { kind: 2, index: v, children: [], type: m === 35 ? 0 : 1 };
            u[0].push(A), u.unshift(A.children);
        }
    }
} e.data[o] = { create: a, update: c, ast: u[0], parentTNodeIndex: t }; }
function UI(e, t, n, o, r, i, s) { let a = Dr(e, o, 1, null), c = a << nt.SHIFT, l = hn(); t === l && (l = null), l === null && (c |= nt.APPEND_EAGERLY), s && (c |= nt.COMMENT, bN(V_)), r.push(c, i === null ? "" : i); let u = ju(e, a, s ? 32 : 1, i === null ? "" : i, null); iy(n, u); let d = u.index; return ze(u, !1), l !== null && t !== l && L_(l, d), u; }
function CA(e, t, n, o, r, i, s, a) { let c = a.match(ls), u = UI(t, n, o, s, r, c ? null : a, !1).index; c && Wo(i, a, u, null, 0, null), e.push({ kind: 0, index: u }); }
function TA(e, t, n) { let r = M().index, i = []; if (e.firstCreatePass && e.data[t] === null) {
    for (let s = 0; s < n.length; s += 2) {
        let a = n[s], c = n[s + 1];
        if (c !== "") {
            if (hA.test(c))
                throw new Error(`ICU expressions are not supported in attributes. Message: "${c}".`);
            Wo(i, c, r, a, MA(i), null);
        }
    }
    e.data[t] = i;
} }
function Wo(e, t, n, o, r, i) { let s = e.length, a = s + 1; e.push(null, null); let c = s + 2, l = t.split(ls), u = 0; for (let d = 0; d < l.length; d++) {
    let f = l[d];
    if (d & 1) {
        let p = r + parseInt(f, 10);
        e.push(-1 - p), u = u | zI(p);
    }
    else
        f !== "" && e.push(f);
} return e.push(n << 2 | (o ? 1 : 0)), o && e.push(o, i), e[s] = u, e[a] = e.length - c, u; }
function MA(e) { let t = 0; for (let n = 0; n < e.length; n++) {
    let o = e[n];
    typeof o == "number" && o < 0 && t++;
} return t; }
function zI(e) { return 1 << Math.min(e, 31); }
function vg(e) { let t, n = "", o = 0, r = !1, i; for (; (t = yA.exec(e)) !== null;)
    r ? t[0] === `${Go}/*${i}${Go}` && (o = t.index, r = !1) : (n += e.substring(o, t.index + t[0].length), i = t[1], r = !0); return n += e.slice(o), n; }
function NA(e, t) { if (ay(t))
    return vg(e); {
    let n = e.indexOf(`:${t}${Go}`) + 2 + t.toString().length, o = e.search(new RegExp(`${Go}\\/\\*\\d+:${t}${Go}`));
    return vg(e.substring(n, o));
} }
function GI(e, t, n, o, r, i, s) { let a = 0, c = { type: i.type, currentCaseLViewIndex: Dr(t, n, 1, null), anchorIdx: s, cases: [], create: [], remove: [], update: [] }; bA(o, i, s), O_(t, s, c); let l = i.values, u = []; for (let d = 0; d < l.length; d++) {
    let f = l[d], p = [];
    for (let m = 0; m < f.length; m++) {
        let v = f[m];
        if (typeof v != "string") {
            let E = p.push(v) - 1;
            f[m] = `<!--\uFFFD${E}\uFFFD-->`;
        }
    }
    let g = [];
    u.push(g), a = wA(g, t, c, n, o, r, i.cases[d], f.join(""), p) | a;
} a && AA(o, a, s), e.push({ kind: 3, index: s, cases: u, currentCaseLViewIndex: c.currentCaseLViewIndex }); }
function _A(e) { let t = [], n = [], o = 1, r = 0; e = e.replace($I, function (s, a, c) { return c === "select" ? o = 0 : o = 1, r = parseInt(a.slice(1), 10), ""; }); let i = Bl(e); for (let s = 0; s < i.length;) {
    let a = i[s++].trim();
    o === 1 && (a = a.replace(/\s*(?:=)?(\w+)\s*/, "$1")), a.length && t.push(a);
    let c = Bl(i[s++]);
    t.length > n.length && n.push(c);
} return { type: o, mainBinding: r, cases: t, values: n }; }
function Bl(e) { if (!e)
    return []; let t = 0, n = [], o = [], r = /[{}]/g; r.lastIndex = 0; let i; for (; i = r.exec(e);) {
    let a = i.index;
    if (i[0] == "}") {
        if (n.pop(), n.length == 0) {
            let c = e.substring(t, a);
            $I.test(c) ? o.push(_A(c)) : o.push(c), t = a + 1;
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
function wA(e, t, n, o, r, i, s, a, c) { let l = [], u = [], d = []; n.cases.push(s), n.create.push(l), n.remove.push(u), n.update.push(d); let p = Xh(ys()).getInertBodyElement(a), g = pl(p) || p; return g ? WI(e, t, n, o, r, l, u, d, g, i, c, 0) : 0; }
function WI(e, t, n, o, r, i, s, a, c, l, u, d) { let f = 0, p = c.firstChild; for (; p;) {
    let g = Dr(t, o, 1, null);
    switch (p.nodeType) {
        case Node.ELEMENT_NODE:
            let m = p, v = m.tagName.toLowerCase();
            if (dl.hasOwnProperty(v)) {
                Vc(i, xI, v, l, g), t.data[g] = v;
                let Oe = m.attributes;
                for (let Ze = 0; Ze < Oe.length; Ze++) {
                    let Rt = Oe.item(Ze), Tf = Rt.name.toLowerCase();
                    !!Rt.value.match(ls) ? om.hasOwnProperty(Tf) && (mu[Tf] ? Wo(a, Rt.value, g, Rt.name, 0, Ss) : Wo(a, Rt.value, g, Rt.name, 0, null)) : RA(i, g, Rt);
                }
                let Me = { kind: 1, index: g, children: [] };
                e.push(Me), f = WI(Me.children, t, n, o, r, i, s, a, p, g, u, d + 1) | f, Ig(s, g, d);
            }
            break;
        case Node.TEXT_NODE:
            let E = p.textContent || "", A = E.match(ls);
            Vc(i, null, A ? "" : E, l, g), Ig(s, g, d), A && (f = Wo(a, E, g, null, 0, null) | f), e.push({ kind: 0, index: g });
            break;
        case Node.COMMENT_NODE:
            let X = mA.exec(p.textContent || "");
            if (X) {
                let Oe = parseInt(X[1], 10), Me = u[Oe];
                Vc(i, OI, "", l, g), GI(e, t, o, r, l, Me, g), SA(s, g, d);
            }
            break;
    }
    p = p.nextSibling;
} return f; }
function Ig(e, t, n) { n === 0 && e.push(t); }
function SA(e, t, n) { n === 0 && (e.push(~t), e.push(t)); }
function bA(e, t, n) { e.push(zI(t.mainBinding), 2, -1 - t.mainBinding, n << 2 | 2); }
function AA(e, t, n) { e.push(t, 1, n << 2 | 3); }
function Vc(e, t, n, o, r) { t !== null && e.push(t), e.push(n, r, j_(0, o, r)); }
function RA(e, t, n) { e.push(t << 1 | 1, n.name, n.value); }
var Eg = 0, kA = /\[(�.+?�?)\]/, xA = /\[(�.+?�?)\]|(�\/?\*\d+:\d+�)/g, OA = /({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g, LA = /{([A-Z0-9_]+)}/g, PA = /�I18N_EXP_(ICU(_\d+)?)�/g, FA = /\/\*/, HA = /\d+\:(\d+)/;
function jA(e, t = {}) { let n = e; if (kA.test(e)) {
    let o = {}, r = [Eg];
    n = n.replace(xA, (i, s, a) => { let c = s || a, l = o[c] || []; if (l.length || (c.split("|").forEach(m => { let v = m.match(HA), E = v ? parseInt(v[1], 10) : Eg, A = FA.test(m); l.push([E, A, m]); }), o[c] = l), !l.length)
        throw new Error(`i18n postprocess: unmatched placeholder - ${c}`); let u = r[r.length - 1], d = 0; for (let m = 0; m < l.length; m++)
        if (l[m][0] === u) {
            d = m;
            break;
        } let [f, p, g] = l[d]; return p ? r.pop() : u !== f && r.push(f), l.splice(d, 1), g; });
} return Object.keys(t).length && (n = n.replace(OA, (o, r, i, s, a, c) => t.hasOwnProperty(i) ? `${r}${t[i]}${c}` : o), n = n.replace(LA, (o, r) => t.hasOwnProperty(r) ? t[r] : o), n = n.replace(PA, (o, r) => { if (t.hasOwnProperty(r)) {
    let i = t[r];
    if (!i.length)
        throw new Error(`i18n postprocess: unmatched ICU - ${o} with key: ${r}`);
    return i.shift();
} return o; })), n; }
function Ld(e, t, n = -1) { let o = T(), r = h(), i = I + e, s = de(o.consts, t), a = hn(); if (o.firstCreatePass && DA(o, a === null ? 0 : a.index, r, i, s, n), o.type === 2) {
    let f = r[J];
    f[S] |= 32;
}
else
    r[S] |= 32; let c = o.data[i], l = a === r[ue] ? null : a, u = km(o, l, r), d = a && a.type & 8 ? r[a.index] : null; Y_(r, i, a, n), fA(r, c.create, u, d), cc(!0); }
function Pd() { cc(!1); }
function qI(e, t, n) { Ld(e, t, n), Pd(); }
function QI(e, t) { let n = T(), o = de(n.consts, t); TA(n, e + I, o); }
function Fd(e) { let t = h(); return lA(V(t, se(), e)), Fd; }
function ZI(e) { uA(T(), h(), e + I); }
function YI(e, t = {}) { return jA(e, t); }
function Hd(e, t, n) { let o = h(), r = T(), i = M(); return Bd(r, o, o[C], i, e, t, n), Hd; }
function jd(e, t) { let n = M(), o = h(), r = T(), i = ai(r.data), s = Um(i, n, o); return Bd(r, o, s, n, e, t), jd; }
function Vd(e, t, n) { let o = h(), r = T(), i = M(); return (i.type & 3 || n) && es(i, r, o, n, o[C], e, t, rt(i, o, t)), Vd; }
function Bd(e, t, n, o, r, i, s) { let a = !0, c = null; if ((o.type & 3 || s) && (c ??= rt(o, t, i), es(o, e, t, s, n, r, i, c) && (a = !1)), a) {
    let l = o.outputs?.[r], u = o.hostDirectiveOutputs?.[r];
    if (u && u.length)
        for (let d = 0; d < u.length; d += 2) {
            let f = u[d], p = u[d + 1];
            c ??= rt(o, t, i), Pn(o, t, f, p, r, c);
        }
    if (l && l.length)
        for (let d of l)
            c ??= rt(o, t, i), Pn(o, t, d, r, r, c);
} }
function KI(e = 1) { return tp(e); }
function VA(e, t) { let n = null, o = EN(e); for (let r = 0; r < t.length; r++) {
    let i = t[r];
    if (i === "*") {
        n = r;
        continue;
    }
    if (o === null ? Em(e, i, !0) : TN(o, i))
        return r;
} return n; }
function JI(e) { let t = h()[J][ue]; if (!t.projection) {
    let n = e ? e.length : 1, o = t.projection = Eo(n, null), r = o.slice(), i = t.child;
    for (; i !== null;) {
        if (i.type !== 128) {
            let s = e ? VA(i, e) : 0;
            s !== null && (r[s] ? r[s].projectionNext = i : o[s] = i, r[s] = i);
        }
        i = i.next;
    }
} }
function XI(e, t = 0, n, o, r, i) { let s = h(), a = T(), c = o ? e + 1 : null; c !== null && tn(s, a, c, o, r, i, null, n); let l = cn(a, I + e, 16, null, n || null); l.projection === null && (l.projection = t), oc(); let d = !s[ie] || bo(); s[J][ue].projection[l.projection] === null && c !== null ? BA(s, a, c) : d && !eo(l) && $N(a, s, l); }
function BA(e, t, n) { let o = I + n, r = t.data[o], i = e[o], s = er(i, r.tView.ssrId), a = io(e, r, void 0, { dehydratedView: s }); so(i, a, 0, Jt(r, s)); }
function $d(e, t, n, o) { return Qy(e, t, n, o), $d; }
function Ud(e, t, n) { return qy(e, t, n), Ud; }
function eE(e) { let t = h(), n = T(), o = ci(); Ao(o + 1); let r = Zu(n, o); if (e.dirty && $f(t) === ((r.metadata.flags & 2) === 2)) {
    if (r.matches === null)
        e.reset([]);
    else {
        let i = Yy(t, o);
        e.reset(i, sh), e.notifyOnChanges();
    }
    return !0;
} return !1; }
function tE() { return Qu(h(), ci()); }
function zd(e, t, n, o, r) { return Ky(t, Qy(e, n, o, r)), zd; }
function Gd(e, t, n, o) { return Ky(e, qy(t, n, o)), Gd; }
function nE(e = 1) { Ao(ci() + e); }
function oE(e) { let t = rc(); return Tt(t, I + e); }
function Mi(e, t) { return e << 17 | t << 2; }
function on(e) { return e >> 17 & 32767; }
function $A(e) { return (e & 2) == 2; }
function UA(e, t) { return e & 131071 | t << 17; }
function $l(e) { return e | 2; }
function Un(e) { return (e & 131068) >> 2; }
function Bc(e, t) { return e & -131069 | t << 2; }
function zA(e) { return (e & 1) === 1; }
function Ul(e) { return e | 1; }
function GA(e, t, n, o, r, i) { let s = i ? t.classBindings : t.styleBindings, a = on(s), c = Un(s); e[o] = n; let l = !1, u; if (Array.isArray(n)) {
    let d = n;
    u = d[1], (u === null || Kr(d, u) > 0) && (l = !0);
}
else
    u = n; if (r)
    if (c !== 0) {
        let f = on(e[a + 1]);
        e[o + 1] = Mi(f, a), f !== 0 && (e[f + 1] = Bc(e[f + 1], o)), e[a + 1] = UA(e[a + 1], o);
    }
    else
        e[o + 1] = Mi(a, 0), a !== 0 && (e[a + 1] = Bc(e[a + 1], o)), a = o;
else
    e[o + 1] = Mi(c, 0), a === 0 ? a = o : e[c + 1] = Bc(e[c + 1], o), c = o; l && (e[o + 1] = $l(e[o + 1])), Dg(e, u, o, !0), Dg(e, u, o, !1), WA(t, u, e, o, i), s = Mi(a, c), i ? t.classBindings = s : t.styleBindings = s; }
function WA(e, t, n, o, r) { let i = r ? e.residualClasses : e.residualStyles; i != null && typeof t == "string" && Kr(i, t) >= 0 && (n[o + 1] = Ul(n[o + 1])); }
function Dg(e, t, n, o) { let r = e[n + 1], i = t === null, s = o ? on(r) : Un(r), a = !1; for (; s !== 0 && (a === !1 || i);) {
    let c = e[s], l = e[s + 1];
    qA(c, t) && (a = !0, e[s + 1] = o ? Ul(l) : $l(l)), s = o ? on(l) : Un(l);
} a && (e[n + 1] = o ? $l(r) : Ul(r)); }
function qA(e, t) { return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t ? !0 : Array.isArray(e) && typeof t == "string" ? Kr(e, t) >= 0 : !1; }
var re = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function rE(e) { return e.substring(re.key, re.keyEnd); }
function QA(e) { return e.substring(re.value, re.valueEnd); }
function ZA(e) { return aE(e), iE(e, zn(e, 0, re.textEnd)); }
function iE(e, t) { let n = re.textEnd; return n === t ? -1 : (t = re.keyEnd = KA(e, re.key = t, n), zn(e, t, n)); }
function YA(e) { return aE(e), sE(e, zn(e, 0, re.textEnd)); }
function sE(e, t) { let n = re.textEnd, o = re.key = zn(e, t, n); return n === o ? -1 : (o = re.keyEnd = JA(e, o, n), o = Cg(e, o, n, 58), o = re.value = zn(e, o, n), o = re.valueEnd = XA(e, o, n), Cg(e, o, n, 59)); }
function aE(e) { re.key = 0, re.keyEnd = 0, re.value = 0, re.valueEnd = 0, re.textEnd = e.length; }
function zn(e, t, n) { for (; t < n && e.charCodeAt(t) <= 32;)
    t++; return t; }
function KA(e, t, n) { for (; t < n && e.charCodeAt(t) > 32;)
    t++; return t; }
function JA(e, t, n) { let o; for (; t < n && ((o = e.charCodeAt(t)) === 45 || o === 95 || (o & -33) >= 65 && (o & -33) <= 90 || o >= 48 && o <= 57);)
    t++; return t; }
function Cg(e, t, n, o) { return t = zn(e, t, n), t < n && t++, t; }
function XA(e, t, n) { let o = -1, r = -1, i = -1, s = t, a = s; for (; s < n;) {
    let c = e.charCodeAt(s++);
    if (c === 59)
        return a;
    c === 34 || c === 39 ? a = s = Tg(e, c, s, n) : t === s - 4 && i === 85 && r === 82 && o === 76 && c === 40 ? a = s = Tg(e, 41, s, n) : c > 32 && (a = s), i = r, r = o, o = c & -33;
} return a; }
function Tg(e, t, n, o) { let r = -1, i = n; for (; i < o;) {
    let s = e.charCodeAt(i++);
    if (s == t && r !== 92)
        return i;
    s == 92 && r === 92 ? r = 0 : r = s;
} throw new Error; }
function Wd(e, t, n) { return uE(e, t, n, !1), Wd; }
function qd(e, t) { return uE(e, t, null, !0), qd; }
function cE(e) { dE(gE, eR, e, !1); }
function eR(e, t) { for (let n = YA(t); n >= 0; n = sE(t, n))
    gE(e, rE(t), QA(t)); }
function lE(e) { dE(aR, tR, e, !0); }
function tR(e, t) { for (let n = ZA(t); n >= 0; n = iE(t, n))
    Do(e, rE(t), !0); }
function uE(e, t, n, o) { let r = h(), i = T(), s = Ge(2); if (i.firstUpdatePass && pE(i, e, s, o), t !== L && V(r, s, t)) {
    let a = i.data[ae()];
    hE(i, a, r, r[C], e, r[s + 1] = lR(t, n), o, s);
} }
function dE(e, t, n, o) { let r = T(), i = Ge(2); r.firstUpdatePass && pE(r, null, i, o); let s = h(); if (n !== L && V(s, i, n)) {
    let a = r.data[ae()];
    if (mE(a, o) && !fE(r, i)) {
        let c = o ? a.classesWithoutHost : a.stylesWithoutHost;
        c !== null && (n = $r(c, n || "")), Vl(r, a, s, n, o);
    }
    else
        cR(r, a, s, s[C], s[i + 1], s[i + 1] = sR(e, t, n), o, i);
} }
function fE(e, t) { return t >= e.expandoStartIndex; }
function pE(e, t, n, o) { let r = e.data; if (r[n + 1] === null) {
    let i = r[ae()], s = fE(e, n);
    mE(i, o) && t === null && !s && (t = !1), t = nR(r, i, t, o), GA(r, i, t, n, s, o);
} }
function nR(e, t, n, o) { let r = ai(e), i = o ? t.residualClasses : t.residualStyles; if (r === null)
    (o ? t.classBindings : t.styleBindings) === 0 && (n = $c(null, e, t, n, o), n = ar(n, t.attrs, o), i = null);
else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== r)
        if (n = $c(r, e, t, n, o), i === null) {
            let c = oR(e, t, o);
            c !== void 0 && Array.isArray(c) && (c = $c(null, e, t, c[1], o), c = ar(c, t.attrs, o), rR(e, t, o, c));
        }
        else
            i = iR(e, t, o);
} return i !== void 0 && (o ? t.residualClasses = i : t.residualStyles = i), n; }
function oR(e, t, n) { let o = n ? t.classBindings : t.styleBindings; if (Un(o) !== 0)
    return e[on(o)]; }
function rR(e, t, n, o) { let r = n ? t.classBindings : t.styleBindings; e[on(r)] = o; }
function iR(e, t, n) { let o, r = t.directiveEnd; for (let i = 1 + t.directiveStylingLast; i < r; i++) {
    let s = e[i].hostAttrs;
    o = ar(o, s, n);
} return ar(o, t.attrs, n); }
function $c(e, t, n, o, r) { let i = null, s = n.directiveEnd, a = n.directiveStylingLast; for (a === -1 ? a = n.directiveStart : a++; a < s && (i = t[a], o = ar(o, i.hostAttrs, r), i !== e);)
    a++; return e !== null && (n.directiveStylingLast = a), o; }
function ar(e, t, n) { let o = n ? 1 : 2, r = -1; if (t !== null)
    for (let i = 0; i < t.length; i++) {
        let s = t[i];
        typeof s == "number" ? r = s : r === o && (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]), Do(e, s, n ? !0 : t[++i]));
    } return e === void 0 ? null : e; }
function sR(e, t, n) { if (n == null || n === "")
    return P; let o = [], r = dt(n); if (Array.isArray(r))
    for (let i = 0; i < r.length; i++)
        e(o, r[i], !0);
else if (typeof r == "object")
    for (let i in r)
        r.hasOwnProperty(i) && e(o, i, r[i]);
else
    typeof r == "string" && t(o, r); return o; }
function gE(e, t, n) { Do(e, t, dt(n)); }
function aR(e, t, n) { let o = String(t); o !== "" && !o.includes(" ") && Do(e, o, n); }
function cR(e, t, n, o, r, i, s, a) { r === L && (r = P); let c = 0, l = 0, u = 0 < r.length ? r[0] : null, d = 0 < i.length ? i[0] : null; for (; u !== null || d !== null;) {
    let f = c < r.length ? r[c + 1] : void 0, p = l < i.length ? i[l + 1] : void 0, g = null, m;
    u === d ? (c += 2, l += 2, f !== p && (g = d, m = p)) : d === null || u !== null && u < d ? (c += 2, g = u) : (l += 2, g = d, m = p), g !== null && hE(e, t, n, o, g, m, s, a), u = c < r.length ? r[c] : null, d = l < i.length ? i[l] : null;
} }
function hE(e, t, n, o, r, i, s, a) { if (!(t.type & 3))
    return; let c = e.data, l = c[a + 1], u = zA(l) ? Mg(c, t, n, r, Un(l), s) : void 0; if (!us(u)) {
    us(i) || $A(l) && (i = Mg(c, null, n, r, a, s));
    let d = Ft(ae(), n);
    zN(o, s, d, r, i);
} }
function Mg(e, t, n, o, r, i) { let s = t === null, a; for (; r > 0;) {
    let c = e[r], l = Array.isArray(c), u = l ? c[1] : c, d = u === null, f = n[r + 1];
    f === L && (f = d ? P : void 0);
    let p = d ? Yr(f, o) : u === o ? f : void 0;
    if (l && !us(p) && (p = Yr(c, o)), us(p) && (a = p, s))
        return a;
    let g = e[r + 1];
    r = s ? on(g) : Un(g);
} if (t !== null) {
    let c = i ? t.residualClasses : t.residualStyles;
    c != null && (a = Yr(c, o));
} return a; }
function us(e) { return e !== void 0; }
function lR(e, t) { return e == null || e === "" || (typeof t == "string" ? e = e + t : typeof e == "object" && (e = Br(dt(e)))), e; }
function mE(e, t) { return (e.flags & (t ? 8 : 16)) !== 0; }
function yE(e, t = "") { let n = h(), o = T(), r = e + I, i = o.firstCreatePass ? cn(o, r, 1, t, null) : o.data[r], s = vE(o, n, i, t, e); n[r] = s, Ro() && xu(o, n, s, i), ze(i, !1); }
var vE = (e, t, n, o, r) => (je(!0), yu(t[C], o));
function uR(e, t, n, o, r) { let i = !ws(t, n); if (je(i), i)
    return yu(t[C], o); let s = t[ie]; return Mr(s, e, t, n); }
function IE() { vE = uR; }
function EE(e, t) { let n = !1, o = He(); for (let i = 1; i < t.length; i += 2)
    n = V(e, o++, t[i]) || n; if (ac(o), !n)
    return L; let r = t[0]; for (let i = 1; i < t.length; i += 2)
    r += N(t[i]) + (i + 1 !== t.length ? t[i + 1] : ""); return r; }
function DE(e, t, n, o = "") { return V(e, se(), n) ? t + N(n) + o : L; }
function CE(e, t, n, o, r, i = "") { let s = He(), a = Xt(e, s, n, r); return Ge(2), a ? t + N(n) + o + N(r) + i : L; }
function TE(e, t, n, o, r, i, s, a = "") { let c = He(), l = ea(e, c, n, r, s); return Ge(3), l ? t + N(n) + o + N(r) + i + N(s) + a : L; }
function ME(e, t, n, o, r, i, s, a, c, l = "") { let u = He(), d = ke(e, u, n, r, s, c); return Ge(4), d ? t + N(n) + o + N(r) + i + N(s) + a + N(c) + l : L; }
function NE(e, t, n, o, r, i, s, a, c, l, u, d = "") { let f = He(), p = ke(e, f, n, r, s, c); return p = V(e, f + 4, u) || p, Ge(5), p ? t + N(n) + o + N(r) + i + N(s) + a + N(c) + l + N(u) + d : L; }
function _E(e, t, n, o, r, i, s, a, c, l, u, d, f, p = "") { let g = He(), m = ke(e, g, n, r, s, c); return m = Xt(e, g + 4, u, f) || m, Ge(6), m ? t + N(n) + o + N(r) + i + N(s) + a + N(c) + l + N(u) + d + N(f) + p : L; }
function wE(e, t, n, o, r, i, s, a, c, l, u, d, f, p, g, m = "") { let v = He(), E = ke(e, v, n, r, s, c); return E = ea(e, v + 4, u, f, g) || E, Ge(7), E ? t + N(n) + o + N(r) + i + N(s) + a + N(c) + l + N(u) + d + N(f) + p + N(g) + m : L; }
function SE(e, t, n, o, r, i, s, a, c, l, u, d, f, p, g, m, v, E = "") { let A = He(), X = ke(e, A, n, r, s, c); return X = ke(e, A + 4, u, f, g, v) || X, Ge(8), X ? t + N(n) + o + N(r) + i + N(s) + a + N(c) + l + N(u) + d + N(f) + p + N(g) + m + N(v) + E : L; }
function Qd(e) { return Ia("", e), Qd; }
function Ia(e, t, n) { let o = h(), r = DE(o, e, t, n); return r !== L && ht(o, ae(), r), Ia; }
function Zd(e, t, n, o, r) { let i = h(), s = CE(i, e, t, n, o, r); return s !== L && ht(i, ae(), s), Zd; }
function Yd(e, t, n, o, r, i, s) { let a = h(), c = TE(a, e, t, n, o, r, i, s); return c !== L && ht(a, ae(), c), Yd; }
function Kd(e, t, n, o, r, i, s, a, c) { let l = h(), u = ME(l, e, t, n, o, r, i, s, a, c); return u !== L && ht(l, ae(), u), Kd; }
function Jd(e, t, n, o, r, i, s, a, c, l, u) { let d = h(), f = NE(d, e, t, n, o, r, i, s, a, c, l, u); return f !== L && ht(d, ae(), f), Jd; }
function Xd(e, t, n, o, r, i, s, a, c, l, u, d, f) { let p = h(), g = _E(p, e, t, n, o, r, i, s, a, c, l, u, d, f); return g !== L && ht(p, ae(), g), Xd; }
function ef(e, t, n, o, r, i, s, a, c, l, u, d, f, p, g) { let m = h(), v = wE(m, e, t, n, o, r, i, s, a, c, l, u, d, f, p, g); return v !== L && ht(m, ae(), v), ef; }
function tf(e, t, n, o, r, i, s, a, c, l, u, d, f, p, g, m, v) { let E = h(), A = SE(E, e, t, n, o, r, i, s, a, c, l, u, d, f, p, g, m, v); return A !== L && ht(E, ae(), A), tf; }
function nf(e) { let t = h(), n = EE(t, e); return n !== L && ht(t, ae(), n), nf; }
function ht(e, t, n) { let o = Ft(t, e); sm(e[C], o, n); }
function of(e, t, n) { ud(t) && (t = t()); let o = h(), r = se(); if (V(o, r, t)) {
    let i = T(), s = me();
    js(s, o, e, t, o[C], n);
} return of; }
function bE(e, t) { let n = ud(e); return n && e.set(t), n; }
function rf(e, t) { let n = h(), o = T(), r = M(); return Bd(o, n, n[C], r, e, t), rf; }
var AE = {};
function sf(e) { Q("NgLet"); let t = T(), n = h(), o = e + I, r = cn(t, o, 128, null, null); return ze(r, !1), wo(t, n, o, AE), sf; }
function RE(e) { let t = T(), n = h(), o = ae(); return wo(t, n, o, e), e; }
function kE(e) { let t = rc(), n = Tt(t, I + e); if (n === AE)
    throw new _(314, !1); return n; }
function xE(e, t) { let n = T(), o = h(), r = o[C], i = "data-ng-source-location"; for (let [s, a, c, l] of t) {
    let u = Ct(n, s + I), d = Ft(s + I, o);
    if (!d.hasAttribute(i)) {
        let f = `${e}@o:${a},l:${c},c:${l}`;
        r.setAttribute(d, i, f);
    }
} }
function OE(e) { return V(h(), se(), e) ? N(e) : L; }
function LE(e, t, n = "") { return DE(h(), e, t, n); }
function PE(e, t, n, o, r = "") { return CE(h(), e, t, n, o, r); }
function FE(e, t, n, o, r, i, s = "") { return TE(h(), e, t, n, o, r, i, s); }
function HE(e, t, n, o, r, i, s, a, c = "") { return ME(h(), e, t, n, o, r, i, s, a, c); }
function jE(e, t, n, o, r, i, s, a, c, l, u = "") { return NE(h(), e, t, n, o, r, i, s, a, c, l, u); }
function VE(e, t, n, o, r, i, s, a, c, l, u, d, f = "") { return _E(h(), e, t, n, o, r, i, s, a, c, l, u, d, f); }
function BE(e, t, n, o, r, i, s, a, c, l, u, d, f, p, g = "") { return wE(h(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, g); }
function $E(e, t, n, o, r, i, s, a, c, l, u, d, f, p, g, m, v = "") { return SE(h(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, g, m, v); }
function UE(e) { return EE(h(), e); }
function Ng(e, t, n) { let o = T(); o.firstCreatePass && zE(t, o.data, o.blueprint, be(e), n); }
function zE(e, t, n, o, r) { if (e = z(e), Array.isArray(e))
    for (let i = 0; i < e.length; i++)
        zE(e[i], t, n, o, r);
else {
    let i = T(), s = h(), a = M(), c = Jr(e) ? e : z(e.provide), l = Pf(e), u = a.providerIndexes & 1048575, d = a.directiveStart, f = a.providerIndexes >> 20;
    if (Jr(e) || !e.multi) {
        let p = new Qt(l, r, co, null), g = zc(c, t, r ? u : u + f, d);
        g === -1 ? (Yc(Bi(a, s), i, c), Uc(i, e, t.length), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(p), s.push(p)) : (n[g] = p, s[g] = p);
    }
    else {
        let p = zc(c, t, u + f, d), g = zc(c, t, u, u + f), m = p >= 0 && n[p], v = g >= 0 && n[g];
        if (r && !v || !r && !m) {
            Yc(Bi(a, s), i, c);
            let E = pR(r ? fR : dR, n.length, r, o, l, e);
            !r && v && (n[g].providerFactory = E), Uc(i, e, t.length, 0), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(E), s.push(E);
        }
        else {
            let E = GE(n[r ? g : p], l, !r && o);
            Uc(i, e, p > -1 ? p : g, E);
        }
        !r && o && v && n[g].componentProviders++;
    }
} }
function Uc(e, t, n, o) { let r = Jr(t), i = Of(t); if (r || i) {
    let c = (i ? z(t.useClass) : t).prototype.ngOnDestroy;
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
function GE(e, t, n) { return n && e.componentProviders++, e.multi.push(t) - 1; }
function zc(e, t, n, o) { for (let r = n; r < o; r++)
    if (t[r] === e)
        return r; return -1; }
function dR(e, t, n, o, r) { return zl(this.multi, []); }
function fR(e, t, n, o, r) { let i = this.multi, s; if (this.providerFactory) {
    let a = this.providerFactory.componentProviders, c = Qo(o, o[y], this.providerFactory.index, r);
    s = c.slice(0, a), zl(i, s);
    for (let l = a; l < c.length; l++)
        s.push(c[l]);
}
else
    s = [], zl(i, s); return s; }
function zl(e, t) { for (let n = 0; n < e.length; n++) {
    let o = e[n];
    t.push(o());
} return t; }
function pR(e, t, n, o, r, i) { let s = new Qt(e, n, co, null); return s.multi = [], s.index = t, s.componentProviders = 0, GE(s, r, o && !n), s; }
function WE(e, t) { return n => { n.providersResolver = (o, r) => Ng(o, r ? r(e) : e, !1), t && (n.viewProvidersResolver = (o, r) => Ng(o, r ? r(t) : t, !0)); }; }
function qE(e) { return t => { e.length < 1 || (t.getExternalStyles = n => e.map(r => r + "?ngcomp" + (n ? "=" + encodeURIComponent(n) : "") + "&e=" + t.encapsulation)); }; }
function QE(e, t, n) { let o = e.\u0275cmp; o.directiveDefs = rs(t, sv), o.pipeDefs = rs(n, Be); }
function ZE(e, t) { return qe(() => { let n = qr(e); n.declarations = Ni(t.declarations || P), n.imports = Ni(t.imports || P), n.exports = Ni(t.exports || P), t.bootstrap && (n.bootstrap = Ni(t.bootstrap)), Ln.registerNgModule(e, t); }); }
function Ni(e) { if (typeof e == "function")
    return e; let t = Pe(e); return t.some(Ur) ? () => t.map(z).map(_g) : t.map(_g); }
function _g(e) { return Uu(e) ? e.ngModule : e; }
function YE(e, t) { let n = pe() + e, o = h(); return o[n] === L ? Qe(o, n, t()) : _r(o, n); }
function KE(e, t, n) { return sD(h(), pe(), e, t, n); }
function JE(e, t, n, o) { return aD(h(), pe(), e, t, n, o); }
function XE(e, t, n, o, r) { return cD(h(), pe(), e, t, n, o, r); }
function eD(e, t, n, o, r, i, s) { return lD(h(), pe(), e, t, n, o, r, i); }
function tD(e, t, n, o, r, i, s) { let a = pe() + e, c = h(), l = ke(c, a, n, o, r, i); return V(c, a + 4, s) || l ? Qe(c, a + 5, t(n, o, r, i, s)) : _r(c, a + 5); }
function nD(e, t, n, o, r, i, s, a) { let c = pe() + e, l = h(), u = ke(l, c, n, o, r, i); return Xt(l, c + 4, s, a) || u ? Qe(l, c + 6, t(n, o, r, i, s, a)) : _r(l, c + 6); }
function oD(e, t, n, o, r, i, s, a, c) { let l = pe() + e, u = h(), d = ke(u, l, n, o, r, i); return ea(u, l + 4, s, a, c) || d ? Qe(u, l + 7, t(n, o, r, i, s, a, c)) : _r(u, l + 7); }
function rD(e, t, n, o, r, i, s, a, c, l) { let u = pe() + e, d = h(), f = ke(d, u, n, o, r, i); return ke(d, u + 4, s, a, c, l) || f ? Qe(d, u + 8, t(n, o, r, i, s, a, c, l)) : _r(d, u + 8); }
function iD(e, t, n) { return uD(h(), pe(), e, t, n); }
function xr(e, t) { let n = e[t]; return n === L ? void 0 : n; }
function sD(e, t, n, o, r, i) { let s = t + n; return V(e, s, r) ? Qe(e, s + 1, i ? o.call(i, r) : o(r)) : xr(e, s + 1); }
function aD(e, t, n, o, r, i, s) { let a = t + n; return Xt(e, a, r, i) ? Qe(e, a + 2, s ? o.call(s, r, i) : o(r, i)) : xr(e, a + 2); }
function cD(e, t, n, o, r, i, s, a) { let c = t + n; return ea(e, c, r, i, s) ? Qe(e, c + 3, a ? o.call(a, r, i, s) : o(r, i, s)) : xr(e, c + 3); }
function lD(e, t, n, o, r, i, s, a, c) { let l = t + n; return ke(e, l, r, i, s, a) ? Qe(e, l + 4, c ? o.call(c, r, i, s, a) : o(r, i, s, a)) : xr(e, l + 4); }
function uD(e, t, n, o, r, i) { let s = t + n, a = !1; for (let c = 0; c < r.length; c++)
    V(e, s++, r[c]) && (a = !0); return a ? Qe(e, s, o.apply(i, r)) : xr(e, s); }
function dD(e, t) { let n = T(), o, r = e + I; n.firstCreatePass ? (o = gR(t, n.pipeRegistry), n.data[r] = o, o.onDestroy && (n.destroyHooks ??= []).push(r, o.onDestroy)) : o = n.data[r]; let i = o.factory || (o.factory = Zr(o.type, !0)), s, a = xt(co); try {
    let c = Vi(!1), l = i();
    return Vi(c), wo(n, h(), r, l), l;
}
finally {
    xt(a);
} }
function gR(e, t) { if (t)
    for (let n = t.length - 1; n >= 0; n--) {
        let o = t[n];
        if (e === o.name)
            return o;
    } }
function fD(e, t, n) { let o = e + I, r = h(), i = Tt(r, o); return Or(r, o) ? sD(r, pe(), t, i.transform, n, i) : i.transform(n); }
function pD(e, t, n, o) { let r = e + I, i = h(), s = Tt(i, r); return Or(i, r) ? aD(i, pe(), t, s.transform, n, o, s) : s.transform(n, o); }
function gD(e, t, n, o, r) { let i = e + I, s = h(), a = Tt(s, i); return Or(s, i) ? cD(s, pe(), t, a.transform, n, o, r, a) : a.transform(n, o, r); }
function hD(e, t, n, o, r, i) { let s = e + I, a = h(), c = Tt(a, s); return Or(a, s) ? lD(a, pe(), t, c.transform, n, o, r, i, c) : c.transform(n, o, r, i); }
function mD(e, t, n) { let o = e + I, r = h(), i = Tt(r, o); return Or(r, o) ? uD(r, pe(), t, i.transform, n, i) : i.transform.apply(i, n); }
function Or(e, t) { return e[y].data[t].pure; }
function yD(e, t) { return Ws(e, t); }
function vD(e, t) { return () => { try {
    return Ln.getComponentDependencies(e, t).dependencies;
}
catch (n) {
    throw console.error(`Computing dependencies in local compilation mode for the component "${e.name}" failed with the exception:`, n), n;
} }; }
function ID(e, t) { let n = G(e); n !== null && (n.debugInfo = t); }
function ED(e, t, n) { let o = `./@ng/component?c=${e}&t=${encodeURIComponent(t)}`; return new URL(o, n).href; }
function DD(e, t, n, o, r = null, i = null) { let s = G(e); t.apply(null, [e, n, ...o]); let { newDef: a, oldDef: c } = hR(s, G(e)); if (e[un] = a, c.tView) {
    let l = FT().values();
    for (let u of l)
        Ue(u) && u[q] === null && Li(r, i, a, c, u);
} }
function hR(e, t) { let n = Y({}, e); return { newDef: Object.assign(e, t, { directiveDefs: n.directiveDefs, pipeDefs: n.pipeDefs, setInput: n.setInput, type: n.type }), oldDef: n }; }
function Li(e, t, n, o, r) { let i = r[y]; if (i === o.tView) {
    yR(e, t, n, o, r);
    return;
} for (let s = I; s < i.bindingStartIndex; s++) {
    let a = r[s];
    if (te(a)) {
        ee(a[j]) && Li(e, t, n, o, a[j]);
        for (let c = H; c < a.length; c++)
            Li(e, t, n, o, a[c]);
    }
    else
        ee(a) && Li(e, t, n, o, a);
} }
function mR(e, t) { e.componentReplaced?.(t.id); }
function yR(e, t, n, o, r) { let i = r[F], s = r[j], a = r[q], c = r[ue], l = r[R].get($, null), u = () => { if (o.encapsulation === Re.ShadowDom || o.encapsulation === Re.ExperimentalIsolatedShadowDom) {
    let g = s.cloneNode(!1);
    s.replaceWith(g), s = g;
} let d = Dm(n), f = As(a, d, i, Mu(n), s, c, null, null, null, null, null); vR(a, r, f, c.index), Cr(r[y], r); let p = r[Xe].rendererFactory; mR(p, o), f[C] = p.createRenderer(s, n), Am(r[y], r), IR(c), zs(d, f, i), Zm(d, f, d.template, i); }; l === null ? wg(e, t, u) : l.run(() => wg(e, t, u)); }
function wg(e, t, n) {
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
function vR(e, t, n, o) { for (let r = I; r < e[y].bindingStartIndex; r++) {
    let i = e[r];
    if ((ee(i) || te(i)) && i[le] === t) {
        i[le] = n;
        break;
    }
} e[Et] === t && (e[Et] = n), e[Co] === t && (e[Co] = n), n[le] = t[le], t[le] = null, e[o] = n; }
function IR(e) { if (e.projection !== null) {
    for (let t of e.projection)
        fs(t) && (t.projectionNext = null, t.flags &= -3);
    e.projection = null;
} }
var ge = { \u0275\u0275animateEnter: Vo, \u0275\u0275animateEnterListener: Bo, \u0275\u0275animateLeave: $o, \u0275\u0275animateLeaveListener: ss, \u0275\u0275attribute: vd, \u0275\u0275defineComponent: iv, \u0275\u0275defineDirective: av, \u0275\u0275defineInjectable: B, \u0275\u0275defineInjector: yo, \u0275\u0275defineNgModule: od, \u0275\u0275definePipe: cv, \u0275\u0275directiveInject: co, \u0275\u0275getInheritedFactory: nh, \u0275\u0275inject: Le, \u0275\u0275injectAttribute: ps, \u0275\u0275invalidFactory: by, \u0275\u0275invalidFactoryDep: Qr, \u0275\u0275templateRefExtractor: yD, \u0275\u0275resetView: tc, \u0275\u0275HostDirectivesFeature: dv, \u0275\u0275NgOnChangesFeature: Bg, \u0275\u0275ProvidersFeature: WE, \u0275\u0275InheritDefinitionFeature: rd, \u0275\u0275ExternalStylesFeature: qE, \u0275\u0275nextContext: KI, \u0275\u0275namespaceHTML: gc, \u0275\u0275namespaceMathML: pc, \u0275\u0275namespaceSVG: fc, \u0275\u0275enableBindings: Ka, \u0275\u0275disableBindings: Ja, \u0275\u0275elementStart: pa, \u0275\u0275elementEnd: ga, \u0275\u0275element: Nd, \u0275\u0275elementContainerStart: ya, \u0275\u0275elementContainerEnd: Rr, \u0275\u0275domElement: _d, \u0275\u0275domElementStart: ha, \u0275\u0275domElementEnd: ma, \u0275\u0275domElementContainer: Ad, \u0275\u0275domElementContainerStart: va, \u0275\u0275domElementContainerEnd: bd, \u0275\u0275domTemplate: sd, \u0275\u0275domListener: Vd, \u0275\u0275elementContainer: Sd, \u0275\u0275pureFunction0: YE, \u0275\u0275pureFunction1: KE, \u0275\u0275pureFunction2: JE, \u0275\u0275pureFunction3: XE, \u0275\u0275pureFunction4: eD, \u0275\u0275pureFunction5: tD, \u0275\u0275pureFunction6: nD, \u0275\u0275pureFunction7: oD, \u0275\u0275pureFunction8: rD, \u0275\u0275pureFunctionV: iD, \u0275\u0275getCurrentView: RI, \u0275\u0275restoreView: ec, \u0275\u0275listener: Hd, \u0275\u0275projection: XI, \u0275\u0275syntheticHostProperty: xd, \u0275\u0275syntheticHostListener: jd, \u0275\u0275pipeBind1: fD, \u0275\u0275pipeBind2: pD, \u0275\u0275pipeBind3: gD, \u0275\u0275pipeBind4: hD, \u0275\u0275pipeBindV: mD, \u0275\u0275projectionDef: JI, \u0275\u0275domProperty: kd, \u0275\u0275ariaProperty: yd, \u0275\u0275property: Md, \u0275\u0275control: yI, \u0275\u0275controlCreate: mI, \u0275\u0275pipe: dD, \u0275\u0275queryRefresh: eE, \u0275\u0275queryAdvance: nE, \u0275\u0275viewQuery: Ud, \u0275\u0275viewQuerySignal: Gd, \u0275\u0275loadQuery: tE, \u0275\u0275contentQuery: $d, \u0275\u0275contentQuerySignal: zd, \u0275\u0275reference: oE, \u0275\u0275classMap: lE, \u0275\u0275styleMap: cE, \u0275\u0275styleProp: Wd, \u0275\u0275classProp: qd, \u0275\u0275advance: Cm, \u0275\u0275template: id, \u0275\u0275conditional: MI, \u0275\u0275conditionalCreate: TI, \u0275\u0275conditionalBranchCreate: fa, \u0275\u0275defer: Bv, \u0275\u0275deferWhen: $v, \u0275\u0275deferOnIdle: Wv, \u0275\u0275deferOnImmediate: Zv, \u0275\u0275deferOnTimer: Jv, \u0275\u0275deferOnHover: tI, \u0275\u0275deferOnInteraction: rI, \u0275\u0275deferOnViewport: aI, \u0275\u0275deferPrefetchWhen: Uv, \u0275\u0275deferPrefetchOnIdle: qv, \u0275\u0275deferPrefetchOnImmediate: Yv, \u0275\u0275deferPrefetchOnTimer: Xv, \u0275\u0275deferPrefetchOnHover: nI, \u0275\u0275deferPrefetchOnInteraction: iI, \u0275\u0275deferPrefetchOnViewport: cI, \u0275\u0275deferHydrateWhen: zv, \u0275\u0275deferHydrateNever: Gv, \u0275\u0275deferHydrateOnIdle: Qv, \u0275\u0275deferHydrateOnImmediate: Kv, \u0275\u0275deferHydrateOnTimer: eI, \u0275\u0275deferHydrateOnHover: oI, \u0275\u0275deferHydrateOnInteraction: sI, \u0275\u0275deferHydrateOnViewport: lI, \u0275\u0275deferEnableTimerScheduling: _v, \u0275\u0275repeater: SI, \u0275\u0275repeaterCreate: wI, \u0275\u0275repeaterTrackByIndex: NI, \u0275\u0275repeaterTrackByIdentity: _I, \u0275\u0275componentInstance: hI, \u0275\u0275text: yE, \u0275\u0275textInterpolate: Qd, \u0275\u0275textInterpolate1: Ia, \u0275\u0275textInterpolate2: Zd, \u0275\u0275textInterpolate3: Yd, \u0275\u0275textInterpolate4: Kd, \u0275\u0275textInterpolate5: Jd, \u0275\u0275textInterpolate6: Xd, \u0275\u0275textInterpolate7: ef, \u0275\u0275textInterpolate8: tf, \u0275\u0275textInterpolateV: nf, \u0275\u0275i18n: qI, \u0275\u0275i18nAttributes: QI, \u0275\u0275i18nExp: Fd, \u0275\u0275i18nStart: Ld, \u0275\u0275i18nEnd: Pd, \u0275\u0275i18nApply: ZI, \u0275\u0275i18nPostprocess: YI, \u0275\u0275resolveWindow: ym, \u0275\u0275resolveDocument: vm, \u0275\u0275resolveBody: Du, \u0275\u0275setComponentScope: QE, \u0275\u0275setNgModuleScope: ZE, \u0275\u0275registerNgModuleType: ed, \u0275\u0275getComponentDepsFactory: vD, \u0275setClassDebugInfo: ID, \u0275\u0275declareLet: sf, \u0275\u0275storeLet: RE, \u0275\u0275readContextLet: kE, \u0275\u0275attachSourceLocations: xE, \u0275\u0275interpolate: OE, \u0275\u0275interpolate1: LE, \u0275\u0275interpolate2: PE, \u0275\u0275interpolate3: FE, \u0275\u0275interpolate4: HE, \u0275\u0275interpolate5: jE, \u0275\u0275interpolate6: VE, \u0275\u0275interpolate7: BE, \u0275\u0275interpolate8: $E, \u0275\u0275interpolateV: UE, \u0275\u0275sanitizeHtml: um, \u0275\u0275sanitizeStyle: dm, \u0275\u0275sanitizeResourceUrl: Eu, \u0275\u0275sanitizeScript: fm, \u0275\u0275validateAttribute: mm, \u0275\u0275sanitizeUrl: Iu, \u0275\u0275sanitizeUrlOrResourceUrl: hm, \u0275\u0275trustConstantHtml: pm, \u0275\u0275trustConstantResourceUrl: gm, forwardRef: xa, resolveForwardRef: z, \u0275\u0275twoWayProperty: of, \u0275\u0275twoWayBindingSet: bE, \u0275\u0275twoWayListener: rf, \u0275\u0275replaceMetadata: DD, \u0275\u0275getReplaceMetadataURL: ED }, Mn = null;
function CD(e) { Mn !== null && (e.defaultEncapsulation !== Mn.defaultEncapsulation || e.preserveWhitespaces !== Mn.preserveWhitespaces) || (Mn = e); }
function ER() { return Mn; }
function DR() { Mn = null; }
var qo = [];
function CR(e, t) { qo.push({ moduleType: e, ngModule: t }); }
var Gc = !1;
function TD() { if (!Gc) {
    Gc = !0;
    try {
        for (let e = qo.length - 1; e >= 0; e--) {
            let { moduleType: t, ngModule: n } = qo[e];
            n.declarations && n.declarations.every(MD) && (qo.splice(e, 1), wR(t, n));
        }
    }
    finally {
        Gc = !1;
    }
} }
function MD(e) { return Array.isArray(e) ? e.every(MD) : !!z(e); }
function ND(e, t = {}) { _D(e, t), t.id !== void 0 && ed(e, t.id), CR(e, t); }
function _D(e, t, n = !1) { let o = Pe(t.declarations || P), r = null; Object.defineProperty(e, La, { configurable: !0, get: () => (r === null && (r = oe({ usage: 0, kind: "NgModule", type: e }).compileNgModule(ge, `ng:///${e.name}/\u0275mod.js`, { type: e, bootstrap: Pe(t.bootstrap || P).map(z), declarations: o.map(z), imports: Pe(t.imports || P).map(z).map(Sg), exports: Pe(t.exports || P).map(z).map(Sg), schemas: t.schemas ? Pe(t.schemas) : null, id: t.id || null }), r.schemas || (r.schemas = [])), r) }); let i = null; Object.defineProperty(e, yt, { get: () => { if (i === null) {
        let a = oe({ usage: 0, kind: "NgModule", type: e });
        i = a.compileFactory(ge, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, deps: gs(e), target: a.FactoryTarget.NgModule, typeArgumentCount: 0 });
    } return i; }, configurable: !1 }); let s = null; Object.defineProperty(e, Oa, { get: () => { if (s === null) {
        let a = { name: e.name, type: e, providers: t.providers || P, imports: [(t.imports || P).map(z), (t.exports || P).map(z)] };
        s = oe({ usage: 0, kind: "NgModule", type: e }).compileInjector(ge, `ng:///${e.name}/\u0275inj.js`, a);
    } return s; }, configurable: !1 }); }
function TR(e, t) { let n = `Unexpected "${De(e)}" found in the "declarations" array of the`, o = `"${De(e)}" is marked as standalone and can't be declared in any NgModule - did you intend to import it instead (by adding it to the "imports" array)?`; return `${n} ${t}, ${o}`; }
var MR = new WeakMap, NR = new WeakMap;
function _R() { MR = new WeakMap, NR = new WeakMap, qo.length = 0, dS.clear(); }
function wR(e, t) { let n = Pe(t.declarations || P), o = cf(e); n.forEach(r => { if (r = z(r), r.hasOwnProperty(un)) {
    let s = G(r);
    af(s, o);
}
else
    !r.hasOwnProperty(Gr) && !r.hasOwnProperty(Wr) && (r.ngSelectorScope = e); }); }
function af(e, t) { e.directiveDefs = () => Array.from(t.compilation.directives).map(n => n.hasOwnProperty(un) ? G(n) : Ne(n)).filter(n => !!n), e.pipeDefs = () => Array.from(t.compilation.pipes).map(n => Be(n)), e.schemas = t.schemas, e.tView = null; }
function cf(e) { if (zt(e)) {
    let t = Ln.getNgModuleScope(e), n = qr(e);
    return Y({ schemas: n.schemas || null }, t);
}
else if (vo(e)) {
    if ((G(e) || Ne(e)) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set([e]), pipes: new Set } };
    if (Be(e) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set, pipes: new Set([e]) } };
} throw new Error(`${e.name} does not have a module def (\u0275mod property)`); }
function Sg(e) { return Uu(e) ? e.ngModule : e; }
var Wc = 0;
function wD(e, t) {
    let n = null;
    eS(e, t), bD(e, t), Object.defineProperty(e, un, { get: () => {
            if (n === null) {
                let o = oe({ usage: 0, kind: "component", type: e });
                if (Xy(t)) {
                    let u = [`Component '${e.name}' is not resolved:`];
                    throw t.templateUrl && u.push(` - templateUrl: ${t.templateUrl}`), t.styleUrls && t.styleUrls.length && u.push(` - styleUrls: ${JSON.stringify(t.styleUrls)}`), t.styleUrl && u.push(` - styleUrl: ${t.styleUrl}`), u.push("Did you run and wait for 'resolveComponentResources()'?"), new Error(u.join(`
`));
                }
                let r = ER(), i = t.preserveWhitespaces;
                i === void 0 && (r !== null && r.preserveWhitespaces !== void 0 ? i = r.preserveWhitespaces : i = !1);
                let s = t.encapsulation;
                s === void 0 && (r !== null && r.defaultEncapsulation !== void 0 ? s = r.defaultEncapsulation : s = Re.Emulated);
                let a = t.templateUrl || `ng:///${e.name}/template.html`, c = AD(e, t), l = Ye(Y({}, c), { typeSourceSpan: o.createParseSourceSpan("Component", e.name, a), template: t.template || "", preserveWhitespaces: i, styles: typeof t.styles == "string" ? [t.styles] : t.styles || P, animations: t.animations, declarations: [], changeDetection: t.changeDetection, encapsulation: s, viewProviders: t.viewProviders || null, hasDirectiveDependencies: !c.isStandalone || t.imports != null && t.imports.length > 0 });
                Wc++;
                try {
                    if (l.usesInheritance && RD(e), n = o.compileComponent(ge, a, l), l.isStandalone) {
                        let u = Pe(t.imports || P), { directiveDefs: d, pipeDefs: f } = SR(e, u);
                        n.directiveDefs = d, n.pipeDefs = f, n.dependencies = () => u.map(z);
                    }
                }
                finally {
                    Wc--;
                }
                if (Wc === 0 && TD(), bR(e)) {
                    let u = cf(e.ngSelectorScope);
                    af(n, u);
                }
                if (t.schemas)
                    if (l.isStandalone)
                        n.schemas = t.schemas;
                    else
                        throw new Error(`The 'schemas' was specified for the ${De(e)} but is only valid on a component that is standalone.`);
                else
                    l.isStandalone && (n.schemas = []);
            }
            return n;
        }, set: o => { n = o; }, configurable: !1 });
}
function SR(e, t) { return { directiveDefs: () => Ho(e) ? [...Ln.getStandaloneComponentScope(e, t).compilation.directives].map(i => G(i) || Ne(i)).filter(i => i !== null) : [], pipeDefs: () => Ho(e) ? [...Ln.getStandaloneComponentScope(e, t).compilation.pipes].map(i => Be(i)).filter(i => i !== null) : [] }; }
function bR(e) { return e.ngSelectorScope !== void 0; }
function lf(e, t) { let n = null; bD(e, t || {}), Object.defineProperty(e, Gr, { get: () => { if (n === null) {
        let o = SD(e, t || {});
        n = oe({ usage: 0, kind: "directive", type: e }).compileDirective(ge, o.sourceMapUrl, o.metadata);
    } return n; }, configurable: !1 }); }
function SD(e, t) { let n = e && e.name, o = `ng:///${n}/\u0275dir.js`, r = oe({ usage: 0, kind: "directive", type: e }), i = AD(e, t); return i.typeSourceSpan = r.createParseSourceSpan("Directive", n, o), i.usesInheritance && RD(e), { metadata: i, sourceMapUrl: o }; }
function bD(e, t) { let n = null; Object.defineProperty(e, yt, { get: () => { if (n === null) {
        let o = SD(e, t), r = oe({ usage: 0, kind: "directive", type: e });
        n = r.compileFactory(ge, `ng:///${e.name}/\u0275fac.js`, { name: o.metadata.name, type: o.metadata.type, typeArgumentCount: 0, deps: gs(e), target: r.FactoryTarget.Directive });
    } return n; }, configurable: !1 }); }
function AR(e) { return Object.getPrototypeOf(e.prototype) === Object.prototype; }
function AD(e, t) { let n = Yl(), o = n.ownPropMetadata(e); return { name: e.name, type: e, selector: t.selector !== void 0 ? t.selector : null, host: t.host || _e, propMetadata: o, inputs: t.inputs || P, outputs: t.outputs || P, queries: bg(e, o, kD), lifecycle: { usesOnChanges: n.hasLifecycleHook(e, "ngOnChanges") }, typeSourceSpan: null, usesInheritance: !AR(e), exportAs: xR(t.exportAs), providers: t.providers || null, viewQueries: bg(e, o, xD), isStandalone: t.standalone === void 0 ? !0 : !!t.standalone, isSignal: !!t.signals, hostDirectives: t.hostDirectives?.map(r => typeof r == "function" ? { directive: r } : r) || null }; }
function RD(e) { let t = Object.prototype, n = Object.getPrototypeOf(e.prototype).constructor; for (; n && n !== t;)
    !Ne(n) && !G(n) && LR(n) && lf(n, null), n = Object.getPrototypeOf(n); }
function RR(e) { return typeof e == "string" ? LD(e) : z(e); }
function kR(e, t) { return { propertyName: e, predicate: RR(t.selector), descendants: t.descendants, first: t.first, read: t.read ? t.read : null, static: !!t.static, emitDistinctChangesOnly: !!t.emitDistinctChangesOnly, isSignal: !!t.isSignal }; }
function bg(e, t, n) { let o = []; for (let r in t)
    if (t.hasOwnProperty(r)) {
        let i = t[r];
        i.forEach(s => { if (n(s)) {
            if (!s.selector)
                throw new Error(`Can't construct a query for the property "${r}" of "${De(e)}" since the query selector wasn't defined.`);
            if (i.some(OD))
                throw new Error("Cannot combine @Input decorators with query decorators");
            o.push(kR(r, s));
        } });
    } return o; }
function xR(e) { return e === void 0 ? null : LD(e); }
function kD(e) { let t = e.ngMetadataName; return t === "ContentChild" || t === "ContentChildren"; }
function xD(e) { let t = e.ngMetadataName; return t === "ViewChild" || t === "ViewChildren"; }
function OD(e) { return e.ngMetadataName === "Input"; }
function LD(e) { return e.split(",").map(t => t.trim()); }
var OR = ["ngOnChanges", "ngOnInit", "ngOnDestroy", "ngDoCheck", "ngAfterViewInit", "ngAfterViewChecked", "ngAfterContentInit", "ngAfterContentChecked"];
function LR(e) { let t = Yl(); if (OR.some(o => t.hasLifecycleHook(e, o)))
    return !0; let n = t.propMetadata(e); for (let o in n) {
    let r = n[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i], a = s.ngMetadataName;
        if (OD(s) || kD(s) || xD(s) || a === "Output" || a === "HostBinding" || a === "HostListener")
            return !0;
    }
} return !1; }
function PD(e, t) { let n = null, o = null; Object.defineProperty(e, yt, { get: () => { if (o === null) {
        let r = Ag(e, t), i = oe({ usage: 0, kind: "pipe", type: r.type });
        o = i.compileFactory(ge, `ng:///${r.name}/\u0275fac.js`, { name: r.name, type: r.type, typeArgumentCount: 0, deps: gs(e), target: i.FactoryTarget.Pipe });
    } return o; }, configurable: !1 }), Object.defineProperty(e, Wr, { get: () => { if (n === null) {
        let r = Ag(e, t);
        n = oe({ usage: 0, kind: "pipe", type: r.type }).compilePipe(ge, `ng:///${r.name}/\u0275pipe.js`, r);
    } return n; }, configurable: !1 }); }
function Ag(e, t) { return { type: e, name: e.name, pipeName: t.name, pure: t.pure !== void 0 ? t.pure : !0, isStandalone: t.standalone === void 0 ? !0 : !!t.standalone }; }
var FD = lr("Directive", (e = {}) => e, void 0, void 0, (e, t) => lf(e, t)), PR = lr("Component", (e = {}) => Y({ changeDetection: hs.Default }, e), FD, void 0, (e, t) => wD(e, t)), FR = lr("Pipe", e => Y({ pure: !0 }, e), void 0, void 0, (e, t) => PD(e, t)), HR = ct("Input", e => e ? typeof e == "string" ? { alias: e } : e : {}), jR = ct("Output", e => ({ alias: e })), VR = ct("HostBinding", e => ({ hostPropertyName: e })), BR = ct("HostListener", (e, t) => ({ eventName: e, args: t })), $R = lr("NgModule", e => e, void 0, void 0, (e, t) => ND(e, t)), ds = class {
    ngModuleFactory;
    componentFactories;
    constructor(t, n) { this.ngModuleFactory = t, this.componentFactories = n; }
}, UR = (() => { class e {
    compileModuleSync(n) { return new jn(n); }
    compileModuleAsync(n) { return Promise.resolve(this.compileModuleSync(n)); }
    compileModuleAndAllComponentsSync(n) { let o = this.compileModuleSync(n), r = dn(n), i = Cn(r.declarations).reduce((s, a) => { let c = G(a); return c && s.push(new bt(c)), s; }, []); return new ds(o, i); }
    compileModuleAndAllComponentsAsync(n) { return Promise.resolve(this.compileModuleAndAllComponentsSync(n)); }
    clearCache() { }
    clearCacheFor(n) { }
    getModuleId(n) { }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), HD = new w(""), Gl = class {
};
var jD = (() => { class e {
    applicationErrorHandler = D(Bt);
    appRef = D(xe);
    taskService = D(Vt);
    ngZone = D($);
    zonelessEnabled = D(mn);
    tracing = D(oo, { optional: !0 });
    zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
    schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }];
    subscriptions = new XC;
    angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(mc) : null;
    scheduleInRootZone = !this.zonelessEnabled && this.zoneIsDefined && (D(fi, { optional: !0 }) ?? !1);
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
        return; let o = this.useMicrotaskScheduler ? sp : ip; this.pendingRenderTaskId = this.taskService.add(), this.scheduleInRootZone ? this.cancelScheduledCallback = Zone.root.run(() => o(() => this.tick())) : this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() => o(() => this.tick())); }
    shouldScheduleTick() { return !(this.appRef.destroyed || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && Zone.current.get(mc + this.angularZoneId)); }
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
function zR() { return Q("NgZoneless"), Je([...Ea(), []]); }
function Ea() { return [{ provide: $t, useExisting: jD }, { provide: $, useClass: yc }, { provide: mn, useValue: !0 }]; }
function GR() { return typeof $localize < "u" && $localize.locale || kr; }
var uf = new w("", { factory: () => D(uf, { optional: !0, skipSelf: !0 }) || GR() }), WR = new w("", { factory: () => aA }), qR = new w(""), QR = new w(""), VD = (function (e) { return e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Ignore = 2] = "Ignore", e; })(VD || {}), Wl = class {
    name;
    callback;
    constructor(t, n) { this.name = t, this.callback = n; }
};
function ZR(e) { return e.map(t => t.nativeElement); }
var cr = class {
    nativeNode;
    constructor(t) { this.nativeNode = t; }
    get parent() { let t = this.nativeNode.parentNode; return t ? new rn(t) : null; }
    get injector() { return WT(this.nativeNode); }
    get componentInstance() { let t = this.nativeNode; return t && (wp(t) || GT(t)); }
    get context() { return wp(this.nativeNode) || zT(this.nativeNode); }
    get listeners() { return KT(this.nativeNode).filter(t => t.type === "dom"); }
    get references() { return ZT(this.nativeNode); }
    get providerTokens() { return qT(this.nativeNode); }
}, rn = class extends cr {
    constructor(t) { super(t); }
    get nativeElement() { return this.nativeNode.nodeType == Node.ELEMENT_NODE ? this.nativeNode : null; }
    get name() { let t = Ie(this.nativeNode), n = t ? t.lView : null; return n !== null ? n[y].data[t.nodeIndex].value : this.nativeNode.nodeName; }
    get properties() { let t = Ie(this.nativeNode), n = t ? t.lView : null; if (n === null)
        return {}; let o = n[y].data, r = o[t.nodeIndex], i = {}; return YR(this.nativeElement, i), JR(i, r, n, o), i; }
    get attributes() { let t = {}, n = this.nativeElement; if (!n)
        return t; let o = Ie(n), r = o ? o.lView : null; if (r === null)
        return {}; let i = r[y].data[o.nodeIndex].attrs, s = []; if (i) {
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
        n.push(Gn(r));
    } return n; }
    get children() { let t = this.nativeElement; if (!t)
        return []; let n = t.children, o = []; for (let r = 0; r < n.length; r++) {
        let i = n[r];
        o.push(Gn(i));
    } return o; }
    query(t) { return this.queryAll(t)[0] || null; }
    queryAll(t) { let n = []; return Rg(this, t, n, !0), n; }
    queryAllNodes(t) { let n = []; return Rg(this, t, n, !1), n; }
    triggerEventHandler(t, n) { let o = this.nativeNode, r = []; this.listeners.forEach(i => { if (i.name === t) {
        let s = i.callback;
        s.call(o, n), r.push(s);
    } }), typeof o.eventListeners == "function" && o.eventListeners(t).forEach(i => { if (i.toString().indexOf("__ngUnwrap__") !== -1) {
        let s = i("__ngUnwrap__");
        return r.indexOf(s) === -1 && s.call(o, n);
    } }); }
};
function YR(e, t) { if (e) {
    let n = Object.getPrototypeOf(e), o = Node.prototype;
    for (; n !== null && n !== o;) {
        let r = Object.getOwnPropertyDescriptors(n);
        for (let i in r)
            if (!i.startsWith("__") && !i.startsWith("on")) {
                let s = e[i];
                KR(s) && (t[i] = s);
            }
        n = Object.getPrototypeOf(n);
    }
} }
function KR(e) { return typeof e == "string" || typeof e == "boolean" || typeof e == "number" || e === null; }
function Rg(e, t, n, o) { let r = Ie(e.nativeNode), i = r ? r.lView : null; if (i !== null) {
    let s = i[y].data[r.nodeIndex];
    Gt(s, i, t, n, o, e.nativeNode);
}
else
    df(e.nativeNode, t, n, o); }
function Gt(e, t, n, o, r, i) { let s = Bf(e, t); if (e.type & 11) {
    if (qc(s, n, o, r, i), he(e)) {
        let c = fe(e.index, t);
        c && c[y].firstChild && Gt(c[y].firstChild, c, n, o, r, i);
    }
    else
        e.child && Gt(e.child, t, n, o, r, i), s && df(s, n, o, r);
    let a = t[e.index];
    te(a) && kg(a, n, o, r, i);
}
else if (e.type & 4) {
    let a = t[e.index];
    qc(a[Fe], n, o, r, i), kg(a, n, o, r, i);
}
else if (e.type & 16) {
    let a = t[J], l = a[ue].projection[e.projection];
    if (Array.isArray(l))
        for (let u of l)
            qc(u, n, o, r, i);
    else if (l) {
        let u = a[q], d = u[y].data[l.index];
        Gt(d, u, n, o, r, i);
    }
}
else
    e.child && Gt(e.child, t, n, o, r, i); if (i !== s) {
    let a = e.flags & 2 ? e.projectionNext : e.next;
    a && Gt(a, t, n, o, r, i);
} }
function kg(e, t, n, o, r) { for (let i = H; i < e.length; i++) {
    let s = e[i], a = s[y].firstChild;
    a && Gt(a, s, t, n, o, r);
} }
function qc(e, t, n, o, r) { if (r !== e) {
    let i = Gn(e);
    if (!i)
        return;
    (o && i instanceof rn && t(i) && n.indexOf(i) === -1 || !o && t(i) && n.indexOf(i) === -1) && n.push(i);
} }
function df(e, t, n, o) { let r = e.childNodes, i = r.length; for (let s = 0; s < i; s++) {
    let a = r[s], c = Gn(a);
    c && ((o && c instanceof rn && t(c) && n.indexOf(c) === -1 || !o && t(c) && n.indexOf(c) === -1) && n.push(c), df(a, t, n, o));
} }
function JR(e, t, n, o) { let r = t.propertyBindings; if (r !== null)
    for (let i = 0; i < r.length; i++) {
        let s = r[i], c = o[s].split(gN), l = c[0];
        if (c.length > 1) {
            let u = c[1];
            for (let d = 1; d < c.length - 1; d++)
                u += N(n[s + d - 1]) + c[d + 1];
            e[l] = u;
        }
        else
            e[l] = n[s];
    } }
var Qc = "__ng_debug__";
function Gn(e) { return e instanceof Node ? (e.hasOwnProperty(Qc) || (e[Qc] = e.nodeType == Node.ELEMENT_NODE ? new rn(e) : new cr(e)), e[Qc]) : null; }
import { Subscription as XR } from "rxjs";
import "@angular/core/primitives/signals";
import "@angular/core/primitives/di";
import "rxjs/operators";
typeof globalThis.ngServerMode > "u" && (globalThis.ngServerMode = typeof window > "u");
var wa = Symbol("InputSignalNode#UNSET"), aC = Ye(Y({}, ka), { transformFn: void 0, applyValueToInputSignal(e, t) { Ra(e, t); } }), PO = Symbol();
function cC(e, t) { let n = Object.create(aC); n.value = e, n.transformFn = t?.transform; function o() { if (Fr(n), n.value === wa) {
    let r = null;
    throw new _(-950, r);
} return n.value; } return o[Ke] = n, o; }
var fo = (function (e) { return e[e.Directive = 0] = "Directive", e[e.Component = 1] = "Component", e[e.Injectable = 2] = "Injectable", e[e.Pipe = 3] = "Pipe", e[e.NgModule = 4] = "NgModule", e; })(fo || {});
var ek = (function (e) { return e.Angular = "angular", e.ACX = "acx", e.Wiz = "wiz", e; })(ek || {}), BD = class {
    attributeName;
    constructor(t) { this.attributeName = t; }
    __NG_ELEMENT_ID__ = () => ps(this.attributeName);
    toString() { return `HostAttributeToken ${this.attributeName}`; }
}, FO = (() => { let e = new w(""); return e.__NG_ELEMENT_ID__ = t => { let n = M(); if (n === null)
    throw new _(204, !1); if (n.type & 2)
    return n.value; if (t & 8)
    return null; throw new _(204, !1); }, e; })();
function HO(e) { return new Tc; }
function $D(e, t) { return cC(e, t); }
function tk(e) { return cC(wa, e); }
var jO = ($D.required = tk, $D);
function UD(e, t) { return Ku(t); }
function nk(e, t) { return Ju(t); }
var VO = (UD.required = nk, UD);
function BO(e, t) { return Xu(t); }
function zD(e, t) { return Ku(t); }
function ok(e, t) { return Ju(t); }
var $O = (zD.required = ok, zD);
function UO(e, t) { return Xu(t); }
function lC(e, t) { let n = Object.create(aC), o = new Tc; n.value = e; function r() { return Fr(n), GD(n.value), n.value; } return r[Ke] = n, r.asReadonly = ap.bind(r), r.set = i => { n.equal(n.value, i) || (Ra(n, i), o.emit(i)); }, r.update = i => { GD(n.value), r.set(i(n.value)); }, r.subscribe = o.subscribe.bind(o), r.destroyRef = o.destroyRef, r; }
function GD(e) { if (e === wa)
    throw new _(952, !1); }
function WD(e, t) { return lC(e, t); }
function rk(e) { return lC(wa, e); }
var zO = (WD.required = rk, WD), uC = !0, go = class {
}, GO = ct("ContentChildren", (e, t = {}) => Y({ selector: e, first: !1, isViewQuery: !1, descendants: !1, emitDistinctChangesOnly: uC }, t), go), WO = ct("ContentChild", (e, t = {}) => Y({ selector: e, first: !0, isViewQuery: !1, descendants: !0 }, t), go), qO = ct("ViewChildren", (e, t = {}) => Y({ selector: e, first: !1, isViewQuery: !0, descendants: !0, emitDistinctChangesOnly: uC }, t), go), QO = ct("ViewChild", (e, t) => Y({ selector: e, first: !0, isViewQuery: !0, descendants: !0 }, t), go);
function ik(e, t, n) { let o = new jn(n); return Promise.resolve(o); }
function qD(e) { for (let t = e.length - 1; t >= 0; t--)
    if (e[t] !== void 0)
        return e[t]; }
var sk = (() => { class e {
    zone = D($);
    changeDetectionScheduler = D($t);
    applicationRef = D(xe);
    applicationErrorHandler = D(Bt);
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
} return e; })(), ak = new w("", { factory: () => !1 });
function ck({ ngZoneFactory: e, scheduleInRootZone: t }) { return e ??= () => new $(Ye(Y({}, dC()), { scheduleInRootZone: t })), [{ provide: mn, useValue: !1 }, { provide: $, useFactory: e }, { provide: vt, multi: !0, useFactory: () => { let n = D(sk, { optional: !0 }); return () => n.initialize(); } }, { provide: vt, multi: !0, useFactory: () => { let n = D(lk); return () => { n.initialize(); }; } }, { provide: fi, useValue: t ?? op }]; }
function ZO(e) { let t = e?.scheduleInRootZone, n = ck({ ngZoneFactory: () => { let o = dC(e); return o.scheduleInRootZone = t, o.shouldCoalesceEventChangeDetection && Q("NgZone_CoalesceEvent"), new $(o); }, scheduleInRootZone: t }); return Je([{ provide: ak, useValue: !0 }, n]); }
function dC(e) { return { enableLongStackTrace: !1, shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1, shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1 }; }
var lk = (() => { class e {
    subscription = new XR;
    initialized = !1;
    zone = D($);
    pendingTasks = D(Vt);
    initialize() { if (this.initialized)
        return; this.initialized = !0; let n = null; !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (n = this.pendingTasks.add()), this.zone.runOutsideAngular(() => { this.subscription.add(this.zone.onStable.subscribe(() => { $.assertNotInAngularZone(), queueMicrotask(() => { n !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(n), n = null); }); })); }), this.subscription.add(this.zone.onUnstable.subscribe(() => { $.assertInAngularZone(), n ??= this.pendingTasks.add(); })); }
    ngOnDestroy() { this.subscription.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
var Ca = new w(""), uk = new w("");
function Lr(e) { return !e.moduleRef; }
function fC(e) { let t = Lr(e) ? e.r3Injector : e.moduleRef.injector, n = t.get($); return n.run(() => { Lr(e) ? e.r3Injector.resolveInjectorInitializers() : e.moduleRef.resolveInjectorInitializers(); let o = t.get(Bt), r; if (n.runOutsideAngular(() => { r = n.onError.subscribe({ next: o }); }), Lr(e)) {
    let i = () => t.destroy(), s = e.platformInjector.get(Ca);
    s.add(i), t.onDestroy(() => { r.unsubscribe(), s.delete(i); });
}
else {
    let i = () => e.moduleRef.destroy(), s = e.platformInjector.get(Ca);
    s.add(i), e.moduleRef.onDestroy(() => { jo(e.allPlatformModules, e.moduleRef), r.unsubscribe(), s.delete(i); });
} return fk(o, n, () => { let i = t.get(Vt), s = i.add(), a = t.get(gd); return a.runInitializers(), a.donePromise.then(() => { let c = t.get(uf, kr); if (PI(c || kr), !t.get(uk, !0))
    return Lr(e) ? t.get(xe) : (e.allPlatformModules.push(e.moduleRef), e.moduleRef); if (Lr(e)) {
    let u = t.get(xe);
    return e.rootComponent !== void 0 && u.bootstrap(e.rootComponent), u;
}
else
    return pC?.(e.moduleRef, e.allPlatformModules), e.moduleRef; }).finally(() => { i.remove(s); }); }); }); }
var pC;
function QD() { pC = dk; }
function dk(e, t) { let n = e.injector.get(xe); if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach(o => n.bootstrap(o));
else if (e.instance.ngDoBootstrap)
    e.instance.ngDoBootstrap(n);
else
    throw new _(-403, !1); t.push(e); }
function fk(e, t, n) { try {
    let o = n();
    return fd(o) ? o.catch(r => { throw t.runOutsideAngular(() => e(r)), r; }) : o;
}
catch (o) {
    throw t.runOutsideAngular(() => e(o)), o;
} }
var gC = (() => { class e {
    _injector;
    _modules = [];
    _destroyListeners = [];
    _destroyed = !1;
    constructor(n) { this._injector = n; }
    bootstrapModuleFactory(n, o) { let r = [Ea(), ...o?.applicationProviders ?? [], Ic], i = rv(n.moduleType, this.injector, r); return QD(), fC({ moduleRef: i, allPlatformModules: this._modules, platformInjector: this.injector }); }
    bootstrapModule(n, o = []) { let r = md({}, o); return QD(), ik(this.injector, r, n).then(i => this.bootstrapModuleFactory(i, r)); }
    onDestroy(n) { this._destroyListeners.push(n); }
    get injector() { return this._injector; }
    destroy() { if (this._destroyed)
        throw new _(404, !1); this._modules.slice().forEach(o => o.destroy()), this._destroyListeners.forEach(o => o()); let n = this._injector.get(Ca, null); n && (n.forEach(o => o()), n.clear()), this._destroyed = !0; }
    get destroyed() { return this._destroyed; }
    static \u0275fac = function (o) { return new (o || e)(Le(Te)); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })(), po = null;
function pk(e) { if (Sa())
    throw new _(400, !1); hd(), po = typeof ngServerMode > "u" || !ngServerMode ? e : null; let t = e.get(gC); return mC(e), t; }
function gk(e, t, n = []) { let o = `Platform: ${t}`, r = new w(o); return (i = []) => { let s = Sa(); if (!s) {
    let a = [...n, ...i, { provide: r, useValue: !0 }];
    s = e?.(a) ?? pk(hC(a, o));
} return typeof ngServerMode < "u" && ngServerMode ? s : hk(r); }; }
function hC(e = [], t) { return Te.create({ name: t, providers: [{ provide: Lf, useValue: "platform" }, { provide: Ca, useValue: new Set([() => po = null]) }, ...e] }); }
function hk(e) { let t = Sa(); if (!t)
    throw new _(-401, !1); return t; }
function Sa() { return typeof ngServerMode < "u" && ngServerMode ? null : po?.get(gC) ?? null; }
function YO() { Sa()?.destroy(); }
function mk(e = []) { if (po)
    return po; let t = hC(e); return (typeof ngServerMode > "u" || !ngServerMode) && (po = t), hd(), mC(t), t; }
function KO(e) { return { provide: Jl, useValue: e, multi: !0 }; }
function mC(e) { let t = e.get(Jl, null); ei(e, () => { t?.forEach(n => n()); }); }
function JO(e) { return Je([]); }
function XO() { return !1; }
function eL() { }
var Da = new WeakSet, ZD = "";
function YD(e) { return e.get(Cs, ru); }
function yk() { let e = [{ provide: Cs, useFactory: () => { let t = !0; if (typeof ngServerMode > "u" || !ngServerMode) {
            let n = D(lt);
            t = !!window._ejsas?.[n];
        } return t && Q("NgEventReplay"), t; } }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: vt, useValue: () => { let t = D(xe), { injector: n } = t; if (!Da.has(t)) {
        let o = D(mr);
        if (YD(n)) {
            Ah();
            let r = n.get(lt), i = Sh(r, (s, a, c) => { s.nodeType === Node.ELEMENT_NODE && (wh(s, a, c), au(s, o)); });
            t.onDestroy(i);
        }
    } }, multi: !0 }, { provide: br, useFactory: () => { let t = D(xe), { injector: n } = t; return () => { if (!YD(n) || Da.has(t))
        return; Da.add(t); let o = n.get(lt); t.onDestroy(() => { Da.delete(t), typeof ngServerMode < "u" && !ngServerMode && Mc(o); }), t.whenStable().then(() => { if (t.destroyed)
        return; let r = n.get(lu); vk(r, n); let i = n.get(mr); i.get(ZD)?.forEach(cu), i.delete(ZD); let s = r.instance; yr(n) ? t.onDestroy(() => s.cleanUp()) : s.cleanUp(); }); }; }, multi: !0 }), e; }
var vk = (e, t) => { let n = t.get(lt), o = window._ejsas[n], r = e.instance = new gp(new up(o.c)); for (let a of o.et)
    r.addEvent(a); for (let a of o.etc)
    r.addEvent(a); let i = hp(n); r.replayEarlyEventInfos(i), Mc(n); let s = new fp(a => { Ek(t, a, a.currentTarget); }); pp(r, s); };
function Ik(e, t, n) { let o = new Map, r = t[Ot], i = e.cleanup; if (!i || !r)
    return o; for (let s = 0; s < i.length;) {
    let a = i[s++], c = i[s++];
    if (typeof a != "string")
        continue;
    let l = a;
    if (!lp(l))
        continue;
    cp(l) ? n.capture.add(l) : n.regular.add(l);
    let u = O(t[c]);
    s++;
    let d = i[s++];
    (typeof d == "boolean" || d >= 0) && (o.has(u) ? o.get(u).push(l) : o.set(u, [l]));
} return o; }
function Ek(e, t, n) { let o = (n && n.getAttribute(Xn)) ?? ""; /d\d+/.test(o) ? Dk(o, e, t, n) : t.eventPhase === dp.REPLAY && uu(t, n); }
function Dk(e, t, n, o) { let r = t.get(Th); r.push({ event: n, currentTarget: o }), gt(t, e, Ck(r)); }
function Ck(e) { return t => { let n = new Set(t), o = []; for (let { event: r, currentTarget: i } of e) {
    let s = i.getAttribute(Xn);
    n.has(s) ? uu(r, i) : o.push({ event: r, currentTarget: i });
} e.length = 0, e.push(...o); }; }
var KD = !1, JD = !1, XD = !1, Tk = 1e4;
function Mk() { KD || (KD = !0, Ph(), bI(), IE(), AI(), mv(), zy(), My(), Bm()); }
function Nk() { JD || (JD = !0, HI(), hy(), Ey()); }
function _k() { XD || (XD = !0, Gh()); }
function wk(e) { return e.whenStable(); }
var tL = "ngcm";
function nL() { let e = [{ provide: sn, useFactory: () => { let t = !0; return (typeof ngServerMode > "u" || !ngServerMode) && (t = !!D(Yn, { optional: !0 })?.get(Ts, null)), t && Q("NgHydration"), t; } }, { provide: vt, useValue: () => { if (Bu(!1), typeof ngServerMode < "u" && ngServerMode)
            return; let t = D(jt); D(sn) && (qh(t), Mk()); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: nu, useFactory: () => D(sn) }, { provide: br, useFactory: () => { if (D(sn)) {
        let t = D(xe);
        return () => { wk(t).then(() => { t.destroyed || $u(t); }); };
    } return () => { }; }, multi: !0 }), Je(e); }
function oL() { return [{ provide: ou, useFactory: () => D(sn) }, { provide: vt, useValue: () => { D(sn) && (Nk(), Bu(!0), Q("NgI18nHydration")); }, multi: !0 }]; }
function rL() { let e = [yk(), { provide: iu, useValue: !0 }, { provide: ut, useClass: Rh }, { provide: vt, useValue: () => { _k(), Q("NgIncrementalHydration"); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: br, useFactory: () => { let t = D(Te), n = D(jt); return () => { let o = Wh(t), r = fy(n, n.body); Vv(t, o, r), Uh(n, t); }; }, multi: !0 }), e; }
var eC = Tk - 1e3, gf = class {
    openTasks = new Map;
    add(t) { this.openTasks.set(t, new Error("Task stack tracking error")); }
    remove(t) { this.openTasks.delete(t); }
};
function iL() { let e = new gf, { openTasks: t } = e; return Je([{ provide: rp, useValue: e }, Ov(() => { console.warn("Stability debugging utility was provided in production mode. This will cause debug code to be included in production bundles. If this is intentional because you are debugging stability issues in a production environment, you can ignore this warning."); let n = D($), o = D(xe), r = null; typeof Zone < "u" && n.run(() => { r = Zone.current.get("TaskTrackingZone"); }), n.runOutsideAngular(() => { let i = setTimeout(() => { if (console.debug(`---- Application did not stabilize within ${eC / 1e3} seconds ----`), typeof Zone < "u" && !r && console.info('Zone.js is present but no TaskTrackingZone found. To enable better debugging of tasks in the Angular Zone, import "zone.js/plugins/task-tracking" in your application.'), r?.macroTasks?.length) {
        console.group("Macrotasks keeping Angular Zone unstable:");
        for (let s of r?.macroTasks ?? [])
            console.debug(s.creationLocation.stack);
        console.groupEnd();
    } console.group("PendingTasks keeping application unstable:"); for (let s of t.values())
        console.debug(s.stack); console.groupEnd(); }, eC); o.whenStable().then(() => { clearTimeout(i); }); }); })]); }
function sL(e) { let t = td(e); if (!t)
    throw yC(e); return new jn(t); }
function aL(e) { let t = td(e); if (!t)
    throw yC(e); return t; }
function yC(e) { return new _(920, !1); }
var Sk = (() => { class e {
    static __NG_ELEMENT_ID__ = bk;
} return e; })();
function bk(e) { return Ak(M(), h(), (e & 16) === 16); }
function Ak(e, t, n) { if (he(e) && !n) {
    let o = fe(e.index, t);
    return new St(o, o);
}
else if (e.type & 175) {
    let o = t[J];
    return new St(o, t);
} return null; }
var hf = class extends Sk {
}, tC = class extends hf {
}, Ta = class {
    constructor() { }
    supports(t) { return nr(t); }
    create(t) { return new mf(t); }
}, Rk = (e, t) => t, mf = class {
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
    constructor(t) { this._trackByFn = t || Rk; }
    forEachItem(t) { let n; for (n = this._itHead; n !== null; n = n._next)
        t(n); }
    forEachOperation(t) { let n = this._itHead, o = this._removalsHead, r = 0, i = null; for (; n || o;) {
        let s = !o || n && n.currentIndex < nC(o, r, i) ? n : o, a = nC(s, r, i), c = s.currentIndex;
        if (s === o)
            r--, o = o._nextRemoved;
        else if (n = n._next, s.previousIndex == null)
            r++;
        else {
            i || (i = []);
            let l = a - r, u = c - r;
            if (l != u) {
                for (let f = 0; f < l; f++) {
                    let p = f < i.length ? i[f] : i[f] = 0, g = p + f;
                    u <= g && g < l && (i[f] = p + 1);
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
    diff(t) { if (t == null && (t = []), !nr(t))
        throw new _(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._itHead, o = !1, r, i, s; if (Array.isArray(t)) {
        this.length = t.length;
        for (let a = 0; a < this.length; a++)
            i = t[a], s = this._trackByFn(a, i), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, i, s, a), o = !0) : (o && (n = this._verifyReinsertion(n, i, s, a)), Object.is(n.item, i) || this._addIdentityChange(n, i)), n = n._next;
    }
    else
        r = 0, xy(t, a => { s = this._trackByFn(r, a), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, a, s, r), o = !0) : (o && (n = this._verifyReinsertion(n, a, s, r)), Object.is(n.item, a) || this._addIdentityChange(n, a)), n = n._next, r++; }), this.length = r; return this._truncate(n), this.collection = t, this.isDirty; }
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
    _mismatch(t, n, o, r) { let i; return t === null ? i = this._itTail : (i = t._prev, this._remove(t)), t = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, i, r)) : (t = this._linkedRecords === null ? null : this._linkedRecords.get(o, r), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, i, r)) : t = this._addAfter(new yf(n, o), i, r)), t; }
    _verifyReinsertion(t, n, o, r) { let i = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null); return i !== null ? t = this._reinsertAfter(i, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t; }
    _truncate(t) { for (; t !== null;) {
        let n = t._next;
        this._addToRemovals(this._unlink(t)), t = n;
    } this._unlinkedRecords !== null && this._unlinkedRecords.clear(), this._additionsTail !== null && (this._additionsTail._nextAdded = null), this._movesTail !== null && (this._movesTail._nextMoved = null), this._itTail !== null && (this._itTail._next = null), this._removalsTail !== null && (this._removalsTail._nextRemoved = null), this._identityChangesTail !== null && (this._identityChangesTail._nextIdentityChange = null); }
    _reinsertAfter(t, n, o) { this._unlinkedRecords !== null && this._unlinkedRecords.remove(t); let r = t._prevRemoved, i = t._nextRemoved; return r === null ? this._removalsHead = i : r._nextRemoved = i, i === null ? this._removalsTail = r : i._prevRemoved = r, this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _moveAfter(t, n, o) { return this._unlink(t), this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _addAfter(t, n, o) { return this._insertAfter(t, n, o), this._additionsTail === null ? this._additionsTail = this._additionsHead = t : this._additionsTail = this._additionsTail._nextAdded = t, t; }
    _insertAfter(t, n, o) { let r = n === null ? this._itHead : n._next; return t._next = r, t._prev = n, r === null ? this._itTail = t : r._prev = t, n === null ? this._itHead = t : n._next = t, this._linkedRecords === null && (this._linkedRecords = new Ma), this._linkedRecords.put(t), t.currentIndex = o, t; }
    _remove(t) { return this._addToRemovals(this._unlink(t)); }
    _unlink(t) { this._linkedRecords !== null && this._linkedRecords.remove(t); let n = t._prev, o = t._next; return n === null ? this._itHead = o : n._next = o, o === null ? this._itTail = n : o._prev = n, t; }
    _addToMoves(t, n) { return t.previousIndex === n || (this._movesTail === null ? this._movesTail = this._movesHead = t : this._movesTail = this._movesTail._nextMoved = t), t; }
    _addToRemovals(t) { return this._unlinkedRecords === null && (this._unlinkedRecords = new Ma), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, this._removalsTail === null ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t; }
    _addIdentityChange(t, n) { return t.item = n, this._identityChangesTail === null ? this._identityChangesTail = this._identityChangesHead = t : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = t, t; }
}, yf = class {
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
}, vf = class {
    _head = null;
    _tail = null;
    add(t) { this._head === null ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t); }
    get(t, n) { let o; for (o = this._head; o !== null; o = o._nextDup)
        if ((n === null || n <= o.currentIndex) && Object.is(o.trackById, t))
            return o; return null; }
    remove(t) { let n = t._prevDup, o = t._nextDup; return n === null ? this._head = o : n._nextDup = o, o === null ? this._tail = n : o._prevDup = n, this._head === null; }
}, Ma = class {
    map = new Map;
    put(t) { let n = t.trackById, o = this.map.get(n); o || (o = new vf, this.map.set(n, o)), o.add(t); }
    get(t, n) { let o = t, r = this.map.get(o); return r ? r.get(t, n) : null; }
    remove(t) { let n = t.trackById; return this.map.get(n).remove(t) && this.map.delete(n), t; }
    get isEmpty() { return this.map.size === 0; }
    clear() { this.map.clear(); }
};
function nC(e, t, n) { let o = e.previousIndex; if (o === null)
    return o; let r = 0; return n && o < n.length && (r = n[o]), o + t + r; }
var Na = class {
    constructor() { }
    supports(t) { return t instanceof Map || Xs(t); }
    create() { return new If; }
}, If = class {
    _records = new Map;
    _mapHead = null;
    _appendAfter = null;
    _previousMapHead = null;
    _changesHead = null;
    _changesTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _removalsHead = null;
    _removalsTail = null;
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
    else if (!(t instanceof Map || Xs(t)))
        throw new _(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
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
    } let o = new Ef(t); return this._records.set(t, o), o.currentValue = n, this._addToAdditions(o), o; }
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
}, Ef = class {
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
function oC() { return new vC([new Ta]); }
var vC = (() => { class e {
    factories;
    static \u0275prov = B({ token: e, providedIn: "root", factory: oC });
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o != null) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = D(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || oC()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o != null)
        return o; throw new _(901, !1); }
} return e; })();
function rC() { return new IC([new Na]); }
var IC = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: rC });
    factories;
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = D(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || rC()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o)
        return o; throw new _(901, !1); }
} return e; })(), kk = [new Na], xk = [new Ta], cL = new vC(xk), lL = new IC(kk), uL = gk(null, "core", []), dL = (() => { class e {
    constructor(n) { }
    static \u0275fac = function (o) { return new (o || e)(Le(xe)); };
    static \u0275mod = od({ type: e });
    static \u0275inj = yo({});
} return e; })();
function fL(e) { let { rootComponent: t, appProviders: n, platformProviders: o, platformRef: r } = e; if (k(b.BootstrapApplicationStart), typeof ngServerMode < "u" && ngServerMode && !r)
    throw new _(-401, !1); try {
    let i = r?.injector ?? mk(o), s = [Ea(), Ic, ...n || []], a = new rr({ providers: s, parent: i, debugName: "", runEnvironmentInitializers: !1 });
    return fC({ r3Injector: a.injector, platformInjector: i, rootComponent: t });
}
catch (i) {
    return Promise.reject(i);
}
finally {
    k(b.BootstrapApplicationEnd);
} }
var Df = class {
    views = [];
    indexByContent = new Map;
    add(t) { let n = JSON.stringify(t); if (!this.indexByContent.has(n)) {
        let o = this.views.length;
        return this.views.push(t), this.indexByContent.set(n, o), o;
    } return this.indexByContent.get(n); }
    getAll() { return this.views; }
}, Ok = 0;
function EC(e) { return e.ssrId || (e.ssrId = `t${Ok++}`), e.ssrId; }
function DC(e, t, n) { let o = []; return On(e, t, n, o), o.length; }
function Lk(e) { let t = []; return Gs(e, t), t.length; }
function CC(e, t) { let n = e[j]; return n && !n.hasAttribute(Qn) ? _a(n, e, null, t) : null; }
function TC(e, t) { let n = _o(e[j]), o = CC(n, t); if (o === null)
    return; let r = O(n[j]), i = e[q], s = _a(r, i, null, t), a = n[C], c = `${o}|${s}`; a.setAttribute(r, _n, c); }
function pL(e, t) { let n = e.injector, o = my(n), r = yr(n), i = new Df, s = new Map, a = e._views, c = n.get(Cs, ru), l = { regular: new Set, capture: new Set }, u = new Map, d = e.injector.get(lt); for (let g of a) {
    let m = du(g);
    if (m !== null) {
        let v = { serializedViewCollection: i, corruptedTextNodes: s, isI18nHydrationEnabled: o, isIncrementalHydrationEnabled: r, i18nChildren: new Map, eventTypesToReplay: l, shouldReplayEvents: c, appId: d, deferBlocks: u };
        te(m) ? TC(m, v) : CC(m, v), Vk(s, t);
    }
} let f = i.getAll(), p = n.get(Yn); if (p.set(Ts, f), u.size > 0) {
    let g = {};
    for (let [m, v] of u.entries())
        g[m] = v;
    p.set(Ms, g);
} return l; }
function Pk(e, t, n, o, r) { let i = [], s = ""; for (let a = H; a < e.length; a++) {
    let c = e[a], l, u, d;
    if (Ue(c) && (c = c[I], te(c))) {
        u = Lk(c) + 1, TC(c, r);
        let p = _o(c[j]);
        d = { [Is]: p[y].ssrId, [st]: u };
    }
    if (!d) {
        let p = c[y];
        p.type === 1 ? (l = p.ssrId, u = 1) : (l = EC(p), u = DC(p, c, p.firstChild)), d = { [Is]: l, [st]: u };
        let g = !1;
        if (Dv(n[y], t)) {
            let m = ye(n, t), v = ce(n[y], t);
            if (r.isIncrementalHydrationEnabled && v.hydrateTriggers !== null) {
                let E = `d${r.deferBlocks.size}`;
                v.hydrateTriggers.has(7) && (g = !0);
                let A = [];
                Gs(e, A);
                let X = { [st]: A.length, [gr]: m[pt] }, Oe = Fk(v.hydrateTriggers);
                Oe.length > 0 && (X[hr] = Oe), o !== null && (X[tu] = o), r.deferBlocks.set(E, X);
                let Me = O(e);
                Me !== void 0 ? Me.nodeType === Node.COMMENT_NODE && iC(Me, E) : iC(Me, E), g || $k(v, A, E, r), o = E, d[Ds] = E;
            }
            d[gr] = m[pt];
        }
        g || Object.assign(d, MC(e[a], o, r));
    }
    let f = JSON.stringify(d);
    if (i.length > 0 && f === s) {
        let p = i[i.length - 1];
        p[fr] ??= 1, p[fr]++;
    }
    else
        s = f, i.push(d);
} return i; }
function Fk(e) { let t = new Set([0, 1, 2, 5]), n = []; for (let [o, r] of e)
    t.has(o) && (r === null ? n.push(o) : r.type === 5 ? n.push({ trigger: o, delay: r.delay }) : n.push({ trigger: o, intersectionObserverOptions: r.intersectionObserverOptions })); return n; }
function Pr(e, t, n, o) { let r = t.index - I; e[pr] ??= {}, e[pr][r] ??= dy(t, n, o); }
function ff(e, t) { let n = typeof t == "number" ? t : t.index - I; e[Jn] ??= [], e[Jn].includes(n) || e[Jn].push(n); }
function MC(e, t = null, n) { let o = {}, r = e[y], i = yy(r, n), s = n.shouldReplayEvents ? Ik(r, e, n.eventTypesToReplay) : null; for (let a = I; a < r.bindingStartIndex; a++) {
    let c = r.data[a], l = a - I, u = vy(e, a, n);
    if (u) {
        o[Es] ??= {}, o[Es][l] = u.caseQueue;
        for (let d of u.disconnectedNodes)
            ff(o, d);
        for (let d of u.disjointNodes) {
            let f = r.data[d + I];
            Pr(o, f, e, i);
        }
        continue;
    }
    if (fs(c) && !eo(c)) {
        if (te(e[a]) && c.tView && (o[vs] ??= {}, o[vs][l] = EC(c.tView)), ao(c, e) && Bk(c)) {
            ff(o, c);
            continue;
        }
        if (Array.isArray(c.projection)) {
            for (let d of c.projection)
                if (d)
                    if (!Array.isArray(d))
                        !Ga(d) && !Zn(d) && (ao(d, e) ? ff(o, d) : Pr(o, d, e, i));
                    else
                        throw ny(O(e[a]));
        }
        if (Hk(o, c, e, i), te(e[a])) {
            let d = e[a][j];
            if (Array.isArray(d)) {
                let f = O(d);
                f.hasAttribute(Qn) || _a(f, d, t, n);
            }
            o[Kn] ??= {}, o[Kn][l] = Pk(e[a], c, e, t, n);
        }
        else if (Array.isArray(e[a]) && !qg(c)) {
            let d = O(e[a][j]);
            d.hasAttribute(Qn) || _a(d, e[a], t, n);
        }
        else if (c.type & 8)
            o[dr] ??= {}, o[dr][l] = DC(r, e, c.child);
        else if (c.type & 144) {
            let d = c.next;
            for (; d !== null && d.type & 144;)
                d = d.next;
            d && !Zn(d) && Pr(o, d, e, i);
        }
        else if (c.type & 1) {
            let d = O(e[a]);
            pu(n, d);
        }
        if (s && c.type & 2) {
            let d = O(e[a]);
            s.has(d) && su(d, s.get(d), t);
        }
    }
} return o; }
function Hk(e, t, n, o) { Ga(t) || (t.projectionNext && t.projectionNext !== t.next && !Zn(t.projectionNext) && Pr(e, t.projectionNext, n, o), t.prev === null && t.parent !== null && ao(t.parent, n) && !ao(t, n) && Pr(e, t, n, o)); }
function jk(e) { let t = e[F]; if (!t?.constructor)
    return !1; let n = G(t.constructor); return n?.encapsulation === Re.ShadowDom || n?.encapsulation === Re.ExperimentalIsolatedShadowDom; }
function _a(e, t, n, o) { let r = t[C]; if (Hf(t) && !Zs() || jk(t))
    return r.setAttribute(e, Qn, ""), null; {
    let i = MC(t, n, o), s = o.serializedViewCollection.add(i);
    return r.setAttribute(e, _n, s.toString()), s;
} }
function iC(e, t) { e.textContent = `ngh=${t}`; }
function Vk(e, t) { for (let [n, o] of e)
    n.after(t.createComment(o)); }
function Bk(e) { let t = e; for (; t != null;) {
    if (he(t))
        return !0;
    t = t.parent;
} return !1; }
function $k(e, t, n, o) { let r = $h(e.hydrateTriggers); for (let i of r)
    o.eventTypesToReplay.regular.add(i); if (r.length > 0) {
    let i = t.filter(s => s.nodeType === Node.ELEMENT_NODE);
    for (let s of i)
        su(s, r, n);
} }
function gL(e) { return typeof e == "boolean" ? e : e != null && e !== "false"; }
function hL(e, t = NaN) { return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t; }
var Uk = "\u{1F170}\uFE0F", ba = !1;
function mL(e) { if (!ba)
    return; let { startLabel: t } = NC(e); performance.mark(t); }
function yL(e) { if (!ba)
    return; let { startLabel: t, labelName: n, endLabel: o } = NC(e); performance.mark(o), performance.measure(n, t, o), performance.clearMarks(t), performance.clearMarks(o); }
function NC(e) { let t = `${Uk}:${e}`; return { labelName: t, startLabel: `start:${t}`, endLabel: `end:${t}` }; }
var sC = !1;
function vL() { if (!sC && (typeof performance > "u" || !performance.mark || !performance.measure)) {
    sC = !0, console.warn("Performance API is not supported on this platform");
    return;
} ba = !0; }
function IL() { ba = !1; }
function EL(e) { let t = e; for (; t;) {
    let n = uh(t);
    if (n !== null)
        for (let o = I; o < n.length; o++) {
            let r = n[o];
            if (!ee(r) && !te(r) || r[j] !== t)
                continue;
            let i = n[y], s = Ct(i, o);
            if (he(s)) {
                let a = i.data[s.directiveStart + s.componentOffset], c = a.debugInfo?.className || a.type.name;
                if (c)
                    return c;
                break;
            }
        }
    t = t.parentNode;
} return null; }
function DL(e) { }
function CL(e) { return oe({ usage: 1, kind: "directive", type: e.type }).compileDirectiveDeclaration(ge, `ng:///${e.type.name}/\u0275fac.js`, e); }
function TL(e) { ld(e.type, e.decorators, e.ctorParameters ?? null, e.propDecorators ?? null); }
function ML(e) { wv(e.type, e.resolveDeferredDeps, (...t) => { let n = e.resolveMetadata(...t); ld(e.type, n.decorators, n.ctorParameters, n.propDecorators); }); }
function NL(e) { return oe({ usage: 1, kind: "component", type: e.type }).compileComponentDeclaration(ge, `ng:///${e.type.name}/\u0275cmp.js`, e); }
function _L(e) { return oe({ usage: 1, kind: zk(e.target), type: e.type }).compileFactoryDeclaration(ge, `ng:///${e.type.name}/\u0275fac.js`, e); }
function zk(e) { switch (e) {
    case fo.Directive: return "directive";
    case fo.Component: return "component";
    case fo.Injectable: return "injectable";
    case fo.Pipe: return "pipe";
    case fo.NgModule: return "NgModule";
} }
function wL(e) { return oe({ usage: 1, kind: "injectable", type: e.type }).compileInjectableDeclaration(ge, `ng:///${e.type.name}/\u0275prov.js`, e); }
function SL(e) { return oe({ usage: 1, kind: "NgModule", type: e.type }).compileInjectorDeclaration(ge, `ng:///${e.type.name}/\u0275inj.js`, e); }
function bL(e) { return oe({ usage: 1, kind: "NgModule", type: e.type }).compileNgModuleDeclaration(ge, `ng:///${e.type.name}/\u0275mod.js`, e); }
function AL(e) { return oe({ usage: 1, kind: "pipe", type: e.type }).compilePipeDeclaration(ge, `ng:///${e.type.name}/\u0275pipe.js`, e); }
var pf = Symbol("NOT_SET"), _C = new Set, Gk = Ye(Y({}, ka), { kind: "afterRenderEffectPhase", consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !0, value: pf, cleanup: null, consumerMarkedDirty() { if (this.sequence.impl.executing) {
        if (this.sequence.lastPhase === null || this.sequence.lastPhase < this.phase)
            return;
        this.sequence.erroredOrDestroyed = !0;
    } this.sequence.scheduler.notify(7); }, phaseFn(e) { if (this.sequence.lastPhase = this.phase, !this.dirty)
        return this.signal; if (this.dirty = !1, this.value !== pf && !jr(this))
        return this.signal; try {
        for (let r of this.cleanup ?? _C)
            r();
    }
    finally {
        this.cleanup?.clear();
    } let t = []; e !== void 0 && t.push(e), t.push(this.registerCleanupFn); let n = ho(this), o; try {
        o = this.userFn.apply(null, t);
    }
    finally {
        Hr(this, n);
    } return (this.value === pf || !this.equal(this.value, o)) && (this.value = o, this.version++), this.signal; } }), Cf = class extends Ko {
    scheduler;
    lastPhase = null;
    nodes = [void 0, void 0, void 0, void 0];
    onDestroyFns = null;
    constructor(t, n, o, r, i, s = null) { super(t, [void 0, void 0, void 0, void 0], o, !1, i.get(ko), s), this.scheduler = r; for (let a of wu) {
        let c = n[a];
        if (c === void 0)
            continue;
        let l = Object.create(Gk);
        l.sequence = this, l.phase = a, l.userFn = c, l.dirty = !0, l.signal = () => (Fr(l), l.value), l.signal[Ke] = l, l.registerCleanupFn = u => (l.cleanup ??= new Set).add(u), this.nodes[a] = l, this.hooks[a] = u => l.phaseFn(u);
    } }
    afterRun() { super.afterRun(), this.lastPhase = null; }
    destroy() { if (this.onDestroyFns !== null)
        for (let t of this.onDestroyFns)
            t(); super.destroy(); for (let t of this.nodes)
        if (t)
            try {
                for (let n of t.cleanup ?? _C)
                    n();
            }
            finally {
                mo(t);
            } }
};
function RL(e, t) { if (typeof ngServerMode < "u" && ngServerMode)
    return Os; let n = t?.injector ?? D(Te), o = n.get($t), r = n.get(xs), i = n.get(oo, null, { optional: !0 }); r.impl ??= n.get(Su); let s = e; typeof s == "function" && (s = { mixedReadWrite: e }); let a = n.get(di, null, { optional: !0 }), c = new Cf(r.impl, [s.earlyRead, s.write, s.mixedReadWrite, s.read], a?.view, o, n, i?.snapshot(null)); return r.impl.register(c), c; }
function kL(e, t) { let n = G(e), o = t.elementInjector || Xr(); return new bt(n).create(o, t.projectableNodes, t.hostElement, t.environmentInjector, t.directives, t.bindings); }
function xL(e) { let t = G(e); if (!t)
    return null; let n = new bt(t); return { get selector() { return n.selector; }, get type() { return n.componentType; }, get inputs() { return n.inputs; }, get outputs() { return n.outputs; }, get ngContentSelectors() { return n.ngContentSelectors; }, get isStandalone() { return t.standalone; }, get isSignal() { return t.signals; } }; }
function OL(...e) { return e.reduce((t, n) => Object.assign(t, n, { providers: [...t.providers, ...n.providers] }), { providers: [] }); }
var LL = new w("", { providedIn: "platform", factory: () => null }), PL = new w("", { providedIn: "platform", factory: () => null }), FL = new w("", { providedIn: "platform", factory: () => null });
export { rM as ANIMATION_MODULE_TYPE, br as APP_BOOTSTRAP_LISTENER, lt as APP_ID, pd as APP_INITIALIZER, gd as ApplicationInitStatus, dL as ApplicationModule, xe as ApplicationRef, rh as Attribute, HD as COMPILER_OPTIONS, iM as CSP_NONCE, AM as CUSTOM_ELEMENTS_SCHEMA, hs as ChangeDetectionStrategy, Sk as ChangeDetectorRef, UR as Compiler, Gl as CompilerFactory, PR as Component, Js as ComponentFactory, Nr as ComponentFactoryResolver, wy as ComponentRef, WO as ContentChild, GO as ContentChildren, WR as DEFAULT_CURRENCY_CODE, jt as DOCUMENT, rn as DebugElement, Wl as DebugEventListener, cr as DebugNode, mf as DefaultIterableDiffer, ko as DestroyRef, FD as Directive, vt as ENVIRONMENT_INITIALIZER, ur as ElementRef, tC as EmbeddedViewRef, It as EnvironmentInjector, vc as ErrorHandler, VC as EventEmitter, FO as HOST_TAG_NAME, Hg as Host, BD as HostAttributeToken, VR as HostBinding, BR as HostListener, LC as INJECTOR, Og as Inject, AT as Injectable, w as InjectionToken, Te as Injector, HR as Input, vC as IterableDiffers, IC as KeyValueDiffers, uf as LOCALE_ID, dI as MAX_ANIMATION_TIMEOUT, VD as MissingTranslationStrategy, ds as ModuleWithComponentFactories, RM as NO_ERRORS_SCHEMA, $R as NgModule, nv as NgModuleFactory, Fn as NgModuleRef, $ as NgZone, Lg as Optional, jR as Output, Tc as OutputEmitterRef, oM as PLATFORM_ID, Jl as PLATFORM_INITIALIZER, Dc as PendingTasks, FR as Pipe, gC as PlatformRef, go as Query, $i as QueryList, LL as REQUEST, FL as REQUEST_CONTEXT, PL as RESPONSE_INIT, fw as Renderer2, tr as RendererFactory2, qi as RendererStyleFlags2, Sy as Sanitizer, an as SecurityContext, Pg as Self, Fi as SimpleChange, Fg as SkipSelf, qR as TRANSLATIONS, QR as TRANSLATIONS_FORMAT, Xo as TemplateRef, QS as Testability, Rv as TestabilityRegistry, Yn as TransferState, jg as Type, bC as VERSION, SC as Version, QO as ViewChild, qO as ViewChildren, ta as ViewContainerRef, Re as ViewEncapsulation, hf as ViewRef, wm as afterEveryRender, bu as afterNextRender, RL as afterRenderEffect, ZR as asNativeElements, HC as assertInInjectionContext, UC as assertNotInReactiveContext, hk as assertPlatform, gL as booleanAttribute, qC as computed, $O as contentChild, UO as contentChildren, kL as createComponent, nd as createEnvironmentInjector, ov as createNgModule, aS as createNgModuleRef, pk as createPlatform, gk as createPlatformFactory, YO as destroyPlatform, GC as effect, eL as enableProdMode, zS as enableProfiling, xa as forwardRef, Gn as getDebugNode, sL as getModuleFactory, aL as getNgModuleById, Sa as getPlatform, FC as importProvidersFrom, D as inject, jO as input, Py as inputBinding, XO as isDevMode, Sv as isSignal, vo as isStandalone, ud as isWritableSignal, QC as linkedSignal, Je as makeEnvironmentProviders, aM as makeStateKey, OL as mergeApplicationConfig, zO as model, hL as numberAttribute, HO as output, Fy as outputBinding, uL as platformCore, Ov as provideAppInitializer, BC as provideBrowserGlobalErrorListeners, JO as provideCheckNoChangesConfig, PC as provideEnvironmentInitializer, pN as provideNgReflectAttributes, KO as providePlatformInitializer, iL as provideStabilityDebugging, ZO as provideZoneChangeDetection, zR as provideZonelessChangeDetection, xL as reflectComponentType, z as resolveForwardRef, ZC as resource, ei as runInInjectionContext, kv as setTestabilityGetter, Ec as signal, xw as twoWayBinding, pi as untracked, VO as viewChild, BO as viewChildren, uI as \u0275ANIMATIONS_DISABLED, mh as \u0275AcxChangeDetectionStrategy, yh as \u0275AcxViewEncapsulation, xs as \u0275AfterRenderManager, tL as \u0275CLIENT_RENDER_MODE_FLAG, H as \u0275CONTAINER_HEADER_OFFSET, Wu as \u0275CONTROL, $t as \u0275ChangeDetectionScheduler, Js as \u0275ComponentFactory, US as \u0275Console, kr as \u0275DEFAULT_LOCALE_ID, Mv as \u0275DEFER_BLOCK_CONFIG, HS as \u0275DEFER_BLOCK_DEPENDENCY_INTERCEPTOR, ut as \u0275DEHYDRATED_BLOCK_REGISTRY, ad as \u0275DeferBlockBehavior, U as \u0275DeferBlockState, uk as \u0275ENABLE_ROOT_COMPONENT_BOOTSTRAP, Th as \u0275EVENT_REPLAY_QUEUE, Cc as \u0275EffectScheduler, ek as \u0275Framework, Hh as \u0275HydrationStatus, sM as \u0275IMAGE_CONFIG, vh as \u0275IMAGE_CONFIG_DEFAULTS, Lf as \u0275INJECTOR_SCOPE, PO as \u0275INPUT_SIGNAL_BRAND_WRITE_TYPE, Bt as \u0275INTERNAL_APPLICATION_ERROR_HANDLER, cM as \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION, sn as \u0275IS_HYDRATION_DOM_REUSE_ENABLED, iu as \u0275IS_INCREMENTAL_HYDRATION_ENABLED, mr as \u0275JSACTION_BLOCK_ELEMENT_MAP, lu as \u0275JSACTION_EVENT_CONTRACT, Ui as \u0275LContext, $n as \u0275LocaleDataIndex, un as \u0275NG_COMP_DEF, Gr as \u0275NG_DIR_DEF, kt as \u0275NG_ELEMENT_ID, Oa as \u0275NG_INJ_DEF, La as \u0275NG_MOD_DEF, Wr as \u0275NG_PIPE_DEF, zr as \u0275NG_PROV_DEF, Ri as \u0275NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, L as \u0275NO_CHANGE, jn as \u0275NgModuleFactory, yc as \u0275NoopNgZone, Uk as \u0275PERFORMANCE_MARK_PREFIX, ak as \u0275PROVIDED_NG_ZONE, zC as \u0275PROVIDED_ZONELESS, Vt as \u0275PendingTasksInternal, b as \u0275ProfilerEvent, Ba as \u0275R3Injector, Pi as \u0275ReflectionCapabilities, bt as \u0275Render3ComponentFactory, ns as \u0275Render3ComponentRef, Hn as \u0275Render3NgModuleRef, YC as \u0275ResourceImpl, _ as \u0275RuntimeError, Ke as \u0275SIGNAL, Oh as \u0275SSR_CONTENT_INTEGRITY_MARKER, bv as \u0275TESTABILITY, Av as \u0275TESTABILITY_GETTER, Tv as \u0275TimerScheduler, ks as \u0275TracingAction, oo as \u0275TracingService, St as \u0275ViewRef, Vr as \u0275XSS_SECURITY_URL, mn as \u0275ZONELESS_ENABLED, im as \u0275_sanitizeHtml, Ss as \u0275_sanitizeUrl, Kt as \u0275allLeavingAnimations, no as \u0275allowSanitizationBypassAndThrow, pL as \u0275annotateForHydration, DL as \u0275assertType, FM as \u0275bypassSanitizationTrustHtml, BM as \u0275bypassSanitizationTrustResourceUrl, jM as \u0275bypassSanitizationTrustScript, HM as \u0275bypassSanitizationTrustStyle, VM as \u0275bypassSanitizationTrustUrl, nS as \u0275clearResolutionOfComponentResourcesQueue, wD as \u0275compileComponent, lf as \u0275compileDirective, ND as \u0275compileNgModule, _D as \u0275compileNgModuleDefs, ik as \u0275compileNgModuleFactory, PD as \u0275compilePipe, Ib as \u0275controlUpdate, Fa as \u0275convertToBitFlags, jC as \u0275createInjector, mk as \u0275createOrReusePlatformInjector, cL as \u0275defaultIterableDiffers, lL as \u0275defaultKeyValueDiffers, Ln as \u0275depsTracker, Oy as \u0275devModeEqual, IL as \u0275disableProfiling, vL as \u0275enableProfiling, KC as \u0275encapsulateResourceError, Od as \u0275findLocaleData, TD as \u0275flushModuleScopingQueueAsMuchAsPossible, wf as \u0275formatRuntimeError, TR as \u0275generateStandaloneInDeclarationsError, $S as \u0275getAsyncClassMetadataFn, EL as \u0275getClosestComponentName, G as \u0275getComponentDef, Gn as \u0275getDebugNode, Oi as \u0275getDeferBlocks, QT as \u0275getDirectives, ys as \u0275getDocument, YT as \u0275getHostElement, RC as \u0275getInjectableDef, Ie as \u0275getLContext, nA as \u0275getLocaleCurrencyCode, kI as \u0275getLocalePluralCase, WC as \u0275getOutputDestroyRef, Jh as \u0275getSanitizationBypassType, GS as \u0275getTransferState, xM as \u0275getUnknownElementStrictMode, LM as \u0275getUnknownPropertyStrictMode, Ee as \u0275global, Hy as \u0275inferTagNameFromDefinition, bk as \u0275injectChangeDetectorRef, fL as \u0275internalCreateApplication, ck as \u0275internalProvideZoneChangeDetection, Lv as \u0275isBoundToModule, tS as \u0275isComponentDefPendingResolution, OC as \u0275isEnvironmentProviders, kC as \u0275isInjectable, zt as \u0275isNgModule, fd as \u0275isPromise, xv as \u0275isSubscribable, m_ as \u0275isViewDirty, y_ as \u0275markForRefresh, qe as \u0275noSideEffects, af as \u0275patchComponentDefWithScope, Q as \u0275performanceMarkFeature, ia as \u0275promiseWithResolvers, Ea as \u0275provideZonelessChangeDetectionInternal, WS as \u0275publishExternalGlobalUtil, vM as \u0275readHydrationInfo, tA as \u0275registerLocaleData, ot as \u0275renderDeferBlockState, _R as \u0275resetCompiledComponents, EM as \u0275resetIncrementalHydrationEnabledWarnedForTests, DR as \u0275resetJitOptions, Jy as \u0275resolveComponentResources, oS as \u0275restoreComponentResolutionQueue, sS as \u0275setAllowDuplicateNgModuleIdsForTest, JC as \u0275setAlternateWeakRefImpl, ID as \u0275setClassDebugInfo, ld as \u0275setClassMetadata, wv as \u0275setClassMetadataAsync, wC as \u0275setCurrentInjector, tM as \u0275setDocument, xC as \u0275setInjectorProfilerContext, PI as \u0275setLocaleId, kM as \u0275setUnknownElementStrictMode, OM as \u0275setUnknownPropertyStrictMode, mL as \u0275startMeasuring, yL as \u0275stopMeasuring, wo as \u0275store, Br as \u0275stringify, cf as \u0275transitiveScopesFor, sa as \u0275triggerResourceLoading, AC as \u0275truncateMiddle, oA as \u0275unregisterLocaleData, dt as \u0275unwrapSafeValue, $C as \u0275unwrapWritableSignal, nL as \u0275withDomHydration, yk as \u0275withEventReplay, oL as \u0275withI18nSupport, rL as \u0275withIncrementalHydration, qE as \u0275\u0275ExternalStylesFeature, fo as \u0275\u0275FactoryTarget, dv as \u0275\u0275HostDirectivesFeature, rd as \u0275\u0275InheritDefinitionFeature, Bg as \u0275\u0275NgOnChangesFeature, WE as \u0275\u0275ProvidersFeature, Cm as \u0275\u0275advance, Vo as \u0275\u0275animateEnter, Bo as \u0275\u0275animateEnterListener, $o as \u0275\u0275animateLeave, ss as \u0275\u0275animateLeaveListener, yd as \u0275\u0275ariaProperty, xE as \u0275\u0275attachSourceLocations, vd as \u0275\u0275attribute, lE as \u0275\u0275classMap, qd as \u0275\u0275classProp, hI as \u0275\u0275componentInstance, MI as \u0275\u0275conditional, fa as \u0275\u0275conditionalBranchCreate, TI as \u0275\u0275conditionalCreate, $d as \u0275\u0275contentQuery, zd as \u0275\u0275contentQuerySignal, yI as \u0275\u0275control, mI as \u0275\u0275controlCreate, sf as \u0275\u0275declareLet, Bv as \u0275\u0275defer, _v as \u0275\u0275deferEnableTimerScheduling, Gv as \u0275\u0275deferHydrateNever, oI as \u0275\u0275deferHydrateOnHover, Qv as \u0275\u0275deferHydrateOnIdle, Kv as \u0275\u0275deferHydrateOnImmediate, sI as \u0275\u0275deferHydrateOnInteraction, eI as \u0275\u0275deferHydrateOnTimer, lI as \u0275\u0275deferHydrateOnViewport, zv as \u0275\u0275deferHydrateWhen, tI as \u0275\u0275deferOnHover, Wv as \u0275\u0275deferOnIdle, Zv as \u0275\u0275deferOnImmediate, rI as \u0275\u0275deferOnInteraction, Jv as \u0275\u0275deferOnTimer, aI as \u0275\u0275deferOnViewport, nI as \u0275\u0275deferPrefetchOnHover, qv as \u0275\u0275deferPrefetchOnIdle, Yv as \u0275\u0275deferPrefetchOnImmediate, iI as \u0275\u0275deferPrefetchOnInteraction, Xv as \u0275\u0275deferPrefetchOnTimer, cI as \u0275\u0275deferPrefetchOnViewport, Uv as \u0275\u0275deferPrefetchWhen, $v as \u0275\u0275deferWhen, iv as \u0275\u0275defineComponent, av as \u0275\u0275defineDirective, B as \u0275\u0275defineInjectable, yo as \u0275\u0275defineInjector, od as \u0275\u0275defineNgModule, cv as \u0275\u0275definePipe, co as \u0275\u0275directiveInject, Ja as \u0275\u0275disableBindings, _d as \u0275\u0275domElement, Ad as \u0275\u0275domElementContainer, bd as \u0275\u0275domElementContainerEnd, va as \u0275\u0275domElementContainerStart, ma as \u0275\u0275domElementEnd, ha as \u0275\u0275domElementStart, Vd as \u0275\u0275domListener, kd as \u0275\u0275domProperty, sd as \u0275\u0275domTemplate, Nd as \u0275\u0275element, Sd as \u0275\u0275elementContainer, Rr as \u0275\u0275elementContainerEnd, ya as \u0275\u0275elementContainerStart, ga as \u0275\u0275elementEnd, pa as \u0275\u0275elementStart, Ka as \u0275\u0275enableBindings, vD as \u0275\u0275getComponentDepsFactory, RI as \u0275\u0275getCurrentView, nh as \u0275\u0275getInheritedFactory, ED as \u0275\u0275getReplaceMetadataURL, qI as \u0275\u0275i18n, ZI as \u0275\u0275i18nApply, QI as \u0275\u0275i18nAttributes, Pd as \u0275\u0275i18nEnd, Fd as \u0275\u0275i18nExp, YI as \u0275\u0275i18nPostprocess, Ld as \u0275\u0275i18nStart, Le as \u0275\u0275inject, ps as \u0275\u0275injectAttribute, OE as \u0275\u0275interpolate, LE as \u0275\u0275interpolate1, PE as \u0275\u0275interpolate2, FE as \u0275\u0275interpolate3, HE as \u0275\u0275interpolate4, jE as \u0275\u0275interpolate5, VE as \u0275\u0275interpolate6, BE as \u0275\u0275interpolate7, $E as \u0275\u0275interpolate8, UE as \u0275\u0275interpolateV, by as \u0275\u0275invalidFactory, Qr as \u0275\u0275invalidFactoryDep, Hd as \u0275\u0275listener, tE as \u0275\u0275loadQuery, gc as \u0275\u0275namespaceHTML, pc as \u0275\u0275namespaceMathML, fc as \u0275\u0275namespaceSVG, KI as \u0275\u0275nextContext, TL as \u0275\u0275ngDeclareClassMetadata, ML as \u0275\u0275ngDeclareClassMetadataAsync, NL as \u0275\u0275ngDeclareComponent, CL as \u0275\u0275ngDeclareDirective, _L as \u0275\u0275ngDeclareFactory, wL as \u0275\u0275ngDeclareInjectable, SL as \u0275\u0275ngDeclareInjector, bL as \u0275\u0275ngDeclareNgModule, AL as \u0275\u0275ngDeclarePipe, dD as \u0275\u0275pipe, fD as \u0275\u0275pipeBind1, pD as \u0275\u0275pipeBind2, gD as \u0275\u0275pipeBind3, hD as \u0275\u0275pipeBind4, mD as \u0275\u0275pipeBindV, XI as \u0275\u0275projection, JI as \u0275\u0275projectionDef, Md as \u0275\u0275property, YE as \u0275\u0275pureFunction0, KE as \u0275\u0275pureFunction1, JE as \u0275\u0275pureFunction2, XE as \u0275\u0275pureFunction3, eD as \u0275\u0275pureFunction4, tD as \u0275\u0275pureFunction5, nD as \u0275\u0275pureFunction6, oD as \u0275\u0275pureFunction7, rD as \u0275\u0275pureFunction8, iD as \u0275\u0275pureFunctionV, nE as \u0275\u0275queryAdvance, eE as \u0275\u0275queryRefresh, kE as \u0275\u0275readContextLet, oE as \u0275\u0275reference, ed as \u0275\u0275registerNgModuleType, SI as \u0275\u0275repeater, wI as \u0275\u0275repeaterCreate, _I as \u0275\u0275repeaterTrackByIdentity, NI as \u0275\u0275repeaterTrackByIndex, DD as \u0275\u0275replaceMetadata, tc as \u0275\u0275resetView, Du as \u0275\u0275resolveBody, vm as \u0275\u0275resolveDocument, ym as \u0275\u0275resolveWindow, ec as \u0275\u0275restoreView, um as \u0275\u0275sanitizeHtml, Eu as \u0275\u0275sanitizeResourceUrl, fm as \u0275\u0275sanitizeScript, dm as \u0275\u0275sanitizeStyle, Iu as \u0275\u0275sanitizeUrl, hm as \u0275\u0275sanitizeUrlOrResourceUrl, QE as \u0275\u0275setComponentScope, ZE as \u0275\u0275setNgModuleScope, RE as \u0275\u0275storeLet, cE as \u0275\u0275styleMap, Wd as \u0275\u0275styleProp, jd as \u0275\u0275syntheticHostListener, xd as \u0275\u0275syntheticHostProperty, id as \u0275\u0275template, yD as \u0275\u0275templateRefExtractor, yE as \u0275\u0275text, Qd as \u0275\u0275textInterpolate, Ia as \u0275\u0275textInterpolate1, Zd as \u0275\u0275textInterpolate2, Yd as \u0275\u0275textInterpolate3, Kd as \u0275\u0275textInterpolate4, Jd as \u0275\u0275textInterpolate5, Xd as \u0275\u0275textInterpolate6, ef as \u0275\u0275textInterpolate7, tf as \u0275\u0275textInterpolate8, nf as \u0275\u0275textInterpolateV, pm as \u0275\u0275trustConstantHtml, gm as \u0275\u0275trustConstantResourceUrl, bE as \u0275\u0275twoWayBindingSet, rf as \u0275\u0275twoWayListener, of as \u0275\u0275twoWayProperty, mm as \u0275\u0275validateAttribute, Ud as \u0275\u0275viewQuery, Gd as \u0275\u0275viewQuerySignal };
/*! Bundled license information:

@angular/core/fesm2022/_debug_node-chunk.mjs:
@angular/core/fesm2022/core.mjs:
  (**
   * @license Angular v21.1.0
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
