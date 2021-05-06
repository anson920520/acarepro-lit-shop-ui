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
			"db": {
				target: "https://douban.uieee.com",
				changeOrigin: true,
				pathRewrite: {
					"^/db": ""
				}
			}
		}
	}
}