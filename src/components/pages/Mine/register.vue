<template>
<transition name="slide">
<div class="register page">
	<div class="img">
		<img src="img/pic02.jpg"/>
	</div>
	<p class="city">200多个城市的华人房东<br/><span>欢迎您的到来</span></p>
	<div class="form">
		<input type="number" placeholder="请输入手机号码" />
		<input type="number" placeholder="短信验证码" />
		<span>获取验证码</span>
		<button class="btn">立即注册</button>
	</div>
</div>
</transition>
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




@keyframes slideIn {
    0%{transform: translateX(100%);}
    100%{transform: translateX(0%);}
}
@keyframes slideOut {
    0%{transform: translateX(0%);}
    100%{transform: translateX(100%);}
}
.slide-enter-active{
    animation: slideIn 200ms;
}
.slide-leave-active{
    animation: slideOut 200ms;
}	
</style>