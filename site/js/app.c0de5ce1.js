(function(e){function t(t){for(var o,c,a=t[0],s=t[1],u=t[2],d=0,h=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&h.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);l&&l(t);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},i=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21bb":function(e,t,n){"use strict";var o=n("2dad"),r=n.n(o);r.a},"2dad":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-100",attrs:{id:"app"}},[n("router-view")],1)},i=[],c=(n("5c0b"),n("2877")),a={},s=Object(c["a"])(a,r,i,!1,null,null,null),u=s.exports,l=n("9483");Object(l["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var d=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"main",staticClass:"home h-100"},[n("div",{staticClass:"row h-100"},[n("div",{staticClass:"col-8"},[e.isMounted&&e.videos.length>e.current?n("youtube-media",{attrs:{"video-id":e.videos[e.current],"player-width":"100%","player-height":e.height,"player-vars":{autoplay:1},mute:!0}}):e._e()],1),n("div",{ref:"right",staticClass:"col-4 p-0"},e._l(e.videos,(function(t,o){return n("div",{key:t,staticClass:"w-100"},[t&&o!=e.current?n("div",{staticClass:"right-vid-tool",style:e.toolStyle(),on:{click:function(t){e.current=o}}},[n("i",{staticClass:"fas fa-chevron-left pl-1"})]):e._e(),e.isMounted&&t&&o!=e.current?n("youtube-media",{staticClass:"right-vid",attrs:{"video-id":t,"player-width":e.rightWidth-21,"player-height":e.miniHeight(),"player-vars":{autoplay:1},mute:!0}}):e._e()],1)})),0)])])},f=[],p=n("f6dd"),v={name:"Home",components:{},data:function(){return{videoId:"",videos:[],height:480,width:360,rightWidth:200,isMounted:!1,current:0}},created:function(){var e=this.videos;e.push(Object(p["b"])("https://www.youtube.com/watch?v=Ky5l9ZxsG9M")),e.push(Object(p["b"])("https://www.youtube.com/watch?v=CQJInT3-_-s")),e.push(Object(p["b"])("https://www.youtube.com/watch?v=ZCKpMjrlWfY")),e.push(Object(p["b"])("https://www.youtube.com/watch?v=QsfTL-Wr9LE")),e.push(Object(p["b"])("https://www.youtube.com/watch?v=n5ozYnVQahE"))},mounted:function(){var e=this;this.$nextTick((function(){e.height=e.$refs.main.clientHeight,e.width=e.$refs.main.clientWidth,e.rightWidth=e.$refs.right.clientWidth,console.log(e.rightWidth),e.isMounted=!0}))},methods:{toolStyle:function(){return{height:this.miniHeight(0)+"px"}},miniHeight:function(e){void 0===e&&(e=4);var t=this.height,n=this.videos.length-1,o=parseInt(t/n)-e,r=o;while(r*n>t&&r>0)r--;return r&&(o=r),o}}},b=v,w=(n("21bb"),Object(c["a"])(b,h,f,!1,null,null,null)),g=w.exports;o["a"].use(d["a"]);var m=[{path:"/",name:"Home",component:g}],y=new d["a"]({mode:"history",base:"/",routes:m}),j=y,O=n("2f62");o["a"].use(O["a"]);var _=new O["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["a"].use(p["a"],{global:!0,componentId:"youtube-media"}),o["a"].config.productionTip=!1,function(){var e=document.createElement("script");e.setAttribute("src","https://www.youtube.com/iframe_api"),document.head.appendChild(e)}(),new o["a"]({router:j,store:_,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.c0de5ce1.js.map