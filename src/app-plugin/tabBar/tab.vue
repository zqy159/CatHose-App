<template>
    <nav class="tab">
        <slot></slot>  
    </nav>
</template>

<script>
    export default{
        name:'tab'
    }
</script>

<style>
.tab{
    position:absolute;
    left: 0;
    bottom:0;
    background: #ccc;
    height: 0.49rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
}
</style>
