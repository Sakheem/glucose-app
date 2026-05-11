import { h as s } from "@nf-internal/chunk-YSUERQVJ";
import { g as f } from "@nf-internal/chunk-LOHFO5VT";
import { k as d, l as r, m as t, o as p, q as a, s as A, x as l } from "@nf-internal/chunk-4JIGLATD";
import "@nf-internal/chunk-4CLCTAJ7";
import * as n from "@angular/core";
import { ANIMATION_MODULE_TYPE as v, RendererFactory2 as M, inject as c, NgZone as g, \u0275performanceMarkFeature as D } from "@angular/core";
import { ANIMATION_MODULE_TYPE as x } from "@angular/core";
import { DOCUMENT as I } from "@angular/common";
var S = (() => { class e extends a {
    constructor(o, i, y) { super(o, i, y); }
    ngOnDestroy() { this.flush(); }
    static \u0275fac = function (i) { return new (i || e)(n.\u0275\u0275inject(I), n.\u0275\u0275inject(r), n.\u0275\u0275inject(t)); };
    static \u0275prov = n.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })();
function O() { return new p; }
function R() { return new l(c(f), c(a), c(g)); }
var N = [{ provide: t, useFactory: O }, { provide: a, useClass: S }, { provide: M, useFactory: R }], u = [{ provide: r, useClass: d }, { provide: v, useValue: "NoopAnimations" }, ...N], m = [{ provide: r, useFactory: () => typeof ngServerMode < "u" && ngServerMode ? new d : new A }, { provide: v, useFactory: () => typeof ngServerMode < "u" && ngServerMode ? "NoopAnimations" : "BrowserAnimations" }, ...N], W = (() => { class e {
    static withConfig(o) { return { ngModule: e, providers: o.disableAnimations ? u : m }; }
    static \u0275fac = function (i) { return new (i || e); };
    static \u0275mod = n.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = n.\u0275\u0275defineInjector({ providers: m, imports: [s] });
} return e; })();
function B() { return D("NgEagerAnimations"), [...m]; }
var C = (() => { class e {
    static \u0275fac = function (i) { return new (i || e); };
    static \u0275mod = n.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = n.\u0275\u0275defineInjector({ providers: u, imports: [s] });
} return e; })();
function V() { return [...u]; }
export { x as ANIMATION_MODULE_TYPE, W as BrowserAnimationsModule, C as NoopAnimationsModule, B as provideAnimations, V as provideNoopAnimations, S as \u0275InjectableAnimationEngine };
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations.mjs:
  (**
   * @license Angular v21.1.0
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
