(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [382], {
        1516: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getDomainLocale = function(e, t, r, n) {
                return !1
            }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        3740: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r(6495).Z,
                o = r(2648).Z,
                l = r(1598).Z,
                i = r(7273).Z,
                a = l(r(7294)),
                u = o(r(2636)),
                s = r(7757),
                c = r(3735),
                f = r(3341);
            r(4210);
            var d = o(r(7746));
            let p = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !1
            };

            function g(e) {
                return void 0 !== e.default
            }

            function h(e) {
                return "number" == typeof e || void 0 === e ? e : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
            }

            function m(e, t, r, o, l, i, a) {
                if (!e || e["data-loaded-src"] === t) return;
                e["data-loaded-src"] = t;
                let u = "decode" in e ? e.decode() : Promise.resolve();
                u.catch(() => {}).then(() => {
                    if (e.parentElement && e.isConnected) {
                        if ("blur" === r && i(!0), null == o ? void 0 : o.current) {
                            let t = new Event("load");
                            Object.defineProperty(t, "target", {
                                writable: !1,
                                value: e
                            });
                            let r = !1,
                                l = !1;
                            o.current(n({}, t, {
                                nativeEvent: t,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: () => r,
                                isPropagationStopped: () => l,
                                persist: () => {},
                                preventDefault: () => {
                                    r = !0, t.preventDefault()
                                },
                                stopPropagation: () => {
                                    l = !0, t.stopPropagation()
                                }
                            }))
                        }(null == l ? void 0 : l.current) && l.current(e)
                    }
                })
            }
            let v = a.forwardRef((e, t) => {
                    var {
                        imgAttributes: r,
                        heightInt: o,
                        widthInt: l,
                        qualityInt: u,
                        className: s,
                        imgStyle: c,
                        blurStyle: f,
                        isLazy: d,
                        fill: p,
                        placeholder: g,
                        loading: h,
                        srcString: v,
                        config: b,
                        unoptimized: y,
                        loader: w,
                        onLoadRef: E,
                        onLoadingCompleteRef: C,
                        setBlurComplete: _,
                        setShowAltText: j,
                        onLoad: x,
                        onError: S
                    } = e, M = i(e, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "className", "imgStyle", "blurStyle", "isLazy", "fill", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadRef", "onLoadingCompleteRef", "setBlurComplete", "setShowAltText", "onLoad", "onError"]);
                    return h = d ? "lazy" : h, a.default.createElement(a.default.Fragment, null, a.default.createElement("img", Object.assign({}, M, {
                        loading: h,
                        width: l,
                        height: o,
                        decoding: "async",
                        "data-nimg": p ? "fill" : "1",
                        className: s,
                        style: n({}, c, f)
                    }, r, {
                        ref: a.useCallback(e => {
                            t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e && (S && (e.src = e.src), e.complete && m(e, v, g, E, C, _, y))
                        }, [v, g, E, C, _, S, y, t]),
                        onLoad: e => {
                            let t = e.currentTarget;
                            m(t, v, g, E, C, _, y)
                        },
                        onError: e => {
                            j(!0), "blur" === g && _(!0), S && S(e)
                        }
                    })))
                }),
                b = a.forwardRef((e, t) => {
                    let r, o;
                    var l, {
                            src: m,
                            sizes: b,
                            unoptimized: y = !1,
                            priority: w = !1,
                            loading: E,
                            className: C,
                            quality: _,
                            width: j,
                            height: x,
                            fill: S,
                            style: M,
                            onLoad: R,
                            onLoadingComplete: O,
                            placeholder: k = "empty",
                            blurDataURL: P,
                            layout: z,
                            objectFit: I,
                            objectPosition: L,
                            lazyBoundary: A,
                            lazyRoot: T
                        } = e,
                        B = i(e, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "fill", "style", "onLoad", "onLoadingComplete", "placeholder", "blurDataURL", "layout", "objectFit", "objectPosition", "lazyBoundary", "lazyRoot"]);
                    let D = a.useContext(f.ImageConfigContext),
                        N = a.useMemo(() => {
                            let e = p || D || c.imageConfigDefault,
                                t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                                r = e.deviceSizes.sort((e, t) => e - t);
                            return n({}, e, {
                                allSizes: t,
                                deviceSizes: r
                            })
                        }, [D]),
                        Z = B,
                        U = Z.loader || d.default;
                    delete Z.loader;
                    let F = "__next_img_default" in U;
                    if (F) {
                        if ("custom" === N.loader) throw Error('Image with src "'.concat(m, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
                    } else {
                        let e = U;
                        U = t => {
                            let {
                                config: r
                            } = t, n = i(t, ["config"]);
                            return e(n)
                        }
                    }
                    if (z) {
                        "fill" === z && (S = !0);
                        let e = {
                            intrinsic: {
                                maxWidth: "100%",
                                height: "auto"
                            },
                            responsive: {
                                width: "100%",
                                height: "auto"
                            }
                        }[z];
                        e && (M = n({}, M, e));
                        let t = {
                            responsive: "100vw",
                            fill: "100vw"
                        }[z];
                        t && !b && (b = t)
                    }
                    let H = "",
                        W = h(j),
                        q = h(x);
                    if ("object" == typeof(l = m) && (g(l) || void 0 !== l.src)) {
                        let e = g(m) ? m.default : m;
                        if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));
                        if (!e.height || !e.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));
                        if (r = e.blurWidth, o = e.blurHeight, P = P || e.blurDataURL, H = e.src, !S) {
                            if (W || q) {
                                if (W && !q) {
                                    let t = W / e.width;
                                    q = Math.round(e.height * t)
                                } else if (!W && q) {
                                    let t = q / e.height;
                                    W = Math.round(e.width * t)
                                }
                            } else W = e.width, q = e.height
                        }
                    }
                    let V = !w && ("lazy" === E || void 0 === E);
                    ((m = "string" == typeof m ? m : H).startsWith("data:") || m.startsWith("blob:")) && (y = !0, V = !1), N.unoptimized && (y = !0), F && m.endsWith(".svg") && !N.dangerouslyAllowSVG && (y = !0);
                    let [G, K] = a.useState(!1), [J, Y] = a.useState(!1), $ = h(_), Q = Object.assign(S ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: I,
                        objectPosition: L
                    } : {}, J ? {} : {
                        color: "transparent"
                    }, M), X = "blur" === k && P && !G ? {
                        backgroundSize: Q.objectFit || "cover",
                        backgroundPosition: Q.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: 'url("data:image/svg+xml;charset=utf-8,'.concat(s.getImageBlurSvg({
                            widthInt: W,
                            heightInt: q,
                            blurWidth: r,
                            blurHeight: o,
                            blurDataURL: P,
                            objectFit: Q.objectFit
                        }), '")')
                    } : {}, ee = function(e) {
                        let {
                            config: t,
                            src: r,
                            unoptimized: n,
                            width: o,
                            quality: l,
                            sizes: i,
                            loader: a
                        } = e;
                        if (n) return {
                            src: r,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: u,
                            kind: s
                        } = function(e, t, r) {
                            let {
                                deviceSizes: n,
                                allSizes: o
                            } = e;
                            if (r) {
                                let e = /(^|\s)(1?\d?\d)vw/g,
                                    t = [];
                                for (let n; n = e.exec(r); n) t.push(parseInt(n[2]));
                                if (t.length) {
                                    let e = .01 * Math.min(...t);
                                    return {
                                        widths: o.filter(t => t >= n[0] * e),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: o,
                                    kind: "w"
                                }
                            }
                            if ("number" != typeof t) return {
                                widths: n,
                                kind: "w"
                            };
                            let l = [...new Set([t, 2 * t].map(e => o.find(t => t >= e) || o[o.length - 1]))];
                            return {
                                widths: l,
                                kind: "x"
                            }
                        }(t, o, i), c = u.length - 1;
                        return {
                            sizes: i || "w" !== s ? i : "100vw",
                            srcSet: u.map((e, n) => "".concat(a({
                                config: t,
                                src: r,
                                quality: l,
                                width: e
                            }), " ").concat("w" === s ? e : n + 1).concat(s)).join(", "),
                            src: a({
                                config: t,
                                src: r,
                                quality: l,
                                width: u[c]
                            })
                        }
                    }({
                        config: N,
                        src: m,
                        unoptimized: y,
                        width: W,
                        quality: $,
                        sizes: b,
                        loader: U
                    }), et = m, er = {
                        imageSrcSet: ee.srcSet,
                        imageSizes: ee.sizes,
                        crossOrigin: Z.crossOrigin
                    }, en = a.useRef(R);
                    a.useEffect(() => {
                        en.current = R
                    }, [R]);
                    let eo = a.useRef(O);
                    a.useEffect(() => {
                        eo.current = O
                    }, [O]);
                    let el = n({
                        isLazy: V,
                        imgAttributes: ee,
                        heightInt: q,
                        widthInt: W,
                        qualityInt: $,
                        className: C,
                        imgStyle: Q,
                        blurStyle: X,
                        loading: E,
                        config: N,
                        fill: S,
                        unoptimized: y,
                        placeholder: k,
                        loader: U,
                        srcString: et,
                        onLoadRef: en,
                        onLoadingCompleteRef: eo,
                        setBlurComplete: K,
                        setShowAltText: Y
                    }, Z);
                    return a.default.createElement(a.default.Fragment, null, a.default.createElement(v, Object.assign({}, el, {
                        ref: t
                    })), w ? a.default.createElement(u.default, null, a.default.createElement("link", Object.assign({
                        key: "__nimg-" + ee.src + ee.srcSet + ee.sizes,
                        rel: "preload",
                        as: "image",
                        href: ee.srcSet ? void 0 : ee.src
                    }, er))) : null)
                });
            t.default = b, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        5569: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r(2648).Z,
                o = r(7273).Z,
                l = n(r(7294)),
                i = r(4532),
                a = r(3353),
                u = r(1410),
                s = r(9064),
                c = r(370),
                f = r(9955),
                d = r(4224),
                p = r(508),
                g = r(1516),
                h = r(4266);
            let m = new Set;

            function v(e, t, r, n, o) {
                if (o || a.isLocalURL(t)) {
                    if (!n.bypassPrefetchedCheck) {
                        let o = void 0 !== n.locale ? n.locale : "locale" in e ? e.locale : void 0,
                            l = t + "%" + r + "%" + o;
                        if (m.has(l)) return;
                        m.add(l)
                    }
                    Promise.resolve(e.prefetch(t, r, n)).catch(e => {})
                }
            }

            function b(e) {
                return "string" == typeof e ? e : u.formatUrl(e)
            }
            let y = l.default.forwardRef(function(e, t) {
                let r, n;
                let {
                    href: u,
                    as: m,
                    children: y,
                    prefetch: w,
                    passHref: E,
                    replace: C,
                    shallow: _,
                    scroll: j,
                    locale: x,
                    onClick: S,
                    onMouseEnter: M,
                    onTouchStart: R,
                    legacyBehavior: O = !1
                } = e, k = o(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                r = y, O && ("string" == typeof r || "number" == typeof r) && (r = l.default.createElement("a", null, r));
                let P = !1 !== w,
                    z = l.default.useContext(f.RouterContext),
                    I = l.default.useContext(d.AppRouterContext),
                    L = null != z ? z : I,
                    A = !z,
                    {
                        href: T,
                        as: B
                    } = l.default.useMemo(() => {
                        if (!z) {
                            let e = b(u);
                            return {
                                href: e,
                                as: m ? b(m) : e
                            }
                        }
                        let [e, t] = i.resolveHref(z, u, !0);
                        return {
                            href: e,
                            as: m ? i.resolveHref(z, m) : t || e
                        }
                    }, [z, u, m]),
                    D = l.default.useRef(T),
                    N = l.default.useRef(B);
                O && (n = l.default.Children.only(r));
                let Z = O ? n && "object" == typeof n && n.ref : t,
                    [U, F, H] = p.useIntersection({
                        rootMargin: "200px"
                    }),
                    W = l.default.useCallback(e => {
                        (N.current !== B || D.current !== T) && (H(), N.current = B, D.current = T), U(e), Z && ("function" == typeof Z ? Z(e) : "object" == typeof Z && (Z.current = e))
                    }, [B, Z, T, H, U]);
                l.default.useEffect(() => {
                    L && F && P && v(L, T, B, {
                        locale: x
                    }, A)
                }, [B, T, F, x, P, null == z ? void 0 : z.locale, L, A]);
                let q = {
                    ref: W,
                    onClick(e) {
                        O || "function" != typeof S || S(e), O && n.props && "function" == typeof n.props.onClick && n.props.onClick(e), L && !e.defaultPrevented && function(e, t, r, n, o, i, u, s, c, f) {
                            let {
                                nodeName: d
                            } = e.currentTarget, p = "A" === d.toUpperCase();
                            if (p && (function(e) {
                                    let t = e.currentTarget,
                                        r = t.getAttribute("target");
                                    return r && "_self" !== r || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) || !c && !a.isLocalURL(r))) return;
                            e.preventDefault();
                            let g = () => {
                                "beforePopState" in t ? t[o ? "replace" : "push"](r, n, {
                                    shallow: i,
                                    locale: s,
                                    scroll: u
                                }) : t[o ? "replace" : "push"](n || r, {
                                    forceOptimisticNavigation: !f
                                })
                            };
                            c ? l.default.startTransition(g) : g()
                        }(e, L, T, B, C, _, j, x, A, P)
                    },
                    onMouseEnter(e) {
                        O || "function" != typeof M || M(e), O && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(e), L && (P || !A) && v(L, T, B, {
                            locale: x,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, A)
                    },
                    onTouchStart(e) {
                        O || "function" != typeof R || R(e), O && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(e), L && (P || !A) && v(L, T, B, {
                            locale: x,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, A)
                    }
                };
                if (s.isAbsoluteUrl(B)) q.href = B;
                else if (!O || E || "a" === n.type && !("href" in n.props)) {
                    let e = void 0 !== x ? x : null == z ? void 0 : z.locale,
                        t = (null == z ? void 0 : z.isLocaleDomain) && g.getDomainLocale(B, e, null == z ? void 0 : z.locales, null == z ? void 0 : z.domainLocales);
                    q.href = t || h.addBasePath(c.addLocale(B, e, null == z ? void 0 : z.defaultLocale))
                }
                return O ? l.default.cloneElement(n, q) : l.default.createElement("a", Object.assign({}, k, q), r)
            });
            t.default = y, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        508: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useIntersection = function(e) {
                let {
                    rootRef: t,
                    rootMargin: r,
                    disabled: u
                } = e, s = u || !l, [c, f] = n.useState(!1), d = n.useRef(null), p = n.useCallback(e => {
                    d.current = e
                }, []);
                n.useEffect(() => {
                    if (l) {
                        if (s || c) return;
                        let e = d.current;
                        if (e && e.tagName) {
                            let n = function(e, t, r) {
                                let {
                                    id: n,
                                    observer: o,
                                    elements: l
                                } = function(e) {
                                    let t;
                                    let r = {
                                            root: e.root || null,
                                            margin: e.rootMargin || ""
                                        },
                                        n = a.find(e => e.root === r.root && e.margin === r.margin);
                                    if (n && (t = i.get(n))) return t;
                                    let o = new Map,
                                        l = new IntersectionObserver(e => {
                                            e.forEach(e => {
                                                let t = o.get(e.target),
                                                    r = e.isIntersecting || e.intersectionRatio > 0;
                                                t && r && t(r)
                                            })
                                        }, e);
                                    return t = {
                                        id: r,
                                        observer: l,
                                        elements: o
                                    }, a.push(r), i.set(r, t), t
                                }(r);
                                return l.set(e, t), o.observe(e),
                                    function() {
                                        if (l.delete(e), o.unobserve(e), 0 === l.size) {
                                            o.disconnect(), i.delete(n);
                                            let e = a.findIndex(e => e.root === n.root && e.margin === n.margin);
                                            e > -1 && a.splice(e, 1)
                                        }
                                    }
                            }(e, e => e && f(e), {
                                root: null == t ? void 0 : t.current,
                                rootMargin: r
                            });
                            return n
                        }
                    } else if (!c) {
                        let e = o.requestIdleCallback(() => f(!0));
                        return () => o.cancelIdleCallback(e)
                    }
                }, [s, r, t, c, d.current]);
                let g = n.useCallback(() => {
                    f(!1)
                }, []);
                return [p, c, g]
            };
            var n = r(7294),
                o = r(29);
            let l = "function" == typeof IntersectionObserver,
                i = new Map,
                a = [];
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        7757: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getImageBlurSvg = function(e) {
                let {
                    widthInt: t,
                    heightInt: r,
                    blurWidth: n,
                    blurHeight: o,
                    blurDataURL: l,
                    objectFit: i
                } = e, a = n || t, u = o || r, s = l.startsWith("data:image/jpeg") ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%" : "";
                return a && u ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a, " ").concat(u, "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n && o ? "1" : "20", "'/%3E").concat(s, "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(l, "'/%3E%3C/svg%3E") : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain" === i ? "xMidYMid" : "cover" === i ? "xMidYMid slice" : "none", "' x='0' y='0' height='100%25' width='100%25' href='").concat(l, "'/%3E%3C/svg%3E")
            }
        },
        7746: function(e, t) {
            "use strict";

            function r(e) {
                let {
                    config: t,
                    src: r,
                    width: n,
                    quality: o
                } = e;
                return "".concat(t.path, "?url=").concat(encodeURIComponent(r), "&w=").concat(n, "&q=").concat(o || 75)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, r.__next_img_default = !0, t.default = r
        },
        9008: function(e, t, r) {
            e.exports = r(2636)
        },
        5675: function(e, t, r) {
            e.exports = r(3740)
        },
        1664: function(e, t, r) {
            e.exports = r(5569)
        },
        4589: function(e, t, r) {
            "use strict";
            var n = r(7294);
            let o = n.forwardRef(function({
                title: e,
                titleId: t,
                ...r
            }, o) {
                return n.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: o,
                    "aria-labelledby": t
                }, r), e ? n.createElement("title", {
                    id: t
                }, e) : null, n.createElement("path", {
                    fillRule: "evenodd",
                    d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
                    clipRule: "evenodd"
                }))
            });
            t.Z = o
        },
        4727: function(e, t, r) {
            "use strict";
            var n = r(7294);
            let o = n.forwardRef(function({
                title: e,
                titleId: t,
                ...r
            }, o) {
                return n.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: o,
                    "aria-labelledby": t
                }, r), e ? n.createElement("title", {
                    id: t
                }, e) : null, n.createElement("path", {
                    fillRule: "evenodd",
                    d: "M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z",
                    clipRule: "evenodd"
                }))
            });
            t.Z = o
        },
        6457: function(e, t, r) {
            "use strict";
            var n = r(7294);
            let o = n.forwardRef(function({
                title: e,
                titleId: t,
                ...r
            }, o) {
                return n.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: o,
                    "aria-labelledby": t
                }, r), e ? n.createElement("title", {
                    id: t
                }, e) : null, n.createElement("path", {
                    fillRule: "evenodd",
                    d: "M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z",
                    clipRule: "evenodd"
                }))
            });
            t.Z = o
        }
    }
]);