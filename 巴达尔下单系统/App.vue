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

<style>
	/*每个页面公共css */
	.back {
		width: 100vw;
		height: 100vh;
		/* background: #F0F0F0; */
		font-size: 28upx;
	}
	.ju {
		display: flex;
		justify-content: center;
	}
	.al {
		display: flex;
		align-items: center;
	}
	.sb {
		display: flex;
		justify-content: space-between;
	}
	.bold {
		font-weight: bold;
	}
	.op:active {
		opacity: 0.6;
	}
	.pageTitle {
		padding: 20upx 0;
		text-align: center;
		color: #565656;
	}
	.noData {
		padding: 30upx;
		color:#666;
		text-align: center;
	}
	.colorYellow {
		color: #FF9900;
	}
	@keyframes rotate {
		from {
			transform: rotate(0);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
