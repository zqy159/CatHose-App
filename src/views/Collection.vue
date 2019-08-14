<template>
  <div class="app-content">
    <app-content class="Collection pages">
      <h1>This is an Collection page
        <a :href="Gou" download='sss' @click='s=!s'>1点击下载</a>
        <span @click='s=!s'>cccc</span>
        <div v-if='s'>111</div>
        <div ref="target" id='target' class="qrcode">
          1
          <canvas width="85" height="85"></canvas>
        </div>
      </h1>
    </app-content>
    <!--装载子页面-->
    <router-view></router-view>
  </div>
</template>

<script>
import $ from 'jquery'
import Gou from './gou.gif'
import qrcode from 'qrcode'
export default {
  data() {
    return {
      Gou,
      s: false,
    }
  },
  created() {


  },
  mounted() {
    // console.log(this.$refs.target)

  }
}
</script>

