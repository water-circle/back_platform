import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import http from 'axios'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = http

if (process.env.NODE_ENV === 'development') require('@/api/mock')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
