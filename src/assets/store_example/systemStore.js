import { ref, computed, toRefs } from 'vue'

export const systemStore = {
    
}

export function useSystem() {
  return {
    ...toRefs(systemStore)
  }
}