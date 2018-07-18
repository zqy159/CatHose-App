import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
  
}
const actions = {
  modifyname(context, params){
      //更改状态值
  },
  modifyage(){
    console.log('modifyage执行了');
  }
}
export default new Vuex.Store({
  state,
  actions
  // state: {

  // },
  // mutations: {

  // },
  // actions: {

  // }
})
