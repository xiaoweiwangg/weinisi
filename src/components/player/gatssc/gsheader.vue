<template>
  <div class="gheader">
    <router-link to="/" class="a">&lt;</router-link>
    <div class="plist">
      <span>玩<br> 法</span>
      <div class="list" @click="plays()">
      {{pcur.name }}
      <b ref="b" :class="{ts}"></b>
      </div>
    </div>
    <transition name="ps">
      <div class="l" v-show="playshow" @click.self="plays()">
        <ul>
          <li v-for="(item,index) in pl" :key="index" @click="sle(index)" ref="ite">
          <router-link to="/gatssc/yf">
          {{item.name}}
          </router-link>
          </li>
        </ul>
          <div class="pd">
            <div v-for="(i,d) in pcur.pd" :key="d" ref="pd" @click="chang(d)">
            {{i}}
            </div>
          </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "GHeader",
  data() {
    return {
      playshow: false,
      pl: [
        { name: "一星", pd: ["复式"] },
        { name: "前二", pd: ["复式", "单式", "和值", "跨度"] },
        { name: "后二", pd: ["复式", "单式", "和值", "跨度"] },
        { name: "前三", pd: ["复式", "单式", "和值", "跨度"] },
        { name: "后三", pd: ["复式", "单式", "和值", "跨度"] },
        { name: "龙虎斗", pd: ["龙虎斗"] },
        { name: "五星", pd: ["复式", "单式"] },
        { name: "大小单双", pd: ["前二", "后二", "前三", "后三"] },
        { name: "和值", pd: ["和值"] }
      ],
      pcur: [],
      ts: true
    };
  },
  methods: {
    chang(x) {
      this.$refs.pd.forEach(e => {
        e.className = "";
        this.$refs.pd[x].className = "ppd";
      });
    },
    pc() {
      this.pcur = this.pl[0];
    },
    sle(x) {
      this.$refs.pd[0].className="ppd"
      this.$refs.ite.forEach(e => {
        e.className = "";
        this.$refs.ite[x].className = "act";
      });
      this.pcur = this.pl[x];
    },
    plays() {
      this.ts = !this.ts;
      this.playshow = !this.playshow;
    }
  },
  mounted() {
    this.pc();
    this.$refs.ite[0].className = "act";
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
@import "../../../assets/base/px2rem.scss";
.gheader {
  .ts {
    transform: rotate(180deg);
  }
  .act {
    background-color: #ccc;
  }

  display: flex;
  height: pm(120);
  background-color: #000;
  .ps-enter-active,
  .ps-leave-active {
    transition: all 0.4s;
  }
  .ps-enter,
  .ps-leave-to {
    opacity: 0;
    transform: translateY(pm(1050));
  }
  .a {
    font-size: pm(60);
    line-height: pm(120);
    color: #fff;
    margin-left: pm(20);
  }
  .plist {
    flex: 1;
    font-size: pm(35);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    b {
      transform-origin: pm(20) pm(30);
      display: block;
      width: 0;
      transition: 0.5s;
      height: 0;
      border: pm(20) solid;
      position: absolute;
      right: pm(15);
      top: pm(5);
      border-color: transparent transparent gold;
    }
    .list {
      padding-right: pm(50);
      position: relative;
      border: 3px solid #fff;
      height: pm(70);
      font-size: pm(35);
      min-width: pm(150);
      border-radius: 9px;
      margin-left: pm(8);
      line-height: pm(70);
      text-align: center;
    }
  }
  .l {
    position: absolute;
    top: pm(120);
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.4);
    min-height: pm(140);
    ul {
      display: flex;
      flex-flow: wrap;
      justify-content: space-around;
      background-color: #fff;
      li {
        font-size: pm(30);
        width: pm(150);
        height: pm(55);
        border-radius: 6px;
        text-align: center;
        line-height: pm(55);
        margin: 10px;
        border: 1px solid #ccc;
      }
    }
    .pd {
      min-height: pm(123);
      display: flex;
      justify-content: space-around;
      background-image: linear-gradient(to bottom, #f8f8f8, #fff, #f8f8f8);
      .ppd {
        background-color: goldenrod;
      }
      div {
        background-color: #ccc;
        // border:1px solid red;
        min-width: pm(150);
        font-size: pm(30);
        color: #fff;
        height: pm(50);
        line-height: pm(55);
        margin: 10px;
        text-align: center;
        border-radius: 6px;
      }
    }
  }
}
</style>