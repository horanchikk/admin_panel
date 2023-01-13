import { ref, computed } from "vue";
import type { Ref } from "vue";
import { defineStore } from "pinia";

export const useUi = defineStore("ui", () => {
  const showNav: Ref<boolean> = ref(true);

  interface OpenedTabs {
    name: string;
    link: string;
    removable: boolean;
  }

  const tabs: Ref<OpenedTabs[]> = ref([
    {
      name: "Home",
      link: "/",
      removable: false,
    },
  ]);

  const theme: "dark" | "light" = "dark";
  const username = "admin";

  function updateTabs() {
    for (let tab in tabs.value) {
      tabs.value[tab].removable = true;
    }
  }

  return { showNav, tabs, updateTabs, theme, username };
});
