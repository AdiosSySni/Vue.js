// import { computed, reactive, toRefs, watch } from 'vue'

// const userInfo = reactive({
//     token: '',
//     name: null,
//     login: null,
//     favouriteLinks: [],
//     myPosts: []
// }) 

// export function useUser() {
//     return {
//         ...toRefs(userInfo)
//     }
// }

// import { defineStore } from 'pinia'
// import axios from "axios"
// export const useUserStore = defineStore("user", {
//     state: () => ({
//         users: [],
//     }),
//     getters: {
//       getUsers(state){
//           return state.users
//         }
//     },
//     actions: {
//       async fetchUsers() {
//         try {
//           const data = await axios.get('https://jsonplaceholder.typicode.com/users')
//             this.users = data.data
//           }
//           catch (error) {
//             alert(error)
//             console.log(error)
//         }
//       }
//     },
// })
