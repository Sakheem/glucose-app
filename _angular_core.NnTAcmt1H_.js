import "@nf-internal/chunk-FIE2NKNJ";
import { a as H, b as ae, c as We, d as qn, f as Eg, g as ir, h as Ig, o as Dg } from "@nf-internal/chunk-UMZMRDSE";
var ye = null, ji = !1, $c = 1, zM = null, J = Symbol("SIGNAL");
function O(e) { let t = ye; return ye = e, t; }
function Vi() { return ye; }
var Ht = { version: 0, lastCleanEpoch: 0, dirty: !1, producers: void 0, producersTail: void 0, consumers: void 0, consumersTail: void 0, recomputing: !1, consumerAllowSignalWrites: !1, consumerIsAlwaysLive: !1, kind: "unknown", producerMustRecompute: () => !1, producerRecomputeValue: () => { }, consumerMarkedDirty: () => { }, consumerOnSignalRead: () => { } };
function Bt(e) { if (ji)
    throw new Error(""); if (ye === null)
    return; ye.consumerOnSignalRead(e); let t = ye.producersTail; if (t !== void 0 && t.producer === e)
    return; let n, o = ye.recomputing; if (o && (n = t !== void 0 ? t.nextProducer : ye.producers, n !== void 0 && n.producer === e)) {
    ye.producersTail = n, n.lastReadVersion = e.version;
    return;
} let r = e.consumersTail; if (r !== void 0 && r.consumer === ye && (!o || JM(r, ye)))
    return; let i = zn(ye), s = { producer: e, consumer: ye, nextProducer: n, prevConsumer: r, lastReadVersion: e.version, nextConsumer: void 0 }; ye.producersTail = s, t !== void 0 ? t.nextProducer = s : ye.producers = s, i && Mg(e, s); }
function QM() { $c++; }
function Gn(e) { if (!(zn(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === $c)) {
    if (!e.producerMustRecompute(e) && !Wn(e)) {
        sr(e);
        return;
    }
    e.producerRecomputeValue(e), sr(e);
} }
function Cg(e) { if (e.consumers === void 0)
    return; let t = ji; ji = !0; try {
    for (let n = e.consumers; n !== void 0; n = n.nextConsumer) {
        let o = n.consumer;
        o.dirty || ZM(o);
    }
}
finally {
    ji = t;
} }
function Tg() { return ye?.consumerAllowSignalWrites !== !1; }
function ZM(e) { e.dirty = !0, Cg(e), e.consumerMarkedDirty?.(e); }
function sr(e) { e.dirty = !1, e.lastCleanEpoch = $c; }
function gt(e) { return e && YM(e), O(e); }
function YM(e) { e.producersTail = void 0, e.recomputing = !0; }
function Ut(e, t) { O(t), e && KM(e); }
function KM(e) { e.recomputing = !1; let t = e.producersTail, n = t !== void 0 ? t.nextProducer : e.producers; if (n !== void 0) {
    if (zn(e))
        do
            n = qc(n);
        while (n !== void 0);
    t !== void 0 ? t.nextProducer = void 0 : e.producers = void 0;
} }
function Wn(e) { for (let t = e.producers; t !== void 0; t = t.nextProducer) {
    let n = t.producer, o = t.lastReadVersion;
    if (o !== n.version || (Gn(n), o !== n.version))
        return !0;
} return !1; }
function $t(e) { if (zn(e)) {
    let t = e.producers;
    for (; t !== void 0;)
        t = qc(t);
} e.producers = void 0, e.producersTail = void 0, e.consumers = void 0, e.consumersTail = void 0; }
function Mg(e, t) { let n = e.consumersTail, o = zn(e); if (n !== void 0 ? (t.nextConsumer = n.nextConsumer, n.nextConsumer = t) : (t.nextConsumer = void 0, e.consumers = t), t.prevConsumer = n, e.consumersTail = t, !o)
    for (let r = e.producers; r !== void 0; r = r.nextProducer)
        Mg(r.producer, r); }
function qc(e) { let t = e.producer, n = e.nextProducer, o = e.nextConsumer, r = e.prevConsumer; if (e.nextConsumer = void 0, e.prevConsumer = void 0, o !== void 0 ? o.prevConsumer = r : t.consumersTail = r, r !== void 0)
    r.nextConsumer = o;
else if (t.consumers = o, !zn(t)) {
    let i = t.producers;
    for (; i !== void 0;)
        i = qc(i);
} return n; }
function zn(e) { return e.consumerIsAlwaysLive || e.consumers !== void 0; }
function Hi(e) { zM?.(e); }
function JM(e, t) { let n = t.producersTail; if (n !== void 0) {
    let o = t.producers;
    do {
        if (o === e)
            return !0;
        if (o === n)
            break;
        o = o.nextProducer;
    } while (o !== void 0);
} return !1; }
function Bi(e, t) { return Object.is(e, t); }
function Ui(e, t) { let n = Object.create(XM); n.computation = e, t !== void 0 && (n.equal = t); let o = () => { if (Gn(n), Bt(n), n.value === pt)
    throw n.error; return n.value; }; return o[J] = n, Hi(n), o; }
var Vt = Symbol("UNSET"), an = Symbol("COMPUTING"), pt = Symbol("ERRORED"), XM = ae(H({}, Ht), { value: Vt, dirty: !0, error: null, equal: Bi, kind: "computed", producerMustRecompute(e) { return e.value === Vt || e.value === an; }, producerRecomputeValue(e) { if (e.value === an)
        throw new Error(""); let t = e.value; e.value = an; let n = gt(e), o, r = !1; try {
        o = e.computation(), O(null), r = t !== Vt && t !== pt && o !== pt && e.equal(t, o);
    }
    catch (i) {
        o = pt, e.error = i;
    }
    finally {
        Ut(e, n);
    } if (r) {
        e.value = t;
        return;
    } e.value = o, e.version++; } });
function eN() { throw new Error; }
var Ng = eN;
function wg(e) { Ng(e); }
function _g(e) { Ng = e; }
var tN = null;
function Sg(e, t) { let n = Object.create($i); n.value = e, t !== void 0 && (n.equal = t); let o = () => nN(n); return o[J] = n, Hi(n), [o, s => cn(n, s), s => Gc(n, s)]; }
function nN(e) { return Bt(e), e.value; }
function cn(e, t) { Tg() || wg(e), e.equal(e.value, t) || (e.value = t, oN(e)); }
function Gc(e, t) { Tg() || wg(e), cn(e, t(e.value)); }
var $i = ae(H({}, Ht), { equal: Bi, value: void 0, kind: "signal" });
function oN(e) { e.version++, QM(), Cg(e), tN?.(e); }
function bg(e) { let t = O(null); try {
    return e();
}
finally {
    O(t);
} }
var Ag = ae(H({}, Ht), { consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !0, dirty: !0, kind: "effect" });
function Rg(e) { if (e.dirty = !1, e.version > 0 && !Wn(e))
    return; e.version++; let t = gt(e); try {
    e.cleanup(), e.fn();
}
finally {
    Ut(e, t);
} }
var Wc;
function zc() { return Wc; }
function nt(e) { let t = Wc; return Wc = e, t; }
var rN = Symbol("NotFound");
function Qc(e) { return e === rN || e?.name === "\u0275NotFound"; }
import { setActiveConsumer as Qn } from "@angular/core/primitives/signals";
import { isNotFound as iN } from "@angular/core/primitives/di";
var Gi = class {
    full;
    major;
    minor;
    patch;
    constructor(t) { this.full = t; let n = t.split("."); this.major = n[0], this.minor = n[1], this.patch = n.slice(2).join("."); }
}, sN = new Gi("21.1.0");
var Yi = "https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss", C = class extends Error {
    code;
    constructor(t, n) { super(pr(t, n)), this.code = t; }
};
function aN(e) { return `NG0${Math.abs(e)}`; }
function pr(e, t) { return `${aN(e)}${t ? ": " + t : ""}`; }
var Ae = globalThis;
function S(e) { for (let t in e)
    if (e[t] === S)
        return t; throw Error(""); }
function Fg(e, t) { for (let n in t)
    t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]); }
function vt(e) {
    if (typeof e == "string")
        return e;
    if (Array.isArray(e))
        return `[${e.map(vt).join(", ")}]`;
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
function Ki(e, t) { return e ? t ? `${e} ${t}` : e : t || ""; }
function cN(e, t = 100) { if (!e || t < 1 || e.length <= t)
    return e; if (t == 1)
    return e.substring(0, 1) + "..."; let n = Math.round(t / 2); return e.substring(0, n) + "..." + e.substring(e.length - n); }
var lN = S({ __forward_ref__: S });
function gr(e) { return e.__forward_ref__ = gr, e.toString = function () { return vt(this()); }, e; }
function P(e) { return hr(e) ? e() : e; }
function hr(e) { return typeof e == "function" && e.hasOwnProperty(lN) && e.__forward_ref__ === gr; }
function jg(e, t, n) { e != t && cl(n, e, t, "=="); }
function cl(e, t, n, o) { throw new Error(`ASSERTION ERROR: ${e}` + (o == null ? "" : ` [Expected=> ${n} ${o} ${t} <=Actual]`)); }
function U(e) { return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 }; }
function mr(e) { return { providers: e.providers || [], imports: e.imports || [] }; }
function vr(e) { return dN(e, Yn); }
function uN(e) { return vr(e) !== null; }
function dN(e, t) { return e.hasOwnProperty(t) && e[t] || null; }
function fN(e) { let t = e?.[Yn] ?? null; return t || null; }
function Yc(e) { return e && e.hasOwnProperty(cr) ? e[cr] : null; }
var Yn = S({ \u0275prov: S }), cr = S({ \u0275inj: S }), M = class {
    _desc;
    ngMetadataName = "InjectionToken";
    \u0275prov;
    constructor(t, n) { this._desc = t, this.\u0275prov = void 0, typeof n == "number" ? this.__NG_ELEMENT_ID__ = n : n !== void 0 && (this.\u0275prov = U({ token: this, providedIn: n.providedIn || "root", factory: n.factory })); }
    get multi() { return this; }
    toString() { return `InjectionToken ${this._desc}`; }
}, Og;
function pN(e) { cl("setInjectorProfilerContext should never be called in production mode"); let t = Og; return Og = e, t; }
function ll(e) { return e && !!e.\u0275providers; }
var pn = S({ \u0275cmp: S }), yr = S({ \u0275dir: S }), Er = S({ \u0275pipe: S }), Ji = S({ \u0275mod: S }), ot = S({ \u0275fac: S }), gn = S({ __NG_ELEMENT_ID__: S }), kg = S({ __NG_ENV_ID__: S });
function hn(e) { return es(e, "@NgModule"), e[Ji] || null; }
function Xi(e) { let t = hn(e); if (!t)
    throw new C(915, !1); return t; }
function z(e) { return es(e, "@Component"), e[pn] || null; }
function Re(e) { return es(e, "@Directive"), e[yr] || null; }
function Qe(e) { return es(e, "@Pipe"), e[Er] || null; }
function es(e, t) { if (e == null)
    throw new C(-919, !1); }
function Ir(e) { let t = z(e) || Re(e) || Qe(e); return t !== null && t.standalone; }
function R(e) { return typeof e == "string" ? e : e == null ? "" : String(e); }
function Oe(e) { return typeof e == "function" ? e.name || e.toString() : typeof e == "object" && e != null && typeof e.type == "function" ? e.type.name || e.type.toString() : R(e); }
var Vg = S({ ngErrorCode: S }), gN = S({ ngErrorMessage: S }), hN = S({ ngTokenPath: S });
function ul(e, t) { return Hg("", -200, t); }
function ts(e, t) { throw new C(-201, !1); }
function Hg(e, t, n) { let o = new C(t, e); return o[Vg] = t, o[gN] = e, n && (o[hN] = n), o; }
function mN(e) { return e[Vg]; }
var Kc;
function Bg() { return Kc; }
function Ce(e) { let t = Kc; return Kc = e, t; }
function dl(e, t, n) { let o = vr(e); if (o && o.providedIn == "root")
    return o.value === void 0 ? o.value = o.factory() : o.value; if (n & 8)
    return null; if (t !== void 0)
    return t; ts(e, ""); }
var vN = {}, ln = vN, Jc = "__NG_DI_FLAG__", Xc = class {
    injector;
    constructor(t) { this.injector = t; }
    retrieve(t, n) { let o = un(n) || 0; try {
        return this.injector.get(t, o & 8 ? null : ln, o);
    }
    catch (r) {
        if (Qc(r))
            return r;
        throw r;
    } }
};
function yN(e, t = 0) { let n = zc(); if (n === void 0)
    throw new C(-203, !1); if (n === null)
    return dl(e, void 0, t); {
    let o = EN(t), r = n.retrieve(e, o);
    if (Qc(r)) {
        if (o.optional)
            return null;
        throw r;
    }
    return r;
} }
function he(e, t = 0) { return (Bg() || yN)(P(e), t); }
function ns(e) { throw new C(202, !1); }
function E(e, t) { return he(e, un(t)); }
function un(e) { return typeof e > "u" || typeof e == "number" ? e : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4); }
function EN(e) { return { optional: !!(e & 8), host: !!(e & 1), self: !!(e & 2), skipSelf: !!(e & 4) }; }
function el(e) { let t = []; for (let n = 0; n < e.length; n++) {
    let o = P(e[n]);
    if (Array.isArray(o)) {
        if (o.length === 0)
            throw new C(900, !1);
        let r, i = 0;
        for (let s = 0; s < o.length; s++) {
            let a = o[s], c = IN(a);
            typeof c == "number" ? c === -1 ? r = a.token : i |= c : r = a;
        }
        t.push(he(r, i));
    }
    else
        t.push(he(o));
} return t; }
function Kn(e, t) { return e[Jc] = t, e.prototype[Jc] = t, e; }
function IN(e) { return e[Jc]; }
function qt(e, t) { let n = e.hasOwnProperty(ot); return n ? e[ot] : null; }
function Ug(e, t, n) { if (e.length !== t.length)
    return !1; for (let o = 0; o < e.length; o++) {
    let r = e[o], i = t[o];
    if (n && (r = n(r), i = n(i)), i !== r)
        return !1;
} return !0; }
function Ze(e) { return e.flat(Number.POSITIVE_INFINITY); }
function os(e, t) { e.forEach(n => Array.isArray(n) ? os(n, t) : t(n)); }
function fl(e, t, n) { t >= e.length ? e.push(n) : e.splice(t, 0, n); }
function Dr(e, t) { return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]; }
function Cr(e, t) { let n = []; for (let o = 0; o < e; o++)
    n.push(t); return n; }
function pl(e, t, n) { let o = e.length - n; for (; t < o;)
    e[t] = e[t + n], t++; for (; n--;)
    e.pop(); }
function gl(e, t, n, o) { let r = e.length; if (r == t)
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
function Tr(e, t, n) { let o = Jn(e, t); return o >= 0 ? e[o | 1] = n : (o = ~o, gl(e, o, t, n)), o; }
function rs(e, t) { let n = Jn(e, t); if (n >= 0)
    return e[n | 1]; }
function Jn(e, t) { return DN(e, t, 1); }
function DN(e, t, n) { let o = 0, r = e.length >> n; for (; r !== o;) {
    let i = o + (r - o >> 1), s = e[i << n];
    if (t === s)
        return i << n;
    s > t ? r = i : o = i + 1;
} return ~(r << n); }
var Le = {}, j = [], Fe = new M(""), hl = new M("", -1), ml = new M(""), lr = class {
    get(t, n = ln) { if (n === ln) {
        let r = Hg("", -201);
        throw r.name = "\u0275NotFound", r;
    } return n; }
};
function Ye(e) { return { \u0275providers: e }; }
function $g(e) { return Ye([{ provide: Fe, multi: !0, useValue: e }]); }
function qg(...e) { return { \u0275providers: is(!0, e), \u0275fromNgModule: !0 }; }
function is(e, ...t) { let n = [], o = new Set, r, i = s => { n.push(s); }; return os(t, s => { let a = s; Wi(a, i, [], o) && (r ||= [], r.push(a)); }), r !== void 0 && Gg(r, i), n; }
function Gg(e, t) { for (let n = 0; n < e.length; n++) {
    let { ngModule: o, providers: r } = e[n];
    vl(r, i => { t(i, o); });
} }
function Wi(e, t, n, o) { if (e = P(e), !e)
    return !1; let r = null, i = Yc(e), s = !i && z(e); if (!i && !s) {
    let c = e.ngModule;
    if (i = Yc(c), i)
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
            Wi(l, t, n, o);
    }
}
else if (i) {
    if (i.imports != null && !a) {
        o.add(r);
        let l;
        os(i.imports, u => { Wi(u, t, n, o) && (l ||= [], l.push(u)); }), l !== void 0 && Gg(l, t);
    }
    if (!a) {
        let l = qt(r) || (() => new r);
        t({ provide: r, useFactory: l, deps: j }, r), t({ provide: ml, useValue: r, multi: !0 }, r), t({ provide: Fe, useValue: () => he(r), multi: !0 }, r);
    }
    let c = i.providers;
    if (c != null && !a) {
        let l = e;
        vl(c, u => { t(u, l); });
    }
}
else
    return !1; return r !== e && e.providers !== void 0; }
function vl(e, t) { for (let n of e)
    ll(n) && (n = n.\u0275providers), Array.isArray(n) ? vl(n, t) : t(n); }
var CN = S({ provide: String, useValue: S });
function Wg(e) { return e !== null && typeof e == "object" && CN in e; }
function TN(e) { return !!(e && e.useExisting); }
function MN(e) { return !!(e && e.useFactory); }
function dn(e) { return typeof e == "function"; }
function zg(e) { return !!e.useClass; }
var yl = new M(""), qi = {}, xg = {}, Zc;
function Xn() { return Zc === void 0 && (Zc = new lr), Zc; }
var be = class {
}, fn = class extends be {
    parent;
    source;
    scopes;
    records = new Map;
    _ngOnDestroyHooks = new Set;
    _onDestroyHooks = [];
    get destroyed() { return this._destroyed; }
    _destroyed = !1;
    injectorDefTypes;
    constructor(t, n, o, r) { super(), this.parent = n, this.source = o, this.scopes = r, nl(t, s => this.processProvider(s)), this.records.set(hl, Zn(void 0, this)), r.has("environment") && this.records.set(be, Zn(void 0, this)); let i = this.records.get(yl); i != null && typeof i.value == "string" && this.scopes.add(i.value), this.injectorDefTypes = new Set(this.get(ml, j, { self: !0 })); }
    retrieve(t, n) { let o = un(n) || 0; try {
        return this.get(t, ln, o);
    }
    catch (r) {
        if (iN(r))
            return r;
        throw r;
    } }
    destroy() { ar(this), this._destroyed = !0; let t = Qn(null); try {
        for (let o of this._ngOnDestroyHooks)
            o.ngOnDestroy();
        let n = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let o of n)
            o();
    }
    finally {
        this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear(), Qn(t);
    } }
    onDestroy(t) { return ar(this), this._onDestroyHooks.push(t), () => this.removeOnDestroy(t); }
    runInContext(t) { ar(this); let n = nt(this), o = Ce(void 0), r; try {
        return t();
    }
    finally {
        nt(n), Ce(o);
    } }
    get(t, n = ln, o) { if (ar(this), t.hasOwnProperty(kg))
        return t[kg](this); let r = un(o), i, s = nt(this), a = Ce(void 0); try {
        if (!(r & 4)) {
            let l = this.records.get(t);
            if (l === void 0) {
                let u = bN(t) && vr(t);
                u && this.injectableDefInScope(u) ? l = Zn(tl(t), qi) : l = null, this.records.set(t, l);
            }
            if (l != null)
                return this.hydrate(t, l, r);
        }
        let c = r & 2 ? Xn() : this.parent;
        return n = r & 8 && n === ln ? null : n, c.get(t, n);
    }
    catch (c) {
        let l = mN(c);
        throw l === -200 || l === -201 ? new C(l, null) : c;
    }
    finally {
        Ce(a), nt(s);
    } }
    resolveInjectorInitializers() { let t = Qn(null), n = nt(this), o = Ce(void 0), r; try {
        let i = this.get(Fe, j, { self: !0 });
        for (let s of i)
            s();
    }
    finally {
        nt(n), Ce(o), Qn(t);
    } }
    toString() { let t = [], n = this.records; for (let o of n.keys())
        t.push(vt(o)); return `R3Injector[${t.join(", ")}]`; }
    processProvider(t) { t = P(t); let n = dn(t) ? t : P(t && t.provide), o = wN(t); if (!dn(t) && t.multi === !0) {
        let r = this.records.get(n);
        r || (r = Zn(void 0, qi, !0), r.factory = () => el(r.multi), this.records.set(n, r)), n = t, r.multi.push(t);
    } this.records.set(n, o); }
    hydrate(t, n, o) { let r = Qn(null); try {
        if (n.value === xg)
            throw ul(vt(t));
        return n.value === qi && (n.value = xg, n.value = n.factory(void 0, o)), typeof n.value == "object" && n.value && SN(n.value) && this._ngOnDestroyHooks.add(n.value), n.value;
    }
    finally {
        Qn(r);
    } }
    injectableDefInScope(t) { if (!t.providedIn)
        return !1; let n = P(t.providedIn); return typeof n == "string" ? n === "any" || this.scopes.has(n) : this.injectorDefTypes.has(n); }
    removeOnDestroy(t) { let n = this._onDestroyHooks.indexOf(t); n !== -1 && this._onDestroyHooks.splice(n, 1); }
};
function tl(e) { let t = vr(e), n = t !== null ? t.factory : qt(e); if (n !== null)
    return n; if (e instanceof M)
    throw new C(204, !1); if (e instanceof Function)
    return NN(e); throw new C(204, !1); }
function NN(e) { if (e.length > 0)
    throw new C(204, !1); let n = fN(e); return n !== null ? () => n.factory(e) : () => new e; }
function wN(e) { if (Wg(e))
    return Zn(void 0, e.useValue); {
    let t = El(e);
    return Zn(t, qi);
} }
function El(e, t, n) { let o; if (dn(e)) {
    let r = P(e);
    return qt(r) || tl(r);
}
else if (Wg(e))
    o = () => P(e.useValue);
else if (MN(e))
    o = () => e.useFactory(...el(e.deps || []));
else if (TN(e))
    o = (r, i) => he(P(e.useExisting), i !== void 0 && i & 8 ? 8 : void 0);
else {
    let r = P(e && (e.useClass || e.provide));
    if (_N(e))
        o = () => new r(...el(e.deps));
    else
        return qt(r) || tl(r);
} return o; }
function ar(e) { if (e.destroyed)
    throw new C(205, !1); }
function Zn(e, t, n = !1) { return { factory: e, value: t, multi: n ? [] : void 0 }; }
function _N(e) { return !!e.deps; }
function SN(e) { return e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"; }
function bN(e) { return typeof e == "function" || typeof e == "object" && e.ngMetadataName === "InjectionToken"; }
function nl(e, t) { for (let n of e)
    Array.isArray(n) ? nl(n, t) : n && ll(n) ? nl(n.\u0275providers, t) : t(n); }
function ss(e, t) { let n; e instanceof fn ? (ar(e), n = e) : n = new Xc(e); let o, r = nt(n), i = Ce(void 0); try {
    return t();
}
finally {
    nt(r), Ce(i);
} }
function as() { return Bg() !== void 0 || zc() != null; }
function AN(e) { if (!as())
    throw new C(-203, !1); }
var q = 0, v = 1, w = 2, Z = 3, me = 4, ue = 5, de = 6, Wt = 7, $ = 8, L = 9, Ke = 10, T = 11, zt = 12, Mr = 13, mn = 14, ne = 15, It = 16, vn = 17, rt = 18, je = 19, Il = 20, mt = 21, cs = 22, Gt = 23, ke = 24, yn = 25, Dt = 26, I = 27, Dl = 1, xe = 6, Je = 7, Nr = 8, En = 9, W = 10;
function oe(e) { return Array.isArray(e) && typeof e[Dl] == "object"; }
function X(e) { return Array.isArray(e) && e[Dl] === !0; }
function Cl(e) { return (e.flags & 4) !== 0; }
function Te(e) { return e.componentOffset > -1; }
function eo(e) { return (e.flags & 1) === 1; }
function Ve(e) { return !!e.template; }
function it(e) { return (e[w] & 512) !== 0; }
function Tl(e) { return (e.type & 16) === 16; }
function Qg(e) { return (e[w] & 32) === 32; }
function st(e) { return (e[w] & 256) === 256; }
var Ml = "svg", Nl = "math";
function F(e) { for (; Array.isArray(e);)
    e = e[q]; return e; }
function wr(e) { for (; Array.isArray(e);) {
    if (typeof e[Dl] == "object")
        return e;
    e = e[q];
} return null; }
function In(e, t) { return F(t[e]); }
function K(e, t) { return F(t[e.index]); }
function Zg(e, t) { let n = e === null ? -1 : e.index; return n !== -1 ? F(t[n]) : null; }
function Ct(e, t) { return e.data[t]; }
function Qt(e, t) { return e[t]; }
function _r(e, t, n, o) { n >= e.data.length && (e.data[n] = null, e.blueprint[n] = null), t[n] = o; }
function Ee(e, t) { let n = t[e]; return oe(n) ? n : n[q]; }
function Yg(e) { return (e[w] & 4) === 4; }
function ls(e) { return (e[w] & 128) === 128; }
function Kg(e) { return X(e[Z]); }
function ve(e, t) { return t == null ? null : e[t]; }
function wl(e) { e[vn] = 0; }
function us(e) { e[w] & 1024 || (e[w] |= 1024, ls(e) && Dn(e)); }
function _l(e, t) { for (; e > 0;)
    t = t[mn], e--; return t; }
function to(e) { return !!(e[w] & 9216 || e[ke]?.dirty); }
function ds(e) { e[Ke].changeDetectionScheduler?.notify(8), e[w] & 64 && (e[w] |= 1024), to(e) && Dn(e); }
function Dn(e) { e[Ke].changeDetectionScheduler?.notify(0); let t = yt(e); for (; t !== null && !(t[w] & 8192 || (t[w] |= 8192, !ls(t)));)
    t = yt(t); }
function Sr(e, t) { if (st(e))
    throw new C(911, !1); e[mt] === null && (e[mt] = []), e[mt].push(t); }
function fs(e, t) { if (e[mt] === null)
    return; let n = e[mt].indexOf(t); n !== -1 && e[mt].splice(n, 1); }
function yt(e) { let t = e[Z]; return X(t) ? t[Z] : t; }
function Sl(e) { return e[Wt] ??= []; }
function bl(e) { return e.cleanup ??= []; }
function Al(e, t, n, o) { let r = Sl(t); r.push(n), e.firstCreatePass && bl(e).push(o, r.length - 1); }
var A = { lFrame: ih(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var ol = !1;
function Jg() { return A.lFrame.elementDepthCount; }
function Xg() { A.lFrame.elementDepthCount++; }
function Rl() { A.lFrame.elementDepthCount--; }
function ps() { return A.bindingsEnabled; }
function br() { return A.skipHydrationRootTNode !== null; }
function Ol(e) { return A.skipHydrationRootTNode === e; }
function kl() { A.bindingsEnabled = !0; }
function eh(e) { A.skipHydrationRootTNode = e; }
function xl() { A.bindingsEnabled = !1; }
function Pl() { A.skipHydrationRootTNode = null; }
function h() { return A.lFrame.lView; }
function b() { return A.lFrame.tView; }
function Ll(e) { return A.lFrame.contextLView = e, e[$]; }
function Fl(e) { return A.lFrame.contextLView = null, e; }
function _() { let e = jl(); for (; e !== null && e.type === 64;)
    e = e.parent; return e; }
function jl() { return A.lFrame.currentTNode; }
function no() { let e = A.lFrame, t = e.currentTNode; return e.isParent ? t : t.parent; }
function at(e, t) { let n = A.lFrame; n.currentTNode = e, n.isParent = t; }
function Vl() { return A.lFrame.isParent; }
function Hl() { A.lFrame.isParent = !1; }
function Bl() { return A.lFrame.contextLView; }
function Ul() { return ol; }
function ur(e) { let t = ol; return ol = e, t; }
function Ie() { let e = A.lFrame, t = e.bindingRootIndex; return t === -1 && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t; }
function Xe() { return A.lFrame.bindingIndex; }
function $l(e) { return A.lFrame.bindingIndex = e; }
function fe() { return A.lFrame.bindingIndex++; }
function ct(e) { let t = A.lFrame, n = t.bindingIndex; return t.bindingIndex = t.bindingIndex + e, n; }
function th() { return A.lFrame.inI18n; }
function ql(e) { A.lFrame.inI18n = e; }
function nh(e, t) { let n = A.lFrame; n.bindingIndex = n.bindingRootIndex = e, gs(t); }
function oh() { return A.lFrame.currentDirectiveIndex; }
function gs(e) { A.lFrame.currentDirectiveIndex = e; }
function hs(e) { let t = A.lFrame.currentDirectiveIndex; return t === -1 ? null : e[t]; }
function ms() { return A.lFrame.currentQueryIndex; }
function Ar(e) { A.lFrame.currentQueryIndex = e; }
function RN(e) { let t = e[v]; return t.type === 2 ? t.declTNode : t.type === 1 ? e[ue] : null; }
function Gl(e, t, n) { if (n & 4) {
    let r = t, i = e;
    for (; r = r.parent, r === null && !(n & 1);)
        if (r = RN(i), r === null || (i = i[mn], r.type & 10))
            break;
    if (r === null)
        return !1;
    t = r, e = i;
} let o = A.lFrame = rh(); return o.currentTNode = t, o.lView = e, !0; }
function vs(e) { let t = rh(), n = e[v]; A.lFrame = t, t.currentTNode = n.firstChild, t.lView = e, t.tView = n, t.contextLView = e, t.bindingIndex = n.bindingStartIndex, t.inI18n = !1; }
function rh() { let e = A.lFrame, t = e === null ? null : e.child; return t === null ? ih(e) : t; }
function ih(e) { let t = { currentTNode: null, isParent: !0, lView: null, tView: null, selectedIndex: -1, contextLView: null, elementDepthCount: 0, currentNamespace: null, currentDirectiveIndex: -1, bindingRootIndex: -1, bindingIndex: -1, currentQueryIndex: 0, parent: e, child: null, inI18n: !1 }; return e !== null && (e.child = t), t; }
function sh() { let e = A.lFrame; return A.lFrame = e.parent, e.currentTNode = null, e.lView = null, e; }
var Wl = sh;
function ys() { let e = sh(); e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0; }
function ah(e) { return (A.lFrame.contextLView = _l(e, A.lFrame.contextLView))[$]; }
function pe() { return A.lFrame.selectedIndex; }
function Zt(e) { A.lFrame.selectedIndex = e; }
function Me() { let e = A.lFrame; return Ct(e.tView, e.selectedIndex); }
function zl() { A.lFrame.currentNamespace = Ml; }
function Ql() { A.lFrame.currentNamespace = Nl; }
function Zl() { ON(); }
function ON() { A.lFrame.currentNamespace = null; }
function Yl() { return A.lFrame.currentNamespace; }
var ch = !0;
function Rr() { return ch; }
function et(e) { ch = e; }
function rl(e, t = null, n = null, o) { let r = Kl(e, t, n, o); return r.resolveInjectorInitializers(), r; }
function Kl(e, t = null, n = null, o, r = new Set) { let i = [n || j, qg(e)]; return o = o || (typeof e == "object" ? void 0 : vt(e)), new fn(i, t || Xn(), o || null, r); }
var le = class e {
    static THROW_IF_NOT_FOUND = ln;
    static NULL = new lr;
    static create(t, n) { if (Array.isArray(t))
        return rl({ name: "" }, n, t, ""); {
        let o = t.name ?? "";
        return rl({ name: o }, t.parent, t.providers, o);
    } }
    static \u0275prov = U({ token: e, providedIn: "any", factory: () => he(hl) });
    static __NG_ELEMENT_ID__ = -1;
}, Yt = new M(""), He = (() => { class e {
    static __NG_ELEMENT_ID__ = kN;
    static __NG_ENV_ID__ = n => n;
} return e; })(), zi = class extends He {
    _lView;
    constructor(t) { super(), this._lView = t; }
    get destroyed() { return st(this._lView); }
    onDestroy(t) { let n = this._lView; return Sr(n, t), () => fs(n, t); }
};
function kN() { return new zi(h()); }
var Jl = !1, Xl = new M(""), Tt = (() => { class e {
    taskId = 0;
    pendingTasks = new Set;
    destroyed = !1;
    pendingTask = new Ig(!1);
    debugTaskTracker = E(Xl, { optional: !0 });
    get hasPendingTasks() { return this.destroyed ? !1 : this.pendingTask.value; }
    get hasPendingTasksObservable() { return this.destroyed ? new Eg(n => { n.next(!1), n.complete(); }) : this.pendingTask; }
    add() { !this.hasPendingTasks && !this.destroyed && this.pendingTask.next(!0); let n = this.taskId++; return this.pendingTasks.add(n), this.debugTaskTracker?.add(n), n; }
    has(n) { return this.pendingTasks.has(n); }
    remove(n) { this.pendingTasks.delete(n), this.debugTaskTracker?.remove(n), this.pendingTasks.size === 0 && this.hasPendingTasks && this.pendingTask.next(!1); }
    ngOnDestroy() { this.pendingTasks.clear(), this.hasPendingTasks && this.pendingTask.next(!1), this.destroyed = !0, this.pendingTask.unsubscribe(); }
    static \u0275prov = U({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), il = class extends ir {
    __isAsync;
    destroyRef = void 0;
    pendingTasks = void 0;
    constructor(t = !1) { super(), this.__isAsync = t, as() && (this.destroyRef = E(He, { optional: !0 }) ?? void 0, this.pendingTasks = E(Tt, { optional: !0 }) ?? void 0); }
    emit(t) { let n = O(null); try {
        super.next(t);
    }
    finally {
        O(n);
    } }
    subscribe(t, n, o) { let r = t, i = n || (() => null), s = o; if (t && typeof t == "object") {
        let c = t;
        r = c.next?.bind(c), i = c.error?.bind(c), s = c.complete?.bind(c);
    } this.__isAsync && (i = this.wrapInTimeout(i), r && (r = this.wrapInTimeout(r)), s && (s = this.wrapInTimeout(s))); let a = super.subscribe({ next: r, error: i, complete: s }); return t instanceof qn && t.add(a), a; }
    wrapInTimeout(t) { return n => { let o = this.pendingTasks?.add(); setTimeout(() => { try {
        t(n);
    }
    finally {
        o !== void 0 && this.pendingTasks?.remove(o);
    } }); }; }
}, ht = il;
function Qi(...e) { }
function eu(e) { let t, n; function o() { e = Qi; try {
    n !== void 0 && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(n), t !== void 0 && clearTimeout(t);
}
catch { } } return t = setTimeout(() => { e(), o(); }), typeof requestAnimationFrame == "function" && (n = requestAnimationFrame(() => { e(), o(); })), () => o(); }
function lh(e) { return queueMicrotask(() => e()), () => { e = Qi; }; }
var tu = "isAngularZone", dr = tu + "_ID", xN = 0, G = class e {
    hasPendingMacrotasks = !1;
    hasPendingMicrotasks = !1;
    isStable = !0;
    onUnstable = new ht(!1);
    onMicrotaskEmpty = new ht(!1);
    onStable = new ht(!1);
    onError = new ht(!1);
    constructor(t) { let { enableLongStackTrace: n = !1, shouldCoalesceEventChangeDetection: o = !1, shouldCoalesceRunChangeDetection: r = !1, scheduleInRootZone: i = Jl } = t; if (typeof Zone > "u")
        throw new C(908, !1); Zone.assertZonePatched(); let s = this; s._nesting = 0, s._outer = s._inner = Zone.current, Zone.TaskTrackingZoneSpec && (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec)), n && Zone.longStackTraceZoneSpec && (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)), s.shouldCoalesceEventChangeDetection = !r && o, s.shouldCoalesceRunChangeDetection = r, s.callbackScheduled = !1, s.scheduleInRootZone = i, FN(s); }
    static isInAngularZone() { return typeof Zone < "u" && Zone.current.get(tu) === !0; }
    static assertInAngularZone() { if (!e.isInAngularZone())
        throw new C(909, !1); }
    static assertNotInAngularZone() { if (e.isInAngularZone())
        throw new C(909, !1); }
    run(t, n, o) { return this._inner.run(t, n, o); }
    runTask(t, n, o, r) { let i = this._inner, s = i.scheduleEventTask("NgZoneEvent: " + r, t, PN, Qi, Qi); try {
        return i.runTask(s, n, o);
    }
    finally {
        i.cancelTask(s);
    } }
    runGuarded(t, n, o) { return this._inner.runGuarded(t, n, o); }
    runOutsideAngular(t) { return this._outer.run(t); }
}, PN = {};
function nu(e) { if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
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
function LN(e) { if (e.isCheckStableRunning || e.callbackScheduled)
    return; e.callbackScheduled = !0; function t() { eu(() => { e.callbackScheduled = !1, sl(e), e.isCheckStableRunning = !0, nu(e), e.isCheckStableRunning = !1; }); } e.scheduleInRootZone ? Zone.root.run(() => { t(); }) : e._outer.run(() => { t(); }), sl(e); }
function FN(e) { let t = () => { LN(e); }, n = xN++; e._inner = e._inner.fork({ name: "angular", properties: { [tu]: !0, [dr]: n, [dr + n]: !0 }, onInvokeTask: (o, r, i, s, a, c) => { if (jN(c))
        return o.invokeTask(i, s, a, c); try {
        return Pg(e), o.invokeTask(i, s, a, c);
    }
    finally {
        (e.shouldCoalesceEventChangeDetection && s.type === "eventTask" || e.shouldCoalesceRunChangeDetection) && t(), Lg(e);
    } }, onInvoke: (o, r, i, s, a, c, l) => { try {
        return Pg(e), o.invoke(i, s, a, c, l);
    }
    finally {
        e.shouldCoalesceRunChangeDetection && !e.callbackScheduled && !VN(c) && t(), Lg(e);
    } }, onHasTask: (o, r, i, s) => { o.hasTask(i, s), r === i && (s.change == "microTask" ? (e._hasPendingMicrotasks = s.microTask, sl(e), nu(e)) : s.change == "macroTask" && (e.hasPendingMacrotasks = s.macroTask)); }, onHandleError: (o, r, i, s) => (o.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1) }); }
function sl(e) { e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && e.callbackScheduled === !0 ? e.hasPendingMicrotasks = !0 : e.hasPendingMicrotasks = !1; }
function Pg(e) { e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null)); }
function Lg(e) { e._nesting--, nu(e); }
var fr = class {
    hasPendingMicrotasks = !1;
    hasPendingMacrotasks = !1;
    isStable = !0;
    onUnstable = new ht;
    onMicrotaskEmpty = new ht;
    onStable = new ht;
    onError = new ht;
    run(t, n, o) { return t.apply(n, o); }
    runGuarded(t, n, o) { return t.apply(n, o); }
    runOutsideAngular(t) { return t(); }
    runTask(t, n, o, r) { return t.apply(n, o); }
};
function jN(e) { return uh(e, "__ignore_ng_zone__"); }
function VN(e) { return uh(e, "__scheduler_tick__"); }
function uh(e, t) { return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0; }
var Et = class {
    _console = console;
    handleError(t) { this._console.error("ERROR", t); }
}, Mt = new M("", { factory: () => { let e = E(G), t = E(be), n; return o => { e.runOutsideAngular(() => { t.destroyed && !n ? setTimeout(() => { throw o; }) : (n ??= t.get(Et), n.handleError(o)); }); }; } }), ou = { provide: Fe, useValue: () => { let e = E(Et, { optional: !0 }); }, multi: !0 }, HN = new M("", { factory: () => { if (typeof ngServerMode < "u" && ngServerMode)
        return; let e = E(Yt).defaultView; if (!e)
        return; let t = E(Mt), n = i => { t(i.reason), i.preventDefault(); }, o = i => { i.error ? t(i.error) : t(new Error(i.message, { cause: i })), i.preventDefault(); }, r = () => { e.addEventListener("unhandledrejection", n), e.addEventListener("error", o); }; typeof Zone < "u" ? Zone.root.run(r) : r(), E(He).onDestroy(() => { e.removeEventListener("error", o), e.removeEventListener("unhandledrejection", n); }); } });
function BN() { return Ye([$g(() => { E(HN); })]); }
function UN(e) { return null; }
function Kt(e, t) { let [n, o, r] = Sg(e, t?.equal), i = n, s = i[J]; return i.set = o, i.update = r, i.asReadonly = oo.bind(i), i; }
function oo() { let e = this[J]; if (e.readonlyFn === void 0) {
    let t = () => this();
    t[J] = e, e.readonlyFn = t;
} return e.readonlyFn; }
function $N(e, t) { if (Vi() !== null)
    throw new C(-602, !1); }
var ro = (() => { class e {
    view;
    node;
    constructor(n, o) { this.view = n, this.node = o; }
    static __NG_ELEMENT_ID__ = qN;
} return e; })();
function qN() { return new ro(h(), _()); }
var ze = class {
}, io = new M("", { factory: () => !0 }), GN = new M("", { factory: () => !1 }), Es = new M(""), Or = (() => { class e {
    internalPendingTasks = E(Tt);
    scheduler = E(ze);
    errorHandler = E(Mt);
    add() { let n = this.internalPendingTasks.add(); return () => { this.internalPendingTasks.has(n) && (this.scheduler.notify(11), this.internalPendingTasks.remove(n)); }; }
    run(n) { let o = this.add(); n().catch(this.errorHandler).finally(o); }
    static \u0275prov = U({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Is = (() => { class e {
    static \u0275prov = U({ token: e, providedIn: "root", factory: () => new al });
} return e; })(), al = class {
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
}, Zi = class {
    [J];
    constructor(t) { this[J] = t; }
    destroy() { this[J].destroy(); }
};
function ru(e, t) { let n = t?.injector ?? E(le), o = t?.manualCleanup !== !0 ? n.get(He) : null, r, i = n.get(ro, null, { optional: !0 }), s = n.get(ze); return i !== null ? (r = QN(i.view, s, e), o instanceof zi && o._lView === i.view && (o = null)) : r = ZN(e, n.get(Is), s), r.injector = n, o !== null && (r.onDestroyFns = [o.onDestroy(() => r.destroy())]), new Zi(r); }
var dh = ae(H({}, Ag), { cleanupFns: void 0, zone: null, onDestroyFns: null, run() { let e = ur(!1); try {
        Rg(this);
    }
    finally {
        ur(e);
    } }, cleanup() { if (!this.cleanupFns?.length)
        return; let e = O(null); try {
        for (; this.cleanupFns.length;)
            this.cleanupFns.pop()();
    }
    finally {
        this.cleanupFns = [], O(e);
    } } }), WN = ae(H({}, dh), { consumerMarkedDirty() { this.scheduler.schedule(this), this.notifier.notify(12); }, destroy() { if ($t(this), this.onDestroyFns !== null)
        for (let e of this.onDestroyFns)
            e(); this.cleanup(), this.scheduler.remove(this); } }), zN = ae(H({}, dh), { consumerMarkedDirty() { this.view[w] |= 8192, Dn(this.view), this.notifier.notify(13); }, destroy() { if ($t(this), this.onDestroyFns !== null)
        for (let e of this.onDestroyFns)
            e(); this.cleanup(), this.view[Gt]?.delete(this); } });
function QN(e, t, n) { let o = Object.create(zN); return o.view = e, o.zone = typeof Zone < "u" ? Zone.current : null, o.notifier = t, o.fn = fh(o, n), e[Gt] ??= new Set, e[Gt].add(o), o.consumerMarkedDirty(o), o; }
function ZN(e, t, n) { let o = Object.create(WN); return o.fn = fh(o, e), o.scheduler = t, o.notifier = n, o.zone = typeof Zone < "u" ? Zone.current : null, o.scheduler.add(o), o.notifier.notify(12), o; }
function fh(e, t) { return () => { t(n => (e.cleanupFns ??= []).push(n)); }; }
function Ne(e) { return bg(e); }
import { setActiveConsumer as co } from "@angular/core/primitives/signals";
var so = { JSACTION: "jsaction" };
function ut(e) { return { toString: e }.toString(); }
var lo = "__annotations__", uo = "__parameters__", fo = "__prop__metadata__";
function li(e, t, n, o, r) { return ut(() => { let i = _d(t); function s(...a) { if (this instanceof s)
    return i.call(this, ...a), this; let c = new s(...a); return function (u) { return r && r(u, ...a), (u.hasOwnProperty(lo) ? u[lo] : Object.defineProperty(u, lo, { value: [] })[lo]).push(c), u; }; } return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = e, s.annotationCls = s, s; }); }
function _d(e) { return function (...n) { if (e) {
    let o = e(...n);
    for (let r in o)
        this[r] = o[r];
} }; }
function Fo(e, t, n) { return ut(() => { let o = _d(t); function r(...i) { if (this instanceof r)
    return o.apply(this, i), this; let s = new r(...i); return a.annotation = s, a; function a(c, l, u) { let d = c.hasOwnProperty(uo) ? c[uo] : Object.defineProperty(c, uo, { value: [] })[uo]; for (; d.length <= u;)
    d.push(null); return (d[u] = d[u] || []).push(s), c; } } return r.prototype.ngMetadataName = e, r.annotationCls = r, r; }); }
function Rt(e, t, n, o) { return ut(() => { let r = _d(t); function i(...s) { if (this instanceof i)
    return r.apply(this, s), this; let a = new i(...s); function c(l, u) { if (l === void 0)
    throw new Error("Standard Angular field decorators are not supported in JIT mode."); let d = l.constructor, f = d.hasOwnProperty(fo) ? d[fo] : Object.defineProperty(d, fo, { value: {} })[fo]; f[u] = f.hasOwnProperty(u) && f[u] || [], f[u].unshift(a); } return c; } return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i; }); }
var Am = Kn(Fo("Inject", e => ({ token: e })), -1), Rm = Kn(Fo("Optional"), 8), Om = Kn(Fo("Self"), 2), km = Kn(Fo("SkipSelf"), 4), xm = Kn(Fo("Host"), 1);
function se(e) { let t = Ae.ng; if (t && t.\u0275compilerFacade)
    return t.\u0275compilerFacade; throw new Error("JIT compiler unavailable"); }
var ph = { \u0275\u0275defineInjectable: U, \u0275\u0275defineInjector: mr, \u0275\u0275inject: he, \u0275\u0275invalidFactoryDep: ns, resolveForwardRef: P }, Pm = Function;
function Pr(e) { return typeof e == "function"; }
var YN = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/, KN = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/, JN = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/, XN = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{[^}]*super\(\.\.\.arguments\)/;
function ew(e) { return YN.test(e) || XN.test(e) || KN.test(e) && !JN.test(e); }
var Us = class {
    _reflect;
    constructor(t) { this._reflect = t || Ae.Reflect; }
    factory(t) { return (...n) => new t(...n); }
    _zipTypesAndAnnotations(t, n) { let o; typeof t > "u" ? o = Cr(n.length) : o = Cr(t.length); for (let r = 0; r < o.length; r++)
        typeof t > "u" ? o[r] = [] : t[r] && t[r] != Object ? o[r] = [t[r]] : o[r] = [], n && n[r] != null && (o[r] = o[r].concat(n[r])); return o; }
    _ownParameters(t, n) { let o = t.toString(); if (ew(o))
        return null; if (t.parameters && t.parameters !== n.parameters)
        return t.parameters; let r = t.ctorParameters; if (r && r !== n.ctorParameters) {
        let a = typeof r == "function" ? r() : r, c = a.map(u => u && u.type), l = a.map(u => u && iu(u.decorators));
        return this._zipTypesAndAnnotations(c, l);
    } let i = t.hasOwnProperty(uo) && t[uo], s = this._reflect && this._reflect.getOwnMetadata && this._reflect.getOwnMetadata("design:paramtypes", t); return s || i ? this._zipTypesAndAnnotations(s, i) : Cr(t.length); }
    parameters(t) { if (!Pr(t))
        return []; let n = Ds(t), o = this._ownParameters(t, n); return !o && n !== Object && (o = this.parameters(n)), o || []; }
    _ownAnnotations(t, n) { if (t.annotations && t.annotations !== n.annotations) {
        let o = t.annotations;
        return typeof o == "function" && o.annotations && (o = o.annotations), o;
    } return t.decorators && t.decorators !== n.decorators ? iu(t.decorators) : t.hasOwnProperty(lo) ? t[lo] : null; }
    annotations(t) { if (!Pr(t))
        return []; let n = Ds(t), o = this._ownAnnotations(t, n) || []; return (n !== Object ? this.annotations(n) : []).concat(o); }
    _ownPropMetadata(t, n) { if (t.propMetadata && t.propMetadata !== n.propMetadata) {
        let o = t.propMetadata;
        return typeof o == "function" && o.propMetadata && (o = o.propMetadata), o;
    } if (t.propDecorators && t.propDecorators !== n.propDecorators) {
        let o = t.propDecorators, r = {};
        return Object.keys(o).forEach(i => { r[i] = iu(o[i]); }), r;
    } return t.hasOwnProperty(fo) ? t[fo] : null; }
    propMetadata(t) { if (!Pr(t))
        return {}; let n = Ds(t), o = {}; if (n !== Object) {
        let i = this.propMetadata(n);
        Object.keys(i).forEach(s => { o[s] = i[s]; });
    } let r = this._ownPropMetadata(t, n); return r && Object.keys(r).forEach(i => { let s = []; o.hasOwnProperty(i) && s.push(...o[i]), s.push(...r[i]), o[i] = s; }), o; }
    ownPropMetadata(t) { return Pr(t) ? this._ownPropMetadata(t, Ds(t)) || {} : {}; }
    hasLifecycleHook(t, n) { return t instanceof Pm && n in t.prototype; }
};
function iu(e) { return e ? e.map(t => { let o = t.type.annotationCls, r = t.args ? t.args : []; return new o(...r); }) : []; }
function Ds(e) { let t = e.prototype ? Object.getPrototypeOf(e.prototype) : null; return (t ? t.constructor : null) || Object; }
function Lm(e, t, n, o) { t !== null ? t.applyValueToInputSignal(t, o) : e[n] = o; }
var $s = class {
    previousValue;
    currentValue;
    firstChange;
    constructor(t, n, o) { this.previousValue = t, this.currentValue = n, this.firstChange = o; }
    isFirstChange() { return this.firstChange; }
}, Fm = (() => { let e = () => jm; return e.ngInherit = !0, e; })();
function jm(e) { return e.type.prototype.ngOnChanges && (e.setInput = nw), tw; }
function tw() { let e = Hm(this), t = e?.current; if (t) {
    let n = e.previous;
    if (n === Le)
        e.previous = t;
    else
        for (let o in t)
            n[o] = t[o];
    e.current = null, this.ngOnChanges(t);
} }
function nw(e, t, n, o, r) { let i = this.declaredInputs[o], s = Hm(e) || ow(e, { previous: Le, current: null }), a = s.current || (s.current = {}), c = s.previous, l = c[i]; a[i] = new $s(l && l.currentValue, n, c === Le), Lm(e, t, r, n); }
var Vm = "__ngSimpleChanges__";
function Hm(e) { return e[Vm] || null; }
function ow(e, t) { return e[Vm] = t; }
var gh = [];
var V = function (e, t = null, n) { for (let o = 0; o < gh.length; o++) {
    let r = gh[o];
    r(e, t, n);
} }, k = (function (e) { return e[e.TemplateCreateStart = 0] = "TemplateCreateStart", e[e.TemplateCreateEnd = 1] = "TemplateCreateEnd", e[e.TemplateUpdateStart = 2] = "TemplateUpdateStart", e[e.TemplateUpdateEnd = 3] = "TemplateUpdateEnd", e[e.LifecycleHookStart = 4] = "LifecycleHookStart", e[e.LifecycleHookEnd = 5] = "LifecycleHookEnd", e[e.OutputStart = 6] = "OutputStart", e[e.OutputEnd = 7] = "OutputEnd", e[e.BootstrapApplicationStart = 8] = "BootstrapApplicationStart", e[e.BootstrapApplicationEnd = 9] = "BootstrapApplicationEnd", e[e.BootstrapComponentStart = 10] = "BootstrapComponentStart", e[e.BootstrapComponentEnd = 11] = "BootstrapComponentEnd", e[e.ChangeDetectionStart = 12] = "ChangeDetectionStart", e[e.ChangeDetectionEnd = 13] = "ChangeDetectionEnd", e[e.ChangeDetectionSyncStart = 14] = "ChangeDetectionSyncStart", e[e.ChangeDetectionSyncEnd = 15] = "ChangeDetectionSyncEnd", e[e.AfterRenderHooksStart = 16] = "AfterRenderHooksStart", e[e.AfterRenderHooksEnd = 17] = "AfterRenderHooksEnd", e[e.ComponentStart = 18] = "ComponentStart", e[e.ComponentEnd = 19] = "ComponentEnd", e[e.DeferBlockStateStart = 20] = "DeferBlockStateStart", e[e.DeferBlockStateEnd = 21] = "DeferBlockStateEnd", e[e.DynamicComponentStart = 22] = "DynamicComponentStart", e[e.DynamicComponentEnd = 23] = "DynamicComponentEnd", e[e.HostBindingsUpdateStart = 24] = "HostBindingsUpdateStart", e[e.HostBindingsUpdateEnd = 25] = "HostBindingsUpdateEnd", e; })(k || {});
function rw(e, t, n) { let { ngOnChanges: o, ngOnInit: r, ngDoCheck: i } = t.type.prototype; if (o) {
    let s = jm(t);
    (n.preOrderHooks ??= []).push(e, s), (n.preOrderCheckHooks ??= []).push(e, s);
} r && (n.preOrderHooks ??= []).push(0 - e, r), i && ((n.preOrderHooks ??= []).push(e, i), (n.preOrderCheckHooks ??= []).push(e, i)); }
function Bm(e, t) { for (let n = t.directiveStart, o = t.directiveEnd; n < o; n++) {
    let i = e.data[n].type.prototype, { ngAfterContentInit: s, ngAfterContentChecked: a, ngAfterViewInit: c, ngAfterViewChecked: l, ngOnDestroy: u } = i;
    s && (e.contentHooks ??= []).push(-n, s), a && ((e.contentHooks ??= []).push(n, a), (e.contentCheckHooks ??= []).push(n, a)), c && (e.viewHooks ??= []).push(-n, c), l && ((e.viewHooks ??= []).push(n, l), (e.viewCheckHooks ??= []).push(n, l)), u != null && (e.destroyHooks ??= []).push(n, u);
} }
function Os(e, t, n) { Um(e, t, 3, n); }
function ks(e, t, n, o) { (e[w] & 3) === n && Um(e, t, n, o); }
function su(e, t) { let n = e[w]; (n & 3) === t && (n &= 16383, n += 1, e[w] = n); }
function Um(e, t, n, o) { let r = o !== void 0 ? e[vn] & 65535 : 0, i = o ?? -1, s = t.length - 1, a = 0; for (let c = r; c < s; c++)
    if (typeof t[c + 1] == "number") {
        if (a = t[c], o != null && a >= o)
            break;
    }
    else
        t[c] < 0 && (e[vn] += 65536), (a < i || i == -1) && (iw(e, n, t, c), e[vn] = (e[vn] & 4294901760) + c + 2), c++; }
function hh(e, t) { V(k.LifecycleHookStart, e, t); let n = O(null); try {
    t.call(e);
}
finally {
    O(n), V(k.LifecycleHookEnd, e, t);
} }
function iw(e, t, n, o) { let r = n[o] < 0, i = n[o + 1], s = r ? -n[o] : n[o], a = e[s]; r ? e[w] >> 14 < e[vn] >> 16 && (e[w] & 3) === t && (e[w] += 16384, hh(a, i)) : hh(a, i); }
var mo = -1, _n = class {
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
function ya(e) { return e != null && typeof e == "object" && (e.insertBeforeIndex === null || typeof e.insertBeforeIndex == "number" || Array.isArray(e.insertBeforeIndex)); }
function $m(e) { return !!(e.type & 128); }
function sw(e) { return (e.flags & 8) !== 0; }
function aw(e) { return (e.flags & 16) !== 0; }
function cw(e, t, n) { let o = 0; for (; o < n.length;) {
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
        lw(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), o++;
    }
} return o; }
function Sd(e) { return e === 3 || e === 4 || e === 6; }
function lw(e) { return e.charCodeAt(0) === 64; }
function Mo(e, t) { if (!(t === null || t.length === 0))
    if (e === null || e.length === 0)
        e = t.slice();
    else {
        let n = -1;
        for (let o = 0; o < t.length; o++) {
            let r = t[o];
            typeof r == "number" ? n = r : n === 0 || (n === -1 || n === 2 ? mh(e, n, r, null, t[++o]) : mh(e, n, r, null, null));
        }
    } return e; }
function mh(e, t, n, o, r) { let i = 0, s = e.length; if (t === -1)
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
function qm(e) { return e !== mo; }
function qs(e) { return e & 32767; }
function uw(e) { return e >> 16; }
function Gs(e, t) { let n = uw(e), o = t; for (; n > 0;)
    o = o[mn], n--; return o; }
var bu = !0;
function Ws(e) { let t = bu; return bu = e, t; }
var dw = 256, Gm = dw - 1, Wm = 5, fw = 0, lt = {};
function pw(e, t, n) { let o; typeof n == "string" ? o = n.charCodeAt(0) || 0 : n.hasOwnProperty(gn) && (o = n[gn]), o == null && (o = n[gn] = fw++); let r = o & Gm, i = 1 << r; t.data[e + (r >> Wm)] |= i; }
function zs(e, t) { let n = zm(e, t); if (n !== -1)
    return n; let o = t[v]; o.firstCreatePass && (e.injectorIndex = t.length, au(o.data, e), au(t, null), au(o.blueprint, null)); let r = bd(e, t), i = e.injectorIndex; if (qm(r)) {
    let s = qs(r), a = Gs(r, t), c = a[v].data;
    for (let l = 0; l < 8; l++)
        t[i + l] = a[s + l] | c[s + l];
} return t[i + 8] = r, i; }
function au(e, t) { e.push(0, 0, 0, 0, 0, 0, 0, 0, t); }
function zm(e, t) { return e.injectorIndex === -1 || e.parent && e.parent.injectorIndex === e.injectorIndex || t[e.injectorIndex + 8] === null ? -1 : e.injectorIndex; }
function bd(e, t) { if (e.parent && e.parent.injectorIndex !== -1)
    return e.parent.injectorIndex; let n = 0, o = null, r = t; for (; r !== null;) {
    if (o = Xm(r), o === null)
        return mo;
    if (n++, r = r[mn], o.injectorIndex !== -1)
        return o.injectorIndex | n << 16;
} return mo; }
function Au(e, t, n) { pw(e, t, n); }
function gw(e, t) { if (t === "class")
    return e.classes; if (t === "style")
    return e.styles; let n = e.attrs; if (n) {
    let o = n.length, r = 0;
    for (; r < o;) {
        let i = n[r];
        if (Sd(i))
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
function Qm(e, t, n) { if (n & 8 || e !== void 0)
    return e; ts(t, "NodeInjector"); }
function Zm(e, t, n, o) { if (n & 8 && o === void 0 && (o = null), (n & 3) === 0) {
    let r = e[L], i = Ce(void 0);
    try {
        return r ? r.get(t, o, n & 8) : dl(t, o, n & 8);
    }
    finally {
        Ce(i);
    }
} return Qm(o, t, n); }
function Ym(e, t, n, o = 0, r) { if (e !== null) {
    if (t[w] & 2048 && !(o & 2)) {
        let s = yw(e, t, n, o, lt);
        if (s !== lt)
            return s;
    }
    let i = Km(e, t, n, o, lt);
    if (i !== lt)
        return i;
} return Zm(t, n, o, r); }
function Km(e, t, n, o, r) { let i = mw(n); if (typeof i == "function") {
    if (!Gl(t, e, o))
        return o & 1 ? Qm(r, n, o) : Zm(t, n, o, r);
    try {
        let s;
        if (s = i(o), s == null && !(o & 8))
            ts(n);
        else
            return s;
    }
    finally {
        Wl();
    }
}
else if (typeof i == "number") {
    let s = null, a = zm(e, t), c = mo, l = o & 1 ? t[ne][ue] : null;
    for ((a === -1 || o & 4) && (c = a === -1 ? bd(e, t) : t[a + 8], c === mo || !yh(o, !1) ? a = -1 : (s = t[v], a = qs(c), t = Gs(c, t))); a !== -1;) {
        let u = t[v];
        if (vh(i, a, u.data)) {
            let d = hw(a, t, n, s, o, l);
            if (d !== lt)
                return d;
        }
        c = t[a + 8], c !== mo && yh(o, t[v].data[a + 8] === l) && vh(i, a, t) ? (s = u, a = qs(c), t = Gs(c, t)) : a = -1;
    }
} return r; }
function hw(e, t, n, o, r, i) { let s = t[v], a = s.data[e + 8], c = o == null ? Te(a) && bu : o != s && (a.type & 3) !== 0, l = r & 1 && i === a, u = xs(a, s, n, c, l); return u !== null ? Qr(t, s, u, a, r) : lt; }
function xs(e, t, n, o, r) { let i = e.providerIndexes, s = t.data, a = i & 1048575, c = e.directiveStart, l = e.directiveEnd, u = i >> 20, d = o ? a : a + u, f = r ? a + u : l; for (let p = d; p < f; p++) {
    let g = s[p];
    if (p < c && n === g || p >= c && g.type === n)
        return p;
} if (r) {
    let p = s[c];
    if (p && Ve(p) && p.type === n)
        return c;
} return null; }
function Qr(e, t, n, o, r) { let i = e[n], s = t.data; if (i instanceof _n) {
    let a = i;
    if (a.resolving) {
        let p = Oe(s[n]);
        throw ul(p);
    }
    let c = Ws(a.canSeeViewProviders);
    a.resolving = !0;
    let l = s[n].type || s[n], u, d = a.injectImpl ? Ce(a.injectImpl) : null, f = Gl(e, o, 0);
    try {
        i = e[n] = a.factory(void 0, r, s, e, o), t.firstCreatePass && n >= o.directiveStart && rw(n, s[n], t);
    }
    finally {
        d !== null && Ce(d), Ws(c), a.resolving = !1, Wl();
    }
} return i; }
function mw(e) { if (typeof e == "string")
    return e.charCodeAt(0) || 0; let t = e.hasOwnProperty(gn) ? e[gn] : void 0; return typeof t == "number" ? t >= 0 ? t & Gm : vw : t; }
function vh(e, t, n) { let o = 1 << e; return !!(n[t + (e >> Wm)] & o); }
function yh(e, t) { return !(e & 2) && !(e & 1 && t); }
var en = class {
    _tNode;
    _lView;
    constructor(t, n) { this._tNode = t, this._lView = n; }
    get(t, n, o) { return Ym(this._tNode, this._lView, t, un(o), n); }
};
function vw() { return new en(_(), h()); }
function Jm(e) { return ut(() => { let t = e.prototype.constructor, n = t[ot] || Ru(t), o = Object.prototype, r = Object.getPrototypeOf(e.prototype).constructor; for (; r && r !== o;) {
    let i = r[ot] || Ru(r);
    if (i && i !== n)
        return i;
    r = Object.getPrototypeOf(r);
} return i => new i; }); }
function Ru(e) { return hr(e) ? () => { let t = Ru(P(e)); return t && t(); } : qt(e); }
function yw(e, t, n, o, r) { let i = e, s = t; for (; i !== null && s !== null && s[w] & 2048 && !it(s);) {
    let a = Km(i, s, n, o | 2, lt);
    if (a !== lt)
        return a;
    let c = i.parent;
    if (!c) {
        let l = s[Il];
        if (l) {
            let u = l.get(n, lt, o);
            if (u !== lt)
                return u;
        }
        c = Xm(s), s = s[mn];
    }
    i = c;
} return r; }
function Xm(e) { let t = e[v], n = t.type; return n === 2 ? t.declTNode : n === 1 ? e[ue] : null; }
function Ea(e) { return gw(_(), e); }
var ev = Fo("Attribute", e => ({ attributeName: e, __NG_ELEMENT_ID__: () => Ea(e) })), Eh = null;
function Ad() { return Eh = Eh || new Us; }
function Ia(e) { return tv(Ad().parameters(e)); }
function tv(e) { return e.map(t => Ew(t)); }
function Ew(e) { let t = { token: null, attribute: null, host: !1, optional: !1, self: !1, skipSelf: !1 }; if (Array.isArray(e) && e.length > 0)
    for (let n = 0; n < e.length; n++) {
        let o = e[n];
        if (o === void 0)
            continue;
        let r = Object.getPrototypeOf(o);
        if (o instanceof Rm || r.ngMetadataName === "Optional")
            t.optional = !0;
        else if (o instanceof km || r.ngMetadataName === "SkipSelf")
            t.skipSelf = !0;
        else if (o instanceof Om || r.ngMetadataName === "Self")
            t.self = !0;
        else if (o instanceof xm || r.ngMetadataName === "Host")
            t.host = !0;
        else if (o instanceof Am)
            t.token = o.token;
        else if (o instanceof ev) {
            if (o.attributeName === void 0)
                throw new C(204, !1);
            t.attribute = o.attributeName;
        }
        else
            t.token = o;
    }
else
    e === void 0 || Array.isArray(e) && e.length === 0 ? t.token = null : t.token = e; return t; }
function Iw(e, t) { let n = null, o = null; e.hasOwnProperty(Yn) || Object.defineProperty(e, Yn, { get: () => (n === null && (n = se({ usage: 0, kind: "injectable", type: e }).compileInjectable(ph, `ng:///${e.name}/\u0275prov.js`, Mw(e, t))), n) }), e.hasOwnProperty(ot) || Object.defineProperty(e, ot, { get: () => { if (o === null) {
        let r = se({ usage: 0, kind: "injectable", type: e });
        o = r.compileFactory(ph, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, typeArgumentCount: 0, deps: Ia(e), target: r.FactoryTarget.Injectable });
    } return o; }, configurable: !0 }); }
var Dw = S({ provide: String, useValue: S });
function Ih(e) { return e.useClass !== void 0; }
function Cw(e) { return Dw in e; }
function Dh(e) { return e.useFactory !== void 0; }
function Tw(e) { return e.useExisting !== void 0; }
function Mw(e, t) { let n = t || { providedIn: null }, o = { name: e.name, type: e, typeArgumentCount: 0, providedIn: n.providedIn }; return (Ih(n) || Dh(n)) && n.deps !== void 0 && (o.deps = tv(n.deps)), Ih(n) ? o.useClass = n.useClass : Cw(n) ? o.useValue = n.useValue : Dh(n) ? o.useFactory = n.useFactory : Tw(n) && (o.useExisting = n.useExisting), o; }
var Nw = li("Injectable", void 0, void 0, void 0, (e, t) => Iw(e, t));
function ww() { return jo(_(), h()); }
function jo(e, t) { return new ui(K(e, t)); }
var ui = (() => { class e {
    nativeElement;
    constructor(n) { this.nativeElement = n; }
    static __NG_ELEMENT_ID__ = ww;
} return e; })();
function nv(e) { return e instanceof ui ? e.nativeElement : e; }
function _w() { return this._results[Symbol.iterator](); }
var Qs = class {
    _emitDistinctChangesOnly;
    dirty = !0;
    _onDirty = void 0;
    _results = [];
    _changesDetected = !1;
    _changes = void 0;
    length = 0;
    first = void 0;
    last = void 0;
    get changes() { return this._changes ??= new ir; }
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
    reset(t, n) { this.dirty = !1; let o = Ze(t); (this._changesDetected = !Ug(this._results, o, n)) && (this._results = o, this.length = o.length, this.last = o[this.length - 1], this.first = o[0]); }
    notifyOnChanges() { this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.next(this); }
    onDirty(t) { this._onDirty = t; }
    setDirty() { this.dirty = !0, this._onDirty?.(); }
    destroy() { this._changes !== void 0 && (this._changes.complete(), this._changes.unsubscribe()); }
    [Symbol.iterator] = _w;
}, Vo = "ngSkipHydration", Sw = "ngskiphydration";
function Rd(e) { let t = e.mergedAttrs; if (t === null)
    return !1; for (let n = 0; n < t.length; n += 2) {
    let o = t[n];
    if (typeof o == "number")
        return !1;
    if (typeof o == "string" && o.toLowerCase() === Sw)
        return !0;
} return !1; }
function ov(e) { return e.hasAttribute(Vo); }
function Zr(e) { return (e.flags & 128) === 128; }
function Ho(e) { if (Zr(e))
    return !0; let t = e.parent; for (; t;) {
    if (Zr(e) || Rd(t))
        return !0;
    t = t.parent;
} return !1; }
function rv(e) { return Zr(e) || Rd(e) || Ho(e); }
var Da = (function (e) { return e[e.OnPush = 0] = "OnPush", e[e.Default = 1] = "Default", e; })(Da || {}), Ca = new Map, bw = 0;
function Aw() { return bw++; }
function Rw(e) { Ca.set(e[je], e); }
function iv(e) { return Ca.get(e) || null; }
function Ou(e) { Ca.delete(e[je]); }
function Ow() { return Ca; }
var Zs = class {
    lViewId;
    nodeIndex;
    native;
    component;
    directives;
    localRefs;
    get lView() { return iv(this.lViewId); }
    constructor(t, n, o) { this.lViewId = t, this.nodeIndex = n, this.native = o; }
};
function Se(e) { let t = Ps(e); if (t) {
    if (oe(t)) {
        let n = t, o, r, i;
        if (av(e)) {
            if (o = Pw(n, e), o == -1)
                throw new Error("The provided component was not found in the application");
            r = e;
        }
        else if (kw(e)) {
            if (o = Lw(n, e), o == -1)
                throw new Error("The provided directive was not found in the application");
            i = cv(o, n);
        }
        else if (o = Th(n, e), o == -1)
            return null;
        let s = F(n[o]), a = Ps(s), c = a && !Array.isArray(a) ? a : Ch(n, o, s);
        if (r && c.component === void 0 && (c.component = r, Be(c.component, c)), i && c.directives === void 0) {
            c.directives = i;
            for (let l = 0; l < i.length; l++)
                Be(i[l], c);
        }
        Be(c.native, c), t = c;
    }
}
else {
    let n = e, o = n;
    for (; o = o.parentNode;) {
        let r = Ps(o);
        if (r) {
            let i = Array.isArray(r) ? r : r.lView;
            if (!i)
                return null;
            let s = Th(i, n);
            if (s >= 0) {
                let a = F(i[s]), c = Ch(i, s, a);
                Be(a, c), t = c;
                break;
            }
        }
    }
} return t || null; }
function Ch(e, t, n) { return new Zs(e[je], t, n); }
var ku = "__ngContext__";
function Be(e, t) { oe(t) ? (e[ku] = t[je], Rw(t)) : e[ku] = t; }
function Ps(e) { let t = e[ku]; return typeof t == "number" ? iv(t) : t || null; }
function sv(e) { let t = Ps(e); return t ? oe(t) ? t : t.lView : null; }
function av(e) { return e && e.constructor && e.constructor.\u0275cmp; }
function kw(e) { return e && e.constructor && e.constructor.\u0275dir; }
function Th(e, t) { let n = e[v]; for (let o = I; o < n.bindingStartIndex; o++)
    if (F(e[o]) === t)
        return o; return -1; }
function xw(e) { if (e.child)
    return e.child; if (e.next)
    return e.next; for (; e.parent && !e.parent.next;)
    e = e.parent; return e.parent && e.parent.next; }
function Pw(e, t) { let n = e[v].components; if (n)
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        if (Ee(r, e)[$] === t)
            return r;
    }
else if (Ee(I, e)[$] === t)
    return I; return -1; }
function Lw(e, t) { let n = e[v].firstChild; for (; n;) {
    let o = n.directiveStart, r = n.directiveEnd;
    for (let i = o; i < r; i++)
        if (e[i] === t)
            return n.index;
    n = xw(n);
} return -1; }
function cv(e, t) { let n = t[v].data[e]; if (n.directiveStart === 0)
    return j; let o = []; for (let r = n.directiveStart; r < n.directiveEnd; r++) {
    let i = t[r];
    av(i) || o.push(i);
} return o; }
function Fw(e, t) { let n = t[v].data[e]; return Te(n) ? t[n.directiveStart + n.componentOffset] : null; }
function jw(e, t) { let n = e[v].data[t]; if (n && n.localNames) {
    let o = {}, r = n.index + 1;
    for (let i = 0; i < n.localNames.length; i += 2)
        o[n.localNames[i]] = e[r], r++;
    return o;
} return null; }
function lv(e) { return dv(e[zt]); }
function uv(e) { return dv(e[me]); }
function dv(e) { for (; e !== null && !X(e);)
    e = e[me]; return e; }
function Mh(e) { let t = Se(e); if (t === null)
    return null; if (t.component === void 0) {
    let n = t.lView;
    if (n === null)
        return null;
    t.component = Fw(t.nodeIndex, n);
} return t.component; }
function Vw(e) { Zw(e); let t = Se(e), n = t ? t.lView : null; return n === null ? null : n[$]; }
function Hw(e) { let t = Se(e), n = t ? t.lView : null; if (n === null)
    return null; let o; for (; n[v].type === 2 && (o = yt(n));)
    n = o; return it(n) ? null : n[$]; }
function Bw(e) { let t = Se(e), n = t ? t.lView : null; if (n === null)
    return le.NULL; let o = n[v].data[t.nodeIndex]; return new en(o, n); }
function Uw(e) { let t = Se(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[v], r = o.data[t.nodeIndex], i = [], s = r.providerIndexes & 1048575, a = r.directiveEnd; for (let c = s; c < a; c++) {
    let l = o.data[c];
    Qw(l) && (l = l.type), i.push(l);
} return i; }
function $w(e) { if (e instanceof Text)
    return []; let t = Se(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[v], r = t.nodeIndex; return o?.data[r] ? (t.directives === void 0 && (t.directives = cv(r, n)), t.directives === null ? [] : [...t.directives]) : []; }
var fv = (function (e) { return e[e.Default = 0] = "Default", e[e.OnPush = 1] = "OnPush", e; })(fv || {}), pv = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 1] = "None", e; })(pv || {});
function qw(e) { let t = Se(e); if (t === null)
    return {}; if (t.localRefs === void 0) {
    let n = t.lView;
    if (n === null)
        return {};
    t.localRefs = jw(n, t.nodeIndex);
} return t.localRefs || {}; }
function Gw(e) { return Se(e).native; }
function Ww(e) { let t = Se(e), n = t === null ? null : t.lView; if (n === null)
    return []; let o = n[v], r = n[Wt], i = o.cleanup, s = []; if (i && r)
    for (let a = 0; a < i.length;) {
        let c = i[a++], l = i[a++];
        if (typeof c == "string") {
            let u = c, d = F(n[l]), f = r[i[a++]], p = i[a++], g = typeof p == "boolean" || p >= 0 ? "dom" : "output", m = typeof p == "boolean" ? p : !1;
            e == d && s.push({ element: e, name: u, callback: f, useCapture: m, type: g });
        }
    } return s.sort(zw), s; }
function zw(e, t) { return e.name == t.name ? 0 : e.name < t.name ? -1 : 1; }
function Qw(e) { return e.type !== void 0 && e.declaredInputs !== void 0 && e.resolveHostDirectives !== void 0; }
function Zw(e) { if (typeof Element < "u" && !(e instanceof Element))
    throw new Error("Expecting instance of DOM Element"); }
var xu;
function Yw(e) { xu = e; }
function Ta() { if (xu !== void 0)
    return xu; if (typeof document < "u")
    return document; throw new C(210, !1); }
var Ot = new M("", { factory: () => Kw }), Kw = "ng";
var Od = new M(""), Jw = new M("", { providedIn: "platform", factory: () => "unknown" }), Xw = new M(""), e_ = new M("", { factory: () => E(Yt).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null }), gv = { breakpoints: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840], placeholderResolution: 30, disableImageSizeWarning: !1, disableImageLazyLoadWarning: !1 }, t_ = new M("", { factory: () => gv });
function n_(e) { return e; }
var Bo = (() => { class e {
    static \u0275prov = U({ token: e, providedIn: "root", factory: () => { let n = new e; return (typeof ngServerMode > "u" || !ngServerMode) && (n.store = hv(E(Yt), E(Ot))), n; } });
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
function hv(e, t) { let n = e.getElementById(t + "-state"); if (n?.textContent)
    try {
        return JSON.parse(n.textContent);
    }
    catch (o) {
        console.warn("Exception while restoring TransferState for app " + t, o);
    } return {}; }
var kd = "h", xd = "b", mv = "f", vv = "n", di = "e", Ma = "t", Uo = "c", fi = "x", bt = "r", Na = "i", pi = "n", $o = "d", wa = "l", _a = "di", gi = "s", Pd = "p", hi = "t", jn = new M(""), yv = !1, Ld = new M("", { factory: () => yv }), Fd = new M(""), Sa = new M(""), jd = !1, Ev = new M("", { factory: () => [] }), Vd = new M(""), mi = new M("", { factory: () => new Map }), o_ = new M(""), Ys = { passive: !0, capture: !0 }, cu = new WeakMap, lu = new WeakMap, Xt = new WeakMap, Ks = ["click", "keydown"], Js = ["mouseenter", "mouseover", "focusin"], Cs = new Map, Yr = class {
    callbacks = new Set;
    listener = () => { for (let t of this.callbacks)
        t(); };
};
function Iv(e, t) { let n = lu.get(e); if (!n) {
    n = new Yr, lu.set(e, n);
    for (let o of Ks)
        e.addEventListener(o, n.listener, Ys);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    lu.delete(e);
    for (let i of Ks)
        e.removeEventListener(i, r, Ys);
} }; }
function Dv(e, t) { let n = cu.get(e); if (!n) {
    n = new Yr, cu.set(e, n);
    for (let o of Js)
        e.addEventListener(o, n.listener, Ys);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    for (let i of Js)
        e.removeEventListener(i, r, Ys);
    cu.delete(e);
} }; }
function r_(e) { let t = Cv(e); return new IntersectionObserver(n => { for (let o of n)
    o.isIntersecting && Xt.has(o.target) && Xt.get(o.target)?.get(t)?.listener(); }, e); }
function i_(e, t, n, o) { let r = Cv(o), i = Xt.get(e)?.get(r); Cs.has(r) || Cs.set(r, { observer: n(o), count: 0 }); let s = Cs.get(r); if (!i) {
    i = new Yr, s.observer.observe(e);
    let a = Xt.get(e);
    a ? a.set(r, i) : (a = new Map, Xt.set(e, a)), a.set(r, i), s.count++;
} return i.callbacks.add(t), () => { if (Xt.get(e)?.has(r)) {
    if (i.callbacks.delete(t), i.callbacks.size === 0) {
        s.observer.unobserve(e), s.count--;
        let a = Xt.get(e);
        a && (a.delete(r), a.size === 0 && Xt.delete(e));
    }
    s.count === 0 && (s.observer.disconnect(), Cs.delete(r));
} }; }
function Cv(e) {
    return e ? `${e.rootMargin}/${typeof e.threshold == "number" ? e.threshold : e.threshold?.join(`
`)}` : "";
}
var qo = "ngb";
function Hd(e, t, n = null) { if (t.length === 0 || e.nodeType !== Node.ELEMENT_NODE)
    return; let o = e.getAttribute(so.JSACTION), r = t.reduce((s, a) => (o?.indexOf(a) ?? -1) === -1 ? s + a + ":;" : s, ""); e.setAttribute(so.JSACTION, `${o ?? ""}${r}`); let i = n ?? ""; i !== "" && r.length > 0 && e.setAttribute(qo, i); }
var Tv = (e, t, n) => { let o = e, r = o.__jsaction_fns ?? new Map, i = r.get(t) ?? []; i.push(n), r.set(t, i), o.__jsaction_fns = r; }, Bd = (e, t) => { let n = e, o = n.getAttribute(qo) ?? "", r = t.get(o) ?? new Set; r.has(n) || r.add(n), t.set(o, r); };
function s_(e, t) { if (e.length > 0) {
    let n = [];
    for (let r of e)
        t.has(r) && (n = [...n, ...t.get(r)]);
    new Set(n).forEach(Ud);
} }
var Ud = e => { e.removeAttribute(so.JSACTION), e.removeAttribute(qo), e.__jsaction_fns = void 0; }, $d = new M("", { factory: () => ({}) });
function qd(e, t) { let n = t?.__jsaction_fns?.get(e.type); if (!(!n || !t?.isConnected))
    for (let o of n)
        o(e); }
var Pu = new Map;
function Mv(e, t) { return Pu.set(e, t), () => Pu.delete(e); }
var Nh = !1, Nv = (e, t, n, o) => { };
function a_(e, t, n, o) { Nv(e, t, n, o); }
function wv() { Nh || (Nv = (e, t, n, o) => { let r = e[L].get(Ot); Pu.get(r)?.(t, n, o); }, Nh = !0); }
var kt = new M(""), _v = (() => { class e {
    registry = new Map;
    cleanupFns = new Map;
    jsActionMap = E(mi);
    contract = E($d);
    add(n, o) { if (this.registry.set(n, o), this.awaitingCallbacks.has(n)) {
        let r = this.awaitingCallbacks.get(n);
        for (let i of r)
            i();
    } }
    get(n) { return this.registry.get(n) ?? null; }
    has(n) { return this.registry.has(n); }
    cleanup(n) { s_(n, this.jsActionMap); for (let o of n)
        this.registry.delete(o), this.jsActionMap.delete(o), this.invokeTriggerCleanupFns(o), this.hydrating.delete(o), this.awaitingCallbacks.delete(o); this.size === 0 && this.contract.instance?.cleanUp(); }
    get size() { return this.registry.size; }
    addCleanupFn(n, o) { let r = []; this.cleanupFns.has(n) && (r = this.cleanupFns.get(n)), r.push(o), this.cleanupFns.set(n, r); }
    invokeTriggerCleanupFns(n) { let o = this.cleanupFns.get(n) ?? []; for (let r of o)
        r(); this.cleanupFns.delete(n); }
    hydrating = new Map;
    awaitingCallbacks = new Map;
    awaitParentBlock(n, o) { let r = this.awaitingCallbacks.get(n) ?? []; r.push(o), this.awaitingCallbacks.set(n, r); }
    static \u0275prov = U({ token: e, providedIn: null, factory: () => new e });
} return e; })();
function Go(e) { return (e.flags & 32) === 32; }
var Sv = "__nghData__", ba = Sv, bv = "__nghDeferData__", Aa = bv;
function c_(e) { return e === Sv || e === bv; }
var vo = "ngh", Av = "nghm", Rv = () => null;
function l_(e, t, n = !1) { let o = e.getAttribute(vo); if (o == null)
    return null; let [r, i] = o.split("|"); if (o = n ? i : r, !o)
    return null; let s = i ? `|${i}` : "", a = n ? r : s, c = {}; if (o !== "") {
    let u = t.get(Bo, null, { optional: !0 });
    u !== null && (c = u.get(ba, [])[Number(o)]);
} let l = { data: c, firstChild: e.firstChild ?? null }; return n && (l.firstChild = e, Ra(l, 0, e.nextSibling)), a ? e.setAttribute(vo, a) : e.removeAttribute(vo), l; }
function Ov() { Rv = l_; }
function kv(e, t, n = !1) { return Rv(e, t, n); }
function Gd(e) { let t = e._lView; return t[v].type === 2 ? null : (it(t) && (t = t[I]), t); }
function u_(e) { return e.textContent?.replace(/\s/gm, ""); }
function d_(e) { let t = Ta(), n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, { acceptNode(i) { let s = u_(i); return s === "ngetn" || s === "ngtns" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; } }), o, r = []; for (; o = n.nextNode();)
    r.push(o); for (let i of r)
    i.textContent === "ngetn" ? i.replaceWith(t.createTextNode("")) : i.remove(); }
var xv = (function (e) { return e.Hydrated = "hydrated", e.Skipped = "skipped", e.Mismatched = "mismatched", e; })(xv || {}), f_ = "__ngDebugHydrationInfo__";
function p_(e) { return e[f_] ?? null; }
function Ra(e, t, n) { e.segmentHeads ??= {}, e.segmentHeads[t] = n; }
function Lu(e, t) { return e.segmentHeads?.[t] ?? null; }
function vi(e) { return e.get(Vd, !1, { optional: !0 }); }
var g_ = !1;
function h_() { g_ = !1; }
function Pv(e, t) { let n = e.data, o = n[di]?.[t] ?? null; return o === null && n[Uo]?.[t] && (o = Wd(e, t)), o; }
function m_(e, t) { return e.data[di]?.[t] !== void 0; }
function Lv(e, t) { return e.data[Uo]?.[t] ?? null; }
function Wd(e, t) { let n = Lv(e, t) ?? [], o = 0; for (let r of n)
    o += r[bt] * (r[fi] ?? 1); return o; }
function Fv(e) { if (typeof e.disconnectedNodes > "u") {
    let t = e.data[$o];
    e.disconnectedNodes = t ? new Set(t) : null;
} return e.disconnectedNodes; }
function Oa(e, t) { if (typeof e.disconnectedNodes > "u") {
    let n = e.data[$o];
    e.disconnectedNodes = n ? new Set(n) : null;
} return !!Fv(e)?.has(t); }
function ka(e, t) { let n = e[de]; return n !== null && !br() && !Go(t) && !Oa(n, t.index - I); }
function zd(e, t) { let n = t, o = e.corruptedTextNodes; n.textContent === "" ? o.set(n, "ngetn") : n.nextSibling?.nodeType === Node.TEXT_NODE && o.set(n, "ngtns"); }
function jv(e) { let t = []; return e !== null && (e.has(4) && t.push(...Js), e.has(3) && t.push(...Ks)), t; }
function v_(e, t) { let n = t.get(kt), r = t.get(Bo).get(Aa, {}), i = !1, s = e, a = null, c = []; for (; !i && s;) {
    i = n.has(s);
    let l = n.hydrating.get(s);
    if (a === null && l != null) {
        a = l.promise;
        break;
    }
    c.unshift(s), s = r[s][Pd];
} return { parentBlockPromise: a, hydrationQueue: c }; }
function y_(e) { let t = e.body.querySelectorAll("[jsaction]"), n = new Set, o = [Js.join(":;"), Ks.join(":;")].join("|"); for (let r of t) {
    let i = r.getAttribute("jsaction"), s = r.getAttribute("ngb");
    i?.match(o) && s !== null && n.add(r);
} return n; }
function Vv(e, t) { let n = y_(e), o = t.get(mi); for (let r of n)
    Bd(r, o); }
var Hv = () => ({});
function E_(e) { let t = e.get(Bo, null, { optional: !0 }); return t !== null ? t.get(Aa, {}) : {}; }
function Bv() { Hv = E_; }
function I_(e) { return Hv(e); }
function D_(e) { return typeof e == "object" && e.trigger === 5; }
function C_(e) { return e[hi]?.find(n => D_(n))?.delay ?? null; }
function T_(e) { let t = e[hi]; if (t)
    for (let n of t) {
        if (n === 2)
            return !0;
        if (typeof n == "object" && n.trigger === 2)
            return n.intersectionObserverOptions || !0;
    } return null; }
function wh(e, t) { return e[hi]?.includes(t) ?? !1; }
function M_(e) { return { data: e, hydrate: { idle: wh(e, 0), immediate: wh(e, 1), timer: C_(e), viewport: T_(e) } }; }
function Uv(e) { let t = I_(e), n = new Map; for (let o in t)
    n.set(o, M_(t[o])); return n; }
function uu(e) { return !!e && e.nodeType === Node.COMMENT_NODE && e.textContent?.trim() === Av; }
function _h(e) { for (; e && e.nodeType === Node.TEXT_NODE;)
    e = e.previousSibling; return e; }
function $v(e) { for (let o of e.body.childNodes)
    if (uu(o))
        return; let t = _h(e.body.previousSibling); if (uu(t))
    return; let n = _h(e.head.lastChild); if (!uu(n))
    throw new C(-507, !1); }
function qv(e, t) { let n = e.contentQueries; if (n !== null) {
    let o = O(null);
    try {
        for (let r = 0; r < n.length; r += 2) {
            let i = n[r], s = n[r + 1];
            if (s !== -1) {
                let a = e.data[s];
                Ar(i), a.contentQueries(2, t[s], s);
            }
        }
    }
    finally {
        O(o);
    }
} }
function Fu(e, t, n) { Ar(0); let o = O(null); try {
    t(e, n);
}
finally {
    O(o);
} }
function Qd(e, t, n) { if (Cl(t)) {
    let o = O(null);
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
        O(o);
    }
} }
var Ue = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", e[e.ExperimentalIsolatedShadowDom = 4] = "ExperimentalIsolatedShadowDom", e; })(Ue || {}), N_ = { name: "custom-elements" }, w_ = { name: "no-errors-schema" }, Gv = !1;
function __(e) { Gv = e; }
function S_() { return Gv; }
var Wv = !1;
function b_(e) { Wv = e; }
function A_() { return Wv; }
var Ts;
function zv() { if (Ts === void 0 && (Ts = null, Ae.trustedTypes))
    try {
        Ts = Ae.trustedTypes.createPolicy("angular", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return Ts; }
function Wo(e) { return zv()?.createHTML(e) || e; }
function R_(e) { return zv()?.createScriptURL(e) || e; }
var Ms;
function Zd() { if (Ms === void 0 && (Ms = null, Ae.trustedTypes))
    try {
        Ms = Ae.trustedTypes.createPolicy("angular#unsafe-bypass", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return Ms; }
function Sh(e) { return Zd()?.createHTML(e) || e; }
function bh(e) { return Zd()?.createScript(e) || e; }
function Ah(e) { return Zd()?.createScriptURL(e) || e; }
var At = class {
    changingThisBreaksApplicationSecurity;
    constructor(t) { this.changingThisBreaksApplicationSecurity = t; }
    toString() { return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Yi})`; }
}, ju = class extends At {
    getTypeName() { return "HTML"; }
}, Vu = class extends At {
    getTypeName() { return "Style"; }
}, Hu = class extends At {
    getTypeName() { return "Script"; }
}, Bu = class extends At {
    getTypeName() { return "URL"; }
}, Uu = class extends At {
    getTypeName() { return "ResourceURL"; }
};
function xt(e) { return e instanceof At ? e.changingThisBreaksApplicationSecurity : e; }
function zo(e, t) { let n = Qv(e); if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL")
        return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${Yi})`);
} return n === t; }
function Qv(e) { return e instanceof At && e.getTypeName() || null; }
function O_(e) { return new ju(e); }
function k_(e) { return new Vu(e); }
function x_(e) { return new Hu(e); }
function P_(e) { return new Bu(e); }
function L_(e) { return new Uu(e); }
function Zv(e) { let t = new qu(e); return F_() ? new $u(t) : t; }
var $u = class {
    inertDocumentHelper;
    constructor(t) { this.inertDocumentHelper = t; }
    getInertBodyElement(t) { t = "<body><remove></remove>" + t; try {
        let n = new window.DOMParser().parseFromString(Wo(t), "text/html").body;
        return n === null ? this.inertDocumentHelper.getInertBodyElement(t) : (n.firstChild?.remove(), n);
    }
    catch {
        return null;
    } }
}, qu = class {
    defaultDoc;
    inertDocument;
    constructor(t) { this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"); }
    getInertBodyElement(t) { let n = this.inertDocument.createElement("template"); return n.innerHTML = Wo(t), n; }
};
function F_() { try {
    return !!new window.DOMParser().parseFromString(Wo(""), "text/html");
}
catch {
    return !1;
} }
var j_ = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function xa(e) { return e = String(e), e.match(j_) ? e : "unsafe:" + e; }
function Pt(e) { let t = {}; for (let n of e.split(","))
    t[n] = !0; return t; }
function yi(...e) { let t = {}; for (let n of e)
    for (let o in n)
        n.hasOwnProperty(o) && (t[o] = !0); return t; }
var Yv = Pt("area,br,col,hr,img,wbr"), Kv = Pt("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), Jv = Pt("rp,rt"), V_ = yi(Jv, Kv), H_ = yi(Kv, Pt("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), B_ = yi(Jv, Pt("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), Gu = yi(Yv, H_, B_, V_), Yd = Pt("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), U_ = Pt("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), $_ = Pt("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"), Xv = yi(Yd, U_, $_), q_ = Pt("script,style,template"), Wu = class {
    sanitizedSomething = !1;
    buf = [];
    sanitizeChildren(t) { let n = t.firstChild, o = !0, r = []; for (; n;) {
        if (n.nodeType === Node.ELEMENT_NODE ? o = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, o && n.firstChild) {
            r.push(n), n = z_(n);
            continue;
        }
        for (; n;) {
            n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
            let i = W_(n);
            if (i) {
                n = i;
                break;
            }
            n = r.pop();
        }
    } return this.buf.join(""); }
    startElement(t) { let n = Rh(t).toLowerCase(); if (!Gu.hasOwnProperty(n))
        return this.sanitizedSomething = !0, !q_.hasOwnProperty(n); this.buf.push("<"), this.buf.push(n); let o = t.attributes; for (let r = 0; r < o.length; r++) {
        let i = o.item(r), s = i.name, a = s.toLowerCase();
        if (!Xv.hasOwnProperty(a)) {
            this.sanitizedSomething = !0;
            continue;
        }
        let c = i.value;
        Yd[a] && (c = xa(c)), this.buf.push(" ", s, '="', Oh(c), '"');
    } return this.buf.push(">"), !0; }
    endElement(t) { let n = Rh(t).toLowerCase(); Gu.hasOwnProperty(n) && !Yv.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">")); }
    chars(t) { this.buf.push(Oh(t)); }
};
function G_(e, t) { return (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !== Node.DOCUMENT_POSITION_CONTAINED_BY; }
function W_(e) { let t = e.nextSibling; if (t && e !== t.previousSibling)
    throw ey(t); return t; }
function z_(e) { let t = e.firstChild; if (t && G_(e, t))
    throw ey(t); return t; }
function Rh(e) { let t = e.nodeName; return typeof t == "string" ? t : "FORM"; }
function ey(e) { return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`); }
var Q_ = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, Z_ = /([^\#-~ |!])/g;
function Oh(e) { return e.replace(/&/g, "&amp;").replace(Q_, function (t) { let n = t.charCodeAt(0), o = t.charCodeAt(1); return "&#" + ((n - 55296) * 1024 + (o - 56320) + 65536) + ";"; }).replace(Z_, function (t) { return "&#" + t.charCodeAt(0) + ";"; }).replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
var Ns;
function ty(e, t) { let n = null; try {
    Ns = Ns || Zv(e);
    let o = t ? String(t) : "";
    n = Ns.getInertBodyElement(o);
    let r = 5, i = o;
    do {
        if (r === 0)
            throw new Error("Failed to sanitize html because the input is unstable");
        r--, o = i, i = n.innerHTML, n = Ns.getInertBodyElement(o);
    } while (o !== i);
    let a = new Wu().sanitizeChildren(zu(n) || n);
    return Wo(a);
}
finally {
    if (n) {
        let o = zu(n) || n;
        for (; o.firstChild;)
            o.firstChild.remove();
    }
} }
function zu(e) { return "content" in e && Y_(e) ? e.content : null; }
function Y_(e) { return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE"; }
var K_ = /^>|^->|<!--|-->|--!>|<!-$/g, J_ = /(<|>)/g, X_ = "\u200B$1\u200B";
function eS(e) { return e.replace(K_, t => t.replace(J_, X_)); }
function Kd(e, t) { return e.createText(t); }
function ny(e, t, n) { e.setValue(t, n); }
function Jd(e, t) { return e.createComment(eS(t)); }
function Pa(e, t, n) { return e.createElement(t, n); }
function Sn(e, t, n, o, r) { e.insertBefore(t, n, o, r); }
function oy(e, t, n) { e.appendChild(t, n); }
function kh(e, t, n, o, r) { o !== null ? Sn(e, t, n, o, r) : oy(e, t, n); }
function Ei(e, t, n, o) { e.removeChild(null, t, n, o); }
function ry(e) { e.textContent = ""; }
function tS(e, t, n) { e.setAttribute(t, "style", n); }
function nS(e, t, n) { n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n); }
function iy(e, t, n) { let { mergedAttrs: o, classes: r, styles: i } = n; o !== null && cw(e, t, o), r !== null && nS(e, t, r), i !== null && tS(e, t, i); }
function oS(e) { let t = h(); e.src = "", e.srcdoc = Wo(""), Ei(t[T], e); }
var Vn = (function (e) { return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e; })(Vn || {});
function sy(e) { let t = Ii(); return t ? Sh(t.sanitize(Vn.HTML, e) || "") : zo(e, "HTML") ? Sh(xt(e)) : ty(Ta(), R(e)); }
function ay(e) { let t = Ii(); return t ? t.sanitize(Vn.STYLE, e) || "" : zo(e, "Style") ? xt(e) : R(e); }
function Xd(e) { let t = Ii(); return t ? t.sanitize(Vn.URL, e) || "" : zo(e, "URL") ? xt(e) : xa(R(e)); }
function ef(e) { let t = Ii(); if (t)
    return Ah(t.sanitize(Vn.RESOURCE_URL, e) || ""); if (zo(e, "ResourceURL"))
    return Ah(xt(e)); throw new C(904, !1); }
function cy(e) { let t = Ii(); if (t)
    return bh(t.sanitize(Vn.SCRIPT, e) || ""); if (zo(e, "Script"))
    return bh(xt(e)); throw new C(905, !1); }
function ly(e) { return Wo(e[0]); }
function uy(e) { return R_(e[0]); }
var rS = new Set(["embed", "frame", "iframe", "media", "script"]), iS = new Set(["base", "link", "script"]);
function sS(e, t) { return t === "src" && rS.has(e) || t === "href" && iS.has(e) || t === "xlink:href" && e === "script" ? ef : Xd; }
function dy(e, t, n) { return sS(t, n)(e); }
function Ii() { let e = h(); return e && e[Ke].sanitizer; }
var ws = new Set(["attributename"]), aS = { iframe: new Set(["sandbox", "allow", "allowfullscreen", "referrerpolicy", "csp", "fetchpriority"]), animate: ws, set: ws, animatemotion: ws, animatetransform: ws };
function fy(e, t, n) { let o = t.toLowerCase(), r = n.toLowerCase(); if (!aS[o]?.has(r))
    return e; let i = Me(); if (i.type !== 2)
    return e; let s = h(); if (o === "iframe") {
    let c = K(i, s);
    oS(c);
} let a = !1; throw new C(-910, a); }
function cS() { return Ye([]); }
function py(e) { return e.ownerDocument.defaultView; }
function gy(e) { return e.ownerDocument; }
function tf(e) { return e.ownerDocument.body; }
var lS = "\uFFFD";
function po(e) { return e instanceof Function ? e() : e; }
function uS(e, t, n) { let o = e.length; for (;;) {
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
var hy = "ng-template";
function dS(e, t, n, o) { let r = 0; if (o) {
    for (; r < t.length && typeof t[r] == "string"; r += 2)
        if (t[r] === "class" && uS(t[r + 1].toLowerCase(), n, 0) !== -1)
            return !0;
}
else if (nf(e))
    return !1; if (r = t.indexOf(1, r), r > -1) {
    let i;
    for (; ++r < t.length && typeof (i = t[r]) == "string";)
        if (i.toLowerCase() === n)
            return !0;
} return !1; }
function nf(e) { return e.type === 4 && e.value !== hy; }
function fS(e, t, n) { let o = e.type === 4 && !n ? hy : e.value; return t === o; }
function pS(e, t, n) { let o = 4, r = e.attrs, i = r !== null ? mS(r) : 0, s = !1; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "number") {
        if (!s && !tt(o) && !tt(c))
            return !1;
        if (s && tt(c))
            continue;
        s = !1, o = c | o & 1;
        continue;
    }
    if (!s)
        if (o & 4) {
            if (o = 2 | o & 1, c !== "" && !fS(e, c, n) || c === "" && t.length === 1) {
                if (tt(o))
                    return !1;
                s = !0;
            }
        }
        else if (o & 8) {
            if (r === null || !dS(e, r, c, n)) {
                if (tt(o))
                    return !1;
                s = !0;
            }
        }
        else {
            let l = t[++a], u = gS(c, r, nf(e), n);
            if (u === -1) {
                if (tt(o))
                    return !1;
                s = !0;
                continue;
            }
            if (l !== "") {
                let d;
                if (u > i ? d = "" : d = r[u + 1].toLowerCase(), o & 2 && l !== d) {
                    if (tt(o))
                        return !1;
                    s = !0;
                }
            }
        }
} return tt(o) || s; }
function tt(e) { return (e & 1) === 0; }
function gS(e, t, n, o) { if (t === null)
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
    return vS(t, e); }
function my(e, t, n = !1) { for (let o = 0; o < t.length; o++)
    if (pS(e, t[o], n))
        return !0; return !1; }
function hS(e) { let t = e.attrs; if (t != null) {
    let n = t.indexOf(5);
    if ((n & 1) === 0)
        return t[n + 1];
} return null; }
function mS(e) { for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (Sd(n))
        return t;
} return e.length; }
function vS(e, t) { let n = e.indexOf(4); if (n > -1)
    for (n++; n < e.length;) {
        let o = e[n];
        if (typeof o == "number")
            return -1;
        if (o === t)
            return n;
        n++;
    } return -1; }
function yS(e, t) { e: for (let n = 0; n < t.length; n++) {
    let o = t[n];
    if (e.length === o.length) {
        for (let r = 0; r < e.length; r++)
            if (e[r] !== o[r])
                continue e;
        return !0;
    }
} return !1; }
function xh(e, t) { return e ? ":not(" + t.trim() + ")" : t; }
function ES(e) { let t = e[0], n = 1, o = 2, r = "", i = !1; for (; n < e.length;) {
    let s = e[n];
    if (typeof s == "string")
        if (o & 2) {
            let a = e[++n];
            r += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
        }
        else
            o & 8 ? r += "." + s : o & 4 && (r += " " + s);
    else
        r !== "" && !tt(s) && (t += xh(i, r), r = ""), o = s, i = i || !tt(o);
    n++;
} return r !== "" && (t += xh(i, r)), t; }
function IS(e) { return e.map(ES).join(","); }
function DS(e) { let t = [], n = [], o = 1, r = 2; for (; o < e.length;) {
    let i = e[o];
    if (typeof i == "string")
        r === 2 ? i !== "" && t.push(i, e[++o]) : r === 8 && n.push(i);
    else {
        if (!tt(r))
            break;
        r = i;
    }
    o++;
} return n.length && t.push(1, ...n), t; }
var B = {};
function of(e, t, n, o, r, i, s, a, c, l, u) { let d = I + o, f = d + r, p = CS(d, f), g = typeof l == "function" ? l() : l; return p[v] = { type: e, blueprint: p, template: n, queries: null, viewQuery: a, declTNode: t, data: p.slice().fill(null, d), bindingStartIndex: d, expandoStartIndex: f, hostBindingOpCodes: null, firstCreatePass: !0, firstUpdatePass: !0, staticViewQueries: !1, staticContentQueries: !1, preOrderHooks: null, preOrderCheckHooks: null, contentHooks: null, contentCheckHooks: null, viewHooks: null, viewCheckHooks: null, destroyHooks: null, cleanup: null, contentQueries: null, components: null, directiveRegistry: typeof i == "function" ? i() : i, pipeRegistry: typeof s == "function" ? s() : s, firstChild: null, schemas: c, consts: g, incompleteFirstPass: !1, ssrId: u }; }
function CS(e, t) { let n = []; for (let o = 0; o < t; o++)
    n.push(o < e ? null : B); return n; }
function vy(e) { let t = e.tView; return t === null || t.incompleteFirstPass ? e.tView = of(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t; }
function La(e, t, n, o, r, i, s, a, c, l, u) { let d = t.blueprint.slice(); return d[q] = r, d[w] = o | 4 | 128 | 8 | 64 | 1024, (l !== null || e && e[w] & 2048) && (d[w] |= 2048), wl(d), d[Z] = d[mn] = e, d[$] = n, d[Ke] = s || e && e[Ke], d[T] = a || e && e[T], d[L] = c || e && e[L] || null, d[ue] = i, d[je] = Aw(), d[de] = u, d[Il] = l, d[ne] = t.type == 2 ? e[ne] : d, d; }
function TS(e, t, n) { let o = K(t, e), r = vy(n), i = e[Ke].rendererFactory, s = sf(e, La(e, r, null, rf(n), o, t, null, i.createRenderer(o, n), null, null, null)); return e[t.index] = s; }
function rf(e) { let t = 16; return e.signals ? t = 4096 : e.onPush && (t = 64), t; }
function Di(e, t, n, o) { if (n === 0)
    return -1; let r = t.length; for (let i = 0; i < n; i++)
    t.push(o), e.blueprint.push(o), e.data.push(null); return r; }
function sf(e, t) { return e[zt] ? e[Mr][me] = t : e[zt] = t, e[Mr] = t, t; }
function yy(e = 1) { Ey(b(), h(), pe() + e, !1); }
function Ey(e, t, n, o) { if (!o)
    if ((t[w] & 3) === 3) {
        let i = e.preOrderCheckHooks;
        i !== null && Os(t, i, n);
    }
    else {
        let i = e.preOrderHooks;
        i !== null && ks(t, i, 0, n);
    } Zt(n); }
var Fa = (function (e) { return e[e.None = 0] = "None", e[e.SignalBased = 1] = "SignalBased", e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", e; })(Fa || {});
function bn(e, t, n, o) { let r = O(null); try {
    let [i, s, a] = e.inputs[n], c = null;
    (s & Fa.SignalBased) !== 0 && (c = t[i][J]), c !== null && c.transformFn !== void 0 ? o = c.transformFn(o) : a !== null && (o = a.call(t, o)), e.setInput !== null ? e.setInput(t, c, o, n, i) : Lm(t, c, i, o);
}
finally {
    O(r);
} }
var Xs = (function (e) { return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e; })(Xs || {}), Qu;
function af(e, t) { return Qu(e, t); }
function MS(e) { Qu === void 0 && (Qu = e()); }
function ea(e) { if (!e)
    return 0; let t = e.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3; return parseFloat(e) * t; }
function yo(e, t) { return e.getPropertyValue(t).split(",").map(o => o.trim()); }
function NS(e) { let t = yo(e, "transition-property"), n = yo(e, "transition-duration"), o = yo(e, "transition-delay"), r = { propertyName: "", duration: 0, animationName: void 0 }; for (let i = 0; i < t.length; i++) {
    let s = ea(o[i]) + ea(n[i]);
    s > r.duration && (r.propertyName = t[i], r.duration = s);
} return r; }
function wS(e) { let t = yo(e, "animation-name"), n = yo(e, "animation-delay"), o = yo(e, "animation-duration"), r = { animationName: "", propertyName: void 0, duration: 0 }; for (let i = 0; i < t.length; i++) {
    let s = ea(n[i]) + ea(o[i]);
    s > r.duration && (r.animationName = t[i], r.duration = s);
} return r; }
function Iy(e, t) { return e !== void 0 && e.duration > t.duration; }
function Dy(e) { return (e.animationName != null || e.propertyName != null) && e.duration > 0; }
function _S(e, t) { let n = getComputedStyle(e), o = wS(n), r = NS(n), i = o.duration > r.duration ? o : r; Iy(t.get(e), i) || Dy(i) && t.set(e, i); }
function Cy(e, t, n) { if (!n)
    return; let o = e.getAnimations(); return o.length === 0 ? _S(e, t) : SS(e, t, o); }
function SS(e, t, n) { let o = { animationName: void 0, propertyName: void 0, duration: 0 }; for (let r of n) {
    let i = r.effect?.getTiming(), s = typeof i?.duration == "number" ? i.duration : 0, a = (i?.delay ?? 0) + s, c, l;
    r.animationName ? l = r.animationName : c = r.transitionProperty, a >= o.duration && (o = { animationName: l, propertyName: c, duration: a });
} Iy(t.get(e), o) || Dy(o) && t.set(e, o); }
var An = new Set, ja = (function (e) { return e[e.CHANGE_DETECTION = 0] = "CHANGE_DETECTION", e[e.AFTER_NEXT_RENDER = 1] = "AFTER_NEXT_RENDER", e; })(ja || {}), Qo = new M(""), Ph = new Set;
function ee(e) { Ph.has(e) || (Ph.add(e), performance?.mark?.("mark_feature_usage", { detail: { feature: e } })); }
var Va = (() => { class e {
    impl = null;
    execute() { this.impl?.execute(); }
    static \u0275prov = U({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), cf = [0, 1, 2, 3], lf = (() => { class e {
    ngZone = E(G);
    scheduler = E(ze);
    errorHandler = E(Et, { optional: !0 });
    sequences = new Set;
    deferredRegistrations = new Set;
    executing = !1;
    constructor() { E(Qo, { optional: !0 }); }
    execute() { let n = this.sequences.size > 0; n && V(k.AfterRenderHooksStart), this.executing = !0; for (let o of cf)
        for (let r of this.sequences)
            if (!(r.erroredOrDestroyed || !r.hooks[o]))
                try {
                    r.pipelinedValue = this.ngZone.runOutsideAngular(() => this.maybeTrace(() => { let i = r.hooks[o]; return i(r.pipelinedValue); }, r.snapshot));
                }
                catch (i) {
                    r.erroredOrDestroyed = !0, this.errorHandler?.handleError(i);
                } this.executing = !1; for (let o of this.sequences)
        o.afterRun(), o.once && (this.sequences.delete(o), o.destroy()); for (let o of this.deferredRegistrations)
        this.sequences.add(o); this.deferredRegistrations.size > 0 && this.scheduler.notify(7), this.deferredRegistrations.clear(), n && V(k.AfterRenderHooksEnd); }
    register(n) { let { view: o } = n; o !== void 0 ? ((o[yn] ??= []).push(n), Dn(o), o[w] |= 8192) : this.executing ? this.deferredRegistrations.add(n) : this.addSequence(n); }
    addSequence(n) { this.sequences.add(n), this.scheduler.notify(7); }
    unregister(n) { this.executing && this.sequences.has(n) ? (n.erroredOrDestroyed = !0, n.pipelinedValue = void 0, n.once = !0) : (this.sequences.delete(n), this.deferredRegistrations.delete(n)); }
    maybeTrace(n, o) { return o ? o.run(ja.AFTER_NEXT_RENDER, n) : n(); }
    static \u0275prov = U({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Kr = class {
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
    destroy() { this.impl.unregister(this), this.unregisterOnDestroy?.(); let t = this.view?.[yn]; t && (this.view[yn] = t.filter(n => n !== this)); }
};
function Ty(e, t) { let n = t?.injector ?? E(le); return typeof ngServerMode < "u" && ngServerMode ? Ha : (ee("NgAfterRender"), My(e, n, t, !1)); }
function uf(e, t) { let n = t?.injector ?? E(le); return typeof ngServerMode < "u" && ngServerMode ? Ha : (ee("NgAfterNextRender"), My(e, n, t, !0)); }
function bS(e) { return e instanceof Function ? [void 0, void 0, e, void 0] : [e.earlyRead, e.write, e.mixedReadWrite, e.read]; }
function My(e, t, n, o) { let r = t.get(Va); r.impl ??= t.get(lf); let i = t.get(Qo, null, { optional: !0 }), s = n?.manualCleanup !== !0 ? t.get(He) : null, a = t.get(ro, null, { optional: !0 }), c = new Kr(r.impl, bS(e), a?.view, o, s, i?.snapshot(null)); return r.impl.register(c), c; }
var Ha = { destroy() { } }, Ba = new M("", { factory: () => ({ queue: new Set, isScheduled: !1, scheduler: null, injector: E(be) }) });
function Ny(e, t, n) { let o = e.get(Ba); if (Array.isArray(t))
    for (let r of t)
        o.queue.add(r), n?.detachedLeaveAnimationFns?.push(r);
else
    o.queue.add(t), n?.detachedLeaveAnimationFns?.push(t); o.scheduler && o.scheduler(e); }
function AS(e, t) { let n = e.get(Ba); if (t.detachedLeaveAnimationFns) {
    for (let o of t.detachedLeaveAnimationFns)
        n.queue.delete(o);
    t.detachedLeaveAnimationFns = void 0;
} }
function RS(e) { let t = e.get(Ba); t.isScheduled || (uf(() => { t.isScheduled = !1; for (let n of t.queue)
    n(); t.queue.clear(); }, { injector: t.injector }), t.isScheduled = !0); }
function Ua(e) { let t = e.get(Ba); t.scheduler = RS, t.scheduler(e); }
function df(e, t) { for (let [n, o] of t)
    Ny(e, o.animateFns); }
function Lh(e, t, n, o) { let r = e?.[Dt]?.enter; t !== null && r && r.has(n.index) && df(o, r); }
function go(e, t, n, o, r, i, s, a) { if (r != null) {
    let c, l = !1;
    X(r) ? c = r : oe(r) && (l = !0, r = r[q]);
    let u = F(r);
    e === 0 && o !== null ? (Lh(a, o, i, n), s == null ? oy(t, o, u) : Sn(t, o, u, s || null, !0)) : e === 1 && o !== null ? (Lh(a, o, i, n), Sn(t, o, u, s || null, !0)) : e === 2 ? Fh(a, i, n, d => { Ei(t, u, l, d); }) : e === 3 && Fh(a, i, n, () => { t.destroyNode(u); }), c != null && jS(t, e, n, c, i, o, s);
} }
function wy(e, t) { _y(e, t), t[q] = null, t[ue] = null; }
function OS(e, t, n, o, r, i) { o[q] = r, o[ue] = t, $a(e, o, n, 1, r, i); }
function _y(e, t) { t[Ke].changeDetectionScheduler?.notify(9), $a(e, t, t[T], 2, null, null); }
function kS(e) { let t = e[zt]; if (!t)
    return du(e[v], e); for (; t;) {
    let n = null;
    if (oe(t))
        n = t[zt];
    else {
        let o = t[W];
        o && (n = o);
    }
    if (!n) {
        for (; t && !t[me] && t !== e;)
            oe(t) && du(t[v], t), t = t[Z];
        t === null && (t = e), oe(t) && du(t[v], t), n = t && t[me];
    }
    t = n;
} }
function ff(e, t) { let n = e[En], o = n.indexOf(t); n.splice(o, 1); }
function Ci(e, t) { if (st(t))
    return; let n = t[T]; n.destroyNode && $a(e, t, n, 3, null, null), kS(t); }
function du(e, t) { if (st(t))
    return; let n = O(null); try {
    t[w] &= -129, t[w] |= 256, t[ke] && $t(t[ke]), LS(e, t), PS(e, t), t[v].type === 1 && t[T].destroy();
    let o = t[It];
    if (o !== null && X(t[Z])) {
        o !== t[Z] && ff(o, t);
        let r = t[rt];
        r !== null && r.detachView(e);
    }
    Ou(t);
}
finally {
    O(n);
} }
function Fh(e, t, n, o) { let r = e?.[Dt]; if (r == null || r.leave == null || !r.leave.has(t.index))
    return o(!1); e && An.add(e[je]), Ny(n, () => { if (r.leave && r.leave.has(t.index)) {
    let s = r.leave.get(t.index), a = [];
    if (s) {
        for (let c = 0; c < s.animateFns.length; c++) {
            let l = s.animateFns[c], { promise: u } = l();
            a.push(u);
        }
        r.detachedLeaveAnimationFns = void 0;
    }
    r.running = Promise.allSettled(a), xS(e, o);
}
else
    e && An.delete(e[je]), o(!1); }, r); }
function xS(e, t) { let n = e[Dt]?.running; if (n) {
    n.then(() => { e[Dt].running = void 0, An.delete(e[je]), t(!0); });
    return;
} t(!1); }
function PS(e, t) { let n = e.cleanup, o = t[Wt]; if (n !== null)
    for (let s = 0; s < n.length - 1; s += 2)
        if (typeof n[s] == "string") {
            let a = n[s + 3];
            a >= 0 ? o[a]() : o[-a].unsubscribe(), s += 2;
        }
        else {
            let a = o[n[s + 1]];
            n[s].call(a);
        } o !== null && (t[Wt] = null); let r = t[mt]; if (r !== null) {
    t[mt] = null;
    for (let s = 0; s < r.length; s++) {
        let a = r[s];
        a();
    }
} let i = t[Gt]; if (i !== null) {
    t[Gt] = null;
    for (let s of i)
        s.destroy();
} }
function LS(e, t) { let n; if (e != null && (n = e.destroyHooks) != null)
    for (let o = 0; o < n.length; o += 2) {
        let r = t[n[o]];
        if (!(r instanceof _n)) {
            let i = n[o + 1];
            if (Array.isArray(i))
                for (let s = 0; s < i.length; s += 2) {
                    let a = r[i[s]], c = i[s + 1];
                    V(k.LifecycleHookStart, a, c);
                    try {
                        c.call(a);
                    }
                    finally {
                        V(k.LifecycleHookEnd, a, c);
                    }
                }
            else {
                V(k.LifecycleHookStart, r, i);
                try {
                    i.call(r);
                }
                finally {
                    V(k.LifecycleHookEnd, r, i);
                }
            }
        }
    } }
function pf(e, t, n) { return Sy(e, t.parent, n); }
function Sy(e, t, n) { let o = t; for (; o !== null && o.type & 168;)
    t = o, o = t.parent; if (o === null)
    return n[q]; if (Te(o)) {
    let { encapsulation: r } = e.data[o.directiveStart + o.componentOffset];
    if (r === Ue.None || r === Ue.Emulated)
        return null;
} return K(o, n); }
function by(e, t, n) { return Ry(e, t, n); }
function Ay(e, t, n) { return e.type & 40 ? K(e, n) : null; }
var Ry = Ay, Zu;
function Oy(e, t) { Ry = e, Zu = t; }
function gf(e, t, n, o) { let r = pf(e, o, t), i = t[T], s = o.parent || t[ue], a = by(s, o, t); if (r != null)
    if (Array.isArray(n))
        for (let c = 0; c < n.length; c++)
            kh(i, r, n[c], a, !1);
    else
        kh(i, r, n, a, !1); Zu !== void 0 && Zu(i, o, t, n, r); }
function Nn(e, t) { if (t !== null) {
    let n = t.type;
    if (n & 3)
        return K(t, e);
    if (n & 4)
        return ta(-1, e[t.index]);
    if (n & 8) {
        let o = t.child;
        if (o !== null)
            return Nn(e, o);
        {
            let r = e[t.index];
            return X(r) ? ta(-1, r) : F(r);
        }
    }
    else {
        if (n & 128)
            return Nn(e, t.next);
        if (n & 32)
            return af(t, e)() || F(e[t.index]);
        {
            let o = ky(e, t);
            if (o !== null) {
                if (Array.isArray(o))
                    return o[0];
                let r = yt(e[ne]);
                return Nn(r, o);
            }
            else
                return Nn(e, t.next);
        }
    }
} return null; }
function ky(e, t) { if (t !== null) {
    let o = e[ne][ue], r = t.projection;
    return o.projection[r];
} return null; }
function ta(e, t) { let n = W + e + 1; if (n < t.length) {
    let o = t[n], r = o[v].firstChild;
    if (r !== null)
        return Nn(o, r);
} return t[Je]; }
function hf(e, t, n, o, r, i, s) { for (; n != null;) {
    let a = o[L];
    if (n.type === 128) {
        n = n.next;
        continue;
    }
    let c = o[n.index], l = n.type;
    if (s && t === 0 && (c && Be(F(c), o), n.flags |= 2), !Go(n))
        if (l & 8)
            hf(e, t, n.child, o, r, i, !1), go(t, e, a, r, c, n, i, o);
        else if (l & 32) {
            let u = af(n, o), d;
            for (; d = u();)
                go(t, e, a, r, d, n, i, o);
            go(t, e, a, r, c, n, i, o);
        }
        else
            l & 16 ? xy(e, t, o, n, r, i) : go(t, e, a, r, c, n, i, o);
    n = s ? n.projectionNext : n.next;
} }
function $a(e, t, n, o, r, i) { hf(n, o, e.firstChild, t, r, i, !1); }
function FS(e, t, n) { let o = t[T], r = pf(e, n, t), i = n.parent || t[ue], s = by(i, n, t); xy(o, 0, t, n, r, s); }
function xy(e, t, n, o, r, i) { let s = n[ne], c = s[ue].projection[o.projection]; if (Array.isArray(c))
    for (let l = 0; l < c.length; l++) {
        let u = c[l];
        go(t, e, n[L], r, u, o, i, n);
    }
else {
    let l = c, u = s[Z];
    Zr(o) && (l.flags |= 128), hf(e, t, l, u, r, i, !0);
} }
function jS(e, t, n, o, r, i, s) { let a = o[Je], c = F(o); a !== c && go(t, e, n, i, a, r, s); for (let l = W; l < o.length; l++) {
    let u = o[l];
    $a(u[v], u, e, t, i, a);
} }
function VS(e, t, n, o, r) { if (t)
    r ? e.addClass(n, o) : e.removeClass(n, o);
else {
    let i = o.indexOf("-") === -1 ? void 0 : Xs.DashCase;
    r == null ? e.removeStyle(n, o, i) : (typeof r == "string" && r.endsWith("!important") && (r = r.slice(0, -10), i |= Xs.Important), e.setStyle(n, o, r, i));
} }
function Py(e, t, n, o, r) { let i = pe(), s = o & 2; try {
    Zt(-1), s && t.length > I && Ey(e, t, I, !1);
    let a = s ? k.TemplateUpdateStart : k.TemplateCreateStart;
    V(a, r, n), n(o, r);
}
finally {
    Zt(i);
    let a = s ? k.TemplateUpdateEnd : k.TemplateCreateEnd;
    V(a, r, n);
} }
function qa(e, t, n) { qS(e, t, n), (n.flags & 64) === 64 && GS(e, t, n); }
function Zo(e, t, n = K) { let o = t.localNames; if (o !== null) {
    let r = t.index + 1;
    for (let i = 0; i < o.length; i += 2) {
        let s = o[i + 1], a = s === -1 ? n(t, e) : e[s];
        e[r++] = a;
    }
} }
function HS(e, t, n, o) { let i = o.get(Ld, yv) || n === Ue.ShadowDom || n === Ue.ExperimentalIsolatedShadowDom, s = e.selectRootElement(t, i); return BS(s), s; }
function BS(e) { Ly(e); }
var Ly = () => null;
function US(e) { ov(e) ? ry(e) : d_(e); }
function Fy() { Ly = US; }
function $S(e) { return e === "class" ? "className" : e === "for" ? "htmlFor" : e === "formaction" ? "formAction" : e === "innerHtml" ? "innerHTML" : e === "readonly" ? "readOnly" : e === "tabindex" ? "tabIndex" : e; }
function Ga(e, t, n, o, r, i) { let s = t[v]; if (Za(e, s, t, n, o)) {
    Te(e) && jy(t, e.index);
    return;
} e.type & 3 && (n = $S(n)), mf(e, t, n, o, r, i); }
function mf(e, t, n, o, r, i) { if (e.type & 3) {
    let s = K(e, t);
    o = i != null ? i(o, e.value || "", n) : o, r.setProperty(s, n, o);
}
else
    e.type & 12; }
function jy(e, t) { let n = Ee(t, e); n[w] & 16 || (n[w] |= 64); }
function qS(e, t, n) { let o = n.directiveStart, r = n.directiveEnd; Te(n) && TS(t, n, e.data[o + n.componentOffset]), e.firstCreatePass || zs(n, t); let i = n.initialInputs; for (let s = o; s < r; s++) {
    let a = e.data[s], c = Qr(t, e, s, n);
    if (Be(c, t), i !== null && QS(t, s - o, c, a, n, i), Ve(a)) {
        let l = Ee(n.index, t);
        l[$] = Qr(t, e, s, n);
    }
} }
function GS(e, t, n) { let o = n.directiveStart, r = n.directiveEnd, i = n.index, s = oh(); try {
    Zt(i);
    for (let a = o; a < r; a++) {
        let c = e.data[a], l = t[a];
        gs(a), (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) && WS(c, l);
    }
}
finally {
    Zt(-1), gs(s);
} }
function WS(e, t) { e.hostBindings !== null && e.hostBindings(1, t); }
function vf(e, t) { let n = e.directiveRegistry, o = null; if (n)
    for (let r = 0; r < n.length; r++) {
        let i = n[r];
        my(t, i.selectors, !1) && (o ??= [], Ve(i) ? o.unshift(i) : o.push(i));
    } return o; }
function zS(e, t, n, o, r, i) { let s = K(e, t); Wa(t[T], s, i, e.value, n, o, r); }
function Wa(e, t, n, o, r, i, s) { if (i == null)
    e.removeAttribute(t, r, n);
else {
    let a = s == null ? R(i) : s(i, o || "", r);
    e.setAttribute(t, r, a, n);
} }
function QS(e, t, n, o, r, i) { let s = i[t]; if (s !== null)
    for (let a = 0; a < s.length; a += 2) {
        let c = s[a], l = s[a + 1];
        bn(o, n, c, l);
    } }
function za(e, t, n, o, r) { let i = I + n, s = t[v], a = r(s, t, e, o, n); t[i] = a, at(e, !0); let c = e.type === 2; return c ? (iy(t[T], a, e), (Jg() === 0 || eo(e)) && Be(a, t), Xg()) : Be(a, t), Rr() && (!c || !Go(e)) && gf(s, t, a, e), e; }
function Qa(e) { let t = e; return Vl() ? Hl() : (t = t.parent, at(t, !1)), t; }
function Vy(e, t, n) { return (e === null || Ve(e)) && (n = wr(n[t.index])), n[T]; }
function yf(e, t) { let n = e[L]; if (!n)
    return; let o; try {
    o = n.get(Mt, null);
}
catch {
    o = null;
} o?.(t); }
function Za(e, t, n, o, r) { let i = e.inputs?.[o], s = e.hostDirectiveInputs?.[o], a = !1; if (s)
    for (let c = 0; c < s.length; c += 2) {
        let l = s[c], u = s[c + 1], d = t.data[l];
        bn(d, n[l], u, r), a = !0;
    } if (i)
    for (let c of i) {
        let l = n[c], u = t.data[c];
        bn(u, l, o, r), a = !0;
    } return a; }
function ZS(e, t, n, o, r, i) { let s = null, a = null, c = null, l = !1, u = e.directiveToIndex.get(o.type); if (typeof u == "number" ? s = u : [s, a, c] = u, a !== null && c !== null && e.hostDirectiveInputs?.hasOwnProperty(r)) {
    let d = e.hostDirectiveInputs[r];
    for (let f = 0; f < d.length; f += 2) {
        let p = d[f];
        if (p >= a && p <= c) {
            let g = t.data[p], m = d[f + 1];
            bn(g, n[p], m, i), l = !0;
        }
        else if (p > c)
            break;
    }
} return s !== null && o.inputs.hasOwnProperty(r) && (bn(o, n[s], r, i), l = !0), l; }
function YS(e, t) { let n = Ee(t, e), o = n[v]; KS(o, n); let r = n[q]; r !== null && n[de] === null && (n[de] = kv(r, n[L])), V(k.ComponentStart); try {
    Ya(o, n, n[$]);
}
finally {
    V(k.ComponentEnd, n[$]);
} }
function KS(e, t) { for (let n = t.length; n < e.blueprint.length; n++)
    t.push(e.blueprint[n]); }
function Ya(e, t, n) { vs(t); try {
    let o = e.viewQuery;
    o !== null && Fu(1, o, n);
    let r = e.template;
    r !== null && Py(e, t, r, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), t[rt]?.finishViewCreation(e), e.staticContentQueries && qv(e, t), e.staticViewQueries && Fu(2, e.viewQuery, n);
    let i = e.components;
    i !== null && JS(t, i);
}
catch (o) {
    throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), o;
}
finally {
    t[w] &= -5, ys();
} }
function JS(e, t) { for (let n = 0; n < t.length; n++)
    YS(e, t[n]); }
function Yo(e, t, n, o) { let r = O(null); try {
    let i = t.tView, a = e[w] & 4096 ? 4096 : 16, c = La(e, i, n, a, null, t, null, null, o?.injector ?? null, o?.embeddedViewInjector ?? null, o?.dehydratedView ?? null), l = e[t.index];
    c[It] = l;
    let u = e[rt];
    return u !== null && (c[rt] = u.createEmbeddedView(i)), Ya(i, c, n), c;
}
finally {
    O(r);
} }
function Rn(e, t) { return !t || t.firstChild === null || Zr(e); }
function No(e, t, n, o, r = !1) { for (; n !== null;) {
    if (n.type === 128) {
        n = r ? n.projectionNext : n.next;
        continue;
    }
    let i = t[n.index];
    i !== null && o.push(F(i)), X(i) && Ka(i, o);
    let s = n.type;
    if (s & 8)
        No(e, t, n.child, o);
    else if (s & 32) {
        let a = af(n, t), c;
        for (; c = a();)
            o.push(c);
    }
    else if (s & 16) {
        let a = ky(t, n);
        if (Array.isArray(a))
            o.push(...a);
        else {
            let c = yt(t[ne]);
            No(c[v], c, a, o, !0);
        }
    }
    n = r ? n.projectionNext : n.next;
} return o; }
function Ka(e, t) { for (let n = W; n < e.length; n++) {
    let o = e[n], r = o[v].firstChild;
    r !== null && No(o[v], o, r, t);
} e[Je] !== e[q] && t.push(e[Je]); }
function Hy(e) { if (e[yn] !== null) {
    for (let t of e[yn])
        t.impl.addSequence(t);
    e[yn].length = 0;
} }
var By = [];
function XS(e) { return e[ke] ?? eb(e); }
function eb(e) { let t = By.pop() ?? Object.create(nb); return t.lView = e, t; }
function tb(e) { e.lView[ke] !== e && (e.lView = null, By.push(e)); }
var nb = ae(H({}, Ht), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { Dn(e.lView); }, consumerOnSignalRead() { this.lView[ke] = this; } });
function ob(e) { let t = e[ke] ?? Object.create(rb); return t.lView = e, t; }
var rb = ae(H({}, Ht), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { let t = yt(e.lView); for (; t && !Uy(t[v]);)
        t = yt(t); t && us(t); }, consumerOnSignalRead() { this.lView[ke] = this; } });
function Uy(e) { return e.type !== 2; }
function $y(e) { if (e[Gt] === null)
    return; let t = !0; for (; t;) {
    let n = !1;
    for (let o of e[Gt])
        o.dirty && (n = !0, o.zone === null || Zone.current === o.zone ? o.run() : o.zone.run(() => o.run()));
    t = n && !!(e[w] & 8192);
} }
var ib = 100;
function qy(e, t = 0) { let o = e[Ke].rendererFactory, r = !1; r || o.begin?.(); try {
    sb(e, t);
}
finally {
    r || o.end?.();
} }
function sb(e, t) { let n = Ul(); try {
    ur(!0), Yu(e, t);
    let o = 0;
    for (; to(e);) {
        if (o === ib)
            throw new C(103, !1);
        o++, Yu(e, 1);
    }
}
finally {
    ur(n);
} }
function Gy(e, t, n, o) { if (st(t))
    return; let r = t[w], i = !1, s = !1; vs(t); let a = !0, c = null, l = null; i || (Uy(e) ? (l = XS(t), c = gt(l)) : Vi() === null ? (a = !1, l = ob(t), c = gt(l)) : t[ke] && ($t(t[ke]), t[ke] = null)); try {
    wl(t), $l(e.bindingStartIndex), n !== null && Py(e, t, n, 2, o);
    let u = (r & 3) === 3;
    if (!i)
        if (u) {
            let p = e.preOrderCheckHooks;
            p !== null && Os(t, p, null);
        }
        else {
            let p = e.preOrderHooks;
            p !== null && ks(t, p, 0, null), su(t, 0);
        }
    if (s || ab(t), $y(t), Wy(t, 0), e.contentQueries !== null && qv(e, t), !i)
        if (u) {
            let p = e.contentCheckHooks;
            p !== null && Os(t, p);
        }
        else {
            let p = e.contentHooks;
            p !== null && ks(t, p, 1), su(t, 1);
        }
    lb(e, t);
    let d = e.components;
    d !== null && Qy(t, d, 0);
    let f = e.viewQuery;
    if (f !== null && Fu(2, f, o), !i)
        if (u) {
            let p = e.viewCheckHooks;
            p !== null && Os(t, p);
        }
        else {
            let p = e.viewHooks;
            p !== null && ks(t, p, 2), su(t, 2);
        }
    if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[cs]) {
        for (let p of t[cs])
            p();
        t[cs] = null;
    }
    i || (Hy(t), t[w] &= -73);
}
catch (u) {
    throw i || Dn(t), u;
}
finally {
    l !== null && (Ut(l, c), a && tb(l)), ys();
} }
function Wy(e, t) { for (let n = lv(e); n !== null; n = uv(n))
    for (let o = W; o < n.length; o++) {
        let r = n[o];
        zy(r, t);
    } }
function ab(e) { for (let t = lv(e); t !== null; t = uv(t)) {
    if (!(t[w] & 2))
        continue;
    let n = t[En];
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        us(r);
    }
} }
function cb(e, t, n) { V(k.ComponentStart); let o = Ee(t, e); try {
    zy(o, n);
}
finally {
    V(k.ComponentEnd, o[$]);
} }
function zy(e, t) { ls(e) && Yu(e, t); }
function Yu(e, t) { let o = e[v], r = e[w], i = e[ke], s = !!(t === 0 && r & 16); if (s ||= !!(r & 64 && t === 0), s ||= !!(r & 1024), s ||= !!(i?.dirty && Wn(i)), s ||= !1, i && (i.dirty = !1), e[w] &= -9217, s)
    Gy(o, e, o.template, e[$]);
else if (r & 8192) {
    let a = O(null);
    try {
        $y(e), Wy(e, 1);
        let c = o.components;
        c !== null && Qy(e, c, 1), Hy(e);
    }
    finally {
        O(a);
    }
} }
function Qy(e, t, n) { for (let o = 0; o < t.length; o++)
    cb(e, t[o], n); }
function lb(e, t) { let n = e.hostBindingOpCodes; if (n !== null)
    try {
        for (let o = 0; o < n.length; o++) {
            let r = n[o];
            if (r < 0)
                Zt(~r);
            else {
                let i = r, s = n[++o], a = n[++o];
                nh(s, i);
                let c = t[i];
                V(k.HostBindingsUpdateStart, c);
                try {
                    a(2, c);
                }
                finally {
                    V(k.HostBindingsUpdateEnd, c);
                }
            }
        }
    }
    finally {
        Zt(-1);
    } }
function Ti(e, t) { let n = Ul() ? 64 : 1088; for (e[Ke].changeDetectionScheduler?.notify(t); e;) {
    e[w] |= n;
    let o = yt(e);
    if (it(e) && !o)
        return e;
    e = o;
} return null; }
function Zy(e, t, n, o) { return [e, !0, 0, t, null, o, null, n, null, null]; }
function Yy(e, t) { let n = W + t; if (n < e.length)
    return e[n]; }
function Ko(e, t, n, o = !0) { let r = t[v]; if (ub(r, t, e, n), o) {
    let s = ta(n, e), a = t[T], c = a.parentNode(e[Je]);
    c !== null && OS(r, e[ue], a, t, c, s);
} let i = t[de]; i !== null && i.firstChild !== null && (i.firstChild = null); }
function Ef(e, t) { let n = Jr(e, t); return n !== void 0 && Ci(n[v], n), n; }
function Jr(e, t) { if (e.length <= W)
    return; let n = W + t, o = e[n]; if (o) {
    let r = o[It];
    r !== null && r !== e && ff(r, o), t > 0 && (e[n - 1][me] = o[me]);
    let i = Dr(e, W + t);
    wy(o[v], o);
    let s = i[rt];
    s !== null && s.detachView(i[v]), o[Z] = null, o[me] = null, o[w] &= -129;
} return o; }
function ub(e, t, n, o) { let r = W + o, i = n.length; o > 0 && (n[r - 1][me] = t), o < i - W ? (t[me] = n[r], fl(n, W + o, t)) : (n.push(t), t[me] = null), t[Z] = n; let s = t[It]; s !== null && n !== s && Ky(s, t); let a = t[rt]; a !== null && a.insertView(e), ds(t), t[w] |= 128; }
function Ky(e, t) { let n = e[En], o = t[Z]; if (oe(o))
    e[w] |= 2;
else {
    let r = o[Z][ne];
    t[ne] !== r && (e[w] |= 2);
} n === null ? e[En] = [t] : n.push(t); }
var tn = class {
    _lView;
    _cdRefInjectingView;
    _appRef = null;
    _attachedToViewContainer = !1;
    exhaustive;
    get rootNodes() { let t = this._lView, n = t[v]; return No(n, t, n.firstChild, []); }
    constructor(t, n) { this._lView = t, this._cdRefInjectingView = n; }
    get context() { return this._lView[$]; }
    set context(t) { this._lView[$] = t; }
    get destroyed() { return st(this._lView); }
    destroy() { if (this._appRef)
        this._appRef.detachView(this);
    else if (this._attachedToViewContainer) {
        let t = this._lView[Z];
        if (X(t)) {
            let n = t[Nr], o = n ? n.indexOf(this) : -1;
            o > -1 && (Jr(t, o), Dr(n, o));
        }
        this._attachedToViewContainer = !1;
    } Ci(this._lView[v], this._lView); }
    onDestroy(t) { Sr(this._lView, t); }
    markForCheck() { Ti(this._cdRefInjectingView || this._lView, 4); }
    detach() { this._lView[w] &= -129; }
    reattach() { ds(this._lView), this._lView[w] |= 128; }
    detectChanges() { this._lView[w] |= 1024, qy(this._lView); }
    checkNoChanges() { }
    attachToViewContainerRef() { if (this._appRef)
        throw new C(902, !1); this._attachedToViewContainer = !0; }
    detachFromAppRef() { this._appRef = null; let t = it(this._lView), n = this._lView[It]; n !== null && !t && ff(n, this._lView), _y(this._lView[v], this._lView); }
    attachToAppRef(t) { if (this._attachedToViewContainer)
        throw new C(902, !1); this._appRef = t; let n = it(this._lView), o = this._lView[It]; o !== null && !n && Ky(o, this._lView), ds(this._lView); }
};
function db(e) { return to(e._lView) || !!(e._lView[w] & 64); }
function fb(e) { us(e._lView); }
var Xr = (() => { class e {
    _declarationLView;
    _declarationTContainer;
    elementRef;
    static __NG_ELEMENT_ID__ = pb;
    constructor(n, o, r) { this._declarationLView = n, this._declarationTContainer = o, this.elementRef = r; }
    get ssrId() { return this._declarationTContainer.tView?.ssrId || null; }
    createEmbeddedView(n, o) { return this.createEmbeddedViewImpl(n, o); }
    createEmbeddedViewImpl(n, o, r) { let i = Yo(this._declarationLView, this._declarationTContainer, n, { embeddedViewInjector: o, dehydratedView: r }); return new tn(i); }
} return e; })();
function pb() { return Ja(_(), h()); }
function Ja(e, t) { return e.type & 4 ? new Xr(t, e, jo(e, t)) : null; }
var Ku = "<-- AT THIS LOCATION";
function gb(e) { switch (e) {
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
function hb(e, t) {
    let n = `During serialization, Angular was unable to find an element in the DOM:

`, o = `${Eb(e, t, !1)}

`, r = Db();
    throw new C(-502, n + o + r);
}
function Jy(e) {
    let t = "During serialization, Angular detected DOM nodes that were created outside of Angular context and provided as projectable nodes (likely via `ViewContainerRef.createComponent` or `createComponent` APIs). Hydration is not supported for such cases, consider refactoring the code to avoid this pattern or using `ngSkipHydration` on the host element of the component.\n\n", n = `${Ib(e)}

`, o = t + n + Cb();
    return new C(-503, o);
}
function mb(e) { let t = []; if (e.attrs)
    for (let n = 0; n < e.attrs.length;) {
        let o = e.attrs[n++];
        if (typeof o == "number")
            break;
        let r = e.attrs[n++];
        t.push(`${o}="${na(r)}"`);
    } return t.join(" "); }
var vb = new Set(["ngh", "ng-version", "ng-server-context"]);
function yb(e) { let t = []; for (let n = 0; n < e.attributes.length; n++) {
    let o = e.attributes[n];
    vb.has(o.name) || t.push(`${o.name}="${na(o.value)}"`);
} return t.join(" "); }
function fu(e, t = "\u2026") { switch (e.type) {
    case 1: return `#text${e.value ? `(${e.value})` : ""}`;
    case 2:
        let o = mb(e), r = e.value.toLowerCase();
        return `<${r}${o ? " " + o : ""}>${t}</${r}>`;
    case 8: return "<!-- ng-container -->";
    case 4: return "<!-- container -->";
    default: return `#node(${gb(e.type)})`;
} }
function Ls(e, t = "\u2026") { let n = e; switch (n.nodeType) {
    case Node.ELEMENT_NODE:
        let o = n.tagName.toLowerCase(), r = yb(n);
        return `<${o}${r ? " " + r : ""}>${t}</${o}>`;
    case Node.TEXT_NODE:
        let i = n.textContent ? na(n.textContent) : "";
        return `#text${i ? `(${i})` : ""}`;
    case Node.COMMENT_NODE: return `<!-- ${na(n.textContent ?? "")} -->`;
    default: return `#node(${n.nodeType})`;
} }
function Eb(e, t, n) {
    let r = "";
    t.prev ? (r += `  \u2026
`, r += "  " + fu(t.prev) + `
`) : t.type && t.type & 12 && (r += `  \u2026
`), n ? (r += "  " + fu(t) + `
`, r += `  <!-- container -->  ${Ku}
`) : r += "  " + fu(t) + `  ${Ku}
`, r += `  \u2026
`;
    let i = t.type ? pf(e[v], t, e) : null;
    return i && (r = Ls(i, `
` + r)), r;
}
function Ib(e) {
    let n = "", o = e;
    return o.previousSibling && (n += `  \u2026
`, n += "  " + Ls(o.previousSibling) + `
`), n += "  " + Ls(o) + `  ${Ku}
`, e.nextSibling && (n += `  \u2026
`), e.parentNode && (n = Ls(o.parentNode, `
` + n)), n;
}
function Db(e) {
    return `To fix this problem:
  * check ${e ? `the "${e}"` : "corresponding"} component for hydration-related issues
  * check to see if your template has valid HTML structure
  * or skip hydration by adding the \`ngSkipHydration\` attribute to its host node in a template

`;
}
function Cb() {
    return `Note: attributes are only displayed to better represent the DOM but have no effect on hydration mismatches.

`;
}
function Tb(e) { return e.replace(/\s+/gm, ""); }
function na(e, t = 50) { return e ? (e = Tb(e), e.length > t ? `${e.substring(0, t - 1)}\u2026` : e) : ""; }
function Xy(e, t, n) { let o = t.insertBeforeIndex, r = Array.isArray(o) ? o[0] : o; return r === null ? Ay(e, t, n) : F(n[r]); }
function eE(e, t, n, o, r) { let i = t.insertBeforeIndex; if (Array.isArray(i)) {
    let s = o, a = null;
    if (t.type & 3 || (a = s, s = r), s !== null && t.componentOffset === -1)
        for (let c = 1; c < i.length; c++) {
            let l = n[i[c]];
            Sn(e, s, l, a, !1);
        }
} }
function Hn(e, t, n, o, r) { let i = e.data[t]; if (i === null)
    i = If(e, t, n, o, r), th() && (i.flags |= 32);
else if (i.type & 64) {
    i.type = n, i.value = o, i.attrs = r;
    let s = no();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
} return at(i, !0), i; }
function If(e, t, n, o, r) { let i = jl(), s = Vl(), a = s ? i : i && i.parent, c = e.data[t] = Nb(e, a, n, t, o, r); return Mb(e, c, i, s), c; }
function Mb(e, t, n, o) { e.firstChild === null && (e.firstChild = t), n !== null && (o ? n.child == null && t.parent !== null && (n.child = t) : n.next === null && (n.next = t, t.prev = n)); }
function Nb(e, t, n, o, r, i) { let s = t ? t.injectorIndex : -1, a = 0; return br() && (a |= 128), { type: n, index: o, insertBeforeIndex: null, injectorIndex: s, directiveStart: -1, directiveEnd: -1, directiveStylingLast: -1, componentOffset: -1, fieldIndex: -1, customControlIndex: -1, propertyBindings: null, flags: a, providerIndexes: 0, value: r, attrs: i, mergedAttrs: null, localNames: null, initialInputs: null, inputs: null, hostDirectiveInputs: null, outputs: null, hostDirectiveOutputs: null, directiveToIndex: null, tView: null, next: null, prev: null, projectionNext: null, child: null, parent: t, projection: null, styles: null, stylesWithoutHost: null, residualStyles: void 0, classes: null, classesWithoutHost: null, residualClasses: void 0, classBindings: 0, styleBindings: 0 }; }
function tE(e, t) { if (e.push(t), e.length > 1)
    for (let n = e.length - 2; n >= 0; n--) {
        let o = e[n];
        nE(o) || wb(o, t) && _b(o) === null && Sb(o, t.index);
    } }
function nE(e) { return !(e.type & 64); }
function wb(e, t) { return nE(t) || e.index > t.index; }
function _b(e) { let t = e.insertBeforeIndex; return Array.isArray(t) ? t[0] : t; }
function Sb(e, t) { let n = e.insertBeforeIndex; Array.isArray(n) ? n[0] = t : (Oy(Xy, eE), e.insertBeforeIndex = t); }
function Fr(e, t) { let n = e.data[t]; return n === null || typeof n == "string" ? null : n.hasOwnProperty("currentCaseLViewIndex") ? n : n.value; }
function bb(e, t, n) { let o = e.data[t]; o === null ? e.data[t] = n : o.value = n; }
function Ab(e, t) { let n = e.insertBeforeIndex; n === null ? (Oy(Xy, eE), n = e.insertBeforeIndex = [null, t]) : (jg(Array.isArray(n), !0, "Expecting array here"), n.push(t)); }
function Rb(e, t, n) { let o = If(e, n, 64, null, null); return tE(t, o), o; }
function Xa(e, t) { let n = t[e.currentCaseLViewIndex]; return n === null ? n : n < 0 ? ~n : n; }
function Ob(e) { return e >>> 17; }
function kb(e) { return (e & 131070) >>> 1; }
function xb(e, t, n) { return e | t << 17 | n << 1; }
function oE(e) { return e === -1; }
function Df(e, t, n) { e.index = 0; let o = Xa(t, n); o !== null ? e.removes = t.remove[o] : e.removes = j; }
function oa(e) { if (e.index < e.removes.length) {
    let t = e.removes[e.index++];
    if (t > 0)
        return e.lView[t];
    {
        e.stack.push(e.index, e.removes);
        let n = ~t, o = e.lView[v].data[n];
        return Df(e, o, e.lView), oa(e);
    }
}
else
    return e.stack.length === 0 ? (e.lView = void 0, null) : (e.removes = e.stack.pop(), e.index = e.stack.pop(), oa(e)); }
function Pb() { let e = { stack: [], index: -1 }; function t(n, o) { for (e.lView = o; e.stack.length;)
    e.stack.pop(); return Df(e, n.value, o), oa.bind(null, e); } return t; }
function Lb(e, t) { let n = { stack: [], index: -1, lView: t }; return Df(n, e, t), oa.bind(null, n); }
var Fb = new RegExp(`^(\\d+)*(${xd}|${kd})*(.*)`);
function jb(e, t) { let n = [e]; for (let o of t) {
    let r = n.length - 1;
    if (r > 0 && n[r - 1] === o) {
        let i = n[r] || 1;
        n[r] = i + 1;
    }
    else
        n.push(o, "");
} return n.join(""); }
function Vb(e) { let t = e.match(Fb), [n, o, r, i] = t, s = o ? parseInt(o, 10) : r, a = []; for (let [c, l, u] of i.matchAll(/(f|n)(\d*)/g)) {
    let d = parseInt(u, 10) || 1;
    a.push(l, d);
} return [s, ...a]; }
function Hb(e) { return !e.prev && e.parent?.type === 8; }
function pu(e) { return e.index - I; }
function Jo(e, t) { return !(e.type & 144) && !!t[e.index] && rE(F(t[e.index])); }
function rE(e) { return !!e && !e.isConnected; }
function iE(e, t) { let n = e.i18nNodes; if (n)
    return n.get(t); }
function Bb(e, t, n) { let r = e.data[pi]?.[n]; return r ? sE(r, t) : null; }
function Mi(e, t, n, o) { let r = pu(o), i = iE(e, r); if (i === void 0) {
    let s = e.data[pi];
    if (s?.[r])
        i = sE(s[r], n);
    else if (t.firstChild === o)
        i = e.firstChild;
    else {
        let a = o.prev === null, c = o.prev ?? o.parent;
        if (Hb(o)) {
            let l = pu(o.parent);
            i = Lu(e, l);
        }
        else {
            let l = K(c, n);
            if (a)
                i = l.firstChild;
            else {
                let u = pu(c), d = Lu(e, u);
                if (c.type === 2 && d) {
                    let p = Wd(e, u) + 1;
                    i = ec(p, d);
                }
                else
                    i = l.nextSibling;
            }
        }
    }
} return i; }
function ec(e, t) { let n = t; for (let o = 0; o < e; o++)
    n = n.nextSibling; return n; }
function Ub(e, t) { let n = e; for (let o = 0; o < t.length; o += 2) {
    let r = t[o], i = t[o + 1];
    for (let s = 0; s < i; s++)
        switch (r) {
            case mv:
                n = n.firstChild;
                break;
            case vv:
                n = n.nextSibling;
                break;
        }
} return n; }
function sE(e, t) { let [n, ...o] = Vb(e), r; if (n === kd)
    r = t[ne][q];
else if (n === xd)
    r = tf(t[ne][q]);
else {
    let i = Number(n);
    r = F(t[i + I]);
} return Ub(r, o); }
function Ju(e, t) { if (e === t)
    return []; if (e.parentElement == null || t.parentElement == null)
    return null; if (e.parentElement === t.parentElement)
    return $b(e, t); {
    let n = t.parentElement, o = Ju(e, n), r = Ju(n.firstChild, t);
    return !o || !r ? null : [...o, mv, ...r];
} }
function $b(e, t) { let n = [], o = null; for (o = e; o != null && o !== t; o = o.nextSibling)
    n.push(vv); return o == null ? null : n; }
function jh(e, t, n) { let o = Ju(e, t); return o === null ? null : jb(n, o); }
function aE(e, t, n) { let o = e.parent, r, i, s; for (; o !== null && (Jo(o, t) || n?.has(o.index));)
    o = o.parent; o === null || !(o.type & 3) ? (r = s = kd, i = t[ne][q]) : (r = o.index, i = F(t[r]), s = R(r - I)); let a = F(t[e.index]); if (e.type & 44) {
    let l = Nn(t, e);
    l && (a = l);
} let c = jh(i, a, s); if (c === null && i !== a) {
    let l = i.ownerDocument.body;
    if (c = jh(l, a, xd), c === null)
        throw hb(t, e);
} return c; }
function cE(e, t) { let n = e.createNodeIterator(t, NodeFilter.SHOW_COMMENT, { acceptNode: qb }), o, r = new Map; for (; o = n.nextNode();) {
    let i = "ngh=", s = o?.textContent, a = s?.indexOf(i) ?? -1;
    if (a > -1) {
        let c = s.substring(a + i.length).trim();
        r.set(c, o);
    }
} return r; }
function qb(e) { return e.textContent?.trimStart().startsWith("ngh=") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; }
var lE = !1, uE = () => { };
function Cf(e) { lE = e; }
function tc() { return lE; }
function Gb(e, t, n, o) { uE(e, t, n, o); }
function dE() { uE = Yb; }
function fE(e) { return e = e ?? E(le), e.get(Fd, !1); }
function pE(e, t) { let n = t.i18nChildren.get(e); return n === void 0 && (n = Wb(e), t.i18nChildren.set(e, n)), n; }
function Wb(e) { let t = new Set; function n(o) { switch (t.add(o.index), o.kind) {
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
function gE(e, t, n) { if (!n.isI18nHydrationEnabled)
    return null; let o = e[v], r = o.data[t]; if (!r || !r.ast)
    return null; let i = o.data[r.parentTNodeIndex]; if (i && rv(i))
    return null; let s = { caseQueue: [], disconnectedNodes: new Set, disjointNodes: new Set }; return Xu(e, s, n, r.ast), s.caseQueue.length === 0 && s.disconnectedNodes.size === 0 && s.disjointNodes.size === 0 ? null : s; }
function Xu(e, t, n, o) { let r = null; for (let i of o) {
    let s = Qb(e, t, n, i);
    s && (zb(r, s) && t.disjointNodes.add(i.index - I), r = s);
} return r; }
function zb(e, t) { return e && e.nextSibling !== t; }
function Qb(e, t, n, o) { let r = F(e[o.index]); if (!r || rE(r))
    return t.disconnectedNodes.add(o.index - I), null; let i = r; switch (o.kind) {
    case 0: {
        zd(n, i);
        break;
    }
    case 1:
    case 2: {
        Xu(e, t, n, o.children);
        break;
    }
    case 3: {
        let s = e[o.currentCaseLViewIndex];
        if (s != null) {
            let a = s < 0 ? ~s : s;
            t.caseQueue.push(a), Xu(e, t, n, o.cases[a]);
        }
        break;
    }
} return Zb(e, o); }
function Zb(e, t) { let o = e[v].data[t.index]; return ya(o) ? Nn(e, o) : t.kind === 3 ? Lb(o, e)() ?? F(e[t.index]) : F(e[t.index]) ?? null; }
function Cn(e, t) { e.currentNode = t; }
function kr(e, t, n) { let o = n.index - I, { disconnectedNodes: r } = e, i = t.currentNode; return t.isConnected ? (e.i18nNodes.set(o, i), r.delete(o)) : r.add(o), i; }
function gu(e, t) { let n = e.currentNode; for (let o = 0; o < t && n; o++)
    n = n?.nextSibling ?? null; return n; }
function hu(e, t) { return { currentNode: t, isConnected: e.isConnected }; }
function Yb(e, t, n, o) { let r = e[de]; if (!r || !tc() || n && (rv(n) || Oa(r, n.index - I)))
    return; let i = e[v], s = i.data[t]; function a() { if (oE(o)) {
    let p = Mi(r, i, e, n);
    return n.type & 8 ? p : p.firstChild;
} return r?.firstChild; } let c = a(), l = Fv(r) ?? new Set, u = r.i18nNodes ??= new Map, d = r.data[wa]?.[t - I] ?? [], f = r.dehydratedIcuData ??= new Map; ao({ hydrationInfo: r, lView: e, i18nNodes: u, disconnectedNodes: l, caseQueue: d, dehydratedIcuData: f }, { currentNode: c, isConnected: !0 }, s.ast), r.disconnectedNodes = l.size === 0 ? null : l; }
function ao(e, t, n) { if (Array.isArray(n)) {
    let o = t;
    for (let r of n) {
        let i = Bb(e.hydrationInfo, e.lView, r.index - I);
        i && (o = hu(t, i)), ao(e, o, r);
    }
}
else {
    if (e.disconnectedNodes.has(n.index - I))
        return;
    switch (n.kind) {
        case 0: {
            let o = kr(e, t, n);
            Cn(t, o?.nextSibling ?? null);
            break;
        }
        case 1: {
            ao(e, hu(t, t.currentNode?.firstChild ?? null), n.children);
            let o = kr(e, t, n);
            Cn(t, o?.nextSibling ?? null);
            break;
        }
        case 2: {
            let o = n.index - I, { hydrationInfo: r } = e, i = Pv(r, o);
            switch (n.type) {
                case 0: {
                    let s = kr(e, t, n);
                    if (m_(r, o)) {
                        ao(e, t, n.children);
                        let a = gu(t, 1);
                        Cn(t, a);
                    }
                    else if (ao(e, hu(t, t.currentNode?.firstChild ?? null), n.children), Cn(t, s?.nextSibling ?? null), i !== null) {
                        let a = gu(t, i + 1);
                        Cn(t, a);
                    }
                    break;
                }
                case 1: {
                    kr(e, t, n);
                    let s = gu(t, i + 1);
                    Cn(t, s);
                    break;
                }
            }
            break;
        }
        case 3: {
            let o = t.isConnected ? e.caseQueue.shift() : null, r = { currentNode: null, isConnected: !1 };
            for (let s = 0; s < n.cases.length; s++)
                ao(e, s === o ? t : r, n.cases[s]);
            o !== null && e.dehydratedIcuData.set(n.index, { case: o, node: n });
            let i = kr(e, t, n);
            Cn(t, i?.nextSibling ?? null);
            break;
        }
    }
} }
var hE = () => { };
function Kb(e, t, n) { hE(e, t, n); }
function mE() { hE = Jb; }
function Jb(e, t, n) { let o = e[de]?.dehydratedIcuData; o && o.get(t)?.case === n && o.delete(t); }
function Xb(e) { let t = e[de]; if (t) {
    let { i18nNodes: n, dehydratedIcuData: o } = t;
    if (n && o) {
        let r = e[T];
        for (let i of o.values())
            eA(r, n, i);
    }
    t.i18nNodes = void 0, t.dehydratedIcuData = void 0;
} }
function eA(e, t, n) { for (let o of n.node.cases[n.case]) {
    let r = t.get(o.index - I);
    r && Ei(e, r, !1);
} }
function nc(e) { let t = e[xe] ?? [], o = e[Z][T], r = []; for (let i of t)
    i.data[_a] !== void 0 ? r.push(i) : vE(i, o); e[xe] = r; }
function tA(e) { let { lContainer: t } = e, n = t[xe]; if (n === null)
    return; let r = t[Z][T]; for (let i of n)
    vE(i, r); }
function vE(e, t) { let n = 0, o = e.firstChild; if (o) {
    let r = e.data[bt];
    for (; n < r;) {
        let i = o.nextSibling;
        Ei(t, o, !1), o = i, n++;
    }
} }
function oc(e) { nc(e); let t = e[q]; oe(t) && ra(t); for (let n = W; n < e.length; n++)
    ra(e[n]); }
function ra(e) { Xb(e); let t = e[v]; for (let n = I; n < t.bindingStartIndex; n++)
    if (X(e[n])) {
        let o = e[n];
        oc(o);
    }
    else
        oe(e[n]) && ra(e[n]); }
function Tf(e) { let t = e._views; for (let n of t) {
    let o = Gd(n);
    o !== null && o[q] !== null && (oe(o) ? ra(o) : oc(o));
} }
function nA(e, t, n, o) { e !== null && (n.cleanup(t), oc(e.lContainer), Tf(o)); }
function oA(e, t) { let n = []; for (let o of t)
    for (let r = 0; r < (o[fi] ?? 1); r++) {
        let i = { data: o, firstChild: null };
        o[bt] > 0 && (i.firstChild = e, e = ec(o[bt], e)), n.push(i);
    } return [e, n]; }
var yE = () => null, EE = () => null;
function IE() { yE = rA, EE = iA; }
function rA(e, t) { return CE(e, t) ? e[xe].shift() : (nc(e), null); }
function ei(e, t) { return yE(e, t); }
function iA(e, t, n) { if (t.tView.ssrId === null)
    return null; let o = ei(e, t.tView.ssrId); return n[v].firstUpdatePass && o === null && sA(n, t), o; }
function DE(e, t, n) { return EE(e, t, n); }
function sA(e, t) { let n = t; for (; n;) {
    if (Vh(e, n))
        return;
    if ((n.flags & 256) === 256)
        break;
    n = n.prev;
} for (n = t.next; n && (n.flags & 512) === 512;) {
    if (Vh(e, n))
        return;
    n = n.next;
} }
function CE(e, t) { let n = e[xe]; return !t || n === null || n.length === 0 ? !1 : n[0].data[Na] === t; }
function Vh(e, t) { let n = t.tView?.ssrId; if (n == null)
    return !1; let o = e[t.index]; return X(o) && CE(o, n) ? (nc(o), !0) : !1; }
var TE = class {
}, rc = class {
}, ed = class {
    resolveComponentFactory(t) { throw new C(917, !1); }
}, Ni = class {
    static NULL = new ed;
}, ti = class {
}, aA = (() => { class e {
    destroyNode = null;
    static __NG_ELEMENT_ID__ = () => cA();
} return e; })();
function cA() { let e = h(), t = _(), n = Ee(t.index, e); return (oe(n) ? n : e)[T]; }
var ME = (() => { class e {
    static \u0275prov = U({ token: e, providedIn: "root", factory: () => null });
} return e; })();
function Mf(e) { return e.ngModule !== void 0; }
function Tn(e) { return !!hn(e); }
function _s(e) { return !!Qe(e); }
function Hh(e) { return !!Re(e); }
function jr(e) { return !!z(e); }
function lA(e) { return z(e) ? "component" : Re(e) ? "directive" : Qe(e) ? "pipe" : "type"; }
function uA(e, t) { if (hr(e) && (e = P(e), !e))
    throw new Error(`Expected forwardRef function, imported from "${Oe(t)}", to return a standalone entity or NgModule but got "${Oe(e) || e}".`); if (hn(e) == null) {
    let n = z(e) || Re(e) || Qe(e);
    if (n != null) {
        if (!n.standalone) {
            let o = lA(e);
            throw new Error(`The "${Oe(e)}" ${o}, imported from "${Oe(t)}", is not standalone. Does the ${o} have the standalone: false flag?`);
        }
    }
    else
        throw Mf(e) ? new Error(`A module with providers was imported from "${Oe(t)}". Modules with providers are not supported in standalone components imports.`) : new Error(`The "${Oe(e)}" type, imported from "${Oe(t)}", must be a standalone component / directive / pipe or an NgModule. Did you forget to add the required @Component / @Directive / @Pipe or @NgModule annotation?`);
} }
var td = class {
    ownerNgModule = new Map;
    ngModulesWithSomeUnresolvedDecls = new Set;
    ngModulesScopeCache = new Map;
    standaloneComponentsScopeCache = new Map;
    resolveNgModulesDecls() { if (this.ngModulesWithSomeUnresolvedDecls.size !== 0) {
        for (let t of this.ngModulesWithSomeUnresolvedDecls) {
            let n = hn(t);
            if (n?.declarations)
                for (let o of po(n.declarations))
                    jr(o) && this.ownerNgModule.set(o, t);
        }
        this.ngModulesWithSomeUnresolvedDecls.clear();
    } }
    getComponentDependencies(t, n) { this.resolveNgModulesDecls(); let o = z(t); if (o === null)
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
    registerNgModule(t, n) { if (!Tn(t))
        throw new Error(`Attempting to register a Type which is not NgModule as NgModule: ${t}`); this.ngModulesWithSomeUnresolvedDecls.add(t); }
    clearScopeCacheFor(t) { this.ngModulesScopeCache.delete(t), this.standaloneComponentsScopeCache.delete(t); }
    getNgModuleScope(t) { if (this.ngModulesScopeCache.has(t))
        return this.ngModulesScopeCache.get(t); let n = this.computeNgModuleScope(t); return this.ngModulesScopeCache.set(t, n), n; }
    computeNgModuleScope(t) { let n = Xi(t), o = { exported: { directives: new Set, pipes: new Set }, compilation: { directives: new Set, pipes: new Set } }; for (let r of po(n.imports))
        if (Tn(r)) {
            let i = this.getNgModuleScope(r);
            Jt(i.exported.directives, o.compilation.directives), Jt(i.exported.pipes, o.compilation.pipes);
        }
        else if (Ir(r))
            if (Hh(r) || jr(r))
                o.compilation.directives.add(r);
            else if (_s(r))
                o.compilation.pipes.add(r);
            else
                throw new C(980, "The standalone imported type is neither a component nor a directive nor a pipe");
        else {
            o.compilation.isPoisoned = !0;
            break;
        } if (!o.compilation.isPoisoned)
        for (let r of po(n.declarations)) {
            if (Tn(r) || Ir(r)) {
                o.compilation.isPoisoned = !0;
                break;
            }
            _s(r) ? o.compilation.pipes.add(r) : o.compilation.directives.add(r);
        } for (let r of po(n.exports))
        if (Tn(r)) {
            let i = this.getNgModuleScope(r);
            Jt(i.exported.directives, o.exported.directives), Jt(i.exported.pipes, o.exported.pipes), Jt(i.exported.directives, o.compilation.directives), Jt(i.exported.pipes, o.compilation.pipes);
        }
        else
            _s(r) ? o.exported.pipes.add(r) : o.exported.directives.add(r); return o; }
    getStandaloneComponentScope(t, n) { if (this.standaloneComponentsScopeCache.has(t))
        return this.standaloneComponentsScopeCache.get(t); let o = this.computeStandaloneComponentScope(t, n); return this.standaloneComponentsScopeCache.set(t, o), o; }
    computeStandaloneComponentScope(t, n) { let o = { compilation: { directives: new Set([t]), pipes: new Set, ngModules: new Set } }; for (let r of Ze(n ?? [])) {
        let i = P(r);
        try {
            uA(i, t);
        }
        catch {
            return o.compilation.isPoisoned = !0, o;
        }
        if (Tn(i)) {
            o.compilation.ngModules.add(i);
            let s = this.getNgModuleScope(i);
            if (s.exported.isPoisoned)
                return o.compilation.isPoisoned = !0, o;
            Jt(s.exported.directives, o.compilation.directives), Jt(s.exported.pipes, o.compilation.pipes);
        }
        else if (_s(i))
            o.compilation.pipes.add(i);
        else if (Hh(i) || jr(i))
            o.compilation.directives.add(i);
        else
            return o.compilation.isPoisoned = !0, o;
    } return o; }
    isOrphanComponent(t) { let n = z(t); return !n || n.standalone ? !1 : (this.resolveNgModulesDecls(), !this.ownerNgModule.has(t)); }
};
function Jt(e, t) { for (let n of e)
    t.add(n); }
var wo = new td, Fs = {}, Eo = class {
    injector;
    parentInjector;
    constructor(t, n) { this.injector = t, this.parentInjector = n; }
    get(t, n, o) { let r = this.injector.get(t, Fs, o); return r !== Fs || n === Fs ? r : this.parentInjector.get(t, n, o); }
};
function ia(e, t, n) { let o = n ? e.styles : null, r = n ? e.classes : null, i = 0; if (t !== null)
    for (let s = 0; s < t.length; s++) {
        let a = t[s];
        if (typeof a == "number")
            i = a;
        else if (i == 1)
            r = Ki(r, a);
        else if (i == 2) {
            let c = a, l = t[++s];
            o = Ki(o, c + ": " + l + ";");
        }
    } n ? e.styles = o : e.stylesWithoutHost = o, n ? e.classes = r : e.classesWithoutHost = r; }
function Xo(e, t = 0) { let n = h(); if (n === null)
    return he(e, t); let o = _(); return Ym(o, n, P(e), t); }
function NE() { let e = "invalid"; throw new Error(e); }
function wE(e, t, n, o, r) { let i = o === null ? null : { "": -1 }, s = r(e, n); if (s !== null) {
    let a = s, c = null, l = null;
    for (let u of s)
        if (u.resolveHostDirectives !== null) {
            [a, c, l] = u.resolveHostDirectives(s);
            break;
        }
    pA(e, t, n, a, i, c, l);
} i !== null && o !== null && dA(n, o, i); }
function dA(e, t, n) { let o = e.localNames = []; for (let r = 0; r < t.length; r += 2) {
    let i = n[t[r + 1]];
    if (i == null)
        throw new C(-301, !1);
    o.push(t[r], i);
} }
function fA(e, t, n) { t.componentOffset = n, (e.components ??= []).push(t.index); }
function pA(e, t, n, o, r, i, s) { let a = o.length, c = null; for (let f = 0; f < a; f++) {
    let p = o[f];
    c === null && Ve(p) && (c = p, fA(e, n, f)), Au(zs(n, t), e, p.type);
} EA(n, e.data.length, a), c?.viewProvidersResolver && c.viewProvidersResolver(c); for (let f = 0; f < a; f++) {
    let p = o[f];
    p.providersResolver && p.providersResolver(p);
} let l = !1, u = !1, d = Di(e, t, a, null); a > 0 && (n.directiveToIndex = new Map); for (let f = 0; f < a; f++) {
    let p = o[f];
    if (n.mergedAttrs = Mo(n.mergedAttrs, p.hostAttrs), hA(e, n, t, d, p), yA(d, p, r), s !== null && s.has(p)) {
        let [m, y] = s.get(p);
        n.directiveToIndex.set(p.type, [d, m + n.directiveStart, y + n.directiveStart]);
    }
    else
        (i === null || !i.has(p)) && n.directiveToIndex.set(p.type, d);
    p.contentQueries !== null && (n.flags |= 4), (p.hostBindings !== null || p.hostAttrs !== null || p.hostVars !== 0) && (n.flags |= 64);
    let g = p.type.prototype;
    !l && (g.ngOnChanges || g.ngOnInit || g.ngDoCheck) && ((e.preOrderHooks ??= []).push(n.index), l = !0), !u && (g.ngOnChanges || g.ngDoCheck) && ((e.preOrderCheckHooks ??= []).push(n.index), u = !0), d++;
} gA(e, n, i); }
function gA(e, t, n) { for (let o = t.directiveStart; o < t.directiveEnd; o++) {
    let r = e.data[o];
    if (n === null || !n.has(r))
        Bh(0, t, r, o), Bh(1, t, r, o), $h(t, o, !1);
    else {
        let i = n.get(r);
        Uh(0, t, i, o), Uh(1, t, i, o), $h(t, o, !0);
    }
} }
function Bh(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s;
        e === 0 ? s = t.inputs ??= {} : s = t.outputs ??= {}, s[i] ??= [], s[i].push(o), _E(t, i);
    } }
function Uh(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s = r[i], a;
        e === 0 ? a = t.hostDirectiveInputs ??= {} : a = t.hostDirectiveOutputs ??= {}, a[s] ??= [], a[s].push(o, i), _E(t, s);
    } }
function _E(e, t) { t === "class" ? e.flags |= 8 : t === "style" && (e.flags |= 16); }
function $h(e, t, n) { let { attrs: o, inputs: r, hostDirectiveInputs: i } = e; if (o === null || !n && r === null || n && i === null || nf(e)) {
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
function hA(e, t, n, o, r) { e.data[o] = r; let i = r.factory || (r.factory = qt(r.type, !0)), s = new _n(i, Ve(r), Xo, null); e.blueprint[o] = s, n[o] = s, mA(e, t, o, Di(e, n, r.hostVars, B), r); }
function mA(e, t, n, o, r) { let i = r.hostBindings; if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    vA(s) != a && s.push(a), s.push(n, o, i);
} }
function vA(e) { let t = e.length; for (; t > 0;) {
    let n = e[--t];
    if (typeof n == "number" && n < 0)
        return n;
} return 0; }
function yA(e, t, n) { if (n) {
    if (t.exportAs)
        for (let o = 0; o < t.exportAs.length; o++)
            n[t.exportAs[o]] = e;
    Ve(t) && (n[""] = e);
} }
function EA(e, t, n) { e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t; }
function Nf(e, t, n, o, r, i, s, a) { let c = t[v], l = c.consts, u = ve(l, s), d = Hn(c, e, n, o, u); return i && wE(c, t, d, ve(l, a), r), d.mergedAttrs = Mo(d.mergedAttrs, d.attrs), d.attrs !== null && ia(d, d.attrs, !1), d.mergedAttrs !== null && ia(d, d.mergedAttrs, !0), c.queries !== null && c.queries.elementStart(c, d), d; }
function wf(e, t) { Bm(e, t), Cl(t) && e.queries.elementEnd(t); }
function SE(e, t, n, o, r, i) { let s = t.consts, a = ve(s, r), c = Hn(t, e, n, o, a); if (c.mergedAttrs = Mo(c.mergedAttrs, c.attrs), i != null) {
    let l = ve(s, i);
    c.localNames = [];
    for (let u = 0; u < l.length; u += 2)
        c.localNames.push(l[u], -1);
} return c.attrs !== null && ia(c, c.attrs, !1), c.mergedAttrs !== null && ia(c, c.mergedAttrs, !0), t.queries !== null && t.queries.elementStart(t, c), c; }
function ni(e) { return ic(e) ? Array.isArray(e) || !(e instanceof Map) && Symbol.iterator in e : !1; }
function IA(e, t, n) { let o = e[Symbol.iterator](), r = t[Symbol.iterator](); for (;;) {
    let i = o.next(), s = r.next();
    if (i.done && s.done)
        return !0;
    if (i.done || s.done || !n(i.value, s.value))
        return !1;
} }
function bE(e, t) { if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
        t(e[n]);
else {
    let n = e[Symbol.iterator](), o;
    for (; !(o = n.next()).done;)
        t(o.value);
} }
function ic(e) { return e !== null && (typeof e == "function" || typeof e == "object"); }
function AE(e, t) { let n = ni(e), o = ni(t); return n && o ? IA(e, t, AE) : !n && (e && (typeof e == "object" || typeof e == "function")) && !o && (t && (typeof t == "object" || typeof t == "function")) ? !0 : Object.is(e, t); }
function dt(e, t, n) { return e[t] = n; }
function wi(e, t) { return e[t]; }
function Q(e, t, n) { if (n === B)
    return !1; let o = e[t]; return Object.is(o, n) ? !1 : (e[t] = n, !0); }
function On(e, t, n, o) { let r = Q(e, t, n); return Q(e, t + 1, o) || r; }
function sc(e, t, n, o, r) { let i = On(e, t, n, o); return Q(e, t + 2, r) || i; }
function $e(e, t, n, o, r, i) { let s = On(e, t, n, o); return On(e, t + 2, r, i) || s; }
var _f = Symbol("CONTROL");
function _t(e, t, n) { return function o(r) { let i = Te(e) ? Ee(e.index, t) : t; Ti(i, 5); let s = t[$], a = qh(t, s, n, r), c = o.__ngNextListenerFn__; for (; c;)
    a = qh(t, s, c, r) && a, c = c.__ngNextListenerFn__; return a; }; }
function qh(e, t, n, o) { let r = co(null); try {
    return V(k.OutputStart, t, n), n(o) !== !1;
}
catch (i) {
    return yf(e, i), !1;
}
finally {
    V(k.OutputEnd, t, n), co(r);
} }
function sa(e, t, n, o, r, i, s, a) { let c = eo(e), l = !1, u = null; if (!o && c && (u = CA(t, n, i, e.index)), u !== null) {
    let d = u.__ngLastListenerFn__ || u;
    d.__ngNextListenerFn__ = s, u.__ngLastListenerFn__ = s, l = !0;
}
else {
    let d = K(e, n), f = o ? o(d) : d;
    a_(n, f, i, a);
    let p = r.listen(f, i, a);
    if (!DA(i)) {
        let g = o ? m => o(F(m[e.index])) : e.index;
        RE(g, t, n, i, a, p, !1);
    }
} return l; }
function DA(e) { return e.startsWith("animation") || e.startsWith("transition"); }
function CA(e, t, n, o) { let r = e.cleanup; if (r != null)
    for (let i = 0; i < r.length - 1; i += 2) {
        let s = r[i];
        if (s === n && r[i + 1] === o) {
            let a = t[Wt], c = r[i + 2];
            return a && a.length > c ? a[c] : null;
        }
        typeof s == "string" && (i += 2);
    } return null; }
function RE(e, t, n, o, r, i, s) { let a = t.firstCreatePass ? bl(t) : null, c = Sl(n), l = c.length; c.push(r, i), a && a.push(o, e, l, (l + 1) * (s ? -1 : 1)); }
function TA(e, t, n, o, r) { let i = _t(e, t, n), s = MA(e, t, o, r, i); }
function MA(e, t, n, o, r) { let i = null, s = null, a = null, c = !1, l = e.directiveToIndex.get(n.type); if (typeof l == "number" ? i = l : [i, s, a] = l, s !== null && a !== null && e.hostDirectiveOutputs?.hasOwnProperty(o)) {
    let u = e.hostDirectiveOutputs[o];
    for (let d = 0; d < u.length; d += 2) {
        let f = u[d];
        if (f >= s && f <= a)
            c = !0, _o(e, t, f, u[d + 1], o, r);
        else if (f > a)
            break;
    }
} return n.outputs.hasOwnProperty(o) && (c = !0, _o(e, t, i, o, o, r)), c; }
function _o(e, t, n, o, r, i) { let s = t[n], a = t[v], l = a.data[n].outputs[o], d = s[l].subscribe(i); RE(e.index, a, t, r, i, d, !0); }
var St = Symbol("BINDING"), NA = { kind: "input", requiredVars: 1 }, wA = { kind: "field", requiredVars: 2 }, _A = { kind: "output", requiredVars: 0 };
function Gh(e, t, n) { let o = h(), r = fe(); if (Q(o, r, n)) {
    let i = o[v], s = Me(), a = Ee(s.index, o);
    Ti(a, 1);
    let c = i.directiveRegistry[e], l = ZS(s, i, o, c, t, n);
} }
function Wh(e, t) { return h()[t.directiveStart + e.targetIdx][_f]; }
function OE(e, t) { if (e === "formField") {
    let o = { [St]: wA, create: () => { Wh(o, _())?.create(); }, update: () => { Gh(o.targetIdx, e, t()), Wh(o, Me())?.update(); } };
    return o;
} let n = { [St]: NA, update: () => Gh(n.targetIdx, e, t()) }; return n; }
function kE(e, t) { let n = { [St]: _A, create: () => { let o = h(), r = _(), s = o[v].directiveRegistry[n.targetIdx]; TA(r, o, t, s, e); } }; return n; }
function SA(e, t) { let n = OE(e, t), o = kE(e + "Change", i => t.set(i)); return { [St]: { kind: "twoWay", requiredVars: n[St].requiredVars + o[St].requiredVars }, set targetIdx(i) { n.targetIdx = i, o.targetIdx = i; }, create: o.create, update: n.update }; }
var aa = class extends Ni {
    ngModule;
    constructor(t) { super(), this.ngModule = t; }
    resolveComponentFactory(t) { let n = z(t); return new nn(n, this.ngModule); }
};
function bA(e) { return Object.keys(e).map(t => { let [n, o, r] = e[t], i = { propName: n, templateName: t, isSignal: (o & Fa.SignalBased) !== 0 }; return r && (i.transform = r), i; }); }
function AA(e) { return Object.keys(e).map(t => ({ propName: e[t], templateName: t })); }
function RA(e, t, n) { let o = t instanceof be ? t : t?.injector; return o && e.getStandaloneInjector !== null && (o = e.getStandaloneInjector(o) || o), o ? new Eo(n, o) : n; }
function OA(e) { let t = e.get(ti, null); if (t === null)
    throw new C(407, !1); let n = e.get(ME, null), o = e.get(ze, null); return { rendererFactory: t, sanitizer: n, changeDetectionScheduler: o, ngReflect: !1 }; }
function kA(e, t) { let n = xE(e); return Pa(t, n, n === "svg" ? Ml : n === "math" ? Nl : null); }
function xE(e) { return (e.selectors[0][0] || "div").toLowerCase(); }
var nn = class extends rc {
    componentDef;
    ngModule;
    selector;
    componentType;
    ngContentSelectors;
    isBoundToModule;
    cachedInputs = null;
    cachedOutputs = null;
    get inputs() { return this.cachedInputs ??= bA(this.componentDef.inputs), this.cachedInputs; }
    get outputs() { return this.cachedOutputs ??= AA(this.componentDef.outputs), this.cachedOutputs; }
    constructor(t, n) { super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = IS(t.selectors), this.ngContentSelectors = t.ngContentSelectors ?? [], this.isBoundToModule = !!n; }
    create(t, n, o, r, i, s) { V(k.DynamicComponentStart); let a = O(null); try {
        let c = this.componentDef, l = xA(o, c, s, i), u = RA(c, r || this.ngModule, t), d = OA(u), f = d.rendererFactory.createRenderer(null, c), p = o ? HS(f, o, c.encapsulation, u) : kA(c, f), g = s?.some(zh) || i?.some(D => typeof D != "function" && D.bindings.some(zh)), m = La(null, l, null, 512 | rf(c), null, null, d, f, u, null, kv(p, u, !0));
        m[I] = p, vs(m);
        let y = null;
        try {
            let D = Nf(I, m, 2, "#host", () => l.directiveRegistry, !0, 0);
            iy(f, p, D), Be(p, m), qa(l, m, D), Qd(l, D, m), wf(l, D), n !== void 0 && LA(D, this.ngContentSelectors, n), y = Ee(D.index, m), m[$] = y[$], Ya(l, m, null);
        }
        catch (D) {
            throw y !== null && Ou(y), Ou(m), D;
        }
        finally {
            V(k.DynamicComponentEnd), ys();
        }
        return new ca(this.componentType, m, !!g);
    }
    finally {
        O(a);
    } }
};
function xA(e, t, n, o) { let r = e ? ["ng-version", "21.1.0"] : DS(t.selectors[0]), i = null, s = null, a = 0; if (n)
    for (let u of n)
        a += u[St].requiredVars, u.create && (u.targetIdx = 0, (i ??= []).push(u)), u.update && (u.targetIdx = 0, (s ??= []).push(u)); if (o)
    for (let u = 0; u < o.length; u++) {
        let d = o[u];
        if (typeof d != "function")
            for (let f of d.bindings) {
                a += f[St].requiredVars;
                let p = u + 1;
                f.create && (f.targetIdx = p, (i ??= []).push(f)), f.update && (f.targetIdx = p, (s ??= []).push(f));
            }
    } let c = [t]; if (o)
    for (let u of o) {
        let d = typeof u == "function" ? u : u.type, f = Re(d);
        c.push(f);
    } return of(0, null, PA(i, s), 1, a, c, null, null, null, [r], null); }
function PA(e, t) { return !e && !t ? null : n => { if (n & 1 && e)
    for (let o of e)
        o.create(); if (n & 2 && t)
    for (let o of t)
        o.update(); }; }
function zh(e) { let t = e[St].kind; return t === "input" || t === "twoWay"; }
var ca = class extends TE {
    _rootLView;
    _hasInputBindings;
    instance;
    hostView;
    changeDetectorRef;
    componentType;
    location;
    previousInputValues = null;
    _tNode;
    constructor(t, n, o) { super(), this._rootLView = n, this._hasInputBindings = o, this._tNode = Ct(n[v], I), this.location = jo(this._tNode, n), this.instance = Ee(this._tNode.index, n)[$], this.hostView = this.changeDetectorRef = new tn(n, void 0), this.componentType = t; }
    setInput(t, n) { this._hasInputBindings; let o = this._tNode; if (this.previousInputValues ??= new Map, this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n))
        return; let r = this._rootLView, i = Za(o, r[v], r, t, n); this.previousInputValues.set(t, n); let s = Ee(o.index, r); Ti(s, 1); }
    get injector() { return new en(this._tNode, this._rootLView); }
    destroy() { this.hostView.destroy(); }
    onDestroy(t) { this.hostView.onDestroy(t); }
};
function LA(e, t, n) { let o = e.projection = []; for (let r = 0; r < t.length; r++) {
    let i = n[r];
    o.push(i != null && i.length ? Array.from(i) : null);
} }
var ac = (() => { class e {
    static __NG_ELEMENT_ID__ = FA;
} return e; })();
function FA() { let e = _(); return LE(e, h()); }
var jA = ac, PE = class extends jA {
    _lContainer;
    _hostTNode;
    _hostLView;
    constructor(t, n, o) { super(), this._lContainer = t, this._hostTNode = n, this._hostLView = o; }
    get element() { return jo(this._hostTNode, this._hostLView); }
    get injector() { return new en(this._hostTNode, this._hostLView); }
    get parentInjector() { let t = bd(this._hostTNode, this._hostLView); if (qm(t)) {
        let n = Gs(t, this._hostLView), o = qs(t), r = n[v].data[o + 8];
        return new en(r, n);
    }
    else
        return new en(null, this._hostLView); }
    clear() { for (; this.length > 0;)
        this.remove(this.length - 1); }
    get(t) { let n = Qh(this._lContainer); return n !== null && n[t] || null; }
    get length() { return this._lContainer.length - W; }
    createEmbeddedView(t, n, o) { let r, i; typeof o == "number" ? r = o : o != null && (r = o.index, i = o.injector); let s = ei(this._lContainer, t.ssrId), a = t.createEmbeddedViewImpl(n || {}, i, s); return this.insertImpl(a, r, Rn(this._hostTNode, s)), a; }
    createComponent(t, n, o, r, i, s, a) { let c = t && !Pr(t), l; if (c)
        l = n;
    else {
        let y = n || {};
        l = y.index, o = y.injector, r = y.projectableNodes, i = y.environmentInjector || y.ngModuleRef, s = y.directives, a = y.bindings;
    } let u = c ? t : new nn(z(t)), d = o || this.parentInjector; if (!i && u.ngModule == null) {
        let D = (c ? d : this.parentInjector).get(be, null);
        D && (i = D);
    } let f = z(u.componentType ?? {}), p = ei(this._lContainer, f?.id ?? null), g = p?.firstChild ?? null, m = u.create(d, r, g, i, s, a); return this.insertImpl(m.hostView, l, Rn(this._hostTNode, p)), m; }
    insert(t, n) { return this.insertImpl(t, n, !0); }
    insertImpl(t, n, o) { let r = t._lView; if (Kg(r)) {
        let a = this.indexOf(t);
        if (a !== -1)
            this.detach(a);
        else {
            let c = r[Z], l = new PE(c, c[ue], c[Z]);
            l.detach(l.indexOf(t));
        }
    } let i = this._adjustIndex(n), s = this._lContainer; return Ko(s, r, i, o), t.attachToViewContainerRef(), fl(mu(s), i, t), t; }
    move(t, n) { return this.insert(t, n); }
    indexOf(t) { let n = Qh(this._lContainer); return n !== null ? n.indexOf(t) : -1; }
    remove(t) { let n = this._adjustIndex(t, -1), o = Jr(this._lContainer, n); o && (Dr(mu(this._lContainer), n), Ci(o[v], o)); }
    detach(t) { let n = this._adjustIndex(t, -1), o = Jr(this._lContainer, n); return o && Dr(mu(this._lContainer), n) != null ? new tn(o) : null; }
    _adjustIndex(t, n = 0) { return t ?? this.length + n; }
};
function Qh(e) { return e[Nr]; }
function mu(e) { return e[Nr] || (e[Nr] = []); }
function LE(e, t) { let n, o = t[e.index]; return X(o) ? n = o : (n = Zy(o, t, null, e), t[e.index] = n, sf(t, n)), FE(n, t, e, o), new PE(n, e, t); }
function VA(e, t) { let n = e[T], o = n.createComment(""), r = K(t, e), i = n.parentNode(r); return Sn(n, i, o, n.nextSibling(r), !1), o; }
var FE = VE, Sf = () => !1;
function jE(e, t, n) { return Sf(e, t, n); }
function VE(e, t, n, o) { if (e[Je])
    return; let r; n.type & 8 ? r = F(o) : r = VA(t, n), e[Je] = r; }
function HA(e, t, n) { if (e[Je] && e[xe])
    return !0; let o = n[de], r = t.index - I; if (!o || Ho(t) || Oa(o, r))
    return !1; let s = Lu(o, r), a = o.data[Uo]?.[r], [c, l] = oA(s, a); return e[Je] = c, e[xe] = l, !0; }
function BA(e, t, n, o) { Sf(e, n, t) || VE(e, t, n, o); }
function HE() { FE = BA, Sf = HA; }
var nd = class e {
    queryList;
    matches = null;
    constructor(t) { this.queryList = t; }
    clone() { return new e(this.queryList); }
    setDirty() { this.queryList.setDirty(); }
}, od = class e {
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
        Af(t, n).matches !== null && this.queries[n].setDirty(); }
}, la = class {
    flags;
    read;
    predicate;
    constructor(t, n, o = null) { this.flags = n, this.read = o, typeof t == "string" ? this.predicate = WA(t) : this.predicate = t; }
}, rd = class e {
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
}, id = class e {
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
            this.matchTNodeWithReadOption(t, n, UA(n, i)), this.matchTNodeWithReadOption(t, n, xs(n, t, i, !1, !1));
        }
    else
        o === Xr ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, xs(n, t, o, !1, !1)); }
    matchTNodeWithReadOption(t, n, o) { if (o !== null) {
        let r = this.metadata.read;
        if (r !== null)
            if (r === ui || r === ac || r === Xr && n.type & 4)
                this.addMatch(n.index, -2);
            else {
                let i = xs(n, t, r, !1, !1);
                i !== null && this.addMatch(n.index, i);
            }
        else
            this.addMatch(n.index, o);
    } }
    addMatch(t, n) { this.matches === null ? this.matches = [t, n] : this.matches.push(t, n); }
};
function UA(e, t) { let n = e.localNames; if (n !== null) {
    for (let o = 0; o < n.length; o += 2)
        if (n[o] === t)
            return n[o + 1];
} return null; }
function $A(e, t) { return e.type & 11 ? jo(e, t) : e.type & 4 ? Ja(e, t) : null; }
function qA(e, t, n, o) { return n === -1 ? $A(t, e) : n === -2 ? GA(e, t, o) : Qr(e, e[v], n, t); }
function GA(e, t, n) { if (n === ui)
    return jo(t, e); if (n === Xr)
    return Ja(t, e); if (n === ac)
    return LE(t, e); }
function BE(e, t, n, o) { let r = t[rt].queries[o]; if (r.matches === null) {
    let i = e.data, s = n.matches, a = [];
    for (let c = 0; s !== null && c < s.length; c += 2) {
        let l = s[c];
        if (l < 0)
            a.push(null);
        else {
            let u = i[l];
            a.push(qA(t, u, s[c + 1], n.metadata.read));
        }
    }
    r.matches = a;
} return r.matches; }
function sd(e, t, n, o) { let r = e.queries.getByIndex(n), i = r.matches; if (i !== null) {
    let s = BE(e, t, r, n);
    for (let a = 0; a < i.length; a += 2) {
        let c = i[a];
        if (c > 0)
            o.push(s[a / 2]);
        else {
            let l = i[a + 1], u = t[-c];
            for (let d = W; d < u.length; d++) {
                let f = u[d];
                f[It] === f[Z] && sd(f[v], f, l, o);
            }
            if (u[En] !== null) {
                let d = u[En];
                for (let f = 0; f < d.length; f++) {
                    let p = d[f];
                    sd(p[v], p, l, o);
                }
            }
        }
    }
} return o; }
function bf(e, t) { return e[rt].queries[t].queryList; }
function UE(e, t, n) { let o = new Qs((n & 4) === 4); return Al(e, t, o, o.destroy), (t[rt] ??= new od).queries.push(new nd(o)) - 1; }
function $E(e, t, n) { let o = b(); return o.firstCreatePass && (GE(o, new la(e, t, n), -1), (t & 2) === 2 && (o.staticViewQueries = !0)), UE(o, h(), t); }
function qE(e, t, n, o) { let r = b(); if (r.firstCreatePass) {
    let i = _();
    GE(r, new la(t, n, o), i.index), zA(r, e), (n & 2) === 2 && (r.staticContentQueries = !0);
} return UE(r, h(), n); }
function WA(e) { return e.split(",").map(t => t.trim()); }
function GE(e, t, n) { e.queries === null && (e.queries = new rd), e.queries.track(new id(t, n)); }
function zA(e, t) { let n = e.contentQueries || (e.contentQueries = []), o = n.length ? n[n.length - 1] : -1; t !== o && n.push(e.queries.length - 1, t); }
function Af(e, t) { return e.queries.getByIndex(t); }
function WE(e, t) { let n = e[v], o = Af(n, t); return o.crossesNgTemplate ? sd(n, e, t, []) : BE(n, e, o, t); }
function Rf(e, t, n) { let o, r = Ui(() => { o._dirtyCounter(); let i = QA(o, e); if (t && i === void 0)
    throw new C(-951, !1); return i; }); return o = r[J], o._dirtyCounter = Kt(0), o._flatValue = void 0, r; }
function Of(e) { return Rf(!0, !1, e); }
function kf(e) { return Rf(!0, !0, e); }
function xf(e) { return Rf(!1, !1, e); }
function zE(e, t) { let n = e[J]; n._lView = h(), n._queryIndex = t, n._queryList = bf(n._lView, t), n._queryList.onDirty(() => n._dirtyCounter.update(o => o + 1)); }
function QA(e, t) { let n = e._lView, o = e._queryIndex; if (n === void 0 || o === void 0 || n[w] & 4)
    return t ? void 0 : j; let r = bf(n, o), i = WE(n, o); return r.reset(i, nv), t ? r.first : r._changesDetected || e._flatValue === void 0 ? e._flatValue = r.toArray() : e._flatValue; }
var kn = new Map, oi = new Set;
function QE(e) { return We(this, null, function* () { let t = kn; kn = new Map; let n = new Map; function o(i) { let s = n.get(i); if (s)
    return s; let a = e(i).then(c => XA(i, c)); return n.set(i, a), a; } let r = Array.from(t).map(a => We(null, [a], function* ([i, s]) { if (s.styleUrl && s.styleUrls?.length)
    throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple"); let c = []; s.templateUrl && c.push(o(s.templateUrl).then(f => { s.template = f; })); let l = typeof s.styles == "string" ? [s.styles] : s.styles ?? []; s.styles = l; let { styleUrl: u, styleUrls: d } = s; if (u && (d = [u], s.styleUrl = void 0), d?.length) {
    let f = Promise.all(d.map(p => o(p))).then(p => { l.push(...p), s.styleUrls = void 0; });
    c.push(f);
} yield Promise.all(c), oi.delete(i); })); yield Promise.all(r); }); }
function ZA(e, t) { ZE(t) && (kn.set(e, t), oi.add(e)); }
function YA(e) { return oi.has(e); }
function ZE(e) { return !!(e.templateUrl && !e.hasOwnProperty("template") || e.styleUrls?.length || e.styleUrl); }
function KA() { let e = kn; return kn = new Map, e; }
function JA(e) { oi.clear(); for (let t of e.keys())
    oi.add(t); kn = e; }
function YE() { return kn.size === 0; }
function XA(e, t) { return We(this, null, function* () { if (typeof t == "string")
    return t; if (t.status !== void 0 && t.status !== 200)
    throw new C(918, !1); return t.text(); }); }
var ad = new Map, KE = !0;
function eR(e, t, n) { if (t && t !== n && KE)
    throw new C(921, !1); }
function Pf(e, t) { let n = ad.get(t) || null; eR(t, n, e), ad.set(t, e); }
function Lf(e) { return ad.get(e); }
function tR(e) { KE = !e; }
var So = class {
}, JE = class {
};
function XE(e, t) { return new bo(e, t ?? null, []); }
var nR = XE, bo = class extends So {
    ngModuleType;
    _parent;
    _bootstrapComponents = [];
    _r3Injector;
    instance;
    destroyCbs = [];
    componentFactoryResolver = new aa(this);
    constructor(t, n, o, r = !0) { super(), this.ngModuleType = t, this._parent = n; let i = hn(t); this._bootstrapComponents = po(i.bootstrap), this._r3Injector = Kl(t, n, [{ provide: So, useValue: this }, { provide: Ni, useValue: this.componentFactoryResolver }, ...o], vt(t), new Set(["environment"])), r && this.resolveInjectorInitializers(); }
    resolveInjectorInitializers() { this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(this.ngModuleType); }
    get injector() { return this._r3Injector; }
    destroy() { let t = this._r3Injector; !t.destroyed && t.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null; }
    onDestroy(t) { this.destroyCbs.push(t); }
}, Ao = class extends JE {
    moduleType;
    constructor(t) { super(), this.moduleType = t; }
    create(t) { return new bo(this.moduleType, t, []); }
};
function eI(e, t, n) { return new bo(e, t, n, !1); }
var ri = class extends So {
    injector;
    componentFactoryResolver = new aa(this);
    instance = null;
    constructor(t) { super(); let n = new fn([...t.providers, { provide: So, useValue: this }, { provide: Ni, useValue: this.componentFactoryResolver }], t.parent || Xn(), t.debugName, new Set(["environment"])); this.injector = n, t.runEnvironmentInitializers && n.resolveInjectorInitializers(); }
    destroy() { this.injector.destroy(); }
    onDestroy(t) { this.injector.onDestroy(t); }
};
function Ff(e, t, n = null) { return new ri({ providers: e, parent: t, debugName: n, runEnvironmentInitializers: !0 }).injector; }
var oR = (() => { class e {
    _injector;
    cachedInjectors = new Map;
    constructor(n) { this._injector = n; }
    getOrCreateStandaloneInjector(n) { if (!n.standalone)
        return null; if (!this.cachedInjectors.has(n)) {
        let o = is(!1, n.type), r = o.length > 0 ? Ff([o], this._injector, "") : null;
        this.cachedInjectors.set(n, r);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = U({ token: e, providedIn: "environment", factory: () => new e(he(be)) });
} return e; })();
function tI(e) { return ut(() => { let t = iI(e), n = ae(H({}, t), { decls: e.decls, vars: e.vars, template: e.template, consts: e.consts || null, ngContentSelectors: e.ngContentSelectors, onPush: e.changeDetection === Da.OnPush, directiveDefs: null, pipeDefs: null, dependencies: t.standalone && e.dependencies || null, getStandaloneInjector: t.standalone ? r => r.get(oR).getOrCreateStandaloneInjector(n) : null, getExternalStyles: null, signals: e.signals ?? !1, data: e.data || {}, encapsulation: e.encapsulation || Ue.Emulated, styles: e.styles || j, _: null, schemas: e.schemas || null, tView: null, id: "" }); t.standalone && ee("NgStandalone"), sI(n); let o = e.dependencies; return n.directiveDefs = ua(o, nI), n.pipeDefs = ua(o, Qe), n.id = aR(n), n; }); }
function nI(e) { return z(e) || Re(e); }
function jf(e) { return ut(() => ({ type: e.type, bootstrap: e.bootstrap || j, declarations: e.declarations || j, imports: e.imports || j, exports: e.exports || j, transitiveCompileScopes: null, schemas: e.schemas || null, id: e.id || null })); }
function rR(e, t) { if (e == null)
    return Le; let n = {}; for (let o in e)
    if (e.hasOwnProperty(o)) {
        let r = e[o], i, s, a, c;
        Array.isArray(r) ? (a = r[0], i = r[1], s = r[2] ?? i, c = r[3] || null) : (i = r, s = r, a = Fa.None, c = null), n[i] = [o, a, c], t[i] = s;
    } return n; }
function iR(e) { if (e == null)
    return Le; let t = {}; for (let n in e)
    e.hasOwnProperty(n) && (t[e[n]] = n); return t; }
function oI(e) { return ut(() => { let t = iI(e); return sI(t), t; }); }
function rI(e) { return { type: e.type, name: e.name, factory: null, pure: e.pure !== !1, standalone: e.standalone ?? !0, onDestroy: e.type.prototype.ngOnDestroy || null }; }
function iI(e) { let t = {}; return { type: e.type, providersResolver: null, viewProvidersResolver: null, factory: null, hostBindings: e.hostBindings || null, hostVars: e.hostVars || 0, hostAttrs: e.hostAttrs || null, contentQueries: e.contentQueries || null, declaredInputs: t, inputConfig: e.inputs || Le, exportAs: e.exportAs || null, standalone: e.standalone ?? !0, signals: e.signals === !0, selectors: e.selectors || j, viewQuery: e.viewQuery || null, features: e.features || null, setInput: null, resolveHostDirectives: null, hostDirectives: null, inputs: rR(e.inputs, t), outputs: iR(e.outputs), debugInfo: null }; }
function sI(e) { e.features?.forEach(t => t(e)); }
function ua(e, t) { return e ? () => { let n = typeof e == "function" ? e() : e, o = []; for (let r of n) {
    let i = t(r);
    i !== null && o.push(i);
} return o; } : null; }
var sR = new Map;
function aR(e) { let t = 0, n = typeof e.consts == "function" ? "" : e.consts, o = [e.selectors, e.ngContentSelectors, e.hostVars, e.hostAttrs, n, e.vars, e.decls, e.encapsulation, e.standalone, e.signals, e.exportAs, JSON.stringify(e.inputs), JSON.stringify(e.outputs), Object.getOwnPropertyNames(e.type.prototype), !!e.contentQueries, !!e.viewQuery]; for (let i of o.join("|"))
    t = Math.imul(31, t) + i.charCodeAt(0) << 0; return t += 2147483648, "c" + t; }
function aI(e) { let t = n => { let o = Array.isArray(e); n.hostDirectives === null ? (n.resolveHostDirectives = cR, n.hostDirectives = o ? e.map(cd) : [e]) : o ? n.hostDirectives.unshift(...e.map(cd)) : n.hostDirectives.unshift(e); }; return t.ngInherit = !0, t; }
function cR(e) { let t = [], n = !1, o = null, r = null; for (let i = 0; i < e.length; i++) {
    let s = e[i];
    if (s.hostDirectives !== null) {
        let a = t.length;
        o ??= new Map, r ??= new Map, cI(s, t, o), r.set(s, [a, t.length - 1]);
    }
    i === 0 && Ve(s) && (n = !0, t.push(s));
} for (let i = n ? 1 : 0; i < e.length; i++)
    t.push(e[i]); return [t, o, r]; }
function cI(e, t, n) { if (e.hostDirectives !== null)
    for (let o of e.hostDirectives)
        if (typeof o == "function") {
            let r = o();
            for (let i of r)
                Zh(cd(i), t, n);
        }
        else
            Zh(o, t, n); }
function Zh(e, t, n) { let o = Re(e.directive); lR(o.declaredInputs, e.inputs), cI(o, t, n), n.set(o, e), t.push(o); }
function cd(e) { return typeof e == "function" ? { directive: P(e), inputs: Le, outputs: Le } : { directive: P(e.directive), inputs: Yh(e.inputs), outputs: Yh(e.outputs) }; }
function Yh(e) { if (e === void 0 || e.length === 0)
    return Le; let t = {}; for (let n = 0; n < e.length; n += 2)
    t[e[n]] = e[n + 1]; return t; }
function lR(e, t) { for (let n in t)
    if (t.hasOwnProperty(n)) {
        let o = t[n], r = e[n];
        e[o] = r;
    } }
function uR(e) { return Object.getPrototypeOf(e.prototype).constructor; }
function Vf(e) { let t = uR(e.type), n = !0, o = [e]; for (; t;) {
    let r;
    if (Ve(e))
        r = t.\u0275cmp || t.\u0275dir;
    else {
        if (t.\u0275cmp)
            throw new C(903, !1);
        r = t.\u0275dir;
    }
    if (r) {
        if (n) {
            o.push(r);
            let s = e;
            s.inputs = vu(e.inputs), s.declaredInputs = vu(e.declaredInputs), s.outputs = vu(e.outputs);
            let a = r.hostBindings;
            a && hR(e, a);
            let c = r.viewQuery, l = r.contentQueries;
            if (c && pR(e, c), l && gR(e, l), dR(e, r), Fg(e.outputs, r.outputs), Ve(r) && r.data.animation) {
                let u = e.data;
                u.animation = (u.animation || []).concat(r.data.animation);
            }
        }
        let i = r.features;
        if (i)
            for (let s = 0; s < i.length; s++) {
                let a = i[s];
                a && a.ngInherit && a(e), a === Vf && (n = !1);
            }
    }
    t = Object.getPrototypeOf(t);
} fR(o); }
function dR(e, t) { for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n))
        continue;
    let o = t.inputs[n];
    o !== void 0 && (e.inputs[n] = o, e.declaredInputs[n] = t.declaredInputs[n]);
} }
function fR(e) { let t = 0, n = null; for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    r.hostVars = t += r.hostVars, r.hostAttrs = Mo(r.hostAttrs, n = Mo(n, r.hostAttrs));
} }
function vu(e) { return e === Le ? {} : e === j ? [] : e; }
function pR(e, t) { let n = e.viewQuery; n ? e.viewQuery = (o, r) => { t(o, r), n(o, r); } : e.viewQuery = t; }
function gR(e, t) { let n = e.contentQueries; n ? e.contentQueries = (o, r, i) => { t(o, r, i), n(o, r, i); } : e.contentQueries = t; }
function hR(e, t) { let n = e.hostBindings; n ? e.hostBindings = (o, r) => { t(o, r), n(o, r); } : e.hostBindings = t; }
function lI(e, t, n, o, r, i, s, a) { if (n.firstCreatePass) {
    e.mergedAttrs = Mo(e.mergedAttrs, e.attrs);
    let u = e.tView = of(2, e, r, i, s, n.directiveRegistry, n.pipeRegistry, null, n.schemas, n.consts, null);
    n.queries !== null && (n.queries.template(n, e), u.queries = n.queries.embeddedTView(e));
} a && (e.flags |= a), at(e, !1); let c = uI(n, t, e, o); Rr() && gf(n, t, c, e), Be(c, t); let l = Zy(c, t, c, e); t[o + I] = l, sf(t, l), jE(l, e, t); }
function mR(e, t, n, o, r, i, s, a, c, l, u) { let d = n + I, f; return t.firstCreatePass ? (f = Hn(t, d, 4, s || null, a || null), ps() && wE(t, e, f, ve(t.consts, l), vf), Bm(t, f)) : f = t.data[d], lI(f, e, t, n, o, r, i, c), eo(f) && qa(t, e, f), l != null && Zo(e, f, u), f; }
function xn(e, t, n, o, r, i, s, a, c, l, u) { let d = n + I, f; if (t.firstCreatePass) {
    if (f = Hn(t, d, 4, s || null, a || null), l != null) {
        let p = ve(t.consts, l);
        f.localNames = [];
        for (let g = 0; g < p.length; g += 2)
            f.localNames.push(p[g], -1);
    }
}
else
    f = t.data[d]; return lI(f, e, t, n, o, r, i, c), l != null && Zo(e, f, u), f; }
function Hf(e, t, n, o, r, i, s, a) { let c = h(), l = b(), u = ve(l.consts, i); return mR(c, l, e, t, n, o, r, u, void 0, s, a), Hf; }
function Bf(e, t, n, o, r, i, s, a) { let c = h(), l = b(), u = ve(l.consts, i); return xn(c, l, e, t, n, o, r, u, void 0, s, a), Bf; }
var uI = dI;
function dI(e, t, n, o) { return et(!0), t[T].createComment(""); }
function vR(e, t, n, o) { let r = !ka(t, n); et(r); let i = t[de]?.data[Ma]?.[o] ?? null; if (i !== null && n.tView !== null && n.tView.ssrId === null && (n.tView.ssrId = i), r)
    return dI(e, t); let s = t[de], a = Mi(s, e, t, n); Ra(s, o, a); let c = Wd(s, o); return ec(c, a); }
function fI() { uI = vR; }
var ie = (function (e) { return e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.IN_PROGRESS = 1] = "IN_PROGRESS", e[e.COMPLETE = 2] = "COMPLETE", e[e.FAILED = 3] = "FAILED", e; })(ie || {}), Kh = 0, yR = 1, Y = (function (e) { return e[e.Placeholder = 0] = "Placeholder", e[e.Loading = 1] = "Loading", e[e.Complete = 2] = "Complete", e[e.Error = 3] = "Error", e; })(Y || {}), ii = (function (e) { return e[e.Initial = -1] = "Initial", e; })(ii || {}), Io = 0, Lt = 1, Lr = 2, Ss = 3, ER = 4, IR = 5, cc = 6, DR = 7, Do = 8, CR = 9, Uf = (function (e) { return e[e.Manual = 0] = "Manual", e[e.Playthrough = 1] = "Playthrough", e; })(Uf || {});
function _i(e, t, n) { let o = gI(e); t[o] === null && (t[o] = []), t[o].push(n); }
function js(e, t) { let n = gI(e), o = t[n]; if (o !== null) {
    for (let r of o)
        r();
    t[n] = null;
} }
function pI(e) { js(1, e), js(0, e), js(2, e); }
function gI(e) { let t = ER; return e === 1 ? t = IR : e === 2 && (t = CR), t; }
function Si(e) { return e + 1; }
function we(e, t) { let n = e[v], o = Si(t.index); return e[o]; }
function TR(e, t, n) { let o = e[v], r = Si(t); e[r] = n; }
function ge(e, t) { let n = Si(t.index); return e.data[n]; }
function MR(e, t, n) { let o = Si(t); e.data[o] = n; }
function NR(e, t, n) { let o = t[v], r = ge(o, n); switch (e) {
    case Y.Complete: return r.primaryTmplIndex;
    case Y.Loading: return r.loadingTmplIndex;
    case Y.Error: return r.errorTmplIndex;
    case Y.Placeholder: return r.placeholderTmplIndex;
    default: return null;
} }
function ld(e, t) { return t === Y.Placeholder ? e.placeholderBlockConfig?.[Kh] ?? null : t === Y.Loading ? e.loadingBlockConfig?.[Kh] ?? null : null; }
function hI(e) { return e.loadingBlockConfig?.[yR] ?? null; }
function Jh(e, t) { if (!e || e.length === 0)
    return t; let n = new Set(e); for (let o of t)
    n.add(o); return e.length === n.size ? e : Array.from(n); }
function wR(e, t) { let n = t.primaryTmplIndex + I; return Ct(e, n); }
function mI(e) { return e !== null && typeof e == "object" && typeof e.primaryTmplIndex == "number"; }
function vI(e, t) { let n = null, o = Si(t.index); return I < o && o < e.bindingStartIndex && (n = ge(e, t)), !!n && mI(n); }
function $f(e, t, n, o) { let r = n.get(G); return i_(e, () => r.run(t), i => r.runOutsideAngular(() => r_(i)), o); }
function _R(e, t, n) { return n == null ? e : n >= 0 ? _l(n, e) : e[t.index][W] ?? null; }
function SR(e, t) { return In(I + t, e); }
function er(e, t, n, o, r, i, s, a) { let c = e[L], l = c.get(G), u; function d() { if (st(e)) {
    u.destroy();
    return;
} let f = we(e, t), p = f[Lt]; if (p !== ii.Initial && p !== Y.Placeholder) {
    u.destroy();
    return;
} let g = _R(e, t, o); if (!g || (u.destroy(), st(g)))
    return; let m = SR(g, n), y = r(m, () => { l.run(() => { e !== g && fs(g, y), i(); }); }, c, a); e !== g && Sr(g, y), _i(s, f, y); } u = Ty({ read: d }, { injector: c }); }
function lc(e, t) { let n = t.get(RR), o = () => n.remove(e); return n.add(e), o; }
var bR = () => typeof requestIdleCallback < "u" ? requestIdleCallback : setTimeout, AR = () => typeof requestIdleCallback < "u" ? cancelIdleCallback : clearTimeout, RR = (() => { class e {
    executingCallbacks = !1;
    idleId = null;
    current = new Set;
    deferred = new Set;
    ngZone = E(G);
    requestIdleCallbackFn = bR().bind(globalThis);
    cancelIdleCallbackFn = AR().bind(globalThis);
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
    static \u0275prov = U({ token: e, providedIn: "root", factory: () => new e });
} return e; })();
function uc(e) { return (t, n) => yI(e, t, n); }
function yI(e, t, n) { let o = n.get(EI), r = n.get(G), i = () => o.remove(t); return o.add(e, t, r), i; }
var EI = (() => { class e {
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
        } gl(n, i, o, r); }
    removeFromQueue(n, o) { let r = -1; for (let i = 0; i < n.length; i += 2)
        if (n[i + 1] === o) {
            r = i;
            break;
        } return r > -1 && pl(n, r, 2), r; }
    scheduleTimer(n) { let o = () => { this.clearTimeout(), this.executingCallbacks = !0; let i = [...this.current], s = Date.now(); for (let c = 0; c < i.length; c += 2) {
        let l = i[c], u = i[c + 1];
        if (l <= s)
            u();
        else
            break;
    } let a = -1; for (let c = 0; c < this.current.length && this.current[c] <= s; c += 2)
        a = c + 1; if (a >= 0 && pl(this.current, 0, a + 1), this.executingCallbacks = !1, this.deferred.length > 0) {
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
    static \u0275prov = U({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), OR = (() => { class e {
    cachedInjectors = new Map;
    getOrCreateInjector(n, o, r, i) { if (!this.cachedInjectors.has(n)) {
        let s = r.length > 0 ? Ff(r, o, i) : null;
        this.cachedInjectors.set(n, s);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = U({ token: e, providedIn: "environment", factory: () => new e });
} return e; })(), kR = new M("DEFER_BLOCK_DEPENDENCY_INTERCEPTOR"), II = new M("");
function yu(e, t, n) { return e.get(OR).getOrCreateInjector(t, e, n, ""); }
function xR(e, t, n) { if (e instanceof Eo) {
    let r = e.injector, i = e.parentInjector, s = yu(i, t, n);
    return new Eo(r, s);
} let o = e.get(be); if (o !== e) {
    let r = yu(o, t, n);
    return new Eo(e, r);
} return yu(e, t, n); }
function wt(e, t, n, o = !1) { let r = n[Z], i = r[v]; if (st(r))
    return; let s = we(r, t), a = s[Lt], c = s[DR]; if (!(c !== null && e < c) && em(a, e) && em(s[Io] ?? -1, e)) {
    let l = ge(i, t), d = !o && (typeof ngServerMode > "u" || !ngServerMode) && (hI(l) !== null || ld(l, Y.Loading) !== null || ld(l, Y.Placeholder)) ? ud : DI;
    try {
        d(e, s, n, t, r);
    }
    catch (f) {
        yf(r, f);
    }
} }
function PR(e, t) { let n = e[xe]?.findIndex(r => r.data[gi] === t[Lt]) ?? -1; return { dehydratedView: n > -1 ? e[xe][n] : null, dehydratedViewIx: n }; }
function DI(e, t, n, o, r) { V(k.DeferBlockStateStart); let i = NR(e, r, o); if (i !== null) {
    t[Lt] = e;
    let s = r[v], a = i + I, c = Ct(s, a), l = 0;
    Ef(n, l);
    let u;
    if (e === Y.Complete) {
        let g = ge(s, o), m = g.providers;
        m && m.length > 0 && (u = xR(r[L], g, m));
    }
    let { dehydratedView: d, dehydratedViewIx: f } = PR(n, t), p = Yo(r, c, null, { injector: u, dehydratedView: d });
    if (Ko(n, p, l, Rn(c, d)), Ti(p, 2), f > -1 && n[xe]?.splice(f, 1), (e === Y.Complete || e === Y.Error) && Array.isArray(t[Do])) {
        for (let g of t[Do])
            g();
        t[Do] = null;
    }
} V(k.DeferBlockStateEnd); }
function LR(e, t, n, o, r) { let i = Date.now(), s = r[v], a = ge(s, o); if (t[Lr] === null || t[Lr] <= i) {
    t[Lr] = null;
    let c = hI(a), l = t[Ss] !== null;
    if (e === Y.Loading && c !== null && !l) {
        t[Io] = e;
        let u = Xh(c, t, o, n, r);
        t[Ss] = u;
    }
    else {
        e > Y.Loading && l && (t[Ss](), t[Ss] = null, t[Io] = null), DI(e, t, n, o, r);
        let u = ld(a, e);
        u !== null && (t[Lr] = i + u, Xh(u, t, o, n, r));
    }
}
else
    t[Io] = e; }
function Xh(e, t, n, o, r) { return yI(e, () => { let s = t[Io]; t[Lr] = null, t[Io] = null, s !== null && wt(s, n, o); }, r[L]); }
function em(e, t) { return e < t; }
function tr(e, t) { let n = e[t.index]; wt(Y.Placeholder, t, n); }
function tm(e, t, n) { e.loadingPromise.then(() => { e.loadingState === ie.COMPLETE ? wt(Y.Complete, t, n) : e.loadingState === ie.FAILED && wt(Y.Error, t, n); }); }
var ud = null;
function CI(e, t, n, o) { let r = e.consts; n != null && (t.placeholderBlockConfig = ve(r, n)), o != null && (t.loadingBlockConfig = ve(r, o)), ud === null && (ud = LR); }
var Vs = "__ngAsyncComponentMetadataFn__";
function FR(e) { return e[Vs] ?? null; }
function TI(e, t, n) { let o = e; return o[Vs] = () => Promise.all(t()).then(r => (n(...r), o[Vs] = null, r)), o[Vs]; }
function qf(e, t, n, o) { return ut(() => { let r = e; t !== null && (r.hasOwnProperty("decorators") && r.decorators !== void 0 ? r.decorators.push(...t) : r.decorators = t), n !== null && (r.ctorParameters = n), o !== null && (r.hasOwnProperty("propDecorators") && r.propDecorators !== void 0 ? r.propDecorators = H(H({}, r.propDecorators), o) : r.propDecorators = o); }); }
var jR = (() => { class e {
    log(n) { console.log(n); }
    warn(n) { console.warn(n); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = U({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function MI(e) { return typeof e == "function" && e[J] !== void 0; }
function Gf(e) { return MI(e) && typeof e.set == "function"; }
function Hs(e, t) { let n = e[v]; for (let o = I; o < n.bindingStartIndex; o++)
    if (X(e[o])) {
        let r = e[o];
        if (!(o === n.bindingStartIndex - 1)) {
            let s = n.data[o], a = ge(n, s);
            if (mI(a)) {
                t.push({ lContainer: r, lView: e, tNode: s, tDetails: a });
                continue;
            }
        }
        oe(r[q]) && Hs(r[q], t);
        for (let s = W; s < r.length; s++)
            Hs(r[s], t);
    }
    else
        oe(e[o]) && Hs(e[o], t); }
function VR() { return ee("Chrome DevTools profiling"), () => { }; }
function HR(e) { let t = e.get(Yt), n = e.get(Ot), o = hv(t, n), r = {}; for (let [i, s] of Object.entries(o))
    c_(i) || (r[i] = s); return r; }
var nm = "ng";
function BR(e, t) { UR(e, t); }
function UR(e, t) { if (typeof COMPILED > "u" || !COMPILED) {
    let n = Ae;
    n[nm] ??= {}, n[nm][e] = t;
} }
var NI = new M(""), wI = new M(""), $R = (() => { class e {
    _ngZone;
    registry;
    _isZoneStable = !0;
    _callbacks = [];
    _taskTrackingZone = null;
    _destroyRef;
    constructor(n, o, r) { this._ngZone = n, this.registry = o, as() && (this._destroyRef = E(He, { optional: !0 }) ?? void 0), Wf || (SI(r), r.addToWindow(o)), this._watchAngularEvents(), n.run(() => { this._taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone"); }); }
    _watchAngularEvents() { let n = this._ngZone.onUnstable.subscribe({ next: () => { this._isZoneStable = !1; } }), o = this._ngZone.runOutsideAngular(() => this._ngZone.onStable.subscribe({ next: () => { G.assertNotInAngularZone(), queueMicrotask(() => { this._isZoneStable = !0, this._runCallbacksIfReady(); }); } })); this._destroyRef?.onDestroy(() => { n.unsubscribe(), o.unsubscribe(); }); }
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
    static \u0275fac = function (o) { return new (o || e)(he(G), he(_I), he(wI)); };
    static \u0275prov = U({ token: e, factory: e.\u0275fac });
} return e; })(), _I = (() => { class e {
    _applications = new Map;
    registerApplication(n, o) { this._applications.set(n, o); }
    unregisterApplication(n) { this._applications.delete(n); }
    unregisterAllApplications() { this._applications.clear(); }
    getTestability(n) { return this._applications.get(n) || null; }
    getAllTestabilities() { return Array.from(this._applications.values()); }
    getAllRootElements() { return Array.from(this._applications.keys()); }
    findTestabilityInTree(n, o = !0) { return Wf?.findTestabilityInTree(this, n, o) ?? null; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = U({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function SI(e) { Wf = e; }
var Wf;
function zf(e) { return !!e && typeof e.then == "function"; }
function bI(e) { return !!e && typeof e.subscribe == "function"; }
var Qf = new M("");
function AI(e) { return Ye([{ provide: Qf, multi: !0, useValue: e }]); }
var Zf = (() => { class e {
    resolve;
    reject;
    initialized = !1;
    done = !1;
    donePromise = new Promise((n, o) => { this.resolve = n, this.reject = o; });
    appInits = E(Qf, { optional: !0 }) ?? [];
    injector = E(le);
    constructor() { }
    runInitializers() { if (this.initialized)
        return; let n = []; for (let r of this.appInits) {
        let i = ss(this.injector, r);
        if (zf(i))
            n.push(i);
        else if (bI(i)) {
            let s = new Promise((a, c) => { i.subscribe({ complete: a, error: c }); });
            n.push(s);
        }
    } let o = () => { this.done = !0, this.resolve(); }; Promise.all(n).then(() => { o(); }).catch(r => { this.reject(r); }), n.length === 0 && o(), this.initialized = !0; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = U({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), bi = new M("");
function Yf() { _g(() => { let e = ""; throw new C(600, e); }); }
function RI(e) { return e.isBoundToModule; }
var qR = 10;
function Kf(e, t) { return Array.isArray(t) ? t.reduce(Kf, e) : H(H({}, e), t); }
var qe = (() => { class e {
    _runningTick = !1;
    _destroyed = !1;
    _destroyListeners = [];
    _views = [];
    internalErrorHandler = E(Mt);
    afterRenderManager = E(Va);
    zonelessEnabled = E(io);
    rootEffectScheduler = E(Is);
    dirtyFlags = 0;
    tracingSnapshot = null;
    allTestViews = new Set;
    autoDetectTestViews = new Set;
    includeAllTestViews = !1;
    afterTick = new ir;
    get allViews() { return [...(this.includeAllTestViews ? this.allTestViews : this.autoDetectTestViews).keys(), ...this._views]; }
    get destroyed() { return this._destroyed; }
    componentTypes = [];
    components = [];
    internalPendingTask = E(Tt);
    get isStable() { return this.internalPendingTask.hasPendingTasksObservable.pipe(Dg(n => !n)); }
    constructor() { E(Qo, { optional: !0 }); }
    whenStable() { let n; return new Promise(o => { n = this.isStable.subscribe({ next: r => { r && o(); } }); }).finally(() => { n.unsubscribe(); }); }
    _injector = E(be);
    _rendererFactory = null;
    get injector() { return this._injector; }
    bootstrap(n, o) { return this.bootstrapImpl(n, o); }
    bootstrapImpl(n, o, r = le.NULL) { return this._injector.get(G).run(() => { V(k.BootstrapComponentStart); let s = n instanceof rc; if (!this._injector.get(Zf).done) {
        let g = "";
        throw new C(405, g);
    } let c; s ? c = n : c = this._injector.get(Ni).resolveComponentFactory(n), this.componentTypes.push(c.componentType); let l = RI(c) ? void 0 : this._injector.get(So), u = o || c.selector, d = c.create(r, [], u, l), f = d.location.nativeElement, p = d.injector.get(NI, null); return p?.registerApplication(f), d.onDestroy(() => { this.detachView(d.hostView), Vr(this.components, d), p?.unregisterApplication(f); }), this._loadComponent(d), V(k.BootstrapComponentEnd, d), d; }); }
    tick() { this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick(); }
    _tick() { V(k.ChangeDetectionStart), this.tracingSnapshot !== null ? this.tracingSnapshot.run(ja.CHANGE_DETECTION, this.tickImpl) : this.tickImpl(); }
    tickImpl = () => { if (this._runningTick)
        throw V(k.ChangeDetectionEnd), new C(101, !1); let n = O(null); try {
        this._runningTick = !0, this.synchronize();
    }
    finally {
        this._runningTick = !1, this.tracingSnapshot?.dispose(), this.tracingSnapshot = null, O(n), this.afterTick.next(), V(k.ChangeDetectionEnd);
    } };
    synchronize() { this._rendererFactory === null && !this._injector.destroyed && (this._rendererFactory = this._injector.get(ti, null, { optional: !0 })); let n = 0; for (; this.dirtyFlags !== 0 && n++ < qR;) {
        V(k.ChangeDetectionSyncStart);
        try {
            this.synchronizeOnce();
        }
        finally {
            V(k.ChangeDetectionSyncEnd);
        }
    } }
    synchronizeOnce() { this.dirtyFlags & 16 && (this.dirtyFlags &= -17, this.rootEffectScheduler.flush()); let n = !1; if (this.dirtyFlags & 7) {
        let o = !!(this.dirtyFlags & 1);
        this.dirtyFlags &= -8, this.dirtyFlags |= 8;
        for (let { _lView: r } of this.allViews) {
            if (!o && !to(r))
                continue;
            let i = o && !this.zonelessEnabled ? 0 : 1;
            qy(r, i), n = !0;
        }
        if (this.dirtyFlags &= -5, this.syncDirtyFlagsWithViews(), this.dirtyFlags & 23)
            return;
    } n || (this._rendererFactory?.begin?.(), this._rendererFactory?.end?.()), this.dirtyFlags & 8 && (this.dirtyFlags &= -9, this.afterRenderManager.execute()), this.syncDirtyFlagsWithViews(); }
    syncDirtyFlagsWithViews() { if (this.allViews.some(({ _lView: n }) => to(n))) {
        this.dirtyFlags |= 2;
        return;
    }
    else
        this.dirtyFlags &= -8; }
    attachView(n) { let o = n; this._views.push(o), o.attachToAppRef(this); }
    detachView(n) { let o = n; Vr(this._views, o), o.detachFromAppRef(); }
    _loadComponent(n) { this.attachView(n.hostView); try {
        this.tick();
    }
    catch (r) {
        this.internalErrorHandler(r);
    } this.components.push(n), this._injector.get(bi, []).forEach(r => r(n)); }
    ngOnDestroy() { if (!this._destroyed)
        try {
            this._destroyListeners.forEach(n => n()), this._views.slice().forEach(n => n.destroy());
        }
        finally {
            this._destroyed = !0, this._views = [], this._destroyListeners = [];
        } }
    onDestroy(n) { return this._destroyListeners.push(n), () => Vr(this._destroyListeners, n); }
    destroy() { if (this._destroyed)
        throw new C(406, !1); let n = this._injector; n.destroy && !n.destroyed && n.destroy(); }
    get viewCount() { return this._views.length; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = U({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function Vr(e, t) { let n = e.indexOf(t); n > -1 && e.splice(n, 1); }
function dc() { let e, t; return { promise: new Promise((o, r) => { e = o, t = r; }), resolve: e, reject: t }; }
function OI(e) { let t = h(), n = _(); if (tr(t, n), !PI(0, t))
    return; let o = t[L], r = we(t, n), i = e(() => _e(0, t, n), o); _i(0, r, i); }
function kI(e) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let t = h(), n = t[L], o = _(), r = t[v], i = ge(r, o); if (i.loadingState === ie.NOT_STARTED) {
    let s = we(t, o), c = e(() => Ai(i, t, o), n);
    _i(1, s, c);
} }
function xI(e, t, n) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let o = t[L], r = we(t, n), i = r[cc], s = e(() => Ft(o, i), o); _i(2, r, s); }
function Ai(e, t, n) { fc(e, t, n); }
function fc(e, t, n) { let o = t[L], r = t[v]; if (e.loadingState !== ie.NOT_STARTED)
    return e.loadingPromise ?? Promise.resolve(); let i = we(t, n), s = wR(r, e); e.loadingState = ie.IN_PROGRESS, js(1, i); let a = e.dependencyResolverFn, c = o.get(Or).add(); return a ? (e.loadingPromise = Promise.allSettled(a()).then(l => { let u = !1, d = [], f = []; for (let p of l)
    if (p.status === "fulfilled") {
        let g = p.value, m = z(g) || Re(g);
        if (m)
            d.push(m);
        else {
            let y = Qe(g);
            y && f.push(y);
        }
    }
    else {
        u = !0;
        break;
    } if (u) {
    if (e.loadingState = ie.FAILED, e.errorTmplIndex === null) {
        let g = new C(-750, !1);
        yf(t, g);
    }
}
else {
    e.loadingState = ie.COMPLETE;
    let p = s.tView;
    if (d.length > 0) {
        p.directiveRegistry = Jh(p.directiveRegistry, d);
        let g = d.map(y => y.type), m = is(!1, ...g);
        e.providers = m;
    }
    f.length > 0 && (p.pipeRegistry = Jh(p.pipeRegistry, f));
} }), e.loadingPromise.finally(() => { e.loadingPromise = null, c(); })) : (e.loadingPromise = Promise.resolve().then(() => { e.loadingPromise = null, e.loadingState = ie.COMPLETE, c(); }), e.loadingPromise); }
function PI(e, t) { return !(e === 0 && typeof ngServerMode < "u" && ngServerMode || t[L].get(II, null, { optional: !0 })?.behavior === Uf.Manual); }
function _e(e, t, n) { let o = t[v], r = t[n.index]; if (!PI(e, t))
    return; let i = we(t, n), s = ge(o, n); switch (pI(i), s.loadingState) {
    case ie.NOT_STARTED:
        wt(Y.Loading, n, r), fc(s, t, n), s.loadingState === ie.IN_PROGRESS && tm(s, n, r);
        break;
    case ie.IN_PROGRESS:
        wt(Y.Loading, n, r), tm(s, n, r);
        break;
    case ie.COMPLETE:
        wt(Y.Complete, n, r);
        break;
    case ie.FAILED:
        wt(Y.Error, n, r);
        break;
    default:
} }
function Ft(e, t, n) { return We(this, null, function* () { let o = e.get(kt); if (o.hydrating.has(t))
    return; let { parentBlockPromise: i, hydrationQueue: s } = v_(t, e); if (s.length === 0)
    return; i !== null && s.shift(), zR(o, s), i !== null && (yield i); let a = s[0]; o.has(a) ? yield om(e, s, n) : o.awaitParentBlock(a, () => We(null, null, function* () { return yield om(e, s, n); })); }); }
function om(e, t, n) { return We(this, null, function* () { let o = e.get(kt), r = o.hydrating, i = e.get(Tt), s = i.add(); for (let c = 0; c < t.length; c++) {
    let l = t[c], u = o.get(l);
    if (u != null) {
        if (yield ZR(u), yield QR(e), GR(u)) {
            tA(u), rm(t.slice(c), o);
            break;
        }
        r.get(l).resolve();
    }
    else {
        WR(c, t, o), rm(t.slice(c), o);
        break;
    }
} let a = t[t.length - 1]; yield r.get(a)?.promise, i.remove(s), n && n(t), nA(o.get(a), t, o, e.get(qe)); }); }
function GR(e) { return we(e.lView, e.tNode)[Lt] === Y.Error; }
function WR(e, t, n) { let o = e - 1, r = o > -1 ? n.get(t[o]) : null; r && oc(r.lContainer); }
function rm(e, t) { let n = t.hydrating; for (let o in e)
    n.get(o)?.reject(); t.cleanup(e); }
function zR(e, t) { for (let n of t)
    e.hydrating.set(n, dc()); }
function QR(e) { return new Promise(t => uf(t, { injector: e })); }
function ZR(e) { return We(this, null, function* () { let { tNode: t, lView: n } = e, o = we(n, t); return new Promise(r => { YR(o, r), _e(2, n, t); }); }); }
function YR(e, t) { Array.isArray(e[Do]) || (e[Do] = []), e[Do].push(t); }
function te(e, t, n) { return e === 0 ? im(t, n) : e === 2 ? !im(t, n) : !(typeof ngServerMode < "u" && ngServerMode); }
function KR(e) { return e != null && (e & 1) === 1; }
function im(e, t) { let n = e[L], o = ge(e[v], t), r = vi(n), i = KR(o.flags); if (typeof ngServerMode < "u" && ngServerMode)
    return !r || !i; let a = we(e, t)[cc] !== null; return !(i && a && r); }
function on(e, t) { let n = ge(e, t); return n.hydrateTriggers ??= new Map; }
function LI(e, t, n) { let o = [], r = [], i = [], s = []; for (let [a, c] of t) {
    let l = n.get(a);
    if (l !== void 0) {
        let u = c.data[bt], d = l;
        for (let f = 0; f < u; f++) {
            if (d = d.previousSibling, d.nodeType !== Node.ELEMENT_NODE)
                continue;
            let p = { el: d, blockName: a };
            c.hydrate.idle && o.push(p), c.hydrate.immediate && s.push(p), c.hydrate.timer !== null && (p.delay = c.hydrate.timer, r.push(p)), c.hydrate.viewport && (typeof c.hydrate.viewport != "boolean" && (p.intersectionObserverOptions = c.hydrate.viewport), i.push(p));
        }
    }
} JR(e, o), tO(e, s), XR(e, i), eO(e, r); }
function JR(e, t) { for (let n of t) {
    let o = e.get(kt), i = lc(() => Ft(e, n.blockName), e);
    o.addCleanupFn(n.blockName, i);
} }
function XR(e, t) { if (t.length > 0) {
    let n = e.get(kt);
    for (let o of t) {
        let r = $f(o.el, () => Ft(e, o.blockName), e, o.intersectionObserverOptions);
        n.addCleanupFn(o.blockName, r);
    }
} }
function eO(e, t) { for (let n of t) {
    let o = e.get(kt), r = () => Ft(e, n.blockName), s = uc(n.delay)(r, e);
    o.addCleanupFn(n.blockName, s);
} }
function tO(e, t) { for (let n of t)
    Ft(e, n.blockName); }
function FI(e, t, n, o, r, i, s, a, c, l) { let u = h(), d = b(), f = e + I, p = xn(u, d, e, null, 0, 0), g = u[L], m = vi(g); if (d.firstCreatePass) {
    ee("NgDefer");
    let ft = { primaryTmplIndex: t, loadingTmplIndex: o ?? null, placeholderTmplIndex: r ?? null, errorTmplIndex: i ?? null, placeholderBlockConfig: null, loadingBlockConfig: null, dependencyResolverFn: n ?? null, loadingState: ie.NOT_STARTED, loadingPromise: null, providers: null, hydrateTriggers: null, debug: null, flags: l ?? 0 };
    c?.(d, ft, a, s), MR(d, f, ft);
} let y = u[f]; jE(y, p, u); let D = null, x = null; if (y[xe]?.length > 0) {
    let ft = y[xe][0].data;
    x = ft[_a] ?? null, D = ft[gi];
} let re = [null, ii.Initial, null, null, null, null, x, D, null, null]; TR(u, f, re); let Ge = null; x !== null && m && (Ge = g.get(kt), Ge.add(x, { lView: u, tNode: p, lContainer: y })); let Pe = () => { pI(re), x !== null && Ge?.cleanup([x]); }; _i(0, re, () => fs(u, Pe)), Sr(u, Pe); }
function jI(e) { let t = h(), n = Me(); if (!te(0, t, n))
    return; let o = fe(); if (Q(t, o, e)) {
    let r = O(null);
    try {
        let i = !!e, a = we(t, n)[Lt];
        i === !1 && a === ii.Initial ? tr(t, n) : i === !0 && (a === ii.Initial || a === Y.Placeholder) && _e(0, t, n);
    }
    finally {
        O(r);
    }
} }
function VI(e) { let t = h(), n = Me(); if (!te(1, t, n))
    return; let o = fe(); if (Q(t, o, e)) {
    let r = O(null);
    try {
        let i = !!e, s = t[v], a = ge(s, n);
        i === !0 && a.loadingState === ie.NOT_STARTED && Ai(a, t, n);
    }
    finally {
        O(r);
    }
} }
function HI(e) { let t = h(), n = Me(); if (!te(2, t, n))
    return; let o = fe(), r = b(); if (on(r, n).set(6, null), Q(t, o, e))
    if (typeof ngServerMode < "u" && ngServerMode)
        _e(2, t, n);
    else {
        let s = t[L], a = O(null);
        try {
            if (!!e === !0) {
                let u = we(t, n)[cc];
                Ft(s, u);
            }
        }
        finally {
            O(a);
        }
    } }
function BI() { let e = h(), t = _(); if (!te(2, e, t))
    return; on(b(), t).set(7, null), typeof ngServerMode < "u" && ngServerMode && _e(2, e, t); }
function UI() { let e = h(), t = _(); te(0, e, t) && OI(lc); }
function $I() { let e = h(), t = _(); te(1, e, t) && kI(lc); }
function qI() { let e = h(), t = _(); if (!te(2, e, t))
    return; on(b(), t).set(0, null), typeof ngServerMode < "u" && ngServerMode ? _e(2, e, t) : xI(lc, e, t); }
function GI() { let e = h(), t = _(); if (!te(0, e, t))
    return; ge(e[v], t).loadingTmplIndex === null && tr(e, t), _e(0, e, t); }
function WI() { let e = h(), t = _(); if (!te(1, e, t))
    return; let n = e[v], o = ge(n, t); o.loadingState === ie.NOT_STARTED && fc(o, e, t); }
function zI() { let e = h(), t = _(); if (!te(2, e, t))
    return; if (on(b(), t).set(1, null), typeof ngServerMode < "u" && ngServerMode)
    _e(2, e, t);
else {
    let o = e[L], i = we(e, t)[cc];
    Ft(o, i);
} }
function QI(e) { let t = h(), n = _(); te(0, t, n) && OI(uc(e)); }
function ZI(e) { let t = h(), n = _(); te(1, t, n) && kI(uc(e)); }
function YI(e) { let t = h(), n = _(); if (!te(2, t, n))
    return; on(b(), n).set(5, { type: 5, delay: e }), typeof ngServerMode < "u" && ngServerMode ? _e(2, t, n) : xI(uc(e), t, n); }
function KI(e, t) { let n = h(), o = _(); te(0, n, o) && (tr(n, o), typeof ngServerMode < "u" && ngServerMode || er(n, o, e, t, Dv, () => _e(0, n, o), 0)); }
function JI(e, t) { let n = h(), o = _(); if (!te(1, n, o))
    return; let r = n[v], i = ge(r, o); i.loadingState === ie.NOT_STARTED && er(n, o, e, t, Dv, () => Ai(i, n, o), 1); }
function XI() { let e = h(), t = _(); if (!te(2, e, t))
    return; on(b(), t).set(4, null), typeof ngServerMode < "u" && ngServerMode && _e(2, e, t); }
function eD(e, t) { let n = h(), o = _(); te(0, n, o) && (tr(n, o), typeof ngServerMode < "u" && ngServerMode || er(n, o, e, t, Iv, () => _e(0, n, o), 0)); }
function tD(e, t) { let n = h(), o = _(); if (!te(1, n, o))
    return; let r = n[v], i = ge(r, o); i.loadingState === ie.NOT_STARTED && er(n, o, e, t, Iv, () => Ai(i, n, o), 1); }
function nD() { let e = h(), t = _(); if (!te(2, e, t))
    return; on(b(), t).set(3, null), typeof ngServerMode < "u" && ngServerMode && _e(2, e, t); }
function oD(e, t, n) { let o = h(), r = _(); te(0, o, r) && (tr(o, r), typeof ngServerMode < "u" && ngServerMode || er(o, r, e, t, $f, () => _e(0, o, r), 0, n)); }
function rD(e, t, n) { let o = h(), r = _(); if (!te(1, o, r))
    return; let i = o[v], s = ge(i, r); s.loadingState === ie.NOT_STARTED && er(o, r, e, t, $f, () => Ai(s, o, r), 1, n); }
function iD(e) { let t = h(), n = _(); if (!te(2, t, n))
    return; on(b(), n).set(2, e ? { type: 2, intersectionObserverOptions: e } : null), typeof ngServerMode < "u" && ngServerMode && _e(2, t, n); }
function Jf(e, t) { let n = h(), o = fe(); if (Q(n, o, t)) {
    let r = b(), i = Me();
    if (Za(i, r, n, e, t))
        Te(i) && jy(n, i.index);
    else {
        let a = K(i, n);
        Wa(n[T], a, null, i.value, e, t, null);
    }
} return Jf; }
function Xf(e, t, n, o) { let r = h(), i = fe(); if (Q(r, i, t)) {
    let s = b(), a = Me();
    zS(a, r, e, t, n, o);
} return Xf; }
var sD = new M("", { factory: () => !1 }), aD = new M("", { factory: () => nO }), nO = 4e3, oO = !1, Bn = (typeof ngServerMode > "u" || !ngServerMode) && typeof document < "u" && typeof document?.documentElement?.getAnimations == "function";
function pc(e) { return e[L].get(sD, oO); }
function rO(e, t, n) { let o = Ro.get(e); if (o) {
    for (let r of t)
        o.classList.push(r);
    for (let r of n)
        o.cleanupFns.push(r);
}
else
    Ro.set(e, { classList: t, cleanupFns: n }); }
function ep(e) { let t = Ro.get(e); if (t) {
    for (let n of t.cleanupFns)
        n();
    Ro.delete(e);
} wn.delete(e); }
var iO = () => { }, Ro = new WeakMap, wn = new WeakMap, Co = new WeakMap;
function dd(e, t) { let n = Co.get(e); if (n && n.length > 0) {
    let o = n.findIndex(r => r === t);
    o > -1 && n.splice(o, 1);
} n?.length === 0 && Co.delete(e); }
function gc(e, t) { let n = Co.get(e)?.shift(), o = t[It]; if (o) {
    let i = ta(e.index, o)?.previousSibling;
    n && i && n === i && n.dispatchEvent(new CustomEvent("animationend", { detail: { cancel: !0 } }));
} }
function cD(e, t) { Co.has(e) ? Co.get(e)?.push(t) : Co.set(e, [t]); }
function da(e) { let t = e[Dt] ??= {}; return t.enter ??= new Map; }
function Pn(e) { let t = e[Dt] ??= {}; return t.leave ??= new Map; }
function lD(e) { let t = typeof e == "function" ? e() : e, n = Array.isArray(t) ? t : null; return typeof t == "string" && (n = t.trim().split(/\s+/).filter(o => o)), n; }
function sO(e, t) { if (!Bn)
    return; let n = Ro.get(e); if (n && n.classList.length > 0 && aO(e, n.classList))
    for (let o of n.classList)
        t.removeClass(e, o); ep(e); }
function aO(e, t) { for (let n of t)
    if (e.classList.contains(n))
        return !0; return !1; }
function uD(e, t) { let n = wn.get(t); return n === void 0 ? !0 : t === e.target && (n.animationName !== void 0 && e.animationName === n.animationName || n.propertyName !== void 0 && e.propertyName === n.propertyName); }
function hc(e, t, n) { let o = e.get(t.index) ?? { animateFns: [] }; o.animateFns.push(n), e.set(t.index, o); }
function fd(e, t) { if (e)
    for (let n of e)
        n(); for (let n of t)
    n(); }
function pd(e, t) { let n = Pn(e).get(t.index); n && (n.resolvers = void 0); }
function bs(e, t, n, o, r) { dd(t, n), fd(o, r), pd(e, t); }
function Hr(e) { if (ee("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !Bn)
    return Hr; let t = h(); if (pc(t))
    return Hr; let n = _(); return gc(n, t), hc(da(t), n, () => cO(t, n, e)), Ua(t[L]), df(t[L], da(t)), Hr; }
function cO(e, t, n) { let o = K(t, e), r = e[T], i = e[L].get(G), s = lD(n), a = [], c = u => { if (u.target !== o)
    return; let d = u instanceof AnimationEvent ? "animationend" : "transitionend"; i.runOutsideAngular(() => { r.listen(o, d, l); }); }, l = u => { u.target === o && lO(u, o, r); }; if (s && s.length > 0) {
    i.runOutsideAngular(() => { a.push(r.listen(o, "animationstart", c)), a.push(r.listen(o, "transitionstart", c)); }), rO(o, s, a);
    for (let u of s)
        r.addClass(o, u);
    i.runOutsideAngular(() => { requestAnimationFrame(() => { if (Cy(o, wn, Bn), !wn.has(o)) {
        for (let u of s)
            r.removeClass(o, u);
        ep(o);
    } }); });
} }
function lO(e, t, n) { let o = Ro.get(t); if (!(e.target !== t || !o) && uD(e, t)) {
    e.stopImmediatePropagation();
    for (let r of o.classList)
        n.removeClass(t, r);
    ep(t);
} }
function Br(e) { if (ee("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !Bn)
    return Br; let t = h(); if (pc(t))
    return Br; let n = _(); return gc(n, t), hc(da(t), n, () => uO(t, n, e)), Ua(t[L]), df(t[L], da(t)), Br; }
function uO(e, t, n) { let o = K(t, e); n.call(e[$], { target: o, animationComplete: iO }); }
function Ur(e) { if (ee("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !Bn)
    return Ur; let t = h(); if (pc(t))
    return Ur; let o = _(); return gc(o, t), hc(Pn(t), o, () => dO(t, o, e)), Ua(t[L]), Ur; }
function dO(e, t, n) { let { promise: o, resolve: r } = dc(), i = K(t, e), s = e[T], a = e[L].get(G); An.add(e[je]), (Pn(e).get(t.index).resolvers ??= []).push(r); let c = lD(n); return c && c.length > 0 ? fO(i, t, e, c, s, a) : r(), { promise: o, resolve: r }; }
function fO(e, t, n, o, r, i) { sO(e, r); let s = [], a = Pn(n).get(t.index)?.resolvers, c = l => { if (l.target === e && (l instanceof CustomEvent || uD(l, e))) {
    if (l.stopImmediatePropagation(), wn.delete(e), dd(t, e), Array.isArray(t.projection))
        for (let u of o)
            r.removeClass(e, u);
    fd(a, s), pd(n, t);
} }; i.runOutsideAngular(() => { s.push(r.listen(e, "animationend", c)), s.push(r.listen(e, "transitionend", c)); }), cD(t, e); for (let l of o)
    r.addClass(e, l); i.runOutsideAngular(() => { requestAnimationFrame(() => { Cy(e, wn, Bn), wn.has(e) || (dd(t, e), fd(a, s), pd(n, t)); }); }); }
function fa(e) { if (ee("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !Bn)
    return fa; let t = h(), n = _(); return gc(n, t), An.add(t[je]), hc(Pn(t), n, () => pO(t, n, e)), Ua(t[L]), fa; }
function pO(e, t, n) { let { promise: o, resolve: r } = dc(), i = K(t, e), s = [], a = e[T], c = pc(e), l = e[L].get(G), u = e[L].get(aD); (Pn(e).get(t.index).resolvers ??= []).push(r); let d = Pn(e).get(t.index)?.resolvers; if (c)
    bs(e, t, i, d, s);
else {
    let f = setTimeout(() => bs(e, t, i, d, s), u), p = { target: i, animationComplete: () => { bs(e, t, i, d, s), clearTimeout(f); } };
    cD(t, i), l.runOutsideAngular(() => { s.push(a.listen(i, "animationend", () => { bs(e, t, i, d, s), clearTimeout(f); }, { once: !0 })); }), n.call(e[$], p);
} return { promise: o, resolve: r }; }
function dD() { return h()[ne][$]; }
function fD() { let e = h(), t = b(), n = _(); t.firstCreatePass && hO(t, n, e); let o = hD(n, e); o && (ee("NgSignalForms"), n.flags & 1024 ? am(e, n, o, "value") : n.flags & 2048 ? am(e, n, o, "checked") : n.flags & 4096 ? IO(o) : n.flags & 8192 && CO(e, n, o), o.\u0275register()); }
function pD(e, t, n) { let o = h(), r = Me(), i = fe(); if (Q(o, i, e)) {
    let s = b();
    Ga(r, o, t, e, o[T], n);
} gD(o, r); }
function gO() { let e = h(), t = Me(); gD(e, t); }
function gD(e, t) { let n = hD(t, e); n && (NO(e, t, n), t.flags & 1024 ? cm(t, e, n, "value") : t.flags & 2048 ? cm(t, e, n, "checked") : t.flags & 4096 ? wO(t, e, n) : _O(t, e, n)), fe(); }
function hO(e, t, n) { let o = t.inputs?.formField; if (!o || Te(t) && o.includes(t.directiveStart + t.componentOffset))
    return; let r = o.find(s => _f in n[s]); if (r === void 0)
    return; t.fieldIndex = r; let i = mO(t, n) || vO(e, t); if (!(yO(t) || i))
    throw new C(318, !1); }
function mO(e, t) { return t[e.fieldIndex].\u0275interopControl ? (e.flags |= 4096, !0) : !1; }
function vO(e, t) { for (let n = t.directiveStart; n < t.directiveEnd; n++) {
    let o = e.data[n];
    if (sm(o, "value"))
        return t.flags |= 1024, t.customControlIndex = n, !0;
    if (sm(o, "checked"))
        return t.flags |= 2048, t.customControlIndex = n, !0;
} return !1; }
function yO(e) { return DO(e) ? (e.flags |= 8192, SO(e) && (e.flags |= 16384), bO(e) && (e.flags |= 32768), !0) : !1; }
function hD(e, t) { let n = e.fieldIndex; return n === -1 ? null : t[n]; }
function sm(e, t) { return EO(e, t) && mD(e, t + "Change"); }
function EO(e, t) { return t in e.inputs; }
function mD(e, t) { return t in e.outputs; }
function am(e, t, n, o) { let r = b(), i = t.customControlIndex, s = o + "Change"; _o(t, e, i, s, s, _t(t, e, u => n.state().setControlValue(u))); let a = r.data[i], c = "touchedChange"; mD(a, c) && _o(t, e, i, c, c, _t(t, e, () => n.state().markAsTouched())); let l = e[i]; n.focus = () => l.focus ? l.focus() : n.element.focus(); }
function IO(e) { let t = e.\u0275interopControl; t.registerOnChange(n => e.state().setControlValue(n)), t.registerOnTouched(() => e.state().markAsTouched()), e.focus = () => e.element.focus(); }
function DO(e) { if (e.type !== 2)
    return !1; let t = e.value; return t === "input" || t === "textarea" || t === "select"; }
function CO(e, t, n) { let o = b(), r = e[T], i = K(t, e), s = () => { let c = n.state(); c.setControlValue(AO(i, c.value)); }; sa(t, o, e, void 0, r, "input", s, _t(t, e, s)); let a = () => { n.state().markAsTouched(); }; if (sa(t, o, e, void 0, r, "blur", a, _t(t, e, a)), t.type === 2 && t.value === "select" && typeof MutationObserver == "function") {
    let c = TO(i, n);
    Al(o, e, c, c.disconnect);
} n.focus = () => i.focus(); }
function TO(e, t) { let n = new MutationObserver(o => { o.some(r => MO(r)) && (e.value = t.state().value()); }); return n.observe(e, { attributes: !0, attributeFilter: ["value"], characterData: !0, childList: !0, subtree: !0 }), n; }
function MO(e) { if (e.type === "childList" || e.type === "characterData") {
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
function NO(e, t, n) { if (n.classes) {
    let o = vc(e);
    o.classes ??= {}, n.state();
    let r = e[T], i = K(t, e);
    for (let [s, a] of n.classes) {
        let c = a();
        VO(o.classes, s, c) && (c ? r.addClass(i, s) : r.removeClass(i, s));
    }
} }
function cm(e, t, n, o) { let r = b(), i = e.customControlIndex, s = t[i], a = r.data[i], c = n.state(), l = vc(t), u = c.controlValue(); Oo(l, op, u) && bn(a, s, o, u); let d = (e.flags & 8192) !== 0, f = d ? K(e, t) : null, p = t[T]; for (let g of rp) {
    let m = c[g]?.();
    if (Oo(l, g, m)) {
        let y = mc[g];
        tp(e, t, y, m), d && !(y in a.inputs) && np(e, p, f, g, m, y);
    }
} }
function wO(e, t, n) { let o = n.\u0275interopControl, r = vc(t), i = n.state(), s = (e.flags & 8192) !== 0, a = s ? K(e, t) : null, c = t[T], l = i.value(); Oo(r, op, l) && Ne(() => o.writeValue(l)); for (let u of rp) {
    let d = i[u]?.();
    if (Oo(r, u, d)) {
        let f = mc[u], p = tp(e, t, f, d);
        u === yD ? o.setDisabledState && Ne(() => o.setDisabledState(d)) : s && !p && np(e, c, a, u, d, f);
    }
} }
function _O(e, t, n) { let o = K(e, t), r = t[T], i = n.state(), s = vc(t), a = i.controlValue(); Oo(s, op, a) && RO(o, a); for (let c of rp) {
    let l = i[c]?.();
    if (Oo(s, c, l)) {
        let u = mc[c];
        np(e, r, o, c, l, u), tp(e, t, u, l);
    }
} }
function tp(e, t, n, o) { let r = e.inputs?.[n]; if (r) {
    let i = b();
    for (let s of r) {
        let a = i.data[s], c = t[s];
        bn(a, c, n, o);
    }
    return !0;
} return !1; }
function np(e, t, n, o, r, i) { switch (o) {
    case LO:
        t.setAttribute(n, i, r);
        break;
    case yD:
    case FO:
    case jO:
        HO(t, n, i, r);
        break;
    case OO:
    case xO:
        e.flags & 16384 && um(t, n, i, r);
        break;
    case kO:
    case PO:
        e.flags & 32768 && um(t, n, i, r);
        break;
} }
function vD(e) { return e === null || e instanceof Date; }
function SO(e) { if (!e.attrs || e.value !== "input")
    return !1; for (let t = 0; t < e.attrs.length; t += 2) {
    let n = e.attrs[t];
    if (Sd(n))
        break;
    if (n === "type") {
        let o = e.attrs[t + 1];
        return o === "date" || o === "datetime-local" || o === "month" || o === "number" || o === "range" || o === "time" || o === "week";
    }
} return !1; }
function bO(e) { return e.value !== "select"; }
function AO(e, t) { switch (e.type) {
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
        if (vD(n))
            return e.valueAsDate;
        if (typeof n == "number")
            return e.valueAsNumber;
        break;
} return e.value; }
function RO(e, t) { switch (e.type) {
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
            lm(e, t);
            return;
        }
        break;
    case "date":
    case "month":
    case "time":
    case "week": if (vD(t)) {
        e.valueAsDate = t;
        return;
    }
    else if (typeof t == "number") {
        lm(e, t);
        return;
    }
} e.value = t; }
function lm(e, t) { isNaN(t) ? e.value = "" : e.valueAsNumber = t; }
var yD = S({ disabled: S }), OO = S({ max: S }), kO = S({ maxLength: S }), xO = S({ min: S }), PO = S({ minLength: S }), LO = S({ name: S }), FO = S({ readonly: S }), jO = S({ required: S }), op = S({ controlValue: S }), mc = { disabled: "disabled", disabledReasons: "disabledReasons", dirty: "dirty", errors: "errors", hidden: "hidden", invalid: "invalid", max: "max", maxLength: "maxLength", min: "min", minLength: "minLength", name: "name", pattern: "pattern", pending: "pending", readonly: "readonly", required: "required", touched: "touched" }, rp = Object.keys(mc);
function vc(e) { let t = Xe(), n = e[t]; return n === B && (n = e[t] = {}), n; }
function Oo(e, t, n) { let o = e[t]; return Object.is(o, n) ? !1 : (e[t] = n, !0); }
function VO(e, t, n) { let o = e[t]; return Object.is(o, n) ? !1 : (e[t] = n, !0); }
function HO(e, t, n, o) { o ? e.setAttribute(t, n, "") : e.removeAttribute(t, n); }
function um(e, t, n, o) { o !== void 0 ? e.setAttribute(t, n, o.toString()) : e.removeAttribute(t, n); }
var gd = class {
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
function Eu(e, t, n, o, r) { return e === n && Object.is(t, o) ? 1 : Object.is(r(e, t), r(n, o)) ? -1 : 0; }
function BO(e, t, n, o) { let r, i, s = 0, a = e.length - 1, c = void 0; if (Array.isArray(t)) {
    co(o);
    let l = t.length - 1;
    for (co(null); s <= a && s <= l;) {
        let u = e.at(s), d = t[s], f = Eu(s, u, s, d, n);
        if (f !== 0) {
            f < 0 && e.updateValue(s, d), s++;
            continue;
        }
        let p = e.at(a), g = t[l], m = Eu(a, p, l, g, n);
        if (m !== 0) {
            m < 0 && e.updateValue(a, g), a--, l--;
            continue;
        }
        let y = n(s, u), D = n(a, p), x = n(s, d);
        if (Object.is(x, D)) {
            let re = n(l, g);
            Object.is(re, y) ? (e.swap(s, a), e.updateValue(a, g), l--, a--) : e.move(a, s), e.updateValue(s, d), s++;
            continue;
        }
        if (r ??= new pa, i ??= fm(e, s, a, n), hd(e, r, s, x))
            e.updateValue(s, d), s++, a++;
        else if (i.has(x))
            r.set(y, e.detach(s)), a--;
        else {
            let re = e.create(s, t[s]);
            e.attach(s, re), s++, a++;
        }
    }
    for (; s <= l;)
        dm(e, r, n, s, t[s]), s++;
}
else if (t != null) {
    co(o);
    let l = t[Symbol.iterator]();
    co(null);
    let u = l.next();
    for (; !u.done && s <= a;) {
        let d = e.at(s), f = u.value, p = Eu(s, d, s, f, n);
        if (p !== 0)
            p < 0 && e.updateValue(s, f), s++, u = l.next();
        else {
            r ??= new pa, i ??= fm(e, s, a, n);
            let g = n(s, f);
            if (hd(e, r, s, g))
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
        dm(e, r, n, e.length, u.value), u = l.next();
} for (; s <= a;)
    e.destroy(e.detach(a--)); r?.forEach(l => { e.destroy(l); }); }
function hd(e, t, n, o) { return t !== void 0 && t.has(o) ? (e.attach(n, t.get(o)), t.delete(o), !0) : !1; }
function dm(e, t, n, o, r) { if (hd(e, t, o, n(o, r)))
    e.updateValue(o, r);
else {
    let i = e.create(o, r);
    e.attach(o, i);
} }
function fm(e, t, n, o) { let r = new Set; for (let i = t; i <= n; i++)
    r.add(o(i, e.at(i))); return r; }
var pa = class {
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
function ED(e, t, n, o, r, i, s, a) { ee("NgControlFlow"); let c = h(), l = b(), u = ve(l.consts, i); return xn(c, l, e, t, n, o, r, u, 256, s, a), yc; }
function yc(e, t, n, o, r, i, s, a) { ee("NgControlFlow"); let c = h(), l = b(), u = ve(l.consts, i); return xn(c, l, e, t, n, o, r, u, 512, s, a), yc; }
function ID(e, t) { ee("NgControlFlow"); let n = h(), o = fe(), r = n[o] !== B ? n[o] : -1, i = r !== -1 ? ga(n, I + r) : void 0, s = 0; if (Q(n, o, e)) {
    let a = O(null);
    try {
        if (i !== void 0 && Ef(i, s), e !== -1) {
            let c = I + e, l = ga(n, c), u = Ed(n[v], c), d = DE(l, u, n), f = Yo(n, u, t, { dehydratedView: d });
            Ko(l, f, s, Rn(u, d));
        }
    }
    finally {
        O(a);
    }
}
else if (i !== void 0) {
    let a = Yy(i, s);
    a !== void 0 && (a[$] = t);
} }
var md = class {
    lContainer;
    $implicit;
    $index;
    constructor(t, n, o) { this.lContainer = t, this.$implicit = n, this.$index = o; }
    get $count() { return this.lContainer.length - W; }
};
function DD(e) { return e; }
function CD(e, t) { return t; }
var vd = class {
    hasEmptyBlock;
    trackByFn;
    liveCollection;
    constructor(t, n, o) { this.hasEmptyBlock = t, this.trackByFn = n, this.liveCollection = o; }
};
function TD(e, t, n, o, r, i, s, a, c, l, u, d, f) { ee("NgControlFlow"); let p = h(), g = b(), m = c !== void 0, y = h(), D = a ? s.bind(y[ne][$]) : s, x = new vd(m, D); y[I + e] = x, xn(p, g, e + 1, t, n, o, r, ve(g.consts, i), 256), m && xn(p, g, e + 2, c, l, u, d, ve(g.consts, f), 512); }
var yd = class extends gd {
    lContainer;
    hostLView;
    templateTNode;
    operationsCounter = void 0;
    needsIndexUpdate = !1;
    constructor(t, n, o) { super(), this.lContainer = t, this.hostLView = n, this.templateTNode = o; }
    get length() { return this.lContainer.length - W; }
    at(t) { return this.getLView(t)[$].$implicit; }
    attach(t, n) { let o = n[de]; this.needsIndexUpdate ||= t !== this.length, Ko(this.lContainer, n, t, Rn(this.templateTNode, o)), UO(this.lContainer, t); }
    detach(t) { return this.needsIndexUpdate ||= t !== this.length - 1, $O(this.lContainer, t), qO(this.lContainer, t); }
    create(t, n) { let o = ei(this.lContainer, this.templateTNode.tView.ssrId); return Yo(this.hostLView, this.templateTNode, new md(this.lContainer, n, t), { dehydratedView: o }); }
    destroy(t) { Ci(t[v], t); }
    updateValue(t, n) { this.getLView(t)[$].$implicit = n; }
    reset() { this.needsIndexUpdate = !1; }
    updateIndexes() { if (this.needsIndexUpdate)
        for (let t = 0; t < this.length; t++)
            this.getLView(t)[$].$index = t; }
    getLView(t) { return GO(this.lContainer, t); }
};
function MD(e) { let t = O(null), n = pe(); try {
    let o = h(), r = o[v], i = o[n], s = n + 1, a = ga(o, s);
    if (i.liveCollection === void 0) {
        let l = Ed(r, s);
        i.liveCollection = new yd(a, o, l);
    }
    else
        i.liveCollection.reset();
    let c = i.liveCollection;
    if (BO(c, e, i.trackByFn, t), c.updateIndexes(), i.hasEmptyBlock) {
        let l = fe(), u = c.length === 0;
        if (Q(o, l, u)) {
            let d = n + 2, f = ga(o, d);
            if (u) {
                let p = Ed(r, d), g = DE(f, p, o), m = Yo(o, p, void 0, { dehydratedView: g });
                Ko(f, m, 0, Rn(p, g));
            }
            else
                r.firstUpdatePass && nc(f), Ef(f, 0);
        }
    }
}
finally {
    O(t);
} }
function ga(e, t) { return e[t]; }
function UO(e, t) { if (e.length <= W)
    return; let n = W + t, o = e[n], r = o ? o[Dt] : void 0; if (o && r && r.detachedLeaveAnimationFns && r.detachedLeaveAnimationFns.length > 0) {
    let i = o[L];
    AS(i, r), An.delete(o[je]), r.detachedLeaveAnimationFns = void 0;
} }
function $O(e, t) { if (e.length <= W)
    return; let n = W + t, o = e[n], r = o ? o[Dt] : void 0; r && r.leave && r.leave.size > 0 && (r.detachedLeaveAnimationFns = []); }
function qO(e, t) { return Jr(e, t); }
function GO(e, t) { return Yy(e, t); }
function Ed(e, t) { return Ct(e, t); }
function ip(e, t, n) { let o = h(), r = fe(); if (Q(o, r, t)) {
    let i = b(), s = Me();
    Ga(s, o, e, t, o[T], n);
} return ip; }
function Id(e, t, n, o, r) { Za(t, e, n, r ? "class" : "style", o); }
function Ec(e, t, n, o) { let r = h(), i = r[v], s = e + I, a = i.firstCreatePass ? Nf(s, r, 2, t, vf, ps(), n, o) : i.data[s]; if (za(a, r, e, t, cp), eo(a)) {
    let c = r[v];
    qa(c, r, a), Qd(c, a, r);
} return o != null && Zo(r, a), Ec; }
function Ic() { let e = b(), t = _(), n = Qa(t); return e.firstCreatePass && wf(e, n), Ol(n) && Pl(), Rl(), n.classesWithoutHost != null && sw(n) && Id(e, n, h(), n.classesWithoutHost, !0), n.stylesWithoutHost != null && aw(n) && Id(e, n, h(), n.stylesWithoutHost, !1), Ic; }
function sp(e, t, n, o) { return Ec(e, t, n, o), Ic(), sp; }
function Dc(e, t, n, o) { let r = h(), i = r[v], s = e + I, a = i.firstCreatePass ? SE(s, i, 2, t, n, o) : i.data[s]; return za(a, r, e, t, cp), o != null && Zo(r, a), Dc; }
function Cc() { let e = _(), t = Qa(e); return Ol(t) && Pl(), Rl(), Cc; }
function ap(e, t, n, o) { return Dc(e, t, n, o), Cc(), ap; }
var cp = (e, t, n, o, r) => (et(!0), Pa(t[T], o, Yl()));
function WO(e, t, n, o, r) { let i = !ka(t, n); if (et(i), i)
    return Pa(t[T], o, Yl()); let s = t[de], a = Mi(s, e, t, n); return Lv(s, r) && Ra(s, r, a.nextSibling), s && (Rd(n) || ov(a)) && Te(n) && (eh(n), ry(a)), a; }
function ND() { cp = WO; }
function Tc(e, t, n) { let o = h(), r = o[v], i = e + I, s = r.firstCreatePass ? Nf(i, o, 8, "ng-container", vf, ps(), t, n) : r.data[i]; if (za(s, o, e, "ng-container", fp), eo(s)) {
    let a = o[v];
    qa(a, o, s), Qd(a, s, o);
} return n != null && Zo(o, s), Tc; }
function Ri() { let e = b(), t = _(), n = Qa(t); return e.firstCreatePass && wf(e, n), Ri; }
function lp(e, t, n) { return Tc(e, t, n), Ri(), lp; }
function Mc(e, t, n) { let o = h(), r = o[v], i = e + I, s = r.firstCreatePass ? SE(i, r, 8, "ng-container", t, n) : r.data[i]; return za(s, o, e, "ng-container", fp), n != null && Zo(o, s), Mc; }
function up() { let e = _(), t = Qa(e); return Ri; }
function dp(e, t, n) { return Mc(e, t, n), up(), dp; }
var fp = (e, t, n, o, r) => (et(!0), Jd(t[T], ""));
function zO(e, t, n, o, r) { let i, s = !ka(t, n); if (et(s), s)
    return Jd(t[T], ""); let a = t[de], c = Mi(a, e, t, n), l = Pv(a, r); return Ra(a, r, c), i = ec(l, c), i; }
function wD() { fp = zO; }
function _D() { return h(); }
function pp(e, t, n) { let o = h(), r = fe(); if (Q(o, r, t)) {
    let i = b(), s = Me();
    mf(s, o, e, t, o[T], n);
} return pp; }
function gp(e, t, n) { let o = h(), r = fe(); if (Q(o, r, t)) {
    let i = b(), s = Me(), a = hs(i.data), c = Vy(a, s, o);
    mf(s, o, e, t, c, n);
} return gp; }
var xr = void 0;
function QO(e) { let t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length; return t === 1 && n === 0 ? 1 : 5; }
var ZO = ["en", [["a", "p"], ["AM", "PM"]], [["AM", "PM"]], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], xr, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], xr, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm\u202Fa", "h:mm:ss\u202Fa", "h:mm:ss\u202Fa z", "h:mm:ss\u202Fa zzzz"], ["{1}, {0}", xr, xr, xr], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", QO], To = {};
function YO(e, t, n) { typeof t != "string" && (n = t, t = e[ko.LocaleId]), t = t.toLowerCase().replace(/_/g, "-"), To[t] = e, n && (To[t][ko.ExtraData] = n); }
function hp(e) { let t = XO(e), n = pm(t); if (n)
    return n; let o = t.split("-")[0]; if (n = pm(o), n)
    return n; if (o === "en")
    return ZO; throw new C(701, !1); }
function KO(e) { return hp(e)[ko.CurrencyCode] || null; }
function SD(e) { return hp(e)[ko.PluralCase]; }
function pm(e) { return e in To || (To[e] = Ae.ng && Ae.ng.common && Ae.ng.common.locales && Ae.ng.common.locales[e]), To[e]; }
function JO() { To = {}; }
var ko = (function (e) { return e[e.LocaleId = 0] = "LocaleId", e[e.DayPeriodsFormat = 1] = "DayPeriodsFormat", e[e.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", e[e.DaysFormat = 3] = "DaysFormat", e[e.DaysStandalone = 4] = "DaysStandalone", e[e.MonthsFormat = 5] = "MonthsFormat", e[e.MonthsStandalone = 6] = "MonthsStandalone", e[e.Eras = 7] = "Eras", e[e.FirstDayOfWeek = 8] = "FirstDayOfWeek", e[e.WeekendRange = 9] = "WeekendRange", e[e.DateFormat = 10] = "DateFormat", e[e.TimeFormat = 11] = "TimeFormat", e[e.DateTimeFormat = 12] = "DateTimeFormat", e[e.NumberSymbols = 13] = "NumberSymbols", e[e.NumberFormats = 14] = "NumberFormats", e[e.CurrencyCode = 15] = "CurrencyCode", e[e.CurrencySymbol = 16] = "CurrencySymbol", e[e.CurrencyName = 17] = "CurrencyName", e[e.Currencies = 18] = "Currencies", e[e.Directionality = 19] = "Directionality", e[e.PluralCase = 20] = "PluralCase", e[e.ExtraData = 21] = "ExtraData", e; })(ko || {});
function XO(e) { return e.toLowerCase().replace(/_/g, "-"); }
var ek = ["zero", "one", "two", "few", "many"];
function tk(e, t) { let n = SD(t)(parseInt(e, 10)), o = ek[n]; return o !== void 0 ? o : "other"; }
var Oi = "en-US", nk = "USD", bD = { marker: "element" }, AD = { marker: "ICU" }, Nt = (function (e) { return e[e.SHIFT = 2] = "SHIFT", e[e.APPEND_EAGERLY = 1] = "APPEND_EAGERLY", e[e.COMMENT = 2] = "COMMENT", e; })(Nt || {}), RD = Oi;
function OD(e) { typeof e == "string" && (RD = e.toLowerCase().replace(/_/g, "-")); }
function ok() { return RD; }
var si = 0, $r = 0;
function rk(e) { e && (si = si | 1 << Math.min($r, 31)), $r++; }
function ik(e, t, n) { if ($r > 0) {
    let o = e.data[n], r = Array.isArray(o) ? o : o.update, i = Xe() - $r - 1;
    LD(e, t, r, i, si);
} si = 0, $r = 0; }
function kD(e, t, n) { let o = e[T]; switch (n) {
    case Node.COMMENT_NODE: return Jd(o, t);
    case Node.TEXT_NODE: return Kd(o, t);
    case Node.ELEMENT_NODE: return Pa(o, t, null);
} }
var qr = (e, t, n, o) => (et(!0), kD(e, n, o));
function sk(e, t, n, o) { let r = e[de], i = t - I, s = !tc() || !r || br() || Oa(r, i); return et(s), s ? kD(e, n, o) : iE(r, i); }
function xD() { qr = sk; }
function ak(e, t, n, o) { let r = e[T]; for (let i = 0; i < t.length; i++) {
    let s = t[i++], a = t[i], c = (s & Nt.COMMENT) === Nt.COMMENT, l = (s & Nt.APPEND_EAGERLY) === Nt.APPEND_EAGERLY, u = s >>> Nt.SHIFT, d = e[u], f = !1;
    d === null && (d = e[u] = qr(e, u, a, c ? Node.COMMENT_NODE : Node.TEXT_NODE), f = Rr()), l && n !== null && f && Sn(r, n, d, o, !1);
} }
function PD(e, t, n, o) { let r = n[T], i = null, s; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "string") {
        let l = t[++a];
        n[l] === null && (n[l] = qr(n, l, c, Node.TEXT_NODE));
    }
    else if (typeof c == "number")
        switch (c & 1) {
            case 0:
                let l = Ob(c);
                i === null && (i = l, s = r.parentNode(o));
                let u, d;
                if (l === i ? (u = o, d = s) : (u = null, d = F(n[l])), d !== null) {
                    let m = kb(c), y = n[m];
                    Sn(r, d, y, u, !1);
                    let D = Fr(e, m);
                    if (D !== null && typeof D == "object") {
                        let x = Xa(D, n);
                        x !== null && PD(e, D.create[x], n, n[D.anchorIdx]);
                    }
                }
                break;
            case 1:
                let f = c >>> 1, p = t[++a], g = t[++a];
                Wa(r, In(f, n), null, null, p, g, null);
                break;
            default:
        }
    else
        switch (c) {
            case AD:
                let l = t[++a], u = t[++a];
                if (n[u] === null) {
                    let p = n[u] = qr(n, u, l, Node.COMMENT_NODE);
                    Be(p, n);
                }
                break;
            case bD:
                let d = t[++a], f = t[++a];
                if (n[f] === null) {
                    let p = n[f] = qr(n, f, d, Node.ELEMENT_NODE);
                    Be(p, n);
                }
                break;
            default:
        }
} }
function LD(e, t, n, o, r) { for (let i = 0; i < n.length; i++) {
    let s = n[i], a = n[++i];
    if (s & r) {
        let c = "";
        for (let l = i + 1; l <= i + a; l++) {
            let u = n[l];
            if (typeof u == "string")
                c += u;
            else if (typeof u == "number")
                if (u < 0)
                    c += R(t[o - u]);
                else {
                    let d = u >>> 2;
                    switch (u & 3) {
                        case 1:
                            let f = n[++l], p = n[++l], g = e.data[d];
                            typeof g == "string" ? Wa(t[T], t[d], null, g, f, c, p) : Ga(g, t, f, c, t[T], p);
                            break;
                        case 0:
                            let m = t[d];
                            m !== null && ny(t[T], m, c);
                            break;
                        case 2:
                            ck(e, Fr(e, d), t, c);
                            break;
                        case 3:
                            gm(e, Fr(e, d), o, t);
                            break;
                    }
                }
        }
    }
    else {
        let c = n[i + 1];
        if (c > 0 && (c & 3) === 3) {
            let l = c >>> 2, u = Fr(e, l);
            t[u.currentCaseLViewIndex] < 0 && gm(e, u, o, t);
        }
    }
    i += a;
} }
function gm(e, t, n, o) { let r = o[t.currentCaseLViewIndex]; if (r !== null) {
    let i = si;
    r < 0 && (r = o[t.currentCaseLViewIndex] = ~r, i = -1), LD(e, o, t.update[r], n, i);
} }
function ck(e, t, n, o) { let r = lk(t, o); if (Xa(t, n) !== r && (FD(e, t, n), n[t.currentCaseLViewIndex] = r === null ? null : ~r, r !== null)) {
    let s = n[t.anchorIdx];
    s && PD(e, t.create[r], n, s), Kb(n, t.anchorIdx, r);
} }
function FD(e, t, n) { let o = Xa(t, n); if (o !== null) {
    let r = t.remove[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i];
        if (s > 0) {
            let a = In(s, n);
            a !== null && Ei(n[T], a);
        }
        else
            FD(e, Fr(e, ~s), n);
    }
} }
function lk(e, t) { let n = e.cases.indexOf(t); if (n === -1)
    switch (e.type) {
        case 1: {
            let o = tk(t, ok());
            n = e.cases.indexOf(o), n === -1 && o !== "other" && (n = e.cases.indexOf("other"));
            break;
        }
        case 0: {
            n = e.cases.indexOf("other");
            break;
        }
    } return n === -1 ? null : n; }
var ha = /�(\d+):?\d*�/gi, uk = /({\s*�\d+:?\d*�\s*,\s*\S{6}\s*,[\s\S]*})/gi, dk = /�(\d+)�/, jD = /^\s*(�\d+:?\d*�)\s*,\s*(select|plural)\s*,/, Gr = "\uFFFD", fk = /�\/?\*(\d+:\d+)�/gi, pk = /�(\/?[#*]\d+):?\d*�/gi, gk = /\uE500/g;
function hk(e) { return e.replace(gk, " "); }
function mk(e, t, n, o, r, i) { let s = no(), a = [], c = [], l = [[]], u = [[]]; r = Ik(r, i); let d = hk(r).split(pk); for (let f = 0; f < d.length; f++) {
    let p = d[f];
    if ((f & 1) === 0) {
        let g = Dd(p);
        for (let m = 0; m < g.length; m++) {
            let y = g[m];
            if ((m & 1) === 0) {
                let D = y;
                D !== "" && vk(u[0], e, s, l[0], a, c, n, D);
            }
            else {
                let D = y;
                if (typeof D != "object")
                    throw new Error(`Unable to parse ICU expression in "${r}" message.`);
                let re = VD(e, s, l[0], n, a, "", !0).index;
                BD(u[0], e, n, c, t, D, re);
            }
        }
    }
    else {
        let g = p.charCodeAt(0) === 47, m = p.charCodeAt(g ? 1 : 0), y = I + Number.parseInt(p.substring(g ? 2 : 1));
        if (g)
            l.shift(), u.shift(), at(no(), !1);
        else {
            let D = Rb(e, l[0], y);
            l.unshift([]), at(D, !0);
            let x = { kind: 2, index: y, children: [], type: m === 35 ? 0 : 1 };
            u[0].push(x), u.unshift(x.children);
        }
    }
} e.data[o] = { create: a, update: c, ast: u[0], parentTNodeIndex: t }; }
function VD(e, t, n, o, r, i, s) { let a = Di(e, o, 1, null), c = a << Nt.SHIFT, l = no(); t === l && (l = null), l === null && (c |= Nt.APPEND_EAGERLY), s && (c |= Nt.COMMENT, MS(Pb)), r.push(c, i === null ? "" : i); let u = If(e, a, s ? 32 : 1, i === null ? "" : i, null); tE(n, u); let d = u.index; return at(u, !1), l !== null && t !== l && Ab(l, d), u; }
function vk(e, t, n, o, r, i, s, a) { let c = a.match(ha), u = VD(t, n, o, s, r, c ? null : a, !1).index; c && Wr(i, a, u, null, 0, null), e.push({ kind: 0, index: u }); }
function yk(e, t, n) { let r = _().index, i = []; if (e.firstCreatePass && e.data[t] === null) {
    for (let s = 0; s < n.length; s += 2) {
        let a = n[s], c = n[s + 1];
        if (c !== "") {
            if (uk.test(c))
                throw new Error(`ICU expressions are not supported in attributes. Message: "${c}".`);
            Wr(i, c, r, a, Ek(i), null);
        }
    }
    e.data[t] = i;
} }
function Wr(e, t, n, o, r, i) { let s = e.length, a = s + 1; e.push(null, null); let c = s + 2, l = t.split(ha), u = 0; for (let d = 0; d < l.length; d++) {
    let f = l[d];
    if (d & 1) {
        let p = r + parseInt(f, 10);
        e.push(-1 - p), u = u | HD(p);
    }
    else
        f !== "" && e.push(f);
} return e.push(n << 2 | (o ? 1 : 0)), o && e.push(o, i), e[s] = u, e[a] = e.length - c, u; }
function Ek(e) { let t = 0; for (let n = 0; n < e.length; n++) {
    let o = e[n];
    typeof o == "number" && o < 0 && t++;
} return t; }
function HD(e) { return 1 << Math.min(e, 31); }
function hm(e) { let t, n = "", o = 0, r = !1, i; for (; (t = fk.exec(e)) !== null;)
    r ? t[0] === `${Gr}/*${i}${Gr}` && (o = t.index, r = !1) : (n += e.substring(o, t.index + t[0].length), i = t[1], r = !0); return n += e.slice(o), n; }
function Ik(e, t) { if (oE(t))
    return hm(e); {
    let n = e.indexOf(`:${t}${Gr}`) + 2 + t.toString().length, o = e.search(new RegExp(`${Gr}\\/\\*\\d+:${t}${Gr}`));
    return hm(e.substring(n, o));
} }
function BD(e, t, n, o, r, i, s) { let a = 0, c = { type: i.type, currentCaseLViewIndex: Di(t, n, 1, null), anchorIdx: s, cases: [], create: [], remove: [], update: [] }; Mk(o, i, s), bb(t, s, c); let l = i.values, u = []; for (let d = 0; d < l.length; d++) {
    let f = l[d], p = [];
    for (let m = 0; m < f.length; m++) {
        let y = f[m];
        if (typeof y != "string") {
            let D = p.push(y) - 1;
            f[m] = `<!--\uFFFD${D}\uFFFD-->`;
        }
    }
    let g = [];
    u.push(g), a = Ck(g, t, c, n, o, r, i.cases[d], f.join(""), p) | a;
} a && Nk(o, a, s), e.push({ kind: 3, index: s, cases: u, currentCaseLViewIndex: c.currentCaseLViewIndex }); }
function Dk(e) { let t = [], n = [], o = 1, r = 0; e = e.replace(jD, function (s, a, c) { return c === "select" ? o = 0 : o = 1, r = parseInt(a.slice(1), 10), ""; }); let i = Dd(e); for (let s = 0; s < i.length;) {
    let a = i[s++].trim();
    o === 1 && (a = a.replace(/\s*(?:=)?(\w+)\s*/, "$1")), a.length && t.push(a);
    let c = Dd(i[s++]);
    t.length > n.length && n.push(c);
} return { type: o, mainBinding: r, cases: t, values: n }; }
function Dd(e) { if (!e)
    return []; let t = 0, n = [], o = [], r = /[{}]/g; r.lastIndex = 0; let i; for (; i = r.exec(e);) {
    let a = i.index;
    if (i[0] == "}") {
        if (n.pop(), n.length == 0) {
            let c = e.substring(t, a);
            jD.test(c) ? o.push(Dk(c)) : o.push(c), t = a + 1;
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
function Ck(e, t, n, o, r, i, s, a, c) { let l = [], u = [], d = []; n.cases.push(s), n.create.push(l), n.remove.push(u), n.update.push(d); let p = Zv(Ta()).getInertBodyElement(a), g = zu(p) || p; return g ? UD(e, t, n, o, r, l, u, d, g, i, c, 0) : 0; }
function UD(e, t, n, o, r, i, s, a, c, l, u, d) { let f = 0, p = c.firstChild; for (; p;) {
    let g = Di(t, o, 1, null);
    switch (p.nodeType) {
        case Node.ELEMENT_NODE:
            let m = p, y = m.tagName.toLowerCase();
            if (Gu.hasOwnProperty(y)) {
                Iu(i, bD, y, l, g), t.data[g] = y;
                let Ge = m.attributes;
                for (let ft = 0; ft < Ge.length; ft++) {
                    let sn = Ge.item(ft), yg = sn.name.toLowerCase();
                    !!sn.value.match(ha) ? Xv.hasOwnProperty(yg) && (Yd[yg] ? Wr(a, sn.value, g, sn.name, 0, xa) : Wr(a, sn.value, g, sn.name, 0, null)) : wk(i, g, sn);
                }
                let Pe = { kind: 1, index: g, children: [] };
                e.push(Pe), f = UD(Pe.children, t, n, o, r, i, s, a, p, g, u, d + 1) | f, mm(s, g, d);
            }
            break;
        case Node.TEXT_NODE:
            let D = p.textContent || "", x = D.match(ha);
            Iu(i, null, x ? "" : D, l, g), mm(s, g, d), x && (f = Wr(a, D, g, null, 0, null) | f), e.push({ kind: 0, index: g });
            break;
        case Node.COMMENT_NODE:
            let re = dk.exec(p.textContent || "");
            if (re) {
                let Ge = parseInt(re[1], 10), Pe = u[Ge];
                Iu(i, AD, "", l, g), BD(e, t, o, r, l, Pe, g), Tk(s, g, d);
            }
            break;
    }
    p = p.nextSibling;
} return f; }
function mm(e, t, n) { n === 0 && e.push(t); }
function Tk(e, t, n) { n === 0 && (e.push(~t), e.push(t)); }
function Mk(e, t, n) { e.push(HD(t.mainBinding), 2, -1 - t.mainBinding, n << 2 | 2); }
function Nk(e, t, n) { e.push(t, 1, n << 2 | 3); }
function Iu(e, t, n, o, r) { t !== null && e.push(t), e.push(n, r, xb(0, o, r)); }
function wk(e, t, n) { e.push(t << 1 | 1, n.name, n.value); }
var vm = 0, _k = /\[(�.+?�?)\]/, Sk = /\[(�.+?�?)\]|(�\/?\*\d+:\d+�)/g, bk = /({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g, Ak = /{([A-Z0-9_]+)}/g, Rk = /�I18N_EXP_(ICU(_\d+)?)�/g, Ok = /\/\*/, kk = /\d+\:(\d+)/;
function xk(e, t = {}) { let n = e; if (_k.test(e)) {
    let o = {}, r = [vm];
    n = n.replace(Sk, (i, s, a) => { let c = s || a, l = o[c] || []; if (l.length || (c.split("|").forEach(m => { let y = m.match(kk), D = y ? parseInt(y[1], 10) : vm, x = Ok.test(m); l.push([D, x, m]); }), o[c] = l), !l.length)
        throw new Error(`i18n postprocess: unmatched placeholder - ${c}`); let u = r[r.length - 1], d = 0; for (let m = 0; m < l.length; m++)
        if (l[m][0] === u) {
            d = m;
            break;
        } let [f, p, g] = l[d]; return p ? r.pop() : u !== f && r.push(f), l.splice(d, 1), g; });
} return Object.keys(t).length && (n = n.replace(bk, (o, r, i, s, a, c) => t.hasOwnProperty(i) ? `${r}${t[i]}${c}` : o), n = n.replace(Ak, (o, r) => t.hasOwnProperty(r) ? t[r] : o), n = n.replace(Rk, (o, r) => { if (t.hasOwnProperty(r)) {
    let i = t[r];
    if (!i.length)
        throw new Error(`i18n postprocess: unmatched ICU - ${o} with key: ${r}`);
    return i.shift();
} return o; })), n; }
function mp(e, t, n = -1) { let o = b(), r = h(), i = I + e, s = ve(o.consts, t), a = no(); if (o.firstCreatePass && mk(o, a === null ? 0 : a.index, r, i, s, n), o.type === 2) {
    let f = r[ne];
    f[w] |= 32;
}
else
    r[w] |= 32; let c = o.data[i], l = a === r[ue] ? null : a, u = Sy(o, l, r), d = a && a.type & 8 ? r[a.index] : null; Gb(r, i, a, n), ak(r, c.create, u, d), ql(!0); }
function vp() { ql(!1); }
function $D(e, t, n) { mp(e, t, n), vp(); }
function qD(e, t) { let n = b(), o = ve(n.consts, t); yk(n, e + I, o); }
function yp(e) { let t = h(); return rk(Q(t, fe(), e)), yp; }
function GD(e) { ik(b(), h(), e + I); }
function WD(e, t = {}) { return xk(e, t); }
function Ep(e, t, n) { let o = h(), r = b(), i = _(); return Cp(r, o, o[T], i, e, t, n), Ep; }
function Ip(e, t) { let n = _(), o = h(), r = b(), i = hs(r.data), s = Vy(i, n, o); return Cp(r, o, s, n, e, t), Ip; }
function Dp(e, t, n) { let o = h(), r = b(), i = _(); return (i.type & 3 || n) && sa(i, r, o, n, o[T], e, t, _t(i, o, t)), Dp; }
function Cp(e, t, n, o, r, i, s) { let a = !0, c = null; if ((o.type & 3 || s) && (c ??= _t(o, t, i), sa(o, e, t, s, n, r, i, c) && (a = !1)), a) {
    let l = o.outputs?.[r], u = o.hostDirectiveOutputs?.[r];
    if (u && u.length)
        for (let d = 0; d < u.length; d += 2) {
            let f = u[d], p = u[d + 1];
            c ??= _t(o, t, i), _o(o, t, f, p, r, c);
        }
    if (l && l.length)
        for (let d of l)
            c ??= _t(o, t, i), _o(o, t, d, r, r, c);
} }
function zD(e = 1) { return ah(e); }
function Pk(e, t) { let n = null, o = hS(e); for (let r = 0; r < t.length; r++) {
    let i = t[r];
    if (i === "*") {
        n = r;
        continue;
    }
    if (o === null ? my(e, i, !0) : yS(o, i))
        return r;
} return n; }
function QD(e) { let t = h()[ne][ue]; if (!t.projection) {
    let n = e ? e.length : 1, o = t.projection = Cr(n, null), r = o.slice(), i = t.child;
    for (; i !== null;) {
        if (i.type !== 128) {
            let s = e ? Pk(i, e) : 0;
            s !== null && (r[s] ? r[s].projectionNext = i : o[s] = i, r[s] = i);
        }
        i = i.next;
    }
} }
function ZD(e, t = 0, n, o, r, i) { let s = h(), a = b(), c = o ? e + 1 : null; c !== null && xn(s, a, c, o, r, i, null, n); let l = Hn(a, I + e, 16, null, n || null); l.projection === null && (l.projection = t), Hl(); let d = !s[de] || br(); s[ne][ue].projection[l.projection] === null && c !== null ? Lk(s, a, c) : d && !Go(l) && FS(a, s, l); }
function Lk(e, t, n) { let o = I + n, r = t.data[o], i = e[o], s = ei(i, r.tView.ssrId), a = Yo(e, r, void 0, { dehydratedView: s }); Ko(i, a, 0, Rn(r, s)); }
function Tp(e, t, n, o) { return qE(e, t, n, o), Tp; }
function Mp(e, t, n) { return $E(e, t, n), Mp; }
function YD(e) { let t = h(), n = b(), o = ms(); Ar(o + 1); let r = Af(n, o); if (e.dirty && Yg(t) === ((r.metadata.flags & 2) === 2)) {
    if (r.matches === null)
        e.reset([]);
    else {
        let i = WE(t, o);
        e.reset(i, nv), e.notifyOnChanges();
    }
    return !0;
} return !1; }
function KD() { return bf(h(), ms()); }
function Np(e, t, n, o, r) { return zE(t, qE(e, n, o, r)), Np; }
function wp(e, t, n, o) { return zE(e, $E(t, n, o)), wp; }
function JD(e = 1) { Ar(ms() + e); }
function XD(e) { let t = Bl(); return Qt(t, I + e); }
function As(e, t) { return e << 17 | t << 2; }
function Ln(e) { return e >> 17 & 32767; }
function Fk(e) { return (e & 2) == 2; }
function jk(e, t) { return e & 131071 | t << 17; }
function Cd(e) { return e | 2; }
function xo(e) { return (e & 131068) >> 2; }
function Du(e, t) { return e & -131069 | t << 2; }
function Vk(e) { return (e & 1) === 1; }
function Td(e) { return e | 1; }
function Hk(e, t, n, o, r, i) { let s = i ? t.classBindings : t.styleBindings, a = Ln(s), c = xo(s); e[o] = n; let l = !1, u; if (Array.isArray(n)) {
    let d = n;
    u = d[1], (u === null || Jn(d, u) > 0) && (l = !0);
}
else
    u = n; if (r)
    if (c !== 0) {
        let f = Ln(e[a + 1]);
        e[o + 1] = As(f, a), f !== 0 && (e[f + 1] = Du(e[f + 1], o)), e[a + 1] = jk(e[a + 1], o);
    }
    else
        e[o + 1] = As(a, 0), a !== 0 && (e[a + 1] = Du(e[a + 1], o)), a = o;
else
    e[o + 1] = As(c, 0), a === 0 ? a = o : e[c + 1] = Du(e[c + 1], o), c = o; l && (e[o + 1] = Cd(e[o + 1])), ym(e, u, o, !0), ym(e, u, o, !1), Bk(t, u, e, o, i), s = As(a, c), i ? t.classBindings = s : t.styleBindings = s; }
function Bk(e, t, n, o, r) { let i = r ? e.residualClasses : e.residualStyles; i != null && typeof t == "string" && Jn(i, t) >= 0 && (n[o + 1] = Td(n[o + 1])); }
function ym(e, t, n, o) { let r = e[n + 1], i = t === null, s = o ? Ln(r) : xo(r), a = !1; for (; s !== 0 && (a === !1 || i);) {
    let c = e[s], l = e[s + 1];
    Uk(c, t) && (a = !0, e[s + 1] = o ? Td(l) : Cd(l)), s = o ? Ln(l) : xo(l);
} a && (e[n + 1] = o ? Cd(r) : Td(r)); }
function Uk(e, t) { return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t ? !0 : Array.isArray(e) && typeof t == "string" ? Jn(e, t) >= 0 : !1; }
var ce = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function eC(e) { return e.substring(ce.key, ce.keyEnd); }
function $k(e) { return e.substring(ce.value, ce.valueEnd); }
function qk(e) { return oC(e), tC(e, Po(e, 0, ce.textEnd)); }
function tC(e, t) { let n = ce.textEnd; return n === t ? -1 : (t = ce.keyEnd = Wk(e, ce.key = t, n), Po(e, t, n)); }
function Gk(e) { return oC(e), nC(e, Po(e, 0, ce.textEnd)); }
function nC(e, t) { let n = ce.textEnd, o = ce.key = Po(e, t, n); return n === o ? -1 : (o = ce.keyEnd = zk(e, o, n), o = Em(e, o, n, 58), o = ce.value = Po(e, o, n), o = ce.valueEnd = Qk(e, o, n), Em(e, o, n, 59)); }
function oC(e) { ce.key = 0, ce.keyEnd = 0, ce.value = 0, ce.valueEnd = 0, ce.textEnd = e.length; }
function Po(e, t, n) { for (; t < n && e.charCodeAt(t) <= 32;)
    t++; return t; }
function Wk(e, t, n) { for (; t < n && e.charCodeAt(t) > 32;)
    t++; return t; }
function zk(e, t, n) { let o; for (; t < n && ((o = e.charCodeAt(t)) === 45 || o === 95 || (o & -33) >= 65 && (o & -33) <= 90 || o >= 48 && o <= 57);)
    t++; return t; }
function Em(e, t, n, o) { return t = Po(e, t, n), t < n && t++, t; }
function Qk(e, t, n) { let o = -1, r = -1, i = -1, s = t, a = s; for (; s < n;) {
    let c = e.charCodeAt(s++);
    if (c === 59)
        return a;
    c === 34 || c === 39 ? a = s = Im(e, c, s, n) : t === s - 4 && i === 85 && r === 82 && o === 76 && c === 40 ? a = s = Im(e, 41, s, n) : c > 32 && (a = s), i = r, r = o, o = c & -33;
} return a; }
function Im(e, t, n, o) { let r = -1, i = n; for (; i < o;) {
    let s = e.charCodeAt(i++);
    if (s == t && r !== 92)
        return i;
    s == 92 && r === 92 ? r = 0 : r = s;
} throw new Error; }
function _p(e, t, n) { return sC(e, t, n, !1), _p; }
function Sp(e, t) { return sC(e, t, null, !0), Sp; }
function rC(e) { aC(uC, Zk, e, !1); }
function Zk(e, t) { for (let n = Gk(t); n >= 0; n = nC(t, n))
    uC(e, eC(t), $k(t)); }
function iC(e) { aC(nx, Yk, e, !0); }
function Yk(e, t) { for (let n = qk(t); n >= 0; n = tC(t, n))
    Tr(e, eC(t), !0); }
function sC(e, t, n, o) { let r = h(), i = b(), s = ct(2); if (i.firstUpdatePass && lC(i, e, s, o), t !== B && Q(r, s, t)) {
    let a = i.data[pe()];
    dC(i, a, r, r[T], e, r[s + 1] = rx(t, n), o, s);
} }
function aC(e, t, n, o) { let r = b(), i = ct(2); r.firstUpdatePass && lC(r, null, i, o); let s = h(); if (n !== B && Q(s, i, n)) {
    let a = r.data[pe()];
    if (fC(a, o) && !cC(r, i)) {
        let c = o ? a.classesWithoutHost : a.stylesWithoutHost;
        c !== null && (n = Ki(c, n || "")), Id(r, a, s, n, o);
    }
    else
        ox(r, a, s, s[T], s[i + 1], s[i + 1] = tx(e, t, n), o, i);
} }
function cC(e, t) { return t >= e.expandoStartIndex; }
function lC(e, t, n, o) { let r = e.data; if (r[n + 1] === null) {
    let i = r[pe()], s = cC(e, n);
    fC(i, o) && t === null && !s && (t = !1), t = Kk(r, i, t, o), Hk(r, i, t, n, s, o);
} }
function Kk(e, t, n, o) { let r = hs(e), i = o ? t.residualClasses : t.residualStyles; if (r === null)
    (o ? t.classBindings : t.styleBindings) === 0 && (n = Cu(null, e, t, n, o), n = ai(n, t.attrs, o), i = null);
else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== r)
        if (n = Cu(r, e, t, n, o), i === null) {
            let c = Jk(e, t, o);
            c !== void 0 && Array.isArray(c) && (c = Cu(null, e, t, c[1], o), c = ai(c, t.attrs, o), Xk(e, t, o, c));
        }
        else
            i = ex(e, t, o);
} return i !== void 0 && (o ? t.residualClasses = i : t.residualStyles = i), n; }
function Jk(e, t, n) { let o = n ? t.classBindings : t.styleBindings; if (xo(o) !== 0)
    return e[Ln(o)]; }
function Xk(e, t, n, o) { let r = n ? t.classBindings : t.styleBindings; e[Ln(r)] = o; }
function ex(e, t, n) { let o, r = t.directiveEnd; for (let i = 1 + t.directiveStylingLast; i < r; i++) {
    let s = e[i].hostAttrs;
    o = ai(o, s, n);
} return ai(o, t.attrs, n); }
function Cu(e, t, n, o, r) { let i = null, s = n.directiveEnd, a = n.directiveStylingLast; for (a === -1 ? a = n.directiveStart : a++; a < s && (i = t[a], o = ai(o, i.hostAttrs, r), i !== e);)
    a++; return e !== null && (n.directiveStylingLast = a), o; }
function ai(e, t, n) { let o = n ? 1 : 2, r = -1; if (t !== null)
    for (let i = 0; i < t.length; i++) {
        let s = t[i];
        typeof s == "number" ? r = s : r === o && (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]), Tr(e, s, n ? !0 : t[++i]));
    } return e === void 0 ? null : e; }
function tx(e, t, n) { if (n == null || n === "")
    return j; let o = [], r = xt(n); if (Array.isArray(r))
    for (let i = 0; i < r.length; i++)
        e(o, r[i], !0);
else if (typeof r == "object")
    for (let i in r)
        r.hasOwnProperty(i) && e(o, i, r[i]);
else
    typeof r == "string" && t(o, r); return o; }
function uC(e, t, n) { Tr(e, t, xt(n)); }
function nx(e, t, n) { let o = String(t); o !== "" && !o.includes(" ") && Tr(e, o, n); }
function ox(e, t, n, o, r, i, s, a) { r === B && (r = j); let c = 0, l = 0, u = 0 < r.length ? r[0] : null, d = 0 < i.length ? i[0] : null; for (; u !== null || d !== null;) {
    let f = c < r.length ? r[c + 1] : void 0, p = l < i.length ? i[l + 1] : void 0, g = null, m;
    u === d ? (c += 2, l += 2, f !== p && (g = d, m = p)) : d === null || u !== null && u < d ? (c += 2, g = u) : (l += 2, g = d, m = p), g !== null && dC(e, t, n, o, g, m, s, a), u = c < r.length ? r[c] : null, d = l < i.length ? i[l] : null;
} }
function dC(e, t, n, o, r, i, s, a) { if (!(t.type & 3))
    return; let c = e.data, l = c[a + 1], u = Vk(l) ? Dm(c, t, n, r, xo(l), s) : void 0; if (!ma(u)) {
    ma(i) || Fk(l) && (i = Dm(c, null, n, r, a, s));
    let d = In(pe(), n);
    VS(o, s, d, r, i);
} }
function Dm(e, t, n, o, r, i) { let s = t === null, a; for (; r > 0;) {
    let c = e[r], l = Array.isArray(c), u = l ? c[1] : c, d = u === null, f = n[r + 1];
    f === B && (f = d ? j : void 0);
    let p = d ? rs(f, o) : u === o ? f : void 0;
    if (l && !ma(p) && (p = rs(c, o)), ma(p) && (a = p, s))
        return a;
    let g = e[r + 1];
    r = s ? Ln(g) : xo(g);
} if (t !== null) {
    let c = i ? t.residualClasses : t.residualStyles;
    c != null && (a = rs(c, o));
} return a; }
function ma(e) { return e !== void 0; }
function rx(e, t) { return e == null || e === "" || (typeof t == "string" ? e = e + t : typeof e == "object" && (e = vt(xt(e)))), e; }
function fC(e, t) { return (e.flags & (t ? 8 : 16)) !== 0; }
function pC(e, t = "") { let n = h(), o = b(), r = e + I, i = o.firstCreatePass ? Hn(o, r, 1, t, null) : o.data[r], s = gC(o, n, i, t, e); n[r] = s, Rr() && gf(o, n, s, i), at(i, !1); }
var gC = (e, t, n, o, r) => (et(!0), Kd(t[T], o));
function ix(e, t, n, o, r) { let i = !ka(t, n); if (et(i), i)
    return Kd(t[T], o); let s = t[de]; return Mi(s, e, t, n); }
function hC() { gC = ix; }
function mC(e, t) { let n = !1, o = Xe(); for (let i = 1; i < t.length; i += 2)
    n = Q(e, o++, t[i]) || n; if ($l(o), !n)
    return B; let r = t[0]; for (let i = 1; i < t.length; i += 2)
    r += R(t[i]) + (i + 1 !== t.length ? t[i + 1] : ""); return r; }
function vC(e, t, n, o = "") { return Q(e, fe(), n) ? t + R(n) + o : B; }
function yC(e, t, n, o, r, i = "") { let s = Xe(), a = On(e, s, n, r); return ct(2), a ? t + R(n) + o + R(r) + i : B; }
function EC(e, t, n, o, r, i, s, a = "") { let c = Xe(), l = sc(e, c, n, r, s); return ct(3), l ? t + R(n) + o + R(r) + i + R(s) + a : B; }
function IC(e, t, n, o, r, i, s, a, c, l = "") { let u = Xe(), d = $e(e, u, n, r, s, c); return ct(4), d ? t + R(n) + o + R(r) + i + R(s) + a + R(c) + l : B; }
function DC(e, t, n, o, r, i, s, a, c, l, u, d = "") { let f = Xe(), p = $e(e, f, n, r, s, c); return p = Q(e, f + 4, u) || p, ct(5), p ? t + R(n) + o + R(r) + i + R(s) + a + R(c) + l + R(u) + d : B; }
function CC(e, t, n, o, r, i, s, a, c, l, u, d, f, p = "") { let g = Xe(), m = $e(e, g, n, r, s, c); return m = On(e, g + 4, u, f) || m, ct(6), m ? t + R(n) + o + R(r) + i + R(s) + a + R(c) + l + R(u) + d + R(f) + p : B; }
function TC(e, t, n, o, r, i, s, a, c, l, u, d, f, p, g, m = "") { let y = Xe(), D = $e(e, y, n, r, s, c); return D = sc(e, y + 4, u, f, g) || D, ct(7), D ? t + R(n) + o + R(r) + i + R(s) + a + R(c) + l + R(u) + d + R(f) + p + R(g) + m : B; }
function MC(e, t, n, o, r, i, s, a, c, l, u, d, f, p, g, m, y, D = "") { let x = Xe(), re = $e(e, x, n, r, s, c); return re = $e(e, x + 4, u, f, g, y) || re, ct(8), re ? t + R(n) + o + R(r) + i + R(s) + a + R(c) + l + R(u) + d + R(f) + p + R(g) + m + R(y) + D : B; }
function bp(e) { return Nc("", e), bp; }
function Nc(e, t, n) { let o = h(), r = vC(o, e, t, n); return r !== B && jt(o, pe(), r), Nc; }
function Ap(e, t, n, o, r) { let i = h(), s = yC(i, e, t, n, o, r); return s !== B && jt(i, pe(), s), Ap; }
function Rp(e, t, n, o, r, i, s) { let a = h(), c = EC(a, e, t, n, o, r, i, s); return c !== B && jt(a, pe(), c), Rp; }
function Op(e, t, n, o, r, i, s, a, c) { let l = h(), u = IC(l, e, t, n, o, r, i, s, a, c); return u !== B && jt(l, pe(), u), Op; }
function kp(e, t, n, o, r, i, s, a, c, l, u) { let d = h(), f = DC(d, e, t, n, o, r, i, s, a, c, l, u); return f !== B && jt(d, pe(), f), kp; }
function xp(e, t, n, o, r, i, s, a, c, l, u, d, f) { let p = h(), g = CC(p, e, t, n, o, r, i, s, a, c, l, u, d, f); return g !== B && jt(p, pe(), g), xp; }
function Pp(e, t, n, o, r, i, s, a, c, l, u, d, f, p, g) { let m = h(), y = TC(m, e, t, n, o, r, i, s, a, c, l, u, d, f, p, g); return y !== B && jt(m, pe(), y), Pp; }
function Lp(e, t, n, o, r, i, s, a, c, l, u, d, f, p, g, m, y) { let D = h(), x = MC(D, e, t, n, o, r, i, s, a, c, l, u, d, f, p, g, m, y); return x !== B && jt(D, pe(), x), Lp; }
function Fp(e) { let t = h(), n = mC(t, e); return n !== B && jt(t, pe(), n), Fp; }
function jt(e, t, n) { let o = In(t, e); ny(e[T], o, n); }
function jp(e, t, n) { Gf(t) && (t = t()); let o = h(), r = fe(); if (Q(o, r, t)) {
    let i = b(), s = Me();
    Ga(s, o, e, t, o[T], n);
} return jp; }
function NC(e, t) { let n = Gf(e); return n && e.set(t), n; }
function Vp(e, t) { let n = h(), o = b(), r = _(); return Cp(o, n, n[T], r, e, t), Vp; }
var wC = {};
function Hp(e) { ee("NgLet"); let t = b(), n = h(), o = e + I, r = Hn(t, o, 128, null, null); return at(r, !1), _r(t, n, o, wC), Hp; }
function _C(e) { let t = b(), n = h(), o = pe(); return _r(t, n, o, e), e; }
function SC(e) { let t = Bl(), n = Qt(t, I + e); if (n === wC)
    throw new C(314, !1); return n; }
function bC(e, t) { let n = b(), o = h(), r = o[T], i = "data-ng-source-location"; for (let [s, a, c, l] of t) {
    let u = Ct(n, s + I), d = In(s + I, o);
    if (!d.hasAttribute(i)) {
        let f = `${e}@o:${a},l:${c},c:${l}`;
        r.setAttribute(d, i, f);
    }
} }
function AC(e) { return Q(h(), fe(), e) ? R(e) : B; }
function RC(e, t, n = "") { return vC(h(), e, t, n); }
function OC(e, t, n, o, r = "") { return yC(h(), e, t, n, o, r); }
function kC(e, t, n, o, r, i, s = "") { return EC(h(), e, t, n, o, r, i, s); }
function xC(e, t, n, o, r, i, s, a, c = "") { return IC(h(), e, t, n, o, r, i, s, a, c); }
function PC(e, t, n, o, r, i, s, a, c, l, u = "") { return DC(h(), e, t, n, o, r, i, s, a, c, l, u); }
function LC(e, t, n, o, r, i, s, a, c, l, u, d, f = "") { return CC(h(), e, t, n, o, r, i, s, a, c, l, u, d, f); }
function FC(e, t, n, o, r, i, s, a, c, l, u, d, f, p, g = "") { return TC(h(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, g); }
function jC(e, t, n, o, r, i, s, a, c, l, u, d, f, p, g, m, y = "") { return MC(h(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, g, m, y); }
function VC(e) { return mC(h(), e); }
function Cm(e, t, n) { let o = b(); o.firstCreatePass && HC(t, o.data, o.blueprint, Ve(e), n); }
function HC(e, t, n, o, r) { if (e = P(e), Array.isArray(e))
    for (let i = 0; i < e.length; i++)
        HC(e[i], t, n, o, r);
else {
    let i = b(), s = h(), a = _(), c = dn(e) ? e : P(e.provide), l = El(e), u = a.providerIndexes & 1048575, d = a.directiveStart, f = a.providerIndexes >> 20;
    if (dn(e) || !e.multi) {
        let p = new _n(l, r, Xo, null), g = Mu(c, t, r ? u : u + f, d);
        g === -1 ? (Au(zs(a, s), i, c), Tu(i, e, t.length), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(p), s.push(p)) : (n[g] = p, s[g] = p);
    }
    else {
        let p = Mu(c, t, u + f, d), g = Mu(c, t, u, u + f), m = p >= 0 && n[p], y = g >= 0 && n[g];
        if (r && !y || !r && !m) {
            Au(zs(a, s), i, c);
            let D = cx(r ? ax : sx, n.length, r, o, l, e);
            !r && y && (n[g].providerFactory = D), Tu(i, e, t.length, 0), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(D), s.push(D);
        }
        else {
            let D = BC(n[r ? g : p], l, !r && o);
            Tu(i, e, p > -1 ? p : g, D);
        }
        !r && o && y && n[g].componentProviders++;
    }
} }
function Tu(e, t, n, o) { let r = dn(t), i = zg(t); if (r || i) {
    let c = (i ? P(t.useClass) : t).prototype.ngOnDestroy;
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
function BC(e, t, n) { return n && e.componentProviders++, e.multi.push(t) - 1; }
function Mu(e, t, n, o) { for (let r = n; r < o; r++)
    if (t[r] === e)
        return r; return -1; }
function sx(e, t, n, o, r) { return Md(this.multi, []); }
function ax(e, t, n, o, r) { let i = this.multi, s; if (this.providerFactory) {
    let a = this.providerFactory.componentProviders, c = Qr(o, o[v], this.providerFactory.index, r);
    s = c.slice(0, a), Md(i, s);
    for (let l = a; l < c.length; l++)
        s.push(c[l]);
}
else
    s = [], Md(i, s); return s; }
function Md(e, t) { for (let n = 0; n < e.length; n++) {
    let o = e[n];
    t.push(o());
} return t; }
function cx(e, t, n, o, r, i) { let s = new _n(e, n, Xo, null); return s.multi = [], s.index = t, s.componentProviders = 0, BC(s, r, o && !n), s; }
function UC(e, t) { return n => { n.providersResolver = (o, r) => Cm(o, r ? r(e) : e, !1), t && (n.viewProvidersResolver = (o, r) => Cm(o, r ? r(t) : t, !0)); }; }
function $C(e) { return t => { e.length < 1 || (t.getExternalStyles = n => e.map(r => r + "?ngcomp" + (n ? "=" + encodeURIComponent(n) : "") + "&e=" + t.encapsulation)); }; }
function qC(e, t, n) { let o = e.\u0275cmp; o.directiveDefs = ua(t, nI), o.pipeDefs = ua(n, Qe); }
function GC(e, t) { return ut(() => { let n = Xi(e); n.declarations = Rs(t.declarations || j), n.imports = Rs(t.imports || j), n.exports = Rs(t.exports || j), t.bootstrap && (n.bootstrap = Rs(t.bootstrap)), wo.registerNgModule(e, t); }); }
function Rs(e) { if (typeof e == "function")
    return e; let t = Ze(e); return t.some(hr) ? () => t.map(P).map(Tm) : t.map(Tm); }
function Tm(e) { return Mf(e) ? e.ngModule : e; }
function WC(e, t) { let n = Ie() + e, o = h(); return o[n] === B ? dt(o, n, t()) : wi(o, n); }
function zC(e, t, n) { return nT(h(), Ie(), e, t, n); }
function QC(e, t, n, o) { return oT(h(), Ie(), e, t, n, o); }
function ZC(e, t, n, o, r) { return rT(h(), Ie(), e, t, n, o, r); }
function YC(e, t, n, o, r, i, s) { return iT(h(), Ie(), e, t, n, o, r, i); }
function KC(e, t, n, o, r, i, s) { let a = Ie() + e, c = h(), l = $e(c, a, n, o, r, i); return Q(c, a + 4, s) || l ? dt(c, a + 5, t(n, o, r, i, s)) : wi(c, a + 5); }
function JC(e, t, n, o, r, i, s, a) { let c = Ie() + e, l = h(), u = $e(l, c, n, o, r, i); return On(l, c + 4, s, a) || u ? dt(l, c + 6, t(n, o, r, i, s, a)) : wi(l, c + 6); }
function XC(e, t, n, o, r, i, s, a, c) { let l = Ie() + e, u = h(), d = $e(u, l, n, o, r, i); return sc(u, l + 4, s, a, c) || d ? dt(u, l + 7, t(n, o, r, i, s, a, c)) : wi(u, l + 7); }
function eT(e, t, n, o, r, i, s, a, c, l) { let u = Ie() + e, d = h(), f = $e(d, u, n, o, r, i); return $e(d, u + 4, s, a, c, l) || f ? dt(d, u + 8, t(n, o, r, i, s, a, c, l)) : wi(d, u + 8); }
function tT(e, t, n) { return sT(h(), Ie(), e, t, n); }
function ki(e, t) { let n = e[t]; return n === B ? void 0 : n; }
function nT(e, t, n, o, r, i) { let s = t + n; return Q(e, s, r) ? dt(e, s + 1, i ? o.call(i, r) : o(r)) : ki(e, s + 1); }
function oT(e, t, n, o, r, i, s) { let a = t + n; return On(e, a, r, i) ? dt(e, a + 2, s ? o.call(s, r, i) : o(r, i)) : ki(e, a + 2); }
function rT(e, t, n, o, r, i, s, a) { let c = t + n; return sc(e, c, r, i, s) ? dt(e, c + 3, a ? o.call(a, r, i, s) : o(r, i, s)) : ki(e, c + 3); }
function iT(e, t, n, o, r, i, s, a, c) { let l = t + n; return $e(e, l, r, i, s, a) ? dt(e, l + 4, c ? o.call(c, r, i, s, a) : o(r, i, s, a)) : ki(e, l + 4); }
function sT(e, t, n, o, r, i) { let s = t + n, a = !1; for (let c = 0; c < r.length; c++)
    Q(e, s++, r[c]) && (a = !0); return a ? dt(e, s, o.apply(i, r)) : ki(e, s); }
function aT(e, t) { let n = b(), o, r = e + I; n.firstCreatePass ? (o = lx(t, n.pipeRegistry), n.data[r] = o, o.onDestroy && (n.destroyHooks ??= []).push(r, o.onDestroy)) : o = n.data[r]; let i = o.factory || (o.factory = qt(o.type, !0)), s, a = Ce(Xo); try {
    let c = Ws(!1), l = i();
    return Ws(c), _r(n, h(), r, l), l;
}
finally {
    Ce(a);
} }
function lx(e, t) { if (t)
    for (let n = t.length - 1; n >= 0; n--) {
        let o = t[n];
        if (e === o.name)
            return o;
    } }
function cT(e, t, n) { let o = e + I, r = h(), i = Qt(r, o); return xi(r, o) ? nT(r, Ie(), t, i.transform, n, i) : i.transform(n); }
function lT(e, t, n, o) { let r = e + I, i = h(), s = Qt(i, r); return xi(i, r) ? oT(i, Ie(), t, s.transform, n, o, s) : s.transform(n, o); }
function uT(e, t, n, o, r) { let i = e + I, s = h(), a = Qt(s, i); return xi(s, i) ? rT(s, Ie(), t, a.transform, n, o, r, a) : a.transform(n, o, r); }
function dT(e, t, n, o, r, i) { let s = e + I, a = h(), c = Qt(a, s); return xi(a, s) ? iT(a, Ie(), t, c.transform, n, o, r, i, c) : c.transform(n, o, r, i); }
function fT(e, t, n) { let o = e + I, r = h(), i = Qt(r, o); return xi(r, o) ? sT(r, Ie(), t, i.transform, n, i) : i.transform.apply(i, n); }
function xi(e, t) { return e[v].data[t].pure; }
function pT(e, t) { return Ja(e, t); }
function gT(e, t) { return () => { try {
    return wo.getComponentDependencies(e, t).dependencies;
}
catch (n) {
    throw console.error(`Computing dependencies in local compilation mode for the component "${e.name}" failed with the exception:`, n), n;
} }; }
function hT(e, t) { let n = z(e); n !== null && (n.debugInfo = t); }
function mT(e, t, n) { let o = `./@ng/component?c=${e}&t=${encodeURIComponent(t)}`; return new URL(o, n).href; }
function vT(e, t, n, o, r = null, i = null) { let s = z(e); t.apply(null, [e, n, ...o]); let { newDef: a, oldDef: c } = ux(s, z(e)); if (e[pn] = a, c.tView) {
    let l = Ow().values();
    for (let u of l)
        it(u) && u[Z] === null && Bs(r, i, a, c, u);
} }
function ux(e, t) { let n = H({}, e); return { newDef: Object.assign(e, t, { directiveDefs: n.directiveDefs, pipeDefs: n.pipeDefs, setInput: n.setInput, type: n.type }), oldDef: n }; }
function Bs(e, t, n, o, r) { let i = r[v]; if (i === o.tView) {
    fx(e, t, n, o, r);
    return;
} for (let s = I; s < i.bindingStartIndex; s++) {
    let a = r[s];
    if (X(a)) {
        oe(a[q]) && Bs(e, t, n, o, a[q]);
        for (let c = W; c < a.length; c++)
            Bs(e, t, n, o, a[c]);
    }
    else
        oe(a) && Bs(e, t, n, o, a);
} }
function dx(e, t) { e.componentReplaced?.(t.id); }
function fx(e, t, n, o, r) { let i = r[$], s = r[q], a = r[Z], c = r[ue], l = r[L].get(G, null), u = () => { if (o.encapsulation === Ue.ShadowDom || o.encapsulation === Ue.ExperimentalIsolatedShadowDom) {
    let g = s.cloneNode(!1);
    s.replaceWith(g), s = g;
} let d = vy(n), f = La(a, d, i, rf(n), s, c, null, null, null, null, null); px(a, r, f, c.index), Ci(r[v], r); let p = r[Ke].rendererFactory; dx(p, o), f[T] = p.createRenderer(s, n), wy(r[v], r), gx(c), Ya(d, f, i), Gy(d, f, d.template, i); }; l === null ? Mm(e, t, u) : l.run(() => Mm(e, t, u)); }
function Mm(e, t, n) {
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
function px(e, t, n, o) { for (let r = I; r < e[v].bindingStartIndex; r++) {
    let i = e[r];
    if ((oe(i) || X(i)) && i[me] === t) {
        i[me] = n;
        break;
    }
} e[zt] === t && (e[zt] = n), e[Mr] === t && (e[Mr] = n), n[me] = t[me], t[me] = null, e[o] = n; }
function gx(e) { if (e.projection !== null) {
    for (let t of e.projection)
        ya(t) && (t.projectionNext = null, t.flags &= -3);
    e.projection = null;
} }
var De = { \u0275\u0275animateEnter: Hr, \u0275\u0275animateEnterListener: Br, \u0275\u0275animateLeave: Ur, \u0275\u0275animateLeaveListener: fa, \u0275\u0275attribute: Xf, \u0275\u0275defineComponent: tI, \u0275\u0275defineDirective: oI, \u0275\u0275defineInjectable: U, \u0275\u0275defineInjector: mr, \u0275\u0275defineNgModule: jf, \u0275\u0275definePipe: rI, \u0275\u0275directiveInject: Xo, \u0275\u0275getInheritedFactory: Jm, \u0275\u0275inject: he, \u0275\u0275injectAttribute: Ea, \u0275\u0275invalidFactory: NE, \u0275\u0275invalidFactoryDep: ns, \u0275\u0275templateRefExtractor: pT, \u0275\u0275resetView: Fl, \u0275\u0275HostDirectivesFeature: aI, \u0275\u0275NgOnChangesFeature: Fm, \u0275\u0275ProvidersFeature: UC, \u0275\u0275InheritDefinitionFeature: Vf, \u0275\u0275ExternalStylesFeature: $C, \u0275\u0275nextContext: zD, \u0275\u0275namespaceHTML: Zl, \u0275\u0275namespaceMathML: Ql, \u0275\u0275namespaceSVG: zl, \u0275\u0275enableBindings: kl, \u0275\u0275disableBindings: xl, \u0275\u0275elementStart: Ec, \u0275\u0275elementEnd: Ic, \u0275\u0275element: sp, \u0275\u0275elementContainerStart: Tc, \u0275\u0275elementContainerEnd: Ri, \u0275\u0275domElement: ap, \u0275\u0275domElementStart: Dc, \u0275\u0275domElementEnd: Cc, \u0275\u0275domElementContainer: dp, \u0275\u0275domElementContainerStart: Mc, \u0275\u0275domElementContainerEnd: up, \u0275\u0275domTemplate: Bf, \u0275\u0275domListener: Dp, \u0275\u0275elementContainer: lp, \u0275\u0275pureFunction0: WC, \u0275\u0275pureFunction1: zC, \u0275\u0275pureFunction2: QC, \u0275\u0275pureFunction3: ZC, \u0275\u0275pureFunction4: YC, \u0275\u0275pureFunction5: KC, \u0275\u0275pureFunction6: JC, \u0275\u0275pureFunction7: XC, \u0275\u0275pureFunction8: eT, \u0275\u0275pureFunctionV: tT, \u0275\u0275getCurrentView: _D, \u0275\u0275restoreView: Ll, \u0275\u0275listener: Ep, \u0275\u0275projection: ZD, \u0275\u0275syntheticHostProperty: gp, \u0275\u0275syntheticHostListener: Ip, \u0275\u0275pipeBind1: cT, \u0275\u0275pipeBind2: lT, \u0275\u0275pipeBind3: uT, \u0275\u0275pipeBind4: dT, \u0275\u0275pipeBindV: fT, \u0275\u0275projectionDef: QD, \u0275\u0275domProperty: pp, \u0275\u0275ariaProperty: Jf, \u0275\u0275property: ip, \u0275\u0275control: pD, \u0275\u0275controlCreate: fD, \u0275\u0275pipe: aT, \u0275\u0275queryRefresh: YD, \u0275\u0275queryAdvance: JD, \u0275\u0275viewQuery: Mp, \u0275\u0275viewQuerySignal: wp, \u0275\u0275loadQuery: KD, \u0275\u0275contentQuery: Tp, \u0275\u0275contentQuerySignal: Np, \u0275\u0275reference: XD, \u0275\u0275classMap: iC, \u0275\u0275styleMap: rC, \u0275\u0275styleProp: _p, \u0275\u0275classProp: Sp, \u0275\u0275advance: yy, \u0275\u0275template: Hf, \u0275\u0275conditional: ID, \u0275\u0275conditionalCreate: ED, \u0275\u0275conditionalBranchCreate: yc, \u0275\u0275defer: FI, \u0275\u0275deferWhen: jI, \u0275\u0275deferOnIdle: UI, \u0275\u0275deferOnImmediate: GI, \u0275\u0275deferOnTimer: QI, \u0275\u0275deferOnHover: KI, \u0275\u0275deferOnInteraction: eD, \u0275\u0275deferOnViewport: oD, \u0275\u0275deferPrefetchWhen: VI, \u0275\u0275deferPrefetchOnIdle: $I, \u0275\u0275deferPrefetchOnImmediate: WI, \u0275\u0275deferPrefetchOnTimer: ZI, \u0275\u0275deferPrefetchOnHover: JI, \u0275\u0275deferPrefetchOnInteraction: tD, \u0275\u0275deferPrefetchOnViewport: rD, \u0275\u0275deferHydrateWhen: HI, \u0275\u0275deferHydrateNever: BI, \u0275\u0275deferHydrateOnIdle: qI, \u0275\u0275deferHydrateOnImmediate: zI, \u0275\u0275deferHydrateOnTimer: YI, \u0275\u0275deferHydrateOnHover: XI, \u0275\u0275deferHydrateOnInteraction: nD, \u0275\u0275deferHydrateOnViewport: iD, \u0275\u0275deferEnableTimerScheduling: CI, \u0275\u0275repeater: MD, \u0275\u0275repeaterCreate: TD, \u0275\u0275repeaterTrackByIndex: DD, \u0275\u0275repeaterTrackByIdentity: CD, \u0275\u0275componentInstance: dD, \u0275\u0275text: pC, \u0275\u0275textInterpolate: bp, \u0275\u0275textInterpolate1: Nc, \u0275\u0275textInterpolate2: Ap, \u0275\u0275textInterpolate3: Rp, \u0275\u0275textInterpolate4: Op, \u0275\u0275textInterpolate5: kp, \u0275\u0275textInterpolate6: xp, \u0275\u0275textInterpolate7: Pp, \u0275\u0275textInterpolate8: Lp, \u0275\u0275textInterpolateV: Fp, \u0275\u0275i18n: $D, \u0275\u0275i18nAttributes: qD, \u0275\u0275i18nExp: yp, \u0275\u0275i18nStart: mp, \u0275\u0275i18nEnd: vp, \u0275\u0275i18nApply: GD, \u0275\u0275i18nPostprocess: WD, \u0275\u0275resolveWindow: py, \u0275\u0275resolveDocument: gy, \u0275\u0275resolveBody: tf, \u0275\u0275setComponentScope: qC, \u0275\u0275setNgModuleScope: GC, \u0275\u0275registerNgModuleType: Pf, \u0275\u0275getComponentDepsFactory: gT, \u0275setClassDebugInfo: hT, \u0275\u0275declareLet: Hp, \u0275\u0275storeLet: _C, \u0275\u0275readContextLet: SC, \u0275\u0275attachSourceLocations: bC, \u0275\u0275interpolate: AC, \u0275\u0275interpolate1: RC, \u0275\u0275interpolate2: OC, \u0275\u0275interpolate3: kC, \u0275\u0275interpolate4: xC, \u0275\u0275interpolate5: PC, \u0275\u0275interpolate6: LC, \u0275\u0275interpolate7: FC, \u0275\u0275interpolate8: jC, \u0275\u0275interpolateV: VC, \u0275\u0275sanitizeHtml: sy, \u0275\u0275sanitizeStyle: ay, \u0275\u0275sanitizeResourceUrl: ef, \u0275\u0275sanitizeScript: cy, \u0275\u0275validateAttribute: fy, \u0275\u0275sanitizeUrl: Xd, \u0275\u0275sanitizeUrlOrResourceUrl: dy, \u0275\u0275trustConstantHtml: ly, \u0275\u0275trustConstantResourceUrl: uy, forwardRef: gr, resolveForwardRef: P, \u0275\u0275twoWayProperty: jp, \u0275\u0275twoWayBindingSet: NC, \u0275\u0275twoWayListener: Vp, \u0275\u0275replaceMetadata: vT, \u0275\u0275getReplaceMetadataURL: mT }, ho = null;
function yT(e) { ho !== null && (e.defaultEncapsulation !== ho.defaultEncapsulation || e.preserveWhitespaces !== ho.preserveWhitespaces) || (ho = e); }
function hx() { return ho; }
function mx() { ho = null; }
var zr = [];
function vx(e, t) { zr.push({ moduleType: e, ngModule: t }); }
var Nu = !1;
function ET() { if (!Nu) {
    Nu = !0;
    try {
        for (let e = zr.length - 1; e >= 0; e--) {
            let { moduleType: t, ngModule: n } = zr[e];
            n.declarations && n.declarations.every(IT) && (zr.splice(e, 1), Cx(t, n));
        }
    }
    finally {
        Nu = !1;
    }
} }
function IT(e) { return Array.isArray(e) ? e.every(IT) : !!P(e); }
function DT(e, t = {}) { CT(e, t), t.id !== void 0 && Pf(e, t.id), vx(e, t); }
function CT(e, t, n = !1) { let o = Ze(t.declarations || j), r = null; Object.defineProperty(e, Ji, { configurable: !0, get: () => (r === null && (r = se({ usage: 0, kind: "NgModule", type: e }).compileNgModule(De, `ng:///${e.name}/\u0275mod.js`, { type: e, bootstrap: Ze(t.bootstrap || j).map(P), declarations: o.map(P), imports: Ze(t.imports || j).map(P).map(Nm), exports: Ze(t.exports || j).map(P).map(Nm), schemas: t.schemas ? Ze(t.schemas) : null, id: t.id || null }), r.schemas || (r.schemas = [])), r) }); let i = null; Object.defineProperty(e, ot, { get: () => { if (i === null) {
        let a = se({ usage: 0, kind: "NgModule", type: e });
        i = a.compileFactory(De, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, deps: Ia(e), target: a.FactoryTarget.NgModule, typeArgumentCount: 0 });
    } return i; }, configurable: !1 }); let s = null; Object.defineProperty(e, cr, { get: () => { if (s === null) {
        let a = { name: e.name, type: e, providers: t.providers || j, imports: [(t.imports || j).map(P), (t.exports || j).map(P)] };
        s = se({ usage: 0, kind: "NgModule", type: e }).compileInjector(De, `ng:///${e.name}/\u0275inj.js`, a);
    } return s; }, configurable: !1 }); }
function yx(e, t) { let n = `Unexpected "${Oe(e)}" found in the "declarations" array of the`, o = `"${Oe(e)}" is marked as standalone and can't be declared in any NgModule - did you intend to import it instead (by adding it to the "imports" array)?`; return `${n} ${t}, ${o}`; }
var Ex = new WeakMap, Ix = new WeakMap;
function Dx() { Ex = new WeakMap, Ix = new WeakMap, zr.length = 0, sR.clear(); }
function Cx(e, t) { let n = Ze(t.declarations || j), o = Up(e); n.forEach(r => { if (r = P(r), r.hasOwnProperty(pn)) {
    let s = z(r);
    Bp(s, o);
}
else
    !r.hasOwnProperty(yr) && !r.hasOwnProperty(Er) && (r.ngSelectorScope = e); }); }
function Bp(e, t) { e.directiveDefs = () => Array.from(t.compilation.directives).map(n => n.hasOwnProperty(pn) ? z(n) : Re(n)).filter(n => !!n), e.pipeDefs = () => Array.from(t.compilation.pipes).map(n => Qe(n)), e.schemas = t.schemas, e.tView = null; }
function Up(e) { if (Tn(e)) {
    let t = wo.getNgModuleScope(e), n = Xi(e);
    return H({ schemas: n.schemas || null }, t);
}
else if (Ir(e)) {
    if ((z(e) || Re(e)) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set([e]), pipes: new Set } };
    if (Qe(e) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set, pipes: new Set([e]) } };
} throw new Error(`${e.name} does not have a module def (\u0275mod property)`); }
function Nm(e) { return Mf(e) ? e.ngModule : e; }
var wu = 0;
function TT(e, t) {
    let n = null;
    ZA(e, t), NT(e, t), Object.defineProperty(e, pn, { get: () => {
            if (n === null) {
                let o = se({ usage: 0, kind: "component", type: e });
                if (ZE(t)) {
                    let u = [`Component '${e.name}' is not resolved:`];
                    throw t.templateUrl && u.push(` - templateUrl: ${t.templateUrl}`), t.styleUrls && t.styleUrls.length && u.push(` - styleUrls: ${JSON.stringify(t.styleUrls)}`), t.styleUrl && u.push(` - styleUrl: ${t.styleUrl}`), u.push("Did you run and wait for 'resolveComponentResources()'?"), new Error(u.join(`
`));
                }
                let r = hx(), i = t.preserveWhitespaces;
                i === void 0 && (r !== null && r.preserveWhitespaces !== void 0 ? i = r.preserveWhitespaces : i = !1);
                let s = t.encapsulation;
                s === void 0 && (r !== null && r.defaultEncapsulation !== void 0 ? s = r.defaultEncapsulation : s = Ue.Emulated);
                let a = t.templateUrl || `ng:///${e.name}/template.html`, c = wT(e, t), l = ae(H({}, c), { typeSourceSpan: o.createParseSourceSpan("Component", e.name, a), template: t.template || "", preserveWhitespaces: i, styles: typeof t.styles == "string" ? [t.styles] : t.styles || j, animations: t.animations, declarations: [], changeDetection: t.changeDetection, encapsulation: s, viewProviders: t.viewProviders || null, hasDirectiveDependencies: !c.isStandalone || t.imports != null && t.imports.length > 0 });
                wu++;
                try {
                    if (l.usesInheritance && _T(e), n = o.compileComponent(De, a, l), l.isStandalone) {
                        let u = Ze(t.imports || j), { directiveDefs: d, pipeDefs: f } = Tx(e, u);
                        n.directiveDefs = d, n.pipeDefs = f, n.dependencies = () => u.map(P);
                    }
                }
                finally {
                    wu--;
                }
                if (wu === 0 && ET(), Mx(e)) {
                    let u = Up(e.ngSelectorScope);
                    Bp(n, u);
                }
                if (t.schemas)
                    if (l.isStandalone)
                        n.schemas = t.schemas;
                    else
                        throw new Error(`The 'schemas' was specified for the ${Oe(e)} but is only valid on a component that is standalone.`);
                else
                    l.isStandalone && (n.schemas = []);
            }
            return n;
        }, set: o => { n = o; }, configurable: !1 });
}
function Tx(e, t) { return { directiveDefs: () => jr(e) ? [...wo.getStandaloneComponentScope(e, t).compilation.directives].map(i => z(i) || Re(i)).filter(i => i !== null) : [], pipeDefs: () => jr(e) ? [...wo.getStandaloneComponentScope(e, t).compilation.pipes].map(i => Qe(i)).filter(i => i !== null) : [] }; }
function Mx(e) { return e.ngSelectorScope !== void 0; }
function $p(e, t) { let n = null; NT(e, t || {}), Object.defineProperty(e, yr, { get: () => { if (n === null) {
        let o = MT(e, t || {});
        n = se({ usage: 0, kind: "directive", type: e }).compileDirective(De, o.sourceMapUrl, o.metadata);
    } return n; }, configurable: !1 }); }
function MT(e, t) { let n = e && e.name, o = `ng:///${n}/\u0275dir.js`, r = se({ usage: 0, kind: "directive", type: e }), i = wT(e, t); return i.typeSourceSpan = r.createParseSourceSpan("Directive", n, o), i.usesInheritance && _T(e), { metadata: i, sourceMapUrl: o }; }
function NT(e, t) { let n = null; Object.defineProperty(e, ot, { get: () => { if (n === null) {
        let o = MT(e, t), r = se({ usage: 0, kind: "directive", type: e });
        n = r.compileFactory(De, `ng:///${e.name}/\u0275fac.js`, { name: o.metadata.name, type: o.metadata.type, typeArgumentCount: 0, deps: Ia(e), target: r.FactoryTarget.Directive });
    } return n; }, configurable: !1 }); }
function Nx(e) { return Object.getPrototypeOf(e.prototype) === Object.prototype; }
function wT(e, t) { let n = Ad(), o = n.ownPropMetadata(e); return { name: e.name, type: e, selector: t.selector !== void 0 ? t.selector : null, host: t.host || Le, propMetadata: o, inputs: t.inputs || j, outputs: t.outputs || j, queries: wm(e, o, ST), lifecycle: { usesOnChanges: n.hasLifecycleHook(e, "ngOnChanges") }, typeSourceSpan: null, usesInheritance: !Nx(e), exportAs: Sx(t.exportAs), providers: t.providers || null, viewQueries: wm(e, o, bT), isStandalone: t.standalone === void 0 ? !0 : !!t.standalone, isSignal: !!t.signals, hostDirectives: t.hostDirectives?.map(r => typeof r == "function" ? { directive: r } : r) || null }; }
function _T(e) { let t = Object.prototype, n = Object.getPrototypeOf(e.prototype).constructor; for (; n && n !== t;)
    !Re(n) && !z(n) && Ax(n) && $p(n, null), n = Object.getPrototypeOf(n); }
function wx(e) { return typeof e == "string" ? RT(e) : P(e); }
function _x(e, t) { return { propertyName: e, predicate: wx(t.selector), descendants: t.descendants, first: t.first, read: t.read ? t.read : null, static: !!t.static, emitDistinctChangesOnly: !!t.emitDistinctChangesOnly, isSignal: !!t.isSignal }; }
function wm(e, t, n) { let o = []; for (let r in t)
    if (t.hasOwnProperty(r)) {
        let i = t[r];
        i.forEach(s => { if (n(s)) {
            if (!s.selector)
                throw new Error(`Can't construct a query for the property "${r}" of "${Oe(e)}" since the query selector wasn't defined.`);
            if (i.some(AT))
                throw new Error("Cannot combine @Input decorators with query decorators");
            o.push(_x(r, s));
        } });
    } return o; }
function Sx(e) { return e === void 0 ? null : RT(e); }
function ST(e) { let t = e.ngMetadataName; return t === "ContentChild" || t === "ContentChildren"; }
function bT(e) { let t = e.ngMetadataName; return t === "ViewChild" || t === "ViewChildren"; }
function AT(e) { return e.ngMetadataName === "Input"; }
function RT(e) { return e.split(",").map(t => t.trim()); }
var bx = ["ngOnChanges", "ngOnInit", "ngOnDestroy", "ngDoCheck", "ngAfterViewInit", "ngAfterViewChecked", "ngAfterContentInit", "ngAfterContentChecked"];
function Ax(e) { let t = Ad(); if (bx.some(o => t.hasLifecycleHook(e, o)))
    return !0; let n = t.propMetadata(e); for (let o in n) {
    let r = n[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i], a = s.ngMetadataName;
        if (AT(s) || ST(s) || bT(s) || a === "Output" || a === "HostBinding" || a === "HostListener")
            return !0;
    }
} return !1; }
function OT(e, t) { let n = null, o = null; Object.defineProperty(e, ot, { get: () => { if (o === null) {
        let r = _m(e, t), i = se({ usage: 0, kind: "pipe", type: r.type });
        o = i.compileFactory(De, `ng:///${r.name}/\u0275fac.js`, { name: r.name, type: r.type, typeArgumentCount: 0, deps: Ia(e), target: i.FactoryTarget.Pipe });
    } return o; }, configurable: !1 }), Object.defineProperty(e, Er, { get: () => { if (n === null) {
        let r = _m(e, t);
        n = se({ usage: 0, kind: "pipe", type: r.type }).compilePipe(De, `ng:///${r.name}/\u0275pipe.js`, r);
    } return n; }, configurable: !1 }); }
function _m(e, t) { return { type: e, name: e.name, pipeName: t.name, pure: t.pure !== void 0 ? t.pure : !0, isStandalone: t.standalone === void 0 ? !0 : !!t.standalone }; }
var kT = li("Directive", (e = {}) => e, void 0, void 0, (e, t) => $p(e, t)), Rx = li("Component", (e = {}) => H({ changeDetection: Da.Default }, e), kT, void 0, (e, t) => TT(e, t)), Ox = li("Pipe", e => H({ pure: !0 }, e), void 0, void 0, (e, t) => OT(e, t)), kx = Rt("Input", e => e ? typeof e == "string" ? { alias: e } : e : {}), xx = Rt("Output", e => ({ alias: e })), Px = Rt("HostBinding", e => ({ hostPropertyName: e })), Lx = Rt("HostListener", (e, t) => ({ eventName: e, args: t })), Fx = li("NgModule", e => e, void 0, void 0, (e, t) => DT(e, t)), va = class {
    ngModuleFactory;
    componentFactories;
    constructor(t, n) { this.ngModuleFactory = t, this.componentFactories = n; }
}, jx = (() => { class e {
    compileModuleSync(n) { return new Ao(n); }
    compileModuleAsync(n) { return Promise.resolve(this.compileModuleSync(n)); }
    compileModuleAndAllComponentsSync(n) { let o = this.compileModuleSync(n), r = hn(n), i = po(r.declarations).reduce((s, a) => { let c = z(a); return c && s.push(new nn(c)), s; }, []); return new va(o, i); }
    compileModuleAndAllComponentsAsync(n) { return Promise.resolve(this.compileModuleAndAllComponentsSync(n)); }
    clearCache() { }
    clearCacheFor(n) { }
    getModuleId(n) { }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = U({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), xT = new M(""), Nd = class {
};
var PT = (() => { class e {
    applicationErrorHandler = E(Mt);
    appRef = E(qe);
    taskService = E(Tt);
    ngZone = E(G);
    zonelessEnabled = E(io);
    tracing = E(Qo, { optional: !0 });
    zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
    schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }];
    subscriptions = new qn;
    angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(dr) : null;
    scheduleInRootZone = !this.zonelessEnabled && this.zoneIsDefined && (E(Es, { optional: !0 }) ?? !1);
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
        return; let o = this.useMicrotaskScheduler ? lh : eu; this.pendingRenderTaskId = this.taskService.add(), this.scheduleInRootZone ? this.cancelScheduledCallback = Zone.root.run(() => o(() => this.tick())) : this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() => o(() => this.tick())); }
    shouldScheduleTick() { return !(this.appRef.destroyed || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && Zone.current.get(dr + this.angularZoneId)); }
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
    static \u0275prov = U({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function Vx() { return ee("NgZoneless"), Ye([...wc(), []]); }
function wc() { return [{ provide: ze, useExisting: PT }, { provide: G, useClass: fr }, { provide: io, useValue: !0 }]; }
function Hx() { return typeof $localize < "u" && $localize.locale || Oi; }
var qp = new M("", { factory: () => E(qp, { optional: !0, skipSelf: !0 }) || Hx() }), Bx = new M("", { factory: () => nk }), Ux = new M(""), $x = new M(""), LT = (function (e) { return e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Ignore = 2] = "Ignore", e; })(LT || {}), wd = class {
    name;
    callback;
    constructor(t, n) { this.name = t, this.callback = n; }
};
function qx(e) { return e.map(t => t.nativeElement); }
var ci = class {
    nativeNode;
    constructor(t) { this.nativeNode = t; }
    get parent() { let t = this.nativeNode.parentNode; return t ? new Fn(t) : null; }
    get injector() { return Bw(this.nativeNode); }
    get componentInstance() { let t = this.nativeNode; return t && (Mh(t) || Hw(t)); }
    get context() { return Mh(this.nativeNode) || Vw(this.nativeNode); }
    get listeners() { return Ww(this.nativeNode).filter(t => t.type === "dom"); }
    get references() { return qw(this.nativeNode); }
    get providerTokens() { return Uw(this.nativeNode); }
}, Fn = class extends ci {
    constructor(t) { super(t); }
    get nativeElement() { return this.nativeNode.nodeType == Node.ELEMENT_NODE ? this.nativeNode : null; }
    get name() { let t = Se(this.nativeNode), n = t ? t.lView : null; return n !== null ? n[v].data[t.nodeIndex].value : this.nativeNode.nodeName; }
    get properties() { let t = Se(this.nativeNode), n = t ? t.lView : null; if (n === null)
        return {}; let o = n[v].data, r = o[t.nodeIndex], i = {}; return Gx(this.nativeElement, i), zx(i, r, n, o), i; }
    get attributes() { let t = {}, n = this.nativeElement; if (!n)
        return t; let o = Se(n), r = o ? o.lView : null; if (r === null)
        return {}; let i = r[v].data[o.nodeIndex].attrs, s = []; if (i) {
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
        n.push(Lo(r));
    } return n; }
    get children() { let t = this.nativeElement; if (!t)
        return []; let n = t.children, o = []; for (let r = 0; r < n.length; r++) {
        let i = n[r];
        o.push(Lo(i));
    } return o; }
    query(t) { return this.queryAll(t)[0] || null; }
    queryAll(t) { let n = []; return Sm(this, t, n, !0), n; }
    queryAllNodes(t) { let n = []; return Sm(this, t, n, !1), n; }
    triggerEventHandler(t, n) { let o = this.nativeNode, r = []; this.listeners.forEach(i => { if (i.name === t) {
        let s = i.callback;
        s.call(o, n), r.push(s);
    } }), typeof o.eventListeners == "function" && o.eventListeners(t).forEach(i => { if (i.toString().indexOf("__ngUnwrap__") !== -1) {
        let s = i("__ngUnwrap__");
        return r.indexOf(s) === -1 && s.call(o, n);
    } }); }
};
function Gx(e, t) { if (e) {
    let n = Object.getPrototypeOf(e), o = Node.prototype;
    for (; n !== null && n !== o;) {
        let r = Object.getOwnPropertyDescriptors(n);
        for (let i in r)
            if (!i.startsWith("__") && !i.startsWith("on")) {
                let s = e[i];
                Wx(s) && (t[i] = s);
            }
        n = Object.getPrototypeOf(n);
    }
} }
function Wx(e) { return typeof e == "string" || typeof e == "boolean" || typeof e == "number" || e === null; }
function Sm(e, t, n, o) { let r = Se(e.nativeNode), i = r ? r.lView : null; if (i !== null) {
    let s = i[v].data[r.nodeIndex];
    Mn(s, i, t, n, o, e.nativeNode);
}
else
    Gp(e.nativeNode, t, n, o); }
function Mn(e, t, n, o, r, i) { let s = Zg(e, t); if (e.type & 11) {
    if (_u(s, n, o, r, i), Te(e)) {
        let c = Ee(e.index, t);
        c && c[v].firstChild && Mn(c[v].firstChild, c, n, o, r, i);
    }
    else
        e.child && Mn(e.child, t, n, o, r, i), s && Gp(s, n, o, r);
    let a = t[e.index];
    X(a) && bm(a, n, o, r, i);
}
else if (e.type & 4) {
    let a = t[e.index];
    _u(a[Je], n, o, r, i), bm(a, n, o, r, i);
}
else if (e.type & 16) {
    let a = t[ne], l = a[ue].projection[e.projection];
    if (Array.isArray(l))
        for (let u of l)
            _u(u, n, o, r, i);
    else if (l) {
        let u = a[Z], d = u[v].data[l.index];
        Mn(d, u, n, o, r, i);
    }
}
else
    e.child && Mn(e.child, t, n, o, r, i); if (i !== s) {
    let a = e.flags & 2 ? e.projectionNext : e.next;
    a && Mn(a, t, n, o, r, i);
} }
function bm(e, t, n, o, r) { for (let i = W; i < e.length; i++) {
    let s = e[i], a = s[v].firstChild;
    a && Mn(a, s, t, n, o, r);
} }
function _u(e, t, n, o, r) { if (r !== e) {
    let i = Lo(e);
    if (!i)
        return;
    (o && i instanceof Fn && t(i) && n.indexOf(i) === -1 || !o && t(i) && n.indexOf(i) === -1) && n.push(i);
} }
function Gp(e, t, n, o) { let r = e.childNodes, i = r.length; for (let s = 0; s < i; s++) {
    let a = r[s], c = Lo(a);
    c && ((o && c instanceof Fn && t(c) && n.indexOf(c) === -1 || !o && t(c) && n.indexOf(c) === -1) && n.push(c), Gp(a, t, n, o));
} }
function zx(e, t, n, o) { let r = t.propertyBindings; if (r !== null)
    for (let i = 0; i < r.length; i++) {
        let s = r[i], c = o[s].split(lS), l = c[0];
        if (c.length > 1) {
            let u = c[1];
            for (let d = 1; d < c.length - 1; d++)
                u += R(n[s + d - 1]) + c[d + 1];
            e[l] = u;
        }
        else
            e[l] = n[s];
    } }
var Su = "__ng_debug__";
function Lo(e) { return e instanceof Node ? (e.hasOwnProperty(Su) || (e[Su] = e.nodeType == Node.ELEMENT_NODE ? new Fn(e) : new ci(e)), e[Su]) : null; }
function Wp(e, t, n) { let o = Object.create(Qx); o.source = e, o.computation = t, n != null && (o.equal = n); let i = () => { if (Gn(o), Bt(o), o.value === pt)
    throw o.error; return o.value; }; return i[J] = o, Hi(o), i; }
function FT(e, t) { Gn(e), cn(e, t), sr(e); }
function jT(e, t) { Gn(e), Gc(e, t), sr(e); }
var Qx = ae(H({}, Ht), { value: Vt, dirty: !0, error: null, equal: Bi, kind: "linkedSignal", producerMustRecompute(e) { return e.value === Vt || e.value === an; }, producerRecomputeValue(e) { if (e.value === an)
        throw new Error(""); let t = e.value; e.value = an; let n = gt(e), o; try {
        let r = e.source(), i = t === Vt || t === pt ? void 0 : { source: e.sourceValue, value: t };
        o = e.computation(r, i), e.sourceValue = r;
    }
    catch (r) {
        o = pt, e.error = r;
    }
    finally {
        Ut(e, n);
    } if (t !== Vt && o !== pt && e.equal(t, o)) {
        e.value = t;
        return;
    } e.value = o, e.version++; } });
var Pi = class {
    destroyed = !1;
    listeners = null;
    errorHandler = E(Et, { optional: !0 });
    destroyRef = E(He);
    constructor() { this.destroyRef.onDestroy(() => { this.destroyed = !0, this.listeners = null; }); }
    subscribe(t) { if (this.destroyed)
        throw new C(953, !1); return (this.listeners ??= []).push(t), { unsubscribe: () => { let n = this.listeners?.indexOf(t); n !== void 0 && n !== -1 && this.listeners?.splice(n, 1); } }; }
    emit(t) { if (this.destroyed) {
        console.warn(pr(953, !1));
        return;
    } if (this.listeners === null)
        return; let n = O(null); try {
        for (let o of this.listeners)
            try {
                o(t);
            }
            catch (r) {
                this.errorHandler?.handleError(r);
            }
    }
    finally {
        O(n);
    } }
};
function Zx(e) { return e.destroyRef; }
function Un(e, t) { return Ui(e, t?.equal); }
var Yx = e => e;
function zp(e, t) { if (typeof e == "function") {
    let n = Wp(e, Yx, t?.equal);
    return VT(n, t?.debugName);
}
else {
    let n = Wp(e.source, e.computation, e.equal);
    return VT(n, e.debugName);
} }
function VT(e, t) { let n = e[J], o = e; return o.set = r => FT(n, r), o.update = r => jT(n, r), o.asReadonly = oo.bind(e), o; }
function Kx(e) { let t = e.request, n = e.params ?? t ?? (() => null); return new _c(n, Xx(e), e.defaultValue, e.equal ? Jx(e.equal) : void 0, e.debugName, e.injector ?? E(le)); }
var Qp = class {
    value;
    isLoading;
    constructor(t, n) { this.value = t, this.value.set = this.set.bind(this), this.value.update = this.update.bind(this), this.value.asReadonly = oo, this.isLoading = Un(() => this.status() === "loading" || this.status() === "reloading", void 0); }
    isError = Un(() => this.status() === "error");
    update(t) { this.set(t(Ne(this.value))); }
    isValueDefined = Un(() => this.isError() ? !1 : this.value() !== void 0);
    hasValue() { return this.isValueDefined(); }
    asReadonly() { return this; }
}, _c = class extends Qp {
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
    constructor(t, n, o, r, i, s) { super(Un(() => { let a = this.state().stream?.(); if (!a || this.state().status === "loading" && this.error())
        return o; if (!Zp(a))
        throw new Yp(this.error()); return a.value; }, { equal: r }), i), this.loaderFn = n, this.equal = r, this.debugName = i, this.extRequest = zp({ source: t, computation: a => ({ request: a, reload: 0 }) }), this.state = zp({ source: this.extRequest, computation: (a, c) => { let l = a.request === void 0 ? "idle" : "loading"; return c ? { extRequest: a, status: l, previousStatus: HT(c.value), stream: c.value.extRequest.request === a.request ? c.value.stream : void 0 } : { extRequest: a, status: l, previousStatus: "idle", stream: void 0 }; } }), this.effectRef = ru(this.loadEffect.bind(this), { injector: s, manualCleanup: !0 }), this.pendingTasks = s.get(Or), this.unregisterOnDestroy = s.get(He).onDestroy(() => this.destroy()), this.status = Un(() => HT(this.state()), void 0), this.error = Un(() => { let a = this.state().stream?.(); return a && !Zp(a) ? a.error : void 0; }, void 0); }
    set(t) { if (this.destroyed)
        return; let n = Ne(this.error), o = Ne(this.state); if (!n) {
        let r = Ne(this.value);
        if (o.status === "local" && (this.equal ? this.equal(r, t) : r === t))
            return;
    } this.state.set({ extRequest: o.extRequest, status: "local", previousStatus: "local", stream: Kt({ value: t }, void 0) }), this.abortInProgressLoad(); }
    reload() { let { status: t } = Ne(this.state); return t === "idle" || t === "loading" ? !1 : (this.extRequest.update(({ request: n, reload: o }) => ({ request: n, reload: o + 1 })), !0); }
    destroy() { this.destroyed = !0, this.unregisterOnDestroy(), this.effectRef.destroy(), this.abortInProgressLoad(), this.state.set({ extRequest: { request: void 0, reload: 0 }, status: "idle", previousStatus: "idle", stream: void 0 }); }
    loadEffect() { return We(this, null, function* () { let t = this.extRequest(), { status: n, previousStatus: o } = Ne(this.state); if (t.request === void 0)
        return; if (n !== "loading")
        return; this.abortInProgressLoad(); let r = this.resolvePendingTask = this.pendingTasks.add(), { signal: i } = this.pendingController = new AbortController; try {
        let s = yield Ne(() => this.loaderFn({ params: t.request, request: t.request, abortSignal: i, previous: { status: o } }));
        if (i.aborted || Ne(this.extRequest) !== t)
            return;
        this.state.set({ extRequest: t, status: "resolved", previousStatus: "resolved", stream: s });
    }
    catch (s) {
        if (i.aborted || Ne(this.extRequest) !== t)
            return;
        this.state.set({ extRequest: t, status: "resolved", previousStatus: "error", stream: Kt({ error: Jp(s) }, void 0) });
    }
    finally {
        r?.(), r = void 0;
    } }); }
    abortInProgressLoad() { Ne(() => this.pendingController?.abort()), this.pendingController = void 0, this.resolvePendingTask?.(), this.resolvePendingTask = void 0; }
};
function Jx(e) { return (t, n) => t === void 0 || n === void 0 ? t === n : e(t, n); }
function Xx(e) { return eP(e) ? e.stream : t => We(null, null, function* () { try {
    return Kt({ value: yield e.loader(t) }, void 0);
}
catch (n) {
    return Kt({ error: Jp(n) }, void 0);
} }); }
function eP(e) { return !!e.stream; }
function HT(e) { switch (e.status) {
    case "loading": return e.extRequest.reload === 0 ? "loading" : "reloading";
    case "resolved": return Zp(e.stream()) ? "resolved" : "error";
    default: return e.status;
} }
function Zp(e) { return e.error === void 0; }
function Jp(e) { return tP(e) ? e : new Kp(e); }
function tP(e) { return e instanceof Error || typeof e == "object" && typeof e.name == "string" && typeof e.message == "string"; }
var Yp = class extends Error {
    constructor(t) { super(t.message, { cause: t }); }
}, Kp = class extends Error {
    constructor(t) { super(String(t), { cause: t }); }
};
var og = { JSACTION: "__jsaction", OWNER: "__owner" }, qT = {};
function nP(e) { return e[og.JSACTION]; }
function BT(e, t) { e[og.JSACTION] = t; }
function oP(e) { return qT[e]; }
function rP(e, t) { qT[e] = t; }
var N = { AUXCLICK: "auxclick", CHANGE: "change", CLICK: "click", CLICKMOD: "clickmod", CLICKONLY: "clickonly", DBLCLICK: "dblclick", FOCUS: "focus", FOCUSIN: "focusin", BLUR: "blur", FOCUSOUT: "focusout", SUBMIT: "submit", KEYDOWN: "keydown", KEYPRESS: "keypress", KEYUP: "keyup", MOUSEUP: "mouseup", MOUSEDOWN: "mousedown", MOUSEOVER: "mouseover", MOUSEOUT: "mouseout", MOUSEENTER: "mouseenter", MOUSELEAVE: "mouseleave", MOUSEMOVE: "mousemove", POINTERUP: "pointerup", POINTERDOWN: "pointerdown", POINTEROVER: "pointerover", POINTEROUT: "pointerout", POINTERENTER: "pointerenter", POINTERLEAVE: "pointerleave", POINTERMOVE: "pointermove", POINTERCANCEL: "pointercancel", GOTPOINTERCAPTURE: "gotpointercapture", LOSTPOINTERCAPTURE: "lostpointercapture", ERROR: "error", LOAD: "load", UNLOAD: "unload", TOUCHSTART: "touchstart", TOUCHEND: "touchend", TOUCHMOVE: "touchmove", INPUT: "input", SCROLL: "scroll", TOGGLE: "toggle", CUSTOM: "_custom" }, iP = [N.MOUSEENTER, N.MOUSELEAVE, "pointerenter", "pointerleave"], sP = [N.CLICK, N.DBLCLICK, N.FOCUSIN, N.FOCUSOUT, N.KEYDOWN, N.KEYUP, N.KEYPRESS, N.MOUSEOVER, N.MOUSEOUT, N.SUBMIT, N.TOUCHSTART, N.TOUCHEND, N.TOUCHMOVE, "touchcancel", "auxclick", "change", "compositionstart", "compositionupdate", "compositionend", "beforeinput", "input", "select", "copy", "cut", "paste", "mousedown", "mouseup", "wheel", "contextmenu", "dragover", "dragenter", "dragleave", "drop", "dragstart", "dragend", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerover", "pointerout", "gotpointercapture", "lostpointercapture", "ended", "loadedmetadata", "pagehide", "pageshow", "visibilitychange", "beforematch"], GT = [N.FOCUS, N.BLUR, N.ERROR, N.LOAD, N.TOGGLE], kc = e => GT.indexOf(e) >= 0, aP = sP.concat(GT), WT = e => aP.indexOf(e) >= 0;
function cP(e) { return e === N.MOUSEENTER ? N.MOUSEOVER : e === N.MOUSELEAVE ? N.MOUSEOUT : e === N.POINTERENTER ? N.POINTEROVER : e === N.POINTERLEAVE ? N.POINTEROUT : e; }
function lP(e, t, n, o) { let r = !1; kc(t) && (r = !0); let i = typeof o == "boolean" ? { capture: r, passive: o } : r; return e.addEventListener(t, n, i), { eventType: t, handler: n, capture: r, passive: o }; }
function uP(e, t) { if (e.removeEventListener) {
    let n = typeof t.passive == "boolean" ? { capture: t.capture } : t.capture;
    e.removeEventListener(t.eventType, t.handler, n);
}
else
    e.detachEvent && e.detachEvent(`on${t.eventType}`, t.handler); }
function dP(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1; }
var UT = typeof navigator < "u" && /Macintosh/.test(navigator.userAgent);
function fP(e) { return e.which === 2 || e.which == null && e.button === 4; }
function pP(e) { return UT && e.metaKey || !UT && e.ctrlKey || fP(e) || e.shiftKey; }
function gP(e, t, n) { let o = e.relatedTarget; return (e.type === N.MOUSEOVER && t === N.MOUSEENTER || e.type === N.MOUSEOUT && t === N.MOUSELEAVE || e.type === N.POINTEROVER && t === N.POINTERENTER || e.type === N.POINTEROUT && t === N.POINTERLEAVE) && (!o || o !== n && !n.contains(o)); }
function hP(e, t) { let n = {}; for (let o in e) {
    if (o === "srcElement" || o === "target")
        continue;
    let r = o, i = e[r];
    typeof i != "function" && (n[r] = i);
} return e.type === N.MOUSEOVER ? n.type = N.MOUSEENTER : e.type === N.MOUSEOUT ? n.type = N.MOUSELEAVE : e.type === N.POINTEROVER ? n.type = N.POINTERENTER : n.type = N.POINTERLEAVE, n.target = n.srcElement = t, n.bubbles = !1, n._originalEvent = e, n; }
var mP = typeof navigator < "u" && /iPhone|iPad|iPod/.test(navigator.userAgent), Rc = class {
    element;
    handlerInfos = [];
    constructor(t) { this.element = t; }
    addEventListener(t, n, o) { mP && (this.element.style.cursor = "pointer"), this.handlerInfos.push(lP(this.element, t, n(this.element), o)); }
    cleanUp() { for (let t = 0; t < this.handlerInfos.length; t++)
        uP(this.element, this.handlerInfos[t]); this.handlerInfos = []; }
}, vP = { NAMESPACE_ACTION_SEPARATOR: ".", EVENT_ACTION_SEPARATOR: ":" };
function rn(e) { return e.eventType; }
function rg(e, t) { e.eventType = t; }
function bc(e) { return e.event; }
function zT(e, t) { e.event = t; }
function QT(e) { return e.targetElement; }
function ZT(e, t) { e.targetElement = t; }
function YT(e) { return e.eic; }
function yP(e, t) { e.eic = t; }
function EP(e) { return e.timeStamp; }
function IP(e, t) { e.timeStamp = t; }
function Ac(e) { return e.eia; }
function KT(e, t, n) { e.eia = [t, n]; }
function Xp(e) { e.eia = void 0; }
function Sc(e) { return e[1]; }
function DP(e) { return e.eirp; }
function JT(e, t) { e.eirp = t; }
function XT(e) { return e.eir; }
function eM(e, t) { e.eir = t; }
function tM(e) { return { eventType: e.eventType, event: e.event, targetElement: e.targetElement, eic: e.eic, eia: e.eia, timeStamp: e.timeStamp, eirp: e.eirp, eiack: e.eiack, eir: e.eir }; }
function CP(e, t, n, o, r, i, s, a) { return { eventType: e, event: t, targetElement: n, eic: o, timeStamp: r, eia: i, eirp: s, eiack: a }; }
var eg = class e {
    eventInfo;
    constructor(t) { this.eventInfo = t; }
    getEventType() { return rn(this.eventInfo); }
    setEventType(t) { rg(this.eventInfo, t); }
    getEvent() { return bc(this.eventInfo); }
    setEvent(t) { zT(this.eventInfo, t); }
    getTargetElement() { return QT(this.eventInfo); }
    setTargetElement(t) { ZT(this.eventInfo, t); }
    getContainer() { return YT(this.eventInfo); }
    setContainer(t) { yP(this.eventInfo, t); }
    getTimestamp() { return EP(this.eventInfo); }
    setTimestamp(t) { IP(this.eventInfo, t); }
    getAction() { let t = Ac(this.eventInfo); if (t)
        return { name: t[0], element: t[1] }; }
    setAction(t) { if (!t) {
        Xp(this.eventInfo);
        return;
    } KT(this.eventInfo, t.name, t.element); }
    getIsReplay() { return DP(this.eventInfo); }
    setIsReplay(t) { JT(this.eventInfo, t); }
    getResolved() { return XT(this.eventInfo); }
    setResolved(t) { eM(this.eventInfo, t); }
    clone() { return new e(tM(this.eventInfo)); }
}, TP = {}, MP = /\s*;\s*/, NP = N.CLICK, tg = class {
    a11yClickSupport = !1;
    clickModSupport = !0;
    syntheticMouseEventSupport;
    updateEventInfoForA11yClick = void 0;
    preventDefaultForA11yClick = void 0;
    populateClickOnlyAction = void 0;
    constructor({ syntheticMouseEventSupport: t = !1, clickModSupport: n = !0 } = {}) { this.syntheticMouseEventSupport = t, this.clickModSupport = n; }
    resolveEventType(t) { this.clickModSupport && rn(t) === N.CLICK && pP(bc(t)) ? rg(t, N.CLICKMOD) : this.a11yClickSupport && this.updateEventInfoForA11yClick(t); }
    resolveAction(t) { XT(t) || (this.populateAction(t, QT(t)), eM(t, !0)); }
    resolveParentAction(t) { let n = Ac(t), o = n && Sc(n); Xp(t); let r = o && this.getParentNode(o); r && this.populateAction(t, r); }
    populateAction(t, n) { let o = n; for (; o && o !== YT(t) && (o.nodeType === Node.ELEMENT_NODE && this.populateActionOnElement(o, t), !Ac(t));)
        o = this.getParentNode(o); let r = Ac(t); if (r && (this.a11yClickSupport && this.preventDefaultForA11yClick(t), this.syntheticMouseEventSupport && (rn(t) === N.MOUSEENTER || rn(t) === N.MOUSELEAVE || rn(t) === N.POINTERENTER || rn(t) === N.POINTERLEAVE)))
        if (gP(bc(t), rn(t), Sc(r))) {
            let i = hP(bc(t), Sc(r));
            zT(t, i), ZT(t, Sc(r));
        }
        else
            Xp(t); }
    getParentNode(t) { let n = t[og.OWNER]; if (n)
        return n; let o = t.parentNode; return o?.nodeName === "#document-fragment" ? o?.host ?? null : o; }
    populateActionOnElement(t, n) { let o = this.parseActions(t), r = o[rn(n)]; r !== void 0 && KT(n, r, t), this.a11yClickSupport && this.populateClickOnlyAction(t, n, o); }
    parseActions(t) { let n = nP(t); if (!n) {
        let o = t.getAttribute(so.JSACTION);
        if (!o)
            n = TP, BT(t, n);
        else {
            if (n = oP(o), !n) {
                n = {};
                let r = o.split(MP);
                for (let i = 0; i < r.length; i++) {
                    let s = r[i];
                    if (!s)
                        continue;
                    let a = s.indexOf(vP.EVENT_ACTION_SEPARATOR), c = a !== -1, l = c ? s.substr(0, a).trim() : NP, u = c ? s.substr(a + 1).trim() : s;
                    n[l] = u;
                }
                rP(o, n);
            }
            BT(t, n);
        }
    } return n; }
    addA11yClickSupport(t, n, o) { this.a11yClickSupport = !0, this.updateEventInfoForA11yClick = t, this.preventDefaultForA11yClick = n, this.populateClickOnlyAction = o; }
}, nM = (function (e) { return e[e.I_AM_THE_JSACTION_FRAMEWORK = 0] = "I_AM_THE_JSACTION_FRAMEWORK", e; })(nM || {}), ng = class {
    dispatchDelegate;
    actionResolver;
    eventReplayer;
    eventReplayScheduled = !1;
    replayEventInfoWrappers = [];
    constructor(t, { actionResolver: n, eventReplayer: o } = {}) { this.dispatchDelegate = t, this.actionResolver = n, this.eventReplayer = o; }
    dispatch(t) { let n = new eg(t); this.actionResolver?.resolveEventType(t), this.actionResolver?.resolveAction(t); let o = n.getAction(); if (o && wP(o.element, n) && dP(n.getEvent()), this.eventReplayer && n.getIsReplay()) {
        this.scheduleEventInfoWrapperReplay(n);
        return;
    } this.dispatchDelegate(n); }
    scheduleEventInfoWrapperReplay(t) { this.replayEventInfoWrappers.push(t), !this.eventReplayScheduled && (this.eventReplayScheduled = !0, Promise.resolve().then(() => { this.eventReplayScheduled = !1, this.eventReplayer(this.replayEventInfoWrappers); })); }
};
function wP(e, t) { return e.tagName === "A" && (t.getEventType() === N.CLICK || t.getEventType() === N.CLICKMOD); }
var oM = Symbol.for("propagationStopped"), ig = { REPLAY: 101 };
var _P = "`preventDefault` called during event replay.";
var SP = "`composedPath` called during event replay.", Oc = class {
    dispatchDelegate;
    clickModSupport;
    actionResolver;
    dispatcher;
    constructor(t, n = !0) { this.dispatchDelegate = t, this.clickModSupport = n, this.actionResolver = new tg({ clickModSupport: n }), this.dispatcher = new ng(o => { this.dispatchToDelegate(o); }, { actionResolver: this.actionResolver }); }
    dispatch(t) { this.dispatcher.dispatch(t); }
    dispatchToDelegate(t) { for (t.getIsReplay() && RP(t), bP(t); t.getAction();) {
        if (OP(t), kc(t.getEventType()) && t.getAction().element !== t.getTargetElement() || (this.dispatchDelegate(t.getEvent(), t.getAction().name), AP(t)))
            return;
        this.actionResolver.resolveParentAction(t.eventInfo);
    } }
};
function bP(e) { let t = e.getEvent(), n = e.getEvent().stopPropagation.bind(t), o = () => { t[oM] = !0, n(); }; $n(t, "stopPropagation", o), $n(t, "stopImmediatePropagation", o); }
function AP(e) { return !!e.getEvent()[oM]; }
function RP(e) { let t = e.getEvent(), n = e.getTargetElement(), o = t.preventDefault.bind(t); $n(t, "target", n), $n(t, "eventPhase", ig.REPLAY), $n(t, "preventDefault", () => { throw o(), new Error(_P + ""); }), $n(t, "composedPath", () => { throw new Error(SP + ""); }); }
function OP(e) { let t = e.getEvent(), n = e.getAction()?.element; n && $n(t, "currentTarget", n, { configurable: !0 }); }
function $n(e, t, n, { configurable: o = !1 } = {}) { Object.defineProperty(e, t, { value: n, configurable: o }); }
function rM(e, t) { e.ecrd(n => { t.dispatch(n); }, nM.I_AM_THE_JSACTION_FRAMEWORK); }
function kP(e) { return e?.q ?? []; }
function xP(e) { e && ($T(e.c, e.et, e.h), $T(e.c, e.etc, e.h, !0)); }
function $T(e, t, n, o) { for (let r = 0; r < t.length; r++)
    e.removeEventListener(t[r], n, o); }
var PP = !1, iM = (() => { class e {
    static MOUSE_SPECIAL_SUPPORT = PP;
    containerManager;
    eventHandlers = {};
    browserEventTypeToExtraEventTypes = {};
    dispatcher = null;
    queuedEventInfos = [];
    constructor(n) { this.containerManager = n; }
    handleEvent(n, o, r) { let i = CP(n, o, o.target, r, Date.now()); this.handleEventInfo(i); }
    handleEventInfo(n) { if (!this.dispatcher) {
        JT(n, !0), this.queuedEventInfos?.push(n);
        return;
    } this.dispatcher(n); }
    addEvent(n, o, r) { if (n in this.eventHandlers || !this.containerManager || !e.MOUSE_SPECIAL_SUPPORT && iP.indexOf(n) >= 0)
        return; let i = (a, c, l) => { this.handleEvent(a, c, l); }; this.eventHandlers[n] = i; let s = cP(o || n); if (s !== n) {
        let a = this.browserEventTypeToExtraEventTypes[s] || [];
        a.push(n), this.browserEventTypeToExtraEventTypes[s] = a;
    } this.containerManager.addEventListener(s, a => c => { i(n, c, a); }, r); }
    replayEarlyEvents(n = window._ejsa) { n && (this.replayEarlyEventInfos(n.q), xP(n), delete window._ejsa); }
    replayEarlyEventInfos(n) { for (let o = 0; o < n.length; o++) {
        let r = n[o], i = this.getEventTypesForBrowserEventType(r.eventType);
        for (let s = 0; s < i.length; s++) {
            let a = tM(r);
            rg(a, i[s]), this.handleEventInfo(a);
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
function sM(e, t = window) { return kP(t._ejsas?.[e]); }
function sg(e, t = window) { t._ejsas && (t._ejsas[e] = void 0); }
function LP(e) { }
import "@angular/core/primitives/signals";
import "@angular/core/primitives/di";
typeof globalThis.ngServerMode > "u" && (globalThis.ngServerMode = typeof window > "u");
var Hc = Symbol("InputSignalNode#UNSET"), _M = ae(H({}, $i), { transformFn: void 0, applyValueToInputSignal(e, t) { cn(e, t); } }), P1 = Symbol();
function SM(e, t) { let n = Object.create(_M); n.value = e, n.transformFn = t?.transform; function o() { if (Bt(n), n.value === Hc) {
    let r = null;
    throw new C(-950, r);
} return n.value; } return o[J] = n, o; }
var nr = (function (e) { return e[e.Directive = 0] = "Directive", e[e.Component = 1] = "Component", e[e.Injectable = 2] = "Injectable", e[e.Pipe = 3] = "Pipe", e[e.NgModule = 4] = "NgModule", e; })(nr || {});
var FP = (function (e) { return e.Angular = "angular", e.ACX = "acx", e.Wiz = "wiz", e; })(FP || {}), aM = class {
    attributeName;
    constructor(t) { this.attributeName = t; }
    __NG_ELEMENT_ID__ = () => Ea(this.attributeName);
    toString() { return `HostAttributeToken ${this.attributeName}`; }
}, L1 = (() => { let e = new M(""); return e.__NG_ELEMENT_ID__ = t => { let n = _(); if (n === null)
    throw new C(204, !1); if (n.type & 2)
    return n.value; if (t & 8)
    return null; throw new C(204, !1); }, e; })();
function F1(e) { return new Pi; }
function cM(e, t) { return SM(e, t); }
function jP(e) { return SM(Hc, e); }
var j1 = (cM.required = jP, cM);
function lM(e, t) { return Of(t); }
function VP(e, t) { return kf(t); }
var V1 = (lM.required = VP, lM);
function H1(e, t) { return xf(t); }
function uM(e, t) { return Of(t); }
function HP(e, t) { return kf(t); }
var B1 = (uM.required = HP, uM);
function U1(e, t) { return xf(t); }
function bM(e, t) { let n = Object.create(_M), o = new Pi; n.value = e; function r() { return Bt(n), dM(n.value), n.value; } return r[J] = n, r.asReadonly = oo.bind(r), r.set = i => { n.equal(n.value, i) || (cn(n, i), o.emit(i)); }, r.update = i => { dM(n.value), r.set(i(n.value)); }, r.subscribe = o.subscribe.bind(o), r.destroyRef = o.destroyRef, r; }
function dM(e) { if (e === Hc)
    throw new C(952, !1); }
function fM(e, t) { return bM(e, t); }
function BP(e) { return bM(Hc, e); }
var $1 = (fM.required = BP, fM), AM = !0, rr = class {
}, q1 = Rt("ContentChildren", (e, t = {}) => H({ selector: e, first: !1, isViewQuery: !1, descendants: !1, emitDistinctChangesOnly: AM }, t), rr), G1 = Rt("ContentChild", (e, t = {}) => H({ selector: e, first: !0, isViewQuery: !1, descendants: !0 }, t), rr), W1 = Rt("ViewChildren", (e, t = {}) => H({ selector: e, first: !1, isViewQuery: !0, descendants: !0, emitDistinctChangesOnly: AM }, t), rr), z1 = Rt("ViewChild", (e, t) => H({ selector: e, first: !0, isViewQuery: !0, descendants: !0 }, t), rr);
function UP(e, t, n) { let o = new Ao(n); return Promise.resolve(o); }
function pM(e) { for (let t = e.length - 1; t >= 0; t--)
    if (e[t] !== void 0)
        return e[t]; }
var $P = (() => { class e {
    zone = E(G);
    changeDetectionScheduler = E(ze);
    applicationRef = E(qe);
    applicationErrorHandler = E(Mt);
    _onMicrotaskEmptySubscription;
    initialize() { this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({ next: () => { this.changeDetectionScheduler.runningTick || this.zone.run(() => { try {
            this.applicationRef.dirtyFlags |= 1, this.applicationRef._tick();
        }
        catch (n) {
            this.applicationErrorHandler(n);
        } }); } })); }
    ngOnDestroy() { this._onMicrotaskEmptySubscription?.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = U({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), qP = new M("", { factory: () => !1 });
function GP({ ngZoneFactory: e, scheduleInRootZone: t }) { return e ??= () => new G(ae(H({}, RM()), { scheduleInRootZone: t })), [{ provide: io, useValue: !1 }, { provide: G, useFactory: e }, { provide: Fe, multi: !0, useFactory: () => { let n = E($P, { optional: !0 }); return () => n.initialize(); } }, { provide: Fe, multi: !0, useFactory: () => { let n = E(WP); return () => { n.initialize(); }; } }, { provide: Es, useValue: t ?? Jl }]; }
function Q1(e) { let t = e?.scheduleInRootZone, n = GP({ ngZoneFactory: () => { let o = RM(e); return o.scheduleInRootZone = t, o.shouldCoalesceEventChangeDetection && ee("NgZone_CoalesceEvent"), new G(o); }, scheduleInRootZone: t }); return Ye([{ provide: qP, useValue: !0 }, n]); }
function RM(e) { return { enableLongStackTrace: !1, shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1, shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1 }; }
var WP = (() => { class e {
    subscription = new qn;
    initialized = !1;
    zone = E(G);
    pendingTasks = E(Tt);
    initialize() { if (this.initialized)
        return; this.initialized = !0; let n = null; !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (n = this.pendingTasks.add()), this.zone.runOutsideAngular(() => { this.subscription.add(this.zone.onStable.subscribe(() => { G.assertNotInAngularZone(), queueMicrotask(() => { n !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(n), n = null); }); })); }), this.subscription.add(this.zone.onUnstable.subscribe(() => { G.assertInAngularZone(), n ??= this.pendingTasks.add(); })); }
    ngOnDestroy() { this.subscription.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = U({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
var Pc = new M(""), zP = new M("");
function Li(e) { return !e.moduleRef; }
function OM(e) { let t = Li(e) ? e.r3Injector : e.moduleRef.injector, n = t.get(G); return n.run(() => { Li(e) ? e.r3Injector.resolveInjectorInitializers() : e.moduleRef.resolveInjectorInitializers(); let o = t.get(Mt), r; if (n.runOutsideAngular(() => { r = n.onError.subscribe({ next: o }); }), Li(e)) {
    let i = () => t.destroy(), s = e.platformInjector.get(Pc);
    s.add(i), t.onDestroy(() => { r.unsubscribe(), s.delete(i); });
}
else {
    let i = () => e.moduleRef.destroy(), s = e.platformInjector.get(Pc);
    s.add(i), e.moduleRef.onDestroy(() => { Vr(e.allPlatformModules, e.moduleRef), r.unsubscribe(), s.delete(i); });
} return ZP(o, n, () => { let i = t.get(Tt), s = i.add(), a = t.get(Zf); return a.runInitializers(), a.donePromise.then(() => { let c = t.get(qp, Oi); if (OD(c || Oi), !t.get(zP, !0))
    return Li(e) ? t.get(qe) : (e.allPlatformModules.push(e.moduleRef), e.moduleRef); if (Li(e)) {
    let u = t.get(qe);
    return e.rootComponent !== void 0 && u.bootstrap(e.rootComponent), u;
}
else
    return kM?.(e.moduleRef, e.allPlatformModules), e.moduleRef; }).finally(() => { i.remove(s); }); }); }); }
var kM;
function gM() { kM = QP; }
function QP(e, t) { let n = e.injector.get(qe); if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach(o => n.bootstrap(o));
else if (e.instance.ngDoBootstrap)
    e.instance.ngDoBootstrap(n);
else
    throw new C(-403, !1); t.push(e); }
function ZP(e, t, n) { try {
    let o = n();
    return zf(o) ? o.catch(r => { throw t.runOutsideAngular(() => e(r)), r; }) : o;
}
catch (o) {
    throw t.runOutsideAngular(() => e(o)), o;
} }
var xM = (() => { class e {
    _injector;
    _modules = [];
    _destroyListeners = [];
    _destroyed = !1;
    constructor(n) { this._injector = n; }
    bootstrapModuleFactory(n, o) { let r = [wc(), ...o?.applicationProviders ?? [], ou], i = eI(n.moduleType, this.injector, r); return gM(), OM({ moduleRef: i, allPlatformModules: this._modules, platformInjector: this.injector }); }
    bootstrapModule(n, o = []) { let r = Kf({}, o); return gM(), UP(this.injector, r, n).then(i => this.bootstrapModuleFactory(i, r)); }
    onDestroy(n) { this._destroyListeners.push(n); }
    get injector() { return this._injector; }
    destroy() { if (this._destroyed)
        throw new C(404, !1); this._modules.slice().forEach(o => o.destroy()), this._destroyListeners.forEach(o => o()); let n = this._injector.get(Pc, null); n && (n.forEach(o => o()), n.clear()), this._destroyed = !0; }
    get destroyed() { return this._destroyed; }
    static \u0275fac = function (o) { return new (o || e)(he(le)); };
    static \u0275prov = U({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })(), or = null;
function YP(e) { if (Bc())
    throw new C(400, !1); Yf(), or = typeof ngServerMode > "u" || !ngServerMode ? e : null; let t = e.get(xM); return LM(e), t; }
function KP(e, t, n = []) { let o = `Platform: ${t}`, r = new M(o); return (i = []) => { let s = Bc(); if (!s) {
    let a = [...n, ...i, { provide: r, useValue: !0 }];
    s = e?.(a) ?? YP(PM(a, o));
} return typeof ngServerMode < "u" && ngServerMode ? s : JP(r); }; }
function PM(e = [], t) { return le.create({ name: t, providers: [{ provide: yl, useValue: "platform" }, { provide: Pc, useValue: new Set([() => or = null]) }, ...e] }); }
function JP(e) { let t = Bc(); if (!t)
    throw new C(-401, !1); return t; }
function Bc() { return typeof ngServerMode < "u" && ngServerMode ? null : or?.get(xM) ?? null; }
function Z1() { Bc()?.destroy(); }
function XP(e = []) { if (or)
    return or; let t = PM(e); return (typeof ngServerMode > "u" || !ngServerMode) && (or = t), Yf(), LM(t), t; }
function Y1(e) { return { provide: Od, useValue: e, multi: !0 }; }
function LM(e) { let t = e.get(Od, null); ss(e, () => { t?.forEach(n => n()); }); }
function K1(e) { return Ye([]); }
function J1() { return !1; }
function X1() { }
var xc = new WeakSet, hM = "";
function mM(e) { return e.get(Sa, jd); }
function eL() { let e = [{ provide: Sa, useFactory: () => { let t = !0; if (typeof ngServerMode > "u" || !ngServerMode) {
            let n = E(Ot);
            t = !!window._ejsas?.[n];
        } return t && ee("NgEventReplay"), t; } }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: Fe, useValue: () => { let t = E(qe), { injector: n } = t; if (!xc.has(t)) {
        let o = E(mi);
        if (mM(n)) {
            wv();
            let r = n.get(Ot), i = Mv(r, (s, a, c) => { s.nodeType === Node.ELEMENT_NODE && (Tv(s, a, c), Bd(s, o)); });
            t.onDestroy(i);
        }
    } }, multi: !0 }, { provide: bi, useFactory: () => { let t = E(qe), { injector: n } = t; return () => { if (!mM(n) || xc.has(t))
        return; xc.add(t); let o = n.get(Ot); t.onDestroy(() => { xc.delete(t), typeof ngServerMode < "u" && !ngServerMode && sg(o); }), t.whenStable().then(() => { if (t.destroyed)
        return; let r = n.get($d); tL(r, n); let i = n.get(mi); i.get(hM)?.forEach(Ud), i.delete(hM); let s = r.instance; vi(n) ? t.onDestroy(() => s.cleanUp()) : s.cleanUp(); }); }; }, multi: !0 }), e; }
var tL = (e, t) => { let n = t.get(Ot), o = window._ejsas[n], r = e.instance = new iM(new Rc(o.c)); for (let a of o.et)
    r.addEvent(a); for (let a of o.etc)
    r.addEvent(a); let i = sM(n); r.replayEarlyEventInfos(i), sg(n); let s = new Oc(a => { oL(t, a, a.currentTarget); }); rM(r, s); };
function nL(e, t, n) { let o = new Map, r = t[Wt], i = e.cleanup; if (!i || !r)
    return o; for (let s = 0; s < i.length;) {
    let a = i[s++], c = i[s++];
    if (typeof a != "string")
        continue;
    let l = a;
    if (!WT(l))
        continue;
    kc(l) ? n.capture.add(l) : n.regular.add(l);
    let u = F(t[c]);
    s++;
    let d = i[s++];
    (typeof d == "boolean" || d >= 0) && (o.has(u) ? o.get(u).push(l) : o.set(u, [l]));
} return o; }
function oL(e, t, n) { let o = (n && n.getAttribute(qo)) ?? ""; /d\d+/.test(o) ? rL(o, e, t, n) : t.eventPhase === ig.REPLAY && qd(t, n); }
function rL(e, t, n, o) { let r = t.get(Ev); r.push({ event: n, currentTarget: o }), Ft(t, e, iL(r)); }
function iL(e) { return t => { let n = new Set(t), o = []; for (let { event: r, currentTarget: i } of e) {
    let s = i.getAttribute(qo);
    n.has(s) ? qd(r, i) : o.push({ event: r, currentTarget: i });
} e.length = 0, e.push(...o); }; }
var vM = !1, yM = !1, EM = !1, sL = 1e4;
function aL() { vM || (vM = !0, Ov(), ND(), hC(), wD(), fI(), HE(), IE(), Fy()); }
function cL() { yM || (yM = !0, xD(), dE(), mE()); }
function lL() { EM || (EM = !0, Bv()); }
function uL(e) { return e.whenStable(); }
var e0 = "ngcm";
function t0() { let e = [{ provide: jn, useFactory: () => { let t = !0; return (typeof ngServerMode > "u" || !ngServerMode) && (t = !!E(Bo, { optional: !0 })?.get(ba, null)), t && ee("NgHydration"), t; } }, { provide: Fe, useValue: () => { if (Cf(!1), typeof ngServerMode < "u" && ngServerMode)
            return; let t = E(Yt); E(jn) && ($v(t), aL()); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: Ld, useFactory: () => E(jn) }, { provide: bi, useFactory: () => { if (E(jn)) {
        let t = E(qe);
        return () => { uL(t).then(() => { t.destroyed || Tf(t); }); };
    } return () => { }; }, multi: !0 }), Ye(e); }
function n0() { return [{ provide: Fd, useFactory: () => E(jn) }, { provide: Fe, useValue: () => { E(jn) && (cL(), Cf(!0), ee("NgI18nHydration")); }, multi: !0 }]; }
function o0() { let e = [eL(), { provide: Vd, useValue: !0 }, { provide: kt, useClass: _v }, { provide: Fe, useValue: () => { lL(), ee("NgIncrementalHydration"); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: bi, useFactory: () => { let t = E(le), n = E(Yt); return () => { let o = Uv(t), r = cE(n, n.body); LI(t, o, r), Vv(n, t); }; }, multi: !0 }), e; }
var IM = sL - 1e3, lg = class {
    openTasks = new Map;
    add(t) { this.openTasks.set(t, new Error("Task stack tracking error")); }
    remove(t) { this.openTasks.delete(t); }
};
function r0() { let e = new lg, { openTasks: t } = e; return Ye([{ provide: Xl, useValue: e }, AI(() => { console.warn("Stability debugging utility was provided in production mode. This will cause debug code to be included in production bundles. If this is intentional because you are debugging stability issues in a production environment, you can ignore this warning."); let n = E(G), o = E(qe), r = null; typeof Zone < "u" && n.run(() => { r = Zone.current.get("TaskTrackingZone"); }), n.runOutsideAngular(() => { let i = setTimeout(() => { if (console.debug(`---- Application did not stabilize within ${IM / 1e3} seconds ----`), typeof Zone < "u" && !r && console.info('Zone.js is present but no TaskTrackingZone found. To enable better debugging of tasks in the Angular Zone, import "zone.js/plugins/task-tracking" in your application.'), r?.macroTasks?.length) {
        console.group("Macrotasks keeping Angular Zone unstable:");
        for (let s of r?.macroTasks ?? [])
            console.debug(s.creationLocation.stack);
        console.groupEnd();
    } console.group("PendingTasks keeping application unstable:"); for (let s of t.values())
        console.debug(s.stack); console.groupEnd(); }, IM); o.whenStable().then(() => { clearTimeout(i); }); }); })]); }
function i0(e) { let t = Lf(e); if (!t)
    throw FM(e); return new Ao(t); }
function s0(e) { let t = Lf(e); if (!t)
    throw FM(e); return t; }
function FM(e) { return new C(920, !1); }
var dL = (() => { class e {
    static __NG_ELEMENT_ID__ = fL;
} return e; })();
function fL(e) { return pL(_(), h(), (e & 16) === 16); }
function pL(e, t, n) { if (Te(e) && !n) {
    let o = Ee(e.index, t);
    return new tn(o, o);
}
else if (e.type & 175) {
    let o = t[ne];
    return new tn(o, t);
} return null; }
var ug = class extends dL {
}, DM = class extends ug {
}, Lc = class {
    constructor() { }
    supports(t) { return ni(t); }
    create(t) { return new dg(t); }
}, gL = (e, t) => t, dg = class {
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
    constructor(t) { this._trackByFn = t || gL; }
    forEachItem(t) { let n; for (n = this._itHead; n !== null; n = n._next)
        t(n); }
    forEachOperation(t) { let n = this._itHead, o = this._removalsHead, r = 0, i = null; for (; n || o;) {
        let s = !o || n && n.currentIndex < CM(o, r, i) ? n : o, a = CM(s, r, i), c = s.currentIndex;
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
    diff(t) { if (t == null && (t = []), !ni(t))
        throw new C(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._itHead, o = !1, r, i, s; if (Array.isArray(t)) {
        this.length = t.length;
        for (let a = 0; a < this.length; a++)
            i = t[a], s = this._trackByFn(a, i), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, i, s, a), o = !0) : (o && (n = this._verifyReinsertion(n, i, s, a)), Object.is(n.item, i) || this._addIdentityChange(n, i)), n = n._next;
    }
    else
        r = 0, bE(t, a => { s = this._trackByFn(r, a), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, a, s, r), o = !0) : (o && (n = this._verifyReinsertion(n, a, s, r)), Object.is(n.item, a) || this._addIdentityChange(n, a)), n = n._next, r++; }), this.length = r; return this._truncate(n), this.collection = t, this.isDirty; }
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
    _mismatch(t, n, o, r) { let i; return t === null ? i = this._itTail : (i = t._prev, this._remove(t)), t = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, i, r)) : (t = this._linkedRecords === null ? null : this._linkedRecords.get(o, r), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, i, r)) : t = this._addAfter(new fg(n, o), i, r)), t; }
    _verifyReinsertion(t, n, o, r) { let i = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null); return i !== null ? t = this._reinsertAfter(i, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t; }
    _truncate(t) { for (; t !== null;) {
        let n = t._next;
        this._addToRemovals(this._unlink(t)), t = n;
    } this._unlinkedRecords !== null && this._unlinkedRecords.clear(), this._additionsTail !== null && (this._additionsTail._nextAdded = null), this._movesTail !== null && (this._movesTail._nextMoved = null), this._itTail !== null && (this._itTail._next = null), this._removalsTail !== null && (this._removalsTail._nextRemoved = null), this._identityChangesTail !== null && (this._identityChangesTail._nextIdentityChange = null); }
    _reinsertAfter(t, n, o) { this._unlinkedRecords !== null && this._unlinkedRecords.remove(t); let r = t._prevRemoved, i = t._nextRemoved; return r === null ? this._removalsHead = i : r._nextRemoved = i, i === null ? this._removalsTail = r : i._prevRemoved = r, this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _moveAfter(t, n, o) { return this._unlink(t), this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _addAfter(t, n, o) { return this._insertAfter(t, n, o), this._additionsTail === null ? this._additionsTail = this._additionsHead = t : this._additionsTail = this._additionsTail._nextAdded = t, t; }
    _insertAfter(t, n, o) { let r = n === null ? this._itHead : n._next; return t._next = r, t._prev = n, r === null ? this._itTail = t : r._prev = t, n === null ? this._itHead = t : n._next = t, this._linkedRecords === null && (this._linkedRecords = new Fc), this._linkedRecords.put(t), t.currentIndex = o, t; }
    _remove(t) { return this._addToRemovals(this._unlink(t)); }
    _unlink(t) { this._linkedRecords !== null && this._linkedRecords.remove(t); let n = t._prev, o = t._next; return n === null ? this._itHead = o : n._next = o, o === null ? this._itTail = n : o._prev = n, t; }
    _addToMoves(t, n) { return t.previousIndex === n || (this._movesTail === null ? this._movesTail = this._movesHead = t : this._movesTail = this._movesTail._nextMoved = t), t; }
    _addToRemovals(t) { return this._unlinkedRecords === null && (this._unlinkedRecords = new Fc), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, this._removalsTail === null ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t; }
    _addIdentityChange(t, n) { return t.item = n, this._identityChangesTail === null ? this._identityChangesTail = this._identityChangesHead = t : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = t, t; }
}, fg = class {
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
}, pg = class {
    _head = null;
    _tail = null;
    add(t) { this._head === null ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t); }
    get(t, n) { let o; for (o = this._head; o !== null; o = o._nextDup)
        if ((n === null || n <= o.currentIndex) && Object.is(o.trackById, t))
            return o; return null; }
    remove(t) { let n = t._prevDup, o = t._nextDup; return n === null ? this._head = o : n._nextDup = o, o === null ? this._tail = n : o._prevDup = n, this._head === null; }
}, Fc = class {
    map = new Map;
    put(t) { let n = t.trackById, o = this.map.get(n); o || (o = new pg, this.map.set(n, o)), o.add(t); }
    get(t, n) { let o = t, r = this.map.get(o); return r ? r.get(t, n) : null; }
    remove(t) { let n = t.trackById; return this.map.get(n).remove(t) && this.map.delete(n), t; }
    get isEmpty() { return this.map.size === 0; }
    clear() { this.map.clear(); }
};
function CM(e, t, n) { let o = e.previousIndex; if (o === null)
    return o; let r = 0; return n && o < n.length && (r = n[o]), o + t + r; }
var jc = class {
    constructor() { }
    supports(t) { return t instanceof Map || ic(t); }
    create() { return new gg; }
}, gg = class {
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
    else if (!(t instanceof Map || ic(t)))
        throw new C(900, !1); return this.check(t) ? this : null; }
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
    } let o = new hg(t); return this._records.set(t, o), o.currentValue = n, this._addToAdditions(o), o; }
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
}, hg = class {
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
function TM() { return new jM([new Lc]); }
var jM = (() => { class e {
    factories;
    static \u0275prov = U({ token: e, providedIn: "root", factory: TM });
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o != null) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = E(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || TM()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o != null)
        return o; throw new C(901, !1); }
} return e; })();
function MM() { return new VM([new jc]); }
var VM = (() => { class e {
    static \u0275prov = U({ token: e, providedIn: "root", factory: MM });
    factories;
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = E(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || MM()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o)
        return o; throw new C(901, !1); }
} return e; })(), hL = [new jc], mL = [new Lc], a0 = new jM(mL), c0 = new VM(hL), l0 = KP(null, "core", []), u0 = (() => { class e {
    constructor(n) { }
    static \u0275fac = function (o) { return new (o || e)(he(qe)); };
    static \u0275mod = jf({ type: e });
    static \u0275inj = mr({});
} return e; })();
function d0(e) { let { rootComponent: t, appProviders: n, platformProviders: o, platformRef: r } = e; if (V(k.BootstrapApplicationStart), typeof ngServerMode < "u" && ngServerMode && !r)
    throw new C(-401, !1); try {
    let i = r?.injector ?? XP(o), s = [wc(), ou, ...n || []], a = new ri({ providers: s, parent: i, debugName: "", runEnvironmentInitializers: !1 });
    return OM({ r3Injector: a.injector, platformInjector: i, rootComponent: t });
}
catch (i) {
    return Promise.reject(i);
}
finally {
    V(k.BootstrapApplicationEnd);
} }
var mg = class {
    views = [];
    indexByContent = new Map;
    add(t) { let n = JSON.stringify(t); if (!this.indexByContent.has(n)) {
        let o = this.views.length;
        return this.views.push(t), this.indexByContent.set(n, o), o;
    } return this.indexByContent.get(n); }
    getAll() { return this.views; }
}, vL = 0;
function HM(e) { return e.ssrId || (e.ssrId = `t${vL++}`), e.ssrId; }
function BM(e, t, n) { let o = []; return No(e, t, n, o), o.length; }
function yL(e) { let t = []; return Ka(e, t), t.length; }
function UM(e, t) { let n = e[q]; return n && !n.hasAttribute(Vo) ? Vc(n, e, null, t) : null; }
function $M(e, t) { let n = wr(e[q]), o = UM(n, t); if (o === null)
    return; let r = F(n[q]), i = e[Z], s = Vc(r, i, null, t), a = n[T], c = `${o}|${s}`; a.setAttribute(r, vo, c); }
function f0(e, t) { let n = e.injector, o = fE(n), r = vi(n), i = new mg, s = new Map, a = e._views, c = n.get(Sa, jd), l = { regular: new Set, capture: new Set }, u = new Map, d = e.injector.get(Ot); for (let g of a) {
    let m = Gd(g);
    if (m !== null) {
        let y = { serializedViewCollection: i, corruptedTextNodes: s, isI18nHydrationEnabled: o, isIncrementalHydrationEnabled: r, i18nChildren: new Map, eventTypesToReplay: l, shouldReplayEvents: c, appId: d, deferBlocks: u };
        X(m) ? $M(m, y) : UM(m, y), TL(s, t);
    }
} let f = i.getAll(), p = n.get(Bo); if (p.set(ba, f), u.size > 0) {
    let g = {};
    for (let [m, y] of u.entries())
        g[m] = y;
    p.set(Aa, g);
} return l; }
function EL(e, t, n, o, r) { let i = [], s = ""; for (let a = W; a < e.length; a++) {
    let c = e[a], l, u, d;
    if (it(c) && (c = c[I], X(c))) {
        u = yL(c) + 1, $M(c, r);
        let p = wr(c[q]);
        d = { [Na]: p[v].ssrId, [bt]: u };
    }
    if (!d) {
        let p = c[v];
        p.type === 1 ? (l = p.ssrId, u = 1) : (l = HM(p), u = BM(p, c, p.firstChild)), d = { [Na]: l, [bt]: u };
        let g = !1;
        if (vI(n[v], t)) {
            let m = we(n, t), y = ge(n[v], t);
            if (r.isIncrementalHydrationEnabled && y.hydrateTriggers !== null) {
                let D = `d${r.deferBlocks.size}`;
                y.hydrateTriggers.has(7) && (g = !0);
                let x = [];
                Ka(e, x);
                let re = { [bt]: x.length, [gi]: m[Lt] }, Ge = IL(y.hydrateTriggers);
                Ge.length > 0 && (re[hi] = Ge), o !== null && (re[Pd] = o), r.deferBlocks.set(D, re);
                let Pe = F(e);
                Pe !== void 0 ? Pe.nodeType === Node.COMMENT_NODE && NM(Pe, D) : NM(Pe, D), g || NL(y, x, D, r), o = D, d[_a] = D;
            }
            d[gi] = m[Lt];
        }
        g || Object.assign(d, qM(e[a], o, r));
    }
    let f = JSON.stringify(d);
    if (i.length > 0 && f === s) {
        let p = i[i.length - 1];
        p[fi] ??= 1, p[fi]++;
    }
    else
        s = f, i.push(d);
} return i; }
function IL(e) { let t = new Set([0, 1, 2, 5]), n = []; for (let [o, r] of e)
    t.has(o) && (r === null ? n.push(o) : r.type === 5 ? n.push({ trigger: o, delay: r.delay }) : n.push({ trigger: o, intersectionObserverOptions: r.intersectionObserverOptions })); return n; }
function Fi(e, t, n, o) { let r = t.index - I; e[pi] ??= {}, e[pi][r] ??= aE(t, n, o); }
function ag(e, t) { let n = typeof t == "number" ? t : t.index - I; e[$o] ??= [], e[$o].includes(n) || e[$o].push(n); }
function qM(e, t = null, n) { let o = {}, r = e[v], i = pE(r, n), s = n.shouldReplayEvents ? nL(r, e, n.eventTypesToReplay) : null; for (let a = I; a < r.bindingStartIndex; a++) {
    let c = r.data[a], l = a - I, u = gE(e, a, n);
    if (u) {
        o[wa] ??= {}, o[wa][l] = u.caseQueue;
        for (let d of u.disconnectedNodes)
            ag(o, d);
        for (let d of u.disjointNodes) {
            let f = r.data[d + I];
            Fi(o, f, e, i);
        }
        continue;
    }
    if (ya(c) && !Go(c)) {
        if (X(e[a]) && c.tView && (o[Ma] ??= {}, o[Ma][l] = HM(c.tView)), Jo(c, e) && ML(c)) {
            ag(o, c);
            continue;
        }
        if (Array.isArray(c.projection)) {
            for (let d of c.projection)
                if (d)
                    if (!Array.isArray(d))
                        !Tl(d) && !Ho(d) && (Jo(d, e) ? ag(o, d) : Fi(o, d, e, i));
                    else
                        throw Jy(F(e[a]));
        }
        if (DL(o, c, e, i), X(e[a])) {
            let d = e[a][q];
            if (Array.isArray(d)) {
                let f = F(d);
                f.hasAttribute(Vo) || Vc(f, d, t, n);
            }
            o[Uo] ??= {}, o[Uo][l] = EL(e[a], c, e, t, n);
        }
        else if (Array.isArray(e[a]) && !$m(c)) {
            let d = F(e[a][q]);
            d.hasAttribute(Vo) || Vc(d, e[a], t, n);
        }
        else if (c.type & 8)
            o[di] ??= {}, o[di][l] = BM(r, e, c.child);
        else if (c.type & 144) {
            let d = c.next;
            for (; d !== null && d.type & 144;)
                d = d.next;
            d && !Ho(d) && Fi(o, d, e, i);
        }
        else if (c.type & 1) {
            let d = F(e[a]);
            zd(n, d);
        }
        if (s && c.type & 2) {
            let d = F(e[a]);
            s.has(d) && Hd(d, s.get(d), t);
        }
    }
} return o; }
function DL(e, t, n, o) { Tl(t) || (t.projectionNext && t.projectionNext !== t.next && !Ho(t.projectionNext) && Fi(e, t.projectionNext, n, o), t.prev === null && t.parent !== null && Jo(t.parent, n) && !Jo(t, n) && Fi(e, t, n, o)); }
function CL(e) { let t = e[$]; if (!t?.constructor)
    return !1; let n = z(t.constructor); return n?.encapsulation === Ue.ShadowDom || n?.encapsulation === Ue.ExperimentalIsolatedShadowDom; }
function Vc(e, t, n, o) { let r = t[T]; if (Qg(t) && !tc() || CL(t))
    return r.setAttribute(e, Vo, ""), null; {
    let i = qM(t, n, o), s = o.serializedViewCollection.add(i);
    return r.setAttribute(e, vo, s.toString()), s;
} }
function NM(e, t) { e.textContent = `ngh=${t}`; }
function TL(e, t) { for (let [n, o] of e)
    n.after(t.createComment(o)); }
function ML(e) { let t = e; for (; t != null;) {
    if (Te(t))
        return !0;
    t = t.parent;
} return !1; }
function NL(e, t, n, o) { let r = jv(e.hydrateTriggers); for (let i of r)
    o.eventTypesToReplay.regular.add(i); if (r.length > 0) {
    let i = t.filter(s => s.nodeType === Node.ELEMENT_NODE);
    for (let s of i)
        Hd(s, r, n);
} }
function p0(e) { return typeof e == "boolean" ? e : e != null && e !== "false"; }
function g0(e, t = NaN) { return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t; }
var wL = "\u{1F170}\uFE0F", Uc = !1;
function h0(e) { if (!Uc)
    return; let { startLabel: t } = GM(e); performance.mark(t); }
function m0(e) { if (!Uc)
    return; let { startLabel: t, labelName: n, endLabel: o } = GM(e); performance.mark(o), performance.measure(n, t, o), performance.clearMarks(t), performance.clearMarks(o); }
function GM(e) { let t = `${wL}:${e}`; return { labelName: t, startLabel: `start:${t}`, endLabel: `end:${t}` }; }
var wM = !1;
function v0() { if (!wM && (typeof performance > "u" || !performance.mark || !performance.measure)) {
    wM = !0, console.warn("Performance API is not supported on this platform");
    return;
} Uc = !0; }
function y0() { Uc = !1; }
function E0(e) { let t = e; for (; t;) {
    let n = sv(t);
    if (n !== null)
        for (let o = I; o < n.length; o++) {
            let r = n[o];
            if (!oe(r) && !X(r) || r[q] !== t)
                continue;
            let i = n[v], s = Ct(i, o);
            if (Te(s)) {
                let a = i.data[s.directiveStart + s.componentOffset], c = a.debugInfo?.className || a.type.name;
                if (c)
                    return c;
                break;
            }
        }
    t = t.parentNode;
} return null; }
function I0(e) { }
function D0(e) { return se({ usage: 1, kind: "directive", type: e.type }).compileDirectiveDeclaration(De, `ng:///${e.type.name}/\u0275fac.js`, e); }
function C0(e) { qf(e.type, e.decorators, e.ctorParameters ?? null, e.propDecorators ?? null); }
function T0(e) { TI(e.type, e.resolveDeferredDeps, (...t) => { let n = e.resolveMetadata(...t); qf(e.type, n.decorators, n.ctorParameters, n.propDecorators); }); }
function M0(e) { return se({ usage: 1, kind: "component", type: e.type }).compileComponentDeclaration(De, `ng:///${e.type.name}/\u0275cmp.js`, e); }
function N0(e) { return se({ usage: 1, kind: _L(e.target), type: e.type }).compileFactoryDeclaration(De, `ng:///${e.type.name}/\u0275fac.js`, e); }
function _L(e) { switch (e) {
    case nr.Directive: return "directive";
    case nr.Component: return "component";
    case nr.Injectable: return "injectable";
    case nr.Pipe: return "pipe";
    case nr.NgModule: return "NgModule";
} }
function w0(e) { return se({ usage: 1, kind: "injectable", type: e.type }).compileInjectableDeclaration(De, `ng:///${e.type.name}/\u0275prov.js`, e); }
function _0(e) { return se({ usage: 1, kind: "NgModule", type: e.type }).compileInjectorDeclaration(De, `ng:///${e.type.name}/\u0275inj.js`, e); }
function S0(e) { return se({ usage: 1, kind: "NgModule", type: e.type }).compileNgModuleDeclaration(De, `ng:///${e.type.name}/\u0275mod.js`, e); }
function b0(e) { return se({ usage: 1, kind: "pipe", type: e.type }).compilePipeDeclaration(De, `ng:///${e.type.name}/\u0275pipe.js`, e); }
var cg = Symbol("NOT_SET"), WM = new Set, SL = ae(H({}, $i), { kind: "afterRenderEffectPhase", consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !0, value: cg, cleanup: null, consumerMarkedDirty() { if (this.sequence.impl.executing) {
        if (this.sequence.lastPhase === null || this.sequence.lastPhase < this.phase)
            return;
        this.sequence.erroredOrDestroyed = !0;
    } this.sequence.scheduler.notify(7); }, phaseFn(e) { if (this.sequence.lastPhase = this.phase, !this.dirty)
        return this.signal; if (this.dirty = !1, this.value !== cg && !Wn(this))
        return this.signal; try {
        for (let r of this.cleanup ?? WM)
            r();
    }
    finally {
        this.cleanup?.clear();
    } let t = []; e !== void 0 && t.push(e), t.push(this.registerCleanupFn); let n = gt(this), o; try {
        o = this.userFn.apply(null, t);
    }
    finally {
        Ut(this, n);
    } return (this.value === cg || !this.equal(this.value, o)) && (this.value = o, this.version++), this.signal; } }), vg = class extends Kr {
    scheduler;
    lastPhase = null;
    nodes = [void 0, void 0, void 0, void 0];
    onDestroyFns = null;
    constructor(t, n, o, r, i, s = null) { super(t, [void 0, void 0, void 0, void 0], o, !1, i.get(He), s), this.scheduler = r; for (let a of cf) {
        let c = n[a];
        if (c === void 0)
            continue;
        let l = Object.create(SL);
        l.sequence = this, l.phase = a, l.userFn = c, l.dirty = !0, l.signal = () => (Bt(l), l.value), l.signal[J] = l, l.registerCleanupFn = u => (l.cleanup ??= new Set).add(u), this.nodes[a] = l, this.hooks[a] = u => l.phaseFn(u);
    } }
    afterRun() { super.afterRun(), this.lastPhase = null; }
    destroy() { if (this.onDestroyFns !== null)
        for (let t of this.onDestroyFns)
            t(); super.destroy(); for (let t of this.nodes)
        if (t)
            try {
                for (let n of t.cleanup ?? WM)
                    n();
            }
            finally {
                $t(t);
            } }
};
function A0(e, t) { if (typeof ngServerMode < "u" && ngServerMode)
    return Ha; let n = t?.injector ?? E(le), o = n.get(ze), r = n.get(Va), i = n.get(Qo, null, { optional: !0 }); r.impl ??= n.get(lf); let s = e; typeof s == "function" && (s = { mixedReadWrite: e }); let a = n.get(ro, null, { optional: !0 }), c = new vg(r.impl, [s.earlyRead, s.write, s.mixedReadWrite, s.read], a?.view, o, n, i?.snapshot(null)); return r.impl.register(c), c; }
function R0(e, t) { let n = z(e), o = t.elementInjector || Xn(); return new nn(n).create(o, t.projectableNodes, t.hostElement, t.environmentInjector, t.directives, t.bindings); }
function O0(e) { let t = z(e); if (!t)
    return null; let n = new nn(t); return { get selector() { return n.selector; }, get type() { return n.componentType; }, get inputs() { return n.inputs; }, get outputs() { return n.outputs; }, get ngContentSelectors() { return n.ngContentSelectors; }, get isStandalone() { return t.standalone; }, get isSignal() { return t.signals; } }; }
function k0(...e) { return e.reduce((t, n) => Object.assign(t, n, { providers: [...t.providers, ...n.providers] }), { providers: [] }); }
var x0 = new M("", { providedIn: "platform", factory: () => null }), P0 = new M("", { providedIn: "platform", factory: () => null }), L0 = new M("", { providedIn: "platform", factory: () => null });
export { Xw as ANIMATION_MODULE_TYPE, bi as APP_BOOTSTRAP_LISTENER, Ot as APP_ID, Qf as APP_INITIALIZER, Zf as ApplicationInitStatus, u0 as ApplicationModule, qe as ApplicationRef, ev as Attribute, xT as COMPILER_OPTIONS, e_ as CSP_NONCE, N_ as CUSTOM_ELEMENTS_SCHEMA, Da as ChangeDetectionStrategy, dL as ChangeDetectorRef, jx as Compiler, Nd as CompilerFactory, Rx as Component, rc as ComponentFactory, Ni as ComponentFactoryResolver, TE as ComponentRef, G1 as ContentChild, q1 as ContentChildren, Bx as DEFAULT_CURRENCY_CODE, Yt as DOCUMENT, Fn as DebugElement, wd as DebugEventListener, ci as DebugNode, dg as DefaultIterableDiffer, He as DestroyRef, kT as Directive, Fe as ENVIRONMENT_INITIALIZER, ui as ElementRef, DM as EmbeddedViewRef, be as EnvironmentInjector, Et as ErrorHandler, ht as EventEmitter, L1 as HOST_TAG_NAME, xm as Host, aM as HostAttributeToken, Px as HostBinding, Lx as HostListener, hl as INJECTOR, Am as Inject, Nw as Injectable, M as InjectionToken, le as Injector, kx as Input, jM as IterableDiffers, VM as KeyValueDiffers, qp as LOCALE_ID, aD as MAX_ANIMATION_TIMEOUT, LT as MissingTranslationStrategy, va as ModuleWithComponentFactories, w_ as NO_ERRORS_SCHEMA, Fx as NgModule, JE as NgModuleFactory, So as NgModuleRef, G as NgZone, Rm as Optional, xx as Output, Pi as OutputEmitterRef, Jw as PLATFORM_ID, Od as PLATFORM_INITIALIZER, Or as PendingTasks, Ox as Pipe, xM as PlatformRef, rr as Query, Qs as QueryList, x0 as REQUEST, L0 as REQUEST_CONTEXT, P0 as RESPONSE_INIT, aA as Renderer2, ti as RendererFactory2, Xs as RendererStyleFlags2, ME as Sanitizer, Vn as SecurityContext, Om as Self, $s as SimpleChange, km as SkipSelf, Ux as TRANSLATIONS, $x as TRANSLATIONS_FORMAT, Xr as TemplateRef, $R as Testability, _I as TestabilityRegistry, Bo as TransferState, Pm as Type, sN as VERSION, Gi as Version, z1 as ViewChild, W1 as ViewChildren, ac as ViewContainerRef, Ue as ViewEncapsulation, ug as ViewRef, Ty as afterEveryRender, uf as afterNextRender, A0 as afterRenderEffect, qx as asNativeElements, AN as assertInInjectionContext, $N as assertNotInReactiveContext, JP as assertPlatform, p0 as booleanAttribute, Un as computed, B1 as contentChild, U1 as contentChildren, R0 as createComponent, Ff as createEnvironmentInjector, XE as createNgModule, nR as createNgModuleRef, YP as createPlatform, KP as createPlatformFactory, Z1 as destroyPlatform, ru as effect, X1 as enableProdMode, VR as enableProfiling, gr as forwardRef, Lo as getDebugNode, i0 as getModuleFactory, s0 as getNgModuleById, Bc as getPlatform, qg as importProvidersFrom, E as inject, j1 as input, OE as inputBinding, J1 as isDevMode, MI as isSignal, Ir as isStandalone, Gf as isWritableSignal, zp as linkedSignal, Ye as makeEnvironmentProviders, n_ as makeStateKey, k0 as mergeApplicationConfig, $1 as model, g0 as numberAttribute, F1 as output, kE as outputBinding, l0 as platformCore, AI as provideAppInitializer, BN as provideBrowserGlobalErrorListeners, K1 as provideCheckNoChangesConfig, $g as provideEnvironmentInitializer, cS as provideNgReflectAttributes, Y1 as providePlatformInitializer, r0 as provideStabilityDebugging, Q1 as provideZoneChangeDetection, Vx as provideZonelessChangeDetection, O0 as reflectComponentType, P as resolveForwardRef, Kx as resource, ss as runInInjectionContext, SI as setTestabilityGetter, Kt as signal, SA as twoWayBinding, Ne as untracked, V1 as viewChild, H1 as viewChildren, sD as \u0275ANIMATIONS_DISABLED, fv as \u0275AcxChangeDetectionStrategy, pv as \u0275AcxViewEncapsulation, Va as \u0275AfterRenderManager, e0 as \u0275CLIENT_RENDER_MODE_FLAG, W as \u0275CONTAINER_HEADER_OFFSET, _f as \u0275CONTROL, ze as \u0275ChangeDetectionScheduler, rc as \u0275ComponentFactory, jR as \u0275Console, Oi as \u0275DEFAULT_LOCALE_ID, II as \u0275DEFER_BLOCK_CONFIG, kR as \u0275DEFER_BLOCK_DEPENDENCY_INTERCEPTOR, kt as \u0275DEHYDRATED_BLOCK_REGISTRY, Uf as \u0275DeferBlockBehavior, Y as \u0275DeferBlockState, zP as \u0275ENABLE_ROOT_COMPONENT_BOOTSTRAP, Ev as \u0275EVENT_REPLAY_QUEUE, Is as \u0275EffectScheduler, FP as \u0275Framework, xv as \u0275HydrationStatus, t_ as \u0275IMAGE_CONFIG, gv as \u0275IMAGE_CONFIG_DEFAULTS, yl as \u0275INJECTOR_SCOPE, P1 as \u0275INPUT_SIGNAL_BRAND_WRITE_TYPE, Mt as \u0275INTERNAL_APPLICATION_ERROR_HANDLER, o_ as \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION, jn as \u0275IS_HYDRATION_DOM_REUSE_ENABLED, Vd as \u0275IS_INCREMENTAL_HYDRATION_ENABLED, mi as \u0275JSACTION_BLOCK_ELEMENT_MAP, $d as \u0275JSACTION_EVENT_CONTRACT, Zs as \u0275LContext, ko as \u0275LocaleDataIndex, pn as \u0275NG_COMP_DEF, yr as \u0275NG_DIR_DEF, gn as \u0275NG_ELEMENT_ID, cr as \u0275NG_INJ_DEF, Ji as \u0275NG_MOD_DEF, Er as \u0275NG_PIPE_DEF, Yn as \u0275NG_PROV_DEF, Fs as \u0275NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, B as \u0275NO_CHANGE, Ao as \u0275NgModuleFactory, fr as \u0275NoopNgZone, wL as \u0275PERFORMANCE_MARK_PREFIX, qP as \u0275PROVIDED_NG_ZONE, GN as \u0275PROVIDED_ZONELESS, Tt as \u0275PendingTasksInternal, k as \u0275ProfilerEvent, fn as \u0275R3Injector, Us as \u0275ReflectionCapabilities, nn as \u0275Render3ComponentFactory, ca as \u0275Render3ComponentRef, bo as \u0275Render3NgModuleRef, _c as \u0275ResourceImpl, C as \u0275RuntimeError, J as \u0275SIGNAL, Av as \u0275SSR_CONTENT_INTEGRITY_MARKER, NI as \u0275TESTABILITY, wI as \u0275TESTABILITY_GETTER, EI as \u0275TimerScheduler, ja as \u0275TracingAction, Qo as \u0275TracingService, tn as \u0275ViewRef, Yi as \u0275XSS_SECURITY_URL, io as \u0275ZONELESS_ENABLED, ty as \u0275_sanitizeHtml, xa as \u0275_sanitizeUrl, An as \u0275allLeavingAnimations, zo as \u0275allowSanitizationBypassAndThrow, f0 as \u0275annotateForHydration, I0 as \u0275assertType, O_ as \u0275bypassSanitizationTrustHtml, L_ as \u0275bypassSanitizationTrustResourceUrl, x_ as \u0275bypassSanitizationTrustScript, k_ as \u0275bypassSanitizationTrustStyle, P_ as \u0275bypassSanitizationTrustUrl, KA as \u0275clearResolutionOfComponentResourcesQueue, TT as \u0275compileComponent, $p as \u0275compileDirective, DT as \u0275compileNgModule, CT as \u0275compileNgModuleDefs, UP as \u0275compileNgModuleFactory, OT as \u0275compilePipe, gO as \u0275controlUpdate, un as \u0275convertToBitFlags, rl as \u0275createInjector, XP as \u0275createOrReusePlatformInjector, a0 as \u0275defaultIterableDiffers, c0 as \u0275defaultKeyValueDiffers, wo as \u0275depsTracker, AE as \u0275devModeEqual, y0 as \u0275disableProfiling, v0 as \u0275enableProfiling, Jp as \u0275encapsulateResourceError, hp as \u0275findLocaleData, ET as \u0275flushModuleScopingQueueAsMuchAsPossible, pr as \u0275formatRuntimeError, yx as \u0275generateStandaloneInDeclarationsError, FR as \u0275getAsyncClassMetadataFn, E0 as \u0275getClosestComponentName, z as \u0275getComponentDef, Lo as \u0275getDebugNode, Hs as \u0275getDeferBlocks, $w as \u0275getDirectives, Ta as \u0275getDocument, Gw as \u0275getHostElement, vr as \u0275getInjectableDef, Se as \u0275getLContext, KO as \u0275getLocaleCurrencyCode, SD as \u0275getLocalePluralCase, Zx as \u0275getOutputDestroyRef, Qv as \u0275getSanitizationBypassType, HR as \u0275getTransferState, S_ as \u0275getUnknownElementStrictMode, A_ as \u0275getUnknownPropertyStrictMode, Ae as \u0275global, xE as \u0275inferTagNameFromDefinition, fL as \u0275injectChangeDetectorRef, d0 as \u0275internalCreateApplication, GP as \u0275internalProvideZoneChangeDetection, RI as \u0275isBoundToModule, YA as \u0275isComponentDefPendingResolution, ll as \u0275isEnvironmentProviders, uN as \u0275isInjectable, Tn as \u0275isNgModule, zf as \u0275isPromise, bI as \u0275isSubscribable, db as \u0275isViewDirty, fb as \u0275markForRefresh, ut as \u0275noSideEffects, Bp as \u0275patchComponentDefWithScope, ee as \u0275performanceMarkFeature, dc as \u0275promiseWithResolvers, wc as \u0275provideZonelessChangeDetectionInternal, BR as \u0275publishExternalGlobalUtil, p_ as \u0275readHydrationInfo, YO as \u0275registerLocaleData, wt as \u0275renderDeferBlockState, Dx as \u0275resetCompiledComponents, h_ as \u0275resetIncrementalHydrationEnabledWarnedForTests, mx as \u0275resetJitOptions, QE as \u0275resolveComponentResources, JA as \u0275restoreComponentResolutionQueue, tR as \u0275setAllowDuplicateNgModuleIdsForTest, LP as \u0275setAlternateWeakRefImpl, hT as \u0275setClassDebugInfo, qf as \u0275setClassMetadata, TI as \u0275setClassMetadataAsync, nt as \u0275setCurrentInjector, Yw as \u0275setDocument, pN as \u0275setInjectorProfilerContext, OD as \u0275setLocaleId, __ as \u0275setUnknownElementStrictMode, b_ as \u0275setUnknownPropertyStrictMode, h0 as \u0275startMeasuring, m0 as \u0275stopMeasuring, _r as \u0275store, vt as \u0275stringify, Up as \u0275transitiveScopesFor, fc as \u0275triggerResourceLoading, cN as \u0275truncateMiddle, JO as \u0275unregisterLocaleData, xt as \u0275unwrapSafeValue, UN as \u0275unwrapWritableSignal, t0 as \u0275withDomHydration, eL as \u0275withEventReplay, n0 as \u0275withI18nSupport, o0 as \u0275withIncrementalHydration, $C as \u0275\u0275ExternalStylesFeature, nr as \u0275\u0275FactoryTarget, aI as \u0275\u0275HostDirectivesFeature, Vf as \u0275\u0275InheritDefinitionFeature, Fm as \u0275\u0275NgOnChangesFeature, UC as \u0275\u0275ProvidersFeature, yy as \u0275\u0275advance, Hr as \u0275\u0275animateEnter, Br as \u0275\u0275animateEnterListener, Ur as \u0275\u0275animateLeave, fa as \u0275\u0275animateLeaveListener, Jf as \u0275\u0275ariaProperty, bC as \u0275\u0275attachSourceLocations, Xf as \u0275\u0275attribute, iC as \u0275\u0275classMap, Sp as \u0275\u0275classProp, dD as \u0275\u0275componentInstance, ID as \u0275\u0275conditional, yc as \u0275\u0275conditionalBranchCreate, ED as \u0275\u0275conditionalCreate, Tp as \u0275\u0275contentQuery, Np as \u0275\u0275contentQuerySignal, pD as \u0275\u0275control, fD as \u0275\u0275controlCreate, Hp as \u0275\u0275declareLet, FI as \u0275\u0275defer, CI as \u0275\u0275deferEnableTimerScheduling, BI as \u0275\u0275deferHydrateNever, XI as \u0275\u0275deferHydrateOnHover, qI as \u0275\u0275deferHydrateOnIdle, zI as \u0275\u0275deferHydrateOnImmediate, nD as \u0275\u0275deferHydrateOnInteraction, YI as \u0275\u0275deferHydrateOnTimer, iD as \u0275\u0275deferHydrateOnViewport, HI as \u0275\u0275deferHydrateWhen, KI as \u0275\u0275deferOnHover, UI as \u0275\u0275deferOnIdle, GI as \u0275\u0275deferOnImmediate, eD as \u0275\u0275deferOnInteraction, QI as \u0275\u0275deferOnTimer, oD as \u0275\u0275deferOnViewport, JI as \u0275\u0275deferPrefetchOnHover, $I as \u0275\u0275deferPrefetchOnIdle, WI as \u0275\u0275deferPrefetchOnImmediate, tD as \u0275\u0275deferPrefetchOnInteraction, ZI as \u0275\u0275deferPrefetchOnTimer, rD as \u0275\u0275deferPrefetchOnViewport, VI as \u0275\u0275deferPrefetchWhen, jI as \u0275\u0275deferWhen, tI as \u0275\u0275defineComponent, oI as \u0275\u0275defineDirective, U as \u0275\u0275defineInjectable, mr as \u0275\u0275defineInjector, jf as \u0275\u0275defineNgModule, rI as \u0275\u0275definePipe, Xo as \u0275\u0275directiveInject, xl as \u0275\u0275disableBindings, ap as \u0275\u0275domElement, dp as \u0275\u0275domElementContainer, up as \u0275\u0275domElementContainerEnd, Mc as \u0275\u0275domElementContainerStart, Cc as \u0275\u0275domElementEnd, Dc as \u0275\u0275domElementStart, Dp as \u0275\u0275domListener, pp as \u0275\u0275domProperty, Bf as \u0275\u0275domTemplate, sp as \u0275\u0275element, lp as \u0275\u0275elementContainer, Ri as \u0275\u0275elementContainerEnd, Tc as \u0275\u0275elementContainerStart, Ic as \u0275\u0275elementEnd, Ec as \u0275\u0275elementStart, kl as \u0275\u0275enableBindings, gT as \u0275\u0275getComponentDepsFactory, _D as \u0275\u0275getCurrentView, Jm as \u0275\u0275getInheritedFactory, mT as \u0275\u0275getReplaceMetadataURL, $D as \u0275\u0275i18n, GD as \u0275\u0275i18nApply, qD as \u0275\u0275i18nAttributes, vp as \u0275\u0275i18nEnd, yp as \u0275\u0275i18nExp, WD as \u0275\u0275i18nPostprocess, mp as \u0275\u0275i18nStart, he as \u0275\u0275inject, Ea as \u0275\u0275injectAttribute, AC as \u0275\u0275interpolate, RC as \u0275\u0275interpolate1, OC as \u0275\u0275interpolate2, kC as \u0275\u0275interpolate3, xC as \u0275\u0275interpolate4, PC as \u0275\u0275interpolate5, LC as \u0275\u0275interpolate6, FC as \u0275\u0275interpolate7, jC as \u0275\u0275interpolate8, VC as \u0275\u0275interpolateV, NE as \u0275\u0275invalidFactory, ns as \u0275\u0275invalidFactoryDep, Ep as \u0275\u0275listener, KD as \u0275\u0275loadQuery, Zl as \u0275\u0275namespaceHTML, Ql as \u0275\u0275namespaceMathML, zl as \u0275\u0275namespaceSVG, zD as \u0275\u0275nextContext, C0 as \u0275\u0275ngDeclareClassMetadata, T0 as \u0275\u0275ngDeclareClassMetadataAsync, M0 as \u0275\u0275ngDeclareComponent, D0 as \u0275\u0275ngDeclareDirective, N0 as \u0275\u0275ngDeclareFactory, w0 as \u0275\u0275ngDeclareInjectable, _0 as \u0275\u0275ngDeclareInjector, S0 as \u0275\u0275ngDeclareNgModule, b0 as \u0275\u0275ngDeclarePipe, aT as \u0275\u0275pipe, cT as \u0275\u0275pipeBind1, lT as \u0275\u0275pipeBind2, uT as \u0275\u0275pipeBind3, dT as \u0275\u0275pipeBind4, fT as \u0275\u0275pipeBindV, ZD as \u0275\u0275projection, QD as \u0275\u0275projectionDef, ip as \u0275\u0275property, WC as \u0275\u0275pureFunction0, zC as \u0275\u0275pureFunction1, QC as \u0275\u0275pureFunction2, ZC as \u0275\u0275pureFunction3, YC as \u0275\u0275pureFunction4, KC as \u0275\u0275pureFunction5, JC as \u0275\u0275pureFunction6, XC as \u0275\u0275pureFunction7, eT as \u0275\u0275pureFunction8, tT as \u0275\u0275pureFunctionV, JD as \u0275\u0275queryAdvance, YD as \u0275\u0275queryRefresh, SC as \u0275\u0275readContextLet, XD as \u0275\u0275reference, Pf as \u0275\u0275registerNgModuleType, MD as \u0275\u0275repeater, TD as \u0275\u0275repeaterCreate, CD as \u0275\u0275repeaterTrackByIdentity, DD as \u0275\u0275repeaterTrackByIndex, vT as \u0275\u0275replaceMetadata, Fl as \u0275\u0275resetView, tf as \u0275\u0275resolveBody, gy as \u0275\u0275resolveDocument, py as \u0275\u0275resolveWindow, Ll as \u0275\u0275restoreView, sy as \u0275\u0275sanitizeHtml, ef as \u0275\u0275sanitizeResourceUrl, cy as \u0275\u0275sanitizeScript, ay as \u0275\u0275sanitizeStyle, Xd as \u0275\u0275sanitizeUrl, dy as \u0275\u0275sanitizeUrlOrResourceUrl, qC as \u0275\u0275setComponentScope, GC as \u0275\u0275setNgModuleScope, _C as \u0275\u0275storeLet, rC as \u0275\u0275styleMap, _p as \u0275\u0275styleProp, Ip as \u0275\u0275syntheticHostListener, gp as \u0275\u0275syntheticHostProperty, Hf as \u0275\u0275template, pT as \u0275\u0275templateRefExtractor, pC as \u0275\u0275text, bp as \u0275\u0275textInterpolate, Nc as \u0275\u0275textInterpolate1, Ap as \u0275\u0275textInterpolate2, Rp as \u0275\u0275textInterpolate3, Op as \u0275\u0275textInterpolate4, kp as \u0275\u0275textInterpolate5, xp as \u0275\u0275textInterpolate6, Pp as \u0275\u0275textInterpolate7, Lp as \u0275\u0275textInterpolate8, Fp as \u0275\u0275textInterpolateV, ly as \u0275\u0275trustConstantHtml, uy as \u0275\u0275trustConstantResourceUrl, NC as \u0275\u0275twoWayBindingSet, Vp as \u0275\u0275twoWayListener, jp as \u0275\u0275twoWayProperty, fy as \u0275\u0275validateAttribute, Mp as \u0275\u0275viewQuery, wp as \u0275\u0275viewQuerySignal };
/*! Bundled license information:

@angular/core/fesm2022/_effect-chunk.mjs:
@angular/core/fesm2022/_not_found-chunk.mjs:
@angular/core/fesm2022/_untracked-chunk.mjs:
@angular/core/fesm2022/_attribute-chunk.mjs:
@angular/core/fesm2022/_debug_node-chunk.mjs:
@angular/core/fesm2022/_linked_signal-chunk.mjs:
@angular/core/fesm2022/_resource-chunk.mjs:
@angular/core/fesm2022/primitives-event-dispatch.mjs:
@angular/core/fesm2022/_weak_ref-chunk.mjs:
@angular/core/fesm2022/core.mjs:
  (**
   * @license Angular v21.1.0
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
