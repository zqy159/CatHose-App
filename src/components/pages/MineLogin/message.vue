<template>
	<div class="message page">
		<header class="header">
			<img src="../../../../public/img/left.jpg" @click="withdraw()">
			<h1>我的消息</h1>
		</header>
		<main class="main">
			<ul class="list">
				<li class="bottom-t">
					聊天消息
					<img src="../../../../public/img/right.jpg">
				</li>
				<li class="bottom-t">
					评论消息
					<img src="../../../../public/img/right.jpg">
				</li>
				<li>短信通知<p>新预订、确认、更改和其他</p></li>
			</ul>
		</main>
	</div>
</template>

<script>
	export default{
		methods:{
			//跳转到我的页面
			withdraw(){
				console.log("点击了")
				this.$router.push({name:'mineLogin'});
			}
		}
	}
</script>

<style scoped>
	.header{
		height:0.47rem;
		width:100%;
		background: linear-gradient(to right,#e5af44,#fc7f4e);
		display: flex;
		align-items: center;
	}
	.header img{
		padding-left:0.17rem;
		width:0.1rem;
		height:0.19rem;
	}
	.header h1{
		font-size: 0.16rem;
		margin-left:1.27rem;
		color:#fefdfc;
	}
	.main{
		height:100%;
		background: #f5f5f5;
	}
	.list{
		background: #ffffff;
	}
	.list li{
		height: 0.45rem;
  		margin:0 0.15rem;
  		display: flex;
  		align-items:center;
  		justify-content: space-between;
  		color:#373737;
  		font-size: 0.14rem;
	}
	.list>li:nth-of-type(3){
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.list>li:nth-of-type(3) p{
		margin:0.06rem;
		color:#d4d4d4;
		font-size: 0.12rem;
	}
	.bottom-t{
		border-bottom:1px solid #f1f1f1;
	}
	.list>li>img{
		width:0.08rem;
		height:0.15rem;
	}
</style>