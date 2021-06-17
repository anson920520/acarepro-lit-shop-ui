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

Vue.prototype.format = function (n,x) {
    n = Number(n)
    if (x) {
        let pow = Math.pow(10,x)
        n = Math.ceil(n*pow) / pow
    }
    var str = n.toString();
    str = str.replace(/[A-z]+/g, "")
    var reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g
    let num = str.replace(reg,"$1,");
    return num
}

import store from "@/store/store"

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
