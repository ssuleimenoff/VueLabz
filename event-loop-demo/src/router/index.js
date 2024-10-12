import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('../views/HomePage.vue')
const UserDetails = () => import('../views/UserDetails.vue')

const routes = [
{ path: '/', component: HomePage },
{ path: '/user/:id', component: UserDetails, props: true },
{ path: '/home', redirect: '/' }
]

const router = createRouter({
history: createWebHistory(),
routes
})

export default router
