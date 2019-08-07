<template>
  <div class="main">
  <home-header></home-header>
    <div class="baner">
        <mt-swipe :auto="3000">
        <mt-swipe-item>
        <img src="https://images.imags-google.com//2ycptz/mobile/banner/banner1.png?240774" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
        <img src="https://images.imags-google.com//2ycptz/mobile/banner/banner2.png?646609" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
        <img src="https://images.imags-google.com//2ycptz/mobile/banner/banner4.png?550582" alt="">
        </mt-swipe-item>
        </mt-swipe>
    </div>
    <g-gonggao></g-gonggao>
    <m-tabs></m-tabs>
    <m-play></m-play>
  </div>
</template>

<script>
import GGonggao from "./cps/gonggao";
import MTabs from "./cps/tabs"
import MPlay from "./cps/playcont"
import HomeHeader from "../header/header"
export default {
  name: "HomeMain",
  components: {
    GGonggao,
    MTabs,
    MPlay,
    HomeHeader,
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/base/px2rem.scss";
.main {
  flex: 1;
  overflow: auto;

  .mint-swipe {
    height: pm(300);
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>