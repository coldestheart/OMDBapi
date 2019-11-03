import Vue from 'vue'
import Axios from 'axios'

const API_BASE_DATA = 'http://www.omdbapi.com'
const API_REQUEST_DATA = '?s=love&type=movie&apikey=6a673701&page='

const state = {
  list: [],
  favorites: [],
  order: true
}

const mutations = {
  setMovies (state, payload) {
    payload.forEach(m => (state.favorites.includes(m.imdbID)) ? m.inFav = true : m.inFav = false)
    state.list = payload
  },
  Order (state) {
    state.order = !state.order
    state.list = state.list.slice().reverse()
  },
  addToFavorites (state, payload) {
    state.list[state.list.findIndex(m => m.imdbID === payload)].inFav = true
    state.favorites.push(payload)
    Vue.toasted.show('Movie has been added to Favorites')
  },
  removeFromFavorites (state, payload) {
    const index = state.favorites.findIndex(m => m === payload)
    state.favorites.splice(index, 1)
    state.list[state.list.findIndex(m => m.imdbID === payload)].inFav = false
    Vue.toasted.show('Movie has been removed from Favorites')
  }
}

const actions = {
 async getMovies ({commit}) {
    try {
      let mlist = []
      let i = 1
      let list
      while (i < 11) {
        list = await Axios.get(`${API_BASE_DATA}/${API_REQUEST_DATA}${i}`)
        mlist = mlist.concat(list.data.Search)
        i++
      }
      commit('setMovies', mlist)
    } catch (e) {
      Vue.toasted.show('e')
    }
  }
}

export default {
  state,
  mutations,
  actions
}