import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import axios from "@/http/http.js"

Vue.prototype.$axios = axios

import router from "@/router/router.js"


// 自定义组件
import myMenu from "@/components/menu/menu.vue"

Vue.component("myMenu", myMenu)

// iView
import ViewUI from 'view-design';
import './main.less';

Vue.use(ViewUI);

//预览大图 
// import VueImageSwipe from 'vue-image-swipe'     //https://segmentfault.com/a/1190000019398933
// import 'vue-image-swipe/dist/vue-image-swipe.css'
// Vue.use(VueImageSwipe)

import store from "@/store/store"

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
