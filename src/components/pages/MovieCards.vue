<template>
  <div>
    <Error
      :pagetype="this.pagetype"
      v-if="Filter(MOVIES).length < 1"
    />
    <div v-if="Filter(MOVIES).length > 0">
      <button
        @click="Order()"
        class="sort btn"
      >
        <span v-if="reversed">Reverse Order</span>
        <span v-if="!reversed">Normalize Order</span>
      </button>
      <div class="card-grid">
        <div
          class="card"
          v-for="movie in Filter(MOVIES)"
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
              @click="addToFavorites(movie)"
              class="btn draw-border"
            >+</button>
            <button
              v-if="movie.inFav"
              @click="removeFromFavorites(movie)"
              class="btn draw-border"
            >-</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../assets/styles/button.scss"
import "../../assets/styles/cards.scss"
import Error from "./Error"
import { mapGetters } from "vuex"
export default {
  components: {
    Error
  },
  data() {
    return {
      reversed: false
    }
  },
  props: {
    pagetype: String
  },
  created() {
    this.reversed = this.$store.state.movies.order
  },
  computed: {
    ...mapGetters({
      MOVIES: "MOVIES"
    })
  },
  methods: {
    Order: function() {
      this.$store.commit("REVERSE_ORDER")
      this.reversed = this.$store.state.movies.order
    },
    Filter: function(movies) {
      let favorites = movies.filter(m =>
        this.$store.state.movies.favorites.includes(m.imdbID)
      )
      if (this.pagetype === "home") {
        if (!this.$store.state.movies.order) {
          return movies.slice().reverse()
        } else {
          return movies
        }
      } else {
        if (!this.$store.state.movies.order) {
          return favorites.slice().reverse()
        } else {
          return favorites
        }
      }
    },
    addToFavorites(movie) {
      this.$store.commit("ADD_TO_FAVORITES", movie.imdbID)
    },
    removeFromFavorites(movie) {
      this.$store.commit("REMOVE_FROM_FAVORITES", movie.imdbID)
    }
  }
}
</script>