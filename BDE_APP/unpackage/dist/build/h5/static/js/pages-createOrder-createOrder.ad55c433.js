(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-createOrder-createOrder"],{"0136":function(t,n,a){var i=a("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.createOrder[data-v-8b819b24]{padding:%?20?%;padding-bottom:%?150?%;min-height:90vh;background:#f0f0f0}.proListWrap[data-v-8b819b24]{background:#fff;border-radius:%?20?%;padding:%?20?%}.proList[data-v-8b819b24]{border-bottom:solid #000 1px;padding:%?20?% 0}.proList[data-v-8b819b24]:last-child{border:none!important}.leftImg[data-v-8b819b24]{width:%?140?%;height:%?140?%}.proCenter[data-v-8b819b24]{-webkit-box-flex:10;-webkit-flex:10;flex:10;padding-left:%?20?%}.proText[data-v-8b819b24]{font-size:%?23?%}.payBox[data-v-8b819b24]{width:100%;height:%?150?%;background:#000;position:fixed;left:0;bottom:0;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?20?%;box-sizing:border-box}.payMain[data-v-8b819b24]{color:#fff}.subBtn[data-v-8b819b24]{background:#f90!important;color:#000;font-weight:700;font-size:%?30?%}.mt20[data-v-8b819b24]{margin-top:%?30?%}',""]),t.exports=n},"1bc2":function(t,n,a){var i=a("0136");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=a("4f06").default;e("af25c28e",i,!0,{sourceMap:!1,shadowMode:!1})},"29c0":function(t,n,a){"use strict";a.r(n);var i=a("c5dd"),e=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(n,t,(function(){return i[t]}))}(r);n["default"]=e.a},7758:function(t,n,a){"use strict";var i=a("1bc2"),e=a.n(i);e.a},b1dc:function(t,n,a){"use strict";var i;a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return r})),a.d(n,"a",(function(){return i}));var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"createOrder"},[a("v-uni-text",{staticStyle:{"font-weight":"bold",padding:"20upx 0",display:"block"}},[t._v("已选商品")]),a("v-uni-view",{staticClass:"proListWrap"},t._l(t.inCart,(function(n,i){return a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:n.num>0,expression:"item.num>0"}],key:i,staticClass:"proList ju"},[a("v-uni-image",{staticClass:"leftImg",attrs:{"lazy-load":!0,src:t.$store.state.imgUrl+"images/"+n.image,mode:"aspectFit"}}),a("v-uni-view",{staticClass:"proCenter"},[a("v-uni-view",{staticClass:"proText",staticStyle:{"font-weight":"bold"}},[t._v(t._s(n.name))]),a("v-uni-view",{staticClass:"proText"},[t._v("编号: "+t._s(n.proNumber))]),a("v-uni-view",{staticClass:"proText"},[t._v("粘度: "+t._s(n.viscosity))]),a("v-uni-view",{staticClass:"proText"},[t._v("规格: "+t._s(n.specification))]),a("v-uni-view",{staticClass:"proText"},[t._v("数量: "+t._s(n.num))])],1),a("v-uni-view",{staticClass:"al ju ",staticStyle:{"font-size":"25upx"}},[t._v("小计:"),a("v-uni-text",{staticStyle:{color:"#1E8449"}},[t._v("￥"+t._s(n.price*n.num))])],1)],1)})),1),t._l(t.discount,(function(n,i){return a("v-uni-view",{key:i,staticClass:"proListWrap mt20 sb"},[a("v-uni-text",{staticClass:"colorYellow"},[t._v(t._s(n.name))]),a("v-uni-text",[t._v("赠送 "+t._s(n.Qty)+" 箱")])],1)})),a("v-uni-view",{staticClass:"payBox al"},[a("v-uni-view"),a("v-uni-view",{staticClass:"payMain"},[t._v("共计:"),a("v-uni-text",{staticStyle:{"font-weight":"bold",color:"#FF9900"}},[t._v("￥"+t._s(t.total))])],1),a("v-uni-view",{staticClass:"payBtnWrap"},[a("v-uni-button",{staticClass:"subBtn",attrs:{type:"warn"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.wxPay.apply(void 0,arguments)}}},[t._v("提交订单")])],1)],1)],2)},r=[]},c5dd:function(t,n,a){"use strict";a("4160"),a("159b"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{total:0,discount:[]}},computed:{inCart:function(){return this.$store.state.inCart},x:function(){return this.$store.state.x}},onLoad:function(t){var n=this;this.total=t.total;var a={},i=JSON.parse(JSON.stringify(n.inCart));for(var e in i.forEach((function(t){a[t.categoryId]?a[t.categoryId].push(t):a[t.categoryId]=[t]})),a){var r=0;a[e].forEach((function(t){r+=t.num*t.desc.specification.val1*t.desc.specification.val3}));var o=Math.floor(r/240)*a[e][0].category.Promotion;o&&this.discount.push({type:"discount",name:a[e][0].category.Desc,Qty:1*o})}},methods:{wxPay:function(){var t=this,n=[];this.inCart.forEach((function(t){var a={};a.Qty=1*t.num,a.name=t.name,a.id=t.ID,a.price=t.price,a.commodity=t,t.num>0&&n.push(a)}));var a={},i=JSON.parse(JSON.stringify(t.inCart));for(var e in i.forEach((function(t){a[t.categoryId]?a[t.categoryId].push(t):a[t.categoryId]=[t]})),a){var r=0;a[e].forEach((function(t){r+=t.num*t.desc.specification.val1*t.desc.specification.val3}));var o=Math.floor(r/240)*a[e][0].category.Promotion;o&&n.push({type:"discount",name:a[e][0].category.Desc,Qty:1*o})}var s={Items:n,UserId:uni.getStorageSync("userId")+"",SaleId:uni.getStorageSync("userId")+"",status:0,total:1*t.total};uni.showModal({title:"提示",content:"确认提交订单?",success:function(n){n.confirm&&(uni.showLoading({title:"加载中..."}),uni.request({url:t.$store.state.baseURL+"order/create",method:"POST",data:s,success:function(t){console.log(t),200==t.data.message?(uni.showToast({title:"下单成功"}),setTimeout((function(){uni.reLaunch({url:"/pages/allOrder/allOrder"})}),1e3)):uni.showToast({title:"操作失败",icon:"none"})},fail:function(){},complete:function(){uni.hideLoading()}}))}})}}};n.default=i},f2d8:function(t,n,a){"use strict";a.r(n);var i=a("b1dc"),e=a("29c0");for(var r in e)"default"!==r&&function(t){a.d(n,t,(function(){return e[t]}))}(r);a("7758");var o,s=a("f0c5"),c=Object(s["a"])(e["default"],i["b"],i["c"],!1,null,"8b819b24",null,!1,i["a"],o);n["default"]=c.exports}}]);