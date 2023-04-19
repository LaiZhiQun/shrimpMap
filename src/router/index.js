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
      },
      {
        path: 'info',
        name: 'info',
        component: () => import('../views/front/InfoView.vue')
      },
      {
        path: 'orderSuccess',
        name: 'orderSuccess',
        component: () => import('../views/front/OrderSuccessView.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'adminShrimps',
        name: 'adminShrimps',
        component: () => import('../views/admin/AdminShrimpsView.vue')
      },
      {
        path: 'adminOrders',
        name: 'adminOrders',
        component: () => import('../views/admin/AdminOrdersView.vue')
      },
      {
        path: 'adminCoupons',
        name: 'adminCoupons',
        component: () => import('../views/admin/AdminCoupons.vue')
      },
      {
        path: 'adminSellInfo',
        name: 'adminSellInfo',
        component: () => import('../views/admin/AdminSellInfoView.vue')
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
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
