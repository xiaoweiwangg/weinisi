<template>
  <div class="gonggao">
  <span class="iconfont icon-gonggao"></span> 公告:......
  <span class="more">查看更多 &gt;</span>
  </div>
</template>

<script>
export default {
  name: "MGonggao"
};
</script>

<style lang="scss" scoped>
@import "../../../assets/base/px2rem.scss";
.gonggao {
  height: pm(70);
  background-color: #fff;
  line-height: pm(70);
  font-size: pm(27);
  color: #000;
  .iconfont{
    color:#d20d12;
    font-size: pm(30);
    margin:0 pm(15);
  }
  .more{
    float: right;
    margin-right: pm(16);
    color: #585858;
  }
}
</style>