(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [423], {
        9634: function(e, t, l) {
            Promise.resolve().then(l.bind(l, 3762))
        },
        7429: function(e, t, l) {
            "use strict";
            l.d(t, {
                Z: function() {
                    return s
                }
            });
            var n = l(9268);

            function s() {
                return (0, n.jsx)("div", {
                    className: "slider",
                    children: (0, n.jsxs)("div", {
                        className: "flex items-center flex-nowrap gap-2 xl:gap-3 justify-center mt-9 xl:mt-10 company-list relative",
                        children: [(0, n.jsx)("div", {
                            className: "w-8 h-8 xl:w-10 xl:h-10 rounded-full overflow-hidden relative",
                            children: (0, n.jsx)("img", {
                                src: "/images/cases/releap/logo.png",
                                alt: "Releap",
                                className: "object-contain w-full"
                            })
                        }), (0, n.jsx)("div", {
                            className: "w-8 h-8 xl:w-10 xl:h-10 rounded-full overflow-hidden relative",
                            children: (0, n.jsx)("img", {
                                src: "/images/cases/ethereum-org/logo.png",
                                alt: "Ethereum Org",
                                className: "object-contain w-full"
                            })
                        }), (0, n.jsx)("div", {
                            className: "w-8 h-8 xl:w-10 xl:h-10 rounded-full overflow-hidden relative",
                            children: (0, n.jsx)("img", {
                                src: "/images/cases/4k/logo.png",
                                alt: "4k",
                                className: "object-contain w-full"
                            })
                        }), (0, n.jsx)("div", {
                            className: "w-8 h-8 xl:w-10 xl:h-10 rounded-full overflow-hidden relative",
                            children: (0, n.jsx)("img", {
                                src: "/images/cases/ntp/logo.png",
                                alt: "NTP Events",
                                className: "object-contain w-full"
                            })
                        }), (0, n.jsx)("div", {
                            className: "w-8 h-8 xl:w-10 xl:h-10 rounded-full overflow-hidden relative",
                            children: (0, n.jsx)("img", {
                                src: "/images/cases/onshelf/logo.png",
                                alt: "OnShelf",
                                className: "object-contain w-full"
                            })
                        })]
                    })
                })
            }
        },
        2880: function(e, t, l) {
            "use strict";
            l.d(t, {
                U: function() {
                    return x
                }
            });
            var n = l(9268),
                s = l(6006),
                a = l(3602);
            let i = {
                some: 0,
                all: 1
            };
            var r = l(2864),
                o = l(7064),
                c = l(4165);

            function d() {
                let e = !1,
                    t = new Set,
                    l = {
                        subscribe: e => (t.add(e), () => void t.delete(e)),
                        start(l, n) {
                            (0, r.k)(e, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
                            let s = [];
                            return t.forEach(e => {
                                s.push((0, c.d)(e, l, {
                                    transitionOverride: n
                                }))
                            }), Promise.all(s)
                        },
                        set: l => ((0, r.k)(e, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), t.forEach(e => {
                            (0, o.gg)(e, l)
                        })),
                        stop() {
                            t.forEach(e => {
                                ! function(e) {
                                    e.values.forEach(e => e.stop())
                                }(e)
                            })
                        },
                        mount: () => (e = !0, () => {
                            e = !1, l.stop()
                        })
                    };
                return l
            }
            var u = l(789),
                f = l(3398);
            let h = function() {
                let e = (0, u.h)(d);
                return (0, f.L)(e.mount, []), e
            };
            var m = l(712);
            let x = e => {
                let {
                    variants: t = {},
                    transition: l = {},
                    width: r = "fit-content",
                    children: o
                } = e, c = (0, s.useRef)(null), d = function(e, {
                    root: t,
                    margin: l,
                    amount: n,
                    once: r = !1
                } = {}) {
                    let [o, c] = (0, s.useState)(!1);
                    return (0, s.useEffect)(() => {
                        if (!e.current || r && o) return;
                        let s = {
                            root: t && t.current || void 0,
                            margin: l,
                            amount: n
                        };
                        return function(e, t, {
                            root: l,
                            margin: n,
                            amount: s = "some"
                        } = {}) {
                            let r = (0, a.I)(e),
                                o = new WeakMap,
                                c = new IntersectionObserver(e => {
                                    e.forEach(e => {
                                        let l = o.get(e.target);
                                        if (!!l !== e.isIntersecting) {
                                            if (e.isIntersecting) {
                                                let l = t(e);
                                                "function" == typeof l ? o.set(e.target, l) : c.unobserve(e.target)
                                            } else l && (l(e), o.delete(e.target))
                                        }
                                    })
                                }, {
                                    root: l,
                                    rootMargin: n,
                                    threshold: "number" == typeof s ? s : i[s]
                                });
                            return r.forEach(e => c.observe(e)), () => c.disconnect()
                        }(e.current, () => (c(!0), r ? void 0 : () => c(!1)), s)
                    }, [t, e, l, r]), o
                }(c, {
                    once: !0
                }), u = h();
                return (0, s.useEffect)(() => {
                    d && u.start("visible")
                }, [d, u]), (0, n.jsx)("div", {
                    children: (0, n.jsx)(m.E.div, {
                        variants: {
                            hidden: {
                                opacity: 0,
                                x: -25
                            },
                            visible: {
                                opacity: 1,
                                x: 0
                            },
                            ...t
                        },
                        initial: "hidden",
                        animate: u,
                        transition: {
                            duration: .8,
                            ease: "easeInOut",
                            ...l
                        },
                        ref: c,
                        children: o
                    })
                })
            }
        },
        3762: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l(9268),
                s = l(7429),
                a = l(2880),
                i = l(658);

            function r() {
                return (0, i.LZ)(e => {
                    let {
                        scroll: t
                    } = e
                }), (0, n.jsxs)("section", {
                    id: "hero",
                    className: "z-20 overflow-hidden",
                    children: [(0, n.jsx)("div", {
                        className: "absolute bottom-0 left-0 w-full -z-10",
                        children: (0, n.jsx)("div", {
                            className: "relative mx-auto w-full max-w-[991px]",
                            children: (0, n.jsx)("img", {
                                className: "absolute bottom-0 left-0 rotate-180 object-contain w-full",
                                src: "/images/grid-bg-bottom.svg"
                            })
                        })
                    }), (0, n.jsxs)("div", {
                        className: "",
                        children: [(0, n.jsx)(a.U, {
                            children: (0, n.jsx)(n.Fragment, {
                                children: (0, n.jsxs)("div", {
                                    className: "flex justify-center flex-col",
                                    children: [(0, n.jsx)("h2", {
                                        className: "max-w-[932px] mx-auto text-2xl xl:text-8xl font-bold text-center font-hanken text-neutral-200",
                                        children: "From idea to product, one lesson at a time."
                                    }), (0, n.jsx)("p", {
                                        className: "text-md xl:text-lg text-center mt-6 text-slate-600 font-medium max-w-[724px] mx-auto",
                                        children: "How we can help you? Let’s create something epic. Together."
                                    })]
                                })
                            })
                        }), (0, n.jsx)(a.U, {
                            variants: {
                                hidden: {
                                    opacity: 0
                                },
                                visible: {
                                    opacity: 1
                                }
                            },
                            children: (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("div", {
                                    className: "flex gap-2 mt-12 text-sm xl:mt-14",
                                    children: (0, n.jsxs)("div", {
                                        className: "flex justify-center flex-1 gap-5 font-hanken",
                                        children: [(0, n.jsx)("a", {
                                            className: "btn btn-default",
                                            href: "mailto:usejustbuild@gmail.com",
                                            children: "Get in touch"
                                        }), (0, n.jsx)("button", {
                                            className: "btn-outline",
                                            children: (0, n.jsx)("a", {
                                                href: "https://calendly.com/justbuildstudio/30min",
                                                children: "Book an intro call"
                                            })
                                        })]
                                    })
                                }), (0, n.jsx)(s.Z, {})]
                            })
                        })]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [858, 712, 646, 253, 769, 744], function() {
            return e(e.s = 9634)
        }), _N_E = e.O()
    }
]);