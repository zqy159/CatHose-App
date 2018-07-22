<template>
<div class="app-content">
    <app-content class="home pages">
        <h1 ref='p'>This is an home page</h1>
        
    </app-content>
    <router-view></router-view>
</div>
</template>

<script>
import {getData} from "../Servies/home-servies.js"
export default {
    data(){
        return {

        }
    },
    mounted(){
        getData().then((val)=>{
            console.log(val.data)
        })
        // getData().then((val)=>{
        //     console.log(val)
        // })
    }
}
</script>

<style scoped>

</style>
