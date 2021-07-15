<style lang="less" scoped>
	@import url("@/static/css/color.less");
	.big-img {
		width: 100%;
		height: 650upx;
		margin: 30upx 0;
	}

	
	.backIco {
		width: 0;
		height: 0;
		border: solid 15upx transparent;
		border-right: solid #000 15upx;
		margin-right: 15upx;
	}
	.container {
		width: 90%;
		margin: auto;
		
	}
	.numBox {
		width: 50%;
	}
	.num-btn {
		width: 70upx;
		height: 70upx;
		background: @color-6;
		color: #FFF;
		text-align: center;
		line-height: 68upx;
		border-radius: 50%;
	}
	.num-inp {
		width: 50%;
	}
	.pro-detail {
		width: 100%;
		height: 650upx;
		border: solid #CCC 1px;
		padding-bottom: 300upx;
	}
	.full {
		width: 100%;
		height: 100%;
	}
	
	
	
	.indexBottom {
		width: 100%;
		height: 130upx;
		background: #000000;
		position: fixed;
		left: 0;
		bottom: 50px;
		color: white;
		z-index:100;
	}
	.indexBottomLeft {
		flex:1.5;
		margin-left: 20upx;
		border-radius: 10upx;
	}
	.indexBottomCenter {
		flex:5;
		padding-right: 20upx;
		font-size: 25upx;
		text-align: right;
	}
	.indexBottomRight {
		flex:3;
	}
	.topBottomIcon {
		width: 60upx;
		height: 60upx;
	}
	.dot {
		min-width: 30upx;
		height: 30upx;
		padding: 5upx;
		background: red;
		color: #FFF;
		text-align: center;
		border-radius: 20upx;
	}
	.bottomTotal {
		justify-content: flex-end;
	}
	.submit {
		background: #FF9900;
		padding: 20upx 0;
		margin-right: 20upx;
		border-radius: 20upx;
		color: black;
		font-weight: bold;
	}
	// 弹出层
	.drapBox {
		width: 100%;
		height: 130vh;
		position: fixed;
		// border: solid red 1px;
		// background: green;
		z-index: 16;
		left: 0;
		top: 30%;
		pointer-events: none;
	}
	.indexArea {
		// border: solid red;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}
	.indexView {
		width: 100%;
		height: 50%;
		background: white;
		pointer-events: auto !important;
		border-radius: 30upx;
	}
	.backarea {
		width: 100%;
		height: 100%;
		position: fixed;
		background: black;
		left: 0;
		top: 0;
		opacity: 0.5;
		z-index: 10;
	}
	
	.bottomScroll {
		width: 95%;
		margin: auto;
		height: calc(70vh - 300upx);
		// border: solid red 2px;
		box-sizing: border-box;
	}
	.bottomTitle {
		width: 100%;
		height: 60upx;
		color: #888888;
	}
	.productCenter {
		width: 70%;
	}
	.lube {
		// border: solid #999999 1px;
		width: 99%;
		padding: 10upx 0;
		margin: 10upx 0;
		font-size: 23upx;
		border-radius: 20upx;
		background: white;
		overflow: hidden;
		border: solid 1px #000000;
	}
	.lube:last-child {
		margin-bottom: 40upx;
	}
	.productImg {
		width: 20%;
		height: 140upx;
		border-radius: 20upx;
	}
	.productCenter {
		width: 50%;
		padding-left: 20upx;
	}
	.productRight {
		width: 30%;
		// height:50upx;
		// border: solid red 1px;
	} 
</style>

<template>
	<view class="relative pb10 bg-2">
		<my-header></my-header>
		<view class="main">
			<view class="al op" @click="back">
				<view class="backIco"></view>
				返回上一页
			</view>
			<image :src="imgUrl + 'images/' + item.image" class="big-img"></image>
			
			<view class="container">
				<view class="size33">{{item.name}}</view>
				<view class="size38" style="padding: 15upx 0;">
					<text>单价：</text>
					<text class="color-8">￥{{item.price}}</text>
				</view>
				<view >编号：{{item.proNumber}}</view>
				<view >粘度：{{item.viscosity}}</view>
				<view >规格：{{item.specification}}</view>
				<view >重量：{{item.weight}}{{item.unit}}</view>
				
				
				<view class="al" style="padding:40upx 0;">
					<view class="numBox ju al">
						<view class="num-btn op" @click="addSub(true)">-</view>
						<input type="text" v-model="num" class="num-inp tc" />
						<view class="num-btn op" @click="addSub(false)">+</view>
					</view>
					<view class="ju" style="width: 50%;">
						<button class="blackBtn op" style="width: 80%;" @click="changeNum(num,item)">加入购物车</button>
					</view>
				</view>
			</view>
			
			
			
			
		</view>
		<swiper class="pro-detail" :indicator-dots="true" circular :autoplay="false" 
			v-if="item.img.length && item.video_link"
			:interval="5000" :duration="400">
			<swiper-item class="full" v-if="item.video_link">
				<iframe :src="item.video_link" class="full"></iframe>
			</swiper-item>
			<swiper-item v-for="(img,j) in item.img">
				<image :src="img" mode="aspectFill" class="full"></image>
			</swiper-item>
		</swiper>
		

		


		<!-- 底部提交订单 -->
		<view class="indexBottom al" @click="showChecked">
			<view class="indexBottomLeft sb al">
				<image :class="['topBottomIcon']" src="../../static/img/cart3.png" mode="widthFix"></image>
				<view class="dot size22 al ju">{{qty}}</view>
			</view>
			<view class="indexBottomCenter">
				<view>共 {{qty}} 箱</view>
				<view class="al bottomTotal">总金额:
					<text style="color: #FF9900;font-weight: bold;font-size: 40upx;">￥{{format(total)}}</text>
				</view>
			</view>
			<view class="indexBottomRight">
				<view class="submit ju op" @click.stop="createOrder">下一步</view>
			</view>
		
		</view>
		
		<!-- 底部拖动栏 -->
		<view class="backarea" v-if="showDrag" @click="showChecked"></view>
		<view class="drapBox" >
			<movable-area class="indexArea">
				<movable-view class="indexView" :y='y' inertia direction="vertical" @change='changeArea' damping='40'>
					<view class="bottomTitle ju al" >已选产品</view>
					<view class="noData" v-if="inCart? inCart.length===0 : false">您的购物车空空如也</view>
					<scroll-view scroll-y="true" class="bottomScroll">
						<view class="lube al"
							style="wdth: 96.5%;"
							v-for="(item, i) in inCart" :key='i' v-show="item.number > 0">
							<image :src="item.image" mode="aspectFit" class="productImg"></image>
							<view class="productCenter">
								<view style="font-weight: bold;">{{item.name}}</view>
								<view>编号: {{item.proNumber}}</view>
								<view>粘度: {{item.viscosity}}</view>
								<view>规格: {{item.specification}}</view>
							</view>
							<view class="productRight ju" style="flex-direction: column;">
								<text style="color: #FF9900;font-weight: bold;">$ {{item.price}}</text>
								<addSub :num='item.number' @changeNum='changeNum2($event,item)'></addSub>
							</view>
						</view>
						
					</scroll-view>
				</movable-view>
			</movable-area>
		</view>
		
	</view>
</template>

<script>
	export default {
		data () {
			return {
				item: {
					img: []
				},
				id: '',
				num: 0,
				qty:0,
				total: 0,
				showDrag: false,
				inCart: [],
				y: 1000,
			}
		},
		
		onLoad (val) {
			// obj.Qty = item.num *1
			// obj.name = item.name
			// obj.id = item.ID
			// obj.price = item.price
			// obj.commodity = item
			this.id = val.id
			this.getData()
		},
		computed: {
			imgUrl () { return this.$store.state.app.imgUrl },
		},
		methods: {
			// 修改产品数量
			changeNum (e,item) {
				let that = this
				if (item.num == 0) {
					that.$http({
						url: "postShoppingCar/",
						method:"POST",
						data: {
							user_id: uni.getStorageSync("userId"),
							product_id: item.ID,
							number: e * 1
						},
						success (res) {
							console.log(res)
							if (res.data.code == 200) {
								that.inCart = res.data.data
								that.getCart()
							} else {
								uni.showToast({
									title: "加入购物车失败",
									icon: "none"
								})
							}
						},
					})
				} else {
					if (e <= 0) {
						that.$http({
							url: "deleteShoppingCar/",
							method:"DELETE",
							data: {
								id: item.cartId
							},
							success (res) {
								console.log(res)
								if (res.data.code == 200) {
									// that.inCart = res.data.data
									that.getCart()
								} else {
									uni.showToast({
										title: "修改数量失败",
										icon: "none"
									})
								}
							},
						})
					} else {
						that.$http({
							url: "putShoppingCar/",
							method:"PUT",
							data: {
								user_id: uni.getStorageSync("userId"),
								product_id: item.ID,
								number: e * 1,
								id: item.cartId
							},
							success (res) {
								console.log(res)
								if (res.data.code == 200) {
									// that.inCart = res.data.data
									that.getCart()
								} else {
									uni.showToast({
										title: "修改数量失败",
										icon: "none"
									})
								}
							},
						})
					}
				}
				return false
				// console.log(e, item.num)
				if (e == 1) {  
					if (item.num >=1) {
						console.log("编辑")
						that.$http({
							url: "putShoppingCar/",
							method:"PUT",
							data: {
								user_id: uni.getStorageSync("userId"),
								product_id: item.ID,
								number: e * 1,
								id: item.cartId
							},
							success (res) {
								console.log(res)
								if (res.data.code == 200) {
									// that.inCart = res.data.data
									that.getCart()
								} else {
									uni.showToast({
										title: "修改数量失败",
										icon: "none"
									})
								}
							},
						})
					} else if (item.num < 1) {
						// console.log("创建")
						that.$http({
							url: "postShoppingCar/",
							method:"POST",
							data: {
								user_id: uni.getStorageSync("userId"),
								product_id: item.ID,
								number: e
							},
							success (res) {
								console.log(res)
								if (res.data.code == 200) {
									that.inCart = res.data.data
									that.getCart()
								} else {
									uni.showToast({
										title: "加入购物车失败",
										icon: "none"
									})
								}
							},
						})
					}
				} else if (e <= 0) {
					console.log("删除")
					that.$http({
						url: "deleteShoppingCar/",
						method:"DELETE",
						data: {
							id: item.cartId
						},
						success (res) {
							console.log(res)
							if (res.data.code == 200) {
								// that.inCart = res.data.data
								that.getCart()
							} else {
								uni.showToast({
									title: "修改数量失败",
									icon: "none"
								})
							}
						},
					})
				} else {
					console.log("编辑")
					that.$http({
						url: "putShoppingCar/",
						method:"PUT",
						data: {
							user_id: uni.getStorageSync("userId"),
							product_id: item.ID,
							number: e * 1,
							id: item.cartId
						},
						success (res) {
							console.log(res)
							if (res.data.code == 200) {
								// that.inCart = res.data.data
								that.getCart()
							} else {
								uni.showToast({
									title: "修改数量失败",
									icon: "none"
								})
							}
						},
					})
				}
				item.num = e
				
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
							that.qty = 0
							res.data.data.forEach(item => {
								item.image = window.imgUrl + "images/" + item.image
								that.total += (item.price*item.number)
								that.qty += item.number
								
								if (item.number==0) {
									that.$http({
										url: "deleteShoppingCar/",
										method:"DELETE",
										data: {
											id: item.id * 1
										},
										success (res) {
											console.log(res)
											if (res.data.code == 200) {
												// that.inCart = res.data.data
												that.getCart()
											}
										},
									})
								}
							})
							that.inCart = res.data.data
							
							
						} else {
							that.inCart = []
							that.total = 0
							that.qty = 0
						}
						that.initProductNum()
					},
					fail (e) {
						console.log('err', e)
					}
				})
			},
			// 预设产品数量
			initProductNum () {
				
				// this.products.forEach(item => {
					this.item.num = 0
					this.inCart.forEach((cart) => {
						if (this.item.ID == cart.product_id) {
							this.num = cart.number
							this.item.num = this.num	
							this.item.cartId = cart.id * 1
						}
					})
				// })
				
			},
			// 底部拖动事件
			changeArea (e) {
				// console.log(e.detail.y)
				clearTimeout(this.timer)
				this.timer = setTimeout(() => {
					if (e.detail.y < 100) {
						this.showDrag = true
						this.y = 0
					} else {
						this.showDrag = false
						this.y =1000
					}
				},80)
			},
			// 底部拖动事件
			changeArea (e) {
				// console.log(e.detail.y)
				clearTimeout(this.timer)
				this.timer = setTimeout(() => {
					if (e.detail.y < 100) {
						this.showDrag = true
						this.y = 0
					} else {
						this.showDrag = false
						this.y =1000
					}
				},80)
			},
			// 显示已选择
			showChecked () {
				if (!this.showDrag) {
					// if (this.inCart.length) {
						this.y = 0
						this.showDrag = true
					// }
				} else {
					this.y = 1000
					this.showDrag = false
				}
			},
			createOrder () {
				if (this.inCart.length) {
					uni.navigateTo({
						url: "/pages/createOrder/createOrder"
					})
				} else {
					uni.showToast({
						title: "您未添加任何产品",
						icon: "none"
					})
				}
				
			},
			changeNum2 (e,cart) {
				let item = JSON.parse(JSON.stringify(cart))
				item.num = item.number
				item.cartId = item.id * 1
				item.ID = item.product_id
				this.changeNum(e,item)
			},
			addSub (boo) {
				if (!boo) {
					// +
					this.num++
					if (this.num >1000) {
						this.num = 1000
					}
				} else {
					// -
					this.num--
					if (this.num <0) {
						this.num = 0
					}
				}
			},
			back () {
				uni.navigateBack()
			},
			getData () {
				let that = this
				this.$http({
					url: "productOne/",
					data: {
						id: that.id
					},
					success (res) {
						console.log(res)
						that.item = res.data.data
						that.getCart()
					}
				})
			}
		}
	}
</script>


