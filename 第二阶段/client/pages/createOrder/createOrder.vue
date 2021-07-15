<style lang="scss" scoped>
.createOrder {
	padding: 20upx;
	padding-bottom: 150upx;
	min-height: 90vh;
	background: #F0F0F0;
}
.proListWrap {
	background: white;
	border-radius: 20upx;
	padding: 20upx;
	
}
.proList {
	border-bottom: solid black 1px;
	padding: 20upx 0;
}
.proList:last-child{
	border: none !important;
}
.leftImg {
	width: 140upx;
	height: 140upx;
}
.proCenter {
	// border: solid black 1px;
	flex:10;
	padding-left:20upx;
}
.proText {
	font-size: 23upx;
}
.payBox {
	width: 100%;
	height: 150upx;
	background: #000;
	position: fixed;
	left: 0;
	bottom: 50px;
	justify-content: space-between;
	padding:0 20upx;
	box-sizing: border-box;
}
.payMain {
	color: #FFFFFF;
}
.subBtn {
	background:#FF9900 !important;
	color: black;
	font-weight: bold;
	font-size: 30upx;
}
.mt20 {
	margin-top: 30upx;
}
.inp {
	background: #FFF;
	padding: 10upx;
	border-radius: 10upx;
}
.sanjiao {
	width: 0;
	height: 0;
	border: solid 15upx transparent;
	border-top: solid 15upx #000;
	border-bottom: 0;
	position: absolute;
	top: 50%;
	right: 29upx;
	transform: translateY(-50%);
}
</style>

<template>
	<view class="createOrder">
		<my-header></my-header>
		<text style="font-weight: bold; padding: 20upx 0;display: block;">送货类型：</text>
		
		<picker mode="selector" :range="list" range-key="name" @change="chooseType" style="margin-bottom: 50upx;">
			<view class="relative">
				<view class="sanjiao"></view>
				<input class="inp" disabled placeholder="点击选择送货方式" v-model="type.name" />
			</view>
		</picker>
		<!-- <view ><text>()</text></view> -->
		
		<text style="font-weight: bold; padding: 20upx 0;display: block;">已选产品：</text>
		<view class="proListWrap">
			<view class="proList ju" v-for="(item,i) in inCart" :key='i' v-show="item.number>0">
				<!-- <image class="leftImg" src="../../static/logo.png" mode="aspectFill"></image> --> 
				<image :lazy-load="true" :src="item.image" mode="aspectFit" class="leftImg"></image>
				<view class="proCenter">
					<view class="proText" style="font-weight: bold;">{{item.name}}</view>
					<view class="proText">编号: {{item.proNumber}}</view>
					<view class="proText">粘度: {{item.viscosity}}</view>
					<view class="proText">规格: {{item.specification}}</view>
					<view class="proText">数量: {{item.number}}</view>
				</view>
				<view class="al ju " style="font-size: 25upx;">小计:
					<text style="color:#1E8449">￥{{format(item.price * item.number)}}</text>
				</view>
			</view>
		</view>
		
		<view class="proListWrap mt20 sb" v-for="(item,i) in discount" :key="i">
			<text class="colorYellow">{{item.name}}</text>
			<text>赠送 {{item.number}} 箱</text>
		</view>
		
		<view class="payBox al">
			<view></view>
			<view class="payMain">
				共计:
				<text style="font-weight: bold;color: #FF9900;">￥{{format(total)}}</text>
				
			</view>
			<view class="payBtnWrap">
				<button type="warn" class="subBtn" @click="wxPay">提交订单</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				total: 0,
				discount: [],
				inCart: [],
				list: [
					{ id: 1, name: "送货上门" },
					{ id: 2, name: "网点自提" },
				],
				type: {
					name: ''
				},
			};
		},
		computed: {
			x () { return this.$store.state.x },
		},
		onLoad (val) {
			this.getCart()
		},
		methods: {
			chooseType (e) {
				this.type = this.list[e.detail.value]
			},
			// 获取购物车
			getCart () {
				let that = this
				that.$http({
					url: "getShoppingCar/",
					data: {
						user_id: uni.getStorageSync("userId"),
						page: 1,
						offset: 999
					},
					success (res) {
						console.log(res)
						if (res.data.code == 200) {
							that.total = 0
							res.data.data.forEach(item => {
								item.image = window.imgUrl + "images/" + item.image
								that.total += (item.price*item.number)
							})
							that.inCart = res.data.data
						} else {
							that.inCart = []
							that.total = 0
						}
					},
					fail (e) {
						console.log('err', e)
					}
				})
			},
			wxPay () {
				let that = this
				if (!that.type.id) {
					uni.showToast({
						title: "请选择送货类型",
						icon: "none"
					})
					return false
				}
				let arr = []
				this.inCart.forEach(item => {
					let obj = {}
					obj.Qty = item.number *1
					obj.name = item.name
					obj.id = item.product_id
					obj.price = item.price
					obj.commodity = item
					if (item.number > 0) {
						arr.push(obj)
					}
					// obj.order_num = 
					
				})
				
				
				let Data = {
					Items: arr,
					UserId: uni.getStorageSync('userId') + "",
					SaleId: uni.getStorageSync('userId') + "",
					status: 0,
					total: that.total * 1,
					userName: uni.getStorageSync('company'),
					sale: uni.getStorageSync('sale'),
					deliveryCost: 0,
					giftAdditives: 0,
					rebate: 0,
					delivery_type: that.type.id
				}
				// console.log(Data)
				// return false
				uni.showModal({
					title: "提示",
					content: "确认提交订单?",
					success(res) {
						if (res.confirm) {
							uni.showLoading({
								title: "加载中..."
							})
							that.$http({
								url:  "order/create",
								// url: "http://139.9.174.163:5005/api/v1/order/create",
								method:"POST",
								data:Data,
								success (res) {
									console.log(res)
									
									if (res.data.message == 200) {
										uni.showToast({
											title: '下单成功',
										})
										setTimeout(() => {
											uni.reLaunch({
												url: "/pages/allOrder/allOrder"
											})
										},1000)
									} else {
										uni.showToast({
											title: "操作失败",
											icon: "none"
										})
									}
								},
								fail () {
									
								},
								complete () {
									uni.hideLoading()
								}
							})	
						}
					}
				})
			}
		}
	}
</script>


