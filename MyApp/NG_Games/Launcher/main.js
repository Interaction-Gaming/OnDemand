!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";function r(e){return new Promise((function(t,n){o(e,"load",(function(){t(e.response)})),o(e,"error",(function(e){n(e)}))}))}function o(e,t,n){e.addEventListener(t,(function t(){return e.removeEventListener(event,t),n.apply(void 0,arguments)}))}function i(e){return Object.keys(e).map((function(t){return[t,e[t]].join("=")})).join("&")}Object.defineProperty(t,"__esModule",{value:!0}),t.get=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=new XMLHttpRequest,a=r(o);return o.open("GET","".concat(e,"?").concat(i(t))),o.withCredentials=n.withCredentials||!0,o.responseType=n.responseType||"json",o.send(),a},t.post=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=new XMLHttpRequest,c=r(a);return a.open("POST","".concat(e,"?").concat(i(t))),a.withCredentials=o.withCredentials||!0,a.responseType=o.responseType||"json",a.setRequestHeader("Content-Type",o.requestHeader||"application/x-www-form-urlencoded"),a.send(JSON.stringify(n)),c}},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"init",(function(){return S})),n.d(r,"injectScripts",(function(){return h}));var o={};n.r(o),n.d(o,"init",(function(){return C})),n.d(o,"injectScripts",(function(){return L}));var i=new URLSearchParams(window.location.search);function a(e){return i.get(e)}function c(e){return"complete"===document.readyState?u(e):document.addEventListener("DOMContentLoaded",(function(){return u(e)}))}function u(e){var t=document.createElement("script");t.type="text/javascript",t.src=e,document.body.appendChild(t)}var s=a("CSI"),d=a("PlayMode"),f=a("CurrencyCode"),p=a("GAMESELECTED"),l=a("ISID"),y=a("LNG"),v=a("IUA"),m=(a("baseUrl"),a("secureUrl")),j=a("BD"),b=n(0),w="".concat(m,"/api/v1");function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e){var t=e.sessionId,n=e.gameId,r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({BD:j,GAMESELECTED:n,ISID:t},{CSI:s,PlayMode:d,LNG:y,CurrencyCode:f,IUA:v,rst:"j"});return Object(b.get)("".concat(w,"/getGameInitData"),r,{}).then(D)}function D(e){return 0===e.RESULT.CODE?e:Promise.reject(e.RESULT)}function S(e){window.EnvData=e.EnvData;window.EnvData.MDSURL="./",window.PlayerData=e.PlayerData,window.GameData=e.GameData,window.CardData=e.CardData,window.gameConfiguration=e.GameConfiguration,window.PJPData=e.PJPData}function h(e){var t=e.GameData.GMTCH;c("./callback.js"),c("H_PIXI"===t?"./PixiHTML5ScriptsLauncher.js":"./GWTHTML5ScriptsLauncher.js")}function C(e){var t;e.remoteorigin=e.GameSystemURL.replace("/api/neoGames/createToken",""),delete e.GameSystemURL,e.url=e.GameURL,e.ada=e.ADA,delete e.GameURL,window.history.pushState({},"","?".concat((t=e,Object.keys(t).map((function(e){return[e,t[e]].join("=")})).join("&"))))}function L(e){c("./IWG/loader.js")}function E(e){switch(e){case"-":return r;case"H":return o}}function G(e){return{provider:E(e.GameProviderCode),gameData:e.GameProviderData}}function T(e){var t=e.provider,n=e.gameData;t.init(n),t.injectScripts(n)}function M(e){alert(JSON.stringify(e))}P({sessionId:l,gameId:p}).then(G).then(T).catch(M)}]);
