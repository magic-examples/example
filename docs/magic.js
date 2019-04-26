(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function b(a,b){return f(a)||e(a,b)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function e(a,b){var c=[];var d=!0;var e=!1;var f=undefined;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{!d&&h["return"]!=null&&h["return"]()}finally{if(e)throw f}}return c}function f(a){if(Array.isArray(a))return a}function g(a){for(var b=1;b<arguments.length;b++){var c=arguments[b]==null?{}:arguments[b];var d=Object.keys(c);typeof Object.getOwnPropertySymbols==="function"&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){j(a,b,c[b])})}return a}function j(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function k(a,b){if(a==null)return{};var c=l(a,b);var d,e;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(e=0;e<f.length;e++)d=f[e],!(b.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(a,d)&&(c[d]=a[d])}return c}function l(a,b){if(a==null)return{};var c={};var d=Object.keys(a);var e,f;for(f=0;f<d.length;f++)e=d[f],!(b.indexOf(e)>=0)&&(c[e]=a[e]);return c}function m(a){return m=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function m(a){return typeof a}:function m(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},m(a)}var n=require("hyperapp"),o=n.app,q=n.h;var h=function(a){return function(){var b=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var d=!!(arguments.length>1&&arguments[1]!==undefined)&&arguments[1];var e=function is(a){for(var b=arguments.length,c=Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===m(a)})};return!d&&(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),q(a,b,d)}};var r=h("div");var s=h("h1");var t=h("h2");var u=h("li");var v=h("p");var p=h("ul");var w=h("button");var x=h("i");var i=function Inside(a){return x(a.app.title)};var y=function Wrapper(a,b){return r({"class":"Wrapper".concat(a.wrapper.localVar?" Test":"")},[i,w({onclick:b.wrapperAction},[a.wrapper.buttonText,a.buttonGlobal])])};var z=function Count(a,b){return r([s("Counter"),r("count: ".concat(a.count)),r("this counter globally shares it's state with all other counters"),w({onclick:function onclick(){return b.count(1)}},"+1"),w({onclick:function onclick(){return b.count(10)}},"+10"),w({onclick:function onclick(){return b.count(-1)}},"-1"),w({onclick:function onclick(){return b.count(-10)}},"-10")])};var A={View:function View(){return D({"class":"main"},[r({"class":"wrapper"},["made with a few bits of ",C({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])}};var B=h("a");var a=h("text");var C=function Link(a,b){var c=a.to,d=k(a,["to"]);return function(a,f){var g=d.href,h=d.text,i=d.nofollow,j=d.noreferrer,l=d.onclick,m=k(d,["href","text","nofollow","noreferrer","onclick"]);return c=c||g||"",m.href=c,c&&c.startsWith("/")&&!c.startsWith("//")?m.onclick=function(a){l&&l({e:a,to:c}),f.go({e:a,to:c})}:(m.target="_blank",m.rel="noopener",i&&(m.rel+=" nofollow"),j&&(m.rel+=" noreferrer")),B(m,[h,b])}};var D=h("footer");var E={View:function View(a){var b=a.name,c=b===void 0?"menu":b,d=a["class"],e=d===void 0?"":d,f=a.between,g=f!==void 0&&f,h=a.items,i=h===void 0?[]:h;return function(a){if(i.length||a[c]&&a[c].length)return!i.length&&(i=a[c]),F({"class":"Menu ".concat(e)},[p(i.map(function(b,d){var e=b.items,f=k(b,["items"]);var h={};var i=a.hash?"#".concat(a.hash):"";var j=a.url+i;f.to===j&&(h["class"]="active");var l;return e&&j.startsWith(f.to)&&(l=p(e.map(function(a){var b={};return a.to===j&&(b["class"]="active"),u(b,C(a))}))),[u(h,[C(f),l]),g&&d<a[c].length-1?u(g):""]}))])}}};var F=h("nav");var G=h("img");var H=function Img(a){return function(){if(typeof a==="string"&&(a={src:a}),!!a.src)return!a.alt&&(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),G(a)}};var I=h("header");var J=h("span");var K=function PageHead(a){return(a.logo||a.menu||a.tagline)&&I({"class":"main"},[(a.logo||a.logotext)&&C({to:"/example/","class":"logo-wrapper"},[a.logo&&H({"class":"logo",src:a.logo}),a.logotext&&J({"class":"logo-text"},a.logotext)]),E.View])};var L={"/example/deep/":function exampleDeep(a){return[s(a.title),r("page content"),z]},"/example/":function example(a){return[s(a.title),r([v("index page content"),v("can stretch multiple lines"),p([u("and contain"),u("lists of content")])]),z,t("local var:"),v("the variable determining the color is local to this page."),y]},"/404/":function _(){return r("404 - not found")}};var M={"url":"/example/","root":"/example/","app":{"title":"Custom App Title","description":"Custom App Description"},"menu":[{to:"/example/","text":"home"},{to:"/example/deep/","text":"deep"}],logo:"/example/logo.png","pages":{"/example/deep/":{"title":"h1 deep/index","htmlTitle":"testing the html title tag"},"/example/":{"title":"h1 indexpage","description":"custom description"}},"wrapper":{"localVar":!1,"buttonText":"click"},"buttonGlobal":" me!","count":0};M.url=window.location.pathname,M.root="/example/";var N={"pages":{"/example/deep/":{"deepAction":function deepAction(a){return{test:!a.test}}}},"wrapperAction":function wrapperAction(){return function(a){return{wrapper:g({},a.wrapper,{localVar:!a.wrapper.localVar})}}},"count":function count(a){return function(b){return{count:b.count+a}}},"go":function go(a){return function(c){if(typeof window==="undefined"||!window.history)return!0;var d=a.to;var f=a.e?a.e:a;f.preventDefault();var e=c.url;var g=e.split("#"),h=b(g,2),i=h[0],j=h[1],k=j===void 0?"":j;if(d){e=d.replace(window.location.origin,"");var l=e.split("#"),m=b(l,2),n=m[0],o=m[1],p=o===void 0?"":o;i=n,k=p;var q=c.hash?"#".concat(c.hash):"";var r=c.url+q;e!==r&&(window.history&&window.history.pushState({uri:i},"",e),!k&&window.scrollTo(0,0))}else i=f.state?f.state.uri:"/";return k&&window.location&&(window.location.hash=k),{url:i,hash:k,prev:c.url}}}};var O=function view(a,b){var c=L[a.url]?a.url:"/404/";var d=L[c];if(a.pages){var e=a.pages[c];for(var f in e)a[f]=e[f]}if(b.pages){var g=b.pages[c];for(var h in g)b[h]=g[h]}return r({"class":"wrapper",oncreate:function oncreate(){typeof window!=="undefined"&&b.go&&window.addEventListener("popstate",b.go)}},[K,d?r({"class":"page"},d(a,b)):r({"class":"page"},"404 - not found"),A.View])};var P=document;var d=P.getElementById("magic");!d&&(d=P.createElement("div"),d.id="magic",P.body.appendChild(d)),o(M,N,O,d);
},{"hyperapp":2}],2:[function(require,module,exports){
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.hyperapp={})}(this,function(e){"use strict";e.h=function(e,n){for(var t=[],r=[],o=arguments.length;2<o--;)t.push(arguments[o]);for(;t.length;){var l=t.pop();if(l&&l.pop)for(o=l.length;o--;)t.push(l[o]);else null!=l&&!0!==l&&!1!==l&&r.push(l)}return"function"==typeof e?e(n||{},r):{nodeName:e,attributes:n||{},children:r,key:n&&n.key}},e.app=function(e,n,t,r){var o,l=[].map,u=r&&r.children[0]||null,i=u&&function n(e){return{nodeName:e.nodeName.toLowerCase(),attributes:{},children:l.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:n(e)})}}(u),f=[],m=!0,a=v(e),c=function e(r,o,l){for(var n in l)"function"==typeof l[n]?function(e,t){l[e]=function(e){var n=t(e);return"function"==typeof n&&(n=n(h(r,a),l)),n&&n!==(o=h(r,a))&&!n.then&&d(a=p(r,v(o,n),a)),n}}(n,l[n]):e(r.concat(n),o[n]=v(o[n]),l[n]=v(l[n]));return l}([],a,v(n));return d(),c;function g(e){return"function"==typeof e?g(e(a,c)):null!=e?e:""}function s(){o=!o;var e=g(t);for(r&&!o&&(u=function e(n,t,r,o,l){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var u=k(o,l);n.insertBefore(u,t),null!=r&&T(n,t,r),t=u}else if(null==r.nodeName)t.nodeValue=o;else{x(t,r.attributes,o.attributes,l=l||"svg"===o.nodeName);for(var i={},f={},a=[],c=r.children,s=o.children,d=0;d<c.length;d++){a[d]=t.childNodes[d];var v=N(c[d]);null!=v&&(i[v]=[a[d],c[d]])}for(var d=0,p=0;p<s.length;){var v=N(c[d]),h=N(s[p]=g(s[p]));if(f[v])d++;else if(null==h||h!==N(c[d+1]))if(null==h||m)null==v&&(e(t,a[d],c[d],s[p],l),p++),d++;else{var y=i[h]||[];v===h?(e(t,y[0],y[1],s[p],l),d++):y[0]?e(t,t.insertBefore(y[0],a[d]),y[1],s[p],l):e(t,a[d],null,s[p],l),f[h]=s[p],p++}else null==v&&T(t,a[d],c[d]),d++}for(;d<c.length;)null==N(c[d])&&T(t,a[d],c[d]),d++;for(var d in i)f[d]||T(t,i[d][0],i[d][1])}return t}(r,u,i,i=e)),m=!1;f.length;)f.pop()()}function d(){o||(o=!0,setTimeout(s))}function v(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function p(e,n,t){var r={};return e.length?(r[e[0]]=1<e.length?p(e.slice(1),n,t[e[0]]):n,v(t,r)):n}function h(e,n){for(var t=0;t<e.length;)n=n[e[t++]];return n}function N(e){return e?e.key:null}function y(e){return e.currentTarget.events[e.type](e)}function b(e,n,t,r,o){if("key"===n);else if("style"===n)if("string"==typeof t)e.style.cssText=t;else for(var l in"string"==typeof r&&(r=e.style.cssText=""),v(r,t)){var u=null==t||null==t[l]?"":t[l];"-"===l[0]?e.style.setProperty(l,u):e.style[l]=u}else"o"===n[0]&&"n"===n[1]?(n=n.slice(2),e.events?r||(r=e.events[n]):e.events={},(e.events[n]=t)?r||e.addEventListener(n,y):e.removeEventListener(n,y)):n in e&&"list"!==n&&"type"!==n&&"draggable"!==n&&"spellcheck"!==n&&"translate"!==n&&!o?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function k(e,n){var t="string"==typeof e||"number"==typeof e?document.createTextNode(e):(n=n||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName),r=e.attributes;if(r){r.oncreate&&f.push(function(){r.oncreate(t)});for(var o=0;o<e.children.length;o++)t.appendChild(k(e.children[o]=g(e.children[o]),n));for(var l in r)b(t,l,r[l],null,n)}return t}function x(e,n,t,r){for(var o in v(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&b(e,o,t[o],n[o],r);var l=m?t.oncreate:t.onupdate;l&&f.push(function(){l(e,n)})}function T(e,n,t){function r(){e.removeChild(function e(n,t){var r=t.attributes;if(r){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}var o=t.attributes&&t.attributes.onremove;o?o(n,r):r()}}});

},{}]},{},[1]);
