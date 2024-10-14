import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { useLoadingBar } from 'naive-ui'

export const LoadingStore = defineStore('LoadingStore', () => {
    const loadingBar = useLoadingBar()
    const bLoading = ref(false)
    const type = ref(1) //1 start, 2 finish, 3 error

    watch(() => bLoading.value, () => {
        switch (type.value) {
            case 1:
                loadingBar.start()
                break;
            case 2:
                loadingBar.finish()
                break;
            case 3:
                loadingBar.error()
                break;
        }
    })

    return {
        bLoading,
        type
    }
}, { persist: false })