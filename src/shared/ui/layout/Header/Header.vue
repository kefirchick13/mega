<script setup lang="ts">
import HeaderLogo from '../../../assets/icons/HeaderLogo.svg'
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route)
const navLinks = [
    { name: 'О компании', link: 'main' },
    { name: 'Проекты', link: '/projects' },
    { name: 'Услуги', link: '/services' },
    { name: 'Новости', link: '/news' },
    { name: 'Блог', link: '/blog' },
    { name: 'Частые вопросы', link: '/questions' },
    { name: 'Контакты', link: '/contacts' },
]
</script>
<template>
    <header class="header">
        <HeaderLogo />
        <nav class="header-nav">
            <div
                v-for="link in navLinks"
                class="header-nav__item"
                :class="{
                    active: route.path.includes(link.link),
                }"
            >
                <RouterLink :to="link.link">
                    {{ link.name }}
                </RouterLink>
            </div>
            <div class="header_nav-item">8 966 378-95-98</div>
        </nav>
    </header>
</template>
<style>
@import './style.css';
</style>
