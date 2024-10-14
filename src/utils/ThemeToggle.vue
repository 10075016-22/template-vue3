<template>
  <n-button @click="__onToggleTheme" v-bind="attrs">
    <n-icon>
      <ContrastIcon />
    </n-icon>
  </n-button>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { themeStore } from "@/store/theme.js";
import { darkTheme } from "naive-ui";
import { ContrastSharp as ContrastIcon } from "@vicons/ionicons5";

const props = defineProps({
  attrs: {
    type: Object,
    default: () => {},
  },
});

const { theme } = storeToRefs(themeStore());

const __onToggleTheme = () => {
  theme.value = theme.value === null ? darkTheme : null;
};
</script>