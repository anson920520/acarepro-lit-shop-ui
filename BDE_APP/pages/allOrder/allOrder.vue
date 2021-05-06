<style lang="scss" scoped>
.myTitle{
	font-size: 35upx;
	color: #000;
	padding: 20upx 0 10upx;
}
.allOrder {
	// display: flex;
	// flex-direction: column;
	// // min-height: 100vh;
}
.allOrderTop {
	position: sticky;
	top:0;
	background:#FFF;
	z-index: 100;
}
.orderWrap {
	// border: solid red 1px;
	box-sizing: border-box;
	flex:10;
	padding-bottom: 80upx;
}
.orderList {
	border: solid black 1px;
	border-radius: 20upx;
	font-size: 23upx;
	margin: 20upx 0;
	overflow: hidden;
}
.orderListTop {
	padding: 20upx;
}
.receive {
	flex: 10;
	background: #1E8449;
	color: black;
	padding: 20upx 0;
	text-align: center;
}
.cancelBtn {
	flex: 10;
	background: #E50000;
	color: black;
	padding: 20upx 0;
	text-align: center;
}
// 表格
.table {
	border-bottom: solid 1px #333333;
	text-align: center;
}
.tableTr:nth-child(even){
	background:#CCCCCC
}
.proName {
	width: 200upx;
	margin-right:10upx;
	text-align:left !important;
}
.tableTd {
	// flex:10;
}
.received {
	background: #CCC !important;
}
.orderTotal {
	text-align: right;
}
.blueColor {
	background: #FF9900;
	color: #000;
}
.copy {
	margin-left: 20upx;
	color: #007AFF;
}
.priBorder {
	border: solid #000 1px;
	border-radius: 10upx;
	position: relative;
}
.delIcon {
	position: absolute;
	width: 30upx;
	height: 30upx;
	top: 17upx;
	right: 10upx;
	z-index:100;
}
.searchInp {
	padding: 10upx 15upx;
}
.times {
	padding: 10upx 0upx;
	text-align: center;
	width: 250upx;
}
.searchBtn {
	background: #00A3FF;
	color: #000;
	border-radius: 10upx;
	border: solid #000 1px;
	width: 150upx;
	margin-left: 30upx !important;
	padding: 4upx !important;	
}
.gan {
	margin: 0 20upx;
}
.sWrap {
	padding: 15upx 0 20upx;
}
</style>

<template>
	<view class="allOrder"  @click="$store.commit('setState', { key: 'showBox',value:false })">
		
		<view class="allOrderTop">
			<Header></Header>
			<view class="myTitle ju">订单记录</view>
		</view>
		
		<!-- 搜索 -->
		<view class="main ">
			<view class="relative">
				<image v-if="name" class="delIcon op" src="../../static/img/del.png" mode="widthFix" @click.stop.prevent="clearKeyword('name')"></image>
				<input class="priBorder searchInp" placeholder="客户名称" v-model="name" />
			</view>
			<view class="al sWrap">
				<picker mode="date" class="priBorder times" @change="chooseTime($event, 'time1')">
					<view>{{time1 ? time1 : "开始时间"}}</view>
					<image v-if="time1" class="delIcon op" src="../../static/img/del.png" mode="widthFix" @click.stop.prevent="clearKeyword('time1')"></image>
				</picker>
				<view class="bold gan">-</view>
				<picker mode="date" class="priBorder times" @change="chooseTime($event, 'time2')">
					<view>{{time2 ? time2 : "结束时间"}}</view>
					<image v-if="time2" class="delIcon op" src="../../static/img/del.png" mode="widthFix" @click.stop.prevent="clearKeyword('time2')"></image>
				</picker>
				<button size="mini" class="searchBtn" @click="filterData">搜寻</button>
			</view>
		</view>
		
		<!-- 订单 -->
		<view class="noData" v-if="sliceData.length===0">暂无订单</view>
		<view class="orderWrap main">
			<view class="orderList op" v-for="(item, i) in sliceData" :key='i' :id="'order' + i" @click="toDetail(item)">
				<view class="orderListTop">
					<view class="orderInfo sb">
						<view>订单编号: {{item.OrderID}}</view>
						<view v-if="item.status == 0">正在处理</view>
						<view v-else-if="item.status==2 || item.status==3">待发货</view>
						<view v-else-if="item.status==4">待收货</view>
						<view v-else-if="item.status==1" style="color: green">已收货</view>
					</view>
					<view class="orderInfo">用户: {{item.userName}}</view>
					<view class="orderInfo">订单创建时间: {{item.CreatedAt}}</view>
					<view class="table">
						<!-- 表格头 -->
						<view class="tableTr al" style="font-weight: bold;border-bottom: #333333 solid 1px;">
							<view class="tableTd proName" style="flex:3">产品</view>
							<!-- <view class="tableTd" style="flex:1">粘度</view> -->
							<view class="tableTd" style="flex:1.5">规格</view>
							<view class="tableTd" style="flex:0.5">箱数</view>
							<view class="tableTd" style="flex:1">金额</view>
						</view>
						<!-- 表格body -->
						<view class="tableTr ju" v-for="(attr, j) in item.Items" :key='j'>
							<view class="tableTd proName" style="flex:3">{{attr.name}}</view>
							<!-- <view class="tableTd" style="flex:1">{{attr.commodity ? attr.commodity.viscosity: ""}}</view> -->
							<view class="tableTd" style="flex:1.5">{{attr.commodity ? attr.commodity.specification: ""}}</view>
							<view class="tableTd" style="flex:0.5;">{{attr.Qty}}</view>
							<view class="tableTd" style="flex:1">{{attr.price}}</view>
						</view>
					</view>
					<view class="orderTotal">金额: ￥
						<text style="color: #FF9900">{{item.Total}}</text>
					</view>
				</view>
				
				
			</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {	
				sliceData: [],
				offect: 99999990,
				name: "",
				time1: "",
				time2: "",
			};
		},
		onLoad () {
			this.sliceList()
		},
		onReachBottom () {
			// this.offect += 5
			// this.sliceList()
		},
		onShow () {
			let that = this
			this.$store.dispatch("getOrder", {
				UserName: uni.getStorageSync("UserName"),
				success () {
					that.sliceList()
				}
			})
		},
		computed: {
			allData () { return this.$store.state.orders }
		},
		onPullDownRefresh () {
			let that = this
			that.name = ""
			that.time1 = ""
			that.time2 = ""
			this.$store.dispatch("getOrder", {
				UserName: uni.getStorageSync("UserName"),
				success () {
					that.sliceList()
				}
			})
		},
		watch: {
			name: {
				handler (val) {
					if (val == "") {
						this.filterData()
					}
				}
			}
		},
		methods: {
			clearKeyword (key) {
				this[key] = ''
				this.filterData()
			},
			toDetail (item) {
				this.$store.commit("setState", { key: 'order', value: item })
				uni.navigateTo({
					url: "/pages/orderDetail/orderDetail"
				})
			},
			chooseTime (e, key) {
				this[key] = e.detail.value
			},
			filterData () {
				let arr = this.allData.filter(item => {
					for (let key in item) {
						if (String(item[key]).includes(this.name)) {
							return true
						}
					}
				})
				
				if (this.time1) {
					arr = arr.filter(item => {
						
						let createAt = new Date(item.CreatedAt.split(" ")[0]).getTime()
						let t1 = new Date(this.time1).getTime()
						let t2 = this.time2 ? new Date(this.time2).getTime() : Infinity
						
						console.log( item.CreatedAt.split(" ")[0],  t1,createAt, t2)
						return (createAt >= t1) && (createAt <= t2)
					})
				}
				
				this.sliceData = arr
			},
			sliceList () {
				this.sliceData = this.allData.slice(0,this.offect)
			},
		}
	}
</script>

