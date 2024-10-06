<script setup lang="ts">
import HeaderLogo from '../../../assets/icons/HeaderLogo.svg'
import DesktopNavigation from './components/DesktopNavigation.vue'
import MobileNavigation from './components/MobileNavigation.vue'
</script>
<template>
    <header class="header">
        <router-link class="hover:opacity-50 transition-all" to="/">
            <HeaderLogo />
        </router-link>
        <div class="desktop-nav">
            <DesktopNavigation />
        </div>
        <div class="mobile-nav">
            <MobileNavigation />
        </div>
    </header>
</template>
<style>
@import './style.css';

.desktop-nav {
    display: none;
}

.mobile-nav {
    display: block;
}

@media (min-width: 1440px) {
    .desktop-nav {
        display: block;
    }

    .mobile-nav {
        display: none;
    }
}
</style>
