import {createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import Account from '../pages/Account.vue'
import Reviews from '../pages/Reviews.vue'
import Catalog from '../pages/Catalog.vue'


const routes = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        component: Dashboard,
        meta: {
            menu: 'user'
        }
    },

    {
        name: 'Account',
        path: '/account',
        component: Account,
        meta: {
            menu: ''
        }
    },
    {
        name: 'Reviews',
        path: '/reviews',
        component: Reviews,
        meta: {
            menu: 'main'
        }
    },
    {
        name: 'Catalog',
        path: '/catalog',
        component: Catalog,
        meta: {
            menu: 'user'
        }
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router