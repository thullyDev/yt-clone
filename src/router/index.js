import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Error from "../views/Error.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/error",
      name: "error",
      component: Error,
    },
  ],
});

export default router;
