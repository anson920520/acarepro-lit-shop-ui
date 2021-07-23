<style lang="scss" scoped>
.myTitle{
	font-size: 35upx;
	color: #000;
	padding: 20upx 0 10upx;
}
.allOrderTop {
	position: sticky;
	top:0;
	background:#FFF;
	z-index: 100;
}
.orderWrap {
	// border: solid red 1px;
	box-sizing: border-box;
	flex:10;
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
.priBorder {
	border: solid #000 1px;
	border-radius: 10upx;
}
.label {
	width: 100upx;
	// border: solid red 1px;
}
.selectDis {
	padding: 5upx 10upx;
	margin-left: 15upx;
	width: 75%;
}
.mb15 {
	margin-bottom: 15upx;
}
.flex5 {
	flex: 5;
}
.Radio {
	width: 15upx;
	height: 15upx;
	border: solid #000 1px;
	border-radius: 50%;
	margin:0 15upx;
}
.act {
	background: #E50000 !important;
}
.numInp {
	width: 45%;
	margin-left: 15upx;
	padding: 0 10upx;
	box-sizing: border-box;
}
.p20 {
	padding: 20upx;
}
.textarea {
	width: 100%;
	height: 150upx;
}
.bl20 {
	margin-left: 20upx;
}
.orderList {
	padding-bottom: 50upx;
}

</style>

<template>
	<view>
		<view class="allOrderTop">
			<Header></Header>
			<view class="myTitle ju">订单详情</view>
		</view>
		
		<view class="orderWrap main">
			<view class="orderList">
				<view class="orderListTop">
					<view class="orderInfo sb">
						<view>订单编号: {{item.OrderID}}</view>
						<view v-if="item.status == 0">正在处理</view>
						<view v-else-if="item.status==2 || item.status==3">待发货</view>
						<view v-else-if="item.status==4">待收货</view>
						<view v-else-if="item.status==1" style="color: green">已收货</view>
					</view>
					<view class="orderInfo">用户: {{item.userName}}</view>
					<view class="orderInfo">订单创建时间: {{item.CreatedAt}}</view>
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
							<view class="tableTd" style="flex:1">{{attr.price}}</view>
						</view>
					</view>
					<view class="orderTotal">金额: ￥
						<text style="color: #FF9900">{{item.Total}}</text>
					</view>
				</view>
				
				
				<view class="main">
					<view class="al mb15">
						<view class="label sb"><text>赠</text><text>送</text></view>:
						<picker mode="selector" class="priBorder selectDis" :range="discount" @change="chooseDiscount" v-if="item.status==0">
							<view>{{gift}}</view>
						</picker>
						<view v-else class="selectDis">{{gift}}</view>
					</view>
					
					<view class="al mb15">
						<view class="flex5 al">
							<view class="label sb"><text>包</text><text>邮</text></view>:
							<view class="al" style="width: 50%;" v-if="item.status==0">
								<view class="flex5 al" @click="deliveryCost=1">
									<view :class="['Radio', { act: deliveryCost==1 }]"></view>
									<view>是</view>
								</view>
								<view class="flex5 al" @click="deliveryCost=2">
									<view :class="['Radio', { act: deliveryCost==2 }]"></view>
									<view>否</view>
								</view>
							</view>
							<view v-else style="padding-left: 25upx;">
								<text v-if="deliveryCost==1">是</text>
								<text v-if="deliveryCost==2">否</text>
								<text v-if="!deliveryCost">未处理</text>
							</view>
						</view>
						<view class="flex5 al">
							<view>赠送添加剂</view>:
							<input class="priBorder numInp" type="number" v-model="giftAdditives" v-if="item.status==0" />
							<text v-else style="padding-left: 25upx;">{{giftAdditives}}</text>
							<text style="margin-left: 10upx;"> 箱</text>
						</view>
					</view>
					
					<view class="al mb15">
						<view class="flex5 al">
							<view class="label sb"><text>返</text><text>利</text><text>物</text><text>资</text></view>:
							<input class="priBorder numInp" type="number" v-model="rebate" v-if="item.status==0" />
							<text v-else style="padding-left: 25upx;">{{rebate}}</text>
							<text>%</text>
						</view>
						<view class="flex5">
							<view class="flex5 al">
								<view>返利总金额</view>:
								<!-- <input class="priBorder numInp" type="number" v-model="rebate_total" disabled /> -->
								<text>￥{{rebate_total}}</text>
							</view>
						</view>
					</view>
					
					<view class="priBorder mb15 size25 p20">
						<textarea v-model="remark" class="textarea" placeholder="备注" />
					</view>
					
					<view class="flex-end mb15">
						<view class="al">
							<view class="btn ccc op" @click="back">返回</view>
							<view class="btn yellow bl20 op" @click="sub" v-if="item.status==0">确认并储存</view>
						</view>
					</view>
					
				</view>
				
			</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				discount: [
					'无', 
					'金银铜黑系列10送1，橙罐系列10送1',
					"金银铜黑系列10送2，橙罐系列10送1",
					"金银铜黑系列10送3，橙罐系列15送2",
				],
				gift: '无',
				deliveryCost: 0,   //  1包邮  2 不包邮
				giftAdditives: 0,  //赠送添加剂
				rebate: 0,   // 返利物资
				rebate_total: 0,   // 返利总金额
				remark: "",
			}
		},
		computed: {
			item () { return this.$store.state.order }
		},
		created () {
			this.initData()
		},
		watch: {
			rebate (val) {
				// console.log(val)
				// if (Number(val) > 5) {
				// 	console.log(213)
				// 	this.rebate = 5
				// }
			}
		},
		methods: {
			initData () {
				this.gift = this.item.gift ? this.item.gift : "无"
				this.deliveryCost = this.item.deliveryCost
				this.giftAdditives = this.item.giftAdditives
				this.rebate = this.item.rebate
				this.remark = this.item.remark
				this.rebate_total = this.item.rebate_total
			},
			chooseDiscount (e) {
				this.gift = this.discount[e.detail.value]
			},
			back () {
				uni.navigateBack()
			},
			sub () {
				
				let that = this
				
				let num = Number(this.rebate)
				if ((num < 0) || (num > 5)) {
					uni.showToast({
						title: "返利物资请输入 0 到 5 之间的数字",
						icon: "none"
					})
					return false
				}
				
				
				
				uni.showLoading({
					title: "正在储存",
				})
				let data = {
					gift: this.gift,
					deliveryCost: this.deliveryCost * 1,
					giftAdditives: this.giftAdditives * 1,
					rebate: this.rebate * 1,
					remark: this.remark,
					rebate_total: this.rebate_total *1
				}
				uni.request({
					// url: that.$store.state.baseURL + "update/sale/order/" + that.item.ID,
					url: that.$store.state.baseURL + "sale/update/" + that.item.ID,
					method:"PUT",
					header: {
						token: uni.getStorageSync('token')
					},
					// header: {
					// 	"Content-Type": "application/json",
					// 	"Access-Control-Allow-Origin": "*",
					// 	"Access-Control-Allow-Headers":  "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization",
					// },
					data: data,
					success (res) {
						console.log(res)
						if (res.data) {
							that.back()
							that.$store.dispatch("getOrder", { 
								UserName: uni.getStorageSync('UserName'),
								success () {
									
								}
							})
						} else {
							uni.showToast({
								title: "储存失败",
								icon: "none"
							})
						}
					},
					complete () {
						uni.hideLoading()
					}
				})
			},
		}
	}
</script>


