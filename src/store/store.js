import { computed, reactive, toRefs, watch } from 'vue'
import {defineStore} from 'pinia'

export const useUserInfo = defineStore('settings', {
  state: () => {
    return {
      userId: null,
      name: null
    }
  },

  getters: {
    getUser: (state) => state
  },

  actions: {
    async setUserInfo() {
      const userData = await fetch(`https://jsonplaceholder.typicode.com/users/2`)
      .then(response => response.json())
      .then((data => pushUserInfo(data))) 
      .catch(error => console.log(error))
      .finally(() => {console.log('end') })
      return userData
    },
  }
})

function pushUserInfo(data) {
  console.log(data)
  useUserInfo().userId = data.id
  useUserInfo().name = data.name
}



// export const useUserInfo = defineStore('settings', {
//   state: () => {
//     return {
//       userId: null,
//       name: null
//     }
//   },

//   getters: {
//     // getUser(state) {
//     //   return state
//     // }
//   },

//   actions: {
//     fetchUserInfo() {
//       fetch(`https://jsonplaceholder.typicode.com/users/2  `)
//        .then(response => response.json())
//        .then((data) =>  {
       
//        }) 
//        .catch(error => console.log(error))
//        .finally(() => {console.log('end') })
//     },

//     pushUserInfo(data) {
//       this.userId = data.id
//       this.name = data.name
//     },
    
//   }

// })


// const userInfo = reactive({
//     token: '',
//     name: null,
//     login: null,
//     favouriteLinks: [],
//     myPosts: []
// }) 

// function getUsers() {

// }

// export function useUser() {
//     return {
//         ...toRefs(userInfo)
//     }
// }


