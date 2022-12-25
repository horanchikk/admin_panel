<template>
  <div class="w-full h-12 flex gap-5 overflow-x-scroll">
    <TransitionGroup name="tabs" mode="in-out">
      <!-- todo: better animation, when closing tabs -->
      <div
        v-for="tab in tabs"
        :key="tabs.indexOf(tab)"
        class="w-40 px-5 flex items-center justify-between cursor-default rounded-md bg-blue-800 bg-opacity-50 hover:bg-opacity-40 transition-all"
      >
        <div>{{ tab.name }}</div>
        <div
          class="hover:opacity-70 active:opacity-40 cursor-pointer transition-all"
          @click="tabs.splice(tabs.indexOf(tab), 1)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
            <path
              d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z"
              fill="#ffffff"
            />
          </svg>
        </div></div
    ></TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

interface OpenedTabs {
  name: string;
}

const tabs: Ref<OpenedTabs[]> = ref([
  { name: "Tab 1" },
  { name: "Tab 2" },
  { name: "Tab 3" },
  { name: "Tab 4" },
  { name: "Tab 5" },
  { name: "Tab 6" },
  { name: "Tab 7" },
  { name: "Tab 8" },
  { name: "Tab 8" },
  { name: "Tab 8" },
  { name: "Tab 8" },
  { name: "Tab 8" },
  { name: "Tab 8" },
  { name: "Tab 8" },
  { name: "Tab 8" },
  { name: "Tab 9" },
  { name: "Tab 10" },
  { name: "Tab 11" },
  { name: "Tab 12" },
  { name: "Tab 13" },
]);
</script>
