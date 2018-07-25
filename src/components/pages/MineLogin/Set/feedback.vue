<template>
	<div class="feedback page">
		<header class="header">
			<img src="../../../../../public/img/left.jpg" @click="withdraw()">
			<h1>意见反馈</h1>
		</header>
		<main class="main"></main>
	</div>
</template>

<script>
	export default{
		methods:{
			//跳转到我的页面
			withdraw(){
				console.log("点击了")
				this.$router.push({name:'set'});
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
</style>