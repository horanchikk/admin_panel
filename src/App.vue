<template>
  <main class="flex h-screen w-screen flex-col font-sans text-black">
    <div class="bg-white">
      <Header />
    </div>
    <div
      class="flex flex-auto bg-white bg-opacity-10 dark:bg-black dark:bg-opacity-90"
    >
      <Transition name="nav" mode="out-in">
        <Menu v-if="ui.showNav" />
      </Transition>
      <section class="flex flex-auto flex-col py-4 px-8">
        <Tabs />
        <div class="flex-auto overflow-hidden">
          <router-view
            v-slot="{ Component }"
            class="rounded-lg border-[1px] border-black border-opacity-10 bg-black bg-opacity-10 transition-all hover:border-opacity-30 dark:border-white dark:border-opacity-40 dark:text-white dark:hover:border-opacity-20"
          >
            <Transition
              mode="out-in"
              enter-active-class="windowShow"
              leave-active-class="windowHide"
            >
              <component :is="Component" />
            </Transition>
          </router-view>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
// layouts
import Menu from "./layouts/Menu.vue";
import Tabs from "./layouts/Tabs.vue";
import Header from "./layouts/Header.vue";

// stores
import { useUi } from "@/stores/useUi";
import { onMounted } from "vue-demi";

const ui = useUi();

onMounted(() => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    ui.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    ui.theme = "light";
  }
});
</script>
