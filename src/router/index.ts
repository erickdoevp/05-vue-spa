import HomePage from '@/features/landing/pages/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Lnading
    {
      path: '/',
      name: 'landing',
      component: () => import('../features/landing/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage,
        },
        {
          path: '/features',
          name: 'features',
          component: () => import('../features/landing/pages/FeaturesPage.vue'),
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: () => import('../features/landing/pages/PricingPage.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('../features/landing/pages/ContactPage.vue'),
        },
      ],
    },

    // Auth

    {
      path: '/auth',
      name: 'auth',
      redirect: { name: 'login' },
      component: () => import('../features/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: '/auth/login',
          name: 'login',
          component: () => import('../features/auth/pages/LoginPage.vue'),
        },
        {
          path: '/auth/register',
          name: 'register',
          component: () => import('../features/auth/pages/RegiserPage.vue'),
        },
      ],
    },

    // Not found
    {
      path: '/:pathMatch(.*)*',
      // redirect: '/',
      component: () => import('../features/shared/pages/NotFound404Page.vue'),
    },
  ],
})

export default router
