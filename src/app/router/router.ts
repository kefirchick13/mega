import { createWebHistory, createRouter } from 'vue-router'
import MainPage from '../../pages/Main/MainPage.vue'

const routes = [
  { path: '/main', component: MainPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})