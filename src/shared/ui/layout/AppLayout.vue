<script setup lang="ts">
import Header from './Header/Header.vue';
import Footer from './Footer/Footer.vue';

</script>
<template>
    <Header/>
    <main class="flex justify-center"><slot></slot></main>
    <Footer/>
</template>
