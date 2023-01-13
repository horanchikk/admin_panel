<template>
  <div
    class="menuBack h-full w-[170px] overflow-x-scroll p-5 text-xl shadow-md shadow-black"
  >
    <div
      v-for="item in menu"
      :key="menu.indexOf(item)"
      :class="`cursor-pointer text-left ${
        item.link !== $route.path ? 'text-white' : 'text-blue-300'
      } transition-all hover:opacity-70 active:opacity-60`"
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
import router from "@/router";

interface menuItem {
  name: string;
  link: string;
}

const ui = useUi();
const menu: Ref<menuItem[]> = ref([]);

for (let route of router.getRoutes()) {
  menu.value.push({
    name: route.name,
    link: route.path,
  });
}
</script>
