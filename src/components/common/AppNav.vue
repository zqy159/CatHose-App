<template>
    <!-- 主界面的4个视窗点击按钮,一般情况不变因此采用固定值 -->
    <div class="app-nav">
        <router-link to="/">
            <img src="img/home.png" alt="">
            <img src="img/homes.png" alt="">
            首页
        </router-link>
        <router-link to="/collection">
            <img src="img/collect.png" alt="">
            <img src="img/collects.png" alt="">
            收藏
        </router-link>
        <router-link to="/order">
            <img src="img/order.png" alt="">
            <img src="img/orders.png" alt="">
            订单
        </router-link>
        <router-link to="/mine">
            <img src="img/mine.png" alt="">
            <img src="img/mines.png" alt="">
            我的
        </router-link>
    </div>
</template>

<script>
</script>

<style scoped>
.app-nav{
    display: flex;
    justify-content:space-around;
    align-items: center;
    color:#999;
}
.app-nav a{
    display: flex;
    flex-direction: column;
    flex:1;
    height: 100%;
    justify-content: center;
    align-items: center
}
.router-link-exact-active{
    color:#FE8D64
}
.app-nav img:nth-child(2){
    display: none
}
.app-nav .router-link-exact-active img:nth-child(1){
    display: none
}
.app-nav .router-link-exact-active img:nth-child(2){
    display: block
}
</style>