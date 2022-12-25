import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ComponentsView from "../views/ComponentsView.vue";
import StatsView from "../views/StatsView.vue";
import SystemView from "../views/SystemView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/components",
      name: "Components",
      component: ComponentsView,
    },
    {
      path: "/stats",
      name: "Stats",
      component: StatsView,
    },
    {
      path: "/system",
      name: "System",
      component: SystemView,
    },
  ],
});

export default router;
