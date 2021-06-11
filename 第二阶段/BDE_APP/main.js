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

const app = new Vue({
	store,
    ...App
})
app.$mount()
