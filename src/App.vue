<script setup>
    import router from './router'
    import AsideNavbar from './components/Aside_navbar.vue'
    import {userFetch} from './store/index'
    import {userStore} from './store/store'

    const {person} = userStore();
 
    const storeFetch = userFetch();
    storeFetch.fetchGetUsers() 
    storeFetch.fetchPostUsers()
    storeFetch.fetchPatchUsers()
    console.log(storeFetch.getUsers())
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
            <div class="main_content">
                <router-view />
            </div>

            <aside-navbar v-if="$route.name == 'Profile' || $route.name == 'Feed'"/>
        </div>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer_logo">
                <img src="../src/assets/images/Logo.svg" alt="#">
                <p>LinkedIn</p>
            </div>
            <div class="footer_nav">
                <h1>Navigation</h1>
                <div class="footer_nav_inner_wrapper">
                    <div class="footer_nav_item">
                        <a href="#">About</a>
                        <a href="#">Careers</a>
                        <a href="#">Advertising</a>
                        <a href="#">Small Business</a>
                    </div>

                    <div class="footer_nav_item">
                        <a href="#">About</a>
                        <a href="#">Careers</a>
                        <a href="#">Advertising</a>
                        <a href="#">Small Business</a>
                    </div>

                    <div class="footer_nav_item">
                        <a href="#">About</a>
                        <a href="#">Careers</a>
                        <a href="#">Advertising</a>
                        <a href="#">Small Business</a>
                    </div>
                </div>
            </div>

            <div class="footer_fast_access">
                <h1>Fast access</h1>
                <button id="questions"></button>
                <button id="settings"></button>
            </div>

            <div class="footer_lang">
                <h1>Language</h1>
                <select name="lang" id="lang">
                    <option value="English">English</option>
                </select>
            </div>
        </div>
    </footer>

    
</template>

<style lang="sass">
    @font-face 
        font-family: Gotham
        src: url(@/assets/fonts/gothampro.woff2)

    @font-face 
        font-family: Gotham_medium
        src: url(@/assets/fonts/gothampro_medium.woff2)

    *
        margin: 0
        padding: 0

    body 
        background: #F7F9FB

    // #app 
    //     display: flex
    //     flex-direction: column
    //     gap: 40px
    //     text-transform: uppercase
    .container 
        padding:0 30px
        max-width: 1180px
        margin: 0 auto
    h1,h2
        font-family:  Gotham_medium
        color: black
        font-size: 18px
        line-height:17px
        font-weight: medium
        
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
        line-height: 11px

    .logo 
        max-width: 130px
        padding: 17px 40px 17px 44px

    .logo img 
        height: 46px

    .header
        background: white
        &_content
            min-height: 80px
            display: flex
            align-items: center
        &_nav
            display: flex
            padding: 0 13px
        &_nav a
            text-align: center
            padding: 0 24px
        &_search 
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
        &:before 
            content: "\f002"
            font-family: FontAwesome
            font-size: 22px
            font-weight: 400
            color: #0275B1

    .main .container 
        margin-top: 40px
        display: grid
        grid-template-columns: 1fr 0.35fr
        // grid-template-rows: 360px 360px
        // grid-template-rows: minmax(400px 1000px) minmax(200px 500px)
        gap: 40px
        &_content
            min-height: 100% 
            margin-top: 39px   
    .footer .container
        margin-top: 9px
        // max-height: 215px
        padding: 30px 0 53px 0
        display: flex
        justify-content: space-between
    .footer
        border-top: 1px solid #E7E7E7
        margin-top: 9px
        background: linear-gradient(180deg, rgba(241, 244, 248, 0.8) 0%, rgba(241, 244, 248, 0) 100%)
        h1,a,p
            font-size: 14px
            line-height: 11px
            font-family: Gotham
        &_logo img
            height: 46px
        &_logo 
            p 
                margin-top: 12px
                font-family: Gotham_medium
        &_nav
            h1 
                margin-bottom: 30px
            &_item
                display: flex
                flex-direction: column
                justify-content: space-between
            &_inner_wrapper
                width: 485px
                min-height: 86px
                display: flex
                justify-content: space-between

</style>
