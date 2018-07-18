<template>
    <div id="app">
      <!-- App内容显示区域 -->
      <router-view/>
      <!-- 底部App导航 -->
      <app-nav></app-nav>
    </div>
</template>

<script>
import AppNav from "@/components/common/AppNav.vue"
export default{
    components:{
      AppNav
    }
}
</script>

<style lang="scss">

</style>
