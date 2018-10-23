import Vue from 'vue'
import Router from 'vue-router'
import BookView from '@/components/Views/BookView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/book',
      name: 'Book',
      component: BookView
    }
  ]
})
