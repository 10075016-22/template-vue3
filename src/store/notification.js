import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { useNotification } from 'naive-ui'

export const NotificationStore = defineStore('NotificationStore', () => {
    const notification = useNotification();

    const max = ref(3)
    const location = ref('top-right') // top-left, top-right, bottom-left, bottom-right, bottom, top
    const open = ref(false)
    const type = ref('info')  // info, success, warning, error
    const title = ref('')
    const message = ref('')
    const duration = ref(2500) // ms

    const notify = () => {
        notification[type.value]({
            content: title.value,
            meta: message.value,
            duration: duration.value,
            keepAliveOnHover: true
        });
    }

    watch(() => open.value, () => notify() )
    return {
        max,
        location,
        open,
        type,
        title,
        message,
        duration,

        notify
    }
}, { persist: false })