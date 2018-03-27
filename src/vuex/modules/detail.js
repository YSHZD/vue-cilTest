import Util from '../../util/common'
import * as types from '../types'
import Vue from 'vue'

const state = {
  fetchLoading: true,
  productDatas: '',
  colSelected: 0,
  sizeSelected: 0,
  count: Util.getLocal('count') || 0,
  allplay: 0,
  carList: ''
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
  },
  [types.ADD_CAR_LIST] (state, res) {
    state.carList = Util.getLocal('carList')
  },
  [types.CAHNGE_CAR_LIST] (state, res) {
    state.carList = Util.getLocal('carList')
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
  uplate ({commit}, product) {
    Util.setLocal(product, 'carList')
  },
  addCarList ({commit}, product) {
    Util.setLocal(product, 'carList', true)
    commit('ADD_CAR_LIST')
  },
  setSize ({commit}, num) {
    commit('CHANGE_SIZE_SELECTED', num)
  },
  cutCarList ({commit}, index) {
    let carLists = Util.getLocal('carList')
    let newcars = carLists.filter(function (item, key) {
      return key !== index
    })
    Util.setLocal(newcars, 'carList')
    commit('CAHNGE_CAR_LIST')
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
  count: function (state) {
    return Util.getLocal('count') || 0
  },
  getCarList: function (state) {
    return Util.getLocal('carList') || 0
  },
  selecteCount: function (state) {
    let endNum = 0
    state.carList.forEach(function (item, key) {
      if (item.choseBool) {
        endNum += item.num
      }
    })
    return endNum
  },
  allplay: function (state) {
    let sumPrice = 0
    state.carList.forEach(function (item, key) {
      if (item.choseBool) {
        sumPrice += item.price * item.num
      }
    })
    return sumPrice
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
