<template>
  <div id="app">
    <transition>
    <router-view  v-if="$route.meta.keepAlive"></router-view>
    </transition>
    <home-footer></home-footer>
  </div>
</template>
<script>
import HomeFooter from "./components/footer/footer.vue"
export default {
  components:{
  HomeFooter
  }
}
</script>
<style lang="scss" scoped>
@import "./assets/base/px2rem.scss";
#app{
  display: flex;
  flex-flow: column;
  height: 100%;
  width: pm(750);
  margin:0 auto;
.v-enter,
.v-leave-to{
  opacity: 0;
  position: absolute;
  transform: translateX(pm(-750))
}
.v-enter-active,
.v-leave-active{
  transition: all .4s
}
}
</style>
