(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],f=0,h=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&h.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},s={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0f7d":function(t,e,n){},1787:function(t,e,n){},"326a":function(t,e,n){"use strict";n("bef1")},"44a3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root",attrs:{"data-theme":t.$store.state.theme}},[n("Dock"),n("router-view")],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dock"},[n("div",{staticClass:"left row"},[n("Hero")],1),n("div",{staticClass:"right row"},[n("ThemeChanger")],1)])},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Hero"},[t._v("KIM MIN SANG")])},l=[],u={},f=u,h=(n("5ff2"),n("2877")),p=Object(h["a"])(f,c,l,!1,null,null,null),m=p.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ThemeChanger"},[n("div",{staticClass:"rail",class:t.$store.state.theme}),n("div",{staticClass:"handle",class:t.$store.state.theme,on:{click:t.themeChange}},["light"==t.$store.state.theme?n("span",[t._v("🌚")]):n("span",[t._v("🌝")])])])},d=[],g={methods:{themeChange:function(){"light"==this.$store.state.theme?this.$store.commit("UPDATE_THEME","dark"):this.$store.commit("UPDATE_THEME","light")}}},b=g,w=(n("d608"),Object(h["a"])(b,v,d,!1,null,"029cef74",null)),_=w.exports,y={components:{Hero:m,ThemeChanger:_},methods:{activate:function(){}}},C=y,x=(n("5b9c"),Object(h["a"])(C,i,o,!1,null,"17026e41",null)),E=x.exports,S={components:{Dock:E},created:function(){this.updateTheme()},watch:{themeValue:function(t){this.theme=t?"light":"dark",this.updateTheme()}},data:function(){return{themeValue:!1,theme:"dark"}},methods:{updateTheme:function(){document.documentElement.setAttribute("data-theme",this.theme)}}},O=S,T=(n("5c0b"),Object(h["a"])(O,s,r,!1,null,null,null)),M=T.exports,j=n("8c4f"),$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home row"},[n("NavigationList",{attrs:{navigations:t.naviationTabs}}),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view",{staticClass:"content"})],1)],1)},P=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation"},t._l(t.navigations,(function(t,e){return n("NavigationItem",{key:e,attrs:{item:t}})})),1)},H=[],I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigationItem",on:{click:t.navigateTo}},[n("IconM",{attrs:{type:t.item.icon,size:16}}),n("span",[t._v(t._s(t.item.name))])],1)},D=[],z=(n("b0c0"),{props:{item:Object},methods:{navigateTo:function(){this.$router.history.current.name!=this.item.path&&this.$router.push(this.item.path)}}}),U=z,A=(n("632f"),Object(h["a"])(U,I,D,!1,null,"0f36b60b",null)),N=A.exports,V={components:{NavigationItem:N},props:{navigations:Array}},B=V,J=(n("a963"),Object(h["a"])(B,k,H,!1,null,"6eeca75c",null)),K=J.exports,q={name:"Home",components:{NavigationList:K},data:function(){return{naviationTabs:[{name:"Overview",icon:"scatter_plot",path:"overview"},{name:"Profile",icon:"person",path:"profile"},{name:"Contact",icon:"alternate_email",path:"contact"}]}}},L=q,F=(n("326a"),Object(h["a"])(L,$,P,!1,null,"7affa1cb",null)),G=F.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Overview"},[n("Card")],1)},R=[],W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Card"})},X=[],Y={props:{type:{type:String,default:"simple"}}},Z=Y,tt=(n("a3be"),Object(h["a"])(Z,W,X,!1,null,"83fc093e",null)),et=tt.exports,nt={components:{Card:et},mounted:function(){console.log("activated");var t=n("bc3a");t.get("http://github-calendar.herokuapp.com/commits/JUSTIVE").then((function(t){console.log(t.data)}))},activated:function(){}},at=nt,st=(n("7895"),Object(h["a"])(at,Q,R,!1,null,"a3ec267e",null)),rt=st.exports,it=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ot=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile"},[n("div",{staticClass:"slogan"},[n("p",[t._v("Familiar"),n("br"),t._v("with"),n("br"),n("span",[t._v("novelty")])]),n("ul")]),n("div",{staticClass:"name"},[n("p",[t._v(" 김민상 "),n("br"),n("span",{staticClass:"eng"},[t._v("Kim Min Sang")]),n("span",{staticClass:"highlight"},[t._v("Kim Min Sang")])])]),n("div",{staticClass:"career"},[n("strong",[t._v("2014~2017")]),n("br"),t._v(" B.S in Dept of Computer Software Engineering"),n("br"),t._v("in Soonchunhyang University."),n("br"),n("br"),n("strong",[t._v("2017~2019")]),n("br"),t._v(" M.S Course in Dept of Computer Science"),n("br"),t._v("in Soonchunhyang University."),n("br"),n("br"),n("strong",[t._v("2019~Current")]),n("br"),t._v(" Software Engineer at CODEMIND"),n("br"),n("br"),n("br"),t._v(" His research interests are in computer graphics,"),n("br"),t._v("physically-based modeling and simulation,"),n("br"),t._v("android applications, and deep learning ")])])}],ct={name:"Profile"},lt=ct,ut=(n("e25e"),Object(h["a"])(lt,it,ot,!1,null,"644212cf",null)),ft=ut.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"link"},[n("div",{staticClass:"focuser",class:t.hoverItem}),n("a",{staticClass:"contact-icons",attrs:{href:"https://github.com/JUSTIVE",id:"github"},on:{mouseover:function(e){return t.hover("github")}}},[n("svg",{staticClass:"contact-icons",attrs:{viewBox:"0 0 24 24"}},[n("rect",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",rx:"15%",fill:"#1B1817"}}),n("path",{staticStyle:{transform:"scale(0.046875)"},attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"#fff",d:"M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z"}})])]),n("a",{staticClass:"contact-icons",attrs:{href:"mailto:ben399399@gmail.com",id:"mail"},on:{mouseover:function(e){return t.hover("mail")}}},[n("svg",{staticClass:"contact-icons",attrs:{viewBox:"0 0 24 24"}},[n("rect",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",rx:"15%",fill:"#fff"}}),n("path",{staticStyle:{transform:"scale(0.046875)"},attrs:{xmlns:"http://www.w3.org/2000/svg",d:"M158 391v-142l-82-63V361q0 30 30 30",fill:"#4285f4"}}),n("path",{staticStyle:{transform:"scale(0.046875)"},attrs:{xmlns:"http://www.w3.org/2000/svg",d:"M 154 248l102 77l102-77v-98l-102 77l-102-77",fill:"#ea4335"}}),n("path",{staticStyle:{transform:"scale(0.046875)"},attrs:{xmlns:"http://www.w3.org/2000/svg",d:"M354 391v-142l82-63V361q0 30-30 30",fill:"#34a853"}}),n("path",{staticStyle:{transform:"scale(0.046875)"},attrs:{xmlns:"http://www.w3.org/2000/svg",d:"M76 188l82 63v-98l-30-23c-27-21-52 0-52 26",fill:"#c5221f"}}),n("path",{staticStyle:{transform:"scale(0.046875)"},attrs:{xmlns:"http://www.w3.org/2000/svg",d:"M436 188l-82 63v-98l30-23c27-21 52 0 52 26",fill:"#fbbc04"}})])]),n("a",{staticClass:"contact-icons",attrs:{href:"https://unsplash.com/@justive_",id:"unsplash"},on:{mouseover:function(e){return t.hover("unsplash")}}},[n("svg",{attrs:{viewBox:"0 0 24 24"}},[n("rect",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",rx:"15%",fill:"#1B1817"}}),n("path",{staticStyle:{transform:"scale(0.5) translate(8px,8px)"},attrs:{fill:"#fff",d:"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"}})])])])},pt=[],mt={data:function(){return{hoverItem:""}},methods:{hover:function(t){this.hoverItem=t}}},vt=mt,dt=(n("da2b"),Object(h["a"])(vt,ht,pt,!1,null,"5484bac2",null)),gt=dt.exports;a["a"].use(j["a"]);var bt=[{path:"/",name:"home",component:G,children:[{path:"overview",name:"overview",component:rt},{path:"profile",name:"profile",component:ft},{path:"contact",name:"contact",component:gt}]}],wt=new j["a"]({routes:bt,mode:"history",duplicateNavigationPolicy:"ignore"}),_t=wt,yt=n("2f62");a["a"].use(yt["a"]);var Ct=new yt["a"].Store({state:{theme:"light"},mutations:{UPDATE_THEME:function(t,e){console.log("UPDATE_THEME"),t.theme=e}},actions:{UPDATE_THEME:function(t,e){var n=t.commit;n("UPDATE_THEME",e)}},modules:{}}),xt=n("bc3a"),Et=n.n(xt),St=n("2106"),Ot=n.n(St),Tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{style:"width:"+t.size+"px;\n    height:"+t.size+"px;\n    font-size:"+t.size+"px"},[n("i",{staticClass:"material-icons",style:"font-size:"+t.size+"px",attrs:{color:t.color}},[t._v(" "+t._s(t.type)+" ")])])},Mt=[],jt=(n("a9e3"),{name:"IconM",props:{type:String,size:{type:Number,default:24},color:String}}),$t=jt,Pt=(n("aaff"),Object(h["a"])($t,Tt,Mt,!1,null,"14ee1ec0",null)),kt=Pt.exports;a["a"].component("IconM",kt),a["a"].use(Ot.a,Et.a),a["a"].config.productionTip=!1,new a["a"]({router:_t,store:Ct,render:function(t){return t(M)}}).$mount("#app")},"5b9c":function(t,e,n){"use strict";n("8e45")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5ff2":function(t,e,n){"use strict";n("972a")},"632f":function(t,e,n){"use strict";n("80b1")},7895:function(t,e,n){"use strict";n("8f7f")},"80b1":function(t,e,n){},"8e45":function(t,e,n){},"8f7f":function(t,e,n){},"972a":function(t,e,n){},"9c0c":function(t,e,n){},a3be:function(t,e,n){"use strict";n("0f7d")},a963:function(t,e,n){"use strict";n("ebd9")},aaff:function(t,e,n){"use strict";n("cc23")},bef1:function(t,e,n){},cc23:function(t,e,n){},d608:function(t,e,n){"use strict";n("44a3")},da2b:function(t,e,n){"use strict";n("1787")},df17:function(t,e,n){},e25e:function(t,e,n){"use strict";n("df17")},ebd9:function(t,e,n){}});
//# sourceMappingURL=app.affc6740.js.map