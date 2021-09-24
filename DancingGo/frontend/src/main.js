import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Carousel3d from 'vue-carousel-3d'
import axios from 'axios'

Vue.use(Carousel3d)

Vue.config.productionTip = false

// const BACKEND_PORT = ":8080"
// const BACKEND_URL = `${location.protocol}//${location.hostname}${BACKEND_PORT}`
// axios.defaults.baseURL = `${BACKEND_URL}`
axios.defaults.baseURL = 'http://localhost:8080'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
