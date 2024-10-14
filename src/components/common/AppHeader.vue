<template>
  <n-layout-header bordered>
    <n-page-header>
      <template #title>
        <div>
          <n-image class="ml-4" src="vite.svg"/>
          <span class="text-2xl mb-5 font-bold">Vite</span>
        </div>
      </template>
      <template #extra>
        <n-space justify="end" :style="{ paddingTop: '8px' }">
          <ThemeToggle :attrs="{circle: true}" />
          <n-dropdown :options="options" trigger="click" @select="handleSelect">
            <n-avatar color="#3A6D8C" round class="avatar">TL</n-avatar>
          </n-dropdown>
        </n-space>
      </template>
    </n-page-header>
  </n-layout-header>
</template>
<script setup>
import { h, ref } from "vue";
import { storeToRefs } from 'pinia'
import { useI18n } from "vue-i18n";
import { useRouter } from 'vue-router'
import { NIcon, darkTheme, useMessage } from "naive-ui";
import {
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
  PersonCircleOutline as UserIcon,
  ContrastSharp as ContrastIcon,
} from "@vicons/ionicons5";

import ApiClient from '@/services/apiClient.js'

import { AuthenticationStore } from '@/store/auth/authentication.js'

import ThemeToggle from '@/utils/ThemeToggle.vue'

const { onLogoutStore } = AuthenticationStore()
const { t } = useI18n()
const message = useMessage();
const router = useRouter()

const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    });
  };
};


const options = ref([
  {
    label: "Profile",
    key: "profile",
    icon: renderIcon(UserIcon),
  },
  {
    label: "Edit Profile",
    key: "editProfile",
    icon: renderIcon(EditIcon),
  },
  {
    label: "Logout",
    key: "logout",
    icon: renderIcon(LogoutIcon),
  },
]);
const inverted = ref(false);

const onLogout =  async () => {
  const { data, status } = await ApiClient.post('/logout')
  if(status === 200) {
    message.success(t('messages.LOGOUT_SUCCESS'))
    onLogoutStore()
    router.replace({name: 'login'})
  } 

}

const handleSelect = (key) => {
  switch(key) {
    case 'logout': 
      onLogout()
      break;
  }
}
</script>
<style scoped>
.avatar {
  margin-right: 15px !important;
}
.avatar:hover {
  cursor: pointer;
}
</style>