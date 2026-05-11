import "@nf-internal/chunk-FIE2NKNJ";
import { A as Ot, B as An, C as q, D as Ye, E as V, a as d, b as T, c as R, d as wn, e as Cn, f as bn, g as K, h as P, i as L, j as M, k as g, l as In, m as Nt, n as En, o as E, p as _t, q as z, r as Ae, s as Tn, t as Qe, u as Z, v as De, w as Ne, x as ve, y as Mn, z as J } from "@nf-internal/chunk-UMZMRDSE";
import { DOCUMENT as Vr, Location as Xt } from "@angular/common";
import * as y from "@angular/core";
import { \u0275isPromise as Gr, computed as Wr, \u0275RuntimeError as A, InjectionToken as ne, EventEmitter as Ke, input as Qr, inject as v, ViewContainerRef as Yr, ChangeDetectorRef as Kr, reflectComponentType as Zr, runInInjectionContext as j, \u0275isInjectable as Jr, \u0275isNgModule as va, isStandalone as ma, createEnvironmentInjector as Xr, Compiler as ei, NgModuleFactory as ti, afterNextRender as ni, signal as Nn, EnvironmentInjector as en, DestroyRef as ri, untracked as Ue, \u0275Console as ii, \u0275PendingTasksInternal as oi, \u0275INTERNAL_APPLICATION_ERROR_HANDLER as si, \u0275formatRuntimeError as ai } from "@angular/core";
import { \u0275getDOM as Is, DOCUMENT as Br } from "@angular/common";
import { \u0275getDOM as ca } from "@angular/common";
import * as ae from "@angular/core";
import { \u0275global as As, ApplicationRef as Ds, InjectionToken as Ns, \u0275Console as _s, Optional as Os, Injector as Us, \u0275RuntimeError as js, SecurityContext as ks, \u0275allowSanitizationBypassAndThrow as $s, \u0275unwrapSafeValue as zs, \u0275_sanitizeUrl as Hs, \u0275_sanitizeHtml as Fs, \u0275bypassSanitizationTrustHtml as Bs, \u0275bypassSanitizationTrustStyle as qs, \u0275bypassSanitizationTrustScript as Vs, \u0275bypassSanitizationTrustUrl as Gs, \u0275bypassSanitizationTrustResourceUrl as Ws, \u0275withI18nSupport as Qs, \u0275withEventReplay as Ys, \u0275withIncrementalHydration as Ks, makeEnvironmentProviders as Zs, \u0275withDomHydration as Xs, ENVIRONMENT_INITIALIZER as ea, inject as ta, \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION as na, \u0275formatRuntimeError as ra, Version as ia } from "@angular/core";
import { \u0275withHttpTransferCache as sa } from "@angular/common/http";
var Dn = (() => { class t {
    _doc;
    constructor(e) { this._doc = e; }
    getTitle() { return this._doc.title; }
    setTitle(e) { this._doc.title = e || ""; }
    static \u0275fac = function (n) { return new (n || t)(ae.\u0275\u0275inject(Br)); };
    static \u0275prov = ae.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
var p = "primary", He = Symbol("RouteTitle"), xt = class {
    params;
    constructor(r) { this.params = r || {}; }
    has(r) { return Object.prototype.hasOwnProperty.call(this.params, r); }
    get(r) { if (this.has(r)) {
        let e = this.params[r];
        return Array.isArray(e) ? e[0] : e;
    } return null; }
    getAll(r) { if (this.has(r)) {
        let e = this.params[r];
        return Array.isArray(e) ? e : [e];
    } return []; }
    get keys() { return Object.keys(this.params); }
};
function le(t) { return new xt(t); }
function Ut(t, r, e) { for (let n = 0; n < t.length; n++) {
    let i = t[n], o = r[n];
    if (i[0] === ":")
        e[i.substring(1)] = o;
    else if (i !== o.path)
        return !1;
} return !0; }
function $n(t, r, e) { let n = e.path.split("/"), i = n.indexOf("**"); if (i === -1) {
    if (n.length > t.length || e.pathMatch === "full" && (r.hasChildren() || n.length < t.length))
        return null;
    let c = {}, u = t.slice(0, n.length);
    return Ut(n, u, c) ? { consumed: u, posParams: c } : null;
} if (i !== n.lastIndexOf("**"))
    return null; let o = n.slice(0, i), s = n.slice(i + 1); if (o.length + s.length > t.length || e.pathMatch === "full" && r.hasChildren() && e.path !== "**")
    return null; let a = {}; return !Ut(o, t.slice(0, o.length), a) || !Ut(s, t.slice(t.length - s.length), a) ? null : { consumed: t, posParams: a }; }
function nt(t) { return new Promise((r, e) => { t.pipe(J()).subscribe({ next: n => r(n), error: n => e(n) }); }); }
function ci(t, r) { if (t.length !== r.length)
    return !1; for (let e = 0; e < t.length; ++e)
    if (!H(t[e], r[e]))
        return !1; return !0; }
function H(t, r) { let e = t ? kt(t) : void 0, n = r ? kt(r) : void 0; if (!e || !n || e.length != n.length)
    return !1; let i; for (let o = 0; o < e.length; o++)
    if (i = e[o], !zn(t[i], r[i]))
        return !1; return !0; }
function kt(t) { return [...Object.keys(t), ...Object.getOwnPropertySymbols(t)]; }
function zn(t, r) { if (Array.isArray(t) && Array.isArray(r)) {
    if (t.length !== r.length)
        return !1;
    let e = [...t].sort(), n = [...r].sort();
    return e.every((i, o) => n[o] === i);
}
else
    return t === r; }
function ui(t) { return t.length > 0 ? t[t.length - 1] : null; }
function fe(t) { return Nt(t) ? t : Gr(t) ? M(Promise.resolve(t)) : g(t); }
function Hn(t) { return Nt(t) ? nt(t) : Promise.resolve(t); }
var li = { exact: Bn, subset: qn }, Fn = { exact: di, subset: hi, ignored: () => !0 };
function tn(t, r, e) { let n = t instanceof O ? t : r.parseUrl(t); return Wr(() => $t(r.lastSuccessfulNavigation()?.finalUrl ?? new O, n, e)); }
function $t(t, r, e) { return li[e.paths](t.root, r.root, e.matrixParams) && Fn[e.queryParams](t.queryParams, r.queryParams) && !(e.fragment === "exact" && t.fragment !== r.fragment); }
function di(t, r) { return H(t, r); }
function Bn(t, r, e) { if (!ce(t.segments, r.segments) || !Xe(t.segments, r.segments, e) || t.numberOfChildren !== r.numberOfChildren)
    return !1; for (let n in r.children)
    if (!t.children[n] || !Bn(t.children[n], r.children[n], e))
        return !1; return !0; }
function hi(t, r) { return Object.keys(r).length <= Object.keys(t).length && Object.keys(r).every(e => zn(t[e], r[e])); }
function qn(t, r, e) { return Vn(t, r, r.segments, e); }
function Vn(t, r, e, n) { if (t.segments.length > e.length) {
    let i = t.segments.slice(0, e.length);
    return !(!ce(i, e) || r.hasChildren() || !Xe(i, e, n));
}
else if (t.segments.length === e.length) {
    if (!ce(t.segments, e) || !Xe(t.segments, e, n))
        return !1;
    for (let i in r.children)
        if (!t.children[i] || !qn(t.children[i], r.children[i], n))
            return !1;
    return !0;
}
else {
    let i = e.slice(0, t.segments.length), o = e.slice(t.segments.length);
    return !ce(t.segments, i) || !Xe(t.segments, i, n) || !t.children[p] ? !1 : Vn(t.children[p], r, o, n);
} }
function Xe(t, r, e) { return r.every((n, i) => Fn[e](t[i].parameters, n.parameters)); }
var O = class {
    root;
    queryParams;
    fragment;
    _queryParamMap;
    constructor(r = new m([], {}), e = {}, n = null) { this.root = r, this.queryParams = e, this.fragment = n; }
    get queryParamMap() { return this._queryParamMap ??= le(this.queryParams), this._queryParamMap; }
    toString() { return gi.serialize(this); }
}, m = class {
    segments;
    children;
    parent = null;
    constructor(r, e) { this.segments = r, this.children = e, Object.values(e).forEach(n => n.parent = this); }
    hasChildren() { return this.numberOfChildren > 0; }
    get numberOfChildren() { return Object.keys(this.children).length; }
    toString() { return et(this); }
}, X = class {
    path;
    parameters;
    _parameterMap;
    constructor(r, e) { this.path = r, this.parameters = e; }
    get parameterMap() { return this._parameterMap ??= le(this.parameters), this._parameterMap; }
    toString() { return Wn(this); }
};
function fi(t, r) { return ce(t, r) && t.every((e, n) => H(e.parameters, r[n].parameters)); }
function ce(t, r) { return t.length !== r.length ? !1 : t.every((e, n) => e.path === r[n].path); }
function pi(t, r) { let e = []; return Object.entries(t.children).forEach(([n, i]) => { n === p && (e = e.concat(r(i, n))); }), Object.entries(t.children).forEach(([n, i]) => { n !== p && (e = e.concat(r(i, n))); }), e; }
var pe = (() => { class t {
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: () => new W, providedIn: "root" });
} return t; })(), W = class {
    parse(r) { let e = new Ht(r); return new O(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment()); }
    serialize(r) { let e = `/${_e(r.root, !0)}`, n = yi(r.queryParams), i = typeof r.fragment == "string" ? `#${vi(r.fragment)}` : ""; return `${e}${n}${i}`; }
}, gi = new W;
function et(t) { return t.segments.map(r => Wn(r)).join("/"); }
function _e(t, r) { if (!t.hasChildren())
    return et(t); if (r) {
    let e = t.children[p] ? _e(t.children[p], !1) : "", n = [];
    return Object.entries(t.children).forEach(([i, o]) => { i !== p && n.push(`${i}:${_e(o, !1)}`); }), n.length > 0 ? `${e}(${n.join("//")})` : e;
}
else {
    let e = pi(t, (n, i) => i === p ? [_e(t.children[p], !1)] : [`${i}:${_e(n, !1)}`]);
    return Object.keys(t.children).length === 1 && t.children[p] != null ? `${et(t)}/${e[0]}` : `${et(t)}/(${e.join("//")})`;
} }
function Gn(t) { return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ","); }
function Ze(t) { return Gn(t).replace(/%3B/gi, ";"); }
function vi(t) { return encodeURI(t); }
function zt(t) { return Gn(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&"); }
function tt(t) { return decodeURIComponent(t); }
function _n(t) { return tt(t.replace(/\+/g, "%20")); }
function Wn(t) { return `${zt(t.path)}${mi(t.parameters)}`; }
function mi(t) { return Object.entries(t).map(([r, e]) => `;${zt(r)}=${zt(e)}`).join(""); }
function yi(t) { let r = Object.entries(t).map(([e, n]) => Array.isArray(n) ? n.map(i => `${Ze(e)}=${Ze(i)}`).join("&") : `${Ze(e)}=${Ze(n)}`).filter(e => e); return r.length ? `?${r.join("&")}` : ""; }
var Ri = /^[^\/()?;#]+/;
function Pt(t) { let r = t.match(Ri); return r ? r[0] : ""; }
var Si = /^[^\/()?;=#]+/;
function wi(t) { let r = t.match(Si); return r ? r[0] : ""; }
var Ci = /^[^=?&#]+/;
function bi(t) { let r = t.match(Ci); return r ? r[0] : ""; }
var Ii = /^[^&#]+/;
function Ei(t) { let r = t.match(Ii); return r ? r[0] : ""; }
var Ht = class {
    url;
    remaining;
    constructor(r) { this.url = r, this.remaining = r; }
    parseRootSegment() { return this.consumeOptional("/"), this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#") ? new m([], {}) : new m([], this.parseChildren()); }
    parseQueryParams() { let r = {}; if (this.consumeOptional("?"))
        do
            this.parseQueryParam(r);
        while (this.consumeOptional("&")); return r; }
    parseFragment() { return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null; }
    parseChildren() { if (this.remaining === "")
        return {}; this.consumeOptional("/"); let r = []; for (this.peekStartsWith("(") || r.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");)
        this.capture("/"), r.push(this.parseSegment()); let e = {}; this.peekStartsWith("/(") && (this.capture("/"), e = this.parseParens(!0)); let n = {}; return this.peekStartsWith("(") && (n = this.parseParens(!1)), (r.length > 0 || Object.keys(e).length > 0) && (n[p] = new m(r, e)), n; }
    parseSegment() { let r = Pt(this.remaining); if (r === "" && this.peekStartsWith(";"))
        throw new A(4009, !1); return this.capture(r), new X(tt(r), this.parseMatrixParams()); }
    parseMatrixParams() { let r = {}; for (; this.consumeOptional(";");)
        this.parseParam(r); return r; }
    parseParam(r) { let e = wi(this.remaining); if (!e)
        return; this.capture(e); let n = ""; if (this.consumeOptional("=")) {
        let i = Pt(this.remaining);
        i && (n = i, this.capture(n));
    } r[tt(e)] = tt(n); }
    parseQueryParam(r) { let e = bi(this.remaining); if (!e)
        return; this.capture(e); let n = ""; if (this.consumeOptional("=")) {
        let s = Ei(this.remaining);
        s && (n = s, this.capture(n));
    } let i = _n(e), o = _n(n); if (r.hasOwnProperty(i)) {
        let s = r[i];
        Array.isArray(s) || (s = [s], r[i] = s), s.push(o);
    }
    else
        r[i] = o; }
    parseParens(r) { let e = {}; for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
        let n = Pt(this.remaining), i = this.remaining[n.length];
        if (i !== "/" && i !== ")" && i !== ";")
            throw new A(4010, !1);
        let o;
        n.indexOf(":") > -1 ? (o = n.slice(0, n.indexOf(":")), this.capture(o), this.capture(":")) : r && (o = p);
        let s = this.parseChildren();
        e[o ?? p] = Object.keys(s).length === 1 && s[p] ? s[p] : new m([], s), this.consumeOptional("//");
    } return e; }
    peekStartsWith(r) { return this.remaining.startsWith(r); }
    consumeOptional(r) { return this.peekStartsWith(r) ? (this.remaining = this.remaining.substring(r.length), !0) : !1; }
    capture(r) { if (!this.consumeOptional(r))
        throw new A(4011, !1); }
};
function Qn(t) { return t.segments.length > 0 ? new m([], { [p]: t }) : t; }
function Yn(t) { let r = {}; for (let [n, i] of Object.entries(t.children)) {
    let o = Yn(i);
    if (n === p && o.segments.length === 0 && o.hasChildren())
        for (let [s, a] of Object.entries(o.children))
            r[s] = a;
    else
        (o.segments.length > 0 || o.hasChildren()) && (r[n] = o);
} let e = new m(t.segments, r); return Ti(e); }
function Ti(t) { if (t.numberOfChildren === 1 && t.children[p]) {
    let r = t.children[p];
    return new m(t.segments.concat(r.segments), r.children);
} return t; }
function ee(t) { return t instanceof O; }
function Kn(t, r, e = null, n = null, i = new W) { let o = Zn(t); return Jn(o, r, e, n, i); }
function Zn(t) { let r; function e(o) { let s = {}; for (let c of o.children) {
    let u = e(c);
    s[c.outlet] = u;
} let a = new m(o.url, s); return o === t && (r = a), a; } let n = e(t.root), i = Qn(n); return r ?? i; }
function Jn(t, r, e, n, i) { let o = t; for (; o.parent;)
    o = o.parent; if (r.length === 0)
    return Lt(o, o, o, e, n, i); let s = Mi(r); if (s.toRoot())
    return Lt(o, o, new m([], {}), e, n, i); let a = Ai(s, o, t), c = a.processChildren ? Pe(a.segmentGroup, a.index, s.commands) : er(a.segmentGroup, a.index, s.commands); return Lt(o, a.segmentGroup, c, e, n, i); }
function rt(t) { return typeof t == "object" && t != null && !t.outlets && !t.segmentPath; }
function je(t) { return typeof t == "object" && t != null && t.outlets; }
function On(t, r, e) { t ||= "\u0275"; let n = new O; return n.queryParams = { [t]: r }, e.parse(e.serialize(n)).queryParams[t]; }
function Lt(t, r, e, n, i, o) { let s = {}; for (let [u, h] of Object.entries(n ?? {}))
    s[u] = Array.isArray(h) ? h.map(f => On(u, f, o)) : On(u, h, o); let a; t === r ? a = e : a = Xn(t, r, e); let c = Qn(Yn(a)); return new O(c, s, i); }
function Xn(t, r, e) { let n = {}; return Object.entries(t.children).forEach(([i, o]) => { o === r ? n[i] = e : n[i] = Xn(o, r, e); }), new m(t.segments, n); }
var it = class {
    isAbsolute;
    numberOfDoubleDots;
    commands;
    constructor(r, e, n) { if (this.isAbsolute = r, this.numberOfDoubleDots = e, this.commands = n, r && n.length > 0 && rt(n[0]))
        throw new A(4003, !1); let i = n.find(je); if (i && i !== ui(n))
        throw new A(4004, !1); }
    toRoot() { return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"; }
};
function Mi(t) { if (typeof t[0] == "string" && t.length === 1 && t[0] === "/")
    return new it(!0, 0, t); let r = 0, e = !1, n = t.reduce((i, o, s) => { if (typeof o == "object" && o != null) {
    if (o.outlets) {
        let a = {};
        return Object.entries(o.outlets).forEach(([c, u]) => { a[c] = typeof u == "string" ? u.split("/") : u; }), [...i, { outlets: a }];
    }
    if (o.segmentPath)
        return [...i, o.segmentPath];
} return typeof o != "string" ? [...i, o] : s === 0 ? (o.split("/").forEach((a, c) => { c == 0 && a === "." || (c == 0 && a === "" ? e = !0 : a === ".." ? r++ : a != "" && i.push(a)); }), i) : [...i, o]; }, []); return new it(e, r, n); }
var ye = class {
    segmentGroup;
    processChildren;
    index;
    constructor(r, e, n) { this.segmentGroup = r, this.processChildren = e, this.index = n; }
};
function Ai(t, r, e) { if (t.isAbsolute)
    return new ye(r, !0, 0); if (!e)
    return new ye(r, !1, NaN); if (e.parent === null)
    return new ye(e, !0, 0); let n = rt(t.commands[0]) ? 0 : 1, i = e.segments.length - 1 + n; return Di(e, i, t.numberOfDoubleDots); }
function Di(t, r, e) { let n = t, i = r, o = e; for (; o > i;) {
    if (o -= i, n = n.parent, !n)
        throw new A(4005, !1);
    i = n.segments.length;
} return new ye(n, !1, i - o); }
function Ni(t) { return je(t[0]) ? t[0].outlets : { [p]: t }; }
function er(t, r, e) { if (t ??= new m([], {}), t.segments.length === 0 && t.hasChildren())
    return Pe(t, r, e); let n = _i(t, r, e), i = e.slice(n.commandIndex); if (n.match && n.pathIndex < t.segments.length) {
    let o = new m(t.segments.slice(0, n.pathIndex), {});
    return o.children[p] = new m(t.segments.slice(n.pathIndex), t.children), Pe(o, 0, i);
}
else
    return n.match && i.length === 0 ? new m(t.segments, {}) : n.match && !t.hasChildren() ? Ft(t, r, e) : n.match ? Pe(t, 0, i) : Ft(t, r, e); }
function Pe(t, r, e) { if (e.length === 0)
    return new m(t.segments, {}); {
    let n = Ni(e), i = {};
    if (Object.keys(n).some(o => o !== p) && t.children[p] && t.numberOfChildren === 1 && t.children[p].segments.length === 0) {
        let o = Pe(t.children[p], r, e);
        return new m(t.segments, o.children);
    }
    return Object.entries(n).forEach(([o, s]) => { typeof s == "string" && (s = [s]), s !== null && (i[o] = er(t.children[o], r, s)); }), Object.entries(t.children).forEach(([o, s]) => { n[o] === void 0 && (i[o] = s); }), new m(t.segments, i);
} }
function _i(t, r, e) { let n = 0, i = r, o = { match: !1, pathIndex: 0, commandIndex: 0 }; for (; i < t.segments.length;) {
    if (n >= e.length)
        return o;
    let s = t.segments[i], a = e[n];
    if (je(a))
        break;
    let c = `${a}`, u = n < e.length - 1 ? e[n + 1] : null;
    if (i > 0 && c === void 0)
        break;
    if (c && u && typeof u == "object" && u.outlets === void 0) {
        if (!Pn(c, u, s))
            return o;
        n += 2;
    }
    else {
        if (!Pn(c, {}, s))
            return o;
        n++;
    }
    i++;
} return { match: !0, pathIndex: i, commandIndex: n }; }
function Ft(t, r, e) { let n = t.segments.slice(0, r), i = 0; for (; i < e.length;) {
    let o = e[i];
    if (je(o)) {
        let c = Oi(o.outlets);
        return new m(n, c);
    }
    if (i === 0 && rt(e[0])) {
        let c = t.segments[r];
        n.push(new X(c.path, Un(e[0]))), i++;
        continue;
    }
    let s = je(o) ? o.outlets[p] : `${o}`, a = i < e.length - 1 ? e[i + 1] : null;
    s && a && rt(a) ? (n.push(new X(s, Un(a))), i += 2) : (n.push(new X(s, {})), i++);
} return new m(n, {}); }
function Oi(t) { let r = {}; return Object.entries(t).forEach(([e, n]) => { typeof n == "string" && (n = [n]), n !== null && (r[e] = Ft(new m([], {}), 0, n)); }), r; }
function Un(t) { let r = {}; return Object.entries(t).forEach(([e, n]) => r[e] = `${n}`), r; }
function Pn(t, r, e) { return t == e.path && H(r, e.parameters); }
var Re = "imperative", b = (function (t) { return t[t.NavigationStart = 0] = "NavigationStart", t[t.NavigationEnd = 1] = "NavigationEnd", t[t.NavigationCancel = 2] = "NavigationCancel", t[t.NavigationError = 3] = "NavigationError", t[t.RoutesRecognized = 4] = "RoutesRecognized", t[t.ResolveStart = 5] = "ResolveStart", t[t.ResolveEnd = 6] = "ResolveEnd", t[t.GuardsCheckStart = 7] = "GuardsCheckStart", t[t.GuardsCheckEnd = 8] = "GuardsCheckEnd", t[t.RouteConfigLoadStart = 9] = "RouteConfigLoadStart", t[t.RouteConfigLoadEnd = 10] = "RouteConfigLoadEnd", t[t.ChildActivationStart = 11] = "ChildActivationStart", t[t.ChildActivationEnd = 12] = "ChildActivationEnd", t[t.ActivationStart = 13] = "ActivationStart", t[t.ActivationEnd = 14] = "ActivationEnd", t[t.Scroll = 15] = "Scroll", t[t.NavigationSkipped = 16] = "NavigationSkipped", t; })(b || {}), U = class {
    id;
    url;
    constructor(r, e) { this.id = r, this.url = e; }
}, Q = class extends U {
    type = b.NavigationStart;
    navigationTrigger;
    restoredState;
    constructor(r, e, n = "imperative", i = null) { super(r, e), this.navigationTrigger = n, this.restoredState = i; }
    toString() { return `NavigationStart(id: ${this.id}, url: '${this.url}')`; }
}, N = class extends U {
    urlAfterRedirects;
    type = b.NavigationEnd;
    constructor(r, e, n) { super(r, e), this.urlAfterRedirects = n; }
    toString() { return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`; }
}, I = (function (t) { return t[t.Redirect = 0] = "Redirect", t[t.SupersededByNewNavigation = 1] = "SupersededByNewNavigation", t[t.NoDataFromResolver = 2] = "NoDataFromResolver", t[t.GuardRejected = 3] = "GuardRejected", t[t.Aborted = 4] = "Aborted", t; })(I || {}), we = (function (t) { return t[t.IgnoredSameUrlNavigation = 0] = "IgnoredSameUrlNavigation", t[t.IgnoredByUrlHandlingStrategy = 1] = "IgnoredByUrlHandlingStrategy", t; })(we || {}), D = class extends U {
    reason;
    code;
    type = b.NavigationCancel;
    constructor(r, e, n, i) { super(r, e), this.reason = n, this.code = i; }
    toString() { return `NavigationCancel(id: ${this.id}, url: '${this.url}')`; }
};
function nn(t) { return t instanceof D && (t.code === I.Redirect || t.code === I.SupersededByNewNavigation); }
var $ = class extends U {
    reason;
    code;
    type = b.NavigationSkipped;
    constructor(r, e, n, i) { super(r, e), this.reason = n, this.code = i; }
}, te = class extends U {
    error;
    target;
    type = b.NavigationError;
    constructor(r, e, n, i) { super(r, e), this.error = n, this.target = i; }
    toString() { return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`; }
}, de = class extends U {
    urlAfterRedirects;
    state;
    type = b.RoutesRecognized;
    constructor(r, e, n, i) { super(r, e), this.urlAfterRedirects = n, this.state = i; }
    toString() { return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, ot = class extends U {
    urlAfterRedirects;
    state;
    type = b.GuardsCheckStart;
    constructor(r, e, n, i) { super(r, e), this.urlAfterRedirects = n, this.state = i; }
    toString() { return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, st = class extends U {
    urlAfterRedirects;
    state;
    shouldActivate;
    type = b.GuardsCheckEnd;
    constructor(r, e, n, i, o) { super(r, e), this.urlAfterRedirects = n, this.state = i, this.shouldActivate = o; }
    toString() { return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`; }
}, at = class extends U {
    urlAfterRedirects;
    state;
    type = b.ResolveStart;
    constructor(r, e, n, i) { super(r, e), this.urlAfterRedirects = n, this.state = i; }
    toString() { return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, ct = class extends U {
    urlAfterRedirects;
    state;
    type = b.ResolveEnd;
    constructor(r, e, n, i) { super(r, e), this.urlAfterRedirects = n, this.state = i; }
    toString() { return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, ut = class {
    route;
    type = b.RouteConfigLoadStart;
    constructor(r) { this.route = r; }
    toString() { return `RouteConfigLoadStart(path: ${this.route.path})`; }
}, lt = class {
    route;
    type = b.RouteConfigLoadEnd;
    constructor(r) { this.route = r; }
    toString() { return `RouteConfigLoadEnd(path: ${this.route.path})`; }
}, dt = class {
    snapshot;
    type = b.ChildActivationStart;
    constructor(r) { this.snapshot = r; }
    toString() { return `ChildActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, ht = class {
    snapshot;
    type = b.ChildActivationEnd;
    constructor(r) { this.snapshot = r; }
    toString() { return `ChildActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, ft = class {
    snapshot;
    type = b.ActivationStart;
    constructor(r) { this.snapshot = r; }
    toString() { return `ActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, pt = class {
    snapshot;
    type = b.ActivationEnd;
    constructor(r) { this.snapshot = r; }
    toString() { return `ActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, Ce = class {
    routerEvent;
    position;
    anchor;
    scrollBehavior;
    type = b.Scroll;
    constructor(r, e, n, i) { this.routerEvent = r, this.position = e, this.anchor = n, this.scrollBehavior = i; }
    toString() { let r = this.position ? `${this.position[0]}, ${this.position[1]}` : null; return `Scroll(anchor: '${this.anchor}', position: '${r}')`; }
}, he = class {
}, be = class {
    url;
    navigationBehaviorOptions;
    constructor(r, e) { this.url = r, this.navigationBehaviorOptions = e; }
};
function Ui(t) { return !(t instanceof he) && !(t instanceof be); }
var gt = class {
    rootInjector;
    outlet = null;
    route = null;
    children;
    attachRef = null;
    get injector() { return this.route?.snapshot._environmentInjector ?? this.rootInjector; }
    constructor(r) { this.rootInjector = r, this.children = new ge(this.rootInjector); }
}, ge = (() => { class t {
    rootInjector;
    contexts = new Map;
    constructor(e) { this.rootInjector = e; }
    onChildOutletCreated(e, n) { let i = this.getOrCreateContext(e); i.outlet = n, this.contexts.set(e, i); }
    onChildOutletDestroyed(e) { let n = this.getContext(e); n && (n.outlet = null, n.attachRef = null); }
    onOutletDeactivated() { let e = this.contexts; return this.contexts = new Map, e; }
    onOutletReAttached(e) { this.contexts = e; }
    getOrCreateContext(e) { let n = this.getContext(e); return n || (n = new gt(this.rootInjector), this.contexts.set(e, n)), n; }
    getContext(e) { return this.contexts.get(e) || null; }
    static \u0275fac = function (n) { return new (n || t)(y.\u0275\u0275inject(y.EnvironmentInjector)); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), vt = class {
    _root;
    constructor(r) { this._root = r; }
    get root() { return this._root.value; }
    parent(r) { let e = this.pathFromRoot(r); return e.length > 1 ? e[e.length - 2] : null; }
    children(r) { let e = Bt(r, this._root); return e ? e.children.map(n => n.value) : []; }
    firstChild(r) { let e = Bt(r, this._root); return e && e.children.length > 0 ? e.children[0].value : null; }
    siblings(r) { let e = qt(r, this._root); return e.length < 2 ? [] : e[e.length - 2].children.map(i => i.value).filter(i => i !== r); }
    pathFromRoot(r) { return qt(r, this._root).map(e => e.value); }
};
function Bt(t, r) { if (t === r.value)
    return r; for (let e of r.children) {
    let n = Bt(t, e);
    if (n)
        return n;
} return null; }
function qt(t, r) { if (t === r.value)
    return [r]; for (let e of r.children) {
    let n = qt(t, e);
    if (n.length)
        return n.unshift(r), n;
} return []; }
var _ = class {
    value;
    children;
    constructor(r, e) { this.value = r, this.children = e; }
    toString() { return `TreeNode(${this.value})`; }
};
function me(t) { let r = {}; return t && t.children.forEach(e => r[e.value.outlet] = e), r; }
var xe = class extends vt {
    snapshot;
    constructor(r, e) { super(r), this.snapshot = e, rn(this, r); }
    toString() { return this.snapshot.toString(); }
};
function tr(t, r) { let e = Pi(t, r), n = new P([new X("", {})]), i = new P({}), o = new P({}), s = new P({}), a = new P(""), c = new F(n, i, s, a, o, p, t, e.root); return c.snapshot = e.root, new xe(new _(c, []), e); }
function Pi(t, r) { let e = {}, n = {}, i = {}, s = new ue([], e, i, "", n, p, t, null, {}, r); return new ke("", new _(s, [])); }
var F = class {
    urlSubject;
    paramsSubject;
    queryParamsSubject;
    fragmentSubject;
    dataSubject;
    outlet;
    component;
    snapshot;
    _futureSnapshot;
    _routerState;
    _paramMap;
    _queryParamMap;
    title;
    url;
    params;
    queryParams;
    fragment;
    data;
    constructor(r, e, n, i, o, s, a, c) { this.urlSubject = r, this.paramsSubject = e, this.queryParamsSubject = n, this.fragmentSubject = i, this.dataSubject = o, this.outlet = s, this.component = a, this._futureSnapshot = c, this.title = this.dataSubject?.pipe(E(u => u[He])) ?? g(void 0), this.url = r, this.params = e, this.queryParams = n, this.fragment = i, this.data = o; }
    get routeConfig() { return this._futureSnapshot.routeConfig; }
    get root() { return this._routerState.root; }
    get parent() { return this._routerState.parent(this); }
    get firstChild() { return this._routerState.firstChild(this); }
    get children() { return this._routerState.children(this); }
    get pathFromRoot() { return this._routerState.pathFromRoot(this); }
    get paramMap() { return this._paramMap ??= this.params.pipe(E(r => le(r))), this._paramMap; }
    get queryParamMap() { return this._queryParamMap ??= this.queryParams.pipe(E(r => le(r))), this._queryParamMap; }
    toString() { return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`; }
};
function mt(t, r, e = "emptyOnly") { let n, { routeConfig: i } = t; return r !== null && (e === "always" || i?.path === "" || !r.component && !r.routeConfig?.loadComponent) ? n = { params: d(d({}, r.params), t.params), data: d(d({}, r.data), t.data), resolve: d(d(d(d({}, t.data), r.data), i?.data), t._resolvedData) } : n = { params: d({}, t.params), data: d({}, t.data), resolve: d(d({}, t.data), t._resolvedData ?? {}) }, i && rr(i) && (n.resolve[He] = i.title), n; }
var ue = class {
    url;
    params;
    queryParams;
    fragment;
    data;
    outlet;
    component;
    routeConfig;
    _resolve;
    _resolvedData;
    _routerState;
    _paramMap;
    _queryParamMap;
    _environmentInjector;
    get title() { return this.data?.[He]; }
    constructor(r, e, n, i, o, s, a, c, u, h) { this.url = r, this.params = e, this.queryParams = n, this.fragment = i, this.data = o, this.outlet = s, this.component = a, this.routeConfig = c, this._resolve = u, this._environmentInjector = h; }
    get root() { return this._routerState.root; }
    get parent() { return this._routerState.parent(this); }
    get firstChild() { return this._routerState.firstChild(this); }
    get children() { return this._routerState.children(this); }
    get pathFromRoot() { return this._routerState.pathFromRoot(this); }
    get paramMap() { return this._paramMap ??= le(this.params), this._paramMap; }
    get queryParamMap() { return this._queryParamMap ??= le(this.queryParams), this._queryParamMap; }
    toString() { let r = this.url.map(n => n.toString()).join("/"), e = this.routeConfig ? this.routeConfig.path : ""; return `Route(url:'${r}', path:'${e}')`; }
}, ke = class extends vt {
    url;
    constructor(r, e) { super(e), this.url = r, rn(this, e); }
    toString() { return nr(this._root); }
};
function rn(t, r) { r.value._routerState = t, r.children.forEach(e => rn(t, e)); }
function nr(t) { let r = t.children.length > 0 ? ` { ${t.children.map(nr).join(", ")} } ` : ""; return `${t.value}${r}`; }
function jt(t) { if (t.snapshot) {
    let r = t.snapshot, e = t._futureSnapshot;
    t.snapshot = e, H(r.queryParams, e.queryParams) || t.queryParamsSubject.next(e.queryParams), r.fragment !== e.fragment && t.fragmentSubject.next(e.fragment), H(r.params, e.params) || t.paramsSubject.next(e.params), ci(r.url, e.url) || t.urlSubject.next(e.url), H(r.data, e.data) || t.dataSubject.next(e.data);
}
else
    t.snapshot = t._futureSnapshot, t.dataSubject.next(t._futureSnapshot.data); }
function Vt(t, r) { let e = H(t.params, r.params) && fi(t.url, r.url), n = !t.parent != !r.parent; return e && !n && (!t.parent || Vt(t.parent, r.parent)); }
function rr(t) { return typeof t.title == "string" || t.title === null; }
var ir = new ne(""), on = (() => { class t {
    activated = null;
    get activatedComponentRef() { return this.activated; }
    _activatedRoute = null;
    name = p;
    activateEvents = new Ke;
    deactivateEvents = new Ke;
    attachEvents = new Ke;
    detachEvents = new Ke;
    routerOutletData = Qr();
    parentContexts = v(ge);
    location = v(Yr);
    changeDetector = v(Kr);
    inputBinder = v(Fe, { optional: !0 });
    supportsBindingToComponentInputs = !0;
    ngOnChanges(e) { if (e.name) {
        let { firstChange: n, previousValue: i } = e.name;
        if (n)
            return;
        this.isTrackedInParentContexts(i) && (this.deactivate(), this.parentContexts.onChildOutletDestroyed(i)), this.initializeOutletWithName();
    } }
    ngOnDestroy() { this.isTrackedInParentContexts(this.name) && this.parentContexts.onChildOutletDestroyed(this.name), this.inputBinder?.unsubscribeFromRouteData(this); }
    isTrackedInParentContexts(e) { return this.parentContexts.getContext(e)?.outlet === this; }
    ngOnInit() { this.initializeOutletWithName(); }
    initializeOutletWithName() { if (this.parentContexts.onChildOutletCreated(this.name, this), this.activated)
        return; let e = this.parentContexts.getContext(this.name); e?.route && (e.attachRef ? this.attach(e.attachRef, e.route) : this.activateWith(e.route, e.injector)); }
    get isActivated() { return !!this.activated; }
    get component() { if (!this.activated)
        throw new A(4012, !1); return this.activated.instance; }
    get activatedRoute() { if (!this.activated)
        throw new A(4012, !1); return this._activatedRoute; }
    get activatedRouteData() { return this._activatedRoute ? this._activatedRoute.snapshot.data : {}; }
    detach() { if (!this.activated)
        throw new A(4012, !1); this.location.detach(); let e = this.activated; return this.activated = null, this._activatedRoute = null, this.detachEvents.emit(e.instance), e; }
    attach(e, n) { this.activated = e, this._activatedRoute = n, this.location.insert(e.hostView), this.inputBinder?.bindActivatedRouteToOutletComponent(this), this.attachEvents.emit(e.instance); }
    deactivate() { if (this.activated) {
        let e = this.component;
        this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(e);
    } }
    activateWith(e, n) { if (this.isActivated)
        throw new A(4013, !1); this._activatedRoute = e; let i = this.location, s = e.snapshot.component, a = this.parentContexts.getOrCreateContext(this.name).children, c = new Gt(e, a, i.injector, this.routerOutletData); this.activated = i.createComponent(s, { index: i.length, injector: c, environmentInjector: n }), this.changeDetector.markForCheck(), this.inputBinder?.bindActivatedRouteToOutletComponent(this), this.activateEvents.emit(this.activated.instance); }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275dir = y.\u0275\u0275defineDirective({ type: t, selectors: [["router-outlet"]], inputs: { name: "name", routerOutletData: [1, "routerOutletData"] }, outputs: { activateEvents: "activate", deactivateEvents: "deactivate", attachEvents: "attach", detachEvents: "detach" }, exportAs: ["outlet"], features: [y.\u0275\u0275NgOnChangesFeature] });
} return t; })(), Gt = class {
    route;
    childContexts;
    parent;
    outletData;
    constructor(r, e, n, i) { this.route = r, this.childContexts = e, this.parent = n, this.outletData = i; }
    get(r, e) { return r === F ? this.route : r === ge ? this.childContexts : r === ir ? this.outletData : this.parent.get(r, e); }
}, Fe = new ne(""), sn = (() => { class t {
    outletDataSubscriptions = new Map;
    bindActivatedRouteToOutletComponent(e) { this.unsubscribeFromRouteData(e), this.subscribeToRouteData(e); }
    unsubscribeFromRouteData(e) { this.outletDataSubscriptions.get(e)?.unsubscribe(), this.outletDataSubscriptions.delete(e); }
    subscribeToRouteData(e) { let { activatedRoute: n } = e, i = _t([n.queryParams, n.params, n.data]).pipe(q(([o, s, a], c) => (a = d(d(d({}, o), s), a), c === 0 ? g(a) : Promise.resolve(a)))).subscribe(o => { if (!e.isActivated || !e.activatedComponentRef || e.activatedRoute !== n || n.component === null) {
        this.unsubscribeFromRouteData(e);
        return;
    } let s = Zr(n.component); if (!s) {
        this.unsubscribeFromRouteData(e);
        return;
    } for (let { templateName: a } of s.inputs)
        e.activatedComponentRef.setInput(a, o[a]); }); this.outletDataSubscriptions.set(e, i); }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })(), an = (() => { class t {
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275cmp = y.\u0275\u0275defineComponent({ type: t, selectors: [["ng-component"]], exportAs: ["emptyRouterOutlet"], decls: 1, vars: 0, template: function (n, i) { n & 1 && y.\u0275\u0275element(0, "router-outlet"); }, dependencies: [on], encapsulation: 2 });
} return t; })();
function cn(t) { let r = t.children && t.children.map(cn), e = r ? T(d({}, t), { children: r }) : d({}, t); return !e.component && !e.loadComponent && (r || e.loadChildren) && e.outlet && e.outlet !== p && (e.component = an), e; }
function Li(t, r, e) { let n = $e(t, r._root, e ? e._root : void 0); return new xe(n, r); }
function $e(t, r, e) { if (e && t.shouldReuseRoute(r.value, e.value.snapshot)) {
    let n = e.value;
    n._futureSnapshot = r.value;
    let i = ji(t, r, e);
    return new _(n, i);
}
else {
    if (t.shouldAttach(r.value)) {
        let o = t.retrieve(r.value);
        if (o !== null) {
            let s = o.route;
            return s.value._futureSnapshot = r.value, s.children = r.children.map(a => $e(t, a)), s;
        }
    }
    let n = xi(r.value), i = r.children.map(o => $e(t, o));
    return new _(n, i);
} }
function ji(t, r, e) { return r.children.map(n => { for (let i of e.children)
    if (t.shouldReuseRoute(n.value, i.value.snapshot))
        return $e(t, n, i); return $e(t, n); }); }
function xi(t) { return new F(new P(t.url), new P(t.params), new P(t.queryParams), new P(t.fragment), new P(t.data), t.outlet, t.component, t); }
var Ie = class {
    redirectTo;
    navigationBehaviorOptions;
    constructor(r, e) { this.redirectTo = r, this.navigationBehaviorOptions = e; }
}, or = "ngNavigationCancelingError";
function yt(t, r) { let { redirectTo: e, navigationBehaviorOptions: n } = ee(r) ? { redirectTo: r, navigationBehaviorOptions: void 0 } : r, i = sr(!1, I.Redirect); return i.url = e, i.navigationBehaviorOptions = n, i; }
function sr(t, r) { let e = new Error(`NavigationCancelingError: ${t || ""}`); return e[or] = !0, e.cancellationCode = r, e; }
function ki(t) { return ar(t) && ee(t.url); }
function ar(t) { return !!t && t[or]; }
var Wt = class {
    routeReuseStrategy;
    futureState;
    currState;
    forwardEvent;
    inputBindingEnabled;
    constructor(r, e, n, i, o) { this.routeReuseStrategy = r, this.futureState = e, this.currState = n, this.forwardEvent = i, this.inputBindingEnabled = o; }
    activate(r) { let e = this.futureState._root, n = this.currState ? this.currState._root : null; this.deactivateChildRoutes(e, n, r), jt(this.futureState.root), this.activateChildRoutes(e, n, r); }
    deactivateChildRoutes(r, e, n) { let i = me(e); r.children.forEach(o => { let s = o.value.outlet; this.deactivateRoutes(o, i[s], n), delete i[s]; }), Object.values(i).forEach(o => { this.deactivateRouteAndItsChildren(o, n); }); }
    deactivateRoutes(r, e, n) { let i = r.value, o = e ? e.value : null; if (i === o)
        if (i.component) {
            let s = n.getContext(i.outlet);
            s && this.deactivateChildRoutes(r, e, s.children);
        }
        else
            this.deactivateChildRoutes(r, e, n);
    else
        o && this.deactivateRouteAndItsChildren(e, n); }
    deactivateRouteAndItsChildren(r, e) { r.value.component && this.routeReuseStrategy.shouldDetach(r.value.snapshot) ? this.detachAndStoreRouteSubtree(r, e) : this.deactivateRouteAndOutlet(r, e); }
    detachAndStoreRouteSubtree(r, e) { let n = e.getContext(r.value.outlet), i = n && r.value.component ? n.children : e, o = me(r); for (let s of Object.values(o))
        this.deactivateRouteAndItsChildren(s, i); if (n && n.outlet) {
        let s = n.outlet.detach(), a = n.children.onOutletDeactivated();
        this.routeReuseStrategy.store(r.value.snapshot, { componentRef: s, route: r, contexts: a });
    } }
    deactivateRouteAndOutlet(r, e) { let n = e.getContext(r.value.outlet), i = n && r.value.component ? n.children : e, o = me(r); for (let s of Object.values(o))
        this.deactivateRouteAndItsChildren(s, i); n && (n.outlet && (n.outlet.deactivate(), n.children.onOutletDeactivated()), n.attachRef = null, n.route = null); }
    activateChildRoutes(r, e, n) { let i = me(e); r.children.forEach(o => { this.activateRoutes(o, i[o.value.outlet], n), this.forwardEvent(new pt(o.value.snapshot)); }), r.children.length && this.forwardEvent(new ht(r.value.snapshot)); }
    activateRoutes(r, e, n) { let i = r.value, o = e ? e.value : null; if (jt(i), i === o)
        if (i.component) {
            let s = n.getOrCreateContext(i.outlet);
            this.activateChildRoutes(r, e, s.children);
        }
        else
            this.activateChildRoutes(r, e, n);
    else if (i.component) {
        let s = n.getOrCreateContext(i.outlet);
        if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
            let a = this.routeReuseStrategy.retrieve(i.snapshot);
            this.routeReuseStrategy.store(i.snapshot, null), s.children.onOutletReAttached(a.contexts), s.attachRef = a.componentRef, s.route = a.route.value, s.outlet && s.outlet.attach(a.componentRef, a.route.value), jt(a.route.value), this.activateChildRoutes(r, null, s.children);
        }
        else
            s.attachRef = null, s.route = i, s.outlet && s.outlet.activateWith(i, s.injector), this.activateChildRoutes(r, null, s.children);
    }
    else
        this.activateChildRoutes(r, null, n); }
}, Rt = class {
    path;
    route;
    constructor(r) { this.path = r, this.route = this.path[this.path.length - 1]; }
}, Se = class {
    component;
    route;
    constructor(r, e) { this.component = r, this.route = e; }
};
function $i(t, r, e) { let n = t._root, i = r ? r._root : null; return Oe(n, i, e, [n.value]); }
function zi(t) { let r = t.routeConfig ? t.routeConfig.canActivateChild : null; return !r || r.length === 0 ? null : { node: t, guards: r }; }
function Te(t, r) { let e = Symbol(), n = r.get(t, e); return n === e ? typeof t == "function" && !Jr(t) ? t : r.get(t) : n; }
function Oe(t, r, e, n, i = { canDeactivateChecks: [], canActivateChecks: [] }) { let o = me(r); return t.children.forEach(s => { Hi(s, o[s.value.outlet], e, n.concat([s.value]), i), delete o[s.value.outlet]; }), Object.entries(o).forEach(([s, a]) => Le(a, e.getContext(s), i)), i; }
function Hi(t, r, e, n, i = { canDeactivateChecks: [], canActivateChecks: [] }) { let o = t.value, s = r ? r.value : null, a = e ? e.getContext(t.value.outlet) : null; if (s && o.routeConfig === s.routeConfig) {
    let c = Fi(s, o, o.routeConfig.runGuardsAndResolvers);
    c ? i.canActivateChecks.push(new Rt(n)) : (o.data = s.data, o._resolvedData = s._resolvedData), o.component ? Oe(t, r, a ? a.children : null, n, i) : Oe(t, r, e, n, i), c && a && a.outlet && a.outlet.isActivated && i.canDeactivateChecks.push(new Se(a.outlet.component, s));
}
else
    s && Le(r, a, i), i.canActivateChecks.push(new Rt(n)), o.component ? Oe(t, null, a ? a.children : null, n, i) : Oe(t, null, e, n, i); return i; }
function Fi(t, r, e) { if (typeof e == "function")
    return j(r._environmentInjector, () => e(t, r)); switch (e) {
    case "pathParamsChange": return !ce(t.url, r.url);
    case "pathParamsOrQueryParamsChange": return !ce(t.url, r.url) || !H(t.queryParams, r.queryParams);
    case "always": return !0;
    case "paramsOrQueryParamsChange": return !Vt(t, r) || !H(t.queryParams, r.queryParams);
    default: return !Vt(t, r);
} }
function Le(t, r, e) { let n = me(t), i = t.value; Object.entries(n).forEach(([o, s]) => { i.component ? r ? Le(s, r.children.getContext(o), e) : Le(s, null, e) : Le(s, r, e); }), i.component ? r && r.outlet && r.outlet.isActivated ? e.canDeactivateChecks.push(new Se(r.outlet.component, i)) : e.canDeactivateChecks.push(new Se(null, i)) : e.canDeactivateChecks.push(new Se(null, i)); }
function Be(t) { return typeof t == "function"; }
function Bi(t) { return typeof t == "boolean"; }
function qi(t) { return t && Be(t.canLoad); }
function Vi(t) { return t && Be(t.canActivate); }
function Gi(t) { return t && Be(t.canActivateChild); }
function Wi(t) { return t && Be(t.canDeactivate); }
function Qi(t) { return t && Be(t.canMatch); }
function cr(t) { return t instanceof En || t?.name === "EmptyError"; }
var Je = Symbol("INITIAL_VALUE");
function Ee() { return q(t => _t(t.map(r => r.pipe(ve(1), An(Je)))).pipe(E(r => { for (let e of r)
    if (e !== !0) {
        if (e === Je)
            return Je;
        if (e === !1 || Yi(e))
            return e;
    } return !0; }), Z(r => r !== Je), ve(1))); }
function Yi(t) { return ee(t) || t instanceof Ie; }
function ur(t) { return t.aborted ? g(void 0).pipe(ve(1)) : new bn(r => { let e = () => { r.next(), r.complete(); }; return t.addEventListener("abort", e), () => t.removeEventListener("abort", e); }); }
function lr(t) { return Ye(ur(t)); }
function Ki(t) { return z(r => { let { targetSnapshot: e, currentSnapshot: n, guards: { canActivateChecks: i, canDeactivateChecks: o } } = r; return o.length === 0 && i.length === 0 ? g(T(d({}, r), { guardsResult: !0 })) : Zi(o, e, n).pipe(z(s => s && Bi(s) ? Ji(e, i, t) : g(s)), E(s => T(d({}, r), { guardsResult: s }))); }); }
function Zi(t, r, e) { return M(t).pipe(z(n => ro(n.component, n.route, e, r)), J(n => n !== !0, !0)); }
function Ji(t, r, e) { return M(r).pipe(Ne(n => Tn(eo(n.route.parent, e), Xi(n.route, e), no(t, n.path), to(t, n.route))), J(n => n !== !0, !0)); }
function Xi(t, r) { return t !== null && r && r(new ft(t)), g(!0); }
function eo(t, r) { return t !== null && r && r(new dt(t)), g(!0); }
function to(t, r) { let e = r.routeConfig ? r.routeConfig.canActivate : null; if (!e || e.length === 0)
    return g(!0); let n = e.map(i => Qe(() => { let o = r._environmentInjector, s = Te(i, o), a = Vi(s) ? s.canActivate(r, t) : j(o, () => s(r, t)); return fe(a).pipe(J()); })); return g(n).pipe(Ee()); }
function no(t, r) { let e = r[r.length - 1], i = r.slice(0, r.length - 1).reverse().map(o => zi(o)).filter(o => o !== null).map(o => Qe(() => { let s = o.guards.map(a => { let c = o.node._environmentInjector, u = Te(a, c), h = Gi(u) ? u.canActivateChild(e, t) : j(c, () => u(e, t)); return fe(h).pipe(J()); }); return g(s).pipe(Ee()); })); return g(i).pipe(Ee()); }
function ro(t, r, e, n) { let i = r && r.routeConfig ? r.routeConfig.canDeactivate : null; if (!i || i.length === 0)
    return g(!0); let o = i.map(s => { let a = r._environmentInjector, c = Te(s, a), u = Wi(c) ? c.canDeactivate(t, r, e, n) : j(a, () => c(t, r, e, n)); return fe(u).pipe(J()); }); return g(o).pipe(Ee()); }
function io(t, r, e, n, i) { let o = r.canLoad; if (o === void 0 || o.length === 0)
    return g(!0); let s = o.map(a => { let c = Te(a, t), u = qi(c) ? c.canLoad(r, e) : j(t, () => c(r, e)), h = fe(u); return i ? h.pipe(lr(i)) : h; }); return g(s).pipe(Ee(), dr(n)); }
function dr(t) { return Cn(V(r => { if (typeof r != "boolean")
    throw yt(t, r); }), E(r => r === !0)); }
function oo(t, r, e, n, i) { let o = r.canMatch; if (!o || o.length === 0)
    return g(!0); let s = o.map(a => { let c = Te(a, t), u = Qi(c) ? c.canMatch(r, e) : j(t, () => c(r, e)); return fe(u).pipe(lr(i)); }); return g(s).pipe(Ee(), dr(n)); }
var G = class t extends Error {
    segmentGroup;
    constructor(r) { super(), this.segmentGroup = r || null, Object.setPrototypeOf(this, t.prototype); }
}, ze = class t extends Error {
    urlTree;
    constructor(r) { super(), this.urlTree = r, Object.setPrototypeOf(this, t.prototype); }
};
function so(t) { throw new A(4e3, !1); }
function ao(t) { throw sr(!1, I.GuardRejected); }
var Qt = class {
    urlSerializer;
    urlTree;
    constructor(r, e) { this.urlSerializer = r, this.urlTree = e; }
    lineralizeSegments(r, e) { return R(this, null, function* () { let n = [], i = e.root; for (;;) {
        if (n = n.concat(i.segments), i.numberOfChildren === 0)
            return n;
        if (i.numberOfChildren > 1 || !i.children[p])
            throw so(`${r.redirectTo}`);
        i = i.children[p];
    } }); }
    applyRedirectCommands(r, e, n, i, o) { return R(this, null, function* () { let s = yield co(e, i, o); if (s instanceof O)
        throw new ze(s); let a = this.applyRedirectCreateUrlTree(s, this.urlSerializer.parse(s), r, n); if (s[0] === "/")
        throw new ze(a); return a; }); }
    applyRedirectCreateUrlTree(r, e, n, i) { let o = this.createSegmentGroup(r, e.root, n, i); return new O(o, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment); }
    createQueryParams(r, e) { let n = {}; return Object.entries(r).forEach(([i, o]) => { if (typeof o == "string" && o[0] === ":") {
        let a = o.substring(1);
        n[i] = e[a];
    }
    else
        n[i] = o; }), n; }
    createSegmentGroup(r, e, n, i) { let o = this.createSegments(r, e.segments, n, i), s = {}; return Object.entries(e.children).forEach(([a, c]) => { s[a] = this.createSegmentGroup(r, c, n, i); }), new m(o, s); }
    createSegments(r, e, n, i) { return e.map(o => o.path[0] === ":" ? this.findPosParam(r, o, i) : this.findOrReturn(o, n)); }
    findPosParam(r, e, n) { let i = n[e.path.substring(1)]; if (!i)
        throw new A(4001, !1); return i; }
    findOrReturn(r, e) { let n = 0; for (let i of e) {
        if (i.path === r.path)
            return e.splice(n), i;
        n++;
    } return r; }
};
function co(t, r, e) { if (typeof t == "string")
    return Promise.resolve(t); let n = t, { queryParams: i, fragment: o, routeConfig: s, url: a, outlet: c, params: u, data: h, title: f, paramMap: w, queryParamMap: S } = r; return nt(fe(j(e, () => n({ params: u, data: h, queryParams: i, fragment: o, routeConfig: s, url: a, outlet: c, title: f, paramMap: w, queryParamMap: S })))); }
function uo(t, r) { return t.providers && !t._injector && (t._injector = Xr(t.providers, r, `Route: ${t.path}`)), t._injector ?? r; }
function k(t) { return t.outlet || p; }
function lo(t, r) { let e = t.filter(n => k(n) === r); return e.push(...t.filter(n => k(n) !== r)), e; }
var Yt = { matched: !1, consumedSegments: [], remainingSegments: [], parameters: {}, positionalParamSegments: {} };
function ho(t, r, e, n, i, o) { let s = hr(t, r, e); return s.matched ? (n = uo(r, n), oo(n, r, e, i, o).pipe(E(a => a === !0 ? s : d({}, Yt)))) : g(s); }
function hr(t, r, e) { if (r.path === "")
    return r.pathMatch === "full" && (t.hasChildren() || e.length > 0) ? d({}, Yt) : { matched: !0, consumedSegments: [], remainingSegments: e, parameters: {}, positionalParamSegments: {} }; let i = (r.matcher || $n)(e, t, r); if (!i)
    return d({}, Yt); let o = {}; Object.entries(i.posParams ?? {}).forEach(([a, c]) => { o[a] = c.path; }); let s = i.consumed.length > 0 ? d(d({}, o), i.consumed[i.consumed.length - 1].parameters) : o; return { matched: !0, consumedSegments: i.consumed, remainingSegments: e.slice(i.consumed.length), parameters: s, positionalParamSegments: i.posParams ?? {} }; }
function Ln(t, r, e, n) { return e.length > 0 && go(t, e, n) ? { segmentGroup: new m(r, po(n, new m(e, t.children))), slicedSegments: [] } : e.length === 0 && vo(t, e, n) ? { segmentGroup: new m(t.segments, fo(t, e, n, t.children)), slicedSegments: e } : { segmentGroup: new m(t.segments, t.children), slicedSegments: e }; }
function fo(t, r, e, n) { let i = {}; for (let o of e)
    if (wt(t, r, o) && !n[k(o)]) {
        let s = new m([], {});
        i[k(o)] = s;
    } return d(d({}, n), i); }
function po(t, r) { let e = {}; e[p] = r; for (let n of t)
    if (n.path === "" && k(n) !== p) {
        let i = new m([], {});
        e[k(n)] = i;
    } return e; }
function go(t, r, e) { return e.some(n => wt(t, r, n) && k(n) !== p); }
function vo(t, r, e) { return e.some(n => wt(t, r, n)); }
function wt(t, r, e) { return (t.hasChildren() || r.length > 0) && e.pathMatch === "full" ? !1 : e.path === ""; }
function mo(t, r, e) { return r.length === 0 && !t.children[e]; }
var Kt = class {
};
function yo(t, r, e, n, i, o, s = "emptyOnly", a) { return R(this, null, function* () { return new Zt(t, r, e, n, i, s, o, a).recognize(); }); }
var Ro = 31, Zt = class {
    injector;
    configLoader;
    rootComponentType;
    config;
    urlTree;
    paramsInheritanceStrategy;
    urlSerializer;
    abortSignal;
    applyRedirects;
    absoluteRedirectCount = 0;
    allowRedirects = !0;
    constructor(r, e, n, i, o, s, a, c) { this.injector = r, this.configLoader = e, this.rootComponentType = n, this.config = i, this.urlTree = o, this.paramsInheritanceStrategy = s, this.urlSerializer = a, this.abortSignal = c, this.applyRedirects = new Qt(this.urlSerializer, this.urlTree); }
    noMatchError(r) { return new A(4002, `'${r.segmentGroup}'`); }
    recognize() { return R(this, null, function* () { let r = Ln(this.urlTree.root, [], [], this.config).segmentGroup, { children: e, rootSnapshot: n } = yield this.match(r), i = new _(n, e), o = new ke("", i), s = Kn(n, [], this.urlTree.queryParams, this.urlTree.fragment); return s.queryParams = this.urlTree.queryParams, o.url = this.urlSerializer.serialize(s), { state: o, tree: s }; }); }
    match(r) { return R(this, null, function* () { let e = new ue([], Object.freeze({}), Object.freeze(d({}, this.urlTree.queryParams)), this.urlTree.fragment, Object.freeze({}), p, this.rootComponentType, null, {}, this.injector); try {
        return { children: yield this.processSegmentGroup(this.injector, this.config, r, p, e), rootSnapshot: e };
    }
    catch (n) {
        if (n instanceof ze)
            return this.urlTree = n.urlTree, this.match(n.urlTree.root);
        throw n instanceof G ? this.noMatchError(n) : n;
    } }); }
    processSegmentGroup(r, e, n, i, o) { return R(this, null, function* () { if (n.segments.length === 0 && n.hasChildren())
        return this.processChildren(r, e, n, o); let s = yield this.processSegment(r, e, n, n.segments, i, !0, o); return s instanceof _ ? [s] : []; }); }
    processChildren(r, e, n, i) { return R(this, null, function* () { let o = []; for (let c of Object.keys(n.children))
        c === "primary" ? o.unshift(c) : o.push(c); let s = []; for (let c of o) {
        let u = n.children[c], h = lo(e, c), f = yield this.processSegmentGroup(r, h, u, c, i);
        s.push(...f);
    } let a = fr(s); return So(a), a; }); }
    processSegment(r, e, n, i, o, s, a) { return R(this, null, function* () { for (let c of e)
        try {
            return yield this.processSegmentAgainstRoute(c._injector ?? r, e, c, n, i, o, s, a);
        }
        catch (u) {
            if (u instanceof G || cr(u))
                continue;
            throw u;
        } if (mo(n, i, o))
        return new Kt; throw new G(n); }); }
    processSegmentAgainstRoute(r, e, n, i, o, s, a, c) { return R(this, null, function* () { if (k(n) !== s && (s === p || !wt(i, o, n)))
        throw new G(i); if (n.redirectTo === void 0)
        return this.matchSegmentAgainstRoute(r, i, n, o, s, c); if (this.allowRedirects && a)
        return this.expandSegmentAgainstRouteUsingRedirect(r, i, e, n, o, s, c); throw new G(i); }); }
    expandSegmentAgainstRouteUsingRedirect(r, e, n, i, o, s, a) { return R(this, null, function* () { let { matched: c, parameters: u, consumedSegments: h, positionalParamSegments: f, remainingSegments: w } = hr(e, i, o); if (!c)
        throw new G(e); typeof i.redirectTo == "string" && i.redirectTo[0] === "/" && (this.absoluteRedirectCount++, this.absoluteRedirectCount > Ro && (this.allowRedirects = !1)); let S = new ue(o, u, Object.freeze(d({}, this.urlTree.queryParams)), this.urlTree.fragment, jn(i), k(i), i.component ?? i._loadedComponent ?? null, i, xn(i), r), ie = mt(S, a, this.paramsInheritanceStrategy); if (S.params = Object.freeze(ie.params), S.data = Object.freeze(ie.data), this.abortSignal.aborted)
        throw new Error(this.abortSignal.reason); let oe = yield this.applyRedirects.applyRedirectCommands(h, i.redirectTo, f, S, r), se = yield this.applyRedirects.lineralizeSegments(i, oe); return this.processSegment(r, n, e, se.concat(w), s, !1, a); }); }
    matchSegmentAgainstRoute(r, e, n, i, o, s) { return R(this, null, function* () { if (this.abortSignal.aborted)
        throw new Error(this.abortSignal.reason); let a = yield nt(ho(e, n, i, r, this.urlSerializer, this.abortSignal)); if (n.path === "**" && (e.children = {}), !a?.matched)
        throw new G(e); r = n._injector ?? r; let { routes: c } = yield this.getChildConfig(r, n, i), u = n._loadedInjector ?? r, { parameters: h, consumedSegments: f, remainingSegments: w } = a, S = new ue(f, h, Object.freeze(d({}, this.urlTree.queryParams)), this.urlTree.fragment, jn(n), k(n), n.component ?? n._loadedComponent ?? null, n, xn(n), r), ie = mt(S, s, this.paramsInheritanceStrategy); S.params = Object.freeze(ie.params), S.data = Object.freeze(ie.data); let { segmentGroup: oe, slicedSegments: se } = Ln(e, f, w, c); if (se.length === 0 && oe.hasChildren()) {
        let Fr = yield this.processChildren(u, c, oe, S);
        return new _(S, Fr);
    } if (c.length === 0 && se.length === 0)
        return new _(S, []); let Dt = k(n) === o, Me = yield this.processSegment(u, c, oe, se, Dt ? p : o, !0, S); return new _(S, Me instanceof _ ? [Me] : []); }); }
    getChildConfig(r, e, n) { return R(this, null, function* () { if (e.children)
        return { routes: e.children, injector: r }; if (e.loadChildren) {
        if (e._loadedRoutes !== void 0) {
            let o = e._loadedNgModuleFactory;
            return o && !e._loadedInjector && (e._loadedInjector = o.create(r).injector), { routes: e._loadedRoutes, injector: e._loadedInjector };
        }
        if (this.abortSignal.aborted)
            throw new Error(this.abortSignal.reason);
        if (yield nt(io(r, e, n, this.urlSerializer, this.abortSignal))) {
            let o = yield this.configLoader.loadChildren(r, e);
            return e._loadedRoutes = o.routes, e._loadedInjector = o.injector, e._loadedNgModuleFactory = o.factory, o;
        }
        throw ao(e);
    } return { routes: [], injector: r }; }); }
};
function So(t) { t.sort((r, e) => r.value.outlet === p ? -1 : e.value.outlet === p ? 1 : r.value.outlet.localeCompare(e.value.outlet)); }
function wo(t) { let r = t.value.routeConfig; return r && r.path === ""; }
function fr(t) { let r = [], e = new Set; for (let n of t) {
    if (!wo(n)) {
        r.push(n);
        continue;
    }
    let i = r.find(o => n.value.routeConfig === o.value.routeConfig);
    i !== void 0 ? (i.children.push(...n.children), e.add(i)) : r.push(n);
} for (let n of e) {
    let i = fr(n.children);
    r.push(new _(n.value, i));
} return r.filter(n => !e.has(n)); }
function jn(t) { return t.data || {}; }
function xn(t) { return t.resolve || {}; }
function Co(t, r, e, n, i, o, s) { return z(a => R(null, null, function* () { let { state: c, tree: u } = yield yo(t, r, e, n, a.extractedUrl, i, o, s); return T(d({}, a), { targetSnapshot: c, urlAfterRedirects: u }); })); }
function bo(t) { return z(r => { let { targetSnapshot: e, guards: { canActivateChecks: n } } = r; if (!n.length)
    return g(r); let i = new Set(n.map(a => a.route)), o = new Set; for (let a of i)
    if (!o.has(a))
        for (let c of pr(a))
            o.add(c); let s = 0; return M(o).pipe(Ne(a => i.has(a) ? Io(a, e, t) : (a.data = mt(a, a.parent, t).resolve, g(void 0))), V(() => s++), Ot(1), z(a => s === o.size ? g(r) : L)); }); }
function pr(t) { let r = t.children.map(e => pr(e)).flat(); return [t, ...r]; }
function Io(t, r, e) { let n = t.routeConfig, i = t._resolve; return n?.title !== void 0 && !rr(n) && (i[He] = n.title), Qe(() => (t.data = mt(t, t.parent, e).resolve, Eo(i, t, r).pipe(E(o => (t._resolvedData = o, t.data = d(d({}, t.data), o), null))))); }
function Eo(t, r, e) { let n = kt(t); if (n.length === 0)
    return g({}); let i = {}; return M(n).pipe(z(o => To(t[o], r, e).pipe(J(), V(s => { if (s instanceof Ie)
    throw yt(new W, s); i[o] = s; }))), Ot(1), E(() => i), De(o => cr(o) ? L : In(o))); }
function To(t, r, e) { let n = r._environmentInjector, i = Te(t, n), o = i.resolve ? i.resolve(r, e) : j(n, () => i(r, e)); return fe(o); }
function kn(t) { return q(r => { let e = t(r); return e ? M(e).pipe(E(() => r)) : g(r); }); }
var un = (() => { class t {
    buildTitle(e) { let n, i = e.root; for (; i !== void 0;)
        n = this.getResolvedTitleForRoute(i) ?? n, i = i.children.find(o => o.outlet === p); return n; }
    getResolvedTitleForRoute(e) { return e.data[He]; }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: () => v(gr), providedIn: "root" });
} return t; })(), gr = (() => { class t extends un {
    title;
    constructor(e) { super(), this.title = e; }
    updateTitle(e) { let n = this.buildTitle(e); n !== void 0 && this.title.setTitle(n); }
    static \u0275fac = function (n) { return new (n || t)(y.\u0275\u0275inject(Dn)); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), Y = new ne("", { factory: () => ({}) }), re = new ne(""), Ct = (() => { class t {
    componentLoaders = new WeakMap;
    childrenLoaders = new WeakMap;
    onLoadStartListener;
    onLoadEndListener;
    compiler = v(ei);
    loadComponent(e, n) { return R(this, null, function* () { if (this.componentLoaders.get(n))
        return this.componentLoaders.get(n); if (n._loadedComponent)
        return Promise.resolve(n._loadedComponent); this.onLoadStartListener && this.onLoadStartListener(n); let i = R(this, null, function* () { try {
        let o = yield Hn(j(e, () => n.loadComponent())), s = yield yr(mr(o));
        return this.onLoadEndListener && this.onLoadEndListener(n), n._loadedComponent = s, s;
    }
    finally {
        this.componentLoaders.delete(n);
    } }); return this.componentLoaders.set(n, i), i; }); }
    loadChildren(e, n) { if (this.childrenLoaders.get(n))
        return this.childrenLoaders.get(n); if (n._loadedRoutes)
        return Promise.resolve({ routes: n._loadedRoutes, injector: n._loadedInjector }); this.onLoadStartListener && this.onLoadStartListener(n); let i = R(this, null, function* () { try {
        let o = yield vr(n, this.compiler, e, this.onLoadEndListener);
        return n._loadedRoutes = o.routes, n._loadedInjector = o.injector, n._loadedNgModuleFactory = o.factory, o;
    }
    finally {
        this.childrenLoaders.delete(n);
    } }); return this.childrenLoaders.set(n, i), i; }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function vr(t, r, e, n) { return R(this, null, function* () { let i = yield Hn(j(e, () => t.loadChildren())), o = yield yr(mr(i)), s; o instanceof ti || Array.isArray(o) ? s = o : s = yield r.compileModuleAsync(o), n && n(t); let a, c, u = !1, h; return Array.isArray(s) ? (c = s, u = !0) : (a = s.create(e).injector, h = s, c = a.get(re, [], { optional: !0, self: !0 }).flat()), { routes: c.map(cn), injector: a, factory: h }; }); }
function Mo(t) { return t && typeof t == "object" && "default" in t; }
function mr(t) { return Mo(t) ? t.default : t; }
function yr(t) { return R(this, null, function* () { return t; }); }
var bt = (() => { class t {
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: () => v(Ao), providedIn: "root" });
} return t; })(), Ao = (() => { class t {
    shouldProcessUrl(e) { return !0; }
    extract(e) { return e; }
    merge(e, n) { return e; }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), ln = new ne(""), dn = new ne("");
function Rr(t, r, e) { let n = t.get(dn), i = t.get(Vr); if (!i.startViewTransition || n.skipNextTransition)
    return n.skipNextTransition = !1, new Promise(u => setTimeout(u)); let o, s = new Promise(u => { o = u; }), a = i.startViewTransition(() => (o(), Do(t))); a.updateCallbackDone.catch(u => { }), a.ready.catch(u => { }), a.finished.catch(u => { }); let { onViewTransitionCreated: c } = n; return c && j(t, () => c({ transition: a, from: r, to: e })), s; }
function Do(t) { return new Promise(r => { ni({ read: () => setTimeout(r) }, { injector: t }); }); }
var No = () => { }, It = new ne(""), Et = (() => { class t {
    currentNavigation = Nn(null, { equal: () => !1 });
    currentTransition = null;
    lastSuccessfulNavigation = Nn(null);
    events = new K;
    transitionAbortWithErrorSubject = new K;
    configLoader = v(Ct);
    environmentInjector = v(en);
    destroyRef = v(ri);
    urlSerializer = v(pe);
    rootContexts = v(ge);
    location = v(Xt);
    inputBindingEnabled = v(Fe, { optional: !0 }) !== null;
    titleStrategy = v(un);
    options = v(Y, { optional: !0 }) || {};
    paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly";
    urlHandlingStrategy = v(bt);
    createViewTransition = v(ln, { optional: !0 });
    navigationErrorHandler = v(It, { optional: !0 });
    navigationId = 0;
    get hasRequestedNavigation() { return this.navigationId !== 0; }
    transitions;
    afterPreactivation = () => g(void 0);
    rootComponentType = null;
    destroyed = !1;
    constructor() { let e = i => this.events.next(new ut(i)), n = i => this.events.next(new lt(i)); this.configLoader.onLoadEndListener = n, this.configLoader.onLoadStartListener = e, this.destroyRef.onDestroy(() => { this.destroyed = !0; }); }
    complete() { this.transitions?.complete(); }
    handleNavigationRequest(e) { let n = ++this.navigationId; Ue(() => { this.transitions?.next(T(d({}, e), { extractedUrl: this.urlHandlingStrategy.extract(e.rawUrl), targetSnapshot: null, targetRouterState: null, guards: { canActivateChecks: [], canDeactivateChecks: [] }, guardsResult: null, id: n })); }); }
    setupNavigations(e) { return this.transitions = new P(null), this.transitions.pipe(Z(n => n !== null), q(n => { let i = !1, o = new AbortController, s = () => !i && this.currentTransition?.id === n.id; return g(n).pipe(q(a => { if (this.navigationId > n.id)
        return this.cancelNavigationTransition(n, "", I.SupersededByNewNavigation), L; this.currentTransition = n; let c = this.lastSuccessfulNavigation(); this.currentNavigation.set({ id: a.id, initialUrl: a.rawUrl, extractedUrl: a.extractedUrl, targetBrowserUrl: typeof a.extras.browserUrl == "string" ? this.urlSerializer.parse(a.extras.browserUrl) : a.extras.browserUrl, trigger: a.source, extras: a.extras, previousNavigation: c ? T(d({}, c), { previousNavigation: null }) : null, abort: () => o.abort() }); let u = !e.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl(), h = a.extras.onSameUrlNavigation ?? e.onSameUrlNavigation; if (!u && h !== "reload")
        return this.events.next(new $(a.id, this.urlSerializer.serialize(a.rawUrl), "", we.IgnoredSameUrlNavigation)), a.resolve(!1), L; if (this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))
        return g(a).pipe(q(f => (this.events.next(new Q(f.id, this.urlSerializer.serialize(f.extractedUrl), f.source, f.restoredState)), f.id !== this.navigationId ? L : Promise.resolve(f))), Co(this.environmentInjector, this.configLoader, this.rootComponentType, e.config, this.urlSerializer, this.paramsInheritanceStrategy, o.signal), V(f => { n.targetSnapshot = f.targetSnapshot, n.urlAfterRedirects = f.urlAfterRedirects, this.currentNavigation.update(S => (S.finalUrl = f.urlAfterRedirects, S)); let w = new de(f.id, this.urlSerializer.serialize(f.extractedUrl), this.urlSerializer.serialize(f.urlAfterRedirects), f.targetSnapshot); this.events.next(w); })); if (u && this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)) {
        let { id: f, extractedUrl: w, source: S, restoredState: ie, extras: oe } = a, se = new Q(f, this.urlSerializer.serialize(w), S, ie);
        this.events.next(se);
        let Dt = tr(this.rootComponentType, this.environmentInjector).snapshot;
        return this.currentTransition = n = T(d({}, a), { targetSnapshot: Dt, urlAfterRedirects: w, extras: T(d({}, oe), { skipLocationChange: !1, replaceUrl: !1 }) }), this.currentNavigation.update(Me => (Me.finalUrl = w, Me)), g(n);
    }
    else
        return this.events.next(new $(a.id, this.urlSerializer.serialize(a.extractedUrl), "", we.IgnoredByUrlHandlingStrategy)), a.resolve(!1), L; }), E(a => { let c = new ot(a.id, this.urlSerializer.serialize(a.extractedUrl), this.urlSerializer.serialize(a.urlAfterRedirects), a.targetSnapshot); return this.events.next(c), this.currentTransition = n = T(d({}, a), { guards: $i(a.targetSnapshot, a.currentSnapshot, this.rootContexts) }), n; }), Ki(a => this.events.next(a)), q(a => { if (n.guardsResult = a.guardsResult, a.guardsResult && typeof a.guardsResult != "boolean")
        throw yt(this.urlSerializer, a.guardsResult); let c = new st(a.id, this.urlSerializer.serialize(a.extractedUrl), this.urlSerializer.serialize(a.urlAfterRedirects), a.targetSnapshot, !!a.guardsResult); if (this.events.next(c), !s())
        return L; if (!a.guardsResult)
        return this.cancelNavigationTransition(a, "", I.GuardRejected), L; if (a.guards.canActivateChecks.length === 0)
        return g(a); let u = new at(a.id, this.urlSerializer.serialize(a.extractedUrl), this.urlSerializer.serialize(a.urlAfterRedirects), a.targetSnapshot); if (this.events.next(u), !s())
        return L; let h = !1; return g(a).pipe(bo(this.paramsInheritanceStrategy), V({ next: () => { h = !0; let f = new ct(a.id, this.urlSerializer.serialize(a.extractedUrl), this.urlSerializer.serialize(a.urlAfterRedirects), a.targetSnapshot); this.events.next(f); }, complete: () => { h || this.cancelNavigationTransition(a, "", I.NoDataFromResolver); } })); }), kn(a => { let c = h => { let f = []; if (h.routeConfig?._loadedComponent)
        h.component = h.routeConfig?._loadedComponent;
    else if (h.routeConfig?.loadComponent) {
        let w = h._environmentInjector;
        f.push(this.configLoader.loadComponent(w, h.routeConfig).then(S => { h.component = S; }));
    } for (let w of h.children)
        f.push(...c(w)); return f; }, u = c(a.targetSnapshot.root); return u.length === 0 ? g(a) : M(Promise.all(u).then(() => a)); }), kn(() => this.afterPreactivation()), q(() => { let { currentSnapshot: a, targetSnapshot: c } = n, u = this.createViewTransition?.(this.environmentInjector, a.root, c.root); return u ? M(u).pipe(E(() => n)) : g(n); }), ve(1), E(a => { let c = Li(e.routeReuseStrategy, a.targetSnapshot, a.currentRouterState); this.currentTransition = n = a = T(d({}, a), { targetRouterState: c }), this.currentNavigation.update(u => (u.targetRouterState = c, u)), this.events.next(new he), s() && (new Wt(e.routeReuseStrategy, n.targetRouterState, n.currentRouterState, u => this.events.next(u), this.inputBindingEnabled).activate(this.rootContexts), s() && (i = !0, this.currentNavigation.update(u => (u.abort = No, u)), this.lastSuccessfulNavigation.set(Ue(this.currentNavigation)), this.events.next(new N(a.id, this.urlSerializer.serialize(a.extractedUrl), this.urlSerializer.serialize(a.urlAfterRedirects))), this.titleStrategy?.updateTitle(a.targetRouterState.snapshot), a.resolve(!0))); }), Ye(ur(o.signal).pipe(Z(() => !i && !n.targetRouterState), V(() => { this.cancelNavigationTransition(n, o.signal.reason + "", I.Aborted); }))), V({ complete: () => { i = !0; } }), Ye(this.transitionAbortWithErrorSubject.pipe(V(a => { throw a; }))), Mn(() => { o.abort(), i || this.cancelNavigationTransition(n, "", I.SupersededByNewNavigation), this.currentTransition?.id === n.id && (this.currentNavigation.set(null), this.currentTransition = null); }), De(a => { if (i = !0, this.destroyed)
        return n.resolve(!1), L; if (ar(a))
        this.events.next(new D(n.id, this.urlSerializer.serialize(n.extractedUrl), a.message, a.cancellationCode)), ki(a) ? this.events.next(new be(a.url, a.navigationBehaviorOptions)) : n.resolve(!1);
    else {
        let c = new te(n.id, this.urlSerializer.serialize(n.extractedUrl), a, n.targetSnapshot ?? void 0);
        try {
            let u = j(this.environmentInjector, () => this.navigationErrorHandler?.(c));
            if (u instanceof Ie) {
                let { message: h, cancellationCode: f } = yt(this.urlSerializer, u);
                this.events.next(new D(n.id, this.urlSerializer.serialize(n.extractedUrl), h, f)), this.events.next(new be(u.redirectTo, u.navigationBehaviorOptions));
            }
            else
                throw this.events.next(c), a;
        }
        catch (u) {
            this.options.resolveNavigationPromiseOnError ? n.resolve(!1) : n.reject(u);
        }
    } return L; })); })); }
    cancelNavigationTransition(e, n, i) { let o = new D(e.id, this.urlSerializer.serialize(e.extractedUrl), n, i); this.events.next(o), e.resolve(!1); }
    isUpdatingInternalState() { return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString(); }
    isUpdatedBrowserUrl() { let e = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))), n = Ue(this.currentNavigation), i = n?.targetBrowserUrl ?? n?.extractedUrl; return e.toString() !== i?.toString() && !n?.extras.skipLocationChange; }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function _o(t) { return t !== Re; }
var hn = new ne("");
function Sr(t, r, e) { let n = new Set; r.snapshot.root && wr(r.snapshot.root, n); let i = t.retrieveStoredRouteHandles?.() || []; for (let o of i) {
    let s = o;
    if (s?.route?.value?.snapshot)
        for (let a of s.route.value.snapshot.pathFromRoot)
            a.routeConfig && n.add(a.routeConfig);
} Jt(e, n, t, !1); }
function wr(t, r) { t.routeConfig && r.add(t.routeConfig); for (let e of t.children)
    wr(e, r); }
function Jt(t, r, e, n) { for (let i of t) {
    let o = n || !!((i._injector || i._loadedInjector) && !r.has(i) && (e.shouldDestroyInjector?.(i) ?? !1));
    i.children && Jt(i.children, r, e, o), i.loadChildren && i._loadedRoutes && Jt(i._loadedRoutes, r, e, o), o && (i._injector && (i._injector.destroy(), i._injector = void 0), i._loadedInjector && (i._loadedInjector.destroy(), i._loadedInjector = void 0));
} }
function Oo(t) { let r = t; r && r.componentRef && r.componentRef.destroy(); }
var Cr = (() => { class t {
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: () => v(Uo), providedIn: "root" });
} return t; })(), St = class {
    shouldDetach(r) { return !1; }
    store(r, e) { }
    shouldAttach(r) { return !1; }
    retrieve(r) { return null; }
    shouldReuseRoute(r, e) { return r.routeConfig === e.routeConfig; }
    shouldDestroyInjector(r) { return !0; }
}, Uo = (() => { class t extends St {
    static \u0275fac = (() => { let e; return function (i) { return (e || (e = y.\u0275\u0275getInheritedFactory(t)))(i || t); }; })();
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), qe = (() => { class t {
    urlSerializer = v(pe);
    options = v(Y, { optional: !0 }) || {};
    canceledNavigationResolution = this.options.canceledNavigationResolution || "replace";
    location = v(Xt);
    urlHandlingStrategy = v(bt);
    urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
    currentUrlTree = new O;
    getCurrentUrlTree() { return this.currentUrlTree; }
    rawUrlTree = this.currentUrlTree;
    getRawUrlTree() { return this.rawUrlTree; }
    createBrowserPath({ finalUrl: e, initialUrl: n, targetBrowserUrl: i }) { let o = e !== void 0 ? this.urlHandlingStrategy.merge(e, n) : n, s = i ?? o; return s instanceof O ? this.urlSerializer.serialize(s) : s; }
    commitTransition({ targetRouterState: e, finalUrl: n, initialUrl: i }) { n && e ? (this.currentUrlTree = n, this.rawUrlTree = this.urlHandlingStrategy.merge(n, i), this.routerState = e) : this.rawUrlTree = i; }
    routerState = tr(null, v(en));
    getRouterState() { return this.routerState; }
    _stateMemento = this.createStateMemento();
    get stateMemento() { return this._stateMemento; }
    updateStateMemento() { this._stateMemento = this.createStateMemento(); }
    createStateMemento() { return { rawUrlTree: this.rawUrlTree, currentUrlTree: this.currentUrlTree, routerState: this.routerState }; }
    restoredState() { return this.location.getState(); }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: () => v(Po), providedIn: "root" });
} return t; })(), Po = (() => { class t extends qe {
    currentPageId = 0;
    lastSuccessfulId = -1;
    get browserPageId() { return this.canceledNavigationResolution !== "computed" ? this.currentPageId : this.restoredState()?.\u0275routerPageId ?? this.currentPageId; }
    registerNonRouterCurrentEntryChangeListener(e) { return this.location.subscribe(n => { n.type === "popstate" && setTimeout(() => { e(n.url, n.state, "popstate"); }); }); }
    handleRouterEvent(e, n) { e instanceof Q ? this.updateStateMemento() : e instanceof $ ? this.commitTransition(n) : e instanceof de ? this.urlUpdateStrategy === "eager" && (n.extras.skipLocationChange || this.setBrowserUrl(this.createBrowserPath(n), n)) : e instanceof he ? (this.commitTransition(n), this.urlUpdateStrategy === "deferred" && !n.extras.skipLocationChange && this.setBrowserUrl(this.createBrowserPath(n), n)) : e instanceof D && !nn(e) ? this.restoreHistory(n) : e instanceof te ? this.restoreHistory(n, !0) : e instanceof N && (this.lastSuccessfulId = e.id, this.currentPageId = this.browserPageId); }
    setBrowserUrl(e, { extras: n, id: i }) { let { replaceUrl: o, state: s } = n; if (this.location.isCurrentPathEqualTo(e) || o) {
        let a = this.browserPageId, c = d(d({}, s), this.generateNgRouterState(i, a));
        this.location.replaceState(e, "", c);
    }
    else {
        let a = d(d({}, s), this.generateNgRouterState(i, this.browserPageId + 1));
        this.location.go(e, "", a);
    } }
    restoreHistory(e, n = !1) { if (this.canceledNavigationResolution === "computed") {
        let i = this.browserPageId, o = this.currentPageId - i;
        o !== 0 ? this.location.historyGo(o) : this.getCurrentUrlTree() === e.finalUrl && o === 0 && (this.resetInternalState(e), this.resetUrlToCurrentUrlTree());
    }
    else
        this.canceledNavigationResolution === "replace" && (n && this.resetInternalState(e), this.resetUrlToCurrentUrlTree()); }
    resetInternalState({ finalUrl: e }) { this.routerState = this.stateMemento.routerState, this.currentUrlTree = this.stateMemento.currentUrlTree, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, e ?? this.rawUrlTree); }
    resetUrlToCurrentUrlTree() { this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId)); }
    generateNgRouterState(e, n) { return this.canceledNavigationResolution === "computed" ? { navigationId: e, \u0275routerPageId: n } : { navigationId: e }; }
    static \u0275fac = (() => { let e; return function (i) { return (e || (e = y.\u0275\u0275getInheritedFactory(t)))(i || t); }; })();
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function Tt(t, r) { t.events.pipe(Z(e => e instanceof N || e instanceof D || e instanceof te || e instanceof $), E(e => e instanceof N || e instanceof $ ? 0 : (e instanceof D ? e.code === I.Redirect || e.code === I.SupersededByNewNavigation : !1) ? 2 : 1), Z(e => e !== 2), ve(1)).subscribe(() => { r(); }); }
var fn = { paths: "exact", fragment: "ignored", matrixParams: "ignored", queryParams: "exact" }, pn = { paths: "subset", fragment: "ignored", matrixParams: "ignored", queryParams: "subset" }, B = (() => { class t {
    get currentUrlTree() { return this.stateManager.getCurrentUrlTree(); }
    get rawUrlTree() { return this.stateManager.getRawUrlTree(); }
    disposed = !1;
    nonRouterCurrentEntryChangeSubscription;
    console = v(ii);
    stateManager = v(qe);
    options = v(Y, { optional: !0 }) || {};
    pendingTasks = v(oi);
    urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
    navigationTransitions = v(Et);
    urlSerializer = v(pe);
    location = v(Xt);
    urlHandlingStrategy = v(bt);
    injector = v(en);
    _events = new K;
    get events() { return this._events; }
    get routerState() { return this.stateManager.getRouterState(); }
    navigated = !1;
    routeReuseStrategy = v(Cr);
    injectorCleanup = v(hn, { optional: !0 });
    onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
    config = v(re, { optional: !0 })?.flat() ?? [];
    componentInputBindingEnabled = !!v(Fe, { optional: !0 });
    currentNavigation = this.navigationTransitions.currentNavigation.asReadonly();
    constructor() { this.resetConfig(this.config), this.navigationTransitions.setupNavigations(this).subscribe({ error: e => { } }), this.subscribeToNavigationEvents(); }
    eventsSubscription = new wn;
    subscribeToNavigationEvents() { let e = this.navigationTransitions.events.subscribe(n => { try {
        let i = this.navigationTransitions.currentTransition, o = Ue(this.navigationTransitions.currentNavigation);
        if (i !== null && o !== null) {
            if (this.stateManager.handleRouterEvent(n, o), n instanceof D && n.code !== I.Redirect && n.code !== I.SupersededByNewNavigation)
                this.navigated = !0;
            else if (n instanceof N)
                this.navigated = !0, this.injectorCleanup?.(this.routeReuseStrategy, this.routerState, this.config);
            else if (n instanceof be) {
                let s = n.navigationBehaviorOptions, a = this.urlHandlingStrategy.merge(n.url, i.currentRawUrl), c = d({ scroll: i.extras.scroll, browserUrl: i.extras.browserUrl, info: i.extras.info, skipLocationChange: i.extras.skipLocationChange, replaceUrl: i.extras.replaceUrl || this.urlUpdateStrategy === "eager" || _o(i.source) }, s);
                this.scheduleNavigation(a, Re, null, c, { resolve: i.resolve, reject: i.reject, promise: i.promise });
            }
        }
        Ui(n) && this._events.next(n);
    }
    catch (i) {
        this.navigationTransitions.transitionAbortWithErrorSubject.next(i);
    } }); this.eventsSubscription.add(e); }
    resetRootComponentType(e) { this.routerState.root.component = e, this.navigationTransitions.rootComponentType = e; }
    initialNavigation() { this.setUpLocationChangeListener(), this.navigationTransitions.hasRequestedNavigation || this.navigateToSyncWithBrowser(this.location.path(!0), Re, this.stateManager.restoredState()); }
    setUpLocationChangeListener() { this.nonRouterCurrentEntryChangeSubscription ??= this.stateManager.registerNonRouterCurrentEntryChangeListener((e, n, i) => { this.navigateToSyncWithBrowser(e, i, n); }); }
    navigateToSyncWithBrowser(e, n, i) { let o = { replaceUrl: !0 }, s = i?.navigationId ? i : null; if (i) {
        let c = d({}, i);
        delete c.navigationId, delete c.\u0275routerPageId, Object.keys(c).length !== 0 && (o.state = c);
    } let a = this.parseUrl(e); this.scheduleNavigation(a, n, s, o).catch(c => { this.disposed || this.injector.get(si)(c); }); }
    get url() { return this.serializeUrl(this.currentUrlTree); }
    getCurrentNavigation() { return Ue(this.navigationTransitions.currentNavigation); }
    get lastSuccessfulNavigation() { return this.navigationTransitions.lastSuccessfulNavigation; }
    resetConfig(e) { this.config = e.map(cn), this.navigated = !1; }
    ngOnDestroy() { this.dispose(); }
    dispose() { this._events.unsubscribe(), this.navigationTransitions.complete(), this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(), this.nonRouterCurrentEntryChangeSubscription = void 0, this.disposed = !0, this.eventsSubscription.unsubscribe(); }
    createUrlTree(e, n = {}) { let { relativeTo: i, queryParams: o, fragment: s, queryParamsHandling: a, preserveFragment: c } = n, u = c ? this.currentUrlTree.fragment : s, h = null; switch (a ?? this.options.defaultQueryParamsHandling) {
        case "merge":
            h = d(d({}, this.currentUrlTree.queryParams), o);
            break;
        case "preserve":
            h = this.currentUrlTree.queryParams;
            break;
        default: h = o || null;
    } h !== null && (h = this.removeEmptyProps(h)); let f; try {
        let w = i ? i.snapshot : this.routerState.snapshot.root;
        f = Zn(w);
    }
    catch {
        (typeof e[0] != "string" || e[0][0] !== "/") && (e = []), f = this.currentUrlTree.root;
    } return Jn(f, e, h, u ?? null, this.urlSerializer); }
    navigateByUrl(e, n = { skipLocationChange: !1 }) { let i = ee(e) ? e : this.parseUrl(e), o = this.urlHandlingStrategy.merge(i, this.rawUrlTree); return this.scheduleNavigation(o, Re, null, n); }
    navigate(e, n = { skipLocationChange: !1 }) { return Lo(e), this.navigateByUrl(this.createUrlTree(e, n), n); }
    serializeUrl(e) { return this.urlSerializer.serialize(e); }
    parseUrl(e) { try {
        return this.urlSerializer.parse(e);
    }
    catch {
        return this.console.warn(ai(4018, !1)), this.urlSerializer.parse("/");
    } }
    isActive(e, n) { let i; if (n === !0 ? i = d({}, fn) : n === !1 ? i = d({}, pn) : i = n, ee(e))
        return $t(this.currentUrlTree, e, i); let o = this.parseUrl(e); return $t(this.currentUrlTree, o, i); }
    removeEmptyProps(e) { return Object.entries(e).reduce((n, [i, o]) => (o != null && (n[i] = o), n), {}); }
    scheduleNavigation(e, n, i, o, s) { if (this.disposed)
        return Promise.resolve(!1); let a, c, u; s ? (a = s.resolve, c = s.reject, u = s.promise) : u = new Promise((f, w) => { a = f, c = w; }); let h = this.pendingTasks.add(); return Tt(this, () => { queueMicrotask(() => this.pendingTasks.remove(h)); }), this.navigationTransitions.handleNavigationRequest({ source: n, restoredState: i, currentUrlTree: this.currentUrlTree, currentRawUrl: this.currentUrlTree, rawUrl: e, extras: o, resolve: a, reject: c, promise: u, currentSnapshot: this.routerState.snapshot, currentRouterState: this.routerState }), u.catch(f => Promise.reject(f)); }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function Lo(t) { for (let r = 0; r < t.length; r++)
    if (t[r] == null)
        throw new A(4008, !1); }
import * as br from "@angular/common";
import { ViewportScroller as Ir, PlatformNavigation as jo, PlatformLocation as xo, \u0275PRECOMMIT_HANDLER_SUPPORTED as ko, Location as Er, \u0275NavigationAdapterForLocation as $o, LOCATION_INITIALIZED as zo, LocationStrategy as yn, HashLocationStrategy as Tr, PathLocationStrategy as Ho } from "@angular/common";
import * as l from "@angular/core";
import { signal as Fo, untracked as Rn, inject as C, \u0275INTERNAL_APPLICATION_ERROR_HANDLER as Bo, HostAttributeToken as qo, \u0275RuntimeError as Ea, booleanAttribute as gn, EventEmitter as Vo, createEnvironmentInjector as Go, InjectionToken as Ge, NgZone as Wo, EnvironmentInjector as Qo, DestroyRef as Yo, afterNextRender as Ko, \u0275promiseWithResolvers as Zo, makeEnvironmentProviders as Jo, APP_BOOTSTRAP_LISTENER as Mr, Injector as Ar, ApplicationRef as Xo, \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION as es, provideAppInitializer as Dr, \u0275performanceMarkFeature as ts, ENVIRONMENT_INITIALIZER as ja } from "@angular/core";
var Mt = (() => { class t {
    router;
    route;
    tabIndexAttribute;
    renderer;
    el;
    locationStrategy;
    reactiveHref = Fo(null);
    get href() { return Rn(this.reactiveHref); }
    set href(e) { this.reactiveHref.set(e); }
    target;
    queryParams;
    fragment;
    queryParamsHandling;
    state;
    info;
    relativeTo;
    isAnchorElement;
    subscription;
    onChanges = new K;
    applicationErrorHandler = C(Bo);
    options = C(Y, { optional: !0 });
    constructor(e, n, i, o, s, a) { this.router = e, this.route = n, this.tabIndexAttribute = i, this.renderer = o, this.el = s, this.locationStrategy = a, this.reactiveHref.set(C(new qo("href"), { optional: !0 })); let c = s.nativeElement.tagName?.toLowerCase(); this.isAnchorElement = c === "a" || c === "area" || !!(typeof customElements == "object" && customElements.get(c)?.observedAttributes?.includes?.("href")), this.isAnchorElement && (this.setTabIndexIfNotOnNativeEl("0"), this.subscribeToNavigationEventsIfNecessary()); }
    subscribeToNavigationEventsIfNecessary() { this.subscription === void 0 && (this.subscription = this.router.events.subscribe(e => { e instanceof N && this.updateHref(); })); }
    preserveFragment = !1;
    skipLocationChange = !1;
    replaceUrl = !1;
    setTabIndexIfNotOnNativeEl(e) { this.tabIndexAttribute != null || this.isAnchorElement || this.applyAttributeValue("tabindex", e); }
    ngOnChanges(e) { this.isAnchorElement && this.updateHref(), this.onChanges.next(this); }
    routerLinkInput = null;
    set routerLink(e) { e == null ? (this.routerLinkInput = null, this.setTabIndexIfNotOnNativeEl(null)) : (ee(e) ? this.routerLinkInput = e : this.routerLinkInput = Array.isArray(e) ? e : [e], this.setTabIndexIfNotOnNativeEl("0")); }
    onClick(e, n, i, o, s) { let a = this.urlTree; if (a === null || this.isAnchorElement && (e !== 0 || n || i || o || s || typeof this.target == "string" && this.target != "_self"))
        return !0; let c = { skipLocationChange: this.skipLocationChange, replaceUrl: this.replaceUrl, state: this.state, info: this.info }; return this.router.navigateByUrl(a, c)?.catch(u => { this.applicationErrorHandler(u); }), !this.isAnchorElement; }
    ngOnDestroy() { this.subscription?.unsubscribe(); }
    updateHref() { let e = this.urlTree; this.reactiveHref.set(e !== null && this.locationStrategy ? this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e)) ?? "" : null); }
    applyAttributeValue(e, n) { let i = this.renderer, o = this.el.nativeElement; n !== null ? i.setAttribute(o, e, n) : i.removeAttribute(o, e); }
    get urlTree() { return this.routerLinkInput === null ? null : ee(this.routerLinkInput) ? this.routerLinkInput : this.router.createUrlTree(this.routerLinkInput, { relativeTo: this.relativeTo !== void 0 ? this.relativeTo : this.route, queryParams: this.queryParams, fragment: this.fragment, queryParamsHandling: this.queryParamsHandling, preserveFragment: this.preserveFragment }); }
    static \u0275fac = function (n) { return new (n || t)(l.\u0275\u0275directiveInject(B), l.\u0275\u0275directiveInject(F), l.\u0275\u0275injectAttribute("tabindex"), l.\u0275\u0275directiveInject(l.Renderer2), l.\u0275\u0275directiveInject(l.ElementRef), l.\u0275\u0275directiveInject(br.LocationStrategy)); };
    static \u0275dir = l.\u0275\u0275defineDirective({ type: t, selectors: [["", "routerLink", ""]], hostVars: 2, hostBindings: function (n, i) { n & 1 && l.\u0275\u0275listener("click", function (s) { return i.onClick(s.button, s.ctrlKey, s.shiftKey, s.altKey, s.metaKey); }), n & 2 && l.\u0275\u0275attribute("href", i.reactiveHref(), l.\u0275\u0275sanitizeUrlOrResourceUrl)("target", i.target); }, inputs: { target: "target", queryParams: "queryParams", fragment: "fragment", queryParamsHandling: "queryParamsHandling", state: "state", info: "info", relativeTo: "relativeTo", preserveFragment: [2, "preserveFragment", "preserveFragment", gn], skipLocationChange: [2, "skipLocationChange", "skipLocationChange", gn], replaceUrl: [2, "replaceUrl", "replaceUrl", gn], routerLink: "routerLink" }, features: [l.\u0275\u0275NgOnChangesFeature] });
} return t; })(), ns = (() => { class t {
    router;
    element;
    renderer;
    cdr;
    links;
    classes = [];
    routerEventsSubscription;
    linkInputChangesSubscription;
    _isActive = !1;
    get isActive() { return this._isActive; }
    routerLinkActiveOptions = { exact: !1 };
    ariaCurrentWhenActive;
    isActiveChange = new Vo;
    link = C(Mt, { optional: !0 });
    constructor(e, n, i, o) { this.router = e, this.element = n, this.renderer = i, this.cdr = o, this.routerEventsSubscription = e.events.subscribe(s => { s instanceof N && this.update(); }); }
    ngAfterContentInit() { g(this.links.changes, g(null)).pipe(Ae()).subscribe(e => { this.update(), this.subscribeToEachLinkOnChanges(); }); }
    subscribeToEachLinkOnChanges() { this.linkInputChangesSubscription?.unsubscribe(); let e = [...this.links.toArray(), this.link].filter(n => !!n).map(n => n.onChanges); this.linkInputChangesSubscription = M(e).pipe(Ae()).subscribe(n => { this._isActive !== this.isLinkActive(this.router)(n) && this.update(); }); }
    set routerLinkActive(e) { let n = Array.isArray(e) ? e : e.split(" "); this.classes = n.filter(i => !!i); }
    ngOnChanges(e) { this.update(); }
    ngOnDestroy() { this.routerEventsSubscription.unsubscribe(), this.linkInputChangesSubscription?.unsubscribe(); }
    update() { !this.links || !this.router.navigated || queueMicrotask(() => { let e = this.hasActiveLinks(); this.classes.forEach(n => { e ? this.renderer.addClass(this.element.nativeElement, n) : this.renderer.removeClass(this.element.nativeElement, n); }), e && this.ariaCurrentWhenActive !== void 0 ? this.renderer.setAttribute(this.element.nativeElement, "aria-current", this.ariaCurrentWhenActive.toString()) : this.renderer.removeAttribute(this.element.nativeElement, "aria-current"), this._isActive !== e && (this._isActive = e, this.cdr.markForCheck(), this.isActiveChange.emit(e)); }); }
    isLinkActive(e) { let n = rs(this.routerLinkActiveOptions) ? this.routerLinkActiveOptions : this.routerLinkActiveOptions.exact ?? !1 ? d({}, fn) : d({}, pn); return i => { let o = i.urlTree; return o ? Rn(tn(o, e, n)) : !1; }; }
    hasActiveLinks() { let e = this.isLinkActive(this.router); return this.link && e(this.link) || this.links.some(e); }
    static \u0275fac = function (n) { return new (n || t)(l.\u0275\u0275directiveInject(B), l.\u0275\u0275directiveInject(l.ElementRef), l.\u0275\u0275directiveInject(l.Renderer2), l.\u0275\u0275directiveInject(l.ChangeDetectorRef)); };
    static \u0275dir = l.\u0275\u0275defineDirective({ type: t, selectors: [["", "routerLinkActive", ""]], contentQueries: function (n, i, o) { if (n & 1 && l.\u0275\u0275contentQuery(o, Mt, 5), n & 2) {
            let s;
            l.\u0275\u0275queryRefresh(s = l.\u0275\u0275loadQuery()) && (i.links = s);
        } }, inputs: { routerLinkActiveOptions: "routerLinkActiveOptions", ariaCurrentWhenActive: "ariaCurrentWhenActive", routerLinkActive: "routerLinkActive" }, outputs: { isActiveChange: "isActiveChange" }, exportAs: ["routerLinkActive"], features: [l.\u0275\u0275NgOnChangesFeature] });
} return t; })();
function rs(t) { return !!t.paths; }
var Ve = class {
}, is = (() => { class t {
    preload(e, n) { return n().pipe(De(() => g(null))); }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), os = (() => { class t {
    preload(e, n) { return g(null); }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), Nr = (() => { class t {
    router;
    injector;
    preloadingStrategy;
    loader;
    subscription;
    constructor(e, n, i, o) { this.router = e, this.injector = n, this.preloadingStrategy = i, this.loader = o; }
    setUpPreloading() { this.subscription = this.router.events.pipe(Z(e => e instanceof N), Ne(() => this.preload())).subscribe(() => { }); }
    preload() { return this.processRoutes(this.injector, this.router.config); }
    ngOnDestroy() { this.subscription?.unsubscribe(); }
    processRoutes(e, n) { let i = []; for (let o of n) {
        o.providers && !o._injector && (o._injector = Go(o.providers, e, ""));
        let s = o._injector ?? e;
        o._loadedNgModuleFactory && !o._loadedInjector && (o._loadedInjector = o._loadedNgModuleFactory.create(s).injector);
        let a = o._loadedInjector ?? s;
        (o.loadChildren && !o._loadedRoutes && o.canLoad === void 0 || o.loadComponent && !o._loadedComponent) && i.push(this.preloadConfig(s, o)), (o.children || o._loadedRoutes) && i.push(this.processRoutes(a, o.children ?? o._loadedRoutes));
    } return M(i).pipe(Ae()); }
    preloadConfig(e, n) { return this.preloadingStrategy.preload(n, () => { if (e.destroyed)
        return g(null); let i; n.loadChildren && n.canLoad === void 0 ? i = M(this.loader.loadChildren(e, n)) : i = g(null); let o = i.pipe(z(s => s === null ? g(void 0) : (n._loadedRoutes = s.routes, n._loadedInjector = s.injector, n._loadedNgModuleFactory = s.factory, this.processRoutes(s.injector ?? e, s.routes)))); if (n.loadComponent && !n._loadedComponent) {
        let s = this.loader.loadComponent(e, n);
        return M([o, s]).pipe(Ae());
    }
    else
        return o; }); }
    static \u0275fac = function (n) { return new (n || t)(l.\u0275\u0275inject(B), l.\u0275\u0275inject(l.EnvironmentInjector), l.\u0275\u0275inject(Ve), l.\u0275\u0275inject(Ct)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), At = new Ge(""), _r = (() => { class t {
    options;
    routerEventsSubscription;
    scrollEventsSubscription;
    lastId = 0;
    lastSource = Re;
    restoredId = 0;
    store = {};
    urlSerializer = C(pe);
    zone = C(Wo);
    viewportScroller = C(Ir);
    transitions = C(Et);
    constructor(e) { this.options = e, this.options.scrollPositionRestoration ||= "disabled", this.options.anchorScrolling ||= "disabled"; }
    init() { this.options.scrollPositionRestoration !== "disabled" && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents(); }
    createScrollEvents() { return this.transitions.events.subscribe(e => { e instanceof Q ? (this.store[this.lastId] = this.viewportScroller.getScrollPosition(), this.lastSource = e.navigationTrigger, this.restoredId = e.restoredState ? e.restoredState.navigationId : 0) : e instanceof N ? (this.lastId = e.id, this.scheduleScrollEvent(e, this.urlSerializer.parse(e.urlAfterRedirects).fragment)) : e instanceof $ && e.code === we.IgnoredSameUrlNavigation && (this.lastSource = void 0, this.restoredId = 0, this.scheduleScrollEvent(e, this.urlSerializer.parse(e.url).fragment)); }); }
    consumeScrollEvents() { return this.transitions.events.subscribe(e => { if (!(e instanceof Ce) || e.scrollBehavior === "manual")
        return; let n = { behavior: "instant" }; e.position ? this.options.scrollPositionRestoration === "top" ? this.viewportScroller.scrollToPosition([0, 0], n) : this.options.scrollPositionRestoration === "enabled" && this.viewportScroller.scrollToPosition(e.position, n) : e.anchor && this.options.anchorScrolling === "enabled" ? this.viewportScroller.scrollToAnchor(e.anchor) : this.options.scrollPositionRestoration !== "disabled" && this.viewportScroller.scrollToPosition([0, 0]); }); }
    scheduleScrollEvent(e, n) { let i = Rn(this.transitions.currentNavigation)?.extras.scroll; this.zone.runOutsideAngular(() => R(this, null, function* () { yield new Promise(o => { setTimeout(o), typeof requestAnimationFrame < "u" && requestAnimationFrame(o); }), this.zone.run(() => { this.transitions.events.next(new Ce(e, this.lastSource === "popstate" ? this.store[this.restoredId] : null, n, i)); }); })); }
    ngOnDestroy() { this.routerEventsSubscription?.unsubscribe(), this.scrollEventsSubscription?.unsubscribe(); }
    static \u0275fac = function (n) { l.\u0275\u0275invalidFactory(); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })();
var ss = (() => { class t extends qe {
    injector = C(Qo);
    navigation = C(jo);
    inMemoryScrollingEnabled = C(At, { optional: !0 }) !== null;
    base = new URL(C(xo).href).origin;
    appRootURL = new URL(this.location.prepareExternalUrl?.("/") ?? "/", this.base).href;
    precommitHandlerSupported = C(ko);
    activeHistoryEntry = this.navigation.currentEntry;
    currentNavigation = {};
    nonRouterCurrentEntryChangeSubject = new K;
    nonRouterEntryChangeListener;
    get registered() { return this.nonRouterEntryChangeListener !== void 0 && !this.nonRouterEntryChangeListener.closed; }
    constructor() { super(); let e = n => { this.handleNavigate(n); }; this.navigation.addEventListener("navigate", e), C(Yo).onDestroy(() => this.navigation.removeEventListener("navigate", e)); }
    registerNonRouterCurrentEntryChangeListener(e) { return this.activeHistoryEntry = this.navigation.currentEntry, this.nonRouterEntryChangeListener = this.nonRouterCurrentEntryChangeSubject.subscribe(({ path: n, state: i }) => { e(n, i, "popstate"); }), this.nonRouterEntryChangeListener; }
    handleRouterEvent(e, n) { return R(this, null, function* () { if (this.currentNavigation = T(d({}, this.currentNavigation), { routerTransition: n }), e instanceof Q)
        this.updateStateMemento();
    else if (e instanceof $)
        this.finishNavigation(), this.commitTransition(n);
    else if (e instanceof de)
        this.urlUpdateStrategy === "eager" && !n.extras.skipLocationChange && this.createNavigationForTransition(n);
    else if (e instanceof he)
        this.commitTransition(n), this.urlUpdateStrategy === "deferred" && !n.extras.skipLocationChange && this.createNavigationForTransition(n);
    else if (e instanceof D || e instanceof te)
        this.cancel(n, e);
    else if (e instanceof N) {
        let { resolveHandler: i, removeAbortListener: o } = this.currentNavigation;
        this.currentNavigation = {}, o?.(), this.activeHistoryEntry = this.navigation.currentEntry, Ko({ read: () => i?.() }, { injector: this.injector });
    } }); }
    createNavigationForTransition(e) { let { navigationEvent: n } = this.currentNavigation; if (n && (n.navigationType === "traverse" || n.navigationType === "reload") && this.eventAndRouterDestinationsMatch(n, e))
        return; this.currentNavigation.removeAbortListener?.(); let i = this.createBrowserPath(e); this.navigate(i, e); }
    navigate(e, n) { let i = n.extras.skipLocationChange ? this.navigation.currentEntry.url : this.location.prepareExternalUrl(e), o = T(d({}, n.extras.state), { navigationId: n.id }), s = { \u0275routerInfo: { intercept: !0 } }; !this.navigation.transition && this.currentNavigation.navigationEvent && (n.extras.replaceUrl = !1); let a = this.location.isCurrentPathEqualTo(i) || n.extras.replaceUrl || n.extras.skipLocationChange ? "replace" : "push"; vn(this.navigation.navigate(i, { state: o, history: a, info: s })); }
    finishNavigation() { this.currentNavigation?.resolveHandler?.(), this.currentNavigation = {}; }
    cancel(e, n) { return R(this, null, function* () { this.currentNavigation.rejectNavigateEvent?.(); let i = {}; if (this.currentNavigation = i, nn(n))
        return; let o = this.canceledNavigationResolution === "computed" && this.navigation.currentEntry.key !== this.activeHistoryEntry.key; if (this.resetInternalState(e.finalUrl, o), this.navigation.currentEntry.id !== this.activeHistoryEntry.id && !(n instanceof D && n.code === I.Aborted && (yield Promise.resolve(), this.currentNavigation !== i)))
        if (o)
            vn(this.navigation.traverseTo(this.activeHistoryEntry.key, { info: { \u0275routerInfo: { intercept: !1 } } }));
        else {
            let s = this.urlSerializer.serialize(this.getCurrentUrlTree()), a = this.location.prepareExternalUrl(s);
            vn(this.navigation.navigate(a, { state: this.activeHistoryEntry.getState(), history: "replace", info: { \u0275routerInfo: { intercept: !1 } } }));
        } }); }
    resetInternalState(e, n) { this.routerState = this.stateMemento.routerState, this.currentUrlTree = this.stateMemento.currentUrlTree, this.rawUrlTree = n ? this.stateMemento.rawUrlTree : this.urlHandlingStrategy.merge(this.currentUrlTree, e ?? this.rawUrlTree); }
    handleNavigate(e) { if (!e.canIntercept)
        return; let n = e?.info?.\u0275routerInfo; if (n && !n.intercept)
        return; let i = !!n; if (!i && (this.currentNavigation.routerTransition?.abort(), !this.registered)) {
        this.finishNavigation();
        return;
    } this.currentNavigation = d({}, this.currentNavigation), this.currentNavigation.navigationEvent = e; let o = () => { this.currentNavigation.routerTransition?.abort(); }; e.signal.addEventListener("abort", o), this.currentNavigation.removeAbortListener = () => e.signal.removeEventListener("abort", o); let a = { scroll: this.inMemoryScrollingEnabled ? "manual" : this.currentNavigation.routerTransition?.extras.scroll ?? "after-transition" }, { promise: c, resolve: u, reject: h } = Zo(); this.currentNavigation.resolveHandler = () => { this.currentNavigation.removeAbortListener?.(), u(); }, this.currentNavigation.rejectNavigateEvent = () => { this.currentNavigation.removeAbortListener?.(), h(); }, c.catch(() => { }), a.handler = () => c, e.intercept(a), i || this.handleNavigateEventTriggeredOutsideRouterAPIs(e); }
    handleNavigateEventTriggeredOutsideRouterAPIs(e) { let n = e.destination.url.substring(this.appRootURL.length - 1), i = e.destination.getState(); this.nonRouterCurrentEntryChangeSubject.next({ path: n, state: i }); }
    eventAndRouterDestinationsMatch(e, n) { let i = this.createBrowserPath(n), o = new URL(e.destination.url), s = this.location.prepareExternalUrl(i); return new URL(s, o.origin).href === o.href; }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function vn(t) { return t.finished.catch(() => { }), t.committed.catch(() => { }), t; }
function as(t, ...r) { return Jo([{ provide: re, multi: !0, useValue: t }, [], { provide: F, useFactory: Or }, { provide: Mr, multi: !0, useFactory: Ur }, r.map(e => e.\u0275providers)]); }
function Or() { return C(B).routerState.root; }
function x(t, r) { return { \u0275kind: t, \u0275providers: r }; }
function cs(t) { return [{ provide: re, multi: !0, useValue: t }, []]; }
function us(t = {}) { return x(4, [{ provide: At, useFactory: () => new _r(t) }]); }
function ls() { return x(11, [{ provide: qe, useExisting: ss }, { provide: Er, useClass: $o }, []]); }
function Ur() { let t = C(Ar); return r => { let e = t.get(Xo); if (r !== e.components[0])
    return; let n = t.get(B), i = t.get(Pr); t.get(Sn) === 1 && n.initialNavigation(), t.get(xr, null, { optional: !0 })?.setUpPreloading(), t.get(At, null, { optional: !0 })?.init(), n.resetRootComponentType(e.componentTypes[0]), i.closed || (i.next(), i.complete(), i.unsubscribe()); }; }
var Pr = new Ge("", { factory: () => new K }), Sn = new Ge("", { factory: () => 1 });
function Lr() { let t = [{ provide: es, useValue: !0 }, { provide: Sn, useValue: 0 }, Dr(() => { let r = C(Ar); return r.get(zo, Promise.resolve()).then(() => new Promise(n => { let i = r.get(B), o = r.get(Pr); Tt(i, () => { n(!0); }), r.get(Et).afterPreactivation = () => (n(!0), o.closed ? g(void 0) : o), i.initialNavigation(); })); })]; return x(2, t); }
function jr() { let t = [Dr(() => { C(B).setUpLocationChangeListener(); }), { provide: Sn, useValue: 2 }]; return x(3, t); }
function ds() { let t = []; return t = [], x(1, t); }
var xr = new Ge("");
function kr(t) { return x(0, [{ provide: xr, useExisting: Nr }, { provide: Ve, useExisting: t }]); }
function hs(t) { return x(5, [{ provide: Y, useValue: t }]); }
function fs() { return x(6, [{ provide: yn, useClass: Tr }]); }
function ps(t) { return x(7, [{ provide: It, useValue: t }]); }
function gs() { return x(10, [{ provide: hn, useValue: Sr }]); }
function $r() { return x(8, [sn, { provide: Fe, useExisting: sn }]); }
function zr(t) { ts("NgRouterViewTransitions"); let r = [{ provide: ln, useValue: Rr }, { provide: dn, useValue: d({ skipNextTransition: !!t?.skipInitialTransition }, t) }]; return x(9, r); }
var Hr = [Er, { provide: pe, useClass: W }, B, ge, { provide: F, useFactory: Or }, Ct, []], vs = (() => { class t {
    constructor() { }
    static forRoot(e, n) { return { ngModule: t, providers: [Hr, [], { provide: re, multi: !0, useValue: e }, [], n?.errorHandler ? { provide: It, useValue: n.errorHandler } : [], { provide: Y, useValue: n || {} }, n?.useHash ? ys() : Rs(), ms(), n?.preloadingStrategy ? kr(n.preloadingStrategy).\u0275providers : [], n?.initialNavigation ? Ss(n) : [], n?.bindToComponentInputs ? $r().\u0275providers : [], n?.enableViewTransitions ? zr().\u0275providers : [], ws()] }; }
    static forChild(e) { return { ngModule: t, providers: [{ provide: re, multi: !0, useValue: e }] }; }
    static \u0275fac = function (n) { return new (n || t); };
    static \u0275mod = l.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = l.\u0275\u0275defineInjector({});
} return t; })();
function ms() { return { provide: At, useFactory: () => { let t = C(Ir), r = C(Y); return r.scrollOffset && t.setOffset(r.scrollOffset), new _r(r); } }; }
function ys() { return { provide: yn, useClass: Tr }; }
function Rs() { return { provide: yn, useClass: Ho }; }
function Ss(t) { return [t.initialNavigation === "disabled" ? jr().\u0275providers : [], t.initialNavigation === "enabledBlocking" ? Lr().\u0275providers : []]; }
var mn = new Ge("");
function ws() { return [{ provide: mn, useFactory: Ur }, { provide: Mr, multi: !0, useExisting: mn }]; }
import { inject as We, Version as Cs } from "@angular/core";
import "@angular/common";
function Ga(t) { return t.map(r => (...e) => We(r).canMatch(...e)); }
function Wa(t) { return t.map(r => (...e) => We(r).canActivate(...e)); }
function Qa(t) { return t.map(r => (...e) => We(r).canActivateChild(...e)); }
function Ya(t) { return t.map(r => (...e) => We(r).canDeactivate(...e)); }
function Ka(t) { return (...r) => We(t).resolve(...r); }
var Za = new Cs("21.1.0");
export { F as ActivatedRoute, ue as ActivatedRouteSnapshot, pt as ActivationEnd, ft as ActivationStart, St as BaseRouteReuseStrategy, ht as ChildActivationEnd, dt as ChildActivationStart, ge as ChildrenOutletContexts, gr as DefaultTitleStrategy, W as DefaultUrlSerializer, b as EventType, st as GuardsCheckEnd, ot as GuardsCheckStart, D as NavigationCancel, I as NavigationCancellationCode, N as NavigationEnd, te as NavigationError, $ as NavigationSkipped, we as NavigationSkippedCode, Q as NavigationStart, os as NoPreloading, gt as OutletContext, p as PRIMARY_OUTLET, is as PreloadAllModules, Ve as PreloadingStrategy, Y as ROUTER_CONFIGURATION, mn as ROUTER_INITIALIZER, ir as ROUTER_OUTLET_DATA, re as ROUTES, Ie as RedirectCommand, ct as ResolveEnd, at as ResolveStart, lt as RouteConfigLoadEnd, ut as RouteConfigLoadStart, Cr as RouteReuseStrategy, B as Router, U as RouterEvent, Mt as RouterLink, ns as RouterLinkActive, Mt as RouterLinkWithHref, vs as RouterModule, on as RouterOutlet, Nr as RouterPreloader, xe as RouterState, ke as RouterStateSnapshot, de as RoutesRecognized, Ce as Scroll, un as TitleStrategy, bt as UrlHandlingStrategy, X as UrlSegment, m as UrlSegmentGroup, pe as UrlSerializer, O as UrlTree, Za as VERSION, le as convertToParamMap, Kn as createUrlTreeFromSnapshot, $n as defaultUrlMatcher, Oo as destroyDetachedRouteHandle, tn as isActive, Wa as mapToCanActivate, Qa as mapToCanActivateChild, Ya as mapToCanDeactivate, Ga as mapToCanMatch, Ka as mapToResolve, as as provideRouter, cs as provideRoutes, $r as withComponentInputBinding, ds as withDebugTracing, jr as withDisabledInitialNavigation, Lr as withEnabledBlockingInitialNavigation, gs as withExperimentalAutoCleanupInjectors, ls as withExperimentalPlatformNavigation, fs as withHashLocation, us as withInMemoryScrolling, ps as withNavigationErrorHandler, kr as withPreloading, hs as withRouterConfig, zr as withViewTransitions, an as \u0275EmptyOutletComponent, Hr as \u0275ROUTER_PROVIDERS, Tt as \u0275afterNextNavigation, vr as \u0275loadChildren };
/*! Bundled license information:

@angular/platform-browser/fesm2022/platform-browser.mjs:
@angular/router/fesm2022/_router-chunk.mjs:
@angular/router/fesm2022/_router_module-chunk.mjs:
@angular/router/fesm2022/router.mjs:
  (**
   * @license Angular v21.1.0
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
