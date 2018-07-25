<template>
	<div class="bankcard page">
		<header class="header">
			<img src="../../../../../public/img/left.jpg" @click="withdraw()">
			<h1>添加银行卡</h1>
			<span @click="withdrawWallet()">完成</span>
		</header>
		<main class="main">
			<ul class="list">
				<li>
					银行卡号
					<input type="text" placeholder="请输入银行卡号">
				</li>
				<li>
					手机号
					<input type="text" placeholder="请输入手机号码">
				</li>
				<li>
					验证码
					<input type="text" placeholder="请填写验证码">
					<span>获取验证码</span>
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
				console.log("点击了")
				this.$router.push({name:'wallet'});
			},
			//点击完成后返回我的钱包页面
			withdrawWallet(){
				console.log("点击了")
				this.$router.push({name:'wallet'});
			}
		}
	}

</script>

<style scoped>
	.bankcard .header{
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
		height:1.35rem;
		background: #FFFFFF;
	}
	.list li{
		height: 0.45rem;
  		margin:0 0.14rem;
  		line-height: 0.45rem;
  		font-size: 0.14rem;
  		color:#373737;
  		border-bottom: 1px solid #e6e6e6;
	}
	.list li input{
		padding-left:0.12rem;
	}
	.list li:nth-of-type(1) input{
		padding-left:0;
	}
	::-webkit-input-placeholder{
		color:#cccccc;
		font-size: 0.12rem;
	}
	.list li:nth-of-type(3){
		border-bottom: 0;
	}
	.list li:nth-of-type(3) span{
		float:right;
		color:#f71919;
	}
</style>