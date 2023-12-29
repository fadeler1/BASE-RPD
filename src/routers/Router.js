import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { 
        name: 'home', 
        path: "/inscripcion", 
        component: () => import('../views/Welcome.vue')
    },
    { 
        name: 'not-found', 
        path: "/inscripcion/:pathMach(.*)*", 
        component: () => import('../common/404.vue') 
    },
];


const router = createRouter({
    history : createWebHistory(),
    routes,
    hashbang: false,
    mode: 'history',
});

export default router;