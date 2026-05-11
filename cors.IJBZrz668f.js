import { a as m } from "@nf-internal/chunk-UJVVLSSD";
var O = m((G, E) => {
    "use strict";
    var C = Object.getOwnPropertySymbols, N = Object.prototype.hasOwnProperty, q = Object.prototype.propertyIsEnumerable;
    function I(t) { if (t == null)
        throw new TypeError("Object.assign cannot be called with null or undefined"); return Object(t); }
    function U() { try {
        if (!Object.assign)
            return !1;
        var t = new String("abc");
        if (t[5] = "de", Object.getOwnPropertyNames(t)[0] === "5")
            return !1;
        for (var o = {}, n = 0; n < 10; n++)
            o["_" + String.fromCharCode(n)] = n;
        var f = Object.getOwnPropertyNames(o).map(function (l) { return o[l]; });
        if (f.join("") !== "0123456789")
            return !1;
        var s = {};
        return "abcdefghijklmnopqrst".split("").forEach(function (l) { s[l] = l; }), Object.keys(Object.assign({}, s)).join("") === "abcdefghijklmnopqrst";
    }
    catch {
        return !1;
    } }
    E.exports = U() ? Object.assign : function (t, o) { for (var n, f = I(t), s, l = 1; l < arguments.length; l++) {
        n = Object(arguments[l]);
        for (var c in n)
            N.call(n, c) && (f[c] = n[c]);
        if (C) {
            s = C(n);
            for (var g = 0; g < s.length; g++)
                q.call(n, s[g]) && (f[s[g]] = n[s[g]]);
        }
    } return f; };
});
var x = m(($, w) => {
    "use strict";
    w.exports = D;
    w.exports.append = k;
    var _ = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
    function k(t, o) { if (typeof t != "string")
        throw new TypeError("header argument is required"); if (!o)
        throw new TypeError("field argument is required"); for (var n = Array.isArray(o) ? o : H(String(o)), f = 0; f < n.length; f++)
        if (!_.test(n[f]))
            throw new TypeError("field argument contains an invalid header name"); if (t === "*")
        return t; var s = t, l = H(t.toLowerCase()); if (n.indexOf("*") !== -1 || l.indexOf("*") !== -1)
        return "*"; for (var c = 0; c < n.length; c++) {
        var g = n[c].toLowerCase();
        l.indexOf(g) === -1 && (l.push(g), s = s ? s + ", " + n[c] : n[c]);
    } return s; }
    function H(t) { for (var o = 0, n = [], f = 0, s = 0, l = t.length; s < l; s++)
        switch (t.charCodeAt(s)) {
            case 32:
                f === o && (f = o = s + 1);
                break;
            case 44:
                n.push(t.substring(f, o)), f = o = s + 1;
                break;
            default:
                o = s + 1;
                break;
        } return n.push(t.substring(f, o)), n; }
    function D(t, o) { if (!t || !t.getHeader || !t.setHeader)
        throw new TypeError("res argument is required"); var n = t.getHeader("Vary") || "", f = Array.isArray(n) ? n.join(", ") : String(n); (n = k(f, o)) && t.setHeader("Vary", n); }
});
var R = m((z, S) => { (function () {
    "use strict";
    var t = O(), o = x(), n = { origin: "*", methods: "GET,HEAD,PUT,PATCH,POST,DELETE", preflightContinue: !1, optionsSuccessStatus: 204 };
    function f(e) { return typeof e == "string" || e instanceof String; }
    function s(e, r) { if (Array.isArray(r)) {
        for (var a = 0; a < r.length; ++a)
            if (s(e, r[a]))
                return !0;
        return !1;
    }
    else
        return f(r) ? e === r : r instanceof RegExp ? r.test(e) : !!r; }
    function l(e, r) { var a = r.headers.origin, i = [], u; return !e.origin || e.origin === "*" ? i.push([{ key: "Access-Control-Allow-Origin", value: "*" }]) : f(e.origin) ? (i.push([{ key: "Access-Control-Allow-Origin", value: e.origin }]), i.push([{ key: "Vary", value: "Origin" }])) : (u = s(a, e.origin), i.push([{ key: "Access-Control-Allow-Origin", value: u ? a : !1 }]), i.push([{ key: "Vary", value: "Origin" }])), i; }
    function c(e) { var r = e.methods; return r.join && (r = e.methods.join(",")), { key: "Access-Control-Allow-Methods", value: r }; }
    function g(e) { return e.credentials === !0 ? { key: "Access-Control-Allow-Credentials", value: "true" } : null; }
    function P(e, r) { var a = e.allowedHeaders || e.headers, i = []; return a ? a.join && (a = a.join(",")) : (a = r.headers["access-control-request-headers"], i.push([{ key: "Vary", value: "Access-Control-Request-Headers" }])), a && a.length && i.push([{ key: "Access-Control-Allow-Headers", value: a }]), i; }
    function b(e) { var r = e.exposedHeaders; if (r)
        r.join && (r = r.join(","));
    else
        return null; return r && r.length ? { key: "Access-Control-Expose-Headers", value: r } : null; }
    function T(e) { var r = (typeof e.maxAge == "number" || e.maxAge) && e.maxAge.toString(); return r && r.length ? { key: "Access-Control-Max-Age", value: r } : null; }
    function p(e, r) { for (var a = 0, i = e.length; a < i; a++) {
        var u = e[a];
        u && (Array.isArray(u) ? p(u, r) : u.key === "Vary" && u.value ? o(r, u.value) : u.value && r.setHeader(u.key, u.value));
    } }
    function M(e, r, a, i) { var u = [], h = r.method && r.method.toUpperCase && r.method.toUpperCase(); h === "OPTIONS" ? (u.push(l(e, r)), u.push(g(e)), u.push(c(e)), u.push(P(e, r)), u.push(T(e)), u.push(b(e)), p(u, a), e.preflightContinue ? i() : (a.statusCode = e.optionsSuccessStatus, a.setHeader("Content-Length", "0"), a.end())) : (u.push(l(e, r)), u.push(g(e)), u.push(b(e)), p(u, a), i()); }
    function V(e) { var r = null; return typeof e == "function" ? r = e : r = function (a, i) { i(null, e); }, function (i, u, h) { r(i, function (j, L) { if (j)
        h(j);
    else {
        var v = t({}, n, L), d = null;
        v.origin && typeof v.origin == "function" ? d = v.origin : v.origin && (d = function (A, y) { y(null, v.origin); }), d ? d(i.headers.origin, function (A, y) { A || !y ? h(A) : (v.origin = y, M(v, i, u, h)); }) : h();
    } }); }; }
    S.exports = V;
})(); });
export default R();
/*! Bundled license information:

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

vary/index.js:
  (*!
   * vary
   * Copyright(c) 2014-2017 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
