<template>
<div class="app-content">
	<div class="home pages">
	    <h1 ref='p'>This is an home page</h1>
    </div>
	<!--装载子页面-->
   <router-view></router-view>
</div>
</template>

<script>
import Vuex from 'vuex';
export default {
    data(){
        return {

        }
    }
}
</script>

<style scoped>

</style>
