<template>
  <div
    class="flex h-10 w-full items-center justify-between px-4 shadow-md dark:bg-black dark:bg-opacity-90"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.7em"
      height="1.7em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      class="cursor-pointer"
      @click="ui.showNav = !ui.showNav"
      v-if="!ui.showNav"
    >
      <g fill="none" stroke="#1d4ed8" stroke-linecap="round" stroke-width="2">
        <path d="M5 5L12 12L19 5">
          <animate
            fill="freeze"
            attributeName="d"
            dur="0.4s"
            values="M5 5L12 12L19 5;M5 5L12 5L19 5"
          />
        </path>
        <path d="M12 12H12">
          <animate
            fill="freeze"
            attributeName="d"
            dur="0.4s"
            values="M12 12H12;M5 12H19"
          />
        </path>
        <path d="M5 19L12 12L19 19">
          <animate
            fill="freeze"
            attributeName="d"
            dur="0.4s"
            values="M5 19L12 12L19 19;M5 19L12 19L19 19"
          />
        </path>
      </g>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.7em"
      height="1.7em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      class="cursor-pointer"
      @click="ui.showNav = !ui.showNav"
      v-else
    >
      <g fill="none" stroke="#1d4ed8" stroke-linecap="round" stroke-width="2">
        <path d="M5 5L12 5L19 5">
          <animate
            fill="freeze"
            attributeName="d"
            dur="0.4s"
            values="M5 5L12 5L19 5;M5 5L12 12L19 5"
          />
        </path>
        <path d="M5 12H19">
          <animate
            fill="freeze"
            attributeName="d"
            dur="0.4s"
            values="M5 12H19;M12 12H12"
          />
        </path>
        <path d="M5 19L12 19L19 19">
          <animate
            fill="freeze"
            attributeName="d"
            dur="0.4s"
            values="M5 19L12 19L19 19;M5 19L12 12L19 19"
          />
        </path>
      </g>
    </svg>
    <p
      class="cursor-pointer select-none rounded-md border-[1px] border-black bg-black bg-opacity-10 px-2 transition-all hover:bg-opacity-20 active:bg-opacity-25 dark:border-white dark:border-opacity-20 dark:bg-white dark:bg-opacity-20 dark:text-white dark:hover:bg-opacity-40"
    >
      Logged as <strong class="cursor-default">{{ ui.username }}</strong>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useUi } from "@/stores/useUi";

const ui = useUi();
</script>
