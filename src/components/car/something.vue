<template>
  <div class="wrap">
    <v-gologin></v-gologin>
    <ul class="something" v-if='carList'>
      <li v-for="(k,i) in carList" :key="i">
        <div class="something-left">
          <label class="true" :class="{false:!k.choseBool}">
            <input type="checkbox" v-model="k.choseBool">
          </label>
        </div>
        <div class="something-middle">
          <img :src="k.imgPath" alt="">
        </div>
        <div class="something-right">
          <p>{{k.title}}</p>
          <p>{{k.col}} - {{k.size}}   单价：<strong>{{k.price}}</strong>元</p>
          <p><span @click="Num(i,true)">+</span>{{k.num}}<span @click="Num(i,false)">-</span></p>
          <div class="something-right-bottom" @click="cut(i)">
            <span></span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Login from '@/components/index/login.vue'
import { MessageBox } from 'mint-ui'
import Vue from 'vue'
Vue.use(MessageBox)
export default {
  data () {
    return {
    }
  },
  components: {
    'v-gologin': Login
  },
  computed: {
    carList () {
      return this.$store.state.detail.carList
    }
  },
  methods: {
    Num (i, bool) {
      if (bool) {
        this.carList[i].num += 1
        this.$store.dispatch('uplate', this.carList)
      } else {
        if (this.carList[i].num > 1) {
          this.carList[i].num -= 1
          this.$store.dispatch('uplate', this.carList)
        }
      }
    },
    cut (i) {
      MessageBox.confirm('确定删除此订单').then(action => {
        let newCarList = []
        for (let k = 0; k < this.carList.length; k++) {
          if (k !== i) {
            newCarList.push(this.carList[i])
          }
        }
        this.$store.dispatch('setCount', false)
        this.$store.dispatch('cutCarList', newCarList)
        console.log('delete ok ' + i)
      }).catch(action => {
        console.log('取消了')
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/fz.less';
::-webkit-scrollbar{
  width: 0;
  height: 0;
}
.wrap {
  width: 100%;
  position: fixed;
  top: 12vw;
  overflow-y: auto;
  bottom: 16vw;
  .something {
    width: 100%;
    > li {
      display: flex;
      align-items: center;
      position: relative;
      height: 26vw;
      padding: 4vw 2vw;
      .bd();
      .something-left {
        flex: 2;
        label {
          float: left;
          background: url("../../assets/car/images/t.svg") no-repeat center center/50% 50%;
          input {
            height: 14vw;
            width: 14vw;
            opacity: 0;
            filter: alpha(opacity=0);
          }
        }
        .false {
          background: url("../../assets/car/images/f.svg") no-repeat center center /50% 50%!important;
        }
      }
      .something-middle {
        flex: 3;
        box-sizing: border-box;
        height: 26vw;
        padding-left: 2vw;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .something-right {
        flex: 7;
        height: 100%;
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        box-sizing: border-box;
        padding-left: 6vw;
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          text-align: left;
          .fz(font-size,26);
          strong {
            color: red;
          }
          span {
            display: inline-block;
            padding: 1vw 3vw;
            background-color: #ededed;
            border-radius: 0.5vw;
            margin: 2vw 1vw;
          }
        }
        .something-right-bottom {
          > div {
            display: flex;
            align-items: center;
            input {
              width :6vw;
              text-align: center;
            }
            span {
              height: 7vw;
              line-height: 7vw;
              width: 7vw;
              display: inline-block;
              border: 0.2vw solid #f1f1f1;
              border-radius: 1vw;
              text-align: center;
              .fz(font-size, 20);
              cursor: pointer;
            }
          }
          > span {
              position: absolute;
              right: 0;
              bottom: 0;
              width: 13vw;
              height: 13vw;
              background: url("../../assets/car/images/laji.svg") no-repeat center/50%;
          }
        }
      }
    }
  }
  label,
  span {
      &:active {
          -webkit-transform: scale(1.3);
          transform: scale(1.3);
      }
  }
}
</style>
