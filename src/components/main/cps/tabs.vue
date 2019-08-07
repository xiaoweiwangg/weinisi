<template>
  <div class="tabs">
    <div class="items"><span class="iconfont icon-liaotianshi"></span> 聊天室</div>
    <div class="items"><span class="iconfont icon-paixing"></span> 排行榜</div>
    <div class="items"><span class="iconfont icon-cheats"></span> 攻 略</div>
    <div class="items"><span class="iconfont icon-changlong"></span> 长 龙</div>
  </div>
</template>

<script>
  export default {
    name:"MTabs"
  }
</script>

<style lang="scss" scoped>
@import "../../../assets/base/px2rem.scss";
.tabs{
  display: flex;
  justify-content: space-around;
  height: pm(110);
  align-items: center;
  background-color: #edecf3;
  .items{
    width: pm(157);
    height: pm(80);
    background-color: #fff;
  text-align: center;
  line-height: pm(80);
  border-radius: 8px;
  font-size: pm(30);
  .iconfont{
  font-size: pm(30);
  }
  }
}
</style>