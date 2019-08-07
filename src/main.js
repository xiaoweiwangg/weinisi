import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fast from "fastclick"
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import "./assets/iconfont/iconfont.css"
import "./assets/iconfont/iconfont"
Vue.use(Mint);

Vue.config.productionTip = false
fast.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
