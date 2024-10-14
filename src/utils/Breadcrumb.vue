<template>
  <n-breadcrumb :separator="props.separator">
    <n-breadcrumb-item v-for="(item, index) in items" :key="index" v-bind="item.attrs">
      <n-icon :component="item?.icon" /> {{ item?.text }}
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>
<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => [], // {text: 'texto a mostrar', icon: Component, attrs: {Object with attributes} } 
  },
  separator: {
    type: String,
    defaul: ">",
  },
});

</script>