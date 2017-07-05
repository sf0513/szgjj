import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MyInformation from '../pages/account/MyInformation'
import Appointment from '../pages/appointment/appointment'
import Login from '../pages/login/Login'

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
        },
        {
            path: '/appointment',
            name: 'Appointment',
            component: Appointment
        },
        {
            path: '/pages/login/login',
            name: 'login',
            component: Login
        }
    ]
})
