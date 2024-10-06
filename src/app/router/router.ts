import {
    createRouter,
    createWebHistory,
    RouteRecordRaw,
} from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('src/pages/Main/MainPage.vue'),
        name: 'home',
    },

    {
        path: '/about',
        component: () => import('src/pages/About/AboutPage.vue'),
        name: 'about',
    },
    {
        path: '/contacts',
        component: () =>
            import('src/pages/Contacts/ContactsPage.vue'),
        name: 'contacts',
    },
    {
        path: '/blog',
        component: () => import('src/pages/Blog/Blog.vue'),
        redirect: '/blog/main',
        name: 'blog',
        children: [
            {
                path: ':id',
                component: () =>
                    import('src/pages/Blog/BlogTypePage.vue'),
                name: 'BlogTypePage',
            },
            {
                path: 'main',
                component: () =>
                    import('src/pages/Blog/BlogMainPage.vue'),
                name: 'BlogMainPage',
            },
        ],
    },
    {
        path: '/questions',
        component: () => import('src/pages/FAQ/FAQPage.vue'),
        name: 'faq',
    },
    {
        path: '/projects',
        component: () => import('src/pages/Projects/Project.vue'),
        name: 'projects',
        redirect: '/projects/main',
        children: [
            {
                path: ':id',
                component: () =>
                    import('src/pages/Projects/ProjectTypePage.vue'),
                name: 'ProjectTypePage',
            },
            {
                path: 'main',
                component: () =>
                    import('src/pages/Projects/ProjectMainPage.vue'),
                name: 'ProjectsMainPage',
            },
        ],
    },
    {
        path: '/services',
        component: () =>
            import('src/pages/Services/ServicesPage.vue'),
        name: 'services',
        redirect: '/services/main',
        children: [
            {
                path: 'main',
                component: () =>
                    import('src/pages/Services/ServicesMainPage.vue'),
                name: 'ServicesMainPage',
            },
            {
                path: 'create',
                component: () =>
                    import('src/pages/Services/ServicesTypePage.vue'),
                name: 'ServicesTypePage',
            },
        ],
    },
    {
        path: '/news',
        component: () => import('src/pages/News/News.vue'),
        redirect: '/news/main',
        name: 'news',
        children: [
            {
                path: 'main',
                component: () =>
                    import('src/pages/News/NewsMainPage.vue'),
                name: 'NewsMainPage',
            },
            {
                path: ':id',
                component: () =>
                    import('src/pages/News/NewsTypePage.vue'),
                name: 'NewsTypePage',
            },
        ],
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
