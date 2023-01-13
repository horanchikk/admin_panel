<template>
  <div
    class="text-md flex h-full w-full items-center justify-center font-mono font-bold"
  >
    <div
      class="flex max-w-xl flex-col gap-4 rounded-md border-[1px] border-black border-opacity-10 bg-black bg-opacity-10 px-8 py-4 shadow-xl transition-all hover:border-opacity-30"
    >
      <div class="flex items-center gap-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35px"
          height="35px"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16ZM68 96a12 12 0 1 1 12-12a12 12 0 0 1-12 12Zm40 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z"
          />
        </svg>
        <p>{{ resolution }}</p>
      </div>
      <div class="flex items-center gap-6">
        <div class="h-[35px] w-[35px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35px"
            height="35px"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M215.5 39.5h-175a17 17 0 0 0-17 17v143a17 17 0 0 0 17 17h175a17 17 0 0 0 17-17v-143a17 17 0 0 0-17-17ZM121 134.2l-40 32a7.9 7.9 0 0 1-5 1.8a7.8 7.8 0 0 1-6.2-3a7.9 7.9 0 0 1 1.2-11.2l32.2-25.8L71 102.2a8 8 0 1 1 10-12.4l40 32a7.9 7.9 0 0 1 0 12.4Zm59 33.8h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16Z"
            />
          </svg>
        </div>
        <p>{{ ua }}</p>
      </div>
      <div class="flex items-center gap-6">
        <div class="h-[35px] w-[35px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35px"
            height="35px"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M192 20H64a28.1 28.1 0 0 0-28 28v160a28.1 28.1 0 0 0 28 28h128a28.1 28.1 0 0 0 28-28V48a28.1 28.1 0 0 0-28-28Zm4 188a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4ZM144 76a16 16 0 1 1-16-16a16 16 0 0 1 16 16Z"
            />
          </svg>
        </div>
        <p>Phone: {{ uaData.mobile }}</p>
      </div>
      <div class="flex items-center gap-6">
        <div class="h-[35px] w-[35px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35px"
            height="35px"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M192 24H64a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16Zm-64 168a12 12 0 1 1 12-12a12 12 0 0 1-12 12Zm32-80H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16Zm0-32H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16Z"
            />
          </svg>
        </div>
        <p>Platform: {{ uaData.platform }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
const ua = ref(window.navigator.userAgent);
const uaData = ref(window.navigator.userAgentData);
const resolution = ref(
  `Resolution: ${window.screen.width} x ${window.screen.height}`
);
</script>
