<template>
<transition name="slide">
<div class="mine page">
	<div class="app-header">
		<span class="goback" @click="showgoAction()">返回</span>
		<h1 class="title">找回密码</h1>
		<span class="confirm">确定</span>
	</div>
	<div class="content">
		<input type="number" placeholder="请输入手机号码" />
		<input type="number" placeholder="短信验证码" />
		<input type="password" placeholder="新密码" />
	</div>
</div>
</transition>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			showgoAction(){
				console.log('点击了')
				this.$router.push({name: 'login'})
			}
		}
	}
</script>

<style scoped>
.app-header{
	background: linear-gradient(right,#F9824D, #E5B144);
}
.app-header .goback{
	width: .5rem;
    text-align: center;
    line-height: .44rem;
    font-size: .14rem;
    color: #fff;
}
.app-header .title{
    flex: 1;
    font-size: .16rem;
    color: #efefef;
    line-height: .44rem;
    font-weight: normal;
    text-align: center;
    color: #fff;
}
.app-header .confirm{
	width: .5rem;
    text-align: center;
    line-height: .44rem;
    font-size: .12rem;
    color: #fff;
}	
.content{
	background: #fff;
}
.content input{
	width: 3.45rem;
	margin: 0 .15rem;
	border:0;
	border-bottom: 1px solid #eeeeee;
	height: .45rem;
	font-size: .15rem;
	color:#000000;
}

/*忘记密码页面返回键的动画*/
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