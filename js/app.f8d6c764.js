(function(t){function e(e){for(var s,r,c=e[0],i=e[1],l=e[2],u=0,f=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(s=!1)}s&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var s={},a={app:0},o=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"4ef9a1a6"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,s){n=a[t]=[e,s]}));e.push(n[2]=s);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=r(t);var l=new Error;o=function(e){i.onerror=i.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var s=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",l.name="ChunkLoadError",l.type=s,l.request=o,n[1](l)}a[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(n,s,function(e){return t[e]}.bind(null,s));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/todo-app/",c.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0c7c":function(t,e,n){t.exports=n.p+"img/bg-desktop-dark.02105f02.jpg"},5452:function(t,e,n){"use strict";n("af35")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"night",attrs:{id:"app"}},[t.theme?s("img",{staticClass:"background-image",attrs:{src:n("0c7c"),alt:"dark-background"}}):t._e(),t.theme?t._e():s("img",{staticClass:"background-image",attrs:{src:n("e76e"),alt:"light-background"}}),s("Header"),s("Tasks")],1)},o=[],r=n("5530"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"header-h"},[n("h1",[t._v("Todo")]),t.state?n("div",{staticClass:"icon",on:{click:function(e){return t.$store.dispatch("CHANGE_THEME",t.state)}}},[n("sun-icon")],1):t._e(),t.state?t._e():n("div",{staticClass:"icon",on:{click:function(e){return t.$store.dispatch("CHANGE_THEME",t.state)}}},[n("moon-icon")],1)]),n("div",{staticClass:"create-task",class:{light:!this.state,dark:this.state}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.task.text,expression:"task.text"}],class:{light:!t.state,dark:t.state},attrs:{type:"text",placeholder:"Create a new task..."},domProps:{value:t.task.text},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTask.apply(null,arguments)},input:function(e){e.target.composing||t.$set(t.task,"text",e.target.value)}}})])])},i=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26"}},[n("path",{attrs:{fill:"#FFF","fill-rule":"evenodd",d:"M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"}})])},u=[],d={name:"SunIcon"},f=d,p=n("2877"),h=Object(p["a"])(f,l,u,!1,null,"34a01c36",null),m=h.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26"}},[n("path",{attrs:{fill:"#FFF","fill-rule":"evenodd",d:"M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"}})])},v=[],g={name:"MoonIcon"},b=g,C=Object(p["a"])(b,k,v,!1,null,"01598b4d",null),_=C.exports,E={name:"Header",components:{SunIcon:m,MoonIcon:_},data:function(){return{task:{text:"",completed:!1}}},computed:{state:function(){return this.$store.state.theme}},methods:{addTask:function(){this.task.text&&(this.$store.dispatch("ADD_TASK",this.task),this.task={text:"",completed:!1})}}},w=E,T=(n("5452"),Object(p["a"])(w,c,i,!1,null,null,null)),x=T.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tasks"},[n("div",{staticClass:"tasks-content",class:{light:!t.state,dark:t.state}},[n("ul",t._l(t.tasks,(function(e){return n("li",{key:e.text,staticClass:"task-l",class:{light:!t.state,dark:t.state}},[n("div",{class:{completed:e.completed}},[n("custom-check",{staticClass:"check-btn",class:{"completed-icon":!e.completed},attrs:{task:e}}),t._v(" "+t._s(e.text)+" ")],1),n("cross-icon",{staticClass:"delete-task",attrs:{task:e}})],1)})),0)]),n("div",{staticClass:"tasks-footer"},[n("ul",{class:{light:!t.state,dark:t.state}},[n("li",[t._v(t._s(t.tasksCount)+" task"+t._s(1===Number(t.tasksCount)?"":"s")+" left")]),n("li",[n("ul",{staticClass:"tasks-actions"},[n("li",{staticClass:"tasks-all",class:{active:void 0===t.filter},on:{click:function(e){t.filter=void 0}}},[t._v("All ")]),n("li",{staticClass:"tasks-active",class:{active:!1===t.filter},on:{click:function(e){t.filter=!1}}},[t._v("Active ")]),n("li",{staticClass:"tasks-completed",class:{active:!0===t.filter},on:{click:function(e){t.filter=!0}}},[t._v("Completed ")])])]),n("li",{staticClass:"tasks-clear",on:{click:function(e){return t.$store.dispatch("CLEAR_COMPLETED")}}},[t._v("Clear Completed ")])])])])},O=[],A=(n("4de4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{click:t.deleteTask}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18"}},[n("path",{attrs:{fill:"#494C6B","fill-rule":"evenodd",d:"M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"}})])])}),j=[],M={name:"CrossIcon",props:["task"],methods:{deleteTask:function(){this.$store.dispatch("DELETE_TASK",this.task)}}},$=M,L=Object(p["a"])($,A,j,!1,null,"33de33de",null),S=L.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"check-btn-circle",on:{click:function(e){t.task.completed=!t.task.completed}}},[n("check-icon")],1)])},H=[],P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"svg"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"11",height:"9"}},[n("path",{attrs:{fill:"none",stroke:"#FFF","stroke-width":"2",d:"M1 4.304L3.696 7l6-6"}})])])},z=[],F={name:"CheckIcon"},I=F,K=Object(p["a"])(I,P,z,!1,null,null,null),N=K.exports,G={name:"CustomCheck",components:{CheckIcon:N},props:{task:null}},R=G,J=Object(p["a"])(R,D,H,!1,null,"ab8f58ec",null),q=J.exports,B={name:"Tasks",components:{CustomCheck:q,CrossIcon:S},computed:{tasks:function(){return this.$store.getters.getTasks(this.filter)},tasksCount:function(){return this.$store.getters.tasksCount},state:function(){return this.$store.state.theme}},data:function(){return{filter:void 0}}},V=B,Q=(n("7746"),Object(p["a"])(V,y,O,!1,null,"49a495ec",null)),U=Q.exports,W=n("2f62"),X={components:{Header:x,Tasks:U},computed:Object(r["a"])(Object(r["a"])({},Object(W["b"])(["getTheme"])),{},{theme:function(){return this.$store.state.theme}}),watch:{getTheme:{deep:!0,handler:function(t){document.body.style.backgroundColor=t?"hsl(235, 21%, 11%)":"hsl(0, 0%, 90%)"}}}},Y=X,Z=(n("5c0b"),Object(p["a"])(Y,a,o,!1,null,null,null)),tt=Z.exports,et=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"})},st=[],at={name:"Home",components:{}},ot=at,rt=Object(p["a"])(ot,nt,st,!1,null,null,null),ct=rt.exports;s["a"].use(et["a"]);var it=[{path:"/",name:"Home",component:ct},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],lt=new et["a"]({mode:"history",base:"/todo-app/",routes:it}),ut=lt;s["a"].use(W["a"]);var dt=new W["a"].Store({state:{theme:!0,tasks:[]},getters:{tasksCount:function(t){return t.tasks.filter((function(t){return!t.completed})).length},getTasks:function(t){return function(e){return void 0===e?t.tasks:t.tasks.filter((function(t){return t.completed===e}))}},getTheme:function(t){return t.theme}},mutations:{ADD_TASK:function(t,e){t.tasks.push({text:e.text,completed:e.completed})},CLEAR_COMPLETED:function(t){t.tasks=t.tasks.filter((function(t){return!t.completed}))},CHANGE_THEME:function(t,e){t.theme=!e},DELETE_TASK:function(t,e){t.tasks=t.tasks.filter((function(t){return t!==e}))}},actions:{ADD_TASK:function(t,e){t.commit("ADD_TASK",e)},CLEAR_COMPLETED:function(t){t.commit("CLEAR_COMPLETED")},CHANGE_THEME:function(t,e){t.commit("CHANGE_THEME",e)},DELETE_TASK:function(t,e){t.commit("DELETE_TASK",e)}},modules:{}});s["a"].config.productionTip=!1,new s["a"]({router:ut,store:dt,render:function(t){return t(tt)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},7746:function(t,e,n){"use strict";n("9102")},9102:function(t,e,n){},"9c0c":function(t,e,n){},af35:function(t,e,n){},e76e:function(t,e,n){t.exports=n.p+"img/bg-desktop-light.988cb74c.jpg"}});
//# sourceMappingURL=app.f8d6c764.js.map