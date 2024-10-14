<template>
  <n-layout has-sider>
    <n-layout-sider
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      show-trigger
      :content-style="{ height: `${cmpHeight}px` }"
      bordered
    >
      <slot name="Menu"></slot>
    </n-layout-sider>
    <n-layout>
      <slot name="Content"></slot>
    </n-layout>
  </n-layout>
</template>
<script setup>
import { computed } from "vue";
import { NIcon } from "naive-ui";
const cmpHeight = computed(() => {
  return window.innerHeight;
});
</script>