import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import myAccount from '@/pages/account/myAccount.vue'
import MyInformation from '../pages/account/MyInformation'
import Appointment from '../pages/appointment/appointment'
import ForgetPsw from '@/pages/psw/ForgetPsw'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
  {
      path: '/pages/account/myAccount',
      name: 'myAccount',
      component: myAccount
  },
  {
      path: '/pages/account/MyInformation',
      name: 'MyInformation',
      component: MyInformation
    },
    {
      path: '/appointment',
      name: 'Appointment',
      component: Appointment
    },
    {
      // path:'/forgetpsw',
      path:'/',
      name:'ForgetPsw',
      component:ForgetPsw
    }
  ]
})
