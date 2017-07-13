import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import myAccount from '@/pages/account/myAccount.vue'
import MyInformation from '../pages/account/MyInformation'
import Appointment from '../pages/appointment/appointment'
import myAppointment from '../pages/appointment/my-appointment'
import completeAppoint from '../pages/appointment/complete-appoint'
import appointBank from '../pages/appointment/appoint-bank'
import appointArea from '../pages/appointment/appoint-area'
import appointDot from '../pages/appointment/appoint-dot'
import changeAppoint from '../pages/appointment/change-appoint'
import ForgetPsw from '@/pages/psw/ForgetPsw'
import Login from '../pages/login/Login'
import Message from '../pages/message/Message'
import MyLoan from '../pages/loan/MyLoan'
import ReimbursementDetail from '../pages/loan/ReimbursementDetail'
import MyNotes from '@/pages/notes/NotesBoard'
import HedgeSubmit from '../pages/hedge/HedgeSubmit'
import HedgeInput from '../pages/hedge/HedgeInput'
import modeOfRepayment from '@/pages/loan/mode-of-repayment'

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
          path: '/appointment/myAppointment',
          name: 'myAppointment',
          component: myAppointment
      },
      {
          path: '/appointment/completeAppoint',
          name: 'completeAppoint',
          component: completeAppoint
      },
      {
          path: '/appointment/changeAppoint',
          name: 'changeAppoint',
          component: changeAppoint
      },
      {
          path: '/appointment/appointBank',
          name: 'appointBank',
          component: appointBank
      },
      {
          path: '/appointment/appointArea',
          name: 'appointArea',
          component: appointArea
      },
      {
          path: '/appointment/appointDot',
          name: 'appointDot',
          component: appointDot
      },
      {
          path:'/forgetpsw',
          name:'ForgetPsw',
          component:ForgetPsw
      },
      {
          path: '/pages/login/login',
          name: 'login',
          component: Login
      },
      {
          path: '/pages/message/Message',
          name: 'Message',
          component: Message
      },
      {
          path: '/pages/loan/MyLoan',
          name: 'MyLoan',
          component: MyLoan
      },
      {
          path: '/pages/loan/ReimbursementDetail',
          name: 'ReimbursementDetail',
          component: ReimbursementDetail
      },
      {
          path: '/notes',
          name: 'MyNotes',
          component: MyNotes
      },
      {
          path: '/pages/hedge/HedgeInput',
          name: 'HedgeInput',
          component: HedgeInput
      },
    {
    path: '/HedgeSubmit',
    name:'HedgeSubmit',
    component:HedgeSubmit
},
      {
          path: '/loan/modeOfRepayment',
          name: 'modeOfRepayment',
          component: modeOfRepayment
      }
    ]
})
