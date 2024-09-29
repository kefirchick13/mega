<script setup lang="ts">
import ServiceIconList from 'src/widgets/ServiceIconList/ServiceIconList.vue'
import { ref } from 'vue'
import { ServiceBlocks } from 'src/widgets'
import { QBtn } from 'quasar'
import arrowRight from '@/shared/assets/icons/arrow-right.svg'

const list = ref([
    {
        img: 'https://amiel.club/uploads/posts/2022-03/1647689810_16-amiel-club-p-kartinki-stroiki-16.jpg',
        name: 'Объект для демо',
    },
    {
        img: 'https://fotoblik.ru/wp-content/uploads/2023/09/krasivaia-stroika-3-1.webp',
        name: 'Объект для демо',
    },
    {
        img: 'https://amiel.club/uploads/posts/2022-03/1647689810_16-amiel-club-p-kartinki-stroiki-16.jpg',
        name: 'Объект для демо',
    },
    {
        img: 'https://fotoblik.ru/wp-content/uploads/2023/09/krasivaia-stroika-3-1.webp',
        name: 'Объект для демо',
    },
    {
        img: 'https://amiel.club/uploads/posts/2022-03/1647689810_16-amiel-club-p-kartinki-stroiki-16.jpg',
        name: 'Объект для демо',
    },
    {
        img: 'https://fotoblik.ru/wp-content/uploads/2023/09/krasivaia-stroika-3-1.webp',
        name: 'Объект для демо',
    },
    {
        img: 'https://amiel.club/uploads/posts/2022-03/1647689810_16-amiel-club-p-kartinki-stroiki-16.jpg',
        name: 'Объект для демо',
    },
    {
        img: 'https://fotoblik.ru/wp-content/uploads/2023/09/krasivaia-stroika-3-1.webp',
        name: 'Объект для демо',
    },
    {
        img: 'https://amiel.club/uploads/posts/2022-03/1647689810_16-amiel-club-p-kartinki-stroiki-16.jpg',
        name: 'Объект для демо',
    },
    {
        img: 'https://fotoblik.ru/wp-content/uploads/2023/09/krasivaia-stroika-3-1.webp',
        name: 'Объект для демо',
    },
    {
        img: 'https://amiel.club/uploads/posts/2022-03/1647689810_16-amiel-club-p-kartinki-stroiki-16.jpg',
        name: 'Объект для демо',
    },
    {
        img: 'https://fotoblik.ru/wp-content/uploads/2023/09/krasivaia-stroika-3-1.webp',
        name: 'Объект для демо',
    },
    {
        img: 'https://amiel.club/uploads/posts/2022-03/1647689810_16-amiel-club-p-kartinki-stroiki-16.jpg',
        name: 'Объект для демо',
    },
    {
        img: 'https://amiel.club/uploads/posts/2022-03/1647689810_16-amiel-club-p-kartinki-stroiki-16.jpg',
        name: 'Объект для демо',
    },
])
</script>
<template>
    <div class="text-center">
        <ServiceIconList
            :slides="list"
            :visible-slides="5"
            class="mb-[48px]"
        ></ServiceIconList>
        <ServiceBlocks class="pb-[48px]"></ServiceBlocks>
    </div>
</template>
