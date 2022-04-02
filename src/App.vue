<script setup>
import router from './router'
</script>
<template>
<header>
    <div class="header-nav container">
        <div class="logo">

        </div>
        <router-link
            v-for="route in router.getRoutes().filter((item)=>(item.path !== router.currentRoute.value.path || item.path == '/dashboard') )"
            :to="route.path"
            :key="route.name">
            {{route.name}}
        </router-link>
    </div>
    
    <router-view></router-view>
</header>
</template>

<style lang="sass">
    *
        margin: 0
        padding: 0

    .container 
        padding: 0 400px
        // max-width: 1200px
        // margin: 0 auto

    .logo 
        background: brown
        width: 40px
        
    .header-nav
        display: flex
        justify-content: space-between
        a
            color: black
            text-decoration: none
            font-size: .5vw 
        
    
</style>
