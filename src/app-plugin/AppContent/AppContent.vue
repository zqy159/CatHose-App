<template>
<div ref="content">
    <!-- 滚动视图 -->
    <div class="wrap">
        <slot></slot>
        
    </div>
</div>
</template>
    
    
<script>
import "./iscroll-probe.js"
export default {
    name:'app-content',
    methods:{
        //此处可以为IScroll添加方法
    },
    mounted(){
        this.Scroll=new IScroll(this.$refs.content,{
            // 滚动条配置
            mouseWheel:true,   
            scrollbars:true,
            fadeScrollbars: true,

            // 高频率监听滚动
            probeType: 3
        })
        // 滚动开始前更新数据
        this.Scroll.on('beforeScrollStart', ()=>{
            this.Scroll.refresh();
        });
        
    }
    
}
</script>
