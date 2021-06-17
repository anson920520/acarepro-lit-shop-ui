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
		font-size: 30upx;
		height: 100%;
		// color: #000;
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
</style>
