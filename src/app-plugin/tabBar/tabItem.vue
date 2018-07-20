<template>
    <li class="tabItem" @click="tabAction()" :class="{active:isActive}">
        <slot></slot>    
    </li>
</template>

<script>
export default{
    name:'tab-item',
    data(){
        return {
            isActive:false
        }
    },
    methods:{
        tabAction(){
            this.$parent.$children.forEach((item,i)=>{
                if(item.$el==this.$el){
                    item.isActive=true
                }
                else{
                    item.isActive=false
                }
            })
        }
    },
}
</script>


<style>
.tabItem{
    height: 100%;
    flex:1;
    list-style: none;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
}

</style>