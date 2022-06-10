import {createRouter, createWebHistory } from 'vue-router'
import profile from '../pages/profile.vue'
import feed from '../pages/feed.vue'
import network from '../pages/network.vue'
import jobs from '../pages/jobs.vue'
import chat from '../pages/chat.vue'
import notices from '../pages/notices.vue'

const routes = [
    {
        name: 'Profile',
        path: '/',
        component: profile,
        meta: {
            icon: '',
            name: 'profile',
            menu: 'main'
        }
    },
    {   
        name: 'Feed',
        path: '/feed',
        component: feed,
        meta: {
            icon: '',
            name: 'feed',
            menu: 'main'
        }
    },
    {
        name: 'Network',
        path: '/network',
        component: network,
        meta: {
            icon: '',
            name: 'network',
            menu: 'main'
        }
    },
    {
        name: 'Jobs',
        path: '/jobs',
        component: jobs,
        meta: {
            icon: '',
            name: 'jobs',
            menu: 'main'
        }
    },
    {
        name: 'Chat',
        path: '/chat',
        component: chat,
        meta: {
            icon: '',
            name: 'chat',
            menu: 'main'
        }
    },
    // {
    //     name: 'Notices',
    //     path: '/notices',
    //     component: notices,
    //     meta: {
    //         icon: '',
    //         name: 'notices',
    //         menu: 'main'
    //     }
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router