<template lang="html">
  <footer class="footer" @click.stop = 'gotorouter'>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页">
        <i slot="icon" class="icon-index">
        </i>
        首页
      </mt-tab-item>
      <mt-tab-item id="分类">
        <i slot="icon" class="icon-category">
        </i>
        分类
      </mt-tab-item>
      <mt-tab-item id="购物车">
        <i slot="icon" class="icon-car">
        </i>
         购物车
      </mt-tab-item>
      <mt-tab-item id="用户">
        <i slot="icon" class="icon-user">
        </i>
        用户
      </mt-tab-item>
    </mt-tabbar>
  </footer>
</template>

<script>
import Vue from 'vue'
import { MessageBox } from 'mint-ui'
Vue.use(MessageBox)
export default {
  methods: {
    gotorouter () {
      if (this.selected === '购物车') {
        if (this.$store.state.login.token === 0) {
          MessageBox.confirm('确定登入?').then(action => {
            this.$router.push({
              path: '/login'
            })
          }).catch(action => {
            console.log('取消了')
          })
        } else {
          this.$router.push({
            name: this.selected
          })
        }
      } else {
        this.$router.push({
          name: this.selected
        })
      }
    }
  },
  data () {
    return {
      selected: ''
    }
  },
  mounted () {
    let Rname = this.$router.name
    switch (Rname) {
      case '首页':
        this.selected = '首页'
        break
      case '分类':
        this.selected = '分类'
        break
      case '购物车':
        this.selected = '购物车'
        break
      case '用户':
        this.selected = '用户'
        break
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/fz.less';
@import '../assets/index/style.css';
.mint-tab-item-label:hover {
  color:#333;

}
  .footer {
    .mint-tabbar {
      background-color: #fff;
      background-image: none;
      box-shadow: 0 0 2.2vw 0 hsla(0, 6%, 50%, .13);
      -webkit-box-shadow: 0 0 2.2vw 0 hsla(0, 6%, 50%, .13);
      .is-selected {
        background-color: #fff;
        i {
          &::before {
          }
        }
      }
      i {
        .fz(font-size, 35);
      }
    }
  }
</style>
