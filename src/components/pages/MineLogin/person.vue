<template>
	<div class="person page">
		<header class="header">
			<img src="../../../../public/img/left.jpg" @click="withdraw()">
			<h1>个人信息</h1>
			<span @click="widthdrawMineLogin()">完成</span>
		</header>
		<main class="main">
			<ul class="list">
				<li>
					头像
					<p>
						<img src="img/headPic.jpg">
						<img src="../../../../public/img/right.jpg">
					</p>
					
				</li>
				<li>
					名字
					<span>xxx</span>
				</li>
				<li>
					手机
					<span>输入手机号码</span>
				</li>
				<li>
					邮箱地址
					<span>输入邮箱</span>
				</li>
				<li>
					所在城市
					<span>输入城市</span>
				</li>
			</ul>
		</main>
	</div>
</template>

<script>
	export default{
		methods:{
			//跳转到我的页面
			withdraw(){
				this.$router.push({name:"mineLogin"})
			},
			//点击完成跳转到我的页面
			widthdrawMineLogin(){
				this.$router.push({name:"mineLogin"})
			}
		}
	}
</script>

<style scoped>
	.person .header{
		height:0.47rem;
		width:100%;
		background: linear-gradient(to right,#e5af44,#fc7f4e);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.header img{
		padding-left:0.17rem;
		width:0.1rem;
		height:0.19rem;
	}
	.header h1{
		font-size: 0.16rem;
		color:#fefdfc;
	}
	.header span{
		padding-right:0.17rem;
		font-size: 0.12rem;
		color:#fefcfc;
	}
	.main{
		height:100%;
		background: #F5F5F5;
	}
	.list{
		height:2.27rem;
		background: white;
	}
	.list li{
		height: 0.45rem;
  		margin:0 0.15rem;
  		display: flex;
  		align-items:center;
  		justify-content: space-between;
  		color:#373737;
  		font-size: 0.14rem;
  		border-bottom:1px solid #f1f1f1;
	}
	.list>li>span{
		font-size: 0.12rem;
		color:#cccccc;
	}
	.list li p img:nth-of-type(2){
		width:0.08rem;
		height:0.15rem;
	}
	.list li p img:nth-of-type(1){
		width:0.22rem;
		height:0.22rem;
		border-radius: 0.38rem;
		margin-right:0.05rem;
	}
	.list li:nth-of-type(5){
		border-bottom:0;
	}
</style>