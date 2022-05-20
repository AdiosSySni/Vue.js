import {createRouter, createWebHistory } from 'vue-router'
import Profile from '../pages/Profile.vue'
import Communities from '../pages/Communities.vue'
import Messanger from '../pages/Messanger.vue'
import Feed from '../pages/Feed.vue'


const routes = [

    {
        name: 'Profile',
        path: '/profile',
        component: Profile,
        meta: {
            name: 'Profile',
            menu: 'main'
        }
    },
    {   
        name: 'Messanger',
        path: '/messanger',
        component: Messanger,
        meta: {
            name: 'Network',
            menu: 'main'
        }
    },
    {
        name: 'Communities',
        path: '/communities',
        component: Communities,
        meta: {
            name: 'Chat',
            menu: 'main'
        }
    },
    {
        name: 'Feed',
        path: '/feed',
        component: Feed,
        meta: {
            name: 'Feed',
            menu: 'main'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router