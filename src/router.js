import Vue from 'vue'
import Router from 'vue-router'
//css重置
import("./assets/base/reset.css")
//rem多终端适配
import("./assets/base/hotcss.js")

Vue.use(Router)
//路由配置文件
import HomeMain from "./components/main/main.vue"
import KjDet from "./components/player/gatssc/gatssc.vue"
import YF from "./components/player/plist/yf.vue"
export default new Router({
  routes: [
    {
      path: "/",
      component:HomeMain,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path:"/gatssc",
      component:KjDet,
      children:[{
        path:"yf",
        component:YF,
        meta: {
          keepAlive: true // 需要被缓存
        }
      }],
      meta: {
        keepAlive: true // 需要被缓存
      }
    }
  ],
})
