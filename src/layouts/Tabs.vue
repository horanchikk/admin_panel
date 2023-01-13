<template>
  <div
    class="flex h-12 w-full items-center gap-5 overflow-y-hidden overflow-x-scroll"
  >
    <TransitionGroup name="tabs" mode="out-in">
      <div v-for="tab in ui.tabs" :key="ui.tabs.indexOf(tab)" class="w-40">
        <div
          v-if="tab.link !== $route.path"
          class="flex select-none items-center justify-between overflow-visible rounded-md bg-blue-700 bg-opacity-80 px-5 py-1 text-white transition-all hover:bg-opacity-70"
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
            class="cursor-pointer transition-all hover:opacity-70 active:opacity-40"
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
          class="flex select-none items-center justify-between overflow-visible rounded-md bg-blue-400 bg-opacity-80 px-5 py-1 text-white transition-all hover:bg-opacity-70"
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
