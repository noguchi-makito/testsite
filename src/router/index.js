import Vue from 'vue'
import Router from 'vue-router'

// page
import LoginPage from '@/components/LoginPage'
import DatePage from '@/components/DatePage'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: LoginPage
    },
    {
      path: '/date',
      component: DatePage
    }
  ]
})
