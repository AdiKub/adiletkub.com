(window.webpackJsonp = window.webpackJsonp || []).push([[0], { 11: function (e, a, t) { }, 26: function (e, a, t) { e.exports = t(43) }, 35: function (e, a, t) { }, 37: function (e, a, t) { }, 38: function (e, a, t) { }, 39: function (e, a, t) { }, 40: function (e, a, t) { }, 41: function (e, a, t) { }, 42: function (e, a, t) { }, 43: function (e, a, t) { "use strict"; t.r(a); var n = t(0), r = t.n(n), l = t(13), s = t.n(l), c = t(2), i = t(16), m = t(15), o = { show: !1, setExperiense: "future", resume: { experiense: {}, generalInfo: { EDUCATION: {}, TECHNICAL_SKILLS: {}, LANGUAGES: [], ADDITIONAL_EDUCATION: {}, CONTACTS: { email: "adiletkub@gmail.com", github: "github.com/AdiKub", phone_number: "+996 550 054450" } } } }, p = Object(m.b)(function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o, a = arguments.length > 1 ? arguments[1] : void 0; switch (a.type) { case "CHANGE_EXPERIENSE": return Object(i.a)({}, e, { setExperiense: a.title }); case "SHOW_ALL": return Object(i.a)({}, e, { show: a.title }); case "SET_RESUME": return Object(i.a)({}, e, { resume: a.title }); default: return e } }), u = t(9), E = t(1), d = (t(35), function () { return r.a.createElement("div", { className: "header" }, r.a.createElement("div", { className: "container" }, r.a.createElement("div", { className: "header-wrapper" }, r.a.createElement(u.b, { to: "/" }, r.a.createElement("div", { className: "header-title" }, r.a.createElement("div", { className: "header-title-logo" }, r.a.createElement("img", { className: "header-title-logo__img", src: "/images/logo.svg", alt: "logo" })), r.a.createElement("h1", { className: "header-title__text" }, "ADILET Kubatbek Uulu"))), r.a.createElement("ul", { className: "header-navs" }, r.a.createElement("li", null, r.a.createElement("a", { className: "header-navs__link header-navs__link_resume", href: "AdiletKub_CV_ENG.pdf", download: !0 }, "download the resume")), r.a.createElement(u.b, { to: "/about-me" }, r.a.createElement("li", null, r.a.createElement("span", { className: "header-navs__link" }, "about me"))), r.a.createElement(u.b, { to: "/contacts" }, r.a.createElement("li", null, r.a.createElement("span", { className: "header-navs__link" }, "contacts"))), r.a.createElement(u.b, { to: "/about-me" }, r.a.createElement("li", null, r.a.createElement("span", { className: "header-navs__link" }, "works"))))))) }), _ = (t(37), function () { var e = Object(c.c)(function (e) { return e.resume.generalInfo.CONTACTS }); return r.a.createElement("div", { className: "footer" }, r.a.createElement("div", { className: "container" }, r.a.createElement("div", { className: "footer-wrapper" }, r.a.createElement("ul", { className: "footer-contacts" }, Object.keys(e).map(function (a) { return r.a.createElement("li", { className: "footer-contacts__info", key: a }, e[a]) }))))) }), f = t(23), N = (t(38), function (e) { var a = e.experienseList, t = Object.keys(a).sort(function (e, t) { return a[t].id - a[e].id }), l = Object(c.c)(function (e) { return e.show }), s = Object(n.useState)("FRONTEND-DEV"), i = Object(f.a)(s, 2), m = i[0], o = i[1], p = Object(n.useState)(!1), u = Object(f.a)(p, 2), E = u[0], d = u[1], _ = Object(c.b)(), N = l ? [] : t; return Object(n.useEffect)(function () { _({ type: "SHOW_ALL", title: E }), _({ type: "CHANGE_EXPERIENSE", title: m }) }), r.a.createElement("div", { className: "navigator" }, r.a.createElement("span", { className: "navigator-title__text" }, "experience"), r.a.createElement("div", { className: "navigator-buttons" }, r.a.createElement("div", { onClick: function () { N.indexOf(m) > 0 ? o(N[N.indexOf(m) - 1]) : o(N[N.length - 1]) }, className: "navigator__arrow__up" }), r.a.createElement("div", { className: "navigator-wrapper" }, r.a.createElement("div", { id: "first", className: "navigator-radio" }, r.a.createElement("div", { onClick: function () { return o("future") }, className: "navigator-radio__back" }), "future" === m && r.a.createElement("div", { className: "navigator-radio__front" }, r.a.createElement("span", { className: "navigator-radio__front__text" }, m), r.a.createElement("div", { className: "navigator-radio__front__point" }, " "))), N.map(function (e) { return r.a.createElement("div", { key: e, className: "navigator-wrapper navigator-wrapper_dinamic" }, r.a.createElement("div", { className: "navigator-radio__line" }, " "), r.a.createElement("div", { className: "navigator-radio" }, r.a.createElement("div", { onClick: function (e) { return o(e.target.id) }, id: e, className: "navigator-radio__back" }), m === e && r.a.createElement("div", { className: "navigator-radio__front" }, r.a.createElement("span", { className: "navigator-radio__front__text" }, a[e].period), r.a.createElement("div", { className: "navigator-radio__front__point" }, " ")))) })), r.a.createElement("div", { onClick: function () { N.indexOf(m) < N.length - 1 ? o(N[N.indexOf(m) + 1]) : o(N[0]) }, className: "navigator__arrow__down" })), r.a.createElement("span", { onClick: function () { return d(!E) }, className: "navigator-change_text" }, E ? "hide all" : "show all")) }), v = (t(39), function (e) { var a = e.experienseList, t = Object(c.c)(function (e) { return e.setExperiense }), n = Object(c.c)(function (e) { return e.show }), l = a[t]; return !n && l ? r.a.createElement("div", { className: "experiense-display" }, r.a.createElement("div", { className: "experiense-display-content" }, r.a.createElement("p", { className: "experiense-display__position" }, "Position:", r.a.createElement("span", { className: "experiense-display__position__name" }, t)), r.a.createElement("p", { className: "experiense-display__position" }, "Place:", r.a.createElement("span", { className: "experiense-display__position__name" }, l.place)), r.a.createElement("p", { className: "experiense-display__position" }, "functions:", l.responsibillity.map(function (e) { return r.a.createElement("span", { key: e, className: "experiense-display__position__name" }, e) }))), r.a.createElement("div", { className: "experiense-display-images" }, r.a.createElement("img", { className: "experiense-display-images__image", src: "images/" + l.images, alt: l.images }))) : r.a.createElement("div", { className: "experiense-display" }, r.a.createElement("div", { className: "experiense-display-content" }, r.a.createElement("p", { className: "experiense-display__position" }, r.a.createElement("strong", null, "your company could be here")))) }), g = (t(40), function () { var e = Object(c.c)(function (e) { return e.resume.experiense }); return r.a.createElement("div", { className: "experiense" }, r.a.createElement(v, { experienseList: e }), r.a.createElement(N, { experienseList: e })) }), x = (t(41), function () { var e = Object(c.c)(function (e) { return e.resume.generalInfo }); return r.a.createElement("div", { className: "general-info" }, r.a.createElement("div", { className: "general-info-content" }, r.a.createElement("div", { className: "general-info-wrapper" }, r.a.createElement("h4", { className: "general-info-wrapper_title" }, " EDUCATION "), Object.keys(e.EDUCATION).map(function (a) { return r.a.createElement("span", { key: a }, e.EDUCATION[a]) })), r.a.createElement("div", { className: "general-info-wrapper" }, r.a.createElement("h4", { className: "general-info-wrapper_title" }, " TECHNICAL SKILLS "), Object.keys(e.TECHNICAL_SKILLS).map(function (a) { return r.a.createElement("div", { className: "general-info-wrapper_subtitle", key: a }, r.a.createElement("span", { className: "general-info_skill_name" }, " ", a, " "), r.a.createElement("br", null), e.TECHNICAL_SKILLS[a].map(function (e) { return r.a.createElement("span", { key: e }, " ", e + "  ") })) })), r.a.createElement("div", { className: "general-info-wrapper" }, r.a.createElement("h4", { className: "general-info-wrapper_title" }, "LANGUAGES"), e.LANGUAGES.map(function (e) { return r.a.createElement("span", { key: e, className: "general-info_text" }, " ", e, " ") })), r.a.createElement("div", { className: "general-info-wrapper" }, r.a.createElement("h4", { className: "general-info-wrapper_title" }, " ADDITIONAL EDUCATION "), Object.keys(e.ADDITIONAL_EDUCATION).map(function (a) { return r.a.createElement("span", { key: a }, e.ADDITIONAL_EDUCATION[a], " ") }))), r.a.createElement("div", { className: "general-info-image" }, r.a.createElement("img", { className: "general-info-image_user_background", src: "/images/me_background_img.png", alt: "user" }), r.a.createElement("img", { className: "general-info-image_user_img", src: "/images/me_img.png", alt: "user" }))) }), b = (t(42), function (e) { var a = Object(c.c)(function (e) { return e.resume.experiense }), t = Object(c.c)(function (e) { return e.show }), n = Object.keys(a).sort(function (e, t) { return a[t].id - a[e].id }), l = function (e) { return e % 2 === 0 }; return r.a.createElement(r.a.Fragment, null, t && n.map(function (e, t) { return r.a.createElement("div", { key: e, className: "full-experiense" }, r.a.createElement("div", { className: "container" }, r.a.createElement("div", { className: l(t) ? "full-experiense-wrapper" : "full-experiense-wrapper full-experiense-strip_revers" }, r.a.createElement("div", { className: l(t) ? "full-experiense-strip" : "full-experiense-strip full-experiense-strip_revers" }, e), r.a.createElement("div", { className: "full-experiense-content" }, r.a.createElement("div", { className: l(t) ? "full-experiense-content-box" : "full-experiense-content-box full-experiense-content-box_revers" }, r.a.createElement("div", { className: l(t) ? "full-experiense-content-display" : "full-experiense-content-display full-experiense-content-display_revers" }, r.a.createElement("p", { className: "full-experiense-content-display__position" }, "period:", r.a.createElement("span", { className: "full-experiense-content-display__position__name" }, a[e].period)), r.a.createElement("p", { className: "full-experiense-content-display__position" }, "Place:", r.a.createElement("span", { className: "full-experiense-content-display__position__name" }, a[e].place)), r.a.createElement("p", { className: "full-experiense-content-display__position" }, "responsibillity:", a[e].responsibillity.map(function (e) { return r.a.createElement("span", { key: e, className: "full-experiense-content-display__position__name" }, e) }))), r.a.createElement("div", { className: "full-experiense-content-display-images" }, r.a.createElement("img", { className: "full-experiense-content-display-images__image", src: "images/" + a[e].images, alt: e.images }))))))) })) }), y = function () { var e = Object(c.b)(); return Object(n.useEffect)(function () { window.firebase.database().ref().on("value", function (a, t) { t ? console.log(t) : e({ type: "SET_RESUME", title: a.val() }) }) }), r.a.createElement("div", { className: "details" }, r.a.createElement("div", { className: "container" }, r.a.createElement("div", { className: "details-wrapper" }, r.a.createElement(x, null), r.a.createElement(g, null)), r.a.createElement(b, null))) }, h = (t(11), function () { return r.a.createElement(n.Fragment, null, r.a.createElement(d, null), r.a.createElement(y, null), r.a.createElement(_, null)) }), O = function () { return r.a.createElement(n.Fragment, null, r.a.createElement(d, null), r.a.createElement("div", { className: "details" }, r.a.createElement("div", { className: "container" }, r.a.createElement("div", { style: { height: "100%", color: "#e6ab46", textTransform: "uppercase" } }, "Coming soon"))), r.a.createElement(_, null)) }, w = function () { return r.a.createElement(n.Fragment, null, r.a.createElement(d, null), r.a.createElement("div", { className: "details" }, r.a.createElement("div", { className: "container" }, r.a.createElement("div", { style: { height: "100%", color: "#e6ab46", textTransform: "uppercase" } }, "Coming soon"))), r.a.createElement(_, null)) }, k = function () { return r.a.createElement(n.Fragment, null, r.a.createElement(d, null), r.a.createElement("div", { className: "details" }, r.a.createElement("div", { className: "container" }, r.a.createElement("div", { style: { height: "100%", color: "#e6ab46", textTransform: "uppercase" } }, "Coming soon"))), r.a.createElement(_, null)) }; function A() { return r.a.createElement(u.a, null, r.a.createElement(E.a, { path: "/", exact: !0, component: h }), r.a.createElement(E.a, { path: "/about-me", exact: !0, component: O }), r.a.createElement(E.a, { path: "/works", exact: !0, component: w }), r.a.createElement(E.a, { path: "/contacts", exact: !0, component: k })) } s.a.render(r.a.createElement(c.a, { store: p }, r.a.createElement(A, null)), document.getElementById("root")) } }, [[26, 1, 2]]]);
//# sourceMappingURL=main.3a30247f.chunk.js.map