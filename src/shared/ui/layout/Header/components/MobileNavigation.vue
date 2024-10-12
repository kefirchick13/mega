<script setup lang="ts">
import { ref } from 'vue'
import { NAV_LINKS } from '../constant/navLinks'

const isMenuOpened = ref<boolean>(false)
const toggleMenu = () => (isMenuOpened.value = !isMenuOpened.value)
</script>

<template>
    <div>
        <button @click="toggleMenu">Меню</button>
        <transition>
            <nav
                v-show="isMenuOpened"
                class="absolute bg-white flex items-center flex-col justify-center top-0 left-0 w-full z-[999] supports-[dvh]:h-[100dvh] h-[100vh]"
            >
                <button
                    class="absolute right-[20px] top-[20px] hover:opacity-50 transition-all"
                    @click="toggleMenu"
                >
                    Закрыть
                </button>
                <ul class="flex flex-col gap-[24px]">
                    <li
                        v-for="navLink in NAV_LINKS"
                        :key="navLink.link"
                        class="text-center text-[32px] hover:opacity-50 transition-all"
                        @click="toggleMenu"
                    >
                        <router-link :to="navLink.link" class="text-[32px]">
                            {{ navLink.name }}
                        </router-link>
                    </li>
                </ul>
            </nav>
        </transition>
    </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
