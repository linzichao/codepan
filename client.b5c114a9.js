webpackJsonp([16],[,,,,,,,,,,,,,,,function(n,t,e){"use strict";function r(n){return function(){var t=n.apply(this,arguments);return new Promise(function(n,e){function r(o,a){try{var u=t[o](a),i=u.value}catch(n){return void e(n)}if(!u.done)return Promise.resolve(i).then(function(n){r("next",n)},function(n){r("throw",n)});n(i)}return r("next")})}}function o(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}e.d(t,"a",function(){return l}),e.d(t,"c",function(){return h}),e.d(t,"b",function(){return d}),e.d(t,"d",function(){return v});var a=e(1),u=e.n(a),i=e(4),s=e.n(i),c=function(){function n(n,t){var e=[],r=!0,o=!1,a=void 0;try{for(var u,i=n[Symbol.iterator]();!(r=(u=i.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(n){o=!0,a=n}finally{try{!r&&i.return&&i.return()}finally{if(o)throw a}}return e}return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(){function n(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}(),l=function(){var n=r(u.a.mark(function n(){var t,r,o,a;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(v.get("babel")){n.next=11;break}return s.a.start(),n.next=4,Promise.all([e.e(1).then(e.bind(null,61)),e.e(1).then(e.bind(null,62))]);case 4:t=n.sent,r=c(t,2),o=r[0],a=r[1],v.set("babel",o),v.set("VuePreset",a),s.a.done();case 11:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),h=function(){var n=r(u.a.mark(function n(){var t;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(v.get("pug")){n.next=7;break}return s.a.start(),n.next=4,Promise.all([e.e(14).then(e.bind(null,63)),e.e(3).then(e.bind(null,64))]);case 4:t=n.sent,v.set("pug",t[0]),s.a.done();case 7:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),d=function(){var n=r(u.a.mark(function n(){var t,r,o;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(v.get("markdown")){n.next=9;break}return s.a.start(),n.next=4,Promise.all([e.e(5).then(e.bind(null,65)).then(function(n){return n.default}),e.e(4).then(e.bind(null,66))]);case 4:t=n.sent,r=c(t,1),o=r[0],v.set("markdown",o),s.a.done();case 9:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),p=function(){function n(){o(this,n),this.map={}}return f(n,[{key:"set",value:function(n,t){this.map[n]=t}},{key:"get",value:function(n){return this.map[n]}}]),n}(),v=new p},function(n,t,e){e(17),n.exports=e(19)},,,function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(e(20),e(3)),o=e(24),a=e(29),u=e(33);new r.default({el:"#app",router:a.a,store:u.a,render:function(n){return n(o.a)}})},function(n,t,e){"use strict";var r=e(21),o=e.n(r);window.Promise||(window.Promise=o.a),Object.assign=e(14)},,,,function(n,t,e){"use strict";function r(n){e(25),e(26)}var o=e(27),a=e(28),u=e(12),i=r,s=u(o.a,a.a,i,null,null);t.a=s.exports},,function(n,t){},function(n,t,e){"use strict";t.a={name:"app"}},function(n,t,e){"use strict";var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},o=[],a={render:r,staticRenderFns:o};t.a=a},function(n,t,e){"use strict";var r=e(3),o=e(30),a=e(4),u=e.n(a);r.default.use(o.a);var i=function(){return e.e(2).then(e.bind(null,60))},s=new o.a({routes:[{name:"home",path:"/",component:i},{name:"gist",path:"/gist/:gist",component:i},{name:"boilerplate",path:"/boilerplate/:boilerplate",component:i}]});s.beforeEach(function(n,t,e){u.a.start(),e()}),t.a=s},,,,function(n,t,e){"use strict";function r(n){return function(){var t=n.apply(this,arguments);return new Promise(function(n,e){function r(o,a){try{var u=t[o](a),i=u.value}catch(n){return void e(n)}if(!u.done)return Promise.resolve(i).then(function(n){r("next",n)},function(n){r("throw",n)});n(i)}return r("next")})}}var o=e(1),a=e.n(o),u=e(3),i=e(13),s=e(15),c=e(4),f=e.n(c),l=e(34),h=e.n(l),d=e(53),p=e.n(d),v=this;u.default.use(i.a);var m=["html","css","js","console","output"],y=function(n){return n.sort(function(n,t){return m.indexOf(n)>m.indexOf(t)})},b=function(){return{js:{code:"",transformer:"js"},css:{code:"",transformer:"css"},html:{code:"",transformer:"html"}}},w={empty:function(){function n(){return t.apply(this,arguments)}var t=r(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object.assign({},b(),{showPans:["html","js","output"]}));case 1:case"end":return n.stop()}},n,v)}));return n}()};(function(n){n.keys().forEach(function(t){var e=/^\.\/(.+)\//.exec(t)[1];w[e]=n(t).default})})(e(54));var x=new i.a.Store({state:Object.assign({},b(),{logs:[],visiblePans:["html","js","output"],activePan:"js"}),mutations:{UPDATE_CODE:function(n,t){var e=t.type,r=t.code;n[e].code=r},UPDATE_TRANSFORMER:function(n,t){var e=t.type,r=t.transformer;n[e].transformer=r},ADD_LOG:function(n,t){n.logs.push(t)},CLEAR_LOGS:function(n){n.logs=[]},TOGGLE_PAN:function(n,t){var e=n.visiblePans,r=e.indexOf(t);-1===r?e.push(t):e.splice(r,1),n.visiblePans=y(e)},SHOW_PANS:function(n,t){n.visiblePans=y(t)},ACTIVE_PAN:function(n,t){n.activePan=t}},actions:{updateCode:function(n,t){(0,n.commit)("UPDATE_CODE",t)},updateError:function(n,t){(0,n.commit)("UPDATE_ERROR",t)},addLog:function(n,t){(0,n.commit)("ADD_LOG",t)},clearLogs:function(n){(0,n.commit)("CLEAR_LOGS")},setActivePan:function(n,t){(0,n.commit)("ACTIVE_PAN",t)},togglePan:function(n,t){(0,n.commit)("TOGGLE_PAN",t)},showPans:function(n,t){(0,n.commit)("SHOW_PANS",t)},updateTransformer:function(){function n(n,e){return t.apply(this,arguments)}var t=r(a.a.mark(function n(t,e){var r=t.commit,o=e.type,u=e.transformer;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if("babel"!==u&&"jsx"!==u&&"vue-jsx"!==u){n.next=5;break}return n.next=3,s.a();case 3:n.next=13;break;case 5:if("pug"!==u){n.next=10;break}return n.next=8,s.c();case 8:n.next=13;break;case 10:if("markdown"!==u){n.next=13;break}return n.next=13,s.b();case 13:r("UPDATE_TRANSFORMER",{type:o,transformer:u});case 14:case"end":return n.stop()}},n,this)}));return n}(),setBoilerplate:function(){function n(n,e){return t.apply(this,arguments)}var t=r(a.a.mark(function n(t,e){var r,o,u,i=t.dispatch;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(f.a.start(),"string"!=typeof e){n.next=5;break}return n.next=4,w[e]();case 4:e=n.sent;case 5:r=[];for(o in e)-1!==["html","js","css"].indexOf(o)?(u=e[o],void 0!==u.code&&r.push(i("updateCode",{type:o,code:u.code})),void 0!==u.transformer&&r.push(i("updateTransformer",{type:o,transformer:u.transformer}))):"showPans"===o&&r.push(i("showPans",e.showPans));return r.push(i("setActivePan",e.activePan||"js")),r.push(i("clearLogs")),n.next=11,Promise.all(r);case 11:f.a.done();case 12:case"end":return n.stop()}},n,this)}));return n}(),setGist:function(){function n(n,e){return t.apply(this,arguments)}var t=r(a.a.mark(function n(t,e){var r,o,u,i,s,c,f,l=(t.commit,t.dispatch);return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.a.get("https://api.github.com/gists/"+e);case 2:for(r=n.sent,o=r.data.files,u=Object.assign({html:{},css:{},js:{}},o["index.js"]?p.a(o["index.js"].content):{}),i=["html","js","css"],s=0;s<i.length;s++)c=i[s],u[c].code||(f=u[c].filename||"codepan."+c,o[f]&&(u[c].code=o[f].content));return n.next=9,l("setBoilerplate",u);case 9:case"end":return n.stop()}},n,this)}));return n}()}});t.a=x},,,,,,,,,,,,,,,,,,,,,function(n,t,e){function r(n){return e(o(n))}function o(n){var t=a[n];if(!(t+1))throw new Error("Cannot find module '"+n+"'.");return t}var a={"./preact/index.js":55,"./react/index.js":56,"./rxjs/index.js":57,"./vue-jsx/index.js":58,"./vue/index.js":59};r.keys=function(){return Object.keys(a)},r.resolve=o,n.exports=r,r.id=54},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(1),o=e.n(r),a=this,u=function(){function n(n,t){var e=[],r=!0,o=!1,a=void 0;try{for(var u,i=n[Symbol.iterator]();!(r=(u=i.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(n){o=!0,a=n}finally{try{!r&&i.return&&i.return()}finally{if(o)throw a}}return e}return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.default=function(n){return function(){var t=n.apply(this,arguments);return new Promise(function(n,e){function r(o,a){try{var u=t[o](a),i=u.value}catch(n){return void e(n)}if(!u.done)return Promise.resolve(i).then(function(n){r("next",n)},function(n){r("throw",n)});n(i)}return r("next")})}}(o.a.mark(function n(){var t,r,i,s;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(13).then(e.bind(null,67)),e.e(12).then(e.bind(null,68))]);case 2:return t=n.sent,r=u(t,2),i=r[0],s=r[1],n.abrupt("return",{html:{code:i,transformer:"html"},js:{code:s,transformer:"jsx"},showPans:["js","output"]});case 7:case"end":return n.stop()}},n,a)}))},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(1),o=e.n(r),a=this,u=function(){function n(n,t){var e=[],r=!0,o=!1,a=void 0;try{for(var u,i=n[Symbol.iterator]();!(r=(u=i.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(n){o=!0,a=n}finally{try{!r&&i.return&&i.return()}finally{if(o)throw a}}return e}return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.default=function(n){return function(){var t=n.apply(this,arguments);return new Promise(function(n,e){function r(o,a){try{var u=t[o](a),i=u.value}catch(n){return void e(n)}if(!u.done)return Promise.resolve(i).then(function(n){r("next",n)},function(n){r("throw",n)});n(i)}return r("next")})}}(o.a.mark(function n(){var t,r,i,s;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(11).then(e.bind(null,69)),e.e(10).then(e.bind(null,70))]);case 2:return t=n.sent,r=u(t,2),i=r[0],s=r[1],n.abrupt("return",{html:{code:i,transformer:"html"},js:{code:s,transformer:"jsx"},showPans:["js","output"]});case 7:case"end":return n.stop()}},n,a)}))},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(1),o=e.n(r),a=this,u=function(){function n(n,t){var e=[],r=!0,o=!1,a=void 0;try{for(var u,i=n[Symbol.iterator]();!(r=(u=i.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(n){o=!0,a=n}finally{try{!r&&i.return&&i.return()}finally{if(o)throw a}}return e}return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.default=function(n){return function(){var t=n.apply(this,arguments);return new Promise(function(n,e){function r(o,a){try{var u=t[o](a),i=u.value}catch(n){return void e(n)}if(!u.done)return Promise.resolve(i).then(function(n){r("next",n)},function(n){r("throw",n)});n(i)}return r("next")})}}(o.a.mark(function n(){var t,r,i,s;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(9).then(e.bind(null,71)),e.e(8).then(e.bind(null,72))]);case 2:return t=n.sent,r=u(t,2),i=r[0],s=r[1],n.abrupt("return",{js:{code:s,transformer:"js"},html:{code:i,transformer:"html"},showPans:["js","console"]});case 7:case"end":return n.stop()}},n,a)}))},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(1),o=e.n(r),a=this,u=function(){function n(n,t){var e=[],r=!0,o=!1,a=void 0;try{for(var u,i=n[Symbol.iterator]();!(r=(u=i.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(n){o=!0,a=n}finally{try{!r&&i.return&&i.return()}finally{if(o)throw a}}return e}return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.default=function(n){return function(){var t=n.apply(this,arguments);return new Promise(function(n,e){function r(o,a){try{var u=t[o](a),i=u.value}catch(n){return void e(n)}if(!u.done)return Promise.resolve(i).then(function(n){r("next",n)},function(n){r("throw",n)});n(i)}return r("next")})}}(o.a.mark(function n(){var t,r,i,s,c;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(0).then(e.bind(null,73)),e.e(0).then(e.bind(null,74)),e.e(0).then(e.bind(null,75))]);case 2:return t=n.sent,r=u(t,3),i=r[0],s=r[1],c=r[2],n.abrupt("return",{js:{code:s,transformer:"vue-jsx"},html:{code:i,transformer:"html"},css:{code:c,transformer:"css"},showPans:["js","output"]});case 8:case"end":return n.stop()}},n,a)}))},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(1),o=e.n(r),a=this,u=function(){function n(n,t){var e=[],r=!0,o=!1,a=void 0;try{for(var u,i=n[Symbol.iterator]();!(r=(u=i.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(n){o=!0,a=n}finally{try{!r&&i.return&&i.return()}finally{if(o)throw a}}return e}return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.default=function(n){return function(){var t=n.apply(this,arguments);return new Promise(function(n,e){function r(o,a){try{var u=t[o](a),i=u.value}catch(n){return void e(n)}if(!u.done)return Promise.resolve(i).then(function(n){r("next",n)},function(n){r("throw",n)});n(i)}return r("next")})}}(o.a.mark(function n(){var t,r,i,s;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(7).then(e.bind(null,76)),e.e(6).then(e.bind(null,77))]);case 2:return t=n.sent,r=u(t,2),i=r[0],s=r[1],n.abrupt("return",{js:{code:s,transformer:"vue-jsx"},html:{code:i,transformer:"html"},showPans:["html","js","output"]});case 7:case"end":return n.stop()}},n,a)}))}],[16]);