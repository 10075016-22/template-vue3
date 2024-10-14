import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const AuthenticationStore = defineStore('AuthenticationStore', () => {
    const oUser = ref({})
    const access_token = ref('')

    const isAuthenticated = computed(() => {
        return Object.entries(oUser.value).length > 0 && !!access_token.value
    })

    const onLogoutStore = () => {
        oUser.value = {}
        access_token.value = ''
    }
    return {
        oUser,
        access_token,
        isAuthenticated,

        onLogoutStore
    }
}, { persist: true })