(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [555], {
        1906: function(e, n, i) {
            Promise.resolve().then(i.bind(i, 6478))
        },
        6478: function(e, n, i) {
            "use strict";
            i.r(n), i.d(n, {
                default: function() {
                    return l
                }
            });
            var t = i(9268),
                s = i(712);
            async function a() {
                return (0, t.jsx)(s.E.div, {
                    initial: {},
                    animate: {
                        y: "-100vh"
                    },
                    transition: {
                        delay: 1.4,
                        duration: 1
                    },
                    className: "fixed top-0 left-0 z-20 flex items-center content-center justify-center w-screen h-screen bg-neutral-900",
                    children: (0, t.jsxs)("div", {
                        className: "flex items-end overflow-y-visible",
                        children: [(0, t.jsx)("div", {
                            className: "w-[64px] overflow-hidden",
                            children: (0, t.jsx)(s.E.h1, {
                                className: "font-bold leading-loose text-8xl",
                                initial: {
                                    x: 70,
                                    y: 0
                                },
                                animate: {
                                    x: 0
                                },
                                transition: {
                                    duration: .6,
                                    delay: .75
                                },
                                children: "B"
                            })
                        }), (0, t.jsx)(s.E.div, {
                            initial: {
                                width: "100vw",
                                height: "100vh"
                            },
                            animate: {
                                width: "6.786px",
                                height: "6.786px"
                            },
                            transition: {
                                duration: .8
                            },
                            className: "relative flex items-center justify-center w-full h-full bg-green-500"
                        })]
                    })
                })
            }
            async function l() {
                return (0, t.jsx)(a, {})
            }
        }
    },
    function(e) {
        e.O(0, [858, 712, 253, 769, 744], function() {
            return e(e.s = 1906)
        }), _N_E = e.O()
    }
]);