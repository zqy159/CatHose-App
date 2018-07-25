import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Collection from '@/views/Collection.vue'
import Order from '@/views/Order.vue'
import Mine from '@/views/Mine.vue'
import MineLogin from '@/views/minelogin.vue'
import Register from '@/components/pages/Mine/register.vue'
import Login from '@/components/pages/Mine/login.vue'
import Forget from '@/components/pages/Mine/forget.vue'
import Message from '@/components/pages/MineLogin/message.vue'
import Wallet from '@/components/pages/MineLogin/wallet.vue'
import Set from '@/components/pages/MineLogin/set.vue'
import Feedback from '@/components/pages/MineLogin/Set/feedback.vue'
import LandlordPage from '@/components/pages/MineLogin/landlordPage.vue'
import BankCard from '@/components/pages/MineLogin/Wallet/bankcard.vue'
import About from '@/components/pages/MineLogin/about.vue'
import Person from '@/components/pages/MineLogin/person.vue'

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
    },
    {
    	path:'/mineLogin',
    	name:'mineLogin',
    	component:MineLogin,
    	children:[
    	//个人信息
    		{
        	path:'person',
        	name:'person',
        	component:Person
        },
    	//我的消息
    		{
        	path:'message',
        	name:'message',
        	component:Message
        },
        //我的钱包
        {
        	path:'wallet',
        	name:'wallet',
        	component:Wallet,
        	children:[
        		{
        			path:'bankcard',
        			name:'bankcard',
        			component:BankCard
        		}
        	]
        },
        //关于猫宿
        {
        	path:'about',
        	name:'about',
        	component:About
        },
        //我的设置
        {
        	path:'set',
        	name:'set',
        	component:Set,
        	children:[
        	//意见反馈
        		{
        			path:'feedback',
        			name:'feedback',
        			component:Feedback
        		}
        	]
        },
        //我想成为房东
        {
        	path:'landlordPage',
        	name:'landlordPage',
        	component:LandlordPage
        }
    	]
    }
  ]
})
