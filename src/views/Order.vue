<template>
<div class="app-content">
	<app-content class="Order pages">
	<h1 class="title" @click="goOrder()">订单页面</h1>
	</app-content>
	<!--装载子页面-->
   <router-view></router-view>
</div>
</template>

<script>
  export default{
  	//订单页面进入订单详情页面
	methods:{
		goOrder(){
			this.$router.push({name: 'orderList'});
		}
	}
  }
</script>

<style scoped>
.Order .header{
  width:100%;
  height: 2.11rem;
  background: linear-gradient(right, #E5B144 , #F9824D);
}
</style>
