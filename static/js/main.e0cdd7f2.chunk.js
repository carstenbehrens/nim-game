(this["webpackJsonpnim-game"]=this["webpackJsonpnim-game"]||[]).push([[0],{15:function(e,n,t){e.exports=t(25)},25:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t.n(r),a=t(7),o=t.n(a),c=t(11),s=t(12),u=t(8),l=t(1),d=t(2);function b(){var e=Object(l.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\theight: 70%;\n\twidth: 90%;\n\n\t@media (max-width: 900px) {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t\tplace-items: center;\n  }\n  \n  @media (max-width: 600px) {\n    width: 100%;\n  }\n\n  @media (max-width: 400px) {\n    grid-template-columns: repeat(4, 1fr); \n  }\n"]);return b=function(){return e},e}function m(){var e=Object(l.a)(["\n\theight: 100vh;\n\twidth: 100vw;\n  background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898; \n  background-blend-mode: multiply,multiply;\n\tdisplay: flex;\n\talign-items: center;\n  flex-direction: column;\n  justify-content: space-between;\n"]);return m=function(){return e},e}function h(){var e=Object(l.a)(["\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  body {\n    height: 100vh;\n    width: 100vw;\n    overflow: hidden;\n  }\n"]);return h=function(){return e},e}var f=Object(d.a)(h()),g=d.b.div(m()),p=d.b.div(b());function v(){var e=Object(l.a)(["\n  height: 1.4rem;\n  width: 1rem;\n  border-radius: 40%;\n  background: rgb(89,21,12);\n  background: linear-gradient(126deg, rgba(89,21,12,1) 0%, rgba(238,141,101,1) 0%, rgba(193,104,66,1) 37%, rgba(213,49,28,1) 39%, rgba(71,19,12,1) 100%);\n  opacity: ",";\n"]);return v=function(){return e},e}function y(){var e=Object(l.a)(["\n\theight: 5rem;\n\twidth: 0.6rem;\n\tbackground: rgb(224,175,76);\n  background: linear-gradient(270deg, rgba(224,175,76,1) 0%, rgba(224,175,76,1) 50%, rgba(230,186,102,1) 50%, rgba(237,201,136,1) 100%);\n  cursor: pointer;\n  opacity: ",";\n"]);return y=function(){return e},e}function E(){var e=Object(l.a)(["\n\theight: 8rem;\n\twidth: 4rem;\n\tcursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.1) 100%);\n  border-radius: 3rem;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n  @media (min-width: 900px) {\n    &:hover {\n      box-shadow: 0px 3px 46px -17px rgba(0,0,0,0.3);\n      background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.3) 100%);\n    }\n  }\n  \n  @media (max-width: 600px) {\n    height: 90%;\n  }\n"]);return E=function(){return e},e}var w=d.b.div(E()),O=d.b.div(y(),(function(e){return e.visible?"100":"0"})),k=d.b.div(v(),(function(e){return e.visible?"100":"0"})),j=function(e){var n=e.visible,t=e.number,r=e.onClick;return i.a.createElement(w,{onClick:function(){return r(t)}},i.a.createElement(k,{visible:n}),i.a.createElement(O,{visible:n}))};function T(){var e=Object(l.a)(["\n\theight: 4rem;\n\twidth: 8rem;\n\tcolor: white;\n\tbackground: none;\n\tfont-weight: bold;\n\tcursor: pointer;\n\ttext-transform: uppercase;\n"]);return T=function(){return e},e}function P(){var e=Object(l.a)(["\n  height: 20%;\n\twidth: 100%;\n\tcolor: white;\n\tfont-size: 2rem;\n\tdisplay: flex;\n\talign-items: center;\n\tflex-direction: column;\n\tjustify-content: space-around;\n"]);return P=function(){return e},e}var S=d.b.div(P()),x=d.b.button(T()),_=function(e){var n=e.isPlayer,t=e.handleFinishTurn,r=e.matches;return i.a.createElement(S,null,i.a.createElement(x,{onClick:function(){return t(r)}},"Finish Turn"),i.a.createElement("p",null,"Player: "),n?"User":"Computer")},C=function(e){return e.filter((function(e){return!0===e})).length},W=function(e){return C(e)===e.length},I=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:13,n=[],t=0;t<e;t++)n.push(!1);return n};function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function M(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(t,!0).forEach((function(n){Object(u.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var G=function(e,n){switch(n.type){case"SWITCH_PLAYER":return M({},e,{isPlayer:!e.isPlayer});case"SELECT_MATCH":var t=e.matches;return t[n.number]=!t[n.number],M({},e,{matches:t});case"SET_MATCHES":return M({},e,{matches:n.newMatchesState});case"REMOVE_SELECTED":return M({},e,{matches:e.matches.filter((function(e){return!1===e}))});case"SWITCH_IS_WAITING":return M({},e,{isWaiting:!e.isWaiting});case"SET_IS_GAME_OVER":return M({},e,{isGameOver:!0});case"RESET_GAME":return{isPlayer:!e.isPlayer,matches:Object(s.a)(I()),isWaiting:!1,isGameOver:!1};default:throw new Error}},H=function(){var e=Object(r.useReducer)(G,{isPlayer:!0,matches:I(),isWaiting:!1,isGameOver:!1}),n=Object(c.a)(e,2),t=n[0],a=n[1];Object(r.useEffect)((function(){if(t.matches.length<=1)a({type:"SET_IS_GAME_OVER"});else{if(!t.isPlayer&&!t.matches.includes(!0)&&!t.isWaiting){var e=function(e,n){for(var t=0;t<e;t++)n[t]=!n[t];return n}(2===(n=t.matches.length)?1:3===n?2:!!n%4?3:2,t.matches);a({type:"SET_MATCHES",newMatchesState:e}),a({type:"SWITCH_IS_WAITING"})}t.isPlayer||t.isWaiting||setTimeout((function(){s(t.matches),a({type:"SWITCH_IS_WAITING"})}),1e3)}var n}),[t.isPlayer,t.isWaiting,t.matches]),Object(r.useEffect)((function(){t.isGameOver&&(alert("GAME OVER: ".concat(t.isPlayer?"Computer":"Player"," Won.")),a({type:"RESET_GAME"}))}),[t.isGameOver,t.isPlayer]);var o=function(e){a({type:"SELECT_MATCH",number:e})},s=function(e){!function(e){var n=C(e);return n>0&&n<4&&!W(e)}(e)?alert("Please select more then 1 and less then 3 matches"):(a({type:"REMOVE_SELECTED"}),a({type:"SWITCH_PLAYER"}))};return i.a.createElement(g,null,i.a.createElement(f,null),i.a.createElement(p,null,t.matches.map((function(e,n){return i.a.createElement(j,{visible:!e,key:n,number:n,onClick:o})}))),i.a.createElement(_,{handleFinishTurn:s,isPlayer:t.isPlayer,matches:t.matches}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.e0cdd7f2.chunk.js.map