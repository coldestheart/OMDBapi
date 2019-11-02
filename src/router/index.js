import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/Home'
import Favorite from 'pages/Favorite'

Vue.use(Router)

const routes = [
  {
    path: '*',
    component: Home
  },
  {
    path: '/favorite',
    component: Favorite
  }
]

export default new Router({
  routes
})