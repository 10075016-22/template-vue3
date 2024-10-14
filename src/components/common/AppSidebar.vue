<template>
  <n-menu
    :collapsed="collapsed"
    :collapsed-width="64"
    :collapsed-icon-size="22"
    :options="menuOptions"
    :render-label="renderMenuLabel"
    :render-icon="renderMenuIcon"
    :expand-icon="expandIcon"
    responsive
  />
</template>
<script setup>
import { defineComponent, h, ref } from "vue";
import { NIcon } from "naive-ui";
import { BookmarkOutline, CaretDownOutline } from "@vicons/ionicons5";

const collapsed = ref(false);

const renderMenuLabel = (option) => {
  if ("href" in option) {
    return h("a", { href: option.href, target: "_blank" }, [option.label]);
  }
  return option.label;
};
const renderMenuIcon = (option) => {
  if (option.key === "sheep-man") return true;
  if (option.key === "food") return null;
  return h(NIcon, null, { default: () => h(BookmarkOutline) });
};
const expandIcon = () => {
  return h(NIcon, null, { default: () => h(CaretDownOutline) });
};
const menuOptions = [
  {
    label: "Modulo 1",
    key: "hear-the-wind-sing",
  },
  {
    label: "Modulo 2",
    key: "Dance Dance Dance",
    children: [
      {
        label: "Item 1",
        key: "food",
        children: [
          {
            label: "Sub item 1",
            key: "sandwich",
          },
        ],
      },
    ],
  },
  {
    label: "Modulo 3",
    key: "the-past-increases-the-future-recedes",
  },
];
</script>