// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/artigos/:id',
    name: 'ArticleDetail',
    component: () => import('../components/ArticleDetail.vue'),
    props: true, 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
