<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="less">
	@import url("@/static/css/color.less");
	page {
		background-color: @color-4;
		font-size: 28upx;
		height: 100%;
		// color: #000;
	}
	.height100vh {
		min-height: 100vh;
	}
	.noData {
		color: @color-5;
		padding: 30upx 0;
		text-align: center;
	}
	@keyframes rotate {
		from {
			transform: rotate(0);
		}
		to {
			transform: rotate(360deg);
		}
	}
	.main {
		width: 100%;
		margin: 20upx auto;
		padding: 20upx;
		box-sizing: border-box;
	}
	.primaryBtn {
		background: #FFCC32;
		color: #000;
		margin: 0;
	}
	.blackBtn {
		margin: 0;
		background: #000;
		color: #FFF;
		border-radius: 20upx;
	}
	
	
	.pri-list {
		margin: 40upx 0;
	}
	.news-img {
		width: 280upx;
		height: 250upx;
		// border: solid 1px;
		margin-right: 20upx;
	}
	.flex10 {
		flex: 10;
	}
	.news-content {
		height: 120upx;
		margin-top: 20upx;
		margin-bottom: 25upx;
	}
</style>
