!function(e){function t(t){for(var o,a,s=t[0],c=t[1],d=t[2],p=0,u=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&u.push(n[a][0]),n[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(l&&l(t);u.length;)u.shift()();return i.push.apply(i,d||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],o=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var o={},n={0:0},i=[];function a(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=o,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(r,o,function(t){return e[t]}.bind(null,o));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=c;i.push([375,1]),r()}({350:function(e,t,r){var o=r(351);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,r(99).default)("5038ff28",o,!1,{})},351:function(e,t,r){(e.exports=r(98)(!1)).push([e.i,".draw-border{box-shadow:inset 0 0 0 4px #1a237e;color:#1a237e;transition:color .22s .07333s;position:relative}.draw-border::before,.draw-border::after{border:0 solid transparent;box-sizing:border-box;content:'';pointer-events:none;position:absolute;width:0;height:0;bottom:0;right:0}.draw-border::before{border-bottom-width:4px;border-left-width:4px}.draw-border::after{border-top-width:4px;border-right-width:4px}.draw-border:hover{color:#ad1457}.draw-border:hover::before,.draw-border:hover::after{border-color:#ad1457;transition:border-color 0s,width .22s,height .22s;width:100%;height:100%}.draw-border:hover::before{transition-delay:0s,0s,.22s}.draw-border:hover::after{transition-delay:0s,.22s,0s}.btn{background:none;border:none;cursor:pointer;line-height:1.5;font:400 1rem 'Roboto Slab', sans-serif;padding:1rem 1rem;letter-spacing:0.05rem;width:50px;height:50px}.btn:focus{outline:2px dotted #55d7dc}\n",""])},352:function(e,t,r){var o=r(353);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,r(99).default)("3610bde0",o,!1,{})},353:function(e,t,r){(e.exports=r(98)(!1)).push([e.i,'.sort{padding:2rem;margin:2rem 0;width:200px;color:#212121;font-size:1rem}.card-grid{display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:2rem}.card{padding:2rem;background:#F5F5F6;display:grid;grid-template-columns:repeat(3, 1fr);grid-gap:2rem;grid-template-areas:"title title title" "poster info info"}.card{box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);transition:all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)}.card:hover{box-shadow:0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22)}.poster{grid-area:poster;width:100%}.title{grid-area:title;margin:0px;align-self:center}.info{grid-area:info}@media only screen and (max-width: 1200px){.card-grid{display:grid;grid-template-columns:1fr 1fr;grid-gap:2rem}}@media only screen and (max-width: 768px){.card{padding:2rem;background:#F5F5F6;display:grid;grid-template-columns:1fr;grid-gap:2rem}.card-grid{display:grid;grid-template-columns:1fr;grid-gap:2rem}}\n',""])},356:function(e,t,r){var o=r(357);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,r(99).default)("fc3b0860",o,!1,{})},357:function(e,t,r){(t=e.exports=r(98)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Fira+Sans&display=swap);",""]),t.push([e.i,"@import url(https://fonts.googleapis.com/css?family=IBM+Plex+Mono:300,400&display=swap);",""]),t.push([e.i,'body{font-family:"Fira Sans",sans-serif;color:#212121;background:#E1E2E1;font-size:1.3rem;font-weight:300;margin:0}h2{background:#000051;color:#fafafa;padding:2rem;width:220px}.container{padding:5rem}.fade-enter-active,.fade-leave-active{position:absolute;transform:translateX(0px);transition:opacity .2s ease-out, transform .3s ease-out}.fade-enter,.fade-leave-to{position:absolute;opacity:0;transform:translateX(-50px)}.header{background:#1a237e;padding:1rem 2rem;margin:0;text-transform:uppercase}.header-container{display:flex}.logo{animation:color-change 3s infinite}.menu{margin-left:auto}.menu>a{color:#fafafa;text-decoration:none;margin:0 1rem;font-size:1rem;vertical-align:middle}@keyframes color-change{0%{color:#fafafa}33%{color:#e35183}66%{color:#78002e}100%{color:#fafafa}}\n',""])},375:function(e,t,r){"use strict";r.r(t);r(148);var o=r(50),n=r(100),i=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("MAIN PAGE")]),this._v(" "),t("MovieCards",{attrs:{pagetype:this.pagetype}})],1)};i._withStripped=!0;var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.Filter(e.MOVIES).length<1?r("Error",{attrs:{pagetype:this.pagetype}}):e._e(),e._v(" "),e.Filter(e.MOVIES).length>0?r("div",[r("button",{staticClass:"sort btn",on:{click:function(t){return e.Order()}}},[e.reversed?r("span",[e._v("Reverse Order")]):e._e(),e._v(" "),e.reversed?e._e():r("span",[e._v("Normalize Order")])]),e._v(" "),r("div",{staticClass:"card-grid"},e._l(e.Filter(e.MOVIES),(function(t){return r("div",{key:t.imdbID,staticClass:"card"},[r("img",{staticClass:"poster",attrs:{src:t.Poster}}),e._v(" "),r("h3",{staticClass:"title"},[e._v(e._s(t.Title))]),e._v(" "),r("div",{staticClass:"info"},[r("p",[e._v("Type: "+e._s(t.Type))]),e._v(" "),r("p",[e._v("Year: "+e._s(t.Year))]),e._v(" "),t.inFav?e._e():r("button",{staticClass:"btn draw-border",on:{click:function(r){return e.addToFavorites(t)}}},[e._v("+")]),e._v(" "),t.inFav?r("button",{staticClass:"btn draw-border",on:{click:function(r){return e.removeFromFavorites(t)}}},[e._v("-")]):e._e()])])})),0)]):e._e()],1)};a._withStripped=!0;r(350),r(352);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",["home"===e.pagetype?r("div",[r("h2",[e._v("404 ERROR MOVIES NOT FOUND")])]):e._e(),e._v(" "),"favorites"===e.pagetype?r("div",[r("h2",[e._v("No Movies in favorites")]),e._v(" "),r("p",[e._v("But don't worry u can add movie on "),r("router-link",{attrs:{to:"/"}},[e._v("Main Page")])],1)]):e._e()])};s._withStripped=!0;var c={props:{pagetype:String}},d=r(19),l=Object(d.a)(c,s,[],!1,null,null,null);l.options.__file="src/components/pages/Error.vue";var p=l.exports,u=r(56);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m={components:{Error:p},data:function(){return{reversed:!1}},props:{pagetype:String},created:function(){this.reversed=this.$store.state.movies.order},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},Object(u.b)({MOVIES:"MOVIES"})),methods:{Order:function(){this.$store.commit("REVERSE_ORDER"),this.reversed=this.$store.state.movies.order},Filter:function(e){var t=this,r=e.filter((function(e){return t.$store.state.movies.favorites.includes(e.imdbID)}));return"home"===this.pagetype?this.$store.state.movies.order?e:e.slice().reverse():this.$store.state.movies.order?r:r.slice().reverse()},addToFavorites:function(e){this.$store.commit("ADD_TO_FAVORITES",e.imdbID)},removeFromFavorites:function(e){this.$store.commit("REMOVE_FROM_FAVORITES",e.imdbID)}}},h=Object(d.a)(m,a,[],!1,null,null,null);h.options.__file="src/components/pages/MovieCards.vue";var g=h.exports,b={data:function(){return{pagetype:"home"}},components:{MovieCards:g}},_=Object(d.a)(b,i,[],!1,null,null,null);_.options.__file="src/pages/Home.vue";var y=_.exports,w=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("Favorites")]),this._v(" "),t("MovieCards",{attrs:{pagetype:this.pagetype}})],1)};w._withStripped=!0;var O={name:"Favorites",components:{MovieCards:g},data:function(){return{pagetype:"favorites"}}},x=Object(d.a)(O,w,[],!1,null,null,null);x.options.__file="src/pages/Favorite.vue";var E=x.exports;o.a.use(n.a);var S=[{path:"*",component:y},{path:"/favorite",component:E}],F=new n.a({routes:S}),M=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Header"),this._v(" "),t("div",{staticClass:"container"},[t("transition",{attrs:{name:"fade"}},[t("RouterView")],1)],1)],1)};M._withStripped=!0;r(356);var j=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header"},[t("div",{staticClass:"header-container"},[t("div",{staticClass:"logo"},[this._v("Cold's Test")]),this._v(" "),t("div",{staticClass:"menu"},[t("router-link",{attrs:{to:"/"}},[this._v("Main Page")]),this._v(" "),t("router-link",{attrs:{to:"/favorite"}},[this._v("Favorite")])],1)])])};j._withStripped=!0;var I=Object(d.a)({},j,[],!1,null,null,null);I.options.__file="src/components/widgets/Header.vue";var R={components:{Header:I.exports},created:function(){this.$store.dispatch("GET_MOVIES")}},P=Object(d.a)(R,M,[],!1,null,null,null);P.options.__file="src/App.vue";var k=P.exports,V=r(146),C=r.n(V);function T(e,t,r,o,n,i,a){try{var s=e[i](a),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(o,n)}var D,$,A={state:{list:[],favorites:[],order:!0,pagecounter:1},getters:{MOVIES:function(e){return e.list}},mutations:{SET_MOVIES:function(e,t){t.forEach((function(t){return e.favorites.includes(t.imdbID)?t.inFav=!0:t.inFav=!1})),e.list=t},REVERSE_ORDER:function(e){e.order=!e.order},ADD_TO_FAVORITES:function(e,t){e.list[e.list.findIndex((function(e){return e.imdbID===t}))].inFav=!0,e.favorites.push(t)},REMOVE_FROM_FAVORITES:function(e,t){var r=e.favorites.findIndex((function(e){return e===t}));e.favorites.splice(r,1),e.list[e.list.findIndex((function(e){return e.imdbID===t}))].inFav=!1}},actions:{GET_MOVIES:(D=regeneratorRuntime.mark((function e(t){var r,o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,r=[],o=1;case 3:if(!(o<11)){e.next=11;break}return e.next=6,C.a.get("".concat("http://www.omdbapi.com","/").concat("?s=love&type=movie&apikey=6a673701&page=").concat(o));case 6:n=e.sent,r=r.concat(n.data.Search),o++,e.next=3;break;case 11:t.commit("SET_MOVIES",r),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})),$=function(){var e=this,t=arguments;return new Promise((function(r,o){var n=D.apply(e,t);function i(e){T(n,r,o,i,a,"next",e)}function a(e){T(n,r,o,i,a,"throw",e)}i(void 0)}))},function(e){return $.apply(this,arguments)})}},z=r(147);o.a.use(u.a);var N=new u.a.Store({state:{},getters:{},mutations:{},actions:{},modules:{movies:A},plugins:[Object(z.a)({paths:["movies.favorites"]})]});r(374);new o.a({router:F,store:N,render:function(e){return e(k)}}).$mount("#app")}});