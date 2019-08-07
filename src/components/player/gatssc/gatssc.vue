<template>
  <div class="gatsscwrap">
    <g-header></g-header>
    <kj-det></kj-det>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    <div class="shopcardet" v-show="this.$store.state.num>0">
      <div class="sd">
       {{this.$store.state.shopdet}}
      </div>
      <div class="daler">
      <button v-for="(item,index) in mlist" :key="index" @click="chmodel(index)">{{item}}</button>
      
      </div>
    </div>
    <div class="shopcar">
      <div class="shopdet">
       共<span class="count">{{this.$store.state.num}}</span>注,
         <span>{{this.$store.state.num*2*model}}</span>元
      </div>
      <div class="clear" @click="clear()">
      清空
      </div>
      <div class="buy">
      下注
      </div>
    </div>
  </div>
</template>

<script>
import KjDet from "./kjdet";
import GHeader from "./gsheader";
export default {
  data(){
    return{
      model:1,
      mlist:["元","角","分"]
    }
  },
  name: "GatSsc",
  components: {
    KjDet,
    GHeader
  }
  ,methods:{
    clear(){
      this.$store.state.num=0
    },
    chmodel(x){
      console.log(x)
      switch(x){
        case 0:
        this.model=1;
        break;
        case 1:
        this.model=.1;
        break;
        case 2:
        this.model=.01;
        break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/base/px2rem.scss";
.gatsscwrap {
  .shopcardet{
    display: flex;
    .sd{
      font-size: pm(50);
      height: pm(105);
      line-height: pm(105);
      overflow: auto;
      flex: 1;
    }
    .daler{
      width:pm(300);
      button{
        width: 33.3333%;
        height: pm(105);
        font-size: pm(50);
        border: 1px solid #000;
      }
    }
  }
  .shopcar{
    height: pm(100);
    background-color: #e74449;
    display: flex;
    .shopdet {
      flex: 1;
      line-height: pm(100);
      font-size: pm(50);
      color: #fff;
    }
   
    .buy ,.clear{
      background-color: #484949;
      width: pm(150);
      line-height: pm(100);
      font-size: pm(50);
      color: #fff;
      text-align: center;
    }
     .clear{
       background-color: gold;
       color:rgb(10, 10, 10);
      width: pm(100);
    }
  }
  flex: 1;
  display: flex;
  flex-flow: column;
}
</style>