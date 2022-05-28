import { computed, reactive, toRefs, watch } from 'vue'
import { gql } from '@apollo/client/core'
import apolloClient from '@/plugins/ApolloClient'
import { provideApolloClient, useQuery, useResult } from '@vue/apollo-composable'

let userInfo = reactive({
  token: null,
  name: null,
  login: null,
  additional: {
    sip: null
  },
  otp: null,
  favoriteLinks: [],
  themeMode: 'light'
})

function switchTheme() {
  userInfo.themeMode = (userInfo.themeMode === 'dark') ? 'light' : 'dark'
}

function getOTP() {
  const query = provideApolloClient(apolloClient)(() => useQuery(gql`
      query getUser {
        user {
          otp
        }
      }
  `, null, () => ({ login: userInfo.login.value })))
}

function checkOTP() {

}

export function useUser() {
  return {
    ...toRefs(userInfo),
    switchTheme,
    getOTP,
    checkOTP,
    hasOTP: computed(() => userInfo.otp !== null),
    isDarkTheme: computed(() => userInfo.themeMode === 'dark'),
    isAuthorised: computed(() => userInfo.token !== null)
  }
}