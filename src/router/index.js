import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Collection from '@/views/Collection.vue'
import Order from '@/views/Order.vue'
import Mine from '@/views/Mine.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      alias:'/',
      name: 'home',
      component: Home
    },
    {
      path: '/collection',
      name: 'collection',
      component: Collection
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    }
  ]
})
