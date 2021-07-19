<style lang="less" scoped>
@import url("@/static/css/color.less");
.p30 {
	padding:  40upx 40upx 0upx;
}
.container {
	width: 690upx;
	margin: 0upx auto 50upx;
	border-radius: 20upx;
	background: #FFF;
	// padding: 20upx;
}
.r-icon {
	width: 50upx;
	height: 50upx;
}
.padding-bottom200 {
	padding-bottom: 200upx;
}
</style>

<template>
	<view class="height100vh bg-2 padding-bottom200">
		<my-header></my-header>
		<view class="p30">
			<page-nav></page-nav>
		</view>
		
		<view class="container">
			<view class="noData" v-if="dataList.length===0">暂无数据</view>
			<view v-for="(item,i) in dataList" :key="i" class="sb pri-list">
				<image :src="item.preImg" mode="aspectFill" class="news-img"></image>
				<view class="flex10">
					<view class="news-title">{{item.name}}</view>
					<view class="news-content size23 c4" v-html="item.detail">{{item.detail}}</view>
					<view class="flex-end">
						<button  size="mini" class="primaryBtn op" @click="toDetail(item)">阅读更多...</button>
					</view>
					
				</view>
				<!-- <view style="flex:7" class="c1">{{item.name}}</view>
				<view style="flex:3" class="tr">{{item.CreatedAt}}</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: [],
				page: 1,
				offset: 10,
			};
		},
		created () {
			this.getData()
		},
		watch: {
			
		},
		computed: {
			
		},
		onReachBottom () {
			this.page++
			this.getData()
		},
		methods:{
			toDetail (item) {
				uni.navigateTo({
					url: "/pages/news/newsDetail?id=" + item.ID
				})
			},
			getData () {
				let that = this
				uni.showLoading({
					title: "loading..."
				})
				this.$http({
					url: "getClientNews/",
					data: {
						page: this.page,
						offset: this.offset,
					},
					success (res) {
						console.log(res)
						if (res.data.code == 200) {
							res.data.data.forEach(item => {
								item.CreatedAt = new Date(item.CreatedAt).toLocaleDateString()
							})
							that.dataList = that.dataList.concat( res.data.data.filter(item => item.status==1) )
						}
					},
					complete () {
						uni.hideLoading()
					}
				})
			},
			noOpen() {
				uni.showToast({
					title: "该功能未开放",
					icon: "none"
				})
			}
		}
	}
</script>


