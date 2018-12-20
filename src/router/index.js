import Vue from 'vue'
import Router from 'vue-router'
import BookView from '@/components/Views/BookView.vue'
import IndexView from '@/components/Views/IndexView.vue'
import SettingsView from '@/components/Views/SettingsView.vue'
import LoginView from '@/components/Views/LoginView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Index',
      component: IndexView,
      meta:{
        title:'首页 · Ero Light'
      }
    },
    {
      path: '/book/:id',
      name: 'Book',
      component: BookView,
      meta:{
        title:'书籍 · Ero Light'
      }
    },
    {
      path: '/settings/:setpanel',
      name: 'Settings',
      component: SettingsView,
      meta:{
        title:'个人中心 · Ero Light'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta:{
        title:'登陆 · Ero Light'
      }
    }
  ]
})
