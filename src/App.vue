<script setup>
    import router from './router'
    import AsideNavbar from './components/Aside_navbar.vue'
    
</script>
<template>


<header class="header">
    <div class="container">
        <div class="header_content">
            <div class="logo">
                <img src="../src/assets/images/Logo.svg" alt="#">
            </div>

            <div class="header_nav">
                <router-link
                    v-for="route in router.getRoutes()"
                    :to="route.path"
                    :key="route.name">
                    {{route.meta.name}}
                </router-link>
            </div>
            <form action="">
                <input class="header_search" type="text" placeholder="Search">
                <button class="search_btn"></button>
            </form>
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
        font-family: Gotham
        src: url(@/assets/fonts/gothampro.woff2)

    @font-face 
        font-family: Gotham_medium
        src: url(@/assets/fonts/gothampro_medium.woff2)
    
    h1 
        font-family:  Gotham_medium
        color: black
        font-size: 24px
        line-height:17px
        font-weight: 500
        
    a, input
        font-family: Gotham_medium
        text-decoration: none
        color: black 
        font-weight: 500
        font-size: 16px
        line-height: 12px
        outline: none
        border: none

    p
        font-family: Gotham
        color: black 
        font-weight: 400
        font-size: 12px

    .logo 
        max-width: 130px
        padding: 17px 40px 17px 44px

    .logo img 
        height: 46px

    .header
        background: white
           
    .header_content
        min-height: 80px
        display: flex
        align-items: center

    .header_nav
        display: flex
        padding: 0 13px

    .header_nav a
        text-align: center
        padding: 0 24px

    .header_search 
        padding:33px 33px 33px 74px
        // max-width: 367px

    form 
        position: relative

    .search_btn
        position: absolute
        top: 30px
        left: 33px
        border: none
        background: none
        cursor: pointer

    .search_btn:before 
        content: "\f002"
        font-family: FontAwesome
        font-size: 22px
        font-weight: 400
        color: #0275B1

    .main .container 
        display: grid
        grid-template-columns: 1fr 0.35fr
        grid-template-rows: 400px 400px
        // grid-template-rows: minmax(400px 1000px) minmax(200px 500px)
        gap: 40px

</style>
