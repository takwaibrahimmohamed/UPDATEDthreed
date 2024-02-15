(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        1886: function(e, t, s) {
            Promise.resolve().then(s.bind(s, 8426)), Promise.resolve().then(s.bind(s, 6459)), Promise.resolve().then(s.bind(s, 3762)), Promise.resolve().then(s.t.bind(s, 5962, 23)), Promise.resolve().then(s.t.bind(s, 7477, 23))
        },
        7429: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return n
                }
            });
            var a = s(9268);

            function n() {
                return (0, a.jsx)("div", {
                    className: "slider",
                    children: (0, a.jsxs)("div", {
                        className: "flex items-center flex-nowrap gap-2 xl:gap-3 justify-center mt-9 xl:mt-10 company-list relative",
                        children: [(0, a.jsx)("div", {
                            className: "w-8 h-8 xl:w-10 xl:h-10 rounded-full overflow-hidden relative",
                            children: (0, a.jsx)("img", {
                                src: "/images/cases/releap/logo.png",
                                alt: "Releap",
                                className: "object-contain w-full"
                            })
                        }), (0, a.jsx)("div", {
                            className: "w-8 h-8 xl:w-10 xl:h-10 rounded-full overflow-hidden relative",
                            children: (0, a.jsx)("img", {
                                src: "/images/cases/ethereum-org/logo.png",
                                alt: "Ethereum Org",
                                className: "object-contain w-full"
                            })
                        }), (0, a.jsx)("div", {
                            className: "w-8 h-8 xl:w-10 xl:h-10 rounded-full overflow-hidden relative",
                            children: (0, a.jsx)("img", {
                                src: "/images/cases/4k/logo.png",
                                alt: "4k",
                                className: "object-contain w-full"
                            })
                        }), (0, a.jsx)("div", {
                            className: "w-8 h-8 xl:w-10 xl:h-10 rounded-full overflow-hidden relative",
                            children: (0, a.jsx)("img", {
                                src: "/images/cases/ntp/logo.png",
                                alt: "NTP Events",
                                className: "object-contain w-full"
                            })
                        }), (0, a.jsx)("div", {
                            className: "w-8 h-8 xl:w-10 xl:h-10 rounded-full overflow-hidden relative",
                            children: (0, a.jsx)("img", {
                                src: "/images/cases/onshelf/logo.png",
                                alt: "OnShelf",
                                className: "object-contain w-full"
                            })
                        })]
                    })
                })
            }
        },
        2880: function(e, t, s) {
            "use strict";
            s.d(t, {
                U: function() {
                    return f
                }
            });
            var a = s(9268),
                n = s(6006),
                l = s(3602);
            let i = {
                some: 0,
                all: 1
            };
            var r = s(2864),
                o = s(7064),
                c = s(4165);

            function d() {
                let e = !1,
                    t = new Set,
                    s = {
                        subscribe: e => (t.add(e), () => void t.delete(e)),
                        start(s, a) {
                            (0, r.k)(e, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
                            let n = [];
                            return t.forEach(e => {
                                n.push((0, c.d)(e, s, {
                                    transitionOverride: a
                                }))
                            }), Promise.all(n)
                        },
                        set: s => ((0, r.k)(e, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), t.forEach(e => {
                            (0, o.gg)(e, s)
                        })),
                        stop() {
                            t.forEach(e => {
                                ! function(e) {
                                    e.values.forEach(e => e.stop())
                                }(e)
                            })
                        },
                        mount: () => (e = !0, () => {
                            e = !1, s.stop()
                        })
                    };
                return s
            }
            var m = s(789),
                x = s(3398);
            let u = function() {
                let e = (0, m.h)(d);
                return (0, x.L)(e.mount, []), e
            };
            var h = s(712);
            let f = e => {
                let {
                    variants: t = {},
                    transition: s = {},
                    width: r = "fit-content",
                    children: o
                } = e, c = (0, n.useRef)(null), d = function(e, {
                    root: t,
                    margin: s,
                    amount: a,
                    once: r = !1
                } = {}) {
                    let [o, c] = (0, n.useState)(!1);
                    return (0, n.useEffect)(() => {
                        if (!e.current || r && o) return;
                        let n = {
                            root: t && t.current || void 0,
                            margin: s,
                            amount: a
                        };
                        return function(e, t, {
                            root: s,
                            margin: a,
                            amount: n = "some"
                        } = {}) {
                            let r = (0, l.I)(e),
                                o = new WeakMap,
                                c = new IntersectionObserver(e => {
                                    e.forEach(e => {
                                        let s = o.get(e.target);
                                        if (!!s !== e.isIntersecting) {
                                            if (e.isIntersecting) {
                                                let s = t(e);
                                                "function" == typeof s ? o.set(e.target, s) : c.unobserve(e.target)
                                            } else s && (s(e), o.delete(e.target))
                                        }
                                    })
                                }, {
                                    root: s,
                                    rootMargin: a,
                                    threshold: "number" == typeof n ? n : i[n]
                                });
                            return r.forEach(e => c.observe(e)), () => c.disconnect()
                        }(e.current, () => (c(!0), r ? void 0 : () => c(!1)), n)
                    }, [t, e, s, r]), o
                }(c, {
                    once: !0
                }), m = u();
                return (0, n.useEffect)(() => {
                    d && m.start("visible")
                }, [d, m]), (0, a.jsx)("div", {
                    children: (0, a.jsx)(h.E.div, {
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
                        animate: m,
                        transition: {
                            duration: .8,
                            ease: "easeInOut",
                            ...s
                        },
                        ref: c,
                        children: o
                    })
                })
            }
        },
        6459: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return m
                }
            });
            var a = s(9268),
                n = s(2880),
                l = s(658),
                i = s(6394),
                r = s.n(i),
                o = s(712);

            function c() {
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(o.E.div, {
                        className: "flex-col items-center justify-center hidden mx-auto overflow-hidden xl:flex mt-28 md:mt-32",
                        children: (0, a.jsx)(o.E.div, {
                            className: "h-[750px] w-[2882px]",
                            initial: {
                                x: 300
                            },
                            animate: {
                                x: 0
                            },
                            transition: {
                                duration: 11,
                                repeat: 1 / 0
                            },
                            children: (0, a.jsx)(r(), {
                                src: "/images/carousel/xl-upper.png",
                                width: 2882,
                                height: 750,
                                alt: "hero",
                                className: "object-contain h-[750px] w-[2882px]"
                            })
                        })
                    }), (0, a.jsx)(o.E.div, {
                        className: "flex flex-col items-center justify-center mx-auto overflow-hidden xl:hidden mt-28 md:mt-32 max-w-screen-2xl",
                        children: (0, a.jsx)(o.E.div, {
                            className: "h-[500px] w-[1927px]",
                            initial: {
                                x: 300
                            },
                            animate: {
                                x: 50
                            },
                            transition: {
                                duration: 11,
                                repeat: 1 / 0
                            },
                            children: (0, a.jsx)(r(), {
                                src: "/images/carousel/xl-upper.png",
                                width: 1927,
                                height: 500,
                                alt: "hero",
                                className: "object-contain h-[500px] w-[1927px]"
                            })
                        })
                    })]
                })
            }
            var d = s(7429);

            function m() {
                return (0, l.LZ)(e => {
                    let {
                        scroll: t
                    } = e
                }), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: "hidden xl:flex w-full absolute justify-between -top-24",
                        children: [(0, a.jsx)("img", {
                            src: "/images/blobs/left.svg"
                        }), (0, a.jsx)("img", {
                            src: "/images/blobs/right.svg"
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "flex xl:hidden w-full absolute justify-between -top-24",
                        children: [(0, a.jsx)("img", {
                            src: "/images/blobs/left-mobile.svg"
                        }), (0, a.jsx)("img", {
                            src: "/images/blobs/right-mobile.svg"
                        })]
                    }), (0, a.jsxs)("section", {
                        id: "hero",
                        className: "mt-16 xl:mt-20 z-20",
                        children: [(0, a.jsx)("div", {
                            className: "absolute top-0 left-0 w-full -z-10",
                            children: (0, a.jsx)("div", {
                                className: "relative mx-auto w-full max-w-[991px]",
                                children: (0, a.jsx)("img", {
                                    className: "absolute top-0 left-0 rotate-180 object-contain w-full",
                                    src: "/images/grid-bg.svg"
                                })
                            })
                        }), (0, a.jsxs)("div", {
                            className: "content z-20",
                            children: [(0, a.jsx)(n.U, {
                                children: (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsxs)("div", {
                                        className: "text-center flex items-center justify-center gap-1 mb-3 relative ",
                                        children: [(0, a.jsx)("span", {
                                            className: "flex items-center justify-center w-5 h-5 bg-green-800 rounded-full animate-pulse",
                                            children: (0, a.jsx)("span", {
                                                className: "w-[8px] h-[8px] bg-green-500 rounded-full"
                                            })
                                        }), (0, a.jsx)("span", {
                                            className: "uppercase text-neutral-500",
                                            children: "Available for new projects"
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "flex justify-center flex-col",
                                        children: [(0, a.jsx)("h1", {
                                            className: "max-w-[932px] mx-auto text-4xl xl:text-8xl font-bold text-center font-hanken text-neutral-200",
                                            children: "We are a product studio for blockchain startups"
                                        }), (0, a.jsx)("p", {
                                            className: "text-md xl:text-lg text-center mt-6 text-slate-600 font-medium max-w-[724px] mx-auto",
                                            children: "Working closely with founders - Whether you need a smart contract, a dApp, or a DAO, we can help you design and develop your web3 product from idea to launch."
                                        })]
                                    })]
                                })
                            }), (0, a.jsx)(n.U, {
                                variants: {
                                    hidden: {
                                        opacity: 0
                                    },
                                    visible: {
                                        opacity: 1
                                    }
                                },
                                children: (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("div", {
                                        className: "flex gap-2 mt-12 text-sm xl:mt-14 z-20",
                                        children: (0, a.jsxs)("div", {
                                            className: "flex justify-center flex-1 gap-5 font-hanken",
                                            children: [(0, a.jsx)("a", {
                                                className: "btn btn-default",
                                                href: "mailto:usejustbuild@gmail.com",
                                                children: "Get in touch"
                                            }), (0, a.jsx)("button", {
                                                className: "btn-outline",
                                                children: (0, a.jsx)("a", {
                                                    href: "https://calendly.com/justbuildstudio/30min",
                                                    children: "Book an intro call"
                                                })
                                            })]
                                        })
                                    }), (0, a.jsx)(d.Z, {})]
                                })
                            })]
                        }), (0, a.jsx)(c, {})]
                    })]
                })
            }
        },
        3762: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var a = s(9268),
                n = s(7429),
                l = s(2880),
                i = s(658);

            function r() {
                return (0, i.LZ)(e => {
                    let {
                        scroll: t
                    } = e
                }), (0, a.jsxs)("section", {
                    id: "hero",
                    className: "z-20 overflow-hidden",
                    children: [(0, a.jsx)("div", {
                        className: "absolute bottom-0 left-0 w-full -z-10",
                        children: (0, a.jsx)("div", {
                            className: "relative mx-auto w-full max-w-[991px]",
                            children: (0, a.jsx)("img", {
                                className: "absolute bottom-0 left-0 rotate-180 object-contain w-full",
                                src: "/images/grid-bg-bottom.svg"
                            })
                        })
                    }), (0, a.jsxs)("div", {
                        className: "",
                        children: [(0, a.jsx)(l.U, {
                            children: (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsxs)("div", {
                                    className: "flex justify-center flex-col",
                                    children: [(0, a.jsx)("h2", {
                                        className: "max-w-[932px] mx-auto text-2xl xl:text-8xl font-bold text-center font-hanken text-neutral-200",
                                        children: "From idea to product, one lesson at a time."
                                    }), (0, a.jsx)("p", {
                                        className: "text-md xl:text-lg text-center mt-6 text-slate-600 font-medium max-w-[724px] mx-auto",
                                        children: "How we can help you? Let’s create something epic. Together."
                                    })]
                                })
                            })
                        }), (0, a.jsx)(l.U, {
                            variants: {
                                hidden: {
                                    opacity: 0
                                },
                                visible: {
                                    opacity: 1
                                }
                            },
                            children: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    className: "flex gap-2 mt-12 text-sm xl:mt-14",
                                    children: (0, a.jsxs)("div", {
                                        className: "flex justify-center flex-1 gap-5 font-hanken",
                                        children: [(0, a.jsx)("a", {
                                            className: "btn btn-default",
                                            href: "mailto:usejustbuild@gmail.com",
                                            children: "Get in touch"
                                        }), (0, a.jsx)("button", {
                                            className: "btn-outline",
                                            children: (0, a.jsx)("a", {
                                                href: "https://calendly.com/justbuildstudio/30min",
                                                children: "Book an intro call"
                                            })
                                        })]
                                    })
                                }), (0, a.jsx)(n.Z, {})]
                            })
                        })]
                    })]
                })
            }
        },
        8426: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return m
                }
            });
            var a = s(9268),
                n = s(6006),
                l = s(9061),
                i = s(441),
                r = s(789);

            function o({
                children: e,
                isValidProp: t,
                ...s
            }) {
                t && (0, i.K)(t), (s = { ...(0, n.useContext)(l._),
                    ...s
                }).isStatic = (0, r.h)(() => s.isStatic);
                let a = (0, n.useMemo)(() => s, [JSON.stringify(s.transition), s.transformPagePoint, s.reducedMotion]);
                return n.createElement(l._.Provider, {
                    value: a
                }, e)
            }
            var c = s(712);
            let d = [{
                content: 'We launched a revamped version of our platform in <span class="highlight-text">less than a month</span>. From design to implementation, this team has done an incredible job with us. ',
                authorName: "Leandro Pontes",
                authorPostion: "CEO • NTP Events",
                authorImg: "https://media.licdn.com/dms/image/C4E03AQF1fAftqcrWPA/profile-displayphoto-shrink_800_800/0/1629114436591?e=1710374400&v=beta&t=WUG1onv0x7yOSC1yB34cdckRb4LDbw12gYnqsPs0258",
                companyImg: "/images/cases/ntp/logo.png"
            }, {
                content: 'Focused, able to think through the problems we’re solving, and a pleasure to work with. Frankly, <span class="highlight-text">one of the best developers</span> that I’ve worked with in a while!',
                authorName: "Bryan Kayne",
                authorPostion: "OnShelf Founder • Former SuperRare",
                authorImg: "https://media.licdn.com/dms/image/D5635AQE21YUaOnf98g/profile-framedphoto-shrink_800_800/0/1699920931184?e=1705618800&v=beta&t=axz446gGd2SBSn0qU5BLGLpMMackavNA_DatRwEyWSc",
                companyImg: "/images/cases/onshelf/logo.png"
            }, {
                content: 'During our time working together at 4K Protocol, this team delivered <span class="highlight-text">high-quality work</span>. They also pushed an agenda of adopting good practices and patterns to enhance code quality.',
                authorName: "Ot\xe1vio Migliavacca",
                authorPostion: "Senior Software Engineer • 4K PROTOCOL",
                authorImg: "https://media.licdn.com/dms/image/C4D03AQG_tAt9SRTKHQ/profile-displayphoto-shrink_800_800/0/1545215761102?e=1710374400&v=beta&t=kJQ8iXwkDl1tqNxL6HID9kS6wbTmC4WlZS6wCmWEeX4",
                companyImg: "/images/cases/4k/logo.png"
            }];

            function m() {
                let [e, t] = (0, n.useState)(0);
                return (0, a.jsxs)("div", {
                    className: "w-full",
                    children: [(0, a.jsxs)("div", {
                        className: "flex justify-between items-center text-md uppercase mb-14 xl:mb-24",
                        children: [(0, a.jsx)("h2", {
                            className: "tracking-normal",
                            children: "Testimonials"
                        }), (0, a.jsx)("span", {
                            className: "hidden xl:block",
                            children: "1 — 2"
                        }), (0, a.jsx)("span", {
                            className: "xl:hidden",
                            children: "3"
                        })]
                    }), (0, a.jsx)(o, {
                        transition: {
                            duration: .7,
                            ease: [.32, .72, 0, 1]
                        },
                        children: (0, a.jsx)(c.E.ul, {
                            animate: {
                                x: "calc(".concat(e > 0 ? 600 : 0, "px + -").concat(100 * e, "%)")
                            },
                            transition: {
                                duration: .7,
                                ease: [.32, .72, 0, 1]
                            },
                            className: "flex flex-col xl:flex-row gap-[84px] xl:gap-[200px] text-neutral-150 flex-nowrap",
                            children: d.map((s, n) => (0, a.jsxs)(c.E.li, {
                                animate: {
                                    opacity: e != n ? "var(--opacity-from)" : "var(--opacity-to)",
                                    cursor: e == n ? "default" : "pointer"
                                },
                                className: "sm:[--opacity-from:1]  xl:[--opacity-from:0.25] [--opacity-to:1] pointer-events-none xl:pointer-events-auto w-full text-2xl xl:text-4xl space-y-12 xl:space-y-[72px]  !font-normal  xl:min-w-[950px]",
                                onClick: () => t(n),
                                children: [(0, a.jsx)("p", {
                                    className: "w-full",
                                    dangerouslySetInnerHTML: {
                                        __html: s.content
                                    }
                                }), (0, a.jsxs)("div", {
                                    className: "flex items-center gap-6 xl:gap-10",
                                    children: [(0, a.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [(0, a.jsx)("img", {
                                            alt: "Author",
                                            className: "w-[64px] h-[64px] xl:w-[72px] xl:h-[72px] rounded-full",
                                            src: s.authorImg
                                        }), (0, a.jsx)("img", {
                                            alt: "Company",
                                            className: "-ml-4 w-[64px] h-[64px] xl:w-[72px] xl:h-[72px] rounded-full border",
                                            src: s.companyImg
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "space-y-1 uppercase text-md xl:text-base",
                                        children: [(0, a.jsx)("span", {
                                            className: "block",
                                            children: s.authorName
                                        }), (0, a.jsx)("span", {
                                            className: "text-neutral-400 block",
                                            children: s.authorPostion
                                        })]
                                    })]
                                })]
                            }, "testimonial-".concat(n)))
                        })
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [858, 712, 646, 982, 253, 769, 744], function() {
            return e(e.s = 1886)
        }), _N_E = e.O()
    }
]);