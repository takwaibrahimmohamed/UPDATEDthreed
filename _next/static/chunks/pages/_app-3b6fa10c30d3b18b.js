(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        1118: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n(9472)
            }])
        },
        9472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return nZ
                }
            });
            var i, r, o = n(5893),
                s = n(1527),
                a = n.n(s),
                u = n(1163);

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, i)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach(function(t) {
                        _(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function d(e) {
                return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function h(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }

            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function p(e, t, n) {
                return t && f(e.prototype, t), n && f(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function _(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function g(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && m(e, t)
            }

            function v(e) {
                return (v = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function m(e, t) {
                return (m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function y(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, i = v(e);
                    if (t) {
                        var r = v(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return function(e, t) {
                        if (t && ("object" == typeof t || "function" == typeof t)) return t;
                        if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
                        return function(e) {
                            if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e)
                    }(this, n)
                }
            }

            function b(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var i, r, o = [],
                            s = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(s = (i = n.next()).done) && (o.push(i.value), !t || o.length !== t); s = !0);
                        } catch (e) {
                            a = !0, r = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (a) throw r
                            }
                        }
                        return o
                    }
                }(e, t) || w(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function k(e) {
                return function(e) {
                    if (Array.isArray(e)) return S(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || w(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function w(e, t) {
                if (e) {
                    if ("string" == typeof e) return S(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? S(e, t) : void 0
                }
            }

            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
                return i
            }

            function F(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = w(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[i++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: r
                        }
                    }
                    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, s = !0,
                    a = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return s = e.done, e
                    },
                    e: function(e) {
                        a = !0, o = e
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                }
            }
            n(3814);
            var P = {
                    DEBUG: !1,
                    LIB_VERSION: "1.100.0"
                },
                I = Array.isArray,
                x = Object.prototype,
                R = x.hasOwnProperty,
                E = x.toString,
                C = I || function(e) {
                    return "[object Array]" === E.call(e)
                },
                O = function(e) {
                    return "[object Uint8Array]" === E.call(e)
                },
                $ = function(e) {
                    return "function" == typeof e
                },
                T = function(e) {
                    return e === Object(e) && !C(e)
                },
                A = function(e) {
                    if (T(e)) {
                        for (var t in e)
                            if (R.call(e, t)) return !1;
                        return !0
                    }
                    return !1
                },
                M = function(e) {
                    return void 0 === e
                },
                D = function(e) {
                    return "[object String]" == E.call(e)
                },
                N = function(e) {
                    return null === e
                },
                q = function(e) {
                    return "[object Number]" == E.call(e)
                },
                B = function(e) {
                    return "[object Boolean]" === E.call(e)
                },
                L = Array.prototype,
                j = L.forEach,
                H = L.indexOf,
                V = "undefined" != typeof window ? window : void 0,
                U = null == V ? void 0 : V.navigator,
                W = null == V ? void 0 : V.document,
                G = null == U ? void 0 : U.userAgent,
                z = null != V ? V : {},
                Y = "[PostHog.js]",
                Q = {
                    _log: function(e) {
                        if (V && (P.DEBUG || z.POSTHOG_DEBUG) && !M(V.console) && V.console) {
                            for (var t = ("__rrweb_original__" in V.console[e]) ? V.console[e].__rrweb_original__ : V.console[e], n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                            t.apply(void 0, [Y].concat(i))
                        }
                    },
                    info: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        Q._log.apply(Q, ["log"].concat(t))
                    },
                    warn: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        Q._log.apply(Q, ["warn"].concat(t))
                    },
                    error: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        Q._log.apply(Q, ["error"].concat(t))
                    },
                    critical: function() {
                        for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                        (e = console).error.apply(e, [Y].concat(n))
                    },
                    uninitializedWarning: function(e) {
                        Q.error("You must initialize PostHog before calling ".concat(e))
                    }
                },
                J = {},
                X = function(e) {
                    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                };

            function K(e, t, n) {
                if (C(e)) {
                    if (j && e.forEach === j) e.forEach(t, n);
                    else if ("length" in e && e.length === +e.length) {
                        for (var i = 0, r = e.length; i < r; i++)
                            if (i in e && t.call(n, e[i], i) === J) return
                    }
                }
            }

            function Z(e, t, n) {
                if (!N(e) && !M(e)) {
                    if (C(e)) return K(e, t, n);
                    for (var i in e)
                        if (R.call(e, i) && t.call(n, e[i], i) === J) return
                }
            }
            var ee = function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                return K(n, function(t) {
                    for (var n in t) void 0 !== t[n] && (e[n] = t[n])
                }), e
            };

            function et(e, t) {
                return -1 !== e.indexOf(t)
            }

            function en(e) {
                for (var t = Object.keys(e), n = t.length, i = Array(n); n--;) i[n] = [t[n], e[t[n]]];
                return i
            }
            var ei = function() {
                    return Date.now = Date.now || function() {
                        return +new Date
                    }, Date.now()
                },
                er = function(e) {
                    try {
                        return e()
                    } catch (e) {
                        return
                    }
                },
                eo = function(e) {
                    return function() {
                        try {
                            for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                            return e.apply(this, n)
                        } catch (e) {
                            Q.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), Q.critical(e)
                        }
                    }
                },
                es = function(e) {
                    var t = {};
                    return Z(e, function(e, n) {
                        D(e) && e.length > 0 && (t[n] = e)
                    }), t
                },
                ea = ["$performance_raw"];

            function eu(e) {
                var t, n, i, r, o, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    a = 0,
                    u = 0,
                    l = "",
                    c = [];
                if (!e) return e;
                e = el(e);
                do t = (o = e.charCodeAt(a++) << 16 | e.charCodeAt(a++) << 8 | e.charCodeAt(a++)) >> 18 & 63, n = o >> 12 & 63, i = o >> 6 & 63, r = 63 & o, c[u++] = s.charAt(t) + s.charAt(n) + s.charAt(i) + s.charAt(r); while (a < e.length);
                switch (l = c.join(""), e.length % 3) {
                    case 1:
                        l = l.slice(0, -2) + "==";
                        break;
                    case 2:
                        l = l.slice(0, -1) + "="
                }
                return l
            }
            var el = function(e) {
                    var t, n, i, r, o = "";
                    for (t = n = 0, i = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, r = 0; r < i; r++) {
                        var s = e.charCodeAt(r),
                            a = null;
                        s < 128 ? n++ : a = s > 127 && s < 2048 ? String.fromCharCode(s >> 6 | 192, 63 & s | 128) : String.fromCharCode(s >> 12 | 224, s >> 6 & 63 | 128, 63 & s | 128), N(a) || (n > t && (o += e.substring(t, n)), o += a, t = n = r + 1)
                    }
                    return n > t && (o += e.substring(t, e.length)), o
                },
                ec = function() {
                    function e(t) {
                        return t && (t.preventDefault = e.preventDefault, t.stopPropagation = e.stopPropagation), t
                    }
                    return e.preventDefault = function() {
                            this.returnValue = !1
                        }, e.stopPropagation = function() {
                            this.cancelBubble = !0
                        },
                        function(t, n, i, r, o) {
                            if (t) {
                                if (t.addEventListener && !r) t.addEventListener(n, i, !!o);
                                else {
                                    var s = "on" + n,
                                        a = t[s];
                                    t[s] = function(n) {
                                        if (n = n || e(null == V ? void 0 : V.event)) {
                                            var r, o = !0;
                                            $(a) && (r = a(n));
                                            var s = i.call(t, n);
                                            return !1 !== r && !1 !== s || (o = !1), o
                                        }
                                    }
                                }
                            } else Q.error("No valid element provided to register_event")
                        }
                }();

            function ed(e, t) {
                var n = function() {
                    if (!W) return t("document not found");
                    var n = W.createElement("script");
                    n.type = "text/javascript", n.src = e, n.onload = function(e) {
                        return t(void 0, e)
                    }, n.onerror = function(e) {
                        return t(e)
                    };
                    var i, r = W.querySelectorAll("body > script");
                    r.length > 0 ? null === (i = r[0].parentNode) || void 0 === i || i.insertBefore(n, r[0]) : W.body.appendChild(n)
                };
                null != W && W.body ? n() : null == W || W.addEventListener("DOMContentLoaded", n)
            }

            function eh(e) {
                return e ? X(e).split(/\s+/) : []
            }

            function ef(e) {
                var t = "";
                switch (d(e.className)) {
                    case "string":
                        t = e.className;
                        break;
                    case "object":
                        t = ("baseVal" in e.className ? e.className.baseVal : null) || e.getAttribute("class") || "";
                        break;
                    default:
                        t = ""
                }
                return eh(t)
            }

            function ep(e) {
                var t = "";
                return eb(e) && !ek(e) && e.childNodes && e.childNodes.length && Z(e.childNodes, function(e) {
                    ev(e) && e.textContent && (t += X(e.textContent).split(/(\s+)/).filter(ew).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255))
                }), X(t)
            }

            function e_(e) {
                return !!e && 1 === e.nodeType
            }

            function eg(e, t) {
                return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase()
            }

            function ev(e) {
                return !!e && 3 === e.nodeType
            }

            function em(e) {
                return !!e && 11 === e.nodeType
            }
            var ey = ["a", "button", "form", "input", "select", "textarea", "label"];

            function eb(e) {
                for (var t = e; t.parentNode && !eg(t, "body"); t = t.parentNode) {
                    var n = ef(t);
                    if (et(n, "ph-sensitive") || et(n, "ph-no-capture")) return !1
                }
                if (et(ef(e), "ph-include")) return !0;
                var i = e.type || "";
                if (D(i)) switch (i.toLowerCase()) {
                    case "hidden":
                    case "password":
                        return !1
                }
                var r = e.name || e.id || "";
                return !(D(r) && /^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(r.replace(/[^a-zA-Z0-9]/g, "")))
            }

            function ek(e) {
                return !!(eg(e, "input") && !["button", "checkbox", "submit", "reset"].includes(e.type) || eg(e, "select") || eg(e, "textarea") || "true" === e.getAttribute("contenteditable"))
            }

            function ew(e) {
                return !(N(e) || M(e) || D(e) && (e = X(e), /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test((e || "").replace(/[- ]/g, "")) || /(^\d{3}-?\d{2}-?\d{4}$)/.test(e)))
            }

            function eS(e) {
                var t = ep(e);
                return ew(t = "".concat(t, " ").concat(function e(t) {
                    var n = "";
                    return t && t.childNodes && t.childNodes.length && Z(t.childNodes, function(t) {
                        var i;
                        if (t && "span" === (null === (i = t.tagName) || void 0 === i ? void 0 : i.toLowerCase())) try {
                            var r = ep(t);
                            n = "".concat(n, " ").concat(r).trim(), t.childNodes && t.childNodes.length && (n = "".concat(n, " ").concat(e(t)).trim())
                        } catch (e) {
                            Q.error(e)
                        }
                    }), n
                }(e)).trim()) ? t : ""
            }

            function eF(e) {
                return e.replace(/"|\\"/g, '\\"')
            }
            var eP = function() {
                    function e(t) {
                        h(this, e), this.clicks = [], this.enabled = t
                    }
                    return p(e, [{
                        key: "isRageClick",
                        value: function(e, t, n) {
                            if (!this.enabled) return !1;
                            var i = this.clicks[this.clicks.length - 1];
                            if (i && Math.abs(e - i.x) + Math.abs(t - i.y) < 30 && n - i.timestamp < 1e3) {
                                if (this.clicks.push({
                                        x: e,
                                        y: t,
                                        timestamp: n
                                    }), 3 === this.clicks.length) return !0
                            } else this.clicks = [{
                                x: e,
                                y: t,
                                timestamp: n
                            }];
                            return !1
                        }
                    }]), e
                }(),
                eI = "$people_distinct_id",
                ex = "__alias",
                eR = "__timers",
                eE = "$autocapture_disabled_server_side",
                eC = "$session_recording_enabled_server_side",
                eO = "$console_log_recording_enabled_server_side",
                e$ = "$session_recording_recorder_version_server_side",
                eT = "$session_recording_network_payload_capture",
                eA = "$sesid",
                eM = "$session_is_sampled",
                eD = "$enabled_feature_flags",
                eN = "$early_access_features",
                eq = "$stored_person_properties",
                eB = "$stored_group_properties",
                eL = "$surveys",
                ej = "$flag_call_reported",
                eH = "$user_state",
                eV = "$posthog_quota_limited",
                eU = "$client_session_props",
                eW = [eI, ex, "__cmpns", eR, eC, eA, eD, eH, eV, eN, eB, eq, eL, ej, eU];

            function eG(e, t) {
                return t.length > e ? t.slice(0, e) + "..." : t
            }
            var ez = {
                _initializedTokens: [],
                _isDisabledServerSide: null,
                _isAutocaptureEnabled: !1,
                _setIsAutocaptureEnabled: function(e) {
                    var t, n = N(this._isDisabledServerSide) ? !(null === (t = e.persistence) || void 0 === t || !t.props[eE]) : this._isDisabledServerSide,
                        i = !!e.config.autocapture;
                    this._isAutocaptureEnabled = i && !n
                },
                _previousElementSibling: function(e) {
                    if (e.previousElementSibling) return e.previousElementSibling;
                    var t = e;
                    do t = t.previousSibling; while (t && !e_(t));
                    return t
                },
                _getAugmentPropertiesFromElement: function(e) {
                    if (!eb(e)) return {};
                    var t = {};
                    return Z(e.attributes, function(e) {
                        if (0 === e.name.indexOf("data-ph-capture-attribute")) {
                            var n = e.name.replace("data-ph-capture-attribute-", ""),
                                i = e.value;
                            n && i && ew(i) && (t[n] = i)
                        }
                    }), t
                },
                _getPropertiesFromElement: function(e, t, n) {
                    var i, r = e.tagName.toLowerCase(),
                        o = {
                            tag_name: r
                        };
                    ey.indexOf(r) > -1 && !n && ("a" === r.toLowerCase() || "button" === r.toLowerCase() ? o.$el_text = eG(1024, eS(e)) : o.$el_text = eG(1024, ep(e)));
                    var s = ef(e);
                    s.length > 0 && (o.classes = s.filter(function(e) {
                        return "" !== e
                    }));
                    var a = null === (i = this.config) || void 0 === i ? void 0 : i.element_attribute_ignorelist;
                    Z(e.attributes, function(n) {
                        var i;
                        if ((!ek(e) || -1 !== ["name", "id", "class"].indexOf(n.name)) && (null == a || !a.includes(n.name)) && !t && ew(n.value) && (!D(i = n.name) || "_ngcontent" !== i.substring(0, 10) && "_nghost" !== i.substring(0, 7))) {
                            var r = n.value;
                            "class" === n.name && (r = eh(r).join(" ")), o["attr__" + n.name] = eG(1024, r)
                        }
                    });
                    for (var u = 1, l = 1, c = e; c = this._previousElementSibling(c);) u++, c.tagName === e.tagName && l++;
                    return o.nth_child = u, o.nth_of_type = l, o
                },
                _getDefaultProperties: function(e) {
                    return {
                        $event_type: e,
                        $ce_version: 1
                    }
                },
                _extractCustomPropertyValue: function(e) {
                    var t = [];
                    return Z(null == W ? void 0 : W.querySelectorAll(e.css_selector), function(e) {
                        var n;
                        ["input", "select"].indexOf(e.tagName.toLowerCase()) > -1 ? n = e.value : e.textContent && (n = e.textContent), ew(n) && t.push(n)
                    }), t.join(", ")
                },
                _getCustomProperties: function(e) {
                    var t = this,
                        n = {};
                    return Z(this._customProperties, function(i) {
                        Z(i.event_selectors, function(r) {
                            Z(null == W ? void 0 : W.querySelectorAll(r), function(r) {
                                et(e, r) && eb(r) && (n[i.name] = t._extractCustomPropertyValue(i))
                            })
                        })
                    }), n
                },
                _getEventTarget: function(e) {
                    var t;
                    return M(e.target) ? e.srcElement || null : null !== (t = e.target) && void 0 !== t && t.shadowRoot ? e.composedPath()[0] || null : e.target || null
                },
                _captureEvent: function(e, t) {
                    var n, i = this,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "$autocapture",
                        o = this._getEventTarget(e);
                    if (ev(o) && (o = o.parentNode || null), "$autocapture" === r && "click" === e.type && e instanceof MouseEvent && null !== (n = this.rageclicks) && void 0 !== n && n.isRageClick(e.clientX, e.clientY, (new Date).getTime()) && this._captureEvent(e, t, "$rageclick"), o && function(e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                            if (!V || !e || eg(e, "html") || !e_(e)) return !1;
                            if (null != n && n.url_allowlist) {
                                var i = V.location.href,
                                    r = n.url_allowlist;
                                if (r && !r.some(function(e) {
                                        return i.match(e)
                                    })) return !1
                            }
                            if (null != n && n.dom_event_allowlist) {
                                var o = n.dom_event_allowlist;
                                if (o && !o.some(function(e) {
                                        return t.type === e
                                    })) return !1
                            }
                            if (null != n && n.element_allowlist) {
                                var s = n.element_allowlist;
                                if (s && !s.some(function(t) {
                                        return e.tagName.toLowerCase() === t
                                    })) return !1
                            }
                            if (null != n && n.css_selector_allowlist) {
                                var a = n.css_selector_allowlist;
                                if (a && !a.some(function(t) {
                                        return e.matches(t)
                                    })) return !1
                            }
                            for (var u = !1, l = [e], c = !0, d = e; d.parentNode && !eg(d, "body");)
                                if (em(d.parentNode)) l.push(d.parentNode.host), d = d.parentNode.host;
                                else {
                                    if (!(c = d.parentNode || !1)) break;
                                    if (ey.indexOf(c.tagName.toLowerCase()) > -1) u = !0;
                                    else {
                                        var h = V.getComputedStyle(c);
                                        h && "pointer" === h.getPropertyValue("cursor") && (u = !0)
                                    }
                                    l.push(c), d = c
                                }
                            var f = V.getComputedStyle(e);
                            if (f && "pointer" === f.getPropertyValue("cursor") && "click" === t.type) return !0;
                            var p = e.tagName.toLowerCase();
                            switch (p) {
                                case "html":
                                    return !1;
                                case "form":
                                    return "submit" === t.type;
                                case "input":
                                case "select":
                                case "textarea":
                                    return "change" === t.type || "click" === t.type;
                                default:
                                    return u ? "click" === t.type : "click" === t.type && (ey.indexOf(p) > -1 || "true" === e.getAttribute("contenteditable"))
                            }
                        }(o, e, this.config)) {
                        for (var s, a, u = [o], l = o; l.parentNode && !eg(l, "body");) em(l.parentNode) ? (u.push(l.parentNode.host), l = l.parentNode.host) : (u.push(l.parentNode), l = l.parentNode);
                        var d, h = [],
                            f = {},
                            p = !1;
                        if (Z(u, function(e) {
                                var n = eb(e);
                                "a" === e.tagName.toLowerCase() && (d = e.getAttribute("href"), d = n && ew(d) && d), et(ef(e), "ph-no-capture") && (p = !0), h.push(i._getPropertiesFromElement(e, t.config.mask_all_element_attributes, t.config.mask_all_text)), ee(f, i._getAugmentPropertiesFromElement(e))
                            }), t.config.mask_all_text || ("a" === o.tagName.toLowerCase() || "button" === o.tagName.toLowerCase() ? h[0].$el_text = eS(o) : h[0].$el_text = ep(o)), d && (h[0].attr__href = d), p) return !1;
                        var _ = ee(this._getDefaultProperties(e.type), t.elementsChainAsString ? {
                            $elements_chain: h.map(function(e) {
                                var t, n, i, r = {
                                    text: null === (n = e.$el_text) || void 0 === n ? void 0 : n.slice(0, 400),
                                    tag_name: e.tag_name,
                                    href: null === (i = e.attr__href) || void 0 === i ? void 0 : i.slice(0, 2048),
                                    attr_class: (t = e.attr__class) ? C(t) ? t : eh(t) : void 0,
                                    attr_id: e.attr__id,
                                    nth_child: e.nth_child,
                                    nth_of_type: e.nth_of_type,
                                    attributes: {}
                                };
                                return en(e).filter(function(e) {
                                    return 0 === b(e, 1)[0].indexOf("attr__")
                                }).forEach(function(e) {
                                    var t = b(e, 2),
                                        n = t[0],
                                        i = t[1];
                                    return r.attributes[n] = i
                                }), r
                            }).map(function(e) {
                                var t, n, i = "";
                                if (e.tag_name && (i += e.tag_name), e.attr_class) {
                                    e.attr_class.sort();
                                    var r, o = F(e.attr_class);
                                    try {
                                        for (o.s(); !(r = o.n()).done;) {
                                            var s = r.value;
                                            i += ".".concat(s.replace(/"/g, ""))
                                        }
                                    } catch (e) {
                                        o.e(e)
                                    } finally {
                                        o.f()
                                    }
                                }
                                var a = c(c(c(c({}, e.text ? {
                                        text: e.text
                                    } : {}), {}, {
                                        "nth-child": null !== (t = e.nth_child) && void 0 !== t ? t : 0,
                                        "nth-of-type": null !== (n = e.nth_of_type) && void 0 !== n ? n : 0
                                    }, e.href ? {
                                        href: e.href
                                    } : {}), e.attr_id ? {
                                        attr_id: e.attr_id
                                    } : {}), e.attributes),
                                    u = {};
                                return en(a).sort(function(e, t) {
                                    var n = b(e, 1)[0],
                                        i = b(t, 1)[0];
                                    return n.localeCompare(i)
                                }).forEach(function(e) {
                                    var t = b(e, 2),
                                        n = t[0],
                                        i = t[1];
                                    return u[eF(n.toString())] = eF(i.toString())
                                }), i += ":" + en(a).map(function(e) {
                                    var t = b(e, 2),
                                        n = t[0],
                                        i = t[1];
                                    return "".concat(n, '="').concat(i, '"')
                                }).join("")
                            }).join(";")
                        } : {
                            $elements: h
                        }, null !== (s = h[0]) && void 0 !== s && s.$el_text ? {
                            $el_text: null === (a = h[0]) || void 0 === a ? void 0 : a.$el_text
                        } : {}, this._getCustomProperties(u), f);
                        return t.capture(r, _), !0
                    }
                },
                _navigate: function(e) {
                    V && (V.location.href = e)
                },
                _addDomEventHandlers: function(e) {
                    var t = this;
                    if (V && W) {
                        var n = function(n) {
                            n = n || (null == V ? void 0 : V.event), t._captureEvent(n, e)
                        };
                        ec(W, "submit", n, !1, !0), ec(W, "change", n, !1, !0), ec(W, "click", n, !1, !0)
                    }
                },
                _customProperties: [],
                rageclicks: null,
                config: void 0,
                init: function(e) {
                    var t;
                    B(e.__autocapture) || (this.config = e.__autocapture), null !== (t = this.config) && void 0 !== t && t.url_allowlist && (this.config.url_allowlist = this.config.url_allowlist.map(function(e) {
                        return RegExp(e)
                    })), this.rageclicks = new eP(e.config.rageclick)
                },
                afterDecideResponse: function(e, t) {
                    var n = t.config.token;
                    this._initializedTokens.indexOf(n) > -1 ? Q.info('autocapture already initialized for token "' + n + '"') : (t.persistence && t.persistence.register(_({}, eE, !!e.autocapture_opt_out)), this._isDisabledServerSide = !!e.autocapture_opt_out, this._setIsAutocaptureEnabled(t), this._initializedTokens.push(n), e && e.config && e.config.enable_collect_everything && this._isAutocaptureEnabled ? (e.custom_properties && (this._customProperties = e.custom_properties), this._addDomEventHandlers(t)) : t.__autocapture = !1)
                },
                enabledForProject: function(e, t, n) {
                    if (!e) return !0;
                    t = M(t) ? 10 : t, n = M(n) ? 10 : n;
                    for (var i = 0, r = 0; r < e.length; r++) i += e.charCodeAt(r);
                    return i % t < n
                },
                isBrowserSupported: function() {
                    return $(null == W ? void 0 : W.querySelectorAll)
                }
            };
            ! function(e) {
                for (var t in e) $(e[t]) && (e[t] = e[t].bind(e))
            }(ez),
            function(e) {
                for (var t in e) $(e[t]) && (e[t] = eo(e[t]))
            }(ez);
            var eY = "$active_feature_flags",
                eQ = "$override_feature_flags",
                eJ = "$feature_flag_payloads",
                eX = function(e) {
                    var t, n = {},
                        i = F(en(e || {}));
                    try {
                        for (i.s(); !(t = i.n()).done;) {
                            var r = b(t.value, 2),
                                o = r[0],
                                s = r[1];
                            s && (n[o] = s)
                        }
                    } catch (e) {
                        i.e(e)
                    } finally {
                        i.f()
                    }
                    return n
                },
                eK = function() {
                    function e(t) {
                        h(this, e), this.instance = t, this._override_warning = !1, this.featureFlagEventHandlers = [], this.reloadFeatureFlagsQueued = !1, this.reloadFeatureFlagsInAction = !1
                    }
                    return p(e, [{
                        key: "getFlags",
                        value: function() {
                            return Object.keys(this.getFlagVariants())
                        }
                    }, {
                        key: "getFlagVariants",
                        value: function() {
                            var e = this.instance.get_property(eD),
                                t = this.instance.get_property(eQ);
                            if (!t) return e || {};
                            for (var n = ee({}, e), i = Object.keys(t), r = 0; r < i.length; r++) !1 === t[i[r]] ? delete n[i[r]] : n[i[r]] = t[i[r]];
                            return this._override_warning || (Q.warn(" Overriding feature flags!", {
                                enabledFlags: e,
                                overriddenFlags: t,
                                finalFlags: n
                            }), this._override_warning = !0), n
                        }
                    }, {
                        key: "getFlagPayloads",
                        value: function() {
                            return this.instance.get_property(eJ) || {}
                        }
                    }, {
                        key: "reloadFeatureFlags",
                        value: function() {
                            this.reloadFeatureFlagsQueued || (this.reloadFeatureFlagsQueued = !0, this._startReloadTimer())
                        }
                    }, {
                        key: "setAnonymousDistinctId",
                        value: function(e) {
                            this.$anon_distinct_id = e
                        }
                    }, {
                        key: "setReloadingPaused",
                        value: function(e) {
                            this.reloadFeatureFlagsInAction = e
                        }
                    }, {
                        key: "resetRequestQueue",
                        value: function() {
                            this.reloadFeatureFlagsQueued = !1
                        }
                    }, {
                        key: "_startReloadTimer",
                        value: function() {
                            var e = this;
                            this.reloadFeatureFlagsQueued && !this.reloadFeatureFlagsInAction && setTimeout(function() {
                                !e.reloadFeatureFlagsInAction && e.reloadFeatureFlagsQueued && (e.reloadFeatureFlagsQueued = !1, e._reloadFeatureFlagsRequest())
                            }, 5)
                        }
                    }, {
                        key: "_reloadFeatureFlagsRequest",
                        value: function() {
                            var e = this;
                            if (!this.instance.config.advanced_disable_feature_flags) {
                                this.setReloadingPaused(!0);
                                var t = this.instance.config.token,
                                    n = this.instance.get_property(eq),
                                    i = this.instance.get_property(eB),
                                    r = eu(JSON.stringify({
                                        token: t,
                                        distinct_id: this.instance.get_distinct_id(),
                                        groups: this.instance.getGroups(),
                                        $anon_distinct_id: this.$anon_distinct_id,
                                        person_properties: n,
                                        group_properties: i,
                                        disable_flags: this.instance.config.advanced_disable_feature_flags || void 0
                                    }));
                                this.instance._send_request(this.instance.config.api_host + "/decide/?v=3", {
                                    data: r
                                }, {
                                    method: "POST"
                                }, this.instance._prepare_callback(function(t) {
                                    e.$anon_distinct_id = void 0, e.receivedFeatureFlags(t), e.setReloadingPaused(!1), e._startReloadTimer()
                                }))
                            }
                        }
                    }, {
                        key: "getFeatureFlag",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (this.instance.decideEndpointWasHit || this.getFlags() && this.getFlags().length > 0) {
                                var n, i = this.getFlagVariants()[e],
                                    r = "".concat(i),
                                    o = this.instance.get_property(ej) || {};
                                return !t.send_event && "send_event" in t || e in o && o[e].includes(r) || (C(o[e]) ? o[e].push(r) : o[e] = [r], null === (n = this.instance.persistence) || void 0 === n || n.register(_({}, ej, o)), this.instance.capture("$feature_flag_called", {
                                    $feature_flag: e,
                                    $feature_flag_response: i
                                })), i
                            }
                            Q.warn('getFeatureFlag for key "' + e + "\" failed. Feature flags didn't load in time.")
                        }
                    }, {
                        key: "getFeatureFlagPayload",
                        value: function(e) {
                            return this.getFlagPayloads()[e]
                        }
                    }, {
                        key: "isFeatureEnabled",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (this.instance.decideEndpointWasHit || this.getFlags() && this.getFlags().length > 0) return !!this.getFeatureFlag(e, t);
                            Q.warn('isFeatureEnabled for key "' + e + "\" failed. Feature flags didn't load in time.")
                        }
                    }, {
                        key: "addFeatureFlagsHandler",
                        value: function(e) {
                            this.featureFlagEventHandlers.push(e)
                        }
                    }, {
                        key: "removeFeatureFlagsHandler",
                        value: function(e) {
                            this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter(function(t) {
                                return t !== e
                            })
                        }
                    }, {
                        key: "receivedFeatureFlags",
                        value: function(e) {
                            if (this.instance.persistence) {
                                this.instance.decideEndpointWasHit = !0;
                                var t = this.getFlagVariants(),
                                    n = this.getFlagPayloads();
                                (function(e, t) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                        r = e.featureFlags,
                                        o = e.featureFlagPayloads;
                                    if (r) {
                                        if (C(r)) {
                                            var s, a = {};
                                            if (r)
                                                for (var u = 0; u < r.length; u++) a[r[u]] = !0;
                                            t && t.register((_(s = {}, eY, r), _(s, eD, a), s))
                                        } else {
                                            var l, d = r,
                                                h = o;
                                            e.errorsWhileComputingFlags && (d = c(c({}, n), d), h = c(c({}, i), h)), t && t.register((_(l = {}, eY, Object.keys(eX(d))), _(l, eD, d || {}), _(l, eJ, h || {}), l))
                                        }
                                    }
                                })(e, this.instance.persistence, t, n), this._fireFeatureFlagsCallbacks()
                            }
                        }
                    }, {
                        key: "override",
                        value: function(e) {
                            if (!this.instance.__loaded || !this.instance.persistence) return Q.uninitializedWarning("posthog.feature_flags.override");
                            if (this._override_warning = !1, !1 === e) this.instance.persistence.unregister(eQ);
                            else if (C(e)) {
                                for (var t = {}, n = 0; n < e.length; n++) t[e[n]] = !0;
                                this.instance.persistence.register(_({}, eQ, t))
                            } else this.instance.persistence.register(_({}, eQ, e))
                        }
                    }, {
                        key: "onFeatureFlags",
                        value: function(e) {
                            var t = this;
                            if (this.addFeatureFlagsHandler(e), this.instance.decideEndpointWasHit) {
                                var n = this._prepareFeatureFlagsForCallbacks();
                                e(n.flags, n.flagVariants)
                            }
                            return function() {
                                return t.removeFeatureFlagsHandler(e)
                            }
                        }
                    }, {
                        key: "updateEarlyAccessFeatureEnrollment",
                        value: function(e, t) {
                            var n, i, r = _({}, "$feature_enrollment/".concat(e), t);
                            this.instance.capture("$feature_enrollment_update", {
                                $feature_flag: e,
                                $feature_enrollment: t,
                                $set: r
                            }), this.setPersonPropertiesForFlags(r, !1);
                            var o = c(c({}, this.getFlagVariants()), {}, _({}, e, t));
                            null === (n = this.instance.persistence) || void 0 === n || n.register((_(i = {}, eY, Object.keys(eX(o))), _(i, eD, o), i)), this._fireFeatureFlagsCallbacks()
                        }
                    }, {
                        key: "getEarlyAccessFeatures",
                        value: function(e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                i = this.instance.get_property(eN);
                            if (i && !n) return e(i);
                            this.instance._send_request("".concat(this.instance.config.api_host, "/api/early_access_features/?token=").concat(this.instance.config.token), {}, {
                                method: "GET"
                            }, function(n) {
                                var i, r = n.earlyAccessFeatures;
                                return null === (i = t.instance.persistence) || void 0 === i || i.register(_({}, eN, r)), e(r)
                            })
                        }
                    }, {
                        key: "_prepareFeatureFlagsForCallbacks",
                        value: function() {
                            var e = this.getFlags(),
                                t = this.getFlagVariants();
                            return {
                                flags: e.filter(function(e) {
                                    return t[e]
                                }),
                                flagVariants: Object.keys(t).filter(function(e) {
                                    return t[e]
                                }).reduce(function(e, n) {
                                    return e[n] = t[n], e
                                }, {})
                            }
                        }
                    }, {
                        key: "_fireFeatureFlagsCallbacks",
                        value: function() {
                            var e = this._prepareFeatureFlagsForCallbacks(),
                                t = e.flags,
                                n = e.flagVariants;
                            this.featureFlagEventHandlers.forEach(function(e) {
                                return e(t, n)
                            })
                        }
                    }, {
                        key: "setPersonPropertiesForFlags",
                        value: function(e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                n = this.instance.get_property(eq) || {};
                            this.instance.register(_({}, eq, c(c({}, n), e))), t && this.instance.reloadFeatureFlags()
                        }
                    }, {
                        key: "resetPersonPropertiesForFlags",
                        value: function() {
                            this.instance.unregister(eq)
                        }
                    }, {
                        key: "setGroupPropertiesForFlags",
                        value: function(e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                n = this.instance.get_property(eB) || {};
                            0 !== Object.keys(n).length && Object.keys(n).forEach(function(t) {
                                n[t] = c(c({}, n[t]), e[t]), delete e[t]
                            }), this.instance.register(_({}, eB, c(c({}, n), e))), t && this.instance.reloadFeatureFlags()
                        }
                    }, {
                        key: "resetGroupPropertiesForFlags",
                        value: function(e) {
                            if (e) {
                                var t = this.instance.get_property(eB) || {};
                                this.instance.register(_({}, eB, c(c({}, t), {}, _({}, e, {}))))
                            } else this.instance.unregister(eB)
                        }
                    }]), e
                }();
            Math.trunc || (Math.trunc = function(e) {
                return e < 0 ? Math.ceil(e) : Math.floor(e)
            }), Number.isInteger || (Number.isInteger = function(e) {
                return q(e) && isFinite(e) && Math.floor(e) === e
            });
            var eZ = "0123456789abcdef",
                e0 = function() {
                    function e(t) {
                        if (h(this, e), this.bytes = t, 16 !== t.length) throw TypeError("not 128-bit length")
                    }
                    return p(e, [{
                        key: "toString",
                        value: function() {
                            for (var e = "", t = 0; t < this.bytes.length; t++) e = e + eZ.charAt(this.bytes[t] >>> 4) + eZ.charAt(15 & this.bytes[t]), 3 !== t && 5 !== t && 7 !== t && 9 !== t || (e += "-");
                            if (36 !== e.length) throw Error("Invalid UUIDv7 was generated");
                            return e
                        }
                    }, {
                        key: "clone",
                        value: function() {
                            return new e(this.bytes.slice(0))
                        }
                    }, {
                        key: "equals",
                        value: function(e) {
                            return 0 === this.compareTo(e)
                        }
                    }, {
                        key: "compareTo",
                        value: function(e) {
                            for (var t = 0; t < 16; t++) {
                                var n = this.bytes[t] - e.bytes[t];
                                if (0 !== n) return Math.sign(n)
                            }
                            return 0
                        }
                    }], [{
                        key: "fromFieldsV7",
                        value: function(t, n, i, r) {
                            if (!Number.isInteger(t) || !Number.isInteger(n) || !Number.isInteger(i) || !Number.isInteger(r) || t < 0 || n < 0 || i < 0 || r < 0 || t > 0xffffffffffff || n > 4095 || i > 1073741823 || r > 4294967295) throw RangeError("invalid field value");
                            var o = new Uint8Array(16);
                            return o[0] = t / 1099511627776, o[1] = t / 4294967296, o[2] = t / 16777216, o[3] = t / 65536, o[4] = t / 256, o[5] = t, o[6] = 112 | n >>> 8, o[7] = n, o[8] = 128 | i >>> 24, o[9] = i >>> 16, o[10] = i >>> 8, o[11] = i, o[12] = r >>> 24, o[13] = r >>> 16, o[14] = r >>> 8, o[15] = r, new e(o)
                        }
                    }]), e
                }(),
                e1 = function() {
                    function e() {
                        h(this, e), _(this, "timestamp", 0), _(this, "counter", 0), _(this, "random", new e5)
                    }
                    return p(e, [{
                        key: "generate",
                        value: function() {
                            var e = this.generateOrAbort();
                            if (M(e)) {
                                this.timestamp = 0;
                                var t = this.generateOrAbort();
                                if (M(t)) throw Error("Could not generate UUID after timestamp reset");
                                return t
                            }
                            return e
                        }
                    }, {
                        key: "generateOrAbort",
                        value: function() {
                            var e = Date.now();
                            if (e > this.timestamp) this.timestamp = e, this.resetCounter();
                            else {
                                if (!(e + 1e4 > this.timestamp)) return;
                                this.counter++, this.counter > 4398046511103 && (this.timestamp++, this.resetCounter())
                            }
                            return e0.fromFieldsV7(this.timestamp, Math.trunc(this.counter / 1073741824), 1073741823 & this.counter, this.random.nextUint32())
                        }
                    }, {
                        key: "resetCounter",
                        value: function() {
                            this.counter = 1024 * this.random.nextUint32() + (1023 & this.random.nextUint32())
                        }
                    }]), e
                }(),
                e2 = function(e) {
                    if ("undefined" != typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw Error("no cryptographically strong RNG available");
                    for (var t = 0; t < e.length; t++) e[t] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
                    return e
                };
            V && !M(V.crypto) && crypto.getRandomValues && (e2 = function(e) {
                return crypto.getRandomValues(e)
            });
            var e3, e5 = function() {
                    function e() {
                        h(this, e), _(this, "buffer", new Uint32Array(8)), _(this, "cursor", 1 / 0)
                    }
                    return p(e, [{
                        key: "nextUint32",
                        value: function() {
                            return this.cursor >= this.buffer.length && (e2(this.buffer), this.cursor = 0), this.buffer[this.cursor++]
                        }
                    }]), e
                }(),
                e8 = function() {
                    return e6().toString()
                },
                e6 = function() {
                    return (e3 || (e3 = new e1)).generate()
                },
                e4 = "",
                e7 = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i,
                e9 = function(e) {
                    var t = e.match(e7);
                    return t ? t[0] : ""
                },
                te = {
                    is_supported: function() {
                        return !!W
                    },
                    error: function(e) {
                        Q.error("cookieStore error: " + e)
                    },
                    get: function(e) {
                        if (W) {
                            try {
                                for (var t = e + "=", n = W.cookie.split(";").filter(function(e) {
                                        return e.length
                                    }), i = 0; i < n.length; i++) {
                                    for (var r = n[i];
                                        " " == r.charAt(0);) r = r.substring(1, r.length);
                                    if (0 === r.indexOf(t)) return decodeURIComponent(r.substring(t.length, r.length))
                                }
                            } catch (e) {}
                            return null
                        }
                    },
                    parse: function(e) {
                        var t;
                        try {
                            t = JSON.parse(te.get(e)) || {}
                        } catch (e) {}
                        return t
                    },
                    set: function(e, t, n, i, r) {
                        if (W) try {
                            var o = "",
                                s = "",
                                a = function(e, t) {
                                    if (t) {
                                        var n = function(e) {
                                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : W;
                                            if (e4) return e4;
                                            if (!t || ["localhost", "127.0.0.1"].includes(e)) return "";
                                            for (var n = e.split("."), i = Math.min(n.length, 8), r = "dmn_chk_" + e8(), o = RegExp("(^|;)\\s*" + r + "=1"); !e4 && i--;) {
                                                var s = n.slice(i).join("."),
                                                    a = r + "=1;domain=." + s;
                                                t.cookie = a, o.test(t.cookie) && (t.cookie = a + ";expires=Thu, 01 Jan 1970 00:00:00 GMT", e4 = s)
                                            }
                                            return e4
                                        }(e);
                                        if (!n) {
                                            var i = e9(e);
                                            i !== n && Q.info("Warning: cookie subdomain discovery mismatch", i, n), n = i
                                        }
                                        return n ? "; domain=." + n : ""
                                    }
                                    return ""
                                }(W.location.hostname, i);
                            if (n) {
                                var u = new Date;
                                u.setTime(u.getTime() + 24 * n * 36e5), o = "; expires=" + u.toUTCString()
                            }
                            r && (s = "; secure");
                            var l = e + "=" + encodeURIComponent(JSON.stringify(t)) + o + "; SameSite=Lax; path=/" + a + s;
                            return l.length > 3686.4 && Q.warn("cookieStore warning: large cookie, len=" + l.length), W.cookie = l, l
                        } catch (e) {
                            return
                        }
                    },
                    remove: function(e, t) {
                        try {
                            te.set(e, "", -1, t)
                        } catch (e) {
                            return
                        }
                    }
                },
                tt = null,
                tn = {
                    is_supported: function() {
                        if (!N(tt)) return tt;
                        var e = !0;
                        if (M(V)) e = !1;
                        else try {
                            var t = "__mplssupport__";
                            tn.set(t, "xyz"), '"xyz"' !== tn.get(t) && (e = !1), tn.remove(t)
                        } catch (t) {
                            e = !1
                        }
                        return e || Q.error("localStorage unsupported; falling back to cookie store"), tt = e, e
                    },
                    error: function(e) {
                        Q.error("localStorage error: " + e)
                    },
                    get: function(e) {
                        try {
                            return null == V ? void 0 : V.localStorage.getItem(e)
                        } catch (e) {
                            tn.error(e)
                        }
                        return null
                    },
                    parse: function(e) {
                        try {
                            return JSON.parse(tn.get(e)) || {}
                        } catch (e) {}
                        return null
                    },
                    set: function(e, t) {
                        try {
                            null == V || V.localStorage.setItem(e, JSON.stringify(t))
                        } catch (e) {
                            tn.error(e)
                        }
                    },
                    remove: function(e) {
                        try {
                            null == V || V.localStorage.removeItem(e)
                        } catch (e) {
                            tn.error(e)
                        }
                    }
                },
                ti = ["distinct_id", eA, eM],
                tr = c(c({}, tn), {}, {
                    parse: function(e) {
                        try {
                            var t = {};
                            try {
                                t = te.parse(e) || {}
                            } catch (e) {}
                            var n = ee(t, JSON.parse(tn.get(e) || "{}"));
                            return tn.set(e, n), n
                        } catch (e) {}
                        return null
                    },
                    set: function(e, t, n, i, r) {
                        try {
                            tn.set(e, t);
                            var o = {};
                            ti.forEach(function(e) {
                                t[e] && (o[e] = t[e])
                            }), Object.keys(o).length && te.set(e, o, n, i, r)
                        } catch (e) {
                            tn.error(e)
                        }
                    },
                    remove: function(e, t) {
                        try {
                            null == V || V.localStorage.removeItem(e), te.remove(e, t)
                        } catch (e) {
                            tn.error(e)
                        }
                    }
                }),
                to = {},
                ts = {
                    is_supported: function() {
                        return !0
                    },
                    error: function(e) {
                        Q.error("memoryStorage error: " + e)
                    },
                    get: function(e) {
                        return to[e] || null
                    },
                    parse: function(e) {
                        return to[e] || null
                    },
                    set: function(e, t) {
                        to[e] = t
                    },
                    remove: function(e) {
                        delete to[e]
                    }
                },
                ta = null,
                tu = {
                    is_supported: function() {
                        if (!N(ta)) return ta;
                        if (ta = !0, M(V)) ta = !1;
                        else try {
                            var e = "__support__";
                            tu.set(e, "xyz"), '"xyz"' !== tu.get(e) && (ta = !1), tu.remove(e)
                        } catch (e) {
                            ta = !1
                        }
                        return ta
                    },
                    error: function(e) {
                        Q.error("sessionStorage error: ", e)
                    },
                    get: function(e) {
                        try {
                            return null == V ? void 0 : V.sessionStorage.getItem(e)
                        } catch (e) {
                            tu.error(e)
                        }
                        return null
                    },
                    parse: function(e) {
                        try {
                            return JSON.parse(tu.get(e)) || null
                        } catch (e) {}
                        return null
                    },
                    set: function(e, t) {
                        try {
                            null == V || V.sessionStorage.setItem(e, JSON.stringify(t))
                        } catch (e) {
                            tu.error(e)
                        }
                    },
                    remove: function(e) {
                        try {
                            null == V || V.sessionStorage.removeItem(e)
                        } catch (e) {
                            tu.error(e)
                        }
                    }
                },
                tl = ["localhost", "127.0.0.1"],
                tc = function(e) {
                    var t = null == W ? void 0 : W.createElement("a");
                    return M(t) ? null : (t.href = e, t)
                },
                td = function(e, t) {
                    for (var n, i = ((e.split("#")[0] || "").split("?")[1] || "").split("&"), r = 0; r < i.length; r++) {
                        var o = i[r].split("=");
                        if (o[0] === t) {
                            n = o;
                            break
                        }
                    }
                    if (!C(n) || n.length < 2) return "";
                    var s = n[1];
                    try {
                        s = decodeURIComponent(s)
                    } catch (e) {
                        Q.error("Skipping decoding for malformed query param: " + s)
                    }
                    return s.replace(/\+/g, " ")
                },
                th = function(e, t) {
                    var n = e.match(RegExp(t + "=([^&]*)"));
                    return n ? n[1] : null
                },
                tf = {
                    campaignParams: function(e) {
                        var t = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "gad_source", "gbraid", "wbraid", "fbclid", "msclkid"].concat(e || []),
                            n = {};
                        return Z(t, function(e) {
                            var t = W ? td(W.URL, e) : "";
                            t.length && (n[e] = t)
                        }), n
                    },
                    searchEngine: function() {
                        var e = null == W ? void 0 : W.referrer;
                        return e ? 0 === e.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === e.search("https?://(.*)bing.com") ? "bing" : 0 === e.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === e.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null : null
                    },
                    searchInfo: function() {
                        var e = tf.searchEngine(),
                            t = {};
                        if (!N(e)) {
                            t.$search_engine = e;
                            var n = W ? td(W.referrer, "yahoo" != e ? "q" : "p") : "";
                            n.length && (t.ph_keyword = n)
                        }
                        return t
                    },
                    browser: function(e, t, n) {
                        return t = t || "", n || et(e, " OPR/") ? et(e, "Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : et(e, "IEMobile") || et(e, "WPDesktop") ? "Internet Explorer Mobile" : et(e, "SamsungBrowser/") ? "Samsung Internet" : et(e, "Edge") || et(e, "Edg/") ? "Microsoft Edge" : et(e, "FBIOS") ? "Facebook Mobile" : et(e, "Chrome") ? "Chrome" : et(e, "CriOS") ? "Chrome iOS" : et(e, "UCWEB") || et(e, "UCBrowser") ? "UC Browser" : et(e, "FxiOS") ? "Firefox iOS" : et(t, "Apple") || et(e, "Safari") && !et(e, "Chrome") && !et(e, "Android") ? et(e, "Mobile") ? "Mobile Safari" : "Safari" : et(e, "Android") ? "Android Mobile" : et(e, "Konqueror") || et(e, "konqueror") ? "Konqueror" : et(e, "Firefox") ? "Firefox" : et(e, "MSIE") || et(e, "Trident/") ? "Internet Explorer" : et(e, "Gecko") ? "Mozilla" : ""
                    },
                    browserVersion: function(e, t, n) {
                        var i = {
                            "Internet Explorer Mobile": [/rv:(\d+(\.\d+)?)/],
                            "Microsoft Edge": [/Edge?\/(\d+(\.\d+)?)/],
                            Chrome: [/Chrome\/(\d+(\.\d+)?)/],
                            "Chrome iOS": [/CriOS\/(\d+(\.\d+)?)/],
                            "UC Browser": [/(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/],
                            Safari: [/Version\/(\d+(\.\d+)?)/],
                            "Mobile Safari": [/Version\/(\d+(\.\d+)?)/],
                            Opera: [/(Opera|OPR)\/(\d+(\.\d+)?)/],
                            Firefox: [/Firefox\/(\d+(\.\d+)?)/],
                            "Firefox iOS": [/FxiOS\/(\d+(\.\d+)?)/],
                            Konqueror: [/Konqueror[:/]?(\d+(\.\d+)?)/i],
                            BlackBerry: [/BlackBerry (\d+(\.\d+)?)/, /Version\/(\d+(\.\d+)?)/],
                            "Android Mobile": [/android\s(\d+(\.\d+)?)/],
                            "Samsung Internet": [/SamsungBrowser\/(\d+(\.\d+)?)/],
                            "Internet Explorer": [/(rv:|MSIE )(\d+(\.\d+)?)/],
                            Mozilla: [/rv:(\d+(\.\d+)?)/]
                        }[tf.browser(e, t, n)];
                        if (M(i)) return null;
                        for (var r = 0; r < i.length; r++) {
                            var o = i[r],
                                s = e.match(o);
                            if (s) return parseFloat(s[s.length - 2])
                        }
                        return null
                    },
                    browserLanguage: function() {
                        return navigator.language || navigator.userLanguage
                    },
                    os: function(e) {
                        if (/Windows/i.test(e)) {
                            if (/Phone/.test(e) || /WPDesktop/.test(e)) return {
                                os_name: "Windows Phone",
                                os_version: ""
                            };
                            var t = /Windows NT ([0-9.]+)/i.exec(e);
                            return t && t[1] ? {
                                os_name: "Windows",
                                os_version: t[1]
                            } : {
                                os_name: "Windows",
                                os_version: ""
                            }
                        }
                        if (/(iPhone|iPad|iPod)/.test(e)) {
                            var n = /OS (\d+)_(\d+)_?(\d+)?/i.exec(e);
                            return n && n[1] ? {
                                os_name: "iOS",
                                os_version: [n[1], n[2], n[3] || "0"].join(".")
                            } : {
                                os_name: "iOS",
                                os_version: ""
                            }
                        }
                        if (/Android/.test(e)) {
                            var i = /Android (\d+)\.(\d+)\.?(\d+)?/i.exec(e);
                            return i && i[1] ? {
                                os_name: "Android",
                                os_version: [i[1], i[2], i[3] || "0"].join(".")
                            } : {
                                os_name: "Android",
                                os_version: ""
                            }
                        }
                        if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return {
                            os_name: "BlackBerry",
                            os_version: ""
                        };
                        if (/Mac/i.test(e)) {
                            var r = /Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i.exec(e);
                            return r && r[1] ? {
                                os_name: "Mac OS X",
                                os_version: [r[1], r[2], r[3] || "0"].join(".")
                            } : {
                                os_name: "Mac OS X",
                                os_version: ""
                            }
                        }
                        return /Linux/.test(e) ? {
                            os_name: "Linux",
                            os_version: ""
                        } : /CrOS/.test(e) ? {
                            os_name: "Chrome OS",
                            os_version: ""
                        } : {
                            os_name: "",
                            os_version: ""
                        }
                    },
                    device: function(e) {
                        return /Windows Phone/i.test(e) || /WPDesktop/.test(e) ? "Windows Phone" : /iPad/.test(e) ? "iPad" : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Android/.test(e) && !/Mobile/.test(e) ? "Android Tablet" : /Android/.test(e) ? "Android" : ""
                    },
                    deviceType: function(e) {
                        var t = this.device(e);
                        return "iPad" === t || "Android Tablet" === t ? "Tablet" : t ? "Mobile" : "Desktop"
                    },
                    referrer: function() {
                        return (null == W ? void 0 : W.referrer) || "$direct"
                    },
                    referringDomain: function() {
                        var e;
                        return null != W && W.referrer && (null === (e = tc(W.referrer)) || void 0 === e ? void 0 : e.host) || "$direct"
                    },
                    properties: function() {
                        if (!G) return {};
                        var e = tf.os(G);
                        return ee(es({
                            $os: e.os_name,
                            $os_version: e.os_version,
                            $browser: tf.browser(G, navigator.vendor, z.opera),
                            $device: tf.device(G),
                            $device_type: tf.deviceType(G)
                        }), {
                            $current_url: null == V ? void 0 : V.location.href,
                            $host: null == V ? void 0 : V.location.host,
                            $pathname: null == V ? void 0 : V.location.pathname,
                            $raw_user_agent: G.length > 1e3 ? G.substring(0, 997) + "..." : G,
                            $browser_version: tf.browserVersion(G, navigator.vendor, z.opera),
                            $browser_language: tf.browserLanguage(),
                            $screen_height: null == V ? void 0 : V.screen.height,
                            $screen_width: null == V ? void 0 : V.screen.width,
                            $viewport_height: null == V ? void 0 : V.innerHeight,
                            $viewport_width: null == V ? void 0 : V.innerWidth,
                            $lib: "web",
                            $lib_version: P.LIB_VERSION,
                            $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
                            $time: ei() / 1e3
                        })
                    },
                    people_properties: function() {
                        if (!G) return {};
                        var e = tf.os(G);
                        return ee(es({
                            $os: e.os_name,
                            $os_version: e.os_version,
                            $browser: tf.browser(G, navigator.vendor, z.opera)
                        }), {
                            $browser_version: tf.browserVersion(G, navigator.vendor, z.opera)
                        })
                    }
                },
                tp = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"],
                t_ = function() {
                    function e(t) {
                        h(this, e);
                        var n = "";
                        t.token && (n = t.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), this.props = {}, this.campaign_params_saved = !1, this.custom_campaign_params = t.custom_campaign_params || [], t.persistence_name ? this.name = "ph_" + t.persistence_name : this.name = "ph_" + n + "_posthog", -1 === tp.indexOf(t.persistence.toLowerCase()) && (Q.critical("Unknown persistence type " + t.persistence + "; falling back to localStorage+cookie"), t.persistence = "localStorage+cookie");
                        var i = t.persistence.toLowerCase();
                        "localstorage" === i && tn.is_supported() ? this.storage = tn : "localstorage+cookie" === i && tr.is_supported() ? this.storage = tr : "sessionstorage" === i && tu.is_supported() ? this.storage = tu : "memory" === i ? this.storage = ts : "cookie" === i ? this.storage = te : tr.is_supported() ? this.storage = tr : this.storage = te, this.load(), this.update_config(t), this.save()
                    }
                    return p(e, [{
                        key: "properties",
                        value: function() {
                            var e = {};
                            return Z(this.props, function(t, n) {
                                if (n === eD && T(t))
                                    for (var i, r = Object.keys(t), o = 0; o < r.length; o++) e["$feature/".concat(r[o])] = t[r[o]];
                                else i = !1, (N(eW) ? i : H && eW.indexOf === H ? -1 != eW.indexOf(n) : (Z(eW, function(e) {
                                    if (i || (i = e === n)) return J
                                }), i)) || (e[n] = t)
                            }), e
                        }
                    }, {
                        key: "load",
                        value: function() {
                            if (!this.disabled) {
                                var e = this.storage.parse(this.name);
                                e && (this.props = ee({}, e))
                            }
                        }
                    }, {
                        key: "save",
                        value: function() {
                            this.disabled || this.storage.set(this.name, this.props, this.expire_days, this.cross_subdomain, this.secure)
                        }
                    }, {
                        key: "remove",
                        value: function() {
                            this.storage.remove(this.name, !1), this.storage.remove(this.name, !0)
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            this.remove(), this.props = {}
                        }
                    }, {
                        key: "register_once",
                        value: function(e, t, n) {
                            var i = this;
                            if (T(e)) {
                                M(t) && (t = "None"), this.expire_days = M(n) ? this.default_expiry : n;
                                var r = !1;
                                if (Z(e, function(e, n) {
                                        i.props.hasOwnProperty(n) && i.props[n] !== t || (i.props[n] = e, r = !0)
                                    }), r) return this.save(), !0
                            }
                            return !1
                        }
                    }, {
                        key: "register",
                        value: function(e, t) {
                            var n = this;
                            if (T(e)) {
                                this.expire_days = M(t) ? this.default_expiry : t;
                                var i = !1;
                                if (Z(e, function(t, r) {
                                        e.hasOwnProperty(r) && n.props[r] !== t && (n.props[r] = t, i = !0)
                                    }), i) return this.save(), !0
                            }
                            return !1
                        }
                    }, {
                        key: "unregister",
                        value: function(e) {
                            e in this.props && (delete this.props[e], this.save())
                        }
                    }, {
                        key: "update_campaign_params",
                        value: function() {
                            this.campaign_params_saved || (this.register(tf.campaignParams(this.custom_campaign_params)), this.campaign_params_saved = !0)
                        }
                    }, {
                        key: "update_search_keyword",
                        value: function() {
                            this.register(tf.searchInfo())
                        }
                    }, {
                        key: "update_referrer_info",
                        value: function() {
                            this.register({
                                $referrer: this.props.$referrer || tf.referrer(),
                                $referring_domain: this.props.$referring_domain || tf.referringDomain()
                            })
                        }
                    }, {
                        key: "get_referrer_info",
                        value: function() {
                            return es({
                                $referrer: this.props.$referrer,
                                $referring_domain: this.props.$referring_domain
                            })
                        }
                    }, {
                        key: "safe_merge",
                        value: function(e) {
                            return Z(this.props, function(t, n) {
                                n in e || (e[n] = t)
                            }), e
                        }
                    }, {
                        key: "update_config",
                        value: function(e) {
                            this.default_expiry = this.expire_days = e.cookie_expiration, this.set_disabled(e.disable_persistence), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie)
                        }
                    }, {
                        key: "set_disabled",
                        value: function(e) {
                            this.disabled = e, this.disabled ? this.remove() : this.save()
                        }
                    }, {
                        key: "set_cross_subdomain",
                        value: function(e) {
                            e !== this.cross_subdomain && (this.cross_subdomain = e, this.remove(), this.save())
                        }
                    }, {
                        key: "get_cross_subdomain",
                        value: function() {
                            return !!this.cross_subdomain
                        }
                    }, {
                        key: "set_secure",
                        value: function(e) {
                            e !== this.secure && (this.secure = e, this.remove(), this.save())
                        }
                    }, {
                        key: "set_event_timer",
                        value: function(e, t) {
                            var n = this.props[eR] || {};
                            n[e] = t, this.props[eR] = n, this.save()
                        }
                    }, {
                        key: "remove_event_timer",
                        value: function(e) {
                            var t = (this.props[eR] || {})[e];
                            return M(t) || (delete this.props[eR][e], this.save()), t
                        }
                    }, {
                        key: "get_user_state",
                        value: function() {
                            return this.props[eH] || "anonymous"
                        }
                    }, {
                        key: "set_user_state",
                        value: function(e) {
                            this.props[eH] = e, this.save()
                        }
                    }, {
                        key: "get_quota_limits",
                        value: function() {
                            return this.props[eV] || {}
                        }
                    }, {
                        key: "set_quota_limits",
                        value: function(e) {
                            this.props[eV] = e, this.save()
                        }
                    }]), e
                }(),
                tg = p(function e(t) {
                    var n, i, r = this,
                        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    h(this, e), _(this, "bucketSize", 100), _(this, "refillRate", 10), _(this, "mutationBuckets", {}), _(this, "loggedTracker", {}), _(this, "refillBuckets", function() {
                        Object.keys(r.mutationBuckets).forEach(function(e) {
                            r.mutationBuckets[e] = r.mutationBuckets[e] + r.refillRate, r.mutationBuckets[e] >= r.bucketSize && delete r.mutationBuckets[e]
                        })
                    }), _(this, "getNodeOrRelevantParent", function(e) {
                        var t = r.rrweb.mirror.getNode(e);
                        if ("svg" !== (null == t ? void 0 : t.nodeName) && t instanceof Element) {
                            var n = t.closest("svg");
                            if (n) return [r.rrweb.mirror.getId(n), n]
                        }
                        return [e, t]
                    }), _(this, "numberOfChanges", function(e) {
                        var t, n, i, r, o, s, a, u;
                        return (null !== (t = null === (n = e.removes) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0) + (null !== (i = null === (r = e.attributes) || void 0 === r ? void 0 : r.length) && void 0 !== i ? i : 0) + (null !== (o = null === (s = e.texts) || void 0 === s ? void 0 : s.length) && void 0 !== o ? o : 0) + (null !== (a = null === (u = e.adds) || void 0 === u ? void 0 : u.length) && void 0 !== a ? a : 0)
                    }), _(this, "throttleMutations", function(e) {
                        if (3 !== e.type || 0 !== e.data.source) return e;
                        var t = e.data,
                            n = r.numberOfChanges(t);
                        t.attributes && (t.attributes = t.attributes.filter(function(e) {
                            var t, n, i, o = b(r.getNodeOrRelevantParent(e.id), 2),
                                s = o[0],
                                a = o[1];
                            return 0 !== r.mutationBuckets[s] && (r.mutationBuckets[s] = null !== (t = r.mutationBuckets[s]) && void 0 !== t ? t : r.bucketSize, r.mutationBuckets[s] = Math.max(r.mutationBuckets[s] - 1, 0), 0 === r.mutationBuckets[s] && (r.loggedTracker[s] || (r.loggedTracker[s] = !0, null === (n = (i = r.options).onBlockedNode) || void 0 === n || n.call(i, s, a))), e)
                        }));
                        var i = r.numberOfChanges(t);
                        return 0 !== i || n === i ? e : void 0
                    }), this.rrweb = t, this.options = o, this.refillRate = null !== (n = this.options.refillRate) && void 0 !== n ? n : this.refillRate, this.bucketSize = null !== (i = this.options.bucketSize) && void 0 !== i ? i : this.bucketSize, setInterval(function() {
                        r.refillBuckets()
                    }, 1e3)
                }),
                tv = ((tw = tv || {})[tw.DomContentLoaded = 0] = "DomContentLoaded", tw[tw.Load = 1] = "Load", tw[tw.FullSnapshot = 2] = "FullSnapshot", tw[tw.IncrementalSnapshot = 3] = "IncrementalSnapshot", tw[tw.Meta = 4] = "Meta", tw[tw.Custom = 5] = "Custom", tw[tw.Plugin = 6] = "Plugin", tw),
                tm = {
                    initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"],
                    maskRequestFn: function(e) {
                        return e
                    },
                    recordHeaders: !1,
                    recordBody: !1,
                    recordInitialRequests: !1,
                    recordPerformance: !1,
                    performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"],
                    payloadSizeLimitBytes: 1e6
                },
                ty = ["authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token"],
                tb = ["/s/", "/e/", "/i/vo/e/"];

            function tk(e, t, n, i) {
                var r = null == t ? void 0 : t["content-length"];
                return r && parseInt(r) > n ? "".concat(i, " body too large to record") : e
            }
            var tw, tS, tF = function(e, t) {
                var n, i, r = e.session_recording,
                    o = !1 !== r.recordHeaders && t.recordHeaders,
                    s = !1 !== r.recordBody && t.recordBody,
                    a = !1 !== r.recordPerformance && t.recordPerformance,
                    u = (i = Math.min(1e6, null !== (n = r.payloadSizeLimitBytes) && void 0 !== n ? n : 1e6), function(e) {
                        return null != e && e.requestBody && (e.requestBody = tk(e.requestBody, e.requestHeaders, i, "Request")), null != e && e.responseBody && (e.responseBody = tk(e.responseBody, e.responseHeaders, i, "Response")), e
                    }),
                    l = function(e) {
                        var t;
                        return u(function(e) {
                            var t = tc(e.name);
                            if (!(t && t.pathname && tb.includes(t.pathname))) return e
                        }((Object.keys(null !== (t = e.requestHeaders) && void 0 !== t ? t : {}).forEach(function(t) {
                            var n;
                            ty.includes(t.toLowerCase()) && (null === (n = e.requestHeaders) || void 0 === n || delete n[t])
                        }), e)))
                    },
                    d = $(e.session_recording.maskNetworkRequestFn);
                return d && $(e.session_recording.maskCapturedNetworkRequestFn) && Q.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."), d && (e.session_recording.maskCapturedNetworkRequestFn = function(t) {
                    var n = e.session_recording.maskNetworkRequestFn({
                        url: t.name
                    });
                    return c(c({}, t), {}, {
                        name: null == n ? void 0 : n.url
                    })
                }), r.maskRequestFn = $(e.session_recording.maskCapturedNetworkRequestFn) ? function(t) {
                    var n, i, r, o = l(t);
                    return o && null !== (n = null === (i = (r = e.session_recording).maskCapturedNetworkRequestFn) || void 0 === i ? void 0 : i.call(r, o)) && void 0 !== n ? n : void 0
                } : void 0, r.maskRequestFn || (r.maskRequestFn = l), c(c(c({}, tm), r), {}, {
                    recordHeaders: o,
                    recordBody: s,
                    recordPerformance: a,
                    recordInitialRequests: a
                })
            };
            (t6 = tS || (tS = {}))[t6.Mutation = 0] = "Mutation", t6[t6.MouseMove = 1] = "MouseMove", t6[t6.MouseInteraction = 2] = "MouseInteraction", t6[t6.Scroll = 3] = "Scroll", t6[t6.ViewportResize = 4] = "ViewportResize", t6[t6.Input = 5] = "Input", t6[t6.TouchMove = 6] = "TouchMove", t6[t6.MediaInteraction = 7] = "MediaInteraction", t6[t6.StyleSheetRule = 8] = "StyleSheetRule", t6[t6.CanvasMutation = 9] = "CanvasMutation", t6[t6.Font = 10] = "Font", t6[t6.Log = 11] = "Log", t6[t6.Drag = 12] = "Drag", t6[t6.StyleDeclaration = 13] = "StyleDeclaration", t6[t6.Selection = 14] = "Selection", t6[t6.AdoptedStyleSheet = 15] = "AdoptedStyleSheet";
            var tP = [tS.MouseMove, tS.MouseInteraction, tS.Scroll, tS.ViewportResize, tS.Input, tS.TouchMove, tS.MediaInteraction, tS.Drag],
                tI = function() {
                    function e(t) {
                        var n = this;
                        if (h(this, e), _(this, "isIdle", !1), _(this, "_linkedFlagSeen", !1), _(this, "_lastActivityTimestamp", Date.now()), _(this, "windowId", null), _(this, "sessionId", null), _(this, "_linkedFlag", null), _(this, "_sampleRate", null), _(this, "_minimumDuration", null), _(this, "_forceAllowLocalhostNetworkCapture", !1), this.instance = t, this._captureStarted = !1, this._endpoint = "/s/", this.stopRrweb = void 0, this.receivedDecide = !1, null == V || V.addEventListener("beforeunload", function() {
                                n._flushBuffer()
                            }), !this.instance.sessionManager) throw Q.error("Session recording started without valid sessionManager"), Error("Session recording started without valid sessionManager. This is a bug.");
                        this.buffer = this.clearBuffer()
                    }
                    return p(e, [{
                        key: "started",
                        get: function() {
                            return this._captureStarted
                        }
                    }, {
                        key: "sessionManager",
                        get: function() {
                            if (!this.instance.sessionManager) throw Q.error("Session recording started without valid sessionManager"), Error("Session recording started without valid sessionManager. This is a bug.");
                            return this.instance.sessionManager
                        }
                    }, {
                        key: "isSampled",
                        get: function() {
                            return q(this._sampleRate) ? this.instance.get_property(eM) : null
                        }
                    }, {
                        key: "sessionDuration",
                        get: function() {
                            var e, t, n = null === (e = this.buffer) || void 0 === e ? void 0 : e.data[(null === (t = this.buffer) || void 0 === t ? void 0 : t.data.length) - 1],
                                i = this.sessionManager.checkAndGetSessionAndWindowId(!0).sessionStartTimestamp;
                            return n ? n.timestamp - i : null
                        }
                    }, {
                        key: "isRecordingEnabled",
                        get: function() {
                            var e = !!this.instance.get_property(eC),
                                t = !this.instance.config.disable_session_recording;
                            return V && e && t
                        }
                    }, {
                        key: "isConsoleLogCaptureEnabled",
                        get: function() {
                            var e = !!this.instance.get_property(eO),
                                t = this.instance.config.enable_recording_console_log;
                            return null != t ? t : e
                        }
                    }, {
                        key: "recordingVersion",
                        get: function() {
                            var e, t = this.instance.get_property(e$);
                            return (null === (e = this.instance.config.session_recording) || void 0 === e ? void 0 : e.recorderVersion) || t || "v1"
                        }
                    }, {
                        key: "networkPayloadCapture",
                        get: function() {
                            var e, t, n = this.instance.get_property(eT),
                                i = {
                                    recordHeaders: null === (e = this.instance.config.session_recording) || void 0 === e ? void 0 : e.recordHeaders,
                                    recordBody: null === (t = this.instance.config.session_recording) || void 0 === t ? void 0 : t.recordBody
                                },
                                r = (null == i ? void 0 : i.recordHeaders) || (null == n ? void 0 : n.recordHeaders),
                                o = (null == i ? void 0 : i.recordBody) || (null == n ? void 0 : n.recordBody),
                                s = this.instance.config.capture_performance || (null == n ? void 0 : n.capturePerformance);
                            return r || o || s ? {
                                recordHeaders: r,
                                recordBody: o,
                                recordPerformance: s
                            } : void 0
                        }
                    }, {
                        key: "status",
                        get: function() {
                            return this.receivedDecide ? this.isRecordingEnabled ? D(this._linkedFlag) && !this._linkedFlagSeen ? "buffering" : B(this.isSampled) ? this.isSampled ? "sampled" : "disabled" : "active" : "disabled" : "buffering"
                        }
                    }, {
                        key: "startRecordingIfEnabled",
                        value: function() {
                            this.isRecordingEnabled ? this.startCaptureAndTrySendingQueuedSnapshots() : (this.stopRecording(), this.clearBuffer())
                        }
                    }, {
                        key: "stopRecording",
                        value: function() {
                            this._captureStarted && this.stopRrweb && (this.stopRrweb(), this.stopRrweb = void 0, this._captureStarted = !1)
                        }
                    }, {
                        key: "makeSamplingDecision",
                        value: function(e) {
                            var t, n, i = this.sessionId !== e;
                            if (q(this._sampleRate)) {
                                var r, o = this.isSampled;
                                (r = i || !B(o) ? Math.random() < this._sampleRate : o) || Q.warn("[SessionSampling] Sample rate (".concat(this._sampleRate, ") has determined that this sessionId (").concat(e, ") will not be sent to the server.")), null === (n = this.instance.persistence) || void 0 === n || n.register(_({}, eM, r))
                            } else null === (t = this.instance.persistence) || void 0 === t || t.register(_({}, eM, null))
                        }
                    }, {
                        key: "afterDecideResponse",
                        value: function(e) {
                            var t, n, i, r, o, s, a, u, l = this;
                            this.instance.persistence && this.instance.persistence.register((_(u = {}, eC, !!e.sessionRecording), _(u, eO, null === (o = e.sessionRecording) || void 0 === o ? void 0 : o.consoleLogRecordingEnabled), _(u, e$, null === (s = e.sessionRecording) || void 0 === s ? void 0 : s.recorderVersion), _(u, eT, c({
                                capturePerformance: e.capturePerformance
                            }, null === (a = e.sessionRecording) || void 0 === a ? void 0 : a.networkPayloadCapture)), u));
                            var d = null === (t = e.sessionRecording) || void 0 === t ? void 0 : t.sampleRate;
                            this._sampleRate = M(d) || N(d) ? null : parseFloat(d);
                            var h, f = null === (n = e.sessionRecording) || void 0 === n ? void 0 : n.minimumDurationMilliseconds;
                            if (this._minimumDuration = M(f) ? null : f, this._linkedFlag = (null === (i = e.sessionRecording) || void 0 === i ? void 0 : i.linkedFlag) || null, null !== (r = e.sessionRecording) && void 0 !== r && r.endpoint && (this._endpoint = null === (h = e.sessionRecording) || void 0 === h ? void 0 : h.endpoint), q(this._sampleRate) && this.sessionManager.onSessionId(function(e) {
                                    l.makeSamplingDecision(e)
                                }), D(this._linkedFlag)) {
                                var p = this._linkedFlag;
                                this.instance.onFeatureFlags(function(e) {
                                    l._linkedFlagSeen = e.includes(p)
                                })
                            }
                            this.receivedDecide = !0, this.startRecordingIfEnabled()
                        }
                    }, {
                        key: "log",
                        value: function(e) {
                            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
                            null === (t = this.instance.sessionRecording) || void 0 === t || t.onRRwebEmit({
                                type: 6,
                                data: {
                                    plugin: "rrweb/console@1",
                                    payload: {
                                        level: n,
                                        trace: [],
                                        payload: [JSON.stringify(e)]
                                    }
                                },
                                timestamp: ei()
                            })
                        }
                    }, {
                        key: "startCaptureAndTrySendingQueuedSnapshots",
                        value: function() {
                            this._startCapture()
                        }
                    }, {
                        key: "_startCapture",
                        value: function() {
                            var e = this;
                            if (!M(Object.assign) && !this._captureStarted && !this.instance.config.disable_session_recording) {
                                this._captureStarted = !0, this.sessionManager.checkAndGetSessionAndWindowId();
                                var t = "v2" === this.recordingVersion ? "recorder-v2.js" : "recorder.js";
                                this.instance.__loaded_recorder_version !== this.recordingVersion ? ed(this.instance.config.api_host + "/static/".concat(t, "?v=").concat(P.LIB_VERSION), function(n) {
                                    if (n) return Q.error("Could not load ".concat(t), n);
                                    e._onScriptLoaded()
                                }) : this._onScriptLoaded()
                            }
                        }
                    }, {
                        key: "_isInteractiveEvent",
                        value: function(e) {
                            var t;
                            return 3 === e.type && -1 !== tP.indexOf(null === (t = e.data) || void 0 === t ? void 0 : t.source)
                        }
                    }, {
                        key: "_updateWindowAndSessionIds",
                        value: function(e) {
                            var t = this._isInteractiveEvent(e);
                            t || this.isIdle || e.timestamp - this._lastActivityTimestamp > 3e5 && (this.isIdle = !0, this._tryAddCustomEvent("sessionIdle", {
                                reason: "user inactivity",
                                timeSinceLastActive: e.timestamp - this._lastActivityTimestamp,
                                threshold: 3e5
                            }));
                            var n = !1;
                            if (t && (this._lastActivityTimestamp = e.timestamp, this.isIdle && (this.isIdle = !1, this._tryAddCustomEvent("sessionNoLongerIdle", {
                                    reason: "user activity",
                                    type: e.type
                                }), n = !0)), !this.isIdle) {
                                var i = this.sessionManager.checkAndGetSessionAndWindowId(!t, e.timestamp),
                                    r = i.windowId,
                                    o = i.sessionId,
                                    s = this.sessionId !== o,
                                    a = this.windowId !== r;
                                this.windowId = r, this.sessionId = o, (n || -1 === [2, 4].indexOf(e.type) && (a || s)) && this._tryTakeFullSnapshot()
                            }
                        }
                    }, {
                        key: "_tryRRwebMethod",
                        value: function(e) {
                            if (!this._captureStarted) return !1;
                            try {
                                return e(), !0
                            } catch (e) {
                                return Q.error("[Session-Recording] using rrweb when not started.", e), !1
                            }
                        }
                    }, {
                        key: "_tryAddCustomEvent",
                        value: function(e, t) {
                            var n = this;
                            return this._tryRRwebMethod(function() {
                                var i;
                                return null === (i = n.rrwebRecord) || void 0 === i ? void 0 : i.addCustomEvent(e, t)
                            })
                        }
                    }, {
                        key: "_tryTakeFullSnapshot",
                        value: function() {
                            var e = this;
                            return this._tryRRwebMethod(function() {
                                var t;
                                return null === (t = e.rrwebRecord) || void 0 === t ? void 0 : t.takeFullSnapshot()
                            })
                        }
                    }, {
                        key: "_onScriptLoaded",
                        value: function() {
                            var e, t = this,
                                n = {
                                    blockClass: "ph-no-capture",
                                    blockSelector: void 0,
                                    ignoreClass: "ph-ignore-input",
                                    maskTextClass: "ph-mask",
                                    maskTextSelector: void 0,
                                    maskTextFn: void 0,
                                    maskAllInputs: !0,
                                    maskInputOptions: {},
                                    maskInputFn: void 0,
                                    slimDOMOptions: {},
                                    collectFonts: !1,
                                    inlineStylesheet: !0,
                                    recordCrossOriginIframes: !1
                                };
                            this.rrwebRecord = V.rrweb ? V.rrweb.record : V.rrwebRecord;
                            for (var i = this.instance.config.session_recording, r = 0, o = Object.entries(i || {}); r < o.length; r++) {
                                var s = b(o[r], 2),
                                    a = s[0],
                                    u = s[1];
                                a in n && (n[a] = u)
                            }
                            if (this.rrwebRecord) {
                                this.mutationRateLimiter = null !== (e = this.mutationRateLimiter) && void 0 !== e ? e : new tg(this.rrwebRecord, {
                                    onBlockedNode: function(e, n) {
                                        var i = "Too many mutations on node '".concat(e, "'. Rate limiting. This could be due to SVG animations or something similar");
                                        Q.info(i, {
                                            node: n
                                        }), t.log("[PostHog Recorder] " + i, "warn")
                                    }
                                });
                                var l = this._gatherRRWebPlugins();
                                this.stopRrweb = this.rrwebRecord(c({
                                    emit: function(e) {
                                        t.onRRwebEmit(e)
                                    },
                                    plugins: l
                                }, n)), this.instance._addCaptureHook(function(e) {
                                    try {
                                        if ("$pageview" === e) {
                                            var n = V ? t._maskUrl(V.location.href) : "";
                                            if (!n) return;
                                            t._tryAddCustomEvent("$pageview", {
                                                href: n
                                            })
                                        }
                                    } catch (e) {
                                        Q.error("Could not add $pageview to rrweb session", e)
                                    }
                                }), this._lastActivityTimestamp = Date.now(), this.isIdle = !1, this._tryAddCustomEvent("$session_options", {
                                    sessionRecordingOptions: n,
                                    activePlugins: l.map(function(e) {
                                        return null == e ? void 0 : e.name
                                    })
                                })
                            } else Q.error("onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.")
                        }
                    }, {
                        key: "_gatherRRWebPlugins",
                        value: function() {
                            var e = [];
                            return z.rrwebConsoleRecord && this.isConsoleLogCaptureEnabled && e.push(z.rrwebConsoleRecord.getRecordConsolePlugin()), this.networkPayloadCapture && $(z.getRecordNetworkPlugin) && (!tl.includes(location.hostname) || this._forceAllowLocalhostNetworkCapture ? e.push(z.getRecordNetworkPlugin(tF(this.instance.config, this.networkPayloadCapture))) : Q.info("[SessionReplay-NetworkCapture] not started because we are on localhost.")), e
                        }
                    }, {
                        key: "onRRwebEmit",
                        value: function(e) {
                            if (e && T(e)) {
                                if (e.type === tv.Meta) {
                                    var t = this._maskUrl(e.data.href);
                                    if (!t) return;
                                    e.data.href = t
                                }
                                var n = this.mutationRateLimiter ? this.mutationRateLimiter.throttleMutations(e) : e;
                                if (n) {
                                    var i = function(e) {
                                            var t = e;
                                            if (t && T(t) && 6 === t.type && T(t.data) && "rrweb/console@1" === t.data.plugin) {
                                                t.data.payload.payload.length > 10 && (t.data.payload.payload = t.data.payload.payload.slice(0, 10), t.data.payload.payload.push("...[truncated]"));
                                                for (var n = [], i = 0; i < t.data.payload.payload.length; i++) t.data.payload.payload[i] && t.data.payload.payload[i].length > 2e3 ? n.push(t.data.payload.payload[i].slice(0, 2e3) + "...[truncated]") : n.push(t.data.payload.payload[i]);
                                                return t.data.payload.payload = n, e
                                            }
                                            return e
                                        }(n),
                                        r = JSON.stringify(i).length;
                                    if (this._updateWindowAndSessionIds(i), !this.isIdle) {
                                        var o = {
                                            $snapshot_bytes: r,
                                            $snapshot_data: i,
                                            $session_id: this.sessionId,
                                            $window_id: this.windowId
                                        };
                                        "disabled" !== this.status ? this._captureSnapshotBuffered(o) : this.clearBuffer()
                                    }
                                }
                            }
                        }
                    }, {
                        key: "_maskUrl",
                        value: function(e) {
                            var t = this.instance.config.session_recording;
                            if (t.maskNetworkRequestFn) {
                                var n, i = {
                                    url: e
                                };
                                return null === (n = i = t.maskNetworkRequestFn(i)) || void 0 === n ? void 0 : n.url
                            }
                            return e
                        }
                    }, {
                        key: "clearBuffer",
                        value: function() {
                            return this.buffer = void 0, {
                                size: 0,
                                data: [],
                                sessionId: this.sessionId,
                                windowId: this.windowId
                            }
                        }
                    }, {
                        key: "_flushBuffer",
                        value: function() {
                            var e = this;
                            this.flushBufferTimer && (clearTimeout(this.flushBufferTimer), this.flushBufferTimer = void 0);
                            var t = this._minimumDuration,
                                n = this.sessionDuration,
                                i = q(n) && n >= 0,
                                r = q(t) && i && n < t;
                            return "buffering" === this.status || r ? (this.flushBufferTimer = setTimeout(function() {
                                e._flushBuffer()
                            }, 2e3), this.buffer || this.clearBuffer()) : this.buffer && 0 !== this.buffer.data.length ? (this._captureSnapshot({
                                $snapshot_bytes: this.buffer.size,
                                $snapshot_data: this.buffer.data,
                                $session_id: this.buffer.sessionId,
                                $window_id: this.buffer.windowId
                            }), this.clearBuffer()) : this.buffer || this.clearBuffer()
                        }
                    }, {
                        key: "_captureSnapshotBuffered",
                        value: function(e) {
                            var t, n = this,
                                i = 2 + ((null === (t = this.buffer) || void 0 === t ? void 0 : t.data.length) || 0);
                            (!this.buffer || this.buffer.size + e.$snapshot_bytes + i > 943718.4 || this.buffer.sessionId && this.buffer.sessionId !== this.sessionId) && (this.buffer = this._flushBuffer()), N(this.buffer.sessionId) && !N(this.sessionId) && (this.buffer.sessionId = this.sessionId, this.buffer.windowId = this.windowId), this.buffer.size += e.$snapshot_bytes, this.buffer.data.push(e.$snapshot_data), this.flushBufferTimer || (this.flushBufferTimer = setTimeout(function() {
                                n._flushBuffer()
                            }, 2e3))
                        }
                    }, {
                        key: "_captureSnapshot",
                        value: function(e) {
                            this.instance.capture("$snapshot", e, {
                                transport: "XHR",
                                method: "POST",
                                endpoint: this._endpoint,
                                _noTruncate: !0,
                                _batchKey: "recordings",
                                _metrics: {
                                    rrweb_full_snapshot: 2 === e.$snapshot_data.type
                                }
                            })
                        }
                    }]), e
                }(),
                tx = function() {
                    function e(t) {
                        h(this, e), this.instance = t, this.instance.decideEndpointWasHit = this.instance._hasBootstrappedFeatureFlags()
                    }
                    return p(e, [{
                        key: "call",
                        value: function() {
                            var e = this,
                                t = eu(JSON.stringify({
                                    token: this.instance.config.token,
                                    distinct_id: this.instance.get_distinct_id(),
                                    groups: this.instance.getGroups(),
                                    person_properties: this.instance.get_property(eq),
                                    group_properties: this.instance.get_property(eB),
                                    disable_flags: this.instance.config.advanced_disable_feature_flags || this.instance.config.advanced_disable_feature_flags_on_first_load || void 0
                                }));
                            this.instance._send_request("".concat(this.instance.config.api_host, "/decide/?v=3"), {
                                data: t,
                                verbose: !0
                            }, {
                                method: "POST"
                            }, function(t) {
                                return e.parseDecideResponse(t)
                            })
                        }
                    }, {
                        key: "parseDecideResponse",
                        value: function(e) {
                            var t, n = this;
                            if (this.instance.featureFlags.setReloadingPaused(!1), this.instance.featureFlags._startReloadTimer(), 0 !== (null == e ? void 0 : e.status)) {
                                if (!W || !W.body) return Q.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout(function() {
                                    n.parseDecideResponse(e)
                                }, 500);
                                this.instance.toolbar.afterDecideResponse(e), null === (t = this.instance.sessionRecording) || void 0 === t || t.afterDecideResponse(e), ez.afterDecideResponse(e, this.instance), this.instance._afterDecideResponse(e), this.instance.config.advanced_disable_feature_flags_on_first_load || this.instance.config.advanced_disable_feature_flags || this.instance.featureFlags.receivedFeatureFlags(e);
                                var i = null == V ? void 0 : V.extendPostHogWithSurveys;
                                e.surveys && !i && ed(this.instance.config.api_host + "/static/surveys.js", function(e) {
                                    if (e) return Q.error("Could not load surveys script", e);
                                    V.extendPostHogWithSurveys(n.instance)
                                });
                                var r = null == V ? void 0 : V.extendPostHogWithExceptionAutoCapture;
                                if (e.autocaptureExceptions && e.autocaptureExceptions && M(r) && ed(this.instance.config.api_host + "/static/exception-autocapture.js", function(t) {
                                        if (t) return Q.error("Could not load exception autocapture script", t);
                                        V.extendPostHogWithExceptionAutocapture(n.instance, e)
                                    }), e.siteApps) {
                                    if (this.instance.config.opt_in_site_apps) {
                                        var o, s = this.instance.config.api_host,
                                            a = F(e.siteApps);
                                        try {
                                            for (a.s(); !(o = a.n()).done;)(function() {
                                                var e = o.value,
                                                    t = e.id,
                                                    i = e.url,
                                                    r = [s, "/" === s[s.length - 1] && "/" === i[0] ? i.substring(1) : i].join("");
                                                z["__$$ph_site_app_".concat(t)] = n.instance, ed(r, function(e) {
                                                    e && Q.error("Error while initializing PostHog app with config id ".concat(t), e)
                                                })
                                            })()
                                        } catch (e) {
                                            a.e(e)
                                        } finally {
                                            a.f()
                                        }
                                    } else e.siteApps.length > 0 && Q.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
                                }
                            } else Q.error("Failed to fetch feature flags from PostHog.")
                        }
                    }]), e
                }(),
                tR = ["https://app.posthog.com", "https://eu.posthog.com"],
                tE = ["source"],
                tC = null != V && V.location ? th(V.location.hash, "__posthog") || th(location.hash, "state") : null,
                tO = function() {
                    function e(t) {
                        h(this, e), this.instance = t
                    }
                    return p(e, [{
                        key: "afterDecideResponse",
                        value: function(e) {
                            var t = e.toolbarParams || e.editorParams || (e.toolbarVersion ? {
                                toolbarVersion: e.toolbarVersion
                            } : {});
                            e.isAuthenticated && t.toolbarVersion && 0 === t.toolbarVersion.indexOf("toolbar") && this.loadToolbar(c({}, t))
                        }
                    }, {
                        key: "maybeLoadToolbar",
                        value: function() {
                            var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                            if (!V || !W) return !1;
                            n = null !== (e = n) && void 0 !== e ? e : V.location, r = null !== (t = r) && void 0 !== t ? t : V.history;
                            try {
                                if (!i) {
                                    try {
                                        V.localStorage.setItem("test", "test"), V.localStorage.removeItem("test")
                                    } catch (e) {
                                        return !1
                                    }
                                    i = null == V ? void 0 : V.localStorage
                                }
                                var o, s = tC || th(n.hash, "__posthog") || th(n.hash, "state"),
                                    a = s ? er(function() {
                                        return JSON.parse(atob(decodeURIComponent(s)))
                                    }) || er(function() {
                                        return JSON.parse(decodeURIComponent(s))
                                    }) : null;
                                return a && "ph_authorize" === a.action ? ((o = a).source = "url", o && Object.keys(o).length > 0 && (a.desiredHash ? n.hash = a.desiredHash : r ? r.replaceState("", W.title, n.pathname + n.search) : n.hash = "")) : ((o = JSON.parse(i.getItem("_postHogToolbarParams") || "{}")).source = "localstorage", delete o.userIntent), !(!o.token || this.instance.config.token !== o.token) && (this.loadToolbar(o), !0)
                            } catch (e) {
                                return !1
                            }
                        }
                    }, {
                        key: "loadToolbar",
                        value: function(e) {
                            var t = this;
                            if (!V || z._postHogToolbarLoaded) return !1;
                            z._postHogToolbarLoaded = !0;
                            var n = this.instance.config.api_host,
                                i = 3e5 * Math.floor(Date.now() / 3e5),
                                r = "".concat(n).concat(n.endsWith("/") ? "" : "/", "static/toolbar.js?t=").concat(i),
                                o = !tR.includes(this.instance.config.api_host) && this.instance.config.advanced_disable_toolbar_metrics,
                                s = c(c({
                                    token: this.instance.config.token
                                }, e), {}, {
                                    apiURL: n
                                }, o ? {
                                    instrument: !1
                                } : {});
                            s.source;
                            var a = function(e, t) {
                                if (null == e) return {};
                                var n, i, r = function(e, t) {
                                    if (null == e) return {};
                                    var n, i, r = {},
                                        o = Object.keys(e);
                                    for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r
                                }(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var o = Object.getOwnPropertySymbols(e);
                                    for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                                }
                                return r
                            }(s, tE);
                            return V.localStorage.setItem("_postHogToolbarParams", JSON.stringify(a)), ed(r, function(e) {
                                e ? Q.error("Failed to load toolbar", e) : (z.ph_load_toolbar || z.ph_load_editor)(s, t.instance)
                            }), ec(V, "turbolinks:load", function() {
                                z._postHogToolbarLoaded = !1, t.loadToolbar(s)
                            }), !0
                        }
                    }, {
                        key: "_loadEditor",
                        value: function(e) {
                            return this.loadToolbar(e)
                        }
                    }, {
                        key: "maybeLoadEditor",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                            return this.maybeLoadToolbar(e, t, n)
                        }
                    }]), e
                }();

            function t$(e, t) {
                tL(!0, e, t)
            }

            function tT(e, t) {
                tL(!1, e, t)
            }

            function tA(e, t) {
                return "1" === tB(e, t)
            }

            function tM(e, t) {
                return !! function(e) {
                    if (e && e.respectDnt) {
                        var t = e && e.window || V,
                            n = null == t ? void 0 : t.navigator,
                            i = !1;
                        return Z([null == n ? void 0 : n.doNotTrack, n.msDoNotTrack, t.doNotTrack], function(e) {
                            et([!0, 1, "1", "yes"], e) && (i = !0)
                        }), i
                    }
                    return !1
                }(t) || "0" === tB(e, t)
            }

            function tD(e, t) {
                tN(t = t || {}).remove(tq(e, t), !!t.crossSubdomainCookie)
            }

            function tN(e) {
                return "localStorage" === (e = e || {}).persistenceType ? tn : "localStorage+cookie" === e.persistenceType ? tr : te
            }

            function tq(e, t) {
                return ((t = t || {}).persistencePrefix || "__ph_opt_in_out_") + e
            }

            function tB(e, t) {
                return tN(t).get(tq(e, t))
            }

            function tL(e, t, n) {
                D(t) && t.length ? (tN(n = n || {}).set(tq(t, n), e ? 1 : 0, q(n.cookieExpiration) ? n.cookieExpiration : null, n.crossSubdomainCookie, n.secureCookie), n.capture && e && n.capture(n.captureEventName || "$opt_in", n.captureProperties || {}, {
                    send_instantly: !0
                })) : Q.error("gdpr." + (e ? "optIn" : "optOut") + " called with an invalid token")
            }
            var tj = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3;
                        h(this, e), this.isPolling = !0, this._event_queue = [], this._empty_queue_count = 0, this._poller = void 0, this._pollInterval = t
                    }
                    return p(e, [{
                        key: "setPollInterval",
                        value: function(e) {
                            this._pollInterval = e, this.isPolling && this.poll()
                        }
                    }, {
                        key: "poll",
                        value: function() {}
                    }, {
                        key: "unload",
                        value: function() {}
                    }, {
                        key: "getTime",
                        value: function() {
                            return (new Date).getTime()
                        }
                    }]), e
                }(),
                tH = function(e) {
                    g(n, tj);
                    var t = y(n);

                    function n(e) {
                        var i, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3;
                        return h(this, n), (i = t.call(this, r)).handlePollRequest = e, i
                    }
                    return p(n, [{
                        key: "enqueue",
                        value: function(e, t, n) {
                            this._event_queue.push({
                                url: e,
                                data: t,
                                options: n
                            }), this.isPolling || (this.isPolling = !0, this.poll())
                        }
                    }, {
                        key: "poll",
                        value: function() {
                            var e = this;
                            clearTimeout(this._poller), this._poller = setTimeout(function() {
                                if (e._event_queue.length > 0) {
                                    var t = e.formatQueue();
                                    for (var n in t)(function(n) {
                                        var i = t[n],
                                            r = i.url,
                                            o = i.data,
                                            s = i.options;
                                        Z(o, function(t, n) {
                                            o[n].offset = Math.abs(o[n].timestamp - e.getTime()), delete o[n].timestamp
                                        }), e.handlePollRequest(r, o, s)
                                    })(n);
                                    e._event_queue.length = 0, e._empty_queue_count = 0
                                } else e._empty_queue_count++;
                                e._empty_queue_count > 4 && (e.isPolling = !1, e._empty_queue_count = 0), e.isPolling && e.poll()
                            }, this._pollInterval)
                        }
                    }, {
                        key: "unload",
                        value: function() {
                            var e = this;
                            clearTimeout(this._poller);
                            var t = this._event_queue.length > 0 ? this.formatQueue() : {};
                            this._event_queue.length = 0;
                            var n = Object.values(t);
                            [].concat(k(n.filter(function(e) {
                                return 0 === e.url.indexOf("/e")
                            })), k(n.filter(function(e) {
                                return 0 !== e.url.indexOf("/e")
                            }))).map(function(t) {
                                var n = t.url,
                                    i = t.data,
                                    r = t.options;
                                e.handlePollRequest(n, i, c(c({}, r), {}, {
                                    transport: "sendBeacon"
                                }))
                            })
                        }
                    }, {
                        key: "formatQueue",
                        value: function() {
                            var e = {};
                            return Z(this._event_queue, function(t) {
                                var n = t.url,
                                    i = t.data,
                                    r = t.options,
                                    o = (r ? r._batchKey : null) || n;
                                M(e[o]) && (e[o] = {
                                    data: [],
                                    url: n,
                                    options: r
                                }), r && e[o].options && e[o].options._metrics && !e[o].options._metrics.rrweb_full_snapshot && (e[o].options._metrics.rrweb_full_snapshot = r._metrics.rrweb_full_snapshot), e[o].data.push(i)
                            }), e
                        }
                    }]), n
                }(),
                tV = Uint8Array,
                tU = Uint16Array,
                tW = Uint32Array,
                tG = new tV([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
                tz = new tV([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
                tY = new tV([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
                tQ = function(e, t) {
                    for (var n = new tU(31), i = 0; i < 31; ++i) n[i] = t += 1 << e[i - 1];
                    var r = new tW(n[30]);
                    for (i = 1; i < 30; ++i)
                        for (var o = n[i]; o < n[i + 1]; ++o) r[o] = o - n[i] << 5 | i;
                    return [n, r]
                },
                tJ = tQ(tG, 2),
                tX = tJ[0],
                tK = tJ[1];
            tX[28] = 258, tK[258] = 28;
            for (var tZ = tQ(tz, 0)[1], t0 = new tU(32768), t1 = 0; t1 < 32768; ++t1) {
                var t2 = (43690 & t1) >>> 1 | (21845 & t1) << 1;
                t2 = (61680 & (t2 = (52428 & t2) >>> 2 | (13107 & t2) << 2)) >>> 4 | (3855 & t2) << 4, t0[t1] = ((65280 & t2) >>> 8 | (255 & t2) << 8) >>> 1
            }
            var t3 = function(e, t, n) {
                    for (var i = e.length, r = 0, o = new tU(t); r < i; ++r) ++o[e[r] - 1];
                    var s, a = new tU(t);
                    for (r = 0; r < t; ++r) a[r] = a[r - 1] + o[r - 1] << 1;
                    if (n) {
                        s = new tU(1 << t);
                        var u = 15 - t;
                        for (r = 0; r < i; ++r)
                            if (e[r])
                                for (var l = r << 4 | e[r], c = t - e[r], d = a[e[r] - 1]++ << c, h = d | (1 << c) - 1; d <= h; ++d) s[t0[d] >>> u] = l
                    } else
                        for (s = new tU(i), r = 0; r < i; ++r) s[r] = t0[a[e[r] - 1]++] >>> 15 - e[r];
                    return s
                },
                t5 = new tV(288);
            for (t1 = 0; t1 < 144; ++t1) t5[t1] = 8;
            for (t1 = 144; t1 < 256; ++t1) t5[t1] = 9;
            for (t1 = 256; t1 < 280; ++t1) t5[t1] = 7;
            for (t1 = 280; t1 < 288; ++t1) t5[t1] = 8;
            var t8 = new tV(32);
            for (t1 = 0; t1 < 32; ++t1) t8[t1] = 5;
            var t6, t4, t7 = t3(t5, 9, 0),
                t9 = t3(t8, 5, 0),
                ne = function(e) {
                    return (e / 8 >> 0) + (7 & e && 1)
                },
                nt = function(e, t, n) {
                    (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length);
                    var i = new(e instanceof tU ? tU : e instanceof tW ? tW : tV)(n - t);
                    return i.set(e.subarray(t, n)), i
                },
                nn = function(e, t, n) {
                    n <<= 7 & t;
                    var i = t / 8 >> 0;
                    e[i] |= n, e[i + 1] |= n >>> 8
                },
                ni = function(e, t, n) {
                    n <<= 7 & t;
                    var i = t / 8 >> 0;
                    e[i] |= n, e[i + 1] |= n >>> 8, e[i + 2] |= n >>> 16
                },
                nr = function(e, t) {
                    for (var n = [], i = 0; i < e.length; ++i) e[i] && n.push({
                        s: i,
                        f: e[i]
                    });
                    var r = n.length,
                        o = n.slice();
                    if (!r) return [new tV(0), 0];
                    if (1 == r) {
                        var s = new tV(n[0].s + 1);
                        return s[n[0].s] = 1, [s, 1]
                    }
                    n.sort(function(e, t) {
                        return e.f - t.f
                    }), n.push({
                        s: -1,
                        f: 25001
                    });
                    var a = n[0],
                        u = n[1],
                        l = 0,
                        c = 1,
                        d = 2;
                    for (n[0] = {
                            s: -1,
                            f: a.f + u.f,
                            l: a,
                            r: u
                        }; c != r - 1;) a = n[n[l].f < n[d].f ? l++ : d++], u = n[l != c && n[l].f < n[d].f ? l++ : d++], n[c++] = {
                        s: -1,
                        f: a.f + u.f,
                        l: a,
                        r: u
                    };
                    var h = o[0].s;
                    for (i = 1; i < r; ++i) o[i].s > h && (h = o[i].s);
                    var f = new tU(h + 1),
                        p = no(n[c - 1], f, 0);
                    if (p > t) {
                        i = 0;
                        var _ = 0,
                            g = p - t,
                            v = 1 << g;
                        for (o.sort(function(e, t) {
                                return f[t.s] - f[e.s] || e.f - t.f
                            }); i < r; ++i) {
                            var m = o[i].s;
                            if (!(f[m] > t)) break;
                            _ += v - (1 << p - f[m]), f[m] = t
                        }
                        for (_ >>>= g; _ > 0;) {
                            var y = o[i].s;
                            f[y] < t ? _ -= 1 << t - f[y]++ - 1 : ++i
                        }
                        for (; i >= 0 && _; --i) {
                            var b = o[i].s;
                            f[b] == t && (--f[b], ++_)
                        }
                        p = t
                    }
                    return [new tV(f), p]
                },
                no = function e(t, n, i) {
                    return -1 == t.s ? Math.max(e(t.l, n, i + 1), e(t.r, n, i + 1)) : n[t.s] = i
                },
                ns = function(e) {
                    for (var t = e.length; t && !e[--t];);
                    for (var n = new tU(++t), i = 0, r = e[0], o = 1, s = function(e) {
                            n[i++] = e
                        }, a = 1; a <= t; ++a)
                        if (e[a] == r && a != t) ++o;
                        else {
                            if (!r && o > 2) {
                                for (; o > 138; o -= 138) s(32754);
                                o > 2 && (s(o > 10 ? o - 11 << 5 | 28690 : o - 3 << 5 | 12305), o = 0)
                            } else if (o > 3) {
                                for (s(r), --o; o > 6; o -= 6) s(8304);
                                o > 2 && (s(o - 3 << 5 | 8208), o = 0)
                            }
                            for (; o--;) s(r);
                            o = 1, r = e[a]
                        }
                    return [n.subarray(0, i), t]
                },
                na = function(e, t) {
                    for (var n = 0, i = 0; i < t.length; ++i) n += e[i] * t[i];
                    return n
                },
                nu = function(e, t, n) {
                    var i = n.length,
                        r = ne(t + 2);
                    e[r] = 255 & i, e[r + 1] = i >>> 8, e[r + 2] = 255 ^ e[r], e[r + 3] = 255 ^ e[r + 1];
                    for (var o = 0; o < i; ++o) e[r + o + 4] = n[o];
                    return 8 * (r + 4 + i)
                },
                nl = function(e, t, n, i, r, o, s, a, u, l, c) {
                    nn(t, c++, n), ++r[256];
                    for (var d = nr(r, 15), h = d[0], f = d[1], p = nr(o, 15), _ = p[0], g = p[1], v = ns(h), m = v[0], y = v[1], b = ns(_), k = b[0], w = b[1], S = new tU(19), F = 0; F < m.length; ++F) S[31 & m[F]]++;
                    for (F = 0; F < k.length; ++F) S[31 & k[F]]++;
                    for (var P = nr(S, 7), I = P[0], x = P[1], R = 19; R > 4 && !I[tY[R - 1]]; --R);
                    var E, C, O, $, T = l + 5 << 3,
                        A = na(r, t5) + na(o, t8) + s,
                        M = na(r, h) + na(o, _) + s + 14 + 3 * R + na(S, I) + (2 * S[16] + 3 * S[17] + 7 * S[18]);
                    if (T <= A && T <= M) return nu(t, c, e.subarray(u, u + l));
                    if (nn(t, c, 1 + (M < A)), c += 2, M < A) {
                        E = t3(h, f, 0), C = h, O = t3(_, g, 0), $ = _;
                        var D = t3(I, x, 0);
                        for (nn(t, c, y - 257), nn(t, c + 5, w - 1), nn(t, c + 10, R - 4), c += 14, F = 0; F < R; ++F) nn(t, c + 3 * F, I[tY[F]]);
                        c += 3 * R;
                        for (var N = [m, k], q = 0; q < 2; ++q) {
                            var B = N[q];
                            for (F = 0; F < B.length; ++F) {
                                var L = 31 & B[F];
                                nn(t, c, D[L]), c += I[L], L > 15 && (nn(t, c, B[F] >>> 5 & 127), c += B[F] >>> 12)
                            }
                        }
                    } else E = t7, C = t5, O = t9, $ = t8;
                    for (F = 0; F < a; ++F)
                        if (i[F] > 255) {
                            ni(t, c, E[(L = i[F] >>> 18 & 31) + 257]), c += C[L + 257], L > 7 && (nn(t, c, i[F] >>> 23 & 31), c += tG[L]);
                            var j = 31 & i[F];
                            ni(t, c, O[j]), c += $[j], j > 3 && (ni(t, c, i[F] >>> 5 & 8191), c += tz[j])
                        } else ni(t, c, E[i[F]]), c += C[i[F]];
                    return ni(t, c, E[256]), c + C[256]
                },
                nc = new tW([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
                nd = new tV(0),
                nh = function() {
                    for (var e = new tW(256), t = 0; t < 256; ++t) {
                        for (var n = t, i = 9; --i;) n = (1 & n && 3988292384) ^ n >>> 1;
                        e[t] = n
                    }
                    return e
                }(),
                nf = function() {
                    var e = 4294967295;
                    return {
                        p: function(t) {
                            for (var n = e, i = 0; i < t.length; ++i) n = nh[255 & n ^ t[i]] ^ n >>> 8;
                            e = n
                        },
                        d: function() {
                            return 4294967295 ^ e
                        }
                    }
                },
                np = function(e, t, n) {
                    for (; n; ++t) e[t] = n, n >>>= 8
                },
                n_ = function(e, t) {
                    var n = t.filename;
                    if (e[0] = 31, e[1] = 139, e[2] = 8, e[8] = t.level < 2 ? 4 : 9 == t.level ? 2 : 0, e[9] = 3, 0 != t.mtime && np(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), n) {
                        e[3] = 8;
                        for (var i = 0; i <= n.length; ++i) e[i + 10] = n.charCodeAt(i)
                    }
                };
            (nP = t4 || (t4 = {})).GZipJS = "gzip-js", nP.Base64 = "base64";
            var ng = function(e, t, n) {
                    var i = t || {};
                    i.ip = n.ip ? 1 : 0, i._ = (new Date).getTime().toString(), i.ver = P.LIB_VERSION;
                    var r = e.split("?");
                    if (r.length > 1) {
                        var o, s = F(r[1].split("&"));
                        try {
                            for (s.s(); !(o = s.n()).done;) {
                                var a = o.value.split("=")[0];
                                M(i[a]) || delete i[a]
                            }
                        } catch (e) {
                            s.e(e)
                        } finally {
                            s.f()
                        }
                    }
                    var u = e.indexOf("?") > -1 ? "&" : "?";
                    return e + u + function(e) {
                        var t, n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&",
                            r = [];
                        return Z(e, function(e, i) {
                            M(e) || M(i) || "undefined" === i || (t = encodeURIComponent(e.toString()), n = encodeURIComponent(i), r[r.length] = n + "=" + t)
                        }), r.join(i)
                    }(i)
                },
                nv = function e(t, n) {
                    var i;
                    if (n.blob && t.buffer) return new Blob([O(t) ? t : t.buffer], {
                        type: "text/plain"
                    });
                    if (n.sendBeacon || n.blob) {
                        var r = e(t, {
                            method: "POST"
                        });
                        return new Blob([r], {
                            type: "application/x-www-form-urlencoded"
                        })
                    }
                    return "POST" !== n.method ? null : (i = C(t) || O(t) ? "data=" + encodeURIComponent(t) : "data=" + encodeURIComponent(t.data), "compression" in t && t.compression && (i += "&compression=" + t.compression), i)
                },
                nm = function(e) {
                    var t = e.url,
                        n = e.data,
                        i = e.headers,
                        r = e.options,
                        o = e.callback,
                        s = e.retriesPerformedSoFar,
                        a = e.retryQueue,
                        u = e.onXHRError,
                        l = e.timeout,
                        c = e.onResponse;
                    q(s) && s > 0 && (t = ng(t, {
                        retry_count: s
                    }, {}));
                    var d = new XMLHttpRequest;
                    d.open(r.method || "GET", t, !0);
                    var h = nv(n, r);
                    Z(i, function(e, t) {
                        d.setRequestHeader(t, e)
                    }), "POST" !== r.method || r.blob || d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), d.timeout = void 0 === l ? 6e4 : l, d.withCredentials = !0, d.onreadystatechange = function() {
                        if (4 === d.readyState) {
                            if (null == c || c(d), 200 === d.status) {
                                if (o) {
                                    var e;
                                    try {
                                        e = JSON.parse(d.responseText)
                                    } catch (e) {
                                        return void Q.error(e)
                                    }
                                    o(e)
                                }
                            } else $(u) && u(d), (d.status < 400 || d.status > 500) && a.enqueue({
                                url: t,
                                data: n,
                                options: r,
                                headers: i,
                                retriesPerformedSoFar: (s || 0) + 1,
                                callback: o
                            }), null == o || o({
                                status: 0
                            })
                        }
                    }, d.send(h)
                },
                ny = function(e) {
                    g(n, tj);
                    var t = y(n);

                    function n(e, i) {
                        var r;
                        return h(this, n), (r = t.call(this)).isPolling = !1, r.queue = [], r.areWeOnline = !0, r.onXHRError = e, r.rateLimiter = i, !M(V) && "onLine" in V.navigator && (r.areWeOnline = V.navigator.onLine, V.addEventListener("online", function() {
                            r._handleWeAreNowOnline()
                        }), V.addEventListener("offline", function() {
                            r.areWeOnline = !1
                        })), r
                    }
                    return p(n, [{
                        key: "enqueue",
                        value: function(e) {
                            var t = e.retriesPerformedSoFar || 0;
                            if (!(t >= 10)) {
                                var n, i, r, o = (r = (Math.random() - .5) * ((i = Math.min(18e5, n = 3e3 * Math.pow(2, t))) - n / 2), Math.ceil(i + r)),
                                    s = new Date(Date.now() + o);
                                this.queue.push({
                                    retryAt: s,
                                    requestData: e
                                });
                                var a = "Enqueued failed request for retry in ".concat(o);
                                navigator.onLine || (a += " (Browser is offline)"), Q.warn(a), this.isPolling || (this.isPolling = !0, this.poll())
                            }
                        }
                    }, {
                        key: "poll",
                        value: function() {
                            var e = this;
                            this._poller && clearTimeout(this._poller), this._poller = setTimeout(function() {
                                e.areWeOnline && e.queue.length > 0 && e.flush(), e.poll()
                            }, this._pollInterval)
                        }
                    }, {
                        key: "flush",
                        value: function() {
                            var e = new Date(Date.now()),
                                t = this.queue.filter(function(t) {
                                    return t.retryAt < e
                                });
                            if (t.length > 0) {
                                this.queue = this.queue.filter(function(t) {
                                    return t.retryAt >= e
                                });
                                var n, i = F(t);
                                try {
                                    for (i.s(); !(n = i.n()).done;) {
                                        var r = n.value.requestData;
                                        this._executeXhrRequest(r)
                                    }
                                } catch (e) {
                                    i.e(e)
                                } finally {
                                    i.f()
                                }
                            }
                        }
                    }, {
                        key: "unload",
                        value: function() {
                            this._poller && (clearTimeout(this._poller), this._poller = void 0);
                            var e, t = F(this.queue);
                            try {
                                for (t.s(); !(e = t.n()).done;) {
                                    var n = e.value.requestData,
                                        i = n.url,
                                        r = n.data,
                                        o = n.options;
                                    if (this.rateLimiter.isRateLimited(o._batchKey)) Q.warn("[RetryQueue] is quota limited. Dropping request.");
                                    else try {
                                        null == V || V.navigator.sendBeacon(i, nv(r, c(c({}, o), {}, {
                                            sendBeacon: !0
                                        })))
                                    } catch (e) {
                                        Q.error(e)
                                    }
                                }
                            } catch (e) {
                                t.e(e)
                            } finally {
                                t.f()
                            }
                            this.queue = []
                        }
                    }, {
                        key: "_executeXhrRequest",
                        value: function(e) {
                            var t = e.url,
                                n = e.data,
                                i = e.options,
                                r = e.headers,
                                o = e.callback,
                                s = e.retriesPerformedSoFar;
                            this.rateLimiter.isRateLimited(i._batchKey) || nm({
                                url: t,
                                data: n || {},
                                options: i || {},
                                headers: r || {},
                                retriesPerformedSoFar: s || 0,
                                callback: o,
                                retryQueue: this,
                                onXHRError: this.onXHRError,
                                onResponse: this.rateLimiter.checkForLimiting
                            })
                        }
                    }, {
                        key: "_handleWeAreNowOnline",
                        value: function() {
                            this.areWeOnline = !0, this.flush()
                        }
                    }]), n
                }(),
                nb = function() {
                    function e(t, n, i, r) {
                        h(this, e), _(this, "_sessionIdChangedHandlers", []), this.config = t, this.persistence = n, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null, this._sessionIdGenerator = i || e8, this._windowIdGenerator = r || e8;
                        var o = t.persistence_name || t.token,
                            s = t.session_idle_timeout_seconds || 1800;
                        if (q(s) ? s > 1800 ? Q.warn("session_idle_timeout_seconds cannot be  greater than 30 minutes. Using 30 minutes instead.") : s < 60 && Q.warn("session_idle_timeout_seconds cannot be less than 60 seconds. Using 60 seconds instead.") : (Q.warn("session_idle_timeout_seconds must be a number. Defaulting to 30 minutes."), s = 1800), this._sessionTimeoutMs = 1e3 * Math.min(Math.max(s, 60), 1800), this._window_id_storage_key = "ph_" + o + "_window_id", this._primary_window_exists_storage_key = "ph_" + o + "_primary_window_exists", this._canUseSessionStorage()) {
                            var a = tu.parse(this._window_id_storage_key),
                                u = tu.parse(this._primary_window_exists_storage_key);
                            a && !u ? this._windowId = a : tu.remove(this._window_id_storage_key), tu.set(this._primary_window_exists_storage_key, !0)
                        }
                        this._listenToReloadWindow()
                    }
                    return p(e, [{
                        key: "onSessionId",
                        value: function(e) {
                            var t = this;
                            return M(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), this._sessionIdChangedHandlers.push(e), this._sessionId && e(this._sessionId, this._windowId),
                                function() {
                                    t._sessionIdChangedHandlers = t._sessionIdChangedHandlers.filter(function(t) {
                                        return t !== e
                                    })
                                }
                        }
                    }, {
                        key: "_canUseSessionStorage",
                        value: function() {
                            return "memory" !== this.config.persistence && !this.persistence.disabled && tu.is_supported()
                        }
                    }, {
                        key: "_setWindowId",
                        value: function(e) {
                            e !== this._windowId && (this._windowId = e, this._canUseSessionStorage() && tu.set(this._window_id_storage_key, e))
                        }
                    }, {
                        key: "_getWindowId",
                        value: function() {
                            return this._windowId ? this._windowId : this._canUseSessionStorage() ? tu.parse(this._window_id_storage_key) : null
                        }
                    }, {
                        key: "_setSessionId",
                        value: function(e, t, n) {
                            e === this._sessionId && t === this._sessionActivityTimestamp && n === this._sessionStartTimestamp || (this._sessionStartTimestamp = n, this._sessionActivityTimestamp = t, this._sessionId = e, this.persistence.register(_({}, eA, [t, e, n])))
                        }
                    }, {
                        key: "_getSessionId",
                        value: function() {
                            if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp) return [this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp];
                            var e = this.persistence.props[eA];
                            return C(e) && 2 === e.length && e.push(e[0]), e || [0, null, 0]
                        }
                    }, {
                        key: "resetSessionId",
                        value: function() {
                            this._setSessionId(null, null, null)
                        }
                    }, {
                        key: "_listenToReloadWindow",
                        value: function() {
                            var e = this;
                            null == V || V.addEventListener("beforeunload", function() {
                                e._canUseSessionStorage() && tu.remove(e._primary_window_exists_storage_key)
                            })
                        }
                    }, {
                        key: "checkAndGetSessionAndWindowId",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || (new Date).getTime(),
                                n = b(this._getSessionId(), 3),
                                i = n[0],
                                r = n[1],
                                o = n[2],
                                s = this._getWindowId(),
                                a = o && o > 0 && Math.abs(t - o) > 864e5,
                                u = !1,
                                l = !r,
                                c = !e && Math.abs(t - i) > this._sessionTimeoutMs;
                            l || c || a ? (r = this._sessionIdGenerator(), s = this._windowIdGenerator(), o = t, u = !0) : s || (s = this._windowIdGenerator(), u = !0);
                            var d = 0 === o ? (new Date).getTime() : o;
                            return this._setWindowId(s), this._setSessionId(r, 0 === i || !e || a ? t : i, d), u && this._sessionIdChangedHandlers.forEach(function(e) {
                                return e(r, s)
                            }), {
                                sessionId: r,
                                windowId: s,
                                sessionStartTimestamp: d
                            }
                        }
                    }]), e
                }(),
                nk = p(function e(t, n, i, r) {
                    h(this, e), this.name = "posthog-js", this.setupOnce = function(e) {
                        e(function(e) {
                            if ("error" !== e.level || !t.__loaded) return e;
                            e.tags || (e.tags = {});
                            var o, s, a, u, l, c = t.config.ui_host || t.config.api_host;
                            e.tags["PostHog Person URL"] = c + "/person/" + t.get_distinct_id(), t.sessionRecordingStarted() && (e.tags["PostHog Recording URL"] = t.get_session_replay_url({
                                withTimestamp: !0
                            }));
                            var d = (null === (o = e.exception) || void 0 === o ? void 0 : o.values) || [],
                                h = {
                                    $exception_message: null === (s = d[0]) || void 0 === s ? void 0 : s.value,
                                    $exception_type: null === (a = d[0]) || void 0 === a ? void 0 : a.type,
                                    $exception_personURL: c + "/person/" + t.get_distinct_id(),
                                    $sentry_event_id: e.event_id,
                                    $sentry_exception: e.exception,
                                    $sentry_exception_message: null === (u = d[0]) || void 0 === u ? void 0 : u.value,
                                    $sentry_exception_type: null === (l = d[0]) || void 0 === l ? void 0 : l.type,
                                    $sentry_tags: e.tags
                                };
                            return n && i && (h.$sentry_url = (r || "https://sentry.io/organizations/") + n + "/issues/?project=" + i + "&query=" + e.event_id), t.capture("$exception", h), e
                        })
                    }
                }),
                nw = function(e) {
                    Promise && Promise.resolve || Q.warn("This browser does not have Promise support, and can not use the segment integration");
                    var t = function(t, n) {
                        t.event.userId || t.event.anonymousId === e.get_distinct_id() || e.reset(), t.event.userId && t.event.userId !== e.get_distinct_id() && (e.register({
                            distinct_id: t.event.userId
                        }), e.reloadFeatureFlags());
                        var i = e._calculate_event_properties(n, t.event.properties);
                        return t.event.properties = Object.assign({}, i, t.event.properties), t
                    };
                    return {
                        name: "PostHog JS",
                        type: "enrichment",
                        version: "1.0.0",
                        isLoaded: function() {
                            return !0
                        },
                        load: function() {
                            return Promise.resolve()
                        },
                        track: function(e) {
                            return t(e, e.event.event)
                        },
                        page: function(e) {
                            return t(e, "$pageview")
                        },
                        identify: function(e) {
                            return t(e, "$identify")
                        },
                        screen: function(e) {
                            return t(e, "$screen")
                        }
                    }
                },
                nS = function() {
                    function e(t) {
                        var n = this;
                        h(this, e), _(this, "_hasSeenPageView", !1), _(this, "_updateScrollData", function() {
                            n._pageViewData || (n._pageViewData = n._createPageViewData());
                            var e, t, i, r, o = n._pageViewData,
                                s = n._scrollY(),
                                a = n._scrollHeight(),
                                u = n._contentY(),
                                l = n._contentHeight();
                            o.lastScrollY = s, o.maxScrollY = Math.max(s, null !== (e = o.maxScrollY) && void 0 !== e ? e : 0), o.maxScrollHeight = Math.max(a, null !== (t = o.maxScrollHeight) && void 0 !== t ? t : 0), o.lastContentY = u, o.maxContentY = Math.max(u, null !== (i = o.maxContentY) && void 0 !== i ? i : 0), o.maxContentHeight = Math.max(l, null !== (r = o.maxContentHeight) && void 0 !== r ? r : 0)
                        }), this._instance = t
                    }
                    return p(e, [{
                        key: "_createPageViewData",
                        value: function() {
                            var e;
                            return {
                                pathname: null !== (e = null == V ? void 0 : V.location.pathname) && void 0 !== e ? e : ""
                            }
                        }
                    }, {
                        key: "doPageView",
                        value: function() {
                            var e, t;
                            return this._hasSeenPageView ? (t = this._pageViewData, this._pageViewData = this._createPageViewData()) : (this._hasSeenPageView = !0, t = void 0, this._pageViewData || (this._pageViewData = this._createPageViewData())), setTimeout(this._updateScrollData, 0), c({
                                $prev_pageview_pathname: null === (e = t) || void 0 === e ? void 0 : e.pathname
                            }, this._calculatePrevPageScrollProperties(t))
                        }
                    }, {
                        key: "doPageLeave",
                        value: function() {
                            var e = this._pageViewData;
                            return c({
                                $prev_pageview_pathname: null == e ? void 0 : e.pathname
                            }, this._calculatePrevPageScrollProperties(e))
                        }
                    }, {
                        key: "_calculatePrevPageScrollProperties",
                        value: function(e) {
                            if (!e || null == e.maxScrollHeight || null == e.lastScrollY || null == e.maxScrollY || null == e.maxContentHeight || null == e.lastContentY || null == e.maxContentY) return {};
                            var t = e.maxScrollHeight,
                                n = e.lastScrollY,
                                i = e.maxScrollY,
                                r = e.maxContentHeight,
                                o = e.lastContentY,
                                s = e.maxContentY;
                            return t = Math.ceil(t), n = Math.ceil(n), i = Math.ceil(i), r = Math.ceil(r), o = Math.ceil(o), s = Math.ceil(s), {
                                $prev_pageview_last_scroll: n,
                                $prev_pageview_last_scroll_percentage: t <= 1 ? 1 : nF(n / t, 0, 1),
                                $prev_pageview_max_scroll: i,
                                $prev_pageview_max_scroll_percentage: t <= 1 ? 1 : nF(i / t, 0, 1),
                                $prev_pageview_last_content: o,
                                $prev_pageview_last_content_percentage: r <= 1 ? 1 : nF(o / r, 0, 1),
                                $prev_pageview_max_content: s,
                                $prev_pageview_max_content_percentage: r <= 1 ? 1 : nF(s / r, 0, 1)
                            }
                        }
                    }, {
                        key: "startMeasuringScrollPosition",
                        value: function() {
                            null == V || V.addEventListener("scroll", this._updateScrollData, !0), null == V || V.addEventListener("scrollend", this._updateScrollData, !0), null == V || V.addEventListener("resize", this._updateScrollData)
                        }
                    }, {
                        key: "stopMeasuringScrollPosition",
                        value: function() {
                            null == V || V.removeEventListener("scroll", this._updateScrollData), null == V || V.removeEventListener("scrollend", this._updateScrollData), null == V || V.removeEventListener("resize", this._updateScrollData)
                        }
                    }, {
                        key: "_scrollElement",
                        value: function() {
                            if (!this._instance.config.scroll_root_selector) return null == V ? void 0 : V.document.documentElement;
                            var e, t = F(C(this._instance.config.scroll_root_selector) ? this._instance.config.scroll_root_selector : [this._instance.config.scroll_root_selector]);
                            try {
                                for (t.s(); !(e = t.n()).done;) {
                                    var n = e.value,
                                        i = null == V ? void 0 : V.document.querySelector(n);
                                    if (i) return i
                                }
                            } catch (e) {
                                t.e(e)
                            } finally {
                                t.f()
                            }
                        }
                    }, {
                        key: "_scrollHeight",
                        value: function() {
                            var e = this._scrollElement();
                            return e ? Math.max(0, e.scrollHeight - e.clientHeight) : 0
                        }
                    }, {
                        key: "_scrollY",
                        value: function() {
                            if (this._instance.config.scroll_root_selector) {
                                var e = this._scrollElement();
                                return e && e.scrollTop || 0
                            }
                            return V && (V.scrollY || V.pageYOffset || V.document.documentElement.scrollTop) || 0
                        }
                    }, {
                        key: "_contentHeight",
                        value: function() {
                            var e = this._scrollElement();
                            return (null == e ? void 0 : e.scrollHeight) || 0
                        }
                    }, {
                        key: "_contentY",
                        value: function() {
                            var e = this._scrollElement(),
                                t = (null == e ? void 0 : e.clientHeight) || 0;
                            return this._scrollY() + t
                        }
                    }]), e
                }();

            function nF(e, t, n) {
                return Math.max(t, Math.min(e, n))
            }
            var nP, nI, nx, nR, nE = {
                    icontains: function(e) {
                        return !!V && V.location.href.toLowerCase().indexOf(e.toLowerCase()) > -1
                    },
                    regex: function(e) {
                        var t;
                        return !!V && (t = V.location.href, !! function(e) {
                            try {
                                RegExp(e)
                            } catch (e) {
                                return !1
                            }
                            return !0
                        }(e) && RegExp(e).test(t))
                    },
                    exact: function(e) {
                        return (null == V ? void 0 : V.location.href) === e
                    }
                },
                nC = function() {
                    function e(t) {
                        h(this, e), this.instance = t
                    }
                    return p(e, [{
                        key: "getSurveys",
                        value: function(e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                i = this.instance.get_property(eL);
                            if (i && !n) return e(i);
                            this.instance._send_request("".concat(this.instance.config.api_host, "/api/surveys/?token=").concat(this.instance.config.token), {}, {
                                method: "GET"
                            }, function(n) {
                                var i, r = n.surveys || [];
                                return null === (i = t.instance.persistence) || void 0 === i || i.register(_({}, eL, r)), e(r)
                            })
                        }
                    }, {
                        key: "getActiveMatchingSurveys",
                        value: function(e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            this.getSurveys(function(n) {
                                return e(n.filter(function(e) {
                                    return !(!e.start_date || e.end_date)
                                }).filter(function(e) {
                                    if (!e.conditions) return !0;
                                    var t, n, i, r, o = null === (t = e.conditions) || void 0 === t || !t.url || nE[null !== (n = null === (i = e.conditions) || void 0 === i ? void 0 : i.urlMatchType) && void 0 !== n ? n : "icontains"](e.conditions.url),
                                        s = null === (r = e.conditions) || void 0 === r || !r.selector || (null == W ? void 0 : W.querySelector(e.conditions.selector));
                                    return o && s
                                }).filter(function(e) {
                                    if (!e.linked_flag_key && !e.targeting_flag_key) return !0;
                                    var n = !e.linked_flag_key || t.instance.featureFlags.isFeatureEnabled(e.linked_flag_key),
                                        i = !e.targeting_flag_key || t.instance.featureFlags.isFeatureEnabled(e.targeting_flag_key);
                                    return n && i
                                }))
                            }, n)
                        }
                    }]), e
                }(),
                nO = function() {
                    function e() {
                        var t = this;
                        h(this, e), _(this, "limits", {}), _(this, "checkForLimiting", function(e) {
                            try {
                                var n = e.responseText;
                                if (!n || !n.length) return;
                                (JSON.parse(n).quota_limited || []).forEach(function(e) {
                                    Q.info("[RateLimiter] ".concat(e || "events", " is quota limited.")), t.limits[e] = (new Date).getTime() + 6e4
                                })
                            } catch (e) {
                                return void Q.error(e)
                            }
                        })
                    }
                    return p(e, [{
                        key: "isRateLimited",
                        value: function(e) {
                            var t = this.limits[e || "events"] || !1;
                            return !1 !== t && (new Date).getTime() < t
                        }
                    }]), e
                }(),
                n$ = function() {
                    return c({
                        initialPathName: (null == V ? void 0 : V.location.pathname) || "",
                        referringDomain: tf.referringDomain()
                    }, tf.campaignParams())
                },
                nT = function() {
                    function e(t, n, i) {
                        var r = this;
                        h(this, e), _(this, "_onSessionIdCallback", function(e) {
                            var t = r._getStoredProps();
                            if (!t || t.sessionId !== e) {
                                var n = {
                                    sessionId: e,
                                    props: r._sessionSourceParamGenerator()
                                };
                                r._persistence.register(_({}, eU, n))
                            }
                        }), this._sessionIdManager = t, this._persistence = n, this._sessionSourceParamGenerator = i || n$, this._sessionIdManager.onSessionId(this._onSessionIdCallback)
                    }
                    return p(e, [{
                        key: "_getStoredProps",
                        value: function() {
                            return this._persistence.props[eU]
                        }
                    }, {
                        key: "getSessionProps",
                        value: function() {
                            var e, t = null === (e = this._getStoredProps()) || void 0 === e ? void 0 : e.props;
                            return t ? {
                                $client_session_initial_referring_host: t.referringDomain,
                                $client_session_initial_pathname: t.initialPathName,
                                $client_session_initial_utm_source: t.utm_source,
                                $client_session_initial_utm_campaign: t.utm_campaign,
                                $client_session_initial_utm_medium: t.utm_medium,
                                $client_session_initial_utm_content: t.utm_content,
                                $client_session_initial_utm_term: t.utm_term
                            } : {}
                        }
                    }]), e
                }(),
                nA = ["ahrefsbot", "ahrefssiteaudit", "applebot", "baiduspider", "bingbot", "bingpreview", "bot.htm", "bot.php", "crawler", "duckduckbot", "facebookexternal", "facebookcatalog", "gptbot", "http://yandex.com/bots", "hubspot", "ia_archiver", "linkedinbot", "mj12bot", "msnbot", "nessus", "petalbot", "pinterest", "prerender", "rogerbot", "screaming frog", "semrushbot", "sitebulb", "slurp", "turnitin", "twitterbot", "vercelbot", "yahoo! slurp", "yandexbot", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google"],
                nM = function(e, t) {
                    if (!e) return !1;
                    var n = e.toLowerCase();
                    return nA.concat(t || []).some(function(e) {
                        var t = e.toLowerCase();
                        return n.includes ? n.includes(t) : -1 !== n.indexOf(t)
                    })
                };
            (nW = nI || (nI = {}))[nW.INIT_MODULE = 0] = "INIT_MODULE", nW[nW.INIT_SNIPPET = 1] = "INIT_SNIPPET";
            var nD = function() {},
                nN = {},
                nq = "posthog",
                nB = (null == V ? void 0 : V.XMLHttpRequest) && "withCredentials" in new XMLHttpRequest,
                nL = !nB && -1 === (null == G ? void 0 : G.indexOf("MSIE")) && -1 === (null == G ? void 0 : G.indexOf("Mozilla")),
                nj = function() {
                    var e, t, n;
                    return {
                        api_host: "https://app.posthog.com",
                        api_method: "POST",
                        api_transport: "XHR",
                        ui_host: null,
                        token: "",
                        autocapture: !0,
                        rageclick: !0,
                        cross_subdomain_cookie: !!D(n = null == (t = null == W ? void 0 : W.location) ? void 0 : t.hostname) && "herokuapp.com" !== n.split(".").slice(-2).join("."),
                        persistence: "localStorage+cookie",
                        persistence_name: "",
                        cookie_name: "",
                        loaded: nD,
                        store_google: !0,
                        custom_campaign_params: [],
                        custom_blocked_useragents: [],
                        save_referrer: !0,
                        capture_pageview: !0,
                        capture_pageleave: !0,
                        debug: !1,
                        verbose: !1,
                        cookie_expiration: 365,
                        upgrade: !1,
                        disable_session_recording: !1,
                        disable_persistence: !1,
                        disable_cookie: !1,
                        enable_recording_console_log: void 0,
                        secure_cookie: "https:" === (null == V || null === (e = V.location) || void 0 === e ? void 0 : e.protocol),
                        ip: !0,
                        opt_out_capturing_by_default: !1,
                        opt_out_persistence_by_default: !1,
                        opt_out_useragent_filter: !1,
                        opt_out_capturing_persistence_type: "localStorage",
                        opt_out_capturing_cookie_prefix: null,
                        opt_in_site_apps: !1,
                        property_blacklist: [],
                        respect_dnt: !1,
                        sanitize_properties: null,
                        xhr_headers: {},
                        inapp_protocol: "//",
                        inapp_link_new_window: !1,
                        request_batching: !0,
                        properties_string_max_length: 65535,
                        session_recording: {},
                        mask_all_element_attributes: !1,
                        mask_all_text: !1,
                        advanced_disable_decide: !1,
                        advanced_disable_feature_flags: !1,
                        advanced_disable_feature_flags_on_first_load: !1,
                        advanced_disable_toolbar_metrics: !1,
                        on_xhr_error: function(e) {
                            var t = "Bad HTTP status: " + e.status + " " + e.statusText;
                            Q.error(t)
                        },
                        get_device_id: function(e) {
                            return e
                        },
                        _onCapture: nD,
                        capture_performance: void 0,
                        name: "posthog",
                        callback_fn: "posthog._jsc",
                        bootstrap: {},
                        disable_compression: !1,
                        session_idle_timeout_seconds: 1800
                    }
                },
                nH = function(e, t, n, i) {
                    var r, o = n !== nq && nR ? n ? nR[n] : void 0 : nR,
                        s = {
                            initComplete: !1,
                            syncCode: !1
                        },
                        a = function(e) {
                            return function(t) {
                                s[e] || (s[e] = !0, s.initComplete && s.syncCode && (null == i || i(t)))
                            }
                        };
                    if (o && nx === nI.INIT_MODULE) r = o;
                    else {
                        if (o && !C(o)) return void Q.error("You have already initialized " + n);
                        r = new nU
                    }
                    return r._init(e, t, n, a("initComplete")), r.toolbar.maybeLoadToolbar(), r.sessionRecording = new tI(r), r.sessionRecording.startRecordingIfEnabled(), r.config.disable_scroll_properties || r.pageViewManager.startMeasuringScrollPosition(), r.__autocapture = r.config.autocapture, ez._setIsAutocaptureEnabled(r), ez._isAutocaptureEnabled && (r.__autocapture = r.config.autocapture, ez.enabledForProject(r.config.token, 100, 100) ? ez.isBrowserSupported() ? ez.init(r) : (r.__autocapture = !1, Q.info("Disabling Automatic Event Collection because this browser is not supported")) : (r.__autocapture = !1, Q.info("Not in active bucket: disabling Automatic Event Collection."))), P.DEBUG = P.DEBUG || r.config.debug, !M(o) && C(o) && (r._execute_array.call(r.people, o.people), r._execute_array(o)), a("syncCode")(r), r
                },
                nV = function() {
                    function e() {
                        h(this, e), _(this, "__forceAllowLocalhost", !1)
                    }
                    return p(e, [{
                        key: "_forceAllowLocalhost",
                        get: function() {
                            return this.__forceAllowLocalhost
                        },
                        set: function(e) {
                            Q.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = e
                        }
                    }]), e
                }(),
                nU = function() {
                    function e() {
                        var t = this;
                        h(this, e), _(this, "webPerformance", new nV), this.config = nj(), this.compression = {}, this.decideEndpointWasHit = !1, this.SentryIntegration = nk, this.segmentIntegration = function() {
                            return nw(t)
                        }, this.__captureHooks = [], this.__request_queue = [], this.__loaded = !1, this.__loaded_recorder_version = void 0, this.__autocapture = void 0, this._jsc = function() {}, this.analyticsDefaultEndpoint = "/e/", this.elementsChainAsString = !1, this.featureFlags = new eK(this), this.toolbar = new tO(this), this.pageViewManager = new nS(this), this.surveys = new nC(this), this.rateLimiter = new nO, this.people = {
                            set: function(e, n, i) {
                                var r = D(e) ? _({}, e, n) : e;
                                t.setPersonProperties(r), null == i || i({})
                            },
                            set_once: function(e, n, i) {
                                var r = D(e) ? _({}, e, n) : e;
                                t.setPersonProperties(void 0, r), null == i || i({})
                            }
                        }
                    }
                    return p(e, [{
                        key: "init",
                        value: function(e, t, n) {
                            if (M(n)) Q.critical("You must name your new library: init(token, config, name)");
                            else {
                                if (n !== nq) {
                                    var i = nH(e, t, n, function(e) {
                                        nR[n] = e, e._loaded()
                                    });
                                    return nR[n] = i, i
                                }
                                Q.critical("You must initialize the main posthog object right after you include the PostHog js snippet")
                            }
                        }
                    }, {
                        key: "_init",
                        value: function(e) {
                            var t, n, i, r = this,
                                o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                s = arguments.length > 2 ? arguments[2] : void 0,
                                a = arguments.length > 3 ? arguments[3] : void 0;
                            this.__loaded = !0, this.config = {}, this._triggered_notifs = [];
                            var u, l = {
                                    segmentRegister: !1,
                                    syncCode: !1
                                },
                                d = function(e) {
                                    return function() {
                                        l[e] || (l[e] = !0, l.segmentRegister && l.syncCode && (null == a || a(r)))
                                    }
                                };
                            if (this.set_config(ee({}, nj(), o, {
                                    name: s,
                                    token: e,
                                    callback_fn: (s === nq ? s : nq + "." + s) + "._jsc"
                                })), this._jsc = function() {}, (null != V && null !== (t = V.rrweb) && void 0 !== t && t.record || null != V && V.rrwebRecord) && (this.__loaded_recorder_version = null == V || null === (u = V.rrweb) || void 0 === u ? void 0 : u.version), this.persistence = new t_(this.config), this._requestQueue = new tH(this._handle_queued_event.bind(this)), this._retryQueue = new ny(this.config.on_xhr_error, this.rateLimiter), this.__captureHooks = [], this.__request_queue = [], this.sessionManager = new nb(this.config, this.persistence), this.sessionPropsManager = new nT(this.sessionManager, this.persistence), this.sessionPersistence = "sessionStorage" === this.config.persistence ? this.persistence : new t_(c(c({}, this.config), {}, {
                                    persistence: "sessionStorage"
                                })), this._gdpr_init(), o.segment ? (this.config.get_device_id = function() {
                                    return o.segment.user().anonymousId()
                                }, o.segment.user().id() && (this.register({
                                    distinct_id: o.segment.user().id()
                                }), this.persistence.set_user_state("identified")), o.segment.register(this.segmentIntegration()).then(d("segmentRegister"))) : d("segmentRegister")(), void 0 !== (null === (n = o.bootstrap) || void 0 === n ? void 0 : n.distinctID)) {
                                var h, f, p = this.config.get_device_id(e8()),
                                    _ = null !== (h = o.bootstrap) && void 0 !== h && h.isIdentifiedID ? p : o.bootstrap.distinctID;
                                this.persistence.set_user_state(null !== (f = o.bootstrap) && void 0 !== f && f.isIdentifiedID ? "identified" : "anonymous"), this.register({
                                    distinct_id: o.bootstrap.distinctID,
                                    $device_id: _
                                })
                            }
                            if (this._hasBootstrappedFeatureFlags()) {
                                var g, v, m = Object.keys((null === (g = o.bootstrap) || void 0 === g ? void 0 : g.featureFlags) || {}).filter(function(e) {
                                        var t, n;
                                        return !(null === (t = o.bootstrap) || void 0 === t || null === (n = t.featureFlags) || void 0 === n || !n[e])
                                    }).reduce(function(e, t) {
                                        var n, i;
                                        return e[t] = (null === (n = o.bootstrap) || void 0 === n || null === (i = n.featureFlags) || void 0 === i ? void 0 : i[t]) || !1, e
                                    }, {}),
                                    y = Object.keys((null === (v = o.bootstrap) || void 0 === v ? void 0 : v.featureFlagPayloads) || {}).filter(function(e) {
                                        return m[e]
                                    }).reduce(function(e, t) {
                                        var n, i, r, s;
                                        return null !== (n = o.bootstrap) && void 0 !== n && null !== (i = n.featureFlagPayloads) && void 0 !== i && i[t] && (e[t] = null === (r = o.bootstrap) || void 0 === r || null === (s = r.featureFlagPayloads) || void 0 === s ? void 0 : s[t]), e
                                    }, {});
                                this.featureFlags.receivedFeatureFlags({
                                    featureFlags: m,
                                    featureFlagPayloads: y
                                })
                            }
                            if (!this.get_distinct_id()) {
                                var b = this.config.get_device_id(e8());
                                this.register_once({
                                    distinct_id: b,
                                    $device_id: b
                                }, ""), this.persistence.set_user_state("anonymous")
                            }
                            null == V || null === (i = V.addEventListener) || void 0 === i || i.call(V, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this)), d("syncCode")()
                        }
                    }, {
                        key: "_afterDecideResponse",
                        value: function(e) {
                            var t;
                            if (this.compression = {}, e.supportedCompression && !this.config.disable_compression) {
                                var n, i = {},
                                    r = F(e.supportedCompression);
                                try {
                                    for (r.s(); !(n = r.n()).done;) i[n.value] = !0
                                } catch (e) {
                                    r.e(e)
                                } finally {
                                    r.f()
                                }
                                this.compression = i
                            }
                            null !== (t = e.analytics) && void 0 !== t && t.endpoint && (this.analyticsDefaultEndpoint = e.analytics.endpoint), e.elementsChainAsString && (this.elementsChainAsString = e.elementsChainAsString)
                        }
                    }, {
                        key: "_loaded",
                        value: function() {
                            var e = this.config.advanced_disable_decide;
                            e || this.featureFlags.setReloadingPaused(!0);
                            try {
                                this.config.loaded(this)
                            } catch (e) {
                                Q.critical("`loaded` function failed", e)
                            }
                            this._start_queue_if_opted_in(), this.config.capture_pageview && W && this.capture("$pageview", {
                                title: W.title
                            }, {
                                send_instantly: !0
                            }), e || (new tx(this).call(), this.featureFlags.resetRequestQueue())
                        }
                    }, {
                        key: "_start_queue_if_opted_in",
                        value: function() {
                            var e;
                            this.has_opted_out_capturing() || this.config.request_batching && (null === (e = this._requestQueue) || void 0 === e || e.poll())
                        }
                    }, {
                        key: "_dom_loaded",
                        value: function() {
                            var e = this;
                            this.has_opted_out_capturing() || K(this.__request_queue, function(t) {
                                e._send_request.apply(e, k(t))
                            }), this.__request_queue = [], this._start_queue_if_opted_in()
                        }
                    }, {
                        key: "_prepare_callback",
                        value: function(e, t) {
                            if (M(e)) return null;
                            if (nB) return function(n) {
                                e(n, t)
                            };
                            var n = this._jsc,
                                i = "" + Math.floor(1e8 * Math.random()),
                                r = this.config.callback_fn + "[" + i + "]";
                            return n[i] = function(r) {
                                delete n[i], e(r, t)
                            }, r
                        }
                    }, {
                        key: "_handle_unload",
                        value: function() {
                            var e, t;
                            this.config.request_batching ? (this.config.capture_pageview && this.config.capture_pageleave && this.capture("$pageleave"), null === (e = this._requestQueue) || void 0 === e || e.unload(), null === (t = this._retryQueue) || void 0 === t || t.unload()) : this.config.capture_pageview && this.config.capture_pageleave && this.capture("$pageleave", null, {
                                transport: "sendBeacon"
                            })
                        }
                    }, {
                        key: "_handle_queued_event",
                        value: function(e, t, n) {
                            var i = JSON.stringify(t);
                            this.__compress_and_send_json_request(e, i, n || nN, nD)
                        }
                    }, {
                        key: "__compress_and_send_json_request",
                        value: function(e, t, n, i) {
                            var r, o, s, a, u, l, d, h = b((this.compression[t4.GZipJS] ? t4.GZipJS : t4.Base64) === t4.GZipJS ? [(r = function(e, t) {
                                    var n = e.length;
                                    if (!t && "undefined" != typeof TextEncoder) return (new TextEncoder).encode(e);
                                    for (var i = new tV(e.length + (e.length >>> 1)), r = 0, o = function(e) {
                                            i[r++] = e
                                        }, s = 0; s < n; ++s) {
                                        if (r + 5 > i.length) {
                                            var a = new tV(r + 8 + (n - s << 1));
                                            a.set(i), i = a
                                        }
                                        var u = e.charCodeAt(s);
                                        u < 128 || t ? o(u) : u < 2048 ? (o(192 | u >>> 6), o(128 | 63 & u)) : u > 55295 && u < 57344 ? (o(240 | (u = 65536 + (1047552 & u) | 1023 & e.charCodeAt(++s)) >>> 18), o(128 | u >>> 12 & 63), o(128 | u >>> 6 & 63), o(128 | 63 & u)) : (o(224 | u >>> 12), o(128 | u >>> 6 & 63), o(128 | 63 & u))
                                    }
                                    return nt(i, 0, r)
                                }(t), o = {
                                    mtime: 0
                                }, s = nf(), a = r.length, s.p(r), d = (u = 10 + (o.filename && o.filename.length + 1 || 0), l = function(e, t, n, i, r, o) {
                                    var s = e.length,
                                        a = new tV(i + s + 5 * (1 + Math.floor(s / 7e3)) + r),
                                        u = a.subarray(i, a.length - r),
                                        l = 0;
                                    if (!t || s < 8)
                                        for (var c = 0; c <= s; c += 65535) {
                                            var d = c + 65535;
                                            d < s ? l = nu(u, l, e.subarray(c, d)) : (u[c] = o, l = nu(u, l, e.subarray(c, s)))
                                        } else {
                                            for (var h = nc[t - 1], f = h >>> 13, p = 8191 & h, _ = (1 << n) - 1, g = new tU(32768), v = new tU(_ + 1), m = Math.ceil(n / 3), y = 2 * m, b = function(t) {
                                                    return (e[t] ^ e[t + 1] << m ^ e[t + 2] << y) & _
                                                }, k = new tW(25e3), w = new tU(288), S = new tU(32), F = 0, P = 0, I = (c = 0, 0), x = 0, R = 0; c < s; ++c) {
                                                var E = b(c),
                                                    C = 32767 & c,
                                                    O = v[E];
                                                if (g[C] = O, v[E] = C, x <= c) {
                                                    var $ = s - c;
                                                    if ((F > 7e3 || I > 24576) && $ > 423) {
                                                        l = nl(e, u, 0, k, w, S, P, I, R, c - R, l), I = F = P = 0, R = c;
                                                        for (var T = 0; T < 286; ++T) w[T] = 0;
                                                        for (T = 0; T < 30; ++T) S[T] = 0
                                                    }
                                                    var A = 2,
                                                        M = 0,
                                                        D = p,
                                                        N = C - O & 32767;
                                                    if ($ > 2 && E == b(c - N))
                                                        for (var q = Math.min(f, $) - 1, B = Math.min(32767, c), L = Math.min(258, $); N <= B && --D && C != O;) {
                                                            if (e[c + A] == e[c + A - N]) {
                                                                for (var j = 0; j < L && e[c + j] == e[c + j - N]; ++j);
                                                                if (j > A) {
                                                                    if (A = j, M = N, j > q) break;
                                                                    var H = Math.min(N, j - 2),
                                                                        V = 0;
                                                                    for (T = 0; T < H; ++T) {
                                                                        var U = c - N + T + 32768 & 32767,
                                                                            W = U - g[U] + 32768 & 32767;
                                                                        W > V && (V = W, O = U)
                                                                    }
                                                                }
                                                            }
                                                            N += (C = O) - (O = g[C]) + 32768 & 32767
                                                        }
                                                    if (M) {
                                                        k[I++] = 268435456 | tK[A] << 18 | tZ[M];
                                                        var G = 31 & tK[A],
                                                            z = 31 & tZ[M];
                                                        P += tG[G] + tz[z], ++w[257 + G], ++S[z], x = c + A, ++F
                                                    } else k[I++] = e[c], ++w[e[c]]
                                                }
                                            }
                                            l = nl(e, u, o, k, w, S, P, I, R, c - R, l), o || (l = nu(u, l, nd))
                                        }
                                    return nt(a, 0, i + ne(l) + r)
                                }(r, null == o.level ? 6 : o.level, null == o.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(r.length)))) : 12 + o.mem, u, 8, !0)).length, n_(l, o), np(l, d - 8, s.d()), np(l, d - 4, a), l), c(c({}, n), {}, {
                                    blob: !0,
                                    urlQueryArgs: {
                                        compression: t4.GZipJS
                                    }
                                })] : [{
                                    data: eu(t)
                                }, n], 2),
                                f = h[0],
                                p = h[1];
                            this._send_request(e, f, p, i)
                        }
                    }, {
                        key: "_send_request",
                        value: function(e, t, n, i) {
                            if (this.__loaded && this._retryQueue && !this.rateLimiter.isRateLimited(n._batchKey)) {
                                if (nL) this.__request_queue.push([e, t, n, i]);
                                else {
                                    n = ee({
                                        method: this.config.api_method,
                                        transport: this.config.api_transport,
                                        verbose: this.config.verbose
                                    }, n || {}), nB || (n.method = "GET");
                                    var r = V && "sendBeacon" in V.navigator && "sendBeacon" === n.transport;
                                    if (e = ng(e, n.urlQueryArgs || {}, {
                                            ip: this.config.ip
                                        }), r) try {
                                        null == V || V.navigator.sendBeacon(e, nv(t, c(c({}, n), {}, {
                                            sendBeacon: !0
                                        })))
                                    } catch (e) {} else if (nB || !W) try {
                                        nm({
                                            url: e,
                                            data: t,
                                            headers: this.config.xhr_headers,
                                            options: n,
                                            callback: i,
                                            retriesPerformedSoFar: 0,
                                            retryQueue: this._retryQueue,
                                            onXHRError: this.config.on_xhr_error,
                                            onResponse: this.rateLimiter.checkForLimiting
                                        })
                                    } catch (e) {
                                        Q.error(e)
                                    } else {
                                        var o, s = W.createElement("script");
                                        s.type = "text/javascript", s.async = !0, s.defer = !0, s.src = e;
                                        var a = W.getElementsByTagName("script")[0];
                                        null === (o = a.parentNode) || void 0 === o || o.insertBefore(s, a)
                                    }
                                }
                            }
                        }
                    }, {
                        key: "_execute_array",
                        value: function(e) {
                            var t, n = this,
                                i = [],
                                r = [],
                                o = [];
                            K(e, function(e) {
                                e && (C(t = e[0]) ? o.push(e) : $(e) ? e.call(n) : C(e) && "alias" === t ? i.push(e) : C(e) && -1 !== t.indexOf("capture") && $(n[t]) ? o.push(e) : r.push(e))
                            });
                            var s = function(e, t) {
                                K(e, function(e) {
                                    if (C(e[0])) {
                                        var n = t;
                                        Z(e, function(e) {
                                            n = n[e[0]].apply(n, e.slice(1))
                                        })
                                    } else this[e[0]].apply(this, e.slice(1))
                                }, t)
                            };
                            s(i, this), s(r, this), s(o, this)
                        }
                    }, {
                        key: "_hasBootstrappedFeatureFlags",
                        value: function() {
                            var e, t;
                            return (null === (e = this.config.bootstrap) || void 0 === e ? void 0 : e.featureFlags) && Object.keys(null === (t = this.config.bootstrap) || void 0 === t ? void 0 : t.featureFlags).length > 0 || !1
                        }
                    }, {
                        key: "push",
                        value: function(e) {
                            this._execute_array([e])
                        }
                    }, {
                        key: "capture",
                        value: function(e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : nN;
                            if (!this.__loaded || !this.sessionPersistence || !this._requestQueue) return Q.uninitializedWarning("posthog.capture");
                            if (! function(e) {
                                    var t = !1;
                                    try {
                                        var n = e.config.token,
                                            i = e.config.respect_dnt,
                                            r = e.config.opt_out_capturing_persistence_type,
                                            o = e.config.opt_out_capturing_cookie_prefix || void 0,
                                            s = e.config.window;
                                        n && (t = tM(n, {
                                            respectDnt: i,
                                            persistenceType: r,
                                            persistencePrefix: o,
                                            window: s
                                        }))
                                    } catch (e) {
                                        Q.error("Unexpected error when checking capturing opt-out status: " + e)
                                    }
                                    return t
                                }(this)) {
                                var i = (n = n || nN).transport;
                                if (i && (n.transport = i), !M(e) && D(e)) {
                                    if (!G || this.config.opt_out_useragent_filter || !nM(G, this.config.custom_blocked_useragents)) {
                                        this.sessionPersistence.update_search_keyword(), this.config.store_google && this.sessionPersistence.update_campaign_params(), this.config.save_referrer && this.sessionPersistence.update_referrer_info();
                                        var r, o, s, a, u = {
                                            uuid: e8(),
                                            event: e,
                                            properties: this._calculate_event_properties(e, t || {})
                                        };
                                        "$identify" === e && (u.$set = n.$set, u.$set_once = n.$set_once), (r = u, o = n._noTruncate ? null : this.config.properties_string_max_length, s = function(e, t) {
                                            return t && ea.indexOf(t) > -1 ? e : D(e) && !N(o) ? e.slice(0, o) : e
                                        }, a = new Set, u = function e(t, n) {
                                            var i;
                                            return t !== Object(t) ? s ? s(t, n) : t : a.has(t) ? void 0 : (a.add(t), C(t) ? (i = [], K(t, function(t) {
                                                i.push(e(t))
                                            })) : (i = {}, Z(t, function(t, n) {
                                                a.has(t) || (i[n] = e(t, n))
                                            })), i)
                                        }(r)).timestamp = n.timestamp || new Date;
                                        var l = c(c({}, u.properties.$set), u.$set);
                                        A(l) || this.setPersonPropertiesForFlags(l), Q.info("send", u);
                                        var d = JSON.stringify(u),
                                            h = this.config.api_host + (n.endpoint || this.analyticsDefaultEndpoint),
                                            f = n !== nN;
                                        return !this.config.request_batching || f && !n._batchKey || n.send_instantly ? this.__compress_and_send_json_request(h, d, n) : this._requestQueue.enqueue(h, u, n), this._invokeCaptureHooks(e, u), u
                                    }
                                } else Q.error("No event name provided to posthog.capture")
                            }
                        }
                    }, {
                        key: "_addCaptureHook",
                        value: function(e) {
                            this.__captureHooks.push(e)
                        }
                    }, {
                        key: "_invokeCaptureHooks",
                        value: function(e, t) {
                            this.config._onCapture(e, t), Z(this.__captureHooks, function(t) {
                                return t(e)
                            })
                        }
                    }, {
                        key: "_calculate_event_properties",
                        value: function(e, t) {
                            if (!this.persistence || !this.sessionPersistence) return t;
                            var n = this.persistence.remove_event_timer(e),
                                i = c({}, t);
                            if (i.token = this.config.token, "$snapshot" === e) {
                                var r = c(c({}, this.persistence.properties()), this.sessionPersistence.properties());
                                return i.distinct_id = r.distinct_id, i
                            }
                            var o = tf.properties();
                            if (this.sessionManager) {
                                var s = this.sessionManager.checkAndGetSessionAndWindowId(),
                                    a = s.sessionId,
                                    u = s.windowId;
                                i.$session_id = a, i.$window_id = u
                            }
                            if (this.sessionPropsManager && this.config.__preview_send_client_session_params && ("$pageview" === e || "$pageleave" === e || "$autocapture" === e) && (i = ee(i, this.sessionPropsManager.getSessionProps())), !this.config.disable_scroll_properties) {
                                var l = {};
                                "$pageview" === e ? l = this.pageViewManager.doPageView() : "$pageleave" === e && (l = this.pageViewManager.doPageLeave()), i = ee(i, l)
                            }
                            if ("$pageview" === e && W && (i.title = W.title), "$performance_event" === e) {
                                var d = this.persistence.properties();
                                return i.distinct_id = d.distinct_id, i.$current_url = o.$current_url, i
                            }
                            if (!M(n)) {
                                var h = (new Date).getTime() - n;
                                i.$duration = parseFloat((h / 1e3).toFixed(3))
                            }
                            G && this.config.opt_out_useragent_filter && (i.$browser_type = nM(G, this.config.custom_blocked_useragents) ? "bot" : "browser"), i = ee({}, tf.properties(), this.persistence.properties(), this.sessionPersistence.properties(), i);
                            var f = this.config.property_blacklist;
                            C(f) ? Z(f, function(e) {
                                delete i[e]
                            }) : Q.error("Invalid value for property_blacklist config: " + f);
                            var p = this.config.sanitize_properties;
                            return p && (i = p(i, e)), i
                        }
                    }, {
                        key: "register",
                        value: function(e, t) {
                            var n;
                            null === (n = this.persistence) || void 0 === n || n.register(e, t)
                        }
                    }, {
                        key: "register_once",
                        value: function(e, t, n) {
                            var i;
                            null === (i = this.persistence) || void 0 === i || i.register_once(e, t, n)
                        }
                    }, {
                        key: "register_for_session",
                        value: function(e) {
                            var t;
                            null === (t = this.sessionPersistence) || void 0 === t || t.register(e)
                        }
                    }, {
                        key: "unregister",
                        value: function(e) {
                            var t;
                            null === (t = this.persistence) || void 0 === t || t.unregister(e)
                        }
                    }, {
                        key: "unregister_for_session",
                        value: function(e) {
                            var t;
                            null === (t = this.sessionPersistence) || void 0 === t || t.unregister(e)
                        }
                    }, {
                        key: "_register_single",
                        value: function(e, t) {
                            this.register(_({}, e, t))
                        }
                    }, {
                        key: "getFeatureFlag",
                        value: function(e, t) {
                            return this.featureFlags.getFeatureFlag(e, t)
                        }
                    }, {
                        key: "getFeatureFlagPayload",
                        value: function(e) {
                            var t = this.featureFlags.getFeatureFlagPayload(e);
                            try {
                                return JSON.parse(t)
                            } catch (e) {
                                return t
                            }
                        }
                    }, {
                        key: "isFeatureEnabled",
                        value: function(e, t) {
                            return this.featureFlags.isFeatureEnabled(e, t)
                        }
                    }, {
                        key: "reloadFeatureFlags",
                        value: function() {
                            this.featureFlags.reloadFeatureFlags()
                        }
                    }, {
                        key: "updateEarlyAccessFeatureEnrollment",
                        value: function(e, t) {
                            this.featureFlags.updateEarlyAccessFeatureEnrollment(e, t)
                        }
                    }, {
                        key: "getEarlyAccessFeatures",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            return this.featureFlags.getEarlyAccessFeatures(e, t)
                        }
                    }, {
                        key: "onFeatureFlags",
                        value: function(e) {
                            return this.featureFlags.onFeatureFlags(e)
                        }
                    }, {
                        key: "onSessionId",
                        value: function(e) {
                            var t, n;
                            return null !== (t = null === (n = this.sessionManager) || void 0 === n ? void 0 : n.onSessionId(e)) && void 0 !== t ? t : function() {}
                        }
                    }, {
                        key: "getSurveys",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            this.surveys.getSurveys(e, t)
                        }
                    }, {
                        key: "getActiveMatchingSurveys",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            this.surveys.getActiveMatchingSurveys(e, t)
                        }
                    }, {
                        key: "identify",
                        value: function(e, t, n) {
                            if (!this.__loaded || !this.persistence) return Q.uninitializedWarning("posthog.identify");
                            if (e) {
                                if (["distinct_id", "distinctid"].includes(e.toLowerCase())) Q.critical('The string "'.concat(e, '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'));
                                else {
                                    var i = this.get_distinct_id();
                                    this.register({
                                        $user_id: e
                                    }), this.get_property("$device_id") || this.register_once({
                                        $had_persisted_distinct_id: !0,
                                        $device_id: i
                                    }, ""), e !== i && e !== this.get_property(ex) && (this.unregister(ex), this.register({
                                        distinct_id: e
                                    }));
                                    var r = "anonymous" === this.persistence.get_user_state();
                                    e !== i && r ? (this.persistence.set_user_state("identified"), this.setPersonPropertiesForFlags(t || {}, !1), this.capture("$identify", {
                                        distinct_id: e,
                                        $anon_distinct_id: i
                                    }, {
                                        $set: t || {},
                                        $set_once: n || {}
                                    }), this.featureFlags.setAnonymousDistinctId(i)) : (t || n) && this.setPersonProperties(t, n), e !== i && (this.reloadFeatureFlags(), this.unregister(ej))
                                }
                            } else Q.error("Unique user id has not been set in posthog.identify")
                        }
                    }, {
                        key: "setPersonProperties",
                        value: function(e, t) {
                            (e || t) && (this.setPersonPropertiesForFlags(e || {}), this.capture("$set", {
                                $set: e || {},
                                $set_once: t || {}
                            }))
                        }
                    }, {
                        key: "group",
                        value: function(e, t, n) {
                            if (e && t) {
                                var i = this.getGroups();
                                i[e] !== t && this.resetGroupPropertiesForFlags(e), this.register({
                                    $groups: c(c({}, i), {}, _({}, e, t))
                                }), n && (this.capture("$groupidentify", {
                                    $group_type: e,
                                    $group_key: t,
                                    $group_set: n
                                }), this.setGroupPropertiesForFlags(_({}, e, n))), i[e] === t || n || this.reloadFeatureFlags()
                            } else Q.error("posthog.group requires a group type and group key")
                        }
                    }, {
                        key: "resetGroups",
                        value: function() {
                            this.register({
                                $groups: {}
                            }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags()
                        }
                    }, {
                        key: "setPersonPropertiesForFlags",
                        value: function(e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            this.featureFlags.setPersonPropertiesForFlags(e, t)
                        }
                    }, {
                        key: "resetPersonPropertiesForFlags",
                        value: function() {
                            this.featureFlags.resetPersonPropertiesForFlags()
                        }
                    }, {
                        key: "setGroupPropertiesForFlags",
                        value: function(e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            this.featureFlags.setGroupPropertiesForFlags(e, t)
                        }
                    }, {
                        key: "resetGroupPropertiesForFlags",
                        value: function(e) {
                            this.featureFlags.resetGroupPropertiesForFlags(e)
                        }
                    }, {
                        key: "reset",
                        value: function(e) {
                            if (!this.__loaded) return Q.uninitializedWarning("posthog.reset");
                            var t, n, i, r, o = this.get_property("$device_id");
                            null === (t = this.persistence) || void 0 === t || t.clear(), null === (n = this.sessionPersistence) || void 0 === n || n.clear(), null === (i = this.persistence) || void 0 === i || i.set_user_state("anonymous"), null === (r = this.sessionManager) || void 0 === r || r.resetSessionId();
                            var s = this.config.get_device_id(e8());
                            this.register_once({
                                distinct_id: s,
                                $device_id: e ? s : o
                            }, "")
                        }
                    }, {
                        key: "get_distinct_id",
                        value: function() {
                            return this.get_property("distinct_id")
                        }
                    }, {
                        key: "getGroups",
                        value: function() {
                            return this.get_property("$groups") || {}
                        }
                    }, {
                        key: "get_session_id",
                        value: function() {
                            var e, t;
                            return null !== (e = null === (t = this.sessionManager) || void 0 === t ? void 0 : t.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== e ? e : ""
                        }
                    }, {
                        key: "get_session_replay_url",
                        value: function(e) {
                            if (!this.sessionManager) return "";
                            var t = this.config.ui_host || this.config.api_host,
                                n = this.sessionManager.checkAndGetSessionAndWindowId(!0),
                                i = n.sessionId,
                                r = n.sessionStartTimestamp,
                                o = t + "/replay/" + i;
                            if (null != e && e.withTimestamp && r) {
                                var s, a = null !== (s = e.timestampLookBack) && void 0 !== s ? s : 10;
                                if (!r) return o;
                                var u = Math.max(Math.floor(((new Date).getTime() - r) / 1e3) - a, 0);
                                o += "?t=".concat(u)
                            }
                            return o
                        }
                    }, {
                        key: "alias",
                        value: function(e, t) {
                            return e === this.get_property(eI) ? (Q.critical("Attempting to create alias for existing People user - aborting."), -2) : (M(t) && (t = this.get_distinct_id()), e !== t ? (this._register_single(ex, e), this.capture("$create_alias", {
                                alias: e,
                                distinct_id: t
                            })) : (Q.warn("alias matches current distinct_id - skipping api call."), this.identify(e), -1))
                        }
                    }, {
                        key: "set_config",
                        value: function(e) {
                            var t, n, i = c({}, this.config);
                            T(e) && (ee(this.config, e), this.config.persistence_name || (this.config.persistence_name = this.config.cookie_name), this.config.disable_persistence || (this.config.disable_persistence = this.config.disable_cookie), this.config.api_host = this.config.api_host.replace(/\/$/, ""), "https://us.posthog.com" === this.config.api_host && (this.config.api_host = "https://app.posthog.com"), null === (t = this.persistence) || void 0 === t || t.update_config(this.config), null === (n = this.sessionPersistence) || void 0 === n || n.update_config(this.config), tn.is_supported() && "true" === tn.get("ph_debug") && (this.config.debug = !0), this.config.debug && (P.DEBUG = !0), this.sessionRecording && !M(e.disable_session_recording) && i.disable_session_recording !== e.disable_session_recording && (e.disable_session_recording ? this.sessionRecording.stopRecording() : this.sessionRecording.startRecordingIfEnabled()))
                        }
                    }, {
                        key: "startSessionRecording",
                        value: function() {
                            this.set_config({
                                disable_session_recording: !1
                            })
                        }
                    }, {
                        key: "stopSessionRecording",
                        value: function() {
                            this.set_config({
                                disable_session_recording: !0
                            })
                        }
                    }, {
                        key: "sessionRecordingStarted",
                        value: function() {
                            var e;
                            return !(null === (e = this.sessionRecording) || void 0 === e || !e.started)
                        }
                    }, {
                        key: "loadToolbar",
                        value: function(e) {
                            return this.toolbar.loadToolbar(e)
                        }
                    }, {
                        key: "get_property",
                        value: function(e) {
                            var t;
                            return null === (t = this.persistence) || void 0 === t ? void 0 : t.props[e]
                        }
                    }, {
                        key: "getSessionProperty",
                        value: function(e) {
                            var t;
                            return null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.props[e]
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            var e, t = null !== (e = this.config.name) && void 0 !== e ? e : nq;
                            return t !== nq && (t = nq + "." + t), t
                        }
                    }, {
                        key: "_gdpr_init",
                        value: function() {
                            "localStorage" === this.config.opt_out_capturing_persistence_type && tn.is_supported() && (!this.has_opted_in_capturing() && this.has_opted_in_capturing({
                                persistence_type: "cookie"
                            }) && this.opt_in_capturing({
                                enable_persistence: !1
                            }), !this.has_opted_out_capturing() && this.has_opted_out_capturing({
                                persistence_type: "cookie"
                            }) && this.opt_out_capturing({
                                clear_persistence: !1
                            }), this.clear_opt_in_out_capturing({
                                persistence_type: "cookie",
                                enable_persistence: !1
                            })), this.has_opted_out_capturing() ? this._gdpr_update_persistence({
                                clear_persistence: !0
                            }) : !this.has_opted_in_capturing() && (this.config.opt_out_capturing_by_default || te.get("ph_optout")) && (te.remove("ph_optout"), this.opt_out_capturing({
                                clear_persistence: this.config.opt_out_persistence_by_default
                            }))
                        }
                    }, {
                        key: "_gdpr_update_persistence",
                        value: function(e) {
                            var t, n, i, r, o;
                            if (e && e.clear_persistence) i = !0;
                            else {
                                if (!e || !e.enable_persistence) return;
                                i = !1
                            }
                            this.config.disable_persistence || (null === (t = this.persistence) || void 0 === t ? void 0 : t.disabled) === i || null === (r = this.persistence) || void 0 === r || r.set_disabled(i), this.config.disable_persistence || (null === (n = this.sessionPersistence) || void 0 === n ? void 0 : n.disabled) === i || null === (o = this.sessionPersistence) || void 0 === o || o.set_disabled(i)
                        }
                    }, {
                        key: "_gdpr_call_func",
                        value: function(e, t) {
                            return t = ee({
                                capture: this.capture.bind(this),
                                persistence_type: this.config.opt_out_capturing_persistence_type,
                                cookie_prefix: this.config.opt_out_capturing_cookie_prefix,
                                cookie_expiration: this.config.cookie_expiration,
                                cross_subdomain_cookie: this.config.cross_subdomain_cookie,
                                secure_cookie: this.config.secure_cookie
                            }, t || {}), tn.is_supported() || "localStorage" !== t.persistence_type || (t.persistence_type = "cookie"), e(this.config.token, {
                                capture: t.capture,
                                captureEventName: t.capture_event_name,
                                captureProperties: t.capture_properties,
                                persistenceType: t.persistence_type,
                                persistencePrefix: t.cookie_prefix,
                                cookieExpiration: t.cookie_expiration,
                                crossSubdomainCookie: t.cross_subdomain_cookie,
                                secureCookie: t.secure_cookie
                            })
                        }
                    }, {
                        key: "opt_in_capturing",
                        value: function(e) {
                            e = ee({
                                enable_persistence: !0
                            }, e || {}), this._gdpr_call_func(t$, e), this._gdpr_update_persistence(e)
                        }
                    }, {
                        key: "opt_out_capturing",
                        value: function(e) {
                            var t = ee({
                                clear_persistence: !0
                            }, e || {});
                            this._gdpr_call_func(tT, t), this._gdpr_update_persistence(t)
                        }
                    }, {
                        key: "has_opted_in_capturing",
                        value: function(e) {
                            return this._gdpr_call_func(tA, e)
                        }
                    }, {
                        key: "has_opted_out_capturing",
                        value: function(e) {
                            return this._gdpr_call_func(tM, e)
                        }
                    }, {
                        key: "clear_opt_in_out_capturing",
                        value: function(e) {
                            var t = ee({
                                enable_persistence: !0
                            }, null != e ? e : {});
                            this._gdpr_call_func(tD, t), this._gdpr_update_persistence(t)
                        }
                    }, {
                        key: "debug",
                        value: function(e) {
                            !1 === e ? (null == V || V.console.log("You've disabled debug mode."), localStorage && localStorage.removeItem("ph_debug"), this.set_config({
                                debug: !1
                            })) : (null == V || V.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), localStorage && localStorage.setItem("ph_debug", "true"), this.set_config({
                                debug: !0
                            }))
                        }
                    }]), e
                }();
            ! function(e, t) {
                for (var n = 0; n < t.length; n++) e.prototype[t[n]] = eo(e.prototype[t[n]])
            }(nU, ["identify"]);
            var nW, nG, nz, nY = {};
            (i = nG || (nG = {})).Popover = "popover", i.API = "api", i.Widget = "widget", (r = nz || (nz = {})).Open = "open", r.MultipleChoice = "multiple_choice", r.SingleChoice = "single_choice", r.Rating = "rating", r.Link = "link";
            var nQ = (nx = nI.INIT_MODULE, (nR = new nU).init = function(e, t, n) {
                    if (n) return nR[n] || (nR[n] = nY[n] = nH(e || "", t || {}, n, function(e) {
                        nR[n] = nY[n] = e, e._loaded()
                    })), nR[n];
                    var i = nR;
                    return nY[nq] ? i = nY[nq] : e && (i = nH(e, t || {}, nq, function(e) {
                        nY[nq] = e, e._loaded()
                    }), nY[nq] = i), nR = i, nx === nI.INIT_SNIPPET && (z[nq] = nR), Z(nY, function(e, t) {
                        t !== nq && (nR[t] = e)
                    }), i
                }, nR.init(), function() {
                    function e() {
                        e.done || (e.done = !0, nL = !1, Z(nY, function(e) {
                            e._dom_loaded()
                        }))
                    }
                    null != W && W.addEventListener && ("complete" === W.readyState ? e() : W.addEventListener("DOMContentLoaded", e, !1)), V && ec(V, "load", e, !0)
                }(), nR),
                nJ = n(7294),
                nX = (0, nJ.createContext)({
                    client: nQ
                });

            function nK(e) {
                var t = e.children,
                    n = e.client,
                    i = e.apiKey,
                    r = e.options,
                    o = (0, nJ.useMemo)(function() {
                        return (n && i && console.warn("[PostHog.js] You have provided both a client and an apiKey to PostHogProvider. The apiKey will be ignored in favour of the client."), n && r && console.warn("[PostHog.js] You have provided both a client and options to PostHogProvider. The options will be ignored in favour of the client."), n) ? n : (i && (nQ.__loaded && console.warn("[PostHog.js] was already loaded elsewhere. This may cause issues."), nQ.init(i, r)), nQ)
                    }, [n, i]);
                return nJ.createElement(nX.Provider, {
                    value: {
                        client: o
                    }
                }, t)
            }
            nQ.init("phc_264VxYFXX6S1hkWOVEWHVMyiSdxKPRdLUWhfV0kq5Ok", {
                api_host: "https://app.posthog.com",
                loaded: e => {},
                capture_pageview: !1
            });
            var nZ = function(e) {
                let {
                    Component: t,
                    pageProps: n
                } = e, i = (0, u.useRouter)();
                return (0, nJ.useEffect)(() => {
                    let e = () => null == nQ ? void 0 : nQ.capture("$pageview");
                    return i.events.on("routeChangeComplete", e), () => {
                        i.events.off("routeChangeComplete", e)
                    }
                }, []), (0, o.jsx)(nK, {
                    client: nQ,
                    children: (0, o.jsx)("main", {
                        className: "".concat(a().variable, " font-sans"),
                        children: (0, o.jsx)(t, { ...n
                        })
                    })
                })
            }
        },
        3814: function() {},
        1527: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__Manrope_8f5b94', '__Manrope_Fallback_8f5b94'",
                    fontStyle: "normal"
                },
                className: "__className_8f5b94",
                variable: "__variable_8f5b94"
            }
        },
        1163: function(e, t, n) {
            e.exports = n(6885)
        }
    },
    function(e) {
        var t = function(t) {
            return e(e.s = t)
        };
        e.O(0, [774, 179], function() {
            return t(1118), t(6885)
        }), _N_E = e.O()
    }
]);