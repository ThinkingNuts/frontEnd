import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Icon from '@/components/icon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Icon
    }
  ]
})
