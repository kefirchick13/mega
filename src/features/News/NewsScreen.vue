<script setup lang="ts">
import { QBtn } from 'quasar'
import arrowRight from 'src/shared/assets/icons/arrow-right.svg'
import {
    QBtnDropdown,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
} from 'quasar'
import NewsList from './components/NewsList/NewsList.vue'
import { FeedBack } from 'src/widgets'
import { Carousel } from 'src/shared'

const items = [
    {
        name: 'Планы на Будущее: ООО "МЕГА" Анонсирует Новые Проекты на 2024 Год',
        description:
            'Остоженка 25 — удобный офис в центре Москвы, где продумано всё для комфортной и эффективной работы.',
        date: '16 сентября, 2024',
        id: '8',
        img: 'assad',
    },
    {
        name: 'Планы на Будущее: ООО "МЕГА" Анонсирует Новые Проекты на 2024 Год',
        description:
            'Остоженка 25 — удобный офис в центре Москвы, где продумано всё для комфортной и эффективной работы.',
        date: '16 сентября, 2024',
        id: '8',
        img: 'assad',
    },
    {
        name: 'Планы на Будущее: ООО "МЕГА" Анонсирует Новые Проекты на 2024 Год',
        description:
            'Остоженка 25 — удобный офис в центре Москвы, где продумано всё для комфортной и эффективной работы.',
        date: '16 сентября, 2024',
        id: '8',
        img: 'assad',
    },
    {
        name: 'Планы на Будущее: ООО "МЕГА" Анонсирует Новые Проекты на 2024 Год',
        description:
            'Остоженка 25 — удобный офис в центре Москвы, где продумано всё для комфортной и эффективной работы.',
        date: '16 сентября, 2024',
        id: '8',
        img: 'assad',
    },
    {
        name: 'Планы на Будущее: ООО "МЕГА" Анонсирует Новые Проекты на 2024 Год',
        description:
            'Остоженка 25 — удобный офис в центре Москвы, где продумано всё для комфортной и эффективной работы.',
        date: '16 сентября, 2024',
        id: '8',
        img: 'assad',
    },
    {
        name: 'Планы на Будущее: ООО "МЕГА" Анонсирует Новые Проекты на 2024 Год',
        description:
            'Остоженка 25 — удобный офис в центре Москвы, где продумано всё для комфортной и эффективной работы.',
        date: '16 сентября, 2024',
        id: '8',
        img: 'assad',
    },
    {
        name: 'Планы на Будущее: ООО "МЕГА" Анонсирует Новые Проекты на 2024 Год',
        description:
            'Остоженка 25 — удобный офис в центре Москвы, где продумано всё для комфортной и эффективной работы.',
        date: '16 сентября, 2024',
        id: '8',
        img: 'assad',
    },
    {
        name: 'Планы на Будущее: ООО "МЕГА" Анонсирует Новые Проекты на 2024 Год',
        description:
            'Остоженка 25 — удобный офис в центре Москвы, где продумано всё для комфортной и эффективной работы.',
        date: '16 сентября, 2024',
        id: '8',
        img: 'assad',
    },
    {
        name: 'Планы на Будущее: ООО "МЕГА" Анонсирует Новые Проекты на 2024 Год',
        description:
            'Остоженка 25 — удобный офис в центре Москвы, где продумано всё для комфортной и эффективной работы.',
        date: '16 сентября, 2024',
        id: '8',
        img: 'assad',
    },
    {
        name: 'Планы на Будущее: ООО "МЕГА" Анонсирует Новые Проекты на 2024 Год',
        description:
            'Остоженка 25 — удобный офис в центре Москвы, где продумано всё для комфортной и эффективной работы.',
        date: '16 сентября, 2024',
        id: '8',
        img: 'assad',
    },
    {
        name: 'Планы на Будущее: ООО "МЕГА" Анонсирует Новые Проекты на 2024 Год',
        description:
            'Остоженка 25 — удобный офис в центре Москвы, где продумано всё для комфортной и эффективной работы.',
        date: '16 сентября, 2024',
        id: '8',
        img: 'assad',
    },
]
</script>
<template>
    <div class="my-[32px]">
        <div class="flex flex-col gap-[48px]">
            <div class="flex flex-col gap-[32px]">
                <h1>Новости</h1>
                <p class="text__light-secondary text-[20px]">
                    Мы занимаемся строительством, ремонтом и
                    обслуживанием зданий. Мы выполняем работы разной
                    сложности и обеспечиваем надежное поддержание
                    ваших объектов в хорошем состоянии.
                </p>
            </div>
            <div
                class="flex items-center sm:justify-between gap-[16px]"
            >
                <div class="flex items-center gap-[16px]">
                    <QBtn>На карте</QBtn>
                    <QBtnDropdown
                        outline
                        label="Все проекты"
                        dropdown-icon="expand_more"
                        style="color: var(--color--grey-525)"
                    >
                        <q-list>
                            <q-item clickable v-close-popup>
                                <q-item-section>
                                    <q-item-label
                                        >Photos</q-item-label
                                    >
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </QBtnDropdown>
                </div>
                <QBtnDropdown
                    outline
                    label="Сортировка"
                    dropdown-icon="expand_more"
                    style="color: var(--color--grey-525)"
                >
                    <q-list>
                        <q-item clickable v-close-popup>
                            <q-item-section>
                                <q-item-label>Photos</q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </QBtnDropdown>
            </div>
            <NewsList></NewsList>
            <div class="flex justify-center">
                <QBtn
                    :outline="true"
                    size="md"
                    class="normal-case text-center"
                    >Показать еще<arrowRight class="ml-[8px]"
                /></QBtn>
            </div>
        </div>
    </div>
    <div class="flex justify-center py-[32px]">
        <Carousel
            header="Блог"
            :items="items"
            class="mb-[16px]"
            :RouterLinkName="'BlogTypePage'"
        ></Carousel>
        <QBtn
            :outline="true"
            size="md"
            class="normal-case text-center"
            >Весь блог<arrowRight class="ml-[8px]"
        /></QBtn>
    </div>
    <FeedBack></FeedBack>
</template>
