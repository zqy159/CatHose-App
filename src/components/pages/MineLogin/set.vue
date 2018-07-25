<template>
	<div class="set page">
		<header class="header">
			<img src="../../../../public/img/left.jpg" @click="withdraw()">
			<h1>设置</h1>
		</header>
		<main class="main">
			<ul class="list">
				<li>
					清理缓存
					<span>0.00M</span>
				</li>
				<li @click="goFeedback()">
					意见反馈
					<img src="../../../../public/img/right.jpg">
				</li>
				<div class="quit">退出登入</div>
			</ul>
		</main>
		<router-view></router-view>
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
			goFeedback(){
				console.log("点击了")
				this.$router.push({name:'feedback'});
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
	.list li span{
		color:#999999;
	}
	.list li img{
		width:0.08rem;
		height:0.15rem;
	}
	.quit{
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 0.14rem;
		height:0.36rem;
		width:1.59rem;
		background: linear-gradient(to right,#e5af44,#fc7f4e);
		border-radius: 8px;
		position: absolute;
		bottom:3.87rem;
		left:1.08rem;
		color:#FFFFFF;
	}
</style>