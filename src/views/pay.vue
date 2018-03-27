<template>
  <div class="pay">
    <v-header>
      <h1 slot="title">支付订单</h1>
    </v-header>
    <div class="pay-address">
      <div>
        <p class="main-address-per">收货人:<span>XXX</span></p>
        <p class="main-address-tel">XXXXXXXXX</p>
      </div>
      <p>收货地址:<span>XXXXXXXXXXXXXXXXXXXX</span></p>
    </div>
    <div class="pay-product">
      <ul v-if="!confirm">
        <li v-for="(k,i) in carList" :key="i">
          <a>
            <img :src="k.imgPath" alt="">
            <div>
              <h2>{{k.title}}</h2>
              <h2>配置:{{k.size}}</h2>
              <h2>颜色:{{k.col}}</h2>
              <h2>数量:{{k.num}}</h2>
              <h2>{{k.price}} 元</h2>
            </div>
          </a>
        </li>
      </ul>

      <!-- 支付成功后的提示 -->
      <div class="pay-confirm" v-else>
        <p>支付成功!!!</p><p>当页面数据清空</p><p>购物车列表重新设置</p>
      </div>
    </div>
    <h3 class="pay-allpay" v-if="!confirm">总需要支付 : <i>￥</i><span>{{allplay}}</span></h3>
    <footer v-if="!confirm" class="pay-footer" ontouchstrat="" @click="payConfirm">
      <span>立即支付</span>
    </footer>
  </div>
</template>

<script>
import Header from '@/common/_header.vue'
import { MessageBox } from 'mint-ui'
import Vue from 'vue'
Vue.use(MessageBox)
export default {
  data () {
    return {
      allplay: this.$store.getters.allplay,
      confirm: ''
    }
  },
  components: {
    'v-header': Header
  },
  computed: {
    carList () {
      return this.$store.getters.endCarList
    }
  },
  methods: {
    payConfirm: function () {
      console.log(this.allplay)
      MessageBox.confirm(`确定支付${this.allplay}？`).then(action => {
        this.$store.commit('SET_LOADING', true)
        this.$store.dispatch('resetCarList')
        setTimeout(() => {
          this.$store.commit('SET_LOADING', false)
          this.confirm = true
        }, 300)
      }).catch(action => {
        console.log('no')
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/fz.less';
::-webkit-scrollbar{
  height: 0;
  width: 0;
}
.pay {
    width: 100%;
    background-color: #F7F7F7;

    .pay-address {
        background-color: #fff;
        border-bottom: 1*10vw/75 solid #DEDEDE;
        padding: 30*10vw/75;

        > div {
            display: flex;
            justify-content: space-between;

            p {
                color: #868686;
                .fz(font-size,32px);
            }
        }

        > p {
            .fz(font-size,28px);
            color: #868686;
            padding-top: 30*10vw/75;
            letter-spacing: 3*10vw/75;
            line-height: 45*10vw/75;
        }
    }
    .pay-product {
        background-color: #fff;
        height: 60vw;
        overflow: auto;

        li {
            a {
                display: -webkit-flex;
                display: -ms-flex;
                display: flex;
                box-sizing: border-box;
                padding: 20*10vw/75 30*10vw/75;
                color: #4D4D4D;
                .fz(font-size,30px);
                border-bottom: 1*10vw/75 solid #DEDEDE;

                > img {
                    display: block;
                    width: 2.5*10vw;
                    height: 2.5*10vw;
                }

                > div {
                    box-sizing: border-box;
                    padding-left: 50*10vw/75;
                    width: 70%;
                    h2 {
                        padding-top: 0.09*10vw;
                        overflow: hidden;
                        word-break: keep-all;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        text-align: left;
                    }

                    p {
                        text-align: right;
                        .fz(font-size,24px);
                        padding-top: 1.4*10vw;
                    }
                }
            }
        }
    }

    .pay-allpay {
        text-align: right;
        margin-top: 1vw;
        padding: 4vw 5vw;
        .fz(font-size,32px);
        color: #999999;
        background-color: #fff;
        i,
        span {
            color: #333;
        }
    }

    .pay-footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding-bottom: 4vw;
        span {
            display: block;
            width: 85%;
            background-color: #fd729c;
            border-radius: 1.3vw;
            color: #fff;
            font-size: 17px;
            padding: 4vw;
            margin: 0 auto;
            text-align: center;
            &:active {
                background-color: #ededed;
            }
        }

    }

    .pay-confirm {
        padding: 20px 0;
        background-color: #fefefe;
        text-align: center;
        color: #333;
        line-height: 30px;
        .fz(font-size,40);
    }
}
</style>
