import { d as Ae, g as ke, h as _e } from "@nf-internal/chunk-674MHT74";
import "@nf-internal/chunk-FIE2NKNJ";
import { B as Ie, c as G, g as Me, h as S, l as B, r as Ne, t as Oe, v as se, z as De } from "@nf-internal/chunk-K7B64FOA";
import { a as $, c as Pe, d as oe } from "@nf-internal/chunk-4CLCTAJ7";
import * as l from "@angular/core";
import { \u0275RuntimeError as N, inject as g, NgZone as Rr, DestroyRef as Pr, \u0275formatRuntimeError as ft, InjectionToken as I, \u0275TracingService as Mr, runInInjectionContext as ue, PendingTasks as Be, CSP_NONCE as Nr, DOCUMENT as ze, EnvironmentInjector as Or, makeEnvironmentProviders as Dr } from "@angular/core";
var b = class e {
    headers;
    normalizedNames = new Map;
    lazyInit;
    lazyUpdate = null;
    constructor(t) {
        t ? typeof t == "string" ? this.lazyInit = () => {
            this.headers = new Map, t.split(`
`).forEach(r => { let n = r.indexOf(":"); if (n > 0) {
                let o = r.slice(0, n), s = r.slice(n + 1).trim();
                this.addHeaderEntry(o, s);
            } });
        } : typeof Headers < "u" && t instanceof Headers ? (this.headers = new Map, t.forEach((r, n) => { this.addHeaderEntry(n, r); })) : this.lazyInit = () => { this.headers = new Map, Object.entries(t).forEach(([r, n]) => { this.setHeaderEntries(r, n); }); } : this.headers = new Map;
    }
    has(t) { return this.init(), this.headers.has(t.toLowerCase()); }
    get(t) { this.init(); let r = this.headers.get(t.toLowerCase()); return r && r.length > 0 ? r[0] : null; }
    keys() { return this.init(), Array.from(this.normalizedNames.values()); }
    getAll(t) { return this.init(), this.headers.get(t.toLowerCase()) || null; }
    append(t, r) { return this.clone({ name: t, value: r, op: "a" }); }
    set(t, r) { return this.clone({ name: t, value: r, op: "s" }); }
    delete(t, r) { return this.clone({ name: t, value: r, op: "d" }); }
    maybeSetNormalizedName(t, r) { this.normalizedNames.has(r) || this.normalizedNames.set(r, t); }
    init() { this.lazyInit && (this.lazyInit instanceof e ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach(t => this.applyUpdate(t)), this.lazyUpdate = null)); }
    copyFrom(t) { t.init(), Array.from(t.headers.keys()).forEach(r => { this.headers.set(r, t.headers.get(r)), this.normalizedNames.set(r, t.normalizedNames.get(r)); }); }
    clone(t) { let r = new e; return r.lazyInit = this.lazyInit && this.lazyInit instanceof e ? this.lazyInit : this, r.lazyUpdate = (this.lazyUpdate || []).concat([t]), r; }
    applyUpdate(t) { let r = t.name.toLowerCase(); switch (t.op) {
        case "a":
        case "s":
            let n = t.value;
            if (typeof n == "string" && (n = [n]), n.length === 0)
                return;
            this.maybeSetNormalizedName(t.name, r);
            let o = (t.op === "a" ? this.headers.get(r) : void 0) || [];
            o.push(...n), this.headers.set(r, o);
            break;
        case "d":
            let s = t.value;
            if (!s)
                this.headers.delete(r), this.normalizedNames.delete(r);
            else {
                let i = this.headers.get(r);
                if (!i)
                    return;
                i = i.filter(d => s.indexOf(d) === -1), i.length === 0 ? (this.headers.delete(r), this.normalizedNames.delete(r)) : this.headers.set(r, i);
            }
            break;
    } }
    addHeaderEntry(t, r) { let n = t.toLowerCase(); this.maybeSetNormalizedName(t, n), this.headers.has(n) ? this.headers.get(n).push(r) : this.headers.set(n, [r]); }
    setHeaderEntries(t, r) { let n = (Array.isArray(r) ? r : [r]).map(s => s.toString()), o = t.toLowerCase(); this.headers.set(o, n), this.maybeSetNormalizedName(t, o); }
    forEach(t) { this.init(), Array.from(this.normalizedNames.keys()).forEach(r => t(this.normalizedNames.get(r), this.headers.get(r))); }
};
var ae = class {
    defaultValue;
    constructor(t) { this.defaultValue = t; }
}, Y = class {
    map = new Map;
    set(t, r) { return this.map.set(t, r), this; }
    get(t) { return this.map.has(t) || this.map.set(t, t.defaultValue()), this.map.get(t); }
    delete(t) { return this.map.delete(t), this; }
    has(t) { return this.map.has(t); }
    keys() { return this.map.keys(); }
}, Z = class {
    encodeKey(t) { return xe(t); }
    encodeValue(t) { return xe(t); }
    decodeKey(t) { return decodeURIComponent(t); }
    decodeValue(t) { return decodeURIComponent(t); }
};
function Ir(e, t) { let r = new Map; return e.length > 0 && e.replace(/^\?/, "").split("&").forEach(o => { let s = o.indexOf("="), [i, d] = s == -1 ? [t.decodeKey(o), ""] : [t.decodeKey(o.slice(0, s)), t.decodeValue(o.slice(s + 1))], a = r.get(i) || []; a.push(d), r.set(i, a); }), r; }
var Ar = /%(\d[a-f0-9])/gi, kr = { 40: "@", "3A": ":", 24: "$", "2C": ",", "3B": ";", "3D": "=", "3F": "?", "2F": "/" };
function xe(e) { return encodeURIComponent(e).replace(Ar, (t, r) => kr[r] ?? t); }
function W(e) { return `${e}`; }
var M = class e {
    map;
    encoder;
    updates = null;
    cloneFrom = null;
    constructor(t = {}) { if (this.encoder = t.encoder || new Z, t.fromString) {
        if (t.fromObject)
            throw new N(2805, !1);
        this.map = Ir(t.fromString, this.encoder);
    }
    else
        t.fromObject ? (this.map = new Map, Object.keys(t.fromObject).forEach(r => { let n = t.fromObject[r], o = Array.isArray(n) ? n.map(W) : [W(n)]; this.map.set(r, o); })) : this.map = null; }
    has(t) { return this.init(), this.map.has(t); }
    get(t) { this.init(); let r = this.map.get(t); return r ? r[0] : null; }
    getAll(t) { return this.init(), this.map.get(t) || null; }
    keys() { return this.init(), Array.from(this.map.keys()); }
    append(t, r) { return this.clone({ param: t, value: r, op: "a" }); }
    appendAll(t) { let r = []; return Object.keys(t).forEach(n => { let o = t[n]; Array.isArray(o) ? o.forEach(s => { r.push({ param: n, value: s, op: "a" }); }) : r.push({ param: n, value: o, op: "a" }); }), this.clone(r); }
    set(t, r) { return this.clone({ param: t, value: r, op: "s" }); }
    delete(t, r) { return this.clone({ param: t, value: r, op: "d" }); }
    toString() { return this.init(), this.keys().map(t => { let r = this.encoder.encodeKey(t); return this.map.get(t).map(n => r + "=" + this.encoder.encodeValue(n)).join("&"); }).filter(t => t !== "").join("&"); }
    clone(t) { let r = new e({ encoder: this.encoder }); return r.cloneFrom = this.cloneFrom || this, r.updates = (this.updates || []).concat(t), r; }
    init() { this.map === null && (this.map = new Map), this.cloneFrom !== null && (this.cloneFrom.init(), this.cloneFrom.keys().forEach(t => this.map.set(t, this.cloneFrom.map.get(t))), this.updates.forEach(t => { switch (t.op) {
        case "a":
        case "s":
            let r = (t.op === "a" ? this.map.get(t.param) : void 0) || [];
            r.push(W(t.value)), this.map.set(t.param, r);
            break;
        case "d": if (t.value !== void 0) {
            let n = this.map.get(t.param) || [], o = n.indexOf(W(t.value));
            o !== -1 && n.splice(o, 1), n.length > 0 ? this.map.set(t.param, n) : this.map.delete(t.param);
        }
        else {
            this.map.delete(t.param);
            break;
        }
    } }), this.cloneFrom = this.updates = null); }
};
function _r(e) { switch (e) {
    case "DELETE":
    case "GET":
    case "HEAD":
    case "OPTIONS":
    case "JSONP": return !1;
    default: return !0;
} }
function Fe(e) { return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer; }
function je(e) { return typeof Blob < "u" && e instanceof Blob; }
function Ce(e) { return typeof FormData < "u" && e instanceof FormData; }
function xr(e) { return typeof URLSearchParams < "u" && e instanceof URLSearchParams; }
var z = "Content-Type", Q = "Accept", Xe = "text/plain", Je = "application/json", Ve = `${Je}, ${Xe}, */*`, F = class e {
    url;
    body = null;
    headers;
    context;
    reportProgress = !1;
    withCredentials = !1;
    credentials;
    keepalive = !1;
    cache;
    priority;
    mode;
    redirect;
    referrer;
    integrity;
    referrerPolicy;
    responseType = "json";
    method;
    params;
    urlWithParams;
    transferCache;
    timeout;
    constructor(t, r, n, o) { this.url = r, this.method = t.toUpperCase(); let s; if (_r(this.method) || o ? (this.body = n !== void 0 ? n : null, s = o) : s = n, s) {
        if (this.reportProgress = !!s.reportProgress, this.withCredentials = !!s.withCredentials, this.keepalive = !!s.keepalive, s.responseType && (this.responseType = s.responseType), s.headers && (this.headers = s.headers), s.context && (this.context = s.context), s.params && (this.params = s.params), s.priority && (this.priority = s.priority), s.cache && (this.cache = s.cache), s.credentials && (this.credentials = s.credentials), typeof s.timeout == "number") {
            if (s.timeout < 1 || !Number.isInteger(s.timeout))
                throw new N(2822, "");
            this.timeout = s.timeout;
        }
        s.mode && (this.mode = s.mode), s.redirect && (this.redirect = s.redirect), s.integrity && (this.integrity = s.integrity), s.referrer && (this.referrer = s.referrer), s.referrerPolicy && (this.referrerPolicy = s.referrerPolicy), this.transferCache = s.transferCache;
    } if (this.headers ??= new b, this.context ??= new Y, !this.params)
        this.params = new M, this.urlWithParams = r;
    else {
        let i = this.params.toString();
        if (i.length === 0)
            this.urlWithParams = r;
        else {
            let d = r.indexOf("?"), a = d === -1 ? "?" : d < r.length - 1 ? "&" : "";
            this.urlWithParams = r + a + i;
        }
    } }
    serializeBody() { return this.body === null ? null : typeof this.body == "string" || Fe(this.body) || je(this.body) || Ce(this.body) || xr(this.body) ? this.body : this.body instanceof M ? this.body.toString() : typeof this.body == "object" || typeof this.body == "boolean" || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString(); }
    detectContentTypeHeader() { return this.body === null || Ce(this.body) ? null : je(this.body) ? this.body.type || null : Fe(this.body) ? null : typeof this.body == "string" ? Xe : this.body instanceof M ? "application/x-www-form-urlencoded;charset=UTF-8" : typeof this.body == "object" || typeof this.body == "number" || typeof this.body == "boolean" ? Je : null; }
    clone(t = {}) { let r = t.method || this.method, n = t.url || this.url, o = t.responseType || this.responseType, s = t.keepalive ?? this.keepalive, i = t.priority || this.priority, d = t.cache || this.cache, a = t.mode || this.mode, h = t.redirect || this.redirect, p = t.credentials || this.credentials, u = t.referrer || this.referrer, T = t.integrity || this.integrity, v = t.referrerPolicy || this.referrerPolicy, P = t.transferCache ?? this.transferCache, y = t.timeout ?? this.timeout, c = t.body !== void 0 ? t.body : this.body, f = t.withCredentials ?? this.withCredentials, w = t.reportProgress ?? this.reportProgress, k = t.headers || this.headers, m = t.params || this.params, _ = t.context ?? this.context; return t.setHeaders !== void 0 && (k = Object.keys(t.setHeaders).reduce((x, O) => x.set(O, t.setHeaders[O]), k)), t.setParams && (m = Object.keys(t.setParams).reduce((x, O) => x.set(O, t.setParams[O]), m)), new e(r, n, c, { params: m, headers: k, context: _, reportProgress: w, responseType: o, withCredentials: f, transferCache: P, keepalive: s, cache: d, priority: i, timeout: y, mode: a, redirect: h, credentials: p, referrer: u, integrity: T, referrerPolicy: v }); }
}, R = (function (e) { return e[e.Sent = 0] = "Sent", e[e.UploadProgress = 1] = "UploadProgress", e[e.ResponseHeader = 2] = "ResponseHeader", e[e.DownloadProgress = 3] = "DownloadProgress", e[e.Response = 4] = "Response", e[e.User = 5] = "User", e; })(R || {}), C = class {
    headers;
    status;
    statusText;
    url;
    ok;
    type;
    redirected;
    responseType;
    constructor(t, r = 200, n = "OK") { this.headers = t.headers || new b, this.status = t.status !== void 0 ? t.status : r, this.statusText = t.statusText || n, this.url = t.url || null, this.redirected = t.redirected, this.responseType = t.responseType, this.ok = this.status >= 200 && this.status < 300; }
}, X = class e extends C {
    constructor(t = {}) { super(t); }
    type = R.ResponseHeader;
    clone(t = {}) { return new e({ headers: t.headers || this.headers, status: t.status !== void 0 ? t.status : this.status, statusText: t.statusText || this.statusText, url: t.url || this.url || void 0 }); }
}, D = class e extends C {
    body;
    constructor(t = {}) { super(t), this.body = t.body !== void 0 ? t.body : null; }
    type = R.Response;
    clone(t = {}) { return new e({ body: t.body !== void 0 ? t.body : this.body, headers: t.headers || this.headers, status: t.status !== void 0 ? t.status : this.status, statusText: t.statusText || this.statusText, url: t.url || this.url || void 0, redirected: t.redirected ?? this.redirected, responseType: t.responseType ?? this.responseType }); }
}, E = class extends C {
    name = "HttpErrorResponse";
    message;
    error;
    ok = !1;
    constructor(t) { super(t, 0, "Unknown Error"), this.status >= 200 && this.status < 300 ? this.message = `Http failure during parsing for ${t.url || "(unknown url)"}` : this.message = `Http failure response for ${t.url || "(unknown url)"}: ${t.status} ${t.statusText}`, this.error = t.error || null; }
}, he = 200, Fr = 204, $e = (function (e) { return e[e.Continue = 100] = "Continue", e[e.SwitchingProtocols = 101] = "SwitchingProtocols", e[e.Processing = 102] = "Processing", e[e.EarlyHints = 103] = "EarlyHints", e[e.Ok = 200] = "Ok", e[e.Created = 201] = "Created", e[e.Accepted = 202] = "Accepted", e[e.NonAuthoritativeInformation = 203] = "NonAuthoritativeInformation", e[e.NoContent = 204] = "NoContent", e[e.ResetContent = 205] = "ResetContent", e[e.PartialContent = 206] = "PartialContent", e[e.MultiStatus = 207] = "MultiStatus", e[e.AlreadyReported = 208] = "AlreadyReported", e[e.ImUsed = 226] = "ImUsed", e[e.MultipleChoices = 300] = "MultipleChoices", e[e.MovedPermanently = 301] = "MovedPermanently", e[e.Found = 302] = "Found", e[e.SeeOther = 303] = "SeeOther", e[e.NotModified = 304] = "NotModified", e[e.UseProxy = 305] = "UseProxy", e[e.Unused = 306] = "Unused", e[e.TemporaryRedirect = 307] = "TemporaryRedirect", e[e.PermanentRedirect = 308] = "PermanentRedirect", e[e.BadRequest = 400] = "BadRequest", e[e.Unauthorized = 401] = "Unauthorized", e[e.PaymentRequired = 402] = "PaymentRequired", e[e.Forbidden = 403] = "Forbidden", e[e.NotFound = 404] = "NotFound", e[e.MethodNotAllowed = 405] = "MethodNotAllowed", e[e.NotAcceptable = 406] = "NotAcceptable", e[e.ProxyAuthenticationRequired = 407] = "ProxyAuthenticationRequired", e[e.RequestTimeout = 408] = "RequestTimeout", e[e.Conflict = 409] = "Conflict", e[e.Gone = 410] = "Gone", e[e.LengthRequired = 411] = "LengthRequired", e[e.PreconditionFailed = 412] = "PreconditionFailed", e[e.PayloadTooLarge = 413] = "PayloadTooLarge", e[e.UriTooLong = 414] = "UriTooLong", e[e.UnsupportedMediaType = 415] = "UnsupportedMediaType", e[e.RangeNotSatisfiable = 416] = "RangeNotSatisfiable", e[e.ExpectationFailed = 417] = "ExpectationFailed", e[e.ImATeapot = 418] = "ImATeapot", e[e.MisdirectedRequest = 421] = "MisdirectedRequest", e[e.UnprocessableEntity = 422] = "UnprocessableEntity", e[e.Locked = 423] = "Locked", e[e.FailedDependency = 424] = "FailedDependency", e[e.TooEarly = 425] = "TooEarly", e[e.UpgradeRequired = 426] = "UpgradeRequired", e[e.PreconditionRequired = 428] = "PreconditionRequired", e[e.TooManyRequests = 429] = "TooManyRequests", e[e.RequestHeaderFieldsTooLarge = 431] = "RequestHeaderFieldsTooLarge", e[e.UnavailableForLegalReasons = 451] = "UnavailableForLegalReasons", e[e.InternalServerError = 500] = "InternalServerError", e[e.NotImplemented = 501] = "NotImplemented", e[e.BadGateway = 502] = "BadGateway", e[e.ServiceUnavailable = 503] = "ServiceUnavailable", e[e.GatewayTimeout = 504] = "GatewayTimeout", e[e.HttpVersionNotSupported = 505] = "HttpVersionNotSupported", e[e.VariantAlsoNegotiates = 506] = "VariantAlsoNegotiates", e[e.InsufficientStorage = 507] = "InsufficientStorage", e[e.LoopDetected = 508] = "LoopDetected", e[e.NotExtended = 510] = "NotExtended", e[e.NetworkAuthenticationRequired = 511] = "NetworkAuthenticationRequired", e; })($e || {}), jr = /^\)\]\}',?\n/, Ge = new I(""), K = (() => { class e {
    fetchImpl = g(ce, { optional: !0 })?.fetch ?? ((...r) => globalThis.fetch(...r));
    ngZone = g(Rr);
    destroyRef = g(Pr);
    handle(r) { return new G(n => { let o = new AbortController; this.doRequest(r, o.signal, n).then(de, i => n.error(new E({ error: i }))); let s; return r.timeout && (s = this.ngZone.runOutsideAngular(() => setTimeout(() => { o.signal.aborted || o.abort(new DOMException("signal timed out", "TimeoutError")); }, r.timeout))), () => { s !== void 0 && clearTimeout(s), o.abort(); }; }); }
    doRequest(r, n, o) { return oe(this, null, function* () { let s = this.createRequestInit(r), i; try {
        let y = this.ngZone.runOutsideAngular(() => this.fetchImpl(r.urlWithParams, $({ signal: n }, s)));
        Cr(y), o.next({ type: R.Sent }), i = yield y;
    }
    catch (y) {
        o.error(new E({ error: y, status: y.status ?? 0, statusText: y.statusText, url: r.urlWithParams, headers: y.headers }));
        return;
    } let d = new b(i.headers), a = i.statusText, h = i.url || r.urlWithParams, p = i.status, u = null; if (r.reportProgress && o.next(new X({ headers: d, status: p, statusText: a, url: h })), i.body) {
        let y = i.headers.get("content-length"), c = [], f = i.body.getReader(), w = 0, k, m, _ = typeof Zone < "u" && Zone.current, x = !1;
        if (yield this.ngZone.runOutsideAngular(() => oe(this, null, function* () { for (;;) {
            if (this.destroyRef.destroyed) {
                yield f.cancel(), x = !0;
                break;
            }
            let { done: U, value: ne } = yield f.read();
            if (U)
                break;
            if (c.push(ne), w += ne.length, r.reportProgress) {
                m = r.responseType === "text" ? (m ?? "") + (k ??= new TextDecoder).decode(ne, { stream: !0 }) : void 0;
                let Re = () => o.next({ type: R.DownloadProgress, total: y ? +y : void 0, loaded: w, partialText: m });
                _ ? _.run(Re) : Re();
            }
        } })), x) {
            o.complete();
            return;
        }
        let O = this.concatChunks(c, w);
        try {
            let U = i.headers.get(z) ?? "";
            u = this.parseBody(r, O, U, p);
        }
        catch (U) {
            o.error(new E({ error: U, headers: new b(i.headers), status: i.status, statusText: i.statusText, url: i.url || r.urlWithParams }));
            return;
        }
    } p === 0 && (p = u ? he : 0); let T = p >= 200 && p < 300, v = i.redirected, P = i.type; T ? (o.next(new D({ body: u, headers: d, status: p, statusText: a, url: h, redirected: v, responseType: P })), o.complete()) : o.error(new E({ error: u, headers: d, status: p, statusText: a, url: h, redirected: v, responseType: P })); }); }
    parseBody(r, n, o, s) { switch (r.responseType) {
        case "json":
            let i = new TextDecoder().decode(n).replace(jr, "");
            if (i === "")
                return null;
            try {
                return JSON.parse(i);
            }
            catch (d) {
                if (s < 200 || s >= 300)
                    return i;
                throw d;
            }
        case "text": return new TextDecoder().decode(n);
        case "blob": return new Blob([n], { type: o });
        case "arraybuffer": return n.buffer;
    } }
    createRequestInit(r) { let n = {}, o; if (o = r.credentials, r.withCredentials && (o = "include"), r.headers.forEach((s, i) => n[s] = i.join(",")), r.headers.has(Q) || (n[Q] = Ve), !r.headers.has(z)) {
        let s = r.detectContentTypeHeader();
        s !== null && (n[z] = s);
    } return { body: r.serializeBody(), method: r.method, headers: n, credentials: o, keepalive: r.keepalive, cache: r.cache, priority: r.priority, mode: r.mode, redirect: r.redirect, referrer: r.referrer, integrity: r.integrity, referrerPolicy: r.referrerPolicy }; }
    concatChunks(r, n) { let o = new Uint8Array(n), s = 0; for (let i of r)
        o.set(i, s), s += i.length; return o; }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), ce = class {
};
function de() { }
function Cr(e) { e.then(de, de); }
var Lr = /^\)\]\}',?\n/;
var fe = (() => { class e {
    xhrFactory;
    tracingService = g(Mr, { optional: !0 });
    constructor(r) { this.xhrFactory = r; }
    maybePropagateTrace(r) { return this.tracingService?.propagate ? this.tracingService.propagate(r) : r; }
    handle(r) { if (r.method === "JSONP")
        throw new N(-2800, !1); let n = this.xhrFactory; return (typeof ngServerMode < "u" && ngServerMode && n.\u0275loadImpl ? Me(n.\u0275loadImpl()) : S(null)).pipe(De(() => new G(s => { let i = n.build(); if (i.open(r.method, r.urlWithParams), r.withCredentials && (i.withCredentials = !0), r.headers.forEach((c, f) => i.setRequestHeader(c, f.join(","))), r.headers.has(Q) || i.setRequestHeader(Q, Ve), !r.headers.has(z)) {
        let c = r.detectContentTypeHeader();
        c !== null && i.setRequestHeader(z, c);
    } if (r.timeout && (i.timeout = r.timeout), r.responseType) {
        let c = r.responseType.toLowerCase();
        i.responseType = c !== "json" ? c : "text";
    } let d = r.serializeBody(), a = null, h = () => { if (a !== null)
        return a; let c = i.statusText || "OK", f = new b(i.getAllResponseHeaders()), w = i.responseURL || r.url; return a = new X({ headers: f, status: i.status, statusText: c, url: w }), a; }, p = this.maybePropagateTrace(() => { let { headers: c, status: f, statusText: w, url: k } = h(), m = null; f !== Fr && (m = typeof i.response > "u" ? i.responseText : i.response), f === 0 && (f = m ? he : 0); let _ = f >= 200 && f < 300; if (r.responseType === "json" && typeof m == "string") {
        let x = m;
        m = m.replace(Lr, "");
        try {
            m = m !== "" ? JSON.parse(m) : null;
        }
        catch (O) {
            m = x, _ && (_ = !1, m = { error: O, text: m });
        }
    } _ ? (s.next(new D({ body: m, headers: c, status: f, statusText: w, url: k || void 0 })), s.complete()) : s.error(new E({ error: m, headers: c, status: f, statusText: w, url: k || void 0 })); }), u = this.maybePropagateTrace(c => { let { url: f } = h(), w = new E({ error: c, status: i.status || 0, statusText: i.statusText || "Unknown Error", url: f || void 0 }); s.error(w); }), T = u; r.timeout && (T = this.maybePropagateTrace(c => { let { url: f } = h(), w = new E({ error: new DOMException("Request timed out", "TimeoutError"), status: i.status || 0, statusText: i.statusText || "Request timeout", url: f || void 0 }); s.error(w); })); let v = !1, P = this.maybePropagateTrace(c => { v || (s.next(h()), v = !0); let f = { type: R.DownloadProgress, loaded: c.loaded }; c.lengthComputable && (f.total = c.total), r.responseType === "text" && i.responseText && (f.partialText = i.responseText), s.next(f); }), y = this.maybePropagateTrace(c => { let f = { type: R.UploadProgress, loaded: c.loaded }; c.lengthComputable && (f.total = c.total), s.next(f); }); return i.addEventListener("load", p), i.addEventListener("error", u), i.addEventListener("timeout", T), i.addEventListener("abort", u), r.reportProgress && (i.addEventListener("progress", P), d !== null && i.upload && i.upload.addEventListener("progress", y)), i.send(d), s.next({ type: R.Sent }), () => { i.removeEventListener("error", u), i.removeEventListener("abort", u), i.removeEventListener("load", p), i.removeEventListener("timeout", T), r.reportProgress && (i.removeEventListener("progress", P), d !== null && i.upload && i.upload.removeEventListener("progress", y)), i.readyState !== i.DONE && i.abort(); }; }))); }
    static \u0275fac = function (n) { return new (n || e)(l.\u0275\u0275inject(_e)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function We(e, t) { return t(e); }
function Ur(e, t) { return (r, n) => t.intercept(r, { handle: o => e(o, n) }); }
function Sr(e, t, r) { return (n, o) => ue(r, () => t(n, s => e(s, o))); }
var pe = new I(""), J = new I("", { factory: () => [] }), ye = new I(""), me = new I("", { factory: () => !0 });
function Br() { let e = null; return (t, r) => { e === null && (e = (g(pe, { optional: !0 }) ?? []).reduceRight(Ur, We)); let n = g(Be); if (g(me)) {
    let s = n.add();
    return e(t, r).pipe(se(s));
}
else
    return e(t, r); }; }
var V = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: e, factory: function (n) { let o = null; return n ? o = new (n || e) : o = l.\u0275\u0275inject(fe), o; }, providedIn: "root" });
} return e; })();
var q = (() => { class e {
    backend;
    injector;
    chain = null;
    pendingTasks = g(Be);
    contributeToStability = g(me);
    constructor(r, n) { this.backend = r, this.injector = n; }
    handle(r) { if (this.chain === null) {
        let n = Array.from(new Set([...this.injector.get(J), ...this.injector.get(ye, [])]));
        this.chain = n.reduceRight((o, s) => Sr(o, s, this.injector), We);
    } if (this.contributeToStability) {
        let n = this.pendingTasks.add();
        return this.chain(r, o => this.backend.handle(o)).pipe(se(n));
    }
    else
        return this.chain(r, n => this.backend.handle(n)); }
    static \u0275fac = function (n) { return new (n || e)(l.\u0275\u0275inject(V), l.\u0275\u0275inject(l.EnvironmentInjector)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), ee = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: e, factory: function (n) { let o = null; return n ? o = new (n || e) : o = l.\u0275\u0275inject(q), o; }, providedIn: "root" });
} return e; })();
function ie(e, t) { return { body: t, headers: e.headers, context: e.context, observe: e.observe, params: e.params, reportProgress: e.reportProgress, responseType: e.responseType, withCredentials: e.withCredentials, credentials: e.credentials, transferCache: e.transferCache, timeout: e.timeout, keepalive: e.keepalive, priority: e.priority, cache: e.cache, mode: e.mode, redirect: e.redirect, integrity: e.integrity, referrer: e.referrer, referrerPolicy: e.referrerPolicy }; }
var ge = (() => { class e {
    handler;
    constructor(r) { this.handler = r; }
    request(r, n, o = {}) { let s; if (r instanceof F)
        s = r;
    else {
        let a;
        o.headers instanceof b ? a = o.headers : a = new b(o.headers);
        let h;
        o.params && (o.params instanceof M ? h = o.params : h = new M({ fromObject: o.params })), s = new F(r, n, o.body !== void 0 ? o.body : null, { headers: a, context: o.context, params: h, reportProgress: o.reportProgress, responseType: o.responseType || "json", withCredentials: o.withCredentials, transferCache: o.transferCache, keepalive: o.keepalive, priority: o.priority, cache: o.cache, mode: o.mode, redirect: o.redirect, credentials: o.credentials, referrer: o.referrer, referrerPolicy: o.referrerPolicy, integrity: o.integrity, timeout: o.timeout });
    } let i = S(s).pipe(Oe(a => this.handler.handle(a))); if (r instanceof F || o.observe === "events")
        return i; let d = i.pipe(Ne(a => a instanceof D)); switch (o.observe || "body") {
        case "body": switch (s.responseType) {
            case "arraybuffer": return d.pipe(B(a => { if (a.body !== null && !(a.body instanceof ArrayBuffer))
                throw new N(2806, !1); return a.body; }));
            case "blob": return d.pipe(B(a => { if (a.body !== null && !(a.body instanceof Blob))
                throw new N(2807, !1); return a.body; }));
            case "text": return d.pipe(B(a => { if (a.body !== null && typeof a.body != "string")
                throw new N(2808, !1); return a.body; }));
            default: return d.pipe(B(a => a.body));
        }
        case "response": return d;
        default: throw new N(2809, !1);
    } }
    delete(r, n = {}) { return this.request("DELETE", r, n); }
    get(r, n = {}) { return this.request("GET", r, n); }
    head(r, n = {}) { return this.request("HEAD", r, n); }
    jsonp(r, n) { return this.request("JSONP", r, { params: new M().append(n, "JSONP_CALLBACK"), observe: "body", responseType: "json" }); }
    options(r, n = {}) { return this.request("OPTIONS", r, n); }
    patch(r, n, o = {}) { return this.request("PATCH", r, ie(o, n)); }
    post(r, n, o = {}) { return this.request("POST", r, ie(o, n)); }
    put(r, n, o = {}) { return this.request("PUT", r, ie(o, n)); }
    static \u0275fac = function (n) { return new (n || e)(l.\u0275\u0275inject(ee)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), zr = 0, Le, Xr = "JSONP injected script did not invoke callback.";
var H = class {
};
function Jr() { return typeof window == "object" ? window : {}; }
var Te = (() => { class e {
    callbackMap;
    document;
    resolvedPromise = Promise.resolve();
    nonce = g(Nr, { optional: !0 });
    constructor(r, n) { this.callbackMap = r, this.document = n; }
    nextCallback() { return `ng_jsonp_callback_${zr++}`; }
    handle(r) { if (r.method !== "JSONP")
        throw new N(2810, !1); if (r.responseType !== "json")
        throw new N(2811, !1); if (r.headers.keys().length > 0)
        throw new N(2812, !1); return new G(n => { let o = this.nextCallback(), s = r.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${o}$1`), i = this.document.createElement("script"); i.src = s, this.nonce && i.setAttribute("nonce", this.nonce); let d = null, a = !1; this.callbackMap[o] = T => { delete this.callbackMap[o], d = T, a = !0; }; let h = () => { i.removeEventListener("load", p), i.removeEventListener("error", u), i.remove(), delete this.callbackMap[o]; }, p = () => { this.resolvedPromise.then(() => { if (h(), !a) {
        n.error(new E({ url: s, status: 0, statusText: "JSONP Error", error: new Error(Xr) }));
        return;
    } n.next(new D({ body: d, status: he, statusText: "OK", url: s })), n.complete(); }); }, u = T => { h(), n.error(new E({ error: T, status: 0, statusText: "JSONP Error", url: s })); }; return i.addEventListener("load", p), i.addEventListener("error", u), this.document.body.appendChild(i), n.next({ type: R.Sent }), () => { a || this.removeListeners(i), h(); }; }); }
    removeListeners(r) { Le ??= this.document.implementation.createHTMLDocument(), Le.adoptNode(r); }
    static \u0275fac = function (n) { return new (n || e)(l.\u0275\u0275inject(H), l.\u0275\u0275inject(ze)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })();
function Ke(e, t) { return e.method === "JSONP" ? g(Te).handle(e) : t(e); }
var Vr = (() => { class e {
    injector;
    constructor(r) { this.injector = r; }
    intercept(r, n) { return ue(this.injector, () => Ke(r, o => n.handle(o))); }
    static \u0275fac = function (n) { return new (n || e)(l.\u0275\u0275inject(l.EnvironmentInjector)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), ve = new I("", { factory: () => !0 }), Ye = "XSRF-TOKEN", Ze = new I("", { factory: () => Ye }), Qe = "X-XSRF-TOKEN", qe = new I("", { factory: () => Qe }), He = (() => { class e {
    cookieName = g(Ze);
    doc = g(ze);
    lastCookieString = "";
    lastToken = null;
    parseCount = 0;
    getToken() { if (typeof ngServerMode < "u" && ngServerMode)
        return null; let r = this.doc.cookie || ""; return r !== this.lastCookieString && (this.parseCount++, this.lastToken = ke(r, this.cookieName), this.lastCookieString = r), this.lastToken; }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), we = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: e, factory: function (n) { let o = null; return n ? o = new (n || e) : o = l.\u0275\u0275inject(He), o; }, providedIn: "root" });
} return e; })();
function er(e, t) { if (!g(ve) || e.method === "GET" || e.method === "HEAD")
    return t(e); try {
    let o = g(Ae).href, { origin: s } = new URL(o), { origin: i } = new URL(e.url, s);
    if (s !== i)
        return t(e);
}
catch {
    return t(e);
} let r = g(we).getToken(), n = g(qe); return r != null && !e.headers.has(n) && (e = e.clone({ headers: e.headers.set(n, r) })), t(e); }
var Ue = (() => { class e {
    injector = g(Or);
    intercept(r, n) { return ue(this.injector, () => er(r, o => n.handle(o))); }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), A = (function (e) { return e[e.Interceptors = 0] = "Interceptors", e[e.LegacyInterceptors = 1] = "LegacyInterceptors", e[e.CustomXsrfConfiguration = 2] = "CustomXsrfConfiguration", e[e.NoXsrfProtection = 3] = "NoXsrfProtection", e[e.JsonpSupport = 4] = "JsonpSupport", e[e.RequestsMadeViaParent = 5] = "RequestsMadeViaParent", e[e.Fetch = 6] = "Fetch", e; })(A || {});
function j(e, t) { return { \u0275kind: e, \u0275providers: t }; }
function rr(...e) { let t = [ge, q, { provide: ee, useExisting: q }, { provide: V, useFactory: () => g(Ge, { optional: !0 }) ?? g(fe) }, { provide: J, useValue: er, multi: !0 }]; for (let r of e)
    t.push(...r.\u0275providers); return Dr(t); }
function $r(e) { return j(A.Interceptors, e.map(t => ({ provide: J, useValue: t, multi: !0 }))); }
var Se = new I("");
function tr() { return j(A.LegacyInterceptors, [{ provide: Se, useFactory: Br }, { provide: J, useExisting: Se, multi: !0 }]); }
function le({ cookieName: e, headerName: t }) { let r = []; return e !== void 0 && r.push({ provide: Ze, useValue: e }), t !== void 0 && r.push({ provide: qe, useValue: t }), j(A.CustomXsrfConfiguration, r); }
function nr() { return j(A.NoXsrfProtection, [{ provide: ve, useValue: !1 }]); }
function or() { return j(A.JsonpSupport, [Te, { provide: H, useFactory: Jr }, { provide: J, useValue: Ke, multi: !0 }]); }
function Gr() { return j(A.RequestsMadeViaParent, [{ provide: V, useFactory: () => g(ee, { skipSelf: !0, optional: !0 }) }]); }
function Wr() { return j(A.Fetch, [K, { provide: Ge, useExisting: K }, { provide: V, useExisting: K }]); }
var Kr = (() => { class e {
    static disable() { return { ngModule: e, providers: [nr().\u0275providers] }; }
    static withOptions(r = {}) { return { ngModule: e, providers: le(r).\u0275providers }; }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275mod = l.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = l.\u0275\u0275defineInjector({ providers: [Ue, { provide: pe, useExisting: Ue, multi: !0 }, { provide: we, useClass: He }, le({ cookieName: Ye, headerName: Qe }).\u0275providers, { provide: ve, useValue: !0 }] });
} return e; })(), Yr = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275mod = l.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = l.\u0275\u0275defineInjector({ providers: [rr(tr())] });
} return e; })(), Zr = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275mod = l.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = l.\u0275\u0275defineInjector({ providers: [or().\u0275providers] });
} return e; })();
import { InjectionToken as ar, APP_BOOTSTRAP_LISTENER as Qr, \u0275performanceMarkFeature as qr, inject as L, ApplicationRef as Hr, TransferState as cr, \u0275RuntimeError as dr, makeStateKey as et, \u0275truncateMiddle as Nt, \u0275formatRuntimeError as Ot, Injector as rt, signal as lr, \u0275ResourceImpl as tt, linkedSignal as Ee, computed as nt, \u0275encapsulateResourceError as ot } from "@angular/core";
var ur = new ar(""), hr = "b", fr = "h", pr = "s", yr = "st", mr = "u", gr = "rt", te = new ar(""), st = ["GET", "HEAD"];
function Tr(e, t) { let i = t, { isCacheActive: r } = i, n = Pe(i, ["isCacheActive"]), { transferCache: o, method: s } = e; return !(!r || o === !1 || s === "POST" && !n.includePostRequests && !o || s !== "POST" && !st.includes(s) || !n.includeRequestsWithAuthHeaders && at(e) || n.filter?.(e) === !1); }
function vr(e, t) { let { includeHeaders: r } = e, n = r; return typeof t == "object" && t.includeHeaders && (n = t.includeHeaders), n; }
function wr(e, t, r, n) { let { transferCache: o } = e; if (!Tr(e, t))
    return null; if (typeof ngServerMode < "u" && !ngServerMode && n)
    throw new dr(2803, !1); let s = typeof ngServerMode < "u" && ngServerMode && n ? br(e.url, n) : e.url, i = Er(e, s), d = r.get(i, null), a = vr(t, o); if (d) {
    let { [hr]: h, [gr]: p, [fr]: u, [pr]: T, [yr]: v, [mr]: P } = d, y = h;
    switch (p) {
        case "arraybuffer":
            y = ir(h);
            break;
        case "blob":
            y = new Blob([ir(h)]);
            break;
    }
    let c = new b(u);
    return new D({ body: y, headers: c, status: T, statusText: v, url: P });
} return null; }
function it(e, t) { let r = L(te), n = L(cr), o = L(ur, { optional: !0 }), s = wr(e, r, n, o); if (s)
    return S(s); let { transferCache: i } = e, d = vr(r, i), a = typeof ngServerMode < "u" && ngServerMode && o ? br(e.url, o) : e.url, h = Er(e, a); if (!Tr(e, r))
    return t(e); let p = t(e); return typeof ngServerMode < "u" && ngServerMode ? p.pipe(Ie(u => { u instanceof D && n.set(h, { [hr]: e.responseType === "arraybuffer" || e.responseType === "blob" ? lt(u.body) : u.body, [fr]: ct(u.headers, d), [pr]: u.status, [yr]: u.statusText, [mr]: a, [gr]: e.responseType }); })) : p; }
function at(e) { return e.headers.has("authorization") || e.headers.has("proxy-authorization"); }
function ct(e, t) { if (!t)
    return {}; let r = {}; for (let n of t) {
    let o = e.getAll(n);
    o !== null && (r[n] = o);
} return r; }
function sr(e) { return [...e.keys()].sort().map(t => `${t}=${e.getAll(t)}`).join("&"); }
function Er(e, t) { let { params: r, method: n, responseType: o } = e, s = sr(r), i = e.serializeBody(); i instanceof URLSearchParams ? i = sr(i) : typeof i != "string" && (i = ""); let d = [n, o, t, i, s].join("|"), a = dt(d); return et(a); }
function dt(e) { let t = 0; for (let r of e)
    t = Math.imul(31, t) + r.charCodeAt(0) << 0; return t += 2147483648, t.toString(); }
function lt(e) { let t = new Uint8Array(e), r = 32768, n = ""; for (let o = 0; o < t.length; o += r) {
    let s = t.subarray(o, o + r);
    n += String.fromCharCode.apply(null, s);
} return btoa(n); }
function ir(e) { let t = atob(e); return Uint8Array.from(t, n => n.charCodeAt(0)).buffer; }
function kt(e) { return [{ provide: te, useFactory: () => (qr("NgHttpTransferCache"), $({ isCacheActive: !0 }, e)) }, { provide: ye, useValue: it, multi: !0 }, { provide: Qr, multi: !0, useFactory: () => { let t = L(Hr), r = L(te); return () => { t.whenStable().then(() => { r.isCacheActive = !1; }); }; } }]; }
function br(e, t) { let r = new URL(e, "resolve://").origin, n = t[r]; return n ? e.replace(r, n) : e; }
var _t = (() => { let e = re("json"); return e.arrayBuffer = re("arraybuffer"), e.blob = re("blob"), e.text = re("text"), e; })();
function re(e) { return function (r, n) { let o = n?.injector ?? L(rt), s = o.get(te, null, { optional: !0 }), i = o.get(cr, null, { optional: !0 }), d = o.get(ur, null, { optional: !0 }), a = h => { if (s && i && h) {
    let p = wr(h, s, i, d);
    if (p)
        try {
            let u = p.body, T = n?.parse ? n.parse(u) : u;
            return lr({ value: T });
        }
        catch { }
} }; return new be(o, () => ut(r, e), n?.defaultValue, n?.debugName, n?.parse, n?.equal, a); }; }
function ut(e, t) { let r = typeof e == "function" ? e() : e; if (r === void 0)
    return; typeof r == "string" && (r = { url: r }); let n = r.headers instanceof b ? r.headers : new b(r.headers), o = r.params instanceof M ? r.params : new M({ fromObject: r.params }); return new F(r.method ?? "GET", r.url, r.body ?? null, { headers: n, params: o, reportProgress: r.reportProgress, withCredentials: r.withCredentials, keepalive: r.keepalive, cache: r.cache, priority: r.priority, mode: r.mode, redirect: r.redirect, responseType: t, context: r.context, transferCache: r.transferCache, credentials: r.credentials, referrer: r.referrer, referrerPolicy: r.referrerPolicy, integrity: r.integrity, timeout: r.timeout }); }
var be = class extends tt {
    client;
    _headers = Ee({ source: this.extRequest, computation: () => { } });
    _progress = Ee({ source: this.extRequest, computation: () => { } });
    _statusCode = Ee({ source: this.extRequest, computation: () => { } });
    headers = nt(() => this.status() === "resolved" || this.status() === "error" ? this._headers() : void 0);
    progress = this._progress.asReadonly();
    statusCode = this._statusCode.asReadonly();
    constructor(t, r, n, o, s, i, d) { super(r, ({ params: a, abortSignal: h }) => { let p, u = () => p.unsubscribe(); h.addEventListener("abort", u); let T = lr({ value: void 0 }), v, P = new Promise(c => v = c), y = c => { T.set(c), v?.(T), v = void 0; }; return p = this.client.request(a).subscribe({ next: c => { switch (c.type) {
            case R.Response:
                this._headers.set(c.headers), this._statusCode.set(c.status);
                try {
                    y({ value: s ? s(c.body) : c.body });
                }
                catch (f) {
                    y({ error: ot(f) });
                }
                break;
            case R.DownloadProgress:
                this._progress.set(c);
                break;
        } }, error: c => { c instanceof E && (this._headers.set(c.headers), this._statusCode.set(c.status)), y({ error: c }), h.removeEventListener("abort", u); }, complete: () => { v && y({ error: new dr(991, !1) }), h.removeEventListener("abort", u); } }), P; }, n, i, o, t, d), this.client = t.get(ge); }
    set(t) { super.set(t), this._headers.set(void 0), this._progress.set(void 0), this._statusCode.set(void 0); }
};
export { K as FetchBackend, pe as HTTP_INTERCEPTORS, ur as HTTP_TRANSFER_CACHE_ORIGIN_MAP, V as HttpBackend, ge as HttpClient, Zr as HttpClientJsonpModule, Yr as HttpClientModule, Kr as HttpClientXsrfModule, Y as HttpContext, ae as HttpContextToken, E as HttpErrorResponse, R as HttpEventType, A as HttpFeatureKind, ee as HttpHandler, X as HttpHeaderResponse, b as HttpHeaders, M as HttpParams, F as HttpRequest, D as HttpResponse, C as HttpResponseBase, $e as HttpStatusCode, Z as HttpUrlEncodingCodec, fe as HttpXhrBackend, we as HttpXsrfTokenExtractor, Te as JsonpClientBackend, Vr as JsonpInterceptor, _t as httpResource, rr as provideHttpClient, Wr as withFetch, $r as withInterceptors, tr as withInterceptorsFromDi, or as withJsonpSupport, nr as withNoXsrfProtection, Gr as withRequestsMadeViaParent, le as withXsrfConfiguration, ye as \u0275HTTP_ROOT_INTERCEPTOR_FNS, q as \u0275HttpInterceptingHandler, me as \u0275REQUESTS_CONTRIBUTE_TO_STABILITY, kt as \u0275withHttpTransferCache };
/*! Bundled license information:

@angular/common/fesm2022/_module-chunk.mjs:
@angular/common/fesm2022/http.mjs:
  (**
   * @license Angular v21.2.10
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
