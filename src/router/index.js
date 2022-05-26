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
            icon: '',
            name: 'Profile',
            menu: 'main'
        }
    },
    {   
        name: 'Messanger',
        path: '/messanger',
        component: Messanger,
        meta: {
            icon: '',
            name: 'Network',
            menu: 'main'
        }
    },
    {
        name: 'Communities',
        path: '/communities',
        component: Communities,
        meta: {
            icon: '',
            name: 'Chat',
            menu: 'main'
        }
    },
    {
        name: 'Feed',
        path: '/feed',
        component: Feed,
        meta: {
            icon: '',
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