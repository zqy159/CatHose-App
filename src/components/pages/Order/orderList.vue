<template>
<transition name="slide">
	<div class="order page">
		<div class="app-header">
			<span class="goback" @click="goorder()">返回</span>
			<h1 class="title">确认订单</h1>
			<span class="confirm"></span>
		</div>
		<app-content class="content">
			<div class="order-item">
				<div class="item01">
					<img src="img/head.jpg"/>
					<div class="right">
						<h4>青一舍ins风 地铁一号线 服务式公寓</h4>
						<p>1居/1床/宜住两人</p>
						<p>连住优惠 免押金 智能门锁</p>
					</div>
				</div>
				<div class="item02">
					<li class="time">
						<p class="p01"><span>入住时间</span><span>离开时间</span></p>
						<p class="p02"><span>07月02日(周一)</span><span>共1晚</span><span>07月03日(周二)</span></p>
					</li>
					<li class="num">
						<input type="number" placeholder="房间数量" />
						<input type="number" placeholder="入住人数" />
					</li>
				</div>
				<form>
					<input type="number" placeholder="手机号"/>
					<input type="text" placeholder="联系人"/>
				</form>
				<div class="item03">
					<h3>住宿意外险<span>(必填，免费赠送)</span></h3>
					<button class="btn">+添加</button>
				</div>
				<div class="item04">
					<p>开具发票<span>请线下向房东索取</span></p>
					<p>退款政策<span>06月17日12:00前免费取消</span></p>
				</div>
				<div class="item05">
					<input type="checkbox" />
					<p>我同意<span>《猫宿服务协议》 《房客规则》 《意外健康险保险告知书》</span>及房东规定的退订规则及入住要求</p>
				</div>
			</div>
		</app-content>
		<div class="bottom">
			<li>线上支付:￥<span>563</span></li>
			<li><button>提交订单</button></li>
		</div>
	</div>
</transition>
</template>
<script>
	export default{
		methods:{
			goorder(){
				this.$router.push({name: 'order'});
			}
		}
	}
</script>

<style scoped>
.app-header{
	background: linear-gradient(right,#F9824D, #E5B144);
}
.app-header .goback{
	width: .5rem;
    text-align: center;
    line-height: .44rem;
    font-size: .14rem;
    color: #fff;
}
.app-header .title{
    flex: 1;
    font-size: .16rem;
    color: #efefef;
    line-height: .44rem;
    font-weight: normal;
    text-align: center;
    color: #fff;
}
.app-header .confirm{
	width: .5rem;
    text-align: center;
    line-height: .44rem;
    font-size: .12rem;
    color: #fff;
}
.content{
	margin-bottom: .46rem;
}
.content .order-item .item01{
	width: 100%;
	height: .96rem;
	padding: .15rem 0 .15rem .15rem;
	box-sizing: border-box;
	background: #fff;
	display: flex;
}
.content .order-item .item01 img{
	width: .65rem;
	border-radius: .08rem;
}
.content .order-item .item01 .right{
	flex: 1;
	padding-left:.15rem ;
}
.content .order-item .item01 .right h4{
	font-size: .14rem;
	color: #000;
}
.content .order-item .item01 .right p{
	line-height: .24rem;
}
.content .order-item .item02{
	width: 100%;
	height: 1.76rem;
	background: #fff;
	margin-top: .15rem;
	padding: 0 .15rem;
	box-sizing: border-box;
}	
.content .order-item .item02 .time{
	height: .87rem;
	border-bottom: 1px solid #ccc;
}
.content .order-item .item02 li p{
	display: flex;
	justify-content: space-between;
}
.content .order-item .item02 li .p01{
	padding-top: .2rem;
}
.content .order-item .item02 li .p02{
	line-height: .54rem;
}
.content .order-item .item02 li .p02 span{
	font-size: .14rem;
	color: #ff9169;
}
.content .order-item .item02 li .p02 span:nth-child(2){
	color: #666666;
}
.content .order-item .item02 .num input{
	width: 100%;
	height: .41rem;
	border-bottom: 1px solid #ccc;
	color: #000;
}
.content .order-item .item02 .num input:nth-child(2){
	border-bottom: 0;
}
.content .order-item form{
	width: 100%;
	margin-top: .2rem;
	height: .9rem;
	background: #fff;
	padding: 0 .15rem;
	box-sizing: border-box;
}
.content .order-item form input{
	width: 100%;
	height: .42rem;
	border-bottom: 1px solid #ccc;
}
.content .order-item form input:nth-child(2){
	border-bottom: 0;
}
.content .order-item .item03{
	width: 100%;
	height: 1.09rem;
	background: #fff;
	margin-top: .2rem;
	padding: 0 .15rem;
	box-sizing: border-box;
}
.content .order-item .item03 h3{
	font-size: .14rem;
	color: #000;
	line-height: .54rem;
}
.content .order-item .item03 h3 span{
	font-size: .12rem;
	color: #999;
}
.content .order-item .item03 .btn{
	width: .73rem;
	height: .32rem;
	border:1px solid #fc7c4e;
	border-radius: .06rem;
	background: #fff;
	color: #fc7c4e;
	outline: none;
}
.content .order-item .item04 p{
	line-height: .5rem;
	background: #fff;
	margin-top: .2rem;
	font-size: .14rem;
	color: #000;
	padding: 0 .15rem;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
}
.content .order-item .item04 p span{
	font-size: .12rem;
	color: #ccc;
}
.content .order-item .item05{
	display: flex;
	padding: .2rem .15rem;
	box-sizing: border-box;
}
.content .order-item .item05 p span{
	color: #fd885e;
}
.bottom{
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: .46rem;
	background: #fff;
	display: flex;
}
.bottom li{
	flex: 1;
	line-height: .46rem;
	text-align: center;
	font-size: .14rem;
	color: #000;
}
.bottom li span{
	color: #fd885e;
}
.bottom li button{
	width: .99rem;
	height: .32rem;
	border: 0;
	background: linear-gradient(right,#F9824D, #E5B144);
	color: #fff;
	font-size: .14rem;
	outline: none;
	border-radius: .08rem;
}



@keyframes slideIn {
    0%{transform: translateX(100%);}
    100%{transform: translateX(0%);}
}
@keyframes slideOut {
    0%{transform: translateX(0%);}
    100%{transform: translateX(100%);}
}
.slide-enter-active{
    animation: slideIn 200ms;
}
.slide-leave-active{
    animation: slideOut 200ms;
}	
</style>