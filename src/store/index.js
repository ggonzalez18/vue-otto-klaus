import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: undefined,
    toys: []
  },
  mutations: {
    SET_USER(state, user) {
      state.currentUser = user
    },
    SET_TOYS(state, toys) {
      state.toys = toys
    }
  },
  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user)
    },
    setToys({ commit }) {
      Axios.get('https://us-central1-ottoklauss-5927c.cloudfunctions.net/toys/toys').then((response) => {
        commit('SET_TOYS', response.data)
      })
    }
  },
  modules: {
  }
})
