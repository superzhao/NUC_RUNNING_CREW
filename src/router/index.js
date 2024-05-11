import { createRouter, createWebHistory } from 'vue-router'
import SelectView from '../views/SelectView.vue'
import RunPrizeView from '../views/RunPrizeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'select',
      component: SelectView
    },
    {
      path: '/certificate',
      name: 'certificate',
      component: () => import('../views/CertificateView.vue')
    },
    {
      path: '/video',
      name: 'video',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VideoPrizeView.vue')
    },
    {
      path: '/run',
      name: 'run',
      component: () => import('../views/RunPrizeView.vue')
    },
  ]
})

export default router
