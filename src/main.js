import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import VueResource from 'vue-resource'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false

Vue.use(Buefy, {
  defaultIconPack: 'fas'
})

Vue.use(VueResource)

Vue.http.interceptors.push((request, next) => {
  request.credentials = true
  next()
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
