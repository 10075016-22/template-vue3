import '@/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import naive from 'naive-ui'

import router from './router'

// vue-i18n
import { createI18n } from 'vue-i18n'
import { languages } from "@/locales";
const i18n = createI18n({
  locale: 'es',
  legacy: false,
  messages: languages
})


import { createPinia } from 'pinia'

// Persistencia createPinia
import { createPersistedState } from 'pinia-plugin-persistedstate'

// reset tiendas
const pinia = createPinia()
pinia.use(createPersistedState({
  storage: sessionStorage,
}))
// Pinia multiple tab
import { PiniaSharedState } from 'pinia-shared-state'
pinia.use(
  PiniaSharedState({
    enable: true,
    initialize: true,
    type: 'localstorage',
  }),
)


const app = createApp(App, {
    setup() {
    }
})

app.use(router)
    .use(pinia)
    .use(naive)
    .use(i18n)

app.mount('#app')
