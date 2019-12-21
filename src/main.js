// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "@/App.vue";
import router from "@/router.js";
import config from "@/config";
import Notify from "@/plugins/Notify";
import VueCookies from "vue-cookies";
import "./registerServiceWorker";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Notify);
Vue.use(VueCookies);

Vue.prototype.$config = config;

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
