<template>
  <div class="w-full h-10 flex items-center px-4 shadow-md justify-between">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      viewBox="0 0 20 20"
      class="cursor-pointer select-none"
      @click="useUi().showNav = !useUi().showNav"
    >
      <path
        fill="#2563EB"
        fill-rule="evenodd"
        d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
        clip-rule="evenodd"
      />
    </svg>
    <p class="cursor-default">
      Logged as <strong class="cursor-default">horanchikk</strong>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useUi } from "@/stores/useUi";
</script>
