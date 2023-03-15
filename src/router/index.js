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
      },
      {
        path: 'shrimp/:id',
        name: 'shrimp',
        component: () => import('../views/front/ShrimpView.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/front/CartView.vue')
      },
      {
        path: 'form',
        name: 'form',
        component: () => import('../views/front/FormView.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
