<template lang="html">
  <section class="footer">
    <router-link :to="{name:'首页'}" class="footer-index">
      <i class="icon-index"></i>
    </router-link>
    <router-link :to="{name:'购物车'}" class="footer-car">
      <i class="icon-car"></i>
      <span v-if="count">{{count}}</span>
    </router-link>
    <span class="footer-addcar" @click = "addToCar">
      加入购物车
    </span>
  </section>
</template>

<script>
import { MessageBox, Toast } from 'mint-ui'
import Vue from 'vue'
Vue.use(MessageBox)
Vue.use(Toast)
export default {
  computed: {
    count () {
      return this.$store.state.detail.count
    },
    productDatasView () {
      return this.$store.state.detail.productDatas.view
    },
    colSelected () {
      return this.$store.state.detail.colSelected
    },
    sizeSelected () {
      return this.$store.state.detail.sizeSelected
    }
  },
  methods: {
    addToCar () {
      const product = [{
        title: this.productDatasView.title,
        price: this.productDatasView.price,
        size: this.productDatasView.chose[this.sizeSelected].size,
        col: this.productDatasView.chose[this.colSelected].col,
        id: this.productDatasView.id,
        imgPath: this.$store.state.detail.productDatas.swiper[0].imgPath,
        choseBool: false
      }]
      MessageBox.confirm(
        `商品名称:${product[0].title}</br>` +
        `价格:${product[0].price}</br>` +
        `规格:${product[0].size}</br>` +
        `颜色:${product[0].col}</br>` +
        `商品ID:${product[0].id}</br>`
      ).then(action => {
        this.$store.dispatch('setCount', true)
        Toast({
          message: '添加成功',
          duration: 1000
        })
      }, err => console.log(err))
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/fz.less';
@import '../../assets/index/style.css';
.footer {
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  user-select:none;
  .bt();
  .footer-index,
  .footer-car,
  .footer-addcar {
    text-align: center;
  }
  .footer-index {
    flex: 1;
    line-height: 14vw;
    height: 14vw;
    padding-top: 1.5vw;
    border-right: 1px solid #f7f7f7;
    i {
      .fz(font-size,45);
    }
    &:active {
      background-color: #f1f1f1;
    }
  }
  .footer-car {
    position: relative;
    flex: 1;
    line-height: 14vw;
    height: 14vw;
    padding-top: 1.5vw;
    span {
      height: 5.5vw;
      width: 5.5vw;
      line-height: 5.5vw;
      position: absolute;
      top: 0.5vw;
      right: 5.5vw;
      border-radius: 50%;
      color: #fff;
      .fz(font-size,20);
      background-color: #fa0;
    }
    &:active {
      background-color: #f1f1f1;
    }
    i {
      .fz(font-size,48)
    }
  }
  .footer-addcar {
    flex: 2;
    line-height: 14vw;
    height: 14vw;
    letter-spacing: 0.2vw;
    &:active {
      background-color: #ff7d00;
    }
  }
}
</style>
