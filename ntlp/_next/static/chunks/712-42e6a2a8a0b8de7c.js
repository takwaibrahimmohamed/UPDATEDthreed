"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [712], {
        2640: function(t, e, i) {
            let n;
            i.d(e, {
                v: function() {
                    return tn
                }
            });
            var r, s = i(2864),
                o = i(9683);
            let a = {
                    current: !1
                },
                l = t => Array.isArray(t) && "number" == typeof t[0],
                u = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
                h = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: u([0, .65, .55, 1]),
                    circOut: u([.55, 0, 1, .45]),
                    backIn: u([.31, .01, .66, -.59]),
                    backOut: u([.33, 1.53, .69, .99])
                };
            var c = i(9153);
            let d = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;

            function p(t, e, i, n) {
                if (t === e && i === n) return c.Z;
                let r = e => (function(t, e, i, n, r) {
                    let s, o;
                    let a = 0;
                    do(s = d(o = e + (i - e) / 2, n, r) - t) > 0 ? i = o : e = o; while (Math.abs(s) > 1e-7 && ++a < 12);
                    return o
                })(e, 0, 1, t, i);
                return t => 0 === t || 1 === t ? t : d(r(t), e, n)
            }
            let m = p(.42, 0, 1, 1),
                f = p(0, 0, .58, 1),
                v = p(.42, 0, .58, 1),
                g = t => Array.isArray(t) && "number" != typeof t[0];
            var y = i(9393),
                x = i(1355),
                P = i(248);
            let T = p(.33, 1.53, .69, .99),
                b = (0, P.M)(T),
                w = (0, x.o)(b),
                A = {
                    linear: c.Z,
                    easeIn: m,
                    easeInOut: v,
                    easeOut: f,
                    circIn: y.Z7,
                    circInOut: y.X7,
                    circOut: y.Bn,
                    backIn: b,
                    backInOut: w,
                    backOut: T,
                    anticipate: t => (t *= 2) < 1 ? .5 * b(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                },
                S = t => {
                    if (Array.isArray(t)) {
                        (0, s.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        let [e, i, n, r] = t;
                        return p(e, i, n, r)
                    }
                    return "string" == typeof t ? ((0, s.k)(void 0 !== A[t], `Invalid easing type '${t}'`), A[t]) : t
                };
            var C = i(5340),
                V = i(7534);

            function E({
                duration: t = 300,
                keyframes: e,
                times: i,
                ease: n = "easeInOut"
            }) {
                let r = g(n) ? n.map(S) : S(n),
                    s = {
                        done: !1,
                        value: e[0]
                    },
                    o = (i && i.length === e.length ? i : (0, V.Y)(e)).map(e => e * t),
                    a = (0, C.s)(o, e, {
                        ease: Array.isArray(r) ? r : e.map(() => r || v).splice(0, e.length - 1)
                    });
                return {
                    calculatedDuration: t,
                    next: e => (s.value = a(e), s.done = e >= t, s)
                }
            }
            var D = i(1977);

            function M(t, e, i) {
                let n = Math.max(e - 5, 0);
                return (0, D.R)(i - t(n), e - n)
            }
            var R = i(232);

            function L(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            let k = ["duration", "bounce"],
                j = ["stiffness", "damping", "mass"];

            function B(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function F({
                keyframes: t,
                restDelta: e,
                restSpeed: i,
                ...n
            }) {
                let r;
                let a = t[0],
                    l = t[t.length - 1],
                    u = {
                        done: !1,
                        value: a
                    },
                    {
                        stiffness: h,
                        damping: c,
                        mass: d,
                        velocity: p,
                        duration: m,
                        isResolvedFromDuration: f
                    } = function(t) {
                        let e = {
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1,
                            ...t
                        };
                        if (!B(t, j) && B(t, k)) {
                            let i = function({
                                duration: t = 800,
                                bounce: e = .25,
                                velocity: i = 0,
                                mass: n = 1
                            }) {
                                let r, a;
                                (0, s.K)(t <= (0, o.w)(10), "Spring duration must be 10 seconds or less");
                                let l = 1 - e;
                                l = (0, R.u)(.05, 1, l), t = (0, R.u)(.01, 10, (0, o.X)(t)), l < 1 ? (r = e => {
                                    let n = e * l,
                                        r = n * t,
                                        s = L(e, l);
                                    return .001 - (n - i) / s * Math.exp(-r)
                                }, a = e => {
                                    let n = e * l,
                                        s = n * t,
                                        o = Math.pow(l, 2) * Math.pow(e, 2) * t,
                                        a = L(Math.pow(e, 2), l),
                                        u = -r(e) + .001 > 0 ? -1 : 1;
                                    return u * ((s * i + i - o) * Math.exp(-s)) / a
                                }) : (r = e => {
                                    let n = Math.exp(-e * t),
                                        r = (e - i) * t + 1;
                                    return -.001 + n * r
                                }, a = e => {
                                    let n = Math.exp(-e * t),
                                        r = (i - e) * (t * t);
                                    return n * r
                                });
                                let u = 5 / t,
                                    h = function(t, e, i) {
                                        let n = i;
                                        for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                                        return n
                                    }(r, a, u);
                                if (t = (0, o.w)(t), isNaN(h)) return {
                                    stiffness: 100,
                                    damping: 10,
                                    duration: t
                                }; {
                                    let e = Math.pow(h, 2) * n;
                                    return {
                                        stiffness: e,
                                        damping: 2 * l * Math.sqrt(n * e),
                                        duration: t
                                    }
                                }
                            }(t);
                            (e = { ...e,
                                ...i,
                                velocity: 0,
                                mass: 1
                            }).isResolvedFromDuration = !0
                        }
                        return e
                    }(n),
                    v = p ? -(0, o.X)(p) : 0,
                    g = c / (2 * Math.sqrt(h * d)),
                    y = l - a,
                    x = (0, o.X)(Math.sqrt(h / d)),
                    P = 5 > Math.abs(y);
                if (i || (i = P ? .01 : 2), e || (e = P ? .005 : .5), g < 1) {
                    let t = L(x, g);
                    r = e => {
                        let i = Math.exp(-g * x * e);
                        return l - i * ((v + g * x * y) / t * Math.sin(t * e) + y * Math.cos(t * e))
                    }
                } else if (1 === g) r = t => l - Math.exp(-x * t) * (y + (v + x * y) * t);
                else {
                    let t = x * Math.sqrt(g * g - 1);
                    r = e => {
                        let i = Math.exp(-g * x * e),
                            n = Math.min(t * e, 300);
                        return l - i * ((v + g * x * y) * Math.sinh(n) + t * y * Math.cosh(n)) / t
                    }
                }
                return {
                    calculatedDuration: f && m || null,
                    next: t => {
                        let n = r(t);
                        if (f) u.done = t >= m;
                        else {
                            let s = v;
                            0 !== t && (s = g < 1 ? M(r, t, n) : 0);
                            let o = Math.abs(s) <= i,
                                a = Math.abs(l - n) <= e;
                            u.done = o && a
                        }
                        return u.value = u.done ? l : n, u
                    }
                }
            }

            function O({
                keyframes: t,
                velocity: e = 0,
                power: i = .8,
                timeConstant: n = 325,
                bounceDamping: r = 10,
                bounceStiffness: s = 500,
                modifyTarget: o,
                min: a,
                max: l,
                restDelta: u = .5,
                restSpeed: h
            }) {
                let c, d;
                let p = t[0],
                    m = {
                        done: !1,
                        value: p
                    },
                    f = t => void 0 !== a && t < a || void 0 !== l && t > l,
                    v = t => void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l,
                    g = i * e,
                    y = p + g,
                    x = void 0 === o ? y : o(y);
                x !== y && (g = x - p);
                let P = t => -g * Math.exp(-t / n),
                    T = t => x + P(t),
                    b = t => {
                        let e = P(t),
                            i = T(t);
                        m.done = Math.abs(e) <= u, m.value = m.done ? x : i
                    },
                    w = t => {
                        f(m.value) && (c = t, d = F({
                            keyframes: [m.value, v(m.value)],
                            velocity: M(T, t, m.value),
                            damping: r,
                            stiffness: s,
                            restDelta: u,
                            restSpeed: h
                        }))
                    };
                return w(0), {
                    calculatedDuration: null,
                    next: t => {
                        let e = !1;
                        return (d || void 0 !== c || (e = !0, b(t), w(t)), void 0 !== c && t > c) ? d.next(t - c) : (e || b(t), m)
                    }
                }
            }
            var I = i(1253);
            let W = t => {
                let e = ({
                    timestamp: e
                }) => t(e);
                return {
                    start: () => I.Wi.update(e, !0),
                    stop: () => (0, I.Pn)(e),
                    now: () => I.frameData.isProcessing ? I.frameData.timestamp : performance.now()
                }
            };

            function U(t) {
                let e = 0,
                    i = t.next(e);
                for (; !i.done && e < 2e4;) e += 50, i = t.next(e);
                return e >= 2e4 ? 1 / 0 : e
            }
            let $ = {
                decay: O,
                inertia: O,
                tween: E,
                keyframes: E,
                spring: F
            };

            function N({
                autoplay: t = !0,
                delay: e = 0,
                driver: i = W,
                keyframes: n,
                type: r = "keyframes",
                repeat: s = 0,
                repeatDelay: a = 0,
                repeatType: l = "loop",
                onPlay: u,
                onStop: h,
                onComplete: c,
                onUpdate: d,
                ...p
            }) {
                let m, f, v, g, y, x = 1,
                    P = !1,
                    T = () => {
                        f = new Promise(t => {
                            m = t
                        })
                    };
                T();
                let b = $[r] || E;
                b !== E && "number" != typeof n[0] && (g = (0, C.s)([0, 100], n, {
                    clamp: !1
                }), n = [0, 100]);
                let w = b({ ...p,
                    keyframes: n
                });
                "mirror" === l && (y = b({ ...p,
                    keyframes: [...n].reverse(),
                    velocity: -(p.velocity || 0)
                }));
                let A = "idle",
                    S = null,
                    V = null,
                    D = null;
                null === w.calculatedDuration && s && (w.calculatedDuration = U(w));
                let {
                    calculatedDuration: M
                } = w, L = 1 / 0, k = 1 / 0;
                null !== M && (k = (L = M + a) * (s + 1) - a);
                let j = 0,
                    B = t => {
                        if (null === V) return;
                        x > 0 && (V = Math.min(V, t)), x < 0 && (V = Math.min(t - k / x, V)), j = null !== S ? S : Math.round(t - V) * x;
                        let i = j - e * (x >= 0 ? 1 : -1),
                            r = x >= 0 ? i < 0 : i > k;
                        j = Math.max(i, 0), "finished" === A && null === S && (j = k);
                        let o = j,
                            u = w;
                        if (s) {
                            let t = j / L,
                                e = Math.floor(t),
                                i = t % 1;
                            !i && t >= 1 && (i = 1), 1 === i && e--, e = Math.min(e, s + 1);
                            let n = !!(e % 2);
                            n && ("reverse" === l ? (i = 1 - i, a && (i -= a / L)) : "mirror" === l && (u = y));
                            let r = (0, R.u)(0, 1, i);
                            j > k && (r = "reverse" === l && n ? 1 : 0), o = r * L
                        }
                        let h = r ? {
                            done: !1,
                            value: n[0]
                        } : u.next(o);
                        g && (h.value = g(h.value));
                        let {
                            done: c
                        } = h;
                        r || null === M || (c = x >= 0 ? j >= k : j <= 0);
                        let p = null === S && ("finished" === A || "running" === A && c);
                        return d && d(h.value), p && I(), h
                    },
                    F = () => {
                        v && v.stop(), v = void 0
                    },
                    O = () => {
                        A = "idle", F(), m(), T(), V = D = null
                    },
                    I = () => {
                        A = "finished", c && c(), F(), m()
                    },
                    N = () => {
                        if (P) return;
                        v || (v = i(B));
                        let t = v.now();
                        u && u(), null !== S ? V = t - S : V && "finished" !== A || (V = t), "finished" === A && T(), D = V, S = null, A = "running", v.start()
                    };
                t && N();
                let X = {
                    then: (t, e) => f.then(t, e),
                    get time() {
                        return (0, o.X)(j)
                    },
                    set time(newTime) {
                        j = newTime = (0, o.w)(newTime), null === S && v && 0 !== x ? V = v.now() - newTime / x : S = newTime
                    },
                    get duration() {
                        let t = null === w.calculatedDuration ? U(w) : w.calculatedDuration;
                        return (0, o.X)(t)
                    },
                    get speed() {
                        return x
                    },
                    set speed(newSpeed) {
                        if (newSpeed === x || !v) return;
                        x = newSpeed, X.time = (0, o.X)(j)
                    },
                    get state() {
                        return A
                    },
                    play: N,
                    pause: () => {
                        A = "paused", S = j
                    },
                    stop: () => {
                        P = !0, "idle" !== A && (A = "idle", h && h(), O())
                    },
                    cancel: () => {
                        null !== D && B(D), O()
                    },
                    complete: () => {
                        A = "finished"
                    },
                    sample: t => (V = 0, B(t))
                };
                return X
            }
            let X = (r = () => Object.hasOwnProperty.call(Element.prototype, "animate"), () => (void 0 === n && (n = r()), n)),
                z = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
                H = (t, e) => "spring" === e.type || "backgroundColor" === t || ! function t(e) {
                    return !!(!e || "string" == typeof e && h[e] || l(e) || Array.isArray(e) && e.every(t))
                }(e.ease);
            var Z = i(6400);
            let G = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                Y = t => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                _ = {
                    type: "keyframes",
                    duration: .8
                },
                q = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                K = (t, {
                    keyframes: e
                }) => e.length > 2 ? _ : Z.G.has(t) ? t.startsWith("scale") ? Y(e[1]) : G : q;
            var Q = i(7081);
            let J = (t, e) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (Q.P.test(e) || "0" === e) && !e.startsWith("url("));
            var tt = i(2311),
                te = i(5368),
                ti = i(1821);
            let tn = (t, e, i, n = {}) => r => {
                let d = (0, ti.e)(n, t) || {},
                    p = d.delay || n.delay || 0,
                    {
                        elapsed: m = 0
                    } = n;
                m -= (0, o.w)(p);
                let f = function(t, e, i, n) {
                        let r, s;
                        let o = J(e, i);
                        r = Array.isArray(i) ? [...i] : [null, i];
                        let a = void 0 !== n.from ? n.from : t.get(),
                            l = [];
                        for (let t = 0; t < r.length; t++) {
                            var u;
                            null === r[t] && (r[t] = 0 === t ? a : r[t - 1]), ("number" == typeof(u = r[t]) ? 0 === u : null !== u ? "none" === u || "0" === u || (0, te.W)(u) : void 0) && l.push(t), "string" == typeof r[t] && "none" !== r[t] && "0" !== r[t] && (s = r[t])
                        }
                        if (o && l.length && s)
                            for (let t = 0; t < l.length; t++) {
                                let i = l[t];
                                r[i] = (0, tt.T)(e, s)
                            }
                        return r
                    }(e, t, i, d),
                    v = f[0],
                    g = f[f.length - 1],
                    y = J(t, v),
                    x = J(t, g);
                (0, s.K)(y === x, `You are trying to animate ${t} from "${v}" to "${g}". ${v} is not an animatable value - to enable this animation set ${v} to a value animatable to ${g} via the \`style\` property.`);
                let P = {
                    keyframes: f,
                    velocity: e.getVelocity(),
                    ease: "easeOut",
                    ...d,
                    delay: -m,
                    onUpdate: t => {
                        e.set(t), d.onUpdate && d.onUpdate(t)
                    },
                    onComplete: () => {
                        r(), d.onComplete && d.onComplete()
                    }
                };
                if ((0, ti.r)(d) || (P = { ...P,
                        ...K(t, P)
                    }), P.duration && (P.duration = (0, o.w)(P.duration)), P.repeatDelay && (P.repeatDelay = (0, o.w)(P.repeatDelay)), !y || !x || a.current || !1 === d.type) return function({
                    keyframes: t,
                    delay: e,
                    onUpdate: i,
                    onComplete: n
                }) {
                    let r = () => (i && i(t[t.length - 1]), n && n(), {
                        time: 0,
                        speed: 1,
                        duration: 0,
                        play: c.Z,
                        pause: c.Z,
                        stop: c.Z,
                        then: t => (t(), Promise.resolve()),
                        cancel: c.Z,
                        complete: c.Z
                    });
                    return e ? N({
                        keyframes: [0, 1],
                        duration: 0,
                        delay: e,
                        onComplete: r
                    }) : r()
                }(a.current ? { ...P,
                    delay: 0
                } : P);
                if (e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
                    let i = function(t, e, {
                        onUpdate: i,
                        onComplete: n,
                        ...r
                    }) {
                        let s, a;
                        let d = X() && z.has(e) && !r.repeatDelay && "mirror" !== r.repeatType && 0 !== r.damping && "inertia" !== r.type;
                        if (!d) return !1;
                        let p = !1,
                            m = () => {
                                a = new Promise(t => {
                                    s = t
                                })
                            };
                        m();
                        let {
                            keyframes: f,
                            duration: v = 300,
                            ease: g,
                            times: y
                        } = r;
                        if (H(e, r)) {
                            let t = N({ ...r,
                                    repeat: 0,
                                    delay: 0
                                }),
                                e = {
                                    done: !1,
                                    value: f[0]
                                },
                                i = [],
                                n = 0;
                            for (; !e.done && n < 2e4;) i.push((e = t.sample(n)).value), n += 10;
                            y = void 0, f = i, v = n - 10, g = "linear"
                        }
                        let x = function(t, e, i, {
                            delay: n = 0,
                            duration: r,
                            repeat: s = 0,
                            repeatType: o = "loop",
                            ease: a,
                            times: c
                        } = {}) {
                            let d = {
                                [e]: i
                            };
                            c && (d.offset = c);
                            let p = function t(e) {
                                if (e) return l(e) ? u(e) : Array.isArray(e) ? e.map(t) : h[e]
                            }(a);
                            return Array.isArray(p) && (d.easing = p), t.animate(d, {
                                delay: n,
                                duration: r,
                                easing: Array.isArray(p) ? "linear" : p,
                                fill: "both",
                                iterations: s + 1,
                                direction: "reverse" === o ? "alternate" : "normal"
                            })
                        }(t.owner.current, e, f, { ...r,
                            duration: v,
                            ease: g,
                            times: y
                        });
                        r.syncStart && (x.startTime = I.frameData.isProcessing ? I.frameData.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
                        let P = () => x.cancel(),
                            T = () => {
                                I.Wi.update(P), s(), m()
                            };
                        return x.onfinish = () => {
                            t.set(function(t, {
                                repeat: e,
                                repeatType: i = "loop"
                            }) {
                                let n = e && "loop" !== i && e % 2 == 1 ? 0 : t.length - 1;
                                return t[n]
                            }(f, r)), n && n(), T()
                        }, {
                            then: (t, e) => a.then(t, e),
                            attachTimeline: t => (x.timeline = t, x.onfinish = null, c.Z),
                            get time() {
                                return (0, o.X)(x.currentTime || 0)
                            },
                            set time(newTime) {
                                x.currentTime = (0, o.w)(newTime)
                            },
                            get speed() {
                                return x.playbackRate
                            },
                            set speed(newSpeed) {
                                x.playbackRate = newSpeed
                            },
                            get duration() {
                                return (0, o.X)(v)
                            },
                            play: () => {
                                p || (x.play(), (0, I.Pn)(P))
                            },
                            pause: () => x.pause(),
                            stop: () => {
                                if (p = !0, "idle" === x.playState) return;
                                let {
                                    currentTime: e
                                } = x;
                                if (e) {
                                    let i = N({ ...r,
                                        autoplay: !1
                                    });
                                    t.setWithVelocity(i.sample(e - 10).value, i.sample(e).value, 10)
                                }
                                T()
                            },
                            complete: () => x.finish(),
                            cancel: T
                        }
                    }(e, t, P);
                    if (i) return i
                }
                return N(P)
            }
        },
        4165: function(t, e, i) {
            i.d(e, {
                d: function() {
                    return m
                }
            });
            var n = i(4157),
                r = i(6400),
                s = i(483);
            let o = "data-" + (0, s.D)("framerAppearId");
            var a = i(2640),
                l = i(9749),
                u = i(7064),
                h = i(1253);

            function c(t, e, {
                delay: i = 0,
                transitionOverride: n,
                type: s
            } = {}) {
                let {
                    transition: c = t.getDefaultTransition(),
                    transitionEnd: d,
                    ...p
                } = t.makeTargetAnimatable(e), m = t.getValue("willChange");
                n && (c = n);
                let f = [],
                    v = s && t.animationState && t.animationState.getState()[s];
                for (let e in p) {
                    let n = t.getValue(e),
                        s = p[e];
                    if (!n || void 0 === s || v && function({
                            protectedKeys: t,
                            needsAnimating: e
                        }, i) {
                            let n = t.hasOwnProperty(i) && !0 !== e[i];
                            return e[i] = !1, n
                        }(v, e)) continue;
                    let u = {
                        delay: i,
                        elapsed: 0,
                        ...c
                    };
                    if (window.HandoffAppearAnimations && !n.hasAnimated) {
                        let i = t.getProps()[o];
                        i && (u.elapsed = window.HandoffAppearAnimations(i, e, n, h.Wi), u.syncStart = !0)
                    }
                    n.start((0, a.v)(e, n, s, t.shouldReduceMotion && r.G.has(e) ? {
                        type: !1
                    } : u));
                    let d = n.animation;
                    (0, l.L)(m) && (m.add(e), d.then(() => m.remove(e))), f.push(d)
                }
                return d && Promise.all(f).then(() => {
                    d && (0, u.CD)(t, d)
                }), f
            }

            function d(t, e, i = {}) {
                let r = (0, n.x)(t, e, i.custom),
                    {
                        transition: s = t.getDefaultTransition() || {}
                    } = r || {};
                i.transitionOverride && (s = i.transitionOverride);
                let o = r ? () => Promise.all(c(t, r, i)) : () => Promise.resolve(),
                    a = t.variantChildren && t.variantChildren.size ? (n = 0) => {
                        let {
                            delayChildren: r = 0,
                            staggerChildren: o,
                            staggerDirection: a
                        } = s;
                        return function(t, e, i = 0, n = 0, r = 1, s) {
                            let o = [],
                                a = (t.variantChildren.size - 1) * n,
                                l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                            return Array.from(t.variantChildren).sort(p).forEach((t, n) => {
                                t.notify("AnimationStart", e), o.push(d(t, e, { ...s,
                                    delay: i + l(n)
                                }).then(() => t.notify("AnimationComplete", e)))
                            }), Promise.all(o)
                        }(t, e, r + n, o, a, i)
                    } : () => Promise.resolve(),
                    {
                        when: l
                    } = s;
                if (!l) return Promise.all([o(), a(i.delay)]); {
                    let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
                    return t().then(() => e())
                }
            }

            function p(t, e) {
                return t.sortNodePosition(e)
            }

            function m(t, e, i = {}) {
                let r;
                if (t.notify("AnimationStart", e), Array.isArray(e)) {
                    let n = e.map(e => d(t, e, i));
                    r = Promise.all(n)
                } else if ("string" == typeof e) r = d(t, e, i);
                else {
                    let s = "function" == typeof e ? (0, n.x)(t, e, i.custom) : e;
                    r = Promise.all(c(t, s, i))
                }
                return r.then(() => t.notify("AnimationComplete", e))
            }
        },
        2305: function(t, e, i) {
            i.d(e, {
                C: function() {
                    return n
                }
            });
            let n = t => Array.isArray(t)
        },
        1821: function(t, e, i) {
            function n({
                when: t,
                delay: e,
                delayChildren: i,
                staggerChildren: n,
                staggerDirection: r,
                repeat: s,
                repeatType: o,
                repeatDelay: a,
                from: l,
                elapsed: u,
                ...h
            }) {
                return !!Object.keys(h).length
            }

            function r(t, e) {
                return t[e] || t.default || t
            }
            i.d(e, {
                e: function() {
                    return r
                },
                r: function() {
                    return n
                }
            })
        },
        9061: function(t, e, i) {
            i.d(e, {
                _: function() {
                    return r
                }
            });
            var n = i(6006);
            let r = (0, n.createContext)({
                transformPagePoint: t => t,
                isStatic: !1,
                reducedMotion: "never"
            })
        },
        9393: function(t, e, i) {
            i.d(e, {
                Bn: function() {
                    return o
                },
                X7: function() {
                    return a
                },
                Z7: function() {
                    return s
                }
            });
            var n = i(1355),
                r = i(248);
            let s = t => 1 - Math.sin(Math.acos(t)),
                o = (0, r.M)(s),
                a = (0, n.o)(o)
        },
        1355: function(t, e, i) {
            i.d(e, {
                o: function() {
                    return n
                }
            });
            let n = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
        },
        248: function(t, e, i) {
            i.d(e, {
                M: function() {
                    return n
                }
            });
            let n = t => e => 1 - t(1 - e)
        },
        712: function(t, e, i) {
            i.d(e, {
                E: function() {
                    return iJ
                }
            });
            var n = i(6006),
                r = i(9061);
            let s = (0, n.createContext)({}),
                o = (0, n.createContext)(null);
            var a = i(3398);
            let l = (0, n.createContext)({
                strict: !1
            });

            function u(t) {
                return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }

            function h(t) {
                return "string" == typeof t || Array.isArray(t)
            }

            function c(t) {
                return "object" == typeof t && "function" == typeof t.start
            }
            let d = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                p = ["initial", ...d];

            function m(t) {
                return c(t.animate) || p.some(e => h(t[e]))
            }

            function f(t) {
                return !!(m(t) || t.variants)
            }

            function v(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            let g = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                y = {};
            for (let t in g) y[t] = {
                isEnabled: e => g[t].some(t => !!e[t])
            };
            var x = i(5532);
            let P = (0, n.createContext)({}),
                T = (0, n.createContext)({}),
                b = Symbol.for("motionComponentSymbol"),
                w = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function A(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (w.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
                return !1
            }
            let S = {};
            var C = i(6400);

            function V(t, {
                layout: e,
                layoutId: i
            }) {
                return C.G.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!S[t] || "opacity" === t)
            }
            var E = i(9461);
            let D = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                M = C._.length;
            var R = i(9400);
            let L = (t, e) => e && "number" == typeof t ? e.transform(t) : t;
            var k = i(8740);

            function j(t, e, i, n) {
                let {
                    style: r,
                    vars: s,
                    transform: o,
                    transformOrigin: a
                } = t, l = !1, u = !1, h = !0;
                for (let t in e) {
                    let i = e[t];
                    if ((0, R.f9)(t)) {
                        s[t] = i;
                        continue
                    }
                    let n = k.j[t],
                        c = L(i, n);
                    if (C.G.has(t)) {
                        if (l = !0, o[t] = c, !h) continue;
                        i !== (n.default || 0) && (h = !1)
                    } else t.startsWith("origin") ? (u = !0, a[t] = c) : r[t] = c
                }
                if (!e.transform && (l || n ? r.transform = function(t, {
                        enableHardwareAcceleration: e = !0,
                        allowTransformNone: i = !0
                    }, n, r) {
                        let s = "";
                        for (let e = 0; e < M; e++) {
                            let i = C._[e];
                            if (void 0 !== t[i]) {
                                let e = D[i] || i;
                                s += `${e}(${t[i]}) `
                            }
                        }
                        return e && !t.z && (s += "translateZ(0)"), s = s.trim(), r ? s = r(t, n ? "" : s) : i && n && (s = "none"), s
                    }(t.transform, i, h, n) : r.transform && (r.transform = "none")), u) {
                    let {
                        originX: t = "50%",
                        originY: e = "50%",
                        originZ: i = 0
                    } = a;
                    r.transformOrigin = `${t} ${e} ${i}`
                }
            }
            let B = () => ({
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {}
            });

            function F(t, e, i) {
                for (let n in e)(0, E.i)(e[n]) || V(n, i) || (t[n] = e[n])
            }

            function O(t, e, i) {
                let r = {},
                    s = function(t, e, i) {
                        let r = t.style || {},
                            s = {};
                        return F(s, r, t), Object.assign(s, function({
                            transformTemplate: t
                        }, e, i) {
                            return (0, n.useMemo)(() => {
                                let n = B();
                                return j(n, e, {
                                    enableHardwareAcceleration: !i
                                }, t), Object.assign({}, n.vars, n.style)
                            }, [e])
                        }(t, e, i)), t.transformValues ? t.transformValues(s) : s
                    }(t, e, i);
                return t.drag && !1 !== t.dragListener && (r.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0), r.style = s, r
            }
            var I = i(441),
                W = i(459);

            function U(t, e, i) {
                return "string" == typeof t ? t : W.px.transform(e + i * t)
            }
            let $ = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                N = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function X(t, {
                attrX: e,
                attrY: i,
                attrScale: n,
                originX: r,
                originY: s,
                pathLength: o,
                pathSpacing: a = 1,
                pathOffset: l = 0,
                ...u
            }, h, c, d) {
                if (j(t, u, h, d), c) {
                    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                    return
                }
                t.attrs = t.style, t.style = {};
                let {
                    attrs: p,
                    style: m,
                    dimensions: f
                } = t;
                p.transform && (f && (m.transform = p.transform), delete p.transform), f && (void 0 !== r || void 0 !== s || m.transform) && (m.transformOrigin = function(t, e, i) {
                    let n = U(e, t.x, t.width),
                        r = U(i, t.y, t.height);
                    return `${n} ${r}`
                }(f, void 0 !== r ? r : .5, void 0 !== s ? s : .5)), void 0 !== e && (p.x = e), void 0 !== i && (p.y = i), void 0 !== n && (p.scale = n), void 0 !== o && function(t, e, i = 1, n = 0, r = !0) {
                    t.pathLength = 1;
                    let s = r ? $ : N;
                    t[s.offset] = W.px.transform(-n);
                    let o = W.px.transform(e),
                        a = W.px.transform(i);
                    t[s.array] = `${o} ${a}`
                }(p, o, a, l, !1)
            }
            let z = () => ({ ...B(),
                    attrs: {}
                }),
                H = t => "string" == typeof t && "svg" === t.toLowerCase();

            function Z(t, e, i, r) {
                let s = (0, n.useMemo)(() => {
                    let i = z();
                    return X(i, e, {
                        enableHardwareAcceleration: !1
                    }, H(r), t.transformTemplate), { ...i.attrs,
                        style: { ...i.style
                        }
                    }
                }, [e]);
                if (t.style) {
                    let e = {};
                    F(e, t.style, t), s.style = { ...e,
                        ...s.style
                    }
                }
                return s
            }
            var G = i(483);

            function Y(t, {
                style: e,
                vars: i
            }, n, r) {
                for (let s in Object.assign(t.style, e, r && r.getProjectionStyles(n)), i) t.style.setProperty(s, i[s])
            }
            let _ = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

            function q(t, e, i, n) {
                for (let i in Y(t, e, void 0, n), e.attrs) t.setAttribute(_.has(i) ? i : (0, G.D)(i), e.attrs[i])
            }

            function K(t, e) {
                let {
                    style: i
                } = t, n = {};
                for (let r in i)((0, E.i)(i[r]) || e.style && (0, E.i)(e.style[r]) || V(r, t)) && (n[r] = i[r]);
                return n
            }

            function Q(t, e) {
                let i = K(t, e);
                for (let n in t)
                    if ((0, E.i)(t[n]) || (0, E.i)(e[n])) {
                        let e = -1 !== C._.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
                        i[e] = t[n]
                    }
                return i
            }
            var J = i(2822),
                tt = i(789),
                te = i(4080);

            function ti(t) {
                let e = (0, E.i)(t) ? t.get() : t;
                return (0, te.p)(e) ? e.toValue() : e
            }
            let tn = t => (e, i) => {
                let r = (0, n.useContext)(s),
                    a = (0, n.useContext)(o),
                    l = () => (function({
                        scrapeMotionValuesFromProps: t,
                        createRenderState: e,
                        onMount: i
                    }, n, r, s) {
                        let o = {
                            latestValues: function(t, e, i, n) {
                                let r = {},
                                    s = n(t, {});
                                for (let t in s) r[t] = ti(s[t]);
                                let {
                                    initial: o,
                                    animate: a
                                } = t, l = m(t), u = f(t);
                                e && u && !l && !1 !== t.inherit && (void 0 === o && (o = e.initial), void 0 === a && (a = e.animate));
                                let h = !!i && !1 === i.initial;
                                h = h || !1 === o;
                                let d = h ? a : o;
                                if (d && "boolean" != typeof d && !c(d)) {
                                    let e = Array.isArray(d) ? d : [d];
                                    e.forEach(e => {
                                        let i = (0, J.o)(t, e);
                                        if (!i) return;
                                        let {
                                            transitionEnd: n,
                                            transition: s,
                                            ...o
                                        } = i;
                                        for (let t in o) {
                                            let e = o[t];
                                            if (Array.isArray(e)) {
                                                let t = h ? e.length - 1 : 0;
                                                e = e[t]
                                            }
                                            null !== e && (r[t] = e)
                                        }
                                        for (let t in n) r[t] = n[t]
                                    })
                                }
                                return r
                            }(n, r, s, t),
                            renderState: e()
                        };
                        return i && (o.mount = t => i(n, t, o)), o
                    })(t, e, r, a);
                return i ? l() : (0, tt.h)(l)
            };
            var tr = i(1253);
            let ts = {
                    useVisualState: tn({
                        scrapeMotionValuesFromProps: Q,
                        createRenderState: z,
                        onMount: (t, e, {
                            renderState: i,
                            latestValues: n
                        }) => {
                            tr.Wi.read(() => {
                                try {
                                    i.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                                } catch (t) {
                                    i.dimensions = {
                                        x: 0,
                                        y: 0,
                                        width: 0,
                                        height: 0
                                    }
                                }
                            }), tr.Wi.render(() => {
                                X(i, n, {
                                    enableHardwareAcceleration: !1
                                }, H(e.tagName), t.transformTemplate), q(e, i)
                            })
                        }
                    })
                },
                to = {
                    useVisualState: tn({
                        scrapeMotionValuesFromProps: K,
                        createRenderState: B
                    })
                };

            function ta(t, e, i, n = {
                passive: !0
            }) {
                return t.addEventListener(e, i, n), () => t.removeEventListener(e, i)
            }
            let tl = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

            function tu(t, e = "page") {
                return {
                    point: {
                        x: t[e + "X"],
                        y: t[e + "Y"]
                    }
                }
            }
            let th = t => e => tl(e) && t(e, tu(e));

            function tc(t, e, i, n) {
                return ta(t, e, th(i), n)
            }
            var td = i(782);

            function tp(t) {
                let e = null;
                return () => null === e && (e = t, () => {
                    e = null
                })
            }
            let tm = tp("dragHorizontal"),
                tf = tp("dragVertical");

            function tv(t) {
                let e = !1;
                if ("y" === t) e = tf();
                else if ("x" === t) e = tm();
                else {
                    let t = tm(),
                        i = tf();
                    t && i ? e = () => {
                        t(), i()
                    } : (t && t(), i && i())
                }
                return e
            }

            function tg() {
                let t = tv(!0);
                return !t || (t(), !1)
            }
            class ty {
                constructor(t) {
                    this.isMounted = !1, this.node = t
                }
                update() {}
            }

            function tx(t, e) {
                let i = "pointer" + (e ? "enter" : "leave"),
                    n = "onHover" + (e ? "Start" : "End");
                return tc(t.current, i, (i, r) => {
                    if ("touch" === i.type || tg()) return;
                    let s = t.getProps();
                    t.animationState && s.whileHover && t.animationState.setActive("whileHover", e), s[n] && tr.Wi.update(() => s[n](i, r))
                }, {
                    passive: !t.getProps()[n]
                })
            }
            let tP = (t, e) => !!e && (t === e || tP(t, e.parentElement));
            var tT = i(9153);

            function tb(t, e) {
                if (!e) return;
                let i = new PointerEvent("pointer" + t);
                e(i, tu(i))
            }
            let tw = new WeakMap,
                tA = new WeakMap,
                tS = t => {
                    let e = tw.get(t.target);
                    e && e(t)
                },
                tC = t => {
                    t.forEach(tS)
                },
                tV = {
                    some: 0,
                    all: 1
                };
            var tE = i(2305);

            function tD(t, e) {
                if (!Array.isArray(e)) return !1;
                let i = e.length;
                if (i !== t.length) return !1;
                for (let n = 0; n < i; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }
            var tM = i(4157),
                tR = i(4165);
            let tL = [...d].reverse(),
                tk = d.length;

            function tj(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            let tB = 0;
            var tF = i(2864),
                tO = i(9683);
            let tI = (t, e) => Math.abs(t - e);
            class tW {
                constructor(t, e, {
                    transformPagePoint: i
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let t = tN(this.lastMoveEventInfo, this.history),
                                e = null !== this.startEvent,
                                i = function(t, e) {
                                    let i = tI(t.x, e.x),
                                        n = tI(t.y, e.y);
                                    return Math.sqrt(i ** 2 + n ** 2)
                                }(t.offset, {
                                    x: 0,
                                    y: 0
                                }) >= 3;
                            if (!e && !i) return;
                            let {
                                point: n
                            } = t, {
                                timestamp: r
                            } = tr.frameData;
                            this.history.push({ ...n,
                                timestamp: r
                            });
                            let {
                                onStart: s,
                                onMove: o
                            } = this.handlers;
                            e || (s && s(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, t)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = tU(e, this.transformPagePoint), tr.Wi.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let {
                                onEnd: i,
                                onSessionEnd: n
                            } = this.handlers, r = tN("pointercancel" === t.type ? this.lastMoveEventInfo : tU(e, this.transformPagePoint), this.history);
                            this.startEvent && i && i(t, r), n && n(t, r)
                        }, !tl(t)) return;
                    this.handlers = e, this.transformPagePoint = i;
                    let n = tu(t),
                        r = tU(n, this.transformPagePoint),
                        {
                            point: s
                        } = r,
                        {
                            timestamp: o
                        } = tr.frameData;
                    this.history = [{ ...s,
                        timestamp: o
                    }];
                    let {
                        onSessionStart: a
                    } = e;
                    a && a(t, tN(r, this.history)), this.removeListeners = (0, td.z)(tc(window, "pointermove", this.handlePointerMove), tc(window, "pointerup", this.handlePointerUp), tc(window, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), (0, tr.Pn)(this.updatePoint)
                }
            }

            function tU(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function t$(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function tN({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: t$(t, tX(e)),
                    offset: t$(t, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let i = t.length - 1,
                            n = null,
                            r = tX(t);
                        for (; i >= 0 && (n = t[i], !(r.timestamp - n.timestamp > (0, tO.w)(.1)));) i--;
                        if (!n) return {
                            x: 0,
                            y: 0
                        };
                        let s = (0, tO.X)(r.timestamp - n.timestamp);
                        if (0 === s) return {
                            x: 0,
                            y: 0
                        };
                        let o = {
                            x: (r.x - n.x) / s,
                            y: (r.y - n.y) / s
                        };
                        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
                    }(e, 0)
                }
            }

            function tX(t) {
                return t[t.length - 1]
            }
            var tz = i(2581),
                tH = i(698);

            function tZ(t) {
                return t.max - t.min
            }

            function tG(t, e = 0, i = .01) {
                return Math.abs(t - e) <= i
            }

            function tY(t, e, i, n = .5) {
                t.origin = n, t.originPoint = (0, tH.C)(e.min, e.max, t.origin), t.scale = tZ(i) / tZ(e), (tG(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = (0, tH.C)(i.min, i.max, t.origin) - t.originPoint, (tG(t.translate) || isNaN(t.translate)) && (t.translate = 0)
            }

            function t_(t, e, i, n) {
                tY(t.x, e.x, i.x, n ? n.originX : void 0), tY(t.y, e.y, i.y, n ? n.originY : void 0)
            }

            function tq(t, e, i) {
                t.min = i.min + e.min, t.max = t.min + tZ(e)
            }

            function tK(t, e, i) {
                t.min = e.min - i.min, t.max = t.min + tZ(e)
            }

            function tQ(t, e, i) {
                tK(t.x, e.x, i.x), tK(t.y, e.y, i.y)
            }
            var tJ = i(232);

            function t0(t, e, i) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
                }
            }

            function t1(t, e) {
                let i = e.min - t.min,
                    n = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([i, n] = [n, i]), {
                    min: i,
                    max: n
                }
            }

            function t2(t, e, i) {
                return {
                    min: t5(t, e),
                    max: t5(t, i)
                }
            }

            function t5(t, e) {
                return "number" == typeof t ? t : t[e] || 0
            }
            let t3 = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                t9 = () => ({
                    x: t3(),
                    y: t3()
                }),
                t4 = () => ({
                    min: 0,
                    max: 0
                }),
                t8 = () => ({
                    x: t4(),
                    y: t4()
                });

            function t6(t) {
                return [t("x"), t("y")]
            }

            function t7({
                top: t,
                left: e,
                right: i,
                bottom: n
            }) {
                return {
                    x: {
                        min: e,
                        max: i
                    },
                    y: {
                        min: t,
                        max: n
                    }
                }
            }

            function et(t) {
                return void 0 === t || 1 === t
            }

            function ee({
                scale: t,
                scaleX: e,
                scaleY: i
            }) {
                return !et(t) || !et(e) || !et(i)
            }

            function ei(t) {
                return ee(t) || en(t) || t.z || t.rotate || t.rotateX || t.rotateY
            }

            function en(t) {
                var e, i;
                return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
            }

            function er(t, e, i, n, r) {
                return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e
            }

            function es(t, e = 0, i = 1, n, r) {
                t.min = er(t.min, e, i, n, r), t.max = er(t.max, e, i, n, r)
            }

            function eo(t, {
                x: e,
                y: i
            }) {
                es(t.x, e.translate, e.scale, e.originPoint), es(t.y, i.translate, i.scale, i.originPoint)
            }

            function ea(t) {
                return Number.isInteger(t) ? t : t > 1.0000000000001 || t < .999999999999 ? t : 1
            }

            function el(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function eu(t, e, [i, n, r]) {
                let s = void 0 !== e[r] ? e[r] : .5,
                    o = (0, tH.C)(t.min, t.max, s);
                es(t, e[i], e[n], o, e.scale)
            }
            let eh = ["x", "scaleX", "originX"],
                ec = ["y", "scaleY", "originY"];

            function ed(t, e) {
                eu(t.x, e, eh), eu(t.y, e, ec)
            }

            function ep(t, e) {
                return t7(function(t, e) {
                    if (!e) return t;
                    let i = e({
                            x: t.left,
                            y: t.top
                        }),
                        n = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: i.y,
                        left: i.x,
                        bottom: n.y,
                        right: n.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            var em = i(2640);
            let ef = new WeakMap;
            class ev {
                constructor(t) {
                    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = t8(), this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    let {
                        presenceContext: i
                    } = this.visualElement;
                    i && !1 === i.isPresent || (this.panSession = new tW(t, {
                        onSessionStart: t => {
                            this.stopAnimation(), e && this.snapToCursor(tu(t, "page").point)
                        },
                        onStart: (t, e) => {
                            let {
                                drag: i,
                                dragPropagation: n,
                                onDragStart: r
                            } = this.getProps();
                            if (i && !n && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = tv(i), !this.openGlobalLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), t6(t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if (W.aQ.test(e)) {
                                    let {
                                        projection: i
                                    } = this.visualElement;
                                    if (i && i.layout) {
                                        let n = i.layout.layoutBox[t];
                                        if (n) {
                                            let t = tZ(n);
                                            e = t * (parseFloat(e) / 100)
                                        }
                                    }
                                }
                                this.originPoint[t] = e
                            }), r && tr.Wi.update(() => r(t, e), !1, !0);
                            let {
                                animationState: s
                            } = this.visualElement;
                            s && s.setActive("whileDrag", !0)
                        },
                        onMove: (t, e) => {
                            let {
                                dragPropagation: i,
                                dragDirectionLock: n,
                                onDirectionLock: r,
                                onDrag: s
                            } = this.getProps();
                            if (!i && !this.openGlobalLock) return;
                            let {
                                offset: o
                            } = e;
                            if (n && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let i = null;
                                    return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                                }(o), null !== this.currentDirection && r && r(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", e.point, o), this.updateAxis("y", e.point, o), this.visualElement.render(), s && s(t, e)
                        },
                        onSessionEnd: (t, e) => this.stop(t, e)
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint()
                    }))
                }
                stop(t, e) {
                    let i = this.isDragging;
                    if (this.cancel(), !i) return;
                    let {
                        velocity: n
                    } = e;
                    this.startAnimation(n);
                    let {
                        onDragEnd: r
                    } = this.getProps();
                    r && tr.Wi.update(() => r(t, e))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: t,
                        animationState: e
                    } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: i
                    } = this.getProps();
                    !i && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), e && e.setActive("whileDrag", !1)
                }
                updateAxis(t, e, i) {
                    let {
                        drag: n
                    } = this.getProps();
                    if (!i || !eg(t, n, this.currentDirection)) return;
                    let r = this.getAxisMotionValue(t),
                        s = this.originPoint[t] + i[t];
                    this.constraints && this.constraints[t] && (s = function(t, {
                        min: e,
                        max: i
                    }, n) {
                        return void 0 !== e && t < e ? t = n ? (0, tH.C)(e, t, n.min) : Math.max(t, e) : void 0 !== i && t > i && (t = n ? (0, tH.C)(i, t, n.max) : Math.min(t, i)), t
                    }(s, this.constraints[t], this.elastic[t])), r.set(s)
                }
                resolveConstraints() {
                    let {
                        dragConstraints: t,
                        dragElastic: e
                    } = this.getProps(), {
                        layout: i
                    } = this.visualElement.projection || {}, n = this.constraints;
                    t && u(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && i ? this.constraints = function(t, {
                        top: e,
                        left: i,
                        bottom: n,
                        right: r
                    }) {
                        return {
                            x: t0(t.x, i, r),
                            y: t0(t.y, e, n)
                        }
                    }(i.layoutBox, t) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: t2(t, "left", "right"),
                            y: t2(t, "top", "bottom")
                        }
                    }(e), n !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && t6(t => {
                        this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let i = {};
                            return void 0 !== e.min && (i.min = e.min - t.min), void 0 !== e.max && (i.max = e.max - t.min), i
                        }(i.layoutBox[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: i
                    } = this.getProps();
                    if (!e || !u(e)) return !1;
                    let n = e.current;
                    (0, tF.k)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: r
                    } = this.visualElement;
                    if (!r || !r.layout) return !1;
                    let s = function(t, e, i) {
                            let n = ep(t, i),
                                {
                                    scroll: r
                                } = e;
                            return r && (el(n.x, r.offset.x), el(n.y, r.offset.y)), n
                        }(n, r.root, this.visualElement.getTransformPagePoint()),
                        o = {
                            x: t1((t = r.layout.layoutBox).x, s.x),
                            y: t1(t.y, s.y)
                        };
                    if (i) {
                        let t = i(function({
                            x: t,
                            y: e
                        }) {
                            return {
                                top: e.min,
                                right: t.max,
                                bottom: e.max,
                                left: t.min
                            }
                        }(o));
                        this.hasMutatedConstraints = !!t, t && (o = t7(t))
                    }
                    return o
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: i,
                        dragElastic: n,
                        dragTransition: r,
                        dragSnapToOrigin: s,
                        onDragTransitionEnd: o
                    } = this.getProps(), a = this.constraints || {}, l = t6(o => {
                        if (!eg(o, e, this.currentDirection)) return;
                        let l = a && a[o] || {};
                        s && (l = {
                            min: 0,
                            max: 0
                        });
                        let u = {
                            type: "inertia",
                            velocity: i ? t[o] : 0,
                            bounceStiffness: n ? 200 : 1e6,
                            bounceDamping: n ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...r,
                            ...l
                        };
                        return this.startAxisValueAnimation(o, u)
                    });
                    return Promise.all(l).then(o)
                }
                startAxisValueAnimation(t, e) {
                    let i = this.getAxisMotionValue(t);
                    return i.start((0, em.v)(t, i, 0, e))
                }
                stopAnimation() {
                    t6(t => this.getAxisMotionValue(t).stop())
                }
                getAxisMotionValue(t) {
                    let e = "_drag" + t.toUpperCase(),
                        i = this.visualElement.getProps(),
                        n = i[e];
                    return n || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
                }
                snapToCursor(t) {
                    t6(e => {
                        let {
                            drag: i
                        } = this.getProps();
                        if (!eg(e, i, this.currentDirection)) return;
                        let {
                            projection: n
                        } = this.visualElement, r = this.getAxisMotionValue(e);
                        if (n && n.layout) {
                            let {
                                min: i,
                                max: s
                            } = n.layout.layoutBox[e];
                            r.set(t[e] - (0, tH.C)(i, s, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: t,
                        dragConstraints: e
                    } = this.getProps(), {
                        projection: i
                    } = this.visualElement;
                    if (!u(e) || !i || !this.constraints) return;
                    this.stopAnimation();
                    let n = {
                        x: 0,
                        y: 0
                    };
                    t6(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e) {
                            let i = e.get();
                            n[t] = function(t, e) {
                                let i = .5,
                                    n = tZ(t),
                                    r = tZ(e);
                                return r > n ? i = (0, tz.Y)(e.min, e.max - n, t.min) : n > r && (i = (0, tz.Y)(t.min, t.max - r, e.min)), (0, tJ.u)(0, 1, i)
                            }({
                                min: i,
                                max: i
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: r
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = r ? r({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), t6(e => {
                        if (!eg(e, t, null)) return;
                        let i = this.getAxisMotionValue(e),
                            {
                                min: r,
                                max: s
                            } = this.constraints[e];
                        i.set((0, tH.C)(r, s, n[e]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    ef.set(this.visualElement, this);
                    let t = this.visualElement.current,
                        e = tc(t, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: i = !0
                            } = this.getProps();
                            e && i && this.start(t)
                        }),
                        i = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            u(t) && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: n
                        } = this.visualElement,
                        r = n.addEventListener("measure", i);
                    n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()), i();
                    let s = ta(window, "resize", () => this.scalePositionWithinConstraints()),
                        o = n.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && (t6(e => {
                                let i = this.getAxisMotionValue(e);
                                i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        s(), e(), r(), o && o()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: i = !1,
                            dragPropagation: n = !1,
                            dragConstraints: r = !1,
                            dragElastic: s = .35,
                            dragMomentum: o = !0
                        } = t;
                    return { ...t,
                        drag: e,
                        dragDirectionLock: i,
                        dragPropagation: n,
                        dragConstraints: r,
                        dragElastic: s,
                        dragMomentum: o
                    }
                }
            }

            function eg(t, e, i) {
                return (!0 === e || e === t) && (null === i || i === t)
            }
            let ey = t => (e, i) => {
                    t && tr.Wi.update(() => t(e, i))
                },
                ex = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                };

            function eP(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let eT = {
                correct: (t, e) => {
                    if (!e.target) return t;
                    if ("string" == typeof t) {
                        if (!W.px.test(t)) return t;
                        t = parseFloat(t)
                    }
                    let i = eP(t, e.target.x),
                        n = eP(t, e.target.y);
                    return `${i}% ${n}%`
                }
            };
            var eb = i(7081);
            class ew extends n.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i,
                        layoutId: n
                    } = this.props, {
                        projection: r
                    } = t;
                    Object.assign(S, eS), r && (e.group && e.group.add(r), i && i.register && n && i.register(r), r.root.didUpdate(), r.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), r.setOptions({ ...r.options,
                        onExitComplete: () => this.safeToRemove()
                    })), ex.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: i,
                        drag: n,
                        isPresent: r
                    } = this.props, s = i.projection;
                    return s && (s.isPresent = r, n || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(), t.isPresent === r || (r ? s.promote() : s.relegate() || tr.Wi.postRender(() => {
                        let t = s.getStack();
                        t && t.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), queueMicrotask(() => {
                        !t.currentAnimation && t.isLead() && this.safeToRemove()
                    }))
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i
                    } = this.props, {
                        projection: n
                    } = t;
                    n && (n.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(n), i && i.deregister && i.deregister(n))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    t && t()
                }
                render() {
                    return null
                }
            }

            function eA(t) {
                let [e, i] = function() {
                    let t = (0, n.useContext)(o);
                    if (null === t) return [!0, null];
                    let {
                        isPresent: e,
                        onExitComplete: i,
                        register: r
                    } = t, s = (0, n.useId)();
                    return (0, n.useEffect)(() => r(s), []), !e && i ? [!1, () => i && i(s)] : [!0]
                }(), r = (0, n.useContext)(P);
                return n.createElement(ew, { ...t,
                    layoutGroup: r,
                    switchLayoutGroup: (0, n.useContext)(T),
                    isPresent: e,
                    safeToRemove: i
                })
            }
            let eS = {
                borderRadius: { ...eT,
                    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                },
                borderTopLeftRadius: eT,
                borderTopRightRadius: eT,
                borderBottomLeftRadius: eT,
                borderBottomRightRadius: eT,
                boxShadow: {
                    correct: (t, {
                        treeScale: e,
                        projectionDelta: i
                    }) => {
                        let n = eb.P.parse(t);
                        if (n.length > 5) return t;
                        let r = eb.P.createTransformer(t),
                            s = "number" != typeof n[0] ? 1 : 0,
                            o = i.x.scale * e.x,
                            a = i.y.scale * e.y;
                        n[0 + s] /= o, n[1 + s] /= a;
                        let l = (0, tH.C)(o, a, .5);
                        return "number" == typeof n[2 + s] && (n[2 + s] /= l), "number" == typeof n[3 + s] && (n[3 + s] /= l), r(n)
                    }
                }
            };
            var eC = i(2031),
                eV = i(9393);
            let eE = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                eD = eE.length,
                eM = t => "string" == typeof t ? parseFloat(t) : t,
                eR = t => "number" == typeof t || W.px.test(t);

            function eL(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            let ek = eB(0, .5, eV.Bn),
                ej = eB(.5, .95, tT.Z);

            function eB(t, e, i) {
                return n => n < t ? 0 : n > e ? 1 : i((0, tz.Y)(t, e, n))
            }

            function eF(t, e) {
                t.min = e.min, t.max = e.max
            }

            function eO(t, e) {
                eF(t.x, e.x), eF(t.y, e.y)
            }

            function eI(t, e, i, n, r) {
                return t -= e, t = n + 1 / i * (t - n), void 0 !== r && (t = n + 1 / r * (t - n)), t
            }

            function eW(t, e, [i, n, r], s, o) {
                ! function(t, e = 0, i = 1, n = .5, r, s = t, o = t) {
                    if (W.aQ.test(e)) {
                        e = parseFloat(e);
                        let t = (0, tH.C)(o.min, o.max, e / 100);
                        e = t - o.min
                    }
                    if ("number" != typeof e) return;
                    let a = (0, tH.C)(s.min, s.max, n);
                    t === s && (a -= e), t.min = eI(t.min, e, i, a, r), t.max = eI(t.max, e, i, a, r)
                }(t, e[i], e[n], e[r], e.scale, s, o)
            }
            let eU = ["x", "scaleX", "originX"],
                e$ = ["y", "scaleY", "originY"];

            function eN(t, e, i, n) {
                eW(t.x, e, eU, i ? i.x : void 0, n ? n.x : void 0), eW(t.y, e, e$, i ? i.y : void 0, n ? n.y : void 0)
            }
            var eX = i(1821);

            function ez(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function eH(t) {
                return ez(t.x) && ez(t.y)
            }

            function eZ(t, e) {
                return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
            }

            function eG(t) {
                return tZ(t.x) / tZ(t.y)
            }
            var eY = i(3563);
            class e_ {
                constructor() {
                    this.members = []
                }
                add(t) {
                    (0, eY.y4)(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if ((0, eY.cl)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(t) {
                    let e;
                    let i = this.members.findIndex(e => t === e);
                    if (0 === i) return !1;
                    for (let t = i; t >= 0; t--) {
                        let i = this.members[t];
                        if (!1 !== i.isPresent) {
                            e = i;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }
                promote(t, e) {
                    let i = this.lead;
                    if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                        i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        let {
                            crossfade: n
                        } = t.options;
                        !1 === n && i.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        let {
                            options: e,
                            resumingFrom: i
                        } = t;
                        e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }

            function eq(t, e, i) {
                let n = "",
                    r = t.x.translate / e.x,
                    s = t.y.translate / e.y;
                if ((r || s) && (n = `translate3d(${r}px, ${s}px, 0) `), (1 !== e.x || 1 !== e.y) && (n += `scale(${1/e.x}, ${1/e.y}) `), i) {
                    let {
                        rotate: t,
                        rotateX: e,
                        rotateY: r
                    } = i;
                    t && (n += `rotate(${t}deg) `), e && (n += `rotateX(${e}deg) `), r && (n += `rotateY(${r}deg) `)
                }
                let o = t.x.scale * e.x,
                    a = t.y.scale * e.y;
                return (1 !== o || 1 !== a) && (n += `scale(${o}, ${a})`), n || "none"
            }
            let eK = (t, e) => t.depth - e.depth;
            class eQ {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    (0, eY.y4)(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    (0, eY.cl)(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(eK), this.isDirty = !1, this.children.forEach(t)
                }
            }
            var eJ = i(2915);
            let e0 = ["", "X", "Y", "Z"],
                e1 = 0,
                e2 = {
                    type: "projectionFrame",
                    totalNodes: 0,
                    resolvedTargetDeltas: 0,
                    recalculatedProjection: 0
                };

            function e5({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: i,
                checkIsScrollRoot: n,
                resetTransform: r
            }) {
                return class {
                    constructor(t = {}, i = null == e ? void 0 : e()) {
                        this.id = e1++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            e2.totalNodes = e2.resolvedTargetDeltas = e2.recalculatedProjection = 0, this.nodes.forEach(e4), this.nodes.forEach(ir), this.nodes.forEach(is), this.nodes.forEach(e8), window.MotionDebug && window.MotionDebug.record(e2)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new eQ)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new eC.L), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        let i = this.eventHandlers.get(t);
                        i && i.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    mount(e, i = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                        let {
                            layoutId: n,
                            layout: r,
                            visualElement: s
                        } = this.options;
                        if (s && !s.current && s.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), i && (r || n) && (this.isLayoutDirty = !0), t) {
                            let i;
                            let n = () => this.root.updateBlockedByResize = !1;
                            t(e, () => {
                                this.root.updateBlockedByResize = !0, i && i(), i = function(t, e) {
                                    let i = performance.now(),
                                        n = ({
                                            timestamp: r
                                        }) => {
                                            let s = r - i;
                                            s >= e && ((0, tr.Pn)(n), t(s - e))
                                        };
                                    return tr.Wi.read(n, !0), () => (0, tr.Pn)(n)
                                }(n, 250), ex.hasAnimatedSinceResize && (ex.hasAnimatedSinceResize = !1, this.nodes.forEach(ii))
                            })
                        }
                        n && this.root.registerSharedNode(n, this), !1 !== this.options.animate && s && (n || r) && this.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeTargetChanged: i,
                            layout: n
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let r = this.options.transition || s.getDefaultTransition() || ic,
                                {
                                    onLayoutAnimationStart: o,
                                    onLayoutAnimationComplete: a
                                } = s.getProps(),
                                l = !this.targetLayout || !eZ(this.targetLayout, n) || i,
                                u = !e && i;
                            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, u);
                                let e = { ...(0, eX.e)(r, "layout"),
                                    onPlay: o,
                                    onComplete: a
                                };
                                (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                            } else e || ii(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = n
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, (0, tr.Pn)(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(io), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: t
                        } = this.options;
                        return t && t.getProps().transformTemplate
                    }
                    willUpdate(t = !0) {
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                        }
                        let {
                            layoutId: e,
                            layout: i
                        } = this.options;
                        if (void 0 === e && !i) return;
                        let n = this.getTransformTemplate();
                        this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    update() {
                        this.updateScheduled = !1;
                        let t = this.isUpdateBlocked();
                        if (t) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(e7);
                            return
                        }
                        this.isUpdating || this.nodes.forEach(it), this.isUpdating = !1, this.nodes.forEach(ie), this.nodes.forEach(e3), this.nodes.forEach(e9), this.clearAllSnapshots();
                        let e = performance.now();
                        tr.frameData.delta = (0, tJ.u)(0, 1e3 / 60, e - tr.frameData.timestamp), tr.frameData.timestamp = e, tr.frameData.isProcessing = !0, tr.S6.update.process(tr.frameData), tr.S6.preRender.process(tr.frameData), tr.S6.render.process(tr.frameData), tr.frameData.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(e6), this.sharedNodes.forEach(ia)
                    }
                    scheduleUpdateProjection() {
                        tr.Wi.preRender(this.updateProjection, !1, !0)
                    }
                    scheduleCheckAfterUnmount() {
                        tr.Wi.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) {
                                let e = this.path[t];
                                e.updateScroll()
                            }
                        let t = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = t8(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: e
                        } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                    }
                    updateScroll(t = "measure") {
                        let e = !!(this.options.layoutScroll && this.instance);
                        this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && (this.scroll = {
                            animationId: this.root.animationId,
                            phase: t,
                            isRoot: n(this.instance),
                            offset: i(this.instance)
                        })
                    }
                    resetTransform() {
                        if (!r) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform,
                            e = this.projectionDelta && !eH(this.projectionDelta),
                            i = this.getTransformTemplate(),
                            n = i ? i(this.latestValues, "") : void 0,
                            s = n !== this.prevTransformTemplateValue;
                        t && (e || ei(this.latestValues) || s) && (r(this.instance, n), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(t = !0) {
                        var e;
                        let i = this.measurePageBox(),
                            n = this.removeElementScroll(i);
                        return t && (n = this.removeTransform(n)), im((e = n).x), im(e.y), {
                            animationId: this.root.animationId,
                            measuredBox: i,
                            layoutBox: n,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return t8();
                        let e = t.measureViewportBox(),
                            {
                                scroll: i
                            } = this.root;
                        return i && (el(e.x, i.offset.x), el(e.y, i.offset.y)), e
                    }
                    removeElementScroll(t) {
                        let e = t8();
                        eO(e, t);
                        for (let i = 0; i < this.path.length; i++) {
                            let n = this.path[i],
                                {
                                    scroll: r,
                                    options: s
                                } = n;
                            if (n !== this.root && r && s.layoutScroll) {
                                if (r.isRoot) {
                                    eO(e, t);
                                    let {
                                        scroll: i
                                    } = this.root;
                                    i && (el(e.x, -i.offset.x), el(e.y, -i.offset.y))
                                }
                                el(e.x, r.offset.x), el(e.y, r.offset.y)
                            }
                        }
                        return e
                    }
                    applyTransform(t, e = !1) {
                        let i = t8();
                        eO(i, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let n = this.path[t];
                            !e && n.options.layoutScroll && n.scroll && n !== n.root && ed(i, {
                                x: -n.scroll.offset.x,
                                y: -n.scroll.offset.y
                            }), ei(n.latestValues) && ed(i, n.latestValues)
                        }
                        return ei(this.latestValues) && ed(i, this.latestValues), i
                    }
                    removeTransform(t) {
                        let e = t8();
                        eO(e, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let i = this.path[t];
                            if (!i.instance || !ei(i.latestValues)) continue;
                            ee(i.latestValues) && i.updateSnapshot();
                            let n = t8(),
                                r = i.measurePageBox();
                            eO(n, r), eN(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, n)
                        }
                        return ei(this.latestValues) && eN(e, this.latestValues), e
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(t) {
                        this.options = { ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== tr.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(t = !1) {
                        var e, i, n, r;
                        let s = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                        let o = !!this.resumingFrom || this !== s,
                            a = !(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget);
                        if (a) return;
                        let {
                            layout: l,
                            layoutId: u
                        } = this.options;
                        if (this.layout && (l || u)) {
                            if (this.resolvedRelativeTargetAt = tr.frameData.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let t = this.getClosestProjectingParent();
                                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = t8(), this.relativeTargetOrigin = t8(), tQ(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), eO(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if ((this.target || (this.target = t8(), this.targetWithTransforms = t8()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), i = this.target, n = this.relativeTarget, r = this.relativeParent.target, tq(i.x, n.x, r.x), tq(i.y, n.y, r.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : eO(this.target, this.layout.layoutBox), eo(this.target, this.targetDelta)) : eO(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let t = this.getClosestProjectingParent();
                                    t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = t8(), this.relativeTargetOrigin = t8(), tQ(this.relativeTargetOrigin, this.target, t.target), eO(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                e2.resolvedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || ee(this.parent.latestValues) || en(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        var t;
                        let e = this.getLead(),
                            i = !!this.resumingFrom || this !== e,
                            n = !0;
                        if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1), i && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === tr.frameData.timestamp && (n = !1), n) return;
                        let {
                            layout: r,
                            layoutId: s
                        } = this.options;
                        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || s)) return;
                        eO(this.layoutCorrected, this.layout.layoutBox);
                        let o = this.treeScale.x,
                            a = this.treeScale.y;
                        ! function(t, e, i, n = !1) {
                            let r, s;
                            let o = i.length;
                            if (o) {
                                e.x = e.y = 1;
                                for (let a = 0; a < o; a++) {
                                    s = (r = i[a]).projectionDelta;
                                    let o = r.instance;
                                    (!o || !o.style || "contents" !== o.style.display) && (n && r.options.layoutScroll && r.scroll && r !== r.root && ed(t, {
                                        x: -r.scroll.offset.x,
                                        y: -r.scroll.offset.y
                                    }), s && (e.x *= s.x.scale, e.y *= s.y.scale, eo(t, s)), n && ei(r.latestValues) && ed(t, r.latestValues))
                                }
                                e.x = ea(e.x), e.y = ea(e.y)
                            }
                        }(this.layoutCorrected, this.treeScale, this.path, i), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox);
                        let {
                            target: l
                        } = e;
                        if (!l) {
                            this.projectionTransform && (this.projectionDelta = t9(), this.projectionTransform = "none", this.scheduleRender());
                            return
                        }
                        this.projectionDelta || (this.projectionDelta = t9(), this.projectionDeltaWithTransform = t9());
                        let u = this.projectionTransform;
                        t_(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = eq(this.projectionDelta, this.treeScale), (this.projectionTransform !== u || this.treeScale.x !== o || this.treeScale.y !== a) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), e2.recalculatedProjection++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        if (this.options.scheduleRender && this.options.scheduleRender(), t) {
                            let t = this.getStack();
                            t && t.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    setAnimationOrigin(t, e = !1) {
                        let i;
                        let n = this.snapshot,
                            r = n ? n.latestValues : {},
                            s = { ...this.latestValues
                            },
                            o = t9();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                        let a = t8(),
                            l = n ? n.source : void 0,
                            u = this.layout ? this.layout.source : void 0,
                            h = l !== u,
                            c = this.getStack(),
                            d = !c || c.members.length <= 1,
                            p = !!(h && !d && !0 === this.options.crossfade && !this.path.some(ih));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            let n = e / 1e3;
                            if (il(o.x, t.x, n), il(o.y, t.y, n), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var l, u, c, m;
                                tQ(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), c = this.relativeTarget, m = this.relativeTargetOrigin, iu(c.x, m.x, a.x, n), iu(c.y, m.y, a.y, n), i && (l = this.relativeTarget, u = i, l.x.min === u.x.min && l.x.max === u.x.max && l.y.min === u.y.min && l.y.max === u.y.max) && (this.isProjectionDirty = !1), i || (i = t8()), eO(i, this.relativeTarget)
                            }
                            h && (this.animationValues = s, function(t, e, i, n, r, s) {
                                r ? (t.opacity = (0, tH.C)(0, void 0 !== i.opacity ? i.opacity : 1, ek(n)), t.opacityExit = (0, tH.C)(void 0 !== e.opacity ? e.opacity : 1, 0, ej(n))) : s && (t.opacity = (0, tH.C)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, n));
                                for (let r = 0; r < eD; r++) {
                                    let s = `border${eE[r]}Radius`,
                                        o = eL(e, s),
                                        a = eL(i, s);
                                    if (void 0 === o && void 0 === a) continue;
                                    o || (o = 0), a || (a = 0);
                                    let l = 0 === o || 0 === a || eR(o) === eR(a);
                                    l ? (t[s] = Math.max((0, tH.C)(eM(o), eM(a), n), 0), (W.aQ.test(a) || W.aQ.test(o)) && (t[s] += "%")) : t[s] = a
                                }(e.rotate || i.rotate) && (t.rotate = (0, tH.C)(e.rotate || 0, i.rotate || 0, n))
                            }(s, r, this.latestValues, n, p, d)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
                        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ((0, tr.Pn)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = tr.Wi.update(() => {
                            ex.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, i) {
                                let n = (0, E.i)(t) ? t : (0, eJ.BX)(t);
                                return n.start((0, em.v)("", n, 1e3, i)), n.animation
                            }(0, 0, { ...t,
                                onUpdate: e => {
                                    this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                },
                                onComplete: () => {
                                    t.onComplete && t.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let t = this.getStack();
                        t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: i,
                                layout: n,
                                latestValues: r
                            } = t;
                        if (e && i && n) {
                            if (this !== t && this.layout && n && iv(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                                i = this.target || t8();
                                let e = tZ(this.layout.layoutBox.x);
                                i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                                let n = tZ(this.layout.layoutBox.y);
                                i.y.min = t.target.y.min, i.y.max = i.y.min + n
                            }
                            eO(e, i), ed(e, r), t_(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new e_);
                        let i = this.sharedNodes.get(t);
                        i.add(e);
                        let n = e.options.initialPromotionConfig;
                        e.promote({
                            transition: n ? n.transition : void 0,
                            preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(e) : void 0
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }
                    getPrevLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: i
                    } = {}) {
                        let n = this.getStack();
                        n && n.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            {
                                latestValues: i
                            } = t;
                        if ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0), !e) return;
                        let n = {};
                        for (let e = 0; e < e0.length; e++) {
                            let r = "rotate" + e0[e];
                            i[r] && (n[r] = i[r], t.setStaticValue(r, 0))
                        }
                        for (let e in t.render(), n) t.setStaticValue(e, n[e]);
                        t.scheduleRender()
                    }
                    getProjectionStyles(t = {}) {
                        var e, i;
                        let n = {};
                        if (!this.instance || this.isSVG) return n;
                        if (!this.isVisible) return {
                            visibility: "hidden"
                        };
                        n.visibility = "";
                        let r = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, n.opacity = "", n.pointerEvents = ti(t.pointerEvents) || "", n.transform = r ? r(this.latestValues, "") : "none", n;
                        let s = this.getLead();
                        if (!this.projectionDelta || !this.layout || !s.target) {
                            let e = {};
                            return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = ti(t.pointerEvents) || ""), this.hasProjected && !ei(this.latestValues) && (e.transform = r ? r({}, "") : "none", this.hasProjected = !1), e
                        }
                        let o = s.animationValues || s.latestValues;
                        this.applyTransformsToTarget(), n.transform = eq(this.projectionDeltaWithTransform, this.treeScale, o), r && (n.transform = r(o, n.transform));
                        let {
                            x: a,
                            y: l
                        } = this.projectionDelta;
                        for (let t in n.transformOrigin = `${100*a.origin}% ${100*l.origin}% 0`, s.animationValues ? n.opacity = s === this ? null !== (i = null !== (e = o.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : n.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0, S) {
                            if (void 0 === o[t]) continue;
                            let {
                                correct: e,
                                applyTo: i
                            } = S[t], r = "none" === n.transform ? o[t] : e(o[t], s);
                            if (i) {
                                let t = i.length;
                                for (let e = 0; e < t; e++) n[i[e]] = r
                            } else n[t] = r
                        }
                        return this.options.layoutId && (n.pointerEvents = s === this ? ti(t.pointerEvents) || "" : "none"), n
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        }), this.root.nodes.forEach(e7), this.root.sharedNodes.clear()
                    }
                }
            }

            function e3(t) {
                t.updateLayout()
            }

            function e9(t) {
                var e;
                let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                    let {
                        layoutBox: e,
                        measuredBox: n
                    } = t.layout, {
                        animationType: r
                    } = t.options, s = i.source !== t.layout.source;
                    "size" === r ? t6(t => {
                        let n = s ? i.measuredBox[t] : i.layoutBox[t],
                            r = tZ(n);
                        n.min = e[t].min, n.max = n.min + r
                    }) : iv(r, i.layoutBox, e) && t6(n => {
                        let r = s ? i.measuredBox[n] : i.layoutBox[n],
                            o = tZ(e[n]);
                        r.max = r.min + o, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[n].max = t.relativeTarget[n].min + o)
                    });
                    let o = t9();
                    t_(o, e, i.layoutBox);
                    let a = t9();
                    s ? t_(a, t.applyTransform(n, !0), i.measuredBox) : t_(a, e, i.layoutBox);
                    let l = !eH(o),
                        u = !1;
                    if (!t.resumeFrom) {
                        let n = t.getClosestProjectingParent();
                        if (n && !n.resumeFrom) {
                            let {
                                snapshot: r,
                                layout: s
                            } = n;
                            if (r && s) {
                                let o = t8();
                                tQ(o, i.layoutBox, r.layoutBox);
                                let a = t8();
                                tQ(a, e, s.layoutBox), eZ(o, a) || (u = !0), n.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = o, t.relativeParent = n)
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: e,
                        snapshot: i,
                        delta: a,
                        layoutDelta: o,
                        hasLayoutChanged: l,
                        hasRelativeTargetChanged: u
                    })
                } else if (t.isLead()) {
                    let {
                        onExitComplete: e
                    } = t.options;
                    e && e()
                }
                t.options.transition = void 0
            }

            function e4(t) {
                e2.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
            }

            function e8(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
            }

            function e6(t) {
                t.clearSnapshot()
            }

            function e7(t) {
                t.clearMeasurements()
            }

            function it(t) {
                t.isLayoutDirty = !1
            }

            function ie(t) {
                let {
                    visualElement: e
                } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function ii(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
            }

            function ir(t) {
                t.resolveTargetDelta()
            }

            function is(t) {
                t.calcProjection()
            }

            function io(t) {
                t.resetRotation()
            }

            function ia(t) {
                t.removeLeadSnapshot()
            }

            function il(t, e, i) {
                t.translate = (0, tH.C)(e.translate, 0, i), t.scale = (0, tH.C)(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function iu(t, e, i, n) {
                t.min = (0, tH.C)(e.min, i.min, n), t.max = (0, tH.C)(e.max, i.max, n)
            }

            function ih(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let ic = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                id = t => "undefined" != typeof navigator && navigator.userAgent.toLowerCase().includes(t),
                ip = id("applewebkit/") && !id("chrome/") ? Math.round : tT.Z;

            function im(t) {
                t.min = ip(t.min), t.max = ip(t.max)
            }

            function iv(t, e, i) {
                return "position" === t || "preserve-aspect" === t && !tG(eG(e), eG(i), .2)
            }
            let ig = e5({
                    attachResizeListener: (t, e) => ta(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                iy = {
                    current: void 0
                },
                ix = e5({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!iy.current) {
                            let t = new ig({});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), iy.current = t
                        }
                        return iy.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
                });
            var iP = i(3256),
                iT = i(7064),
                ib = i(9701);
            let iw = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function iA(t, e, i = 1) {
                (0, tF.k)(i <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
                let [n, r] = function(t) {
                    let e = iw.exec(t);
                    if (!e) return [, ];
                    let [, i, n] = e;
                    return [i, n]
                }(t);
                if (!n) return;
                let s = window.getComputedStyle(e).getPropertyValue(n);
                if (s) {
                    let t = s.trim();
                    return (0, ib.P)(t) ? parseFloat(t) : t
                }
                return (0, R.tm)(r) ? iA(r, e, i + 1) : r
            }
            var iS = i(8717),
                iC = i(1293);
            let iV = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
                iE = t => iV.has(t),
                iD = t => Object.keys(t).some(iE),
                iM = t => t === iC.Rx || t === W.px,
                iR = (t, e) => parseFloat(t.split(", ")[e]),
                iL = (t, e) => (i, {
                    transform: n
                }) => {
                    if ("none" === n || !n) return 0;
                    let r = n.match(/^matrix3d\((.+)\)$/);
                    if (r) return iR(r[1], e); {
                        let e = n.match(/^matrix\((.+)\)$/);
                        return e ? iR(e[1], t) : 0
                    }
                },
                ik = new Set(["x", "y", "z"]),
                ij = C._.filter(t => !ik.has(t)),
                iB = {
                    width: ({
                        x: t
                    }, {
                        paddingLeft: e = "0",
                        paddingRight: i = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                    height: ({
                        y: t
                    }, {
                        paddingTop: e = "0",
                        paddingBottom: i = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                    top: (t, {
                        top: e
                    }) => parseFloat(e),
                    left: (t, {
                        left: e
                    }) => parseFloat(e),
                    bottom: ({
                        y: t
                    }, {
                        top: e
                    }) => parseFloat(e) + (t.max - t.min),
                    right: ({
                        x: t
                    }, {
                        left: e
                    }) => parseFloat(e) + (t.max - t.min),
                    x: iL(4, 13),
                    y: iL(5, 14)
                };
            iB.translateX = iB.x, iB.translateY = iB.y;
            let iF = (t, e, i) => {
                    let n = e.measureViewportBox(),
                        r = e.current,
                        s = getComputedStyle(r),
                        {
                            display: o
                        } = s,
                        a = {};
                    "none" === o && e.setStaticValue("display", t.display || "block"), i.forEach(t => {
                        a[t] = iB[t](n, s)
                    }), e.render();
                    let l = e.measureViewportBox();
                    return i.forEach(i => {
                        let n = e.getValue(i);
                        n && n.jump(a[i]), t[i] = iB[i](l, s)
                    }), t
                },
                iO = (t, e, i = {}, n = {}) => {
                    e = { ...e
                    }, n = { ...n
                    };
                    let r = Object.keys(e).filter(iE),
                        s = [],
                        o = !1,
                        a = [];
                    if (r.forEach(r => {
                            let l;
                            let u = t.getValue(r);
                            if (!t.hasValue(r)) return;
                            let h = i[r],
                                c = (0, iS.C)(h),
                                d = e[r];
                            if ((0, tE.C)(d)) {
                                let t = d.length,
                                    e = null === d[0] ? 1 : 0;
                                h = d[e], c = (0, iS.C)(h);
                                for (let i = e; i < t && null !== d[i]; i++) l ? (0, tF.k)((0, iS.C)(d[i]) === l, "All keyframes must be of the same type") : (l = (0, iS.C)(d[i]), (0, tF.k)(l === c || iM(c) && iM(l), "Keyframes must be of the same dimension as the current value"))
                            } else l = (0, iS.C)(d);
                            if (c !== l) {
                                if (iM(c) && iM(l)) {
                                    let t = u.get();
                                    "string" == typeof t && u.set(parseFloat(t)), "string" == typeof d ? e[r] = parseFloat(d) : Array.isArray(d) && l === W.px && (e[r] = d.map(parseFloat))
                                } else(null == c ? void 0 : c.transform) && (null == l ? void 0 : l.transform) && (0 === h || 0 === d) ? 0 === h ? u.set(l.transform(h)) : e[r] = c.transform(d) : (o || (s = function(t) {
                                    let e = [];
                                    return ij.forEach(i => {
                                        let n = t.getValue(i);
                                        void 0 !== n && (e.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0))
                                    }), e.length && t.render(), e
                                }(t), o = !0), a.push(r), n[r] = void 0 !== n[r] ? n[r] : e[r], u.jump(d))
                            }
                        }), !a.length) return {
                        target: e,
                        transitionEnd: n
                    }; {
                        let i = a.indexOf("height") >= 0 ? window.pageYOffset : null,
                            r = iF(e, t, a);
                        return s.length && s.forEach(([e, i]) => {
                            t.getValue(e).set(i)
                        }), t.render(), x.j && null !== i && window.scrollTo({
                            top: i
                        }), {
                            target: r,
                            transitionEnd: n
                        }
                    }
                },
                iI = (t, e, i, n) => {
                    var r, s;
                    let o = function(t, { ...e
                    }, i) {
                        let n = t.current;
                        if (!(n instanceof Element)) return {
                            target: e,
                            transitionEnd: i
                        };
                        for (let r in i && (i = { ...i
                            }), t.values.forEach(t => {
                                let e = t.get();
                                if (!(0, R.tm)(e)) return;
                                let i = iA(e, n);
                                i && t.set(i)
                            }), e) {
                            let t = e[r];
                            if (!(0, R.tm)(t)) continue;
                            let s = iA(t, n);
                            s && (e[r] = s, i || (i = {}), void 0 === i[r] && (i[r] = t))
                        }
                        return {
                            target: e,
                            transitionEnd: i
                        }
                    }(t, e, n);
                    return e = o.target, n = o.transitionEnd, r = e, s = n, iD(r) ? iO(t, r, i, s) : {
                        target: r,
                        transitionEnd: s
                    }
                },
                iW = {
                    current: null
                },
                iU = {
                    current: !1
                };
            var i$ = i(9749);
            let iN = new WeakMap,
                iX = Object.keys(y),
                iz = iX.length,
                iH = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
                iZ = p.length;
            class iG {
                constructor({
                    parent: t,
                    props: e,
                    presenceContext: i,
                    reducedMotionConfig: n,
                    visualState: r
                }, s = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.scheduleRender = () => tr.Wi.render(this.render, !1, !0);
                    let {
                        latestValues: o,
                        renderState: a
                    } = r;
                    this.latestValues = o, this.baseTarget = { ...o
                    }, this.initialValues = e.initial ? { ...o
                    } : {}, this.renderState = a, this.parent = t, this.props = e, this.presenceContext = i, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = s, this.isControllingVariants = m(e), this.isVariantNode = f(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
                    let {
                        willChange: l,
                        ...u
                    } = this.scrapeMotionValuesFromProps(e, {});
                    for (let t in u) {
                        let e = u[t];
                        void 0 !== o[t] && (0, E.i)(e) && (e.set(o[t], !1), (0, i$.L)(l) && l.add(t))
                    }
                }
                scrapeMotionValuesFromProps(t, e) {
                    return {}
                }
                mount(t) {
                    this.current = t, iN.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), iU.current || function() {
                        if (iU.current = !0, x.j) {
                            if (window.matchMedia) {
                                let t = window.matchMedia("(prefers-reduced-motion)"),
                                    e = () => iW.current = t.matches;
                                t.addListener(e), e()
                            } else iW.current = !1
                        }
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || iW.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let t in iN.delete(this.current), this.projection && this.projection.unmount(), (0, tr.Pn)(this.notifyUpdate), (0, tr.Pn)(this.render), this.valueSubscriptions.forEach(t => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[t].clear();
                    for (let t in this.features) this.features[t].unmount();
                    this.current = null
                }
                bindToMotionValue(t, e) {
                    let i = C.G.has(t),
                        n = e.on("change", e => {
                            this.latestValues[t] = e, this.props.onUpdate && tr.Wi.update(this.notifyUpdate, !1, !0), i && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        r = e.on("renderRequest", this.scheduleRender);
                    this.valueSubscriptions.set(t, () => {
                        n(), r()
                    })
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
                }
                loadFeatures({
                    children: t,
                    ...e
                }, i, n, r) {
                    let s, o;
                    for (let t = 0; t < iz; t++) {
                        let i = iX[t],
                            {
                                isEnabled: n,
                                Feature: r,
                                ProjectionNode: a,
                                MeasureLayout: l
                            } = y[i];
                        a && (s = a), n(e) && (!this.features[i] && r && (this.features[i] = new r(this)), l && (o = l))
                    }
                    if (!this.projection && s) {
                        this.projection = new s(this.latestValues, this.parent && this.parent.projection);
                        let {
                            layoutId: t,
                            layout: i,
                            drag: n,
                            dragConstraints: o,
                            layoutScroll: a,
                            layoutRoot: l
                        } = e;
                        this.projection.setOptions({
                            layoutId: t,
                            layout: i,
                            alwaysMeasureLayout: !!n || o && u(o),
                            visualElement: this,
                            scheduleRender: () => this.scheduleRender(),
                            animationType: "string" == typeof i ? i : "both",
                            initialPromotionConfig: r,
                            layoutScroll: a,
                            layoutRoot: l
                        })
                    }
                    return o
                }
                updateFeatures() {
                    for (let t in this.features) {
                        let e = this.features[t];
                        e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.options, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : t8()
                }
                getStaticValue(t) {
                    return this.latestValues[t]
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e
                }
                makeTargetAnimatable(t, e = !0) {
                    return this.makeTargetAnimatableFromInstance(t, this.props, e)
                }
                update(t, e) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                    for (let e = 0; e < iH.length; e++) {
                        let i = iH[e];
                        this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
                        let n = t["on" + i];
                        n && (this.propEventSubscriptions[i] = this.on(i, n))
                    }
                    this.prevMotionValues = function(t, e, i) {
                        let {
                            willChange: n
                        } = e;
                        for (let r in e) {
                            let s = e[r],
                                o = i[r];
                            if ((0, E.i)(s)) t.addValue(r, s), (0, i$.L)(n) && n.add(r);
                            else if ((0, E.i)(o)) t.addValue(r, (0, eJ.BX)(s, {
                                owner: t
                            })), (0, i$.L)(n) && n.remove(r);
                            else if (o !== s) {
                                if (t.hasValue(r)) {
                                    let e = t.getValue(r);
                                    e.hasAnimated || e.set(s)
                                } else {
                                    let e = t.getStaticValue(r);
                                    t.addValue(r, (0, eJ.BX)(void 0 !== e ? e : s, {
                                        owner: t
                                    }))
                                }
                            }
                        }
                        for (let n in i) void 0 === e[n] && t.removeValue(n);
                        return e
                    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(t) {
                    return this.props.variants ? this.props.variants[t] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                getVariantContext(t = !1) {
                    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
                    if (!this.isControllingVariants) {
                        let t = this.parent && this.parent.getVariantContext() || {};
                        return void 0 !== this.props.initial && (t.initial = this.props.initial), t
                    }
                    let e = {};
                    for (let t = 0; t < iZ; t++) {
                        let i = p[t],
                            n = this.props[i];
                        (h(n) || !1 === n) && (e[i] = n)
                    }
                    return e
                }
                addVariantChild(t) {
                    let e = this.getClosestVariantNode();
                    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
                }
                addValue(t, e) {
                    e !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, e)), this.values.set(t, e), this.latestValues[t] = e.get()
                }
                removeValue(t) {
                    this.values.delete(t);
                    let e = this.valueSubscriptions.get(t);
                    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
                }
                hasValue(t) {
                    return this.values.has(t)
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let i = this.values.get(t);
                    return void 0 === i && void 0 !== e && (i = (0, eJ.BX)(e, {
                        owner: this
                    }), this.addValue(t, i)), i
                }
                readValue(t) {
                    var e;
                    return void 0 === this.latestValues[t] && this.current ? null !== (e = this.getBaseTargetFromProps(this.props, t)) && void 0 !== e ? e : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e
                }
                getBaseTarget(t) {
                    var e;
                    let {
                        initial: i
                    } = this.props, n = "string" == typeof i || "object" == typeof i ? null === (e = (0, J.o)(this.props, i)) || void 0 === e ? void 0 : e[t] : void 0;
                    if (i && void 0 !== n) return n;
                    let r = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === r || (0, E.i)(r) ? void 0 !== this.initialValues[t] && void 0 === n ? void 0 : this.baseTarget[t] : r
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new eC.L), this.events[t].add(e)
                }
                notify(t, ...e) {
                    this.events[t] && this.events[t].notify(...e)
                }
            }
            class iY extends iG {
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1
                }
                getBaseTargetFromProps(t, e) {
                    return t.style ? t.style[e] : void 0
                }
                removeValueFromRenderState(t, {
                    vars: e,
                    style: i
                }) {
                    delete e[t], delete i[t]
                }
                makeTargetAnimatableFromInstance({
                    transition: t,
                    transitionEnd: e,
                    ...i
                }, {
                    transformValues: n
                }, r) {
                    let s = (0, iT.P$)(i, t || {}, this);
                    if (n && (e && (e = n(e)), i && (i = n(i)), s && (s = n(s))), r) {
                        (0, iT.GJ)(this, i, s);
                        let t = iI(this, i, s, e);
                        e = t.transitionEnd, i = t.target
                    }
                    return {
                        transition: t,
                        transitionEnd: e,
                        ...i
                    }
                }
            }
            class i_ extends iY {
                readValueFromInstance(t, e) {
                    if (C.G.has(e)) {
                        let t = (0, iP.A)(e);
                        return t && t.default || 0
                    } {
                        let i = window.getComputedStyle(t),
                            n = ((0, R.f9)(e) ? i.getPropertyValue(e) : i[e]) || 0;
                        return "string" == typeof n ? n.trim() : n
                    }
                }
                measureInstanceViewportBox(t, {
                    transformPagePoint: e
                }) {
                    return ep(t, e)
                }
                build(t, e, i, n) {
                    j(t, e, i, n.transformTemplate)
                }
                scrapeMotionValuesFromProps(t, e) {
                    return K(t, e)
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: t
                    } = this.props;
                    (0, E.i)(t) && (this.childSubscription = t.on("change", t => {
                        this.current && (this.current.textContent = `${t}`)
                    }))
                }
                renderInstance(t, e, i, n) {
                    Y(t, e, i, n)
                }
            }
            class iq extends iY {
                constructor() {
                    super(...arguments), this.isSVGTag = !1
                }
                getBaseTargetFromProps(t, e) {
                    return t[e]
                }
                readValueFromInstance(t, e) {
                    if (C.G.has(e)) {
                        let t = (0, iP.A)(e);
                        return t && t.default || 0
                    }
                    return e = _.has(e) ? e : (0, G.D)(e), t.getAttribute(e)
                }
                measureInstanceViewportBox() {
                    return t8()
                }
                scrapeMotionValuesFromProps(t, e) {
                    return Q(t, e)
                }
                build(t, e, i, n) {
                    X(t, e, i, this.isSVGTag, n.transformTemplate)
                }
                renderInstance(t, e, i, n) {
                    q(t, e, i, n)
                }
                mount(t) {
                    this.isSVGTag = H(t.tagName), super.mount(t)
                }
            }
            let iK = (t, e) => A(t) ? new iq(e, {
                    enableHardwareAcceleration: !1
                }) : new i_(e, {
                    enableHardwareAcceleration: !0
                }),
                iQ = {
                    animation: {
                        Feature: class extends ty {
                            constructor(t) {
                                super(t), t.animationState || (t.animationState = function(t) {
                                    let e = e => Promise.all(e.map(({
                                            animation: e,
                                            options: i
                                        }) => (0, tR.d)(t, e, i))),
                                        i = {
                                            animate: tj(!0),
                                            whileInView: tj(),
                                            whileHover: tj(),
                                            whileTap: tj(),
                                            whileDrag: tj(),
                                            whileFocus: tj(),
                                            exit: tj()
                                        },
                                        n = !0,
                                        r = (e, i) => {
                                            let n = (0, tM.x)(t, i);
                                            if (n) {
                                                let {
                                                    transition: t,
                                                    transitionEnd: i,
                                                    ...r
                                                } = n;
                                                e = { ...e,
                                                    ...r,
                                                    ...i
                                                }
                                            }
                                            return e
                                        };

                                    function s(s, o) {
                                        let a = t.getProps(),
                                            l = t.getVariantContext(!0) || {},
                                            u = [],
                                            d = new Set,
                                            p = {},
                                            m = 1 / 0;
                                        for (let e = 0; e < tk; e++) {
                                            var f;
                                            let v = tL[e],
                                                g = i[v],
                                                y = void 0 !== a[v] ? a[v] : l[v],
                                                x = h(y),
                                                P = v === o ? g.isActive : null;
                                            !1 === P && (m = e);
                                            let T = y === l[v] && y !== a[v] && x;
                                            if (T && n && t.manuallyAnimateOnMount && (T = !1), g.protectedKeys = { ...p
                                                }, !g.isActive && null === P || !y && !g.prevProp || c(y) || "boolean" == typeof y) continue;
                                            let b = (f = g.prevProp, "string" == typeof y ? y !== f : !!Array.isArray(y) && !tD(y, f)),
                                                w = b || v === o && g.isActive && !T && x || e > m && x,
                                                A = Array.isArray(y) ? y : [y],
                                                S = A.reduce(r, {});
                                            !1 === P && (S = {});
                                            let {
                                                prevResolvedValues: C = {}
                                            } = g, V = { ...C,
                                                ...S
                                            }, E = t => {
                                                w = !0, d.delete(t), g.needsAnimating[t] = !0
                                            };
                                            for (let t in V) {
                                                let e = S[t],
                                                    i = C[t];
                                                p.hasOwnProperty(t) || (e !== i ? (0, tE.C)(e) && (0, tE.C)(i) ? !tD(e, i) || b ? E(t) : g.protectedKeys[t] = !0 : void 0 !== e ? E(t) : d.add(t) : void 0 !== e && d.has(t) ? E(t) : g.protectedKeys[t] = !0)
                                            }
                                            g.prevProp = y, g.prevResolvedValues = S, g.isActive && (p = { ...p,
                                                ...S
                                            }), n && t.blockInitialAnimation && (w = !1), w && !T && u.push(...A.map(t => ({
                                                animation: t,
                                                options: {
                                                    type: v,
                                                    ...s
                                                }
                                            })))
                                        }
                                        if (d.size) {
                                            let e = {};
                                            d.forEach(i => {
                                                let n = t.getBaseTarget(i);
                                                void 0 !== n && (e[i] = n)
                                            }), u.push({
                                                animation: e
                                            })
                                        }
                                        let v = !!u.length;
                                        return n && !1 === a.initial && !t.manuallyAnimateOnMount && (v = !1), n = !1, v ? e(u) : Promise.resolve()
                                    }
                                    return {
                                        animateChanges: s,
                                        setActive: function(e, n, r) {
                                            var o;
                                            if (i[e].isActive === n) return Promise.resolve();
                                            null === (o = t.variantChildren) || void 0 === o || o.forEach(t => {
                                                var i;
                                                return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, n)
                                            }), i[e].isActive = n;
                                            let a = s(r, e);
                                            for (let t in i) i[t].protectedKeys = {};
                                            return a
                                        },
                                        setAnimateFunction: function(i) {
                                            e = i(t)
                                        },
                                        getState: () => i
                                    }
                                }(t))
                            }
                            updateAnimationControlsSubscription() {
                                let {
                                    animate: t
                                } = this.node.getProps();
                                this.unmount(), c(t) && (this.unmount = t.subscribe(this.node))
                            }
                            mount() {
                                this.updateAnimationControlsSubscription()
                            }
                            update() {
                                let {
                                    animate: t
                                } = this.node.getProps(), {
                                    animate: e
                                } = this.node.prevProps || {};
                                t !== e && this.updateAnimationControlsSubscription()
                            }
                            unmount() {}
                        }
                    },
                    exit: {
                        Feature: class extends ty {
                            constructor() {
                                super(...arguments), this.id = tB++
                            }
                            update() {
                                if (!this.node.presenceContext) return;
                                let {
                                    isPresent: t,
                                    onExitComplete: e,
                                    custom: i
                                } = this.node.presenceContext, {
                                    isPresent: n
                                } = this.node.prevPresenceContext || {};
                                if (!this.node.animationState || t === n) return;
                                let r = this.node.animationState.setActive("exit", !t, {
                                    custom: null != i ? i : this.node.getProps().custom
                                });
                                e && !t && r.then(() => e(this.id))
                            }
                            mount() {
                                let {
                                    register: t
                                } = this.node.presenceContext || {};
                                t && (this.unmount = t(this.id))
                            }
                            unmount() {}
                        }
                    },
                    inView: {
                        Feature: class extends ty {
                            constructor() {
                                super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                            }
                            startObserver() {
                                this.unmount();
                                let {
                                    viewport: t = {}
                                } = this.node.getProps(), {
                                    root: e,
                                    margin: i,
                                    amount: n = "some",
                                    once: r
                                } = t, s = {
                                    root: e ? e.current : void 0,
                                    rootMargin: i,
                                    threshold: "number" == typeof n ? n : tV[n]
                                };
                                return function(t, e, i) {
                                    let n = function({
                                        root: t,
                                        ...e
                                    }) {
                                        let i = t || document;
                                        tA.has(i) || tA.set(i, {});
                                        let n = tA.get(i),
                                            r = JSON.stringify(e);
                                        return n[r] || (n[r] = new IntersectionObserver(tC, {
                                            root: t,
                                            ...e
                                        })), n[r]
                                    }(e);
                                    return tw.set(t, i), n.observe(t), () => {
                                        tw.delete(t), n.unobserve(t)
                                    }
                                }(this.node.current, s, t => {
                                    let {
                                        isIntersecting: e
                                    } = t;
                                    if (this.isInView === e || (this.isInView = e, r && !e && this.hasEnteredView)) return;
                                    e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                                    let {
                                        onViewportEnter: i,
                                        onViewportLeave: n
                                    } = this.node.getProps(), s = e ? i : n;
                                    s && s(t)
                                })
                            }
                            mount() {
                                this.startObserver()
                            }
                            update() {
                                if ("undefined" == typeof IntersectionObserver) return;
                                let {
                                    props: t,
                                    prevProps: e
                                } = this.node, i = ["amount", "margin", "root"].some(function({
                                    viewport: t = {}
                                }, {
                                    viewport: e = {}
                                } = {}) {
                                    return i => t[i] !== e[i]
                                }(t, e));
                                i && this.startObserver()
                            }
                            unmount() {}
                        }
                    },
                    tap: {
                        Feature: class extends ty {
                            constructor() {
                                super(...arguments), this.removeStartListeners = tT.Z, this.removeEndListeners = tT.Z, this.removeAccessibleListeners = tT.Z, this.startPointerPress = (t, e) => {
                                    if (this.removeEndListeners(), this.isPressing) return;
                                    let i = this.node.getProps(),
                                        n = tc(window, "pointerup", (t, e) => {
                                            if (!this.checkPressEnd()) return;
                                            let {
                                                onTap: i,
                                                onTapCancel: n
                                            } = this.node.getProps();
                                            tr.Wi.update(() => {
                                                tP(this.node.current, t.target) ? i && i(t, e) : n && n(t, e)
                                            })
                                        }, {
                                            passive: !(i.onTap || i.onPointerUp)
                                        }),
                                        r = tc(window, "pointercancel", (t, e) => this.cancelPress(t, e), {
                                            passive: !(i.onTapCancel || i.onPointerCancel)
                                        });
                                    this.removeEndListeners = (0, td.z)(n, r), this.startPress(t, e)
                                }, this.startAccessiblePress = () => {
                                    let t = ta(this.node.current, "keydown", t => {
                                            "Enter" !== t.key || this.isPressing || (this.removeEndListeners(), this.removeEndListeners = ta(this.node.current, "keyup", t => {
                                                "Enter" === t.key && this.checkPressEnd() && tb("up", (t, e) => {
                                                    let {
                                                        onTap: i
                                                    } = this.node.getProps();
                                                    i && tr.Wi.update(() => i(t, e))
                                                })
                                            }), tb("down", (t, e) => {
                                                this.startPress(t, e)
                                            }))
                                        }),
                                        e = ta(this.node.current, "blur", () => {
                                            this.isPressing && tb("cancel", (t, e) => this.cancelPress(t, e))
                                        });
                                    this.removeAccessibleListeners = (0, td.z)(t, e)
                                }
                            }
                            startPress(t, e) {
                                this.isPressing = !0;
                                let {
                                    onTapStart: i,
                                    whileTap: n
                                } = this.node.getProps();
                                n && this.node.animationState && this.node.animationState.setActive("whileTap", !0), i && tr.Wi.update(() => i(t, e))
                            }
                            checkPressEnd() {
                                this.removeEndListeners(), this.isPressing = !1;
                                let t = this.node.getProps();
                                return t.whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !tg()
                            }
                            cancelPress(t, e) {
                                if (!this.checkPressEnd()) return;
                                let {
                                    onTapCancel: i
                                } = this.node.getProps();
                                i && tr.Wi.update(() => i(t, e))
                            }
                            mount() {
                                let t = this.node.getProps(),
                                    e = tc(this.node.current, "pointerdown", this.startPointerPress, {
                                        passive: !(t.onTapStart || t.onPointerStart)
                                    }),
                                    i = ta(this.node.current, "focus", this.startAccessiblePress);
                                this.removeStartListeners = (0, td.z)(e, i)
                            }
                            unmount() {
                                this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
                            }
                        }
                    },
                    focus: {
                        Feature: class extends ty {
                            constructor() {
                                super(...arguments), this.isActive = !1
                            }
                            onFocus() {
                                let t = !1;
                                try {
                                    t = this.node.current.matches(":focus-visible")
                                } catch (e) {
                                    t = !0
                                }
                                t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                            }
                            onBlur() {
                                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                            }
                            mount() {
                                this.unmount = (0, td.z)(ta(this.node.current, "focus", () => this.onFocus()), ta(this.node.current, "blur", () => this.onBlur()))
                            }
                            unmount() {}
                        }
                    },
                    hover: {
                        Feature: class extends ty {
                            mount() {
                                this.unmount = (0, td.z)(tx(this.node, !0), tx(this.node, !1))
                            }
                            unmount() {}
                        }
                    },
                    pan: {
                        Feature: class extends ty {
                            constructor() {
                                super(...arguments), this.removePointerDownListener = tT.Z
                            }
                            onPointerDown(t) {
                                this.session = new tW(t, this.createPanHandlers(), {
                                    transformPagePoint: this.node.getTransformPagePoint()
                                })
                            }
                            createPanHandlers() {
                                let {
                                    onPanSessionStart: t,
                                    onPanStart: e,
                                    onPan: i,
                                    onPanEnd: n
                                } = this.node.getProps();
                                return {
                                    onSessionStart: ey(t),
                                    onStart: ey(e),
                                    onMove: i,
                                    onEnd: (t, e) => {
                                        delete this.session, n && tr.Wi.update(() => n(t, e))
                                    }
                                }
                            }
                            mount() {
                                this.removePointerDownListener = tc(this.node.current, "pointerdown", t => this.onPointerDown(t))
                            }
                            update() {
                                this.session && this.session.updateHandlers(this.createPanHandlers())
                            }
                            unmount() {
                                this.removePointerDownListener(), this.session && this.session.end()
                            }
                        }
                    },
                    drag: {
                        Feature: class extends ty {
                            constructor(t) {
                                super(t), this.removeGroupControls = tT.Z, this.removeListeners = tT.Z, this.controls = new ev(t)
                            }
                            mount() {
                                let {
                                    dragControls: t
                                } = this.node.getProps();
                                t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || tT.Z
                            }
                            unmount() {
                                this.removeGroupControls(), this.removeListeners()
                            }
                        },
                        ProjectionNode: ix,
                        MeasureLayout: eA
                    },
                    layout: {
                        ProjectionNode: ix,
                        MeasureLayout: eA
                    }
                },
                iJ = function(t) {
                    function e(e, i = {}) {
                        return function({
                            preloadedFeatures: t,
                            createVisualElement: e,
                            useRender: i,
                            useVisualState: c,
                            Component: d
                        }) {
                            t && function(t) {
                                for (let e in t) y[e] = { ...y[e],
                                    ...t[e]
                                }
                            }(t);
                            let p = (0, n.forwardRef)(function(p, f) {
                                var g;
                                let y;
                                let b = { ...(0, n.useContext)(r._),
                                        ...p,
                                        layoutId: function({
                                            layoutId: t
                                        }) {
                                            let e = (0, n.useContext)(P).id;
                                            return e && void 0 !== t ? e + "-" + t : t
                                        }(p)
                                    },
                                    {
                                        isStatic: w
                                    } = b,
                                    A = function(t) {
                                        let {
                                            initial: e,
                                            animate: i
                                        } = function(t, e) {
                                            if (m(t)) {
                                                let {
                                                    initial: e,
                                                    animate: i
                                                } = t;
                                                return {
                                                    initial: !1 === e || h(e) ? e : void 0,
                                                    animate: h(i) ? i : void 0
                                                }
                                            }
                                            return !1 !== t.inherit ? e : {}
                                        }(t, (0, n.useContext)(s));
                                        return (0, n.useMemo)(() => ({
                                            initial: e,
                                            animate: i
                                        }), [v(e), v(i)])
                                    }(p),
                                    S = c(p, w);
                                if (!w && x.j) {
                                    A.visualElement = function(t, e, i, u) {
                                        let {
                                            visualElement: h
                                        } = (0, n.useContext)(s), c = (0, n.useContext)(l), d = (0, n.useContext)(o), p = (0, n.useContext)(r._).reducedMotion, m = (0, n.useRef)();
                                        u = u || c.renderer, !m.current && u && (m.current = u(t, {
                                            visualState: e,
                                            parent: h,
                                            props: i,
                                            presenceContext: d,
                                            blockInitialAnimation: !!d && !1 === d.initial,
                                            reducedMotionConfig: p
                                        }));
                                        let f = m.current;
                                        (0, n.useInsertionEffect)(() => {
                                            f && f.update(i, d)
                                        });
                                        let v = (0, n.useRef)(!!window.HandoffAppearAnimations);
                                        return (0, a.L)(() => {
                                            f && (f.render(), v.current && f.animationState && f.animationState.animateChanges())
                                        }), (0, n.useEffect)(() => {
                                            f && (f.updateFeatures(), !v.current && f.animationState && f.animationState.animateChanges(), window.HandoffAppearAnimations = void 0, v.current = !1)
                                        }), f
                                    }(d, S, b, e);
                                    let i = (0, n.useContext)(T),
                                        u = (0, n.useContext)(l).strict;
                                    A.visualElement && (y = A.visualElement.loadFeatures(b, u, t, i))
                                }
                                return n.createElement(s.Provider, {
                                    value: A
                                }, y && A.visualElement ? n.createElement(y, {
                                    visualElement: A.visualElement,
                                    ...b
                                }) : null, i(d, p, (g = A.visualElement, (0, n.useCallback)(t => {
                                    t && S.mount && S.mount(t), g && (t ? g.mount(t) : g.unmount()), f && ("function" == typeof f ? f(t) : u(f) && (f.current = t))
                                }, [g])), S, w, A.visualElement))
                            });
                            return p[b] = d, p
                        }(t(e, i))
                    }
                    if ("undefined" == typeof Proxy) return e;
                    let i = new Map;
                    return new Proxy(e, {
                        get: (t, n) => (i.has(n) || i.set(n, e(n)), i.get(n))
                    })
                }((t, e) => (function(t, {
                    forwardMotionProps: e = !1
                }, i, r) {
                    let s = A(t) ? ts : to;
                    return { ...s,
                        preloadedFeatures: i,
                        useRender: function(t = !1) {
                            return (e, i, r, {
                                latestValues: s
                            }, o) => {
                                let a = A(e) ? Z : O,
                                    l = a(i, s, o, e),
                                    u = (0, I.L)(i, "string" == typeof e, t),
                                    h = { ...u,
                                        ...l,
                                        ref: r
                                    },
                                    {
                                        children: c
                                    } = i,
                                    d = (0, n.useMemo)(() => (0, E.i)(c) ? c.get() : c, [c]);
                                return (0, n.createElement)(e, { ...h,
                                    children: d
                                })
                            }
                        }(e),
                        createVisualElement: r,
                        Component: t
                    }
                })(t, e, iQ, iK))
        },
        483: function(t, e, i) {
            i.d(e, {
                D: function() {
                    return n
                }
            });
            let n = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
        },
        441: function(t, e, i) {
            i.d(e, {
                L: function() {
                    return a
                },
                K: function() {
                    return o
                }
            });
            let n = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);

            function r(t) {
                return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || n.has(t)
            }
            let s = t => !r(t);

            function o(t) {
                t && (s = e => e.startsWith("on") ? !r(e) : t(e))
            }
            try {
                o(require("@emotion/is-prop-valid").default)
            } catch (t) {}

            function a(t, e, i) {
                let n = {};
                for (let o in t)("values" !== o || "object" != typeof t.values) && (s(o) || !0 === i && r(o) || !e && !r(o) || t.draggable && o.startsWith("onDrag")) && (n[o] = t[o]);
                return n
            }
        },
        2311: function(t, e, i) {
            i.d(e, {
                T: function() {
                    return o
                }
            });
            var n = i(7081),
                r = i(6828),
                s = i(3256);

            function o(t, e) {
                let i = (0, s.A)(t);
                return i !== r.h && (i = n.P), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
            }
        },
        3256: function(t, e, i) {
            i.d(e, {
                A: function() {
                    return a
                }
            });
            var n = i(2648),
                r = i(6828),
                s = i(8740);
            let o = { ...s.j,
                    color: n.$,
                    backgroundColor: n.$,
                    outlineColor: n.$,
                    fill: n.$,
                    stroke: n.$,
                    borderColor: n.$,
                    borderTopColor: n.$,
                    borderRightColor: n.$,
                    borderBottomColor: n.$,
                    borderLeftColor: n.$,
                    filter: r.h,
                    WebkitFilter: r.h
                },
                a = t => o[t]
        },
        8717: function(t, e, i) {
            i.d(e, {
                $: function() {
                    return o
                },
                C: function() {
                    return a
                }
            });
            var n = i(1293),
                r = i(459),
                s = i(3189);
            let o = [n.Rx, r.px, r.aQ, r.RW, r.vw, r.vh, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                a = t => o.find((0, s.l)(t))
        },
        8740: function(t, e, i) {
            i.d(e, {
                j: function() {
                    return o
                }
            });
            var n = i(1293),
                r = i(459);
            let s = { ...n.Rx,
                    transform: Math.round
                },
                o = {
                    borderWidth: r.px,
                    borderTopWidth: r.px,
                    borderRightWidth: r.px,
                    borderBottomWidth: r.px,
                    borderLeftWidth: r.px,
                    borderRadius: r.px,
                    radius: r.px,
                    borderTopLeftRadius: r.px,
                    borderTopRightRadius: r.px,
                    borderBottomRightRadius: r.px,
                    borderBottomLeftRadius: r.px,
                    width: r.px,
                    maxWidth: r.px,
                    height: r.px,
                    maxHeight: r.px,
                    size: r.px,
                    top: r.px,
                    right: r.px,
                    bottom: r.px,
                    left: r.px,
                    padding: r.px,
                    paddingTop: r.px,
                    paddingRight: r.px,
                    paddingBottom: r.px,
                    paddingLeft: r.px,
                    margin: r.px,
                    marginTop: r.px,
                    marginRight: r.px,
                    marginBottom: r.px,
                    marginLeft: r.px,
                    rotate: r.RW,
                    rotateX: r.RW,
                    rotateY: r.RW,
                    rotateZ: r.RW,
                    scale: n.bA,
                    scaleX: n.bA,
                    scaleY: n.bA,
                    scaleZ: n.bA,
                    skew: r.RW,
                    skewX: r.RW,
                    skewY: r.RW,
                    distance: r.px,
                    translateX: r.px,
                    translateY: r.px,
                    translateZ: r.px,
                    x: r.px,
                    y: r.px,
                    z: r.px,
                    perspective: r.px,
                    transformPerspective: r.px,
                    opacity: n.Fq,
                    originX: r.$C,
                    originY: r.$C,
                    originZ: r.px,
                    zIndex: s,
                    fillOpacity: n.Fq,
                    strokeOpacity: n.Fq,
                    numOctaves: s
                }
        },
        3189: function(t, e, i) {
            i.d(e, {
                l: function() {
                    return n
                }
            });
            let n = t => e => e.test(t)
        },
        6400: function(t, e, i) {
            i.d(e, {
                G: function() {
                    return r
                },
                _: function() {
                    return n
                }
            });
            let n = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                r = new Set(n)
        },
        4157: function(t, e, i) {
            i.d(e, {
                x: function() {
                    return r
                }
            });
            var n = i(2822);

            function r(t, e, i) {
                let r = t.getProps();
                return (0, n.o)(r, e, void 0 !== i ? i : r.custom, function(t) {
                    let e = {};
                    return t.values.forEach((t, i) => e[i] = t.get()), e
                }(t), function(t) {
                    let e = {};
                    return t.values.forEach((t, i) => e[i] = t.getVelocity()), e
                }(t))
            }
        },
        2822: function(t, e, i) {
            i.d(e, {
                o: function() {
                    return n
                }
            });

            function n(t, e, i, n = {}, r = {}) {
                return "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)), e
            }
        },
        7064: function(t, e, i) {
            i.d(e, {
                GJ: function() {
                    return y
                },
                P$: function() {
                    return x
                },
                CD: function() {
                    return f
                },
                gg: function() {
                    return g
                }
            });
            var n = i(9701),
                r = i(5368),
                s = i(4080),
                o = i(2915),
                a = i(7081),
                l = i(2311),
                u = i(2648),
                h = i(8717),
                c = i(3189);
            let d = [...h.$, u.$, a.P],
                p = t => d.find((0, c.l)(t));
            var m = i(4157);

            function f(t, e) {
                let i = (0, m.x)(t, e),
                    {
                        transitionEnd: n = {},
                        transition: r = {},
                        ...a
                    } = i ? t.makeTargetAnimatable(i, !1) : {};
                for (let e in a = { ...a,
                        ...n
                    }) {
                    let i = (0, s.Y)(a[e]);
                    t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0, o.BX)(i))
                }
            }

            function v(t, e) {
                let i = [...e].reverse();
                i.forEach(i => {
                    let n = t.getVariant(i);
                    n && f(t, n), t.variantChildren && t.variantChildren.forEach(t => {
                        v(t, e)
                    })
                })
            }

            function g(t, e) {
                return Array.isArray(e) ? v(t, e) : "string" == typeof e ? v(t, [e]) : void f(t, e)
            }

            function y(t, e, i) {
                var s, u;
                let h = Object.keys(e).filter(e => !t.hasValue(e)),
                    c = h.length;
                if (c)
                    for (let d = 0; d < c; d++) {
                        let c = h[d],
                            m = e[c],
                            f = null;
                        Array.isArray(m) && (f = m[0]), null === f && (f = null !== (u = null !== (s = i[c]) && void 0 !== s ? s : t.readValue(c)) && void 0 !== u ? u : e[c]), null != f && ("string" == typeof f && ((0, n.P)(f) || (0, r.W)(f)) ? f = parseFloat(f) : !p(f) && a.P.test(m) && (f = (0, l.T)(c, m)), t.addValue(c, (0, o.BX)(f, {
                            owner: t
                        })), void 0 === i[c] && (i[c] = f), null !== f && t.setBaseTarget(c, f))
                    }
            }

            function x(t, e, i) {
                let n = {};
                for (let r in t) {
                    let t = function(t, e) {
                        if (!e) return;
                        let i = e[t] || e.default || e;
                        return i.from
                    }(r, e);
                    if (void 0 !== t) n[r] = t;
                    else {
                        let t = i.getValue(r);
                        t && (n[r] = t.get())
                    }
                }
                return n
            }
        },
        9701: function(t, e, i) {
            i.d(e, {
                P: function() {
                    return n
                }
            });
            let n = t => /^\-?\d*\.?\d+$/.test(t)
        },
        5368: function(t, e, i) {
            i.d(e, {
                W: function() {
                    return n
                }
            });
            let n = t => /^0[^.\s]+$/.test(t)
        },
        4080: function(t, e, i) {
            i.d(e, {
                Y: function() {
                    return s
                },
                p: function() {
                    return r
                }
            });
            var n = i(2305);
            let r = t => !!(t && "object" == typeof t && t.mix && t.toValue),
                s = t => (0, n.C)(t) ? t[t.length - 1] || 0 : t
        },
        9683: function(t, e, i) {
            i.d(e, {
                X: function() {
                    return r
                },
                w: function() {
                    return n
                }
            });
            let n = t => 1e3 * t,
                r = t => t / 1e3
        },
        6828: function(t, e, i) {
            i.d(e, {
                h: function() {
                    return l
                }
            });
            var n = i(7081),
                r = i(6375);
            let s = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function o(t) {
                let [e, i] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [n] = i.match(r.KP) || [];
                if (!n) return t;
                let o = i.replace(n, ""),
                    a = s.has(e) ? 1 : 0;
                return n !== i && (a *= 100), e + "(" + a + o + ")"
            }
            let a = /([a-z-]*)\(.*?\)/g,
                l = { ...n.P,
                    getAnimatableNone: t => {
                        let e = t.match(a);
                        return e ? e.map(o).join(" ") : t
                    }
                }
        },
        9749: function(t, e, i) {
            i.d(e, {
                L: function() {
                    return r
                }
            });
            var n = i(9461);

            function r(t) {
                return !!((0, n.i)(t) && t.add)
            }
        },
        9461: function(t, e, i) {
            i.d(e, {
                i: function() {
                    return n
                }
            });
            let n = t => !!(t && t.getVelocity)
        }
    }
]);