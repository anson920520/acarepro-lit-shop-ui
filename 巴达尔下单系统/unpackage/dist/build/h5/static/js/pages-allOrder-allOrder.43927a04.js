(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-allOrder-allOrder"],{"0577":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.myTitle[data-v-7d493659]{font-size:%?35?%;color:#888;padding:%?20?% 0}.allOrderTop[data-v-7d493659]{position:-webkit-sticky;position:sticky;top:0;background:#fff}.orderWrap[data-v-7d493659]{box-sizing:border-box;-webkit-box-flex:10;-webkit-flex:10;flex:10;padding:0 %?20?%}.orderList[data-v-7d493659]{border:solid #000 1px;border-radius:%?20?%;font-size:%?23?%;margin:%?20?% 0;overflow:hidden}.orderListTop[data-v-7d493659]{padding:%?20?%}.receive[data-v-7d493659]{-webkit-box-flex:10;-webkit-flex:10;flex:10;background:#1e8449;color:#000;padding:%?20?% 0;text-align:center}.cancelBtn[data-v-7d493659]{-webkit-box-flex:10;-webkit-flex:10;flex:10;background:#e50000;color:#000;padding:%?20?% 0;text-align:center}.table[data-v-7d493659]{border-bottom:solid 1px #333;text-align:center}.tableTr[data-v-7d493659]:nth-child(even){background:#ccc}.proName[data-v-7d493659]{width:%?200?%;margin-right:%?10?%;text-align:left!important}.received[data-v-7d493659]{background:#ccc!important}.orderTotal[data-v-7d493659]{text-align:right}.blueColor[data-v-7d493659]{background:#f90;color:#000}.copy[data-v-7d493659]{margin-left:%?20?%;color:#007aff}.width50[data-v-7d493659]{width:50%;float:left}.width100[data-v-7d493659]{width:100%}',""]),e.exports=t},"49c4":function(e,t,n){"use strict";n.r(t);var i=n("5ca3"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"55d9":function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"allOrder",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$store.commit("setState",{key:"showBox",value:!1})}}},[n("v-uni-view",{staticClass:"allOrderTop"},[n("Header"),0===e.sliceData.length?n("v-uni-view",{staticClass:"noData"},[e._v("暂无订单")]):n("v-uni-view",{staticClass:"myTitle ju"},[e._v("我的订单")])],1),n("v-uni-view",{staticClass:"orderWrap"},e._l(e.sliceData,(function(t,i){return n("v-uni-view",{key:i,staticClass:"orderList",attrs:{id:"order"+i},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.longtab(i)}}},[n("v-uni-view",{staticClass:"orderListTop"},[n("v-uni-view",{staticClass:"orderInfo sb"},[n("v-uni-view",[e._v("订单编号: "+e._s(t.OrderID?t.OrderID:t.orderId))]),0==t.status?n("v-uni-view",[e._v("正在处理")]):2==t.status||3==t.status?n("v-uni-view",[e._v("待发货")]):4==t.status?n("v-uni-view",{staticStyle:{color:"blue"}},[e._v("待收货")]):1==t.status?n("v-uni-view",{staticStyle:{color:"green"}},[e._v("已收货")]):e._e()],1),n("v-uni-view",{staticClass:"orderInfo"},[e._v("用户: "+e._s(t.userName))]),n("v-uni-view",{staticClass:"orderInfo"},[e._v("订单创建时间: "+e._s(t.CreatedAt))]),t.logistics_company?n("v-uni-view",{staticClass:"orderInfo"},[e._v("物流信息: "+e._s(t.logistics_company)+"  "+e._s(t.logistics_num))]):n("v-uni-view",{staticClass:"orderInfo"},[e._v("物流信息: 暂无物流信息")]),n("v-uni-view",{staticClass:"orderInfo"},[e._v("发货时间: "+e._s(t.delivery_time?t.delivery_time:"暂无发货时间"))]),n("v-uni-view",{staticClass:"table"},[n("v-uni-view",{staticClass:"tableTr al",staticStyle:{"font-weight":"bold","border-bottom":"#333333 solid 1px"}},[n("v-uni-view",{staticClass:"tableTd proName",staticStyle:{flex:"3"}},[e._v("产品")]),n("v-uni-view",{staticClass:"tableTd",staticStyle:{flex:"1.5"}},[e._v("规格")]),n("v-uni-view",{staticClass:"tableTd",staticStyle:{flex:"0.5"}},[e._v("箱数")]),n("v-uni-view",{staticClass:"tableTd",staticStyle:{flex:"1"}},[e._v("金额")])],1),e._l(t.Items,(function(t,i){return n("v-uni-view",{key:i,staticClass:"tableTr ju"},[n("v-uni-view",{staticClass:"tableTd proName",staticStyle:{flex:"3"}},[e._v(e._s(t.name))]),n("v-uni-view",{staticClass:"tableTd",staticStyle:{flex:"1.5"}},[e._v(e._s(t.commodity?t.commodity.specification:""))]),n("v-uni-view",{staticClass:"tableTd",staticStyle:{flex:"0.5"}},[e._v(e._s(t.Qty))]),n("v-uni-view",{staticClass:"tableTd",staticStyle:{flex:"1"}},[e._v(e._s(t.price))])],1)}))],2),n("v-uni-view",{staticClass:"orderTotal"},[e._v("金额: ￥"),n("v-uni-text",{staticStyle:{color:"#FF9900"}},[e._v(e._s(t.Total))])],1),n("v-uni-view",{staticClass:"clearBoth"},[n("v-uni-view",{staticClass:"width50"},[n("v-uni-text",[e._v("赠送添加剂: "+e._s(t.giftAdditives)+"箱")])],1),n("v-uni-view",{staticClass:"width50"},[n("v-uni-text",[e._v("返利物资: "+e._s(t.rebate)+"%")])],1),n("v-uni-view",{staticClass:"width50"},[n("v-uni-text",[e._v("返利总金额: ￥"+e._s(t.rebate_total))])],1),n("v-uni-view",{staticClass:"width50"},[n("v-uni-text",[e._v("包邮:")]),t.deliveryCost?e._e():n("v-uni-text",[e._v("未处理")]),1==t.deliveryCost?n("v-uni-text",[e._v("是")]):e._e(),2==t.deliveryCost?n("v-uni-text",[e._v("否")]):e._e()],1),n("v-uni-view",{staticClass:"width100"},[n("v-uni-text",[e._v("赠送: "+e._s(t.gift?t.gift:"未处理"))])],1)],1)],1),n("v-uni-view",{staticClass:"ju"},[0==t.status?n("v-uni-view",{staticClass:"receive blueColor op",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.addImg(t)}}},[e._v("上传转账记录")]):e._e(),2==t.status||3==t.status||4==t.status?n("v-uni-view",{class:["receive","op"],on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.received(t)}}},[e._v("收货")]):e._e(),0==t.status?n("v-uni-view",{class:["cancelBtn","op"],on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.del(t)}}},[e._v("取消订单")]):e._e()],1)],1)})),1)],1)},o=[]},"5ca3":function(e,t,n){"use strict";var i=n("4ea4");n("4160"),n("26e9"),n("fb6a"),n("ace4"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("1276"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("159b"),n("ddb0"),n("2b3d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("b2aa")),o={data:function(){return{allData:[],sliceData:[],offect:10}},onLoad:function(){this.getData()},onReachBottom:function(){this.offect+=5,this.sliceData=this.allData.slice(0,this.offect)},methods:{longtab:function(e){return!1},downloadFile:function(e,t){var n=function(e){for(var t=e.split(";base64,"),n=t[0].split(":")[1],i=window.atob(t[1]),a=i.length,o=new Uint8Array(a),r=0;r<a;++r)o[r]=i.charCodeAt(r);return new Blob([o],{type:n})},i=document.createElement("a"),a=n(e),o=document.createEvent("HTMLEvents");o.initEvent("click",!0,!0),i.download=t,i.href=URL.createObjectURL(a),i.click()},del:function(e){var t=this;uni.showModal({title:"提示",content:"确定取消这个订单?",success:function(n){n.confirm&&uni.request({url:t.$store.state.baseURL+"order/delete/"+e.ID,method:"DELETE",success:function(e){console.log(e),200==e.data.code&&(t.getData(),uni.showToast({title:"已取消"}))}})}})},addImg:function(e){var t=this;uni.chooseImage({count:6,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(n){t.chooseSuccessMethod(n.tempFilePaths,e)}})},chooseSuccessMethod:function(e,t){var n=this;e.forEach((function(e,i){var o=new Image;o.src=e,o.onload=function(){var e=this,i=!1;a.default.getData(o,(function(){a.default.getAllTags(this);i=a.default.getTag(this,"Orientation");var o=e.width,r=e.height,s=.6,l=document.createElement("canvas"),c=l.getContext("2d"),u=document.createAttribute("width");u.nodeValue=o;var d=document.createAttribute("height");d.nodeValue=r,l.setAttributeNode(u),l.setAttributeNode(d),6==i&&(c.translate(o/2,r/2),c.rotate(90*Math.PI/180),c.translate(-o/2,-r/2)),c.drawImage(e,0,0,o,r);var f=l.toDataURL("image/jpeg",s);uni.uploadFile({url:n.$store.state.baseURL+"order/lock/"+t.ID,filePath:f,name:"file",fileType:"image",formData:{id:t.ID},success:function(e){console.log(e),e.data?(e=JSON.parse(e.data),201==e.status?(uni.showToast({title:"上传成功"}),n.getData()):uni.showToast({title:"上传失败",icon:"none"})):uni.showToast({title:"上传失败",icon:"none"})},fail:function(){uni.showToast({title:"网络错误，请稍后再试",icon:"none"})}})}))}}))},getData:function(){var e=this;uni.showLoading({title:"加载中..."}),uni.request({url:e.$store.state.baseURL+"order/"+uni.getStorageSync("userId"),method:"GET",success:function(t){console.log(t),t.data&&(e.allData=t.data.reverse(),e.allData.forEach((function(e){e.CreatedAt=e.CreatedAt.replace("+08:00","").replace("T"," "),e.orderId="ACP"+("0000"+e.ID).slice(-5)})),e.sliceData=e.allData.slice(0,e.offect))},complete:function(){uni.hideLoading()}})},received:function(e){console.log(e);var t=this;uni.showModal({title:"提示",content:"确认收货?",success:function(n){n.confirm&&(uni.showLoading({title:"加载中..."}),uni.request({url:t.$store.state.baseURL+"updateStatus/"+e.ID,method:"PUT",success:function(e){console.log(e),200==e.data.code?(t.getData(),uni.hideLoading()):uni.showToast({title:"操作失败,请稍后再试",icon:"none"})},fail:function(){uni.showToast({title:"网络错误,请稍后再试",icon:"none"})},complete:function(){setTimeout((function(){uni.hideLoading()}),1e3)}}))}})}}};t.default=o},"5d92":function(e,t,n){"use strict";var i=n("793a"),a=n.n(i);a.a},"793a":function(e,t,n){var i=n("0577");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("5a8ddd96",i,!0,{sourceMap:!1,shadowMode:!1})},b2aa:function(e,t,i){var a,o;i("c975"),i("fb6a"),i("c19f"),i("ace4"),i("b420"),i("a9e3"),i("d3b7"),i("ac1f"),i("466d"),i("5319"),i("5cc6"),i("9a8c"),i("a975"),i("735e"),i("c1ac"),i("d139"),i("3a7b"),i("d5d6"),i("82f8"),i("e91f"),i("60bd"),i("5f96"),i("3280"),i("3fcc"),i("ca91"),i("25a1"),i("cd26"),i("3c5d"),i("2954"),i("649e"),i("219c"),i("170b"),i("b39a"),i("72f7"),function(){var i=!1,r=function e(t){return t instanceof e?t:this instanceof e?void(this.EXIFwrapped=t):new e(t)};e.exports&&(t=e.exports=r),t.EXIF=r;var s=r.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},l=r.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},c=r.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},u=r.IFD1Tags={256:"ImageWidth",257:"ImageHeight",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",273:"StripOffsets",274:"Orientation",277:"SamplesPerPixel",278:"RowsPerStrip",279:"StripByteCounts",282:"XResolution",283:"YResolution",284:"PlanarConfiguration",296:"ResolutionUnit",513:"JpegIFOffset",514:"JpegIFByteCount",529:"YCbCrCoefficients",530:"YCbCrSubSampling",531:"YCbCrPositioning",532:"ReferenceBlackWhite"},d=r.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}};function f(e){return!!e.exifdata}function g(e,t){t=t||e.match(/^data\:([^\;]+)\;base64,/im)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var n=atob(e),i=n.length,a=new ArrayBuffer(i),o=new Uint8Array(a),r=0;r<i;r++)o[r]=n.charCodeAt(r);return a}function h(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="blob",n.onload=function(e){200!=this.status&&0!==this.status||t(this.response)},n.send()}function v(e,t){function n(n){var i=p(n);e.exifdata=i||{};var a=m(n);if(e.iptcdata=a||{},r.isXmpEnabled){var o=I(n);e.xmpdata=o||{}}t&&t.call(e)}if(e.src)if(/^data\:/i.test(e.src)){var a=g(e.src);n(a)}else if(/^blob\:/i.test(e.src)){var o=new FileReader;o.onload=function(e){n(e.target.result)},h(e.src,(function(e){o.readAsArrayBuffer(e)}))}else{var s=new XMLHttpRequest;s.onload=function(){if(200!=this.status&&0!==this.status)throw"Could not load image";n(s.response),s=null},s.open("GET",e.src,!0),s.responseType="arraybuffer",s.send(null)}else if(self.FileReader&&(e instanceof self.Blob||e instanceof self.File)){o=new FileReader;o.onload=function(e){i&&console.log("Got file of length "+e.target.result.byteLength),n(e.target.result)},o.readAsArrayBuffer(e)}}function p(e){var t=new DataView(e);if(i&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return i&&console.log("Not a valid JPEG"),!1;var n,a=2,o=e.byteLength;while(a<o){if(255!=t.getUint8(a))return i&&console.log("Not a valid marker at offset "+a+", found: "+t.getUint8(a)),!1;if(n=t.getUint8(a+1),i&&console.log(n),225==n)return i&&console.log("Found 0xFFE1 marker"),D(t,a+4,t.getUint16(a+2)-2);a+=2+t.getUint16(a+2)}}function m(e){var t=new DataView(e);if(i&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return i&&console.log("Not a valid JPEG"),!1;var n=2,a=e.byteLength,o=function(e,t){return 56===e.getUint8(t)&&66===e.getUint8(t+1)&&73===e.getUint8(t+2)&&77===e.getUint8(t+3)&&4===e.getUint8(t+4)&&4===e.getUint8(t+5)};while(n<a){if(o(t,n)){var r=t.getUint8(n+7);r%2!==0&&(r+=1),0===r&&(r=4);var s=n+8+r,l=t.getUint16(n+6+r);return w(e,s,l)}n++}}var b={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};function w(e,t,n){var i,a,o,r,s=new DataView(e),l={},c=t;while(c<t+n)28===s.getUint8(c)&&2===s.getUint8(c+1)&&(r=s.getUint8(c+2),r in b&&(o=s.getInt16(c+3),o+5,a=b[r],i=P(s,c+5,o),l.hasOwnProperty(a)?l[a]instanceof Array?l[a].push(i):l[a]=[l[a],i]:l[a]=i)),c++;return l}function S(e,t,n,a,o){var r,s,l,c=e.getUint16(n,!o),u={};for(l=0;l<c;l++)r=n+12*l+2,s=a[e.getUint16(r,!o)],!s&&i&&console.log("Unknown tag: "+e.getUint16(r,!o)),u[s]=C(e,r,t,n,o);return u}function C(e,t,n,i,a){var o,r,s,l,c,u,d=e.getUint16(t+2,!a),f=e.getUint32(t+4,!a),g=e.getUint32(t+8,!a)+n;switch(d){case 1:case 7:if(1==f)return e.getUint8(t+8,!a);for(o=f>4?g:t+8,r=[],l=0;l<f;l++)r[l]=e.getUint8(o+l);return r;case 2:return o=f>4?g:t+8,P(e,o,f-1);case 3:if(1==f)return e.getUint16(t+8,!a);for(o=f>2?g:t+8,r=[],l=0;l<f;l++)r[l]=e.getUint16(o+2*l,!a);return r;case 4:if(1==f)return e.getUint32(t+8,!a);for(r=[],l=0;l<f;l++)r[l]=e.getUint32(g+4*l,!a);return r;case 5:if(1==f)return c=e.getUint32(g,!a),u=e.getUint32(g+4,!a),s=new Number(c/u),s.numerator=c,s.denominator=u,s;for(r=[],l=0;l<f;l++)c=e.getUint32(g+8*l,!a),u=e.getUint32(g+4+8*l,!a),r[l]=new Number(c/u),r[l].numerator=c,r[l].denominator=u;return r;case 9:if(1==f)return e.getInt32(t+8,!a);for(r=[],l=0;l<f;l++)r[l]=e.getInt32(g+4*l,!a);return r;case 10:if(1==f)return e.getInt32(g,!a)/e.getInt32(g+4,!a);for(r=[],l=0;l<f;l++)r[l]=e.getInt32(g+8*l,!a)/e.getInt32(g+4+8*l,!a);return r}}function x(e,t,n){var i=e.getUint16(t,!n);return e.getUint32(t+2+12*i,!n)}function y(e,t,n,i){var a=x(e,t+n,i);if(!a)return{};if(a>e.byteLength)return{};var o=S(e,t,t+a,u,i);if(o["Compression"])switch(o["Compression"]){case 6:if(o.JpegIFOffset&&o.JpegIFByteCount){var r=t+o.JpegIFOffset,s=o.JpegIFByteCount;o["blob"]=new Blob([new Uint8Array(e.buffer,r,s)],{type:"image/jpeg"})}break;case 1:console.log("Thumbnail image format is TIFF, which is not implemented.");break;default:console.log("Unknown thumbnail image format '%s'",o["Compression"])}else 2==o["PhotometricInterpretation"]&&console.log("Thumbnail image format is RGB, which is not implemented.");return o}function P(e,t,i){var a="";for(n=t;n<t+i;n++)a+=String.fromCharCode(e.getUint8(n));return a}function D(e,t){if("Exif"!=P(e,t,4))return i&&console.log("Not valid EXIF data! "+P(e,t,4)),!1;var n,a,o,r,u,f=t+6;if(18761==e.getUint16(f))n=!1;else{if(19789!=e.getUint16(f))return i&&console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),!1;n=!0}if(42!=e.getUint16(f+2,!n))return i&&console.log("Not valid TIFF data! (no 0x002A)"),!1;var g=e.getUint32(f+4,!n);if(g<8)return i&&console.log("Not valid TIFF data! (First offset less than 8)",e.getUint32(f+4,!n)),!1;if(a=S(e,f,f+g,l,n),a.ExifIFDPointer)for(o in r=S(e,f,f+a.ExifIFDPointer,s,n),r){switch(o){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":r[o]=d[o][r[o]];break;case"ExifVersion":case"FlashpixVersion":r[o]=String.fromCharCode(r[o][0],r[o][1],r[o][2],r[o][3]);break;case"ComponentsConfiguration":r[o]=d.Components[r[o][0]]+d.Components[r[o][1]]+d.Components[r[o][2]]+d.Components[r[o][3]];break}a[o]=r[o]}if(a.GPSInfoIFDPointer)for(o in u=S(e,f,f+a.GPSInfoIFDPointer,c,n),u){switch(o){case"GPSVersionID":u[o]=u[o][0]+"."+u[o][1]+"."+u[o][2]+"."+u[o][3];break}a[o]=u[o]}return a["thumbnail"]=y(e,f,g,n),a}function I(e){if("DOMParser"in self){var t=new DataView(e);if(i&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return i&&console.log("Not a valid JPEG"),!1;var n=2,a=e.byteLength,o=new DOMParser;while(n<a-4){if("http"==P(t,n,4)){var r=n-1,s=t.getUint16(n-2)-1,l=P(t,r,s),c=l.indexOf("xmpmeta>")+8;l=l.substring(l.indexOf("<x:xmpmeta"),c);var u=l.indexOf("x:xmpmeta")+10;l=l.slice(0,u)+'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '+l.slice(u);var d=o.parseFromString(l,"text/xml");return T(d)}n++}}}function F(e){var t={};if(1==e.nodeType){if(e.attributes.length>0){t["@attributes"]={};for(var n=0;n<e.attributes.length;n++){var i=e.attributes.item(n);t["@attributes"][i.nodeName]=i.nodeValue}}}else if(3==e.nodeType)return e.nodeValue;if(e.hasChildNodes())for(var a=0;a<e.childNodes.length;a++){var o=e.childNodes.item(a),r=o.nodeName;if(null==t[r])t[r]=F(o);else{if(null==t[r].push){var s=t[r];t[r]=[],t[r].push(s)}t[r].push(F(o))}}return t}function T(e){try{var t={};if(e.children.length>0)for(var n=0;n<e.children.length;n++){var i=e.children.item(n),a=i.attributes;for(var o in a){var r=a[o],s=r.nodeName,l=r.nodeValue;void 0!==s&&(t[s]=l)}var c=i.nodeName;if("undefined"==typeof t[c])t[c]=F(i);else{if("undefined"==typeof t[c].push){var u=t[c];t[c]=[],t[c].push(u)}t[c].push(F(i))}}else t=e.textContent;return t}catch(d){console.log(d.message)}}r.enableXmp=function(){r.isXmpEnabled=!0},r.disableXmp=function(){r.isXmpEnabled=!1},r.getData=function(e,t){return!((self.Image&&e instanceof self.Image||self.HTMLImageElement&&e instanceof self.HTMLImageElement)&&!e.complete)&&(f(e)?t&&t.call(e):v(e,t),!0)},r.getTag=function(e,t){if(f(e))return e.exifdata[t]},r.getIptcTag=function(e,t){if(f(e))return e.iptcdata[t]},r.getAllTags=function(e){if(!f(e))return{};var t,n=e.exifdata,i={};for(t in n)n.hasOwnProperty(t)&&(i[t]=n[t]);return i},r.getAllIptcTags=function(e){if(!f(e))return{};var t,n=e.iptcdata,i={};for(t in n)n.hasOwnProperty(t)&&(i[t]=n[t]);return i},r.pretty=function(e){if(!f(e))return"";var t,n=e.exifdata,i="";for(t in n)n.hasOwnProperty(t)&&("object"==typeof n[t]?n[t]instanceof Number?i+=t+" : "+n[t]+" ["+n[t].numerator+"/"+n[t].denominator+"]\r\n":i+=t+" : ["+n[t].length+" values]\r\n":i+=t+" : "+n[t]+"\r\n");return i},r.readFromBinaryFile=function(e){return p(e)},a=[],o=function(){return r}.apply(t,a),void 0===o||(e.exports=o)}.call(this)},b420:function(e,t,n){var i=n("23e7"),a=n("621a"),o=n("a981");i({global:!0,forced:!o},{DataView:a.DataView})},cf7a:function(e,t,n){"use strict";n.r(t);var i=n("55d9"),a=n("49c4");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("5d92");var r,s=n("f0c5"),l=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"7d493659",null,!1,i["a"],r);t["default"]=l.exports}}]);