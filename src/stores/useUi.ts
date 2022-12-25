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
    {
      name: "Components",
      link: "/components",
      removable: true,
    },
    {
      name: "Stats",
      link: "/stats",
      removable: true,
    },
    {
      name: "System",
      link: "/system",
      removable: true,
    },
  ]);

  function updateTabs() {
    for (let tab in tabs.value) {
      tabs.value[tab].removable = true;
    }
  }

  return { showNav, tabs, updateTabs };
});
