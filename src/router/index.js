import { createWebHistory, createRouter, routerKey } from 'vue-router';

import ComingSoon from '../pages/ComingSoon.vue';

import Home from '../pages/Home.vue';

const history = createWebHistory();

const router = createRouter({
    history,
    routes : [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/coming-soon',
            component: ComingSoon,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 } //always scroll to top
    },
});

export default router;