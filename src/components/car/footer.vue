<template>
  <div class="footer">
    <div class="footer-result">
      <p>共{{count}}件 金额：</p>
      <p><span>{{allplay}}</span>元</p>
    </div>
    <router-link :to="{name: '分类'}" class="footer-goon">
      继续购物
    </router-link>
    <a class="footer-pay" @click="goPay">
       去结算
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 18
    }
  },
  computed: {
    allplay () {
      return this.$store.state.detail.allplay
    }
  },
  methods: {
    goPay () {
      console.log(111)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/fz.less';
.footer {
  width: 100%;
  height: 16vw;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top:0.2vw solid #ededed;
  background-color: #fff;
  .footer-result,a {
    flex: 1;
    text-align: center;
  }
  .footer-result {
    p {
      .fz(font-size,24);
      color: #999;
    }
    p:last-of-type {
      padding: 1vw 0 0 1vw;
      span {
        color:red;
        .fz(font-size,42);
      }
    }
  }
  .footer-goon {
    background-color: #f4f4f4;
    line-height: 16vw;
  }
  .footer-pay {
    background-color: #808080;
    line-height: 16vw;
    color:#fff;
  }
}
</style>
