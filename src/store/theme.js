import { ref } from 'vue'
import { defineStore } from 'pinia'

export const themeStore = defineStore('themeStore', () => {
    const theme = ref(null)
    return {
        theme
    }
}, { persist: true })