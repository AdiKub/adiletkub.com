(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,a,t){e.exports=t(31)},,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(4),l=t.n(i),s=t(1),c=t(6),o=t(5),m={show:!1,setExperiense:"future",resume:{experiense:{},generalInfo:{EDUCATION:{},TECHNICAL_SKILLS:{},LANGUAGES:[],ADDITIONAL_EDUCATION:{},CONTACTS:{email:"adiletkub@gmail.com",github:"github.com/AdiKub",phone_number:"+996 550 054450"}}}},u=Object(o.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CHANGE_EXPERIENSE":return Object(c.a)({},e,{setExperiense:a.title});case"SHOW_ALL":return Object(c.a)({},e,{show:a.title});case"SET_RESUME":return Object(c.a)({},e,{resume:a.title});default:return e}}),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var f=t(10),E=(t(23),function(e){var a=e.experienseList,t=Object.keys(a).sort(function(e,t){return a[t].id-a[e].id}),i=Object(s.c)(function(e){return e.show}),l=Object(n.useState)(!1),c=Object(f.a)(l,2),o=c[0],m=c[1],u=Object(n.useState)("FRONTEND-DEV"),p=Object(f.a)(u,2),d=p[0],E=p[1],_=Object(s.b)(),N=i?[]:t;return Object(n.useEffect)(function(){_({type:"SHOW_ALL",title:o}),_({type:"CHANGE_EXPERIENSE",title:d})}),r.a.createElement("div",{className:"navigator"},r.a.createElement("span",{className:"navigator-title__text"},"experience"),r.a.createElement("div",{className:"navigator-buttons"},r.a.createElement("button",{disabled:o,onClick:function(){N.indexOf(d)>0?E(N[N.indexOf(d)-1]):E(N[N.length-1])},className:"navigator__arrow__up"}),r.a.createElement("div",{className:"navigator-wrapper"},r.a.createElement("div",{id:"first",className:"navigator-radio"},r.a.createElement("div",{onClick:function(){return E("future")},className:"navigator-radio__back"}),"future"===d&&r.a.createElement("div",{className:"navigator-radio__front"},r.a.createElement("span",{className:"navigator-radio__front__text"},d),r.a.createElement("div",{className:"navigator-radio__front__point"}," "))),N.map(function(e){return r.a.createElement("div",{key:e,className:"navigator-wrapper navigator-wrapper_dinamic"},r.a.createElement("div",{className:"navigator-radio__line"}," "),r.a.createElement("div",{className:"navigator-radio"},r.a.createElement("button",{onClick:function(e){return E(e.target.id)},id:e,className:"navigator-radio__back"}),d===e&&r.a.createElement("div",{className:"navigator-radio__front"},r.a.createElement("span",{className:"navigator-radio__front__text"},a[e].period),r.a.createElement("div",{className:"navigator-radio__front__point"}," "))))})),r.a.createElement("button",{disabled:o,onClick:function(){N.indexOf(d)<N.length-1?E(N[N.indexOf(d)+1]):E(N[0])},className:"navigator__arrow__down"})),r.a.createElement("button",{onClick:function(){return m(!o),void E(o?"FRONTEND-DEV":"future")},className:"navigator-change_text"},o?"hide all":"show all"))}),_=(t(24),function(e){var a=e.experienseList,t=Object(s.c)(function(e){return e.setExperiense}),n=Object(s.c)(function(e){return e.show}),i=a[t];return!n&&i?r.a.createElement("div",{className:"experiense-display"},r.a.createElement("div",{className:"experiense-display-content"},r.a.createElement("p",{className:"experiense-display__position"},"Position:",r.a.createElement("span",{className:"experiense-display__position__name"},t)),r.a.createElement("p",{className:"experiense-display__position"},"Place:",r.a.createElement("span",{className:"experiense-display__position__name"},i.place)),r.a.createElement("p",{className:"experiense-display__position"},"functions:",i.responsibillity.map(function(e){return r.a.createElement("span",{key:e,className:"experiense-display__position__name"},e)}))),r.a.createElement("div",{className:"experiense-display-images"},r.a.createElement("img",{className:"experiense-display-images__image",src:"/adiletkub.com/images/"+i.images,alt:i.images}))):r.a.createElement("div",{className:"experiense-display"},r.a.createElement("div",{className:"experiense-display-content"},r.a.createElement("p",{className:"experiense-display__position"},r.a.createElement("strong",null,"your company could be here"))))}),N=(t(25),function(){var e=Object(s.c)(function(e){return e.resume.experiense});return r.a.createElement("div",{className:"experiense"},r.a.createElement(_,{experienseList:e}),r.a.createElement(E,{experienseList:e}))}),v=(t(26),function(){var e=Object(s.c)(function(e){return e.resume.generalInfo});return r.a.createElement("div",{className:"general-info"},r.a.createElement("div",{className:"general-info-content"},r.a.createElement("div",{className:"general-info-wrapper"},r.a.createElement("h4",{className:"general-info-wrapper_title"}," EDUCATION "),Object.keys(e.EDUCATION).map(function(a){return r.a.createElement("span",{key:a},e.EDUCATION[a])})),r.a.createElement("div",{className:"general-info-wrapper"},r.a.createElement("h4",{className:"general-info-wrapper_title"}," TECHNICAL SKILLS "),Object.keys(e.TECHNICAL_SKILLS).map(function(a){return r.a.createElement("div",{className:"general-info-wrapper_subtitle",key:a},r.a.createElement("span",{className:"general-info_skill_name"}," ",a," "),r.a.createElement("br",null),e.TECHNICAL_SKILLS[a].map(function(e){return r.a.createElement("span",{key:e}," ",e+"  ")}))})),r.a.createElement("div",{className:"general-info-wrapper"},r.a.createElement("h4",{className:"general-info-wrapper_title"},"LANGUAGES"),e.LANGUAGES.map(function(e){return r.a.createElement("span",{key:e,className:"general-info_text"}," ",e," ")})),r.a.createElement("div",{className:"general-info-wrapper"},r.a.createElement("h4",{className:"general-info-wrapper_title"}," ADDITIONAL EDUCATION "),Object.keys(e.ADDITIONAL_EDUCATION).map(function(a){return r.a.createElement("span",{key:a},e.ADDITIONAL_EDUCATION[a]," ")}))),r.a.createElement("div",{className:"general-info-image"},r.a.createElement("img",{className:"general-info-image_user_background",src:"/adiletkub.com/images/me_background.png",alt:"user"}),r.a.createElement("img",{className:"general-info-image_user_img",src:"/adiletkub.com/images/me.png",alt:"user"})))}),g=(t(27),function(e){var a=Object(s.c)(function(e){return e.resume.experiense}),t=Object(s.c)(function(e){return e.show}),n=Object.keys(a).sort(function(e,t){return a[t].id-a[e].id}),i=function(e){return e%2===0};return r.a.createElement(r.a.Fragment,null,t&&n.map(function(e,t){return r.a.createElement("div",{key:e,className:"full-experiense"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:i(t)?"full-experiense-wrapper":"full-experiense-wrapper full-experiense-strip_revers"},r.a.createElement("div",{className:i(t)?"full-experiense-strip":"full-experiense-strip full-experiense-strip_revers"},e),r.a.createElement("div",{className:"full-experiense-content"},r.a.createElement("div",{className:i(t)?"full-experiense-content-box":"full-experiense-content-box full-experiense-content-box_revers"},r.a.createElement("div",{className:i(t)?"full-experiense-content-display":"full-experiense-content-display full-experiense-content-display_revers"},r.a.createElement("p",{className:"full-experiense-content-display__position"},"period:",r.a.createElement("span",{className:"full-experiense-content-display__position__name"},a[e].period)),r.a.createElement("p",{className:"full-experiense-content-display__position"},"Place:",r.a.createElement("span",{className:"full-experiense-content-display__position__name"},a[e].place)),r.a.createElement("p",{className:"full-experiense-content-display__position"},"responsibillity:",a[e].responsibillity.map(function(e){return r.a.createElement("span",{key:e,className:"full-experiense-content-display__position__name"},e)}))),r.a.createElement("div",{className:"full-experiense-content-display-images"},r.a.createElement("img",{className:"full-experiense-content-display-images__image",src:"/adiletkub.com/images/"+a[e].images,alt:e.images})))))))}))}),b=function(){var e=Object(s.b)();return Object(n.useEffect)(function(){window.firebase.database().ref().on("value",function(a,t){t?console.log(t):e({type:"SET_RESUME",title:a.val()})})}),r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"details-wrapper"},r.a.createElement(v,null),r.a.createElement(N,null)),r.a.createElement(g,null)))},h=(t(28),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header-wrapper"},r.a.createElement("div",{className:"header-title"},r.a.createElement("div",{className:"header-title-logo"},r.a.createElement("img",{className:"header-title-logo__img",src:"/adiletkub.com/images/logo.svg",alt:"logo"})),r.a.createElement("h1",{className:"header-title__text"},"ADILET Kubatbek Uulu")),r.a.createElement("ul",{className:"header-navs"},r.a.createElement("li",null,r.a.createElement("a",{className:"header-navs__link header-navs__link_resume",href:"/adiletkub.comAdiletKub_CV_ENG.pdf",download:!0},"download the resume")),r.a.createElement("li",null,r.a.createElement("a",{href:"/",className:"header-navs__link"},"about me")),r.a.createElement("li",null,r.a.createElement("a",{href:"/",className:"header-navs__link"},"contacts")),r.a.createElement("li",null,r.a.createElement("a",{href:"/",className:"header-navs__link"},"works"))))))}),x=(t(29),function(){var e=Object(s.c)(function(e){return e.resume.generalInfo.CONTACTS});return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"footer-wrapper"},r.a.createElement("ul",{className:"footer-contacts"},Object.keys(e).map(function(a){return r.a.createElement("li",{className:"footer-contacts__info",key:a},e[a])})))))});t(30);l.a.render(r.a.createElement(s.a,{store:u},r.a.createElement(h,null),r.a.createElement(b,null),r.a.createElement(x,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/adiletkub.com",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("/adiletkub.com","/service-worker.js");p?(function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then(function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):d(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):d(a,e)})}}()}],[[14,1,2]]]);
//# sourceMappingURL=main.7bc5399e.chunk.js.map