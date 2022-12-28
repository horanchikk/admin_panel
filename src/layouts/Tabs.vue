<template>
  <div class="w-full h-12 flex gap-5 overflow-y-hidden overflow-x-scroll">
    <TransitionGroup name="tabs" mode="out-in">
      <!-- todo: better animation, when closing tabs -->
      <div v-for="tab in ui.tabs" :key="ui.tabs.indexOf(tab)" class="w-40">
        <div
          v-if="tab.link !== $route.path"
          class="px-5 py-1 flex items-center justify-between rounded-md bg-blue-700 select-none text-white bg-opacity-80 hover:bg-opacity-70 transition-all overflow-visible"
        >
          <div
            class="cursor-pointer"
            @click="
              $router.push(tab.link);
              ui.updateTabs();
              tab.removable = false;
            "
          >
            {{ tab.name }}
          </div>
          <div
            class="hover:opacity-70 active:opacity-40 cursor-pointer transition-all"
            @click="ui.tabs.splice(ui.tabs.indexOf(tab), 1)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path
                d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </div>
        <div
          class="px-5 py-1 flex items-center justify-between rounded-md bg-blue-400 select-none text-white bg-opacity-80 hover:bg-opacity-70 transition-all overflow-visible"
          v-else
        >
          <div
            class="cursor-pointer"
            @click="
              $router.push(tab.link);
              ui.updateTabs();
              tab.removable = false;
            "
          >
            {{ tab.name }}
          </div>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { useUi } from "@/stores/useUi";
const ui = useUi();
</script>
