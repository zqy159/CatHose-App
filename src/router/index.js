import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Collection from '@/views/Collection.vue'
import Order from '@/views/Order.vue'
import Mine from '@/views/Mine.vue'
import Register from '@/components/pages/Mine/register.vue'
import Login from '@/components/pages/Mine/login.vue'
import Forget from '@/components/pages/Mine/forget.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      alias:'/',
      name: 'home',
      component: Home,
      // children:[
      //   {
      //     path:,
      //     component:
      //   }
      // ]
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
      component: Mine,
      children:[
        {
          path:'register',
          name:'register',
          component:Register
        },
        {
          path:'login',
          name:'login',
          alias: 'login/:flag',
          component:Login
        },
        {
          path:'forget',
          name:'forget',
          component:Forget
        }
      ]
    }
  ]
})
