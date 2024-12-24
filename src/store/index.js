import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    form: {
      firstName: '',
      lastName: '',
      email: ''
    }
  },
  mutations: {
    updateForm(state, payload) {
      state['form'][payload.field] = payload.value
    }
  },
  actions: {
    updateForm({commit}, payload) {
      commit('updateForm', payload)
    }
  },
  modules: {
  }
})
