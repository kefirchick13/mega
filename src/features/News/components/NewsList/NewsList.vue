<script setup lang="ts">
import NewsBlock from '../NewsBlock/NewsBlock.vue'
</script>
<template>
    <div class="max-w-[1408px] mb-[32px]">
        <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[32px] gap-y-[48px]"
        >
            <NewsBlock
                v-for="blog in 9"
                :key="blog"
                :project="{
                    name: 'ООО `МЕГА` Завершает Амбициозный Проект Жилого Комплекса в Центре Москвы',
                    img: '',
                    date: '18 сентября, 2024',
                    id: 7,
                }"
            />
        </div>
    </div>
</template>
