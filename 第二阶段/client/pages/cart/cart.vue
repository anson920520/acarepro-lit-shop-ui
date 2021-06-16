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

</style>

<template>
	<view class="height100 bg-2">
		<view class="columns height100">
			<view>
				<view class="ju page-title"><text>产品清单</text></view>
				<scroll-view class="bg-2 categories" scroll-x scroll-with-animation :scroll-left="x">
					<view class="c-item-wrap" :id="'cate' + i"
						v-for="(item,i) in categories" :key="item.Name">
						<view :class="['c-item', { act: index==i }]" 
							@click="clickNav(item,i)"
							>{{item.Name}}</view>
					</view>
					
				</scroll-view>
			</view>
			
			<view class="flex10">
				<swiper :indicator-dots="false" class="height100" :autoplay="false" :duration="300" circular :current="index" @change="swiperChange">
					<swiper-item v-for="(item,i) in categories" :key="i">
						<view class="noData" v-if="item.product.length===0">
							<text>暂无产品</text>
						</view>
						<scroll-view scroll-y class="height100" v-else>
							<view class="clearBoth pl20">
								<view :class="['p-item bg-2']" 
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
											<view class="width30">
												<view><text class="color-8">￥{{format(pro.price)}}</text></view>
												<addSub></addSub>
											</view>
											
										</view>
										
									</view>
								</view>
							</view>
						</scroll-view>
					</swiper-item>
				</swiper>
				
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
			};
		},
		created () {
			this.getCategory()
		},
		watch: {
			index (val) {
				this.getPro(val)
			}
		},
		computed: {
			imgUrl () { return this.$store.state.app.imgUrl }
		},
		methods:{
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
					}
				})
			}
		}
	}
</script>


