(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-user"],{"0aa6":function(i,a,t){"use strict";var n;t.d(a,"b",(function(){return e})),t.d(a,"c",(function(){return s})),t.d(a,"a",(function(){return n}));var e=function(){var i=this,a=i.$createElement,n=i._self._c||a;return n("v-uni-view",{staticClass:"user-bg"},[n("my-header"),n("v-uni-view",{},[n("v-uni-image",{staticClass:"avag",attrs:{src:t("f57b"),mode:"aspectFill"}}),n("v-uni-view",{staticClass:"ju lineh1"},[n("v-uni-text",[i._v(i._s(i.detail.company))])],1),n("v-uni-view",{staticClass:"ju lineh1"},[n("v-uni-text",[i._v(i._s(i.detail.principal)+" 　"+i._s(i.detail.phone))])],1),n("v-uni-view",{staticClass:"flex width80 lineh1"},[n("v-uni-text",{staticClass:"label1"},[i._v("注册地址：")]),n("v-uni-text",{staticClass:"val1"},[i._v(i._s(i.detail.address))])],1),n("v-uni-view",{staticClass:"flex width80 lineh1"},[n("v-uni-text",{staticClass:"label1"},[i._v("收货地址：")]),n("v-uni-text",{staticClass:"val1"},[i._v(i._s(i.detail.shipping))])],1)],1),n("v-uni-view",{staticClass:"margint20"},[n("v-uni-view",{staticClass:"container sb al op",on:{click:function(a){arguments[0]=a=i.$handleEvent(a),i.toOrder.apply(void 0,arguments)}}},[n("v-uni-text",[i._v("订单记录")]),n("v-uni-image",{staticClass:"r-icon",attrs:{src:t("229e"),mode:"aspectFill"}})],1),n("v-uni-view",{staticClass:"container sb al op",on:{click:function(a){arguments[0]=a=i.$handleEvent(a),i.noOpen.apply(void 0,arguments)}}},[n("v-uni-text",[i._v("二级网点销售记录")]),n("v-uni-image",{staticClass:"r-icon",attrs:{src:t("229e"),mode:"aspectFill"}})],1),n("v-uni-view",{staticClass:"container sb al op",on:{click:function(a){arguments[0]=a=i.$handleEvent(a),i.noOpen.apply(void 0,arguments)}}},[n("v-uni-text",[i._v("修改个人资料")]),n("v-uni-image",{staticClass:"r-icon",attrs:{src:t("229e"),mode:"aspectFill"}})],1),n("v-uni-view",{staticClass:"container sb al op",on:{click:function(a){arguments[0]=a=i.$handleEvent(a),i.noOpen.apply(void 0,arguments)}}},[n("v-uni-text",[i._v("联络客服")]),n("v-uni-image",{staticClass:"r-icon",attrs:{src:t("229e"),mode:"aspectFill"}})],1)],1)],1)},s=[]},1746:function(i,a,t){"use strict";t.r(a);var n=t("5be3"),e=t.n(n);for(var s in n)"default"!==s&&function(i){t.d(a,i,(function(){return n[i]}))}(s);a["default"]=e.a},"229e":function(i,a){i.exports="data:image/png;base64,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"},4707:function(i,a,t){"use strict";var n=t("c28d"),e=t.n(n);e.a},"5be3":function(i,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{detail:{}}},onLoad:function(){var i=this;this.$store.dispatch("valiToken",{errorFn:function(){uni.redirectTo({url:"/pages/login/login"})},successFn:function(){var a=uni.getStorageSync("detail");a&&(i.detail=a)}})},computed:{login:function(){return this.$store.state.app.login}},watch:{},methods:{noOpen:function(){uni.showToast({title:"该功能未开放",icon:"none"})},toOrder:function(){uni.navigateTo({url:"/pages/allOrder/allOrder"})}}};a.default=n},c28d:function(i,a,t){var n=t("caaf");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var e=t("4f06").default;e("a8b3d05e",n,!0,{sourceMap:!1,shadowMode:!1})},caaf:function(i,a,t){var n=t("24fb");a=n(!1),a.push([i.i,".avag[data-v-5ca76a82]{width:%?280?%;height:%?280?%;display:block;margin:%?80?% auto %?50?%}.lineh1[data-v-5ca76a82]{padding:%?8?% 0}.width80[data-v-5ca76a82]{width:80%;margin:auto}.label1[data-v-5ca76a82]{width:30%;display:block;text-align:right}.val1[data-v-5ca76a82]{width:70%;display:block}.container[data-v-5ca76a82]{width:%?690?%;margin:%?30?% auto;border-radius:%?20?%;background:#fff;padding:%?20?% %?40?%}.margint20[data-v-5ca76a82]{margin-top:%?60?%;padding-bottom:%?200?%;z-index:100;position:relative}.r-icon[data-v-5ca76a82]{width:%?50?%;height:%?50?%}.user-bg[data-v-5ca76a82]{background:#ffcc32}",""]),i.exports=a},f6b9:function(i,a,t){"use strict";t.r(a);var n=t("0aa6"),e=t("1746");for(var s in e)"default"!==s&&function(i){t.d(a,i,(function(){return e[i]}))}(s);t("4707");var c,o=t("f0c5"),l=Object(o["a"])(e["default"],n["b"],n["c"],!1,null,"5ca76a82",null,!1,n["a"],c);a["default"]=l.exports}}]);