<template>
  <n-popselect v-model:value="value" :options="menuOptions" trigger="click" small>
    <n-button v-bind="attrs" quaternary type="info">
      <n-icon>
        <Lang />
      </n-icon>
    </n-button>
    <template #empty>
      <n-icon class="mt-1">
        <Bug />
      </n-icon>
      Language not configured
    </template>
  </n-popselect>
</template>
<script setup>
import { LanguageSharp as Lang, BugOutline as Bug } from "@vicons/ionicons5";
import { NIcon } from "naive-ui";
import { defineComponent, h, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

const props = defineProps({
  attrs: {
    type: Object,
    default: () => ({}),
  },
});

const { locale  } = useI18n()

const value = ref("es");
const menuOptions = [
  {
    label: "ES",
    value: "es",
  },
  {
    label: "EN",
    value: 'en'
  }
];

watch(() => value.value, () => {
    locale.value = value.value
})

const renderIcon = () => {
  return h(NIcon, null, {
    default: () => h(CashIcon),
  });
};
</script>