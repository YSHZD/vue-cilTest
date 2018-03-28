import Util from '../../util/common.js'
import * as types from '../types'
const state = {
  token: Util.getLocal('token') || 0
}
const mutations = {
  [types.CHANGE_TOKEN] (state, res) {
    state.token = res
    Util.setLocal(res, 'token')
  }
}
export default {
  state,
  mutations
}
