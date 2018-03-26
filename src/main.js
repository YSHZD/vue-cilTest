// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/vuex/store.js'
import api from '@/http/api.js'
import Mint from 'mint-ui'
import mint from 'mint-ui/lib/style.css'
window.mint = mint
Vue.use(Mint)
Vue.config.productionTip = true // 来关闭生产模式下给出的提示
Vue.prototype.$api = api
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
