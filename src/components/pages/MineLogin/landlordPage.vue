<template>
	<div class="landlordPage page">
		<header class="header">
			<img src="../../../../public/img/left.jpg" @click="withdraw()">
			<h1>我想成为房东</h1>
		</header>
		<main class="main">
			<p></p>
			<p></p>
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
	.landlordPage .header{
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
		margin-left:1.11rem;
		color:#fefdfc;
	}
	.main{
		height:100%;
		background: #FFFFFF;
	}
</style>