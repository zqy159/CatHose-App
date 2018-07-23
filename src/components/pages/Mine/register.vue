<template>
<div class="register page">
	<div class="img">
		<img src="img/pic02.jpg"/>
	</div>
	<div class="form">
		<input type="number" placeholder="请输入手机号码" />
		<input type="number" placeholder="短信验证码" />
		<span>获取验证码</span>
		<button class="btn">立即注册</button>
	</div>
</div>
</template>


<script>
	
</script>


<style scoped>
.register .img img{
	display: block;
	width: 100%;
	opacity: 0.65;
	background: #212020;
}
.form input{
	width: 3.45rem;
	margin: 0 .15rem;
	border:0;
	border-bottom: 1px solid #eeeeee;
	height: .45rem;
	font-size: .15rem;
	color: #333333;
}
.form {
	position: relative;
}
.form span{
	position: absolute;
	right: .15rem;
	top: .64rem;
	color: #FA1212;
}
.form .btn{
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
</style>