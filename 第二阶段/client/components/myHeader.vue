<template>
	<view class="h-wrap">
		<view class="bg-1 my-header">
			<image src="../static/img/logo1.png" mode="aspectFill" class="h-logo"></image>
			<image src="../static/img/menu.png" mode="aspectFill" class="menuIcon op"></image>
		</view>
		
		<tabBar></tabBar>
	</view>
	
</template>

<script>
	export default {
		name:"myHeader",
		data() {
			return {
				
			};
		},
		mounted () {
			
		},
	}
</script>

<style lang="less" scoped>
	.h-wrap {
		height: 100upx;
	}
	.my-header {
		position: fixed;
		top: 0;
		z-index: 10;
		height: 100upx;
		padding-top: 20upx;
		width: 100%;
	}
	.h-logo {
		width: 80upx;
		height: 60upx;
		display: block;
		margin:  auto;
	}
	.menuIcon {
		position: fixed;
		top: 25upx;
		width: 50upx;
		height: 50upx;
		right: 30upx;
	}
</style>
