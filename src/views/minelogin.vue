<template>
<div class="app-content">
  <div class="mine pages">
      <div class="header">
      	<img src="../../public/img/mine1.jpg" class="set" @click="goSet()">
        <img src="img/headPic.jpg" alt="">
        <div class="msg">
          <p class="name">
          	<span>喵喵</span></br>
          	<span @click="goPerson()">编辑并查看个人信息</span>
          </p>
        </div>
      </div>
      <div class="main">
        <ul class="list">
          <li class="b-bottom" @click="goMessage()">
              <img src="../../public/img/mine2.jpg" alt="">
              我的消息
          </li>
          <li class="b-bottom" @click="goWallet()">
              <img src="../../public/img/mine3.jpg" alt="">
              我的钱包
          </li>
          <li class="b-bottom">
              <img src="../../public/img/mine4.jpg" alt="">
              发布的房源
          </li>
          <li @click="goAbout()">
              <img src="../../public/img/mine5.jpg" alt="">
              关于猫宿
              <span style="float: right;color:#cdcdcd;">猫宿v2.9</span>
          </li>
        </ul>
        <div class="landlord"  @click="goLandlordPage()">
      		我也要成为房东
      	</div>
      </div>
     

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
		goMessage(){
			console.log("点击了")
			//跳转到我的消息页面
			this.$router.push({name:'message'});
		},
		goSet(){
			console.log("点击了")
			//跳转到我的设置页面
			this.$router.push({name:'set'});
		},
		goWallet(){
			console.log("点击了")
			//跳转到我的钱包页面
			this.$router.push({name:'wallet'});
		},
		goLandlordPage(){
			console.log("点击了")
			//跳转到我想成为房东页面
			this.$router.push({name:'landlordPage'});
		},
		goAbout(){
			console.log("点击了")
			//跳转到关于猫宿
			this.$router.push({name:'about'});
		},
		goPerson(){
			console.log("点击了")
			//跳转到个人信息
			this.$router.push({name:'person'});
		}
	}
	
  }
</script>
<style scoped>
.mine .header{
  width:100%;
  height: 1.95rem;
  background: linear-gradient(right,#F9824D, #E5B144);
}
.header .set{
	width:0.15rem;
	height:0.15rem;
	position: absolute;
	top:0.28rem;
	right:0.32rem;
	
}
.header img{
  width:0.78rem;
  height: 0.78rem;
  border-radius:0.38rem;
}
.header{
	position: relative;
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
  color:#fdf4ea;
}
.name span:nth-child(3){
	color:#fdf4ea;
	font-size: 0.12rem;
}
.main{
	position: relative;
}
.list{
  background:#fff;
}
.list li{
  height: 0.45rem;
  margin:0 0.14rem;
  line-height: 0.45rem;
  font-size: 0.14rem;
  color:#373737;
}
.list img{
  vertical-align: middle;
  margin-right:0.1rem;
  width:0.19rem;
  height:0.19rem;
}
.b-bottom{
  border-bottom: 1px solid #e6e6e6;
}
.landlord{
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 0.14rem;
	width: 3.45rem;
	height: .5rem;
	margin: 0 .15rem;
	border: 0;
	border-radius: 8px;
	background: linear-gradient(to right,#e5af44,#fc7f4e);
	color: #fff;
	position: absolute;
	bottom:0.3rem;
	left:0.15rem;
	left: 0;
	bottom: -1.95rem;
	outline: none;
}
</style>