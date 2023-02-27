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
      path: '/articles/:id',
      name: 'articles',
      component: () => import('@/views/Article.vue'),
    },
    {
      path: '/get-started/:id',
      name: 'landers',
      component: () => import('@/views/lander.vue'),
    },
    {
      path: '/rawpage/:id',
      name: 'rawPage',
      component: () => import('@/views/rawPage.vue'),
    },
    // {
    //   path: "/:catchAll(.*)",
    //   name: "not-found",
    //   component: () => import("@/views/NotFound.vue"),
    // },
  ],
});

export default router;
