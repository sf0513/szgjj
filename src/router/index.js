import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import myAccount from '@/pages/account/myAccount.vue'
import MyInformation from '../pages/account/MyInformation'
import myAppointment from '../pages/appointment/my-appointment'
import completeAppoint from '../pages/appointment/complete-appoint'
import appointBank from '../pages/appointment/appoint-bank'
import appointArea from '../pages/appointment/appoint-area'
import appointDot from '../pages/appointment/appoint-dot'
import appointSuccess from '../pages/appointment/appoint-success'
import changeAppoint from '../pages/appointment/change-appoint'
import ForgetPsw from '@/pages/psw/ForgetPsw'
import Login from '../pages/login/Login'
import Message from '../pages/message/Message'
import MyLoan from '../pages/loan/MyLoan'
import ReimbursementDetail from '../pages/loan/ReimbursementDetail'
import MyNotes from '@/pages/notes/NotesBoard'
import HedgeInput from '../pages/hedge/HedgeInput'
import modeOfRepayment from '@/pages/loan/mode-of-repayment'
import IWantToExtract from '../pages/extract/IWantToExtract'
import HedgeSign from '../pages/hedge/HedgeSign'


import HedgeResult from '../pages/hedge/HedgeResult'

Vue.use(Router)

//export default new Router({
//routes: [
//    {
//      path: '/',
//      name: 'Hello',
//      component: Hello
//    },
//    {
//      path: '/pages/account/myAccount',
//      name: 'myAccount',
//      component: myAccount
//    },
//    {
//      path: '/pages/account/MyInformation',
//      name: 'MyInformation',
//      component: MyInformation
//    },
//    {
//        path: '/appointment',
//        name: 'Appointment',
//        component: Appointment
//    },
//    {
//        path: '/appointment/myAppointment',
//        name: 'myAppointment',
//        component: myAppointment
//    },
//    {
//        path: '/appointment/completeAppoint',
//        name: 'completeAppoint',
//        component: completeAppoint
//    },
//    {
//        path: '/appointment/changeAppoint',
//        name: 'changeAppoint',
//        component: changeAppoint
//    },
//    {
//        path: '/appointment/appointBank',
//        name: 'appointBank',
//        component: appointBank
//    },
//    {
//        path: '/appointment/appointArea',
//        name: 'appointArea',
//        component: appointArea
//    },
//    {
//        path: '/appointment/appointDot',
//        name: 'appointDot',
//        component: appointDot
//    },
//    {
//        path:'/forgetpsw',
//        name:'ForgetPsw',
//        component:ForgetPsw
//    },
//    {
//        path: '/pages/login/login',
//        name: 'login',
//        component: Login
//    },
//    {
//        path: '/pages/message/Message',
//        name: 'Message',
//        component: Message
//    },
//    {
//        path: '/pages/loan/MyLoan',
//        name: 'MyLoan',
//        component: MyLoan
//    },
//    {
//        path: '/pages/loan/ReimbursementDetail',
//        name: 'ReimbursementDetail',
//        component: ReimbursementDetail
//    },
//    {
//        path: '/notes',
//        name: 'MyNotes',
//        component: MyNotes
//    },
//    {
//        path: '/pages/hedge/HedgeInput',
//        name: 'HedgeInput',
//        component: HedgeInput
//    },
//  	{
//			    path: '/HedgeSubmit',
//			    name:'HedgeSubmit',
//			    component:HedgeSubmit
//			},
//    {
//        path: '/loan/modeOfRepayment',
//        name: 'modeOfRepayment',
//        component: modeOfRepayment
//    },
//    {
//        path: '/loan/modeOfRepaymentOk',
//        name: 'modeOfRepaymentOk',
//        component: modeOfRepaymentOk
//    }
//  ]
//})
const router =  new Router({
    // mode: 'history',
    base: __dirname,
    routes: [
    		//导航页
        {
            path: '/',
            name: 'Hello',
            component: (resolve) => {
                require(['../components/Hello'], resolve)
            }
        },
        //贷款-还款方式变更
        {
            path: '/loan/modeOfRepayment',
            name: 'modeOfRepayment',
            component: (resolve) => {
                require(['../pages/loan/mode-of-repayment'], resolve)
            }
        },
        //贷款-还款方式变更-确定
        {
            path: '/loan/modeOfRepaymentOk',
            name: 'modeOfRepaymentOk',
            component: (resolve) => {
                require(['../pages/loan/mode-of-repayment-ok'], resolve)
            }
        },
    ]
});

export default router