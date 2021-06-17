<template>
	<view class="pb200">
		<!-- <pop ref="pop">
			<view class="msgMain">
				<view class="bold ju mt20">通知</view>
				<view >
					<view class="msgItem">
						我司于5月1日-5月5日放假，在假期期间下的订单，于6号正常上班后安排发货，请知悉！
					</view>
				</view>
				<view class="iKnow" @click="iKnow">
					<text class="op">我知道了</text>
				</view>
			</view>
		</pop> -->
		
		
		<swiper class="adv-wrap" :indicator-dots="true" circular :autoplay="true" :interval="5000" :duration="500">
			<swiper-item v-for="(item,i) in adv" :key='item.name'>
				<view class="adv-item">
					<image :src="item.image" mode="aspectFill" class="full-img"></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 热销产品 -->
		<view class="container">
			<view class="tc"><text class="box-title">热销产品</text></view>
			<view class="sb mb30">
				<view class="hot-pro op" v-for="(item,i) in hotPro" :key="i" @click="toDetail(item)">
					<image class="full-img" :src="item.image" mode="aspectFill"></image>
				</view>
			</view>
		</view>
		<!-- 最新新闻 -->
		<view class="container">
			<view class="tc"><text class="box-title">最新消息</text></view>
			<view class="mb30">
				<view v-for="(item,i) in news" :key="i" class="sb op" @click="toNews(item)">
					<view style="flex:7" class="c1">{{item.name}}</view>
					<view style="flex:3" class="tr">{{item.CreatedAt}}</view>
				</view>
			</view>
		</view>
		<!-- 最新宣传素材 -->
		<view class="container">
			<view class="tc"><text class="box-title">最新宣传素材</text></view>
			<view class="sb mb30">
				<view class="hot-pro1" v-for="(item,i) in 3" :key="i">
					<image class="full-img" src="" mode="aspectFill"></image>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				adv: [],
				news: [],
				hotPro: []
			}
		},
		onLoad() {
			this.getAdv()
			this.getNews()
			this.getHot()
		},
		mounted () {
			// this.$refs.pop.open()
		},
		methods: {
			toNews (item) {
				uni.navigateTo({
					url: "/pages/news/news?id=" + item.ID
				})
			},
			getHot () {
				let that = this
				this.$http({
					url: "getHotProduct/",
					data: {
						page: 1,
						offset: 3,
					},
					success (res) {
						console.log(res)
						if (res.data) {
							res.data.data.forEach(item => {
								item.image = window.imgUrl + "images/" + item.image
							})
							that.hotPro = res.data.data.slice(0,3)
						}
						console.log(that, that.hotPro)
					}
				})
			},
			getNews () {
				let that = this
				this.$http({
					url: "getNews/",
					data: {
						page: 1,
						offset: 9999,
					},
					success (res) {
						console.log(res)
						if (res.data.code == 200) {
							res.data.data.forEach(item => {
								item.CreatedAt = new Date(item.CreatedAt).toLocaleDateString()
							})
							that.news = res.data.data.filter(item => item.status==1).reverse().slice(0,10)
						}
					}
				})
			},
			toDetail (item) {
				uni.navigateTo({
					url: "/pages/cart/detail?id=" + item.ID
				})
			},
			getAdv () {
				let that = this
				this.$http({
					url: "getAdvertisement/",
					data: {
						page: 1,
						offset: 9999,
					},
					success (res) {
						console.log(res)
						if (res.data.code == 200) {
							that.adv = res.data.data.filter(item => item.status==1)
						}
					}
				})
			},
			iKnow () {
				this.$refs.pop.close()
			},
			
			
		}
	}
</script>

<style lang="less" scoped>
	.adv-wrap {
		height: 480upx;
	}
	.adv-item {
		width:100%;
		height: 100%;
		// border: solid red 1px;
	}
	.full-img {
		width: 100%;
		height: 100%;
	}
	.container {
		padding: 30upx;
		margin: 30upx auto;
		width: 690upx;
		padding: 30upx;
		background: #FFF;
		border-radius: 20upx;;
	}
	.box-title {
		padding-bottom: 10upx;
		border-bottom: solid #000 1px;
	}
	.hot-pro {
		width: 25%;
		border: solid #000 1px;
		border-radius: 15upx;
		height: 170upx;
		margin: 0upx 30upx 0;
		overflow: hidden;
	}
	.mb30 {
		margin-top:30upx;
	}
	.tr {
		text-align: right;
	}
	.hot-pro1 {
		width: 29%;
		border-radius: 15upx;
		height: 200upx;
		margin: 0upx 0upx 0;
		background: #CCC;
	}
	.pb200 {
		padding-bottom: 200upx;
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
</style>
