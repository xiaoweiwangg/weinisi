<template>
  <div class="kjdet clf">
    <div class="kj item">
      <div class="data">
     <span class="dt">86002期</span>开奖
      </div>
      <div class="kjd">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
   </div>
   <div class="time item">
    <div class="jz">
    <span class="dt">86003期</span>投注截止
    </div>
    <div class="djs">
    <span class="h">00</span>:
    <span class="m">00</span>:
    <span class="script">00</span>
    </div>
   </div>
  </div>
</template>

<script>
  export default {
    name:"KjDet"
  }
</script>

<style lang="scss" scoped>
@import "../../../assets/base/px2rem.scss";
.kjdet{
  background-color: #ddd4b2;
  display: flex;
  height: pm(140);
  width: 100%;
    .data{
      text-align: center;
      font-size: pm(40);
      line-height: pm(50);
    }
  .kjd{
    ul{
      display: flex;
      justify-content: space-around;
      li{
        height: pm(60);
        width: pm(60);
        background-color: #ed4a4f;
        line-height: pm(60);
        text-align: center;
        font-size: pm(40);
        color: #fff;
        border-radius: 50%;
        font-weight: bold;
        box-shadow: 0px 10px 3px gray;
      }
    }
  }
  .item{
    // float: left;
    width: 50%;
  }
  .time{
    border-left: 1px solid gray;
    .jz{
      line-height: pm(50);
      font-size: pm(40);
      font-weight: 400;
      text-align: center;
      color: #343430;
    }
    .djs{
      font-size: pm(65);
      font-weight: 300;
      text-align: center;
    }
  }
}
</style>