!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";function r(e){return new Promise((function(t,n){o(e,"load",(function(){t(e.response)})),o(e,"error",(function(e){n(e)}))}))}function o(e,t,n){e.addEventListener(t,(function t(){return e.removeEventListener(event,t),n.apply(void 0,arguments)}))}function a(e){return Object.keys(e).map((function(t){return[t,e[t]].join("=")})).join("&")}Object.defineProperty(t,"__esModule",{value:!0}),t.get=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=new XMLHttpRequest,i=r(o);return o.open("GET","".concat(e,"?").concat(a(t))),o.withCredentials=n.withCredentials||!0,o.responseType=n.responseType||"json",o.send(),i},t.post=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new XMLHttpRequest,c=r(i);return i.open("POST","".concat(e,"?").concat(a(t))),i.withCredentials=o.withCredentials||!0,i.responseType=o.responseType||"json",i.setRequestHeader("Content-Type",o.requestHeader||"application/x-www-form-urlencoded"),i.send(JSON.stringify(n)),c}},function(e,t,n){"use strict";n.r(t);var r=new URLSearchParams(window.location.search);function o(e){return r.get(e)}function a(e){return"complete"===document.readyState?i(e):document.addEventListener("DOMContentLoaded",(function(){return i(e)}))}function i(e){var t=document.createElement("script");t.type="text/javascript",t.src=e,document.body.appendChild(t)}var c=o("CSI"),u=o("PlayMode"),s=o("CurrencyCode"),d=o("GAMESELECTED"),f=o("ISID"),l=(o("PlayerID"),o("LNG")),p=o("IUA"),y=(o("baseUrl"),o("secureUrl")),v=o("BD"),b=n(0),w=("".concat(y,"/ScratchCards/sapi.aspx"),"".concat(y,"/api/v1"));function O(){}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e){var t=e.sessionId,n=e.gameId,r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({BD:v,GAMESELECTED:n,ISID:t},{CSI:c,PlayMode:u,LNG:l,CurrencyCode:s,IUA:p,rst:"j"});return Object(b.post)("".concat(w,"/getGameInitData"),r,{},{}).then(g)}function g(e){return 0===e.RESULT.CODE?e:Promise.reject(e.RESULT)}function h(){return P({sessionId:f,gameId:d})}function D(e){return window.EnvData=e.EnvData,window.EnvData.MDSURL="./",window.PlayerData=e.PlayerData,window.GameData=e.GameData,window.CardData=e.CardData,window.gameConfiguration=e.GameConfiguration,window.PJPData=e.PJPData,e}function S(e){return e}function C(e){var t=e.GameData.GMTCH;return a("./callback.js"),a("H_PIXI"===t?"./PixiHTML5ScriptsLauncher.js":"./GWTHTML5ScriptsLauncher.js"),e}function E(e){alert(JSON.stringify(e))}Promise.resolve().then(h).then(D).then(S).then(C).then(O).catch(E)}]);
