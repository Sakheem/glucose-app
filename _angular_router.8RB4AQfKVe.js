import "@nf-internal/chunk-FIE2NKNJ";
import { A as jt, B as Ar, C as F, D as tt, E as q, a as l, b as M, c as R, d as br, e as Ir, f as Er, g as te, h as j, i as x, j as E, k as p, l as Mr, m as Pt, n as Tr, o as T, p as Lt, q as W, r as Ue, s as _r, t as et, u as re, v as Pe, w as Le, x as ye, y as Dr, z as ne } from "@nf-internal/chunk-UMZMRDSE";
import { DOCUMENT as Wn, Location as nr } from "@angular/common";
import * as y from "@angular/core";
import { \u0275isPromise as Qn, \u0275RuntimeError as _, computed as Yn, InjectionToken as se, EventEmitter as rt, input as Kn, inject as v, ViewContainerRef as Zn, ChangeDetectorRef as Jn, reflectComponentType as Xn, runInInjectionContext as k, \u0275isInjectable as ei, \u0275isNgModule as Cs, isStandalone as bs, createEnvironmentInjector as ti, Compiler as ri, NgModuleFactory as ni, afterNextRender as ii, signal as Or, EnvironmentInjector as ir, DestroyRef as oi, untracked as ke, \u0275Console as ai, \u0275PendingTasksInternal as si, \u0275INTERNAL_APPLICATION_ERROR_HANDLER as ci, \u0275formatRuntimeError as ui } from "@angular/core";
import { \u0275getDOM as Da, DOCUMENT as Vn } from "@angular/common";
import { \u0275getDOM as fs } from "@angular/common";
import * as de from "@angular/core";
import { \u0275global as Ua, ApplicationRef as Pa, InjectionToken as La, Injector as ja, Optional as xa, \u0275Console as ka, \u0275RuntimeError as Ha, SecurityContext as Fa, \u0275allowSanitizationBypassAndThrow as qa, \u0275unwrapSafeValue as Ba, \u0275_sanitizeUrl as Va, \u0275_sanitizeHtml as Ga, \u0275bypassSanitizationTrustHtml as Wa, \u0275bypassSanitizationTrustStyle as Qa, \u0275bypassSanitizationTrustScript as Ya, \u0275bypassSanitizationTrustUrl as Ka, \u0275bypassSanitizationTrustResourceUrl as Za, makeEnvironmentProviders as Xa, \u0275withDomHydration as ts, \u0275withEventReplay as rs, \u0275withI18nSupport as ns, \u0275withIncrementalHydration as is, ENVIRONMENT_INITIALIZER as os, inject as as, \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION as ss, \u0275formatRuntimeError as cs, Version as us } from "@angular/core";
import { \u0275withHttpTransferCache as ds } from "@angular/common/http";
var Nr = (() => { class t {
    _doc;
    constructor(e) { this._doc = e; }
    getTitle() { return this._doc.title; }
    setTitle(e) { this._doc.title = e || ""; }
    static \u0275fac = function (r) { return new (r || t)(de.\u0275\u0275inject(Vn)); };
    static \u0275prov = de.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
var g = "primary", Qe = Symbol("RouteTitle"), zt = class {
    params;
    constructor(n) { this.params = n || {}; }
    has(n) { return Object.prototype.hasOwnProperty.call(this.params, n); }
    get(n) { if (this.has(n)) {
        let e = this.params[n];
        return Array.isArray(e) ? e[0] : e;
    } return null; }
    getAll(n) { if (this.has(n)) {
        let e = this.params[n];
        return Array.isArray(e) ? e : [e];
    } return []; }
    get keys() { return Object.keys(this.params); }
};
function fe(t) { return new zt(t); }
function xt(t, n, e) { for (let r = 0; r < t.length; r++) {
    let i = t[r], o = n[r];
    if (i[0] === ":")
        e[i.substring(1)] = o;
    else if (i !== o.path)
        return !1;
} return !0; }
function $r(t, n, e) { let r = e.path.split("/"), i = r.indexOf("**"); if (i === -1) {
    if (r.length > t.length || e.pathMatch === "full" && (n.hasChildren() || r.length < t.length))
        return null;
    let c = {}, u = t.slice(0, r.length);
    return xt(r, u, c) ? { consumed: u, posParams: c } : null;
} if (i !== r.lastIndexOf("**"))
    return null; let o = r.slice(0, i), s = r.slice(i + 1); if (o.length + s.length > t.length || e.pathMatch === "full" && n.hasChildren() && e.path !== "**")
    return null; let a = {}; return !xt(o, t.slice(0, o.length), a) || !xt(s, t.slice(t.length - s.length), a) ? null : { consumed: t, posParams: a }; }
function ct(t) { return new Promise((n, e) => { t.pipe(ne()).subscribe({ next: r => n(r), error: r => e(r) }); }); }
function li(t, n) { if (t.length !== n.length)
    return !1; for (let e = 0; e < t.length; ++e)
    if (!Q(t[e], n[e]))
        return !1; return !0; }
function Q(t, n) { let e = t ? Ft(t) : void 0, r = n ? Ft(n) : void 0; if (!e || !r || e.length != r.length)
    return !1; let i; for (let o = 0; o < e.length; o++)
    if (i = e[o], !Hr(t[i], n[i]))
        return !1; return !0; }
function Ft(t) { return [...Object.keys(t), ...Object.getOwnPropertySymbols(t)]; }
function Hr(t, n) { if (Array.isArray(t) && Array.isArray(n)) {
    if (t.length !== n.length)
        return !1;
    let e = [...t].sort(), r = [...n].sort();
    return e.every((i, o) => r[o] === i);
}
else
    return t === n; }
function di(t) { return t.length > 0 ? t[t.length - 1] : null; }
function ge(t) { return Pt(t) ? t : Qn(t) ? E(Promise.resolve(t)) : p(t); }
function zr(t) { return Pt(t) ? ct(t) : Promise.resolve(t); }
var hi = { exact: qr, subset: Br }, Fr = { exact: fi, subset: pi, ignored: () => !0 }, or = { paths: "exact", fragment: "ignored", matrixParams: "ignored", queryParams: "exact" }, ze = { paths: "subset", fragment: "ignored", matrixParams: "ignored", queryParams: "subset" };
function ar(t, n, e) { let r = t instanceof A ? t : n.parseUrl(t); return Yn(() => qt(n.lastSuccessfulNavigation()?.finalUrl ?? new A, r, l(l({}, ze), e))); }
function qt(t, n, e) { return hi[e.paths](t.root, n.root, e.matrixParams) && Fr[e.queryParams](t.queryParams, n.queryParams) && !(e.fragment === "exact" && t.fragment !== n.fragment); }
function fi(t, n) { return Q(t, n); }
function qr(t, n, e) { if (!he(t.segments, n.segments) || !ot(t.segments, n.segments, e) || t.numberOfChildren !== n.numberOfChildren)
    return !1; for (let r in n.children)
    if (!t.children[r] || !qr(t.children[r], n.children[r], e))
        return !1; return !0; }
function pi(t, n) { return Object.keys(n).length <= Object.keys(t).length && Object.keys(n).every(e => Hr(t[e], n[e])); }
function Br(t, n, e) { return Vr(t, n, n.segments, e); }
function Vr(t, n, e, r) { if (t.segments.length > e.length) {
    let i = t.segments.slice(0, e.length);
    return !(!he(i, e) || n.hasChildren() || !ot(i, e, r));
}
else if (t.segments.length === e.length) {
    if (!he(t.segments, e) || !ot(t.segments, e, r))
        return !1;
    for (let i in n.children)
        if (!t.children[i] || !Br(t.children[i], n.children[i], r))
            return !1;
    return !0;
}
else {
    let i = e.slice(0, t.segments.length), o = e.slice(t.segments.length);
    return !he(t.segments, i) || !ot(t.segments, i, r) || !t.children[g] ? !1 : Vr(t.children[g], n, o, r);
} }
function ot(t, n, e) { return n.every((r, i) => Fr[e](t[i].parameters, r.parameters)); }
var A = class {
    root;
    queryParams;
    fragment;
    _queryParamMap;
    constructor(n = new m([], {}), e = {}, r = null) { this.root = n, this.queryParams = e, this.fragment = r; }
    get queryParamMap() { return this._queryParamMap ??= fe(this.queryParams), this._queryParamMap; }
    toString() { return mi.serialize(this); }
}, m = class {
    segments;
    children;
    parent = null;
    constructor(n, e) { this.segments = n, this.children = e, Object.values(e).forEach(r => r.parent = this); }
    hasChildren() { return this.numberOfChildren > 0; }
    get numberOfChildren() { return Object.keys(this.children).length; }
    toString() { return at(this); }
}, ie = class {
    path;
    parameters;
    _parameterMap;
    constructor(n, e) { this.path = n, this.parameters = e; }
    get parameterMap() { return this._parameterMap ??= fe(this.parameters), this._parameterMap; }
    toString() { return Wr(this); }
};
function gi(t, n) { return he(t, n) && t.every((e, r) => Q(e.parameters, n[r].parameters)); }
function he(t, n) { return t.length !== n.length ? !1 : t.every((e, r) => e.path === n[r].path); }
function vi(t, n) { let e = []; return Object.entries(t.children).forEach(([r, i]) => { r === g && (e = e.concat(n(i, r))); }), Object.entries(t.children).forEach(([r, i]) => { r !== g && (e = e.concat(n(i, r))); }), e; }
var ce = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: () => new J, providedIn: "root" });
} return t; })(), J = class {
    parse(n) { let e = new Vt(n); return new A(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment()); }
    serialize(n) { let e = `/${je(n.root, !0)}`, r = Si(n.queryParams), i = typeof n.fragment == "string" ? `#${yi(n.fragment)}` : ""; return `${e}${r}${i}`; }
}, mi = new J;
function at(t) { return t.segments.map(n => Wr(n)).join("/"); }
function je(t, n) { if (!t.hasChildren())
    return at(t); if (n) {
    let e = t.children[g] ? je(t.children[g], !1) : "", r = [];
    return Object.entries(t.children).forEach(([i, o]) => { i !== g && r.push(`${i}:${je(o, !1)}`); }), r.length > 0 ? `${e}(${r.join("//")})` : e;
}
else {
    let e = vi(t, (r, i) => i === g ? [je(t.children[g], !1)] : [`${i}:${je(r, !1)}`]);
    return Object.keys(t.children).length === 1 && t.children[g] != null ? `${at(t)}/${e[0]}` : `${at(t)}/(${e.join("//")})`;
} }
function Gr(t) { return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ","); }
function nt(t) { return Gr(t).replace(/%3B/gi, ";"); }
function yi(t) { return encodeURI(t); }
function Bt(t) { return Gr(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&"); }
function st(t) { return decodeURIComponent(t); }
function Ur(t) { return st(t.replace(/\+/g, "%20")); }
function Wr(t) { return `${Bt(t.path)}${Ri(t.parameters)}`; }
function Ri(t) { return Object.entries(t).map(([n, e]) => `;${Bt(n)}=${Bt(e)}`).join(""); }
function Si(t) { let n = Object.entries(t).map(([e, r]) => Array.isArray(r) ? r.map(i => `${nt(e)}=${nt(i)}`).join("&") : `${nt(e)}=${nt(r)}`).filter(e => e); return n.length ? `?${n.join("&")}` : ""; }
var wi = /^[^\/()?;#]+/;
function kt(t) { let n = t.match(wi); return n ? n[0] : ""; }
var Ci = /^[^\/()?;=#]+/;
function bi(t) { let n = t.match(Ci); return n ? n[0] : ""; }
var Ii = /^[^=?&#]+/;
function Ei(t) { let n = t.match(Ii); return n ? n[0] : ""; }
var Mi = /^[^&#]+/;
function Ti(t) { let n = t.match(Mi); return n ? n[0] : ""; }
var Vt = class {
    url;
    remaining;
    constructor(n) { this.url = n, this.remaining = n; }
    parseRootSegment() { for (; this.consumeOptional("/");)
        ; return this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#") ? new m([], {}) : new m([], this.parseChildren()); }
    parseQueryParams() { let n = {}; if (this.consumeOptional("?"))
        do
            this.parseQueryParam(n);
        while (this.consumeOptional("&")); return n; }
    parseFragment() { return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null; }
    parseChildren(n = 0) { if (n > 50)
        throw new _(4010, !1); if (this.remaining === "")
        return {}; this.consumeOptional("/"); let e = []; for (this.peekStartsWith("(") || e.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");)
        this.capture("/"), e.push(this.parseSegment()); let r = {}; this.peekStartsWith("/(") && (this.capture("/"), r = this.parseParens(!0, n)); let i = {}; return this.peekStartsWith("(") && (i = this.parseParens(!1, n)), (e.length > 0 || Object.keys(r).length > 0) && (i[g] = new m(e, r)), i; }
    parseSegment() { let n = kt(this.remaining); if (n === "" && this.peekStartsWith(";"))
        throw new _(4009, !1); return this.capture(n), new ie(st(n), this.parseMatrixParams()); }
    parseMatrixParams() { let n = {}; for (; this.consumeOptional(";");)
        this.parseParam(n); return n; }
    parseParam(n) { let e = bi(this.remaining); if (!e)
        return; this.capture(e); let r = ""; if (this.consumeOptional("=")) {
        let i = kt(this.remaining);
        i && (r = i, this.capture(r));
    } n[st(e)] = st(r); }
    parseQueryParam(n) { let e = Ei(this.remaining); if (!e)
        return; this.capture(e); let r = ""; if (this.consumeOptional("=")) {
        let s = Ti(this.remaining);
        s && (r = s, this.capture(r));
    } let i = Ur(e), o = Ur(r); if (n.hasOwnProperty(i)) {
        let s = n[i];
        Array.isArray(s) || (s = [s], n[i] = s), s.push(o);
    }
    else
        n[i] = o; }
    parseParens(n, e) { let r = {}; for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
        let i = kt(this.remaining), o = this.remaining[i.length];
        if (o !== "/" && o !== ")" && o !== ";")
            throw new _(4010, !1);
        let s;
        i.indexOf(":") > -1 ? (s = i.slice(0, i.indexOf(":")), this.capture(s), this.capture(":")) : n && (s = g);
        let a = this.parseChildren(e + 1);
        r[s ?? g] = Object.keys(a).length === 1 && a[g] ? a[g] : new m([], a), this.consumeOptional("//");
    } return r; }
    peekStartsWith(n) { return this.remaining.startsWith(n); }
    consumeOptional(n) { return this.peekStartsWith(n) ? (this.remaining = this.remaining.substring(n.length), !0) : !1; }
    capture(n) { if (!this.consumeOptional(n))
        throw new _(4011, !1); }
};
function Qr(t) { return t.segments.length > 0 ? new m([], { [g]: t }) : t; }
function Yr(t) { let n = {}; for (let [r, i] of Object.entries(t.children)) {
    let o = Yr(i);
    if (r === g && o.segments.length === 0 && o.hasChildren())
        for (let [s, a] of Object.entries(o.children))
            n[s] = a;
    else
        (o.segments.length > 0 || o.hasChildren()) && (n[r] = o);
} let e = new m(t.segments, n); return _i(e); }
function _i(t) { if (t.numberOfChildren === 1 && t.children[g]) {
    let n = t.children[g];
    return new m(t.segments.concat(n.segments), n.children);
} return t; }
function oe(t) { return t instanceof A; }
function Kr(t, n, e = null, r = null, i = new J) { let o = Zr(t); return Jr(o, n, e, r, i); }
function Zr(t) { let n; function e(o) { let s = {}; for (let c of o.children) {
    let u = e(c);
    s[c.outlet] = u;
} let a = new m(o.url, s); return o === t && (n = a), a; } let r = e(t.root), i = Qr(r); return n ?? i; }
function Jr(t, n, e, r, i) { let o = t; for (; o.parent;)
    o = o.parent; if (n.length === 0)
    return $t(o, o, o, e, r, i); let s = Di(n); if (s.toRoot())
    return $t(o, o, new m([], {}), e, r, i); let a = Ai(s, o, t), c = a.processChildren ? $e(a.segmentGroup, a.index, s.commands) : en(a.segmentGroup, a.index, s.commands); return $t(o, a.segmentGroup, c, e, r, i); }
function ut(t) { return typeof t == "object" && t != null && !t.outlets && !t.segmentPath; }
function Fe(t) { return typeof t == "object" && t != null && t.outlets; }
function Pr(t, n, e) { t ||= "\u0275"; let r = new A; return r.queryParams = { [t]: n }, e.parse(e.serialize(r)).queryParams[t]; }
function $t(t, n, e, r, i, o) { let s = {}; for (let [u, h] of Object.entries(r ?? {}))
    s[u] = Array.isArray(h) ? h.map(f => Pr(u, f, o)) : Pr(u, h, o); let a; t === n ? a = e : a = Xr(t, n, e); let c = Qr(Yr(a)); return new A(c, s, i); }
function Xr(t, n, e) { let r = {}; return Object.entries(t.children).forEach(([i, o]) => { o === n ? r[i] = e : r[i] = Xr(o, n, e); }), new m(t.segments, r); }
var lt = class {
    isAbsolute;
    numberOfDoubleDots;
    commands;
    constructor(n, e, r) { if (this.isAbsolute = n, this.numberOfDoubleDots = e, this.commands = r, n && r.length > 0 && ut(r[0]))
        throw new _(4003, !1); let i = r.find(Fe); if (i && i !== di(r))
        throw new _(4004, !1); }
    toRoot() { return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"; }
};
function Di(t) { if (typeof t[0] == "string" && t.length === 1 && t[0] === "/")
    return new lt(!0, 0, t); let n = 0, e = !1, r = t.reduce((i, o, s) => { if (typeof o == "object" && o != null) {
    if (o.outlets) {
        let a = {};
        return Object.entries(o.outlets).forEach(([c, u]) => { a[c] = typeof u == "string" ? u.split("/") : u; }), [...i, { outlets: a }];
    }
    if (o.segmentPath)
        return [...i, o.segmentPath];
} return typeof o != "string" ? [...i, o] : s === 0 ? (o.split("/").forEach((a, c) => { c == 0 && a === "." || (c == 0 && a === "" ? e = !0 : a === ".." ? n++ : a != "" && i.push(a)); }), i) : [...i, o]; }, []); return new lt(e, n, r); }
var Se = class {
    segmentGroup;
    processChildren;
    index;
    constructor(n, e, r) { this.segmentGroup = n, this.processChildren = e, this.index = r; }
};
function Ai(t, n, e) { if (t.isAbsolute)
    return new Se(n, !0, 0); if (!e)
    return new Se(n, !1, NaN); if (e.parent === null)
    return new Se(e, !0, 0); let r = ut(t.commands[0]) ? 0 : 1, i = e.segments.length - 1 + r; return Ni(e, i, t.numberOfDoubleDots); }
function Ni(t, n, e) { let r = t, i = n, o = e; for (; o > i;) {
    if (o -= i, r = r.parent, !r)
        throw new _(4005, !1);
    i = r.segments.length;
} return new Se(r, !1, i - o); }
function Oi(t) { return Fe(t[0]) ? t[0].outlets : { [g]: t }; }
function en(t, n, e) { if (t ??= new m([], {}), t.segments.length === 0 && t.hasChildren())
    return $e(t, n, e); let r = Ui(t, n, e), i = e.slice(r.commandIndex); if (r.match && r.pathIndex < t.segments.length) {
    let o = new m(t.segments.slice(0, r.pathIndex), {});
    return o.children[g] = new m(t.segments.slice(r.pathIndex), t.children), $e(o, 0, i);
}
else
    return r.match && i.length === 0 ? new m(t.segments, {}) : r.match && !t.hasChildren() ? Gt(t, n, e) : r.match ? $e(t, 0, i) : Gt(t, n, e); }
function $e(t, n, e) { if (e.length === 0)
    return new m(t.segments, {}); {
    let r = Oi(e), i = {};
    if (Object.keys(r).some(o => o !== g) && t.children[g] && t.numberOfChildren === 1 && t.children[g].segments.length === 0) {
        let o = $e(t.children[g], n, e);
        return new m(t.segments, o.children);
    }
    return Object.entries(r).forEach(([o, s]) => { typeof s == "string" && (s = [s]), s !== null && (i[o] = en(t.children[o], n, s)); }), Object.entries(t.children).forEach(([o, s]) => { r[o] === void 0 && (i[o] = s); }), new m(t.segments, i);
} }
function Ui(t, n, e) { let r = 0, i = n, o = { match: !1, pathIndex: 0, commandIndex: 0 }; for (; i < t.segments.length;) {
    if (r >= e.length)
        return o;
    let s = t.segments[i], a = e[r];
    if (Fe(a))
        break;
    let c = `${a}`, u = r < e.length - 1 ? e[r + 1] : null;
    if (i > 0 && c === void 0)
        break;
    if (c && u && typeof u == "object" && u.outlets === void 0) {
        if (!jr(c, u, s))
            return o;
        r += 2;
    }
    else {
        if (!jr(c, {}, s))
            return o;
        r++;
    }
    i++;
} return { match: !0, pathIndex: i, commandIndex: r }; }
function Gt(t, n, e) { let r = t.segments.slice(0, n), i = 0; for (; i < e.length;) {
    let o = e[i];
    if (Fe(o)) {
        let c = Pi(o.outlets);
        return new m(r, c);
    }
    if (i === 0 && ut(e[0])) {
        let c = t.segments[n];
        r.push(new ie(c.path, Lr(e[0]))), i++;
        continue;
    }
    let s = Fe(o) ? o.outlets[g] : `${o}`, a = i < e.length - 1 ? e[i + 1] : null;
    s && a && ut(a) ? (r.push(new ie(s, Lr(a))), i += 2) : (r.push(new ie(s, {})), i++);
} return new m(r, {}); }
function Pi(t) { let n = {}; return Object.entries(t).forEach(([e, r]) => { typeof r == "string" && (r = [r]), r !== null && (n[e] = Gt(new m([], {}), 0, r)); }), n; }
function Lr(t) { let n = {}; return Object.entries(t).forEach(([e, r]) => n[e] = `${r}`), n; }
function jr(t, n, e) { return t == e.path && Q(n, e.parameters); }
var we = "imperative", C = (function (t) { return t[t.NavigationStart = 0] = "NavigationStart", t[t.NavigationEnd = 1] = "NavigationEnd", t[t.NavigationCancel = 2] = "NavigationCancel", t[t.NavigationError = 3] = "NavigationError", t[t.RoutesRecognized = 4] = "RoutesRecognized", t[t.ResolveStart = 5] = "ResolveStart", t[t.ResolveEnd = 6] = "ResolveEnd", t[t.GuardsCheckStart = 7] = "GuardsCheckStart", t[t.GuardsCheckEnd = 8] = "GuardsCheckEnd", t[t.RouteConfigLoadStart = 9] = "RouteConfigLoadStart", t[t.RouteConfigLoadEnd = 10] = "RouteConfigLoadEnd", t[t.ChildActivationStart = 11] = "ChildActivationStart", t[t.ChildActivationEnd = 12] = "ChildActivationEnd", t[t.ActivationStart = 13] = "ActivationStart", t[t.ActivationEnd = 14] = "ActivationEnd", t[t.Scroll = 15] = "Scroll", t[t.NavigationSkipped = 16] = "NavigationSkipped", t; })(C || {}), L = class {
    id;
    url;
    constructor(n, e) { this.id = n, this.url = e; }
}, X = class extends L {
    type = C.NavigationStart;
    navigationTrigger;
    restoredState;
    constructor(n, e, r = "imperative", i = null) { super(n, e), this.navigationTrigger = r, this.restoredState = i; }
    toString() { return `NavigationStart(id: ${this.id}, url: '${this.url}')`; }
}, N = class extends L {
    urlAfterRedirects;
    type = C.NavigationEnd;
    constructor(n, e, r) { super(n, e), this.urlAfterRedirects = r; }
    toString() { return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`; }
}, b = (function (t) { return t[t.Redirect = 0] = "Redirect", t[t.SupersededByNewNavigation = 1] = "SupersededByNewNavigation", t[t.NoDataFromResolver = 2] = "NoDataFromResolver", t[t.GuardRejected = 3] = "GuardRejected", t[t.Aborted = 4] = "Aborted", t; })(b || {}), be = (function (t) { return t[t.IgnoredSameUrlNavigation = 0] = "IgnoredSameUrlNavigation", t[t.IgnoredByUrlHandlingStrategy = 1] = "IgnoredByUrlHandlingStrategy", t; })(be || {}), D = class extends L {
    reason;
    code;
    type = C.NavigationCancel;
    constructor(n, e, r, i) { super(n, e), this.reason = r, this.code = i; }
    toString() { return `NavigationCancel(id: ${this.id}, url: '${this.url}')`; }
};
function sr(t) { return t instanceof D && (t.code === b.Redirect || t.code === b.SupersededByNewNavigation); }
var V = class extends L {
    reason;
    code;
    type = C.NavigationSkipped;
    constructor(n, e, r, i) { super(n, e), this.reason = r, this.code = i; }
}, ae = class extends L {
    error;
    target;
    type = C.NavigationError;
    constructor(n, e, r, i) { super(n, e), this.error = r, this.target = i; }
    toString() { return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`; }
}, qe = class extends L {
    urlAfterRedirects;
    state;
    type = C.RoutesRecognized;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, dt = class extends L {
    urlAfterRedirects;
    state;
    type = C.GuardsCheckStart;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, ht = class extends L {
    urlAfterRedirects;
    state;
    shouldActivate;
    type = C.GuardsCheckEnd;
    constructor(n, e, r, i, o) { super(n, e), this.urlAfterRedirects = r, this.state = i, this.shouldActivate = o; }
    toString() { return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`; }
}, ft = class extends L {
    urlAfterRedirects;
    state;
    type = C.ResolveStart;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, pt = class extends L {
    urlAfterRedirects;
    state;
    type = C.ResolveEnd;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, gt = class {
    route;
    type = C.RouteConfigLoadStart;
    constructor(n) { this.route = n; }
    toString() { return `RouteConfigLoadStart(path: ${this.route.path})`; }
}, vt = class {
    route;
    type = C.RouteConfigLoadEnd;
    constructor(n) { this.route = n; }
    toString() { return `RouteConfigLoadEnd(path: ${this.route.path})`; }
}, mt = class {
    snapshot;
    type = C.ChildActivationStart;
    constructor(n) { this.snapshot = n; }
    toString() { return `ChildActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, yt = class {
    snapshot;
    type = C.ChildActivationEnd;
    constructor(n) { this.snapshot = n; }
    toString() { return `ChildActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, Rt = class {
    snapshot;
    type = C.ActivationStart;
    constructor(n) { this.snapshot = n; }
    toString() { return `ActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, St = class {
    snapshot;
    type = C.ActivationEnd;
    constructor(n) { this.snapshot = n; }
    toString() { return `ActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, Ie = class {
    routerEvent;
    position;
    anchor;
    scrollBehavior;
    type = C.Scroll;
    constructor(n, e, r, i) { this.routerEvent = n, this.position = e, this.anchor = r, this.scrollBehavior = i; }
    toString() { let n = this.position ? `${this.position[0]}, ${this.position[1]}` : null; return `Scroll(anchor: '${this.anchor}', position: '${n}')`; }
}, pe = class {
}, Ee = class {
}, Me = class {
    url;
    navigationBehaviorOptions;
    constructor(n, e) { this.url = n, this.navigationBehaviorOptions = e; }
};
function Li(t) { return !(t instanceof pe) && !(t instanceof Me) && !(t instanceof Ee); }
var wt = class {
    rootInjector;
    outlet = null;
    route = null;
    children;
    attachRef = null;
    get injector() { return this.route?.snapshot._environmentInjector ?? this.rootInjector; }
    constructor(n) { this.rootInjector = n, this.children = new ve(this.rootInjector); }
}, ve = (() => { class t {
    rootInjector;
    contexts = new Map;
    constructor(e) { this.rootInjector = e; }
    onChildOutletCreated(e, r) { let i = this.getOrCreateContext(e); i.outlet = r, this.contexts.set(e, i); }
    onChildOutletDestroyed(e) { let r = this.getContext(e); r && (r.outlet = null, r.attachRef = null); }
    onOutletDeactivated() { let e = this.contexts; return this.contexts = new Map, e; }
    onOutletReAttached(e) { this.contexts = e; }
    getOrCreateContext(e) { let r = this.getContext(e); return r || (r = new wt(this.rootInjector), this.contexts.set(e, r)), r; }
    getContext(e) { return this.contexts.get(e) || null; }
    static \u0275fac = function (r) { return new (r || t)(y.\u0275\u0275inject(y.EnvironmentInjector)); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), Ct = class {
    _root;
    constructor(n) { this._root = n; }
    get root() { return this._root.value; }
    parent(n) { let e = this.pathFromRoot(n); return e.length > 1 ? e[e.length - 2] : null; }
    children(n) { let e = Wt(n, this._root); return e ? e.children.map(r => r.value) : []; }
    firstChild(n) { let e = Wt(n, this._root); return e && e.children.length > 0 ? e.children[0].value : null; }
    siblings(n) { let e = Qt(n, this._root); return e.length < 2 ? [] : e[e.length - 2].children.map(i => i.value).filter(i => i !== n); }
    pathFromRoot(n) { return Qt(n, this._root).map(e => e.value); }
};
function Wt(t, n) { if (t === n.value)
    return n; for (let e of n.children) {
    let r = Wt(t, e);
    if (r)
        return r;
} return null; }
function Qt(t, n) { if (t === n.value)
    return [n]; for (let e of n.children) {
    let r = Qt(t, e);
    if (r.length)
        return r.unshift(n), r;
} return []; }
var P = class {
    value;
    children;
    constructor(n, e) { this.value = n, this.children = e; }
    toString() { return `TreeNode(${this.value})`; }
};
function Re(t) { let n = {}; return t && t.children.forEach(e => n[e.value.outlet] = e), n; }
var Be = class extends Ct {
    snapshot;
    constructor(n, e) { super(n), this.snapshot = e, ur(this, n); }
    toString() { return this.snapshot.toString(); }
};
function tn(t, n) { let e = ji(t, n), r = new j([new ie("", {})]), i = new j({}), o = new j({}), s = new j({}), a = new j(""), c = new Y(r, i, s, a, o, g, t, e.root); return c.snapshot = e.root, new Be(new P(c, []), e); }
function ji(t, n) { let e = {}, r = {}, i = {}, s = new Te([], e, i, "", r, g, t, null, {}, n); return new Ve("", new P(s, [])); }
var Y = class {
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
    constructor(n, e, r, i, o, s, a, c) { this.urlSubject = n, this.paramsSubject = e, this.queryParamsSubject = r, this.fragmentSubject = i, this.dataSubject = o, this.outlet = s, this.component = a, this._futureSnapshot = c, this.title = this.dataSubject?.pipe(T(u => u[Qe])) ?? p(void 0), this.url = n, this.params = e, this.queryParams = r, this.fragment = i, this.data = o; }
    get routeConfig() { return this._futureSnapshot.routeConfig; }
    get root() { return this._routerState.root; }
    get parent() { return this._routerState.parent(this); }
    get firstChild() { return this._routerState.firstChild(this); }
    get children() { return this._routerState.children(this); }
    get pathFromRoot() { return this._routerState.pathFromRoot(this); }
    get paramMap() { return this._paramMap ??= this.params.pipe(T(n => fe(n))), this._paramMap; }
    get queryParamMap() { return this._queryParamMap ??= this.queryParams.pipe(T(n => fe(n))), this._queryParamMap; }
    toString() { return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`; }
};
function cr(t, n, e = "emptyOnly") { let r, { routeConfig: i } = t; return n !== null && (e === "always" || i?.path === "" || !n.component && !n.routeConfig?.loadComponent) ? r = { params: l(l({}, n.params), t.params), data: l(l({}, n.data), t.data), resolve: l(l(l(l({}, t.data), n.data), i?.data), t._resolvedData) } : r = { params: l({}, t.params), data: l({}, t.data), resolve: l(l({}, t.data), t._resolvedData ?? {}) }, i && nn(i) && (r.resolve[Qe] = i.title), r; }
var Te = class {
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
    get title() { return this.data?.[Qe]; }
    constructor(n, e, r, i, o, s, a, c, u, h) { this.url = n, this.params = e, this.queryParams = r, this.fragment = i, this.data = o, this.outlet = s, this.component = a, this.routeConfig = c, this._resolve = u, this._environmentInjector = h; }
    get root() { return this._routerState.root; }
    get parent() { return this._routerState.parent(this); }
    get firstChild() { return this._routerState.firstChild(this); }
    get children() { return this._routerState.children(this); }
    get pathFromRoot() { return this._routerState.pathFromRoot(this); }
    get paramMap() { return this._paramMap ??= fe(this.params), this._paramMap; }
    get queryParamMap() { return this._queryParamMap ??= fe(this.queryParams), this._queryParamMap; }
    toString() { let n = this.url.map(r => r.toString()).join("/"), e = this.routeConfig ? this.routeConfig.path : ""; return `Route(url:'${n}', path:'${e}')`; }
}, Ve = class extends Ct {
    url;
    constructor(n, e) { super(e), this.url = n, ur(this, e); }
    toString() { return rn(this._root); }
};
function ur(t, n) { n.value._routerState = t, n.children.forEach(e => ur(t, e)); }
function rn(t) { let n = t.children.length > 0 ? ` { ${t.children.map(rn).join(", ")} } ` : ""; return `${t.value}${n}`; }
function Ht(t) { if (t.snapshot) {
    let n = t.snapshot, e = t._futureSnapshot;
    t.snapshot = e, Q(n.queryParams, e.queryParams) || t.queryParamsSubject.next(e.queryParams), n.fragment !== e.fragment && t.fragmentSubject.next(e.fragment), Q(n.params, e.params) || t.paramsSubject.next(e.params), li(n.url, e.url) || t.urlSubject.next(e.url), Q(n.data, e.data) || t.dataSubject.next(e.data);
}
else
    t.snapshot = t._futureSnapshot, t.dataSubject.next(t._futureSnapshot.data); }
function Yt(t, n) { let e = Q(t.params, n.params) && gi(t.url, n.url), r = !t.parent != !n.parent; return e && !r && (!t.parent || Yt(t.parent, n.parent)); }
function nn(t) { return typeof t.title == "string" || t.title === null; }
var on = new se(""), lr = (() => { class t {
    activated = null;
    get activatedComponentRef() { return this.activated; }
    _activatedRoute = null;
    name = g;
    activateEvents = new rt;
    deactivateEvents = new rt;
    attachEvents = new rt;
    detachEvents = new rt;
    routerOutletData = Kn();
    parentContexts = v(ve);
    location = v(Zn);
    changeDetector = v(Jn);
    inputBinder = v(Ye, { optional: !0 });
    supportsBindingToComponentInputs = !0;
    ngOnChanges(e) { if (e.name) {
        let { firstChange: r, previousValue: i } = e.name;
        if (r)
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
        throw new _(4012, !1); return this.activated.instance; }
    get activatedRoute() { if (!this.activated)
        throw new _(4012, !1); return this._activatedRoute; }
    get activatedRouteData() { return this._activatedRoute ? this._activatedRoute.snapshot.data : {}; }
    detach() { if (!this.activated)
        throw new _(4012, !1); this.location.detach(); let e = this.activated; return this.activated = null, this._activatedRoute = null, this.detachEvents.emit(e.instance), e; }
    attach(e, r) { this.activated = e, this._activatedRoute = r, this.location.insert(e.hostView), this.inputBinder?.bindActivatedRouteToOutletComponent(this), this.attachEvents.emit(e.instance); }
    deactivate() { if (this.activated) {
        let e = this.component;
        this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(e);
    } }
    activateWith(e, r) { if (this.isActivated)
        throw new _(4013, !1); this._activatedRoute = e; let i = this.location, s = e.snapshot.component, a = this.parentContexts.getOrCreateContext(this.name).children, c = new Kt(e, a, i.injector, this.routerOutletData); this.activated = i.createComponent(s, { index: i.length, injector: c, environmentInjector: r }), this.changeDetector.markForCheck(), this.inputBinder?.bindActivatedRouteToOutletComponent(this), this.activateEvents.emit(this.activated.instance); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275dir = y.\u0275\u0275defineDirective({ type: t, selectors: [["router-outlet"]], inputs: { name: "name", routerOutletData: [1, "routerOutletData"] }, outputs: { activateEvents: "activate", deactivateEvents: "deactivate", attachEvents: "attach", detachEvents: "detach" }, exportAs: ["outlet"], features: [y.\u0275\u0275NgOnChangesFeature] });
} return t; })(), Kt = class {
    route;
    childContexts;
    parent;
    outletData;
    constructor(n, e, r, i) { this.route = n, this.childContexts = e, this.parent = r, this.outletData = i; }
    get(n, e) { return n === Y ? this.route : n === ve ? this.childContexts : n === on ? this.outletData : this.parent.get(n, e); }
}, Ye = new se(""), dr = (() => { class t {
    outletDataSubscriptions = new Map;
    bindActivatedRouteToOutletComponent(e) { this.unsubscribeFromRouteData(e), this.subscribeToRouteData(e); }
    unsubscribeFromRouteData(e) { this.outletDataSubscriptions.get(e)?.unsubscribe(), this.outletDataSubscriptions.delete(e); }
    subscribeToRouteData(e) { let { activatedRoute: r } = e, i = Lt([r.queryParams, r.params, r.data]).pipe(F(([o, s, a], c) => (a = l(l(l({}, o), s), a), c === 0 ? p(a) : Promise.resolve(a)))).subscribe(o => { if (!e.isActivated || !e.activatedComponentRef || e.activatedRoute !== r || r.component === null) {
        this.unsubscribeFromRouteData(e);
        return;
    } let s = Xn(r.component); if (!s) {
        this.unsubscribeFromRouteData(e);
        return;
    } for (let { templateName: a } of s.inputs)
        e.activatedComponentRef.setInput(a, o[a]); }); this.outletDataSubscriptions.set(e, i); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })(), hr = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275cmp = y.\u0275\u0275defineComponent({ type: t, selectors: [["ng-component"]], exportAs: ["emptyRouterOutlet"], decls: 1, vars: 0, template: function (r, i) { r & 1 && y.\u0275\u0275element(0, "router-outlet"); }, dependencies: [lr], encapsulation: 2 });
} return t; })();
function fr(t) { let n = t.children && t.children.map(fr), e = n ? M(l({}, t), { children: n }) : l({}, t); return !e.component && !e.loadComponent && (n || e.loadChildren) && e.outlet && e.outlet !== g && (e.component = hr), e; }
function xi(t, n, e) { let r = Ge(t, n._root, e ? e._root : void 0); return new Be(r, n); }
function Ge(t, n, e) { if (e && t.shouldReuseRoute(n.value, e.value.snapshot)) {
    let r = e.value;
    r._futureSnapshot = n.value;
    let i = ki(t, n, e);
    return new P(r, i);
}
else {
    if (t.shouldAttach(n.value)) {
        let o = t.retrieve(n.value);
        if (o !== null) {
            let s = o.route;
            return s.value._futureSnapshot = n.value, s.children = n.children.map(a => Ge(t, a)), s;
        }
    }
    let r = $i(n.value), i = n.children.map(o => Ge(t, o));
    return new P(r, i);
} }
function ki(t, n, e) { return n.children.map(r => { for (let i of e.children)
    if (t.shouldReuseRoute(r.value, i.value.snapshot))
        return Ge(t, r, i); return Ge(t, r); }); }
function $i(t) { return new Y(new j(t.url), new j(t.params), new j(t.queryParams), new j(t.fragment), new j(t.data), t.outlet, t.component, t); }
var _e = class {
    redirectTo;
    navigationBehaviorOptions;
    constructor(n, e) { this.redirectTo = n, this.navigationBehaviorOptions = e; }
}, an = "ngNavigationCancelingError";
function bt(t, n) { let { redirectTo: e, navigationBehaviorOptions: r } = oe(n) ? { redirectTo: n, navigationBehaviorOptions: void 0 } : n, i = sn(!1, b.Redirect); return i.url = e, i.navigationBehaviorOptions = r, i; }
function sn(t, n) { let e = new Error(`NavigationCancelingError: ${t || ""}`); return e[an] = !0, e.cancellationCode = n, e; }
function Hi(t) { return cn(t) && oe(t.url); }
function cn(t) { return !!t && t[an]; }
var Zt = class {
    routeReuseStrategy;
    futureState;
    currState;
    forwardEvent;
    inputBindingEnabled;
    constructor(n, e, r, i, o) { this.routeReuseStrategy = n, this.futureState = e, this.currState = r, this.forwardEvent = i, this.inputBindingEnabled = o; }
    activate(n) { let e = this.futureState._root, r = this.currState ? this.currState._root : null; this.deactivateChildRoutes(e, r, n), Ht(this.futureState.root), this.activateChildRoutes(e, r, n); }
    deactivateChildRoutes(n, e, r) { let i = Re(e); n.children.forEach(o => { let s = o.value.outlet; this.deactivateRoutes(o, i[s], r), delete i[s]; }), Object.values(i).forEach(o => { this.deactivateRouteAndItsChildren(o, r); }); }
    deactivateRoutes(n, e, r) { let i = n.value, o = e ? e.value : null; if (i === o)
        if (i.component) {
            let s = r.getContext(i.outlet);
            s && this.deactivateChildRoutes(n, e, s.children);
        }
        else
            this.deactivateChildRoutes(n, e, r);
    else
        o && this.deactivateRouteAndItsChildren(e, r); }
    deactivateRouteAndItsChildren(n, e) { n.value.component && this.routeReuseStrategy.shouldDetach(n.value.snapshot) ? this.detachAndStoreRouteSubtree(n, e) : this.deactivateRouteAndOutlet(n, e); }
    detachAndStoreRouteSubtree(n, e) { let r = e.getContext(n.value.outlet), i = r && n.value.component ? r.children : e, o = Re(n); for (let s of Object.values(o))
        this.deactivateRouteAndItsChildren(s, i); if (r && r.outlet) {
        let s = r.outlet.detach(), a = r.children.onOutletDeactivated();
        this.routeReuseStrategy.store(n.value.snapshot, { componentRef: s, route: n, contexts: a });
    } }
    deactivateRouteAndOutlet(n, e) { let r = e.getContext(n.value.outlet), i = r && n.value.component ? r.children : e, o = Re(n); for (let s of Object.values(o))
        this.deactivateRouteAndItsChildren(s, i); r && (r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated()), r.attachRef = null, r.route = null); }
    activateChildRoutes(n, e, r) { let i = Re(e); n.children.forEach(o => { this.activateRoutes(o, i[o.value.outlet], r), this.forwardEvent(new St(o.value.snapshot)); }), n.children.length && this.forwardEvent(new yt(n.value.snapshot)); }
    activateRoutes(n, e, r) { let i = n.value, o = e ? e.value : null; if (Ht(i), i === o)
        if (i.component) {
            let s = r.getOrCreateContext(i.outlet);
            this.activateChildRoutes(n, e, s.children);
        }
        else
            this.activateChildRoutes(n, e, r);
    else if (i.component) {
        let s = r.getOrCreateContext(i.outlet);
        if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
            let a = this.routeReuseStrategy.retrieve(i.snapshot);
            this.routeReuseStrategy.store(i.snapshot, null), s.children.onOutletReAttached(a.contexts), s.attachRef = a.componentRef, s.route = a.route.value, s.outlet && s.outlet.attach(a.componentRef, a.route.value), Ht(a.route.value), this.activateChildRoutes(n, null, s.children);
        }
        else
            s.attachRef = null, s.route = i, s.outlet && s.outlet.activateWith(i, s.injector), this.activateChildRoutes(n, null, s.children);
    }
    else
        this.activateChildRoutes(n, null, r); }
}, It = class {
    path;
    route;
    constructor(n) { this.path = n, this.route = this.path[this.path.length - 1]; }
}, Ce = class {
    component;
    route;
    constructor(n, e) { this.component = n, this.route = e; }
};
function zi(t, n, e) { let r = t._root, i = n ? n._root : null; return xe(r, i, e, [r.value]); }
function Fi(t) { let n = t.routeConfig ? t.routeConfig.canActivateChild : null; return !n || n.length === 0 ? null : { node: t, guards: n }; }
function Ae(t, n) { let e = Symbol(), r = n.get(t, e); return r === e ? typeof t == "function" && !ei(t) ? t : n.get(t) : r; }
function xe(t, n, e, r, i = { canDeactivateChecks: [], canActivateChecks: [] }) { let o = Re(n); return t.children.forEach(s => { qi(s, o[s.value.outlet], e, r.concat([s.value]), i), delete o[s.value.outlet]; }), Object.entries(o).forEach(([s, a]) => He(a, e.getContext(s), i)), i; }
function qi(t, n, e, r, i = { canDeactivateChecks: [], canActivateChecks: [] }) { let o = t.value, s = n ? n.value : null, a = e ? e.getContext(t.value.outlet) : null; if (s && o.routeConfig === s.routeConfig) {
    let c = Bi(s, o, o.routeConfig.runGuardsAndResolvers);
    c ? i.canActivateChecks.push(new It(r)) : (o.data = s.data, o._resolvedData = s._resolvedData), o.component ? xe(t, n, a ? a.children : null, r, i) : xe(t, n, e, r, i), c && a && a.outlet && a.outlet.isActivated && i.canDeactivateChecks.push(new Ce(a.outlet.component, s));
}
else
    s && He(n, a, i), i.canActivateChecks.push(new It(r)), o.component ? xe(t, null, a ? a.children : null, r, i) : xe(t, null, e, r, i); return i; }
function Bi(t, n, e) { if (typeof e == "function")
    return k(n._environmentInjector, () => e(t, n)); switch (e) {
    case "pathParamsChange": return !he(t.url, n.url);
    case "pathParamsOrQueryParamsChange": return !he(t.url, n.url) || !Q(t.queryParams, n.queryParams);
    case "always": return !0;
    case "paramsOrQueryParamsChange": return !Yt(t, n) || !Q(t.queryParams, n.queryParams);
    default: return !Yt(t, n);
} }
function He(t, n, e) { let r = Re(t), i = t.value; Object.entries(r).forEach(([o, s]) => { i.component ? n ? He(s, n.children.getContext(o), e) : He(s, null, e) : He(s, n, e); }), i.component ? n && n.outlet && n.outlet.isActivated ? e.canDeactivateChecks.push(new Ce(n.outlet.component, i)) : e.canDeactivateChecks.push(new Ce(null, i)) : e.canDeactivateChecks.push(new Ce(null, i)); }
function Ke(t) { return typeof t == "function"; }
function Vi(t) { return typeof t == "boolean"; }
function Gi(t) { return t && Ke(t.canLoad); }
function Wi(t) { return t && Ke(t.canActivate); }
function Qi(t) { return t && Ke(t.canActivateChild); }
function Yi(t) { return t && Ke(t.canDeactivate); }
function Ki(t) { return t && Ke(t.canMatch); }
function un(t) { return t instanceof Tr || t?.name === "EmptyError"; }
var it = Symbol("INITIAL_VALUE");
function De() { return F(t => Lt(t.map(n => n.pipe(ye(1), Ar(it)))).pipe(T(n => { for (let e of n)
    if (e !== !0) {
        if (e === it)
            return it;
        if (e === !1 || Zi(e))
            return e;
    } return !0; }), re(n => n !== it), ye(1))); }
function Zi(t) { return oe(t) || t instanceof _e; }
function ln(t) { return t.aborted ? p(void 0).pipe(ye(1)) : new Er(n => { let e = () => { n.next(), n.complete(); }; return t.addEventListener("abort", e), () => t.removeEventListener("abort", e); }); }
function dn(t) { return tt(ln(t)); }
function Ji(t) { return W(n => { let { targetSnapshot: e, currentSnapshot: r, guards: { canActivateChecks: i, canDeactivateChecks: o } } = n; return o.length === 0 && i.length === 0 ? p(M(l({}, n), { guardsResult: !0 })) : Xi(o, e, r).pipe(W(s => s && Vi(s) ? eo(e, i, t) : p(s)), T(s => M(l({}, n), { guardsResult: s }))); }); }
function Xi(t, n, e) { return E(t).pipe(W(r => oo(r.component, r.route, e, n)), ne(r => r !== !0, !0)); }
function eo(t, n, e) { return E(n).pipe(Le(r => _r(ro(r.route.parent, e), to(r.route, e), io(t, r.path), no(t, r.route))), ne(r => r !== !0, !0)); }
function to(t, n) { return t !== null && n && n(new Rt(t)), p(!0); }
function ro(t, n) { return t !== null && n && n(new mt(t)), p(!0); }
function no(t, n) { let e = n.routeConfig ? n.routeConfig.canActivate : null; if (!e || e.length === 0)
    return p(!0); let r = e.map(i => et(() => { let o = n._environmentInjector, s = Ae(i, o), a = Wi(s) ? s.canActivate(n, t) : k(o, () => s(n, t)); return ge(a).pipe(ne()); })); return p(r).pipe(De()); }
function io(t, n) { let e = n[n.length - 1], i = n.slice(0, n.length - 1).reverse().map(o => Fi(o)).filter(o => o !== null).map(o => et(() => { let s = o.guards.map(a => { let c = o.node._environmentInjector, u = Ae(a, c), h = Qi(u) ? u.canActivateChild(e, t) : k(c, () => u(e, t)); return ge(h).pipe(ne()); }); return p(s).pipe(De()); })); return p(i).pipe(De()); }
function oo(t, n, e, r) { let i = n && n.routeConfig ? n.routeConfig.canDeactivate : null; if (!i || i.length === 0)
    return p(!0); let o = i.map(s => { let a = n._environmentInjector, c = Ae(s, a), u = Yi(c) ? c.canDeactivate(t, n, e, r) : k(a, () => c(t, n, e, r)); return ge(u).pipe(ne()); }); return p(o).pipe(De()); }
function ao(t, n, e, r, i) { let o = n.canLoad; if (o === void 0 || o.length === 0)
    return p(!0); let s = o.map(a => { let c = Ae(a, t), u = Gi(c) ? c.canLoad(n, e) : k(t, () => c(n, e)), h = ge(u); return i ? h.pipe(dn(i)) : h; }); return p(s).pipe(De(), hn(r)); }
function hn(t) { return Ir(q(n => { if (typeof n != "boolean")
    throw bt(t, n); }), T(n => n === !0)); }
function so(t, n, e, r, i, o) { let s = n.canMatch; if (!s || s.length === 0)
    return p(!0); let a = s.map(c => { let u = Ae(c, t), h = Ki(u) ? u.canMatch(n, e, i) : k(t, () => u(n, e, i)); return ge(h).pipe(dn(o)); }); return p(a).pipe(De(), hn(r)); }
var Z = class t extends Error {
    segmentGroup;
    constructor(n) { super(), this.segmentGroup = n || null, Object.setPrototypeOf(this, t.prototype); }
}, We = class t extends Error {
    urlTree;
    constructor(n) { super(), this.urlTree = n, Object.setPrototypeOf(this, t.prototype); }
};
function co(t) { throw new _(4e3, !1); }
function uo(t) { throw sn(!1, b.GuardRejected); }
var Jt = class {
    urlSerializer;
    urlTree;
    constructor(n, e) { this.urlSerializer = n, this.urlTree = e; }
    lineralizeSegments(n, e) { return R(this, null, function* () { let r = [], i = e.root; for (;;) {
        if (r = r.concat(i.segments), i.numberOfChildren === 0)
            return r;
        if (i.numberOfChildren > 1 || !i.children[g])
            throw co(`${n.redirectTo}`);
        i = i.children[g];
    } }); }
    applyRedirectCommands(n, e, r, i, o) { return R(this, null, function* () { let s = yield lo(e, i, o); if (s instanceof A)
        throw new We(s); let a = this.applyRedirectCreateUrlTree(s, this.urlSerializer.parse(s), n, r); if (s[0] === "/")
        throw new We(a); return a; }); }
    applyRedirectCreateUrlTree(n, e, r, i) { let o = this.createSegmentGroup(n, e.root, r, i); return new A(o, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment); }
    createQueryParams(n, e) { let r = {}; return Object.entries(n).forEach(([i, o]) => { if (typeof o == "string" && o[0] === ":") {
        let a = o.substring(1);
        r[i] = e[a];
    }
    else
        r[i] = o; }), r; }
    createSegmentGroup(n, e, r, i) { let o = this.createSegments(n, e.segments, r, i), s = {}; return Object.entries(e.children).forEach(([a, c]) => { s[a] = this.createSegmentGroup(n, c, r, i); }), new m(o, s); }
    createSegments(n, e, r, i) { return e.map(o => o.path[0] === ":" ? this.findPosParam(n, o, i) : this.findOrReturn(o, r)); }
    findPosParam(n, e, r) { let i = r[e.path.substring(1)]; if (!i)
        throw new _(4001, !1); return i; }
    findOrReturn(n, e) { let r = 0; for (let i of e) {
        if (i.path === n.path)
            return e.splice(r), i;
        r++;
    } return n; }
};
function lo(t, n, e) { if (typeof t == "string")
    return Promise.resolve(t); let r = t; return ct(ge(k(e, () => r(n)))); }
function ho(t, n) { return t.providers && !t._injector && (t._injector = ti(t.providers, n, `Route: ${t.path}`)), t._injector ?? n; }
function B(t) { return t.outlet || g; }
function fo(t, n) { let e = t.filter(r => B(r) === n); return e.push(...t.filter(r => B(r) !== n)), e; }
var Xt = { matched: !1, consumedSegments: [], remainingSegments: [], parameters: {}, positionalParamSegments: {} };
function fn(t) { return { routeConfig: t.routeConfig, url: t.url, params: t.params, queryParams: t.queryParams, fragment: t.fragment, data: t.data, outlet: t.outlet, title: t.title, paramMap: t.paramMap, queryParamMap: t.queryParamMap }; }
function po(t, n, e, r, i, o, s) { let a = pn(t, n, e); if (!a.matched)
    return p(a); let c = fn(o(a)); return r = ho(n, r), so(r, n, e, i, c, s).pipe(T(u => u === !0 ? a : l({}, Xt))); }
function pn(t, n, e) { if (n.path === "")
    return n.pathMatch === "full" && (t.hasChildren() || e.length > 0) ? l({}, Xt) : { matched: !0, consumedSegments: [], remainingSegments: e, parameters: {}, positionalParamSegments: {} }; let i = (n.matcher || $r)(e, t, n); if (!i)
    return l({}, Xt); let o = {}; Object.entries(i.posParams ?? {}).forEach(([a, c]) => { o[a] = c.path; }); let s = i.consumed.length > 0 ? l(l({}, o), i.consumed[i.consumed.length - 1].parameters) : o; return { matched: !0, consumedSegments: i.consumed, remainingSegments: e.slice(i.consumed.length), parameters: s, positionalParamSegments: i.posParams ?? {} }; }
function xr(t, n, e, r, i) { return e.length > 0 && mo(t, e, r, i) ? { segmentGroup: new m(n, vo(r, new m(e, t.children))), slicedSegments: [] } : e.length === 0 && yo(t, e, r) ? { segmentGroup: new m(t.segments, go(t, e, r, t.children)), slicedSegments: e } : { segmentGroup: new m(t.segments, t.children), slicedSegments: e }; }
function go(t, n, e, r) { let i = {}; for (let o of e)
    if (Mt(t, n, o) && !r[B(o)]) {
        let s = new m([], {});
        i[B(o)] = s;
    } return l(l({}, r), i); }
function vo(t, n) { let e = {}; e[g] = n; for (let r of t)
    if (r.path === "" && B(r) !== g) {
        let i = new m([], {});
        e[B(r)] = i;
    } return e; }
function mo(t, n, e, r) { return e.some(i => !Mt(t, n, i) || !(B(i) !== g) ? !1 : !(r !== void 0 && B(i) === r)); }
function yo(t, n, e) { return e.some(r => Mt(t, n, r)); }
function Mt(t, n, e) { return (t.hasChildren() || n.length > 0) && e.pathMatch === "full" ? !1 : e.path === ""; }
function Ro(t, n, e) { return n.length === 0 && !t.children[e]; }
var er = class {
};
function So(t, n, e, r, i, o, s = "emptyOnly", a) { return R(this, null, function* () { return new tr(t, n, e, r, i, s, o, a).recognize(); }); }
var wo = 31, tr = class {
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
    constructor(n, e, r, i, o, s, a, c) { this.injector = n, this.configLoader = e, this.rootComponentType = r, this.config = i, this.urlTree = o, this.paramsInheritanceStrategy = s, this.urlSerializer = a, this.abortSignal = c, this.applyRedirects = new Jt(this.urlSerializer, this.urlTree); }
    noMatchError(n) { return new _(4002, `'${n.segmentGroup}'`); }
    recognize() { return R(this, null, function* () { let n = xr(this.urlTree.root, [], [], this.config).segmentGroup, { children: e, rootSnapshot: r } = yield this.match(n), i = new P(r, e), o = new Ve("", i), s = Kr(r, [], this.urlTree.queryParams, this.urlTree.fragment); return s.queryParams = this.urlTree.queryParams, o.url = this.urlSerializer.serialize(s), { state: o, tree: s }; }); }
    match(n) { return R(this, null, function* () { let e = new Te([], Object.freeze({}), Object.freeze(l({}, this.urlTree.queryParams)), this.urlTree.fragment, Object.freeze({}), g, this.rootComponentType, null, {}, this.injector); try {
        return { children: yield this.processSegmentGroup(this.injector, this.config, n, g, e), rootSnapshot: e };
    }
    catch (r) {
        if (r instanceof We)
            return this.urlTree = r.urlTree, this.match(r.urlTree.root);
        throw r instanceof Z ? this.noMatchError(r) : r;
    } }); }
    processSegmentGroup(n, e, r, i, o) { return R(this, null, function* () { if (r.segments.length === 0 && r.hasChildren())
        return this.processChildren(n, e, r, o); let s = yield this.processSegment(n, e, r, r.segments, i, !0, o); return s instanceof P ? [s] : []; }); }
    processChildren(n, e, r, i) { return R(this, null, function* () { let o = []; for (let c of Object.keys(r.children))
        c === "primary" ? o.unshift(c) : o.push(c); let s = []; for (let c of o) {
        let u = r.children[c], h = fo(e, c), f = yield this.processSegmentGroup(n, h, u, c, i);
        s.push(...f);
    } let a = gn(s); return Co(a), a; }); }
    processSegment(n, e, r, i, o, s, a) { return R(this, null, function* () { for (let c of e)
        try {
            return yield this.processSegmentAgainstRoute(c._injector ?? n, e, c, r, i, o, s, a);
        }
        catch (u) {
            if (u instanceof Z || un(u))
                continue;
            throw u;
        } if (Ro(r, i, o))
        return new er; throw new Z(r); }); }
    processSegmentAgainstRoute(n, e, r, i, o, s, a, c) { return R(this, null, function* () { if (B(r) !== s && (s === g || !Mt(i, o, r)))
        throw new Z(i); if (r.redirectTo === void 0)
        return this.matchSegmentAgainstRoute(n, i, r, o, s, c); if (this.allowRedirects && a)
        return this.expandSegmentAgainstRouteUsingRedirect(n, i, e, r, o, s, c); throw new Z(i); }); }
    expandSegmentAgainstRouteUsingRedirect(n, e, r, i, o, s, a) { return R(this, null, function* () { let { matched: c, parameters: u, consumedSegments: h, positionalParamSegments: f, remainingSegments: w } = pn(e, i, o); if (!c)
        throw new Z(e); typeof i.redirectTo == "string" && i.redirectTo[0] === "/" && (this.absoluteRedirectCount++, this.absoluteRedirectCount > wo && (this.allowRedirects = !1)); let K = this.createSnapshot(n, i, o, u, a); if (this.abortSignal.aborted)
        throw new Error(this.abortSignal.reason); let H = yield this.applyRedirects.applyRedirectCommands(h, i.redirectTo, f, fn(K), n), I = yield this.applyRedirects.lineralizeSegments(i, H); return this.processSegment(n, r, e, I.concat(w), s, !1, a); }); }
    createSnapshot(n, e, r, i, o) { let s = new Te(r, i, Object.freeze(l({}, this.urlTree.queryParams)), this.urlTree.fragment, Io(e), B(e), e.component ?? e._loadedComponent ?? null, e, Eo(e), n), a = cr(s, o, this.paramsInheritanceStrategy); return s.params = Object.freeze(a.params), s.data = Object.freeze(a.data), s; }
    matchSegmentAgainstRoute(n, e, r, i, o, s) { return R(this, null, function* () { if (this.abortSignal.aborted)
        throw new Error(this.abortSignal.reason); let a = me => this.createSnapshot(n, r, me.consumedSegments, me.parameters, s), c = yield ct(po(e, r, i, n, this.urlSerializer, a, this.abortSignal)); if (r.path === "**" && (e.children = {}), !c?.matched)
        throw new Z(e); n = r._injector ?? n; let { routes: u } = yield this.getChildConfig(n, r, i), h = r._loadedInjector ?? n, { parameters: f, consumedSegments: w, remainingSegments: K } = c, H = this.createSnapshot(n, r, w, f, s), { segmentGroup: I, slicedSegments: z } = xr(e, w, K, u, o); if (z.length === 0 && I.hasChildren()) {
        let me = yield this.processChildren(h, u, I, H);
        return new P(H, me);
    } if (u.length === 0 && z.length === 0)
        return new P(H, []); let Oe = B(r) === o, le = yield this.processSegment(h, u, I, z, Oe ? g : o, !0, H); return new P(H, le instanceof P ? [le] : []); }); }
    getChildConfig(n, e, r) { return R(this, null, function* () { if (e.children)
        return { routes: e.children, injector: n }; if (e.loadChildren) {
        if (e._loadedRoutes !== void 0) {
            let o = e._loadedNgModuleFactory;
            return o && !e._loadedInjector && (e._loadedInjector = o.create(n).injector), { routes: e._loadedRoutes, injector: e._loadedInjector };
        }
        if (this.abortSignal.aborted)
            throw new Error(this.abortSignal.reason);
        if (yield ct(ao(n, e, r, this.urlSerializer, this.abortSignal))) {
            let o = yield this.configLoader.loadChildren(n, e);
            return e._loadedRoutes = o.routes, e._loadedInjector = o.injector, e._loadedNgModuleFactory = o.factory, o;
        }
        throw uo(e);
    } return { routes: [], injector: n }; }); }
};
function Co(t) { t.sort((n, e) => n.value.outlet === g ? -1 : e.value.outlet === g ? 1 : n.value.outlet.localeCompare(e.value.outlet)); }
function bo(t) { let n = t.value.routeConfig; return n && n.path === ""; }
function gn(t) { let n = [], e = new Set; for (let r of t) {
    if (!bo(r)) {
        n.push(r);
        continue;
    }
    let i = n.find(o => r.value.routeConfig === o.value.routeConfig);
    i !== void 0 ? (i.children.push(...r.children), e.add(i)) : n.push(r);
} for (let r of e) {
    let i = gn(r.children);
    n.push(new P(r.value, i));
} return n.filter(r => !e.has(r)); }
function Io(t) { return t.data || {}; }
function Eo(t) { return t.resolve || {}; }
function Mo(t, n, e, r, i, o, s) { return W(a => R(null, null, function* () { let { state: c, tree: u } = yield So(t, n, e, r, a.extractedUrl, i, o, s); return M(l({}, a), { targetSnapshot: c, urlAfterRedirects: u }); })); }
function To(t) { return W(n => { let { targetSnapshot: e, guards: { canActivateChecks: r } } = n; if (!r.length)
    return p(n); let i = new Set(r.map(a => a.route)), o = new Set; for (let a of i)
    if (!o.has(a))
        for (let c of vn(a))
            o.add(c); let s = 0; return E(o).pipe(Le(a => i.has(a) ? _o(a, e, t) : (a.data = cr(a, a.parent, t).resolve, p(void 0))), q(() => s++), jt(1), W(a => s === o.size ? p(n) : x)); }); }
function vn(t) { let n = t.children.map(e => vn(e)).flat(); return [t, ...n]; }
function _o(t, n, e) { let r = t.routeConfig, i = t._resolve; return r?.title !== void 0 && !nn(r) && (i[Qe] = r.title), et(() => (t.data = cr(t, t.parent, e).resolve, Do(i, t, n).pipe(T(o => (t._resolvedData = o, t.data = l(l({}, t.data), o), null))))); }
function Do(t, n, e) { let r = Ft(t); if (r.length === 0)
    return p({}); let i = {}; return E(r).pipe(W(o => Ao(t[o], n, e).pipe(ne(), q(s => { if (s instanceof _e)
    throw bt(new J, s); i[o] = s; }))), jt(1), T(() => i), Pe(o => un(o) ? x : Mr(o))); }
function Ao(t, n, e) { let r = n._environmentInjector, i = Ae(t, r), o = i.resolve ? i.resolve(n, e) : k(r, () => i(n, e)); return ge(o); }
function kr(t) { return F(n => { let e = t(n); return e ? E(e).pipe(T(() => n)) : p(n); }); }
var pr = (() => { class t {
    buildTitle(e) { let r, i = e.root; for (; i !== void 0;)
        r = this.getResolvedTitleForRoute(i) ?? r, i = i.children.find(o => o.outlet === g); return r; }
    getResolvedTitleForRoute(e) { return e.data[Qe]; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: () => v(mn), providedIn: "root" });
} return t; })(), mn = (() => { class t extends pr {
    title;
    constructor(e) { super(), this.title = e; }
    updateTitle(e) { let r = this.buildTitle(e); r !== void 0 && this.title.setTitle(r); }
    static \u0275fac = function (r) { return new (r || t)(y.\u0275\u0275inject(Nr)); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), ee = new se("", { factory: () => ({}) }), ue = new se(""), Tt = (() => { class t {
    componentLoaders = new WeakMap;
    childrenLoaders = new WeakMap;
    onLoadStartListener;
    onLoadEndListener;
    compiler = v(ri);
    loadComponent(e, r) { return R(this, null, function* () { if (this.componentLoaders.get(r))
        return this.componentLoaders.get(r); if (r._loadedComponent)
        return Promise.resolve(r._loadedComponent); this.onLoadStartListener && this.onLoadStartListener(r); let i = R(this, null, function* () { try {
        let o = yield zr(k(e, () => r.loadComponent())), s = yield Sn(Rn(o));
        return this.onLoadEndListener && this.onLoadEndListener(r), r._loadedComponent = s, s;
    }
    finally {
        this.componentLoaders.delete(r);
    } }); return this.componentLoaders.set(r, i), i; }); }
    loadChildren(e, r) { if (this.childrenLoaders.get(r))
        return this.childrenLoaders.get(r); if (r._loadedRoutes)
        return Promise.resolve({ routes: r._loadedRoutes, injector: r._loadedInjector }); this.onLoadStartListener && this.onLoadStartListener(r); let i = R(this, null, function* () { try {
        let o = yield yn(r, this.compiler, e, this.onLoadEndListener);
        return r._loadedRoutes = o.routes, r._loadedInjector = o.injector, r._loadedNgModuleFactory = o.factory, o;
    }
    finally {
        this.childrenLoaders.delete(r);
    } }); return this.childrenLoaders.set(r, i), i; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function yn(t, n, e, r) { return R(this, null, function* () { let i = yield zr(k(e, () => t.loadChildren())), o = yield Sn(Rn(i)), s; o instanceof ni || Array.isArray(o) ? s = o : s = yield n.compileModuleAsync(o), r && r(t); let a, c, u = !1, h; return Array.isArray(s) ? (c = s, u = !0) : (a = s.create(e).injector, h = s, c = a.get(ue, [], { optional: !0, self: !0 }).flat()), { routes: c.map(fr), injector: a, factory: h }; }); }
function No(t) { return t && typeof t == "object" && "default" in t; }
function Rn(t) { return No(t) ? t.default : t; }
function Sn(t) { return R(this, null, function* () { return t; }); }
var _t = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: () => v(Oo), providedIn: "root" });
} return t; })(), Oo = (() => { class t {
    shouldProcessUrl(e) { return !0; }
    extract(e) { return e; }
    merge(e, r) { return e; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), gr = new se(""), vr = new se("");
function wn(t, n, e) { let r = t.get(vr), i = t.get(Wn); if (!i.startViewTransition || r.skipNextTransition)
    return r.skipNextTransition = !1, new Promise(u => setTimeout(u)); let o, s = new Promise(u => { o = u; }), a = i.startViewTransition(() => (o(), Uo(t))); a.updateCallbackDone.catch(u => { }), a.ready.catch(u => { }), a.finished.catch(u => { }); let { onViewTransitionCreated: c } = r; return c && k(t, () => c({ transition: a, from: n, to: e })), s; }
function Uo(t) { return new Promise(n => { ii({ read: () => setTimeout(n) }, { injector: t }); }); }
var Po = () => { }, Dt = new se(""), At = (() => { class t {
    currentNavigation = Or(null, { equal: () => !1 });
    currentTransition = null;
    lastSuccessfulNavigation = Or(null);
    events = new te;
    transitionAbortWithErrorSubject = new te;
    configLoader = v(Tt);
    environmentInjector = v(ir);
    destroyRef = v(oi);
    urlSerializer = v(ce);
    rootContexts = v(ve);
    location = v(nr);
    inputBindingEnabled = v(Ye, { optional: !0 }) !== null;
    titleStrategy = v(pr);
    options = v(ee, { optional: !0 }) || {};
    paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly";
    urlHandlingStrategy = v(_t);
    createViewTransition = v(gr, { optional: !0 });
    navigationErrorHandler = v(Dt, { optional: !0 });
    navigationId = 0;
    get hasRequestedNavigation() { return this.navigationId !== 0; }
    transitions;
    afterPreactivation = () => p(void 0);
    rootComponentType = null;
    destroyed = !1;
    constructor() { let e = i => this.events.next(new gt(i)), r = i => this.events.next(new vt(i)); this.configLoader.onLoadEndListener = r, this.configLoader.onLoadStartListener = e, this.destroyRef.onDestroy(() => { this.destroyed = !0; }); }
    complete() { this.transitions?.complete(); }
    handleNavigationRequest(e) { let r = ++this.navigationId; ke(() => { this.transitions?.next(M(l({}, e), { extractedUrl: this.urlHandlingStrategy.extract(e.rawUrl), targetSnapshot: null, targetRouterState: null, guards: { canActivateChecks: [], canDeactivateChecks: [] }, guardsResult: null, id: r, routesRecognizeHandler: {}, beforeActivateHandler: {} })); }); }
    setupNavigations(e) { return this.transitions = new j(null), this.transitions.pipe(re(r => r !== null), F(r => { let i = !1, o = new AbortController, s = () => !i && this.currentTransition?.id === r.id; return p(r).pipe(F(a => { if (this.navigationId > r.id)
        return this.cancelNavigationTransition(r, "", b.SupersededByNewNavigation), x; this.currentTransition = r; let c = this.lastSuccessfulNavigation(); this.currentNavigation.set({ id: a.id, initialUrl: a.rawUrl, extractedUrl: a.extractedUrl, targetBrowserUrl: typeof a.extras.browserUrl == "string" ? this.urlSerializer.parse(a.extras.browserUrl) : a.extras.browserUrl, trigger: a.source, extras: a.extras, previousNavigation: c ? M(l({}, c), { previousNavigation: null }) : null, abort: () => o.abort(), routesRecognizeHandler: a.routesRecognizeHandler, beforeActivateHandler: a.beforeActivateHandler }); let u = !e.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl(), h = a.extras.onSameUrlNavigation ?? e.onSameUrlNavigation; if (!u && h !== "reload")
        return this.events.next(new V(a.id, this.urlSerializer.serialize(a.rawUrl), "", be.IgnoredSameUrlNavigation)), a.resolve(!1), x; if (this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))
        return p(a).pipe(F(f => (this.events.next(new X(f.id, this.urlSerializer.serialize(f.extractedUrl), f.source, f.restoredState)), f.id !== this.navigationId ? x : Promise.resolve(f))), Mo(this.environmentInjector, this.configLoader, this.rootComponentType, e.config, this.urlSerializer, this.paramsInheritanceStrategy, o.signal), q(f => { r.targetSnapshot = f.targetSnapshot, r.urlAfterRedirects = f.urlAfterRedirects, this.currentNavigation.update(w => (w.finalUrl = f.urlAfterRedirects, w)), this.events.next(new Ee); }), F(f => E(r.routesRecognizeHandler.deferredHandle ?? p(void 0)).pipe(T(() => f))), q(() => { let f = new qe(a.id, this.urlSerializer.serialize(a.extractedUrl), this.urlSerializer.serialize(a.urlAfterRedirects), a.targetSnapshot); this.events.next(f); })); if (u && this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)) {
        let { id: f, extractedUrl: w, source: K, restoredState: H, extras: I } = a, z = new X(f, this.urlSerializer.serialize(w), K, H);
        this.events.next(z);
        let Oe = tn(this.rootComponentType, this.environmentInjector).snapshot;
        return this.currentTransition = r = M(l({}, a), { targetSnapshot: Oe, urlAfterRedirects: w, extras: M(l({}, I), { skipLocationChange: !1, replaceUrl: !1 }) }), this.currentNavigation.update(le => (le.finalUrl = w, le)), p(r);
    }
    else
        return this.events.next(new V(a.id, this.urlSerializer.serialize(a.extractedUrl), "", be.IgnoredByUrlHandlingStrategy)), a.resolve(!1), x; }), T(a => { let c = new dt(a.id, this.urlSerializer.serialize(a.extractedUrl), this.urlSerializer.serialize(a.urlAfterRedirects), a.targetSnapshot); return this.events.next(c), this.currentTransition = r = M(l({}, a), { guards: zi(a.targetSnapshot, a.currentSnapshot, this.rootContexts) }), r; }), Ji(a => this.events.next(a)), F(a => { if (r.guardsResult = a.guardsResult, a.guardsResult && typeof a.guardsResult != "boolean")
        throw bt(this.urlSerializer, a.guardsResult); let c = new ht(a.id, this.urlSerializer.serialize(a.extractedUrl), this.urlSerializer.serialize(a.urlAfterRedirects), a.targetSnapshot, !!a.guardsResult); if (this.events.next(c), !s())
        return x; if (!a.guardsResult)
        return this.cancelNavigationTransition(a, "", b.GuardRejected), x; if (a.guards.canActivateChecks.length === 0)
        return p(a); let u = new ft(a.id, this.urlSerializer.serialize(a.extractedUrl), this.urlSerializer.serialize(a.urlAfterRedirects), a.targetSnapshot); if (this.events.next(u), !s())
        return x; let h = !1; return p(a).pipe(To(this.paramsInheritanceStrategy), q({ next: () => { h = !0; let f = new pt(a.id, this.urlSerializer.serialize(a.extractedUrl), this.urlSerializer.serialize(a.urlAfterRedirects), a.targetSnapshot); this.events.next(f); }, complete: () => { h || this.cancelNavigationTransition(a, "", b.NoDataFromResolver); } })); }), kr(a => { let c = h => { let f = []; if (h.routeConfig?._loadedComponent)
        h.component = h.routeConfig?._loadedComponent;
    else if (h.routeConfig?.loadComponent) {
        let w = h._environmentInjector;
        f.push(this.configLoader.loadComponent(w, h.routeConfig).then(K => { h.component = K; }));
    } for (let w of h.children)
        f.push(...c(w)); return f; }, u = c(a.targetSnapshot.root); return u.length === 0 ? p(a) : E(Promise.all(u).then(() => a)); }), kr(() => this.afterPreactivation()), F(() => { let { currentSnapshot: a, targetSnapshot: c } = r, u = this.createViewTransition?.(this.environmentInjector, a.root, c.root); return u ? E(u).pipe(T(() => r)) : p(r); }), ye(1), F(a => { let c = xi(e.routeReuseStrategy, a.targetSnapshot, a.currentRouterState); this.currentTransition = r = a = M(l({}, a), { targetRouterState: c }), this.currentNavigation.update(h => (h.targetRouterState = c, h)), this.events.next(new pe); let u = r.beforeActivateHandler.deferredHandle; return u ? E(u.then(() => a)) : p(a); }), q(a => { new Zt(e.routeReuseStrategy, r.targetRouterState, r.currentRouterState, c => this.events.next(c), this.inputBindingEnabled).activate(this.rootContexts), s() && (i = !0, this.currentNavigation.update(c => (c.abort = Po, c)), this.lastSuccessfulNavigation.set(ke(this.currentNavigation)), this.events.next(new N(a.id, this.urlSerializer.serialize(a.extractedUrl), this.urlSerializer.serialize(a.urlAfterRedirects))), this.titleStrategy?.updateTitle(a.targetRouterState.snapshot), a.resolve(!0)); }), tt(ln(o.signal).pipe(re(() => !i && !r.targetRouterState), q(() => { this.cancelNavigationTransition(r, o.signal.reason + "", b.Aborted); }))), q({ complete: () => { i = !0; } }), tt(this.transitionAbortWithErrorSubject.pipe(q(a => { throw a; }))), Dr(() => { o.abort(), i || this.cancelNavigationTransition(r, "", b.SupersededByNewNavigation), this.currentTransition?.id === r.id && (this.currentNavigation.set(null), this.currentTransition = null); }), Pe(a => { if (i = !0, this.destroyed)
        return r.resolve(!1), x; if (cn(a))
        this.events.next(new D(r.id, this.urlSerializer.serialize(r.extractedUrl), a.message, a.cancellationCode)), Hi(a) ? this.events.next(new Me(a.url, a.navigationBehaviorOptions)) : r.resolve(!1);
    else {
        let c = new ae(r.id, this.urlSerializer.serialize(r.extractedUrl), a, r.targetSnapshot ?? void 0);
        try {
            let u = k(this.environmentInjector, () => this.navigationErrorHandler?.(c));
            if (u instanceof _e) {
                let { message: h, cancellationCode: f } = bt(this.urlSerializer, u);
                this.events.next(new D(r.id, this.urlSerializer.serialize(r.extractedUrl), h, f)), this.events.next(new Me(u.redirectTo, u.navigationBehaviorOptions));
            }
            else
                throw this.events.next(c), a;
        }
        catch (u) {
            this.options.resolveNavigationPromiseOnError ? r.resolve(!1) : r.reject(u);
        }
    } return x; })); })); }
    cancelNavigationTransition(e, r, i) { let o = new D(e.id, this.urlSerializer.serialize(e.extractedUrl), r, i); this.events.next(o), e.resolve(!1); }
    isUpdatingInternalState() { return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString(); }
    isUpdatedBrowserUrl() { let e = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))), r = ke(this.currentNavigation), i = r?.targetBrowserUrl ?? r?.extractedUrl; return e.toString() !== i?.toString() && !r?.extras.skipLocationChange; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function Lo(t) { return t !== we; }
var mr = new se("");
function Cn(t, n, e) { let r = new Set; n.snapshot.root && bn(n.snapshot.root, r); let i = t.retrieveStoredRouteHandles?.() || []; for (let o of i) {
    let s = o;
    if (s?.route?.value?.snapshot)
        for (let a of s.route.value.snapshot.pathFromRoot)
            a.routeConfig && r.add(a.routeConfig);
} rr(e, r, t, !1); }
function bn(t, n) { t.routeConfig && n.add(t.routeConfig); for (let e of t.children)
    bn(e, n); }
function rr(t, n, e, r) { for (let i of t) {
    let o = r || !!((i._injector || i._loadedInjector) && !n.has(i) && (e.shouldDestroyInjector?.(i) ?? !1));
    i.children && rr(i.children, n, e, o), i.loadChildren && i._loadedRoutes && rr(i._loadedRoutes, n, e, o), o && (i._injector && (i._injector.destroy(), i._injector = void 0), i._loadedInjector && (i._loadedInjector.destroy(), i._loadedInjector = void 0));
} }
function jo(t) { let n = t; n && n.componentRef && n.componentRef.destroy(); }
var In = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: () => v(xo), providedIn: "root" });
} return t; })(), Et = class {
    shouldDetach(n) { return !1; }
    store(n, e) { }
    shouldAttach(n) { return !1; }
    retrieve(n) { return null; }
    shouldReuseRoute(n, e) { return n.routeConfig === e.routeConfig; }
    shouldDestroyInjector(n) { return !0; }
}, xo = (() => { class t extends Et {
    static \u0275fac = (() => { let e; return function (i) { return (e || (e = y.\u0275\u0275getInheritedFactory(t)))(i || t); }; })();
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), Ne = (() => { class t {
    urlSerializer = v(ce);
    options = v(ee, { optional: !0 }) || {};
    canceledNavigationResolution = this.options.canceledNavigationResolution || "replace";
    location = v(nr);
    urlHandlingStrategy = v(_t);
    urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
    currentUrlTree = new A;
    getCurrentUrlTree() { return this.currentUrlTree; }
    rawUrlTree = this.currentUrlTree;
    getRawUrlTree() { return this.rawUrlTree; }
    createBrowserPath({ finalUrl: e, initialUrl: r, targetBrowserUrl: i }) { let o = e !== void 0 ? this.urlHandlingStrategy.merge(e, r) : r, s = i ?? o; return s instanceof A ? this.urlSerializer.serialize(s) : s; }
    routerUrlState(e) { return e?.targetBrowserUrl === void 0 || e?.finalUrl === void 0 ? {} : { \u0275routerUrl: this.urlSerializer.serialize(e.finalUrl) }; }
    commitTransition({ targetRouterState: e, finalUrl: r, initialUrl: i }) { r && e ? (this.currentUrlTree = r, this.rawUrlTree = this.urlHandlingStrategy.merge(r, i), this.routerState = e) : this.rawUrlTree = i; }
    routerState = tn(null, v(ir));
    getRouterState() { return this.routerState; }
    _stateMemento = this.createStateMemento();
    get stateMemento() { return this._stateMemento; }
    updateStateMemento() { this._stateMemento = this.createStateMemento(); }
    createStateMemento() { return { rawUrlTree: this.rawUrlTree, currentUrlTree: this.currentUrlTree, routerState: this.routerState }; }
    restoredState() { return this.location.getState(); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: () => v(ko), providedIn: "root" });
} return t; })(), ko = (() => { class t extends Ne {
    currentPageId = 0;
    lastSuccessfulId = -1;
    get browserPageId() { return this.canceledNavigationResolution !== "computed" ? this.currentPageId : this.restoredState()?.\u0275routerPageId ?? this.currentPageId; }
    registerNonRouterCurrentEntryChangeListener(e) { return this.location.subscribe(r => { r.type === "popstate" && setTimeout(() => { e(r.url, r.state, "popstate", { replaceUrl: !0 }); }); }); }
    handleRouterEvent(e, r) { e instanceof X ? this.updateStateMemento() : e instanceof V ? this.commitTransition(r) : e instanceof qe ? this.urlUpdateStrategy === "eager" && (r.extras.skipLocationChange || this.setBrowserUrl(this.createBrowserPath(r), r)) : e instanceof pe ? (this.commitTransition(r), this.urlUpdateStrategy === "deferred" && !r.extras.skipLocationChange && this.setBrowserUrl(this.createBrowserPath(r), r)) : e instanceof D && !sr(e) ? this.restoreHistory(r) : e instanceof ae ? this.restoreHistory(r, !0) : e instanceof N && (this.lastSuccessfulId = e.id, this.currentPageId = this.browserPageId); }
    setBrowserUrl(e, r) { let { extras: i, id: o } = r, { replaceUrl: s, state: a } = i; if (this.location.isCurrentPathEqualTo(e) || s) {
        let c = this.browserPageId, u = l(l({}, a), this.generateNgRouterState(o, c, r));
        this.location.replaceState(e, "", u);
    }
    else {
        let c = l(l({}, a), this.generateNgRouterState(o, this.browserPageId + 1, r));
        this.location.go(e, "", c);
    } }
    restoreHistory(e, r = !1) { if (this.canceledNavigationResolution === "computed") {
        let i = this.browserPageId, o = this.currentPageId - i;
        o !== 0 ? this.location.historyGo(o) : this.getCurrentUrlTree() === e.finalUrl && o === 0 && (this.resetInternalState(e), this.resetUrlToCurrentUrlTree());
    }
    else
        this.canceledNavigationResolution === "replace" && (r && this.resetInternalState(e), this.resetUrlToCurrentUrlTree()); }
    resetInternalState({ finalUrl: e }) { this.routerState = this.stateMemento.routerState, this.currentUrlTree = this.stateMemento.currentUrlTree, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, e ?? this.rawUrlTree); }
    resetUrlToCurrentUrlTree() { this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId)); }
    generateNgRouterState(e, r, i) { return this.canceledNavigationResolution === "computed" ? l({ navigationId: e, \u0275routerPageId: r }, this.routerUrlState(i)) : l({ navigationId: e }, this.routerUrlState(i)); }
    static \u0275fac = (() => { let e; return function (i) { return (e || (e = y.\u0275\u0275getInheritedFactory(t)))(i || t); }; })();
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function Nt(t, n) { t.events.pipe(re(e => e instanceof N || e instanceof D || e instanceof ae || e instanceof V), T(e => e instanceof N || e instanceof V ? 0 : (e instanceof D ? e.code === b.Redirect || e.code === b.SupersededByNewNavigation : !1) ? 2 : 1), re(e => e !== 2), ye(1)).subscribe(() => { n(); }); }
var G = (() => { class t {
    get currentUrlTree() { return this.stateManager.getCurrentUrlTree(); }
    get rawUrlTree() { return this.stateManager.getRawUrlTree(); }
    disposed = !1;
    nonRouterCurrentEntryChangeSubscription;
    console = v(ai);
    stateManager = v(Ne);
    options = v(ee, { optional: !0 }) || {};
    pendingTasks = v(si);
    urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
    navigationTransitions = v(At);
    urlSerializer = v(ce);
    location = v(nr);
    urlHandlingStrategy = v(_t);
    injector = v(ir);
    _events = new te;
    get events() { return this._events; }
    get routerState() { return this.stateManager.getRouterState(); }
    navigated = !1;
    routeReuseStrategy = v(In);
    injectorCleanup = v(mr, { optional: !0 });
    onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
    config = v(ue, { optional: !0 })?.flat() ?? [];
    componentInputBindingEnabled = !!v(Ye, { optional: !0 });
    currentNavigation = this.navigationTransitions.currentNavigation.asReadonly();
    constructor() { this.resetConfig(this.config), this.navigationTransitions.setupNavigations(this).subscribe({ error: e => { } }), this.subscribeToNavigationEvents(); }
    eventsSubscription = new br;
    subscribeToNavigationEvents() { let e = this.navigationTransitions.events.subscribe(r => { try {
        let i = this.navigationTransitions.currentTransition, o = ke(this.navigationTransitions.currentNavigation);
        if (i !== null && o !== null) {
            if (this.stateManager.handleRouterEvent(r, o), r instanceof D && r.code !== b.Redirect && r.code !== b.SupersededByNewNavigation)
                this.navigated = !0;
            else if (r instanceof N)
                this.navigated = !0, this.injectorCleanup?.(this.routeReuseStrategy, this.routerState, this.config);
            else if (r instanceof Me) {
                let s = r.navigationBehaviorOptions, a = this.urlHandlingStrategy.merge(r.url, i.currentRawUrl), c = l({ scroll: i.extras.scroll, browserUrl: i.extras.browserUrl, info: i.extras.info, skipLocationChange: i.extras.skipLocationChange, replaceUrl: i.extras.replaceUrl || this.urlUpdateStrategy === "eager" || Lo(i.source) }, s);
                this.scheduleNavigation(a, we, null, c, { resolve: i.resolve, reject: i.reject, promise: i.promise });
            }
        }
        Li(r) && this._events.next(r);
    }
    catch (i) {
        this.navigationTransitions.transitionAbortWithErrorSubject.next(i);
    } }); this.eventsSubscription.add(e); }
    resetRootComponentType(e) { this.routerState.root.component = e, this.navigationTransitions.rootComponentType = e; }
    initialNavigation() { this.setUpLocationChangeListener(), this.navigationTransitions.hasRequestedNavigation || this.navigateToSyncWithBrowser(this.location.path(!0), we, this.stateManager.restoredState(), { replaceUrl: !0 }); }
    setUpLocationChangeListener() { this.nonRouterCurrentEntryChangeSubscription ??= this.stateManager.registerNonRouterCurrentEntryChangeListener((e, r, i, o) => { this.navigateToSyncWithBrowser(e, i, r, o); }); }
    navigateToSyncWithBrowser(e, r, i, o) { let s = i?.navigationId ? i : null, a = i?.\u0275routerUrl ?? e; if (i?.\u0275routerUrl && (o = M(l({}, o), { browserUrl: e })), i) {
        let u = l({}, i);
        delete u.navigationId, delete u.\u0275routerPageId, delete u.\u0275routerUrl, Object.keys(u).length !== 0 && (o.state = u);
    } let c = this.parseUrl(a); this.scheduleNavigation(c, r, s, o).catch(u => { this.disposed || this.injector.get(ci)(u); }); }
    get url() { return this.serializeUrl(this.currentUrlTree); }
    getCurrentNavigation() { return ke(this.navigationTransitions.currentNavigation); }
    get lastSuccessfulNavigation() { return this.navigationTransitions.lastSuccessfulNavigation; }
    resetConfig(e) { this.config = e.map(fr), this.navigated = !1; }
    ngOnDestroy() { this.dispose(); }
    dispose() { this._events.unsubscribe(), this.navigationTransitions.complete(), this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(), this.nonRouterCurrentEntryChangeSubscription = void 0, this.disposed = !0, this.eventsSubscription.unsubscribe(); }
    createUrlTree(e, r = {}) { let { relativeTo: i, queryParams: o, fragment: s, queryParamsHandling: a, preserveFragment: c } = r, u = c ? this.currentUrlTree.fragment : s, h = null; switch (a ?? this.options.defaultQueryParamsHandling) {
        case "merge":
            h = l(l({}, this.currentUrlTree.queryParams), o);
            break;
        case "preserve":
            h = this.currentUrlTree.queryParams;
            break;
        default: h = o || null;
    } h !== null && (h = this.removeEmptyProps(h)); let f; try {
        let w = i ? i.snapshot : this.routerState.snapshot.root;
        f = Zr(w);
    }
    catch {
        (typeof e[0] != "string" || e[0][0] !== "/") && (e = []), f = this.currentUrlTree.root;
    } return Jr(f, e, h, u ?? null, this.urlSerializer); }
    navigateByUrl(e, r = { skipLocationChange: !1 }) { let i = oe(e) ? e : this.parseUrl(e), o = this.urlHandlingStrategy.merge(i, this.rawUrlTree); return this.scheduleNavigation(o, we, null, r); }
    navigate(e, r = { skipLocationChange: !1 }) { return $o(e), this.navigateByUrl(this.createUrlTree(e, r), r); }
    serializeUrl(e) { return this.urlSerializer.serialize(e); }
    parseUrl(e) { try {
        return this.urlSerializer.parse(e);
    }
    catch {
        return this.console.warn(ui(4018, !1)), this.urlSerializer.parse("/");
    } }
    isActive(e, r) { let i; if (r === !0 ? i = l({}, or) : r === !1 ? i = l({}, ze) : i = l(l({}, ze), r), oe(e))
        return qt(this.currentUrlTree, e, i); let o = this.parseUrl(e); return qt(this.currentUrlTree, o, i); }
    removeEmptyProps(e) { return Object.entries(e).reduce((r, [i, o]) => (o != null && (r[i] = o), r), {}); }
    scheduleNavigation(e, r, i, o, s) { if (this.disposed)
        return Promise.resolve(!1); let a, c, u; s ? (a = s.resolve, c = s.reject, u = s.promise) : u = new Promise((f, w) => { a = f, c = w; }); let h = this.pendingTasks.add(); return Nt(this, () => { queueMicrotask(() => this.pendingTasks.remove(h)); }), this.navigationTransitions.handleNavigationRequest({ source: r, restoredState: i, currentUrlTree: this.currentUrlTree, currentRawUrl: this.currentUrlTree, rawUrl: e, extras: o, resolve: a, reject: c, promise: u, currentSnapshot: this.routerState.snapshot, currentRouterState: this.routerState }), u.catch(Promise.reject.bind(Promise)); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = y.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function $o(t) { for (let n = 0; n < t.length; n++)
    if (t[n] == null)
        throw new _(4008, !1); }
import * as Mn from "@angular/common";
import { ViewportScroller as Tn, PlatformNavigation as Ho, PlatformLocation as zo, \u0275PRECOMMIT_HANDLER_SUPPORTED as Fo, LOCATION_INITIALIZED as qo, Location as _n, \u0275NavigationAdapterForLocation as Bo, HashLocationStrategy as Dn, LocationStrategy as wr, PathLocationStrategy as Vo } from "@angular/common";
import * as d from "@angular/core";
import { inject as S, HostAttributeToken as Go, linkedSignal as Wo, untracked as O, signal as U, \u0275INTERNAL_APPLICATION_ERROR_HANDLER as Qo, \u0275RuntimeError as Os, computed as Yo, booleanAttribute as yr, EventEmitter as Ko, createEnvironmentInjector as Zo, InjectionToken as Je, NgZone as Jo, EnvironmentInjector as Xo, DestroyRef as ea, afterNextRender as ta, \u0275promiseWithResolvers as En, makeEnvironmentProviders as ra, APP_BOOTSTRAP_LISTENER as An, ENVIRONMENT_INITIALIZER as zs, provideAppInitializer as Nn, \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION as na, Injector as On, \u0275performanceMarkFeature as ia, ApplicationRef as oa } from "@angular/core";
var aa = (() => { class t {
    router = S(G);
    stateManager = S(Ne);
    fragment = U("");
    queryParams = U({});
    path = U("");
    serializer = S(ce);
    constructor() { this.updateState(), this.router.events?.subscribe(e => { e instanceof N && this.updateState(); }); }
    updateState() { let { fragment: e, root: r, queryParams: i } = this.stateManager.getCurrentUrlTree(); this.fragment.set(e), this.queryParams.set(i), this.path.set(this.serializer.serialize(new A(r))); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), Ot = (() => { class t {
    router;
    route;
    tabIndexAttribute;
    renderer;
    el;
    locationStrategy;
    hrefAttributeValue = S(new Go("href"), { optional: !0 });
    reactiveHref = Wo(() => this.isAnchorElement ? this.computeHref(this._urlTree()) : this.hrefAttributeValue);
    get href() { return O(this.reactiveHref); }
    set href(e) { this.reactiveHref.set(e); }
    set target(e) { this._target.set(e); }
    get target() { return O(this._target); }
    _target = U(void 0);
    set queryParams(e) { this._queryParams.set(e); }
    get queryParams() { return O(this._queryParams); }
    _queryParams = U(void 0, { equal: () => !1 });
    set fragment(e) { this._fragment.set(e); }
    get fragment() { return O(this._fragment); }
    _fragment = U(void 0);
    set queryParamsHandling(e) { this._queryParamsHandling.set(e); }
    get queryParamsHandling() { return O(this._queryParamsHandling); }
    _queryParamsHandling = U(void 0);
    set state(e) { this._state.set(e); }
    get state() { return O(this._state); }
    _state = U(void 0, { equal: () => !1 });
    set info(e) { this._info.set(e); }
    get info() { return O(this._info); }
    _info = U(void 0, { equal: () => !1 });
    set relativeTo(e) { this._relativeTo.set(e); }
    get relativeTo() { return O(this._relativeTo); }
    _relativeTo = U(void 0);
    set preserveFragment(e) { this._preserveFragment.set(e); }
    get preserveFragment() { return O(this._preserveFragment); }
    _preserveFragment = U(!1);
    set skipLocationChange(e) { this._skipLocationChange.set(e); }
    get skipLocationChange() { return O(this._skipLocationChange); }
    _skipLocationChange = U(!1);
    set replaceUrl(e) { this._replaceUrl.set(e); }
    get replaceUrl() { return O(this._replaceUrl); }
    _replaceUrl = U(!1);
    isAnchorElement;
    onChanges = new te;
    applicationErrorHandler = S(Qo);
    options = S(ee, { optional: !0 });
    reactiveRouterState = S(aa);
    constructor(e, r, i, o, s, a) { this.router = e, this.route = r, this.tabIndexAttribute = i, this.renderer = o, this.el = s, this.locationStrategy = a; let c = s.nativeElement.tagName?.toLowerCase(); this.isAnchorElement = c === "a" || c === "area" || !!(typeof customElements == "object" && customElements.get(c)?.observedAttributes?.includes?.("href")); }
    setTabIndexIfNotOnNativeEl(e) { this.tabIndexAttribute != null || this.isAnchorElement || this.applyAttributeValue("tabindex", e); }
    ngOnChanges(e) { this.onChanges.next(this); }
    routerLinkInput = U(null);
    set routerLink(e) { e == null ? (this.routerLinkInput.set(null), this.setTabIndexIfNotOnNativeEl(null)) : (oe(e) ? this.routerLinkInput.set(e) : this.routerLinkInput.set(Array.isArray(e) ? e : [e]), this.setTabIndexIfNotOnNativeEl("0")); }
    onClick(e, r, i, o, s) { let a = this._urlTree(); if (a === null || this.isAnchorElement && (e !== 0 || r || i || o || s || typeof this.target == "string" && this.target != "_self"))
        return !0; let c = { skipLocationChange: this.skipLocationChange, replaceUrl: this.replaceUrl, state: this.state, info: this.info }; return this.router.navigateByUrl(a, c)?.catch(u => { this.applicationErrorHandler(u); }), !this.isAnchorElement; }
    ngOnDestroy() { }
    applyAttributeValue(e, r) { let i = this.renderer, o = this.el.nativeElement; r !== null ? i.setAttribute(o, e, r) : i.removeAttribute(o, e); }
    _urlTree = Yo(() => { this.reactiveRouterState.path(), this._preserveFragment() && this.reactiveRouterState.fragment(); let e = i => i === "preserve" || i === "merge"; (e(this._queryParamsHandling()) || e(this.options?.defaultQueryParamsHandling)) && this.reactiveRouterState.queryParams(); let r = this.routerLinkInput(); return r === null || !this.router.createUrlTree ? null : oe(r) ? r : this.router.createUrlTree(r, { relativeTo: this._relativeTo() !== void 0 ? this._relativeTo() : this.route, queryParams: this._queryParams(), fragment: this._fragment(), queryParamsHandling: this._queryParamsHandling(), preserveFragment: this._preserveFragment() }); }, { equal: (e, r) => this.computeHref(e) === this.computeHref(r) });
    get urlTree() { return O(this._urlTree); }
    computeHref(e) { return e !== null && this.locationStrategy ? this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e)) ?? "" : null; }
    static \u0275fac = function (r) { return new (r || t)(d.\u0275\u0275directiveInject(G), d.\u0275\u0275directiveInject(Y), d.\u0275\u0275injectAttribute("tabindex"), d.\u0275\u0275directiveInject(d.Renderer2), d.\u0275\u0275directiveInject(d.ElementRef), d.\u0275\u0275directiveInject(Mn.LocationStrategy)); };
    static \u0275dir = d.\u0275\u0275defineDirective({ type: t, selectors: [["", "routerLink", ""]], hostVars: 2, hostBindings: function (r, i) { r & 1 && d.\u0275\u0275listener("click", function (s) { return i.onClick(s.button, s.ctrlKey, s.shiftKey, s.altKey, s.metaKey); }), r & 2 && d.\u0275\u0275attribute("href", i.reactiveHref(), d.\u0275\u0275sanitizeUrlOrResourceUrl)("target", i._target()); }, inputs: { target: "target", queryParams: "queryParams", fragment: "fragment", queryParamsHandling: "queryParamsHandling", state: "state", info: "info", relativeTo: "relativeTo", preserveFragment: [2, "preserveFragment", "preserveFragment", yr], skipLocationChange: [2, "skipLocationChange", "skipLocationChange", yr], replaceUrl: [2, "replaceUrl", "replaceUrl", yr], routerLink: "routerLink" }, features: [d.\u0275\u0275NgOnChangesFeature] });
} return t; })(), sa = (() => { class t {
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
    isActiveChange = new Ko;
    link = S(Ot, { optional: !0 });
    constructor(e, r, i, o) { this.router = e, this.element = r, this.renderer = i, this.cdr = o, this.routerEventsSubscription = e.events.subscribe(s => { s instanceof N && this.update(); }); }
    ngAfterContentInit() { p(this.links.changes, p(null)).pipe(Ue()).subscribe(e => { this.update(), this.subscribeToEachLinkOnChanges(); }); }
    subscribeToEachLinkOnChanges() { this.linkInputChangesSubscription?.unsubscribe(); let e = [...this.links.toArray(), this.link].filter(r => !!r).map(r => r.onChanges); this.linkInputChangesSubscription = E(e).pipe(Ue()).subscribe(r => { this._isActive !== this.isLinkActive(this.router)(r) && this.update(); }); }
    set routerLinkActive(e) { let r = Array.isArray(e) ? e : e.split(" "); this.classes = r.filter(i => !!i); }
    ngOnChanges(e) { this.update(); }
    ngOnDestroy() { this.routerEventsSubscription.unsubscribe(), this.linkInputChangesSubscription?.unsubscribe(); }
    update() { !this.links || !this.router.navigated || queueMicrotask(() => { let e = this.hasActiveLinks(); this.classes.forEach(r => { e ? this.renderer.addClass(this.element.nativeElement, r) : this.renderer.removeClass(this.element.nativeElement, r); }), e && this.ariaCurrentWhenActive !== void 0 ? this.renderer.setAttribute(this.element.nativeElement, "aria-current", this.ariaCurrentWhenActive.toString()) : this.renderer.removeAttribute(this.element.nativeElement, "aria-current"), this._isActive !== e && (this._isActive = e, this.cdr.markForCheck(), this.isActiveChange.emit(e)); }); }
    isLinkActive(e) { let r = ca(this.routerLinkActiveOptions) ? this.routerLinkActiveOptions : this.routerLinkActiveOptions.exact ?? !1 ? l({}, or) : l({}, ze); return i => { let o = i.urlTree; return o ? O(ar(o, e, r)) : !1; }; }
    hasActiveLinks() { let e = this.isLinkActive(this.router); return this.link && e(this.link) || this.links.some(e); }
    static \u0275fac = function (r) { return new (r || t)(d.\u0275\u0275directiveInject(G), d.\u0275\u0275directiveInject(d.ElementRef), d.\u0275\u0275directiveInject(d.Renderer2), d.\u0275\u0275directiveInject(d.ChangeDetectorRef)); };
    static \u0275dir = d.\u0275\u0275defineDirective({ type: t, selectors: [["", "routerLinkActive", ""]], contentQueries: function (r, i, o) { if (r & 1 && d.\u0275\u0275contentQuery(o, Ot, 5), r & 2) {
            let s;
            d.\u0275\u0275queryRefresh(s = d.\u0275\u0275loadQuery()) && (i.links = s);
        } }, inputs: { routerLinkActiveOptions: "routerLinkActiveOptions", ariaCurrentWhenActive: "ariaCurrentWhenActive", routerLinkActive: "routerLinkActive" }, outputs: { isActiveChange: "isActiveChange" }, exportAs: ["routerLinkActive"], features: [d.\u0275\u0275NgOnChangesFeature] });
} return t; })();
function ca(t) { let n = t; return !!(n.paths || n.matrixParams || n.queryParams || n.fragment); }
var Ze = class {
}, ua = (() => { class t {
    preload(e, r) { return r().pipe(Pe(() => p(null))); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), la = (() => { class t {
    preload(e, r) { return p(null); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), Un = (() => { class t {
    router;
    injector;
    preloadingStrategy;
    loader;
    subscription;
    constructor(e, r, i, o) { this.router = e, this.injector = r, this.preloadingStrategy = i, this.loader = o; }
    setUpPreloading() { this.subscription = this.router.events.pipe(re(e => e instanceof N), Le(() => this.preload())).subscribe(() => { }); }
    preload() { return this.processRoutes(this.injector, this.router.config); }
    ngOnDestroy() { this.subscription?.unsubscribe(); }
    processRoutes(e, r) { let i = []; for (let o of r) {
        o.providers && !o._injector && (o._injector = Zo(o.providers, e, ""));
        let s = o._injector ?? e;
        o._loadedNgModuleFactory && !o._loadedInjector && (o._loadedInjector = o._loadedNgModuleFactory.create(s).injector);
        let a = o._loadedInjector ?? s;
        (o.loadChildren && !o._loadedRoutes && o.canLoad === void 0 || o.loadComponent && !o._loadedComponent) && i.push(this.preloadConfig(s, o)), (o.children || o._loadedRoutes) && i.push(this.processRoutes(a, o.children ?? o._loadedRoutes));
    } return E(i).pipe(Ue()); }
    preloadConfig(e, r) { return this.preloadingStrategy.preload(r, () => { if (e.destroyed)
        return p(null); let i; r.loadChildren && r.canLoad === void 0 ? i = E(this.loader.loadChildren(e, r)) : i = p(null); let o = i.pipe(W(s => s === null ? p(void 0) : (r._loadedRoutes = s.routes, r._loadedInjector = s.injector, r._loadedNgModuleFactory = s.factory, this.processRoutes(s.injector ?? e, s.routes)))); if (r.loadComponent && !r._loadedComponent) {
        let s = this.loader.loadComponent(e, r);
        return E([o, s]).pipe(Ue());
    }
    else
        return o; }); }
    static \u0275fac = function (r) { return new (r || t)(d.\u0275\u0275inject(G), d.\u0275\u0275inject(d.EnvironmentInjector), d.\u0275\u0275inject(Ze), d.\u0275\u0275inject(Tt)); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), Ut = new Je(""), Pn = (() => { class t {
    options;
    routerEventsSubscription;
    scrollEventsSubscription;
    lastId = 0;
    lastSource = we;
    restoredId = 0;
    store = {};
    urlSerializer = S(ce);
    zone = S(Jo);
    viewportScroller = S(Tn);
    transitions = S(At);
    constructor(e) { this.options = e, this.options.scrollPositionRestoration ||= "disabled", this.options.anchorScrolling ||= "disabled"; }
    init() { this.options.scrollPositionRestoration !== "disabled" && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents(); }
    createScrollEvents() { return this.transitions.events.subscribe(e => { e instanceof X ? (this.store[this.lastId] = this.viewportScroller.getScrollPosition(), this.lastSource = e.navigationTrigger, this.restoredId = e.restoredState ? e.restoredState.navigationId : 0) : e instanceof N ? (this.lastId = e.id, this.scheduleScrollEvent(e, this.urlSerializer.parse(e.urlAfterRedirects).fragment)) : e instanceof V && e.code === be.IgnoredSameUrlNavigation && (this.lastSource = void 0, this.restoredId = 0, this.scheduleScrollEvent(e, this.urlSerializer.parse(e.url).fragment)); }); }
    consumeScrollEvents() { return this.transitions.events.subscribe(e => { if (!(e instanceof Ie) || e.scrollBehavior === "manual")
        return; let r = { behavior: "instant" }; e.position ? this.options.scrollPositionRestoration === "top" ? this.viewportScroller.scrollToPosition([0, 0], r) : this.options.scrollPositionRestoration === "enabled" && this.viewportScroller.scrollToPosition(e.position, r) : e.anchor && this.options.anchorScrolling === "enabled" ? this.viewportScroller.scrollToAnchor(e.anchor) : this.options.scrollPositionRestoration !== "disabled" && this.viewportScroller.scrollToPosition([0, 0]); }); }
    scheduleScrollEvent(e, r) { let i = O(this.transitions.currentNavigation)?.extras.scroll; this.zone.runOutsideAngular(() => R(this, null, function* () { yield new Promise(o => { setTimeout(o), typeof requestAnimationFrame < "u" && requestAnimationFrame(o); }), this.zone.run(() => { this.transitions.events.next(new Ie(e, this.lastSource === "popstate" ? this.store[this.restoredId] : null, r, i)); }); })); }
    ngOnDestroy() { this.routerEventsSubscription?.unsubscribe(), this.scrollEventsSubscription?.unsubscribe(); }
    static \u0275fac = function (r) { d.\u0275\u0275invalidFactory(); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })();
var da = (() => { class t extends Ne {
    injector = S(Xo);
    navigation = S(Ho);
    inMemoryScrollingEnabled = S(Ut, { optional: !0 }) !== null;
    base = new URL(S(zo).href).origin;
    appRootURL = new URL(this.location.prepareExternalUrl?.("/") ?? "/", this.base).href;
    precommitHandlerSupported = S(Fo);
    activeHistoryEntry = this.navigation.currentEntry;
    currentNavigation = {};
    nonRouterCurrentEntryChangeSubject = new te;
    nonRouterEntryChangeListener;
    get registered() { return this.nonRouterEntryChangeListener !== void 0 && !this.nonRouterEntryChangeListener.closed; }
    constructor() { super(); let e = r => { this.handleNavigate(r); }; this.navigation.addEventListener("navigate", e), S(ea).onDestroy(() => this.navigation.removeEventListener("navigate", e)); }
    registerNonRouterCurrentEntryChangeListener(e) { return this.activeHistoryEntry = this.navigation.currentEntry, this.nonRouterEntryChangeListener = this.nonRouterCurrentEntryChangeSubject.subscribe(({ path: r, state: i }) => { e(r, i, "popstate", this.precommitHandlerSupported ? {} : { replaceUrl: !0 }); }), this.nonRouterEntryChangeListener; }
    handleRouterEvent(e, r) { return R(this, null, function* () { if (this.currentNavigation = M(l({}, this.currentNavigation), { routerTransition: r }), e instanceof X)
        this.updateStateMemento(), this.precommitHandlerSupported && this.maybeCreateNavigationForTransition(r);
    else if (e instanceof V)
        this.finishNavigation(), this.commitTransition(r);
    else if (e instanceof Ee)
        r.routesRecognizeHandler.deferredHandle = new Promise(i => R(this, null, function* () { if (this.urlUpdateStrategy === "eager")
            try {
                this.maybeCreateNavigationForTransition(r), yield this.currentNavigation.commitUrl?.();
            }
            catch {
                return;
            } i(); }));
    else if (e instanceof pe)
        r.beforeActivateHandler.deferredHandle = new Promise(i => R(this, null, function* () { if (this.urlUpdateStrategy === "deferred")
            try {
                this.maybeCreateNavigationForTransition(r), yield this.currentNavigation.commitUrl?.();
            }
            catch {
                return;
            } this.commitTransition(r), i(); }));
    else if (e instanceof D || e instanceof ae) {
        if (e instanceof D && e.code === b.Redirect && !!this.currentNavigation.commitUrl)
            return;
        this.cancel(r, e);
    }
    else if (e instanceof N) {
        let { resolveHandler: i, removeAbortListener: o } = this.currentNavigation;
        this.currentNavigation = {}, o?.(), this.activeHistoryEntry = this.navigation.currentEntry, ta({ read: () => i?.() }, { injector: this.injector });
    } }); }
    maybeCreateNavigationForTransition(e) { let { navigationEvent: r, commitUrl: i } = this.currentNavigation; if (i || r && r.navigationType === "traverse" && this.eventAndRouterDestinationsMatch(r, e))
        return; this.currentNavigation.removeAbortListener?.(); let o = this.createBrowserPath(e); this.navigate(o, e); }
    navigate(e, r) { let i = r.extras.skipLocationChange ? this.navigation.currentEntry.url : this.location.prepareExternalUrl(e), o = l(l({}, r.extras.state), this.generateNgRouterState(r)), s = { \u0275routerInfo: { intercept: !0 } }; !this.navigation.transition && this.currentNavigation.navigationEvent && (r.extras.replaceUrl = !1); let a = this.location.isCurrentPathEqualTo(i) || r.extras.replaceUrl || r.extras.skipLocationChange ? "replace" : "push"; Rr(this.navigation.navigate(i, { state: o, history: a, info: s })); }
    finishNavigation() { this.currentNavigation.commitUrl?.(), this.currentNavigation?.resolveHandler?.(), this.currentNavigation = {}; }
    cancel(e, r) { return R(this, null, function* () { this.currentNavigation.rejectNavigateEvent?.(); let i = {}; if (this.currentNavigation = i, sr(r))
        return; let o = this.canceledNavigationResolution === "computed" && this.navigation.currentEntry.key !== this.activeHistoryEntry.key; if (this.resetInternalState(e.finalUrl, o), this.navigation.currentEntry.id !== this.activeHistoryEntry.id && !(r instanceof D && r.code === b.Aborted && (yield Promise.resolve(), this.currentNavigation !== i)))
        if (o)
            Rr(this.navigation.traverseTo(this.activeHistoryEntry.key, { info: { \u0275routerInfo: { intercept: !1 } } }));
        else {
            let s = this.urlSerializer.serialize(this.getCurrentUrlTree()), a = this.location.prepareExternalUrl(s);
            Rr(this.navigation.navigate(a, { state: this.activeHistoryEntry.getState(), history: "replace", info: { \u0275routerInfo: { intercept: !1 } } }));
        } }); }
    resetInternalState(e, r) { this.routerState = this.stateMemento.routerState, this.currentUrlTree = this.stateMemento.currentUrlTree, this.rawUrlTree = r ? this.stateMemento.rawUrlTree : this.urlHandlingStrategy.merge(this.currentUrlTree, e ?? this.rawUrlTree); }
    handleNavigate(e) { if (!e.canIntercept || e.navigationType === "reload")
        return; let r = e?.info?.\u0275routerInfo; if (r && !r.intercept)
        return; let i = !!r; if (!i && (this.currentNavigation.routerTransition?.abort(), !this.registered)) {
        this.finishNavigation();
        return;
    } this.currentNavigation = l({}, this.currentNavigation), this.currentNavigation.navigationEvent = e; let o = () => { this.currentNavigation.routerTransition?.abort(); }; e.signal.addEventListener("abort", o), this.currentNavigation.removeAbortListener = () => e.signal.removeEventListener("abort", o); let a = { scroll: this.inMemoryScrollingEnabled ? "manual" : this.currentNavigation.routerTransition?.extras.scroll ?? "after-transition" }, { promise: c, resolve: u, reject: h } = En(), { promise: f, resolve: w, reject: K } = En(); if (this.currentNavigation.rejectNavigateEvent = () => { e.signal.removeEventListener("abort", o), K(), h(); }, this.currentNavigation.resolveHandler = () => { this.currentNavigation.removeAbortListener?.(), u(); }, c.catch(() => { }), f.catch(() => { }), a.handler = () => c, this.deferredCommitSupported(e)) {
        let H = new Promise(I => { a.precommitHandler = z => (this.navigation.transition?.navigationType === "traverse" ? I(() => { }) : I(z.redirect.bind(z)), f); });
        this.currentNavigation.commitUrl = () => R(this, null, function* () { this.currentNavigation.commitUrl = void 0; let I = this.currentNavigation.routerTransition; if (I && !I.extras.skipLocationChange) {
            let z = this.createBrowserPath(I), Oe = this.location.isCurrentPathEqualTo(z) || I.extras.replaceUrl ? "replace" : "push", le = l(l({}, I.extras.state), this.generateNgRouterState(I)), me = this.location.prepareExternalUrl(z);
            (yield H)(me, { state: le, history: Oe });
        } return w(), yield this.navigation.transition?.committed; });
    } e.intercept(a), i || this.handleNavigateEventTriggeredOutsideRouterAPIs(e); }
    handleNavigateEventTriggeredOutsideRouterAPIs(e) { let r = e.destination.url.substring(this.appRootURL.length - 1), i = e.destination.getState(); this.nonRouterCurrentEntryChangeSubject.next({ path: r, state: i }); }
    eventAndRouterDestinationsMatch(e, r) { let i = this.createBrowserPath(r), o = new URL(e.destination.url), s = this.location.prepareExternalUrl(i); return new URL(s, o.origin).href === o.href; }
    generateNgRouterState(e) { return M(l({}, this.routerUrlState(e)), { navigationId: e.id }); }
    deferredCommitSupported(e) { return this.precommitHandlerSupported && e.cancelable; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function Rr(t) { return t.finished?.catch(() => { }), t.committed?.catch(() => { }), t; }
function ha(t, ...n) { return ra([{ provide: ue, multi: !0, useValue: t }, [], { provide: Y, useFactory: Ln }, { provide: An, multi: !0, useFactory: jn }, n.map(e => e.\u0275providers)]); }
function Ln() { return S(G).routerState.root; }
function $(t, n) { return { \u0275kind: t, \u0275providers: n }; }
function fa(t) { return [{ provide: ue, multi: !0, useValue: t }, []]; }
function pa(t = {}) { return $(4, [{ provide: Ut, useFactory: () => new Pn(t) }]); }
function ga() { return $(11, [{ provide: Ne, useExisting: da }, { provide: _n, useClass: Bo }, []]); }
function jn() { let t = S(On); return n => { let e = t.get(oa); if (n !== e.components[0])
    return; let r = t.get(G), i = t.get(xn); t.get(Cr) === 1 && r.initialNavigation(), t.get(Hn, null, { optional: !0 })?.setUpPreloading(), t.get(Ut, null, { optional: !0 })?.init(), r.resetRootComponentType(e.componentTypes[0]), i.closed || (i.next(), i.complete(), i.unsubscribe()); }; }
var xn = new Je("", { factory: () => new te }), Cr = new Je("", { factory: () => 1 });
function kn() { let t = [{ provide: na, useValue: !0 }, { provide: Cr, useValue: 0 }, Nn(() => { let n = S(On); return n.get(qo, Promise.resolve()).then(() => new Promise(r => { let i = n.get(G), o = n.get(xn); Nt(i, () => { r(!0); }), n.get(At).afterPreactivation = () => (r(!0), o.closed ? p(void 0) : o), i.initialNavigation(); })); })]; return $(2, t); }
function $n() { let t = [Nn(() => { S(G).setUpLocationChangeListener(); }), { provide: Cr, useValue: 2 }]; return $(3, t); }
function va() { let t = []; return t = [], $(1, t); }
var Hn = new Je("");
function zn(t) { return $(0, [{ provide: Hn, useExisting: Un }, { provide: Ze, useExisting: t }]); }
function ma(t) { return $(5, [{ provide: ee, useValue: t }]); }
function ya() { return $(6, [{ provide: wr, useClass: Dn }]); }
function Ra(t) { return $(7, [{ provide: Dt, useValue: t }]); }
function Sa() { return $(10, [{ provide: mr, useValue: Cn }]); }
function Fn() { return $(8, [dr, { provide: Ye, useExisting: dr }]); }
function qn(t) { ia("NgRouterViewTransitions"); let n = [{ provide: gr, useValue: wn }, { provide: vr, useValue: l({ skipNextTransition: !!t?.skipInitialTransition }, t) }]; return $(9, n); }
var Bn = [_n, { provide: ce, useClass: J }, G, ve, { provide: Y, useFactory: Ln }, Tt, []], wa = (() => { class t {
    constructor() { }
    static forRoot(e, r) { return { ngModule: t, providers: [Bn, [], { provide: ue, multi: !0, useValue: e }, [], r?.errorHandler ? { provide: Dt, useValue: r.errorHandler } : [], { provide: ee, useValue: r || {} }, r?.useHash ? ba() : Ia(), Ca(), r?.preloadingStrategy ? zn(r.preloadingStrategy).\u0275providers : [], r?.initialNavigation ? Ea(r) : [], r?.bindToComponentInputs ? Fn().\u0275providers : [], r?.enableViewTransitions ? qn().\u0275providers : [], Ma()] }; }
    static forChild(e) { return { ngModule: t, providers: [{ provide: ue, multi: !0, useValue: e }] }; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275mod = d.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = d.\u0275\u0275defineInjector({});
} return t; })();
function Ca() { return { provide: Ut, useFactory: () => { let t = S(Tn), n = S(ee); return n.scrollOffset && t.setOffset(n.scrollOffset), new Pn(n); } }; }
function ba() { return { provide: wr, useClass: Dn }; }
function Ia() { return { provide: wr, useClass: Vo }; }
function Ea(t) { return [t.initialNavigation === "disabled" ? $n().\u0275providers : [], t.initialNavigation === "enabledBlocking" ? kn().\u0275providers : []]; }
var Sr = new Je("");
function Ma() { return [{ provide: Sr, useFactory: jn }, { provide: An, multi: !0, useExisting: Sr }]; }
import { inject as Xe, Version as Ta } from "@angular/core";
import "@angular/common";
function Js(t) { return t.map(n => (...e) => Xe(n).canMatch(...e)); }
function Xs(t) { return t.map(n => (...e) => Xe(n).canActivate(...e)); }
function ec(t) { return t.map(n => (...e) => Xe(n).canActivateChild(...e)); }
function tc(t) { return t.map(n => (...e) => Xe(n).canDeactivate(...e)); }
function rc(t) { return (...n) => Xe(t).resolve(...n); }
var nc = new Ta("21.2.10");
export { Y as ActivatedRoute, Te as ActivatedRouteSnapshot, St as ActivationEnd, Rt as ActivationStart, Et as BaseRouteReuseStrategy, yt as ChildActivationEnd, mt as ChildActivationStart, ve as ChildrenOutletContexts, mn as DefaultTitleStrategy, J as DefaultUrlSerializer, C as EventType, ht as GuardsCheckEnd, dt as GuardsCheckStart, D as NavigationCancel, b as NavigationCancellationCode, N as NavigationEnd, ae as NavigationError, V as NavigationSkipped, be as NavigationSkippedCode, X as NavigationStart, la as NoPreloading, wt as OutletContext, g as PRIMARY_OUTLET, ua as PreloadAllModules, Ze as PreloadingStrategy, ee as ROUTER_CONFIGURATION, Sr as ROUTER_INITIALIZER, on as ROUTER_OUTLET_DATA, ue as ROUTES, _e as RedirectCommand, pt as ResolveEnd, ft as ResolveStart, vt as RouteConfigLoadEnd, gt as RouteConfigLoadStart, In as RouteReuseStrategy, G as Router, L as RouterEvent, Ot as RouterLink, sa as RouterLinkActive, Ot as RouterLinkWithHref, wa as RouterModule, lr as RouterOutlet, Un as RouterPreloader, Be as RouterState, Ve as RouterStateSnapshot, qe as RoutesRecognized, Ie as Scroll, pr as TitleStrategy, _t as UrlHandlingStrategy, ie as UrlSegment, m as UrlSegmentGroup, ce as UrlSerializer, A as UrlTree, nc as VERSION, fe as convertToParamMap, Kr as createUrlTreeFromSnapshot, $r as defaultUrlMatcher, jo as destroyDetachedRouteHandle, ar as isActive, Xs as mapToCanActivate, ec as mapToCanActivateChild, tc as mapToCanDeactivate, Js as mapToCanMatch, rc as mapToResolve, ha as provideRouter, fa as provideRoutes, Fn as withComponentInputBinding, va as withDebugTracing, $n as withDisabledInitialNavigation, kn as withEnabledBlockingInitialNavigation, Sa as withExperimentalAutoCleanupInjectors, ga as withExperimentalPlatformNavigation, ya as withHashLocation, pa as withInMemoryScrolling, Ra as withNavigationErrorHandler, zn as withPreloading, ma as withRouterConfig, qn as withViewTransitions, hr as \u0275EmptyOutletComponent, Bn as \u0275ROUTER_PROVIDERS, Nt as \u0275afterNextNavigation, yn as \u0275loadChildren };
/*! Bundled license information:

@angular/platform-browser/fesm2022/platform-browser.mjs:
@angular/router/fesm2022/_router-chunk.mjs:
@angular/router/fesm2022/_router_module-chunk.mjs:
@angular/router/fesm2022/router.mjs:
  (**
   * @license Angular v21.2.10
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
