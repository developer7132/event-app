import { createWebHistory, createRouter } from "vue-router";
import { routes } from "./routes";


let router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
