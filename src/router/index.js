import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import myAccount from '@/pages/account/myAccount.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
        path: '/myAccount',
        name: 'myAccount',
        component: myAccount
    }
  ]
})
