module.exports = {
    lintOnSave: false,
    publicPath: "./",
	css: {
		loaderOptions: {
			less: {
				javascriptEnabled: true
			}
		}
	},
    devServer: {
        // https: true,
		proxy: {
			"lwz": {
				target: "https://acarepro.online/store/qiaoyumin/login/little/api/v1/",
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					"^/lwz": ""
				}
			},
			"local": {
				target: "http://192.168.1.115:5005/api/v1/",
				changeOrigin: true,
				pathRewrite: {
					"^/local": ""
				}
			}
		}
	}
}