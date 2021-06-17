<style lang="less" scoped>
@import url("~@/assets/css/color.less");
.loginBg {
	height: 100vh;
	background-image: url('~@/assets/img/bg2.png');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: right top;
}
.loginMain {
	padding: 20px;
	position: fixed;
	width: 500px;
	left: 5%;
	top: 50%;
	transform: translateY(-50%);
	border-radius:10px;
	background: #5F5F5F;
	box-shadow: 0px 3px 5px #5F5F5F;
}
.formItem {
	position: relative;
	padding-top: 15px;
	padding-bottom: 15px;
	width:70%;
	margin: auto;
	input {
		width: 80%;
		outline: none;
		border: none;
		background: #FFF;
		border-radius: 10px;
		padding: 3px 5px;
		color: #000;
		border: solid #878787 2px;
	}
	// input:focus ~ label,input:valid ~ label {
	// 	top: 0!important;
	// 	font-size: 12px !important;
	// }
	label {
		width: 19%;
	}
}
.loginBtn {
	padding: 5px 0;
	display: block;
	width: 140px;
	background: @color-4;
	margin:20px auto;
	text-align:center;
	cursor: pointer;
	user-select: none;
	transition: 0.9s;
	border-radius: 10px;
	color: #000;
	&:hover {
		box-shadow: 0 0 25px  @color-4,0 0 50px  @color-4,0 0 75px  @color-4,0 0 100px  @color-4;
	}
}
</style>

<template>
    <div class="loginBg">

		<div class="loginMain whiteColor">
			<h1 class="ju" style="margin: 30px 0;">经销商营运系统管理端</h1>

			<div class="formItem size16 al">
				<label >账号：</label>
				<input type="text" required="" v-model="username">
			</div>

			<div class="formItem size16 al">
				<label >密码：</label>
				<input type="password" @keydown.enter="login" required="" v-model="password">
			</div>

			<a class="loginBtn size20 bold op" @click="login">登入</a>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			username: "",
			password: ""
		}
	},
	methods:{
		login () {
			if (!(this.username) || (!this.password)) {
				this.$Message.warning("请输入账号和密码")
			} else {
				let load = this.$Message.loading({
					content: "登入中...",
					duration: 100
				})
				this.$axios({
					url: window.baseURL.replace("api/v1/", '') + "postAdminLogin",
					method:"POST",
					data: {
						username: this.username,
						password: this.password,
					}
				}).then(res => {
					load()
					if (res.data.status == 200) {
						this.$router.push("/index")
						localStorage.setItem("jwt", res.data.token)
						localStorage.setItem("name", res.data.detail.name)
						localStorage.setItem("role", res.data.detail.role)
						this.$store.commit("setState", {
							key: "role",
							value: res.data.detail.role
						})
					} else {
						this.$Message.warning(res.data.message)
					}
				}).catch(e => {
					console.log(e,e.response)
					load()
					this.$Message.error("账号或密码错误")
				})
			}
			
		}
	}
}
</script>

