var app = function () {
    "use strict";

    function e() {}
    const t = e => e;

    function r(e) {
        return e()
    }

    function l() {
        return Object.create(null)
    }

    function n(e) {
        e.forEach(r)
    }

    function a(e) {
        return "function" == typeof e
    }

    function o(e, t) {
        return e != e ? t == t : e !== t || e && "object" == typeof e || "function" == typeof e
    }

    function s(e) {
        return null == e ? "" : e
    }
    const i = "undefined" != typeof window;
    let c = i ? () => window.performance.now() : () => Date.now(),
        d = i ? e => requestAnimationFrame(e) : e;
    const u = new Set;
    let p, m = !1;

    function f() {
        u.forEach(e => {
            e[0](c()) || (u.delete(e), e[1]())
        }), (m = u.size > 0) && d(f)
    }

    function g(e, t) {
        e.appendChild(t)
    }

    function h(e, t, r) {
        e.insertBefore(t, r || null)
    }

    function b(e) {
        e.parentNode.removeChild(e)
    }

    function v(e, t) {
        for (let r = 0; r < e.length; r += 1) e[r] && e[r].d(t)
    }

    function C(e) {
        return document.createElement(e)
    }

    function $(e) {
        return document.createTextNode(e)
    }

    function x() {
        return $(" ")
    }

    function y() {
        return $("")
    }

    function O(e, t, r, l) {
        return e.addEventListener(t, r, l), () => e.removeEventListener(t, r, l)
    }

    function k(e, t, r) {
        null == r ? e.removeAttribute(t) : e.getAttribute(t) !== r && e.setAttribute(t, r)
    }

    function _(e, t) {
        t = "" + t, e.data !== t && (e.data = t)
    }

    function w(e, t) {
        (null != t || e.value) && (e.value = t)
    }

    function A(e, t, r, l) {
        e.style.setProperty(t, r, l ? "important" : "")
    }

    function U(e, t) {
        for (let r = 0; r < e.options.length; r += 1) {
            const l = e.options[r];
            if (l.__value === t) return void(l.selected = !0)
        }
    }
    let V, D = 0,
        T = {};

    function N(e, t, r, l, n, a, o, s = 0) {
        const i = 16.666 / l;
        let c = "{\n";
        for (let e = 0; e <= 1; e += i) {
            const l = t + (r - t) * a(e);
            c += 100 * e + `%{${o(l,1-l)}}\n`
        }
        const d = c + `100% {${o(r,1-r)}}\n}`,
            u = `__svelte_${function(e){let t=5381,r=e.length;for(;r--;)t=(t<<5)-t^e.charCodeAt(r);return t>>>0}(d)}_${s}`;
        if (!T[u]) {
            if (!p) {
                const e = C("style");
                document.head.appendChild(e), p = e.sheet
            }
            T[u] = !0, p.insertRule(`@keyframes ${u} ${d}`, p.cssRules.length)
        }
        const m = e.style.animation || "";
        return e.style.animation = `${m?`${m}, `:""}${u} ${l}ms linear ${n}ms 1 both`, D += 1, u
    }

    function F(e, t) {
        e.style.animation = (e.style.animation || "").split(", ").filter(t ? e => e.indexOf(t) < 0 : e => -1 === e.indexOf("__svelte")).join(", "), t && !--D && d(() => {
            if (D) return;
            let e = p.cssRules.length;
            for (; e--;) p.deleteRule(e);
            T = {}
        })
    }

    function S(e) {
        V = e
    }
    const E = [],
        L = [],
        j = [],
        I = [],
        B = Promise.resolve();
    let M, H = !1;

    function P(e) {
        j.push(e)
    }

    function R() {
        const e = new Set;
        do {
            for (; E.length;) {
                const e = E.shift();
                S(e), q(e.$$)
            }
            for (; L.length;) L.pop()();
            for (let t = 0; t < j.length; t += 1) {
                const r = j[t];
                e.has(r) || (r(), e.add(r))
            }
            j.length = 0
        } while (E.length);
        for (; I.length;) I.pop()();
        H = !1
    }

    function q(e) {
        null !== e.fragment && (e.update(e.dirty), n(e.before_update), e.fragment && e.fragment.p(e.dirty, e.ctx), e.dirty = null, e.after_update.forEach(P))
    }

    function Q(e, t, r) {
        e.dispatchEvent(function (e, t) {
            const r = document.createEvent("CustomEvent");
            return r.initCustomEvent(e, !1, !1, t), r
        }(`${t?"intro":"outro"}${r}`))
    }
    const J = new Set;
    let K;

    function W() {
        K = {
            r: 0,
            c: [],
            p: K
        }
    }

    function G() {
        K.r || n(K.c), K = K.p
    }

    function Y(e, t) {
        e && e.i && (J.delete(e), e.i(t))
    }

    function z(e, t, r, l) {
        if (e && e.o) {
            if (J.has(e)) return;
            J.add(e), K.c.push(() => {
                J.delete(e), l && (r && e.d(1), l())
            }), e.o(t)
        }
    }
    const X = {
        duration: 0
    };

    function Z(r, l, o, s) {
        let i = l(r, o),
            p = s ? 0 : 1,
            g = null,
            h = null,
            b = null;

        function v() {
            b && F(r, b)
        }

        function C(e, t) {
            const r = e.b - p;
            return t *= Math.abs(r), {
                a: p,
                b: e.b,
                d: r,
                duration: t,
                start: e.start,
                end: e.start + t,
                group: e.group
            }
        }

        function $(l) {
            const {
                delay: a = 0,
                duration: o = 300,
                easing: s = t,
                tick: $ = e,
                css: x
            } = i || X, y = {
                start: c() + a,
                b: l
            };
            l || (y.group = K, K.r += 1), g ? h = y : (x && (v(), b = N(r, p, l, o, a, s, x)), l && $(0, 1), g = C(y, o), P(() => Q(r, l, "start")), function (e) {
                let t;
                m || (m = !0, d(f)), new Promise(r => {
                    u.add(t = [e, r])
                })
            }(e => {
                if (h && e > h.start && (g = C(h, o), h = null, Q(r, g.b, "start"), x && (v(), b = N(r, p, g.b, g.duration, 0, s, i.css))), g)
                    if (e >= g.end) $(p = g.b, 1 - p), Q(r, g.b, "end"), h || (g.b ? v() : --g.group.r || n(g.group.c)), g = null;
                    else if (e >= g.start) {
                    const t = e - g.start;
                    p = g.a + g.d * s(t / g.duration), $(p, 1 - p)
                }
                return !(!g && !h)
            }))
        }
        return {
            run(e) {
                a(i) ? (M || (M = Promise.resolve()).then(() => {
                    M = null
                }), M).then(() => {
                    i = i(), $(e)
                }) : $(e)
            },
            end() {
                v(), g = h = null
            }
        }
    }

    function ee(e) {
        e && e.c()
    }

    function te(e, t, l) {
        const {
            fragment: o,
            on_mount: s,
            on_destroy: i,
            after_update: c
        } = e.$$;
        o && o.m(t, l), P(() => {
            const t = s.map(r).filter(a);
            i ? i.push(...t) : n(t), e.$$.on_mount = []
        }), c.forEach(P)
    }

    function re(e, t) {
        const r = e.$$;
        null !== r.fragment && (n(r.on_destroy), r.fragment && r.fragment.d(t), r.on_destroy = r.fragment = null, r.ctx = {})
    }

    function le(e, t) {
        e.$$.dirty || (E.push(e), H || (H = !0, B.then(R)), e.$$.dirty = l()), e.$$.dirty[t] = !0
    }

    function ne(t, r, a, o, s, i) {
        const c = V;
        S(t);
        const d = r.props || {},
            u = t.$$ = {
                fragment: null,
                ctx: null,
                props: i,
                update: e,
                not_equal: s,
                bound: l(),
                on_mount: [],
                on_destroy: [],
                before_update: [],
                after_update: [],
                context: new Map(c ? c.$$.context : []),
                callbacks: l(),
                dirty: null
            };
        let p = !1;
        u.ctx = a ? a(t, d, (e, r, l = r) => (u.ctx && s(u.ctx[e], u.ctx[e] = l) && (u.bound[e] && u.bound[e](l), p && le(t, e)), r)) : d, u.update(), p = !0, n(u.before_update), u.fragment = !!o && o(u.ctx), r.target && (r.hydrate ? u.fragment && u.fragment.l(function (e) {
            return Array.from(e.childNodes)
        }(r.target)) : u.fragment && u.fragment.c(), r.intro && Y(t.$$.fragment), te(t, r.target, r.anchor), R()), S(c)
    }
    class ae {
        $destroy() {
            re(this, 1), this.$destroy = e
        }
        $on(e, t) {
            const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
            return r.push(t), () => {
                const e = r.indexOf(t); - 1 !== e && r.splice(e, 1)
            }
        }
        $set() {}
    }

    function oe(e) {
        const t = e - 1;
        return t * t * t + 1
    }

    function se(e, {
        delay: t = 0,
        duration: r = 400,
        easing: l = oe
    }) {
        const n = getComputedStyle(e),
            a = +n.opacity,
            o = parseFloat(n.height),
            s = parseFloat(n.paddingTop),
            i = parseFloat(n.paddingBottom),
            c = parseFloat(n.marginTop),
            d = parseFloat(n.marginBottom),
            u = parseFloat(n.borderTopWidth),
            p = parseFloat(n.borderBottomWidth);
        return {
            delay: t,
            duration: r,
            easing: l,
            css: e => "overflow: hidden;" + `opacity: ${Math.min(20*e,1)*a};` + `height: ${e*o}px;` + `padding-top: ${e*s}px;` + `padding-bottom: ${e*i}px;` + `margin-top: ${e*c}px;` + `margin-bottom: ${e*d}px;` + `border-top-width: ${e*u}px;` + `border-bottom-width: ${e*p}px;`
        }
    }
    const ie = [];

    function ce(t, r = e) {
        let l;
        const n = [];

        function a(e) {
            if (o(t, e) && (t = e, l)) {
                const e = !ie.length;
                for (let e = 0; e < n.length; e += 1) {
                    const r = n[e];
                    r[1](), ie.push(r, t)
                }
                if (e) {
                    for (let e = 0; e < ie.length; e += 2) ie[e][0](ie[e + 1]);
                    ie.length = 0
                }
            }
        }
        return {
            set: a,
            update: function (e) {
                a(e(t))
            },
            subscribe: function (o, s = e) {
                const i = [o, s];
                return n.push(i), 1 === n.length && (l = r(a) || e), o(t), () => {
                    const e = n.indexOf(i); - 1 !== e && n.splice(e, 1), 0 === n.length && (l(), l = null)
                }
            }
        }
    }
    const de = ce(""),
        ue = ce({});

    function pe(e) {
        let t, r, l, n;
        return {
            c() {
                t = C("div"), r = $(e.alertText), k(t, "class", "alert alert-danger svelte-1r1bdcq"), k(t, "role", "alert")
            },
            m(e, l) {
                h(e, t, l), g(t, r), n = !0
            },
            p(e, t) {
                n && !e.alertText || _(r, t.alertText)
            },
            i(e) {
                n || (P(() => {
                    l || (l = Z(t, se, {}, !0)), l.run(1)
                }), n = !0)
            },
            o(e) {
                l || (l = Z(t, se, {}, !1)), l.run(0), n = !1
            },
            d(e) {
                e && b(t), e && l && l.end()
            }
        }
    }

    function me(e) {
        let t, r, l, a, o, s, i, c, d, u, p, m = "Register" === e.headerText && ge(e);
        return {
            c() {
                t = C("form"), r = C("div"), m && m.c(), l = x(), (a = C("label")).textContent = "Email address", o = x(), s = C("input"), i = x(), (c = C("button")).textContent = "Submit", k(a, "for", "exampleInputEmail1"), k(s, "type", "email"), k(s, "class", "form-control"), k(s, "id", "exampleInputEmail1"), k(s, "aria-describedby", "emailHelp"), k(s, "placeholder", "Enter email"), k(r, "class", "form-group"), k(c, "type", "submit"), k(c, "class", "btn btn-primary"), p = [O(s, "input", e.input_input_handler_2), O(t, "submit", e.login)]
            },
            m(n, d) {
                h(n, t, d), g(t, r), m && m.m(r, null), g(r, l), g(r, a), g(r, o), g(r, s), w(s, e.email), g(t, i), g(t, c), u = !0
            },
            p(e, t) {
                "Register" === t.headerText ? m ? m.p(e, t) : ((m = ge(t)).c(), m.m(r, l)) : m && (m.d(1), m = null), e.email && s.value !== t.email && w(s, t.email)
            },
            i(e) {
                u || (P(() => {
                    d || (d = Z(t, se, {}, !0)), d.run(1)
                }), u = !0)
            },
            o(e) {
                d || (d = Z(t, se, {}, !1)), d.run(0), u = !1
            },
            d(e) {
                e && b(t), m && m.d(), e && d && d.end(), n(p)
            }
        }
    }

    function fe(e) {
        let t, r, l, a, o, s, i, c, d, u, p, m, f;
        return {
            c() {
                t = C("form"), r = C("div"), (l = C("label")).textContent = "Verification code", a = x(), o = C("input"), s = x(), i = C("small"), c = $(e.feedbackInformation), d = x(), (u = C("button")).textContent = "Submit", k(l, "for", "verficationCode"), k(o, "autocomplete", "off"), k(o, "type", "text"), k(o, "class", "form-control"), k(o, "id", "verficationCode"), k(o, "aria-describedby", "emailHelp"), k(o, "placeholder", "Enter verification code"), k(i, "id", "emailHelp"), k(i, "class", "form-text text-muted"), k(r, "class", "form-group"), k(u, "type", "submit"), k(u, "class", "btn btn-primary"), f = [O(o, "input", e.input_input_handler), O(t, "submit", e.verifyWithCode)]
            },
            m(n, p) {
                h(n, t, p), g(t, r), g(r, l), g(r, a), g(r, o), w(o, e.verificationCode), g(r, s), g(r, i), g(i, c), g(t, d), g(t, u), m = !0
            },
            p(e, t) {
                e.verificationCode && o.value !== t.verificationCode && w(o, t.verificationCode), m && !e.feedbackInformation || _(c, t.feedbackInformation)
            },
            i(e) {
                m || (P(() => {
                    p || (p = Z(t, se, {}, !0)), p.run(1)
                }), m = !0)
            },
            o(e) {
                p || (p = Z(t, se, {}, !1)), p.run(0), m = !1
            },
            d(e) {
                e && b(t), e && p && p.end(), n(f)
            }
        }
    }

    function ge(e) {
        let t, r, l, n, a;
        return {
            c() {
                t = C("div"), (r = C("label")).textContent = "Your name", l = x(), n = C("input"), k(r, "for", "exampleInputPassword1"), k(n, "type", "text"), k(n, "class", "form-control"), k(n, "id", "nameInput"), k(n, "placeholder", "Your name"), k(t, "class", "form-group"), a = O(n, "input", e.input_input_handler_1)
            },
            m(a, o) {
                h(a, t, o), g(t, r), g(t, l), g(t, n), w(n, e.name)
            },
            p(e, t) {
                e.name && n.value !== t.name && w(n, t.name)
            },
            d(e) {
                e && b(t), a()
            }
        }
    }

    function he(e) {
        let t;
        return {
            c() {
                (t = C("div")).innerHTML = '<span class="sr-only">Loading...</span>', k(t, "class", "spinner-border text-primary svelte-1r1bdcq"), k(t, "role", "status")
            },
            m(e, r) {
                h(e, t, r)
            },
            d(e) {
                e && b(t)
            }
        }
    }

    function be(e) {
        let t, r, l, n, a, o, i, c, d, u, p, m, f, v, y, O, w, A, U = e.error && pe(e);
        const V = [fe, me],
            D = [];

        function T(e, t) {
            return t.verify ? 0 : 1
        }
        c = T(0, e), d = D[c] = V[c](e);
        let N = e.loading && he();
        return {
            c() {
                t = C("main"), U && U.c(), r = x(), l = C("div"), n = C("header"), a = C("h1"), o = $(e.headerText), i = x(), d.c(), u = x(), p = C("div"), N && N.c(), m = x(), f = C("div"), v = C("div"), y = $(e.progress), k(v, "class", "progress-bar"), k(v, "role", "progressbar"), k(v, "style", O = "width:" + e.progress), k(v, "aria-valuenow", "25"), k(v, "aria-valuemin", "0"), k(v, "aria-valuemax", "100"), k(f, "class", "progress svelte-1r1bdcq"), k(p, "id", "progressContainer"), k(p, "class", "svelte-1r1bdcq"), k(l, "id", "login"), k(l, "class", "svelte-1r1bdcq"), k(t, "class", w = s("100%" === e.progress ? "bg-success" : "bg-primary") + " svelte-1r1bdcq")
            },
            m(e, s) {
                h(e, t, s), U && U.m(t, null), g(t, r), g(t, l), g(l, n), g(n, a), g(a, o), g(l, i), D[c].m(l, null), g(l, u), g(l, p), N && N.m(p, null), g(p, m), g(p, f), g(f, v), g(v, y), A = !0
            },
            p(e, n) {
                n.error ? U ? (U.p(e, n), Y(U, 1)) : ((U = pe(n)).c(), Y(U, 1), U.m(t, r)) : U && (W(), z(U, 1, 1, () => {
                    U = null
                }), G()), A && !e.headerText || _(o, n.headerText);
                let a = c;
                (c = T(0, n)) === a ? D[c].p(e, n) : (W(), z(D[a], 1, 1, () => {
                    D[a] = null
                }), G(), (d = D[c]) || (d = D[c] = V[c](n)).c(), Y(d, 1), d.m(l, u)), n.loading ? N || ((N = he()).c(), N.m(p, m)) : N && (N.d(1), N = null), A && !e.progress || _(y, n.progress), (!A || e.progress && O !== (O = "width:" + n.progress)) && k(v, "style", O), (!A || e.progress && w !== (w = s("100%" === n.progress ? "bg-success" : "bg-primary") + " svelte-1r1bdcq")) && k(t, "class", w)
            },
            i(e) {
                A || (Y(U), Y(d), A = !0)
            },
            o(e) {
                z(U), z(d), A = !1
            },
            d(e) {
                e && b(t), U && U.d(), D[c].d(), N && N.d()
            }
        }
    }

    function ve(e, t, r) {
        let l, n, a, o, s, {
                apiCall: i
            } = t,
            c = !1,
            d = "Login/Register",
            u = !1,
            p = "0%",
            m = "",
            f = !1,
            g = "";
        return e.$set = e => {
            "apiCall" in e && r("apiCall", i = e.apiCall)
        }, {
            apiCall: i,
            email: l,
            name: n,
            headerText: d,
            verify: u,
            verificationCode: a,
            loading: o,
            progress: p,
            alertText: m,
            error: f,
            feedbackInformation: g,
            login: async function (e) {
                if (e.preventDefault(), console.log(c), c) !async function (e) {
                    e.preventDefault();
                    try {
                        const e = await i("/registerUser", JSON.stringify({
                            name: n,
                            email: l
                        }));
                        e.error || (r("progress", p = "66%"), r("verify", u = !0), s = e.data.token, console.log(s), r("headerText", d = "Verify account"), r("feedbackInformation", g = "An email with the verification code have been sent to " + l))
                    } catch (e) {
                        console.log(e)
                    }
                }(e);
                else try {
                    r("loading", o = !0);
                    const e = await i("/login", JSON.stringify({
                        email: l
                    }));
                    "NoAccount" === e.message ? (r("progress", p = "33%"), c = !0, r("loading", o = !1), r("headerText", d = "Register")) : e.error ? console.log("huh") : (r("loading", o = !1), console.log("Login no error"), r("headerText", d = "Verify login"), s = e.data.token, r("progress", p = "50%"), r("feedbackInformation", g = "An email with the verification code have been sent to " + l), r("verify", u = !0)), console.log(e)
                } catch (e) {
                    console.log(e)
                }
            },
            verifyWithCode: async function (e) {
                try {
                    console.log("code"), e.preventDefault(), console.log(s);
                    const t = await i("/verifyWithCode", JSON.stringify({
                        verificationCode: a,
                        token: s
                    }));
                    console.log(t), t.error ? (r("error", f = !0), "WrongCode" === t.message && r("alertText", m = "Wrong verification code entered, try again")) : (console.log(t), t.admin ? de.set("orders") : de.set("makeOrder"))
                } catch (e) {
                    console.log(e)
                }
            },
            input_input_handler: function () {
                a = this.value, r("verificationCode", a)
            },
            input_input_handler_1: function () {
                n = this.value, r("name", n)
            },
            input_input_handler_2: function () {
                l = this.value, r("email", l)
            }
        }
    }
    class Ce extends ae {
        constructor(e) {
            super(), ne(this, e, ve, be, o, {
                apiCall: 0
            })
        }
    }

    function $e(e) {
        let t, r = e.files[e.index].name + "";
        return {
            c() {
                t = $(r)
            },
            m(e, r) {
                h(e, t, r)
            },
            p(e, l) {
                (e.files || e.index) && r !== (r = l.files[l.index].name + "") && _(t, r)
            },
            d(e) {
                e && b(t)
            }
        }
    }

    function xe(t) {
        let r;
        return {
            c() {
                r = $("Choose file")
            },
            m(e, t) {
                h(e, r, t)
            },
            p: e,
            d(e) {
                e && b(r)
            }
        }
    }

    function ye(e) {
        let t, r, l, a, o, s, i, c, d, u, p, m, f, v, $;

        function y(e, t) {
            return void 0 === t.files[t.index] ? xe : $e
        }
        let _ = y(0, e),
            A = _(e);
        return {
            c() {
                t = C("div"), r = C("div"), l = C("div"), a = C("input"), s = x(), i = C("label"), A.c(), c = x(), d = C("div"), u = C("input"), p = x(), (m = C("button")).innerHTML = '<span aria-hidden="true">×</span>', k(a, "type", "file"), k(a, "class", "custom-file-input"), k(a, "id", "inputGroupFile01"), k(a, "aria-describedby", "inputGroupFileAddon01"), a.multiple = o = !1, k(i, "class", "custom-file-label text-truncate"), k(i, "for", "inputGroupFile01"), k(l, "class", "col-4"), k(u, "type", "text"), k(u, "class", "form-control"), k(u, "placeholder", "File description"), k(d, "class", "col-7"), k(m, "type", "button"), k(m, "class", "close"), k(m, "data-dismiss", "modal"), k(m, "aria-label", "Close"), k(r, "class", "form-row"), k(t, "class", "form-group"), $ = [O(a, "change", e.change_handler), O(u, "input", e.input1_input_handler), O(m, "click", e.deleteFile)]
            },
            m(n, o) {
                h(n, t, o), g(t, r), g(r, l), g(l, a), g(l, s), g(l, i), A.m(i, null), g(r, c), g(r, d), g(d, u), w(u, e.descriptions[e.index]), g(r, p), g(r, m), v = !0
            },
            p(e, t) {
                _ === (_ = y(0, t)) && A ? A.p(e, t) : (A.d(1), (A = _(t)) && (A.c(), A.m(i, null))), (e.descriptions || e.index) && u.value !== t.descriptions[t.index] && w(u, t.descriptions[t.index])
            },
            i(e) {
                v || (P(() => {
                    f || (f = Z(t, se, {}, !0)), f.run(1)
                }), v = !0)
            },
            o(e) {
                f || (f = Z(t, se, {}, !1)), f.run(0), v = !1
            },
            d(e) {
                e && b(t), A.d(), e && f && f.end(), n($)
            }
        }
    }

    function Oe(e, t, r) {
        let {
            files: l
        } = t, {
            descriptions: n
        } = t, {
            index: a
        } = t, {
            deleteFileInput: o
        } = t;
        console.log(l);
        return e.$set = e => {
            "files" in e && r("files", l = e.files), "descriptions" in e && r("descriptions", n = e.descriptions), "index" in e && r("index", a = e.index), "deleteFileInput" in e && r("deleteFileInput", o = e.deleteFileInput)
        }, {
            files: l,
            descriptions: n,
            index: a,
            deleteFileInput: o,
            deleteFile: function () {
                o(a)
            },
            change_handler: e => r("files", l[a] = e.currentTarget.files[0], l),
            input1_input_handler: function () {
                n[a] = this.value, r("descriptions", n), r("index", a)
            }
        }
    }
    class ke extends ae {
        constructor(e) {
            super(), ne(this, e, Oe, ye, o, {
                files: 0,
                descriptions: 0,
                index: 0,
                deleteFileInput: 0
            })
        }
    }

    function _e(t) {
        let r, l, a, o, s, i, c, d, u, p, m, f, v, y, _;
        return {
            c() {
                r = C("nav"), (l = C("span")).textContent = "Användare", a = x(), o = C("div"), s = C("div"), i = C("a"), c = $("Gör en beställning"), u = x(), p = C("a"), m = $("Mina beställningar"), v = x(), (y = C("a")).textContent = "Logga ut", k(l, "class", "navbar-brand mb-0 h1"), k(i, "href", "#"), k(i, "class", d = "nav-item nav-link " + ("makeOrder" === t.urlValue ? "active" : "")), k(p, "href", "#"), k(p, "class", f = "nav-item nav-link " + ("myOrders" === t.urlValue ? "active" : "") + "\r\n        "), k(y, "class", "nav-item nav-link"), k(y, "href", "#"), k(s, "class", "navbar-nav"), k(o, "class", " navbar"), k(o, "id", "navbarNavAltMarkup"), k(r, "class", "navbar navbar-expand-lg sticky-top navbar-light bg-light"), _ = [O(i, "click", t.click_handler), O(p, "click", t.click_handler_1), O(y, "click", t.logOut)]
            },
            m(e, t) {
                h(e, r, t), g(r, l), g(r, a), g(r, o), g(o, s), g(s, i), g(i, c), g(s, u), g(s, p), g(p, m), g(s, v), g(s, y)
            },
            p(e, t) {
                e.urlValue && d !== (d = "nav-item nav-link " + ("makeOrder" === t.urlValue ? "active" : "")) && k(i, "class", d), e.urlValue && f !== (f = "nav-item nav-link " + ("myOrders" === t.urlValue ? "active" : "") + "\r\n        ") && k(p, "class", f)
            },
            i: e,
            o: e,
            d(e) {
                e && b(r), n(_)
            }
        }
    }

    function we(e, t) {
        e && e.preventDefault(), de.set(t)
    }

    function Ae(e, t, r) {
        let l, {
            apiCall: n
        } = t;
        de.subscribe(e => r("urlValue", l = e));
        return e.$set = e => {
            "apiCall" in e && r("apiCall", n = e.apiCall)
        }, {
            apiCall: n,
            urlValue: l,
            logOut: async function (e) {
                try {
                    e && e.preventDefault(), (await n("/logOut")).error ? alert("Kunde inte logga ut") : de.set("authenticate")
                } catch (e) {
                    console.log(e)
                }
            },
            click_handler: e => we(e, "makeOrder"),
            click_handler_1: e => we(e, "myOrders")
        }
    }
    class Ue extends ae {
        constructor(e) {
            super(), ne(this, e, Ae, _e, o, {
                apiCall: 0
            })
        }
    }

    function Ve(e, t, r) {
        const l = Object.create(e);
        return l.desc = t[r], l.i = r, l
    }

    function De(e) {
        let t, r, l, n, a;
        return {
            c() {
                t = C("div"), r = $(e.alertText), k(t, "class", l = "alert " + (e.error ? "alert-danger" : "alert-success") + "\r\n        "), k(t, "role", "alert")
            },
            m(e, l) {
                h(e, t, l), g(t, r), a = !0
            },
            p(e, n) {
                a && !e.alertText || _(r, n.alertText), (!a || e.error && l !== (l = "alert " + (n.error ? "alert-danger" : "alert-success") + "\r\n        ")) && k(t, "class", l)
            },
            i(e) {
                a || (P(() => {
                    n || (n = Z(t, se, {}, !0)), n.run(1)
                }), a = !0)
            },
            o(e) {
                n || (n = Z(t, se, {}, !1)), n.run(0), a = !1
            },
            d(e) {
                e && b(t), e && n && n.end()
            }
        }
    }

    function Te(e) {
        let t;
        const r = new ke({
            props: {
                deleteFileInput: e.deleteFileInput,
                index: e.i,
                files: e.files,
                descriptions: e.fileDescriptions
            }
        });
        return {
            c() {
                ee(r.$$.fragment)
            },
            m(e, l) {
                te(r, e, l), t = !0
            },
            p(e, t) {
                const l = {};
                e.files && (l.files = t.files), e.fileDescriptions && (l.descriptions = t.fileDescriptions), r.$set(l)
            },
            i(e) {
                t || (Y(r.$$.fragment, e), t = !0)
            },
            o(e) {
                z(r.$$.fragment, e), t = !1
            },
            d(e) {
                re(r, e)
            }
        }
    }

    function Ne(e) {
        let t, r, l, a, o, s, i, c, d, u, p, m, f, $, y, _, w, A, U, V, D, T, N, F, S, E, L, j, I, B, M, H;
        const P = new Ue({
            props: {
                apiCall: e.apiCall
            }
        });
        let R = (e.error || e.success) && De(e),
            q = e.fileDescriptions,
            Q = [];
        for (let t = 0; t < q.length; t += 1) Q[t] = Te(Ve(e, q, t));
        const J = e => z(Q[e], 1, 1, () => {
            Q[e] = null
        });
        return {
            c() {
                t = C("header"), ee(P.$$.fragment), r = x(), l = C("div"), a = C("main"), R && R.c(), o = x(), s = C("form"), i = C("div"), c = C("div"), (d = C("div")).innerHTML = '<label for="productName">Projektnamn</label> \n            <input type="text" class="form-control" id="productName" name="productName" aria-describedby="emailHelp" placeholder="Projektnamn">', u = x(), p = C("div"), (m = C("label")).textContent = "Beställare", f = x(), $ = C("input"), _ = x(), (w = C("div")).innerHTML = '<h3>Typ av uppdrag</h3> \n          <div class="form-check"><input class="form-check-input" type="checkbox" id="tillverkning" name="production"> \n            <label class="form-check-label" for="tillverkning">\n              Tillverkning\n            </label></div> \n          <div class="form-check"><input class="form-check-input" type="checkbox" id="tillverkningsunderlag" name="productionDocumentation"> \n            <label class="form-check-label" for="tillverkningsunderlag">\n              Tillverkningsunderlag\n            </label></div> \n          <div class="form-check"><input class="form-check-input" type="checkbox" id="beräkning" name="calculation"> \n            <label class="form-check-label" for="beräkning">Beräkning</label></div>', A = x(), (U = C("div")).innerHTML = '<h3>Beskrivning av produkt</h3> \n          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="productDescription"></textarea>', V = x(), (D = C("div")).innerHTML = '<h3>Önskemål</h3> \n          <textarea class="form-control" id="productDescripion" name="wishes" rows="3"></textarea>', T = x(), (N = C("h3")).textContent = "Filer", F = x();
                for (let e = 0; e < Q.length; e += 1) Q[e].c();
                S = x(), (E = C("button")).textContent = "Lägg till fil", L = x(), j = C("hr"), I = x(), (B = C("button")).textContent = "Gör beställning", k(d, "class", "col"), k(m, "for", "customer"), k($, "name", "customer"), k($, "type", "text"), k($, "id", "customer"), k($, "class", "form-control"), $.value = y = e.user.name, k($, "placeholder", "Beställare"), k(p, "class", "col"), k(c, "class", "form-row"), k(w, "class", "form-group mt-3"), k(U, "class", "form-group"), k(D, "class", "form-group"), k(E, "class", "btn btn-primary"), k(j, "class", "my-4"), k(B, "type", "submit"), k(B, "class", "btn btn-success btn-lg"), k(i, "class", "form-group"), k(s, "class", "svelte-1lxf9ux"), k(a, "class", "svelte-1lxf9ux"), k(l, "class", "container-fluid"), H = [O(E, "click", e.addFile), O(s, "submit", e.submitForm)]
            },
            m(e, n) {
                h(e, t, n), te(P, t, null), h(e, r, n), h(e, l, n), g(l, a), R && R.m(a, null), g(a, o), g(a, s), g(s, i), g(i, c), g(c, d), g(c, u), g(c, p), g(p, m), g(p, f), g(p, $), g(i, _), g(i, w), g(i, A), g(i, U), g(i, V), g(i, D), g(i, T), g(i, N), g(i, F);
                for (let e = 0; e < Q.length; e += 1) Q[e].m(i, null);
                g(i, S), g(i, E), g(i, L), g(i, j), g(i, I), g(i, B), M = !0
            },
            p(e, t) {
                const r = {};
                if (e.apiCall && (r.apiCall = t.apiCall), P.$set(r), t.error || t.success ? R ? (R.p(e, t), Y(R, 1)) : ((R = De(t)).c(), Y(R, 1), R.m(a, o)) : R && (W(), z(R, 1, 1, () => {
                        R = null
                    }), G()), (!M || e.user && y !== (y = t.user.name)) && ($.value = y), e.deleteFileInput || e.files || e.fileDescriptions) {
                    let r;
                    for (q = t.fileDescriptions, r = 0; r < q.length; r += 1) {
                        const l = Ve(t, q, r);
                        Q[r] ? (Q[r].p(e, l), Y(Q[r], 1)) : (Q[r] = Te(l), Q[r].c(), Y(Q[r], 1), Q[r].m(i, S))
                    }
                    for (W(), r = q.length; r < Q.length; r += 1) J(r);
                    G()
                }
            },
            i(e) {
                if (!M) {
                    Y(P.$$.fragment, e), Y(R);
                    for (let e = 0; e < q.length; e += 1) Y(Q[e]);
                    M = !0
                }
            },
            o(e) {
                z(P.$$.fragment, e), z(R), Q = Q.filter(Boolean);
                for (let e = 0; e < Q.length; e += 1) z(Q[e]);
                M = !1
            },
            d(e) {
                e && b(t), re(P), e && b(r), e && b(l), R && R.d(), v(Q, e), n(H)
            }
        }
    }

    function Fe(e, t, r) {
        let {
            apiCall: l
        } = t, {
            user: n
        } = t, a = [], o = [], s = !1, i = !1, c = "";
        return e.$set = e => {
            "apiCall" in e && r("apiCall", l = e.apiCall), "user" in e && r("user", n = e.user)
        }, {
            apiCall: l,
            user: n,
            files: a,
            fileDescriptions: o,
            success: s,
            error: i,
            alertText: c,
            addFile: function (e) {
                e.preventDefault(), console.log("add file"), r("fileDescriptions", o = [...o, ""]), console.log(o), console.log(a)
            },
            submitForm: async function (e) {
                e.preventDefault();
                const t = e.currentTarget;
                console.log("form", t);
                const n = new FormData(t);
                a.map(e => n.append("files", e)), n.append("fileDescriptions", o);
                for (let [e, t] of n.entries()) console.log(e, t);
                (await l("/makeOrder", n, "multipart/form-data")).error ? (r("error", i = !0), r("alertText", c = "Kunde inte skapa beställning, försök igen senare")) : (r("success", s = !0), r("alertText", c = "Beställning skapad"), t.reset(), r("files", a = []), r("fileDescriptions", o = []))
            },
            deleteFileInput: function (e) {
                console.log("fileDesc1", o), r("files", a = a.filter((t, r) => r !== e)), r("fileDescriptions", o = o.filter((t, r) => r !== e)), console.log("fileDesc", o)
            }
        }
    }
    class Se extends ae {
        constructor(e) {
            super(), ne(this, e, Fe, Ne, o, {
                apiCall: 0,
                user: 0
            })
        }
    }

    function Ee(e, t, r) {
        const l = Object.create(e);
        return l.file = t[r], l
    }

    function Le(e) {
        let t, r, l, n, a, o, s, i = e.file.originalName + "",
            c = e.file.description + "";
        return {
            c() {
                t = C("li"), r = C("a"), l = $(i), a = x(), o = C("li"), s = $(c), k(r, "href", n = e.file.url), k(t, "class", "list-group-item"), A(t, "border", "none"), k(o, "class", "list-group-item")
            },
            m(e, n) {
                h(e, t, n), g(t, r), g(r, l), h(e, a, n), h(e, o, n), g(o, s)
            },
            p(e, t) {
                e.order && i !== (i = t.file.originalName + "") && _(l, i), e.order && n !== (n = t.file.url) && k(r, "href", n), e.order && c !== (c = t.file.description + "") && _(s, c)
            },
            d(e) {
                e && b(t), e && b(a), e && b(o)
            }
        }
    }

    function je(e) {
        let t, r, l, a, o, s, i, c, d, u, p, m, f, y, A, V, D, T, N, F, S, E, L, j, I, B, M, H, R, q, Q, J, K, W, G, Y, z, X, ee, te, re, le, ne, ae, oe, ie, ce, de, ue, pe, me, fe, ge, he, be, ve, Ce, $e, xe, ye, Oe, ke, _e, we, Ae, Ue, Ve, De, Te, Ne, Fe, Se, je, Ie, Be, Me, He, Pe, Re, qe, Qe, Je, Ke, We, Ge, Ye, ze, Xe, Ze, et, tt, rt, lt, nt, at, ot, st, it, ct, dt, ut, pt, mt, ft, gt, ht, bt = e.order.productNumber + "",
            vt = e.order.productName + "",
            Ct = new Date(e.order.date).toDateString() + "",
            $t = e.order.customer.name + "",
            xt = e.order.customer.email + "",
            yt = e.order.productDescription + "",
            Ot = e.order.wishes + "",
            kt = e.order.files,
            _t = [];
        for (let t = 0; t < kt.length; t += 1) _t[t] = Le(Ee(e, kt, t));
        return {
            c() {
                t = C("div"), r = C("div"), l = C("div"), a = C("div"), (o = C("div")).textContent = "Orderdetaljer", s = x(), i = C("ul"), c = C("li"), d = $("Ordernummer: "), u = $(bt), p = x(), m = C("li"), f = $("Namn: "), y = $(vt), A = x(), V = C("li"), D = $("Datum: "), T = $(Ct), N = x(), F = C("li"), S = C("div"), E = C("input"), j = x(), (I = C("label")).textContent = "Tillverkning", B = x(), M = C("li"), H = C("div"), R = C("input"), Q = x(), (J = C("label")).textContent = "Tillverkningsunderlag", K = x(), W = C("li"), G = C("div"), Y = C("input"), X = x(), (ee = C("label")).textContent = "Beräkning", te = x(), re = C("div"), le = C("div"), (ne = C("div")).textContent = "Beställare", ae = x(), oe = C("ul"), ie = C("li"), ce = $("Namn: "), de = $($t), ue = x(), pe = C("li"), me = $("Email:\r\n            "), fe = C("a"), ge = $(xt), be = x(), ve = C("div"), Ce = C("div"), ($e = C("div")).textContent = "Ansvarig", xe = x(), ye = C("ul"), Oe = C("li"), ke = $("Namn:\r\n            "), _e = C("input"), we = x(), Ae = C("li"), Ue = $("Email:\r\n            "), Ve = C("input"), De = x(), Te = C("li"), Ne = $("Status:\r\n            "), Fe = C("select"), (Se = C("option")).textContent = "Ej påbörjad", (je = C("option")).textContent = "Påbörjad", (Ie = C("option")).textContent = "Avslutad", Be = x(), Me = C("div"), He = C("div"), (Pe = C("div")).textContent = "Produkt beskrivning", Re = x(), qe = C("div"), Qe = $(yt), Je = x(), Ke = C("div"), We = C("div"), (Ge = C("div")).textContent = "Önskemål", Ye = x(), ze = C("div"), Xe = $(Ot), Ze = x(), et = C("div"), tt = C("div"), (rt = C("div")).textContent = "Filer", lt = x(), nt = C("ul");
                for (let e = 0; e < _t.length; e += 1) _t[e].c();
                at = x(), ot = C("div"), st = C("div"), (it = C("button")).textContent = "Radera beställningar", ct = x(), dt = C("div"), ut = x(), pt = C("div"), (mt = C("button")).textContent = "Spara ändringar", k(o, "class", "card-header"), k(c, "class", "list-group-item"), k(m, "class", "list-group-item"), k(V, "class", "list-group-item"), k(E, "type", "checkbox"), k(E, "class", "custom-control-input"), E.checked = L = e.order.missionType.production, E.disabled = !0, k(I, "class", "custom-control-label"), k(S, "class", "custom-control custom-checkbox"), k(F, "class", "list-group-item"), k(R, "type", "checkbox"), k(R, "class", "custom-control-input"), R.checked = q = e.order.missionType.productionDocumentation, R.disabled = !0, k(J, "class", "custom-control-label"), k(H, "class", "custom-control custom-checkbox"), k(M, "class", "list-group-item"), k(Y, "type", "checkbox"), k(Y, "class", "custom-control-input"), Y.checked = z = e.order.missionType.calculation, Y.disabled = !0, k(ee, "class", "custom-control-label"), k(G, "class", "custom-control custom-checkbox"), k(W, "class", "list-group-item"), k(i, "class", "list-group list-group-flush"), k(a, "class", "card h-100"), k(l, "class", "col mb-4"), k(ne, "class", "card-header"), k(ie, "class", "list-group-item"), k(fe, "href", he = "mailto:" + e.order.customer.email), k(pe, "class", "list-group-item"), k(oe, "class", "list-group list-group-flush"), k(le, "class", "card h-100"), k(re, "class", "col mb-4 "), k($e, "class", "card-header"), k(_e, "type", "text"), k(_e, "class", "form-control "), k(Oe, "class", "list-group-item"), k(Ve, "type", "email"), k(Ve, "class", "form-control"), k(Ve, "aria-describedby", "emailHelp"), k(Ae, "class", "list-group-item"), Se.__value = "Ej Påbörjad", Se.value = Se.__value, je.__value = "Påbörjad", je.value = je.__value, Ie.__value = "Avslutad", Ie.value = Ie.__value, k(Fe, "class", "form-control"), k(Fe, "id", "exampleFormControlSelect2"), void 0 === e.order.status && P(() => e.select_change_handler.call(Fe)), k(Te, "class", "list-group-item"), k(ye, "class", "list-group list-group-flush"), k(Ce, "class", "card h-100"), k(ve, "class", "col mb-4"), k(Pe, "class", "card-header"), k(qe, "class", "card-body"), k(He, "class", "card h-100"), k(Me, "class", "col mb-4"), k(Ge, "class", "card-header"), k(ze, "class", "card-body"), k(We, "class", "card h-100"), k(Ke, "class", "col mb-4"), k(rt, "class", "card-header"), k(nt, "class", "list-group list-group-flush"), k(tt, "class", "card h-100"), k(et, "class", "col mb-4"), k(r, "class", "row row-cols-1 row-cols-md-2 row-cols-lg-3"), k(it, "class", "btn btn-lg btn-danger"), k(st, "class", "col "), k(dt, "class", "col"), k(mt, "class", "btn btn-lg btn-success"), k(pt, "class", "col "), k(ot, "class", "row"), k(t, "class", "container-fluid text-left"), ht = [O(_e, "input", e.input3_input_handler), O(Ve, "input", e.input4_input_handler), O(Fe, "change", e.select_change_handler), O(it, "click", e.click_handler), O(mt, "click", e.saveChanges)]
            },
            m(n, b) {
                h(n, t, b), g(t, r), g(r, l), g(l, a), g(a, o), g(a, s), g(a, i), g(i, c), g(c, d), g(c, u), g(i, p), g(i, m), g(m, f), g(m, y), g(i, A), g(i, V), g(V, D), g(V, T), g(i, N), g(i, F), g(F, S), g(S, E), g(S, j), g(S, I), g(i, B), g(i, M), g(M, H), g(H, R), g(H, Q), g(H, J), g(i, K), g(i, W), g(W, G), g(G, Y), g(G, X), g(G, ee), g(r, te), g(r, re), g(re, le), g(le, ne), g(le, ae), g(le, oe), g(oe, ie), g(ie, ce), g(ie, de), g(oe, ue), g(oe, pe), g(pe, me), g(pe, fe), g(fe, ge), g(r, be), g(r, ve), g(ve, Ce), g(Ce, $e), g(Ce, xe), g(Ce, ye), g(ye, Oe), g(Oe, ke), g(Oe, _e), w(_e, e.order.responsible.name), g(ye, we), g(ye, Ae), g(Ae, Ue), g(Ae, Ve), w(Ve, e.order.responsible.email), g(ye, De), g(ye, Te), g(Te, Ne), g(Te, Fe), g(Fe, Se), g(Fe, je), g(Fe, Ie), U(Fe, e.order.status), g(r, Be), g(r, Me), g(Me, He), g(He, Pe), g(He, Re), g(He, qe), g(qe, Qe), g(r, Je), g(r, Ke), g(Ke, We), g(We, Ge), g(We, Ye), g(We, ze), g(ze, Xe), g(r, Ze), g(r, et), g(et, tt), g(tt, rt), g(tt, lt), g(tt, nt);
                for (let e = 0; e < _t.length; e += 1) _t[e].m(nt, null);
                g(t, at), g(t, ot), g(ot, st), g(st, it), g(ot, ct), g(ot, dt), g(ot, ut), g(ot, pt), g(pt, mt), gt = !0
            },
            p(e, t) {
                if (gt && !e.order || bt === (bt = t.order.productNumber + "") || _(u, bt), gt && !e.order || vt === (vt = t.order.productName + "") || _(y, vt), gt && !e.order || Ct === (Ct = new Date(t.order.date).toDateString() + "") || _(T, Ct), (!gt || e.order && L !== (L = t.order.missionType.production)) && (E.checked = L), (!gt || e.order && q !== (q = t.order.missionType.productionDocumentation)) && (R.checked = q), (!gt || e.order && z !== (z = t.order.missionType.calculation)) && (Y.checked = z), gt && !e.order || $t === ($t = t.order.customer.name + "") || _(de, $t), gt && !e.order || xt === (xt = t.order.customer.email + "") || _(ge, xt), (!gt || e.order && he !== (he = "mailto:" + t.order.customer.email)) && k(fe, "href", he), e.order && _e.value !== t.order.responsible.name && w(_e, t.order.responsible.name), e.order && Ve.value !== t.order.responsible.email && w(Ve, t.order.responsible.email), e.order && U(Fe, t.order.status), gt && !e.order || yt === (yt = t.order.productDescription + "") || _(Qe, yt), gt && !e.order || Ot === (Ot = t.order.wishes + "") || _(Xe, Ot), e.order) {
                    let r;
                    for (kt = t.order.files, r = 0; r < kt.length; r += 1) {
                        const l = Ee(t, kt, r);
                        _t[r] ? _t[r].p(e, l) : (_t[r] = Le(l), _t[r].c(), _t[r].m(nt, null))
                    }
                    for (; r < _t.length; r += 1) _t[r].d(1);
                    _t.length = kt.length
                }
            },
            i(e) {
                gt || (P(() => {
                    ft || (ft = Z(t, se, {}, !0)), ft.run(1)
                }), gt = !0)
            },
            o(e) {
                ft || (ft = Z(t, se, {}, !1)), ft.run(0), gt = !1
            },
            d(e) {
                e && b(t), v(_t, e), e && ft && ft.end(), n(ht)
            }
        }
    }

    function Ie(e, t, r) {
        let {
            order: l
        } = t, {
            toggleExpand: n
        } = t, {
            deleteOrder: a
        } = t, {
            apiCall: o
        } = t;
        return e.$set = e => {
            "order" in e && r("order", l = e.order), "toggleExpand" in e && r("toggleExpand", n = e.toggleExpand), "deleteOrder" in e && r("deleteOrder", a = e.deleteOrder), "apiCall" in e && r("apiCall", o = e.apiCall)
        }, {
            order: l,
            toggleExpand: n,
            deleteOrder: a,
            apiCall: o,
            saveChanges: async function () {
                try {
                    (await o("/updateOrder", JSON.stringify({
                        id: l._id,
                        email: l.responsible.email,
                        name: l.responsible.name
                    }))).error ? alert("Ett fel uppstod, försök igen") : de.set("orders")
                } catch (e) {
                    console.log(e)
                }
            },
            input3_input_handler: function () {
                l.responsible.name = this.value, r("order", l)
            },
            input4_input_handler: function () {
                l.responsible.email = this.value, r("order", l)
            },
            select_change_handler: function () {
                l.status = function (e) {
                    const t = e.querySelector(":checked") || e.options[0];
                    return t && t.__value
                }(this), r("order", l)
            },
            click_handler: () => a(l._id)
        }
    }
    class Be extends ae {
        constructor(e) {
            super(), ne(this, e, Ie, je, o, {
                order: 0,
                toggleExpand: 0,
                deleteOrder: 0,
                apiCall: 0
            })
        }
    }

    function Me(t) {
        let r, l, a, o, s, i, c, d, u, p, m, f, v, y, w, A, U, V, D, T, N, F, S = t.order.productNumber + "",
            E = t.order.productName + "",
            L = t.order.customer.name + "",
            j = t.order.responsible.name + "",
            I = t.order.status + "",
            B = new Date(t.order.date).toDateString() + "";
        return {
            c() {
                r = C("tr"), l = C("th"), a = $(S), o = x(), s = C("td"), i = $(E), c = x(), d = C("td"), u = $(L), p = x(), m = C("td"), f = $(j), v = x(), y = C("td"), w = $(I), A = x(), U = C("td"), V = $(B), D = x(), T = C("td"), (N = C("button")).textContent = "Radera order", k(l, "class", "align-middle"), k(l, "scope", "row"), k(s, "class", "align-middle"), k(d, "class", "align-middle d-none d-sm-table-cell"), k(m, "class", "align-middle d-none d-md-table-cell"), k(y, "class", "align-middle"), k(U, "class", "align-middle d-none d-md-table-cell"), k(N, "class", "btn btn-danger float-right"), k(r, "class", "svelte-1n1kl2d"), F = [O(l, "click", t.expandOrder), O(s, "click", t.expandOrder), O(d, "click", t.expandOrder), O(m, "click", t.expandOrder), O(y, "click", t.expandOrder), O(U, "click", t.expandOrder), O(N, "click", t.click_handler)]
            },
            m(e, n) {
                h(e, r, n), g(r, l), g(l, a), g(r, o), g(r, s), g(s, i), g(r, c), g(r, d), g(d, u), g(r, p), g(r, m), g(m, f), g(r, v), g(r, y), g(y, w), g(r, A), g(r, U), g(U, V), g(r, D), g(r, T), g(T, N), t.tr_1_binding(r)
            },
            p(e, t) {
                e.order && S !== (S = t.order.productNumber + "") && _(a, S), e.order && E !== (E = t.order.productName + "") && _(i, E), e.order && L !== (L = t.order.customer.name + "") && _(u, L), e.order && j !== (j = t.order.responsible.name + "") && _(f, j), e.order && I !== (I = t.order.status + "") && _(w, I), e.order && B !== (B = new Date(t.order.date).toDateString() + "") && _(V, B)
            },
            i: e,
            o: e,
            d(e) {
                e && b(r), t.tr_1_binding(null), n(F)
            }
        }
    }

    function He(e) {
        let t, r, l;
        const n = new Be({
            props: {
                deleteOrder: e.deleteOrder,
                order: e.order,
                expandOrder: e.expandOrder,
                deleteOrder: e.deleteOrder
            }
        });
        return {
            c() {
                t = C("tr"), r = C("td"), ee(n.$$.fragment), k(r, "id", "expandedContent"), k(r, "colspan", "7"), A(t, "cursor", "initial"), k(t, "class", "svelte-1n1kl2d")
            },
            m(e, a) {
                h(e, t, a), g(t, r), te(n, r, null), l = !0
            },
            p(e, t) {
                const r = {};
                e.deleteOrder && (r.deleteOrder = t.deleteOrder), e.order && (r.order = t.order), e.deleteOrder && (r.deleteOrder = t.deleteOrder), n.$set(r)
            },
            i(e) {
                l || (Y(n.$$.fragment, e), l = !0)
            },
            o(e) {
                z(n.$$.fragment, e), l = !1
            },
            d(e) {
                e && b(t), re(n)
            }
        }
    }

    function Pe(e) {
        let t, r, l, n;
        const a = [He, Me],
            o = [];
        return t = 1, r = o[1] = a[1](e), {
            c() {
                r.c(), l = y()
            },
            m(e, t) {
                o[1].m(e, t), h(e, l, t), n = !0
            },
            p(e, t) {
                r.p(e, t)
            },
            i(e) {
                n || (Y(r), n = !0)
            },
            o(e) {
                z(r), n = !1
            },
            d(e) {
                o[1].d(e), e && b(l)
            }
        }
    }

    function Re(e, t, r) {
        let l, {
                deleteOrder: n
            } = t,
            {
                order: a
            } = t,
            {
                apiCall: o
            } = t,
            {
                getAllOrders: s
            } = t;
        return e.$set = e => {
            "deleteOrder" in e && r("deleteOrder", n = e.deleteOrder), "order" in e && r("order", a = e.order), "apiCall" in e && r("apiCall", o = e.apiCall), "getAllOrders" in e && r("getAllOrders", s = e.getAllOrders)
        }, {
            tr: l,
            deleteOrder: n,
            order: a,
            apiCall: o,
            getAllOrders: s,
            expandOrder: function () {
                ue.set({
                    order: a
                }), de.set("expandedOrder")
            },
            click_handler: () => n(a._id),
            tr_1_binding: function (e) {
                L[e ? "unshift" : "push"](() => {
                    r("tr", l = e)
                })
            }
        }
    }
    class qe extends ae {
        constructor(e) {
            super(), ne(this, e, Re, Pe, o, {
                deleteOrder: 0,
                order: 0,
                apiCall: 0,
                getAllOrders: 0
            })
        }
    }

    function Qe(t) {
        let r, l, a, o, s, i, c, d, u, p, m, f, v, y, _;
        return {
            c() {
                r = C("nav"), (l = C("span")).textContent = "Admin panel", a = x(), o = C("div"), s = C("div"), i = C("a"), c = $("Beställningar"), u = x(), p = C("a"), m = $("Hantera användare"), v = x(), (y = C("a")).textContent = "Logga ut", k(l, "class", "navbar-brand mb-0 h1"), k(i, "href", "#"), k(i, "class", d = "nav-item nav-link " + ("orders" === t.urlValue ? "active" : "")), k(p, "href", "#"), k(p, "class", f = "nav-item nav-link " + ("manageUsers" === t.urlValue ? "active" : "") + "\r\n        "), k(y, "class", "nav-item nav-link"), k(y, "href", "#"), k(s, "class", "navbar-nav"), k(o, "class", " navbar"), k(o, "id", "navbarNavAltMarkup"), k(r, "class", "navbar navbar-expand-lg sticky-top navbar-light bg-light"), _ = [O(i, "click", t.click_handler), O(p, "click", t.click_handler_1), O(y, "click", t.logOut)]
            },
            m(e, t) {
                h(e, r, t), g(r, l), g(r, a), g(r, o), g(o, s), g(s, i), g(i, c), g(s, u), g(s, p), g(p, m), g(s, v), g(s, y)
            },
            p(e, t) {
                e.urlValue && d !== (d = "nav-item nav-link " + ("orders" === t.urlValue ? "active" : "")) && k(i, "class", d), e.urlValue && f !== (f = "nav-item nav-link " + ("manageUsers" === t.urlValue ? "active" : "") + "\r\n        ") && k(p, "class", f)
            },
            i: e,
            o: e,
            d(e) {
                e && b(r), n(_)
            }
        }
    }

    function Je(e, t) {
        e && e.preventDefault(), de.set(t)
    }

    function Ke(e, t, r) {
        let l, {
            apiCall: n
        } = t;
        de.subscribe(e => r("urlValue", l = e));
        return e.$set = e => {
            "apiCall" in e && r("apiCall", n = e.apiCall)
        }, {
            apiCall: n,
            urlValue: l,
            logOut: async function (e) {
                try {
                    e && e.preventDefault(), (await n("/logOut")).error ? alert("Kunde inte logga ut") : de.set("authenticate")
                } catch (e) {
                    console.log(e)
                }
            },
            click_handler: e => Je(e, "orders"),
            click_handler_1: e => Je(e, "manageUsers")
        }
    }
    class We extends ae {
        constructor(e) {
            super(), ne(this, e, Ke, Qe, o, {
                apiCall: 0
            })
        }
    }

    function Ge(e, t, r) {
        const l = Object.create(e);
        return l.order = t[r], l
    }

    function Ye(e) {
        let t;
        const r = new qe({
            props: {
                apiCall: e.apiCall,
                getAllOrders: e.getAllOrders,
                order: e.order,
                deleteOrder: e.deleteOrder
            }
        });
        return {
            c() {
                ee(r.$$.fragment)
            },
            m(e, l) {
                te(r, e, l), t = !0
            },
            p(e, t) {
                const l = {};
                e.apiCall && (l.apiCall = t.apiCall), e.getAllOrders && (l.getAllOrders = t.getAllOrders), e.showOrders && (l.order = t.order), e.deleteOrder && (l.deleteOrder = t.deleteOrder), r.$set(l)
            },
            i(e) {
                t || (Y(r.$$.fragment, e), t = !0)
            },
            o(e) {
                z(r.$$.fragment, e), t = !1
            },
            d(e) {
                re(r, e)
            }
        }
    }

    function ze(e) {
        let t, r, l, a, o, s, i, c, d, u, p, m, f, $, y, _, A, U, V, D, T, N, F, S, E, L, j, I = e.showOrders,
            B = [];
        for (let t = 0; t < I.length; t += 1) B[t] = Ye(Ge(e, I, t));
        const M = e => z(B[e], 1, 1, () => {
            B[e] = null
        });
        return {
            c() {
                t = C("div"), r = C("table"), (l = C("caption")).textContent = "Klicka på en beställning för mer information", a = x(), o = C("thead"), s = C("tr"), (i = C("th")).textContent = "#", c = x(), (d = C("th")).textContent = "Namn", u = x(), (p = C("th")).textContent = "Beställare", m = x(), (f = C("th")).textContent = "Ansvarig", $ = x(), (y = C("th")).textContent = "Status", _ = x(), (A = C("th")).textContent = "Datum", U = x(), V = C("th"), D = C("form"), T = C("input"), N = x(), (F = C("button")).textContent = "Sök", S = x(), E = C("tbody");
                for (let e = 0; e < B.length; e += 1) B[e].c();
                k(i, "scope", "col"), k(d, "scope", "col"), k(p, "scope", "col "), k(p, "class", "d-none d-sm-table-cell"), k(f, "scope", "col "), k(f, "class", "d-none d-md-table-cell"), k(y, "scope", "col"), k(A, "scope", "col "), k(A, "class", "d-none d-md-table-cell"), k(T, "class", "form-control mr-sm-2 "), k(T, "type", "search"), k(T, "placeholder", "Sök"), k(T, "aria-label", "Sök"), k(F, "class", "btn btn-success bg my-2 my-sm-0"), k(F, "type", "submit"), k(D, "class", "form-inline my-2 my-lg-0 text-center justify-content-end"), k(V, "scope", "col"), k(o, "class", "thead-dark"), k(r, "class", "table table-striped table-hover table-bordered "), k(t, "class", "card m-sm-4 m-2 text-center"), j = [O(T, "input", e.input_input_handler), O(D, "submit", e.filter)]
            },
            m(n, b) {
                h(n, t, b), g(t, r), g(r, l), g(r, a), g(r, o), g(o, s), g(s, i), g(s, c), g(s, d), g(s, u), g(s, p), g(s, m), g(s, f), g(s, $), g(s, y), g(s, _), g(s, A), g(s, U), g(s, V), g(V, D), g(D, T), w(T, e.searchQuery), g(D, N), g(D, F), g(r, S), g(r, E);
                for (let e = 0; e < B.length; e += 1) B[e].m(E, null);
                L = !0
            },
            p(e, t) {
                if (e.searchQuery && w(T, t.searchQuery), e.apiCall || e.getAllOrders || e.showOrders || e.deleteOrder) {
                    let r;
                    for (I = t.showOrders, r = 0; r < I.length; r += 1) {
                        const l = Ge(t, I, r);
                        B[r] ? (B[r].p(e, l), Y(B[r], 1)) : (B[r] = Ye(l), B[r].c(), Y(B[r], 1), B[r].m(E, null))
                    }
                    for (W(), r = I.length; r < B.length; r += 1) M(r);
                    G()
                }
            },
            i(e) {
                if (!L) {
                    for (let e = 0; e < I.length; e += 1) Y(B[e]);
                    L = !0
                }
            },
            o(e) {
                B = B.filter(Boolean);
                for (let e = 0; e < B.length; e += 1) z(B[e]);
                L = !1
            },
            d(e) {
                e && b(t), v(B, e), n(j)
            }
        }
    }

    function Xe(e, t, r) {
        let l, {
                apiCall: n
            } = t,
            {
                getAllOrders: a
            } = t,
            {
                deleteOrder: o
            } = t,
            s = "",
            {
                allOrders: i = []
            } = t;

        function c(e) {
            return e.toLowerCase().search(s.toLocaleLowerCase()) > -1
        }
        return e.$set = e => {
            "apiCall" in e && r("apiCall", n = e.apiCall), "getAllOrders" in e && r("getAllOrders", a = e.getAllOrders), "deleteOrder" in e && r("deleteOrder", o = e.deleteOrder), "allOrders" in e && r("allOrders", i = e.allOrders)
        }, e.$$.update = (e = {
            allOrders: 1
        }) => {
            e.allOrders && r("showOrders", l = i)
        }, {
            apiCall: n,
            getAllOrders: a,
            deleteOrder: o,
            searchQuery: s,
            allOrders: i,
            filter: function (e) {
                e && e.preventDefault(), r("showOrders", l = i.filter(e => e.productNumber == s || c(e.productName) || c(e.responsible.name) || c(e.responsible.email) || c(e.customer.name) || c(e.customer.email) || c(e.status)))
            },
            showOrders: l,
            input_input_handler: function () {
                s = this.value, r("searchQuery", s)
            }
        }
    }
    class Ze extends ae {
        constructor(e) {
            super(), ne(this, e, Xe, ze, o, {
                apiCall: 0,
                getAllOrders: 0,
                deleteOrder: 0,
                allOrders: 0
            })
        }
    }

    function et(t) {
        let r, l;
        return {
            c() {
                (r = C("button")).textContent = "Gör admin", k(r, "type", "button"), k(r, "class", "btn btn-warning"), l = O(r, "click", t.toggleUserAdmin)
            },
            m(e, t) {
                h(e, r, t)
            },
            p: e,
            d(e) {
                e && b(r), l()
            }
        }
    }

    function tt(t) {
        let r, l;
        return {
            c() {
                (r = C("button")).textContent = "Ta bort admin", k(r, "type", "button"), k(r, "class", "btn btn-warning"), l = O(r, "click", t.toggleUserAdmin)
            },
            m(e, t) {
                h(e, r, t)
            },
            p: e,
            d(e) {
                e && b(r), l()
            }
        }
    }

    function rt(t) {
        let r, l, n, a, o, s, i, c, d, u, p, m, f = t.user.name + "",
            v = t.user.email + "";

        function y(e, t) {
            return t.user.admin ? tt : et
        }
        let w = y(0, t),
            A = w(t);
        return {
            c() {
                r = C("tr"), l = C("td"), n = $(f), a = x(), o = C("td"), s = $(v), i = x(), c = C("td"), A.c(), d = x(), u = C("td"), (p = C("button")).textContent = "Rader användare", k(p, "type", "button"), k(p, "class", "btn btn-danger"), m = O(p, "click", t.deleteUser)
            },
            m(e, t) {
                h(e, r, t), g(r, l), g(l, n), g(r, a), g(r, o), g(o, s), g(r, i), g(r, c), A.m(c, null), g(r, d), g(r, u), g(u, p)
            },
            p(e, t) {
                e.user && f !== (f = t.user.name + "") && _(n, f), e.user && v !== (v = t.user.email + "") && _(s, v), w === (w = y(0, t)) && A ? A.p(e, t) : (A.d(1), (A = w(t)) && (A.c(), A.m(c, null)))
            },
            i: e,
            o: e,
            d(e) {
                e && b(r), A.d(), m()
            }
        }
    }

    function lt(e, t, r) {
        let {
            user: l
        } = t, {
            getAllUsers: n
        } = t, {
            apiCall: a
        } = t;
        return e.$set = e => {
            "user" in e && r("user", l = e.user), "getAllUsers" in e && r("getAllUsers", n = e.getAllUsers), "apiCall" in e && r("apiCall", a = e.apiCall)
        }, {
            user: l,
            getAllUsers: n,
            apiCall: a,
            deleteUser: async function () {
                const e = l._id;
                try {
                    (await a("deleteUser", JSON.stringify({
                        id: e
                    }))).error ? alert("Kunde inte radera användare") : (alert("användare raderad"), n())
                } catch (e) {
                    console.log(e)
                }
            },
            toggleUserAdmin: async function () {
                const e = l._id;
                try {
                    (await a("/toggleUserAdmin", JSON.stringify({
                        id: e
                    }))).error ? alert("Ett fel uppstod försök igen senare") : n()
                } catch (e) {
                    console.log(e)
                }
            }
        }
    }
    class nt extends ae {
        constructor(e) {
            super(), ne(this, e, lt, rt, o, {
                user: 0,
                getAllUsers: 0,
                apiCall: 0
            })
        }
    }

    function at(e, t, r) {
        const l = Object.create(e);
        return l.user = t[r], l
    }

    function ot(e) {
        let t;
        const r = new nt({
            props: {
                getAllUsers: e.getAllUsers,
                apiCall: e.apiCall,
                user: e.user
            }
        });
        return {
            c() {
                ee(r.$$.fragment)
            },
            m(e, l) {
                te(r, e, l), t = !0
            },
            p(e, t) {
                const l = {};
                e.getAllUsers && (l.getAllUsers = t.getAllUsers), e.apiCall && (l.apiCall = t.apiCall), e.showUsers && (l.user = t.user), r.$set(l)
            },
            i(e) {
                t || (Y(r.$$.fragment, e), t = !0)
            },
            o(e) {
                z(r.$$.fragment, e), t = !1
            },
            d(e) {
                re(r, e)
            }
        }
    }

    function st(e) {
        let t, r, l, a, o, s, i, c, d, u, p, m, f, $, y, _, A, U, V, D, T = e.showUsers,
            N = [];
        for (let t = 0; t < T.length; t += 1) N[t] = ot(at(e, T, t));
        const F = e => z(N[e], 1, 1, () => {
            N[e] = null
        });
        return {
            c() {
                t = C("div"), r = C("div"), (l = C("div")).textContent = "Användare", a = x(), o = C("div"), s = C("table"), i = C("thead"), (c = C("th")).textContent = "Namn", d = x(), (u = C("th")).textContent = "Email", p = x(), m = C("th"), f = C("form"), $ = C("input"), y = x(), (_ = C("button")).textContent = "Sök", A = x(), U = C("tbody");
                for (let e = 0; e < N.length; e += 1) N[e].c();
                k(l, "class", "card-header"), k(c, "scope", "col"), k(u, "scope", "col "), k($, "class", "form-control mr-sm-2 "), k($, "type", "search"), k($, "placeholder", "Sök"), k($, "aria-label", "Sök"), k(_, "class", "btn btn-success bg my-2 my-sm-0"), k(_, "type", "submit"), k(f, "class", "form-inline my-2 my-lg-0 text-center justify-content-end"), k(m, "scope", "col"), k(m, "colspan", "2"), k(i, "class", "thead-dark"), k(s, "class", "table table-striped table-bordered table-hover"), k(o, "class", "table-responsive"), k(r, "class", "card"), k(t, "class", "container-fluid "), D = [O($, "input", e.input_input_handler), O(f, "submit", e.search)]
            },
            m(n, b) {
                h(n, t, b), g(t, r), g(r, l), g(r, a), g(r, o), g(o, s), g(s, i), g(i, c), g(i, d), g(i, u), g(i, p), g(i, m), g(m, f), g(f, $), w($, e.searchQuery), g(f, y), g(f, _), g(s, A), g(s, U);
                for (let e = 0; e < N.length; e += 1) N[e].m(U, null);
                V = !0
            },
            p(e, t) {
                if (e.searchQuery && w($, t.searchQuery), e.getAllUsers || e.apiCall || e.showUsers) {
                    let r;
                    for (T = t.showUsers, r = 0; r < T.length; r += 1) {
                        const l = at(t, T, r);
                        N[r] ? (N[r].p(e, l), Y(N[r], 1)) : (N[r] = ot(l), N[r].c(), Y(N[r], 1), N[r].m(U, null))
                    }
                    for (W(), r = T.length; r < N.length; r += 1) F(r);
                    G()
                }
            },
            i(e) {
                if (!V) {
                    for (let e = 0; e < T.length; e += 1) Y(N[e]);
                    V = !0
                }
            },
            o(e) {
                N = N.filter(Boolean);
                for (let e = 0; e < N.length; e += 1) z(N[e]);
                V = !1
            },
            d(e) {
                e && b(t), v(N, e), n(D)
            }
        }
    }

    function it(e, t, r) {
        let l, {
                apiCall: n
            } = t,
            a = "",
            {
                allUsers: o = []
            } = t,
            {
                getAllUsers: s
            } = t;

        function i(e) {
            return console.log(e, a), console.log(e.toLowerCase().search(a.toLocaleLowerCase()) > -1), e.toLowerCase().search(a.toLocaleLowerCase()) > -1
        }
        return e.$set = e => {
            "apiCall" in e && r("apiCall", n = e.apiCall), "allUsers" in e && r("allUsers", o = e.allUsers), "getAllUsers" in e && r("getAllUsers", s = e.getAllUsers)
        }, e.$$.update = (e = {
            allUsers: 1
        }) => {
            e.allUsers && r("showUsers", l = o)
        }, {
            apiCall: n,
            searchQuery: a,
            allUsers: o,
            getAllUsers: s,
            search: function (e) {
                e && e.preventDefault(), console.log(o), r("showUsers", l = o.filter(e => i(e.name) || i(e.email) || "admin" === a && e.admin))
            },
            showUsers: l,
            input_input_handler: function () {
                a = this.value, r("searchQuery", a)
            }
        }
    }
    class ct extends ae {
        constructor(e) {
            super(), ne(this, e, it, st, o, {
                apiCall: 0,
                allUsers: 0,
                getAllUsers: 0
            })
        }
    }

    function dt(e) {
        let t;
        const r = new ct({
            props: {
                apiCall: e.apiCall,
                getAllUsers: e.getAllUsers,
                allUsers: e.allUsers
            }
        });
        return {
            c() {
                ee(r.$$.fragment)
            },
            m(e, l) {
                te(r, e, l), t = !0
            },
            p(e, t) {
                const l = {};
                e.apiCall && (l.apiCall = t.apiCall), e.allUsers && (l.allUsers = t.allUsers), r.$set(l)
            },
            i(e) {
                t || (Y(r.$$.fragment, e), t = !0)
            },
            o(e) {
                z(r.$$.fragment, e), t = !1
            },
            d(e) {
                re(r, e)
            }
        }
    }

    function ut(e) {
        let t;
        const r = new Be({
            props: {
                order: e.paramsValue.order,
                apiCall: e.apiCall,
                deleteOrder: e.deleteOrder
            }
        });
        return {
            c() {
                ee(r.$$.fragment)
            },
            m(e, l) {
                te(r, e, l), t = !0
            },
            p(e, t) {
                const l = {};
                e.paramsValue && (l.order = t.paramsValue.order), e.apiCall && (l.apiCall = t.apiCall), r.$set(l)
            },
            i(e) {
                t || (Y(r.$$.fragment, e), t = !0)
            },
            o(e) {
                z(r.$$.fragment, e), t = !1
            },
            d(e) {
                re(r, e)
            }
        }
    }

    function pt(e) {
        let t;
        const r = new Ze({
            props: {
                apiCall: e.apiCall,
                getAllOrders: e.getAllOrders,
                allOrders: e.allOrders,
                deleteOrder: e.deleteOrder
            }
        });
        return {
            c() {
                ee(r.$$.fragment)
            },
            m(e, l) {
                te(r, e, l), t = !0
            },
            p(e, t) {
                const l = {};
                e.apiCall && (l.apiCall = t.apiCall), e.allOrders && (l.allOrders = t.allOrders), r.$set(l)
            },
            i(e) {
                t || (Y(r.$$.fragment, e), t = !0)
            },
            o(e) {
                z(r.$$.fragment, e), t = !1
            },
            d(e) {
                re(r, e)
            }
        }
    }

    function mt(e) {
        let t, r, l, n, a, o;
        const s = new We({
                props: {
                    apiCall: e.apiCall
                }
            }),
            i = [pt, ut, dt],
            c = [];

        function d(e, t) {
            return "orders" === t.urlValue ? 0 : "expandedOrder" === t.urlValue ? 1 : 2
        }
        return l = d(0, e), n = c[l] = i[l](e), {
            c() {
                t = C("header"), ee(s.$$.fragment), r = x(), n.c(), a = y()
            },
            m(e, n) {
                h(e, t, n), te(s, t, null), h(e, r, n), c[l].m(e, n), h(e, a, n), o = !0
            },
            p(e, t) {
                const r = {};
                e.apiCall && (r.apiCall = t.apiCall), s.$set(r);
                let o = l;
                (l = d(0, t)) === o ? c[l].p(e, t) : (W(), z(c[o], 1, 1, () => {
                    c[o] = null
                }), G(), (n = c[l]) || (n = c[l] = i[l](t)).c(), Y(n, 1), n.m(a.parentNode, a))
            },
            i(e) {
                o || (Y(s.$$.fragment, e), Y(n), o = !0)
            },
            o(e) {
                z(s.$$.fragment, e), z(n), o = !1
            },
            d(e) {
                e && b(t), re(s), e && b(r), c[l].d(e), e && b(a)
            }
        }
    }

    function ft(e, t, r) {
        let l, n, {
            apiCall: a
        } = t;
        ue.subscribe(e => r("paramsValue", n = e)), de.subscribe(e => r("urlValue", l = e));
        let o = [],
            s = [];
        async function i() {
            try {
                const e = await a("/getAllorders");
                e.error && console.log("error", e.message), console.log("call", e), r("allOrders", o = e.data), console.log("allOrders", o)
            } catch (e) {
                console.log(e)
            }
        }
        async function c() {
            try {
                const e = await a("/getAllUsers");
                console.log("call", e), e.error ? alert("Kunde inte hämta anvädare från servern") : r("allUsers", s = e.users)
            } catch (e) {
                console.log(e)
            }
        }
        return c(), i(), e.$set = e => {
            "apiCall" in e && r("apiCall", a = e.apiCall)
        }, {
            apiCall: a,
            urlValue: l,
            paramsValue: n,
            allOrders: o,
            allUsers: s,
            getAllOrders: i,
            getAllUsers: c,
            deleteOrder: async function (e) {
                try {
                    const t = await a("/deleteOrder", JSON.stringify({
                        id: e
                    }));
                    console.log(t), t.error || (console.log("success"), de.set("orders"), i())
                } catch (e) {
                    console.log(e)
                }
            }
        }
    }
    class gt extends ae {
        constructor(e) {
            super(), ne(this, e, ft, mt, o, {
                apiCall: 0
            })
        }
    }

    function ht(t) {
        let r, l, n, a, o, s, i, c, d, u, p, m, f, v, y, O, w, A, U = t.order.productNumber + "",
            V = t.order.productName + "",
            D = t.order.customer.name + "",
            T = t.order.responsible.name + "",
            N = t.order.status + "",
            F = new Date(t.order.date).toDateString() + "";
        return {
            c() {
                r = C("tr"), l = C("th"), n = $(U), a = x(), o = C("td"), s = $(V), i = x(), c = C("td"), d = $(D), u = x(), p = C("td"), m = $(T), f = x(), v = C("td"), y = $(N), O = x(), w = C("td"), A = $(F), k(l, "scope", "col")
            },
            m(e, t) {
                h(e, r, t), g(r, l), g(l, n), g(r, a), g(r, o), g(o, s), g(r, i), g(r, c), g(c, d), g(r, u), g(r, p), g(p, m), g(r, f), g(r, v), g(v, y), g(r, O), g(r, w), g(w, A)
            },
            p(e, t) {
                e.order && U !== (U = t.order.productNumber + "") && _(n, U), e.order && V !== (V = t.order.productName + "") && _(s, V), e.order && D !== (D = t.order.customer.name + "") && _(d, D), e.order && T !== (T = t.order.responsible.name + "") && _(m, T), e.order && N !== (N = t.order.status + "") && _(y, N), e.order && F !== (F = new Date(t.order.date).toDateString() + "") && _(A, F)
            },
            i: e,
            o: e,
            d(e) {
                e && b(r)
            }
        }
    }

    function bt(e, t, r) {
        let {
            order: l
        } = t;
        return e.$set = e => {
            "order" in e && r("order", l = e.order)
        }, {
            order: l
        }
    }
    class vt extends ae {
        constructor(e) {
            super(), ne(this, e, bt, ht, o, {
                order: 0
            })
        }
    }

    function Ct(e, t, r) {
        const l = Object.create(e);
        return l.order = t[r], l
    }

    function $t(e) {
        let t;
        const r = new vt({
            props: {
                order: e.order
            }
        });
        return {
            c() {
                ee(r.$$.fragment)
            },
            m(e, l) {
                te(r, e, l), t = !0
            },
            p(e, t) {
                const l = {};
                e.orders && (l.order = t.order), r.$set(l)
            },
            i(e) {
                t || (Y(r.$$.fragment, e), t = !0)
            },
            o(e) {
                z(r.$$.fragment, e), t = !1
            },
            d(e) {
                re(r, e)
            }
        }
    }

    function xt(e) {
        let t, r, l, n, a, o, s, i;
        const c = new Ue({
            props: {
                apiCall: e.apiCall
            }
        });
        let d = e.orders,
            u = [];
        for (let t = 0; t < d.length; t += 1) u[t] = $t(Ct(e, d, t));
        const p = e => z(u[e], 1, 1, () => {
            u[e] = null
        });
        return {
            c() {
                t = C("header"), ee(c.$$.fragment), r = x(), l = C("div"), n = C("table"), (a = C("thead")).innerHTML = '<tr><th scope="col">#</th> \n        <th scope="col">Namn</th> \n        <th scope="col " class="d-none d-sm-table-cell">Beställare</th> \n        <th scope="col " class="d-none d-md-table-cell">Ansvarig</th> \n        <th scope="col">Status</th> \n        <th scope="col " class="d-none d-md-table-cell">Datum</th></tr>', o = x(), s = C("tbody");
                for (let e = 0; e < u.length; e += 1) u[e].c();
                k(a, "class", "thead-dark"), k(n, "class", "table table-striped table-hover table-bordered "), k(l, "class", "card m-sm-4 m-2 text-center")
            },
            m(e, d) {
                h(e, t, d), te(c, t, null), h(e, r, d), h(e, l, d), g(l, n), g(n, a), g(n, o), g(n, s);
                for (let e = 0; e < u.length; e += 1) u[e].m(s, null);
                i = !0
            },
            p(e, t) {
                const r = {};
                if (e.apiCall && (r.apiCall = t.apiCall), c.$set(r), e.orders) {
                    let r;
                    for (d = t.orders, r = 0; r < d.length; r += 1) {
                        const l = Ct(t, d, r);
                        u[r] ? (u[r].p(e, l), Y(u[r], 1)) : (u[r] = $t(l), u[r].c(), Y(u[r], 1), u[r].m(s, null))
                    }
                    for (W(), r = d.length; r < u.length; r += 1) p(r);
                    G()
                }
            },
            i(e) {
                if (!i) {
                    Y(c.$$.fragment, e);
                    for (let e = 0; e < d.length; e += 1) Y(u[e]);
                    i = !0
                }
            },
            o(e) {
                z(c.$$.fragment, e), u = u.filter(Boolean);
                for (let e = 0; e < u.length; e += 1) z(u[e]);
                i = !1
            },
            d(e) {
                e && b(t), re(c), e && b(r), e && b(l), v(u, e)
            }
        }
    }

    function yt(e, t, r) {
        let {
            apiCall: l
        } = t, n = [];
        return async function () {
            try {
                const e = await l("/getMyOrders", "");
                console.log("call", e), e.error ? alert("Kunde inte hämta din beställningar") : r("orders", n = e.orders)
            } catch (e) {
                console.log(e)
            }
        }(), e.$set = e => {
            "apiCall" in e && r("apiCall", l = e.apiCall)
        }, {
            apiCall: l,
            orders: n
        }
    }
    class Ot extends ae {
        constructor(e) {
            super(), ne(this, e, yt, xt, o, {
                apiCall: 0
            })
        }
    }
    let kt = ce({});

    function _t(t) {
        let r;
        return {
            c() {
                r = $("Checking route")
            },
            m(e, t) {
                h(e, r, t)
            },
            p: e,
            i: e,
            o: e,
            d(e) {
                e && b(r)
            }
        }
    }

    function wt(t) {
        let r;
        const l = new Ot({
            props: {
                apiCall: Nt
            }
        });
        return {
            c() {
                ee(l.$$.fragment)
            },
            m(e, t) {
                te(l, e, t), r = !0
            },
            p: e,
            i(e) {
                r || (Y(l.$$.fragment, e), r = !0)
            },
            o(e) {
                z(l.$$.fragment, e), r = !1
            },
            d(e) {
                re(l, e)
            }
        }
    }

    function At(e) {
        let t;
        const r = new Be({
            props: {
                order: e.selectedOrderValue
            }
        });
        return {
            c() {
                ee(r.$$.fragment)
            },
            m(e, l) {
                te(r, e, l), t = !0
            },
            p(e, t) {
                const l = {};
                e.selectedOrderValue && (l.order = t.selectedOrderValue), r.$set(l)
            },
            i(e) {
                t || (Y(r.$$.fragment, e), t = !0)
            },
            o(e) {
                z(r.$$.fragment, e), t = !1
            },
            d(e) {
                re(r, e)
            }
        }
    }

    function Ut(e) {
        let t;
        const r = new Se({
            props: {
                user: e.userValue,
                apiCall: Nt
            }
        });
        return {
            c() {
                ee(r.$$.fragment)
            },
            m(e, l) {
                te(r, e, l), t = !0
            },
            p(e, t) {
                const l = {};
                e.userValue && (l.user = t.userValue), r.$set(l)
            },
            i(e) {
                t || (Y(r.$$.fragment, e), t = !0)
            },
            o(e) {
                z(r.$$.fragment, e), t = !1
            },
            d(e) {
                re(r, e)
            }
        }
    }

    function Vt(t) {
        let r;
        const l = new gt({
            props: {
                apiCall: Nt
            }
        });
        return {
            c() {
                ee(l.$$.fragment)
            },
            m(e, t) {
                te(l, e, t), r = !0
            },
            p: e,
            i(e) {
                r || (Y(l.$$.fragment, e), r = !0)
            },
            o(e) {
                z(l.$$.fragment, e), r = !1
            },
            d(e) {
                re(l, e)
            }
        }
    }

    function Dt(t) {
        let r;
        const l = new Ce({
            props: {
                apiCall: Nt
            }
        });
        return {
            c() {
                ee(l.$$.fragment)
            },
            m(e, t) {
                te(l, e, t), r = !0
            },
            p: e,
            i(e) {
                r || (Y(l.$$.fragment, e), r = !0)
            },
            o(e) {
                z(l.$$.fragment, e), r = !1
            },
            d(e) {
                re(l, e)
            }
        }
    }

    function Tt(e) {
        let t, r, l, n, a;
        const o = [Dt, Vt, Ut, At, wt, _t],
            s = [];

        function i(e, r) {
            return "authenticate" === r.urlValue ? 0 : "orders" === r.urlValue || "manageUsers" === r.urlValue || "expandedOrder" === r.urlValue ? 1 : "makeOrder" === r.urlValue ? 2 : ((null == t || e.urlValue) && (t = !("expandedOrder" !== r.urlValue.substring(0, 14))), t ? 3 : "myOrders" === r.urlValue ? 4 : 5)
        }
        return r = i(null, e), l = s[r] = o[r](e), {
            c() {
                l.c(), n = y()
            },
            m(e, t) {
                s[r].m(e, t), h(e, n, t), a = !0
            },
            p(e, t) {
                let a = r;
                (r = i(e, t)) === a ? s[r].p(e, t) : (W(), z(s[a], 1, 1, () => {
                    s[a] = null
                }), G(), (l = s[r]) || (l = s[r] = o[r](t)).c(), Y(l, 1), l.m(n.parentNode, n))
            },
            i(e) {
                a || (Y(l), a = !0)
            },
            o(e) {
                z(l), a = !1
            },
            d(e) {
                s[r].d(e), e && b(n)
            }
        }
    }

    function Nt(e, t, r, l) {
        const n = !("multipart/form-data" === r);
        return console.log(t), new Promise((r, a) => {
            const o = {
                method: "POST",
                mode: "cors",
                credentials: "include",
                body: t
            };
            n && (o.headers = {
                "Content-Type": "application/json"
            }), console.log(o), fetch(e, o).then(e => e.json()).then(e => {
                console.log("answer"), e.error ? l || "NoAuth" !== e.message ? r(e) : (console.log("Logged out"), alert("Du har blivit utloggad"), de.set("authenticate")) : (r(e), console.log(e))
            }).catch(e => a(e))
        })
    }

    function Ft(e, t, r) {
        let l, n, a;
        return kt.subscribe(e => r("selectedOrderValue", a = e)), de.subscribe(e => r("urlValue", l = e)), async function () {
            try {
                console.log("route user");
                const e = await Nt("/checkAccount", void 0, void 0, !0);
                console.log("user", e), r("userValue", n = e);
                const t = function (e) {
                    try {
                        return e.authenticated ? e.admin ? "orders" : "makeOrder" : "authenticate"
                    } catch (e) {
                        console.log(e)
                    }
                }(e);
                console.log(t), de.set(t)
            } catch (e) {
                console.log("err"), console.log(e)
            }
        }(), e.$$.update = (e = {
            urlValue: 1
        }) => {
            e.urlValue && console.log(l)
        }, {
            urlValue: l,
            userValue: n,
            selectedOrderValue: a
        }
    }
    return new class extends ae {
        constructor(e) {
            super(), ne(this, e, Ft, Tt, o, {})
        }
    }({
        target: document.body,
        props: {
            name: "world"
        }
    })
}();
//# sourceMappingURL=bundle.js.map