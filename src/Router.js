import Vue from 'vue'
import Router from 'vue-router'
import Form from './components/form.vue'
import Dashboard from './components/dashboard.vue'
import Home from './components/Home.vue'

Vue.use(Router)


export const Routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/form',
        component: Form,
    },
    {
        path: '/dashboard',
        component: Dashboard,
    }
]