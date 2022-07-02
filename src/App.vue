<script setup>
    import VHeader from './components/_header.vue' // <v-header/>
    import VFooter from './components/_footer.vue' // <v-footer/>
    import VModal from './components/_modal.vue' // <v-modal/>
    import {userFetch} from './api/api'
    const fetch = userFetch();
    fetch.fetchGetUsers()  
    // fetch.fetchPostUsers()


</script>
<template>
    <v-header/>
    <div class="wrapper">
        <main class="container">
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
</style>
