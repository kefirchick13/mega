<script setup lang="ts">
import BlogScreen from 'src/features/Blog/BlogScreen.vue'
import { FeedBack } from 'src/widgets'
</script>

<template>
    <div class="px-[20px] flex flex-col items-center">
        <BlogScreen />

        <FeedBack />
    </div>
</template>
