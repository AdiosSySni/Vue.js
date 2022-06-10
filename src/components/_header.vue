<script setup>
    import router from '../router'
</script>
<template>

<header class="header">
  <div class="header_logo">
    <a href="#">
      <img src="../assets/images/img_header/Logo.png" alt="logo">
    </a>
  </div>  

  <div class="header_menu">
    <router-link
      v-for="route in router.getRoutes()"
        :to="route.path"
        :key="route.name">
        {{route.meta.name}}
        {{route.meta.icon}}
    </router-link>
  </div>

  <div class="header_search">
    <a href="#">
      <img src="../assets/images/img_header/search.png" alt="search">
    </a>
    <input type="text" value="Search">
  </div>

   <div class="header_profile">
     <div class="header_profile_img">
       <!-- <img src="../assets/images/img_header/Rectangle.png" alt="avatar"> -->
     </div>
     <div class="header_profile_info">
       <a href="#">D. Kargaev <p>YOU</p></a>

        <a href="#" id="views">367 views today  <p id="views_increase"> +32</p></a>
     </div>
     
   </div>

   <div class="header_other">
      <a href="#">OTHER</a>
   </div>
 
</header>

    
</template>

<style lang="sass" scoped>
@import '../assets/sass/style'
.header
  display: flex
  justify-content: space-between
  height: 80px
  background: $white
  &_logo
    display: flex
    align-items: center
    justify-content: center
    max-width: 130px
    width: 100%
    border-right: 1px solid #F4F4F4
  &_menu
    display: flex
    justify-content: space-evenly
    align-items: center
    max-width: 550px
    width: 100%
    a
      text-align: center
      text-transform: uppercase
  &_search
    position: relative
    max-width: 367px
    width: 100%
    border-right: 1px solid #F4F4F4
    border-left: 1px solid #F4F4F4
    img 
      position: absolute
      top: 28px
      left: 20px

    input
      outline: none
      height: 100%
      width: 100%
      padding: 0 0 0 74px
      font-size: 18px
      color: #CECECE
  &_profile
    display: flex
    align-items: center
    max-width: 330px
    width: 100%
    justify-content: center
    &_img
      border-radius: 26px
      width: 42px
      height: 42px
      background: gray
    &_info
      margin: 0 0 0 15px
      height: 33px
      display: flex
      justify-content: space-between
      flex-direction: column
      a
        display: flex
        p
          color: rgba(24, 24, 24, 0.2)
          margin: 0 0 0 10px
      #views
        color: #747474  
        font-family: $fontRegularSecondary
      #views_increase
        color: #02B033  
        font-family: $fontMediumMain
        margin: 0 0 0 4px
        p 
          margin-left: 8px
  &_other 
    max-width: 90px
    width: 100%
    margin:0 40px 0 0
    display: flex
    justify-content: center
    align-items: center
    border-left: 1px solid #F4F4F4
    border-right: 1px solid #F4F4F4
</style>
