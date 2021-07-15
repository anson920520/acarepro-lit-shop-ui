<template>
	<view class="all-warpper">
		<my-header></my-header>
		<view class="Login_one_main">
			<image class="Perfect_user_logo" src="../../static/img/logo.png" mode="widthFix"></image>
			<view class="loginText bold">会员登录</view>
			<view class="Input-warpper">
				<view class="Input">
					<input class="Input-input" 
						type="text" 
						v-model="UserName" 
						placeholder="请输入账号" 
						placeholder-style="color: #cccccc">
				</view>
				<view class="Input" >
					<input class="Input-input" 
						
						v-model="password"
						type="password" placeholder="请输入密码" 
						placeholder-style="color: #cccccc">
				</view>
			</view>
			
			<view class="al ju size25 color-2">
				<checkbox-group @change="changeC">
					<checkbox value="1" checked>保持登录</checkbox>
				</checkbox-group>
				
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
				logging: true,
				keep: ['1'],
			};
		},
		onLoad(val) {
			this.autoLogin()  
		}, 
		
		methods:{
			changeC (e) {
				// console.log(e)
				this.keep = e.detail.value
			},
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
								if (that.keep.length) {
									uni.setStorageSync("user", that.UserName)
									uni.setStorageSync("pwd", that.password)
								} else {
									uni.removeStorageSync("user")
									uni.removeStorageSync("pwd")
								}
								
								uni.setStorageSync("userId", res.data.detail.ID)
								uni.setStorageSync("sale", res.data.detail.sale)
								uni.setStorageSync("company", res.data.detail.company)
								uni.setStorageSync("token", res.data.token)
								uni.setStorageSync("detail",res.data.detail) 
								
								that.$store.commit("setAppData", { key: "login", value: true })
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
		// background-image: url("@/static/img/lbg.jpg");
		background: #E7D529;
		background-size: cover;
		background-position: bottom;
		// border: solid red 3px;
		
	}
	.Login_one_main {
		height: 80vh;
		// margin: auto;
		position: fixed;
		left: 50%;
		top: 50%;
		width: 65%;
		// border: solid 1px;
		transform: translateX(-50%) translateY(-50%);
	}
	.Input-warpper {
		width: 100%;
	}
	.Input {
		height: 80upx;width: 100%;z-index: 10;
		margin: 30upx 0;
		border: solid #666 1px;
		border-radius: 10upx;
		background: #FFF;
		&-input {
			display: inline-block;
			vertical-align: middle;
			font-size: 30upx;
			// position: absolute;
			// top: 50%;transform: translateY(-50%);left: 170upx;
			width: 90%;
			height: 100%;
			padding: 0 20upx;
		}
		&-text {
			font-size: 30upx;font-weight: 600;margin: 0 30upx;line-height: 90upx;
		}
	}
	
	.Perfect_user_logo {
		width: 320upx;
		// height: 200upx;
		display: block;
		margin: 30upx auto 20upx;
	}
	.loginText {
		font-size: 30upx;
		text-align: center;
		// font-weight: bold;
		margin: 120upx 0 40upx;
	}
	.Sub {
		width:100%;
		height: 85upx;
		line-height: 85upx;
		font-size: 35upx;margin-top: 125upx;
		background: #EE870E !important;
		color: black;
		background-size: cover;
		margin:40upx auto !important;
		border: solid #666 1px;
		position: relative;
		color: #fff;
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
