import { computed, reactive, toRefs } from 'vue'

let mails = reactive({
  inbox: [],
  myFolders: [],
  outbox: [],
  archive: []
})

export function useMails() {
  return {
    ...toRefs(mails),
    newMailsCount: computed(() => mails.inbox.filter((item) => item.state === 'new').length)
  }
}