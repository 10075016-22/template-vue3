<template>
  <n-icon>
    <component :is="props.icon" />
  </n-icon>
</template>

<script setup>
const props = defineProps({
  icon: Object,
})
</script>