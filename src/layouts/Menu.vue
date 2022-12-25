<template>
  <div class="w-56 h-full bg-black menuBack text-white">
    <div v-for="item in menu" :key="menu.indexOf(item)" class="text-center cursor-default">
      {{ item.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

interface menuItem {
  name: string
  link: string
}

const menu: Ref<menuItem[]> = ref([
  {
    name: "Статистика",
    link: "/stats",
  },
])
</script>