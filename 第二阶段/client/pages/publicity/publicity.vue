<style lang="less" scoped>
@import url("@/static/css/color.less");
.p30 {
	padding: 30upx 0 0;
}
.container {
	width: 690upx;
	margin: 30upx auto;
	border-radius: 20upx;
	background: #FFF;
	padding: 20upx 40upx;
}
.r-icon {
	width: 50upx;
	height: 50upx;
}
</style>

<template>
	<view class="height100">
		<view class="ju p30">
			<text>宣传素材</text>
		</view>
		
		<view>
			<view class="container sb al op" @click="noOpen">
				<text>活动照片</text>
				<image src="../../static/img/right.png" mode="aspectFill" class="r-icon"></image>
			</view>
			
			<view class="container sb al op" @click="noOpen">
				<text>产品照片</text>
				<image src="../../static/img/right.png" mode="aspectFill" class="r-icon"></image>
			</view>
			
			<view class="container sb al op" @click="noOpen">
				<text>节日素材</text>
				<image src="../../static/img/right.png" mode="aspectFill" class="r-icon"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		created () {
			
		},
		watch: {
			
		},
		computed: {
			
		},
		methods:{
			noOpen() {
				uni.showToast({
					title: "该功能未开放",
					icon: "none"
				})
			}
		}
	}
</script>


