<script setup lang="ts">
import ServiceIconList from 'src/features/Services/components/ServiceIconList/ServiceIconList.vue'
import { ref } from 'vue'
import { ServiceBlocks } from 'src/widgets'
import { QBtn } from 'quasar'

const list = ref([
    {
        img: 'https://amiel.club/uploads/posts/2022-03/1647689810_16-amiel-club-p-kartinki-stroiki-16.jpg',
        name: 'Объект для демо',
        id: 1,
    },
    {
        img: 'https://fotoblik.ru/wp-content/uploads/2023/09/krasivaia-stroika-3-1.webp',
        name: 'Объект для демо',
        id: 2,
    },
    {
        img: 'https://amiel.club/uploads/posts/2022-03/1647689810_16-amiel-club-p-kartinki-stroiki-16.jpg',
        name: 'Объект для демо',
        id: 3,
    },
    {
        img: 'https://fotoblik.ru/wp-content/uploads/2023/09/krasivaia-stroika-3-1.webp',
        name: 'Объект для демо',
        id: 4,
    },
    {
        img: 'https://amiel.club/uploads/posts/2022-03/1647689810_16-amiel-club-p-kartinki-stroiki-16.jpg',
        name: 'Объект для демо',
        id: 5,
    },
    {
        img: 'https://fotoblik.ru/wp-content/uploads/2023/09/krasivaia-stroika-3-1.webp',
        name: 'Объект для демо',
        id: 6,
    },
    {
        img: 'https://amiel.club/uploads/posts/2022-03/1647689810_16-amiel-club-p-kartinki-stroiki-16.jpg',
        name: 'Объект для демо',
        id: 7,
    },
    {
        img: 'https://fotoblik.ru/wp-content/uploads/2023/09/krasivaia-stroika-3-1.webp',
        name: 'Объект для демо',
        id: 0,
    },
    {
        img: 'https://amiel.club/uploads/posts/2022-03/1647689810_16-amiel-club-p-kartinki-stroiki-16.jpg',
        name: 'Объект для демо',
        id: 9,
    },
    {
        img: 'https://fotoblik.ru/wp-content/uploads/2023/09/krasivaia-stroika-3-1.webp',
        name: 'Объект для демо',
        id: 10,
    },
    {
        img: 'https://amiel.club/uploads/posts/2022-03/1647689810_16-amiel-club-p-kartinki-stroiki-16.jpg',
        name: 'Объект для демо',
        id: 11,
    },
    {
        img: 'https://fotoblik.ru/wp-content/uploads/2023/09/krasivaia-stroika-3-1.webp',
        name: 'Объект для демо',
        id: 12,
    },
    {
        img: 'https://amiel.club/uploads/posts/2022-03/1647689810_16-amiel-club-p-kartinki-stroiki-16.jpg',
        name: 'Объект для демо',
        id: 13,
    },
    {
        img: 'https://amiel.club/uploads/posts/2022-03/1647689810_16-amiel-club-p-kartinki-stroiki-16.jpg',
        name: 'Объект для демо',
        id: 14,
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
