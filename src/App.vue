<script setup>
    import router from './router'
    import AsideNavbar from './components/Aside_navbar.vue'
</script>
<template>

<header class="header">
    <div class="container">
        <div class="header_content">
            <div class="logo">
                <img src="" alt="">
            </div>

            <div class="header_nav">
                <router-link
                    v-for="route in router.getRoutes()"
                    :to="route.path"
                    :key="route.name">
                    {{route.meta.name}}
                </router-link>
            </div>

            <input class="header_search" type="text" placeholder="Искать">

        </div>
    </div>
</header>

    <main class="main">
        <div class="container">
            <router-view />
            <aside-navbar v-if="$route.name == 'Profile' || $route.name == 'Feed'"
            
            />
        </div>
    </main>

    <footer class="footer">

    </footer>

    
</template>

<style lang="sass">
    *
        margin: 0
        padding: 0

    body 
        background: #F7F9FB

    #app 
        display: flex
        flex-direction: column
        gap: 40px

    .container 
        padding:0 30px
        max-width: 1180px
        margin: 0 auto

    @font-face 
        font-family: Arimo
        src: url(@/assets/fonts/Arimo-Regular.woff2)

    @font-face 
        font-family: EB Garamond
        src: url(@/assets/fonts/EBGaramond-Medium.woff2)
    
    h1 
        font-family:  EB Garamond
        color: black
        font-size: 24px
        font-weight: 500

    input 
        outline: none
        border: none

    p,a
        font-family: Arimo 
        text-decoration: none
        color: black 
        font-weight: 400

    .logo 
        background: brown
        width: 40px
           
    .header_content
        min-height: 80px
        font-family: EB Garamond
        display: flex
        align-items: center
        justify-content: space-between

    .header_nav 
        max-width: 500px
        display: flex
        gap: 10px
        padding: 0 10px

    .header_nav a
        text-align: center

    


    main .container 
        display: grid
        grid-template-columns: 850px 290px
        grid-template-rows: 400px 400px
        // grid-template-rows: minmax(400px 1000px) minmax(200px 500px)
        gap: 40px

</style>
