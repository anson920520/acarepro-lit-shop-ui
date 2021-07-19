<style lang="less" scoped>
@import url("@/static/css/color.less");

.s-label {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	// border: solid red 1px;
	pointer-events: none;
}
.s-ico {
	width: 30upx;
	height: 30upx;
	margin-right: 10upx;
}
.c-item-wrap {
	// border: solid red 1px;
	padding: 20upx 0;
	display: inline-block;
	width: 190upx;
	text-align:center;
}
.c-item {
	display: inline-block;
	padding:13upx 0upx;
	// margin: 20upx;
}
.categories {
	white-space: nowrap;
}
.p-item {
	border: solid #000 1px;
	min-height: 100upx;
	margin-left: 4%;
	margin-bottom: 2%;
	padding-bottom: 15upx;
	border-radius: 20upx;
	width: 690upx;
	overflow: hidden;
}
.pl20 {
	width: 102%;
}
.act {
	color: @color-6 !important;
	border-bottom: solid 2px @color-6 !important;
}
.flex10 {
	flex: 10;
	// border: solid
}
.height100 {
	height: 100%;
}
.pro-img {
	width: 25%;
	height: 200upx;
}
.pro-main {
	width: 75%;
}
.height2 {
	height: 70upx;
	// border: solid red 1px;
}
.mb10 {
	margin-top: 15upx;
	padding: 0 15upx;
}
.loading {
	position: relative;
	&::after {
		display: block;
		content: "";
		width: 40upx;
		height: 40upx;
		border: solid 3px #ff9900;
		border-top: solid 3px transparent;
		border-radius: 50%;
		position: absolute;left:43%;
		top:-180upx;
		animation: rotate 1s linear infinite;
	}
}
.height0 {
	height: 0;
}
.page-title {
	padding: 20upx;
}
.width70 {
	width: 70%;
}
.width30 {
	width: 30%;
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

.p30 {
	padding: 10upx 30upx;
	box-sizing: border-box;
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
.marginb-200 {
	box-sizing: border-box;
	margin-bottom: 200upx;
	// border: solid 1px;
	height: calc(100% - 235upx) !important;
}
.container {
	width: 680upx;
	margin: 30upx auto 0;
}
.s-wrap {
	border-radius: 20upx;
	border: solid @color-4 1px;
	width: 70%;
	margin: 30upx auto 0;
}
.search-inp {
	padding: 10upx;
	width: 100%;
}
.res-list {
	// border: solid red 1px;
	box-sizing: border-box;
	padding-top: 30upx;
	margin-bottom: 250upx;
}
.clearable {
	width: 20upx;
	height: 20upx;
	position: absolute !important;
	left: 90%;
	top: 20upx;
	z-index: 10;
}

</style>

<template>
	<view class="height100 bg-2">
		<view class="columns height100">
			<view>
				<my-header></my-header>
				<view class="container">
					<page-nav></page-nav>
					
					<view class="ju s-wrap">
						<view class="relative" style="width: 70%;">
							
							<input type="text" placeholder="输入产品名称......" v-model="keyword" class="search-inp" />
							<image src="../../static/img/close.png" mode="widthFix"
								@click="keyword=''"
								class="clearable op" v-show="keyword"></image>
						</view>
						<button class="blackBtn ju al op" style="width: 150upx;" size="mini" @click="searchFn">搜索</button>
					</view>
				</view>
				
				<scroll-view class="bg-2 categories" scroll-x scroll-with-animation :scroll-left="x" v-show="!showRes">
					<view class="c-item-wrap" :id="'cate' + i"
						v-for="(item,i) in categories" :key="item.Name">
						<view :class="['c-item', { act: index==i }]" 
							@click="clickNav(item,i)"
							>{{item.Name}}</view>
					</view>
					
				</scroll-view>
			</view>
			
			<view class="flex10">
				<swiper :indicator-dots="false" class="height100 marginb-200" :autoplay="false" :duration="300" v-if="!showRes"
					circular :current="index" @change="swiperChange">
					<swiper-item v-for="(item,i) in categories" :key="i">
						<view class="noData" v-if="item.product.length===0">
							<text>暂无产品</text>
						</view>
						<scroll-view scroll-y class="height100" v-else>
							<view class="clearBoth pl20">
								<view :class="['p-item size25 bg-2']" 
									v-show="pro.desc.status==1"
									v-for="(pro,j) in item.product" :key="j" @click="toDetail(pro)">
									<view class="relative sb al">
										<image @load="loadOver(i,j)" :lazy-load="true" :src="imgUrl +'images/' + pro.image" mode="aspectFill" class="pro-img"></image>
										<view class="pro-main al">
											<view class="width70">
												<view class="height2 mb10">
													<view class="c2">{{pro.name}}</view>
												</view>
												<view class="al sb mb10">
													<view class="">
														<view><text>编号: {{pro.proNumber}}</text></view>
														<view><text>粘度: {{pro.viscosity}}</text></view>
														<view><text>规格: {{pro.specification}}</text></view>
													</view>
													
												</view>
											</view>
											<view class="width30" @click.stop=''>
												<view><text class="color-8">￥{{format(pro.price)}}</text></view>
												<addSub :num="pro.num" @changeNum='changeNum($event,pro)'></addSub>
											</view>
											
										</view>
										
									</view>
								</view>
							</view>
						</scroll-view>
					</swiper-item>
				</swiper>
				
				<!-- 搜索结果 -->
				<view scroll-y class="height100 res-list" v-else>
					<view class="clearBoth pl20">
						<view class="noData" v-if="products.length===0">暂无搜素结果</view>
						<view :class="['p-item size25 bg-2']" 
							v-show="pro.desc.status==1"
							v-for="(pro,j) in products" :key="j" @click="toDetail(pro)">
							<view class="relative sb al">
								<image :lazy-load="true" :src="imgUrl +'images/' + pro.image" mode="aspectFill" class="pro-img"></image>
								<view class="pro-main al">
									<view class="width70">
										<view class="height2 mb10">
											<view class="c2">{{pro.name}}</view>
										</view>
										<view class="al sb mb10">
											<view class="">
												<view><text>编号: {{pro.proNumber}}</text></view>
												<view><text>粘度: {{pro.viscosity}}</text></view>
												<view><text>规格: {{pro.specification}}</text></view>
											</view>
											
										</view>
									</view>
									<view class="width30" @click.stop=''>
										<view><text class="color-8">￥{{format(pro.price)}}</text></view>
										<addSub :num="pro.num" @changeNum='changeNum($event,pro)'></addSub>
									</view>
									
								</view>
								
							</view>
						</view>
					</view>
				</view>
				
				<!-- 底部提交订单 -->
				<view class="indexBottom al" @click="showChecked">
					<view class="indexBottomLeft sb al">
						<image :class="['topBottomIcon']" src="../../static/img/cart3.png" mode="widthFix"></image>
						<view class="dot size22 al ju">{{qty}}</view>
					</view>
					<view class="indexBottomCenter">
						<view style="color: #FF9900;">总共 {{qty}} 件产品</view>
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
		</view>
		
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword:'',
				categories: [],
				products: [],
				index: 0,
				x: 0,
				y: 1000,
				showDrag: false,
				inCart: [],
				timer: null,
				qty: 0,
				total: 0,
				showRes: false,
				imgUrl: ""
			};
		},
		onLoad () {
			this.getCategory()
			this.imgUrl = window.imgUrl
			
			// this.keyword = "金格"
			// this.searchFn()
		},
		watch: {
			index (val) {
				this.getPro(val)
			},
			keyword (val) {
				if (!val) {
					this.products = []
					this.showRes = false
				}
			},
			login: {
				handler (val) {
					if (val) {
						this.getCart()
					}
				},
				immediate: true,
			}
		},
		computed: {
			login () { return this.$store.state.app.login },
		},
		methods:{
			searchFn () {
				let that = this
				if (!this.keyword) { return false }
				uni.showLoading({
					title: "搜索中..."
				})
				this.$http({
					url: "productLike",
					method:"GET",
					// header: {
					// 	"Access-Control-Allow-Origin": "*"
					// },
					data: {
						search: that.keyword,
						page: 1,
						offset: 999
					},
					success (res) {
						console.log(res)
						that.products = res.data.data
						that.initProductNum()
					},
					fail (e) {
						console.log(e)
					},
					complete () {
						that.showRes = true
						uni.hideLoading()
					}
				})
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
				if (this.categories[this.index]) {
					this.categories[this.index].product.forEach(item => {
						item.num = 0
						this.inCart.forEach((cart) => {
							if (item.ID == cart.product_id) {
								item.num = cart.number
								item.cartId = cart.id * 1
							}
						})
					})
					
					this.categories = [...this.categories]
				}
				
				this.products.forEach(item => {
					item.num = 0
					this.inCart.forEach((cart) => {
						if (item.ID == cart.product_id) {
							item.num = cart.number
							item.cartId = cart.id * 1
						}
					})
				})
				
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
			// 进入产品详情
			toDetail (item) {
				uni.navigateTo({
					url: "/pages/cart/detail?id=" + item.ID
				})
			},
			loadOver (i,j) {
				this.categories[i].product[j].showImg = true
				this.categories = [...this.categories]
			},
			swiperChange (e) {
				console.log(e)
				let index = e.detail.current
				this.clickNav(this.categories[index], index)
			},
			clickNav (item,i) {
				let that = this
				this.index = i
				uni.createSelectorQuery().select(".categories").boundingClientRect(res => {
					let navMain = res.width
					uni.createSelectorQuery().select("#cate" + i).boundingClientRect(res1 => {
						let item = res1.width
						that.x = item*i - navMain/2 + (item/2)
					}).exec()
				}).exec()
			},
			getCategory () {
				let that = this
				this.$http({
					url: "category",
					method:"GET",
					// header: {
					// 	"Access-Control-Allow-Origin": "*"
					// },
					data: {
						page: 1,
						offset: 99999
					},
					success (res) {
						console.log(res)
						if (res.data) {
							res.data.data.forEach(item => {
								item.product = []
							})
							that.categories = res.data.data
							setTimeout(() => {
								that.getPro(0)
							},50)
						}
					},
					fail (e) {
						console.log(e)
					}
				})
			},
			getPro (index) {
				let that = this
				this.$http({
					url: "product/" + this.categories[index].ID,
					data: {
						page: 1,
						offset: 99999
					},
					success (res) {
						console.log(res)
						if (res.data) {
							// res.data.forEach(item => {
								
							// })
							that.categories[index].product = res.data.data
						}
						that.initProductNum()
					}
				})
			}
		}
	}
</script>


