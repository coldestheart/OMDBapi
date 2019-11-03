<template>
  <div>
    <Header />
    <div class="container">
      <transition name="slide">
        <RouterView />
      </transition>
    </div>
  </div>
</template>

<script>
import "@/assets/styles/style.scss"
import Header from "@/components/layout/Header"
import { mapActions } from 'vuex'
export default {
  components: {
    Header
  },
  methods: {
    ...mapActions({
      getMovies: 'getMovies'
    })
  },
  created () {
    this.getMovies()
  }
}
</script>