import axios from 'axios'
import store from '@/vuex/store.js'
import router from '../router'

const api = axios.create()
api.defaults.baseURL = 'http://api.com'
api.defaults.timeout = 4000
api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
api.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'
//  请求拦截
api.interceptors.request.use(function (config) {
  //  在发送请求之前做些什么
  store.commit('SET_LOADING', true)
  //  如果有token，添加到请求报文 后台会根据该报文返回status
  if (store.state.login.token) {
    config.headers.Authorization = `token ${store.state.login.token}`
  }
  return config
}, function (error) {
  alert('网络错误，请稍后再试')
  store.commit('SET_LOADING', false)
  return Promise.reject(error)
})
// 添加响应拦截器
api.interceptors.response.use(function (response) {
  setTimeout(() => {
    store.commit('SET_LOADING', false)
  }, 300)
  return response
}, function (error) {
  store.commit('SET_LOADING', false)
  if (error.response) {
    if (error.response.status === 401) {
      store.commit('CHANG_TOKEN', 0)
      alert('请重新登录')
      router.replace({ path: 'login', query: {redirect: router.currentRoute.fullPath}
      })
    }
  }
  return Promise.reject(error)
})

export default api
