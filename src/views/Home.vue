<template>
  <div class="index">
    <div id="captureId" class="capture" v-show="firstFlag">
      <!-- <ul>
        <li>itemi</li>
        <li>itemi</li>
        <li>itemi</li>
        <li>itemi</li>
        <li>itemi</li>
        <li>itemi</li>
        <li>itemi</li>
      </ul> -->
      <div id="qrcode" class="qrcode"></div>
      <h2>helloworld</h2>
    </div>
    <img :src="dataURL" alt="" v-show="!firstFlag" >
  </div>
</template>
<script>
import { qrcanvas } from 'qrcanvas';
import html2canvas from 'html2canvas';
export default {
  data() {
    return {
      dataURL: '',
      firstFlag: true,
    };
  },
  created() {
    this.$nextTick(function () {
      //生成二维码
      var canvas1 = qrcanvas({
        data: decodeURIComponent('1'),
        size: 50
      });
      document.getElementById("qrcode").innerHTML = '';
      document.getElementById('qrcode').appendChild(canvas1);

    })
  },
  mounted() {
    html2canvas(document.querySelector('#captureId')).then(canvas => {
    //   let imgUrl = canvas.toDataURL('image/png');
         var imgUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); // 获取生成的图片的url 
         console.log(imgUrl)
    //   this.dataURL = imgUrl;
      this.firstFlag = false;
    })
  },
  methods: {

  }
}
</script>
<style lang='less' scoped>
</style>