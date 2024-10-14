<template>
  <n-float-button :left="cmpWidth" :top="cmpHeight" position="fixed">
    <n-icon>
      <InfoIcon />
    </n-icon>
  </n-float-button>
</template>
<script setup>
import { InformationCircleOutline as InfoIcon } from "@vicons/ionicons5";
import { computed } from "vue";

const cmpWidth = computed(() => {
    return window.innerWidth-80
})

const cmpHeight = computed(() => {
    return window.innerHeight - 80
})
    
</script>