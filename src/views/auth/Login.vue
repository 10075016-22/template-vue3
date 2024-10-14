<template>
  <n-layout class="login-container">
    <n-layout-content class="login-content">
      <n-form ref="formRef" :model="formValue" :rules="rules" @submit.prevent="handleValidateClick" >
        <n-form-item :label="$t('login.EMAIL')" path="email">
          <n-input
            v-model:value="formValue.email"
            type="email"
            :placeholder="$t('login.PLACEHOLDER_EMAIL')"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item :label="$t('login.PASSWORD')" path="password">
          <n-input
            v-model:value="formValue.password"
            type="password"
            :placeholder="$t('login.PLACEHOLDER_PASSWORD')"
          />
        </n-form-item>
        <n-flex justify="end">
          <n-form-item>
            <n-button type="primary" native-type="submit" @click="handleValidateClick">
              {{ $t('buttons.LOGIN') }}
            </n-button>
          </n-form-item>
        </n-flex>
      </n-form>
      <n-flex justify="end">
        <n-button-group>
          <ThemeToggle :attrs="{quaternary: true}" />
          <LanguageToogle />
        </n-button-group>
      </n-flex>
    </n-layout-content>
  </n-layout>
</template>

<script setup>
import md5 from 'md5'
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from 'vue-router'

import { useMessage } from "naive-ui";

import ThemeToggle from '@/utils/ThemeToggle.vue'
import LanguageToogle from '@/utils/LanguageToggle.vue'

import ApiClient from '@/services/apiClient.js'

import { AuthenticationStore } from '@/store/auth/authentication.js'

const { oUser, access_token } = storeToRefs(AuthenticationStore())

const { t } = useI18n()
const router = useRouter()

const message = useMessage();
const formRef = ref(null);
const loading = ref(false)
const formValue = ref({
  email: "email@test.com",
  password: "test123",
});

const rules = {
  email: [
    {
      required: true,
      message: "Ingrese su correo electrónico",
      trigger: "blur",
    },
    {
      type: "email",
      message: "Ingrese un correo electrónico válido",
      trigger: "blur",
    },
  ],
  password: [
    { required: true, message: "Ingrese su contraseña", trigger: "blur" },
    {
      min: 5,
      message: "La contraseña debe tener al menos 5 caracteres",
      trigger: "blur",
    },
  ],
};

const handleValidateClick = async (e) => {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      handleLoginClick()
      
    }
  });
};

const  handleLoginClick = async () => {
  try {
    loading.value = true
    const body = {
      email: formValue.value.email,
      password: md5(formValue.value.password),
    }
    const { data, status } = await ApiClient.post('/login', body)

    if(status === 200) {
      oUser.value = data
      access_token.value = data?.access_token
      message.success(t('messages.LOGIN_SUCCESS'));
      router.replace({name: 'home'})
      loading.value = false
    }
    
  } catch (error) {
    console.log("error", error);
    loading.value = false    
  }
}
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-content {
  padding: 40px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  margin-top: 50vh;
  transform: translateY(-50%);
}
</style>