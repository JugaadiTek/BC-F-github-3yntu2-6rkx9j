import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
// import NotFound from '@/views/NotFound.vue';
// import Article from  '@/views/Article.vue';
// import lander from   '@/views/lander.vue';
// import rawpage from  '@/views/rawpage.vue';



const router = createRouter({ history: createWebHistory(import.meta.env.BASE_URL),  routes: [
    { id: ':id',  path: '/page/:slug',     name: 'pages',       component: () => import('@/views/Article.vue'),         },
    { id: ':id',  path: '/land/:slug',     name: 'landers',       component: () => import('@/views/lander.vue'),          },
    { id: ':id',  path: '/rawp/:slug',     name: 'rawps',       component: () => import('@/views/rawpage.vue'),         },
    { id: ':id',  path: '/',               name: 'home',       component: Home,                                        },  
    { id: ':id',  path: "/:catchAll(.*)",  name: "not-found",  component: () => import("@/views/NotFound.vue"),        },  ],});
export default router;
