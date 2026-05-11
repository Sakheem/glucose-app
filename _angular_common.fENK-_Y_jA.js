import { a as Y, b as K, g as ze } from "@nf-internal/chunk-UMZMRDSE";
import * as _ from "@angular/core";
import { InjectionToken as Gt, inject as Ye, DOCUMENT as Ht, \u0275\u0275inject as Wt } from "@angular/core";
import * as me from "@angular/core";
import { InjectionToken as Ut, inject as Ve, DOCUMENT as jt } from "@angular/core";
var Ge = null;
function X() { return Ge; }
function zt(e) { Ge ??= e; }
var pe = class {
}, x = (() => { class e {
    historyGo(t) { throw new Error(""); }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = me.\u0275\u0275defineInjectable({ token: e, factory: () => Ve(He), providedIn: "platform" });
} return e; })(), Vt = new Ut(""), He = (() => { class e extends x {
    _location;
    _history;
    _doc = Ve(jt);
    constructor() { super(), this._location = window.location, this._history = window.history; }
    getBaseHrefFromDOM() { return X().getBaseHref(this._doc); }
    onPopState(t) { let n = X().getGlobalEventTarget(this._doc, "window"); return n.addEventListener("popstate", t, !1), () => n.removeEventListener("popstate", t); }
    onHashChange(t) { let n = X().getGlobalEventTarget(this._doc, "window"); return n.addEventListener("hashchange", t, !1), () => n.removeEventListener("hashchange", t); }
    get href() { return this._location.href; }
    get protocol() { return this._location.protocol; }
    get hostname() { return this._location.hostname; }
    get port() { return this._location.port; }
    get pathname() { return this._location.pathname; }
    get search() { return this._location.search; }
    get hash() { return this._location.hash; }
    set pathname(t) { this._location.pathname = t; }
    pushState(t, n, r) { this._history.pushState(t, n, r); }
    replaceState(t, n, r) { this._history.replaceState(t, n, r); }
    forward() { this._history.forward(); }
    back() { this._history.back(); }
    historyGo(t = 0) { this._history.go(t); }
    getState() { return this._history.state; }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = me.\u0275\u0275defineInjectable({ token: e, factory: () => new e, providedIn: "platform" });
} return e; })();
function q(e, i) { return e ? i ? e.endsWith("/") ? i.startsWith("/") ? e + i.slice(1) : e + i : i.startsWith("/") ? e + i : `${e}/${i}` : e : i; }
function We(e) { let i = e.search(/#|\?|$/); return e[i - 1] === "/" ? e.slice(0, i - 1) + e.slice(i) : e; }
function S(e) { return e && e[0] !== "?" ? `?${e}` : e; }
var B = (() => { class e {
    historyGo(t) { throw new Error(""); }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = _.\u0275\u0275defineInjectable({ token: e, factory: () => Ye(Q), providedIn: "root" });
} return e; })(), J = new Gt(""), Q = (() => { class e extends B {
    _platformLocation;
    _baseHref;
    _removeListenerFns = [];
    constructor(t, n) { super(), this._platformLocation = t, this._baseHref = n ?? this._platformLocation.getBaseHrefFromDOM() ?? Ye(Ht).location?.origin ?? ""; }
    ngOnDestroy() { for (; this._removeListenerFns.length;)
        this._removeListenerFns.pop()(); }
    onPopState(t) { this._removeListenerFns.push(this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)); }
    getBaseHref() { return this._baseHref; }
    prepareExternalUrl(t) { return q(this._baseHref, t); }
    path(t = !1) { let n = this._platformLocation.pathname + S(this._platformLocation.search), r = this._platformLocation.hash; return r && t ? `${n}${r}` : n; }
    pushState(t, n, r, o) { let s = this.prepareExternalUrl(r + S(o)); this._platformLocation.pushState(t, n, s); }
    replaceState(t, n, r, o) { let s = this.prepareExternalUrl(r + S(o)); this._platformLocation.replaceState(t, n, s); }
    forward() { this._platformLocation.forward(); }
    back() { this._platformLocation.back(); }
    getState() { return this._platformLocation.getState(); }
    historyGo(t = 0) { this._platformLocation.historyGo?.(t); }
    static \u0275fac = function (n) { return new (n || e)(_.\u0275\u0275inject(x), _.\u0275\u0275inject(J, 8)); };
    static \u0275prov = _.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), Zt = (() => { class e extends Q {
    prepareExternalUrl(t) { let n = Ke(t); return n.endsWith("/") && n.length > 1 && (t = n.slice(0, -1) + t.slice(n.length)), super.prepareExternalUrl(t); }
    static \u0275fac = (() => { let t; return function (r) { return (t || (t = _.\u0275\u0275getInheritedFactory(e)))(r || e); }; })();
    static \u0275prov = _.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), Yt = (() => { class e extends Q {
    prepareExternalUrl(t) { let n = Ke(t); return n.endsWith("/") || (t = n + "/" + t.slice(n.length)), super.prepareExternalUrl(t); }
    static \u0275fac = (() => { let t; return function (r) { return (t || (t = _.\u0275\u0275getInheritedFactory(e)))(r || e); }; })();
    static \u0275prov = _.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function Ke(e) { let i = e.search(/[?#]/), t = i > -1 ? i : e.length; return e.slice(0, t); }
var Ce = (() => { class e {
    _subject = new ze;
    _basePath;
    _locationStrategy;
    _urlChangeListeners = [];
    _urlChangeSubscription = null;
    constructor(t) { this._locationStrategy = t; let n = this._locationStrategy.getBaseHref(); this._basePath = qt(We(Ze(n))), this._locationStrategy.onPopState(r => { this._subject.next({ url: this.path(!0), pop: !0, state: r.state, type: r.type }); }); }
    ngOnDestroy() { this._urlChangeSubscription?.unsubscribe(), this._urlChangeListeners = []; }
    path(t = !1) { return this.normalize(this._locationStrategy.path(t)); }
    getState() { return this._locationStrategy.getState(); }
    isCurrentPathEqualTo(t, n = "") { return this.path() == this.normalize(t + S(n)); }
    normalize(t) { return e.stripTrailingSlash(Xt(this._basePath, Ze(t))); }
    prepareExternalUrl(t) { return t && t[0] !== "/" && (t = "/" + t), this._locationStrategy.prepareExternalUrl(t); }
    go(t, n = "", r = null) { this._locationStrategy.pushState(r, "", t, n), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + S(n)), r); }
    replaceState(t, n = "", r = null) { this._locationStrategy.replaceState(r, "", t, n), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + S(n)), r); }
    forward() { this._locationStrategy.forward(); }
    back() { this._locationStrategy.back(); }
    historyGo(t = 0) { this._locationStrategy.historyGo?.(t); }
    onUrlChange(t) { return this._urlChangeListeners.push(t), this._urlChangeSubscription ??= this.subscribe(n => { this._notifyUrlChangeListeners(n.url, n.state); }), () => { let n = this._urlChangeListeners.indexOf(t); this._urlChangeListeners.splice(n, 1), this._urlChangeListeners.length === 0 && (this._urlChangeSubscription?.unsubscribe(), this._urlChangeSubscription = null); }; }
    _notifyUrlChangeListeners(t = "", n) { this._urlChangeListeners.forEach(r => r(t, n)); }
    subscribe(t, n, r) { return this._subject.subscribe({ next: t, error: n ?? void 0, complete: r ?? void 0 }); }
    static normalizeQueryParams = S;
    static joinWithSlash = q;
    static stripTrailingSlash = We;
    static \u0275fac = function (n) { return new (n || e)(_.\u0275\u0275inject(B)); };
    static \u0275prov = _.\u0275\u0275defineInjectable({ token: e, factory: () => Kt(), providedIn: "root" });
} return e; })();
function Kt() { return new Ce(Wt(B)); }
function Xt(e, i) { if (!e || !i.startsWith(e))
    return i; let t = i.substring(e.length); return t === "" || ["/", ";", "?", "#"].includes(t[0]) ? t : i; }
function Ze(e) { return e.replace(/\/index.html$/, ""); }
function qt(e) { if (new RegExp("^(https?:)?//").test(e)) {
    let [, t] = e.split(/\/\/[^\/]+/);
    return t;
} return e; }
import * as a from "@angular/core";
import { \u0275getLocalePluralCase as Jt, \u0275getLocaleCurrencyCode as Qt, \u0275findLocaleData as y, \u0275LocaleDataIndex as f, \u0275RuntimeError as b, \u0275formatRuntimeError as cr, LOCALE_ID as $, inject as be, createNgModule as en, NgModuleRef as tn, RendererStyleFlags2 as nn, Injector as rn, isSignal as Dr, \u0275INTERNAL_APPLICATION_ERROR_HANDLER as on, \u0275isPromise as sn, \u0275isSubscribable as an, untracked as Xe, InjectionToken as rt, DEFAULT_CURRENCY_CODE as un } from "@angular/core";
var cn = (() => { class e extends B {
    _platformLocation;
    _baseHref = "";
    _removeListenerFns = [];
    constructor(t, n) { super(), this._platformLocation = t, n != null && (this._baseHref = n); }
    ngOnDestroy() { for (; this._removeListenerFns.length;)
        this._removeListenerFns.pop()(); }
    onPopState(t) { this._removeListenerFns.push(this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)); }
    getBaseHref() { return this._baseHref; }
    path(t = !1) { let n = this._platformLocation.hash ?? "#"; return n.length > 0 ? n.substring(1) : n; }
    prepareExternalUrl(t) { let n = q(this._baseHref, t); return n.length > 0 ? "#" + n : n; }
    pushState(t, n, r, o) { let s = this.prepareExternalUrl(r + S(o)) || this._platformLocation.pathname; this._platformLocation.pushState(t, n, s); }
    replaceState(t, n, r, o) { let s = this.prepareExternalUrl(r + S(o)) || this._platformLocation.pathname; this._platformLocation.replaceState(t, n, s); }
    forward() { this._platformLocation.forward(); }
    back() { this._platformLocation.back(); }
    getState() { return this._platformLocation.getState(); }
    historyGo(t = 0) { this._platformLocation.historyGo?.(t); }
    static \u0275fac = function (n) { return new (n || e)(a.\u0275\u0275inject(x), a.\u0275\u0275inject(J, 8)); };
    static \u0275prov = a.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), ot = { ADP: [void 0, void 0, 0], AFN: [void 0, "\u060B", 0], ALL: [void 0, void 0, 0], AMD: [void 0, "\u058F", 2], AOA: [void 0, "Kz"], ARS: [void 0, "$"], AUD: ["A$", "$"], AZN: [void 0, "\u20BC"], BAM: [void 0, "KM"], BBD: [void 0, "$"], BDT: [void 0, "\u09F3"], BHD: [void 0, void 0, 3], BIF: [void 0, void 0, 0], BMD: [void 0, "$"], BND: [void 0, "$"], BOB: [void 0, "Bs"], BRL: ["R$"], BSD: [void 0, "$"], BWP: [void 0, "P"], BYN: [void 0, void 0, 2], BYR: [void 0, void 0, 0], BZD: [void 0, "$"], CAD: ["CA$", "$", 2], CHF: [void 0, void 0, 2], CLF: [void 0, void 0, 4], CLP: [void 0, "$", 0], CNY: ["CN\xA5", "\xA5"], COP: [void 0, "$", 2], CRC: [void 0, "\u20A1", 2], CUC: [void 0, "$"], CUP: [void 0, "$"], CZK: [void 0, "K\u010D", 2], DJF: [void 0, void 0, 0], DKK: [void 0, "kr", 2], DOP: [void 0, "$"], EGP: [void 0, "E\xA3"], ESP: [void 0, "\u20A7", 0], EUR: ["\u20AC"], FJD: [void 0, "$"], FKP: [void 0, "\xA3"], GBP: ["\xA3"], GEL: [void 0, "\u20BE"], GHS: [void 0, "GH\u20B5"], GIP: [void 0, "\xA3"], GNF: [void 0, "FG", 0], GTQ: [void 0, "Q"], GYD: [void 0, "$", 2], HKD: ["HK$", "$"], HNL: [void 0, "L"], HRK: [void 0, "kn"], HUF: [void 0, "Ft", 2], IDR: [void 0, "Rp", 2], ILS: ["\u20AA"], INR: ["\u20B9"], IQD: [void 0, void 0, 0], IRR: [void 0, void 0, 0], ISK: [void 0, "kr", 0], ITL: [void 0, void 0, 0], JMD: [void 0, "$"], JOD: [void 0, void 0, 3], JPY: ["\xA5", void 0, 0], KGS: [void 0, "\u20C0"], KHR: [void 0, "\u17DB"], KMF: [void 0, "CF", 0], KPW: [void 0, "\u20A9", 0], KRW: ["\u20A9", void 0, 0], KWD: [void 0, void 0, 3], KYD: [void 0, "$"], KZT: [void 0, "\u20B8"], LAK: [void 0, "\u20AD", 0], LBP: [void 0, "L\xA3", 0], LKR: [void 0, "Rs"], LRD: [void 0, "$"], LTL: [void 0, "Lt"], LUF: [void 0, void 0, 0], LVL: [void 0, "Ls"], LYD: [void 0, void 0, 3], MGA: [void 0, "Ar", 0], MGF: [void 0, void 0, 0], MMK: [void 0, "K", 0], MNT: [void 0, "\u20AE", 2], MRO: [void 0, void 0, 0], MUR: [void 0, "Rs", 2], MXN: ["MX$", "$"], MYR: [void 0, "RM"], NAD: [void 0, "$"], NGN: [void 0, "\u20A6"], NIO: [void 0, "C$"], NOK: [void 0, "kr", 2], NPR: [void 0, "Rs"], NZD: ["NZ$", "$"], OMR: [void 0, void 0, 3], PHP: ["\u20B1"], PKR: [void 0, "Rs", 2], PLN: [void 0, "z\u0142"], PYG: [void 0, "\u20B2", 0], RON: [void 0, "lei"], RSD: [void 0, void 0, 0], RUB: [void 0, "\u20BD"], RWF: [void 0, "RF", 0], SBD: [void 0, "$"], SEK: [void 0, "kr", 2], SGD: [void 0, "$"], SHP: [void 0, "\xA3"], SLE: [void 0, void 0, 2], SLL: [void 0, void 0, 0], SOS: [void 0, void 0, 0], SRD: [void 0, "$"], SSP: [void 0, "\xA3"], STD: [void 0, void 0, 0], STN: [void 0, "Db"], SYP: [void 0, "\xA3", 0], THB: [void 0, "\u0E3F"], TMM: [void 0, void 0, 0], TND: [void 0, void 0, 3], TOP: [void 0, "T$"], TRL: [void 0, void 0, 0], TRY: [void 0, "\u20BA"], TTD: [void 0, "$"], TWD: ["NT$", "$", 2], TZS: [void 0, void 0, 2], UAH: [void 0, "\u20B4"], UGX: [void 0, void 0, 0], USD: ["$"], UYI: [void 0, void 0, 0], UYU: [void 0, "$"], UYW: [void 0, void 0, 4], UZS: [void 0, void 0, 2], VEF: [void 0, "Bs", 2], VND: ["\u20AB", void 0, 0], VUV: [void 0, void 0, 0], XAF: ["FCFA", void 0, 0], XCD: ["EC$", "$"], XCG: ["Cg."], XOF: ["F\u202FCFA", void 0, 0], XPF: ["CFPF", void 0, 0], XXX: ["\xA4"], YER: [void 0, void 0, 0], ZAR: [void 0, "R"], ZMK: [void 0, void 0, 0], ZMW: [void 0, "ZK"], ZWD: [void 0, void 0, 0] }, W = (function (e) { return e[e.Decimal = 0] = "Decimal", e[e.Percent = 1] = "Percent", e[e.Currency = 2] = "Currency", e[e.Scientific = 3] = "Scientific", e; })(W || {}), N = (function (e) { return e[e.Zero = 0] = "Zero", e[e.One = 1] = "One", e[e.Two = 2] = "Two", e[e.Few = 3] = "Few", e[e.Many = 4] = "Many", e[e.Other = 5] = "Other", e; })(N || {}), E = (function (e) { return e[e.Format = 0] = "Format", e[e.Standalone = 1] = "Standalone", e; })(E || {}), d = (function (e) { return e[e.Narrow = 0] = "Narrow", e[e.Abbreviated = 1] = "Abbreviated", e[e.Wide = 2] = "Wide", e[e.Short = 3] = "Short", e; })(d || {}), A = (function (e) { return e[e.Short = 0] = "Short", e[e.Medium = 1] = "Medium", e[e.Long = 2] = "Long", e[e.Full = 3] = "Full", e; })(A || {}), m = { Decimal: 0, Group: 1, List: 2, PercentSign: 3, PlusSign: 4, MinusSign: 5, Exponential: 6, SuperscriptingExponent: 7, PerMille: 8, Infinity: 9, NaN: 10, TimeSeparator: 11, CurrencyDecimal: 12, CurrencyGroup: 13 }, st = (function (e) { return e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday", e; })(st || {});
function at(e) { return y(e)[f.LocaleId]; }
function ut(e, i, t) { let n = y(e), r = [n[f.DayPeriodsFormat], n[f.DayPeriodsStandalone]], o = I(r, i); return I(o, t); }
function ct(e, i, t) { let n = y(e), r = [n[f.DaysFormat], n[f.DaysStandalone]], o = I(r, i); return I(o, t); }
function dt(e, i, t) { let n = y(e), r = [n[f.MonthsFormat], n[f.MonthsStandalone]], o = I(r, i); return I(o, t); }
function lt(e, i) { let n = y(e)[f.Eras]; return I(n, i); }
function dn(e) { return y(e)[f.FirstDayOfWeek]; }
function ln(e) { return y(e)[f.WeekendRange]; }
function j(e, i) { let t = y(e); return I(t[f.DateFormat], i); }
function z(e, i) { let t = y(e); return I(t[f.TimeFormat], i); }
function V(e, i) { let n = y(e)[f.DateTimeFormat]; return I(n, i); }
function v(e, i) { let t = y(e), n = t[f.NumberSymbols][i]; if (typeof n > "u") {
    if (i === m.CurrencyDecimal)
        return t[f.NumberSymbols][m.Decimal];
    if (i === m.CurrencyGroup)
        return t[f.NumberSymbols][m.Group];
} return n; }
function ce(e, i) { return y(e)[f.NumberFormats][i]; }
function fn(e) { return y(e)[f.CurrencySymbol] || null; }
function hn(e) { return y(e)[f.CurrencyName] || null; }
function gn(e) { return Qt(e); }
function Dn(e) { return y(e)[f.Currencies]; }
var ft = Jt;
function ht(e) { if (!e[f.ExtraData])
    throw new b(2303, !1); }
function gt(e) { let i = y(e); return ht(i), (i[f.ExtraData][2] || []).map(n => typeof n == "string" ? ye(n) : [ye(n[0]), ye(n[1])]); }
function Dt(e, i, t) { let n = y(e); ht(n); let r = [n[f.ExtraData][0], n[f.ExtraData][1]], o = I(r, i) || []; return I(o, t) || []; }
function pn(e) { return y(e)[f.Directionality]; }
function I(e, i) { for (let t = i; t > -1; t--)
    if (typeof e[t] < "u")
        return e[t]; throw new b(2304, !1); }
function ye(e) { let [i, t] = e.split(":"); return { hours: +i, minutes: +t }; }
function pt(e, i, t = "en") { let n = Dn(t)[e] || ot[e] || [], r = n[1]; return i === "narrow" && typeof r == "string" ? r : n[0] || e; }
var mn = 2;
function mt(e) { let i, t = ot[e]; return t && (i = t[2]), typeof i == "number" ? i : mn; }
var Cn = /^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/, ee = {}, yn = /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
function Ct(e, i, t, n) { let r = In(e); i = T(t, i) || i; let s = [], u; for (; i;)
    if (u = yn.exec(i), u) {
        s = s.concat(u.slice(1));
        let g = s.pop();
        if (!g)
            break;
        i = g;
    }
    else {
        s.push(i);
        break;
    } let D = r.getTimezoneOffset(); n && (D = Ft(n, D), r = bn(r, n)); let h = ""; return s.forEach(g => { let c = _n(g); h += c ? c(r, t, D) : g === "''" ? "'" : g.replace(/(^'|'$)/g, "").replace(/''/g, "'"); }), h; }
function oe(e, i, t) { let n = new Date(0); return n.setFullYear(e, i, t), n.setHours(0, 0, 0), n; }
function T(e, i) { let t = at(e); if (ee[t] ??= {}, ee[t][i])
    return ee[t][i]; let n = ""; switch (i) {
    case "shortDate":
        n = j(e, A.Short);
        break;
    case "mediumDate":
        n = j(e, A.Medium);
        break;
    case "longDate":
        n = j(e, A.Long);
        break;
    case "fullDate":
        n = j(e, A.Full);
        break;
    case "shortTime":
        n = z(e, A.Short);
        break;
    case "mediumTime":
        n = z(e, A.Medium);
        break;
    case "longTime":
        n = z(e, A.Long);
        break;
    case "fullTime":
        n = z(e, A.Full);
        break;
    case "short":
        let r = T(e, "shortTime"), o = T(e, "shortDate");
        n = te(V(e, A.Short), [r, o]);
        break;
    case "medium":
        let s = T(e, "mediumTime"), u = T(e, "mediumDate");
        n = te(V(e, A.Medium), [s, u]);
        break;
    case "long":
        let D = T(e, "longTime"), h = T(e, "longDate");
        n = te(V(e, A.Long), [D, h]);
        break;
    case "full":
        let g = T(e, "fullTime"), c = T(e, "fullDate");
        n = te(V(e, A.Full), [g, c]);
        break;
} return n && (ee[t][i] = n), n; }
function te(e, i) { return i && (e = e.replace(/\{([^}]+)}/g, function (t, n) { return i != null && n in i ? i[n] : t; })), e; }
function M(e, i, t = "-", n, r) { let o = ""; (e < 0 || r && e <= 0) && (r ? e = -e + 1 : (e = -e, o = t)); let s = String(e); for (; s.length < i;)
    s = "0" + s; return n && (s = s.slice(s.length - i)), o + s; }
function Fn(e, i) { return M(e, 3).substring(0, i); }
function C(e, i, t = 0, n = !1, r = !1) { return function (o, s) { let u = En(e, o); if ((t > 0 || u > -t) && (u += t), e === 3)
    u === 0 && t === -12 && (u = 12);
else if (e === 6)
    return Fn(u, i); let D = v(s, m.MinusSign); return M(u, i, D, n, r); }; }
function En(e, i) { switch (e) {
    case 0: return i.getFullYear();
    case 1: return i.getMonth();
    case 2: return i.getDate();
    case 3: return i.getHours();
    case 4: return i.getMinutes();
    case 5: return i.getSeconds();
    case 6: return i.getMilliseconds();
    case 7: return i.getDay();
    default: throw new b(2301, !1);
} }
function l(e, i, t = E.Format, n = !1) { return function (r, o) { return wn(r, o, e, i, t, n); }; }
function wn(e, i, t, n, r, o) { switch (t) {
    case 2: return dt(i, r, n)[e.getMonth()];
    case 1: return ct(i, r, n)[e.getDay()];
    case 0:
        let s = e.getHours(), u = e.getMinutes();
        if (o) {
            let h = gt(i), g = Dt(i, r, n), c = h.findIndex(F => { if (Array.isArray(F)) {
                let [p, w] = F, U = s >= p.hours && u >= p.minutes, P = s < w.hours || s === w.hours && u < w.minutes;
                if (p.hours < w.hours) {
                    if (U && P)
                        return !0;
                }
                else if (U || P)
                    return !0;
            }
            else if (F.hours === s && F.minutes === u)
                return !0; return !1; });
            if (c !== -1)
                return g[c];
        }
        return ut(i, r, n)[s < 12 ? 0 : 1];
    case 3: return lt(i, n)[e.getFullYear() <= 0 ? 0 : 1];
    default:
        let D = t;
        throw new b(2302, !1);
} }
function ne(e) { return function (i, t, n) { let r = -1 * n, o = v(t, m.MinusSign), s = r > 0 ? Math.floor(r / 60) : Math.ceil(r / 60); switch (e) {
    case 0: return (r >= 0 ? "+" : "") + M(s, 2, o) + M(Math.abs(r % 60), 2, o);
    case 1: return "GMT" + (r >= 0 ? "+" : "") + M(s, 1, o);
    case 2: return "GMT" + (r >= 0 ? "+" : "") + M(s, 2, o) + ":" + M(Math.abs(r % 60), 2, o);
    case 3: return n === 0 ? "Z" : (r >= 0 ? "+" : "") + M(s, 2, o) + ":" + M(Math.abs(r % 60), 2, o);
    default: throw new b(2310, !1);
} }; }
var An = 0, re = 4;
function Sn(e) { let i = oe(e, An, 1).getDay(); return oe(e, 0, 1 + (i <= re ? re : re + 7) - i); }
function yt(e) { let i = e.getDay(), t = i === 0 ? -3 : re - i; return oe(e.getFullYear(), e.getMonth(), e.getDate() + t); }
function Fe(e, i = !1) { return function (t, n) { let r; if (i) {
    let o = new Date(t.getFullYear(), t.getMonth(), 1).getDay() - 1, s = t.getDate();
    r = 1 + Math.floor((s + o) / 7);
}
else {
    let o = yt(t), s = Sn(o.getFullYear()), u = o.getTime() - s.getTime();
    r = 1 + Math.round(u / 6048e5);
} return M(r, e, v(n, m.MinusSign)); }; }
function ie(e, i = !1) { return function (t, n) { let o = yt(t).getFullYear(); return M(o, e, v(n, m.MinusSign), i); }; }
var Ee = {};
function _n(e) { if (Ee[e])
    return Ee[e]; let i; switch (e) {
    case "G":
    case "GG":
    case "GGG":
        i = l(3, d.Abbreviated);
        break;
    case "GGGG":
        i = l(3, d.Wide);
        break;
    case "GGGGG":
        i = l(3, d.Narrow);
        break;
    case "y":
        i = C(0, 1, 0, !1, !0);
        break;
    case "yy":
        i = C(0, 2, 0, !0, !0);
        break;
    case "yyy":
        i = C(0, 3, 0, !1, !0);
        break;
    case "yyyy":
        i = C(0, 4, 0, !1, !0);
        break;
    case "Y":
        i = ie(1);
        break;
    case "YY":
        i = ie(2, !0);
        break;
    case "YYY":
        i = ie(3);
        break;
    case "YYYY":
        i = ie(4);
        break;
    case "M":
    case "L":
        i = C(1, 1, 1);
        break;
    case "MM":
    case "LL":
        i = C(1, 2, 1);
        break;
    case "MMM":
        i = l(2, d.Abbreviated);
        break;
    case "MMMM":
        i = l(2, d.Wide);
        break;
    case "MMMMM":
        i = l(2, d.Narrow);
        break;
    case "LLL":
        i = l(2, d.Abbreviated, E.Standalone);
        break;
    case "LLLL":
        i = l(2, d.Wide, E.Standalone);
        break;
    case "LLLLL":
        i = l(2, d.Narrow, E.Standalone);
        break;
    case "w":
        i = Fe(1);
        break;
    case "ww":
        i = Fe(2);
        break;
    case "W":
        i = Fe(1, !0);
        break;
    case "d":
        i = C(2, 1);
        break;
    case "dd":
        i = C(2, 2);
        break;
    case "c":
    case "cc":
        i = C(7, 1);
        break;
    case "ccc":
        i = l(1, d.Abbreviated, E.Standalone);
        break;
    case "cccc":
        i = l(1, d.Wide, E.Standalone);
        break;
    case "ccccc":
        i = l(1, d.Narrow, E.Standalone);
        break;
    case "cccccc":
        i = l(1, d.Short, E.Standalone);
        break;
    case "E":
    case "EE":
    case "EEE":
        i = l(1, d.Abbreviated);
        break;
    case "EEEE":
        i = l(1, d.Wide);
        break;
    case "EEEEE":
        i = l(1, d.Narrow);
        break;
    case "EEEEEE":
        i = l(1, d.Short);
        break;
    case "a":
    case "aa":
    case "aaa":
        i = l(0, d.Abbreviated);
        break;
    case "aaaa":
        i = l(0, d.Wide);
        break;
    case "aaaaa":
        i = l(0, d.Narrow);
        break;
    case "b":
    case "bb":
    case "bbb":
        i = l(0, d.Abbreviated, E.Standalone, !0);
        break;
    case "bbbb":
        i = l(0, d.Wide, E.Standalone, !0);
        break;
    case "bbbbb":
        i = l(0, d.Narrow, E.Standalone, !0);
        break;
    case "B":
    case "BB":
    case "BBB":
        i = l(0, d.Abbreviated, E.Format, !0);
        break;
    case "BBBB":
        i = l(0, d.Wide, E.Format, !0);
        break;
    case "BBBBB":
        i = l(0, d.Narrow, E.Format, !0);
        break;
    case "h":
        i = C(3, 1, -12);
        break;
    case "hh":
        i = C(3, 2, -12);
        break;
    case "H":
        i = C(3, 1);
        break;
    case "HH":
        i = C(3, 2);
        break;
    case "m":
        i = C(4, 1);
        break;
    case "mm":
        i = C(4, 2);
        break;
    case "s":
        i = C(5, 1);
        break;
    case "ss":
        i = C(5, 2);
        break;
    case "S":
        i = C(6, 1);
        break;
    case "SS":
        i = C(6, 2);
        break;
    case "SSS":
        i = C(6, 3);
        break;
    case "Z":
    case "ZZ":
    case "ZZZ":
        i = ne(0);
        break;
    case "ZZZZZ":
        i = ne(3);
        break;
    case "O":
    case "OO":
    case "OOO":
    case "z":
    case "zz":
    case "zzz":
        i = ne(1);
        break;
    case "OOOO":
    case "ZZZZ":
    case "zzzz":
        i = ne(2);
        break;
    default: return null;
} return Ee[e] = i, i; }
function Ft(e, i) { e = e.replace(/:/g, ""); let t = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4; return isNaN(t) ? i : t; }
function vn(e, i) { return e = new Date(e.getTime()), e.setMinutes(e.getMinutes() + i), e; }
function bn(e, i, t) { let r = e.getTimezoneOffset(), o = Ft(i, r); return vn(e, -1 * (o - r)); }
function In(e) { if (qe(e))
    return e; if (typeof e == "number" && !isNaN(e))
    return new Date(e); if (typeof e == "string") {
    if (e = e.trim(), /^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)) {
        let [r, o = 1, s = 1] = e.split("-").map(u => +u);
        return oe(r, o - 1, s);
    }
    let t = parseFloat(e);
    if (!isNaN(e - t))
        return new Date(t);
    let n;
    if (n = e.match(Cn))
        return Ln(n);
} let i = new Date(e); if (!qe(i))
    throw new b(2311, !1); return i; }
function Ln(e) { let i = new Date(0), t = 0, n = 0, r = e[8] ? i.setUTCFullYear : i.setFullYear, o = e[8] ? i.setUTCHours : i.setHours; e[9] && (t = Number(e[9] + e[10]), n = Number(e[9] + e[11])), r.call(i, Number(e[1]), Number(e[2]) - 1, Number(e[3])); let s = Number(e[4] || 0) - t, u = Number(e[5] || 0) - n, D = Number(e[6] || 0), h = Math.floor(parseFloat("0." + (e[7] || 0)) * 1e3); return o.call(i, s, u, D, h), i; }
function qe(e) { return e instanceof Date && !isNaN(e.valueOf()); }
var Mn = /^(\d+)?\.((\d+)(-(\d+))?)?$/, Je = 22, se = ".", G = "0", Tn = ";", Rn = ",", we = "#", Qe = "\xA4", On = "%";
function Ie(e, i, t, n, r, o, s = !1) { let u = "", D = !1; if (!isFinite(e))
    u = v(t, m.Infinity);
else {
    let h = Bn(e);
    s && (h = Pn(h));
    let g = i.minInt, c = i.minFrac, F = i.maxFrac;
    if (o) {
        let k = o.match(Mn);
        if (k === null)
            throw new b(2306, !1);
        let Ue = k[1], De = k[3], je = k[5];
        Ue != null && (g = Ae(Ue)), De != null && (c = Ae(De)), je != null ? F = Ae(je) : De != null && c > F && (F = c);
    }
    Nn(h, c, F);
    let p = h.digits, w = h.integerLen, U = h.exponent, P = [];
    for (D = p.every(k => !k); w < g; w++)
        p.unshift(0);
    for (; w < 0; w++)
        p.unshift(0);
    w > 0 ? P = p.splice(w, p.length) : (P = p, p = [0]);
    let Z = [];
    for (p.length >= i.lgSize && Z.unshift(p.splice(-i.lgSize, p.length).join("")); p.length > i.gSize;)
        Z.unshift(p.splice(-i.gSize, p.length).join(""));
    p.length && Z.unshift(p.join("")), u = Z.join(v(t, n)), P.length && (u += v(t, r) + P.join("")), U && (u += v(t, m.Exponential) + "+" + U);
} return e < 0 && !D ? u = i.negPre + u + i.negSuf : u = i.posPre + u + i.posSuf, u; }
function Et(e, i, t, n, r) { let o = ce(i, W.Currency), s = Le(o, v(i, m.MinusSign)); return s.minFrac = mt(n), s.maxFrac = s.minFrac, Ie(e, s, i, m.CurrencyGroup, m.CurrencyDecimal, r).replace(Qe, t).replace(Qe, "").trim(); }
function wt(e, i, t) { let n = ce(i, W.Percent), r = Le(n, v(i, m.MinusSign)); return Ie(e, r, i, m.Group, m.Decimal, t, !0).replace(new RegExp(On, "g"), v(i, m.PercentSign)); }
function At(e, i, t) { let n = ce(i, W.Decimal), r = Le(n, v(i, m.MinusSign)); return Ie(e, r, i, m.Group, m.Decimal, t); }
function Le(e, i = "-") { let t = { minInt: 1, minFrac: 0, maxFrac: 0, posPre: "", posSuf: "", negPre: "", negSuf: "", gSize: 0, lgSize: 0 }, n = e.split(Tn), r = n[0], o = n[1], s = r.indexOf(se) !== -1 ? r.split(se) : [r.substring(0, r.lastIndexOf(G) + 1), r.substring(r.lastIndexOf(G) + 1)], u = s[0], D = s[1] || ""; t.posPre = u.substring(0, u.indexOf(we)); for (let g = 0; g < D.length; g++) {
    let c = D.charAt(g);
    c === G ? t.minFrac = t.maxFrac = g + 1 : c === we ? t.maxFrac = g + 1 : t.posSuf += c;
} let h = u.split(Rn); if (t.gSize = h[1] ? h[1].length : 0, t.lgSize = h[2] || h[1] ? (h[2] || h[1]).length : 0, o) {
    let g = r.length - t.posPre.length - t.posSuf.length, c = o.indexOf(we);
    t.negPre = o.substring(0, c).replace(/'/g, ""), t.negSuf = o.slice(c + g).replace(/'/g, "");
}
else
    t.negPre = i + t.posPre, t.negSuf = t.posSuf; return t; }
function Pn(e) { if (e.digits[0] === 0)
    return e; let i = e.digits.length - e.integerLen; return e.exponent ? e.exponent += 2 : (i === 0 ? e.digits.push(0, 0) : i === 1 && e.digits.push(0), e.integerLen += 2), e; }
function Bn(e) { let i = Math.abs(e) + "", t = 0, n, r, o, s, u; for ((r = i.indexOf(se)) > -1 && (i = i.replace(se, "")), (o = i.search(/e/i)) > 0 ? (r < 0 && (r = o), r += +i.slice(o + 1), i = i.substring(0, o)) : r < 0 && (r = i.length), o = 0; i.charAt(o) === G; o++)
    ; if (o === (u = i.length))
    n = [0], r = 1;
else {
    for (u--; i.charAt(u) === G;)
        u--;
    for (r -= o, n = [], s = 0; o <= u; o++, s++)
        n[s] = Number(i.charAt(o));
} return r > Je && (n = n.splice(0, Je - 1), t = r - 1, r = 1), { digits: n, exponent: t, integerLen: r }; }
function Nn(e, i, t) { if (i > t)
    throw new b(2307, !1); let n = e.digits, r = n.length - e.integerLen, o = Math.min(Math.max(i, r), t), s = o + e.integerLen, u = n[s]; if (s > 0) {
    n.splice(Math.max(e.integerLen, s));
    for (let c = s; c < n.length; c++)
        n[c] = 0;
}
else {
    r = Math.max(0, r), e.integerLen = 1, n.length = Math.max(1, s = o + 1), n[0] = 0;
    for (let c = 1; c < s; c++)
        n[c] = 0;
} if (u >= 5)
    if (s - 1 < 0) {
        for (let c = 0; c > s; c--)
            n.unshift(0), e.integerLen++;
        n.unshift(1), e.integerLen++;
    }
    else
        n[s - 1]++; for (; r < Math.max(0, o); r++)
    n.push(0); let D = o !== 0, h = i + e.integerLen, g = n.reduceRight(function (c, F, p, w) { return F = F + c, w[p] = F < 10 ? F : F - 10, D && (w[p] === 0 && p >= h ? w.pop() : D = !1), F >= 10 ? 1 : 0; }, 0); g && (n.unshift(g), e.integerLen++); }
function Ae(e) { let i = parseInt(e); if (isNaN(i))
    throw new b(2305, !1); return i; }
var de = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = a.\u0275\u0275defineInjectable({ token: e, factory: () => new _t(be($)), providedIn: "root" });
} return e; })();
function St(e, i, t, n) { let r = `=${e}`; if (i.indexOf(r) > -1 || (r = t.getPluralCategory(e, n), i.indexOf(r) > -1))
    return r; if (i.indexOf("other") > -1)
    return "other"; throw new b(2308, !1); }
var _t = (() => { class e extends de {
    locale;
    constructor(t) { super(), this.locale = t; }
    getPluralCategory(t, n) { switch (ft(n || this.locale)(t)) {
        case N.Zero: return "zero";
        case N.One: return "one";
        case N.Two: return "two";
        case N.Few: return "few";
        case N.Many: return "many";
        default: return "other";
    } }
    static \u0275fac = function (n) { return new (n || e)(a.\u0275\u0275inject($)); };
    static \u0275prov = a.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), Se = /\s+/, et = [], kn = (() => { class e {
    _ngEl;
    _renderer;
    initialClasses = et;
    rawClass;
    stateMap = new Map;
    constructor(t, n) { this._ngEl = t, this._renderer = n; }
    set klass(t) { this.initialClasses = t != null ? t.trim().split(Se) : et; }
    set ngClass(t) { this.rawClass = typeof t == "string" ? t.trim().split(Se) : t; }
    ngDoCheck() { for (let n of this.initialClasses)
        this._updateState(n, !0); let t = this.rawClass; if (Array.isArray(t) || t instanceof Set)
        for (let n of t)
            this._updateState(n, !0);
    else if (t != null)
        for (let n of Object.keys(t))
            this._updateState(n, !!t[n]); this._applyStateDiff(); }
    _updateState(t, n) { let r = this.stateMap.get(t); r !== void 0 ? (r.enabled !== n && (r.changed = !0, r.enabled = n), r.touched = !0) : this.stateMap.set(t, { enabled: n, changed: !0, touched: !0 }); }
    _applyStateDiff() { for (let t of this.stateMap) {
        let n = t[0], r = t[1];
        r.changed ? (this._toggleClass(n, r.enabled), r.changed = !1) : r.touched || (r.enabled && this._toggleClass(n, !1), this.stateMap.delete(n)), r.touched = !1;
    } }
    _toggleClass(t, n) { t = t.trim(), t.length > 0 && t.split(Se).forEach(r => { n ? this._renderer.addClass(this._ngEl.nativeElement, r) : this._renderer.removeClass(this._ngEl.nativeElement, r); }); }
    static \u0275fac = function (n) { return new (n || e)(a.\u0275\u0275directiveInject(a.ElementRef), a.\u0275\u0275directiveInject(a.Renderer2)); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: e, selectors: [["", "ngClass", ""]], inputs: { klass: [0, "class", "klass"], ngClass: "ngClass" } });
} return e; })(), xn = (() => { class e {
    _viewContainerRef;
    ngComponentOutlet = null;
    ngComponentOutletInputs;
    ngComponentOutletInjector;
    ngComponentOutletEnvironmentInjector;
    ngComponentOutletContent;
    ngComponentOutletNgModule;
    _componentRef;
    _moduleRef;
    _inputsUsed = new Map;
    get componentInstance() { return this._componentRef?.instance ?? null; }
    constructor(t) { this._viewContainerRef = t; }
    _needToReCreateNgModuleInstance(t) { return t.ngComponentOutletNgModule !== void 0; }
    _needToReCreateComponentInstance(t) { return t.ngComponentOutlet !== void 0 || t.ngComponentOutletContent !== void 0 || t.ngComponentOutletInjector !== void 0 || t.ngComponentOutletEnvironmentInjector !== void 0 || this._needToReCreateNgModuleInstance(t); }
    ngOnChanges(t) { if (this._needToReCreateComponentInstance(t) && (this._viewContainerRef.clear(), this._inputsUsed.clear(), this._componentRef = void 0, this.ngComponentOutlet)) {
        let n = this.ngComponentOutletInjector || this._viewContainerRef.parentInjector;
        this._needToReCreateNgModuleInstance(t) && (this._moduleRef?.destroy(), this.ngComponentOutletNgModule ? this._moduleRef = en(this.ngComponentOutletNgModule, $n(n)) : this._moduleRef = void 0), this._componentRef = this._viewContainerRef.createComponent(this.ngComponentOutlet, { injector: n, ngModuleRef: this._moduleRef, projectableNodes: this.ngComponentOutletContent, environmentInjector: this.ngComponentOutletEnvironmentInjector });
    } }
    ngDoCheck() { if (this._componentRef) {
        if (this.ngComponentOutletInputs)
            for (let t of Object.keys(this.ngComponentOutletInputs))
                this._inputsUsed.set(t, !0);
        this._applyInputStateDiff(this._componentRef);
    } }
    ngOnDestroy() { this._moduleRef?.destroy(); }
    _applyInputStateDiff(t) { for (let [n, r] of this._inputsUsed)
        r ? (t.setInput(n, this.ngComponentOutletInputs[n]), this._inputsUsed.set(n, !1)) : (t.setInput(n, void 0), this._inputsUsed.delete(n)); }
    static \u0275fac = function (n) { return new (n || e)(a.\u0275\u0275directiveInject(a.ViewContainerRef)); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: e, selectors: [["", "ngComponentOutlet", ""]], inputs: { ngComponentOutlet: "ngComponentOutlet", ngComponentOutletInputs: "ngComponentOutletInputs", ngComponentOutletInjector: "ngComponentOutletInjector", ngComponentOutletEnvironmentInjector: "ngComponentOutletEnvironmentInjector", ngComponentOutletContent: "ngComponentOutletContent", ngComponentOutletNgModule: "ngComponentOutletNgModule" }, exportAs: ["ngComponentOutlet"], features: [a.\u0275\u0275NgOnChangesFeature] });
} return e; })();
function $n(e) { return e.get(tn).injector; }
var ae = class {
    $implicit;
    ngForOf;
    index;
    count;
    constructor(i, t, n, r) { this.$implicit = i, this.ngForOf = t, this.index = n, this.count = r; }
    get first() { return this.index === 0; }
    get last() { return this.index === this.count - 1; }
    get even() { return this.index % 2 === 0; }
    get odd() { return !this.even; }
}, vt = (() => { class e {
    _viewContainer;
    _template;
    _differs;
    set ngForOf(t) { this._ngForOf = t, this._ngForOfDirty = !0; }
    set ngForTrackBy(t) { this._trackByFn = t; }
    get ngForTrackBy() { return this._trackByFn; }
    _ngForOf = null;
    _ngForOfDirty = !0;
    _differ = null;
    _trackByFn;
    constructor(t, n, r) { this._viewContainer = t, this._template = n, this._differs = r; }
    set ngForTemplate(t) { t && (this._template = t); }
    ngDoCheck() { if (this._ngForOfDirty) {
        this._ngForOfDirty = !1;
        let t = this._ngForOf;
        !this._differ && t && (this._differ = this._differs.find(t).create(this.ngForTrackBy));
    } if (this._differ) {
        let t = this._differ.diff(this._ngForOf);
        t && this._applyChanges(t);
    } }
    _applyChanges(t) { let n = this._viewContainer; t.forEachOperation((r, o, s) => { if (r.previousIndex == null)
        n.createEmbeddedView(this._template, new ae(r.item, this._ngForOf, -1, -1), s === null ? void 0 : s);
    else if (s == null)
        n.remove(o === null ? void 0 : o);
    else if (o !== null) {
        let u = n.get(o);
        n.move(u, s), tt(u, r);
    } }); for (let r = 0, o = n.length; r < o; r++) {
        let u = n.get(r).context;
        u.index = r, u.count = o, u.ngForOf = this._ngForOf;
    } t.forEachIdentityChange(r => { let o = n.get(r.currentIndex); tt(o, r); }); }
    static ngTemplateContextGuard(t, n) { return !0; }
    static \u0275fac = function (n) { return new (n || e)(a.\u0275\u0275directiveInject(a.ViewContainerRef), a.\u0275\u0275directiveInject(a.TemplateRef), a.\u0275\u0275directiveInject(a.IterableDiffers)); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: e, selectors: [["", "ngFor", "", "ngForOf", ""]], inputs: { ngForOf: "ngForOf", ngForTrackBy: "ngForTrackBy", ngForTemplate: "ngForTemplate" } });
} return e; })();
function tt(e, i) { e.context.$implicit = i.item; }
var Un = (() => { class e {
    _viewContainer;
    _context = new ue;
    _thenTemplateRef = null;
    _elseTemplateRef = null;
    _thenViewRef = null;
    _elseViewRef = null;
    constructor(t, n) { this._viewContainer = t, this._thenTemplateRef = n; }
    set ngIf(t) { this._context.$implicit = this._context.ngIf = t, this._updateView(); }
    set ngIfThen(t) { nt(t, !1), this._thenTemplateRef = t, this._thenViewRef = null, this._updateView(); }
    set ngIfElse(t) { nt(t, !1), this._elseTemplateRef = t, this._elseViewRef = null, this._updateView(); }
    _updateView() { this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context))); }
    static ngIfUseIfTypeGuard;
    static ngTemplateGuard_ngIf;
    static ngTemplateContextGuard(t, n) { return !0; }
    static \u0275fac = function (n) { return new (n || e)(a.\u0275\u0275directiveInject(a.ViewContainerRef), a.\u0275\u0275directiveInject(a.TemplateRef)); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: e, selectors: [["", "ngIf", ""]], inputs: { ngIf: "ngIf", ngIfThen: "ngIfThen", ngIfElse: "ngIfElse" } });
} return e; })(), ue = class {
    $implicit = null;
    ngIf = null;
};
function nt(e, i) { if (e && !e.createEmbeddedView)
    throw new b(2020, !1); }
var H = class {
    _viewContainerRef;
    _templateRef;
    _created = !1;
    constructor(i, t) { this._viewContainerRef = i, this._templateRef = t; }
    create() { this._created = !0, this._viewContainerRef.createEmbeddedView(this._templateRef); }
    destroy() { this._created = !1, this._viewContainerRef.clear(); }
    enforceState(i) { i && !this._created ? this.create() : !i && this._created && this.destroy(); }
}, Me = (() => { class e {
    _defaultViews = [];
    _defaultUsed = !1;
    _caseCount = 0;
    _lastCaseCheckIndex = 0;
    _lastCasesMatched = !1;
    _ngSwitch;
    set ngSwitch(t) { this._ngSwitch = t, this._caseCount === 0 && this._updateDefaultCases(!0); }
    _addCase() { return this._caseCount++; }
    _addDefault(t) { this._defaultViews.push(t); }
    _matchCase(t) { let n = t === this._ngSwitch; return this._lastCasesMatched ||= n, this._lastCaseCheckIndex++, this._lastCaseCheckIndex === this._caseCount && (this._updateDefaultCases(!this._lastCasesMatched), this._lastCaseCheckIndex = 0, this._lastCasesMatched = !1), n; }
    _updateDefaultCases(t) { if (this._defaultViews.length > 0 && t !== this._defaultUsed) {
        this._defaultUsed = t;
        for (let n of this._defaultViews)
            n.enforceState(t);
    } }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: e, selectors: [["", "ngSwitch", ""]], inputs: { ngSwitch: "ngSwitch" } });
} return e; })(), jn = (() => { class e {
    ngSwitch;
    _view;
    ngSwitchCase;
    constructor(t, n, r) { this.ngSwitch = r, r._addCase(), this._view = new H(t, n); }
    ngDoCheck() { this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase)); }
    static \u0275fac = function (n) { return new (n || e)(a.\u0275\u0275directiveInject(a.ViewContainerRef), a.\u0275\u0275directiveInject(a.TemplateRef), a.\u0275\u0275directiveInject(Me, 9)); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: e, selectors: [["", "ngSwitchCase", ""]], inputs: { ngSwitchCase: "ngSwitchCase" } });
} return e; })(), zn = (() => { class e {
    constructor(t, n, r) { r._addDefault(new H(t, n)); }
    static \u0275fac = function (n) { return new (n || e)(a.\u0275\u0275directiveInject(a.ViewContainerRef), a.\u0275\u0275directiveInject(a.TemplateRef), a.\u0275\u0275directiveInject(Me, 9)); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: e, selectors: [["", "ngSwitchDefault", ""]] });
} return e; })();
var bt = (() => { class e {
    _localization;
    _activeView;
    _caseViews = {};
    constructor(t) { this._localization = t; }
    set ngPlural(t) { this._updateView(t); }
    addCase(t, n) { this._caseViews[t] = n; }
    _updateView(t) { this._clearViews(); let n = Object.keys(this._caseViews), r = St(t, n, this._localization); this._activateView(this._caseViews[r]); }
    _clearViews() { this._activeView && this._activeView.destroy(); }
    _activateView(t) { t && (this._activeView = t, this._activeView.create()); }
    static \u0275fac = function (n) { return new (n || e)(a.\u0275\u0275directiveInject(de)); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: e, selectors: [["", "ngPlural", ""]], inputs: { ngPlural: "ngPlural" } });
} return e; })(), Vn = (() => { class e {
    value;
    constructor(t, n, r, o) { this.value = t; let s = !isNaN(Number(t)); o.addCase(s ? `=${t}` : t, new H(r, n)); }
    static \u0275fac = function (n) { return new (n || e)(a.\u0275\u0275injectAttribute("ngPluralCase"), a.\u0275\u0275directiveInject(a.TemplateRef), a.\u0275\u0275directiveInject(a.ViewContainerRef), a.\u0275\u0275directiveInject(bt, 1)); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: e, selectors: [["", "ngPluralCase", ""]] });
} return e; })(), Gn = (() => { class e {
    _ngEl;
    _differs;
    _renderer;
    _ngStyle = null;
    _differ = null;
    constructor(t, n, r) { this._ngEl = t, this._differs = n, this._renderer = r; }
    set ngStyle(t) { this._ngStyle = t, !this._differ && t && (this._differ = this._differs.find(t).create()); }
    ngDoCheck() { if (this._differ) {
        let t = this._differ.diff(this._ngStyle);
        t && this._applyChanges(t);
    } }
    _setStyle(t, n) { let [r, o] = t.split("."), s = r.indexOf("-") === -1 ? void 0 : nn.DashCase; n != null ? this._renderer.setStyle(this._ngEl.nativeElement, r, o ? `${n}${o}` : n, s) : this._renderer.removeStyle(this._ngEl.nativeElement, r, s); }
    _applyChanges(t) { t.forEachRemovedItem(n => this._setStyle(n.key, null)), t.forEachAddedItem(n => this._setStyle(n.key, n.currentValue)), t.forEachChangedItem(n => this._setStyle(n.key, n.currentValue)); }
    static \u0275fac = function (n) { return new (n || e)(a.\u0275\u0275directiveInject(a.ElementRef), a.\u0275\u0275directiveInject(a.KeyValueDiffers), a.\u0275\u0275directiveInject(a.Renderer2)); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: e, selectors: [["", "ngStyle", ""]], inputs: { ngStyle: "ngStyle" } });
} return e; })(), Hn = (() => { class e {
    _viewContainerRef;
    _viewRef = null;
    ngTemplateOutletContext = null;
    ngTemplateOutlet = null;
    ngTemplateOutletInjector = null;
    injector = be(rn);
    constructor(t) { this._viewContainerRef = t; }
    ngOnChanges(t) { if (this._shouldRecreateView(t)) {
        let n = this._viewContainerRef;
        if (this._viewRef && n.remove(n.indexOf(this._viewRef)), !this.ngTemplateOutlet) {
            this._viewRef = null;
            return;
        }
        let r = this._createContextForwardProxy();
        this._viewRef = n.createEmbeddedView(this.ngTemplateOutlet, r, { injector: this._getInjector() });
    } }
    _getInjector() { return this.ngTemplateOutletInjector === "outlet" ? this.injector : this.ngTemplateOutletInjector ?? void 0; }
    _shouldRecreateView(t) { return !!t.ngTemplateOutlet || !!t.ngTemplateOutletInjector; }
    _createContextForwardProxy() { return new Proxy({}, { set: (t, n, r) => this.ngTemplateOutletContext ? Reflect.set(this.ngTemplateOutletContext, n, r) : !1, get: (t, n, r) => { if (this.ngTemplateOutletContext)
            return Reflect.get(this.ngTemplateOutletContext, n, r); } }); }
    static \u0275fac = function (n) { return new (n || e)(a.\u0275\u0275directiveInject(a.ViewContainerRef)); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: e, selectors: [["", "ngTemplateOutlet", ""]], inputs: { ngTemplateOutletContext: "ngTemplateOutletContext", ngTemplateOutlet: "ngTemplateOutlet", ngTemplateOutletInjector: "ngTemplateOutletInjector" }, features: [a.\u0275\u0275NgOnChangesFeature] });
} return e; })();
function R(e, i) { return new b(2100, !1); }
var _e = class {
    createSubscription(i, t, n) { return Xe(() => i.subscribe({ next: t, error: n })); }
    dispose(i) { Xe(() => i.unsubscribe()); }
}, ve = class {
    createSubscription(i, t, n) { return i.then(r => t?.(r), r => n?.(r)), { unsubscribe: () => { t = null, n = null; } }; }
    dispose(i) { i.unsubscribe(); }
}, Wn = new ve, Zn = new _e, Yn = (() => { class e {
    _ref;
    _latestValue = null;
    markForCheckOnValueUpdate = !0;
    _subscription = null;
    _obj = null;
    _strategy = null;
    applicationErrorHandler = be(on);
    constructor(t) { this._ref = t; }
    ngOnDestroy() { this._subscription && this._dispose(), this._ref = null; }
    transform(t) { if (!this._obj) {
        if (t)
            try {
                this.markForCheckOnValueUpdate = !1, this._subscribe(t);
            }
            finally {
                this.markForCheckOnValueUpdate = !0;
            }
        return this._latestValue;
    } return t !== this._obj ? (this._dispose(), this.transform(t)) : this._latestValue; }
    _subscribe(t) { this._obj = t, this._strategy = this._selectStrategy(t), this._subscription = this._strategy.createSubscription(t, n => this._updateLatestValue(t, n), n => this.applicationErrorHandler(n)); }
    _selectStrategy(t) { if (sn(t))
        return Wn; if (an(t))
        return Zn; throw R(e, t); }
    _dispose() { this._strategy.dispose(this._subscription), this._latestValue = null, this._subscription = null, this._obj = null; }
    _updateLatestValue(t, n) { t === this._obj && (this._latestValue = n, this.markForCheckOnValueUpdate && this._ref?.markForCheck()); }
    static \u0275fac = function (n) { return new (n || e)(a.\u0275\u0275directiveInject(a.ChangeDetectorRef, 16)); };
    static \u0275pipe = a.\u0275\u0275definePipe({ name: "async", type: e, pure: !1 });
} return e; })(), Kn = (() => { class e {
    transform(t) { return t == null ? null : (Te(e, t), t.toLowerCase()); }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275pipe = a.\u0275\u0275definePipe({ name: "lowercase", type: e, pure: !0 });
} return e; })(), Xn = /(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g, qn = (() => { class e {
    transform(t) { return t == null ? null : (Te(e, t), t.replace(Xn, n => n[0].toUpperCase() + n.slice(1).toLowerCase())); }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275pipe = a.\u0275\u0275definePipe({ name: "titlecase", type: e, pure: !0 });
} return e; })(), Jn = (() => { class e {
    transform(t) { return t == null ? null : (Te(e, t), t.toUpperCase()); }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275pipe = a.\u0275\u0275definePipe({ name: "uppercase", type: e, pure: !0 });
} return e; })();
function Te(e, i) { if (typeof i != "string")
    throw R(e, i); }
var Qn = "mediumDate", It = new rt(""), Lt = new rt(""), ei = (() => { class e {
    locale;
    defaultTimezone;
    defaultOptions;
    constructor(t, n, r) { this.locale = t, this.defaultTimezone = n, this.defaultOptions = r; }
    transform(t, n, r, o) { if (t == null || t === "" || t !== t)
        return null; try {
        let s = n ?? this.defaultOptions?.dateFormat ?? Qn, u = r ?? this.defaultOptions?.timezone ?? this.defaultTimezone ?? void 0;
        return Ct(t, s, o || this.locale, u);
    }
    catch (s) {
        throw R(e, s.message);
    } }
    static \u0275fac = function (n) { return new (n || e)(a.\u0275\u0275directiveInject($, 16), a.\u0275\u0275directiveInject(It, 24), a.\u0275\u0275directiveInject(Lt, 24)); };
    static \u0275pipe = a.\u0275\u0275definePipe({ name: "date", type: e, pure: !0 });
} return e; })(), ti = /#/g, ni = (() => { class e {
    _localization;
    constructor(t) { this._localization = t; }
    transform(t, n, r) { if (t == null)
        return ""; if (typeof n != "object" || n === null)
        throw R(e, n); let o = St(t, Object.keys(n), this._localization, r); return n[o].replace(ti, t.toString()); }
    static \u0275fac = function (n) { return new (n || e)(a.\u0275\u0275directiveInject(de, 16)); };
    static \u0275pipe = a.\u0275\u0275definePipe({ name: "i18nPlural", type: e, pure: !0 });
} return e; })(), ii = (() => { class e {
    transform(t, n) { if (t == null)
        return ""; if (typeof n != "object" || typeof t != "string")
        throw R(e, n); return n.hasOwnProperty(t) ? n[t] : n.hasOwnProperty("other") ? n.other : ""; }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275pipe = a.\u0275\u0275definePipe({ name: "i18nSelect", type: e, pure: !0 });
} return e; })(), ri = (() => { class e {
    transform(t) { return JSON.stringify(t, null, 2); }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275pipe = a.\u0275\u0275definePipe({ name: "json", type: e, pure: !1 });
} return e; })();
function oi(e, i) { return { key: e, value: i }; }
var si = (() => { class e {
    differs;
    constructor(t) { this.differs = t; }
    differ;
    keyValues = [];
    compareFn = it;
    transform(t, n = it) { if (!t || !(t instanceof Map) && typeof t != "object")
        return null; this.differ ??= this.differs.find(t).create(); let r = this.differ.diff(t), o = n !== this.compareFn; return r && (this.keyValues = [], r.forEachItem(s => { this.keyValues.push(oi(s.key, s.currentValue)); })), (r || o) && (n && this.keyValues.sort(n), this.compareFn = n), this.keyValues; }
    static \u0275fac = function (n) { return new (n || e)(a.\u0275\u0275directiveInject(a.KeyValueDiffers, 16)); };
    static \u0275pipe = a.\u0275\u0275definePipe({ name: "keyvalue", type: e, pure: !1 });
} return e; })();
function it(e, i) { let t = e.key, n = i.key; if (t === n)
    return 0; if (t == null)
    return 1; if (n == null)
    return -1; if (typeof t == "string" && typeof n == "string")
    return t < n ? -1 : 1; if (typeof t == "number" && typeof n == "number")
    return t - n; if (typeof t == "boolean" && typeof n == "boolean")
    return t < n ? -1 : 1; let r = String(t), o = String(n); return r == o ? 0 : r < o ? -1 : 1; }
var ai = (() => { class e {
    _locale;
    constructor(t) { this._locale = t; }
    transform(t, n, r) { if (!Re(t))
        return null; r ||= this._locale; try {
        let o = Oe(t);
        return At(o, r, n);
    }
    catch (o) {
        throw R(e, o.message);
    } }
    static \u0275fac = function (n) { return new (n || e)(a.\u0275\u0275directiveInject($, 16)); };
    static \u0275pipe = a.\u0275\u0275definePipe({ name: "number", type: e, pure: !0 });
} return e; })(), ui = (() => { class e {
    _locale;
    constructor(t) { this._locale = t; }
    transform(t, n, r) { if (!Re(t))
        return null; r ||= this._locale; try {
        let o = Oe(t);
        return wt(o, r, n);
    }
    catch (o) {
        throw R(e, o.message);
    } }
    static \u0275fac = function (n) { return new (n || e)(a.\u0275\u0275directiveInject($, 16)); };
    static \u0275pipe = a.\u0275\u0275definePipe({ name: "percent", type: e, pure: !0 });
} return e; })(), ci = (() => { class e {
    _locale;
    _defaultCurrencyCode;
    constructor(t, n = "USD") { this._locale = t, this._defaultCurrencyCode = n; }
    transform(t, n = this._defaultCurrencyCode, r = "symbol", o, s) { if (!Re(t))
        return null; s ||= this._locale, typeof r == "boolean" && (r = r ? "symbol" : "code"); let u = n || this._defaultCurrencyCode; r !== "code" && (r === "symbol" || r === "symbol-narrow" ? u = pt(u, r === "symbol" ? "wide" : "narrow", s) : u = r); try {
        let D = Oe(t);
        return Et(D, s, u, n, o);
    }
    catch (D) {
        throw R(e, D.message);
    } }
    static \u0275fac = function (n) { return new (n || e)(a.\u0275\u0275directiveInject($, 16), a.\u0275\u0275directiveInject(un, 16)); };
    static \u0275pipe = a.\u0275\u0275definePipe({ name: "currency", type: e, pure: !0 });
} return e; })();
function Re(e) { return !(e == null || e === "" || e !== e); }
function Oe(e) { if (typeof e == "string" && !isNaN(Number(e) - parseFloat(e)))
    return Number(e); if (typeof e != "number")
    throw new b(2309, !1); return e; }
var di = (() => { class e {
    transform(t, n, r) { if (t == null)
        return null; if (!(typeof t == "string" || Array.isArray(t)))
        throw R(e, t); return t.slice(n, r); }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275pipe = a.\u0275\u0275definePipe({ name: "slice", type: e, pure: !1 });
} return e; })();
var li = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275mod = a.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = a.\u0275\u0275defineInjector({});
} return e; })();
import * as O from "@angular/core";
import { inject as L, DestroyRef as Bt, \u0275registerLocaleData as Di, Version as pi, \u0275\u0275defineInjectable as mi, DOCUMENT as Nt, \u0275formatRuntimeError as Ci, InjectionToken as ke, \u0275RuntimeError as xe, \u0275IMAGE_CONFIG as yi, Renderer2 as Fi, ElementRef as Ei, Injector as wi, \u0275performanceMarkFeature as Ai, booleanAttribute as le, numberAttribute as Rt, ChangeDetectorRef as Si, \u0275IMAGE_CONFIG_DEFAULTS as _i, \u0275unwrapSafeValue as vi } from "@angular/core";
import { DOCUMENT as Jr, \u0275IMAGE_CONFIG as Qr } from "@angular/core";
import * as Mt from "@angular/core";
import { InjectionToken as fi } from "@angular/core";
var hi = new fi("", { factory: () => typeof window < "u" && typeof window.NavigationPrecommitController < "u" }), Tt = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = Mt.\u0275\u0275defineInjectable({ token: e, factory: () => window.navigation, providedIn: "platform" });
} return e; })();
function gi(e, i) { i = encodeURIComponent(i); for (let t of e.split(";")) {
    let n = t.indexOf("="), [r, o] = n == -1 ? [t, ""] : [t.slice(0, n), t.slice(n + 1)];
    if (r.trim() === i)
        return decodeURIComponent(o);
} return null; }
var Pe = class {
};
var Pr = (() => { class e extends Ce {
    navigation = L(Tt);
    destroyRef = L(Bt);
    constructor() { super(L(B)), this.registerNavigationListeners(); }
    registerNavigationListeners() { let t = () => { this._notifyUrlChangeListeners(this.path(!0), this.getState()); }; this.navigation.addEventListener("currententrychange", t), this.destroyRef.onDestroy(() => { this.navigation.removeEventListener("currententrychange", t); }); }
    getState() { return this.navigation.currentEntry?.getState(); }
    replaceState(t, n = "", r = null) { let o = this.prepareExternalUrl(t + S(n)); this.navigation.navigate(o, { state: r, history: "replace" }); }
    go(t, n = "", r = null) { let o = this.prepareExternalUrl(t + S(n)); this.navigation.navigate(o, { state: r, history: "push" }); }
    back() { this.navigation.back(); }
    forward() { this.navigation.forward(); }
    onUrlChange(t) { return this._urlChangeListeners.push(t), () => { let n = this._urlChangeListeners.indexOf(t); this._urlChangeListeners.splice(n, 1); }; }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = O.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })();
function Br(e, i, t) { return Di(e, i, t); }
var bi = "browser", Ii = "server";
function Nr(e) { return e === bi; }
function kr(e) { return e === Ii; }
var xr = new pi("21.2.10"), $r = (() => { class e {
    static \u0275prov = mi({ token: e, providedIn: "root", factory: () => typeof ngServerMode < "u" && ngServerMode ? new Ne : new Be(L(Nt), window) });
} return e; })(), Be = class {
    document;
    window;
    offset = () => [0, 0];
    constructor(i, t) { this.document = i, this.window = t; }
    setOffset(i) { Array.isArray(i) ? this.offset = () => i : this.offset = i; }
    getScrollPosition() { return [this.window.scrollX, this.window.scrollY]; }
    scrollToPosition(i, t) { this.window.scrollTo(K(Y({}, t), { left: i[0], top: i[1] })); }
    scrollToAnchor(i, t) { let n = Li(this.document, i); n && (this.scrollToElement(n, t), n.focus()); }
    setHistoryScrollRestoration(i) { try {
        this.window.history.scrollRestoration = i;
    }
    catch {
        console.warn(Ci(2400, !1));
    } }
    scrollToElement(i, t) { let n = i.getBoundingClientRect(), r = n.left + this.window.pageXOffset, o = n.top + this.window.pageYOffset, s = this.offset(); this.window.scrollTo(K(Y({}, t), { left: r - s[0], top: o - s[1] })); }
};
function Li(e, i) { let t = e.getElementById(i) || e.getElementsByName(i)[0]; if (t)
    return t; if (typeof e.createTreeWalker == "function" && e.body && typeof e.body.attachShadow == "function") {
    let n = e.createTreeWalker(e.body, NodeFilter.SHOW_ELEMENT), r = n.currentNode;
    for (; r;) {
        let o = r.shadowRoot;
        if (o) {
            let s = o.getElementById(i) || o.querySelector(`[name="${i}"]`);
            if (s)
                return s;
        }
        r = n.nextNode();
    }
} return null; }
var Ne = class {
    setOffset(i) { }
    getScrollPosition() { return [0, 0]; }
    scrollToPosition(i) { }
    scrollToAnchor(i) { }
    setHistoryScrollRestoration(i) { }
}, fe = "20";
function kt(e) { return /^https?:\/\//.test(e); }
function xt(e) { if (!(typeof e == "string") || e.trim() === "")
    return !1; try {
    let t = new URL(e);
    return !0;
}
catch {
    return !1;
} }
function Mi(e) { return e.endsWith("/") ? e.slice(0, -1) : e; }
function Ti(e) { return e.startsWith("/") ? e.slice(1) : e; }
var $t = e => e.src, $e = new ke("", { factory: () => $t });
function he(e, i) { return function (n) { return xt(n) || Ri(n, i || []), n = Mi(n), [{ provide: $e, useValue: s => (kt(s.src) && Oi(n, s.src), e(n, K(Y({}, s), { src: Ti(s.src) }))) }]; }; }
function Ri(e, i) { throw new xe(2959, !1); }
function Oi(e, i) { throw new xe(2959, !1); }
function ge(e, i) { return typeof e == "string" ? e : Object.entries(e).map(([t, n]) => `${t}${i}${n}`).join(","); }
var Ur = he(Pi, void 0);
function Pi(e, i) { let t = "format=auto"; if (i.width && (t += `,width=${i.width}`), i.height && (t += `,height=${i.height}`), i.isPlaceholder && (t += `,quality=${fe}`), i.loaderParams?.transform) {
    let n = ge(i.loaderParams.transform, "=");
    t += `,${n}`;
} return `${e}/cdn-cgi/image/${t}/${i.src}`; }
var jr = he(Bi, void 0);
function Bi(e, i) { let n = `f_auto,${i.isPlaceholder ? "q_auto:low" : "q_auto"}`; if (i.width && (n += `,w_${i.width}`), i.height && (n += `,h_${i.height}`), i.loaderParams?.rounded && (n += ",r_max"), i.loaderParams?.transform) {
    let r = ge(i.loaderParams.transform, "_");
    n += `,${r}`;
} return `${e}/image/upload/${n}/${i.src}`; }
var zr = he(Ni, void 0);
function Ni(e, i) { let { src: t, width: n } = i, r = []; if (n && r.push(`w-${n}`), i.height && r.push(`h-${i.height}`), i.isPlaceholder && r.push(`q-${fe}`), i.loaderParams?.transform) {
    let u = ge(i.loaderParams.transform, "-");
    r.push(u);
} let o = r.length ? [e, `tr:${r.join(",")}`, t] : [e, t]; return new URL(o.join("/")).href; }
var Vr = he(ki, void 0);
function ki(e, i) { let t = []; if (t.push("auto=format"), i.width && t.push(`w=${i.width}`), i.height && t.push(`h=${i.height}`), i.isPlaceholder && t.push(`q=${fe}`), i.loaderParams?.transform) {
    let r = ge(i.loaderParams.transform, "=").split(",");
    t.push(...r);
} let n = new URL(`${e}/${i.src}`); return n.search = t.join("&"), n.href; }
function Gr(e) { if (e && !xt(e))
    throw new xe(2959, !1); return e && (e = new URL(e).origin), [{ provide: $e, useValue: n => xi(n, e) }]; }
var Ot = new Map([["height", "h"], ["fit", "fit"], ["quality", "q"], ["q", "q"], ["position", "position"]]);
function xi(e, i) { let t = new URL(i ?? "https://a/"); t.pathname = "/.netlify/images", !kt(e.src) && !e.src.startsWith("/") && (e.src = "/" + e.src), t.searchParams.set("url", e.src), e.width && t.searchParams.set("w", e.width.toString()), e.height && t.searchParams.set("h", e.height.toString()); let n = e.loaderParams?.quality ?? e.loaderParams?.q; e.isPlaceholder && !n && t.searchParams.set("q", fe); for (let [r, o] of Object.entries(e.loaderParams ?? {}))
    Ot.has(r) && t.searchParams.set(Ot.get(r), o.toString()); return t.hostname === "a" ? t.href.replace(t.origin, "") : t.href; }
var Hr = new ke("");
var $i = new ke("", { factory: () => new Set }), Ui = (() => { class e {
    preloadedImages = L($i);
    document = L(Nt);
    errorShown = !1;
    createPreloadLinkTag(t, n, r, o) { if (this.preloadedImages.has(n))
        return; this.preloadedImages.add(n); let s = t.createElement("link"); t.setAttribute(s, "as", "image"), t.setAttribute(s, "href", n), t.setAttribute(s, "rel", "preload"), t.setAttribute(s, "fetchpriority", "high"), o && t.setAttribute(s, "imageSizes", o), r && t.setAttribute(s, "imageSrcset", r), t.appendChild(this.document.head, s); }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = O.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
var Pt = /^((\s*\d+w\s*(,|$)){1,})$/;
var ji = [1, 2], zi = 640;
var Vi = 1920, Gi = 1080;
var Wr = (() => { class e {
    imageLoader = L($e);
    config = Hi(L(yi));
    renderer = L(Fi);
    imgElement = L(Ei).nativeElement;
    injector = L(wi);
    destroyRef = L(Bt);
    lcpObserver;
    _renderedSrc = null;
    ngSrc;
    ngSrcset;
    sizes;
    width;
    height;
    decoding;
    loading;
    priority = !1;
    loaderParams;
    disableOptimizedSrcset = !1;
    fill = !1;
    placeholder;
    placeholderConfig;
    src;
    srcset;
    constructor() { this.destroyRef.onDestroy(() => { this.renderer.removeAttribute(this.imgElement, "loading"); }); }
    ngOnInit() { Ai("NgOptimizedImage"), this.placeholder && this.removePlaceholderOnLoad(this.imgElement), this.setHostAttributes(); }
    setHostAttributes() { this.fill ? this.sizes ||= "100vw" : (this.setHostAttribute("width", this.width.toString()), this.setHostAttribute("height", this.height.toString())), this.setHostAttribute("loading", this.getLoadingBehavior()), this.setHostAttribute("fetchpriority", this.getFetchPriority()), this.setHostAttribute("decoding", this.getDecoding()), this.setHostAttribute("ng-img", "true"); let t = this.updateSrcAndSrcset(); this.sizes ? this.getLoadingBehavior() === "lazy" ? this.setHostAttribute("sizes", "auto, " + this.sizes) : this.setHostAttribute("sizes", this.sizes) : this.ngSrcset && Pt.test(this.ngSrcset) && this.getLoadingBehavior() === "lazy" && this.setHostAttribute("sizes", "auto, 100vw"), typeof ngServerMode < "u" && ngServerMode && this.priority && this.injector.get(Ui).createPreloadLinkTag(this.renderer, this.getRewrittenSrc(), t, this.sizes); }
    ngOnChanges(t) { if (t.ngSrc && !t.ngSrc.isFirstChange()) {
        let n = this._renderedSrc;
        this.updateSrcAndSrcset(!0);
    } }
    getAspectRatio() { return this.width && this.height && this.height !== 0 ? this.width / this.height : null; }
    callImageLoader(t) { let n = t; this.loaderParams && (n.loaderParams = this.loaderParams); let r = this.getAspectRatio(); return r !== null && n.width && (n.height = Math.round(n.width / r)), this.imageLoader(n); }
    getLoadingBehavior() { return !this.priority && this.loading !== void 0 ? this.loading : this.priority ? "eager" : "lazy"; }
    getFetchPriority() { return this.priority ? "high" : "auto"; }
    getDecoding() { return this.priority ? "sync" : this.decoding ?? "auto"; }
    getRewrittenSrc() { if (!this._renderedSrc) {
        let t = { src: this.ngSrc };
        this._renderedSrc = this.callImageLoader(t);
    } return this._renderedSrc; }
    getRewrittenSrcset() { let t = Pt.test(this.ngSrcset); return this.ngSrcset.split(",").filter(r => r !== "").map(r => { r = r.trim(); let o = t ? parseFloat(r) : parseFloat(r) * this.width; return `${this.callImageLoader({ src: this.ngSrc, width: o })} ${r}`; }).join(", "); }
    getAutomaticSrcset() { return this.sizes ? this.getResponsiveSrcset() : this.getFixedSrcset(); }
    getResponsiveSrcset() { let { breakpoints: t } = this.config, n = t; return this.sizes?.trim() === "100vw" && (n = t.filter(o => o >= zi)), n.map(o => `${this.callImageLoader({ src: this.ngSrc, width: o })} ${o}w`).join(", "); }
    updateSrcAndSrcset(t = !1) { t && (this._renderedSrc = null); let n = this.getRewrittenSrc(); this.setHostAttribute("src", n); let r; return this.ngSrcset ? r = this.getRewrittenSrcset() : this.shouldGenerateAutomaticSrcset() && (r = this.getAutomaticSrcset()), r && this.setHostAttribute("srcset", r), r; }
    getFixedSrcset() { return ji.map(n => `${this.callImageLoader({ src: this.ngSrc, width: this.width * n })} ${n}x`).join(", "); }
    shouldGenerateAutomaticSrcset() { let t = !1; return this.sizes || (t = this.width > Vi || this.height > Gi), !this.disableOptimizedSrcset && !this.srcset && this.imageLoader !== $t && !t; }
    generatePlaceholder(t) { let { placeholderResolution: n } = this.config; return t === !0 ? `url(${this.callImageLoader({ src: this.ngSrc, width: n, isPlaceholder: !0 })})` : typeof t == "string" ? `url(${t})` : null; }
    shouldBlurPlaceholder(t) { return !t || !t.hasOwnProperty("blur") ? !0 : !!t.blur; }
    removePlaceholderOnLoad(t) { let n = () => { let s = this.injector.get(Si); r(), o(), this.placeholder = !1, s.markForCheck(); }, r = this.renderer.listen(t, "load", n), o = this.renderer.listen(t, "error", n); this.destroyRef.onDestroy(() => { r(), o(); }), Wi(t, n); }
    setHostAttribute(t, n) { this.renderer.setAttribute(this.imgElement, t, n); }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275dir = O.\u0275\u0275defineDirective({ type: e, selectors: [["img", "ngSrc", ""]], hostVars: 18, hostBindings: function (n, r) { n & 2 && O.\u0275\u0275styleProp("position", r.fill ? "absolute" : null)("width", r.fill ? "100%" : null)("height", r.fill ? "100%" : null)("inset", r.fill ? "0" : null)("background-size", r.placeholder ? "cover" : null)("background-position", r.placeholder ? "50% 50%" : null)("background-repeat", r.placeholder ? "no-repeat" : null)("background-image", r.placeholder ? r.generatePlaceholder(r.placeholder) : null)("filter", r.placeholder && r.shouldBlurPlaceholder(r.placeholderConfig) ? "blur(15px)" : null); }, inputs: { ngSrc: [2, "ngSrc", "ngSrc", Zi], ngSrcset: "ngSrcset", sizes: "sizes", width: [2, "width", "width", Rt], height: [2, "height", "height", Rt], decoding: "decoding", loading: "loading", priority: [2, "priority", "priority", le], loaderParams: "loaderParams", disableOptimizedSrcset: [2, "disableOptimizedSrcset", "disableOptimizedSrcset", le], fill: [2, "fill", "fill", le], placeholder: [2, "placeholder", "placeholder", Yi], placeholderConfig: "placeholderConfig", src: "src", srcset: "srcset" }, features: [O.\u0275\u0275NgOnChangesFeature] });
} return e; })();
function Hi(e) { let i = {}; return e.breakpoints && (i.breakpoints = e.breakpoints.sort((t, n) => t - n)), Object.assign({}, _i, e, i); }
function Wi(e, i) { e.complete && e.naturalWidth && i(); }
function Zi(e) { return typeof e == "string" ? e : vi(e); }
function Yi(e) { return typeof e == "string" && e !== "true" && e !== "false" && e !== "" ? e : le(e); }
export { J as APP_BASE_HREF, Yn as AsyncPipe, He as BrowserPlatformLocation, li as CommonModule, ci as CurrencyPipe, Lt as DATE_PIPE_DEFAULT_OPTIONS, It as DATE_PIPE_DEFAULT_TIMEZONE, Jr as DOCUMENT, ei as DatePipe, ai as DecimalPipe, E as FormStyle, A as FormatWidth, cn as HashLocationStrategy, ni as I18nPluralPipe, ii as I18nSelectPipe, Qr as IMAGE_CONFIG, $e as IMAGE_LOADER, ri as JsonPipe, si as KeyValuePipe, Vt as LOCATION_INITIALIZED, Ce as Location, B as LocationStrategy, Kn as LowerCasePipe, kn as NgClass, xn as NgComponentOutlet, vt as NgFor, vt as NgForOf, ae as NgForOfContext, Un as NgIf, ue as NgIfContext, _t as NgLocaleLocalization, de as NgLocalization, Wr as NgOptimizedImage, bt as NgPlural, Vn as NgPluralCase, Gn as NgStyle, Me as NgSwitch, jn as NgSwitchCase, zn as NgSwitchDefault, Hn as NgTemplateOutlet, Zt as NoTrailingSlashPathLocationStrategy, W as NumberFormatStyle, m as NumberSymbol, Hr as PRECONNECT_CHECK_BLOCKLIST, Q as PathLocationStrategy, ui as PercentPipe, x as PlatformLocation, Tt as PlatformNavigation, N as Plural, di as SlicePipe, qn as TitleCasePipe, Yt as TrailingSlashPathLocationStrategy, d as TranslationWidth, Jn as UpperCasePipe, xr as VERSION, $r as ViewportScroller, st as WeekDay, Pe as XhrFactory, Et as formatCurrency, Ct as formatDate, At as formatNumber, wt as formatPercent, pt as getCurrencySymbol, gn as getLocaleCurrencyCode, hn as getLocaleCurrencyName, fn as getLocaleCurrencySymbol, j as getLocaleDateFormat, V as getLocaleDateTimeFormat, ct as getLocaleDayNames, ut as getLocaleDayPeriods, pn as getLocaleDirection, lt as getLocaleEraNames, gt as getLocaleExtraDayPeriodRules, Dt as getLocaleExtraDayPeriods, dn as getLocaleFirstDayOfWeek, at as getLocaleId, dt as getLocaleMonthNames, ce as getLocaleNumberFormat, v as getLocaleNumberSymbol, ft as getLocalePluralCase, z as getLocaleTimeFormat, ln as getLocaleWeekEndRange, mt as getNumberOfCurrencyDigits, Nr as isPlatformBrowser, kr as isPlatformServer, Ur as provideCloudflareLoader, jr as provideCloudinaryLoader, zr as provideImageKitLoader, Vr as provideImgixLoader, Gr as provideNetlifyLoader, Br as registerLocaleData, pe as \u0275DomAdapter, Pr as \u0275NavigationAdapterForLocation, Ne as \u0275NullViewportScroller, bi as \u0275PLATFORM_BROWSER_ID, Ii as \u0275PLATFORM_SERVER_ID, hi as \u0275PRECOMMIT_HANDLER_SUPPORTED, X as \u0275getDOM, S as \u0275normalizeQueryParams, gi as \u0275parseCookieValue, zt as \u0275setRootDomAdapter };
/*! Bundled license information:

@angular/common/fesm2022/_platform_location-chunk.mjs:
@angular/common/fesm2022/_location-chunk.mjs:
@angular/common/fesm2022/_common_module-chunk.mjs:
@angular/common/fesm2022/_platform_navigation-chunk.mjs:
@angular/common/fesm2022/_xhr-chunk.mjs:
@angular/common/fesm2022/common.mjs:
  (**
   * @license Angular v21.2.10
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
