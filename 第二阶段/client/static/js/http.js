function http (options) {
	// const baseURL = "https://acarepro.online/store/qiaoyumin/login/little/api/v1/"
	const baseURL = "http://192.168.1.115:5005/"
	const imgUrl = "https://acarepro.online/IMGPATH/"
	
	let header = {
		token: uni.getStorageSync("token"),
	}
	if (options.header) {
		header = Object.assign(options.header, header)
	}
	if (options.url.includes("login/sale")) {
		header = {}
	}
	
	uni.request({
		url: baseURL + options.url,
		data: options.data ? options.data : {},
		method: options.method ? options.method : "GET",
		header: header,
		success (res) {
			//处理产品的数据
			if (options.url.includes("product")) {
				if (res.data instanceof Array) {
					res.data.forEach(item => {
						try {
							item.desc = JSON.parse(item.desc)
							if (!item.desc.specification) {
								item.desc.specification = {}
							} else {
								item.specification = item.desc.specification.val1 + item.desc.specification.val2 + " × " + item.desc.specification.val3 + item.desc.specification.val4
							}
							item.proNumber = item.desc.proNumber
							item.viscosity = item.desc.viscosity
						} catch {
							console.log('cateh', item.ID, item)
							item.desc = {}
						}
					})
				}
			}
			
			options.success ? options.success(res) : null
		},
		fail (error) {
			options.fail ? options.fail(error) : null
		},
		complete (res) {
			options.complete ? options.complete.complete(res) : null
		},
	})
}
export default http