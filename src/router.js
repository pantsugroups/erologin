import Vue from "vue";
import Router from "vue-router";
// import BookView from '@/views/BookView.vue'
// import IndexView from '@/views/IndexView.vue'
import SettingsView from "@/views/SettingsView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import VerifyMailView from "@/views/VerifyMailView.vue";
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/settings/:setpanel",
      name: "Settings",
      component: SettingsView,
      meta: {
        title: "个人中心 · Ero Light"
      }
    },
    {
      path: "/",
      name: "login",
      component: LoginView,
      meta: {
        title: "登陆 · Ero Light"
      }
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      meta: {
        title: "注册 · Ero Light"
      }
    },
    {
      path: "/verify",
      name: "verify",
      component: VerifyMailView,
      meta: {
        title: "验证 · Ero Light"
      }
    }
  ]
});

export default router;
