import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		inCart: [],              //已选商品
		showBox: false,           //显示隐藏 header的菜单栏,
		baseURL : "https://acarepro.online/store/qiaoyumin/login/little/api/v1/",         //服务器代理,线上使用
		// baseURL : "/api/",                                          //本地设置的反向代理,仅开发使用
		// baseURL : "http://192.168.1.115:5005/api/v1/",                                          //本地IP
		
		imgUrl: "https://acarepro.online/IMGPATH/",
		x: 10,        // 买10箱送 Y 箱
		
	},
	mutations: {
		setState (state,data) {
			state[data.key] = data.value
		}
	}
})

export default store
