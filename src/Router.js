import Vue from 'vue'
import Router from 'vue-router'
import Form from './pages/registerUser.vue'
import Dashboard from './pages/dashboard.vue'
import Home from './pages/Home.vue'

Vue.use(Router)


export const Routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/form',
        component: Form,
        meta:{layour: 'registerLogin'}
    },
    {
        path: '/dashboard',
        component: Dashboard,
    }
]