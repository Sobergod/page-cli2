import Vue from 'vue'
import Vuex from 'vuex'
import page from './modules/page'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    page
  },
  getters,
  actions
})
