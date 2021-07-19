<template>
	<view class="h-wrap">
		<view class="bg-1 my-header">
			<image src="../static/img/logo1.png" mode="aspectFill" class="h-logo" @click="toHome"></image>
			<image v-if="!path.includes('login')" src="../static/img/menu.png" mode="aspectFill" class="menuIcon op" @click="showD"></image>
		</view>
		<uniDrawer ref="draw" mode="right">
			<image src="../static/img/avag.png" mode="aspectFill" class="ava"></image>
			<view class="tc size33 bold" v-if="!login" @click="toLogin">未登录</view>
			<view class="tc size33 bold" v-else>{{detail.username}}</view>
			<view>
				<view class="p30" @click="changePage('/pages/index/index')"><text>首页</text></view>
				<view class="p30" @click="changePage('/pages/publicity/publicity')"><text>宣传素材</text></view>
				<view class="p30" @click="changePage('/pages/cart/cart')"><text>购物</text></view>
				<view class="p30" @click="changePage('/pages/user/user')"><text>客户资料</text></view>
				<view class="p30" @click="changePage1('/pages/allOrder/allOrder')"><text>订单记录</text></view>
				<view class="p30" @click="logout"><text>登出</text></view>
			</view>
		</uniDrawer>
		<tabBar v-if="!path.includes('login')"></tabBar>
	</view>
	
</template>

<script>
	export default {
		name:"myHeader",
		data() {
			return {
				detail: {},
				path: "",
			};
		},
		mounted () {
			let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
			let curRoute = routes[routes.length - 1].route //获取当前页面路由
			// console.log(curRoute)
			this.path = curRoute
		},
		computed: {
			login () { return this.$store.state.app.login }
		},
		watch: {
			login: {
				handler (val) {
					if (val) {
						let detail = uni.getStorageSync("detail")
						if (detail) {
							this.detail = detail
							// console.log(this.detail)
						}
					}
				},
				immediate: true,
			}
		},
		methods: {
			toLogin () {
				uni.navigateTo({
					url: "/pages/login/login"
				})
			},	
			showD () {
				this.$refs.draw.open()
			},
			changePage (url) {
				this.$refs.draw.close()
				uni.navigateTo({
					url
				})
			},
			toHome () {
				if (this.login) {
					uni.navigateTo({
						url: "/pages/index/index"
					})
				}
				
			},
			changePage1 (url) {
				this.$refs.draw.close()
				uni.navigateTo({
					url
				})
			},
			logout () {
				let that = this
				uni.showModal({
					title: "提示",
					content: "确定登出 ？",
					success (res) {
						if (res.confirm) {
							that.$store.commit("logout")
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
	.ava {
		width: 100upx;
		height: 100upx;
		display: block;
		margin: 50upx auto 30upx;
	}
	.p30 {
		padding: 20upx 30upx;
		
	}
</style>
