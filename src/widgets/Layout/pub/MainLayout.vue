<script setup lang="ts">
import Header from 'src/shared/ui/layout/Header/Header.vue'
import Footer from 'src/shared/ui/layout/Footer/Footer.vue'
</script>

<template>
    <div class="wrapper">
        <Header />
        <main>
            <slot />
        </main>
        <Footer />
    </div>
</template>
