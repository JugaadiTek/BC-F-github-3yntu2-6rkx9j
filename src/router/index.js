import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      funid: ':id',
      path: '/page/:slug',
      name: 'page',
      id: ':id',
      component: () => import('@/views/Article.vue'),
    },
    {
      funid: ':id',
      path: '/land/:slug',
      name: 'land',
      id: ':id',
      component: () => import('@/views/lander.vue'),
    },
    {
      funid: ':id',
      path: '/rawp/:slug',
      name: 'rawp',
      id: ':id',
      component: () => import('@/views/rawpage.vue'),
    },
    {
      funid: ':id',
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      funid: ':id',
      path: "/:catchAll(.*)",
      id: 'id',
      name: "not-found",
      component: () => import("@/views/NotFound.vue"),
    },
  ],
});
export default router;
