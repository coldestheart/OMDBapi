// eslint-disable-next-line no-unused-vars
import babelPolyfill from 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Toasted from 'vue-toasted'
import 'normalize.css'

import App from '@/App'
import defaultRoutes from '@/router/index'
import { store } from '@/store'

//Variables
const router = new VueRouter({
  routes: [
    ...defaultRoutes
  ]
})

// USES
Vue.use(VueRouter)
Vue.use(router)
Vue.use(Toasted,{ 
  position: "bottom-right", 
  duration : 1000
})

// INITIALIZATION
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')