<template>
  <div class="w-56 h-full p-5 bg-black menuBack text-xl overflow-x-scroll">
    <div
      v-for="item in menu"
      :key="menu.indexOf(item)"
      :class="`text-left cursor-pointer ${
        item.link !== $route.path ? 'text-white' : 'text-blue-300'
      } hover:opacity-70 active:opacity-60 transition-all`"
    >
      <p
        v-if="item.link !== $route.path"
        @click="
          $router.push(item.link);
          ui.tabs.find(({ link }) => link === item.link) === undefined
            ? ui.tabs.push({
                name: item.name,
                link: item.link,
                removable: false,
              })
            : undefined;
          ui.updateTabs();
        "
      >
        {{ item.name }}
      </p>
      <p v-else>{{ item.name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUi } from "@/stores/useUi";
import type { Ref } from "vue";

interface menuItem {
  name: string;
  link: string;
}

const ui = useUi();
const menu: Ref<menuItem[]> = ref([
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Stats",
    link: "/stats",
  },
  {
    name: "Settings",
    link: "/settings",
  },
  {
    name: "Components",
    link: "/components",
  },
  {
    name: "System",
    link: "/system",
  },
]);
</script>
