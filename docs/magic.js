"use strict";function b(a,b){return e(a)||d(a,b)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function d(a,b){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function e(a){if(Array.isArray(a))return a}function f(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function g(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?f(Object(b),!0).forEach(function(c){j(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):f(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function j(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function k(a,b){if(null==a)return{};var c,d,e=l(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function l(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function m(a){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},m(a)}var n=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},n=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},o=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||n(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},p=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},q=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)p(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(q(a.children[h]=v(a.children[h]),c,d));return a.node=f},r=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(q(e=v(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,o=e.props,t=d.children,u=e.children,w=0,x=0,y=t.length-1,z=u.length-1;for(var A in g=g||"svg"===e.name,j(n,o))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==o[A]&&p(c,A,n[A],o[A],f,g);for(;x<=z&&w<=y&&null!=(l=r(t[w]))&&l===r(u[x]);)s(c,t[w].node,t[w],u[x]=v(u[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=r(t[y]))&&l===r(u[z]);)s(c,t[y].node,t[y],u[z]=v(u[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(q(u[x]=v(u[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=r(k=t[w]),m=r(u[x]=v(u[x],k)),C[l]||null!=m&&m===r(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,u[x],f,g),x++),w++):(l===m?(s(c,k.node,k,u[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,u[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,u[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==r(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(a){return"object"===m(a)?a:x(a)},v=function(b,c){return b.type===a?((!c||c.type!==a||t(c.lazy,b.lazy))&&((c=u(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},w=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},x=function(a,e){return w(a,c,d,e,void 0,b)},y=function(a){return a.nodeType===b?x(a.nodeValue,a):w(a.nodeName.toLowerCase(),c,e.call(a.childNodes,y),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(u(d));return b=b||c,"function"==typeof a?a(b,g):w(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&y(e),i=a.subscriptions,j=[],l=function(a){n(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=o(j,k([i(b)]),n)),d&&!c&&g(p,c=!0)),b},n=(a.middleware||function(a){return a})(function(a,c){return"function"==typeof a?n(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?n(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](n,a[1])},m(a[0])),b):m(a)}),p=function(){c=!1,e=s(e.parentNode,e,h,h=u(d(b)),l)};n(a.init)}}}(),o=n.h,h=n.app,q=function(a){return function(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===m(a)})};return d||(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),o(a,b,d)}},r=q("a"),a=q("button"),s=q("div"),t=q("footer"),u=q("h1"),v=q("h2"),w=q("h3"),x=q("h4"),y=q("header"),z=q("i"),i=q("img"),A=q("input"),B=q("label"),C=q("li"),D=q("link"),E=q("main"),F=q("meta"),G=q("nav"),H=q("p"),p=q("script"),I=q("span"),J=q("title"),K=q("ul"),L={app:{description:"Custom App Description",title:"Custom App Title"},buttonGlobal:" me!",count:0,gdpr:{allowed:[],show:!0},logo:"/example/logo.png",menu:[{text:"home",to:"/"},{text:"deep",to:"/deep/"}],outside:{buttonText:"click",localVar:!1},pageClass:{},pages:{"/example/":{description:"custom description",title:"h1 indexpage"},"/example/deep/":{htmlTitle:"testing the html title tag",title:"h1 deep/index"}},root:"/example/",url:"/example/"},M={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}},mapClickToGo:function mapClickToGo(a){return a.preventDefault(),a}},N=function(b){return s([u("Counter"),s("count: ".concat(b.count)),s("this counter globally shares it's state with all other counters"),a({onclick:[$.count,1]},"+1"),a({onclick:[$.count,10]},"+10"),a({onclick:[$.count,-1]},"-1"),a({onclick:[$.count,-10]},"-10")])},O=function(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return t({class:"Footer"},[s({class:"Container"},[b,s({class:"Credits"},["made with a few bits of ",T({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])]),"function"==typeof P&&P(a)])},P=function(a){var b=a.gdpr,c=void 0===b?{}:b,d=a.cookies,e=void 0===d?[]:d,f=c.show,g=c.title,h=void 0===g?"Magic Privacy Information":g,i=c.content,j=void 0===i?"This app neither saves, collects, nor shares any data about you.":i,k=c.noCookieButtonText,l=void 0===k?"Awesome.":k,m=c.allowAllCookiesButtonText,n=void 0===m?"Allow all":m,o=c.allowCookieButtonText,p=void 0===o?"Allow selected":o,q=c.denyCookieButtonText,r=void 0===q?"Deny all personal data":q;if(f){var t=!!e.length;return s({class:"Gdpr"},[A({type:"checkbox",name:"show-hide",id:"show-hide",checked:!f}),s({class:"Container"},[h&&w(h),j&&H(j),t&&[K(e.map(function(a){var b=a.name,d=a.title,e=a.content,f=a.allowed;return C({class:"Cookie"},[A({type:"checkbox",title:"allow ".concat(b," data"),id:b,checked:c.allowed.includes(b),onchange:[$.gdpr.toggleAllow,{name:b}]}),(d||e)&&B({for:b},[d&&x(d),e&&H(e)])])}))],t?[B({class:"button allow all",for:"show-hide",onclick:$.gdpr.allow},n),B({class:"button allow",for:"show-hide",onclick:$.gdpr.close},p),B({class:"button allow none",for:"show-hide",onclick:$.gdpr.deny},r)]:B({class:"button",for:"show-hide",onclick:$.gdpr.close},l)])])}},Q=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],c=a.logo,d=a.menu,e=a.logotext,f=k(a,["logo","menu","logotext"]);return c||d||e?y({class:"Header"},[(c||e)&&T({to:f.root,class:"Logo"},[c&&R(c),e&&I(e)]),d&&U({state:f,items:d}),b]):void 0},R=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),i(a)},S=function(a){return[z(a.title)]},T=function(a,b){var c=a.to,d=k(a,["to"]),e=d.href,f=d.text,g=d.nofollow,h=d.noreferrer,i=k(d,["href","text","nofollow","noreferrer"]);c=c||e||"",i.href=c;var j=c.startsWith("/");return j?i.onclick=[$.go,M.mapClickToGo]:(i.target="_blank",i.rel="noopener",g&&(i.rel+=" nofollow"),h&&(i.rel+=" noreferrer")),r(i,[f,b])},U=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a.items,c=a["class"],d=void 0===c?"Menu":c,e=a.collapse,f=a.state;if(b.length){var h=f.url||"";return f.hash&&!h.endsWith(f.hash)&&(h+="#".concat(f.hash)),G({className:d},K(b.map(function(a){return V(g({},a,{url:h,state:f,collapse:void 0===e||e}))})))}},V=function(a){var b=a.text,c=a.items,d=void 0===c?[]:c,e=a.url,f=a.state,h=a.parentTo,i=void 0===h?void 0:h,j=a.collapse,l=k(a,["text","items","url","state","parentTo","collapse"]),m=f.root;if(l.to||b){var n={class:{}},o=l.to;o.startsWith("/#")&&(o=o.substr(1));var p=l.to[0],q="/"===p||"-"===p||"#"===p;if(i&&q)if("-"===p||"#"===p)o=i+o;else{var u=o.split("/")[1];if(u){var v=i.endsWith("/".concat(u,"/"));!v&&q&&(o=i+o)}}("/"!==l.to&&e.endsWith(l.to)||l.to===e)&&(n["class"].active=!0);var r=o.startsWith(m);m&&q&&!r&&(o=m+o),l.to=o.replace(/\/\//g,"/");var s=[],t=e&&e.includes(l.to);return(d.length&&t||!j)&&(s=K(d.map(function(a){return V(g({parentTo:l.to,url:e,state:f,collapse:j},a))}))),C(n,[l.to?T(l,b):I(l,b),s])}},W=function(b){return s({class:"Outside".concat(b.outside.localVar?" Test":"")},[S(b),a({onclick:[$.wrapperAction]},[b.outside.buttonText,b.buttonGlobal])])},X=function(a){var b=a.page,c=a.state;b=b?b(c):"404 - not found";var d={id:"Magic",class:c.pageClass};return E(d,s({class:{Wrapper:!0}},Y({state:c,page:b})))},Y=function(a){var b=a.page,c=a.state;return[Q(c),s({class:"Page"},b),O(c)]},Z={db:function(){return{set:function set(a,b){var c=b.action,d=b.key,e=b.value,f=Z.db.init(),g=Z.json.stringify(e);return"Error"==typeof g?void a(c,new Error("db:write ".concat(d," ").concat(val))):void(f[d]=g,a(c,{key:d,value:e}))},get:function get(a,b){var c=b.action,d=b.key,e=Z.db.init(),f=void 0;return e[d]&&(f=Z.json.parse(e[d]),"Error"==typeof res)?void a(c,new Error("db:read ".concat(d))):void a(c,{key:d,value:f})},del:function del(a,b){var c=b.action,d=b.key,e=Z.db.init();e[d]&&e.removeItem(d),a(c,{key:d,value:void 0})},init:function init(){return"undefined"!=typeof window&&window.localStorage||{}}}}(),json:function(){var a=function(a){return function(){try{return a.apply(void 0,arguments)}catch(a){return a}}},b=a(JSON.parse),c=a(JSON.stringify);return{parse:b,stringify:c}}()},$={count:function count(a,b){return g({},a,{count:a.count+b})},gdpr:{allow:function allow(a){return[g({},a,{gdpr:g({},a.gdpr,{show:!1})}),[Z.db.set,{key:"magic-gdpr",value:{allowed:a.cookies.map(function(a){return a.name}),show:!1},action:[$.gdpr.show,{show:!1}]}]]},close:function close(a){return[g({},a,{gdpr:g({},a.gdpr,{show:!1})}),[Z.db.set,{key:"magic-gdpr",value:{allowed:a.gdpr.allowed,show:!1},action:[$.gdpr.show,{show:!1}]}]]},deny:function deny(a){return[a,[Z.db.set,{key:"magic-gdpr",value:{allowed:[],show:!1},action:[$.gdpr.show,{show:!1}]}]]},load:function load(a){return[a,[Z.db.get,{key:"magic-gdpr",action:$.gdpr.show}]]},show:function(a,b){var c=b.show;return b.value&&"undefined"!=typeof b.value.show&&(c=b.value.show),"undefined"==typeof c?a:g({},a,{gdpr:g({},a.gdpr,{show:c})})},toggleAllow:function toggleAllow(a,b){var d=b.name,e=a.gdpr,f=e.allowed.includes(d);return f?e.allowed=e.allowed.filter(function(a){return a!==d}):e.allowed.push(d),g({},a,{gdpr:e})}},go:function go(a,c){var d=c.currentTarget.href.replace(window.location.origin,""),e=d.split("#"),f=b(e,2),h=f[0],i=f[1],j=void 0===i?"":i;return h===a.url&&j===a.hash?a:(window.history.pushState({url:h,hash:j},"",d),j?window.location.hash=j:window.scroll(0,0),g({},a,{url:h,hash:j,prev:a.url}))},pages:{"/example/deep/":{deepAction:function deepAction(a){return{test:!a.test}}}},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;return e=e.substring(1),b.state&&(d=b.state.url,e=b.state.hash),e?window.location.hash=e:window.scroll(0,0),g({},a,{url:d,hash:e})},wrapperAction:function wrapperAction(a){return g({},a,{outside:g({},a.outside,{localVar:!a.outside.localVar})})}},_={"/example/":function example(a){return[u(a.title),s([H("index page content"),H("can stretch multiple lines"),K([C("and contain"),C("lists of content")])]),N(a),v("local var:"),H("the variable determining the color is local to this page."),W(a)]},"/example/404/":function example404(){return s("404 - not found")},"/example/deep/":function exampleDeep(a){return[u(a.title),s("page content"),N(a)]}};h({init:function init(){return $.gdpr.load(g({},L,{url:window.location.pathname}))},subscriptions:function subscriptions(){return[[M.listenPopState,$.pop]]},view:function view(a){var b=_[a.url]?a.url:"/404/",c=_[b];return a.pages&&a.pages[b]&&Object.keys(a.pages[b]).forEach(function(c){a[c]=a.pages[b][c]}),X({page:c,state:a})},node:document.getElementById("Magic")});