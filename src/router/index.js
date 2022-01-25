import Vue from 'vue'
import VueRouter from 'vue-router'
import Camisas from '../views/Camisas.vue'
import Capinhas from '../views/Capinhas.vue'
import home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/capinhas',
        name: 'capinhas',
        component: Capinhas
    },
    {
        path: '/camisas',
        name: 'camisas',
        component: Camisas
    },
    {
        path: '/home',
        name: 'home',
        component: home
    },
    {
        path: '/',
        redirect: '/home'
    }
]

const router = new VueRouter({
    mode: 'history',
    // base: 'http://localhost:8082',
    routes
})

export default router