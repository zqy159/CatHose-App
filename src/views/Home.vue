<template>
<div class="app-content">
    <app-content class="home pages">
        <h1 ref='p'>This is an home page</h1>
        
    </app-content>
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
