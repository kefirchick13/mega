<script setup lang="ts">
import { ProjectsScreen } from 'src/features'
import { Carousel } from 'src/shared'
import FeedBack from 'src/widgets/FeedBack/FeedBack.vue'
import { QBtn } from 'quasar'
import arrowRight from 'src/shared/assets/icons/arrow-right.svg'

const items = [
    {
        name: 'Планы на Будущее: ООО "МЕГА" Анонсирует Новые Проекты на 2024 Год',
        description:
            'Остоженка 25 — удобный офис в центре Москвы, где продумано всё для комфортной и эффективной работы.',
        date: '16 сентября, 2024',
    },
    {
        name: 'Планы на Будущее: ООО "МЕГА" Анонсирует Новые Проекты на 2024 Год',
        description:
            'Остоженка 25 — удобный офис в центре Москвы, где продумано всё для комфортной и эффективной работы.',
        date: '16 сентября, 2024',
    },
    {
        name: 'Планы на Будущее: ООО "МЕГА" Анонсирует Новые Проекты на 2024 Год',
        description:
            'Остоженка 25 — удобный офис в центре Москвы, где продумано всё для комфортной и эффективной работы.',
        date: '16 сентября, 2024',
    },
    {
        name: 'Планы на Будущее: ООО "МЕГА" Анонсирует Новые Проекты на 2024 Год',
        description:
            'Остоженка 25 — удобный офис в центре Москвы, где продумано всё для комфортной и эффективной работы.',
        date: '16 сентября, 2024',
    },
    {
        name: 'Планы на Будущее: ООО "МЕГА" Анонсирует Новые Проекты на 2024 Год',
        description:
            'Остоженка 25 — удобный офис в центре Москвы, где продумано всё для комфортной и эффективной работы.',
        date: '16 сентября, 2024',
    },
    {
        name: 'Планы на Будущее: ООО "МЕГА" Анонсирует Новые Проекты на 2024 Год',
        description:
            'Остоженка 25 — удобный офис в центре Москвы, где продумано всё для комфортной и эффективной работы.',
        date: '16 сентября, 2024',
    },
    {
        name: 'Планы на Будущее: ООО "МЕГА" Анонсирует Новые Проекты на 2024 Год',
        description:
            'Остоженка 25 — удобный офис в центре Москвы, где продумано всё для комфортной и эффективной работы.',
        date: '16 сентября, 2024',
    },
]
</script>
<template>
    <div class="w-full flex flex-col px-[20px] py-[32px]">
        <h2 class="mb-[8px]">Наши проекты</h2>
        <p class="text__light-secondary mb-[48px]">
            То, чего мы не стыдимся. Наша гордость и усилия.
        </p>
        <ProjectsScreen class="w-full" />
        <div class="w-full flex flex-col items-center pb-[32px]">
            <Carousel header="Блог" :items="items"></Carousel>
            <div>
                <QBtn
                    :outline="true"
                    size="md"
                    class="normal-case text-center"
                    >Весь блог<arrowRight class="ml-[8px]"
                /></QBtn>
            </div>
        </div>
        <FeedBack />
    </div>
</template>
