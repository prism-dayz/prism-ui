const izurviveDeps = (vue) => {
    ! function(t) {
        var e = {};

        function i(n) {
            if (e[n]) return e[n].exports;
            var o = e[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
        }
        i.m = t, i.c = e, i.d = function(t, e, n) {
            i.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        }, i.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, i.t = function(t, e) {
            if (1 & e && (t = i(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (i.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var o in t) i.d(n, o, function(e) {
                    return t[e]
                }.bind(null, o));
            return n
        }, i.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return i.d(e, "a", e), e
        }, i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, i.p = "", i(i.s = 62)
    }([function(t, e, i) {
        "use strict";
        (function(t) {
            i.d(e, "d", function() {
                return n
            }), i.d(e, "e", function() {
                return o
            }), i.d(e, "f", function() {
                return r
            }), i.d(e, "c", function() {
                return s
            }), i.d(e, "a", function() {
                return l
            }), i.d(e, "b", function() {
                return c
            });
            i(35), i(59), i(45);

            function n() {
                return navigator.userAgent.match(/Android/i)
            }

            function o() {
                return navigator.userAgent.match(/iPad|iPhone|iPod/i)
            }

            function r(t) {
                "undefined" != typeof Raven && t()
            }
            t.urlParam = function(t) {
                var e = new RegExp("[?&]" + t + "=([^&#]*)").exec(window.location.href);
                return null == e ? null : e[1] || 0
            }, t.fn.scrollTo = function() {
                return t("html, body").animate({
                    scrollTop: t(this).offset().top + "px"
                }, "slow"), this
            };
            const s = (() => {
                    try {
                        return localStorage.setItem("ft", "ft"), localStorage.removeItem("ft"), !0
                    } catch (t) {
                        return !1
                    }
                })(),
                a = (t, e) => {
                    var i = e - t.toString().length + 1;
                    return Array(+(i > 0 && i)).join("0") + t
                },
                l = t => `${t.getFullYear()}-${a(t.getMonth(),2)}-${a(t.getDay(),2)} ${a(t.getUTCHours(),2)}:${a(t.getUTCMinutes(),2)}:${a(t.getUTCSeconds(),2)}`,
                c = t => `${t.getFullYear()}-${a(t.getMonth(),2)}-${a(t.getDay(),2)} ${a(t.getUTCHours(),2)}:${a(t.getUTCMinutes(),2)}`
        }).call(this, i(1))
    }, function(t, e, i) {
        var n;
        /*!
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
        /*!
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
        ! function(e, i) {
            "use strict";
            "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? i(e, !0) : function(t) {
                if (!t.document) throw new Error("jQuery requires a window with a document");
                return i(t)
            } : i(e)
        }("undefined" != typeof window ? window : this, function(i, o) {
            "use strict";
            var r = [],
                s = i.document,
                a = Object.getPrototypeOf,
                l = r.slice,
                c = r.concat,
                u = r.push,
                h = r.indexOf,
                p = {},
                d = p.toString,
                f = p.hasOwnProperty,
                m = f.toString,
                g = m.call(Object),
                v = {},
                _ = function(t) {
                    return "function" == typeof t && "number" != typeof t.nodeType
                },
                y = function(t) {
                    return null != t && t === t.window
                },
                b = {
                    type: !0,
                    src: !0,
                    noModule: !0
                };

            function w(t, e, i) {
                var n, o = (e = e || s).createElement("script");
                if (o.text = t, i)
                    for (n in b) i[n] && (o[n] = i[n]);
                e.head.appendChild(o).parentNode.removeChild(o)
            }

            function x(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? p[d.call(t)] || "object" : typeof t
            }
            var L = function(t, e) {
                    return new L.fn.init(t, e)
                },
                C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

            function T(t) {
                var e = !!t && "length" in t && t.length,
                    i = x(t);
                return !_(t) && !y(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
            }
            L.fn = L.prototype = {
                jquery: "3.3.1",
                constructor: L,
                length: 0,
                toArray: function() {
                    return l.call(this)
                },
                get: function(t) {
                    return null == t ? l.call(this) : t < 0 ? this[t + this.length] : this[t]
                },
                pushStack: function(t) {
                    var e = L.merge(this.constructor(), t);
                    return e.prevObject = this, e
                },
                each: function(t) {
                    return L.each(this, t)
                },
                map: function(t) {
                    return this.pushStack(L.map(this, function(e, i) {
                        return t.call(e, i, e)
                    }))
                },
                slice: function() {
                    return this.pushStack(l.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(t) {
                    var e = this.length,
                        i = +t + (t < 0 ? e : 0);
                    return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: u,
                sort: r.sort,
                splice: r.splice
            }, L.extend = L.fn.extend = function() {
                var t, e, i, n, o, r, s = arguments[0] || {},
                    a = 1,
                    l = arguments.length,
                    c = !1;
                for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || _(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
                    if (null != (t = arguments[a]))
                        for (e in t) i = s[e], s !== (n = t[e]) && (c && n && (L.isPlainObject(n) || (o = Array.isArray(n))) ? (o ? (o = !1, r = i && Array.isArray(i) ? i : []) : r = i && L.isPlainObject(i) ? i : {}, s[e] = L.extend(c, r, n)) : void 0 !== n && (s[e] = n));
                return s
            }, L.extend({
                expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(t) {
                    throw new Error(t)
                },
                noop: function() {},
                isPlainObject: function(t) {
                    var e, i;
                    return !(!t || "[object Object]" !== d.call(t)) && (!(e = a(t)) || "function" == typeof(i = f.call(e, "constructor") && e.constructor) && m.call(i) === g)
                },
                isEmptyObject: function(t) {
                    var e;
                    for (e in t) return !1;
                    return !0
                },
                globalEval: function(t) {
                    w(t)
                },
                each: function(t, e) {
                    var i, n = 0;
                    if (T(t))
                        for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
                    else
                        for (n in t)
                            if (!1 === e.call(t[n], n, t[n])) break;
                    return t
                },
                trim: function(t) {
                    return null == t ? "" : (t + "").replace(C, "")
                },
                makeArray: function(t, e) {
                    var i = e || [];
                    return null != t && (T(Object(t)) ? L.merge(i, "string" == typeof t ? [t] : t) : u.call(i, t)), i
                },
                inArray: function(t, e, i) {
                    return null == e ? -1 : h.call(e, t, i)
                },
                merge: function(t, e) {
                    for (var i = +e.length, n = 0, o = t.length; n < i; n++) t[o++] = e[n];
                    return t.length = o, t
                },
                grep: function(t, e, i) {
                    for (var n = [], o = 0, r = t.length, s = !i; o < r; o++) !e(t[o], o) !== s && n.push(t[o]);
                    return n
                },
                map: function(t, e, i) {
                    var n, o, r = 0,
                        s = [];
                    if (T(t))
                        for (n = t.length; r < n; r++) null != (o = e(t[r], r, i)) && s.push(o);
                    else
                        for (r in t) null != (o = e(t[r], r, i)) && s.push(o);
                    return c.apply([], s)
                },
                guid: 1,
                support: v
            }), "function" == typeof Symbol && (L.fn[Symbol.iterator] = r[Symbol.iterator]), L.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
                p["[object " + e + "]"] = e.toLowerCase()
            });
            var k =
                /*!
                * Sizzle CSS Selector Engine v2.3.3
                * https://sizzlejs.com/
                *
                * Copyright jQuery Foundation and other contributors
                * Released under the MIT license
                * http://jquery.org/license
                *
                * Date: 2016-08-08
                */
                function(t) {
                    var e, i, n, o, r, s, a, l, c, u, h, p, d, f, m, g, v, _, y, b = "sizzle" + 1 * new Date,
                        w = t.document,
                        x = 0,
                        L = 0,
                        C = st(),
                        T = st(),
                        k = st(),
                        P = function(t, e) {
                            return t === e && (h = !0), 0
                        },
                        S = {}.hasOwnProperty,
                        E = [],
                        D = E.pop,
                        M = E.push,
                        A = E.push,
                        O = E.slice,
                        I = function(t, e) {
                            for (var i = 0, n = t.length; i < n; i++)
                                if (t[i] === e) return i;
                            return -1
                        },
                        U = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        N = "[\\x20\\t\\r\\n\\f]",
                        z = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                        B = "\\[" + N + "*(" + z + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + N + "*\\]",
                        R = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)",
                        j = new RegExp(N + "+", "g"),
                        $ = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
                        F = new RegExp("^" + N + "*," + N + "*"),
                        Z = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
                        H = new RegExp("=" + N + "*([^\\]'\"]*?)" + N + "*\\]", "g"),
                        G = new RegExp(R),
                        W = new RegExp("^" + z + "$"),
                        q = {
                            ID: new RegExp("^#(" + z + ")"),
                            CLASS: new RegExp("^\\.(" + z + ")"),
                            TAG: new RegExp("^(" + z + "|[*])"),
                            ATTR: new RegExp("^" + B),
                            PSEUDO: new RegExp("^" + R),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + U + ")$", "i"),
                            needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i")
                        },
                        V = /^(?:input|select|textarea|button)$/i,
                        K = /^h\d$/i,
                        Y = /^[^{]+\{\s*\[native \w/,
                        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        X = /[+~]/,
                        Q = new RegExp("\\\\([\\da-f]{1,6}" + N + "?|(" + N + ")|.)", "ig"),
                        tt = function(t, e, i) {
                            var n = "0x" + e - 65536;
                            return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                        },
                        et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                        it = function(t, e) {
                            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                        },
                        nt = function() {
                            p()
                        },
                        ot = _t(function(t) {
                            return !0 === t.disabled && ("form" in t || "label" in t)
                        }, {
                            dir: "parentNode",
                            next: "legend"
                        });
                    try {
                        A.apply(E = O.call(w.childNodes), w.childNodes), E[w.childNodes.length].nodeType
                    } catch (t) {
                        A = {
                            apply: E.length ? function(t, e) {
                                M.apply(t, O.call(e))
                            } : function(t, e) {
                                for (var i = t.length, n = 0; t[i++] = e[n++];);
                                t.length = i - 1
                            }
                        }
                    }

                    function rt(t, e, n, o) {
                        var r, a, c, u, h, f, v, _ = e && e.ownerDocument,
                            x = e ? e.nodeType : 9;
                        if (n = n || [], "string" != typeof t || !t || 1 !== x && 9 !== x && 11 !== x) return n;
                        if (!o && ((e ? e.ownerDocument || e : w) !== d && p(e), e = e || d, m)) {
                            if (11 !== x && (h = J.exec(t)))
                                if (r = h[1]) {
                                    if (9 === x) {
                                        if (!(c = e.getElementById(r))) return n;
                                        if (c.id === r) return n.push(c), n
                                    } else if (_ && (c = _.getElementById(r)) && y(e, c) && c.id === r) return n.push(c), n
                                } else {
                                    if (h[2]) return A.apply(n, e.getElementsByTagName(t)), n;
                                    if ((r = h[3]) && i.getElementsByClassName && e.getElementsByClassName) return A.apply(n, e.getElementsByClassName(r)), n
                                } if (i.qsa && !k[t + " "] && (!g || !g.test(t))) {
                                if (1 !== x) _ = e, v = t;
                                else if ("object" !== e.nodeName.toLowerCase()) {
                                    for ((u = e.getAttribute("id")) ? u = u.replace(et, it) : e.setAttribute("id", u = b), a = (f = s(t)).length; a--;) f[a] = "#" + u + " " + vt(f[a]);
                                    v = f.join(","), _ = X.test(t) && mt(e.parentNode) || e
                                }
                                if (v) try {
                                    return A.apply(n, _.querySelectorAll(v)), n
                                } catch (t) {} finally {
                                    u === b && e.removeAttribute("id")
                                }
                            }
                        }
                        return l(t.replace($, "$1"), e, n, o)
                    }

                    function st() {
                        var t = [];
                        return function e(i, o) {
                            return t.push(i + " ") > n.cacheLength && delete e[t.shift()], e[i + " "] = o
                        }
                    }

                    function at(t) {
                        return t[b] = !0, t
                    }

                    function lt(t) {
                        var e = d.createElement("fieldset");
                        try {
                            return !!t(e)
                        } catch (t) {
                            return !1
                        } finally {
                            e.parentNode && e.parentNode.removeChild(e), e = null
                        }
                    }

                    function ct(t, e) {
                        for (var i = t.split("|"), o = i.length; o--;) n.attrHandle[i[o]] = e
                    }

                    function ut(t, e) {
                        var i = e && t,
                            n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                        if (n) return n;
                        if (i)
                            for (; i = i.nextSibling;)
                                if (i === e) return -1;
                        return t ? 1 : -1
                    }

                    function ht(t) {
                        return function(e) {
                            return "input" === e.nodeName.toLowerCase() && e.type === t
                        }
                    }

                    function pt(t) {
                        return function(e) {
                            var i = e.nodeName.toLowerCase();
                            return ("input" === i || "button" === i) && e.type === t
                        }
                    }

                    function dt(t) {
                        return function(e) {
                            return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ot(e) === t : e.disabled === t : "label" in e && e.disabled === t
                        }
                    }

                    function ft(t) {
                        return at(function(e) {
                            return e = +e, at(function(i, n) {
                                for (var o, r = t([], i.length, e), s = r.length; s--;) i[o = r[s]] && (i[o] = !(n[o] = i[o]))
                            })
                        })
                    }

                    function mt(t) {
                        return t && void 0 !== t.getElementsByTagName && t
                    }
                    for (e in i = rt.support = {}, r = rt.isXML = function(t) {
                            var e = t && (t.ownerDocument || t).documentElement;
                            return !!e && "HTML" !== e.nodeName
                        }, p = rt.setDocument = function(t) {
                            var e, o, s = t ? t.ownerDocument || t : w;
                            return s !== d && 9 === s.nodeType && s.documentElement ? (f = (d = s).documentElement, m = !r(d), w !== d && (o = d.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", nt, !1) : o.attachEvent && o.attachEvent("onunload", nt)), i.attributes = lt(function(t) {
                                return t.className = "i", !t.getAttribute("className")
                            }), i.getElementsByTagName = lt(function(t) {
                                return t.appendChild(d.createComment("")), !t.getElementsByTagName("*").length
                            }), i.getElementsByClassName = Y.test(d.getElementsByClassName), i.getById = lt(function(t) {
                                return f.appendChild(t).id = b, !d.getElementsByName || !d.getElementsByName(b).length
                            }), i.getById ? (n.filter.ID = function(t) {
                                var e = t.replace(Q, tt);
                                return function(t) {
                                    return t.getAttribute("id") === e
                                }
                            }, n.find.ID = function(t, e) {
                                if (void 0 !== e.getElementById && m) {
                                    var i = e.getElementById(t);
                                    return i ? [i] : []
                                }
                            }) : (n.filter.ID = function(t) {
                                var e = t.replace(Q, tt);
                                return function(t) {
                                    var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                    return i && i.value === e
                                }
                            }, n.find.ID = function(t, e) {
                                if (void 0 !== e.getElementById && m) {
                                    var i, n, o, r = e.getElementById(t);
                                    if (r) {
                                        if ((i = r.getAttributeNode("id")) && i.value === t) return [r];
                                        for (o = e.getElementsByName(t), n = 0; r = o[n++];)
                                            if ((i = r.getAttributeNode("id")) && i.value === t) return [r]
                                    }
                                    return []
                                }
                            }), n.find.TAG = i.getElementsByTagName ? function(t, e) {
                                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
                            } : function(t, e) {
                                var i, n = [],
                                    o = 0,
                                    r = e.getElementsByTagName(t);
                                if ("*" === t) {
                                    for (; i = r[o++];) 1 === i.nodeType && n.push(i);
                                    return n
                                }
                                return r
                            }, n.find.CLASS = i.getElementsByClassName && function(t, e) {
                                if (void 0 !== e.getElementsByClassName && m) return e.getElementsByClassName(t)
                            }, v = [], g = [], (i.qsa = Y.test(d.querySelectorAll)) && (lt(function(t) {
                                f.appendChild(t).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + N + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + N + "*(?:value|" + U + ")"), t.querySelectorAll("[id~=" + b + "-]").length || g.push("~="), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + b + "+*").length || g.push(".#.+[+~]")
                            }), lt(function(t) {
                                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                var e = d.createElement("input");
                                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + N + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), f.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
                            })), (i.matchesSelector = Y.test(_ = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && lt(function(t) {
                                i.disconnectedMatch = _.call(t, "*"), _.call(t, "[s!='']:x"), v.push("!=", R)
                            }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), e = Y.test(f.compareDocumentPosition), y = e || Y.test(f.contains) ? function(t, e) {
                                var i = 9 === t.nodeType ? t.documentElement : t,
                                    n = e && e.parentNode;
                                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                            } : function(t, e) {
                                if (e)
                                    for (; e = e.parentNode;)
                                        if (e === t) return !0;
                                return !1
                            }, P = e ? function(t, e) {
                                if (t === e) return h = !0, 0;
                                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === n ? t === d || t.ownerDocument === w && y(w, t) ? -1 : e === d || e.ownerDocument === w && y(w, e) ? 1 : u ? I(u, t) - I(u, e) : 0 : 4 & n ? -1 : 1)
                            } : function(t, e) {
                                if (t === e) return h = !0, 0;
                                var i, n = 0,
                                    o = t.parentNode,
                                    r = e.parentNode,
                                    s = [t],
                                    a = [e];
                                if (!o || !r) return t === d ? -1 : e === d ? 1 : o ? -1 : r ? 1 : u ? I(u, t) - I(u, e) : 0;
                                if (o === r) return ut(t, e);
                                for (i = t; i = i.parentNode;) s.unshift(i);
                                for (i = e; i = i.parentNode;) a.unshift(i);
                                for (; s[n] === a[n];) n++;
                                return n ? ut(s[n], a[n]) : s[n] === w ? -1 : a[n] === w ? 1 : 0
                            }, d) : d
                        }, rt.matches = function(t, e) {
                            return rt(t, null, null, e)
                        }, rt.matchesSelector = function(t, e) {
                            if ((t.ownerDocument || t) !== d && p(t), e = e.replace(H, "='$1']"), i.matchesSelector && m && !k[e + " "] && (!v || !v.test(e)) && (!g || !g.test(e))) try {
                                var n = _.call(t, e);
                                if (n || i.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                            } catch (t) {}
                            return rt(e, d, null, [t]).length > 0
                        }, rt.contains = function(t, e) {
                            return (t.ownerDocument || t) !== d && p(t), y(t, e)
                        }, rt.attr = function(t, e) {
                            (t.ownerDocument || t) !== d && p(t);
                            var o = n.attrHandle[e.toLowerCase()],
                                r = o && S.call(n.attrHandle, e.toLowerCase()) ? o(t, e, !m) : void 0;
                            return void 0 !== r ? r : i.attributes || !m ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                        }, rt.escape = function(t) {
                            return (t + "").replace(et, it)
                        }, rt.error = function(t) {
                            throw new Error("Syntax error, unrecognized expression: " + t)
                        }, rt.uniqueSort = function(t) {
                            var e, n = [],
                                o = 0,
                                r = 0;
                            if (h = !i.detectDuplicates, u = !i.sortStable && t.slice(0), t.sort(P), h) {
                                for (; e = t[r++];) e === t[r] && (o = n.push(r));
                                for (; o--;) t.splice(n[o], 1)
                            }
                            return u = null, t
                        }, o = rt.getText = function(t) {
                            var e, i = "",
                                n = 0,
                                r = t.nodeType;
                            if (r) {
                                if (1 === r || 9 === r || 11 === r) {
                                    if ("string" == typeof t.textContent) return t.textContent;
                                    for (t = t.firstChild; t; t = t.nextSibling) i += o(t)
                                } else if (3 === r || 4 === r) return t.nodeValue
                            } else
                                for (; e = t[n++];) i += o(e);
                            return i
                        }, (n = rt.selectors = {
                            cacheLength: 50,
                            createPseudo: at,
                            match: q,
                            attrHandle: {},
                            find: {},
                            relative: {
                                ">": {
                                    dir: "parentNode",
                                    first: !0
                                },
                                " ": {
                                    dir: "parentNode"
                                },
                                "+": {
                                    dir: "previousSibling",
                                    first: !0
                                },
                                "~": {
                                    dir: "previousSibling"
                                }
                            },
                            preFilter: {
                                ATTR: function(t) {
                                    return t[1] = t[1].replace(Q, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(Q, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                                },
                                CHILD: function(t) {
                                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || rt.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && rt.error(t[0]), t
                                },
                                PSEUDO: function(t) {
                                    var e, i = !t[6] && t[2];
                                    return q.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && G.test(i) && (e = s(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                                }
                            },
                            filter: {
                                TAG: function(t) {
                                    var e = t.replace(Q, tt).toLowerCase();
                                    return "*" === t ? function() {
                                        return !0
                                    } : function(t) {
                                        return t.nodeName && t.nodeName.toLowerCase() === e
                                    }
                                },
                                CLASS: function(t) {
                                    var e = C[t + " "];
                                    return e || (e = new RegExp("(^|" + N + ")" + t + "(" + N + "|$)")) && C(t, function(t) {
                                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                                    })
                                },
                                ATTR: function(t, e, i) {
                                    return function(n) {
                                        var o = rt.attr(n, t);
                                        return null == o ? "!=" === e : !e || (o += "", "=" === e ? o === i : "!=" === e ? o !== i : "^=" === e ? i && 0 === o.indexOf(i) : "*=" === e ? i && o.indexOf(i) > -1 : "$=" === e ? i && o.slice(-i.length) === i : "~=" === e ? (" " + o.replace(j, " ") + " ").indexOf(i) > -1 : "|=" === e && (o === i || o.slice(0, i.length + 1) === i + "-"))
                                    }
                                },
                                CHILD: function(t, e, i, n, o) {
                                    var r = "nth" !== t.slice(0, 3),
                                        s = "last" !== t.slice(-4),
                                        a = "of-type" === e;
                                    return 1 === n && 0 === o ? function(t) {
                                        return !!t.parentNode
                                    } : function(e, i, l) {
                                        var c, u, h, p, d, f, m = r !== s ? "nextSibling" : "previousSibling",
                                            g = e.parentNode,
                                            v = a && e.nodeName.toLowerCase(),
                                            _ = !l && !a,
                                            y = !1;
                                        if (g) {
                                            if (r) {
                                                for (; m;) {
                                                    for (p = e; p = p[m];)
                                                        if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                                    f = m = "only" === t && !f && "nextSibling"
                                                }
                                                return !0
                                            }
                                            if (f = [s ? g.firstChild : g.lastChild], s && _) {
                                                for (y = (d = (c = (u = (h = (p = g)[b] || (p[b] = {}))[p.uniqueID] || (h[p.uniqueID] = {}))[t] || [])[0] === x && c[1]) && c[2], p = d && g.childNodes[d]; p = ++d && p && p[m] || (y = d = 0) || f.pop();)
                                                    if (1 === p.nodeType && ++y && p === e) {
                                                        u[t] = [x, d, y];
                                                        break
                                                    }
                                            } else if (_ && (y = d = (c = (u = (h = (p = e)[b] || (p[b] = {}))[p.uniqueID] || (h[p.uniqueID] = {}))[t] || [])[0] === x && c[1]), !1 === y)
                                                for (;
                                                    (p = ++d && p && p[m] || (y = d = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++y || (_ && ((u = (h = p[b] || (p[b] = {}))[p.uniqueID] || (h[p.uniqueID] = {}))[t] = [x, y]), p !== e)););
                                            return (y -= o) === n || y % n == 0 && y / n >= 0
                                        }
                                    }
                                },
                                PSEUDO: function(t, e) {
                                    var i, o = n.pseudos[t] || n.setFilters[t.toLowerCase()] || rt.error("unsupported pseudo: " + t);
                                    return o[b] ? o(e) : o.length > 1 ? (i = [t, t, "", e], n.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function(t, i) {
                                        for (var n, r = o(t, e), s = r.length; s--;) t[n = I(t, r[s])] = !(i[n] = r[s])
                                    }) : function(t) {
                                        return o(t, 0, i)
                                    }) : o
                                }
                            },
                            pseudos: {
                                not: at(function(t) {
                                    var e = [],
                                        i = [],
                                        n = a(t.replace($, "$1"));
                                    return n[b] ? at(function(t, e, i, o) {
                                        for (var r, s = n(t, null, o, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                                    }) : function(t, o, r) {
                                        return e[0] = t, n(e, null, r, i), e[0] = null, !i.pop()
                                    }
                                }),
                                has: at(function(t) {
                                    return function(e) {
                                        return rt(t, e).length > 0
                                    }
                                }),
                                contains: at(function(t) {
                                    return t = t.replace(Q, tt),
                                        function(e) {
                                            return (e.textContent || e.innerText || o(e)).indexOf(t) > -1
                                        }
                                }),
                                lang: at(function(t) {
                                    return W.test(t || "") || rt.error("unsupported lang: " + t), t = t.replace(Q, tt).toLowerCase(),
                                        function(e) {
                                            var i;
                                            do {
                                                if (i = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                                            } while ((e = e.parentNode) && 1 === e.nodeType);
                                            return !1
                                        }
                                }),
                                target: function(e) {
                                    var i = t.location && t.location.hash;
                                    return i && i.slice(1) === e.id
                                },
                                root: function(t) {
                                    return t === f
                                },
                                focus: function(t) {
                                    return t === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                                },
                                enabled: dt(!1),
                                disabled: dt(!0),
                                checked: function(t) {
                                    var e = t.nodeName.toLowerCase();
                                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                                },
                                selected: function(t) {
                                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                                },
                                empty: function(t) {
                                    for (t = t.firstChild; t; t = t.nextSibling)
                                        if (t.nodeType < 6) return !1;
                                    return !0
                                },
                                parent: function(t) {
                                    return !n.pseudos.empty(t)
                                },
                                header: function(t) {
                                    return K.test(t.nodeName)
                                },
                                input: function(t) {
                                    return V.test(t.nodeName)
                                },
                                button: function(t) {
                                    var e = t.nodeName.toLowerCase();
                                    return "input" === e && "button" === t.type || "button" === e
                                },
                                text: function(t) {
                                    var e;
                                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                                },
                                first: ft(function() {
                                    return [0]
                                }),
                                last: ft(function(t, e) {
                                    return [e - 1]
                                }),
                                eq: ft(function(t, e, i) {
                                    return [i < 0 ? i + e : i]
                                }),
                                even: ft(function(t, e) {
                                    for (var i = 0; i < e; i += 2) t.push(i);
                                    return t
                                }),
                                odd: ft(function(t, e) {
                                    for (var i = 1; i < e; i += 2) t.push(i);
                                    return t
                                }),
                                lt: ft(function(t, e, i) {
                                    for (var n = i < 0 ? i + e : i; --n >= 0;) t.push(n);
                                    return t
                                }),
                                gt: ft(function(t, e, i) {
                                    for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                                    return t
                                })
                            }
                        }).pseudos.nth = n.pseudos.eq, {
                            radio: !0,
                            checkbox: !0,
                            file: !0,
                            password: !0,
                            image: !0
                        }) n.pseudos[e] = ht(e);
                    for (e in {
                            submit: !0,
                            reset: !0
                        }) n.pseudos[e] = pt(e);

                    function gt() {}

                    function vt(t) {
                        for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
                        return n
                    }

                    function _t(t, e, i) {
                        var n = e.dir,
                            o = e.next,
                            r = o || n,
                            s = i && "parentNode" === r,
                            a = L++;
                        return e.first ? function(e, i, o) {
                            for (; e = e[n];)
                                if (1 === e.nodeType || s) return t(e, i, o);
                            return !1
                        } : function(e, i, l) {
                            var c, u, h, p = [x, a];
                            if (l) {
                                for (; e = e[n];)
                                    if ((1 === e.nodeType || s) && t(e, i, l)) return !0
                            } else
                                for (; e = e[n];)
                                    if (1 === e.nodeType || s)
                                        if (u = (h = e[b] || (e[b] = {}))[e.uniqueID] || (h[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[n] || e;
                                        else {
                                            if ((c = u[r]) && c[0] === x && c[1] === a) return p[2] = c[2];
                                            if (u[r] = p, p[2] = t(e, i, l)) return !0
                                        } return !1
                        }
                    }

                    function yt(t) {
                        return t.length > 1 ? function(e, i, n) {
                            for (var o = t.length; o--;)
                                if (!t[o](e, i, n)) return !1;
                            return !0
                        } : t[0]
                    }

                    function bt(t, e, i, n, o) {
                        for (var r, s = [], a = 0, l = t.length, c = null != e; a < l; a++)(r = t[a]) && (i && !i(r, n, o) || (s.push(r), c && e.push(a)));
                        return s
                    }

                    function wt(t, e, i, n, o, r) {
                        return n && !n[b] && (n = wt(n)), o && !o[b] && (o = wt(o, r)), at(function(r, s, a, l) {
                            var c, u, h, p = [],
                                d = [],
                                f = s.length,
                                m = r || function(t, e, i) {
                                    for (var n = 0, o = e.length; n < o; n++) rt(t, e[n], i);
                                    return i
                                }(e || "*", a.nodeType ? [a] : a, []),
                                g = !t || !r && e ? m : bt(m, p, t, a, l),
                                v = i ? o || (r ? t : f || n) ? [] : s : g;
                            if (i && i(g, v, a, l), n)
                                for (c = bt(v, d), n(c, [], a, l), u = c.length; u--;)(h = c[u]) && (v[d[u]] = !(g[d[u]] = h));
                            if (r) {
                                if (o || t) {
                                    if (o) {
                                        for (c = [], u = v.length; u--;)(h = v[u]) && c.push(g[u] = h);
                                        o(null, v = [], c, l)
                                    }
                                    for (u = v.length; u--;)(h = v[u]) && (c = o ? I(r, h) : p[u]) > -1 && (r[c] = !(s[c] = h))
                                }
                            } else v = bt(v === s ? v.splice(f, v.length) : v), o ? o(null, s, v, l) : A.apply(s, v)
                        })
                    }

                    function xt(t) {
                        for (var e, i, o, r = t.length, s = n.relative[t[0].type], a = s || n.relative[" "], l = s ? 1 : 0, u = _t(function(t) {
                                return t === e
                            }, a, !0), h = _t(function(t) {
                                return I(e, t) > -1
                            }, a, !0), p = [function(t, i, n) {
                                var o = !s && (n || i !== c) || ((e = i).nodeType ? u(t, i, n) : h(t, i, n));
                                return e = null, o
                            }]; l < r; l++)
                            if (i = n.relative[t[l].type]) p = [_t(yt(p), i)];
                            else {
                                if ((i = n.filter[t[l].type].apply(null, t[l].matches))[b]) {
                                    for (o = ++l; o < r && !n.relative[t[o].type]; o++);
                                    return wt(l > 1 && yt(p), l > 1 && vt(t.slice(0, l - 1).concat({
                                        value: " " === t[l - 2].type ? "*" : ""
                                    })).replace($, "$1"), i, l < o && xt(t.slice(l, o)), o < r && xt(t = t.slice(o)), o < r && vt(t))
                                }
                                p.push(i)
                            } return yt(p)
                    }
                    return gt.prototype = n.filters = n.pseudos, n.setFilters = new gt, s = rt.tokenize = function(t, e) {
                        var i, o, r, s, a, l, c, u = T[t + " "];
                        if (u) return e ? 0 : u.slice(0);
                        for (a = t, l = [], c = n.preFilter; a;) {
                            for (s in i && !(o = F.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = Z.exec(a)) && (i = o.shift(), r.push({
                                    value: i,
                                    type: o[0].replace($, " ")
                                }), a = a.slice(i.length)), n.filter) !(o = q[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                                value: i,
                                type: s,
                                matches: o
                            }), a = a.slice(i.length));
                            if (!i) break
                        }
                        return e ? a.length : a ? rt.error(t) : T(t, l).slice(0)
                    }, a = rt.compile = function(t, e) {
                        var i, o = [],
                            r = [],
                            a = k[t + " "];
                        if (!a) {
                            for (e || (e = s(t)), i = e.length; i--;)(a = xt(e[i]))[b] ? o.push(a) : r.push(a);
                            (a = k(t, function(t, e) {
                                var i = e.length > 0,
                                    o = t.length > 0,
                                    r = function(r, s, a, l, u) {
                                        var h, f, g, v = 0,
                                            _ = "0",
                                            y = r && [],
                                            b = [],
                                            w = c,
                                            L = r || o && n.find.TAG("*", u),
                                            C = x += null == w ? 1 : Math.random() || .1,
                                            T = L.length;
                                        for (u && (c = s === d || s || u); _ !== T && null != (h = L[_]); _++) {
                                            if (o && h) {
                                                for (f = 0, s || h.ownerDocument === d || (p(h), a = !m); g = t[f++];)
                                                    if (g(h, s || d, a)) {
                                                        l.push(h);
                                                        break
                                                    } u && (x = C)
                                            }
                                            i && ((h = !g && h) && v--, r && y.push(h))
                                        }
                                        if (v += _, i && _ !== v) {
                                            for (f = 0; g = e[f++];) g(y, b, s, a);
                                            if (r) {
                                                if (v > 0)
                                                    for (; _--;) y[_] || b[_] || (b[_] = D.call(l));
                                                b = bt(b)
                                            }
                                            A.apply(l, b), u && !r && b.length > 0 && v + e.length > 1 && rt.uniqueSort(l)
                                        }
                                        return u && (x = C, c = w), y
                                    };
                                return i ? at(r) : r
                            }(r, o))).selector = t
                        }
                        return a
                    }, l = rt.select = function(t, e, i, o) {
                        var r, l, c, u, h, p = "function" == typeof t && t,
                            d = !o && s(t = p.selector || t);
                        if (i = i || [], 1 === d.length) {
                            if ((l = d[0] = d[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === e.nodeType && m && n.relative[l[1].type]) {
                                if (!(e = (n.find.ID(c.matches[0].replace(Q, tt), e) || [])[0])) return i;
                                p && (e = e.parentNode), t = t.slice(l.shift().value.length)
                            }
                            for (r = q.needsContext.test(t) ? 0 : l.length; r-- && (c = l[r], !n.relative[u = c.type]);)
                                if ((h = n.find[u]) && (o = h(c.matches[0].replace(Q, tt), X.test(l[0].type) && mt(e.parentNode) || e))) {
                                    if (l.splice(r, 1), !(t = o.length && vt(l))) return A.apply(i, o), i;
                                    break
                                }
                        }
                        return (p || a(t, d))(o, e, !m, i, !e || X.test(t) && mt(e.parentNode) || e), i
                    }, i.sortStable = b.split("").sort(P).join("") === b, i.detectDuplicates = !!h, p(), i.sortDetached = lt(function(t) {
                        return 1 & t.compareDocumentPosition(d.createElement("fieldset"))
                    }), lt(function(t) {
                        return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                    }) || ct("type|href|height|width", function(t, e, i) {
                        if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                    }), i.attributes && lt(function(t) {
                        return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                    }) || ct("value", function(t, e, i) {
                        if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                    }), lt(function(t) {
                        return null == t.getAttribute("disabled")
                    }) || ct(U, function(t, e, i) {
                        var n;
                        if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                    }), rt
                }(i);
            L.find = k, L.expr = k.selectors, L.expr[":"] = L.expr.pseudos, L.uniqueSort = L.unique = k.uniqueSort, L.text = k.getText, L.isXMLDoc = k.isXML, L.contains = k.contains, L.escapeSelector = k.escape;
            var P = function(t, e, i) {
                    for (var n = [], o = void 0 !== i;
                        (t = t[e]) && 9 !== t.nodeType;)
                        if (1 === t.nodeType) {
                            if (o && L(t).is(i)) break;
                            n.push(t)
                        } return n
                },
                S = function(t, e) {
                    for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                    return i
                },
                E = L.expr.match.needsContext;

            function D(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            }
            var M = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function A(t, e, i) {
                return _(e) ? L.grep(t, function(t, n) {
                    return !!e.call(t, n, t) !== i
                }) : e.nodeType ? L.grep(t, function(t) {
                    return t === e !== i
                }) : "string" != typeof e ? L.grep(t, function(t) {
                    return h.call(e, t) > -1 !== i
                }) : L.filter(e, t, i)
            }
            L.filter = function(t, e, i) {
                var n = e[0];
                return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? L.find.matchesSelector(n, t) ? [n] : [] : L.find.matches(t, L.grep(e, function(t) {
                    return 1 === t.nodeType
                }))
            }, L.fn.extend({
                find: function(t) {
                    var e, i, n = this.length,
                        o = this;
                    if ("string" != typeof t) return this.pushStack(L(t).filter(function() {
                        for (e = 0; e < n; e++)
                            if (L.contains(o[e], this)) return !0
                    }));
                    for (i = this.pushStack([]), e = 0; e < n; e++) L.find(t, o[e], i);
                    return n > 1 ? L.uniqueSort(i) : i
                },
                filter: function(t) {
                    return this.pushStack(A(this, t || [], !1))
                },
                not: function(t) {
                    return this.pushStack(A(this, t || [], !0))
                },
                is: function(t) {
                    return !!A(this, "string" == typeof t && E.test(t) ? L(t) : t || [], !1).length
                }
            });
            var O, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (L.fn.init = function(t, e, i) {
                var n, o;
                if (!t) return this;
                if (i = i || O, "string" == typeof t) {
                    if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : I.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                    if (n[1]) {
                        if (e = e instanceof L ? e[0] : e, L.merge(this, L.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : s, !0)), M.test(n[1]) && L.isPlainObject(e))
                            for (n in e) _(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                        return this
                    }
                    return (o = s.getElementById(n[2])) && (this[0] = o, this.length = 1), this
                }
                return t.nodeType ? (this[0] = t, this.length = 1, this) : _(t) ? void 0 !== i.ready ? i.ready(t) : t(L) : L.makeArray(t, this)
            }).prototype = L.fn, O = L(s);
            var U = /^(?:parents|prev(?:Until|All))/,
                N = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };

            function z(t, e) {
                for (;
                    (t = t[e]) && 1 !== t.nodeType;);
                return t
            }
            L.fn.extend({
                has: function(t) {
                    var e = L(t, this),
                        i = e.length;
                    return this.filter(function() {
                        for (var t = 0; t < i; t++)
                            if (L.contains(this, e[t])) return !0
                    })
                },
                closest: function(t, e) {
                    var i, n = 0,
                        o = this.length,
                        r = [],
                        s = "string" != typeof t && L(t);
                    if (!E.test(t))
                        for (; n < o; n++)
                            for (i = this[n]; i && i !== e; i = i.parentNode)
                                if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && L.find.matchesSelector(i, t))) {
                                    r.push(i);
                                    break
                                } return this.pushStack(r.length > 1 ? L.uniqueSort(r) : r)
                },
                index: function(t) {
                    return t ? "string" == typeof t ? h.call(L(t), this[0]) : h.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(t, e) {
                    return this.pushStack(L.uniqueSort(L.merge(this.get(), L(t, e))))
                },
                addBack: function(t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }
            }), L.each({
                parent: function(t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null
                },
                parents: function(t) {
                    return P(t, "parentNode")
                },
                parentsUntil: function(t, e, i) {
                    return P(t, "parentNode", i)
                },
                next: function(t) {
                    return z(t, "nextSibling")
                },
                prev: function(t) {
                    return z(t, "previousSibling")
                },
                nextAll: function(t) {
                    return P(t, "nextSibling")
                },
                prevAll: function(t) {
                    return P(t, "previousSibling")
                },
                nextUntil: function(t, e, i) {
                    return P(t, "nextSibling", i)
                },
                prevUntil: function(t, e, i) {
                    return P(t, "previousSibling", i)
                },
                siblings: function(t) {
                    return S((t.parentNode || {}).firstChild, t)
                },
                children: function(t) {
                    return S(t.firstChild)
                },
                contents: function(t) {
                    return D(t, "iframe") ? t.contentDocument : (D(t, "template") && (t = t.content || t), L.merge([], t.childNodes))
                }
            }, function(t, e) {
                L.fn[t] = function(i, n) {
                    var o = L.map(this, e, i);
                    return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = L.filter(n, o)), this.length > 1 && (N[t] || L.uniqueSort(o), U.test(t) && o.reverse()), this.pushStack(o)
                }
            });
            var B = /[^\x20\t\r\n\f]+/g;

            function R(t) {
                return t
            }

            function j(t) {
                throw t
            }

            function $(t, e, i, n) {
                var o;
                try {
                    t && _(o = t.promise) ? o.call(t).done(e).fail(i) : t && _(o = t.then) ? o.call(t, e, i) : e.apply(void 0, [t].slice(n))
                } catch (t) {
                    i.apply(void 0, [t])
                }
            }
            L.Callbacks = function(t) {
                t = "string" == typeof t ? function(t) {
                    var e = {};
                    return L.each(t.match(B) || [], function(t, i) {
                        e[i] = !0
                    }), e
                }(t) : L.extend({}, t);
                var e, i, n, o, r = [],
                    s = [],
                    a = -1,
                    l = function() {
                        for (o = o || t.once, n = e = !0; s.length; a = -1)
                            for (i = s.shift(); ++a < r.length;) !1 === r[a].apply(i[0], i[1]) && t.stopOnFalse && (a = r.length, i = !1);
                        t.memory || (i = !1), e = !1, o && (r = i ? [] : "")
                    },
                    c = {
                        add: function() {
                            return r && (i && !e && (a = r.length - 1, s.push(i)), function e(i) {
                                L.each(i, function(i, n) {
                                    _(n) ? t.unique && c.has(n) || r.push(n) : n && n.length && "string" !== x(n) && e(n)
                                })
                            }(arguments), i && !e && l()), this
                        },
                        remove: function() {
                            return L.each(arguments, function(t, e) {
                                for (var i;
                                    (i = L.inArray(e, r, i)) > -1;) r.splice(i, 1), i <= a && a--
                            }), this
                        },
                        has: function(t) {
                            return t ? L.inArray(t, r) > -1 : r.length > 0
                        },
                        empty: function() {
                            return r && (r = []), this
                        },
                        disable: function() {
                            return o = s = [], r = i = "", this
                        },
                        disabled: function() {
                            return !r
                        },
                        lock: function() {
                            return o = s = [], i || e || (r = i = ""), this
                        },
                        locked: function() {
                            return !!o
                        },
                        fireWith: function(t, i) {
                            return o || (i = [t, (i = i || []).slice ? i.slice() : i], s.push(i), e || l()), this
                        },
                        fire: function() {
                            return c.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!n
                        }
                    };
                return c
            }, L.extend({
                Deferred: function(t) {
                    var e = [
                            ["notify", "progress", L.Callbacks("memory"), L.Callbacks("memory"), 2],
                            ["resolve", "done", L.Callbacks("once memory"), L.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", L.Callbacks("once memory"), L.Callbacks("once memory"), 1, "rejected"]
                        ],
                        n = "pending",
                        o = {
                            state: function() {
                                return n
                            },
                            always: function() {
                                return r.done(arguments).fail(arguments), this
                            },
                            catch: function(t) {
                                return o.then(null, t)
                            },
                            pipe: function() {
                                var t = arguments;
                                return L.Deferred(function(i) {
                                    L.each(e, function(e, n) {
                                        var o = _(t[n[4]]) && t[n[4]];
                                        r[n[1]](function() {
                                            var t = o && o.apply(this, arguments);
                                            t && _(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[n[0] + "With"](this, o ? [t] : arguments)
                                        })
                                    }), t = null
                                }).promise()
                            },
                            then: function(t, n, o) {
                                var r = 0;

                                function s(t, e, n, o) {
                                    return function() {
                                        var a = this,
                                            l = arguments,
                                            c = function() {
                                                var i, c;
                                                if (!(t < r)) {
                                                    if ((i = n.apply(a, l)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                                    c = i && ("object" == typeof i || "function" == typeof i) && i.then, _(c) ? o ? c.call(i, s(r, e, R, o), s(r, e, j, o)) : (r++, c.call(i, s(r, e, R, o), s(r, e, j, o), s(r, e, R, e.notifyWith))) : (n !== R && (a = void 0, l = [i]), (o || e.resolveWith)(a, l))
                                                }
                                            },
                                            u = o ? c : function() {
                                                try {
                                                    c()
                                                } catch (i) {
                                                    L.Deferred.exceptionHook && L.Deferred.exceptionHook(i, u.stackTrace), t + 1 >= r && (n !== j && (a = void 0, l = [i]), e.rejectWith(a, l))
                                                }
                                            };
                                        t ? u() : (L.Deferred.getStackHook && (u.stackTrace = L.Deferred.getStackHook()), i.setTimeout(u))
                                    }
                                }
                                return L.Deferred(function(i) {
                                    e[0][3].add(s(0, i, _(o) ? o : R, i.notifyWith)), e[1][3].add(s(0, i, _(t) ? t : R)), e[2][3].add(s(0, i, _(n) ? n : j))
                                }).promise()
                            },
                            promise: function(t) {
                                return null != t ? L.extend(t, o) : o
                            }
                        },
                        r = {};
                    return L.each(e, function(t, i) {
                        var s = i[2],
                            a = i[5];
                        o[i[1]] = s.add, a && s.add(function() {
                            n = a
                        }, e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), s.add(i[3].fire), r[i[0]] = function() {
                            return r[i[0] + "With"](this === r ? void 0 : this, arguments), this
                        }, r[i[0] + "With"] = s.fireWith
                    }), o.promise(r), t && t.call(r, r), r
                },
                when: function(t) {
                    var e = arguments.length,
                        i = e,
                        n = Array(i),
                        o = l.call(arguments),
                        r = L.Deferred(),
                        s = function(t) {
                            return function(i) {
                                n[t] = this, o[t] = arguments.length > 1 ? l.call(arguments) : i, --e || r.resolveWith(n, o)
                            }
                        };
                    if (e <= 1 && ($(t, r.done(s(i)).resolve, r.reject, !e), "pending" === r.state() || _(o[i] && o[i].then))) return r.then();
                    for (; i--;) $(o[i], s(i), r.reject);
                    return r.promise()
                }
            });
            var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            L.Deferred.exceptionHook = function(t, e) {
                i.console && i.console.warn && t && F.test(t.name) && i.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
            }, L.readyException = function(t) {
                i.setTimeout(function() {
                    throw t
                })
            };
            var Z = L.Deferred();

            function H() {
                s.removeEventListener("DOMContentLoaded", H), i.removeEventListener("load", H), L.ready()
            }
            L.fn.ready = function(t) {
                return Z.then(t).catch(function(t) {
                    L.readyException(t)
                }), this
            }, L.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(t) {
                    (!0 === t ? --L.readyWait : L.isReady) || (L.isReady = !0, !0 !== t && --L.readyWait > 0 || Z.resolveWith(s, [L]))
                }
            }), L.ready.then = Z.then, "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? i.setTimeout(L.ready) : (s.addEventListener("DOMContentLoaded", H), i.addEventListener("load", H));
            var G = function(t, e, i, n, o, r, s) {
                    var a = 0,
                        l = t.length,
                        c = null == i;
                    if ("object" === x(i))
                        for (a in o = !0, i) G(t, e, a, i[a], !0, r, s);
                    else if (void 0 !== n && (o = !0, _(n) || (s = !0), c && (s ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
                            return c.call(L(t), i)
                        })), e))
                        for (; a < l; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
                    return o ? t : c ? e.call(t) : l ? e(t[0], i) : r
                },
                W = /^-ms-/,
                q = /-([a-z])/g;

            function V(t, e) {
                return e.toUpperCase()
            }

            function K(t) {
                return t.replace(W, "ms-").replace(q, V)
            }
            var Y = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };

            function J() {
                this.expando = L.expando + J.uid++
            }
            J.uid = 1, J.prototype = {
                cache: function(t) {
                    var e = t[this.expando];
                    return e || (e = {}, Y(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                        value: e,
                        configurable: !0
                    }))), e
                },
                set: function(t, e, i) {
                    var n, o = this.cache(t);
                    if ("string" == typeof e) o[K(e)] = i;
                    else
                        for (n in e) o[K(n)] = e[n];
                    return o
                },
                get: function(t, e) {
                    return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][K(e)]
                },
                access: function(t, e, i) {
                    return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
                },
                remove: function(t, e) {
                    var i, n = t[this.expando];
                    if (void 0 !== n) {
                        if (void 0 !== e) {
                            i = (e = Array.isArray(e) ? e.map(K) : (e = K(e)) in n ? [e] : e.match(B) || []).length;
                            for (; i--;) delete n[e[i]]
                        }(void 0 === e || L.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                    }
                },
                hasData: function(t) {
                    var e = t[this.expando];
                    return void 0 !== e && !L.isEmptyObject(e)
                }
            };
            var X = new J,
                Q = new J,
                tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                et = /[A-Z]/g;

            function it(t, e, i) {
                var n;
                if (void 0 === i && 1 === t.nodeType)
                    if (n = "data-" + e.replace(et, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
                        try {
                            i = function(t) {
                                return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : tt.test(t) ? JSON.parse(t) : t)
                            }(i)
                        } catch (t) {}
                        Q.set(t, e, i)
                    } else i = void 0;
                return i
            }
            L.extend({
                hasData: function(t) {
                    return Q.hasData(t) || X.hasData(t)
                },
                data: function(t, e, i) {
                    return Q.access(t, e, i)
                },
                removeData: function(t, e) {
                    Q.remove(t, e)
                },
                _data: function(t, e, i) {
                    return X.access(t, e, i)
                },
                _removeData: function(t, e) {
                    X.remove(t, e)
                }
            }), L.fn.extend({
                data: function(t, e) {
                    var i, n, o, r = this[0],
                        s = r && r.attributes;
                    if (void 0 === t) {
                        if (this.length && (o = Q.get(r), 1 === r.nodeType && !X.get(r, "hasDataAttrs"))) {
                            for (i = s.length; i--;) s[i] && 0 === (n = s[i].name).indexOf("data-") && (n = K(n.slice(5)), it(r, n, o[n]));
                            X.set(r, "hasDataAttrs", !0)
                        }
                        return o
                    }
                    return "object" == typeof t ? this.each(function() {
                        Q.set(this, t)
                    }) : G(this, function(e) {
                        var i;
                        if (r && void 0 === e) return void 0 !== (i = Q.get(r, t)) ? i : void 0 !== (i = it(r, t)) ? i : void 0;
                        this.each(function() {
                            Q.set(this, t, e)
                        })
                    }, null, e, arguments.length > 1, null, !0)
                },
                removeData: function(t) {
                    return this.each(function() {
                        Q.remove(this, t)
                    })
                }
            }), L.extend({
                queue: function(t, e, i) {
                    var n;
                    if (t) return e = (e || "fx") + "queue", n = X.get(t, e), i && (!n || Array.isArray(i) ? n = X.access(t, e, L.makeArray(i)) : n.push(i)), n || []
                },
                dequeue: function(t, e) {
                    e = e || "fx";
                    var i = L.queue(t, e),
                        n = i.length,
                        o = i.shift(),
                        r = L._queueHooks(t, e);
                    "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete r.stop, o.call(t, function() {
                        L.dequeue(t, e)
                    }, r)), !n && r && r.empty.fire()
                },
                _queueHooks: function(t, e) {
                    var i = e + "queueHooks";
                    return X.get(t, i) || X.access(t, i, {
                        empty: L.Callbacks("once memory").add(function() {
                            X.remove(t, [e + "queue", i])
                        })
                    })
                }
            }), L.fn.extend({
                queue: function(t, e) {
                    var i = 2;
                    return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? L.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                        var i = L.queue(this, t, e);
                        L._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && L.dequeue(this, t)
                    })
                },
                dequeue: function(t) {
                    return this.each(function() {
                        L.dequeue(this, t)
                    })
                },
                clearQueue: function(t) {
                    return this.queue(t || "fx", [])
                },
                promise: function(t, e) {
                    var i, n = 1,
                        o = L.Deferred(),
                        r = this,
                        s = this.length,
                        a = function() {
                            --n || o.resolveWith(r, [r])
                        };
                    for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(i = X.get(r[s], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
                    return a(), o.promise(e)
                }
            });
            var nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                ot = new RegExp("^(?:([+-])=|)(" + nt + ")([a-z%]*)$", "i"),
                rt = ["Top", "Right", "Bottom", "Left"],
                st = function(t, e) {
                    return "none" === (t = e || t).style.display || "" === t.style.display && L.contains(t.ownerDocument, t) && "none" === L.css(t, "display")
                },
                at = function(t, e, i, n) {
                    var o, r, s = {};
                    for (r in e) s[r] = t.style[r], t.style[r] = e[r];
                    for (r in o = i.apply(t, n || []), e) t.style[r] = s[r];
                    return o
                };

            function lt(t, e, i, n) {
                var o, r, s = 20,
                    a = n ? function() {
                        return n.cur()
                    } : function() {
                        return L.css(t, e, "")
                    },
                    l = a(),
                    c = i && i[3] || (L.cssNumber[e] ? "" : "px"),
                    u = (L.cssNumber[e] || "px" !== c && +l) && ot.exec(L.css(t, e));
                if (u && u[3] !== c) {
                    for (l /= 2, c = c || u[3], u = +l || 1; s--;) L.style(t, e, u + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
                    u *= 2, L.style(t, e, u + c), i = i || []
                }
                return i && (u = +u || +l || 0, o = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = u, n.end = o)), o
            }
            var ct = {};

            function ut(t) {
                var e, i = t.ownerDocument,
                    n = t.nodeName,
                    o = ct[n];
                return o || (e = i.body.appendChild(i.createElement(n)), o = L.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), ct[n] = o, o)
            }

            function ht(t, e) {
                for (var i, n, o = [], r = 0, s = t.length; r < s; r++)(n = t[r]).style && (i = n.style.display, e ? ("none" === i && (o[r] = X.get(n, "display") || null, o[r] || (n.style.display = "")), "" === n.style.display && st(n) && (o[r] = ut(n))) : "none" !== i && (o[r] = "none", X.set(n, "display", i)));
                for (r = 0; r < s; r++) null != o[r] && (t[r].style.display = o[r]);
                return t
            }
            L.fn.extend({
                show: function() {
                    return ht(this, !0)
                },
                hide: function() {
                    return ht(this)
                },
                toggle: function(t) {
                    return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                        st(this) ? L(this).show() : L(this).hide()
                    })
                }
            });
            var pt = /^(?:checkbox|radio)$/i,
                dt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                ft = /^$|^module$|\/(?:java|ecma)script/i,
                mt = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };

            function gt(t, e) {
                var i;
                return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && D(t, e) ? L.merge([t], i) : i
            }

            function vt(t, e) {
                for (var i = 0, n = t.length; i < n; i++) X.set(t[i], "globalEval", !e || X.get(e[i], "globalEval"))
            }
            mt.optgroup = mt.option, mt.tbody = mt.tfoot = mt.colgroup = mt.caption = mt.thead, mt.th = mt.td;
            var _t = /<|&#?\w+;/;

            function yt(t, e, i, n, o) {
                for (var r, s, a, l, c, u, h = e.createDocumentFragment(), p = [], d = 0, f = t.length; d < f; d++)
                    if ((r = t[d]) || 0 === r)
                        if ("object" === x(r)) L.merge(p, r.nodeType ? [r] : r);
                        else if (_t.test(r)) {
                    for (s = s || h.appendChild(e.createElement("div")), a = (dt.exec(r) || ["", ""])[1].toLowerCase(), l = mt[a] || mt._default, s.innerHTML = l[1] + L.htmlPrefilter(r) + l[2], u = l[0]; u--;) s = s.lastChild;
                    L.merge(p, s.childNodes), (s = h.firstChild).textContent = ""
                } else p.push(e.createTextNode(r));
                for (h.textContent = "", d = 0; r = p[d++];)
                    if (n && L.inArray(r, n) > -1) o && o.push(r);
                    else if (c = L.contains(r.ownerDocument, r), s = gt(h.appendChild(r), "script"), c && vt(s), i)
                    for (u = 0; r = s[u++];) ft.test(r.type || "") && i.push(r);
                return h
            }! function() {
                var t = s.createDocumentFragment().appendChild(s.createElement("div")),
                    e = s.createElement("input");
                e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), v.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
            }();
            var bt = s.documentElement,
                wt = /^key/,
                xt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Lt = /^([^.]*)(?:\.(.+)|)/;

            function Ct() {
                return !0
            }

            function Tt() {
                return !1
            }

            function kt() {
                try {
                    return s.activeElement
                } catch (t) {}
            }

            function Pt(t, e, i, n, o, r) {
                var s, a;
                if ("object" == typeof e) {
                    for (a in "string" != typeof i && (n = n || i, i = void 0), e) Pt(t, a, i, n, e[a], r);
                    return t
                }
                if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o) o = Tt;
                else if (!o) return t;
                return 1 === r && (s = o, (o = function(t) {
                    return L().off(t), s.apply(this, arguments)
                }).guid = s.guid || (s.guid = L.guid++)), t.each(function() {
                    L.event.add(this, e, o, n, i)
                })
            }
            L.event = {
                global: {},
                add: function(t, e, i, n, o) {
                    var r, s, a, l, c, u, h, p, d, f, m, g = X.get(t);
                    if (g)
                        for (i.handler && (i = (r = i).handler, o = r.selector), o && L.find.matchesSelector(bt, o), i.guid || (i.guid = L.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(e) {
                                return void 0 !== L && L.event.triggered !== e.type ? L.event.dispatch.apply(t, arguments) : void 0
                            }), c = (e = (e || "").match(B) || [""]).length; c--;) d = m = (a = Lt.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), d && (h = L.event.special[d] || {}, d = (o ? h.delegateType : h.bindType) || d, h = L.event.special[d] || {}, u = L.extend({
                            type: d,
                            origType: m,
                            data: n,
                            handler: i,
                            guid: i.guid,
                            selector: o,
                            needsContext: o && L.expr.match.needsContext.test(o),
                            namespace: f.join(".")
                        }, r), (p = l[d]) || ((p = l[d] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(t, n, f, s) || t.addEventListener && t.addEventListener(d, s)), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), L.event.global[d] = !0)
                },
                remove: function(t, e, i, n, o) {
                    var r, s, a, l, c, u, h, p, d, f, m, g = X.hasData(t) && X.get(t);
                    if (g && (l = g.events)) {
                        for (c = (e = (e || "").match(B) || [""]).length; c--;)
                            if (d = m = (a = Lt.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), d) {
                                for (h = L.event.special[d] || {}, p = l[d = (n ? h.delegateType : h.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) u = p[r], !o && m !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount--, h.remove && h.remove.call(t, u));
                                s && !p.length && (h.teardown && !1 !== h.teardown.call(t, f, g.handle) || L.removeEvent(t, d, g.handle), delete l[d])
                            } else
                                for (d in l) L.event.remove(t, d + e[c], i, n, !0);
                        L.isEmptyObject(l) && X.remove(t, "handle events")
                    }
                },
                dispatch: function(t) {
                    var e, i, n, o, r, s, a = L.event.fix(t),
                        l = new Array(arguments.length),
                        c = (X.get(this, "events") || {})[a.type] || [],
                        u = L.event.special[a.type] || {};
                    for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
                    if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                        for (s = L.event.handlers.call(this, a, c), e = 0;
                            (o = s[e++]) && !a.isPropagationStopped();)
                            for (a.currentTarget = o.elem, i = 0;
                                (r = o.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (n = ((L.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, a), a.result
                    }
                },
                handlers: function(t, e) {
                    var i, n, o, r, s, a = [],
                        l = e.delegateCount,
                        c = t.target;
                    if (l && c.nodeType && !("click" === t.type && t.button >= 1))
                        for (; c !== this; c = c.parentNode || this)
                            if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                                for (r = [], s = {}, i = 0; i < l; i++) void 0 === s[o = (n = e[i]).selector + " "] && (s[o] = n.needsContext ? L(o, this).index(c) > -1 : L.find(o, this, null, [c]).length), s[o] && r.push(n);
                                r.length && a.push({
                                    elem: c,
                                    handlers: r
                                })
                            } return c = this, l < e.length && a.push({
                        elem: c,
                        handlers: e.slice(l)
                    }), a
                },
                addProp: function(t, e) {
                    Object.defineProperty(L.Event.prototype, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: _(e) ? function() {
                            if (this.originalEvent) return e(this.originalEvent)
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[t]
                        },
                        set: function(e) {
                            Object.defineProperty(this, t, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: e
                            })
                        }
                    })
                },
                fix: function(t) {
                    return t[L.expando] ? t : new L.Event(t)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== kt() && this.focus) return this.focus(), !1
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === kt() && this.blur) return this.blur(), !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if ("checkbox" === this.type && this.click && D(this, "input")) return this.click(), !1
                        },
                        _default: function(t) {
                            return D(t.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(t) {
                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                        }
                    }
                }
            }, L.removeEvent = function(t, e, i) {
                t.removeEventListener && t.removeEventListener(e, i)
            }, L.Event = function(t, e) {
                if (!(this instanceof L.Event)) return new L.Event(t, e);
                t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Ct : Tt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && L.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[L.expando] = !0
            }, L.Event.prototype = {
                constructor: L.Event,
                isDefaultPrevented: Tt,
                isPropagationStopped: Tt,
                isImmediatePropagationStopped: Tt,
                isSimulated: !1,
                preventDefault: function() {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = Ct, t && !this.isSimulated && t.preventDefault()
                },
                stopPropagation: function() {
                    var t = this.originalEvent;
                    this.isPropagationStopped = Ct, t && !this.isSimulated && t.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var t = this.originalEvent;
                    this.isImmediatePropagationStopped = Ct, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
                }
            }, L.each({
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
                which: function(t) {
                    var e = t.button;
                    return null == t.which && wt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && xt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
                }
            }, L.event.addProp), L.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(t, e) {
                L.event.special[t] = {
                    delegateType: e,
                    bindType: e,
                    handle: function(t) {
                        var i, n = t.relatedTarget,
                            o = t.handleObj;
                        return n && (n === this || L.contains(this, n)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
                    }
                }
            }), L.fn.extend({
                on: function(t, e, i, n) {
                    return Pt(this, t, e, i, n)
                },
                one: function(t, e, i, n) {
                    return Pt(this, t, e, i, n, 1)
                },
                off: function(t, e, i) {
                    var n, o;
                    if (t && t.preventDefault && t.handleObj) return n = t.handleObj, L(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                    if ("object" == typeof t) {
                        for (o in t) this.off(o, e, t[o]);
                        return this
                    }
                    return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = Tt), this.each(function() {
                        L.event.remove(this, t, i, e)
                    })
                }
            });
            var St = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                Et = /<script|<style|<link/i,
                Dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Mt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function At(t, e) {
                return D(t, "table") && D(11 !== e.nodeType ? e : e.firstChild, "tr") && L(t).children("tbody")[0] || t
            }

            function Ot(t) {
                return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
            }

            function It(t) {
                return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
            }

            function Ut(t, e) {
                var i, n, o, r, s, a, l, c;
                if (1 === e.nodeType) {
                    if (X.hasData(t) && (r = X.access(t), s = X.set(e, r), c = r.events))
                        for (o in delete s.handle, s.events = {}, c)
                            for (i = 0, n = c[o].length; i < n; i++) L.event.add(e, o, c[o][i]);
                    Q.hasData(t) && (a = Q.access(t), l = L.extend({}, a), Q.set(e, l))
                }
            }

            function Nt(t, e) {
                var i = e.nodeName.toLowerCase();
                "input" === i && pt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
            }

            function zt(t, e, i, n) {
                e = c.apply([], e);
                var o, r, s, a, l, u, h = 0,
                    p = t.length,
                    d = p - 1,
                    f = e[0],
                    m = _(f);
                if (m || p > 1 && "string" == typeof f && !v.checkClone && Dt.test(f)) return t.each(function(o) {
                    var r = t.eq(o);
                    m && (e[0] = f.call(this, o, r.html())), zt(r, e, i, n)
                });
                if (p && (r = (o = yt(e, t[0].ownerDocument, !1, t, n)).firstChild, 1 === o.childNodes.length && (o = r), r || n)) {
                    for (a = (s = L.map(gt(o, "script"), Ot)).length; h < p; h++) l = o, h !== d && (l = L.clone(l, !0, !0), a && L.merge(s, gt(l, "script"))), i.call(t[h], l, h);
                    if (a)
                        for (u = s[s.length - 1].ownerDocument, L.map(s, It), h = 0; h < a; h++) l = s[h], ft.test(l.type || "") && !X.access(l, "globalEval") && L.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? L._evalUrl && L._evalUrl(l.src) : w(l.textContent.replace(Mt, ""), u, l))
                }
                return t
            }

            function Bt(t, e, i) {
                for (var n, o = e ? L.filter(e, t) : t, r = 0; null != (n = o[r]); r++) i || 1 !== n.nodeType || L.cleanData(gt(n)), n.parentNode && (i && L.contains(n.ownerDocument, n) && vt(gt(n, "script")), n.parentNode.removeChild(n));
                return t
            }
            L.extend({
                htmlPrefilter: function(t) {
                    return t.replace(St, "<$1></$2>")
                },
                clone: function(t, e, i) {
                    var n, o, r, s, a = t.cloneNode(!0),
                        l = L.contains(t.ownerDocument, t);
                    if (!(v.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || L.isXMLDoc(t)))
                        for (s = gt(a), n = 0, o = (r = gt(t)).length; n < o; n++) Nt(r[n], s[n]);
                    if (e)
                        if (i)
                            for (r = r || gt(t), s = s || gt(a), n = 0, o = r.length; n < o; n++) Ut(r[n], s[n]);
                        else Ut(t, a);
                    return (s = gt(a, "script")).length > 0 && vt(s, !l && gt(t, "script")), a
                },
                cleanData: function(t) {
                    for (var e, i, n, o = L.event.special, r = 0; void 0 !== (i = t[r]); r++)
                        if (Y(i)) {
                            if (e = i[X.expando]) {
                                if (e.events)
                                    for (n in e.events) o[n] ? L.event.remove(i, n) : L.removeEvent(i, n, e.handle);
                                i[X.expando] = void 0
                            }
                            i[Q.expando] && (i[Q.expando] = void 0)
                        }
                }
            }), L.fn.extend({
                detach: function(t) {
                    return Bt(this, t, !0)
                },
                remove: function(t) {
                    return Bt(this, t)
                },
                text: function(t) {
                    return G(this, function(t) {
                        return void 0 === t ? L.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                        })
                    }, null, t, arguments.length)
                },
                append: function() {
                    return zt(this, arguments, function(t) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || At(this, t).appendChild(t)
                    })
                },
                prepend: function() {
                    return zt(this, arguments, function(t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = At(this, t);
                            e.insertBefore(t, e.firstChild)
                        }
                    })
                },
                before: function() {
                    return zt(this, arguments, function(t) {
                        this.parentNode && this.parentNode.insertBefore(t, this)
                    })
                },
                after: function() {
                    return zt(this, arguments, function(t) {
                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (L.cleanData(gt(t, !1)), t.textContent = "");
                    return this
                },
                clone: function(t, e) {
                    return t = null != t && t, e = null == e ? t : e, this.map(function() {
                        return L.clone(this, t, e)
                    })
                },
                html: function(t) {
                    return G(this, function(t) {
                        var e = this[0] || {},
                            i = 0,
                            n = this.length;
                        if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                        if ("string" == typeof t && !Et.test(t) && !mt[(dt.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = L.htmlPrefilter(t);
                            try {
                                for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (L.cleanData(gt(e, !1)), e.innerHTML = t);
                                e = 0
                            } catch (t) {}
                        }
                        e && this.empty().append(t)
                    }, null, t, arguments.length)
                },
                replaceWith: function() {
                    var t = [];
                    return zt(this, arguments, function(e) {
                        var i = this.parentNode;
                        L.inArray(this, t) < 0 && (L.cleanData(gt(this)), i && i.replaceChild(e, this))
                    }, t)
                }
            }), L.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(t, e) {
                L.fn[t] = function(t) {
                    for (var i, n = [], o = L(t), r = o.length - 1, s = 0; s <= r; s++) i = s === r ? this : this.clone(!0), L(o[s])[e](i), u.apply(n, i.get());
                    return this.pushStack(n)
                }
            });
            var Rt = new RegExp("^(" + nt + ")(?!px)[a-z%]+$", "i"),
                jt = function(t) {
                    var e = t.ownerDocument.defaultView;
                    return e && e.opener || (e = i), e.getComputedStyle(t)
                },
                $t = new RegExp(rt.join("|"), "i");

            function Ft(t, e, i) {
                var n, o, r, s, a = t.style;
                return (i = i || jt(t)) && ("" !== (s = i.getPropertyValue(e) || i[e]) || L.contains(t.ownerDocument, t) || (s = L.style(t, e)), !v.pixelBoxStyles() && Rt.test(s) && $t.test(e) && (n = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
            }

            function Zt(t, e) {
                return {
                    get: function() {
                        if (!t()) return (this.get = e).apply(this, arguments);
                        delete this.get
                    }
                }
            }! function() {
                function t() {
                    if (u) {
                        c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", bt.appendChild(c).appendChild(u);
                        var t = i.getComputedStyle(u);
                        n = "1%" !== t.top, l = 12 === e(t.marginLeft), u.style.right = "60%", a = 36 === e(t.right), o = 36 === e(t.width), u.style.position = "absolute", r = 36 === u.offsetWidth || "absolute", bt.removeChild(c), u = null
                    }
                }

                function e(t) {
                    return Math.round(parseFloat(t))
                }
                var n, o, r, a, l, c = s.createElement("div"),
                    u = s.createElement("div");
                u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === u.style.backgroundClip, L.extend(v, {
                    boxSizingReliable: function() {
                        return t(), o
                    },
                    pixelBoxStyles: function() {
                        return t(), a
                    },
                    pixelPosition: function() {
                        return t(), n
                    },
                    reliableMarginLeft: function() {
                        return t(), l
                    },
                    scrollboxSize: function() {
                        return t(), r
                    }
                }))
            }();
            var Ht = /^(none|table(?!-c[ea]).+)/,
                Gt = /^--/,
                Wt = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                qt = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                Vt = ["Webkit", "Moz", "ms"],
                Kt = s.createElement("div").style;

            function Yt(t) {
                var e = L.cssProps[t];
                return e || (e = L.cssProps[t] = function(t) {
                    if (t in Kt) return t;
                    for (var e = t[0].toUpperCase() + t.slice(1), i = Vt.length; i--;)
                        if ((t = Vt[i] + e) in Kt) return t
                }(t) || t), e
            }

            function Jt(t, e, i) {
                var n = ot.exec(e);
                return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
            }

            function Xt(t, e, i, n, o, r) {
                var s = "width" === e ? 1 : 0,
                    a = 0,
                    l = 0;
                if (i === (n ? "border" : "content")) return 0;
                for (; s < 4; s += 2) "margin" === i && (l += L.css(t, i + rt[s], !0, o)), n ? ("content" === i && (l -= L.css(t, "padding" + rt[s], !0, o)), "margin" !== i && (l -= L.css(t, "border" + rt[s] + "Width", !0, o))) : (l += L.css(t, "padding" + rt[s], !0, o), "padding" !== i ? l += L.css(t, "border" + rt[s] + "Width", !0, o) : a += L.css(t, "border" + rt[s] + "Width", !0, o));
                return !n && r >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - a - .5))), l
            }

            function Qt(t, e, i) {
                var n = jt(t),
                    o = Ft(t, e, n),
                    r = "border-box" === L.css(t, "boxSizing", !1, n),
                    s = r;
                if (Rt.test(o)) {
                    if (!i) return o;
                    o = "auto"
                }
                return s = s && (v.boxSizingReliable() || o === t.style[e]), ("auto" === o || !parseFloat(o) && "inline" === L.css(t, "display", !1, n)) && (o = t["offset" + e[0].toUpperCase() + e.slice(1)], s = !0), (o = parseFloat(o) || 0) + Xt(t, e, i || (r ? "border" : "content"), s, n, o) + "px"
            }

            function te(t, e, i, n, o) {
                return new te.prototype.init(t, e, i, n, o)
            }
            L.extend({
                cssHooks: {
                    opacity: {
                        get: function(t, e) {
                            if (e) {
                                var i = Ft(t, "opacity");
                                return "" === i ? "1" : i
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
                style: function(t, e, i, n) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var o, r, s, a = K(e),
                            l = Gt.test(e),
                            c = t.style;
                        if (l || (e = Yt(a)), s = L.cssHooks[e] || L.cssHooks[a], void 0 === i) return s && "get" in s && void 0 !== (o = s.get(t, !1, n)) ? o : c[e];
                        "string" === (r = typeof i) && (o = ot.exec(i)) && o[1] && (i = lt(t, e, o), r = "number"), null != i && i == i && ("number" === r && (i += o && o[3] || (L.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (c[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (l ? c.setProperty(e, i) : c[e] = i))
                    }
                },
                css: function(t, e, i, n) {
                    var o, r, s, a = K(e);
                    return Gt.test(e) || (e = Yt(a)), (s = L.cssHooks[e] || L.cssHooks[a]) && "get" in s && (o = s.get(t, !0, i)), void 0 === o && (o = Ft(t, e, n)), "normal" === o && e in qt && (o = qt[e]), "" === i || i ? (r = parseFloat(o), !0 === i || isFinite(r) ? r || 0 : o) : o
                }
            }), L.each(["height", "width"], function(t, e) {
                L.cssHooks[e] = {
                    get: function(t, i, n) {
                        if (i) return !Ht.test(L.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Qt(t, e, n) : at(t, Wt, function() {
                            return Qt(t, e, n)
                        })
                    },
                    set: function(t, i, n) {
                        var o, r = jt(t),
                            s = "border-box" === L.css(t, "boxSizing", !1, r),
                            a = n && Xt(t, e, n, s, r);
                        return s && v.scrollboxSize() === r.position && (a -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(r[e]) - Xt(t, e, "border", !1, r) - .5)), a && (o = ot.exec(i)) && "px" !== (o[3] || "px") && (t.style[e] = i, i = L.css(t, e)), Jt(0, i, a)
                    }
                }
            }), L.cssHooks.marginLeft = Zt(v.reliableMarginLeft, function(t, e) {
                if (e) return (parseFloat(Ft(t, "marginLeft")) || t.getBoundingClientRect().left - at(t, {
                    marginLeft: 0
                }, function() {
                    return t.getBoundingClientRect().left
                })) + "px"
            }), L.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(t, e) {
                L.cssHooks[t + e] = {
                    expand: function(i) {
                        for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) o[t + rt[n] + e] = r[n] || r[n - 2] || r[0];
                        return o
                    }
                }, "margin" !== t && (L.cssHooks[t + e].set = Jt)
            }), L.fn.extend({
                css: function(t, e) {
                    return G(this, function(t, e, i) {
                        var n, o, r = {},
                            s = 0;
                        if (Array.isArray(e)) {
                            for (n = jt(t), o = e.length; s < o; s++) r[e[s]] = L.css(t, e[s], !1, n);
                            return r
                        }
                        return void 0 !== i ? L.style(t, e, i) : L.css(t, e)
                    }, t, e, arguments.length > 1)
                }
            }), L.Tween = te, te.prototype = {
                constructor: te,
                init: function(t, e, i, n, o, r) {
                    this.elem = t, this.prop = i, this.easing = o || L.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = r || (L.cssNumber[i] ? "" : "px")
                },
                cur: function() {
                    var t = te.propHooks[this.prop];
                    return t && t.get ? t.get(this) : te.propHooks._default.get(this)
                },
                run: function(t) {
                    var e, i = te.propHooks[this.prop];
                    return this.options.duration ? this.pos = e = L.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : te.propHooks._default.set(this), this
                }
            }, te.prototype.init.prototype = te.prototype, te.propHooks = {
                _default: {
                    get: function(t) {
                        var e;
                        return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = L.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                    },
                    set: function(t) {
                        L.fx.step[t.prop] ? L.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[L.cssProps[t.prop]] && !L.cssHooks[t.prop] ? t.elem[t.prop] = t.now : L.style(t.elem, t.prop, t.now + t.unit)
                    }
                }
            }, te.propHooks.scrollTop = te.propHooks.scrollLeft = {
                set: function(t) {
                    t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                }
            }, L.easing = {
                linear: function(t) {
                    return t
                },
                swing: function(t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                },
                _default: "swing"
            }, L.fx = te.prototype.init, L.fx.step = {};
            var ee, ie, ne = /^(?:toggle|show|hide)$/,
                oe = /queueHooks$/;

            function re() {
                ie && (!1 === s.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(re) : i.setTimeout(re, L.fx.interval), L.fx.tick())
            }

            function se() {
                return i.setTimeout(function() {
                    ee = void 0
                }), ee = Date.now()
            }

            function ae(t, e) {
                var i, n = 0,
                    o = {
                        height: t
                    };
                for (e = e ? 1 : 0; n < 4; n += 2 - e) o["margin" + (i = rt[n])] = o["padding" + i] = t;
                return e && (o.opacity = o.width = t), o
            }

            function le(t, e, i) {
                for (var n, o = (ce.tweeners[e] || []).concat(ce.tweeners["*"]), r = 0, s = o.length; r < s; r++)
                    if (n = o[r].call(i, e, t)) return n
            }

            function ce(t, e, i) {
                var n, o, r = 0,
                    s = ce.prefilters.length,
                    a = L.Deferred().always(function() {
                        delete l.elem
                    }),
                    l = function() {
                        if (o) return !1;
                        for (var e = ee || se(), i = Math.max(0, c.startTime + c.duration - e), n = 1 - (i / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) c.tweens[r].run(n);
                        return a.notifyWith(t, [c, n, i]), n < 1 && s ? i : (s || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
                    },
                    c = a.promise({
                        elem: t,
                        props: L.extend({}, e),
                        opts: L.extend(!0, {
                            specialEasing: {},
                            easing: L.easing._default
                        }, i),
                        originalProperties: e,
                        originalOptions: i,
                        startTime: ee || se(),
                        duration: i.duration,
                        tweens: [],
                        createTween: function(e, i) {
                            var n = L.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                            return c.tweens.push(n), n
                        },
                        stop: function(e) {
                            var i = 0,
                                n = e ? c.tweens.length : 0;
                            if (o) return this;
                            for (o = !0; i < n; i++) c.tweens[i].run(1);
                            return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                        }
                    }),
                    u = c.props;
                for (! function(t, e) {
                        var i, n, o, r, s;
                        for (i in t)
                            if (o = e[n = K(i)], r = t[i], Array.isArray(r) && (o = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), (s = L.cssHooks[n]) && "expand" in s)
                                for (i in r = s.expand(r), delete t[n], r) i in t || (t[i] = r[i], e[i] = o);
                            else e[n] = o
                    }(u, c.opts.specialEasing); r < s; r++)
                    if (n = ce.prefilters[r].call(c, t, u, c.opts)) return _(n.stop) && (L._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
                return L.map(u, le, c), _(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), L.fx.timer(L.extend(l, {
                    elem: t,
                    anim: c,
                    queue: c.opts.queue
                })), c
            }
            L.Animation = L.extend(ce, {
                    tweeners: {
                        "*": [function(t, e) {
                            var i = this.createTween(t, e);
                            return lt(i.elem, t, ot.exec(e), i), i
                        }]
                    },
                    tweener: function(t, e) {
                        _(t) ? (e = t, t = ["*"]) : t = t.match(B);
                        for (var i, n = 0, o = t.length; n < o; n++) i = t[n], ce.tweeners[i] = ce.tweeners[i] || [], ce.tweeners[i].unshift(e)
                    },
                    prefilters: [function(t, e, i) {
                        var n, o, r, s, a, l, c, u, h = "width" in e || "height" in e,
                            p = this,
                            d = {},
                            f = t.style,
                            m = t.nodeType && st(t),
                            g = X.get(t, "fxshow");
                        for (n in i.queue || (null == (s = L._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                                s.unqueued || a()
                            }), s.unqueued++, p.always(function() {
                                p.always(function() {
                                    s.unqueued--, L.queue(t, "fx").length || s.empty.fire()
                                })
                            })), e)
                            if (o = e[n], ne.test(o)) {
                                if (delete e[n], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
                                    if ("show" !== o || !g || void 0 === g[n]) continue;
                                    m = !0
                                }
                                d[n] = g && g[n] || L.style(t, n)
                            } if ((l = !L.isEmptyObject(e)) || !L.isEmptyObject(d))
                            for (n in h && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = g && g.display) && (c = X.get(t, "display")), "none" === (u = L.css(t, "display")) && (c ? u = c : (ht([t], !0), c = t.style.display || c, u = L.css(t, "display"), ht([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === L.css(t, "float") && (l || (p.done(function() {
                                    f.display = c
                                }), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", p.always(function() {
                                    f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
                                })), l = !1, d) l || (g ? "hidden" in g && (m = g.hidden) : g = X.access(t, "fxshow", {
                                display: c
                            }), r && (g.hidden = !m), m && ht([t], !0), p.done(function() {
                                for (n in m || ht([t]), X.remove(t, "fxshow"), d) L.style(t, n, d[n])
                            })), l = le(m ? g[n] : 0, n, p), n in g || (g[n] = l.start, m && (l.end = l.start, l.start = 0))
                    }],
                    prefilter: function(t, e) {
                        e ? ce.prefilters.unshift(t) : ce.prefilters.push(t)
                    }
                }), L.speed = function(t, e, i) {
                    var n = t && "object" == typeof t ? L.extend({}, t) : {
                        complete: i || !i && e || _(t) && t,
                        duration: t,
                        easing: i && e || e && !_(e) && e
                    };
                    return L.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in L.fx.speeds ? n.duration = L.fx.speeds[n.duration] : n.duration = L.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                        _(n.old) && n.old.call(this), n.queue && L.dequeue(this, n.queue)
                    }, n
                }, L.fn.extend({
                    fadeTo: function(t, e, i, n) {
                        return this.filter(st).css("opacity", 0).show().end().animate({
                            opacity: e
                        }, t, i, n)
                    },
                    animate: function(t, e, i, n) {
                        var o = L.isEmptyObject(t),
                            r = L.speed(e, i, n),
                            s = function() {
                                var e = ce(this, L.extend({}, t), r);
                                (o || X.get(this, "finish")) && e.stop(!0)
                            };
                        return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
                    },
                    stop: function(t, e, i) {
                        var n = function(t) {
                            var e = t.stop;
                            delete t.stop, e(i)
                        };
                        return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                            var e = !0,
                                o = null != t && t + "queueHooks",
                                r = L.timers,
                                s = X.get(this);
                            if (o) s[o] && s[o].stop && n(s[o]);
                            else
                                for (o in s) s[o] && s[o].stop && oe.test(o) && n(s[o]);
                            for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(i), e = !1, r.splice(o, 1));
                            !e && i || L.dequeue(this, t)
                        })
                    },
                    finish: function(t) {
                        return !1 !== t && (t = t || "fx"), this.each(function() {
                            var e, i = X.get(this),
                                n = i[t + "queue"],
                                o = i[t + "queueHooks"],
                                r = L.timers,
                                s = n ? n.length : 0;
                            for (i.finish = !0, L.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                            for (e = 0; e < s; e++) n[e] && n[e].finish && n[e].finish.call(this);
                            delete i.finish
                        })
                    }
                }), L.each(["toggle", "show", "hide"], function(t, e) {
                    var i = L.fn[e];
                    L.fn[e] = function(t, n, o) {
                        return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(ae(e, !0), t, n, o)
                    }
                }), L.each({
                    slideDown: ae("show"),
                    slideUp: ae("hide"),
                    slideToggle: ae("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function(t, e) {
                    L.fn[t] = function(t, i, n) {
                        return this.animate(e, t, i, n)
                    }
                }), L.timers = [], L.fx.tick = function() {
                    var t, e = 0,
                        i = L.timers;
                    for (ee = Date.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
                    i.length || L.fx.stop(), ee = void 0
                }, L.fx.timer = function(t) {
                    L.timers.push(t), L.fx.start()
                }, L.fx.interval = 13, L.fx.start = function() {
                    ie || (ie = !0, re())
                }, L.fx.stop = function() {
                    ie = null
                }, L.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, L.fn.delay = function(t, e) {
                    return t = L.fx && L.fx.speeds[t] || t, e = e || "fx", this.queue(e, function(e, n) {
                        var o = i.setTimeout(e, t);
                        n.stop = function() {
                            i.clearTimeout(o)
                        }
                    })
                },
                function() {
                    var t = s.createElement("input"),
                        e = s.createElement("select").appendChild(s.createElement("option"));
                    t.type = "checkbox", v.checkOn = "" !== t.value, v.optSelected = e.selected, (t = s.createElement("input")).value = "t", t.type = "radio", v.radioValue = "t" === t.value
                }();
            var ue, he = L.expr.attrHandle;
            L.fn.extend({
                attr: function(t, e) {
                    return G(this, L.attr, t, e, arguments.length > 1)
                },
                removeAttr: function(t) {
                    return this.each(function() {
                        L.removeAttr(this, t)
                    })
                }
            }), L.extend({
                attr: function(t, e, i) {
                    var n, o, r = t.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? L.prop(t, e, i) : (1 === r && L.isXMLDoc(t) || (o = L.attrHooks[e.toLowerCase()] || (L.expr.match.bool.test(e) ? ue : void 0)), void 0 !== i ? null === i ? void L.removeAttr(t, e) : o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : o && "get" in o && null !== (n = o.get(t, e)) ? n : null == (n = L.find.attr(t, e)) ? void 0 : n)
                },
                attrHooks: {
                    type: {
                        set: function(t, e) {
                            if (!v.radioValue && "radio" === e && D(t, "input")) {
                                var i = t.value;
                                return t.setAttribute("type", e), i && (t.value = i), e
                            }
                        }
                    }
                },
                removeAttr: function(t, e) {
                    var i, n = 0,
                        o = e && e.match(B);
                    if (o && 1 === t.nodeType)
                        for (; i = o[n++];) t.removeAttribute(i)
                }
            }), ue = {
                set: function(t, e, i) {
                    return !1 === e ? L.removeAttr(t, i) : t.setAttribute(i, i), i
                }
            }, L.each(L.expr.match.bool.source.match(/\w+/g), function(t, e) {
                var i = he[e] || L.find.attr;
                he[e] = function(t, e, n) {
                    var o, r, s = e.toLowerCase();
                    return n || (r = he[s], he[s] = o, o = null != i(t, e, n) ? s : null, he[s] = r), o
                }
            });
            var pe = /^(?:input|select|textarea|button)$/i,
                de = /^(?:a|area)$/i;

            function fe(t) {
                return (t.match(B) || []).join(" ")
            }

            function me(t) {
                return t.getAttribute && t.getAttribute("class") || ""
            }

            function ge(t) {
                return Array.isArray(t) ? t : "string" == typeof t && t.match(B) || []
            }
            L.fn.extend({
                prop: function(t, e) {
                    return G(this, L.prop, t, e, arguments.length > 1)
                },
                removeProp: function(t) {
                    return this.each(function() {
                        delete this[L.propFix[t] || t]
                    })
                }
            }), L.extend({
                prop: function(t, e, i) {
                    var n, o, r = t.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r) return 1 === r && L.isXMLDoc(t) || (e = L.propFix[e] || e, o = L.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
                },
                propHooks: {
                    tabIndex: {
                        get: function(t) {
                            var e = L.find.attr(t, "tabindex");
                            return e ? parseInt(e, 10) : pe.test(t.nodeName) || de.test(t.nodeName) && t.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), v.optSelected || (L.propHooks.selected = {
                get: function(t) {
                    var e = t.parentNode;
                    return e && e.parentNode && e.parentNode.selectedIndex, null
                },
                set: function(t) {
                    var e = t.parentNode;
                    e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
                }
            }), L.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                L.propFix[this.toLowerCase()] = this
            }), L.fn.extend({
                addClass: function(t) {
                    var e, i, n, o, r, s, a, l = 0;
                    if (_(t)) return this.each(function(e) {
                        L(this).addClass(t.call(this, e, me(this)))
                    });
                    if ((e = ge(t)).length)
                        for (; i = this[l++];)
                            if (o = me(i), n = 1 === i.nodeType && " " + fe(o) + " ") {
                                for (s = 0; r = e[s++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                                o !== (a = fe(n)) && i.setAttribute("class", a)
                            } return this
                },
                removeClass: function(t) {
                    var e, i, n, o, r, s, a, l = 0;
                    if (_(t)) return this.each(function(e) {
                        L(this).removeClass(t.call(this, e, me(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ((e = ge(t)).length)
                        for (; i = this[l++];)
                            if (o = me(i), n = 1 === i.nodeType && " " + fe(o) + " ") {
                                for (s = 0; r = e[s++];)
                                    for (; n.indexOf(" " + r + " ") > -1;) n = n.replace(" " + r + " ", " ");
                                o !== (a = fe(n)) && i.setAttribute("class", a)
                            } return this
                },
                toggleClass: function(t, e) {
                    var i = typeof t,
                        n = "string" === i || Array.isArray(t);
                    return "boolean" == typeof e && n ? e ? this.addClass(t) : this.removeClass(t) : _(t) ? this.each(function(i) {
                        L(this).toggleClass(t.call(this, i, me(this), e), e)
                    }) : this.each(function() {
                        var e, o, r, s;
                        if (n)
                            for (o = 0, r = L(this), s = ge(t); e = s[o++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                        else void 0 !== t && "boolean" !== i || ((e = me(this)) && X.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : X.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(t) {
                    var e, i, n = 0;
                    for (e = " " + t + " "; i = this[n++];)
                        if (1 === i.nodeType && (" " + fe(me(i)) + " ").indexOf(e) > -1) return !0;
                    return !1
                }
            });
            var ve = /\r/g;
            L.fn.extend({
                val: function(t) {
                    var e, i, n, o = this[0];
                    return arguments.length ? (n = _(t), this.each(function(i) {
                        var o;
                        1 === this.nodeType && (null == (o = n ? t.call(this, i, L(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = L.map(o, function(t) {
                            return null == t ? "" : t + ""
                        })), (e = L.valHooks[this.type] || L.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                    })) : o ? (e = L.valHooks[o.type] || L.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : "string" == typeof(i = o.value) ? i.replace(ve, "") : null == i ? "" : i : void 0
                }
            }), L.extend({
                valHooks: {
                    option: {
                        get: function(t) {
                            var e = L.find.attr(t, "value");
                            return null != e ? e : fe(L.text(t))
                        }
                    },
                    select: {
                        get: function(t) {
                            var e, i, n, o = t.options,
                                r = t.selectedIndex,
                                s = "select-one" === t.type,
                                a = s ? null : [],
                                l = s ? r + 1 : o.length;
                            for (n = r < 0 ? l : s ? r : 0; n < l; n++)
                                if (((i = o[n]).selected || n === r) && !i.disabled && (!i.parentNode.disabled || !D(i.parentNode, "optgroup"))) {
                                    if (e = L(i).val(), s) return e;
                                    a.push(e)
                                } return a
                        },
                        set: function(t, e) {
                            for (var i, n, o = t.options, r = L.makeArray(e), s = o.length; s--;)((n = o[s]).selected = L.inArray(L.valHooks.option.get(n), r) > -1) && (i = !0);
                            return i || (t.selectedIndex = -1), r
                        }
                    }
                }
            }), L.each(["radio", "checkbox"], function() {
                L.valHooks[this] = {
                    set: function(t, e) {
                        if (Array.isArray(e)) return t.checked = L.inArray(L(t).val(), e) > -1
                    }
                }, v.checkOn || (L.valHooks[this].get = function(t) {
                    return null === t.getAttribute("value") ? "on" : t.value
                })
            }), v.focusin = "onfocusin" in i;
            var _e = /^(?:focusinfocus|focusoutblur)$/,
                ye = function(t) {
                    t.stopPropagation()
                };
            L.extend(L.event, {
                trigger: function(t, e, n, o) {
                    var r, a, l, c, u, h, p, d, m = [n || s],
                        g = f.call(t, "type") ? t.type : t,
                        v = f.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (a = d = l = n = n || s, 3 !== n.nodeType && 8 !== n.nodeType && !_e.test(g + L.event.triggered) && (g.indexOf(".") > -1 && (g = (v = g.split(".")).shift(), v.sort()), u = g.indexOf(":") < 0 && "on" + g, (t = t[L.expando] ? t : new L.Event(g, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = v.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : L.makeArray(e, [t]), p = L.event.special[g] || {}, o || !p.trigger || !1 !== p.trigger.apply(n, e))) {
                        if (!o && !p.noBubble && !y(n)) {
                            for (c = p.delegateType || g, _e.test(c + g) || (a = a.parentNode); a; a = a.parentNode) m.push(a), l = a;
                            l === (n.ownerDocument || s) && m.push(l.defaultView || l.parentWindow || i)
                        }
                        for (r = 0;
                            (a = m[r++]) && !t.isPropagationStopped();) d = a, t.type = r > 1 ? c : p.bindType || g, (h = (X.get(a, "events") || {})[t.type] && X.get(a, "handle")) && h.apply(a, e), (h = u && a[u]) && h.apply && Y(a) && (t.result = h.apply(a, e), !1 === t.result && t.preventDefault());
                        return t.type = g, o || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(m.pop(), e) || !Y(n) || u && _(n[g]) && !y(n) && ((l = n[u]) && (n[u] = null), L.event.triggered = g, t.isPropagationStopped() && d.addEventListener(g, ye), n[g](), t.isPropagationStopped() && d.removeEventListener(g, ye), L.event.triggered = void 0, l && (n[u] = l)), t.result
                    }
                },
                simulate: function(t, e, i) {
                    var n = L.extend(new L.Event, i, {
                        type: t,
                        isSimulated: !0
                    });
                    L.event.trigger(n, null, e)
                }
            }), L.fn.extend({
                trigger: function(t, e) {
                    return this.each(function() {
                        L.event.trigger(t, e, this)
                    })
                },
                triggerHandler: function(t, e) {
                    var i = this[0];
                    if (i) return L.event.trigger(t, e, i, !0)
                }
            }), v.focusin || L.each({
                focus: "focusin",
                blur: "focusout"
            }, function(t, e) {
                var i = function(t) {
                    L.event.simulate(e, t.target, L.event.fix(t))
                };
                L.event.special[e] = {
                    setup: function() {
                        var n = this.ownerDocument || this,
                            o = X.access(n, e);
                        o || n.addEventListener(t, i, !0), X.access(n, e, (o || 0) + 1)
                    },
                    teardown: function() {
                        var n = this.ownerDocument || this,
                            o = X.access(n, e) - 1;
                        o ? X.access(n, e, o) : (n.removeEventListener(t, i, !0), X.remove(n, e))
                    }
                }
            });
            var be = i.location,
                we = Date.now(),
                xe = /\?/;
            L.parseXML = function(t) {
                var e;
                if (!t || "string" != typeof t) return null;
                try {
                    e = (new i.DOMParser).parseFromString(t, "text/xml")
                } catch (t) {
                    e = void 0
                }
                return e && !e.getElementsByTagName("parsererror").length || L.error("Invalid XML: " + t), e
            };
            var Le = /\[\]$/,
                Ce = /\r?\n/g,
                Te = /^(?:submit|button|image|reset|file)$/i,
                ke = /^(?:input|select|textarea|keygen)/i;

            function Pe(t, e, i, n) {
                var o;
                if (Array.isArray(e)) L.each(e, function(e, o) {
                    i || Le.test(t) ? n(t, o) : Pe(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, i, n)
                });
                else if (i || "object" !== x(e)) n(t, e);
                else
                    for (o in e) Pe(t + "[" + o + "]", e[o], i, n)
            }
            L.param = function(t, e) {
                var i, n = [],
                    o = function(t, e) {
                        var i = _(e) ? e() : e;
                        n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
                    };
                if (Array.isArray(t) || t.jquery && !L.isPlainObject(t)) L.each(t, function() {
                    o(this.name, this.value)
                });
                else
                    for (i in t) Pe(i, t[i], e, o);
                return n.join("&")
            }, L.fn.extend({
                serialize: function() {
                    return L.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var t = L.prop(this, "elements");
                        return t ? L.makeArray(t) : this
                    }).filter(function() {
                        var t = this.type;
                        return this.name && !L(this).is(":disabled") && ke.test(this.nodeName) && !Te.test(t) && (this.checked || !pt.test(t))
                    }).map(function(t, e) {
                        var i = L(this).val();
                        return null == i ? null : Array.isArray(i) ? L.map(i, function(t) {
                            return {
                                name: e.name,
                                value: t.replace(Ce, "\r\n")
                            }
                        }) : {
                            name: e.name,
                            value: i.replace(Ce, "\r\n")
                        }
                    }).get()
                }
            });
            var Se = /%20/g,
                Ee = /#.*$/,
                De = /([?&])_=[^&]*/,
                Me = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Ae = /^(?:GET|HEAD)$/,
                Oe = /^\/\//,
                Ie = {},
                Ue = {},
                Ne = "*/".concat("*"),
                ze = s.createElement("a");

            function Be(t) {
                return function(e, i) {
                    "string" != typeof e && (i = e, e = "*");
                    var n, o = 0,
                        r = e.toLowerCase().match(B) || [];
                    if (_(i))
                        for (; n = r[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
                }
            }

            function Re(t, e, i, n) {
                var o = {},
                    r = t === Ue;

                function s(a) {
                    var l;
                    return o[a] = !0, L.each(t[a] || [], function(t, a) {
                        var c = a(e, i, n);
                        return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
                    }), l
                }
                return s(e.dataTypes[0]) || !o["*"] && s("*")
            }

            function je(t, e) {
                var i, n, o = L.ajaxSettings.flatOptions || {};
                for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
                return n && L.extend(!0, t, n), t
            }
            ze.href = be.href, L.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: be.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(be.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Ne,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": L.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(t, e) {
                    return e ? je(je(t, L.ajaxSettings), e) : je(L.ajaxSettings, t)
                },
                ajaxPrefilter: Be(Ie),
                ajaxTransport: Be(Ue),
                ajax: function(t, e) {
                    "object" == typeof t && (e = t, t = void 0), e = e || {};
                    var n, o, r, a, l, c, u, h, p, d, f = L.ajaxSetup({}, e),
                        m = f.context || f,
                        g = f.context && (m.nodeType || m.jquery) ? L(m) : L.event,
                        v = L.Deferred(),
                        _ = L.Callbacks("once memory"),
                        y = f.statusCode || {},
                        b = {},
                        w = {},
                        x = "canceled",
                        C = {
                            readyState: 0,
                            getResponseHeader: function(t) {
                                var e;
                                if (u) {
                                    if (!a)
                                        for (a = {}; e = Me.exec(r);) a[e[1].toLowerCase()] = e[2];
                                    e = a[t.toLowerCase()]
                                }
                                return null == e ? null : e
                            },
                            getAllResponseHeaders: function() {
                                return u ? r : null
                            },
                            setRequestHeader: function(t, e) {
                                return null == u && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, b[t] = e), this
                            },
                            overrideMimeType: function(t) {
                                return null == u && (f.mimeType = t), this
                            },
                            statusCode: function(t) {
                                var e;
                                if (t)
                                    if (u) C.always(t[C.status]);
                                    else
                                        for (e in t) y[e] = [y[e], t[e]];
                                return this
                            },
                            abort: function(t) {
                                var e = t || x;
                                return n && n.abort(e), T(0, e), this
                            }
                        };
                    if (v.promise(C), f.url = ((t || f.url || be.href) + "").replace(Oe, be.protocol + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(B) || [""], null == f.crossDomain) {
                        c = s.createElement("a");
                        try {
                            c.href = f.url, c.href = c.href, f.crossDomain = ze.protocol + "//" + ze.host != c.protocol + "//" + c.host
                        } catch (t) {
                            f.crossDomain = !0
                        }
                    }
                    if (f.data && f.processData && "string" != typeof f.data && (f.data = L.param(f.data, f.traditional)), Re(Ie, f, e, C), u) return C;
                    for (p in (h = L.event && f.global) && 0 == L.active++ && L.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ae.test(f.type), o = f.url.replace(Ee, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Se, "+")) : (d = f.url.slice(o.length), f.data && (f.processData || "string" == typeof f.data) && (o += (xe.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (o = o.replace(De, "$1"), d = (xe.test(o) ? "&" : "?") + "_=" + we++ + d), f.url = o + d), f.ifModified && (L.lastModified[o] && C.setRequestHeader("If-Modified-Since", L.lastModified[o]), L.etag[o] && C.setRequestHeader("If-None-Match", L.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || e.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ne + "; q=0.01" : "") : f.accepts["*"]), f.headers) C.setRequestHeader(p, f.headers[p]);
                    if (f.beforeSend && (!1 === f.beforeSend.call(m, C, f) || u)) return C.abort();
                    if (x = "abort", _.add(f.complete), C.done(f.success), C.fail(f.error), n = Re(Ue, f, e, C)) {
                        if (C.readyState = 1, h && g.trigger("ajaxSend", [C, f]), u) return C;
                        f.async && f.timeout > 0 && (l = i.setTimeout(function() {
                            C.abort("timeout")
                        }, f.timeout));
                        try {
                            u = !1, n.send(b, T)
                        } catch (t) {
                            if (u) throw t;
                            T(-1, t)
                        }
                    } else T(-1, "No Transport");

                    function T(t, e, s, a) {
                        var c, p, d, b, w, x = e;
                        u || (u = !0, l && i.clearTimeout(l), n = void 0, r = a || "", C.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, s && (b = function(t, e, i) {
                            for (var n, o, r, s, a = t.contents, l = t.dataTypes;
                                "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                            if (n)
                                for (o in a)
                                    if (a[o] && a[o].test(n)) {
                                        l.unshift(o);
                                        break
                                    } if (l[0] in i) r = l[0];
                            else {
                                for (o in i) {
                                    if (!l[0] || t.converters[o + " " + l[0]]) {
                                        r = o;
                                        break
                                    }
                                    s || (s = o)
                                }
                                r = r || s
                            }
                            if (r) return r !== l[0] && l.unshift(r), i[r]
                        }(f, C, s)), b = function(t, e, i, n) {
                            var o, r, s, a, l, c = {},
                                u = t.dataTypes.slice();
                            if (u[1])
                                for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
                            for (r = u.shift(); r;)
                                if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())
                                    if ("*" === r) r = l;
                                    else if ("*" !== l && l !== r) {
                                if (!(s = c[l + " " + r] || c["* " + r]))
                                    for (o in c)
                                        if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                            !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                                            break
                                        } if (!0 !== s)
                                    if (s && t.throws) e = s(e);
                                    else try {
                                        e = s(e)
                                    } catch (t) {
                                        return {
                                            state: "parsererror",
                                            error: s ? t : "No conversion from " + l + " to " + r
                                        }
                                    }
                            }
                            return {
                                state: "success",
                                data: e
                            }
                        }(f, b, C, c), c ? (f.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (L.lastModified[o] = w), (w = C.getResponseHeader("etag")) && (L.etag[o] = w)), 204 === t || "HEAD" === f.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = b.state, p = b.data, c = !(d = b.error))) : (d = x, !t && x || (x = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (e || x) + "", c ? v.resolveWith(m, [p, x, C]) : v.rejectWith(m, [C, x, d]), C.statusCode(y), y = void 0, h && g.trigger(c ? "ajaxSuccess" : "ajaxError", [C, f, c ? p : d]), _.fireWith(m, [C, x]), h && (g.trigger("ajaxComplete", [C, f]), --L.active || L.event.trigger("ajaxStop")))
                    }
                    return C
                },
                getJSON: function(t, e, i) {
                    return L.get(t, e, i, "json")
                },
                getScript: function(t, e) {
                    return L.get(t, void 0, e, "script")
                }
            }), L.each(["get", "post"], function(t, e) {
                L[e] = function(t, i, n, o) {
                    return _(i) && (o = o || n, n = i, i = void 0), L.ajax(L.extend({
                        url: t,
                        type: e,
                        dataType: o,
                        data: i,
                        success: n
                    }, L.isPlainObject(t) && t))
                }
            }), L._evalUrl = function(t) {
                return L.ajax({
                    url: t,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }, L.fn.extend({
                wrapAll: function(t) {
                    var e;
                    return this[0] && (_(t) && (t = t.call(this[0])), e = L(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                        return t
                    }).append(this)), this
                },
                wrapInner: function(t) {
                    return _(t) ? this.each(function(e) {
                        L(this).wrapInner(t.call(this, e))
                    }) : this.each(function() {
                        var e = L(this),
                            i = e.contents();
                        i.length ? i.wrapAll(t) : e.append(t)
                    })
                },
                wrap: function(t) {
                    var e = _(t);
                    return this.each(function(i) {
                        L(this).wrapAll(e ? t.call(this, i) : t)
                    })
                },
                unwrap: function(t) {
                    return this.parent(t).not("body").each(function() {
                        L(this).replaceWith(this.childNodes)
                    }), this
                }
            }), L.expr.pseudos.hidden = function(t) {
                return !L.expr.pseudos.visible(t)
            }, L.expr.pseudos.visible = function(t) {
                return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
            }, L.ajaxSettings.xhr = function() {
                try {
                    return new i.XMLHttpRequest
                } catch (t) {}
            };
            var $e = {
                    0: 200,
                    1223: 204
                },
                Fe = L.ajaxSettings.xhr();
            v.cors = !!Fe && "withCredentials" in Fe, v.ajax = Fe = !!Fe, L.ajaxTransport(function(t) {
                var e, n;
                if (v.cors || Fe && !t.crossDomain) return {
                    send: function(o, r) {
                        var s, a = t.xhr();
                        if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (s in t.xhrFields) a[s] = t.xhrFields[s];
                        for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(s, o[s]);
                        e = function(t) {
                            return function() {
                                e && (e = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r($e[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                    binary: a.response
                                } : {
                                    text: a.responseText
                                }, a.getAllResponseHeaders()))
                            }
                        }, a.onload = e(), n = a.onerror = a.ontimeout = e("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                            4 === a.readyState && i.setTimeout(function() {
                                e && n()
                            })
                        }, e = e("abort");
                        try {
                            a.send(t.hasContent && t.data || null)
                        } catch (t) {
                            if (e) throw t
                        }
                    },
                    abort: function() {
                        e && e()
                    }
                }
            }), L.ajaxPrefilter(function(t) {
                t.crossDomain && (t.contents.script = !1)
            }), L.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(t) {
                        return L.globalEval(t), t
                    }
                }
            }), L.ajaxPrefilter("script", function(t) {
                void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
            }), L.ajaxTransport("script", function(t) {
                var e, i;
                if (t.crossDomain) return {
                    send: function(n, o) {
                        e = L("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", i = function(t) {
                            e.remove(), i = null, t && o("error" === t.type ? 404 : 200, t.type)
                        }), s.head.appendChild(e[0])
                    },
                    abort: function() {
                        i && i()
                    }
                }
            });
            var Ze = [],
                He = /(=)\?(?=&|$)|\?\?/;
            L.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var t = Ze.pop() || L.expando + "_" + we++;
                    return this[t] = !0, t
                }
            }), L.ajaxPrefilter("json jsonp", function(t, e, n) {
                var o, r, s, a = !1 !== t.jsonp && (He.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && He.test(t.data) && "data");
                if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = _(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(He, "$1" + o) : !1 !== t.jsonp && (t.url += (xe.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
                    return s || L.error(o + " was not called"), s[0]
                }, t.dataTypes[0] = "json", r = i[o], i[o] = function() {
                    s = arguments
                }, n.always(function() {
                    void 0 === r ? L(i).removeProp(o) : i[o] = r, t[o] && (t.jsonpCallback = e.jsonpCallback, Ze.push(o)), s && _(r) && r(s[0]), s = r = void 0
                }), "script"
            }), v.createHTMLDocument = function() {
                var t = s.implementation.createHTMLDocument("").body;
                return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
            }(), L.parseHTML = function(t, e, i) {
                return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (v.createHTMLDocument ? ((n = (e = s.implementation.createHTMLDocument("")).createElement("base")).href = s.location.href, e.head.appendChild(n)) : e = s), o = M.exec(t), r = !i && [], o ? [e.createElement(o[1])] : (o = yt([t], e, r), r && r.length && L(r).remove(), L.merge([], o.childNodes)));
                var n, o, r
            }, L.fn.load = function(t, e, i) {
                var n, o, r, s = this,
                    a = t.indexOf(" ");
                return a > -1 && (n = fe(t.slice(a)), t = t.slice(0, a)), _(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && L.ajax({
                    url: t,
                    type: o || "GET",
                    dataType: "html",
                    data: e
                }).done(function(t) {
                    r = arguments, s.html(n ? L("<div>").append(L.parseHTML(t)).find(n) : t)
                }).always(i && function(t, e) {
                    s.each(function() {
                        i.apply(this, r || [t.responseText, e, t])
                    })
                }), this
            }, L.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
                L.fn[e] = function(t) {
                    return this.on(e, t)
                }
            }), L.expr.pseudos.animated = function(t) {
                return L.grep(L.timers, function(e) {
                    return t === e.elem
                }).length
            }, L.offset = {
                setOffset: function(t, e, i) {
                    var n, o, r, s, a, l, c = L.css(t, "position"),
                        u = L(t),
                        h = {};
                    "static" === c && (t.style.position = "relative"), a = u.offset(), r = L.css(t, "top"), l = L.css(t, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (n = u.position()).top, o = n.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), _(e) && (e = e.call(t, i, L.extend({}, a))), null != e.top && (h.top = e.top - a.top + s), null != e.left && (h.left = e.left - a.left + o), "using" in e ? e.using.call(t, h) : u.css(h)
                }
            }, L.fn.extend({
                offset: function(t) {
                    if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                        L.offset.setOffset(this, t, e)
                    });
                    var e, i, n = this[0];
                    return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                        top: e.top + i.pageYOffset,
                        left: e.left + i.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function() {
                    if (this[0]) {
                        var t, e, i, n = this[0],
                            o = {
                                top: 0,
                                left: 0
                            };
                        if ("fixed" === L.css(n, "position")) e = n.getBoundingClientRect();
                        else {
                            for (e = this.offset(), i = n.ownerDocument, t = n.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === L.css(t, "position");) t = t.parentNode;
                            t && t !== n && 1 === t.nodeType && ((o = L(t).offset()).top += L.css(t, "borderTopWidth", !0), o.left += L.css(t, "borderLeftWidth", !0))
                        }
                        return {
                            top: e.top - o.top - L.css(n, "marginTop", !0),
                            left: e.left - o.left - L.css(n, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var t = this.offsetParent; t && "static" === L.css(t, "position");) t = t.offsetParent;
                        return t || bt
                    })
                }
            }), L.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(t, e) {
                var i = "pageYOffset" === e;
                L.fn[t] = function(n) {
                    return G(this, function(t, n, o) {
                        var r;
                        if (y(t) ? r = t : 9 === t.nodeType && (r = t.defaultView), void 0 === o) return r ? r[e] : t[n];
                        r ? r.scrollTo(i ? r.pageXOffset : o, i ? o : r.pageYOffset) : t[n] = o
                    }, t, n, arguments.length)
                }
            }), L.each(["top", "left"], function(t, e) {
                L.cssHooks[e] = Zt(v.pixelPosition, function(t, i) {
                    if (i) return i = Ft(t, e), Rt.test(i) ? L(t).position()[e] + "px" : i
                })
            }), L.each({
                Height: "height",
                Width: "width"
            }, function(t, e) {
                L.each({
                    padding: "inner" + t,
                    content: e,
                    "": "outer" + t
                }, function(i, n) {
                    L.fn[n] = function(o, r) {
                        var s = arguments.length && (i || "boolean" != typeof o),
                            a = i || (!0 === o || !0 === r ? "margin" : "border");
                        return G(this, function(e, i, o) {
                            var r;
                            return y(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? L.css(e, i, a) : L.style(e, i, o, a)
                        }, e, s ? o : void 0, s)
                    }
                })
            }), L.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
                L.fn[e] = function(t, i) {
                    return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
                }
            }), L.fn.extend({
                hover: function(t, e) {
                    return this.mouseenter(t).mouseleave(e || t)
                }
            }), L.fn.extend({
                bind: function(t, e, i) {
                    return this.on(t, null, e, i)
                },
                unbind: function(t, e) {
                    return this.off(t, null, e)
                },
                delegate: function(t, e, i, n) {
                    return this.on(e, t, i, n)
                },
                undelegate: function(t, e, i) {
                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
                }
            }), L.proxy = function(t, e) {
                var i, n, o;
                if ("string" == typeof e && (i = t[e], e = t, t = i), _(t)) return n = l.call(arguments, 2), (o = function() {
                    return t.apply(e || this, n.concat(l.call(arguments)))
                }).guid = t.guid = t.guid || L.guid++, o
            }, L.holdReady = function(t) {
                t ? L.readyWait++ : L.ready(!0)
            }, L.isArray = Array.isArray, L.parseJSON = JSON.parse, L.nodeName = D, L.isFunction = _, L.isWindow = y, L.camelCase = K, L.type = x, L.now = Date.now, L.isNumeric = function(t) {
                var e = L.type(t);
                return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
            }, void 0 === (n = function() {
                return L
            }.apply(e, [])) || (t.exports = n);
            var Ge = i.jQuery,
                We = i.$;
            return L.noConflict = function(t) {
                return i.$ === L && (i.$ = We), t && i.jQuery === L && (i.jQuery = Ge), L
            }, o || (i.jQuery = i.$ = L), L
        })
    }, function(t, e) {
        var i = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = i)
    }, function(t, e, i) {
        var n = i(32)("wks"),
            o = i(17),
            r = i(2).Symbol,
            s = "function" == typeof r;
        (t.exports = function(t) {
            return n[t] || (n[t] = s && r[t] || (s ? r : o)("Symbol." + t))
        }).store = n
    }, function(t, e, i) {
        t.exports = !i(7)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, e, i) {
        i(22)("replace", 2, function(t, e, i) {
            return [function(n, o) {
                "use strict";
                var r = t(this),
                    s = void 0 == n ? void 0 : n[e];
                return void 0 !== s ? s.call(n, r, o) : i.call(String(r), n, o)
            }, i]
        })
    }, function(t, e, i) {
        var n = i(10),
            o = i(40),
            r = i(26),
            s = Object.defineProperty;
        e.f = i(4) ? Object.defineProperty : function(t, e, i) {
            if (n(t), e = r(e, !0), n(i), o) try {
                return s(t, e, i)
            } catch (t) {}
            if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
            return "value" in i && (t[e] = i.value), t
        }
    }, function(t, e) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function(t, e, i) {
        var n = i(6),
            o = i(19);
        t.exports = i(4) ? function(t, e, i) {
            return n.f(t, e, o(1, i))
        } : function(t, e, i) {
            return t[e] = i, t
        }
    }, function(t, e) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function(t, e, i) {
        var n = i(9);
        t.exports = function(t) {
            if (!n(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function(t, e, i) {
        var n = i(2),
            o = i(8),
            r = i(12),
            s = i(17)("src"),
            a = Function.toString,
            l = ("" + a).split("toString");
        i(18).inspectSource = function(t) {
            return a.call(t)
        }, (t.exports = function(t, e, i, a) {
            var c = "function" == typeof i;
            c && (r(i, "name") || o(i, "name", e)), t[e] !== i && (c && (r(i, s) || o(i, s, t[e] ? "" + t[e] : l.join(String(e)))), t === n ? t[e] = i : a ? t[e] ? t[e] = i : o(t, e, i) : (delete t[e], o(t, e, i)))
        })(Function.prototype, "toString", function() {
            return "function" == typeof this && this[s] || a.call(this)
        })
    }, function(t, e) {
        var i = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return i.call(t, e)
        }
    }, function(t, e, i) {
        var n = i(77),
            o = i(27);
        t.exports = function(t) {
            return n(o(t))
        }
    }, function(t, e, i) {
        i(22)("split", 2, function(t, e, n) {
            "use strict";
            var o = i(49),
                r = n,
                s = [].push;
            if ("c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length) {
                var a = void 0 === /()??/.exec("")[1];
                n = function(t, e) {
                    var i = String(this);
                    if (void 0 === t && 0 === e) return [];
                    if (!o(t)) return r.call(i, t, e);
                    var n, l, c, u, h, p = [],
                        d = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""),
                        f = 0,
                        m = void 0 === e ? 4294967295 : e >>> 0,
                        g = new RegExp(t.source, d + "g");
                    for (a || (n = new RegExp("^" + g.source + "$(?!\\s)", d));
                        (l = g.exec(i)) && !((c = l.index + l[0].length) > f && (p.push(i.slice(f, l.index)), !a && l.length > 1 && l[0].replace(n, function() {
                            for (h = 1; h < arguments.length - 2; h++) void 0 === arguments[h] && (l[h] = void 0)
                        }), l.length > 1 && l.index < i.length && s.apply(p, l.slice(1)), u = l[0].length, f = c, p.length >= m));) g.lastIndex === l.index && g.lastIndex++;
                    return f === i.length ? !u && g.test("") || p.push("") : p.push(i.slice(f)), p.length > m ? p.slice(0, m) : p
                }
            } else "0".split(void 0, 0).length && (n = function(t, e) {
                return void 0 === t && 0 === e ? [] : r.call(this, t, e)
            });
            return [function(i, o) {
                var r = t(this),
                    s = void 0 == i ? void 0 : i[e];
                return void 0 !== s ? s.call(i, r, o) : n.call(String(r), i, o)
            }, n]
        })
    }, function(t, e, i) {
        for (var n = i(104), o = i(23), r = i(11), s = i(2), a = i(8), l = i(37), c = i(3), u = c("iterator"), h = c("toStringTag"), p = l.Array, d = {
                CSSRuleList: !0,
                CSSStyleDeclaration: !1,
                CSSValueList: !1,
                ClientRectList: !1,
                DOMRectList: !1,
                DOMStringList: !1,
                DOMTokenList: !0,
                DataTransferItemList: !1,
                FileList: !1,
                HTMLAllCollection: !1,
                HTMLCollection: !1,
                HTMLFormElement: !1,
                HTMLSelectElement: !1,
                MediaList: !0,
                MimeTypeArray: !1,
                NamedNodeMap: !1,
                NodeList: !0,
                PaintRequestList: !1,
                Plugin: !1,
                PluginArray: !1,
                SVGLengthList: !1,
                SVGNumberList: !1,
                SVGPathSegList: !1,
                SVGPointList: !1,
                SVGStringList: !1,
                SVGTransformList: !1,
                SourceBufferList: !1,
                StyleSheetList: !0,
                TextTrackCueList: !1,
                TextTrackList: !1,
                TouchList: !1
            }, f = o(d), m = 0; m < f.length; m++) {
            var g, v = f[m],
                _ = d[v],
                y = s[v],
                b = y && y.prototype;
            if (b && (b[u] || a(b, u, p), b[h] || a(b, h, v), l[v] = p, _))
                for (g in n) b[g] || r(b, g, n[g], !0)
        }
    }, function(t, e, i) {
        "use strict";
        (function(t) {
            function n(t, e) {
                ga && e(t)
            }
            i.d(e, "a", function() {
                return n
            }), t(document).on("setUsername", function(t) {
                n(t, function(t) {
                    ga("send", "event", "username", "usernamechange")
                })
            }), t(document).on("groupEvent", function(t) {
                n(t, function(t) {
                    ga("send", "event", "group", t.subtype)
                })
            }), t(document).on("groupFailEvent", function(t) {
                n(t, function(t) {
                    ga("send", "event", "group", t.subtype, t.errorCode)
                })
            }), t(document).on("markerChange", function(t) {
                n(t, function(t) {
                    void 0 === t.value ? ga("send", "event", "marker", t.subtype, t.markerType) : ga("send", "event", "marker", t.subtype, t.markerType, t.value)
                })
            }), t(document).ready(function() {
                t("#refresh").click(function(t) {
                    n(t, function(t) {
                        ga("send", "event", "refresh", "manualrefresh")
                    })
                }), t("#autorefresh").change(function(t) {
                    n(t, function(t) {
                        ga("send", "event", "refresh", "autorefresh", this.checked ? "on" : "off")
                    }.bind(this))
                }), t("#autofollow").change(function(t) {
                    n(t, function(t) {
                        ga("send", "event", "refresh", "autofollow", this.checked ? "on" : "off")
                    }.bind(this))
                }), t("#feedback").click(function(t) {
                    n(t, function(t) {
                        ga("send", "event", "feedback", "openFeedbackDialog")
                    })
                }), t("#attributions").click(function(t) {
                    n(t, function(t) {
                        ga("send", "event", "attributions", "openAttributionsDialog")
                    })
                }), t("#changelog").click(function(t) {
                    n(t, function(t) {
                        ga("send", "event", "changelog", "openChangelogDialog")
                    })
                }), t("#ios-link").click(function(t) {
                    n(t, function(t) {
                        ga("send", "event", "edition", "clickIOS")
                    })
                }), t("#android-link").click(function(t) {
                    n(t, function(t) {
                        ga("send", "event", "edition", "clickAndroid")
                    })
                })
            })
        }).call(this, i(1))
    }, function(t, e) {
        var i = 0,
            n = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++i + n).toString(36))
        }
    }, function(t, e) {
        var i = t.exports = {
            version: "2.5.7"
        };
        "number" == typeof __e && (__e = i)
    }, function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    }, function(t, e) {
        t.exports = !1
    }, function(t, e, i) {
        i(22)("search", 1, function(t, e, i) {
            return [function(i) {
                "use strict";
                var n = t(this),
                    o = void 0 == i ? void 0 : i[e];
                return void 0 !== o ? o.call(i, n) : new RegExp(i)[e](String(n))
            }, i]
        })
    }, function(t, e, i) {
        "use strict";
        var n = i(8),
            o = i(11),
            r = i(7),
            s = i(27),
            a = i(3);
        t.exports = function(t, e, i) {
            var l = a(t),
                c = i(s, l, "" [t]),
                u = c[0],
                h = c[1];
            r(function() {
                var e = {};
                return e[l] = function() {
                    return 7
                }, 7 != "" [t](e)
            }) && (o(String.prototype, t, u), n(RegExp.prototype, l, 2 == e ? function(t, e) {
                return h.call(t, this, e)
            } : function(t) {
                return h.call(t, this)
            }))
        }
    }, function(t, e, i) {
        var n = i(47),
            o = i(33);
        t.exports = Object.keys || function(t) {
            return n(t, o)
        }
    }, function(t, e, i) {
        "use strict";
        var n = i(25),
            o = i(43),
            r = i(44),
            s = i(7),
            a = [].sort,
            l = [1, 2, 3];
        n(n.P + n.F * (s(function() {
            l.sort(void 0)
        }) || !s(function() {
            l.sort(null)
        }) || !i(74)(a)), "Array", {
            sort: function(t) {
                return void 0 === t ? a.call(r(this)) : a.call(r(this), o(t))
            }
        })
    }, function(t, e, i) {
        var n = i(2),
            o = i(18),
            r = i(8),
            s = i(11),
            a = i(42),
            l = function(t, e, i) {
                var c, u, h, p, d = t & l.F,
                    f = t & l.G,
                    m = t & l.S,
                    g = t & l.P,
                    v = t & l.B,
                    _ = f ? n : m ? n[e] || (n[e] = {}) : (n[e] || {}).prototype,
                    y = f ? o : o[e] || (o[e] = {}),
                    b = y.prototype || (y.prototype = {});
                for (c in f && (i = e), i) h = ((u = !d && _ && void 0 !== _[c]) ? _ : i)[c], p = v && u ? a(h, n) : g && "function" == typeof h ? a(Function.call, h) : h, _ && s(_, c, h, t & l.U), y[c] != h && r(y, c, p), g && b[c] != h && (b[c] = h)
            };
        n.core = o, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, t.exports = l
    }, function(t, e, i) {
        var n = i(9);
        t.exports = function(t, e) {
            if (!n(t)) return t;
            var i, o;
            if (e && "function" == typeof(i = t.toString) && !n(o = i.call(t))) return o;
            if ("function" == typeof(i = t.valueOf) && !n(o = i.call(t))) return o;
            if (!e && "function" == typeof(i = t.toString) && !n(o = i.call(t))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function(t, e) {
        t.exports = function(t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function(t, e) {
        e.f = {}.propertyIsEnumerable
    }, function(t, e) {
        var i = {}.toString;
        t.exports = function(t) {
            return i.call(t).slice(8, -1)
        }
    }, function(t, e, i) {
        var n = i(47),
            o = i(33).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function(t) {
            return n(t, o)
        }
    }, function(t, e, i) {
        var n = i(32)("keys"),
            o = i(17);
        t.exports = function(t) {
            return n[t] || (n[t] = o(t))
        }
    }, function(t, e, i) {
        var n = i(18),
            o = i(2),
            r = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (t.exports = function(t, e) {
            return r[t] || (r[t] = void 0 !== e ? e : {})
        })("versions", []).push({
            version: n.version,
            mode: i(20) ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        })
    }, function(t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function(t, e, i) {
        "use strict";
        var n = i(10);
        t.exports = function() {
            var t = n(this),
                e = "";
            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
        }
    }, function(t, e, i) {
        "use strict";
        i(82);
        var n = i(10),
            o = i(34),
            r = i(4),
            s = /./.toString,
            a = function(t) {
                i(11)(RegExp.prototype, "toString", t, !0)
            };
        i(7)(function() {
            return "/a/b" != s.call({
                source: "a",
                flags: "b"
            })
        }) ? a(function() {
            var t = n(this);
            return "/".concat(t.source, "/", "flags" in t ? t.flags : !r && t instanceof RegExp ? o.call(t) : void 0)
        }) : "toString" != s.name && a(function() {
            return s.call(this)
        })
    }, function(t, e, i) {
        var n = i(6).f,
            o = i(12),
            r = i(3)("toStringTag");
        t.exports = function(t, e, i) {
            t && !o(t = i ? t : t.prototype, r) && n(t, r, {
                configurable: !0,
                value: e
            })
        }
    }, function(t, e) {
        t.exports = {}
    }, function(t, e, i) {
        "use strict";
        i.d(e, "a", function() {
            return n
        });
        const n = (t, e) => {
            const i = t + "_" + e,
                n = "/images/marker/marker_skin_" + i + ".png";
            return window.skinImageMap[i] || n
        }
    }, function(t, e) {
        var i;
        i = function() {
            return this
        }();
        try {
            i = i || Function("return this")() || (0, eval)("this")
        } catch (t) {
            "object" == typeof window && (i = window)
        }
        t.exports = i
    }, function(t, e, i) {
        t.exports = !i(4) && !i(7)(function() {
            return 7 != Object.defineProperty(i(41)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, e, i) {
        var n = i(9),
            o = i(2).document,
            r = n(o) && n(o.createElement);
        t.exports = function(t) {
            return r ? o.createElement(t) : {}
        }
    }, function(t, e, i) {
        var n = i(43);
        t.exports = function(t, e, i) {
            if (n(t), void 0 === e) return t;
            switch (i) {
                case 1:
                    return function(i) {
                        return t.call(e, i)
                    };
                case 2:
                    return function(i, n) {
                        return t.call(e, i, n)
                    };
                case 3:
                    return function(i, n, o) {
                        return t.call(e, i, n, o)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    }, function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function(t, e, i) {
        var n = i(27);
        t.exports = function(t) {
            return Object(n(t))
        }
    }, function(t, e, i) {
        var n = i(2),
            o = i(75),
            r = i(6).f,
            s = i(30).f,
            a = i(49),
            l = i(34),
            c = n.RegExp,
            u = c,
            h = c.prototype,
            p = /a/g,
            d = /a/g,
            f = new c(p) !== p;
        if (i(4) && (!f || i(7)(function() {
                return d[i(3)("match")] = !1, c(p) != p || c(d) == d || "/a/i" != c(p, "i")
            }))) {
            c = function(t, e) {
                var i = this instanceof c,
                    n = a(t),
                    r = void 0 === e;
                return !i && n && t.constructor === c && r ? t : o(f ? new u(n && !r ? t.source : t, e) : u((n = t instanceof c) ? t.source : t, n && r ? l.call(t) : e), i ? this : h, c)
            };
            for (var m = function(t) {
                    t in c || r(c, t, {
                        configurable: !0,
                        get: function() {
                            return u[t]
                        },
                        set: function(e) {
                            u[t] = e
                        }
                    })
                }, g = s(u), v = 0; g.length > v;) m(g[v++]);
            h.constructor = c, c.prototype = h, i(11)(n, "RegExp", c)
        }
        i(81)("RegExp")
    }, function(t, e, i) {
        var n = i(28),
            o = i(19),
            r = i(13),
            s = i(26),
            a = i(12),
            l = i(40),
            c = Object.getOwnPropertyDescriptor;
        e.f = i(4) ? c : function(t, e) {
            if (t = r(t), e = s(e, !0), l) try {
                return c(t, e)
            } catch (t) {}
            if (a(t, e)) return o(!n.f.call(t, e), t[e])
        }
    }, function(t, e, i) {
        var n = i(12),
            o = i(13),
            r = i(78)(!1),
            s = i(31)("IE_PROTO");
        t.exports = function(t, e) {
            var i, a = o(t),
                l = 0,
                c = [];
            for (i in a) i != s && n(a, i) && c.push(i);
            for (; e.length > l;) n(a, i = e[l++]) && (~r(c, i) || c.push(i));
            return c
        }
    }, function(t, e) {
        var i = Math.ceil,
            n = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? n : i)(t)
        }
    }, function(t, e, i) {
        var n = i(9),
            o = i(29),
            r = i(3)("match");
        t.exports = function(t) {
            var e;
            return n(t) && (void 0 !== (e = t[r]) ? !!e : "RegExp" == o(t))
        }
    }, function(t, e) {
        (function(e) {
            t.exports = e
        }).call(this, {})
    }, function(t, e, i) {
        "use strict";
        t.exports = function() {}
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        e.addLeadingSlash = function(t) {
            return "/" === t.charAt(0) ? t : "/" + t
        }, e.stripLeadingSlash = function(t) {
            return "/" === t.charAt(0) ? t.substr(1) : t
        };
        var n = e.hasBasename = function(t, e) {
            return new RegExp("^" + e + "(\\/|\\?|#|$)", "i").test(t)
        };
        e.stripBasename = function(t, e) {
            return n(t, e) ? t.substr(e.length) : t
        }, e.stripTrailingSlash = function(t) {
            return "/" === t.charAt(t.length - 1) ? t.slice(0, -1) : t
        }, e.parsePath = function(t) {
            var e = t || "/",
                i = "",
                n = "",
                o = e.indexOf("#"); - 1 !== o && (n = e.substr(o), e = e.substr(0, o));
            var r = e.indexOf("?");
            return -1 !== r && (i = e.substr(r), e = e.substr(0, r)), {
                pathname: e,
                search: "?" === i ? "" : i,
                hash: "#" === n ? "" : n
            }
        }, e.createPath = function(t) {
            var e = t.pathname,
                i = t.search,
                n = t.hash,
                o = e || "/";
            return i && "?" !== i && (o += "?" === i.charAt(0) ? i : "?" + i), n && "#" !== n && (o += "#" === n.charAt(0) ? n : "#" + n), o
        }
    }, function(t, e, i) {
        i(54)("asyncIterator")
    }, function(t, e, i) {
        var n = i(2),
            o = i(18),
            r = i(20),
            s = i(55),
            a = i(6).f;
        t.exports = function(t) {
            var e = o.Symbol || (o.Symbol = r ? {} : n.Symbol || {});
            "_" == t.charAt(0) || t in e || a(e, t, {
                value: s.f(t)
            })
        }
    }, function(t, e, i) {
        e.f = i(3)
    }, function(t, e, i) {
        "use strict";
        var n = i(2),
            o = i(12),
            r = i(4),
            s = i(25),
            a = i(11),
            l = i(98).KEY,
            c = i(7),
            u = i(32),
            h = i(36),
            p = i(17),
            d = i(3),
            f = i(55),
            m = i(54),
            g = i(99),
            v = i(100),
            _ = i(10),
            y = i(9),
            b = i(13),
            w = i(26),
            x = i(19),
            L = i(58),
            C = i(103),
            T = i(46),
            k = i(6),
            P = i(23),
            S = T.f,
            E = k.f,
            D = C.f,
            M = n.Symbol,
            A = n.JSON,
            O = A && A.stringify,
            I = d("_hidden"),
            U = d("toPrimitive"),
            N = {}.propertyIsEnumerable,
            z = u("symbol-registry"),
            B = u("symbols"),
            R = u("op-symbols"),
            j = Object.prototype,
            $ = "function" == typeof M,
            F = n.QObject,
            Z = !F || !F.prototype || !F.prototype.findChild,
            H = r && c(function() {
                return 7 != L(E({}, "a", {
                    get: function() {
                        return E(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            }) ? function(t, e, i) {
                var n = S(j, e);
                n && delete j[e], E(t, e, i), n && t !== j && E(j, e, n)
            } : E,
            G = function(t) {
                var e = B[t] = L(M.prototype);
                return e._k = t, e
            },
            W = $ && "symbol" == typeof M.iterator ? function(t) {
                return "symbol" == typeof t
            } : function(t) {
                return t instanceof M
            },
            q = function(t, e, i) {
                return t === j && q(R, e, i), _(t), e = w(e, !0), _(i), o(B, e) ? (i.enumerable ? (o(t, I) && t[I][e] && (t[I][e] = !1), i = L(i, {
                    enumerable: x(0, !1)
                })) : (o(t, I) || E(t, I, x(1, {})), t[I][e] = !0), H(t, e, i)) : E(t, e, i)
            },
            V = function(t, e) {
                _(t);
                for (var i, n = g(e = b(e)), o = 0, r = n.length; r > o;) q(t, i = n[o++], e[i]);
                return t
            },
            K = function(t) {
                var e = N.call(this, t = w(t, !0));
                return !(this === j && o(B, t) && !o(R, t)) && (!(e || !o(this, t) || !o(B, t) || o(this, I) && this[I][t]) || e)
            },
            Y = function(t, e) {
                if (t = b(t), e = w(e, !0), t !== j || !o(B, e) || o(R, e)) {
                    var i = S(t, e);
                    return !i || !o(B, e) || o(t, I) && t[I][e] || (i.enumerable = !0), i
                }
            },
            J = function(t) {
                for (var e, i = D(b(t)), n = [], r = 0; i.length > r;) o(B, e = i[r++]) || e == I || e == l || n.push(e);
                return n
            },
            X = function(t) {
                for (var e, i = t === j, n = D(i ? R : b(t)), r = [], s = 0; n.length > s;) !o(B, e = n[s++]) || i && !o(j, e) || r.push(B[e]);
                return r
            };
        $ || (a((M = function() {
            if (this instanceof M) throw TypeError("Symbol is not a constructor!");
            var t = p(arguments.length > 0 ? arguments[0] : void 0),
                e = function(i) {
                    this === j && e.call(R, i), o(this, I) && o(this[I], t) && (this[I][t] = !1), H(this, t, x(1, i))
                };
            return r && Z && H(j, t, {
                configurable: !0,
                set: e
            }), G(t)
        }).prototype, "toString", function() {
            return this._k
        }), T.f = Y, k.f = q, i(30).f = C.f = J, i(28).f = K, i(57).f = X, r && !i(20) && a(j, "propertyIsEnumerable", K, !0), f.f = function(t) {
            return G(d(t))
        }), s(s.G + s.W + s.F * !$, {
            Symbol: M
        });
        for (var Q = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; Q.length > tt;) d(Q[tt++]);
        for (var et = P(d.store), it = 0; et.length > it;) m(et[it++]);
        s(s.S + s.F * !$, "Symbol", {
            for: function(t) {
                return o(z, t += "") ? z[t] : z[t] = M(t)
            },
            keyFor: function(t) {
                if (!W(t)) throw TypeError(t + " is not a symbol!");
                for (var e in z)
                    if (z[e] === t) return e
            },
            useSetter: function() {
                Z = !0
            },
            useSimple: function() {
                Z = !1
            }
        }), s(s.S + s.F * !$, "Object", {
            create: function(t, e) {
                return void 0 === e ? L(t) : V(L(t), e)
            },
            defineProperty: q,
            defineProperties: V,
            getOwnPropertyDescriptor: Y,
            getOwnPropertyNames: J,
            getOwnPropertySymbols: X
        }), A && s(s.S + s.F * (!$ || c(function() {
            var t = M();
            return "[null]" != O([t]) || "{}" != O({
                a: t
            }) || "{}" != O(Object(t))
        })), "JSON", {
            stringify: function(t) {
                for (var e, i, n = [t], o = 1; arguments.length > o;) n.push(arguments[o++]);
                if (i = e = n[1], (y(e) || void 0 !== t) && !W(t)) return v(e) || (e = function(t, e) {
                    if ("function" == typeof i && (e = i.call(this, t, e)), !W(e)) return e
                }), n[1] = e, O.apply(A, n)
            }
        }), M.prototype[U] || i(8)(M.prototype, U, M.prototype.valueOf), h(M, "Symbol"), h(Math, "Math", !0), h(n.JSON, "JSON", !0)
    }, function(t, e) {
        e.f = Object.getOwnPropertySymbols
    }, function(t, e, i) {
        var n = i(10),
            o = i(101),
            r = i(33),
            s = i(31)("IE_PROTO"),
            a = function() {},
            l = function() {
                var t, e = i(41)("iframe"),
                    n = r.length;
                for (e.style.display = "none", i(102).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), l = t.F; n--;) delete l.prototype[r[n]];
                return l()
            };
        t.exports = Object.create || function(t, e) {
            var i;
            return null !== t ? (a.prototype = n(t), i = new a, a.prototype = null, i[s] = t) : i = l(), void 0 === e ? i : o(i, e)
        }
    }, function(t, e, i) {
        i(22)("match", 1, function(t, e, i) {
            return [function(i) {
                "use strict";
                var n = t(this),
                    o = void 0 == i ? void 0 : i[e];
                return void 0 !== o ? o.call(i, n) : new RegExp(i)[e](String(n))
            }, i]
        })
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            o = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                }
                return t
            },
            r = h(i(51)),
            s = h(i(90)),
            a = i(91),
            l = i(52),
            c = h(i(94)),
            u = i(95);

        function h(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var p = function() {
            try {
                return window.history.state || {}
            } catch (t) {
                return {}
            }
        };
        e.default = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0, s.default)(u.canUseDOM, "Browser history needs a DOM");
            var e = window.history,
                i = (0, u.supportsHistory)(),
                h = !(0, u.supportsPopStateOnHashChange)(),
                d = t.forceRefresh,
                f = void 0 !== d && d,
                m = t.getUserConfirmation,
                g = void 0 === m ? u.getConfirmation : m,
                v = t.keyLength,
                _ = void 0 === v ? 6 : v,
                y = t.basename ? (0, l.stripTrailingSlash)((0, l.addLeadingSlash)(t.basename)) : "",
                b = function(t) {
                    var e = t || {},
                        i = e.key,
                        n = e.state,
                        o = window.location,
                        s = o.pathname + o.search + o.hash;
                    return (0, r.default)(!y || (0, l.hasBasename)(s, y), 'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "' + s + '" to begin with "' + y + '".'), y && (s = (0, l.stripBasename)(s, y)), (0, a.createLocation)(s, n, i)
                },
                w = function() {
                    return Math.random().toString(36).substr(2, _)
                },
                x = (0, c.default)(),
                L = function(t) {
                    o(N, t), N.length = e.length, x.notifyListeners(N.location, N.action)
                },
                C = function(t) {
                    (0, u.isExtraneousPopstateEvent)(t) || P(b(t.state))
                },
                T = function() {
                    P(b(p()))
                },
                k = !1,
                P = function(t) {
                    k ? (k = !1, L()) : x.confirmTransitionTo(t, "POP", g, function(e) {
                        e ? L({
                            action: "POP",
                            location: t
                        }) : S(t)
                    })
                },
                S = function(t) {
                    var e = N.location,
                        i = D.indexOf(e.key); - 1 === i && (i = 0);
                    var n = D.indexOf(t.key); - 1 === n && (n = 0);
                    var o = i - n;
                    o && (k = !0, A(o))
                },
                E = b(p()),
                D = [E.key],
                M = function(t) {
                    return y + (0, l.createPath)(t)
                },
                A = function(t) {
                    e.go(t)
                },
                O = 0,
                I = function(t) {
                    1 === (O += t) ? ((0, u.addEventListener)(window, "popstate", C), h && (0, u.addEventListener)(window, "hashchange", T)) : 0 === O && ((0, u.removeEventListener)(window, "popstate", C), h && (0, u.removeEventListener)(window, "hashchange", T))
                },
                U = !1,
                N = {
                    length: e.length,
                    action: "POP",
                    location: E,
                    createHref: M,
                    push: function(t, o) {
                        (0, r.default)(!("object" === (void 0 === t ? "undefined" : n(t)) && void 0 !== t.state && void 0 !== o), "You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");
                        var s = (0, a.createLocation)(t, o, w(), N.location);
                        x.confirmTransitionTo(s, "PUSH", g, function(t) {
                            if (t) {
                                var n = M(s),
                                    o = s.key,
                                    a = s.state;
                                if (i)
                                    if (e.pushState({
                                            key: o,
                                            state: a
                                        }, null, n), f) window.location.href = n;
                                    else {
                                        var l = D.indexOf(N.location.key),
                                            c = D.slice(0, -1 === l ? 0 : l + 1);
                                        c.push(s.key), D = c, L({
                                            action: "PUSH",
                                            location: s
                                        })
                                    }
                                else(0, r.default)(void 0 === a, "Browser history cannot push state in browsers that do not support HTML5 history"), window.location.href = n
                            }
                        })
                    },
                    replace: function(t, o) {
                        (0, r.default)(!("object" === (void 0 === t ? "undefined" : n(t)) && void 0 !== t.state && void 0 !== o), "You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");
                        var s = (0, a.createLocation)(t, o, w(), N.location);
                        x.confirmTransitionTo(s, "REPLACE", g, function(t) {
                            if (t) {
                                var n = M(s),
                                    o = s.key,
                                    a = s.state;
                                if (i)
                                    if (e.replaceState({
                                            key: o,
                                            state: a
                                        }, null, n), f) window.location.replace(n);
                                    else {
                                        var l = D.indexOf(N.location.key); - 1 !== l && (D[l] = s.key), L({
                                            action: "REPLACE",
                                            location: s
                                        })
                                    }
                                else(0, r.default)(void 0 === a, "Browser history cannot replace state in browsers that do not support HTML5 history"), window.location.replace(n)
                            }
                        })
                    },
                    go: A,
                    goBack: function() {
                        return A(-1)
                    },
                    goForward: function() {
                        return A(1)
                    },
                    block: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = x.setPrompt(t);
                        return U || (I(1), U = !0),
                            function() {
                                return U && (U = !1, I(-1)), e()
                            }
                    },
                    listen: function(t) {
                        var e = x.appendListener(t);
                        return I(1),
                            function() {
                                I(-1), e()
                            }
                    }
                };
            return N
        }
    }, function(t, e, i) {
        "use strict";
        i.d(e, "a", function() {
            return P
        });
        i(53), i(56), i(15), i(35), i(14);

        function n(t, e) {
            return function(t) {
                if (Array.isArray(t)) return t
            }(t) || function(t, e) {
                var i = [],
                    n = !0,
                    o = !1,
                    r = void 0;
                try {
                    for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value), !e || i.length !== e); n = !0);
                } catch (t) {
                    o = !0, r = t
                } finally {
                    try {
                        n || null == a.return || a.return()
                    } finally {
                        if (o) throw r
                    }
                }
                return i
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        const o = /AdminLog started on ([\d-]+) at ([\d:]+)/,
            r = /([\d:]+) \| Player "([^\"]+)"\s*is connected\s*\(id=(\S*)\)/,
            s = /([\d:]+) \| Player "([^"]+)".*\(id=(\S*)\).*disconnected/,
            a = /([\d:]+) \| Chat\("([^"]+)"\s*\(id=(\S*)\)\):\s*(.*)/,
            l = /([\d:]+) \| Player "([^"]+)".*\(id=([^\s,]*),? pos=<([\d.]+),\s*([\d.]+),\s*([\d.]+)>.*\).*unconscious/,
            c = /([\d:]+) \| Player "([^"]+)".*\(id=([^\s,]*),? pos=<([\d.]+),\s*([\d.]+),\s*([\d.]+)>.*\).*regained consciousness/,
            u = /([\d:]+) \| Player "([^"]+)".*\(id=([^\s,]*),? pos=<([\d.]+), ([\d.]+), ([\d.]+)>\)\[[^\]]*\]\s*hit by.*"([^"]+)"\s*\(id=([^\s,]*),? pos=<([\d.]+), ([\d.]+), ([\d.]+)>\) into (.*) for (\d+) damage .* with (.*) (from ([\d.]*) meters)/,
            h = /([\d:]+) \| Player "([^"]+)".*\(id=([^\s,]*),? pos=<([\d.]+), ([\d.]+), ([\d.]+)>\)\[[^\]]*\]\s*hit by\s*(.*)\sinto\s*(.*)\s+for\s*([\d.]*)\s*damage\s*\((.*)\)/,
            p = /([\d:]+) \| Player "([^"]+)".*\(id=([^\s,]*),? pos=<([\d.]+), ([\d.]+), ([\d.]+)>\)\[[^\]]*\]\s*hit by\s*Player "([^"]+)"\s*\(id=([^\s,]*),? pos=<([\d.]+), ([\d.]+), ([\d.]+)>\)\s*into\s*(.*)\s+for\s*([\d.]*)\s*damage/,
            d = /([\d:]+) \| Player "([^"]+)".*\(id=([^\s,]*),? pos=<([\d.]+), ([\d.]+), ([\d.]+)>\)\[[^\]]*\]\s*hit by\sFallDamage/,
            f = /([\d:]+) \| Player "([^"]+)".*\(id=([^\s,]*),? pos=<([\d.]+), ([\d.]+), ([\d.]+)>\)\[[^\]]*\]\s*hit by\s*(.*)/,
            m = /([\d:]+) \| Player "([^"]+)".*\(id=([^\s,]*),? pos=<([\d.]+), ([\d.]+), ([\d.]+)>\)\s*killed by.*"([^"]+)"\s*\(id=([^\s,]*),? pos=<([\d.]+), ([\d.]+), ([\d.]+)>\) with (.*) from ([\d.]*) meters/,
            g = /([\d:]+) \| Player "([^"]+)".*\(id=([^\s,]*),? pos=<([\d.]+), ([\d.]+), ([\d.]+)>\)\s*killed by (.*)/,
            v = /([\d:]+) \| Player "([^"]+)".*\(id=([^\s,]*),? pos=<([\d.]+), ([\d.]+), ([\d.]+)>\)\s*.died\. Stats> (.*)/,
            _ = /([\d:]+) \| Player "([^"]+)".*\(id=([^\s,]*),? pos=<([\d.]+), ([\d.]+), ([\d.]+)>\)\s*.committed suicide/,
            y = /([\d:]+) \| Player "([^"]+)".*\(id=([^\s,]*),? pos=<([\d.]+), ([\d.]+), ([\d.]+)>\)\s*.bled out/,
            b = /([\d:]+) \| Player "([^"]+)".*\(id=([^\s,]*),? pos=<([\d.]+), ([\d.]+), ([\d.]+)>\)\s*placed (.*)/,
            w = /([\d:]+) \| Player "([^"]+)".*\(id=([^\s,]*),? pos=<([\d.]+), ([\d.]+), ([\d.]+)>\)\s*built (.*) with (.*)/,
            x = /([\d:]+) \| Player "([^"]+)".*\(id=([^\s,]*),? pos=<([\d.]+), ([\d.]+), ([\d.]+)>\)\s*dismantled (.*) with (.*)/,
            L = /([\d:]+) \| Player "([^"]+)".*\(id=([^\s,]*),? pos=<([\d.]+), ([\d.]+), ([\d.]+)>\)\s*.*hit by (Watchtower|Fence) with MeleeDamage/,
            C = /[**]|^$/,
            T = /([\d:]+) \| (.*)/,
            k = t => {
                let e;
                if (e = o.exec(t)) {
                    const t = n(e[1].split("-").map(t => parseInt(t)), 3),
                        i = t[0],
                        o = t[1],
                        r = t[2],
                        s = n(e[2].split(":").map(t => parseInt(t)), 3),
                        a = s[0],
                        l = s[1],
                        c = s[2];
                    let u = new Date(0);
                    return u.setFullYear(i), u.setUTCMonth(o - 1), u.setUTCDate(r), u.setUTCHours(a), u.setUTCMinutes(l), u.setUTCSeconds(c), u.setUTCMilliseconds(0), {
                        type: "day",
                        date: e[1],
                        time: e[2],
                        timestamp: u
                    }
                }
                return (e = r.exec(t)) ? {
                    type: "connected",
                    time: e[1],
                    player: {
                        name: e[2],
                        guid: e[3]
                    }
                } : (e = s.exec(t)) ? {
                    type: "disconnected",
                    time: e[1],
                    player: {
                        name: e[2],
                        guid: e[3]
                    }
                } : (e = a.exec(t)) ? {
                    type: "chat",
                    time: e[1],
                    player: {
                        name: e[2],
                        guid: e[3]
                    },
                    message: e[4]
                } : (e = l.exec(t)) ? {
                    type: "unconscious",
                    time: e[1],
                    player: {
                        name: e[2],
                        guid: e[3],
                        position: {
                            x: parseFloat(e[4]),
                            y: parseFloat(e[5]),
                            z: parseFloat(e[6])
                        }
                    }
                } : (e = c.exec(t)) ? {
                    type: "conscious",
                    time: e[1],
                    player: {
                        name: e[2],
                        guid: e[3],
                        position: {
                            x: parseFloat(e[4]),
                            y: parseFloat(e[5]),
                            z: parseFloat(e[6])
                        }
                    }
                } : (e = u.exec(t)) ? {
                    type: "hit_shot",
                    time: e[1],
                    player: {
                        name: e[2],
                        guid: e[3],
                        position: {
                            x: parseFloat(e[4]),
                            y: parseFloat(e[5]),
                            z: parseFloat(e[6])
                        }
                    },
                    shooter: {
                        name: e[7],
                        guid: e[8],
                        position: {
                            x: parseFloat(e[9]),
                            y: parseFloat(e[10]),
                            z: parseFloat(e[11])
                        }
                    },
                    target: e[12],
                    damage: parseFloat(e[13]),
                    weapon: e[14],
                    distance: parseFloat(e[16])
                } : (e = p.exec(t)) ? {
                    type: "hit_melee",
                    time: e[1],
                    player: {
                        name: e[2],
                        guid: e[3],
                        position: {
                            x: parseFloat(e[4]),
                            y: parseFloat(e[5]),
                            z: parseFloat(e[6])
                        }
                    },
                    enemy: {
                        name: e[7],
                        guid: e[8],
                        position: {
                            x: parseFloat(e[9]),
                            y: parseFloat(e[10]),
                            z: parseFloat(e[11])
                        }
                    },
                    target: e[12],
                    damage: parseFloat(e[13])
                } : (e = h.exec(t)) ? {
                    type: "hit_melee",
                    time: e[1],
                    player: {
                        name: e[2],
                        guid: e[3],
                        position: {
                            x: parseFloat(e[4]),
                            y: parseFloat(e[5]),
                            z: parseFloat(e[6])
                        }
                    },
                    enemy: e[7],
                    target: e[8],
                    damage: parseFloat(e[9]),
                    source: e[10]
                } : (e = d.exec(t)) ? {
                    type: "hit_fall",
                    time: e[1],
                    player: {
                        name: e[2],
                        guid: e[3],
                        position: {
                            x: parseFloat(e[4]),
                            y: parseFloat(e[5]),
                            z: parseFloat(e[6])
                        }
                    }
                } : (e = L.exec(t)) ? {
                    type: "dismantled",
                    time: e[1],
                    player: {
                        name: e[2],
                        guid: e[3],
                        position: {
                            x: parseFloat(e[4]),
                            y: parseFloat(e[5]),
                            z: parseFloat(e[6])
                        }
                    },
                    item: e[7],
                    tool: ""
                } : (e = f.exec(t)) ? {
                    type: "hit_generic",
                    time: e[1],
                    player: {
                        name: e[2],
                        guid: e[3],
                        position: {
                            x: parseFloat(e[4]),
                            y: parseFloat(e[5]),
                            z: parseFloat(e[6])
                        }
                    },
                    enemy: e[7]
                } : (e = m.exec(t)) ? {
                    type: "death_by_shot",
                    time: e[1],
                    player: {
                        name: e[2],
                        guid: e[3],
                        position: {
                            x: parseFloat(e[4]),
                            y: parseFloat(e[5]),
                            z: parseFloat(e[6])
                        }
                    },
                    shooter: {
                        name: e[7],
                        guid: e[8],
                        position: {
                            x: parseFloat(e[9]),
                            y: parseFloat(e[10]),
                            z: parseFloat(e[11])
                        }
                    },
                    weapon: e[12],
                    distance: parseFloat(e[13])
                } : (e = g.exec(t)) ? {
                    type: "death_by_melee",
                    time: e[1],
                    player: {
                        name: e[2],
                        guid: e[3],
                        position: {
                            x: parseFloat(e[4]),
                            y: parseFloat(e[5]),
                            z: parseFloat(e[6])
                        }
                    },
                    enemy: e[7]
                } : (e = v.exec(t)) ? {
                    type: "death_by_stats",
                    time: e[1],
                    player: {
                        name: e[2],
                        guid: e[3],
                        position: {
                            x: parseFloat(e[4]),
                            y: parseFloat(e[5]),
                            z: parseFloat(e[6])
                        }
                    },
                    stats: e[7]
                } : (e = _.exec(t)) ? {
                    type: "death_by_suicide",
                    time: e[1],
                    player: {
                        name: e[2],
                        guid: e[3],
                        position: {
                            x: parseFloat(e[4]),
                            y: parseFloat(e[5]),
                            z: parseFloat(e[6])
                        }
                    }
                } : (e = y.exec(t)) ? {
                    type: "death_by_bleeding",
                    time: e[1],
                    player: {
                        name: e[2],
                        guid: e[3],
                        position: {
                            x: parseFloat(e[4]),
                            y: parseFloat(e[5]),
                            z: parseFloat(e[6])
                        }
                    }
                } : (e = b.exec(t)) ? {
                    type: "placement",
                    time: e[1],
                    player: {
                        name: e[2],
                        guid: e[3],
                        position: {
                            x: parseFloat(e[4]),
                            y: parseFloat(e[5]),
                            z: parseFloat(e[6])
                        }
                    },
                    item: e[7]
                } : (e = w.exec(t)) ? {
                    type: "built",
                    time: e[1],
                    player: {
                        name: e[2],
                        guid: e[3],
                        position: {
                            x: parseFloat(e[4]),
                            y: parseFloat(e[5]),
                            z: parseFloat(e[6])
                        }
                    },
                    item: e[7],
                    tool: e[8]
                } : (e = x.exec(t)) ? {
                    type: "dismantled",
                    time: e[1],
                    player: {
                        name: e[2],
                        guid: e[3],
                        position: {
                            x: parseFloat(e[4]),
                            y: parseFloat(e[5]),
                            z: parseFloat(e[6])
                        }
                    },
                    item: e[7],
                    tool: e[8]
                } : (e = C.exec(t)) ? void 0 : (e = T.exec(t)) ? {
                    type: "unknown",
                    time: e[1],
                    message: e[2],
                    line: t
                } : void console.warn("Unknown Line: ", t)
            },
            P = t => t.toString().split("\n").map(k).filter(t => t).reduce((t, e) => {
                if (!e.timestamp) {
                    const i = t.slice(-1)[0];
                    if (i) {
                        let t = i.timestamp;
                        t || (t = new Date), e.timestamp = new Date(t);
                        const o = n(e.time.split(":").map(t => parseInt(t)), 3),
                            r = o[0],
                            s = o[1],
                            a = o[2];
                        e.timestamp.setUTCHours(r), e.timestamp.setUTCMinutes(s), e.timestamp.setUTCSeconds(a), e.timestamp < t && e.timestamp.setDate(e.timestamp.getDate() + 1)
                    }
                }
                return t.push(e), t
            }, [])
    }, function(t, e, i) {
        i(63), t.exports = i(64)
    }, function(t, e, i) {
        (function(t) {
            ("undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
                id: "6a54e39"
            }
        }).call(this, i(39))
    }, function(t, e, i) {
        "use strict";
        i.r(e),
            function(t) {
                i(65), i(67), i(1), i(69), i(70), i(71), i(138);
                var e = i(0),
                    n = (i(127), i(128), i(129), i(130), i(131));
                const o = [1, 2, 3];
                window.iAmJavascriptES6 = (() => console.log(...o)), t(function() {
                    t.material.init(), t('[data-toggle="tooltip"]').tooltip(), t.urlParam("inappview") || new n({
                        daysHidden: 15,
                        daysReminder: 90,
                        title: "iZurvive - Map for DayZ",
                        author: "Android App",
                        button: "VIEW",
                        store: {
                            android: "In Google Play"
                        },
                        price: {
                            ios: "FREE",
                            android: "FREE"
                        }
                    }), t.cookie.defaults.path = "/";
                    var i = L.userManager(null, {});
                    i._readUsernameFromCookie(), L.changeUsernameDialog(i), "USERNAME" === t("#username-display").text() && t("#username-display").addClass("btn-text-highlight"), e.e() && t("#ios-link").addClass("btn-text-highlight"), e.d() && t("#android-link").addClass("btn-text-highlight")
                })
            }.call(this, i(1))
    }, function(t, e, i) {}, , function(t, e, i) {}, , function(t, e, i) {
        var n, o, r;
        /*!
        * jQuery Cookie Plugin v1.4.1
        * https://github.com/carhartl/jquery-cookie
        *
        * Copyright 2013 Klaus Hartl
        * Released under the MIT license
        */
        o = [i(1)], void 0 === (r = "function" == typeof(n = function(t) {
            var e = /\+/g;

            function i(t) {
                return r.raw ? t : encodeURIComponent(t)
            }

            function n(t) {
                return r.raw ? t : decodeURIComponent(t)
            }

            function o(i, n) {
                var o = r.raw ? i : function(t) {
                    0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
                    try {
                        return t = decodeURIComponent(t.replace(e, " ")), r.json ? JSON.parse(t) : t
                    } catch (t) {}
                }(i);
                return t.isFunction(n) ? n(o) : o
            }
            var r = t.cookie = function(e, s, a) {
                if (void 0 !== s && !t.isFunction(s)) {
                    if ("number" == typeof(a = t.extend({}, r.defaults, a)).expires) {
                        var l = a.expires,
                            c = a.expires = new Date;
                        c.setTime(+c + 864e5 * l)
                    }
                    return document.cookie = [i(e), "=", function(t) {
                        return i(r.json ? JSON.stringify(t) : String(t))
                    }(s), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
                }
                for (var u = e ? void 0 : {}, h = document.cookie ? document.cookie.split("; ") : [], p = 0, d = h.length; p < d; p++) {
                    var f = h[p].split("="),
                        m = n(f.shift()),
                        g = f.join("=");
                    if (e && e === m) {
                        u = o(g, s);
                        break
                    }
                    e || void 0 === (g = o(g)) || (u[m] = g)
                }
                return u
            };
            r.defaults = {}, t.removeCookie = function(e, i) {
                return void 0 !== t.cookie(e) && (t.cookie(e, "", t.extend({}, i, {
                    expires: -1
                })), !t.cookie(e))
            }
        }) ? n.apply(e, o) : n) || (t.exports = r)
    }, function(t, e, i) {
        (function(t) {
            /*!
            * Bootstrap v3.3.7 (http://getbootstrap.com)
            * Copyright 2011-2016 Twitter, Inc.
            * Licensed under the MIT license
            */
            if (void 0 === t) throw new Error("Bootstrap's JavaScript requires jQuery");
            ! function(e) {
                "use strict";
                var i = t.fn.jquery.split(" ")[0].split(".");
                if (i[0] < 2 && i[1] < 9 || 1 == i[0] && 9 == i[1] && i[2] < 1 || i[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
            }(),
            function(t) {
                "use strict";
                t.fn.emulateTransitionEnd = function(e) {
                    var i = !1,
                        n = this;
                    t(this).one("bsTransitionEnd", function() {
                        i = !0
                    });
                    return setTimeout(function() {
                        i || t(n).trigger(t.support.transition.end)
                    }, e), this
                }, t(function() {
                    t.support.transition = function() {
                        var t = document.createElement("bootstrap"),
                            e = {
                                WebkitTransition: "webkitTransitionEnd",
                                MozTransition: "transitionend",
                                OTransition: "oTransitionEnd otransitionend",
                                transition: "transitionend"
                            };
                        for (var i in e)
                            if (void 0 !== t.style[i]) return {
                                end: e[i]
                            };
                        return !1
                    }(), t.support.transition && (t.event.special.bsTransitionEnd = {
                        bindType: t.support.transition.end,
                        delegateType: t.support.transition.end,
                        handle: function(e) {
                            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                        }
                    })
                })
            }(t),
            function(t) {
                "use strict";
                var e = '[data-dismiss="alert"]',
                    i = function(i) {
                        t(i).on("click", e, this.close)
                    };
                i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
                    var n = t(this),
                        o = n.attr("data-target");
                    o || (o = (o = n.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, ""));
                    var r = t("#" === o ? [] : o);

                    function s() {
                        r.detach().trigger("closed.bs.alert").remove()
                    }
                    e && e.preventDefault(), r.length || (r = n.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s())
                };
                var n = t.fn.alert;
                t.fn.alert = function(e) {
                    return this.each(function() {
                        var n = t(this),
                            o = n.data("bs.alert");
                        o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
                    })
                }, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
                    return t.fn.alert = n, this
                }, t(document).on("click.bs.alert.data-api", e, i.prototype.close)
            }(t),
            function(t) {
                "use strict";
                var e = function(i, n) {
                    this.$element = t(i), this.options = t.extend({}, e.DEFAULTS, n), this.isLoading = !1
                };

                function i(i) {
                    return this.each(function() {
                        var n = t(this),
                            o = n.data("bs.button"),
                            r = "object" == typeof i && i;
                        o || n.data("bs.button", o = new e(this, r)), "toggle" == i ? o.toggle() : i && o.setState(i)
                    })
                }
                e.VERSION = "3.3.7", e.DEFAULTS = {
                    loadingText: "loading..."
                }, e.prototype.setState = function(e) {
                    var i = "disabled",
                        n = this.$element,
                        o = n.is("input") ? "val" : "html",
                        r = n.data();
                    e += "Text", null == r.resetText && n.data("resetText", n[o]()), setTimeout(t.proxy(function() {
                        n[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i).prop(i, !1))
                    }, this), 0)
                }, e.prototype.toggle = function() {
                    var t = !0,
                        e = this.$element.closest('[data-toggle="buttons"]');
                    if (e.length) {
                        var i = this.$element.find("input");
                        "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
                    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
                };
                var n = t.fn.button;
                t.fn.button = i, t.fn.button.Constructor = e, t.fn.button.noConflict = function() {
                    return t.fn.button = n, this
                }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
                    var n = t(e.target).closest(".btn");
                    i.call(n, "toggle"), t(e.target).is('input[type="radio"], input[type="checkbox"]') || (e.preventDefault(), n.is("input,button") ? n.trigger("focus") : n.find("input:visible,button:visible").first().trigger("focus"))
                }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
                    t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
                })
            }(t),
            function(t) {
                "use strict";
                var e = function(e, i) {
                    this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
                };

                function i(i) {
                    return this.each(function() {
                        var n = t(this),
                            o = n.data("bs.carousel"),
                            r = t.extend({}, e.DEFAULTS, n.data(), "object" == typeof i && i),
                            s = "string" == typeof i ? i : r.slide;
                        o || n.data("bs.carousel", o = new e(this, r)), "number" == typeof i ? o.to(i) : s ? o[s]() : r.interval && o.pause().cycle()
                    })
                }
                e.VERSION = "3.3.7", e.TRANSITION_DURATION = 600, e.DEFAULTS = {
                    interval: 5e3,
                    pause: "hover",
                    wrap: !0,
                    keyboard: !0
                }, e.prototype.keydown = function(t) {
                    if (!/input|textarea/i.test(t.target.tagName)) {
                        switch (t.which) {
                            case 37:
                                this.prev();
                                break;
                            case 39:
                                this.next();
                                break;
                            default:
                                return
                        }
                        t.preventDefault()
                    }
                }, e.prototype.cycle = function(e) {
                    return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
                }, e.prototype.getItemIndex = function(t) {
                    return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
                }, e.prototype.getItemForDirection = function(t, e) {
                    var i = this.getItemIndex(e);
                    if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
                    var n = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
                    return this.$items.eq(n)
                }, e.prototype.to = function(t) {
                    var e = this,
                        i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
                    if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                        e.to(t)
                    }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
                }, e.prototype.pause = function(e) {
                    return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
                }, e.prototype.next = function() {
                    if (!this.sliding) return this.slide("next")
                }, e.prototype.prev = function() {
                    if (!this.sliding) return this.slide("prev")
                }, e.prototype.slide = function(i, n) {
                    var o = this.$element.find(".item.active"),
                        r = n || this.getItemForDirection(i, o),
                        s = this.interval,
                        a = "next" == i ? "left" : "right",
                        l = this;
                    if (r.hasClass("active")) return this.sliding = !1;
                    var c = r[0],
                        u = t.Event("slide.bs.carousel", {
                            relatedTarget: c,
                            direction: a
                        });
                    if (this.$element.trigger(u), !u.isDefaultPrevented()) {
                        if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                            this.$indicators.find(".active").removeClass("active");
                            var h = t(this.$indicators.children()[this.getItemIndex(r)]);
                            h && h.addClass("active")
                        }
                        var p = t.Event("slid.bs.carousel", {
                            relatedTarget: c,
                            direction: a
                        });
                        return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(i), r[0].offsetWidth, o.addClass(a), r.addClass(a), o.one("bsTransitionEnd", function() {
                            r.removeClass([i, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                                l.$element.trigger(p)
                            }, 0)
                        }).emulateTransitionEnd(e.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(p)), s && this.cycle(), this
                    }
                };
                var n = t.fn.carousel;
                t.fn.carousel = i, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function() {
                    return t.fn.carousel = n, this
                };
                var o = function(e) {
                    var n, o = t(this),
                        r = t(o.attr("data-target") || (n = o.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
                    if (r.hasClass("carousel")) {
                        var s = t.extend({}, r.data(), o.data()),
                            a = o.attr("data-slide-to");
                        a && (s.interval = !1), i.call(r, s), a && r.data("bs.carousel").to(a), e.preventDefault()
                    }
                };
                t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() {
                    t('[data-ride="carousel"]').each(function() {
                        var e = t(this);
                        i.call(e, e.data())
                    })
                })
            }(t),
            function(t) {
                "use strict";
                var e = function(i, n) {
                    this.$element = t(i), this.options = t.extend({}, e.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
                };

                function i(e) {
                    var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
                    return t(n)
                }

                function n(i) {
                    return this.each(function() {
                        var n = t(this),
                            o = n.data("bs.collapse"),
                            r = t.extend({}, e.DEFAULTS, n.data(), "object" == typeof i && i);
                        !o && r.toggle && /show|hide/.test(i) && (r.toggle = !1), o || n.data("bs.collapse", o = new e(this, r)), "string" == typeof i && o[i]()
                    })
                }
                e.VERSION = "3.3.7", e.TRANSITION_DURATION = 350, e.DEFAULTS = {
                    toggle: !0
                }, e.prototype.dimension = function() {
                    return this.$element.hasClass("width") ? "width" : "height"
                }, e.prototype.show = function() {
                    if (!this.transitioning && !this.$element.hasClass("in")) {
                        var i, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                        if (!(o && o.length && (i = o.data("bs.collapse")) && i.transitioning)) {
                            var r = t.Event("show.bs.collapse");
                            if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                                o && o.length && (n.call(o, "hide"), i || o.data("bs.collapse", null));
                                var s = this.dimension();
                                this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                                var a = function() {
                                    this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                                };
                                if (!t.support.transition) return a.call(this);
                                var l = t.camelCase(["scroll", s].join("-"));
                                this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(e.TRANSITION_DURATION)[s](this.$element[0][l])
                            }
                        }
                    }
                }, e.prototype.hide = function() {
                    if (!this.transitioning && this.$element.hasClass("in")) {
                        var i = t.Event("hide.bs.collapse");
                        if (this.$element.trigger(i), !i.isDefaultPrevented()) {
                            var n = this.dimension();
                            this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                            var o = function() {
                                this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                            };
                            if (!t.support.transition) return o.call(this);
                            this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(e.TRANSITION_DURATION)
                        }
                    }
                }, e.prototype.toggle = function() {
                    this[this.$element.hasClass("in") ? "hide" : "show"]()
                }, e.prototype.getParent = function() {
                    return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(e, n) {
                        var o = t(n);
                        this.addAriaAndCollapsedClass(i(o), o)
                    }, this)).end()
                }, e.prototype.addAriaAndCollapsedClass = function(t, e) {
                    var i = t.hasClass("in");
                    t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
                };
                var o = t.fn.collapse;
                t.fn.collapse = n, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function() {
                    return t.fn.collapse = o, this
                }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
                    var o = t(this);
                    o.attr("data-target") || e.preventDefault();
                    var r = i(o),
                        s = r.data("bs.collapse") ? "toggle" : o.data();
                    n.call(r, s)
                })
            }(t),
            function(t) {
                "use strict";
                var e = ".dropdown-backdrop",
                    i = '[data-toggle="dropdown"]',
                    n = function(e) {
                        t(e).on("click.bs.dropdown", this.toggle)
                    };

                function o(e) {
                    var i = e.attr("data-target");
                    i || (i = (i = e.attr("href")) && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
                    var n = i && t(i);
                    return n && n.length ? n : e.parent()
                }

                function r(n) {
                    n && 3 === n.which || (t(e).remove(), t(i).each(function() {
                        var e = t(this),
                            i = o(e),
                            r = {
                                relatedTarget: this
                            };
                        i.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(i[0], n.target) || (i.trigger(n = t.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (e.attr("aria-expanded", "false"), i.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
                    }))
                }
                n.VERSION = "3.3.7", n.prototype.toggle = function(e) {
                    var i = t(this);
                    if (!i.is(".disabled, :disabled")) {
                        var n = o(i),
                            s = n.hasClass("open");
                        if (r(), !s) {
                            "ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", r);
                            var a = {
                                relatedTarget: this
                            };
                            if (n.trigger(e = t.Event("show.bs.dropdown", a)), e.isDefaultPrevented()) return;
                            i.trigger("focus").attr("aria-expanded", "true"), n.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
                        }
                        return !1
                    }
                }, n.prototype.keydown = function(e) {
                    if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
                        var n = t(this);
                        if (e.preventDefault(), e.stopPropagation(), !n.is(".disabled, :disabled")) {
                            var r = o(n),
                                s = r.hasClass("open");
                            if (!s && 27 != e.which || s && 27 == e.which) return 27 == e.which && r.find(i).trigger("focus"), n.trigger("click");
                            var a = r.find(".dropdown-menu li:not(.disabled):visible a");
                            if (a.length) {
                                var l = a.index(e.target);
                                38 == e.which && l > 0 && l--, 40 == e.which && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).trigger("focus")
                            }
                        }
                    }
                };
                var s = t.fn.dropdown;
                t.fn.dropdown = function(e) {
                    return this.each(function() {
                        var i = t(this),
                            o = i.data("bs.dropdown");
                        o || i.data("bs.dropdown", o = new n(this)), "string" == typeof e && o[e].call(i)
                    })
                }, t.fn.dropdown.Constructor = n, t.fn.dropdown.noConflict = function() {
                    return t.fn.dropdown = s, this
                }, t(document).on("click.bs.dropdown.data-api", r).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
                    t.stopPropagation()
                }).on("click.bs.dropdown.data-api", i, n.prototype.toggle).on("keydown.bs.dropdown.data-api", i, n.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", n.prototype.keydown)
            }(t),
            function(t) {
                "use strict";
                var e = function(e, i) {
                    this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
                        this.$element.trigger("loaded.bs.modal")
                    }, this))
                };

                function i(i, n) {
                    return this.each(function() {
                        var o = t(this),
                            r = o.data("bs.modal"),
                            s = t.extend({}, e.DEFAULTS, o.data(), "object" == typeof i && i);
                        r || o.data("bs.modal", r = new e(this, s)), "string" == typeof i ? r[i](n) : s.show && r.show(n)
                    })
                }
                e.VERSION = "3.3.7", e.TRANSITION_DURATION = 300, e.BACKDROP_TRANSITION_DURATION = 150, e.DEFAULTS = {
                    backdrop: !0,
                    keyboard: !0,
                    show: !0
                }, e.prototype.toggle = function(t) {
                    return this.isShown ? this.hide() : this.show(t)
                }, e.prototype.show = function(i) {
                    var n = this,
                        o = t.Event("show.bs.modal", {
                            relatedTarget: i
                        });
                    this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                        n.$element.one("mouseup.dismiss.bs.modal", function(e) {
                            t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
                        })
                    }), this.backdrop(function() {
                        var o = t.support.transition && n.$element.hasClass("fade");
                        n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), o && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
                        var r = t.Event("shown.bs.modal", {
                            relatedTarget: i
                        });
                        o ? n.$dialog.one("bsTransitionEnd", function() {
                            n.$element.trigger("focus").trigger(r)
                        }).emulateTransitionEnd(e.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(r)
                    }))
                }, e.prototype.hide = function(i) {
                    i && i.preventDefault(), i = t.Event("hide.bs.modal"), this.$element.trigger(i), this.isShown && !i.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(e.TRANSITION_DURATION) : this.hideModal())
                }, e.prototype.enforceFocus = function() {
                    t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
                        document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
                    }, this))
                }, e.prototype.escape = function() {
                    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
                        27 == t.which && this.hide()
                    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
                }, e.prototype.resize = function() {
                    this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
                }, e.prototype.hideModal = function() {
                    var t = this;
                    this.$element.hide(), this.backdrop(function() {
                        t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
                    })
                }, e.prototype.removeBackdrop = function() {
                    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
                }, e.prototype.backdrop = function(i) {
                    var n = this,
                        o = this.$element.hasClass("fade") ? "fade" : "";
                    if (this.isShown && this.options.backdrop) {
                        var r = t.support.transition && o;
                        if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                                this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                            }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !i) return;
                        r ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : i()
                    } else if (!this.isShown && this.$backdrop) {
                        this.$backdrop.removeClass("in");
                        var s = function() {
                            n.removeBackdrop(), i && i()
                        };
                        t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : s()
                    } else i && i()
                }, e.prototype.handleUpdate = function() {
                    this.adjustDialog()
                }, e.prototype.adjustDialog = function() {
                    var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                    this.$element.css({
                        paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                        paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
                    })
                }, e.prototype.resetAdjustments = function() {
                    this.$element.css({
                        paddingLeft: "",
                        paddingRight: ""
                    })
                }, e.prototype.checkScrollbar = function() {
                    var t = window.innerWidth;
                    if (!t) {
                        var e = document.documentElement.getBoundingClientRect();
                        t = e.right - Math.abs(e.left)
                    }
                    this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
                }, e.prototype.setScrollbar = function() {
                    var t = parseInt(this.$body.css("padding-right") || 0, 10);
                    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
                }, e.prototype.resetScrollbar = function() {
                    this.$body.css("padding-right", this.originalBodyPad)
                }, e.prototype.measureScrollbar = function() {
                    var t = document.createElement("div");
                    t.className = "modal-scrollbar-measure", this.$body.append(t);
                    var e = t.offsetWidth - t.clientWidth;
                    return this.$body[0].removeChild(t), e
                };
                var n = t.fn.modal;
                t.fn.modal = i, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function() {
                    return t.fn.modal = n, this
                }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
                    var n = t(this),
                        o = n.attr("href"),
                        r = t(n.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
                        s = r.data("bs.modal") ? "toggle" : t.extend({
                            remote: !/#/.test(o) && o
                        }, r.data(), n.data());
                    n.is("a") && e.preventDefault(), r.one("show.bs.modal", function(t) {
                        t.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                            n.is(":visible") && n.trigger("focus")
                        })
                    }), i.call(r, s, this)
                })
            }(t),
            function(t) {
                "use strict";
                var e = function(t, e) {
                    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
                };
                e.VERSION = "3.3.7", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
                    animation: !0,
                    placement: "top",
                    selector: !1,
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    container: !1,
                    viewport: {
                        selector: "body",
                        padding: 0
                    }
                }, e.prototype.init = function(e, i, n) {
                    if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                            click: !1,
                            hover: !1,
                            focus: !1
                        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
                    for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
                        var s = o[r];
                        if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                        else if ("manual" != s) {
                            var a = "hover" == s ? "mouseenter" : "focusin",
                                l = "hover" == s ? "mouseleave" : "focusout";
                            this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                        }
                    }
                    this.options.selector ? this._options = t.extend({}, this.options, {
                        trigger: "manual",
                        selector: ""
                    }) : this.fixTitle()
                }, e.prototype.getDefaults = function() {
                    return e.DEFAULTS
                }, e.prototype.getOptions = function(e) {
                    return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
                        show: e.delay,
                        hide: e.delay
                    }), e
                }, e.prototype.getDelegateOptions = function() {
                    var e = {},
                        i = this.getDefaults();
                    return this._options && t.each(this._options, function(t, n) {
                        i[t] != n && (e[t] = n)
                    }), e
                }, e.prototype.enter = function(e) {
                    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                    if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState) i.hoverState = "in";
                    else {
                        if (clearTimeout(i.timeout), i.hoverState = "in", !i.options.delay || !i.options.delay.show) return i.show();
                        i.timeout = setTimeout(function() {
                            "in" == i.hoverState && i.show()
                        }, i.options.delay.show)
                    }
                }, e.prototype.isInStateTrue = function() {
                    for (var t in this.inState)
                        if (this.inState[t]) return !0;
                    return !1
                }, e.prototype.leave = function(e) {
                    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                    if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) {
                        if (clearTimeout(i.timeout), i.hoverState = "out", !i.options.delay || !i.options.delay.hide) return i.hide();
                        i.timeout = setTimeout(function() {
                            "out" == i.hoverState && i.hide()
                        }, i.options.delay.hide)
                    }
                }, e.prototype.show = function() {
                    var i = t.Event("show.bs." + this.type);
                    if (this.hasContent() && this.enabled) {
                        this.$element.trigger(i);
                        var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                        if (i.isDefaultPrevented() || !n) return;
                        var o = this,
                            r = this.tip(),
                            s = this.getUID(this.type);
                        this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
                        var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                            l = /\s?auto?\s?/i,
                            c = l.test(a);
                        c && (a = a.replace(l, "") || "top"), r.detach().css({
                            top: 0,
                            left: 0,
                            display: "block"
                        }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                        var u = this.getPosition(),
                            h = r[0].offsetWidth,
                            p = r[0].offsetHeight;
                        if (c) {
                            var d = a,
                                f = this.getPosition(this.$viewport);
                            a = "bottom" == a && u.bottom + p > f.bottom ? "top" : "top" == a && u.top - p < f.top ? "bottom" : "right" == a && u.right + h > f.width ? "left" : "left" == a && u.left - h < f.left ? "right" : a, r.removeClass(d).addClass(a)
                        }
                        var m = this.getCalculatedOffset(a, u, h, p);
                        this.applyPlacement(m, a);
                        var g = function() {
                            var t = o.hoverState;
                            o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
                        };
                        t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", g).emulateTransitionEnd(e.TRANSITION_DURATION) : g()
                    }
                }, e.prototype.applyPlacement = function(e, i) {
                    var n = this.tip(),
                        o = n[0].offsetWidth,
                        r = n[0].offsetHeight,
                        s = parseInt(n.css("margin-top"), 10),
                        a = parseInt(n.css("margin-left"), 10);
                    isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(n[0], t.extend({
                        using: function(t) {
                            n.css({
                                top: Math.round(t.top),
                                left: Math.round(t.left)
                            })
                        }
                    }, e), 0), n.addClass("in");
                    var l = n[0].offsetWidth,
                        c = n[0].offsetHeight;
                    "top" == i && c != r && (e.top = e.top + r - c);
                    var u = this.getViewportAdjustedDelta(i, e, l, c);
                    u.left ? e.left += u.left : e.top += u.top;
                    var h = /top|bottom/.test(i),
                        p = h ? 2 * u.left - o + l : 2 * u.top - r + c,
                        d = h ? "offsetWidth" : "offsetHeight";
                    n.offset(e), this.replaceArrow(p, n[0][d], h)
                }, e.prototype.replaceArrow = function(t, e, i) {
                    this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
                }, e.prototype.setContent = function() {
                    var t = this.tip(),
                        e = this.getTitle();
                    t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
                }, e.prototype.hide = function(i) {
                    var n = this,
                        o = t(this.$tip),
                        r = t.Event("hide.bs." + this.type);

                    function s() {
                        "in" != n.hoverState && o.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), i && i()
                    }
                    if (this.$element.trigger(r), !r.isDefaultPrevented()) return o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", s).emulateTransitionEnd(e.TRANSITION_DURATION) : s(), this.hoverState = null, this
                }, e.prototype.fixTitle = function() {
                    var t = this.$element;
                    (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
                }, e.prototype.hasContent = function() {
                    return this.getTitle()
                }, e.prototype.getPosition = function(e) {
                    var i = (e = e || this.$element)[0],
                        n = "BODY" == i.tagName,
                        o = i.getBoundingClientRect();
                    null == o.width && (o = t.extend({}, o, {
                        width: o.right - o.left,
                        height: o.bottom - o.top
                    }));
                    var r = window.SVGElement && i instanceof window.SVGElement,
                        s = n ? {
                            top: 0,
                            left: 0
                        } : r ? null : e.offset(),
                        a = {
                            scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
                        },
                        l = n ? {
                            width: t(window).width(),
                            height: t(window).height()
                        } : null;
                    return t.extend({}, o, a, l, s)
                }, e.prototype.getCalculatedOffset = function(t, e, i, n) {
                    return "bottom" == t ? {
                        top: e.top + e.height,
                        left: e.left + e.width / 2 - i / 2
                    } : "top" == t ? {
                        top: e.top - n,
                        left: e.left + e.width / 2 - i / 2
                    } : "left" == t ? {
                        top: e.top + e.height / 2 - n / 2,
                        left: e.left - i
                    } : {
                        top: e.top + e.height / 2 - n / 2,
                        left: e.left + e.width
                    }
                }, e.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
                    var o = {
                        top: 0,
                        left: 0
                    };
                    if (!this.$viewport) return o;
                    var r = this.options.viewport && this.options.viewport.padding || 0,
                        s = this.getPosition(this.$viewport);
                    if (/right|left/.test(t)) {
                        var a = e.top - r - s.scroll,
                            l = e.top + r - s.scroll + n;
                        a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
                    } else {
                        var c = e.left - r,
                            u = e.left + r + i;
                        c < s.left ? o.left = s.left - c : u > s.right && (o.left = s.left + s.width - u)
                    }
                    return o
                }, e.prototype.getTitle = function() {
                    var t = this.$element,
                        e = this.options;
                    return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
                }, e.prototype.getUID = function(t) {
                    do {
                        t += ~~(1e6 * Math.random())
                    } while (document.getElementById(t));
                    return t
                }, e.prototype.tip = function() {
                    if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
                    return this.$tip
                }, e.prototype.arrow = function() {
                    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
                }, e.prototype.enable = function() {
                    this.enabled = !0
                }, e.prototype.disable = function() {
                    this.enabled = !1
                }, e.prototype.toggleEnabled = function() {
                    this.enabled = !this.enabled
                }, e.prototype.toggle = function(e) {
                    var i = this;
                    e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
                }, e.prototype.destroy = function() {
                    var t = this;
                    clearTimeout(this.timeout), this.hide(function() {
                        t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
                    })
                };
                var i = t.fn.tooltip;
                t.fn.tooltip = function(i) {
                    return this.each(function() {
                        var n = t(this),
                            o = n.data("bs.tooltip"),
                            r = "object" == typeof i && i;
                        !o && /destroy|hide/.test(i) || (o || n.data("bs.tooltip", o = new e(this, r)), "string" == typeof i && o[i]())
                    })
                }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() {
                    return t.fn.tooltip = i, this
                }
            }(t),
            function(t) {
                "use strict";
                var e = function(t, e) {
                    this.init("popover", t, e)
                };
                if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
                e.VERSION = "3.3.7", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
                }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function() {
                    return e.DEFAULTS
                }, e.prototype.setContent = function() {
                    var t = this.tip(),
                        e = this.getTitle(),
                        i = this.getContent();
                    t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
                }, e.prototype.hasContent = function() {
                    return this.getTitle() || this.getContent()
                }, e.prototype.getContent = function() {
                    var t = this.$element,
                        e = this.options;
                    return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
                }, e.prototype.arrow = function() {
                    return this.$arrow = this.$arrow || this.tip().find(".arrow")
                };
                var i = t.fn.popover;
                t.fn.popover = function(i) {
                    return this.each(function() {
                        var n = t(this),
                            o = n.data("bs.popover"),
                            r = "object" == typeof i && i;
                        !o && /destroy|hide/.test(i) || (o || n.data("bs.popover", o = new e(this, r)), "string" == typeof i && o[i]())
                    })
                }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
                    return t.fn.popover = i, this
                }
            }(t),
            function(t) {
                "use strict";

                function e(i, n) {
                    this.$body = t(document.body), this.$scrollElement = t(i).is(document.body) ? t(window) : t(i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
                }

                function i(i) {
                    return this.each(function() {
                        var n = t(this),
                            o = n.data("bs.scrollspy"),
                            r = "object" == typeof i && i;
                        o || n.data("bs.scrollspy", o = new e(this, r)), "string" == typeof i && o[i]()
                    })
                }
                e.VERSION = "3.3.7", e.DEFAULTS = {
                    offset: 10
                }, e.prototype.getScrollHeight = function() {
                    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
                }, e.prototype.refresh = function() {
                    var e = this,
                        i = "offset",
                        n = 0;
                    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
                        var e = t(this),
                            o = e.data("target") || e.attr("href"),
                            r = /^#./.test(o) && t(o);
                        return r && r.length && r.is(":visible") && [
                            [r[i]().top + n, o]
                        ] || null
                    }).sort(function(t, e) {
                        return t[0] - e[0]
                    }).each(function() {
                        e.offsets.push(this[0]), e.targets.push(this[1])
                    })
                }, e.prototype.process = function() {
                    var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                        i = this.getScrollHeight(),
                        n = this.options.offset + i - this.$scrollElement.height(),
                        o = this.offsets,
                        r = this.targets,
                        s = this.activeTarget;
                    if (this.scrollHeight != i && this.refresh(), e >= n) return s != (t = r[r.length - 1]) && this.activate(t);
                    if (s && e < o[0]) return this.activeTarget = null, this.clear();
                    for (t = o.length; t--;) s != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
                }, e.prototype.activate = function(e) {
                    this.activeTarget = e, this.clear();
                    var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                        n = t(i).parents("li").addClass("active");
                    n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
                }, e.prototype.clear = function() {
                    t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
                };
                var n = t.fn.scrollspy;
                t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
                    return t.fn.scrollspy = n, this
                }, t(window).on("load.bs.scrollspy.data-api", function() {
                    t('[data-spy="scroll"]').each(function() {
                        var e = t(this);
                        i.call(e, e.data())
                    })
                })
            }(t),
            function(t) {
                "use strict";
                var e = function(e) {
                    this.element = t(e)
                };

                function i(i) {
                    return this.each(function() {
                        var n = t(this),
                            o = n.data("bs.tab");
                        o || n.data("bs.tab", o = new e(this)), "string" == typeof i && o[i]()
                    })
                }
                e.VERSION = "3.3.7", e.TRANSITION_DURATION = 150, e.prototype.show = function() {
                    var e = this.element,
                        i = e.closest("ul:not(.dropdown-menu)"),
                        n = e.data("target");
                    if (n || (n = (n = e.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                        var o = i.find(".active:last a"),
                            r = t.Event("hide.bs.tab", {
                                relatedTarget: e[0]
                            }),
                            s = t.Event("show.bs.tab", {
                                relatedTarget: o[0]
                            });
                        if (o.trigger(r), e.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                            var a = t(n);
                            this.activate(e.closest("li"), i), this.activate(a, a.parent(), function() {
                                o.trigger({
                                    type: "hidden.bs.tab",
                                    relatedTarget: e[0]
                                }), e.trigger({
                                    type: "shown.bs.tab",
                                    relatedTarget: o[0]
                                })
                            })
                        }
                    }
                }, e.prototype.activate = function(i, n, o) {
                    var r = n.find("> .active"),
                        s = o && t.support.transition && (r.length && r.hasClass("fade") || !!n.find("> .fade").length);

                    function a() {
                        r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade"), i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
                    }
                    r.length && s ? r.one("bsTransitionEnd", a).emulateTransitionEnd(e.TRANSITION_DURATION) : a(), r.removeClass("in")
                };
                var n = t.fn.tab;
                t.fn.tab = i, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function() {
                    return t.fn.tab = n, this
                };
                var o = function(e) {
                    e.preventDefault(), i.call(t(this), "show")
                };
                t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
            }(t),
            function(t) {
                "use strict";
                var e = function(i, n) {
                    this.options = t.extend({}, e.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(i), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
                };

                function i(i) {
                    return this.each(function() {
                        var n = t(this),
                            o = n.data("bs.affix"),
                            r = "object" == typeof i && i;
                        o || n.data("bs.affix", o = new e(this, r)), "string" == typeof i && o[i]()
                    })
                }
                e.VERSION = "3.3.7", e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {
                    offset: 0,
                    target: window
                }, e.prototype.getState = function(t, e, i, n) {
                    var o = this.$target.scrollTop(),
                        r = this.$element.offset(),
                        s = this.$target.height();
                    if (null != i && "top" == this.affixed) return o < i && "top";
                    if ("bottom" == this.affixed) return null != i ? !(o + this.unpin <= r.top) && "bottom" : !(o + s <= t - n) && "bottom";
                    var a = null == this.affixed,
                        l = a ? o : r.top;
                    return null != i && o <= i ? "top" : null != n && l + (a ? s : e) >= t - n && "bottom"
                }, e.prototype.getPinnedOffset = function() {
                    if (this.pinnedOffset) return this.pinnedOffset;
                    this.$element.removeClass(e.RESET).addClass("affix");
                    var t = this.$target.scrollTop(),
                        i = this.$element.offset();
                    return this.pinnedOffset = i.top - t
                }, e.prototype.checkPositionWithEventLoop = function() {
                    setTimeout(t.proxy(this.checkPosition, this), 1)
                }, e.prototype.checkPosition = function() {
                    if (this.$element.is(":visible")) {
                        var i = this.$element.height(),
                            n = this.options.offset,
                            o = n.top,
                            r = n.bottom,
                            s = Math.max(t(document).height(), t(document.body).height());
                        "object" != typeof n && (r = o = n), "function" == typeof o && (o = n.top(this.$element)), "function" == typeof r && (r = n.bottom(this.$element));
                        var a = this.getState(s, i, o, r);
                        if (this.affixed != a) {
                            null != this.unpin && this.$element.css("top", "");
                            var l = "affix" + (a ? "-" + a : ""),
                                c = t.Event(l + ".bs.affix");
                            if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                            this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
                        }
                        "bottom" == a && this.$element.offset({
                            top: s - i - r
                        })
                    }
                };
                var n = t.fn.affix;
                t.fn.affix = i, t.fn.affix.Constructor = e, t.fn.affix.noConflict = function() {
                    return t.fn.affix = n, this
                }, t(window).on("load", function() {
                    t('[data-spy="affix"]').each(function() {
                        var e = t(this),
                            n = e.data();
                        n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), i.call(e, n)
                    })
                })
            }(t)
        }).call(this, i(1))
    }, function(t, e, i) {
        (function(t) {
            ! function(t) {
                function e(e) {
                    var i = t(e);
                    i.prop("disabled") || i.closest(".form-group").addClass("is-focused")
                }

                function i(i) {
                    i.closest("label").hover(function() {
                        var i = t(this).find("input");
                        i.prop("disabled") || e(i)
                    }, function() {
                        n(t(this).find("input"))
                    })
                }

                function n(e) {
                    t(e).closest(".form-group").removeClass("is-focused")
                }
                t.expr[":"].notmdproc = function(e) {
                    return !t(e).data("mdproc")
                }, t.material = {
                    options: {
                        validate: !0,
                        input: !0,
                        ripples: !0,
                        checkbox: !0,
                        togglebutton: !0,
                        radio: !0,
                        arrive: !0,
                        autofill: !1,
                        withRipples: [".btn:not(.btn-link)", ".card-image", ".navbar a:not(.withoutripple)", ".dropdown-menu a", ".nav-tabs a:not(.withoutripple)", ".withripple", ".pagination li:not(.active):not(.disabled) a:not(.withoutripple)"].join(","),
                        inputElements: "input.form-control, textarea.form-control, select.form-control",
                        checkboxElements: ".checkbox > label > input[type=checkbox]",
                        togglebuttonElements: ".togglebutton > label > input[type=checkbox]",
                        radioElements: ".radio > label > input[type=radio]"
                    },
                    checkbox: function(e) {
                        i(t(e || this.options.checkboxElements).filter(":notmdproc").data("mdproc", !0).after("<span class='checkbox-material'><span class='check'></span></span>"))
                    },
                    togglebutton: function(e) {
                        i(t(e || this.options.togglebuttonElements).filter(":notmdproc").data("mdproc", !0).after("<span class='toggle'></span>"))
                    },
                    radio: function(e) {
                        i(t(e || this.options.radioElements).filter(":notmdproc").data("mdproc", !0).after("<span class='circle'></span><span class='check'></span>"))
                    },
                    input: function(e) {
                        t(e || this.options.inputElements).filter(":notmdproc").data("mdproc", !0).each(function() {
                            var e = t(this),
                                i = e.closest(".form-group");
                            0 === i.length && (e.wrap("<div class='form-group'></div>"), i = e.closest(".form-group")), e.attr("data-hint") && (e.after("<p class='help-block'>" + e.attr("data-hint") + "</p>"), e.removeAttr("data-hint"));
                            if (t.each({
                                    "input-lg": "form-group-lg",
                                    "input-sm": "form-group-sm"
                                }, function(t, n) {
                                    e.hasClass(t) && (e.removeClass(t), i.addClass(n))
                                }), e.hasClass("floating-label")) {
                                var n = e.attr("placeholder");
                                e.attr("placeholder", null).removeClass("floating-label");
                                var o = e.attr("id"),
                                    r = "";
                                o && (r = "for='" + o + "'"), i.addClass("label-floating"), e.after("<label " + r + "class='control-label'>" + n + "</label>")
                            }
                            null !== e.val() && "undefined" != e.val() && "" !== e.val() || i.addClass("is-empty"), i.append("<span class='material-input'></span>"), i.find("input[type=file]").length > 0 && i.addClass("is-fileinput")
                        })
                    },
                    attachInputEventHandlers: function() {
                        var i = this.options.validate;
                        t(document).on("change", ".checkbox input[type=checkbox]", function() {
                            t(this).blur()
                        }).on("keydown paste", ".form-control", function(e) {
                            (function(t) {
                                return void 0 === t.which || "number" == typeof t.which && t.which > 0 && !t.ctrlKey && !t.metaKey && !t.altKey && 8 != t.which && 9 != t.which && 13 != t.which && 16 != t.which && 17 != t.which && 20 != t.which && 27 != t.which
                            })(e) && t(this).closest(".form-group").removeClass("is-empty")
                        }).on("keyup change", ".form-control", function() {
                            var e = t(this),
                                n = e.closest(".form-group"),
                                o = void 0 === e[0].checkValidity || e[0].checkValidity();
                            "" === e.val() ? n.addClass("is-empty") : n.removeClass("is-empty"), i && (o ? n.removeClass("has-error") : n.addClass("has-error"))
                        }).on("focus", ".form-control, .form-group.is-fileinput", function() {
                            e(this)
                        }).on("blur", ".form-control, .form-group.is-fileinput", function() {
                            n(this)
                        }).on("change", ".form-group input", function() {
                            var e = t(this);
                            if ("file" != e.attr("type")) {
                                var i = e.closest(".form-group");
                                e.val() ? i.removeClass("is-empty") : i.addClass("is-empty")
                            }
                        }).on("change", ".form-group.is-fileinput input[type='file']", function() {
                            var e = t(this).closest(".form-group"),
                                i = "";
                            t.each(this.files, function(t, e) {
                                i += e.name + ", "
                            }), (i = i.substring(0, i.length - 2)) ? e.removeClass("is-empty") : e.addClass("is-empty"), e.find("input.form-control[readonly]").val(i)
                        })
                    },
                    ripples: function(e) {
                        t(e || this.options.withRipples).ripples()
                    },
                    autofill: function() {
                        var e = setInterval(function() {
                            t("input[type!=checkbox]").each(function() {
                                var e = t(this);
                                e.val() && e.val() !== e.attr("value") && e.trigger("change")
                            })
                        }, 100);
                        setTimeout(function() {
                            clearInterval(e)
                        }, 1e4)
                    },
                    attachAutofillEventHandlers: function() {
                        var e;
                        t(document).on("focus", "input", function() {
                            var i = t(this).parents("form").find("input").not("[type=file]");
                            e = setInterval(function() {
                                i.each(function() {
                                    var e = t(this);
                                    e.val() !== e.attr("value") && e.trigger("change")
                                })
                            }, 100)
                        }).on("blur", ".form-group input", function() {
                            clearInterval(e)
                        })
                    },
                    init: function(e) {
                        this.options = t.extend({}, this.options, e);
                        var i = t(document);
                        t.fn.ripples && this.options.ripples && this.ripples(), this.options.input && (this.input(), this.attachInputEventHandlers()), this.options.checkbox && this.checkbox(), this.options.togglebutton && this.togglebutton(), this.options.radio && this.radio(), this.options.autofill && (this.autofill(), this.attachAutofillEventHandlers()), document.arrive && this.options.arrive && (t.fn.ripples && this.options.ripples && i.arrive(this.options.withRipples, function() {
                            t.material.ripples(t(this))
                        }), this.options.input && i.arrive(this.options.inputElements, function() {
                            t.material.input(t(this))
                        }), this.options.checkbox && i.arrive(this.options.checkboxElements, function() {
                            t.material.checkbox(t(this))
                        }), this.options.radio && i.arrive(this.options.radioElements, function() {
                            t.material.radio(t(this))
                        }), this.options.togglebutton && i.arrive(this.options.togglebuttonElements, function() {
                            t.material.togglebutton(t(this))
                        }))
                    }
                }
            }(t)
        }).call(this, i(1))
    }, function(t, e, i) {
        "use strict";
        (function(t) {
            i(24), i(45), i(21), i(35), i(14), i(5);
            ! function(e, n, o) {
                var r = {
                    version: "1.0.3"
                };
                "object" == typeof t && "object" == typeof t.exports ? t.exports = r : "function" == typeof define && i(50) && define(r), void 0 !== e && function() {
                        var t = e.L;
                        r.noConflict = function() {
                            return e.L = t, this
                        }, e.L = r
                    }(), r.Util = {
                        extend: function(t) {
                            var e, i, n, o;
                            for (i = 1, n = arguments.length; i < n; i++)
                                for (e in o = arguments[i]) t[e] = o[e];
                            return t
                        },
                        create: Object.create || function() {
                            function t() {}
                            return function(e) {
                                return t.prototype = e, new t
                            }
                        }(),
                        bind: function(t, e) {
                            var i = Array.prototype.slice;
                            if (t.bind) return t.bind.apply(t, i.call(arguments, 1));
                            var n = i.call(arguments, 2);
                            return function() {
                                return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments)
                            }
                        },
                        stamp: function(t) {
                            return t._leaflet_id = t._leaflet_id || ++r.Util.lastId, t._leaflet_id
                        },
                        lastId: 0,
                        throttle: function(t, e, i) {
                            var n, o, r, s;
                            return s = function() {
                                n = !1, o && (r.apply(i, o), o = !1)
                            }, r = function() {
                                n ? o = arguments : (t.apply(i, arguments), setTimeout(s, e), n = !0)
                            }
                        },
                        wrapNum: function(t, e, i) {
                            var n = e[1],
                                o = e[0],
                                r = n - o;
                            return t === n && i ? t : ((t - o) % r + r) % r + o
                        },
                        falseFn: function() {
                            return !1
                        },
                        formatNum: function(t, e) {
                            var i = Math.pow(10, e || 5);
                            return Math.round(t * i) / i
                        },
                        trim: function(t) {
                            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                        },
                        splitWords: function(t) {
                            return r.Util.trim(t).split(/\s+/)
                        },
                        setOptions: function(t, e) {
                            for (var i in t.hasOwnProperty("options") || (t.options = t.options ? r.Util.create(t.options) : {}), e) t.options[i] = e[i];
                            return t.options
                        },
                        getParamString: function(t, e, i) {
                            var n = [];
                            for (var o in t) n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
                            return (e && -1 !== e.indexOf("?") ? "&" : "?") + n.join("&")
                        },
                        template: function(t, e) {
                            return t.replace(r.Util.templateRe, function(t, i) {
                                var n = e[i];
                                if (void 0 === n) throw new Error("No value provided for variable " + t);
                                return "function" == typeof n && (n = n(e)), n
                            })
                        },
                        templateRe: /\{ *([\w_\-]+) *\}/g,
                        isArray: Array.isArray || function(t) {
                            return "[object Array]" === Object.prototype.toString.call(t)
                        },
                        indexOf: function(t, e) {
                            for (var i = 0; i < t.length; i++)
                                if (t[i] === e) return i;
                            return -1
                        },
                        emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                    },
                    function() {
                        function t(t) {
                            return e["webkit" + t] || e["moz" + t] || e["ms" + t]
                        }
                        var i = 0;

                        function n(t) {
                            var n = +new Date,
                                o = Math.max(0, 16 - (n - i));
                            return i = n + o, e.setTimeout(t, o)
                        }
                        var o = e.requestAnimationFrame || t("RequestAnimationFrame") || n,
                            s = e.cancelAnimationFrame || t("CancelAnimationFrame") || t("CancelRequestAnimationFrame") || function(t) {
                                e.clearTimeout(t)
                            };
                        r.Util.requestAnimFrame = function(t, i, s) {
                            if (!s || o !== n) return o.call(e, r.bind(t, i));
                            t.call(i)
                        }, r.Util.cancelAnimFrame = function(t) {
                            t && s.call(e, t)
                        }
                    }(), r.extend = r.Util.extend, r.bind = r.Util.bind, r.stamp = r.Util.stamp, r.setOptions = r.Util.setOptions, r.Class = function() {}, r.Class.extend = function(t) {
                        var e = function() {
                                this.initialize && this.initialize.apply(this, arguments), this.callInitHooks()
                            },
                            i = e.__super__ = this.prototype,
                            n = r.Util.create(i);
                        for (var o in n.constructor = e, e.prototype = n, this) this.hasOwnProperty(o) && "prototype" !== o && (e[o] = this[o]);
                        return t.statics && (r.extend(e, t.statics), delete t.statics), t.includes && (r.Util.extend.apply(null, [n].concat(t.includes)), delete t.includes), n.options && (t.options = r.Util.extend(r.Util.create(n.options), t.options)), r.extend(n, t), n._initHooks = [], n.callInitHooks = function() {
                            if (!this._initHooksCalled) {
                                i.callInitHooks && i.callInitHooks.call(this), this._initHooksCalled = !0;
                                for (var t = 0, e = n._initHooks.length; t < e; t++) n._initHooks[t].call(this)
                            }
                        }, e
                    }, r.Class.include = function(t) {
                        return r.extend(this.prototype, t), this
                    }, r.Class.mergeOptions = function(t) {
                        return r.extend(this.prototype.options, t), this
                    }, r.Class.addInitHook = function(t) {
                        var e = Array.prototype.slice.call(arguments, 1),
                            i = "function" == typeof t ? t : function() {
                                this[t].apply(this, e)
                            };
                        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), this
                    }, r.Evented = r.Class.extend({
                        on: function(t, e, i) {
                            if ("object" == typeof t)
                                for (var n in t) this._on(n, t[n], e);
                            else
                                for (var o = 0, s = (t = r.Util.splitWords(t)).length; o < s; o++) this._on(t[o], e, i);
                            return this
                        },
                        off: function(t, e, i) {
                            if (t)
                                if ("object" == typeof t)
                                    for (var n in t) this._off(n, t[n], e);
                                else
                                    for (var o = 0, s = (t = r.Util.splitWords(t)).length; o < s; o++) this._off(t[o], e, i);
                            else delete this._events;
                            return this
                        },
                        _on: function(t, e, i) {
                            this._events = this._events || {};
                            var n = this._events[t];
                            n || (n = [], this._events[t] = n), i === this && (i = void 0);
                            for (var o = {
                                    fn: e,
                                    ctx: i
                                }, r = n, s = 0, a = r.length; s < a; s++)
                                if (r[s].fn === e && r[s].ctx === i) return;
                            r.push(o)
                        },
                        _off: function(t, e, i) {
                            var n, o, s;
                            if (this._events && (n = this._events[t]))
                                if (e) {
                                    if (i === this && (i = void 0), n)
                                        for (o = 0, s = n.length; o < s; o++) {
                                            var a = n[o];
                                            if (a.ctx === i && a.fn === e) return a.fn = r.Util.falseFn, this._firingCount && (this._events[t] = n = n.slice()), void n.splice(o, 1)
                                        }
                                } else {
                                    for (o = 0, s = n.length; o < s; o++) n[o].fn = r.Util.falseFn;
                                    delete this._events[t]
                                }
                        },
                        fire: function(t, e, i) {
                            if (!this.listens(t, i)) return this;
                            var n = r.Util.extend({}, e, {
                                type: t,
                                target: this
                            });
                            if (this._events) {
                                var o = this._events[t];
                                if (o) {
                                    this._firingCount = this._firingCount + 1 || 1;
                                    for (var s = 0, a = o.length; s < a; s++) {
                                        var l = o[s];
                                        l.fn.call(l.ctx || this, n)
                                    }
                                    this._firingCount--
                                }
                            }
                            return i && this._propagateEvent(n), this
                        },
                        listens: function(t, e) {
                            var i = this._events && this._events[t];
                            if (i && i.length) return !0;
                            if (e)
                                for (var n in this._eventParents)
                                    if (this._eventParents[n].listens(t, e)) return !0;
                            return !1
                        },
                        once: function(t, e, i) {
                            if ("object" == typeof t) {
                                for (var n in t) this.once(n, t[n], e);
                                return this
                            }
                            var o = r.bind(function() {
                                this.off(t, e, i).off(t, o, i)
                            }, this);
                            return this.on(t, e, i).on(t, o, i)
                        },
                        addEventParent: function(t) {
                            return this._eventParents = this._eventParents || {}, this._eventParents[r.stamp(t)] = t, this
                        },
                        removeEventParent: function(t) {
                            return this._eventParents && delete this._eventParents[r.stamp(t)], this
                        },
                        _propagateEvent: function(t) {
                            for (var e in this._eventParents) this._eventParents[e].fire(t.type, r.extend({
                                layer: t.target
                            }, t), !0)
                        }
                    });
                var s = r.Evented.prototype;
                s.addEventListener = s.on, s.removeEventListener = s.clearAllEventListeners = s.off, s.addOneTimeEventListener = s.once, s.fireEvent = s.fire, s.hasEventListeners = s.listens, r.Mixin = {
                        Events: s
                    },
                    function() {
                        var t = navigator.userAgent.toLowerCase(),
                            i = n.documentElement,
                            o = "ActiveXObject" in e,
                            s = -1 !== t.indexOf("webkit"),
                            a = -1 !== t.indexOf("phantom"),
                            l = -1 !== t.search("android [23]"),
                            c = -1 !== t.indexOf("chrome"),
                            u = -1 !== t.indexOf("gecko") && !s && !e.opera && !o,
                            h = 0 === navigator.platform.indexOf("Win"),
                            p = "undefined" != typeof orientation || -1 !== t.indexOf("mobile"),
                            d = !e.PointerEvent && e.MSPointerEvent,
                            f = e.PointerEvent || d,
                            m = o && "transition" in i.style,
                            g = "WebKitCSSMatrix" in e && "m11" in new e.WebKitCSSMatrix && !l,
                            v = "MozPerspective" in i.style,
                            _ = "OTransition" in i.style,
                            y = !e.L_NO_TOUCH && (f || "ontouchstart" in e || e.DocumentTouch && n instanceof e.DocumentTouch);
                        r.Browser = {
                            ie: o,
                            ielt9: o && !n.addEventListener,
                            edge: "msLaunchUri" in navigator && !("documentMode" in n),
                            webkit: s,
                            gecko: u,
                            android: -1 !== t.indexOf("android"),
                            android23: l,
                            chrome: c,
                            safari: !c && -1 !== t.indexOf("safari"),
                            win: h,
                            ie3d: m,
                            webkit3d: g,
                            gecko3d: v,
                            opera12: _,
                            any3d: !e.L_DISABLE_3D && (m || g || v) && !_ && !a,
                            mobile: p,
                            mobileWebkit: p && s,
                            mobileWebkit3d: p && g,
                            mobileOpera: p && e.opera,
                            mobileGecko: p && u,
                            touch: !!y,
                            msPointer: !!d,
                            pointer: !!f,
                            retina: (e.devicePixelRatio || e.screen.deviceXDPI / e.screen.logicalXDPI) > 1
                        }
                    }(), r.Point = function(t, e, i) {
                        this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e
                    }, r.Point.prototype = {
                        clone: function() {
                            return new r.Point(this.x, this.y)
                        },
                        add: function(t) {
                            return this.clone()._add(r.point(t))
                        },
                        _add: function(t) {
                            return this.x += t.x, this.y += t.y, this
                        },
                        subtract: function(t) {
                            return this.clone()._subtract(r.point(t))
                        },
                        _subtract: function(t) {
                            return this.x -= t.x, this.y -= t.y, this
                        },
                        divideBy: function(t) {
                            return this.clone()._divideBy(t)
                        },
                        _divideBy: function(t) {
                            return this.x /= t, this.y /= t, this
                        },
                        multiplyBy: function(t) {
                            return this.clone()._multiplyBy(t)
                        },
                        _multiplyBy: function(t) {
                            return this.x *= t, this.y *= t, this
                        },
                        scaleBy: function(t) {
                            return new r.Point(this.x * t.x, this.y * t.y)
                        },
                        unscaleBy: function(t) {
                            return new r.Point(this.x / t.x, this.y / t.y)
                        },
                        round: function() {
                            return this.clone()._round()
                        },
                        _round: function() {
                            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
                        },
                        floor: function() {
                            return this.clone()._floor()
                        },
                        _floor: function() {
                            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
                        },
                        ceil: function() {
                            return this.clone()._ceil()
                        },
                        _ceil: function() {
                            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
                        },
                        distanceTo: function(t) {
                            var e = (t = r.point(t)).x - this.x,
                                i = t.y - this.y;
                            return Math.sqrt(e * e + i * i)
                        },
                        equals: function(t) {
                            return (t = r.point(t)).x === this.x && t.y === this.y
                        },
                        contains: function(t) {
                            return t = r.point(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
                        },
                        toString: function() {
                            return "Point(" + r.Util.formatNum(this.x) + ", " + r.Util.formatNum(this.y) + ")"
                        }
                    }, r.point = function(t, e, i) {
                        return t instanceof r.Point ? t : r.Util.isArray(t) ? new r.Point(t[0], t[1]) : void 0 === t || null === t ? t : "object" == typeof t && "x" in t && "y" in t ? new r.Point(t.x, t.y) : new r.Point(t, e, i)
                    }, r.Bounds = function(t, e) {
                        if (t)
                            for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n])
                    }, r.Bounds.prototype = {
                        extend: function(t) {
                            return t = r.point(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
                        },
                        getCenter: function(t) {
                            return new r.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
                        },
                        getBottomLeft: function() {
                            return new r.Point(this.min.x, this.max.y)
                        },
                        getTopRight: function() {
                            return new r.Point(this.max.x, this.min.y)
                        },
                        getSize: function() {
                            return this.max.subtract(this.min)
                        },
                        contains: function(t) {
                            var e, i;
                            return (t = "number" == typeof t[0] || t instanceof r.Point ? r.point(t) : r.bounds(t)) instanceof r.Bounds ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
                        },
                        intersects: function(t) {
                            t = r.bounds(t);
                            var e = this.min,
                                i = this.max,
                                n = t.min,
                                o = t.max,
                                s = o.x >= e.x && n.x <= i.x,
                                a = o.y >= e.y && n.y <= i.y;
                            return s && a
                        },
                        overlaps: function(t) {
                            t = r.bounds(t);
                            var e = this.min,
                                i = this.max,
                                n = t.min,
                                o = t.max,
                                s = o.x > e.x && n.x < i.x,
                                a = o.y > e.y && n.y < i.y;
                            return s && a
                        },
                        isValid: function() {
                            return !(!this.min || !this.max)
                        }
                    }, r.bounds = function(t, e) {
                        return !t || t instanceof r.Bounds ? t : new r.Bounds(t, e)
                    }, r.Transformation = function(t, e, i, n) {
                        this._a = t, this._b = e, this._c = i, this._d = n
                    }, r.Transformation.prototype = {
                        transform: function(t, e) {
                            return this._transform(t.clone(), e)
                        },
                        _transform: function(t, e) {
                            return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
                        },
                        untransform: function(t, e) {
                            return e = e || 1, new r.Point((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
                        }
                    }, r.DomUtil = {
                        get: function(t) {
                            return "string" == typeof t ? n.getElementById(t) : t
                        },
                        getStyle: function(t, e) {
                            var i = t.style[e] || t.currentStyle && t.currentStyle[e];
                            if ((!i || "auto" === i) && n.defaultView) {
                                var o = n.defaultView.getComputedStyle(t, null);
                                i = o ? o[e] : null
                            }
                            return "auto" === i ? null : i
                        },
                        create: function(t, e, i) {
                            var o = n.createElement(t);
                            return o.className = e || "", i && i.appendChild(o), o
                        },
                        remove: function(t) {
                            var e = t.parentNode;
                            e && e.removeChild(t)
                        },
                        empty: function(t) {
                            for (; t.firstChild;) t.removeChild(t.firstChild)
                        },
                        toFront: function(t) {
                            t.parentNode.appendChild(t)
                        },
                        toBack: function(t) {
                            var e = t.parentNode;
                            e.insertBefore(t, e.firstChild)
                        },
                        hasClass: function(t, e) {
                            if (void 0 !== t.classList) return t.classList.contains(e);
                            var i = r.DomUtil.getClass(t);
                            return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i)
                        },
                        addClass: function(t, e) {
                            if (void 0 !== t.classList)
                                for (var i = r.Util.splitWords(e), n = 0, o = i.length; n < o; n++) t.classList.add(i[n]);
                            else if (!r.DomUtil.hasClass(t, e)) {
                                var s = r.DomUtil.getClass(t);
                                r.DomUtil.setClass(t, (s ? s + " " : "") + e)
                            }
                        },
                        removeClass: function(t, e) {
                            void 0 !== t.classList ? t.classList.remove(e) : r.DomUtil.setClass(t, r.Util.trim((" " + r.DomUtil.getClass(t) + " ").replace(" " + e + " ", " ")))
                        },
                        setClass: function(t, e) {
                            void 0 === t.className.baseVal ? t.className = e : t.className.baseVal = e
                        },
                        getClass: function(t) {
                            return void 0 === t.className.baseVal ? t.className : t.className.baseVal
                        },
                        setOpacity: function(t, e) {
                            "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && r.DomUtil._setOpacityIE(t, e)
                        },
                        _setOpacityIE: function(t, e) {
                            var i = !1,
                                n = "DXImageTransform.Microsoft.Alpha";
                            try {
                                i = t.filters.item(n)
                            } catch (t) {
                                if (1 === e) return
                            }
                            e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")"
                        },
                        testProp: function(t) {
                            for (var e = n.documentElement.style, i = 0; i < t.length; i++)
                                if (t[i] in e) return t[i];
                            return !1
                        },
                        setTransform: function(t, e, i) {
                            var n = e || new r.Point(0, 0);
                            t.style[r.DomUtil.TRANSFORM] = (r.Browser.ie3d ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (i ? " scale(" + i + ")" : "")
                        },
                        setPosition: function(t, e) {
                            t._leaflet_pos = e, r.Browser.any3d ? r.DomUtil.setTransform(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
                        },
                        getPosition: function(t) {
                            return t._leaflet_pos || new r.Point(0, 0)
                        }
                    },
                    function() {
                        r.DomUtil.TRANSFORM = r.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]);
                        var t = r.DomUtil.TRANSITION = r.DomUtil.testProp(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
                        if (r.DomUtil.TRANSITION_END = "webkitTransition" === t || "OTransition" === t ? t + "End" : "transitionend", "onselectstart" in n) r.DomUtil.disableTextSelection = function() {
                            r.DomEvent.on(e, "selectstart", r.DomEvent.preventDefault)
                        }, r.DomUtil.enableTextSelection = function() {
                            r.DomEvent.off(e, "selectstart", r.DomEvent.preventDefault)
                        };
                        else {
                            var i = r.DomUtil.testProp(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
                            r.DomUtil.disableTextSelection = function() {
                                if (i) {
                                    var t = n.documentElement.style;
                                    this._userSelect = t[i], t[i] = "none"
                                }
                            }, r.DomUtil.enableTextSelection = function() {
                                i && (n.documentElement.style[i] = this._userSelect, delete this._userSelect)
                            }
                        }
                        r.DomUtil.disableImageDrag = function() {
                            r.DomEvent.on(e, "dragstart", r.DomEvent.preventDefault)
                        }, r.DomUtil.enableImageDrag = function() {
                            r.DomEvent.off(e, "dragstart", r.DomEvent.preventDefault)
                        }, r.DomUtil.preventOutline = function(t) {
                            for (; - 1 === t.tabIndex;) t = t.parentNode;
                            t && t.style && (r.DomUtil.restoreOutline(), this._outlineElement = t, this._outlineStyle = t.style.outline, t.style.outline = "none", r.DomEvent.on(e, "keydown", r.DomUtil.restoreOutline, this))
                        }, r.DomUtil.restoreOutline = function() {
                            this._outlineElement && (this._outlineElement.style.outline = this._outlineStyle, delete this._outlineElement, delete this._outlineStyle, r.DomEvent.off(e, "keydown", r.DomUtil.restoreOutline, this))
                        }
                    }(), r.LatLng = function(t, e, i) {
                        if (isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
                        this.lat = +t, this.lng = +e, void 0 !== i && (this.alt = +i)
                    }, r.LatLng.prototype = {
                        equals: function(t, e) {
                            return !!t && (t = r.latLng(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === e ? 1e-9 : e))
                        },
                        toString: function(t) {
                            return "LatLng(" + r.Util.formatNum(this.lat, t) + ", " + r.Util.formatNum(this.lng, t) + ")"
                        },
                        distanceTo: function(t) {
                            return r.CRS.Earth.distance(this, r.latLng(t))
                        },
                        wrap: function() {
                            return r.CRS.Earth.wrapLatLng(this)
                        },
                        toBounds: function(t) {
                            var e = 180 * t / 40075017,
                                i = e / Math.cos(Math.PI / 180 * this.lat);
                            return r.latLngBounds([this.lat - e, this.lng - i], [this.lat + e, this.lng + i])
                        },
                        clone: function() {
                            return new r.LatLng(this.lat, this.lng, this.alt)
                        }
                    }, r.latLng = function(t, e, i) {
                        return t instanceof r.LatLng ? t : r.Util.isArray(t) && "object" != typeof t[0] ? 3 === t.length ? new r.LatLng(t[0], t[1], t[2]) : 2 === t.length ? new r.LatLng(t[0], t[1]) : null : void 0 === t || null === t ? t : "object" == typeof t && "lat" in t ? new r.LatLng(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === e ? null : new r.LatLng(t, e, i)
                    }, r.LatLngBounds = function(t, e) {
                        if (t)
                            for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n])
                    }, r.LatLngBounds.prototype = {
                        extend: function(t) {
                            var e, i, n = this._southWest,
                                o = this._northEast;
                            if (t instanceof r.LatLng) e = t, i = t;
                            else {
                                if (!(t instanceof r.LatLngBounds)) return t ? this.extend(r.latLng(t) || r.latLngBounds(t)) : this;
                                if (e = t._southWest, i = t._northEast, !e || !i) return this
                            }
                            return n || o ? (n.lat = Math.min(e.lat, n.lat), n.lng = Math.min(e.lng, n.lng), o.lat = Math.max(i.lat, o.lat), o.lng = Math.max(i.lng, o.lng)) : (this._southWest = new r.LatLng(e.lat, e.lng), this._northEast = new r.LatLng(i.lat, i.lng)), this
                        },
                        pad: function(t) {
                            var e = this._southWest,
                                i = this._northEast,
                                n = Math.abs(e.lat - i.lat) * t,
                                o = Math.abs(e.lng - i.lng) * t;
                            return new r.LatLngBounds(new r.LatLng(e.lat - n, e.lng - o), new r.LatLng(i.lat + n, i.lng + o))
                        },
                        getCenter: function() {
                            return new r.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
                        },
                        getSouthWest: function() {
                            return this._southWest
                        },
                        getNorthEast: function() {
                            return this._northEast
                        },
                        getNorthWest: function() {
                            return new r.LatLng(this.getNorth(), this.getWest())
                        },
                        getSouthEast: function() {
                            return new r.LatLng(this.getSouth(), this.getEast())
                        },
                        getWest: function() {
                            return this._southWest.lng
                        },
                        getSouth: function() {
                            return this._southWest.lat
                        },
                        getEast: function() {
                            return this._northEast.lng
                        },
                        getNorth: function() {
                            return this._northEast.lat
                        },
                        contains: function(t) {
                            t = "number" == typeof t[0] || t instanceof r.LatLng || "lat" in t ? r.latLng(t) : r.latLngBounds(t);
                            var e, i, n = this._southWest,
                                o = this._northEast;
                            return t instanceof r.LatLngBounds ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng
                        },
                        intersects: function(t) {
                            t = r.latLngBounds(t);
                            var e = this._southWest,
                                i = this._northEast,
                                n = t.getSouthWest(),
                                o = t.getNorthEast(),
                                s = o.lat >= e.lat && n.lat <= i.lat,
                                a = o.lng >= e.lng && n.lng <= i.lng;
                            return s && a
                        },
                        overlaps: function(t) {
                            t = r.latLngBounds(t);
                            var e = this._southWest,
                                i = this._northEast,
                                n = t.getSouthWest(),
                                o = t.getNorthEast(),
                                s = o.lat > e.lat && n.lat < i.lat,
                                a = o.lng > e.lng && n.lng < i.lng;
                            return s && a
                        },
                        toBBoxString: function() {
                            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
                        },
                        equals: function(t) {
                            return !!t && (t = r.latLngBounds(t), this._southWest.equals(t.getSouthWest()) && this._northEast.equals(t.getNorthEast()))
                        },
                        isValid: function() {
                            return !(!this._southWest || !this._northEast)
                        }
                    }, r.latLngBounds = function(t, e) {
                        return t instanceof r.LatLngBounds ? t : new r.LatLngBounds(t, e)
                    }, r.Projection = {}, r.Projection.LonLat = {
                        project: function(t) {
                            return new r.Point(t.lng, t.lat)
                        },
                        unproject: function(t) {
                            return new r.LatLng(t.y, t.x)
                        },
                        bounds: r.bounds([-180, -90], [180, 90])
                    }, r.Projection.SphericalMercator = {
                        R: 6378137,
                        MAX_LATITUDE: 85.0511287798,
                        project: function(t) {
                            var e = Math.PI / 180,
                                i = this.MAX_LATITUDE,
                                n = Math.max(Math.min(i, t.lat), -i),
                                o = Math.sin(n * e);
                            return new r.Point(this.R * t.lng * e, this.R * Math.log((1 + o) / (1 - o)) / 2)
                        },
                        unproject: function(t) {
                            var e = 180 / Math.PI;
                            return new r.LatLng((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, t.x * e / this.R)
                        },
                        bounds: function() {
                            var t = 6378137 * Math.PI;
                            return r.bounds([-t, -t], [t, t])
                        }()
                    }, r.CRS = {
                        latLngToPoint: function(t, e) {
                            var i = this.projection.project(t),
                                n = this.scale(e);
                            return this.transformation._transform(i, n)
                        },
                        pointToLatLng: function(t, e) {
                            var i = this.scale(e),
                                n = this.transformation.untransform(t, i);
                            return this.projection.unproject(n)
                        },
                        project: function(t) {
                            return this.projection.project(t)
                        },
                        unproject: function(t) {
                            return this.projection.unproject(t)
                        },
                        scale: function(t) {
                            return 256 * Math.pow(2, t)
                        },
                        zoom: function(t) {
                            return Math.log(t / 256) / Math.LN2
                        },
                        getProjectedBounds: function(t) {
                            if (this.infinite) return null;
                            var e = this.projection.bounds,
                                i = this.scale(t),
                                n = this.transformation.transform(e.min, i),
                                o = this.transformation.transform(e.max, i);
                            return r.bounds(n, o)
                        },
                        infinite: !1,
                        wrapLatLng: function(t) {
                            var e = this.wrapLng ? r.Util.wrapNum(t.lng, this.wrapLng, !0) : t.lng,
                                i = this.wrapLat ? r.Util.wrapNum(t.lat, this.wrapLat, !0) : t.lat,
                                n = t.alt;
                            return r.latLng(i, e, n)
                        },
                        wrapLatLngBounds: function(t) {
                            var e = t.getCenter(),
                                i = this.wrapLatLng(e),
                                n = e.lat - i.lat,
                                o = e.lng - i.lng;
                            if (0 === n && 0 === o) return t;
                            var s = t.getSouthWest(),
                                a = t.getNorthEast(),
                                l = r.latLng({
                                    lat: s.lat - n,
                                    lng: s.lng - o
                                }),
                                c = r.latLng({
                                    lat: a.lat - n,
                                    lng: a.lng - o
                                });
                            return new r.LatLngBounds(l, c)
                        }
                    }, r.CRS.Simple = r.extend({}, r.CRS, {
                        projection: r.Projection.LonLat,
                        transformation: new r.Transformation(1, 0, -1, 0),
                        scale: function(t) {
                            return Math.pow(2, t)
                        },
                        zoom: function(t) {
                            return Math.log(t) / Math.LN2
                        },
                        distance: function(t, e) {
                            var i = e.lng - t.lng,
                                n = e.lat - t.lat;
                            return Math.sqrt(i * i + n * n)
                        },
                        infinite: !0
                    }), r.CRS.Earth = r.extend({}, r.CRS, {
                        wrapLng: [-180, 180],
                        R: 6371e3,
                        distance: function(t, e) {
                            var i = Math.PI / 180,
                                n = t.lat * i,
                                o = e.lat * i,
                                r = Math.sin(n) * Math.sin(o) + Math.cos(n) * Math.cos(o) * Math.cos((e.lng - t.lng) * i);
                            return this.R * Math.acos(Math.min(r, 1))
                        }
                    }), r.CRS.EPSG3857 = r.extend({}, r.CRS.Earth, {
                        code: "EPSG:3857",
                        projection: r.Projection.SphericalMercator,
                        transformation: function() {
                            var t = .5 / (Math.PI * r.Projection.SphericalMercator.R);
                            return new r.Transformation(t, .5, -t, .5)
                        }()
                    }), r.CRS.EPSG900913 = r.extend({}, r.CRS.EPSG3857, {
                        code: "EPSG:900913"
                    }), r.CRS.EPSG4326 = r.extend({}, r.CRS.Earth, {
                        code: "EPSG:4326",
                        projection: r.Projection.LonLat,
                        transformation: new r.Transformation(1 / 180, 1, -1 / 180, .5)
                    }), r.Map = r.Evented.extend({
                        options: {
                            crs: r.CRS.EPSG3857,
                            center: void 0,
                            zoom: void 0,
                            minZoom: void 0,
                            maxZoom: void 0,
                            layers: [],
                            maxBounds: void 0,
                            renderer: void 0,
                            zoomAnimation: !0,
                            zoomAnimationThreshold: 4,
                            fadeAnimation: !0,
                            markerZoomAnimation: !0,
                            transform3DLimit: 8388608,
                            zoomSnap: 1,
                            zoomDelta: 1,
                            trackResize: !0
                        },
                        initialize: function(t, e) {
                            e = r.setOptions(this, e), this._initContainer(t), this._initLayout(), this._onResize = r.bind(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)), e.center && void 0 !== e.zoom && this.setView(r.latLng(e.center), e.zoom, {
                                reset: !0
                            }), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this.callInitHooks(), this._zoomAnimated = r.DomUtil.TRANSITION && r.Browser.any3d && !r.Browser.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), r.DomEvent.on(this._proxy, r.DomUtil.TRANSITION_END, this._catchTransitionEnd, this)), this._addLayers(this.options.layers)
                        },
                        setView: function(t, e, i) {
                            if ((e = void 0 === e ? this._zoom : this._limitZoom(e), t = this._limitCenter(r.latLng(t), e, this.options.maxBounds), i = i || {}, this._stop(), this._loaded && !i.reset && !0 !== i) && (void 0 !== i.animate && (i.zoom = r.extend({
                                    animate: i.animate
                                }, i.zoom), i.pan = r.extend({
                                    animate: i.animate,
                                    duration: i.duration
                                }, i.pan)), this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan))) return clearTimeout(this._sizeTimer), this;
                            return this._resetView(t, e), this
                        },
                        setZoom: function(t, e) {
                            return this._loaded ? this.setView(this.getCenter(), t, {
                                zoom: e
                            }) : (this._zoom = t, this)
                        },
                        zoomIn: function(t, e) {
                            return t = t || (r.Browser.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e)
                        },
                        zoomOut: function(t, e) {
                            return t = t || (r.Browser.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e)
                        },
                        setZoomAround: function(t, e, i) {
                            var n = this.getZoomScale(e),
                                o = this.getSize().divideBy(2),
                                s = (t instanceof r.Point ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
                                a = this.containerPointToLatLng(o.add(s));
                            return this.setView(a, e, {
                                zoom: i
                            })
                        },
                        _getBoundsCenterZoom: function(t, e) {
                            e = e || {}, t = t.getBounds ? t.getBounds() : r.latLngBounds(t);
                            var i = r.point(e.paddingTopLeft || e.padding || [0, 0]),
                                n = r.point(e.paddingBottomRight || e.padding || [0, 0]),
                                o = this.getBoundsZoom(t, !1, i.add(n));
                            o = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o;
                            var s = n.subtract(i).divideBy(2),
                                a = this.project(t.getSouthWest(), o),
                                l = this.project(t.getNorthEast(), o);
                            return {
                                center: this.unproject(a.add(l).divideBy(2).add(s), o),
                                zoom: o
                            }
                        },
                        fitBounds: function(t, e) {
                            if (!(t = r.latLngBounds(t)).isValid()) throw new Error("Bounds are not valid.");
                            var i = this._getBoundsCenterZoom(t, e);
                            return this.setView(i.center, i.zoom, e)
                        },
                        fitWorld: function(t) {
                            return this.fitBounds([
                                [-90, -180],
                                [90, 180]
                            ], t)
                        },
                        panTo: function(t, e) {
                            return this.setView(t, this._zoom, {
                                pan: e
                            })
                        },
                        panBy: function(t, e) {
                            if (t = r.point(t).round(), e = e || {}, !t.x && !t.y) return this.fire("moveend");
                            if (!0 !== e.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
                            if (this._panAnim || (this._panAnim = new r.PosAnimation, this._panAnim.on({
                                    step: this._onPanTransitionStep,
                                    end: this._onPanTransitionEnd
                                }, this)), e.noMoveStart || this.fire("movestart"), !1 !== e.animate) {
                                r.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");
                                var i = this._getMapPanePos().subtract(t).round();
                                this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)
                            } else this._rawPanBy(t), this.fire("move").fire("moveend");
                            return this
                        },
                        flyTo: function(t, e, i) {
                            if (!1 === (i = i || {}).animate || !r.Browser.any3d) return this.setView(t, e, i);
                            this._stop();
                            var n = this.project(this.getCenter()),
                                o = this.project(t),
                                s = this.getSize(),
                                a = this._zoom;
                            t = r.latLng(t), e = void 0 === e ? a : e;
                            var l = Math.max(s.x, s.y),
                                c = l * this.getZoomScale(a, e),
                                u = o.distanceTo(n) || 1,
                                h = 1.42,
                                p = h * h;

                            function d(t) {
                                var e = (c * c - l * l + (t ? -1 : 1) * p * p * u * u) / (2 * (t ? c : l) * p * u),
                                    i = Math.sqrt(e * e + 1) - e;
                                return i < 1e-9 ? -18 : Math.log(i)
                            }

                            function f(t) {
                                return (Math.exp(t) - Math.exp(-t)) / 2
                            }

                            function m(t) {
                                return (Math.exp(t) + Math.exp(-t)) / 2
                            }
                            var g = d(0);

                            function v(t) {
                                return l * (m(g) * function(t) {
                                    return f(t) / m(t)
                                }(g + h * t) - f(g)) / p
                            }
                            var _ = Date.now(),
                                y = (d(1) - g) / h,
                                b = i.duration ? 1e3 * i.duration : 1e3 * y * .8;
                            return this._moveStart(!0),
                                function i() {
                                    var s = (Date.now() - _) / b,
                                        c = function(t) {
                                            return 1 - Math.pow(1 - t, 1.5)
                                        }(s) * y;
                                    s <= 1 ? (this._flyToFrame = r.Util.requestAnimFrame(i, this), this._move(this.unproject(n.add(o.subtract(n).multiplyBy(v(c) / u)), a), this.getScaleZoom(l / function(t) {
                                        return l * (m(g) / m(g + h * t))
                                    }(c), a), {
                                        flyTo: !0
                                    })) : this._move(t, e)._moveEnd(!0)
                                }.call(this), this
                        },
                        flyToBounds: function(t, e) {
                            var i = this._getBoundsCenterZoom(t, e);
                            return this.flyTo(i.center, i.zoom, e)
                        },
                        setMaxBounds: function(t) {
                            return (t = r.latLngBounds(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds))
                        },
                        setMinZoom: function(t) {
                            return this.options.minZoom = t, this._loaded && this.getZoom() < this.options.minZoom ? this.setZoom(t) : this
                        },
                        setMaxZoom: function(t) {
                            return this.options.maxZoom = t, this._loaded && this.getZoom() > this.options.maxZoom ? this.setZoom(t) : this
                        },
                        panInsideBounds: function(t, e) {
                            this._enforcingBounds = !0;
                            var i = this.getCenter(),
                                n = this._limitCenter(i, this._zoom, r.latLngBounds(t));
                            return i.equals(n) || this.panTo(n, e), this._enforcingBounds = !1, this
                        },
                        invalidateSize: function(t) {
                            if (!this._loaded) return this;
                            t = r.extend({
                                animate: !1,
                                pan: !0
                            }, !0 === t ? {
                                animate: !0
                            } : t);
                            var e = this.getSize();
                            this._sizeChanged = !0, this._lastCenter = null;
                            var i = this.getSize(),
                                n = e.divideBy(2).round(),
                                o = i.divideBy(2).round(),
                                s = n.subtract(o);
                            return s.x || s.y ? (t.animate && t.pan ? this.panBy(s) : (t.pan && this._rawPanBy(s), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(r.bind(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                                oldSize: e,
                                newSize: i
                            })) : this
                        },
                        stop: function() {
                            return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop()
                        },
                        locate: function(t) {
                            if (t = this._locateOptions = r.extend({
                                    timeout: 1e4,
                                    watch: !1
                                }, t), !("geolocation" in navigator)) return this._handleGeolocationError({
                                code: 0,
                                message: "Geolocation not supported."
                            }), this;
                            var e = r.bind(this._handleGeolocationResponse, this),
                                i = r.bind(this._handleGeolocationError, this);
                            return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this
                        },
                        stopLocate: function() {
                            return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
                        },
                        _handleGeolocationError: function(t) {
                            var e = t.code,
                                i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
                            this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                                code: e,
                                message: "Geolocation error: " + i + "."
                            })
                        },
                        _handleGeolocationResponse: function(t) {
                            var e = t.coords.latitude,
                                i = t.coords.longitude,
                                n = new r.LatLng(e, i),
                                o = n.toBounds(t.coords.accuracy),
                                s = this._locateOptions;
                            if (s.setView) {
                                var a = this.getBoundsZoom(o);
                                this.setView(n, s.maxZoom ? Math.min(a, s.maxZoom) : a)
                            }
                            var l = {
                                latlng: n,
                                bounds: o,
                                timestamp: t.timestamp
                            };
                            for (var c in t.coords) "number" == typeof t.coords[c] && (l[c] = t.coords[c]);
                            this.fire("locationfound", l)
                        },
                        addHandler: function(t, e) {
                            if (!e) return this;
                            var i = this[t] = new e(this);
                            return this._handlers.push(i), this.options[t] && i.enable(), this
                        },
                        remove: function() {
                            if (this._initEvents(!0), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
                            try {
                                delete this._container._leaflet_id, delete this._containerId
                            } catch (t) {
                                this._container._leaflet_id = void 0, this._containerId = void 0
                            }
                            for (var t in r.DomUtil.remove(this._mapPane), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers) this._layers[t].remove();
                            return this
                        },
                        createPane: function(t, e) {
                            var i = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""),
                                n = r.DomUtil.create("div", i, e || this._mapPane);
                            return t && (this._panes[t] = n), n
                        },
                        getCenter: function() {
                            return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
                        },
                        getZoom: function() {
                            return this._zoom
                        },
                        getBounds: function() {
                            var t = this.getPixelBounds(),
                                e = this.unproject(t.getBottomLeft()),
                                i = this.unproject(t.getTopRight());
                            return new r.LatLngBounds(e, i)
                        },
                        getMinZoom: function() {
                            return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
                        },
                        getMaxZoom: function() {
                            return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
                        },
                        getBoundsZoom: function(t, e, i) {
                            t = r.latLngBounds(t), i = r.point(i || [0, 0]);
                            var n = this.getZoom() || 0,
                                o = this.getMinZoom(),
                                s = this.getMaxZoom(),
                                a = t.getNorthWest(),
                                l = t.getSouthEast(),
                                c = this.getSize().subtract(i),
                                u = r.bounds(this.project(l, n), this.project(a, n)).getSize(),
                                h = r.Browser.any3d ? this.options.zoomSnap : 1,
                                p = Math.min(c.x / u.x, c.y / u.y);
                            return n = this.getScaleZoom(p, n), h && (n = Math.round(n / (h / 100)) * (h / 100), n = e ? Math.ceil(n / h) * h : Math.floor(n / h) * h), Math.max(o, Math.min(s, n))
                        },
                        getSize: function() {
                            return this._size && !this._sizeChanged || (this._size = new r.Point(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone()
                        },
                        getPixelBounds: function(t, e) {
                            var i = this._getTopLeftPoint(t, e);
                            return new r.Bounds(i, i.add(this.getSize()))
                        },
                        getPixelOrigin: function() {
                            return this._checkIfLoaded(), this._pixelOrigin
                        },
                        getPixelWorldBounds: function(t) {
                            return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
                        },
                        getPane: function(t) {
                            return "string" == typeof t ? this._panes[t] : t
                        },
                        getPanes: function() {
                            return this._panes
                        },
                        getContainer: function() {
                            return this._container
                        },
                        getZoomScale: function(t, e) {
                            var i = this.options.crs;
                            return e = void 0 === e ? this._zoom : e, i.scale(t) / i.scale(e)
                        },
                        getScaleZoom: function(t, e) {
                            var i = this.options.crs;
                            e = void 0 === e ? this._zoom : e;
                            var n = i.zoom(t * i.scale(e));
                            return isNaN(n) ? 1 / 0 : n
                        },
                        project: function(t, e) {
                            return e = void 0 === e ? this._zoom : e, this.options.crs.latLngToPoint(r.latLng(t), e)
                        },
                        unproject: function(t, e) {
                            return e = void 0 === e ? this._zoom : e, this.options.crs.pointToLatLng(r.point(t), e)
                        },
                        layerPointToLatLng: function(t) {
                            var e = r.point(t).add(this.getPixelOrigin());
                            return this.unproject(e)
                        },
                        latLngToLayerPoint: function(t) {
                            return this.project(r.latLng(t))._round()._subtract(this.getPixelOrigin())
                        },
                        wrapLatLng: function(t) {
                            return this.options.crs.wrapLatLng(r.latLng(t))
                        },
                        wrapLatLngBounds: function(t) {
                            return this.options.crs.wrapLatLngBounds(r.latLngBounds(t))
                        },
                        distance: function(t, e) {
                            return this.options.crs.distance(r.latLng(t), r.latLng(e))
                        },
                        containerPointToLayerPoint: function(t) {
                            return r.point(t).subtract(this._getMapPanePos())
                        },
                        layerPointToContainerPoint: function(t) {
                            return r.point(t).add(this._getMapPanePos())
                        },
                        containerPointToLatLng: function(t) {
                            var e = this.containerPointToLayerPoint(r.point(t));
                            return this.layerPointToLatLng(e)
                        },
                        latLngToContainerPoint: function(t) {
                            return this.layerPointToContainerPoint(this.latLngToLayerPoint(r.latLng(t)))
                        },
                        mouseEventToContainerPoint: function(t) {
                            return r.DomEvent.getMousePosition(t, this._container)
                        },
                        mouseEventToLayerPoint: function(t) {
                            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
                        },
                        mouseEventToLatLng: function(t) {
                            return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
                        },
                        _initContainer: function(t) {
                            var e = this._container = r.DomUtil.get(t);
                            if (!e) throw new Error("Map container not found.");
                            if (e._leaflet_id) throw new Error("Map container is already initialized.");
                            r.DomEvent.addListener(e, "scroll", this._onScroll, this), this._containerId = r.Util.stamp(e)
                        },
                        _initLayout: function() {
                            var t = this._container;
                            this._fadeAnimated = this.options.fadeAnimation && r.Browser.any3d, r.DomUtil.addClass(t, "leaflet-container" + (r.Browser.touch ? " leaflet-touch" : "") + (r.Browser.retina ? " leaflet-retina" : "") + (r.Browser.ielt9 ? " leaflet-oldie" : "") + (r.Browser.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
                            var e = r.DomUtil.getStyle(t, "position");
                            "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
                        },
                        _initPanes: function() {
                            var t = this._panes = {};
                            this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), r.DomUtil.setPosition(this._mapPane, new r.Point(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (r.DomUtil.addClass(t.markerPane, "leaflet-zoom-hide"), r.DomUtil.addClass(t.shadowPane, "leaflet-zoom-hide"))
                        },
                        _resetView: function(t, e) {
                            r.DomUtil.setPosition(this._mapPane, new r.Point(0, 0));
                            var i = !this._loaded;
                            this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
                            var n = this._zoom !== e;
                            this._moveStart(n)._move(t, e)._moveEnd(n), this.fire("viewreset"), i && this.fire("load")
                        },
                        _moveStart: function(t) {
                            return t && this.fire("zoomstart"), this.fire("movestart")
                        },
                        _move: function(t, e, i) {
                            void 0 === e && (e = this._zoom);
                            var n = this._zoom !== e;
                            return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (n || i && i.pinch) && this.fire("zoom", i), this.fire("move", i)
                        },
                        _moveEnd: function(t) {
                            return t && this.fire("zoomend"), this.fire("moveend")
                        },
                        _stop: function() {
                            return r.Util.cancelAnimFrame(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
                        },
                        _rawPanBy: function(t) {
                            r.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(t))
                        },
                        _getZoomSpan: function() {
                            return this.getMaxZoom() - this.getMinZoom()
                        },
                        _panInsideMaxBounds: function() {
                            this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
                        },
                        _checkIfLoaded: function() {
                            if (!this._loaded) throw new Error("Set map center and zoom first.")
                        },
                        _initEvents: function(t) {
                            if (r.DomEvent) {
                                this._targets = {}, this._targets[r.stamp(this._container)] = this;
                                var i = t ? "off" : "on";
                                r.DomEvent[i](this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this), this.options.trackResize && r.DomEvent[i](e, "resize", this._onResize, this), r.Browser.any3d && this.options.transform3DLimit && this[i]("moveend", this._onMoveEnd)
                            }
                        },
                        _onResize: function() {
                            r.Util.cancelAnimFrame(this._resizeRequest), this._resizeRequest = r.Util.requestAnimFrame(function() {
                                this.invalidateSize({
                                    debounceMoveend: !0
                                })
                            }, this)
                        },
                        _onScroll: function() {
                            this._container.scrollTop = 0, this._container.scrollLeft = 0
                        },
                        _onMoveEnd: function() {
                            var t = this._getMapPanePos();
                            Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
                        },
                        _findEventTargets: function(t, e) {
                            for (var i, n = [], o = "mouseout" === e || "mouseover" === e, s = t.target || t.srcElement, a = !1; s;) {
                                if ((i = this._targets[r.stamp(s)]) && ("click" === e || "preclick" === e) && !t._simulated && this._draggableMoved(i)) {
                                    a = !0;
                                    break
                                }
                                if (i && i.listens(e, !0)) {
                                    if (o && !r.DomEvent._isExternalTarget(s, t)) break;
                                    if (n.push(i), o) break
                                }
                                if (s === this._container) break;
                                s = s.parentNode
                            }
                            return n.length || a || o || !r.DomEvent._isExternalTarget(s, t) || (n = [this]), n
                        },
                        _handleDOMEvent: function(t) {
                            if (this._loaded && !r.DomEvent._skipped(t)) {
                                var e = "keypress" === t.type && 13 === t.keyCode ? "click" : t.type;
                                "mousedown" === e && r.DomUtil.preventOutline(t.target || t.srcElement), this._fireDOMEvent(t, e)
                            }
                        },
                        _fireDOMEvent: function(t, e, i) {
                            if ("click" === t.type) {
                                var n = r.Util.extend({}, t);
                                n.type = "preclick", this._fireDOMEvent(n, n.type, i)
                            }
                            if (!t._stopped && (i = (i || []).concat(this._findEventTargets(t, e))).length) {
                                var o = i[0];
                                "contextmenu" === e && o.listens(e, !0) && r.DomEvent.preventDefault(t);
                                var s = {
                                    originalEvent: t
                                };
                                if ("keypress" !== t.type) {
                                    var a = o instanceof r.Marker;
                                    s.containerPoint = a ? this.latLngToContainerPoint(o.getLatLng()) : this.mouseEventToContainerPoint(t), s.layerPoint = this.containerPointToLayerPoint(s.containerPoint), s.latlng = a ? o.getLatLng() : this.layerPointToLatLng(s.layerPoint)
                                }
                                for (var l = 0; l < i.length; l++)
                                    if (i[l].fire(e, s, !0), s.originalEvent._stopped || i[l].options.nonBubblingEvents && -1 !== r.Util.indexOf(i[l].options.nonBubblingEvents, e)) return
                            }
                        },
                        _draggableMoved: function(t) {
                            return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
                        },
                        _clearHandlers: function() {
                            for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable()
                        },
                        whenReady: function(t, e) {
                            return this._loaded ? t.call(e || this, {
                                target: this
                            }) : this.on("load", t, e), this
                        },
                        _getMapPanePos: function() {
                            return r.DomUtil.getPosition(this._mapPane) || new r.Point(0, 0)
                        },
                        _moved: function() {
                            var t = this._getMapPanePos();
                            return t && !t.equals([0, 0])
                        },
                        _getTopLeftPoint: function(t, e) {
                            return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(this._getMapPanePos())
                        },
                        _getNewPixelOrigin: function(t, e) {
                            var i = this.getSize()._divideBy(2);
                            return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round()
                        },
                        _latLngToNewLayerPoint: function(t, e, i) {
                            var n = this._getNewPixelOrigin(i, e);
                            return this.project(t, e)._subtract(n)
                        },
                        _latLngBoundsToNewLayerBounds: function(t, e, i) {
                            var n = this._getNewPixelOrigin(i, e);
                            return r.bounds([this.project(t.getSouthWest(), e)._subtract(n), this.project(t.getNorthWest(), e)._subtract(n), this.project(t.getSouthEast(), e)._subtract(n), this.project(t.getNorthEast(), e)._subtract(n)])
                        },
                        _getCenterLayerPoint: function() {
                            return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
                        },
                        _getCenterOffset: function(t) {
                            return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
                        },
                        _limitCenter: function(t, e, i) {
                            if (!i) return t;
                            var n = this.project(t, e),
                                o = this.getSize().divideBy(2),
                                s = new r.Bounds(n.subtract(o), n.add(o)),
                                a = this._getBoundsOffset(s, i, e);
                            return a.round().equals([0, 0]) ? t : this.unproject(n.add(a), e)
                        },
                        _limitOffset: function(t, e) {
                            if (!e) return t;
                            var i = this.getPixelBounds(),
                                n = new r.Bounds(i.min.add(t), i.max.add(t));
                            return t.add(this._getBoundsOffset(n, e))
                        },
                        _getBoundsOffset: function(t, e, i) {
                            var n = r.bounds(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)),
                                o = n.min.subtract(t.min),
                                s = n.max.subtract(t.max),
                                a = this._rebound(o.x, -s.x),
                                l = this._rebound(o.y, -s.y);
                            return new r.Point(a, l)
                        },
                        _rebound: function(t, e) {
                            return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
                        },
                        _limitZoom: function(t) {
                            var e = this.getMinZoom(),
                                i = this.getMaxZoom(),
                                n = r.Browser.any3d ? this.options.zoomSnap : 1;
                            return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t))
                        },
                        _onPanTransitionStep: function() {
                            this.fire("move")
                        },
                        _onPanTransitionEnd: function() {
                            r.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
                        },
                        _tryAnimatedPan: function(t, e) {
                            var i = this._getCenterOffset(t)._floor();
                            return !(!0 !== (e && e.animate) && !this.getSize().contains(i)) && (this.panBy(i, e), !0)
                        },
                        _createAnimProxy: function() {
                            var t = this._proxy = r.DomUtil.create("div", "leaflet-proxy leaflet-zoom-animated");
                            this._panes.mapPane.appendChild(t), this.on("zoomanim", function(e) {
                                var i = r.DomUtil.TRANSFORM,
                                    n = t.style[i];
                                r.DomUtil.setTransform(t, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1)), n === t.style[i] && this._animatingZoom && this._onZoomTransitionEnd()
                            }, this), this.on("load moveend", function() {
                                var e = this.getCenter(),
                                    i = this.getZoom();
                                r.DomUtil.setTransform(t, this.project(e, i), this.getZoomScale(i, 1))
                            }, this)
                        },
                        _catchTransitionEnd: function(t) {
                            this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
                        },
                        _nothingToAnimate: function() {
                            return !this._container.getElementsByClassName("leaflet-zoom-animated").length
                        },
                        _tryAnimatedZoom: function(t, e, i) {
                            if (this._animatingZoom) return !0;
                            if (i = i || {}, !this._zoomAnimated || !1 === i.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                            var n = this.getZoomScale(e),
                                o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
                            return !(!0 !== i.animate && !this.getSize().contains(o)) && (r.Util.requestAnimFrame(function() {
                                this._moveStart(!0)._animateZoom(t, e, !0)
                            }, this), !0)
                        },
                        _animateZoom: function(t, e, i, n) {
                            i && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, r.DomUtil.addClass(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
                                center: t,
                                zoom: e,
                                noUpdate: n
                            }), setTimeout(r.bind(this._onZoomTransitionEnd, this), 250)
                        },
                        _onZoomTransitionEnd: function() {
                            this._animatingZoom && (r.DomUtil.removeClass(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), r.Util.requestAnimFrame(function() {
                                this._moveEnd(!0)
                            }, this))
                        }
                    }), r.map = function(t, e) {
                        return new r.Map(t, e)
                    }, r.Layer = r.Evented.extend({
                        options: {
                            pane: "overlayPane",
                            nonBubblingEvents: [],
                            attribution: null
                        },
                        addTo: function(t) {
                            return t.addLayer(this), this
                        },
                        remove: function() {
                            return this.removeFrom(this._map || this._mapToAdd)
                        },
                        removeFrom: function(t) {
                            return t && t.removeLayer(this), this
                        },
                        getPane: function(t) {
                            return this._map.getPane(t ? this.options[t] || t : this.options.pane)
                        },
                        addInteractiveTarget: function(t) {
                            return this._map._targets[r.stamp(t)] = this, this
                        },
                        removeInteractiveTarget: function(t) {
                            return delete this._map._targets[r.stamp(t)], this
                        },
                        getAttribution: function() {
                            return this.options.attribution
                        },
                        _layerAdd: function(t) {
                            var e = t.target;
                            if (e.hasLayer(this)) {
                                if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
                                    var i = this.getEvents();
                                    e.on(i, this), this.once("remove", function() {
                                        e.off(i, this)
                                    }, this)
                                }
                                this.onAdd(e), this.getAttribution && e.attributionControl && e.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), e.fire("layeradd", {
                                    layer: this
                                })
                            }
                        }
                    }), r.Map.include({
                        addLayer: function(t) {
                            var e = r.stamp(t);
                            return this._layers[e] ? this : (this._layers[e] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this)
                        },
                        removeLayer: function(t) {
                            var e = r.stamp(t);
                            return this._layers[e] ? (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[e], this._loaded && (this.fire("layerremove", {
                                layer: t
                            }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this
                        },
                        hasLayer: function(t) {
                            return !!t && r.stamp(t) in this._layers
                        },
                        eachLayer: function(t, e) {
                            for (var i in this._layers) t.call(e, this._layers[i]);
                            return this
                        },
                        _addLayers: function(t) {
                            for (var e = 0, i = (t = t ? r.Util.isArray(t) ? t : [t] : []).length; e < i; e++) this.addLayer(t[e])
                        },
                        _addZoomLimit: function(t) {
                            !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[r.stamp(t)] = t, this._updateZoomLevels())
                        },
                        _removeZoomLimit: function(t) {
                            var e = r.stamp(t);
                            this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels())
                        },
                        _updateZoomLevels: function() {
                            var t = 1 / 0,
                                e = -1 / 0,
                                i = this._getZoomSpan();
                            for (var n in this._zoomBoundLayers) {
                                var o = this._zoomBoundLayers[n].options;
                                t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom), e = void 0 === o.maxZoom ? e : Math.max(e, o.maxZoom)
                            }
                            this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = t === 1 / 0 ? void 0 : t, i !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
                        }
                    });
                var a = "_leaflet_events";
                r.DomEvent = {
                    on: function(t, e, i, n) {
                        if ("object" == typeof e)
                            for (var o in e) this._on(t, o, e[o], i);
                        else
                            for (var s = 0, a = (e = r.Util.splitWords(e)).length; s < a; s++) this._on(t, e[s], i, n);
                        return this
                    },
                    off: function(t, e, i, n) {
                        if ("object" == typeof e)
                            for (var o in e) this._off(t, o, e[o], i);
                        else
                            for (var s = 0, a = (e = r.Util.splitWords(e)).length; s < a; s++) this._off(t, e[s], i, n);
                        return this
                    },
                    _on: function(t, i, n, o) {
                        var s = i + r.stamp(n) + (o ? "_" + r.stamp(o) : "");
                        if (t[a] && t[a][s]) return this;
                        var l = function(i) {
                                return n.call(o || t, i || e.event)
                            },
                            c = l;
                        return r.Browser.pointer && 0 === i.indexOf("touch") ? this.addPointerListener(t, i, l, s) : !r.Browser.touch || "dblclick" !== i || !this.addDoubleTapListener || r.Browser.pointer && r.Browser.chrome ? "addEventListener" in t ? "mousewheel" === i ? t.addEventListener("onwheel" in t ? "wheel" : "mousewheel", l, !1) : "mouseenter" === i || "mouseleave" === i ? (l = function(i) {
                            i = i || e.event, r.DomEvent._isExternalTarget(t, i) && c(i)
                        }, t.addEventListener("mouseenter" === i ? "mouseover" : "mouseout", l, !1)) : ("click" === i && r.Browser.android && (l = function(t) {
                            return r.DomEvent._filterClick(t, c)
                        }), t.addEventListener(i, l, !1)) : "attachEvent" in t && t.attachEvent("on" + i, l) : this.addDoubleTapListener(t, l, s), t[a] = t[a] || {}, t[a][s] = l, this
                    },
                    _off: function(t, e, i, n) {
                        var o = e + r.stamp(i) + (n ? "_" + r.stamp(n) : ""),
                            s = t[a] && t[a][o];
                        return s ? (r.Browser.pointer && 0 === e.indexOf("touch") ? this.removePointerListener(t, e, o) : r.Browser.touch && "dblclick" === e && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, o) : "removeEventListener" in t ? "mousewheel" === e ? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", s, !1) : t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, s, !1) : "detachEvent" in t && t.detachEvent("on" + e, s), t[a][o] = null, this) : this
                    },
                    stopPropagation: function(t) {
                        return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, r.DomEvent._skipped(t), this
                    },
                    disableScrollPropagation: function(t) {
                        return r.DomEvent.on(t, "mousewheel", r.DomEvent.stopPropagation)
                    },
                    disableClickPropagation: function(t) {
                        var e = r.DomEvent.stopPropagation;
                        return r.DomEvent.on(t, r.Draggable.START.join(" "), e), r.DomEvent.on(t, {
                            click: r.DomEvent._fakeStop,
                            dblclick: e
                        })
                    },
                    preventDefault: function(t) {
                        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
                    },
                    stop: function(t) {
                        return r.DomEvent.preventDefault(t).stopPropagation(t)
                    },
                    getMousePosition: function(t, e) {
                        if (!e) return new r.Point(t.clientX, t.clientY);
                        var i = e.getBoundingClientRect();
                        return new r.Point(t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop)
                    },
                    _wheelPxFactor: r.Browser.win && r.Browser.chrome ? 2 : r.Browser.gecko ? e.devicePixelRatio : 1,
                    getWheelDelta: function(t) {
                        return r.Browser.edge ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / r.DomEvent._wheelPxFactor : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
                    },
                    _skipEvents: {},
                    _fakeStop: function(t) {
                        r.DomEvent._skipEvents[t.type] = !0
                    },
                    _skipped: function(t) {
                        var e = this._skipEvents[t.type];
                        return this._skipEvents[t.type] = !1, e
                    },
                    _isExternalTarget: function(t, e) {
                        var i = e.relatedTarget;
                        if (!i) return !0;
                        try {
                            for (; i && i !== t;) i = i.parentNode
                        } catch (t) {
                            return !1
                        }
                        return i !== t
                    },
                    _filterClick: function(t, e) {
                        var i = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp,
                            n = r.DomEvent._lastClick && i - r.DomEvent._lastClick;
                        n && n > 100 && n < 500 || t.target._simulatedClick && !t._simulated ? r.DomEvent.stop(t) : (r.DomEvent._lastClick = i, e(t))
                    }
                }, r.DomEvent.addListener = r.DomEvent.on, r.DomEvent.removeListener = r.DomEvent.off, r.PosAnimation = r.Evented.extend({
                    run: function(t, e, i, n) {
                        this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = r.DomUtil.getPosition(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
                    },
                    stop: function() {
                        this._inProgress && (this._step(!0), this._complete())
                    },
                    _animate: function() {
                        this._animId = r.Util.requestAnimFrame(this._animate, this), this._step()
                    },
                    _step: function(t) {
                        var e = +new Date - this._startTime,
                            i = 1e3 * this._duration;
                        e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete())
                    },
                    _runFrame: function(t, e) {
                        var i = this._startPos.add(this._offset.multiplyBy(t));
                        e && i._round(), r.DomUtil.setPosition(this._el, i), this.fire("step")
                    },
                    _complete: function() {
                        r.Util.cancelAnimFrame(this._animId), this._inProgress = !1, this.fire("end")
                    },
                    _easeOut: function(t) {
                        return 1 - Math.pow(1 - t, this._easeOutPower)
                    }
                }), r.Projection.Mercator = {
                    R: 6378137,
                    R_MINOR: 6356752.314245179,
                    bounds: r.bounds([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
                    project: function(t) {
                        var e = Math.PI / 180,
                            i = this.R,
                            n = t.lat * e,
                            o = this.R_MINOR / i,
                            s = Math.sqrt(1 - o * o),
                            a = s * Math.sin(n),
                            l = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - a) / (1 + a), s / 2);
                        return n = -i * Math.log(Math.max(l, 1e-10)), new r.Point(t.lng * e * i, n)
                    },
                    unproject: function(t) {
                        for (var e, i = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), a = Math.exp(-t.y / n), l = Math.PI / 2 - 2 * Math.atan(a), c = 0, u = .1; c < 15 && Math.abs(u) > 1e-7; c++) e = s * Math.sin(l), e = Math.pow((1 - e) / (1 + e), s / 2), l += u = Math.PI / 2 - 2 * Math.atan(a * e) - l;
                        return new r.LatLng(l * i, t.x * i / n)
                    }
                }, r.CRS.EPSG3395 = r.extend({}, r.CRS.Earth, {
                    code: "EPSG:3395",
                    projection: r.Projection.Mercator,
                    transformation: function() {
                        var t = .5 / (Math.PI * r.Projection.Mercator.R);
                        return new r.Transformation(t, .5, -t, .5)
                    }()
                }), r.GridLayer = r.Layer.extend({
                    options: {
                        tileSize: 256,
                        opacity: 1,
                        updateWhenIdle: r.Browser.mobile,
                        updateWhenZooming: !0,
                        updateInterval: 200,
                        zIndex: 1,
                        bounds: null,
                        minZoom: 0,
                        maxZoom: void 0,
                        noWrap: !1,
                        pane: "tilePane",
                        className: "",
                        keepBuffer: 2
                    },
                    initialize: function(t) {
                        r.setOptions(this, t)
                    },
                    onAdd: function() {
                        this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update()
                    },
                    beforeAdd: function(t) {
                        t._addZoomLimit(this)
                    },
                    onRemove: function(t) {
                        this._removeAllTiles(), r.DomUtil.remove(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = null
                    },
                    bringToFront: function() {
                        return this._map && (r.DomUtil.toFront(this._container), this._setAutoZIndex(Math.max)), this
                    },
                    bringToBack: function() {
                        return this._map && (r.DomUtil.toBack(this._container), this._setAutoZIndex(Math.min)), this
                    },
                    getContainer: function() {
                        return this._container
                    },
                    setOpacity: function(t) {
                        return this.options.opacity = t, this._updateOpacity(), this
                    },
                    setZIndex: function(t) {
                        return this.options.zIndex = t, this._updateZIndex(), this
                    },
                    isLoading: function() {
                        return this._loading
                    },
                    redraw: function() {
                        return this._map && (this._removeAllTiles(), this._update()), this
                    },
                    getEvents: function() {
                        var t = {
                            viewprereset: this._invalidateAll,
                            viewreset: this._resetView,
                            zoom: this._resetView,
                            moveend: this._onMoveEnd
                        };
                        return this.options.updateWhenIdle || (this._onMove || (this._onMove = r.Util.throttle(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t
                    },
                    createTile: function() {
                        return n.createElement("div")
                    },
                    getTileSize: function() {
                        var t = this.options.tileSize;
                        return t instanceof r.Point ? t : new r.Point(t, t)
                    },
                    _updateZIndex: function() {
                        this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
                    },
                    _setAutoZIndex: function(t) {
                        for (var e, i = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, r = i.length; o < r; o++) e = i[o].style.zIndex, i[o] !== this._container && e && (n = t(n, +e));
                        isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex())
                    },
                    _updateOpacity: function() {
                        if (this._map && !r.Browser.ielt9) {
                            r.DomUtil.setOpacity(this._container, this.options.opacity);
                            var t = +new Date,
                                e = !1,
                                i = !1;
                            for (var n in this._tiles) {
                                var o = this._tiles[n];
                                if (o.current && o.loaded) {
                                    var s = Math.min(1, (t - o.loaded) / 200);
                                    r.DomUtil.setOpacity(o.el, s), s < 1 ? e = !0 : (o.active && (i = !0), o.active = !0)
                                }
                            }
                            i && !this._noPrune && this._pruneTiles(), e && (r.Util.cancelAnimFrame(this._fadeFrame), this._fadeFrame = r.Util.requestAnimFrame(this._updateOpacity, this))
                        }
                    },
                    _initContainer: function() {
                        this._container || (this._container = r.DomUtil.create("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container))
                    },
                    _updateLevels: function() {
                        var t = this._tileZoom,
                            e = this.options.maxZoom;
                        if (void 0 !== t) {
                            for (var i in this._levels) this._levels[i].el.children.length || i === t ? this._levels[i].el.style.zIndex = e - Math.abs(t - i) : (r.DomUtil.remove(this._levels[i].el), this._removeTilesAtZoom(i), delete this._levels[i]);
                            var n = this._levels[t],
                                o = this._map;
                            return n || ((n = this._levels[t] = {}).el = r.DomUtil.create("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = e, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), r.Util.falseFn(n.el.offsetWidth)), this._level = n, n
                        }
                    },
                    _pruneTiles: function() {
                        if (this._map) {
                            var t, e, i = this._map.getZoom();
                            if (i > this.options.maxZoom || i < this.options.minZoom) this._removeAllTiles();
                            else {
                                for (t in this._tiles)(e = this._tiles[t]).retain = e.current;
                                for (t in this._tiles)
                                    if ((e = this._tiles[t]).current && !e.active) {
                                        var n = e.coords;
                                        this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2)
                                    } for (t in this._tiles) this._tiles[t].retain || this._removeTile(t)
                            }
                        }
                    },
                    _removeTilesAtZoom: function(t) {
                        for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e)
                    },
                    _removeAllTiles: function() {
                        for (var t in this._tiles) this._removeTile(t)
                    },
                    _invalidateAll: function() {
                        for (var t in this._levels) r.DomUtil.remove(this._levels[t].el), delete this._levels[t];
                        this._removeAllTiles(), this._tileZoom = null
                    },
                    _retainParent: function(t, e, i, n) {
                        var o = Math.floor(t / 2),
                            s = Math.floor(e / 2),
                            a = i - 1,
                            l = new r.Point(+o, +s);
                        l.z = +a;
                        var c = this._tileCoordsToKey(l),
                            u = this._tiles[c];
                        return u && u.active ? (u.retain = !0, !0) : (u && u.loaded && (u.retain = !0), a > n && this._retainParent(o, s, a, n))
                    },
                    _retainChildren: function(t, e, i, n) {
                        for (var o = 2 * t; o < 2 * t + 2; o++)
                            for (var s = 2 * e; s < 2 * e + 2; s++) {
                                var a = new r.Point(o, s);
                                a.z = i + 1;
                                var l = this._tileCoordsToKey(a),
                                    c = this._tiles[l];
                                c && c.active ? c.retain = !0 : (c && c.loaded && (c.retain = !0), i + 1 < n && this._retainChildren(o, s, i + 1, n))
                            }
                    },
                    _resetView: function(t) {
                        var e = t && (t.pinch || t.flyTo);
                        this._setView(this._map.getCenter(), this._map.getZoom(), e, e)
                    },
                    _animateZoom: function(t) {
                        this._setView(t.center, t.zoom, !0, t.noUpdate)
                    },
                    _setView: function(t, e, i, n) {
                        var o = Math.round(e);
                        (void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom) && (o = void 0);
                        var r = this.options.updateWhenZooming && o !== this._tileZoom;
                        n && !r || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), i || this._pruneTiles(), this._noPrune = !!i), this._setZoomTransforms(t, e)
                    },
                    _setZoomTransforms: function(t, e) {
                        for (var i in this._levels) this._setZoomTransform(this._levels[i], t, e)
                    },
                    _setZoomTransform: function(t, e, i) {
                        var n = this._map.getZoomScale(i, t.zoom),
                            o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
                        r.Browser.any3d ? r.DomUtil.setTransform(t.el, o, n) : r.DomUtil.setPosition(t.el, o)
                    },
                    _resetGrid: function() {
                        var t = this._map,
                            e = t.options.crs,
                            i = this._tileSize = this.getTileSize(),
                            n = this._tileZoom,
                            o = this._map.getPixelWorldBounds(this._tileZoom);
                        o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)], this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)]
                    },
                    _onMoveEnd: function() {
                        this._map && !this._map._animatingZoom && this._update()
                    },
                    _getTiledPixelBounds: function(t) {
                        var e = this._map,
                            i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
                            n = e.getZoomScale(i, this._tileZoom),
                            o = e.project(t, this._tileZoom).floor(),
                            s = e.getSize().divideBy(2 * n);
                        return new r.Bounds(o.subtract(s), o.add(s))
                    },
                    _update: function(t) {
                        var e = this._map;
                        if (e) {
                            var i = e.getZoom();
                            if (void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom) {
                                var o = this._getTiledPixelBounds(t),
                                    s = this._pxBoundsToTileRange(o),
                                    a = s.getCenter(),
                                    l = [],
                                    c = this.options.keepBuffer,
                                    u = new r.Bounds(s.getBottomLeft().subtract([c, -c]), s.getTopRight().add([c, -c]));
                                for (var h in this._tiles) {
                                    var p = this._tiles[h].coords;
                                    p.z === this._tileZoom && u.contains(r.point(p.x, p.y)) || (this._tiles[h].current = !1)
                                }
                                if (Math.abs(i - this._tileZoom) > 1) this._setView(t, i);
                                else {
                                    for (var d = s.min.y; d <= s.max.y; d++)
                                        for (var f = s.min.x; f <= s.max.x; f++) {
                                            var m = new r.Point(f, d);
                                            if (m.z = this._tileZoom, this._isValidTile(m)) {
                                                var g = this._tiles[this._tileCoordsToKey(m)];
                                                g ? g.current = !0 : l.push(m)
                                            }
                                        }
                                    if (l.sort(function(t, e) {
                                            return t.distanceTo(a) - e.distanceTo(a)
                                        }), 0 !== l.length) {
                                        this._loading || (this._loading = !0, this.fire("loading"));
                                        var v = n.createDocumentFragment();
                                        for (f = 0; f < l.length; f++) this._addTile(l[f], v);
                                        this._level.el.appendChild(v)
                                    }
                                }
                            }
                        }
                    },
                    _isValidTile: function(t) {
                        var e = this._map.options.crs;
                        if (!e.infinite) {
                            var i = this._globalTileRange;
                            if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y)) return !1
                        }
                        if (!this.options.bounds) return !0;
                        var n = this._tileCoordsToBounds(t);
                        return r.latLngBounds(this.options.bounds).overlaps(n)
                    },
                    _keyToBounds: function(t) {
                        return this._tileCoordsToBounds(this._keyToTileCoords(t))
                    },
                    _tileCoordsToBounds: function(t) {
                        var e = this._map,
                            i = this.getTileSize(),
                            n = t.scaleBy(i),
                            o = n.add(i),
                            s = e.unproject(n, t.z),
                            a = e.unproject(o, t.z),
                            l = new r.LatLngBounds(s, a);
                        return this.options.noWrap || e.wrapLatLngBounds(l), l
                    },
                    _tileCoordsToKey: function(t) {
                        return t.x + ":" + t.y + ":" + t.z
                    },
                    _keyToTileCoords: function(t) {
                        var e = t.split(":"),
                            i = new r.Point(+e[0], +e[1]);
                        return i.z = +e[2], i
                    },
                    _removeTile: function(t) {
                        var e = this._tiles[t];
                        e && (r.DomUtil.remove(e.el), delete this._tiles[t], this.fire("tileunload", {
                            tile: e.el,
                            coords: this._keyToTileCoords(t)
                        }))
                    },
                    _initTile: function(t) {
                        r.DomUtil.addClass(t, "leaflet-tile");
                        var e = this.getTileSize();
                        t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = r.Util.falseFn, t.onmousemove = r.Util.falseFn, r.Browser.ielt9 && this.options.opacity < 1 && r.DomUtil.setOpacity(t, this.options.opacity), r.Browser.android && !r.Browser.android23 && (t.style.WebkitBackfaceVisibility = "hidden")
                    },
                    _addTile: function(t, e) {
                        var i = this._getTilePos(t),
                            n = this._tileCoordsToKey(t),
                            o = this.createTile(this._wrapCoords(t), r.bind(this._tileReady, this, t));
                        this._initTile(o), this.createTile.length < 2 && r.Util.requestAnimFrame(r.bind(this._tileReady, this, t, null, o)), r.DomUtil.setPosition(o, i), this._tiles[n] = {
                            el: o,
                            coords: t,
                            current: !0
                        }, e.appendChild(o), this.fire("tileloadstart", {
                            tile: o,
                            coords: t
                        })
                    },
                    _tileReady: function(t, e, i) {
                        if (this._map) {
                            e && this.fire("tileerror", {
                                error: e,
                                tile: i,
                                coords: t
                            });
                            var n = this._tileCoordsToKey(t);
                            (i = this._tiles[n]) && (i.loaded = +new Date, this._map._fadeAnimated ? (r.DomUtil.setOpacity(i.el, 0), r.Util.cancelAnimFrame(this._fadeFrame), this._fadeFrame = r.Util.requestAnimFrame(this._updateOpacity, this)) : (i.active = !0, this._pruneTiles()), e || (r.DomUtil.addClass(i.el, "leaflet-tile-loaded"), this.fire("tileload", {
                                tile: i.el,
                                coords: t
                            })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), r.Browser.ielt9 || !this._map._fadeAnimated ? r.Util.requestAnimFrame(this._pruneTiles, this) : setTimeout(r.bind(this._pruneTiles, this), 250)))
                        }
                    },
                    _getTilePos: function(t) {
                        return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
                    },
                    _wrapCoords: function(t) {
                        var e = new r.Point(this._wrapX ? r.Util.wrapNum(t.x, this._wrapX) : t.x, this._wrapY ? r.Util.wrapNum(t.y, this._wrapY) : t.y);
                        return e.z = t.z, e
                    },
                    _pxBoundsToTileRange: function(t) {
                        var e = this.getTileSize();
                        return new r.Bounds(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]))
                    },
                    _noTilesToLoad: function() {
                        for (var t in this._tiles)
                            if (!this._tiles[t].loaded) return !1;
                        return !0
                    }
                }), r.gridLayer = function(t) {
                    return new r.GridLayer(t)
                }, r.TileLayer = r.GridLayer.extend({
                    options: {
                        minZoom: 0,
                        maxZoom: 18,
                        maxNativeZoom: null,
                        minNativeZoom: null,
                        subdomains: "abc",
                        errorTileUrl: "",
                        zoomOffset: 0,
                        tms: !1,
                        zoomReverse: !1,
                        detectRetina: !1,
                        crossOrigin: !1
                    },
                    initialize: function(t, e) {
                        this._url = t, (e = r.setOptions(this, e)).detectRetina && r.Browser.retina && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom++) : (e.zoomOffset++, e.maxZoom--), e.minZoom = Math.max(0, e.minZoom)), "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")), r.Browser.android || this.on("tileunload", this._onTileRemove)
                    },
                    setUrl: function(t, e) {
                        return this._url = t, e || this.redraw(), this
                    },
                    createTile: function(t, e) {
                        var i = n.createElement("img");
                        return r.DomEvent.on(i, "load", r.bind(this._tileOnLoad, this, e, i)), r.DomEvent.on(i, "error", r.bind(this._tileOnError, this, e, i)), this.options.crossOrigin && (i.crossOrigin = ""), i.alt = "", i.setAttribute("role", "presentation"), i.src = this.getTileUrl(t), i
                    },
                    getTileUrl: function(t) {
                        var e = {
                            r: r.Browser.retina ? "@2x" : "",
                            s: this._getSubdomain(t),
                            x: t.x,
                            y: t.y,
                            z: this._getZoomForUrl()
                        };
                        if (this._map && !this._map.options.crs.infinite) {
                            var i = this._globalTileRange.max.y - t.y;
                            this.options.tms && (e.y = i), e["-y"] = i
                        }
                        return r.Util.template(this._url, r.extend(e, this.options))
                    },
                    _tileOnLoad: function(t, e) {
                        r.Browser.ielt9 ? setTimeout(r.bind(t, this, null, e), 0) : t(null, e)
                    },
                    _tileOnError: function(t, e, i) {
                        var n = this.options.errorTileUrl;
                        n && e.src !== n && (e.src = n), t(i, e)
                    },
                    getTileSize: function() {
                        var t = this._map,
                            e = r.GridLayer.prototype.getTileSize.call(this),
                            i = this._tileZoom + this.options.zoomOffset,
                            n = this.options.minNativeZoom,
                            o = this.options.maxNativeZoom;
                        return null !== n && i < n ? e.divideBy(t.getZoomScale(n, i)).round() : null !== o && i > o ? e.divideBy(t.getZoomScale(o, i)).round() : e
                    },
                    _onTileRemove: function(t) {
                        t.tile.onload = null
                    },
                    _getZoomForUrl: function() {
                        var t = this._tileZoom,
                            e = this.options.maxZoom,
                            i = this.options.zoomReverse,
                            n = this.options.zoomOffset,
                            o = this.options.minNativeZoom,
                            r = this.options.maxNativeZoom;
                        return i && (t = e - t), t += n, null !== o && t < o ? o : null !== r && t > r ? r : t
                    },
                    _getSubdomain: function(t) {
                        var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
                        return this.options.subdomains[e]
                    },
                    _abortLoading: function() {
                        var t, e;
                        for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && ((e = this._tiles[t].el).onload = r.Util.falseFn, e.onerror = r.Util.falseFn, e.complete || (e.src = r.Util.emptyImageUrl, r.DomUtil.remove(e)))
                    }
                }), r.tileLayer = function(t, e) {
                    return new r.TileLayer(t, e)
                }, r.TileLayer.WMS = r.TileLayer.extend({
                    defaultWmsParams: {
                        service: "WMS",
                        request: "GetMap",
                        layers: "",
                        styles: "",
                        format: "image/jpeg",
                        transparent: !1,
                        version: "1.1.1"
                    },
                    options: {
                        crs: null,
                        uppercase: !1
                    },
                    initialize: function(t, e) {
                        this._url = t;
                        var i = r.extend({}, this.defaultWmsParams);
                        for (var n in e) n in this.options || (i[n] = e[n]);
                        e = r.setOptions(this, e), i.width = i.height = e.tileSize * (e.detectRetina && r.Browser.retina ? 2 : 1), this.wmsParams = i
                    },
                    onAdd: function(t) {
                        this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
                        var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
                        this.wmsParams[e] = this._crs.code, r.TileLayer.prototype.onAdd.call(this, t)
                    },
                    getTileUrl: function(t) {
                        var e = this._tileCoordsToBounds(t),
                            i = this._crs.project(e.getNorthWest()),
                            n = this._crs.project(e.getSouthEast()),
                            o = (this._wmsVersion >= 1.3 && this._crs === r.CRS.EPSG4326 ? [n.y, i.x, i.y, n.x] : [i.x, n.y, n.x, i.y]).join(","),
                            s = r.TileLayer.prototype.getTileUrl.call(this, t);
                        return s + r.Util.getParamString(this.wmsParams, s, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + o
                    },
                    setParams: function(t, e) {
                        return r.extend(this.wmsParams, t), e || this.redraw(), this
                    }
                }), r.tileLayer.wms = function(t, e) {
                    return new r.TileLayer.WMS(t, e)
                }, r.ImageOverlay = r.Layer.extend({
                    options: {
                        opacity: 1,
                        alt: "",
                        interactive: !1,
                        crossOrigin: !1
                    },
                    initialize: function(t, e, i) {
                        this._url = t, this._bounds = r.latLngBounds(e), r.setOptions(this, i)
                    },
                    onAdd: function() {
                        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (r.DomUtil.addClass(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset()
                    },
                    onRemove: function() {
                        r.DomUtil.remove(this._image), this.options.interactive && this.removeInteractiveTarget(this._image)
                    },
                    setOpacity: function(t) {
                        return this.options.opacity = t, this._image && this._updateOpacity(), this
                    },
                    setStyle: function(t) {
                        return t.opacity && this.setOpacity(t.opacity), this
                    },
                    bringToFront: function() {
                        return this._map && r.DomUtil.toFront(this._image), this
                    },
                    bringToBack: function() {
                        return this._map && r.DomUtil.toBack(this._image), this
                    },
                    setUrl: function(t) {
                        return this._url = t, this._image && (this._image.src = t), this
                    },
                    setBounds: function(t) {
                        return this._bounds = t, this._map && this._reset(), this
                    },
                    getEvents: function() {
                        var t = {
                            zoom: this._reset,
                            viewreset: this._reset
                        };
                        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
                    },
                    getBounds: function() {
                        return this._bounds
                    },
                    getElement: function() {
                        return this._image
                    },
                    _initImage: function() {
                        var t = this._image = r.DomUtil.create("img", "leaflet-image-layer " + (this._zoomAnimated ? "leaflet-zoom-animated" : ""));
                        t.onselectstart = r.Util.falseFn, t.onmousemove = r.Util.falseFn, t.onload = r.bind(this.fire, this, "load"), this.options.crossOrigin && (t.crossOrigin = ""), t.src = this._url, t.alt = this.options.alt
                    },
                    _animateZoom: function(t) {
                        var e = this._map.getZoomScale(t.zoom),
                            i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
                        r.DomUtil.setTransform(this._image, i, e)
                    },
                    _reset: function() {
                        var t = this._image,
                            e = new r.Bounds(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
                            i = e.getSize();
                        r.DomUtil.setPosition(t, e.min), t.style.width = i.x + "px", t.style.height = i.y + "px"
                    },
                    _updateOpacity: function() {
                        r.DomUtil.setOpacity(this._image, this.options.opacity)
                    }
                }), r.imageOverlay = function(t, e, i) {
                    return new r.ImageOverlay(t, e, i)
                }, r.Icon = r.Class.extend({
                    initialize: function(t) {
                        r.setOptions(this, t)
                    },
                    createIcon: function(t) {
                        return this._createIcon("icon", t)
                    },
                    createShadow: function(t) {
                        return this._createIcon("shadow", t)
                    },
                    _createIcon: function(t, e) {
                        var i = this._getIconUrl(t);
                        if (!i) {
                            if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                            return null
                        }
                        var n = this._createImg(i, e && "IMG" === e.tagName ? e : null);
                        return this._setIconStyles(n, t), n
                    },
                    _setIconStyles: function(t, e) {
                        var i = this.options,
                            n = i[e + "Size"];
                        "number" == typeof n && (n = [n, n]);
                        var o = r.point(n),
                            s = r.point("shadow" === e && i.shadowAnchor || i.iconAnchor || o && o.divideBy(2, !0));
                        t.className = "leaflet-marker-" + e + " " + (i.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px")
                    },
                    _createImg: function(t, e) {
                        return (e = e || n.createElement("img")).src = t, e
                    },
                    _getIconUrl: function(t) {
                        return r.Browser.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
                    }
                }), r.icon = function(t) {
                    return new r.Icon(t)
                }, r.Icon.Default = r.Icon.extend({
                    options: {
                        iconUrl: "marker-icon.png",
                        iconRetinaUrl: "marker-icon-2x.png",
                        shadowUrl: "marker-shadow.png",
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        tooltipAnchor: [16, -28],
                        shadowSize: [41, 41]
                    },
                    _getIconUrl: function(t) {
                        return r.Icon.Default.imagePath || (r.Icon.Default.imagePath = this._detectIconPath()), (this.options.imagePath || r.Icon.Default.imagePath) + r.Icon.prototype._getIconUrl.call(this, t)
                    },
                    _detectIconPath: function() {
                        var t = r.DomUtil.create("div", "leaflet-default-icon-path", n.body),
                            e = r.DomUtil.getStyle(t, "background-image") || r.DomUtil.getStyle(t, "backgroundImage");
                        return n.body.removeChild(t), 0 === e.indexOf("url") ? e.replace(/^url\([\"\']?/, "").replace(/marker-icon\.png[\"\']?\)$/, "") : ""
                    }
                }), r.Marker = r.Layer.extend({
                    options: {
                        icon: new r.Icon.Default,
                        interactive: !0,
                        draggable: !1,
                        keyboard: !0,
                        title: "",
                        alt: "",
                        zIndexOffset: 0,
                        opacity: 1,
                        riseOnHover: !1,
                        riseOffset: 250,
                        pane: "markerPane",
                        nonBubblingEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"]
                    },
                    initialize: function(t, e) {
                        r.setOptions(this, e), this._latlng = r.latLng(t)
                    },
                    onAdd: function(t) {
                        this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update()
                    },
                    onRemove: function(t) {
                        this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow()
                    },
                    getEvents: function() {
                        return {
                            zoom: this.update,
                            viewreset: this.update
                        }
                    },
                    getLatLng: function() {
                        return this._latlng
                    },
                    setLatLng: function(t) {
                        var e = this._latlng;
                        return this._latlng = r.latLng(t), this.update(), this.fire("move", {
                            oldLatLng: e,
                            latlng: this._latlng
                        })
                    },
                    setZIndexOffset: function(t) {
                        return this.options.zIndexOffset = t, this.update()
                    },
                    setIcon: function(t) {
                        return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this
                    },
                    getElement: function() {
                        return this._icon
                    },
                    update: function() {
                        if (this._icon) {
                            var t = this._map.latLngToLayerPoint(this._latlng).round();
                            this._setPos(t)
                        }
                        return this
                    },
                    _initIcon: function() {
                        var t = this.options,
                            e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                            i = t.icon.createIcon(this._icon),
                            n = !1;
                        i !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (i.title = t.title), t.alt && (i.alt = t.alt)), r.DomUtil.addClass(i, e), t.keyboard && (i.tabIndex = "0"), this._icon = i, t.riseOnHover && this.on({
                            mouseover: this._bringToFront,
                            mouseout: this._resetZIndex
                        });
                        var o = t.icon.createShadow(this._shadow),
                            s = !1;
                        o !== this._shadow && (this._removeShadow(), s = !0), o && (r.DomUtil.addClass(o, e), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && s && this.getPane("shadowPane").appendChild(this._shadow)
                    },
                    _removeIcon: function() {
                        this.options.riseOnHover && this.off({
                            mouseover: this._bringToFront,
                            mouseout: this._resetZIndex
                        }), r.DomUtil.remove(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null
                    },
                    _removeShadow: function() {
                        this._shadow && r.DomUtil.remove(this._shadow), this._shadow = null
                    },
                    _setPos: function(t) {
                        r.DomUtil.setPosition(this._icon, t), this._shadow && r.DomUtil.setPosition(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
                    },
                    _updateZIndex: function(t) {
                        this._icon.style.zIndex = this._zIndex + t
                    },
                    _animateZoom: function(t) {
                        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                        this._setPos(e)
                    },
                    _initInteraction: function() {
                        if (this.options.interactive && (r.DomUtil.addClass(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), r.Handler.MarkerDrag)) {
                            var t = this.options.draggable;
                            this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new r.Handler.MarkerDrag(this), t && this.dragging.enable()
                        }
                    },
                    setOpacity: function(t) {
                        return this.options.opacity = t, this._map && this._updateOpacity(), this
                    },
                    _updateOpacity: function() {
                        var t = this.options.opacity;
                        r.DomUtil.setOpacity(this._icon, t), this._shadow && r.DomUtil.setOpacity(this._shadow, t)
                    },
                    _bringToFront: function() {
                        this._updateZIndex(this.options.riseOffset)
                    },
                    _resetZIndex: function() {
                        this._updateZIndex(0)
                    },
                    _getPopupAnchor: function() {
                        return this.options.icon.options.popupAnchor || [0, 0]
                    },
                    _getTooltipAnchor: function() {
                        return this.options.icon.options.tooltipAnchor || [0, 0]
                    }
                }), r.marker = function(t, e) {
                    return new r.Marker(t, e)
                }, r.DivIcon = r.Icon.extend({
                    options: {
                        iconSize: [12, 12],
                        html: !1,
                        bgPos: null,
                        className: "leaflet-div-icon"
                    },
                    createIcon: function(t) {
                        var e = t && "DIV" === t.tagName ? t : n.createElement("div"),
                            i = this.options;
                        if (e.innerHTML = !1 !== i.html ? i.html : "", i.bgPos) {
                            var o = r.point(i.bgPos);
                            e.style.backgroundPosition = -o.x + "px " + -o.y + "px"
                        }
                        return this._setIconStyles(e, "icon"), e
                    },
                    createShadow: function() {
                        return null
                    }
                }), r.divIcon = function(t) {
                    return new r.DivIcon(t)
                }, r.DivOverlay = r.Layer.extend({
                    options: {
                        offset: [0, 7],
                        className: "",
                        pane: "popupPane"
                    },
                    initialize: function(t, e) {
                        r.setOptions(this, t), this._source = e
                    },
                    onAdd: function(t) {
                        this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && r.DomUtil.setOpacity(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && r.DomUtil.setOpacity(this._container, 1), this.bringToFront()
                    },
                    onRemove: function(t) {
                        t._fadeAnimated ? (r.DomUtil.setOpacity(this._container, 0), this._removeTimeout = setTimeout(r.bind(r.DomUtil.remove, r.DomUtil, this._container), 200)) : r.DomUtil.remove(this._container)
                    },
                    getLatLng: function() {
                        return this._latlng
                    },
                    setLatLng: function(t) {
                        return this._latlng = r.latLng(t), this._map && (this._updatePosition(), this._adjustPan()), this
                    },
                    getContent: function() {
                        return this._content
                    },
                    setContent: function(t) {
                        return this._content = t, this.update(), this
                    },
                    getElement: function() {
                        return this._container
                    },
                    update: function() {
                        this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
                    },
                    getEvents: function() {
                        var t = {
                            zoom: this._updatePosition,
                            viewreset: this._updatePosition
                        };
                        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
                    },
                    isOpen: function() {
                        return !!this._map && this._map.hasLayer(this)
                    },
                    bringToFront: function() {
                        return this._map && r.DomUtil.toFront(this._container), this
                    },
                    bringToBack: function() {
                        return this._map && r.DomUtil.toBack(this._container), this
                    },
                    _updateContent: function() {
                        if (this._content) {
                            var t = this._contentNode,
                                e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                            if ("string" == typeof e) t.innerHTML = e;
                            else {
                                for (; t.hasChildNodes();) t.removeChild(t.firstChild);
                                t.appendChild(e)
                            }
                            this.fire("contentupdate")
                        }
                    },
                    _updatePosition: function() {
                        if (this._map) {
                            var t = this._map.latLngToLayerPoint(this._latlng),
                                e = r.point(this.options.offset),
                                i = this._getAnchor();
                            this._zoomAnimated ? r.DomUtil.setPosition(this._container, t.add(i)) : e = e.add(t).add(i);
                            var n = this._containerBottom = -e.y,
                                o = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
                            this._container.style.bottom = n + "px", this._container.style.left = o + "px"
                        }
                    },
                    _getAnchor: function() {
                        return [0, 0]
                    }
                }), r.Popup = r.DivOverlay.extend({
                    options: {
                        maxWidth: 300,
                        minWidth: 50,
                        maxHeight: null,
                        autoPan: !0,
                        autoPanPaddingTopLeft: null,
                        autoPanPaddingBottomRight: null,
                        autoPanPadding: [5, 5],
                        keepInView: !1,
                        closeButton: !0,
                        autoClose: !0,
                        className: ""
                    },
                    openOn: function(t) {
                        return t.openPopup(this), this
                    },
                    onAdd: function(t) {
                        r.DivOverlay.prototype.onAdd.call(this, t), t.fire("popupopen", {
                            popup: this
                        }), this._source && (this._source.fire("popupopen", {
                            popup: this
                        }, !0), this._source instanceof r.Path || this._source.on("preclick", r.DomEvent.stopPropagation))
                    },
                    onRemove: function(t) {
                        r.DivOverlay.prototype.onRemove.call(this, t), t.fire("popupclose", {
                            popup: this
                        }), this._source && (this._source.fire("popupclose", {
                            popup: this
                        }, !0), this._source instanceof r.Path || this._source.off("preclick", r.DomEvent.stopPropagation))
                    },
                    getEvents: function() {
                        var t = r.DivOverlay.prototype.getEvents.call(this);
                        return ("closeOnClick" in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
                    },
                    _close: function() {
                        this._map && this._map.closePopup(this)
                    },
                    _initLayout: function() {
                        var t = "leaflet-popup",
                            e = this._container = r.DomUtil.create("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated");
                        if (this.options.closeButton) {
                            var i = this._closeButton = r.DomUtil.create("a", t + "-close-button", e);
                            i.href = "#close", i.innerHTML = "&#215;", r.DomEvent.on(i, "click", this._onCloseButtonClick, this)
                        }
                        var n = this._wrapper = r.DomUtil.create("div", t + "-content-wrapper", e);
                        this._contentNode = r.DomUtil.create("div", t + "-content", n), r.DomEvent.disableClickPropagation(n).disableScrollPropagation(this._contentNode).on(n, "contextmenu", r.DomEvent.stopPropagation), this._tipContainer = r.DomUtil.create("div", t + "-tip-container", e), this._tip = r.DomUtil.create("div", t + "-tip", this._tipContainer)
                    },
                    _updateLayout: function() {
                        var t = this._contentNode,
                            e = t.style;
                        e.width = "", e.whiteSpace = "nowrap";
                        var i = t.offsetWidth;
                        i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
                        var n = t.offsetHeight,
                            o = this.options.maxHeight;
                        o && n > o ? (e.height = o + "px", r.DomUtil.addClass(t, "leaflet-popup-scrolled")) : r.DomUtil.removeClass(t, "leaflet-popup-scrolled"), this._containerWidth = this._container.offsetWidth
                    },
                    _animateZoom: function(t) {
                        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
                            i = this._getAnchor();
                        r.DomUtil.setPosition(this._container, e.add(i))
                    },
                    _adjustPan: function() {
                        if (!(!this.options.autoPan || this._map._panAnim && this._map._panAnim._inProgress)) {
                            var t = this._map,
                                e = parseInt(r.DomUtil.getStyle(this._container, "marginBottom"), 10) || 0,
                                i = this._container.offsetHeight + e,
                                n = this._containerWidth,
                                o = new r.Point(this._containerLeft, -i - this._containerBottom);
                            o._add(r.DomUtil.getPosition(this._container));
                            var s = t.layerPointToContainerPoint(o),
                                a = r.point(this.options.autoPanPadding),
                                l = r.point(this.options.autoPanPaddingTopLeft || a),
                                c = r.point(this.options.autoPanPaddingBottomRight || a),
                                u = t.getSize(),
                                h = 0,
                                p = 0;
                            s.x + n + c.x > u.x && (h = s.x + n - u.x + c.x), s.x - h - l.x < 0 && (h = s.x - l.x), s.y + i + c.y > u.y && (p = s.y + i - u.y + c.y), s.y - p - l.y < 0 && (p = s.y - l.y), (h || p) && t.fire("autopanstart").panBy([h, p])
                        }
                    },
                    _onCloseButtonClick: function(t) {
                        this._close(), r.DomEvent.stop(t)
                    },
                    _getAnchor: function() {
                        return r.point(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
                    }
                }), r.popup = function(t, e) {
                    return new r.Popup(t, e)
                }, r.Map.mergeOptions({
                    closePopupOnClick: !0
                }), r.Map.include({
                    openPopup: function(t, e, i) {
                        return t instanceof r.Popup || (t = new r.Popup(i).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t))
                    },
                    closePopup: function(t) {
                        return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this
                    }
                }), r.Layer.include({
                    bindPopup: function(t, e) {
                        return t instanceof r.Popup ? (r.setOptions(t, e), this._popup = t, t._source = this) : (this._popup && !e || (this._popup = new r.Popup(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
                            click: this._openPopup,
                            remove: this.closePopup,
                            move: this._movePopup
                        }), this._popupHandlersAdded = !0), this
                    },
                    unbindPopup: function() {
                        return this._popup && (this.off({
                            click: this._openPopup,
                            remove: this.closePopup,
                            move: this._movePopup
                        }), this._popupHandlersAdded = !1, this._popup = null), this
                    },
                    openPopup: function(t, e) {
                        if (t instanceof r.Layer || (e = t, t = this), t instanceof r.FeatureGroup)
                            for (var i in this._layers) {
                                t = this._layers[i];
                                break
                            }
                        return e || (e = t.getCenter ? t.getCenter() : t.getLatLng()), this._popup && this._map && (this._popup._source = t, this._popup.update(), this._map.openPopup(this._popup, e)), this
                    },
                    closePopup: function() {
                        return this._popup && this._popup._close(), this
                    },
                    togglePopup: function(t) {
                        return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this
                    },
                    isPopupOpen: function() {
                        return !!this._popup && this._popup.isOpen()
                    },
                    setPopupContent: function(t) {
                        return this._popup && this._popup.setContent(t), this
                    },
                    getPopup: function() {
                        return this._popup
                    },
                    _openPopup: function(t) {
                        var e = t.layer || t.target;
                        this._popup && this._map && (r.DomEvent.stop(t), e instanceof r.Path ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === e ? this.closePopup() : this.openPopup(e, t.latlng))
                    },
                    _movePopup: function(t) {
                        this._popup.setLatLng(t.latlng)
                    }
                }), r.Tooltip = r.DivOverlay.extend({
                    options: {
                        pane: "tooltipPane",
                        offset: [0, 0],
                        direction: "auto",
                        permanent: !1,
                        sticky: !1,
                        interactive: !1,
                        opacity: .9
                    },
                    onAdd: function(t) {
                        r.DivOverlay.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
                            tooltip: this
                        }), this._source && this._source.fire("tooltipopen", {
                            tooltip: this
                        }, !0)
                    },
                    onRemove: function(t) {
                        r.DivOverlay.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
                            tooltip: this
                        }), this._source && this._source.fire("tooltipclose", {
                            tooltip: this
                        }, !0)
                    },
                    getEvents: function() {
                        var t = r.DivOverlay.prototype.getEvents.call(this);
                        return r.Browser.touch && !this.options.permanent && (t.preclick = this._close), t
                    },
                    _close: function() {
                        this._map && this._map.closeTooltip(this)
                    },
                    _initLayout: function() {
                        var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
                        this._contentNode = this._container = r.DomUtil.create("div", t)
                    },
                    _updateLayout: function() {},
                    _adjustPan: function() {},
                    _setPosition: function(t) {
                        var e = this._map,
                            i = this._container,
                            n = e.latLngToContainerPoint(e.getCenter()),
                            o = e.layerPointToContainerPoint(t),
                            s = this.options.direction,
                            a = i.offsetWidth,
                            l = i.offsetHeight,
                            c = r.point(this.options.offset),
                            u = this._getAnchor();
                        "top" === s ? t = t.add(r.point(-a / 2 + c.x, -l + c.y + u.y, !0)) : "bottom" === s ? t = t.subtract(r.point(a / 2 - c.x, -c.y, !0)) : "center" === s ? t = t.subtract(r.point(a / 2 + c.x, l / 2 - u.y + c.y, !0)) : "right" === s || "auto" === s && o.x < n.x ? (s = "right", t = t.add(r.point(c.x + u.x, u.y - l / 2 + c.y, !0))) : (s = "left", t = t.subtract(r.point(a + u.x - c.x, l / 2 - u.y - c.y, !0))), r.DomUtil.removeClass(i, "leaflet-tooltip-right"), r.DomUtil.removeClass(i, "leaflet-tooltip-left"), r.DomUtil.removeClass(i, "leaflet-tooltip-top"), r.DomUtil.removeClass(i, "leaflet-tooltip-bottom"), r.DomUtil.addClass(i, "leaflet-tooltip-" + s), r.DomUtil.setPosition(i, t)
                    },
                    _updatePosition: function() {
                        var t = this._map.latLngToLayerPoint(this._latlng);
                        this._setPosition(t)
                    },
                    setOpacity: function(t) {
                        this.options.opacity = t, this._container && r.DomUtil.setOpacity(this._container, t)
                    },
                    _animateZoom: function(t) {
                        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
                        this._setPosition(e)
                    },
                    _getAnchor: function() {
                        return r.point(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
                    }
                }), r.tooltip = function(t, e) {
                    return new r.Tooltip(t, e)
                }, r.Map.include({
                    openTooltip: function(t, e, i) {
                        return t instanceof r.Tooltip || (t = new r.Tooltip(i).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : this.addLayer(t)
                    },
                    closeTooltip: function(t) {
                        return t && this.removeLayer(t), this
                    }
                }), r.Layer.include({
                    bindTooltip: function(t, e) {
                        return t instanceof r.Tooltip ? (r.setOptions(t, e), this._tooltip = t, t._source = this) : (this._tooltip && !e || (this._tooltip = r.tooltip(e, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this
                    },
                    unbindTooltip: function() {
                        return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this
                    },
                    _initTooltipInteractions: function(t) {
                        if (t || !this._tooltipHandlersAdded) {
                            var e = t ? "off" : "on",
                                i = {
                                    remove: this.closeTooltip,
                                    move: this._moveTooltip
                                };
                            this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip, i.mouseout = this.closeTooltip, this._tooltip.options.sticky && (i.mousemove = this._moveTooltip), r.Browser.touch && (i.click = this._openTooltip)), this[e](i), this._tooltipHandlersAdded = !t
                        }
                    },
                    openTooltip: function(t, e) {
                        if (t instanceof r.Layer || (e = t, t = this), t instanceof r.FeatureGroup)
                            for (var i in this._layers) {
                                t = this._layers[i];
                                break
                            }
                        return e || (e = t.getCenter ? t.getCenter() : t.getLatLng()), this._tooltip && this._map && (this._tooltip._source = t, this._tooltip.update(), this._map.openTooltip(this._tooltip, e), this._tooltip.options.interactive && this._tooltip._container && (r.DomUtil.addClass(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this
                    },
                    closeTooltip: function() {
                        return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (r.DomUtil.removeClass(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this
                    },
                    toggleTooltip: function(t) {
                        return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this
                    },
                    isTooltipOpen: function() {
                        return this._tooltip.isOpen()
                    },
                    setTooltipContent: function(t) {
                        return this._tooltip && this._tooltip.setContent(t), this
                    },
                    getTooltip: function() {
                        return this._tooltip
                    },
                    _openTooltip: function(t) {
                        var e = t.layer || t.target;
                        this._tooltip && this._map && this.openTooltip(e, this._tooltip.options.sticky ? t.latlng : void 0)
                    },
                    _moveTooltip: function(t) {
                        var e, i, n = t.latlng;
                        this._tooltip.options.sticky && t.originalEvent && (e = this._map.mouseEventToContainerPoint(t.originalEvent), i = this._map.containerPointToLayerPoint(e), n = this._map.layerPointToLatLng(i)), this._tooltip.setLatLng(n)
                    }
                }), r.LayerGroup = r.Layer.extend({
                    initialize: function(t) {
                        var e, i;
                        if (this._layers = {}, t)
                            for (e = 0, i = t.length; e < i; e++) this.addLayer(t[e])
                    },
                    addLayer: function(t) {
                        var e = this.getLayerId(t);
                        return this._layers[e] = t, this._map && this._map.addLayer(t), this
                    },
                    removeLayer: function(t) {
                        var e = t in this._layers ? t : this.getLayerId(t);
                        return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
                    },
                    hasLayer: function(t) {
                        return !!t && (t in this._layers || this.getLayerId(t) in this._layers)
                    },
                    clearLayers: function() {
                        for (var t in this._layers) this.removeLayer(this._layers[t]);
                        return this
                    },
                    invoke: function(t) {
                        var e, i, n = Array.prototype.slice.call(arguments, 1);
                        for (e in this._layers)(i = this._layers[e])[t] && i[t].apply(i, n);
                        return this
                    },
                    onAdd: function(t) {
                        for (var e in this._layers) t.addLayer(this._layers[e])
                    },
                    onRemove: function(t) {
                        for (var e in this._layers) t.removeLayer(this._layers[e])
                    },
                    eachLayer: function(t, e) {
                        for (var i in this._layers) t.call(e, this._layers[i]);
                        return this
                    },
                    getLayer: function(t) {
                        return this._layers[t]
                    },
                    getLayers: function() {
                        var t = [];
                        for (var e in this._layers) t.push(this._layers[e]);
                        return t
                    },
                    setZIndex: function(t) {
                        return this.invoke("setZIndex", t)
                    },
                    getLayerId: function(t) {
                        return r.stamp(t)
                    }
                }), r.layerGroup = function(t) {
                    return new r.LayerGroup(t)
                }, r.FeatureGroup = r.LayerGroup.extend({
                    addLayer: function(t) {
                        return this.hasLayer(t) ? this : (t.addEventParent(this), r.LayerGroup.prototype.addLayer.call(this, t), this.fire("layeradd", {
                            layer: t
                        }))
                    },
                    removeLayer: function(t) {
                        return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), r.LayerGroup.prototype.removeLayer.call(this, t), this.fire("layerremove", {
                            layer: t
                        })) : this
                    },
                    setStyle: function(t) {
                        return this.invoke("setStyle", t)
                    },
                    bringToFront: function() {
                        return this.invoke("bringToFront")
                    },
                    bringToBack: function() {
                        return this.invoke("bringToBack")
                    },
                    getBounds: function() {
                        var t = new r.LatLngBounds;
                        for (var e in this._layers) {
                            var i = this._layers[e];
                            t.extend(i.getBounds ? i.getBounds() : i.getLatLng())
                        }
                        return t
                    }
                }), r.featureGroup = function(t) {
                    return new r.FeatureGroup(t)
                }, r.Renderer = r.Layer.extend({
                    options: {
                        padding: .1
                    },
                    initialize: function(t) {
                        r.setOptions(this, t), r.stamp(this), this._layers = this._layers || {}
                    },
                    onAdd: function() {
                        this._container || (this._initContainer(), this._zoomAnimated && r.DomUtil.addClass(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this)
                    },
                    onRemove: function() {
                        r.DomUtil.remove(this._container), this.off("update", this._updatePaths, this)
                    },
                    getEvents: function() {
                        var t = {
                            viewreset: this._reset,
                            zoom: this._onZoom,
                            moveend: this._update,
                            zoomend: this._onZoomEnd
                        };
                        return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t
                    },
                    _onAnimZoom: function(t) {
                        this._updateTransform(t.center, t.zoom)
                    },
                    _onZoom: function() {
                        this._updateTransform(this._map.getCenter(), this._map.getZoom())
                    },
                    _updateTransform: function(t, e) {
                        var i = this._map.getZoomScale(e, this._zoom),
                            n = r.DomUtil.getPosition(this._container),
                            o = this._map.getSize().multiplyBy(.5 + this.options.padding),
                            s = this._map.project(this._center, e),
                            a = this._map.project(t, e).subtract(s),
                            l = o.multiplyBy(-i).add(n).add(o).subtract(a);
                        r.Browser.any3d ? r.DomUtil.setTransform(this._container, l, i) : r.DomUtil.setPosition(this._container, l)
                    },
                    _reset: function() {
                        for (var t in this._update(), this._updateTransform(this._center, this._zoom), this._layers) this._layers[t]._reset()
                    },
                    _onZoomEnd: function() {
                        for (var t in this._layers) this._layers[t]._project()
                    },
                    _updatePaths: function() {
                        for (var t in this._layers) this._layers[t]._update()
                    },
                    _update: function() {
                        var t = this.options.padding,
                            e = this._map.getSize(),
                            i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
                        this._bounds = new r.Bounds(i, i.add(e.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom()
                    }
                }), r.Map.include({
                    getRenderer: function(t) {
                        var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
                        return e || (e = this._renderer = this.options.preferCanvas && r.canvas() || r.svg()), this.hasLayer(e) || this.addLayer(e), e
                    },
                    _getPaneRenderer: function(t) {
                        if ("overlayPane" === t || void 0 === t) return !1;
                        var e = this._paneRenderers[t];
                        return void 0 === e && (e = r.SVG && r.svg({
                            pane: t
                        }) || r.Canvas && r.canvas({
                            pane: t
                        }), this._paneRenderers[t] = e), e
                    }
                }), r.Path = r.Layer.extend({
                    options: {
                        stroke: !0,
                        color: "#3388ff",
                        weight: 3,
                        opacity: 1,
                        lineCap: "round",
                        lineJoin: "round",
                        dashArray: null,
                        dashOffset: null,
                        fill: !1,
                        fillColor: null,
                        fillOpacity: .2,
                        fillRule: "evenodd",
                        interactive: !0
                    },
                    beforeAdd: function(t) {
                        this._renderer = t.getRenderer(this)
                    },
                    onAdd: function() {
                        this._renderer._initPath(this), this._reset(), this._renderer._addPath(this)
                    },
                    onRemove: function() {
                        this._renderer._removePath(this)
                    },
                    redraw: function() {
                        return this._map && this._renderer._updatePath(this), this
                    },
                    setStyle: function(t) {
                        return r.setOptions(this, t), this._renderer && this._renderer._updateStyle(this), this
                    },
                    bringToFront: function() {
                        return this._renderer && this._renderer._bringToFront(this), this
                    },
                    bringToBack: function() {
                        return this._renderer && this._renderer._bringToBack(this), this
                    },
                    getElement: function() {
                        return this._path
                    },
                    _reset: function() {
                        this._project(), this._update()
                    },
                    _clickTolerance: function() {
                        return (this.options.stroke ? this.options.weight / 2 : 0) + (r.Browser.touch ? 10 : 0)
                    }
                }), r.LineUtil = {
                    simplify: function(t, e) {
                        if (!e || !t.length) return t.slice();
                        var i = e * e;
                        return t = this._reducePoints(t, i), t = this._simplifyDP(t, i)
                    },
                    pointToSegmentDistance: function(t, e, i) {
                        return Math.sqrt(this._sqClosestPointOnSegment(t, e, i, !0))
                    },
                    closestPointOnSegment: function(t, e, i) {
                        return this._sqClosestPointOnSegment(t, e, i)
                    },
                    _simplifyDP: function(t, e) {
                        var i = t.length,
                            n = new(typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(i);
                        n[0] = n[i - 1] = 1, this._simplifyDPStep(t, n, e, 0, i - 1);
                        var o, r = [];
                        for (o = 0; o < i; o++) n[o] && r.push(t[o]);
                        return r
                    },
                    _simplifyDPStep: function(t, e, i, n, o) {
                        var r, s, a, l = 0;
                        for (s = n + 1; s <= o - 1; s++)(a = this._sqClosestPointOnSegment(t[s], t[n], t[o], !0)) > l && (r = s, l = a);
                        l > i && (e[r] = 1, this._simplifyDPStep(t, e, i, n, r), this._simplifyDPStep(t, e, i, r, o))
                    },
                    _reducePoints: function(t, e) {
                        for (var i = [t[0]], n = 1, o = 0, r = t.length; n < r; n++) this._sqDist(t[n], t[o]) > e && (i.push(t[n]), o = n);
                        return o < r - 1 && i.push(t[r - 1]), i
                    },
                    clipSegment: function(t, e, i, n, o) {
                        var r, s, a, l = n ? this._lastCode : this._getBitCode(t, i),
                            c = this._getBitCode(e, i);
                        for (this._lastCode = c;;) {
                            if (!(l | c)) return [t, e];
                            if (l & c) return !1;
                            r = l || c, s = this._getEdgeIntersection(t, e, r, i, o), a = this._getBitCode(s, i), r === l ? (t = s, l = a) : (e = s, c = a)
                        }
                    },
                    _getEdgeIntersection: function(t, e, i, n, o) {
                        var s, a, l = e.x - t.x,
                            c = e.y - t.y,
                            u = n.min,
                            h = n.max;
                        return 8 & i ? (s = t.x + l * (h.y - t.y) / c, a = h.y) : 4 & i ? (s = t.x + l * (u.y - t.y) / c, a = u.y) : 2 & i ? (s = h.x, a = t.y + c * (h.x - t.x) / l) : 1 & i && (s = u.x, a = t.y + c * (u.x - t.x) / l), new r.Point(s, a, o)
                    },
                    _getBitCode: function(t, e) {
                        var i = 0;
                        return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i
                    },
                    _sqDist: function(t, e) {
                        var i = e.x - t.x,
                            n = e.y - t.y;
                        return i * i + n * n
                    },
                    _sqClosestPointOnSegment: function(t, e, i, n) {
                        var o, s = e.x,
                            a = e.y,
                            l = i.x - s,
                            c = i.y - a,
                            u = l * l + c * c;
                        return u > 0 && ((o = ((t.x - s) * l + (t.y - a) * c) / u) > 1 ? (s = i.x, a = i.y) : o > 0 && (s += l * o, a += c * o)), l = t.x - s, c = t.y - a, n ? l * l + c * c : new r.Point(s, a)
                    }
                }, r.Polyline = r.Path.extend({
                    options: {
                        smoothFactor: 1,
                        noClip: !1
                    },
                    initialize: function(t, e) {
                        r.setOptions(this, e), this._setLatLngs(t)
                    },
                    getLatLngs: function() {
                        return this._latlngs
                    },
                    setLatLngs: function(t) {
                        return this._setLatLngs(t), this.redraw()
                    },
                    isEmpty: function() {
                        return !this._latlngs.length
                    },
                    closestLayerPoint: function(t) {
                        for (var e, i, n = 1 / 0, o = null, s = r.LineUtil._sqClosestPointOnSegment, a = 0, l = this._parts.length; a < l; a++)
                            for (var c = this._parts[a], u = 1, h = c.length; u < h; u++) {
                                var p = s(t, e = c[u - 1], i = c[u], !0);
                                p < n && (n = p, o = s(t, e, i))
                            }
                        return o && (o.distance = Math.sqrt(n)), o
                    },
                    getCenter: function() {
                        if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                        var t, e, i, n, o, r, s, a = this._rings[0],
                            l = a.length;
                        if (!l) return null;
                        for (t = 0, e = 0; t < l - 1; t++) e += a[t].distanceTo(a[t + 1]) / 2;
                        if (0 === e) return this._map.layerPointToLatLng(a[0]);
                        for (t = 0, n = 0; t < l - 1; t++)
                            if (o = a[t], r = a[t + 1], (n += i = o.distanceTo(r)) > e) return s = (n - e) / i, this._map.layerPointToLatLng([r.x - s * (r.x - o.x), r.y - s * (r.y - o.y)])
                    },
                    getBounds: function() {
                        return this._bounds
                    },
                    addLatLng: function(t, e) {
                        return e = e || this._defaultShape(), t = r.latLng(t), e.push(t), this._bounds.extend(t), this.redraw()
                    },
                    _setLatLngs: function(t) {
                        this._bounds = new r.LatLngBounds, this._latlngs = this._convertLatLngs(t)
                    },
                    _defaultShape: function() {
                        return r.Polyline._flat(this._latlngs) ? this._latlngs : this._latlngs[0]
                    },
                    _convertLatLngs: function(t) {
                        for (var e = [], i = r.Polyline._flat(t), n = 0, o = t.length; n < o; n++) i ? (e[n] = r.latLng(t[n]), this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
                        return e
                    },
                    _project: function() {
                        var t = new r.Bounds;
                        this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t);
                        var e = this._clickTolerance(),
                            i = new r.Point(e, e);
                        this._bounds.isValid() && t.isValid() && (t.min._subtract(i), t.max._add(i), this._pxBounds = t)
                    },
                    _projectLatlngs: function(t, e, i) {
                        var n, o, s = t[0] instanceof r.LatLng,
                            a = t.length;
                        if (s) {
                            for (o = [], n = 0; n < a; n++) o[n] = this._map.latLngToLayerPoint(t[n]), i.extend(o[n]);
                            e.push(o)
                        } else
                            for (n = 0; n < a; n++) this._projectLatlngs(t[n], e, i)
                    },
                    _clipPoints: function() {
                        var t = this._renderer._bounds;
                        if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                            if (this.options.noClip) this._parts = this._rings;
                            else {
                                var e, i, n, o, s, a, l, c = this._parts;
                                for (e = 0, n = 0, o = this._rings.length; e < o; e++)
                                    for (i = 0, s = (l = this._rings[e]).length; i < s - 1; i++)(a = r.LineUtil.clipSegment(l[i], l[i + 1], t, i, !0)) && (c[n] = c[n] || [], c[n].push(a[0]), a[1] === l[i + 1] && i !== s - 2 || (c[n].push(a[1]), n++))
                            }
                    },
                    _simplifyPoints: function() {
                        for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++) t[i] = r.LineUtil.simplify(t[i], e)
                    },
                    _update: function() {
                        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
                    },
                    _updatePath: function() {
                        this._renderer._updatePoly(this)
                    }
                }), r.polyline = function(t, e) {
                    return new r.Polyline(t, e)
                }, r.Polyline._flat = function(t) {
                    return !r.Util.isArray(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
                }, r.PolyUtil = {}, r.PolyUtil.clipPolygon = function(t, e, i) {
                    var n, o, s, a, l, c, u, h, p, d = [1, 4, 2, 8],
                        f = r.LineUtil;
                    for (o = 0, u = t.length; o < u; o++) t[o]._code = f._getBitCode(t[o], e);
                    for (a = 0; a < 4; a++) {
                        for (h = d[a], n = [], o = 0, s = (u = t.length) - 1; o < u; s = o++) l = t[o], c = t[s], l._code & h ? c._code & h || ((p = f._getEdgeIntersection(c, l, h, e, i))._code = f._getBitCode(p, e), n.push(p)) : (c._code & h && ((p = f._getEdgeIntersection(c, l, h, e, i))._code = f._getBitCode(p, e), n.push(p)), n.push(l));
                        t = n
                    }
                    return t
                }, r.Polygon = r.Polyline.extend({
                    options: {
                        fill: !0
                    },
                    isEmpty: function() {
                        return !this._latlngs.length || !this._latlngs[0].length
                    },
                    getCenter: function() {
                        if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                        var t, e, i, n, o, r, s, a, l, c = this._rings[0],
                            u = c.length;
                        if (!u) return null;
                        for (r = s = a = 0, t = 0, e = u - 1; t < u; e = t++) i = c[t], n = c[e], o = i.y * n.x - n.y * i.x, s += (i.x + n.x) * o, a += (i.y + n.y) * o, r += 3 * o;
                        return l = 0 === r ? c[0] : [s / r, a / r], this._map.layerPointToLatLng(l)
                    },
                    _convertLatLngs: function(t) {
                        var e = r.Polyline.prototype._convertLatLngs.call(this, t),
                            i = e.length;
                        return i >= 2 && e[0] instanceof r.LatLng && e[0].equals(e[i - 1]) && e.pop(), e
                    },
                    _setLatLngs: function(t) {
                        r.Polyline.prototype._setLatLngs.call(this, t), r.Polyline._flat(this._latlngs) && (this._latlngs = [this._latlngs])
                    },
                    _defaultShape: function() {
                        return r.Polyline._flat(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
                    },
                    _clipPoints: function() {
                        var t = this._renderer._bounds,
                            e = this.options.weight,
                            i = new r.Point(e, e);
                        if (t = new r.Bounds(t.min.subtract(i), t.max.add(i)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                            if (this.options.noClip) this._parts = this._rings;
                            else
                                for (var n, o = 0, s = this._rings.length; o < s; o++)(n = r.PolyUtil.clipPolygon(this._rings[o], t, !0)).length && this._parts.push(n)
                    },
                    _updatePath: function() {
                        this._renderer._updatePoly(this, !0)
                    }
                }), r.polygon = function(t, e) {
                    return new r.Polygon(t, e)
                }, r.Rectangle = r.Polygon.extend({
                    initialize: function(t, e) {
                        r.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
                    },
                    setBounds: function(t) {
                        return this.setLatLngs(this._boundsToLatLngs(t))
                    },
                    _boundsToLatLngs: function(t) {
                        return [(t = r.latLngBounds(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
                    }
                }), r.rectangle = function(t, e) {
                    return new r.Rectangle(t, e)
                }, r.CircleMarker = r.Path.extend({
                    options: {
                        fill: !0,
                        radius: 10
                    },
                    initialize: function(t, e) {
                        r.setOptions(this, e), this._latlng = r.latLng(t), this._radius = this.options.radius
                    },
                    setLatLng: function(t) {
                        return this._latlng = r.latLng(t), this.redraw(), this.fire("move", {
                            latlng: this._latlng
                        })
                    },
                    getLatLng: function() {
                        return this._latlng
                    },
                    setRadius: function(t) {
                        return this.options.radius = this._radius = t, this.redraw()
                    },
                    getRadius: function() {
                        return this._radius
                    },
                    setStyle: function(t) {
                        var e = t && t.radius || this._radius;
                        return r.Path.prototype.setStyle.call(this, t), this.setRadius(e), this
                    },
                    _project: function() {
                        this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds()
                    },
                    _updateBounds: function() {
                        var t = this._radius,
                            e = this._radiusY || t,
                            i = this._clickTolerance(),
                            n = [t + i, e + i];
                        this._pxBounds = new r.Bounds(this._point.subtract(n), this._point.add(n))
                    },
                    _update: function() {
                        this._map && this._updatePath()
                    },
                    _updatePath: function() {
                        this._renderer._updateCircle(this)
                    },
                    _empty: function() {
                        return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
                    }
                }), r.circleMarker = function(t, e) {
                    return new r.CircleMarker(t, e)
                }, r.Circle = r.CircleMarker.extend({
                    initialize: function(t, e, i) {
                        if ("number" == typeof e && (e = r.extend({}, i, {
                                radius: e
                            })), r.setOptions(this, e), this._latlng = r.latLng(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
                        this._mRadius = this.options.radius
                    },
                    setRadius: function(t) {
                        return this._mRadius = t, this.redraw()
                    },
                    getRadius: function() {
                        return this._mRadius
                    },
                    getBounds: function() {
                        var t = [this._radius, this._radiusY || this._radius];
                        return new r.LatLngBounds(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
                    },
                    setStyle: r.Path.prototype.setStyle,
                    _project: function() {
                        var t = this._latlng.lng,
                            e = this._latlng.lat,
                            i = this._map,
                            n = i.options.crs;
                        if (n.distance === r.CRS.Earth.distance) {
                            var o = Math.PI / 180,
                                s = this._mRadius / r.CRS.Earth.R / o,
                                a = i.project([e + s, t]),
                                l = i.project([e - s, t]),
                                c = a.add(l).divideBy(2),
                                u = i.unproject(c).lat,
                                h = Math.acos((Math.cos(s * o) - Math.sin(e * o) * Math.sin(u * o)) / (Math.cos(e * o) * Math.cos(u * o))) / o;
                            (isNaN(h) || 0 === h) && (h = s / Math.cos(Math.PI / 180 * e)), this._point = c.subtract(i.getPixelOrigin()), this._radius = isNaN(h) ? 0 : Math.max(Math.round(c.x - i.project([u, t - h]).x), 1), this._radiusY = Math.max(Math.round(c.y - a.y), 1)
                        } else {
                            var p = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
                            this._point = i.latLngToLayerPoint(this._latlng), this._radius = this._point.x - i.latLngToLayerPoint(p).x
                        }
                        this._updateBounds()
                    }
                }), r.circle = function(t, e, i) {
                    return new r.Circle(t, e, i)
                }, r.SVG = r.Renderer.extend({
                    getEvents: function() {
                        var t = r.Renderer.prototype.getEvents.call(this);
                        return t.zoomstart = this._onZoomStart, t
                    },
                    _initContainer: function() {
                        this._container = r.SVG.create("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = r.SVG.create("g"), this._container.appendChild(this._rootGroup)
                    },
                    _onZoomStart: function() {
                        this._update()
                    },
                    _update: function() {
                        if (!this._map._animatingZoom || !this._bounds) {
                            r.Renderer.prototype._update.call(this);
                            var t = this._bounds,
                                e = t.getSize(),
                                i = this._container;
                            this._svgSize && this._svgSize.equals(e) || (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute("height", e.y)), r.DomUtil.setPosition(i, t.min), i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update")
                        }
                    },
                    _initPath: function(t) {
                        var e = t._path = r.SVG.create("path");
                        t.options.className && r.DomUtil.addClass(e, t.options.className), t.options.interactive && r.DomUtil.addClass(e, "leaflet-interactive"), this._updateStyle(t), this._layers[r.stamp(t)] = t
                    },
                    _addPath: function(t) {
                        this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path)
                    },
                    _removePath: function(t) {
                        r.DomUtil.remove(t._path), t.removeInteractiveTarget(t._path), delete this._layers[r.stamp(t)]
                    },
                    _updatePath: function(t) {
                        t._project(), t._update()
                    },
                    _updateStyle: function(t) {
                        var e = t._path,
                            i = t.options;
                        e && (i.stroke ? (e.setAttribute("stroke", i.color), e.setAttribute("stroke-opacity", i.opacity), e.setAttribute("stroke-width", i.weight), e.setAttribute("stroke-linecap", i.lineCap), e.setAttribute("stroke-linejoin", i.lineJoin), i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"), i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), i.fill ? (e.setAttribute("fill", i.fillColor || i.color), e.setAttribute("fill-opacity", i.fillOpacity), e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"))
                    },
                    _updatePoly: function(t, e) {
                        this._setPath(t, r.SVG.pointsToPath(t._parts, e))
                    },
                    _updateCircle: function(t) {
                        var e = t._point,
                            i = t._radius,
                            n = "a" + i + "," + (t._radiusY || i) + " 0 1,0 ",
                            o = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + n + 2 * i + ",0 " + n + 2 * -i + ",0 ";
                        this._setPath(t, o)
                    },
                    _setPath: function(t, e) {
                        t._path.setAttribute("d", e)
                    },
                    _bringToFront: function(t) {
                        r.DomUtil.toFront(t._path)
                    },
                    _bringToBack: function(t) {
                        r.DomUtil.toBack(t._path)
                    }
                }), r.extend(r.SVG, {
                    create: function(t) {
                        return n.createElementNS("http://www.w3.org/2000/svg", t)
                    },
                    pointsToPath: function(t, e) {
                        var i, n, o, s, a, l, c = "";
                        for (i = 0, o = t.length; i < o; i++) {
                            for (n = 0, s = (a = t[i]).length; n < s; n++) l = a[n], c += (n ? "L" : "M") + l.x + " " + l.y;
                            c += e ? r.Browser.svg ? "z" : "x" : ""
                        }
                        return c || "M0 0"
                    }
                }), r.Browser.svg = !(!n.createElementNS || !r.SVG.create("svg").createSVGRect), r.svg = function(t) {
                    return r.Browser.svg || r.Browser.vml ? new r.SVG(t) : null
                }, r.Browser.vml = !r.Browser.svg && function() {
                    try {
                        var t = n.createElement("div");
                        t.innerHTML = '<v:shape adj="1"/>';
                        var e = t.firstChild;
                        return e.style.behavior = "url(#default#VML)", e && "object" == typeof e.adj
                    } catch (t) {
                        return !1
                    }
                }(), r.SVG.include(r.Browser.vml ? {
                    _initContainer: function() {
                        this._container = r.DomUtil.create("div", "leaflet-vml-container")
                    },
                    _update: function() {
                        this._map._animatingZoom || (r.Renderer.prototype._update.call(this), this.fire("update"))
                    },
                    _initPath: function(t) {
                        var e = t._container = r.SVG.create("shape");
                        r.DomUtil.addClass(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = r.SVG.create("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[r.stamp(t)] = t
                    },
                    _addPath: function(t) {
                        var e = t._container;
                        this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e)
                    },
                    _removePath: function(t) {
                        var e = t._container;
                        r.DomUtil.remove(e), t.removeInteractiveTarget(e), delete this._layers[r.stamp(t)]
                    },
                    _updateStyle: function(t) {
                        var e = t._stroke,
                            i = t._fill,
                            n = t.options,
                            o = t._container;
                        o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (e || (e = t._stroke = r.SVG.create("stroke")), o.appendChild(e), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, n.dashArray ? e.dashStyle = r.Util.isArray(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = n.lineCap.replace("butt", "flat"), e.joinstyle = n.lineJoin) : e && (o.removeChild(e), t._stroke = null), n.fill ? (i || (i = t._fill = r.SVG.create("fill")), o.appendChild(i), i.color = n.fillColor || n.color, i.opacity = n.fillOpacity) : i && (o.removeChild(i), t._fill = null)
                    },
                    _updateCircle: function(t) {
                        var e = t._point.round(),
                            i = Math.round(t._radius),
                            n = Math.round(t._radiusY || i);
                        this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0,23592600")
                    },
                    _setPath: function(t, e) {
                        t._path.v = e
                    },
                    _bringToFront: function(t) {
                        r.DomUtil.toFront(t._container)
                    },
                    _bringToBack: function(t) {
                        r.DomUtil.toBack(t._container)
                    }
                } : {}), r.Browser.vml && (r.SVG.create = function() {
                    try {
                        return n.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                            function(t) {
                                return n.createElement("<lvml:" + t + ' class="lvml">')
                            }
                    } catch (t) {
                        return function(t) {
                            return n.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                        }
                    }
                }()), r.Canvas = r.Renderer.extend({
                    getEvents: function() {
                        var t = r.Renderer.prototype.getEvents.call(this);
                        return t.viewprereset = this._onViewPreReset, t
                    },
                    _onViewPreReset: function() {
                        this._postponeUpdatePaths = !0
                    },
                    onAdd: function() {
                        r.Renderer.prototype.onAdd.call(this), this._draw()
                    },
                    _initContainer: function() {
                        var t = this._container = n.createElement("canvas");
                        r.DomEvent.on(t, "mousemove", r.Util.throttle(this._onMouseMove, 32, this), this).on(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this).on(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d")
                    },
                    _updatePaths: function() {
                        if (!this._postponeUpdatePaths) {
                            for (var t in this._redrawBounds = null, this._layers) this._layers[t]._update();
                            this._redraw()
                        }
                    },
                    _update: function() {
                        if (!this._map._animatingZoom || !this._bounds) {
                            this._drawnLayers = {}, r.Renderer.prototype._update.call(this);
                            var t = this._bounds,
                                e = this._container,
                                i = t.getSize(),
                                n = r.Browser.retina ? 2 : 1;
                            r.DomUtil.setPosition(e, t.min), e.width = n * i.x, e.height = n * i.y, e.style.width = i.x + "px", e.style.height = i.y + "px", r.Browser.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update")
                        }
                    },
                    _reset: function() {
                        r.Renderer.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths())
                    },
                    _initPath: function(t) {
                        this._updateDashArray(t), this._layers[r.stamp(t)] = t;
                        var e = t._order = {
                            layer: t,
                            prev: this._drawLast,
                            next: null
                        };
                        this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast
                    },
                    _addPath: function(t) {
                        this._requestRedraw(t)
                    },
                    _removePath: function(t) {
                        var e = t._order,
                            i = e.next,
                            n = e.prev;
                        i ? i.prev = n : this._drawLast = n, n ? n.next = i : this._drawFirst = i, delete t._order, delete this._layers[r.stamp(t)], this._requestRedraw(t)
                    },
                    _updatePath: function(t) {
                        this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t)
                    },
                    _updateStyle: function(t) {
                        this._updateDashArray(t), this._requestRedraw(t)
                    },
                    _updateDashArray: function(t) {
                        if (t.options.dashArray) {
                            var e, i = t.options.dashArray.split(","),
                                n = [];
                            for (e = 0; e < i.length; e++) n.push(Number(i[e]));
                            t.options._dashArray = n
                        }
                    },
                    _requestRedraw: function(t) {
                        this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || r.Util.requestAnimFrame(this._redraw, this))
                    },
                    _extendRedrawBounds: function(t) {
                        var e = (t.options.weight || 0) + 1;
                        this._redrawBounds = this._redrawBounds || new r.Bounds, this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]))
                    },
                    _redraw: function() {
                        this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null
                    },
                    _clear: function() {
                        var t = this._redrawBounds;
                        if (t) {
                            var e = t.getSize();
                            this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y)
                        } else this._ctx.clearRect(0, 0, this._container.width, this._container.height)
                    },
                    _draw: function() {
                        var t, e = this._redrawBounds;
                        if (this._ctx.save(), e) {
                            var i = e.getSize();
                            this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, i.x, i.y), this._ctx.clip()
                        }
                        this._drawing = !0;
                        for (var n = this._drawFirst; n; n = n.next) t = n.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
                        this._drawing = !1, this._ctx.restore()
                    },
                    _updatePoly: function(t, e) {
                        if (this._drawing) {
                            var i, n, o, r, s = t._parts,
                                a = s.length,
                                l = this._ctx;
                            if (a) {
                                for (this._drawnLayers[t._leaflet_id] = t, l.beginPath(), l.setLineDash && l.setLineDash(t.options && t.options._dashArray || []), i = 0; i < a; i++) {
                                    for (n = 0, o = s[i].length; n < o; n++) r = s[i][n], l[n ? "lineTo" : "moveTo"](r.x, r.y);
                                    e && l.closePath()
                                }
                                this._fillStroke(l, t)
                            }
                        }
                    },
                    _updateCircle: function(t) {
                        if (this._drawing && !t._empty()) {
                            var e = t._point,
                                i = this._ctx,
                                n = t._radius,
                                o = (t._radiusY || n) / n;
                            this._drawnLayers[t._leaflet_id] = t, 1 !== o && (i.save(), i.scale(1, o)), i.beginPath(), i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1), 1 !== o && i.restore(), this._fillStroke(i, t)
                        }
                    },
                    _fillStroke: function(t, e) {
                        var i = e.options;
                        i.fill && (t.globalAlpha = i.fillOpacity, t.fillStyle = i.fillColor || i.color, t.fill(i.fillRule || "evenodd")), i.stroke && 0 !== i.weight && (t.globalAlpha = i.opacity, t.lineWidth = i.weight, t.strokeStyle = i.color, t.lineCap = i.lineCap, t.lineJoin = i.lineJoin, t.stroke())
                    },
                    _onClick: function(t) {
                        for (var e, i, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)(e = o.layer).options.interactive && e._containsPoint(n) && !this._map._draggableMoved(e) && (i = e);
                        i && (r.DomEvent._fakeStop(t), this._fireEvent([i], t))
                    },
                    _onMouseMove: function(t) {
                        if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                            var e = this._map.mouseEventToLayerPoint(t);
                            this._handleMouseHover(t, e)
                        }
                    },
                    _handleMouseOut: function(t) {
                        var e = this._hoveredLayer;
                        e && (r.DomUtil.removeClass(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null)
                    },
                    _handleMouseHover: function(t, e) {
                        for (var i, n, o = this._drawFirst; o; o = o.next)(i = o.layer).options.interactive && i._containsPoint(e) && (n = i);
                        n !== this._hoveredLayer && (this._handleMouseOut(t), n && (r.DomUtil.addClass(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t)
                    },
                    _fireEvent: function(t, e, i) {
                        this._map._fireDOMEvent(e, i || e.type, t)
                    },
                    _bringToFront: function(t) {
                        var e = t._order,
                            i = e.next,
                            n = e.prev;
                        i && (i.prev = n, n ? n.next = i : i && (this._drawFirst = i), e.prev = this._drawLast, this._drawLast.next = e, e.next = null, this._drawLast = e, this._requestRedraw(t))
                    },
                    _bringToBack: function(t) {
                        var e = t._order,
                            i = e.next,
                            n = e.prev;
                        n && (n.next = i, i ? i.prev = n : n && (this._drawLast = n), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t))
                    }
                }), r.Browser.canvas = !!n.createElement("canvas").getContext, r.canvas = function(t) {
                    return r.Browser.canvas ? new r.Canvas(t) : null
                }, r.Polyline.prototype._containsPoint = function(t, e) {
                    var i, n, o, s, a, l, c = this._clickTolerance();
                    if (!this._pxBounds.contains(t)) return !1;
                    for (i = 0, s = this._parts.length; i < s; i++)
                        for (n = 0, o = (a = (l = this._parts[i]).length) - 1; n < a; o = n++)
                            if ((e || 0 !== n) && r.LineUtil.pointToSegmentDistance(t, l[o], l[n]) <= c) return !0;
                    return !1
                }, r.Polygon.prototype._containsPoint = function(t) {
                    var e, i, n, o, s, a, l, c, u = !1;
                    if (!this._pxBounds.contains(t)) return !1;
                    for (o = 0, l = this._parts.length; o < l; o++)
                        for (s = 0, a = (c = (e = this._parts[o]).length) - 1; s < c; a = s++) i = e[s], n = e[a], i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (u = !u);
                    return u || r.Polyline.prototype._containsPoint.call(this, t, !0)
                }, r.CircleMarker.prototype._containsPoint = function(t) {
                    return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
                }, r.GeoJSON = r.FeatureGroup.extend({
                    initialize: function(t, e) {
                        r.setOptions(this, e), this._layers = {}, t && this.addData(t)
                    },
                    addData: function(t) {
                        var e, i, n, o = r.Util.isArray(t) ? t : t.features;
                        if (o) {
                            for (e = 0, i = o.length; e < i; e++)((n = o[e]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
                            return this
                        }
                        var s = this.options;
                        if (s.filter && !s.filter(t)) return this;
                        var a = r.GeoJSON.geometryToLayer(t, s);
                        return a ? (a.feature = r.GeoJSON.asFeature(t), a.defaultOptions = a.options, this.resetStyle(a), s.onEachFeature && s.onEachFeature(t, a), this.addLayer(a)) : this
                    },
                    resetStyle: function(t) {
                        return t.options = r.Util.extend({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this
                    },
                    setStyle: function(t) {
                        return this.eachLayer(function(e) {
                            this._setLayerStyle(e, t)
                        }, this)
                    },
                    _setLayerStyle: function(t, e) {
                        "function" == typeof e && (e = e(t.feature)), t.setStyle && t.setStyle(e)
                    }
                }), r.extend(r.GeoJSON, {
                    geometryToLayer: function(t, e) {
                        var i, n, o, s, a = "Feature" === t.type ? t.geometry : t,
                            l = a ? a.coordinates : null,
                            c = [],
                            u = e && e.pointToLayer,
                            h = e && e.coordsToLatLng || this.coordsToLatLng;
                        if (!l && !a) return null;
                        switch (a.type) {
                            case "Point":
                                return i = h(l), u ? u(t, i) : new r.Marker(i);
                            case "MultiPoint":
                                for (o = 0, s = l.length; o < s; o++) i = h(l[o]), c.push(u ? u(t, i) : new r.Marker(i));
                                return new r.FeatureGroup(c);
                            case "LineString":
                            case "MultiLineString":
                                return n = this.coordsToLatLngs(l, "LineString" === a.type ? 0 : 1, h), new r.Polyline(n, e);
                            case "Polygon":
                            case "MultiPolygon":
                                return n = this.coordsToLatLngs(l, "Polygon" === a.type ? 1 : 2, h), new r.Polygon(n, e);
                            case "GeometryCollection":
                                for (o = 0, s = a.geometries.length; o < s; o++) {
                                    var p = this.geometryToLayer({
                                        geometry: a.geometries[o],
                                        type: "Feature",
                                        properties: t.properties
                                    }, e);
                                    p && c.push(p)
                                }
                                return new r.FeatureGroup(c);
                            default:
                                throw new Error("Invalid GeoJSON object.")
                        }
                    },
                    coordsToLatLng: function(t) {
                        return new r.LatLng(t[1], t[0], t[2])
                    },
                    coordsToLatLngs: function(t, e, i) {
                        for (var n, o = [], r = 0, s = t.length; r < s; r++) n = e ? this.coordsToLatLngs(t[r], e - 1, i) : (i || this.coordsToLatLng)(t[r]), o.push(n);
                        return o
                    },
                    latLngToCoords: function(t) {
                        return void 0 !== t.alt ? [t.lng, t.lat, t.alt] : [t.lng, t.lat]
                    },
                    latLngsToCoords: function(t, e, i) {
                        for (var n = [], o = 0, s = t.length; o < s; o++) n.push(e ? r.GeoJSON.latLngsToCoords(t[o], e - 1, i) : r.GeoJSON.latLngToCoords(t[o]));
                        return !e && i && n.push(n[0]), n
                    },
                    getFeature: function(t, e) {
                        return t.feature ? r.extend({}, t.feature, {
                            geometry: e
                        }) : r.GeoJSON.asFeature(e)
                    },
                    asFeature: function(t) {
                        return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
                            type: "Feature",
                            properties: {},
                            geometry: t
                        }
                    }
                });
                var l = {
                    toGeoJSON: function() {
                        return r.GeoJSON.getFeature(this, {
                            type: "Point",
                            coordinates: r.GeoJSON.latLngToCoords(this.getLatLng())
                        })
                    }
                };
                r.Marker.include(l), r.Circle.include(l), r.CircleMarker.include(l), r.Polyline.prototype.toGeoJSON = function() {
                    var t = !r.Polyline._flat(this._latlngs),
                        e = r.GeoJSON.latLngsToCoords(this._latlngs, t ? 1 : 0);
                    return r.GeoJSON.getFeature(this, {
                        type: (t ? "Multi" : "") + "LineString",
                        coordinates: e
                    })
                }, r.Polygon.prototype.toGeoJSON = function() {
                    var t = !r.Polyline._flat(this._latlngs),
                        e = t && !r.Polyline._flat(this._latlngs[0]),
                        i = r.GeoJSON.latLngsToCoords(this._latlngs, e ? 2 : t ? 1 : 0, !0);
                    return t || (i = [i]), r.GeoJSON.getFeature(this, {
                        type: (e ? "Multi" : "") + "Polygon",
                        coordinates: i
                    })
                }, r.LayerGroup.include({
                    toMultiPoint: function() {
                        var t = [];
                        return this.eachLayer(function(e) {
                            t.push(e.toGeoJSON().geometry.coordinates)
                        }), r.GeoJSON.getFeature(this, {
                            type: "MultiPoint",
                            coordinates: t
                        })
                    },
                    toGeoJSON: function() {
                        var t = this.feature && this.feature.geometry && this.feature.geometry.type;
                        if ("MultiPoint" === t) return this.toMultiPoint();
                        var e = "GeometryCollection" === t,
                            i = [];
                        return this.eachLayer(function(t) {
                            if (t.toGeoJSON) {
                                var n = t.toGeoJSON();
                                i.push(e ? n.geometry : r.GeoJSON.asFeature(n))
                            }
                        }), e ? r.GeoJSON.getFeature(this, {
                            geometries: i,
                            type: "GeometryCollection"
                        }) : {
                            type: "FeatureCollection",
                            features: i
                        }
                    }
                }), r.geoJSON = function(t, e) {
                    return new r.GeoJSON(t, e)
                }, r.geoJson = r.geoJSON, r.Draggable = r.Evented.extend({
                    options: {
                        clickTolerance: 3
                    },
                    statics: {
                        START: r.Browser.touch ? ["touchstart", "mousedown"] : ["mousedown"],
                        END: {
                            mousedown: "mouseup",
                            touchstart: "touchend",
                            pointerdown: "touchend",
                            MSPointerDown: "touchend"
                        },
                        MOVE: {
                            mousedown: "mousemove",
                            touchstart: "touchmove",
                            pointerdown: "touchmove",
                            MSPointerDown: "touchmove"
                        }
                    },
                    initialize: function(t, e, i) {
                        this._element = t, this._dragStartTarget = e || t, this._preventOutline = i
                    },
                    enable: function() {
                        this._enabled || (r.DomEvent.on(this._dragStartTarget, r.Draggable.START.join(" "), this._onDown, this), this._enabled = !0)
                    },
                    disable: function() {
                        this._enabled && (r.Draggable._dragging === this && this.finishDrag(), r.DomEvent.off(this._dragStartTarget, r.Draggable.START.join(" "), this._onDown, this), this._enabled = !1, this._moved = !1)
                    },
                    _onDown: function(t) {
                        if (!t._simulated && this._enabled && (this._moved = !1, !r.DomUtil.hasClass(this._element, "leaflet-zoom-anim") && !(r.Draggable._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (r.Draggable._dragging = this, this._preventOutline && r.DomUtil.preventOutline(this._element), r.DomUtil.disableImageDrag(), r.DomUtil.disableTextSelection(), this._moving)))) {
                            this.fire("down");
                            var e = t.touches ? t.touches[0] : t;
                            this._startPoint = new r.Point(e.clientX, e.clientY), r.DomEvent.on(n, r.Draggable.MOVE[t.type], this._onMove, this).on(n, r.Draggable.END[t.type], this._onUp, this)
                        }
                    },
                    _onMove: function(t) {
                        if (!t._simulated && this._enabled)
                            if (t.touches && t.touches.length > 1) this._moved = !0;
                            else {
                                var i = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                                    o = new r.Point(i.clientX, i.clientY).subtract(this._startPoint);
                                (o.x || o.y) && (Math.abs(o.x) + Math.abs(o.y) < this.options.clickTolerance || (r.DomEvent.preventDefault(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = r.DomUtil.getPosition(this._element).subtract(o), r.DomUtil.addClass(n.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, e.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), r.DomUtil.addClass(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(o), this._moving = !0, r.Util.cancelAnimFrame(this._animRequest), this._lastEvent = t, this._animRequest = r.Util.requestAnimFrame(this._updatePosition, this, !0)))
                            }
                    },
                    _updatePosition: function() {
                        var t = {
                            originalEvent: this._lastEvent
                        };
                        this.fire("predrag", t), r.DomUtil.setPosition(this._element, this._newPos), this.fire("drag", t)
                    },
                    _onUp: function(t) {
                        !t._simulated && this._enabled && this.finishDrag()
                    },
                    finishDrag: function() {
                        for (var t in r.DomUtil.removeClass(n.body, "leaflet-dragging"), this._lastTarget && (r.DomUtil.removeClass(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), r.Draggable.MOVE) r.DomEvent.off(n, r.Draggable.MOVE[t], this._onMove, this).off(n, r.Draggable.END[t], this._onUp, this);
                        r.DomUtil.enableImageDrag(), r.DomUtil.enableTextSelection(), this._moved && this._moving && (r.Util.cancelAnimFrame(this._animRequest), this.fire("dragend", {
                            distance: this._newPos.distanceTo(this._startPos)
                        })), this._moving = !1, r.Draggable._dragging = !1
                    }
                }), r.Handler = r.Class.extend({
                    initialize: function(t) {
                        this._map = t
                    },
                    enable: function() {
                        return this._enabled ? this : (this._enabled = !0, this.addHooks(), this)
                    },
                    disable: function() {
                        return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this
                    },
                    enabled: function() {
                        return !!this._enabled
                    }
                }), r.Map.mergeOptions({
                    dragging: !0,
                    inertia: !r.Browser.android23,
                    inertiaDeceleration: 3400,
                    inertiaMaxSpeed: 1 / 0,
                    easeLinearity: .2,
                    worldCopyJump: !1,
                    maxBoundsViscosity: 0
                }), r.Map.Drag = r.Handler.extend({
                    addHooks: function() {
                        if (!this._draggable) {
                            var t = this._map;
                            this._draggable = new r.Draggable(t._mapPane, t._container), this._draggable.on({
                                down: this._onDown,
                                dragstart: this._onDragStart,
                                drag: this._onDrag,
                                dragend: this._onDragEnd
                            }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))
                        }
                        r.DomUtil.addClass(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = []
                    },
                    removeHooks: function() {
                        r.DomUtil.removeClass(this._map._container, "leaflet-grab"), r.DomUtil.removeClass(this._map._container, "leaflet-touch-drag"), this._draggable.disable()
                    },
                    moved: function() {
                        return this._draggable && this._draggable._moved
                    },
                    moving: function() {
                        return this._draggable && this._draggable._moving
                    },
                    _onDown: function() {
                        this._map._stop()
                    },
                    _onDragStart: function() {
                        var t = this._map;
                        if (this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
                            var e = r.latLngBounds(this._map.options.maxBounds);
                            this._offsetLimit = r.bounds(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
                        } else this._offsetLimit = null;
                        t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
                    },
                    _onDrag: function(t) {
                        if (this._map.options.inertia) {
                            var e = this._lastTime = +new Date,
                                i = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                            this._positions.push(i), this._times.push(e), e - this._times[0] > 50 && (this._positions.shift(), this._times.shift())
                        }
                        this._map.fire("move", t).fire("drag", t)
                    },
                    _onZoomEnd: function() {
                        var t = this._map.getSize().divideBy(2),
                            e = this._map.latLngToLayerPoint([0, 0]);
                        this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x
                    },
                    _viscousLimit: function(t, e) {
                        return t - (t - e) * this._viscosity
                    },
                    _onPreDragLimit: function() {
                        if (this._viscosity && this._offsetLimit) {
                            var t = this._draggable._newPos.subtract(this._draggable._startPos),
                                e = this._offsetLimit;
                            t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t)
                        }
                    },
                    _onPreDragWrap: function() {
                        var t = this._worldWidth,
                            e = Math.round(t / 2),
                            i = this._initialWorldOffset,
                            n = this._draggable._newPos.x,
                            o = (n - e + i) % t + e - i,
                            r = (n + e + i) % t - e - i,
                            s = Math.abs(o + i) < Math.abs(r + i) ? o : r;
                        this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = s
                    },
                    _onDragEnd: function(t) {
                        var e = this._map,
                            i = e.options,
                            n = !i.inertia || this._times.length < 2;
                        if (e.fire("dragend", t), n) e.fire("moveend");
                        else {
                            var o = this._lastPos.subtract(this._positions[0]),
                                s = (this._lastTime - this._times[0]) / 1e3,
                                a = i.easeLinearity,
                                l = o.multiplyBy(a / s),
                                c = l.distanceTo([0, 0]),
                                u = Math.min(i.inertiaMaxSpeed, c),
                                h = l.multiplyBy(u / c),
                                p = u / (i.inertiaDeceleration * a),
                                d = h.multiplyBy(-p / 2).round();
                            d.x || d.y ? (d = e._limitOffset(d, e.options.maxBounds), r.Util.requestAnimFrame(function() {
                                e.panBy(d, {
                                    duration: p,
                                    easeLinearity: a,
                                    noMoveStart: !0,
                                    animate: !0
                                })
                            })) : e.fire("moveend")
                        }
                    }
                }), r.Map.addInitHook("addHandler", "dragging", r.Map.Drag), r.Map.mergeOptions({
                    doubleClickZoom: !0
                }), r.Map.DoubleClickZoom = r.Handler.extend({
                    addHooks: function() {
                        this._map.on("dblclick", this._onDoubleClick, this)
                    },
                    removeHooks: function() {
                        this._map.off("dblclick", this._onDoubleClick, this)
                    },
                    _onDoubleClick: function(t) {
                        var e = this._map,
                            i = e.getZoom(),
                            n = e.options.zoomDelta,
                            o = t.originalEvent.shiftKey ? i - n : i + n;
                        "center" === e.options.doubleClickZoom ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o)
                    }
                }), r.Map.addInitHook("addHandler", "doubleClickZoom", r.Map.DoubleClickZoom), r.Map.mergeOptions({
                    scrollWheelZoom: !0,
                    wheelDebounceTime: 40,
                    wheelPxPerZoomLevel: 60
                }), r.Map.ScrollWheelZoom = r.Handler.extend({
                    addHooks: function() {
                        r.DomEvent.on(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0
                    },
                    removeHooks: function() {
                        r.DomEvent.off(this._map._container, "mousewheel", this._onWheelScroll, this)
                    },
                    _onWheelScroll: function(t) {
                        var e = r.DomEvent.getWheelDelta(t),
                            i = this._map.options.wheelDebounceTime;
                        this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
                        var n = Math.max(i - (+new Date - this._startTime), 0);
                        clearTimeout(this._timer), this._timer = setTimeout(r.bind(this._performZoom, this), n), r.DomEvent.stop(t)
                    },
                    _performZoom: function() {
                        var t = this._map,
                            e = t.getZoom(),
                            i = this._map.options.zoomSnap || 0;
                        t._stop();
                        var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
                            o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2,
                            r = i ? Math.ceil(o / i) * i : o,
                            s = t._limitZoom(e + (this._delta > 0 ? r : -r)) - e;
                        this._delta = 0, this._startTime = null, s && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + s) : t.setZoomAround(this._lastMousePos, e + s))
                    }
                }), r.Map.addInitHook("addHandler", "scrollWheelZoom", r.Map.ScrollWheelZoom), r.extend(r.DomEvent, {
                    _touchstart: r.Browser.msPointer ? "MSPointerDown" : r.Browser.pointer ? "pointerdown" : "touchstart",
                    _touchend: r.Browser.msPointer ? "MSPointerUp" : r.Browser.pointer ? "pointerup" : "touchend",
                    addDoubleTapListener: function(t, e, i) {
                        var n, o, s = !1,
                            a = 250;

                        function l(t) {
                            var e;
                            if (r.Browser.pointer) {
                                if (!r.Browser.edge || "mouse" === t.pointerType) return;
                                e = r.DomEvent._pointersCount
                            } else e = t.touches.length;
                            if (!(e > 1)) {
                                var i = Date.now(),
                                    l = i - (n || i);
                                o = t.touches ? t.touches[0] : t, s = l > 0 && l <= a, n = i
                            }
                        }

                        function c(t) {
                            if (s && !o.cancelBubble) {
                                if (r.Browser.pointer) {
                                    if (!r.Browser.edge || "mouse" === t.pointerType) return;
                                    var i, a, l = {};
                                    for (a in o) i = o[a], l[a] = i && i.bind ? i.bind(o) : i;
                                    o = l
                                }
                                o.type = "dblclick", e(o), n = null
                            }
                        }
                        var u = "_leaflet_",
                            h = this._touchstart,
                            p = this._touchend;
                        return t[u + h + i] = l, t[u + p + i] = c, t[u + "dblclick" + i] = e, t.addEventListener(h, l, !1), t.addEventListener(p, c, !1), t.addEventListener("dblclick", e, !1), this
                    },
                    removeDoubleTapListener: function(t, e) {
                        var i = "_leaflet_",
                            n = t[i + this._touchstart + e],
                            o = t[i + this._touchend + e],
                            s = t[i + "dblclick" + e];
                        return t.removeEventListener(this._touchstart, n, !1), t.removeEventListener(this._touchend, o, !1), r.Browser.edge || t.removeEventListener("dblclick", s, !1), this
                    }
                }), r.extend(r.DomEvent, {
                    POINTER_DOWN: r.Browser.msPointer ? "MSPointerDown" : "pointerdown",
                    POINTER_MOVE: r.Browser.msPointer ? "MSPointerMove" : "pointermove",
                    POINTER_UP: r.Browser.msPointer ? "MSPointerUp" : "pointerup",
                    POINTER_CANCEL: r.Browser.msPointer ? "MSPointerCancel" : "pointercancel",
                    TAG_WHITE_LIST: ["INPUT", "SELECT", "OPTION"],
                    _pointers: {},
                    _pointersCount: 0,
                    addPointerListener: function(t, e, i, n) {
                        return "touchstart" === e ? this._addPointerStart(t, i, n) : "touchmove" === e ? this._addPointerMove(t, i, n) : "touchend" === e && this._addPointerEnd(t, i, n), this
                    },
                    removePointerListener: function(t, e, i) {
                        var n = t["_leaflet_" + e + i];
                        return "touchstart" === e ? t.removeEventListener(this.POINTER_DOWN, n, !1) : "touchmove" === e ? t.removeEventListener(this.POINTER_MOVE, n, !1) : "touchend" === e && (t.removeEventListener(this.POINTER_UP, n, !1), t.removeEventListener(this.POINTER_CANCEL, n, !1)), this
                    },
                    _addPointerStart: function(t, e, i) {
                        var o = r.bind(function(t) {
                            if ("mouse" !== t.pointerType && t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
                                if (!(this.TAG_WHITE_LIST.indexOf(t.target.tagName) < 0)) return;
                                r.DomEvent.preventDefault(t)
                            }
                            this._handlePointer(t, e)
                        }, this);
                        if (t["_leaflet_touchstart" + i] = o, t.addEventListener(this.POINTER_DOWN, o, !1), !this._pointerDocListener) {
                            var s = r.bind(this._globalPointerUp, this);
                            n.documentElement.addEventListener(this.POINTER_DOWN, r.bind(this._globalPointerDown, this), !0), n.documentElement.addEventListener(this.POINTER_MOVE, r.bind(this._globalPointerMove, this), !0), n.documentElement.addEventListener(this.POINTER_UP, s, !0), n.documentElement.addEventListener(this.POINTER_CANCEL, s, !0), this._pointerDocListener = !0
                        }
                    },
                    _globalPointerDown: function(t) {
                        this._pointers[t.pointerId] = t, this._pointersCount++
                    },
                    _globalPointerMove: function(t) {
                        this._pointers[t.pointerId] && (this._pointers[t.pointerId] = t)
                    },
                    _globalPointerUp: function(t) {
                        delete this._pointers[t.pointerId], this._pointersCount--
                    },
                    _handlePointer: function(t, e) {
                        for (var i in t.touches = [], this._pointers) t.touches.push(this._pointers[i]);
                        t.changedTouches = [t], e(t)
                    },
                    _addPointerMove: function(t, e, i) {
                        var n = r.bind(function(t) {
                            (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && this._handlePointer(t, e)
                        }, this);
                        t["_leaflet_touchmove" + i] = n, t.addEventListener(this.POINTER_MOVE, n, !1)
                    },
                    _addPointerEnd: function(t, e, i) {
                        var n = r.bind(function(t) {
                            this._handlePointer(t, e)
                        }, this);
                        t["_leaflet_touchend" + i] = n, t.addEventListener(this.POINTER_UP, n, !1), t.addEventListener(this.POINTER_CANCEL, n, !1)
                    }
                }), r.Map.mergeOptions({
                    touchZoom: r.Browser.touch && !r.Browser.android23,
                    bounceAtZoomLimits: !0
                }), r.Map.TouchZoom = r.Handler.extend({
                    addHooks: function() {
                        r.DomUtil.addClass(this._map._container, "leaflet-touch-zoom"), r.DomEvent.on(this._map._container, "touchstart", this._onTouchStart, this)
                    },
                    removeHooks: function() {
                        r.DomUtil.removeClass(this._map._container, "leaflet-touch-zoom"), r.DomEvent.off(this._map._container, "touchstart", this._onTouchStart, this)
                    },
                    _onTouchStart: function(t) {
                        var e = this._map;
                        if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
                            var i = e.mouseEventToContainerPoint(t.touches[0]),
                                o = e.mouseEventToContainerPoint(t.touches[1]);
                            this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), "center" !== e.options.touchZoom && (this._pinchStartLatLng = e.containerPointToLatLng(i.add(o)._divideBy(2))), this._startDist = i.distanceTo(o), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), r.DomEvent.on(n, "touchmove", this._onTouchMove, this).on(n, "touchend", this._onTouchEnd, this), r.DomEvent.preventDefault(t)
                        }
                    },
                    _onTouchMove: function(t) {
                        if (t.touches && 2 === t.touches.length && this._zooming) {
                            var e = this._map,
                                i = e.mouseEventToContainerPoint(t.touches[0]),
                                n = e.mouseEventToContainerPoint(t.touches[1]),
                                o = i.distanceTo(n) / this._startDist;
                            if (this._zoom = e.getScaleZoom(o, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && o < 1 || this._zoom > e.getMaxZoom() && o > 1) && (this._zoom = e._limitZoom(this._zoom)), "center" === e.options.touchZoom) {
                                if (this._center = this._startLatLng, 1 === o) return
                            } else {
                                var s = i._add(n)._divideBy(2)._subtract(this._centerPoint);
                                if (1 === o && 0 === s.x && 0 === s.y) return;
                                this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(s), this._zoom)
                            }
                            this._moved || (e._moveStart(!0), this._moved = !0), r.Util.cancelAnimFrame(this._animRequest);
                            var a = r.bind(e._move, e, this._center, this._zoom, {
                                pinch: !0,
                                round: !1
                            });
                            this._animRequest = r.Util.requestAnimFrame(a, this, !0), r.DomEvent.preventDefault(t)
                        }
                    },
                    _onTouchEnd: function() {
                        this._moved && this._zooming ? (this._zooming = !1, r.Util.cancelAnimFrame(this._animRequest), r.DomEvent.off(n, "touchmove", this._onTouchMove).off(n, "touchend", this._onTouchEnd), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
                    }
                }), r.Map.addInitHook("addHandler", "touchZoom", r.Map.TouchZoom), r.Map.mergeOptions({
                    tap: !0,
                    tapTolerance: 15
                }), r.Map.Tap = r.Handler.extend({
                    addHooks: function() {
                        r.DomEvent.on(this._map._container, "touchstart", this._onDown, this)
                    },
                    removeHooks: function() {
                        r.DomEvent.off(this._map._container, "touchstart", this._onDown, this)
                    },
                    _onDown: function(t) {
                        if (t.touches) {
                            if (r.DomEvent.preventDefault(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
                            var e = t.touches[0],
                                i = e.target;
                            this._startPos = this._newPos = new r.Point(e.clientX, e.clientY), i.tagName && "a" === i.tagName.toLowerCase() && r.DomUtil.addClass(i, "leaflet-active"), this._holdTimeout = setTimeout(r.bind(function() {
                                this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", e))
                            }, this), 1e3), this._simulateEvent("mousedown", e), r.DomEvent.on(n, {
                                touchmove: this._onMove,
                                touchend: this._onUp
                            }, this)
                        }
                    },
                    _onUp: function(t) {
                        if (clearTimeout(this._holdTimeout), r.DomEvent.off(n, {
                                touchmove: this._onMove,
                                touchend: this._onUp
                            }, this), this._fireClick && t && t.changedTouches) {
                            var e = t.changedTouches[0],
                                i = e.target;
                            i && i.tagName && "a" === i.tagName.toLowerCase() && r.DomUtil.removeClass(i, "leaflet-active"), this._simulateEvent("mouseup", e), this._isTapValid() && this._simulateEvent("click", e)
                        }
                    },
                    _isTapValid: function() {
                        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
                    },
                    _onMove: function(t) {
                        var e = t.touches[0];
                        this._newPos = new r.Point(e.clientX, e.clientY), this._simulateEvent("mousemove", e)
                    },
                    _simulateEvent: function(t, i) {
                        var o = n.createEvent("MouseEvents");
                        o._simulated = !0, i.target._simulatedClick = !0, o.initMouseEvent(t, !0, !0, e, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), i.target.dispatchEvent(o)
                    }
                }), r.Browser.touch && !r.Browser.pointer && r.Map.addInitHook("addHandler", "tap", r.Map.Tap), r.Map.mergeOptions({
                    boxZoom: !0
                }), r.Map.BoxZoom = r.Handler.extend({
                    initialize: function(t) {
                        this._map = t, this._container = t._container, this._pane = t._panes.overlayPane
                    },
                    addHooks: function() {
                        r.DomEvent.on(this._container, "mousedown", this._onMouseDown, this)
                    },
                    removeHooks: function() {
                        r.DomEvent.off(this._container, "mousedown", this._onMouseDown, this)
                    },
                    moved: function() {
                        return this._moved
                    },
                    _resetState: function() {
                        this._moved = !1
                    },
                    _onMouseDown: function(t) {
                        if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
                        this._resetState(), r.DomUtil.disableTextSelection(), r.DomUtil.disableImageDrag(), this._startPoint = this._map.mouseEventToContainerPoint(t), r.DomEvent.on(n, {
                            contextmenu: r.DomEvent.stop,
                            mousemove: this._onMouseMove,
                            mouseup: this._onMouseUp,
                            keydown: this._onKeyDown
                        }, this)
                    },
                    _onMouseMove: function(t) {
                        this._moved || (this._moved = !0, this._box = r.DomUtil.create("div", "leaflet-zoom-box", this._container), r.DomUtil.addClass(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
                        var e = new r.Bounds(this._point, this._startPoint),
                            i = e.getSize();
                        r.DomUtil.setPosition(this._box, e.min), this._box.style.width = i.x + "px", this._box.style.height = i.y + "px"
                    },
                    _finish: function() {
                        this._moved && (r.DomUtil.remove(this._box), r.DomUtil.removeClass(this._container, "leaflet-crosshair")), r.DomUtil.enableTextSelection(), r.DomUtil.enableImageDrag(), r.DomEvent.off(n, {
                            contextmenu: r.DomEvent.stop,
                            mousemove: this._onMouseMove,
                            mouseup: this._onMouseUp,
                            keydown: this._onKeyDown
                        }, this)
                    },
                    _onMouseUp: function(t) {
                        if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
                            setTimeout(r.bind(this._resetState, this), 0);
                            var e = new r.LatLngBounds(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
                            this._map.fitBounds(e).fire("boxzoomend", {
                                boxZoomBounds: e
                            })
                        }
                    },
                    _onKeyDown: function(t) {
                        27 === t.keyCode && this._finish()
                    }
                }), r.Map.addInitHook("addHandler", "boxZoom", r.Map.BoxZoom), r.Map.mergeOptions({
                    keyboard: !0,
                    keyboardPanDelta: 80
                }), r.Map.Keyboard = r.Handler.extend({
                    keyCodes: {
                        left: [37],
                        right: [39],
                        down: [40],
                        up: [38],
                        zoomIn: [187, 107, 61, 171],
                        zoomOut: [189, 109, 54, 173]
                    },
                    initialize: function(t) {
                        this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta)
                    },
                    addHooks: function() {
                        var t = this._map._container;
                        t.tabIndex <= 0 && (t.tabIndex = "0"), r.DomEvent.on(t, {
                            focus: this._onFocus,
                            blur: this._onBlur,
                            mousedown: this._onMouseDown
                        }, this), this._map.on({
                            focus: this._addHooks,
                            blur: this._removeHooks
                        }, this)
                    },
                    removeHooks: function() {
                        this._removeHooks(), r.DomEvent.off(this._map._container, {
                            focus: this._onFocus,
                            blur: this._onBlur,
                            mousedown: this._onMouseDown
                        }, this), this._map.off({
                            focus: this._addHooks,
                            blur: this._removeHooks
                        }, this)
                    },
                    _onMouseDown: function() {
                        if (!this._focused) {
                            var t = n.body,
                                i = n.documentElement,
                                o = t.scrollTop || i.scrollTop,
                                r = t.scrollLeft || i.scrollLeft;
                            this._map._container.focus(), e.scrollTo(r, o)
                        }
                    },
                    _onFocus: function() {
                        this._focused = !0, this._map.fire("focus")
                    },
                    _onBlur: function() {
                        this._focused = !1, this._map.fire("blur")
                    },
                    _setPanDelta: function(t) {
                        var e, i, n = this._panKeys = {},
                            o = this.keyCodes;
                        for (e = 0, i = o.left.length; e < i; e++) n[o.left[e]] = [-1 * t, 0];
                        for (e = 0, i = o.right.length; e < i; e++) n[o.right[e]] = [t, 0];
                        for (e = 0, i = o.down.length; e < i; e++) n[o.down[e]] = [0, t];
                        for (e = 0, i = o.up.length; e < i; e++) n[o.up[e]] = [0, -1 * t]
                    },
                    _setZoomDelta: function(t) {
                        var e, i, n = this._zoomKeys = {},
                            o = this.keyCodes;
                        for (e = 0, i = o.zoomIn.length; e < i; e++) n[o.zoomIn[e]] = t;
                        for (e = 0, i = o.zoomOut.length; e < i; e++) n[o.zoomOut[e]] = -t
                    },
                    _addHooks: function() {
                        r.DomEvent.on(n, "keydown", this._onKeyDown, this)
                    },
                    _removeHooks: function() {
                        r.DomEvent.off(n, "keydown", this._onKeyDown, this)
                    },
                    _onKeyDown: function(t) {
                        if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                            var e, i = t.keyCode,
                                n = this._map;
                            if (i in this._panKeys) {
                                if (n._panAnim && n._panAnim._inProgress) return;
                                e = this._panKeys[i], t.shiftKey && (e = r.point(e).multiplyBy(3)), n.panBy(e), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds)
                            } else if (i in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[i]);
                            else {
                                if (27 !== i) return;
                                n.closePopup()
                            }
                            r.DomEvent.stop(t)
                        }
                    }
                }), r.Map.addInitHook("addHandler", "keyboard", r.Map.Keyboard), r.Handler.MarkerDrag = r.Handler.extend({
                    initialize: function(t) {
                        this._marker = t
                    },
                    addHooks: function() {
                        var t = this._marker._icon;
                        this._draggable || (this._draggable = new r.Draggable(t, t, !0)), this._draggable.on({
                            dragstart: this._onDragStart,
                            drag: this._onDrag,
                            dragend: this._onDragEnd
                        }, this).enable(), r.DomUtil.addClass(t, "leaflet-marker-draggable")
                    },
                    removeHooks: function() {
                        this._draggable.off({
                            dragstart: this._onDragStart,
                            drag: this._onDrag,
                            dragend: this._onDragEnd
                        }, this).disable(), this._marker._icon && r.DomUtil.removeClass(this._marker._icon, "leaflet-marker-draggable")
                    },
                    moved: function() {
                        return this._draggable && this._draggable._moved
                    },
                    _onDragStart: function() {
                        this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup().fire("movestart").fire("dragstart")
                    },
                    _onDrag: function(t) {
                        var e = this._marker,
                            i = e._shadow,
                            n = r.DomUtil.getPosition(e._icon),
                            o = e._map.layerPointToLatLng(n);
                        i && r.DomUtil.setPosition(i, n), e._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t)
                    },
                    _onDragEnd: function(t) {
                        delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t)
                    }
                }), r.Control = r.Class.extend({
                    options: {
                        position: "topright"
                    },
                    initialize: function(t) {
                        r.setOptions(this, t)
                    },
                    getPosition: function() {
                        return this.options.position
                    },
                    setPosition: function(t) {
                        var e = this._map;
                        return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this
                    },
                    getContainer: function() {
                        return this._container
                    },
                    addTo: function(t) {
                        this.remove(), this._map = t;
                        var e = this._container = this.onAdd(t),
                            i = this.getPosition(),
                            n = t._controlCorners[i];
                        return r.DomUtil.addClass(e, "leaflet-control"), -1 !== i.indexOf("bottom") ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this
                    },
                    remove: function() {
                        return this._map ? (r.DomUtil.remove(this._container), this.onRemove && this.onRemove(this._map), this._map = null, this) : this
                    },
                    _refocusOnMap: function(t) {
                        this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus()
                    }
                }), r.control = function(t) {
                    return new r.Control(t)
                }, r.Map.include({
                    addControl: function(t) {
                        return t.addTo(this), this
                    },
                    removeControl: function(t) {
                        return t.remove(), this
                    },
                    _initControlPos: function() {
                        var t = this._controlCorners = {},
                            e = "leaflet-",
                            i = this._controlContainer = r.DomUtil.create("div", e + "control-container", this._container);

                        function n(n, o) {
                            var s = e + n + " " + e + o;
                            t[n + o] = r.DomUtil.create("div", s, i)
                        }
                        n("top", "left"), n("top", "right"), n("bottom", "left"), n("bottom", "right")
                    },
                    _clearControlPos: function() {
                        r.DomUtil.remove(this._controlContainer)
                    }
                }), r.Control.Zoom = r.Control.extend({
                    options: {
                        position: "topleft",
                        zoomInText: "+",
                        zoomInTitle: "Zoom in",
                        zoomOutText: "-",
                        zoomOutTitle: "Zoom out"
                    },
                    onAdd: function(t) {
                        var e = "leaflet-control-zoom",
                            i = r.DomUtil.create("div", e + " leaflet-bar"),
                            n = this.options;
                        return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, e + "-in", i, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, e + "-out", i, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i
                    },
                    onRemove: function(t) {
                        t.off("zoomend zoomlevelschange", this._updateDisabled, this)
                    },
                    disable: function() {
                        return this._disabled = !0, this._updateDisabled(), this
                    },
                    enable: function() {
                        return this._disabled = !1, this._updateDisabled(), this
                    },
                    _zoomIn: function(t) {
                        !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
                    },
                    _zoomOut: function(t) {
                        !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
                    },
                    _createButton: function(t, e, i, n, o) {
                        var s = r.DomUtil.create("a", i, n);
                        return s.innerHTML = t, s.href = "#", s.title = e, s.setAttribute("role", "button"), s.setAttribute("aria-label", e), r.DomEvent.on(s, "mousedown dblclick", r.DomEvent.stopPropagation).on(s, "click", r.DomEvent.stop).on(s, "click", o, this).on(s, "click", this._refocusOnMap, this), s
                    },
                    _updateDisabled: function() {
                        var t = this._map,
                            e = "leaflet-disabled";
                        r.DomUtil.removeClass(this._zoomInButton, e), r.DomUtil.removeClass(this._zoomOutButton, e), (this._disabled || t._zoom === t.getMinZoom()) && r.DomUtil.addClass(this._zoomOutButton, e), (this._disabled || t._zoom === t.getMaxZoom()) && r.DomUtil.addClass(this._zoomInButton, e)
                    }
                }), r.Map.mergeOptions({
                    zoomControl: !0
                }), r.Map.addInitHook(function() {
                    this.options.zoomControl && (this.zoomControl = new r.Control.Zoom, this.addControl(this.zoomControl))
                }), r.control.zoom = function(t) {
                    return new r.Control.Zoom(t)
                }, r.Control.Attribution = r.Control.extend({
                    options: {
                        position: "bottomright",
                        prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
                    },
                    initialize: function(t) {
                        r.setOptions(this, t), this._attributions = {}
                    },
                    onAdd: function(t) {
                        for (var e in t.attributionControl = this, this._container = r.DomUtil.create("div", "leaflet-control-attribution"), r.DomEvent && r.DomEvent.disableClickPropagation(this._container), t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
                        return this._update(), this._container
                    },
                    setPrefix: function(t) {
                        return this.options.prefix = t, this._update(), this
                    },
                    addAttribution: function(t) {
                        return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this
                    },
                    removeAttribution: function(t) {
                        return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this
                    },
                    _update: function() {
                        if (this._map) {
                            var t = [];
                            for (var e in this._attributions) this._attributions[e] && t.push(e);
                            var i = [];
                            this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(" | ")
                        }
                    }
                }), r.Map.mergeOptions({
                    attributionControl: !0
                }), r.Map.addInitHook(function() {
                    this.options.attributionControl && (new r.Control.Attribution).addTo(this)
                }), r.control.attribution = function(t) {
                    return new r.Control.Attribution(t)
                }, r.Control.Scale = r.Control.extend({
                    options: {
                        position: "bottomleft",
                        maxWidth: 100,
                        metric: !0,
                        imperial: !0
                    },
                    onAdd: function(t) {
                        var e = r.DomUtil.create("div", "leaflet-control-scale"),
                            i = this.options;
                        return this._addScales(i, "leaflet-control-scale-line", e), t.on(i.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), e
                    },
                    onRemove: function(t) {
                        t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
                    },
                    _addScales: function(t, e, i) {
                        t.metric && (this._mScale = r.DomUtil.create("div", e, i)), t.imperial && (this._iScale = r.DomUtil.create("div", e, i))
                    },
                    _update: function() {
                        var t = this._map,
                            e = t.getSize().y / 2,
                            i = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
                        this._updateScales(i)
                    },
                    _updateScales: function(t) {
                        this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t)
                    },
                    _updateMetric: function(t) {
                        var e = this._getRoundNum(t),
                            i = e < 1e3 ? e + " m" : e / 1e3 + " km";
                        this._updateScale(this._mScale, i, e / t)
                    },
                    _updateImperial: function(t) {
                        var e, i, n, o = 3.2808399 * t;
                        o > 5280 ? (e = o / 5280, i = this._getRoundNum(e), this._updateScale(this._iScale, i + " mi", i / e)) : (n = this._getRoundNum(o), this._updateScale(this._iScale, n + " ft", n / o))
                    },
                    _updateScale: function(t, e, i) {
                        t.style.width = Math.round(this.options.maxWidth * i) + "px", t.innerHTML = e
                    },
                    _getRoundNum: function(t) {
                        var e = Math.pow(10, (Math.floor(t) + "").length - 1),
                            i = t / e;
                        return e * (i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1)
                    }
                }), r.control.scale = function(t) {
                    return new r.Control.Scale(t)
                }, r.Control.Layers = r.Control.extend({
                    options: {
                        collapsed: !0,
                        position: "topright",
                        autoZIndex: !0,
                        hideSingleBase: !1,
                        sortLayers: !1,
                        sortFunction: function(t, e, i, n) {
                            return i < n ? -1 : n < i ? 1 : 0
                        }
                    },
                    initialize: function(t, e, i) {
                        for (var n in r.setOptions(this, i), this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, t) this._addLayer(t[n], n);
                        for (n in e) this._addLayer(e[n], n, !0)
                    },
                    onAdd: function(t) {
                        return this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this), this._container
                    },
                    onRemove: function() {
                        this._map.off("zoomend", this._checkDisabledLayers, this);
                        for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this)
                    },
                    addBaseLayer: function(t, e) {
                        return this._addLayer(t, e), this._map ? this._update() : this
                    },
                    addOverlay: function(t, e) {
                        return this._addLayer(t, e, !0), this._map ? this._update() : this
                    },
                    removeLayer: function(t) {
                        t.off("add remove", this._onLayerChange, this);
                        var e = this._getLayer(r.stamp(t));
                        return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this
                    },
                    expand: function() {
                        r.DomUtil.addClass(this._container, "leaflet-control-layers-expanded"), this._form.style.height = null;
                        var t = this._map.getSize().y - (this._container.offsetTop + 50);
                        return t < this._form.clientHeight ? (r.DomUtil.addClass(this._form, "leaflet-control-layers-scrollbar"), this._form.style.height = t + "px") : r.DomUtil.removeClass(this._form, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this
                    },
                    collapse: function() {
                        return r.DomUtil.removeClass(this._container, "leaflet-control-layers-expanded"), this
                    },
                    _initLayout: function() {
                        var t = "leaflet-control-layers",
                            e = this._container = r.DomUtil.create("div", t),
                            i = this.options.collapsed;
                        e.setAttribute("aria-haspopup", !0), r.DomEvent.disableClickPropagation(e), r.Browser.touch || r.DomEvent.disableScrollPropagation(e);
                        var n = this._form = r.DomUtil.create("form", t + "-list");
                        i && (this._map.on("click", this.collapse, this), r.Browser.android || r.DomEvent.on(e, {
                            mouseenter: this.expand,
                            mouseleave: this.collapse
                        }, this));
                        var o = this._layersLink = r.DomUtil.create("a", t + "-toggle", e);
                        o.href = "#", o.title = "Layers", r.Browser.touch ? r.DomEvent.on(o, "click", r.DomEvent.stop).on(o, "click", this.expand, this) : r.DomEvent.on(o, "focus", this.expand, this), r.DomEvent.on(n, "click", function() {
                            setTimeout(r.bind(this._onInputClick, this), 0)
                        }, this), i || this.expand(), this._baseLayersList = r.DomUtil.create("div", t + "-base", n), this._separator = r.DomUtil.create("div", t + "-separator", n), this._overlaysList = r.DomUtil.create("div", t + "-overlays", n), e.appendChild(n)
                    },
                    _getLayer: function(t) {
                        for (var e = 0; e < this._layers.length; e++)
                            if (this._layers[e] && r.stamp(this._layers[e].layer) === t) return this._layers[e]
                    },
                    _addLayer: function(t, e, i) {
                        t.on("add remove", this._onLayerChange, this), this._layers.push({
                            layer: t,
                            name: e,
                            overlay: i
                        }), this.options.sortLayers && this._layers.sort(r.bind(function(t, e) {
                            return this.options.sortFunction(t.layer, e.layer, t.name, e.name)
                        }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex))
                    },
                    _update: function() {
                        if (!this._container) return this;
                        r.DomUtil.empty(this._baseLayersList), r.DomUtil.empty(this._overlaysList);
                        var t, e, i, n, o = 0;
                        for (i = 0; i < this._layers.length; i++) n = this._layers[i], this._addItem(n), e = e || n.overlay, t = t || !n.overlay, o += n.overlay ? 0 : 1;
                        return this.options.hideSingleBase && (t = t && o > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this
                    },
                    _onLayerChange: function(t) {
                        this._handlingClick || this._update();
                        var e = this._getLayer(r.stamp(t.target)),
                            i = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
                        i && this._map.fire(i, e)
                    },
                    _createRadioElement: function(t, e) {
                        var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>",
                            o = n.createElement("div");
                        return o.innerHTML = i, o.firstChild
                    },
                    _addItem: function(t) {
                        var e, i = n.createElement("label"),
                            o = this._map.hasLayer(t.layer);
                        t.overlay ? ((e = n.createElement("input")).type = "checkbox", e.className = "leaflet-control-layers-selector", e.defaultChecked = o) : e = this._createRadioElement("leaflet-base-layers", o), e.layerId = r.stamp(t.layer), r.DomEvent.on(e, "click", this._onInputClick, this);
                        var s = n.createElement("span");
                        s.innerHTML = " " + t.name;
                        var a = n.createElement("div");
                        return i.appendChild(a), a.appendChild(e), a.appendChild(s), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(i), this._checkDisabledLayers(), i
                    },
                    _onInputClick: function() {
                        var t, e, i, n = this._form.getElementsByTagName("input"),
                            o = [],
                            r = [];
                        this._handlingClick = !0;
                        for (var s = n.length - 1; s >= 0; s--) t = n[s], e = this._getLayer(t.layerId).layer, i = this._map.hasLayer(e), t.checked && !i ? o.push(e) : !t.checked && i && r.push(e);
                        for (s = 0; s < r.length; s++) this._map.removeLayer(r[s]);
                        for (s = 0; s < o.length; s++) this._map.addLayer(o[s]);
                        this._handlingClick = !1, this._refocusOnMap()
                    },
                    _checkDisabledLayers: function() {
                        for (var t, e, i = this._form.getElementsByTagName("input"), n = this._map.getZoom(), o = i.length - 1; o >= 0; o--) t = i[o], e = this._getLayer(t.layerId).layer, t.disabled = void 0 !== e.options.minZoom && n < e.options.minZoom || void 0 !== e.options.maxZoom && n > e.options.maxZoom
                    },
                    _expand: function() {
                        return this.expand()
                    },
                    _collapse: function() {
                        return this.collapse()
                    }
                }), r.control.layers = function(t, e, i) {
                    return new r.Control.Layers(t, e, i)
                }
            }(window, document)
        }).call(this, i(73)(t))
    }, function(t, e) {
        t.exports = function(t) {
            if (!t.webpackPolyfill) {
                var e = Object.create(t);
                e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return e.l
                    }
                }), Object.defineProperty(e, "id", {
                    enumerable: !0,
                    get: function() {
                        return e.i
                    }
                }), Object.defineProperty(e, "exports", {
                    enumerable: !0
                }), e.webpackPolyfill = 1
            }
            return e
        }
    }, function(t, e, i) {
        "use strict";
        var n = i(7);
        t.exports = function(t, e) {
            return !!t && n(function() {
                e ? t.call(null, function() {}, 1) : t.call(null)
            })
        }
    }, function(t, e, i) {
        var n = i(9),
            o = i(76).set;
        t.exports = function(t, e, i) {
            var r, s = e.constructor;
            return s !== i && "function" == typeof s && (r = s.prototype) !== i.prototype && n(r) && o && o(t, r), t
        }
    }, function(t, e, i) {
        var n = i(9),
            o = i(10),
            r = function(t, e) {
                if (o(t), !n(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
            };
        t.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, n) {
                try {
                    (n = i(42)(Function.call, i(46).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
                } catch (t) {
                    e = !0
                }
                return function(t, i) {
                    return r(t, i), e ? t.__proto__ = i : n(t, i), t
                }
            }({}, !1) : void 0),
            check: r
        }
    }, function(t, e, i) {
        var n = i(29);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == n(t) ? t.split("") : Object(t)
        }
    }, function(t, e, i) {
        var n = i(13),
            o = i(79),
            r = i(80);
        t.exports = function(t) {
            return function(e, i, s) {
                var a, l = n(e),
                    c = o(l.length),
                    u = r(s, c);
                if (t && i != i) {
                    for (; c > u;)
                        if ((a = l[u++]) != a) return !0
                } else
                    for (; c > u; u++)
                        if ((t || u in l) && l[u] === i) return t || u || 0;
                return !t && -1
            }
        }
    }, function(t, e, i) {
        var n = i(48),
            o = Math.min;
        t.exports = function(t) {
            return t > 0 ? o(n(t), 9007199254740991) : 0
        }
    }, function(t, e, i) {
        var n = i(48),
            o = Math.max,
            r = Math.min;
        t.exports = function(t, e) {
            return (t = n(t)) < 0 ? o(t + e, 0) : r(t, e)
        }
    }, function(t, e, i) {
        "use strict";
        var n = i(2),
            o = i(6),
            r = i(4),
            s = i(3)("species");
        t.exports = function(t) {
            var e = n[t];
            r && e && !e[s] && o.f(e, s, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    }, function(t, e, i) {
        i(4) && "g" != /./g.flags && i(6).f(RegExp.prototype, "flags", {
            configurable: !0,
            get: i(34)
        })
    }, function(t, e, i) {
        (function(t) {
            L.Control.Ginfo = L.Control.extend({
                initialize(t) {
                    L.Util.setOptions(this, t), this.features = {}, t.measure && t.measure.enabled && (this.features.measure = new L.Control.Measure(t.measure))
                },
                onAdd(e) {
                    const i = L.DomUtil.create("div", "leaflet-ginfo-features leaflet-ginfo leaflet-control"),
                        n = L.DomUtil.create("div", "leaflet-ginfo-section", i),
                        o = L.DomUtil.create("div", "leaflet-bar", n);
                    return this.features.measure && o.appendChild(this.features.measure.addTo(e)), t(".leaflet-top.leaflet-right").append(i), L.DomUtil.create("div")
                }
            }), L.Map.addInitHook(function() {
                this.options.ginfoControl && (this.ginfoControl = new L.Control.Ginfo(this.options.ginfoControl), this.ginfoControl.addTo(this))
            }), L.control.ginfo = function(t) {
                return new L.Control.Ginfo(t)
            }
        }).call(this, i(1))
    }, function(t, e, i) {
        (function(t) {
            /*!
            * Copyright (c) 2012-2013, Jürgen Treml
            * */
            L.Control.Measure = L.Control.extend({
                options: {
                    measureUnit: "m",
                    measureFactor: 1,
                    measureEventCallback: void 0,
                    measureInfoType: "time",
                    lineColor: "black"
                },
                initialize(t) {
                    const e = Object.assign({}, this.options, t);
                    L.Control.prototype.initialize.call(this, e)
                },
                addTo(t) {
                    return this.container = L.DomUtil.create("a", "leaflet-control-measure"), this.container.setAttribute("role", "button"), this.map = t, this._createButton(this.container, this), this.container
                },
                _createButton(t, e) {
                    const i = L.DomUtil.create("i", "material-icons", t);
                    return i.textContent = "timeline", L.DomEvent.on(t, "click", L.DomEvent.stopPropagation).on(t, "click", L.DomEvent.preventDefault).on(t, "click", this._toggleMeasure, e).on(t, "dblclick", L.DomEvent.stopPropagation), i
                },
                _toggleMeasure() {
                    this._measuring = !this._measuring, "function" == typeof this.options.measureEventCallback && this.options.measureEventCallback(), this._measuring ? (L.DomUtil.addClass(this.container, "leaflet-control-measure-on"), L.DomUtil.addClass(this.container, "btn-primary"), L.DomUtil.addClass(this.container, "active"), this._startMeasuring()) : (L.DomUtil.removeClass(this.container, "leaflet-control-measure-on"), L.DomUtil.removeClass(this.container, "btn-primary"), L.DomUtil.removeClass(this.container, "active"), this._stopMeasuring())
                },
                _startMeasuring() {
                    this.map._container.style.cursor = "crosshair", L.DomEvent.addListener(this.map, "mousemove", this._mouseMove, this).addListener(this.map, "click", this._mouseClick, this).addListener(document, "keydown", this._onKeyDown, this), this._layerPaint || (this._layerPaint = L.featureGroup().addTo(this.map)), this._points || (this._points = [])
                },
                _stopMeasuring() {
                    this.map._container.style.cursor = "", L.DomEvent.removeListener(this.map, "click", this._mouseClick, this).removeListener(this.map, "mousemove", this._mouseMove, this).removeListener(document, "keydown", this._onKeyDown, this), this._layerPaint && this._layerPaint.clearLayers(), this._finishPath()
                },
                _mouseMove(t) {
                    if (t.latlng && this._lastPoint && (this._layerPaintPathTemp ? this._layerPaintPathTemp.setLatLngs([this._lastPoint, t.latlng]) : (this._layerPaintPathTemp = L.polyline([this._lastPoint, t.latlng], {
                            color: this.options.lineColor,
                            weight: 1.5,
                            clickable: !1,
                            dashArray: "5,10",
                            pointerEvents: null
                        }), this._layerPaintPathTemp.setStyle({
                            className: "measure-path"
                        }), this._layerPaintPathTemp.addTo(this._layerPaint)), this._tooltip)) {
                        this._distance || (this._distance = 0), this._updateTooltipPosition(t.latlng);
                        const e = this._distanceTo(t.latlng, this._lastPoint);
                        this._updateTooltipDistance(this._distance + e, e)
                    }
                },
                _distanceTo(t, e) {
                    const i = this.map.project(t, this.map.getMaxZoom()),
                        n = this.map.project(e, this.map.getMaxZoom()),
                        o = i.x - n.x,
                        r = i.y - n.y;
                    return Math.sqrt(o * o + r * r)
                },
                _mouseClick(t) {
                    if (t.latlng) {
                        if (this._layerPaint.bringToFront(), this._lastPoint && this._tooltip) {
                            this._distance || (this._distance = 0), this._updateTooltipPosition(t.latlng);
                            const e = this._distanceTo(t.latlng, this._lastPoint);
                            this._updateTooltipDistance(this._distance + e, e), this._distance += e
                        }
                        this._createTooltip(t.latlng), this._lastPoint && !this._layerPaintPath && (this._layerPaintPath = L.polyline([this._lastPoint], {
                            color: this.options.lineColor,
                            weight: 2,
                            clickable: !1
                        }).addTo(this._layerPaint)), this._layerPaintPath && this._layerPaintPath.addLatLng(t.latlng), this._lastCircle = new L.CircleMarker(t.latlng, {
                            color: this.options.lineColor,
                            opacity: 1,
                            weight: 1,
                            fill: !0,
                            fillOpacity: 1,
                            radius: 3,
                            clickable: Boolean(this._lastCircle)
                        }).addTo(this._layerPaint), this._lastCircle.on("click", function() {
                            this._finishPath()
                        }, this), this._lastPoint = t.latlng
                    }
                },
                _finishPath() {
                    this._tooltip && this._layerPaint.removeLayer(this._tooltip), this._layerPaint && this._layerPaintPathTemp && this._layerPaint.removeLayer(this._layerPaintPathTemp), this._restartPath()
                },
                _restartPath() {
                    this._distance = 0, this._tooltip = void 0, this._lastCircle = void 0, this._lastPoint = void 0, this._layerPaintPath = void 0, this._layerPaintPathTemp = void 0
                },
                _createTooltip(t) {
                    const e = L.divIcon({
                        className: "leaflet-measure-tooltip",
                        iconAnchor: [-5, -5]
                    });
                    this._tooltip = L.marker(t, {
                        icon: e,
                        clickable: !1
                    }).addTo(this._layerPaint)
                },
                _updateTooltipPosition(t) {
                    this._tooltip.setLatLng(t)
                },
                _updateTooltipDistance(e, i) {
                    const n = this._roundWithMeasureFactor(i),
                        o = this._roundWithMeasureFactor(e),
                        r = this._getTime(this._getRunTime(o)),
                        s = this._getTime(this._getSprintTime(o)),
                        a = this._getTime(this._getRunTime(n)),
                        l = this._getTime(this._getSprintTime(n));
                    let c = '<table><tr class="leaflet-measure-tooltip-total"><td>&nbsp;&nbsp;' + this._getFormattedDistance(o) + '</td><td class="measure-extend-info" style="display:none"><i class="material-icons">directions_walk</i>' + r + '</td><td class="measure-extend-info" style="display:none"><i class="material-icons">directions_run</i> ' + s + "</td></tr>";
                    c += '<tr class="leaflet-measure-tooltip-difference"><td>+' + this._getFormattedDistance(n) + '</td><td class="measure-extend-info" style="display:none"><i class="material-icons">directions_walk</i>' + a + '</td><td class="measure-extend-info" style="display:none"><i class="material-icons">directions_run</i> ' + l + "</td></tr></table>", c += '<span class="leaflet-measure-extend"><i class="measure-extend material-icons">chevron_right</i></span>', this._expanded = !1;
                    const u = t(this._tooltip._icon);
                    u.unbind("click").click(function(t) {
                        this._expanded = !this._expanded, this._expanded ? u.find(".measure-extend")[0].textContent = "chevron_left" : u.find(".measure-extend")[0].textContent = "chevron_right", u.find(".measure-extend-info").toggle(100), t.preventDefault(), t.stopPropagation()
                    }), this._tooltip._icon.innerHTML = c
                },
                _getFormattedDistance(t) {
                    return t.toLocaleString() + this.options.measureUnit
                },
                _getRunTime(t) {
                    return t / this.options.runningTimeFactor
                },
                _getSprintTime(t) {
                    return t / this.options.sprintingTimeFactor
                },
                _getTime(t) {
                    const e = Math.floor(t / 3600),
                        i = Math.floor(t / 60 - 60 * e);
                    let n;
                    return t = Math.floor(t % 3600 % 60), (e > 0 ? e + "h" : "") + (e > 0 || i > 0 ? i + "min" : "") + (n = e > 0 ? i > 0 ? "" : t + "s" : (i > 0 ? " " : "") + t + "s")
                },
                _roundWithMeasureFactor(t) {
                    return Math.round(t * this.options.measureFactor)
                },
                _onKeyDown(t) {
                    this._lastPoint ? this._finishPath() : this._toggleMeasure()
                }
            }), L.Map.addInitHook(function() {
                this.options.measureControl && (this.measureControl = new L.Control.Measure(this.options.measureControl), this.measureControl.addTo(this))
            }), L.control.measure = function(t) {
                return new L.Control.Measure(t)
            }
        }).call(this, i(1))
    }, function(t, e) {
        L.Map.addInitHook(function() {
            var t, e = this;

            function i() {
                null != t && (clearTimeout(t), t = null)
            }
            e.on && (e.on("click", function(n) {
                i(), t = setTimeout(function() {
                    e.fire("singleclick", L.Util.extend(n, {
                        type: "singleclick"
                    }))
                }, 200)
            }), e.on("dblclick", function() {
                setTimeout(i, 0)
            }))
        })
    }, function(t, e, i) {
        (function(t) {
            ! function(t, e, i, n) {
                "use strict";
                var o = "ripples",
                    r = null,
                    s = {};

                function a(e, i) {
                    r = this, this.element = t(e), this.options = t.extend({}, s, i), this._defaults = s, this._name = o, this.init()
                }
                a.prototype.init = function() {
                    var i = this.element;
                    i.on("mousedown touchstart", function(n) {
                        if (!r.isTouch() || "mousedown" !== n.type) {
                            i.find(".ripple-container").length || i.append('<div class="ripple-container"></div>');
                            var o = i.children(".ripple-container"),
                                s = r.getRelY(o, n),
                                a = r.getRelX(o, n);
                            if (s || a) {
                                var l = r.getRipplesColor(i),
                                    c = t("<div></div>");
                                c.addClass("ripple").css({
                                    left: a,
                                    top: s,
                                    "background-color": l
                                }), o.append(c), e.getComputedStyle(c[0]).opacity, r.rippleOn(i, c), setTimeout(function() {
                                    r.rippleEnd(c)
                                }, 500), i.on("mouseup mouseleave touchend", function() {
                                    c.data("mousedown", "off"), "off" === c.data("animating") && r.rippleOut(c)
                                })
                            }
                        }
                    })
                }, a.prototype.getNewSize = function(t, e) {
                    return Math.max(t.outerWidth(), t.outerHeight()) / e.outerWidth() * 2.5
                }, a.prototype.getRelX = function(t, e) {
                    var i = t.offset();
                    return r.isTouch() ? 1 === (e = e.originalEvent).touches.length && e.touches[0].pageX - i.left : e.pageX - i.left
                }, a.prototype.getRelY = function(t, e) {
                    var i = t.offset();
                    return r.isTouch() ? 1 === (e = e.originalEvent).touches.length && e.touches[0].pageY - i.top : e.pageY - i.top
                }, a.prototype.getRipplesColor = function(t) {
                    return t.data("ripple-color") ? t.data("ripple-color") : e.getComputedStyle(t[0]).color
                }, a.prototype.hasTransitionSupport = function() {
                    var t = (i.body || i.documentElement).style;
                    return void 0 !== t.transition || void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.MsTransition || void 0 !== t.OTransition
                }, a.prototype.isTouch = function() {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                }, a.prototype.rippleEnd = function(t) {
                    t.data("animating", "off"), "off" === t.data("mousedown") && r.rippleOut(t)
                }, a.prototype.rippleOut = function(t) {
                    t.off(), r.hasTransitionSupport() ? t.addClass("ripple-out") : t.animate({
                        opacity: 0
                    }, 100, function() {
                        t.trigger("transitionend")
                    }), t.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                        t.remove()
                    })
                }, a.prototype.rippleOn = function(t, e) {
                    var i = r.getNewSize(t, e);
                    r.hasTransitionSupport() ? e.css({
                        "-ms-transform": "scale(" + i + ")",
                        "-moz-transform": "scale(" + i + ")",
                        "-webkit-transform": "scale(" + i + ")",
                        transform: "scale(" + i + ")"
                    }).addClass("ripple-on").data("animating", "on").data("mousedown", "on") : e.animate({
                        width: 2 * Math.max(t.outerWidth(), t.outerHeight()),
                        height: 2 * Math.max(t.outerWidth(), t.outerHeight()),
                        "margin-left": -1 * Math.max(t.outerWidth(), t.outerHeight()),
                        "margin-top": -1 * Math.max(t.outerWidth(), t.outerHeight()),
                        opacity: .2
                    }, 500, function() {
                        e.trigger("transitionend")
                    })
                }, t.fn.ripples = function(e) {
                    return this.each(function() {
                        t.data(this, "plugin_" + o) || t.data(this, "plugin_" + o, new a(this, e))
                    })
                }
            }(t, window, document)
        }).call(this, i(1))
    }, function(t, e, i) {
        "use strict";
        (function(t) {
            i(5);
            L.Dialog = L.Class.extend({
                initialize: function(e) {
                    e = L.setOptions(this, e);
                    var i = function() {
                        this.close()
                    }.bind(this);
                    this.$dialog.find(".btn-close").on("click", i), this.$dialog.find(".close").on("click", i), t(document).keyup(function(t) {
                        27 === t.keyCode && i()
                    })
                },
                replaceURLWithHTMLLinks: function(t) {
                    return t.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1'>$1</a>")
                },
                getMaxWidth: function(e) {
                    return e > t(window).width() ? t(window).width() : e
                },
                show: function() {
                    t(".iz-action-panel").hide(), t("#main-nav").collapse("hide"), this.$dialog.show(), this.$dialog.focus()
                },
                close: function() {
                    this.$dialog.hide()
                },
                updateTips: function(t, e) {
                    e.text(t).closest(".form-group").addClass("has-error")
                },
                checkLength: function(t, e, i, n, o) {
                    void 0 === o && (o = !1);
                    var r = t.val();
                    return o && (r = r.trim()), !(r.length < i) || (t.closest(".form-group").addClass("has-error"), this.updateTips(e + " is too short (minimum " + i + " characters).", n), !1)
                }
            }), L.RequiredActionDialog = L.Dialog.extend({
                initialize: function(t) {
                    L.Dialog.prototype.initialize.call(this)
                },
                close: function() {
                    this.$dialog.find(":checkbox").first().is(":checked") && (this.dontShow = !0), L.Dialog.prototype.close.call(this)
                },
                show: function() {
                    this.dontShow || L.Dialog.prototype.show.call(this)
                }
            }), L.requiredActionDialog = function(t) {
                return new L.RequiredActionDialog(t)
            }
        }).call(this, i(1))
    }, function(t, e, i) {
        "use strict";
        (function(t) {
            i(5);
            /*!
            * Copyright (c) by Innovaptor OG 2013-2014
            * Bernhard Eder
            **/
            L.IZUtil = {
                entityMap: {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#x2F;"
                },
                escapeHtml: function(t) {
                    return String(t).replace(/[&<>"'\/]/g, function(t) {
                        return L.IZUtil.entityMap[t]
                    })
                },
                beginsWith: function(t, e) {
                    return t.substring(0, e.length) === e
                },
                toTitleCase: function(t) {
                    return t.replace(/\w\S*/g, function(t) {
                        return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
                    })
                }
            }, t(document).ready(function() {
                t(function() {
                    t("ul.dropdown-menu").on("click", "[data-stopPropagation]", function(t) {
                        t.stopPropagation()
                    })
                }), t(".dropdown-menu input, .dropdown-menu label").click(function(t) {
                    t.stopPropagation()
                })
            })
        }).call(this, i(1))
    }, function(t, e) {
        /*!
        * Copyright (c) by Innovaptor OG 2013-2014
        * Bernhard Eder
        **/
        L.LocUtil = {
            options: {},
            mapPanTo: function(t, e, i) {
                t.panTo([e.lat, e.lng], {
                    animate: !1,
                    duration: 0
                }), t.setZoom(i), t.setCoordinates()
            },
            pointToCoords: function(t, e) {
                const i = L.Projection.SphericalMercator,
                    n = {
                        x: (t.x - e.dx) / e.kx,
                        y: (t.y - e.dy) / e.ky
                    };
                return i.unproject(n)
            },
            locToCoords: function(t, e) {
                var i = L.Projection.SphericalMercator,
                    n = t.loc1,
                    o = t.loc2;
                e.switchedCoords && (o = [n, n = o][0]);
                var r = {
                    x: (n - e.dx) / e.kx,
                    y: (o - e.dy) / e.ky
                };
                console.log('here', i.unproject)
                return i.unproject(r)
            },
            coordsToYx: function(t, e) {
                var i = L.Projection.SphericalMercator.project(t),
                    n = i.x * e.kx + e.dx,
                    o = i.y * e.ky + e.dy;
                return e.switchedCoords && (o = [n, n = o][0]), {
                    loc1: n,
                    loc2: o
                }
            }
        }
    }, function(t, e, i) {
        "use strict";
        t.exports = function(t, e, i, n, o, r, s, a) {
            if (!t) {
                var l;
                if (void 0 === e) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var c = [i, n, o, r, s, a],
                        u = 0;
                    (l = new Error(e.replace(/%s/g, function() {
                        return c[u++]
                    }))).name = "Invariant Violation"
                }
                throw l.framesToPop = 1, l
            }
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0, e.locationsAreEqual = e.createLocation = void 0;
        var n = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                }
                return t
            },
            o = a(i(92)),
            r = a(i(93)),
            s = i(52);

        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        e.createLocation = function(t, e, i, r) {
            var a = void 0;
            "string" == typeof t ? (a = (0, s.parsePath)(t)).state = e : (void 0 === (a = n({}, t)).pathname && (a.pathname = ""), a.search ? "?" !== a.search.charAt(0) && (a.search = "?" + a.search) : a.search = "", a.hash ? "#" !== a.hash.charAt(0) && (a.hash = "#" + a.hash) : a.hash = "", void 0 !== e && void 0 === a.state && (a.state = e));
            try {
                a.pathname = decodeURI(a.pathname)
            } catch (t) {
                throw t instanceof URIError ? new URIError('Pathname "' + a.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : t
            }
            return i && (a.key = i), r ? a.pathname ? "/" !== a.pathname.charAt(0) && (a.pathname = (0, o.default)(a.pathname, r.pathname)) : a.pathname = r.pathname : a.pathname || (a.pathname = "/"), a
        }, e.locationsAreEqual = function(t, e) {
            return t.pathname === e.pathname && t.search === e.search && t.hash === e.hash && t.key === e.key && (0, r.default)(t.state, e.state)
        }
    }, function(t, e, i) {
        "use strict";

        function n(t) {
            return "/" === t.charAt(0)
        }

        function o(t, e) {
            for (var i = e, n = i + 1, o = t.length; n < o; i += 1, n += 1) t[i] = t[n];
            t.pop()
        }
        i.r(e), e.default = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                i = t && t.split("/") || [],
                r = e && e.split("/") || [],
                s = t && n(t),
                a = e && n(e),
                l = s || a;
            if (t && n(t) ? r = i : i.length && (r.pop(), r = r.concat(i)), !r.length) return "/";
            var c = void 0;
            if (r.length) {
                var u = r[r.length - 1];
                c = "." === u || ".." === u || "" === u
            } else c = !1;
            for (var h = 0, p = r.length; p >= 0; p--) {
                var d = r[p];
                "." === d ? o(r, p) : ".." === d ? (o(r, p), h++) : h && (o(r, p), h--)
            }
            if (!l)
                for (; h--; h) r.unshift("..");
            !l || "" === r[0] || r[0] && n(r[0]) || r.unshift("");
            var f = r.join("/");
            return c && "/" !== f.substr(-1) && (f += "/"), f
        }
    }, function(t, e, i) {
        "use strict";
        i.r(e);
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        e.default = function t(e, i) {
            if (e === i) return !0;
            if (null == e || null == i) return !1;
            if (Array.isArray(e)) return Array.isArray(i) && e.length === i.length && e.every(function(e, n) {
                return t(e, i[n])
            });
            var o = void 0 === e ? "undefined" : n(e);
            if (o !== (void 0 === i ? "undefined" : n(i))) return !1;
            if ("object" === o) {
                var r = e.valueOf(),
                    s = i.valueOf();
                if (r !== e || s !== i) return t(r, s);
                var a = Object.keys(e),
                    l = Object.keys(i);
                return a.length === l.length && a.every(function(n) {
                    return t(e[n], i[n])
                })
            }
            return !1
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(i(51));
        e.default = function() {
            var t = null,
                e = [];
            return {
                setPrompt: function(e) {
                    return (0, n.default)(null == t, "A history supports only one prompt at a time"), t = e,
                        function() {
                            t === e && (t = null)
                        }
                },
                confirmTransitionTo: function(e, i, o, r) {
                    if (null != t) {
                        var s = "function" == typeof t ? t(e, i) : t;
                        "string" == typeof s ? "function" == typeof o ? o(s, r) : ((0, n.default)(!1, "A history needs a getUserConfirmation function in order to use a prompt message"), r(!0)) : r(!1 !== s)
                    } else r(!0)
                },
                appendListener: function(t) {
                    var i = !0,
                        n = function() {
                            i && t.apply(void 0, arguments)
                        };
                    return e.push(n),
                        function() {
                            i = !1, e = e.filter(function(t) {
                                return t !== n
                            })
                        }
                },
                notifyListeners: function() {
                    for (var t = arguments.length, i = Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                    e.forEach(function(t) {
                        return t.apply(void 0, i)
                    })
                }
            }
        }
    }, function(t, e, i) {
        "use strict";
        e.__esModule = !0;
        e.canUseDOM = !("undefined" == typeof window || !window.document || !window.document.createElement), e.addEventListener = function(t, e, i) {
            return t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent("on" + e, i)
        }, e.removeEventListener = function(t, e, i) {
            return t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent("on" + e, i)
        }, e.getConfirmation = function(t, e) {
            return e(window.confirm(t))
        }, e.supportsHistory = function() {
            var t = window.navigator.userAgent;
            return (-1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone")) && (window.history && "pushState" in window.history)
        }, e.supportsPopStateOnHashChange = function() {
            return -1 === window.navigator.userAgent.indexOf("Trident")
        }, e.supportsGoWithoutReloadUsingHash = function() {
            return -1 === window.navigator.userAgent.indexOf("Firefox")
        }, e.isExtraneousPopstateEvent = function(t) {
            return void 0 === t.state && -1 === navigator.userAgent.indexOf("CriOS")
        }
    }, function(t, e, i) {
        "use strict";
        (function(t) {
            i(14);
            L.HashAction = L.HashClass.extend({
                statics: {},
                options: {},
                initialize: function(t) {
                    t = L.setOptions(this, t)
                },
                evaluateActions: function(t) {
                    return this._evaluateActions(this.getHashParams(), this.getQueryParams(), t)
                },
                _evaluateGroupJoin: function(e, i) {
                    var n, o;
                    return "group" in e ? n = e.group : i.has("group") && (n = i.get("group")), "secret" in e ? o = e.secret : i.has("secret") && (o = i.get("secret")), void 0 !== n && void 0 !== o && (t(window).on("load", function() {
                        t("#groupname").val(n), t("#secret").val(o), t("#panel-join-group").show()
                    }), !0)
                },
                _evaluateMapSearch: function(e) {
                    var i;
                    return "cityname" in e && (i = e.cityname), void 0 !== i && (t(window).on("load", function() {
                        t("#citysearch").val(i).trigger("keyup"), t("#panel-search").slideDown(200)
                    }), !0)
                },
                _evaluateLocation: function(t) {
                    if ("location" in t) {
                        var e = t.location.split(";"),
                            i = parseFloat(e[0]),
                            n = parseFloat(e[1]);
                        if (isNaN(i)) return null;
                        if (isNaN(n)) return null;
                        let o = 6;
                        return e.length > 2 && (o = parseFloat(e[2])), isNaN(o) && (o = 6), {
                            loc1: i,
                            loc2: n,
                            zoom: o
                        }
                    }
                },
                _evaluateActions: function(t, e, i) {
                    if (this._evaluateGroupJoin(t, e)) return;
                    const n = this._evaluateLocation(t);
                    if (n) return i({
                        loc1: n.loc1,
                        loc2: n.loc2
                    }, n.zoom), !0;
                    this._evaluateMapSearch(t)
                },
                getHashForGroup: function(t, e) {
                    return `?group=${encodeURIComponent(t)}&secret=${encodeURIComponent(e)}`
                }
            }), L.hashAction = function(t) {
                return new L.HashAction(t)
            }, L.Map.include({})
        }).call(this, i(1))
    }, function(t, e, i) {
        "use strict";
        (function(t) {
            i(53), i(56), i(24), i(5), i(15), i(21);
            var e = i(16),
                n = i(0);

            function o(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(i);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(i, t).enumerable
                    }))), n.forEach(function(e) {
                        r(t, e, i[e])
                    })
                }
                return t
            }

            function r(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }

            function s(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var i = [],
                        n = !0,
                        o = !1,
                        r = void 0;
                    try {
                        for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value), !e || i.length !== e); n = !0);
                    } catch (t) {
                        o = !0, r = t
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (o) throw r
                        }
                    }
                    return i
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            L.LootManager = L.Class.extend({
                statics: {},
                options: {
                    overallFactor: 1,
                    lootdropdownId: "loot-dropdown",
                    canvasLayerOptions: {
                        minZoom: 1,
                        maxZoom: 6,
                        redrawOnReset: !1
                    },
                    lootmapFilename: "lootmap.gz.json",
                    maxZoom: 7,
                    lootspriteFile: "/images/sprite/looticons1-13d1933b.png",
                    lootfilterSpritename: "lootfilter1-sprite",
                    categoryHasIcons: !0,
                    cookieExpire: void 0
                },
                initialize: function(t) {
                    if (t.hasOwnProperty("maxZoom") && (this.options.canvasLayerOptions.maxZoom = t.maxZoom), t = L.setOptions(this, t), this._handleFilterSettingsFromQuery(), void 0 === this.options.mapName) throw new Error("mapName is required for LootManager");
                    if (void 0 === this.options.mapVersion) throw new Error("mapVersion is required for LootManager");
                    this._lootSubtypeLayers = {}, this._lootSubtypes = {}, this._createVislayers(), this._createLootIcons(), this._canvasLayer = L.canvasLayer(this.options.canvasLayerOptions)
                },
                _handleFilterSettingsFromQuery() {
                    try {
                        const t = new URLSearchParams(document.location.search);
                        if (!t.has("filter[]")) return;
                        if (this.options.defaultCategories = t.getAll("filter[]"), n.c) {
                            for (const t in localStorage) t.startsWith("ginfo:filter:") && localStorage.removeItem(t);
                            this.options.defaultCategories.forEach(t => {
                                localStorage.setItem("ginfo:filter:" + t, !0, {
                                    expires: this.options.cookieExpire
                                })
                            })
                        }
                    } catch (t) {
                        console.error(t)
                    }
                },
                zoomFunction: function(t) {
                    return this.options.zoomlevelScaling[t] * this.options.overallFactor
                },
                _createLootIcons: function() {
                    this._lootIcons = Object.entries(this.options.defaultLootIconsSize).reduce((t, e) => {
                        let i = s(e, 2),
                            n = i[0],
                            r = i[1];
                        return o({}, t, {
                            [n]: L.divIcon({
                                iconUrl: this.options.lootspriteFile,
                                iconSize: r.icn_size,
                                spriteOffset: r.offset
                            })
                        })
                    }, {})
                },
                _createVislayers: function() {
                    this._lootLayers = this.options.categories.reduce((t, e) => {
                        var i = this.options.defaultCategories.includes(e);
                        return n.c && localStorage.getItem("ginfo:filter:" + e) && (i = "true" === localStorage.getItem("ginfo:filter:" + e)), o({}, t, {
                            [e]: L.visibilityLayer({
                                visible: i
                            })
                        })
                    }, {})
                },
                _addLootgroupButton: function(e) {
                    var i = '<li data-stopPropagation="true" class="dropdown-submenu"><div class="checkbox"> <label> <input type="checkbox" id="loot_' + e + '"';
                    n.c && localStorage.getItem("ginfo:filter:" + e) ? "true" === localStorage.getItem("ginfo:filter:" + e) && (i += ' checked="true"') : -1 === t.inArray(e, this.options.defaultCategories) && "all" !== e || (i += ' checked="true"'), i += '><span class="checkbox-material checkbox-loot"><span class="check"></span></span>' + e.toUpperCase().replace(/_+/g, " ") + "</label></div>", i += '<div class="loot-submenu" id="' + e + '-submenu"></div>', t("#" + this.options.lootdropdownId).append(i)
                },
                _createLootButtons: function() {
                    var e = this;
                    this._addLootgroupButton("all"), t("#loot_all").change(function() {
                        var i = this.checked;
                        n.c && localStorage.setItem("ginfo:filter:all", i, {
                            expires: e.options.cookieExpire
                        }), t.each(e.options.categories, function(n, o) {
                            t("#loot_" + o).prop("checked", i), e._switchLootGroup(o, i)
                        })
                    }), t.each(this.options.categories, function(i, n) {
                        this._addLootgroupButton(n), this._lootSubtypes[n] = [], t("#loot_" + n).change(function() {
                            e._switchLootGroup(n, this.checked)
                        })
                    }.bind(this)), t(".btn-submenu-expand").on("click", function(e) {
                        var i = t(this);
                        "remove" === i.text() ? i.text("add") : i.text("remove"), t(i.data("submenu")).toggle(), e.preventDefault(), e.stopPropagation()
                    })
                },
                _switchLootGroup: function(i, o) {
                    this._lootLayers[i].setVisible(o, !0);
                    var r = this.options.cookieExpire;
                    n.c && localStorage.setItem("ginfo:filter:" + i, o, {
                        expires: r
                    }), t.each(this._lootSubtypes[i], function(e, i) {
                        t("#subloot_" + i).prop("checked", o), n.c && localStorage.setItem("ginfo:filter:" + i, o, {
                            expires: r
                        })
                    }), e.a(void 0, function(t) {
                        ga("send", "event", "loot", o ? "checkLoot" : "uncheckLoot", i)
                    })
                },
                _getLootmapURL: function() {
                    return this.options.mapDirectory + "/" + this.options.mapName + "/" + this.options.mapVersion + "/" + this.options.lootmapFilename
                },
                _getLootMap: function() {
                    var e = this;
                    t.ajax({
                        dataType: "json",
                        url: this._getLootmapURL(),
                        tryCount: 0,
                        retryLimit: 5,
                        success: function(t) {
                            this._clearAllVisLayers(), this._buildLootMarker(t), this._addVisLayers(), this._sortSubloots()
                        }.bind(this),
                        error: function(i, n, o) {
                            "timeout" === n && (this.tryCount++, this.tryCount <= this.retryLimit) ? t.ajax(this) : "No Transport" !== o && i.getAllResponseHeaders() && Raven.captureMessage("Error while trying to load lootmap", {
                                tags: {
                                    textStatus: n,
                                    errorThrown: o,
                                    mapname: e.options.mapName,
                                    responseText: i.responseText,
                                    ajaxUrl: e._getLootmapURL(),
                                    xhr: i
                                }
                            })
                        }
                    })
                },
                _clearAllVisLayers: function() {
                    Object.values(this._lootLayers).forEach(t => {
                        t.clearLayers()
                    })
                },
                _buildLootMarker: function(e) {
                    t.each(e, function(e, i) {
                        var n = 0;
                        e in this.options.lootgroupZIndex && (n = this.options.lootgroupZIndex[e]), t.each(i, function(t, i) {
                            var o = i.lng,
                                r = i.lat,
                                s = this._getLootLayer(e, i.subtype);
                            if (null !== s) {
                                var a = {
                                    icon: this._lootIcons[i.subtype],
                                    clickable: !1,
                                    visible: !1,
                                    zIndexOffset: n
                                };
                                this.options.individualScaleFactor.hasOwnProperty(i.subtype) && (a.scaleFactor = this.options.individualScaleFactor[i.subtype]);
                                var l = L.marker([r, o], a);
                                s.addLayer(l)
                            }
                        }.bind(this))
                    }.bind(this))
                },
                _sortSubloots: function() {
                    t.each(this.options.categories, function(e, i) {
                        var n = t("#lootsub_" + i + " li").get();
                        n.sort(function(e, i) {
                            var n = t(e).text(),
                                o = t(i).text();
                            return t(e).hasClass("map-section-header") ? -1 : t(i).hasClass("map-section-header") ? 1 : (n = n.replace("Low", "0"), o = o.replace("Low", "0"), n = n.replace("Medium", "1"), o = o.replace("Medium", "1"), (n = n.replace("High", "2")) < (o = o.replace("High", "2")) ? -1 : n > o ? 1 : 0)
                        });
                        var o = t("#lootsub_" + i);
                        t.each(n, function(t, e) {
                            o.append(e)
                        })
                    })
                },
                _createSubtypeLootButton: function(e, i) {
                    var o = '<li data-stopPropagation="true" class="dropdown-submenu"><div class="checkbox"> <label> <input type="checkbox" id="subloot_' + i + '" ';
                    let r = !1;
                    var s;
                    n.c && localStorage.getItem("ginfo:filter:" + i) ? "true" === localStorage.getItem("ginfo:filter:" + i) && (r = !0) : (this.options.defaultCategories.includes(e) || this.options.defaultCategories.includes(i)) && (r = !0), r && (o += ' checked="true"'), n.c && localStorage.setItem("ginfo:filter:" + i, r, {
                        expires: this.options.cookieExpire
                    }), o += '><span class="checkbox-material checkbox-loot"><span class="check"></span></span>', o += '<span class="' + this.options.lootfilterSpritename + '" id="' + i + '"></span>', i in this.options.subcatnames ? s = this.options.subcatnames[i] : (s = (s = i).replace("_", " "), s = L.IZUtil.toTitleCase(s)), o += " " + s + "</label></div></li>", t("#" + e + "-submenu").append(o)
                },
                _getLootLayer: function(i, o) {
                    if (o in this._lootSubtypeLayers) return this._lootSubtypeLayers[o];
                    if (!this._lootLayers[i]) return null;
                    var r = this._lootLayers[i].getVisible() || this.options.defaultCategories.includes(o);
                    n.c && localStorage.getItem("ginfo:filter:" + o) && (r = "true" === localStorage.getItem("ginfo:filter:" + o));
                    var s = L.visibilityLayer({
                        visible: r
                    });
                    s.getScaling = L.bind(this.zoomFunction, this), this._lootSubtypeLayers[o] = s, this._lootLayers[i].addLayer(s), this._lootSubtypes[i].push(o), this._createSubtypeLootButton(i, o);
                    var a = this;
                    return t("#subloot_" + o).change(function() {
                        a._lootSubtypeLayers[o].setVisible(this.checked), n.c && localStorage.setItem("ginfo:filter:" + o, this.checked, {
                            expires: a.options.cookieExpire
                        }), e.a(this.checked, function(t) {
                            ga("send", "event", "subloot", t ? "checkLoot" : "uncheckLoot", o)
                        })
                    }), s
                },
                _addVisLayers: function() {
                    Object.values(this._lootLayers).forEach(t => {
                        this._canvasLayer.addLayer(t)
                    })
                }
            }), L.lootManager = function(t) {
                return new L.LootManager(t)
            }, L.Map.include({
                addLootManager: function(t) {
                    this.addLayer(t._canvasLayer), t._getLootMap(), t._createLootButtons()
                }
            })
        }).call(this, i(1))
    }, function(t, e, i) {
        var n = i(17)("meta"),
            o = i(9),
            r = i(12),
            s = i(6).f,
            a = 0,
            l = Object.isExtensible || function() {
                return !0
            },
            c = !i(7)(function() {
                return l(Object.preventExtensions({}))
            }),
            u = function(t) {
                s(t, n, {
                    value: {
                        i: "O" + ++a,
                        w: {}
                    }
                })
            },
            h = t.exports = {
                KEY: n,
                NEED: !1,
                fastKey: function(t, e) {
                    if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                    if (!r(t, n)) {
                        if (!l(t)) return "F";
                        if (!e) return "E";
                        u(t)
                    }
                    return t[n].i
                },
                getWeak: function(t, e) {
                    if (!r(t, n)) {
                        if (!l(t)) return !0;
                        if (!e) return !1;
                        u(t)
                    }
                    return t[n].w
                },
                onFreeze: function(t) {
                    return c && h.NEED && l(t) && !r(t, n) && u(t), t
                }
            }
    }, function(t, e, i) {
        var n = i(23),
            o = i(57),
            r = i(28);
        t.exports = function(t) {
            var e = n(t),
                i = o.f;
            if (i)
                for (var s, a = i(t), l = r.f, c = 0; a.length > c;) l.call(t, s = a[c++]) && e.push(s);
            return e
        }
    }, function(t, e, i) {
        var n = i(29);
        t.exports = Array.isArray || function(t) {
            return "Array" == n(t)
        }
    }, function(t, e, i) {
        var n = i(6),
            o = i(10),
            r = i(23);
        t.exports = i(4) ? Object.defineProperties : function(t, e) {
            o(t);
            for (var i, s = r(e), a = s.length, l = 0; a > l;) n.f(t, i = s[l++], e[i]);
            return t
        }
    }, function(t, e, i) {
        var n = i(2).document;
        t.exports = n && n.documentElement
    }, function(t, e, i) {
        var n = i(13),
            o = i(30).f,
            r = {}.toString,
            s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        t.exports.f = function(t) {
            return s && "[object Window]" == r.call(t) ? function(t) {
                try {
                    return o(t)
                } catch (t) {
                    return s.slice()
                }
            }(t) : o(n(t))
        }
    }, function(t, e, i) {
        "use strict";
        var n = i(105),
            o = i(106),
            r = i(37),
            s = i(13);
        t.exports = i(107)(Array, "Array", function(t, e) {
            this._t = s(t), this._i = 0, this._k = e
        }, function() {
            var t = this._t,
                e = this._k,
                i = this._i++;
            return !t || i >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == e ? i : "values" == e ? t[i] : [i, t[i]])
        }, "values"), r.Arguments = r.Array, n("keys"), n("values"), n("entries")
    }, function(t, e, i) {
        var n = i(3)("unscopables"),
            o = Array.prototype;
        void 0 == o[n] && i(8)(o, n, {}), t.exports = function(t) {
            o[n][t] = !0
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            return {
                value: e,
                done: !!t
            }
        }
    }, function(t, e, i) {
        "use strict";
        var n = i(20),
            o = i(25),
            r = i(11),
            s = i(8),
            a = i(37),
            l = i(108),
            c = i(36),
            u = i(109),
            h = i(3)("iterator"),
            p = !([].keys && "next" in [].keys()),
            d = function() {
                return this
            };
        t.exports = function(t, e, i, f, m, g, v) {
            l(i, e, f);
            var _, y, b, w = function(t) {
                    if (!p && t in T) return T[t];
                    switch (t) {
                        case "keys":
                        case "values":
                            return function() {
                                return new i(this, t)
                            }
                    }
                    return function() {
                        return new i(this, t)
                    }
                },
                x = e + " Iterator",
                L = "values" == m,
                C = !1,
                T = t.prototype,
                k = T[h] || T["@@iterator"] || m && T[m],
                P = k || w(m),
                S = m ? L ? w("entries") : P : void 0,
                E = "Array" == e && T.entries || k;
            if (E && (b = u(E.call(new t))) !== Object.prototype && b.next && (c(b, x, !0), n || "function" == typeof b[h] || s(b, h, d)), L && k && "values" !== k.name && (C = !0, P = function() {
                    return k.call(this)
                }), n && !v || !p && !C && T[h] || s(T, h, P), a[e] = P, a[x] = d, m)
                if (_ = {
                        values: L ? P : w("values"),
                        keys: g ? P : w("keys"),
                        entries: S
                    }, v)
                    for (y in _) y in T || r(T, y, _[y]);
                else o(o.P + o.F * (p || C), e, _);
            return _
        }
    }, function(t, e, i) {
        "use strict";
        var n = i(58),
            o = i(19),
            r = i(36),
            s = {};
        i(8)(s, i(3)("iterator"), function() {
            return this
        }), t.exports = function(t, e, i) {
            t.prototype = n(s, {
                next: o(1, i)
            }), r(t, e + " Iterator")
        }
    }, function(t, e, i) {
        var n = i(12),
            o = i(44),
            r = i(31)("IE_PROTO"),
            s = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) {
            return t = o(t), n(t, r) ? t[r] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
        }
    }, function(t, e, i) {
        "use strict";
        (function(t) {
            var e = i(0);
            L.LocationNameManager = L.Class.extend({
                options: {
                    citycoordsFilename: "citycoords.json",
                    lootdropdownId: "loot-dropdown",
                    lootdropdownTitle: "LOCATION NAMES",
                    localStorageKey: "ginfo:filter:locationnames"
                },
                initialize: function(t) {
                    t = L.setOptions(this, t), this._map = null, this.layer = new L.LayerGroup, this.zoomlevelLayers = {}, this._insertLootfilterItem()
                },
                _insertLootfilterItem: function() {
                    var t = this,
                        e = document.createElement("li");
                    e.setAttribute("data-stoppropagation", "true"), e.setAttribute("class", "dropdown-submenu");
                    var i = document.createElement("div");
                    e.appendChild(i), i.setAttribute("class", "checkbox");
                    var n = document.createElement("label");
                    i.appendChild(n), n.textContent = this.options.lootdropdownTitle;
                    var o = document.createElement("input");
                    n.appendChild(o), o.setAttribute("type", "checkbox"), o.setAttribute("id", "loot_citynames"), this._visible() && o.setAttribute("checked", "true"), o.addEventListener("change", function() {
                        t._displayCitynameLayer(o.checked)
                    });
                    var r = document.createElement("span");
                    n.appendChild(r), r.setAttribute("class", "checkbox-material checkbox-loot");
                    var s = document.createElement("span");
                    r.appendChild(s), s.setAttribute("class", "check");
                    const a = document.getElementById(this.options.lootdropdownId);
                    a && a.insertBefore(e, a.firstChild)
                },
                _visible: function() {
                    return !e.c || (null === localStorage.getItem(this.options.localStorageKey) || "true" === localStorage.getItem(this.options.localStorageKey))
                },
                _displayCitynameLayer: function(t) {
                    t ? this._map.hasLayer(this.layer) || this._map.addLayer(this.layer) : this._map.hasLayer(this.layer) && this._map.removeLayer(this.layer), e.c && localStorage.setItem(this.options.localStorageKey, t)
                },
                _getCitycoorsURL: function() {
                    return this.options.mapDirectory + "/" + this.options.mapName + "/" + this.options.mapVersion + "/" + this.options.citycoordsFilename
                },
                _getCitycoords: function() {
                    var e = this;
                    t.ajax({
                        dataType: "json",
                        url: this._getCitycoorsURL(),
                        tryCount: 0,
                        retryLimit: 5,
                        success: function(t) {
                            this._buildCitynamesLayer(t)
                        }.bind(this),
                        error: function(i, n, o) {
                            "timeout" === n && (this.tryCount++, this.tryCount <= this.retryLimit) ? t.ajax(this) : "No Transport" !== o && i.getAllResponseHeaders() && Raven.captureMessage("Error while trying to load lootmap", {
                                tags: {
                                    textStatus: n,
                                    errorThrown: o,
                                    mapname: e.options.mapName,
                                    responseText: i.responseText,
                                    ajaxUrl: e._getCitycoorsURL(),
                                    xhr: i
                                }
                            })
                        }
                    })
                },
                _buildDivElement: function(t) {
                    return t.nameRU ? `<span><p class="russian">${t.nameRU}</p><p class="english">${t.nameEN}</p></span>` : `<span><p class="english">${t.nameEN}</p></span>`
                },
                _layerForZoomLevel: function(t) {
                    if (this.zoomlevelLayers[t]) return this.zoomlevelLayers[t];
                    const e = new L.LayerGroup;
                    return this.layer.addLayer(e), this.zoomlevelLayers[t] = e, e
                },
                _buildCitynamesLayer: function(e) {
                    var i = this;
                    t.each(e, function(t, e) {
                        var n = L.divIcon({
                                html: i._buildDivElement(e),
                                className: "location-name-label",
                                iconSize: [0, 0],
                                iconAnchor: [0, 0]
                            }),
                            o = L.marker([e.lat, e.lng], {
                                icon: n,
                                interactive: !1
                            });
                        i._layerForZoomLevel(e.minZoom).addLayer(o)
                    }), this._updateForZoomlevel({})
                },
                _updateForZoomlevel: function(e) {
                    var i = this.layer,
                        n = this._map.getZoom();
                    t.each(this.zoomlevelLayers, function(t, e) {
                        t <= n ? i.hasLayer(e) || i.addLayer(e) : i.hasLayer(e) && i.removeLayer(e)
                    })
                }
            }), L.locationNameManager = function(t) {
                return new L.LocationNameManager(t)
            }, L.Map.include({
                addLocationNameManager: function(t) {
                    t._visible() && this.addLayer(t.layer), t._map = this, t._getCitycoords(), this.on("zoomend", L.bind(t._updateForZoomlevel, t))
                }
            })
        }).call(this, i(1))
    }, function(t, e, i) {
        "use strict";
        (function(t) {
            i(5);
            L.MapTiles = L.Class.extend({
                statics: {},
                options: {
                    tileDomain: void 0,
                    switchmapButtonId: "switchmap",
                    maptextId: "maptext"
                },
                initialize: function(t) {
                    t = L.setOptions(this, t), "https:" === location.protocol && (this.options.tileDomain = this.options.tileDomain.replace("http://", "https://")), this._maps = [], this._inactiveLayers = []
                },
                addMap: function(t, e, i, n) {
                    var o = {
                            tms: !0,
                            attribution: t,
                            minZoom: 1,
                            maxZoom: i,
                            noWrap: !0,
                            bounds: L.latLngBounds([-85, -180], [85, 180])
                        },
                        r = L.tileLayer(this.options.tileDomain + "/" + t + "/" + e + "/tiles/{z}/{x}/{y}.png", o);
                    L.disableTileWrap(r);
                    var s = {};
                    s.mapName = t, s.mapVersion = e, s.tileOptions = o, s.tileLayer = r, void 0 !== n && (s.historyConfig = n), void 0 === this._currentActiveLayer ? this._currentActiveLayer = s : (this._setupHistory(), this._inactiveLayers.push(s)), this._maps.push(s)
                },
                getCurrentActiveLayer: function() {
                    return this._currentActiveLayer
                },
                configureElementsForTileColors: function() {
                    this._map.measureControl && (this._currentActiveLayer && this._currentActiveLayer.historyConfig ? this._map.measureControl._lineColor = this._currentActiveLayer.historyConfig.lineColor : this._map.measureControl._lineColor = "black")
                },
                _setupHistory: function() {
                    t("#" + this.options.switchmapButtonId).click(function(t) {
                        var e = {
                            mapName: this._inactiveLayers[0].mapName
                        };
                        t.preventDefault(), this._switchView(e), L.CoordLinker.ignoreNextCoordSet()
                    }.bind(this))
                },
                _switchView: function(t) {
                    this._switchLayers(t)
                },
                _switchLayers: function(e) {
                    if (this._currentActiveLayer.mapName !== e.mapName) {
                        var i = this._currentActiveLayer.tileLayer,
                            n = this._inactiveLayers[0].tileLayer;
                        this._map.removeLayer(i), this._map.addLayer(n, !0), n.bringToBack(), this._inactiveLayers.push(this._currentActiveLayer), this._currentActiveLayer = this._inactiveLayers.shift(), t("#" + this.options.maptextId).text(this._inactiveLayers[0].historyConfig.shortname), this.configureElementsForTileColors()
                    }
                }
            }), L.mapTiles = function(t) {
                return new L.MapTiles(t)
            }, L.Map.include({
                addMapTileControl: function(t) {
                    t._map = this
                }
            })
        }).call(this, i(1))
    }, function(t, e, i) {
        "use strict";
        (function(t) {
            i(15), i(59);
            var e = i(0),
                n = i(16);

            function o(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }
            var r = i(113);
            L.CitySearch = L.Dialog.extend({
                statics: {},
                options: {
                    mapDirectory: void 0,
                    mapSuffix: "",
                    mapName: void 0,
                    mapVersion: void 0,
                    zoomlevel: 5,
                    dialogId: "panel-search",
                    dialogLink: "search",
                    searchBar: "citysearch",
                    cityList: "cities",
                    locSearch: void 0
                },
                initialize: function(t, e) {
                    if (t = L.setOptions(this, t), void 0 === this.options.mapName) throw new Error("mapName is required for CitySearch");
                    if (void 0 === this.options.mapVersion) throw new Error("mapVersion is required for CitySearch");
                    this._loaded = !1, this._loading = !1, this._displayLocation = e, this._initializeDialog()
                },
                _initializeDialog: function() {
                    const e = this;
                    e._loaded || e._loadCityNames(), t("#panel-search").find(".close").on("click", function(t) {
                        e._hideSearchResults()
                    }), t("#" + e.options.searchBar).on("click", function(t) {
                        e._showSearchResults()
                    }), t("#" + e.options.searchBar).on("keyup", function(i) {
                        27 !== i.keyCode ? (e._loaded || e._loadCityNames(), e._updateSearchResults(), 13 === i.which && t("#" + e.options.cityList + " li a").first().trigger("click")) : e._hideSearchResults()
                    }), t(document).ready(function() {
                        t(document).keydown(function(t) {
                            return !("f" === String.fromCharCode(t.which).toLowerCase() && t.ctrlKey || 19 === t.which) || (e._showSearchResults(), t.preventDefault(), !1)
                        })
                    })
                },
                _showSearchResults: function() {
                    this._updateSearchResults(), t("#" + this.options.dialogId).show(), document.getElementById("citysearch").focus()
                },
                _hideSearchResults: function() {
                    t("#" + this.options.dialogId).hide();
                    const e = document.getElementById("citysearch");
                    e.value = "", e.blur()
                },
                _updateSearchResults: function() {
                    const e = this;
                    var i = {
                            extract: function(e) {
                                var i = "";
                                return t.each(e.spellings, function(t, e) {
                                    i += e
                                }), i
                            }
                        },
                        o = t("#" + e.options.searchBar).val();
                    if ("string" != typeof o || void 0 === e._citynames) return;
                    const s = document.getElementById(e.options.cityList),
                        a = document.getElementById("citysearch");
                    s.innerHTML = "";
                    var l = e._parseInputAsCoordinate(o);
                    0 === o.length && (l = {}), l && e.options.locSearch && s.appendChild(e._buildLocationResultItem(l, t => {
                        t.preventDefault(), void 0 !== l.loc1 && null !== l.loc1 && void 0 !== l.loc2 && null !== l.loc2 && l.loc1_valid && l.loc2_valid && (this._displayLocation && this._displayLocation(l, e.options.zoomlevel), e._hideSearchResults())
                    }));
                    const c = r.filter(o, e._citynames, i);
                    t.each(c, function(t, i) {
                        s.appendChild(e._buildCitynameResultItem(i, t => {
                            t.preventDefault();
                            const o = a.value;
                            L.LocUtil.mapPanTo(e._map, i.original, Math.max(i.original.minZoom, e.options.zoomlevel)), n.a(void 0, function() {
                                ga("send", "event", "search", i.original.nameEN, o)
                            }), e._hideSearchResults()
                        }))
                    })
                },
                _buildLocationResultItem: function(t, e) {
                    const i = document.createElement("i");
                    i.className = "icon-zoom-in";
                    const n = document.createElement("a");
                    n.setAttribute("href", "#"), n.innerHTML = "Coordinate ", n.appendChild(i), n.onclick = e;
                    const o = document.createElement("span");
                    void 0 !== t.loc1 && null !== t.loc1 ? o.innerHTML = t.loc1 : (o.innerHTML = "x", o.className = "invalid"), t.loc1_valid || (o.className = "invalid");
                    const r = document.createElement("span");
                    r.innerHTML = " / ";
                    const s = document.createElement("span");
                    void 0 !== t.loc2 && null !== t.loc2 ? s.innerHTML = t.loc2 : (s.innerHTML = "y", s.className = "invalid"), t.loc2_valid || (s.className = "invalid"), n.appendChild(o), n.appendChild(r), n.appendChild(s);
                    const a = document.createElement("li");
                    return a.appendChild(n), a
                },
                _buildCitynameResultItem: function(t, e) {
                    let i;
                    i = t.original.nameRU && t.original.nameRU.length > 0 ? ` (${t.original.nameRU})` : "";
                    const n = t.original.nameEN + i,
                        o = document.createElement("i");
                    o.className = "icon-zoom-in";
                    const r = document.createElement("a");
                    r.setAttribute("href", "#"), r.innerHTML = n, r.appendChild(o), r.onclick = e;
                    const s = document.createElement("li");
                    return s.appendChild(r), s
                },
                _parseInputAsCoordinate: function(t) {
                    const e = t.match(/[+-]?\d+(\.\d+)?/g);
                    let i;
                    const n = this.options.locSearch.bounds;
                    if (e && e.length > 0) {
                        const t = Number(e[0]);
                        i = {
                            loc1: t,
                            loc1_valid: t >= n.minX && t <= n.maxX
                        }
                    }
                    if (e && e.length > 1) {
                        const t = Number(e[1]);
                        i = function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {},
                                    n = Object.keys(i);
                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
                                    return Object.getOwnPropertyDescriptor(i, t).enumerable
                                }))), n.forEach(function(e) {
                                    o(t, e, i[e])
                                })
                            }
                            return t
                        }({}, i, {
                            loc2: t,
                            loc2_valid: t >= n.minY && t <= n.maxY
                        })
                    }
                    return i
                },
                _loadCityNames: function() {
                    var i = this;
                    if (!this._loading) {
                        this._loading = !0;
                        var n = this.options.mapDirectory + this.options.mapSuffix + "/" + this.options.mapName + "/" + this.options.mapVersion + "/citycoords.json";
                        t.ajax({
                            dataType: "json",
                            url: n,
                            tryCount: 0,
                            retryLimit: 5,
                            success: function(t) {
                                i._citynames = t, i._loaded = !0
                            },
                            error: function(o, r, s) {
                                console.log("Can’t properly load citynames for city search:" + r), console.error(s), "timeout" === r && (this.tryCount++, this.tryCount <= this.retryLimit) ? t.ajax(this) : "No Transport" !== s && e.f(() => {
                                    Raven.captureMessage("Error while trying to load citynames", {
                                        tags: {
                                            textStatus: r,
                                            errorThrown: s,
                                            mapname: i.options.mapName,
                                            xhr: o,
                                            loadUrl: n
                                        }
                                    })
                                })
                            }
                        })
                    }
                }
            }), L.citySearch = function(t, e) {
                return new L.CitySearch(t, e)
            }, L.Map.include({
                addCitySearch: function(t) {
                    t._map = this
                }
            })
        }).call(this, i(1))
    }, function(t, e, i) {
        ! function() {
            var e = {};
            t.exports = e, e.simpleFilter = function(t, i) {
                return i.filter(function(i) {
                    return e.test(t, i)
                })
            }, e.test = function(t, i) {
                return null !== e.match(t, i)
            }, e.match = function(t, e, i) {
                i = i || {};
                var n, o = 0,
                    r = [],
                    s = e.length,
                    a = 0,
                    l = 0,
                    c = i.pre || "",
                    u = i.post || "",
                    h = i.caseSensitive && e || e.toLowerCase();
                t = i.caseSensitive && t || t.toLowerCase();
                for (var p = 0; p < s; p++) n = e[p], h[p] === t[o] ? (n = c + n + u, o += 1, l += 1 + l) : l = 0, a += l, r[r.length] = n;
                return o === t.length ? (a = h === t ? 1 / 0 : a, {
                    rendered: r.join(""),
                    score: a
                }) : null
            }, e.filter = function(t, i, n) {
                return i && 0 !== i.length ? "string" != typeof t ? i : (n = n || {}, i.reduce(function(i, o, r, s) {
                    var a = o;
                    n.extract && (a = n.extract(o));
                    var l = e.match(t, a, n);
                    return null != l && (i[i.length] = {
                        string: l.rendered,
                        score: l.score,
                        index: r,
                        original: o
                    }), i
                }, []).sort(function(t, e) {
                    var i = e.score - t.score;
                    return i || t.index - e.index
                })) : []
            }
        }()
    }, function(t, e, i) {
        "use strict";
        (function(t) {
            i(5), i(14);
            const e = i(115);
            L.LocSearch = L.Dialog.extend({
                statics: {},
                options: {
                    locationOverlaySelector: "#locoverlay",
                    locationOverlayContentSelector: "#locoverlay .content",
                    scalingParams: void 0,
                    coordFormatFunction: void 0
                },
                initialize: function(t) {
                    t = L.setOptions(this, t), this._loaded = !1, this._loading = !1
                },
                initializeOnMap: function(e) {
                    this._map = e, L.Browser.mobile ? t(this.options.locationOverlaySelector).hide() : (e.on("mousemove", L.Util.throttle(this._onMouseMove, 50, this)), t(document).on("keydown", t => this._onCopy(t)))
                },
                _locationFromInput: function(t) {
                    var e = t.trim().replace("/loc ", "").split(" ");
                    return 2 === e.length ? {
                        loc1: Number(e[0]),
                        loc2: Number(e[1])
                    } : null
                },
                _onMouseMove: function(e) {
                    var i, n = L.LocUtil.coordsToYx(e.latlng, window.archaeonScalingParams);
                    i = "function" == typeof this.options.coordFormatFunction ? this.options.coordFormatFunction(n) : n.loc1.toFixed(2) + " / " + n.loc2.toFixed(2), t(this.options.locationOverlayContentSelector).text(i)
                    // HERE
                    // HERE
                    // HERE
                    // HERE
                    // HERE
                    // HERE
                    // HERE
                    // HERE
                    // HERE
                    // HERE
                    // HERE
                    // HERE
                    // HERE
                    // HERE
                    // HERE
                    // HERE
                    // HERE
                    // HERE
                    // HERE
                    // HERE
                    const getX = (xy) => {
                        return xy.split(' / ')[0]
                    }
                    const getY = (xy) => {
                        return xy.split(' / ')[1]
                    }
                    // console.log(vue)
                    // $('#coordinates').text(i)
                    const ll = `${e.latlng.lat} / ${e.latlng.lng}`
                    // $('#latlng').text(e.latlng)
                    const lastMove = {
                      lat: getX(ll),
                      lng: getY(ll),
                      x: getX(i),
                      y: getY(i)
                    }
                    vue.lastMove = lastMove
                    window.dayzTracker = {
                        ...window.dayzTracker || {},
                        options: {
                            scalingParams: window.archaeonScalingParams
                        },
                        lastMove
                    }
                },
                _onCopy: function(i) {
                    if (("c" !== String.fromCharCode(event.which).toLowerCase() || !event.ctrlKey) && 19 !== event.which) return !0;
                    const n = t(this.options.locationOverlaySelector),
                        o = t(this.options.locationOverlayContentSelector),
                        r = o.text();
                    e.writeText(r).then(() => {
                        n.addClass("active"), o.text("Copied to Clipboard"), setTimeout(() => {
                            n.removeClass("active"), o.text(r)
                        }, 500)
                    }).catch(t => {
                        console.error("Could not copy loc to Clipboard", t)
                    })
                }
            }), L.locSearch = function(t) {
                return new L.LocSearch(t)
            }, L.Map.include({
                addLocSearch: function(t) {
                    t.initializeOnMap(this)
                }
            })
        }).call(this, i(1))
    }, function(t, e, i) {
        "use strict";

        function n(t, e, i, n) {
            return new(i || (i = Promise))(function(o, r) {
                function s(t) {
                    try {
                        l(n.next(t))
                    } catch (t) {
                        r(t)
                    }
                }

                function a(t) {
                    try {
                        l(n.throw(t))
                    } catch (t) {
                        r(t)
                    }
                }

                function l(t) {
                    t.done ? o(t.value) : new i(function(e) {
                        e(t.value)
                    }).then(s, a)
                }
                l((n = n.apply(t, e || [])).next())
            })
        }

        function o(t, e) {
            var i, n, o, r, s = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }), r;

            function a(r) {
                return function(a) {
                    return function(r) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (i = 1, n && (o = 2 & r[0] ? n.return : r[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, r[1])).done) return o;
                            switch (n = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, n = r[1], r = [0];
                                    continue;
                                case 7:
                                    r = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        s.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && s.label < o[1]) {
                                        s.label = o[1], o = r;
                                        break
                                    }
                                    if (o && s.label < o[2]) {
                                        s.label = o[2], s.ops.push(r);
                                        break
                                    }
                                    o[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            r = e.call(t, s)
                        } catch (t) {
                            r = [6, t], n = 0
                        } finally {
                            i = o = 0
                        }
                        if (5 & r[0]) throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, a])
                }
            }
        }
        i.r(e), i.d(e, "DT", function() {
            return l
        }), i.d(e, "read", function() {
            return v
        }), i.d(e, "readText", function() {
            return _
        }), i.d(e, "setDebugLog", function() {
            return d
        }), i.d(e, "suppressWarnings", function() {
            return f
        }), i.d(e, "write", function() {
            return m
        }), i.d(e, "writeText", function() {
            return g
        });
        var r = ["text/plain", "text/html"],
            s = function() {
                (console.warn || console.log).call(arguments)
            }.bind(console, "[clipboard-polyfill]"),
            a = !0,
            l = function() {
                function t() {
                    this.m = {}
                }
                return t.prototype.setData = function(t, e) {
                    a && -1 === r.indexOf(t) && s("Unknown data type: " + t, "Call clipboard.suppressWarnings() to suppress this warning."), this.m[t] = e
                }, t.prototype.getData = function(t) {
                    return this.m[t]
                }, t.prototype.forEach = function(t) {
                    for (var e in this.m) t(this.m[e], e)
                }, t
            }(),
            c = function(t) {},
            u = !0,
            h = function() {
                (console.warn || console.log).apply(console, arguments)
            }.bind("[clipboard-polyfill]"),
            p = "text/plain";

        function d(t) {
            c = t
        }

        function f() {
            u = !1, a = !1
        }

        function m(t) {
            return n(this, void 0, void 0, function() {
                var e;
                return o(this, function(i) {
                    if (u && !t.getData(p) && h("clipboard.write() was called without a `text/plain` data type. On some platforms, this may result in an empty clipboard. Call clipboard.suppressWarnings() to suppress this warning."), S()) {
                        if (function(e) {
                                var i = t.getData(p);
                                if (void 0 !== i) return window.clipboardData.setData("Text", i);
                                throw new Error("No `text/plain` value was specified.")
                            }()) return [2];
                        throw new Error("Copying failed, possibly because the user rejected it.")
                    }
                    if (L(t)) return c("regular execCopy worked"), [2];
                    if (navigator.userAgent.indexOf("Edge") > -1) return c('UA "Edge" => assuming success'), [2];
                    if (C(document.body, t)) return c("copyUsingTempSelection worked"), [2];
                    if (function(t) {
                            var e = document.createElement("div");
                            e.setAttribute("style", "-webkit-user-select: text !important"), e.textContent = "temporary element", document.body.appendChild(e);
                            var i = C(e, t);
                            return document.body.removeChild(e), i
                        }(t)) return c("copyUsingTempElem worked"), [2];
                    if (void 0 !== (e = t.getData(p)) && function(t) {
                            c("copyTextUsingDOM");
                            var e = document.createElement("div");
                            e.setAttribute("style", "-webkit-user-select: text !important");
                            var i = e;
                            e.attachShadow && (c("Using shadow DOM."), i = e.attachShadow({
                                mode: "open"
                            }));
                            var n = document.createElement("span");
                            n.innerText = t, i.appendChild(n), document.body.appendChild(e), T(n);
                            var o = document.execCommand("copy");
                            return k(), document.body.removeChild(e), o
                        }(e)) return c("copyTextUsingDOM worked"), [2];
                    throw new Error("Copy command failed.")
                })
            })
        }

        function g(t) {
            return n(this, void 0, void 0, function() {
                return o(this, function(e) {
                    return navigator.clipboard && navigator.clipboard.writeText ? (c("Using `navigator.clipboard.writeText()`."), [2, navigator.clipboard.writeText(t)]) : [2, m(P(t))]
                })
            })
        }

        function v() {
            return n(this, void 0, void 0, function() {
                var t;
                return o(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return t = P, [4, _()];
                        case 1:
                            return [2, t.apply(void 0, [e.sent()])]
                    }
                })
            })
        }

        function _() {
            return n(this, void 0, void 0, function() {
                return o(this, function(t) {
                    if (navigator.clipboard && navigator.clipboard.readText) return c("Using `navigator.clipboard.readText()`."), [2, navigator.clipboard.readText()];
                    if (S()) return c("Reading text using IE strategy."), [2, E()];
                    throw new Error("Read is not supported in your browser.")
                })
            })
        }
        var y = !1;

        function b() {
            y || (u && h('The deprecated default object of `clipboard-polyfill` was called. Please switch to `import * as clipboard from "clipboard-polyfill"` and see https://github.com/lgarron/clipboard-polyfill/issues/101 for more info.'), y = !0)
        }
        var w = {
                DT: l,
                setDebugLog: function(t) {
                    return b(), d(t)
                },
                suppressWarnings: function() {
                    return b(), f()
                },
                write: function(t) {
                    return n(this, void 0, void 0, function() {
                        return o(this, function(e) {
                            return b(), [2, m(t)]
                        })
                    })
                },
                writeText: function(t) {
                    return n(this, void 0, void 0, function() {
                        return o(this, function(e) {
                            return b(), [2, g(t)]
                        })
                    })
                },
                read: function() {
                    return n(this, void 0, void 0, function() {
                        return o(this, function(t) {
                            return b(), [2, v()]
                        })
                    })
                },
                readText: function() {
                    return n(this, void 0, void 0, function() {
                        return o(this, function(t) {
                            return b(), [2, _()]
                        })
                    })
                }
            },
            x = function() {
                this.success = !1
            };

        function L(t) {
            var e = new x,
                i = function(t, e, i) {
                    c("listener called"), t.success = !0, e.forEach(function(e, n) {
                        var o = i.clipboardData;
                        o.setData(n, e), n === p && o.getData(n) !== e && (c("setting text/plain failed"), t.success = !1)
                    }), i.preventDefault()
                }.bind(this, e, t);
            document.addEventListener("copy", i);
            try {
                document.execCommand("copy")
            } finally {
                document.removeEventListener("copy", i)
            }
            return e.success
        }

        function C(t, e) {
            T(t);
            var i = L(e);
            return k(), i
        }

        function T(t) {
            var e = document.getSelection();
            if (e) {
                var i = document.createRange();
                i.selectNodeContents(t), e.removeAllRanges(), e.addRange(i)
            }
        }

        function k() {
            var t = document.getSelection();
            t && t.removeAllRanges()
        }

        function P(t) {
            var e = new l;
            return e.setData(p, t), e
        }

        function S() {
            return "undefined" == typeof ClipboardEvent && void 0 !== window.clipboardData && void 0 !== window.clipboardData.setData
        }

        function E() {
            return n(this, void 0, void 0, function() {
                var t;
                return o(this, function(e) {
                    if ("" === (t = window.clipboardData.getData("Text"))) throw new Error("Empty clipboard or could not read plain text from clipboard");
                    return [2, t]
                })
            })
        }
        e.default = w
    }, function(t, e, i) {
        "use strict";
        (function(t) {
            i(15);
            var e = i(61),
                n = i(0);
            L.LogReader = L.Class.extend({
                statics: {},
                options: {
                    lootFilterSprite: "lootfilter_logevents-sprite",
                    lootIconsSprite: "logevents-sprite",
                    types: [{
                        type: "unconscious",
                        name: "Unconscious"
                    }, {
                        type: "conscious",
                        name: "Conscious"
                    }, {
                        type: "hit_shot",
                        name: "Hit (Shot)"
                    }, {
                        type: "hit_melee",
                        name: "Hit (Melee)"
                    }, {
                        type: "hit_generic",
                        name: "Hit (Generic)"
                    }, {
                        type: "hit_fall",
                        name: "Falldamage"
                    }, {
                        type: "death_by_shot",
                        name: "Death (Shot)"
                    }, {
                        type: "death_by_melee",
                        name: "Death (Melee)"
                    }, {
                        type: "death_by_stats",
                        name: "Death (Status)"
                    }, {
                        type: "death_by_suicide",
                        name: "Death (Suicide)"
                    }, {
                        type: "death_by_bleeding",
                        name: "Death (Bleeding)"
                    }, {
                        type: "placement",
                        name: "Placement"
                    }, {
                        type: "built",
                        name: "Base Built"
                    }, {
                        type: "dismantled",
                        name: "Base Dismantled"
                    }]
                },
                initialize: function(t) {
                    const e = document.getElementById("open_logfile_upload"),
                        i = document.getElementById("logfile_upload");
                    e && i && (i.onchange = (t => {
                        this._readFile(t)
                    })), this._scalingParams = t, this._initFilter(), this._showDisclaimer()
                },
                _showDisclaimer: function() {
                    L.serverLogDisclaimerDialog().show()
                },
                _initFilter: function() {
                    const t = document.getElementById("events-filter-dropdowne");
                    this._layers = {}, t && this.options.types.forEach(e => {
                        let i = e.type,
                            n = e.name;
                        const o = L.layerGroup();
                        this._layers[i] = o;
                        const r = this._buildFilterRow(i, n, o);
                        t.appendChild(r)
                    })
                },
                _buildFilterRow: function(t, e, i) {
                    const n = document.querySelector("#filter-row-template");
                    if (n) {
                        var o = document.importNode(n.content, !0);
                        return o.querySelector("#name").textContent = e, o.querySelector("#icon").className = this.options.lootFilterSprite, o.querySelector("#icon").id = t, o.querySelector("#checkbox").onchange = (t => {
                            t.target.checked ? this._map.addLayer(i) : this._map.removeLayer(i)
                        }), o
                    }
                },
                _resetEverything: function() {
                    this._events && this._events.forEach(t => {
                        t.markers && (t.markers.forEach(t => t.remove()), t.markers = void 0)
                    })
                },
                _readFile: function(t) {
                    var i = t.target.files[0],
                        n = new FileReader;
                    this._resetEverything(), this._events = [], n.onload = (t => {
                        this._events = e.a(t.target.result).filter(t => "day" !== t.type && "connected" !== t.type && "disconnected" !== t.type && "chat" !== t.type && "unknown" !== t.type), this._setupTimeRangeSlider(this._events), this._removeUploadHint()
                    }), n.readAsText(i)
                },
                _removeUploadHint: function() {
                    const t = document.getElementById("upload-logfile-first");
                    t && t.remove()
                },
                _setupTimeRangeSlider: function(t) {
                    const e = t[0],
                        i = t[t.length - 1];
                    if (e && e.timestamp && i && i.timestamp) {
                        const t = document.getElementById("date-range-slider"),
                            o = 6e4,
                            r = e.timestamp.getTime() - e.timestamp.getTime() % o,
                            s = i.timestamp.getTime() + (o - i.timestamp.getTime() % o);
                        if (this._slider) this._slider.updateOptions({
                            start: [r, s],
                            range: {
                                min: [r],
                                max: [s]
                            }
                        }, !0);
                        else {
                            this._slider = noUiSlider.create(t, {
                                start: [r, s],
                                behaviour: "drag",
                                range: {
                                    min: [r],
                                    max: [s]
                                },
                                step: o,
                                connect: [!1, !0, !1]
                            });
                            const e = [document.getElementById("range-slider-start-date"), document.getElementById("range-slider-end-date")],
                                i = this;
                            this._slider.on("update", function(t, o) {
                                e[o].innerHTML = Object(n.b)(new Date(+t[o])), i._updateMarkersForTimeframe(t[0], t[1])
                            })
                        }
                    }
                },
                _updateMarkersForTimeframe: function(t, e) {
                    this._events.forEach(i => {
                        i.timestamp.getTime() < t || i.timestamp.getTime() > e ? i.markers && (i.markers.forEach(t => t.remove()), i.markers = void 0) : i.markers || this._addMarkerForEvent(i)
                    })
                },
                _addMarkerForEvent: function(t) {
                    const e = this._layers[t.type];
                    if (!e) return;
                    let i, o, r;
                    switch (t.type) {
                        case "day":
                        case "connected":
                        case "disconnected":
                        case "chat":
                            break;
                        case "hit_shot":
                        case "death_by_shot":
                            o = L.divIcon({
                                className: `${this.options.lootIconsSprite} ${t.type}`
                            });
                            const a = L.LocUtil.pointToCoords(t.player.position, this._scalingParams);
                            r = L.marker(a, {
                                icon: o
                            }).addTo(e), o = L.divIcon({
                                className: `${this.options.lootIconsSprite} ${t.type}_target`
                            });
                            const l = L.LocUtil.pointToCoords(t.shooter.position, this._scalingParams),
                                c = L.marker(l, {
                                    icon: o
                                }).addTo(e),
                                u = [
                                    [a.lat, a.lng],
                                    [l.lat, l.lng]
                                ];
                            let h;
                            "hit_shot" === t.type ? (h = "#D50000", r.bindPopup(`<b>${Object(n.a)(t.timestamp)}</b><br> Player <b>${t.shooter.name}</b><br> shot Player <b>${t.player.name}</b><br> with <b>${t.weapon}</b><br>from <b>${t.distance}m</b><br>into ${t.target} for ${t.damage}`), c.bindPopup(`<b>${Object(n.a)(t.timestamp)}</b><br> Player <b>${t.player.name}</b><br> hit by Player <b>${t.shooter.name}</b><br> with <b>${t.weapon}</b><br>from <b>${t.distance}m</b><br>into ${t.target} for ${t.damage}`)) : (h = "black", r.bindPopup(`<b>${Object(n.a)(t.timestamp)}</b><br> Player <b>${t.shooter.name}</b><br> shot Player <b>${t.player.name}</b><br> with <b>${t.weapon}</b><br>from <b>${t.distance}m</b>`), c.bindPopup(`<b>${Object(n.a)(t.timestamp)}</b><br> Player <b>${t.player.name}</b><br> hit by Player <b>${t.shooter.name}</b><br> with <b>${t.weapon}</b><br>from <b>${t.distance}m</b>`));
                            var s = L.polyline(u, {
                                color: h
                            }).addTo(e);
                            t.markers = [r, c, s];
                            break;
                        case "unconscious":
                        case "conscious":
                        case "hit_melee":
                        case "hit_generic":
                        case "hit_fall":
                        case "death_by_melee":
                        case "death_by_stats":
                        case "death_by_suicide":
                        case "death_by_bleeding":
                        case "placement":
                        case "built":
                        case "dismantled":
                            o = L.divIcon({
                                className: `${this.options.lootIconsSprite} ${t.type}`
                            }), i = L.LocUtil.pointToCoords(t.player.position, this._scalingParams), r = L.marker(i, {
                                icon: o
                            }).addTo(e), this._infoPopupForEvent(r, t), t.markers = [r]
                    }
                },
                _infoPopupForEvent: function(t, e) {
                    switch (e.type) {
                        case "unconscious":
                            t.bindPopup(`<b>${Object(n.a)(e.timestamp)}</b><br> Player <b>${e.player.name}</b> - Unconscious`);
                            break;
                        case "conscious":
                            t.bindPopup(`<b>${Object(n.a)(e.timestamp)}</b><br> Player <b>${e.player.name}</b> - Conscious`);
                            break;
                        case "hit_melee":
                            "string" == typeof e.enemy ? t.bindPopup(`<b>${Object(n.a)(e.timestamp)}</b><br> Player <b>${e.player.name}</b><br> hit by <b>${e.enemy}</b><br> into ${e.target} for ${e.damage}`) : t.bindPopup(`<b>${Object(n.a)(e.timestamp)}</b><br> Player <b>${e.player.name}</b><br> hit by Player<b>${e.enemy.name}</b><br> into ${e.target} for ${e.damage}`);
                            break;
                        case "hit_fall":
                            t.bindPopup(`<b>${Object(n.a)(e.timestamp)}</b><br> Player <b>${e.player.name}</b><br> fell`);
                            break;
                        case "hit_generic":
                            t.bindPopup(`<b>${Object(n.a)(e.timestamp)}</b><br> Player <b>${e.player.name}</b><br> damaged by <b>${e.enemy}</b>`);
                            break;
                        case "death_by_melee":
                            t.bindPopup(`<b>${Object(n.a)(e.timestamp)}</b><br> Player <b>${e.player.name}</b><br> killed by <b>${e.enemy}</b>`);
                            break;
                        case "death_by_stats":
                            t.bindPopup(`<b>${Object(n.a)(e.timestamp)}</b><br> Player <b>${e.player.name}</b><br> died with stats ${e.stats}`);
                            break;
                        case "death_by_suicide":
                            t.bindPopup(`<b>${Object(n.a)(e.timestamp)}</b><br> Player <b>${e.player.name}</b> committed suicide`);
                            break;
                        case "death_by_bleeding":
                            t.bindPopup(`<b>${Object(n.a)(e.timestamp)}</b><br> Player <b>${e.player.name}</b> bled out`);
                            break;
                        case "placement":
                            t.bindPopup(`<b>${Object(n.a)(e.timestamp)}</b><br> Player <b>${e.player.name}</b><br> placed <b>${e.item}</b>`);
                            break;
                        case "built":
                            t.bindPopup(`<b>${Object(n.a)(e.timestamp)}</b><br> Player <b>${e.player.name}</b><br> built <b>${e.item}</b> with ${e.tool}`);
                            break;
                        case "dismantled":
                            "" !== e.tool ? t.bindPopup(`<b>${Object(n.a)(e.timestamp)}</b><br> Player <b>${e.player.name}</b><br> dismantled <b>${e.item}</b> with ${e.tool}`) : t.bindPopup(`<b>${Object(n.a)(e.timestamp)}</b><br> Player <b>${e.player.name}</b><br> dismantled <b>${e.item}</b>`)
                    }
                },
                _onAdd: function(t) {
                    this._map = t, Object.values(this._layers).forEach(e => {
                        e.addTo(t)
                    })
                }
            }), L.logReader = function(t) {
                return new L.LogReader(t)
            }, L.Map.include({
                addLogReader: function(t) {
                    t._onAdd(this)
                }
            }), L.ServerLogDisclaimerDialog = L.RequiredActionDialog.extend({
                initialize: function(e, i) {
                    const n = t("#panel-serverlog_disclaimer");
                    this.$dialog = n, t("#btn-serverlog_disclaimer").on("click", function(t) {
                        n.hide()
                    }), L.RequiredActionDialog.prototype.initialize.call(this)
                }
            }), L.serverLogDisclaimerDialog = function(t) {
                return new L.ServerLogDisclaimerDialog(t)
            }
        }).call(this, i(1))
    }, function(t, e, i) {
        "use strict";
        (function(t) {
            var e = i(0);
            L.UserManager = L.Class.extend({
                statics: {},
                options: {
                    defaultUsername: "USERNAME",
                    usernameDisplayId: "username-display",
                    cookieExpire: void 0
                },
                initialize: function(t) {
                    t = L.setOptions(this, t)
                },
                isUsernameSet: function() {
                    return void 0 !== this._currentUsername && this._currentUsername !== this.options.defaultUsername && this._currentUsername.length > 0
                },
                getUsername: function() {
                    return this._currentUsername
                },
                _onAdd: function() {
                    this._readUsernameFromCookie()
                },
                _readUsernameFromCookie: function() {
                    var i = t.cookie("username");
                    "" !== i && null !== i && void 0 !== i ? (this._currentUsername = i, e.f(() => {
                        Raven.setUserContext({
                            username: i
                        })
                    })) : (this._currentUsername = this.options.defaultUsername, e.f(() => {
                        Raven.setUserContext()
                    })), this._updateUsername()
                },
                _updateUsername: function() {
                    var e = this._currentUsername;
                    e.length > 8 && (e = e.trim().substring(0, 8) + "…"), t("#" + this.options.usernameDisplayId).text(e), this._refreshButtonColors()
                },
                setUsername: function(i) {
                    this._currentUsername = i.trim(), this.isUsernameSet() ? e.f(() => {
                        Raven.setUserContext({
                            username: i
                        })
                    }) : e.f(() => {
                        Raven.setUserContext()
                    }), this._updateUsername(), t("#username-display").removeClass("btn"), t("#username-display").removeClass("btn-text-highlight"), t.cookie("username", this._currentUsername, {
                        expires: this.options.cookieExpire
                    }), t.event.trigger("setUsername")
                },
                _refreshButtonColors: function() {
                    this.isUsernameSet() ? (t("#username-btn").removeClass("btn-primary"), t("#username-dropdown").removeClass("btn-primary"), t("#username-icon").removeClass("icon-white")) : (t("#username-btn").addClass("btn-primary"), t("#username-dropdown").addClass("btn-primary"), t("#username-icon").addClass("icon-white"))
                }
            }), L.userManager = function(t) {
                return new L.UserManager(t)
            }, L.Map.include({
                addUserManager: function(t) {
                    t._onAdd()
                }
            })
        }).call(this, i(1))
    }, function(t, e, i) {
        (function(t) {
            L.ChangeUsernameDialog = L.Dialog.extend({
                initialize: function(e, i) {
                    i = L.setOptions(this, i), this._userManager = e, this.$dialog = t("#panel-change-username"), this.$username = t("#username"), this._allFields = t([]).add(this.$username), this.$tips = t(".validateTips"), this._initializeDialog(), L.Dialog.prototype.initialize.call(this)
                },
                setUsername: function() {
                    var t = !0;
                    (t = t && this.checkLength(this.$username, "username", 1, this.$tips, !0)) && (this._userManager.setUsername(this.$username.val()), this.close())
                },
                _initializeDialog: function() {
                    var e = this;
                    t("#btn-change-username").on("click", function() {
                        e.setUsername()
                    }), e.$dialog.keydown(function(t) {
                        13 === t.keyCode && (e.setUsername(), t.preventDefault(), t.stopPropagation())
                    }), t("#changeusername").click(function() {
                        e.$username.closest(".form-group").removeClass("has-error"), e._userManager.isUsernameSet() && t("#username").val(e._userManager.getUsername()), e.show()
                    })
                }
            }), L.changeUsernameDialog = function(t, e) {
                return new L.ChangeUsernameDialog(t, e)
            }, L.RequiredGroupDialog = L.RequiredActionDialog.extend({
                initialize: function(e) {
                    this.$dialog = t("#panel-group-required"), t("#btn-join-group").on("click", function(e) {
                        t("#panel-join-group").show()
                    }), L.RequiredActionDialog.prototype.initialize.call(this)
                }
            }), L.requiredGroupDialog = function(t) {
                return new L.RequiredGroupDialog(t)
            }, L.RequiredUsernameDialog = L.RequiredActionDialog.extend({
                initialize: function(e, i) {
                    this.$dialog = t("#panel-username-required"), t("#btn-pick-username").on("click", function(e) {
                        t("#panel-change-username").show()
                    }), L.RequiredActionDialog.prototype.initialize.call(this)
                }
            }), L.requiredUsernameDialog = function(t) {
                return new L.RequiredUsernameDialog(t)
            }
        }).call(this, i(1))
    }, function(t, e, i) {
        "use strict";
        (function(t) {
            i(5), i(15);
            var e = i(120).Base64;
            L.GroupManager = L.Class.extend({
                statics: {},
                options: {
                    serverUrl: void 0,
                    izurviveVersion: void 0,
                    mapShortcut: void 0,
                    groupColors: ["blue", "green", "grey", "orange", "red", "yellow"],
                    groupHiddenTerm: "hidden",
                    groupColorToHex: {
                        blue: "032bd4",
                        green: "3e9a00",
                        grey: "666570",
                        orange: "fa3800",
                        red: "c81b00",
                        yellow: "fdce00"
                    },
                    cookieExpire: void 0
                },
                initialize: function(t) {
                    if (t = L.setOptions(this, t), void 0 === this.options.mapShortcut) throw new Error("mapShortcut required for GroupManager");
                    this._groups = {}, this._groupColors = {}, this._refreshGroupErrorReported = !1, this._currentPositions = [], this._refreshIsRunning = !1, this._groupuid = 0, this._groupnameToUid = {}
                },
                _onAdd: function() {
                    var e = this;
                    t(document).on("setUsername", function() {
                        e.refreshAllGroups()
                    })
                },
                readGroupsFromCookie: function() {
                    var e = t.cookie("groups");
                    e && (this._groups = JSON.parse(e));
                    var i = t.cookie("groupColors");
                    i ? this._groupColors = JSON.parse(i) : this._buildGroupColors(), t.each(this._groups, function(t) {
                        this._addGroupItem(t)
                    }.bind(this)), this._refreshButtonColors()
                },
                _buildGroupColors: function() {
                    this._groupColors = {};
                    var e = 0;
                    t.each(this._groups, function(t) {
                        this._groupColors[t] = this.options.groupColors[e], e = (e + 1) % this.options.groupColors.length
                    }.bind(this))
                },
                _findUnusedColor: function() {
                    var e = this.options.groupColors.slice();
                    return t.each(this._groups, function(i) {
                        var n = this.getColorForGroup(i);
                        null !== n && e.splice(t.inArray(n, e), 1)
                    }.bind(this)), 0 === e.length ? this.options.groupColors[0] : e[0]
                },
                getColorForGroup: function(t) {
                    var e = this._groupColors[t];
                    return void 0 === e ? this.options.groupColors[0] : e === this.options.groupHiddenTerm ? null : e
                },
                setGroupColor: function(e, i) {
                    null === i && (i = this.options.groupHiddenTerm);
                    var n = this._groupColors[e];
                    this._groupColors[e] = i, n !== i && (t.cookie("groupColors", JSON.stringify(this._groupColors), {
                        expires: this.options.cookieExpire
                    }), this.refreshAllGroups(), this.stylizeElementForGroup(t("#group_delete_" + this._groupnameToUid[e]), e))
                },
                stylizeElementForGroup: function(t, e) {
                    var i = this.getColorForGroup(e);
                    null === i ? (t.css("text-decoration", "line-through"), t.css("color", "black")) : (t.css("text-decoration", "none"), t.css("color", "#" + this.options.groupColorToHex[i]))
                },
                _addGroupItem: function(e) {
                    var i = this;
                    this._groupuid += 1;
                    var n = this._groupuid;
                    this._groupnameToUid[e] = n, t('<li id="group_' + this._groupuid + '"><a href="#" id="group_delete_' + this._groupuid + '"><i class="icon-map-marker"></i> ' + e + "</li>").find("a").click(function(o) {
                        o.preventDefault(), t("#panel-show-group").data("groupname", e).data("groupuid", n).data("groupcolor", i.getColorForGroup(e)).trigger("spawn")
                    }).end().appendTo("#grouplist"), this.stylizeElementForGroup(t("#group_delete_" + this._groupuid), e)
                },
                getSecret: function(t) {
                    return this._groups[t]
                },
                isInGroup: function(t) {
                    return this._groups.hasOwnProperty(t)
                },
                getGroups: function() {
                    return this._groups
                },
                getGroupCount: function() {
                    return Object.keys(this._groups).length
                },
                addGroup: function(e, i) {
                    var n = this._findUnusedColor();
                    this._groups[e] = i, this.refreshAllGroups(), t.cookie("groups", JSON.stringify(this._groups), {
                        expires: this.options.cookieExpire
                    }), this.setGroupColor(e, n), this._addGroupItem(e)
                },
                leaveGroup: function(e, i) {
                    delete this._groups[e], t.cookie("groups", JSON.stringify(this._groups), {
                        expires: this.options.cookieExpire
                    }), t("#group_" + i).remove(), this.refreshAllGroups(), this._refreshButtonColors()
                },
                refreshAllGroups: function(e) {
                    var i = t("#refresh-icon");
                    i.addClass("icon-refresh-animate"), this.refreshGroups(function() {
                        i.removeClass("icon-refresh-animate"), void 0 !== e && e()
                    })
                },
                refreshGroups: function(e) {
                    var i = this;
                    if (!this._refreshIsRunning) {
                        this._refreshIsRunning = !0;
                        var n = this._currentPositions.slice(0);
                        this._currentPositions = [];
                        var o = [];
                        t.each(this._groups, function(t, e) {
                            null !== i.getColorForGroup(t) && o.push(i.refreshOneGroup(t, e))
                        }), t.when.apply(t, o).done(function() {
                            i.refreshMapMarkers(i._currentPositions), e(), i._refreshIsRunning = !1
                        }).fail(function() {
                            i._currentPositions = n, i.refreshMapMarkers(n), e(), i._refreshIsRunning = !1
                        })
                    }
                },
                getCurrentPositions: function() {
                    return this._currentPositions
                },
                refreshOneGroup: function(e, i) {
                    var n = this;
                    return t.ajax({
                        dataType: "json",
                        cache: !1,
                        url: this.options.serverUrl + "/position/" + this._getBase64URL(e) + "/secret/" + this._getBase64URL(i) + "/version/" + this.options.izurviveVersion,
                        success: function(i) {
                            t.each(i.positions, function(t, i) {
                                i.map === n.options.mapShortcut && (i.groups = [e], n._currentPositions.push(i))
                            })
                        },
                        error: function(t, e, i) {
                            "timeout" !== i && (void 0 !== n._refreshGroupErrorReported && !0 === n._refreshGroupErrorReported || (n._refreshGroupErrorReported = !0))
                        }
                    })
                },
                joinGroup: function(e, i, n, o) {
                    var r = this;
                    t.ajax({
                        cache: !1,
                        headers: {
                            "Cache-Control": "no-cache"
                        },
                        url: r.options.serverUrl + "/group/" + r._getBase64URL(e) + "/secret/" + r._getBase64URL(i) + "/version/" + r.options.izurviveVersion,
                        statusCode: {
                            404: function() {
                                o()
                            },
                            403: function() {
                                o(), t.event.trigger({
                                    type: "groupFailEvent",
                                    subtype: "joinGroupFail",
                                    errorCode: 403
                                })
                            }
                        }
                    }).done(function() {
                        t.event.trigger({
                            type: "groupEvent",
                            subtype: "joinGroup"
                        }), r.addGroup(e, i), n()
                    })
                },
                createGroup: function(e, i, n, o) {
                    var r = this;
                    t.ajax({
                        url: r.options.serverUrl + "/group/" + r._getBase64URL(e) + "/secret/" + r._getBase64URL(i) + "/version/" + r.options.izurviveVersion,
                        type: "PUT",
                        dataType: "text"
                    }).done(function() {
                        t.event.trigger({
                            type: "groupEvent",
                            subtype: "createGroup"
                        }), r.addGroup(e, i), n()
                    }).fail(function(e, i) {
                        t.event.trigger({
                            type: "groupFailEvent",
                            subtype: "createGroupFail",
                            errorCode: i
                        }), o()
                    })
                },
                _refreshButtonColors: function() {
                    0 === Object.keys(this._groups).length ? (t("#groups-btn").addClass("btn-primary"), t("#groups-dropdown").addClass("btn-primary"), t("#groups-icon").addClass("icon-white")) : (t("#groups-btn").removeClass("btn-primary"), t("#groups-dropdown").removeClass("btn-primary"), t("#groups-icon").removeClass("icon-white"))
                },
                _getBase64URL: function(t) {
                    return e.encode(t, !1).replace(/\//g, "%2F").replace(/\+/g, "%2B")
                }
            }), L.groupManager = function(t) {
                return new L.GroupManager(t)
            }, L.Map.include({
                addGroupManager: function(t) {
                    t._onAdd(this)
                }
            })
        }).call(this, i(1))
    }, function(module, exports, __webpack_require__) {
        (function(global) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            ! function(global, factory) {
                module.exports = function(global) {
                    "use strict";
                    var _Base64 = global.Base64,
                        version = "2.4.9",
                        buffer;
                    if (void 0 !== module && module.exports) try {
                        buffer = eval("require('buffer').Buffer")
                    } catch (t) {
                        buffer = void 0
                    }
                    var b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        b64tab = function(t) {
                            for (var e = {}, i = 0, n = t.length; i < n; i++) e[t.charAt(i)] = i;
                            return e
                        }(b64chars),
                        fromCharCode = String.fromCharCode,
                        cb_utob = function(t) {
                            if (t.length < 2) {
                                var e = t.charCodeAt(0);
                                return e < 128 ? t : e < 2048 ? fromCharCode(192 | e >>> 6) + fromCharCode(128 | 63 & e) : fromCharCode(224 | e >>> 12 & 15) + fromCharCode(128 | e >>> 6 & 63) + fromCharCode(128 | 63 & e)
                            }
                            var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
                            return fromCharCode(240 | e >>> 18 & 7) + fromCharCode(128 | e >>> 12 & 63) + fromCharCode(128 | e >>> 6 & 63) + fromCharCode(128 | 63 & e)
                        },
                        re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                        utob = function(t) {
                            return t.replace(re_utob, cb_utob)
                        },
                        cb_encode = function(t) {
                            var e = [0, 2, 1][t.length % 3],
                                i = t.charCodeAt(0) << 16 | (t.length > 1 ? t.charCodeAt(1) : 0) << 8 | (t.length > 2 ? t.charCodeAt(2) : 0),
                                n = [b64chars.charAt(i >>> 18), b64chars.charAt(i >>> 12 & 63), e >= 2 ? "=" : b64chars.charAt(i >>> 6 & 63), e >= 1 ? "=" : b64chars.charAt(63 & i)];
                            return n.join("")
                        },
                        btoa = global.btoa ? function(t) {
                            return global.btoa(t)
                        } : function(t) {
                            return t.replace(/[\s\S]{1,3}/g, cb_encode)
                        },
                        _encode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function(t) {
                            return (t.constructor === buffer.constructor ? t : buffer.from(t)).toString("base64")
                        } : function(t) {
                            return (t.constructor === buffer.constructor ? t : new buffer(t)).toString("base64")
                        } : function(t) {
                            return btoa(utob(t))
                        },
                        encode = function(t, e) {
                            return e ? _encode(String(t)).replace(/[+\/]/g, function(t) {
                                return "+" == t ? "-" : "_"
                            }).replace(/=/g, "") : _encode(String(t))
                        },
                        encodeURI = function(t) {
                            return encode(t, !0)
                        },
                        re_btou = new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g"),
                        cb_btou = function(t) {
                            switch (t.length) {
                                case 4:
                                    var e = (7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3),
                                        i = e - 65536;
                                    return fromCharCode(55296 + (i >>> 10)) + fromCharCode(56320 + (1023 & i));
                                case 3:
                                    return fromCharCode((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));
                                default:
                                    return fromCharCode((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1))
                            }
                        },
                        btou = function(t) {
                            return t.replace(re_btou, cb_btou)
                        },
                        cb_decode = function(t) {
                            var e = t.length,
                                i = e % 4,
                                n = (e > 0 ? b64tab[t.charAt(0)] << 18 : 0) | (e > 1 ? b64tab[t.charAt(1)] << 12 : 0) | (e > 2 ? b64tab[t.charAt(2)] << 6 : 0) | (e > 3 ? b64tab[t.charAt(3)] : 0),
                                o = [fromCharCode(n >>> 16), fromCharCode(n >>> 8 & 255), fromCharCode(255 & n)];
                            return o.length -= [0, 0, 2, 1][i], o.join("")
                        },
                        atob = global.atob ? function(t) {
                            return global.atob(t)
                        } : function(t) {
                            return t.replace(/[\s\S]{1,4}/g, cb_decode)
                        },
                        _decode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function(t) {
                            return (t.constructor === buffer.constructor ? t : buffer.from(t, "base64")).toString()
                        } : function(t) {
                            return (t.constructor === buffer.constructor ? t : new buffer(t, "base64")).toString()
                        } : function(t) {
                            return btou(atob(t))
                        },
                        decode = function(t) {
                            return _decode(String(t).replace(/[-_]/g, function(t) {
                                return "-" == t ? "+" : "/"
                            }).replace(/[^A-Za-z0-9\+\/]/g, ""))
                        },
                        noConflict = function() {
                            var t = global.Base64;
                            return global.Base64 = _Base64, t
                        };
                    if (global.Base64 = {
                            VERSION: version,
                            atob: atob,
                            btoa: btoa,
                            fromBase64: decode,
                            toBase64: encode,
                            utob: utob,
                            encode: encode,
                            encodeURI: encodeURI,
                            btou: btou,
                            decode: decode,
                            noConflict: noConflict,
                            __buffer__: buffer
                        }, "function" == typeof Object.defineProperty) {
                        var noEnum = function(t) {
                            return {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        };
                        global.Base64.extendString = function() {
                            Object.defineProperty(String.prototype, "fromBase64", noEnum(function() {
                                return decode(this)
                            })), Object.defineProperty(String.prototype, "toBase64", noEnum(function(t) {
                                return encode(this, t)
                            })), Object.defineProperty(String.prototype, "toBase64URI", noEnum(function() {
                                return encode(this, !0)
                            }))
                        }
                    }
                    global.Meteor && (Base64 = global.Base64);
                    void 0 !== module && module.exports ? module.exports.Base64 = global.Base64 : (__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                        return global.Base64
                    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                    return {
                        Base64: global.Base64
                    }
                }(global)
            }("undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== global ? global : this)
        }).call(this, __webpack_require__(39))
    }, function(t, e, i) {
        (function(t) {
            L.AddGroupDialog = L.Dialog.extend({
                initialize: function(e, i) {
                    i = L.setOptions(this, i), this._groupManager = e, this.$dialog = t("#panel-join-group"), this.$groupname = t("#groupname"), this.$secret = t("#secret"), this._allFields = t([]).add(this.$groupname, this.$secret), this.$tips = t(".validateTips"), this._initializeDialog(), L.Dialog.prototype.initialize.call(this)
                },
                close: function() {
                    L.Dialog.prototype.close.call(this), t("#groupname").val("").closest(".form-group").removeClass("has-error"), t("#secret").val("").closest(".form-group").removeClass("has-error"), t(".validateTips").val("").closest(".form-group").removeClass("has-error")
                },
                _initializeDialog: function() {
                    var e = this;
                    t("#addgroup").on("click", function(t) {
                        L.Dialog.prototype.show.call(e), e.$tips.text("")
                    }), t("#btn-group-join").on("click", function(t) {
                        e.$secret.closest(".form-group").removeClass("has-error"), e.$groupname.closest(".form-group").removeClass("has-error"), e.$tips.closest(".form-group").removeClass("has-error"), e.$tips.text("");
                        var i = !0;
                        (i = (i = (i = i && e.checkLength(e.$groupname, "groupname", 3, e.$tips)) && e.checkLength(e.$secret, "secret", 3, e.$tips)) && e._alreadyExists(e.$groupname.val(), e.$groupname)) && e._groupManager.joinGroup(e.$groupname.val(), e.$secret.val(), function() {
                            e.close(), e._groupManager._refreshButtonColors()
                        }, function() {
                            e.$secret.closest(".form-group").addClass("has-error"), e.updateTips("Invalid group name or secret.", e.$tips), e._groupManager._refreshButtonColors()
                        })
                    }), t("#btn-group-create").on("click", function(i) {
                        e.$secret.closest(".form-group").removeClass("has-error"), e.$groupname.closest(".form-group").removeClass("has-error"), e.$tips.closest(".form-group").removeClass("has-error"), e.$tips.text("");
                        var n = !0;
                        if (n = (n = (n = n && e.checkLength(e.$groupname, "groupname", 3, e.$tips)) && e.checkLength(e.$secret, "secret", 3, e.$tips)) && e._alreadyExists(e.$groupname.val(), e.$groupname)) {
                            var o = e.$groupname.val();
                            e._groupManager.createGroup(e.$groupname.val(), e.$secret.val(), function() {
                                e.close(), t("#panel-share-group").data("groupname", o).trigger("spawn"), e._groupManager._refreshButtonColors()
                            }, function() {
                                e.$secret.closest(".form-group").addClass("has-error"), e.updateTips("Unable to create group. Maybe it exists already?", e.$tips), e._groupManager._refreshButtonColors()
                            })
                        }
                    })
                },
                _alreadyExists: function(t, e) {
                    return !this._groupManager.isInGroup(t) || (e.addClass("has-error"), this.updateTips("You've already joined this group", this.$tips), !1)
                }
            }), L.addGroupDialog = function(t, e) {
                return new L.AddGroupDialog(t, e)
            }, L.ShareGroupDialog = L.Dialog.extend({
                options: {
                    domainName: "www.izurvive.com"
                },
                initialize: function(e, i, n, o) {
                    o = L.setOptions(this, o), this._groupManager = e, this._userManager = i, this._hashAction = n, this.$dialog = t("#panel-share-group"), this._initializeDialog(), L.Dialog.prototype.initialize.call(this)
                },
                _initializeDialog: function() {
                    var e = this;
                    e.$dialog.on("spawn", function(i) {
                        L.Dialog.prototype.show.call(e);
                        var n = e.$dialog.data("groupname"),
                            o = e._groupManager.getSecret(t(this).data("groupname"));
                        t("#sharegroup-groupname").text(n), t("#sharegroup-secret").text(o), t("#sharegroup-username").text(e._userManager.getUsername());
                        const r = ["https://", location.host, location.pathname, e._hashAction.getHashForGroup(n, o)].join("");
                        t("#sharegroup-link").attr("href", r), t("#sharegroup-link").text(r), document.getElementById("copy-share-link").onclick = (() => {
                            e._copyToClipboard(r)
                        }), t("#sharegroup-link").show()
                    })
                },
                _copyToClipboard(t) {
                    const e = document.createElement("input"),
                        i = document.getElementsByTagName("body")[0];
                    i.append(e), e.type = "text", e.value = t, e.select(), document.execCommand("copy"), i.removeChild(e)
                }
            }), L.shareGroupDialog = function(t, e, i, n) {
                return new L.ShareGroupDialog(t, e, i, n)
            }, L.GroupInfoDialog = L.Dialog.extend({
                initialize: function(e, i, n) {
                    this.$dialog = t("#panel-show-group"), this._groupManager = e, this._hashAction = i, this._groupColors = e.options.groupColors.slice(), this._groupColors.unshift("hidden"), this.$groupname = t("#s-groupname"), this.$secret = t("#s-groupsecret"), this._allFields = t([]).add(this.$groupname, this.$secret), this._initializeDialog(), this._initializeGroupColors(), L.Dialog.prototype.initialize.call(this)
                },
                _initializeGroupColors: function() {
                    t.each(this._groupColors, function(e, i) {
                        var n = "";
                        n += '<label for="s-groupcolor-' + i + '"><span class="groupcolor-selection groupcolors-sprite" id="' + i + '"></span></label>', n += '<input type="radio" id="s-groupcolor-' + i + '" name="s-groupcolor" value="' + i + '">', 3 === e && (n += "<br>"), t("#group-color-select").append(n), t("#s-groupcolor-" + i).change(function() {
                            this._updateGroupColors(i)
                        }.bind(this)), 1 === e && t("#s-groupcolor-" + i).attr("checked", "checked")
                    }.bind(this))
                },
                _updateGroupColors: function(e) {
                    t("input[name=s-groupcolor][value=" + e + "]").prop("checked", !0), t.each(this._groupColors, function(i, n) {
                        n === e ? t("label[for=s-groupcolor-" + n + "]").addClass("selected") : t("label[for=s-groupcolor-" + n + "]").removeClass("selected")
                    })
                },
                show: function() {
                    L.Dialog.prototype.show.call(this);
                    var t = this.$dialog.data("groupname"),
                        e = this._groupManager.getSecret(this.$dialog.data("groupname")),
                        i = this.$dialog.data("groupcolor");
                    null === i && (i = this.options.hiddenTerm), this.$groupname.val(t), this.$secret.val(e), this._updateGroupColors(i)
                },
                _initializeDialog: function() {
                    var e = this;
                    e.$dialog.on("spawn", function(t) {
                        e.show()
                    }), t("#btn-share-group").on("click", function(i) {
                        t("#panel-share-group").data("groupname", e.$dialog.data("groupname")).trigger("spawn")
                    }), t("#btn-group-ok").on("click", function(i) {
                        var n = t("input[name=s-groupcolor]:checked").val();
                        n === e.options.hiddenTerm && (n = null), e._groupManager.setGroupColor(e.$dialog.data("groupname"), n)
                    }), t("#btn-leave-group").on("click", function(i) {
                        e._groupManager.leaveGroup(e.$dialog.data("groupname"), e.$dialog.data("groupuid")), t.event.trigger({
                            type: "groupEvent",
                            subtype: "leaveGroup"
                        })
                    })
                }
            }), L.groupInfoDialog = function(t, e, i) {
                return new L.GroupInfoDialog(t, e, i)
            }
        }).call(this, i(1))
    }, function(t, e, i) {
        "use strict";
        (function(t, e) {
            var n = i(38),
                o = i(0);
            L.MarkerManager = L.Class.extend({
                statics: {},
                options: {
                    annotationDefaultUrl: "images/annotation.png",
                    annotationSkinPrefixes: {
                        0: "default",
                        1: "premium_legacy",
                        2: "premium",
                        3: "christmas_santa_claus",
                        4: "sniper",
                        5: "medic",
                        6: "driver",
                        7: "farmer",
                        8: "helicopter",
                        9: "pilot",
                        10: "survivor",
                        11: "hero",
                        12: "bandit",
                        13: "zombie"
                    },
                    annotationDefaultSize: [80, 80],
                    annotationSize: {
                        8: [112, 60],
                        9: [65, 80],
                        10: [55, 80],
                        11: [72, 80],
                        12: [61, 80],
                        13: [56, 80]
                    },
                    annotationTypeNames: {
                        1: "player",
                        2: "tent",
                        3: "vehicle",
                        4: "meeting",
                        5: "house"
                    },
                    annotationDefault: "player",
                    annotationNameIsUsername: ["player"]
                },
                initialize: function(e, i, o) {
                    o = L.setOptions(this, o), this._groupManager = e, this._userManager = i, this._markerCurrentlyDragging = !1, this._groupMarkerLayer = new L.FeatureGroup, this._annotationIcons = {}, this._zoomlevelToIndex = {};
                    var r = this;
                    t.each(r.options.zoomlevels, function(e, i) {
                        var o, s, a = 50 * r.options.annotationDefaultSize[0] / 100,
                            l = 50 * r.options.annotationDefaultSize[1] / 100;
                        t.each(r.options.annotationSkinPrefixes, function(e) {
                            void 0 === r._annotationIcons[e] && (r._annotationIcons[e] = {}), t.each(r._groupManager.options.groupColors, function(t, i) {
                                void 0 === r._annotationIcons[e][i] && (r._annotationIcons[e][i] = {}), r.options.annotationSize[e] ? (o = 50 * r.options.annotationSize[e][0] / 100, s = 50 * r.options.annotationSize[e][1] / 100) : (o = a, s = l), r._annotationIcons[e][i][50] = new L.Icon({
                                    iconUrl: n.a(r.options.annotationSkinPrefixes[e], i),
                                    iconSize: [o, s],
                                    iconAnchor: [o / 2, s],
                                    popupAnchor: [o / 2, 0]
                                })
                            })
                        }), t.each(i, function(t, e) {
                            r._zoomlevelToIndex[e] = 50
                        })
                    })
                },
                isMarkerCurrentlyDragging: function() {
                    return this._markerCurrentlyDragging
                },
                getGroupMarkerLayer: function() {
                    return this._groupMarkerLayer
                },
                refreshMapMarkers: function(e) {
                    var i = this;
                    this._markerCurrentlyDragging = !1, this._groupMarkerLayer.clearLayers(), t.each(e, function(e, n) {
                        var o = i._groupManager.getColorForGroup(n.groups[0]);
                        if (null !== o) {
                            var r = i._annotationIcons[n.skinType];
                            void 0 !== n.skinType && void 0 !== r || (n.skinType = 0), void 0 !== r && void 0 !== r[o] || (o = "blue");
                            var s = L.marker(n.coordinates, {
                                draggable: !0,
                                clickable: !0,
                                icon: i._annotationIcons[n.skinType][o][i._getZoomIndex()],
                                zIndexOffset: 1e3
                            });
                            s.skinType = n.skinType, s.color = o, s.position = n;
                            var a = n.name;
                            a = L.IZUtil.escapeHtml(a), a = '<span class="annotation-image annotations-sprite" id="annotation_' + i.options.annotationTypeNames[n.type] + '"></span>' + a, s.bindMarkerLabel(a), s.addTo(i._map), i._groupMarkerLayer.addLayer(s), s.on("dragstart", function() {
                                i._markerCurrentlyDragging = !0
                            }), s.on("dragend", function(e) {
                                i._markerCurrentlyDragging = !1, t.event.trigger({
                                    type: "markerChange",
                                    subtype: "moveMarker",
                                    markerType: i.options.annotationTypeNames[n.type]
                                }), i._refreshMarkerPosition(e.target, e.target.position)
                            }), s.on("click", function() {
                                t("#panel-remove-marker").data("markerinfo", s.position).data("marker", s).trigger("spawn")
                            })
                        }
                    })
                },
                _refreshMarkerIcons: function() {
                    var t = this._getZoomIndex();
                    this._groupMarkerLayer.eachLayer(function(e) {
                        var i = this._annotationIcons[e.skinType][e.color][t];
                        e.setIcon(i);
                        var n = -1 * i.options.iconSize[1] - 17;
                        e._markerlabel.options.offset.y = n, e._markerlabel.setLatLng(e.getLatLng())
                    }, this)
                },
                _refreshMarkerPosition: function(t, i) {
                    if (!this._userManager.isUsernameSet()) return showUsernameWarning(), void t.setLatLng(i.coordinates);
                    var n = e.extend(!0, {}, i);
                    n.coordinates = [t.getLatLng().lat, t.getLatLng().lng], this.setMarkerPosition(n)
                },
                setMarkerPosition: function(i) {
                    var n = this,
                        r = [],
                        s = {};
                    t.each(this._groupManager.getGroups(), function(e, n) {
                        -1 !== t.inArray(e, i.groups) && (s[e] = n)
                    }), t.each(s, function(s, a) {
                        var l = e.extend(!0, {}, i);
                        l.group = s, l.secret = n._groupManager._getBase64URL(a), delete l.groups, r.push(t.ajax({
                            type: "POST",
                            url: n.options.serverUrl + "/position",
                            data: JSON.stringify(l),
                            contentType: "application/json; charset=utf-8",
                            dataType: "text",
                            success: function() {},
                            error: function(t, e, i) {
                                o.f(() => {
                                    Raven.captureMessage, JSON.stringify(l), n.options.serverUrl, t.status
                                })
                            }
                        }))
                    }), t.when.apply(t, r).done(function() {
                        n._groupManager.refreshAllGroups()
                    })
                },
                deleteMarker: function(e, i) {
                    var n = this;
                    this._map.removeLayer(i);
                    var r = [];
                    t.each(e.groups, function(i, s) {
                        r.push(t.ajax({
                            url: n.options.serverUrl + "/position/" + n._groupManager._getBase64URL(s) + "/secret/" + n._groupManager._getBase64URL(n._groupManager.getSecret(s)) + "/name/" + n._groupManager._getBase64URL(e.name) + "/map/" + n.options.mapShortcut + "/version/" + n.options.syncServer.apiv1.endpointVersion,
                            type: "DELETE",
                            dataType: "text",
                            error: function(t, i, r) {
                                "timeout" !== r && (void 0 !== t.responseText && "Could not delete position. Marker not found." === t.responseText || o.f(() => {
                                    Raven.captureMessage("Error while trying to delete marker", {
                                        tags: {
                                            textStatus: i,
                                            errorThrown: r,
                                            zurviveServer: n.options.serverUrl,
                                            groupname: s,
                                            secret: n._groupManager.getSecret(s),
                                            name: e.name,
                                            map: n.options.mapShortcut,
                                            type: e.type,
                                            statusCode: t.status,
                                            xhr: t
                                        }
                                    })
                                }))
                            }
                        }))
                    }), t.when.apply(t, r).done(function() {
                        n._groupManager.refreshAllGroups()
                    })
                },
                _getZoomIndex: function() {
                    return this._zoomlevelToIndex[this._map.getZoom()]
                },
                _onAdd: function(t) {
                    this._map = t, t.on("viewreset", function() {
                        this._refreshMarkerIcons()
                    }.bind(this)), L.Marker.include({
                        bindMarkerLabel: function(e) {
                            var i = -1 * this.options.icon.options.iconSize[1] - 17,
                                n = new L.Point(1, i),
                                o = L.popup({
                                    closeButton: !1,
                                    offset: n,
                                    className: "markerPopup",
                                    autoPan: !1
                                }).setLatLng(this.getLatLng()).setContent(e);
                            return this._markerlabel = o, t.addLayer(o), this.on("move", this._moveMarkerLabel, this), this.on("remove", function() {
                                t.removeLayer(o)
                            }), this
                        },
                        _moveMarkerLabel: function(t) {
                            this._markerlabel.setLatLng(t.latlng)
                        }
                    })
                }
            }), L.markerManager = function(t, e, i) {
                return new L.MarkerManager(t, e, i)
            }, L.Map.include({
                addMarkerManager: function(t) {
                    t._onAdd(this)
                }
            })
        }).call(this, i(1), i(1))
    }, function(t, e, i) {
        (function(t) {
            L.AddMarkerDialog = L.Dialog.extend({
                initialize: function(e, i, n, o) {
                    o = L.setOptions(this, o), this._groupManager = e, this._markerManager = i, this._userManager = n, this.$dialog = t("#panel-add-marker"), this.$description = t("#description"), this._allFields = t([]).add(this.$description), this.$tips = t(".validateTips"), this._groupidmap = {}, this._addAnnotationTypes(), this._initializeDialog(), L.Dialog.prototype.initialize.call(this)
                },
                _addAnnotationTypes: function() {
                    var e = this;
                    t.each(e._markerManager.options.annotationTypeNames, function(i, n) {
                        var o = "";
                        o += '<button class="btn btn-default marker-type-btn ', n === e._markerManager.options.annotationDefault && (o += "active"), o += '" title="' + n + '" id="addmarker_type_' + n + '" ', o += ">", o += '<span class="annotations-sprite" id="annotation_' + n + '"></span>', o += "</button>", t("#dialog-addmarker-type").append(o), t("#type_" + n).on("click", function(t) {
                            t.preventDefault()
                        })
                    }), -1 !== t.inArray(e._markerManager.options.annotationDefault, e._markerManager.options.annotationNameIsUsername) && t("#description").val(e._userManager.getUsername()), t.each(e._markerManager.options.annotationTypeNames, function(i, n) {
                        -1 === t.inArray(n, e._markerManager.options.annotationNameIsUsername) ? t("#addmarker_type_" + n).on("click", function() {
                            t(".marker-type-btn").removeClass("active");
                            var i = t("#description");
                            i.val() === e._userManager.getUsername() && i.val(""), "" === i.val() && i.focus()
                        }) : t("#addmarker_type_" + n).on("click", function() {
                            t(".marker-type-btn").removeClass("active");
                            var i = t("#description");
                            "" === i.val() && i.val(e._userManager.getUsername())
                        })
                    })
                },
                _populateGroups: function() {
                    var e = this;
                    if (this._groupManager.getGroupCount() >= 1) {
                        t("#dialog-addmarker-groups-label").show(), t("#dialog-addmarker-groups").empty(), e._groupidmap = {};
                        var i, n, o, r = 0,
                            s = !1,
                            a = t("#dialog-addmarker-groups"),
                            l = document.createDocumentFragment();
                        t.each(this._groupManager.getGroups(), function(t) {
                            var a = e._groupManager.getColorForGroup(t);
                            (i = document.createElement("div")).className = "radio groupradio", n = document.createElement("label"), o = document.createElement("input"), n.textContent = t, o.setAttribute("type", "radio"), o.setAttribute("id", "addmarker_group_" + r), o.setAttribute("name", "addmarker_group"), o.value = r, null !== a && !1 === s && (o.setAttribute("checked", !0), s = !0), null === a ? (n.style.textDecoration = "line-through", n.style.color = "black") : (n.style.textDecoration = "none", n.style.color = "#" + this._groupManager.options.groupColorToHex[a]), n.appendChild(o), i.appendChild(n), l.appendChild(i), e._groupidmap[t] = r, r += 1
                        }.bind(this)), a.append(l), t.material.radio("input[type=radio]"), t.each(e._markerManager.options.annotationTypeNames, function(i, n) {
                            t("#addmarker_type_" + n).on("click", function() {
                                t.each(e._groupManager.getGroups(), function(i) {
                                    t("#addmarker_group_" + e._groupidmap[i]).prop("disabled", !1)
                                })
                            })
                        })
                    } else t("#dialog-addmarker-groups-label").hide(), t("#dialog-addmarker-groups").empty()
                },
                _setDefaultGroup: function() {
                    var e = this;
                    t.each(e._markerManager.options.annotationTypeNames, function(i, n) {
                        n === e._markerManager.options.annotationDefault ? t("#addmarker_type_" + n).addClass("active") : t("#addmarker_type_" + n).removeClass("active")
                    }), -1 !== t.inArray(e._markerManager.options.annotationDefault, e._markerManager.options.annotationNameIsUsername) && t("#description").val(e._userManager.getUsername())
                },
                close: function() {
                    L.Dialog.prototype.close.call(this), this._allFields.val("").removeClass("ui-state-error")
                },
                show: function() {
                    L.Dialog.prototype.show.call(this), this._populateGroups(), this._setDefaultGroup(), t("#description").closest(".form-group").removeClass("has-error")
                },
                _initializeDialog: function() {
                    var e = this;
                    e.$dialog.on("open", function(t) {
                        e.show()
                    }), e.$dialog.keydown(function(t) {
                        13 === t.keyCode && (e._addMarker(t), t.preventDefault(), t.stopPropagation())
                    }), t("#btn-add-marker").on("click", function(t) {
                        e._addMarker(t)
                    })
                },
                _addMarker: function(e) {
                    var i = t("#description");
                    if (i.val().length < 1) return i.closest(".form-group").addClass("has-error"), void i.focus();
                    var n = {
                        name: this._userManager.getUsername(),
                        coordinates: [this.$dialog.data("lastClickLatLng").lat, this.$dialog.data("lastClickLatLng").lng],
                        owners: this._userManager.getUsername(),
                        map: this._groupManager.options.mapShortcut,
                        groups: []
                    };
                    t.each(this._markerManager.options.annotationTypeNames, function(e, o) {
                        t("#addmarker_type_" + o).hasClass("active") && (n.type = parseInt(e, 10), n.name = i.val())
                    });
                    var o = t("input[name=addmarker_group]:checked").val(),
                        r = null;
                    t.each(this._groupidmap, function(t, e) {
                        e === parseInt(o, 10) && (r = t)
                    }), n.groups = [r], t.event.trigger({
                        type: "markerChange",
                        subtype: "addMarker",
                        markerType: this._markerManager.options.annotationTypeNames[n.type],
                        value: this._groupManager.getGroupCount() - n.groups.length
                    }), this._markerManager.setMarkerPosition(n), this.close(), this._allFields.val("").removeClass("ui-state-error")
                }
            }), L.addMarkerDialog = function(t, e, i, n) {
                return new L.AddMarkerDialog(t, e, i, n)
            }, L.RemoveMarkerDialog = L.Dialog.extend({
                initialize: function(e, i) {
                    i = L.setOptions(this, i), this.$dialog = t("#panel-remove-marker"), this._markerManager = e, this._initializeDialog(), L.Dialog.prototype.initialize.call(this)
                },
                _initializeDialog: function() {
                    var e = this;
                    e.$dialog.on("spawn", function(i) {
                        t("#remove-marker-name").text(L.IZUtil.escapeHtml(t(this).data("markerinfo").name)), L.Dialog.prototype.show.call(e)
                    }), t("#btn-remove-marker").on("click", function(i) {
                        e._markerManager.deleteMarker(e.$dialog.data("markerinfo"), e.$dialog.data("marker")), t.event.trigger({
                            type: "markerChange",
                            subtype: "removeMarker",
                            markerType: e._markerManager.options.annotationTypeNames[e.$dialog.data("markerinfo").type]
                        }), e.close()
                    })
                }
            }), L.removeMarkerDialog = function(t, e) {
                return new L.RemoveMarkerDialog(t, e)
            }
        }).call(this, i(1))
    }, function(t, e, i) {
        (function(t) {
            L.RefreshManager = L.Class.extend({
                statics: {},
                options: {
                    refreshWait: 6e4,
                    followTime: 6e4
                },
                initialize: function(t, e, i, n, o) {
                    o = L.setOptions(this, o), this._groupManager = t, this._userManager = e, this._markerManager = i, this._coordLinker = n, this._lastdrag = 0, this._refreshTimer = null, this._configureAutorefreshButton()
                },
                addTo(e) {
                    return this.container = L.DomUtil.create("a", "leaflet-control-refresh"), this.container.setAttribute("role", "button"), this.map = e, this._createButton(this.container, this), t(".leaflet-ginfo .leaflet-bar").prepend(this.container), this.container
                },
                _createButton(t, e) {
                    const i = L.DomUtil.create("i", "material-icons", t);
                    return i.textContent = "autorenew", i.id = "refresh-icon", L.DomEvent.on(t, "click", L.DomEvent.stopPropagation).on(t, "click", L.DomEvent.preventDefault).on(t, "click", this._refresh, e).on(t, "dblclick", L.DomEvent.stopPropagation), i
                },
                _configureAutorefreshButton: function() {
                    t("#autorefresh").change(function() {
                        t("#autorefresh").is(":checked") ? this._startRefreshTimer() : null != this._refreshTimer && (clearTimeout(this._refreshTimer), this._refreshTimer = null)
                    }.bind(this))
                },
                _startRefreshTimer: function() {
                    this._refreshTimer = setTimeout(this._runAutorefresh.bind(this), this.options.refreshWait)
                },
                _runAutorefresh: function() {
                    this._markerManager.isMarkerCurrentlyDragging() ? this._startRefreshTimer() : this._groupManager.refreshAllGroups(function() {
                        t("#autofollow").is(":checked") && (new Date - this._lastdrag > this.options.followTime && this._followOwnMarker());
                        this._startRefreshTimer()
                    }.bind(this))
                },
                _followOwnMarker: function() {
                    var t = this._groupManager.getPositionsOfUser(this._userManager.getUsername());
                    if (1 === t.length) {
                        var e = t[0];
                        this._map.panTo([e.coordinates.latitude, e.coordinates.longitude]), this._coordLinker && this._coordLinker.setCoordinates()
                    }
                },
                _refresh: function() {
                    this._userManager.isUsernameSet() ? 0 !== this._groupManager.getGroupCount() ? this._groupManager.refreshAllGroups() : showGroupWarning() : showUsernameWarning()
                }
            }), L.refreshManager = function(t, e, i, n, o) {
                return new L.RefreshManager(t, e, i, n, o)
            }, L.Map.include({
                addRefreshManager: function(t) {
                    this._refreshManager = t, t.addTo(this), this.on("drag", function() {
                        t._lastdrag = new Date
                    }), t._startRefreshTimer()
                }
            })
        }).call(this, i(1))
    }, function(t, e, i) {
        "use strict";
        (function(t) {
            i(5), i(14), i(21);
            L.IZurvive = L.Class.extend({
                statics: {},
                options: {
                    defaultConfig: {
                        izMap: {
                            mapId: -1,
                            views: []
                        },
                        leafletMapOptions: {
                            zoom: 6,
                            doubleClickZoom: !0,
                            attributionControl: !1,
                            zoomControl: !0
                        },
                        datastore: {
                            cookieExpire: 372
                        },
                        modules: {
                            citySearch: null,
                            groupManager: {},
                            locSearch: null,
                            lootManager: null,
                            locationNameManager: null,
                            mapTiles: {},
                            markerManager: {},
                            measureControl: null,
                            refreshManager: {},
                            userManager: {}
                        }
                    }
                },
                initialize: function(e, i) {
                    i = L.setOptions(this, i), this._config = this.options.defaultConfig, t.extend(!0, this._config, e), this._loadDefaultValuesForModules(), this._mapTiles = null, this._coordLinker = null, this._hashAction = null, this._userManager = null, this._groupManager = null, this._markerManager = null, this._lootManager = null, this._locationNameManager = null, this._citySearch = null, this._refreshManager = null, this.preInitializeModules()
                },
                _loadDefaultValuesForModules: function() {
                    !0 === this._config.features.search && (this._config.modules.citySearch.mapDirectory = this._config.mapHosting.mapDirectory, this._config.modules.citySearch.mapName = this._config.izMap.mapName, this._config.modules.citySearch.mapVersion = this._config.izMap.mapVersion, this._config.modules.citySearch.locSearch = this._config.modules.locSearch), this._config.modules.groupManager.serverUrl = this._getApiv1Url(), this._config.modules.groupManager.izurviveVersion = this._config.syncServer.apiv1.endpointVersion, this._config.modules.groupManager.mapShortcut = this._config.izMap.mapShortcut, this._config.modules.groupManager.cookieExpire = this._config.datastore.cookieExpire, this._config.features.lootmap && (this._config.modules.lootManager.mapDirectory = this._config.mapHosting.mapDirectory, this._config.modules.lootManager.mapName = this._config.izMap.mapName, this._config.modules.lootManager.mapVersion = this._config.izMap.mapVersion, this._config.modules.lootManager.maxZoom = this._config.izMap.maxZoom, this._config.modules.lootManager.cookieExpire = this._config.datastore.cookieExpire), this._config.features.locationNameManager && (this._config.modules.locationNameManager = {}, this._config.modules.locationNameManager.mapDirectory = this._config.mapHosting.mapDirectory, this._config.modules.locationNameManager.mapName = this._config.izMap.mapName, this._config.modules.locationNameManager.mapVersion = this._config.izMap.mapVersion), "https:" === location.protocol ? this._config.modules.mapTiles.tileDomain = "https:" + this._config.mapHosting.mapDirectory : this._config.modules.mapTiles.tileDomain = "http:" + this._config.mapHosting.mapDirectory, this._config.modules.markerManager.serverUrl = this._getApiv1Url(), this._config.modules.markerManager.izurviveVersion = this._config.syncServer.apiv1.endpointVersion, this._config.modules.markerManager.mapShortcut = this._config.izMap.mapShortcut, this._config.modules.userManager.cookieExpire = this._config.datastore.cookieExpire
                },
                _getApiv1Url: function() {
                    return this._config.syncServer.apiv1.endpointHttps
                },
                preInitializeModules: function() {
                    this._mapTiles = L.mapTiles(this._config.modules.mapTiles), this._coordLinker = L.coordLinker(), this._hashAction = L.hashAction(), this._userManager = L.userManager(this._config.modules.userManager)
                },
                postInitializeModules: function() {
                    if (this._devmodeInit(), t.ajaxSetup({
                            timeout: 3e4
                        }), this._config.izMap.views.length > 0)
                        for (var e = 0; e < this._config.izMap.views.length; ++e) {
                            var i = this._config.izMap.views[e],
                                n = void 0 !== i.version ? i.version : this._config.izMap.mapVersion,
                                o = void 0 !== i.maxZoom ? i.version : this._config.izMap.maxZoom;
                            this._mapTiles.addMap(i.name, n, o, {
                                pageTitle: i.pageTitle,
                                shortname: i.shortname,
                                location: i.location,
                                lineColor: i.lineColor
                            })
                        } else this._mapTiles.addMap(this._config.izMap.mapName, this._config.izMap.mapVersion, this._config.izMap.maxZoom);
                    this._groupManager = L.groupManager(this._config.modules.groupManager), this._config.modules.markerManager.syncServer = this._config.syncServer, this._markerManager = L.markerManager(this._groupManager, this._userManager, this._config.modules.markerManager), this._groupManager.refreshMapMarkers = L.bind(this._markerManager.refreshMapMarkers, this._markerManager);
                    var r = this._markerManager.getGroupMarkerLayer(),
                        s = [];
                    s.push(r), this._config.leafletMapOptions.layers = s, window.changeIZServer = function(t) {
                        this._groupManager.options.serverUrl = t, this._markerManager.options.serverUrl = t
                    }, this.postInitializeModulesInit()
                },
                postInitializeModulesInit: function() {
                    this._groupManager.readGroupsFromCookie();
                    var t = this._coordLinker.getCoordinates();
                    null !== t ? (this._config.leafletMapOptions.center = L.latLng(t.lat, t.lng), this._config.leafletMapOptions.zoom = t.zoom, this._map = new L.Map("map", this._config.leafletMapOptions).addLayer(this._mapTiles.getCurrentActiveLayer().tileLayer)) : this._map = new L.Map("map", this._config.leafletMapOptions).addLayer(this._mapTiles.getCurrentActiveLayer().tileLayer).fitBounds(new L.LatLngBounds(this._config.izMap.softMapBounds.southWest, this._config.izMap.softMapBounds.northEast)), this._map.addCoordLinker(this._coordLinker), this._map.addMapTileControl(this._mapTiles), this._map.options.closePopupOnClick = !1, this._map.options.fadeAnimation = !1, this._config.general.sections.groups && (this._groupManager.refreshAllGroups(), this._map.addUserManager(this._userManager), this._map.addMarkerManager(this._markerManager), this._refreshManager = L.refreshManager(this._groupManager, this._userManager, this._markerManager, this._coordLinker), this._map.addRefreshManager(this._refreshManager)), this._config.features.lootmap && (this._lootManager = L.lootManager(this._config.modules.lootManager), this._evaluateDebugHashActions(), null !== this._lootManager && this._map.addLootManager(this._lootManager)), this._config.features.locationNameManager && (this._locationNameManager = L.locationNameManager(this._config.modules.locationNameManager), this._evaluateDebugHashActions(), null !== this._locationNameManager && this._map.addLocationNameManager(this._locationNameManager)), this._evaluateDebugHashActions(), this._config.features.search && (this._citySearch = L.citySearch(this._config.modules.citySearch, (t, e) => {
                        this._displayLocation(t, e)
                    }), this._map.addCitySearch(this._citySearch)), this._config.features.loc && (this._locSearch = L.locSearch(this._config.modules.locSearch), this._map.addLocSearch(this._locSearch)), this._config.features.serverlogs && (this._logReader = L.logReader(this._locSearch.options.scalingParams), this._map.addLogReader(this._logReader)), this._map.on("singleclick", L.bind(this._onMapClick, this)), this._obfuscateMailAddresses(), this._hashAction.evaluateActions((t, e) => {
                        this._displayLocation(t, e)
                    }), this._map.zoomControl.setPosition("bottomright"), this._initializeDialogs(), this._mapTiles.configureElementsForTileColors()
                },
                _initializeDialogs: function() {
                    L.changeUsernameDialog(this._userManager), window.showGroupWarning = L.bind(this.showGroupWarning, this), window.showUsernameWarning = L.bind(this.showUsernameWarning, this), L.addGroupDialog(this._groupManager), L.addMarkerDialog(this._groupManager, this._markerManager, this._userManager), L.groupInfoDialog(this._groupManager, this._hashAction, {}), L.shareGroupDialog(this._groupManager, this._userManager, this._hashAction, {}), L.removeMarkerDialog(this._markerManager)
                },
                showGroupWarning: function() {
                    this.$groupRequired || (this.$groupRequired = L.requiredGroupDialog()), this.$groupRequired.show()
                },
                showUsernameWarning: function() {
                    this.$usernameRequired || (this.$usernameRequired = L.requiredUsernameDialog()), this.$usernameRequired.show()
                },
                _obfuscateMailAddresses: function() {
                    var e = this._config.social.feedbackMailAddress.split("").reverse().join(""),
                        i = "mailto:" + e + "?subject=" + encodeURIComponent("[" + this._config.social.feedbackName + "] Feedback Web") + "&body=%0A%0A%0A" + encodeURIComponent("Browser: " + navigator.userAgent);
                    t("#feedback").attr("href", i), t("#feedback").text(e), t("#feedback2").attr("href", i), t("#feedback2").text(e)
                },
                _onMapClick: function(e) {
                    void 0 === this._logReader && (void 0 !== this._map.ginfoControl.features.measure && this._map.ginfoControl.features.measure._measuring || this._config.general.sections.groups && (this._userManager.isUsernameSet() ? 0 !== this._groupManager.getGroupCount() ? t("#panel-add-marker").data("lastClickLatLng", e.latlng).trigger("open") : this.showGroupWarning() : this.showUsernameWarning()))
                },
                _displayLocation: function(t, e) {
                    if (t && this._locSearch) {
                        var i = L.LocUtil.locToCoords(t, this._locSearch.options.scalingParams);
                        L.LocUtil.mapPanTo(this._map, i, e);
                        const n = {
                                color: "#AA0010",
                                bubblingMouseEvents: !1
                            },
                            o = L.circleMarker(i, n).addTo(this._map);
                        o.on("click", function(t) {
                            L.DomEvent.stopPropagation(t), this._map.removeLayer(o)
                        }), o.bindPopup(t.loc1 + " / " + t.loc2, {
                            closeButton: !1
                        }), o.on("mouseover", function() {
                            this.openPopup()
                        }), o.on("mouseout", function() {
                            this.closePopup()
                        }), this._coordLinker && this._coordLinker.setLocation(t, e)
                    }
                },
                _evaluateDebugHashActions: function() {
                    if ("mapname" in this._coordLinker.getHashParams()) {
                        var t = this._coordLinker.getHashParams().mapname; - 1 === t.indexOf("/") && (null !== this._lootManager && (this._lootManager._getLootmapURL = function() {
                            return "maps/" + t + "/lootmap.json"
                        }), null !== this._locationNameManager && (this._locationNameManager._getCitycoorsURL = function() {
                            return "maps/" + t + "/citycoords.json"
                        }), setTimeout(function() {
                            window.testMbTiles(t)
                        }, 1e3))
                    }
                    if ("lootcat" in this._coordLinker.getHashParams()) {
                        var e = this._coordLinker.getHashParams().lootcat; - 1 !== this._config.modules.lootManager.categories.indexOf(e) && (this._config.modules.lootManager.defaultCategories = [e])
                    }
                    if ("lootversion" in this._coordLinker.getHashParams()) {
                        var i = this._coordLinker.getHashParams().lootversion;
                        i = i.replace(/_/g, ".");
                        /^\d{1,2}\.\d{1,2}\.\d{1,2}$/g.test(i) && (this._config.modules.lootManager.mapVersion = i)
                    }
                },
                _devmodeInit: function() {
                    var e = this;
                    "number" == typeof devmode && (t("#infopulldown").prepend("<div><input type='text' id='factor' value='6.465'/><input type='text' id='offset_x' value='0.0905'/><input type='text' id='offset_y' value='1.324'/><input type='submit' id='fosubmit' value='Loot'/></div>"), t("#fosubmit").click(function() {
                        window.getLootMap()
                    })), window.testMbTiles = function(t) {
                        e._mapTiles.getCurrentActiveLayer().tileLayer.setUrl("maps/" + t + "/tiles/{z}/{x}/{y}.png")
                    }
                }
            }), L.iZurvive = function(e, i) {
                t(document).ready(function() {
                    var t = new L.IZurvive(e, i);
                    window.iZurvive = t, t.postInitializeModules()
                })
            }
        }).call(this, i(1))
    }, function(t, e) {}, function(t, e, i) {
        "use strict";
        (function(t) {
            var e = i(0);
            t(".index").ready(function() {
                t("#loot-dropdown-nav").click(function(e) {
                    ! function(e) {
                        if (window.innerWidth >= 768) {
                            var i = t("#map").height() || window.innerHeight;
                            e.height(i - 170)
                        } else e.height("inherit")
                    }(t("#loot-dropdown"))
                }), t("#map-dropdown-nav").click(function(e) {
                    ! function(e) {
                        if (window.innerWidth >= 768 && window.innerHeight - e.height() - 170 <= 0) {
                            var i = t("#map").height() || window.innerHeight;
                            e.height(i - 170)
                        } else e.height("inherit")
                    }(t("#map-dropdown"))
                }), e.d() && t(window).on("resize", function(e) {
                    var i = t(".leaderboard-map");
                    t(window).height() < 400 ? i.css({
                        display: "none"
                    }) : i.is(":visible") || i.css({
                        display: "block"
                    })
                })
            })
        }).call(this, i(1))
    }, function(t, e, i) {
        (function(t) {
            t(".wiki").ready(function() {
                t.urlParam("inappview") && (t("body").css({
                    padding: 0
                }), t(".navbar").hide()), "true" === t.urlParam("na") && t(".gad-wiki").css({
                    display: "none"
                }), t("#quicknav > a").on("click", function(e) {
                    t(t(this).attr("href")).scrollTo(), e.preventDefault()
                })
            })
        }).call(this, i(1))
    }, function(t, e, i) {
        (function(t) {
            t(".community").ready(function() {
                t.urlParam("inappview") && (t("body").css({
                    padding: 0
                }), t(".navbar").hide()), t(".btn-more").click(function(e) {
                    e.preventDefault(), t(this).hide(), t(this).siblings(".txt-more").show()
                });
                var e = t.urlParam("game");
                t.urlParam("game") && (t("." + e + "-communities") && (t("#quicknav").hide(), t(".game-communities").hide(), t("." + e + "-communities").show()))
            })
        }).call(this, i(1))
    }, function(t, e, i) {
        "use strict";
        (function(t) {
            i(15);
            if (function(t, e, i, n, o, r, s) {
                    t.GoogleAnalyticsObject = o, t.ga = t.ga || function() {
                        (t.ga.q = t.ga.q || []).push(arguments)
                    }, t.ga.l = 1 * new Date, r = e.createElement(i), s = e.getElementsByTagName(i)[0], r.async = 1, r.src = "https://www.google-analytics.com/analytics.js", s.parentNode.insertBefore(r, s)
                }(window, document, "script", 0, "ga"), "undefined" != typeof ga && void 0 !== window.google_analytics_property_id) {
                ga("create", window.google_analytics_property_id, "auto"), ga("set", "dimension1", "default"), ga("set", "anonymizeIp", !0);
                try {
                    ga("set", "metric1", void 0 !== t.cookie("groups") ? Object.keys(JSON.parse(t.cookie("groups"))).length : 0)
                } catch (t) {
                    ga("set", "metric1", 0)
                }
                try {
                    ga("set", "metric2", "" !== t.cookie("username") && null !== t.cookie("username") && void 0 !== t.cookie("username") && "Username" !== t.cookie("username") ? 1 : 0)
                } catch (t) {
                    ga("set", "metric2", 0)
                }
                ga("send", "pageview")
            }
        }).call(this, i(1))
    }, function(t, e, i) {
        "use strict";
        var n = i(132),
            o = i(133),
            r = i(134),
            s = i(136),
            a = i(137),
            l = (navigator.language || navigator.userLanguage || navigator.browserLanguage).slice(-2) || "us",
            c = r && r.documentElement,
            u = {
                ios: {
                    appMeta: "apple-itunes-app",
                    iconRels: ["apple-touch-icon-precomposed", "apple-touch-icon"],
                    getStoreLink: function() {
                        return "https://itunes.apple.com/" + this.options.appStoreLanguage + "/app/id" + this.appId + "?mt=8"
                    }
                },
                android: {
                    appMeta: "google-play-app",
                    iconRels: ["android-touch-icon", "apple-touch-icon-precomposed", "apple-touch-icon"],
                    getStoreLink: function() {
                        return "http://play.google.com/store/apps/details?id=" + this.appId
                    }
                },
                windows: {
                    appMeta: "msApplication-ID",
                    iconRels: ["windows-touch-icon", "apple-touch-icon-precomposed", "apple-touch-icon"],
                    getStoreLink: function() {
                        return "http://www.windowsphone.com/s?appid=" + this.appId
                    }
                }
            },
            h = function(t) {
                var e = a(navigator.userAgent);
                if (this.options = n({}, {
                        daysHidden: 15,
                        daysReminder: 90,
                        appStoreLanguage: l,
                        button: "OPEN",
                        store: {
                            ios: "On the App Store",
                            android: "In Google Play",
                            windows: "In the Windows Store"
                        },
                        price: {
                            ios: "FREE",
                            android: "FREE",
                            windows: "FREE"
                        },
                        theme: "",
                        icon: "",
                        force: ""
                    }, t || {}), this.options.force ? this.type = this.options.force : "Windows Phone" === e.os.name || "Windows Mobile" === e.os.name ? this.type = "windows" : "iOS" === e.os.name ? this.type = "ios" : "Android" === e.os.name && (this.type = "android"), !(!this.type || !this.options.store[this.type])) {
                    this.appMeta = u[this.type].appMeta, this.parseAppId();
                    var i = "ios" === this.type && "Mobile Safari" === e.browser.name && parseInt(e.os.version, 10) >= 6,
                        o = navigator.standalone,
                        r = s.get(this.appId + "-smartbanner-closed"),
                        c = s.get(this.appId + "-smartbanner-installed");
                    i || o || r || c || (n(this, u[this.type]), (this.appId || "IOS" !== e.os.name || "Safari" !== e.browser.name) && (this.create(), this.show()))
                }
            };
        h.prototype = {
            constructor: h,
            create: function() {
                var t, e = this.getStoreLink(),
                    i = this.options.price[this.type] + " - " + this.options.store[this.type];
                if (this.options.icon) t = this.options.icon;
                else
                    for (var n = 0; n < this.iconRels.length; n++) {
                        var s = o('link[rel="' + this.iconRels[n] + '"]');
                        if (s) {
                            t = s.getAttribute("href");
                            break
                        }
                    }
                var a = r.createElement("div"),
                    l = this.options.theme || this.type;
                a.className = "smartbanner smartbanner-" + l, a.innerHTML = '<div class="smartbanner-container"><a href="javascript:void(0);" class="smartbanner-close">&times;</a><span class="smartbanner-icon" style="background-image: url(' + t + ')"></span><div class="smartbanner-info"><div class="smartbanner-title">' + this.options.title + "</div><div>" + this.options.author + "</div><span>" + i + '</span></div><a href="' + e + '" class="smartbanner-button"><span class="smartbanner-button-text">' + this.options.button + "</span></a></div>", r.body ? r.body.appendChild(a) : r && r.addEventListener("DOMContentLoaded", function() {
                    r.body.appendChild(a)
                }), o(".smartbanner-button", a).addEventListener("click", this.install.bind(this), !1), o(".smartbanner-close", a).addEventListener("click", this.close.bind(this), !1)
            },
            hide: function() {
                if (c.classList.remove("smartbanner-show"), "function" == typeof this.options.close) return this.options.close()
            },
            show: function() {
                if (c.classList.add("smartbanner-show"), "function" == typeof this.options.show) return this.options.show()
            },
            close: function() {
                if (this.hide(), s.set(this.appId + "-smartbanner-closed", "true", {
                        path: "/",
                        expires: new Date(Number(new Date) + 1e3 * this.options.daysHidden * 60 * 60 * 24)
                    }), "function" == typeof this.options.close) return this.options.close()
            },
            install: function() {
                if (this.hide(), s.set(this.appId + "-smartbanner-installed", "true", {
                        path: "/",
                        expires: new Date(Number(new Date) + 1e3 * this.options.daysReminder * 60 * 60 * 24)
                    }), "function" == typeof this.options.close) return this.options.close()
            },
            parseAppId: function() {
                var t = o('meta[name="' + this.appMeta + '"]');
                if (t) return "windows" === this.type ? this.appId = t.getAttribute("content") : this.appId = /app-id=([^\s,]+)/.exec(t.getAttribute("content"))[1], this.appId
            }
        }, t.exports = h
    }, function(t, e, i) {
        "use strict";
        /*
        object-assign
        (c) Sindre Sorhus
        @license MIT
        */
        var n = Object.getOwnPropertySymbols,
            o = Object.prototype.hasOwnProperty,
            r = Object.prototype.propertyIsEnumerable;
        t.exports = function() {
            try {
                if (!Object.assign) return !1;
                var t = new String("abc");
                if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
                if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                        return e[t]
                    }).join("")) return !1;
                var n = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                    n[t] = t
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
            } catch (t) {
                return !1
            }
        }() ? Object.assign : function(t, e) {
            for (var i, s, a = function(t) {
                    if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(t)
                }(t), l = 1; l < arguments.length; l++) {
                for (var c in i = Object(arguments[l])) o.call(i, c) && (a[c] = i[c]);
                if (n) {
                    s = n(i);
                    for (var u = 0; u < s.length; u++) r.call(i, s[u]) && (a[s[u]] = i[s[u]])
                }
            }
            return a
        }
    }, function(t, e) {
        function i(t, e) {
            return e.querySelector(t)
        }(e = t.exports = function(t, e) {
            return i(t, e = e || document)
        }).all = function(t, e) {
            return (e = e || document).querySelectorAll(t)
        }, e.engine = function(t) {
            if (!t.one) throw new Error(".one callback required");
            if (!t.all) throw new Error(".all callback required");
            return i = t.one, e.all = t.all, e
        }
    }, function(t, e, i) {
        var n = i(135);
        t.exports = n() ? document : null
    }, function(t, e, i) {
        "use strict";
        t.exports = function() {
            return "undefined" != typeof window && "undefined" != typeof document && "function" == typeof document.createElement
        }
    }, function(t, e) {
        e = t.exports = function(t) {
            t || (t = {}), "string" == typeof t && (t = {
                cookie: t
            }), void 0 === t.cookie && (t.cookie = "");
            var e = {
                get: function(e) {
                    for (var i = t.cookie.split(/;\s*/), n = 0; n < i.length; n++) {
                        var o = i[n].split("=");
                        if (unescape(o[0]) === e) return unescape(o[1])
                    }
                },
                set: function(e, i, n) {
                    n || (n = {});
                    var o = escape(e) + "=" + escape(i);
                    return n.expires && (o += "; expires=" + n.expires), n.path && (o += "; path=" + escape(n.path)), n.domain && (o += "; domain=" + escape(n.domain)), n.secure && (o += "; secure"), t.cookie = o, o
                }
            };
            return e
        };
        if ("undefined" != typeof document) {
            var i = e(document);
            e.get = i.get, e.set = i.set
        }
    }, function(t, e, i) {
        var n;
        /*!
        * UAParser.js v0.7.18
        * Lightweight JavaScript-based User-Agent string parser
        * https://github.com/faisalman/ua-parser-js
        *
        * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
        * Dual licensed under GPLv2 or MIT
        */
        /*!
        * UAParser.js v0.7.18
        * Lightweight JavaScript-based User-Agent string parser
        * https://github.com/faisalman/ua-parser-js
        *
        * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
        * Dual licensed under GPLv2 or MIT
        */
        ! function(o, r) {
            "use strict";
            var s = "model",
                a = "name",
                l = "type",
                c = "vendor",
                u = "version",
                h = "mobile",
                p = "tablet",
                d = {
                    extend: function(t, e) {
                        var i = {};
                        for (var n in t) e[n] && e[n].length % 2 == 0 ? i[n] = e[n].concat(t[n]) : i[n] = t[n];
                        return i
                    },
                    has: function(t, e) {
                        return "string" == typeof t && -1 !== e.toLowerCase().indexOf(t.toLowerCase())
                    },
                    lowerize: function(t) {
                        return t.toLowerCase()
                    },
                    major: function(t) {
                        return "string" == typeof t ? t.replace(/[^\d\.]/g, "").split(".")[0] : void 0
                    },
                    trim: function(t) {
                        return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                    }
                },
                f = {
                    rgx: function(t, e) {
                        for (var i, n, o, r, s, a, l = 0; l < e.length && !s;) {
                            var c = e[l],
                                u = e[l + 1];
                            for (i = n = 0; i < c.length && !s;)
                                if (s = c[i++].exec(t))
                                    for (o = 0; o < u.length; o++) a = s[++n], "object" == typeof(r = u[o]) && r.length > 0 ? 2 == r.length ? "function" == typeof r[1] ? this[r[0]] = r[1].call(this, a) : this[r[0]] = r[1] : 3 == r.length ? "function" != typeof r[1] || r[1].exec && r[1].test ? this[r[0]] = a ? a.replace(r[1], r[2]) : void 0 : this[r[0]] = a ? r[1].call(this, a, r[2]) : void 0 : 4 == r.length && (this[r[0]] = a ? r[3].call(this, a.replace(r[1], r[2])) : void 0) : this[r] = a || void 0;
                            l += 2
                        }
                    },
                    str: function(t, e) {
                        for (var i in e)
                            if ("object" == typeof e[i] && e[i].length > 0) {
                                for (var n = 0; n < e[i].length; n++)
                                    if (d.has(e[i][n], t)) return "?" === i ? void 0 : i
                            } else if (d.has(e[i], t)) return "?" === i ? void 0 : i;
                        return t
                    }
                },
                m = {
                    browser: {
                        oldsafari: {
                            version: {
                                "1.0": "/8",
                                1.2: "/1",
                                1.3: "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }
                        }
                    },
                    device: {
                        amazon: {
                            model: {
                                "Fire Phone": ["SD", "KF"]
                            }
                        },
                        sprint: {
                            model: {
                                "Evo Shift 4G": "7373KT"
                            },
                            vendor: {
                                HTC: "APA",
                                Sprint: "Sprint"
                            }
                        }
                    },
                    os: {
                        windows: {
                            version: {
                                ME: "4.90",
                                "NT 3.11": "NT3.51",
                                "NT 4.0": "NT4.0",
                                2000: "NT 5.0",
                                XP: ["NT 5.1", "NT 5.2"],
                                Vista: "NT 6.0",
                                7: "NT 6.1",
                                8: "NT 6.2",
                                8.1: "NT 6.3",
                                10: ["NT 6.4", "NT 10.0"],
                                RT: "ARM"
                            }
                        }
                    }
                },
                g = {
                    browser: [
                        [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                        [a, u],
                        [/(opios)[\/\s]+([\w\.]+)/i],
                        [
                            [a, "Opera Mini"], u
                        ],
                        [/\s(opr)\/([\w\.]+)/i],
                        [
                            [a, "Opera"], u
                        ],
                        [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],
                        [a, u],
                        [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                        [
                            [a, "IE"], u
                        ],
                        [/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],
                        [
                            [a, "Edge"], u
                        ],
                        [/(yabrowser)\/([\w\.]+)/i],
                        [
                            [a, "Yandex"], u
                        ],
                        [/(puffin)\/([\w\.]+)/i],
                        [
                            [a, "Puffin"], u
                        ],
                        [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                        [
                            [a, "UCBrowser"], u
                        ],
                        [/(comodo_dragon)\/([\w\.]+)/i],
                        [
                            [a, /_/g, " "], u
                        ],
                        [/(micromessenger)\/([\w\.]+)/i],
                        [
                            [a, "WeChat"], u
                        ],
                        [/(qqbrowserlite)\/([\w\.]+)/i],
                        [a, u],
                        [/(QQ)\/([\d\.]+)/i],
                        [a, u],
                        [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                        [a, u],
                        [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
                        [a, u],
                        [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                        [a, u],
                        [/(MetaSr)[\/\s]?([\w\.]+)/i],
                        [a],
                        [/(LBBROWSER)/i],
                        [a],
                        [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                        [u, [a, "MIUI Browser"]],
                        [/;fbav\/([\w\.]+);/i],
                        [u, [a, "Facebook"]],
                        [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                        [u, [a, "Chrome Headless"]],
                        [/\swv\).+(chrome)\/([\w\.]+)/i],
                        [
                            [a, /(.+)/, "$1 WebView"], u
                        ],
                        [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                        [
                            [a, /(.+(?:g|us))(.+)/, "$1 $2"], u
                        ],
                        [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                        [u, [a, "Android Browser"]],
                        [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                        [a, u],
                        [/(dolfin)\/([\w\.]+)/i],
                        [
                            [a, "Dolphin"], u
                        ],
                        [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                        [
                            [a, "Chrome"], u
                        ],
                        [/(coast)\/([\w\.]+)/i],
                        [
                            [a, "Opera Coast"], u
                        ],
                        [/fxios\/([\w\.-]+)/i],
                        [u, [a, "Firefox"]],
                        [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                        [u, [a, "Mobile Safari"]],
                        [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                        [u, a],
                        [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                        [
                            [a, "GSA"], u
                        ],
                        [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                        [a, [u, f.str, m.browser.oldsafari.version]],
                        [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                        [a, u],
                        [/(navigator|netscape)\/([\w\.-]+)/i],
                        [
                            [a, "Netscape"], u
                        ],
                        [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                        [a, u]
                    ],
                    cpu: [
                        [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                        [
                            ["architecture", "amd64"]
                        ],
                        [/(ia32(?=;))/i],
                        [
                            ["architecture", d.lowerize]
                        ],
                        [/((?:i[346]|x)86)[;\)]/i],
                        [
                            ["architecture", "ia32"]
                        ],
                        [/windows\s(ce|mobile);\sppc;/i],
                        [
                            ["architecture", "arm"]
                        ],
                        [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                        [
                            ["architecture", /ower/, "", d.lowerize]
                        ],
                        [/(sun4\w)[;\)]/i],
                        [
                            ["architecture", "sparc"]
                        ],
                        [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                        [
                            ["architecture", d.lowerize]
                        ]
                    ],
                    device: [
                        [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                        [s, c, [l, p]],
                        [/applecoremedia\/[\w\.]+ \((ipad)/],
                        [s, [c, "Apple"],
                            [l, p]
                        ],
                        [/(apple\s{0,1}tv)/i],
                        [
                            [s, "Apple TV"],
                            [c, "Apple"]
                        ],
                        [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                        [c, s, [l, p]],
                        [/(kf[A-z]+)\sbuild\/.+silk\//i],
                        [s, [c, "Amazon"],
                            [l, p]
                        ],
                        [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                        [
                            [s, f.str, m.device.amazon.model],
                            [c, "Amazon"],
                            [l, h]
                        ],
                        [/\((ip[honed|\s\w*]+);.+(apple)/i],
                        [s, c, [l, h]],
                        [/\((ip[honed|\s\w*]+);/i],
                        [s, [c, "Apple"],
                            [l, h]
                        ],
                        [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                        [c, s, [l, h]],
                        [/\(bb10;\s(\w+)/i],
                        [s, [c, "BlackBerry"],
                            [l, h]
                        ],
                        [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
                        [s, [c, "Asus"],
                            [l, p]
                        ],
                        [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                        [
                            [c, "Sony"],
                            [s, "Xperia Tablet"],
                            [l, p]
                        ],
                        [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
                        [s, [c, "Sony"],
                            [l, h]
                        ],
                        [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                        [c, s, [l, "console"]],
                        [/android.+;\s(shield)\sbuild/i],
                        [s, [c, "Nvidia"],
                            [l, "console"]
                        ],
                        [/(playstation\s[34portablevi]+)/i],
                        [s, [c, "Sony"],
                            [l, "console"]
                        ],
                        [/(sprint\s(\w+))/i],
                        [
                            [c, f.str, m.device.sprint.vendor],
                            [s, f.str, m.device.sprint.model],
                            [l, h]
                        ],
                        [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                        [c, s, [l, p]],
                        [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                        [c, [s, /_/g, " "],
                            [l, h]
                        ],
                        [/(nexus\s9)/i],
                        [s, [c, "HTC"],
                            [l, p]
                        ],
                        [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
                        [s, [c, "Huawei"],
                            [l, h]
                        ],
                        [/(microsoft);\s(lumia[\s\w]+)/i],
                        [c, s, [l, h]],
                        [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                        [s, [c, "Microsoft"],
                            [l, "console"]
                        ],
                        [/(kin\.[onetw]{3})/i],
                        [
                            [s, /\./g, " "],
                            [c, "Microsoft"],
                            [l, h]
                        ],
                        [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                        [s, [c, "Motorola"],
                            [l, h]
                        ],
                        [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                        [s, [c, "Motorola"],
                            [l, p]
                        ],
                        [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                        [
                            [c, d.trim],
                            [s, d.trim],
                            [l, "smarttv"]
                        ],
                        [/hbbtv.+maple;(\d+)/i],
                        [
                            [s, /^/, "SmartTV"],
                            [c, "Samsung"],
                            [l, "smarttv"]
                        ],
                        [/\(dtv[\);].+(aquos)/i],
                        [s, [c, "Sharp"],
                            [l, "smarttv"]
                        ],
                        [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                        [
                            [c, "Samsung"], s, [l, p]
                        ],
                        [/smart-tv.+(samsung)/i],
                        [c, [l, "smarttv"], s],
                        [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                        [
                            [c, "Samsung"], s, [l, h]
                        ],
                        [/sie-(\w*)/i],
                        [s, [c, "Siemens"],
                            [l, h]
                        ],
                        [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                        [
                            [c, "Nokia"], s, [l, h]
                        ],
                        [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                        [s, [c, "Acer"],
                            [l, p]
                        ],
                        [/android.+([vl]k\-?\d{3})\s+build/i],
                        [s, [c, "LG"],
                            [l, p]
                        ],
                        [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                        [
                            [c, "LG"], s, [l, p]
                        ],
                        [/(lg) netcast\.tv/i],
                        [c, s, [l, "smarttv"]],
                        [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                        [s, [c, "LG"],
                            [l, h]
                        ],
                        [/android.+(ideatab[a-z0-9\-\s]+)/i],
                        [s, [c, "Lenovo"],
                            [l, p]
                        ],
                        [/linux;.+((jolla));/i],
                        [c, s, [l, h]],
                        [/((pebble))app\/[\d\.]+\s/i],
                        [c, s, [l, "wearable"]],
                        [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                        [c, s, [l, h]],
                        [/crkey/i],
                        [
                            [s, "Chromecast"],
                            [c, "Google"]
                        ],
                        [/android.+;\s(glass)\s\d/i],
                        [s, [c, "Google"],
                            [l, "wearable"]
                        ],
                        [/android.+;\s(pixel c)\s/i],
                        [s, [c, "Google"],
                            [l, p]
                        ],
                        [/android.+;\s(pixel xl|pixel)\s/i],
                        [s, [c, "Google"],
                            [l, h]
                        ],
                        [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],
                        [
                            [s, /_/g, " "],
                            [c, "Xiaomi"],
                            [l, h]
                        ],
                        [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                        [
                            [s, /_/g, " "],
                            [c, "Xiaomi"],
                            [l, p]
                        ],
                        [/android.+;\s(m[1-5]\snote)\sbuild/i],
                        [s, [c, "Meizu"],
                            [l, p]
                        ],
                        [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i],
                        [s, [c, "OnePlus"],
                            [l, h]
                        ],
                        [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                        [s, [c, "RCA"],
                            [l, p]
                        ],
                        [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                        [s, [c, "Dell"],
                            [l, p]
                        ],
                        [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                        [s, [c, "Verizon"],
                            [l, p]
                        ],
                        [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                        [
                            [c, "Barnes & Noble"], s, [l, p]
                        ],
                        [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                        [s, [c, "NuVision"],
                            [l, p]
                        ],
                        [/android.+;\s(k88)\sbuild/i],
                        [s, [c, "ZTE"],
                            [l, p]
                        ],
                        [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                        [s, [c, "Swiss"],
                            [l, h]
                        ],
                        [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                        [s, [c, "Swiss"],
                            [l, p]
                        ],
                        [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                        [s, [c, "Zeki"],
                            [l, p]
                        ],
                        [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                        [
                            [c, "Dragon Touch"], s, [l, p]
                        ],
                        [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                        [s, [c, "Insignia"],
                            [l, p]
                        ],
                        [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                        [s, [c, "NextBook"],
                            [l, p]
                        ],
                        [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                        [
                            [c, "Voice"], s, [l, h]
                        ],
                        [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                        [
                            [c, "LvTel"], s, [l, h]
                        ],
                        [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                        [s, [c, "Envizen"],
                            [l, p]
                        ],
                        [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                        [c, s, [l, p]],
                        [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                        [s, [c, "MachSpeed"],
                            [l, p]
                        ],
                        [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                        [c, s, [l, p]],
                        [/android.+[;\/]\s*TU_(1491)\s+build/i],
                        [s, [c, "Rotor"],
                            [l, p]
                        ],
                        [/android.+(KS(.+))\s+build/i],
                        [s, [c, "Amazon"],
                            [l, p]
                        ],
                        [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                        [c, s, [l, p]],
                        [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                        [
                            [l, d.lowerize], c, s
                        ],
                        [/(android[\w\.\s\-]{0,9});.+build/i],
                        [s, [c, "Generic"]]
                    ],
                    engine: [
                        [/windows.+\sedge\/([\w\.]+)/i],
                        [u, [a, "EdgeHTML"]],
                        [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                        [a, u],
                        [/rv\:([\w\.]{1,9}).+(gecko)/i],
                        [u, a]
                    ],
                    os: [
                        [/microsoft\s(windows)\s(vista|xp)/i],
                        [a, u],
                        [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                        [a, [u, f.str, m.os.windows.version]],
                        [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                        [
                            [a, "Windows"],
                            [u, f.str, m.os.windows.version]
                        ],
                        [/\((bb)(10);/i],
                        [
                            [a, "BlackBerry"], u
                        ],
                        [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i],
                        [a, u],
                        [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                        [
                            [a, "Symbian"], u
                        ],
                        [/\((series40);/i],
                        [a],
                        [/mozilla.+\(mobile;.+gecko.+firefox/i],
                        [
                            [a, "Firefox OS"], u
                        ],
                        [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
                        [a, u],
                        [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                        [
                            [a, "Chromium OS"], u
                        ],
                        [/(sunos)\s?([\w\.\d]*)/i],
                        [
                            [a, "Solaris"], u
                        ],
                        [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                        [a, u],
                        [/(haiku)\s(\w+)/i],
                        [a, u],
                        [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                        [
                            [u, /_/g, "."],
                            [a, "iOS"]
                        ],
                        [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                        [
                            [a, "Mac OS"],
                            [u, /_/g, "."]
                        ],
                        [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]*)/i],
                        [a, u]
                    ]
                },
                v = function(t, e) {
                    if ("object" == typeof t && (e = t, t = void 0), !(this instanceof v)) return new v(t, e).getResult();
                    var i = t || (o && o.navigator && o.navigator.userAgent ? o.navigator.userAgent : ""),
                        n = e ? d.extend(g, e) : g;
                    return this.getBrowser = function() {
                        var t = {
                            name: void 0,
                            version: void 0
                        };
                        return f.rgx.call(t, i, n.browser), t.major = d.major(t.version), t
                    }, this.getCPU = function() {
                        var t = {
                            architecture: void 0
                        };
                        return f.rgx.call(t, i, n.cpu), t
                    }, this.getDevice = function() {
                        var t = {
                            vendor: void 0,
                            model: void 0,
                            type: void 0
                        };
                        return f.rgx.call(t, i, n.device), t
                    }, this.getEngine = function() {
                        var t = {
                            name: void 0,
                            version: void 0
                        };
                        return f.rgx.call(t, i, n.engine), t
                    }, this.getOS = function() {
                        var t = {
                            name: void 0,
                            version: void 0
                        };
                        return f.rgx.call(t, i, n.os), t
                    }, this.getResult = function() {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        }
                    }, this.getUA = function() {
                        return i
                    }, this.setUA = function(t) {
                        return i = t, this
                    }, this
                };
            v.VERSION = "0.7.18", v.BROWSER = {
                NAME: a,
                MAJOR: "major",
                VERSION: u
            }, v.CPU = {
                ARCHITECTURE: "architecture"
            }, v.DEVICE = {
                MODEL: s,
                VENDOR: c,
                TYPE: l,
                CONSOLE: "console",
                MOBILE: h,
                SMARTTV: "smarttv",
                TABLET: p,
                WEARABLE: "wearable",
                EMBEDDED: "embedded"
            }, v.ENGINE = {
                NAME: a,
                VERSION: u
            }, v.OS = {
                NAME: a,
                VERSION: u
            }, void 0 !== e ? (void 0 !== t && t.exports && (e = t.exports = v), e.UAParser = v) : i(50) ? void 0 === (n = function() {
                return v
            }.call(e, i, e, t)) || (t.exports = n) : o && (o.UAParser = v);
            var _ = o && (o.jQuery || o.Zepto);
            if (void 0 !== _) {
                var y = new v;
                _.ua = y.getResult(), _.ua.get = function() {
                    return y.getUA()
                }, _.ua.set = function(t) {
                    y.setUA(t);
                    var e = y.getResult();
                    for (var i in e) _.ua[i] = e[i]
                }
            }
        }("object" == typeof window ? window : this)
    }, function(t, e, i) {
        "use strict";
        i(72), i(83), i(84), i(85), i(86), i(87), i(88), i(89), i(38), i(5), i(21);
        L.HashClass = L.Class.extend({
            statics: {},
            options: {},
            initialize: function(t) {
                t = L.setOptions(this, t)
            },
            getQueryParams: function() {
                return new URLSearchParams(location.search)
            },
            getHashParams: function() {
                var t, e, i = /\+/g,
                    n = /([^&=]+)=?([^&]*)/g,
                    o = function(t) {
                        return decodeURIComponent(t.replace(i, " "))
                    },
                    r = location.hash.replace("#", "");
                for (t = {}; e = n.exec(r);) t[o(e[1])] = o(e[2]);
                return t
            }
        });
        i(14);
        var n = i(60);
        const o = i.n(n)()();
        L.CoordLinker = L.HashClass.extend({
            statics: {
                DisableNextCoordSet: !1
            },
            options: {},
            initialize: function(t) {
                t = L.setOptions(this, t)
            },
            setCoordinates: function() {
                var t = this._map.getCenter();
                L.CoordLinker.ignoreNextCoordSet();
                var e = `c=${Math.round(t.lat)};${Math.round(t.lng)};${this._map.getZoom()}`;
                if (o) {
                    const t = Object.assign(o.location, {
                        hash: "#" + e
                    });
                    o.replace(t)
                }
            },
            setLocation: function(t, e) {
                var i = `location=${t.loc1};${t.loc2};${e}`;
                if (L.CoordLinker.ignoreNextCoordSet(), o) {
                    const t = Object.assign(o.location, {
                        hash: "#" + i
                    });
                    o.replace(t)
                }
            },
            getCoordinates: function() {
                return this._evaluateCoords(this.getHashParams())
            },
            _onAdd: function() {
                this._map.on("dragend", L.bind(this.setCoordinates, this)), this._map.on("zoomend", L.bind(this.setCoordinates, this))
            },
            _hashChange: function() {
                if (L.CoordLinker.DisableNextCoordSet) L.CoordLinker.DisableNextCoordSet = !1;
                else {
                    var t = this._evaluateCoords(this.getHashParams());
                    null !== t && (void 0 !== t.zoom ? this._map.setView(L.latLng(t.lat, t.lng), t.zoom) : this._map.setView(L.latLng(t.lat, t.lng)))
                }
            },
            _evaluateCoords: function(t) {
                var e = {};
                if ("c" in t) {
                    var i, n = t.c.split(";"),
                        o = parseInt(n[0]),
                        r = parseInt(n[1]);
                    return isNaN(o) ? null : isNaN(r) ? null : (n.length > 2 && (i = parseFloat(n[2])), isNaN(i) && (i = 6), e.lat = o, e.lng = r, e.zoom = i, e)
                }
                return null
            }
        }), L.CoordLinker.ignoreNextCoordSet = function() {
            L.CoordLinker.DisableNextCoordSet = !0
        }, L.coordLinker = function(t) {
            return new L.CoordLinker(t)
        }, L.Map.include({
            addCoordLinker: function(t) {
                t._map = this, t._onAdd(), this._coordLinker = t
            },
            setCoordinates: function() {
                this._coordLinker && this._coordLinker.setCoordinates()
            }
        });
        i(96), i(97), i(110), i(111), i(112), i(114), i(116), i(117), i(118), i(119), i(121), i(122), i(123), i(124), i(24);
        var r = i(0);
        L.CanvasLayer = L.GridLayer.extend({
            statics: {
                Images: {}
            },
            options: {
                autoRedraw: !0
            },
            setAutoRedraw: function(t) {
                this.options.autoRedraw = t
            },
            initialize: function(t) {
                t = L.setOptions(this, t), this._layerList = {}, this._layerGrid = {}, this._currentlyLoadingImages = 0, this._loadingFinishedCallbacks = []
            },
            onAdd: function(t) {
                L.GridLayer.prototype.onAdd.call(this, t), this._currentZoom = t.getZoom()
            },
            addLayer: function(t) {
                if (t instanceof L.VisibilityLayer) {
                    var e = L.Util.stamp(t);
                    this._layerList[e] = t, t._canvasLayer = this;
                    var i = t.getImages();
                    for (var n in i) {
                        var o = i[n];
                        this._loadImage(o)
                    }
                    this._addLayer(t), L.GridLayer.prototype.redraw.call(this)
                } else console.warn("FIX: CanvasLayer.addLayer(layer) only takes VisibilityLayer as argument")
            },
            createTile: function(t) {
                return this._createTile(t)
            },
            _patchCreateTileSynchronous: function() {
                const t = this;
                this.createTile = function(e) {
                    return t._createTile(e, void 0)
                }
            },
            _patchCreateTileAsynchronous: function() {
                const t = this;
                this.createTile = function(e, i) {
                    return t._createTile(e, i)
                }
            },
            _createTile: function(t, e) {
                const i = document.createElement("canvas"),
                    n = i.getContext("2d"),
                    o = this.options.tileSize;
                i.width = i.height = o;
                const r = t.z;
                let s;
                return this._currentZoom !== r && (this._currentZoom = r, this._rebuildLayerGrid()), (s = this._layerGrid[t.x] ? this._layerGrid[t.x][t.y] : []) && 0 !== s.length ? this._currentlyLoadingImages > 0 ? (this._loadingFinishedCallbacks.push(() => {
                    const r = this._drawTile(this, t, i, n, o, s);
                    L.Util.requestAnimFrame(() => {
                        e(null, r)
                    })
                }), i) : this._drawTile(this, t, i, n, o, s) : i
            },
            _drawTile: function(t, e, i, n, o, r) {
                r.sort((t, e) => {
                    var i = t.options.zIndexOffset + t._latlng.lat,
                        n = e.options.zIndexOffset + e._latlng.lat;
                    return i > n ? 1 : i < n ? -1 : 0
                });
                for (var s = L.point([e.x * o, e.y * o]), a = 0; a < r.length; ++a) {
                    var l = r[a];
                    if (l._visibilityLayer.getVisible()) {
                        var c = l.options.icon.options.iconUrl,
                            u = t._getImage(c);
                        if (u) {
                            var h = (h = l.options.icon.options.spriteOffset) ? L.point(h) : L.point(0, 0),
                                p = l._bounds,
                                d = l.getSizeForScaling(e.z),
                                f = L.point(l.options.icon.options.iconSize);
                            n.drawImage(u, h.x, h.y, f.x, f.y, Math.floor(p.min.x - s.x), Math.floor(p.min.y - s.y), d.x, d.y)
                        } else console.warn("FIX: should not happen. Images should already be loaded. iconUrl: " + c)
                    }
                }
                return i
            },
            _fireLoadingCallbacks: function(t) {
                if (0 === t._currentlyLoadingImages) {
                    for (var e in t._loadingFinishedCallbacks) t._loadingFinishedCallbacks[e]();
                    t._loadingFinishedCallbacks = []
                }
            },
            _loadImage: function(t) {
                if (L.CanvasLayer.Images[t]) return;
                const e = this;
                0 === this._currentlyLoadingImages && this._patchCreateTileAsynchronous(), this._currentlyLoadingImages++;
                var i = new Image;
                i.onload = function() {
                    this._loaded = !0, e._currentlyLoadingImages--, 0 === e._currentlyLoadingImages && e._patchCreateTileSynchronous(), e._fireLoadingCallbacks(e)
                }, i.onerror = function() {
                    console.warn("FIX: Unable to load image. imageUrl: " + t), L.CanvasLayer.Images[t] = !1, e._currentlyLoadingImages--, e._fireLoadingCallbacks(e)
                }, i.src = t, L.CanvasLayer.Images[t] = i
            },
            _getImage: function(t) {
                var e = L.CanvasLayer.Images[t];
                if (e) return !!e._loaded && e;
                console.warn("FIX: should not happen? has the iconUrl changed? iconUrl: " + t)
            },
            _addLayer: function(t) {
                var e = this.options.tileSize,
                    i = this;
                t.eachLayer(function(t) {
                    t instanceof L.VisibilityLayer ? i._addLayer(t) : i._addMarker(t, e)
                })
            },
            _addMarker: function(t, e) {
                var i = this._map.options.crs.latLngToPoint(t.getLatLng(), this._currentZoom),
                    n = t.getSizeForScaling(this._currentZoom),
                    o = L.point([n.x / 2, n.y / 2]);
                t._bounds = L.bounds([
                    [i.x - o.x, i.y - o.y],
                    [i.x + (n.x - o.x), i.y + (n.y - o.y)]
                ]);
                for (var r = L.point([Math.floor(t._bounds.min.x / e), Math.floor(t._bounds.min.y / e)]), s = L.point([Math.floor(t._bounds.max.x / e), Math.floor(t._bounds.max.y / e)]), a = r.y; a <= s.y; a++)
                    for (var l = r.x; l <= s.x; l++) this._addMarkerToList(t, L.point([l, a]))
            },
            _addMarkerToList: function(t, e) {
                this._layerGrid[e.x] || (this._layerGrid[e.x] = {});
                var i = this._layerGrid[e.x][e.y];
                i || (i = this._layerGrid[e.x][e.y] = []), i.push(t)
            },
            _rebuildLayerGrid: function() {
                for (var t in this._layerGrid = {}, this._layerList) {
                    var e = this._layerList[t];
                    this._addLayer(e)
                }
            },
            _isValidTile: function(t) {
                return !(t.x < 0) && (!(t.x > this._globalTileRange.max.x) && L.GridLayer.prototype._isValidTile.call(this, t))
            }
        }), L.canvasLayer = function(t) {
            return new L.CanvasLayer(t)
        }, L.VisibilityLayer = L.LayerGroup.extend({
            options: {
                visible: !0
            },
            setVisible: function(t, e) {
                var i = this.options.visible;
                if (this._setVisible(t, e), i !== t) {
                    var n = this._getCanvasLayer();
                    null !== n && n.redraw()
                }
            },
            _setVisible: function(t, e) {
                void 0 !== e && this.eachLayer(function(i) {
                    i instanceof L.VisibilityLayer && i._setVisible(t, e)
                }), this.options.visible = t
            },
            getVisible: function() {
                return this.options.visible
            },
            initialize: function(t) {
                t = L.setOptions(this, t), L.LayerGroup.prototype.initialize.call(this, t)
            },
            onAdd: function(t) {
                L.LayerGroup.prototype.onAdd.call(this, t)
            },
            getScaling: function() {
                return 1
            },
            getImages: function() {
                var t = [];
                return this.eachLayer(function(e) {
                    if (e instanceof L.Marker) void 0 === e.options.icon && r.f(() => {
                        Raven.captureMessage("[CanvasLayer] layer.options.icon is undefined", {
                            tags: {
                                options: e.options
                            }
                        })
                    }), t.push(e.options.icon.options.iconUrl);
                    else if (e instanceof L.VisibilityLayer) {
                        var i = e.getImages();
                        t.push.apply(t, i)
                    }
                }), t
            },
            addLayer: function(t) {
                t instanceof L.Marker ? (L.LayerGroup.prototype.addLayer.call(this, t), t._visibilityLayer = this) : t instanceof L.VisibilityLayer ? (L.LayerGroup.prototype.addLayer.call(this, t), t._superLayer = this) : console.warn("FIX: VisibilityLayer only takes Markers or VisibilityLayers")
            },
            _getCanvasLayer: function() {
                var t = this;
                do {
                    if (t._canvasLayer instanceof L.CanvasLayer) return t._canvasLayer;
                    t = t._superLayer
                } while (t instanceof L.VisibilityLayer);
                return null
            }
        }), L.visibilityLayer = function(t) {
            return new L.VisibilityLayer(t)
        }, L.Marker = L.Marker.extend({
            getSizeForScaling: function(t) {
                var e = this._visibilityLayer.getScaling(t);
                void 0 !== this.options.scaleFactor && (e *= this.options.scaleFactor), void 0 === this.options.icon && r.f(() => {
                    Raven.captureMessage("[CanvasLayer] this.options.icon is undefined", {
                        tags: {
                            options: this.options
                        }
                    })
                });
                var i = Math.floor(this.options.icon.options.iconSize[0] * e),
                    n = Math.floor(this.options.icon.options.iconSize[1] * e);
                return L.point(i, n)
            }
        }), L.disableTileWrap = function(t) {
            t._isValidTile = function(t) {
                return !(t.x < 0) && (!(t.x > this._globalTileRange.max.x) && L.GridLayer.prototype._isValidTile.call(this, t))
            }
        };
        i(125), i(16), i(126)
    }]);
}

window.izurviveDeps = izurviveDeps