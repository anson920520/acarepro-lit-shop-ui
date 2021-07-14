<template>
	<view class="tab bg-2 al">
		<view class="tab-item ju al" v-for="(item,i) in list" :key="i" @click="changePage(item.path)">
			<view>
				<view class="ju" v-if="item.path == path"><image :src="item.img1" mode="widthFix" style="width:40upx"></image></view>
				<view class="ju" v-else><image :src="item.img" mode="widthFix" style="width:40upx"></image></view>
				<view class="tc size24"><text>{{item.name}}</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	import home from "@/static/img/home.png"
	import home1 from "@/static/img/home1.png"
	import gift from "@/static/img/gift.png"
	import gift1 from "@/static/img/gift1.png"
	import cart from "@/static/img/cart.png"
	import cart1 from "@/static/img/cart1.png"
	import user from "@/static/img/user.png"
	import user1 from "@/static/img/user1.png"
	export default {
		name:"tabBar",
		data() {
			return {
				list: [
					{ name: '首页', path: "pages/index/index" ,img: home, img1: home1},
					{ name: '宣传素材', path: "pages/publicity/publicity",img: gift, img1: gift1 },
					{ name: '购物', path: "pages/cart/cart",img: cart, img1: cart1 },
					{ name: '客户资料', path: "pages/user/user",img: user, img1: user1 },
				],
				path: "",
			};
		},
		mounted () {
			let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
			let curRoute = routes[routes.length - 1].route //获取当前页面路由
			// console.log(curRoute)
			this.path = curRoute
		},
		methods: {
			changePage (url) {
				uni.switchTab({
					url: "/" + url
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.tab {
		border-top: solid #CCC 1px;
		width: 100%;
		height: 50px;
		position: fixed;
		z-index: 999;
		left: 0;
		bottom: 0;
		// border: solid green;
	}
	.tab-item {
		width: 25%;
		height: 100%;
	}
</style>
