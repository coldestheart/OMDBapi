<template>
  <div>
    <Error
      :pagetype="this.pagetype"
      v-if="moviesList.length === 0"
    />
    <div v-if="moviesList.length > 0">
      <button
        @click="Order()"
        class="sort btn"
      >
        <span v-if="MOVIES.order">Reverse Order</span>
        <span v-if="!MOVIES.order">Normalize Order</span>
      </button>
      <div class="card-grid">
        <div
          class="card"
          v-for="movie in moviesList"
          :key="movie.imdbID"
        >
          <img
            class="poster"
            :src="movie.Poster"
          />
          <h3 class="title">{{ movie.Title }}</h3>
          <div class="info">
            <p>Type: {{ movie.Type }}</p>
            <p>Year: {{ movie.Year }}</p>
            <button
              v-if="!movie.inFav"
              @click="toFavorites(movie.imdbID)"
              class="btn draw-border"
            >+</button>
            <button
              v-if="movie.inFav"
              @click="fromFavorites(movie.imdbID)"
              class="btn draw-border"
            >-</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/styles/button.scss"
import "@/assets/styles/cards.scss"
import Error from "@/components/pages/Error"
import { mapState, mapMutations } from "vuex"
export default {
  components: {
    Error
  },
  props: {
    pagetype: String
  },
  computed: {
    ...mapState({
      MOVIES: 'movies'
    }),
    moviesList () {
      if (this.pagetype === 'favorites') {
        return this.MOVIES.list.filter(m => m.inFav === true)
      } else {
        return this.MOVIES.list
      }
    }
  },
  methods: {
    ...mapMutations({
      addToFavorites: 'addToFavorites',
      removeFromFavorites: 'removeFromFavorites',
      changeOrder: 'changeOrder'
    }),
    toFavorites (id) {
      this.addToFavorites(id)
      this.$toasted.show('Movie has been added to Favorites')
    },
    fromFavorites (id) {
      this.removeFromFavorites(id)
      this.$toasted.show('Movie has been removed from Favorites')
    }
  }
}
</script>