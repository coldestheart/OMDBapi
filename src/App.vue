<template>
  <div>
    <Header />
    <div class="container">
    <transition name="fade">
    <RouterView />
    </transition>
    </div>
  </div>
</template>

<script>
import './assets/styles/style.scss'
import Header from './components/widgets/Header'
export default {
    components: {
    Header
  },
  created() {
        this.$store.dispatch("GET_MOVIES")
  },
}
</script>