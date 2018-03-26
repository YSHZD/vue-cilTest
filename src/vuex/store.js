import detail from './modules/detail'
import login from './modules/login'
import category from './modules/category'
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    detail,
    category,
    login
  }
})
