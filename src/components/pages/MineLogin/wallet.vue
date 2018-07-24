<template>
	<div class="wallet page">
		<header class="header">
			<img src="../../../../public/img/left.jpg" @click="withdraw()">
			<h1>钱包</h1>
		</header>
		<main class="main">
			<div class="box">
				<span @click="bankCard()">+  银行卡</span>
				<span>¥  余额  0.00</span>
			</div>
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
			},
			//跳转到添加银行卡页面
			bankCard(){
				console.log("点击了")
				this.$router.push({name:'bankcard'});
			}
		}
	}
</script>

<style scoped>
	.wallet .header{
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
		background: #F5F5F5;
	}
	.box{
		background: #FFFFFF;
		height:0.47rem;
		display: flex;
		justify-content: space-around;
	}
	.box span{
		width:50%;
		height:100%;
		font-size: 0.14rem;
		color:#333333;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.box span:nth-of-type(1){
		border-right:1px solid #e6e6e6;
	}
</style>