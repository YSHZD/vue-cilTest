<template lang="html">
  <div class="login">
    <v-header>
      <h1 slot="title">登入</h1>
    </v-header>
    <mt-field v-if="toggle === 0" label="帐号" placeholder="请输入帐号" v-model="username"></mt-field>
    <mt-field v-if="toggle === 0" label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-button type="primary" size="large" @click="login">登入</mt-button>
    <mt-button v-if="toggle === 1" type="default" size="large" @click="loginOut">退出</mt-button>
    <p>1314   ===  520</p>
  </div>
</template>

<script>
import { Field, Toast, MessageBox } from 'mint-ui'
import Vue from 'vue'
import Header from '@/common/_header.vue'
Vue.use(Field)
Vue.use(Toast)
export default {
  components: {
    'v-header': Header
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    toggle () {
      return this.$store.state.login.token
    }
  },
  mounted () {
  },
  methods: {
    login () {
      if (this.username === '1314' && this.password === '520') {
        Toast('登入成功！')
        this.$store.commit('CHANGE_TOKEN', 1)
        setTimeout(() => {
          this.$router.replace({
            path: '/user'
          })
        })
      } else {
        Toast('帐号或者密码错误')
      }
    },
    loginOut () {
      MessageBox.confirm('确定退出？').then(action => {
        Toast('退出登入成功！')
        this.$store.commit('CHANGE_TOKEN', 0)
        this.username = ''
        this.password = ''
        this.toggle = true
        setTimeout(() => {
          this.$router.replace({
            path: '/'
          })
        })
      })
    }
  }
}
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  padding:0 4vw;
  box-sizing: border-box;
  .mint-button{
    margin: 15px 0;
  }
}
</style>
