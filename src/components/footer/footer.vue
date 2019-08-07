<template>
  <div class="footer">
<div>
<router-link to="/"><span class="iconfont icon-zhuye" exact></span>
<br> 
主页
</router-link>
</div>
<div>

<router-link to="active"><span class="iconfont icon-huodong" exact></span>
<br>活动</router-link>
</div>
<div>

<router-link to="deal"><span class="iconfont icon-jiaoyi" exact></span>
<br>交易</router-link>
</div>
<div>

<router-link to="manage"><span class="iconfont icon-admin" exact></span>
<br>管理</router-link>
</div>
  </div>
</template>

<script>
export default {
  name: "HomeFooter",
  data(){
    return {
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/base/px2rem.scss";
.footer {
  height: pm(100);
  background-color: #12191c;
  text-align: center;
  color: #fff;
  // position: absolute;
  // bottom: 0;
  // left: 0;
  // right: 0;
  display: flex;
  div {
    flex: 1;
    .iconfont {
      font-size: pm(40);
    }
    // flex-flow: column;
    line-height: pm(47);
    text-align: center;
    font-size: pm(30);
    a {
      color: #939495;
      display: block;
    }
    .router-link-exact-active{
      color: #d82b30;
    }
  }
}
</style>