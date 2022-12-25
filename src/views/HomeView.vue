<template>
  <div>
    <button @click="useUi().showNav = !useUi().showNav">show</button>
  </div>
</template>

<script setup lang="ts">
import { useUi } from "@/stores/useUi";

</script>

<style scoped></style>
