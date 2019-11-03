import Vuex from 'vuex'
import Vue from 'vue'
import movies from '@/store/modules/movies'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    movies
  },
  plugins: [
    createPersistedState(
      {
        paths: ['movies.favorites'],
      }
    )
  ]
})