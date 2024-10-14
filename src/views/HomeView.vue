<template>
  <div>
    <Breadcrumb :items="itemsBreadcrumb" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import Breadcrumb from "@/utils/Breadcrumb.vue";
import { HomeOutline } from "@vicons/ionicons5";
const itemsBreadcrumb = [
  {
    text: "Home",
    icon: HomeOutline,
    attrs: {},
  },
];
</script>