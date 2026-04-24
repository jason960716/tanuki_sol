"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [115], {
        720: (e, t, a) => {
            a.d(t, {
                A: () => d
            });
            var r = a(5155),
                s = a(2115),
                n = a(6766),
                i = a(760),
                o = a(3017);
            let l = [{
                    name: "White",
                    path: "/assets/stickers/White.svg"
                }, {
                    name: "Pink",
                    path: "/assets/stickers/Pink.svg"
                }, {
                    name: "Red",
                    path: "/assets/stickers/red.svg"
                }, {
                    name: "Black",
                    path: "/assets/stickers/black.svg"
                }],
                d = e => {
                    let {
                        width: t = 50,
                        height: a = 50,
                        className: d = "object-contain",
                        interval: c = 3e3,
                        animate: m = !0
                    } = e, [x, h] = (0, s.useState)(0);
                    (0, s.useEffect)(() => {
                        if (!m) return;
                        let e = setInterval(() => {
                            h(e => (e + 1) % l.length)
                        }, c);
                        return () => clearInterval(e)
                    }, [c, m]);
                    let f = l[x];
                    return (0, r.jsx)("div", {
                        style: {
                            width: t,
                            height: a
                        },
                        className: "relative",
                        children: (0, r.jsx)(i.N, {
                            mode: "wait",
                            children: (0, r.jsx)(o.P.div, {
                                className: "absolute inset-0",
                                initial: "initial",
                                animate: "animate",
                                exit: "exit",
                                variants: {
                                    initial: {
                                        opacity: 0,
                                        scale: .8,
                                        rotate: -10
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1,
                                        rotate: 0,
                                        transition: {
                                            duration: .3,
                                            ease: "easeOut"
                                        }
                                    },
                                    exit: {
                                        opacity: 0,
                                        scale: .8,
                                        rotate: 10,
                                        transition: {
                                            duration: .2,
                                            ease: "easeIn"
                                        }
                                    }
                                },
                                children: (0, r.jsx)(n.default, {
                                    src: f.path,
                                    alt: "TANUKI ".concat(f.name, " Logo"),
                                    width: t,
                                    height: a,
                                    className: d,
                                    priority: !0
                                })
                            }, f.name)
                        })
                    })
                }
        },
        2738: (e, t, a) => {
            a.d(t, {
                A: () => b
            });
            var r = a(5155),
                s = a(6766),
                n = a(6874),
                i = a.n(n),
                o = a(2115),
                l = a(9911),
                d = a(3347),
                c = a(2515),
                m = a(760),
                x = a(3017);
            let h = e => (0, r.jsx)(x.P.path, {
                    fill: "transparent",
                    strokeWidth: "2",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    ...e
                }),
                f = e => {
                    let {
                        isOpen: t
                    } = e;
                    return (0, r.jsxs)(x.P.svg, {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        className: "text-red-500",
                        children: [(0, r.jsx)(h, {
                            variants: {
                                closed: {
                                    d: "M 2 4 L 18 4",
                                    opacity: 1
                                },
                                open: {
                                    d: "M 3 16.5 L 17 2.5",
                                    opacity: 1
                                }
                            },
                            initial: "closed",
                            animate: t ? "open" : "closed",
                            transition: {
                                duration: .3
                            }
                        }), (0, r.jsx)(h, {
                            variants: {
                                closed: {
                                    d: "M 2 10 L 18 10",
                                    opacity: 1
                                },
                                open: {
                                    opacity: 0
                                }
                            },
                            initial: "closed",
                            animate: t ? "open" : "closed",
                            transition: {
                                duration: .3
                            }
                        }), (0, r.jsx)(h, {
                            variants: {
                                closed: {
                                    d: "M 2 16 L 18 16",
                                    opacity: 1
                                },
                                open: {
                                    d: "M 3 2.5 L 17 16.5",
                                    opacity: 1
                                }
                            },
                            initial: "closed",
                            animate: t ? "open" : "closed",
                            transition: {
                                duration: .3
                            }
                        })]
                    })
                },
                u = e => {
                    let {
                        isOpen: t,
                        onClose: a,
                        children: s
                    } = e;
                    return (0, r.jsx)(m.N, {
                        children: t && (0, r.jsxs)(x.P.div, {
                            className: "fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-red-950/60 backdrop-blur-sm z-[100] overscroll-none touch-none",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: .3
                            },
                            children: [(0, r.jsx)("div", {
                                className: "fixed top-2 right-4 z-[101]",
                                children: (0, r.jsx)(x.P.button, {
                                    className: "flex items-center justify-center w-8 h-8 bg-red-500 rounded-full border-2 border-black touch-none",
                                    onClick: a,
                                    whileTap: {
                                        scale: .95
                                    },
                                    children: (0, r.jsx)(f, {
                                        isOpen: t
                                    })
                                })
                            }), (0, r.jsx)(x.P.div, {
                                className: "absolute inset-0 flex flex-col items-center justify-center gap-8 px-6 overscroll-none touch-none z-[100]",
                                initial: "closed",
                                animate: "open",
                                exit: "closed",
                                variants: {
                                    open: {
                                        transition: {
                                            staggerChildren: .1,
                                            delayChildren: .4
                                        }
                                    },
                                    closed: {
                                        transition: {
                                            staggerChildren: .05,
                                            staggerDirection: -1
                                        }
                                    }
                                },
                                children: o.Children.map(s, e => (0, r.jsx)(x.P.div, {
                                    className: "w-full",
                                    variants: {
                                        open: {
                                            y: 0,
                                            opacity: 1,
                                            scale: 1,
                                            transition: {
                                                type: "spring",
                                                damping: 20,
                                                stiffness: 300
                                            }
                                        },
                                        closed: {
                                            y: 20,
                                            opacity: 0,
                                            scale: .9
                                        }
                                    },
                                    children: e
                                }))
                            })]
                        })
                    })
                },
                p = [{
                    url: "https://x.com/sol_tanuki",
                    icon: d.rCx,
                    size: "size-[18px]"
                }, 
                // {
                //     url: "https://t.me/sol_tanuki",
                //     icon: l.zyo,
                //     size: "size-[18px]"
                // }, 
                // {
                //     url: "https://www.tiktok.com/@tanukimeme",
                //     icon: l.kkU,
                //     size: "size-[18px]"
                // },
                //  {
                //     url: "https://etherscan.io",
                //     icon: l.liQ,
                //     size: "size-[18px]"
                // }, 
                {
                    url: "https://dexscreener.com/solana/BRQMbo56SoW5Y7U6CTAqiAoCw2MPoGbsPfdqetbbpump",
                    icon: c.hfL,
                    size: "size-[18px]"
                }],
                b = () => {
                    let [e, t] = (0, o.useState)(null), [a, n] = (0, o.useState)(!1), [l, d] = (0, o.useState)(!1), [c, m] = (0, o.useState)(!1), h = () => {
                        n(e => !e)
                    };
                    return (0, o.useEffect)(() => {
                        let e = () => {
                            d(window.scrollY > 150), m(window.scrollY > 100)
                        };
                        return window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
                    }, []), (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: "fixed z-[10000] w-full top-0 left-0 right-0",
                            children: (0, r.jsxs)("nav", {
                                className: "w-full border-b-[3px] border-black flex items-center justify-between h-[58px] backdrop-blur-sm px-4 pt-2 pb-2 transition-all duration-300 shadow-md",
                                style: {
                                    background: "#000000",
                                    WebkitBackdropFilter: "blur(5px)"
                                },
                                children: [(0, r.jsx)("div", {
                                    className: "flex items-center h-full",
                                    children: (0, r.jsx)(i(), {
                                        href: "/",
                                        className: "block",
                                        children: (0, r.jsx)(x.P.div, {
                                            variants: {
                                                initial: {
                                                    rotate: 0
                                                },
                                                animate: {
                                                    rotate: [0, -5, 5, -5, 5, 0],
                                                    transition: {
                                                        duration: 2,
                                                        repeat: 1 / 0,
                                                        repeatDelay: 3,
                                                        ease: "easeInOut"
                                                    }
                                                }
                                            },
                                            initial: "initial",
                                            animate: "animate",
                                            className: "relative w-[50px] h-[50px] flex items-center justify-center cursor-pointer",
                                            children: (0, r.jsx)(s.default, {
                                                src: "/assets/logo.svg",
                                                alt: "Logo",
                                                width: 50,
                                                height: 50,
                                                className: "w-full h-full object-contain"
                                            })
                                        })
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "flex sm:hidden items-center gap-2",
                                    children: (0, r.jsx)(x.P.button, {
                                        className: "flex items-center justify-center w-10 h-10 bg-red-500/20 rounded-full border-2 border-red-500 touch-none",
                                        onClick: h,
                                        whileTap: {
                                            scale: .95
                                        },
                                        children: (0, r.jsx)(f, {
                                            isOpen: a
                                        })
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "sm:flex hidden items-center justify-center h-full gap-3",
                                    children: [(0, r.jsx)(i(), {
                                        href: "/tanuki",
                                        className: "flex items-center justify-center size-[40px] bg-red-500/20 border-2 border-red-500 rounded-full text-red-500 hover:bg-red-500/30 hover:border-red-400 hover:text-red-400 transition-all duration-150",
                                        children: (0, r.jsx)(s.default, {
                                            src: "/assets/tanukisvg.svg",
                                            alt: "Tanuki",
                                            width: 20,
                                            height: 20,
                                            className: "w-5 h-5"
                                        })
                                    }), p.map((e, a) => {
                                        let s = e.icon;
                                        return (0, r.jsx)(i(), {
                                            href: e.url,
                                            className: "relative border-2 border-red-500 rounded-full hover:bg-black hover:border-red-400 size-[40px] flex items-center justify-center hover:duration-150 transform transition-all ease-in text-red-500 hover:text-red-400",
                                            onMouseEnter: () => t(a),
                                            onMouseLeave: () => t(null),
                                            children: (0, r.jsx)(s, {
                                                className: e.size
                                            })
                                        }, a)
                                    })]
                                })]
                            })
                        }), (0, r.jsx)(u, {
                            isOpen: a,
                            onClose: h,
                            children: (0, r.jsxs)("div", {
                                className: "flex flex-col items-center gap-6",
                                children: [(0, r.jsx)(x.P.div, {
                                    className: "mb-4 cursor-pointer",
                                    whileTap: {
                                        rotate: [0, -5, 5, -5, 5, -3, 3, -2, 2, 0],
                                        scale: [1, 1.05, .95, 1.05, .95, 1],
                                        transition: {
                                            duration: .6,
                                            ease: "easeInOut"
                                        }
                                    },
                                    animate: {
                                        y: [0, -2, 0],
                                        transition: {
                                            duration: 2,
                                            repeat: 1 / 0,
                                            ease: "easeInOut"
                                        }
                                    },
                                    children: (0, r.jsx)(s.default, {
                                        src: "/assets/balls.svg",
                                        alt: "Tanuki Balls",
                                        width: 120,
                                        height: 120,
                                        className: "w-[120px] h-[120px] object-contain drop-shadow-lg select-none",
                                        priority: !0,
                                        draggable: !1
                                    })
                                }), (0, r.jsx)(i(), {
                                    href: "/tanuki",
                                    onClick: h,
                                    className: "flex items-center justify-center size-[50px] bg-red-500/20 border-2 border-red-500 rounded-full text-red-500 hover:bg-red-500/30 hover:border-red-400 hover:text-red-400 transition-all duration-150 mb-2",
                                    children: (0, r.jsx)(s.default, {
                                        src: "/assets/tanukisvg.svg",
                                        alt: "Tanuki",
                                        width: 24,
                                        height: 24,
                                        className: "w-6 h-6"
                                    })
                                }), p.map((e, t) => {
                                    let a = e.icon;
                                    return (0, r.jsx)(i(), {
                                        href: e.url,
                                        onClick: h,
                                        className: "relative border-2 border-red-500 rounded-full hover:bg-black hover:border-red-400 hover:border-[0.5px] size-[40px] flex items-center justify-center text-red-500 hover:text-red-400 transition-all duration-150",
                                        children: (0, r.jsx)(a, {
                                            className: "size-[20px]"
                                        })
                                    }, t)
                                })]
                            })
                        })]
                    })
                }
        },
        2894: (e, t, a) => {
            a.d(t, {
                A: () => l
            });
            var r = a(5155),
                s = a(9137),
                n = a.n(s);
            a(2115);
            var i = a(6766),
                o = a(720);
            let l = () => (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(n(), {
                    id: "328377b6c821600e",
                    children: "@-webkit-keyframes bounce-shake{0%,20%,50%,80%,100%{-webkit-transform:translatey(0)rotate(0deg);transform:translatey(0)rotate(0deg)}10%{-webkit-transform:translatey(-10px)rotate(-2deg);transform:translatey(-10px)rotate(-2deg)}30%{-webkit-transform:translatey(-15px)rotate(2deg);transform:translatey(-15px)rotate(2deg)}40%{-webkit-transform:translatey(-8px)rotate(-1deg);transform:translatey(-8px)rotate(-1deg)}60%{-webkit-transform:translatey(-12px)rotate(1deg);transform:translatey(-12px)rotate(1deg)}70%{-webkit-transform:translatey(-5px)rotate(-.5deg);transform:translatey(-5px)rotate(-.5deg)}}@-moz-keyframes bounce-shake{0%,20%,50%,80%,100%{-moz-transform:translatey(0)rotate(0deg);transform:translatey(0)rotate(0deg)}10%{-moz-transform:translatey(-10px)rotate(-2deg);transform:translatey(-10px)rotate(-2deg)}30%{-moz-transform:translatey(-15px)rotate(2deg);transform:translatey(-15px)rotate(2deg)}40%{-moz-transform:translatey(-8px)rotate(-1deg);transform:translatey(-8px)rotate(-1deg)}60%{-moz-transform:translatey(-12px)rotate(1deg);transform:translatey(-12px)rotate(1deg)}70%{-moz-transform:translatey(-5px)rotate(-.5deg);transform:translatey(-5px)rotate(-.5deg)}}@-o-keyframes bounce-shake{0%,20%,50%,80%,100%{-o-transform:translatey(0)rotate(0deg);transform:translatey(0)rotate(0deg)}10%{-o-transform:translatey(-10px)rotate(-2deg);transform:translatey(-10px)rotate(-2deg)}30%{-o-transform:translatey(-15px)rotate(2deg);transform:translatey(-15px)rotate(2deg)}40%{-o-transform:translatey(-8px)rotate(-1deg);transform:translatey(-8px)rotate(-1deg)}60%{-o-transform:translatey(-12px)rotate(1deg);transform:translatey(-12px)rotate(1deg)}70%{-o-transform:translatey(-5px)rotate(-.5deg);transform:translatey(-5px)rotate(-.5deg)}}@keyframes bounce-shake{0%,20%,50%,80%,100%{-webkit-transform:translatey(0)rotate(0deg);-moz-transform:translatey(0)rotate(0deg);-o-transform:translatey(0)rotate(0deg);transform:translatey(0)rotate(0deg)}10%{-webkit-transform:translatey(-10px)rotate(-2deg);-moz-transform:translatey(-10px)rotate(-2deg);-o-transform:translatey(-10px)rotate(-2deg);transform:translatey(-10px)rotate(-2deg)}30%{-webkit-transform:translatey(-15px)rotate(2deg);-moz-transform:translatey(-15px)rotate(2deg);-o-transform:translatey(-15px)rotate(2deg);transform:translatey(-15px)rotate(2deg)}40%{-webkit-transform:translatey(-8px)rotate(-1deg);-moz-transform:translatey(-8px)rotate(-1deg);-o-transform:translatey(-8px)rotate(-1deg);transform:translatey(-8px)rotate(-1deg)}60%{-webkit-transform:translatey(-12px)rotate(1deg);-moz-transform:translatey(-12px)rotate(1deg);-o-transform:translatey(-12px)rotate(1deg);transform:translatey(-12px)rotate(1deg)}70%{-webkit-transform:translatey(-5px)rotate(-.5deg);-moz-transform:translatey(-5px)rotate(-.5deg);-o-transform:translatey(-5px)rotate(-.5deg);transform:translatey(-5px)rotate(-.5deg)}}.animate-bounce-shake.jsx-328377b6c821600e{-webkit-animation:bounce-shake 2s ease-in-out infinite;-moz-animation:bounce-shake 2s ease-in-out infinite;-o-animation:bounce-shake 2s ease-in-out infinite;animation:bounce-shake 2s ease-in-out infinite}.animate-bounce-shake.jsx-328377b6c821600e:hover{-webkit-animation:bounce-shake.5s ease-in-out infinite;-moz-animation:bounce-shake.5s ease-in-out infinite;-o-animation:bounce-shake.5s ease-in-out infinite;animation:bounce-shake.5s ease-in-out infinite}"
                }), (0, r.jsxs)("footer", {
                    className: "jsx-328377b6c821600e w-full bg-gradient-to-b from-red-900/40 to-red-950/60 border-t-3 border-black relative",
                    children: [(0, r.jsx)("div", {
                        className: "jsx-328377b6c821600e w-full max-w-[1295px] mx-auto px-4 py-12",
                        children: (0, r.jsxs)("div", {
                            className: "jsx-328377b6c821600e flex flex-col md:flex-row items-center md:items-center justify-between gap-6",
                            children: [(0, r.jsx)("div", {
                                className: "jsx-328377b6c821600e w-full md:w-[45%] order-2 md:order-1",
                                children: (0, r.jsx)("p", {
                                    className: "jsx-328377b6c821600e text-white text-sm md:text-base text-left mt-3 border border-white/30 p-3 rounded",
                                    children: "Disclaimer: $TANUKI has no inherent value and is a community-driven token. Any value attributed to $TANUKI is solely determined by the community, its art, culture, and collective engagement. This is not financial advice."
                                })
                            }), (0, r.jsx)("div", {
                                className: "jsx-328377b6c821600e order-3 md:order-2 w-full md:w-auto flex justify-center my-4 md:my-0",
                                children: (0, r.jsxs)("a", {
                                    href: "https://x.com/sol_tanuki",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        textShadow: "1px 1px 0px rgba(0,0,0,0.5)"
                                    },
                                    className: "jsx-328377b6c821600e bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-[10px] border-3 border-black shadow-md transform transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center gap-3 uppercase tracking-wide",
                                    children: [(0, r.jsx)("div", {
                                        className: "jsx-328377b6c821600e relative size-[36px] bg-white rounded-full p-0.5 border-2 border-black flex items-center justify-center",
                                        children: (0, r.jsx)(i.default, {
                                            className: "size-[26px] object-contain",
                                            src: "/assets/icons/X83C4D8.svg",
                                            alt: "Telegram icon",
                                            width: 26,
                                            height: 26,
                                            unoptimized: !0
                                        })
                                    }), "X/Twitter"]
                                })
                            }), (0, r.jsx)("div", {
                                className: "jsx-328377b6c821600e shrink-0 order-1 md:order-3 w-full md:w-auto flex justify-center md:justify-end",
                                children: (0, r.jsx)("div", {
                                    className: "jsx-328377b6c821600e w-[180px] h-[180px] flex items-center justify-center",
                                    children: (0, r.jsx)("div", {
                                        className: "jsx-328377b6c821600e animate-bounce-shake",
                                        children: (0, r.jsx)(i.default, {
                                            src: "/assets/cointan.png",
                                            alt: "Tanuki Coin",
                                            width: 160,
                                            height: 160,
                                            className: "w-[160px] h-[160px] object-contain",
                                            unoptimized: !0
                                        })
                                    })
                                })
                            })]
                        })
                    }), (0, r.jsx)("div", {
                        className: "jsx-328377b6c821600e w-full border-t-2 border-red-400/30 bg-gradient-to-b from-red-800/80 to-red-900/90",
                        children: (0, r.jsxs)("div", {
                            className: "jsx-328377b6c821600e w-full max-w-[1295px] mx-auto px-4 py-10 pb-[100px] sm:pb-10 flex flex-col sm:flex-row items-center justify-between gap-6",
                            children: [(0, r.jsxs)("div", {
                                className: "jsx-328377b6c821600e flex items-center gap-4",
                                children: [(0, r.jsx)("div", {
                                    className: "jsx-328377b6c821600e w-[50px] h-[50px] flex items-center justify-center",
                                    children: (0, r.jsx)(o.A, {
                                        width: 50,
                                        height: 50,
                                        interval: 2500
                                    })
                                }), (0, r.jsxs)("p", {
                                    className: "jsx-328377b6c821600e text-white text-sm md:text-base",
                                    children: ["\xa9 ", new Date().getFullYear(), " Yokai Labs. All rights reserved."]
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "jsx-328377b6c821600e flex items-center gap-6",
                                children: [(0, r.jsx)("a", {
                                    href: "https://twitter.com/sol_tanuki",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "jsx-328377b6c821600e relative border-2 border-white rounded-full hover:bg-red-500/30 size-[40px] flex items-center justify-center hover:duration-150 transform transition-all ease-in",
                                    children: (0, r.jsx)("div", {
                                        className: "jsx-328377b6c821600e relative size-[24px]",
                                        children: (0, r.jsx)(i.default, {
                                            className: "size-full object-contain",
                                            src: "/assets/icons/X83C4D8.svg",
                                            alt: "X icon",
                                            width: 24,
                                            height: 24,
                                            unoptimized: !0
                                        })
                                    })
                                }), 
                                // (0, r.jsx)("a", {
                                //     href: "https://t.me/sol_tanuki",
                                //     target: "_blank",
                                //     rel: "noopener noreferrer",
                                //     className: "jsx-328377b6c821600e relative border-2 border-white rounded-full hover:bg-red-500/30 size-[40px] flex items-center justify-center hover:duration-150 transform transition-all ease-in",
                                //     children: (0, r.jsx)("div", {
                                //         className: "jsx-328377b6c821600e relative size-[24px]",
                                //         children: (0, r.jsx)(i.default, {
                                //             className: "size-full object-contain",
                                //             src: "/assets/icons/TG-blue.svg",
                                //             alt: "Telegram icon",
                                //             width: 24,
                                //             height: 24,
                                //             unoptimized: !0
                                //         })
                                //     })
                                // })
                            ]
                            })]
                        })
                    })]
                })]
            })
        }
    }
]);