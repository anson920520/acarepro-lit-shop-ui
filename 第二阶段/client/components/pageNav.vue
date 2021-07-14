<template>
	<view class="sb al">
		<view class="leftIco"></view>
		<scroll-view style="width: 90%;" scroll-x :scroll-with-animation="false" :scroll-left="x">
			<view class="al">
				<view v-for="(item,i) in list" @click="changePage(item.path)" :class="['width33 op', {act: path.includes(item.path)}]">{{item.name}}</view>
			</view>
		</scroll-view>
		<view class="rightIco"></view>
	</view>
</template>

<script>
	export default {
		name:"pageNav",
		data() {
			return {
				x: 0,
				list: [
					{ name: "新闻资讯", path: "pages/news/news" },
					{ name: "宣传素材", path: "pages/publicity/publicity" },
					{ name: "产品清单", path: "pages/cart/cart" },
				],
				path: ""
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
				if (url.includes('news')) {
					uni.navigateTo({
						url: "/" + url
					})
				
				} else {
					uni.switchTab({
						url: "/" + url
					})
				}
				
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("@/static/css/color.less");
	.leftIco {
		width: 0;
		height: 0;
		border: solid transparent 15upx;
		border-right: solid #C4C4C4 15upx;
		border-left: 0;
	}
	.rightIco {
		width: 0;
		height: 0;
		border: solid transparent 15upx;
		border-left: solid #C4C4C4 15upx;
		border-right: 0;
	}
	.width33 {
		width: 33%;
		text-align: center;
	}
	.act {
		color: @color-6 !important;
	}
</style>
