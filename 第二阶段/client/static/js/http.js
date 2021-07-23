function http (options) {
	let baseURL = "https://acarepro.online/store/qiaoyumin/login/little/api/c1/"   //  /ACP/
	// let baseURL = "/api/"
	// let baseURL = "http://192.168.1.115:5005/api/c1/"
	// let baseURL = "http://139.9.194.151:9005/api/c1/"
	
	
	let imgUrl = "https://acarepro.online/IMGPATH/"
	// let imgUrl = "http://139.9.194.151:7111/"

	
	window.baseURL = baseURL
	window.imgUrl = imgUrl
	let header = {
		token: uni.getStorageSync("token"),
	}
	if (options.header) {
		header = Object.assign(options.header, header)
	}
	if (
		options.url.includes("login/sale")
	) {
		header = {}
		baseURL = baseURL.replace("api/c1/",'')
	}
	if (!options.method) {
		options.method = "GET"
	}
	
	if ( 
		options.url.includes("productLike") ||
		options.url.includes("getAdvertisement") ||
		options.url.includes("getPublicity") ||
		options.url.includes("getCarousel") ||
		options.url.includes("category") ||
		options.url.includes("product") ||
		options.url.includes("News")
	) { baseURL = baseURL.replace("c1",'c2') }
	
	
	
	uni.request({
		url: baseURL + options.url,
		data: options.data ? options.data : {},
		method: options.method,
		header: header,
		success (res) {
			//处理产品的数据
			if ((options.url.includes("product") || options.url.includes("getShoppingCar") || options.url.includes("productLike")) && options.method=='GET' ) {
				// if (options.url.includes("getShoppingCar")) {
				// 	console.log(123123, res.data.data[0])
				// }
				if (res.data.data instanceof Array) {
					res.data.data.forEach(item => {
						// console.log(item)
						try {
							if (item.detail) {
								item.desc = JSON.parse(item.detail)
							} else {
								item.desc = JSON.parse(item.desc)
							}
							
							if (!item.desc.specification) {
								item.desc.specification = {}
							} else {
								item.specification = item.desc.specification.val1 + item.desc.specification.val2 + " × " + item.desc.specification.val3 + item.desc.specification.val4
							}
							item.proNumber = item.desc.proNumber
							item.viscosity = item.desc.viscosity
							item.img = item.desc.img ? item.desc.img : []
							item.video_link = item.desc.video_link
						} catch {
							console.log('catch', item.ID, item)
							item.desc = {}
						}
					})
				} else if (res.data.data instanceof Object) {
					let item = res.data.data
					try {
						item.desc = JSON.parse(item.desc)
						if (!item.desc.specification) {
							item.desc.specification = {}
						} else {
							item.specification = item.desc.specification.val1 + item.desc.specification.val2 + " × " + item.desc.specification.val3 + item.desc.specification.val4
						}
						item.proNumber = item.desc.proNumber
						item.viscosity = item.desc.viscosity
						item.img = item.desc.img ? item.desc.img : []
						item.video_link = item.desc.video_link
					} catch {
						console.log('catch', item.ID, item)
						item.desc = {}
					}
				}
			}
			
			//处理新闻和宣传素材
			if ((options.url.includes("News") || (options.url.includes("Publicity")) ) && options.method=='GET' ) {
				if(res.data.data instanceof Array) {
					res.data.data.forEach(item => {
						if (item.image) {
							item.image = JSON.parse(item.image)
							item.preImg = item.image[0]
						}
					})
				}
			}

			
			options.success ? options.success(res) : null
		},
		fail (error) {
			console.log("err",error)
			options.fail ? options.fail(error) : null
		},
		complete (res) {
			// console.log("all", res)
			if (res.data) {
				if ((res.data.code == 40001) || (res.data.code == 40002)){
					if (options.noJump) {
						
					} else {
						uni.showToast({
							title: "登录状态过期，请重新登录",
							icon: "none"
						})
						uni.navigateTo({
							url: "/pages/login/login"
						})
					}
					
				}
			}
			
			options.complete ? options.complete(res) : null
		},
	})
}
export default http