<template>
  <main
    class="w-screen h-screen flex flex-col px-32 py-4 bg-black text-zinc-100 font-sans bg-opacity-90"
  >
    <section><Tabs /></section>
    <section><Menu /><router-view /></section>
  </main>
</template>

<script setup lang="ts">
import Menu from "./layouts/Menu.vue";
import Tabs from "./layouts/Tabs.vue";
</script>
