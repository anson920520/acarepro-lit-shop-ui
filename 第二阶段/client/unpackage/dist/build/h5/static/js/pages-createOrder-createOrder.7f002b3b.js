(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-createOrder-createOrder"],{"00eb":function(t,e,a){"use strict";var n=a("2131"),i=a.n(n);i.a},2131:function(t,e,a){var n=a("2164");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("465c5e68",n,!0,{sourceMap:!1,shadowMode:!1})},2164:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.createOrder[data-v-56f39d60]{padding:%?20?%;padding-bottom:%?150?%;min-height:90vh;background:#f0f0f0}.proListWrap[data-v-56f39d60]{background:#fff;border-radius:%?20?%;padding:%?20?%}.proList[data-v-56f39d60]{border-bottom:solid #000 1px;padding:%?20?% 0}.proList[data-v-56f39d60]:last-child{border:none!important}.leftImg[data-v-56f39d60]{width:%?140?%;height:%?140?%}.proCenter[data-v-56f39d60]{-webkit-box-flex:10;-webkit-flex:10;flex:10;padding-left:%?20?%}.proText[data-v-56f39d60]{font-size:%?23?%}.payBox[data-v-56f39d60]{width:100%;height:%?150?%;background:#000;position:fixed;left:0;bottom:50px;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?20?%;box-sizing:border-box}.payMain[data-v-56f39d60]{color:#fff}.subBtn[data-v-56f39d60]{background:#f90!important;color:#000;font-weight:700;font-size:%?30?%}.mt20[data-v-56f39d60]{margin-top:%?30?%}.inp[data-v-56f39d60]{background:#fff;padding:%?10?%;border-radius:%?10?%}.sanjiao[data-v-56f39d60]{width:0;height:0;border:solid %?15?% transparent;border-top:solid %?15?% #000;border-bottom:0;position:absolute;top:50%;right:%?29?%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}',""]),t.exports=e},"76ca":function(t,e,a){"use strict";a.r(e);var n=a("a341"),i=a("9b5b");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("00eb");var o,s=a("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"56f39d60",null,!1,n["a"],o);e["default"]=u.exports},"987a":function(t,e,a){"use strict";a("4160"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{total:0,discount:[],inCart:[],list:[{id:2,name:"网点自提"},{id:1,name:"送货到门店"}],type:{name:""}}},computed:{x:function(){return this.$store.state.x}},onLoad:function(t){this.getCart()},methods:{chooseType:function(t){this.type=this.list[t.detail.value]},getCart:function(){var t=this;t.$http({url:"getShoppingCar/",data:{user_id:uni.getStorageSync("userId"),page:1,offset:999},success:function(e){console.log(e),200==e.data.code?(t.total=0,e.data.data.forEach((function(e){e.image=window.imgUrl+"images/"+e.image,t.total+=e.price*e.number})),t.inCart=e.data.data):(t.inCart=[],t.total=0)},fail:function(t){console.log("err",t)}})},wxPay:function(){var t=this;if(!t.type.id)return uni.showToast({title:"请选择送货类型",icon:"none"}),!1;var e=[];this.inCart.forEach((function(t){var a={};a.Qty=1*t.number,a.name=t.name,a.id=t.product_id,a.price=t.price,a.commodity=t,t.number>0&&e.push(a)}));var a={Items:e,UserId:uni.getStorageSync("userId")+"",SaleId:uni.getStorageSync("userId")+"",status:0,total:1*t.total,userName:uni.getStorageSync("company"),sale:uni.getStorageSync("sale"),deliveryCost:0,giftAdditives:0,rebate:0,delivery_type:t.type.id};uni.showModal({title:"提示",content:"确认提交订单?",success:function(e){e.confirm&&(uni.showLoading({title:"加载中..."}),t.$http({url:"order/create",method:"POST",data:a,success:function(t){console.log(t),200==t.data.message?(uni.showToast({title:"下单成功"}),setTimeout((function(){uni.reLaunch({url:"/pages/allOrder/allOrder"})}),1e3)):uni.showToast({title:"操作失败",icon:"none"})},fail:function(){},complete:function(){uni.hideLoading()}}))}})}}};e.default=n},"9b5b":function(t,e,a){"use strict";a.r(e);var n=a("987a"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},a341:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("my-header"),a("v-uni-view",{staticClass:"createOrder"},[a("v-uni-text",{staticStyle:{"font-weight":"bold",padding:"20upx 0",display:"block"}},[t._v("送货类型：")]),a("v-uni-picker",{staticStyle:{"margin-bottom":"50upx"},attrs:{mode:"selector",range:t.list,"range-key":"name"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseType.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"relative"},[a("v-uni-view",{staticClass:"sanjiao"}),a("v-uni-input",{staticClass:"inp",attrs:{disabled:!0,placeholder:"点击选择送货方式"},model:{value:t.type.name,callback:function(e){t.$set(t.type,"name",e)},expression:"type.name"}})],1)],1),a("v-uni-text",{staticStyle:{"font-weight":"bold",padding:"20upx 0",display:"block"}},[t._v("已选产品：")]),a("v-uni-view",{staticClass:"proListWrap"},t._l(t.inCart,(function(e,n){return a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.number>0,expression:"item.number>0"}],key:n,staticClass:"proList ju"},[a("v-uni-image",{staticClass:"leftImg",attrs:{"lazy-load":!0,src:e.image,mode:"aspectFit"}}),a("v-uni-view",{staticClass:"proCenter"},[a("v-uni-view",{staticClass:"proText",staticStyle:{"font-weight":"bold"}},[t._v(t._s(e.name))]),a("v-uni-view",{staticClass:"proText"},[t._v("编号: "+t._s(e.proNumber))]),a("v-uni-view",{staticClass:"proText"},[t._v("粘度: "+t._s(e.viscosity))]),a("v-uni-view",{staticClass:"proText"},[t._v("规格: "+t._s(e.specification))]),a("v-uni-view",{staticClass:"proText"},[t._v("数量: "+t._s(e.number))])],1),a("v-uni-view",{staticClass:"al ju ",staticStyle:{"font-size":"25upx"}},[t._v("小计:"),a("v-uni-text",{staticStyle:{color:"#1E8449"}},[t._v("￥"+t._s(t.format(e.price*e.number)))])],1)],1)})),1),t._l(t.discount,(function(e,n){return a("v-uni-view",{key:n,staticClass:"proListWrap mt20 sb"},[a("v-uni-text",{staticClass:"colorYellow"},[t._v(t._s(e.name))]),a("v-uni-text",[t._v("赠送 "+t._s(e.number)+" 箱")])],1)})),a("v-uni-view",{staticClass:"payBox al"},[a("v-uni-view"),a("v-uni-view",{staticClass:"payMain"},[t._v("共计:"),a("v-uni-text",{staticStyle:{"font-weight":"bold",color:"#FF9900"}},[t._v("￥"+t._s(t.format(t.total)))])],1),a("v-uni-view",{staticClass:"payBtnWrap"},[a("v-uni-button",{staticClass:"subBtn",attrs:{type:"warn"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.wxPay.apply(void 0,arguments)}}},[t._v("提交订单")])],1)],1)],2)],1)},r=[]}}]);