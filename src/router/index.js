import { createWebHistory, createRouter, routerKey } from 'vue-router';

import Navigation from '../components/Navigation.vue';

import UnderConstruction from '../pages/UnderConstruction.vue';

import Home from '../pages/Home.vue';

const history = createWebHistory();

const router = createRouter({
    history,
    routes : [
        {
            path: '/',
            components: {
                default: Home,
                Navigation: Navigation,
            },
        },
        {
            path: '/under-construction',
            component: UnderConstruction,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 } //always scroll to top
    },
});

export default router;