
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Components from './components'
import config from './config'
import Notify from './plugins/Notify'

import '@mdi/font/css/materialdesignicons.css'

Vue.use(Components)
Vue.use(Notify)

Vue.prototype.$config=config


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})