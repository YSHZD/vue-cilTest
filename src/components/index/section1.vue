<template lang="html">
  <section class="section1" v-if='section1'>
    <h1 class="section1-title">
    one
    <i class="icon-right"></i>
    </h1>
    <ul class="section1-list">
      <li v-for="k in section1.list" :key="k.id">
        <router-link :to="{name:''}">
          <img v-lazy="k.imgPath" alt="">
        </router-link>
      </li>
    </ul>
    <router-link :to="{ name: '详情页'}" class="section1-banner">
      <img v-lazy="section1.banner" v-if="section1.banner">
    </router-link>
  </section>
</template>

<script>
import { Lazyload } from 'mint-ui'
import Vue from 'vue'
Vue.use(Lazyload)
export default {
  props: ['section1']
}
</script>

<style lang="less" scoped>
  @import '../../assets/fz.less';
  @import '../../assets/index/style.css';
  .section1 {
    .section1-banner img {
      width:100%;
    }
    .pt();
    .section1-title {
      .bt();
      background-color: #fff;
      text-align: center;
      padding: 4vw 0;
      .fz(font-size, 40);
      color: #333;
      position: relative;

      i {
        position: absolute;
        right: 6vw;
        top:50%;
        .fz(font-size, 35);
        .fz(margin-top, -16);
        &::before {
          color: rgb(159, 159, 159);
        };
      }
    }
    .section1-list {
      display: flex;
      flex: wrap;
      -ms-flex-pack: distribute;
      padding:0 2vw 4vw 2vw;
      li {
        width: 50%;
        padding:1vw;
        box-sizing: border-box;
        a,
        img {
          width: 100%;
          display: block;
        }
      }
    }
    .section1-bannder {
      display: block;
      width: 100vw;
      img {
        width: 100%;
        height: 24vw;
      }
    }
  }
</style>
