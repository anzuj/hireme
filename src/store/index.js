import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mode: "all",
    reasonsAmount: 0,
  },
  mutations: {
    SET_MODE(state, mode) {
      state.mode = mode;
    },
    INCREASE_REASON_AMOUNT(state) {
      state.reasonsAmount++
    },
  },
  actions: {
  },
})
