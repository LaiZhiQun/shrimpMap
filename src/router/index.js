/* eslint-disable import/no-duplicates */
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'FrontLayout',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/front/AboutView.vue')
      },
      {
        path: '',
        name: 'map',
        component: () => import('../views/front/MapView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
