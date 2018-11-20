import Vue from 'vue'
import Router from 'vue-router'
import BookView from '@/components/Views/BookView.vue'
import IndexView from '@/components/Views/IndexView.vue'
import SettingsView from '@/components/Views/SettingsView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Index',
      component: IndexView
    },
    {
      path: '/book/:id',
      name: 'Book',
      component: BookView
    },
    {
      path: '/settings',
      name: 'Settings',
      component: SettingsView
    }
  ]
})
