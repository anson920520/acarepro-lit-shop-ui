<style lang="scss" scoped>
.indexWrap {
	display: flex;
	flex-direction: column;
}
.nav {
	width: 100%;
	// border: solid red 1px;
	white-space: nowrap;
}
.navItem {
	display: inline-block;
	text-align: center;
	width: 20%;
	font-size: 28upx;
	color: #565656;
}

.navActive {
	border-bottom: solid 5upx #FF9900;
	display: inline-block;
	padding-bottom: 10upx;
	color: #FF9900;
}

.indexScroll {
	// width: 95%;
	// border: red solid;
	padding: 0 0 180upx 20upx;
	flex:10;
	overflow-y: scroll !important;
}
// .indexScroll::-webkit-scrollbar {
//   width: 50px;
//   height: 10px;
//   color:#CCC;
// }

// 滚动条
.indexScroll::-webkit-scrollbar {
	width: 10px;
}
/*定义滚动条轨道 */
.indexScroll::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color:#CCC;
}

/*定义滑块 */
.indexScroll::-webkit-scrollbar-thumb {
  display: block !important;
  width: 10px !important;
  border-radius: 10px;
  background-color:#404040 !important;
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
.indexBottom {
	width: 100%;
	height: 150upx;
	background: #000000;
	position: fixed;
	left: 0;
	bottom: 0upx;
	color: white;
	z-index:100;
}
.indexBottomLeft {
	flex:0.8;
	// width: 100upx;
	// height: 100upx;
	// background: white;
	margin-left: 20upx;
	border-radius: 10upx;
}
.indexBottomCenter {
	flex:6;
	padding-right: 20upx;
	font-size: 25upx;
	text-align: right;
}
.indexBottomRight {
	flex:3;
}
.topBottomIcon {
	width: 100%;
	height: 100%;
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
	height: calc(70vh - 250upx);
	// border: solid red 2px;
	box-sizing: border-box;
}
.bottomTitle {
	width: 100%;
	height: 60upx;
	color: #888888;
}
.mt30 {
	margin-top: 40upx;
}
.p30 {
	padding: 10upx 30upx;
	box-sizing: border-box;
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
		position: absolute;left:35%;
		top: 30%;
		animation: rotate 1s linear infinite;
	}
}
.msgMain {
	background: #FFF;
	width: 500upx;
	border-radius: 20upx;
	// padding: 20upx;
}
.msgItem {
	margin: 30upx;
	padding-left: 20upx;	
	position: relative;
	// &::before {
	// 	display: block;
	// 	content: "";
	// 	width: 10upx;
	// 	height: 10upx;
	// 	background: #FF9900;
	// 	border-radius: 50%;
	// 	position: absolute;
	// 	left: 0upx;
	// 	top: 15upx;
	// }
}
.iKnow {
	border-top: solid #333 1px;
	text-align: center;
	padding: 20upx 0;
}
.pm {
	padding-left: 20upx;
	margin: 30upx;
	position: relative;
}
.width30 {
	width: 30upx;
	height: 30upx;
	position: absolute;
	left: -20upx;
	top: 5upx;
}
.mt20 {
	padding-top: 20upx;
}

</style>

<template>
	<view  class="back indexWrap" @click="$store.commit('setState', { key: 'showBox',value:false })">
		<!-- 底部拖动栏 -->
		<view class="backarea" v-if="showDrag" @click="showChecked"></view>
		<view class="drapBox" >
			<movable-area class="indexArea">
				<movable-view class="indexView" :y='y' inertia direction="vertical" @change='changeArea' damping='40'>
					<view class="bottomTitle ju al" >订单明细</view>
					<scroll-view scroll-y="true" class="bottomScroll">
						<view class="lube al"
							style="wdth: 96.5%;"
							v-for="(item, i) in inCart" :key='i' v-show="item.num > 0">
							<image :src="$store.state.imgUrl+'images/' + item.image" mode="aspectFit" class="productImg"></image>
							<view class="productCenter">
								<view style="font-weight: bold;">{{item.name}}</view>
								<view>编号: {{item.proNumber}}</view>
								<view>粘度: {{item.viscosity}}</view>
								<view>规格: {{item.specification}}</view>
							</view>
							<view class="productRight ju" style="flex-direction: column;">
								<text style="color: #FF9900;font-weight: bold;">$ {{item.price}}</text>
								<AddSub :num='item.num' @changeNum='changeNum2($event,i)'></AddSub>
							</view>
						</view>
						
						<view class="mt30">
							<view class="lube p30 sb" v-for="(item,i) in discount" :key="i">
								<text class="colorYellow">{{item.name}}</text>
								<text>赠送 {{item.Qty}} 箱</text>
							</view>
						</view>
					</scroll-view>
				</movable-view>
			</movable-area>
		</view>
		<!-- 顶部 -->
		<view>
			<Header></Header>
			<view class="pageTitle">产品清单</view>
			<scroll-view class="nav al" scroll-x >
				<view class="navItem op" v-for="(item,i) in navList" :key='i' @click="changePage(i)">
					<text :class="{'navActive':index==i}">{{item.Name}}</text>
				</view>
			</scroll-view>
		</view>
		
		<!-- 产品列表 -->
		<view scroll-y :show-scrollbar="false" :bounce="false"
			class="indexScroll" >
			<view class="noData" v-if="lubeList[index] ? lubeList[index].length===0 : true">暂无产品</view>
			<view class="lube al"
				v-for="(item, i) in lubeList[index]" :key='i'>
				<image v-show="item.showImg" @load="loadOver(i)" :lazy-load="true" :src="$store.state.imgUrl+'images/' + item.image" mode="aspectFit" class="productImg"></image>
				<view class="productImg loading" v-show="!item.showImg"></view>
				<view class="productCenter">
					<view style="font-weight: bold;">{{item.name}}</view>
					<view>编号: {{item.proNumber}}</view>
					<view>粘度: {{item.viscosity}}</view>
					<view>规格: {{item.specification}}</view>
				</view>
				<view class="productRight ju" style="flex-direction: column;">
					<view class="ju" style="width: 80%;"><text style="color: #1E8449;font-weight: bold;">$ {{item.price}}</text></view>
					<AddSub :num='item.num' @changeNum='changeNum($event,i)'></AddSub>
				</view>
			</view>
		</view>
		<!-- 底部提交订单 -->
		<view class="indexBottom al" @click="showChecked">
			<view class="indexBottomLeft ju al">
				<image :class="['topBottomIcon']" src="../../static/img/Cart.png" mode="widthFix"></image>
			</view>
			<view class="indexBottomCenter">
				<view>共 {{allQty}} 箱</view>
				<view class="al bottomTotal">总金额:
					<text style="color: #FF9900;font-weight: bold;font-size: 40upx;">￥{{total}}</text>
				</view>
			</view>
			<view class="indexBottomRight">
				<view class="submit ju op" @click.stop="createOrder">下一步</view>
			</view>
		
		</view>
		
		<pop ref="pop">
			<view class="msgMain">
				<view class="bold ju mt20">通知</view>
				<view >
					<!-- <view class="msgItem">金格、银格、铜格、黑格系列铁罐 买10送2 (每240升送48升) 活动优惠</view>
					<view class="msgItem">橙罐系列铁罐 买10送1 (每240升送24升) 活动优惠</view>
					<view class="pm">
						<image class="width30" src="../../static/img/attention.png" mode=""></image>
						<text>注意：1升产品均为12瓶装，需购买2箱1升装产品计为优惠政策的1箱.</text>
					</view> -->
					<view class="msgItem">
						我司于5月1日-5月5日放假，在假期期间下的订单，于6号正常上班后安排发货，请知悉！
					</view>
				</view>
				<view class="iKnow" @click="iKnow">
					<text class="op">我知道了</text>
				</view>
			</view>
		</pop>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				y:1000,
				timer: null,       //底部拖动事件定时器
				showDrag: false,   //显示蒙层
				total: 0,          //底部总价
				// 润滑油数据
				lubeList:[],
				//已选商品
				inCart: [],
				allQty: 0,       //共选了几件
				// 导航菜单
				navList: [],
				discount: [],
			}
		},
		onLoad() {
			this.getCate()
		},
		computed: {
			x () { return this.$store.state.x },
		},
		watch: {
			inCart: {
				handler (val) {
					let that = this
					that.discount = []
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
					for (let key in cate) {
						let totalL = 0
						cate[key].forEach(pro => {
							totalL += pro.num * pro.desc.specification.val1 * pro.desc.specification.val3
						})
						// console.log(totalL)   // 一个分类的总升数
						let send = Math.floor(totalL / 240) * cate[key][0].category.Promotion
						if (send) {
							// that.discount.push({
							// 	type: "discount",
							// 	name: cate[key][0].category.Desc,
							// 	Qty: send * 1
							// })
						}
					}
					
					// 买10 送2
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
					// 		that.discount.push({
					// 			type: "discount",
					// 			name: cate[key].category.Desc,
					// 			Qty: send * 1
					// 		})
					// 	}
					// }
				}
			}
		},
		mounted () {
			// this.$refs.pop.open()
		},
		methods: {
			// 获取分类
			getCate () {
				let that = this
				uni.request({
					url: that.$store.state.baseURL + "category",
					method:"GET",
					success (res) {
						console.log("category",res)
						if (res.data) {
							that.navList = res.data
							for (let i=0;i<that.navList.length;i++) {
								let arr = []
								that.lubeList.push(arr)
							}
							if (that.navList[that.index]) {
								that.getData(that.navList[that.index])
							}
							
						}
						uni.hideLoading()
					}
				})
			},
			loadOver (i) {
				this.lubeList[this.index][i	].showImg = true
				this.lubeList = [...this.lubeList]
			},
			// 获取数据
			getData (cate) {
				let that = this
				uni.showLoading({
					title:'加载中'
				})
				uni.request({
					url: that.$store.state.baseURL + "product/" + cate.ID,
					method: "GET",
					success (res) {
						console.log(res)
						if (res.data) {
							// res.data = res.data.slice(0,10)
							res.data.forEach(item => {
								item.category = cate
								item.image = item.image.replace(" ","")
								item.num = 0
								// let half = item.desc.split(" ")[0].length
								// item.proNumber = item.desc.slice(0,half)
								// item.specification = item.desc.slice(half).trim()
								try {
									item.desc = JSON.parse(item.desc)
									if (!item.desc.specification) {
										item.desc.specification = {}
									} else {
										item.specification = item.desc.specification.val1 + item.desc.specification.val2 + " × " + item.desc.specification.val3 + item.desc.specification.val4
									}
									item.proNumber = item.desc.proNumber
									item.viscosity = item.desc.viscosity
								} catch {
									console.log('cateh', item.ID)
									item.desc = {}
								}
								that.inCart.forEach(attr => {
									if (item.ID == attr.ID) {
										item.num = attr.num
									}
								})
								if (item.imageName) {
									if (!item.imageName.includes('png')) {
										item.imageName = item.proNumber + ".png"
									}
								}
								
							})
							
							
							that.lubeList.splice(that.index,1,res.data.filter(item => item.desc.status=='1'))
						}
					},
					fail () {},
					complete () {
						uni.stopPullDownRefresh()
						setTimeout(() => {
							uni.hideLoading()
						},800)
					}
					
				})
			},
			// 去提交订单页面
			createOrder () {
				if (this.inCart.length == 0) {
					uni.showToast({
						title: "请选择产品",
						icon: 'none'
					})
				} else {
					uni.navigateTo({
						url: "/pages/createOrder/createOrder?total=" + this.total
					})
				}
				
			},
			// 选择数量
			changeNum (e,i) {
				let that = this
				this.lubeList[that.index][i].num = e * 1
				let arr = []
				this.lubeList.forEach(item => {
					arr = arr.concat(item.filter(attr => attr.num>0))
				})
				this.inCart = arr
				this.upInCart()
			},
			// change已选商品的数量
			changeNum2 (e, i) {
				this.inCart[i].num = e * 1
				// this.inCart = this.inCart.filter(item => {
				// 	return item.num > 0
				// })
				this.inCart.forEach(item => {
					this.lubeList.forEach(item1 => {
						item1.forEach(item2 => {
							if (item2.ID == item.ID) {
								item2.num = item.num
								// item.num = item2.num
							}
						})
					})
				})
				this.inCart = [...this.inCart]
				if (!this.inCart.length) {
					this.showDrag = false
					this.y = 1000
				}
				
				this.upInCart()
			},
			// 将已选商品放在store
			upInCart () {
				let total = 0
				let allQty = 0
				this.inCart.forEach(item => {
					total += item.num * item.price
					allQty += Number(item.num)
				})
				setTimeout(() => {
					this.discount.forEach(item => {
						this.allQty += Number(item.Qty)
					})
				},100)
				
				this.allQty = allQty
				this.total = total
				this.$store.commit("setState", { key: "inCart", value: this.inCart })
			},
			// 显示已选择
			showChecked () {
				if (!this.showDrag) {
					if (this.inCart.length) {
						this.y = 0
						this.showDrag = true
					}
				} else {
					this.y = 1000
					this.showDrag = false
				}
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
			// swiper的change事件
			changePage (e) {
				this.index = e
				if (!this.lubeList[this.index].length) {
					this.getData(this.navList[this.index])
				}
				
			},
			iKnow () {
				this.$refs.pop.close()
			},
		},
		onPullDownRefresh () {
			this.getData(this.navList[this.index])
		},
	}
</script>


