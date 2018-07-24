<template>
<div class="login page">
	<div class="img">
		<img src="img/pic02.jpg"/>
	</div>
	<p class="city">200多个城市的华人房东<br/><span>欢迎您的到来</span></p>
	<nav class="nav">
		<li class="nav-item" :class="{active: showFlag=='codelogin'}" @click="navAction('codelogin')">
			<span>验证码登录</span>
		</li>
		<li class="nav-item" :class="{active: showFlag=='passlogin'}" @click="navAction('passlogin')">
			<span>密码登录</span>
		</li>
	</nav>
	
	
	<!--验证码登录界面-->
	<ul v-show="showFlag == 'codelogin'">
		<li>
			<div class="form">
				<input type="number" placeholder="请输入手机号码" />
				<input type="number" placeholder="短信验证码" />
				<span class="code">获取验证码</span>
				<button class="btn">登录</button>
			</div>
			<div class="message">
				<p class="one">验证即登录，未注册用户会自动建立猫宿账号</p>
				<p class="two">其他登录方式</p>
				<p class="img">
					<img src="img/qq.jpg"/>
					<img src="img/wiexing.jpg"/>
					<img src="img/weibo.jpg"/>
				</p>
				<p class="shree">注册即视为同意<span>《猫宿服务条款》</span></p>
			</div>
		</li>
	</ul>
	<!--密码登录界面-->
	<ul v-show="showFlag == 'passlogin'">
		<li>
			<div class="form">
				<input type="text" placeholder="请输入手机号码 / QQ / 邮箱" />
				<input type="number" placeholder="请输入密码" />
				<button class="btn">登录</button>
				<p>
					<span @click="goRegister()">注册账号</span>
					<span @click="goForget()">忘记密码</span>
				</p>
			</div>
			<div class="message">
				<p class="one">验证即登录，未注册用户会自动建立猫宿账号</p>
				<p class="two">其他登录方式</p>
				<p class="img">
					<img src="img/qq.jpg"/>
					<img src="img/wiexing.jpg"/>
					<img src="img/weibo.jpg"/>
				</p>
				<p class="shree">注册即视为同意<span>《猫宿服务条款》</span></p>
			</div>
		</li>
	</ul>
</div>
</template>

<script>
	export default{
		data(){
			return{
				showFlag:this.flag || 'codelogin'
			}
		},
		methods:{
			navAction(flag){
				this.showFlag = flag;
			},
			
			//跳转到注册页面
			goRegister(){
				this.$router.push({name: 'register'});
			},
			//跳转到忘记密码页面
			goForget(){
				this.$router.push({name: 'forget'});
			}
		}
	}
</script>

<style scoped>
.login .img img{
	display: block;
	width: 100%;
	opacity: 0.65;
	background: #212020;
}
.city{
	position: absolute;
	left: 32%;
	top: 1.24rem;
	text-align: center;
	color: #fff;
}
.city span{
	font-size: .16rem;
	font-weight: bold;
}
.login .nav{
	position: absolute;
	left: 0;
	top: 2.14rem;
	width: 100%;
	display: flex;
	height: .44rem;
	opacity: 0.35;
	background: #212020;
}
.login .nav .nav-item{
	flex: 1;
	text-align: center;
	line-height: .44rem;
	font-size: .15rem;
	
}
.login .nav .nav-item.active{
	color: white;
}
ul li .form {
	position: relative;
}
ul li .form input{
	width: 3.45rem;
	margin: 0 .15rem;
	border:0;
	border-bottom: 1px solid #eeeeee;
	height: .45rem;
	font-size: .15rem;
	color: #333333;
}
ul li .form .code{
	position: absolute;
	right: .15rem;
	top: .64rem;
	color: #FA1212;
}
ul li .form .btn{
	width: 3.45rem;
	height: .5rem;
	margin: 0 .15rem;
	border: 0;
	border-radius: 8px;
	background: linear-gradient(right,#F9824D, #E5B144);
	color: #fff;
	position: absolute;
	left: 0;
	top: 1.28rem;
	outline: none;
}
ul li .form p{
	position: absolute;
	left: 0;
	top:1.82rem;
	width: 3.45rem;
	display: flex;
	justify-content: space-between;
	margin: 0 .15rem;
}
ul li .message{
	margin-top: 1.27rem;
	text-align: center;
}
ul li .message .two{
	margin-top: .3rem;
}
ul li .message .img{
	width: 100%;
	height: .35rem;
	display: flex;
	justify-content: space-between;
	padding: 0 1.11rem;
	box-sizing: border-box;
	margin-top: .2rem;
}
ul li .message .img img{
	width: .35rem;
}
ul li .message .shree{
	margin-top: .2rem;
}
ul li .message .shree span{
	color: #ffa716;
}
</style>