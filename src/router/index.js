import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/page:slug',
      name: 'page',
      component: () => import('@/views/Article.vue'),
    },
    {
      path: '/land:slug',
      name: 'land',
      component: () => import('@/views/lander.vue'),
    },
    {
      path: '/raw:slug',
      name: 'rawp',
      component: () => import('@/views/rawpage.vue'),
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: () => import("@/views/NotFound.vue"),
    },
  ],
});
export default router;
