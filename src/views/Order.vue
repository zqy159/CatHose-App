
<!-- 分享图片生成 -->
<template>
  <div class="container">
    <div id="canvs" v-if='show'>
      <div id="qrcode" class="qrcode"></div>
      <div class="title">如梦令·昨夜雨疏风骤</div>
      <div>[宋] 李清照</div>
      <div>昨夜雨疏风骤，浓睡不消残酒，试问卷帘人，却道海棠依旧。</div>
      <div>知否，知否，应是绿肥红瘦。</div>
    </div>
    <img :src="imgUrl" alt="" v-else width="500"> 
    <div style="width: 400px;margin:50px auto;">
      <button class="button" type="button" value="button" @click="downloadForJS()">测试</button>
    </div>

  </div>
</template>
 
<script>
import { qrcanvas } from 'qrcanvas';
import html2canvas from 'html2canvas';
import { Indicator, Toast } from 'mint-ui';
import Gou from './gou.gif'
export default {
  data() {
    return {
      imgUrl: '',
      Gou,
      show:true,
    }
  },
  watch: {
    imgUrl(val, oldval) {
      //监听到imgUrl有变化以后 说明新图片已经生成 隐藏DOM
      // this.$refs.box.style.display = "none";
    }
  },
  created() {
    let that = this;
    that.$nextTick(function () {
      //生成二维码
      var canvas1 = qrcanvas({
        data: decodeURIComponent(that.$route.query.url),
        size: 128
      });
      document.getElementById("qrcode").innerHTML = '';
      document.getElementById('qrcode').appendChild(canvas1);
      this.downloadForJS()
    })
  },

  methods: {
    //base64转blob
    downloadForJS() {
      //使用html2canvas 转换html为canvas
      html2canvas(document.getElementById('canvs')).then((canvas)=> {
       this.imgUrl   = canvas.toDataURL("image/png"); // 获取生成的图片的url
        // console.log(imgUri) 　
        this.show=false
        // var saveLink = document.createElement('a');
        // saveLink.href = imgUri;
        // saveLink.download = 'downLoad.png';
        // saveLink.click();
      });
    },
    base64ToBlob(code) {
      let parts = code.split(';base64,');
      let contentType = parts[0].split(':')[1];
      let raw = window.atob(parts[1]);
      let rawLength = raw.length;

      let uInt8Array = new Uint8Array(rawLength);

      for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
      }
      return new Blob([uInt8Array], { type: contentType });
    },
  }
}

</script>
<style lang='scss' scoped>
.creat-img {
  img {
    z-index: 3;
  }
  .qrcode {
    position: absolute;
    // bottom: .15rem;
    left: 50%;
    margin-left: -64px;
    z-index: 5;
  }
}
</style>
