import { createRouter, createWebHistory } from 'vue-router';
import UserDetails from './views/UserDetails.vue';
import HomePage from './views/HomePage.vue';

const routes = [
{ path: '/', component: HomePage },
{ path: '/user/:id', component: UserDetails, props: true },
];

const router = createRouter({
history: createWebHistory(),
routes,
});

export default router;
