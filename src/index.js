// eslint-disable-next-line no-unused-vars
import babelPolyfill from 'babel-polyfill'
import Vue from 'vue'
import router from './router'
import App from './App'
import {store} from './store'

import 'normalize.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
