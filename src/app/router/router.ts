import { createRouter, createWebHistory } from 'vue-router'

import MainPage from 'src/pages/Main/MainPage.vue'
import AboutPage from 'src/pages/About/AboutPage.vue'
import ContactsPage from 'src/pages/Contacts/ContactsPage.vue'
import BlogMainPage from 'src/pages/Blog/BlogMainPage.vue'
import BlogVue from 'src/pages/Blog/Blog.vue'
import BlogTypePage from 'src/pages/Blog/BlogTypePage.vue'
import FAQPageVue from 'src/pages/FAQ/FAQPage.vue'
import ProjectVue from 'src/pages/Projects/Project.vue'
import ProjectTypePageVue from 'src/pages/Projects/ProjectTypePage.vue'
import ProjectMainPageVue from 'src/pages/Projects/ProjectMainPage.vue'
import ServicesMainPageVue from 'src/pages/Services/ServicesMainPage.vue'
import ServicesPageVue from 'src/pages/Services/ServicesPage.vue'
import ServicesTypePageVue from 'src/pages/Services/ServicesTypePage.vue'
import NewsVue from 'src/pages/News/News.vue'
import NewsMainPageVue from 'src/pages/News/NewsMainPage.vue'
import NewsTypePageVue from 'src/pages/News/NewsTypePage.vue'
const routes = [
    {
        path: '/',
        component: MainPage,
        name: 'home',
    },

    {
        path: '/about',
        component: AboutPage,
        name: 'about',
    },
    {
        path: '/contacts',
        component: ContactsPage,
        name: 'contacts',
    },
    {
        path: '/blog',
        component: BlogVue,
        redirect: '/blog/main',
        name: 'blog',
        children: [
            {
                path: ':id',
                component: BlogTypePage,
                name: 'BlogTypePage',
            },
            {
                path: 'main',
                component: BlogMainPage,
                name: 'BlogMainPage',
            },
        ],
    },
    {
        path: '/questions',
        component: FAQPageVue,
        name: 'faq',
    },
    {
        path: '/projects',
        component: ProjectVue,
        name: 'projects',
        redirect: '/projects/main',
        children: [
            {
                path: ':id',
                component: ProjectTypePageVue,
                name: 'ProjectTypePage',
            },
            {
                path: 'main',
                component: ProjectMainPageVue,
                name: 'ProjectsMainPage',
            },
        ],
    },
    {
        path: '/services',
        component: ServicesPageVue,
        name: 'services',
        redirect: '/services/main',
        children: [
            {
                path: 'main',
                component: ServicesMainPageVue,
                name: 'ServicesMainPage',
            },
            {
                path: 'create',
                component: ServicesTypePageVue,
                name: 'ServicesTypePage',
            },
        ],
    },
    {
        path: '/news',
        component: NewsVue,
        redirect: '/news/main',
        name: 'news',
        children: [
            {
                path: 'main',
                component: NewsMainPageVue,

                name: 'NewsMainPage',
            },
            {
                path: ':id',
                component: NewsTypePageVue,
                name: 'NewsTypePage',
            },
        ],
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
