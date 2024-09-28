import { createRouter, createWebHistory } from 'vue-router'
import MainPage from 'src/pages/Main/MainPage.vue'
import BlogPage from 'src/pages/Blog/BlogPage.vue'
import FAQPage from 'src/pages/FAQ/FAQPage.vue'

const routes = [
    { path: '/main', component: MainPage },
    { path: '/blog', component: BlogPage },
    { path: '/questions', component: FAQPage },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
