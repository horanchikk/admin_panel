<template>
  <main
    class="w-screen h-screen flex flex-col text-black font-sans"
  >
    <div class="bg-white">
      <Header />
    </div>
    <div class="flex-auto flex bg-black bg-opacity-10">
      <Transition name="nav" mode="out-in">
      <Menu v-if="useUi().showNav" />
    </Transition>
      <section class="flex-auto flex flex-col gap-5 py-4 px-8">
        <Tabs />
        <div class="flex-auto">
          <router-view />
        </div>
      </section></div>
  </main>
</template>

<script setup lang="ts">
import Menu from "./layouts/Menu.vue";
import Tabs from "./layouts/Tabs.vue";
import Header from "./layouts/Header.vue"
import { useUi } from "@/stores/useUi";
</script>
