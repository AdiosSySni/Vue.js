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
            name: 'Профиль',
            menu: 'main'
        }
    },
    {   
        name: 'Messanger',
        path: '/messanger',
        component: Messanger,
        meta: {
            name: 'Мессенджер',
            menu: 'main'
        }
    },
    {
        name: 'Communities',
        path: '/communities',
        component: Communities,
        meta: {
            name: 'Сообщества',
            menu: 'main'
        }
    },
    {
        name: 'Feed',
        path: '/feed',
        component: Feed,
        meta: {
            name: 'Новости',
            menu: 'main'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router