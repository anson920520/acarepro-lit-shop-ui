<template>
	<view class="all-warpper bg-2">
		<view class="Login_one_main">
			<image class="Perfect_user_logo" src="../../static/img/logo.png" mode="widthFix"></image>
			<view class="loginText">巴达尔资讯平台</view>
			<view class="Input-warpper" style="z-index: 10">
				<view class="Input">
					<text class="Input-text">账号：</text>
					<input class="Input-input" 
						type="text" 
						v-model="UserName" 
						placeholder="请输入账号" 
						placeholder-style="color: #cccccc">
				</view>
				<view class="Input" style="border-top: #000 solid 1upx;">
					<text class="Input-text">密码：</text>
					<input class="Input-input" 
						
						v-model="password"
						type="password" placeholder="请输入密码" 
						placeholder-style="color: #cccccc">
				</view>
			</view>
			<button class="Sub" type="primary"
				id="GR_LoGin_Btn"
				@tap="Login" 
			>登 录 <view class="cycle" v-if="!logging"></view></button>
		
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				UserName: '',
				password: "",
				logging: true
			};
		},
		onLoad(val) {
			this.autoLogin()  
		}, 
		
		methods:{
			autoLogin () {
				if (uni.getStorageSync('user') && uni.getStorageSync("pwd")) {
					this.UserName = uni.getStorageSync('user')
					this.password = uni.getStorageSync("pwd")
					// this.Login()
				}
			},
			Login(){
				// this.toHome()
				const that = this
				let url = that.$store.state.baseURL +'login/sale'
				if (that.UserName == '' || that.password == ''){
					uni.showToast({
						title: "信息填写不完整",
						icon: "none"
					})
				}else {
					if (!this.logging) {    //防抖
						return
					}
					this.logging = false
					this.$http({
						url: "login/sale",
						method:"POST",
						data: {
							USERNAME: that.UserName,
							PASSWORD: that.password
						},
						success: res => {
							console.log(res)
							if (res.data.message == "login successfully") {
								uni.setStorageSync("user", that.UserName)
								uni.setStorageSync("pwd", that.password)
								uni.setStorageSync("userId", res.data.detail.ID)
								uni.setStorageSync("sale", res.data.detail.sale)
								uni.setStorageSync("company", res.data.detail.company)
								uni.setStorageSync("token", res.data.token)
								uni.setStorageSync("detail",res.data.detail) 
								that.toHome()
							} 
							else if (res.data.message == "Wrong password") {
								uni.showToast({
									title: "密码错误",
									icon: "none"
								})
							}
							
							else if (res.data.message == "record not found") {
								uni.showToast({
									title: "无效账号",
									icon: "none"
								})
							}
							else {
								uni.showToast({
									title: res.data.message,
									icon: "none"
								})
							}
							
						},
						fail: () => {
							uni.showToast({
								title: "网络错误",
								icon: "none"
							})
						},
						complete: () => {
							that.logging = true
						}
					})
					
				}
				// 开发版
				// this.toHome()
			},
			toHome(){
				uni.switchTab({
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
		width: 625upx;
		border-radius: 15upx;
	}
	.Input {
		height: 90upx;width: 100%;z-index: 10;
		&-input {
			display: inline-block;
			vertical-align: middle;
			font-size: 30upx;
			// position: absolute;
			// top: 50%;transform: translateY(-50%);left: 170upx;
			width: 400upx;
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
		margin: 30upx auto 20upx;
	}
	.loginText {
		font-size: 55upx;
		text-align: center;
		// font-weight: bold;
		margin: 40upx;
	}
	.Sub {
		width: 60%;
		height: 85upx;
		line-height: 85upx;
		font-size: 35upx;margin-top: 125upx;
		background: #E5C448 !important;
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
