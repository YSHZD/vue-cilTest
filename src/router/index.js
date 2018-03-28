import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const Index = resolve => require(['@/views/Index.vue'], resolve)
const Category = resolve => require(['@/views/Category.vue'], resolve)
const CategoryMain = resolve => require(['@/components/category/main.vue'], resolve)
const Detail = resolve => require(['@/views/detail.vue'], resolve)
const Car = resolve => require(['@/views/car.vue'], resolve)
const Pay = resolve => require(['@/views/pay.vue'], resolve)
const Login = resolve => require(['@/components/user/index.vue'], resolve)
const User = resolve => require(['@/components/user/user.vue'], resolve)
export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index
    }, {
      path: '/category',
      redirect: '/category/good',
      name: '分类',
      component: Category,
      children: [{
        path: '/category/:tab',
        component: CategoryMain
      }]
    }, {
      path: '/detail',
      name: '详情页',
      component: Detail
    }, {
      path: '/car',
      name: '购物车',
      component: Car
    }, {
      path: '/pay',
      name: '支付',
      component: Pay
    }, {
      path: '/login',
      name: '用户',
      component: Login
    }, {
      path: '/user',
      component: User
    }
  ]
})
