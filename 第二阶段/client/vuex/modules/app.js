import http from "@/static/js/http.js"

export default {
    state: {
        lang: "zh-TW",
		imgUrl: "https://acarepro.online/IMGPATH/",
		login: false,
		showAdv: true,
    },
    mutations: {
        setAppData (state, data) {
            state[data.key] = data.value
        },
		logout (state) {
			uni.removeStorageSync("userId")
			uni.removeStorageSync("sale")
			uni.removeStorageSync("company")
			uni.removeStorageSync("token")
			uni.removeStorageSync("detail")
			state.login = false
		}
    },
    actions: {
		valiToken (store,data={}) {
			let token = uni.getStorageInfoSync("token")
			if (token) {
				http({
					noJump: true,
					url: "getShoppingCar/",
					data: {
						user_id: uni.getStorageSync("userId"),
						page: 1,
						offset: 1
					},
					complete (res) {
						console.log("test",res)
						if ((res.data.code === 40001) || (res.data.code == 40002)) {
							store.commit("setAppData", { key: "login", value: false })
							if (data.errorFn) {
								data.errorFn()
							}
						} else {
							store.commit("setAppData", { key: "login", value: true })
							if (data.successFn) {
								data.successFn()
							}
						}
					}
				})
			} else {
				store.commit('logout')
			}
		}
    }
}