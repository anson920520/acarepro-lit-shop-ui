(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"2f67":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{UserName:"",password:"",logging:!0}},onLoad:function(t){this.autoLogin()},methods:{autoLogin:function(){uni.getStorageSync("user")&&uni.getStorageSync("pwd")&&(this.UserName=uni.getStorageSync("user"),this.password=uni.getStorageSync("pwd"))},Login:function(){var t=this,a=this,e=a.$store.state.baseURL+"login/sale";if(""==a.UserName||""==a.password)uni.showToast({title:"信息填写不完整",icon:"none"});else{if(!this.logging)return;this.logging=!1,uni.request({url:e,method:"POST",data:{USERNAME:a.UserName,PASSWORD:a.password},success:function(t){console.log(t),"login successfully"==t.data.message?(uni.setStorageSync("user",a.UserName),uni.setStorageSync("pwd",a.password),uni.setStorageSync("userId",t.data.detail.ID),uni.setStorageSync("sale",t.data.detail.sale),uni.setStorageSync("company",t.data.detail.company),a.toHome()):"Wrong password"==t.data.message?uni.showToast({title:"密码错误",icon:"none"}):"record not found"==t.data.message?uni.showToast({title:"无效账号",icon:"none"}):uni.showToast({title:t.data.message,icon:"none"})},fail:function(){uni.showToast({title:"网络错误",icon:"none"})},complete:function(){t.logging=!0}})}},toHome:function(){uni.navigateTo({url:"/pages/index/index"})}}};a.default=n},"3f80":function(t,a,e){"use strict";e.r(a);var n=e("b932"),i=e("422f");for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);e("ea8a");var o,s=e("f0c5"),d=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"597da1fa",null,!1,n["a"],o);a["default"]=d.exports},"422f":function(t,a,e){"use strict";e.r(a);var n=e("2f67"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=i.a},"7e20":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.all-warpper[data-v-597da1fa]{height:100vh;display:-webkit-box;display:-webkit-flex;display:flex}.Login_one_main[data-v-597da1fa]{height:80vh;position:fixed;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.Input-warpper[data-v-597da1fa]{border:%?1?% solid #000;width:%?625?%;-webkit-border-radius:%?15?%;border-radius:%?15?%}.Input[data-v-597da1fa]{height:%?90?%;width:100%;z-index:10}.Input-input[data-v-597da1fa]{display:inline-block;vertical-align:middle;font-size:%?30?%;width:%?400?%}.Input-text[data-v-597da1fa]{font-size:%?30?%;font-weight:600;margin:0 %?30?%;line-height:%?90?%}.Input[data-v-597da1fa]:first-child{-webkit-border-radius:%?10?% %?10?% 0 0;border-radius:%?10?% %?10?% 0 0}.Perfect_user_logo[data-v-597da1fa]{width:%?320?%;display:block;margin:%?30?% auto %?20?%}.loginText[data-v-597da1fa]{font-size:%?55?%;text-align:center;margin:%?40?%}.Sub[data-v-597da1fa]{width:60%;height:%?85?%;line-height:%?85?%;font-size:%?35?%;margin-top:%?125?%;background:#e5c448!important;color:#000;background-size:cover;margin:%?100?% auto!important;border:solid %?1?% #000;position:relative}.Sub uni-view[data-v-597da1fa]{width:%?40?%;height:%?40?%;position:absolute;right:%?50?%;top:%?17?%;border-top:%?4?% solid #fff;border-left:%?4?% solid #fff;border-right:%?4?% solid #fff;border-bottom:%?4?% solid transparent;-webkit-border-radius:50%;border-radius:50%;-webkit-animation:cycle-data-v-597da1fa linear infinite 1s;animation:cycle-data-v-597da1fa linear infinite 1s}@-webkit-keyframes cycle-data-v-597da1fa{form{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes cycle-data-v-597da1fa{form{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}#GR_LoGin_Btn[data-v-597da1fa]:active{-webkit-transform:translateX(%?3?%) translateY(%?3?%);transform:translateX(%?3?%) translateY(%?3?%)}.bgi[data-v-597da1fa]{position:fixed;right:0;z-index:1;bottom:0}',""]),t.exports=a},"8ef7":function(t,a,e){t.exports=e.p+"static/img/logo.5cf973b3.png"},b932:function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"all-warpper"},[n("v-uni-view",{staticClass:"Login_one_main"},[n("v-uni-image",{staticClass:"Perfect_user_logo",attrs:{src:e("8ef7"),mode:"widthFix"}}),n("v-uni-view",{staticClass:"loginText"},[t._v("巴达尔资讯平台")]),n("v-uni-view",{staticClass:"Input-warpper",staticStyle:{"z-index":"10"}},[n("v-uni-view",{staticClass:"Input"},[n("v-uni-text",{staticClass:"Input-text"},[t._v("账号：")]),n("v-uni-input",{staticClass:"Input-input",attrs:{type:"text",placeholder:"请输入账号","placeholder-style":"color: #cccccc"},model:{value:t.UserName,callback:function(a){t.UserName=a},expression:"UserName"}})],1),n("v-uni-view",{staticClass:"Input",staticStyle:{"border-top":"#000 solid 1upx"}},[n("v-uni-text",{staticClass:"Input-text"},[t._v("密码：")]),n("v-uni-input",{staticClass:"Input-input",attrs:{type:"password",placeholder:"请输入密码","placeholder-style":"color: #cccccc"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1)],1),n("v-uni-button",{staticClass:"Sub",attrs:{type:"primary",id:"GR_LoGin_Btn"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.Login.apply(void 0,arguments)}}},[t._v("登 录"),t.logging?t._e():n("v-uni-view",{staticClass:"cycle"})],1)],1)],1)},r=[]},e292:function(t,a,e){var n=e("7e20");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("3fb1b0a0",n,!0,{sourceMap:!1,shadowMode:!1})},ea8a:function(t,a,e){"use strict";var n=e("e292"),i=e.n(n);i.a}}]);