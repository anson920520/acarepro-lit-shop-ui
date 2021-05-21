import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

import "@/static/css/public.css"

import store from "@/vuex/store.js"

import http from "@/static/js/http.js"
Vue.prototype.$http = http

Vue.prototype.format = function (n) {
	n = Number(n)
	var str = n.toString();
	str = str.replace(/[A-z]+/g, "")
	var reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g
	let num = str.replace(reg,"$1,");
	return num
}

// import Pop from "@/components/uni-popup/uni-popup.vue"

// Vue.component("Pop", Pop)

const app = new Vue({
	store,
    ...App
})
app.$mount()
