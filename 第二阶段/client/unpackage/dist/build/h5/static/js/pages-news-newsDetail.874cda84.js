(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-newsDetail"],{"0ae7":function(t,a,i){var e=i("2ffe");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("b970c4c4",e,!0,{sourceMap:!1,shadowMode:!1})},"1bbd":function(t,a,i){"use strict";i.r(a);var e=i("3d00"),n=i("e1e6");for(var s in n)"default"!==s&&function(t){i.d(a,t,(function(){return n[t]}))}(s);i("b9f2");var r,c=i("f0c5"),d=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"49beb404",null,!1,e["a"],r);a["default"]=d.exports},"2ffe":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".pad30[data-v-49beb404]{padding:%?30?% 0}.adv-wrap[data-v-49beb404]{height:%?480?%}.adv-item[data-v-49beb404]{width:100%;height:100%}.full-img[data-v-49beb404]{width:100%;height:100%}.container[data-v-49beb404]{margin:%?30?% auto;width:%?660?%;background:#fff}.backIco[data-v-49beb404]{width:0;height:0;border:solid %?15?% transparent;border-right:solid #000 %?15?%;margin-right:%?15?%}",""]),t.exports=a},"3d00":function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return s})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"bg-2"},[i("my-header"),i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"al op",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.back.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"backIco"}),t._v("返回上一页")],1)],1),i("v-uni-view",{staticClass:"container"},[i("v-uni-swiper",{staticClass:"adv-wrap",attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:5e3,duration:500}},t._l(t.img,(function(t,a){return i("v-uni-swiper-item",{key:t.name},[i("v-uni-view",{staticClass:"adv-item"},[i("v-uni-image",{staticClass:"full-img",attrs:{src:t,mode:"aspectFill"}})],1)],1)})),1)],1),i("v-uni-view",{staticClass:"container",staticStyle:{"min-height":"700upx"}},[i("v-uni-view",{staticClass:"size35 bold"},[i("v-uni-text",[t._v(t._s(t.detail.name))])],1),i("v-uni-view",{staticClass:"news-content1",domProps:{innerHTML:t._s(t.detail.detail)}})],1)],1)},s=[]},"468f":function(t,a,i){"use strict";i("4160"),i("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{img:[],id:"",detail:{}}},onLoad:function(t){this.id=t.id,this.getData()},methods:{back:function(){uni.navigateBack()},getData:function(){var t=this;this.$http({url:"getClientNews/",data:{id:t.id},success:function(a){console.log(a),200==a.data.code?(a.data.data.forEach((function(t){t.CreatedAt=new Date(t.CreatedAt).toLocaleDateString()})),t.detail=a.data.data[0],t.img=t.detail.image):t.detail={}}})}}};a.default=e},b9f2:function(t,a,i){"use strict";var e=i("0ae7"),n=i.n(e);n.a},e1e6:function(t,a,i){"use strict";i.r(a);var e=i("468f"),n=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(a,t,(function(){return e[t]}))}(s);a["default"]=n.a}}]);