<script setup>
    import VHeader from './components/_header.vue' // <v-header/>
    import VFooter from './components/_footer.vue' // <v-footer/>
    // import VAsidenavbar from './components/_aside_navbar.vue' //<v-asidenavbar/>
    import VModal from './components/_modal.vue' // <v-modal/>
</script>
<template>
    <v-header/>
    <div class="wrapper">
        <main class="main container">
            <router-view/>
        </main>
    </div>
    <v-footer/>
</template>

<style lang="sass">
@import './assets/sass/style'
#app 
    background: $backgroundColor
.wrapper
    margin-top: 20px
    background: $backgroundColor
    flex: 1 1 auto !important
.main
    display: grid
    justify-content: space-between
    grid-template-columns: 72% 25%


        
</style>
