import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

import Header from "./component/Header.vue"
import AddSub from "./component/addSub.vue"
import pop from "./component/pop/components/uni-popup/uni-popup.vue"
import Drawer from "./component/uni-drawer.vue"              //https://ext.dcloud.net.cn/plugin?id=26
Vue.component('Drawer',Drawer)
Vue.component("Header", Header)
Vue.component("AddSub", AddSub)
Vue.component("pop", pop)

import store from "./store/store.js"

Vue.prototype.format = function (n,x=2) {
    n = Number(n)
    let pow = Math.pow(10,x)
    n = Math.floor(n*pow) / pow
    var str = n.toString();
    str = str.replace(/[A-z]+/g, "")
    var reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g
    let num = str.replace(reg,"$1,");
    return num
}

const app = new Vue({
	store,
    ...App
})
app.$mount()
