import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: undefined,
    toys: [],
    toy: undefined
  },
  mutations: {
    SET_USER(state, user) {
      state.currentUser = user
    },
    SET_TOYS(state, toys) {
      state.toys = toys
    },
    SET_TOY(state, toy) {
      state.toy = toy
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
    },
    setToy({ commit }, id) { //commit llama a mutaciones
      Axios.get(`https://us-central1-ottoklauss-5927c.cloudfunctions.net/toys/toys${id}`).then((response) => {
        commit('SET_TOY', response.data)
      })
    },
    submitToy({ dispatch }, toy) { //dispach llama a otras acciones
      Axios.post('https://us-central1-ottoklauss-5927c.cloudfunctions.net/toys/toys', toy).then(() => {
        dispatch('setToys')
      })
    },
    deleteToy({ dispatch }, id) {
      Axios.delete(`https://us-central1-ottoklauss-5927c.cloudfunctions.net/toys/toys${id}`).then(() => {
        dispatch('setToy') // dispach llama a las otra acciones
      })
    },
  },
  modules: {
  }
})
