<template>
<div class="app-content">
  <div class="mine pages">
      <div class="header">
        <img src="img/head.jpg" alt="">
        <div class="msg">
          <p class="name">
          	<span @click="goRegister()">注册</span>
          	<span>/</span>
          	<span @click="goLogin()">登录</span>
          </p>
          <p>编辑并查看个人信息</p>
        </div>
      </div>
      <div class="main">
        <ul class="list">
          <li class="b-bottom">
              <img src="img/order.png" alt="">
              我的消息
          </li>
          <li class="b-bottom">
              <img src="img/order.png" alt="">
              我的钱包
          </li>
          <li class="b-bottom">
              <img src="img/order.png" alt="">
              发布的房源
          </li>
          <li>
              <img src="img/order.png" alt="">
              关于猫宿
              <span style="float: right">猫宿v2.9</span>
          </li>
        </ul>
      </div>
      <button class="btn">我也要成为房东</button>

    </div>

  <!--装载子页面-->
   <router-view></router-view>
</div>
</template>

<script>
  export default{
	data(){
		return{
			
		}
	},
	methods:{
		goRegister(){
			console.log('点击了')
			//跳转到注册页面
			this.$router.push({name: 'register'});
		},
		goLogin(){
			console.log('点击了')
			//跳转到登录页面
			this.$router.push({name: 'login'});
		}
	}
	
  }
</script>
<style scoped>
.mine .header{
  width:100%;
  height: 2.11rem;
  background: linear-gradient(right,#F9824D, #E5B144);
}
.header img{
  width:0.78rem;
  height: 0.78rem;
  border-radius:0.38rem;
}
.header{
  display: flex;
  padding:0.4rem 0.15rem;
  box-sizing: border-box;
}
.msg{
  color:#fff;
  height: 0.78rem;
  margin:0.2rem;
  line-height: 0.2rem;
  font-size: 0.12rem;
}
.name{
  font-size: 0.14rem;
}
.name span:nth-child(2){
	padding: 0 .05rem;
}
.list{
  background:#fff;
}
.list li{
  height: 0.45rem;
  margin:0 0.14rem;
  line-height: 0.45rem;
}
.list img{
  vertical-align: middle;
  margin-right:0.1rem;
}
.b-bottom{
  border-bottom: 1px solid #e6e6e6;
}
.btn{
	width: 3.45rem;
	height: .5rem;
	margin: 0 .15rem;
	border: 0;
	border-radius: 8px;
	background: linear-gradient(right,#F9824D, #E5B144);
	color: #fff;
	position: absolute;
	left: 0;
	bottom: -1.95rem;
	outline: none;
}
</style>