<template>
  <div class="yf">
    <p class="js">
    从万位、千位、百位、十位、个位任意位置上至少选择1个号码，选号与相同位置上的开奖号码一致。奖金 <span>19.6元</span>
    </p>
    <div v-for="(item,index) in this.$store.state.lottor" :key="index" :class="item.class">
    <button class="btn">{{item.name}}</button>
      <ul>
        <button ref="btn" :class="{dis}" v-for="(i,d) in item.list" :key="d" @click="add(index,i)">{{i}}</button>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "YF",
  data() {
    return {
      dis: false,
    };
  },
  mounted(){
    console.log(this.$store.state.shopcar)
    this.$store.state.shopcar.map((x,i)=>{
      console.log(x,i)
      x.map(t=>{
      this.$refs.btn[(i*10+t)].className="dis"
      })
    })
  },
  methods: {
    add(index, x) {
      this.$refs.btn[(index*10)+(x)].disabled=!this.dis
      this.$refs.btn[(index*10)+(x)].className="dis"
      let l = [];
      let num = 0;
      this.$store.state.shopcar[index].push(x);

      this.$store.state.shopcar.map(x => {
        x.sort((a,b)=>a-b)
        return l.push(x.join(""));
      });
      this.$store.state.shopcar.map(x => {
        return (num += x.length);
      });
      this.$store.state.num = num;
      this.$store.state.shopdet = l.join("-");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/base/px2rem.scss";
.yf {
  .dis{
    background-color: red;
    color:#fff;
  }
  flex: 1;
  overflow: auto;
  font-size: pm(50);
  background-color: #f4efe1;
  .js {
    font-size: pm(36);
    margin: pm(30) pm(17);
    line-height: pm(50);
  }
  div {
    display: flex;
    border-bottom: 2px solid gray;
    justify-content: space-around;
    margin: pm(20) 0;
    .btn{
      background-color: #ece9d6;
      color: #c8c2aa;
      border-radius: 9px;
      margin: 0 pm(30);
    }
  }
  ul {
    display: flex;
    flex-flow: wrap;
    button {
      display: block;
      width: pm(60);
      height: pm(60);
      margin: 0 pm(30);
      border: 3px solid #ccc;
      border-radius: 50%;
      text-align: center;
      line-height: pm(35);
      background-color: #fff;
    }
  }
}
</style>