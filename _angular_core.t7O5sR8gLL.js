import "@nf-internal/chunk-FIE2NKNJ";
import { a as H, b as se, c as Qe, d as Gn, f as Dh, g as or, h as Ch, o as Th } from "@nf-internal/chunk-UMZMRDSE";
var ye = null, $i = !1, Bc = 1, $M = null, K = Symbol("SIGNAL");
function A(e) { let t = ye; return ye = e, t; }
function qi() { return ye; }
var Lt = { version: 0, lastCleanEpoch: 0, dirty: !1, producers: void 0, producersTail: void 0, consumers: void 0, consumersTail: void 0, recomputing: !1, consumerAllowSignalWrites: !1, consumerIsAlwaysLive: !1, kind: "unknown", producerMustRecompute: () => !1, producerRecomputeValue: () => { }, consumerMarkedDirty: () => { }, consumerOnSignalRead: () => { } };
function Ft(e) { if ($i)
    throw new Error(""); if (ye === null)
    return; ye.consumerOnSignalRead(e); let t = ye.producersTail; if (t !== void 0 && t.producer === e)
    return; let n, o = ye.recomputing; if (o && (n = t !== void 0 ? t.nextProducer : ye.producers, n !== void 0 && n.producer === e)) {
    ye.producersTail = n, n.lastReadVersion = e.version;
    return;
} let r = e.consumersTail; if (r !== void 0 && r.consumer === ye && (!o || QM(r, ye)))
    return; let i = Qn(ye), s = { producer: e, consumer: ye, nextProducer: n, prevConsumer: r, lastReadVersion: e.version, nextConsumer: void 0 }; ye.producersTail = s, t !== void 0 ? t.nextProducer = s : ye.producers = s, i && wh(e, s); }
function qM() { Bc++; }
function Wn(e) { if (!(Qn(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === Bc)) {
    if (!e.producerMustRecompute(e) && !zn(e)) {
        rr(e);
        return;
    }
    e.producerRecomputeValue(e), rr(e);
} }
function Mh(e) { if (e.consumers === void 0)
    return; let t = $i; $i = !0; try {
    for (let n = e.consumers; n !== void 0; n = n.nextConsumer) {
        let o = n.consumer;
        o.dirty || GM(o);
    }
}
finally {
    $i = t;
} }
function Nh() { return ye?.consumerAllowSignalWrites !== !1; }
function GM(e) { e.dirty = !0, Mh(e), e.consumerMarkedDirty?.(e); }
function rr(e) { e.dirty = !1, e.lastCleanEpoch = Bc; }
function vt(e) { return e && WM(e), A(e); }
function WM(e) { e.producersTail = void 0, e.recomputing = !0; }
function jt(e, t) { A(t), e && zM(e); }
function zM(e) { e.recomputing = !1; let t = e.producersTail, n = t !== void 0 ? t.nextProducer : e.producers; if (n !== void 0) {
    if (Qn(e))
        do
            n = Uc(n);
        while (n !== void 0);
    t !== void 0 ? t.nextProducer = void 0 : e.producers = void 0;
} }
function zn(e) { for (let t = e.producers; t !== void 0; t = t.nextProducer) {
    let n = t.producer, o = t.lastReadVersion;
    if (o !== n.version || (Wn(n), o !== n.version))
        return !0;
} return !1; }
function Vt(e) { if (Qn(e)) {
    let t = e.producers;
    for (; t !== void 0;)
        t = Uc(t);
} e.producers = void 0, e.producersTail = void 0, e.consumers = void 0, e.consumersTail = void 0; }
function wh(e, t) { let n = e.consumersTail, o = Qn(e); if (n !== void 0 ? (t.nextConsumer = n.nextConsumer, n.nextConsumer = t) : (t.nextConsumer = void 0, e.consumers = t), t.prevConsumer = n, e.consumersTail = t, !o)
    for (let r = e.producers; r !== void 0; r = r.nextProducer)
        wh(r.producer, r); }
function Uc(e) { let t = e.producer, n = e.nextProducer, o = e.nextConsumer, r = e.prevConsumer; if (e.nextConsumer = void 0, e.prevConsumer = void 0, o !== void 0 ? o.prevConsumer = r : t.consumersTail = r, r !== void 0)
    r.nextConsumer = o;
else if (t.consumers = o, !Qn(t)) {
    let i = t.producers;
    for (; i !== void 0;)
        i = Uc(i);
} return n; }
function Qn(e) { return e.consumerIsAlwaysLive || e.consumers !== void 0; }
function Gi(e) { $M?.(e); }
function QM(e, t) { let n = t.producersTail; if (n !== void 0) {
    let o = t.producers;
    do {
        if (o === e)
            return !0;
        if (o === n)
            break;
        o = o.nextProducer;
    } while (o !== void 0);
} return !1; }
function Wi(e, t) { return Object.is(e, t); }
function zi(e, t) { let n = Object.create(ZM); n.computation = e, t !== void 0 && (n.equal = t); let o = () => { if (Wn(n), Ft(n), n.value === ot)
    throw n.error; return n.value; }; return o[K] = n, Gi(n), o; }
var an = Symbol("UNSET"), cn = Symbol("COMPUTING"), ot = Symbol("ERRORED"), ZM = se(H({}, Lt), { value: an, dirty: !0, error: null, equal: Wi, kind: "computed", producerMustRecompute(e) { return e.value === an || e.value === cn; }, producerRecomputeValue(e) { if (e.value === cn)
        throw new Error(""); let t = e.value; e.value = cn; let n = vt(e), o, r = !1; try {
        o = e.computation(), A(null), r = t !== an && t !== ot && o !== ot && e.equal(t, o);
    }
    catch (i) {
        o = ot, e.error = i;
    }
    finally {
        jt(e, n);
    } if (r) {
        e.value = t;
        return;
    } e.value = o, e.version++; } });
function YM() { throw new Error; }
var _h = YM;
function Sh(e) { _h(e); }
function bh(e) { _h = e; }
var KM = null;
function Ah(e, t) { let n = Object.create(Qi); n.value = e, t !== void 0 && (n.equal = t); let o = () => JM(n); return o[K] = n, Gi(n), [o, s => ln(n, s), s => $c(n, s)]; }
function JM(e) { return Ft(e), e.value; }
function ln(e, t) { Nh() || Sh(e), e.equal(e.value, t) || (e.value = t, XM(e)); }
function $c(e, t) { Nh() || Sh(e), ln(e, t(e.value)); }
var Qi = se(H({}, Lt), { equal: Wi, value: void 0, kind: "signal" });
function XM(e) { e.version++, qM(), Mh(e), KM?.(e); }
var Rh = se(H({}, Lt), { consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !0, dirty: !0, kind: "effect" });
function kh(e) { if (e.dirty = !1, e.version > 0 && !zn(e))
    return; e.version++; let t = vt(e); try {
    e.cleanup(), e.fn();
}
finally {
    jt(e, t);
} }
var qc;
function Gc() { return qc; }
function rt(e) { let t = qc; return qc = e, t; }
var eN = Symbol("NotFound");
function Wc(e) { return e === eN || e?.name === "\u0275NotFound"; }
import { setActiveConsumer as Zn } from "@angular/core/primitives/signals";
import { isNotFound as tN } from "@angular/core/primitives/di";
var Yi = class {
    full;
    major;
    minor;
    patch;
    constructor(t) { this.full = t; let n = t.split("."); this.major = n[0], this.minor = n[1], this.patch = n.slice(2).join("."); }
}, Qc = new Yi("21.2.10"), al = (() => { let e = Qc.full; return `https://${e.includes("-next") || e.includes("-rc") || e === "0.0.0-PLACEHOLDER" ? "next" : `v${Qc.major}`}.angular.dev`; })();
var ts = "https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss", D = class extends Error {
    code;
    constructor(t, n) { super(dr(t, n)), this.code = t; }
};
function nN(e) { return `NG0${Math.abs(e)}`; }
function dr(e, t) { return `${nN(e)}${t ? ": " + t : ""}`; }
var be = globalThis;
function j(e) { for (let t in e)
    if (e[t] === j)
        return t; throw Error(""); }
function jh(e, t) { for (let n in t)
    t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]); }
function fr(e) {
    if (typeof e == "string")
        return e;
    if (Array.isArray(e))
        return `[${e.map(fr).join(", ")}]`;
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
function ns(e, t) { return e ? t ? `${e} ${t}` : e : t || ""; }
function oN(e, t = 100) { if (!e || t < 1 || e.length <= t)
    return e; if (t == 1)
    return e.substring(0, 1) + "..."; let n = Math.round(t / 2); return e.substring(0, n) + "..." + e.substring(e.length - n); }
var rN = j({ __forward_ref__: j });
function pr(e) { return e.__forward_ref__ = pr, e; }
function x(e) { return hr(e) ? e() : e; }
function hr(e) { return typeof e == "function" && e.hasOwnProperty(rN) && e.__forward_ref__ === pr; }
function Vh(e, t, n) { e != t && cl(n, e, t, "=="); }
function cl(e, t, n, o) { throw new Error(`ASSERTION ERROR: ${e}` + (o == null ? "" : ` [Expected=> ${n} ${o} ${t} <=Actual]`)); }
function U(e) { return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 }; }
function gr(e) { return { providers: e.providers || [], imports: e.imports || [] }; }
function mr(e) { return sN(e, Kn); }
function iN(e) { return mr(e) !== null; }
function sN(e, t) { return e.hasOwnProperty(t) && e[t] || null; }
function aN(e) { let t = e?.[Kn] ?? null; return t || null; }
function Zc(e) { return e && e.hasOwnProperty(sr) ? e[sr] : null; }
var Kn = j({ \u0275prov: j }), sr = j({ \u0275inj: j }), T = class {
    _desc;
    ngMetadataName = "InjectionToken";
    \u0275prov;
    constructor(t, n) { this._desc = t, this.\u0275prov = void 0, typeof n == "number" ? this.__NG_ELEMENT_ID__ = n : n !== void 0 && (this.\u0275prov = U({ token: this, providedIn: n.providedIn || "root", factory: n.factory })); }
    get multi() { return this; }
    toString() { return `InjectionToken ${this._desc}`; }
}, Oh;
function cN(e) { cl("setInjectorProfilerContext should never be called in production mode"); let t = Oh; return Oh = e, t; }
function ll(e) { return e && !!e.\u0275providers; }
var hn = j({ \u0275cmp: j }), vr = j({ \u0275dir: j }), yr = j({ \u0275pipe: j }), os = j({ \u0275mod: j }), it = j({ \u0275fac: j }), gn = j({ __NG_ELEMENT_ID__: j }), xh = j({ __NG_ENV_ID__: j });
function mn(e) { return is(e, "@NgModule"), e[os] || null; }
function rs(e) { let t = mn(e); if (!t)
    throw new D(915, !1); return t; }
function z(e) { return is(e, "@Component"), e[hn] || null; }
function Ae(e) { return is(e, "@Directive"), e[vr] || null; }
function Ze(e) { return is(e, "@Pipe"), e[yr] || null; }
function is(e, t) { if (e == null)
    throw new D(-919, !1); }
function Er(e) { let t = z(e) || Ae(e) || Ze(e); return t !== null && t.standalone; }
function b(e) { return typeof e == "string" ? e : e == null ? "" : String(e); }
function Le(e) { return typeof e == "function" ? e.name || e.toString() : typeof e == "object" && e != null && typeof e.type == "function" ? e.type.name || e.type.toString() : b(e); }
var Hh = j({ ngErrorCode: j }), lN = j({ ngErrorMessage: j }), uN = j({ ngTokenPath: j });
function ul(e, t) { return Bh("", -200, t); }
function ss(e, t) { throw new D(-201, !1); }
function Bh(e, t, n) { let o = new D(t, e); return o[Hh] = t, o[lN] = e, n && (o[uN] = n), o; }
function dN(e) { return e[Hh]; }
var Yc;
function Uh() { return Yc; }
function Ce(e) { let t = Yc; return Yc = e, t; }
function dl(e, t, n) { let o = mr(e); if (o && o.providedIn == "root")
    return o.value === void 0 ? o.value = o.factory() : o.value; if (n & 8)
    return null; if (t !== void 0)
    return t; ss(e, ""); }
var fN = {}, un = fN, Kc = "__NG_DI_FLAG__", Jc = class {
    injector;
    constructor(t) { this.injector = t; }
    retrieve(t, n) { let o = dn(n) || 0; try {
        return this.injector.get(t, o & 8 ? null : un, o);
    }
    catch (r) {
        if (Wc(r))
            return r;
        throw r;
    } }
};
function pN(e, t = 0) { let n = Gc(); if (n === void 0)
    throw new D(-203, !1); if (n === null)
    return dl(e, void 0, t); {
    let o = hN(t), r = n.retrieve(e, o);
    if (Wc(r)) {
        if (o.optional)
            return null;
        throw r;
    }
    return r;
} }
function he(e, t = 0) { return (Uh() || pN)(x(e), t); }
function as(e) { throw new D(202, !1); }
function y(e, t) { return he(e, dn(t)); }
function dn(e) { return typeof e > "u" || typeof e == "number" ? e : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4); }
function hN(e) { return { optional: !!(e & 8), host: !!(e & 1), self: !!(e & 2), skipSelf: !!(e & 4) }; }
function Xc(e) { let t = []; for (let n = 0; n < e.length; n++) {
    let o = x(e[n]);
    if (Array.isArray(o)) {
        if (o.length === 0)
            throw new D(900, !1);
        let r, i = 0;
        for (let s = 0; s < o.length; s++) {
            let a = o[s], c = gN(a);
            typeof c == "number" ? c === -1 ? r = a.token : i |= c : r = a;
        }
        t.push(he(r, i));
    }
    else
        t.push(he(o));
} return t; }
function Jn(e, t) { return e[Kc] = t, e.prototype[Kc] = t, e; }
function gN(e) { return e[Kc]; }
function Ht(e, t) { let n = e.hasOwnProperty(it); return n ? e[it] : null; }
function $h(e, t, n) { if (e.length !== t.length)
    return !1; for (let o = 0; o < e.length; o++) {
    let r = e[o], i = t[o];
    if (n && (r = n(r), i = n(i)), i !== r)
        return !1;
} return !0; }
function Ye(e) { return e.flat(Number.POSITIVE_INFINITY); }
function cs(e, t) { e.forEach(n => Array.isArray(n) ? cs(n, t) : t(n)); }
function fl(e, t, n) { t >= e.length ? e.push(n) : e.splice(t, 0, n); }
function Ir(e, t) { return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]; }
function Dr(e, t) { let n = []; for (let o = 0; o < e; o++)
    n.push(t); return n; }
function pl(e, t, n) { let o = e.length - n; for (; t < o;)
    e[t] = e[t + n], t++; for (; n--;)
    e.pop(); }
function hl(e, t, n, o) { let r = e.length; if (r == t)
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
function Cr(e, t, n) { let o = Xn(e, t); return o >= 0 ? e[o | 1] = n : (o = ~o, hl(e, o, t, n)), o; }
function ls(e, t) { let n = Xn(e, t); if (n >= 0)
    return e[n | 1]; }
function Xn(e, t) { return mN(e, t, 1); }
function mN(e, t, n) { let o = 0, r = e.length >> n; for (; r !== o;) {
    let i = o + (r - o >> 1), s = e[i << n];
    if (t === s)
        return i << n;
    s > t ? r = i : o = i + 1;
} return ~(r << n); }
var Fe = {}, F = [], je = new T(""), gl = new T("", -1), ml = new T(""), ar = class {
    get(t, n = un) { if (n === un) {
        let r = Bh("", -201);
        throw r.name = "\u0275NotFound", r;
    } return n; }
};
function Ke(e) { return { \u0275providers: e }; }
function qh(e) { return Ke([{ provide: je, multi: !0, useValue: e }]); }
function Gh(...e) { return { \u0275providers: us(!0, e), \u0275fromNgModule: !0 }; }
function us(e, ...t) { let n = [], o = new Set, r, i = s => { n.push(s); }; return cs(t, s => { let a = s; Ki(a, i, [], o) && (r ||= [], r.push(a)); }), r !== void 0 && Wh(r, i), n; }
function Wh(e, t) { for (let n = 0; n < e.length; n++) {
    let { ngModule: o, providers: r } = e[n];
    vl(r, i => { t(i, o); });
} }
function Ki(e, t, n, o) { if (e = x(e), !e)
    return !1; let r = null, i = Zc(e), s = !i && z(e); if (!i && !s) {
    let c = e.ngModule;
    if (i = Zc(c), i)
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
            Ki(l, t, n, o);
    }
}
else if (i) {
    if (i.imports != null && !a) {
        o.add(r);
        let l;
        cs(i.imports, u => { Ki(u, t, n, o) && (l ||= [], l.push(u)); }), l !== void 0 && Wh(l, t);
    }
    if (!a) {
        let l = Ht(r) || (() => new r);
        t({ provide: r, useFactory: l, deps: F }, r), t({ provide: ml, useValue: r, multi: !0 }, r), t({ provide: je, useValue: () => he(r), multi: !0 }, r);
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
var vN = j({ provide: String, useValue: j });
function zh(e) { return e !== null && typeof e == "object" && vN in e; }
function yN(e) { return !!(e && e.useExisting); }
function EN(e) { return !!(e && e.useFactory); }
function fn(e) { return typeof e == "function"; }
function Qh(e) { return !!e.useClass; }
var yl = new T(""), Zi = {}, Ph = {}, zc;
function eo() { return zc === void 0 && (zc = new ar), zc; }
var Se = class {
}, pn = class extends Se {
    parent;
    source;
    scopes;
    records = new Map;
    _ngOnDestroyHooks = new Set;
    _onDestroyHooks = [];
    get destroyed() { return this._destroyed; }
    _destroyed = !1;
    injectorDefTypes;
    constructor(t, n, o, r) { super(), this.parent = n, this.source = o, this.scopes = r, tl(t, s => this.processProvider(s)), this.records.set(gl, Yn(void 0, this)), r.has("environment") && this.records.set(Se, Yn(void 0, this)); let i = this.records.get(yl); i != null && typeof i.value == "string" && this.scopes.add(i.value), this.injectorDefTypes = new Set(this.get(ml, F, { self: !0 })); }
    retrieve(t, n) { let o = dn(n) || 0; try {
        return this.get(t, un, o);
    }
    catch (r) {
        if (tN(r))
            return r;
        throw r;
    } }
    destroy() { ir(this), this._destroyed = !0; let t = Zn(null); try {
        for (let o of this._ngOnDestroyHooks)
            o.ngOnDestroy();
        let n = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let o of n)
            o();
    }
    finally {
        this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear(), Zn(t);
    } }
    onDestroy(t) { return ir(this), this._onDestroyHooks.push(t), () => this.removeOnDestroy(t); }
    runInContext(t) { ir(this); let n = rt(this), o = Ce(void 0), r; try {
        return t();
    }
    finally {
        rt(n), Ce(o);
    } }
    get(t, n = un, o) { if (ir(this), t.hasOwnProperty(xh))
        return t[xh](this); let r = dn(o), i, s = rt(this), a = Ce(void 0); try {
        if (!(r & 4)) {
            let l = this.records.get(t);
            if (l === void 0) {
                let u = MN(t) && mr(t);
                u && this.injectableDefInScope(u) ? l = Yn(el(t), Zi) : l = null, this.records.set(t, l);
            }
            if (l != null)
                return this.hydrate(t, l, r);
        }
        let c = r & 2 ? eo() : this.parent;
        return n = r & 8 && n === un ? null : n, c.get(t, n);
    }
    catch (c) {
        let l = dN(c);
        throw l === -200 || l === -201 ? new D(l, null) : c;
    }
    finally {
        Ce(a), rt(s);
    } }
    resolveInjectorInitializers() { let t = Zn(null), n = rt(this), o = Ce(void 0), r; try {
        let i = this.get(je, F, { self: !0 });
        for (let s of i)
            s();
    }
    finally {
        rt(n), Ce(o), Zn(t);
    } }
    toString() { return "R3Injector[...]"; }
    processProvider(t) { t = x(t); let n = fn(t) ? t : x(t && t.provide), o = DN(t); if (!fn(t) && t.multi === !0) {
        let r = this.records.get(n);
        r || (r = Yn(void 0, Zi, !0), r.factory = () => Xc(r.multi), this.records.set(n, r)), n = t, r.multi.push(t);
    } this.records.set(n, o); }
    hydrate(t, n, o) { let r = Zn(null); try {
        if (n.value === Ph)
            throw ul("");
        return n.value === Zi && (n.value = Ph, n.value = n.factory(void 0, o)), typeof n.value == "object" && n.value && TN(n.value) && this._ngOnDestroyHooks.add(n.value), n.value;
    }
    finally {
        Zn(r);
    } }
    injectableDefInScope(t) { if (!t.providedIn)
        return !1; let n = x(t.providedIn); return typeof n == "string" ? n === "any" || this.scopes.has(n) : this.injectorDefTypes.has(n); }
    removeOnDestroy(t) { let n = this._onDestroyHooks.indexOf(t); n !== -1 && this._onDestroyHooks.splice(n, 1); }
};
function el(e) { let t = mr(e), n = t !== null ? t.factory : Ht(e); if (n !== null)
    return n; if (e instanceof T)
    throw new D(-204, !1); if (e instanceof Function)
    return IN(e); throw new D(-204, !1); }
function IN(e) { if (e.length > 0)
    throw new D(-204, !1); let n = aN(e); return n !== null ? () => n.factory(e) : () => new e; }
function DN(e) { if (zh(e))
    return Yn(void 0, e.useValue); {
    let t = El(e);
    return Yn(t, Zi);
} }
function El(e, t, n) { let o; if (fn(e)) {
    let r = x(e);
    return Ht(r) || el(r);
}
else if (zh(e))
    o = () => x(e.useValue);
else if (EN(e))
    o = () => e.useFactory(...Xc(e.deps || []));
else if (yN(e))
    o = (r, i) => he(x(e.useExisting), i !== void 0 && i & 8 ? 8 : void 0);
else {
    let r = x(e && (e.useClass || e.provide));
    if (CN(e))
        o = () => new r(...Xc(e.deps));
    else
        return Ht(r) || el(r);
} return o; }
function ir(e) { if (e.destroyed)
    throw new D(-205, !1); }
function Yn(e, t, n = !1) { return { factory: e, value: t, multi: n ? [] : void 0 }; }
function CN(e) { return !!e.deps; }
function TN(e) { return e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"; }
function MN(e) { return typeof e == "function" || typeof e == "object" && e.ngMetadataName === "InjectionToken"; }
function tl(e, t) { for (let n of e)
    Array.isArray(n) ? tl(n, t) : n && ll(n) ? tl(n.\u0275providers, t) : t(n); }
function ds(e, t) { let n; e instanceof pn ? (ir(e), n = e) : n = new Jc(e); let o, r = rt(n), i = Ce(void 0); try {
    return t();
}
finally {
    rt(r), Ce(i);
} }
function fs() { return Uh() !== void 0 || Gc() != null; }
function NN(e) { if (!fs())
    throw new D(-203, !1); }
var q = 0, m = 1, N = 2, Q = 3, ge = 4, ue = 5, de = 6, Ut = 7, $ = 8, P = 9, Ve = 10, w = 11, $t = 12, Tr = 13, vn = 14, te = 15, qt = 16, yn = 17, st = 18, He = 19, Il = 20, Et = 21, ps = 22, Bt = 23, Re = 24, En = 25, at = 26, I = 27, Dl = 1, ke = 6, Je = 7, Mr = 8, In = 9, W = 10;
function oe(e) { return Array.isArray(e) && typeof e[Dl] == "object"; }
function J(e) { return Array.isArray(e) && e[Dl] === !0; }
function Cl(e) { return (e.flags & 4) !== 0; }
function Te(e) { return e.componentOffset > -1; }
function to(e) { return (e.flags & 1) === 1; }
function Be(e) { return !!e.template; }
function ct(e) { return (e[N] & 512) !== 0; }
function Tl(e) { return (e.type & 16) === 16; }
function Zh(e) { return (e[N] & 32) === 32; }
function lt(e) { return (e[N] & 256) === 256; }
var Ml = "svg", Nl = "math";
function L(e) { for (; Array.isArray(e);)
    e = e[q]; return e; }
function Nr(e) { for (; Array.isArray(e);) {
    if (typeof e[Dl] == "object")
        return e;
    e = e[q];
} return null; }
function Dn(e, t) { return L(t[e]); }
function ae(e, t) { return L(t[e.index]); }
function Yh(e, t) { let n = e === null ? -1 : e.index; return n !== -1 ? L(t[n]) : null; }
function Gt(e, t) { return e.data[t]; }
function Wt(e, t) { return e[t]; }
function wr(e, t, n, o) { n >= e.data.length && (e.data[n] = null, e.blueprint[n] = null), t[n] = o; }
function Ee(e, t) { let n = t[e]; return oe(n) ? n : n[q]; }
function Kh(e) { return (e[N] & 4) === 4; }
function hs(e) { return (e[N] & 128) === 128; }
function Jh(e) { return J(e[Q]); }
function me(e, t) { return t == null ? null : e[t]; }
function wl(e) { e[yn] = 0; }
function gs(e) { e[N] & 1024 || (e[N] |= 1024, hs(e) && Cn(e)); }
function _l(e, t) { for (; e > 0;)
    t = t[vn], e--; return t; }
function no(e) { return !!(e[N] & 9216 || e[Re]?.dirty); }
function ms(e) { e[Ve].changeDetectionScheduler?.notify(8), e[N] & 64 && (e[N] |= 1024), no(e) && Cn(e); }
function Cn(e) { e[Ve].changeDetectionScheduler?.notify(0); let t = It(e); for (; t !== null && !(t[N] & 8192 || (t[N] |= 8192, !hs(t)));)
    t = It(t); }
function _r(e, t) { if (lt(e))
    throw new D(911, !1); e[Et] === null && (e[Et] = []), e[Et].push(t); }
function vs(e, t) { if (e[Et] === null)
    return; let n = e[Et].indexOf(t); n !== -1 && e[Et].splice(n, 1); }
function It(e) { let t = e[Q]; return J(t) ? t[Q] : t; }
function Sl(e) { return e[Ut] ??= []; }
function bl(e) { return e.cleanup ??= []; }
function Xh(e, t, n, o) { let r = Sl(t); r.push(n), e.firstCreatePass && bl(e).push(o, r.length - 1); }
var S = { lFrame: ag(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var nl = !1;
function eg() { return S.lFrame.elementDepthCount; }
function tg() { S.lFrame.elementDepthCount++; }
function Al() { S.lFrame.elementDepthCount--; }
function ys() { return S.bindingsEnabled; }
function Sr() { return S.skipHydrationRootTNode !== null; }
function Rl(e) { return S.skipHydrationRootTNode === e; }
function kl() { S.bindingsEnabled = !0; }
function ng(e) { S.skipHydrationRootTNode = e; }
function Ol() { S.bindingsEnabled = !1; }
function xl() { S.skipHydrationRootTNode = null; }
function g() { return S.lFrame.lView; }
function R() { return S.lFrame.tView; }
function Pl(e) { return S.lFrame.contextLView = e, e[$]; }
function Ll(e) { return S.lFrame.contextLView = null, e; }
function _() { let e = Fl(); for (; e !== null && e.type === 64;)
    e = e.parent; return e; }
function Fl() { return S.lFrame.currentTNode; }
function oo() { let e = S.lFrame, t = e.currentTNode; return e.isParent ? t : t.parent; }
function ut(e, t) { let n = S.lFrame; n.currentTNode = e, n.isParent = t; }
function jl() { return S.lFrame.isParent; }
function Vl() { S.lFrame.isParent = !1; }
function Hl() { return S.lFrame.contextLView; }
function Bl() { return nl; }
function cr(e) { let t = nl; return nl = e, t; }
function ve() { let e = S.lFrame, t = e.bindingRootIndex; return t === -1 && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t; }
function dt() { return S.lFrame.bindingIndex; }
function Ul(e) { return S.lFrame.bindingIndex = e; }
function Ie() { return S.lFrame.bindingIndex++; }
function ft(e) { let t = S.lFrame, n = t.bindingIndex; return t.bindingIndex = t.bindingIndex + e, n; }
function og() { return S.lFrame.inI18n; }
function $l(e) { S.lFrame.inI18n = e; }
function rg(e, t) { let n = S.lFrame; n.bindingIndex = n.bindingRootIndex = e, Es(t); }
function ig() { return S.lFrame.currentDirectiveIndex; }
function Es(e) { S.lFrame.currentDirectiveIndex = e; }
function Is(e) { let t = S.lFrame.currentDirectiveIndex; return t === -1 ? null : e[t]; }
function Ds() { return S.lFrame.currentQueryIndex; }
function br(e) { S.lFrame.currentQueryIndex = e; }
function wN(e) { let t = e[m]; return t.type === 2 ? t.declTNode : t.type === 1 ? e[ue] : null; }
function ql(e, t, n) { if (n & 4) {
    let r = t, i = e;
    for (; r = r.parent, r === null && !(n & 1);)
        if (r = wN(i), r === null || (i = i[vn], r.type & 10))
            break;
    if (r === null)
        return !1;
    t = r, e = i;
} let o = S.lFrame = sg(); return o.currentTNode = t, o.lView = e, !0; }
function Cs(e) { let t = sg(), n = e[m]; S.lFrame = t, t.currentTNode = n.firstChild, t.lView = e, t.tView = n, t.contextLView = e, t.bindingIndex = n.bindingStartIndex, t.inI18n = !1; }
function sg() { let e = S.lFrame, t = e === null ? null : e.child; return t === null ? ag(e) : t; }
function ag(e) { let t = { currentTNode: null, isParent: !0, lView: null, tView: null, selectedIndex: -1, contextLView: null, elementDepthCount: 0, currentNamespace: null, currentDirectiveIndex: -1, bindingRootIndex: -1, bindingIndex: -1, currentQueryIndex: 0, parent: e, child: null, inI18n: !1 }; return e !== null && (e.child = t), t; }
function cg() { let e = S.lFrame; return S.lFrame = e.parent, e.currentTNode = null, e.lView = null, e; }
var Gl = cg;
function Ts() { let e = cg(); e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0; }
function lg(e) { return (S.lFrame.contextLView = _l(e, S.lFrame.contextLView))[$]; }
function fe() { return S.lFrame.selectedIndex; }
function zt(e) { S.lFrame.selectedIndex = e; }
function Oe() { let e = S.lFrame; return Gt(e.tView, e.selectedIndex); }
function Wl() { S.lFrame.currentNamespace = Ml; }
function zl() { S.lFrame.currentNamespace = Nl; }
function Ql() { _N(); }
function _N() { S.lFrame.currentNamespace = null; }
function Zl() { return S.lFrame.currentNamespace; }
var ug = !0;
function Ar() { return ug; }
function Xe(e) { ug = e; }
function ol(e, t = null, n = null, o) { let r = Yl(e, t, n, o); return r.resolveInjectorInitializers(), r; }
function Yl(e, t = null, n = null, o, r = new Set) { let i = [n || F, Gh(e)], s; return new pn(i, t || eo(), s || null, r); }
var le = class e {
    static THROW_IF_NOT_FOUND = un;
    static NULL = new ar;
    static create(t, n) { if (Array.isArray(t))
        return ol({ name: "" }, n, t, ""); {
        let o = t.name ?? "";
        return ol({ name: o }, t.parent, t.providers, o);
    } }
    static \u0275prov = U({ token: e, providedIn: "any", factory: () => he(gl) });
    static __NG_ELEMENT_ID__ = -1;
}, Qt = new T(""), Ue = (() => { class e {
    static __NG_ELEMENT_ID__ = SN;
    static __NG_ENV_ID__ = n => n;
} return e; })(), Ji = class extends Ue {
    _lView;
    constructor(t) { super(), this._lView = t; }
    get destroyed() { return lt(this._lView); }
    onDestroy(t) { let n = this._lView; return _r(n, t), () => vs(n, t); }
};
function SN() { return new Ji(g()); }
var Kl = !1, Jl = new T(""), Ct = (() => { class e {
    taskId = 0;
    pendingTasks = new Set;
    destroyed = !1;
    pendingTask = new Ch(!1);
    debugTaskTracker = y(Jl, { optional: !0 });
    get hasPendingTasks() { return this.destroyed ? !1 : this.pendingTask.value; }
    get hasPendingTasksObservable() { return this.destroyed ? new Dh(n => { n.next(!1), n.complete(); }) : this.pendingTask; }
    add() { !this.hasPendingTasks && !this.destroyed && this.pendingTask.next(!0); let n = this.taskId++; return this.pendingTasks.add(n), this.debugTaskTracker?.add(n), n; }
    has(n) { return this.pendingTasks.has(n); }
    remove(n) { this.pendingTasks.delete(n), this.debugTaskTracker?.remove(n), this.pendingTasks.size === 0 && this.hasPendingTasks && this.pendingTask.next(!1); }
    ngOnDestroy() { this.pendingTasks.clear(), this.hasPendingTasks && this.pendingTask.next(!1), this.destroyed = !0, this.pendingTask.unsubscribe(); }
    static \u0275prov = U({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), rl = class extends or {
    __isAsync;
    destroyRef = void 0;
    pendingTasks = void 0;
    constructor(t = !1) { super(), this.__isAsync = t, fs() && (this.destroyRef = y(Ue, { optional: !0 }) ?? void 0, this.pendingTasks = y(Ct, { optional: !0 }) ?? void 0); }
    emit(t) { let n = A(null); try {
        super.next(t);
    }
    finally {
        A(n);
    } }
    subscribe(t, n, o) { let r = t, i = n || (() => null), s = o; if (t && typeof t == "object") {
        let c = t;
        r = c.next?.bind(c), i = c.error?.bind(c), s = c.complete?.bind(c);
    } this.__isAsync && (i = this.wrapInTimeout(i), r && (r = this.wrapInTimeout(r)), s && (s = this.wrapInTimeout(s))); let a = super.subscribe({ next: r, error: i, complete: s }); return t instanceof Gn && t.add(a), a; }
    wrapInTimeout(t) { return n => { let o = this.pendingTasks?.add(); setTimeout(() => { try {
        t(n);
    }
    finally {
        o !== void 0 && this.pendingTasks?.remove(o);
    } }); }; }
}, yt = rl;
function Xi(...e) { }
function Xl(e) { let t, n; function o() { e = Xi; try {
    n !== void 0 && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(n), t !== void 0 && clearTimeout(t);
}
catch { } } return t = setTimeout(() => { e(), o(); }), typeof requestAnimationFrame == "function" && (n = requestAnimationFrame(() => { e(), o(); })), () => o(); }
function dg(e) { return queueMicrotask(() => e()), () => { e = Xi; }; }
var eu = "isAngularZone", lr = eu + "_ID", bN = 0, G = class e {
    hasPendingMacrotasks = !1;
    hasPendingMicrotasks = !1;
    isStable = !0;
    onUnstable = new yt(!1);
    onMicrotaskEmpty = new yt(!1);
    onStable = new yt(!1);
    onError = new yt(!1);
    constructor(t) { let { enableLongStackTrace: n = !1, shouldCoalesceEventChangeDetection: o = !1, shouldCoalesceRunChangeDetection: r = !1, scheduleInRootZone: i = Kl } = t; if (typeof Zone > "u")
        throw new D(908, !1); Zone.assertZonePatched(); let s = this; s._nesting = 0, s._outer = s._inner = Zone.current, Zone.TaskTrackingZoneSpec && (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec)), n && Zone.longStackTraceZoneSpec && (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)), s.shouldCoalesceEventChangeDetection = !r && o, s.shouldCoalesceRunChangeDetection = r, s.callbackScheduled = !1, s.scheduleInRootZone = i, kN(s); }
    static isInAngularZone() { return typeof Zone < "u" && Zone.current.get(eu) === !0; }
    static assertInAngularZone() { if (!e.isInAngularZone())
        throw new D(909, !1); }
    static assertNotInAngularZone() { if (e.isInAngularZone())
        throw new D(909, !1); }
    run(t, n, o) { return this._inner.run(t, n, o); }
    runTask(t, n, o, r) { let i = this._inner, s = i.scheduleEventTask("NgZoneEvent: " + r, t, AN, Xi, Xi); try {
        return i.runTask(s, n, o);
    }
    finally {
        i.cancelTask(s);
    } }
    runGuarded(t, n, o) { return this._inner.runGuarded(t, n, o); }
    runOutsideAngular(t) { return this._outer.run(t); }
}, AN = {};
function tu(e) { if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
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
function RN(e) { if (e.isCheckStableRunning || e.callbackScheduled)
    return; e.callbackScheduled = !0; function t() { Xl(() => { e.callbackScheduled = !1, il(e), e.isCheckStableRunning = !0, tu(e), e.isCheckStableRunning = !1; }); } e.scheduleInRootZone ? Zone.root.run(() => { t(); }) : e._outer.run(() => { t(); }), il(e); }
function kN(e) { let t = () => { RN(e); }, n = bN++; e._inner = e._inner.fork({ name: "angular", properties: { [eu]: !0, [lr]: n, [lr + n]: !0 }, onInvokeTask: (o, r, i, s, a, c) => { if (ON(c))
        return o.invokeTask(i, s, a, c); try {
        return Lh(e), o.invokeTask(i, s, a, c);
    }
    finally {
        (e.shouldCoalesceEventChangeDetection && s.type === "eventTask" || e.shouldCoalesceRunChangeDetection) && t(), Fh(e);
    } }, onInvoke: (o, r, i, s, a, c, l) => { try {
        return Lh(e), o.invoke(i, s, a, c, l);
    }
    finally {
        e.shouldCoalesceRunChangeDetection && !e.callbackScheduled && !xN(c) && t(), Fh(e);
    } }, onHasTask: (o, r, i, s) => { o.hasTask(i, s), r === i && (s.change == "microTask" ? (e._hasPendingMicrotasks = s.microTask, il(e), tu(e)) : s.change == "macroTask" && (e.hasPendingMacrotasks = s.macroTask)); }, onHandleError: (o, r, i, s) => (o.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1) }); }
function il(e) { e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && e.callbackScheduled === !0 ? e.hasPendingMicrotasks = !0 : e.hasPendingMicrotasks = !1; }
function Lh(e) { e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null)); }
function Fh(e) { e._nesting--, tu(e); }
var ur = class {
    hasPendingMicrotasks = !1;
    hasPendingMacrotasks = !1;
    isStable = !0;
    onUnstable = new yt;
    onMicrotaskEmpty = new yt;
    onStable = new yt;
    onError = new yt;
    run(t, n, o) { return t.apply(n, o); }
    runGuarded(t, n, o) { return t.apply(n, o); }
    runOutsideAngular(t) { return t(); }
    runTask(t, n, o, r) { return t.apply(n, o); }
};
function ON(e) { return fg(e, "__ignore_ng_zone__"); }
function xN(e) { return fg(e, "__scheduler_tick__"); }
function fg(e, t) { return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0; }
var Dt = class {
    _console = console;
    handleError(t) { this._console.error("ERROR", t); }
}, Tt = new T("", { factory: () => { let e = y(G), t = y(Se), n; return o => { e.runOutsideAngular(() => { t.destroyed && !n ? setTimeout(() => { throw o; }) : (n ??= t.get(Dt), n.handleError(o)); }); }; } }), nu = { provide: je, useValue: () => { let e = y(Dt, { optional: !0 }); }, multi: !0 }, PN = new T("", { factory: () => { if (typeof ngServerMode < "u" && ngServerMode)
        return; let e = y(Qt).defaultView; if (!e)
        return; let t = y(Tt), n = i => { t(i.reason), i.preventDefault(); }, o = i => { i.error ? t(i.error) : t(new Error(i.message, { cause: i })), i.preventDefault(); }, r = () => { e.addEventListener("unhandledrejection", n), e.addEventListener("error", o); }; typeof Zone < "u" ? Zone.root.run(r) : r(), y(Ue).onDestroy(() => { e.removeEventListener("error", o), e.removeEventListener("unhandledrejection", n); }); } });
function LN() { return Ke([qh(() => { y(PN); })]); }
function FN(e) { return null; }
function Zt(e, t) { let [n, o, r] = Ah(e, t?.equal), i = n, s = i[K]; return i.set = o, i.update = r, i.asReadonly = ro.bind(i), i; }
function ro() { let e = this[K]; if (e.readonlyFn === void 0) {
    let t = () => this();
    t[K] = e, e.readonlyFn = t;
} return e.readonlyFn; }
function jN(e, t) { if (qi() !== null)
    throw new D(-602, !1); }
var io = (() => { class e {
    view;
    node;
    constructor(n, o) { this.view = n, this.node = o; }
    static __NG_ELEMENT_ID__ = VN;
} return e; })();
function VN() { return new io(g(), _()); }
var Pe = class {
}, so = new T("", { factory: () => !0 }), HN = new T("", { factory: () => !1 }), Ms = new T(""), Rr = (() => { class e {
    internalPendingTasks = y(Ct);
    scheduler = y(Pe);
    errorHandler = y(Tt);
    add() { let n = this.internalPendingTasks.add(); return () => { this.internalPendingTasks.has(n) && (this.scheduler.notify(11), this.internalPendingTasks.remove(n)); }; }
    run(n) { let o = this.add(); n().catch(this.errorHandler).finally(o); }
    static \u0275prov = U({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Ns = (() => { class e {
    static \u0275prov = U({ token: e, providedIn: "root", factory: () => new sl });
} return e; })(), sl = class {
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
}, es = class {
    [K];
    constructor(t) { this[K] = t; }
    destroy() { this[K].destroy(); }
};
function ou(e, t) { let n = t?.injector ?? y(le), o = t?.manualCleanup !== !0 ? n.get(Ue) : null, r, i = n.get(io, null, { optional: !0 }), s = n.get(Pe); return i !== null ? (r = $N(i.view, s, e), o instanceof Ji && o._lView === i.view && (o = null)) : r = qN(e, n.get(Ns), s), r.injector = n, o !== null && (r.onDestroyFns = [o.onDestroy(() => r.destroy())]), new es(r); }
var pg = se(H({}, Rh), { cleanupFns: void 0, zone: null, onDestroyFns: null, run() { let e = cr(!1); try {
        kh(this);
    }
    finally {
        cr(e);
    } }, cleanup() { if (!this.cleanupFns?.length)
        return; let e = A(null); try {
        for (; this.cleanupFns.length;)
            this.cleanupFns.pop()();
    }
    finally {
        this.cleanupFns = [], A(e);
    } } }), BN = se(H({}, pg), { consumerMarkedDirty() { this.scheduler.schedule(this), this.notifier.notify(12); }, destroy() { if (Vt(this), this.onDestroyFns !== null)
        for (let e of this.onDestroyFns)
            e(); this.cleanup(), this.scheduler.remove(this); } }), UN = se(H({}, pg), { consumerMarkedDirty() { this.view[N] |= 8192, Cn(this.view), this.notifier.notify(13); }, destroy() { if (Vt(this), this.onDestroyFns !== null)
        for (let e of this.onDestroyFns)
            e(); this.cleanup(), this.view[Bt]?.delete(this); } });
function $N(e, t, n) { let o = Object.create(UN); return o.view = e, o.zone = typeof Zone < "u" ? Zone.current : null, o.notifier = t, o.fn = hg(o, n), e[Bt] ??= new Set, e[Bt].add(o), o.consumerMarkedDirty(o), o; }
function qN(e, t, n) { let o = Object.create(BN); return o.fn = hg(o, e), o.scheduler = t, o.notifier = n, o.zone = typeof Zone < "u" ? Zone.current : null, o.scheduler.add(o), o.notifier.notify(12), o; }
function hg(e, t) { return () => { t(n => (e.cleanupFns ??= []).push(n)); }; }
import { setActiveConsumer as lo } from "@angular/core/primitives/signals";
var ao = { JSACTION: "jsaction" };
function ht(e) { return { toString: e }.toString(); }
var uo = "__annotations__", fo = "__parameters__", po = "__prop__metadata__";
function pi(e, t, n, o, r) { return ht(() => { let i = Ad(t); function s(...a) { if (this instanceof s)
    return i.call(this, ...a), this; let c = new s(...a); return function (u) { return r && r(u, ...a), (u.hasOwnProperty(uo) ? u[uo] : Object.defineProperty(u, uo, { value: [] })[uo]).push(c), u; }; } return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = e, s.annotationCls = s, s; }); }
function Ad(e) { return function (...n) { if (e) {
    let o = e(...n);
    for (let r in o)
        this[r] = o[r];
} }; }
function xo(e, t, n) { return ht(() => { let o = Ad(t); function r(...i) { if (this instanceof r)
    return o.apply(this, i), this; let s = new r(...i); return a.annotation = s, a; function a(c, l, u) { let d = c.hasOwnProperty(fo) ? c[fo] : Object.defineProperty(c, fo, { value: [] })[fo]; for (; d.length <= u;)
    d.push(null); return (d[u] = d[u] || []).push(s), c; } } return r.prototype.ngMetadataName = e, r.annotationCls = r, r; }); }
function bt(e, t, n, o) { return ht(() => { let r = Ad(t); function i(...s) { if (this instanceof i)
    return r.apply(this, s), this; let a = new i(...s); function c(l, u) { if (l === void 0)
    throw new Error("Standard Angular field decorators are not supported in JIT mode."); let d = l.constructor, f = d.hasOwnProperty(po) ? d[po] : Object.defineProperty(d, po, { value: {} })[po]; f[u] = f.hasOwnProperty(u) && f[u] || [], f[u].unshift(a); } return c; } return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i; }); }
var Am = Jn(xo("Inject", e => ({ token: e })), -1), Rm = Jn(xo("Optional"), 8), km = Jn(xo("Self"), 2), Om = Jn(xo("SkipSelf"), 4), xm = Jn(xo("Host"), 1);
function ie(e) { let t = be.ng; if (t && t.\u0275compilerFacade)
    return t.\u0275compilerFacade; throw new Error("JIT compiler unavailable"); }
var gg = { \u0275\u0275defineInjectable: U, \u0275\u0275defineInjector: gr, \u0275\u0275inject: he, \u0275\u0275invalidFactoryDep: as, resolveForwardRef: x }, Pm = Function;
function xr(e) { return typeof e == "function"; }
var GN = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/, WN = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/, zN = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/, QN = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{[^}]*super\(\.\.\.arguments\)/;
function ZN(e) { return GN.test(e) || QN.test(e) || WN.test(e) && !zN.test(e); }
var zs = class {
    _reflect;
    constructor(t) { this._reflect = t || be.Reflect; }
    factory(t) { return (...n) => new t(...n); }
    _zipTypesAndAnnotations(t, n) { let o; typeof t > "u" ? o = Dr(n.length) : o = Dr(t.length); for (let r = 0; r < o.length; r++)
        typeof t > "u" ? o[r] = [] : t[r] && t[r] != Object ? o[r] = [t[r]] : o[r] = [], n && n[r] != null && (o[r] = o[r].concat(n[r])); return o; }
    _ownParameters(t, n) { let o = t.toString(); if (ZN(o))
        return null; if (t.parameters && t.parameters !== n.parameters)
        return t.parameters; let r = t.ctorParameters; if (r && r !== n.ctorParameters) {
        let a = typeof r == "function" ? r() : r, c = a.map(u => u && u.type), l = a.map(u => u && ru(u.decorators));
        return this._zipTypesAndAnnotations(c, l);
    } let i = t.hasOwnProperty(fo) && t[fo], s = this._reflect && this._reflect.getOwnMetadata && this._reflect.getOwnMetadata("design:paramtypes", t); return s || i ? this._zipTypesAndAnnotations(s, i) : Dr(t.length); }
    parameters(t) { if (!xr(t))
        return []; let n = ws(t), o = this._ownParameters(t, n); return !o && n !== Object && (o = this.parameters(n)), o || []; }
    _ownAnnotations(t, n) { if (t.annotations && t.annotations !== n.annotations) {
        let o = t.annotations;
        return typeof o == "function" && o.annotations && (o = o.annotations), o;
    } return t.decorators && t.decorators !== n.decorators ? ru(t.decorators) : t.hasOwnProperty(uo) ? t[uo] : null; }
    annotations(t) { if (!xr(t))
        return []; let n = ws(t), o = this._ownAnnotations(t, n) || []; return (n !== Object ? this.annotations(n) : []).concat(o); }
    _ownPropMetadata(t, n) { if (t.propMetadata && t.propMetadata !== n.propMetadata) {
        let o = t.propMetadata;
        return typeof o == "function" && o.propMetadata && (o = o.propMetadata), o;
    } if (t.propDecorators && t.propDecorators !== n.propDecorators) {
        let o = t.propDecorators, r = {};
        return Object.keys(o).forEach(i => { r[i] = ru(o[i]); }), r;
    } return t.hasOwnProperty(po) ? t[po] : null; }
    propMetadata(t) { if (!xr(t))
        return {}; let n = ws(t), o = {}; if (n !== Object) {
        let i = this.propMetadata(n);
        Object.keys(i).forEach(s => { o[s] = i[s]; });
    } let r = this._ownPropMetadata(t, n); return r && Object.keys(r).forEach(i => { let s = []; o.hasOwnProperty(i) && s.push(...o[i]), s.push(...r[i]), o[i] = s; }), o; }
    ownPropMetadata(t) { return xr(t) ? this._ownPropMetadata(t, ws(t)) || {} : {}; }
    hasLifecycleHook(t, n) { return t instanceof Pm && n in t.prototype; }
};
function ru(e) { return e ? e.map(t => { let o = t.type.annotationCls, r = t.args ? t.args : []; return new o(...r); }) : []; }
function ws(e) { let t = e.prototype ? Object.getPrototypeOf(e.prototype) : null; return (t ? t.constructor : null) || Object; }
function Lm(e, t, n, o) { t !== null ? t.applyValueToInputSignal(t, o) : e[n] = o; }
var Qs = class {
    previousValue;
    currentValue;
    firstChange;
    constructor(t, n, o) { this.previousValue = t, this.currentValue = n, this.firstChange = o; }
    isFirstChange() { return this.firstChange; }
}, Fm = (() => { let e = () => jm; return e.ngInherit = !0, e; })();
function jm(e) { return e.type.prototype.ngOnChanges && (e.setInput = KN), YN; }
function YN() { let e = Hm(this), t = e?.current; if (t) {
    let n = e.previous;
    if (n === Fe)
        e.previous = t;
    else
        for (let o in t)
            n[o] = t[o];
    e.current = null, this.ngOnChanges(t);
} }
function KN(e, t, n, o, r) { let i = this.declaredInputs[o], s = Hm(e) || JN(e, { previous: Fe, current: null }), a = s.current || (s.current = {}), c = s.previous, l = c[i]; a[i] = new Qs(l && l.currentValue, n, c === Fe), Lm(e, t, r, n); }
var Vm = "__ngSimpleChanges__";
function Hm(e) { return e[Vm] || null; }
function JN(e, t) { return e[Vm] = t; }
var mg = [];
var V = function (e, t = null, n) { for (let o = 0; o < mg.length; o++) {
    let r = mg[o];
    r(e, t, n);
} }, O = (function (e) { return e[e.TemplateCreateStart = 0] = "TemplateCreateStart", e[e.TemplateCreateEnd = 1] = "TemplateCreateEnd", e[e.TemplateUpdateStart = 2] = "TemplateUpdateStart", e[e.TemplateUpdateEnd = 3] = "TemplateUpdateEnd", e[e.LifecycleHookStart = 4] = "LifecycleHookStart", e[e.LifecycleHookEnd = 5] = "LifecycleHookEnd", e[e.OutputStart = 6] = "OutputStart", e[e.OutputEnd = 7] = "OutputEnd", e[e.BootstrapApplicationStart = 8] = "BootstrapApplicationStart", e[e.BootstrapApplicationEnd = 9] = "BootstrapApplicationEnd", e[e.BootstrapComponentStart = 10] = "BootstrapComponentStart", e[e.BootstrapComponentEnd = 11] = "BootstrapComponentEnd", e[e.ChangeDetectionStart = 12] = "ChangeDetectionStart", e[e.ChangeDetectionEnd = 13] = "ChangeDetectionEnd", e[e.ChangeDetectionSyncStart = 14] = "ChangeDetectionSyncStart", e[e.ChangeDetectionSyncEnd = 15] = "ChangeDetectionSyncEnd", e[e.AfterRenderHooksStart = 16] = "AfterRenderHooksStart", e[e.AfterRenderHooksEnd = 17] = "AfterRenderHooksEnd", e[e.ComponentStart = 18] = "ComponentStart", e[e.ComponentEnd = 19] = "ComponentEnd", e[e.DeferBlockStateStart = 20] = "DeferBlockStateStart", e[e.DeferBlockStateEnd = 21] = "DeferBlockStateEnd", e[e.DynamicComponentStart = 22] = "DynamicComponentStart", e[e.DynamicComponentEnd = 23] = "DynamicComponentEnd", e[e.HostBindingsUpdateStart = 24] = "HostBindingsUpdateStart", e[e.HostBindingsUpdateEnd = 25] = "HostBindingsUpdateEnd", e; })(O || {});
function XN(e, t, n) { let { ngOnChanges: o, ngOnInit: r, ngDoCheck: i } = t.type.prototype; if (o) {
    let s = jm(t);
    (n.preOrderHooks ??= []).push(e, s), (n.preOrderCheckHooks ??= []).push(e, s);
} r && (n.preOrderHooks ??= []).push(0 - e, r), i && ((n.preOrderHooks ??= []).push(e, i), (n.preOrderCheckHooks ??= []).push(e, i)); }
function Bm(e, t) { for (let n = t.directiveStart, o = t.directiveEnd; n < o; n++) {
    let i = e.data[n].type.prototype, { ngAfterContentInit: s, ngAfterContentChecked: a, ngAfterViewInit: c, ngAfterViewChecked: l, ngOnDestroy: u } = i;
    s && (e.contentHooks ??= []).push(-n, s), a && ((e.contentHooks ??= []).push(n, a), (e.contentCheckHooks ??= []).push(n, a)), c && (e.viewHooks ??= []).push(-n, c), l && ((e.viewHooks ??= []).push(n, l), (e.viewCheckHooks ??= []).push(n, l)), u != null && (e.destroyHooks ??= []).push(n, u);
} }
function Fs(e, t, n) { Um(e, t, 3, n); }
function js(e, t, n, o) { (e[N] & 3) === n && Um(e, t, n, o); }
function iu(e, t) { let n = e[N]; (n & 3) === t && (n &= 16383, n += 1, e[N] = n); }
function Um(e, t, n, o) { let r = o !== void 0 ? e[yn] & 65535 : 0, i = o ?? -1, s = t.length - 1, a = 0; for (let c = r; c < s; c++)
    if (typeof t[c + 1] == "number") {
        if (a = t[c], o != null && a >= o)
            break;
    }
    else
        t[c] < 0 && (e[yn] += 65536), (a < i || i == -1) && (ew(e, n, t, c), e[yn] = (e[yn] & 4294901760) + c + 2), c++; }
function vg(e, t) { V(O.LifecycleHookStart, e, t); let n = A(null); try {
    t.call(e);
}
finally {
    A(n), V(O.LifecycleHookEnd, e, t);
} }
function ew(e, t, n, o) { let r = n[o] < 0, i = n[o + 1], s = r ? -n[o] : n[o], a = e[s]; r ? e[N] >> 14 < e[yn] >> 16 && (e[N] & 3) === t && (e[N] += 16384, vg(a, i)) : vg(a, i); }
var vo = -1, bn = class {
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
function Ca(e) { return e != null && typeof e == "object" && (e.insertBeforeIndex === null || typeof e.insertBeforeIndex == "number" || Array.isArray(e.insertBeforeIndex)); }
function $m(e) { return !!(e.type & 128); }
function tw(e) { return (e.flags & 8) !== 0; }
function nw(e) { return (e.flags & 16) !== 0; }
function ow(e, t, n) { let o = 0; for (; o < n.length;) {
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
        rw(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), o++;
    }
} return o; }
function qm(e) { return e === 3 || e === 4 || e === 6; }
function rw(e) { return e.charCodeAt(0) === 64; }
function To(e, t) { if (!(t === null || t.length === 0))
    if (e === null || e.length === 0)
        e = t.slice();
    else {
        let n = -1;
        for (let o = 0; o < t.length; o++) {
            let r = t[o];
            typeof r == "number" ? n = r : n === 0 || (n === -1 || n === 2 ? yg(e, n, r, null, t[++o]) : yg(e, n, r, null, null));
        }
    } return e; }
function yg(e, t, n, o, r) { let i = 0, s = e.length; if (t === -1)
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
function Gm(e) { return e !== vo; }
function Zs(e) { return e & 32767; }
function iw(e) { return e >> 16; }
function Ys(e, t) { let n = iw(e), o = t; for (; n > 0;)
    o = o[vn], n--; return o; }
var Su = !0;
function Ks(e) { let t = Su; return Su = e, t; }
var sw = 256, Wm = sw - 1, zm = 5, aw = 0, pt = {};
function cw(e, t, n) { let o; typeof n == "string" ? o = n.charCodeAt(0) || 0 : n.hasOwnProperty(gn) && (o = n[gn]), o == null && (o = n[gn] = aw++); let r = o & Wm, i = 1 << r; t.data[e + (r >> zm)] |= i; }
function Js(e, t) { let n = Qm(e, t); if (n !== -1)
    return n; let o = t[m]; o.firstCreatePass && (e.injectorIndex = t.length, su(o.data, e), su(t, null), su(o.blueprint, null)); let r = Rd(e, t), i = e.injectorIndex; if (Gm(r)) {
    let s = Zs(r), a = Ys(r, t), c = a[m].data;
    for (let l = 0; l < 8; l++)
        t[i + l] = a[s + l] | c[s + l];
} return t[i + 8] = r, i; }
function su(e, t) { e.push(0, 0, 0, 0, 0, 0, 0, 0, t); }
function Qm(e, t) { return e.injectorIndex === -1 || e.parent && e.parent.injectorIndex === e.injectorIndex || t[e.injectorIndex + 8] === null ? -1 : e.injectorIndex; }
function Rd(e, t) { if (e.parent && e.parent.injectorIndex !== -1)
    return e.parent.injectorIndex; let n = 0, o = null, r = t; for (; r !== null;) {
    if (o = ev(r), o === null)
        return vo;
    if (n++, r = r[vn], o.injectorIndex !== -1)
        return o.injectorIndex | n << 16;
} return vo; }
function bu(e, t, n) { cw(e, t, n); }
function lw(e, t) { if (t === "class")
    return e.classes; if (t === "style")
    return e.styles; let n = e.attrs; if (n) {
    let o = n.length, r = 0;
    for (; r < o;) {
        let i = n[r];
        if (qm(i))
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
function Zm(e, t, n) { if (n & 8 || e !== void 0)
    return e; ss(t, "NodeInjector"); }
function Ym(e, t, n, o) { if (n & 8 && o === void 0 && (o = null), (n & 3) === 0) {
    let r = e[P], i = Ce(void 0);
    try {
        return r ? r.get(t, o, n & 8) : dl(t, o, n & 8);
    }
    finally {
        Ce(i);
    }
} return Zm(o, t, n); }
function Km(e, t, n, o = 0, r) { if (e !== null) {
    if (t[N] & 2048 && !(o & 2)) {
        let s = pw(e, t, n, o, pt);
        if (s !== pt)
            return s;
    }
    let i = Jm(e, t, n, o, pt);
    if (i !== pt)
        return i;
} return Ym(t, n, o, r); }
function Jm(e, t, n, o, r) { let i = dw(n); if (typeof i == "function") {
    if (!ql(t, e, o))
        return o & 1 ? Zm(r, n, o) : Ym(t, n, o, r);
    try {
        let s;
        if (s = i(o), s == null && !(o & 8))
            ss(n);
        else
            return s;
    }
    finally {
        Gl();
    }
}
else if (typeof i == "number") {
    let s = null, a = Qm(e, t), c = vo, l = o & 1 ? t[te][ue] : null;
    for ((a === -1 || o & 4) && (c = a === -1 ? Rd(e, t) : t[a + 8], c === vo || !Ig(o, !1) ? a = -1 : (s = t[m], a = Zs(c), t = Ys(c, t))); a !== -1;) {
        let u = t[m];
        if (Eg(i, a, u.data)) {
            let d = uw(a, t, n, s, o, l);
            if (d !== pt)
                return d;
        }
        c = t[a + 8], c !== vo && Ig(o, t[m].data[a + 8] === l) && Eg(i, a, t) ? (s = u, a = Zs(c), t = Ys(c, t)) : a = -1;
    }
} return r; }
function uw(e, t, n, o, r, i) { let s = t[m], a = s.data[e + 8], c = o == null ? Te(a) && Su : o != s && (a.type & 3) !== 0, l = r & 1 && i === a, u = Vs(a, s, n, c, l); return u !== null ? zr(t, s, u, a, r) : pt; }
function Vs(e, t, n, o, r) { let i = e.providerIndexes, s = t.data, a = i & 1048575, c = e.directiveStart, l = e.directiveEnd, u = i >> 20, d = o ? a : a + u, f = r ? a + u : l; for (let p = d; p < f; p++) {
    let h = s[p];
    if (p < c && n === h || p >= c && h.type === n)
        return p;
} if (r) {
    let p = s[c];
    if (p && Be(p) && p.type === n)
        return c;
} return null; }
function zr(e, t, n, o, r) { let i = e[n], s = t.data; if (i instanceof bn) {
    let a = i;
    if (a.resolving)
        throw ul("");
    let c = Ks(a.canSeeViewProviders);
    a.resolving = !0;
    let l = s[n].type || s[n], u, d = a.injectImpl ? Ce(a.injectImpl) : null, f = ql(e, o, 0);
    try {
        i = e[n] = a.factory(void 0, r, s, e, o), t.firstCreatePass && n >= o.directiveStart && XN(n, s[n], t);
    }
    finally {
        d !== null && Ce(d), Ks(c), a.resolving = !1, Gl();
    }
} return i; }
function dw(e) { if (typeof e == "string")
    return e.charCodeAt(0) || 0; let t = e.hasOwnProperty(gn) ? e[gn] : void 0; return typeof t == "number" ? t >= 0 ? t & Wm : fw : t; }
function Eg(e, t, n) { let o = 1 << e; return !!(n[t + (e >> zm)] & o); }
function Ig(e, t) { return !(e & 2) && !(e & 1 && t); }
var Jt = class {
    _tNode;
    _lView;
    constructor(t, n) { this._tNode = t, this._lView = n; }
    get(t, n, o) { return Km(this._tNode, this._lView, t, dn(o), n); }
};
function fw() { return new Jt(_(), g()); }
function Xm(e) { return ht(() => { let t = e.prototype.constructor, n = t[it] || Au(t), o = Object.prototype, r = Object.getPrototypeOf(e.prototype).constructor; for (; r && r !== o;) {
    let i = r[it] || Au(r);
    if (i && i !== n)
        return i;
    r = Object.getPrototypeOf(r);
} return i => new i; }); }
function Au(e) { return hr(e) ? () => { let t = Au(x(e)); return t && t(); } : Ht(e); }
function pw(e, t, n, o, r) { let i = e, s = t; for (; i !== null && s !== null && s[N] & 2048 && !ct(s);) {
    let a = Jm(i, s, n, o | 2, pt);
    if (a !== pt)
        return a;
    let c = i.parent;
    if (!c) {
        let l = s[Il];
        if (l) {
            let u = l.get(n, pt, o & -5);
            if (u !== pt)
                return u;
        }
        c = ev(s), s = s[vn];
    }
    i = c;
} return r; }
function ev(e) { let t = e[m], n = t.type; return n === 2 ? t.declTNode : n === 1 ? e[ue] : null; }
function Ta(e) { return lw(_(), e); }
var tv = xo("Attribute", e => ({ attributeName: e, __NG_ELEMENT_ID__: () => Ta(e) })), Dg = null;
function kd() { return Dg = Dg || new zs; }
function Ma(e) { return nv(kd().parameters(e)); }
function nv(e) { return e.map(t => hw(t)); }
function hw(e) { let t = { token: null, attribute: null, host: !1, optional: !1, self: !1, skipSelf: !1 }; if (Array.isArray(e) && e.length > 0)
    for (let n = 0; n < e.length; n++) {
        let o = e[n];
        if (o === void 0)
            continue;
        let r = Object.getPrototypeOf(o);
        if (o instanceof Rm || r.ngMetadataName === "Optional")
            t.optional = !0;
        else if (o instanceof Om || r.ngMetadataName === "SkipSelf")
            t.skipSelf = !0;
        else if (o instanceof km || r.ngMetadataName === "Self")
            t.self = !0;
        else if (o instanceof xm || r.ngMetadataName === "Host")
            t.host = !0;
        else if (o instanceof Am)
            t.token = o.token;
        else if (o instanceof tv) {
            if (o.attributeName === void 0)
                throw new D(-204, !1);
            t.attribute = o.attributeName;
        }
        else
            t.token = o;
    }
else
    e === void 0 || Array.isArray(e) && e.length === 0 ? t.token = null : t.token = e; return t; }
function gw(e, t) { let n = null, o = null; e.hasOwnProperty(Kn) || Object.defineProperty(e, Kn, { get: () => (n === null && (n = ie({ usage: 0, kind: "injectable", type: e }).compileInjectable(gg, `ng:///${e.name}/\u0275prov.js`, Ew(e, t))), n) }), e.hasOwnProperty(it) || Object.defineProperty(e, it, { get: () => { if (o === null) {
        let r = ie({ usage: 0, kind: "injectable", type: e });
        o = r.compileFactory(gg, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, typeArgumentCount: 0, deps: Ma(e), target: r.FactoryTarget.Injectable });
    } return o; }, configurable: !0 }); }
var mw = j({ provide: String, useValue: j });
function Cg(e) { return e.useClass !== void 0; }
function vw(e) { return mw in e; }
function Tg(e) { return e.useFactory !== void 0; }
function yw(e) { return e.useExisting !== void 0; }
function Ew(e, t) { let n = t || { providedIn: null }, o = { name: e.name, type: e, typeArgumentCount: 0, providedIn: n.providedIn }; return (Cg(n) || Tg(n)) && n.deps !== void 0 && (o.deps = nv(n.deps)), Cg(n) ? o.useClass = n.useClass : vw(n) ? o.useValue = n.useValue : Tg(n) ? o.useFactory = n.useFactory : yw(n) && (o.useExisting = n.useExisting), o; }
var Iw = pi("Injectable", void 0, void 0, void 0, (e, t) => gw(e, t));
function Dw() { return Po(_(), g()); }
function Po(e, t) { return new hi(ae(e, t)); }
var hi = (() => { class e {
    nativeElement;
    constructor(n) { this.nativeElement = n; }
    static __NG_ELEMENT_ID__ = Dw;
} return e; })();
function ov(e) { return e instanceof hi ? e.nativeElement : e; }
function Cw() { return this._results[Symbol.iterator](); }
var Xs = class {
    _emitDistinctChangesOnly;
    dirty = !0;
    _onDirty = void 0;
    _results = [];
    _changesDetected = !1;
    _changes = void 0;
    length = 0;
    first = void 0;
    last = void 0;
    get changes() { return this._changes ??= new or; }
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
    reset(t, n) { this.dirty = !1; let o = Ye(t); (this._changesDetected = !$h(this._results, o, n)) && (this._results = o, this.length = o.length, this.last = o[this.length - 1], this.first = o[0]); }
    notifyOnChanges() { this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.next(this); }
    onDirty(t) { this._onDirty = t; }
    setDirty() { this.dirty = !0, this._onDirty?.(); }
    destroy() { this._changes !== void 0 && (this._changes.complete(), this._changes.unsubscribe()); }
    [Symbol.iterator] = Cw;
}, Lo = "ngSkipHydration", Tw = "ngskiphydration";
function Od(e) { let t = e.mergedAttrs; if (t === null)
    return !1; for (let n = 0; n < t.length; n += 2) {
    let o = t[n];
    if (typeof o == "number")
        return !1;
    if (typeof o == "string" && o.toLowerCase() === Tw)
        return !0;
} return !1; }
function rv(e) { return e.hasAttribute(Lo); }
function Qr(e) { return (e.flags & 128) === 128; }
function Fo(e) { if (Qr(e))
    return !0; let t = e.parent; for (; t;) {
    if (Qr(e) || Od(t))
        return !0;
    t = t.parent;
} return !1; }
function iv(e) { return Qr(e) || Od(e) || Fo(e); }
var Na = (function (e) { return e[e.OnPush = 0] = "OnPush", e[e.Eager = 1] = "Eager", e[e.Default = 1] = "Default", e; })(Na || {}), wa = new Map, Mw = 0;
function Nw() { return Mw++; }
function ww(e) { wa.set(e[He], e); }
function sv(e) { return wa.get(e) || null; }
function Ru(e) { wa.delete(e[He]); }
function _w() { return wa; }
var ea = class {
    lViewId;
    nodeIndex;
    native;
    component;
    directives;
    localRefs;
    get lView() { return sv(this.lViewId); }
    constructor(t, n, o) { this.lViewId = t, this.nodeIndex = n, this.native = o; }
};
function we(e) { let t = Hs(e); if (t) {
    if (oe(t)) {
        let n = t, o, r, i;
        if (av(e)) {
            if (o = Rw(n, e), o == -1)
                throw new Error("The provided component was not found in the application");
            r = e;
        }
        else if (bw(e)) {
            if (o = kw(n, e), o == -1)
                throw new Error("The provided directive was not found in the application");
            i = cv(o, n);
        }
        else if (o = Ng(n, e), o == -1)
            return null;
        let s = L(n[o]), a = Hs(s), c = a && !Array.isArray(a) ? a : Mg(n, o, s);
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
        let r = Hs(o);
        if (r) {
            let i = Array.isArray(r) ? r : r.lView;
            if (!i)
                return null;
            let s = Ng(i, n);
            if (s >= 0) {
                let a = L(i[s]), c = Mg(i, s, a);
                $e(a, c), t = c;
                break;
            }
        }
    }
} return t || null; }
function Mg(e, t, n) { return new ea(e[He], t, n); }
var ku = "__ngContext__";
function $e(e, t) { oe(t) ? (e[ku] = t[He], ww(t)) : e[ku] = t; }
function Hs(e) { let t = e[ku]; return typeof t == "number" ? sv(t) : t || null; }
function Sw(e) { let t = Hs(e); return t ? oe(t) ? t : t.lView : null; }
function av(e) { return e && e.constructor && e.constructor.\u0275cmp; }
function bw(e) { return e && e.constructor && e.constructor.\u0275dir; }
function Ng(e, t) { let n = e[m]; for (let o = I; o < n.bindingStartIndex; o++)
    if (L(e[o]) === t)
        return o; return -1; }
function Aw(e) { if (e.child)
    return e.child; if (e.next)
    return e.next; for (; e.parent && !e.parent.next;)
    e = e.parent; return e.parent && e.parent.next; }
function Rw(e, t) { let n = e[m].components; if (n)
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        if (Ee(r, e)[$] === t)
            return r;
    }
else if (Ee(I, e)[$] === t)
    return I; return -1; }
function kw(e, t) { let n = e[m].firstChild; for (; n;) {
    let o = n.directiveStart, r = n.directiveEnd;
    for (let i = o; i < r; i++)
        if (e[i] === t)
            return n.index;
    n = Aw(n);
} return -1; }
function cv(e, t) { let n = t[m].data[e]; if (n.directiveStart === 0)
    return F; let o = []; for (let r = n.directiveStart; r < n.directiveEnd; r++) {
    let i = t[r];
    av(i) || o.push(i);
} return o; }
function Ow(e, t) { let n = t[m].data[e]; return Te(n) ? t[n.directiveStart + n.componentOffset] : null; }
function xw(e, t) { let n = e[m].data[t]; if (n && n.localNames) {
    let o = {}, r = n.index + 1;
    for (let i = 0; i < n.localNames.length; i += 2)
        o[n.localNames[i]] = e[r], r++;
    return o;
} return null; }
function lv(e) { return dv(e[$t]); }
function uv(e) { return dv(e[ge]); }
function dv(e) { for (; e !== null && !J(e);)
    e = e[ge]; return e; }
function wg(e) { let t = we(e); if (t === null)
    return null; if (t.component === void 0) {
    let n = t.lView;
    if (n === null)
        return null;
    t.component = Ow(t.nodeIndex, n);
} return t.component; }
function Pw(e) { Gw(e); let t = we(e), n = t ? t.lView : null; return n === null ? null : n[$]; }
function Lw(e) { let t = we(e), n = t ? t.lView : null; if (n === null)
    return null; let o; for (; n[m].type === 2 && (o = It(n));)
    n = o; return ct(n) ? null : n[$]; }
function Fw(e) { let t = we(e), n = t ? t.lView : null; if (n === null)
    return le.NULL; let o = n[m].data[t.nodeIndex]; return new Jt(o, n); }
function jw(e) { let t = we(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[m], r = o.data[t.nodeIndex], i = [], s = r.providerIndexes & 1048575, a = r.directiveEnd; for (let c = s; c < a; c++) {
    let l = o.data[c];
    qw(l) && (l = l.type), i.push(l);
} return i; }
function Vw(e) { if (e instanceof Text)
    return []; let t = we(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[m], r = t.nodeIndex; return o?.data[r] ? (t.directives === void 0 && (t.directives = cv(r, n)), t.directives === null ? [] : [...t.directives]) : []; }
var fv = (function (e) { return e[e.Default = 0] = "Default", e[e.OnPush = 1] = "OnPush", e; })(fv || {}), pv = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 1] = "None", e; })(pv || {});
function Hw(e) { let t = we(e); if (t === null)
    return {}; if (t.localRefs === void 0) {
    let n = t.lView;
    if (n === null)
        return {};
    t.localRefs = xw(n, t.nodeIndex);
} return t.localRefs || {}; }
function Bw(e) { return we(e).native; }
function Uw(e) { let t = we(e), n = t === null ? null : t.lView; if (n === null)
    return []; let o = n[m], r = n[Ut], i = o.cleanup, s = []; if (i && r)
    for (let a = 0; a < i.length;) {
        let c = i[a++], l = i[a++];
        if (typeof c == "string") {
            let u = c, d = L(n[l]), f = r[i[a++]], p = i[a++], h = typeof p == "boolean" || p >= 0 ? "dom" : "output", v = typeof p == "boolean" ? p : !1;
            e == d && s.push({ element: e, name: u, callback: f, useCapture: v, type: h });
        }
    } return s.sort($w), s; }
function $w(e, t) { return e.name == t.name ? 0 : e.name < t.name ? -1 : 1; }
function qw(e) { return e.type !== void 0 && e.declaredInputs !== void 0 && e.resolveHostDirectives !== void 0; }
function Gw(e) { if (typeof Element < "u" && !(e instanceof Element))
    throw new Error("Expecting instance of DOM Element"); }
var Ou;
function Ww(e) { Ou = e; }
function _a() { if (Ou !== void 0)
    return Ou; if (typeof document < "u")
    return document; throw new D(210, !1); }
var At = new T("", { factory: () => zw }), zw = "ng";
var xd = new T(""), Qw = new T("", { providedIn: "platform", factory: () => "unknown" }), Zw = new T(""), Yw = new T("", { factory: () => y(Qt).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null }), hv = { breakpoints: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840], placeholderResolution: 30, disableImageSizeWarning: !1, disableImageLazyLoadWarning: !1 }, Kw = new T("", { factory: () => hv });
function Jw(e) { return e; }
var jo = (() => { class e {
    static \u0275prov = U({ token: e, providedIn: "root", factory: () => { let n = new e; return (typeof ngServerMode > "u" || !ngServerMode) && (n.store = gv(y(Qt), y(At))), n; } });
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
function gv(e, t) { let n = e.getElementById(t + "-state"); if (n?.textContent)
    try {
        return JSON.parse(n.textContent);
    }
    catch (o) {
        console.warn("Exception while restoring TransferState for app " + t, o);
    } return {}; }
var Pd = "h", Ld = "b", mv = "f", vv = "n", gi = "e", Sa = "t", Vo = "c", mi = "x", _t = "r", ba = "i", vi = "n", Ho = "d", Aa = "l", Ra = "di", yi = "s", Fd = "p", Ei = "t", Vn = new T(""), yv = !1, jd = new T("", { factory: () => yv }), Vd = new T(""), ka = new T(""), Hd = !1, Ev = new T("", { factory: () => [] }), Bd = new T(""), Ii = new T("", { factory: () => new Map }), Xw = new T(""), ta = { passive: !0, capture: !0 }, au = new WeakMap, cu = new WeakMap, Kt = new WeakMap, na = ["click", "keydown"], oa = ["mouseenter", "mouseover", "focusin"], _s = new Map, Zr = class {
    callbacks = new Set;
    listener = () => { for (let t of this.callbacks)
        t(); };
};
function Iv(e, t) { let n = cu.get(e); if (!n) {
    n = new Zr, cu.set(e, n);
    for (let o of na)
        e.addEventListener(o, n.listener, ta);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    cu.delete(e);
    for (let i of na)
        e.removeEventListener(i, r, ta);
} }; }
function Dv(e, t) { let n = au.get(e); if (!n) {
    n = new Zr, au.set(e, n);
    for (let o of oa)
        e.addEventListener(o, n.listener, ta);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    for (let i of oa)
        e.removeEventListener(i, r, ta);
    au.delete(e);
} }; }
function e_(e) { let t = Cv(e); return new IntersectionObserver(n => { for (let o of n)
    o.isIntersecting && Kt.has(o.target) && Kt.get(o.target)?.get(t)?.listener(); }, e); }
function t_(e, t, n, o) { let r = Cv(o), i = Kt.get(e)?.get(r); _s.has(r) || _s.set(r, { observer: n(o), count: 0 }); let s = _s.get(r); if (!i) {
    i = new Zr, s.observer.observe(e);
    let a = Kt.get(e);
    a ? a.set(r, i) : (a = new Map, Kt.set(e, a)), a.set(r, i), s.count++;
} return i.callbacks.add(t), () => { if (Kt.get(e)?.has(r)) {
    if (i.callbacks.delete(t), i.callbacks.size === 0) {
        s.observer.unobserve(e), s.count--;
        let a = Kt.get(e);
        a && (a.delete(r), a.size === 0 && Kt.delete(e));
    }
    s.count === 0 && (s.observer.disconnect(), _s.delete(r));
} }; }
function Cv(e) {
    return e ? `${e.rootMargin}/${typeof e.threshold == "number" ? e.threshold : e.threshold?.join(`
`)}` : "";
}
var Bo = "ngb";
function Ud(e, t, n = null) { if (t.length === 0 || e.nodeType !== Node.ELEMENT_NODE)
    return; let o = e.getAttribute(ao.JSACTION), r = t.reduce((s, a) => (o?.indexOf(a) ?? -1) === -1 ? s + a + ":;" : s, ""); e.setAttribute(ao.JSACTION, `${o ?? ""}${r}`); let i = n ?? ""; i !== "" && r.length > 0 && e.setAttribute(Bo, i); }
var Tv = (e, t, n) => { let o = e, r = o.__jsaction_fns ?? new Map, i = r.get(t) ?? []; i.push(n), r.set(t, i), o.__jsaction_fns = r; }, $d = (e, t) => { let n = e, o = n.getAttribute(Bo) ?? "", r = t.get(o) ?? new Set; r.has(n) || r.add(n), t.set(o, r); };
function n_(e, t) { if (e.length > 0) {
    let n = [];
    for (let r of e)
        t.has(r) && (n = [...n, ...t.get(r)]);
    new Set(n).forEach(qd);
} }
var qd = e => { e.removeAttribute(ao.JSACTION), e.removeAttribute(Bo), e.__jsaction_fns = void 0; }, Gd = new T("", { factory: () => ({}) });
function Wd(e, t) { let n = t?.__jsaction_fns?.get(e.type); if (!(!n || !t?.isConnected))
    for (let o of n)
        o(e); }
var xu = new Map;
function Mv(e, t) { return xu.set(e, t), () => xu.delete(e); }
var _g = !1, Nv = (e, t, n, o) => { };
function o_(e, t, n, o) { Nv(e, t, n, o); }
function wv() { _g || (Nv = (e, t, n, o) => { let r = e[P].get(At); xu.get(r)?.(t, n, o); }, _g = !0); }
var Rt = new T(""), _v = (() => { class e {
    registry = new Map;
    cleanupFns = new Map;
    jsActionMap = y(Ii);
    contract = y(Gd);
    add(n, o) { if (this.registry.set(n, o), this.awaitingCallbacks.has(n)) {
        let r = this.awaitingCallbacks.get(n);
        for (let i of r)
            i();
    } }
    get(n) { return this.registry.get(n) ?? null; }
    has(n) { return this.registry.has(n); }
    cleanup(n) { n_(n, this.jsActionMap); for (let o of n)
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
function Uo(e) { return (e.flags & 32) === 32; }
var Sv = "__nghData__", Oa = Sv, bv = "__nghDeferData__", xa = bv;
function r_(e) { return e === Sv || e === bv; }
var yo = "ngh", Av = "nghm", Rv = () => null;
function i_(e, t, n = !1) { let o = e.getAttribute(yo); if (o == null)
    return null; let [r, i] = o.split("|"); if (o = n ? i : r, !o)
    return null; let s = i ? `|${i}` : "", a = n ? r : s, c = {}; if (o !== "") {
    let u = t.get(jo, null, { optional: !0 });
    u !== null && (c = u.get(Oa, [])[Number(o)]);
} let l = { data: c, firstChild: e.firstChild ?? null }; return n && (l.firstChild = e, Pa(l, 0, e.nextSibling)), a ? e.setAttribute(yo, a) : e.removeAttribute(yo), l; }
function kv() { Rv = i_; }
function Ov(e, t, n = !1) { return Rv(e, t, n); }
function zd(e) { let t = e._lView; return t[m].type === 2 ? null : (ct(t) && (t = t[I]), t); }
function s_(e) { return e.textContent?.replace(/\s/gm, ""); }
function a_(e) { let t = _a(), n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, { acceptNode(i) { let s = s_(i); return s === "ngetn" || s === "ngtns" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; } }), o, r = []; for (; o = n.nextNode();)
    r.push(o); for (let i of r)
    i.textContent === "ngetn" ? i.replaceWith(t.createTextNode("")) : i.remove(); }
var xv = (function (e) { return e.Hydrated = "hydrated", e.Skipped = "skipped", e.Mismatched = "mismatched", e; })(xv || {}), c_ = "__ngDebugHydrationInfo__";
function l_(e) { return e[c_] ?? null; }
function Pa(e, t, n) { e.segmentHeads ??= {}, e.segmentHeads[t] = n; }
function Pu(e, t) { return e.segmentHeads?.[t] ?? null; }
function Di(e) { return e.get(Bd, !1, { optional: !0 }); }
var u_ = !1;
function d_() { u_ = !1; }
function Pv(e, t) { let n = e.data, o = n[gi]?.[t] ?? null; return o === null && n[Vo]?.[t] && (o = Qd(e, t)), o; }
function f_(e, t) { return e.data[gi]?.[t] !== void 0; }
function Lv(e, t) { return e.data[Vo]?.[t] ?? null; }
function Qd(e, t) { let n = Lv(e, t) ?? [], o = 0; for (let r of n)
    o += r[_t] * (r[mi] ?? 1); return o; }
function Fv(e) { if (typeof e.disconnectedNodes > "u") {
    let t = e.data[Ho];
    e.disconnectedNodes = t ? new Set(t) : null;
} return e.disconnectedNodes; }
function La(e, t) { if (typeof e.disconnectedNodes > "u") {
    let n = e.data[Ho];
    e.disconnectedNodes = n ? new Set(n) : null;
} return !!Fv(e)?.has(t); }
function Fa(e, t) { let n = e[de]; return n !== null && !Sr() && !Uo(t) && !La(n, t.index - I); }
function Zd(e, t) { let n = t, o = e.corruptedTextNodes; n.textContent === "" ? o.set(n, "ngetn") : n.nextSibling?.nodeType === Node.TEXT_NODE && o.set(n, "ngtns"); }
function jv(e) { let t = []; return e !== null && (e.has(4) && t.push(...oa), e.has(3) && t.push(...na)), t; }
function p_(e, t) { let n = t.get(Rt), r = t.get(jo).get(xa, {}), i = !1, s = e, a = null, c = []; for (; !i && s;) {
    i = n.has(s);
    let l = n.hydrating.get(s);
    if (a === null && l != null) {
        a = l.promise;
        break;
    }
    c.unshift(s), s = r[s][Fd];
} return { parentBlockPromise: a, hydrationQueue: c }; }
function h_(e) { let t = e.body.querySelectorAll("[jsaction]"), n = new Set, o = [oa.join(":;"), na.join(":;")].join("|"); for (let r of t) {
    let i = r.getAttribute("jsaction"), s = r.getAttribute("ngb");
    i?.match(o) && s !== null && n.add(r);
} return n; }
function Vv(e, t) { let n = h_(e), o = t.get(Ii); for (let r of n)
    $d(r, o); }
var Hv = () => ({});
function g_(e) { let t = e.get(jo, null, { optional: !0 }); return t !== null ? t.get(xa, {}) : {}; }
function Bv() { Hv = g_; }
function m_(e) { return Hv(e); }
function v_(e) { return typeof e == "object" && e.trigger === 5; }
function y_(e) { return e[Ei]?.find(n => v_(n))?.delay ?? null; }
function E_(e) { let t = e[Ei]; if (t)
    for (let n of t) {
        if (n === 2)
            return !0;
        if (typeof n == "object" && n.trigger === 2)
            return n.intersectionObserverOptions || !0;
    } return null; }
function Sg(e, t) { return e[Ei]?.includes(t) ?? !1; }
function I_(e) { return { data: e, hydrate: { idle: Sg(e, 0), immediate: Sg(e, 1), timer: y_(e), viewport: E_(e) } }; }
function Uv(e) { let t = m_(e), n = new Map; for (let o in t)
    n.set(o, I_(t[o])); return n; }
function lu(e) { return !!e && e.nodeType === Node.COMMENT_NODE && e.textContent?.trim() === Av; }
function bg(e) { for (; e && e.nodeType === Node.TEXT_NODE;)
    e = e.previousSibling; return e; }
function $v(e) { for (let o of e.body.childNodes)
    if (lu(o))
        return; let t = bg(e.body.previousSibling); if (lu(t))
    return; let n = bg(e.head.lastChild); if (!lu(n))
    throw new D(-507, !1); }
function qv(e, t) { let n = e.contentQueries; if (n !== null) {
    let o = A(null);
    try {
        for (let r = 0; r < n.length; r += 2) {
            let i = n[r], s = n[r + 1];
            if (s !== -1) {
                let a = e.data[s];
                br(i), a.contentQueries(2, t[s], s);
            }
        }
    }
    finally {
        A(o);
    }
} }
function Lu(e, t, n) { br(0); let o = A(null); try {
    t(e, n);
}
finally {
    A(o);
} }
function Yd(e, t, n) { if (Cl(t)) {
    let o = A(null);
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
        A(o);
    }
} }
var qe = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", e[e.ExperimentalIsolatedShadowDom = 4] = "ExperimentalIsolatedShadowDom", e; })(qe || {}), D_ = { name: "custom-elements" }, C_ = { name: "no-errors-schema" }, Gv = !1;
function T_(e) { Gv = e; }
function M_() { return Gv; }
var Wv = !1;
function N_(e) { Wv = e; }
function w_() { return Wv; }
var Ss;
function zv() { if (Ss === void 0 && (Ss = null, be.trustedTypes))
    try {
        Ss = be.trustedTypes.createPolicy("angular", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return Ss; }
function $o(e) { return zv()?.createHTML(e) || e; }
function __(e) { return zv()?.createScriptURL(e) || e; }
var bs;
function Kd() { if (bs === void 0 && (bs = null, be.trustedTypes))
    try {
        bs = be.trustedTypes.createPolicy("angular#unsafe-bypass", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return bs; }
function Ag(e) { return Kd()?.createHTML(e) || e; }
function Rg(e) { return Kd()?.createScript(e) || e; }
function kg(e) { return Kd()?.createScriptURL(e) || e; }
var St = class {
    changingThisBreaksApplicationSecurity;
    constructor(t) { this.changingThisBreaksApplicationSecurity = t; }
    toString() { return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${ts})`; }
}, Fu = class extends St {
    getTypeName() { return "HTML"; }
}, ju = class extends St {
    getTypeName() { return "Style"; }
}, Vu = class extends St {
    getTypeName() { return "Script"; }
}, Hu = class extends St {
    getTypeName() { return "URL"; }
}, Bu = class extends St {
    getTypeName() { return "ResourceURL"; }
};
function kt(e) { return e instanceof St ? e.changingThisBreaksApplicationSecurity : e; }
function qo(e, t) { let n = Qv(e); if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL")
        return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${ts})`);
} return n === t; }
function Qv(e) { return e instanceof St && e.getTypeName() || null; }
function S_(e) { return new Fu(e); }
function b_(e) { return new ju(e); }
function A_(e) { return new Vu(e); }
function R_(e) { return new Hu(e); }
function k_(e) { return new Bu(e); }
function Zv(e) { let t = new $u(e); return O_() ? new Uu(t) : t; }
var Uu = class {
    inertDocumentHelper;
    constructor(t) { this.inertDocumentHelper = t; }
    getInertBodyElement(t) { t = "<body><remove></remove>" + t; try {
        let n = new window.DOMParser().parseFromString($o(t), "text/html").body;
        return n === null ? this.inertDocumentHelper.getInertBodyElement(t) : (n.firstChild?.remove(), n);
    }
    catch {
        return null;
    } }
}, $u = class {
    defaultDoc;
    inertDocument;
    constructor(t) { this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"); }
    getInertBodyElement(t) { let n = this.inertDocument.createElement("template"); return n.innerHTML = $o(t), n; }
};
function O_() { try {
    return !!new window.DOMParser().parseFromString($o(""), "text/html");
}
catch {
    return !1;
} }
var x_ = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function Ci(e) { return e = String(e), e.match(x_) ? e : "unsafe:" + e; }
function gt(e) { let t = {}; for (let n of e.split(","))
    t[n] = !0; return t; }
function Go(...e) { let t = {}; for (let n of e)
    for (let o in n)
        n.hasOwnProperty(o) && (t[o] = !0); return t; }
var Yv = gt("area,br,col,hr,img,wbr"), Kv = gt("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), Jv = gt("rp,rt"), P_ = Go(Jv, Kv), L_ = Go(Kv, gt("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), F_ = Go(Jv, gt("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), qu = Go(Yv, L_, F_, P_), Jd = gt("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), j_ = gt("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), V_ = gt("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"), Gu = Go(Jd, j_, V_), H_ = gt("script,style,template"), Wu = Go(Jd, gt("action,formaction,data,codebase")), zu = class {
    sanitizedSomething = !1;
    buf = [];
    sanitizeChildren(t) { let n = t.firstChild, o = !0, r = []; for (; n;) {
        if (n.nodeType === Node.ELEMENT_NODE ? o = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, o && n.firstChild) {
            r.push(n), n = $_(n);
            continue;
        }
        for (; n;) {
            n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
            let i = U_(n);
            if (i) {
                n = i;
                break;
            }
            n = r.pop();
        }
    } return this.buf.join(""); }
    startElement(t) { let n = Og(t).toLowerCase(); if (!qu.hasOwnProperty(n))
        return this.sanitizedSomething = !0, !H_.hasOwnProperty(n); this.buf.push("<"), this.buf.push(n); let o = t.attributes; for (let r = 0; r < o.length; r++) {
        let i = o.item(r), s = i.name, a = s.toLowerCase();
        if (!Gu.hasOwnProperty(a)) {
            this.sanitizedSomething = !0;
            continue;
        }
        let c = i.value;
        Jd[a] && (c = Ci(c)), this.buf.push(" ", s, '="', xg(c), '"');
    } return this.buf.push(">"), !0; }
    endElement(t) { let n = Og(t).toLowerCase(); qu.hasOwnProperty(n) && !Yv.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">")); }
    chars(t) { this.buf.push(xg(t)); }
};
function B_(e, t) { return (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !== Node.DOCUMENT_POSITION_CONTAINED_BY; }
function U_(e) { let t = e.nextSibling; if (t && e !== t.previousSibling)
    throw Xv(t); return t; }
function $_(e) { let t = e.firstChild; if (t && B_(e, t))
    throw Xv(t); return t; }
function Og(e) { let t = e.nodeName; return typeof t == "string" ? t : "FORM"; }
function Xv(e) { return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`); }
var q_ = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, G_ = /([^\#-~ |!])/g;
function xg(e) { return e.replace(/&/g, "&amp;").replace(q_, function (t) { let n = t.charCodeAt(0), o = t.charCodeAt(1); return "&#" + ((n - 55296) * 1024 + (o - 56320) + 65536) + ";"; }).replace(G_, function (t) { return "&#" + t.charCodeAt(0) + ";"; }).replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
var As;
function ey(e, t) { let n = null; try {
    As = As || Zv(e);
    let o = t ? String(t) : "";
    n = As.getInertBodyElement(o);
    let r = 5, i = o;
    do {
        if (r === 0)
            throw new Error("Failed to sanitize html because the input is unstable");
        r--, o = i, i = n.innerHTML, n = As.getInertBodyElement(o);
    } while (o !== i);
    let a = new zu().sanitizeChildren(Qu(n) || n);
    return $o(a);
}
finally {
    if (n) {
        let o = Qu(n) || n;
        for (; o.firstChild;)
            o.firstChild.remove();
    }
} }
function Qu(e) { return "content" in e && W_(e) ? e.content : null; }
function W_(e) { return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE"; }
var z_ = /^>|^->|<!--|-->|--!>|<!-$/g, Q_ = /(<|>)/g, Z_ = "\u200B$1\u200B";
function Y_(e) { return e.replace(z_, t => t.replace(Q_, Z_)); }
function Xd(e, t) { return e.createText(t); }
function ty(e, t, n) { e.setValue(t, n); }
function ef(e, t) { return e.createComment(Y_(t)); }
function ja(e, t, n) { return e.createElement(t, n); }
function An(e, t, n, o, r) { e.insertBefore(t, n, o, r); }
function ny(e, t, n) { e.appendChild(t, n); }
function Pg(e, t, n, o, r) { o !== null ? An(e, t, n, o, r) : ny(e, t, n); }
function Ti(e, t, n, o) { e.removeChild(null, t, n, o); }
function oy(e) { e.textContent = ""; }
function K_(e, t, n) { e.setAttribute(t, "style", n); }
function J_(e, t, n) { n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n); }
function ry(e, t, n) { let { mergedAttrs: o, classes: r, styles: i } = n; o !== null && ow(e, t, o), r !== null && J_(e, t, r), i !== null && K_(e, t, i); }
function X_(e) { let t = g(); e.src = "", e.srcdoc = $o(""), Ti(t[w], e); }
var Hn = (function (e) { return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e; })(Hn || {});
function iy(e) { let t = Mi(); return t ? Ag(t.sanitize(Hn.HTML, e) || "") : qo(e, "HTML") ? Ag(kt(e)) : ey(_a(), b(e)); }
function sy(e) { let t = Mi(); return t ? t.sanitize(Hn.STYLE, e) || "" : qo(e, "Style") ? kt(e) : b(e); }
function tf(e) { let t = Mi(); return t ? t.sanitize(Hn.URL, e) || "" : qo(e, "URL") ? kt(e) : Ci(b(e)); }
function nf(e) { let t = Mi(); if (t)
    return kg(t.sanitize(Hn.RESOURCE_URL, e) || ""); if (qo(e, "ResourceURL"))
    return kg(kt(e)); throw new D(904, !1); }
function ay(e) { let t = Mi(); if (t)
    return Rg(t.sanitize(Hn.SCRIPT, e) || ""); if (qo(e, "Script"))
    return Rg(kt(e)); throw new D(905, !1); }
function cy(e) { return $o(e[0]); }
function ly(e) { return __(e[0]); }
var eS = { embed: { src: !0 }, frame: { src: !0 }, iframe: { src: !0 }, media: { src: !0 }, script: { src: !0, href: !0, "xlink:href": !0 }, base: { href: !0 }, link: { href: !0 }, object: { data: !0, codebase: !0 } };
function tS(e, t) { return eS[e]?.[t] === !0 ? nf : tf; }
function uy(e, t, n) { return tS(t, n)(e); }
function Mi() { let e = g(); return e && e[Ve].sanitizer; }
var Rs = new Set(["href", "xlink:href"]), nS = { iframe: { sandbox: !0, allow: !0, allowfullscreen: !0, referrerpolicy: !0, csp: !0, fetchpriority: !0 }, animate: { attributename: !0, to: Rs, values: Rs, from: Rs }, set: { attributename: !0, to: Rs }, animatemotion: { attributename: !0 }, animatetransform: { attributename: !0 } };
function dy(e, t, n) { let o = t.toLowerCase(), r = n.toLowerCase(), i = nS[o]?.[r]; if (!i)
    return e; let s = Oe(); if (s.type !== 2)
    return e; let a = g(); if (o === "iframe") {
    let l = ae(s, a);
    X_(l);
} if (typeof i != "boolean") {
    let u = ae(s, a).getAttribute("attributeName");
    if (u && i.has(u.toLowerCase()))
        throw new D(-910, !1);
    return e;
} let c = !1; throw new D(-910, c); }
function oS() { return Ke([]); }
function fy(e) { return e.ownerDocument.defaultView; }
function py(e) { return e.ownerDocument; }
function of(e) { return e.ownerDocument.body; }
var rS = "\uFFFD";
function ho(e) { return e instanceof Function ? e() : e; }
function iS(e, t, n) { let o = e.length; for (;;) {
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
function sS(e, t, n, o) { let r = 0; if (o) {
    for (; r < t.length && typeof t[r] == "string"; r += 2)
        if (t[r] === "class" && iS(t[r + 1].toLowerCase(), n, 0) !== -1)
            return !0;
}
else if (rf(e))
    return !1; if (r = t.indexOf(1, r), r > -1) {
    let i;
    for (; ++r < t.length && typeof (i = t[r]) == "string";)
        if (i.toLowerCase() === n)
            return !0;
} return !1; }
function rf(e) { return e.type === 4 && e.value !== hy; }
function aS(e, t, n) { let o = e.type === 4 && !n ? hy : e.value; return t === o; }
function cS(e, t, n) { let o = 4, r = e.attrs, i = r !== null ? dS(r) : 0, s = !1; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "number") {
        if (!s && !et(o) && !et(c))
            return !1;
        if (s && et(c))
            continue;
        s = !1, o = c | o & 1;
        continue;
    }
    if (!s)
        if (o & 4) {
            if (o = 2 | o & 1, c !== "" && !aS(e, c, n) || c === "" && t.length === 1) {
                if (et(o))
                    return !1;
                s = !0;
            }
        }
        else if (o & 8) {
            if (r === null || !sS(e, r, c, n)) {
                if (et(o))
                    return !1;
                s = !0;
            }
        }
        else {
            let l = t[++a], u = lS(c, r, rf(e), n);
            if (u === -1) {
                if (et(o))
                    return !1;
                s = !0;
                continue;
            }
            if (l !== "") {
                let d;
                if (u > i ? d = "" : d = r[u + 1].toLowerCase(), o & 2 && l !== d) {
                    if (et(o))
                        return !1;
                    s = !0;
                }
            }
        }
} return et(o) || s; }
function et(e) { return (e & 1) === 0; }
function lS(e, t, n, o) { if (t === null)
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
    return fS(t, e); }
function gy(e, t, n = !1) { for (let o = 0; o < t.length; o++)
    if (cS(e, t[o], n))
        return !0; return !1; }
function uS(e) { let t = e.attrs; if (t != null) {
    let n = t.indexOf(5);
    if ((n & 1) === 0)
        return t[n + 1];
} return null; }
function dS(e) { for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (qm(n))
        return t;
} return e.length; }
function fS(e, t) { let n = e.indexOf(4); if (n > -1)
    for (n++; n < e.length;) {
        let o = e[n];
        if (typeof o == "number")
            return -1;
        if (o === t)
            return n;
        n++;
    } return -1; }
function pS(e, t) { e: for (let n = 0; n < t.length; n++) {
    let o = t[n];
    if (e.length === o.length) {
        for (let r = 0; r < e.length; r++)
            if (e[r] !== o[r])
                continue e;
        return !0;
    }
} return !1; }
function Lg(e, t) { return e ? ":not(" + t.trim() + ")" : t; }
function hS(e) { let t = e[0], n = 1, o = 2, r = "", i = !1; for (; n < e.length;) {
    let s = e[n];
    if (typeof s == "string")
        if (o & 2) {
            let a = e[++n];
            r += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
        }
        else
            o & 8 ? r += "." + s : o & 4 && (r += " " + s);
    else
        r !== "" && !et(s) && (t += Lg(i, r), r = ""), o = s, i = i || !et(o);
    n++;
} return r !== "" && (t += Lg(i, r)), t; }
function gS(e) { return e.map(hS).join(","); }
function mS(e) { let t = [], n = [], o = 1, r = 2; for (; o < e.length;) {
    let i = e[o];
    if (typeof i == "string")
        r === 2 ? i !== "" && t.push(i, e[++o]) : r === 8 && n.push(i);
    else {
        if (!et(r))
            break;
        r = i;
    }
    o++;
} return n.length && t.push(1, ...n), t; }
var B = {};
function sf(e, t, n, o, r, i, s, a, c, l, u) { let d = I + o, f = d + r, p = vS(d, f), h = typeof l == "function" ? l() : l; return p[m] = { type: e, blueprint: p, template: n, queries: null, viewQuery: a, declTNode: t, data: p.slice().fill(null, d), bindingStartIndex: d, expandoStartIndex: f, hostBindingOpCodes: null, firstCreatePass: !0, firstUpdatePass: !0, staticViewQueries: !1, staticContentQueries: !1, preOrderHooks: null, preOrderCheckHooks: null, contentHooks: null, contentCheckHooks: null, viewHooks: null, viewCheckHooks: null, destroyHooks: null, cleanup: null, contentQueries: null, components: null, directiveRegistry: typeof i == "function" ? i() : i, pipeRegistry: typeof s == "function" ? s() : s, firstChild: null, schemas: c, consts: h, incompleteFirstPass: !1, ssrId: u }; }
function vS(e, t) { let n = []; for (let o = 0; o < t; o++)
    n.push(o < e ? null : B); return n; }
function my(e) { let t = e.tView; return t === null || t.incompleteFirstPass ? e.tView = sf(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t; }
function Va(e, t, n, o, r, i, s, a, c, l, u) { let d = t.blueprint.slice(); return d[q] = r, d[N] = o | 4 | 128 | 8 | 64 | 1024, (l !== null || e && e[N] & 2048) && (d[N] |= 2048), wl(d), d[Q] = d[vn] = e, d[$] = n, d[Ve] = s || e && e[Ve], d[w] = a || e && e[w], d[P] = c || e && e[P] || null, d[ue] = i, d[He] = Nw(), d[de] = u, d[Il] = l, d[te] = t.type == 2 ? e[te] : d, d; }
function yS(e, t, n) { let o = ae(t, e), r = my(n), i = e[Ve].rendererFactory, s = cf(e, Va(e, r, null, af(n), o, t, null, i.createRenderer(o, n), null, null, null)); return e[t.index] = s; }
function af(e) { let t = 16; return e.signals ? t = 4096 : e.onPush && (t = 64), t; }
function Ni(e, t, n, o) { if (n === 0)
    return -1; let r = t.length; for (let i = 0; i < n; i++)
    t.push(o), e.blueprint.push(o), e.data.push(null); return r; }
function cf(e, t) { return e[$t] ? e[Tr][ge] = t : e[$t] = t, e[Tr] = t, t; }
function vy(e = 1) { yy(R(), g(), fe() + e, !1); }
function yy(e, t, n, o) { if (!o)
    if ((t[N] & 3) === 3) {
        let i = e.preOrderCheckHooks;
        i !== null && Fs(t, i, n);
    }
    else {
        let i = e.preOrderHooks;
        i !== null && js(t, i, 0, n);
    } zt(n); }
var Ha = (function (e) { return e[e.None = 0] = "None", e[e.SignalBased = 1] = "SignalBased", e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", e; })(Ha || {});
function Xt(e, t, n, o) { let r = A(null); try {
    let [i, s, a] = e.inputs[n], c = null;
    (s & Ha.SignalBased) !== 0 && (c = t[i][K]), c !== null && c.transformFn !== void 0 ? o = c.transformFn(o) : a !== null && (o = a.call(t, o)), e.setInput !== null ? e.setInput(t, c, o, n, i) : Lm(t, c, i, o);
}
finally {
    A(r);
} }
var ra = (function (e) { return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e; })(ra || {}), Zu;
function lf(e, t) { return Zu(e, t); }
function ES(e) { Zu === void 0 && (Zu = e()); }
var Ey = new T("", { factory: () => !1 }), Iy = new T("", { factory: () => IS }), IS = 4e3, DS = !1, Bn = (typeof ngServerMode > "u" || !ngServerMode) && typeof document < "u" && typeof document?.documentElement?.getAnimations == "function";
function Ba(e) { return e[P].get(Ey, DS); }
function CS(e, t, n) { let o = Mo.get(e); if (o) {
    for (let r of t)
        o.classList.push(r);
    for (let r of n)
        o.cleanupFns.push(r);
}
else
    Mo.set(e, { classList: t, cleanupFns: n }); }
function uf(e) { let t = Mo.get(e); if (t) {
    for (let n of t.cleanupFns)
        n();
    Mo.delete(e);
} Sn.delete(e); }
var TS = () => { }, Mo = new WeakMap, Sn = new WeakMap, Yr = new WeakMap, Pr = new WeakSet;
function Yu(e, t) { let n = Yr.get(e); if (n && n.length > 0) {
    let o = n.findIndex(r => r === t);
    o > -1 && n.splice(o, 1);
} n?.length === 0 && Yr.delete(e); }
function MS(e, t) { let n = Yr.get(e); if (!n || n.length === 0)
    return; let o = t.parentNode, r = t.previousSibling; for (let i = n.length - 1; i >= 0; i--) {
    let s = n[i], a = s.parentNode;
    s === t ? (n.splice(i, 1), Pr.add(s), s.dispatchEvent(new CustomEvent("animationend", { detail: { cancel: !0 } }))) : (r && s === r || a && o && a !== o) && (n.splice(i, 1), s.dispatchEvent(new CustomEvent("animationend", { detail: { cancel: !0 } })), s.parentNode?.removeChild(s));
} }
function df(e, t) { let n = Yr.get(e); n ? n.includes(t) || n.push(t) : Yr.set(e, [t]); }
function ia(e) { let t = e[at] ??= {}; return t.enter ??= new Map; }
function Rn(e) { let t = e[at] ??= {}; return t.leave ??= new Map; }
function Dy(e) { let t = typeof e == "function" ? e() : e, n = Array.isArray(t) ? t : null; return typeof t == "string" && (n = t.trim().split(/\s+/).filter(o => o)), n; }
function NS(e, t) { if (!Bn)
    return; let n = Mo.get(e); if (n && n.classList.length > 0 && wS(e, n.classList))
    for (let o of n.classList)
        t.removeClass(e, o); uf(e); }
function wS(e, t) { for (let n of t)
    if (e.classList.contains(n))
        return !0; return !1; }
function Kr(e) { return e.composedPath ? e.composedPath()[0] : e.target; }
function ff(e, t) { let n = Sn.get(t); return n === void 0 ? !0 : t === Kr(e) && (n.animationName !== void 0 && e.animationName === n.animationName || n.propertyName !== void 0 && (n.propertyName === "all" || e.propertyName === n.propertyName)); }
function Ua(e, t, n) { let o = e.get(t.index) ?? { animateFns: [] }; o.animateFns.push(n), e.set(t.index, o); }
function Ku(e, t) { if (e)
    for (let n of e)
        n(); for (let n of t)
    n(); }
function Ju(e, t) { let n = Rn(e).get(t.index); n && (n.resolvers = void 0); }
function ks(e, t, n, o, r) { Yu(t, n), Ku(o, r), Ju(e, t); }
function sa(e) { if (!e)
    return 0; let t = e.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3; return parseFloat(e) * t; }
function wn(e, t) { return e.getPropertyValue(t).split(",").map(o => o.trim()); }
function _S(e) { let t = wn(e, "transition-property"), n = wn(e, "transition-duration"), o = wn(e, "transition-delay"), r = { propertyName: "", duration: 0, animationName: void 0 }; for (let i = 0; i < t.length; i++) {
    let s = sa(o[i]) + sa(n[i]);
    s > r.duration && (r.propertyName = t[i], r.duration = s);
} return r; }
function SS(e) { let t = wn(e, "animation-name"), n = wn(e, "animation-delay"), o = wn(e, "animation-duration"), r = wn(e, "animation-iteration-count"), i = { animationName: "", propertyName: void 0, duration: 0 }; for (let s = 0; s < t.length; s++) {
    let a = sa(n[s]) + sa(o[s]), c = r[s];
    a > i.duration && c !== "infinite" && (i.animationName = t[s], i.duration = a);
} return i; }
function Cy(e, t) { return e !== void 0 && e.duration > t.duration; }
function Ty(e) { return (e.animationName != null || e.propertyName != null) && e.duration > 0; }
function bS(e, t) { let n = getComputedStyle(e), o = SS(n), r = _S(n), i = o.duration > r.duration ? o : r; Cy(t.get(e), i) || Ty(i) && t.set(e, i); }
function My(e, t, n) { if (!n)
    return; let o = e.getAnimations(); return o.length === 0 ? bS(e, t) : AS(e, t, o); }
function AS(e, t, n) { let o = { animationName: void 0, propertyName: void 0, duration: 0 }; for (let r of n) {
    let i = r.effect?.getTiming();
    if (i?.iterations === 1 / 0)
        continue;
    let s = typeof i?.duration == "number" ? i.duration : 0, a = (i?.delay ?? 0) + s, c = r.playbackRate;
    c !== void 0 && c !== 0 && c !== 1 && (a /= Math.abs(c));
    let l, u;
    r.animationName ? u = r.animationName : l = r.transitionProperty, a >= o.duration && (o = { animationName: u, propertyName: l, duration: a });
} Cy(t.get(e), o) || Ty(o) && t.set(e, o); }
var kn = new Set, $a = (function (e) { return e[e.CHANGE_DETECTION = 0] = "CHANGE_DETECTION", e[e.AFTER_NEXT_RENDER = 1] = "AFTER_NEXT_RENDER", e; })($a || {}), Un = new T(""), Fg = new Set;
function X(e) { Fg.has(e) || (Fg.add(e), performance?.mark?.("mark_feature_usage", { detail: { feature: e } })); }
var qa = (() => { class e {
    impl = null;
    execute() { this.impl?.execute(); }
    static \u0275prov = U({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), pf = [0, 1, 2, 3], hf = (() => { class e {
    ngZone = y(G);
    scheduler = y(Pe);
    errorHandler = y(Dt, { optional: !0 });
    sequences = new Set;
    deferredRegistrations = new Set;
    executing = !1;
    constructor() { y(Un, { optional: !0 }); }
    execute() { let n = this.sequences.size > 0; n && V(O.AfterRenderHooksStart), this.executing = !0; for (let o of pf)
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
    register(n) { let { view: o } = n; o !== void 0 ? ((o[En] ??= []).push(n), Cn(o), o[N] |= 8192) : this.executing ? this.deferredRegistrations.add(n) : this.addSequence(n); }
    addSequence(n) { this.sequences.add(n), this.scheduler.notify(7); }
    unregister(n) { this.executing && this.sequences.has(n) ? (n.erroredOrDestroyed = !0, n.pipelinedValue = void 0, n.once = !0) : (this.sequences.delete(n), this.deferredRegistrations.delete(n)); }
    maybeTrace(n, o) { return o ? o.run($a.AFTER_NEXT_RENDER, n) : n(); }
    static \u0275prov = U({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Jr = class {
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
    destroy() { this.impl.unregister(this), this.unregisterOnDestroy?.(); let t = this.view?.[En]; t && (this.view[En] = t.filter(n => n !== this)); }
};
function Ny(e, t) { let n = t?.injector ?? y(le); return typeof ngServerMode < "u" && ngServerMode ? Ga : (X("NgAfterRender"), wy(e, n, t, !1)); }
function gf(e, t) { let n = t?.injector ?? y(le); return typeof ngServerMode < "u" && ngServerMode ? Ga : (X("NgAfterNextRender"), wy(e, n, t, !0)); }
function RS(e) { return e instanceof Function ? [void 0, void 0, e, void 0] : [e.earlyRead, e.write, e.mixedReadWrite, e.read]; }
function wy(e, t, n, o) { let r = t.get(qa); r.impl ??= t.get(hf); let i = t.get(Un, null, { optional: !0 }), s = n?.manualCleanup !== !0 ? t.get(Ue) : null, a = t.get(io, null, { optional: !0 }), c = new Jr(r.impl, RS(e), a?.view, o, s, i?.snapshot(null)); return r.impl.register(c), c; }
var Ga = { destroy() { } }, Wa = new T("", { factory: () => ({ queue: new Set, isScheduled: !1, scheduler: null, injector: y(Se) }) });
function _y(e, t, n) { let o = e.get(Wa); if (Array.isArray(t))
    for (let r of t)
        o.queue.add(r), n?.detachedLeaveAnimationFns?.push(r);
else
    o.queue.add(t), n?.detachedLeaveAnimationFns?.push(t); o.scheduler && o.scheduler(e); }
function kS(e, t) { let n = e.get(Wa); if (t.detachedLeaveAnimationFns) {
    for (let o of t.detachedLeaveAnimationFns)
        n.queue.delete(o);
    t.detachedLeaveAnimationFns = void 0;
} }
function OS(e) { let t = e.get(Wa); t.isScheduled || (gf(() => { t.isScheduled = !1; for (let n of t.queue)
    n(); t.queue.clear(); }, { injector: t.injector }), t.isScheduled = !0); }
function za(e) { let t = e.get(Wa); t.scheduler = OS, t.scheduler(e); }
function mf(e, t) { for (let [n, o] of t)
    _y(e, o.animateFns); }
function jg(e, t, n, o) { let r = e?.[at]?.enter; t !== null && r && r.has(n.index) && mf(o, r); }
function go(e, t, n, o, r, i, s, a) { if (r != null) {
    let c, l = !1;
    J(r) ? c = r : oe(r) && (l = !0, r = r[q]);
    let u = L(r);
    e === 0 && o !== null ? (jg(a, o, i, n), s == null ? ny(t, o, u) : An(t, o, u, s || null, !0)) : e === 1 && o !== null ? (jg(a, o, i, n), An(t, o, u, s || null, !0), MS(i, u)) : e === 2 ? (a?.[at]?.leave?.has(i.index) && df(i, u), Pr.delete(u), Vg(a, i, n, d => { if (Pr.has(u)) {
        Pr.delete(u);
        return;
    } Ti(t, u, l, d); })) : e === 3 && (Pr.delete(u), Vg(a, i, n, () => { t.destroyNode(u); })), c != null && HS(t, e, n, c, i, o, s);
} }
function Sy(e, t) { by(e, t), t[q] = null, t[ue] = null; }
function xS(e, t, n, o, r, i) { o[q] = r, o[ue] = t, Qa(e, o, n, 1, r, i); }
function by(e, t) { t[Ve].changeDetectionScheduler?.notify(9), Qa(e, t, t[w], 2, null, null); }
function PS(e) { let t = e[$t]; if (!t)
    return uu(e[m], e); for (; t;) {
    let n = null;
    if (oe(t))
        n = t[$t];
    else {
        let o = t[W];
        o && (n = o);
    }
    if (!n) {
        for (; t && !t[ge] && t !== e;)
            oe(t) && uu(t[m], t), t = t[Q];
        t === null && (t = e), oe(t) && uu(t[m], t), n = t && t[ge];
    }
    t = n;
} }
function vf(e, t) { let n = e[In], o = n.indexOf(t); n.splice(o, 1); }
function wi(e, t) { if (lt(t))
    return; let n = t[w]; n.destroyNode && Qa(e, t, n, 3, null, null), PS(t); }
function uu(e, t) { if (lt(t))
    return; let n = A(null); try {
    t[N] &= -129, t[N] |= 256, t[Re] && Vt(t[Re]), jS(e, t), FS(e, t), t[m].type === 1 && t[w].destroy();
    let o = t[qt];
    if (o !== null && J(t[Q])) {
        o !== t[Q] && vf(o, t);
        let r = t[st];
        r !== null && r.detachView(e);
    }
    Ru(t);
}
finally {
    A(n);
} }
function Vg(e, t, n, o) { let r = e?.[at]; if (r == null || r.leave == null || !r.leave.has(t.index))
    return o(!1); e && kn.add(e[He]), _y(n, () => { if (r.leave && r.leave.has(t.index)) {
    let s = r.leave.get(t.index), a = [];
    if (s) {
        for (let c = 0; c < s.animateFns.length; c++) {
            let l = s.animateFns[c], { promise: u } = l();
            a.push(u);
        }
        r.detachedLeaveAnimationFns = void 0;
    }
    r.running = Promise.allSettled(a), LS(e, o);
}
else
    e && kn.delete(e[He]), o(!1); }, r); }
function LS(e, t) { let n = e[at]?.running; if (n) {
    n.then(() => { e[at].running = void 0, kn.delete(e[He]), t(!0); });
    return;
} t(!1); }
function FS(e, t) { let n = e.cleanup, o = t[Ut]; if (n !== null)
    for (let s = 0; s < n.length - 1; s += 2)
        if (typeof n[s] == "string") {
            let a = n[s + 3];
            a >= 0 ? o[a]() : o[-a].unsubscribe(), s += 2;
        }
        else {
            let a = o[n[s + 1]];
            n[s].call(a);
        } o !== null && (t[Ut] = null); let r = t[Et]; if (r !== null) {
    t[Et] = null;
    for (let s = 0; s < r.length; s++) {
        let a = r[s];
        a();
    }
} let i = t[Bt]; if (i !== null) {
    t[Bt] = null;
    for (let s of i)
        s.destroy();
} }
function jS(e, t) { let n; if (e != null && (n = e.destroyHooks) != null)
    for (let o = 0; o < n.length; o += 2) {
        let r = t[n[o]];
        if (!(r instanceof bn)) {
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
function yf(e, t, n) { return Ay(e, t.parent, n); }
function Ay(e, t, n) { let o = t; for (; o !== null && o.type & 168;)
    t = o, o = t.parent; if (o === null)
    return n[q]; if (Te(o)) {
    let { encapsulation: r } = e.data[o.directiveStart + o.componentOffset];
    if (r === qe.None || r === qe.Emulated)
        return null;
} return ae(o, n); }
function Ry(e, t, n) { return Oy(e, t, n); }
function ky(e, t, n) { return e.type & 40 ? ae(e, n) : null; }
var Oy = ky, Xu;
function xy(e, t) { Oy = e, Xu = t; }
function Ef(e, t, n, o) { let r = yf(e, o, t), i = t[w], s = o.parent || t[ue], a = Ry(s, o, t); if (r != null)
    if (Array.isArray(n))
        for (let c = 0; c < n.length; c++)
            Pg(i, r, n[c], a, !1);
    else
        Pg(i, r, n, a, !1); Xu !== void 0 && Xu(i, o, t, n, r); }
function _n(e, t) { if (t !== null) {
    let n = t.type;
    if (n & 3)
        return ae(t, e);
    if (n & 4)
        return ed(-1, e[t.index]);
    if (n & 8) {
        let o = t.child;
        if (o !== null)
            return _n(e, o);
        {
            let r = e[t.index];
            return J(r) ? ed(-1, r) : L(r);
        }
    }
    else {
        if (n & 128)
            return _n(e, t.next);
        if (n & 32)
            return lf(t, e)() || L(e[t.index]);
        {
            let o = Py(e, t);
            if (o !== null) {
                if (Array.isArray(o))
                    return o[0];
                let r = It(e[te]);
                return _n(r, o);
            }
            else
                return _n(e, t.next);
        }
    }
} return null; }
function Py(e, t) { if (t !== null) {
    let o = e[te][ue], r = t.projection;
    return o.projection[r];
} return null; }
function ed(e, t) { let n = W + e + 1; if (n < t.length) {
    let o = t[n], r = o[m].firstChild;
    if (r !== null)
        return _n(o, r);
} return t[Je]; }
function If(e, t, n, o, r, i, s) { for (; n != null;) {
    let a = o[P];
    if (n.type === 128) {
        n = n.next;
        continue;
    }
    let c = o[n.index], l = n.type;
    if (s && t === 0 && (c && $e(L(c), o), n.flags |= 2), !Uo(n))
        if (l & 8)
            If(e, t, n.child, o, r, i, !1), go(t, e, a, r, c, n, i, o);
        else if (l & 32) {
            let u = lf(n, o), d;
            for (; d = u();)
                go(t, e, a, r, d, n, i, o);
            go(t, e, a, r, c, n, i, o);
        }
        else
            l & 16 ? Ly(e, t, o, n, r, i) : go(t, e, a, r, c, n, i, o);
    n = s ? n.projectionNext : n.next;
} }
function Qa(e, t, n, o, r, i) { If(n, o, e.firstChild, t, r, i, !1); }
function VS(e, t, n) { let o = t[w], r = yf(e, n, t), i = n.parent || t[ue], s = Ry(i, n, t); Ly(o, 0, t, n, r, s); }
function Ly(e, t, n, o, r, i) { let s = n[te], c = s[ue].projection[o.projection]; if (Array.isArray(c))
    for (let l = 0; l < c.length; l++) {
        let u = c[l];
        go(t, e, n[P], r, u, o, i, n);
    }
else {
    let l = c, u = s[Q];
    Qr(o) && (l.flags |= 128), If(e, t, l, u, r, i, !0);
} }
function HS(e, t, n, o, r, i, s) { let a = o[Je], c = L(o); a !== c && go(t, e, n, i, a, r, s); for (let l = W; l < o.length; l++) {
    let u = o[l];
    Qa(u[m], u, e, t, i, a);
} }
function BS(e, t, n, o, r) { if (t)
    r ? e.addClass(n, o) : e.removeClass(n, o);
else {
    let i = o.indexOf("-") === -1 ? void 0 : ra.DashCase;
    r == null ? e.removeStyle(n, o, i) : (typeof r == "string" && r.endsWith("!important") && (r = r.slice(0, -10), i |= ra.Important), e.setStyle(n, o, r, i));
} }
function Fy(e, t, n, o, r) { let i = fe(), s = o & 2; try {
    zt(-1), s && t.length > I && yy(e, t, I, !1);
    let a = s ? O.TemplateUpdateStart : O.TemplateCreateStart;
    V(a, r, n), n(o, r);
}
finally {
    zt(i);
    let a = s ? O.TemplateUpdateEnd : O.TemplateCreateEnd;
    V(a, r, n);
} }
function Za(e, t, n) { WS(e, t, n), (n.flags & 64) === 64 && zS(e, t, n); }
function Wo(e, t, n = ae) { let o = t.localNames; if (o !== null) {
    let r = t.index + 1;
    for (let i = 0; i < o.length; i += 2) {
        let s = o[i + 1], a = s === -1 ? n(t, e) : e[s];
        e[r++] = a;
    }
} }
function US(e, t, n, o) { let i = o.get(jd, yv) || n === qe.ShadowDom || n === qe.ExperimentalIsolatedShadowDom, s = e.selectRootElement(t, i); return $S(s), s; }
function $S(e) { jy(e); }
var jy = () => null;
function qS(e) { rv(e) ? oy(e) : a_(e); }
function Vy() { jy = qS; }
function GS(e) { return e === "class" ? "className" : e === "for" ? "htmlFor" : e === "formaction" ? "formAction" : e === "innerHtml" ? "innerHTML" : e === "readonly" ? "readOnly" : e === "tabindex" ? "tabIndex" : e; }
function Df(e, t, n, o, r, i) { let s = t[m]; if (Xa(e, s, t, n, o)) {
    Te(e) && Hy(t, e.index);
    return;
} e.type & 3 && (n = GS(n)), Cf(e, t, n, o, r, i); }
function Cf(e, t, n, o, r, i) { if (e.type & 3) {
    let s = ae(e, t);
    o = i != null ? i(o, e.value || "", n) : o, r.setProperty(s, n, o);
}
else
    e.type & 12; }
function Hy(e, t) { let n = Ee(t, e); n[N] & 16 || (n[N] |= 64); }
function WS(e, t, n) { let o = n.directiveStart, r = n.directiveEnd; Te(n) && yS(t, n, e.data[o + n.componentOffset]), e.firstCreatePass || Js(n, t); let i = n.initialInputs; for (let s = o; s < r; s++) {
    let a = e.data[s], c = zr(t, e, s, n);
    if ($e(c, t), i !== null && YS(t, s - o, c, a, n, i), Be(a)) {
        let l = Ee(n.index, t);
        l[$] = zr(t, e, s, n);
    }
} }
function zS(e, t, n) { let o = n.directiveStart, r = n.directiveEnd, i = n.index, s = ig(); try {
    zt(i);
    for (let a = o; a < r; a++) {
        let c = e.data[a], l = t[a];
        Es(a), (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) && QS(c, l);
    }
}
finally {
    zt(-1), Es(s);
} }
function QS(e, t) { e.hostBindings !== null && e.hostBindings(1, t); }
function Tf(e, t) { let n = e.directiveRegistry, o = null; if (n)
    for (let r = 0; r < n.length; r++) {
        let i = n[r];
        gy(t, i.selectors, !1) && (o ??= [], Be(i) ? o.unshift(i) : o.push(i));
    } return o; }
function ZS(e, t, n, o, r, i) { let s = ae(e, t); Ya(t[w], s, i, e.value, n, o, r); }
function Ya(e, t, n, o, r, i, s) { if (i == null)
    e.removeAttribute(t, r, n);
else {
    let a = s == null ? b(i) : s(i, o || "", r);
    e.setAttribute(t, r, a, n);
} }
function YS(e, t, n, o, r, i) { let s = i[t]; if (s !== null)
    for (let a = 0; a < s.length; a += 2) {
        let c = s[a], l = s[a + 1];
        Xt(o, n, c, l);
    } }
function Ka(e, t, n, o, r) { let i = I + n, s = t[m], a = r(s, t, e, o, n); t[i] = a, ut(e, !0); let c = e.type === 2; return c ? (ry(t[w], a, e), (eg() === 0 || to(e)) && $e(a, t), tg()) : $e(a, t), Ar() && (!c || !Uo(e)) && Ef(s, t, a, e), e; }
function Ja(e) { let t = e; return jl() ? Vl() : (t = t.parent, ut(t, !1)), t; }
function By(e, t, n) { return (e === null || Be(e)) && (n = Nr(n[t.index])), n[w]; }
function Mf(e, t) { let n = e[P]; if (!n)
    return; let o; try {
    o = n.get(Tt, null);
}
catch {
    o = null;
} o?.(t); }
function Xa(e, t, n, o, r) { let i = e.inputs?.[o], s = e.hostDirectiveInputs?.[o], a = !1; if (s)
    for (let c = 0; c < s.length; c += 2) {
        let l = s[c], u = s[c + 1], d = t.data[l];
        Xt(d, n[l], u, r), a = !0;
    } if (i)
    for (let c of i) {
        let l = n[c], u = t.data[c];
        Xt(u, l, o, r), a = !0;
    } return a; }
function KS(e, t, n, o, r, i) { let s = null, a = null, c = null, l = !1, u = e.directiveToIndex.get(o.type); if (typeof u == "number" ? s = u : [s, a, c] = u, a !== null && c !== null && e.hostDirectiveInputs?.hasOwnProperty(r)) {
    let d = e.hostDirectiveInputs[r];
    for (let f = 0; f < d.length; f += 2) {
        let p = d[f];
        if (p >= a && p <= c) {
            let h = t.data[p], v = d[f + 1];
            Xt(h, n[p], v, i), l = !0;
        }
        else if (p > c)
            break;
    }
} return s !== null && o.inputs.hasOwnProperty(r) && (Xt(o, n[s], r, i), l = !0), l; }
function JS(e, t) { let n = Ee(t, e), o = n[m]; XS(o, n); let r = n[q]; r !== null && n[de] === null && (n[de] = Ov(r, n[P])), V(O.ComponentStart); try {
    ec(o, n, n[$]);
}
finally {
    V(O.ComponentEnd, n[$]);
} }
function XS(e, t) { for (let n = t.length; n < e.blueprint.length; n++)
    t.push(e.blueprint[n]); }
function ec(e, t, n) { Cs(t); try {
    let o = e.viewQuery;
    o !== null && Lu(1, o, n);
    let r = e.template;
    r !== null && Fy(e, t, r, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), t[st]?.finishViewCreation(e), e.staticContentQueries && qv(e, t), e.staticViewQueries && Lu(2, e.viewQuery, n);
    let i = e.components;
    i !== null && eb(t, i);
}
catch (o) {
    throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), o;
}
finally {
    t[N] &= -5, Ts();
} }
function eb(e, t) { for (let n = 0; n < t.length; n++)
    JS(e, t[n]); }
function zo(e, t, n, o) { let r = A(null); try {
    let i = t.tView, a = e[N] & 4096 ? 4096 : 16, c = Va(e, i, n, a, null, t, null, null, o?.injector ?? null, o?.embeddedViewInjector ?? null, o?.dehydratedView ?? null), l = e[t.index];
    c[qt] = l;
    let u = e[st];
    return u !== null && (c[st] = u.createEmbeddedView(i)), ec(i, c, n), c;
}
finally {
    A(r);
} }
function On(e, t) { return !t || t.firstChild === null || Qr(e); }
function No(e, t, n, o, r = !1) { for (; n !== null;) {
    if (n.type === 128) {
        n = r ? n.projectionNext : n.next;
        continue;
    }
    let i = t[n.index];
    i !== null && o.push(L(i)), J(i) && tc(i, o);
    let s = n.type;
    if (s & 8)
        No(e, t, n.child, o);
    else if (s & 32) {
        let a = lf(n, t), c;
        for (; c = a();)
            o.push(c);
    }
    else if (s & 16) {
        let a = Py(t, n);
        if (Array.isArray(a))
            o.push(...a);
        else {
            let c = It(t[te]);
            No(c[m], c, a, o, !0);
        }
    }
    n = r ? n.projectionNext : n.next;
} return o; }
function tc(e, t) { for (let n = W; n < e.length; n++) {
    let o = e[n], r = o[m].firstChild;
    r !== null && No(o[m], o, r, t);
} e[Je] !== e[q] && t.push(e[Je]); }
function Uy(e) { if (e[En] !== null) {
    for (let t of e[En])
        t.impl.addSequence(t);
    e[En].length = 0;
} }
var $y = [];
function tb(e) { return e[Re] ?? nb(e); }
function nb(e) { let t = $y.pop() ?? Object.create(rb); return t.lView = e, t; }
function ob(e) { e.lView[Re] !== e && (e.lView = null, $y.push(e)); }
var rb = se(H({}, Lt), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { Cn(e.lView); }, consumerOnSignalRead() { this.lView[Re] = this; } });
function ib(e) { let t = e[Re] ?? Object.create(sb); return t.lView = e, t; }
var sb = se(H({}, Lt), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { let t = It(e.lView); for (; t && !qy(t[m]);)
        t = It(t); t && gs(t); }, consumerOnSignalRead() { this.lView[Re] = this; } });
function qy(e) { return e.type !== 2; }
function Gy(e) { if (e[Bt] === null)
    return; let t = !0; for (; t;) {
    let n = !1;
    for (let o of e[Bt])
        o.dirty && (n = !0, o.zone === null || Zone.current === o.zone ? o.run() : o.zone.run(() => o.run()));
    t = n && !!(e[N] & 8192);
} }
var ab = 100;
function Wy(e, t = 0) { let o = e[Ve].rendererFactory, r = !1; r || o.begin?.(); try {
    cb(e, t);
}
finally {
    r || o.end?.();
} }
function cb(e, t) { let n = Bl(); try {
    cr(!0), td(e, t);
    let o = 0;
    for (; no(e);) {
        if (o === ab)
            throw new D(103, !1);
        o++, td(e, 1);
    }
}
finally {
    cr(n);
} }
function zy(e, t, n, o) { if (lt(t))
    return; let r = t[N], i = !1, s = !1; Cs(t); let a = !0, c = null, l = null; i || (qy(e) ? (l = tb(t), c = vt(l)) : qi() === null ? (a = !1, l = ib(t), c = vt(l)) : t[Re] && (Vt(t[Re]), t[Re] = null)); try {
    wl(t), Ul(e.bindingStartIndex), n !== null && Fy(e, t, n, 2, o);
    let u = (r & 3) === 3;
    if (!i)
        if (u) {
            let p = e.preOrderCheckHooks;
            p !== null && Fs(t, p, null);
        }
        else {
            let p = e.preOrderHooks;
            p !== null && js(t, p, 0, null), iu(t, 0);
        }
    if (s || lb(t), Gy(t), Qy(t, 0), e.contentQueries !== null && qv(e, t), !i)
        if (u) {
            let p = e.contentCheckHooks;
            p !== null && Fs(t, p);
        }
        else {
            let p = e.contentHooks;
            p !== null && js(t, p, 1), iu(t, 1);
        }
    db(e, t);
    let d = e.components;
    d !== null && Yy(t, d, 0);
    let f = e.viewQuery;
    if (f !== null && Lu(2, f, o), !i)
        if (u) {
            let p = e.viewCheckHooks;
            p !== null && Fs(t, p);
        }
        else {
            let p = e.viewHooks;
            p !== null && js(t, p, 2), iu(t, 2);
        }
    if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[ps]) {
        for (let p of t[ps])
            p();
        t[ps] = null;
    }
    i || (Uy(t), t[N] &= -73);
}
catch (u) {
    throw i || Cn(t), u;
}
finally {
    l !== null && (jt(l, c), a && ob(l)), Ts();
} }
function Qy(e, t) { for (let n = lv(e); n !== null; n = uv(n))
    for (let o = W; o < n.length; o++) {
        let r = n[o];
        Zy(r, t);
    } }
function lb(e) { for (let t = lv(e); t !== null; t = uv(t)) {
    if (!(t[N] & 2))
        continue;
    let n = t[In];
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        gs(r);
    }
} }
function ub(e, t, n) { V(O.ComponentStart); let o = Ee(t, e); try {
    Zy(o, n);
}
finally {
    V(O.ComponentEnd, o[$]);
} }
function Zy(e, t) { hs(e) && td(e, t); }
function td(e, t) { let o = e[m], r = e[N], i = e[Re], s = !!(t === 0 && r & 16); if (s ||= !!(r & 64 && t === 0), s ||= !!(r & 1024), s ||= !!(i?.dirty && zn(i)), s ||= !1, i && (i.dirty = !1), e[N] &= -9217, s)
    zy(o, e, o.template, e[$]);
else if (r & 8192) {
    let a = A(null);
    try {
        Gy(e), Qy(e, 1);
        let c = o.components;
        c !== null && Yy(e, c, 1), Uy(e);
    }
    finally {
        A(a);
    }
} }
function Yy(e, t, n) { for (let o = 0; o < t.length; o++)
    ub(e, t[o], n); }
function db(e, t) { let n = e.hostBindingOpCodes; if (n !== null)
    try {
        for (let o = 0; o < n.length; o++) {
            let r = n[o];
            if (r < 0)
                zt(~r);
            else {
                let i = r, s = n[++o], a = n[++o];
                rg(s, i);
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
        zt(-1);
    } }
function _i(e, t) { let n = Bl() ? 64 : 1088; for (e[Ve].changeDetectionScheduler?.notify(t); e;) {
    e[N] |= n;
    let o = It(e);
    if (ct(e) && !o)
        return e;
    e = o;
} return null; }
function Ky(e, t, n, o) { return [e, !0, 0, t, null, o, null, n, null, null]; }
function Jy(e, t) { let n = W + t; if (n < e.length)
    return e[n]; }
function Qo(e, t, n, o = !0) { let r = t[m]; if (fb(r, t, e, n), o) {
    let s = ed(n, e), a = t[w], c = a.parentNode(e[Je]);
    c !== null && xS(r, e[ue], a, t, c, s);
} let i = t[de]; i !== null && i.firstChild !== null && (i.firstChild = null); }
function Nf(e, t) { let n = Xr(e, t); return n !== void 0 && wi(n[m], n), n; }
function Xr(e, t) { if (e.length <= W)
    return; let n = W + t, o = e[n]; if (o) {
    let r = o[qt];
    r !== null && r !== e && vf(r, o), t > 0 && (e[n - 1][ge] = o[ge]);
    let i = Ir(e, W + t);
    Sy(o[m], o);
    let s = i[st];
    s !== null && s.detachView(i[m]), o[Q] = null, o[ge] = null, o[N] &= -129;
} return o; }
function fb(e, t, n, o) { let r = W + o, i = n.length; o > 0 && (n[r - 1][ge] = t), o < i - W ? (t[ge] = n[r], fl(n, W + o, t)) : (n.push(t), t[ge] = null), t[Q] = n; let s = t[qt]; s !== null && n !== s && Xy(s, t); let a = t[st]; a !== null && a.insertView(e), ms(t), t[N] |= 128; }
function Xy(e, t) { let n = e[In], o = t[Q]; if (oe(o))
    e[N] |= 2;
else {
    let r = o[Q][te];
    t[te] !== r && (e[N] |= 2);
} n === null ? e[In] = [t] : n.push(t); }
var tn = class {
    _lView;
    _cdRefInjectingView;
    _appRef = null;
    _attachedToViewContainer = !1;
    exhaustive;
    get rootNodes() { let t = this._lView, n = t[m]; return No(n, t, n.firstChild, []); }
    constructor(t, n) { this._lView = t, this._cdRefInjectingView = n; }
    get context() { return this._lView[$]; }
    set context(t) { this._lView[$] = t; }
    get destroyed() { return lt(this._lView); }
    destroy() { if (this._appRef)
        this._appRef.detachView(this);
    else if (this._attachedToViewContainer) {
        let t = this._lView[Q];
        if (J(t)) {
            let n = t[Mr], o = n ? n.indexOf(this) : -1;
            o > -1 && (Xr(t, o), Ir(n, o));
        }
        this._attachedToViewContainer = !1;
    } wi(this._lView[m], this._lView); }
    onDestroy(t) { _r(this._lView, t); }
    markForCheck() { _i(this._cdRefInjectingView || this._lView, 4); }
    detach() { this._lView[N] &= -129; }
    reattach() { ms(this._lView), this._lView[N] |= 128; }
    detectChanges() { this._lView[N] |= 1024, Wy(this._lView); }
    checkNoChanges() { }
    attachToViewContainerRef() { if (this._appRef)
        throw new D(902, !1); this._attachedToViewContainer = !0; }
    detachFromAppRef() { this._appRef = null; let t = ct(this._lView), n = this._lView[qt]; n !== null && !t && vf(n, this._lView), by(this._lView[m], this._lView); }
    attachToAppRef(t) { if (this._attachedToViewContainer)
        throw new D(902, !1); this._appRef = t; let n = ct(this._lView), o = this._lView[qt]; o !== null && !n && Xy(o, this._lView), ms(this._lView); }
};
function pb(e) { return no(e._lView) || !!(e._lView[N] & 64); }
function hb(e) { gs(e._lView); }
var ei = (() => { class e {
    _declarationLView;
    _declarationTContainer;
    elementRef;
    static __NG_ELEMENT_ID__ = gb;
    constructor(n, o, r) { this._declarationLView = n, this._declarationTContainer = o, this.elementRef = r; }
    get ssrId() { return this._declarationTContainer.tView?.ssrId || null; }
    createEmbeddedView(n, o) { return this.createEmbeddedViewImpl(n, o); }
    createEmbeddedViewImpl(n, o, r) { let i = zo(this._declarationLView, this._declarationTContainer, n, { embeddedViewInjector: o, dehydratedView: r }); return new tn(i); }
} return e; })();
function gb() { return nc(_(), g()); }
function nc(e, t) { return e.type & 4 ? new ei(t, e, Po(e, t)) : null; }
var nd = "<-- AT THIS LOCATION", mb = "/guide/hydration#third-party-scripts-with-dom-manipulation";
function vb(e) { switch (e) {
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
function yb(e, t) {
    let n = `During serialization, Angular was unable to find an element in the DOM:

`, o = `${Cb(e, t, !1)}

`, r = Mb();
    throw new D(-502, n + o + r);
}
function eE(e) {
    let t = "During serialization, Angular detected DOM nodes that were created outside of Angular context and provided as projectable nodes (likely via `ViewContainerRef.createComponent` or `createComponent` APIs). Hydration is not supported for such cases, consider refactoring the code to avoid this pattern or using `ngSkipHydration` on the host element of the component.\n\n", n = `${Tb(e)}

`, o = t + n + Nb();
    return new D(-503, o);
}
function Eb(e) { let t = []; if (e.attrs)
    for (let n = 0; n < e.attrs.length;) {
        let o = e.attrs[n++];
        if (typeof o == "number")
            break;
        let r = e.attrs[n++];
        t.push(`${o}="${aa(r)}"`);
    } return t.join(" "); }
var Ib = new Set(["ngh", "ng-version", "ng-server-context"]);
function Db(e) { let t = []; for (let n = 0; n < e.attributes.length; n++) {
    let o = e.attributes[n];
    Ib.has(o.name) || t.push(`${o.name}="${aa(o.value)}"`);
} return t.join(" "); }
function du(e, t = "\u2026") { switch (e.type) {
    case 1: return `#text${e.value ? `(${e.value})` : ""}`;
    case 2:
        let o = Eb(e), r = e.value.toLowerCase();
        return `<${r}${o ? " " + o : ""}>${t}</${r}>`;
    case 8: return "<!-- ng-container -->";
    case 4: return "<!-- container -->";
    default: return `#node(${vb(e.type)})`;
} }
function Bs(e, t = "\u2026") { let n = e; switch (n.nodeType) {
    case Node.ELEMENT_NODE:
        let o = n.tagName.toLowerCase(), r = Db(n);
        return `<${o}${r ? " " + r : ""}>${t}</${o}>`;
    case Node.TEXT_NODE:
        let i = n.textContent ? aa(n.textContent) : "";
        return `#text${i ? `(${i})` : ""}`;
    case Node.COMMENT_NODE: return `<!-- ${aa(n.textContent ?? "")} -->`;
    default: return `#node(${n.nodeType})`;
} }
function Cb(e, t, n) {
    let r = "";
    t.prev ? (r += `  \u2026
`, r += "  " + du(t.prev) + `
`) : t.type && t.type & 12 && (r += `  \u2026
`), n ? (r += "  " + du(t) + `
`, r += `  <!-- container -->  ${nd}
`) : r += "  " + du(t) + `  ${nd}
`, r += `  \u2026
`;
    let i = t.type ? yf(e[m], t, e) : null;
    return i && (r = Bs(i, `
` + r)), r;
}
function Tb(e) {
    let n = "", o = e;
    return o.previousSibling && (n += `  \u2026
`, n += "  " + Bs(o.previousSibling) + `
`), n += "  " + Bs(o) + `  ${nd}
`, e.nextSibling && (n += `  \u2026
`), e.parentNode && (n = Bs(o.parentNode, `
` + n)), n;
}
function Mb(e) {
    return `To fix this problem:
  * check ${e ? `the "${e}"` : "corresponding"} component for hydration-related issues
  * check to see if your template has valid HTML structure
  * check if there are any third-party scripts that manipulate the DOM. More info: ${al}${mb}
  * or skip hydration by adding the \`ngSkipHydration\` attribute to its host node in a template

`;
}
function Nb() {
    return `Note: attributes are only displayed to better represent the DOM but have no effect on hydration mismatches.

`;
}
function wb(e) { return e.replace(/\s+/gm, ""); }
function aa(e, t = 50) { return e ? (e = wb(e), e.length > t ? `${e.substring(0, t - 1)}\u2026` : e) : ""; }
function tE(e, t, n) { let o = t.insertBeforeIndex, r = Array.isArray(o) ? o[0] : o; return r === null ? ky(e, t, n) : L(n[r]); }
function nE(e, t, n, o, r) { let i = t.insertBeforeIndex; if (Array.isArray(i)) {
    let s = o, a = null;
    if (t.type & 3 || (a = s, s = r), s !== null && t.componentOffset === -1)
        for (let c = 1; c < i.length; c++) {
            let l = n[i[c]];
            An(e, s, l, a, !1);
        }
} }
function $n(e, t, n, o, r) { let i = e.data[t]; if (i === null)
    i = wf(e, t, n, o, r), og() && (i.flags |= 32);
else if (i.type & 64) {
    i.type = n, i.value = o, i.attrs = r;
    let s = oo();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
} return ut(i, !0), i; }
function wf(e, t, n, o, r) { let i = Fl(), s = jl(), a = s ? i : i && i.parent, c = e.data[t] = Sb(e, a, n, t, o, r); return _b(e, c, i, s), c; }
function _b(e, t, n, o) { e.firstChild === null && (e.firstChild = t), n !== null && (o ? n.child == null && t.parent !== null && (n.child = t) : n.next === null && (n.next = t, t.prev = n)); }
function Sb(e, t, n, o, r, i) { let s = t ? t.injectorIndex : -1, a = 0; return Sr() && (a |= 128), { type: n, index: o, insertBeforeIndex: null, injectorIndex: s, directiveStart: -1, directiveEnd: -1, directiveStylingLast: -1, componentOffset: -1, controlDirectiveIndex: -1, customControlIndex: -1, propertyBindings: null, flags: a, providerIndexes: 0, value: r, attrs: i, mergedAttrs: null, localNames: null, initialInputs: null, inputs: null, hostDirectiveInputs: null, outputs: null, hostDirectiveOutputs: null, directiveToIndex: null, tView: null, next: null, prev: null, projectionNext: null, child: null, parent: t, projection: null, styles: null, stylesWithoutHost: null, residualStyles: void 0, classes: null, classesWithoutHost: null, residualClasses: void 0, classBindings: 0, styleBindings: 0 }; }
function oE(e, t) { if (e.push(t), e.length > 1)
    for (let n = e.length - 2; n >= 0; n--) {
        let o = e[n];
        rE(o) || bb(o, t) && Ab(o) === null && Rb(o, t.index);
    } }
function rE(e) { return !(e.type & 64); }
function bb(e, t) { return rE(t) || e.index > t.index; }
function Ab(e) { let t = e.insertBeforeIndex; return Array.isArray(t) ? t[0] : t; }
function Rb(e, t) { let n = e.insertBeforeIndex; Array.isArray(n) ? n[0] = t : (xy(tE, nE), e.insertBeforeIndex = t); }
function Fr(e, t) { let n = e.data[t]; return n === null || typeof n == "string" ? null : n.hasOwnProperty("currentCaseLViewIndex") ? n : n.value; }
function kb(e, t, n) { let o = e.data[t]; o === null ? e.data[t] = n : o.value = n; }
function Ob(e, t) { let n = e.insertBeforeIndex; n === null ? (xy(tE, nE), n = e.insertBeforeIndex = [null, t]) : (Vh(Array.isArray(n), !0, "Expecting array here"), n.push(t)); }
function xb(e, t, n) { let o = wf(e, n, 64, null, null); return oE(t, o), o; }
function oc(e, t) { let n = t[e.currentCaseLViewIndex]; return n === null ? n : n < 0 ? ~n : n; }
function Pb(e) { return e >>> 17; }
function Lb(e) { return (e & 131070) >>> 1; }
function Fb(e, t, n) { return e | t << 17 | n << 1; }
function iE(e) { return e === -1; }
function _f(e, t, n) { e.index = 0; let o = oc(t, n); o !== null ? e.removes = t.remove[o] : e.removes = F; }
function ca(e) { if (e.index < e.removes.length) {
    let t = e.removes[e.index++];
    if (t > 0)
        return e.lView[t];
    {
        e.stack.push(e.index, e.removes);
        let n = ~t, o = e.lView[m].data[n];
        return _f(e, o, e.lView), ca(e);
    }
}
else
    return e.stack.length === 0 ? (e.lView = void 0, null) : (e.removes = e.stack.pop(), e.index = e.stack.pop(), ca(e)); }
function jb() { let e = { stack: [], index: -1 }; function t(n, o) { for (e.lView = o; e.stack.length;)
    e.stack.pop(); return _f(e, n.value, o), ca.bind(null, e); } return t; }
function Vb(e, t) { let n = { stack: [], index: -1, lView: t }; return _f(n, e, t), ca.bind(null, n); }
var Hb = new RegExp(`^(\\d+)*(${Ld}|${Pd})*(.*)`);
function Bb(e, t) { let n = [e]; for (let o of t) {
    let r = n.length - 1;
    if (r > 0 && n[r - 1] === o) {
        let i = n[r] || 1;
        n[r] = i + 1;
    }
    else
        n.push(o, "");
} return n.join(""); }
function Ub(e) { let t = e.match(Hb), [n, o, r, i] = t, s = o ? parseInt(o, 10) : r, a = []; for (let [c, l, u] of i.matchAll(/(f|n)(\d*)/g)) {
    let d = parseInt(u, 10) || 1;
    a.push(l, d);
} return [s, ...a]; }
function $b(e) { return !e.prev && e.parent?.type === 8; }
function fu(e) { return e.index - I; }
function Zo(e, t) { return !(e.type & 144) && !!t[e.index] && sE(L(t[e.index])); }
function sE(e) { return !!e && !e.isConnected; }
function aE(e, t) { let n = e.i18nNodes; if (n)
    return n.get(t); }
function qb(e, t, n) { let r = e.data[vi]?.[n]; return r ? cE(r, t) : null; }
function Si(e, t, n, o) { let r = fu(o), i = aE(e, r); if (i === void 0) {
    let s = e.data[vi];
    if (s?.[r])
        i = cE(s[r], n);
    else if (t.firstChild === o)
        i = e.firstChild;
    else {
        let a = o.prev === null, c = o.prev ?? o.parent;
        if ($b(o)) {
            let l = fu(o.parent);
            i = Pu(e, l);
        }
        else {
            let l = ae(c, n);
            if (a)
                i = l.firstChild;
            else {
                let u = fu(c), d = Pu(e, u);
                if (c.type === 2 && d) {
                    let p = Qd(e, u) + 1;
                    i = rc(p, d);
                }
                else
                    i = l.nextSibling;
            }
        }
    }
} return i; }
function rc(e, t) { let n = t; for (let o = 0; o < e; o++)
    n = n.nextSibling; return n; }
function Gb(e, t) { let n = e; for (let o = 0; o < t.length; o += 2) {
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
function cE(e, t) { let [n, ...o] = Ub(e), r; if (n === Pd)
    r = t[te][q];
else if (n === Ld)
    r = of(t[te][q]);
else {
    let i = Number(n);
    r = L(t[i + I]);
} return Gb(r, o); }
function od(e, t) { if (e === t)
    return []; if (e.parentElement == null || t.parentElement == null)
    return null; if (e.parentElement === t.parentElement)
    return Wb(e, t); {
    let n = t.parentElement, o = od(e, n), r = od(n.firstChild, t);
    return !o || !r ? null : [...o, mv, ...r];
} }
function Wb(e, t) { let n = [], o = null; for (o = e; o != null && o !== t; o = o.nextSibling)
    n.push(vv); return o == null ? null : n; }
function Hg(e, t, n) { let o = od(e, t); return o === null ? null : Bb(n, o); }
function lE(e, t, n) { let o = e.parent, r, i, s; for (; o !== null && (Zo(o, t) || n?.has(o.index));)
    o = o.parent; o === null || !(o.type & 3) ? (r = s = Pd, i = t[te][q]) : (r = o.index, i = L(t[r]), s = b(r - I)); let a = L(t[e.index]); if (e.type & 44) {
    let l = _n(t, e);
    l && (a = l);
} let c = Hg(i, a, s); if (c === null && i !== a) {
    let l = i.ownerDocument.body;
    if (c = Hg(l, a, Ld), c === null)
        throw yb(t, e);
} return c; }
function uE(e, t) { let n = e.createNodeIterator(t, NodeFilter.SHOW_COMMENT, { acceptNode: zb }), o, r = new Map; for (; o = n.nextNode();) {
    let i = "ngh=", s = o?.textContent, a = s?.indexOf(i) ?? -1;
    if (a > -1) {
        let c = s.substring(a + i.length).trim();
        r.set(c, o);
    }
} return r; }
function zb(e) { return e.textContent?.trimStart().startsWith("ngh=") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; }
var dE = !1, fE = () => { };
function Sf(e) { dE = e; }
function ic() { return dE; }
function Qb(e, t, n, o) { fE(e, t, n, o); }
function pE() { fE = Xb; }
function hE(e) { return e = e ?? y(le), e.get(Vd, !1); }
function gE(e, t) { let n = t.i18nChildren.get(e); return n === void 0 && (n = Zb(e), t.i18nChildren.set(e, n)), n; }
function Zb(e) { let t = new Set; function n(o) { switch (t.add(o.index), o.kind) {
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
function mE(e, t, n) { if (!n.isI18nHydrationEnabled)
    return null; let o = e[m], r = o.data[t]; if (!r || !r.ast)
    return null; let i = o.data[r.parentTNodeIndex]; if (i && iv(i))
    return null; let s = { caseQueue: [], disconnectedNodes: new Set, disjointNodes: new Set }; return rd(e, s, n, r.ast), s.caseQueue.length === 0 && s.disconnectedNodes.size === 0 && s.disjointNodes.size === 0 ? null : s; }
function rd(e, t, n, o) { let r = null; for (let i of o) {
    let s = Kb(e, t, n, i);
    s && (Yb(r, s) && t.disjointNodes.add(i.index - I), r = s);
} return r; }
function Yb(e, t) { return e && e.nextSibling !== t; }
function Kb(e, t, n, o) { let r = L(e[o.index]); if (!r || sE(r))
    return t.disconnectedNodes.add(o.index - I), null; let i = r; switch (o.kind) {
    case 0: {
        Zd(n, i);
        break;
    }
    case 1:
    case 2: {
        rd(e, t, n, o.children);
        break;
    }
    case 3: {
        let s = e[o.currentCaseLViewIndex];
        if (s != null) {
            let a = s < 0 ? ~s : s;
            t.caseQueue.push(a), rd(e, t, n, o.cases[a]);
        }
        break;
    }
} return Jb(e, o); }
function Jb(e, t) { let o = e[m].data[t.index]; return Ca(o) ? _n(e, o) : t.kind === 3 ? Vb(o, e)() ?? L(e[t.index]) : L(e[t.index]) ?? null; }
function Tn(e, t) { e.currentNode = t; }
function kr(e, t, n) { let o = n.index - I, { disconnectedNodes: r } = e, i = t.currentNode; return t.isConnected ? (e.i18nNodes.set(o, i), r.delete(o)) : r.add(o), i; }
function pu(e, t) { let n = e.currentNode; for (let o = 0; o < t && n; o++)
    n = n?.nextSibling ?? null; return n; }
function hu(e, t) { return { currentNode: t, isConnected: e.isConnected }; }
function Xb(e, t, n, o) { let r = e[de]; if (!r || !ic() || n && (iv(n) || La(r, n.index - I)))
    return; let i = e[m], s = i.data[t]; function a() { if (iE(o)) {
    let p = Si(r, i, e, n);
    return n.type & 8 ? p : p.firstChild;
} return r?.firstChild; } let c = a(), l = Fv(r) ?? new Set, u = r.i18nNodes ??= new Map, d = r.data[Aa]?.[t - I] ?? [], f = r.dehydratedIcuData ??= new Map; co({ hydrationInfo: r, lView: e, i18nNodes: u, disconnectedNodes: l, caseQueue: d, dehydratedIcuData: f }, { currentNode: c, isConnected: !0 }, s.ast), r.disconnectedNodes = l.size === 0 ? null : l; }
function co(e, t, n) { if (Array.isArray(n)) {
    let o = t;
    for (let r of n) {
        let i = qb(e.hydrationInfo, e.lView, r.index - I);
        i && (o = hu(t, i)), co(e, o, r);
    }
}
else {
    if (e.disconnectedNodes.has(n.index - I))
        return;
    switch (n.kind) {
        case 0: {
            let o = kr(e, t, n);
            Tn(t, o?.nextSibling ?? null);
            break;
        }
        case 1: {
            co(e, hu(t, t.currentNode?.firstChild ?? null), n.children);
            let o = kr(e, t, n);
            Tn(t, o?.nextSibling ?? null);
            break;
        }
        case 2: {
            let o = n.index - I, { hydrationInfo: r } = e, i = Pv(r, o);
            switch (n.type) {
                case 0: {
                    let s = kr(e, t, n);
                    if (f_(r, o)) {
                        co(e, t, n.children);
                        let a = pu(t, 1);
                        Tn(t, a);
                    }
                    else if (co(e, hu(t, t.currentNode?.firstChild ?? null), n.children), Tn(t, s?.nextSibling ?? null), i !== null) {
                        let a = pu(t, i + 1);
                        Tn(t, a);
                    }
                    break;
                }
                case 1: {
                    kr(e, t, n);
                    let s = pu(t, i + 1);
                    Tn(t, s);
                    break;
                }
            }
            break;
        }
        case 3: {
            let o = t.isConnected ? e.caseQueue.shift() : null, r = { currentNode: null, isConnected: !1 };
            for (let s = 0; s < n.cases.length; s++)
                co(e, s === o ? t : r, n.cases[s]);
            o !== null && e.dehydratedIcuData.set(n.index, { case: o, node: n });
            let i = kr(e, t, n);
            Tn(t, i?.nextSibling ?? null);
            break;
        }
    }
} }
var vE = () => { };
function eA(e, t, n) { vE(e, t, n); }
function yE() { vE = tA; }
function tA(e, t, n) { let o = e[de]?.dehydratedIcuData; o && o.get(t)?.case === n && o.delete(t); }
function nA(e) { let t = e[de]; if (t) {
    let { i18nNodes: n, dehydratedIcuData: o } = t;
    if (n && o) {
        let r = e[w];
        for (let i of o.values())
            oA(r, n, i);
    }
    t.i18nNodes = void 0, t.dehydratedIcuData = void 0;
} }
function oA(e, t, n) { for (let o of n.node.cases[n.case]) {
    let r = t.get(o.index - I);
    r && Ti(e, r, !1);
} }
function sc(e) { let t = e[ke] ?? [], o = e[Q][w], r = []; for (let i of t)
    i.data[Ra] !== void 0 ? r.push(i) : EE(i, o); e[ke] = r; }
function rA(e) { let { lContainer: t } = e, n = t[ke]; if (n === null)
    return; let r = t[Q][w]; for (let i of n)
    EE(i, r); }
function EE(e, t) { let n = 0, o = e.firstChild; if (o) {
    let r = e.data[_t];
    for (; n < r;) {
        let i = o.nextSibling;
        Ti(t, o, !1), o = i, n++;
    }
} }
function ac(e) { sc(e); let t = e[q]; oe(t) && ti(t); for (let n = W; n < e.length; n++)
    ti(e[n]); }
function ti(e) { nA(e); let t = e[m]; for (let n = I; n < t.bindingStartIndex; n++)
    if (J(e[n])) {
        let o = e[n];
        ac(o);
    }
    else
        oe(e[n]) && ti(e[n]); }
function bf(e) { let t = e._views; for (let n of t) {
    let o = zd(n);
    o !== null && o[q] !== null && (oe(o) ? ti(o) : ac(o));
} }
function iA(e, t, n, o) { e !== null && (n.cleanup(t), ac(e.lContainer), bf(o)); }
function sA(e, t) { let n = []; for (let o of t)
    for (let r = 0; r < (o[mi] ?? 1); r++) {
        let i = { data: o, firstChild: null };
        o[_t] > 0 && (i.firstChild = e, e = rc(o[_t], e)), n.push(i);
    } return [e, n]; }
var IE = () => null, DE = () => null;
function CE() { IE = aA, DE = cA; }
function aA(e, t) { return ME(e, t) ? e[ke].shift() : (sc(e), null); }
function ni(e, t) { return IE(e, t); }
function cA(e, t, n) { if (t.tView.ssrId === null)
    return null; let o = ni(e, t.tView.ssrId); return n[m].firstUpdatePass && o === null && lA(n, t), o; }
function TE(e, t, n) { return DE(e, t, n); }
function lA(e, t) { let n = t; for (; n;) {
    if (Bg(e, n))
        return;
    if ((n.flags & 256) === 256)
        break;
    n = n.prev;
} for (n = t.next; n && (n.flags & 512) === 512;) {
    if (Bg(e, n))
        return;
    n = n.next;
} }
function ME(e, t) { let n = e[ke]; return !t || n === null || n.length === 0 ? !1 : n[0].data[ba] === t; }
function Bg(e, t) { let n = t.tView?.ssrId; if (n == null)
    return !1; let o = e[t.index]; return J(o) && ME(o, n) ? (sc(o), !0) : !1; }
var NE = class {
}, cc = class {
}, id = class {
    resolveComponentFactory(t) { throw new D(917, !1); }
}, bi = class {
    static NULL = new id;
}, oi = class {
}, uA = (() => { class e {
    destroyNode = null;
    static __NG_ELEMENT_ID__ = () => dA();
} return e; })();
function dA() { let e = g(), t = _(), n = Ee(t.index, e); return (oe(n) ? n : e)[w]; }
var wE = (() => { class e {
    static \u0275prov = U({ token: e, providedIn: "root", factory: () => null });
} return e; })();
function Af(e) { return e.ngModule !== void 0; }
function Mn(e) { return !!mn(e); }
function Os(e) { return !!Ze(e); }
function Ug(e) { return !!Ae(e); }
function jr(e) { return !!z(e); }
function fA(e) { return z(e) ? "component" : Ae(e) ? "directive" : Ze(e) ? "pipe" : "type"; }
function pA(e, t) { if (hr(e) && (e = x(e), !e))
    throw new Error(`Expected forwardRef function, imported from "${Le(t)}", to return a standalone entity or NgModule but got "${Le(e) || e}".`); if (mn(e) == null) {
    let n = z(e) || Ae(e) || Ze(e);
    if (n != null) {
        if (!n.standalone) {
            let o = fA(e);
            throw new Error(`The "${Le(e)}" ${o}, imported from "${Le(t)}", is not standalone. Does the ${o} have the standalone: false flag?`);
        }
    }
    else
        throw Af(e) ? new Error(`A module with providers was imported from "${Le(t)}". Modules with providers are not supported in standalone components imports.`) : new Error(`The "${Le(e)}" type, imported from "${Le(t)}", must be a standalone component / directive / pipe or an NgModule. Did you forget to add the required @Component / @Directive / @Pipe or @NgModule annotation?`);
} }
var sd = class {
    ownerNgModule = new WeakMap;
    ngModulesWithSomeUnresolvedDecls = new Set;
    ngModulesScopeCache = new WeakMap;
    standaloneComponentsScopeCache = new WeakMap;
    resolveNgModulesDecls() { if (this.ngModulesWithSomeUnresolvedDecls.size !== 0) {
        for (let t of this.ngModulesWithSomeUnresolvedDecls) {
            let n = mn(t);
            if (n?.declarations)
                for (let o of ho(n.declarations))
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
    registerNgModule(t, n) { if (!Mn(t))
        throw new Error(`Attempting to register a Type which is not NgModule as NgModule: ${t}`); this.ngModulesWithSomeUnresolvedDecls.add(t); }
    clearScopeCacheFor(t) { this.ngModulesScopeCache.delete(t), this.standaloneComponentsScopeCache.delete(t); }
    getNgModuleScope(t) { if (this.ngModulesScopeCache.has(t))
        return this.ngModulesScopeCache.get(t); let n = this.computeNgModuleScope(t); return this.ngModulesScopeCache.set(t, n), n; }
    computeNgModuleScope(t) { let n = rs(t), o = { exported: { directives: new Set, pipes: new Set }, compilation: { directives: new Set, pipes: new Set } }; for (let r of ho(n.imports))
        if (Mn(r)) {
            let i = this.getNgModuleScope(r);
            Yt(i.exported.directives, o.compilation.directives), Yt(i.exported.pipes, o.compilation.pipes);
        }
        else if (Er(r))
            if (Ug(r) || jr(r))
                o.compilation.directives.add(r);
            else if (Os(r))
                o.compilation.pipes.add(r);
            else
                throw new D(980, "The standalone imported type is neither a component nor a directive nor a pipe");
        else {
            o.compilation.isPoisoned = !0;
            break;
        } if (!o.compilation.isPoisoned)
        for (let r of ho(n.declarations)) {
            if (Mn(r) || Er(r)) {
                o.compilation.isPoisoned = !0;
                break;
            }
            Os(r) ? o.compilation.pipes.add(r) : o.compilation.directives.add(r);
        } for (let r of ho(n.exports))
        if (Mn(r)) {
            let i = this.getNgModuleScope(r);
            Yt(i.exported.directives, o.exported.directives), Yt(i.exported.pipes, o.exported.pipes), Yt(i.exported.directives, o.compilation.directives), Yt(i.exported.pipes, o.compilation.pipes);
        }
        else
            Os(r) ? o.exported.pipes.add(r) : o.exported.directives.add(r); return o; }
    getStandaloneComponentScope(t, n) { if (this.standaloneComponentsScopeCache.has(t))
        return this.standaloneComponentsScopeCache.get(t); let o = this.computeStandaloneComponentScope(t, n); return this.standaloneComponentsScopeCache.set(t, o), o; }
    computeStandaloneComponentScope(t, n) { let o = { compilation: { directives: new Set([t]), pipes: new Set, ngModules: new Set } }; for (let r of Ye(n ?? [])) {
        let i = x(r);
        try {
            pA(i, t);
        }
        catch {
            return o.compilation.isPoisoned = !0, o;
        }
        if (Mn(i)) {
            o.compilation.ngModules.add(i);
            let s = this.getNgModuleScope(i);
            if (s.exported.isPoisoned)
                return o.compilation.isPoisoned = !0, o;
            Yt(s.exported.directives, o.compilation.directives), Yt(s.exported.pipes, o.compilation.pipes);
        }
        else if (Os(i))
            o.compilation.pipes.add(i);
        else if (Ug(i) || jr(i))
            o.compilation.directives.add(i);
        else
            return o.compilation.isPoisoned = !0, o;
    } return o; }
    isOrphanComponent(t) { let n = z(t); return !n || n.standalone ? !1 : (this.resolveNgModulesDecls(), !this.ownerNgModule.has(t)); }
};
function Yt(e, t) { for (let n of e)
    t.add(n); }
var wo = new sd, Us = {}, Eo = class {
    injector;
    parentInjector;
    constructor(t, n) { this.injector = t, this.parentInjector = n; }
    get(t, n, o) { let r = this.injector.get(t, Us, o); return r !== Us || n === Us ? r : this.parentInjector.get(t, n, o); }
};
function la(e, t, n) { let o = n ? e.styles : null, r = n ? e.classes : null, i = 0; if (t !== null)
    for (let s = 0; s < t.length; s++) {
        let a = t[s];
        if (typeof a == "number")
            i = a;
        else if (i == 1)
            r = ns(r, a);
        else if (i == 2) {
            let c = a, l = t[++s];
            o = ns(o, c + ": " + l + ";");
        }
    } n ? e.styles = o : e.stylesWithoutHost = o, n ? e.classes = r : e.classesWithoutHost = r; }
function Yo(e, t = 0) { let n = g(); if (n === null)
    return he(e, t); let o = _(); return Km(o, n, x(e), t); }
function _E() { let e = "invalid"; throw new Error(e); }
function SE(e, t, n, o, r) { let i = o === null ? null : { "": -1 }, s = r(e, n); if (s !== null) {
    let a = s, c = null, l = null;
    for (let u of s)
        if (u.resolveHostDirectives !== null) {
            [a, c, l] = u.resolveHostDirectives(s);
            break;
        }
    mA(e, t, n, a, i, c, l);
} i !== null && o !== null && hA(n, o, i); }
function hA(e, t, n) { let o = e.localNames = []; for (let r = 0; r < t.length; r += 2) {
    let i = n[t[r + 1]];
    if (i == null)
        throw new D(-301, !1);
    o.push(t[r], i);
} }
function gA(e, t, n) { t.componentOffset = n, (e.components ??= []).push(t.index); }
function mA(e, t, n, o, r, i, s) { let a = o.length, c = null; for (let f = 0; f < a; f++) {
    let p = o[f];
    c === null && Be(p) && (c = p, gA(e, n, f)), bu(Js(n, t), e, p.type);
} CA(n, e.data.length, a), c?.viewProvidersResolver && c.viewProvidersResolver(c); for (let f = 0; f < a; f++) {
    let p = o[f];
    p.providersResolver && p.providersResolver(p);
} let l = !1, u = !1, d = Ni(e, t, a, null); a > 0 && (n.directiveToIndex = new Map); for (let f = 0; f < a; f++) {
    let p = o[f];
    if (n.mergedAttrs = To(n.mergedAttrs, p.hostAttrs), yA(e, n, t, d, p), DA(d, p, r), s !== null && s.has(p)) {
        let [v, E] = s.get(p);
        n.directiveToIndex.set(p.type, [d, v + n.directiveStart, E + n.directiveStart]);
    }
    else
        (i === null || !i.has(p)) && n.directiveToIndex.set(p.type, d);
    p.contentQueries !== null && (n.flags |= 4), (p.hostBindings !== null || p.hostAttrs !== null || p.hostVars !== 0) && (n.flags |= 64);
    let h = p.type.prototype;
    !l && (h.ngOnChanges || h.ngOnInit || h.ngDoCheck) && ((e.preOrderHooks ??= []).push(n.index), l = !0), !u && (h.ngOnChanges || h.ngDoCheck) && ((e.preOrderCheckHooks ??= []).push(n.index), u = !0), d++;
} vA(e, n, i); }
function vA(e, t, n) { for (let o = t.directiveStart; o < t.directiveEnd; o++) {
    let r = e.data[o];
    if (n === null || !n.has(r))
        $g(0, t, r, o), $g(1, t, r, o), Gg(t, o, !1);
    else {
        let i = n.get(r);
        qg(0, t, i, o), qg(1, t, i, o), Gg(t, o, !0);
    }
} }
function $g(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s;
        e === 0 ? s = t.inputs ??= {} : s = t.outputs ??= {}, s[i] ??= [], s[i].push(o), bE(t, i);
    } }
function qg(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s = r[i], a;
        e === 0 ? a = t.hostDirectiveInputs ??= {} : a = t.hostDirectiveOutputs ??= {}, a[s] ??= [], a[s].push(o, i), bE(t, s);
    } }
function bE(e, t) { t === "class" ? e.flags |= 8 : t === "style" && (e.flags |= 16); }
function Gg(e, t, n) { let { attrs: o, inputs: r, hostDirectiveInputs: i } = e; if (o === null || !n && r === null || n && i === null || rf(e)) {
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
function yA(e, t, n, o, r) { e.data[o] = r; let i = r.factory || (r.factory = Ht(r.type, !0)), s = new bn(i, Be(r), Yo, null); e.blueprint[o] = s, n[o] = s, EA(e, t, o, Ni(e, n, r.hostVars, B), r); }
function EA(e, t, n, o, r) { let i = r.hostBindings; if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    IA(s) != a && s.push(a), s.push(n, o, i);
} }
function IA(e) { let t = e.length; for (; t > 0;) {
    let n = e[--t];
    if (typeof n == "number" && n < 0)
        return n;
} return 0; }
function DA(e, t, n) { if (n) {
    if (t.exportAs)
        for (let o = 0; o < t.exportAs.length; o++)
            n[t.exportAs[o]] = e;
    Be(t) && (n[""] = e);
} }
function CA(e, t, n) { e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t; }
function Rf(e, t, n, o, r, i, s, a) { let c = t[m], l = c.consts, u = me(l, s), d = $n(c, e, n, o, u); return i && SE(c, t, d, me(l, a), r), d.mergedAttrs = To(d.mergedAttrs, d.attrs), d.attrs !== null && la(d, d.attrs, !1), d.mergedAttrs !== null && la(d, d.mergedAttrs, !0), c.queries !== null && c.queries.elementStart(c, d), d; }
function kf(e, t) { Bm(e, t), Cl(t) && e.queries.elementEnd(t); }
function AE(e, t, n, o, r, i) { let s = t.consts, a = me(s, r), c = $n(t, e, n, o, a); if (c.mergedAttrs = To(c.mergedAttrs, c.attrs), i != null) {
    let l = me(s, i);
    c.localNames = [];
    for (let u = 0; u < l.length; u += 2)
        c.localNames.push(l[u], -1);
} return c.attrs !== null && la(c, c.attrs, !1), c.mergedAttrs !== null && la(c, c.mergedAttrs, !0), t.queries !== null && t.queries.elementStart(t, c), c; }
function ri(e) { return lc(e) ? Array.isArray(e) || !(e instanceof Map) && Symbol.iterator in e : !1; }
function TA(e, t, n) { let o = e[Symbol.iterator](), r = t[Symbol.iterator](); for (;;) {
    let i = o.next(), s = r.next();
    if (i.done && s.done)
        return !0;
    if (i.done || s.done || !n(i.value, s.value))
        return !1;
} }
function RE(e, t) { if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
        t(e[n]);
else {
    let n = e[Symbol.iterator](), o;
    for (; !(o = n.next()).done;)
        t(o.value);
} }
function lc(e) { return e !== null && (typeof e == "function" || typeof e == "object"); }
function kE(e, t) { let n = ri(e), o = ri(t); return n && o ? TA(e, t, kE) : !n && (e && (typeof e == "object" || typeof e == "function")) && !o && (t && (typeof t == "object" || typeof t == "function")) ? !0 : Object.is(e, t); }
function tt(e, t, n) { return e[t] = n; }
function Ko(e, t) { return e[t]; }
function Y(e, t, n) { if (n === B)
    return !1; let o = e[t]; return Object.is(o, n) ? !1 : (e[t] = n, !0); }
function xn(e, t, n, o) { let r = Y(e, t, n); return Y(e, t + 1, o) || r; }
function uc(e, t, n, o, r) { let i = xn(e, t, n, o); return Y(e, t + 2, r) || i; }
function Ge(e, t, n, o, r, i) { let s = xn(e, t, n, o); return xn(e, t + 2, r, i) || s; }
function en(e, t, n) { return function o(r) { let i = Te(e) ? Ee(e.index, t) : t; _i(i, 5); let s = t[$], a = Wg(t, s, n, r), c = o.__ngNextListenerFn__; for (; c;)
    a = Wg(t, s, c, r) && a, c = c.__ngNextListenerFn__; return a; }; }
function Wg(e, t, n, o) { let r = lo(null); try {
    return V(O.OutputStart, t, n), n(o) !== !1;
}
catch (i) {
    return Mf(e, i), !1;
}
finally {
    V(O.OutputEnd, t, n), lo(r);
} }
function Of(e, t, n, o, r, i, s, a) { let c = to(e), l = !1, u = null; if (!o && c && (u = NA(t, n, i, e.index)), u !== null) {
    let d = u.__ngLastListenerFn__ || u;
    d.__ngNextListenerFn__ = s, u.__ngLastListenerFn__ = s, l = !0;
}
else {
    let d = ae(e, n), f = o ? o(d) : d;
    o_(n, f, i, a);
    let p = r.listen(f, i, a);
    if (!MA(i)) {
        let h = o ? v => o(L(v[e.index])) : e.index;
        OE(h, t, n, i, a, p, !1);
    }
} return l; }
function MA(e) { return e.startsWith("animation") || e.startsWith("transition"); }
function NA(e, t, n, o) { let r = e.cleanup; if (r != null)
    for (let i = 0; i < r.length - 1; i += 2) {
        let s = r[i];
        if (s === n && r[i + 1] === o) {
            let a = t[Ut], c = r[i + 2];
            return a && a.length > c ? a[c] : null;
        }
        typeof s == "string" && (i += 2);
    } return null; }
function OE(e, t, n, o, r, i, s) { let a = t.firstCreatePass ? bl(t) : null, c = Sl(n), l = c.length; c.push(r, i), a && a.push(o, e, l, (l + 1) * (s ? -1 : 1)); }
function wA(e, t, n, o, r) { let i = en(e, t, n), s = _A(e, t, o, r, i); }
function _A(e, t, n, o, r) { let i = null, s = null, a = null, c = !1, l = e.directiveToIndex.get(n.type); if (typeof l == "number" ? i = l : [i, s, a] = l, s !== null && a !== null && e.hostDirectiveOutputs?.hasOwnProperty(o)) {
    let u = e.hostDirectiveOutputs[o];
    for (let d = 0; d < u.length; d += 2) {
        let f = u[d];
        if (f >= s && f <= a)
            c = !0, _o(e, t, f, u[d + 1], o, r);
        else if (f > a)
            break;
    }
} return n.outputs.hasOwnProperty(o) && (c = !0, _o(e, t, i, o, o, r)), c; }
function _o(e, t, n, o, r, i) { let s = t[n], a = t[m], l = a.data[n].outputs[o], d = s[l].subscribe(i); OE(e.index, a, t, r, i, d, !0); }
function xE() { PE(); }
function PE() { let e = g(), t = R(), n = _(); if (t.firstCreatePass && SA(t, n), n.controlDirectiveIndex === -1)
    return; X("NgSignalForms"); let o = e[n.controlDirectiveIndex]; t.data[n.controlDirectiveIndex].controlDef.create(o, new ua(e, t, n)); }
function LE() { FE(); }
function FE() { let e = g(), t = R(), n = Oe(); if (n.controlDirectiveIndex === -1)
    return; let o = t.data[n.controlDirectiveIndex].controlDef, r = e[n.controlDirectiveIndex]; o.update(r, new ua(e, t, n)); }
var ua = class {
    lView;
    tView;
    tNode;
    hasPassThrough;
    constructor(t, n, o) { this.lView = t, this.tView = n, this.tNode = o, this.hasPassThrough = !!(o.flags & 4096); }
    get customControl() { return this.tNode.customControlIndex !== -1 ? this.lView[this.tNode.customControlIndex] : void 0; }
    get descriptor() { return `<${this.tNode.value}>`; }
    listenToCustomControlOutput(t, n) { jE(this.tView.data[this.tNode.customControlIndex], t) && _o(this.tNode, this.lView, this.tNode.customControlIndex, t, t, en(this.tNode, this.lView, n)); }
    listenToCustomControlModel(t) { let n = this.tNode.flags & 1024 ? "valueChange" : "checkedChange"; _o(this.tNode, this.lView, this.tNode.customControlIndex, n, n, en(this.tNode, this.lView, t)); }
    listenToDom(t, n) { Of(this.tNode, this.tView, this.lView, void 0, this.lView[w], t, n, en(this.tNode, this.lView, n)); }
    setInputOnDirectives(t, n) { let o = this.tNode.inputs?.[t], r = this.tNode.hostDirectiveInputs?.[t]; if (!o && !r)
        return !1; if (o)
        for (let i of o) {
            let s = this.tView.data[i], a = this.lView[i];
            Xt(s, a, t, n);
        } if (r)
        for (let i = 0; i < r.length; i += 2) {
            let s = r[i], a = r[i + 1], c = this.tView.data[s], l = this.lView[s];
            Xt(c, l, a, n);
        } return !0; }
    setCustomControlModelInput(t) { let n = this.lView[this.tNode.customControlIndex], o = this.tView.data[this.tNode.customControlIndex], r = this.tNode.flags & 1024 ? "value" : "checked"; Xt(o, n, r, t); }
    customControlHasInput(t) { return this.tNode.customControlIndex === -1 ? !1 : this.tView.data[this.tNode.customControlIndex].inputs[t] != null; }
};
function SA(e, t, n) { for (let r = t.directiveStart; r < t.directiveEnd; r++)
    if (e.data[r].controlDef) {
        t.controlDirectiveIndex = r;
        break;
    } if (t.controlDirectiveIndex === -1)
    return; let o = e.data[t.controlDirectiveIndex].controlDef; if (o.passThroughInput && (t.inputs?.[o.passThroughInput]?.length ?? 0) > 1) {
    t.flags |= 4096;
    return;
} bA(e, t); }
function bA(e, t) { for (let n = t.directiveStart; n < t.directiveEnd; n++) {
    let o = e.data[n];
    if (zg(o, "value")) {
        t.flags |= 1024, t.customControlIndex = n;
        return;
    }
    if (zg(o, "checked")) {
        t.flags |= 2048, t.customControlIndex = n;
        return;
    }
} }
function zg(e, t) { return AA(e, t) && jE(e, t + "Change"); }
function AA(e, t) { return t in e.inputs; }
function jE(e, t) { return t in e.outputs; }
var wt = Symbol("BINDING"), Qg = { kind: "input", requiredVars: 1 }, RA = { kind: "output", requiredVars: 0 };
function Zg(e, t, n) { let o = g(), r = Ie(); if (Y(o, r, n)) {
    let i = o[m], s = Oe(), a = Ee(s.index, o);
    _i(a, 1);
    let c = i.directiveRegistry[e], l = KS(s, i, o, c, t, n);
} }
function VE(e, t) { if (e === "formField") {
    let o = { [wt]: Qg, create: () => { PE(); }, update: () => { Zg(o.targetIdx, e, t()), FE(); } };
    return o;
} let n = { [wt]: Qg, update: () => Zg(n.targetIdx, e, t()) }; return n; }
function HE(e, t) { let n = { [wt]: RA, create: () => { let o = g(), r = _(), s = o[m].directiveRegistry[n.targetIdx]; wA(r, o, t, s, e); } }; return n; }
function kA(e, t) { let n = VE(e, t), o = HE(e + "Change", i => t.set(i)); return { [wt]: { kind: "twoWay", requiredVars: n[wt].requiredVars + o[wt].requiredVars }, set targetIdx(i) { n.targetIdx = i, o.targetIdx = i; }, create: o.create, update: n.update }; }
function OA(e) { let t = e; for (; t;) {
    let n = Sw(t);
    if (n !== null)
        for (let o = I; o < n.length; o++) {
            let r = n[o];
            if (!oe(r) && !J(r) || r[q] !== t)
                continue;
            let i = n[m], s = Gt(i, o);
            if (Te(s)) {
                let a = i.data[s.directiveStart + s.componentOffset], c = xf(a);
                if (c !== null)
                    return c;
                break;
            }
        }
    t = t.parentNode;
} return null; }
function xf(e) { return e.debugInfo?.className || e.type.name || null; }
var da = class extends bi {
    ngModule;
    constructor(t) { super(), this.ngModule = t; }
    resolveComponentFactory(t) { let n = z(t); return new nn(n, this.ngModule); }
};
function xA(e) { return Object.keys(e).map(t => { let [n, o, r] = e[t], i = { propName: n, templateName: t, isSignal: (o & Ha.SignalBased) !== 0 }; return r && (i.transform = r), i; }); }
function PA(e) { return Object.keys(e).map(t => ({ propName: e[t], templateName: t })); }
function LA(e, t, n) { let o = t instanceof Se ? t : t?.injector; return o && e.getStandaloneInjector !== null && (o = e.getStandaloneInjector(o) || o), o ? new Eo(n, o) : n; }
function FA(e) { let t = e.get(oi, null); if (t === null)
    throw new D(407, !1); let n = e.get(wE, null), o = e.get(Pe, null), r = e.get(Un, null, { optional: !0 }); return { rendererFactory: t, sanitizer: n, changeDetectionScheduler: o, ngReflect: !1, tracingService: r }; }
function jA(e, t) { let n = BE(e); return ja(t, n, n === "svg" ? Ml : n === "math" ? Nl : null); }
function BE(e) { return (e.selectors[0][0] || "div").toLowerCase(); }
var nn = class extends cc {
    componentDef;
    ngModule;
    selector;
    componentType;
    ngContentSelectors;
    isBoundToModule;
    cachedInputs = null;
    cachedOutputs = null;
    get inputs() { return this.cachedInputs ??= xA(this.componentDef.inputs), this.cachedInputs; }
    get outputs() { return this.cachedOutputs ??= PA(this.componentDef.outputs), this.cachedOutputs; }
    constructor(t, n) { super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = gS(t.selectors), this.ngContentSelectors = t.ngContentSelectors ?? [], this.isBoundToModule = !!n; }
    create(t, n, o, r, i, s) { V(O.DynamicComponentStart); let a = A(null); try {
        let c = this.componentDef, l = LA(c, r || this.ngModule, t), u = FA(l), d = u.tracingService;
        return d && d.componentCreate ? d.componentCreate(xf(c), () => this.createComponentRef(u, l, n, o, i, s)) : this.createComponentRef(u, l, n, o, i, s);
    }
    finally {
        A(a);
    } }
    createComponentRef(t, n, o, r, i, s) { let a = this.componentDef, c = VA(r, a, s, i), l = t.rendererFactory.createRenderer(null, a), u = r ? US(l, r, a.encapsulation, n) : jA(a, l), d = s?.some(Yg) || i?.some(h => typeof h != "function" && h.bindings.some(Yg)), f = Va(null, c, null, 512 | af(a), null, null, t, l, n, null, Ov(u, n, !0)); f[I] = u, Cs(f); let p = null; try {
        let h = Rf(I, f, 2, "#host", () => c.directiveRegistry, !0, 0);
        ry(l, u, h), $e(u, f), Za(c, f, h), Yd(c, h, f), kf(c, h), o !== void 0 && BA(h, this.ngContentSelectors, o), p = Ee(h.index, f), f[$] = p[$], ec(c, f, null);
    }
    catch (h) {
        throw p !== null && Ru(p), Ru(f), h;
    }
    finally {
        V(O.DynamicComponentEnd), Ts();
    } return new fa(this.componentType, f, !!d); }
};
function VA(e, t, n, o) { let r = e ? ["ng-version", "21.2.10"] : mS(t.selectors[0]), i = null, s = null, a = 0; if (n)
    for (let u of n)
        a += u[wt].requiredVars, u.create && (u.targetIdx = 0, (i ??= []).push(u)), u.update && (u.targetIdx = 0, (s ??= []).push(u)); if (o)
    for (let u = 0; u < o.length; u++) {
        let d = o[u];
        if (typeof d != "function")
            for (let f of d.bindings) {
                a += f[wt].requiredVars;
                let p = u + 1;
                f.create && (f.targetIdx = p, (i ??= []).push(f)), f.update && (f.targetIdx = p, (s ??= []).push(f));
            }
    } let c = [t]; if (o)
    for (let u of o) {
        let d = typeof u == "function" ? u : u.type, f = Ae(d);
        c.push(f);
    } return sf(0, null, HA(i, s), 1, a, c, null, null, null, [r], null); }
function HA(e, t) { return !e && !t ? null : n => { if (n & 1 && e)
    for (let o of e)
        o.create(); if (n & 2 && t)
    for (let o of t)
        o.update(); }; }
function Yg(e) { let t = e[wt].kind; return t === "input" || t === "twoWay"; }
var fa = class extends NE {
    _rootLView;
    _hasInputBindings;
    instance;
    hostView;
    changeDetectorRef;
    componentType;
    location;
    previousInputValues = null;
    _tNode;
    constructor(t, n, o) { super(), this._rootLView = n, this._hasInputBindings = o, this._tNode = Gt(n[m], I), this.location = Po(this._tNode, n), this.instance = Ee(this._tNode.index, n)[$], this.hostView = this.changeDetectorRef = new tn(n, void 0), this.componentType = t; }
    setInput(t, n) { this._hasInputBindings; let o = this._tNode; if (this.previousInputValues ??= new Map, this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n))
        return; let r = this._rootLView, i = Xa(o, r[m], r, t, n); this.previousInputValues.set(t, n); let s = Ee(o.index, r); _i(s, 1); }
    get injector() { return new Jt(this._tNode, this._rootLView); }
    destroy() { this.hostView.destroy(); }
    onDestroy(t) { this.hostView.onDestroy(t); }
};
function BA(e, t, n) { let o = e.projection = []; for (let r = 0; r < t.length; r++) {
    let i = n[r];
    o.push(i != null && i.length ? Array.from(i) : null);
} }
var dc = (() => { class e {
    static __NG_ELEMENT_ID__ = UA;
} return e; })();
function UA() { let e = _(); return UE(e, g()); }
var ad = class e extends dc {
    _lContainer;
    _hostTNode;
    _hostLView;
    constructor(t, n, o) { super(), this._lContainer = t, this._hostTNode = n, this._hostLView = o; }
    get element() { return Po(this._hostTNode, this._hostLView); }
    get injector() { return new Jt(this._hostTNode, this._hostLView); }
    get parentInjector() { let t = Rd(this._hostTNode, this._hostLView); if (Gm(t)) {
        let n = Ys(t, this._hostLView), o = Zs(t), r = n[m].data[o + 8];
        return new Jt(r, n);
    }
    else
        return new Jt(null, this._hostLView); }
    clear() { for (; this.length > 0;)
        this.remove(this.length - 1); }
    get(t) { let n = Kg(this._lContainer); return n !== null && n[t] || null; }
    get length() { return this._lContainer.length - W; }
    createEmbeddedView(t, n, o) { let r, i; typeof o == "number" ? r = o : o != null && (r = o.index, i = o.injector); let s = ni(this._lContainer, t.ssrId), a = t.createEmbeddedViewImpl(n || {}, i, s); return this.insertImpl(a, r, On(this._hostTNode, s)), a; }
    createComponent(t, n, o, r, i, s, a) { let c = t && !xr(t), l; if (c)
        l = n;
    else {
        let E = n || {};
        l = E.index, o = E.injector, r = E.projectableNodes, i = E.environmentInjector || E.ngModuleRef, s = E.directives, a = E.bindings;
    } let u = c ? t : new nn(z(t)), d = o || this.parentInjector; if (!i && u.ngModule == null) {
        let C = (c ? d : this.parentInjector).get(Se, null);
        C && (i = C);
    } let f = z(u.componentType ?? {}), p = ni(this._lContainer, f?.id ?? null), h = p?.firstChild ?? null, v = u.create(d, r, h, i, s, a); return this.insertImpl(v.hostView, l, On(this._hostTNode, p)), v; }
    insert(t, n) { return this.insertImpl(t, n, !0); }
    insertImpl(t, n, o) { let r = t._lView; if (Jh(r)) {
        let a = this.indexOf(t);
        if (a !== -1)
            this.detach(a);
        else {
            let c = r[Q], l = new e(c, c[ue], c[Q]);
            l.detach(l.indexOf(t));
        }
    } let i = this._adjustIndex(n), s = this._lContainer; return Qo(s, r, i, o), t.attachToViewContainerRef(), fl(gu(s), i, t), t; }
    move(t, n) { return this.insert(t, n); }
    indexOf(t) { let n = Kg(this._lContainer); return n !== null ? n.indexOf(t) : -1; }
    remove(t) { let n = this._adjustIndex(t, -1), o = Xr(this._lContainer, n); o && (Ir(gu(this._lContainer), n), wi(o[m], o)); }
    detach(t) { let n = this._adjustIndex(t, -1), o = Xr(this._lContainer, n); return o && Ir(gu(this._lContainer), n) != null ? new tn(o) : null; }
    _adjustIndex(t, n = 0) { return t ?? this.length + n; }
};
function Kg(e) { return e[Mr]; }
function gu(e) { return e[Mr] || (e[Mr] = []); }
function UE(e, t) { let n, o = t[e.index]; return J(o) ? n = o : (n = Ky(o, t, null, e), t[e.index] = n, cf(t, n)), $E(n, t, e, o), new ad(n, e, t); }
function $A(e, t) { let n = e[w], o = n.createComment(""), r = ae(t, e), i = n.parentNode(r); return An(n, i, o, n.nextSibling(r), !1), o; }
var $E = GE, Pf = () => !1;
function qE(e, t, n) { return Pf(e, t, n); }
function GE(e, t, n, o) { if (e[Je])
    return; let r; n.type & 8 ? r = L(o) : r = $A(t, n), e[Je] = r; }
function qA(e, t, n) { if (e[Je] && e[ke])
    return !0; let o = n[de], r = t.index - I; if (!o || Fo(t) || La(o, r))
    return !1; let s = Pu(o, r), a = o.data[Vo]?.[r]; if (a === void 0)
    return !1; let [c, l] = sA(s, a); return e[Je] = c, e[ke] = l, !0; }
function GA(e, t, n, o) { Pf(e, n, t) || GE(e, t, n, o); }
function WE() { $E = GA, Pf = qA; }
var cd = class e {
    queryList;
    matches = null;
    constructor(t) { this.queryList = t; }
    clone() { return new e(this.queryList); }
    setDirty() { this.queryList.setDirty(); }
}, ld = class e {
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
        Ff(t, n).matches !== null && this.queries[n].setDirty(); }
}, pa = class {
    flags;
    read;
    predicate;
    constructor(t, n, o = null) { this.flags = n, this.read = o, typeof t == "string" ? this.predicate = YA(t) : this.predicate = t; }
}, ud = class e {
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
}, dd = class e {
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
            this.matchTNodeWithReadOption(t, n, WA(n, i)), this.matchTNodeWithReadOption(t, n, Vs(n, t, i, !1, !1));
        }
    else
        o === ei ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, Vs(n, t, o, !1, !1)); }
    matchTNodeWithReadOption(t, n, o) { if (o !== null) {
        let r = this.metadata.read;
        if (r !== null)
            if (r === hi || r === dc || r === ei && n.type & 4)
                this.addMatch(n.index, -2);
            else {
                let i = Vs(n, t, r, !1, !1);
                i !== null && this.addMatch(n.index, i);
            }
        else
            this.addMatch(n.index, o);
    } }
    addMatch(t, n) { this.matches === null ? this.matches = [t, n] : this.matches.push(t, n); }
};
function WA(e, t) { let n = e.localNames; if (n !== null) {
    for (let o = 0; o < n.length; o += 2)
        if (n[o] === t)
            return n[o + 1];
} return null; }
function zA(e, t) { return e.type & 11 ? Po(e, t) : e.type & 4 ? nc(e, t) : null; }
function QA(e, t, n, o) { return n === -1 ? zA(t, e) : n === -2 ? ZA(e, t, o) : zr(e, e[m], n, t); }
function ZA(e, t, n) { if (n === hi)
    return Po(t, e); if (n === ei)
    return nc(t, e); if (n === dc)
    return UE(t, e); }
function zE(e, t, n, o) { let r = t[st].queries[o]; if (r.matches === null) {
    let i = e.data, s = n.matches, a = [];
    for (let c = 0; s !== null && c < s.length; c += 2) {
        let l = s[c];
        if (l < 0)
            a.push(null);
        else {
            let u = i[l];
            a.push(QA(t, u, s[c + 1], n.metadata.read));
        }
    }
    r.matches = a;
} return r.matches; }
function fd(e, t, n, o) { let r = e.queries.getByIndex(n), i = r.matches; if (i !== null) {
    let s = zE(e, t, r, n);
    for (let a = 0; a < i.length; a += 2) {
        let c = i[a];
        if (c > 0)
            o.push(s[a / 2]);
        else {
            let l = i[a + 1], u = t[-c];
            for (let d = W; d < u.length; d++) {
                let f = u[d];
                f[qt] === f[Q] && fd(f[m], f, l, o);
            }
            if (u[In] !== null) {
                let d = u[In];
                for (let f = 0; f < d.length; f++) {
                    let p = d[f];
                    fd(p[m], p, l, o);
                }
            }
        }
    }
} return o; }
function Lf(e, t) { return e[st].queries[t].queryList; }
function QE(e, t, n) { let o = new Xs((n & 4) === 4); return Xh(e, t, o, o.destroy), (t[st] ??= new ld).queries.push(new cd(o)) - 1; }
function ZE(e, t, n) { let o = R(); return o.firstCreatePass && (KE(o, new pa(e, t, n), -1), (t & 2) === 2 && (o.staticViewQueries = !0)), QE(o, g(), t); }
function YE(e, t, n, o) { let r = R(); if (r.firstCreatePass) {
    let i = _();
    KE(r, new pa(t, n, o), i.index), KA(r, e), (n & 2) === 2 && (r.staticContentQueries = !0);
} return QE(r, g(), n); }
function YA(e) { return e.split(",").map(t => t.trim()); }
function KE(e, t, n) { e.queries === null && (e.queries = new ud), e.queries.track(new dd(t, n)); }
function KA(e, t) { let n = e.contentQueries || (e.contentQueries = []), o = n.length ? n[n.length - 1] : -1; t !== o && n.push(e.queries.length - 1, t); }
function Ff(e, t) { return e.queries.getByIndex(t); }
function JE(e, t) { let n = e[m], o = Ff(n, t); return o.crossesNgTemplate ? fd(n, e, t, []) : zE(n, e, o, t); }
function jf(e, t, n) { let o, r = zi(() => { o._dirtyCounter(); let i = JA(o, e); if (t && i === void 0)
    throw new D(-951, !1); return i; }); return o = r[K], o._dirtyCounter = Zt(0), o._flatValue = void 0, r; }
function Vf(e) { return jf(!0, !1, e); }
function Hf(e) { return jf(!0, !0, e); }
function Bf(e) { return jf(!1, !1, e); }
function XE(e, t) { let n = e[K]; n._lView = g(), n._queryIndex = t, n._queryList = Lf(n._lView, t), n._queryList.onDirty(() => n._dirtyCounter.update(o => o + 1)); }
function JA(e, t) { let n = e._lView, o = e._queryIndex; if (n === void 0 || o === void 0 || n[N] & 4)
    return t ? void 0 : F; let r = Lf(n, o), i = JE(n, o); return r.reset(i, ov), t ? r.first : r._changesDetected || e._flatValue === void 0 ? e._flatValue = r.toArray() : e._flatValue; }
var Pn = new Map, ii = new Set;
function eI(e) { return Qe(this, null, function* () { let t = Pn; Pn = new Map; let n = new Map; function o(i) { let s = n.get(i); if (s)
    return s; let a = e(i).then(c => oR(i, c)); return n.set(i, a), a; } let r = Array.from(t).map(a => Qe(null, [a], function* ([i, s]) { if (s.styleUrl && s.styleUrls?.length)
    throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple"); let c = []; s.templateUrl && c.push(o(s.templateUrl).then(f => { s.template = f; })); let l = typeof s.styles == "string" ? [s.styles] : s.styles ?? []; s.styles = l; let { styleUrl: u, styleUrls: d } = s; if (u && (d = [u], s.styleUrl = void 0), d?.length) {
    let f = Promise.all(d.map(p => o(p))).then(p => { l.push(...p), s.styleUrls = void 0; });
    c.push(f);
} yield Promise.all(c), ii.delete(i); })); yield Promise.all(r); }); }
function XA(e, t) { tI(t) && (Pn.set(e, t), ii.add(e)); }
function eR(e) { return ii.has(e); }
function tI(e) { return !!(e.templateUrl && !e.hasOwnProperty("template") || e.styleUrls?.length || e.styleUrl); }
function tR() { let e = Pn; return Pn = new Map, e; }
function nR(e) { ii.clear(); for (let t of e.keys())
    ii.add(t); Pn = e; }
function nI() { return Pn.size === 0; }
function oR(e, t) { return Qe(this, null, function* () { if (typeof t == "string")
    return t; if (t.status !== void 0 && t.status !== 200)
    throw new D(918, !1); return t.text(); }); }
var pd = new Map, oI = !0;
function rR(e, t, n) { if (t && t !== n && oI)
    throw new D(921, !1); }
function Uf(e, t) { let n = pd.get(t) || null; rR(t, n, e), pd.set(t, e); }
function $f(e) { return pd.get(e); }
function iR(e) { oI = !e; }
var So = class {
}, rI = class {
};
function iI(e, t) { return new bo(e, t ?? null, []); }
var sR = iI, bo = class extends So {
    ngModuleType;
    _parent;
    _bootstrapComponents = [];
    _r3Injector;
    instance;
    destroyCbs = [];
    componentFactoryResolver = new da(this);
    constructor(t, n, o, r = !0) { super(), this.ngModuleType = t, this._parent = n; let i = mn(t); this._bootstrapComponents = ho(i.bootstrap), this._r3Injector = Yl(t, n, [{ provide: So, useValue: this }, { provide: bi, useValue: this.componentFactoryResolver }, ...o], fr(t), new Set(["environment"])), r && this.resolveInjectorInitializers(); }
    resolveInjectorInitializers() { this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(this.ngModuleType); }
    get injector() { return this._r3Injector; }
    destroy() { let t = this._r3Injector; !t.destroyed && t.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null; }
    onDestroy(t) { this.destroyCbs.push(t); }
}, Ao = class extends rI {
    moduleType;
    constructor(t) { super(), this.moduleType = t; }
    create(t) { return new bo(this.moduleType, t, []); }
};
function sI(e, t, n) { return new bo(e, t, n, !1); }
var si = class extends So {
    injector;
    componentFactoryResolver = new da(this);
    instance = null;
    constructor(t) { super(); let n = new pn([...t.providers, { provide: So, useValue: this }, { provide: bi, useValue: this.componentFactoryResolver }], t.parent || eo(), t.debugName, new Set(["environment"])); this.injector = n, t.runEnvironmentInitializers && n.resolveInjectorInitializers(); }
    destroy() { this.injector.destroy(); }
    onDestroy(t) { this.injector.onDestroy(t); }
};
function qf(e, t, n = null) { return new si({ providers: e, parent: t, debugName: n, runEnvironmentInitializers: !0 }).injector; }
var aR = (() => { class e {
    _injector;
    cachedInjectors = new Map;
    constructor(n) { this._injector = n; }
    getOrCreateStandaloneInjector(n) { if (!n.standalone)
        return null; if (!this.cachedInjectors.has(n)) {
        let o = us(!1, n.type), r = o.length > 0 ? qf([o], this._injector, "") : null;
        this.cachedInjectors.set(n, r);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = U({ token: e, providedIn: "environment", factory: () => new e(he(Se)) });
} return e; })();
function aI(e) { return ht(() => { let t = dI(e), n = se(H({}, t), { decls: e.decls, vars: e.vars, template: e.template, consts: e.consts || null, ngContentSelectors: e.ngContentSelectors, onPush: e.changeDetection === Na.OnPush, directiveDefs: null, pipeDefs: null, dependencies: t.standalone && e.dependencies || null, getStandaloneInjector: t.standalone ? r => r.get(aR).getOrCreateStandaloneInjector(n) : null, getExternalStyles: null, signals: e.signals ?? !1, data: e.data || {}, encapsulation: e.encapsulation || qe.Emulated, styles: e.styles || F, _: null, schemas: e.schemas || null, tView: null, id: "" }); t.standalone && X("NgStandalone"), fI(n); let o = e.dependencies; return n.directiveDefs = ha(o, cI), n.pipeDefs = ha(o, Ze), n.id = dR(n), n; }); }
function cI(e) { return z(e) || Ae(e); }
function Gf(e) { return ht(() => ({ type: e.type, bootstrap: e.bootstrap || F, declarations: e.declarations || F, imports: e.imports || F, exports: e.exports || F, transitiveCompileScopes: null, schemas: e.schemas || null, id: e.id || null })); }
function cR(e, t) { if (e == null)
    return Fe; let n = {}; for (let o in e)
    if (e.hasOwnProperty(o)) {
        let r = e[o], i, s, a, c;
        Array.isArray(r) ? (a = r[0], i = r[1], s = r[2] ?? i, c = r[3] || null) : (i = r, s = r, a = Ha.None, c = null), n[i] = [o, a, c], t[i] = s;
    } return n; }
function lR(e) { if (e == null)
    return Fe; let t = {}; for (let n in e)
    e.hasOwnProperty(n) && (t[e[n]] = n); return t; }
function lI(e) { return ht(() => { let t = dI(e); return fI(t), t; }); }
function uI(e) { return { type: e.type, name: e.name, factory: null, pure: e.pure !== !1, standalone: e.standalone ?? !0, onDestroy: e.type.prototype.ngOnDestroy || null }; }
function dI(e) { let t = {}; return { type: e.type, providersResolver: null, viewProvidersResolver: null, factory: null, hostBindings: e.hostBindings || null, hostVars: e.hostVars || 0, hostAttrs: e.hostAttrs || null, contentQueries: e.contentQueries || null, declaredInputs: t, inputConfig: e.inputs || Fe, exportAs: e.exportAs || null, standalone: e.standalone ?? !0, signals: e.signals === !0, selectors: e.selectors || F, viewQuery: e.viewQuery || null, features: e.features || null, setInput: null, resolveHostDirectives: null, hostDirectives: null, controlDef: null, inputs: cR(e.inputs, t), outputs: lR(e.outputs), debugInfo: null }; }
function fI(e) { e.features?.forEach(t => t(e)); }
function ha(e, t) { return e ? () => { let n = typeof e == "function" ? e() : e, o = []; for (let r of n) {
    let i = t(r);
    i !== null && o.push(i);
} return o; } : null; }
var uR = new Map;
function dR(e) { let t = 0, n = typeof e.consts == "function" ? "" : e.consts, o = [e.selectors, e.ngContentSelectors, e.hostVars, e.hostAttrs, n, e.vars, e.decls, e.encapsulation, e.standalone, e.signals, e.exportAs, JSON.stringify(e.inputs), JSON.stringify(e.outputs), Object.getOwnPropertyNames(e.type.prototype), !!e.contentQueries, !!e.viewQuery]; for (let i of o.join("|"))
    t = Math.imul(31, t) + i.charCodeAt(0) << 0; return t += 2147483648, "c" + t; }
function pI(e) { return t => { t.controlDef = { create: (n, o) => { n?.\u0275ngControlCreate(o); }, update: (n, o) => { n?.\u0275ngControlUpdate?.(o); }, passThroughInput: e }; }; }
function hI(e) { let t = n => { let o = Array.isArray(e); n.hostDirectives === null ? (n.resolveHostDirectives = fR, n.hostDirectives = o ? e.map(hd) : [e]) : o ? n.hostDirectives.unshift(...e.map(hd)) : n.hostDirectives.unshift(e); }; return t.ngInherit = !0, t; }
function fR(e) { let t = [], n = !1, o = null, r = null; for (let i = 0; i < e.length; i++) {
    let s = e[i];
    if (s.hostDirectives !== null) {
        let a = t.length;
        o ??= new Map, r ??= new Map, gI(s, t, o), r.set(s, [a, t.length - 1]);
    }
    i === 0 && Be(s) && (n = !0, t.push(s));
} for (let i = n ? 1 : 0; i < e.length; i++)
    t.push(e[i]); return [t, o, r]; }
function gI(e, t, n) { if (e.hostDirectives !== null)
    for (let o of e.hostDirectives)
        if (typeof o == "function") {
            let r = o();
            for (let i of r)
                Jg(hd(i), t, n);
        }
        else
            Jg(o, t, n); }
function Jg(e, t, n) { let o = Ae(e.directive); pR(o.declaredInputs, e.inputs), gI(o, t, n), n.set(o, e), t.push(o); }
function hd(e) { return typeof e == "function" ? { directive: x(e), inputs: Fe, outputs: Fe } : { directive: x(e.directive), inputs: Xg(e.inputs), outputs: Xg(e.outputs) }; }
function Xg(e) { if (e === void 0 || e.length === 0)
    return Fe; let t = {}; for (let n = 0; n < e.length; n += 2)
    t[e[n]] = e[n + 1]; return t; }
function pR(e, t) { for (let n in t)
    if (t.hasOwnProperty(n)) {
        let o = t[n], r = e[n];
        e[o] = r;
    } }
function hR(e) { return Object.getPrototypeOf(e.prototype).constructor; }
function Wf(e) { let t = hR(e.type), n = !0, o = [e]; for (; t;) {
    let r;
    if (Be(e))
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
            s.inputs = mu(e.inputs), s.declaredInputs = mu(e.declaredInputs), s.outputs = mu(e.outputs);
            let a = r.hostBindings;
            a && ER(e, a);
            let c = r.viewQuery, l = r.contentQueries;
            if (c && vR(e, c), l && yR(e, l), gR(e, r), jh(e.outputs, r.outputs), Be(r) && r.data.animation) {
                let u = e.data;
                u.animation = (u.animation || []).concat(r.data.animation);
            }
        }
        let i = r.features;
        if (i)
            for (let s = 0; s < i.length; s++) {
                let a = i[s];
                a && a.ngInherit && a(e), a === Wf && (n = !1);
            }
    }
    t = Object.getPrototypeOf(t);
} mR(o); }
function gR(e, t) { for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n))
        continue;
    let o = t.inputs[n];
    o !== void 0 && (e.inputs[n] = o, e.declaredInputs[n] = t.declaredInputs[n]);
} }
function mR(e) { let t = 0, n = null; for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    r.hostVars = t += r.hostVars, r.hostAttrs = To(r.hostAttrs, n = To(n, r.hostAttrs));
} }
function mu(e) { return e === Fe ? {} : e === F ? [] : e; }
function vR(e, t) { let n = e.viewQuery; n ? e.viewQuery = (o, r) => { t(o, r), n(o, r); } : e.viewQuery = t; }
function yR(e, t) { let n = e.contentQueries; n ? e.contentQueries = (o, r, i) => { t(o, r, i), n(o, r, i); } : e.contentQueries = t; }
function ER(e, t) { let n = e.hostBindings; n ? e.hostBindings = (o, r) => { t(o, r), n(o, r); } : e.hostBindings = t; }
function mI(e, t, n, o, r, i, s, a) { if (n.firstCreatePass) {
    e.mergedAttrs = To(e.mergedAttrs, e.attrs);
    let u = e.tView = sf(2, e, r, i, s, n.directiveRegistry, n.pipeRegistry, null, n.schemas, n.consts, null);
    n.queries !== null && (n.queries.template(n, e), u.queries = n.queries.embeddedTView(e));
} a && (e.flags |= a), ut(e, !1); let c = vI(n, t, e, o); Ar() && Ef(n, t, c, e), $e(c, t); let l = Ky(c, t, c, e); t[o + I] = l, cf(t, l), qE(l, e, t); }
function IR(e, t, n, o, r, i, s, a, c, l, u) { let d = n + I, f; return t.firstCreatePass ? (f = $n(t, d, 4, s || null, a || null), ys() && SE(t, e, f, me(t.consts, l), Tf), Bm(t, f)) : f = t.data[d], mI(f, e, t, n, o, r, i, c), to(f) && Za(t, e, f), l != null && Wo(e, f, u), f; }
function Ln(e, t, n, o, r, i, s, a, c, l, u) { let d = n + I, f; if (t.firstCreatePass) {
    if (f = $n(t, d, 4, s || null, a || null), l != null) {
        let p = me(t.consts, l);
        f.localNames = [];
        for (let h = 0; h < p.length; h += 2)
            f.localNames.push(p[h], -1);
    }
}
else
    f = t.data[d]; return mI(f, e, t, n, o, r, i, c), l != null && Wo(e, f, u), f; }
function zf(e, t, n, o, r, i, s, a) { let c = g(), l = R(), u = me(l.consts, i); return IR(c, l, e, t, n, o, r, u, void 0, s, a), zf; }
function Qf(e, t, n, o, r, i, s, a) { let c = g(), l = R(), u = me(l.consts, i); return Ln(c, l, e, t, n, o, r, u, void 0, s, a), Qf; }
var vI = yI;
function yI(e, t, n, o) { return Xe(!0), t[w].createComment(""); }
function DR(e, t, n, o) { let r = !Fa(t, n); Xe(r); let i = t[de]?.data[Sa]?.[o] ?? null; if (i !== null && n.tView !== null && n.tView.ssrId === null && (n.tView.ssrId = i), r)
    return yI(e, t); let s = t[de], a = Si(s, e, t, n); Pa(s, o, a); let c = Qd(s, o); return rc(c, a); }
function EI() { vI = DR; }
var re = (function (e) { return e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.IN_PROGRESS = 1] = "IN_PROGRESS", e[e.COMPLETE = 2] = "COMPLETE", e[e.FAILED = 3] = "FAILED", e; })(re || {}), em = 0, CR = 1, Z = (function (e) { return e[e.Placeholder = 0] = "Placeholder", e[e.Loading = 1] = "Loading", e[e.Complete = 2] = "Complete", e[e.Error = 3] = "Error", e; })(Z || {}), ai = (function (e) { return e[e.Initial = -1] = "Initial", e; })(ai || {}), Io = 0, Ot = 1, Lr = 2, xs = 3, TR = 4, MR = 5, fc = 6, NR = 7, Do = 8, wR = 9, Zf = (function (e) { return e[e.Manual = 0] = "Manual", e[e.Playthrough = 1] = "Playthrough", e; })(Zf || {});
function Ai(e, t, n) { let o = DI(e); t[o] === null && (t[o] = []), t[o].push(n); }
function $s(e, t) { let n = DI(e), o = t[n]; if (o !== null) {
    for (let r of o)
        r();
    t[n] = null;
} }
function II(e) { $s(1, e), $s(0, e), $s(2, e); }
function DI(e) { let t = TR; return e === 1 ? t = MR : e === 2 && (t = wR), t; }
function Ri(e) { return e + 1; }
function Me(e, t) { let n = e[m], o = Ri(t.index); return e[o]; }
function _R(e, t, n) { let o = e[m], r = Ri(t); e[r] = n; }
function pe(e, t) { let n = Ri(t.index); return e.data[n]; }
function SR(e, t, n) { let o = Ri(t); e.data[o] = n; }
function bR(e, t, n) { let o = t[m], r = pe(o, n); switch (e) {
    case Z.Complete: return r.primaryTmplIndex;
    case Z.Loading: return r.loadingTmplIndex;
    case Z.Error: return r.errorTmplIndex;
    case Z.Placeholder: return r.placeholderTmplIndex;
    default: return null;
} }
function gd(e, t) { return t === Z.Placeholder ? e.placeholderBlockConfig?.[em] ?? null : t === Z.Loading ? e.loadingBlockConfig?.[em] ?? null : null; }
function CI(e) { return e.loadingBlockConfig?.[CR] ?? null; }
function tm(e, t) { if (!e || e.length === 0)
    return t; let n = new Set(e); for (let o of t)
    n.add(o); return e.length === n.size ? e : Array.from(n); }
function AR(e, t) { let n = t.primaryTmplIndex + I; return Gt(e, n); }
function TI(e) { return e !== null && typeof e == "object" && typeof e.primaryTmplIndex == "number"; }
function MI(e, t) { let n = null, o = Ri(t.index); return I < o && o < e.bindingStartIndex && (n = pe(e, t)), !!n && TI(n); }
function Yf(e, t, n, o) { let r = n.get(G); return t_(e, () => r.run(t), i => r.runOutsideAngular(() => e_(i)), o); }
function RR(e, t, n) { return n == null ? e : n >= 0 ? _l(n, e) : e[t.index][W] ?? null; }
function kR(e, t) { return Dn(I + t, e); }
function Jo(e, t, n, o, r, i, s, a) { let c = e[P], l = c.get(G), u; function d() { if (lt(e)) {
    u.destroy();
    return;
} let f = Me(e, t), p = f[Ot]; if (p !== ai.Initial && p !== Z.Placeholder) {
    u.destroy();
    return;
} let h = RR(e, t, o); if (!h || (u.destroy(), lt(h)))
    return; let v = kR(h, n), E = r(v, () => { l.run(() => { e !== h && vs(h, E), i(); }); }, c, a); e !== h && _r(h, E), Ai(s, f, E); } u = Ny({ read: d }, { injector: c }); }
function pc(e, t) { let n = t.get(PR), o = () => n.remove(e); return n.add(e), o; }
var OR = () => typeof requestIdleCallback < "u" ? requestIdleCallback : setTimeout, xR = () => typeof requestIdleCallback < "u" ? cancelIdleCallback : clearTimeout, PR = (() => { class e {
    executingCallbacks = !1;
    idleId = null;
    current = new Set;
    deferred = new Set;
    ngZone = y(G);
    requestIdleCallbackFn = OR().bind(globalThis);
    cancelIdleCallbackFn = xR().bind(globalThis);
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
function hc(e) { return (t, n) => NI(e, t, n); }
function NI(e, t, n) { let o = n.get(wI), r = n.get(G), i = () => o.remove(t); return o.add(e, t, r), i; }
var wI = (() => { class e {
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
        } hl(n, i, o, r); }
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
} return e; })(), LR = (() => { class e {
    cachedInjectors = new Map;
    getOrCreateInjector(n, o, r, i) { if (!this.cachedInjectors.has(n)) {
        let s = r.length > 0 ? qf(r, o, i) : null;
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
} return e; })(), FR = new T("DEFER_BLOCK_DEPENDENCY_INTERCEPTOR"), _I = new T("");
function vu(e, t, n) { return e.get(LR).getOrCreateInjector(t, e, n, ""); }
function jR(e, t, n) { if (e instanceof Eo) {
    let r = e.injector, i = e.parentInjector, s = vu(i, t, n);
    return new Eo(r, s);
} let o = e.get(Se); if (o !== e) {
    let r = vu(o, t, n);
    return new Eo(e, r);
} return vu(e, t, n); }
function Nt(e, t, n, o = !1) { let r = n[Q], i = r[m]; if (lt(r))
    return; let s = Me(r, t), a = s[Ot], c = s[NR]; if (!(c !== null && e < c) && om(a, e) && om(s[Io] ?? -1, e)) {
    let l = pe(i, t), d = !o && (typeof ngServerMode > "u" || !ngServerMode) && (CI(l) !== null || gd(l, Z.Loading) !== null || gd(l, Z.Placeholder)) ? md : SI;
    try {
        d(e, s, n, t, r);
    }
    catch (f) {
        Mf(r, f);
    }
} }
function VR(e, t) { let n = e[ke]?.findIndex(r => r.data[yi] === t[Ot]) ?? -1; return { dehydratedView: n > -1 ? e[ke][n] : null, dehydratedViewIx: n }; }
function SI(e, t, n, o, r) { V(O.DeferBlockStateStart); let i = bR(e, r, o); if (i !== null) {
    t[Ot] = e;
    let s = r[m], a = i + I, c = Gt(s, a), l = 0;
    Nf(n, l);
    let u;
    if (e === Z.Complete) {
        let h = pe(s, o), v = h.providers;
        v && v.length > 0 && (u = jR(r[P], h, v));
    }
    let { dehydratedView: d, dehydratedViewIx: f } = VR(n, t), p = zo(r, c, null, { injector: u, dehydratedView: d });
    if (Qo(n, p, l, On(c, d)), _i(p, 2), f > -1 && n[ke]?.splice(f, 1), (e === Z.Complete || e === Z.Error) && Array.isArray(t[Do])) {
        for (let h of t[Do])
            h();
        t[Do] = null;
    }
} V(O.DeferBlockStateEnd); }
function HR(e, t, n, o, r) { let i = Date.now(), s = r[m], a = pe(s, o); if (t[Lr] === null || t[Lr] <= i) {
    t[Lr] = null;
    let c = CI(a), l = t[xs] !== null;
    if (e === Z.Loading && c !== null && !l) {
        t[Io] = e;
        let u = nm(c, t, o, n, r);
        t[xs] = u;
    }
    else {
        e > Z.Loading && l && (t[xs](), t[xs] = null, t[Io] = null), SI(e, t, n, o, r);
        let u = gd(a, e);
        u !== null && (t[Lr] = i + u, nm(u, t, o, n, r));
    }
}
else
    t[Io] = e; }
function nm(e, t, n, o, r) { return NI(e, () => { let s = t[Io]; t[Lr] = null, t[Io] = null, s !== null && Nt(s, n, o); }, r[P]); }
function om(e, t) { return e < t; }
function Xo(e, t) { let n = e[t.index]; Nt(Z.Placeholder, t, n); }
function rm(e, t, n) { e.loadingPromise.then(() => { e.loadingState === re.COMPLETE ? Nt(Z.Complete, t, n) : e.loadingState === re.FAILED && Nt(Z.Error, t, n); }); }
var md = null;
function bI(e, t, n, o) { let r = e.consts; n != null && (t.placeholderBlockConfig = me(r, n)), o != null && (t.loadingBlockConfig = me(r, o)), md === null && (md = HR); }
var qs = "__ngAsyncComponentMetadataFn__";
function BR(e) { return e[qs] ?? null; }
function AI(e, t, n) { let o = e; return o[qs] = () => Promise.all(t()).then(r => (n(...r), o[qs] = null, r)), o[qs]; }
function Kf(e, t, n, o) { return ht(() => { let r = e; t !== null && (r.hasOwnProperty("decorators") && r.decorators !== void 0 ? r.decorators.push(...t) : r.decorators = t), n !== null && (r.ctorParameters = n), o !== null && (r.hasOwnProperty("propDecorators") && r.propDecorators !== void 0 ? r.propDecorators = H(H({}, r.propDecorators), o) : r.propDecorators = o); }); }
var UR = (() => { class e {
    log(n) { console.log(n); }
    warn(n) { console.warn(n); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = U({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function Jf(e) { return typeof e == "function" && e[K] !== void 0; }
function Xf(e) { return Jf(e) && typeof e.set == "function"; }
function Gs(e, t) { let n = e[m]; for (let o = I; o < n.bindingStartIndex; o++)
    if (J(e[o])) {
        let r = e[o];
        if (!(o === n.bindingStartIndex - 1)) {
            let s = n.data[o], a = pe(n, s);
            if (TI(a)) {
                t.push({ lContainer: r, lView: e, tNode: s, tDetails: a });
                continue;
            }
        }
        oe(r[q]) && Gs(r[q], t);
        for (let s = W; s < r.length; s++)
            Gs(r[s], t);
    }
    else
        oe(e[o]) && Gs(e[o], t); }
function $R() { return X("Chrome DevTools profiling"), () => { }; }
function qR(e) { let t = e.get(Qt), n = e.get(At), o = gv(t, n), r = {}; for (let [i, s] of Object.entries(o))
    r_(i) || (r[i] = s); return r; }
var im = "ng";
function GR(e, t) { WR(e, t); }
function WR(e, t) { if (typeof COMPILED > "u" || !COMPILED) {
    let n = be;
    n[im] ??= {}, n[im][e] = t;
} }
var RI = new T(""), kI = new T(""), zR = (() => { class e {
    _ngZone;
    registry;
    _isZoneStable = !0;
    _callbacks = [];
    _taskTrackingZone = null;
    _destroyRef;
    constructor(n, o, r) { this._ngZone = n, this.registry = o, fs() && (this._destroyRef = y(Ue, { optional: !0 }) ?? void 0), ep || (xI(r), r.addToWindow(o)), this._watchAngularEvents(), n.run(() => { this._taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone"); }); }
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
    static \u0275fac = function (o) { return new (o || e)(he(G), he(OI), he(kI)); };
    static \u0275prov = U({ token: e, factory: e.\u0275fac });
} return e; })(), OI = (() => { class e {
    _applications = new Map;
    registerApplication(n, o) { this._applications.set(n, o); }
    unregisterApplication(n) { this._applications.delete(n); }
    unregisterAllApplications() { this._applications.clear(); }
    getTestability(n) { return this._applications.get(n) || null; }
    getAllTestabilities() { return Array.from(this._applications.values()); }
    getAllRootElements() { return Array.from(this._applications.keys()); }
    findTestabilityInTree(n, o = !0) { return ep?.findTestabilityInTree(this, n, o) ?? null; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = U({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function xI(e) { ep = e; }
var ep;
function tp(e) { return !!e && typeof e.then == "function"; }
function PI(e) { return !!e && typeof e.subscribe == "function"; }
var np = new T("");
function LI(e) { return Ke([{ provide: np, multi: !0, useValue: e }]); }
var op = (() => { class e {
    resolve;
    reject;
    initialized = !1;
    done = !1;
    donePromise = new Promise((n, o) => { this.resolve = n, this.reject = o; });
    appInits = y(np, { optional: !0 }) ?? [];
    injector = y(le);
    constructor() { }
    runInitializers() { if (this.initialized)
        return; let n = []; for (let r of this.appInits) {
        let i = ds(this.injector, r);
        if (tp(i))
            n.push(i);
        else if (PI(i)) {
            let s = new Promise((a, c) => { i.subscribe({ complete: a, error: c }); });
            n.push(s);
        }
    } let o = () => { this.done = !0, this.resolve(); }; Promise.all(n).then(() => { o(); }).catch(r => { this.reject(r); }), n.length === 0 && o(), this.initialized = !0; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = U({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), ki = new T("");
function rp() { bh(() => { let e = ""; throw new D(600, e); }); }
function FI(e) { return e.isBoundToModule; }
var QR = 10;
function ip(e, t) { return Array.isArray(t) ? t.reduce(ip, e) : H(H({}, e), t); }
var We = (() => { class e {
    _runningTick = !1;
    _destroyed = !1;
    _destroyListeners = [];
    _views = [];
    internalErrorHandler = y(Tt);
    afterRenderManager = y(qa);
    zonelessEnabled = y(so);
    rootEffectScheduler = y(Ns);
    dirtyFlags = 0;
    tracingSnapshot = null;
    allTestViews = new Set;
    autoDetectTestViews = new Set;
    includeAllTestViews = !1;
    afterTick = new or;
    get allViews() { return [...(this.includeAllTestViews ? this.allTestViews : this.autoDetectTestViews).keys(), ...this._views]; }
    get destroyed() { return this._destroyed; }
    componentTypes = [];
    components = [];
    internalPendingTask = y(Ct);
    get isStable() { return this.internalPendingTask.hasPendingTasksObservable.pipe(Th(n => !n)); }
    constructor() { y(Un, { optional: !0 }); }
    whenStable() { let n; return new Promise(o => { n = this.isStable.subscribe({ next: r => { r && o(); } }); }).finally(() => { n.unsubscribe(); }); }
    _injector = y(Se);
    _rendererFactory = null;
    get injector() { return this._injector; }
    bootstrap(n, o) { return this.bootstrapImpl(n, o); }
    bootstrapImpl(n, o, r = le.NULL) { return this._injector.get(G).run(() => { V(O.BootstrapComponentStart); let s = n instanceof cc; if (!this._injector.get(op).done) {
        let h = "";
        throw new D(405, h);
    } let c; s ? c = n : c = this._injector.get(bi).resolveComponentFactory(n), this.componentTypes.push(c.componentType); let l = FI(c) ? void 0 : this._injector.get(So), u = o || c.selector, d = c.create(r, [], u, l), f = d.location.nativeElement, p = d.injector.get(RI, null); return p?.registerApplication(f), d.onDestroy(() => { this.detachView(d.hostView), Vr(this.components, d), p?.unregisterApplication(f); }), this._loadComponent(d), V(O.BootstrapComponentEnd, d), d; }); }
    tick() { this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick(); }
    _tick() { V(O.ChangeDetectionStart), this.tracingSnapshot !== null ? this.tracingSnapshot.run($a.CHANGE_DETECTION, this.tickImpl) : this.tickImpl(); }
    tickImpl = () => { if (this._runningTick)
        throw V(O.ChangeDetectionEnd), new D(101, !1); let n = A(null); try {
        this._runningTick = !0, this.synchronize();
    }
    finally {
        this._runningTick = !1, this.tracingSnapshot?.dispose(), this.tracingSnapshot = null, A(n), this.afterTick.next(), V(O.ChangeDetectionEnd);
    } };
    synchronize() { this._rendererFactory === null && !this._injector.destroyed && (this._rendererFactory = this._injector.get(oi, null, { optional: !0 })); let n = 0; for (; this.dirtyFlags !== 0 && n++ < QR;) {
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
            if (!o && !no(r))
                continue;
            let i = o && !this.zonelessEnabled ? 0 : 1;
            Wy(r, i), n = !0;
        }
        if (this.dirtyFlags &= -5, this.syncDirtyFlagsWithViews(), this.dirtyFlags & 23)
            return;
    } n || (this._rendererFactory?.begin?.(), this._rendererFactory?.end?.()), this.dirtyFlags & 8 && (this.dirtyFlags &= -9, this.afterRenderManager.execute()), this.syncDirtyFlagsWithViews(); }
    syncDirtyFlagsWithViews() { if (this.allViews.some(({ _lView: n }) => no(n))) {
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
    } this.components.push(n), this._injector.get(ki, []).forEach(r => r(n)); }
    ngOnDestroy() { if (!this._destroyed)
        try {
            this._destroyListeners.forEach(n => n()), this._views.slice().forEach(n => n.destroy());
        }
        finally {
            this._destroyed = !0, this._views = [], this._destroyListeners = [];
        } }
    onDestroy(n) { return this._destroyListeners.push(n), () => Vr(this._destroyListeners, n); }
    destroy() { if (this._destroyed)
        throw new D(406, !1); let n = this._injector; n.destroy && !n.destroyed && n.destroy(); }
    get viewCount() { return this._views.length; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = U({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function Vr(e, t) { let n = e.indexOf(t); n > -1 && e.splice(n, 1); }
function gc() { let e, t; return { promise: new Promise((o, r) => { e = o, t = r; }), resolve: e, reject: t }; }
function jI(e) { let t = g(), n = _(); if (Xo(t, n), !BI(0, t))
    return; let o = t[P], r = Me(t, n), i = e(() => Ne(0, t, n), o); Ai(0, r, i); }
function VI(e) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let t = g(), n = t[P], o = _(), r = t[m], i = pe(r, o); if (i.loadingState === re.NOT_STARTED) {
    let s = Me(t, o), c = e(() => Oi(i, t, o), n);
    Ai(1, s, c);
} }
function HI(e, t, n) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let o = t[P], r = Me(t, n), i = r[fc], s = e(() => xt(o, i), o); Ai(2, r, s); }
function Oi(e, t, n) { mc(e, t, n); }
function mc(e, t, n) { let o = t[P], r = t[m]; if (e.loadingState !== re.NOT_STARTED)
    return e.loadingPromise ?? Promise.resolve(); let i = Me(t, n), s = AR(r, e); e.loadingState = re.IN_PROGRESS, $s(1, i); let a = e.dependencyResolverFn, c = o.get(Rr).add(); return a ? (e.loadingPromise = Promise.allSettled(a()).then(l => { let u = !1, d = null, f = [], p = []; for (let h = 0; h < l.length; h++) {
    let v = l[h];
    if (v.status === "fulfilled") {
        let E = v.value, C = z(E) || Ae(E);
        if (C)
            f.push(C);
        else {
            let k = Ze(E);
            k && p.push(k);
        }
    }
    else {
        u = !0, d = v.reason instanceof Error ? v.reason : new Error(String(v.reason));
        break;
    }
} if (u) {
    if (e.loadingState = re.FAILED, e.errorTmplIndex === null) {
        let v = "", E = new D(-750, v);
        Mf(t, E);
    }
}
else {
    e.loadingState = re.COMPLETE;
    let h = s.tView;
    if (f.length > 0) {
        h.directiveRegistry = tm(h.directiveRegistry, f);
        let v = f.map(C => C.type), E = us(!1, ...v);
        e.providers = E;
    }
    p.length > 0 && (h.pipeRegistry = tm(h.pipeRegistry, p));
} }), e.loadingPromise.finally(() => { e.loadingPromise = null, c(); })) : (e.loadingPromise = Promise.resolve().then(() => { e.loadingPromise = null, e.loadingState = re.COMPLETE, c(); }), e.loadingPromise); }
function BI(e, t) { return !(e === 0 && typeof ngServerMode < "u" && ngServerMode || t[P].get(_I, null, { optional: !0 })?.behavior === Zf.Manual); }
function Ne(e, t, n) { let o = t[m], r = t[n.index]; if (!BI(e, t))
    return; let i = Me(t, n), s = pe(o, n); switch (II(i), s.loadingState) {
    case re.NOT_STARTED:
        Nt(Z.Loading, n, r), mc(s, t, n), s.loadingState === re.IN_PROGRESS && rm(s, n, r);
        break;
    case re.IN_PROGRESS:
        Nt(Z.Loading, n, r), rm(s, n, r);
        break;
    case re.COMPLETE:
        Nt(Z.Complete, n, r);
        break;
    case re.FAILED:
        Nt(Z.Error, n, r);
        break;
    default:
} }
function xt(e, t, n) { return Qe(this, null, function* () { let o = e.get(Rt); if (o.hydrating.has(t))
    return; let { parentBlockPromise: i, hydrationQueue: s } = p_(t, e); if (s.length === 0)
    return; i !== null && s.shift(), KR(o, s), i !== null && (yield i); let a = s[0]; o.has(a) ? yield sm(e, s, n) : o.awaitParentBlock(a, () => Qe(null, null, function* () { return yield sm(e, s, n); })); }); }
function sm(e, t, n) { return Qe(this, null, function* () { let o = e.get(Rt), r = o.hydrating, i = e.get(Ct), s = i.add(); for (let c = 0; c < t.length; c++) {
    let l = t[c], u = o.get(l);
    if (u != null) {
        if (yield XR(u), yield JR(e), ZR(u)) {
            rA(u), am(t.slice(c), o);
            break;
        }
        r.get(l).resolve();
    }
    else {
        YR(c, t, o), am(t.slice(c), o);
        break;
    }
} let a = t[t.length - 1]; yield r.get(a)?.promise, i.remove(s), n && n(t), iA(o.get(a), t, o, e.get(We)); }); }
function ZR(e) { return Me(e.lView, e.tNode)[Ot] === Z.Error; }
function YR(e, t, n) { let o = e - 1, r = o > -1 ? n.get(t[o]) : null; r && ac(r.lContainer); }
function am(e, t) { let n = t.hydrating; for (let o in e)
    n.get(o)?.reject(); t.cleanup(e); }
function KR(e, t) { for (let n of t)
    e.hydrating.set(n, gc()); }
function JR(e) { return new Promise(t => gf(t, { injector: e })); }
function XR(e) { return Qe(this, null, function* () { let { tNode: t, lView: n } = e, o = Me(n, t); return new Promise(r => { ek(o, r), Ne(2, n, t); }); }); }
function ek(e, t) { Array.isArray(e[Do]) || (e[Do] = []), e[Do].push(t); }
function ee(e, t, n) { return e === 0 ? cm(t, n) : e === 2 ? !cm(t, n) : !(typeof ngServerMode < "u" && ngServerMode); }
function tk(e) { return e != null && (e & 1) === 1; }
function cm(e, t) { let n = e[P], o = pe(e[m], t), r = Di(n), i = tk(o.flags); if (typeof ngServerMode < "u" && ngServerMode)
    return !r || !i; let a = Me(e, t)[fc] !== null; return !(i && a && r); }
function on(e, t) { let n = pe(e, t); return n.hydrateTriggers ??= new Map; }
function UI(e, t, n) { let o = [], r = [], i = [], s = []; for (let [a, c] of t) {
    let l = n.get(a);
    if (l !== void 0) {
        let u = c.data[_t], d = l;
        for (let f = 0; f < u; f++) {
            if (d = d.previousSibling, d.nodeType !== Node.ELEMENT_NODE)
                continue;
            let p = { el: d, blockName: a };
            c.hydrate.idle && o.push(p), c.hydrate.immediate && s.push(p), c.hydrate.timer !== null && (p.delay = c.hydrate.timer, r.push(p)), c.hydrate.viewport && (typeof c.hydrate.viewport != "boolean" && (p.intersectionObserverOptions = c.hydrate.viewport), i.push(p));
        }
    }
} nk(e, o), ik(e, s), ok(e, i), rk(e, r); }
function nk(e, t) { for (let n of t) {
    let o = e.get(Rt), i = pc(() => xt(e, n.blockName), e);
    o.addCleanupFn(n.blockName, i);
} }
function ok(e, t) { if (t.length > 0) {
    let n = e.get(Rt);
    for (let o of t) {
        let r = Yf(o.el, () => xt(e, o.blockName), e, o.intersectionObserverOptions);
        n.addCleanupFn(o.blockName, r);
    }
} }
function rk(e, t) { for (let n of t) {
    let o = e.get(Rt), r = () => xt(e, n.blockName), s = hc(n.delay)(r, e);
    o.addCleanupFn(n.blockName, s);
} }
function ik(e, t) { for (let n of t)
    xt(e, n.blockName); }
function $I(e, t, n, o, r, i, s, a, c, l) { let u = g(), d = R(), f = e + I, p = Ln(u, d, e, null, 0, 0), h = u[P], v = Di(h); if (d.firstCreatePass) {
    X("NgDefer");
    let mt = { primaryTmplIndex: t, loadingTmplIndex: o ?? null, placeholderTmplIndex: r ?? null, errorTmplIndex: i ?? null, placeholderBlockConfig: null, loadingBlockConfig: null, dependencyResolverFn: n ?? null, loadingState: re.NOT_STARTED, loadingPromise: null, providers: null, hydrateTriggers: null, debug: null, flags: l ?? 0 };
    c?.(d, mt, a, s), SR(d, f, mt);
} let E = u[f]; qE(E, p, u); let C = null, k = null; if (E[ke]?.length > 0) {
    let mt = E[ke][0].data;
    k = mt[Ra] ?? null, C = mt[yi];
} let ne = [null, ai.Initial, null, null, null, null, k, C, null, null]; _R(u, f, ne); let ze = null; k !== null && v && (ze = h.get(Rt), ze.add(k, { lView: u, tNode: p, lContainer: E })); let xe = () => { II(ne), k !== null && ze?.cleanup([k]); }; Ai(0, ne, () => vs(u, xe)), _r(u, xe); }
function qI(e) { let t = g(), n = Oe(); if (!ee(0, t, n))
    return; let o = Ie(); if (Y(t, o, e)) {
    let r = A(null);
    try {
        let i = !!e, a = Me(t, n)[Ot];
        i === !1 && a === ai.Initial ? Xo(t, n) : i === !0 && (a === ai.Initial || a === Z.Placeholder) && Ne(0, t, n);
    }
    finally {
        A(r);
    }
} }
function GI(e) { let t = g(), n = Oe(); if (!ee(1, t, n))
    return; let o = Ie(); if (Y(t, o, e)) {
    let r = A(null);
    try {
        let i = !!e, s = t[m], a = pe(s, n);
        i === !0 && a.loadingState === re.NOT_STARTED && Oi(a, t, n);
    }
    finally {
        A(r);
    }
} }
function WI(e) { let t = g(), n = Oe(); if (!ee(2, t, n))
    return; let o = Ie(), r = R(); if (on(r, n).set(6, null), Y(t, o, e))
    if (typeof ngServerMode < "u" && ngServerMode)
        Ne(2, t, n);
    else {
        let s = t[P], a = A(null);
        try {
            if (!!e === !0) {
                let u = Me(t, n)[fc];
                xt(s, u);
            }
        }
        finally {
            A(a);
        }
    } }
function zI() { let e = g(), t = _(); if (!ee(2, e, t))
    return; on(R(), t).set(7, null), typeof ngServerMode < "u" && ngServerMode && Ne(2, e, t); }
function QI() { let e = g(), t = _(); ee(0, e, t) && jI(pc); }
function ZI() { let e = g(), t = _(); ee(1, e, t) && VI(pc); }
function YI() { let e = g(), t = _(); if (!ee(2, e, t))
    return; on(R(), t).set(0, null), typeof ngServerMode < "u" && ngServerMode ? Ne(2, e, t) : HI(pc, e, t); }
function KI() { let e = g(), t = _(); if (!ee(0, e, t))
    return; pe(e[m], t).loadingTmplIndex === null && Xo(e, t), Ne(0, e, t); }
function JI() { let e = g(), t = _(); if (!ee(1, e, t))
    return; let n = e[m], o = pe(n, t); o.loadingState === re.NOT_STARTED && mc(o, e, t); }
function XI() { let e = g(), t = _(); if (!ee(2, e, t))
    return; if (on(R(), t).set(1, null), typeof ngServerMode < "u" && ngServerMode)
    Ne(2, e, t);
else {
    let o = e[P], i = Me(e, t)[fc];
    xt(o, i);
} }
function eD(e) { let t = g(), n = _(); ee(0, t, n) && jI(hc(e)); }
function tD(e) { let t = g(), n = _(); ee(1, t, n) && VI(hc(e)); }
function nD(e) { let t = g(), n = _(); if (!ee(2, t, n))
    return; on(R(), n).set(5, { type: 5, delay: e }), typeof ngServerMode < "u" && ngServerMode ? Ne(2, t, n) : HI(hc(e), t, n); }
function oD(e, t) { let n = g(), o = _(); ee(0, n, o) && (Xo(n, o), typeof ngServerMode < "u" && ngServerMode || Jo(n, o, e, t, Dv, () => Ne(0, n, o), 0)); }
function rD(e, t) { let n = g(), o = _(); if (!ee(1, n, o))
    return; let r = n[m], i = pe(r, o); i.loadingState === re.NOT_STARTED && Jo(n, o, e, t, Dv, () => Oi(i, n, o), 1); }
function iD() { let e = g(), t = _(); if (!ee(2, e, t))
    return; on(R(), t).set(4, null), typeof ngServerMode < "u" && ngServerMode && Ne(2, e, t); }
function sD(e, t) { let n = g(), o = _(); ee(0, n, o) && (Xo(n, o), typeof ngServerMode < "u" && ngServerMode || Jo(n, o, e, t, Iv, () => Ne(0, n, o), 0)); }
function aD(e, t) { let n = g(), o = _(); if (!ee(1, n, o))
    return; let r = n[m], i = pe(r, o); i.loadingState === re.NOT_STARTED && Jo(n, o, e, t, Iv, () => Oi(i, n, o), 1); }
function cD() { let e = g(), t = _(); if (!ee(2, e, t))
    return; on(R(), t).set(3, null), typeof ngServerMode < "u" && ngServerMode && Ne(2, e, t); }
function lD(e, t, n) { let o = g(), r = _(); ee(0, o, r) && (Xo(o, r), typeof ngServerMode < "u" && ngServerMode || Jo(o, r, e, t, Yf, () => Ne(0, o, r), 0, n)); }
function uD(e, t, n) { let o = g(), r = _(); if (!ee(1, o, r))
    return; let i = o[m], s = pe(i, r); s.loadingState === re.NOT_STARTED && Jo(o, r, e, t, Yf, () => Oi(s, o, r), 1, n); }
function dD(e) { let t = g(), n = _(); if (!ee(2, t, n))
    return; on(R(), n).set(2, e ? { type: 2, intersectionObserverOptions: e } : null), typeof ngServerMode < "u" && ngServerMode && Ne(2, t, n); }
function sp(e, t) { let n = g(), o = Ie(); if (Y(n, o, t)) {
    let r = R(), i = Oe();
    if (Xa(i, r, n, e, t))
        Te(i) && Hy(n, i.index);
    else {
        let a = ae(i, n);
        Ya(n[w], a, null, i.value, e, t, null);
    }
} return sp; }
function ap(e, t, n, o) { let r = g(), i = Ie(); if (Y(r, i, t)) {
    let s = R(), a = Oe();
    ZS(a, r, e, t, n, o);
} return ap; }
function Hr(e) { if (X("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !Bn)
    return Hr; let t = g(); if (Ba(t))
    return Hr; let n = _(), o = t[P].get(G); return Ua(ia(t), n, () => sk(t, n, e, o)), za(t[P]), mf(t[P], ia(t)), Hr; }
function sk(e, t, n, o) { let r = ae(t, e), i = e[w], s = Dy(n), a = [], c = !1, l = d => { if (Kr(d) !== r)
    return; let f = d instanceof AnimationEvent ? "animationend" : "transitionend"; o.runOutsideAngular(() => { i.listen(r, f, u); }); }, u = d => { Kr(d) === r && (ff(d, r) && (c = !0), ak(d, r, i)); }; if (s && s.length > 0) {
    o.runOutsideAngular(() => { a.push(i.listen(r, "animationstart", l)), a.push(i.listen(r, "transitionstart", l)); }), CS(r, s, a);
    for (let d of s)
        i.addClass(r, d);
    o.runOutsideAngular(() => { requestAnimationFrame(() => { if (!c && (My(r, Sn, Bn), !Sn.has(r))) {
        for (let d of s)
            i.removeClass(r, d);
        uf(r);
    } }); });
} }
function ak(e, t, n) { let o = Mo.get(t); if (!(Kr(e) !== t || !o) && ff(e, t)) {
    e.stopPropagation();
    for (let r of o.classList)
        n.removeClass(t, r);
    uf(t);
} }
function Br(e) { if (X("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !Bn)
    return Br; let t = g(); if (Ba(t))
    return Br; let n = _(); return Ua(ia(t), n, () => ck(t, n, e)), za(t[P]), mf(t[P], ia(t)), Br; }
function ck(e, t, n) { let o = ae(t, e); n.call(e[$], { target: o, animationComplete: TS }); }
function Ur(e) { if (X("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !Bn)
    return Ur; let t = g(); if (Ba(t))
    return Ur; let o = _(), r = t[P].get(G); return Ua(Rn(t), o, () => lk(t, o, e, r)), za(t[P]), Ur; }
function lk(e, t, n, o) { let { promise: r, resolve: i } = gc(), s = ae(t, e), a = e[w]; kn.add(e[He]), (Rn(e).get(t.index).resolvers ??= []).push(i); let c = Dy(n); return c && c.length > 0 ? uk(s, t, e, c, a, o) : i(), { promise: r, resolve: i }; }
function uk(e, t, n, o, r, i) { NS(e, r); let s = [], a = Rn(n).get(t.index)?.resolvers, c, l = !1, u = d => { if (!(Kr(d) !== e && d.type !== "animation-fallback") && (d.type === "animation-fallback" || ff(d, e))) {
    if (l = !0, c && clearTimeout(c), d.type !== "animation-fallback" && d.stopPropagation(), Sn.delete(e), Yu(t, e), Array.isArray(t.projection))
        for (let p of o)
            r.removeClass(e, p);
    Ku(a, s), Ju(n, t);
} }; i.runOutsideAngular(() => { s.push(r.listen(e, "animationend", u)), s.push(r.listen(e, "transitionend", u)); }), df(t, e); for (let d of o)
    r.addClass(e, d); i.runOutsideAngular(() => { requestAnimationFrame(() => { if (l)
    return; My(e, Sn, Bn); let d = Sn.get(e); d ? (c = setTimeout(() => { u(new CustomEvent("animation-fallback")); }, d.duration + 50), s.push(() => clearTimeout(c))) : (Yu(t, e), Ku(a, s), Ju(n, t)); }); }); }
function ga(e) { if (X("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !Bn)
    return ga; let t = g(), n = _(); kn.add(t[He]); let o = t[P].get(G), r = t[P].get(Iy); return Ua(Rn(t), n, () => dk(t, n, e, o, r)), za(t[P]), ga; }
function dk(e, t, n, o, r) { let { promise: i, resolve: s } = gc(), a = ae(t, e), c = [], l = e[w], u = Ba(e); (Rn(e).get(t.index).resolvers ??= []).push(s); let d = Rn(e).get(t.index)?.resolvers; if (u)
    ks(e, t, a, d, c);
else {
    let f = setTimeout(() => ks(e, t, a, d, c), r), p = { target: a, animationComplete: () => { ks(e, t, a, d, c), clearTimeout(f); } };
    df(t, a), o.runOutsideAngular(() => { c.push(l.listen(a, "animationend", () => { ks(e, t, a, d, c), clearTimeout(f); }, { once: !0 })); }), n.call(e[$], p);
} return { promise: i, resolve: s }; }
function fD() { return g()[te][$]; }
var vd = class {
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
function yu(e, t, n, o, r) { return e === n && Object.is(t, o) ? 1 : Object.is(r(e, t), r(n, o)) ? -1 : 0; }
function fk(e, t, n, o) { let r, i, s = 0, a = e.length - 1, c = void 0; if (Array.isArray(t)) {
    lo(o);
    let l = t.length - 1;
    for (lo(null); s <= a && s <= l;) {
        let u = e.at(s), d = t[s], f = yu(s, u, s, d, n);
        if (f !== 0) {
            f < 0 && e.updateValue(s, d), s++;
            continue;
        }
        let p = e.at(a), h = t[l], v = yu(a, p, l, h, n);
        if (v !== 0) {
            v < 0 && e.updateValue(a, h), a--, l--;
            continue;
        }
        let E = n(s, u), C = n(a, p), k = n(s, d);
        if (Object.is(k, C)) {
            let ne = n(l, h);
            Object.is(ne, E) ? (e.swap(s, a), e.updateValue(a, h), l--, a--) : e.move(a, s), e.updateValue(s, d), s++;
            continue;
        }
        if (r ??= new ma, i ??= um(e, s, a, n), yd(e, r, s, k))
            e.updateValue(s, d), s++, a++;
        else if (i.has(k))
            r.set(E, e.detach(s)), a--;
        else {
            let ne = e.create(s, t[s]);
            e.attach(s, ne), s++, a++;
        }
    }
    for (; s <= l;)
        lm(e, r, n, s, t[s]), s++;
}
else if (t != null) {
    lo(o);
    let l = t[Symbol.iterator]();
    lo(null);
    let u = l.next();
    for (; !u.done && s <= a;) {
        let d = e.at(s), f = u.value, p = yu(s, d, s, f, n);
        if (p !== 0)
            p < 0 && e.updateValue(s, f), s++, u = l.next();
        else {
            r ??= new ma, i ??= um(e, s, a, n);
            let h = n(s, f);
            if (yd(e, r, s, h))
                e.updateValue(s, f), s++, a++, u = l.next();
            else if (!i.has(h))
                e.attach(s, e.create(s, f)), s++, a++, u = l.next();
            else {
                let v = n(s, d);
                r.set(v, e.detach(s)), a--;
            }
        }
    }
    for (; !u.done;)
        lm(e, r, n, e.length, u.value), u = l.next();
} for (; s <= a;)
    e.destroy(e.detach(a--)); r?.forEach(l => { e.destroy(l); }); }
function yd(e, t, n, o) { return t !== void 0 && t.has(o) ? (e.attach(n, t.get(o)), t.delete(o), !0) : !1; }
function lm(e, t, n, o, r) { if (yd(e, t, o, n(o, r)))
    e.updateValue(o, r);
else {
    let i = e.create(o, r);
    e.attach(o, i);
} }
function um(e, t, n, o) { let r = new Set; for (let i = t; i <= n; i++)
    r.add(o(i, e.at(i))); return r; }
var ma = class {
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
function pD(e, t, n, o, r, i, s, a) { X("NgControlFlow"); let c = g(), l = R(), u = me(l.consts, i); return Ln(c, l, e, t, n, o, r, u, 256, s, a), vc; }
function vc(e, t, n, o, r, i, s, a) { X("NgControlFlow"); let c = g(), l = R(), u = me(l.consts, i); return Ln(c, l, e, t, n, o, r, u, 512, s, a), vc; }
function hD(e, t) { X("NgControlFlow"); let n = g(), o = Ie(), r = n[o] !== B ? n[o] : -1, i = r !== -1 ? va(n, I + r) : void 0, s = 0; if (Y(n, o, e)) {
    let a = A(null);
    try {
        if (i !== void 0 && Nf(i, s), e !== -1) {
            let c = I + e, l = va(n, c), u = Cd(n[m], c), d = TE(l, u, n), f = zo(n, u, t, { dehydratedView: d });
            Qo(l, f, s, On(u, d));
        }
    }
    finally {
        A(a);
    }
}
else if (i !== void 0) {
    let a = Jy(i, s);
    a !== void 0 && (a[$] = t);
} }
var Ed = class {
    lContainer;
    $implicit;
    $index;
    constructor(t, n, o) { this.lContainer = t, this.$implicit = n, this.$index = o; }
    get $count() { return this.lContainer.length - W; }
};
function gD(e) { return e; }
function mD(e, t) { return t; }
var Id = class {
    hasEmptyBlock;
    trackByFn;
    liveCollection;
    constructor(t, n, o) { this.hasEmptyBlock = t, this.trackByFn = n, this.liveCollection = o; }
};
function vD(e, t, n, o, r, i, s, a, c, l, u, d, f) { X("NgControlFlow"); let p = g(), h = R(), v = c !== void 0, E = g(), C = a ? s.bind(E[te][$]) : s, k = new Id(v, C); E[I + e] = k, Ln(p, h, e + 1, t, n, o, r, me(h.consts, i), 256), v && Ln(p, h, e + 2, c, l, u, d, me(h.consts, f), 512); }
var Dd = class extends vd {
    lContainer;
    hostLView;
    templateTNode;
    operationsCounter = void 0;
    needsIndexUpdate = !1;
    constructor(t, n, o) { super(), this.lContainer = t, this.hostLView = n, this.templateTNode = o; }
    get length() { return this.lContainer.length - W; }
    at(t) { return this.getLView(t)[$].$implicit; }
    attach(t, n) { let o = n[de]; this.needsIndexUpdate ||= t !== this.length, Qo(this.lContainer, n, t, On(this.templateTNode, o)), pk(this.lContainer, t); }
    detach(t) { return this.needsIndexUpdate ||= t !== this.length - 1, hk(this.lContainer, t), gk(this.lContainer, t); }
    create(t, n) { let o = ni(this.lContainer, this.templateTNode.tView.ssrId); return zo(this.hostLView, this.templateTNode, new Ed(this.lContainer, n, t), { dehydratedView: o }); }
    destroy(t) { wi(t[m], t); }
    updateValue(t, n) { this.getLView(t)[$].$implicit = n; }
    reset() { this.needsIndexUpdate = !1; }
    updateIndexes() { if (this.needsIndexUpdate)
        for (let t = 0; t < this.length; t++)
            this.getLView(t)[$].$index = t; }
    getLView(t) { return mk(this.lContainer, t); }
};
function yD(e) { let t = A(null), n = fe(); try {
    let o = g(), r = o[m], i = o[n], s = n + 1, a = va(o, s);
    if (i.liveCollection === void 0) {
        let l = Cd(r, s);
        i.liveCollection = new Dd(a, o, l);
    }
    else
        i.liveCollection.reset();
    let c = i.liveCollection;
    if (fk(c, e, i.trackByFn, t), c.updateIndexes(), i.hasEmptyBlock) {
        let l = Ie(), u = c.length === 0;
        if (Y(o, l, u)) {
            let d = n + 2, f = va(o, d);
            if (u) {
                let p = Cd(r, d), h = TE(f, p, o), v = zo(o, p, void 0, { dehydratedView: h });
                Qo(f, v, 0, On(p, h));
            }
            else
                r.firstUpdatePass && sc(f), Nf(f, 0);
        }
    }
}
finally {
    A(t);
} }
function va(e, t) { return e[t]; }
function pk(e, t) { if (e.length <= W)
    return; let n = W + t, o = e[n], r = o ? o[at] : void 0; if (o && r && r.detachedLeaveAnimationFns && r.detachedLeaveAnimationFns.length > 0) {
    let i = o[P];
    kS(i, r), kn.delete(o[He]), r.detachedLeaveAnimationFns = void 0;
} }
function hk(e, t) { if (e.length <= W)
    return; let n = W + t, o = e[n], r = o ? o[at] : void 0; r && r.leave && r.leave.size > 0 && (r.detachedLeaveAnimationFns = []); }
function gk(e, t) { return Xr(e, t); }
function mk(e, t) { return Jy(e, t); }
function Cd(e, t) { return Gt(e, t); }
function cp(e, t, n) { let o = g(), r = Ie(); if (Y(o, r, t)) {
    let i = R(), s = Oe();
    Df(s, o, e, t, o[w], n);
} return cp; }
function Td(e, t, n, o, r) { Xa(t, e, n, r ? "class" : "style", o); }
function ci(e, t, n, o) { let r = g(), i = r[m], s = e + I, a = i.firstCreatePass ? Rf(s, r, 2, t, Tf, ys(), n, o) : i.data[s]; if (Te(a)) {
    let c = r[Ve].tracingService;
    if (c && c.componentCreate) {
        let l = i.data[a.directiveStart + a.componentOffset];
        return c.componentCreate(xf(l), () => (dm(e, t, r, a, o), ci));
    }
} return dm(e, t, r, a, o), ci; }
function dm(e, t, n, o, r) { if (Ka(o, n, e, t, dp), to(o)) {
    let i = n[m];
    Za(i, n, o), Yd(i, o, n);
} r != null && Wo(n, o); }
function yc() { let e = R(), t = _(), n = Ja(t); return e.firstCreatePass && kf(e, n), Rl(n) && xl(), Al(), n.classesWithoutHost != null && tw(n) && Td(e, n, g(), n.classesWithoutHost, !0), n.stylesWithoutHost != null && nw(n) && Td(e, n, g(), n.stylesWithoutHost, !1), yc; }
function lp(e, t, n, o) { return ci(e, t, n, o), yc(), lp; }
function Ec(e, t, n, o) { let r = g(), i = r[m], s = e + I, a = i.firstCreatePass ? AE(s, i, 2, t, n, o) : i.data[s]; return Ka(a, r, e, t, dp), o != null && Wo(r, a), Ec; }
function Ic() { let e = _(), t = Ja(e); return Rl(t) && xl(), Al(), Ic; }
function up(e, t, n, o) { return Ec(e, t, n, o), Ic(), up; }
var dp = (e, t, n, o, r) => (Xe(!0), ja(t[w], o, Zl()));
function vk(e, t, n, o, r) { let i = !Fa(t, n); if (Xe(i), i)
    return ja(t[w], o, Zl()); let s = t[de], a = Si(s, e, t, n); return Lv(s, r) && Pa(s, r, a.nextSibling), s && (Od(n) || rv(a)) && Te(n) && (ng(n), oy(a)), a; }
function ED() { dp = vk; }
function Dc(e, t, n) { let o = g(), r = o[m], i = e + I, s = r.firstCreatePass ? Rf(i, o, 8, "ng-container", Tf, ys(), t, n) : r.data[i]; if (Ka(s, o, e, "ng-container", gp), to(s)) {
    let a = o[m];
    Za(a, o, s), Yd(a, s, o);
} return n != null && Wo(o, s), Dc; }
function xi() { let e = R(), t = _(), n = Ja(t); return e.firstCreatePass && kf(e, n), xi; }
function fp(e, t, n) { return Dc(e, t, n), xi(), fp; }
function Cc(e, t, n) { let o = g(), r = o[m], i = e + I, s = r.firstCreatePass ? AE(i, r, 8, "ng-container", t, n) : r.data[i]; return Ka(s, o, e, "ng-container", gp), n != null && Wo(o, s), Cc; }
function pp() { let e = _(), t = Ja(e); return xi; }
function hp(e, t, n) { return Cc(e, t, n), pp(), hp; }
var gp = (e, t, n, o, r) => (Xe(!0), ef(t[w], ""));
function yk(e, t, n, o, r) { let i, s = !Fa(t, n); if (Xe(s), s)
    return ef(t[w], ""); let a = t[de], c = Si(a, e, t, n), l = Pv(a, r); return Pa(a, r, c), i = rc(l, c), i; }
function ID() { gp = yk; }
function DD() { return g(); }
function mp(e, t, n) { let o = g(), r = Ie(); if (Y(o, r, t)) {
    let i = R(), s = Oe();
    Cf(s, o, e, t, o[w], n);
} return mp; }
function vp(e, t, n) { let o = g(), r = Ie(); if (Y(o, r, t)) {
    let i = R(), s = Oe(), a = Is(i.data), c = By(a, s, o);
    Cf(s, o, e, t, c, n);
} return vp; }
var Or = void 0;
function Ek(e) { let t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length; return t === 1 && n === 0 ? 1 : 5; }
var Ik = ["en", [["a", "p"], ["AM", "PM"]], [["AM", "PM"]], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], Or, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], Or, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm\u202Fa", "h:mm:ss\u202Fa", "h:mm:ss\u202Fa z", "h:mm:ss\u202Fa zzzz"], ["{1}, {0}", Or, Or, Or], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", Ek], Co = {};
function Dk(e, t, n) { typeof t != "string" && (n = t, t = e[Ro.LocaleId]), t = t.toLowerCase().replace(/_/g, "-"), Co[t] = e, n && (Co[t][Ro.ExtraData] = n); }
function yp(e) { let t = Mk(e), n = fm(t); if (n)
    return n; let o = t.split("-")[0]; if (n = fm(o), n)
    return n; if (o === "en")
    return Ik; throw new D(701, !1); }
function Ck(e) { return yp(e)[Ro.CurrencyCode] || null; }
function CD(e) { return yp(e)[Ro.PluralCase]; }
function fm(e) { return e in Co || (Co[e] = be.ng && be.ng.common && be.ng.common.locales && be.ng.common.locales[e]), Co[e]; }
function Tk() { Co = {}; }
var Ro = (function (e) { return e[e.LocaleId = 0] = "LocaleId", e[e.DayPeriodsFormat = 1] = "DayPeriodsFormat", e[e.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", e[e.DaysFormat = 3] = "DaysFormat", e[e.DaysStandalone = 4] = "DaysStandalone", e[e.MonthsFormat = 5] = "MonthsFormat", e[e.MonthsStandalone = 6] = "MonthsStandalone", e[e.Eras = 7] = "Eras", e[e.FirstDayOfWeek = 8] = "FirstDayOfWeek", e[e.WeekendRange = 9] = "WeekendRange", e[e.DateFormat = 10] = "DateFormat", e[e.TimeFormat = 11] = "TimeFormat", e[e.DateTimeFormat = 12] = "DateTimeFormat", e[e.NumberSymbols = 13] = "NumberSymbols", e[e.NumberFormats = 14] = "NumberFormats", e[e.CurrencyCode = 15] = "CurrencyCode", e[e.CurrencySymbol = 16] = "CurrencySymbol", e[e.CurrencyName = 17] = "CurrencyName", e[e.Currencies = 18] = "Currencies", e[e.Directionality = 19] = "Directionality", e[e.PluralCase = 20] = "PluralCase", e[e.ExtraData = 21] = "ExtraData", e; })(Ro || {});
function Mk(e) { return e.toLowerCase().replace(/_/g, "-"); }
var Nk = ["zero", "one", "two", "few", "many"];
function wk(e, t) { let n = CD(t)(parseInt(e, 10)), o = Nk[n]; return o !== void 0 ? o : "other"; }
var Pi = "en-US", _k = "USD", TD = { marker: "element" }, MD = { marker: "ICU" }, Mt = (function (e) { return e[e.SHIFT = 2] = "SHIFT", e[e.APPEND_EAGERLY = 1] = "APPEND_EAGERLY", e[e.COMMENT = 2] = "COMMENT", e; })(Mt || {}), ND = Pi;
function wD(e) { typeof e == "string" && (ND = e.toLowerCase().replace(/_/g, "-")); }
function Sk() { return ND; }
var li = 0, $r = 0;
function bk(e) { e && (li = li | 1 << Math.min($r, 31)), $r++; }
function Ak(e, t, n) { if ($r > 0) {
    let o = e.data[n], r = Array.isArray(o) ? o : o.update, i = dt() - $r - 1;
    AD(e, t, r, i, li);
} li = 0, $r = 0; }
function _D(e, t, n) { let o = e[w]; switch (n) {
    case Node.COMMENT_NODE: return ef(o, t);
    case Node.TEXT_NODE: return Xd(o, t);
    case Node.ELEMENT_NODE: return ja(o, t, null);
} }
var qr = (e, t, n, o) => (Xe(!0), _D(e, n, o));
function Rk(e, t, n, o) { let r = e[de], i = t - I, s = !ic() || !r || Sr() || La(r, i); return Xe(s), s ? _D(e, n, o) : aE(r, i); }
function SD() { qr = Rk; }
function kk(e, t, n, o) { let r = e[w]; for (let i = 0; i < t.length; i++) {
    let s = t[i++], a = t[i], c = (s & Mt.COMMENT) === Mt.COMMENT, l = (s & Mt.APPEND_EAGERLY) === Mt.APPEND_EAGERLY, u = s >>> Mt.SHIFT, d = e[u], f = !1;
    d === null && (d = e[u] = qr(e, u, a, c ? Node.COMMENT_NODE : Node.TEXT_NODE), f = Ar()), l && n !== null && f && An(r, n, d, o, !1);
} }
function bD(e, t, n, o) { let r = n[w], i = null, s; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "string") {
        let l = t[++a];
        n[l] === null && (n[l] = qr(n, l, c, Node.TEXT_NODE));
    }
    else if (typeof c == "number")
        switch (c & 1) {
            case 0:
                let l = Pb(c);
                i === null && (i = l, s = r.parentNode(o));
                let u, d;
                if (l === i ? (u = o, d = s) : (u = null, d = L(n[l])), d !== null) {
                    let v = Lb(c), E = n[v];
                    An(r, d, E, u, !1);
                    let C = Fr(e, v);
                    if (C !== null && typeof C == "object") {
                        let k = oc(C, n);
                        k !== null && bD(e, C.create[k], n, n[C.anchorIdx]);
                    }
                }
                break;
            case 1:
                let f = c >>> 1, p = t[++a], h = t[++a];
                Ya(r, Dn(f, n), null, null, p, h, null);
                break;
            default:
        }
    else
        switch (c) {
            case MD:
                let l = t[++a], u = t[++a];
                if (n[u] === null) {
                    let p = n[u] = qr(n, u, l, Node.COMMENT_NODE);
                    $e(p, n);
                }
                break;
            case TD:
                let d = t[++a], f = t[++a];
                if (n[f] === null) {
                    let p = n[f] = qr(n, f, d, Node.ELEMENT_NODE);
                    $e(p, n);
                }
                break;
            default:
        }
} }
function AD(e, t, n, o, r) { for (let i = 0; i < n.length; i++) {
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
                            typeof h == "string" ? Ya(t[w], t[d], null, h, f, c, p) : Df(h, t, f, c, t[w], p);
                            break;
                        case 0:
                            let v = t[d];
                            v !== null && ty(t[w], v, c);
                            break;
                        case 2:
                            Ok(e, Fr(e, d), t, c);
                            break;
                        case 3:
                            pm(e, Fr(e, d), o, t);
                            break;
                    }
                }
        }
    }
    else {
        let c = n[i + 1];
        if (c > 0 && (c & 3) === 3) {
            let l = c >>> 2, u = Fr(e, l);
            t[u.currentCaseLViewIndex] < 0 && pm(e, u, o, t);
        }
    }
    i += a;
} }
function pm(e, t, n, o) { let r = o[t.currentCaseLViewIndex]; if (r !== null) {
    let i = li;
    r < 0 && (r = o[t.currentCaseLViewIndex] = ~r, i = -1), AD(e, o, t.update[r], n, i);
} }
function Ok(e, t, n, o) { let r = xk(t, o); if (oc(t, n) !== r && (RD(e, t, n), n[t.currentCaseLViewIndex] = r === null ? null : ~r, r !== null)) {
    let s = n[t.anchorIdx];
    s && bD(e, t.create[r], n, s), eA(n, t.anchorIdx, r);
} }
function RD(e, t, n) { let o = oc(t, n); if (o !== null) {
    let r = t.remove[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i];
        if (s > 0) {
            let a = Dn(s, n);
            a !== null && Ti(n[w], a);
        }
        else
            RD(e, Fr(e, ~s), n);
    }
} }
function xk(e, t) { let n = e.cases.indexOf(t); if (n === -1)
    switch (e.type) {
        case 1: {
            let o = wk(t, Sk());
            n = e.cases.indexOf(o), n === -1 && o !== "other" && (n = e.cases.indexOf("other"));
            break;
        }
        case 0: {
            n = e.cases.indexOf("other");
            break;
        }
    } return n === -1 ? null : n; }
var ya = /�(\d+):?\d*�/gi, Pk = /({\s*�\d+:?\d*�\s*,\s*\S{6}\s*,[\s\S]*})/gi, Lk = /�(\d+)�/, kD = /^\s*(�\d+:?\d*�)\s*,\s*(select|plural)\s*,/, Gr = "\uFFFD", Fk = /�\/?\*(\d+:\d+)�/gi, jk = /�(\/?[#*]\d+):?\d*�/gi, Vk = /\uE500/g;
function Hk(e) { return e.replace(Vk, " "); }
function Bk(e, t, n, o, r, i) { let s = oo(), a = [], c = [], l = [[]], u = [[]]; r = Gk(r, i); let d = Hk(r).split(jk); for (let f = 0; f < d.length; f++) {
    let p = d[f];
    if ((f & 1) === 0) {
        let h = Md(p);
        for (let v = 0; v < h.length; v++) {
            let E = h[v];
            if ((v & 1) === 0) {
                let C = E;
                C !== "" && Uk(u[0], e, s, l[0], a, c, n, C);
            }
            else {
                let C = E;
                if (typeof C != "object")
                    throw new Error(`Unable to parse ICU expression in "${r}" message.`);
                let ne = OD(e, s, l[0], n, a, "", !0).index;
                PD(u[0], e, n, c, t, C, ne);
            }
        }
    }
    else {
        let h = p.charCodeAt(0) === 47, v = p.charCodeAt(h ? 1 : 0), E = I + Number.parseInt(p.substring(h ? 2 : 1));
        if (h)
            l.shift(), u.shift(), ut(oo(), !1);
        else {
            let C = xb(e, l[0], E);
            l.unshift([]), ut(C, !0);
            let k = { kind: 2, index: E, children: [], type: v === 35 ? 0 : 1 };
            u[0].push(k), u.unshift(k.children);
        }
    }
} e.data[o] = { create: a, update: c, ast: u[0], parentTNodeIndex: t }; }
function OD(e, t, n, o, r, i, s) { let a = Ni(e, o, 1, null), c = a << Mt.SHIFT, l = oo(); t === l && (l = null), l === null && (c |= Mt.APPEND_EAGERLY), s && (c |= Mt.COMMENT, ES(jb)), r.push(c, i === null ? "" : i); let u = wf(e, a, s ? 32 : 1, i === null ? "" : i, null); oE(n, u); let d = u.index; return ut(u, !1), l !== null && t !== l && Ob(l, d), u; }
function Uk(e, t, n, o, r, i, s, a) { let c = a.match(ya), u = OD(t, n, o, s, r, c ? null : a, !1).index; c && Ea(i, a, u, null, 0, null), e.push({ kind: 0, index: u }); }
function $k(e, t, n) { let r = _().index, i = []; if (e.firstCreatePass && e.data[t] === null) {
    for (let s = 0; s < n.length; s += 2) {
        let a = n[s], c = n[s + 1];
        if (c !== "") {
            if (Pk.test(c))
                throw new Error(`ICU expressions are not supported in attributes. Message: "${c}".`);
            Ea(i, c, r, a, qk(i), Wu[a.toLowerCase()] ? Ci : null);
        }
    }
    e.data[t] = i;
} }
function Ea(e, t, n, o, r, i) { let s = e.length, a = s + 1; e.push(null, null); let c = s + 2, l = t.split(ya), u = 0; for (let d = 0; d < l.length; d++) {
    let f = l[d];
    if (d & 1) {
        let p = r + parseInt(f, 10);
        e.push(-1 - p), u = u | xD(p);
    }
    else
        f !== "" && e.push(f);
} return e.push(n << 2 | (o ? 1 : 0)), o && e.push(o, i), e[s] = u, e[a] = e.length - c, u; }
function qk(e) { let t = 0; for (let n = 0; n < e.length; n++) {
    let o = e[n];
    typeof o == "number" && o < 0 && t++;
} return t; }
function xD(e) { return 1 << Math.min(e, 31); }
function hm(e) { let t, n = "", o = 0, r = !1, i; for (; (t = Fk.exec(e)) !== null;)
    r ? t[0] === `${Gr}/*${i}${Gr}` && (o = t.index, r = !1) : (n += e.substring(o, t.index + t[0].length), i = t[1], r = !0); return n += e.slice(o), n; }
function Gk(e, t) { if (iE(t))
    return hm(e); {
    let n = e.indexOf(`:${t}${Gr}`) + 2 + t.toString().length, o = e.search(new RegExp(`${Gr}\\/\\*\\d+:${t}${Gr}`));
    return hm(e.substring(n, o));
} }
function PD(e, t, n, o, r, i, s) { let a = 0, c = { type: i.type, currentCaseLViewIndex: Ni(t, n, 1, null), anchorIdx: s, cases: [], create: [], remove: [], update: [] }; Zk(o, i, s), kb(t, s, c); let l = i.values, u = []; for (let d = 0; d < l.length; d++) {
    let f = l[d], p = [];
    for (let v = 0; v < f.length; v++) {
        let E = f[v];
        if (typeof E != "string") {
            let C = p.push(E) - 1;
            f[v] = `<!--\uFFFD${C}\uFFFD-->`;
        }
    }
    let h = [];
    u.push(h), a = zk(h, t, c, n, o, r, i.cases[d], f.join(""), p) | a;
} a && Yk(o, a, s), e.push({ kind: 3, index: s, cases: u, currentCaseLViewIndex: c.currentCaseLViewIndex }); }
function Wk(e) { let t = [], n = [], o = 1, r = 0; e = e.replace(kD, function (s, a, c) { return c === "select" ? o = 0 : o = 1, r = parseInt(a.slice(1), 10), ""; }); let i = Md(e); for (let s = 0; s < i.length;) {
    let a = i[s++].trim();
    o === 1 && (a = a.replace(/\s*(?:=)?(\w+)\s*/, "$1")), a.length && t.push(a);
    let c = Md(i[s++]);
    t.length > n.length && n.push(c);
} return { type: o, mainBinding: r, cases: t, values: n }; }
function Md(e) { if (!e)
    return []; let t = 0, n = [], o = [], r = /[{}]/g; r.lastIndex = 0; let i; for (; i = r.exec(e);) {
    let a = i.index;
    if (i[0] == "}") {
        if (n.pop(), n.length == 0) {
            let c = e.substring(t, a);
            kD.test(c) ? o.push(Wk(c)) : o.push(c), t = a + 1;
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
function zk(e, t, n, o, r, i, s, a, c) { let l = [], u = [], d = []; n.cases.push(s), n.create.push(l), n.remove.push(u), n.update.push(d); let p = Zv(_a()).getInertBodyElement(a), h = Qu(p) || p; return h ? LD(e, t, n, o, r, l, u, d, h, i, c, 0) : 0; }
function LD(e, t, n, o, r, i, s, a, c, l, u, d) { let f = 0, p = c.firstChild; for (; p;) {
    let h = Ni(t, o, 1, null);
    switch (p.nodeType) {
        case Node.ELEMENT_NODE:
            let v = p, E = v.tagName.toLowerCase();
            if (qu.hasOwnProperty(E)) {
                Eu(i, TD, E, l, h), t.data[h] = E;
                let ze = v.attributes;
                for (let mt = 0; mt < ze.length; mt++) {
                    let sn = ze.item(mt), Ui = sn.name.toLowerCase();
                    !!sn.value.match(ya) ? Gu.hasOwnProperty(Ui) && Ea(a, sn.value, h, sn.name, 0, Wu[Ui] ? Ci : null) : Gu[Ui] && (Wu[Ui] ? mm(i, h, sn.name, "unsafe:blocked") : mm(i, h, sn.name, sn.value));
                }
                let xe = { kind: 1, index: h, children: [] };
                e.push(xe), f = LD(xe.children, t, n, o, r, i, s, a, p, h, u, d + 1) | f, gm(s, h, d);
            }
            break;
        case Node.TEXT_NODE:
            let C = p.textContent || "", k = C.match(ya);
            Eu(i, null, k ? "" : C, l, h), gm(s, h, d), k && (f = Ea(a, C, h, null, 0, null) | f), e.push({ kind: 0, index: h });
            break;
        case Node.COMMENT_NODE:
            let ne = Lk.exec(p.textContent || "");
            if (ne) {
                let ze = parseInt(ne[1], 10), xe = u[ze];
                Eu(i, MD, "", l, h), PD(e, t, o, r, l, xe, h), Qk(s, h, d);
            }
            break;
    }
    p = p.nextSibling;
} return f; }
function gm(e, t, n) { n === 0 && e.push(t); }
function Qk(e, t, n) { n === 0 && (e.push(~t), e.push(t)); }
function Zk(e, t, n) { e.push(xD(t.mainBinding), 2, -1 - t.mainBinding, n << 2 | 2); }
function Yk(e, t, n) { e.push(t, 1, n << 2 | 3); }
function Eu(e, t, n, o, r) { t !== null && e.push(t), e.push(n, r, Fb(0, o, r)); }
function mm(e, t, n, o) { e.push(t << 1 | 1, n, o); }
var vm = 0, Kk = /\[(�.+?�?)\]/, Jk = /\[(�.+?�?)\]|(�\/?\*\d+:\d+�)/g, Xk = /({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g, eO = /{([A-Z0-9_]+)}/g, tO = /�I18N_EXP_(ICU(_\d+)?)�/g, nO = /\/\*/, oO = /\d+\:(\d+)/;
function rO(e, t = {}) { let n = e; if (Kk.test(e)) {
    let o = {}, r = [vm];
    n = n.replace(Jk, (i, s, a) => { let c = s || a, l = o[c] || []; if (l.length || (c.split("|").forEach(v => { let E = v.match(oO), C = E ? parseInt(E[1], 10) : vm, k = nO.test(v); l.push([C, k, v]); }), o[c] = l), !l.length)
        throw new Error(`i18n postprocess: unmatched placeholder - ${c}`); let u = r[r.length - 1], d = 0; for (let v = 0; v < l.length; v++)
        if (l[v][0] === u) {
            d = v;
            break;
        } let [f, p, h] = l[d]; return p ? r.pop() : u !== f && r.push(f), l.splice(d, 1), h; });
} return Object.keys(t).length && (n = n.replace(Xk, (o, r, i, s, a, c) => t.hasOwnProperty(i) ? `${r}${t[i]}${c}` : o), n = n.replace(eO, (o, r) => t.hasOwnProperty(r) ? t[r] : o), n = n.replace(tO, (o, r) => { if (t.hasOwnProperty(r)) {
    let i = t[r];
    if (!i.length)
        throw new Error(`i18n postprocess: unmatched ICU - ${o} with key: ${r}`);
    return i.shift();
} return o; })), n; }
function Ep(e, t, n = -1) { let o = R(), r = g(), i = I + e, s = me(o.consts, t), a = oo(); if (o.firstCreatePass && Bk(o, a === null ? 0 : a.index, r, i, s, n), o.type === 2) {
    let f = r[te];
    f[N] |= 32;
}
else
    r[N] |= 32; let c = o.data[i], l = a === r[ue] ? null : a, u = Ay(o, l, r), d = a && a.type & 8 ? r[a.index] : null; Qb(r, i, a, n), kk(r, c.create, u, d), $l(!0); }
function Ip() { $l(!1); }
function FD(e, t, n) { Ep(e, t, n), Ip(); }
function jD(e, t) { let n = R(), o = me(n.consts, t); $k(n, e + I, o); }
function Dp(e) { let t = g(); return bk(Y(t, Ie(), e)), Dp; }
function VD(e) { Ak(R(), g(), e + I); }
function HD(e, t = {}) { return rO(e, t); }
function Cp(e, t, n) { let o = g(), r = R(), i = _(); return Np(r, o, o[w], i, e, t, n), Cp; }
function Tp(e, t) { let n = _(), o = g(), r = R(), i = Is(r.data), s = By(i, n, o); return Np(r, o, s, n, e, t), Tp; }
function Mp(e, t, n) { let o = g(), r = R(), i = _(); return (i.type & 3 || n) && Of(i, r, o, n, o[w], e, t, en(i, o, t)), Mp; }
function Np(e, t, n, o, r, i, s) { let a = !0, c = null; if ((o.type & 3 || s) && (c ??= en(o, t, i), Of(o, e, t, s, n, r, i, c) && (a = !1)), a) {
    let l = o.outputs?.[r], u = o.hostDirectiveOutputs?.[r];
    if (u && u.length)
        for (let d = 0; d < u.length; d += 2) {
            let f = u[d], p = u[d + 1];
            c ??= en(o, t, i), _o(o, t, f, p, r, c);
        }
    if (l && l.length)
        for (let d of l)
            c ??= en(o, t, i), _o(o, t, d, r, r, c);
} }
function BD(e = 1) { return lg(e); }
function iO(e, t) { let n = null, o = uS(e); for (let r = 0; r < t.length; r++) {
    let i = t[r];
    if (i === "*") {
        n = r;
        continue;
    }
    if (o === null ? gy(e, i, !0) : pS(o, i))
        return r;
} return n; }
function UD(e) { let t = g()[te][ue]; if (!t.projection) {
    let n = e ? e.length : 1, o = t.projection = Dr(n, null), r = o.slice(), i = t.child;
    for (; i !== null;) {
        if (i.type !== 128) {
            let s = e ? iO(i, e) : 0;
            s !== null && (r[s] ? r[s].projectionNext = i : o[s] = i, r[s] = i);
        }
        i = i.next;
    }
} }
function $D(e, t = 0, n, o, r, i) { let s = g(), a = R(), c = o ? e + 1 : null; c !== null && Ln(s, a, c, o, r, i, null, n); let l = $n(a, I + e, 16, null, n || null); l.projection === null && (l.projection = t), Vl(); let d = !s[de] || Sr(); s[te][ue].projection[l.projection] === null && c !== null ? sO(s, a, c) : d && !Uo(l) && VS(a, s, l); }
function sO(e, t, n) { let o = I + n, r = t.data[o], i = e[o], s = ni(i, r.tView.ssrId), a = zo(e, r, void 0, { dehydratedView: s }); Qo(i, a, 0, On(r, s)); }
function wp(e, t, n, o) { return YE(e, t, n, o), wp; }
function _p(e, t, n) { return ZE(e, t, n), _p; }
function qD(e) { let t = g(), n = R(), o = Ds(); br(o + 1); let r = Ff(n, o); if (e.dirty && Kh(t) === ((r.metadata.flags & 2) === 2)) {
    if (r.matches === null)
        e.reset([]);
    else {
        let i = JE(t, o);
        e.reset(i, ov), e.notifyOnChanges();
    }
    return !0;
} return !1; }
function GD() { return Lf(g(), Ds()); }
function Sp(e, t, n, o, r) { return XE(t, YE(e, n, o, r)), Sp; }
function bp(e, t, n, o) { return XE(e, ZE(t, n, o)), bp; }
function WD(e = 1) { br(Ds() + e); }
function zD(e) { let t = Hl(); return Wt(t, I + e); }
function Ps(e, t) { return e << 17 | t << 2; }
function Fn(e) { return e >> 17 & 32767; }
function aO(e) { return (e & 2) == 2; }
function cO(e, t) { return e & 131071 | t << 17; }
function Nd(e) { return e | 2; }
function ko(e) { return (e & 131068) >> 2; }
function Iu(e, t) { return e & -131069 | t << 2; }
function lO(e) { return (e & 1) === 1; }
function wd(e) { return e | 1; }
function uO(e, t, n, o, r, i) { let s = i ? t.classBindings : t.styleBindings, a = Fn(s), c = ko(s); e[o] = n; let l = !1, u; if (Array.isArray(n)) {
    let d = n;
    u = d[1], (u === null || Xn(d, u) > 0) && (l = !0);
}
else
    u = n; if (r)
    if (c !== 0) {
        let f = Fn(e[a + 1]);
        e[o + 1] = Ps(f, a), f !== 0 && (e[f + 1] = Iu(e[f + 1], o)), e[a + 1] = cO(e[a + 1], o);
    }
    else
        e[o + 1] = Ps(a, 0), a !== 0 && (e[a + 1] = Iu(e[a + 1], o)), a = o;
else
    e[o + 1] = Ps(c, 0), a === 0 ? a = o : e[c + 1] = Iu(e[c + 1], o), c = o; l && (e[o + 1] = Nd(e[o + 1])), ym(e, u, o, !0), ym(e, u, o, !1), dO(t, u, e, o, i), s = Ps(a, c), i ? t.classBindings = s : t.styleBindings = s; }
function dO(e, t, n, o, r) { let i = r ? e.residualClasses : e.residualStyles; i != null && typeof t == "string" && Xn(i, t) >= 0 && (n[o + 1] = wd(n[o + 1])); }
function ym(e, t, n, o) { let r = e[n + 1], i = t === null, s = o ? Fn(r) : ko(r), a = !1; for (; s !== 0 && (a === !1 || i);) {
    let c = e[s], l = e[s + 1];
    fO(c, t) && (a = !0, e[s + 1] = o ? wd(l) : Nd(l)), s = o ? Fn(l) : ko(l);
} a && (e[n + 1] = o ? Nd(r) : wd(r)); }
function fO(e, t) { return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t ? !0 : Array.isArray(e) && typeof t == "string" ? Xn(e, t) >= 0 : !1; }
var ce = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function QD(e) { return e.substring(ce.key, ce.keyEnd); }
function pO(e) { return e.substring(ce.value, ce.valueEnd); }
function hO(e) { return KD(e), ZD(e, Oo(e, 0, ce.textEnd)); }
function ZD(e, t) { let n = ce.textEnd; return n === t ? -1 : (t = ce.keyEnd = mO(e, ce.key = t, n), Oo(e, t, n)); }
function gO(e) { return KD(e), YD(e, Oo(e, 0, ce.textEnd)); }
function YD(e, t) { let n = ce.textEnd, o = ce.key = Oo(e, t, n); return n === o ? -1 : (o = ce.keyEnd = vO(e, o, n), o = Em(e, o, n, 58), o = ce.value = Oo(e, o, n), o = ce.valueEnd = yO(e, o, n), Em(e, o, n, 59)); }
function KD(e) { ce.key = 0, ce.keyEnd = 0, ce.value = 0, ce.valueEnd = 0, ce.textEnd = e.length; }
function Oo(e, t, n) { for (; t < n && e.charCodeAt(t) <= 32;)
    t++; return t; }
function mO(e, t, n) { for (; t < n && e.charCodeAt(t) > 32;)
    t++; return t; }
function vO(e, t, n) { let o; for (; t < n && ((o = e.charCodeAt(t)) === 45 || o === 95 || (o & -33) >= 65 && (o & -33) <= 90 || o >= 48 && o <= 57);)
    t++; return t; }
function Em(e, t, n, o) { return t = Oo(e, t, n), t < n && t++, t; }
function yO(e, t, n) { let o = -1, r = -1, i = -1, s = t, a = s; for (; s < n;) {
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
function Ap(e, t, n) { return eC(e, t, n, !1), Ap; }
function Rp(e, t) { return eC(e, t, null, !0), Rp; }
function JD(e) { tC(rC, EO, e, !1); }
function EO(e, t) { for (let n = gO(t); n >= 0; n = YD(t, n))
    rC(e, QD(t), pO(t)); }
function XD(e) { tC(wO, IO, e, !0); }
function IO(e, t) { for (let n = hO(t); n >= 0; n = ZD(t, n))
    Cr(e, QD(t), !0); }
function eC(e, t, n, o) { let r = g(), i = R(), s = ft(2); if (i.firstUpdatePass && oC(i, e, s, o), t !== B && Y(r, s, t)) {
    let a = i.data[fe()];
    iC(i, a, r, r[w], e, r[s + 1] = SO(t, n), o, s);
} }
function tC(e, t, n, o) { let r = R(), i = ft(2); r.firstUpdatePass && oC(r, null, i, o); let s = g(); if (n !== B && Y(s, i, n)) {
    let a = r.data[fe()];
    if (sC(a, o) && !nC(r, i)) {
        let c = o ? a.classesWithoutHost : a.stylesWithoutHost;
        c !== null && (n = ns(c, n || "")), Td(r, a, s, n, o);
    }
    else
        _O(r, a, s, s[w], s[i + 1], s[i + 1] = NO(e, t, n), o, i);
} }
function nC(e, t) { return t >= e.expandoStartIndex; }
function oC(e, t, n, o) { let r = e.data; if (r[n + 1] === null) {
    let i = r[fe()], s = nC(e, n);
    sC(i, o) && t === null && !s && (t = !1), t = DO(r, i, t, o), uO(r, i, t, n, s, o);
} }
function DO(e, t, n, o) { let r = Is(e), i = o ? t.residualClasses : t.residualStyles; if (r === null)
    (o ? t.classBindings : t.styleBindings) === 0 && (n = Du(null, e, t, n, o), n = ui(n, t.attrs, o), i = null);
else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== r)
        if (n = Du(r, e, t, n, o), i === null) {
            let c = CO(e, t, o);
            c !== void 0 && Array.isArray(c) && (c = Du(null, e, t, c[1], o), c = ui(c, t.attrs, o), TO(e, t, o, c));
        }
        else
            i = MO(e, t, o);
} return i !== void 0 && (o ? t.residualClasses = i : t.residualStyles = i), n; }
function CO(e, t, n) { let o = n ? t.classBindings : t.styleBindings; if (ko(o) !== 0)
    return e[Fn(o)]; }
function TO(e, t, n, o) { let r = n ? t.classBindings : t.styleBindings; e[Fn(r)] = o; }
function MO(e, t, n) { let o, r = t.directiveEnd; for (let i = 1 + t.directiveStylingLast; i < r; i++) {
    let s = e[i].hostAttrs;
    o = ui(o, s, n);
} return ui(o, t.attrs, n); }
function Du(e, t, n, o, r) { let i = null, s = n.directiveEnd, a = n.directiveStylingLast; for (a === -1 ? a = n.directiveStart : a++; a < s && (i = t[a], o = ui(o, i.hostAttrs, r), i !== e);)
    a++; return e !== null && (n.directiveStylingLast = a), o; }
function ui(e, t, n) { let o = n ? 1 : 2, r = -1; if (t !== null)
    for (let i = 0; i < t.length; i++) {
        let s = t[i];
        typeof s == "number" ? r = s : r === o && (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]), Cr(e, s, n ? !0 : t[++i]));
    } return e === void 0 ? null : e; }
function NO(e, t, n) { if (n == null || n === "")
    return F; let o = [], r = kt(n); if (Array.isArray(r))
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
function rC(e, t, n) { Cr(e, t, kt(n)); }
function wO(e, t, n) { let o = String(t); o !== "" && !o.includes(" ") && Cr(e, o, n); }
function _O(e, t, n, o, r, i, s, a) { r === B && (r = F); let c = 0, l = 0, u = 0 < r.length ? r[0] : null, d = 0 < i.length ? i[0] : null; for (; u !== null || d !== null;) {
    let f = c < r.length ? r[c + 1] : void 0, p = l < i.length ? i[l + 1] : void 0, h = null, v;
    u === d ? (c += 2, l += 2, f !== p && (h = d, v = p)) : d === null || u !== null && u < d ? (c += 2, h = u) : (l += 2, h = d, v = p), h !== null && iC(e, t, n, o, h, v, s, a), u = c < r.length ? r[c] : null, d = l < i.length ? i[l] : null;
} }
function iC(e, t, n, o, r, i, s, a) { if (!(t.type & 3))
    return; let c = e.data, l = c[a + 1], u = lO(l) ? Dm(c, t, n, r, ko(l), s) : void 0; if (!Ia(u)) {
    Ia(i) || aO(l) && (i = Dm(c, null, n, r, a, s));
    let d = Dn(fe(), n);
    BS(o, s, d, r, i);
} }
function Dm(e, t, n, o, r, i) { let s = t === null, a; for (; r > 0;) {
    let c = e[r], l = Array.isArray(c), u = l ? c[1] : c, d = u === null, f = n[r + 1];
    f === B && (f = d ? F : void 0);
    let p = d ? ls(f, o) : u === o ? f : void 0;
    if (l && !Ia(p) && (p = ls(c, o)), Ia(p) && (a = p, s))
        return a;
    let h = e[r + 1];
    r = s ? Fn(h) : ko(h);
} if (t !== null) {
    let c = i ? t.residualClasses : t.residualStyles;
    c != null && (a = ls(c, o));
} return a; }
function Ia(e) { return e !== void 0; }
function SO(e, t) { return e == null || e === "" || (typeof t == "string" ? e = e + t : typeof e == "object" && (e = fr(kt(e)))), e; }
function sC(e, t) { return (e.flags & (t ? 8 : 16)) !== 0; }
function aC(e, t = "") { let n = g(), o = R(), r = e + I, i = o.firstCreatePass ? $n(o, r, 1, t, null) : o.data[r], s = cC(o, n, i, t); n[r] = s, Ar() && Ef(o, n, s, i), ut(i, !1); }
var cC = (e, t, n, o) => (Xe(!0), Xd(t[w], o));
function bO(e, t, n, o) { let r = !Fa(t, n); if (Xe(r), r)
    return Xd(t[w], o); let i = t[de]; return Si(i, e, t, n); }
function lC() { cC = bO; }
function uC(e, t) { let n = !1, o = dt(); for (let i = 1; i < t.length; i += 2)
    n = Y(e, o++, t[i]) || n; if (Ul(o), !n)
    return B; let r = t[0]; for (let i = 1; i < t.length; i += 2)
    r += b(t[i]) + (i + 1 !== t.length ? t[i + 1] : ""); return r; }
function dC(e, t, n, o = "") { return Y(e, Ie(), n) ? t + b(n) + o : B; }
function fC(e, t, n, o, r, i = "") { let s = dt(), a = xn(e, s, n, r); return ft(2), a ? t + b(n) + o + b(r) + i : B; }
function pC(e, t, n, o, r, i, s, a = "") { let c = dt(), l = uc(e, c, n, r, s); return ft(3), l ? t + b(n) + o + b(r) + i + b(s) + a : B; }
function hC(e, t, n, o, r, i, s, a, c, l = "") { let u = dt(), d = Ge(e, u, n, r, s, c); return ft(4), d ? t + b(n) + o + b(r) + i + b(s) + a + b(c) + l : B; }
function gC(e, t, n, o, r, i, s, a, c, l, u, d = "") { let f = dt(), p = Ge(e, f, n, r, s, c); return p = Y(e, f + 4, u) || p, ft(5), p ? t + b(n) + o + b(r) + i + b(s) + a + b(c) + l + b(u) + d : B; }
function mC(e, t, n, o, r, i, s, a, c, l, u, d, f, p = "") { let h = dt(), v = Ge(e, h, n, r, s, c); return v = xn(e, h + 4, u, f) || v, ft(6), v ? t + b(n) + o + b(r) + i + b(s) + a + b(c) + l + b(u) + d + b(f) + p : B; }
function vC(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, v = "") { let E = dt(), C = Ge(e, E, n, r, s, c); return C = uc(e, E + 4, u, f, h) || C, ft(7), C ? t + b(n) + o + b(r) + i + b(s) + a + b(c) + l + b(u) + d + b(f) + p + b(h) + v : B; }
function yC(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, v, E, C = "") { let k = dt(), ne = Ge(e, k, n, r, s, c); return ne = Ge(e, k + 4, u, f, h, E) || ne, ft(8), ne ? t + b(n) + o + b(r) + i + b(s) + a + b(c) + l + b(u) + d + b(f) + p + b(h) + v + b(E) + C : B; }
function kp(e) { return Tc("", e), kp; }
function Tc(e, t, n) { let o = g(), r = dC(o, e, t, n); return r !== B && Pt(o, fe(), r), Tc; }
function Op(e, t, n, o, r) { let i = g(), s = fC(i, e, t, n, o, r); return s !== B && Pt(i, fe(), s), Op; }
function xp(e, t, n, o, r, i, s) { let a = g(), c = pC(a, e, t, n, o, r, i, s); return c !== B && Pt(a, fe(), c), xp; }
function Pp(e, t, n, o, r, i, s, a, c) { let l = g(), u = hC(l, e, t, n, o, r, i, s, a, c); return u !== B && Pt(l, fe(), u), Pp; }
function Lp(e, t, n, o, r, i, s, a, c, l, u) { let d = g(), f = gC(d, e, t, n, o, r, i, s, a, c, l, u); return f !== B && Pt(d, fe(), f), Lp; }
function Fp(e, t, n, o, r, i, s, a, c, l, u, d, f) { let p = g(), h = mC(p, e, t, n, o, r, i, s, a, c, l, u, d, f); return h !== B && Pt(p, fe(), h), Fp; }
function jp(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h) { let v = g(), E = vC(v, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); return E !== B && Pt(v, fe(), E), jp; }
function Vp(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, v, E) { let C = g(), k = yC(C, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, v, E); return k !== B && Pt(C, fe(), k), Vp; }
function Hp(e) { let t = g(), n = uC(t, e); return n !== B && Pt(t, fe(), n), Hp; }
function Pt(e, t, n) { let o = Dn(t, e); ty(e[w], o, n); }
function Bp(e, t, n) { Xf(t) && (t = t()); let o = g(), r = Ie(); if (Y(o, r, t)) {
    let i = R(), s = Oe();
    Df(s, o, e, t, o[w], n);
} return Bp; }
function EC(e, t) { let n = Xf(e); return n && e.set(t), n; }
function Up(e, t) { let n = g(), o = R(), r = _(); return Np(o, n, n[w], r, e, t), Up; }
var IC = {};
function $p(e) { X("NgLet"); let t = R(), n = g(), o = e + I, r = $n(t, o, 128, null, null); return ut(r, !1), wr(t, n, o, IC), $p; }
function DC(e) { let t = R(), n = g(), o = fe(); return wr(t, n, o, e), e; }
function CC(e) { let t = Hl(), n = Wt(t, I + e); if (n === IC)
    throw new D(314, !1); return n; }
function TC(e, t) { let n = R(), o = g(), r = o[w], i = "data-ng-source-location"; for (let [s, a, c, l] of t) {
    let u = Gt(n, s + I), d = Dn(s + I, o);
    if (!d.hasAttribute(i)) {
        let f = `${e}@o:${a},l:${c},c:${l}`;
        r.setAttribute(d, i, f);
    }
} }
function MC(e) { return Y(g(), Ie(), e) ? b(e) : B; }
function NC(e, t, n = "") { return dC(g(), e, t, n); }
function wC(e, t, n, o, r = "") { return fC(g(), e, t, n, o, r); }
function _C(e, t, n, o, r, i, s = "") { return pC(g(), e, t, n, o, r, i, s); }
function SC(e, t, n, o, r, i, s, a, c = "") { return hC(g(), e, t, n, o, r, i, s, a, c); }
function bC(e, t, n, o, r, i, s, a, c, l, u = "") { return gC(g(), e, t, n, o, r, i, s, a, c, l, u); }
function AC(e, t, n, o, r, i, s, a, c, l, u, d, f = "") { return mC(g(), e, t, n, o, r, i, s, a, c, l, u, d, f); }
function RC(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h = "") { return vC(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); }
function kC(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, v, E = "") { return yC(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, v, E); }
function OC(e) { return uC(g(), e); }
function xC(e, t, n) { let o = ve() + e, r = g(); return r[o] === B ? tt(r, o, t(n, r)) : Ko(r, o); }
function Cm(e, t, n) { let o = R(); o.firstCreatePass && PC(t, o.data, o.blueprint, Be(e), n); }
function PC(e, t, n, o, r) { if (e = x(e), Array.isArray(e))
    for (let i = 0; i < e.length; i++)
        PC(e[i], t, n, o, r);
else {
    let i = R(), s = g(), a = _(), c = fn(e) ? e : x(e.provide), l = El(e), u = a.providerIndexes & 1048575, d = a.directiveStart, f = a.providerIndexes >> 20;
    if (fn(e) || !e.multi) {
        let p = new bn(l, r, Yo, null), h = Tu(c, t, r ? u : u + f, d);
        h === -1 ? (bu(Js(a, s), i, c), Cu(i, e, t.length), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(p), s.push(p)) : (n[h] = p, s[h] = p);
    }
    else {
        let p = Tu(c, t, u + f, d), h = Tu(c, t, u, u + f), v = p >= 0 && n[p], E = h >= 0 && n[h];
        if (r && !E || !r && !v) {
            bu(Js(a, s), i, c);
            let C = kO(r ? RO : AO, n.length, r, o, l, e);
            !r && E && (n[h].providerFactory = C), Cu(i, e, t.length, 0), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(C), s.push(C);
        }
        else {
            let C = LC(n[r ? h : p], l, !r && o);
            Cu(i, e, p > -1 ? p : h, C);
        }
        !r && o && E && n[h].componentProviders++;
    }
} }
function Cu(e, t, n, o) { let r = fn(t), i = Qh(t); if (r || i) {
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
function LC(e, t, n) { return n && e.componentProviders++, e.multi.push(t) - 1; }
function Tu(e, t, n, o) { for (let r = n; r < o; r++)
    if (t[r] === e)
        return r; return -1; }
function AO(e, t, n, o, r) { return _d(this.multi, []); }
function RO(e, t, n, o, r) { let i = this.multi, s; if (this.providerFactory) {
    let a = this.providerFactory.componentProviders, c = zr(o, o[m], this.providerFactory.index, r);
    s = c.slice(0, a), _d(i, s);
    for (let l = a; l < c.length; l++)
        s.push(c[l]);
}
else
    s = [], _d(i, s); return s; }
function _d(e, t) { for (let n = 0; n < e.length; n++) {
    let o = e[n];
    t.push(o());
} return t; }
function kO(e, t, n, o, r, i) { let s = new bn(e, n, Yo, null); return s.multi = [], s.index = t, s.componentProviders = 0, LC(s, r, o && !n), s; }
function FC(e, t) { return n => { n.providersResolver = (o, r) => Cm(o, r ? r(e) : e, !1), t && (n.viewProvidersResolver = (o, r) => Cm(o, r ? r(t) : t, !0)); }; }
function jC(e) { return t => { e.length < 1 || (t.getExternalStyles = n => e.map(r => r + "?ngcomp" + (n ? "=" + encodeURIComponent(n) : "") + "&e=" + t.encapsulation)); }; }
function VC(e, t, n) { let o = e.\u0275cmp; o.directiveDefs = ha(t, cI), o.pipeDefs = ha(n, Ze); }
function HC(e, t) { return ht(() => { let n = rs(e); n.declarations = Ls(t.declarations || F), n.imports = Ls(t.imports || F), n.exports = Ls(t.exports || F), t.bootstrap && (n.bootstrap = Ls(t.bootstrap)), wo.registerNgModule(e, t); }); }
function Ls(e) { if (typeof e == "function")
    return e; let t = Ye(e); return t.some(hr) ? () => t.map(x).map(Tm) : t.map(Tm); }
function Tm(e) { return Af(e) ? e.ngModule : e; }
function BC(e, t) { let n = ve() + e, o = g(); return o[n] === B ? tt(o, n, t()) : Ko(o, n); }
function UC(e, t, n) { return KC(g(), ve(), e, t, n); }
function $C(e, t, n, o) { return JC(g(), ve(), e, t, n, o); }
function qC(e, t, n, o, r) { return XC(g(), ve(), e, t, n, o, r); }
function GC(e, t, n, o, r, i, s) { return eT(g(), ve(), e, t, n, o, r, i); }
function WC(e, t, n, o, r, i, s) { let a = ve() + e, c = g(), l = Ge(c, a, n, o, r, i); return Y(c, a + 4, s) || l ? tt(c, a + 5, t(n, o, r, i, s)) : Ko(c, a + 5); }
function zC(e, t, n, o, r, i, s, a) { let c = ve() + e, l = g(), u = Ge(l, c, n, o, r, i); return xn(l, c + 4, s, a) || u ? tt(l, c + 6, t(n, o, r, i, s, a)) : Ko(l, c + 6); }
function QC(e, t, n, o, r, i, s, a, c) { let l = ve() + e, u = g(), d = Ge(u, l, n, o, r, i); return uc(u, l + 4, s, a, c) || d ? tt(u, l + 7, t(n, o, r, i, s, a, c)) : Ko(u, l + 7); }
function ZC(e, t, n, o, r, i, s, a, c, l) { let u = ve() + e, d = g(), f = Ge(d, u, n, o, r, i); return Ge(d, u + 4, s, a, c, l) || f ? tt(d, u + 8, t(n, o, r, i, s, a, c, l)) : Ko(d, u + 8); }
function YC(e, t, n) { return tT(g(), ve(), e, t, n); }
function Li(e, t) { let n = e[t]; return n === B ? void 0 : n; }
function KC(e, t, n, o, r, i) { let s = t + n; return Y(e, s, r) ? tt(e, s + 1, i ? o.call(i, r) : o(r)) : Li(e, s + 1); }
function JC(e, t, n, o, r, i, s) { let a = t + n; return xn(e, a, r, i) ? tt(e, a + 2, s ? o.call(s, r, i) : o(r, i)) : Li(e, a + 2); }
function XC(e, t, n, o, r, i, s, a) { let c = t + n; return uc(e, c, r, i, s) ? tt(e, c + 3, a ? o.call(a, r, i, s) : o(r, i, s)) : Li(e, c + 3); }
function eT(e, t, n, o, r, i, s, a, c) { let l = t + n; return Ge(e, l, r, i, s, a) ? tt(e, l + 4, c ? o.call(c, r, i, s, a) : o(r, i, s, a)) : Li(e, l + 4); }
function tT(e, t, n, o, r, i) { let s = t + n, a = !1; for (let c = 0; c < r.length; c++)
    Y(e, s++, r[c]) && (a = !0); return a ? tt(e, s, o.apply(i, r)) : Li(e, s); }
function nT(e, t) { let n = R(), o, r = e + I; n.firstCreatePass ? (o = OO(t, n.pipeRegistry), n.data[r] = o, o.onDestroy && (n.destroyHooks ??= []).push(r, o.onDestroy)) : o = n.data[r]; let i = o.factory || (o.factory = Ht(o.type, !0)), s, a = Ce(Yo); try {
    let c = Ks(!1), l = i();
    return Ks(c), wr(n, g(), r, l), l;
}
finally {
    Ce(a);
} }
function OO(e, t) { if (t)
    for (let n = t.length - 1; n >= 0; n--) {
        let o = t[n];
        if (e === o.name)
            return o;
    } }
function oT(e, t, n) { let o = e + I, r = g(), i = Wt(r, o); return Fi(r, o) ? KC(r, ve(), t, i.transform, n, i) : i.transform(n); }
function rT(e, t, n, o) { let r = e + I, i = g(), s = Wt(i, r); return Fi(i, r) ? JC(i, ve(), t, s.transform, n, o, s) : s.transform(n, o); }
function iT(e, t, n, o, r) { let i = e + I, s = g(), a = Wt(s, i); return Fi(s, i) ? XC(s, ve(), t, a.transform, n, o, r, a) : a.transform(n, o, r); }
function sT(e, t, n, o, r, i) { let s = e + I, a = g(), c = Wt(a, s); return Fi(a, s) ? eT(a, ve(), t, c.transform, n, o, r, i, c) : c.transform(n, o, r, i); }
function aT(e, t, n) { let o = e + I, r = g(), i = Wt(r, o); return Fi(r, o) ? tT(r, ve(), t, i.transform, n, i) : i.transform.apply(i, n); }
function Fi(e, t) { return e[m].data[t].pure; }
function cT(e, t) { return nc(e, t); }
function lT(e, t) { return () => { try {
    return wo.getComponentDependencies(e, t).dependencies;
}
catch (n) {
    throw console.error(`Computing dependencies in local compilation mode for the component "${e.name}" failed with the exception:`, n), n;
} }; }
function uT(e, t) { let n = z(e); n !== null && (n.debugInfo = t); }
function dT(e, t, n) { let o = `./@ng/component?c=${e}&t=${encodeURIComponent(t)}`; return new URL(o, n).href; }
function fT(e, t, n, o, r = null, i = null) { let s = z(e); t.apply(null, [e, n, ...o]); let { newDef: a, oldDef: c } = xO(s, z(e)); if (e[hn] = a, c.tView) {
    let l = _w().values();
    for (let u of l)
        ct(u) && u[Q] === null && Ws(r, i, a, c, u);
} }
function xO(e, t) { let n = H({}, e); return { newDef: Object.assign(e, t, { directiveDefs: n.directiveDefs, pipeDefs: n.pipeDefs, setInput: n.setInput, type: n.type }), oldDef: n }; }
function Ws(e, t, n, o, r) { let i = r[m]; if (i === o.tView) {
    LO(e, t, n, o, r);
    return;
} for (let s = I; s < i.bindingStartIndex; s++) {
    let a = r[s];
    if (J(a)) {
        oe(a[q]) && Ws(e, t, n, o, a[q]);
        for (let c = W; c < a.length; c++)
            Ws(e, t, n, o, a[c]);
    }
    else
        oe(a) && Ws(e, t, n, o, a);
} }
function PO(e, t) { e.componentReplaced?.(t.id); }
function LO(e, t, n, o, r) { let i = r[$], s = r[q], a = r[Q], c = r[ue], l = r[P].get(G, null), u = () => { if (o.encapsulation === qe.ShadowDom || o.encapsulation === qe.ExperimentalIsolatedShadowDom) {
    let h = s.cloneNode(!1);
    s.replaceWith(h), s = h;
} let d = my(n), f = Va(a, d, i, af(n), s, c, null, null, null, null, null); FO(a, r, f, c.index), wi(r[m], r), ti(r); let p = r[Ve].rendererFactory; PO(p, o), f[w] = p.createRenderer(s, n), Sy(r[m], r), jO(c), ec(d, f, i), zy(d, f, d.template, i); }; l === null ? Mm(e, t, u) : l.run(() => Mm(e, t, u)); }
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
function FO(e, t, n, o) { for (let r = I; r < e[m].bindingStartIndex; r++) {
    let i = e[r];
    if ((oe(i) || J(i)) && i[ge] === t) {
        i[ge] = n;
        break;
    }
} e[$t] === t && (e[$t] = n), e[Tr] === t && (e[Tr] = n), n[ge] = t[ge], t[ge] = null, e[o] = n; }
function jO(e) { if (e.projection !== null) {
    for (let t of e.projection)
        Ca(t) && (t.projectionNext = null, t.flags &= -3);
    e.projection = null;
} }
var De = { \u0275\u0275animateEnter: Hr, \u0275\u0275animateEnterListener: Br, \u0275\u0275animateLeave: Ur, \u0275\u0275animateLeaveListener: ga, \u0275\u0275attribute: ap, \u0275\u0275defineComponent: aI, \u0275\u0275defineDirective: lI, \u0275\u0275defineInjectable: U, \u0275\u0275defineInjector: gr, \u0275\u0275defineNgModule: Gf, \u0275\u0275definePipe: uI, \u0275\u0275directiveInject: Yo, \u0275\u0275getInheritedFactory: Xm, \u0275\u0275inject: he, \u0275\u0275injectAttribute: Ta, \u0275\u0275invalidFactory: _E, \u0275\u0275invalidFactoryDep: as, \u0275\u0275templateRefExtractor: cT, \u0275\u0275resetView: Ll, \u0275\u0275HostDirectivesFeature: hI, \u0275\u0275NgOnChangesFeature: Fm, \u0275\u0275ControlFeature: pI, \u0275\u0275ProvidersFeature: FC, \u0275\u0275InheritDefinitionFeature: Wf, \u0275\u0275ExternalStylesFeature: jC, \u0275\u0275nextContext: BD, \u0275\u0275namespaceHTML: Ql, \u0275\u0275namespaceMathML: zl, \u0275\u0275namespaceSVG: Wl, \u0275\u0275enableBindings: kl, \u0275\u0275disableBindings: Ol, \u0275\u0275elementStart: ci, \u0275\u0275elementEnd: yc, \u0275\u0275element: lp, \u0275\u0275elementContainerStart: Dc, \u0275\u0275elementContainerEnd: xi, \u0275\u0275domElement: up, \u0275\u0275domElementStart: Ec, \u0275\u0275domElementEnd: Ic, \u0275\u0275domElementContainer: hp, \u0275\u0275domElementContainerStart: Cc, \u0275\u0275domElementContainerEnd: pp, \u0275\u0275domTemplate: Qf, \u0275\u0275domListener: Mp, \u0275\u0275elementContainer: fp, \u0275\u0275pureFunction0: BC, \u0275\u0275pureFunction1: UC, \u0275\u0275pureFunction2: $C, \u0275\u0275pureFunction3: qC, \u0275\u0275pureFunction4: GC, \u0275\u0275pureFunction5: WC, \u0275\u0275pureFunction6: zC, \u0275\u0275pureFunction7: QC, \u0275\u0275pureFunction8: ZC, \u0275\u0275pureFunctionV: YC, \u0275\u0275getCurrentView: DD, \u0275\u0275restoreView: Pl, \u0275\u0275listener: Cp, \u0275\u0275projection: $D, \u0275\u0275syntheticHostProperty: vp, \u0275\u0275syntheticHostListener: Tp, \u0275\u0275pipeBind1: oT, \u0275\u0275pipeBind2: rT, \u0275\u0275pipeBind3: iT, \u0275\u0275pipeBind4: sT, \u0275\u0275pipeBindV: aT, \u0275\u0275projectionDef: UD, \u0275\u0275domProperty: mp, \u0275\u0275ariaProperty: sp, \u0275\u0275property: cp, \u0275\u0275control: LE, \u0275\u0275controlCreate: xE, \u0275\u0275pipe: nT, \u0275\u0275queryRefresh: qD, \u0275\u0275queryAdvance: WD, \u0275\u0275viewQuery: _p, \u0275\u0275viewQuerySignal: bp, \u0275\u0275loadQuery: GD, \u0275\u0275contentQuery: wp, \u0275\u0275contentQuerySignal: Sp, \u0275\u0275reference: zD, \u0275\u0275classMap: XD, \u0275\u0275styleMap: JD, \u0275\u0275styleProp: Ap, \u0275\u0275classProp: Rp, \u0275\u0275advance: vy, \u0275\u0275template: zf, \u0275\u0275conditional: hD, \u0275\u0275conditionalCreate: pD, \u0275\u0275conditionalBranchCreate: vc, \u0275\u0275defer: $I, \u0275\u0275deferWhen: qI, \u0275\u0275deferOnIdle: QI, \u0275\u0275deferOnImmediate: KI, \u0275\u0275deferOnTimer: eD, \u0275\u0275deferOnHover: oD, \u0275\u0275deferOnInteraction: sD, \u0275\u0275deferOnViewport: lD, \u0275\u0275deferPrefetchWhen: GI, \u0275\u0275deferPrefetchOnIdle: ZI, \u0275\u0275deferPrefetchOnImmediate: JI, \u0275\u0275deferPrefetchOnTimer: tD, \u0275\u0275deferPrefetchOnHover: rD, \u0275\u0275deferPrefetchOnInteraction: aD, \u0275\u0275deferPrefetchOnViewport: uD, \u0275\u0275deferHydrateWhen: WI, \u0275\u0275deferHydrateNever: zI, \u0275\u0275deferHydrateOnIdle: YI, \u0275\u0275deferHydrateOnImmediate: XI, \u0275\u0275deferHydrateOnTimer: nD, \u0275\u0275deferHydrateOnHover: iD, \u0275\u0275deferHydrateOnInteraction: cD, \u0275\u0275deferHydrateOnViewport: dD, \u0275\u0275deferEnableTimerScheduling: bI, \u0275\u0275repeater: yD, \u0275\u0275repeaterCreate: vD, \u0275\u0275repeaterTrackByIndex: gD, \u0275\u0275repeaterTrackByIdentity: mD, \u0275\u0275componentInstance: fD, \u0275\u0275text: aC, \u0275\u0275textInterpolate: kp, \u0275\u0275textInterpolate1: Tc, \u0275\u0275textInterpolate2: Op, \u0275\u0275textInterpolate3: xp, \u0275\u0275textInterpolate4: Pp, \u0275\u0275textInterpolate5: Lp, \u0275\u0275textInterpolate6: Fp, \u0275\u0275textInterpolate7: jp, \u0275\u0275textInterpolate8: Vp, \u0275\u0275textInterpolateV: Hp, \u0275\u0275i18n: FD, \u0275\u0275i18nAttributes: jD, \u0275\u0275i18nExp: Dp, \u0275\u0275i18nStart: Ep, \u0275\u0275i18nEnd: Ip, \u0275\u0275i18nApply: VD, \u0275\u0275i18nPostprocess: HD, \u0275\u0275resolveWindow: fy, \u0275\u0275resolveDocument: py, \u0275\u0275resolveBody: of, \u0275\u0275setComponentScope: VC, \u0275\u0275setNgModuleScope: HC, \u0275\u0275registerNgModuleType: Uf, \u0275\u0275getComponentDepsFactory: lT, \u0275setClassDebugInfo: uT, \u0275\u0275declareLet: $p, \u0275\u0275storeLet: DC, \u0275\u0275arrowFunction: xC, \u0275\u0275readContextLet: CC, \u0275\u0275attachSourceLocations: TC, \u0275\u0275interpolate: MC, \u0275\u0275interpolate1: NC, \u0275\u0275interpolate2: wC, \u0275\u0275interpolate3: _C, \u0275\u0275interpolate4: SC, \u0275\u0275interpolate5: bC, \u0275\u0275interpolate6: AC, \u0275\u0275interpolate7: RC, \u0275\u0275interpolate8: kC, \u0275\u0275interpolateV: OC, \u0275\u0275sanitizeHtml: iy, \u0275\u0275sanitizeStyle: sy, \u0275\u0275sanitizeResourceUrl: nf, \u0275\u0275sanitizeScript: ay, \u0275\u0275validateAttribute: dy, \u0275\u0275sanitizeUrl: tf, \u0275\u0275sanitizeUrlOrResourceUrl: uy, \u0275\u0275trustConstantHtml: cy, \u0275\u0275trustConstantResourceUrl: ly, forwardRef: pr, resolveForwardRef: x, \u0275\u0275twoWayProperty: Bp, \u0275\u0275twoWayBindingSet: EC, \u0275\u0275twoWayListener: Up, \u0275\u0275replaceMetadata: fT, \u0275\u0275getReplaceMetadataURL: dT }, mo = null;
function pT(e) { mo !== null && (e.defaultEncapsulation !== mo.defaultEncapsulation || e.preserveWhitespaces !== mo.preserveWhitespaces) || (mo = e); }
function VO() { return mo; }
function HO() { mo = null; }
var Wr = [];
function BO(e, t) { Wr.push({ moduleType: e, ngModule: t }); }
var Mu = !1;
function hT() { if (!Mu) {
    Mu = !0;
    try {
        for (let e = Wr.length - 1; e >= 0; e--) {
            let { moduleType: t, ngModule: n } = Wr[e];
            n.declarations && n.declarations.every(gT) && (Wr.splice(e, 1), WO(t, n));
        }
    }
    finally {
        Mu = !1;
    }
} }
function gT(e) { return Array.isArray(e) ? e.every(gT) : !!x(e); }
function mT(e, t = {}) { vT(e, t), t.id !== void 0 && Uf(e, t.id), BO(e, t); }
function vT(e, t, n = !1) { let o = Ye(t.declarations || F), r = null; Object.defineProperty(e, os, { configurable: !0, get: () => (r === null && (r = ie({ usage: 0, kind: "NgModule", type: e }).compileNgModule(De, `ng:///${e.name}/\u0275mod.js`, { type: e, bootstrap: Ye(t.bootstrap || F).map(x), declarations: o.map(x), imports: Ye(t.imports || F).map(x).map(Nm), exports: Ye(t.exports || F).map(x).map(Nm), schemas: t.schemas ? Ye(t.schemas) : null, id: t.id || null }), r.schemas || (r.schemas = [])), r) }); let i = null; Object.defineProperty(e, it, { get: () => { if (i === null) {
        let a = ie({ usage: 0, kind: "NgModule", type: e });
        i = a.compileFactory(De, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, deps: Ma(e), target: a.FactoryTarget.NgModule, typeArgumentCount: 0 });
    } return i; }, configurable: !1 }); let s = null; Object.defineProperty(e, sr, { get: () => { if (s === null) {
        let a = { name: e.name, type: e, providers: t.providers || F, imports: [(t.imports || F).map(x), (t.exports || F).map(x)] };
        s = ie({ usage: 0, kind: "NgModule", type: e }).compileInjector(De, `ng:///${e.name}/\u0275inj.js`, a);
    } return s; }, configurable: !1 }); }
function UO(e, t) { let n = `Unexpected "${Le(e)}" found in the "declarations" array of the`, o = `"${Le(e)}" is marked as standalone and can't be declared in any NgModule - did you intend to import it instead (by adding it to the "imports" array)?`; return `${n} ${t}, ${o}`; }
var $O = new WeakMap, qO = new WeakMap;
function GO() { $O = new WeakMap, qO = new WeakMap, Wr.length = 0, uR.clear(); }
function WO(e, t) { let n = Ye(t.declarations || F), o = Gp(e); n.forEach(r => { if (r = x(r), r.hasOwnProperty(hn)) {
    let s = z(r);
    qp(s, o);
}
else
    !r.hasOwnProperty(vr) && !r.hasOwnProperty(yr) && (r.ngSelectorScope = e); }); }
function qp(e, t) { e.directiveDefs = () => Array.from(t.compilation.directives).map(n => n.hasOwnProperty(hn) ? z(n) : Ae(n)).filter(n => !!n), e.pipeDefs = () => Array.from(t.compilation.pipes).map(n => Ze(n)), e.schemas = t.schemas, e.tView = null; }
function Gp(e) { if (Mn(e)) {
    let t = wo.getNgModuleScope(e), n = rs(e);
    return H({ schemas: n.schemas || null }, t);
}
else if (Er(e)) {
    if ((z(e) || Ae(e)) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set([e]), pipes: new Set } };
    if (Ze(e) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set, pipes: new Set([e]) } };
} throw new Error(`${e.name} does not have a module def (\u0275mod property)`); }
function Nm(e) { return Af(e) ? e.ngModule : e; }
var Nu = 0;
function yT(e, t) {
    let n = null;
    XA(e, t), IT(e, t), Object.defineProperty(e, hn, { get: () => {
            if (n === null) {
                let o = ie({ usage: 0, kind: "component", type: e });
                if (tI(t)) {
                    let u = [`Component '${e.name}' is not resolved:`];
                    throw t.templateUrl && u.push(` - templateUrl: ${t.templateUrl}`), t.styleUrls && t.styleUrls.length && u.push(` - styleUrls: ${JSON.stringify(t.styleUrls)}`), t.styleUrl && u.push(` - styleUrl: ${t.styleUrl}`), u.push("Did you run and wait for 'resolveComponentResources()'?"), new Error(u.join(`
`));
                }
                let r = VO(), i = t.preserveWhitespaces;
                i === void 0 && (r !== null && r.preserveWhitespaces !== void 0 ? i = r.preserveWhitespaces : i = !1);
                let s = t.encapsulation;
                s === void 0 && (r !== null && r.defaultEncapsulation !== void 0 ? s = r.defaultEncapsulation : s = qe.Emulated);
                let a = t.templateUrl || `ng:///${e.name}/template.html`, c = DT(e, t), l = se(H({}, c), { typeSourceSpan: o.createParseSourceSpan("Component", e.name, a), template: t.template || "", preserveWhitespaces: i, styles: typeof t.styles == "string" ? [t.styles] : t.styles || F, animations: t.animations, declarations: [], changeDetection: t.changeDetection, encapsulation: s, viewProviders: t.viewProviders || null, hasDirectiveDependencies: !c.isStandalone || t.imports != null && t.imports.length > 0 });
                Nu++;
                try {
                    if (l.usesInheritance && CT(e), n = o.compileComponent(De, a, l), l.isStandalone) {
                        let u = Ye(t.imports || F), { directiveDefs: d, pipeDefs: f } = zO(e, u);
                        n.directiveDefs = d, n.pipeDefs = f, n.dependencies = () => u.map(x);
                    }
                }
                finally {
                    Nu--;
                }
                if (Nu === 0 && hT(), QO(e)) {
                    let u = Gp(e.ngSelectorScope);
                    qp(n, u);
                }
                if (t.schemas)
                    if (l.isStandalone)
                        n.schemas = t.schemas;
                    else
                        throw new Error(`The 'schemas' was specified for the ${Le(e)} but is only valid on a component that is standalone.`);
                else
                    l.isStandalone && (n.schemas = []);
            }
            return n;
        }, set: o => { n = o; }, configurable: !1 });
}
function zO(e, t) { return { directiveDefs: () => jr(e) ? [...wo.getStandaloneComponentScope(e, t).compilation.directives].map(i => z(i) || Ae(i)).filter(i => i !== null) : [], pipeDefs: () => jr(e) ? [...wo.getStandaloneComponentScope(e, t).compilation.pipes].map(i => Ze(i)).filter(i => i !== null) : [] }; }
function QO(e) { return e.ngSelectorScope !== void 0; }
function Wp(e, t) { let n = null; IT(e, t || {}), Object.defineProperty(e, vr, { get: () => { if (n === null) {
        let o = ET(e, t || {});
        n = ie({ usage: 0, kind: "directive", type: e }).compileDirective(De, o.sourceMapUrl, o.metadata);
    } return n; }, configurable: !1 }); }
function ET(e, t) { let n = e && e.name, o = `ng:///${n}/\u0275dir.js`, r = ie({ usage: 0, kind: "directive", type: e }), i = DT(e, t); return i.typeSourceSpan = r.createParseSourceSpan("Directive", n, o), i.usesInheritance && CT(e), { metadata: i, sourceMapUrl: o }; }
function IT(e, t) { let n = null; Object.defineProperty(e, it, { get: () => { if (n === null) {
        let o = ET(e, t), r = ie({ usage: 0, kind: "directive", type: e });
        n = r.compileFactory(De, `ng:///${e.name}/\u0275fac.js`, { name: o.metadata.name, type: o.metadata.type, typeArgumentCount: 0, deps: Ma(e), target: r.FactoryTarget.Directive });
    } return n; }, configurable: !1 }); }
function ZO(e) { return Object.getPrototypeOf(e.prototype) === Object.prototype; }
function DT(e, t) { let n = kd(), o = n.ownPropMetadata(e); return { name: e.name, type: e, selector: t.selector !== void 0 ? t.selector : null, host: t.host || Fe, propMetadata: o, inputs: t.inputs || F, outputs: t.outputs || F, queries: wm(e, o, TT), lifecycle: { usesOnChanges: n.hasLifecycleHook(e, "ngOnChanges") }, controlCreate: null, typeSourceSpan: null, usesInheritance: !ZO(e), exportAs: JO(t.exportAs), providers: t.providers || null, viewQueries: wm(e, o, MT), isStandalone: t.standalone === void 0 ? !0 : !!t.standalone, isSignal: !!t.signals, hostDirectives: t.hostDirectives?.map(r => typeof r == "function" ? { directive: r } : r) || null }; }
function CT(e) { let t = Object.prototype, n = Object.getPrototypeOf(e.prototype).constructor; for (; n && n !== t;)
    !Ae(n) && !z(n) && ex(n) && Wp(n, null), n = Object.getPrototypeOf(n); }
function YO(e) { return typeof e == "string" ? wT(e) : x(e); }
function KO(e, t) { return { propertyName: e, predicate: YO(t.selector), descendants: t.descendants, first: t.first, read: t.read ? t.read : null, static: !!t.static, emitDistinctChangesOnly: !!t.emitDistinctChangesOnly, isSignal: !!t.isSignal }; }
function wm(e, t, n) { let o = []; for (let r in t)
    if (t.hasOwnProperty(r)) {
        let i = t[r];
        i.forEach(s => { if (n(s)) {
            if (!s.selector)
                throw new Error(`Can't construct a query for the property "${r}" of "${Le(e)}" since the query selector wasn't defined.`);
            if (i.some(NT))
                throw new Error("Cannot combine @Input decorators with query decorators");
            o.push(KO(r, s));
        } });
    } return o; }
function JO(e) { return e === void 0 ? null : wT(e); }
function TT(e) { let t = e.ngMetadataName; return t === "ContentChild" || t === "ContentChildren"; }
function MT(e) { let t = e.ngMetadataName; return t === "ViewChild" || t === "ViewChildren"; }
function NT(e) { return e.ngMetadataName === "Input"; }
function wT(e) { return e.split(",").map(t => t.trim()); }
var XO = ["ngOnChanges", "ngOnInit", "ngOnDestroy", "ngDoCheck", "ngAfterViewInit", "ngAfterViewChecked", "ngAfterContentInit", "ngAfterContentChecked"];
function ex(e) { let t = kd(); if (XO.some(o => t.hasLifecycleHook(e, o)))
    return !0; let n = t.propMetadata(e); for (let o in n) {
    let r = n[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i], a = s.ngMetadataName;
        if (NT(s) || TT(s) || MT(s) || a === "Output" || a === "HostBinding" || a === "HostListener")
            return !0;
    }
} return !1; }
function _T(e, t) { let n = null, o = null; Object.defineProperty(e, it, { get: () => { if (o === null) {
        let r = _m(e, t), i = ie({ usage: 0, kind: "pipe", type: r.type });
        o = i.compileFactory(De, `ng:///${r.name}/\u0275fac.js`, { name: r.name, type: r.type, typeArgumentCount: 0, deps: Ma(e), target: i.FactoryTarget.Pipe });
    } return o; }, configurable: !1 }), Object.defineProperty(e, yr, { get: () => { if (n === null) {
        let r = _m(e, t);
        n = ie({ usage: 0, kind: "pipe", type: r.type }).compilePipe(De, `ng:///${r.name}/\u0275pipe.js`, r);
    } return n; }, configurable: !1 }); }
function _m(e, t) { return { type: e, name: e.name, pipeName: t.name, pure: t.pure !== void 0 ? t.pure : !0, isStandalone: t.standalone === void 0 ? !0 : !!t.standalone }; }
var ST = pi("Directive", (e = {}) => e, void 0, void 0, (e, t) => Wp(e, t)), tx = pi("Component", (e = {}) => H({ changeDetection: Na.Eager }, e), ST, void 0, (e, t) => yT(e, t)), nx = pi("Pipe", e => H({ pure: !0 }, e), void 0, void 0, (e, t) => _T(e, t)), ox = bt("Input", e => e ? typeof e == "string" ? { alias: e } : e : {}), rx = bt("Output", e => ({ alias: e })), ix = bt("HostBinding", e => ({ hostPropertyName: e })), sx = bt("HostListener", (e, t) => ({ eventName: e, args: t })), ax = pi("NgModule", e => e, void 0, void 0, (e, t) => mT(e, t)), Da = class {
    ngModuleFactory;
    componentFactories;
    constructor(t, n) { this.ngModuleFactory = t, this.componentFactories = n; }
}, cx = (() => { class e {
    compileModuleSync(n) { return new Ao(n); }
    compileModuleAsync(n) { return Promise.resolve(this.compileModuleSync(n)); }
    compileModuleAndAllComponentsSync(n) { let o = this.compileModuleSync(n), r = mn(n), i = ho(r.declarations).reduce((s, a) => { let c = z(a); return c && s.push(new nn(c)), s; }, []); return new Da(o, i); }
    compileModuleAndAllComponentsAsync(n) { return Promise.resolve(this.compileModuleAndAllComponentsSync(n)); }
    clearCache() { }
    clearCacheFor(n) { }
    getModuleId(n) { }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = U({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), bT = new T(""), Sd = class {
};
var AT = (() => { class e {
    applicationErrorHandler = y(Tt);
    appRef = y(We);
    taskService = y(Ct);
    ngZone = y(G);
    zonelessEnabled = y(so);
    tracing = y(Un, { optional: !0 });
    zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
    schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }];
    subscriptions = new Gn;
    angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(lr) : null;
    scheduleInRootZone = !this.zonelessEnabled && this.zoneIsDefined && (y(Ms, { optional: !0 }) ?? !1);
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
        return; let o = this.useMicrotaskScheduler ? dg : Xl; this.pendingRenderTaskId = this.taskService.add(), this.scheduleInRootZone ? this.cancelScheduledCallback = Zone.root.run(() => o(() => this.tick())) : this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() => o(() => this.tick())); }
    shouldScheduleTick() { return !(this.appRef.destroyed || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && Zone.current.get(lr + this.angularZoneId)); }
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
function lx() { return X("NgZoneless"), Ke([...Mc(), []]); }
function Mc() { return [{ provide: Pe, useExisting: AT }, { provide: G, useClass: ur }, { provide: so, useValue: !0 }]; }
function ux() { return typeof $localize < "u" && $localize.locale || Pi; }
var zp = new T("", { factory: () => y(zp, { optional: !0, skipSelf: !0 }) || ux() }), dx = new T("", { factory: () => _k }), fx = new T(""), px = new T(""), RT = (function (e) { return e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Ignore = 2] = "Ignore", e; })(RT || {}), bd = class {
    name;
    callback;
    constructor(t, n) { this.name = t, this.callback = n; }
};
function hx(e) { return e.map(t => t.nativeElement); }
var di = class {
    nativeNode;
    constructor(t) { this.nativeNode = t; }
    get parent() { let t = this.nativeNode.parentNode; return t ? new jn(t) : null; }
    get injector() { return Fw(this.nativeNode); }
    get componentInstance() { let t = this.nativeNode; return t && (wg(t) || Lw(t)); }
    get context() { return wg(this.nativeNode) || Pw(this.nativeNode); }
    get listeners() { return Uw(this.nativeNode).filter(t => t.type === "dom"); }
    get references() { return Hw(this.nativeNode); }
    get providerTokens() { return jw(this.nativeNode); }
}, jn = class extends di {
    constructor(t) { super(t); }
    get nativeElement() { return this.nativeNode.nodeType == Node.ELEMENT_NODE ? this.nativeNode : null; }
    get name() { let t = we(this.nativeNode), n = t ? t.lView : null; return n !== null ? n[m].data[t.nodeIndex].value : this.nativeNode.nodeName; }
    get properties() { let t = we(this.nativeNode), n = t ? t.lView : null; if (n === null)
        return {}; let o = n[m].data, r = o[t.nodeIndex], i = {}; return gx(this.nativeElement, i), vx(i, r, n, o), i; }
    get attributes() { let t = {}, n = this.nativeElement; if (!n)
        return t; let o = we(n), r = o ? o.lView : null; if (r === null)
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
        n.push(fi(r));
    } return n; }
    get children() { let t = this.nativeElement; if (!t)
        return []; let n = t.children, o = []; for (let r = 0; r < n.length; r++) {
        let i = n[r];
        o.push(fi(i));
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
function gx(e, t) { if (e) {
    let n = Object.getPrototypeOf(e), o = Node.prototype;
    for (; n !== null && n !== o;) {
        let r = Object.getOwnPropertyDescriptors(n);
        for (let i in r)
            if (!i.startsWith("__") && !i.startsWith("on")) {
                let s = e[i];
                mx(s) && (t[i] = s);
            }
        n = Object.getPrototypeOf(n);
    }
} }
function mx(e) { return typeof e == "string" || typeof e == "boolean" || typeof e == "number" || e === null; }
function Sm(e, t, n, o) { let r = we(e.nativeNode), i = r ? r.lView : null; if (i !== null) {
    let s = i[m].data[r.nodeIndex];
    Nn(s, i, t, n, o, e.nativeNode);
}
else
    Qp(e.nativeNode, t, n, o); }
function Nn(e, t, n, o, r, i) { let s = Yh(e, t); if (e.type & 11) {
    if (wu(s, n, o, r, i), Te(e)) {
        let c = Ee(e.index, t);
        c && c[m].firstChild && Nn(c[m].firstChild, c, n, o, r, i);
    }
    else
        e.child && Nn(e.child, t, n, o, r, i), s && Qp(s, n, o, r);
    let a = t[e.index];
    J(a) && bm(a, n, o, r, i);
}
else if (e.type & 4) {
    let a = t[e.index];
    wu(a[Je], n, o, r, i), bm(a, n, o, r, i);
}
else if (e.type & 16) {
    let a = t[te], l = a[ue].projection[e.projection];
    if (Array.isArray(l))
        for (let u of l)
            wu(u, n, o, r, i);
    else if (l) {
        let u = a[Q], d = u[m].data[l.index];
        Nn(d, u, n, o, r, i);
    }
}
else
    e.child && Nn(e.child, t, n, o, r, i); if (i !== s) {
    let a = e.flags & 2 ? e.projectionNext : e.next;
    a && Nn(a, t, n, o, r, i);
} }
function bm(e, t, n, o, r) { for (let i = W; i < e.length; i++) {
    let s = e[i], a = s[m].firstChild;
    a && Nn(a, s, t, n, o, r);
} }
function wu(e, t, n, o, r) { if (r !== e) {
    let i = fi(e);
    if (!i)
        return;
    (o && i instanceof jn && t(i) && n.indexOf(i) === -1 || !o && t(i) && n.indexOf(i) === -1) && n.push(i);
} }
function Qp(e, t, n, o) { let r = e.childNodes, i = r.length; for (let s = 0; s < i; s++) {
    let a = r[s], c = fi(a);
    c && ((o && c instanceof jn && t(c) && n.indexOf(c) === -1 || !o && t(c) && n.indexOf(c) === -1) && n.push(c), Qp(a, t, n, o));
} }
function vx(e, t, n, o) { let r = t.propertyBindings; if (r !== null)
    for (let i = 0; i < r.length; i++) {
        let s = r[i], c = o[s].split(rS), l = c[0];
        if (c.length > 1) {
            let u = c[1];
            for (let d = 1; d < c.length - 1; d++)
                u += b(n[s + d - 1]) + c[d + 1];
            e[l] = u;
        }
        else
            e[l] = n[s];
    } }
var _u = "__ng_debug__";
function fi(e) { return e instanceof Node ? (e.hasOwnProperty(_u) || (e[_u] = e.nodeType == Node.ELEMENT_NODE ? new jn(e) : new di(e)), e[_u]) : null; }
function Zp(e, t, n) { let o = Object.create(yx); o.source = e, o.computation = t, n != null && (o.equal = n); let i = () => { if (Wn(o), Ft(o), o.value === ot)
    throw o.error; return o.value; }; return i[K] = o, Gi(o), i; }
function kT(e, t) { Wn(e), ln(e, t), rr(e); }
function OT(e, t) { if (Wn(e), e.value === ot)
    throw e.error; $c(e, t), rr(e); }
var yx = se(H({}, Lt), { value: an, dirty: !0, error: null, equal: Wi, kind: "linkedSignal", producerMustRecompute(e) { return e.value === an || e.value === cn; }, producerRecomputeValue(e) { if (e.value === cn)
        throw new Error(""); let t = e.value; e.value = cn; let n = vt(e), o, r = !1; try {
        let i = e.source(), s = t !== an && t !== ot, a = s ? { source: e.sourceValue, value: t } : void 0;
        o = e.computation(i, a), e.sourceValue = i, A(null), r = s && o !== ot && e.equal(t, o);
    }
    catch (i) {
        o = ot, e.error = i;
    }
    finally {
        jt(e, n);
    } if (r) {
        e.value = t;
        return;
    } e.value = o, e.version++; } });
function xT(e) { let t = A(null); try {
    return e();
}
finally {
    A(t);
} }
var ji = class {
    destroyed = !1;
    listeners = null;
    errorHandler = y(Dt, { optional: !0 });
    destroyRef = y(Ue);
    constructor() { this.destroyRef.onDestroy(() => { this.destroyed = !0, this.listeners = null; }); }
    subscribe(t) { if (this.destroyed)
        throw new D(953, !1); return (this.listeners ??= []).push(t), { unsubscribe: () => { let n = this.listeners?.indexOf(t); n !== void 0 && n !== -1 && this.listeners?.splice(n, 1); } }; }
    emit(t) { if (this.destroyed) {
        console.warn(dr(953, !1));
        return;
    } if (this.listeners === null)
        return; let n = A(null); try {
        for (let o of this.listeners)
            try {
                o(t);
            }
            catch (r) {
                this.errorHandler?.handleError(r);
            }
    }
    finally {
        A(n);
    } }
};
function Ex(e) { return e.destroyRef; }
function nt(e) { return xT(e); }
function _e(e, t) { return zi(e, t?.equal); }
var Ix = e => e;
function Yp(e, t) { if (typeof e == "function") {
    let n = Zp(e, Ix, t?.equal);
    return PT(n, t?.debugName);
}
else {
    let n = Zp(e.source, e.computation, e.equal);
    return PT(n, e.debugName);
} }
function PT(e, t) { let n = e[K], o = e; return o.set = r => kT(n, r), o.update = r => OT(n, r), o.asReadonly = ro.bind(e), o; }
function Dx(e) { let t = e.request, n = e.params ?? t ?? (() => null); return new Nc(n, Tx(e), e.defaultValue, e.equal ? Cx(e.equal) : void 0, e.debugName, e.injector ?? y(le)); }
var Kp = class {
    value;
    isLoading;
    constructor(t, n) { this.value = t, this.value.set = this.set.bind(this), this.value.update = this.update.bind(this), this.value.asReadonly = ro, this.isLoading = _e(() => this.status() === "loading" || this.status() === "reloading", void 0); }
    isError = _e(() => this.status() === "error");
    update(t) { this.set(t(nt(this.value))); }
    isValueDefined = _e(() => this.isError() ? !1 : this.value() !== void 0);
    _snapshot;
    get snapshot() { return this._snapshot ??= _e(() => { let t = this.status(); return t === "error" ? { status: "error", error: this.error() } : { status: t, value: this.value() }; }); }
    hasValue() { return this.isValueDefined(); }
    asReadonly() { return this; }
}, Nc = class extends Kp {
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
    constructor(t, n, o, r, i, s, a) { super(_e(() => { let c = this.state().stream?.(); if (!c || this.state().status === "loading" && this.error())
        return o; if (!Jp(c))
        throw new Vi(this.error()); return c.value; }, { equal: r }), i), this.loaderFn = n, this.equal = r, this.debugName = i, this.extRequest = Yp({ source: t, computation: c => ({ request: c, reload: 0 }) }), this.state = Yp({ source: this.extRequest, computation: (c, l) => { if (l) {
            let u = c.request === void 0 ? "idle" : "loading";
            return { extRequest: c, status: u, previousStatus: LT(l.value), stream: l.value.extRequest.request === c.request ? l.value.stream : void 0 };
        }
        else {
            let u = a?.(c.request);
            a = void 0;
            let d = c.request === void 0 ? "idle" : u ? "resolved" : "loading";
            return { extRequest: c, status: d, previousStatus: "idle", stream: u };
        } } }), this.effectRef = ou(this.loadEffect.bind(this), { injector: s, manualCleanup: !0 }), this.pendingTasks = s.get(Rr), this.unregisterOnDestroy = s.get(Ue).onDestroy(() => this.destroy()), this.status = _e(() => LT(this.state()), void 0), this.error = _e(() => { let c = this.state().stream?.(); return c && !Jp(c) ? c.error : void 0; }, void 0); }
    set(t) { if (this.destroyed)
        return; let n = nt(this.error), o = nt(this.state); if (!n) {
        let r = nt(this.value);
        if (o.status === "local" && (this.equal ? this.equal(r, t) : r === t))
            return;
    } this.state.set({ extRequest: o.extRequest, status: "local", previousStatus: "local", stream: Zt({ value: t }, void 0) }), this.abortInProgressLoad(); }
    reload() { let { status: t } = nt(this.state); return t === "idle" || t === "loading" ? !1 : (this.extRequest.update(({ request: n, reload: o }) => ({ request: n, reload: o + 1 })), !0); }
    destroy() { this.destroyed = !0, this.unregisterOnDestroy(), this.effectRef.destroy(), this.abortInProgressLoad(), this.state.set({ extRequest: { request: void 0, reload: 0 }, status: "idle", previousStatus: "idle", stream: void 0 }); }
    loadEffect() { return Qe(this, null, function* () { let t = this.extRequest(), { status: n, previousStatus: o } = nt(this.state); if (t.request === void 0)
        return; if (n !== "loading")
        return; this.abortInProgressLoad(); let r = this.resolvePendingTask = this.pendingTasks.add(), { signal: i } = this.pendingController = new AbortController; try {
        let s = yield nt(() => this.loaderFn({ params: t.request, abortSignal: i, previous: { status: o } }));
        if (i.aborted || nt(this.extRequest) !== t)
            return;
        this.state.set({ extRequest: t, status: "resolved", previousStatus: "resolved", stream: s });
    }
    catch (s) {
        if (i.aborted || nt(this.extRequest) !== t)
            return;
        this.state.set({ extRequest: t, status: "resolved", previousStatus: "error", stream: Zt({ error: eh(s) }, void 0) });
    }
    finally {
        r?.(), r = void 0;
    } }); }
    abortInProgressLoad() { nt(() => this.pendingController?.abort()), this.pendingController = void 0, this.resolvePendingTask?.(), this.resolvePendingTask = void 0; }
};
function Cx(e) { return (t, n) => t === void 0 || n === void 0 ? t === n : e(t, n); }
function Tx(e) { return Mx(e) ? e.stream : t => Qe(null, null, function* () { try {
    return Zt({ value: yield e.loader(t) }, void 0);
}
catch (n) {
    return Zt({ error: eh(n) }, void 0);
} }); }
function Mx(e) { return !!e.stream; }
function LT(e) { switch (e.status) {
    case "loading": return e.extRequest.reload === 0 ? "loading" : "reloading";
    case "resolved": return Jp(e.stream()) ? "resolved" : "error";
    default: return e.status;
} }
function Jp(e) { return e.error === void 0; }
function eh(e) { return Nx(e) ? e : new Xp(e); }
function Nx(e) { return e instanceof Error || typeof e == "object" && typeof e.name == "string" && typeof e.message == "string"; }
var Vi = class extends Error {
    constructor(t) { super(t.message, { cause: t }); }
}, Xp = class extends Error {
    constructor(t) { super(String(t), { cause: t }); }
};
var ih = { JSACTION: "__jsaction", OWNER: "__owner" }, HT = {};
function wx(e) { return e[ih.JSACTION]; }
function FT(e, t) { e[ih.JSACTION] = t; }
function _x(e) { return HT[e]; }
function Sx(e, t) { HT[e] = t; }
var M = { CLICK: "click", CLICKMOD: "clickmod", DBLCLICK: "dblclick", FOCUS: "focus", FOCUSIN: "focusin", BLUR: "blur", FOCUSOUT: "focusout", SUBMIT: "submit", KEYDOWN: "keydown", KEYPRESS: "keypress", KEYUP: "keyup", MOUSEOVER: "mouseover", MOUSEOUT: "mouseout", MOUSEENTER: "mouseenter", MOUSELEAVE: "mouseleave", POINTEROVER: "pointerover", POINTEROUT: "pointerout", POINTERENTER: "pointerenter", POINTERLEAVE: "pointerleave", ERROR: "error", LOAD: "load", TOUCHSTART: "touchstart", TOUCHEND: "touchend", TOUCHMOVE: "touchmove", TOGGLE: "toggle" }, bx = [M.MOUSEENTER, M.MOUSELEAVE, "pointerenter", "pointerleave"], Ax = [M.CLICK, M.DBLCLICK, M.FOCUSIN, M.FOCUSOUT, M.KEYDOWN, M.KEYUP, M.KEYPRESS, M.MOUSEOVER, M.MOUSEOUT, M.SUBMIT, M.TOUCHSTART, M.TOUCHEND, M.TOUCHMOVE, "touchcancel", "auxclick", "change", "compositionstart", "compositionupdate", "compositionend", "beforeinput", "input", "select", "copy", "cut", "paste", "mousedown", "mouseup", "wheel", "contextmenu", "dragover", "dragenter", "dragleave", "drop", "dragstart", "dragend", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerover", "pointerout", "gotpointercapture", "lostpointercapture", "ended", "loadedmetadata", "pagehide", "pageshow", "visibilitychange", "beforematch"], BT = [M.FOCUS, M.BLUR, M.ERROR, M.LOAD, M.TOGGLE], Rc = e => BT.indexOf(e) >= 0, Rx = Ax.concat(BT), UT = e => Rx.indexOf(e) >= 0;
function kx(e) { return e === M.MOUSEENTER ? M.MOUSEOVER : e === M.MOUSELEAVE ? M.MOUSEOUT : e === M.POINTERENTER ? M.POINTEROVER : e === M.POINTERLEAVE ? M.POINTEROUT : e; }
function Ox(e, t, n, o) { let r = !1; Rc(t) && (r = !0); let i = typeof o == "boolean" ? { capture: r, passive: o } : r; return e.addEventListener(t, n, i), { eventType: t, handler: n, capture: r, passive: o }; }
function xx(e, t) { if (e.removeEventListener) {
    let n = typeof t.passive == "boolean" ? { capture: t.capture } : t.capture;
    e.removeEventListener(t.eventType, t.handler, n);
}
else
    e.detachEvent && e.detachEvent(`on${t.eventType}`, t.handler); }
function Px(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1; }
var jT = typeof navigator < "u" && /Macintosh/.test(navigator.userAgent);
function Lx(e) { return e.which === 2 || e.which == null && e.button === 4; }
function Fx(e) { return jT && e.metaKey || !jT && e.ctrlKey || Lx(e) || e.shiftKey; }
function jx(e, t, n) { let o = e.relatedTarget; return (e.type === M.MOUSEOVER && t === M.MOUSEENTER || e.type === M.MOUSEOUT && t === M.MOUSELEAVE || e.type === M.POINTEROVER && t === M.POINTERENTER || e.type === M.POINTEROUT && t === M.POINTERLEAVE) && (!o || o !== n && !n.contains(o)); }
function Vx(e, t) { let n = {}; for (let o in e) {
    if (o === "srcElement" || o === "target")
        continue;
    let r = o, i = e[r];
    typeof i != "function" && (n[r] = i);
} return e.type === M.MOUSEOVER ? n.type = M.MOUSEENTER : e.type === M.MOUSEOUT ? n.type = M.MOUSELEAVE : e.type === M.POINTEROVER ? n.type = M.POINTERENTER : n.type = M.POINTERLEAVE, n.target = n.srcElement = t, n.bubbles = !1, n._originalEvent = e, n; }
var bc = class {
    element;
    handlerInfos = [];
    constructor(t) { this.element = t; }
    addEventListener(t, n, o) { this.handlerInfos.push(Ox(this.element, t, n(this.element), o)); }
    cleanUp() { for (let t = 0; t < this.handlerInfos.length; t++)
        xx(this.element, this.handlerInfos[t]); this.handlerInfos = []; }
}, Hx = { EVENT_ACTION_SEPARATOR: ":" };
function rn(e) { return e.eventType; }
function sh(e, t) { e.eventType = t; }
function _c(e) { return e.event; }
function $T(e, t) { e.event = t; }
function qT(e) { return e.targetElement; }
function GT(e, t) { e.targetElement = t; }
function WT(e) { return e.eic; }
function Bx(e, t) { e.eic = t; }
function Ux(e) { return e.timeStamp; }
function $x(e, t) { e.timeStamp = t; }
function Sc(e) { return e.eia; }
function zT(e, t, n) { e.eia = [t, n]; }
function th(e) { e.eia = void 0; }
function wc(e) { return e[1]; }
function qx(e) { return e.eirp; }
function QT(e, t) { e.eirp = t; }
function ZT(e) { return e.eir; }
function YT(e, t) { e.eir = t; }
function KT(e) { return { eventType: e.eventType, event: e.event, targetElement: e.targetElement, eic: e.eic, eia: e.eia, timeStamp: e.timeStamp, eirp: e.eirp, eiack: e.eiack, eir: e.eir }; }
function Gx(e, t, n, o, r, i, s, a) { return { eventType: e, event: t, targetElement: n, eic: o, timeStamp: r, eia: i, eirp: s, eiack: a }; }
var nh = class e {
    eventInfo;
    constructor(t) { this.eventInfo = t; }
    getEventType() { return rn(this.eventInfo); }
    setEventType(t) { sh(this.eventInfo, t); }
    getEvent() { return _c(this.eventInfo); }
    setEvent(t) { $T(this.eventInfo, t); }
    getTargetElement() { return qT(this.eventInfo); }
    setTargetElement(t) { GT(this.eventInfo, t); }
    getContainer() { return WT(this.eventInfo); }
    setContainer(t) { Bx(this.eventInfo, t); }
    getTimestamp() { return Ux(this.eventInfo); }
    setTimestamp(t) { $x(this.eventInfo, t); }
    getAction() { let t = Sc(this.eventInfo); if (t)
        return { name: t[0], element: t[1] }; }
    setAction(t) { if (!t) {
        th(this.eventInfo);
        return;
    } zT(this.eventInfo, t.name, t.element); }
    getIsReplay() { return qx(this.eventInfo); }
    setIsReplay(t) { QT(this.eventInfo, t); }
    getResolved() { return ZT(this.eventInfo); }
    setResolved(t) { YT(this.eventInfo, t); }
    clone() { return new e(KT(this.eventInfo)); }
}, Wx = {}, zx = /\s*;\s*/, Qx = M.CLICK, oh = class {
    a11yClickSupport = !1;
    clickModSupport = !0;
    syntheticMouseEventSupport;
    updateEventInfoForA11yClick = void 0;
    preventDefaultForA11yClick = void 0;
    populateClickOnlyAction = void 0;
    constructor({ syntheticMouseEventSupport: t = !1, clickModSupport: n = !0 } = {}) { this.syntheticMouseEventSupport = t, this.clickModSupport = n; }
    resolveEventType(t) { this.clickModSupport && rn(t) === M.CLICK && Fx(_c(t)) ? sh(t, M.CLICKMOD) : this.a11yClickSupport && this.updateEventInfoForA11yClick(t); }
    resolveAction(t) { ZT(t) || (this.populateAction(t, qT(t)), YT(t, !0)); }
    resolveParentAction(t) { let n = Sc(t), o = n && wc(n); th(t); let r = o && this.getParentNode(o); r && this.populateAction(t, r); }
    populateAction(t, n) { let o = n; for (; o && o !== WT(t) && (o.nodeType === Node.ELEMENT_NODE && this.populateActionOnElement(o, t), !Sc(t));)
        o = this.getParentNode(o); let r = Sc(t); if (r && (this.a11yClickSupport && this.preventDefaultForA11yClick(t), this.syntheticMouseEventSupport && (rn(t) === M.MOUSEENTER || rn(t) === M.MOUSELEAVE || rn(t) === M.POINTERENTER || rn(t) === M.POINTERLEAVE)))
        if (jx(_c(t), rn(t), wc(r))) {
            let i = Vx(_c(t), wc(r));
            $T(t, i), GT(t, wc(r));
        }
        else
            th(t); }
    getParentNode(t) { let n = t[ih.OWNER]; if (n)
        return n; let o = t.parentNode; return o?.nodeName === "#document-fragment" ? o?.host ?? null : o; }
    populateActionOnElement(t, n) { let o = this.parseActions(t), r = o[rn(n)]; r !== void 0 && zT(n, r, t), this.a11yClickSupport && this.populateClickOnlyAction(t, n, o); }
    parseActions(t) { let n = wx(t); if (!n) {
        let o = t.getAttribute(ao.JSACTION);
        if (!o)
            n = Wx, FT(t, n);
        else {
            if (n = _x(o), !n) {
                n = {};
                let r = o.split(zx);
                for (let i = 0; i < r.length; i++) {
                    let s = r[i];
                    if (!s)
                        continue;
                    let a = s.indexOf(Hx.EVENT_ACTION_SEPARATOR), c = a !== -1, l = c ? s.substr(0, a).trim() : Qx, u = c ? s.substr(a + 1).trim() : s;
                    n[l] = u;
                }
                Sx(o, n);
            }
            FT(t, n);
        }
    } return n; }
    addA11yClickSupport(t, n, o) { this.a11yClickSupport = !0, this.updateEventInfoForA11yClick = t, this.preventDefaultForA11yClick = n, this.populateClickOnlyAction = o; }
}, JT = (function (e) { return e[e.I_AM_THE_JSACTION_FRAMEWORK = 0] = "I_AM_THE_JSACTION_FRAMEWORK", e; })(JT || {}), rh = class {
    dispatchDelegate;
    actionResolver;
    eventReplayer;
    eventReplayScheduled = !1;
    replayEventInfoWrappers = [];
    constructor(t, { actionResolver: n, eventReplayer: o } = {}) { this.dispatchDelegate = t, this.actionResolver = n, this.eventReplayer = o; }
    dispatch(t) { let n = new nh(t); this.actionResolver?.resolveEventType(t), this.actionResolver?.resolveAction(t); let o = n.getAction(); if (o && Zx(o.element, n) && Px(n.getEvent()), this.eventReplayer && n.getIsReplay()) {
        this.scheduleEventInfoWrapperReplay(n);
        return;
    } this.dispatchDelegate(n); }
    scheduleEventInfoWrapperReplay(t) { this.replayEventInfoWrappers.push(t), !this.eventReplayScheduled && (this.eventReplayScheduled = !0, Promise.resolve().then(() => { this.eventReplayScheduled = !1, this.eventReplayer(this.replayEventInfoWrappers); })); }
};
function Zx(e, t) { return e.tagName === "A" && (t.getEventType() === M.CLICK || t.getEventType() === M.CLICKMOD); }
var XT = Symbol.for("propagationStopped"), ah = { REPLAY: 101 };
var Yx = "`preventDefault` called during event replay.";
var Kx = "`composedPath` called during event replay.", Ac = class {
    dispatchDelegate;
    clickModSupport;
    actionResolver;
    dispatcher;
    constructor(t, n = !0) { this.dispatchDelegate = t, this.clickModSupport = n, this.actionResolver = new oh({ clickModSupport: n }), this.dispatcher = new rh(o => { this.dispatchToDelegate(o); }, { actionResolver: this.actionResolver }); }
    dispatch(t) { this.dispatcher.dispatch(t); }
    dispatchToDelegate(t) { for (t.getIsReplay() && eP(t), Jx(t); t.getAction();) {
        if (tP(t), Rc(t.getEventType()) && t.getAction().element !== t.getTargetElement() || (this.dispatchDelegate(t.getEvent(), t.getAction().name), Xx(t)))
            return;
        this.actionResolver.resolveParentAction(t.eventInfo);
    } }
};
function Jx(e) { let t = e.getEvent(), n = e.getEvent().stopPropagation.bind(t), o = () => { t[XT] = !0, n(); }; qn(t, "stopPropagation", o), qn(t, "stopImmediatePropagation", o); }
function Xx(e) { return !!e.getEvent()[XT]; }
function eP(e) { let t = e.getEvent(), n = e.getTargetElement(), o = t.preventDefault.bind(t); qn(t, "target", n), qn(t, "eventPhase", ah.REPLAY), qn(t, "preventDefault", () => { throw o(), new Error(Yx + ""); }), qn(t, "composedPath", () => { throw new Error(Kx + ""); }); }
function tP(e) { let t = e.getEvent(), n = e.getAction()?.element; n && qn(t, "currentTarget", n, { configurable: !0 }); }
function qn(e, t, n, { configurable: o = !1 } = {}) { Object.defineProperty(e, t, { value: n, configurable: o }); }
function eM(e, t) { e.ecrd(n => { t.dispatch(n); }, JT.I_AM_THE_JSACTION_FRAMEWORK); }
function nP(e) { return e?.q ?? []; }
function oP(e) { e && (VT(e.c, e.et, e.h), VT(e.c, e.etc, e.h, !0)); }
function VT(e, t, n, o) { for (let r = 0; r < t.length; r++)
    e.removeEventListener(t[r], n, o); }
var rP = !1, tM = (() => { class e {
    static MOUSE_SPECIAL_SUPPORT = rP;
    containerManager;
    eventHandlers = {};
    browserEventTypeToExtraEventTypes = {};
    dispatcher = null;
    queuedEventInfos = [];
    constructor(n) { this.containerManager = n; }
    handleEvent(n, o, r) { let i = Gx(n, o, o.target, r, Date.now()); this.handleEventInfo(i); }
    handleEventInfo(n) { if (!this.dispatcher) {
        QT(n, !0), this.queuedEventInfos?.push(n);
        return;
    } this.dispatcher(n); }
    addEvent(n, o, r) { if (n in this.eventHandlers || !this.containerManager || !e.MOUSE_SPECIAL_SUPPORT && bx.indexOf(n) >= 0)
        return; let i = (a, c, l) => { this.handleEvent(a, c, l); }; this.eventHandlers[n] = i; let s = kx(o || n); if (s !== n) {
        let a = this.browserEventTypeToExtraEventTypes[s] || [];
        a.push(n), this.browserEventTypeToExtraEventTypes[s] = a;
    } this.containerManager.addEventListener(s, a => c => { i(n, c, a); }, r); }
    replayEarlyEvents(n = window._ejsa) { n && (this.replayEarlyEventInfos(n.q), oP(n), delete window._ejsa); }
    replayEarlyEventInfos(n) { for (let o = 0; o < n.length; o++) {
        let r = n[o], i = this.getEventTypesForBrowserEventType(r.eventType);
        for (let s = 0; s < i.length; s++) {
            let a = KT(r);
            sh(a, i[s]), this.handleEventInfo(a);
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
function nM(e, t = window) { return nP(t._ejsas?.[e]); }
function ch(e, t = window) { t._ejsas && (t._ejsas[e] = void 0); }
function iP(e) { }
import "@angular/core/primitives/signals";
import "@angular/core/primitives/di";
typeof globalThis.ngServerMode > "u" && (globalThis.ngServerMode = typeof window > "u");
var jc = Symbol("InputSignalNode#UNSET"), TM = se(H({}, Qi), { transformFn: void 0, applyValueToInputSignal(e, t) { ln(e, t); } }), n1 = Symbol();
function MM(e, t) { let n = Object.create(TM); n.value = e, n.transformFn = t?.transform; function o() { if (Ft(n), n.value === jc) {
    let r = null;
    throw new D(-950, r);
} return n.value; } return o[K] = n, o; }
var er = (function (e) { return e[e.Directive = 0] = "Directive", e[e.Component = 1] = "Component", e[e.Injectable = 2] = "Injectable", e[e.Pipe = 3] = "Pipe", e[e.NgModule = 4] = "NgModule", e; })(er || {});
var sP = (function (e) { return e.Angular = "angular", e.ACX = "acx", e.Wiz = "wiz", e; })(sP || {}), oM = class {
    attributeName;
    constructor(t) { this.attributeName = t; }
    __NG_ELEMENT_ID__ = () => Ta(this.attributeName);
    toString() { return `HostAttributeToken ${this.attributeName}`; }
}, o1 = (() => { let e = new T(""); return e.__NG_ELEMENT_ID__ = t => { let n = _(); if (n === null)
    throw new D(-204, !1); if (n.type & 2)
    return n.value; if (t & 8)
    return null; throw new D(-204, !1); }, e; })();
function r1(e) { return new ji; }
function rM(e, t) { return MM(e, t); }
function aP(e) { return MM(jc, e); }
var i1 = (rM.required = aP, rM);
function iM(e, t) { return Vf(t); }
function cP(e, t) { return Hf(t); }
var s1 = (iM.required = cP, iM);
function a1(e, t) { return Bf(t); }
function sM(e, t) { return Vf(t); }
function lP(e, t) { return Hf(t); }
var c1 = (sM.required = lP, sM);
function l1(e, t) { return Bf(t); }
function NM(e, t) { let n = Object.create(TM), o = new ji; n.value = e; function r() { return Ft(n), aM(n.value), n.value; } return r[K] = n, r.asReadonly = ro.bind(r), r.set = i => { n.equal(n.value, i) || (ln(n, i), o.emit(i)); }, r.update = i => { aM(n.value), r.set(i(n.value)); }, r.subscribe = o.subscribe.bind(o), r.destroyRef = o.destroyRef, r; }
function aM(e) { if (e === jc)
    throw new D(952, !1); }
function cM(e, t) { return NM(e, t); }
function uP(e) { return NM(jc, e); }
var u1 = (cM.required = uP, cM), wM = !0, nr = class {
}, d1 = bt("ContentChildren", (e, t = {}) => H({ selector: e, first: !1, isViewQuery: !1, descendants: !1, emitDistinctChangesOnly: wM }, t), nr), f1 = bt("ContentChild", (e, t = {}) => H({ selector: e, first: !0, isViewQuery: !1, descendants: !0 }, t), nr), p1 = bt("ViewChildren", (e, t = {}) => H({ selector: e, first: !1, isViewQuery: !0, descendants: !0, emitDistinctChangesOnly: wM }, t), nr), h1 = bt("ViewChild", (e, t) => H({ selector: e, first: !0, isViewQuery: !0, descendants: !0 }, t), nr);
function dP(e, t, n) { let o = new Ao(n); return Promise.resolve(o); }
function lM(e) { for (let t = e.length - 1; t >= 0; t--)
    if (e[t] !== void 0)
        return e[t]; }
var fP = (() => { class e {
    zone = y(G);
    changeDetectionScheduler = y(Pe);
    applicationRef = y(We);
    applicationErrorHandler = y(Tt);
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
} return e; })(), pP = new T("", { factory: () => !1 });
function hP({ ngZoneFactory: e, scheduleInRootZone: t }) { return e ??= () => new G(se(H({}, _M()), { scheduleInRootZone: t })), [{ provide: so, useValue: !1 }, { provide: G, useFactory: e }, { provide: je, multi: !0, useFactory: () => { let n = y(fP, { optional: !0 }); return () => n.initialize(); } }, { provide: je, multi: !0, useFactory: () => { let n = y(gP); return () => { n.initialize(); }; } }, { provide: Ms, useValue: t ?? Kl }]; }
function g1(e) { let t = e?.scheduleInRootZone, n = hP({ ngZoneFactory: () => { let o = _M(e); return o.scheduleInRootZone = t, o.shouldCoalesceEventChangeDetection && X("NgZone_CoalesceEvent"), new G(o); }, scheduleInRootZone: t }); return Ke([{ provide: pP, useValue: !0 }, n]); }
function _M(e) { return { enableLongStackTrace: !1, shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1, shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1 }; }
var gP = (() => { class e {
    subscription = new Gn;
    initialized = !1;
    zone = y(G);
    pendingTasks = y(Ct);
    initialize() { if (this.initialized)
        return; this.initialized = !0; let n = null; !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (n = this.pendingTasks.add()), this.zone.runOutsideAngular(() => { this.subscription.add(this.zone.onStable.subscribe(() => { G.assertNotInAngularZone(), queueMicrotask(() => { n !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(n), n = null); }); })); }), this.subscription.add(this.zone.onUnstable.subscribe(() => { G.assertInAngularZone(), n ??= this.pendingTasks.add(); })); }
    ngOnDestroy() { this.subscription.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = U({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
var Oc = new T(""), mP = new T("");
function Hi(e) { return !e.moduleRef; }
function SM(e) { let t = Hi(e) ? e.r3Injector : e.moduleRef.injector, n = t.get(G); return n.run(() => { Hi(e) ? e.r3Injector.resolveInjectorInitializers() : e.moduleRef.resolveInjectorInitializers(); let o = t.get(Tt), r; if (n.runOutsideAngular(() => { r = n.onError.subscribe({ next: o }); }), Hi(e)) {
    let i = () => t.destroy(), s = e.platformInjector.get(Oc);
    s.add(i), t.onDestroy(() => { r.unsubscribe(), s.delete(i); });
}
else {
    let i = () => e.moduleRef.destroy(), s = e.platformInjector.get(Oc);
    s.add(i), e.moduleRef.onDestroy(() => { Vr(e.allPlatformModules, e.moduleRef), r.unsubscribe(), s.delete(i); });
} return yP(o, n, () => { let i = t.get(Ct), s = i.add(), a = t.get(op); return a.runInitializers(), a.donePromise.then(() => { let c = t.get(zp, Pi); if (wD(c || Pi), !t.get(mP, !0))
    return Hi(e) ? t.get(We) : (e.allPlatformModules.push(e.moduleRef), e.moduleRef); if (Hi(e)) {
    let u = t.get(We);
    return e.rootComponent !== void 0 && u.bootstrap(e.rootComponent), u;
}
else
    return bM?.(e.moduleRef, e.allPlatformModules), e.moduleRef; }).finally(() => { i.remove(s); }); }); }); }
var bM;
function uM() { bM = vP; }
function vP(e, t) { let n = e.injector.get(We); if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach(o => n.bootstrap(o));
else if (e.instance.ngDoBootstrap)
    e.instance.ngDoBootstrap(n);
else
    throw new D(-403, !1); t.push(e); }
function yP(e, t, n) { try {
    let o = n();
    return tp(o) ? o.catch(r => { throw t.runOutsideAngular(() => e(r)), r; }) : o;
}
catch (o) {
    throw t.runOutsideAngular(() => e(o)), o;
} }
var AM = (() => { class e {
    _injector;
    _modules = [];
    _destroyListeners = [];
    _destroyed = !1;
    constructor(n) { this._injector = n; }
    bootstrapModuleFactory(n, o) { let r = [Mc(), ...o?.applicationProviders ?? [], nu], i = sI(n.moduleType, this.injector, r); return uM(), SM({ moduleRef: i, allPlatformModules: this._modules, platformInjector: this.injector }); }
    bootstrapModule(n, o = []) { let r = ip({}, o); return uM(), dP(this.injector, r, n).then(i => this.bootstrapModuleFactory(i, r)); }
    onDestroy(n) { this._destroyListeners.push(n); }
    get injector() { return this._injector; }
    destroy() { if (this._destroyed)
        throw new D(404, !1); this._modules.slice().forEach(o => o.destroy()), this._destroyListeners.forEach(o => o()); let n = this._injector.get(Oc, null); n && (n.forEach(o => o()), n.clear()), this._destroyed = !0; }
    get destroyed() { return this._destroyed; }
    static \u0275fac = function (o) { return new (o || e)(he(le)); };
    static \u0275prov = U({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })(), tr = null;
function EP(e) { if (Vc())
    throw new D(400, !1); rp(), tr = typeof ngServerMode > "u" || !ngServerMode ? e : null; let t = e.get(AM); return kM(e), t; }
function IP(e, t, n = []) { let o = `Platform: ${t}`, r = new T(o); return (i = []) => { let s = Vc(); if (!s) {
    let a = [...n, ...i, { provide: r, useValue: !0 }];
    s = e?.(a) ?? EP(RM(a, o));
} return typeof ngServerMode < "u" && ngServerMode ? s : DP(r); }; }
function RM(e = [], t) { return le.create({ name: t, providers: [{ provide: yl, useValue: "platform" }, { provide: Oc, useValue: new Set([() => tr = null]) }, ...e] }); }
function DP(e) { let t = Vc(); if (!t)
    throw new D(-401, !1); return t; }
function Vc() { return typeof ngServerMode < "u" && ngServerMode ? null : tr?.get(AM) ?? null; }
function m1() { Vc()?.destroy(); }
function CP(e = []) { if (tr)
    return tr; let t = RM(e); return (typeof ngServerMode > "u" || !ngServerMode) && (tr = t), rp(), kM(t), t; }
function v1(e) { return { provide: xd, useValue: e, multi: !0 }; }
function kM(e) { let t = e.get(xd, null); ds(e, () => { t?.forEach(n => n()); }); }
function y1(e) { return Ke([]); }
function E1() { return !1; }
function I1() { }
var kc = new WeakSet, dM = "";
function fM(e) { return e.get(ka, Hd); }
function TP() { let e = [{ provide: ka, useFactory: () => { let t = !0; if (typeof ngServerMode > "u" || !ngServerMode) {
            let n = y(At);
            t = !!window._ejsas?.[n];
        } return t && X("NgEventReplay"), t; } }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: je, useValue: () => { let t = y(We), { injector: n } = t; if (!kc.has(t)) {
        let o = y(Ii);
        if (fM(n)) {
            wv();
            let r = n.get(At), i = Mv(r, (s, a, c) => { s.nodeType === Node.ELEMENT_NODE && (Tv(s, a, c), $d(s, o)); });
            t.onDestroy(i);
        }
    } }, multi: !0 }, { provide: ki, useFactory: () => { let t = y(We), { injector: n } = t; return () => { if (!fM(n) || kc.has(t))
        return; kc.add(t); let o = n.get(At); t.onDestroy(() => { kc.delete(t), typeof ngServerMode < "u" && !ngServerMode && ch(o); }), t.whenStable().then(() => { if (t.destroyed)
        return; let r = n.get(Gd); MP(r, n); let i = n.get(Ii); i.get(dM)?.forEach(qd), i.delete(dM); let s = r.instance; Di(n) ? t.onDestroy(() => s.cleanUp()) : s.cleanUp(); }); }; }, multi: !0 }), e; }
var MP = (e, t) => { let n = t.get(At), o = window._ejsas[n], r = e.instance = new tM(new bc(o.c)); for (let a of o.et)
    r.addEvent(a); for (let a of o.etc)
    r.addEvent(a); let i = nM(n); r.replayEarlyEventInfos(i), ch(n); let s = new Ac(a => { wP(t, a, a.currentTarget); }); eM(r, s); };
function NP(e, t, n) { let o = new Map, r = t[Ut], i = e.cleanup; if (!i || !r)
    return o; for (let s = 0; s < i.length;) {
    let a = i[s++], c = i[s++];
    if (typeof a != "string")
        continue;
    let l = a;
    if (!UT(l))
        continue;
    Rc(l) ? n.capture.add(l) : n.regular.add(l);
    let u = L(t[c]);
    s++;
    let d = i[s++];
    (typeof d == "boolean" || d >= 0) && (o.has(u) ? o.get(u).push(l) : o.set(u, [l]));
} return o; }
function wP(e, t, n) { let o = (n && n.getAttribute(Bo)) ?? ""; /d\d+/.test(o) ? _P(o, e, t, n) : t.eventPhase === ah.REPLAY && Wd(t, n); }
function _P(e, t, n, o) { let r = t.get(Ev); r.push({ event: n, currentTarget: o }), xt(t, e, SP(r)); }
function SP(e) { return t => { let n = new Set(t), o = []; for (let { event: r, currentTarget: i } of e) {
    let s = i.getAttribute(Bo);
    n.has(s) ? Wd(r, i) : o.push({ event: r, currentTarget: i });
} e.length = 0, e.push(...o); }; }
var pM = !1, hM = !1, gM = !1, bP = 1e4;
function AP() { pM || (pM = !0, kv(), ED(), lC(), ID(), EI(), WE(), CE(), Vy()); }
function RP() { hM || (hM = !0, SD(), pE(), yE()); }
function kP() { gM || (gM = !0, Bv()); }
function OP(e) { return e.whenStable(); }
var D1 = "ngcm";
function C1() { let e = [{ provide: Vn, useFactory: () => { let t = !0; return (typeof ngServerMode > "u" || !ngServerMode) && (t = !!y(jo, { optional: !0 })?.get(Oa, null)), t && X("NgHydration"), t; } }, { provide: je, useValue: () => { if (Sf(!1), typeof ngServerMode < "u" && ngServerMode)
            return; let t = y(Qt); y(Vn) && ($v(t), AP()); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: jd, useFactory: () => y(Vn) }, { provide: ki, useFactory: () => { let t = y(Pe); if (y(Vn)) {
        let n = y(We);
        return () => { OP(n).then(() => { n.destroyed || (bf(n), t.notify(7)); }); };
    } return () => { }; }, multi: !0 }), Ke(e); }
function T1() { return [{ provide: Vd, useFactory: () => y(Vn) }, { provide: je, useValue: () => { y(Vn) && (RP(), Sf(!0), X("NgI18nHydration")); }, multi: !0 }]; }
function M1() { let e = [TP(), { provide: Bd, useValue: !0 }, { provide: Rt, useClass: _v }, { provide: je, useValue: () => { kP(), X("NgIncrementalHydration"); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: ki, useFactory: () => { let t = y(le), n = y(Qt); return () => { let o = Uv(t), r = uE(n, n.body); UI(t, o, r), Vv(n, t); }; }, multi: !0 }), e; }
var mM = bP - 1e3, dh = class {
    openTasks = new Map;
    add(t) { this.openTasks.set(t, new Error("Task stack tracking error")); }
    remove(t) { this.openTasks.delete(t); }
};
function N1() { let e = new dh, { openTasks: t } = e; return Ke([{ provide: Jl, useValue: e }, LI(() => { console.warn("Stability debugging utility was provided in production mode. This will cause debug code to be included in production bundles. If this is intentional because you are debugging stability issues in a production environment, you can ignore this warning."); let n = y(G), o = y(We), r = null; typeof Zone < "u" && n.run(() => { r = Zone.current.get("TaskTrackingZone"); }), n.runOutsideAngular(() => { let i = setTimeout(() => { if (console.debug(`---- Application did not stabilize within ${mM / 1e3} seconds ----`), typeof Zone < "u" && !r && console.info('Zone.js is present but no TaskTrackingZone found. To enable better debugging of tasks in the Angular Zone, import "zone.js/plugins/task-tracking" in your application.'), r?.macroTasks?.length) {
        console.group("Macrotasks keeping Angular Zone unstable:");
        for (let s of r?.macroTasks ?? [])
            console.debug(s.creationLocation.stack);
        console.groupEnd();
    } console.group("PendingTasks keeping application unstable:"); for (let s of t.values())
        console.debug(s.stack); console.groupEnd(); }, mM); o.whenStable().then(() => { clearTimeout(i); }); }); })]); }
function w1(e) { let t = $f(e); if (!t)
    throw OM(e); return new Ao(t); }
function _1(e) { let t = $f(e); if (!t)
    throw OM(e); return t; }
function OM(e) { return new D(920, !1); }
var xP = (() => { class e {
    static __NG_ELEMENT_ID__ = PP;
} return e; })();
function PP(e) { return LP(_(), g(), (e & 16) === 16); }
function LP(e, t, n) { if (Te(e) && !n) {
    let o = Ee(e.index, t);
    return new tn(o, o);
}
else if (e.type & 175) {
    let o = t[te];
    return new tn(o, t);
} return null; }
var fh = class extends xP {
}, vM = class extends fh {
}, xc = class {
    supports(t) { return ri(t); }
    create(t) { return new ph(t); }
}, FP = (e, t) => t, ph = class {
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
    constructor(t) { this._trackByFn = t || FP; }
    forEachItem(t) { let n; for (n = this._itHead; n !== null; n = n._next)
        t(n); }
    forEachOperation(t) { let n = this._itHead, o = this._removalsHead, r = 0, i = null; for (; n || o;) {
        let s = !o || n && n.currentIndex < yM(o, r, i) ? n : o, a = yM(s, r, i), c = s.currentIndex;
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
    diff(t) { if (t == null && (t = []), !ri(t))
        throw new D(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._itHead, o = !1, r, i, s; if (Array.isArray(t)) {
        this.length = t.length;
        for (let a = 0; a < this.length; a++)
            i = t[a], s = this._trackByFn(a, i), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, i, s, a), o = !0) : (o && (n = this._verifyReinsertion(n, i, s, a)), Object.is(n.item, i) || this._addIdentityChange(n, i)), n = n._next;
    }
    else
        r = 0, RE(t, a => { s = this._trackByFn(r, a), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, a, s, r), o = !0) : (o && (n = this._verifyReinsertion(n, a, s, r)), Object.is(n.item, a) || this._addIdentityChange(n, a)), n = n._next, r++; }), this.length = r; return this._truncate(n), this.collection = t, this.isDirty; }
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
    _mismatch(t, n, o, r) { let i; return t === null ? i = this._itTail : (i = t._prev, this._remove(t)), t = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, i, r)) : (t = this._linkedRecords === null ? null : this._linkedRecords.get(o, r), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, i, r)) : t = this._addAfter(new hh(n, o), i, r)), t; }
    _verifyReinsertion(t, n, o, r) { let i = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null); return i !== null ? t = this._reinsertAfter(i, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t; }
    _truncate(t) { for (; t !== null;) {
        let n = t._next;
        this._addToRemovals(this._unlink(t)), t = n;
    } this._unlinkedRecords !== null && this._unlinkedRecords.clear(), this._additionsTail !== null && (this._additionsTail._nextAdded = null), this._movesTail !== null && (this._movesTail._nextMoved = null), this._itTail !== null && (this._itTail._next = null), this._removalsTail !== null && (this._removalsTail._nextRemoved = null), this._identityChangesTail !== null && (this._identityChangesTail._nextIdentityChange = null); }
    _reinsertAfter(t, n, o) { this._unlinkedRecords !== null && this._unlinkedRecords.remove(t); let r = t._prevRemoved, i = t._nextRemoved; return r === null ? this._removalsHead = i : r._nextRemoved = i, i === null ? this._removalsTail = r : i._prevRemoved = r, this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _moveAfter(t, n, o) { return this._unlink(t), this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _addAfter(t, n, o) { return this._insertAfter(t, n, o), this._additionsTail === null ? this._additionsTail = this._additionsHead = t : this._additionsTail = this._additionsTail._nextAdded = t, t; }
    _insertAfter(t, n, o) { let r = n === null ? this._itHead : n._next; return t._next = r, t._prev = n, r === null ? this._itTail = t : r._prev = t, n === null ? this._itHead = t : n._next = t, this._linkedRecords === null && (this._linkedRecords = new Pc), this._linkedRecords.put(t), t.currentIndex = o, t; }
    _remove(t) { return this._addToRemovals(this._unlink(t)); }
    _unlink(t) { this._linkedRecords !== null && this._linkedRecords.remove(t); let n = t._prev, o = t._next; return n === null ? this._itHead = o : n._next = o, o === null ? this._itTail = n : o._prev = n, t; }
    _addToMoves(t, n) { return t.previousIndex === n || (this._movesTail === null ? this._movesTail = this._movesHead = t : this._movesTail = this._movesTail._nextMoved = t), t; }
    _addToRemovals(t) { return this._unlinkedRecords === null && (this._unlinkedRecords = new Pc), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, this._removalsTail === null ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t; }
    _addIdentityChange(t, n) { return t.item = n, this._identityChangesTail === null ? this._identityChangesTail = this._identityChangesHead = t : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = t, t; }
}, hh = class {
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
}, gh = class {
    _head = null;
    _tail = null;
    add(t) { this._head === null ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t); }
    get(t, n) { let o; for (o = this._head; o !== null; o = o._nextDup)
        if ((n === null || n <= o.currentIndex) && Object.is(o.trackById, t))
            return o; return null; }
    remove(t) { let n = t._prevDup, o = t._nextDup; return n === null ? this._head = o : n._nextDup = o, o === null ? this._tail = n : o._prevDup = n, this._head === null; }
}, Pc = class {
    map = new Map;
    put(t) { let n = t.trackById, o = this.map.get(n); o || (o = new gh, this.map.set(n, o)), o.add(t); }
    get(t, n) { let o = t, r = this.map.get(o); return r ? r.get(t, n) : null; }
    remove(t) { let n = t.trackById; return this.map.get(n).remove(t) && this.map.delete(n), t; }
    get isEmpty() { return this.map.size === 0; }
    clear() { this.map.clear(); }
};
function yM(e, t, n) { let o = e.previousIndex; if (o === null)
    return o; let r = 0; return n && o < n.length && (r = n[o]), o + t + r; }
var Lc = class {
    supports(t) { return t instanceof Map || lc(t); }
    create() { return new mh; }
}, mh = class {
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
    else if (!(t instanceof Map || lc(t)))
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
    } let o = new vh(t); return this._records.set(t, o), o.currentValue = n, this._addToAdditions(o), o; }
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
}, vh = class {
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
function EM() { return new xM([new xc]); }
var xM = (() => { class e {
    factories;
    static \u0275prov = U({ token: e, providedIn: "root", factory: EM });
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o != null) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = y(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || EM()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o != null)
        return o; throw new D(901, !1); }
} return e; })();
function IM() { return new PM([new Lc]); }
var PM = (() => { class e {
    static \u0275prov = U({ token: e, providedIn: "root", factory: IM });
    factories;
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = y(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || IM()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o)
        return o; throw new D(901, !1); }
} return e; })(), jP = [new Lc], VP = [new xc], S1 = new xM(VP), b1 = new PM(jP), A1 = IP(null, "core", []), R1 = (() => { class e {
    constructor(n) { }
    static \u0275fac = function (o) { return new (o || e)(he(We)); };
    static \u0275mod = Gf({ type: e });
    static \u0275inj = gr({});
} return e; })();
function k1(e) { let { rootComponent: t, appProviders: n, platformProviders: o, platformRef: r } = e; if (V(O.BootstrapApplicationStart), typeof ngServerMode < "u" && ngServerMode && !r)
    throw new D(-401, !1); try {
    let i = r?.injector ?? CP(o), s = [Mc(), nu, ...n || []], a = new si({ providers: s, parent: i, debugName: "", runEnvironmentInitializers: !1 });
    return SM({ r3Injector: a.injector, platformInjector: i, rootComponent: t });
}
catch (i) {
    return Promise.reject(i);
}
finally {
    V(O.BootstrapApplicationEnd);
} }
var yh = class {
    views = [];
    indexByContent = new Map;
    add(t) { let n = JSON.stringify(t); if (!this.indexByContent.has(n)) {
        let o = this.views.length;
        return this.views.push(t), this.indexByContent.set(n, o), o;
    } return this.indexByContent.get(n); }
    getAll() { return this.views; }
}, HP = 0;
function LM(e) { return e.ssrId || (e.ssrId = `t${HP++}`), e.ssrId; }
function FM(e, t, n) { let o = []; return No(e, t, n, o), o.length; }
function BP(e) { let t = []; return tc(e, t), t.length; }
function jM(e, t) { let n = e[q]; return n && !n.hasAttribute(Lo) ? Fc(n, e, null, t) : null; }
function VM(e, t) { let n = Nr(e[q]), o = jM(n, t); if (o === null)
    return; let r = L(n[q]), i = e[Q], s = Fc(r, i, null, t), a = n[w], c = `${o}|${s}`; a.setAttribute(r, yo, c); }
function O1(e, t) { let n = e.injector, o = hE(n), r = Di(n), i = new yh, s = new Map, a = e._views, c = n.get(ka, Hd), l = { regular: new Set, capture: new Set }, u = new Map; e.injector.get(At); for (let p of a) {
    let h = zd(p);
    if (h !== null) {
        let v = { serializedViewCollection: i, corruptedTextNodes: s, isI18nHydrationEnabled: o, isIncrementalHydrationEnabled: r, i18nChildren: new Map, eventTypesToReplay: l, shouldReplayEvents: c, deferBlocks: u };
        J(h) ? VM(h, v) : jM(h, v), WP(s, t);
    }
} let d = i.getAll(), f = n.get(jo); if (f.set(Oa, d), u.size > 0) {
    let p = {};
    for (let [h, v] of u.entries())
        p[h] = v;
    f.set(xa, p);
} return l; }
function UP(e, t, n, o, r) { let i = [], s = ""; for (let a = W; a < e.length; a++) {
    let c = e[a], l, u, d;
    if (ct(c) && (c = c[I], J(c))) {
        u = BP(c) + 1, VM(c, r);
        let p = Nr(c[q]);
        d = { [ba]: p[m].ssrId, [_t]: u };
    }
    if (!d) {
        let p = c[m];
        p.type === 1 ? (l = p.ssrId, u = 1) : (l = LM(p), u = FM(p, c, p.firstChild)), d = { [ba]: l, [_t]: u };
        let h = !1;
        if (MI(n[m], t)) {
            let v = Me(n, t), E = pe(n[m], t);
            if (r.isIncrementalHydrationEnabled && E.hydrateTriggers !== null) {
                let C = `d${r.deferBlocks.size}`;
                E.hydrateTriggers.has(7) && (h = !0);
                let k = [];
                tc(e, k);
                let ne = { [_t]: k.length, [yi]: v[Ot] }, ze = $P(E.hydrateTriggers);
                ze.length > 0 && (ne[Ei] = ze), o !== null && (ne[Fd] = o), r.deferBlocks.set(C, ne);
                let xe = L(e);
                xe !== void 0 ? xe.nodeType === Node.COMMENT_NODE && DM(xe, C) : DM(xe, C), h || QP(E, k, C, r), o = C, d[Ra] = C;
            }
            d[yi] = v[Ot];
        }
        h || Object.assign(d, HM(e[a], o, r));
    }
    let f = JSON.stringify(d);
    if (i.length > 0 && f === s) {
        let p = i[i.length - 1];
        p[mi] ??= 1, p[mi]++;
    }
    else
        s = f, i.push(d);
} return i; }
function $P(e) { let t = new Set([0, 1, 2, 5]), n = []; for (let [o, r] of e)
    t.has(o) && (r === null ? n.push(o) : r.type === 5 ? n.push({ trigger: o, delay: r.delay }) : n.push({ trigger: o, intersectionObserverOptions: r.intersectionObserverOptions })); return n; }
function Bi(e, t, n, o) { let r = t.index - I; e[vi] ??= {}, e[vi][r] ??= lE(t, n, o); }
function lh(e, t) { let n = typeof t == "number" ? t : t.index - I; e[Ho] ??= [], e[Ho].includes(n) || e[Ho].push(n); }
function HM(e, t = null, n) { let o = {}, r = e[m], i = gE(r, n), s = n.shouldReplayEvents ? NP(r, e, n.eventTypesToReplay) : null; for (let a = I; a < r.bindingStartIndex; a++) {
    let c = r.data[a], l = a - I, u = mE(e, a, n);
    if (u) {
        o[Aa] ??= {}, o[Aa][l] = u.caseQueue;
        for (let d of u.disconnectedNodes)
            lh(o, d);
        for (let d of u.disjointNodes) {
            let f = r.data[d + I];
            Bi(o, f, e, i);
        }
        continue;
    }
    if (Ca(c) && !Uo(c)) {
        if (J(e[a]) && c.tView && (o[Sa] ??= {}, o[Sa][l] = LM(c.tView)), Zo(c, e) && zP(c)) {
            lh(o, c);
            continue;
        }
        if (Array.isArray(c.projection)) {
            for (let d of c.projection)
                if (d)
                    if (!Array.isArray(d))
                        !Tl(d) && !Fo(d) && (Zo(d, e) ? lh(o, d) : Bi(o, d, e, i));
                    else
                        throw eE(L(e[a]));
        }
        if (qP(o, c, e, i), J(e[a])) {
            let d = e[a][q];
            if (Array.isArray(d)) {
                let f = L(d);
                f.hasAttribute(Lo) || Fc(f, d, t, n);
            }
            o[Vo] ??= {}, o[Vo][l] = UP(e[a], c, e, t, n);
        }
        else if (Array.isArray(e[a]) && !$m(c)) {
            let d = L(e[a][q]);
            d.hasAttribute(Lo) || Fc(d, e[a], t, n);
        }
        else if (c.type & 8)
            o[gi] ??= {}, o[gi][l] = FM(r, e, c.child);
        else if (c.type & 144) {
            let d = c.next;
            for (; d !== null && d.type & 144;)
                d = d.next;
            d && !Fo(d) && Bi(o, d, e, i);
        }
        else if (c.type & 1) {
            let d = L(e[a]);
            Zd(n, d);
        }
        if (s && c.type & 2) {
            let d = L(e[a]);
            s.has(d) && Ud(d, s.get(d), t);
        }
    }
} return o; }
function qP(e, t, n, o) { Tl(t) || (t.projectionNext && t.projectionNext !== t.next && !Fo(t.projectionNext) && Bi(e, t.projectionNext, n, o), t.prev === null && t.parent !== null && Zo(t.parent, n) && !Zo(t, n) && Bi(e, t, n, o)); }
function GP(e) { let t = e[$]; if (!t?.constructor)
    return !1; let n = z(t.constructor); return n?.encapsulation === qe.ShadowDom || n?.encapsulation === qe.ExperimentalIsolatedShadowDom; }
function Fc(e, t, n, o) { let r = t[w]; if (Zh(t) && !ic() || GP(t))
    return r.setAttribute(e, Lo, ""), null; {
    let i = HM(t, n, o), s = o.serializedViewCollection.add(i);
    return r.setAttribute(e, yo, s.toString()), s;
} }
function DM(e, t) { e.textContent = `ngh=${t}`; }
function WP(e, t) { for (let [n, o] of e)
    n.after(t.createComment(o)); }
function zP(e) { let t = e; for (; t != null;) {
    if (Te(t))
        return !0;
    t = t.parent;
} return !1; }
function QP(e, t, n, o) { let r = jv(e.hydrateTriggers); for (let i of r)
    o.eventTypesToReplay.regular.add(i); if (r.length > 0) {
    let i = t.filter(s => s.nodeType === Node.ELEMENT_NODE);
    for (let s of i)
        Ud(s, r, n);
} }
function x1(e) { return typeof e == "boolean" ? e : e != null && e !== "false"; }
function P1(e, t = NaN) { return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t; }
var ZP = "\u{1F170}\uFE0F", Hc = !1;
function L1(e) { if (!Hc)
    return; let { startLabel: t } = BM(e); performance.mark(t); }
function F1(e) { if (!Hc)
    return; let { startLabel: t, labelName: n, endLabel: o } = BM(e); performance.mark(o), performance.measure(n, t, o), performance.clearMarks(t), performance.clearMarks(o); }
function BM(e) { let t = `${ZP}:${e}`; return { labelName: t, startLabel: `start:${t}`, endLabel: `end:${t}` }; }
var CM = !1;
function j1() { if (!CM && (typeof performance > "u" || !performance.mark || !performance.measure)) {
    CM = !0, console.warn("Performance API is not supported on this platform");
    return;
} Hc = !0; }
function V1() { Hc = !1; }
function H1(e) { }
function B1(e) { return ie({ usage: 1, kind: "directive", type: e.type }).compileDirectiveDeclaration(De, `ng:///${e.type.name}/\u0275fac.js`, e); }
function U1(e) { Kf(e.type, e.decorators, e.ctorParameters ?? null, e.propDecorators ?? null); }
function $1(e) { AI(e.type, e.resolveDeferredDeps, (...t) => { let n = e.resolveMetadata(...t); Kf(e.type, n.decorators, n.ctorParameters, n.propDecorators); }); }
function q1(e) { return ie({ usage: 1, kind: "component", type: e.type }).compileComponentDeclaration(De, `ng:///${e.type.name}/\u0275cmp.js`, e); }
function G1(e) { return ie({ usage: 1, kind: YP(e.target), type: e.type }).compileFactoryDeclaration(De, `ng:///${e.type.name}/\u0275fac.js`, e); }
function YP(e) { switch (e) {
    case er.Directive: return "directive";
    case er.Component: return "component";
    case er.Injectable: return "injectable";
    case er.Pipe: return "pipe";
    case er.NgModule: return "NgModule";
} }
function W1(e) { return ie({ usage: 1, kind: "injectable", type: e.type }).compileInjectableDeclaration(De, `ng:///${e.type.name}/\u0275prov.js`, e); }
function z1(e) { return ie({ usage: 1, kind: "NgModule", type: e.type }).compileInjectorDeclaration(De, `ng:///${e.type.name}/\u0275inj.js`, e); }
function Q1(e) { return ie({ usage: 1, kind: "NgModule", type: e.type }).compileNgModuleDeclaration(De, `ng:///${e.type.name}/\u0275mod.js`, e); }
function Z1(e) { return ie({ usage: 1, kind: "pipe", type: e.type }).compilePipeDeclaration(De, `ng:///${e.type.name}/\u0275pipe.js`, e); }
var uh = Symbol("NOT_SET"), UM = new Set, KP = se(H({}, Qi), { kind: "afterRenderEffectPhase", consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !0, value: uh, cleanup: null, consumerMarkedDirty() { if (this.sequence.impl.executing) {
        if (this.sequence.lastPhase === null || this.sequence.lastPhase < this.phase)
            return;
        this.sequence.erroredOrDestroyed = !0;
    } this.sequence.scheduler.notify(7); }, phaseFn(e) { if (this.sequence.lastPhase = this.phase, !this.dirty)
        return this.signal; if (this.dirty = !1, this.value !== uh && !zn(this))
        return this.signal; try {
        for (let r of this.cleanup ?? UM)
            r();
    }
    finally {
        this.cleanup?.clear();
    } let t = []; e !== void 0 && t.push(e), t.push(this.registerCleanupFn); let n = vt(this), o; try {
        o = this.userFn.apply(null, t);
    }
    finally {
        jt(this, n);
    } return (this.value === uh || !this.equal(this.value, o)) && (this.value = o, this.version++), this.signal; } }), Eh = class extends Jr {
    scheduler;
    lastPhase = null;
    nodes = [void 0, void 0, void 0, void 0];
    onDestroyFns = null;
    constructor(t, n, o, r, i, s = null) { super(t, [void 0, void 0, void 0, void 0], o, !1, i.get(Ue), s), this.scheduler = r; for (let a of pf) {
        let c = n[a];
        if (c === void 0)
            continue;
        let l = Object.create(KP);
        l.sequence = this, l.phase = a, l.userFn = c, l.dirty = !0, l.signal = () => (Ft(l), l.value), l.signal[K] = l, l.registerCleanupFn = u => (l.cleanup ??= new Set).add(u), this.nodes[a] = l, this.hooks[a] = u => l.phaseFn(u);
    } }
    afterRun() { super.afterRun(), this.lastPhase = null; }
    destroy() { if (this.onDestroyFns !== null)
        for (let t of this.onDestroyFns)
            t(); super.destroy(); for (let t of this.nodes)
        if (t)
            try {
                for (let n of t.cleanup ?? UM)
                    n();
            }
            finally {
                Vt(t);
            } }
};
function Y1(e, t) { if (typeof ngServerMode < "u" && ngServerMode)
    return Ga; let n = t?.injector ?? y(le), o = n.get(Pe), r = n.get(qa), i = n.get(Un, null, { optional: !0 }); r.impl ??= n.get(hf); let s = e; typeof s == "function" && (s = { mixedReadWrite: e }); let a = n.get(io, null, { optional: !0 }), c = new Eh(r.impl, [s.earlyRead, s.write, s.mixedReadWrite, s.read], a?.view, o, n, i?.snapshot(null)); return r.impl.register(c), c; }
function K1(e) { return new Ih(Jf(e) ? e : _e(e)); }
var Ih = class {
    snapshot;
    constructor(t) { this.snapshot = t; }
    get state() { return this.snapshot(); }
    value = _e(() => { if (this.state.status === "error")
        throw new Vi(this.state.error); return this.state.value; });
    status = _e(() => this.state.status);
    error = _e(() => this.state.status === "error" ? this.state.error : void 0);
    isLoading = _e(() => this.state.status === "loading" || this.state.status === "reloading");
    isValueDefined = _e(() => this.state.status !== "error" && this.state.value !== void 0);
    hasValue() { return this.isValueDefined(); }
};
function J1(e, t) { let n = z(e), o = t.elementInjector || eo(); return new nn(n).create(o, t.projectableNodes, t.hostElement, t.environmentInjector, t.directives, t.bindings); }
function X1(e) { let t = z(e); if (!t)
    return null; let n = new nn(t); return { get selector() { return n.selector; }, get type() { return n.componentType; }, get inputs() { return n.inputs; }, get outputs() { return n.outputs; }, get ngContentSelectors() { return n.ngContentSelectors; }, get isStandalone() { return t.standalone; }, get isSignal() { return t.signals; } }; }
function e0(...e) { return e.reduce((t, n) => Object.assign(t, n, { providers: [...t.providers, ...n.providers] }), { providers: [] }); }
var t0 = new T("", { providedIn: "platform", factory: () => null }), n0 = new T("", { providedIn: "platform", factory: () => null }), o0 = new T("", { providedIn: "platform", factory: () => null });
export { Zw as ANIMATION_MODULE_TYPE, ki as APP_BOOTSTRAP_LISTENER, At as APP_ID, np as APP_INITIALIZER, op as ApplicationInitStatus, R1 as ApplicationModule, We as ApplicationRef, tv as Attribute, bT as COMPILER_OPTIONS, Yw as CSP_NONCE, D_ as CUSTOM_ELEMENTS_SCHEMA, Na as ChangeDetectionStrategy, xP as ChangeDetectorRef, cx as Compiler, Sd as CompilerFactory, tx as Component, cc as ComponentFactory, bi as ComponentFactoryResolver, NE as ComponentRef, f1 as ContentChild, d1 as ContentChildren, dx as DEFAULT_CURRENCY_CODE, Qt as DOCUMENT, jn as DebugElement, bd as DebugEventListener, di as DebugNode, ph as DefaultIterableDiffer, Ue as DestroyRef, ST as Directive, je as ENVIRONMENT_INITIALIZER, hi as ElementRef, vM as EmbeddedViewRef, Se as EnvironmentInjector, Dt as ErrorHandler, yt as EventEmitter, o1 as HOST_TAG_NAME, xm as Host, oM as HostAttributeToken, ix as HostBinding, sx as HostListener, gl as INJECTOR, Am as Inject, Iw as Injectable, T as InjectionToken, le as Injector, ox as Input, xM as IterableDiffers, PM as KeyValueDiffers, zp as LOCALE_ID, Iy as MAX_ANIMATION_TIMEOUT, RT as MissingTranslationStrategy, Da as ModuleWithComponentFactories, C_ as NO_ERRORS_SCHEMA, ax as NgModule, rI as NgModuleFactory, So as NgModuleRef, G as NgZone, Rm as Optional, rx as Output, ji as OutputEmitterRef, Qw as PLATFORM_ID, xd as PLATFORM_INITIALIZER, Rr as PendingTasks, nx as Pipe, AM as PlatformRef, nr as Query, Xs as QueryList, t0 as REQUEST, o0 as REQUEST_CONTEXT, n0 as RESPONSE_INIT, uA as Renderer2, oi as RendererFactory2, ra as RendererStyleFlags2, wE as Sanitizer, Hn as SecurityContext, km as Self, Qs as SimpleChange, Om as SkipSelf, fx as TRANSLATIONS, px as TRANSLATIONS_FORMAT, ei as TemplateRef, zR as Testability, OI as TestabilityRegistry, jo as TransferState, Pm as Type, Qc as VERSION, Yi as Version, h1 as ViewChild, p1 as ViewChildren, dc as ViewContainerRef, qe as ViewEncapsulation, fh as ViewRef, Ny as afterEveryRender, gf as afterNextRender, Y1 as afterRenderEffect, hx as asNativeElements, NN as assertInInjectionContext, jN as assertNotInReactiveContext, DP as assertPlatform, x1 as booleanAttribute, _e as computed, c1 as contentChild, l1 as contentChildren, J1 as createComponent, qf as createEnvironmentInjector, iI as createNgModule, sR as createNgModuleRef, EP as createPlatform, IP as createPlatformFactory, m1 as destroyPlatform, ou as effect, I1 as enableProdMode, $R as enableProfiling, pr as forwardRef, fi as getDebugNode, w1 as getModuleFactory, _1 as getNgModuleById, Vc as getPlatform, Gh as importProvidersFrom, y as inject, i1 as input, VE as inputBinding, E1 as isDevMode, Jf as isSignal, Er as isStandalone, Xf as isWritableSignal, Yp as linkedSignal, Ke as makeEnvironmentProviders, Jw as makeStateKey, e0 as mergeApplicationConfig, u1 as model, P1 as numberAttribute, r1 as output, HE as outputBinding, A1 as platformCore, LI as provideAppInitializer, LN as provideBrowserGlobalErrorListeners, y1 as provideCheckNoChangesConfig, qh as provideEnvironmentInitializer, oS as provideNgReflectAttributes, v1 as providePlatformInitializer, N1 as provideStabilityDebugging, g1 as provideZoneChangeDetection, lx as provideZonelessChangeDetection, X1 as reflectComponentType, x as resolveForwardRef, Dx as resource, K1 as resourceFromSnapshots, ds as runInInjectionContext, xI as setTestabilityGetter, Zt as signal, kA as twoWayBinding, nt as untracked, s1 as viewChild, a1 as viewChildren, Ey as \u0275ANIMATIONS_DISABLED, fv as \u0275AcxChangeDetectionStrategy, pv as \u0275AcxViewEncapsulation, qa as \u0275AfterRenderManager, D1 as \u0275CLIENT_RENDER_MODE_FLAG, W as \u0275CONTAINER_HEADER_OFFSET, Pe as \u0275ChangeDetectionScheduler, cc as \u0275ComponentFactory, UR as \u0275Console, Pi as \u0275DEFAULT_LOCALE_ID, _I as \u0275DEFER_BLOCK_CONFIG, FR as \u0275DEFER_BLOCK_DEPENDENCY_INTERCEPTOR, Rt as \u0275DEHYDRATED_BLOCK_REGISTRY, Zf as \u0275DeferBlockBehavior, Z as \u0275DeferBlockState, mP as \u0275ENABLE_ROOT_COMPONENT_BOOTSTRAP, Ev as \u0275EVENT_REPLAY_QUEUE, Ns as \u0275EffectScheduler, sP as \u0275Framework, xv as \u0275HydrationStatus, Kw as \u0275IMAGE_CONFIG, hv as \u0275IMAGE_CONFIG_DEFAULTS, yl as \u0275INJECTOR_SCOPE, n1 as \u0275INPUT_SIGNAL_BRAND_WRITE_TYPE, Tt as \u0275INTERNAL_APPLICATION_ERROR_HANDLER, Xw as \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION, Vn as \u0275IS_HYDRATION_DOM_REUSE_ENABLED, Bd as \u0275IS_INCREMENTAL_HYDRATION_ENABLED, Ii as \u0275JSACTION_BLOCK_ELEMENT_MAP, Gd as \u0275JSACTION_EVENT_CONTRACT, ea as \u0275LContext, Ro as \u0275LocaleDataIndex, hn as \u0275NG_COMP_DEF, vr as \u0275NG_DIR_DEF, gn as \u0275NG_ELEMENT_ID, sr as \u0275NG_INJ_DEF, os as \u0275NG_MOD_DEF, yr as \u0275NG_PIPE_DEF, Kn as \u0275NG_PROV_DEF, Us as \u0275NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, B as \u0275NO_CHANGE, Ao as \u0275NgModuleFactory, ur as \u0275NoopNgZone, ZP as \u0275PERFORMANCE_MARK_PREFIX, pP as \u0275PROVIDED_NG_ZONE, HN as \u0275PROVIDED_ZONELESS, Ct as \u0275PendingTasksInternal, O as \u0275ProfilerEvent, pn as \u0275R3Injector, zs as \u0275ReflectionCapabilities, nn as \u0275Render3ComponentFactory, fa as \u0275Render3ComponentRef, bo as \u0275Render3NgModuleRef, Nc as \u0275ResourceImpl, D as \u0275RuntimeError, K as \u0275SIGNAL, Av as \u0275SSR_CONTENT_INTEGRITY_MARKER, RI as \u0275TESTABILITY, kI as \u0275TESTABILITY_GETTER, wI as \u0275TimerScheduler, $a as \u0275TracingAction, Un as \u0275TracingService, tn as \u0275ViewRef, ts as \u0275XSS_SECURITY_URL, so as \u0275ZONELESS_ENABLED, ey as \u0275_sanitizeHtml, Ci as \u0275_sanitizeUrl, kn as \u0275allLeavingAnimations, qo as \u0275allowSanitizationBypassAndThrow, O1 as \u0275annotateForHydration, H1 as \u0275assertType, S_ as \u0275bypassSanitizationTrustHtml, k_ as \u0275bypassSanitizationTrustResourceUrl, A_ as \u0275bypassSanitizationTrustScript, b_ as \u0275bypassSanitizationTrustStyle, R_ as \u0275bypassSanitizationTrustUrl, tR as \u0275clearResolutionOfComponentResourcesQueue, yT as \u0275compileComponent, Wp as \u0275compileDirective, mT as \u0275compileNgModule, vT as \u0275compileNgModuleDefs, dP as \u0275compileNgModuleFactory, _T as \u0275compilePipe, dn as \u0275convertToBitFlags, ol as \u0275createInjector, CP as \u0275createOrReusePlatformInjector, S1 as \u0275defaultIterableDiffers, b1 as \u0275defaultKeyValueDiffers, wo as \u0275depsTracker, kE as \u0275devModeEqual, V1 as \u0275disableProfiling, j1 as \u0275enableProfiling, eh as \u0275encapsulateResourceError, yp as \u0275findLocaleData, hT as \u0275flushModuleScopingQueueAsMuchAsPossible, dr as \u0275formatRuntimeError, UO as \u0275generateStandaloneInDeclarationsError, BR as \u0275getAsyncClassMetadataFn, OA as \u0275getClosestComponentName, z as \u0275getComponentDef, Gs as \u0275getDeferBlocks, Vw as \u0275getDirectives, _a as \u0275getDocument, Bw as \u0275getHostElement, mr as \u0275getInjectableDef, we as \u0275getLContext, Ck as \u0275getLocaleCurrencyCode, CD as \u0275getLocalePluralCase, Ex as \u0275getOutputDestroyRef, Qv as \u0275getSanitizationBypassType, qR as \u0275getTransferState, M_ as \u0275getUnknownElementStrictMode, w_ as \u0275getUnknownPropertyStrictMode, be as \u0275global, BE as \u0275inferTagNameFromDefinition, PP as \u0275injectChangeDetectorRef, k1 as \u0275internalCreateApplication, hP as \u0275internalProvideZoneChangeDetection, FI as \u0275isBoundToModule, eR as \u0275isComponentDefPendingResolution, ll as \u0275isEnvironmentProviders, iN as \u0275isInjectable, Mn as \u0275isNgModule, tp as \u0275isPromise, PI as \u0275isSubscribable, pb as \u0275isViewDirty, hb as \u0275markForRefresh, ht as \u0275noSideEffects, qp as \u0275patchComponentDefWithScope, X as \u0275performanceMarkFeature, gc as \u0275promiseWithResolvers, Mc as \u0275provideZonelessChangeDetectionInternal, GR as \u0275publishExternalGlobalUtil, l_ as \u0275readHydrationInfo, Dk as \u0275registerLocaleData, Nt as \u0275renderDeferBlockState, GO as \u0275resetCompiledComponents, d_ as \u0275resetIncrementalHydrationEnabledWarnedForTests, HO as \u0275resetJitOptions, eI as \u0275resolveComponentResources, nR as \u0275restoreComponentResolutionQueue, iR as \u0275setAllowDuplicateNgModuleIdsForTest, iP as \u0275setAlternateWeakRefImpl, uT as \u0275setClassDebugInfo, Kf as \u0275setClassMetadata, AI as \u0275setClassMetadataAsync, rt as \u0275setCurrentInjector, Ww as \u0275setDocument, cN as \u0275setInjectorProfilerContext, wD as \u0275setLocaleId, T_ as \u0275setUnknownElementStrictMode, N_ as \u0275setUnknownPropertyStrictMode, L1 as \u0275startMeasuring, F1 as \u0275stopMeasuring, wr as \u0275store, fr as \u0275stringify, Gp as \u0275transitiveScopesFor, mc as \u0275triggerResourceLoading, oN as \u0275truncateMiddle, Tk as \u0275unregisterLocaleData, kt as \u0275unwrapSafeValue, FN as \u0275unwrapWritableSignal, C1 as \u0275withDomHydration, TP as \u0275withEventReplay, T1 as \u0275withI18nSupport, M1 as \u0275withIncrementalHydration, pI as \u0275\u0275ControlFeature, jC as \u0275\u0275ExternalStylesFeature, er as \u0275\u0275FactoryTarget, hI as \u0275\u0275HostDirectivesFeature, Wf as \u0275\u0275InheritDefinitionFeature, Fm as \u0275\u0275NgOnChangesFeature, FC as \u0275\u0275ProvidersFeature, vy as \u0275\u0275advance, Hr as \u0275\u0275animateEnter, Br as \u0275\u0275animateEnterListener, Ur as \u0275\u0275animateLeave, ga as \u0275\u0275animateLeaveListener, sp as \u0275\u0275ariaProperty, xC as \u0275\u0275arrowFunction, TC as \u0275\u0275attachSourceLocations, ap as \u0275\u0275attribute, XD as \u0275\u0275classMap, Rp as \u0275\u0275classProp, fD as \u0275\u0275componentInstance, hD as \u0275\u0275conditional, vc as \u0275\u0275conditionalBranchCreate, pD as \u0275\u0275conditionalCreate, wp as \u0275\u0275contentQuery, Sp as \u0275\u0275contentQuerySignal, LE as \u0275\u0275control, xE as \u0275\u0275controlCreate, $p as \u0275\u0275declareLet, $I as \u0275\u0275defer, bI as \u0275\u0275deferEnableTimerScheduling, zI as \u0275\u0275deferHydrateNever, iD as \u0275\u0275deferHydrateOnHover, YI as \u0275\u0275deferHydrateOnIdle, XI as \u0275\u0275deferHydrateOnImmediate, cD as \u0275\u0275deferHydrateOnInteraction, nD as \u0275\u0275deferHydrateOnTimer, dD as \u0275\u0275deferHydrateOnViewport, WI as \u0275\u0275deferHydrateWhen, oD as \u0275\u0275deferOnHover, QI as \u0275\u0275deferOnIdle, KI as \u0275\u0275deferOnImmediate, sD as \u0275\u0275deferOnInteraction, eD as \u0275\u0275deferOnTimer, lD as \u0275\u0275deferOnViewport, rD as \u0275\u0275deferPrefetchOnHover, ZI as \u0275\u0275deferPrefetchOnIdle, JI as \u0275\u0275deferPrefetchOnImmediate, aD as \u0275\u0275deferPrefetchOnInteraction, tD as \u0275\u0275deferPrefetchOnTimer, uD as \u0275\u0275deferPrefetchOnViewport, GI as \u0275\u0275deferPrefetchWhen, qI as \u0275\u0275deferWhen, aI as \u0275\u0275defineComponent, lI as \u0275\u0275defineDirective, U as \u0275\u0275defineInjectable, gr as \u0275\u0275defineInjector, Gf as \u0275\u0275defineNgModule, uI as \u0275\u0275definePipe, Yo as \u0275\u0275directiveInject, Ol as \u0275\u0275disableBindings, up as \u0275\u0275domElement, hp as \u0275\u0275domElementContainer, pp as \u0275\u0275domElementContainerEnd, Cc as \u0275\u0275domElementContainerStart, Ic as \u0275\u0275domElementEnd, Ec as \u0275\u0275domElementStart, Mp as \u0275\u0275domListener, mp as \u0275\u0275domProperty, Qf as \u0275\u0275domTemplate, lp as \u0275\u0275element, fp as \u0275\u0275elementContainer, xi as \u0275\u0275elementContainerEnd, Dc as \u0275\u0275elementContainerStart, yc as \u0275\u0275elementEnd, ci as \u0275\u0275elementStart, kl as \u0275\u0275enableBindings, lT as \u0275\u0275getComponentDepsFactory, DD as \u0275\u0275getCurrentView, Xm as \u0275\u0275getInheritedFactory, dT as \u0275\u0275getReplaceMetadataURL, FD as \u0275\u0275i18n, VD as \u0275\u0275i18nApply, jD as \u0275\u0275i18nAttributes, Ip as \u0275\u0275i18nEnd, Dp as \u0275\u0275i18nExp, HD as \u0275\u0275i18nPostprocess, Ep as \u0275\u0275i18nStart, he as \u0275\u0275inject, Ta as \u0275\u0275injectAttribute, MC as \u0275\u0275interpolate, NC as \u0275\u0275interpolate1, wC as \u0275\u0275interpolate2, _C as \u0275\u0275interpolate3, SC as \u0275\u0275interpolate4, bC as \u0275\u0275interpolate5, AC as \u0275\u0275interpolate6, RC as \u0275\u0275interpolate7, kC as \u0275\u0275interpolate8, OC as \u0275\u0275interpolateV, _E as \u0275\u0275invalidFactory, as as \u0275\u0275invalidFactoryDep, Cp as \u0275\u0275listener, GD as \u0275\u0275loadQuery, Ql as \u0275\u0275namespaceHTML, zl as \u0275\u0275namespaceMathML, Wl as \u0275\u0275namespaceSVG, BD as \u0275\u0275nextContext, U1 as \u0275\u0275ngDeclareClassMetadata, $1 as \u0275\u0275ngDeclareClassMetadataAsync, q1 as \u0275\u0275ngDeclareComponent, B1 as \u0275\u0275ngDeclareDirective, G1 as \u0275\u0275ngDeclareFactory, W1 as \u0275\u0275ngDeclareInjectable, z1 as \u0275\u0275ngDeclareInjector, Q1 as \u0275\u0275ngDeclareNgModule, Z1 as \u0275\u0275ngDeclarePipe, nT as \u0275\u0275pipe, oT as \u0275\u0275pipeBind1, rT as \u0275\u0275pipeBind2, iT as \u0275\u0275pipeBind3, sT as \u0275\u0275pipeBind4, aT as \u0275\u0275pipeBindV, $D as \u0275\u0275projection, UD as \u0275\u0275projectionDef, cp as \u0275\u0275property, BC as \u0275\u0275pureFunction0, UC as \u0275\u0275pureFunction1, $C as \u0275\u0275pureFunction2, qC as \u0275\u0275pureFunction3, GC as \u0275\u0275pureFunction4, WC as \u0275\u0275pureFunction5, zC as \u0275\u0275pureFunction6, QC as \u0275\u0275pureFunction7, ZC as \u0275\u0275pureFunction8, YC as \u0275\u0275pureFunctionV, WD as \u0275\u0275queryAdvance, qD as \u0275\u0275queryRefresh, CC as \u0275\u0275readContextLet, zD as \u0275\u0275reference, Uf as \u0275\u0275registerNgModuleType, yD as \u0275\u0275repeater, vD as \u0275\u0275repeaterCreate, mD as \u0275\u0275repeaterTrackByIdentity, gD as \u0275\u0275repeaterTrackByIndex, fT as \u0275\u0275replaceMetadata, Ll as \u0275\u0275resetView, of as \u0275\u0275resolveBody, py as \u0275\u0275resolveDocument, fy as \u0275\u0275resolveWindow, Pl as \u0275\u0275restoreView, iy as \u0275\u0275sanitizeHtml, nf as \u0275\u0275sanitizeResourceUrl, ay as \u0275\u0275sanitizeScript, sy as \u0275\u0275sanitizeStyle, tf as \u0275\u0275sanitizeUrl, uy as \u0275\u0275sanitizeUrlOrResourceUrl, VC as \u0275\u0275setComponentScope, HC as \u0275\u0275setNgModuleScope, DC as \u0275\u0275storeLet, JD as \u0275\u0275styleMap, Ap as \u0275\u0275styleProp, Tp as \u0275\u0275syntheticHostListener, vp as \u0275\u0275syntheticHostProperty, zf as \u0275\u0275template, cT as \u0275\u0275templateRefExtractor, aC as \u0275\u0275text, kp as \u0275\u0275textInterpolate, Tc as \u0275\u0275textInterpolate1, Op as \u0275\u0275textInterpolate2, xp as \u0275\u0275textInterpolate3, Pp as \u0275\u0275textInterpolate4, Lp as \u0275\u0275textInterpolate5, Fp as \u0275\u0275textInterpolate6, jp as \u0275\u0275textInterpolate7, Vp as \u0275\u0275textInterpolate8, Hp as \u0275\u0275textInterpolateV, cy as \u0275\u0275trustConstantHtml, ly as \u0275\u0275trustConstantResourceUrl, EC as \u0275\u0275twoWayBindingSet, Up as \u0275\u0275twoWayListener, Bp as \u0275\u0275twoWayProperty, dy as \u0275\u0275validateAttribute, _p as \u0275\u0275viewQuery, bp as \u0275\u0275viewQuerySignal };
/*! Bundled license information:

@angular/core/fesm2022/_effect-chunk.mjs:
@angular/core/fesm2022/_not_found-chunk.mjs:
@angular/core/fesm2022/_effect-chunk2.mjs:
@angular/core/fesm2022/_attribute-chunk.mjs:
@angular/core/fesm2022/_debug_node-chunk.mjs:
@angular/core/fesm2022/_untracked-chunk.mjs:
@angular/core/fesm2022/_resource-chunk.mjs:
@angular/core/fesm2022/primitives-event-dispatch.mjs:
@angular/core/fesm2022/_weak_ref-chunk.mjs:
@angular/core/fesm2022/core.mjs:
  (**
   * @license Angular v21.2.10
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
