!function(M){function t(t){for(var u,j,c=t[0],T=t[1],L=t[2],i=0,D=[];i<c.length;i++)j=c[i],Object.prototype.hasOwnProperty.call(N,j)&&N[j]&&D.push(N[j][0]),N[j]=0;for(u in T)Object.prototype.hasOwnProperty.call(T,u)&&(M[u]=T[u]);for(r&&r(t);D.length;)D.shift()();return n.push.apply(n,L||[]),e()}function e(){for(var M,t=0;t<n.length;t++){for(var e=n[t],u=!0,c=1;c<e.length;c++){var T=e[c];0!==N[T]&&(u=!1)}u&&(n.splice(t--,1),M=j(j.s=e[0]))}return M}var u={},N={1:0},n=[];function j(t){if(u[t])return u[t].exports;var e=u[t]={i:t,l:!1,exports:{}};return M[t].call(e.exports,e,e.exports,j),e.l=!0,e.exports}j.m=M,j.c=u,j.d=function(M,t,e){j.o(M,t)||Object.defineProperty(M,t,{enumerable:!0,get:e})},j.r=function(M){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(M,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(M,"__esModule",{value:!0})},j.t=function(M,t){if(1&t&&(M=j(M)),8&t)return M;if(4&t&&"object"==typeof M&&M&&M.__esModule)return M;var e=Object.create(null);if(j.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:M}),2&t&&"string"!=typeof M)for(var u in M)j.d(e,u,function(t){return M[t]}.bind(null,u));return e},j.n=function(M){var t=M&&M.__esModule?function(){return M.default}:function(){return M};return j.d(t,"a",t),t},j.o=function(M,t){return Object.prototype.hasOwnProperty.call(M,t)},j.p="";var c=window.webpackJsonp=window.webpackJsonp||[],T=c.push.bind(c);c.push=t,c=c.slice();for(var L=0;L<c.length;L++)t(c[L]);var r=T;n.push([636,0]),e()}({160:function(M,t,e){"use strict";M.exports=function(M){var t=[];return t.toString=function(){return this.map((function(t){var e=function(M,t){var e=M[1]||"",u=M[3];if(!u)return e;if(t&&"function"==typeof btoa){var N=(j=u,c=btoa(unescape(encodeURIComponent(JSON.stringify(j)))),T="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(T," */")),n=u.sources.map((function(M){return"/*# sourceURL=".concat(u.sourceRoot).concat(M," */")}));return[e].concat(n).concat([N]).join("\n")}var j,c,T;return[e].join("\n")}(t,M);return t[2]?"@media ".concat(t[2],"{").concat(e,"}"):e})).join("")},t.i=function(M,e){"string"==typeof M&&(M=[[null,M,""]]);for(var u={},N=0;N<this.length;N++){var n=this[N][0];null!=n&&(u[n]=!0)}for(var j=0;j<M.length;j++){var c=M[j];null!=c[0]&&u[c[0]]||(e&&!c[2]?c[2]=e:e&&(c[2]="(".concat(c[2],") and (").concat(e,")")),t.push(c))}},t}},161:function(M,t,e){"use strict";var u,N={},n=function(){return void 0===u&&(u=Boolean(window&&document&&document.all&&!window.atob)),u},j=function(){var M={};return function(t){if(void 0===M[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(M){e=null}M[t]=e}return M[t]}}();function c(M,t){for(var e=[],u={},N=0;N<M.length;N++){var n=M[N],j=t.base?n[0]+t.base:n[0],c={css:n[1],media:n[2],sourceMap:n[3]};u[j]?u[j].parts.push(c):e.push(u[j]={id:j,parts:[c]})}return e}function T(M,t){for(var e=0;e<M.length;e++){var u=M[e],n=N[u.id],j=0;if(n){for(n.refs++;j<n.parts.length;j++)n.parts[j](u.parts[j]);for(;j<u.parts.length;j++)n.parts.push(g(u.parts[j],t))}else{for(var c=[];j<u.parts.length;j++)c.push(g(u.parts[j],t));N[u.id]={id:u.id,refs:1,parts:c}}}}function L(M){var t=document.createElement("style");if(void 0===M.attributes.nonce){var u=e.nc;u&&(M.attributes.nonce=u)}if(Object.keys(M.attributes).forEach((function(e){t.setAttribute(e,M.attributes[e])})),"function"==typeof M.insert)M.insert(t);else{var N=j(M.insert||"head");if(!N)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");N.appendChild(t)}return t}var r,i=(r=[],function(M,t){return r[M]=t,r.filter(Boolean).join("\n")});function D(M,t,e,u){var N=e?"":u.css;if(M.styleSheet)M.styleSheet.cssText=i(t,N);else{var n=document.createTextNode(N),j=M.childNodes;j[t]&&M.removeChild(j[t]),j.length?M.insertBefore(n,j[t]):M.appendChild(n)}}function o(M,t,e){var u=e.css,N=e.media,n=e.sourceMap;if(N&&M.setAttribute("media",N),n&&btoa&&(u+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),M.styleSheet)M.styleSheet.cssText=u;else{for(;M.firstChild;)M.removeChild(M.firstChild);M.appendChild(document.createTextNode(u))}}var a=null,y=0;function g(M,t){var e,u,N;if(t.singleton){var n=y++;e=a||(a=L(t)),u=D.bind(null,e,n,!1),N=D.bind(null,e,n,!0)}else e=L(t),u=o.bind(null,e,t),N=function(){!function(M){if(null===M.parentNode)return!1;M.parentNode.removeChild(M)}(e)};return u(M),function(t){if(t){if(t.css===M.css&&t.media===M.media&&t.sourceMap===M.sourceMap)return;u(M=t)}else N()}}M.exports=function(M,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=n());var e=c(M,t);return T(e,t),function(M){for(var u=[],n=0;n<e.length;n++){var j=e[n],L=N[j.id];L&&(L.refs--,u.push(L))}M&&T(c(M,t),t);for(var r=0;r<u.length;r++){var i=u[r];if(0===i.refs){for(var D=0;D<i.parts.length;D++)i.parts[D]();delete N[i.id]}}}}},374:function(M,t){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAzNyIgaGVpZ2h0PSI1NzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTIzMS0zMTFoMjUwMFY4ODguMjIzSC0yMzF6Ii8+PGcgZmlsbD0iI0ZGRiI+PHBhdGggZD0iTTMzLjQ3OSA0Ni43NjJoLTIuMjE3djUwNC4yMjNIMTVWMjZoMjIuOTE0bDM3Ni4yMzMgNTAzLjQ4MWgyLjIxOFYyNmgxNi4yNjF2NTI0Ljk4NWgtMjMuNjUzTDMzLjQ4IDQ2Ljc2MnptMTMxOC42NjUgNTA0LjIyM2gtMjUuMTMyTDExMzAuMzk1IDI2aDE3Ljc0bDE5MC43MDQgNTEwLjE1NWgxLjQ3OEwxNTMzLjk3NyAyNmgxNy43NGwtMTk5LjU3MyA1MjQuOTg1aDB6bTU4OS44NTEtMTUwLjUyNUgxNjM4LjJsLTY0LjMwOCAxNTAuNTI1aC0xNy43NEwxNzgzLjA3NiAyNmgyMC42OTdsMjE4LjA1MyA1MjQuOTg1aC0xNy43NGwtNjIuMDktMTUwLjUyNXpNMTY1MCAzODcuMzdoMjc3Ljk3M0wxNzkxLjA5MyA1NSAxNjUwIDM4Ny4zNzF6IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMzAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxnIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0iTTEwNjkuMzM2IDE3OS4wMTVjNC43MzUtNi4xMTggNi4xODMtMTQuNzU0IDEuMzcyLTIyLjkxNGwtNC4yMjItNy4xNmMtNC44Mi04LjE3Ny0xMy4xNS0xMS4xNjgtMjAuODctMTAuMDc2bDE3LjI5NSA5LjYzNy0xMC4yNDggMTguMDMtMTguMDQ0IDEwLjQzLTQuMjIxLTcuMTYgMTguMDQ0LTEwLjQzaDIwLjg5NHYxOS42NDN6bS0yMy43MiAyNTkuNDA0YzcuNzIgMS4wOTIgMTYuMDUtMS45IDIwLjg3LTEwLjA3N2w0LjIyMi03LjE2YzQuODExLTguMTYgMy4zNjMtMTYuNzk1LTEuMzcyLTIyLjkxM3YxOS42NDNoLTIwLjg5NGwtMTguMDQ0LTEwLjQzIDQuMjItNy4xNiAxOC4wNDUgMTAuNDMgMTAuMjQ4IDE4LjAzLTE3LjI5NSA5LjYzN3pNODAxLjY4IDU0OC42NjZjMy4wODcgNi44MDMgOS43NDUgMTIuMDQ0IDE5LjAwMSAxMi4wNDRoOC4wOWM5LjI1NiAwIDE1LjkxNS01LjI0MSAxOS4wMDEtMTIuMDQ0bC0xNi44NDMgOS4zODUtMTAuMjQ4LTE4LjAyOXYtMjAuNjg4aDguMDl2MjAuNjg4bC0xMC4yNDggMTguMDMtMTYuODQzLTkuMzg2ek01ODAuMTE2IDM5OC4yNjljLTQuNzM0IDYuMTE4LTYuMTgzIDE0Ljc1My0xLjM3MSAyMi45MTNsNC4yMjEgNy4xNmM0LjgyMSA4LjE3NyAxMy4xNSAxMS4xNjkgMjAuODcgMTAuMDc3bC0xNy4yOTUtOS42MzggMTAuMjQ4LTE4LjAyOSAxOC4wNDUtMTAuNDMgNC4yMjEgNy4xNi0xOC4wNDQgMTAuNDNoLTIwLjg5NXYtMTkuNjQzem0yMy43Mi0yNTkuNDA0Yy03LjcyLTEuMDkyLTE2LjA0OSAxLjktMjAuODcgMTAuMDc2bC00LjIyMSA3LjE2Yy00LjgxMiA4LjE2LTMuMzYzIDE2Ljc5NiAxLjM3MSAyMi45MTR2LTE5LjY0M2gyMC44OTVsMTguMDQ0IDEwLjQzLTQuMjIxIDcuMTYtMTguMDQ1LTEwLjQzLTEwLjI0OC0xOC4wMyAxNy4yOTUtOS42Mzd6TTg0Ny43NzIgMjguNjE4Yy0zLjA4Ni02LjgwMy05Ljc0NS0xMi4wNDUtMTktMTIuMDQ1aC04LjA5Yy05LjI1NyAwLTE1LjkxNSA1LjI0Mi0xOS4wMDIgMTIuMDQ1bDE2Ljg0My05LjM4NiAxMC4yNDggMTguMDN2MjAuNjg3aC04LjA5VjM3LjI2MWwxMC4yNDgtMTguMDI5IDE2Ljg0MyA5LjM4NnpNODEwLjQzNCA0LjkxM2wtMjMxLjk4MiAxMjkuMjctNC4yMjIgMi4zNTJjLTYuNTc2IDMuNjY1LTEwLjY0NiAxMC41NTctMTAuNjQ2IDE4LjAzdjI2OC4xNTNjMCA3LjQ3MiA0LjA3IDE0LjM2NCAxMC42NDYgMTguMDI5bDQuMjIyIDIuMzUyIDIzMS45ODIgMTI5LjI3IDQuMDQ1IDIuMjU0YTIxLjA3NiAyMS4wNzYgMCAwMDIwLjQ5NSAwbDQuMDQ1LTIuMjU0TDEwNzEgNDQzLjFsNC4yMjEtMi4zNTJjNi41NzctMy42NjUgMTAuNjQ3LTEwLjU1NyAxMC42NDctMTguMDNWMTU0LjU2NWMwLTcuNDcyLTQuMDctMTQuMzY0LTEwLjY0Ny0xOC4wMjlsLTQuMjIxLTIuMzUyTDgzOS4wMTkgNC45MTNsLTQuMDQ1LTIuMjU0YTIxLjA3NiAyMS4wNzYgMCAwMC0yMC40OTUgMGwtNC4wNDUgMi4yNTR6bTE0LjI5MiAxNS43NzVsLTEwLjI0NyAxOC4wMyA0LjA0NCAyLjI1MyAyMzEuOTgyIDEyOS4yNyA0LjIyMiAyLjM1MyAxMC4yNDctMTguMDNoLTIwLjg5NFY0MjIuNzJoMjAuODk0bC0xMC4yNDctMTguMDMtNC4yMjIgMi4zNTMtMjMxLjk4MiAxMjkuMjctNC4wNDQgMi4yNTQgMTAuMjQ3IDE4LjAzIDEwLjI0OC0xOC4wMy00LjA0NS0yLjI1NC0yMzEuOTgyLTEyOS4yNy00LjIyMS0yLjM1Mi0xMC4yNDggMTguMDI5aDIwLjg5NVYxNTQuNTY0aC0yMC44OTVsMTAuMjQ4IDE4LjAzIDQuMjIxLTIuMzUzTDgzMC45MyA0MC45NzFsNC4wNDUtMi4yNTQtMTAuMjQ4LTE4LjAyOXoiLz48cGF0aCBkPSJNODIyLjIgNTU4LjI1OWw0Ljc0LjAwNGE4LjczNCA4LjczNCAwIDAwNy41MjUtNC4yNjJsMjI3LjE0Mi0zODMuMTE1YTguNTY0IDguNTY0IDAgMDAtMS4yNzUtMTAuMzkybC0zLjcyMy0zLjc4MWMtMi43NTYtMi44LTcuMDY4LTMuNDE1LTEwLjUxLTEuNUw1ODcuOSA0MTAuMDMzYy00Ljk5NSAyLjc3OC01Ljk3MSA5LjQ5LTEuOTcgMTMuNTVsMy43MjUgMy43NzhjNCA0LjA2IDEwLjgwMyAzLjI2IDEzLjczLTEuNjE3TDgzMi40ODMgNDQuMTk2aC0xNC45ODVsMjI5LjEgMzgxLjU1MmMyLjkzIDQuODc4IDkuNzM2IDUuNjc3IDEzLjczNiAxLjYxMmwzLjcyMi0zLjc4MmMzLjk4OS00LjA1MyAzLjAyNC0xMC43NDUtMS45NS0xMy41MzJMNTk5LjE3IDE1MC42OTJjLTMuNDQzLTEuOTI5LTcuNzY2LTEuMzItMTAuNTMgMS40ODJsLTMuNzI0IDMuNzc3YTguNTY0IDguNTY0IDAgMDAtMS4yNyAxMC40MTRMODE0LjcgNTU0LjAxNWE4LjczNCA4LjczNCAwIDAwNy41IDQuMjQ0em0uMDE0LTE3LjI1OWwtLjAwNiA4LjYzIDcuNTA2LTQuMzg2LTIzMS4wNTQtMzg3LjY1LTcuNTA3IDQuMzg2IDYuMjM3IDYuMDI4IDMuNzI1LTMuNzc4LTYuMjM3LTYuMDI4LTQuMjkzIDcuNTEgNDYyLjkzNCAyNTkuMzU1IDQuMjkzLTcuNTEtNi4yNDMtNi4wMjItMy43MjIgMy43ODIgNi4yNDMgNi4wMjIgNy40OTMtNC40MS0yMjkuMS0zODEuNTUyYy0zLjM3OS01LjYyNi0xMS42MDctNS42MjYtMTQuOTg2IDBMNTg4LjQwMiA0MTYuOTI2bDcuNDkyIDQuNDA5IDYuMjM5LTYuMDI3LTMuNzI0LTMuNzc4LTYuMjM5IDYuMDI2IDQuMjY5IDcuNTI0IDQ1OC4xOTctMjU0LjgyLTQuMjY5LTcuNTI0LTYuMjQxIDYuMDIzIDMuNzIyIDMuNzgyIDYuMjQyLTYuMDI0LTcuNTE3LTQuMzY4TDgxOS40MyA1NDUuMjY1bDcuNTE4IDQuMzY4LjAwNi04LjYyOS00Ljc0LS4wMDR6TTU4Ny45MDEgMTcwLjI5M2w0NTcuODUxIDI1NC41ODRjMy45MzEgMi4xODYgOC44OTggMS4wNDIgMTEuNDUyLTIuNjM2bDMuMzc2LTQuODYzYTguNTU3IDguNTU3IDAgMDAuMzA2LTkuMzAyTDgzNC40MzggMzEuNTM3YTguNzM0IDguNzM0IDAgMDAtNy40OTYtNC4yMTVsLTQuNzM4LjAwNGE4LjczNSA4LjczNSAwIDAwLTcuNDc0IDQuMkw1ODMuNjczIDQxMy45MTRhOC41NjQgOC41NjQgMCAwMDEuMjQxIDEwLjQ1NmwzLjcyNCAzLjc3OWMyLjc3OSAyLjgxOSA3LjEzMyAzLjQxOCAxMC41ODMgMS40NTVsNDU2LjU3NS0yNTkuODE1LTQuMzQ0LTcuNDgxLTYuMDkgNi4xNzQgMS45NDQgMS44OCA2LjA5LTYuMTc0LTcuNDgtNC40MzEtMjMxLjE4NiAzODIuNDVjLTMuNDc2IDUuNzQ5LjcwNCAxMy4wNTUgNy40NzIgMTMuMDZsNC43NC4wMDRjNi43NS4wMDUgMTAuOTQ0LTcuMjYgNy41MTQtMTMuMDE1TDYwMy40IDE1NC42MDZjLTIuOTE3LTQuODk0LTkuNzM0LTUuNzA5LTEzLjc0NC0xLjY0MmwtMy43MjUgMy43NzdjLTQuMDAzIDQuMDYtMy4wMjggMTAuNzc0IDEuOTY5IDEzLjU1MnptNC4yNjgtNy41MjRsNi4yMzcgNi4wMjggMy43MjUtMy43NzctNi4yMzctNi4wMjgtNy41MDcgNC4zODUgMjMxLjA1NSAzODcuNjUgNy41MDctNC4zODUuMDA3LTguNjMtNC43NC0uMDAzLS4wMDcgOC42MjkgNy40OCA0LjQzMSAyMzEuMTg3LTM4Mi40NDlhOC41NjUgOC41NjUgMCAwMC0xLjM5LTEwLjYwNWwtMS45NDQtMS44OGE4Ljc4MyA4Ljc4MyAwIDAwLTEwLjQzNC0xLjMwN0w1OTAuNTMzIDQxNC42NDJsNC4zNDQgNy40ODEgNi4yMzgtNi4wMjYtMy43MjQtMy43NzktNi4yMzggNi4wMjcgNy40OCA0LjQzTDgyOS42OSA0MC4zODVsLTcuNDgtNC40My4wMDYgOC42MyA0LjczOS0uMDA0LS4wMDctOC42My03LjQ5IDQuNDE1IDIyNi40NDggMzc2LjUzOSA3LjQ5LTQuNDE1LTcuMTg0LTQuODg4LTMuMzc2IDQuODYzIDcuMTg0IDQuODg4IDQuMjY4LTcuNTI0LTQ1Ny44NTEtMjU0LjU4NC00LjI2OSA3LjUyNHoiLz48L2c+PC9nPjwvZz48L3N2Zz4="},383:function(M,t,e){var u=e(384);"string"==typeof u&&(u=[[M.i,u,""]]);var N={insert:"head",singleton:!1};e(161)(u,N);u.locals&&(M.exports=u.locals)},384:function(M,t,e){(M.exports=e(160)(!1)).push([M.i,".centralBody{\n  padding: 3%;\n}\n.col_cc{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n}",""])},385:function(M,t,e){var u=e(386);"string"==typeof u&&(u=[[M.i,u,""]]);var N={insert:"head",singleton:!1};e(161)(u,N);u.locals&&(M.exports=u.locals)},386:function(M,t,e){(M.exports=e(160)(!1)).push([M.i,".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 80px;\n}\n\n.App-header {\n  background-color: #3D68A3;\n  height: 150px;\n  padding: 20px;\n  color: white;\n}\n\n.App-title {\n  font-size: 1.5em;\n}\n",""])},636:function(M,t,e){"use strict";e.r(t);var u=e(4),N=e.n(u),n=e(98),j=e.n(n),c=e(57),T=e(55);var L=Object(T.combineReducers)({testReducer:(M=[],t)=>{switch(t.type){case"TEST_ACTION":return t.payload;default:return M}}}),r=(e(383),e(374)),i=e.n(r);e(385);var D=M=>N.a.createElement("div",{className:"App"},N.a.createElement("header",{className:"App-header"},N.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),N.a.createElement("h1",{className:"App-title"},"Welcome to Nova's code challenge! - ",M.contestant)));e(162);const o=()=>({type:"TEST_ACTION",payload:"this is a test action created"});class a extends u.Component{componentDidMount(){this.props.testAction()}render(){return N.a.createElement("div",null,"THIS IS THE BODY - ",this.props.test)}}var y=Object(c.connect)(M=>({test:M.testReducer}),{testAction:o})(a);class g extends u.Component{componentDidMount(){this.props.testAction()}render(){return N.a.createElement("div",{className:"col_cc"},N.a.createElement(D,{contestant:"Kunle Babatunde"}),N.a.createElement("div",{className:"centralBody"},N.a.createElement(y,null)))}}var s=Object(c.connect)(null,{testAction:o})(g);j.a.render(N.a.createElement(c.Provider,{store:Object(T.createStore)(L)},N.a.createElement(s,null)),document.getElementById("root"))}});