<template>
  <div class="index">
      <div id="captureId" class="capture"   v-show="firstFlag">
        <ul>
          <li>itemi</li>
          <li>itemi</li>
          <li>itemi</li>
          <li>itemi</li>
          <li>itemi</li>
          <li>itemi</li>
          <li>itemi</li>
        </ul>
        <h2>helloworld</h2>
      </div>
    <img :src="dataURL" alt="" v-show="!firstFlag" width="200px">
  </div>
</template>
<script>
import { qrcanvas } from 'qrcanvas';
    import html2canvas from 'html2canvas';
    export default {
        data () {
            return {
                dataURL:'',
                firstFlag:true,
            };
        },
      
        mounted(){
            html2canvas(document.querySelector('#captureId')).then(canvas => {
                let imgUrl = canvas.toDataURL('image/png');
                this.dataURL = imgUrl;
                this.firstFlag = false;
            })
        },
        methods: {

        }
    }
</script>
<style lang='less' scoped>
</style>