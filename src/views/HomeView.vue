<template>
  <div
    class="flex h-full w-full flex-col items-center justify-center text-xl font-bold"
  >
    <div class="flex flex-col items-center gap-5">
      <p class="text-2xl font-bold tracking-wide">
        Welcome, {{ ui.username }}!
      </p>
      <div class="flex gap-5">
        <button
          class="flex flex-col items-center gap-2 rounded-md border-2 border-black px-5 py-2 opacity-50 transition-all hover:-translate-y-[3px] hover:opacity-90 dark:border-white"
          @click="
            $router.push('/system');
            ui.tabs.find(({ link }) => link === '/system') === undefined
              ? ui.tabs.push({
                  name: 'System',
                  link: '/system',
                  removable: false,
                })
              : undefined;
            ui.updateTabs();
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60px"
            height="60px"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M21.004 2.004h-18a2.006 2.006 0 0 0-2 2v12a2.006 2.006 0 0 0 2 2h7v2h-2v2h8v-2h-2v-2h7a2.006 2.006 0 0 0 2-2v-12a2.006 2.006 0 0 0-2-2ZM10.756 13.67h-.001l-4.75-4.75L7.42 7.507l3.336 3.336l5.835-5.836l1.415 1.415Z"
            />
          </svg>
          System
        </button>

        <button
          class="flex flex-col items-center gap-2 rounded-md border-2 border-black px-5 py-2 opacity-50 transition-all hover:-translate-y-[3px] hover:opacity-90 dark:border-white"
          @click="
            $router.push('/components');
            ui.tabs.find(({ link }) => link === '/components') === undefined
              ? ui.tabs.push({
                  name: 'Components',
                  link: '/components',
                  removable: false,
                })
              : undefined;
            ui.updateTabs();
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60px"
            height="60px"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m3.553 18.895l4 2a1.001 1.001 0 0 0 .894 0L12 19.118l3.553 1.776a.99.99 0 0 0 .894.001l4-2c.339-.17.553-.516.553-.895v-5c0-.379-.214-.725-.553-.895L17 10.382V6c0-.379-.214-.725-.553-.895l-4-2a1 1 0 0 0-.895 0l-4 2C7.214 5.275 7 5.621 7 6v4.382l-3.447 1.724A.998.998 0 0 0 3 13v5c0 .379.214.725.553.895zM8 12.118l2.264 1.132l-2.913 1.457l-2.264-1.132L8 12.118zm4-2.5l3-1.5v2.264l-3 1.5V9.618zm6.264 3.632l-2.882 1.441l-2.264-1.132L16 12.118l2.264 1.132zM8 18.882l-.062-.031V16.65L11 15.118v2.264l-3 1.5zm8 0v-2.264l3-1.5v2.264l-3 1.5zM12 5.118l2.264 1.132l-2.882 1.441l-2.264-1.132L12 5.118z"
            />
          </svg>
          Components
        </button>
        <button
          class="flex flex-col items-center gap-2 rounded-md border-2 border-black px-5 py-2 opacity-50 transition-all hover:-translate-y-[3px] hover:opacity-90 dark:border-white"
          @click="
            $router.push('/debug');
            ui.tabs.find(({ link }) => link === '/Debug') === undefined
              ? ui.tabs.push({
                  name: 'Debug',
                  link: '/debug',
                  removable: false,
                })
              : undefined;
            ui.updateTabs();
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60px"
            height="60px"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M13.875 22h-3.75q-.375 0-.65-.25t-.325-.625l-.3-2.325q-.325-.125-.612-.3q-.288-.175-.563-.375l-2.175.9q-.35.125-.7.025t-.55-.425L2.4 15.4q-.2-.325-.125-.7q.075-.375.375-.6l1.875-1.425Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337L2.65 9.9q-.3-.225-.375-.6q-.075-.375.125-.7l1.85-3.225q.175-.35.537-.438q.363-.087.713.038l2.175.9q.275-.2.575-.375q.3-.175.6-.3l.3-2.325q.05-.375.325-.625t.65-.25h3.75q.375 0 .65.25t.325.625l.3 2.325q.325.125.613.3q.287.175.562.375l2.175-.9q.35-.125.7-.025t.55.425L21.6 8.6q.2.325.125.7q-.075.375-.375.6l-1.875 1.425q.025.175.025.337v.675q0 .163-.05.338l1.875 1.425q.3.225.375.6q.075.375-.125.7l-1.85 3.2q-.2.325-.562.438q-.363.112-.713-.013l-2.125-.9q-.275.2-.575.375q-.3.175-.6.3l-.3 2.325q-.05.375-.325.625t-.65.25Zm-1.825-6.5q1.45 0 2.475-1.025Q15.55 13.45 15.55 12q0-1.45-1.025-2.475Q13.5 8.5 12.05 8.5q-1.475 0-2.488 1.025Q8.55 10.55 8.55 12q0 1.45 1.012 2.475Q10.575 15.5 12.05 15.5Z"
            />
          </svg>
          Debug
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUi } from "@/stores/useUi";

const ui = useUi();
</script>
