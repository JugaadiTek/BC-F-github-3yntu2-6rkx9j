import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/page/:slug',
      name: 'page',
      component: () => import('@/views/Article.vue'),
    },
    {
      path: '/land/:slug',
      name: 'land',
      component: () => import('@/views/lander.vue'),
    },
    {
      path: '/rawp/:slug',
      name: 'rawp',
      component: () => import('@/views/rawpage.vue'),
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: () => import("@/views/NotFound.vue"),
    },
  ],
});
export default router;
