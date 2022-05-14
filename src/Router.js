import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
import { store } from './store/Store'

Vue.use(Router)


const Routes = [
    {
        path: '/',
        component: import("./pages/Home.vue")
    },
    {
        path: '/form',
        component: import("./pages/registerUser.vue"),
        meta: { layout: 'dashboardLayout', middleware: 'is-no-auth' }
    },
    {
        path: '/dashboard',
        component: import("./pages/dashboard.vue"),
        meta: { layout: 'dashboardLayout' }
    },
    {
        path: '/loginUser',
        component: import("./pages/LoginUser.vue"),
        meta: { middleware: 'is-auth' }
    }
]

export const router = new VueRouter({
    routes: Routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    store.dispatch('SetValueWhenRefresh')
    if (to.meta.middleware) {
        if (to.meta.middleware == 'is-auth' && store.getters.GetUser) {
            router.replace('/form')
        } else if (to.meta.middleware == 'is-no-auth' && !store.getters.GetUser) {
            router.replace('/loginUser')
        }
        next()
    } else {
        next()
    }
})