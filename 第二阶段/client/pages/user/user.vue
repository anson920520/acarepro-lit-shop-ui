<style lang="less" scoped>
.user-top {
	height: 360upx;
	background: linear-gradient(to bottom, #EF8744, #F6c768);
}
.ava {
	width: 100upx;
	height: 100upx;
	border: solid #FFF 2px;
	border-radius: 50%;
	padding: 20upx;
	margin: auto;
	display: block;
}
.pl40 {
	padding: 15upx 15upx 15upx 60upx;
}
.lIcn {
	width: 60upx;
	height: 60upx;
	border-radius: 50%;
	position: absolute;
	left: -12upx;
	bottom: -6upx;
}
.radiu5 {
	border-radius: 15upx;
	margin-bottom: 15upx;
}
.ty30 {
	transform: translateY(-20upx);
}
</style>

<template>
	<view>
		<view class="user-top ju al">
			<view>
				<image src="../../static/img/user1.png" mode="aspectFill" class="ava"></image>
				<view class="tc ty30">
					<view class="relative  bg-1 radiu5">
						<image src="../../static/img/zuan.png" mode="aspectFill" class="lIcn"></image>
						<text class="color-2 pl40">普通用户</text>
					</view>
					<text class="size33 color-2">用户名</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>


