import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/home/index.vue";
import Login from "@/views/login/index.vue";
import Community from "@/views/community/index.vue";
import Company from "@/views/company/index.vue";
import Shop from "@/views/shop/index.vue";
import Academy from "@/views/academy/index.vue";



const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/community',
        name: 'community',
        component: Community
    },
    {
        path: '/company',
        name: 'company',
        component: Company
    },
    {
        path: '/shop',
        name: 'shop',
        component: Shop
    },
    {
        path: '/academy',
        name: 'academy',
        component: Academy
    },



]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;