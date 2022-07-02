<script setup>
  import {userFetch} from '../api/api'
  import {useUserInfo} from '../store/store'

  const userStore = useUserInfo()
  const getUserData = userStore.getUser
  userStore.setUserInfo()
  console.log(getUserData.name)
  
  // const fetch = userFetch();
  // const users = fetch.getUsers()
  // const filterUsers = fetch.getFilterUsers(1)
  // console.log(filterUsers)

    // const store = useUserStore
    // console.log(store.getUsers())
</script>
<template>  
    <div class="chat">
      <p > ID: {{getUserData.name}}</p>
      <p v-for="user in users">{{user.name}}</p>
    </div>
</template>

<style lang="sass">
@import '../assets/sass/style'



        
</style>