import { createRouter, createWebHistory } from 'vue-router'
import MainPage from 'src/pages/Main/MainPage.vue'
import BlogPage from 'src/pages/Blog/BlogPage.vue'
import FAQPage from 'src/pages/FAQ/FAQPage.vue'
import ProjectPage from 'src/pages/Projects/ProjectPage.vue'
import ServicesPage from 'src/pages/Services/ServicesPage.vue'

const routes = [
    { path: '/', redirect: '/main' },
    { path: '/main', component: MainPage },
    { path: '/blog', component: BlogPage },
    { path: '/questions', component: FAQPage },
    { path: '/projects', component: ProjectPage },
    { path: '/services', component: ServicesPage },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
