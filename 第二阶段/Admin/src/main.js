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

// 压缩图片
Vue.prototype.dealImg = function (file, success, error) {
	// 图片小于0.5M不压缩
	if (file.size < Math.pow(512, 2)) {
		return success(file);
	}

	const name = file.name; //文件名
	const reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = e => {
		const src = e.target.result;
		const img = new Image();
		img.src = src;
		img.onload = e => {
			const w = img.width;
			const h = img.height;
			const quality = 0.62;  // 默认图片质量为0.92
			// 生成canvas
			const canvas = document.createElement('canvas');
			const ctx = canvas.getContext('2d');
			// 创建属性节点
			const anw = document.createAttribute("width");
			anw.nodeValue = w;
			const anh = document.createAttribute("height");
			anh.nodeValue = h;
			canvas.setAttributeNode(anw);
			canvas.setAttributeNode(anh);

			// 铺底色 PNG转JPEG时透明区域会变黑色
			ctx.fillStyle = "#fff";
			ctx.fillRect(0, 0, w, h);

			ctx.drawImage(img, 0, 0, w, h);
			// quality值越小，所绘制出的图像越模糊
			const base64 = canvas.toDataURL('image/jpeg', quality); // 图片格式jpeg或webp可以选0-1质量区间

			// 返回base64转blob的值
			console.log(`原图${(src.length/1024).toFixed(2)}kb`, `新图${(base64.length/1024).toFixed(2)}kb`);
			// 去掉url的头，并转换为byte
			const bytes = window.atob(base64.split(',')[1]);
			// 处理异常,将ascii码小于0的转换为大于0
			const ab = new ArrayBuffer(bytes.length);
			const ia = new Uint8Array(ab);
			for (let i = 0; i < bytes.length; i++) {
				ia[i] = bytes.charCodeAt(i);
			}
			file = new Blob([ab], {type : 'image/jpeg'});
			file.name = name;

			const files = new window.File(
				[file],
				name,
				{ type: file.type }
			)
				
			success(files);
		}
		img.onerror = e => {
			error(e);
		}
	}
	reader.onerror = e => {
		error(e);
	}
}


import store from "@/store/store"

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
