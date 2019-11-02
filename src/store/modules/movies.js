import Axios from 'axios'

const API_BASE_DATA = 'http://www.omdbapi.com'
const API_REQUEST_DATA = '?s=love&type=movie&apikey=6a673701&page='

const state = {
  list: [],
  favorites: [],
  order: true,
  pagecounter: 1
}

const getters = {
  MOVIES: state => {
    return state.list
  }
}

const mutations = {
  SET_MOVIES: (state, payload) => {
    payload.forEach(m => (state.favorites.includes(m.imdbID)) ? m.inFav = true : m.inFav = false)
    state.list = payload
  },
  REVERSE_ORDER: (state) => {
    state.order = !state.order
  },
  ADD_TO_FAVORITES: (state, payload) => {
    state.list[state.list.findIndex(m => m.imdbID === payload)].inFav = true
    state.favorites.push(payload)
  },
  REMOVE_FROM_FAVORITES: (state, payload) => {
    const index = state.favorites.findIndex(m => m === payload)
    state.favorites.splice(index, 1)
    state.list[state.list.findIndex(m => m.imdbID === payload)].inFav = false
  }
}

const actions = {
  GET_MOVIES: async (context) => {
    try {
      let mlist = []
      let i = 1
      let list
      while (i < 11) {
        list = await Axios.get(`${API_BASE_DATA}/${API_REQUEST_DATA}${i}`)
        mlist = mlist.concat(list.data.Search)
        i++
      }
      context.commit('SET_MOVIES', mlist)
    } catch (e) {
      console.error(e)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}