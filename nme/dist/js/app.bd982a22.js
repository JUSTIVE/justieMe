(function(t){function e(e){for(var n,o,i=e[0],s=e[1],d=e[2],u=0,h=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&h.push(c[o][0]),c[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(e);while(h.length)h.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var s=a[o];0!==c[s]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},c={app:0},r=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f28ea9ab"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=c[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=c[t]=[e,n]}));e.push(a[2]=n);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=o(t);var d=new Error;r=function(e){s.onerror=s.onload=null,clearTimeout(u);var a=c[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}c[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=d;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0bd1":function(t,e,a){},3094:function(t,e,a){},"3d97":function(t,e,a){"use strict";a("5bb0")},"45ad":function(t,e,a){"use strict";a("e19e")},5619:function(t,e,a){"use strict";a("acf0")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23");function c(t,e,a,c,r,o){var i=Object(n["t"])("Arctail"),s=Object(n["t"])("router-view"),d=Object(n["t"])("MainPane"),u=Object(n["t"])("Dock");return Object(n["n"])(),Object(n["c"])("div",{class:"root","data-theme":r.theme},[Object(n["e"])(i),Object(n["e"])(s),Object(n["e"])(d,{paneopen:r.activatePane},null,8,["paneopen"]),Object(n["e"])(u,{onActivatePane:o.openPane,activated:r.activatePane},null,8,["onActivatePane","activated"])],8,["data-theme"])}var r={class:"Arctail_container"},o={ref:"canvas",class:"Arctail",id:"arctail",width:"3000",height:"3000"};function i(t,e,a,c,i,s){return Object(n["n"])(),Object(n["c"])("div",r,[Object(n["e"])("canvas",o,null,512)])}var s={name:"Arctail",data:function(){return{stars:void 0,speed:void 0,position:void 0,color:void 0,ctx:void 0,dynamicPalette:["#FF4A4A","#FFD14A","#FFFFFA","#1C1C5C","#05050F"]}},created:function(){var t=500;this.stars=Array(t),this.speed=Array(t),this.position=Array(t),this.color=Array(t);for(var e=0;e<t;e++)this.stars[e]=Math.random()*Math.PI*1.5,this.speed[e]=.008*Math.random(),this.position[e]=0,this.color[e]=Math.floor(4*Math.random())},mounted:function(){var t=this,e=this;this.ctx=e.$refs.canvas.getContext("2d"),setInterval((function(){t.doRender()}),1)},methods:{render:function(t){var e=1;this.ctx.beginPath(),this.ctx.lineWidth=500*this.speed[t],this.ctx.strokeStyle="#88888811",this.ctx.lineCap="round",this.ctx.arc(1e3,1e3,4.5*t,this.position[t]+Math.PI*e,this.stars[t]+this.position[t]+Math.PI*e),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.strokeStyle=this.dynamicPalette[this.color[t]],this.ctx.lineCap="round",this.ctx.arc(1e3,1e3,4.5*t,this.position[t]+Math.PI*e+this.stars[t],this.stars[t]+.02+this.position[t]+Math.PI*e),this.ctx.stroke(),this.position[t]+=this.speed[t]},constellation:function(){this.ctx.beginPath(),this.ctx.moveTo(1e3,1e3);for(var t=0;t<500;t++)this.ctx.lineTo(Math.cos(this.position[t])*t*4+1e3,Math.sin(this.position[t])*t*4+1e3);this.ctx.lineWidth=1,this.ctx.strokeStyle="#ffffff05",this.ctx.stroke()},doRender:function(){this.ctx.clearRect(0,0,3e3,3e3);for(var t=0;t<500;t++)this.render(t)}}};a("3d97");s.render=i;var d=s,u=Object(n["y"])("data-v-4b439d76");Object(n["q"])("data-v-4b439d76");var l={class:"dock"},h=Object(n["e"])("div",{class:"tint"},null,-1),v={class:"row"};Object(n["o"])();var f=u((function(t,e,a,c,r,o){var i=Object(n["t"])("Introduction"),s=Object(n["t"])("Contact");return Object(n["n"])(),Object(n["c"])("div",l,[h,Object(n["e"])("div",v,[Object(n["e"])(i),Object(n["e"])("div",{class:["activator",{activated:a.activated}],onClick:e[1]||(e[1]=function(){return o.activate&&o.activate.apply(o,arguments)})}," 〈 ",2)]),Object(n["e"])(s)])})),p=Object(n["y"])("data-v-97df9084");Object(n["q"])("data-v-97df9084");var b={class:"link"},m=Object(n["e"])("svg",{viewBox:"0 0 24 24",class:"contact-icons"},[Object(n["e"])("rect",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",rx:"15%",fill:"#1B1817"}),Object(n["e"])("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#fff",style:{transform:"scale(0.046875)"},d:"M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z"})],-1),j=Object(n["e"])("svg",{viewBox:"0 0 24 24",class:"contact-icons"},[Object(n["e"])("rect",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",rx:"15%",fill:"#fff"}),Object(n["e"])("path",{xmlns:"http://www.w3.org/2000/svg",style:{transform:"scale(0.046875)"},d:"M158 391v-142l-82-63V361q0 30 30 30",fill:"#4285f4"}),Object(n["e"])("path",{xmlns:"http://www.w3.org/2000/svg",style:{transform:"scale(0.046875)"},d:"M 154 248l102 77l102-77v-98l-102 77l-102-77",fill:"#ea4335"}),Object(n["e"])("path",{xmlns:"http://www.w3.org/2000/svg",style:{transform:"scale(0.046875)"},d:"M354 391v-142l82-63V361q0 30-30 30",fill:"#34a853"}),Object(n["e"])("path",{xmlns:"http://www.w3.org/2000/svg",style:{transform:"scale(0.046875)"},d:"M76 188l82 63v-98l-30-23c-27-21-52 0-52 26",fill:"#c5221f"}),Object(n["e"])("path",{xmlns:"http://www.w3.org/2000/svg",style:{transform:"scale(0.046875)"},d:"M436 188l-82 63v-98l30-23c27-21 52 0 52 26",fill:"#fbbc04"})],-1),O=Object(n["e"])("svg",{viewBox:"0 0 24 24"},[Object(n["e"])("rect",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",rx:"15%",fill:"#1B1817"}),Object(n["e"])("path",{fill:"#fff",style:{transform:"scale(0.5) translate(8px,8px)"},d:"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"})],-1);Object(n["o"])();var g=p((function(t,e,a,c,r,o){return Object(n["n"])(),Object(n["c"])("div",b,[Object(n["e"])("div",{class:["focuser",r.hoverItem]},null,2),Object(n["e"])("a",{href:"https://github.com/JUSTIVE",id:"github",onMouseover:e[1]||(e[1]=function(t){return o.hover("github")}),class:"contact-icons"},[m],32),Object(n["e"])("a",{href:"mailto:ben399399@gmail.com",id:"mail",onMouseover:e[2]||(e[2]=function(t){return o.hover("mail")}),class:"contact-icons"},[j],32),Object(n["e"])("a",{href:"https://unsplash.com/@justive_",id:"unsplash",onMouseover:e[3]||(e[3]=function(t){return o.hover("unsplash")}),class:"contact-icons"},[O],32)])})),w={data:function(){return{hoverItem:""}},methods:{hover:function(t){this.hoverItem=t}}};a("5619");w.render=g,w.__scopeId="data-v-97df9084";var y=w,x=a("ffe7"),P=a.n(x),M={class:"selfie",src:P.a};function k(t,e,a,c,r,o){return Object(n["n"])(),Object(n["c"])("img",M)}var I={};a("f7b3");I.render=k;var S=I,A={props:{activated:Boolean},components:{Contact:y,Introduction:S},methods:{activate:function(){this.$emit("activatePane")}}};a("92fb");A.render=f,A.__scopeId="data-v-4b439d76";var C=A,_=Object(n["y"])("data-v-6967e036"),F=_((function(t,e,a,c,r,o){var i=Object(n["t"])("Commit");return Object(n["n"])(),Object(n["c"])("div",{class:["mainpane",{hidden:!a.paneopen}]},[Object(n["e"])(i)],2)}));function T(t,e,a,c,r,o){return Object(n["n"])(),Object(n["c"])("div",null,Object(n["v"])(r.comm),1)}a("96cf");var E=a("1da1"),B={created:function(){var t=this;return Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.axios.get("http://github-calendar.herokuapp.com/commits/JUSTIVE");case 2:t.comm=e.sent;case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{comm:""}}};B.render=T;var V=B,q={components:{Commit:V},props:{paneopen:Boolean},data:function(){return{navigations:[{name:"projects",path:""},{name:"publications",path:""},{name:"experiences",path:""},{name:"activies",path:""},{name:"skills",path:""},{name:"posts",path:""}]}}};a("74a1");q.render=F,q.__scopeId="data-v-6967e036";var D=q,H={components:{Arctail:d,Dock:C,MainPane:D},created:function(){this.updateTheme()},watch:{themeValue:function(t){this.theme=t?"light":"dark",this.updateTheme()}},data:function(){return{themeValue:!1,theme:"dark",activatePane:!1}},methods:{updateTheme:function(){document.documentElement.setAttribute("data-theme",this.theme)},openPane:function(){this.activatePane=!this.activatePane}}};a("6175");H.render=c;var R=H,J=(a("d3b7"),a("6c02")),U=Object(n["y"])("data-v-2538a886");Object(n["q"])("data-v-2538a886");var z={class:"home"};Object(n["o"])();var K=U((function(t,e,a,c,r,o){var i=Object(n["t"])("Profile");return Object(n["n"])(),Object(n["c"])("div",z,[Object(n["e"])(i)])})),L=Object(n["y"])("data-v-124c18d4");Object(n["q"])("data-v-124c18d4");var W={class:"profile"},$=Object(n["d"])('<div class="slogan" data-v-124c18d4><p data-v-124c18d4>Familiar<br data-v-124c18d4>with<br data-v-124c18d4><span data-v-124c18d4>novelty</span></p><ul data-v-124c18d4></ul></div><div class="name" data-v-124c18d4><p data-v-124c18d4> 김민상 <br data-v-124c18d4><span class="eng" data-v-124c18d4>Kim Min Sang</span><span class="highlight" data-v-124c18d4>Kim Min Sang</span></p></div><div class="career" data-v-124c18d4><strong data-v-124c18d4>2014~2017</strong><br data-v-124c18d4> B.S in Dept of Computer Software Engineering<br data-v-124c18d4>in Soonchunhyang University.<br data-v-124c18d4><br data-v-124c18d4><strong data-v-124c18d4>2017~2019</strong><br data-v-124c18d4> M.S Course in Dept of Computer Science<br data-v-124c18d4>in Soonchunhyang University.<br data-v-124c18d4><br data-v-124c18d4><strong data-v-124c18d4>2019~Current</strong><br data-v-124c18d4> Software Engineer at CODEMIND<br data-v-124c18d4><br data-v-124c18d4><br data-v-124c18d4> His research interests are in computer graphics,<br data-v-124c18d4>physically-based modeling and simulation,<br data-v-124c18d4>android applications, and deep learning </div>',3);Object(n["o"])();var N=L((function(t,e,a,c,r,o){return Object(n["n"])(),Object(n["c"])("div",W,[$])})),G={name:"Profile"};a("65b7");G.render=N,G.__scopeId="data-v-124c18d4";var Q=G,X={name:"Home",components:{Profile:Q}};a("45ad");X.render=K,X.__scopeId="data-v-2538a886";var Y=X,Z=[{path:"/",name:"Home",component:Y},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],tt=Object(J["a"])({history:Object(J["b"])(),routes:Z}),et=tt,at=a("5502"),nt=Object(at["a"])({state:{},mutations:{},actions:{},modules:{}}),ct=a("bc3a"),rt=a.n(ct),ot=a("2106"),it=a.n(ot);Object(n["b"])(R).use(nt).use(et).use(it.a,rt.a).mount("#app")},"5bb0":function(t,e,a){},6175:function(t,e,a){"use strict";a("6bbe")},"65b7":function(t,e,a){"use strict";a("3094")},"6bbe":function(t,e,a){},"74a1":function(t,e,a){"use strict";a("0bd1")},"92fb":function(t,e,a){"use strict";a("c010")},9652:function(t,e,a){},acf0:function(t,e,a){},c010:function(t,e,a){},e19e:function(t,e,a){},f7b3:function(t,e,a){"use strict";a("9652")},ffe7:function(t,e,a){t.exports=a.p+"img/profile.d181e892.jpg"}});
//# sourceMappingURL=app.bd982a22.js.map