<script setup lang="ts">
import { date } from 'quasar'
import NewsBlock from '../NewsBlock/NewsBlock.vue'
</script>
<template>
    <div class="max-w-[1408px] mx-auto mb-[32px]">
        <div
            class="flex flex-wrap justify-between gap-x-[32px] gap-y-[48px]"
        >
            <NewsBlock
                v-for="blog in 9"
                :key="blog"
                :project="{
                    name: 'ООО `МЕГА` Завершает Амбициозный Проект Жилого Комплекса в Центре Москвы',
                    img: '',
                    date: '18 сентября, 2024',
                }"
            />
        </div>
    </div>
</template>
