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
		height: 110upx;
		position: fixed;
		left: 0;
		bottom: 0;
		border-top: solid 1px @color-4;
		z-index:10;
	}
	.btn-1 {
		width: 18%;
		height: 100%;
		// border: solid red 1px;
	}
	.bl1 {
		border-left: solid 1px @color-4;
	}
	.btn-2 {
		width: 32%;
		color: #FFF;
	}
	.bg1 {
		background: #E69C36;
	}
	.bg2 {
		background: @color-7;
	}
	.wid20 {
		width: 40upx;
		height: 40upx;
	}
	.bottomModal {
		width: 750upx;
		height: 600upx;
		// border: solid red 1px;
		position: fixed;
		left: 0;
		bottom: -600upx;
		transition: 0.3s;
		z-index: 5;
	}
	.bottom110 {
		bottom: 110upx !important;
	}
	.b-m-header {
		padding-left: 210upx;
		border-bottom: solid @color-4 1px;
	}
	.marginr50 {
		margin-right: 50upx;
	}
	.p30 {
		padding: 30upx;
	}
	.modal-img {
		width: 200upx;
		height: 200upx;
		// border: solid red 1px;
		position: absolute;
		bottom: 10upx;
		left: 20upx;
	}
	.skus {
		background: @color-4;
		float: left;
		margin-top: 20upx;
		margin-right: 20upx;
		padding: 15upx;
		border-radius: 10upx;
	}
	.bb1 {
		border-bottom: solid @color-4 1px;
		padding-bottom: 20upx;
	}
	.sku-act {
		background: @color-7 !important;
		color: #FFF !important;
	}
	.mask {
		width: 750upx;
		height: 100vh;
		background: rgba(0,0,0,0.5);
		position: fixed;
		left: 0;
		top: 0;
		z-index: 4;
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
			<view class="btn-1 ju al columns op" @click="toHome">
				<image src="../../static/img/home.png" mode="widthFix" class="wid20"></image>
				<text class="size25">首页</text>
			</view>
			<view class="btn-1 ju al columns bl1 op">
				<image src="../../static/img/heart.png" mode="widthFix" class="wid20"></image>
				<text class="size25">收藏</text>
			</view>
			<view class="btn-2 bg1 ju al op" @click="addCart">
				<text>加入购物车</text>
			</view>
			<view class="btn-2 bg2 ju al op" @click="pay">
				<text>立即购买</text>
			</view>
		</view>
		
		<view :class="['bottomModal bg-2', { bottom110: showModal }]">
			<view class="b-m-header relative">
				<image class="modal-img"></image>
				<view class="sb al p30">
					<view>
						<view><text class="size40 color-7">￥233</text></view>
						<view><text>库存: 55555</text></view>
					</view>
					<image @click="showModal=false" src="/static/img/close.png" mode="widthFix" class="wid20 op marginr50"></image>
				</view>
			</view>
			<view class="p30">
				<view ><text>规格</text></view>
				<view class="clearBoth bb1">
					<view @click="sku=!sku" :class="['skus color-3', {'sku-act': sku}]"><text>300ML * 24</text></view>
				</view>
			</view>
			<view class="sb p30">
				<text>数量</text>
				<addSub :num="Qty" :min="1" :max="10000"></addSub>
			</view>
		</view>
		<view class="mask" v-if="showModal" @click="showModal=false"></view>
		
		
	</view>
</template>

<script>
	export default {
		data () {
			return {
				Qty: 1,
				sku: false,
				showModal: false,
				item: {}
			}
		},
		
		created () {
			// obj.Qty = item.num *1
			// obj.name = item.name
			// obj.id = item.ID
			// obj.price = item.price
			// obj.commodity = item
			this.getData()
		},
		mounted () {
			// this.$refs.p.open()
		},
		methods: {
			toHome () {
				uni.switchTab({
					url:"/pages/index/index"
				})
			},
			addCart () {
				if (!this.showModal) {
					this.showModal = true
				} else {
					
				}
			},
			pay () {
				if (!this.showModal) {
					this.showModal = true
				} else {
					
				}
			},
			getData () {
				this.$http({
					url: "productOne/",
					data: {
						id: 142
					},
					success (res) {
						console.log(res)
					}
				})
			}
		}
	}
</script>


