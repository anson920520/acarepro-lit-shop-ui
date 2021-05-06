<style lang="scss" scoped>
	.Header {
		padding: 60upx 0;
		background: #000;
		color: #FFF;
		position: relative;
		font-size: 30upx;
	}
	.menuIcon {
		position: absolute;
		right: 30upx;
		top: 55%;
		transform: translateY(-50%);
		width: 50upx;
		height: 50upx;
	}
	.menuBox {
		background: black;
		color: white;
		position: absolute;
		top: 100%;
		right: 0;
		max-height: 0;
		overflow: hidden;
		transition: 0.2s;
		z-index: 9;
	}
	.showMenuBox {
		max-height: 50vh;
		border-radius: 0 0 0 30upx;
	}
	.menuItem {
		font-size: 25upx;
		padding: 20upx 40upx;
		border-bottom: solid #FFF 1px;
		border-top: solid #CCC 1px;
	}
	.rightBoxWrap {
		width: 100%;
		height: 100vh;
		color: black;
	}
	.rightBoxWraptitle {
		padding: 50upx 20upx 20upx 20upx;
		font-size: 35upx;
		font-weight: bold;
	}
</style>

<template>
	<view class="Header ju">
		巴达尔资讯平台
		<image @click.stop="hideBox(true)" class="menuIcon op" src="../static/img/menu.png" mode="widthFix"></image>
		<!-- <view :class="['menuBox', {'showMenuBox': showBox}]" @click.stop="">
			<view class="menuItem op" @click="toHome">产品清单</view>
			<view class="menuItem op" @click="toMayOrder">我的订单</view>
			<view class="menuItem op">登出</view>
		</view> -->
		
		<Drawer :mode="'right'" ref='Drawer'>
			<view class="rightBoxWrap">
				<view class="rightBoxWraptitle">菜单</view>
				<view class="menuItem op" @click="toHome">产品清单</view>
				<view class="menuItem op" @click="toMayOrder">我的订单</view>
				<view class="menuItem op" @click="loginOut">登出</view>
			</view>
		</Drawer>
	</view> 
</template>

<script>
	export default {
		data () {
			return {
				
			}
		},
		mounted () {
			
		},
		computed: {
			showBox () { return this.$store.state.showBox }
		},
		methods: {
			hideBox (boo) {
				this.$refs.Drawer.open()
				// boo = !this.showBox
				// this.$store.commit('setState', { key: 'showBox', value: boo })
			},
			toMayOrder () {
				this.$refs.Drawer.close()
				uni.navigateTo({
					url: "/pages/allOrder/allOrder"
				})
			},
			toHome () {
				this.$refs.Drawer.close()
				uni.navigateTo({
					url: "/pages/index/index"
				})
			},
			loginOut () {
				uni.showModal({
					title: "提示",
					content: "确定退出登录?",
					success (res) {
						if (res.confirm) {
							uni.clearStorageSync()
							uni.reLaunch({
								url: "/pages/login/login"
							})
						}
					}
				})
				
			},
		}
	}
</script>

