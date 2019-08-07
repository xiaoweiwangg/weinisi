import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lottor:[
      {name:"万位",class:"wan",list:[0,1,2,3,4,5,6,7,8,9]},
      {name:"千位",class:"qian",list:[0,1,2,3,4,5,6,7,8,9]},
      {name:"百位",class:"bai",list:[0,1,2,3,4,5,6,7,8,9]},
      {name:"十位",class:"shi",list:[0,1,2,3,4,5,6,7,8,9]},
      {name:"个位",class:"ge",list:[0,1,2,3,4,5,6,7,8,9]},
    ],
    shopcar:[[],[],[],[],[]],
    shopdet:"",
    num:0,//注数
    model:1,
  },
  mutations: {

  },
  actions: {

  }
})
