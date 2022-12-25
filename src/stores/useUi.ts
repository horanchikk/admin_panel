import { ref, computed } from "vue";
import type { Ref } from "vue";
import { defineStore } from "pinia";

export const useUi = defineStore("ui", () => {
  const showNav: Ref<boolean> = ref(false)

  return {showNav}
});
