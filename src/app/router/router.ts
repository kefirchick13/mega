import {
    createRouter,
    createWebHistory,
    RouteRecordRaw,
} from 'vue-router'
import MainPage from 'src/pages/Main/MainPage.vue'
import BlogMainPage from 'src/pages/Blog/BlogMainPage.vue'
import FAQPage from 'src/pages/FAQ/FAQPage.vue'
import ProjectPage from 'src/pages/Projects/ProjectPage.vue'
import ServicesPage from 'src/pages/Services/ServicesPage.vue'
import NewsMainPage from 'src/pages/News/NewsMainPage.vue'
import BlogTypePage from 'src/pages/Blog/BlogTypePage.vue'
import Blog from 'src/pages/Blog/Blog.vue'
import AboutPage from 'src/pages/About/AboutPage.vue'
import ContactsPage from 'src/pages/Contacts/ContactsPage.vue'
import News from 'src/pages/News/News.vue'
import NewsTypePage from 'src/pages/News/NewsTypePage.vue'

const routes: RouteRecordRaw[] = [
    { path: '/', redirect: '/main' },
    { path: '/about', component: AboutPage },
    { path: '/contacts', component: ContactsPage },
    { path: '/main', component: MainPage },
    {
        path: '/blog',
        component: Blog,
        redirect: '/blog/main',
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
    { path: '/questions', component: FAQPage },
    { path: '/projects', component: ProjectPage },
    { path: '/services', component: ServicesPage },
    {
        path: '/news',
        component: News,
        redirect: '/news/main',
        children: [
            {
                path: 'main',
                component: NewsMainPage,
                name: 'NewsMainPage',
            },
            {
                path: ':id',
                component: NewsTypePage,
                name: 'NewsTypePage',
            },
        ],
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
