<template>
	<div class="bankcard page">
		<header class="header">
			<img src="../../../../../public/img/left.jpg" @click="withdraw()">
			<h1>添加银行卡</h1>
			<span>完成</span>
		</header>
	</div>
</template>

<script>
</script>

<style scoped>
	.bankcard .header{
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
		margin-left:1.25rem;
		color:#fefdfc;
	}
	.header span{
		padding-right:0.17rem;
		width:0.1rem;
		height:0.19rem;
	}
	.main{
		height:100%;
		background: #F5F5F5;
	}
</style>