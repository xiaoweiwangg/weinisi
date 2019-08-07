<template>
  <div class="playcont">
      <div class="gatssc">
          <router-link to="gatssc/yf">
          <span>
          <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xjssc"></use>
          </svg>
          </span>
          <span class="playname">港澳时时彩</span>
          <span class="detail">5分钟1期</span>
          </router-link>
      </div>
      <div class="gatssc">
          <router-link to="gacssc">
          <span>
          <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xjssc"></use>
          </svg>
          </span>
          <span class="playname">港澳时时彩</span>
          <span class="detail">5分钟1期</span>
          </router-link>
      </div>
      <div class="gatssc">
          <router-link to="gacssc">
          <span>
          <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xjssc"></use>
          </svg>
          </span>
          <span class="playname">港澳时时彩</span>
          <span class="detail">5分钟1期</span>
          </router-link>
      </div>
      <div class="gatssc">
          <router-link to="gacssc">
          <span>
          <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xjssc"></use>
          </svg>
          </span>
          <span class="playname">港澳时时彩</span>
          <span class="detail">5分钟1期</span>
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: "MPlay"
};
</script>

<style lang="scss" scoped>
@import "../../../assets/base/px2rem.scss";
.playcont {
  display: flex;
  flex-flow: wrap;
  .gatssc{
    border-bottom: 1px solid gray;
  }
  a{
    display: flex;
    flex-flow: column;
    height: pm(220);
    width:pm(250);
    background-color: #fff;
    text-align: center;
    justify-content: space-around;
    .icon{
      font-size: pm(100);
    }
    .playname{
      font-size: pm(30);
      color:#232323;
    }
    .detail{
      font-size: pm(25);
      color: #818181;
    }
  }
}
</style>