<script setup>
    import {userFetch} from '../api/api'
    const fetch = userFetch();
    const users = fetch.getUsers()
   
</script>
<template>  
    <div class="chat">
      <p v-for="user in users">{{user.name}}</p>
    </div>
</template>

<style lang="sass">
@import '../assets/sass/style'



        
</style>