<template>
<div class="swiper-container" ref="wrap">
    <div class="swiper-wrapper">
        
        <slot></slot>

    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>




    

</template>

<script>
import './swiper.js'
import './swiper-3.4.2.min.css'
export default {
    name: 'swiper',

    mounted(){
        //创建滚动视图
        var mySwiper = new Swiper (this.$refs.wrap, {
            loop: true,
            
            // 如果需要分页器
            pagination: '.swiper-pagination'
        })
    }

}
</script>

<style>

</style>
