!(function (t) {
    function e(i) {
        if (n[i]) return n[i].exports;
        var o = (n[i] = { exports: {}, id: i, loaded: !1 });
        return t[i].call(o.exports, o, o.exports, e), (o.loaded = !0), o.exports;
    }
    var i = window.webpackJsonp;
    window.webpackJsonp = function (n, s) {
        for (var a, r, l = 0, c = []; l < n.length; l++) (r = n[l]), o[r] && c.push.apply(c, o[r]), (o[r] = 0);
        for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (t[a] = s[a]);
        for (i && i(n, s); c.length; ) c.shift().call(null, e);
    };
    var n = {},
        o = { 0: 0 };
    return (
        (e.e = function (t, i) {
            if (0 === o[t]) return i.call(null, e);
            if (void 0 !== o[t]) o[t].push(i);
            else {
                o[t] = [i];
                var n = document.getElementsByTagName("head")[0],
                    s = document.createElement("script");
                (s.type = "text/javascript"),
                    (s.charset = "utf-8"),
                    (s.async = !0),
                    (s.src = e.p + "" + t + "." + { 1: "0777a95806a37a40ea4c", 2: "12c50164b5b6786bea7b", 3: "471fda001e914d1ee662", 4: "7af9570fde336035a9d8", 5: "8468a79debb8e4f7f54b" }[t] + ".js"),
                    n.appendChild(s);
            }
        }),
        (e.m = t),
        (e.c = n),
        (e.p = "/wp-content/themes/gsd-wp-theme/static/js/dist/"),
        e(0)
    );
})([
    function (t, e, i) {
        var n = i(1);
        n(document).ready(function () {
            (window.gsd = i(2).create()), window.gsd.init();
        });
    },
    function (t, e) {
        t.exports = jQuery;
    },
    function (t, e, i) {
        var n = i(1),
            o = i(3),
            s = i(4);
        i(6), i(7), s.makeJQueryPlugin(n);
        var a = {
            create: function () {
                return (
                    (this.modules = [i(8), i(9), i(11), i(12), i(22), i(25), i(26), i(28), i(29), i(30), i(31), i(32), i(33), i(34), i(35), i(36), i(39), i(40), i(41), i(42), i(43), i(44), i(45), i(46), i(47), i(48)]),
                    o.bindAll(this, "onTransitionStarted", "onTransitionReady", "onTransitionAfter"),
                    this.setupSmoothState(),
                    this.fullScreenVideo(),
                    this
                );
            },
            setupSmoothState: function () {
                var t = {
                    prefetch: !1,
                    forms: !1,
                    blacklist: '[href*="/wp-"], a[href$=".jpg"], a[href$=".jpeg"], a[href$=".png"], a[href$=".pdf"]',
                    onStart: { duration: 650, render: this.onTransitionStarted },
                    onReady: { duration: 400, render: this.onTransitionReady },
                    onAfter: this.onTransitionAfter,
                };
                this.smoothState = n("#pjax-container").smoothState(t).data("smoothState");
            },
            fullScreenVideo: function () {
                n(document).on("webkitfullscreenchange", function () {
                    console.log("loaded"),
                        document.webkitFullscreenElement
                            ? (console.log("addclass"), n("#pjax-container .l--content, #pjax-container .l--footer").addClass("no-animation"))
                            : (console.log("removeclass"), n("#pjax-container .l--content, #pjax-container .l--footer").removeClass("no-animation"));
                });
            },
            onTransitionStarted: function (t) {
                this.deinit(), t.addClass("is-exiting"), this.smoothState.restartCSSAnimations();
            },
            onTransitionReady: function (t, e) {
                t.removeClass("is-exiting"), t.html(e), this.copyBodyClasses();
            },
            onTransitionAfter: function () {
                this.init(), n("#pjax-announce").text("Navigated to page: " + document.title), window.ga && ga.create && (ga("set", { page: window.location.pathname, title: document.title }), ga("send", "pageview"));
            },
            copyBodyClasses: function () {
                var t,
                    e,
                    i,
                    o = this.smoothState.href;
                o in this.smoothState.cache && ((t = this.smoothState.cache[o].doc || !1), t && ((e = t.match(/<body.*class=['"](.*)['"]/)), e && (i = e[1]))), i && n("body").attr("class", i);
            },
            init: function () {
                o.invoke(this.modules, "init");
            },
            deinit: function () {
                o.invoke(this.modules, "deinit");
            },
        };
        t.exports = a;
    },
    function (t, e, i) {
        var n, o;
        (function () {
            function i(t) {
                function e(e, i, n, o, s, a) {
                    for (; s >= 0 && s < a; s += t) {
                        var r = o ? o[s] : s;
                        n = i(n, e[r], r, e);
                    }
                    return n;
                }
                return function (i, n, o, s) {
                    n = k(n, s, 4);
                    var a = !E(i) && $.keys(i),
                        r = (a || i).length,
                        l = t > 0 ? 0 : r - 1;
                    return arguments.length < 3 && ((o = i[a ? a[l] : l]), (l += t)), e(i, n, o, a, l, r);
                };
            }
            function s(t) {
                return function (e, i, n) {
                    i = C(i, n);
                    for (var o = A(e), s = t > 0 ? 0 : o - 1; s >= 0 && s < o; s += t) if (i(e[s], s, e)) return s;
                    return -1;
                };
            }
            function a(t, e, i) {
                return function (n, o, s) {
                    var a = 0,
                        r = A(n);
                    if ("number" == typeof s) t > 0 ? (a = s >= 0 ? s : Math.max(s + r, a)) : (r = s >= 0 ? Math.min(s + 1, r) : s + r + 1);
                    else if (i && s && r) return (s = i(n, o)), n[s] === o ? s : -1;
                    if (o !== o) return (s = e(p.call(n, a, r), $.isNaN)), s >= 0 ? s + a : -1;
                    for (s = t > 0 ? a : r - 1; s >= 0 && s < r; s += t) if (n[s] === o) return s;
                    return -1;
                };
            }
            function r(t, e) {
                var i = z.length,
                    n = t.constructor,
                    o = ($.isFunction(n) && n.prototype) || h,
                    s = "constructor";
                for ($.has(t, s) && !$.contains(e, s) && e.push(s); i--; ) (s = z[i]), s in t && t[s] !== o[s] && !$.contains(e, s) && e.push(s);
            }
            var l = this,
                c = l._,
                u = Array.prototype,
                h = Object.prototype,
                f = Function.prototype,
                d = u.push,
                p = u.slice,
                g = h.toString,
                m = h.hasOwnProperty,
                v = Array.isArray,
                y = Object.keys,
                w = f.bind,
                b = Object.create,
                _ = function () {},
                $ = function (t) {
                    return t instanceof $ ? t : this instanceof $ ? void (this._wrapped = t) : new $(t);
                };
            "undefined" != typeof t && t.exports && (e = t.exports = $), (e._ = $), ($.VERSION = "1.8.3");
            var k = function (t, e, i) {
                    if (void 0 === e) return t;
                    switch (null == i ? 3 : i) {
                        case 1:
                            return function (i) {
                                return t.call(e, i);
                            };
                        case 2:
                            return function (i, n) {
                                return t.call(e, i, n);
                            };
                        case 3:
                            return function (i, n, o) {
                                return t.call(e, i, n, o);
                            };
                        case 4:
                            return function (i, n, o, s) {
                                return t.call(e, i, n, o, s);
                            };
                    }
                    return function () {
                        return t.apply(e, arguments);
                    };
                },
                C = function (t, e, i) {
                    return null == t ? $.identity : $.isFunction(t) ? k(t, e, i) : $.isObject(t) ? $.matcher(t) : $.property(t);
                };
            $.iteratee = function (t, e) {
                return C(t, e, 1 / 0);
            };
            var x = function (t, e) {
                    return function (i) {
                        var n = arguments.length;
                        if (n < 2 || null == i) return i;
                        for (var o = 1; o < n; o++)
                            for (var s = arguments[o], a = t(s), r = a.length, l = 0; l < r; l++) {
                                var c = a[l];
                                (e && void 0 !== i[c]) || (i[c] = s[c]);
                            }
                        return i;
                    };
                },
                M = function (t) {
                    if (!$.isObject(t)) return {};
                    if (b) return b(t);
                    _.prototype = t;
                    var e = new _();
                    return (_.prototype = null), e;
                },
                T = function (t) {
                    return function (e) {
                        return null == e ? void 0 : e[t];
                    };
                },
                S = Math.pow(2, 53) - 1,
                A = T("length"),
                E = function (t) {
                    var e = A(t);
                    return "number" == typeof e && e >= 0 && e <= S;
                };
            ($.each = $.forEach = function (t, e, i) {
                e = k(e, i);
                var n, o;
                if (E(t)) for (n = 0, o = t.length; n < o; n++) e(t[n], n, t);
                else {
                    var s = $.keys(t);
                    for (n = 0, o = s.length; n < o; n++) e(t[s[n]], s[n], t);
                }
                return t;
            }),
                ($.map = $.collect = function (t, e, i) {
                    e = C(e, i);
                    for (var n = !E(t) && $.keys(t), o = (n || t).length, s = Array(o), a = 0; a < o; a++) {
                        var r = n ? n[a] : a;
                        s[a] = e(t[r], r, t);
                    }
                    return s;
                }),
                ($.reduce = $.foldl = $.inject = i(1)),
                ($.reduceRight = $.foldr = i(-1)),
                ($.find = $.detect = function (t, e, i) {
                    var n;
                    if (((n = E(t) ? $.findIndex(t, e, i) : $.findKey(t, e, i)), void 0 !== n && n !== -1)) return t[n];
                }),
                ($.filter = $.select = function (t, e, i) {
                    var n = [];
                    return (
                        (e = C(e, i)),
                        $.each(t, function (t, i, o) {
                            e(t, i, o) && n.push(t);
                        }),
                        n
                    );
                }),
                ($.reject = function (t, e, i) {
                    return $.filter(t, $.negate(C(e)), i);
                }),
                ($.every = $.all = function (t, e, i) {
                    e = C(e, i);
                    for (var n = !E(t) && $.keys(t), o = (n || t).length, s = 0; s < o; s++) {
                        var a = n ? n[s] : s;
                        if (!e(t[a], a, t)) return !1;
                    }
                    return !0;
                }),
                ($.some = $.any = function (t, e, i) {
                    e = C(e, i);
                    for (var n = !E(t) && $.keys(t), o = (n || t).length, s = 0; s < o; s++) {
                        var a = n ? n[s] : s;
                        if (e(t[a], a, t)) return !0;
                    }
                    return !1;
                }),
                ($.contains = $.includes = $.include = function (t, e, i, n) {
                    return E(t) || (t = $.values(t)), ("number" != typeof i || n) && (i = 0), $.indexOf(t, e, i) >= 0;
                }),
                ($.invoke = function (t, e) {
                    var i = p.call(arguments, 2),
                        n = $.isFunction(e);
                    return $.map(t, function (t) {
                        var o = n ? e : t[e];
                        return null == o ? o : o.apply(t, i);
                    });
                }),
                ($.pluck = function (t, e) {
                    return $.map(t, $.property(e));
                }),
                ($.where = function (t, e) {
                    return $.filter(t, $.matcher(e));
                }),
                ($.findWhere = function (t, e) {
                    return $.find(t, $.matcher(e));
                }),
                ($.max = function (t, e, i) {
                    var n,
                        o,
                        s = -(1 / 0),
                        a = -(1 / 0);
                    if (null == e && null != t) {
                        t = E(t) ? t : $.values(t);
                        for (var r = 0, l = t.length; r < l; r++) (n = t[r]), n > s && (s = n);
                    } else
                        (e = C(e, i)),
                            $.each(t, function (t, i, n) {
                                (o = e(t, i, n)), (o > a || (o === -(1 / 0) && s === -(1 / 0))) && ((s = t), (a = o));
                            });
                    return s;
                }),
                ($.min = function (t, e, i) {
                    var n,
                        o,
                        s = 1 / 0,
                        a = 1 / 0;
                    if (null == e && null != t) {
                        t = E(t) ? t : $.values(t);
                        for (var r = 0, l = t.length; r < l; r++) (n = t[r]), n < s && (s = n);
                    } else
                        (e = C(e, i)),
                            $.each(t, function (t, i, n) {
                                (o = e(t, i, n)), (o < a || (o === 1 / 0 && s === 1 / 0)) && ((s = t), (a = o));
                            });
                    return s;
                }),
                ($.shuffle = function (t) {
                    for (var e, i = E(t) ? t : $.values(t), n = i.length, o = Array(n), s = 0; s < n; s++) (e = $.random(0, s)), e !== s && (o[s] = o[e]), (o[e] = i[s]);
                    return o;
                }),
                ($.sample = function (t, e, i) {
                    return null == e || i ? (E(t) || (t = $.values(t)), t[$.random(t.length - 1)]) : $.shuffle(t).slice(0, Math.max(0, e));
                }),
                ($.sortBy = function (t, e, i) {
                    return (
                        (e = C(e, i)),
                        $.pluck(
                            $.map(t, function (t, i, n) {
                                return { value: t, index: i, criteria: e(t, i, n) };
                            }).sort(function (t, e) {
                                var i = t.criteria,
                                    n = e.criteria;
                                if (i !== n) {
                                    if (i > n || void 0 === i) return 1;
                                    if (i < n || void 0 === n) return -1;
                                }
                                return t.index - e.index;
                            }),
                            "value"
                        )
                    );
                });
            var I = function (t) {
                return function (e, i, n) {
                    var o = {};
                    return (
                        (i = C(i, n)),
                        $.each(e, function (n, s) {
                            var a = i(n, s, e);
                            t(o, n, a);
                        }),
                        o
                    );
                };
            };
            ($.groupBy = I(function (t, e, i) {
                $.has(t, i) ? t[i].push(e) : (t[i] = [e]);
            })),
                ($.indexBy = I(function (t, e, i) {
                    t[i] = e;
                })),
                ($.countBy = I(function (t, e, i) {
                    $.has(t, i) ? t[i]++ : (t[i] = 1);
                })),
                ($.toArray = function (t) {
                    return t ? ($.isArray(t) ? p.call(t) : E(t) ? $.map(t, $.identity) : $.values(t)) : [];
                }),
                ($.size = function (t) {
                    return null == t ? 0 : E(t) ? t.length : $.keys(t).length;
                }),
                ($.partition = function (t, e, i) {
                    e = C(e, i);
                    var n = [],
                        o = [];
                    return (
                        $.each(t, function (t, i, s) {
                            (e(t, i, s) ? n : o).push(t);
                        }),
                        [n, o]
                    );
                }),
                ($.first = $.head = $.take = function (t, e, i) {
                    if (null != t) return null == e || i ? t[0] : $.initial(t, t.length - e);
                }),
                ($.initial = function (t, e, i) {
                    return p.call(t, 0, Math.max(0, t.length - (null == e || i ? 1 : e)));
                }),
                ($.last = function (t, e, i) {
                    if (null != t) return null == e || i ? t[t.length - 1] : $.rest(t, Math.max(0, t.length - e));
                }),
                ($.rest = $.tail = $.drop = function (t, e, i) {
                    return p.call(t, null == e || i ? 1 : e);
                }),
                ($.compact = function (t) {
                    return $.filter(t, $.identity);
                });
            var O = function (t, e, i, n) {
                for (var o = [], s = 0, a = n || 0, r = A(t); a < r; a++) {
                    var l = t[a];
                    if (E(l) && ($.isArray(l) || $.isArguments(l))) {
                        e || (l = O(l, e, i));
                        var c = 0,
                            u = l.length;
                        for (o.length += u; c < u; ) o[s++] = l[c++];
                    } else i || (o[s++] = l);
                }
                return o;
            };
            ($.flatten = function (t, e) {
                return O(t, e, !1);
            }),
                ($.without = function (t) {
                    return $.difference(t, p.call(arguments, 1));
                }),
                ($.uniq = $.unique = function (t, e, i, n) {
                    $.isBoolean(e) || ((n = i), (i = e), (e = !1)), null != i && (i = C(i, n));
                    for (var o = [], s = [], a = 0, r = A(t); a < r; a++) {
                        var l = t[a],
                            c = i ? i(l, a, t) : l;
                        e ? ((a && s === c) || o.push(l), (s = c)) : i ? $.contains(s, c) || (s.push(c), o.push(l)) : $.contains(o, l) || o.push(l);
                    }
                    return o;
                }),
                ($.union = function () {
                    return $.uniq(O(arguments, !0, !0));
                }),
                ($.intersection = function (t) {
                    for (var e = [], i = arguments.length, n = 0, o = A(t); n < o; n++) {
                        var s = t[n];
                        if (!$.contains(e, s)) {
                            for (var a = 1; a < i && $.contains(arguments[a], s); a++);
                            a === i && e.push(s);
                        }
                    }
                    return e;
                }),
                ($.difference = function (t) {
                    var e = O(arguments, !0, !0, 1);
                    return $.filter(t, function (t) {
                        return !$.contains(e, t);
                    });
                }),
                ($.zip = function () {
                    return $.unzip(arguments);
                }),
                ($.unzip = function (t) {
                    for (var e = (t && $.max(t, A).length) || 0, i = Array(e), n = 0; n < e; n++) i[n] = $.pluck(t, n);
                    return i;
                }),
                ($.object = function (t, e) {
                    for (var i = {}, n = 0, o = A(t); n < o; n++) e ? (i[t[n]] = e[n]) : (i[t[n][0]] = t[n][1]);
                    return i;
                }),
                ($.findIndex = s(1)),
                ($.findLastIndex = s(-1)),
                ($.sortedIndex = function (t, e, i, n) {
                    i = C(i, n, 1);
                    for (var o = i(e), s = 0, a = A(t); s < a; ) {
                        var r = Math.floor((s + a) / 2);
                        i(t[r]) < o ? (s = r + 1) : (a = r);
                    }
                    return s;
                }),
                ($.indexOf = a(1, $.findIndex, $.sortedIndex)),
                ($.lastIndexOf = a(-1, $.findLastIndex)),
                ($.range = function (t, e, i) {
                    null == e && ((e = t || 0), (t = 0)), (i = i || 1);
                    for (var n = Math.max(Math.ceil((e - t) / i), 0), o = Array(n), s = 0; s < n; s++, t += i) o[s] = t;
                    return o;
                });
            var L = function (t, e, i, n, o) {
                if (!(n instanceof e)) return t.apply(i, o);
                var s = M(t.prototype),
                    a = t.apply(s, o);
                return $.isObject(a) ? a : s;
            };
            ($.bind = function (t, e) {
                if (w && t.bind === w) return w.apply(t, p.call(arguments, 1));
                if (!$.isFunction(t)) throw new TypeError("Bind must be called on a function");
                var i = p.call(arguments, 2),
                    n = function () {
                        return L(t, n, e, this, i.concat(p.call(arguments)));
                    };
                return n;
            }),
                ($.partial = function (t) {
                    var e = p.call(arguments, 1),
                        i = function () {
                            for (var n = 0, o = e.length, s = Array(o), a = 0; a < o; a++) s[a] = e[a] === $ ? arguments[n++] : e[a];
                            for (; n < arguments.length; ) s.push(arguments[n++]);
                            return L(t, i, this, this, s);
                        };
                    return i;
                }),
                ($.bindAll = function (t) {
                    var e,
                        i,
                        n = arguments.length;
                    if (n <= 1) throw new Error("bindAll must be passed function names");
                    for (e = 1; e < n; e++) (i = arguments[e]), (t[i] = $.bind(t[i], t));
                    return t;
                }),
                ($.memoize = function (t, e) {
                    var i = function (n) {
                        var o = i.cache,
                            s = "" + (e ? e.apply(this, arguments) : n);
                        return $.has(o, s) || (o[s] = t.apply(this, arguments)), o[s];
                    };
                    return (i.cache = {}), i;
                }),
                ($.delay = function (t, e) {
                    var i = p.call(arguments, 2);
                    return setTimeout(function () {
                        return t.apply(null, i);
                    }, e);
                }),
                ($.defer = $.partial($.delay, $, 1)),
                ($.throttle = function (t, e, i) {
                    var n,
                        o,
                        s,
                        a = null,
                        r = 0;
                    i || (i = {});
                    var l = function () {
                        (r = i.leading === !1 ? 0 : $.now()), (a = null), (s = t.apply(n, o)), a || (n = o = null);
                    };
                    return function () {
                        var c = $.now();
                        r || i.leading !== !1 || (r = c);
                        var u = e - (c - r);
                        return (n = this), (o = arguments), u <= 0 || u > e ? (a && (clearTimeout(a), (a = null)), (r = c), (s = t.apply(n, o)), a || (n = o = null)) : a || i.trailing === !1 || (a = setTimeout(l, u)), s;
                    };
                }),
                ($.debounce = function (t, e, i) {
                    var n,
                        o,
                        s,
                        a,
                        r,
                        l = function () {
                            var c = $.now() - a;
                            c < e && c >= 0 ? (n = setTimeout(l, e - c)) : ((n = null), i || ((r = t.apply(s, o)), n || (s = o = null)));
                        };
                    return function () {
                        (s = this), (o = arguments), (a = $.now());
                        var c = i && !n;
                        return n || (n = setTimeout(l, e)), c && ((r = t.apply(s, o)), (s = o = null)), r;
                    };
                }),
                ($.wrap = function (t, e) {
                    return $.partial(e, t);
                }),
                ($.negate = function (t) {
                    return function () {
                        return !t.apply(this, arguments);
                    };
                }),
                ($.compose = function () {
                    var t = arguments,
                        e = t.length - 1;
                    return function () {
                        for (var i = e, n = t[e].apply(this, arguments); i--; ) n = t[i].call(this, n);
                        return n;
                    };
                }),
                ($.after = function (t, e) {
                    return function () {
                        if (--t < 1) return e.apply(this, arguments);
                    };
                }),
                ($.before = function (t, e) {
                    var i;
                    return function () {
                        return --t > 0 && (i = e.apply(this, arguments)), t <= 1 && (e = null), i;
                    };
                }),
                ($.once = $.partial($.before, 2));
            var j = !{ toString: null }.propertyIsEnumerable("toString"),
                z = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
            ($.keys = function (t) {
                if (!$.isObject(t)) return [];
                if (y) return y(t);
                var e = [];
                for (var i in t) $.has(t, i) && e.push(i);
                return j && r(t, e), e;
            }),
                ($.allKeys = function (t) {
                    if (!$.isObject(t)) return [];
                    var e = [];
                    for (var i in t) e.push(i);
                    return j && r(t, e), e;
                }),
                ($.values = function (t) {
                    for (var e = $.keys(t), i = e.length, n = Array(i), o = 0; o < i; o++) n[o] = t[e[o]];
                    return n;
                }),
                ($.mapObject = function (t, e, i) {
                    e = C(e, i);
                    for (var n, o = $.keys(t), s = o.length, a = {}, r = 0; r < s; r++) (n = o[r]), (a[n] = e(t[n], n, t));
                    return a;
                }),
                ($.pairs = function (t) {
                    for (var e = $.keys(t), i = e.length, n = Array(i), o = 0; o < i; o++) n[o] = [e[o], t[e[o]]];
                    return n;
                }),
                ($.invert = function (t) {
                    for (var e = {}, i = $.keys(t), n = 0, o = i.length; n < o; n++) e[t[i[n]]] = i[n];
                    return e;
                }),
                ($.functions = $.methods = function (t) {
                    var e = [];
                    for (var i in t) $.isFunction(t[i]) && e.push(i);
                    return e.sort();
                }),
                ($.extend = x($.allKeys)),
                ($.extendOwn = $.assign = x($.keys)),
                ($.findKey = function (t, e, i) {
                    e = C(e, i);
                    for (var n, o = $.keys(t), s = 0, a = o.length; s < a; s++) if (((n = o[s]), e(t[n], n, t))) return n;
                }),
                ($.pick = function (t, e, i) {
                    var n,
                        o,
                        s = {},
                        a = t;
                    if (null == a) return s;
                    $.isFunction(e)
                        ? ((o = $.allKeys(a)), (n = k(e, i)))
                        : ((o = O(arguments, !1, !1, 1)),
                          (n = function (t, e, i) {
                              return e in i;
                          }),
                          (a = Object(a)));
                    for (var r = 0, l = o.length; r < l; r++) {
                        var c = o[r],
                            u = a[c];
                        n(u, c, a) && (s[c] = u);
                    }
                    return s;
                }),
                ($.omit = function (t, e, i) {
                    if ($.isFunction(e)) e = $.negate(e);
                    else {
                        var n = $.map(O(arguments, !1, !1, 1), String);
                        e = function (t, e) {
                            return !$.contains(n, e);
                        };
                    }
                    return $.pick(t, e, i);
                }),
                ($.defaults = x($.allKeys, !0)),
                ($.create = function (t, e) {
                    var i = M(t);
                    return e && $.extendOwn(i, e), i;
                }),
                ($.clone = function (t) {
                    return $.isObject(t) ? ($.isArray(t) ? t.slice() : $.extend({}, t)) : t;
                }),
                ($.tap = function (t, e) {
                    return e(t), t;
                }),
                ($.isMatch = function (t, e) {
                    var i = $.keys(e),
                        n = i.length;
                    if (null == t) return !n;
                    for (var o = Object(t), s = 0; s < n; s++) {
                        var a = i[s];
                        if (e[a] !== o[a] || !(a in o)) return !1;
                    }
                    return !0;
                });
            var R = function (t, e, i, n) {
                if (t === e) return 0 !== t || 1 / t === 1 / e;
                if (null == t || null == e) return t === e;
                t instanceof $ && (t = t._wrapped), e instanceof $ && (e = e._wrapped);
                var o = g.call(t);
                if (o !== g.call(e)) return !1;
                switch (o) {
                    case "[object RegExp]":
                    case "[object String]":
                        return "" + t == "" + e;
                    case "[object Number]":
                        return +t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +t === +e;
                }
                var s = "[object Array]" === o;
                if (!s) {
                    if ("object" != typeof t || "object" != typeof e) return !1;
                    var a = t.constructor,
                        r = e.constructor;
                    if (a !== r && !($.isFunction(a) && a instanceof a && $.isFunction(r) && r instanceof r) && "constructor" in t && "constructor" in e) return !1;
                }
                (i = i || []), (n = n || []);
                for (var l = i.length; l--; ) if (i[l] === t) return n[l] === e;
                if ((i.push(t), n.push(e), s)) {
                    if (((l = t.length), l !== e.length)) return !1;
                    for (; l--; ) if (!R(t[l], e[l], i, n)) return !1;
                } else {
                    var c,
                        u = $.keys(t);
                    if (((l = u.length), $.keys(e).length !== l)) return !1;
                    for (; l--; ) if (((c = u[l]), !$.has(e, c) || !R(t[c], e[c], i, n))) return !1;
                }
                return i.pop(), n.pop(), !0;
            };
            ($.isEqual = function (t, e) {
                return R(t, e);
            }),
                ($.isEmpty = function (t) {
                    return null == t || (E(t) && ($.isArray(t) || $.isString(t) || $.isArguments(t)) ? 0 === t.length : 0 === $.keys(t).length);
                }),
                ($.isElement = function (t) {
                    return !(!t || 1 !== t.nodeType);
                }),
                ($.isArray =
                    v ||
                    function (t) {
                        return "[object Array]" === g.call(t);
                    }),
                ($.isObject = function (t) {
                    var e = typeof t;
                    return "function" === e || ("object" === e && !!t);
                }),
                $.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (t) {
                    $["is" + t] = function (e) {
                        return g.call(e) === "[object " + t + "]";
                    };
                }),
                $.isArguments(arguments) ||
                    ($.isArguments = function (t) {
                        return $.has(t, "callee");
                    }),
                "function" != typeof /./ &&
                    "object" != typeof Int8Array &&
                    ($.isFunction = function (t) {
                        return "function" == typeof t || !1;
                    }),
                ($.isFinite = function (t) {
                    return isFinite(t) && !isNaN(parseFloat(t));
                }),
                ($.isNaN = function (t) {
                    return $.isNumber(t) && t !== +t;
                }),
                ($.isBoolean = function (t) {
                    return t === !0 || t === !1 || "[object Boolean]" === g.call(t);
                }),
                ($.isNull = function (t) {
                    return null === t;
                }),
                ($.isUndefined = function (t) {
                    return void 0 === t;
                }),
                ($.has = function (t, e) {
                    return null != t && m.call(t, e);
                }),
                ($.noConflict = function () {
                    return (l._ = c), this;
                }),
                ($.identity = function (t) {
                    return t;
                }),
                ($.constant = function (t) {
                    return function () {
                        return t;
                    };
                }),
                ($.noop = function () {}),
                ($.property = T),
                ($.propertyOf = function (t) {
                    return null == t
                        ? function () {}
                        : function (e) {
                              return t[e];
                          };
                }),
                ($.matcher = $.matches = function (t) {
                    return (
                        (t = $.extendOwn({}, t)),
                        function (e) {
                            return $.isMatch(e, t);
                        }
                    );
                }),
                ($.times = function (t, e, i) {
                    var n = Array(Math.max(0, t));
                    e = k(e, i, 1);
                    for (var o = 0; o < t; o++) n[o] = e(o);
                    return n;
                }),
                ($.random = function (t, e) {
                    return null == e && ((e = t), (t = 0)), t + Math.floor(Math.random() * (e - t + 1));
                }),
                ($.now =
                    Date.now ||
                    function () {
                        return new Date().getTime();
                    });
            var q = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
                D = $.invert(q),
                N = function (t) {
                    var e = function (e) {
                            return t[e];
                        },
                        i = "(?:" + $.keys(t).join("|") + ")",
                        n = RegExp(i),
                        o = RegExp(i, "g");
                    return function (t) {
                        return (t = null == t ? "" : "" + t), n.test(t) ? t.replace(o, e) : t;
                    };
                };
            ($.escape = N(q)),
                ($.unescape = N(D)),
                ($.result = function (t, e, i) {
                    var n = null == t ? void 0 : t[e];
                    return void 0 === n && (n = i), $.isFunction(n) ? n.call(t) : n;
                });
            var P = 0;
            ($.uniqueId = function (t) {
                var e = ++P + "";
                return t ? t + e : e;
            }),
                ($.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g });
            var F = /(.)^/,
                B = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
                H = /\\|'|\r|\n|\u2028|\u2029/g,
                K = function (t) {
                    return "\\" + B[t];
                };
            ($.template = function (t, e, i) {
                !e && i && (e = i), (e = $.defaults({}, e, $.templateSettings));
                var n = RegExp([(e.escape || F).source, (e.interpolate || F).source, (e.evaluate || F).source].join("|") + "|$", "g"),
                    o = 0,
                    s = "__p+='";
                t.replace(n, function (e, i, n, a, r) {
                    return (
                        (s += t.slice(o, r).replace(H, K)), (o = r + e.length), i ? (s += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'") : n ? (s += "'+\n((__t=(" + n + "))==null?'':__t)+\n'") : a && (s += "';\n" + a + "\n__p+='"), e
                    );
                }),
                    (s += "';\n"),
                    e.variable || (s = "with(obj||{}){\n" + s + "}\n"),
                    (s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n");
                try {
                    var a = new Function(e.variable || "obj", "_", s);
                } catch (t) {
                    throw ((t.source = s), t);
                }
                var r = function (t) {
                        return a.call(this, t, $);
                    },
                    l = e.variable || "obj";
                return (r.source = "function(" + l + "){\n" + s + "}"), r;
            }),
                ($.chain = function (t) {
                    var e = $(t);
                    return (e._chain = !0), e;
                });
            var G = function (t, e) {
                return t._chain ? $(e).chain() : e;
            };
            ($.mixin = function (t) {
                $.each($.functions(t), function (e) {
                    var i = ($[e] = t[e]);
                    $.prototype[e] = function () {
                        var t = [this._wrapped];
                        return d.apply(t, arguments), G(this, i.apply($, t));
                    };
                });
            }),
                $.mixin($),
                $.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
                    var e = u[t];
                    $.prototype[t] = function () {
                        var i = this._wrapped;
                        return e.apply(i, arguments), ("shift" !== t && "splice" !== t) || 0 !== i.length || delete i[0], G(this, i);
                    };
                }),
                $.each(["concat", "join", "slice"], function (t) {
                    var e = u[t];
                    $.prototype[t] = function () {
                        return G(this, e.apply(this._wrapped, arguments));
                    };
                }),
                ($.prototype.value = function () {
                    return this._wrapped;
                }),
                ($.prototype.valueOf = $.prototype.toJSON = $.prototype.value),
                ($.prototype.toString = function () {
                    return "" + this._wrapped;
                }),
                (n = []),
                (o = function () {
                    return $;
                }.apply(e, n)),
                !(void 0 !== o && (t.exports = o));
        }.call(this));
    },
    function (t, e, i) {
        var n, o;
        /*!
         * imagesLoaded v4.1.3
         * JavaScript is all like "You images are done yet or what?"
         * MIT License
         */
        !(function (s, a) {
            "use strict";
            (n = [i(5)]),
                (o = function (t) {
                    return a(s, t);
                }.apply(e, n)),
                !(void 0 !== o && (t.exports = o));
        })("undefined" != typeof window ? window : this, function (t, e) {
            "use strict";
            function i(t, e) {
                for (var i in e) t[i] = e[i];
                return t;
            }
            function n(t) {
                var e = [];
                if (Array.isArray(t)) e = t;
                else if ("number" == typeof t.length) for (var i = 0; i < t.length; i++) e.push(t[i]);
                else e.push(t);
                return e;
            }
            function o(t, e, s) {
                return this instanceof o
                    ? ("string" == typeof t && (t = document.querySelectorAll(t)),
                      (this.elements = n(t)),
                      (this.options = i({}, this.options)),
                      "function" == typeof e ? (s = e) : i(this.options, e),
                      s && this.on("always", s),
                      this.getImages(),
                      r && (this.jqDeferred = new r.Deferred()),
                      void setTimeout(
                          function () {
                              this.check();
                          }.bind(this)
                      ))
                    : new o(t, e, s);
            }
            function s(t) {
                this.img = t;
            }
            function a(t, e) {
                (this.url = t), (this.element = e), (this.img = new Image());
            }
            var r = t.jQuery,
                l = t.console;
            (o.prototype = Object.create(e.prototype)),
                (o.prototype.options = {}),
                (o.prototype.getImages = function () {
                    (this.images = []), this.elements.forEach(this.addElementImages, this);
                }),
                (o.prototype.addElementImages = function (t) {
                    "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
                    var e = t.nodeType;
                    if (e && c[e]) {
                        for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                            var o = i[n];
                            this.addImage(o);
                        }
                        if ("string" == typeof this.options.background) {
                            var s = t.querySelectorAll(this.options.background);
                            for (n = 0; n < s.length; n++) {
                                var a = s[n];
                                this.addElementBackgroundImages(a);
                            }
                        }
                    }
                });
            var c = { 1: !0, 9: !0, 11: !0 };
            return (
                (o.prototype.addElementBackgroundImages = function (t) {
                    var e = getComputedStyle(t);
                    if (e)
                        for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n; ) {
                            var o = n && n[2];
                            o && this.addBackground(o, t), (n = i.exec(e.backgroundImage));
                        }
                }),
                (o.prototype.addImage = function (t) {
                    var e = new s(t);
                    this.images.push(e);
                }),
                (o.prototype.addBackground = function (t, e) {
                    var i = new a(t, e);
                    this.images.push(i);
                }),
                (o.prototype.check = function () {
                    function t(t, i, n) {
                        setTimeout(function () {
                            e.progress(t, i, n);
                        });
                    }
                    var e = this;
                    return (
                        (this.progressedCount = 0),
                        (this.hasAnyBroken = !1),
                        this.images.length
                            ? void this.images.forEach(function (e) {
                                  e.once("progress", t), e.check();
                              })
                            : void this.complete()
                    );
                }),
                (o.prototype.progress = function (t, e, i) {
                    this.progressedCount++,
                        (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
                        this.emitEvent("progress", [this, t, e]),
                        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t),
                        this.progressedCount == this.images.length && this.complete(),
                        this.options.debug && l && l.log("progress: " + i, t, e);
                }),
                (o.prototype.complete = function () {
                    var t = this.hasAnyBroken ? "fail" : "done";
                    if (((this.isComplete = !0), this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred)) {
                        var e = this.hasAnyBroken ? "reject" : "resolve";
                        this.jqDeferred[e](this);
                    }
                }),
                (s.prototype = Object.create(e.prototype)),
                (s.prototype.check = function () {
                    var t = this.getIsImageComplete();
                    return t
                        ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
                        : ((this.proxyImage = new Image()),
                          this.proxyImage.addEventListener("load", this),
                          this.proxyImage.addEventListener("error", this),
                          this.img.addEventListener("load", this),
                          this.img.addEventListener("error", this),
                          void (this.proxyImage.src = this.img.src));
                }),
                (s.prototype.getIsImageComplete = function () {
                    return this.img.complete && void 0 !== this.img.naturalWidth;
                }),
                (s.prototype.confirm = function (t, e) {
                    (this.isLoaded = t), this.emitEvent("progress", [this, this.img, e]);
                }),
                (s.prototype.handleEvent = function (t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t);
                }),
                (s.prototype.onload = function () {
                    this.confirm(!0, "onload"), this.unbindEvents();
                }),
                (s.prototype.onerror = function () {
                    this.confirm(!1, "onerror"), this.unbindEvents();
                }),
                (s.prototype.unbindEvents = function () {
                    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
                }),
                (a.prototype = Object.create(s.prototype)),
                (a.prototype.check = function () {
                    this.img.addEventListener("load", this), this.img.addEventListener("error", this), (this.img.src = this.url);
                    var t = this.getIsImageComplete();
                    t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
                }),
                (a.prototype.unbindEvents = function () {
                    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
                }),
                (a.prototype.confirm = function (t, e) {
                    (this.isLoaded = t), this.emitEvent("progress", [this, this.element, e]);
                }),
                (o.makeJQueryPlugin = function (e) {
                    (e = e || t.jQuery),
                        e &&
                            ((r = e),
                            (r.fn.imagesLoaded = function (t, e) {
                                var i = new o(this, t, e);
                                return i.jqDeferred.promise(r(this));
                            }));
                }),
                o.makeJQueryPlugin(),
                o
            );
        });
    },
    function (t, e, i) {
        var n, o;
        !(function (s, a) {
            (n = a), (o = "function" == typeof n ? n.call(e, i, e, t) : n), !(void 0 !== o && (t.exports = o));
        })("undefined" != typeof window ? window : this, function () {
            "use strict";
            function t() {}
            var e = t.prototype;
            return (
                (e.on = function (t, e) {
                    if (t && e) {
                        var i = (this._events = this._events || {}),
                            n = (i[t] = i[t] || []);
                        return n.indexOf(e) == -1 && n.push(e), this;
                    }
                }),
                (e.once = function (t, e) {
                    if (t && e) {
                        this.on(t, e);
                        var i = (this._onceEvents = this._onceEvents || {}),
                            n = (i[t] = i[t] || {});
                        return (n[e] = !0), this;
                    }
                }),
                (e.off = function (t, e) {
                    var i = this._events && this._events[t];
                    if (i && i.length) {
                        var n = i.indexOf(e);
                        return n != -1 && i.splice(n, 1), this;
                    }
                }),
                (e.emitEvent = function (t, e) {
                    var i = this._events && this._events[t];
                    if (i && i.length) {
                        (i = i.slice(0)), (e = e || []);
                        for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
                            var s = i[o],
                                a = n && n[s];
                            a && (this.off(t, s), delete n[s]), s.apply(this, e);
                        }
                        return this;
                    }
                }),
                (e.allOff = function () {
                    delete this._events, delete this._onceEvents;
                }),
                t
            );
        });
    },
    function (t, e, i) {
        var n = i(1);
        n.fn.alterClass = function (t, e) {
            var i = this;
            if (t.indexOf("*") === -1) return i.removeClass(t), e ? i.addClass(e) : i;
            var o = new RegExp("\\s" + t.replace(/\*/g, "[A-Za-z0-9-_]+").split(" ").join("\\s|\\s") + "\\s", "g");
            return (
                i.each(function (t, e) {
                    for (var i = " " + e.className + " "; o.test(i); ) i = i.replace(o, " ");
                    e.className = n.trim(i);
                }),
                e ? i.addClass(e) : i
            );
        };
    },
    function (t, e, i) {
        /*!
         * smoothState.js is jQuery plugin that progressively enhances
         * page loads to behave more like a single-page application.
         *
         * @author  Miguel Ãngel PÃ©rez   reachme@miguel-perez.com
         * @see     http://smoothstate.com
         *
         */
        !(function (e) {
            "use strict";
            "object" == typeof t && "object" == typeof t.exports ? e(i(1), window, document) : e(jQuery, window, document);
        })(function (t, e, i, n) {
            "use strict";
            if (!e.history.pushState)
                return (
                    (t.fn.smoothState = function () {
                        return this;
                    }),
                    void (t.fn.smoothState.options = {})
                );
            if (!t.fn.smoothState) {
                var o = t("html, body"),
                    s = e.console,
                    a = {
                        debug: !1,
                        anchors: "a",
                        hrefRegex: "",
                        forms: "form",
                        allowFormCaching: !1,
                        repeatDelay: 500,
                        blacklist: ".no-smoothState",
                        prefetch: !1,
                        prefetchOn: "mouseover touchstart",
                        prefetchBlacklist: ".no-prefetch",
                        cacheLength: 0,
                        loadingClass: "is-loading",
                        scroll: !0,
                        alterRequest: function (t) {
                            return t;
                        },
                        alterChangeState: function (t, e, i) {
                            return t;
                        },
                        onBefore: function (t, e) {},
                        onStart: { duration: 0, render: function (t) {} },
                        onProgress: { duration: 0, render: function (t) {} },
                        onReady: {
                            duration: 0,
                            render: function (t, e) {
                                t.html(e);
                            },
                        },
                        onAfter: function (t, e) {},
                    },
                    r = {
                        isExternal: function (t) {
                            var i = t.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
                            return (
                                ("string" == typeof i[1] && i[1].length > 0 && i[1].toLowerCase() !== e.location.protocol) ||
                                ("string" == typeof i[2] && i[2].length > 0 && i[2].replace(new RegExp(":(" + { "http:": 80, "https:": 443 }[e.location.protocol] + ")?$"), "") !== e.location.host)
                            );
                        },
                        stripHash: function (t) {
                            return t.replace(/#.*/, "");
                        },
                        isHash: function (t, i) {
                            i = i || e.location.href;
                            var n = t.indexOf("#") > -1,
                                o = r.stripHash(t) === r.stripHash(i);
                            return n && o;
                        },
                        translate: function (e) {
                            var i = { dataType: "html", type: "GET" };
                            return (e = "string" == typeof e ? t.extend({}, i, { url: e }) : t.extend({}, i, e));
                        },
                        shouldLoadAnchor: function (t, e, i) {
                            var o = t.prop("href");
                            return !(r.isExternal(o) || r.isHash(o) || t.is(e) || t.prop("target") || (typeof i !== n && "" !== i && t.prop("href").search(i) === -1));
                        },
                        clearIfOverCapacity: function (t, e) {
                            return (
                                Object.keys ||
                                    (Object.keys = function (t) {
                                        var e,
                                            i = [];
                                        for (e in t) Object.prototype.hasOwnProperty.call(t, e) && i.push(e);
                                        return i;
                                    }),
                                Object.keys(t).length > e && (t = {}),
                                t
                            );
                        },
                        storePageIn: function (e, i, n, o, s) {
                            var a = t("<html></html>").append(t(n));
                            return (e[i] = { status: "loaded", title: a.find("title").first().text(), html: a.find("#" + o), doc: n, state: s }), e;
                        },
                        triggerAllAnimationEndEvent: function (e, i) {
                            i = " " + i || "";
                            var n = 0,
                                o = "animationstart webkitAnimationStart oanimationstart MSAnimationStart",
                                s = "animationend webkitAnimationEnd oanimationend MSAnimationEnd",
                                a = "allanimationend",
                                l = function (i) {
                                    t(i.delegateTarget).is(e) && (i.stopPropagation(), n++);
                                },
                                c = function (i) {
                                    t(i.delegateTarget).is(e) && (i.stopPropagation(), n--, 0 === n && e.trigger(a));
                                };
                            e.on(o, l),
                                e.on(s, c),
                                e.on("allanimationend" + i, function () {
                                    (n = 0), r.redraw(e);
                                });
                        },
                        redraw: function (t) {
                            t.height();
                        },
                    },
                    l = function (i) {
                        if (null !== i.state) {
                            var n = e.location.href,
                                o = t("#" + i.state.id),
                                s = o.data("smoothState"),
                                a = s.href !== n && !r.isHash(n, s.href),
                                l = i.state !== s.cache[s.href].state;
                            (a || l) && (l && s.clear(s.href), s.load(n, !1));
                        }
                    },
                    c = function (a, l) {
                        var c = t(a),
                            u = c.prop("id"),
                            h = null,
                            f = !1,
                            d = {},
                            p = {},
                            g = e.location.href,
                            m = function (t) {
                                (t = t || !1), t && d.hasOwnProperty(t) ? delete d[t] : (d = {}), (c.data("smoothState").cache = d);
                            },
                            v = function (e, i) {
                                i = i || t.noop;
                                var n = r.translate(e);
                                if (((d = r.clearIfOverCapacity(d, l.cacheLength)), !d.hasOwnProperty(n.url) || "undefined" != typeof n.data)) {
                                    d[n.url] = { status: "fetching" };
                                    var o = t.ajax(n);
                                    o.done(function (t) {
                                        r.storePageIn(d, n.url, t, u), (c.data("smoothState").cache = d);
                                    }),
                                        o.fail(function () {
                                            d[n.url].status = "error";
                                        }),
                                        i && o.always(i);
                                }
                            },
                            y = function () {
                                if (h) {
                                    var e = t(h, c);
                                    if (e.length) {
                                        var i = e.offset().top;
                                        o.scrollTop(i);
                                    }
                                    h = null;
                                }
                            },
                            w = function (n) {
                                var a = "#" + u,
                                    r = d[n] ? t(d[n].html.html()) : null;
                                r.length
                                    ? ((i.title = d[n].title),
                                      (c.data("smoothState").href = n),
                                      l.loadingClass && o.removeClass(l.loadingClass),
                                      l.onReady.render(c, r),
                                      c.one("ss.onReadyEnd", function () {
                                          (f = !1), l.onAfter(c, r), l.scroll && y(), T(c);
                                      }),
                                      e.setTimeout(function () {
                                          c.trigger("ss.onReadyEnd");
                                      }, l.onReady.duration))
                                    : !r && l.debug && s
                                    ? s.warn("No element with an id of " + a + " in response from " + n + " in " + d)
                                    : (e.location = n);
                            },
                            b = function (t, i, n) {
                                var a = r.translate(t);
                                "undefined" == typeof i && (i = !0), "undefined" == typeof n && (n = !0);
                                var h = !1,
                                    f = !1,
                                    g = {
                                        loaded: function () {
                                            var t = h ? "ss.onProgressEnd" : "ss.onStartEnd";
                                            f && h
                                                ? f && w(a.url)
                                                : c.one(t, function () {
                                                      w(a.url), n || m(a.url);
                                                  }),
                                                i && ((p = l.alterChangeState({ id: u }, d[a.url].title, a.url)), (d[a.url].state = p), e.history.pushState(p, d[a.url].title, a.url)),
                                                f && !n && m(a.url);
                                        },
                                        fetching: function () {
                                            h ||
                                                ((h = !0),
                                                c.one("ss.onStartEnd", function () {
                                                    l.loadingClass && o.addClass(l.loadingClass),
                                                        l.onProgress.render(c),
                                                        e.setTimeout(function () {
                                                            c.trigger("ss.onProgressEnd"), (f = !0);
                                                        }, l.onProgress.duration);
                                                })),
                                                e.setTimeout(function () {
                                                    d.hasOwnProperty(a.url) && g[d[a.url].status]();
                                                }, 10);
                                        },
                                        error: function () {
                                            l.debug && s ? s.log("There was an error loading: " + a.url) : (e.location = a.url);
                                        },
                                    };
                                d.hasOwnProperty(a.url) || v(a),
                                    l.onStart.render(c),
                                    e.setTimeout(function () {
                                        l.scroll && o.scrollTop(0), c.trigger("ss.onStartEnd");
                                    }, l.onStart.duration),
                                    g[d[a.url].status]();
                            },
                            _ = function (e) {
                                var i,
                                    n = t(e.currentTarget);
                                r.shouldLoadAnchor(n, l.blacklist, l.hrefRegex) && !f && (e.stopPropagation(), (i = r.translate(n.prop("href"))), (i = l.alterRequest(i)), v(i));
                            },
                            $ = function (e) {
                                var i = t(e.currentTarget);
                                if (!e.metaKey && !e.ctrlKey && r.shouldLoadAnchor(i, l.blacklist, l.hrefRegex) && (e.stopPropagation(), e.preventDefault(), !x())) {
                                    M();
                                    var n = r.translate(i.prop("href"));
                                    (f = !0), (h = i.prop("hash")), (n = l.alterRequest(n)), l.onBefore(i, c), b(n);
                                }
                            },
                            k = function (e) {
                                var i = t(e.currentTarget);
                                if (!i.is(l.blacklist) && (e.preventDefault(), e.stopPropagation(), !x())) {
                                    M();
                                    var o = { url: i.prop("action"), data: i.serialize(), type: i.prop("method") };
                                    (f = !0), (o = l.alterRequest(o)), "get" === o.type.toLowerCase() && (o.url = o.url + "?" + o.data), l.onBefore(i, c), b(o, n, l.allowFormCaching);
                                }
                            },
                            C = 0,
                            x = function () {
                                var t = null === l.repeatDelay,
                                    e = parseInt(Date.now()) > C;
                                return !(t || e);
                            },
                            M = function () {
                                C = parseInt(Date.now()) + parseInt(l.repeatDelay);
                            },
                            T = function (t) {
                                l.anchors && l.prefetch && t.find(l.anchors).not(l.prefetchBlacklist).on(l.prefetchOn, null, _);
                            },
                            S = function (t) {
                                l.anchors && (t.on("click", l.anchors, $), T(t)), l.forms && t.on("submit", l.forms, k);
                            },
                            A = function () {
                                var t = c.prop("class");
                                c.removeClass(t), r.redraw(c), c.addClass(t);
                            };
                        return (
                            (l = t.extend({}, t.fn.smoothState.options, l)),
                            null === e.history.state ? ((p = l.alterChangeState({ id: u }, i.title, g)), e.history.replaceState(p, i.title, g)) : (p = {}),
                            r.storePageIn(d, g, i.documentElement.outerHTML, u, p),
                            r.triggerAllAnimationEndEvent(c, "ss.onStartEnd ss.onProgressEnd ss.onEndEnd"),
                            S(c),
                            { href: g, cache: d, clear: m, load: b, fetch: v, restartCSSAnimations: A }
                        );
                    },
                    u = function (e) {
                        return this.each(function () {
                            var i = this.tagName.toLowerCase();
                            this.id && "body" !== i && "html" !== i && !t.data(this, "smoothState")
                                ? t.data(this, "smoothState", new c(this, e))
                                : !this.id && s
                                ? s.warn("Every smoothState container needs an id but the following one does not have one:", this)
                                : ("body" !== i && "html" !== i) || !s || s.warn("The smoothstate container cannot be the " + this.tagName + " tag");
                        });
                    };
                (e.onpopstate = l), (t.smoothStateUtility = r), (t.fn.smoothState = u), (t.fn.smoothState.options = a);
            }
        });
    },
    function (t, e, i) {
        var n = i(1),
            o = i(3),
            s = {
                init: function () {
                    (this.$window = n(window)), (this.$title = n(".site-branding--title")), this.$window.on("scroll", this.onScroll);
                },
                onScroll: function () {
                    this.shouldHideTitle() ? this.$title.addClass("is--gels") : this.$title.removeClass("is--gels");
                },
                shouldHideTitle: function () {
                    return this.$window.scrollTop() > 5;
                },
                deinit: function () {
                    this.$window.off("scroll", this.onScroll);
                },
            };
        o.bindAll(s, "onScroll"), (t.exports = s);
    },
    function (t, e, i) {
        var n = {
            init: function () {
                if (!Modernizr.inputtypes.date) {
                    var t = document.querySelectorAll(".feed-filter__date-input");
                    t.length &&
                        i.e(1, function (e) {
                            var n = i(10);
                            n(t).maskPattern("9999-99-99");
                        });
                }
            },
        };
        t.exports = n;
    },
    ,
    function (t, e, i) {
        var n = i(1),
            o = i(3),
            s = {
                init: function () {
                    (this.$window = n(window)),
                        (this.$document = n(document)),
                        (this.$dotNav = n(".dot-nav")),
                        this.$dotNav.length &&
                            ((this.$dotNavLink = n(".dot-nav__list a")),
                            (this.$dotNavTrigger = n(".js-dot-nav-trigger")),
                            (this.$dotNavListItem = n(".dot-nav__list-item")),
                            (this.ticking = !1),
                            this.setUpNav(),
                            this.$window.on("scroll.dotnav", this.throttleScroll),
                            this.$dotNavTrigger.on("click.dotnav", this.smoothScroll));
                },
                throttleScroll: function () {
                    var t = this;
                    this.ticking ||
                        window.requestAnimationFrame(function () {
                            t.onScroll(), (t.ticking = !1);
                        }),
                        (this.ticking = !0);
                },
                onScroll: function () {
                    var t = this,
                        e = n(".dot-nav-scroll-section").first(),
                        i = n(".dot-nav-scroll-section").last(),
                        o = n(document).scrollTop();
                    o + 1 >= e.position().top && o < i.offset().top + i.height() - this.$window.height() ? this.$dotNav.addClass("dot-nav--in-view") : this.$dotNav.removeClass("dot-nav--in-view"),
                        this.$dotNavLink.each(function () {
                            var e = n(this),
                                i = n(e.attr("href"));
                            i.position().top <= o + 1 && i.position().top + i.height() >= o + 1
                                ? (t.$dotNavListItem.removeClass("dot-nav__list-item--active"), e.parents(".dot-nav__list-item").addClass("dot-nav__list-item--active"))
                                : e.parents(".dot-nav__list-item").removeClass("dot-nav__list-item--active");
                        });
                },
                smoothScroll: function (t) {
                    t.preventDefault(), n("body").addClass("dot-nav-is-scrolling");
                    var e = n(t.currentTarget).find("a").attr("href"),
                        i = n(e);
                    n("body, html").animate({ scrollTop: i.offset().top }, 400, "swing", function () {
                        (location.hash = e), i.focus(), i.is(":focus") || (i.attr("tabindex", "-1"), i.focus(), n("body").removeClass("dot-nav-is-scrolling"));
                    });
                },
                setUpNav: function () {
                    var t = this.$dotNav.width();
                    this.$dotNav.css({ marginBottom: (t / 2) * -1 });
                },
                deinit: function () {
                    this.$dotNav.length && (this.$window.off("scroll.dotnav"), this.$dotNavTrigger.off("click.dotnav"));
                },
            };
        o.bindAll(s, "throttleScroll", "onScroll", "smoothScroll"), (t.exports = s);
    },
    function (t, e, i) {
        var n,
            o = i(1),
            s = {
                init: function () {
                    (this.$eventLanding = o(".event-list--landing")),
                        this.$eventLanding.length &&
                            i.e(
                                2,
                                function (t) {
                                    (n = i(13)), this.setup();
                                }.bind(this)
                            );
                },
                setup: function () {
                    var t = o(".event-list__container").imagesLoaded(function () {
                        new n(t.get(0), { itemSelector: ".l--tease", resize: !0, stamp: ".stamp", transitionDuration: "0" }), o(".event-list").css({ opacity: "1" });
                    });
                },
            };
        t.exports = s;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, i) {
        var n,
            o = i(1),
            s = i(3),
            a = {
                init: function () {
                    (this.$window = o(window)),
                        (this.$siteHeader = o(".l--header")),
                        (this.$feature = o(".no-touchevents .feature-header")),
                        this.$feature.length &&
                            i.e(
                                3,
                                function (t) {
                                    (n = i(23)), i(24), this.setup();
                                }.bind(this)
                            );
                },
                setup: function () {
                    this.$feature.on("mousemove", this.onMouseMoveOverFeature), this.$window.on("scroll", this.onScroll), this.$window.trigger("scroll");
                },
                onMouseMoveOverFeature: function (t) {
                    var e = Math.ceil(this.$feature.width() / 2),
                        i = Math.ceil(this.$feature.height() / 2),
                        o = t.pageX - e,
                        s = t.pageY - i,
                        a = s / i,
                        r = -(o / e),
                        l = Math.sqrt(Math.pow(a, 2) + Math.pow(r, 2)),
                        c = 10 * l;
                    n.set(".base-feature__image", { transform: "rotate3d(" + a + ", " + r + ", 0, " + c + "deg)" });
                },
                onScroll: function () {
                    this.isOverFeature() ? this.$siteHeader.removeClass("is--off-feature").addClass("is--over-feature") : this.$siteHeader.removeClass("is--over-feature").addClass("is--off-feature");
                },
                isOverFeature: function () {
                    return this.$window.scrollTop() < this.$feature.outerHeight();
                },
                deinit: function () {
                    this.$feature.length && this.$window.off("scroll", this.onScroll), this.$siteHeader.removeClass("is--off-feature is--over-feature").alterClass("feature-theme--*", "");
                },
            };
        s.bindAll(a, "onScroll", "onMouseMoveOverFeature"), (t.exports = a);
    },
    ,
    ,
    function (t, e, i) {
        var n = i(1),
            o = i(3),
            s = {
                init: function () {
                    (this.$form = n(".feed-filter__form")),
                        (this.$sectionHeading = n(".feed-filter__section-heading", this.$form)),
                        this.$form.on("change", "input,select", this.onChange),
                        this.$sectionHeading.on("click", this.onClickSectionHeading),
                        this.$form.find("select.resizeselect").each(this.resizeSelect);
                },
                onChange: function (t) {
                    n(t.currentTarget).closest(".feed-filter__form").find("select.resizeselect").each(this.resizeSelect).end().submit();
                },
                onClickSectionHeading: function (t) {
                    n(t.currentTarget).siblings(".feed-filter__section-block").toggleClass("feed-filter__section-block--active");
                },
                resizeSelect: function () {
                    var t,
                        e = n(this),
                        i = e.find("option:selected").text(),
                        o = n('<span class="mono">').html(i);
                    o.appendTo("body"), (t = o.width() + 3), o.remove(), e.width(t), e.parent().addClass("resized");
                },
                deinit: function () {
                    this.$form.off("change", "input", this.onChange), this.$sectionHeading.off("click", this.onClickSectionHeading);
                },
            };
        o.bindAll(s, "onChange", "onClickSectionHeading"), (t.exports = s);
    },
    function (t, e, i) {
        var n,
            o = i(1),
            s = i(3),
            a = {
                init: function () {
                    (this.$window = o(window)),
                        (this.gallery = o(".floating-gallery")),
                        (this.imageContainer = o(".floating-gallery__images")),
                        (this.plusBtn = o(".js-gallery-plus")),
                        (this.minusBtn = o(".js-gallery-minus")),
                        (this.galleryMouse = o(".js-gallery-mouse")),
                        (this.images = o(".floating-gallery__image")),
                        (this.$rangeSlider = o(".floating-gallery__range")),
                        (this.totalImages = this.images.length),
                        (this.imageAttrObjs = []),
                        (this.plusIsDown = 0),
                        (this.minusIsDown = 0),
                        (this.zStart = 0),
                        (this.zEnd = 0),
                        this.zMax,
                        this.gallery.length &&
                            this.images.length &&
                            i.e(
                                4,
                                function (t) {
                                    (n = i(23)), i(24), i(27), this.initFloatingGallery(), this.animate();
                                }.bind(this)
                            );
                },
                initFloatingGallery: function () {
                    this.setupGallery(), this.bindEvents();
                },
                bindEvents: function () {
                    this.gallery.on("mousemove.fGallery", this.throttle.bind(this, this.handleMouseMove)),
                        this.galleryMouse.on("mousedown.fGallery", this.throttle.bind(this, this.handleMouseDown)),
                        this.galleryMouse.on("mouseup.fGallery", this.throttle.bind(this, this.handleMouseUp)),
                        this.$rangeSlider.on("input.fGallery", this.throttle.bind(this, this.onChange)),
                        this.$window.on("resize.fGallery", this.throttle.bind(this, this.resizeWidth)),
                        this.gallery.on("contextmenu.fGallery", function (t) {
                            t.preventDefault();
                        }),
                        this.$window.on("deviceorientation.fGallery", this.throttle.bind(this, this.handleMobileTilt));
                },
                throttle: function (t, e) {
                    this.ticking &&
                        window.requestAnimationFrame(function () {
                            t.call(this, e), (this.ticking = !1);
                        }),
                        (this.ticking = !0);
                },
                setupGallery: function () {
                    (this.imageAttrObjs = []), (this.zMax = 10 * this.$window.width() > 1e4 ? 1e4 : 10 * this.$window.width());
                    for (var t = 0; t < this.totalImages; t++) {
                        var e = this.calculatePosition(t, this.images.eq(t).height(), this.images.eq(t).width());
                        this.imageAttrObjs.push({ translateZ: (t / this.totalImages) * (this.zMax * -1), opacity: 1 - t / this.totalImages, zIndex: this.totalImages + 1 - t, top: e.top, left: e.left });
                    }
                    (this.zStart = this.imageAttrObjs[this.imageAttrObjs.length - 1].translateZ), (this.zEnd = this.zStart), this.$rangeSlider.attr("max", ((this.totalImages - 1) / this.totalImages) * this.zMax), this.placeImages();
                },
                resizeWidth: function () {
                    this.setupGallery();
                },
                placeImages: function () {
                    var t = this;
                    this.imageAttrObjs.map(function (e, i) {
                        var n = t.images.eq(i);
                        n.css({ transform: "translate3d(" + e.left + "px," + e.top + "px," + e.translateZ + "px)", opacity: e.opacity, zIndex: e.zIndex }), t.imageContainer.append(n);
                    }),
                        this.gallery.hasClass("floating-gallery--active") ? "" : this.gallery.addClass("floating-gallery--active");
                },
                calculatePosition: function (t, e, i) {
                    var n,
                        o,
                        s = t % 4,
                        a = this.gallery.height() - e,
                        r = this.gallery.width() - i;
                    switch (s) {
                        case 0:
                            (n = this.getRandomInt(0, a / 2)), (o = this.getRandomInt(0, r / 2));
                            break;
                        case 1:
                            (n = this.getRandomInt(0, a / 2)), (o = this.getRandomInt(r / 2, r));
                            break;
                        case 2:
                            (n = this.getRandomInt(a / 2, a)), (o = this.getRandomInt(r / 2, r));
                            break;
                        case 3:
                            (n = this.getRandomInt(a / 2, a)), (o = this.getRandomInt(0, r / 2));
                    }
                    return { top: n, left: o };
                },
                onChange: function (t) {
                    var e = t.target.value;
                    this.mobileAnimate(e);
                },
                mobileAnimate: function (t) {
                    var e = parseInt(t);
                    this.mobileMove(e);
                },
                mobileMove: function (t) {
                    var e = this;
                    (this.zEnd = this.imageAttrObjs[this.imageAttrObjs.length - 1].translateZ),
                        this.imageAttrObjs.map(function (i, n) {
                            var o,
                                s,
                                a,
                                r,
                                l = e.images.eq(n);
                            (o = (n / e.totalImages) * (e.zMax * -1)),
                                (s = o + t),
                                (a = 1 - n / e.totalImages),
                                (r = a + (1 * t) / e.$rangeSlider.attr("max")),
                                (i.opacity = r),
                                (i.translateZ = s),
                                l.css({ transform: "translate3d(" + i.left + "px," + i.top + "px," + s + "px)", opacity: r });
                        });
                },
                animate: function () {
                    window.requestAnimationFrame(this.animate.bind(this)),
                        this.plusIsDown
                            ? this.zEnd < 0
                                ? this.move("plus")
                                : window.cancelAnimationFrame(this.animate.bind(this))
                            : this.minusIsDown && this.zEnd >= this.zStart
                            ? this.move("minus")
                            : window.cancelAnimationFrame(this.animate.bind(this));
                },
                move: function (t) {
                    var e = this;
                    this.zEnd = this.imageAttrObjs[this.imageAttrObjs.length - 1].translateZ;
                    var i = this.imageAttrObjs[0].translateZ;
                    this.$rangeSlider.val(i),
                        this.$rangeSlider.trigger("change"),
                        this.imageAttrObjs.map(function (i, o) {
                            var s,
                                a,
                                r = e.images.eq(o),
                                l = (1 / e.totalImages) * 1e3,
                                c = l / 1e4;
                            "plus" === t ? ((s = i.translateZ + l), (a = i.opacity + c)) : "minus" === t && ((s = i.translateZ - l), (a = i.opacity - c)),
                                (i.translateZ = s),
                                (i.opacity = a),
                                n.set(r, { x: i.left, y: i.top }),
                                n.to(r, 1.5, { ease: Power2.easeOut, z: s, opacity: a });
                        });
                },
                handleMouseDown: function (t) {
                    o(t.currentTarget).hasClass("js-gallery-plus") ? (this.plusIsDown = 1) : (this.minusIsDown = 1);
                },
                handleMouseUp: function (t) {
                    o(t.currentTarget).hasClass("js-gallery-plus") ? (this.plusIsDown = 0) : (this.minusIsDown = 0);
                },
                handleMouseMove: function (t) {
                    var e = window.outerWidth,
                        i = window.outerHeight,
                        s = (t.clientX - e / 2) / (e / 40),
                        a = (t.clientY - i / 2) / (e / 40),
                        r = this;
                    this.imageAttrObjs.map(function (t, e) {
                        var i = r.images.eq(e).find("img");
                        n.to(i, 0.4, { x: s * (e + 1), y: a * (e + 1) });
                    });
                    var l = Math.ceil(o(".floating-gallery-header").width() / 2),
                        c = Math.ceil(o(".floating-gallery-header").height() / 2),
                        u = t.pageX - l,
                        h = t.pageY - c,
                        f = h / c,
                        d = -(u / l),
                        p = Math.sqrt(Math.pow(f, 2) + Math.pow(d, 2)),
                        g = 20 * p;
                    n.set(".floating-gallery-heading", { transform: "rotate3d(" + f + ", " + d + ", 0, " + g + "deg)" });
                },
                handleMobileTilt: function (t) {
                    var e,
                        i,
                        o = 0,
                        s = this,
                        a = 40;
                    this.$window.on(
                        "orientationChanged",
                        function (t) {
                            o = t.orientation;
                        },
                        !0
                    ),
                        (e = 0 == o ? t.originalEvent.gamma : 90 == o ? t.originalEvent.beta : t.originalEvent.beta * -1),
                        (i = 0 == o ? t.originalEvent.beta : 90 == o ? t.originalEvent.gamma : t.originalEvent.gamma * -1),
                        (e = (e / 180) * a),
                        (i = (i / 180) * a),
                        this.imageAttrObjs.map(function (t, o) {
                            var a = s.images.eq(o).find("img");
                            n.to(a, 0.4, { x: e * (o + 1), y: i * (o + 1) });
                        });
                },
                getRandomInt: function (t, e) {
                    return Math.random() * (e - t) + t;
                },
                deinit: function () {
                    this.gallery.off("mousemove.fGallery"),
                        this.galleryMouse.off("mousedown.fGallery"),
                        this.galleryMouse.off("mouseup.fGallery"),
                        this.$rangeSlider.off("input.fGallery"),
                        this.$window.off("resize.fGallery"),
                        this.gallery.off("contextmenu.fGallery"),
                        this.$window.off("deviceorientation.fGallery");
                },
            };
        s.bindAll(a, "throttle", "resizeWidth", "handleMouseMove", "handleMouseDown", "handleMouseUp", "onChange", "handleMobileTilt"), (t.exports = a);
    },
    ,
    function (t, e) {
        var i = {
            init: function () {
                var t = document.querySelector(".aside-inner"),
                    e = [].slice.call(document.querySelectorAll(".gallery"));
                if (0 !== e.length && null !== t && void 0 !== t)
                    for (var i = t.getBoundingClientRect().height + t.getBoundingClientRect().top, n = 0; n < e.length; n++) {
                        var o = e[n],
                            s = o.getBoundingClientRect().top;
                        s < i && o.classList.add("constrain-gallery");
                    }
            },
        };
        t.exports = i;
    },
    function (t, e, i) {
        var n = i(1),
            o = i(3),
            s = {
                init: function () {
                    var t = (n("html"), n(".color-theme")),
                        e = n(".feature-header, .l--header");
                    (this.hotkeyMethodMap = {
                        49: function () {
                            t.alterClass("theme--*", "theme--black");
                        },
                        50: function () {
                            t.alterClass("theme--*", "theme--red");
                        },
                        51: function () {
                            t.alterClass("theme--*", "theme--blue");
                        },
                        52: function () {
                            t.alterClass("theme--*", "theme--pastel-blue");
                        },
                        53: function () {
                            t.alterClass("theme--*", "theme--pastel-green");
                        },
                        54: function () {
                            t.alterClass("theme--*", "theme--pastel-yellow");
                        },
                        55: function () {
                            t.alterClass("theme--*", "theme--soft-gray");
                        },
                        56: function () {
                            t.alterClass("theme--*", "theme--miami");
                        },
                        48: function () {
                            t.alterClass("theme--*", "theme--default"), e.alterClass("feature-theme--*", "feature-theme--default");
                        },
                    }),
                        n(document).on("keydown", this.onKeyDown);
                },
                onKeyDown: function (t) {
                    var e = t.which.toString(),
                        i = this.hotkeyMethodMap[e];
                    t.ctrlKey && o.isFunction(i) && i.call();
                },
                deinit: function () {
                    n(document).off("keydown", this.onKeyDown);
                },
            };
        o.bindAll(s, "onKeyDown"), (t.exports = s);
    },
    function (t, e, i) {
        var n = i(1),
            o = i(3),
            s = {
                STACK_OFFSET: 15,
                init: function () {
                    (this.$window = n(window)),
                        (this.$stacks = n(".base-tease__image-stack")),
                        this.$stacks.imagesLoaded(
                            function () {
                                this.setFigureHeights(this.$stacks),
                                    this.resetCaption(),
                                    this.$stacks.on("mousemove", this.onMouseMove),
                                    this.$stacks.on("mouseout", this.onMouseOut),
                                    this.$stacks.on("mouseleave", this.onMouseLeave),
                                    this.$window.on("resize", this.onResize);
                            }.bind(this)
                        );
                },
                setFigureHeights: function () {
                    var t = this.STACK_OFFSET;
                    this.$stacks.each(function () {
                        var e = n(".base-tease__figure", this),
                            i = 0;
                        n("img", e).each(function (e) {
                            var o = e * t + n(this).height();
                            o > i && (i = o);
                        }),
                            e.height(i);
                    });
                },
                onMouseMove: function (t) {
                    var e = n(".base-tease__figure img", t.currentTarget),
                        i = e.last().offset().left + e.last().width() - e.first().offset().left,
                        o = e.first().offset().left,
                        s = t.pageX,
                        a = i / e.length;
                    e.each(function (t) {
                        var e = n(this),
                            i = t * a + o,
                            r = (t + 1) * a + o;
                        if (i <= s && s < r && !e.hasClass("base-tease__image--active")) {
                            var l = e.index();
                            e.addClass("base-tease__image--active").siblings().removeClass("base-tease__image--active"),
                                n(".base-tease__caption-item").length && n(".base-tease__caption-item").eq(l).addClass("base-tease__caption-item--active").siblings().removeClass("base-tease__caption-item--active");
                        }
                    });
                },
                onMouseOut: function (t) {
                    n(".base-tease__figure img", t.currentTarget).removeClass("base-tease__image--active");
                },
                onMouseLeave: function () {
                    this.resetCaption();
                },
                resetCaption: function () {
                    n(".base-tease__caption-item").removeClass("base-tease__caption-item--active"), n(".base-tease__caption-item").first().addClass("base-tease__caption-item--active");
                },
                onResize: function () {
                    this.setFigureHeights();
                },
                deinit: function () {
                    this.$stacks.off("mousemove", this.onMouseMove), this.$stacks.off("mouseout", this.onMouseOut), this.$window.off("resize", this.onResize);
                },
            };
        o.bindAll(s, "onMouseMove", "onMouseLeave", "onResize"), (s.onResize = o.debounce(s.onResize, 250)), (t.exports = s);
    },
    function (t, e, n) {
        var o = n(1),
            s = {
                init: function () {
                    (this.data = ""),
                        (this.url = "https://api.instagram.com/v1/"),
                        (this.$instagramFeed = o(".js--instagram-feed")),
                        this.$instagramFeed.length &&
                            ((this.endpoint = this.$instagramFeed.data("endpoint")),
                            (this.id = this.$instagramFeed.data("id")),
                            (this.maxPosts = this.$instagramFeed.data("max-posts")),
                            (this.accessToken = this.$instagramFeed.data("access-token")),
                            this.getRecentPosts());
                },
                getRecentPosts: function () {
                    var t,
                        e = this.url + this.endpoint + "/" + this.id + "/media/recent?access_token=" + this.accessToken,
                        n = this;
                    o.ajax({
                        type: "GET",
                        dataType: "jsonp",
                        cache: !1,
                        url: e,
                        success: function (e) {
                            for (t = n.maxPosts || e.data.length, i = t; --i >= 0; ) {
                                var o = e.data[i];
                                n.$instagramFeed.prepend(
                                    '<article class="l--tease l--post-tease tease-md  l--format-default tease-has-thumbnail" role="article"><p class="base-tease__meta-item base-tease__meta-item--category post-tease__meta-item--category"><a href="' +
                                        o.link +
                                        '">' +
                                        n.convertDate(o.created_time) +
                                        '</a></p><div class="base-tease-inner post-tease-inner"><div class="base-tease__image-container"><a href="' +
                                        o.link +
                                        '" class="base-tease__image--link base-tease__image--image post-tease__image--link"><figure class="base-tease__figure post-tease__figure"><img src="' +
                                        o.images.standard_resolution.url +
                                        '" alt="" class="base-tease__image post-tease__image"></figure></a></div><div class="base-tease__text post-tease__text"><div class="base-tease__header post-tease__header"><h1 class="base-tease__heading post-tease__heading"><a href="' +
                                        o.link +
                                        '" class="base-tease__heading--link">' +
                                        o.caption.text.substring(0, 120) +
                                        '... </a><a href="https://www.instagram.com/' +
                                        o.user.username +
                                        '/" class="base-tease__heading--link">@' +
                                        o.user.username +
                                        "</a></h1></div></div></div></article>"
                                );
                            }
                        },
                    });
                },
                convertDate: function (t) {
                    var e = new Date(1e3 * t),
                        i = e.getMonth(),
                        n = e.getDate(),
                        o = e.getFullYear();
                    return i + "/" + n + "/" + o;
                },
            };
        t.exports = s;
    },
    function (t, e, i) {
        var n = i(1),
            o = i(3),
            s = {
                STROKE: 500,
                init: function () {
                    (this.$window = n(window)), (this.$rectangle = n(".loading__rectangle")), this.$window.on("resize", this.onResize), this.setStroke();
                },
                setStroke: function () {
                    var t = this.$window.width(),
                        e = this.$window.height(),
                        i = 2 * t + 2 * e,
                        n = this.STROKE,
                        o = i - n;
                    this.$rectangle.css({ "stroke-dasharray": n + " " + o, "stroke-dashoffset": i });
                },
                onResize: function () {
                    this.setStroke();
                },
                deinit: function () {
                    this.$window.off("resize", this.onResize);
                },
            };
        o.bindAll(s, "onResize"), (t.exports = s);
    },
    function (t, e, i) {
        var n = i(1),
            o = i(3),
            s = {
                TRANSITION_DELAY: 300,
                scrollbarWidth: 0,
                init: function () {
                    (this.$window = n(window)),
                        (this.$body = n("body")),
                        (this.$wrapper = n(".wrapper")),
                        (this.$siteNav = n(".site-nav")),
                        (this.$siteNavList = n(".site-nav-list")),
                        (this.$overlay = n(".menu-overlay")),
                        (this.$menuPanels = n(".site-nav--panel")),
                        (this.$menuToggles = n(".menu-item-toggle")),
                        (this.$disabledLinks = n(".letter-nav-item--link-disabled")),
                        (this.menus = n(".site-nav-link", this.$siteNav)
                            .map(function () {
                                return n(this).attr("aria-controls");
                            })
                            .get()),
                        this.$siteNav.on("click", ".site-nav-link", this.onToggleNavMenu),
                        this.$menuPanels.on("keydown", this.onMenuKeydown),
                        this.$menuPanels.on("focusout", this.onMenuFocusOut),
                        this.$overlay.on("click", this.onOverlayClick),
                        this.$menuToggles.on("click", this.onToggleSubmenu),
                        this.$disabledLinks.on("click", this.onClickDisabledLink),
                        this.calculateScrollbarWidth();
                },
                onToggleNavMenu: function (t) {
                    t.preventDefault();
                    var e = n(t.currentTarget),
                        i = e.attr("aria-controls"),
                        s = o.without(this.menus, i);
                    this.closeMenus(s), this.toggleMenu(i);
                },
                onMenuFocusOut: function (t) {
                    var e = n(t.currentTarget),
                        i = n('[aria-controls="' + t.currentTarget.id + '"]'),
                        o = t.relatedTarget && 0 === e.has(t.relatedTarget).length;
                    o && i.focus();
                },
                onMenuKeydown: function (t) {
                    var e = n('[aria-controls="' + t.currentTarget.id + '"]');
                    27 === t.keyCode && (t.stopPropagation(), e.trigger("click").focus());
                },
                onOverlayClick: function () {
                    this.closeMenus();
                },
                onToggleSubmenu: function (t) {
                    var e = n(t.currentTarget),
                        i = "true" === e.attr("aria-expanded");
                    i
                        ? e.text("More â–¼").attr({ "aria-expanded": !1, "aria-label": "show more" }).siblings("[aria-hidden]").attr("aria-hidden", !0)
                        : e.text("Less â–²").attr({ "aria-expanded": !0, "aria-label": "show less" }).siblings("[aria-hidden]").attr("aria-hidden", !1).find("a").first().focus();
                },
                onClickDisabledLink: function (t) {
                    t.preventDefault();
                },
                toggleMenu: function (t) {
                    var e = !this.$body.hasClass(t + "-is-open");
                    e ? this.openMenu(t) : this.closeMenu(t);
                },
                openMenu: function (t) {
                    var e = n("#" + t),
                        i = n('[aria-controls="' + t + '"]');
                    i.focus(),
                        e.show(),
                        o.delay(
                            function () {
                                e.scrollTop(0),
                                    this.scrollbarWidth && (this.$wrapper.css("margin-right", this.scrollbarWidth + "px"), this.$window.width() >= 600 && this.$siteNavList.css("margin-right", this.scrollbarWidth + "px")),
                                    this.$body.addClass(t + "-is-open"),
                                    this.toggleToolbarButton(i, !0);
                            }.bind(this),
                            10
                        );
                },
                closeMenu: function (t) {
                    var e = n("#" + t),
                        i = n('[aria-controls="' + t + '"]');
                    this.$body.removeClass(t + "-is-open"),
                        this.toggleToolbarButton(i, !1),
                        this.$wrapper.css("margin-right", ""),
                        this.$siteNavList.css("margin-right", ""),
                        o.delay(function () {
                            e.hide();
                        }, this.TRANSITION_DELAY);
                },
                toggleToolbarButton: function (t, e) {
                    var i = e ? "Close " + t.text() : t.text().replace("Close ", "");
                    t.attr({ "aria-pressed": e }).text(i);
                },
                closeMenus: function (t) {
                    (t = t || this.menus), t.map(this.closeMenu.bind(this));
                },
                calculateScrollbarWidth: function () {
                    var t = document.createElement("div");
                    document.body.appendChild(t), (this.scrollbarWidth = window.innerWidth - t.offsetWidth), document.body.removeChild(t);
                },
                deinit: function () {
                    this.$disabledLinks.off("click", this.onClickDisabledLink),
                        this.$siteNav.off("click", ".site-nav-link", this.onToggleNavMenu),
                        this.$menuPanels.off("keydown", this.onMenuKeydown),
                        this.$menuPanels.off("focusout", this.onMenuFocusOut),
                        this.$menuToggles.off("click", this.onToggleSubmenu),
                        this.$overlay.off("click", this.closeMenus),
                        this.closeMenus();
                },
            };
        o.bindAll(s, "onToggleNavMenu", "onMenuFocusOut", "onOverlayClick", "onClickDisabledLink"), (t.exports = s);
    },
    function (t, e, i) {
        var n = i(1),
            o = i(3),
            s = {
                init: function () {
                    (this.$toggles = n(".menu-item--more-toggle,.menu-item--less-toggle")), this.$toggles.on("click", this.onClick);
                },
                onClick: function (t) {
                    t.preventDefault();
                    var e = n(t.currentTarget);
                    e.hasClass("menu-item--more-toggle") ? this.showMore(e) : this.showLess(e);
                },
                showMore: function (t) {
                    t.css("display", "none").siblings(".menu-item--hidden").css("display", "block");
                },
                showLess: function (t) {
                    t.css("display", "none").siblings(".menu-item--hidden").css("display", "none").siblings(".menu-item--more-toggle").css("display", "block");
                },
                deinit: function () {
                    this.$toggles.off("click", this.onClick);
                },
            };
        o.bindAll(s, "onClick"), (t.exports = s);
    },
    function (t, e, i) {
        var n = i(1),
            o = i(3),
            s = {
                init: function () {
                    (this.$features = n(".news-feature-view .l--post-tease")), this.supported() && ((this.mql = matchMedia("(min-width: 768px)")), this.mql.addListener(this.toggle), this.toggle(this.mql));
                },
                supported: function () {
                    return window.matchMedia && !Modernizr.touchevents;
                },
                toggle: function (t) {
                    t.matches ? this.enable() : this.disable();
                },
                enable: function () {
                    this.$features.on("mouseenter", this.onMouseEnter), this.$features.on("mousemove", this.onMouseMove), this.$features.on("mouseleave", this.onMouseLeave);
                },
                disable: function () {
                    this.$features.find(".post-tease__image").removeAttr("style"), this.$features.off("mouseenter", this.onMouseEnter), this.$features.off("mousemove", this.onMouseMove), this.$features.off("mouseleave", this.onMouseLeave);
                },
                onMouseEnter: function (t) {
                    n(".post-tease__image", t.currentTarget).stop().fadeIn("fast");
                },
                onMouseMove: function (t) {
                    var e = n(t.currentTarget),
                        i = n(".post-tease__image", e),
                        o = e.offset(),
                        s = t.pageY - o.top,
                        a = t.pageX - o.left,
                        r = i.height(),
                        l = 0.5 * r - 60;
                    i.css({ top: s - 60, left: a + 60, marginTop: -l });
                },
                onMouseLeave: function (t) {
                    n(".post-tease__image", t.currentTarget).stop().fadeOut("fast");
                },
                deinit: function () {
                    this.mql && (this.$features.off("mouseenter", this.onMouseEnter), this.$features.off("mousemove", this.onMouseMove), this.$features.off("mouseleave", this.onMouseLeave), this.mql.removeListener(this.toggle));
                },
            };
        o.bindAll(s, "onMouseEnter", "onMouseMove", "onMouseLeave", "toggle"), (t.exports = s);
    },
    function (t, e, i) {
        var n,
            o,
            s = i(1),
            a = i(37).rgbToHsl,
            r = {
                init: function () {
                    (this.$publicationLandingContainer = s(".publications-list--landing")),
                        this.$publicationLandingContainer.length &&
                            Modernizr.imgcrossorigin &&
                            i.e(
                                5,
                                function (t) {
                                    (n = i(38)), (o = new n()), this.setup();
                                }.bind(this)
                            );
                },
                setup: function () {
                    this.$publicationLandingContainer.imagesLoaded(function () {
                        s(".l--publication-tease").each(function () {
                            var t = s(this).find(".base-tease__image").get(0);
                            if (t) {
                                var e = o.getColor(t, 1),
                                    i = a(e[0], e[1], e[2]),
                                    n = "hsla(" + i[0] + ", " + 100 * i[1] + "%, " + 100 * i[2] + "%, 1)";
                                s(this).find(".base-tease__text").css("background-color", n);
                            }
                        });
                    });
                },
            };
        t.exports = r;
    },
    function (t, e) {
        e.rgbToHsl = function (t, e, i) {
            (t /= 255), (e /= 255), (i /= 255);
            var n,
                o,
                s = Math.max(t, e, i),
                a = Math.min(t, e, i),
                r = (s + a) / 2;
            if (s === a) n = o = 0;
            else {
                var l = s - a;
                switch (((o = r > 0.5 ? l / (2 - s - a) : l / (s + a)), s)) {
                    case t:
                        n = (e - i) / l;
                        break;
                    case e:
                        n = 2 + (i - t) / l;
                        break;
                    case i:
                        n = 4 + (t - e) / l;
                }
                (n *= 60), n < 0 && (n += 360);
            }
            return r > 0.85 && (r -= 0.1), [n, o, r];
        };
    },
    ,
    function (t, e, i) {
        var n = i(1),
            o =
                (i(3),
                {
                    init: function () {
                        (this.$window = n(window)), (this.$tables = n(".responsive-table-breakdown")), this.checkToInit();
                    },
                    checkToInit: function () {
                        this.$tables.length && this.setupTables();
                    },
                    setupTables: function () {
                        for (var t = 0; t < this.$tables.length; t++) this.breakdownTables(this.$tables[t]);
                    },
                    breakdownTables: function (t) {
                        for (var e = n(t).find("thead"), i = n(e).find("tr"), o = n(t).find("tbody tr"), s = (window.innerWidth, 0); s < o.length - 1; s++) e.append(i.clone());
                    },
                    onResize: function () {
                        this.checkToInit();
                    },
                    deinit: function () {
                        this.$window.off("resize", this.onResize);
                    },
                });
        t.exports = o;
    },
    function (t, e, i) {
        var n = i(1),
            o = i(3),
            s = {
                imageSelector: 'img[class*="wp-image-"],.gallery-item img,.hero-image:not(.faculty-hero-image),.gallery-image',
                init: function () {
                    (this.$images = n(this.imageSelector, ".l--content")),
                        this.$images.length > 1 &&
                            ((this.$window = n(window)),
                            (this.$document = n(document)),
                            (this.$slideshow = n(".base-slideshow")),
                            (this.$slideContainer = n(".slideshow-slides")),
                            (this.$paginationContainer = n(".slideshow-pagination")),
                            (this.$prevLink = n(".pagination-previous-link", ".slideshow-pagination")),
                            (this.$nextLink = n(".pagination-next-link", ".slideshow-pagination")),
                            (this.$closeLink = n(".slideshow-close__link")),
                            this.$images.on("click", this.onClickImage),
                            this.$closeLink.on("click", this.onClickClose),
                            n(".pagination-previous-link,.pagination-next-link", this.$paginationContainer).on("click", this.onClickNavigation),
                            this.$document.on("keyup", this.onKeyUp),
                            this.$window.on("resize", this.onResize),
                            this.$images.imagesLoaded(this.load));
                },
                load: function () {
                    this.populateSlides();
                },
                onKeyUp: function (t) {
                    if (this.isOpen())
                        switch (t.which) {
                            case 27:
                                this.close();
                                break;
                            case 37:
                                this.previous();
                                break;
                            case 39:
                                this.next();
                                break;
                            case 9:
                                var e = t.target,
                                    i = !this.$slideshow.has(e).length;
                                if (!i) break;
                                t.shiftKey ? this.$nextLink.focus() : this.$prevLink.focus();
                        }
                },
                onClickImage: function (t) {
                    t.preventDefault(), t.stopPropagation(), this.open(n(t.currentTarget));
                },
                onClickClose: function (t) {
                    t.preventDefault(), this.close();
                },
                onClickNavigation: function (t) {
                    t.preventDefault(), n(t.currentTarget).hasClass("pagination-previous-link") ? this.previous() : this.next();
                },
                isOpen: function () {
                    return this.$slideshow.hasClass("slideshow-open");
                },
                open: function (t) {
                    var e = this.$images.index(t);
                    this.$slideshow
                        .show()
                        .delay(10)
                        .queue(
                            function (t) {
                                this.setImageMaxHeights(), this.$slides.eq(e).addClass("active"), this.$slideshow.addClass("slideshow-open"), t();
                            }.bind(this)
                        )
                        .delay(600)
                        .queue(
                            function (t) {
                                this.$closeLink.focus(), t();
                            }.bind(this)
                        );
                },
                close: function () {
                    this.$slideshow
                        .removeClass("slideshow-open")
                        .delay(300)
                        .queue(function (t) {
                            n(this).css("display", ""), t();
                        }),
                        this.$slides.removeClass("active");
                },
                previous: function () {
                    var t = this.$slides.filter(".active").index(),
                        e = t - 1 === -1 ? this.$slides.length - 1 : t - 1;
                    this.transitionOutCurrentSlide(), this.$slides.eq(t).removeClass("active").end().eq(e).addClass("active");
                },
                next: function () {
                    var t = this.$slides.filter(".active").index(),
                        e = t + 1 === this.$slides.length ? 0 : t + 1;
                    this.transitionOutCurrentSlide(), this.$slides.eq(t).removeClass("active").end().eq(e).addClass("active");
                },
                transitionOutCurrentSlide: function () {
                    this.$slides
                        .filter(".active")
                        .addClass("out")
                        .delay(700)
                        .queue(function (t) {
                            n(this).removeClass("out"), t();
                        });
                },
                populateSlides: function () {
                    var t = n();
                    this.$images.each(function () {
                        var e = n("<img />"),
                            i = n(this).closest("figure").find("figcaption").first(),
                            o = n('<div class="base-slideshow__image-container"></div>');
                        e
                            .attr({ class: "base-slideshow__image", src: n(this).data("slideshowSrc") ? n(this).data("slideshowSrc") : n(this).attr("src"), alt: n(this).attr("alt") })
                            .wrap('<figure class="base-slideshow__figure"></figure>')
                            .parent()
                            .appendTo(o),
                            n(this).hasClass("hero-image") && (i = n(this).closest(".base-header").find(".hero-caption").first()),
                            i.length && o.append(n('<p class="base-slideshow__caption">').html(i.html())),
                            (t = t.add(o));
                    }),
                        (this.$slides = t),
                        this.$slideContainer.empty().append(this.$slides),
                        this.$images.css("cursor", "pointer");
                },
                onResize: function () {
                    this.setImageMaxHeights();
                },
                setImageMaxHeights: function () {
                    var t,
                        e,
                        i,
                        o = this.$slideContainer.height();
                    n("img", this.$slides).each(function () {
                        (t = n(this).parent().siblings(".base-slideshow__caption").first()), (e = t.length ? t.outerHeight() : 0), (i = o - e), n(this).css("max-height", i);
                    });
                },
                deinit: function () {
                    this.$images.length > 1 &&
                        (this.$images.off("click", this.onClickImage),
                        this.$closeLink.off("click", this.onClickClose),
                        n(".pagination-previous-link,.pagination-next-link", this.$paginationContainer).off("click", this.onClickNavigation),
                        this.$document.off("keyup", this.onKeyUp),
                        this.$window.off("resize", this.onResize));
                },
            };
        o.bindAll(s, "load", "onClickImage", "onClickNavigation", "onClickClose", "onKeyUp", "onResize"), (t.exports = s);
    },
    function (t, e, i) {
        var n = i(1),
            o = i(3),
            s = {
                init: function () {
                    (this.$window = n(window)), (this.$content = n(".l--content")), (this.$footer = n(".l--footer")), this.$window.on("resize", this.onResize), this.stickOffset();
                },
                stickOffset: function () {
                    var t = this.$footer.outerHeight();
                    this.$content.css({ "margin-bottom": -t, "padding-bottom": t });
                },
                onResize: function () {
                    this.stickOffset();
                },
                deinit: function () {
                    this.$window.off("resize", this.onResize);
                },
            };
        o.bindAll(s, "onResize"), (t.exports = s);
    },
    function (t, e, i) {
        var n = i(1),
            o = i(3),
            s = {
                init: function () {
                    (this.$mapPoints = n(".gsd-map__marker-link")), (this.$mapPointContentWrapper = n(".gsd-map__list")), (this.$mapPointContent = n(".gsd-map__list-item")), this.$mapPoints.on("hover click", this.changeMapLocation);
                },
                changeMapLocation: function (t) {
                    t.preventDefault();
                    var e = n(t.target).parent(".gsd-map__marker"),
                        i = e.data("map-id"),
                        o = n("#student-guide-map").offset().top,
                        s = this.$mapPointContent.filter(function (t, e) {
                            return n(e).data("map-id") === i;
                        });
                    this.resetMapClasses(), e.addClass("gsd-map__marker--active"), s.addClass("gsd-map__list-item--active"), Modernizr.touchevents && n(document).scrollTop(o);
                },
                resetMapClasses: function () {
                    this.$mapPoints.parent(".gsd-map__marker").removeClass("gsd-map__marker--active"), this.$mapPointContent.removeClass("gsd-map__list-item--active");
                },
                deinit: function () {
                    this.$mapPoints.off("hover click", this.changeMapLocation);
                },
            };
        o.bindAll(s, "changeMapLocation", "resetMapClasses"), (t.exports = s);
    },
    function (t, e, i) {
        var n = i(1),
            o = i(3),
            s = {
                init: function () {
                    Modernizr.matchmedia && ((this.$swappables = n("[data-swappable]")), (this.mql = window.matchMedia("(min-width: 768px)")), this.mql.addListener(this.swap), this.swap(this.mql));
                },
                swap: function (t) {
                    this.$swappables.each(function (e, i) {
                        t.matches
                            ? (n(".feed-filter__select-wrapper", i).hide().find("select").prop("disabled", !0), n(".feed-filter__radio-wrapper", i).show().find('input[type="radio"]').prop("disabled", !1))
                            : (n(".feed-filter__radio-wrapper", i).hide().find('input[type="radio"]').prop("disabled", !0), n(".feed-filter__select-wrapper", i).show().find("select").prop("disabled", !1));
                    });
                },
                deinit: function () {
                    this.mql && this.mql.removeListener(this.swap);
                },
            };
        o.bindAll(s, "swap"), (t.exports = s);
    },
    function (t, e, i) {
        var n = i(1),
            o = {
                init: function () {
                    this.setup(), (this.$toggles = n(".truncatable--show,.truncatable--hide")), this.$toggles.on("click", this.toggleTruncation);
                },
                setup: function () {
                    n("[data-truncatable]").each(function (t, e) {
                        var i = n(e).data("truncatable"),
                            o = 0 === n(e).find("input:gt(0):checked").length;
                        i &&
                            o &&
                            (n(".feed-filter__input-wrapper:gt(" + (i - 1) + ")", e).hide(),
                            n(".feed-filter__input-wrapper", e)
                                .eq(i - 1)
                                .after('<span class="truncatable--show" style="display:block;cursor:pointer">&#8230;</span>')
                                .end()
                                .last()
                                .after('<span class="truncatable--hide" style="display:none;cursor:pointer">&#8593;</span>'));
                    });
                },
                toggleTruncation: function (t) {
                    var e = n(t.currentTarget),
                        i = e.closest("[data-truncatable]");
                    if (i.length) {
                        var o = i.data("truncatable");
                        o && (n(".feed-filter__input-wrapper:gt(" + (o - 1) + ")", i).toggle(), e.hasClass("truncatable--show") ? e.hide().siblings(".truncatable--hide").show() : e.hide().siblings(".truncatable--show").show());
                    }
                },
                deinit: function () {
                    this.$toggles.off("click", this.toggleTruncation);
                },
            };
        t.exports = o;
    },
    function (t, e, i) {
        var n = i(1),
            o = i(3),
            s = {
                init: function () {
                    (this.isActive = !1),
                        (this.$toolTipsBody = n(".tooltips-body")),
                        (this.$toolTipsLink = n(".tooltips-body .tooltips-link")),
                        (this.$toolTipsHeading = n(".tooltips-notes__heading")),
                        (this.$toolTipsImgListItem = n(".tooltips__img-list-item")),
                        (this.$prevHoveredParent = ""),
                        (this.$prevHoveredFigure = ""),
                        this.$toolTipsLink.length && this.bindEvents();
                },
                bindEvents: function () {
                    Modernizr.touchevents ||
                        (this.$toolTipsBody.on("mousemove.tooltip", ".tooltips-link", this.onMouseMove),
                        this.$toolTipsBody.on("mouseenter.tooltip", ".tooltips-link", this.onMouseEnter),
                        this.$toolTipsBody.on("mouseleave.tooltip", ".tooltips-link", this.onMouseLeave)),
                        this.$toolTipsBody.on("click.tooltipLink", ".tooltips-link", this.toolTipLinkClass),
                        this.$toolTipsHeading.on("click.tooltipHeading", this.toolTipToggleClick);
                },
                onMouseMove: function () {
                    n(".tooltips-box").css({ opacity: 1 });
                },
                onMouseEnter: function (t) {
                    var e = n(t.currentTarget).data("index") - 1,
                        i = n(t.currentTarget).parents(".tooltips-body"),
                        o = i.find(".tooltips-notes__list-item").eq(e),
                        s = o.find("strong").text(),
                        a = o.find(".tooltips-notes__text").text(),
                        r = o.find(".tooltips__figure-img");
                    this.isActive || (this.buildToolTip(t, s, a, r), n(t.currentTarget).addClass("tooltips-link--active")), (this.isActive = !0);
                },
                onMouseLeave: function (t) {
                    (this.isActive = !1), n(t.currentTarget).removeClass("tooltips-link--active"), n(".tooltips-box").css("opacity", 0), n(".tooltips-box").remove();
                },
                toolTipToggleClick: function (t) {
                    t.preventDefault(), n(t.currentTarget).parent().toggleClass("tooltips-notes--active");
                },
                toolTipLinkClass: function (t) {
                    var e;
                    (e = n(t.currentTarget).parents(".tooltips-body").find(".tooltips-notes")), e.hasClass("tooltips-notes--active") || (e.addClass("tooltips-notes--active"), n(t.currentTarget).trigger("click"), console.log("test"));
                },
                buildToolTip: function (t, e, i, o) {
                    var s = o.find("img");
                    if (s.length) {
                        var a = s.attr("src"),
                            r = a.replace(new RegExp(/-\d+[Xx]\d+\./), ".");
                        s.attr("src", r);
                    }
                    var l = o.clone().addClass("tooltips-hover-image");
                    if (s.length) var c = '<div class="tooltips-img">' + l.html() + "</div>";
                    var u = '<div class="tooltips-box"><div class="tooltips-box__content">' + c + '<div class="tooltips-text"><h3 class="tooltips-header">' + e + "</h3>" + i + "</div></div></div>";
                    n(".color-theme").append(u), this.setImageHeight();
                },
                setImageHeight: function () {
                    var t = n(".tooltips-box__content").height();
                    n(".tooltips-img img").css({ maxHeight: t });
                },
                deinit: function () {
                    this.$toolTipsBody.off("mousemove.tooltip"),
                        this.$toolTipsBody.off("mouseenter.tooltip"),
                        this.$toolTipsBody.off("mouseleave.tooltip"),
                        this.$toolTipsBody.off("click.tooltipLink"),
                        this.$toolTipsHeading.off("click.tooltipHeading");
                },
            };
        o.bindAll(s, "onMouseMove", "onMouseEnter", "onMouseLeave", "toolTipToggleClick", "toolTipLinkClass", "buildToolTip"), (t.exports = s);
    },
    function (t, e, i) {
        var n = i(1),
            o = i(3),
            s = {
                AUTOPLAY: !0,
                CYCLE_DELAY: 5e3,
                init: function () {
                    (this.$header = n(".topic-feature")),
                        (this.currentIndex = 0),
                        this.$header.length &&
                            ((this.$window = n(window)),
                            (this.$figureContainer = n(".topic-feature__image-container-inner")),
                            this.setupTopics(),
                            this.setFigureContainerHeight(),
                            n(".topic-feature__item").on("mouseenter", "a", this.onMouseEnter),
                            n(".topic-feature__item").on("mouseout", "a", this.onMouseOut),
                            n(".topic-feature__caption-text").on("click", ".caption__more", this.expandCaption),
                            this.$window.on("resize", this.onResize),
                            this.AUTOPLAY && this.start());
                },
                setFigureContainerHeight: function () {
                    this.$figureContainer.css({ "min-height": this.$figureContainer.children().first().find(".topic-feature__image").height(), opacity: 1 });
                },
                expandCaption: function (t) {
                    var e = n(t.currentTarget).parent();
                    t.preventDefault(), e.addClass("caption-is-expanded");
                },
                setupTopics: function () {
                    var t = n(".topic-feature__figure"),
                        e = n(".topic-feature__item"),
                        i = (this.topics = []);
                    e.each(function (e, o) {
                        var s = t.get(e);
                        s && i.push({ item: n(o), figure: n(s).data("index", e) });
                    });
                },
                start: function (t) {
                    this.interval && clearInterval(this.interval), (this.interval = setInterval(this.next, this.CYCLE_DELAY)), (t = t || 0), this.rotate(t);
                },
                stop: function () {
                    this.interval && (clearInterval(this.interval), (this.interval = null));
                },
                next: function () {
                    var t = this.mod((this.currentIndex || 0) + 1, this.topics.length);
                    this.rotate(t);
                },
                prev: function () {
                    var t = this.mod((this.currentIndex || 0) - 1, this.topics.length);
                    this.rotate(t, -1);
                },
                goto: function (t) {
                    var e = 1;
                    t < this.currentIndex && (e = -1), this.rotate(t, e);
                },
                rotate: function (t, e) {
                    (t = t >= 0 && t <= this.topics.length ? t : 0), (e = e || 1);
                    var i = this.topics[t],
                        o = n(".topic-feature__figure"),
                        s = n(".topic-feature__item");
                    i.item.hasClass("is-active") || (s.removeClass("is-active"), n(".topic-feature__caption-text").removeClass("caption-is-expanded"), this.switchCaption(t)),
                        1 === e ? o.first().nextUntil(i.figure).andSelf().detach().appendTo(this.$figureContainer) : i.figure.nextAll().andSelf().detach().prependTo(this.$figureContainer),
                        n(".topic-feature__figure--mobile").removeClass("is-active"),
                        n(".topic-feature__figure--mobile").eq(t).addClass("is-active"),
                        i.item.addClass("is-active"),
                        (this.currentIndex = t);
                },
                switchCaption: function (t) {
                    var e = "";
                    n(".topic-feature__caption-list-item").removeClass("list-item-is-active"),
                        n(".topic-feature__caption-text").removeClass("caption-text-is-active"),
                        o.delay(function () {
                            (e = n(".topic-feature__caption-list-item").eq(t).find(".topic-feature__caption-text-hidden").html()),
                                n(".topic-feature__caption-list-item").eq(t).addClass("list-item-is-active"),
                                n(".topic-feature__caption-text").html(e),
                                n(".topic-feature__caption-text").addClass("caption-text-is-active");
                        }, 200);
                },
                mod: function (t, e) {
                    return ((t % e) + e) % e;
                },
                onMouseEnter: function (t) {
                    var e = n(t.currentTarget).parent("li").index();
                    this.AUTOPLAY && this.stop(), this.goto(e);
                },
                onMouseOut: function (t) {
                    var e = n(t.currentTarget).parent("li").index();
                    this.AUTOPLAY && this.start(e);
                },
                onResize: function () {
                    this.$window.width() >= 767 && this.setFigureContainerHeight();
                },
                deinit: function () {
                    this.$header.length &&
                        (this.AUTOPLAY && this.stop(),
                        n(".topic-feature__item").off("mouseenter", "a", this.onMouseEnter),
                        n(".topic-feature__item").off("mouseout", "a", this.onMouseOut),
                        n(".topic-feature__caption-text").on("click", ".caption__more", this.expandCaption),
                        this.$window.off("resize", this.onResize));
                },
            };
        o.bindAll(s, "onResize", "onMouseEnter", "onMouseOut", "expandCaption", "start", "next"), (t.exports = s);
    },
    function (t, e, i) {
        var n = i(1),
            o = {
                init: function () {
                    (this.$topicLanding = n(".topic-list__landing")), this.$topicLanding.length && this.setTopicPadding();
                },
                setTopicPadding: function () {
                    var t = n(".topic-list__item--count")
                        .toArray()
                        .reduce(function (t, e) {
                            var i = n(e).attr("data-count");
                            return Math.max(i, t);
                        }, 0);
                    n("*[data-count]").each(function (e, i) {
                        var o = n(i).data("count");
                        n(i).css("padding-left", (o / t) * 40 + "%");
                    });
                },
            };
        t.exports = o;
    },
    function (t, e, i) {
        var n = i(1),
            o = i(3),
            s = {
                init: function () {
                    (this.$videoNavItems = n(".video-slider-nav__list-item")), (this.$videos = n(".video-slider__list-item")), this.$videoNavItems.on("click", this.changeVideo);
                },
                changeVideo: function (t) {
                    t.preventDefault();
                    var e = n(t.target),
                        i = e.data("video-id"),
                        o = this.$videos.filter(function (t, e) {
                            return n(e).data("video-id") == i;
                        });
                    n.each(this.$videos, function (t, e) {
                        if (e != o.get(0)) {
                            var i = n(e).find("iframe").attr("src");
                            n(e).find("iframe").attr("src", i);
                        }
                    }),
                        this.resetActiveClasses(),
                        e.addClass("video-slider-nav__list-item--active"),
                        o.addClass("video-slider__list-item--active");
                },
                resetActiveClasses: function () {
                    this.$videoNavItems.removeClass("video-slider-nav__list-item--active"), this.$videos.removeClass("video-slider__list-item--active");
                },
                deinit: function () {
                    this.$videoNavItems.off("click", this.changeVideo);
                },
            };
        o.bindAll(s, "changeVideo", "resetActiveClasses"), (t.exports = s);
    },
]);
