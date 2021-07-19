<template>
	<view class="bg-2 height100vh">
		<my-header></my-header>
		<view class="container">
			<view class="al op" @click="back">
				<view class="backIco"></view>
				返回上一页
			</view>
		</view>
		<view class="container">
			
			<swiper class="adv-wrap" :indicator-dots="true" circular :autoplay="true" :interval="5000" :duration="500">
				<swiper-item v-for="(item,i) in img" :key='item.name'>
					<view class="adv-item">
						<image :src="item" mode="aspectFill" class="full-img"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		
		<view class="container" style="min-height:0upx;">
			<view class="size35 bold">
				<text>{{detail.name}}</text>
			</view>
			
			<view class="news-content1" v-html="detail.detail">
				<text>{{detail.detail}}</text>
			</view>
		</view>
		
		<!-- <button class="primaryBtn" size="mini"> -->
			<a class="primaryBtn download op size33" :href="detail.file" target="_blank">下载素材</a>
			<view style="padding: 30upx 50upx;" class="tc size23 color-7">如需下载素材，请点击页面右上角， 点击“在浏览器打开”后， 方可下载。</view>
		<!-- </button> -->
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img: [],
				id: "",
				detail: {},
			};
		},
		onLoad (val) {
			this.id = val.id
			this.getData()
		},
		methods:{
			back () {
				uni.navigateBack()
			},
			getData () {
				let that = this
				this.$http({
					url: "getPublicity/",
					data: {
						id: that.id
					},
					success (res) {
						console.log(res)
						if (res.data.code == 200) {
							res.data.data.forEach(item => {
								item.CreatedAt = new Date(item.CreatedAt).toLocaleDateString()
							})
							that.detail = res.data.data[0]
							that.img = (that.detail.image)
						} else {
							that.detail = {}
						}
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.pad30 {
		padding: 30upx 0;
	}
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
		margin: 30upx auto;
		width: 660upx;
		// padding: 30upx;
		background: #FFF;
		// border-radius: 20upx;
		// border: solid 1px;
	}
	
	.backIco {
		width: 0;
		height: 0;
		border: solid 15upx transparent;
		border-right: solid #000 15upx;
		margin-right: 15upx;
	}
	.download {
		width: 250upx;
		display: block;
		margin: auto;
		padding: 10upx;
		text-align: center;
		border-radius: 10upx;
	}
	.news-content1 {
		margin-bottom: 90upx;
	}
</style>
