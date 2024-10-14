<template>
  <n-config-provider :theme="theme">
    <n-notification-provider :max="3">
      <n-message-provider placement="bottom-right" closable>
        <AppHeader v-if="isAuthenticated"/>
        <LayoutApp v-if="isAuthenticated">
          <template #Menu>
            <AppMenu />
          </template>
          <template #Content>
            <n-layout-content :content-style="{ padding: '10px' }">
              <n-card>
                <n-space>
                  <router-view />
                </n-space>
              </n-card>
            </n-layout-content>
          </template>
        </LayoutApp>
        <Login v-else/>
      </n-message-provider>
    </n-notification-provider>
  </n-config-provider>
</template>
<script setup>
import { computed, watch } from "vue";
import { storeToRefs } from "pinia";

import AppHeader from "@/components/common/AppHeader.vue";
import LayoutApp from "@/layouts/LayoutApp.vue";
import AppMenu from "@/components/common/AppSidebar.vue";
import Login from '@/views/auth/Login.vue'
import FloatButton from '@/utils/FloatButton.vue'

import { themeStore } from "@/store/theme.js";
import { AuthenticationStore } from '@/store/auth/authentication.js'

const { theme } = storeToRefs(themeStore());

const { isAuthenticated } = storeToRefs(AuthenticationStore())

const cmpHeight = computed(() => {
  return window.innerHeight;
});
</script>