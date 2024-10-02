<script setup lang="ts">
import BlogScreen from 'src/features/Blog/BlogScreenMain.vue'
import { FeedBack } from 'src/widgets'
</script>

<template>
    <div
        class="px-[20px] flex flex-col items-center max-w-[1408px] mx-auto"
    >
        <BlogScreen />

        <FeedBack />
    </div>
</template>
