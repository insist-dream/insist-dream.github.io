(function(t){function e(e){for(var a,o,l=e[0],s=e[1],u=e[2],c=0,p=[];c<l.length;c++)o=l[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);f&&f(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},r={app:0},i=[];function o(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"6c290de5"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=o(t);var u=new Error;i=function(e){s.onerror=s.onload=null,clearTimeout(c);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,n[1](u)}r[t]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"content"},[n("router-view")],1)])},i=[],o={name:"app"},l=o,s=(n("034f"),n("2877")),u=Object(s["a"])(l,r,i,!1,null,null,null),c=u.exports,f=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("transition",{attrs:{name:"el-zoom-in-top"}},[t.begin_show?n("div",{staticClass:"begin"},[n("div",{staticClass:"hint"},t._l(t.hint,(function(e,a){return n("span",{key:a,class:{"hint-show":e.show}},[t._v(t._s(e.text))])})),0),n("transition",{attrs:{name:"el-fade-in-linear"}},[t.begin_btn_show?n("el-button",{attrs:{type:"success",size:"medium"},on:{click:t.begin}},[t._v("开始选号")]):t._e()],1)],1):t._e()]),n("transition",{attrs:{name:"el-zoom-in-top"}},[t.top_show?n("div",{staticClass:"top"},[n("el-form",{attrs:{inline:!0,model:t.formInline}},[n("el-form-item",{attrs:{label:"选择类型"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.formInline.type,callback:function(e){t.$set(t.formInline,"type",e)},expression:"formInline.type"}},t._l(t.options,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value,disabled:t.disabled}})})),1)],1),n("transition",{attrs:{name:"el-zoom-in-top"}},[""!=t.formInline.type?n("el-form-item",{attrs:{label:"选择注数"}},[n("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:t.formInline.number,callback:function(e){t.$set(t.formInline,"number",e)},expression:"formInline.number"}},t._l(100,(function(t,e){return n("el-option",{key:e,attrs:{label:t,value:t}})})),1)],1):t._e()],1),n("transition",{attrs:{name:"el-zoom-in-top"}},[3==t.formInline.type?n("el-form-item",{attrs:{label:"选择玩法"}},[n("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:t.formInline.happy_type,callback:function(e){t.$set(t.formInline,"happy_type",e)},expression:"formInline.happy_type"}},t._l(10,(function(t,e){return n("el-option",{key:e,attrs:{label:"选"+t,value:t}})})),1)],1):t._e()],1),n("transition",{attrs:{name:"el-zoom-in-top"}},[""!=t.formInline.type?n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.top_confirm}},[t._v("确定")])],1):t._e()],1)],1)],1):t._e()]),n("transition",{attrs:{name:"el-fade-in-linear"}},[t.section_show?n("div",{staticClass:"section"},[n("transition",{attrs:{name:"el-fade-in-linear"}},[1==t.check_data.type?n("div",{staticClass:"section-item"},[n("transition-group",{attrs:{name:"list",tag:"div"}},t._l(t.big_all,(function(e,a){return n("div",{key:a},[n("transition-group",{staticClass:"list",attrs:{name:"ele",tag:"div"}},[t._l(e.left,(function(e,a){return n("div",{key:"left"+a,staticClass:"ele"},[t._v(" "+t._s(t._f("capitalize")(e))+" ")])})),t._l(e.right,(function(e,a){return n("div",{key:a,staticClass:"ele blue"},[t._v(" "+t._s(t._f("capitalize")(e))+" ")])}))],2)],1)})),0)],1):t._e()]),n("transition",{attrs:{name:"el-fade-in-linear"}},[2==t.check_data.type?n("div",{staticClass:"section-item"},[n("transition-group",{attrs:{name:"list",tag:"div"}},t._l(t.double_all,(function(e,a){return n("div",{key:a},[n("transition-group",{staticClass:"list",attrs:{name:"ele",tag:"div"}},[t._l(e.left,(function(e,a){return n("div",{key:"left"+a,staticClass:"ele"},[t._v(" "+t._s(t._f("capitalize")(e))+" ")])})),t._l(e.right,(function(e,a){return n("div",{key:a,staticClass:"ele blue"},[t._v(" "+t._s(t._f("capitalize")(e))+" ")])}))],2)],1)})),0)],1):t._e()]),n("transition",{attrs:{name:"el-fade-in-linear"}},[3==t.check_data.type?n("div",{staticClass:"section-item"},[n("div",{staticClass:"left"},[n("transition-group",{attrs:{name:"list",tag:"div"}},t._l(t.happy_all,(function(e,a){return n("div",{key:a},[n("transition-group",{staticClass:"list",attrs:{name:"ele",tag:"div"}},t._l(e,(function(e,a){return n("div",{key:a,staticClass:"ele"},[t._v(" "+t._s(t._f("capitalize")(e))+" ")])})),0)],1)})),0)],1)]):t._e()])],1):t._e()])],1)},d=[],h=n("2909"),m=n("5530"),_=(n("ac1f"),n("1276"),n("4e82"),n("fb6a"),{name:"Home",data:function(){return{begin_show:!0,begin_btn_show:!1,top_show:!1,section_show:!1,hint:[],formInline:{type:"",happy_type:9,number:5},check_data:{},options:[{value:1,label:"大乐透"},{value:2,label:"双色球"},{value:3,label:"快乐8"}],happy_all:[],double_all:[],big_all:[]}},created:function(){this.hintArr("这次肯定中，别急!!!")},filters:{capitalize:function(t){return t>=10?t:"0".concat(t)}},methods:{hintArr:function(t){for(var e=this,n=t.split(""),a=function(t){setTimeout((function(){e.hint.push({text:n[t],show:!0})}),250*(t+1))},r=0;r<=n.length;r++)a(r);setTimeout((function(){e.begin_btn_show=!0}),250*(n.length+1))},begin:function(){var t=this;this.begin_show=!1,setTimeout((function(){t.top_show=!0}),300)},top_confirm:function(){switch(this.section_show=!0,this.check_data=Object(m["a"])({},this.formInline),this.check_data.type){case 1:this.big_all=Object(h["a"])(this.big_play());break;case 2:this.double_all=Object(h["a"])(this.double_play());break;case 3:this.happy_all=Object(h["a"])(this.happy_play());break}},happy_play:function(){for(var t=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],e=[],n=0;n<this.check_data.number;n++){var a=this.getRandomArrayElements(t,this.check_data.happy_type);a.sort((function(t,e){return t-e})),e.push(a)}return e},double_play:function(){for(var t=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],e=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],n=[],a=0;a<this.check_data.number;a++){var r=this.getRandomArrayElements(t,6);r.sort((function(t,e){return t-e}));var i=this.getRandomArrayElements(e,1);i.sort((function(t,e){return t-e})),n.push({left:r,right:i})}return n},big_play:function(){for(var t=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],e=[1,2,3,4,5,6,7,8,9,10,11,12],n=[],a=0;a<this.check_data.number;a++){var r=this.getRandomArrayElements(t,5);r.sort((function(t,e){return t-e}));var i=this.getRandomArrayElements(e,2);i.sort((function(t,e){return t-e})),n.push({left:r,right:i})}return n},getRandomArrayElements:function(t,e){var n,a,r=t.slice(0),i=t.length,o=i-e;while(i-- >o)a=Math.floor((i+1)*Math.random()),n=r[a],r[a]=r[i],r[i]=n;return r.slice(o)}}}),b=_,v=(n("e69c"),Object(s["a"])(b,p,d,!1,null,"03f77661",null)),y=v.exports;a["default"].use(f["a"]);var g=[{path:"/",name:"Home",component:y},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],k=new f["a"]({routes:g}),w=k,C=n("2f62");a["default"].use(C["a"]);var j=new C["a"].Store({state:{},mutations:{},actions:{},modules:{}}),O=n("5c96"),I=n.n(O);n("0fae");a["default"].use(I.a);n("450d");a["default"].config.productionTip=!1,new a["default"]({router:w,store:j,render:function(t){return t(c)}}).$mount("#app")},"85ec":function(t,e,n){},bd10:function(t,e,n){},e69c:function(t,e,n){"use strict";n("bd10")}});
//# sourceMappingURL=app.feeee4f0.js.map