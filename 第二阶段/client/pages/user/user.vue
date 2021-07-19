<template>
	<view class="user-bg">
		<my-header></my-header>
		<view class="">
			<image class="avag" src="../../static/img/avag.png" mode="aspectFill"></image>
			<view class="ju lineh1"><text>{{detail.company}}</text></view>
			<view class="ju lineh1"><text>{{detail.principal}} 　{{detail.phone}}</text></view>
			<view class="flex width80 lineh1">
				<text class="label1">注册地址：</text>
				<text class="val1">{{detail.address}}</text>
			</view>
			<view class="flex width80 lineh1">
				<text class="label1">收货地址：</text>
				<text class="val1">{{detail.shipping}}</text>
			</view>
		</view>
		
		<view class="margint20">
			<view class="container sb al op" @click="toOrder">
				<text>订单记录</text>
				<image src="../../static/img/right.png" mode="aspectFill" class="r-icon"></image>
			</view>
			
			<view class="container sb al op" @click="noOpen">
				<text>二级网点销售记录</text>
				<image src="../../static/img/right.png" mode="aspectFill" class="r-icon"></image>
			</view>
			
			<view class="container sb al op" @click="noOpen">
				<text>修改个人资料</text>
				<image src="../../static/img/right.png" mode="aspectFill" class="r-icon"></image>
			</view>
			
			<view class="container sb al op" @click="noOpen">
				<text>联络客服</text>
				<image src="../../static/img/right.png" mode="aspectFill" class="r-icon"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				detail: {}
			}
		},
		onLoad () {
			let that = this
			this.$store.dispatch("valiToken", {
				errorFn () {
					uni.redirectTo({
						url: "/pages/login/login"
					})
				},
				successFn () {
					let detail = uni.getStorageSync("detail")
					if (detail) {
						that.detail = detail
					}
				}
			})
		},
		computed: {
			login () { return this.$store.state.app.login },
		},
		watch: {
			
		},
		methods:{
			noOpen() {
				uni.showToast({
					title: "该功能未开放",
					icon: "none"
				})
			},
			toOrder () {
				uni.navigateTo({
					url: "/pages/allOrder/allOrder"
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.avag {
		width: 280upx;
		height: 280upx;
		display: block;
		margin: 80upx auto 50upx;
	}
	.lineh1 {
		padding: 8upx 0;
	}
	.width80 {
		width: 80%;
		margin: auto;
	}
	.label1 {
		width: 30%;
		display: block;
		text-align: right;
	}
	.val1 {
		width: 70%;
		display: block;
	}
	.container {
		width: 690upx;
		margin: 30upx auto;
		border-radius: 20upx;
		background: #FFF;
		padding: 20upx 40upx;
	}
	.margint20 {
		margin-top: 60upx;
		padding-bottom: 200upx;
		z-index: 100;
		position: relative;	
	}
	.r-icon {
		width: 50upx;
		height: 50upx;
	}
	.user-bg {
		background: #FFCC32;
	}
</style>