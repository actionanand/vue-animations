(function(e){function t(t){for(var r,c,i=t[0],u=t[1],l=t[2],b=0,f=[];b<i.length;b++)c=i[b],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-animations/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a1e":function(e,t,n){"use strict";n("7fc0")},"0cff":function(e,t,n){},"0e17":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"container"},o={class:"container"},c={class:"container"},i={key:0},u={class:"container"},l=Object(r["i"])("p",null,"This is a test dialog!",-1),s={class:"container"};function b(e,t,n,b,f,d){var p=Object(r["C"])("router-view"),j=Object(r["C"])("list-data"),O=Object(r["C"])("base-modal");return Object(r["u"])(),Object(r["h"])(r["a"],null,[Object(r["k"])(p,null,{default:Object(r["I"])((function(e){return[Object(r["k"])(r["b"],{name:"route",mode:"out-in"},{default:Object(r["I"])((function(){return[(Object(r["u"])(),Object(r["f"])(Object(r["D"])(e.Component)))]})),_:2},1024)]})),_:1}),Object(r["i"])("div",a,[Object(r["k"])(j)]),Object(r["i"])("div",o,[Object(r["i"])("div",{class:Object(r["q"])(["block",{animate:f.isBlockAnimated}])},null,2),Object(r["i"])("button",{onClick:t[0]||(t[0]=function(){return d.animateBlock&&d.animateBlock.apply(d,arguments)})},"Animate")]),Object(r["i"])("div",c,[Object(r["k"])(r["b"],{name:"para",css:!1,onBeforeEnter:d.paraBeforeEnter,onEnter:d.paraEnter,onAfterEnter:d.paraAfterEnter,onBeforeLeave:d.paraBeforeLeave,onLeave:d.paraLeave,onAfterLeave:d.paraAfterLeave,onEnterCancelled:d.paraEnterCancelled,onLeaveCancelled:d.paraLeaveCancelled},{default:Object(r["I"])((function(){return[f.isParaVisible?(Object(r["u"])(),Object(r["h"])("p",i,"This is only sometimes visible!")):Object(r["g"])("",!0)]})),_:1},8,["onBeforeEnter","onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave","onEnterCancelled","onLeaveCancelled"]),Object(r["i"])("button",{onClick:t[1]||(t[1]=function(){return d.togglePara&&d.togglePara.apply(d,arguments)})},"Toggle Paragraph")]),Object(r["i"])("div",u,[Object(r["k"])(r["b"],{name:"button",mode:"out-in"},{default:Object(r["I"])((function(){return[f.areUsersVisible?(Object(r["u"])(),Object(r["h"])("button",{key:1,onClick:t[3]||(t[3]=function(){return d.hideUsers&&d.hideUsers.apply(d,arguments)})},"Hide Users")):(Object(r["u"])(),Object(r["h"])("button",{key:0,onClick:t[2]||(t[2]=function(){return d.showUsers&&d.showUsers.apply(d,arguments)})},"Show Users"))]})),_:1})]),Object(r["k"])(O,{onClose:d.hideDialog,open:f.dialogIsVisible},{default:Object(r["I"])((function(){return[l,Object(r["i"])("button",{onClick:t[4]||(t[4]=function(){return d.hideDialog&&d.hideDialog.apply(d,arguments)})},"Close it!")]})),_:1},8,["onClose","open"]),Object(r["i"])("div",s,[Object(r["i"])("button",{onClick:t[5]||(t[5]=function(){return d.showDialog&&d.showDialog.apply(d,arguments)})},"Show Dialog")])],64)}var f=function(e){return Object(r["x"])("data-v-32073251"),e=e(),Object(r["v"])(),e},d=["onClick"],p=f((function(){return Object(r["i"])("br",null,null,-1)})),j=f((function(){return Object(r["i"])("br",null,null,-1)}));function O(e,t,n,a,o,c){return Object(r["u"])(),Object(r["h"])(r["a"],null,[Object(r["k"])(r["c"],{tag:"ul",name:"user-list"},{default:Object(r["I"])((function(){return[(Object(r["u"])(!0),Object(r["h"])(r["a"],null,Object(r["A"])(o.users,(function(e){return Object(r["u"])(),Object(r["h"])("li",{key:e,onClick:function(t){return c.removeUser(e)}},Object(r["F"])(e),9,d)})),128))]})),_:1}),Object(r["i"])("div",null,[Object(r["i"])("input",{type:"text",ref:"userName",onKeydown:t[0]||(t[0]=Object(r["J"])((function(){return c.addUser&&c.addUser.apply(c,arguments)}),["enter"]))},null,544),p,j,Object(r["i"])("button",{onClick:t[1]||(t[1]=function(){return c.addUser&&c.addUser.apply(c,arguments)})},"Add User")])],64)}n("4de4"),n("d3b7"),n("498a");var v={data:function(){return{users:["Raja","Rahul","Julie","Prem","Anjela"]}},methods:{removeUser:function(e){this.users=this.users.filter((function(t){return t!==e}))},addUser:function(){var e=this.$refs.userName.value.trim();this.$refs.userName.value="",""!==e&&this.users.unshift(e)}}},h=(n("585a"),n("6b0d")),m=n.n(h);const g=m()(v,[["render",O],["__scopeId","data-v-32073251"]]);var y=g,k={components:{ListData:y},data:function(){return{dialogIsVisible:!1,isBlockAnimated:!1,isParaVisible:!1,areUsersVisible:!1,enterInterval:null,leaveInterval:null}},methods:{animateBlock:function(){this.isBlockAnimated=!0},showDialog:function(){this.dialogIsVisible=!0},hideDialog:function(){this.dialogIsVisible=!1},togglePara:function(){this.isParaVisible=!this.isParaVisible},showUsers:function(){this.areUsersVisible=!0},hideUsers:function(){this.areUsersVisible=!1},paraBeforeEnter:function(e){e.style.opacity=0},paraEnter:function(e,t){var n=this,r=1;this.enterInterval=setInterval((function(){e.style.opacity=.1*r,r++,r>10&&(clearInterval(n.enterInterval),t())}),20)},paraAfterEnter:function(e){console.log(e)},paraBeforeLeave:function(e){e.style.opacity=1},paraLeave:function(e,t){var n=this,r=1;this.leaveInterval=setInterval((function(){e.style.opacity=1-.1*r,r++,r>10&&(clearInterval(n.leaveInterval),t())}),20)},paraAfterLeave:function(e){console.log(e)},paraEnterCancelled:function(e){console.log(e),clearInterval(this.enterInterval)},paraLeaveCancelled:function(e){console.log(e),clearInterval(this.leaveInterval)}}};n("71f0");const I=m()(k,[["render",b]]);var C=I,_={key:0,open:""};function U(e,t,n,a,o,c){return Object(r["u"])(),Object(r["h"])(r["a"],null,[n.open?(Object(r["u"])(),Object(r["h"])("div",{key:0,class:"backdrop",onClick:t[0]||(t[0]=function(t){return e.$emit("close")})})):Object(r["g"])("",!0),Object(r["k"])(r["b"],{name:"modal"},{default:Object(r["I"])((function(){return[n.open?(Object(r["u"])(),Object(r["h"])("dialog",_,[Object(r["B"])(e.$slots,"default",{},void 0,!0)])):Object(r["g"])("",!0)]})),_:3})],64)}var w={props:["open"],emits:["close"]};n("8ab0");const L=m()(w,[["render",U],["__scopeId","data-v-2c301918"]]);var A=L,E=n("6c02"),P=function(e){return Object(r["x"])("data-v-5e672434"),e=e(),Object(r["v"])(),e},B={class:"container"},V=P((function(){return Object(r["i"])("h2",null,"All Users",-1)})),x=Object(r["j"])("Goals");function D(e,t){var n=Object(r["C"])("router-link");return Object(r["u"])(),Object(r["h"])("div",B,[V,Object(r["k"])(n,{to:"/goals"},{default:Object(r["I"])((function(){return[x]})),_:1})])}n("0a1e");const S={},T=m()(S,[["render",D],["__scopeId","data-v-5e672434"]]);var J=T,M=function(e){return Object(r["x"])("data-v-98c275c8"),e=e(),Object(r["v"])(),e},$={class:"container"},N=M((function(){return Object(r["i"])("h2",null,"Course Goals",-1)})),R=Object(r["j"])("Users");function G(e,t){var n=Object(r["C"])("router-link");return Object(r["u"])(),Object(r["h"])("div",$,[N,Object(r["k"])(n,{to:"/"},{default:Object(r["I"])((function(){return[R]})),_:1})])}n("be8f");const q={},F=m()(q,[["render",G],["__scopeId","data-v-98c275c8"]]);var H=F,K=Object(E["a"])({history:Object(E["b"])("/vue-animations/"),routes:[{path:"/",redirect:"/users"},{path:"/users",component:J},{path:"/goals",component:H}]}),z=K,Q=Object(r["e"])(C);Q.component("base-modal",A),Q.use(z),z.isReady().then((function(){Q.mount("#app")}))},"585a":function(e,t,n){"use strict";n("0cff")},"670c":function(e,t,n){},"69be":function(e,t,n){},"71f0":function(e,t,n){"use strict";n("69be")},"7fc0":function(e,t,n){},"8ab0":function(e,t,n){"use strict";n("0e17")},be8f:function(e,t,n){"use strict";n("670c")}});
//# sourceMappingURL=app.36f4a044.js.map