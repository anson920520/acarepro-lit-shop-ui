<style lang="less" scoped>
	@import url("@/static/css/color.less");
	.big-img {
		width: 750upx;
		height: 750upx;
	}
	.cartIco {
		width: 80upx;
		height:80upx;
		border-radius: 50%;
		right: 30upx;
		top: 200upx;
		position: absolute;
		border-left: solid 1px #CCC;
		border-right: solid 1px #CCC;
		border-bottom: solid 2px #CCC;
		z-index: 1;
	}
	.width30 {
		width: 50upx;
		height: 50upx;
	}
	.mleft40 {
		margin-left: 40upx;
	}
	.rightIco {
		width: 30upx;
		height: 30upx;
	}
	.vm {
		vertical-align: middle;
	}
	.label {
		width: 100upx;
		display: inline-block;
	}
	.pb10 {
		padding-bottom: 100upx;
	}
	.bottomBar {
		width: 100%;
		height: 60px;
		position: fixed;
		left: 0;
		bottom: 0;
		box-shadow: -5upx 0 10upx @color-5;
	}
	.btn-1 {
		width: 18%;
		height: 100%;
		border: solid red 1px;
	}
	.btn-2 {
		width: 32%
	}
</style>

<template>
	<view class="relative pb10">
		<image src="../../static/img/cart1.png" mode="aspectFill" class="big-img"></image>
		<view class="bg-2">
			<view class="cartIco ju al bg-2 op">
				<image src="../../static/img/cart.png" class="width30" mode="aspectFill"></image>
			</view>
			<view class="size35 main"><text>卡过圣诞节是广东省噶倒计时噶很多个哈</text></view>
			<view class="main sb">
				<view>
					<view class="color-7 size40">￥230</view>
					<view class="color-5">销量:123456</view>
				</view>
				<view>
					
				</view>
			</view>
		</view>
		
		<view class="main bg-2 sb al">
			<view>
				<text class="vm">选择</text>
				<text class="size25 mleft40">规格</text>
			</view>
			<image src="../../static/img/right.png" class="rightIco" mode="widthFix"></image>
		</view>
		
		<view class="main bg-2">
			<view class="ju"><text>商品详情</text></view>
			<view>
				<label class="label">编号 </label>:
				<text>127356123</text>
			</view>
			
			<view>
				<label class="label">粘度 </label>:
				<text>127356123</text>
			</view>
			
			<view>
				<label class="label">规格 </label>:
				<text>127356123</text>
			</view>
		</view>
		
		<!-- 底部bar -->
		<view :class="['bottomBar bg-2 sb']">
			<view class="btn-1"></view>
			<view class="btn-1"></view>
			<view class="btn-2">
				<text>加入购物车</text>
			</view>
			<view class="btn-2">
				<text>立即购买</text>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data () {
			return {
				
			}
		},
		
		created () {
			this.getData()
		},
		mounted () {
			// this.$refs.p.open()
		},
		methods: {
			getData () {
				this.$http({
					url: "productOne/",
					data: {
						id: 142
					},
					
				})
			}
		}
	}
</script>


