<template>
  <div
    class="text-md flex h-full w-full items-center justify-center font-mono font-bold"
  >
    <div
      class="flex max-w-2xl flex-col gap-5 px-10 py-4 shadow-xl dark:bg-white dark:bg-opacity-5"
    >
      <div class="flex flex-col gap-1">
        <p>Opened tabs:</p>
        <p v-for="tab in ui.tabs">{{ tab.name }} --> [{{ tab.link }}]</p>
      </div>
      <div class="h-0 w-full border-[1px] border-white"></div>
      <div class="flex flex-col gap-1">
        <p>Username --> {{ ui.username }}</p>
        <p>ShowNav --> {{ ui.showNav }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUi } from "@/stores/useUi";
const ui = useUi();
</script>
