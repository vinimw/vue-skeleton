import Vue from 'vue'
import Vuex from 'vuex'
import initialize from './store/initialize'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    initialize
  }
})
