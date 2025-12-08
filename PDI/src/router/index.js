// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Importações diretas (para teste)
const HomeView = () => import('../views/HomeView.vue')
const PdiListPage = () => import('@/modules/pdi/pages/PdiListPage.vue')
const AboutView = () => import('../views/AboutView.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pdi-list',
      name: 'pdi-list',
      component: PdiListPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    // Rota de fallback para teste
    {
      path: '/test',
      redirect: '/'
    }
  ]
})

// Middleware para debug
router.beforeEach((to, from, next) => {
  console.log('Navegando de:', from.path, 'para:', to.path)
  next()
})

export default router