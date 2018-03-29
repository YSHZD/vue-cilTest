<template>
  <section class="chose" v-if="view">
    <div class="chose-view">
      <h1 class="chose-view-title">
        {{view.title}}<br>
        <span>（已选{{colText}}--{{sizeText}}）</span>
      </h1>
      <span>{{view.price}}元</span>
      <p class="chose-view-intro">{{view.dec}}</p>
    </div>
    <div class="chose-mychosed" ontouchstart="">
      <div class="colChose">
        <span v-for="(k,i) in view.chose" :class="{active:colSelected==i}" @click="colChose(i)" :key="i">{{k.col}}</span>
      </div>
      <div class="sizeChose">
        <span v-for="(k,i) in view.chose" :class="{active:sizeSelected==i}" @click="sizeChose(i)" :key="i">
          {{k.size}}
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
// import Vue from 'vue'
// Vue.use(mapState)
export default {
  computed: mapState({
    view: state => state.detail.productDatas.view,
    colSelected: state => state.detail.colSelected,
    sizeSelected: state => state.detail.sizeSelected,
    colText () {
      return this.view.chose[this.colSelected].col
    },
    sizeText () {
      return this.view.chose[this.sizeSelected].size
    }
  }),
  methods: {
    colChose (i) {
      this.$store.commit('CHANGE_COL_SELECTED', i)
    },
    sizeChose (i) {
      this.$store.dispatch('setSize', i)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/fz.less';
@import '../../assets/index/style.css';
.chose {
  padding: 3vw;
  .chose-view {
    >h1 {
      .fz(font-size, 36);
      color: #333;
      > span {
        color: rgb(0, 255, 0);
      }
    }
  }
  .chose-view-intro {
    color:#333;
    text-align: left;
  }
  .chose-mychosed {
    display: flex;
    background: #fff;
    > div {
      padding-top: 20px;
      display: flex;
      span {
        .fz(font-size, 26);
        padding: 6px 10px;
        margin:0 5px;
        border: 1px solid #ededed;
        color: pink;
        &.active,
        &:active {
          color: red;
          border-color: red;
          transform: scale(1.2);
        };
      }
    }
  }
}
</style>
