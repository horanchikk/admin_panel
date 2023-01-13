import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ComponentsView from "../views/ComponentsView.vue";
import SystemView from "../views/SystemView.vue";
import DebugView from "../views/DebugView.vue";

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
      path: "/system",
      name: "System",
      component: SystemView,
    },
    {
      path: "/debug",
      name: "Debug",
      component: DebugView,
    },
  ],
});

export default router;
