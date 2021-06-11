import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		inCart: [],              //已选商品
		showBox: false,           //显示隐藏 header的菜单栏,
		// baseURL : "https://acarepro.online/store/qiaoyumin/login/little/api/v1/",         //服务器代理,线上使用
		// baseURL : "/api/",              
		baseURL : "http://192.168.1.115:5005/api/v1/",      //本地设置的反向代理,仅开发使用
		// baseURL : "http://139.9.194.151:9005/api/v1/",      
		
		imgUrl: "https://acarepro.online/IMGPATH/",
		
		orders: [],
		order: {},
	},
	mutations: {
		setState (state,data) {
			state[data.key] = data.value
		}
	},
	actions:{
		getOrder (store, data) {
			uni.showLoading({
				title: "加载中..."
			})
			uni.request({
				url: store.state.baseURL +'sale/order' + "/" + data.UserName + "/" + uni.getStorageSync('pwd'),
				method: 'GET',
				success: res => {
					console.log(res)
					let pages = getCurrentPages();
					let route = pages[pages.length - 1].route;
					if (res.data instanceof Array) {
						res.data.forEach(item => {
							item.CreatedAt = item.CreatedAt.replace("+08:00","").replace("T", " ")
						})
						store.commit('setState', {
							key: "orders",
							value: res.data.reverse()
						})
						uni.setStorageSync("UserName", data.UserName)
						if (data.success) {
							data.success()
						}
					} else {
						// uni.showToast({
						// 	title: "暂无订单",
						// 	icon: "none"
						// })
						// if (route.includes("pages/login")) {
							
						// } else {
							uni.reLaunch({
								url: "/pages/login/login"
							})
						// }
					}
					
				},
				fail: () => {
					uni.showToast({
						title: "网络错误",
						icon: "none"
					})
				},
				complete: () => {
					uni.hideLoading()
					uni.stopPullDownRefresh()
				}
			});
		}
	}
})

export default store
