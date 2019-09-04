import Vue from 'vue'
import Vrouter from 'vue-router'

import welcome from './../views/welcome'
import main from './../views/main'

import register from './../components/register'
import read from './../components/read'
import report from './../components/report'
import feedback from './../components/feedback'
import developer from './../components/developer'

Vue.use(Vrouter)

export default new Vrouter({
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: welcome
        },
        {
            path: '/new',
            name: 'new',
            component: main,
            children: [
                {
                    path: '/register',
                    name: 'register',
                    component: register
                },
                {
                    path: '/read',
                    name: 'read',
                    component: read
                },
                {
                    path: '/report',
                    name: 'report',
                    component: report
                },
                {
                    path: '/feedback',
                    name: 'feedback',
                    component: feedback
                },
                {
                    path: '/developer',
                    name: 'developer',
                    component: developer
                }
            ]
        }
    ]
})