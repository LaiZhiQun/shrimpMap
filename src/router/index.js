/* eslint-disable import/no-duplicates */
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'FrontLayout',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'map',
        component: () => import('../views/front/MapView.vue')
      },
      {
        path: 'shrimps',
        name: 'shrimps',
        component: () => import('../views/front/ShrimpsView.vue')
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('../views/front/LoginView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
