import { computed, reactive, toRefs } from 'vue'

let navigations = reactive({
  products: [],
  userSettingsLinks: [],
  mails: [],
  themeMode: 'light',
  isOpenedMainNav: false,
  isOpenedSettings: false,
  mainNavLinks: []
})

function switchMainNavState() {
  navigations.isOpenedMainNav = !navigations.isOpenedMainNav
}

export function useNavigation() {
  return {
    ...toRefs(navigations),
    switchMainNavState
  }
}