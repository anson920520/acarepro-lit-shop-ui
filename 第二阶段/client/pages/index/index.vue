<template>
	<view class="pb200 bg-1">
		<my-header></my-header>
		<uniPopup ref="pop">
			<view class="msgMain relative">
				<image src="../../static/img/close.png" @click="closeAdv" mode="widthFix" class="closeAdv"></image>
				<swiper class="advLoop" :indicator-dots="true" circular :autoplay="true" :interval="5000" :duration="400">
					<swiper-item v-for="(item,i) in adv">
						<view class="full" :style="{'background-image': `url('${item.image}')`}">
							<view class="tc">{{item.name}}</view>
							
							<scroll-view scroll-y class="height80">
								<view v-html="item.detail"></view>
							</scroll-view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</uniPopup>
		
		
		<swiper class="adv-wrap" :indicator-dots="true" circular :autoplay="true" :interval="5000" :duration="500">
			<swiper-item v-for="(item,i) in loop" :key='item.name'>
				<view class="adv-item">
					<image :src="item.link" mode="aspectFill" class="full-img"></image>
				</view>
			</swiper-item>
		</swiper>

		<!-- 最新宣传素材 -->
		<view class="container1">
			<view class="tc"><text class="box-title">最新宣传素材</text></view>
			<scroll-view scroll-x class="mb30 scrollX">
				<view class="hot-pro1" v-for="(item,i) in publicity" :key="i" @click="toPubDetail(item)">
					<image class="info-img" :src="item.preImg" mode="aspectFill"></image>
					<view class="c1"><text>{{item.name}}</text></view>
					<view class="c4 size23" v-html="item.detail"></view>
				</view>
			</scroll-view>
			<view class="noData" v-if="publicity.length===0">暂无数据</view>
			<view class="mb30 ju" v-else>
				<button class="primaryBtn op" @click="toPub" size="mini">查看更多...</button>
			</view>
		</view>
		<view class="container1">
			<view class="tc"><text class="box-title">最新消息</text></view>
			<scroll-view class="mb30" scroll-y style="height:900upx">
				<view v-for="(item,i) in news" :key="i" class="sb pri-list">
					<image :src="item.preImg" mode="aspectFill" class="news-img"></image>
					<view class="flex10">
						<view class="news-title">{{item.name}}</view>
						<view class="news-content size23 c4" v-html="item.detail">{{item.detail}}</view>
						<view class="flex-end">
							<button  size="mini" class="primaryBtn op" @click="toNews(item)">阅读更多...</button>
						</view>
						
					</view>
					<!-- <view style="flex:7" class="c1">{{item.name}}</view>
					<view style="flex:3" class="tr">{{item.CreatedAt}}</view> -->
				</view>
				<view class="noData" v-if="news.length===0">暂无数据</view>
				<view class="noData size23 ju al op" @click="toNewsList" v-else>
					查看更多历史消息
					<image src="../../static/img/right1.png" mode="widthFix" style="width: 30upx;"></image>
				</view>
			</scroll-view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loop: [],
				news: [],
				hotPro: [],
				publicity: [],
				adv: [],
			}
		},
		onLoad() {
			if (this.showAdv) {
				this.$store.commit("setAppData", { key: "showAdv", value: false })
				this.getAdv()
			}
			this.getNews()
			this.getPub()
			this.getLoop()
		},
		computed: {
			showAdv () { return this.$store.state.app.showAdv }
		},
		mounted () {
		},
		methods: {
			closeAdv () {
				this.$refs.pop.close()
			},
			toPub () {
				uni.navigateTo({
					url: "/pages/publicity/publicity"
				})
			},
			toNewsList () {
				uni.navigateTo({
					url: "/pages/news/news"
				})
			},
			toNews (item) {
				uni.navigateTo({
					url: "/pages/news/newsDetail?id=" + item.ID
				})
			},
			// 获取轮播图
			getLoop () {
				let that = this
				this.$http({
					url: "getCarousel/",
					data: {
						page: 1,
						offset: 99,
					},
					success (res) {
						console.log(res)
						if (res.data.code == 200) {
							
							that.loop = res.data.data
						}
					}
				})
			},
			// 获取宣素材
			getPub () {
				let that = this
				this.$http({
					url: "getPublicity/",
					data: {
						page: 1,
						offset: 10,
					},
					success (res) {
						console.log(res)
						if (res.data.code == 200) {
							res.data.data.forEach(item => {
								item.CreatedAt = new Date(item.CreatedAt).toLocaleDateString()
							})
							that.publicity = res.data.data.filter(item => item.status==1)
						}
					}
				})
			},
			// 获取新闻
			getNews () {
				let that = this
				this.$http({
					url: "getClientNews/",
					data: {
						page: 1,
						offset: 10,
					},
					success (res) {
						console.log(res)
						if (res.data.code == 200) {
							res.data.data.forEach(item => {
								item.CreatedAt = new Date(item.CreatedAt).toLocaleDateString()
							})
							that.news = res.data.data.filter(item => item.status==1)
						}
					}
				})
			},
			toDetail (item) {
				uni.navigateTo({
					url: "/pages/cart/detail?id=" + item.ID
				})
			},
			toPubDetail (item) {
				uni.navigateTo({
					url: "/pages/publicity/publicityDetail?id=" + item.ID
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
							that.adv.sort((a,b) => {
								return b.rank - a.rank
							})
							if (that.adv.length) {
								that.$refs.pop.open()
							}
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
		height: 1080upx;
		width: 720upx;
		margin: auto;
		border-radius: 20upx;
		overflow: hidden;
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
	.container1 {
		padding: 30upx;
		margin: 30upx auto;
		width: 720upx;
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
	.scrollX {
		// border: solid red 1px;
		width: 100%;
		white-space: nowrap;
	}
	.tr {
		text-align: right;
	}
	.hot-pro1 {
		width: 29%;
		margin: 0upx 0upx 0;
		display: inline-block;
		margin-right: 6%;
		vertical-align: top;
		white-space: pre-wrap;
	}
	.info-img {
		width: 100%;
		height: 160upx;
		border: solid 1px;
		border-radius: 15upx;
	}
	.pb200 {
		padding-bottom: 200upx;
	}
	.msgMain {
		background: #FFF;
		width: 600upx;
		border-radius: 20upx;
		// padding: 20upx;
	}
	.advLoop {
		width: 100%;
		height:750upx;
	}
	.full {
		width: 100%;
		height: 100%;
		padding: 30upx;
		background-size:cover;
		background-position: center;
		background-repeat: no-repeat;
		border-radius: 20upx;
	}
	.height80 {
		height: 80%;
		overflow: auto;
		// border: solid 1px;
		margin-top: 20upx;
	}
	.closeAdv {
		width: 40upx;
		height: 40upx;
		position: absolute;
		right: -20upx;
		top: -20upx;
		z-index: 10;
	}
	
	
	
</style>
