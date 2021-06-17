<template>
	<view class="all-warpper">
		<view class="Login_one_main">
			<image class="Perfect_user_logo" src="../../static/img/logo.png" mode="widthFix"></image>
			<view class="loginText">登录</view>
			<view class="Input-warpper" style="z-index: 10">
				<view class="Input">
					<input class="Input-input" 
						type="text" 
						v-model="UserName" 
						placeholder="请输入销售员姓名" 
						placeholder-style="color: #cccccc">
				</view>
				<view class="Input" style="border-top: #000 solid 1upx;">
					<input class="Input-input" 
						
						v-model="password"
						type="password" placeholder="请输入密码" 
						placeholder-style="color: #cccccc">
				</view>
			</view>
			<button class="Sub" type="primary"
				id="GR_LoGin_Btn"
				@tap="Login" 
			>管理订单 <view class="cycle" v-if="!logging"></view></button>
		
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				password: "",
				UserName: '',
				logging: true
			};
		},
		onLoad(val) {
			this.autoLogin()     //暂时不需要记住密码自动登录
		}, 
		
		methods:{
			autoLogin () {
				if (uni.getStorageSync('UserName')) {
					this.UserName = uni.getStorageSync('UserName')
					this.password = uni.getStorageSync('password')
					// this.Login()
				}
			},
			Login(){
				const that = this
				if (that.UserName == ''){
					uni.showToast({
						title: "信息填写不完整",
						icon: "none"
					})
				}else {
					uni.request({
						url: that.$store.state.baseURL.replace("api/c1/",'') + "sale/login/",
						method:"POST",
						data: {
							username: that.UserName,
							password: that.password
						},
						header: {
							"Content-Type": "application/x-www-form-urlencoded"
						},
						success (res) {
							console.log(res)
							if (res.data.code == 200) {
								uni.setStorageSync("UserName", that.UserName)
								uni.setStorageSync("password",that.password)
								uni.setStorageSync("pwd", res.data.data.password)
								uni.setStorageSync("detail", res.data.data)
								uni.setStorageSync("token", res.data.token)
								uni.navigateTo({
									url:"/pages/allOrder/allOrder"
								})
							} else {
								uni.showToast({
									title:"账号或密码错误",
									icon: "none"
								})
							}
						}
					})
				}
			},
			toHome(){
				uni.navigateTo({
					url: '/pages/index/index'
				})
			}
		}
	}
</script>

<style lang="scss">
	.all-warpper {
		height: 100vh;
		display: flex;
		// border: solid red 3px;
	}
	.Login_one_main {
		height: 80vh;
		// margin: auto;
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
	}
	.Input-warpper {
		border: 1upx solid #000;
		width: 525upx;
		border-radius: 15upx;
	}
	.Input {
		width: 100%;z-index: 10;
		margin: auto;
		&-input {
			display: inline-block;
			vertical-align: middle;
			font-size: 30upx;
			// position: absolute;
			// top: 50%;transform: translateY(-50%);left: 170upx;
			width: 100%;
			padding: 15upx;
		}
		&-text {
			font-size: 30upx;font-weight: 600;margin: 0 30upx;line-height: 90upx;
		}
	}
	.Input:first-child {
		border-radius: 10upx 10upx 0 0; 
	}
	.Perfect_user_logo {
		width: 320upx;
		// height: 200upx;
		display: block;
		margin: 50upx auto 20upx;
	}
	.loginText {
		font-size: 45upx;
		text-align: center;
		// font-weight: bold;
		margin: 80upx 0 20upx;
	}
	.Sub {
		width: 60%;
		height: 85upx;
		line-height: 85upx;
		font-size: 35upx;margin-top: 125upx;
		background: #FF9900 !important;
		color: black;
		background-size: cover;
		margin:100upx auto !important;
		border: solid 1upx black;
		position: relative;
	}
	.Sub view {
		width: 40upx;
		height: 40upx;
		position: absolute;
		right: 50upx;
		top: 17upx;
		border-top: 4upx solid white;
		border-left: 4upx solid white;
		border-right: 4upx solid white;
		border-bottom: 4upx solid transparent;
		border-radius: 50%;
		animation: cycle linear infinite 1s;
	}
	@keyframes cycle {
		form {transform: rotate(0);}
		to {transform: rotate(360deg);}
	}
	
	#GR_LoGin_Btn:active {
		transform: translateX(3upx) translateY(3upx);
	}
	.bgi {
		position: fixed;right: 0;z-index: 1;bottom: 0;
	}
</style>
