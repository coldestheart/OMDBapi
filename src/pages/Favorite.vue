<template>
  <div>
    <h2>Favorites</h2>
    <MovieCards :pagetype="pagetype" />
  </div>
</template>
<script>
import MovieCards from "../components/pages/MovieCards"
export default {
  name: "Favorites",
  components: {
    MovieCards
  },
  data() {
    return {
      pagetype: "favorites"
    }
  }
}
</script>