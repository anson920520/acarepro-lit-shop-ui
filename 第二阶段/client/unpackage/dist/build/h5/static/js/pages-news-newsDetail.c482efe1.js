(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-newsDetail"],{"1bbd":function(t,a,e){"use strict";e.r(a);var i=e("2d3c"),n=e("e1e6");for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("4b37");var c,d=e("f0c5"),r=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"3e4e4402",null,!1,i["a"],c);a["default"]=r.exports},"2c7e":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".pad30[data-v-3e4e4402]{padding:%?30?% 0}.news-content[data-v-3e4e4402]{text-indent:2em}.adv-wrap[data-v-3e4e4402]{height:%?480?%}.adv-item[data-v-3e4e4402]{width:100%;height:100%}.full-img[data-v-3e4e4402]{width:100%;height:100%}.container[data-v-3e4e4402]{margin:%?30?% auto;width:%?690?%;background:#fff}.backIco[data-v-3e4e4402]{width:0;height:0;border:solid %?15?% transparent;border-right:solid #000 %?15?%;margin-right:%?15?%}",""]),t.exports=a},"2d3c":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"bg-2"},[e("my-header"),e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"al op",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.back.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"backIco"}),t._v("返回上一页")],1)],1),e("v-uni-view",{staticClass:"container"},[e("v-uni-swiper",{staticClass:"adv-wrap",attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:5e3,duration:500}},t._l(t.img,(function(t,a){return e("v-uni-swiper-item",{key:t.name},[e("v-uni-view",{staticClass:"adv-item"},[e("v-uni-image",{staticClass:"full-img",attrs:{src:t,mode:"aspectFill"}})],1)],1)})),1)],1),e("v-uni-view",{staticClass:"container",staticStyle:{"min-height":"700upx"}},[e("v-uni-view",{staticClass:"size35 bold"},[e("v-uni-text",[t._v(t._s(t.detail.name))])],1),e("v-uni-view",{staticClass:"flex-end size20 color-5 pad30"},[e("v-uni-text",[t._v(t._s(t.detail.CreatedAt))])],1),e("v-uni-view",{staticClass:"news-content"},[e("v-uni-text",[t._v(t._s(t.detail.detail))])],1)],1)],1)},s=[]},"468f":function(t,a,e){"use strict";e("4160"),e("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{img:[],id:"",detail:{}}},onLoad:function(t){this.id=t.id,this.getData()},methods:{back:function(){uni.navigateBack()},getData:function(){var t=this;this.$http({url:"getClientNews/",data:{id:t.id},success:function(a){console.log(a),200==a.data.code?(a.data.data.forEach((function(t){t.CreatedAt=new Date(t.CreatedAt).toLocaleDateString()})),t.detail=a.data.data[0],t.img=t.detail.image):t.detail={}}})}}};a.default=i},"4b37":function(t,a,e){"use strict";var i=e("abe6"),n=e.n(i);n.a},abe6:function(t,a,e){var i=e("2c7e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("513600f6",i,!0,{sourceMap:!1,shadowMode:!1})},e1e6:function(t,a,e){"use strict";e.r(a);var i=e("468f"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a}}]);