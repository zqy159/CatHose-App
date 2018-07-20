<template>
    <div ref="content">
        <!-- 滚动视图 -->
        <div class="wrap">
            <!-- 下拉刷新 -->
            <div class="refresh" >
                <strong ref="refreshImg" class="refreshImg">↓</strong>
                <span ref="refreshText">下拉可以刷新...</span>
            </div>
            <!-- 显示视图 -->
            <slot></slot>

            <!-- 上拉加载更多 -->
            <div class="refresh">
                <strong ref="imgUp">↑</strong>
                <span ref="textUp">加载更多...</span>
            </div>
        </div>
    </div>
</template>


<script>
import "./iscroll-probe.js"
export default {
    name:'app-break',
    methods: {
        //此处可以为IScroll添加方法
    },
    mounted() {
        this.Scroll = new IScroll(this.$refs.content, {
            // 滚动条配置
            mouseWheel: true,
            scrollbars: true,
            fadeScrollbars: true,

            // 高频率监听滚动
            probeType: 3
        })
        // 滚动开始前更新数据
        this.Scroll.on('beforeScrollStart', () => {
            this.Scroll.refresh();
        });

    // 下拉刷新
    let refreshText = this.$refs.refreshText
    let refreshImg = this.$refs.refreshImg
        // 刚进入页面显示的位置
        this.Scroll.scrollTo(0, -40, 0);
        this.Scroll.on('scrollEnd', function () {
            // 获取滚动停止后的位置
            let y = this.y
            if (y > -40 && y < 0) {
                this.scrollTo(0, -40, 300);
            } else if (y == 0) {
                refreshText.innerText = '正在刷新...';
                refreshImg.innerHTML = "<img src=img/loading.gif>";
                //请求新的数据
                setTimeout(()=>{
                    //请求成功，还是请求失败，关闭刷新
                    this.scrollTo(0, -40, 300);
                }, 1700);
                setTimeout(() => {
                    //请求成功，还是请求失败，关闭刷新
                    refreshText.innerText = '下拉可以刷新...';
                    refreshImg.innerText = '↓';
                }, 2000);
            }
        })
        this.Scroll.on('scroll', function () {
            //获得正在滚动的位置
            var y = this.y;
            if (y > -40 && y < 0) {
                refreshText.innerText = '下拉可以刷新...';
                refreshImg.innerText = '↓';
            }
            else if (y >= 0) {
                refreshText.innerText = '释放立即刷新...';
                refreshImg.innerText = '↑';
            }
        })
    // 上拉加载更多
        // 下拉加载更多
        var textUp = this.$refs.textUp
        var imgUp= this.$refs.imgUp
        this.Scroll.on('scrollEnd', function(){
            //获得滚动停止后的位置
            var y = this.y;
            var mStart=this.maxScrollY+40
            var mEnd=this.maxScrollY
            if( y<mStart && y>  mEnd ){
                this.scrollTo(0, mStart, 300);
            }
            else if(y==  mEnd ){
                textUp.innerText = '正在加载...';
                imgUp.innerHTML = "<img src=img/loading.gif>";
                //请求新的数据
                setTimeout(()=>{
                    //请求成功，还是请求失败，关闭刷新
                    this.scrollTo(0,   mStart , 300);
                }, 1700);
                setTimeout(()=>{
                    //需要添加的内容
                    // str+=""
                    // box.innerHTML=str
                    //更新内容
                    this.refresh()
                }, 2000);

            }
        })
        this.Scroll.on('scroll', function(){
            //获得正在滚动的位置
            var y = this.y;
            var mStart=this.maxScrollY+40
            var mEnd=this.maxScrollY
            if( y>mEnd && y<mStart ){
                textUp.innerText = '上拉可以加载更多...';
                imgUp.innerText = '↑';
            }
            else if(y<=mEnd){
                textUp.innerText = '释放立即加载...';
                imgUp.innerText = '↓';
            }
        })

    }

}
</script>
<style>
.refresh{
    height: 0.4rem;
    font-size: 0.28rem;
    text-align: center;
    line-height: 0.4rem;
}
.refresh img{
    vertical-align: middle;
    width:0.3rem;
}
</style>