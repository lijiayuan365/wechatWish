webpackJsonp([1],{"4WSK":function(t,e){},Ftoc:function(t,e,a){t.exports=a.p+"static/img/qrcode.9b0eca2.jpg"},LCpB:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("xd7I"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=a("C7Lr")({name:"App"},r,!1,function(t){a("lSYO")},null,null).exports,i=a("ZWLj"),o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};a("C7Lr")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},o,!1,function(t){a("tGEK")},"data-v-d8ec41bc",null).exports;var c={name:"",data:function(){return{activeIndex:"1"}},components:{},created:function(){},computed:{},methods:{handleSelect:function(t){"3"===t&&this.$router.push("/about"),"2"===t&&this.$router.push("/warn"),"1"===t&&this.$router.push("/")}},mounted:function(){var t=0;window.onunload=function(){(new Date).getTime()-t<=5&&localStorage.removeItem("loginSta")},window.onbeforeunload=function(){t=(new Date).getTime()}},destroyed:function(){}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("header",[a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[a("el-menu-item",{attrs:{index:"1"}},[t._v("首页")]),t._v(" "),a("el-menu-item",{attrs:{index:"2"}},[t._v("使用说明")]),t._v(" "),a("el-menu-item",{attrs:{index:"3"}},[t._v("关于")])],1)],1),t._v(" "),a("router-view",{staticStyle:{flex:"1"}}),t._v(" "),a("footer",[t._v("个人交流学习，严禁用于商业用途")])],1)},staticRenderFns:[]};var u=a("C7Lr")(c,l,!1,function(t){a("fK5w")},"data-v-ee8da468",null).exports,v={name:"warn",methods:{login:function(){var t=this;this.$http.post("/api/login").then(function(e){var a=e.data.data;localStorage.setItem("loginSta",a),t.$router.push("/")})}},computed:{loginSta:function(){return localStorage.getItem("loginSta")}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"text-align":"left",padding:"60px"}},[a("h1",[t._v("用前必读")]),t._v(" "),a("p",[t._v("请确保在 IE8 以上， chrome 或者 火狐浏览器中使用本工具")]),t._v(" "),a("h2",[t._v("1 操作流程")]),t._v(" "),a("p",{staticClass:"tip"},[t._v("1. 点击下方的登录按钮，会弹出一个登录二维码")]),t._v(" "),a("p",{staticClass:"tip"},[t._v("2. 手机微信扫码授权登录网页微信，进入系统")]),t._v(" "),a("p",{staticClass:"tip"},[t._v("3. 在好友列表中选择要群发短信的好友")]),t._v(" "),a("p",{staticClass:"tip"},[t._v("4. 输入要群发的内容")]),t._v(" "),a("p",{staticClass:"tip"},[t._v("5. 先测试发送预览发送的结果，确保不会翻车后正式发送")]),t._v(" "),a("h2",[t._v("2 警告")]),t._v(" "),a("p",[t._v("本工具是调用 itchat\n    这个工具库提供的微信接口，偶尔节假日群发一两次信息没事，频繁群发信息会引起腾讯爸爸的注意的，然后腾讯爸爸就可能不让你以后登录网页版的微信（可以解封，但是麻烦），也就是以后再也用不了这个工具，以后很多关于微信好玩的操作也会用不了的。所以请勿竭泽而渔！")]),t._v(" "),a("p",[t._v("这个小工具仅供免费学习交流（玩）使用，请勿用于商业用途")]),t._v(" "),a("h2",[t._v("3 致谢")]),t._v(" "),t._m(0),t._v(" "),a("p",[t._v("看完了吗，那就开始搞事情吧")]),t._v(" "),t.loginSta?t._e():a("el-button",{attrs:{type:"success"},on:{click:t.login}},[t._v("点击登录")])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在此感谢 "),e("a",{attrs:{href:"https://itchat.readthedocs.io/zh/latest/"}},[this._v("itchat")]),this._v(" 的作者们给我们提供这么一个好玩的微信接口库")])}]};var p=a("C7Lr")(v,m,!1,function(t){a("LCpB")},"data-v-4d6f600e",null).exports,d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("h1",[t._v("关于我")]),t._v(" "),n("el-avatar",{attrs:{size:150,src:"http://img.cdn.lijiayuan.top/me.png"}}),t._v(" "),n("p",[t._v("异乡小红帽，前端小辣鸡！")]),t._v(" "),n("p",[t._v("学习前端ing，偶尔喜欢搞事情")]),t._v(" "),n("p",[t._v("联系方式：1399208411@qq.com")]),t._v(" "),n("p",[t._v("GitHub: https://github.com/lijiayuan365")]),t._v(" "),n("p",{staticStyle:{"margin-top":"40px",color:"#B3C0D1"}},[t._v("欢迎关注我的公众号，大家一起学习交流（搞事情）！")]),t._v(" "),n("img",{attrs:{src:a("Ftoc"),alt:"",height:"90",width:"90"}})],1)},staticRenderFns:[]};var h=a("C7Lr")({name:"",data:function(){return{}},components:{},created:function(){},computed:{},methods:{}},d,!1,function(t){a("nRmj")},"data-v-1f62e441",null).exports,_={name:"",data:function(){return{roomName:"",rooms:[],sendType:"1",wish:"",avatar:"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",tableData:[{userName:"王小虎",avatar:"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",remark:"王小虎",userId:12},{userName:"王小虎",avatar:"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",remark:"王小虎",userId:34},{userName:"王小虎",avatar:"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",remark:"王小虎",userId:45}],friends:[],sendPersons:[],testMsgList:[]}},components:{},created:function(){this.getUserList(),this.getChatRooms()},computed:{},methods:{getUserList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.roomName,n=e.tagName;this.$http.get("/api/getFriendList",{params:{roomName:a,tagName:n}}).then(function(e){var a=e.data.data;t.friends=a})},getChatRooms:function(){var t=this;this.$http.get("/api/getChatRooms").then(function(e){var a=e.data.data;t.rooms=a})},getRoomFriend:function(){var t=this;this.$http.get("/api/getRoomFriend",{params:{roomName:this.roomName}}).then(function(e){var a=e.data.data;t.friends=a}),console.log(this.roomName)},handleSelectionChange:function(t){this.sendPersons=t},sendTest:function(){var t=this;this.wish?this.testMsgList=this.sendPersons.map(function(e){return{msg:t.wish.replace("%s",e.remark),nickName:e.nickName,remarkName:e.remarkName,userName:e.userName}}):this.$alert("微信内容不能为空","出错",{confirmButtonText:"确定"})},sendTrue:function(){var t=this;this.wish?this.$confirm("此操作将正式群发信息，请确保测试结果不会翻车, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){return t.$http.post("/api/sendMsg",{msgs:t.testMsgList})}).then(function(t){console.log(t)}):this.$alert("微信内容不能为空","出错",{confirmButtonText:"确定"})}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"aside"},[a("div",[a("el-radio",{attrs:{label:"1"},model:{value:t.sendType,callback:function(e){t.sendType=e},expression:"sendType"}},[t._v("通讯录")]),t._v(" "),a("el-radio",{attrs:{label:"3"},model:{value:t.sendType,callback:function(e){t.sendType=e},expression:"sendType"}},[t._v("群")])],1),t._v(" "),a("div",{staticClass:"user-list-area"},["1"!==t.sendType?a("div",{staticClass:"choice-group"},[a("p",{staticClass:"tips"},[t._v("请选择群发的群")]),t._v(" "),a("el-select",{attrs:{placeholder:"请选择"},on:{change:t.getRoomFriend},model:{value:t.roomName,callback:function(e){t.roomName=e},expression:"roomName"}},t._l(t.rooms,function(t){return a("el-option",{key:t.userName,attrs:{label:t.nickName,value:t.nickName}})}),1)],1):t._e(),t._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.friends,"tooltip-effect":"dark","max-height":"500"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{label:"头像",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:t.avatar,alt:"",width:"50",height:"50"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"备注"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.nickName))]),t._v(" "),a("div",[t._v("("+t._s(e.row.remarkName)+")")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"群发备注"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{placeholder:"请输入内容",size:"mini"},model:{value:e.row.remark,callback:function(a){t.$set(e.row,"remark",a)},expression:"scope.row.remark"}})]}}])})],1)],1)]),t._v(" "),a("el-container",[a("el-main",[a("p",[t._v("请输入祝福语，%s 指代好友备注位置")]),t._v(" "),a("el-input",{attrs:{type:"textarea",rows:5,placeholder:"请输入内容"},model:{value:t.wish,callback:function(e){t.wish=e},expression:"wish"}}),t._v(" "),a("p",{staticStyle:{"margin-top":"30px"}},[t._v("测试结果")]),t._v(" "),a("div",{staticClass:"msg-box"},[a("ul",t._l(t.testMsgList,function(e){return a("li",{staticClass:"msg-item"},[t._v("\n                  发送给"+t._s(e.nickName)+"("+t._s(e.remarkName)+")的信息："+t._s(e.msg)+"\n                ")])}),0)]),t._v(" "),a("div",{staticClass:"btn-wrap"},[a("el-button",{attrs:{type:"primary"},on:{click:t.sendTest}},[t._v("测试发送")]),t._v(" "),a("el-button",{attrs:{type:"success"},on:{click:t.sendTrue}},[t._v("正式发送")])],1)],1)],1)],1)},staticRenderFns:[]};var g=a("C7Lr")(_,f,!1,function(t){a("g6VI")},"data-v-255fa546",null).exports;n.default.use(i.a);var b=new i.a({routes:[{path:"/",name:"Home",component:u,children:[{path:"/about",component:h},{path:"",component:g,meta:{requireAuth:!0}},{path:"/warn",name:"Warn",component:p}]}]}),k=a("rVsN"),w=a.n(k),x=a("4YfN"),C=a.n(x),y=a("Muz9"),N=a.n(y),S=a("bzuk"),T=a.n(S),$=void 0;var j=0;function L(){0===j&&($=S.Loading.service({lock:!0,text:"加载中……",background:"rgba(0, 0, 0, 0.7)"})),j++}function E(){j<=0||0===--j&&$.close()}N.a.interceptors.request.use(function(t){var e=+new Date;return"get"===t.method?t.params=C()({},t.params,{timestam:e}):"post"===t.method&&(t.data=C()({},t.data,{timestam:e})),L(),t},function(t){return w.a.reject(t)}),N.a.interceptors.response.use(function(t){return E(),t},function(t){return w.a.reject(t)});var R=N.a;a("4WSK");n.default.prototype.$http=R,n.default.use(T.a),n.default.config.productionTip=!1,b.beforeEach(function(t,e,a){t.meta.requireAuth?localStorage.getItem("loginSta")?a():a({path:"/warn"}):a()}),new n.default({el:"#app",router:b,components:{App:s},template:"<App/>"})},fK5w:function(t,e){},g6VI:function(t,e){},lSYO:function(t,e){},nRmj:function(t,e){},tGEK:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.59f5c325feffc17a0681.js.map