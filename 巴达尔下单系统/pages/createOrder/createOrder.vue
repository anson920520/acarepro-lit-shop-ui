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
	bottom: 0;
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
</style>

<template>
	<view class="createOrder">
		<text style="font-weight: bold; padding: 20upx 0;display: block;">已选商品</text>
		<view class="proListWrap">
			<view class="proList ju" v-for="(item,i) in inCart" :key='i' v-show="item.num>0">
				<!-- <image class="leftImg" src="../../static/logo.png" mode="aspectFill"></image> --> 
				<image :lazy-load="true" :src="$store.state.imgUrl+'images/' + item.image" mode="aspectFit" class="leftImg"></image>
				<view class="proCenter">
					<view class="proText" style="font-weight: bold;">{{item.name}}</view>
					<view class="proText">编号: {{item.proNumber}}</view>
					<view class="proText">粘度: {{item.viscosity}}</view>
					<view class="proText">规格: {{item.specification}}</view>
					<view class="proText">数量: {{item.num}}</view>
				</view>
				<view class="al ju " style="font-size: 25upx;">小计:
					<text style="color:#1E8449">￥{{item.price * item.num}}</text>
				</view>
			</view>
		</view>
		
		<view class="proListWrap mt20 sb" v-for="(item,i) in discount" :key="i">
			<text class="colorYellow">{{item.name}}</text>
			<text>赠送 {{item.Qty}} 箱</text>
		</view>
		
		<view class="payBox al">
			<view></view>
			<view class="payMain">
				共计:
				<text style="font-weight: bold;color: #FF9900;">￥{{total}}</text>
				
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
				discount: []
			};
		},
		computed: {
			inCart () { return this.$store.state.inCart },
			x () { return this.$store.state.x },
		},
		onLoad (val) {
			let that = this
			this.total = val.total
			let cate = {}
			let arr = JSON.parse(JSON.stringify(that.inCart))
			// 0331 买240升送 48升
			arr.forEach((pro) => {
				if (cate[pro.categoryId]) {
					cate[pro.categoryId].push(pro)
				} else {
					cate[pro.categoryId] = [pro]
				}
			})
			// console.log(cate)
			
			// for (let key in cate) {
			// 	let totalL = 0
			// 	cate[key].forEach(pro => {
			// 		totalL += pro.num * pro.desc.specification.val1 * pro.desc.specification.val3
			// 	})
			// 	// console.log(totalL)   // 一个分类的总升数
			// 	let send = Math.floor(totalL / 240) * cate[key][0].category.Promotion
			// 	if (send) {
			// 		this.discount.push({
			// 			type: "discount",
			// 			name: cate[key][0].category.Desc,
			// 			Qty: send * 1
			// 		})
			// 	}
			// }
			
			// arr.forEach(pro => {
			// 	if (cate[pro.categoryId]) {
			// 		cate[pro.categoryId].num += Number(pro.num)
			// 	} else {
			// 		cate[pro.categoryId] = pro
			// 	}
			// })
			// // console.log(cate)
			// for(let key in cate) {
			// 	let floor = Math.floor(cate[key].num / that.x)
			// 	let send = floor * cate[key].category.Promotion
			// 	if (floor > 0 && send > 0) {
			// 		this.discount.push({
			// 			type: "discount",
			// 			name: cate[key].category.Desc,
			// 			Qty: send * 1
			// 		})
			// 	}
			// }
		},
		methods: {
			wxPay () {
				let that = this
				let arr = []
				this.inCart.forEach(item => {
					let obj = {}
					obj.Qty = item.num *1
					obj.name = item.name
					obj.id = item.ID
					obj.price = item.price
					obj.commodity = item
					if (item.num > 0) {
						arr.push(obj)
					}
					// obj.order_num = 
					
				})
				let cate = {}
				let arr2 = JSON.parse(JSON.stringify(that.inCart))
				// 0331 买240升送 48升
				arr2.forEach((pro) => {
					if (cate[pro.categoryId]) {
						cate[pro.categoryId].push(pro)
					} else {
						cate[pro.categoryId] = [pro]
					}
				})
				// console.log(cate)
				for (let key in cate) {
					let totalL = 0
					cate[key].forEach(pro => {
						totalL += pro.num * pro.desc.specification.val1 * pro.desc.specification.val3
					})
					// console.log(totalL)   // 一个分类的总升数
					let send = Math.floor(totalL / 240) * cate[key][0].category.Promotion
					if (send) {
						// arr.push({
						// 	type: "discount",
						// 	name: cate[key][0].category.Desc,
						// 	Qty: send * 1
						// })
					}
				}
				
				// 买10 箱子送2箱
				// arr2.forEach(pro => {
				// 	if (cate[pro.categoryId]) {
				// 		cate[pro.categoryId].num += Number(pro.num)
				// 	} else {
				// 		cate[pro.categoryId] = pro
				// 	}
				// })
				// // console.log(cate)
				// for(let key in cate) {
				// 	let floor = Math.floor(cate[key].num / that.x)
				// 	let send = floor * cate[key].category.Promotion
				// 	if (floor > 0 && send > 0) {
				// 		arr.push({
				// 			type: "discount",
				// 			name: cate[key].category.Desc,
				// 			Qty: send * 1
				// 		})
				// 	}
				// }
				
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
					rebate: 0
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
							uni.request({
								url: that.$store.state.baseURL + "order/create",
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


