import Vue from 'vue'
import App from '@/App.vue'

//引用路由
import router from '@/router'

//引用store定义全局状态(需要在统一地方修改)
import store from '@/store'

// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

//利用Vue空间进行非组件传值
Vue.prototype.$center=new Vue();


/*封装公共组件作用全局(都是一些 基本方法如果需要特殊放法可以加上去)
如果希望内置的属性不同可以单独设置一些方法的属性*/

// IScroll组件
import AppContent from '@/components/common/AppContent.vue'
Vue.component('app-content', AppContent);

//下拉刷新
import AppUpbreak from '@/components/common/AppUpbreak.vue'
Vue.component('app-break', AppUpbreak);

//Swiper组件
import AppSwiper from '@/components/common/AppSwiper.vue'
Vue.component('app-swiper', AppSwiper);

// 引用过滤器
import './filter'

// 创建Vue实例渲染到dom上
new Vue({
  el:"#app",
  router,
  store,
  render: h => h(App)
})
