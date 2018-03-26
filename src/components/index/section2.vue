<template lang="html">
  <section class="section2" v-if="section2">
    <div class="section2-list">
       <ul>
         <li v-for="k in section2.list" :key="k.id">
           <router-link :to="{name:''}">
             <img v-lazy="k.imgPath">
           </router-link>
           <h2 class="section2-list-title ac">
             {{k.title}}
           </h2>
           <p class="section2-list-dec">
             {{k.dec}}
           </p>
           <p class="section2-list-price">
              ￥{{k.price}}
           </p>
         </li>
       </ul>
    </div>
    <router-link class="section2-banner" :to="{name:''}">
      <img v-lazy="section2.banner">
    </router-link>
  </section>
</template>

<script>
import { Lazyload } from 'mint-ui'
import Vue from 'vue'
Vue.use(Lazyload)
export default {
  props: ['section2']
}
</script>

<style lang="less" scoped>
  @import '../../assets/fz.less';
  @import '../../assets/index/style.css';
  .section2-banner img {
    width: 100%;
  }
  .section2-list {
    overflow-x: auto;
    width: 100%;
    .pt();
    -webkit-overflow-scrolling: touch;
    >ul {
      .bt();
      display: flex;
      padding: 6vw;
      width:390%;
      li {
        margin-right: 10vw;
        width: 26vw;
        a,
        img {
          display: block;
          width:100%;
        }
        h2,
        p {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-align: center;
        }
        h2{
          .fz(font-size, 32);
          padding-top: 3vw;
          color: #333;
        }
        .section2-list-dec {
          padding-top: 2vw;
          .fz(font-size, 26);
          color: rgb(150, 150, 150);
        }
        .section2-list-price {
          color:#000;
        }
      }
    }
  }
</style>
