<script setup lang="ts">
import { useRoute } from 'vue-router'
import { NAV_LINKS } from '../constant/navLinks'

const route = useRoute()
</script>

<template>
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
        <p class="header_nav-item mb-[0px]">8 966 378-95-98</p>
    </nav>
</template>
