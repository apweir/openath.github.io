/*! banner 1.0.0 - Fri Jul 20 2018 17:44:43 GMT+0100 (BST) - 🦆 */ !(function(
  e
) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var r = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, i) {
      n.o(e, t) ||
        Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: i
        });
    }),
    (n.r = function(e) {
      Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 1));
})([
  function(e, t, n) {
    e.exports = (function(e) {
      function t(i) {
        if (n[i]) return n[i].exports;
        var r = (n[i] = { exports: {}, id: i, loaded: !1 });
        return (
          e[i].call(r.exports, r, r.exports, t), (r.loaded = !0), r.exports
        );
      }
      var n = {};
      return (t.m = e), (t.c = n), (t.p = 'dist/'), t(0);
    })([
      function(e, t, n) {
        'use strict';
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var r =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            },
          o = n(1),
          s = (i(o), n(6)),
          a = i(s),
          l = n(7),
          u = i(l),
          c = n(8),
          f = i(c),
          d = n(9),
          h = i(d),
          p = n(10),
          m = i(p),
          g = n(11),
          v = i(g),
          y = n(14),
          b = i(y),
          _ = [],
          E = !1,
          T = {
            offset: 120,
            delay: 0,
            easing: 'ease',
            duration: 400,
            disable: !1,
            once: !1,
            startEvent: 'DOMContentLoaded',
            throttleDelay: 99,
            debounceDelay: 50,
            disableMutationObserver: !1
          },
          w = function() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if ((e && (E = !0), E))
              return (_ = (0, v.default)(_, T)), (0, m.default)(_, T.once), _;
          },
          C = function() {
            (_ = (0, b.default)()), w();
          };
        e.exports = {
          init: function(e) {
            (T = r(T, e)), (_ = (0, b.default)());
            var t = document.all && !window.atob;
            return (function(e) {
              return (
                !0 === e ||
                ('mobile' === e && h.default.mobile()) ||
                ('phone' === e && h.default.phone()) ||
                ('tablet' === e && h.default.tablet()) ||
                ('function' == typeof e && !0 === e())
              );
            })(T.disable) || t
              ? void _.forEach(function(e, t) {
                  e.node.removeAttribute('data-aos'),
                    e.node.removeAttribute('data-aos-easing'),
                    e.node.removeAttribute('data-aos-duration'),
                    e.node.removeAttribute('data-aos-delay');
                })
              : (document
                  .querySelector('body')
                  .setAttribute('data-aos-easing', T.easing),
                document
                  .querySelector('body')
                  .setAttribute('data-aos-duration', T.duration),
                document
                  .querySelector('body')
                  .setAttribute('data-aos-delay', T.delay),
                'DOMContentLoaded' === T.startEvent &&
                ['complete', 'interactive'].indexOf(document.readyState) > -1
                  ? w(!0)
                  : 'load' === T.startEvent
                    ? window.addEventListener(T.startEvent, function() {
                        w(!0);
                      })
                    : document.addEventListener(T.startEvent, function() {
                        w(!0);
                      }),
                window.addEventListener(
                  'resize',
                  (0, u.default)(w, T.debounceDelay, !0)
                ),
                window.addEventListener(
                  'orientationchange',
                  (0, u.default)(w, T.debounceDelay, !0)
                ),
                window.addEventListener(
                  'scroll',
                  (0, a.default)(function() {
                    (0, m.default)(_, T.once);
                  }, T.throttleDelay)
                ),
                T.disableMutationObserver || (0, f.default)('[data-aos]', C),
                _);
          },
          refresh: w,
          refreshHard: C
        };
      },
      function(e, t) {},
      ,
      ,
      ,
      ,
      function(e, t) {
        (function(t) {
          'use strict';
          function n(e, t, n) {
            function r(t) {
              var n = f,
                i = d;
              return (f = d = void 0), (v = t), (p = e.apply(i, n));
            }
            function s(e) {
              var n = e - g,
                i = e - v;
              return void 0 === g || n >= t || n < 0 || (b && i >= h);
            }
            function l() {
              var e = T();
              return s(e)
                ? u(e)
                : void (m = setTimeout(
                    l,
                    (function(e) {
                      var n = t - (e - g);
                      return b ? E(n, h - (e - v)) : n;
                    })(e)
                  ));
            }
            function u(e) {
              return (m = void 0), w && f ? r(e) : ((f = d = void 0), p);
            }
            function c() {
              var e = T(),
                n = s(e);
              if (((f = arguments), (d = this), (g = e), n)) {
                if (void 0 === m)
                  return (function(e) {
                    return (v = e), (m = setTimeout(l, t)), y ? r(e) : p;
                  })(g);
                if (b) return (m = setTimeout(l, t)), r(g);
              }
              return void 0 === m && (m = setTimeout(l, t)), p;
            }
            var f,
              d,
              h,
              p,
              m,
              g,
              v = 0,
              y = !1,
              b = !1,
              w = !0;
            if ('function' != typeof e) throw new TypeError(a);
            return (
              (t = o(t) || 0),
              i(n) &&
                ((y = !!n.leading),
                (h = (b = 'maxWait' in n) ? _(o(n.maxWait) || 0, t) : h),
                (w = 'trailing' in n ? !!n.trailing : w)),
              (c.cancel = function() {
                void 0 !== m && clearTimeout(m),
                  (v = 0),
                  (f = g = d = m = void 0);
              }),
              (c.flush = function() {
                return void 0 === m ? p : u(T());
              }),
              c
            );
          }
          function i(e) {
            var t = void 0 === e ? 'undefined' : s(e);
            return !!e && ('object' == t || 'function' == t);
          }
          function r(e) {
            return (
              'symbol' == (void 0 === e ? 'undefined' : s(e)) ||
              ((function(e) {
                return !!e && 'object' == (void 0 === e ? 'undefined' : s(e));
              })(e) &&
                b.call(e) == u)
            );
          }
          function o(e) {
            if ('number' == typeof e) return e;
            if (r(e)) return l;
            if (i(e)) {
              var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
              e = i(t) ? t + '' : t;
            }
            if ('string' != typeof e) return 0 === e ? e : +e;
            e = e.replace(c, '');
            var n = d.test(e);
            return n || h.test(e)
              ? p(e.slice(2), n ? 2 : 8)
              : f.test(e)
                ? l
                : +e;
          }
          var s =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                    return typeof e;
                  }
                : function(e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  },
            a = 'Expected a function',
            l = NaN,
            u = '[object Symbol]',
            c = /^\s+|\s+$/g,
            f = /^[-+]0x[0-9a-f]+$/i,
            d = /^0b[01]+$/i,
            h = /^0o[0-7]+$/i,
            p = parseInt,
            m =
              'object' == (void 0 === t ? 'undefined' : s(t)) &&
              t &&
              t.Object === Object &&
              t,
            g =
              'object' ==
                ('undefined' == typeof self ? 'undefined' : s(self)) &&
              self &&
              self.Object === Object &&
              self,
            v = m || g || Function('return this')(),
            y = Object.prototype,
            b = y.toString,
            _ = Math.max,
            E = Math.min,
            T = function() {
              return v.Date.now();
            };
          e.exports = function(e, t, r) {
            var o = !0,
              s = !0;
            if ('function' != typeof e) throw new TypeError(a);
            return (
              i(r) &&
                ((o = 'leading' in r ? !!r.leading : o),
                (s = 'trailing' in r ? !!r.trailing : s)),
              n(e, t, { leading: o, maxWait: t, trailing: s })
            );
          };
        }.call(
          t,
          (function() {
            return this;
          })()
        ));
      },
      function(e, t) {
        (function(t) {
          'use strict';
          function n(e) {
            var t = void 0 === e ? 'undefined' : o(e);
            return !!e && ('object' == t || 'function' == t);
          }
          function i(e) {
            return (
              'symbol' == (void 0 === e ? 'undefined' : o(e)) ||
              ((function(e) {
                return !!e && 'object' == (void 0 === e ? 'undefined' : o(e));
              })(e) &&
                y.call(e) == l)
            );
          }
          function r(e) {
            if ('number' == typeof e) return e;
            if (i(e)) return a;
            if (n(e)) {
              var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
              e = n(t) ? t + '' : t;
            }
            if ('string' != typeof e) return 0 === e ? e : +e;
            e = e.replace(u, '');
            var r = f.test(e);
            return r || d.test(e)
              ? h(e.slice(2), r ? 2 : 8)
              : c.test(e)
                ? a
                : +e;
          }
          var o =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                    return typeof e;
                  }
                : function(e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  },
            s = 'Expected a function',
            a = NaN,
            l = '[object Symbol]',
            u = /^\s+|\s+$/g,
            c = /^[-+]0x[0-9a-f]+$/i,
            f = /^0b[01]+$/i,
            d = /^0o[0-7]+$/i,
            h = parseInt,
            p =
              'object' == (void 0 === t ? 'undefined' : o(t)) &&
              t &&
              t.Object === Object &&
              t,
            m =
              'object' ==
                ('undefined' == typeof self ? 'undefined' : o(self)) &&
              self &&
              self.Object === Object &&
              self,
            g = p || m || Function('return this')(),
            v = Object.prototype,
            y = v.toString,
            b = Math.max,
            _ = Math.min,
            E = function() {
              return g.Date.now();
            };
          e.exports = function(e, t, i) {
            function o(t) {
              var n = f,
                i = d;
              return (f = d = void 0), (v = t), (p = e.apply(i, n));
            }
            function a(e) {
              var n = e - g,
                i = e - v;
              return void 0 === g || n >= t || n < 0 || (T && i >= h);
            }
            function l() {
              var e = E();
              return a(e)
                ? u(e)
                : void (m = setTimeout(
                    l,
                    (function(e) {
                      var n = t - (e - g);
                      return T ? _(n, h - (e - v)) : n;
                    })(e)
                  ));
            }
            function u(e) {
              return (m = void 0), w && f ? o(e) : ((f = d = void 0), p);
            }
            function c() {
              var e = E(),
                n = a(e);
              if (((f = arguments), (d = this), (g = e), n)) {
                if (void 0 === m)
                  return (function(e) {
                    return (v = e), (m = setTimeout(l, t)), y ? o(e) : p;
                  })(g);
                if (T) return (m = setTimeout(l, t)), o(g);
              }
              return void 0 === m && (m = setTimeout(l, t)), p;
            }
            var f,
              d,
              h,
              p,
              m,
              g,
              v = 0,
              y = !1,
              T = !1,
              w = !0;
            if ('function' != typeof e) throw new TypeError(s);
            return (
              (t = r(t) || 0),
              n(i) &&
                ((y = !!i.leading),
                (h = (T = 'maxWait' in i) ? b(r(i.maxWait) || 0, t) : h),
                (w = 'trailing' in i ? !!i.trailing : w)),
              (c.cancel = function() {
                void 0 !== m && clearTimeout(m),
                  (v = 0),
                  (f = g = d = m = void 0);
              }),
              (c.flush = function() {
                return void 0 === m ? p : u(E());
              }),
              c
            );
          };
        }.call(
          t,
          (function() {
            return this;
          })()
        ));
      },
      function(e, t) {
        'use strict';
        function n(e) {
          e &&
            e.forEach(function(e) {
              var t = Array.prototype.slice.call(e.addedNodes),
                n = Array.prototype.slice.call(e.removedNodes),
                r = t.concat(n).filter(function(e) {
                  return e.hasAttribute && e.hasAttribute('data-aos');
                }).length;
              r && i();
            });
        }
        Object.defineProperty(t, '__esModule', { value: !0 });
        var i = function() {};
        t.default = function(e, t) {
          var r = window.document,
            o = new (window.MutationObserver ||
              window.WebKitMutationObserver ||
              window.MozMutationObserver)(n);
          (i = t),
            o.observe(r.documentElement, {
              childList: !0,
              subtree: !0,
              removedNodes: !0
            });
        };
      },
      function(e, t) {
        'use strict';
        function n() {
          return navigator.userAgent || navigator.vendor || window.opera || '';
        }
        Object.defineProperty(t, '__esModule', { value: !0 });
        var i = (function() {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  'value' in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function(t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
          o = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          s = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
          a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          l = (function() {
            function e() {
              !(function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, e);
            }
            return (
              i(e, [
                {
                  key: 'phone',
                  value: function() {
                    var e = n();
                    return !(!r.test(e) && !o.test(e.substr(0, 4)));
                  }
                },
                {
                  key: 'mobile',
                  value: function() {
                    var e = n();
                    return !(!s.test(e) && !a.test(e.substr(0, 4)));
                  }
                },
                {
                  key: 'tablet',
                  value: function() {
                    return this.mobile() && !this.phone();
                  }
                }
              ]),
              e
            );
          })();
        t.default = new l();
      },
      function(e, t) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function(e, t) {
            var n = window.pageYOffset,
              i = window.innerHeight;
            e.forEach(function(e, r) {
              !(function(e, t, n) {
                var i = e.node.getAttribute('data-aos-once');
                t > e.position
                  ? e.node.classList.add('aos-animate')
                  : void 0 !== i &&
                    ('false' === i || (!n && 'true' !== i)) &&
                    e.node.classList.remove('aos-animate');
              })(e, i + n, t);
            });
          });
      },
      function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var i = n(12),
          r = (function(e) {
            return e && e.__esModule ? e : { default: e };
          })(i);
        t.default = function(e, t) {
          return (
            e.forEach(function(e, n) {
              e.node.classList.add('aos-init'),
                (e.position = (0, r.default)(e.node, t.offset));
            }),
            e
          );
        };
      },
      function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var i = n(13),
          r = (function(e) {
            return e && e.__esModule ? e : { default: e };
          })(i);
        t.default = function(e, t) {
          var n = 0,
            i = 0,
            o = window.innerHeight,
            s = {
              offset: e.getAttribute('data-aos-offset'),
              anchor: e.getAttribute('data-aos-anchor'),
              anchorPlacement: e.getAttribute('data-aos-anchor-placement')
            };
          switch (
            (s.offset && !isNaN(s.offset) && (i = parseInt(s.offset)),
            s.anchor &&
              document.querySelectorAll(s.anchor) &&
              (e = document.querySelectorAll(s.anchor)[0]),
            (n = (0, r.default)(e).top),
            s.anchorPlacement)
          ) {
            case 'top-bottom':
              break;
            case 'center-bottom':
              n += e.offsetHeight / 2;
              break;
            case 'bottom-bottom':
              n += e.offsetHeight;
              break;
            case 'top-center':
              n += o / 2;
              break;
            case 'bottom-center':
              n += o / 2 + e.offsetHeight;
              break;
            case 'center-center':
              n += o / 2 + e.offsetHeight / 2;
              break;
            case 'top-top':
              n += o;
              break;
            case 'bottom-top':
              n += e.offsetHeight + o;
              break;
            case 'center-top':
              n += e.offsetHeight / 2 + o;
          }
          return s.anchorPlacement || s.offset || isNaN(t) || (i = t), n + i;
        };
      },
      function(e, t) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function(e) {
            for (
              var t = 0, n = 0;
              e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

            )
              (t += e.offsetLeft - ('BODY' != e.tagName ? e.scrollLeft : 0)),
                (n += e.offsetTop - ('BODY' != e.tagName ? e.scrollTop : 0)),
                (e = e.offsetParent);
            return { top: n, left: t };
          });
      },
      function(e, t) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function(e) {
            return (
              (e = e || document.querySelectorAll('[data-aos]')),
              Array.prototype.map.call(e, function(e) {
                return { node: e };
              })
            );
          });
      }
    ]);
  },
  function(e, t, n) {
    'use strict';
    n.r(t);
    n(7);
    var i,
      r = n(0),
      o = n.n(r);
    n(3);
    (o.a.init(), window.getComputedStyle(document.body).mixBlendMode) &&
      (document.documentElement.className += ' has-blendmode');
    (
      (function(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = new Array(e.length); t < e.length; t++)
            n[t] = e[t];
          return n;
        }
      })((i = document.getElementsByTagName('h3'))) ||
      (function(e) {
        if (
          Symbol.iterator in Object(e) ||
          '[object Arguments]' === Object.prototype.toString.call(e)
        )
          return Array.from(e);
      })(i) ||
      (function() {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
      })()
    ).forEach(function(e) {
      if (1 === e.childNodes.length && '#text' === e.childNodes[0].nodeName) {
        var t = e.childNodes[0],
          n = t.textContent,
          i = document.createElement('span');
        (i.textContent = n), e.insertBefore(i, t), t.remove();
      }
    });
    n(2);
  },
  function(e, t) {},
  function(e, t) {
    if (document.getElementById('screen1')) {
      document.getElementById('screen1').onload = function() {
        this.parentElement.className += ' loaded';
      };
      var n = document.getElementsByClassName('ot-demo'),
        i = document.getElementsByClassName('phone-demo'),
        r = 0,
        o = function(e) {
          s.updatePosition(e),
            a(
              (s.y / i[0].offsetHeight / 2).toFixed(2),
              (s.x / i[0].offsetWidth / 2).toFixed(2)
            );
        };
      (n[0].onmouseenter = function(e) {
        o(e);
      }),
        (n[0].onmouseleave = function() {
          i.style = '';
        }),
        (n[0].onmousemove = function(e) {
          r++ % 10 == 0 && o(e);
        });
      var s = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function(e) {
          var t = e || window.event;
          (this.x = t.clientX - this._x), (this.y = -1 * (t.clientY - this._y));
        },
        setOrigin: function(e) {
          (this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2)),
            (this._y = e.offsetTop + Math.floor(e.offsetHeight / 2));
        },
        show: function() {
          return '('.concat(this.x, ', ').concat(this.y, ')');
        }
      };
      s.setOrigin(n[0]);
      var a = function(e, t) {
        console.log(''.concat(e, ',').concat(t));
        var n = 'rotateX('
          .concat(e, 'deg) rotateY(')
          .concat(t, 'deg) rotateZ(2deg)');
        (i[0].style.transform = n),
          (i[0].style.webkitTransform = n),
          (i[0].style.mozTransform = n),
          (i[0].style.msTransform = n),
          (i[0].style.oTransform = n);
      };
    }
  },
  function(e, t) {
    var n;
    n = (function() {
      return this;
    })();
    try {
      n = n || Function('return this')() || (0, eval)('this');
    } catch (e) {
      'object' == typeof window && (n = window);
    }
    e.exports = n;
  },
  function(e, t, n) {
    'use strict';
    n.r(t),
      function(e) {
        for (
          /**!
           * @fileOverview Kickass library to create and place poppers near their reference elements.
           * @version 1.14.3
           * @license
           * Copyright (c) 2016 Federico Zivolo and contributors
           *
           * Permission is hereby granted, free of charge, to any person obtaining a copy
           * of this software and associated documentation files (the "Software"), to deal
           * in the Software without restriction, including without limitation the rights
           * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
           * copies of the Software, and to permit persons to whom the Software is
           * furnished to do so, subject to the following conditions:
           *
           * The above copyright notice and this permission notice shall be included in all
           * copies or substantial portions of the Software.
           *
           * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
           * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
           * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
           * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
           * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
           * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
           * SOFTWARE.
           */ var n =
              'undefined' != typeof window && 'undefined' != typeof document,
            i = ['Edge', 'Trident', 'Firefox'],
            r = 0,
            o = 0;
          o < i.length;
          o += 1
        )
          if (n && navigator.userAgent.indexOf(i[o]) >= 0) {
            r = 1;
            break;
          }
        var s =
          n && window.Promise
            ? function(e) {
                var t = !1;
                return function() {
                  t ||
                    ((t = !0),
                    window.Promise.resolve().then(function() {
                      (t = !1), e();
                    }));
                };
              }
            : function(e) {
                var t = !1;
                return function() {
                  t ||
                    ((t = !0),
                    setTimeout(function() {
                      (t = !1), e();
                    }, r));
                };
              };
        function a(e) {
          return e && '[object Function]' === {}.toString.call(e);
        }
        function l(e, t) {
          if (1 !== e.nodeType) return [];
          var n = getComputedStyle(e, null);
          return t ? n[t] : n;
        }
        function u(e) {
          return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
        }
        function c(e) {
          if (!e) return document.body;
          switch (e.nodeName) {
            case 'HTML':
            case 'BODY':
              return e.ownerDocument.body;
            case '#document':
              return e.body;
          }
          var t = l(e),
            n = t.overflow,
            i = t.overflowX,
            r = t.overflowY;
          return /(auto|scroll|overlay)/.test(n + r + i) ? e : c(u(e));
        }
        var f = n && !(!window.MSInputMethodContext || !document.documentMode),
          d = n && /MSIE 10/.test(navigator.userAgent);
        function h(e) {
          return 11 === e ? f : 10 === e ? d : f || d;
        }
        function p(e) {
          if (!e) return document.documentElement;
          for (
            var t = h(10) ? document.body : null, n = e.offsetParent;
            n === t && e.nextElementSibling;

          )
            n = (e = e.nextElementSibling).offsetParent;
          var i = n && n.nodeName;
          return i && 'BODY' !== i && 'HTML' !== i
            ? -1 !== ['TD', 'TABLE'].indexOf(n.nodeName) &&
              'static' === l(n, 'position')
              ? p(n)
              : n
            : e
              ? e.ownerDocument.documentElement
              : document.documentElement;
        }
        function m(e) {
          return null !== e.parentNode ? m(e.parentNode) : e;
        }
        function g(e, t) {
          if (!(e && e.nodeType && t && t.nodeType))
            return document.documentElement;
          var n =
              e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            r = n ? t : e,
            o = document.createRange();
          o.setStart(i, 0), o.setEnd(r, 0);
          var s,
            a,
            l = o.commonAncestorContainer;
          if ((e !== l && t !== l) || i.contains(r))
            return 'BODY' === (a = (s = l).nodeName) ||
              ('HTML' !== a && p(s.firstElementChild) !== s)
              ? p(l)
              : l;
          var u = m(e);
          return u.host ? g(u.host, t) : g(e, m(t).host);
        }
        function v(e) {
          var t =
              'top' ===
              (arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 'top')
                ? 'scrollTop'
                : 'scrollLeft',
            n = e.nodeName;
          if ('BODY' === n || 'HTML' === n) {
            var i = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || i)[t];
          }
          return e[t];
        }
        function y(e, t) {
          var n = 'x' === t ? 'Left' : 'Top',
            i = 'Left' === n ? 'Right' : 'Bottom';
          return (
            parseFloat(e['border' + n + 'Width'], 10) +
            parseFloat(e['border' + i + 'Width'], 10)
          );
        }
        function b(e, t, n, i) {
          return Math.max(
            t['offset' + e],
            t['scroll' + e],
            n['client' + e],
            n['offset' + e],
            n['scroll' + e],
            h(10)
              ? n['offset' + e] +
                i['margin' + ('Height' === e ? 'Top' : 'Left')] +
                i['margin' + ('Height' === e ? 'Bottom' : 'Right')]
              : 0
          );
        }
        function _() {
          var e = document.body,
            t = document.documentElement,
            n = h(10) && getComputedStyle(t);
          return { height: b('Height', e, t, n), width: b('Width', e, t, n) };
        }
        var E = function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          },
          T = (function() {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  'value' in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function(t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          w = function(e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  })
                : (e[t] = n),
              e
            );
          },
          C =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            };
        function x(e) {
          return C({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
          });
        }
        function A(e) {
          var t = {};
          try {
            if (h(10)) {
              t = e.getBoundingClientRect();
              var n = v(e, 'top'),
                i = v(e, 'left');
              (t.top += n), (t.left += i), (t.bottom += n), (t.right += i);
            } else t = e.getBoundingClientRect();
          } catch (e) {}
          var r = {
              left: t.left,
              top: t.top,
              width: t.right - t.left,
              height: t.bottom - t.top
            },
            o = 'HTML' === e.nodeName ? _() : {},
            s = o.width || e.clientWidth || r.right - r.left,
            a = o.height || e.clientHeight || r.bottom - r.top,
            u = e.offsetWidth - s,
            c = e.offsetHeight - a;
          if (u || c) {
            var f = l(e);
            (u -= y(f, 'x')), (c -= y(f, 'y')), (r.width -= u), (r.height -= c);
          }
          return x(r);
        }
        function S(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = h(10),
            r = 'HTML' === t.nodeName,
            o = A(e),
            s = A(t),
            a = c(e),
            u = l(t),
            f = parseFloat(u.borderTopWidth, 10),
            d = parseFloat(u.borderLeftWidth, 10);
          n &&
            'HTML' === t.nodeName &&
            ((s.top = Math.max(s.top, 0)), (s.left = Math.max(s.left, 0)));
          var p = x({
            top: o.top - s.top - f,
            left: o.left - s.left - d,
            width: o.width,
            height: o.height
          });
          if (((p.marginTop = 0), (p.marginLeft = 0), !i && r)) {
            var m = parseFloat(u.marginTop, 10),
              g = parseFloat(u.marginLeft, 10);
            (p.top -= f - m),
              (p.bottom -= f - m),
              (p.left -= d - g),
              (p.right -= d - g),
              (p.marginTop = m),
              (p.marginLeft = g);
          }
          return (
            (i && !n ? t.contains(a) : t === a && 'BODY' !== a.nodeName) &&
              (p = (function(e, t) {
                var n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  i = v(t, 'top'),
                  r = v(t, 'left'),
                  o = n ? -1 : 1;
                return (
                  (e.top += i * o),
                  (e.bottom += i * o),
                  (e.left += r * o),
                  (e.right += r * o),
                  e
                );
              })(p, t)),
            p
          );
        }
        function D(e) {
          if (!e || !e.parentElement || h()) return document.documentElement;
          for (var t = e.parentElement; t && 'none' === l(t, 'transform'); )
            t = t.parentElement;
          return t || document.documentElement;
        }
        function O(e, t, n, i) {
          var r =
              arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            o = { top: 0, left: 0 },
            s = r ? D(e) : g(e, t);
          if ('viewport' === i)
            o = (function(e) {
              var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n = e.ownerDocument.documentElement,
                i = S(e, n),
                r = Math.max(n.clientWidth, window.innerWidth || 0),
                o = Math.max(n.clientHeight, window.innerHeight || 0),
                s = t ? 0 : v(n),
                a = t ? 0 : v(n, 'left');
              return x({
                top: s - i.top + i.marginTop,
                left: a - i.left + i.marginLeft,
                width: r,
                height: o
              });
            })(s, r);
          else {
            var a = void 0;
            'scrollParent' === i
              ? 'BODY' === (a = c(u(t))).nodeName &&
                (a = e.ownerDocument.documentElement)
              : (a = 'window' === i ? e.ownerDocument.documentElement : i);
            var f = S(a, s, r);
            if (
              'HTML' !== a.nodeName ||
              (function e(t) {
                var n = t.nodeName;
                return (
                  'BODY' !== n &&
                  'HTML' !== n &&
                  ('fixed' === l(t, 'position') || e(u(t)))
                );
              })(s)
            )
              o = f;
            else {
              var d = _(),
                h = d.height,
                p = d.width;
              (o.top += f.top - f.marginTop),
                (o.bottom = h + f.top),
                (o.left += f.left - f.marginLeft),
                (o.right = p + f.left);
            }
          }
          return (
            (o.left += n), (o.top += n), (o.right -= n), (o.bottom -= n), o
          );
        }
        function N(e, t, n, i, r) {
          var o =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (-1 === e.indexOf('auto')) return e;
          var s = O(n, i, o, r),
            a = {
              top: { width: s.width, height: t.top - s.top },
              right: { width: s.right - t.right, height: s.height },
              bottom: { width: s.width, height: s.bottom - t.bottom },
              left: { width: t.left - s.left, height: s.height }
            },
            l = Object.keys(a)
              .map(function(e) {
                return C({ key: e }, a[e], {
                  area: ((t = a[e]), t.width * t.height)
                });
                var t;
              })
              .sort(function(e, t) {
                return t.area - e.area;
              }),
            u = l.filter(function(e) {
              var t = e.width,
                i = e.height;
              return t >= n.clientWidth && i >= n.clientHeight;
            }),
            c = u.length > 0 ? u[0].key : l[0].key,
            f = e.split('-')[1];
          return c + (f ? '-' + f : '');
        }
        function I(e, t, n) {
          var i =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return S(n, i ? D(t) : g(t, n), i);
        }
        function k(e) {
          var t = getComputedStyle(e),
            n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
          return { width: e.offsetWidth + i, height: e.offsetHeight + n };
        }
        function L(e) {
          var t = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom'
          };
          return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e];
          });
        }
        function j(e, t, n) {
          n = n.split('-')[0];
          var i = k(e),
            r = { width: i.width, height: i.height },
            o = -1 !== ['right', 'left'].indexOf(n),
            s = o ? 'top' : 'left',
            a = o ? 'left' : 'top',
            l = o ? 'height' : 'width',
            u = o ? 'width' : 'height';
          return (
            (r[s] = t[s] + t[l] / 2 - i[l] / 2),
            (r[a] = n === a ? t[a] - i[u] : t[L(a)]),
            r
          );
        }
        function P(e, t) {
          return Array.prototype.find ? e.find(t) : e.filter(t)[0];
        }
        function H(e, t, n) {
          return (
            (void 0 === n
              ? e
              : e.slice(
                  0,
                  (function(e, t, n) {
                    if (Array.prototype.findIndex)
                      return e.findIndex(function(e) {
                        return e[t] === n;
                      });
                    var i = P(e, function(e) {
                      return e[t] === n;
                    });
                    return e.indexOf(i);
                  })(e, 'name', n)
                )
            ).forEach(function(e) {
              e.function &&
                console.warn(
                  '`modifier.function` is deprecated, use `modifier.fn`!'
                );
              var n = e.function || e.fn;
              e.enabled &&
                a(n) &&
                ((t.offsets.popper = x(t.offsets.popper)),
                (t.offsets.reference = x(t.offsets.reference)),
                (t = n(t, e)));
            }),
            t
          );
        }
        function R(e, t) {
          return e.some(function(e) {
            var n = e.name;
            return e.enabled && n === t;
          });
        }
        function M(e) {
          for (
            var t = [!1, 'ms', 'Webkit', 'Moz', 'O'],
              n = e.charAt(0).toUpperCase() + e.slice(1),
              i = 0;
            i < t.length;
            i++
          ) {
            var r = t[i],
              o = r ? '' + r + n : e;
            if (void 0 !== document.body.style[o]) return o;
          }
          return null;
        }
        function W(e) {
          var t = e.ownerDocument;
          return t ? t.defaultView : window;
        }
        function F(e, t, n, i) {
          (n.updateBound = i),
            W(e).addEventListener('resize', n.updateBound, { passive: !0 });
          var r = c(e);
          return (
            (function e(t, n, i, r) {
              var o = 'BODY' === t.nodeName,
                s = o ? t.ownerDocument.defaultView : t;
              s.addEventListener(n, i, { passive: !0 }),
                o || e(c(s.parentNode), n, i, r),
                r.push(s);
            })(r, 'scroll', n.updateBound, n.scrollParents),
            (n.scrollElement = r),
            (n.eventsEnabled = !0),
            n
          );
        }
        function q() {
          var e, t;
          this.state.eventsEnabled &&
            (cancelAnimationFrame(this.scheduleUpdate),
            (this.state = ((e = this.reference),
            (t = this.state),
            W(e).removeEventListener('resize', t.updateBound),
            t.scrollParents.forEach(function(e) {
              e.removeEventListener('scroll', t.updateBound);
            }),
            (t.updateBound = null),
            (t.scrollParents = []),
            (t.scrollElement = null),
            (t.eventsEnabled = !1),
            t)));
        }
        function B(e) {
          return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
        }
        function U(e, t) {
          Object.keys(t).forEach(function(n) {
            var i = '';
            -1 !==
              ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(
                n
              ) &&
              B(t[n]) &&
              (i = 'px'),
              (e.style[n] = t[n] + i);
          });
        }
        function V(e, t, n) {
          var i = P(e, function(e) {
              return e.name === t;
            }),
            r =
              !!i &&
              e.some(function(e) {
                return e.name === n && e.enabled && e.order < i.order;
              });
          if (!r) {
            var o = '`' + t + '`',
              s = '`' + n + '`';
            console.warn(
              s +
                ' modifier is required by ' +
                o +
                ' modifier in order to work, be sure to include it before ' +
                o +
                '!'
            );
          }
          return r;
        }
        var G = [
            'auto-start',
            'auto',
            'auto-end',
            'top-start',
            'top',
            'top-end',
            'right-start',
            'right',
            'right-end',
            'bottom-end',
            'bottom',
            'bottom-start',
            'left-end',
            'left',
            'left-start'
          ],
          K = G.slice(3);
        function $(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = K.indexOf(e),
            i = K.slice(n + 1).concat(K.slice(0, n));
          return t ? i.reverse() : i;
        }
        var z = {
          FLIP: 'flip',
          CLOCKWISE: 'clockwise',
          COUNTERCLOCKWISE: 'counterclockwise'
        };
        function Y(e, t, n, i) {
          var r = [0, 0],
            o = -1 !== ['right', 'left'].indexOf(i),
            s = e.split(/(\+|\-)/).map(function(e) {
              return e.trim();
            }),
            a = s.indexOf(
              P(s, function(e) {
                return -1 !== e.search(/,|\s/);
              })
            );
          s[a] &&
            -1 === s[a].indexOf(',') &&
            console.warn(
              'Offsets separated by white space(s) are deprecated, use a comma (,) instead.'
            );
          var l = /\s*,\s*|\s+/,
            u =
              -1 !== a
                ? [
                    s.slice(0, a).concat([s[a].split(l)[0]]),
                    [s[a].split(l)[1]].concat(s.slice(a + 1))
                  ]
                : [s];
          return (
            (u = u.map(function(e, i) {
              var r = (1 === i ? !o : o) ? 'height' : 'width',
                s = !1;
              return e
                .reduce(function(e, t) {
                  return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t)
                    ? ((e[e.length - 1] = t), (s = !0), e)
                    : s
                      ? ((e[e.length - 1] += t), (s = !1), e)
                      : e.concat(t);
                }, [])
                .map(function(e) {
                  return (function(e, t, n, i) {
                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                      o = +r[1],
                      s = r[2];
                    if (!o) return e;
                    if (0 === s.indexOf('%')) {
                      var a = void 0;
                      switch (s) {
                        case '%p':
                          a = n;
                          break;
                        case '%':
                        case '%r':
                        default:
                          a = i;
                      }
                      return (x(a)[t] / 100) * o;
                    }
                    if ('vh' === s || 'vw' === s)
                      return (
                        (('vh' === s
                          ? Math.max(
                              document.documentElement.clientHeight,
                              window.innerHeight || 0
                            )
                          : Math.max(
                              document.documentElement.clientWidth,
                              window.innerWidth || 0
                            )) /
                          100) *
                        o
                      );
                    return o;
                  })(e, r, t, n);
                });
            })).forEach(function(e, t) {
              e.forEach(function(n, i) {
                B(n) && (r[t] += n * ('-' === e[i - 1] ? -1 : 1));
              });
            }),
            r
          );
        }
        var Q = {
            placement: 'bottom',
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
              shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                  var t = e.placement,
                    n = t.split('-')[0],
                    i = t.split('-')[1];
                  if (i) {
                    var r = e.offsets,
                      o = r.reference,
                      s = r.popper,
                      a = -1 !== ['bottom', 'top'].indexOf(n),
                      l = a ? 'left' : 'top',
                      u = a ? 'width' : 'height',
                      c = {
                        start: w({}, l, o[l]),
                        end: w({}, l, o[l] + o[u] - s[u])
                      };
                    e.offsets.popper = C({}, s, c[i]);
                  }
                  return e;
                }
              },
              offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                  var n = t.offset,
                    i = e.placement,
                    r = e.offsets,
                    o = r.popper,
                    s = r.reference,
                    a = i.split('-')[0],
                    l = void 0;
                  return (
                    (l = B(+n) ? [+n, 0] : Y(n, o, s, a)),
                    'left' === a
                      ? ((o.top += l[0]), (o.left -= l[1]))
                      : 'right' === a
                        ? ((o.top += l[0]), (o.left += l[1]))
                        : 'top' === a
                          ? ((o.left += l[0]), (o.top -= l[1]))
                          : 'bottom' === a &&
                            ((o.left += l[0]), (o.top += l[1])),
                    (e.popper = o),
                    e
                  );
                },
                offset: 0
              },
              preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                  var n = t.boundariesElement || p(e.instance.popper);
                  e.instance.reference === n && (n = p(n));
                  var i = M('transform'),
                    r = e.instance.popper.style,
                    o = r.top,
                    s = r.left,
                    a = r[i];
                  (r.top = ''), (r.left = ''), (r[i] = '');
                  var l = O(
                    e.instance.popper,
                    e.instance.reference,
                    t.padding,
                    n,
                    e.positionFixed
                  );
                  (r.top = o), (r.left = s), (r[i] = a), (t.boundaries = l);
                  var u = t.priority,
                    c = e.offsets.popper,
                    f = {
                      primary: function(e) {
                        var n = c[e];
                        return (
                          c[e] < l[e] &&
                            !t.escapeWithReference &&
                            (n = Math.max(c[e], l[e])),
                          w({}, e, n)
                        );
                      },
                      secondary: function(e) {
                        var n = 'right' === e ? 'left' : 'top',
                          i = c[n];
                        return (
                          c[e] > l[e] &&
                            !t.escapeWithReference &&
                            (i = Math.min(
                              c[n],
                              l[e] - ('right' === e ? c.width : c.height)
                            )),
                          w({}, n, i)
                        );
                      }
                    };
                  return (
                    u.forEach(function(e) {
                      var t =
                        -1 !== ['left', 'top'].indexOf(e)
                          ? 'primary'
                          : 'secondary';
                      c = C({}, c, f[t](e));
                    }),
                    (e.offsets.popper = c),
                    e
                  );
                },
                priority: ['left', 'right', 'top', 'bottom'],
                padding: 5,
                boundariesElement: 'scrollParent'
              },
              keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                  var t = e.offsets,
                    n = t.popper,
                    i = t.reference,
                    r = e.placement.split('-')[0],
                    o = Math.floor,
                    s = -1 !== ['top', 'bottom'].indexOf(r),
                    a = s ? 'right' : 'bottom',
                    l = s ? 'left' : 'top',
                    u = s ? 'width' : 'height';
                  return (
                    n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[u]),
                    n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])),
                    e
                  );
                }
              },
              arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, t) {
                  var n;
                  if (!V(e.instance.modifiers, 'arrow', 'keepTogether'))
                    return e;
                  var i = t.element;
                  if ('string' == typeof i) {
                    if (!(i = e.instance.popper.querySelector(i))) return e;
                  } else if (!e.instance.popper.contains(i))
                    return (
                      console.warn(
                        'WARNING: `arrow.element` must be child of its popper element!'
                      ),
                      e
                    );
                  var r = e.placement.split('-')[0],
                    o = e.offsets,
                    s = o.popper,
                    a = o.reference,
                    u = -1 !== ['left', 'right'].indexOf(r),
                    c = u ? 'height' : 'width',
                    f = u ? 'Top' : 'Left',
                    d = f.toLowerCase(),
                    h = u ? 'left' : 'top',
                    p = u ? 'bottom' : 'right',
                    m = k(i)[c];
                  a[p] - m < s[d] && (e.offsets.popper[d] -= s[d] - (a[p] - m)),
                    a[d] + m > s[p] && (e.offsets.popper[d] += a[d] + m - s[p]),
                    (e.offsets.popper = x(e.offsets.popper));
                  var g = a[d] + a[c] / 2 - m / 2,
                    v = l(e.instance.popper),
                    y = parseFloat(v['margin' + f], 10),
                    b = parseFloat(v['border' + f + 'Width'], 10),
                    _ = g - e.offsets.popper[d] - y - b;
                  return (
                    (_ = Math.max(Math.min(s[c] - m, _), 0)),
                    (e.arrowElement = i),
                    (e.offsets.arrow = (w((n = {}), d, Math.round(_)),
                    w(n, h, ''),
                    n)),
                    e
                  );
                },
                element: '[x-arrow]'
              },
              flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                  if (R(e.instance.modifiers, 'inner')) return e;
                  if (e.flipped && e.placement === e.originalPlacement)
                    return e;
                  var n = O(
                      e.instance.popper,
                      e.instance.reference,
                      t.padding,
                      t.boundariesElement,
                      e.positionFixed
                    ),
                    i = e.placement.split('-')[0],
                    r = L(i),
                    o = e.placement.split('-')[1] || '',
                    s = [];
                  switch (t.behavior) {
                    case z.FLIP:
                      s = [i, r];
                      break;
                    case z.CLOCKWISE:
                      s = $(i);
                      break;
                    case z.COUNTERCLOCKWISE:
                      s = $(i, !0);
                      break;
                    default:
                      s = t.behavior;
                  }
                  return (
                    s.forEach(function(a, l) {
                      if (i !== a || s.length === l + 1) return e;
                      (i = e.placement.split('-')[0]), (r = L(i));
                      var u = e.offsets.popper,
                        c = e.offsets.reference,
                        f = Math.floor,
                        d =
                          ('left' === i && f(u.right) > f(c.left)) ||
                          ('right' === i && f(u.left) < f(c.right)) ||
                          ('top' === i && f(u.bottom) > f(c.top)) ||
                          ('bottom' === i && f(u.top) < f(c.bottom)),
                        h = f(u.left) < f(n.left),
                        p = f(u.right) > f(n.right),
                        m = f(u.top) < f(n.top),
                        g = f(u.bottom) > f(n.bottom),
                        v =
                          ('left' === i && h) ||
                          ('right' === i && p) ||
                          ('top' === i && m) ||
                          ('bottom' === i && g),
                        y = -1 !== ['top', 'bottom'].indexOf(i),
                        b =
                          !!t.flipVariations &&
                          ((y && 'start' === o && h) ||
                            (y && 'end' === o && p) ||
                            (!y && 'start' === o && m) ||
                            (!y && 'end' === o && g));
                      (d || v || b) &&
                        ((e.flipped = !0),
                        (d || v) && (i = s[l + 1]),
                        b &&
                          (o = (function(e) {
                            return 'end' === e
                              ? 'start'
                              : 'start' === e
                                ? 'end'
                                : e;
                          })(o)),
                        (e.placement = i + (o ? '-' + o : '')),
                        (e.offsets.popper = C(
                          {},
                          e.offsets.popper,
                          j(e.instance.popper, e.offsets.reference, e.placement)
                        )),
                        (e = H(e.instance.modifiers, e, 'flip')));
                    }),
                    e
                  );
                },
                behavior: 'flip',
                padding: 5,
                boundariesElement: 'viewport'
              },
              inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                  var t = e.placement,
                    n = t.split('-')[0],
                    i = e.offsets,
                    r = i.popper,
                    o = i.reference,
                    s = -1 !== ['left', 'right'].indexOf(n),
                    a = -1 === ['top', 'left'].indexOf(n);
                  return (
                    (r[s ? 'left' : 'top'] =
                      o[n] - (a ? r[s ? 'width' : 'height'] : 0)),
                    (e.placement = L(t)),
                    (e.offsets.popper = x(r)),
                    e
                  );
                }
              },
              hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                  if (!V(e.instance.modifiers, 'hide', 'preventOverflow'))
                    return e;
                  var t = e.offsets.reference,
                    n = P(e.instance.modifiers, function(e) {
                      return 'preventOverflow' === e.name;
                    }).boundaries;
                  if (
                    t.bottom < n.top ||
                    t.left > n.right ||
                    t.top > n.bottom ||
                    t.right < n.left
                  ) {
                    if (!0 === e.hide) return e;
                    (e.hide = !0), (e.attributes['x-out-of-boundaries'] = '');
                  } else {
                    if (!1 === e.hide) return e;
                    (e.hide = !1), (e.attributes['x-out-of-boundaries'] = !1);
                  }
                  return e;
                }
              },
              computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                  var n = t.x,
                    i = t.y,
                    r = e.offsets.popper,
                    o = P(e.instance.modifiers, function(e) {
                      return 'applyStyle' === e.name;
                    }).gpuAcceleration;
                  void 0 !== o &&
                    console.warn(
                      'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
                    );
                  var s = void 0 !== o ? o : t.gpuAcceleration,
                    a = A(p(e.instance.popper)),
                    l = { position: r.position },
                    u = {
                      left: Math.floor(r.left),
                      top: Math.round(r.top),
                      bottom: Math.round(r.bottom),
                      right: Math.floor(r.right)
                    },
                    c = 'bottom' === n ? 'top' : 'bottom',
                    f = 'right' === i ? 'left' : 'right',
                    d = M('transform'),
                    h = void 0,
                    m = void 0;
                  if (
                    ((m = 'bottom' === c ? -a.height + u.bottom : u.top),
                    (h = 'right' === f ? -a.width + u.right : u.left),
                    s && d)
                  )
                    (l[d] = 'translate3d(' + h + 'px, ' + m + 'px, 0)'),
                      (l[c] = 0),
                      (l[f] = 0),
                      (l.willChange = 'transform');
                  else {
                    var g = 'bottom' === c ? -1 : 1,
                      v = 'right' === f ? -1 : 1;
                    (l[c] = m * g),
                      (l[f] = h * v),
                      (l.willChange = c + ', ' + f);
                  }
                  var y = { 'x-placement': e.placement };
                  return (
                    (e.attributes = C({}, y, e.attributes)),
                    (e.styles = C({}, l, e.styles)),
                    (e.arrowStyles = C({}, e.offsets.arrow, e.arrowStyles)),
                    e
                  );
                },
                gpuAcceleration: !0,
                x: 'bottom',
                y: 'right'
              },
              applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                  var t, n;
                  return (
                    U(e.instance.popper, e.styles),
                    (t = e.instance.popper),
                    (n = e.attributes),
                    Object.keys(n).forEach(function(e) {
                      !1 !== n[e]
                        ? t.setAttribute(e, n[e])
                        : t.removeAttribute(e);
                    }),
                    e.arrowElement &&
                      Object.keys(e.arrowStyles).length &&
                      U(e.arrowElement, e.arrowStyles),
                    e
                  );
                },
                onLoad: function(e, t, n, i, r) {
                  var o = I(r, t, e, n.positionFixed),
                    s = N(
                      n.placement,
                      o,
                      t,
                      e,
                      n.modifiers.flip.boundariesElement,
                      n.modifiers.flip.padding
                    );
                  return (
                    t.setAttribute('x-placement', s),
                    U(t, { position: n.positionFixed ? 'fixed' : 'absolute' }),
                    n
                  );
                },
                gpuAcceleration: void 0
              }
            }
          },
          X = (function() {
            function e(t, n) {
              var i = this,
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
              E(this, e),
                (this.scheduleUpdate = function() {
                  return requestAnimationFrame(i.update);
                }),
                (this.update = s(this.update.bind(this))),
                (this.options = C({}, e.Defaults, r)),
                (this.state = {
                  isDestroyed: !1,
                  isCreated: !1,
                  scrollParents: []
                }),
                (this.reference = t && t.jquery ? t[0] : t),
                (this.popper = n && n.jquery ? n[0] : n),
                (this.options.modifiers = {}),
                Object.keys(C({}, e.Defaults.modifiers, r.modifiers)).forEach(
                  function(t) {
                    i.options.modifiers[t] = C(
                      {},
                      e.Defaults.modifiers[t] || {},
                      r.modifiers ? r.modifiers[t] : {}
                    );
                  }
                ),
                (this.modifiers = Object.keys(this.options.modifiers)
                  .map(function(e) {
                    return C({ name: e }, i.options.modifiers[e]);
                  })
                  .sort(function(e, t) {
                    return e.order - t.order;
                  })),
                this.modifiers.forEach(function(e) {
                  e.enabled &&
                    a(e.onLoad) &&
                    e.onLoad(i.reference, i.popper, i.options, e, i.state);
                }),
                this.update();
              var o = this.options.eventsEnabled;
              o && this.enableEventListeners(), (this.state.eventsEnabled = o);
            }
            return (
              T(e, [
                {
                  key: 'update',
                  value: function() {
                    return function() {
                      if (!this.state.isDestroyed) {
                        var e = {
                          instance: this,
                          styles: {},
                          arrowStyles: {},
                          attributes: {},
                          flipped: !1,
                          offsets: {}
                        };
                        (e.offsets.reference = I(
                          this.state,
                          this.popper,
                          this.reference,
                          this.options.positionFixed
                        )),
                          (e.placement = N(
                            this.options.placement,
                            e.offsets.reference,
                            this.popper,
                            this.reference,
                            this.options.modifiers.flip.boundariesElement,
                            this.options.modifiers.flip.padding
                          )),
                          (e.originalPlacement = e.placement),
                          (e.positionFixed = this.options.positionFixed),
                          (e.offsets.popper = j(
                            this.popper,
                            e.offsets.reference,
                            e.placement
                          )),
                          (e.offsets.popper.position = this.options
                            .positionFixed
                            ? 'fixed'
                            : 'absolute'),
                          (e = H(this.modifiers, e)),
                          this.state.isCreated
                            ? this.options.onUpdate(e)
                            : ((this.state.isCreated = !0),
                              this.options.onCreate(e));
                      }
                    }.call(this);
                  }
                },
                {
                  key: 'destroy',
                  value: function() {
                    return function() {
                      return (
                        (this.state.isDestroyed = !0),
                        R(this.modifiers, 'applyStyle') &&
                          (this.popper.removeAttribute('x-placement'),
                          (this.popper.style.position = ''),
                          (this.popper.style.top = ''),
                          (this.popper.style.left = ''),
                          (this.popper.style.right = ''),
                          (this.popper.style.bottom = ''),
                          (this.popper.style.willChange = ''),
                          (this.popper.style[M('transform')] = '')),
                        this.disableEventListeners(),
                        this.options.removeOnDestroy &&
                          this.popper.parentNode.removeChild(this.popper),
                        this
                      );
                    }.call(this);
                  }
                },
                {
                  key: 'enableEventListeners',
                  value: function() {
                    return function() {
                      this.state.eventsEnabled ||
                        (this.state = F(
                          this.reference,
                          this.options,
                          this.state,
                          this.scheduleUpdate
                        ));
                    }.call(this);
                  }
                },
                {
                  key: 'disableEventListeners',
                  value: function() {
                    return q.call(this);
                  }
                }
              ]),
              e
            );
          })();
        (X.Utils = ('undefined' != typeof window ? window : e).PopperUtils),
          (X.placements = G),
          (X.Defaults = Q),
          (t.default = X);
      }.call(this, n(4));
  },
  function(e, t, n) {
    var i; /*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */ /*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
    !(function(t, n) {
      'use strict';
      'object' == typeof e && 'object' == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function(e) {
                if (!e.document)
                  throw new Error('jQuery requires a window with a document');
                return n(e);
              })
        : n(t);
    })('undefined' != typeof window ? window : this, function(n, i) {
      'use strict';
      var o = [],
        s = n.document,
        a = Object.getPrototypeOf,
        l = o.slice,
        u = o.concat,
        c = o.push,
        f = o.indexOf,
        d = {},
        h = d.toString,
        p = d.hasOwnProperty,
        m = p.toString,
        g = m.call(Object),
        v = {},
        y = function(e) {
          return 'function' == typeof e && 'number' != typeof e.nodeType;
        },
        b = function(e) {
          return null != e && e === e.window;
        },
        _ = { type: !0, src: !0, noModule: !0 };
      function E(e, t, n) {
        var r,
          i = (t = t || s).createElement('script');
        if (((i.text = e), n)) for (r in _) n[r] && (i[r] = n[r]);
        t.head.appendChild(i).parentNode.removeChild(i);
      }
      function T(e) {
        return null == e
          ? e + ''
          : 'object' == typeof e || 'function' == typeof e
            ? d[h.call(e)] || 'object'
            : typeof e;
      }
      var w = function(e, t) {
          return new w.fn.init(e, t);
        },
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      function x(e) {
        var t = !!e && 'length' in e && e.length,
          n = T(e);
        return (
          !y(e) &&
          !b(e) &&
          ('array' === n ||
            0 === t ||
            ('number' == typeof t && t > 0 && t - 1 in e))
        );
      }
      (w.fn = w.prototype = {
        jquery: '3.3.1',
        constructor: w,
        length: 0,
        toArray: function() {
          return l.call(this);
        },
        get: function(e) {
          return null == e
            ? l.call(this)
            : e < 0
              ? this[e + this.length]
              : this[e];
        },
        pushStack: function(e) {
          var t = w.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function(e) {
          return w.each(this, e);
        },
        map: function(e) {
          return this.pushStack(
            w.map(this, function(t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice: function() {
          return this.pushStack(l.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        eq: function(e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        push: c,
        sort: o.sort,
        splice: o.splice
      }),
        (w.extend = w.fn.extend = function() {
          var e,
            t,
            n,
            r,
            i,
            o,
            s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
          for (
            'boolean' == typeof s && ((u = s), (s = arguments[a] || {}), a++),
              'object' == typeof s || y(s) || (s = {}),
              a === l && ((s = this), a--);
            a < l;
            a++
          )
            if (null != (e = arguments[a]))
              for (t in e)
                (n = s[t]),
                  s !== (r = e[t]) &&
                    (u && r && (w.isPlainObject(r) || (i = Array.isArray(r)))
                      ? (i
                          ? ((i = !1), (o = n && Array.isArray(n) ? n : []))
                          : (o = n && w.isPlainObject(n) ? n : {}),
                        (s[t] = w.extend(u, o, r)))
                      : void 0 !== r && (s[t] = r));
          return s;
        }),
        w.extend({
          expando: 'jQuery' + ('3.3.1' + Math.random()).replace(/\D/g, ''),
          isReady: !0,
          error: function(e) {
            throw new Error(e);
          },
          noop: function() {},
          isPlainObject: function(e) {
            var t, n;
            return (
              !(!e || '[object Object]' !== h.call(e)) &&
              (!(t = a(e)) ||
                ('function' ==
                  typeof (n = p.call(t, 'constructor') && t.constructor) &&
                  m.call(n) === g))
            );
          },
          isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function(e) {
            E(e);
          },
          each: function(e, t) {
            var n,
              r = 0;
            if (x(e))
              for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
          },
          trim: function(e) {
            return null == e ? '' : (e + '').replace(C, '');
          },
          makeArray: function(e, t) {
            var n = t || [];
            return (
              null != e &&
                (x(Object(e))
                  ? w.merge(n, 'string' == typeof e ? [e] : e)
                  : c.call(n, e)),
              n
            );
          },
          inArray: function(e, t, n) {
            return null == t ? -1 : f.call(t, e, n);
          },
          merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
              e[i++] = t[r];
            return (e.length = i), e;
          },
          grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
              !t(e[i], i) !== s && r.push(e[i]);
            return r;
          },
          map: function(e, t, n) {
            var r,
              i,
              o = 0,
              s = [];
            if (x(e))
              for (r = e.length; o < r; o++)
                null != (i = t(e[o], o, n)) && s.push(i);
            else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return u.apply([], s);
          },
          guid: 1,
          support: v
        }),
        'function' == typeof Symbol &&
          (w.fn[Symbol.iterator] = o[Symbol.iterator]),
        w.each(
          'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
            ' '
          ),
          function(e, t) {
            d['[object ' + t + ']'] = t.toLowerCase();
          }
        );
      var S /*!
   * Sizzle CSS Selector Engine v2.3.3
   * https://sizzlejs.com/
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license
   * http://jquery.org/license
   *
   * Date: 2016-08-08
   */ = (function(
        e
      ) {
        var t,
          n,
          i,
          r,
          o,
          s,
          a,
          l,
          u,
          c,
          f,
          d,
          h,
          p,
          m,
          g,
          v,
          y,
          b,
          _ = 'sizzle' + 1 * new Date(),
          E = e.document,
          T = 0,
          w = 0,
          C = se(),
          x = se(),
          A = se(),
          S = function(e, t) {
            return e === t && (f = !0), 0;
          },
          D = {}.hasOwnProperty,
          O = [],
          N = O.pop,
          I = O.push,
          k = O.push,
          L = O.slice,
          j = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
            return -1;
          },
          P =
            'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
          H = '[\\x20\\t\\r\\n\\f]',
          R = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
          M =
            '\\[' +
            H +
            '*(' +
            R +
            ')(?:' +
            H +
            '*([*^$|!~]?=)' +
            H +
            '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
            R +
            '))|)' +
            H +
            '*\\]',
          W =
            ':(' +
            R +
            ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
            M +
            ')*)|.*)\\)|)',
          F = new RegExp(H + '+', 'g'),
          q = new RegExp(
            '^' + H + '+|((?:^|[^\\\\])(?:\\\\.)*)' + H + '+$',
            'g'
          ),
          B = new RegExp('^' + H + '*,' + H + '*'),
          U = new RegExp('^' + H + '*([>+~]|' + H + ')' + H + '*'),
          V = new RegExp('=' + H + '*([^\\]\'"]*?)' + H + '*\\]', 'g'),
          G = new RegExp(W),
          K = new RegExp('^' + R + '$'),
          $ = {
            ID: new RegExp('^#(' + R + ')'),
            CLASS: new RegExp('^\\.(' + R + ')'),
            TAG: new RegExp('^(' + R + '|[*])'),
            ATTR: new RegExp('^' + M),
            PSEUDO: new RegExp('^' + W),
            CHILD: new RegExp(
              '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                H +
                '*(even|odd|(([+-]|)(\\d*)n|)' +
                H +
                '*(?:([+-]|)' +
                H +
                '*(\\d+)|))' +
                H +
                '*\\)|)',
              'i'
            ),
            bool: new RegExp('^(?:' + P + ')$', 'i'),
            needsContext: new RegExp(
              '^' +
                H +
                '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                H +
                '*((?:-\\d)?\\d*)' +
                H +
                '*\\)|)(?=[^-]|$)',
              'i'
            )
          },
          z = /^(?:input|select|textarea|button)$/i,
          Y = /^h\d$/i,
          Q = /^[^{]+\{\s*\[native \w/,
          X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          J = /[+~]/,
          Z = new RegExp('\\\\([\\da-f]{1,6}' + H + '?|(' + H + ')|.)', 'ig'),
          ee = function(e, t, n) {
            var i = '0x' + t - 65536;
            return i != i || n
              ? t
              : i < 0
                ? String.fromCharCode(i + 65536)
                : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
          },
          te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          ne = function(e, t) {
            return t
              ? '\0' === e
                ? '�'
                : e.slice(0, -1) +
                  '\\' +
                  e.charCodeAt(e.length - 1).toString(16) +
                  ' '
              : '\\' + e;
          },
          ie = function() {
            d();
          },
          re = ye(
            function(e) {
              return !0 === e.disabled && ('form' in e || 'label' in e);
            },
            { dir: 'parentNode', next: 'legend' }
          );
        try {
          k.apply((O = L.call(E.childNodes)), E.childNodes),
            O[E.childNodes.length].nodeType;
        } catch (e) {
          k = {
            apply: O.length
              ? function(e, t) {
                  I.apply(e, L.call(t));
                }
              : function(e, t) {
                  for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                  e.length = n - 1;
                }
          };
        }
        function oe(e, t, i, r) {
          var o,
            a,
            u,
            c,
            f,
            p,
            v,
            y = t && t.ownerDocument,
            T = t ? t.nodeType : 9;
          if (
            ((i = i || []),
            'string' != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))
          )
            return i;
          if (
            !r &&
            ((t ? t.ownerDocument || t : E) !== h && d(t), (t = t || h), m)
          ) {
            if (11 !== T && (f = X.exec(e)))
              if ((o = f[1])) {
                if (9 === T) {
                  if (!(u = t.getElementById(o))) return i;
                  if (u.id === o) return i.push(u), i;
                } else if (
                  y &&
                  (u = y.getElementById(o)) &&
                  b(t, u) &&
                  u.id === o
                )
                  return i.push(u), i;
              } else {
                if (f[2]) return k.apply(i, t.getElementsByTagName(e)), i;
                if (
                  (o = f[3]) &&
                  n.getElementsByClassName &&
                  t.getElementsByClassName
                )
                  return k.apply(i, t.getElementsByClassName(o)), i;
              }
            if (n.qsa && !A[e + ' '] && (!g || !g.test(e))) {
              if (1 !== T) (y = t), (v = e);
              else if ('object' !== t.nodeName.toLowerCase()) {
                for (
                  (c = t.getAttribute('id'))
                    ? (c = c.replace(te, ne))
                    : t.setAttribute('id', (c = _)),
                    a = (p = s(e)).length;
                  a--;

                )
                  p[a] = '#' + c + ' ' + ve(p[a]);
                (v = p.join(',')), (y = (J.test(e) && me(t.parentNode)) || t);
              }
              if (v)
                try {
                  return k.apply(i, y.querySelectorAll(v)), i;
                } catch (e) {
                } finally {
                  c === _ && t.removeAttribute('id');
                }
            }
          }
          return l(e.replace(q, '$1'), t, i, r);
        }
        function se() {
          var e = [];
          return function t(n, r) {
            return (
              e.push(n + ' ') > i.cacheLength && delete t[e.shift()],
              (t[n + ' '] = r)
            );
          };
        }
        function ae(e) {
          return (e[_] = !0), e;
        }
        function le(e) {
          var t = h.createElement('fieldset');
          try {
            return !!e(t);
          } catch (e) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t), (t = null);
          }
        }
        function ue(e, t) {
          for (var n = e.split('|'), r = n.length; r--; )
            i.attrHandle[n[r]] = t;
        }
        function ce(e, t) {
          var n = t && e,
            i =
              n &&
              1 === e.nodeType &&
              1 === t.nodeType &&
              e.sourceIndex - t.sourceIndex;
          if (i) return i;
          if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
          return e ? 1 : -1;
        }
        function fe(e) {
          return function(t) {
            return 'input' === t.nodeName.toLowerCase() && t.type === e;
          };
        }
        function de(e) {
          return function(t) {
            var n = t.nodeName.toLowerCase();
            return ('input' === n || 'button' === n) && t.type === e;
          };
        }
        function he(e) {
          return function(t) {
            return 'form' in t
              ? t.parentNode && !1 === t.disabled
                ? 'label' in t
                  ? 'label' in t.parentNode
                    ? t.parentNode.disabled === e
                    : t.disabled === e
                  : t.isDisabled === e || (t.isDisabled !== !e && re(t) === e)
                : t.disabled === e
              : 'label' in t && t.disabled === e;
          };
        }
        function pe(e) {
          return ae(function(t) {
            return (
              (t = +t),
              ae(function(n, i) {
                for (var r, o = e([], n.length, t), s = o.length; s--; )
                  n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
              })
            );
          });
        }
        function me(e) {
          return e && void 0 !== e.getElementsByTagName && e;
        }
        for (t in ((n = oe.support = {}),
        (o = oe.isXML = function(e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && 'HTML' !== t.nodeName;
        }),
        (d = oe.setDocument = function(e) {
          var t,
            r,
            s = e ? e.ownerDocument || e : E;
          return s !== h && 9 === s.nodeType && s.documentElement
            ? ((p = (h = s).documentElement),
              (m = !o(h)),
              E !== h &&
                (r = h.defaultView) &&
                r.top !== r &&
                (r.addEventListener
                  ? r.addEventListener('unload', ie, !1)
                  : r.attachEvent && r.attachEvent('onunload', ie)),
              (n.attributes = le(function(e) {
                return (e.className = 'i'), !e.getAttribute('className');
              })),
              (n.getElementsByTagName = le(function(e) {
                return (
                  e.appendChild(h.createComment('')),
                  !e.getElementsByTagName('*').length
                );
              })),
              (n.getElementsByClassName = Q.test(h.getElementsByClassName)),
              (n.getById = le(function(e) {
                return (
                  (p.appendChild(e).id = _),
                  !h.getElementsByName || !h.getElementsByName(_).length
                );
              })),
              n.getById
                ? ((i.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                      return e.getAttribute('id') === t;
                    };
                  }),
                  (i.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && m) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }))
                : ((i.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                      var n =
                        void 0 !== e.getAttributeNode &&
                        e.getAttributeNode('id');
                      return n && n.value === t;
                    };
                  }),
                  (i.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && m) {
                      var n,
                        i,
                        r,
                        o = t.getElementById(e);
                      if (o) {
                        if ((n = o.getAttributeNode('id')) && n.value === e)
                          return [o];
                        for (r = t.getElementsByName(e), i = 0; (o = r[i++]); )
                          if ((n = o.getAttributeNode('id')) && n.value === e)
                            return [o];
                      }
                      return [];
                    }
                  })),
              (i.find.TAG = n.getElementsByTagName
                ? function(e, t) {
                    return void 0 !== t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : n.qsa
                        ? t.querySelectorAll(e)
                        : void 0;
                  }
                : function(e, t) {
                    var n,
                      i = [],
                      r = 0,
                      o = t.getElementsByTagName(e);
                    if ('*' === e) {
                      for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                      return i;
                    }
                    return o;
                  }),
              (i.find.CLASS =
                n.getElementsByClassName &&
                function(e, t) {
                  if (void 0 !== t.getElementsByClassName && m)
                    return t.getElementsByClassName(e);
                }),
              (v = []),
              (g = []),
              (n.qsa = Q.test(h.querySelectorAll)) &&
                (le(function(e) {
                  (p.appendChild(e).innerHTML =
                    "<a id='" +
                    _ +
                    "'></a><select id='" +
                    _ +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      g.push('[*^$]=' + H + '*(?:\'\'|"")'),
                    e.querySelectorAll('[selected]').length ||
                      g.push('\\[' + H + '*(?:value|' + P + ')'),
                    e.querySelectorAll('[id~=' + _ + '-]').length ||
                      g.push('~='),
                    e.querySelectorAll(':checked').length || g.push(':checked'),
                    e.querySelectorAll('a#' + _ + '+*').length ||
                      g.push('.#.+[+~]');
                }),
                le(function(e) {
                  e.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = h.createElement('input');
                  t.setAttribute('type', 'hidden'),
                    e.appendChild(t).setAttribute('name', 'D'),
                    e.querySelectorAll('[name=d]').length &&
                      g.push('name' + H + '*[*^$|!~]?='),
                    2 !== e.querySelectorAll(':enabled').length &&
                      g.push(':enabled', ':disabled'),
                    (p.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(':disabled').length &&
                      g.push(':enabled', ':disabled'),
                    e.querySelectorAll('*,:x'),
                    g.push(',.*:');
                })),
              (n.matchesSelector = Q.test(
                (y =
                  p.matches ||
                  p.webkitMatchesSelector ||
                  p.mozMatchesSelector ||
                  p.oMatchesSelector ||
                  p.msMatchesSelector)
              )) &&
                le(function(e) {
                  (n.disconnectedMatch = y.call(e, '*')),
                    y.call(e, "[s!='']:x"),
                    v.push('!=', W);
                }),
              (g = g.length && new RegExp(g.join('|'))),
              (v = v.length && new RegExp(v.join('|'))),
              (t = Q.test(p.compareDocumentPosition)),
              (b =
                t || Q.test(p.contains)
                  ? function(e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                      return (
                        e === i ||
                        !(
                          !i ||
                          1 !== i.nodeType ||
                          !(n.contains
                            ? n.contains(i)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(i))
                        )
                      );
                    }
                  : function(e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (S = t
                ? function(e, t) {
                    if (e === t) return (f = !0), 0;
                    var i =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      i ||
                      (1 &
                        (i =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!n.sortDetached && t.compareDocumentPosition(e) === i)
                        ? e === h || (e.ownerDocument === E && b(E, e))
                          ? -1
                          : t === h || (t.ownerDocument === E && b(E, t))
                            ? 1
                            : c
                              ? j(c, e) - j(c, t)
                              : 0
                        : 4 & i
                          ? -1
                          : 1)
                    );
                  }
                : function(e, t) {
                    if (e === t) return (f = !0), 0;
                    var n,
                      i = 0,
                      r = e.parentNode,
                      o = t.parentNode,
                      s = [e],
                      a = [t];
                    if (!r || !o)
                      return e === h
                        ? -1
                        : t === h
                          ? 1
                          : r
                            ? -1
                            : o
                              ? 1
                              : c
                                ? j(c, e) - j(c, t)
                                : 0;
                    if (r === o) return ce(e, t);
                    for (n = e; (n = n.parentNode); ) s.unshift(n);
                    for (n = t; (n = n.parentNode); ) a.unshift(n);
                    for (; s[i] === a[i]; ) i++;
                    return i
                      ? ce(s[i], a[i])
                      : s[i] === E
                        ? -1
                        : a[i] === E
                          ? 1
                          : 0;
                  }),
              h)
            : h;
        }),
        (oe.matches = function(e, t) {
          return oe(e, null, null, t);
        }),
        (oe.matchesSelector = function(e, t) {
          if (
            ((e.ownerDocument || e) !== h && d(e),
            (t = t.replace(V, "='$1']")),
            n.matchesSelector &&
              m &&
              !A[t + ' '] &&
              (!v || !v.test(t)) &&
              (!g || !g.test(t)))
          )
            try {
              var i = y.call(e, t);
              if (
                i ||
                n.disconnectedMatch ||
                (e.document && 11 !== e.document.nodeType)
              )
                return i;
            } catch (e) {}
          return oe(t, h, null, [e]).length > 0;
        }),
        (oe.contains = function(e, t) {
          return (e.ownerDocument || e) !== h && d(e), b(e, t);
        }),
        (oe.attr = function(e, t) {
          (e.ownerDocument || e) !== h && d(e);
          var r = i.attrHandle[t.toLowerCase()],
            o =
              r && D.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;
          return void 0 !== o
            ? o
            : n.attributes || !m
              ? e.getAttribute(t)
              : (o = e.getAttributeNode(t)) && o.specified
                ? o.value
                : null;
        }),
        (oe.escape = function(e) {
          return (e + '').replace(te, ne);
        }),
        (oe.error = function(e) {
          throw new Error('Syntax error, unrecognized expression: ' + e);
        }),
        (oe.uniqueSort = function(e) {
          var t,
            i = [],
            r = 0,
            o = 0;
          if (
            ((f = !n.detectDuplicates),
            (c = !n.sortStable && e.slice(0)),
            e.sort(S),
            f)
          ) {
            for (; (t = e[o++]); ) t === e[o] && (r = i.push(o));
            for (; r--; ) e.splice(i[r], 1);
          }
          return (c = null), e;
        }),
        (r = oe.getText = function(e) {
          var t,
            n = '',
            i = 0,
            o = e.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ('string' == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
            } else if (3 === o || 4 === o) return e.nodeValue;
          } else for (; (t = e[i++]); ) n += r(t);
          return n;
        }),
        ((i = oe.selectors = {
          cacheLength: 50,
          createPseudo: ae,
          match: $,
          attrHandle: {},
          find: {},
          relative: {
            '>': { dir: 'parentNode', first: !0 },
            ' ': { dir: 'parentNode' },
            '+': { dir: 'previousSibling', first: !0 },
            '~': { dir: 'previousSibling' }
          },
          preFilter: {
            ATTR: function(e) {
              return (
                (e[1] = e[1].replace(Z, ee)),
                (e[3] = (e[3] || e[4] || e[5] || '').replace(Z, ee)),
                '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                e.slice(0, 4)
              );
            },
            CHILD: function(e) {
              return (
                (e[1] = e[1].toLowerCase()),
                'nth' === e[1].slice(0, 3)
                  ? (e[3] || oe.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ('even' === e[3] || 'odd' === e[3]))),
                    (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                  : e[3] && oe.error(e[0]),
                e
              );
            },
            PSEUDO: function(e) {
              var t,
                n = !e[6] && e[2];
              return $.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || '')
                    : n &&
                      G.test(n) &&
                      (t = s(n, !0)) &&
                      (t = n.indexOf(')', n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            }
          },
          filter: {
            TAG: function(e) {
              var t = e.replace(Z, ee).toLowerCase();
              return '*' === e
                ? function() {
                    return !0;
                  }
                : function(e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function(e) {
              var t = C[e + ' '];
              return (
                t ||
                ((t = new RegExp('(^|' + H + ')' + e + '(' + H + '|$)')) &&
                  C(e, function(e) {
                    return t.test(
                      ('string' == typeof e.className && e.className) ||
                        (void 0 !== e.getAttribute &&
                          e.getAttribute('class')) ||
                        ''
                    );
                  }))
              );
            },
            ATTR: function(e, t, n) {
              return function(i) {
                var r = oe.attr(i, e);
                return null == r
                  ? '!=' === t
                  : !t ||
                      ((r += ''),
                      '=' === t
                        ? r === n
                        : '!=' === t
                          ? r !== n
                          : '^=' === t
                            ? n && 0 === r.indexOf(n)
                            : '*=' === t
                              ? n && r.indexOf(n) > -1
                              : '$=' === t
                                ? n && r.slice(-n.length) === n
                                : '~=' === t
                                  ? (' ' + r.replace(F, ' ') + ' ').indexOf(n) >
                                    -1
                                  : '|=' === t &&
                                    (r === n ||
                                      r.slice(0, n.length + 1) === n + '-'));
              };
            },
            CHILD: function(e, t, n, i, r) {
              var o = 'nth' !== e.slice(0, 3),
                s = 'last' !== e.slice(-4),
                a = 'of-type' === t;
              return 1 === i && 0 === r
                ? function(e) {
                    return !!e.parentNode;
                  }
                : function(t, n, l) {
                    var u,
                      c,
                      f,
                      d,
                      h,
                      p,
                      m = o !== s ? 'nextSibling' : 'previousSibling',
                      g = t.parentNode,
                      v = a && t.nodeName.toLowerCase(),
                      y = !l && !a,
                      b = !1;
                    if (g) {
                      if (o) {
                        for (; m; ) {
                          for (d = t; (d = d[m]); )
                            if (
                              a
                                ? d.nodeName.toLowerCase() === v
                                : 1 === d.nodeType
                            )
                              return !1;
                          p = m = 'only' === e && !p && 'nextSibling';
                        }
                        return !0;
                      }
                      if (((p = [s ? g.firstChild : g.lastChild]), s && y)) {
                        for (
                          b =
                            (h =
                              (u =
                                (c =
                                  (f = (d = g)[_] || (d[_] = {}))[d.uniqueID] ||
                                  (f[d.uniqueID] = {}))[e] || [])[0] === T &&
                              u[1]) && u[2],
                            d = h && g.childNodes[h];
                          (d = (++h && d && d[m]) || (b = h = 0) || p.pop());

                        )
                          if (1 === d.nodeType && ++b && d === t) {
                            c[e] = [T, h, b];
                            break;
                          }
                      } else if (
                        (y &&
                          (b = h =
                            (u =
                              (c =
                                (f = (d = t)[_] || (d[_] = {}))[d.uniqueID] ||
                                (f[d.uniqueID] = {}))[e] || [])[0] === T &&
                            u[1]),
                        !1 === b)
                      )
                        for (
                          ;
                          (d = (++h && d && d[m]) || (b = h = 0) || p.pop()) &&
                          ((a
                            ? d.nodeName.toLowerCase() !== v
                            : 1 !== d.nodeType) ||
                            !++b ||
                            (y &&
                              ((c =
                                (f = d[_] || (d[_] = {}))[d.uniqueID] ||
                                (f[d.uniqueID] = {}))[e] = [T, b]),
                            d !== t));

                        );
                      return (b -= r) === i || (b % i == 0 && b / i >= 0);
                    }
                  };
            },
            PSEUDO: function(e, t) {
              var n,
                r =
                  i.pseudos[e] ||
                  i.setFilters[e.toLowerCase()] ||
                  oe.error('unsupported pseudo: ' + e);
              return r[_]
                ? r(t)
                : r.length > 1
                  ? ((n = [e, e, '', t]),
                    i.setFilters.hasOwnProperty(e.toLowerCase())
                      ? ae(function(e, n) {
                          for (var i, o = r(e, t), s = o.length; s--; )
                            e[(i = j(e, o[s]))] = !(n[i] = o[s]);
                        })
                      : function(e) {
                          return r(e, 0, n);
                        })
                  : r;
            }
          },
          pseudos: {
            not: ae(function(e) {
              var t = [],
                n = [],
                i = a(e.replace(q, '$1'));
              return i[_]
                ? ae(function(e, t, n, r) {
                    for (var o, s = i(e, null, r, []), a = e.length; a--; )
                      (o = s[a]) && (e[a] = !(t[a] = o));
                  })
                : function(e, r, o) {
                    return (
                      (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop()
                    );
                  };
            }),
            has: ae(function(e) {
              return function(t) {
                return oe(e, t).length > 0;
              };
            }),
            contains: ae(function(e) {
              return (
                (e = e.replace(Z, ee)),
                function(t) {
                  return (t.textContent || t.innerText || r(t)).indexOf(e) > -1;
                }
              );
            }),
            lang: ae(function(e) {
              return (
                K.test(e || '') || oe.error('unsupported lang: ' + e),
                (e = e.replace(Z, ee).toLowerCase()),
                function(t) {
                  var n;
                  do {
                    if (
                      (n = m
                        ? t.lang
                        : t.getAttribute('xml:lang') || t.getAttribute('lang'))
                    )
                      return (
                        (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-')
                      );
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function(t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function(e) {
              return e === p;
            },
            focus: function(e) {
              return (
                e === h.activeElement &&
                (!h.hasFocus || h.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: he(!1),
            disabled: he(!0),
            checked: function(e) {
              var t = e.nodeName.toLowerCase();
              return (
                ('input' === t && !!e.checked) ||
                ('option' === t && !!e.selected)
              );
            },
            selected: function(e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function(e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function(e) {
              return !i.pseudos.empty(e);
            },
            header: function(e) {
              return Y.test(e.nodeName);
            },
            input: function(e) {
              return z.test(e.nodeName);
            },
            button: function(e) {
              var t = e.nodeName.toLowerCase();
              return ('input' === t && 'button' === e.type) || 'button' === t;
            },
            text: function(e) {
              var t;
              return (
                'input' === e.nodeName.toLowerCase() &&
                'text' === e.type &&
                (null == (t = e.getAttribute('type')) ||
                  'text' === t.toLowerCase())
              );
            },
            first: pe(function() {
              return [0];
            }),
            last: pe(function(e, t) {
              return [t - 1];
            }),
            eq: pe(function(e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: pe(function(e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: pe(function(e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: pe(function(e, t, n) {
              for (var i = n < 0 ? n + t : n; --i >= 0; ) e.push(i);
              return e;
            }),
            gt: pe(function(e, t, n) {
              for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
              return e;
            })
          }
        }).pseudos.nth =
          i.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
          i.pseudos[t] = fe(t);
        for (t in { submit: !0, reset: !0 }) i.pseudos[t] = de(t);
        function ge() {}
        function ve(e) {
          for (var t = 0, n = e.length, i = ''; t < n; t++) i += e[t].value;
          return i;
        }
        function ye(e, t, n) {
          var i = t.dir,
            r = t.next,
            o = r || i,
            s = n && 'parentNode' === o,
            a = w++;
          return t.first
            ? function(t, n, r) {
                for (; (t = t[i]); )
                  if (1 === t.nodeType || s) return e(t, n, r);
                return !1;
              }
            : function(t, n, l) {
                var u,
                  c,
                  f,
                  d = [T, a];
                if (l) {
                  for (; (t = t[i]); )
                    if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                } else
                  for (; (t = t[i]); )
                    if (1 === t.nodeType || s)
                      if (
                        ((c =
                          (f = t[_] || (t[_] = {}))[t.uniqueID] ||
                          (f[t.uniqueID] = {})),
                        r && r === t.nodeName.toLowerCase())
                      )
                        t = t[i] || t;
                      else {
                        if ((u = c[o]) && u[0] === T && u[1] === a)
                          return (d[2] = u[2]);
                        if (((c[o] = d), (d[2] = e(t, n, l)))) return !0;
                      }
                return !1;
              };
        }
        function be(e) {
          return e.length > 1
            ? function(t, n, i) {
                for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                return !0;
              }
            : e[0];
        }
        function _e(e, t, n, i, r) {
          for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)
            (o = e[a]) && ((n && !n(o, i, r)) || (s.push(o), u && t.push(a)));
          return s;
        }
        function Ee(e, t, n, i, r, o) {
          return (
            i && !i[_] && (i = Ee(i)),
            r && !r[_] && (r = Ee(r, o)),
            ae(function(o, s, a, l) {
              var u,
                c,
                f,
                d = [],
                h = [],
                p = s.length,
                m =
                  o ||
                  (function(e, t, n) {
                    for (var i = 0, r = t.length; i < r; i++) oe(e, t[i], n);
                    return n;
                  })(t || '*', a.nodeType ? [a] : a, []),
                g = !e || (!o && t) ? m : _e(m, d, e, a, l),
                v = n ? (r || (o ? e : p || i) ? [] : s) : g;
              if ((n && n(g, v, a, l), i))
                for (u = _e(v, h), i(u, [], a, l), c = u.length; c--; )
                  (f = u[c]) && (v[h[c]] = !(g[h[c]] = f));
              if (o) {
                if (r || e) {
                  if (r) {
                    for (u = [], c = v.length; c--; )
                      (f = v[c]) && u.push((g[c] = f));
                    r(null, (v = []), u, l);
                  }
                  for (c = v.length; c--; )
                    (f = v[c]) &&
                      (u = r ? j(o, f) : d[c]) > -1 &&
                      (o[u] = !(s[u] = f));
                }
              } else (v = _e(v === s ? v.splice(p, v.length) : v)), r ? r(null, s, v, l) : k.apply(s, v);
            })
          );
        }
        function Te(e) {
          for (
            var t,
              n,
              r,
              o = e.length,
              s = i.relative[e[0].type],
              a = s || i.relative[' '],
              l = s ? 1 : 0,
              c = ye(
                function(e) {
                  return e === t;
                },
                a,
                !0
              ),
              f = ye(
                function(e) {
                  return j(t, e) > -1;
                },
                a,
                !0
              ),
              d = [
                function(e, n, i) {
                  var r =
                    (!s && (i || n !== u)) ||
                    ((t = n).nodeType ? c(e, n, i) : f(e, n, i));
                  return (t = null), r;
                }
              ];
            l < o;
            l++
          )
            if ((n = i.relative[e[l].type])) d = [ye(be(d), n)];
            else {
              if ((n = i.filter[e[l].type].apply(null, e[l].matches))[_]) {
                for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                return Ee(
                  l > 1 && be(d),
                  l > 1 &&
                    ve(
                      e
                        .slice(0, l - 1)
                        .concat({ value: ' ' === e[l - 2].type ? '*' : '' })
                    ).replace(q, '$1'),
                  n,
                  l < r && Te(e.slice(l, r)),
                  r < o && Te((e = e.slice(r))),
                  r < o && ve(e)
                );
              }
              d.push(n);
            }
          return be(d);
        }
        return (
          (ge.prototype = i.filters = i.pseudos),
          (i.setFilters = new ge()),
          (s = oe.tokenize = function(e, t) {
            var n,
              r,
              o,
              s,
              a,
              l,
              u,
              c = x[e + ' '];
            if (c) return t ? 0 : c.slice(0);
            for (a = e, l = [], u = i.preFilter; a; ) {
              for (s in ((n && !(r = B.exec(a))) ||
                (r && (a = a.slice(r[0].length) || a), l.push((o = []))),
              (n = !1),
              (r = U.exec(a)) &&
                ((n = r.shift()),
                o.push({ value: n, type: r[0].replace(q, ' ') }),
                (a = a.slice(n.length))),
              i.filter))
                !(r = $[s].exec(a)) ||
                  (u[s] && !(r = u[s](r))) ||
                  ((n = r.shift()),
                  o.push({ value: n, type: s, matches: r }),
                  (a = a.slice(n.length)));
              if (!n) break;
            }
            return t ? a.length : a ? oe.error(e) : x(e, l).slice(0);
          }),
          (a = oe.compile = function(e, t) {
            var n,
              r = [],
              o = [],
              a = A[e + ' '];
            if (!a) {
              for (t || (t = s(e)), n = t.length; n--; )
                (a = Te(t[n]))[_] ? r.push(a) : o.push(a);
              (a = A(
                e,
                (function(e, t) {
                  var n = t.length > 0,
                    r = e.length > 0,
                    o = function(o, s, a, l, c) {
                      var f,
                        p,
                        g,
                        v = 0,
                        y = '0',
                        b = o && [],
                        _ = [],
                        E = u,
                        w = o || (r && i.find.TAG('*', c)),
                        C = (T += null == E ? 1 : Math.random() || 0.1),
                        x = w.length;
                      for (
                        c && (u = s === h || s || c);
                        y !== x && null != (f = w[y]);
                        y++
                      ) {
                        if (r && f) {
                          for (
                            p = 0,
                              s || f.ownerDocument === h || (d(f), (a = !m));
                            (g = e[p++]);

                          )
                            if (g(f, s || h, a)) {
                              l.push(f);
                              break;
                            }
                          c && (T = C);
                        }
                        n && ((f = !g && f) && v--, o && b.push(f));
                      }
                      if (((v += y), n && y !== v)) {
                        for (p = 0; (g = t[p++]); ) g(b, _, s, a);
                        if (o) {
                          if (v > 0)
                            for (; y--; ) b[y] || _[y] || (_[y] = N.call(l));
                          _ = _e(_);
                        }
                        k.apply(l, _),
                          c &&
                            !o &&
                            _.length > 0 &&
                            v + t.length > 1 &&
                            oe.uniqueSort(l);
                      }
                      return c && ((T = C), (u = E)), b;
                    };
                  return n ? ae(o) : o;
                })(o, r)
              )).selector = e;
            }
            return a;
          }),
          (l = oe.select = function(e, t, n, r) {
            var o,
              l,
              u,
              c,
              f,
              d = 'function' == typeof e && e,
              h = !r && s((e = d.selector || e));
            if (((n = n || []), 1 === h.length)) {
              if (
                (l = h[0] = h[0].slice(0)).length > 2 &&
                'ID' === (u = l[0]).type &&
                9 === t.nodeType &&
                m &&
                i.relative[l[1].type]
              ) {
                if (!(t = (i.find.ID(u.matches[0].replace(Z, ee), t) || [])[0]))
                  return n;
                d && (t = t.parentNode), (e = e.slice(l.shift().value.length));
              }
              for (
                o = $.needsContext.test(e) ? 0 : l.length;
                o-- && ((u = l[o]), !i.relative[(c = u.type)]);

              )
                if (
                  (f = i.find[c]) &&
                  (r = f(
                    u.matches[0].replace(Z, ee),
                    (J.test(l[0].type) && me(t.parentNode)) || t
                  ))
                ) {
                  if ((l.splice(o, 1), !(e = r.length && ve(l))))
                    return k.apply(n, r), n;
                  break;
                }
            }
            return (
              (d || a(e, h))(
                r,
                t,
                !m,
                n,
                !t || (J.test(e) && me(t.parentNode)) || t
              ),
              n
            );
          }),
          (n.sortStable =
            _.split('')
              .sort(S)
              .join('') === _),
          (n.detectDuplicates = !!f),
          d(),
          (n.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(h.createElement('fieldset'));
          })),
          le(function(e) {
            return (
              (e.innerHTML = "<a href='#'></a>"),
              '#' === e.firstChild.getAttribute('href')
            );
          }) ||
            ue('type|href|height|width', function(e, t, n) {
              if (!n)
                return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
            }),
          (n.attributes &&
            le(function(e) {
              return (
                (e.innerHTML = '<input/>'),
                e.firstChild.setAttribute('value', ''),
                '' === e.firstChild.getAttribute('value')
              );
            })) ||
            ue('value', function(e, t, n) {
              if (!n && 'input' === e.nodeName.toLowerCase())
                return e.defaultValue;
            }),
          le(function(e) {
            return null == e.getAttribute('disabled');
          }) ||
            ue(P, function(e, t, n) {
              var i;
              if (!n)
                return !0 === e[t]
                  ? t.toLowerCase()
                  : (i = e.getAttributeNode(t)) && i.specified
                    ? i.value
                    : null;
            }),
          oe
        );
      })(n);
      (w.find = A),
        (w.expr = A.selectors),
        (w.expr[':'] = w.expr.pseudos),
        (w.uniqueSort = w.unique = A.uniqueSort),
        (w.text = A.getText),
        (w.isXMLDoc = A.isXML),
        (w.contains = A.contains),
        (w.escapeSelector = A.escape);
      var S = function(e, t, n) {
          for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (r && w(e).is(n)) break;
              i.push(e);
            }
          return i;
        },
        D = function(e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        O = w.expr.match.needsContext;
      function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var I = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function k(e, t, n) {
        return y(t)
          ? w.grep(e, function(e, i) {
              return !!t.call(e, i, e) !== n;
            })
          : t.nodeType
            ? w.grep(e, function(e) {
                return (e === t) !== n;
              })
            : 'string' != typeof t
              ? w.grep(e, function(e) {
                  return f.call(t, e) > -1 !== n;
                })
              : w.filter(t, e, n);
      }
      (w.filter = function(e, t, n) {
        var i = t[0];
        return (
          n && (e = ':not(' + e + ')'),
          1 === t.length && 1 === i.nodeType
            ? w.find.matchesSelector(i, e)
              ? [i]
              : []
            : w.find.matches(
                e,
                w.grep(t, function(e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        w.fn.extend({
          find: function(e) {
            var t,
              n,
              i = this.length,
              r = this;
            if ('string' != typeof e)
              return this.pushStack(
                w(e).filter(function() {
                  for (t = 0; t < i; t++) if (w.contains(r[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < i; t++) w.find(e, r[t], n);
            return i > 1 ? w.uniqueSort(n) : n;
          },
          filter: function(e) {
            return this.pushStack(k(this, e || [], !1));
          },
          not: function(e) {
            return this.pushStack(k(this, e || [], !0));
          },
          is: function(e) {
            return !!k(
              this,
              'string' == typeof e && O.test(e) ? w(e) : e || [],
              !1
            ).length;
          }
        });
      var L,
        j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((w.fn.init = function(e, t, n) {
        var i, r;
        if (!e) return this;
        if (((n = n || L), 'string' == typeof e)) {
          if (
            !(i =
              '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : j.exec(e)) ||
            (!i[1] && t)
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (i[1]) {
            if (
              ((t = t instanceof w ? t[0] : t),
              w.merge(
                this,
                w.parseHTML(
                  i[1],
                  t && t.nodeType ? t.ownerDocument || t : s,
                  !0
                )
              ),
              I.test(i[1]) && w.isPlainObject(t))
            )
              for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this;
          }
          return (
            (r = s.getElementById(i[2])) && ((this[0] = r), (this.length = 1)),
            this
          );
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : y(e)
            ? void 0 !== n.ready
              ? n.ready(e)
              : e(w)
            : w.makeArray(e, this);
      }).prototype =
        w.fn),
        (L = w(s));
      var P = /^(?:parents|prev(?:Until|All))/,
        H = { children: !0, contents: !0, next: !0, prev: !0 };
      function R(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      w.fn.extend({
        has: function(e) {
          var t = w(e, this),
            n = t.length;
          return this.filter(function() {
            for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
          });
        },
        closest: function(e, t) {
          var n,
            i = 0,
            r = this.length,
            o = [],
            s = 'string' != typeof e && w(e);
          if (!O.test(e))
            for (; i < r; i++)
              for (n = this[i]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (s
                    ? s.index(n) > -1
                    : 1 === n.nodeType && w.find.matchesSelector(n, e))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
        },
        index: function(e) {
          return e
            ? 'string' == typeof e
              ? f.call(w(e), this[0])
              : f.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1;
        },
        add: function(e, t) {
          return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
        },
        addBack: function(e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        }
      }),
        w.each(
          {
            parent: function(e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function(e) {
              return S(e, 'parentNode');
            },
            parentsUntil: function(e, t, n) {
              return S(e, 'parentNode', n);
            },
            next: function(e) {
              return R(e, 'nextSibling');
            },
            prev: function(e) {
              return R(e, 'previousSibling');
            },
            nextAll: function(e) {
              return S(e, 'nextSibling');
            },
            prevAll: function(e) {
              return S(e, 'previousSibling');
            },
            nextUntil: function(e, t, n) {
              return S(e, 'nextSibling', n);
            },
            prevUntil: function(e, t, n) {
              return S(e, 'previousSibling', n);
            },
            siblings: function(e) {
              return D((e.parentNode || {}).firstChild, e);
            },
            children: function(e) {
              return D(e.firstChild);
            },
            contents: function(e) {
              return N(e, 'iframe')
                ? e.contentDocument
                : (N(e, 'template') && (e = e.content || e),
                  w.merge([], e.childNodes));
            }
          },
          function(e, t) {
            w.fn[e] = function(n, i) {
              var r = w.map(this, t, n);
              return (
                'Until' !== e.slice(-5) && (i = n),
                i && 'string' == typeof i && (r = w.filter(i, r)),
                this.length > 1 &&
                  (H[e] || w.uniqueSort(r), P.test(e) && r.reverse()),
                this.pushStack(r)
              );
            };
          }
        );
      var M = /[^\x20\t\r\n\f]+/g;
      function W(e) {
        return e;
      }
      function F(e) {
        throw e;
      }
      function q(e, t, n, i) {
        var r;
        try {
          e && y((r = e.promise))
            ? r
                .call(e)
                .done(t)
                .fail(n)
            : e && y((r = e.then))
              ? r.call(e, t, n)
              : t.apply(void 0, [e].slice(i));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (w.Callbacks = function(e) {
        e =
          'string' == typeof e
            ? (function(e) {
                var t = {};
                return (
                  w.each(e.match(M) || [], function(e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : w.extend({}, e);
        var t,
          n,
          i,
          r,
          o = [],
          s = [],
          a = -1,
          l = function() {
            for (r = r || e.once, i = t = !0; s.length; a = -1)
              for (n = s.shift(); ++a < o.length; )
                !1 === o[a].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((a = o.length), (n = !1));
            e.memory || (n = !1), (t = !1), r && (o = n ? [] : '');
          },
          u = {
            add: function() {
              return (
                o &&
                  (n && !t && ((a = o.length - 1), s.push(n)),
                  (function t(n) {
                    w.each(n, function(n, i) {
                      y(i)
                        ? (e.unique && u.has(i)) || o.push(i)
                        : i && i.length && 'string' !== T(i) && t(i);
                    });
                  })(arguments),
                  n && !t && l()),
                this
              );
            },
            remove: function() {
              return (
                w.each(arguments, function(e, t) {
                  for (var n; (n = w.inArray(t, o, n)) > -1; )
                    o.splice(n, 1), n <= a && a--;
                }),
                this
              );
            },
            has: function(e) {
              return e ? w.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function() {
              return o && (o = []), this;
            },
            disable: function() {
              return (r = s = []), (o = n = ''), this;
            },
            disabled: function() {
              return !o;
            },
            lock: function() {
              return (r = s = []), n || t || (o = n = ''), this;
            },
            locked: function() {
              return !!r;
            },
            fireWith: function(e, n) {
              return (
                r ||
                  ((n = [e, (n = n || []).slice ? n.slice() : n]),
                  s.push(n),
                  t || l()),
                this
              );
            },
            fire: function() {
              return u.fireWith(this, arguments), this;
            },
            fired: function() {
              return !!i;
            }
          };
        return u;
      }),
        w.extend({
          Deferred: function(e) {
            var t = [
                [
                  'notify',
                  'progress',
                  w.Callbacks('memory'),
                  w.Callbacks('memory'),
                  2
                ],
                [
                  'resolve',
                  'done',
                  w.Callbacks('once memory'),
                  w.Callbacks('once memory'),
                  0,
                  'resolved'
                ],
                [
                  'reject',
                  'fail',
                  w.Callbacks('once memory'),
                  w.Callbacks('once memory'),
                  1,
                  'rejected'
                ]
              ],
              i = 'pending',
              r = {
                state: function() {
                  return i;
                },
                always: function() {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function(e) {
                  return r.then(null, e);
                },
                pipe: function() {
                  var e = arguments;
                  return w
                    .Deferred(function(n) {
                      w.each(t, function(t, i) {
                        var r = y(e[i[4]]) && e[i[4]];
                        o[i[1]](function() {
                          var e = r && r.apply(this, arguments);
                          e && y(e.promise)
                            ? e
                                .promise()
                                .progress(n.notify)
                                .done(n.resolve)
                                .fail(n.reject)
                            : n[i[0] + 'With'](this, r ? [e] : arguments);
                        });
                      }),
                        (e = null);
                    })
                    .promise();
                },
                then: function(e, i, r) {
                  var o = 0;
                  function s(e, t, i, r) {
                    return function() {
                      var a = this,
                        l = arguments,
                        u = function() {
                          var n, u;
                          if (!(e < o)) {
                            if ((n = i.apply(a, l)) === t.promise())
                              throw new TypeError('Thenable self-resolution');
                            (u =
                              n &&
                              ('object' == typeof n ||
                                'function' == typeof n) &&
                              n.then),
                              y(u)
                                ? r
                                  ? u.call(n, s(o, t, W, r), s(o, t, F, r))
                                  : (o++,
                                    u.call(
                                      n,
                                      s(o, t, W, r),
                                      s(o, t, F, r),
                                      s(o, t, W, t.notifyWith)
                                    ))
                                : (i !== W && ((a = void 0), (l = [n])),
                                  (r || t.resolveWith)(a, l));
                          }
                        },
                        c = r
                          ? u
                          : function() {
                              try {
                                u();
                              } catch (n) {
                                w.Deferred.exceptionHook &&
                                  w.Deferred.exceptionHook(n, c.stackTrace),
                                  e + 1 >= o &&
                                    (i !== F && ((a = void 0), (l = [n])),
                                    t.rejectWith(a, l));
                              }
                            };
                      e
                        ? c()
                        : (w.Deferred.getStackHook &&
                            (c.stackTrace = w.Deferred.getStackHook()),
                          n.setTimeout(c));
                    };
                  }
                  return w
                    .Deferred(function(n) {
                      t[0][3].add(s(0, n, y(r) ? r : W, n.notifyWith)),
                        t[1][3].add(s(0, n, y(e) ? e : W)),
                        t[2][3].add(s(0, n, y(i) ? i : F));
                    })
                    .promise();
                },
                promise: function(e) {
                  return null != e ? w.extend(e, r) : r;
                }
              },
              o = {};
            return (
              w.each(t, function(e, n) {
                var s = n[2],
                  a = n[5];
                (r[n[1]] = s.add),
                  a &&
                    s.add(
                      function() {
                        i = a;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  s.add(n[3].fire),
                  (o[n[0]] = function() {
                    return (
                      o[n[0] + 'With'](this === o ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (o[n[0] + 'With'] = s.fireWith);
              }),
              r.promise(o),
              e && e.call(o, o),
              o
            );
          },
          when: function(e) {
            var t = arguments.length,
              n = t,
              i = Array(n),
              r = l.call(arguments),
              o = w.Deferred(),
              s = function(e) {
                return function(n) {
                  (i[e] = this),
                    (r[e] = arguments.length > 1 ? l.call(arguments) : n),
                    --t || o.resolveWith(i, r);
                };
              };
            if (
              t <= 1 &&
              (q(e, o.done(s(n)).resolve, o.reject, !t),
              'pending' === o.state() || y(r[n] && r[n].then))
            )
              return o.then();
            for (; n--; ) q(r[n], s(n), o.reject);
            return o.promise();
          }
        });
      var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (w.Deferred.exceptionHook = function(e, t) {
        n.console &&
          n.console.warn &&
          e &&
          B.test(e.name) &&
          n.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t);
      }),
        (w.readyException = function(e) {
          n.setTimeout(function() {
            throw e;
          });
        });
      var U = w.Deferred();
      function V() {
        s.removeEventListener('DOMContentLoaded', V),
          n.removeEventListener('load', V),
          w.ready();
      }
      (w.fn.ready = function(e) {
        return (
          U.then(e).catch(function(e) {
            w.readyException(e);
          }),
          this
        );
      }),
        w.extend({
          isReady: !1,
          readyWait: 1,
          ready: function(e) {
            (!0 === e ? --w.readyWait : w.isReady) ||
              ((w.isReady = !0),
              (!0 !== e && --w.readyWait > 0) || U.resolveWith(s, [w]));
          }
        }),
        (w.ready.then = U.then),
        'complete' === s.readyState ||
        ('loading' !== s.readyState && !s.documentElement.doScroll)
          ? n.setTimeout(w.ready)
          : (s.addEventListener('DOMContentLoaded', V),
            n.addEventListener('load', V));
      var G = function(e, t, n, i, r, o, s) {
          var a = 0,
            l = e.length,
            u = null == n;
          if ('object' === T(n))
            for (a in ((r = !0), n)) G(e, t, a, n[a], !0, o, s);
          else if (
            void 0 !== i &&
            ((r = !0),
            y(i) || (s = !0),
            u &&
              (s
                ? (t.call(e, i), (t = null))
                : ((u = t),
                  (t = function(e, t, n) {
                    return u.call(w(e), n);
                  }))),
            t)
          )
            for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
          return r ? e : u ? t.call(e) : l ? t(e[0], n) : o;
        },
        K = /^-ms-/,
        $ = /-([a-z])/g;
      function z(e, t) {
        return t.toUpperCase();
      }
      function Y(e) {
        return e.replace(K, 'ms-').replace($, z);
      }
      var Q = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function X() {
        this.expando = w.expando + X.uid++;
      }
      (X.uid = 1),
        (X.prototype = {
          cache: function(e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                Q(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                      }))),
              t
            );
          },
          set: function(e, t, n) {
            var i,
              r = this.cache(e);
            if ('string' == typeof t) r[Y(t)] = n;
            else for (i in t) r[Y(i)] = t[i];
            return r;
          },
          get: function(e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][Y(t)];
          },
          access: function(e, t, n) {
            return void 0 === t || (t && 'string' == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function(e, t) {
            var n,
              i = e[this.expando];
            if (void 0 !== i) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(Y)
                  : (t = Y(t)) in i
                    ? [t]
                    : t.match(M) || []).length;
                for (; n--; ) delete i[t[n]];
              }
              (void 0 === t || w.isEmptyObject(i)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t);
          }
        });
      var J = new X(),
        Z = new X(),
        ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        te = /[A-Z]/g;
      function ne(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((i = 'data-' + t.replace(te, '-$&').toLowerCase()),
            'string' == typeof (n = e.getAttribute(i)))
          ) {
            try {
              n = (function(e) {
                return (
                  'true' === e ||
                  ('false' !== e &&
                    ('null' === e
                      ? null
                      : e === +e + ''
                        ? +e
                        : ee.test(e)
                          ? JSON.parse(e)
                          : e))
                );
              })(n);
            } catch (e) {}
            Z.set(e, t, n);
          } else n = void 0;
        return n;
      }
      w.extend({
        hasData: function(e) {
          return Z.hasData(e) || J.hasData(e);
        },
        data: function(e, t, n) {
          return Z.access(e, t, n);
        },
        removeData: function(e, t) {
          Z.remove(e, t);
        },
        _data: function(e, t, n) {
          return J.access(e, t, n);
        },
        _removeData: function(e, t) {
          J.remove(e, t);
        }
      }),
        w.fn.extend({
          data: function(e, t) {
            var n,
              i,
              r,
              o = this[0],
              s = o && o.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((r = Z.get(o)), 1 === o.nodeType && !J.get(o, 'hasDataAttrs'))
              ) {
                for (n = s.length; n--; )
                  s[n] &&
                    0 === (i = s[n].name).indexOf('data-') &&
                    ((i = Y(i.slice(5))), ne(o, i, r[i]));
                J.set(o, 'hasDataAttrs', !0);
              }
              return r;
            }
            return 'object' == typeof e
              ? this.each(function() {
                  Z.set(this, e);
                })
              : G(
                  this,
                  function(t) {
                    var n;
                    if (o && void 0 === t)
                      return void 0 !== (n = Z.get(o, e))
                        ? n
                        : void 0 !== (n = ne(o, e))
                          ? n
                          : void 0;
                    this.each(function() {
                      Z.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function(e) {
            return this.each(function() {
              Z.remove(this, e);
            });
          }
        }),
        w.extend({
          queue: function(e, t, n) {
            var i;
            if (e)
              return (
                (t = (t || 'fx') + 'queue'),
                (i = J.get(e, t)),
                n &&
                  (!i || Array.isArray(n)
                    ? (i = J.access(e, t, w.makeArray(n)))
                    : i.push(n)),
                i || []
              );
          },
          dequeue: function(e, t) {
            t = t || 'fx';
            var n = w.queue(e, t),
              i = n.length,
              r = n.shift(),
              o = w._queueHooks(e, t);
            'inprogress' === r && ((r = n.shift()), i--),
              r &&
                ('fx' === t && n.unshift('inprogress'),
                delete o.stop,
                r.call(
                  e,
                  function() {
                    w.dequeue(e, t);
                  },
                  o
                )),
              !i && o && o.empty.fire();
          },
          _queueHooks: function(e, t) {
            var n = t + 'queueHooks';
            return (
              J.get(e, n) ||
              J.access(e, n, {
                empty: w.Callbacks('once memory').add(function() {
                  J.remove(e, [t + 'queue', n]);
                })
              })
            );
          }
        }),
        w.fn.extend({
          queue: function(e, t) {
            var n = 2;
            return (
              'string' != typeof e && ((t = e), (e = 'fx'), n--),
              arguments.length < n
                ? w.queue(this[0], e)
                : void 0 === t
                  ? this
                  : this.each(function() {
                      var n = w.queue(this, e, t);
                      w._queueHooks(this, e),
                        'fx' === e &&
                          'inprogress' !== n[0] &&
                          w.dequeue(this, e);
                    })
            );
          },
          dequeue: function(e) {
            return this.each(function() {
              w.dequeue(this, e);
            });
          },
          clearQueue: function(e) {
            return this.queue(e || 'fx', []);
          },
          promise: function(e, t) {
            var n,
              i = 1,
              r = w.Deferred(),
              o = this,
              s = this.length,
              a = function() {
                --i || r.resolveWith(o, [o]);
              };
            for (
              'string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx';
              s--;

            )
              (n = J.get(o[s], e + 'queueHooks')) &&
                n.empty &&
                (i++, n.empty.add(a));
            return a(), r.promise(t);
          }
        });
      var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        re = new RegExp('^(?:([+-])=|)(' + ie + ')([a-z%]*)$', 'i'),
        oe = ['Top', 'Right', 'Bottom', 'Left'],
        se = function(e, t) {
          return (
            'none' === (e = t || e).style.display ||
            ('' === e.style.display &&
              w.contains(e.ownerDocument, e) &&
              'none' === w.css(e, 'display'))
          );
        },
        ae = function(e, t, n, i) {
          var r,
            o,
            s = {};
          for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
          for (o in ((r = n.apply(e, i || [])), t)) e.style[o] = s[o];
          return r;
        };
      function le(e, t, n, i) {
        var r,
          o,
          s = 20,
          a = i
            ? function() {
                return i.cur();
              }
            : function() {
                return w.css(e, t, '');
              },
          l = a(),
          u = (n && n[3]) || (w.cssNumber[t] ? '' : 'px'),
          c = (w.cssNumber[t] || ('px' !== u && +l)) && re.exec(w.css(e, t));
        if (c && c[3] !== u) {
          for (l /= 2, u = u || c[3], c = +l || 1; s--; )
            w.style(e, t, c + u),
              (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
              (c /= o);
          (c *= 2), w.style(e, t, c + u), (n = n || []);
        }
        return (
          n &&
            ((c = +c || +l || 0),
            (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
            i && ((i.unit = u), (i.start = c), (i.end = r))),
          r
        );
      }
      var ue = {};
      function ce(e) {
        var t,
          n = e.ownerDocument,
          i = e.nodeName,
          r = ue[i];
        return (
          r ||
          ((t = n.body.appendChild(n.createElement(i))),
          (r = w.css(t, 'display')),
          t.parentNode.removeChild(t),
          'none' === r && (r = 'block'),
          (ue[i] = r),
          r)
        );
      }
      function fe(e, t) {
        for (var n, i, r = [], o = 0, s = e.length; o < s; o++)
          (i = e[o]).style &&
            ((n = i.style.display),
            t
              ? ('none' === n &&
                  ((r[o] = J.get(i, 'display') || null),
                  r[o] || (i.style.display = '')),
                '' === i.style.display && se(i) && (r[o] = ce(i)))
              : 'none' !== n && ((r[o] = 'none'), J.set(i, 'display', n)));
        for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
        return e;
      }
      w.fn.extend({
        show: function() {
          return fe(this, !0);
        },
        hide: function() {
          return fe(this);
        },
        toggle: function(e) {
          return 'boolean' == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function() {
                se(this) ? w(this).show() : w(this).hide();
              });
        }
      });
      var de = /^(?:checkbox|radio)$/i,
        he = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        pe = /^$|^module$|\/(?:java|ecma)script/i,
        me = {
          option: [1, "<select multiple='multiple'>", '</select>'],
          thead: [1, '<table>', '</table>'],
          col: [2, '<table><colgroup>', '</colgroup></table>'],
          tr: [2, '<table><tbody>', '</tbody></table>'],
          td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
          _default: [0, '', '']
        };
      function ge(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || '*')
              : void 0 !== e.querySelectorAll
                ? e.querySelectorAll(t || '*')
                : []),
          void 0 === t || (t && N(e, t)) ? w.merge([e], n) : n
        );
      }
      function ve(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
          J.set(e[n], 'globalEval', !t || J.get(t[n], 'globalEval'));
      }
      (me.optgroup = me.option),
        (me.tbody = me.tfoot = me.colgroup = me.caption = me.thead),
        (me.th = me.td);
      var ye,
        be,
        _e = /<|&#?\w+;/;
      function Ee(e, t, n, i, r) {
        for (
          var o,
            s,
            a,
            l,
            u,
            c,
            f = t.createDocumentFragment(),
            d = [],
            h = 0,
            p = e.length;
          h < p;
          h++
        )
          if ((o = e[h]) || 0 === o)
            if ('object' === T(o)) w.merge(d, o.nodeType ? [o] : o);
            else if (_e.test(o)) {
              for (
                s = s || f.appendChild(t.createElement('div')),
                  a = (he.exec(o) || ['', ''])[1].toLowerCase(),
                  l = me[a] || me._default,
                  s.innerHTML = l[1] + w.htmlPrefilter(o) + l[2],
                  c = l[0];
                c--;

              )
                s = s.lastChild;
              w.merge(d, s.childNodes), ((s = f.firstChild).textContent = '');
            } else d.push(t.createTextNode(o));
        for (f.textContent = '', h = 0; (o = d[h++]); )
          if (i && w.inArray(o, i) > -1) r && r.push(o);
          else if (
            ((u = w.contains(o.ownerDocument, o)),
            (s = ge(f.appendChild(o), 'script')),
            u && ve(s),
            n)
          )
            for (c = 0; (o = s[c++]); ) pe.test(o.type || '') && n.push(o);
        return f;
      }
      (ye = s.createDocumentFragment().appendChild(s.createElement('div'))),
        (be = s.createElement('input')).setAttribute('type', 'radio'),
        be.setAttribute('checked', 'checked'),
        be.setAttribute('name', 't'),
        ye.appendChild(be),
        (v.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (ye.innerHTML = '<textarea>x</textarea>'),
        (v.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue);
      var Te = s.documentElement,
        we = /^key/,
        Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        xe = /^([^.]*)(?:\.(.+)|)/;
      function Ae() {
        return !0;
      }
      function Se() {
        return !1;
      }
      function De() {
        try {
          return s.activeElement;
        } catch (e) {}
      }
      function Oe(e, t, n, i, r, o) {
        var s, a;
        if ('object' == typeof t) {
          for (a in ('string' != typeof n && ((i = i || n), (n = void 0)), t))
            Oe(e, a, n, i, t[a], o);
          return e;
        }
        if (
          (null == i && null == r
            ? ((r = n), (i = n = void 0))
            : null == r &&
              ('string' == typeof n
                ? ((r = i), (i = void 0))
                : ((r = i), (i = n), (n = void 0))),
          !1 === r)
        )
          r = Se;
        else if (!r) return e;
        return (
          1 === o &&
            ((s = r),
            ((r = function(e) {
              return w().off(e), s.apply(this, arguments);
            }).guid =
              s.guid || (s.guid = w.guid++))),
          e.each(function() {
            w.event.add(this, t, r, i, n);
          })
        );
      }
      (w.event = {
        global: {},
        add: function(e, t, n, i, r) {
          var o,
            s,
            a,
            l,
            u,
            c,
            f,
            d,
            h,
            p,
            m,
            g = J.get(e);
          if (g)
            for (
              n.handler && ((n = (o = n).handler), (r = o.selector)),
                r && w.find.matchesSelector(Te, r),
                n.guid || (n.guid = w.guid++),
                (l = g.events) || (l = g.events = {}),
                (s = g.handle) ||
                  (s = g.handle = function(t) {
                    return void 0 !== w && w.event.triggered !== t.type
                      ? w.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
                u = (t = (t || '').match(M) || ['']).length;
              u--;

            )
              (h = m = (a = xe.exec(t[u]) || [])[1]),
                (p = (a[2] || '').split('.').sort()),
                h &&
                  ((f = w.event.special[h] || {}),
                  (h = (r ? f.delegateType : f.bindType) || h),
                  (f = w.event.special[h] || {}),
                  (c = w.extend(
                    {
                      type: h,
                      origType: m,
                      data: i,
                      handler: n,
                      guid: n.guid,
                      selector: r,
                      needsContext: r && w.expr.match.needsContext.test(r),
                      namespace: p.join('.')
                    },
                    o
                  )),
                  (d = l[h]) ||
                    (((d = l[h] = []).delegateCount = 0),
                    (f.setup && !1 !== f.setup.call(e, i, p, s)) ||
                      (e.addEventListener && e.addEventListener(h, s))),
                  f.add &&
                    (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                  r ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                  (w.event.global[h] = !0));
        },
        remove: function(e, t, n, i, r) {
          var o,
            s,
            a,
            l,
            u,
            c,
            f,
            d,
            h,
            p,
            m,
            g = J.hasData(e) && J.get(e);
          if (g && (l = g.events)) {
            for (u = (t = (t || '').match(M) || ['']).length; u--; )
              if (
                ((h = m = (a = xe.exec(t[u]) || [])[1]),
                (p = (a[2] || '').split('.').sort()),
                h)
              ) {
                for (
                  f = w.event.special[h] || {},
                    d = l[(h = (i ? f.delegateType : f.bindType) || h)] || [],
                    a =
                      a[2] &&
                      new RegExp(
                        '(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)'
                      ),
                    s = o = d.length;
                  o--;

                )
                  (c = d[o]),
                    (!r && m !== c.origType) ||
                      (n && n.guid !== c.guid) ||
                      (a && !a.test(c.namespace)) ||
                      (i && i !== c.selector && ('**' !== i || !c.selector)) ||
                      (d.splice(o, 1),
                      c.selector && d.delegateCount--,
                      f.remove && f.remove.call(e, c));
                s &&
                  !d.length &&
                  ((f.teardown && !1 !== f.teardown.call(e, p, g.handle)) ||
                    w.removeEvent(e, h, g.handle),
                  delete l[h]);
              } else for (h in l) w.event.remove(e, h + t[u], n, i, !0);
            w.isEmptyObject(l) && J.remove(e, 'handle events');
          }
        },
        dispatch: function(e) {
          var t,
            n,
            i,
            r,
            o,
            s,
            a = w.event.fix(e),
            l = new Array(arguments.length),
            u = (J.get(this, 'events') || {})[a.type] || [],
            c = w.event.special[a.type] || {};
          for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
          if (
            ((a.delegateTarget = this),
            !c.preDispatch || !1 !== c.preDispatch.call(this, a))
          ) {
            for (
              s = w.event.handlers.call(this, a, u), t = 0;
              (r = s[t++]) && !a.isPropagationStopped();

            )
              for (
                a.currentTarget = r.elem, n = 0;
                (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();

              )
                (a.rnamespace && !a.rnamespace.test(o.namespace)) ||
                  ((a.handleObj = o),
                  (a.data = o.data),
                  void 0 !==
                    (i = (
                      (w.event.special[o.origType] || {}).handle || o.handler
                    ).apply(r.elem, l)) &&
                    !1 === (a.result = i) &&
                    (a.preventDefault(), a.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, a), a.result;
          }
        },
        handlers: function(e, t) {
          var n,
            i,
            r,
            o,
            s,
            a = [],
            l = t.delegateCount,
            u = e.target;
          if (l && u.nodeType && !('click' === e.type && e.button >= 1))
            for (; u !== this; u = u.parentNode || this)
              if (
                1 === u.nodeType &&
                ('click' !== e.type || !0 !== u.disabled)
              ) {
                for (o = [], s = {}, n = 0; n < l; n++)
                  void 0 === s[(r = (i = t[n]).selector + ' ')] &&
                    (s[r] = i.needsContext
                      ? w(r, this).index(u) > -1
                      : w.find(r, this, null, [u]).length),
                    s[r] && o.push(i);
                o.length && a.push({ elem: u, handlers: o });
              }
          return (
            (u = this),
            l < t.length && a.push({ elem: u, handlers: t.slice(l) }),
            a
          );
        },
        addProp: function(e, t) {
          Object.defineProperty(w.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: y(t)
              ? function() {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function() {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function(t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t
              });
            }
          });
        },
        fix: function(e) {
          return e[w.expando] ? e : new w.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          focus: {
            trigger: function() {
              if (this !== De() && this.focus) return this.focus(), !1;
            },
            delegateType: 'focusin'
          },
          blur: {
            trigger: function() {
              if (this === De() && this.blur) return this.blur(), !1;
            },
            delegateType: 'focusout'
          },
          click: {
            trigger: function() {
              if ('checkbox' === this.type && this.click && N(this, 'input'))
                return this.click(), !1;
            },
            _default: function(e) {
              return N(e.target, 'a');
            }
          },
          beforeunload: {
            postDispatch: function(e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            }
          }
        }
      }),
        (w.removeEvent = function(e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (w.Event = function(e, t) {
          if (!(this instanceof w.Event)) return new w.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Ae
                  : Se),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && w.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[w.expando] = !0);
        }),
        (w.Event.prototype = {
          constructor: w.Event,
          isDefaultPrevented: Se,
          isPropagationStopped: Se,
          isImmediatePropagationStopped: Se,
          isSimulated: !1,
          preventDefault: function() {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Ae),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function() {
            var e = this.originalEvent;
            (this.isPropagationStopped = Ae),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function() {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Ae),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          }
        }),
        w.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
              var t = e.button;
              return null == e.which && we.test(e.type)
                ? null != e.charCode
                  ? e.charCode
                  : e.keyCode
                : !e.which && void 0 !== t && Ce.test(e.type)
                  ? 1 & t
                    ? 1
                    : 2 & t
                      ? 3
                      : 4 & t
                        ? 2
                        : 0
                  : e.which;
            }
          },
          w.event.addProp
        ),
        w.each(
          {
            mouseenter: 'mouseover',
            mouseleave: 'mouseout',
            pointerenter: 'pointerover',
            pointerleave: 'pointerout'
          },
          function(e, t) {
            w.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function(e) {
                var n,
                  i = e.relatedTarget,
                  r = e.handleObj;
                return (
                  (i && (i === this || w.contains(this, i))) ||
                    ((e.type = r.origType),
                    (n = r.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              }
            };
          }
        ),
        w.fn.extend({
          on: function(e, t, n, i) {
            return Oe(this, e, t, n, i);
          },
          one: function(e, t, n, i) {
            return Oe(this, e, t, n, i, 1);
          },
          off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)
              return (
                (i = e.handleObj),
                w(e.delegateTarget).off(
                  i.namespace ? i.origType + '.' + i.namespace : i.origType,
                  i.selector,
                  i.handler
                ),
                this
              );
            if ('object' == typeof e) {
              for (r in e) this.off(r, t, e[r]);
              return this;
            }
            return (
              (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = Se),
              this.each(function() {
                w.event.remove(this, e, n, t);
              })
            );
          }
        });
      var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ie = /<script|<style|<link/i,
        ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function je(e, t) {
        return (
          (N(e, 'table') &&
            N(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
            w(e).children('tbody')[0]) ||
          e
        );
      }
      function Pe(e) {
        return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
      }
      function He(e) {
        return (
          'true/' === (e.type || '').slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute('type'),
          e
        );
      }
      function Re(e, t) {
        var n, i, r, o, s, a, l, u;
        if (1 === t.nodeType) {
          if (
            J.hasData(e) &&
            ((o = J.access(e)), (s = J.set(t, o)), (u = o.events))
          )
            for (r in (delete s.handle, (s.events = {}), u))
              for (n = 0, i = u[r].length; n < i; n++)
                w.event.add(t, r, u[r][n]);
          Z.hasData(e) &&
            ((a = Z.access(e)), (l = w.extend({}, a)), Z.set(t, l));
        }
      }
      function Me(e, t, n, i) {
        t = u.apply([], t);
        var r,
          o,
          s,
          a,
          l,
          c,
          f = 0,
          d = e.length,
          h = d - 1,
          p = t[0],
          m = y(p);
        if (m || (d > 1 && 'string' == typeof p && !v.checkClone && ke.test(p)))
          return e.each(function(r) {
            var o = e.eq(r);
            m && (t[0] = p.call(this, r, o.html())), Me(o, t, n, i);
          });
        if (
          d &&
          ((o = (r = Ee(t, e[0].ownerDocument, !1, e, i)).firstChild),
          1 === r.childNodes.length && (r = o),
          o || i)
        ) {
          for (a = (s = w.map(ge(r, 'script'), Pe)).length; f < d; f++)
            (l = r),
              f !== h &&
                ((l = w.clone(l, !0, !0)), a && w.merge(s, ge(l, 'script'))),
              n.call(e[f], l, f);
          if (a)
            for (
              c = s[s.length - 1].ownerDocument, w.map(s, He), f = 0;
              f < a;
              f++
            )
              (l = s[f]),
                pe.test(l.type || '') &&
                  !J.access(l, 'globalEval') &&
                  w.contains(c, l) &&
                  (l.src && 'module' !== (l.type || '').toLowerCase()
                    ? w._evalUrl && w._evalUrl(l.src)
                    : E(l.textContent.replace(Le, ''), c, l));
        }
        return e;
      }
      function We(e, t, n) {
        for (var i, r = t ? w.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
          n || 1 !== i.nodeType || w.cleanData(ge(i)),
            i.parentNode &&
              (n && w.contains(i.ownerDocument, i) && ve(ge(i, 'script')),
              i.parentNode.removeChild(i));
        return e;
      }
      w.extend({
        htmlPrefilter: function(e) {
          return e.replace(Ne, '<$1></$2>');
        },
        clone: function(e, t, n) {
          var i,
            r,
            o,
            s,
            a,
            l,
            u,
            c = e.cloneNode(!0),
            f = w.contains(e.ownerDocument, e);
          if (
            !(
              v.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              w.isXMLDoc(e)
            )
          )
            for (s = ge(c), i = 0, r = (o = ge(e)).length; i < r; i++)
              (a = o[i]),
                (l = s[i]),
                void 0,
                'input' === (u = l.nodeName.toLowerCase()) && de.test(a.type)
                  ? (l.checked = a.checked)
                  : ('input' !== u && 'textarea' !== u) ||
                    (l.defaultValue = a.defaultValue);
          if (t)
            if (n)
              for (
                o = o || ge(e), s = s || ge(c), i = 0, r = o.length;
                i < r;
                i++
              )
                Re(o[i], s[i]);
            else Re(e, c);
          return (
            (s = ge(c, 'script')).length > 0 && ve(s, !f && ge(e, 'script')), c
          );
        },
        cleanData: function(e) {
          for (
            var t, n, i, r = w.event.special, o = 0;
            void 0 !== (n = e[o]);
            o++
          )
            if (Q(n)) {
              if ((t = n[J.expando])) {
                if (t.events)
                  for (i in t.events)
                    r[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
                n[J.expando] = void 0;
              }
              n[Z.expando] && (n[Z.expando] = void 0);
            }
        }
      }),
        w.fn.extend({
          detach: function(e) {
            return We(this, e, !0);
          },
          remove: function(e) {
            return We(this, e);
          },
          text: function(e) {
            return G(
              this,
              function(e) {
                return void 0 === e
                  ? w.text(this)
                  : this.empty().each(function() {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function() {
            return Me(this, arguments, function(e) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                je(this, e).appendChild(e);
            });
          },
          prepend: function() {
            return Me(this, arguments, function(e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = je(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function() {
            return Me(this, arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function() {
            return Me(this, arguments, function(e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (w.cleanData(ge(e, !1)), (e.textContent = ''));
            return this;
          },
          clone: function(e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function() {
                return w.clone(this, e, t);
              })
            );
          },
          html: function(e) {
            return G(
              this,
              function(e) {
                var t = this[0] || {},
                  n = 0,
                  i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  'string' == typeof e &&
                  !Ie.test(e) &&
                  !me[(he.exec(e) || ['', ''])[1].toLowerCase()]
                ) {
                  e = w.htmlPrefilter(e);
                  try {
                    for (; n < i; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (w.cleanData(ge(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function() {
            var e = [];
            return Me(
              this,
              arguments,
              function(t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 &&
                  (w.cleanData(ge(this)), n && n.replaceChild(t, this));
              },
              e
            );
          }
        }),
        w.each(
          {
            appendTo: 'append',
            prependTo: 'prepend',
            insertBefore: 'before',
            insertAfter: 'after',
            replaceAll: 'replaceWith'
          },
          function(e, t) {
            w.fn[e] = function(e) {
              for (
                var n, i = [], r = w(e), o = r.length - 1, s = 0;
                s <= o;
                s++
              )
                (n = s === o ? this : this.clone(!0)),
                  w(r[s])[t](n),
                  c.apply(i, n.get());
              return this.pushStack(i);
            };
          }
        );
      var Fe = new RegExp('^(' + ie + ')(?!px)[a-z%]+$', 'i'),
        qe = function(e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        Be = new RegExp(oe.join('|'), 'i');
      function Ue(e, t, n) {
        var i,
          r,
          o,
          s,
          a = e.style;
        return (
          (n = n || qe(e)) &&
            ('' !== (s = n.getPropertyValue(t) || n[t]) ||
              w.contains(e.ownerDocument, e) ||
              (s = w.style(e, t)),
            !v.pixelBoxStyles() &&
              Fe.test(s) &&
              Be.test(t) &&
              ((i = a.width),
              (r = a.minWidth),
              (o = a.maxWidth),
              (a.minWidth = a.maxWidth = a.width = s),
              (s = n.width),
              (a.width = i),
              (a.minWidth = r),
              (a.maxWidth = o))),
          void 0 !== s ? s + '' : s
        );
      }
      function Ve(e, t) {
        return {
          get: function() {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          }
        };
      }
      !(function() {
        function e() {
          if (c) {
            (u.style.cssText =
              'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
              (c.style.cssText =
                'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
              Te.appendChild(u).appendChild(c);
            var e = n.getComputedStyle(c);
            (i = '1%' !== e.top),
              (l = 12 === t(e.marginLeft)),
              (c.style.right = '60%'),
              (a = 36 === t(e.right)),
              (r = 36 === t(e.width)),
              (c.style.position = 'absolute'),
              (o = 36 === c.offsetWidth || 'absolute'),
              Te.removeChild(u),
              (c = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var i,
          r,
          o,
          a,
          l,
          u = s.createElement('div'),
          c = s.createElement('div');
        c.style &&
          ((c.style.backgroundClip = 'content-box'),
          (c.cloneNode(!0).style.backgroundClip = ''),
          (v.clearCloneStyle = 'content-box' === c.style.backgroundClip),
          w.extend(v, {
            boxSizingReliable: function() {
              return e(), r;
            },
            pixelBoxStyles: function() {
              return e(), a;
            },
            pixelPosition: function() {
              return e(), i;
            },
            reliableMarginLeft: function() {
              return e(), l;
            },
            scrollboxSize: function() {
              return e(), o;
            }
          }));
      })();
      var Ge = /^(none|table(?!-c[ea]).+)/,
        Ke = /^--/,
        $e = { position: 'absolute', visibility: 'hidden', display: 'block' },
        ze = { letterSpacing: '0', fontWeight: '400' },
        Ye = ['Webkit', 'Moz', 'ms'],
        Qe = s.createElement('div').style;
      function Xe(e) {
        var t = w.cssProps[e];
        return (
          t ||
            (t = w.cssProps[e] =
              (function(e) {
                if (e in Qe) return e;
                for (
                  var t = e[0].toUpperCase() + e.slice(1), n = Ye.length;
                  n--;

                )
                  if ((e = Ye[n] + t) in Qe) return e;
              })(e) || e),
          t
        );
      }
      function Je(e, t, n) {
        var i = re.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || 'px') : t;
      }
      function Ze(e, t, n, i, r, o) {
        var s = 'width' === t ? 1 : 0,
          a = 0,
          l = 0;
        if (n === (i ? 'border' : 'content')) return 0;
        for (; s < 4; s += 2)
          'margin' === n && (l += w.css(e, n + oe[s], !0, r)),
            i
              ? ('content' === n && (l -= w.css(e, 'padding' + oe[s], !0, r)),
                'margin' !== n &&
                  (l -= w.css(e, 'border' + oe[s] + 'Width', !0, r)))
              : ((l += w.css(e, 'padding' + oe[s], !0, r)),
                'padding' !== n
                  ? (l += w.css(e, 'border' + oe[s] + 'Width', !0, r))
                  : (a += w.css(e, 'border' + oe[s] + 'Width', !0, r)));
        return (
          !i &&
            o >= 0 &&
            (l += Math.max(
              0,
              Math.ceil(
                e['offset' + t[0].toUpperCase() + t.slice(1)] - o - l - a - 0.5
              )
            )),
          l
        );
      }
      function et(e, t, n) {
        var i = qe(e),
          r = Ue(e, t, i),
          o = 'border-box' === w.css(e, 'boxSizing', !1, i),
          s = o;
        if (Fe.test(r)) {
          if (!n) return r;
          r = 'auto';
        }
        return (
          (s = s && (v.boxSizingReliable() || r === e.style[t])),
          ('auto' === r ||
            (!parseFloat(r) && 'inline' === w.css(e, 'display', !1, i))) &&
            ((r = e['offset' + t[0].toUpperCase() + t.slice(1)]), (s = !0)),
          (r = parseFloat(r) || 0) +
            Ze(e, t, n || (o ? 'border' : 'content'), s, i, r) +
            'px'
        );
      }
      function tt(e, t, n, i, r) {
        return new tt.prototype.init(e, t, n, i, r);
      }
      w.extend({
        cssHooks: {
          opacity: {
            get: function(e, t) {
              if (t) {
                var n = Ue(e, 'opacity');
                return '' === n ? '1' : n;
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var r,
              o,
              s,
              a = Y(t),
              l = Ke.test(t),
              u = e.style;
            if (
              (l || (t = Xe(a)),
              (s = w.cssHooks[t] || w.cssHooks[a]),
              void 0 === n)
            )
              return s && 'get' in s && void 0 !== (r = s.get(e, !1, i))
                ? r
                : u[t];
            'string' === (o = typeof n) &&
              (r = re.exec(n)) &&
              r[1] &&
              ((n = le(e, t, r)), (o = 'number')),
              null != n &&
                n == n &&
                ('number' === o &&
                  (n += (r && r[3]) || (w.cssNumber[a] ? '' : 'px')),
                v.clearCloneStyle ||
                  '' !== n ||
                  0 !== t.indexOf('background') ||
                  (u[t] = 'inherit'),
                (s && 'set' in s && void 0 === (n = s.set(e, n, i))) ||
                  (l ? u.setProperty(t, n) : (u[t] = n)));
          }
        },
        css: function(e, t, n, i) {
          var r,
            o,
            s,
            a = Y(t);
          return (
            Ke.test(t) || (t = Xe(a)),
            (s = w.cssHooks[t] || w.cssHooks[a]) &&
              'get' in s &&
              (r = s.get(e, !0, n)),
            void 0 === r && (r = Ue(e, t, i)),
            'normal' === r && t in ze && (r = ze[t]),
            '' === n || n
              ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
              : r
          );
        }
      }),
        w.each(['height', 'width'], function(e, t) {
          w.cssHooks[t] = {
            get: function(e, n, i) {
              if (n)
                return !Ge.test(w.css(e, 'display')) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? et(e, t, i)
                  : ae(e, $e, function() {
                      return et(e, t, i);
                    });
            },
            set: function(e, n, i) {
              var r,
                o = qe(e),
                s = 'border-box' === w.css(e, 'boxSizing', !1, o),
                a = i && Ze(e, t, i, s, o);
              return (
                s &&
                  v.scrollboxSize() === o.position &&
                  (a -= Math.ceil(
                    e['offset' + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(o[t]) -
                      Ze(e, t, 'border', !1, o) -
                      0.5
                  )),
                a &&
                  (r = re.exec(n)) &&
                  'px' !== (r[3] || 'px') &&
                  ((e.style[t] = n), (n = w.css(e, t))),
                Je(0, n, a)
              );
            }
          };
        }),
        (w.cssHooks.marginLeft = Ve(v.reliableMarginLeft, function(e, t) {
          if (t)
            return (
              (parseFloat(Ue(e, 'marginLeft')) ||
                e.getBoundingClientRect().left -
                  ae(e, { marginLeft: 0 }, function() {
                    return e.getBoundingClientRect().left;
                  })) + 'px'
            );
        })),
        w.each({ margin: '', padding: '', border: 'Width' }, function(e, t) {
          (w.cssHooks[e + t] = {
            expand: function(n) {
              for (
                var i = 0,
                  r = {},
                  o = 'string' == typeof n ? n.split(' ') : [n];
                i < 4;
                i++
              )
                r[e + oe[i] + t] = o[i] || o[i - 2] || o[0];
              return r;
            }
          }),
            'margin' !== e && (w.cssHooks[e + t].set = Je);
        }),
        w.fn.extend({
          css: function(e, t) {
            return G(
              this,
              function(e, t, n) {
                var i,
                  r,
                  o = {},
                  s = 0;
                if (Array.isArray(t)) {
                  for (i = qe(e), r = t.length; s < r; s++)
                    o[t[s]] = w.css(e, t[s], !1, i);
                  return o;
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          }
        }),
        (w.Tween = tt),
        (tt.prototype = {
          constructor: tt,
          init: function(e, t, n, i, r, o) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = r || w.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = i),
              (this.unit = o || (w.cssNumber[n] ? '' : 'px'));
          },
          cur: function() {
            var e = tt.propHooks[this.prop];
            return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
          },
          run: function(e) {
            var t,
              n = tt.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t = w.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : tt.propHooks._default.set(this),
              this
            );
          }
        }),
        (tt.prototype.init.prototype = tt.prototype),
        (tt.propHooks = {
          _default: {
            get: function(e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = w.css(e.elem, e.prop, '')) && 'auto' !== t
                  ? t
                  : 0;
            },
            set: function(e) {
              w.fx.step[e.prop]
                ? w.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (null == e.elem.style[w.cssProps[e.prop]] &&
                    !w.cssHooks[e.prop])
                  ? (e.elem[e.prop] = e.now)
                  : w.style(e.elem, e.prop, e.now + e.unit);
            }
          }
        }),
        (tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
          set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          }
        }),
        (w.easing = {
          linear: function(e) {
            return e;
          },
          swing: function(e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: 'swing'
        }),
        (w.fx = tt.prototype.init),
        (w.fx.step = {});
      var nt,
        it,
        rt = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;
      function st() {
        it &&
          (!1 === s.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(st)
            : n.setTimeout(st, w.fx.interval),
          w.fx.tick());
      }
      function at() {
        return (
          n.setTimeout(function() {
            nt = void 0;
          }),
          (nt = Date.now())
        );
      }
      function lt(e, t) {
        var n,
          i = 0,
          r = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
          r['margin' + (n = oe[i])] = r['padding' + n] = e;
        return t && (r.opacity = r.width = e), r;
      }
      function ut(e, t, n) {
        for (
          var i,
            r = (ct.tweeners[t] || []).concat(ct.tweeners['*']),
            o = 0,
            s = r.length;
          o < s;
          o++
        )
          if ((i = r[o].call(n, t, e))) return i;
      }
      function ct(e, t, n) {
        var i,
          r,
          o = 0,
          s = ct.prefilters.length,
          a = w.Deferred().always(function() {
            delete l.elem;
          }),
          l = function() {
            if (r) return !1;
            for (
              var t = nt || at(),
                n = Math.max(0, u.startTime + u.duration - t),
                i = 1 - (n / u.duration || 0),
                o = 0,
                s = u.tweens.length;
              o < s;
              o++
            )
              u.tweens[o].run(i);
            return (
              a.notifyWith(e, [u, i, n]),
              i < 1 && s
                ? n
                : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
            );
          },
          u = a.promise({
            elem: e,
            props: w.extend({}, t),
            opts: w.extend(
              !0,
              { specialEasing: {}, easing: w.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: nt || at(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
              var i = w.Tween(
                e,
                u.opts,
                t,
                n,
                u.opts.specialEasing[t] || u.opts.easing
              );
              return u.tweens.push(i), i;
            },
            stop: function(t) {
              var n = 0,
                i = t ? u.tweens.length : 0;
              if (r) return this;
              for (r = !0; n < i; n++) u.tweens[n].run(1);
              return (
                t
                  ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t]))
                  : a.rejectWith(e, [u, t]),
                this
              );
            }
          }),
          c = u.props;
        for (
          !(function(e, t) {
            var n, i, r, o, s;
            for (n in e)
              if (
                ((r = t[(i = Y(n))]),
                (o = e[n]),
                Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
                n !== i && ((e[i] = o), delete e[n]),
                (s = w.cssHooks[i]) && ('expand' in s))
              )
                for (n in ((o = s.expand(o)), delete e[i], o))
                  (n in e) || ((e[n] = o[n]), (t[n] = r));
              else t[i] = r;
          })(c, u.opts.specialEasing);
          o < s;
          o++
        )
          if ((i = ct.prefilters[o].call(u, e, c, u.opts)))
            return (
              y(i.stop) &&
                (w._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)),
              i
            );
        return (
          w.map(c, ut, u),
          y(u.opts.start) && u.opts.start.call(e, u),
          u
            .progress(u.opts.progress)
            .done(u.opts.done, u.opts.complete)
            .fail(u.opts.fail)
            .always(u.opts.always),
          w.fx.timer(w.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
          u
        );
      }
      (w.Animation = w.extend(ct, {
        tweeners: {
          '*': [
            function(e, t) {
              var n = this.createTween(e, t);
              return le(n.elem, e, re.exec(t), n), n;
            }
          ]
        },
        tweener: function(e, t) {
          y(e) ? ((t = e), (e = ['*'])) : (e = e.match(M));
          for (var n, i = 0, r = e.length; i < r; i++)
            (n = e[i]),
              (ct.tweeners[n] = ct.tweeners[n] || []),
              ct.tweeners[n].unshift(t);
        },
        prefilters: [
          function(e, t, n) {
            var i,
              r,
              o,
              s,
              a,
              l,
              u,
              c,
              f = 'width' in t || 'height' in t,
              d = this,
              h = {},
              p = e.style,
              m = e.nodeType && se(e),
              g = J.get(e, 'fxshow');
            for (i in (n.queue ||
              (null == (s = w._queueHooks(e, 'fx')).unqueued &&
                ((s.unqueued = 0),
                (a = s.empty.fire),
                (s.empty.fire = function() {
                  s.unqueued || a();
                })),
              s.unqueued++,
              d.always(function() {
                d.always(function() {
                  s.unqueued--, w.queue(e, 'fx').length || s.empty.fire();
                });
              })),
            t))
              if (((r = t[i]), rt.test(r))) {
                if (
                  (delete t[i],
                  (o = o || 'toggle' === r),
                  r === (m ? 'hide' : 'show'))
                ) {
                  if ('show' !== r || !g || void 0 === g[i]) continue;
                  m = !0;
                }
                h[i] = (g && g[i]) || w.style(e, i);
              }
            if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(h))
              for (i in (f &&
                1 === e.nodeType &&
                ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                null == (u = g && g.display) && (u = J.get(e, 'display')),
                'none' === (c = w.css(e, 'display')) &&
                  (u
                    ? (c = u)
                    : (fe([e], !0),
                      (u = e.style.display || u),
                      (c = w.css(e, 'display')),
                      fe([e]))),
                ('inline' === c || ('inline-block' === c && null != u)) &&
                  'none' === w.css(e, 'float') &&
                  (l ||
                    (d.done(function() {
                      p.display = u;
                    }),
                    null == u &&
                      ((c = p.display), (u = 'none' === c ? '' : c))),
                  (p.display = 'inline-block'))),
              n.overflow &&
                ((p.overflow = 'hidden'),
                d.always(function() {
                  (p.overflow = n.overflow[0]),
                    (p.overflowX = n.overflow[1]),
                    (p.overflowY = n.overflow[2]);
                })),
              (l = !1),
              h))
                l ||
                  (g
                    ? 'hidden' in g && (m = g.hidden)
                    : (g = J.access(e, 'fxshow', { display: u })),
                  o && (g.hidden = !m),
                  m && fe([e], !0),
                  d.done(function() {
                    for (i in (m || fe([e]), J.remove(e, 'fxshow'), h))
                      w.style(e, i, h[i]);
                  })),
                  (l = ut(m ? g[i] : 0, i, d)),
                  i in g ||
                    ((g[i] = l.start), m && ((l.end = l.start), (l.start = 0)));
          }
        ],
        prefilter: function(e, t) {
          t ? ct.prefilters.unshift(e) : ct.prefilters.push(e);
        }
      })),
        (w.speed = function(e, t, n) {
          var i =
            e && 'object' == typeof e
              ? w.extend({}, e)
              : {
                  complete: n || (!n && t) || (y(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !y(t) && t)
                };
          return (
            w.fx.off
              ? (i.duration = 0)
              : 'number' != typeof i.duration &&
                (i.duration in w.fx.speeds
                  ? (i.duration = w.fx.speeds[i.duration])
                  : (i.duration = w.fx.speeds._default)),
            (null != i.queue && !0 !== i.queue) || (i.queue = 'fx'),
            (i.old = i.complete),
            (i.complete = function() {
              y(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue);
            }),
            i
          );
        }),
        w.fn.extend({
          fadeTo: function(e, t, n, i) {
            return this.filter(se)
              .css('opacity', 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, i);
          },
          animate: function(e, t, n, i) {
            var r = w.isEmptyObject(e),
              o = w.speed(t, n, i),
              s = function() {
                var t = ct(this, w.extend({}, e), o);
                (r || J.get(this, 'finish')) && t.stop(!0);
              };
            return (
              (s.finish = s),
              r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            );
          },
          stop: function(e, t, n) {
            var i = function(e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              'string' != typeof e && ((n = t), (t = e), (e = void 0)),
              t && !1 !== e && this.queue(e || 'fx', []),
              this.each(function() {
                var t = !0,
                  r = null != e && e + 'queueHooks',
                  o = w.timers,
                  s = J.get(this);
                if (r) s[r] && s[r].stop && i(s[r]);
                else for (r in s) s[r] && s[r].stop && ot.test(r) && i(s[r]);
                for (r = o.length; r--; )
                  o[r].elem !== this ||
                    (null != e && o[r].queue !== e) ||
                    (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
                (!t && n) || w.dequeue(this, e);
              })
            );
          },
          finish: function(e) {
            return (
              !1 !== e && (e = e || 'fx'),
              this.each(function() {
                var t,
                  n = J.get(this),
                  i = n[e + 'queue'],
                  r = n[e + 'queueHooks'],
                  o = w.timers,
                  s = i ? i.length : 0;
                for (
                  n.finish = !0,
                    w.queue(this, e, []),
                    r && r.stop && r.stop.call(this, !0),
                    t = o.length;
                  t--;

                )
                  o[t].elem === this &&
                    o[t].queue === e &&
                    (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < s; t++)
                  i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish;
              })
            );
          }
        }),
        w.each(['toggle', 'show', 'hide'], function(e, t) {
          var n = w.fn[t];
          w.fn[t] = function(e, i, r) {
            return null == e || 'boolean' == typeof e
              ? n.apply(this, arguments)
              : this.animate(lt(t, !0), e, i, r);
          };
        }),
        w.each(
          {
            slideDown: lt('show'),
            slideUp: lt('hide'),
            slideToggle: lt('toggle'),
            fadeIn: { opacity: 'show' },
            fadeOut: { opacity: 'hide' },
            fadeToggle: { opacity: 'toggle' }
          },
          function(e, t) {
            w.fn[e] = function(e, n, i) {
              return this.animate(t, e, n, i);
            };
          }
        ),
        (w.timers = []),
        (w.fx.tick = function() {
          var e,
            t = 0,
            n = w.timers;
          for (nt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || w.fx.stop(), (nt = void 0);
        }),
        (w.fx.timer = function(e) {
          w.timers.push(e), w.fx.start();
        }),
        (w.fx.interval = 13),
        (w.fx.start = function() {
          it || ((it = !0), st());
        }),
        (w.fx.stop = function() {
          it = null;
        }),
        (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (w.fn.delay = function(e, t) {
          return (
            (e = (w.fx && w.fx.speeds[e]) || e),
            (t = t || 'fx'),
            this.queue(t, function(t, i) {
              var r = n.setTimeout(t, e);
              i.stop = function() {
                n.clearTimeout(r);
              };
            })
          );
        }),
        (function() {
          var e = s.createElement('input'),
            t = s
              .createElement('select')
              .appendChild(s.createElement('option'));
          (e.type = 'checkbox'),
            (v.checkOn = '' !== e.value),
            (v.optSelected = t.selected),
            ((e = s.createElement('input')).value = 't'),
            (e.type = 'radio'),
            (v.radioValue = 't' === e.value);
        })();
      var ft,
        dt = w.expr.attrHandle;
      w.fn.extend({
        attr: function(e, t) {
          return G(this, w.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
          return this.each(function() {
            w.removeAttr(this, e);
          });
        }
      }),
        w.extend({
          attr: function(e, t, n) {
            var i,
              r,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === e.getAttribute
                ? w.prop(e, t, n)
                : ((1 === o && w.isXMLDoc(e)) ||
                    (r =
                      w.attrHooks[t.toLowerCase()] ||
                      (w.expr.match.bool.test(t) ? ft : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void w.removeAttr(e, t)
                      : r && 'set' in r && void 0 !== (i = r.set(e, n, t))
                        ? i
                        : (e.setAttribute(t, n + ''), n)
                    : r && 'get' in r && null !== (i = r.get(e, t))
                      ? i
                      : null == (i = w.find.attr(e, t))
                        ? void 0
                        : i);
          },
          attrHooks: {
            type: {
              set: function(e, t) {
                if (!v.radioValue && 'radio' === t && N(e, 'input')) {
                  var n = e.value;
                  return e.setAttribute('type', t), n && (e.value = n), t;
                }
              }
            }
          },
          removeAttr: function(e, t) {
            var n,
              i = 0,
              r = t && t.match(M);
            if (r && 1 === e.nodeType)
              for (; (n = r[i++]); ) e.removeAttribute(n);
          }
        }),
        (ft = {
          set: function(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
          }
        }),
        w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
          var n = dt[t] || w.find.attr;
          dt[t] = function(e, t, i) {
            var r,
              o,
              s = t.toLowerCase();
            return (
              i ||
                ((o = dt[s]),
                (dt[s] = r),
                (r = null != n(e, t, i) ? s : null),
                (dt[s] = o)),
              r
            );
          };
        });
      var ht = /^(?:input|select|textarea|button)$/i,
        pt = /^(?:a|area)$/i;
      function mt(e) {
        return (e.match(M) || []).join(' ');
      }
      function gt(e) {
        return (e.getAttribute && e.getAttribute('class')) || '';
      }
      function vt(e) {
        return Array.isArray(e)
          ? e
          : ('string' == typeof e && e.match(M)) || [];
      }
      w.fn.extend({
        prop: function(e, t) {
          return G(this, w.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
          return this.each(function() {
            delete this[w.propFix[e] || e];
          });
        }
      }),
        w.extend({
          prop: function(e, t, n) {
            var i,
              r,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && w.isXMLDoc(e)) ||
                  ((t = w.propFix[t] || t), (r = w.propHooks[t])),
                void 0 !== n
                  ? r && 'set' in r && void 0 !== (i = r.set(e, n, t))
                    ? i
                    : (e[t] = n)
                  : r && 'get' in r && null !== (i = r.get(e, t))
                    ? i
                    : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function(e) {
                var t = w.find.attr(e, 'tabindex');
                return t
                  ? parseInt(t, 10)
                  : ht.test(e.nodeName) || (pt.test(e.nodeName) && e.href)
                    ? 0
                    : -1;
              }
            }
          },
          propFix: { for: 'htmlFor', class: 'className' }
        }),
        v.optSelected ||
          (w.propHooks.selected = {
            get: function(e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function(e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            }
          }),
        w.each(
          [
            'tabIndex',
            'readOnly',
            'maxLength',
            'cellSpacing',
            'cellPadding',
            'rowSpan',
            'colSpan',
            'useMap',
            'frameBorder',
            'contentEditable'
          ],
          function() {
            w.propFix[this.toLowerCase()] = this;
          }
        ),
        w.fn.extend({
          addClass: function(e) {
            var t,
              n,
              i,
              r,
              o,
              s,
              a,
              l = 0;
            if (y(e))
              return this.each(function(t) {
                w(this).addClass(e.call(this, t, gt(this)));
              });
            if ((t = vt(e)).length)
              for (; (n = this[l++]); )
                if (
                  ((r = gt(n)), (i = 1 === n.nodeType && ' ' + mt(r) + ' '))
                ) {
                  for (s = 0; (o = t[s++]); )
                    i.indexOf(' ' + o + ' ') < 0 && (i += o + ' ');
                  r !== (a = mt(i)) && n.setAttribute('class', a);
                }
            return this;
          },
          removeClass: function(e) {
            var t,
              n,
              i,
              r,
              o,
              s,
              a,
              l = 0;
            if (y(e))
              return this.each(function(t) {
                w(this).removeClass(e.call(this, t, gt(this)));
              });
            if (!arguments.length) return this.attr('class', '');
            if ((t = vt(e)).length)
              for (; (n = this[l++]); )
                if (
                  ((r = gt(n)), (i = 1 === n.nodeType && ' ' + mt(r) + ' '))
                ) {
                  for (s = 0; (o = t[s++]); )
                    for (; i.indexOf(' ' + o + ' ') > -1; )
                      i = i.replace(' ' + o + ' ', ' ');
                  r !== (a = mt(i)) && n.setAttribute('class', a);
                }
            return this;
          },
          toggleClass: function(e, t) {
            var n = typeof e,
              i = 'string' === n || Array.isArray(e);
            return 'boolean' == typeof t && i
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : y(e)
                ? this.each(function(n) {
                    w(this).toggleClass(e.call(this, n, gt(this), t), t);
                  })
                : this.each(function() {
                    var t, r, o, s;
                    if (i)
                      for (r = 0, o = w(this), s = vt(e); (t = s[r++]); )
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else
                      (void 0 !== e && 'boolean' !== n) ||
                        ((t = gt(this)) && J.set(this, '__className__', t),
                        this.setAttribute &&
                          this.setAttribute(
                            'class',
                            t || !1 === e
                              ? ''
                              : J.get(this, '__className__') || ''
                          ));
                  });
          },
          hasClass: function(e) {
            var t,
              n,
              i = 0;
            for (t = ' ' + e + ' '; (n = this[i++]); )
              if (1 === n.nodeType && (' ' + mt(gt(n)) + ' ').indexOf(t) > -1)
                return !0;
            return !1;
          }
        });
      var yt = /\r/g;
      w.fn.extend({
        val: function(e) {
          var t,
            n,
            i,
            r = this[0];
          return arguments.length
            ? ((i = y(e)),
              this.each(function(n) {
                var r;
                1 === this.nodeType &&
                  (null == (r = i ? e.call(this, n, w(this).val()) : e)
                    ? (r = '')
                    : 'number' == typeof r
                      ? (r += '')
                      : Array.isArray(r) &&
                        (r = w.map(r, function(e) {
                          return null == e ? '' : e + '';
                        })),
                  ((t =
                    w.valHooks[this.type] ||
                    w.valHooks[this.nodeName.toLowerCase()]) &&
                    'set' in t &&
                    void 0 !== t.set(this, r, 'value')) ||
                    (this.value = r));
              }))
            : r
              ? (t =
                  w.valHooks[r.type] || w.valHooks[r.nodeName.toLowerCase()]) &&
                'get' in t &&
                void 0 !== (n = t.get(r, 'value'))
                ? n
                : 'string' == typeof (n = r.value)
                  ? n.replace(yt, '')
                  : null == n
                    ? ''
                    : n
              : void 0;
        }
      }),
        w.extend({
          valHooks: {
            option: {
              get: function(e) {
                var t = w.find.attr(e, 'value');
                return null != t ? t : mt(w.text(e));
              }
            },
            select: {
              get: function(e) {
                var t,
                  n,
                  i,
                  r = e.options,
                  o = e.selectedIndex,
                  s = 'select-one' === e.type,
                  a = s ? null : [],
                  l = s ? o + 1 : r.length;
                for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                  if (
                    ((n = r[i]).selected || i === o) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !N(n.parentNode, 'optgroup'))
                  ) {
                    if (((t = w(n).val()), s)) return t;
                    a.push(t);
                  }
                return a;
              },
              set: function(e, t) {
                for (
                  var n, i, r = e.options, o = w.makeArray(t), s = r.length;
                  s--;

                )
                  ((i = r[s]).selected =
                    w.inArray(w.valHooks.option.get(i), o) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), o;
              }
            }
          }
        }),
        w.each(['radio', 'checkbox'], function() {
          (w.valHooks[this] = {
            set: function(e, t) {
              if (Array.isArray(t))
                return (e.checked = w.inArray(w(e).val(), t) > -1);
            }
          }),
            v.checkOn ||
              (w.valHooks[this].get = function(e) {
                return null === e.getAttribute('value') ? 'on' : e.value;
              });
        }),
        (v.focusin = 'onfocusin' in n);
      var bt = /^(?:focusinfocus|focusoutblur)$/,
        _t = function(e) {
          e.stopPropagation();
        };
      w.extend(w.event, {
        trigger: function(e, t, i, r) {
          var o,
            a,
            l,
            u,
            c,
            f,
            d,
            h,
            m = [i || s],
            g = p.call(e, 'type') ? e.type : e,
            v = p.call(e, 'namespace') ? e.namespace.split('.') : [];
          if (
            ((a = h = l = i = i || s),
            3 !== i.nodeType &&
              8 !== i.nodeType &&
              !bt.test(g + w.event.triggered) &&
              (g.indexOf('.') > -1 &&
                ((g = (v = g.split('.')).shift()), v.sort()),
              (c = g.indexOf(':') < 0 && 'on' + g),
              ((e = e[w.expando]
                ? e
                : new w.Event(g, 'object' == typeof e && e)).isTrigger = r
                ? 2
                : 3),
              (e.namespace = v.join('.')),
              (e.rnamespace = e.namespace
                ? new RegExp('(^|\\.)' + v.join('\\.(?:.*\\.|)') + '(\\.|$)')
                : null),
              (e.result = void 0),
              e.target || (e.target = i),
              (t = null == t ? [e] : w.makeArray(t, [e])),
              (d = w.event.special[g] || {}),
              r || !d.trigger || !1 !== d.trigger.apply(i, t)))
          ) {
            if (!r && !d.noBubble && !b(i)) {
              for (
                u = d.delegateType || g, bt.test(u + g) || (a = a.parentNode);
                a;
                a = a.parentNode
              )
                m.push(a), (l = a);
              l === (i.ownerDocument || s) &&
                m.push(l.defaultView || l.parentWindow || n);
            }
            for (o = 0; (a = m[o++]) && !e.isPropagationStopped(); )
              (h = a),
                (e.type = o > 1 ? u : d.bindType || g),
                (f =
                  (J.get(a, 'events') || {})[e.type] && J.get(a, 'handle')) &&
                  f.apply(a, t),
                (f = c && a[c]) &&
                  f.apply &&
                  Q(a) &&
                  ((e.result = f.apply(a, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = g),
              r ||
                e.isDefaultPrevented() ||
                (d._default && !1 !== d._default.apply(m.pop(), t)) ||
                !Q(i) ||
                (c &&
                  y(i[g]) &&
                  !b(i) &&
                  ((l = i[c]) && (i[c] = null),
                  (w.event.triggered = g),
                  e.isPropagationStopped() && h.addEventListener(g, _t),
                  i[g](),
                  e.isPropagationStopped() && h.removeEventListener(g, _t),
                  (w.event.triggered = void 0),
                  l && (i[c] = l))),
              e.result
            );
          }
        },
        simulate: function(e, t, n) {
          var i = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
          w.event.trigger(i, null, t);
        }
      }),
        w.fn.extend({
          trigger: function(e, t) {
            return this.each(function() {
              w.event.trigger(e, t, this);
            });
          },
          triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0);
          }
        }),
        v.focusin ||
          w.each({ focus: 'focusin', blur: 'focusout' }, function(e, t) {
            var n = function(e) {
              w.event.simulate(t, e.target, w.event.fix(e));
            };
            w.event.special[t] = {
              setup: function() {
                var i = this.ownerDocument || this,
                  r = J.access(i, t);
                r || i.addEventListener(e, n, !0), J.access(i, t, (r || 0) + 1);
              },
              teardown: function() {
                var i = this.ownerDocument || this,
                  r = J.access(i, t) - 1;
                r
                  ? J.access(i, t, r)
                  : (i.removeEventListener(e, n, !0), J.remove(i, t));
              }
            };
          });
      var Et = n.location,
        Tt = Date.now(),
        wt = /\?/;
      w.parseXML = function(e) {
        var t;
        if (!e || 'string' != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, 'text/xml');
        } catch (e) {
          t = void 0;
        }
        return (
          (t && !t.getElementsByTagName('parsererror').length) ||
            w.error('Invalid XML: ' + e),
          t
        );
      };
      var Ct = /\[\]$/,
        xt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        St = /^(?:input|select|textarea|keygen)/i;
      function Dt(e, t, n, i) {
        var r;
        if (Array.isArray(t))
          w.each(t, function(t, r) {
            n || Ct.test(e)
              ? i(e, r)
              : Dt(
                  e + '[' + ('object' == typeof r && null != r ? t : '') + ']',
                  r,
                  n,
                  i
                );
          });
        else if (n || 'object' !== T(t)) i(e, t);
        else for (r in t) Dt(e + '[' + r + ']', t[r], n, i);
      }
      (w.param = function(e, t) {
        var n,
          i = [],
          r = function(e, t) {
            var n = y(t) ? t() : t;
            i[i.length] =
              encodeURIComponent(e) +
              '=' +
              encodeURIComponent(null == n ? '' : n);
          };
        if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
          w.each(e, function() {
            r(this.name, this.value);
          });
        else for (n in e) Dt(n, e[n], t, r);
        return i.join('&');
      }),
        w.fn.extend({
          serialize: function() {
            return w.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var e = w.prop(this, 'elements');
              return e ? w.makeArray(e) : this;
            })
              .filter(function() {
                var e = this.type;
                return (
                  this.name &&
                  !w(this).is(':disabled') &&
                  St.test(this.nodeName) &&
                  !At.test(e) &&
                  (this.checked || !de.test(e))
                );
              })
              .map(function(e, t) {
                var n = w(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                    ? w.map(n, function(e) {
                        return { name: t.name, value: e.replace(xt, '\r\n') };
                      })
                    : { name: t.name, value: n.replace(xt, '\r\n') };
              })
              .get();
          }
        });
      var Ot = /%20/g,
        Nt = /#.*$/,
        It = /([?&])_=[^&]*/,
        kt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Lt = /^(?:GET|HEAD)$/,
        jt = /^\/\//,
        Pt = {},
        Ht = {},
        Rt = '*/'.concat('*'),
        Mt = s.createElement('a');
      function Wt(e) {
        return function(t, n) {
          'string' != typeof t && ((n = t), (t = '*'));
          var i,
            r = 0,
            o = t.toLowerCase().match(M) || [];
          if (y(n))
            for (; (i = o[r++]); )
              '+' === i[0]
                ? ((i = i.slice(1) || '*'), (e[i] = e[i] || []).unshift(n))
                : (e[i] = e[i] || []).push(n);
        };
      }
      function Ft(e, t, n, i) {
        var r = {},
          o = e === Ht;
        function s(a) {
          var l;
          return (
            (r[a] = !0),
            w.each(e[a] || [], function(e, a) {
              var u = a(t, n, i);
              return 'string' != typeof u || o || r[u]
                ? o
                  ? !(l = u)
                  : void 0
                : (t.dataTypes.unshift(u), s(u), !1);
            }),
            l
          );
        }
        return s(t.dataTypes[0]) || (!r['*'] && s('*'));
      }
      function qt(e, t) {
        var n,
          i,
          r = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && w.extend(!0, e, i), e;
      }
      (Mt.href = Et.href),
        w.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: Et.href,
            type: 'GET',
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              Et.protocol
            ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            accepts: {
              '*': Rt,
              text: 'text/plain',
              html: 'text/html',
              xml: 'application/xml, text/xml',
              json: 'application/json, text/javascript'
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: 'responseXML',
              text: 'responseText',
              json: 'responseJSON'
            },
            converters: {
              '* text': String,
              'text html': !0,
              'text json': JSON.parse,
              'text xml': w.parseXML
            },
            flatOptions: { url: !0, context: !0 }
          },
          ajaxSetup: function(e, t) {
            return t ? qt(qt(e, w.ajaxSettings), t) : qt(w.ajaxSettings, e);
          },
          ajaxPrefilter: Wt(Pt),
          ajaxTransport: Wt(Ht),
          ajax: function(e, t) {
            'object' == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var i,
              r,
              o,
              a,
              l,
              u,
              c,
              f,
              d,
              h,
              p = w.ajaxSetup({}, t),
              m = p.context || p,
              g = p.context && (m.nodeType || m.jquery) ? w(m) : w.event,
              v = w.Deferred(),
              y = w.Callbacks('once memory'),
              b = p.statusCode || {},
              _ = {},
              E = {},
              T = 'canceled',
              C = {
                readyState: 0,
                getResponseHeader: function(e) {
                  var t;
                  if (c) {
                    if (!a)
                      for (a = {}; (t = kt.exec(o)); )
                        a[t[1].toLowerCase()] = t[2];
                    t = a[e.toLowerCase()];
                  }
                  return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                  return c ? o : null;
                },
                setRequestHeader: function(e, t) {
                  return (
                    null == c &&
                      ((e = E[e.toLowerCase()] = E[e.toLowerCase()] || e),
                      (_[e] = t)),
                    this
                  );
                },
                overrideMimeType: function(e) {
                  return null == c && (p.mimeType = e), this;
                },
                statusCode: function(e) {
                  var t;
                  if (e)
                    if (c) C.always(e[C.status]);
                    else for (t in e) b[t] = [b[t], e[t]];
                  return this;
                },
                abort: function(e) {
                  var t = e || T;
                  return i && i.abort(t), x(0, t), this;
                }
              };
            if (
              (v.promise(C),
              (p.url = ((e || p.url || Et.href) + '').replace(
                jt,
                Et.protocol + '//'
              )),
              (p.type = t.method || t.type || p.method || p.type),
              (p.dataTypes = (p.dataType || '*').toLowerCase().match(M) || [
                ''
              ]),
              null == p.crossDomain)
            ) {
              u = s.createElement('a');
              try {
                (u.href = p.url),
                  (u.href = u.href),
                  (p.crossDomain =
                    Mt.protocol + '//' + Mt.host != u.protocol + '//' + u.host);
              } catch (e) {
                p.crossDomain = !0;
              }
            }
            if (
              (p.data &&
                p.processData &&
                'string' != typeof p.data &&
                (p.data = w.param(p.data, p.traditional)),
              Ft(Pt, p, t, C),
              c)
            )
              return C;
            for (d in ((f = w.event && p.global) &&
              0 == w.active++ &&
              w.event.trigger('ajaxStart'),
            (p.type = p.type.toUpperCase()),
            (p.hasContent = !Lt.test(p.type)),
            (r = p.url.replace(Nt, '')),
            p.hasContent
              ? p.data &&
                p.processData &&
                0 ===
                  (p.contentType || '').indexOf(
                    'application/x-www-form-urlencoded'
                  ) &&
                (p.data = p.data.replace(Ot, '+'))
              : ((h = p.url.slice(r.length)),
                p.data &&
                  (p.processData || 'string' == typeof p.data) &&
                  ((r += (wt.test(r) ? '&' : '?') + p.data), delete p.data),
                !1 === p.cache &&
                  ((r = r.replace(It, '$1')),
                  (h = (wt.test(r) ? '&' : '?') + '_=' + Tt++ + h)),
                (p.url = r + h)),
            p.ifModified &&
              (w.lastModified[r] &&
                C.setRequestHeader('If-Modified-Since', w.lastModified[r]),
              w.etag[r] && C.setRequestHeader('If-None-Match', w.etag[r])),
            ((p.data && p.hasContent && !1 !== p.contentType) ||
              t.contentType) &&
              C.setRequestHeader('Content-Type', p.contentType),
            C.setRequestHeader(
              'Accept',
              p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                ? p.accepts[p.dataTypes[0]] +
                  ('*' !== p.dataTypes[0] ? ', ' + Rt + '; q=0.01' : '')
                : p.accepts['*']
            ),
            p.headers))
              C.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (!1 === p.beforeSend.call(m, C, p) || c))
              return C.abort();
            if (
              ((T = 'abort'),
              y.add(p.complete),
              C.done(p.success),
              C.fail(p.error),
              (i = Ft(Ht, p, t, C)))
            ) {
              if (((C.readyState = 1), f && g.trigger('ajaxSend', [C, p]), c))
                return C;
              p.async &&
                p.timeout > 0 &&
                (l = n.setTimeout(function() {
                  C.abort('timeout');
                }, p.timeout));
              try {
                (c = !1), i.send(_, x);
              } catch (e) {
                if (c) throw e;
                x(-1, e);
              }
            } else x(-1, 'No Transport');
            function x(e, t, s, a) {
              var u,
                d,
                h,
                _,
                E,
                T = t;
              c ||
                ((c = !0),
                l && n.clearTimeout(l),
                (i = void 0),
                (o = a || ''),
                (C.readyState = e > 0 ? 4 : 0),
                (u = (e >= 200 && e < 300) || 304 === e),
                s &&
                  (_ = (function(e, t, n) {
                    for (
                      var i, r, o, s, a = e.contents, l = e.dataTypes;
                      '*' === l[0];

                    )
                      l.shift(),
                        void 0 === i &&
                          (i =
                            e.mimeType || t.getResponseHeader('Content-Type'));
                    if (i)
                      for (r in a)
                        if (a[r] && a[r].test(i)) {
                          l.unshift(r);
                          break;
                        }
                    if (l[0] in n) o = l[0];
                    else {
                      for (r in n) {
                        if (!l[0] || e.converters[r + ' ' + l[0]]) {
                          o = r;
                          break;
                        }
                        s || (s = r);
                      }
                      o = o || s;
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o];
                  })(p, C, s)),
                (_ = (function(e, t, n, i) {
                  var r,
                    o,
                    s,
                    a,
                    l,
                    u = {},
                    c = e.dataTypes.slice();
                  if (c[1])
                    for (s in e.converters)
                      u[s.toLowerCase()] = e.converters[s];
                  for (o = c.shift(); o; )
                    if (
                      (e.responseFields[o] && (n[e.responseFields[o]] = t),
                      !l &&
                        i &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (l = o),
                      (o = c.shift()))
                    )
                      if ('*' === o) o = l;
                      else if ('*' !== l && l !== o) {
                        if (!(s = u[l + ' ' + o] || u['* ' + o]))
                          for (r in u)
                            if (
                              (a = r.split(' '))[1] === o &&
                              (s = u[l + ' ' + a[0]] || u['* ' + a[0]])
                            ) {
                              !0 === s
                                ? (s = u[r])
                                : !0 !== u[r] && ((o = a[0]), c.unshift(a[1]));
                              break;
                            }
                        if (!0 !== s)
                          if (s && e.throws) t = s(t);
                          else
                            try {
                              t = s(t);
                            } catch (e) {
                              return {
                                state: 'parsererror',
                                error: s
                                  ? e
                                  : 'No conversion from ' + l + ' to ' + o
                              };
                            }
                      }
                  return { state: 'success', data: t };
                })(p, _, C, u)),
                u
                  ? (p.ifModified &&
                      ((E = C.getResponseHeader('Last-Modified')) &&
                        (w.lastModified[r] = E),
                      (E = C.getResponseHeader('etag')) && (w.etag[r] = E)),
                    204 === e || 'HEAD' === p.type
                      ? (T = 'nocontent')
                      : 304 === e
                        ? (T = 'notmodified')
                        : ((T = _.state), (d = _.data), (u = !(h = _.error))))
                  : ((h = T), (!e && T) || ((T = 'error'), e < 0 && (e = 0))),
                (C.status = e),
                (C.statusText = (t || T) + ''),
                u ? v.resolveWith(m, [d, T, C]) : v.rejectWith(m, [C, T, h]),
                C.statusCode(b),
                (b = void 0),
                f &&
                  g.trigger(u ? 'ajaxSuccess' : 'ajaxError', [C, p, u ? d : h]),
                y.fireWith(m, [C, T]),
                f &&
                  (g.trigger('ajaxComplete', [C, p]),
                  --w.active || w.event.trigger('ajaxStop')));
            }
            return C;
          },
          getJSON: function(e, t, n) {
            return w.get(e, t, n, 'json');
          },
          getScript: function(e, t) {
            return w.get(e, void 0, t, 'script');
          }
        }),
        w.each(['get', 'post'], function(e, t) {
          w[t] = function(e, n, i, r) {
            return (
              y(n) && ((r = r || i), (i = n), (n = void 0)),
              w.ajax(
                w.extend(
                  { url: e, type: t, dataType: r, data: n, success: i },
                  w.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        (w._evalUrl = function(e) {
          return w.ajax({
            url: e,
            type: 'GET',
            dataType: 'script',
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
          });
        }),
        w.fn.extend({
          wrapAll: function(e) {
            var t;
            return (
              this[0] &&
                (y(e) && (e = e.call(this[0])),
                (t = w(e, this[0].ownerDocument)
                  .eq(0)
                  .clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function() {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function(e) {
            return y(e)
              ? this.each(function(t) {
                  w(this).wrapInner(e.call(this, t));
                })
              : this.each(function() {
                  var t = w(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function(e) {
            var t = y(e);
            return this.each(function(n) {
              w(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function(e) {
            return (
              this.parent(e)
                .not('body')
                .each(function() {
                  w(this).replaceWith(this.childNodes);
                }),
              this
            );
          }
        }),
        (w.expr.pseudos.hidden = function(e) {
          return !w.expr.pseudos.visible(e);
        }),
        (w.expr.pseudos.visible = function(e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (w.ajaxSettings.xhr = function() {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var Bt = { 0: 200, 1223: 204 },
        Ut = w.ajaxSettings.xhr();
      (v.cors = !!Ut && 'withCredentials' in Ut),
        (v.ajax = Ut = !!Ut),
        w.ajaxTransport(function(e) {
          var t, i;
          if (v.cors || (Ut && !e.crossDomain))
            return {
              send: function(r, o) {
                var s,
                  a = e.xhr();
                if (
                  (a.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (s in e.xhrFields) a[s] = e.xhrFields[s];
                for (s in (e.mimeType &&
                  a.overrideMimeType &&
                  a.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  r['X-Requested-With'] ||
                  (r['X-Requested-With'] = 'XMLHttpRequest'),
                r))
                  a.setRequestHeader(s, r[s]);
                (t = function(e) {
                  return function() {
                    t &&
                      ((t = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                      'abort' === e
                        ? a.abort()
                        : 'error' === e
                          ? 'number' != typeof a.status
                            ? o(0, 'error')
                            : o(a.status, a.statusText)
                          : o(
                              Bt[a.status] || a.status,
                              a.statusText,
                              'text' !== (a.responseType || 'text') ||
                              'string' != typeof a.responseText
                                ? { binary: a.response }
                                : { text: a.responseText },
                              a.getAllResponseHeaders()
                            ));
                  };
                }),
                  (a.onload = t()),
                  (i = a.onerror = a.ontimeout = t('error')),
                  void 0 !== a.onabort
                    ? (a.onabort = i)
                    : (a.onreadystatechange = function() {
                        4 === a.readyState &&
                          n.setTimeout(function() {
                            t && i();
                          });
                      }),
                  (t = t('abort'));
                try {
                  a.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function() {
                t && t();
              }
            };
        }),
        w.ajaxPrefilter(function(e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        w.ajaxSetup({
          accepts: {
            script:
              'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            'text script': function(e) {
              return w.globalEval(e), e;
            }
          }
        }),
        w.ajaxPrefilter('script', function(e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = 'GET');
        }),
        w.ajaxTransport('script', function(e) {
          var t, n;
          if (e.crossDomain)
            return {
              send: function(i, r) {
                (t = w('<script>')
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    'load error',
                    (n = function(e) {
                      t.remove(),
                        (n = null),
                        e && r('error' === e.type ? 404 : 200, e.type);
                    })
                  )),
                  s.head.appendChild(t[0]);
              },
              abort: function() {
                n && n();
              }
            };
        });
      var Vt,
        Gt = [],
        Kt = /(=)\?(?=&|$)|\?\?/;
      w.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function() {
          var e = Gt.pop() || w.expando + '_' + Tt++;
          return (this[e] = !0), e;
        }
      }),
        w.ajaxPrefilter('json jsonp', function(e, t, i) {
          var r,
            o,
            s,
            a =
              !1 !== e.jsonp &&
              (Kt.test(e.url)
                ? 'url'
                : 'string' == typeof e.data &&
                  0 ===
                    (e.contentType || '').indexOf(
                      'application/x-www-form-urlencoded'
                    ) &&
                  Kt.test(e.data) &&
                  'data');
          if (a || 'jsonp' === e.dataTypes[0])
            return (
              (r = e.jsonpCallback = y(e.jsonpCallback)
                ? e.jsonpCallback()
                : e.jsonpCallback),
              a
                ? (e[a] = e[a].replace(Kt, '$1' + r))
                : !1 !== e.jsonp &&
                  (e.url += (wt.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
              (e.converters['script json'] = function() {
                return s || w.error(r + ' was not called'), s[0];
              }),
              (e.dataTypes[0] = 'json'),
              (o = n[r]),
              (n[r] = function() {
                s = arguments;
              }),
              i.always(function() {
                void 0 === o ? w(n).removeProp(r) : (n[r] = o),
                  e[r] && ((e.jsonpCallback = t.jsonpCallback), Gt.push(r)),
                  s && y(o) && o(s[0]),
                  (s = o = void 0);
              }),
              'script'
            );
        }),
        (v.createHTMLDocument = (((Vt = s.implementation.createHTMLDocument('')
          .body).innerHTML =
          '<form></form><form></form>'),
        2 === Vt.childNodes.length)),
        (w.parseHTML = function(e, t, n) {
          return 'string' != typeof e
            ? []
            : ('boolean' == typeof t && ((n = t), (t = !1)),
              t ||
                (v.createHTMLDocument
                  ? (((i = (t = s.implementation.createHTMLDocument(
                      ''
                    )).createElement('base')).href =
                      s.location.href),
                    t.head.appendChild(i))
                  : (t = s)),
              (r = I.exec(e)),
              (o = !n && []),
              r
                ? [t.createElement(r[1])]
                : ((r = Ee([e], t, o)),
                  o && o.length && w(o).remove(),
                  w.merge([], r.childNodes)));
          var i, r, o;
        }),
        (w.fn.load = function(e, t, n) {
          var i,
            r,
            o,
            s = this,
            a = e.indexOf(' ');
          return (
            a > -1 && ((i = mt(e.slice(a))), (e = e.slice(0, a))),
            y(t)
              ? ((n = t), (t = void 0))
              : t && 'object' == typeof t && (r = 'POST'),
            s.length > 0 &&
              w
                .ajax({ url: e, type: r || 'GET', dataType: 'html', data: t })
                .done(function(e) {
                  (o = arguments),
                    s.html(
                      i
                        ? w('<div>')
                            .append(w.parseHTML(e))
                            .find(i)
                        : e
                    );
                })
                .always(
                  n &&
                    function(e, t) {
                      s.each(function() {
                        n.apply(this, o || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        w.each(
          [
            'ajaxStart',
            'ajaxStop',
            'ajaxComplete',
            'ajaxError',
            'ajaxSuccess',
            'ajaxSend'
          ],
          function(e, t) {
            w.fn[t] = function(e) {
              return this.on(t, e);
            };
          }
        ),
        (w.expr.pseudos.animated = function(e) {
          return w.grep(w.timers, function(t) {
            return e === t.elem;
          }).length;
        }),
        (w.offset = {
          setOffset: function(e, t, n) {
            var i,
              r,
              o,
              s,
              a,
              l,
              u = w.css(e, 'position'),
              c = w(e),
              f = {};
            'static' === u && (e.style.position = 'relative'),
              (a = c.offset()),
              (o = w.css(e, 'top')),
              (l = w.css(e, 'left')),
              ('absolute' === u || 'fixed' === u) &&
              (o + l).indexOf('auto') > -1
                ? ((s = (i = c.position()).top), (r = i.left))
                : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
              y(t) && (t = t.call(e, n, w.extend({}, a))),
              null != t.top && (f.top = t.top - a.top + s),
              null != t.left && (f.left = t.left - a.left + r),
              'using' in t ? t.using.call(e, f) : c.css(f);
          }
        }),
        w.fn.extend({
          offset: function(e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function(t) {
                    w.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              i = this[0];
            return i
              ? i.getClientRects().length
                ? ((t = i.getBoundingClientRect()),
                  (n = i.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function() {
            if (this[0]) {
              var e,
                t,
                n,
                i = this[0],
                r = { top: 0, left: 0 };
              if ('fixed' === w.css(i, 'position'))
                t = i.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  'static' === w.css(e, 'position');

                )
                  e = e.parentNode;
                e &&
                  e !== i &&
                  1 === e.nodeType &&
                  (((r = w(e).offset()).top += w.css(e, 'borderTopWidth', !0)),
                  (r.left += w.css(e, 'borderLeftWidth', !0)));
              }
              return {
                top: t.top - r.top - w.css(i, 'marginTop', !0),
                left: t.left - r.left - w.css(i, 'marginLeft', !0)
              };
            }
          },
          offsetParent: function() {
            return this.map(function() {
              for (
                var e = this.offsetParent;
                e && 'static' === w.css(e, 'position');

              )
                e = e.offsetParent;
              return e || Te;
            });
          }
        }),
        w.each(
          { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
          function(e, t) {
            var n = 'pageYOffset' === t;
            w.fn[e] = function(i) {
              return G(
                this,
                function(e, i, r) {
                  var o;
                  if (
                    (b(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                    void 0 === r)
                  )
                    return o ? o[t] : e[i];
                  o
                    ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset)
                    : (e[i] = r);
                },
                e,
                i,
                arguments.length
              );
            };
          }
        ),
        w.each(['top', 'left'], function(e, t) {
          w.cssHooks[t] = Ve(v.pixelPosition, function(e, n) {
            if (n)
              return (n = Ue(e, t)), Fe.test(n) ? w(e).position()[t] + 'px' : n;
          });
        }),
        w.each({ Height: 'height', Width: 'width' }, function(e, t) {
          w.each(
            { padding: 'inner' + e, content: t, '': 'outer' + e },
            function(n, i) {
              w.fn[i] = function(r, o) {
                var s = arguments.length && (n || 'boolean' != typeof r),
                  a = n || (!0 === r || !0 === o ? 'margin' : 'border');
                return G(
                  this,
                  function(t, n, r) {
                    var o;
                    return b(t)
                      ? 0 === i.indexOf('outer')
                        ? t['inner' + e]
                        : t.document.documentElement['client' + e]
                      : 9 === t.nodeType
                        ? ((o = t.documentElement),
                          Math.max(
                            t.body['scroll' + e],
                            o['scroll' + e],
                            t.body['offset' + e],
                            o['offset' + e],
                            o['client' + e]
                          ))
                        : void 0 === r
                          ? w.css(t, n, a)
                          : w.style(t, n, r, a);
                  },
                  t,
                  s ? r : void 0,
                  s
                );
              };
            }
          );
        }),
        w.each(
          'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
            ' '
          ),
          function(e, t) {
            w.fn[t] = function(e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        ),
        w.fn.extend({
          hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          }
        }),
        w.fn.extend({
          bind: function(e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function(e, t) {
            return this.off(e, null, t);
          },
          delegate: function(e, t, n, i) {
            return this.on(t, e, n, i);
          },
          undelegate: function(e, t, n) {
            return 1 === arguments.length
              ? this.off(e, '**')
              : this.off(t, e || '**', n);
          }
        }),
        (w.proxy = function(e, t) {
          var n, i, r;
          if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
            return (
              (i = l.call(arguments, 2)),
              ((r = function() {
                return e.apply(t || this, i.concat(l.call(arguments)));
              }).guid = e.guid = e.guid || w.guid++),
              r
            );
        }),
        (w.holdReady = function(e) {
          e ? w.readyWait++ : w.ready(!0);
        }),
        (w.isArray = Array.isArray),
        (w.parseJSON = JSON.parse),
        (w.nodeName = N),
        (w.isFunction = y),
        (w.isWindow = b),
        (w.camelCase = Y),
        (w.type = T),
        (w.now = Date.now),
        (w.isNumeric = function(e) {
          var t = w.type(e);
          return (
            ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e))
          );
        }),
        void 0 ===
          (i = function() {
            return w;
          }.apply(t, [])) || (e.exports = i);
      var $t = n.jQuery,
        zt = n.$;
      return (
        (w.noConflict = function(e) {
          return (
            n.$ === w && (n.$ = zt), e && n.jQuery === w && (n.jQuery = $t), w
          );
        }),
        r || (n.jQuery = n.$ = w),
        w
      );
    });
  },
  function(e, t, n) {
    /*!
  * Bootstrap v4.1.2 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */ !(function(
      e,
      t,
      n
    ) {
      'use strict';
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function i(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
      }
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function(t) {
              o(e, t, n[t]);
            });
        }
        return e;
      }
      (t = t && t.hasOwnProperty('default') ? t.default : t),
        (n = n && n.hasOwnProperty('default') ? n.default : n);
      var a = (function(e) {
          var t = 'transitionend';
          function n(e) {
            return {}.toString
              .call(e)
              .match(/\s([a-z]+)/i)[1]
              .toLowerCase();
          }
          function r(t) {
            var n = this,
              r = !1;
            return (
              e(this).one(i.TRANSITION_END, function() {
                r = !0;
              }),
              setTimeout(function() {
                r || i.triggerTransitionEnd(n);
              }, t),
              this
            );
          }
          var i = {
            TRANSITION_END: 'bsTransitionEnd',
            getUID: function(e) {
              do {
                e += ~~(1e6 * Math.random());
              } while (document.getElementById(e));
              return e;
            },
            getSelectorFromElement: function(e) {
              var t = e.getAttribute('data-target');
              (t && '#' !== t) || (t = e.getAttribute('href') || '');
              try {
                return document.querySelector(t) ? t : null;
              } catch (e) {
                return null;
              }
            },
            getTransitionDurationFromElement: function(t) {
              if (!t) return 0;
              var n = e(t).css('transition-duration'),
                r = parseFloat(n);
              return r ? ((n = n.split(',')[0]), 1e3 * parseFloat(n)) : 0;
            },
            reflow: function(e) {
              return e.offsetHeight;
            },
            triggerTransitionEnd: function(n) {
              e(n).trigger(t);
            },
            supportsTransitionEnd: function() {
              return Boolean(t);
            },
            isElement: function(e) {
              return (e[0] || e).nodeType;
            },
            typeCheckConfig: function(e, t, r) {
              for (var o in r)
                if (Object.prototype.hasOwnProperty.call(r, o)) {
                  var s = r[o],
                    a = t[o],
                    l = a && i.isElement(a) ? 'element' : n(a);
                  if (!new RegExp(s).test(l))
                    throw new Error(
                      e.toUpperCase() +
                        ': Option "' +
                        o +
                        '" provided type "' +
                        l +
                        '" but expected type "' +
                        s +
                        '".'
                    );
                }
            }
          };
          return (
            (e.fn.emulateTransitionEnd = r),
            (e.event.special[i.TRANSITION_END] = {
              bindType: t,
              delegateType: t,
              handle: function(t) {
                if (e(t.target).is(this))
                  return t.handleObj.handler.apply(this, arguments);
              }
            }),
            i
          );
        })(t),
        l = (function(e) {
          var t = e.fn.alert,
            n = {
              CLOSE: 'close.bs.alert',
              CLOSED: 'closed.bs.alert',
              CLICK_DATA_API: 'click.bs.alert.data-api'
            },
            r = { ALERT: 'alert', FADE: 'fade', SHOW: 'show' },
            o = (function() {
              function t(e) {
                this._element = e;
              }
              var o = t.prototype;
              return (
                (o.close = function(e) {
                  var t = this._element;
                  e && (t = this._getRootElement(e));
                  var n = this._triggerCloseEvent(t);
                  n.isDefaultPrevented() || this._removeElement(t);
                }),
                (o.dispose = function() {
                  e.removeData(this._element, 'bs.alert'),
                    (this._element = null);
                }),
                (o._getRootElement = function(t) {
                  var n = a.getSelectorFromElement(t),
                    i = !1;
                  return (
                    n && (i = document.querySelector(n)),
                    i || (i = e(t).closest('.' + r.ALERT)[0]),
                    i
                  );
                }),
                (o._triggerCloseEvent = function(t) {
                  var r = e.Event(n.CLOSE);
                  return e(t).trigger(r), r;
                }),
                (o._removeElement = function(t) {
                  var n = this;
                  if ((e(t).removeClass(r.SHOW), e(t).hasClass(r.FADE))) {
                    var i = a.getTransitionDurationFromElement(t);
                    e(t)
                      .one(a.TRANSITION_END, function(e) {
                        return n._destroyElement(t, e);
                      })
                      .emulateTransitionEnd(i);
                  } else this._destroyElement(t);
                }),
                (o._destroyElement = function(t) {
                  e(t)
                    .detach()
                    .trigger(n.CLOSED)
                    .remove();
                }),
                (t._jQueryInterface = function(n) {
                  return this.each(function() {
                    var r = e(this),
                      i = r.data('bs.alert');
                    i || ((i = new t(this)), r.data('bs.alert', i)),
                      'close' === n && i[n](this);
                  });
                }),
                (t._handleDismiss = function(e) {
                  return function(t) {
                    t && t.preventDefault(), e.close(this);
                  };
                }),
                i(t, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.1.2';
                    }
                  }
                ]),
                t
              );
            })();
          return (
            e(document).on(
              n.CLICK_DATA_API,
              '[data-dismiss="alert"]',
              o._handleDismiss(new o())
            ),
            (e.fn.alert = o._jQueryInterface),
            (e.fn.alert.Constructor = o),
            (e.fn.alert.noConflict = function() {
              return (e.fn.alert = t), o._jQueryInterface;
            }),
            o
          );
        })(t),
        u = (function(e) {
          var t = 'button',
            n = e.fn[t],
            r = { ACTIVE: 'active', BUTTON: 'btn', FOCUS: 'focus' },
            o = {
              DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
              DATA_TOGGLE: '[data-toggle="buttons"]',
              INPUT: 'input',
              ACTIVE: '.active',
              BUTTON: '.btn'
            },
            s = {
              CLICK_DATA_API: 'click.bs.button.data-api',
              FOCUS_BLUR_DATA_API:
                'focus.bs.button.data-api blur.bs.button.data-api'
            },
            a = (function() {
              function t(e) {
                this._element = e;
              }
              var n = t.prototype;
              return (
                (n.toggle = function() {
                  var t = !0,
                    n = !0,
                    i = e(this._element).closest(o.DATA_TOGGLE)[0];
                  if (i) {
                    var s = this._element.querySelector(o.INPUT);
                    if (s) {
                      if ('radio' === s.type)
                        if (
                          s.checked &&
                          this._element.classList.contains(r.ACTIVE)
                        )
                          t = !1;
                        else {
                          var a = i.querySelector(o.ACTIVE);
                          a && e(a).removeClass(r.ACTIVE);
                        }
                      if (t) {
                        if (
                          s.hasAttribute('disabled') ||
                          i.hasAttribute('disabled') ||
                          s.classList.contains('disabled') ||
                          i.classList.contains('disabled')
                        )
                          return;
                        (s.checked = !this._element.classList.contains(
                          r.ACTIVE
                        )),
                          e(s).trigger('change');
                      }
                      s.focus(), (n = !1);
                    }
                  }
                  n &&
                    this._element.setAttribute(
                      'aria-pressed',
                      !this._element.classList.contains(r.ACTIVE)
                    ),
                    t && e(this._element).toggleClass(r.ACTIVE);
                }),
                (n.dispose = function() {
                  e.removeData(this._element, 'bs.button'),
                    (this._element = null);
                }),
                (t._jQueryInterface = function(n) {
                  return this.each(function() {
                    var r = e(this).data('bs.button');
                    r || ((r = new t(this)), e(this).data('bs.button', r)),
                      'toggle' === n && r[n]();
                  });
                }),
                i(t, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.1.2';
                    }
                  }
                ]),
                t
              );
            })();
          return (
            e(document)
              .on(s.CLICK_DATA_API, o.DATA_TOGGLE_CARROT, function(t) {
                t.preventDefault();
                var n = t.target;
                e(n).hasClass(r.BUTTON) || (n = e(n).closest(o.BUTTON)),
                  a._jQueryInterface.call(e(n), 'toggle');
              })
              .on(s.FOCUS_BLUR_DATA_API, o.DATA_TOGGLE_CARROT, function(t) {
                var n = e(t.target).closest(o.BUTTON)[0];
                e(n).toggleClass(r.FOCUS, /^focus(in)?$/.test(t.type));
              }),
            (e.fn[t] = a._jQueryInterface),
            (e.fn[t].Constructor = a),
            (e.fn[t].noConflict = function() {
              return (e.fn[t] = n), a._jQueryInterface;
            }),
            a
          );
        })(t),
        c = (function(e) {
          var t = 'carousel',
            n = 'bs.carousel',
            r = '.' + n,
            o = e.fn[t],
            l = {
              interval: 5e3,
              keyboard: !0,
              slide: !1,
              pause: 'hover',
              wrap: !0
            },
            u = {
              interval: '(number|boolean)',
              keyboard: 'boolean',
              slide: '(boolean|string)',
              pause: '(string|boolean)',
              wrap: 'boolean'
            },
            c = { NEXT: 'next', PREV: 'prev', LEFT: 'left', RIGHT: 'right' },
            f = {
              SLIDE: 'slide' + r,
              SLID: 'slid' + r,
              KEYDOWN: 'keydown' + r,
              MOUSEENTER: 'mouseenter' + r,
              MOUSELEAVE: 'mouseleave' + r,
              TOUCHEND: 'touchend' + r,
              LOAD_DATA_API: 'load.bs.carousel.data-api',
              CLICK_DATA_API: 'click.bs.carousel.data-api'
            },
            d = {
              CAROUSEL: 'carousel',
              ACTIVE: 'active',
              SLIDE: 'slide',
              RIGHT: 'carousel-item-right',
              LEFT: 'carousel-item-left',
              NEXT: 'carousel-item-next',
              PREV: 'carousel-item-prev',
              ITEM: 'carousel-item'
            },
            h = {
              ACTIVE: '.active',
              ACTIVE_ITEM: '.active.carousel-item',
              ITEM: '.carousel-item',
              NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
              INDICATORS: '.carousel-indicators',
              DATA_SLIDE: '[data-slide], [data-slide-to]',
              DATA_RIDE: '[data-ride="carousel"]'
            },
            p = (function() {
              function o(t, n) {
                (this._items = null),
                  (this._interval = null),
                  (this._activeElement = null),
                  (this._isPaused = !1),
                  (this._isSliding = !1),
                  (this.touchTimeout = null),
                  (this._config = this._getConfig(n)),
                  (this._element = e(t)[0]),
                  (this._indicatorsElement = this._element.querySelector(
                    h.INDICATORS
                  )),
                  this._addEventListeners();
              }
              var p = o.prototype;
              return (
                (p.next = function() {
                  this._isSliding || this._slide(c.NEXT);
                }),
                (p.nextWhenVisible = function() {
                  !document.hidden &&
                    e(this._element).is(':visible') &&
                    'hidden' !== e(this._element).css('visibility') &&
                    this.next();
                }),
                (p.prev = function() {
                  this._isSliding || this._slide(c.PREV);
                }),
                (p.pause = function(e) {
                  e || (this._isPaused = !0),
                    this._element.querySelector(h.NEXT_PREV) &&
                      (a.triggerTransitionEnd(this._element), this.cycle(!0)),
                    clearInterval(this._interval),
                    (this._interval = null);
                }),
                (p.cycle = function(e) {
                  e || (this._isPaused = !1),
                    this._interval &&
                      (clearInterval(this._interval), (this._interval = null)),
                    this._config.interval &&
                      !this._isPaused &&
                      (this._interval = setInterval(
                        (document.visibilityState
                          ? this.nextWhenVisible
                          : this.next
                        ).bind(this),
                        this._config.interval
                      ));
                }),
                (p.to = function(t) {
                  var n = this;
                  this._activeElement = this._element.querySelector(
                    h.ACTIVE_ITEM
                  );
                  var r = this._getItemIndex(this._activeElement);
                  if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding)
                      e(this._element).one(f.SLID, function() {
                        return n.to(t);
                      });
                    else {
                      if (r === t) return this.pause(), void this.cycle();
                      var i = t > r ? c.NEXT : c.PREV;
                      this._slide(i, this._items[t]);
                    }
                }),
                (p.dispose = function() {
                  e(this._element).off(r),
                    e.removeData(this._element, n),
                    (this._items = null),
                    (this._config = null),
                    (this._element = null),
                    (this._interval = null),
                    (this._isPaused = null),
                    (this._isSliding = null),
                    (this._activeElement = null),
                    (this._indicatorsElement = null);
                }),
                (p._getConfig = function(e) {
                  return (e = s({}, l, e)), a.typeCheckConfig(t, e, u), e;
                }),
                (p._addEventListeners = function() {
                  var t = this;
                  this._config.keyboard &&
                    e(this._element).on(f.KEYDOWN, function(e) {
                      return t._keydown(e);
                    }),
                    'hover' === this._config.pause &&
                      (e(this._element)
                        .on(f.MOUSEENTER, function(e) {
                          return t.pause(e);
                        })
                        .on(f.MOUSELEAVE, function(e) {
                          return t.cycle(e);
                        }),
                      'ontouchstart' in document.documentElement &&
                        e(this._element).on(f.TOUCHEND, function() {
                          t.pause(),
                            t.touchTimeout && clearTimeout(t.touchTimeout),
                            (t.touchTimeout = setTimeout(function(e) {
                              return t.cycle(e);
                            }, 500 + t._config.interval));
                        }));
                }),
                (p._keydown = function(e) {
                  if (!/input|textarea/i.test(e.target.tagName))
                    switch (e.which) {
                      case 37:
                        e.preventDefault(), this.prev();
                        break;
                      case 39:
                        e.preventDefault(), this.next();
                    }
                }),
                (p._getItemIndex = function(e) {
                  return (
                    (this._items =
                      e && e.parentNode
                        ? [].slice.call(e.parentNode.querySelectorAll(h.ITEM))
                        : []),
                    this._items.indexOf(e)
                  );
                }),
                (p._getItemByDirection = function(e, t) {
                  var n = e === c.NEXT,
                    r = e === c.PREV,
                    i = this._getItemIndex(t),
                    o = this._items.length - 1,
                    s = (r && 0 === i) || (n && i === o);
                  if (s && !this._config.wrap) return t;
                  var a = e === c.PREV ? -1 : 1,
                    l = (i + a) % this._items.length;
                  return -1 === l
                    ? this._items[this._items.length - 1]
                    : this._items[l];
                }),
                (p._triggerSlideEvent = function(t, n) {
                  var r = this._getItemIndex(t),
                    i = this._getItemIndex(
                      this._element.querySelector(h.ACTIVE_ITEM)
                    ),
                    o = e.Event(f.SLIDE, {
                      relatedTarget: t,
                      direction: n,
                      from: i,
                      to: r
                    });
                  return e(this._element).trigger(o), o;
                }),
                (p._setActiveIndicatorElement = function(t) {
                  if (this._indicatorsElement) {
                    var n = [].slice.call(
                      this._indicatorsElement.querySelectorAll(h.ACTIVE)
                    );
                    e(n).removeClass(d.ACTIVE);
                    var r = this._indicatorsElement.children[
                      this._getItemIndex(t)
                    ];
                    r && e(r).addClass(d.ACTIVE);
                  }
                }),
                (p._slide = function(t, n) {
                  var r,
                    i,
                    o,
                    s = this,
                    l = this._element.querySelector(h.ACTIVE_ITEM),
                    u = this._getItemIndex(l),
                    p = n || (l && this._getItemByDirection(t, l)),
                    m = this._getItemIndex(p),
                    g = Boolean(this._interval);
                  if (
                    (t === c.NEXT
                      ? ((r = d.LEFT), (i = d.NEXT), (o = c.LEFT))
                      : ((r = d.RIGHT), (i = d.PREV), (o = c.RIGHT)),
                    p && e(p).hasClass(d.ACTIVE))
                  )
                    this._isSliding = !1;
                  else {
                    var v = this._triggerSlideEvent(p, o);
                    if (!v.isDefaultPrevented() && l && p) {
                      (this._isSliding = !0),
                        g && this.pause(),
                        this._setActiveIndicatorElement(p);
                      var y = e.Event(f.SLID, {
                        relatedTarget: p,
                        direction: o,
                        from: u,
                        to: m
                      });
                      if (e(this._element).hasClass(d.SLIDE)) {
                        e(p).addClass(i),
                          a.reflow(p),
                          e(l).addClass(r),
                          e(p).addClass(r);
                        var b = a.getTransitionDurationFromElement(l);
                        e(l)
                          .one(a.TRANSITION_END, function() {
                            e(p)
                              .removeClass(r + ' ' + i)
                              .addClass(d.ACTIVE),
                              e(l).removeClass(d.ACTIVE + ' ' + i + ' ' + r),
                              (s._isSliding = !1),
                              setTimeout(function() {
                                return e(s._element).trigger(y);
                              }, 0);
                          })
                          .emulateTransitionEnd(b);
                      } else
                        e(l).removeClass(d.ACTIVE),
                          e(p).addClass(d.ACTIVE),
                          (this._isSliding = !1),
                          e(this._element).trigger(y);
                      g && this.cycle();
                    }
                  }
                }),
                (o._jQueryInterface = function(t) {
                  return this.each(function() {
                    var r = e(this).data(n),
                      i = s({}, l, e(this).data());
                    'object' == typeof t && (i = s({}, i, t));
                    var a = 'string' == typeof t ? t : i.slide;
                    if (
                      (r || ((r = new o(this, i)), e(this).data(n, r)),
                      'number' == typeof t)
                    )
                      r.to(t);
                    else if ('string' == typeof a) {
                      if (void 0 === r[a])
                        throw new TypeError('No method named "' + a + '"');
                      r[a]();
                    } else i.interval && (r.pause(), r.cycle());
                  });
                }),
                (o._dataApiClickHandler = function(t) {
                  var r = a.getSelectorFromElement(this);
                  if (r) {
                    var i = e(r)[0];
                    if (i && e(i).hasClass(d.CAROUSEL)) {
                      var l = s({}, e(i).data(), e(this).data()),
                        u = this.getAttribute('data-slide-to');
                      u && (l.interval = !1),
                        o._jQueryInterface.call(e(i), l),
                        u &&
                          e(i)
                            .data(n)
                            .to(u),
                        t.preventDefault();
                    }
                  }
                }),
                i(o, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.1.2';
                    }
                  },
                  {
                    key: 'Default',
                    get: function() {
                      return l;
                    }
                  }
                ]),
                o
              );
            })();
          return (
            e(document).on(
              f.CLICK_DATA_API,
              h.DATA_SLIDE,
              p._dataApiClickHandler
            ),
            e(window).on(f.LOAD_DATA_API, function() {
              for (
                var t = [].slice.call(document.querySelectorAll(h.DATA_RIDE)),
                  n = 0,
                  r = t.length;
                n < r;
                n++
              ) {
                var i = e(t[n]);
                p._jQueryInterface.call(i, i.data());
              }
            }),
            (e.fn[t] = p._jQueryInterface),
            (e.fn[t].Constructor = p),
            (e.fn[t].noConflict = function() {
              return (e.fn[t] = o), p._jQueryInterface;
            }),
            p
          );
        })(t),
        f = (function(e) {
          var t = 'collapse',
            n = 'bs.collapse',
            r = e.fn[t],
            o = { toggle: !0, parent: '' },
            l = { toggle: 'boolean', parent: '(string|element)' },
            u = {
              SHOW: 'show.bs.collapse',
              SHOWN: 'shown.bs.collapse',
              HIDE: 'hide.bs.collapse',
              HIDDEN: 'hidden.bs.collapse',
              CLICK_DATA_API: 'click.bs.collapse.data-api'
            },
            c = {
              SHOW: 'show',
              COLLAPSE: 'collapse',
              COLLAPSING: 'collapsing',
              COLLAPSED: 'collapsed'
            },
            f = { WIDTH: 'width', HEIGHT: 'height' },
            d = {
              ACTIVES: '.show, .collapsing',
              DATA_TOGGLE: '[data-toggle="collapse"]'
            },
            h = (function() {
              function r(t, n) {
                (this._isTransitioning = !1),
                  (this._element = t),
                  (this._config = this._getConfig(n)),
                  (this._triggerArray = e.makeArray(
                    document.querySelectorAll(
                      '[data-toggle="collapse"][href="#' +
                        t.id +
                        '"],[data-toggle="collapse"][data-target="#' +
                        t.id +
                        '"]'
                    )
                  ));
                for (
                  var r = [].slice.call(
                      document.querySelectorAll(d.DATA_TOGGLE)
                    ),
                    i = 0,
                    o = r.length;
                  i < o;
                  i++
                ) {
                  var s = r[i],
                    l = a.getSelectorFromElement(s),
                    u = [].slice
                      .call(document.querySelectorAll(l))
                      .filter(function(e) {
                        return e === t;
                      });
                  null !== l &&
                    u.length > 0 &&
                    ((this._selector = l), this._triggerArray.push(s));
                }
                (this._parent = this._config.parent ? this._getParent() : null),
                  this._config.parent ||
                    this._addAriaAndCollapsedClass(
                      this._element,
                      this._triggerArray
                    ),
                  this._config.toggle && this.toggle();
              }
              var h = r.prototype;
              return (
                (h.toggle = function() {
                  e(this._element).hasClass(c.SHOW) ? this.hide() : this.show();
                }),
                (h.show = function() {
                  var t,
                    i,
                    o = this;
                  if (
                    !(
                      this._isTransitioning ||
                      e(this._element).hasClass(c.SHOW) ||
                      (this._parent &&
                        0 ===
                          (t = [].slice
                            .call(this._parent.querySelectorAll(d.ACTIVES))
                            .filter(function(e) {
                              return (
                                e.getAttribute('data-parent') ===
                                o._config.parent
                              );
                            })).length &&
                        (t = null),
                      t &&
                        (i = e(t)
                          .not(this._selector)
                          .data(n)) &&
                        i._isTransitioning)
                    )
                  ) {
                    var s = e.Event(u.SHOW);
                    if (
                      (e(this._element).trigger(s), !s.isDefaultPrevented())
                    ) {
                      t &&
                        (r._jQueryInterface.call(
                          e(t).not(this._selector),
                          'hide'
                        ),
                        i || e(t).data(n, null));
                      var l = this._getDimension();
                      e(this._element)
                        .removeClass(c.COLLAPSE)
                        .addClass(c.COLLAPSING),
                        (this._element.style[l] = 0),
                        this._triggerArray.length &&
                          e(this._triggerArray)
                            .removeClass(c.COLLAPSED)
                            .attr('aria-expanded', !0),
                        this.setTransitioning(!0);
                      var f = l[0].toUpperCase() + l.slice(1),
                        h = 'scroll' + f,
                        p = a.getTransitionDurationFromElement(this._element);
                      e(this._element)
                        .one(a.TRANSITION_END, function() {
                          e(o._element)
                            .removeClass(c.COLLAPSING)
                            .addClass(c.COLLAPSE)
                            .addClass(c.SHOW),
                            (o._element.style[l] = ''),
                            o.setTransitioning(!1),
                            e(o._element).trigger(u.SHOWN);
                        })
                        .emulateTransitionEnd(p),
                        (this._element.style[l] = this._element[h] + 'px');
                    }
                  }
                }),
                (h.hide = function() {
                  var t = this;
                  if (
                    !this._isTransitioning &&
                    e(this._element).hasClass(c.SHOW)
                  ) {
                    var n = e.Event(u.HIDE);
                    if (
                      (e(this._element).trigger(n), !n.isDefaultPrevented())
                    ) {
                      var r = this._getDimension();
                      (this._element.style[r] =
                        this._element.getBoundingClientRect()[r] + 'px'),
                        a.reflow(this._element),
                        e(this._element)
                          .addClass(c.COLLAPSING)
                          .removeClass(c.COLLAPSE)
                          .removeClass(c.SHOW);
                      var i = this._triggerArray.length;
                      if (i > 0)
                        for (var o = 0; o < i; o++) {
                          var s = this._triggerArray[o],
                            l = a.getSelectorFromElement(s);
                          if (null !== l) {
                            var f = e(
                              [].slice.call(document.querySelectorAll(l))
                            );
                            f.hasClass(c.SHOW) ||
                              e(s)
                                .addClass(c.COLLAPSED)
                                .attr('aria-expanded', !1);
                          }
                        }
                      this.setTransitioning(!0), (this._element.style[r] = '');
                      var d = a.getTransitionDurationFromElement(this._element);
                      e(this._element)
                        .one(a.TRANSITION_END, function() {
                          t.setTransitioning(!1),
                            e(t._element)
                              .removeClass(c.COLLAPSING)
                              .addClass(c.COLLAPSE)
                              .trigger(u.HIDDEN);
                        })
                        .emulateTransitionEnd(d);
                    }
                  }
                }),
                (h.setTransitioning = function(e) {
                  this._isTransitioning = e;
                }),
                (h.dispose = function() {
                  e.removeData(this._element, n),
                    (this._config = null),
                    (this._parent = null),
                    (this._element = null),
                    (this._triggerArray = null),
                    (this._isTransitioning = null);
                }),
                (h._getConfig = function(e) {
                  return (
                    ((e = s({}, o, e)).toggle = Boolean(e.toggle)),
                    a.typeCheckConfig(t, e, l),
                    e
                  );
                }),
                (h._getDimension = function() {
                  var t = e(this._element).hasClass(f.WIDTH);
                  return t ? f.WIDTH : f.HEIGHT;
                }),
                (h._getParent = function() {
                  var t = this,
                    n = null;
                  a.isElement(this._config.parent)
                    ? ((n = this._config.parent),
                      void 0 !== this._config.parent.jquery &&
                        (n = this._config.parent[0]))
                    : (n = document.querySelector(this._config.parent));
                  var i =
                      '[data-toggle="collapse"][data-parent="' +
                      this._config.parent +
                      '"]',
                    o = [].slice.call(n.querySelectorAll(i));
                  return (
                    e(o).each(function(e, n) {
                      t._addAriaAndCollapsedClass(r._getTargetFromElement(n), [
                        n
                      ]);
                    }),
                    n
                  );
                }),
                (h._addAriaAndCollapsedClass = function(t, n) {
                  if (t) {
                    var r = e(t).hasClass(c.SHOW);
                    n.length &&
                      e(n)
                        .toggleClass(c.COLLAPSED, !r)
                        .attr('aria-expanded', r);
                  }
                }),
                (r._getTargetFromElement = function(e) {
                  var t = a.getSelectorFromElement(e);
                  return t ? document.querySelector(t) : null;
                }),
                (r._jQueryInterface = function(t) {
                  return this.each(function() {
                    var i = e(this),
                      a = i.data(n),
                      l = s(
                        {},
                        o,
                        i.data(),
                        'object' == typeof t && t ? t : {}
                      );
                    if (
                      (!a && l.toggle && /show|hide/.test(t) && (l.toggle = !1),
                      a || ((a = new r(this, l)), i.data(n, a)),
                      'string' == typeof t)
                    ) {
                      if (void 0 === a[t])
                        throw new TypeError('No method named "' + t + '"');
                      a[t]();
                    }
                  });
                }),
                i(r, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.1.2';
                    }
                  },
                  {
                    key: 'Default',
                    get: function() {
                      return o;
                    }
                  }
                ]),
                r
              );
            })();
          return (
            e(document).on(u.CLICK_DATA_API, d.DATA_TOGGLE, function(t) {
              'A' === t.currentTarget.tagName && t.preventDefault();
              var r = e(this),
                i = a.getSelectorFromElement(this),
                o = [].slice.call(document.querySelectorAll(i));
              e(o).each(function() {
                var t = e(this),
                  i = t.data(n),
                  o = i ? 'toggle' : r.data();
                h._jQueryInterface.call(t, o);
              });
            }),
            (e.fn[t] = h._jQueryInterface),
            (e.fn[t].Constructor = h),
            (e.fn[t].noConflict = function() {
              return (e.fn[t] = r), h._jQueryInterface;
            }),
            h
          );
        })(t),
        d = (function(e) {
          var t = 'dropdown',
            r = 'bs.dropdown',
            o = '.' + r,
            l = e.fn[t],
            u = new RegExp('38|40|27'),
            c = {
              HIDE: 'hide' + o,
              HIDDEN: 'hidden' + o,
              SHOW: 'show' + o,
              SHOWN: 'shown' + o,
              CLICK: 'click' + o,
              CLICK_DATA_API: 'click.bs.dropdown.data-api',
              KEYDOWN_DATA_API: 'keydown.bs.dropdown.data-api',
              KEYUP_DATA_API: 'keyup.bs.dropdown.data-api'
            },
            f = {
              DISABLED: 'disabled',
              SHOW: 'show',
              DROPUP: 'dropup',
              DROPRIGHT: 'dropright',
              DROPLEFT: 'dropleft',
              MENURIGHT: 'dropdown-menu-right',
              MENULEFT: 'dropdown-menu-left',
              POSITION_STATIC: 'position-static'
            },
            d = {
              DATA_TOGGLE: '[data-toggle="dropdown"]',
              FORM_CHILD: '.dropdown form',
              MENU: '.dropdown-menu',
              NAVBAR_NAV: '.navbar-nav',
              VISIBLE_ITEMS:
                '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
            },
            h = {
              TOP: 'top-start',
              TOPEND: 'top-end',
              BOTTOM: 'bottom-start',
              BOTTOMEND: 'bottom-end',
              RIGHT: 'right-start',
              RIGHTEND: 'right-end',
              LEFT: 'left-start',
              LEFTEND: 'left-end'
            },
            p = {
              offset: 0,
              flip: !0,
              boundary: 'scrollParent',
              reference: 'toggle',
              display: 'dynamic'
            },
            m = {
              offset: '(number|string|function)',
              flip: 'boolean',
              boundary: '(string|element)',
              reference: '(string|element)',
              display: 'string'
            },
            g = (function() {
              function l(e, t) {
                (this._element = e),
                  (this._popper = null),
                  (this._config = this._getConfig(t)),
                  (this._menu = this._getMenuElement()),
                  (this._inNavbar = this._detectNavbar()),
                  this._addEventListeners();
              }
              var g = l.prototype;
              return (
                (g.toggle = function() {
                  if (
                    !this._element.disabled &&
                    !e(this._element).hasClass(f.DISABLED)
                  ) {
                    var t = l._getParentFromElement(this._element),
                      r = e(this._menu).hasClass(f.SHOW);
                    if ((l._clearMenus(), !r)) {
                      var i = { relatedTarget: this._element },
                        o = e.Event(c.SHOW, i);
                      if ((e(t).trigger(o), !o.isDefaultPrevented())) {
                        if (!this._inNavbar) {
                          if (void 0 === n)
                            throw new TypeError(
                              'Bootstrap dropdown require Popper.js (https://popper.js.org)'
                            );
                          var s = this._element;
                          'parent' === this._config.reference
                            ? (s = t)
                            : a.isElement(this._config.reference) &&
                              ((s = this._config.reference),
                              void 0 !== this._config.reference.jquery &&
                                (s = this._config.reference[0])),
                            'scrollParent' !== this._config.boundary &&
                              e(t).addClass(f.POSITION_STATIC),
                            (this._popper = new n(
                              s,
                              this._menu,
                              this._getPopperConfig()
                            ));
                        }
                        'ontouchstart' in document.documentElement &&
                          0 === e(t).closest(d.NAVBAR_NAV).length &&
                          e(document.body)
                            .children()
                            .on('mouseover', null, e.noop),
                          this._element.focus(),
                          this._element.setAttribute('aria-expanded', !0),
                          e(this._menu).toggleClass(f.SHOW),
                          e(t)
                            .toggleClass(f.SHOW)
                            .trigger(e.Event(c.SHOWN, i));
                      }
                    }
                  }
                }),
                (g.dispose = function() {
                  e.removeData(this._element, r),
                    e(this._element).off(o),
                    (this._element = null),
                    (this._menu = null),
                    null !== this._popper &&
                      (this._popper.destroy(), (this._popper = null));
                }),
                (g.update = function() {
                  (this._inNavbar = this._detectNavbar()),
                    null !== this._popper && this._popper.scheduleUpdate();
                }),
                (g._addEventListeners = function() {
                  var t = this;
                  e(this._element).on(c.CLICK, function(e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle();
                  });
                }),
                (g._getConfig = function(n) {
                  return (
                    (n = s(
                      {},
                      this.constructor.Default,
                      e(this._element).data(),
                      n
                    )),
                    a.typeCheckConfig(t, n, this.constructor.DefaultType),
                    n
                  );
                }),
                (g._getMenuElement = function() {
                  if (!this._menu) {
                    var e = l._getParentFromElement(this._element);
                    e && (this._menu = e.querySelector(d.MENU));
                  }
                  return this._menu;
                }),
                (g._getPlacement = function() {
                  var t = e(this._element.parentNode),
                    n = h.BOTTOM;
                  return (
                    t.hasClass(f.DROPUP)
                      ? ((n = h.TOP),
                        e(this._menu).hasClass(f.MENURIGHT) && (n = h.TOPEND))
                      : t.hasClass(f.DROPRIGHT)
                        ? (n = h.RIGHT)
                        : t.hasClass(f.DROPLEFT)
                          ? (n = h.LEFT)
                          : e(this._menu).hasClass(f.MENURIGHT) &&
                            (n = h.BOTTOMEND),
                    n
                  );
                }),
                (g._detectNavbar = function() {
                  return e(this._element).closest('.navbar').length > 0;
                }),
                (g._getPopperConfig = function() {
                  var e = this,
                    t = {};
                  'function' == typeof this._config.offset
                    ? (t.fn = function(t) {
                        return (
                          (t.offsets = s(
                            {},
                            t.offsets,
                            e._config.offset(t.offsets) || {}
                          )),
                          t
                        );
                      })
                    : (t.offset = this._config.offset);
                  var n = {
                    placement: this._getPlacement(),
                    modifiers: {
                      offset: t,
                      flip: { enabled: this._config.flip },
                      preventOverflow: {
                        boundariesElement: this._config.boundary
                      }
                    }
                  };
                  return (
                    'static' === this._config.display &&
                      (n.modifiers.applyStyle = { enabled: !1 }),
                    n
                  );
                }),
                (l._jQueryInterface = function(t) {
                  return this.each(function() {
                    var n = e(this).data(r),
                      i = 'object' == typeof t ? t : null;
                    if (
                      (n || ((n = new l(this, i)), e(this).data(r, n)),
                      'string' == typeof t)
                    ) {
                      if (void 0 === n[t])
                        throw new TypeError('No method named "' + t + '"');
                      n[t]();
                    }
                  });
                }),
                (l._clearMenus = function(t) {
                  if (
                    !t ||
                    (3 !== t.which && ('keyup' !== t.type || 9 === t.which))
                  )
                    for (
                      var n = [].slice.call(
                          document.querySelectorAll(d.DATA_TOGGLE)
                        ),
                        i = 0,
                        o = n.length;
                      i < o;
                      i++
                    ) {
                      var s = l._getParentFromElement(n[i]),
                        a = e(n[i]).data(r),
                        u = { relatedTarget: n[i] };
                      if ((t && 'click' === t.type && (u.clickEvent = t), a)) {
                        var h = a._menu;
                        if (
                          e(s).hasClass(f.SHOW) &&
                          !(
                            t &&
                            (('click' === t.type &&
                              /input|textarea/i.test(t.target.tagName)) ||
                              ('keyup' === t.type && 9 === t.which)) &&
                            e.contains(s, t.target)
                          )
                        ) {
                          var p = e.Event(c.HIDE, u);
                          e(s).trigger(p),
                            p.isDefaultPrevented() ||
                              ('ontouchstart' in document.documentElement &&
                                e(document.body)
                                  .children()
                                  .off('mouseover', null, e.noop),
                              n[i].setAttribute('aria-expanded', 'false'),
                              e(h).removeClass(f.SHOW),
                              e(s)
                                .removeClass(f.SHOW)
                                .trigger(e.Event(c.HIDDEN, u)));
                        }
                      }
                    }
                }),
                (l._getParentFromElement = function(e) {
                  var t,
                    n = a.getSelectorFromElement(e);
                  return (
                    n && (t = document.querySelector(n)), t || e.parentNode
                  );
                }),
                (l._dataApiKeydownHandler = function(t) {
                  if (
                    (/input|textarea/i.test(t.target.tagName)
                      ? !(
                          32 === t.which ||
                          (27 !== t.which &&
                            ((40 !== t.which && 38 !== t.which) ||
                              e(t.target).closest(d.MENU).length))
                        )
                      : u.test(t.which)) &&
                    (t.preventDefault(),
                    t.stopPropagation(),
                    !this.disabled && !e(this).hasClass(f.DISABLED))
                  ) {
                    var n = l._getParentFromElement(this),
                      r = e(n).hasClass(f.SHOW);
                    if (
                      (r || (27 === t.which && 32 === t.which)) &&
                      (!r || (27 !== t.which && 32 !== t.which))
                    ) {
                      var i = [].slice.call(
                        n.querySelectorAll(d.VISIBLE_ITEMS)
                      );
                      if (0 !== i.length) {
                        var o = i.indexOf(t.target);
                        38 === t.which && o > 0 && o--,
                          40 === t.which && o < i.length - 1 && o++,
                          o < 0 && (o = 0),
                          i[o].focus();
                      }
                    } else {
                      if (27 === t.which) {
                        var s = n.querySelector(d.DATA_TOGGLE);
                        e(s).trigger('focus');
                      }
                      e(this).trigger('click');
                    }
                  }
                }),
                i(l, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.1.2';
                    }
                  },
                  {
                    key: 'Default',
                    get: function() {
                      return p;
                    }
                  },
                  {
                    key: 'DefaultType',
                    get: function() {
                      return m;
                    }
                  }
                ]),
                l
              );
            })();
          return (
            e(document)
              .on(c.KEYDOWN_DATA_API, d.DATA_TOGGLE, g._dataApiKeydownHandler)
              .on(c.KEYDOWN_DATA_API, d.MENU, g._dataApiKeydownHandler)
              .on(c.CLICK_DATA_API + ' ' + c.KEYUP_DATA_API, g._clearMenus)
              .on(c.CLICK_DATA_API, d.DATA_TOGGLE, function(t) {
                t.preventDefault(),
                  t.stopPropagation(),
                  g._jQueryInterface.call(e(this), 'toggle');
              })
              .on(c.CLICK_DATA_API, d.FORM_CHILD, function(e) {
                e.stopPropagation();
              }),
            (e.fn[t] = g._jQueryInterface),
            (e.fn[t].Constructor = g),
            (e.fn[t].noConflict = function() {
              return (e.fn[t] = l), g._jQueryInterface;
            }),
            g
          );
        })(t),
        h = (function(e) {
          var t = 'modal',
            n = '.bs.modal',
            r = e.fn.modal,
            o = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
            l = {
              backdrop: '(boolean|string)',
              keyboard: 'boolean',
              focus: 'boolean',
              show: 'boolean'
            },
            u = {
              HIDE: 'hide.bs.modal',
              HIDDEN: 'hidden.bs.modal',
              SHOW: 'show.bs.modal',
              SHOWN: 'shown.bs.modal',
              FOCUSIN: 'focusin.bs.modal',
              RESIZE: 'resize.bs.modal',
              CLICK_DISMISS: 'click.dismiss.bs.modal',
              KEYDOWN_DISMISS: 'keydown.dismiss.bs.modal',
              MOUSEUP_DISMISS: 'mouseup.dismiss.bs.modal',
              MOUSEDOWN_DISMISS: 'mousedown.dismiss.bs.modal',
              CLICK_DATA_API: 'click.bs.modal.data-api'
            },
            c = {
              SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
              BACKDROP: 'modal-backdrop',
              OPEN: 'modal-open',
              FADE: 'fade',
              SHOW: 'show'
            },
            f = {
              DIALOG: '.modal-dialog',
              DATA_TOGGLE: '[data-toggle="modal"]',
              DATA_DISMISS: '[data-dismiss="modal"]',
              FIXED_CONTENT:
                '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
              STICKY_CONTENT: '.sticky-top'
            },
            d = (function() {
              function r(e, t) {
                (this._config = this._getConfig(t)),
                  (this._element = e),
                  (this._dialog = e.querySelector(f.DIALOG)),
                  (this._backdrop = null),
                  (this._isShown = !1),
                  (this._isBodyOverflowing = !1),
                  (this._ignoreBackdropClick = !1),
                  (this._scrollbarWidth = 0);
              }
              var d = r.prototype;
              return (
                (d.toggle = function(e) {
                  return this._isShown ? this.hide() : this.show(e);
                }),
                (d.show = function(t) {
                  var n = this;
                  if (!this._isTransitioning && !this._isShown) {
                    e(this._element).hasClass(c.FADE) &&
                      (this._isTransitioning = !0);
                    var r = e.Event(u.SHOW, { relatedTarget: t });
                    e(this._element).trigger(r),
                      this._isShown ||
                        r.isDefaultPrevented() ||
                        ((this._isShown = !0),
                        this._checkScrollbar(),
                        this._setScrollbar(),
                        this._adjustDialog(),
                        e(document.body).addClass(c.OPEN),
                        this._setEscapeEvent(),
                        this._setResizeEvent(),
                        e(this._element).on(
                          u.CLICK_DISMISS,
                          f.DATA_DISMISS,
                          function(e) {
                            return n.hide(e);
                          }
                        ),
                        e(this._dialog).on(u.MOUSEDOWN_DISMISS, function() {
                          e(n._element).one(u.MOUSEUP_DISMISS, function(t) {
                            e(t.target).is(n._element) &&
                              (n._ignoreBackdropClick = !0);
                          });
                        }),
                        this._showBackdrop(function() {
                          return n._showElement(t);
                        }));
                  }
                }),
                (d.hide = function(t) {
                  var n = this;
                  if (
                    (t && t.preventDefault(),
                    !this._isTransitioning && this._isShown)
                  ) {
                    var r = e.Event(u.HIDE);
                    if (
                      (e(this._element).trigger(r),
                      this._isShown && !r.isDefaultPrevented())
                    ) {
                      this._isShown = !1;
                      var i = e(this._element).hasClass(c.FADE);
                      if (
                        (i && (this._isTransitioning = !0),
                        this._setEscapeEvent(),
                        this._setResizeEvent(),
                        e(document).off(u.FOCUSIN),
                        e(this._element).removeClass(c.SHOW),
                        e(this._element).off(u.CLICK_DISMISS),
                        e(this._dialog).off(u.MOUSEDOWN_DISMISS),
                        i)
                      ) {
                        var o = a.getTransitionDurationFromElement(
                          this._element
                        );
                        e(this._element)
                          .one(a.TRANSITION_END, function(e) {
                            return n._hideModal(e);
                          })
                          .emulateTransitionEnd(o);
                      } else this._hideModal();
                    }
                  }
                }),
                (d.dispose = function() {
                  e.removeData(this._element, 'bs.modal'),
                    e(window, document, this._element, this._backdrop).off(n),
                    (this._config = null),
                    (this._element = null),
                    (this._dialog = null),
                    (this._backdrop = null),
                    (this._isShown = null),
                    (this._isBodyOverflowing = null),
                    (this._ignoreBackdropClick = null),
                    (this._scrollbarWidth = null);
                }),
                (d.handleUpdate = function() {
                  this._adjustDialog();
                }),
                (d._getConfig = function(e) {
                  return (e = s({}, o, e)), a.typeCheckConfig(t, e, l), e;
                }),
                (d._showElement = function(t) {
                  var n = this,
                    r = e(this._element).hasClass(c.FADE);
                  (this._element.parentNode &&
                    this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                    document.body.appendChild(this._element),
                    (this._element.style.display = 'block'),
                    this._element.removeAttribute('aria-hidden'),
                    (this._element.scrollTop = 0),
                    r && a.reflow(this._element),
                    e(this._element).addClass(c.SHOW),
                    this._config.focus && this._enforceFocus();
                  var i = e.Event(u.SHOWN, { relatedTarget: t }),
                    o = function() {
                      n._config.focus && n._element.focus(),
                        (n._isTransitioning = !1),
                        e(n._element).trigger(i);
                    };
                  if (r) {
                    var s = a.getTransitionDurationFromElement(this._element);
                    e(this._dialog)
                      .one(a.TRANSITION_END, o)
                      .emulateTransitionEnd(s);
                  } else o();
                }),
                (d._enforceFocus = function() {
                  var t = this;
                  e(document)
                    .off(u.FOCUSIN)
                    .on(u.FOCUSIN, function(n) {
                      document !== n.target &&
                        t._element !== n.target &&
                        0 === e(t._element).has(n.target).length &&
                        t._element.focus();
                    });
                }),
                (d._setEscapeEvent = function() {
                  var t = this;
                  this._isShown && this._config.keyboard
                    ? e(this._element).on(u.KEYDOWN_DISMISS, function(e) {
                        27 === e.which && (e.preventDefault(), t.hide());
                      })
                    : this._isShown || e(this._element).off(u.KEYDOWN_DISMISS);
                }),
                (d._setResizeEvent = function() {
                  var t = this;
                  this._isShown
                    ? e(window).on(u.RESIZE, function(e) {
                        return t.handleUpdate(e);
                      })
                    : e(window).off(u.RESIZE);
                }),
                (d._hideModal = function() {
                  var t = this;
                  (this._element.style.display = 'none'),
                    this._element.setAttribute('aria-hidden', !0),
                    (this._isTransitioning = !1),
                    this._showBackdrop(function() {
                      e(document.body).removeClass(c.OPEN),
                        t._resetAdjustments(),
                        t._resetScrollbar(),
                        e(t._element).trigger(u.HIDDEN);
                    });
                }),
                (d._removeBackdrop = function() {
                  this._backdrop &&
                    (e(this._backdrop).remove(), (this._backdrop = null));
                }),
                (d._showBackdrop = function(t) {
                  var n = this,
                    r = e(this._element).hasClass(c.FADE) ? c.FADE : '';
                  if (this._isShown && this._config.backdrop) {
                    if (
                      ((this._backdrop = document.createElement('div')),
                      (this._backdrop.className = c.BACKDROP),
                      r && this._backdrop.classList.add(r),
                      e(this._backdrop).appendTo(document.body),
                      e(this._element).on(u.CLICK_DISMISS, function(e) {
                        n._ignoreBackdropClick
                          ? (n._ignoreBackdropClick = !1)
                          : e.target === e.currentTarget &&
                            ('static' === n._config.backdrop
                              ? n._element.focus()
                              : n.hide());
                      }),
                      r && a.reflow(this._backdrop),
                      e(this._backdrop).addClass(c.SHOW),
                      !t)
                    )
                      return;
                    if (!r) return void t();
                    var i = a.getTransitionDurationFromElement(this._backdrop);
                    e(this._backdrop)
                      .one(a.TRANSITION_END, t)
                      .emulateTransitionEnd(i);
                  } else if (!this._isShown && this._backdrop) {
                    e(this._backdrop).removeClass(c.SHOW);
                    var o = function() {
                      n._removeBackdrop(), t && t();
                    };
                    if (e(this._element).hasClass(c.FADE)) {
                      var s = a.getTransitionDurationFromElement(
                        this._backdrop
                      );
                      e(this._backdrop)
                        .one(a.TRANSITION_END, o)
                        .emulateTransitionEnd(s);
                    } else o();
                  } else t && t();
                }),
                (d._adjustDialog = function() {
                  var e =
                    this._element.scrollHeight >
                    document.documentElement.clientHeight;
                  !this._isBodyOverflowing &&
                    e &&
                    (this._element.style.paddingLeft =
                      this._scrollbarWidth + 'px'),
                    this._isBodyOverflowing &&
                      !e &&
                      (this._element.style.paddingRight =
                        this._scrollbarWidth + 'px');
                }),
                (d._resetAdjustments = function() {
                  (this._element.style.paddingLeft = ''),
                    (this._element.style.paddingRight = '');
                }),
                (d._checkScrollbar = function() {
                  var e = document.body.getBoundingClientRect();
                  (this._isBodyOverflowing =
                    e.left + e.right < window.innerWidth),
                    (this._scrollbarWidth = this._getScrollbarWidth());
                }),
                (d._setScrollbar = function() {
                  var t = this;
                  if (this._isBodyOverflowing) {
                    var n = [].slice.call(
                        document.querySelectorAll(f.FIXED_CONTENT)
                      ),
                      r = [].slice.call(
                        document.querySelectorAll(f.STICKY_CONTENT)
                      );
                    e(n).each(function(n, r) {
                      var i = r.style.paddingRight,
                        o = e(r).css('padding-right');
                      e(r)
                        .data('padding-right', i)
                        .css(
                          'padding-right',
                          parseFloat(o) + t._scrollbarWidth + 'px'
                        );
                    }),
                      e(r).each(function(n, r) {
                        var i = r.style.marginRight,
                          o = e(r).css('margin-right');
                        e(r)
                          .data('margin-right', i)
                          .css(
                            'margin-right',
                            parseFloat(o) - t._scrollbarWidth + 'px'
                          );
                      });
                    var i = document.body.style.paddingRight,
                      o = e(document.body).css('padding-right');
                    e(document.body)
                      .data('padding-right', i)
                      .css(
                        'padding-right',
                        parseFloat(o) + this._scrollbarWidth + 'px'
                      );
                  }
                }),
                (d._resetScrollbar = function() {
                  var t = [].slice.call(
                    document.querySelectorAll(f.FIXED_CONTENT)
                  );
                  e(t).each(function(t, n) {
                    var r = e(n).data('padding-right');
                    e(n).removeData('padding-right'),
                      (n.style.paddingRight = r || '');
                  });
                  var n = [].slice.call(
                    document.querySelectorAll('' + f.STICKY_CONTENT)
                  );
                  e(n).each(function(t, n) {
                    var r = e(n).data('margin-right');
                    void 0 !== r &&
                      e(n)
                        .css('margin-right', r)
                        .removeData('margin-right');
                  });
                  var r = e(document.body).data('padding-right');
                  e(document.body).removeData('padding-right'),
                    (document.body.style.paddingRight = r || '');
                }),
                (d._getScrollbarWidth = function() {
                  var e = document.createElement('div');
                  (e.className = c.SCROLLBAR_MEASURER),
                    document.body.appendChild(e);
                  var t = e.getBoundingClientRect().width - e.clientWidth;
                  return document.body.removeChild(e), t;
                }),
                (r._jQueryInterface = function(t, n) {
                  return this.each(function() {
                    var i = e(this).data('bs.modal'),
                      a = s(
                        {},
                        o,
                        e(this).data(),
                        'object' == typeof t && t ? t : {}
                      );
                    if (
                      (i || ((i = new r(this, a)), e(this).data('bs.modal', i)),
                      'string' == typeof t)
                    ) {
                      if (void 0 === i[t])
                        throw new TypeError('No method named "' + t + '"');
                      i[t](n);
                    } else a.show && i.show(n);
                  });
                }),
                i(r, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.1.2';
                    }
                  },
                  {
                    key: 'Default',
                    get: function() {
                      return o;
                    }
                  }
                ]),
                r
              );
            })();
          return (
            e(document).on(u.CLICK_DATA_API, f.DATA_TOGGLE, function(t) {
              var n,
                r = this,
                i = a.getSelectorFromElement(this);
              i && (n = document.querySelector(i));
              var o = e(n).data('bs.modal')
                ? 'toggle'
                : s({}, e(n).data(), e(this).data());
              ('A' !== this.tagName && 'AREA' !== this.tagName) ||
                t.preventDefault();
              var l = e(n).one(u.SHOW, function(t) {
                t.isDefaultPrevented() ||
                  l.one(u.HIDDEN, function() {
                    e(r).is(':visible') && r.focus();
                  });
              });
              d._jQueryInterface.call(e(n), o, this);
            }),
            (e.fn.modal = d._jQueryInterface),
            (e.fn.modal.Constructor = d),
            (e.fn.modal.noConflict = function() {
              return (e.fn.modal = r), d._jQueryInterface;
            }),
            d
          );
        })(t),
        p = (function(e) {
          var t = 'tooltip',
            r = '.bs.tooltip',
            o = e.fn[t],
            l = new RegExp('(^|\\s)bs-tooltip\\S+', 'g'),
            u = {
              animation: 'boolean',
              template: 'string',
              title: '(string|element|function)',
              trigger: 'string',
              delay: '(number|object)',
              html: 'boolean',
              selector: '(string|boolean)',
              placement: '(string|function)',
              offset: '(number|string)',
              container: '(string|element|boolean)',
              fallbackPlacement: '(string|array)',
              boundary: '(string|element)'
            },
            c = {
              AUTO: 'auto',
              TOP: 'top',
              RIGHT: 'right',
              BOTTOM: 'bottom',
              LEFT: 'left'
            },
            f = {
              animation: !0,
              template:
                '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
              trigger: 'hover focus',
              title: '',
              delay: 0,
              html: !1,
              selector: !1,
              placement: 'top',
              offset: 0,
              container: !1,
              fallbackPlacement: 'flip',
              boundary: 'scrollParent'
            },
            d = { SHOW: 'show', OUT: 'out' },
            h = {
              HIDE: 'hide' + r,
              HIDDEN: 'hidden' + r,
              SHOW: 'show' + r,
              SHOWN: 'shown' + r,
              INSERTED: 'inserted' + r,
              CLICK: 'click' + r,
              FOCUSIN: 'focusin' + r,
              FOCUSOUT: 'focusout' + r,
              MOUSEENTER: 'mouseenter' + r,
              MOUSELEAVE: 'mouseleave' + r
            },
            p = { FADE: 'fade', SHOW: 'show' },
            m = {
              TOOLTIP: '.tooltip',
              TOOLTIP_INNER: '.tooltip-inner',
              ARROW: '.arrow'
            },
            g = {
              HOVER: 'hover',
              FOCUS: 'focus',
              CLICK: 'click',
              MANUAL: 'manual'
            },
            v = (function() {
              function o(e, t) {
                if (void 0 === n)
                  throw new TypeError(
                    'Bootstrap tooltips require Popper.js (https://popper.js.org)'
                  );
                (this._isEnabled = !0),
                  (this._timeout = 0),
                  (this._hoverState = ''),
                  (this._activeTrigger = {}),
                  (this._popper = null),
                  (this.element = e),
                  (this.config = this._getConfig(t)),
                  (this.tip = null),
                  this._setListeners();
              }
              var v = o.prototype;
              return (
                (v.enable = function() {
                  this._isEnabled = !0;
                }),
                (v.disable = function() {
                  this._isEnabled = !1;
                }),
                (v.toggleEnabled = function() {
                  this._isEnabled = !this._isEnabled;
                }),
                (v.toggle = function(t) {
                  if (this._isEnabled)
                    if (t) {
                      var n = this.constructor.DATA_KEY,
                        r = e(t.currentTarget).data(n);
                      r ||
                        ((r = new this.constructor(
                          t.currentTarget,
                          this._getDelegateConfig()
                        )),
                        e(t.currentTarget).data(n, r)),
                        (r._activeTrigger.click = !r._activeTrigger.click),
                        r._isWithActiveTrigger()
                          ? r._enter(null, r)
                          : r._leave(null, r);
                    } else {
                      if (e(this.getTipElement()).hasClass(p.SHOW))
                        return void this._leave(null, this);
                      this._enter(null, this);
                    }
                }),
                (v.dispose = function() {
                  clearTimeout(this._timeout),
                    e.removeData(this.element, this.constructor.DATA_KEY),
                    e(this.element).off(this.constructor.EVENT_KEY),
                    e(this.element)
                      .closest('.modal')
                      .off('hide.bs.modal'),
                    this.tip && e(this.tip).remove(),
                    (this._isEnabled = null),
                    (this._timeout = null),
                    (this._hoverState = null),
                    (this._activeTrigger = null),
                    null !== this._popper && this._popper.destroy(),
                    (this._popper = null),
                    (this.element = null),
                    (this.config = null),
                    (this.tip = null);
                }),
                (v.show = function() {
                  var t = this;
                  if ('none' === e(this.element).css('display'))
                    throw new Error('Please use show on visible elements');
                  var r = e.Event(this.constructor.Event.SHOW);
                  if (this.isWithContent() && this._isEnabled) {
                    e(this.element).trigger(r);
                    var i = e.contains(
                      this.element.ownerDocument.documentElement,
                      this.element
                    );
                    if (r.isDefaultPrevented() || !i) return;
                    var o = this.getTipElement(),
                      s = a.getUID(this.constructor.NAME);
                    o.setAttribute('id', s),
                      this.element.setAttribute('aria-describedby', s),
                      this.setContent(),
                      this.config.animation && e(o).addClass(p.FADE);
                    var l =
                        'function' == typeof this.config.placement
                          ? this.config.placement.call(this, o, this.element)
                          : this.config.placement,
                      u = this._getAttachment(l);
                    this.addAttachmentClass(u);
                    var c =
                      !1 === this.config.container
                        ? document.body
                        : e(document).find(this.config.container);
                    e(o).data(this.constructor.DATA_KEY, this),
                      e.contains(
                        this.element.ownerDocument.documentElement,
                        this.tip
                      ) || e(o).appendTo(c),
                      e(this.element).trigger(this.constructor.Event.INSERTED),
                      (this._popper = new n(this.element, o, {
                        placement: u,
                        modifiers: {
                          offset: { offset: this.config.offset },
                          flip: { behavior: this.config.fallbackPlacement },
                          arrow: { element: m.ARROW },
                          preventOverflow: {
                            boundariesElement: this.config.boundary
                          }
                        },
                        onCreate: function(e) {
                          e.originalPlacement !== e.placement &&
                            t._handlePopperPlacementChange(e);
                        },
                        onUpdate: function(e) {
                          t._handlePopperPlacementChange(e);
                        }
                      })),
                      e(o).addClass(p.SHOW),
                      'ontouchstart' in document.documentElement &&
                        e(document.body)
                          .children()
                          .on('mouseover', null, e.noop);
                    var f = function() {
                      t.config.animation && t._fixTransition();
                      var n = t._hoverState;
                      (t._hoverState = null),
                        e(t.element).trigger(t.constructor.Event.SHOWN),
                        n === d.OUT && t._leave(null, t);
                    };
                    if (e(this.tip).hasClass(p.FADE)) {
                      var h = a.getTransitionDurationFromElement(this.tip);
                      e(this.tip)
                        .one(a.TRANSITION_END, f)
                        .emulateTransitionEnd(h);
                    } else f();
                  }
                }),
                (v.hide = function(t) {
                  var n = this,
                    r = this.getTipElement(),
                    i = e.Event(this.constructor.Event.HIDE),
                    o = function() {
                      n._hoverState !== d.SHOW &&
                        r.parentNode &&
                        r.parentNode.removeChild(r),
                        n._cleanTipClass(),
                        n.element.removeAttribute('aria-describedby'),
                        e(n.element).trigger(n.constructor.Event.HIDDEN),
                        null !== n._popper && n._popper.destroy(),
                        t && t();
                    };
                  if ((e(this.element).trigger(i), !i.isDefaultPrevented())) {
                    if (
                      (e(r).removeClass(p.SHOW),
                      'ontouchstart' in document.documentElement &&
                        e(document.body)
                          .children()
                          .off('mouseover', null, e.noop),
                      (this._activeTrigger[g.CLICK] = !1),
                      (this._activeTrigger[g.FOCUS] = !1),
                      (this._activeTrigger[g.HOVER] = !1),
                      e(this.tip).hasClass(p.FADE))
                    ) {
                      var s = a.getTransitionDurationFromElement(r);
                      e(r)
                        .one(a.TRANSITION_END, o)
                        .emulateTransitionEnd(s);
                    } else o();
                    this._hoverState = '';
                  }
                }),
                (v.update = function() {
                  null !== this._popper && this._popper.scheduleUpdate();
                }),
                (v.isWithContent = function() {
                  return Boolean(this.getTitle());
                }),
                (v.addAttachmentClass = function(t) {
                  e(this.getTipElement()).addClass('bs-tooltip-' + t);
                }),
                (v.getTipElement = function() {
                  return (
                    (this.tip = this.tip || e(this.config.template)[0]),
                    this.tip
                  );
                }),
                (v.setContent = function() {
                  var t = this.getTipElement();
                  this.setElementContent(
                    e(t.querySelectorAll(m.TOOLTIP_INNER)),
                    this.getTitle()
                  ),
                    e(t).removeClass(p.FADE + ' ' + p.SHOW);
                }),
                (v.setElementContent = function(t, n) {
                  var r = this.config.html;
                  'object' == typeof n && (n.nodeType || n.jquery)
                    ? r
                      ? e(n)
                          .parent()
                          .is(t) || t.empty().append(n)
                      : t.text(e(n).text())
                    : t[r ? 'html' : 'text'](n);
                }),
                (v.getTitle = function() {
                  var e = this.element.getAttribute('data-original-title');
                  return (
                    e ||
                      (e =
                        'function' == typeof this.config.title
                          ? this.config.title.call(this.element)
                          : this.config.title),
                    e
                  );
                }),
                (v._getAttachment = function(e) {
                  return c[e.toUpperCase()];
                }),
                (v._setListeners = function() {
                  var t = this,
                    n = this.config.trigger.split(' ');
                  n.forEach(function(n) {
                    if ('click' === n)
                      e(t.element).on(
                        t.constructor.Event.CLICK,
                        t.config.selector,
                        function(e) {
                          return t.toggle(e);
                        }
                      );
                    else if (n !== g.MANUAL) {
                      var r =
                          n === g.HOVER
                            ? t.constructor.Event.MOUSEENTER
                            : t.constructor.Event.FOCUSIN,
                        i =
                          n === g.HOVER
                            ? t.constructor.Event.MOUSELEAVE
                            : t.constructor.Event.FOCUSOUT;
                      e(t.element)
                        .on(r, t.config.selector, function(e) {
                          return t._enter(e);
                        })
                        .on(i, t.config.selector, function(e) {
                          return t._leave(e);
                        });
                    }
                    e(t.element)
                      .closest('.modal')
                      .on('hide.bs.modal', function() {
                        return t.hide();
                      });
                  }),
                    this.config.selector
                      ? (this.config = s({}, this.config, {
                          trigger: 'manual',
                          selector: ''
                        }))
                      : this._fixTitle();
                }),
                (v._fixTitle = function() {
                  var e = typeof this.element.getAttribute(
                    'data-original-title'
                  );
                  (this.element.getAttribute('title') || 'string' !== e) &&
                    (this.element.setAttribute(
                      'data-original-title',
                      this.element.getAttribute('title') || ''
                    ),
                    this.element.setAttribute('title', ''));
                }),
                (v._enter = function(t, n) {
                  var r = this.constructor.DATA_KEY;
                  (n = n || e(t.currentTarget).data(r)) ||
                    ((n = new this.constructor(
                      t.currentTarget,
                      this._getDelegateConfig()
                    )),
                    e(t.currentTarget).data(r, n)),
                    t &&
                      (n._activeTrigger[
                        'focusin' === t.type ? g.FOCUS : g.HOVER
                      ] = !0),
                    e(n.getTipElement()).hasClass(p.SHOW) ||
                    n._hoverState === d.SHOW
                      ? (n._hoverState = d.SHOW)
                      : (clearTimeout(n._timeout),
                        (n._hoverState = d.SHOW),
                        n.config.delay && n.config.delay.show
                          ? (n._timeout = setTimeout(function() {
                              n._hoverState === d.SHOW && n.show();
                            }, n.config.delay.show))
                          : n.show());
                }),
                (v._leave = function(t, n) {
                  var r = this.constructor.DATA_KEY;
                  (n = n || e(t.currentTarget).data(r)) ||
                    ((n = new this.constructor(
                      t.currentTarget,
                      this._getDelegateConfig()
                    )),
                    e(t.currentTarget).data(r, n)),
                    t &&
                      (n._activeTrigger[
                        'focusout' === t.type ? g.FOCUS : g.HOVER
                      ] = !1),
                    n._isWithActiveTrigger() ||
                      (clearTimeout(n._timeout),
                      (n._hoverState = d.OUT),
                      n.config.delay && n.config.delay.hide
                        ? (n._timeout = setTimeout(function() {
                            n._hoverState === d.OUT && n.hide();
                          }, n.config.delay.hide))
                        : n.hide());
                }),
                (v._isWithActiveTrigger = function() {
                  for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                  return !1;
                }),
                (v._getConfig = function(n) {
                  return (
                    'number' ==
                      typeof (n = s(
                        {},
                        this.constructor.Default,
                        e(this.element).data(),
                        'object' == typeof n && n ? n : {}
                      )).delay && (n.delay = { show: n.delay, hide: n.delay }),
                    'number' == typeof n.title &&
                      (n.title = n.title.toString()),
                    'number' == typeof n.content &&
                      (n.content = n.content.toString()),
                    a.typeCheckConfig(t, n, this.constructor.DefaultType),
                    n
                  );
                }),
                (v._getDelegateConfig = function() {
                  var e = {};
                  if (this.config)
                    for (var t in this.config)
                      this.constructor.Default[t] !== this.config[t] &&
                        (e[t] = this.config[t]);
                  return e;
                }),
                (v._cleanTipClass = function() {
                  var t = e(this.getTipElement()),
                    n = t.attr('class').match(l);
                  null !== n && n.length && t.removeClass(n.join(''));
                }),
                (v._handlePopperPlacementChange = function(e) {
                  var t = e.instance;
                  (this.tip = t.popper),
                    this._cleanTipClass(),
                    this.addAttachmentClass(this._getAttachment(e.placement));
                }),
                (v._fixTransition = function() {
                  var t = this.getTipElement(),
                    n = this.config.animation;
                  null === t.getAttribute('x-placement') &&
                    (e(t).removeClass(p.FADE),
                    (this.config.animation = !1),
                    this.hide(),
                    this.show(),
                    (this.config.animation = n));
                }),
                (o._jQueryInterface = function(t) {
                  return this.each(function() {
                    var n = e(this).data('bs.tooltip'),
                      r = 'object' == typeof t && t;
                    if (
                      (n || !/dispose|hide/.test(t)) &&
                      (n ||
                        ((n = new o(this, r)), e(this).data('bs.tooltip', n)),
                      'string' == typeof t)
                    ) {
                      if (void 0 === n[t])
                        throw new TypeError('No method named "' + t + '"');
                      n[t]();
                    }
                  });
                }),
                i(o, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.1.2';
                    }
                  },
                  {
                    key: 'Default',
                    get: function() {
                      return f;
                    }
                  },
                  {
                    key: 'NAME',
                    get: function() {
                      return t;
                    }
                  },
                  {
                    key: 'DATA_KEY',
                    get: function() {
                      return 'bs.tooltip';
                    }
                  },
                  {
                    key: 'Event',
                    get: function() {
                      return h;
                    }
                  },
                  {
                    key: 'EVENT_KEY',
                    get: function() {
                      return r;
                    }
                  },
                  {
                    key: 'DefaultType',
                    get: function() {
                      return u;
                    }
                  }
                ]),
                o
              );
            })();
          return (
            (e.fn[t] = v._jQueryInterface),
            (e.fn[t].Constructor = v),
            (e.fn[t].noConflict = function() {
              return (e.fn[t] = o), v._jQueryInterface;
            }),
            v
          );
        })(t),
        m = (function(e) {
          var t = 'popover',
            n = '.bs.popover',
            r = e.fn[t],
            o = new RegExp('(^|\\s)bs-popover\\S+', 'g'),
            a = s({}, p.Default, {
              placement: 'right',
              trigger: 'click',
              content: '',
              template:
                '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            }),
            l = s({}, p.DefaultType, { content: '(string|element|function)' }),
            u = { FADE: 'fade', SHOW: 'show' },
            c = { TITLE: '.popover-header', CONTENT: '.popover-body' },
            f = {
              HIDE: 'hide' + n,
              HIDDEN: 'hidden' + n,
              SHOW: 'show' + n,
              SHOWN: 'shown' + n,
              INSERTED: 'inserted' + n,
              CLICK: 'click' + n,
              FOCUSIN: 'focusin' + n,
              FOCUSOUT: 'focusout' + n,
              MOUSEENTER: 'mouseenter' + n,
              MOUSELEAVE: 'mouseleave' + n
            },
            d = (function(r) {
              function s() {
                return r.apply(this, arguments) || this;
              }
              !(function(e, t) {
                (e.prototype = Object.create(t.prototype)),
                  (e.prototype.constructor = e),
                  (e.__proto__ = t);
              })(s, r);
              var d = s.prototype;
              return (
                (d.isWithContent = function() {
                  return this.getTitle() || this._getContent();
                }),
                (d.addAttachmentClass = function(t) {
                  e(this.getTipElement()).addClass('bs-popover-' + t);
                }),
                (d.getTipElement = function() {
                  return (
                    (this.tip = this.tip || e(this.config.template)[0]),
                    this.tip
                  );
                }),
                (d.setContent = function() {
                  var t = e(this.getTipElement());
                  this.setElementContent(t.find(c.TITLE), this.getTitle());
                  var n = this._getContent();
                  'function' == typeof n && (n = n.call(this.element)),
                    this.setElementContent(t.find(c.CONTENT), n),
                    t.removeClass(u.FADE + ' ' + u.SHOW);
                }),
                (d._getContent = function() {
                  return (
                    this.element.getAttribute('data-content') ||
                    this.config.content
                  );
                }),
                (d._cleanTipClass = function() {
                  var t = e(this.getTipElement()),
                    n = t.attr('class').match(o);
                  null !== n && n.length > 0 && t.removeClass(n.join(''));
                }),
                (s._jQueryInterface = function(t) {
                  return this.each(function() {
                    var n = e(this).data('bs.popover'),
                      r = 'object' == typeof t ? t : null;
                    if (
                      (n || !/destroy|hide/.test(t)) &&
                      (n ||
                        ((n = new s(this, r)), e(this).data('bs.popover', n)),
                      'string' == typeof t)
                    ) {
                      if (void 0 === n[t])
                        throw new TypeError('No method named "' + t + '"');
                      n[t]();
                    }
                  });
                }),
                i(s, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.1.2';
                    }
                  },
                  {
                    key: 'Default',
                    get: function() {
                      return a;
                    }
                  },
                  {
                    key: 'NAME',
                    get: function() {
                      return t;
                    }
                  },
                  {
                    key: 'DATA_KEY',
                    get: function() {
                      return 'bs.popover';
                    }
                  },
                  {
                    key: 'Event',
                    get: function() {
                      return f;
                    }
                  },
                  {
                    key: 'EVENT_KEY',
                    get: function() {
                      return n;
                    }
                  },
                  {
                    key: 'DefaultType',
                    get: function() {
                      return l;
                    }
                  }
                ]),
                s
              );
            })(p);
          return (
            (e.fn[t] = d._jQueryInterface),
            (e.fn[t].Constructor = d),
            (e.fn[t].noConflict = function() {
              return (e.fn[t] = r), d._jQueryInterface;
            }),
            d
          );
        })(t),
        g = (function(e) {
          var t = 'scrollspy',
            n = e.fn[t],
            r = { offset: 10, method: 'auto', target: '' },
            o = {
              offset: 'number',
              method: 'string',
              target: '(string|element)'
            },
            l = {
              ACTIVATE: 'activate.bs.scrollspy',
              SCROLL: 'scroll.bs.scrollspy',
              LOAD_DATA_API: 'load.bs.scrollspy.data-api'
            },
            u = {
              DROPDOWN_ITEM: 'dropdown-item',
              DROPDOWN_MENU: 'dropdown-menu',
              ACTIVE: 'active'
            },
            c = {
              DATA_SPY: '[data-spy="scroll"]',
              ACTIVE: '.active',
              NAV_LIST_GROUP: '.nav, .list-group',
              NAV_LINKS: '.nav-link',
              NAV_ITEMS: '.nav-item',
              LIST_ITEMS: '.list-group-item',
              DROPDOWN: '.dropdown',
              DROPDOWN_ITEMS: '.dropdown-item',
              DROPDOWN_TOGGLE: '.dropdown-toggle'
            },
            f = { OFFSET: 'offset', POSITION: 'position' },
            d = (function() {
              function n(t, n) {
                var r = this;
                (this._element = t),
                  (this._scrollElement = 'BODY' === t.tagName ? window : t),
                  (this._config = this._getConfig(n)),
                  (this._selector =
                    this._config.target +
                    ' ' +
                    c.NAV_LINKS +
                    ',' +
                    this._config.target +
                    ' ' +
                    c.LIST_ITEMS +
                    ',' +
                    this._config.target +
                    ' ' +
                    c.DROPDOWN_ITEMS),
                  (this._offsets = []),
                  (this._targets = []),
                  (this._activeTarget = null),
                  (this._scrollHeight = 0),
                  e(this._scrollElement).on(l.SCROLL, function(e) {
                    return r._process(e);
                  }),
                  this.refresh(),
                  this._process();
              }
              var d = n.prototype;
              return (
                (d.refresh = function() {
                  var t = this,
                    n =
                      this._scrollElement === this._scrollElement.window
                        ? f.OFFSET
                        : f.POSITION,
                    r =
                      'auto' === this._config.method ? n : this._config.method,
                    i = r === f.POSITION ? this._getScrollTop() : 0;
                  (this._offsets = []),
                    (this._targets = []),
                    (this._scrollHeight = this._getScrollHeight());
                  var o = [].slice.call(
                    document.querySelectorAll(this._selector)
                  );
                  o.map(function(t) {
                    var n,
                      o = a.getSelectorFromElement(t);
                    if ((o && (n = document.querySelector(o)), n)) {
                      var s = n.getBoundingClientRect();
                      if (s.width || s.height) return [e(n)[r]().top + i, o];
                    }
                    return null;
                  })
                    .filter(function(e) {
                      return e;
                    })
                    .sort(function(e, t) {
                      return e[0] - t[0];
                    })
                    .forEach(function(e) {
                      t._offsets.push(e[0]), t._targets.push(e[1]);
                    });
                }),
                (d.dispose = function() {
                  e.removeData(this._element, 'bs.scrollspy'),
                    e(this._scrollElement).off('.bs.scrollspy'),
                    (this._element = null),
                    (this._scrollElement = null),
                    (this._config = null),
                    (this._selector = null),
                    (this._offsets = null),
                    (this._targets = null),
                    (this._activeTarget = null),
                    (this._scrollHeight = null);
                }),
                (d._getConfig = function(n) {
                  if (
                    'string' !=
                    typeof (n = s({}, r, 'object' == typeof n && n ? n : {}))
                      .target
                  ) {
                    var i = e(n.target).attr('id');
                    i || ((i = a.getUID(t)), e(n.target).attr('id', i)),
                      (n.target = '#' + i);
                  }
                  return a.typeCheckConfig(t, n, o), n;
                }),
                (d._getScrollTop = function() {
                  return this._scrollElement === window
                    ? this._scrollElement.pageYOffset
                    : this._scrollElement.scrollTop;
                }),
                (d._getScrollHeight = function() {
                  return (
                    this._scrollElement.scrollHeight ||
                    Math.max(
                      document.body.scrollHeight,
                      document.documentElement.scrollHeight
                    )
                  );
                }),
                (d._getOffsetHeight = function() {
                  return this._scrollElement === window
                    ? window.innerHeight
                    : this._scrollElement.getBoundingClientRect().height;
                }),
                (d._process = function() {
                  var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                  if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
                    var r = this._targets[this._targets.length - 1];
                    this._activeTarget !== r && this._activate(r);
                  } else {
                    if (
                      this._activeTarget &&
                      e < this._offsets[0] &&
                      this._offsets[0] > 0
                    )
                      return (this._activeTarget = null), void this._clear();
                    for (var i = this._offsets.length, o = i; o--; ) {
                      var s =
                        this._activeTarget !== this._targets[o] &&
                        e >= this._offsets[o] &&
                        (void 0 === this._offsets[o + 1] ||
                          e < this._offsets[o + 1]);
                      s && this._activate(this._targets[o]);
                    }
                  }
                }),
                (d._activate = function(t) {
                  (this._activeTarget = t), this._clear();
                  var n = this._selector.split(',');
                  n = n.map(function(e) {
                    return (
                      e +
                      '[data-target="' +
                      t +
                      '"],' +
                      e +
                      '[href="' +
                      t +
                      '"]'
                    );
                  });
                  var r = e(
                    [].slice.call(document.querySelectorAll(n.join(',')))
                  );
                  r.hasClass(u.DROPDOWN_ITEM)
                    ? (r
                        .closest(c.DROPDOWN)
                        .find(c.DROPDOWN_TOGGLE)
                        .addClass(u.ACTIVE),
                      r.addClass(u.ACTIVE))
                    : (r.addClass(u.ACTIVE),
                      r
                        .parents(c.NAV_LIST_GROUP)
                        .prev(c.NAV_LINKS + ', ' + c.LIST_ITEMS)
                        .addClass(u.ACTIVE),
                      r
                        .parents(c.NAV_LIST_GROUP)
                        .prev(c.NAV_ITEMS)
                        .children(c.NAV_LINKS)
                        .addClass(u.ACTIVE)),
                    e(this._scrollElement).trigger(l.ACTIVATE, {
                      relatedTarget: t
                    });
                }),
                (d._clear = function() {
                  var t = [].slice.call(
                    document.querySelectorAll(this._selector)
                  );
                  e(t)
                    .filter(c.ACTIVE)
                    .removeClass(u.ACTIVE);
                }),
                (n._jQueryInterface = function(t) {
                  return this.each(function() {
                    var r = e(this).data('bs.scrollspy'),
                      i = 'object' == typeof t && t;
                    if (
                      (r ||
                        ((r = new n(this, i)), e(this).data('bs.scrollspy', r)),
                      'string' == typeof t)
                    ) {
                      if (void 0 === r[t])
                        throw new TypeError('No method named "' + t + '"');
                      r[t]();
                    }
                  });
                }),
                i(n, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.1.2';
                    }
                  },
                  {
                    key: 'Default',
                    get: function() {
                      return r;
                    }
                  }
                ]),
                n
              );
            })();
          return (
            e(window).on(l.LOAD_DATA_API, function() {
              for (
                var t = [].slice.call(document.querySelectorAll(c.DATA_SPY)),
                  n = t.length,
                  r = n;
                r--;

              ) {
                var i = e(t[r]);
                d._jQueryInterface.call(i, i.data());
              }
            }),
            (e.fn[t] = d._jQueryInterface),
            (e.fn[t].Constructor = d),
            (e.fn[t].noConflict = function() {
              return (e.fn[t] = n), d._jQueryInterface;
            }),
            d
          );
        })(t),
        v = (function(e) {
          var t = e.fn.tab,
            n = {
              HIDE: 'hide.bs.tab',
              HIDDEN: 'hidden.bs.tab',
              SHOW: 'show.bs.tab',
              SHOWN: 'shown.bs.tab',
              CLICK_DATA_API: 'click.bs.tab.data-api'
            },
            r = {
              DROPDOWN_MENU: 'dropdown-menu',
              ACTIVE: 'active',
              DISABLED: 'disabled',
              FADE: 'fade',
              SHOW: 'show'
            },
            o = {
              DROPDOWN: '.dropdown',
              NAV_LIST_GROUP: '.nav, .list-group',
              ACTIVE: '.active',
              ACTIVE_UL: '> li > .active',
              DATA_TOGGLE:
                '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
              DROPDOWN_TOGGLE: '.dropdown-toggle',
              DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
            },
            s = (function() {
              function t(e) {
                this._element = e;
              }
              var s = t.prototype;
              return (
                (s.show = function() {
                  var t = this;
                  if (
                    !(
                      (this._element.parentNode &&
                        this._element.parentNode.nodeType ===
                          Node.ELEMENT_NODE &&
                        e(this._element).hasClass(r.ACTIVE)) ||
                      e(this._element).hasClass(r.DISABLED)
                    )
                  ) {
                    var i,
                      s,
                      l = e(this._element).closest(o.NAV_LIST_GROUP)[0],
                      u = a.getSelectorFromElement(this._element);
                    if (l) {
                      var c = 'UL' === l.nodeName ? o.ACTIVE_UL : o.ACTIVE;
                      s = (s = e.makeArray(e(l).find(c)))[s.length - 1];
                    }
                    var f = e.Event(n.HIDE, { relatedTarget: this._element }),
                      d = e.Event(n.SHOW, { relatedTarget: s });
                    if (
                      (s && e(s).trigger(f),
                      e(this._element).trigger(d),
                      !d.isDefaultPrevented() && !f.isDefaultPrevented())
                    ) {
                      u && (i = document.querySelector(u)),
                        this._activate(this._element, l);
                      var h = function() {
                        var r = e.Event(n.HIDDEN, {
                            relatedTarget: t._element
                          }),
                          i = e.Event(n.SHOWN, { relatedTarget: s });
                        e(s).trigger(r), e(t._element).trigger(i);
                      };
                      i ? this._activate(i, i.parentNode, h) : h();
                    }
                  }
                }),
                (s.dispose = function() {
                  e.removeData(this._element, 'bs.tab'), (this._element = null);
                }),
                (s._activate = function(t, n, i) {
                  var s = this,
                    l = ('UL' === n.nodeName
                      ? e(n).find(o.ACTIVE_UL)
                      : e(n).children(o.ACTIVE))[0],
                    u = i && l && e(l).hasClass(r.FADE),
                    c = function() {
                      return s._transitionComplete(t, l, i);
                    };
                  if (l && u) {
                    var f = a.getTransitionDurationFromElement(l);
                    e(l)
                      .one(a.TRANSITION_END, c)
                      .emulateTransitionEnd(f);
                  } else c();
                }),
                (s._transitionComplete = function(t, n, i) {
                  if (n) {
                    e(n).removeClass(r.SHOW + ' ' + r.ACTIVE);
                    var s = e(n.parentNode).find(o.DROPDOWN_ACTIVE_CHILD)[0];
                    s && e(s).removeClass(r.ACTIVE),
                      'tab' === n.getAttribute('role') &&
                        n.setAttribute('aria-selected', !1);
                  }
                  if (
                    (e(t).addClass(r.ACTIVE),
                    'tab' === t.getAttribute('role') &&
                      t.setAttribute('aria-selected', !0),
                    a.reflow(t),
                    e(t).addClass(r.SHOW),
                    t.parentNode && e(t.parentNode).hasClass(r.DROPDOWN_MENU))
                  ) {
                    var l = e(t).closest(o.DROPDOWN)[0];
                    if (l) {
                      var u = [].slice.call(
                        l.querySelectorAll(o.DROPDOWN_TOGGLE)
                      );
                      e(u).addClass(r.ACTIVE);
                    }
                    t.setAttribute('aria-expanded', !0);
                  }
                  i && i();
                }),
                (t._jQueryInterface = function(n) {
                  return this.each(function() {
                    var r = e(this),
                      i = r.data('bs.tab');
                    if (
                      (i || ((i = new t(this)), r.data('bs.tab', i)),
                      'string' == typeof n)
                    ) {
                      if (void 0 === i[n])
                        throw new TypeError('No method named "' + n + '"');
                      i[n]();
                    }
                  });
                }),
                i(t, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.1.2';
                    }
                  }
                ]),
                t
              );
            })();
          return (
            e(document).on(n.CLICK_DATA_API, o.DATA_TOGGLE, function(t) {
              t.preventDefault(), s._jQueryInterface.call(e(this), 'show');
            }),
            (e.fn.tab = s._jQueryInterface),
            (e.fn.tab.Constructor = s),
            (e.fn.tab.noConflict = function() {
              return (e.fn.tab = t), s._jQueryInterface;
            }),
            s
          );
        })(t);
      (function(e) {
        if (void 0 === e)
          throw new TypeError(
            "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
          );
        var t = e.fn.jquery.split(' ')[0].split('.');
        if (
          (t[0] < 2 && t[1] < 9) ||
          (1 === t[0] && 9 === t[1] && t[2] < 1) ||
          t[0] >= 4
        )
          throw new Error(
            "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
          );
      })(t),
        (e.Util = a),
        (e.Alert = l),
        (e.Button = u),
        (e.Carousel = c),
        (e.Collapse = f),
        (e.Dropdown = d),
        (e.Modal = h),
        (e.Popover = m),
        (e.Scrollspy = g),
        (e.Tab = v),
        (e.Tooltip = p),
        Object.defineProperty(e, '__esModule', { value: !0 });
    })(t, n(6), n(5));
  }
]);
