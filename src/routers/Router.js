import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { 
        name: 'home', 
        path: "/RPD", 
        component: () => import('../components/welcome.vue') 
    },
    { 
        name: 'Login RPD', 
        path: "/RPD/login", 
        component: () => import('../components/Login.vue') 
    },
    { 
        name: 'not-found', 
        path: "/RPD/:pathMach(.*)*", 
        component: () => import('../components/404.vue') 
    },
];

const router = createRouter({
    history : createWebHistory(),
    routes,
    hashbang: false,
    mode: 'history',
});

export default router;