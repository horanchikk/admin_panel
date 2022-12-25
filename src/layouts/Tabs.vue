<template>
  <div class="w-full h-12 flex gap-5 overflow-y-hidden overflow-x-scroll">
    <TransitionGroup name="tabs" mode="in-out">
      <!-- todo: better animation, when closing tabs -->
      <div
        v-for="tab in tabs"
        :key="tabs.indexOf(tab)"
        class="w-40"
      >
        <router-link :to="tab.link">
          <div class="px-5 py-1 flex items-center justify-between cursor-pointer rounded-md bg-blue-600 select-none text-white bg-opacity-80 hover:bg-opacity-70 transition-all overflow-visible">
            <div>{{ tab.name }}</div>
            <div
                class="hover:opacity-70 active:opacity-40 cursor-pointer transition-all"
                v-if="tab.removable"
                @click="tabs.splice(tabs.indexOf(tab), 1)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                <path
                    d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z"
                    fill="#ffffff"
                />
              </svg>
            </div>
          </div>
        </router-link>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

interface OpenedTabs {
  name: string
  link: string
  removable: boolean
}

const tabs: Ref<OpenedTabs[]> = ref([
  {
    name: "Home",
    link: "/",
    removable: false,
  },
  {
    name: "Components",
    link: "/components",
    removable: true,
  },
  {
    name: "Stats",
    link: "/stats",
    removable: true,
  },
  {
    name: "System",
    link: "/system",
    removable: true,
  }
]);
</script>
