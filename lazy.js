!(function (e) {
  var t = (function (s, q) {
    "use strict";
    if (q.getElementsByClassName) {
      var F,
        R,
        O = q.documentElement,
        l = s.Date,
        n = s.HTMLPictureElement,
        d = "addEventListener",
        P = "getAttribute",
        H = s[d],
        D = s.setTimeout,
        u = s.requestAnimationFrame || D,
        c = s.requestIdleCallback,
        I = /^picture$/i,
        i = ["load", "error", "lazyincluded", "_lazyloaded"],
        a = {},
        J = Array.prototype.forEach,
        j = function (e, t) {
          return (
            a[t] || (a[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")),
            a[t].test(e[P]("class") || "") && a[t]
          );
        },
        G = function (e, t) {
          j(e, t) ||
            e.setAttribute("class", (e[P]("class") || "").trim() + " " + t);
        },
        K = function (e, t) {
          var a;
          (a = j(e, t)) &&
            e.setAttribute("class", (e[P]("class") || "").replace(a, " "));
        },
        Q = function (t, a, e) {
          var n = e ? d : "removeEventListener";
          e && Q(t, a),
            i.forEach(function (e) {
              t[n](e, a);
            });
        },
        U = function (e, t, a, n, i) {
          var r = q.createEvent("CustomEvent");
          return (
            a || (a = {}),
            (a.instance = F),
            r.initCustomEvent(t, !n, !i, a),
            e.dispatchEvent(r),
            r
          );
        },
        V = function (e, t) {
          var a;
          !n && (a = s.picturefill || R.pf)
            ? a({ reevaluate: !0, elements: [e] })
            : t && t.src && (e.src = t.src);
        },
        X = function (e, t) {
          return (getComputedStyle(e, null) || {})[t];
        },
        o = function (e, t, a) {
          for (
            a = a || e.offsetWidth;
            a < R.minSize && t && !e._lazysizesWidth;

          )
            (a = t.offsetWidth), (t = t.parentNode);
          return a;
        },
        Y = (function () {
          var a,
            n,
            t = [],
            i = [],
            r = t,
            o = function () {
              var e = r;
              for (r = t.length ? i : t, a = !0, n = !1; e.length; )
                e.shift()();
              a = !1;
            },
            e = function (e, t) {
              a && !t
                ? e.apply(this, arguments)
                : (r.push(e), n || ((n = !0), (q.hidden ? D : u)(o)));
            };
          return (e._lsFlush = o), e;
        })(),
        Z = function (a, e) {
          return e
            ? function () {
                Y(a);
              }
            : function () {
                var e = this,
                  t = arguments;
                Y(function () {
                  a.apply(e, t);
                });
              };
        },
        ee = function (e) {
          var a,
            n = 0,
            i = 125,
            r = R.ricTimeout,
            t = function () {
              (a = !1), (n = l.now()), e();
            },
            o =
              c && R.ricTimeout
                ? function () {
                    c(t, { timeout: r }),
                      r !== R.ricTimeout && (r = R.ricTimeout);
                  }
                : Z(function () {
                    D(t);
                  }, !0);
          return function (e) {
            var t;
            (e = e === !0) && (r = 33),
              a ||
                ((a = !0),
                (t = i - (l.now() - n)),
                0 > t && (t = 0),
                e || (9 > t && c) ? o() : D(o, t));
          };
        },
        te = function (e) {
          var t,
            a,
            n = 99,
            i = function () {
              (t = null), e();
            },
            r = function () {
              var e = l.now() - a;
              n > e ? D(r, n - e) : (c || i)(i);
            };
          return function () {
            (a = l.now()), t || (t = D(r, n));
          };
        };
      !(function () {
        var e,
          t = {
            lazyClass: "lazyload",
            loadedClass: "lazyloaded",
            loadingClass: "lazyloading",
            preloadClass: "lazypreload",
            errorClass: "lazyerror",
            autosizesClass: "lazyautosizes",
            srcAttr: "data-src",
            srcsetAttr: "data-srcset",
            sizesAttr: "data-sizes",
            minSize: 40,
            customMedia: {},
            init: !0,
            expFactor: 1.5,
            hFac: 0.8,
            loadMode: 2,
            loadHidden: !0,
            ricTimeout: 300,
          };
        R = s.lazySizesConfig || s.lazysizesConfig || {};
        for (e in t) e in R || (R[e] = t[e]);
        (s.lazySizesConfig = R),
          D(function () {
            R.init && r();
          });
      })();
      var e = (function () {
          var u,
            c,
            f,
            m,
            t,
            g,
            y,
            z,
            v,
            p,
            h,
            C,
            b,
            A,
            r = /^img$/i,
            E = /^iframe$/i,
            w = "onscroll" in s && !/glebot/.test(navigator.userAgent),
            N = 0,
            _ = 0,
            L = 0,
            M = -1,
            $ = function (e) {
              L--,
                e && e.target && Q(e.target, $),
                (!e || 0 > L || !e.target) && (L = 0);
            },
            k = function (e, t) {
              var a,
                n = e,
                i =
                  "hidden" == X(q.body, "visibility") ||
                  "hidden" != X(e, "visibility");
              for (
                z -= t, h += t, v -= t, p += t;
                i && (n = n.offsetParent) && n != q.body && n != O;

              )
                (i = (X(n, "opacity") || 1) > 0),
                  i &&
                    "visible" != X(n, "overflow") &&
                    ((a = n.getBoundingClientRect()),
                    (i =
                      p > a.left &&
                      v < a.right &&
                      h > a.top - 1 &&
                      z < a.bottom + 1));
              return i;
            },
            e = function () {
              var e,
                t,
                a,
                n,
                i,
                r,
                o,
                s,
                l,
                d = F.elements;
              if ((m = R.loadMode) && 8 > L && (e = d.length)) {
                (t = 0),
                  M++,
                  null == b &&
                    ("expand" in R ||
                      (R.expand =
                        O.clientHeight > 500 && O.clientWidth > 500
                          ? 500
                          : 370),
                    (C = R.expand),
                    (b = C * R.expFactor)),
                  b > _ && 1 > L && M > 2 && m > 2 && !q.hidden
                    ? ((_ = b), (M = 0))
                    : (_ = m > 1 && M > 1 && 6 > L ? C : N);
                for (; e > t; t++)
                  if (d[t] && !d[t]._lazyRace)
                    if (w)
                      if (
                        (((s = d[t][P]("data-expand")) && (r = 1 * s)) ||
                          (r = _),
                        l !== r &&
                          ((g = innerWidth + r * A),
                          (y = innerHeight + r),
                          (o = -1 * r),
                          (l = r)),
                        (a = d[t].getBoundingClientRect()),
                        (h = a.bottom) >= o &&
                          (z = a.top) <= y &&
                          (p = a.right) >= o * A &&
                          (v = a.left) <= g &&
                          (h || p || v || z) &&
                          (R.loadHidden || "hidden" != X(d[t], "visibility")) &&
                          ((c && 3 > L && !s && (3 > m || 4 > M)) ||
                            k(d[t], r)))
                      ) {
                        if ((B(d[t]), (i = !0), L > 9)) break;
                      } else
                        !i &&
                          c &&
                          !n &&
                          4 > L &&
                          4 > M &&
                          m > 2 &&
                          (u[0] || R.preloadAfterLoad) &&
                          (u[0] ||
                            (!s &&
                              (h ||
                                p ||
                                v ||
                                z ||
                                "auto" != d[t][P](R.sizesAttr)))) &&
                          (n = u[0] || d[t]);
                    else B(d[t]);
                n && !i && B(n);
              }
            },
            a = ee(e),
            x = function (e) {
              G(e.target, R.loadedClass),
                K(e.target, R.loadingClass),
                Q(e.target, S),
                U(e.target, "lazyloaded");
            },
            n = Z(x),
            S = function (e) {
              n({ target: e.target });
            },
            T = function (t, a) {
              try {
                t.contentWindow.location.replace(a);
              } catch (e) {
                t.src = a;
              }
            },
            W = function (e) {
              var t,
                a = e[P](R.srcsetAttr);
              (t = R.customMedia[e[P]("data-media") || e[P]("media")]) &&
                e.setAttribute("media", t),
                a && e.setAttribute("srcset", a);
            },
            o = Z(function (e, t, a, n, i) {
              var r, o, s, l, d, u;
              (d = U(e, "lazybeforeunveil", t)).defaultPrevented ||
                (n && (a ? G(e, R.autosizesClass) : e.setAttribute("sizes", n)),
                (o = e[P](R.srcsetAttr)),
                (r = e[P](R.srcAttr)),
                i && ((s = e.parentNode), (l = s && I.test(s.nodeName || ""))),
                (u = t.firesLoad || ("src" in e && (o || r || l))),
                (d = { target: e }),
                u &&
                  (Q(e, $, !0),
                  clearTimeout(f),
                  (f = D($, 2500)),
                  G(e, R.loadingClass),
                  Q(e, S, !0)),
                l && J.call(s.getElementsByTagName("source"), W),
                o
                  ? e.setAttribute("srcset", o)
                  : r && !l && (E.test(e.nodeName) ? T(e, r) : (e.src = r)),
                i && (o || l) && V(e, { src: r })),
                e._lazyRace && delete e._lazyRace,
                K(e, R.lazyClass),
                Y(function () {
                  (!u || (e.complete && e.naturalWidth > 1)) &&
                    (u ? $(d) : L--, x(d));
                }, !0);
            }),
            B = function (e) {
              var t,
                a = r.test(e.nodeName),
                n = a && (e[P](R.sizesAttr) || e[P]("sizes")),
                i = "auto" == n;
              ((!i && c) ||
                !a ||
                (!e[P]("src") && !e.srcset) ||
                e.complete ||
                j(e, R.errorClass) ||
                !j(e, R.lazyClass)) &&
                ((t = U(e, "lazyunveilread").detail),
                i && ae.updateElem(e, !0, e.offsetWidth),
                (e._lazyRace = !0),
                L++,
                o(e, t, i, n, a));
            },
            i = function () {
              if (!c) {
                if (l.now() - t < 999) return void D(i, 999);
                var e = te(function () {
                  (R.loadMode = 3), a();
                });
                (c = !0),
                  (R.loadMode = 3),
                  a(),
                  H(
                    "scroll",
                    function () {
                      3 == R.loadMode && (R.loadMode = 2), e();
                    },
                    !0
                  );
              }
            };
          return {
            _: function () {
              (t = l.now()),
                (F.elements = q.getElementsByClassName(R.lazyClass)),
                (u = q.getElementsByClassName(
                  R.lazyClass + " " + R.preloadClass
                )),
                (A = R.hFac),
                H("scroll", a, !0),
                H("resize", a, !0),
                s.MutationObserver
                  ? new MutationObserver(a).observe(O, {
                      childList: !0,
                      subtree: !0,
                      attributes: !0,
                    })
                  : (O[d]("DOMNodeInserted", a, !0),
                    O[d]("DOMAttrModified", a, !0),
                    setInterval(a, 999)),
                H("hashchange", a, !0),
                [
                  "focus",
                  "mouseover",
                  "click",
                  "load",
                  "transitionend",
                  "animationend",
                  "webkitAnimationEnd",
                ].forEach(function (e) {
                  q[d](e, a, !0);
                }),
                /d$|^c/.test(q.readyState)
                  ? i()
                  : (H("load", i), q[d]("DOMContentLoaded", a), D(i, 2e4)),
                F.elements.length ? (e(), Y._lsFlush()) : a();
            },
            checkElems: a,
            unveil: B,
          };
        })(),
        ae = (function () {
          var a,
            r = Z(function (e, t, a, n) {
              var i, r, o;
              if (
                ((e._lazysizesWidth = n),
                (n += "px"),
                e.setAttribute("sizes", n),
                I.test(t.nodeName || ""))
              )
                for (
                  i = t.getElementsByTagName("source"), r = 0, o = i.length;
                  o > r;
                  r++
                )
                  i[r].setAttribute("sizes", n);
              a.detail.dataAttr || V(e, a.detail);
            }),
            n = function (e, t, a) {
              var n,
                i = e.parentNode;
              i &&
                ((a = o(e, i, a)),
                (n = U(e, "lazybeforesizes", { width: a, dataAttr: !!t })),
                n.defaultPrevented ||
                  ((a = n.detail.width),
                  a && a !== e._lazysizesWidth && r(e, i, n, a)));
            },
            e = function () {
              var e,
                t = a.length;
              if (t) for (e = 0; t > e; e++) n(a[e]);
            },
            t = te(e);
          return {
            _: function () {
              (a = q.getElementsByClassName(R.autosizesClass)), H("resize", t);
            },
            checkElems: t,
            updateElem: n,
          };
        })(),
        r = function () {
          r.i || ((r.i = !0), ae._(), e._());
        };
      return (F = {
        cfg: R,
        autoSizer: ae,
        loader: e,
        init: r,
        uP: V,
        aC: G,
        rC: K,
        hC: j,
        fire: U,
        gW: o,
        rAF: Y,
      });
    }
  })(e, e.document);
  (e.lazySizes = t),
    "object" == typeof module && module.exports && (module.exports = t);
})(window),
  (function (e, t) {
    var a = function () {
      t(e.lazySizes), e.removeEventListener("lazyunveilread", a, !0);
    };
    (t = t.bind(null, e, e.document)),
      "object" == typeof module && module.exports
        ? t(require("lazysizes"))
        : e.lazySizes
        ? a()
        : e.addEventListener("lazyunveilread", a, !0);
  })(window, function (e, i, r) {
    "use strict";
    function o(e, t) {
      var a, n;
      d[e] ||
        ((a = i.createElement(t ? "link" : "script")),
        (n = i.getElementsByTagName("script")[0]),
        t ? ((a.rel = "stylesheet"), (a.href = e)) : (a.src = e),
        (d[e] = !0),
        (d[a.src || a.href] = !0),
        n.parentNode.insertBefore(a, n));
    }
    var s,
      l,
      d = {};
    i.addEventListener &&
      ((s = function (e, t) {
        var a = i.createElement("img");
        (a.onload = function () {
          (a.onload = null), (a.onerror = null), (a = null), t();
        }),
          (a.onerror = a.onload),
          (a.src = e),
          a && a.complete && a.onload && a.onload();
      }),
      addEventListener(
        "lazybeforeunveil",
        function (e) {
          var t, a, n;
          e.detail.instance == r &&
            (e.defaultPrevented ||
              ("none" == e.target.preload && (e.target.preload = "auto"),
              (t = e.target.getAttribute("data-link")) && o(t, !0),
              (t = e.target.getAttribute("data-script")) && o(t),
              (t = e.target.getAttribute("data-require")) &&
                (r.cfg.requireJs ? r.cfg.requireJs([t]) : o(t)),
              (a = e.target.getAttribute("data-bg")) &&
                ((e.detail.firesLoad = !0),
                s(a, function () {
                  (e.target.style.backgroundImage =
                    "url(" + (l.test(a) ? JSON.stringify(a) : a) + ")"),
                    (e.detail.firesLoad = !1),
                    r.fire(e.target, "_lazyloaded", {}, !0, !0);
                })),
              (n = e.target.getAttribute("data-poster")) &&
                ((e.detail.firesLoad = !0),
                s(n, function () {
                  (e.target.poster = n),
                    (e.detail.firesLoad = !1),
                    r.fire(e.target, "_lazyloaded", {}, !0, !0);
                }))));
        },
        !(l = /\(|\)|\s|'/)
      ));
  }),
  $(document).ready(function () {
    $("img.lazyload").addClass("lazypreload");
  }),
  $(".kek").addClass("lazyload"),
  $(".channel-emote").addClass("lazyload"),
  $("#queuecontainer").addClass("lazyload"),
  $("#queue > li.queue_entry").addClass("lazyload"),
  $("#ytapiplayer").addClass("lazyload"),
  $("#backg").addClass("lazyload"),
  $(".emote-preview").addClass("lazyload");
