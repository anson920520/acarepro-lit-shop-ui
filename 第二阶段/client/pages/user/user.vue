<style lang="less" scoped>
@import url("@/static/css/color.less");
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
.money {
	width: 40%;
	background: #FBFBFB;
}
.point {
	width: 60%;
}
.width50upx {
	width: 60upx;
	height: 60upx;
	margin-bottom: 20upx;
	// border: solid red 1px;
}
.p20 {
	padding: 20upx;
}
.coin {
	width: 30upx;
	height: 30upx;
	margin-top: 5upx;
	margin-right: 10upx;
}
.border-botton {
	border: solid @color-4 1px;
	margin-top: 20upx;
}
</style>

<template>
	<view>
		<view class="user-top ju al">
			<view>
				<image src="../../static/img/ava.png" mode="aspectFill" class="ava"></image>
				<view class="tc ty30">
					<view class="relative  bg-1 radiu5">
						<image src="../../static/img/zuan.png" mode="aspectFill" class="lIcn"></image>
						<text class="color-2 pl40">普通用户</text>
					</view>
					<text class="size33 color-2">用户名</text>
				</view>
			</view>
		</view>
		<view class="bg-2 al">
			<view class="money columns ju al p20">
				<image src="../../static/img/wallet.png" class="width50upx" mode="aspectFill"></image>
				<text>我的钱包</text>
			</view>
			<view class="point columns ju al p20">
				<viwe class="width50upx ju al"><text class="color-6">0</text></viwe>
				
				<view class="ju al">
					<image src="../../static/img/coin.png" mode="widthFix" class="coin"></image>
					<text>积分</text>
				</view>
			</view>
		</view>
		
		
		<view class="bg-2 border-botton">
			<view class="main">我的订单</view>
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


