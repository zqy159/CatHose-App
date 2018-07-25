<template>
	<div class="about page">
		<header class="header">
			<img src="../../../../public/img/left.jpg" @click="withdraw()">
			<h1>关于猫宿</h1>
		</header>
		<main class="main">
			<img src="../../../../public/img/cat.jpg">
			<h2>猫宿</h2>
			<p>猫宿之美,美于灵魂</p>
			<span>最新版v2.9</span>
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
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.main img{
		margin-top:0.89rem;
		width:1.28rem;
		height:1.28rem;
	}
	.main h2{
		margin-top:0.34rem;
		font-size: 0.26rem;
		color:#060606;
	}
	.main p{
		margin-top:0.14rem;
		font-size: 0.14rem;
		color:#aeaeae;
	}
	.main span{
		margin-top:2.48rem;
		font-size: 0.12rem;
		color:#adadad;
	}
</style>