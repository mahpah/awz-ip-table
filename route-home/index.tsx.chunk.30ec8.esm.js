(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{FA6U:function(e){e.exports={home:"home__MseGd",ipList:"ipList__drO0N"}},FDtd:function(e,t,n){"use strict";function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t);var c=n("hosL"),i=n("FA6U"),u=n("QRet");t.default=()=>{const[e,t]=Object(u.b)([]),[n,o]=Object(u.b)({}),[_,s]=Object(u.b)([]),[a,p]=Object(u.b)(!1),[l,h]=Object(u.b)({});Object(u.a)(()=>{p(!0);let e=!0;return fetch("https://ip-ranges.amazonaws.com/ip-ranges.json").then(e=>e.json()).then(n=>{e&&(t(n.prefixes),h((e=>{const t=["region","service","network_border_group"].map(t=>{const n=Array.from(new Set(e.map(e=>e[t]))).sort();return{key:t,values:n}}).reduce((e,{key:t,values:n})=>r(r({},e),{},{[t]:n}),{});return console.log(t),t})(n.prefixes)),p(!1))}),()=>e=!1},[]),Object(u.a)(()=>{const t=(e=>t=>!(e.network_border_group&&t.network_border_group!==e.network_border_group||e.service&&t.service!==e.service||e.region&&t.region!==e.region))(n);s(e.filter(t))},[n,e]);const b=e=>t=>{const n=t.target;o(t=>r(r({},t),{},{[e]:n.value}))};return Object(c.h)("div",{class:i.home},Object(c.h)("h1",null,"Home"),Object(c.h)("p",null,"Filter the ip addresses"),Object(c.h)("div",null,Object(c.h)("label",{htmlFor:""},"network_border_group"),Object(c.h)("select",{value:n.network_border_group||"",onChange:b("network_border_group")},Object(c.h)("option",{value:""},"Please select one"),l.network_border_group&&l.network_border_group.map((e,t)=>Object(c.h)("option",{value:e,key:t},e)))),Object(c.h)("div",null,Object(c.h)("label",{htmlFor:""},"service"),Object(c.h)("select",{value:n.service||"",onChange:b("service")},Object(c.h)("option",{value:""},"Please select one"),l.service&&l.service.map((e,t)=>Object(c.h)("option",{value:e,key:t},e)))),Object(c.h)("div",null,Object(c.h)("label",{htmlFor:""},"region"),Object(c.h)("select",{value:n.region||"",onChange:b("region")},Object(c.h)("option",{value:""},"Please select one"),l.region&&l.region.map((e,t)=>Object(c.h)("option",{value:e,key:t},e)))),Object(c.h)("div",null,Object(c.h)("button",{onClick:()=>{(e=>{const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)})(_.map(e=>e.ip_prefix).join("\n"))}},"Copy ip ranges")),a?Object(c.h)("span",null,"Loading..."):Object(c.h)("div",{class:i.ipList},Object(c.h)("ul",null,_.map((e,t)=>Object(c.h)("li",{key:t},e.ip_prefix," -"," ",Object(c.h)("em",null,e.service," - ",e.region," - ",e.network_border_group))))))}},QRet:function(e,t,n){"use strict";function o(e,t){b.options.__h&&b.options.__h(l,e,f||t),f=0;var n=l.__H||(l.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function r(e){return f=1,function(e,t,n){var r=o(p++,2);return r.t=e,r.__c||(r.__c=l,r.__=[n?n(t):a(void 0,t),function(e){var t=r.t(r.__[0],e);r.__[0]!==t&&(r.__=[t,r.__[1]],r.__c.setState({}))}]),r.__}(a,e)}function _(e,t){var n=o(p++,3);!b.options.__s&&s(n.__H,t)&&(n.__=e,n.__H=t,l.__H.__h.push(n))}function c(){O.some((function(e){if(e.__P)try{e.__H.__h.forEach(i),e.__H.__h.forEach(u),e.__H.__h=[]}catch(t){return e.__H.__h=[],b.options.__e(t,e.__v),!0}})),O=[]}function i(e){"function"==typeof e.u&&e.u()}function u(e){e.u=e.__()}function s(e,t){return!e||t.some((function(t,n){return t!==e[n]}))}function a(e,t){return"function"==typeof t?t(e):t}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return _}));var p,l,h,b=n("hosL"),f=0,O=[],v=b.options.__r,m=b.options.diffed,j=b.options.__c,d=b.options.unmount;b.options.__r=function(e){v&&v(e),p=0;var t=(l=e.__c).__H;t&&(t.__h.forEach(i),t.__h.forEach(u),t.__h=[])},b.options.diffed=function(e){m&&m(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==O.push(t)&&h===b.options.requestAnimationFrame||((h=b.options.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(o),g&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);g&&(t=requestAnimationFrame(n))})(c))},b.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(i),e.__h=e.__h.filter((function(e){return!e.__||u(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],b.options.__e(n,e.__v)}})),j&&j(e,t)},b.options.unmount=function(e){d&&d(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(i)}catch(e){b.options.__e(e,t.__v)}};var g="function"==typeof requestAnimationFrame}}]);
//# sourceMappingURL=index.tsx.chunk.30ec8.esm.js.map