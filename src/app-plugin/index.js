import swiper from './Swiper/swiper.vue'
import swiperItem from './Swiper/swiper-item.vue'
import appContent from "./AppContent/AppContent.vue"
import appbreak from "./Appbreak/Appbreak.vue"
import tabs from "./tabBar/tab.vue"
import tabItems from "./tabBar/tabItem.vue"

// 选项卡
export const tabBar=function(Vue){
    Vue.component(tabs.name, tabs);
    Vue.component(tabItems.name, tabItems);
}
//轮播
export const Swiper=function(Vue){
    Vue.component(swiper.name, swiper);
    Vue.component(swiperItem.name, swiperItem);
}
// IScroll组件
export const AppContent=function(Vue){
    Vue.component(appContent.name, appContent);
}
//下拉刷新
export const AppBreak=function(Vue){
    Vue.component(appbreak.name, appbreak);
}

// 全加载
export default function(Vue){
    AppContent(Vue)
    tabBar(Vue)
    AppBreak(Vue)
    Swiper(Vue)
    
}