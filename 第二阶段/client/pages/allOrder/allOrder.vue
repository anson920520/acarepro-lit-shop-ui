<style lang="scss" scoped>
.myTitle{
	font-size: 35upx;
	color: #888888;
	padding: 20upx 0;
}
.allOrder {
	// display: flex;
	// flex-direction: column;
	// // min-height: 100vh;
}
.allOrderTop {
	position: sticky;
	top:0;
	background:#FFF;
}
.orderWrap {
	// border: solid red 1px;
	box-sizing: border-box;
	flex:10;
	padding: 0 20upx;
}
.orderList {
	border: solid black 1px;
	border-radius: 20upx;
	font-size: 23upx;
	margin: 20upx 0;
	overflow: hidden;
}
.orderListTop {
	padding: 20upx;
}
.receive {
	flex: 10;
	background: #1E8449;
	color: black;
	padding: 20upx 0;
	text-align: center;
}
.cancelBtn {
	flex: 10;
	background: #E50000;
	color: black;
	padding: 20upx 0;
	text-align: center;
}
// 表格
.table {
	border-bottom: solid 1px #333333;
	text-align: center;
}
.tableTr:nth-child(even){
	background:#CCCCCC
}
.proName {
	width: 200upx;
	margin-right:10upx;
	text-align:left !important;
}
.tableTd {
	// flex:10;
}
.received {
	background: #CCC !important;
}
.orderTotal {
	text-align: right;
}
.blueColor {
	background: #FF9900;
	color: #000;
}
.copy {
	margin-left: 20upx;
	color: #007AFF;
}
.width50 {
	width: 50%;
	float: left;
}
.width100 {
	width: 100%;
}
.height100 {
	height: 100%;
}
</style>

<template>
	<view class="allOrder bg-2 height100" >
		
		<view v-if="sliceData.length===0">
			<view class="noData" >暂无订单</view>
		</view>
		<view class="allOrderTop" v-else>
			<view class="myTitle ju" >我的订单</view>
		</view>
		<view class="orderWrap">
			<view class="orderList" v-for="(item, i) in sliceData" :key='i' :id="'order' + i" @click="longtab(i)">
				<view class="orderListTop">
					<view class="orderInfo sb">
						<view>订单编号: {{item.OrderID ? item.OrderID : item.orderId}}</view>
						<view v-if="item.status == 0">正在处理</view>
						<view v-else-if="item.status==2 || item.status==3">待发货</view>
						<view v-else-if="item.status==4" style="color: blue;">待收货</view>
						<view v-else-if="item.status==1" style="color: green">已收货</view>
					</view>
					<view class="orderInfo">用户: {{item.userName}}</view>
					<view class="orderInfo">订单创建时间: {{item.CreatedAt}}</view>
					<view class="orderInfo" v-if="item.logistics_company">物流信息: {{item.logistics_company}}  {{item.logistics_num}}</view>
					<view class="orderInfo" v-else>物流信息: 暂无物流信息</view>
					<view class="orderInfo">发货时间: {{item.delivery_time ? item.delivery_time :"暂无发货时间"}}</view>
					<view class="table">
						<!-- 表格头 -->
						<view class="tableTr al" style="font-weight: bold;border-bottom: #333333 solid 1px;">
							<view class="tableTd proName" style="flex:3">产品</view>
							<!-- <view class="tableTd" style="flex:1">粘度</view> -->
							<view class="tableTd" style="flex:1.5">规格</view>
							<view class="tableTd" style="flex:0.5">箱数</view>
							<view class="tableTd" style="flex:1">金额</view>
						</view>
						<!-- 表格body -->
						<view class="tableTr ju" v-for="(attr, j) in item.Items" :key='j'>
							<view class="tableTd proName" style="flex:3">{{attr.name}}</view>
							<!-- <view class="tableTd" style="flex:1">{{attr.commodity ? attr.commodity.viscosity: ""}}</view> -->
							<view class="tableTd" style="flex:1.5">{{attr.commodity ? attr.commodity.specification: ""}}</view>
							<view class="tableTd" style="flex:0.5;">{{attr.Qty}}</view>
							<view class="tableTd" style="flex:1">{{format(attr.price)}}</view>
						</view>
					</view>
					<view class="orderTotal">金额: ￥
						<text style="color: #FF9900">{{format(item.Total)}}</text>
					</view>
					
					<view class="clearBoth">
						<view class="width50">
							<text>赠送添加剂: {{item.giftAdditives}}箱</text>
						</view>
						<view class="width50">
							<text>返利物资: {{item.rebate}}%</text>
						</view>
						<view class="width50">
							<text>返利总金额: ￥{{format(item.rebate_total)}}</text>
						</view>
						<view class="width50">
							<text>包邮: </text>
							<text v-if="!item.deliveryCost">未处理</text>
							<text v-if="item.deliveryCost==1">是</text>
							<text v-if="item.deliveryCost==2">否</text>
						</view>
						<view class="width100">
							<text>赠送: {{item.gift ? item.gift : "未处理"}}</text>
						</view>
					</view>
				</view>
				<view class="ju">
					<view class="receive blueColor op" v-if="item.status==0" @click="addImg(item)">上传转账记录</view>
					<view @click="received(item)" 
						v-if="item.status==2 || item.status==3 || item.status==4"
						:class="['receive','op']">收货</view>
					<view @click="del(item)"
						v-if="item.status==0"
						:class="['cancelBtn','op']">取消订单</view>
<!-- 					<view v-if="item.status==0" :class="['receive','op','received']">正在处理</view>
					<view v-if="item.status==1" :class="['receive','op','received']">已收货</view> -->
				</view>
				
				
			</view>
			
		</view>
		
	</view>
</template>

<script>
	import EXIF from "exif-js"
	// import html2Canvas from 'html2canvas'
	// import JsPDF from 'jspdf'
	export default {
		data() {
			return {
				allData: [],
				sliceData: [],
				offect: 10,
			};
		},
		onLoad () {
			this.getData()
		},
		onReachBottom () {
			this.offect += 5
			this.sliceData = this.allData.slice(0,this.offect)
		},
		methods: {
			longtab (i) {
				return false
				let that = this
				uni.showActionSheet({
					itemList: ['下载订单'],
					success(res) {
						if (res.tapIndex === 0) {
							let oDiv = document.getElementById("order" + i)
							html2Canvas(oDiv, {
								scale: 3.5,allowTaint: true
							}).then(canvas => {
								let pageData = canvas.toDataURL('image/jpeg', 1.0)
								that.downloadFile(pageData, "order" + i)
							}) 
						}
					},
					fail (e) {
						console.log(e)
					}
				})
			},
			downloadFile(content, fileName) { //下载base64图片
			    var base64ToBlob = function(code) {
			        let parts = code.split(';base64,');
			        let contentType = parts[0].split(':')[1];
			        let raw = window.atob(parts[1]);
			        let rawLength = raw.length;
			        let uInt8Array = new Uint8Array(rawLength);
			        for(let i = 0; i < rawLength; ++i) {
			            uInt8Array[i] = raw.charCodeAt(i);
			        }
			        return new Blob([uInt8Array], {
			            type: contentType
			        });
			    };
			    let aLink = document.createElement('a');
			    let blob = base64ToBlob(content); //new Blob([content]);
			    let evt = document.createEvent("HTMLEvents");
			    evt.initEvent("click", true, true); //initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
			    aLink.download = fileName;
			    aLink.href = URL.createObjectURL(blob);
			    aLink.click();
			},
			del (item) {
				let that = this
				uni.showModal({
					title: "提示",
					content: "确定取消这个订单?",
					success (res) {
						if (res.confirm) {
							that.$http({
								url: "order/delete/" + item.ID,
								method:"DELETE",
								success (res) {
									console.log(res)
									if (res.data.code == 200) {
										that.getData()
										uni.showToast({
											title: "已取消"
										})
									}
								}
							})
						}
					}
				})
				
			},
			addImg (item) {
				let that = this
				uni.chooseImage({
					count: 6,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'],
					success: (res) => {
						that.chooseSuccessMethod(res.tempFilePaths, item)  //  【 临时路径 】
					}
				});
			},
			chooseSuccessMethod (tempFilePaths,order) {
				let _this = this
				tempFilePaths.forEach((item,i) => {
					var img = new Image();
					img.src = item;
					img.onload = function() {
						var that = this;
						let or = false
						EXIF.getData(img, function () {  
							 let allData = EXIF.getAllTags(this);    
							 or = EXIF.getTag(this,'Orientation');//这个Orientation 就是我们判断需不需要旋转的值了，有1、3、6、8 
							 // 默认按比例压缩
							 var w = that.width,
								h = that.height,
								scale = w / h;
							 var quality = 0.6; // 默认图片质量为0.8
							 //生成canvas
							 var canvas = document.createElement('canvas');
							 var ctx = canvas.getContext('2d');
							 // 创建属性节点
							 var anw = document.createAttribute("width");
							 anw.nodeValue = w;
							 var anh = document.createAttribute("height");
							 anh.nodeValue = h;
							 canvas.setAttributeNode(anw);
							 canvas.setAttributeNode(anh);
							 if (or == 6) {
								ctx.translate(w/2,h/2)
								ctx.rotate(90*Math.PI / 180)
								ctx.translate(-(w/2),-(h/2))
							 }
							 ctx.drawImage(that, 0, 0, w, h);
							 // quality值越小，所绘制出的图像越模糊
							 let base64 = canvas.toDataURL('image/jpeg', quality);
							 // 回调函数返回base64的值
							 // console.log(base64);
							 uni.uploadFile({
								 url: window.baseURL + "order/lock/" + order.ID, //仅为示例，非真实的接口地址
								 filePath: base64,
								 name: "file",
								 fileType: 'image',
								 formData: {
									 id: order.ID
								 },
								 header: {
									 token: uni.getStorageSync("token"),
								 },
								 // header: {
								 // 	"Content-Type": "application/json",
								 // 	"Access-Control-Allow-Origin": "*",
								 // 	"Access-Control-Allow-Headers":  "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization",
								 // },
								 success (res) {
									 console.log(res)
									if (res.data) {
										res = JSON.parse(res.data)
										if (res.status == 201) {
											uni.showToast({
												title: "上传成功"
											})
											_this.getData()
										} else {
											uni.showToast({
												title: "上传失败",icon:"none"
											})
										}
									} else {
										uni.showToast({
											title: "上传失败",icon:"none"
										})
									}
								},
								fail () {
									uni.showToast({
										title: "网络错误，请稍后再试",icon:"none"
									})
								}
							 })
						}); 
					}
				})
			},
			getData () {
				let that = this
				uni.showLoading({
					title: "加载中..."
				})
				this.$http({
					url: "order/" + uni.getStorageSync('userId'),
					method:"GET",
					success (res) {
						console.log(res)
						if (res.data) {
							that.allData = res.data.reverse()
							that.allData.forEach(item => {
								item.CreatedAt = item.CreatedAt.replace("+08:00","").replace("T", " ")
								item.orderId = "ACP" +  (("0000" + item.ID).slice(-5))
							})
							that.sliceData = that.allData.slice(0,that.offect)
						}
					},
					complete () {
						uni.hideLoading()
					}
				})
			},
			received (item) {
				console.log(item)
				let that = this
				uni.showModal({
					title: "提示",
					content: "确认收货?",
					success (res) {
						if (res.confirm) {
							// console.log('收到')
							uni.showLoading({
								title: "加载中..."
							})
							that.$http({
								url: "updateStatus/" + item.ID,
								method:"PUT",
								success (res) {
									console.log(res)
									if (res.data.code == 200) {
										that.getData()
										uni.hideLoading()
									} else {
										uni.showToast({ title:"操作失败,请稍后再试",icon:'none' })
									}
								},
								fail () { uni.showToast({ title:"网络错误,请稍后再试",icon:'none' }) },
								complete () { setTimeout(() => { uni.hideLoading() },1000) }
							})
						}
					}
				})
				
				
			}
		}
	}
</script>

