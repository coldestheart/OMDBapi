<template>
  <div>
    <h2>MAIN PAGE</h2>
    <MovieCards :pagetype="pagetype" />
  </div>
</template>

<script>
import MovieCards from "../components/pages/MovieCards"
export default {
  data() {
    return {
      pagetype: "home"
    }
  },
  components: {
    MovieCards
  }
}
</script>