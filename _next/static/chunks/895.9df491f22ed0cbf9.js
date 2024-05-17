"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [895], {
        74895: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var r = n(27799),
                c = n(76027),
                o = n.n(c),
                s = n(38658),
                a = n(11955),
                i = n(48194),
                u = n(2932),
                l = {
                    src: "/_next/static/media/circle.e75f7a4c.png"
                },
                f = n(33563),
                d = n(56293),
                p = n(42926),
                m = n(77046),
                b = n(29987),
                x = n(55027),
                h = n(57477),
                j = n(12749);

            function O(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(n), !0).forEach(function(t) {
                        (0, b.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function g() {
                return (g = (0, r.Z)(c.mark(function e(t, n) {
                    var r, o, s, a;
                    return c.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ((r = "function" == typeof n.connector ? t._internal.connectors.setup(n.connector) : n.connector).uid !== t.state.current) {
                                    e.next = 3;
                                    break
                                }
                                throw new j.wi;
                            case 3:
                                return e.prev = 3, t.setState(function(e) {
                                    return v(v({}, e), {}, {
                                        status: "connecting"
                                    })
                                }), r.emitter.emit("message", {
                                    type: "connecting"
                                }), e.next = 8, r.connect({
                                    chainId: n.chainId
                                });
                            case 8:
                                return a = (s = e.sent).accounts, r.emitter.off("connect", t._internal.events.connect), r.emitter.on("change", t._internal.events.change), r.emitter.on("disconnect", t._internal.events.disconnect), e.next = 15, null === (o = t.storage) || void 0 === o ? void 0 : o.setItem("recentConnectorId", r.id);
                            case 15:
                                return t.setState(function(e) {
                                    return v(v({}, e), {}, {
                                        connections: new Map(e.connections).set(r.uid, {
                                            accounts: a,
                                            chainId: s.chainId,
                                            connector: r
                                        }),
                                        current: r.uid,
                                        status: "connected"
                                    })
                                }), e.abrupt("return", {
                                    accounts: a,
                                    chainId: s.chainId
                                });
                            case 19:
                                throw e.prev = 19, e.t0 = e.catch(3), t.setState(function(e) {
                                    return v(v({}, e), {}, {
                                        status: e.current ? "connected" : "disconnected"
                                    })
                                }), e.t0;
                            case 23:
                            case "end":
                                return e.stop()
                        }
                    }, e, null, [
                        [3, 19]
                    ])
                }))).apply(this, arguments)
            }
            var y = n(73307),
                w = n(66640),
                P = [];

            function N(e) {
                var t = e.connectors;
                return (0, w.v)(P, t) ? P : (P = t, t)
            }
            var Z = ["mutate", "mutateAsync"];

            function k(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? k(Object(n), !0).forEach(function(t) {
                        (0, b.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var S = n(73199);

            function _() {
                var e = (0, s.useState)(!1),
                    t = e[0],
                    n = e[1],
                    c = (0, m.m)().address,
                    b = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.mutation,
                            n = (0, y.Z)(e),
                            r = function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = (0, y.Z)(e);
                                return (0, s.useSyncExternalStore)(function(e) {
                                    return t._internal.connectors.subscribe(function(t, n) {
                                        e(Object.values(t), n)
                                    })
                                }, function() {
                                    return N(t)
                                }, function() {
                                    return N(t)
                                })
                            }({
                                config: n
                            }),
                            c = (0, h.D)(E(E({}, t), {
                                mutationFn: function(e) {
                                    return function(e, t) {
                                        return g.apply(this, arguments)
                                    }(n, e)
                                },
                                mutationKey: ["connect"]
                            })),
                            o = c.mutate,
                            a = c.mutateAsync,
                            i = (0, x.Z)(c, Z);
                        return (0, s.useEffect)(function() {
                            return n.subscribe(function(e) {
                                return e.status
                            }, function(e, t) {
                                "connected" === t && "disconnected" === e && i.reset()
                            })
                        }, [n, i]), E(E({}, i), {}, {
                            connect: o,
                            connectAsync: a,
                            connectors: r
                        })
                    }(),
                    j = b.connect,
                    O = b.connectors;
                return ((0, s.useEffect)(function() {
                    return (0, u.O)("connect-wallet", function() {
                        n(!0)
                    })
                }, []), t && !c) ? (0, S.jsx)(i.Z, {
                    setOpen: n,
                    children: (0, S.jsxs)("div", {
                        className: "w-[540px] rounded-2xl bg-bg p-5 max-sm:w-[350px]",
                        children: [(0, S.jsx)("div", {
                            className: "mt-3 text-right max-sm:mt-0",
                            children: (0, S.jsx)("button", {
                                onClick: function() {
                                    return n(!1)
                                },
                                className: "rounded-full bg-brand-bg p-2",
                                children: (0, S.jsx)(f.Z, {})
                            })
                        }), (0, S.jsx)("img", {
                            src: l.src,
                            className: (0, p.Z)("mx-auto mt-3 h-[140px] w-[140px] max-sm:hidden")
                        }), (0, S.jsx)("h2", {
                            className: "mt-3 text-center font-one text-[32px] uppercase max-sm:text-2xl",
                            children: "Connect Wallet"
                        }), (0, S.jsxs)("div", {
                            className: "mt-8 rounded-xl border border-border bg-white p-3 text-sm text-brand max-sm:mt-4",
                            children: [(0, S.jsxs)("div", {
                                onClick: (0, r.Z)(o().mark(function e() {
                                    return o().wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                j({
                                                    connector: O[0]
                                                });
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e)
                                })),
                                className: "mt-2 flex cursor-pointer items-center rounded border border-border bg-bg px-3 py-2.5 hover:bg-brand-bg",
                                children: [(0, S.jsx)(a.Z, {
                                    className: "mr-4 h-8 w-8 max-sm:h-6 max-sm:w-6"
                                }), (0, S.jsx)("span", {
                                    children: "Binance Web3 Wallet"
                                })]
                            }), (0, S.jsxs)("div", {
                                className: "mt-6 flex items-center justify-between px-3",
                                children: [(0, S.jsx)(d.Z, {
                                    className: "flex-1"
                                }), (0, S.jsx)("span", {
                                    className: "mx-6 font-one text-2xl",
                                    children: "BOUNCEBIT"
                                }), (0, S.jsx)(d.Z, {
                                    className: "flex-1"
                                })]
                            })]
                        })]
                    })
                }) : null
            }
        }
    }
]);