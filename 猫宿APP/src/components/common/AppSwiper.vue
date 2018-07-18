<template>
<div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
        <slot></slot> 
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
</template>

<script>
export default{
    methods: {
        updateSwiper(){
            // 更新实例
            this.swiper.update();
            // 重新对需要循环的slide个数进行计算
            this.swiper.reLoop();
            // 刚开始从从0--1 不然从-1到1
            this.swiper.slideTo(1, 0);
            //重新开始自动切换
            this.swiper.startAutoplay();
        },
        
    },
    mounted(){
        this.swiper=new Swiper(this.$refs.swiper, {
            pagination: '.swiper-pagination',
            paginationClickable:true,
            // 自动滚动
            autoplay:true,
            //移动端点击滑动时解决不能滑动
            autoplayDisableOnInteraction : false,
            //循环滚动
            loop:true,
        })  
            
    }
}
</script>