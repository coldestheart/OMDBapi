<template>
  <div>
    <div v-if="pagetype === 'home'">
      <h2>404 ERROR MOVIES NOT FOUND</h2>
    </div>
    <div v-if="pagetype ==='favorites'">
      <h2>No Movies in favorites</h2>
      <p>But don't worry u can add movie on <router-link to="/">Main Page</router-link>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    pagetype: String
  }
}
</script>