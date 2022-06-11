import { computed, reactive, toRefs, watch } from 'vue'


const userInfo = reactive({
    token: '',
    name: null,
    login: null,
    favouriteLinks: [],
    myPosts: []
}) 

export function useUser() {
    return {
        ...toRefs(userInfo)
        
    }
}