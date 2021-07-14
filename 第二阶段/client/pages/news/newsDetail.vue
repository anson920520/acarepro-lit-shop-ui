<template>
	<view>
		<swiper class="adv-wrap" :indicator-dots="true" circular :autoplay="true" :interval="5000" :duration="500">
			<swiper-item v-for="(item,i) in img" :key='item.name'>
				<view class="adv-item">
					<image :src="item" mode="aspectFill" class="full-img"></image>
				</view>
			</swiper-item>
		</swiper>
		
		<view class="container" style="min-height:700upx;">
			<view class="size35 bold">
				<text>{{detail.name}}</text>
			</view>
			<view class="flex-end size20 color-5 pad30">
				<text>{{detail.CreatedAt}}</text>
			</view>
			<view class="news-content">
				<text>{{detail.detail}}</text>
			</view>
		</view>
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
			getData () {
				let that = this
				this.$http({
					url: "getClientNews/",
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
	.news-content {
		text-indent: 2em;
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
		padding: 30upx;
		margin: 30upx auto;
		width: 690upx;
		padding: 30upx;
		background: #FFF;
		border-radius: 20upx;;
	}
</style>
