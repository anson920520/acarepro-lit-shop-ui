<template>
	<view class="pb200">
		<swiper class="adv-wrap" :indicator-dots="true" :autoplay="true" :interval="5000" :duration="500">
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
				<view class="hot-pro op" v-for="(item,i) in hotPro" :key="i">
					<image class="full-img" :src="item.image" mode="aspectFill"></image>
				</view>
			</view>
		</view>
		<!-- 最新新闻 -->
		<view class="container">
			<view class="tc"><text class="box-title">最新新闻</text></view>
			<view class="mb30">
				<view v-for="(item,i) in news" :key="i" class="sb op">
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
		methods: {
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
							that.hotPro = res.data.data
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
							that.news = res.data.data.reverse().slice(0,10)
						}
					}
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
							that.adv = res.data.data
						}
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.adv-wrap {
		height: 400upx;
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
		height: 180upx;
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
</style>
