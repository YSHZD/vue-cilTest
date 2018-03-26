import Util from '../../util/common'
import * as types from '../types'
import Vue from 'vue'

const state = {
  fetchLoading: true,
  productDatas: '',
  colSelected: 0,
  sizeSelected: 0,
  count: 0
  // 全局加载状态的Loading
}

const mutations = {
  [types.SET_LOADING] (state, res) {
    state.fetchLoading = res
  },
  [types.SET_DATAS] (state, res) {
    state.productDatas = res
  },
  [types.CHANGE_COL_SELECTED] (state, res) {
    state.colSelected = res
  },
  [types.CHANGE_SIZE_SELECTED] (state, res) {
    state.sizeSelected = res
  },
  [types.CHANGE_COUNT] (state, res) {
    state.count = res
    console.log(res)
  }
}
let vm = new Vue({})
const actions = {
  setDatas ({commit}) {
    vm.$api({
      method: 'post',
      url: '/detail'
    }).then(res => {
      console.log(res)
      commit('SET_DATAS', res.data)
    })
  },
  setSize ({commit}, num) {
    commit('CHANGE_SIZE_SELECTED', num)
  },
  setCount ({commit}, bool = true) {
    let count = Util.getLocal('count') || 0
    if (bool) {
      Util.setLocal(++count, 'count')
    } else {
      Util.setLocal(--count, 'count')
    }
    commit('CHANGE_COUNT', Util.getLocal('count'))
  }
}

const getters = {

}

export default {
  state,
  actions,
  getters,
  mutations
}
