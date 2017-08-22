import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
// import Icon from '@/components/icon'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
