module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s="QfWi")}({FA6U:function(t,e,n){t.exports={home:"home__MseGd",ipList:"ipList__drO0N"}},GFNa:function(t,e,n){},HteQ:function(t,e){t.exports=require("preact")},NWYn:function(t,e,n){t.exports={profile:"profile__t2Dqz"}},QfWi:function(t,e,n){"use strict";n.r(e);n("GFNa");var r,o,i,u=n("HteQ"),c=n("Y3FI"),a=n("FA6U"),l=0,f=[],p=u.options.__r,s=u.options.diffed,h=u.options.__c,_=u.options.unmount;function d(t,e){u.options.__h&&u.options.__h(o,t,l||e),l=0;var n=o.__H||(o.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function b(t){return l=1,function(t,e,n){var i=d(r++,2);return i.t=t,i.__c||(i.__c=o,i.__=[n?n(e):k(void 0,e),function(t){var e=i.t(i.__[0],t);i.__[0]!==e&&(i.__=[e,i.__[1]],i.__c.setState({}))}]),i.__}(k,t)}function v(t,e){var n=d(r++,3);!u.options.__s&&j(n.__H,e)&&(n.__=t,n.__H=e,o.__H.__h.push(n))}function m(){f.some((function(t){if(t.__P)try{t.__H.__h.forEach(O),t.__H.__h.forEach(g),t.__H.__h=[]}catch(e){return t.__H.__h=[],u.options.__e(e,t.__v),!0}})),f=[]}u.options.__r=function(t){p&&p(t),r=0;var e=(o=t.__c).__H;e&&(e.__h.forEach(O),e.__h.forEach(g),e.__h=[])},u.options.diffed=function(t){s&&s(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(1!==f.push(e)&&i===u.options.requestAnimationFrame||((i=u.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),y&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);y&&(e=requestAnimationFrame(n))})(m))},u.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(O),t.__h=t.__h.filter((function(t){return!t.__||g(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],u.options.__e(n,t.__v)}})),h&&h(t,e)},u.options.unmount=function(t){_&&_(t);var e=t.__c;if(e&&e.__H)try{e.__H.__.forEach(O)}catch(t){u.options.__e(t,e.__v)}};var y="function"==typeof requestAnimationFrame;function O(t){"function"==typeof t.u&&t.u()}function g(t){t.u=t.__()}function j(t,e){return!t||e.some((function(e,n){return e!==t[n]}))}function k(t,e){return"function"==typeof e?e(t):e}function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){w(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var P=function(){var t=b([]),e=t[0],n=t[1],r=b({}),o=r[0],i=r[1],c=b([]),l=c[0],f=c[1],p=b(!1),s=p[0],h=p[1],_=b({}),d=_[0],m=_[1];v((function(){h(!0);var t=!0;return fetch("https://ip-ranges.amazonaws.com/ip-ranges.json").then((function(t){return t.json()})).then((function(e){t&&(n(e.prefixes),m(function(t){var e=["region","service","network_border_group"].map((function(e){var n=Array.from(new Set(t.map((function(t){return t[e]})))).sort();return{key:e,values:n}})).reduce((function(t,e){var n,r=e.key,o=e.values;return x(x({},t),{},((n={})[r]=o,n))}),{});return console.log(e),e}(e.prefixes)),h(!1))})),function(){return t=!1}}),[]),v((function(){var t=function(t){return function(e){return!(t.network_border_group&&e.network_border_group!==t.network_border_group||t.service&&e.service!==t.service||t.region&&e.region!==t.region)}}(o);f(e.filter(t))}),[o,e]);var y=function(t){return function(e){var n=e.target;i((function(e){var r;return x(x({},e),{},((r={})[t]=n.value,r))}))}};return Object(u.h)("div",{class:a.home},Object(u.h)("h1",null,"Home"),Object(u.h)("p",null,"Filter the ip addresses"),Object(u.h)("div",null,Object(u.h)("label",{htmlFor:""},"network_border_group"),Object(u.h)("select",{value:o.network_border_group||"",onChange:y("network_border_group")},Object(u.h)("option",{value:""},"Please select one"),d.network_border_group&&d.network_border_group.map((function(t,e){return Object(u.h)("option",{value:t,key:e},t)})))),Object(u.h)("div",null,Object(u.h)("label",{htmlFor:""},"service"),Object(u.h)("select",{value:o.service||"",onChange:y("service")},Object(u.h)("option",{value:""},"Please select one"),d.service&&d.service.map((function(t,e){return Object(u.h)("option",{value:t,key:e},t)})))),Object(u.h)("div",null,Object(u.h)("label",{htmlFor:""},"region"),Object(u.h)("select",{value:o.region||"",onChange:y("region")},Object(u.h)("option",{value:""},"Please select one"),d.region&&d.region.map((function(t,e){return Object(u.h)("option",{value:t,key:e},t)})))),Object(u.h)("div",null,Object(u.h)("button",{onClick:function(){var t,e;t=l.map((function(t){return t.ip_prefix})).join("\n"),(e=document.createElement("textarea")).value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}},"Copy ip ranges")),s?Object(u.h)("span",null,"Loading..."):Object(u.h)("div",{class:a.ipList},Object(u.h)("ul",null,l.map((function(t,e){return Object(u.h)("li",{key:e},t.ip_prefix," -"," ",Object(u.h)("em",null,t.service," - ",t.region," - ",t.network_border_group))})))))},U=n("NWYn"),H=function(t){var e=t.user,n=b(Date.now()),r=n[0],o=n[1],i=b(0),c=i[0],a=i[1];v((function(){var t=window.setInterval((function(){return o(Date.now())}),1e3);return function(){clearInterval(t)}}),[]);return Object(u.h)("div",{class:U.profile},Object(u.h)("h1",null,"Profile: ",e),Object(u.h)("p",null,"This is the user profile for a user named ",e,"."),Object(u.h)("div",null,"Current time: ",new Date(r).toLocaleString()),Object(u.h)("p",null,Object(u.h)("button",{onClick:function(){a(c+1)}},"Click Me")," Clicked ",c," ","times."))},A=n("ox/y"),L=n("bGx1"),E=function(){return Object(u.h)("div",{class:L.notfound},Object(u.h)("h1",null,"Error 404"),Object(u.h)("p",null,"That page doesn't exist."),Object(u.h)(A.Link,{href:"/"},Object(u.h)("h4",null,"Back to Home")))},S=n("ySiU"),M=function(){return Object(u.h)("header",{class:S.header},Object(u.h)("h1",null,"The ip-table"),Object(u.h)("nav",null,Object(u.h)(A.Link,{activeClassName:S.active,href:"/"},"Home"),Object(u.h)(A.Link,{activeClassName:S.active,href:"/profile"},"Me"),Object(u.h)(A.Link,{activeClassName:S.active,href:"/profile/john"},"John")))};var F=function(){return Object(u.h)("div",{id:"app"},Object(u.h)(M,null),Object(u.h)(c.Router,{onChange:function(t){t.url}},Object(u.h)(c.Route,{path:"/",component:P}),Object(u.h)(c.Route,{path:"/profile/",component:H,user:"me"}),Object(u.h)(c.Route,{path:"/profile/:user",component:H}),Object(u.h)(E,{default:!0})))};e.default=F},Y3FI:function(t,e,n){"use strict";n.r(e),n.d(e,"subscribers",(function(){return h})),n.d(e,"getCurrentUrl",(function(){return d})),n.d(e,"route",(function(){return b})),n.d(e,"Router",(function(){return k})),n.d(e,"Route",(function(){return x})),n.d(e,"Link",(function(){return C})),n.d(e,"exec",(function(){return u}));var r=n("HteQ"),o={};function i(t,e){for(var n in e)t[n]=e[n];return t}function u(t,e,n){var r,i=/(?:\?([^#]*))?(#.*)?$/,u=t.match(i),c={};if(u&&u[1])for(var a=u[1].split("&"),f=0;f<a.length;f++){var p=a[f].split("=");c[decodeURIComponent(p[0])]=decodeURIComponent(p.slice(1).join("="))}t=l(t.replace(i,"")),e=l(e||"");for(var s=Math.max(t.length,e.length),h=0;h<s;h++)if(e[h]&&":"===e[h].charAt(0)){var _=e[h].replace(/(^:|[+*?]+$)/g,""),d=(e[h].match(/[+*?]+$/)||o)[0]||"",b=~d.indexOf("+"),v=~d.indexOf("*"),m=t[h]||"";if(!m&&!v&&(d.indexOf("?")<0||b)){r=!1;break}if(c[_]=decodeURIComponent(m),b||v){c[_]=t.slice(h).map(decodeURIComponent).join("/");break}}else if(e[h]!==t[h]){r=!1;break}return(!0===n.default||!1!==r)&&c}function c(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function a(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,l(e).map(f).join(""));var e}(t),t.props}function l(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function f(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var p=null,s=[],h=[],_={};function d(){var t;return""+((t=p&&p.location?p.location:p&&p.getCurrentLocation?p.getCurrentLocation():"undefined"!=typeof location?location:_).pathname||"")+(t.search||"")}function b(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=s.length;e--;)if(s[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),p&&p[e]?p[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),v(t)}function v(t){for(var e=!1,n=0;n<s.length;n++)!0===s[n].routeTo(t)&&(e=!0);for(var r=h.length;r--;)h[r](t);return e}function m(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return b(e)}}function y(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return m(t.currentTarget||t.target||this),O(t)}function O(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function g(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(m(e))return O(t)}}while(e=e.parentNode)}}var j=!1;var k=function(t){function e(e){t.call(this,e),e.history&&(p=e.history),this.state={url:e.url||d()},j||("function"==typeof addEventListener&&(p||addEventListener("popstate",(function(){v(d())})),addEventListener("click",g)),j=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(r.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){s.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;p&&(this.unlisten=p.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),s.splice(s.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(a).sort(c).map((function(t){var o=u(e,t.props.path,t.props);if(o){if(!1!==n){var c={url:e,matches:o};return i(c,o),delete c.ref,delete c.key,Object(r.cloneElement)(t,c)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,o=t.onChange,i=e.url,u=this.getMatchingChildren(Object(r.toChildArray)(n),i,!0),c=u[0]||null,a=this.previousUrl;return i!==a&&(this.previousUrl=i,"function"==typeof o&&o({router:this,url:i,previous:a,active:u,current:c})),c},e}(r.Component),C=function(t){return Object(r.createElement)("a",i({onClick:y},t))},x=function(t){return Object(r.createElement)(t.component,t)};k.subscribers=h,k.getCurrentUrl=d,k.route=b,k.Router=k,k.Route=x,k.Link=C,k.exec=u,e.default=k},bGx1:function(t,e,n){t.exports={notfound:"notfound__3HqSM"}},"ox/y":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=n("HteQ"),i=n("Y3FI");function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var a=e.Match=function(t){function e(){var n,r;u(this,e);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=r=c(this,t.call.apply(t,[this].concat(i))),r.update=function(t){r.nextUrl=t,r.setState({})},c(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){i.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){i.subscribers.splice(i.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,i.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:e,path:n,matches:!1!==(0,i.exec)(n,t.path,{})})},e}(o.Component),l=function(t){var e=t.activeClassName,n=t.path,u=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["activeClassName","path"]);return(0,o.h)(a,{path:n||u.href},(function(t){var n=t.matches;return(0,o.h)(i.Link,r({},u,{class:[u.class||u.className,n&&e].filter(Boolean).join(" ")}))}))};e.Link=l,e.default=a,a.Link=l},ySiU:function(t,e,n){t.exports={header:"header__3QGkI",active:"active__3gItZ"}}});
//# sourceMappingURL=ssr-bundle.js.map