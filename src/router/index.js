import { onBeforeUpdate } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('@/views/Contacts.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/objects/:id',
    name: 'objectsPage',
    component: () => import('@/views/ObjectPage.vue'),
  },
  {
    path: '/review/:id',
    name: 'review',
    component: () => import('@/views/Review.vue'),
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: () => import('@/views/Reviews.vue'),
  },
  {
    path: '/filtred-objects',
    name: 'filtred-objects',
    component: () => import('@/views/FiltredObjects.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',

  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
