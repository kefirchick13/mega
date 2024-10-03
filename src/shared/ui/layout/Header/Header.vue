<script setup lang="ts">
import { useRoute } from 'vue-router'

import HeaderLogo from '../../../assets/icons/HeaderLogo.svg'
import { NAV_LINKS } from './constant/navLinks'

const route = useRoute()
</script>
<template>
    <header class="header">
        <router-link
            class="hover:opacity-50 transition-all"
            to="/main"
        >
            <HeaderLogo />
        </router-link>
        <nav class="header-nav">
            <div
                v-for="link in NAV_LINKS"
                class="header-nav__item"
                :class="{
                    active: route.path.includes(link.link),
                }"
            >
                <router-link :to="link.link">
                    {{ link.name }}
                </router-link>
            </div>
            <div class="header_nav-item">8 966 378-95-98</div>
        </nav>
    </header>
</template>
<style>
@import './style.css';
</style>
