<template>
	<view>
		<view class="bg-2 pb130">
			<view v-for="(item,i) in dataList" :key="i" class="cart-items al">
				<view>
					<view @click="changeCheck(i,item.check)" :class="['myCheckBox',{checked: item.check}]"></view>
				</view>
				<image class="pro-img" src="../../static/img/cate1.png" mode="aspectFill"></image>
				<view class="flex10">
					<view class="c1"><text>名字</text> </view>
					<view class="c1 size25 color-5"><text>规格: 1L* 24</text> </view>
					<view class="sb al">
						<text>$111</text>
						<addSub :num="item.Qty" @changeNum="changeNum($event, i)"></addSub>
					</view>
				</view>
			</view>
		</view> 
		
		<view class="bottomBar sb">
			<view class="al p20">
				<view @click="allCheck=!allCheck" :class="['myCheckBox',{checked: allCheck}]"></view>
				<text class="p20">全选</text>
				<text class="p20 color-7">￥100</text>
			</view>
			<view class="al">
				<view class="b-btn bg1 ju al color-2 op" v-if="!edit" @click="edit=true">编辑</view>
				<view class="b-btn bg1 ju al color-2 op" v-else @click="edit=false">完成</view>
				
				<view class="b-btn bg-7 ju al color-2 op" v-if="!edit">结算</view>
				<view class="b-btn bg-7 ju al color-2 op" v-else @click="del">删除</view>
			</view>
		</view>
		<Confirm :show="show" :text="'确定将已选商品移出购物车?'" @confirm="callDel"></Confirm>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: [
					{},{},{}
				],
				edit: false,
				show: false,
			}
		},
		computed: {
			allCheck: {
				get () { return this.dataList.every(item => item.check) },
				set (val) {
					this.dataList.forEach(item => {
						item.check = val
					})
					this.dataList = [...this.dataList]
				}
			}
		},
		methods:{
			changeCheck (i,boo) {
				this.dataList[i].check = !boo
				this.dataList = [...this.dataList]
			},
			changeNum (e, i) {
				this.dataList[i].Qty = e
				this.dataList = [...this.dataList]
			},
			del () {
				let boo = this.dataList.every(item => !item.check)
				if (!boo) {
					this.show = true
				}
				
			},
			callDel (e) {
				if (e) {
					
				}
				this.show = false
			}
		}
	}
</script>

<style lang="less" scoped>
@import url("@/static/css/color.less");
.pb130 {
	padding-bottom: 230upx;
}
.cart-items {
	padding: 20upx;
	border-top: solid @color-4 1px;
}
.pro-img {
	width: 150upx;
	height: 150upx;
	margin: 0 20upx;
}
.myCheckBox {
	width: 40upx;
	height: 40upx;
	border-radius: 50%;
	background: #fff;
	border:solid 1px #CCC;
	position: relative;
	// margin-left: 20upx;
}
.checked::before {
	position: absolute;
	width: 12upx;
	height: 5upx;
	background:white;
	content: "";	
	// border: solid green 1px;
	left: 18%;
	top: 53%;
	transform: rotate(45deg);
}
.checked::after {
	position: absolute;
	width: 18upx;
	height: 5upx;
	background:white;
	content: "";	
	// border: solid green 1px;
	left: 33%;
	top: 46%;
	transform: rotate(-45deg);
}
.checked {
	background: @color-7 !important;
	border: solid @color-7 2px !important;
}
.flex10 {
	flex: 10;
}
.bottomBar {
	width: 100%;
	height: 100upx;
	position: fixed;
	background: #FFF;
	left: 0;
	bottom: 100upx;
}
.bg1 {
	background: #5284de;
	color: #FFF;
}
.p20 {
	padding: 0 20upx;
}
.b-btn {
	height: 100%;
	width: 150upx;
}
</style>
