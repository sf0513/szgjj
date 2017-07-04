import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MyInformation from '../pages/account/MyInformation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/pages/account/MyInformation',
      name: 'MyInformation',
      component: MyInformation
    }
  ]
})
