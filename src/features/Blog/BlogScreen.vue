<script setup lang="ts">
import BlogItem from './components/BlogItem.vue'
import HeroTemplate from 'src/widgets/HeroTemplate/pub/HeroTemplate.vue'
import ArrowDown from 'src/shared/assets/icons/arrow-down.svg'
import { QBtn } from 'quasar'
import {
    QBtnDropdown,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
} from 'quasar'
</script>

<template>
    <div class="flex flex-col gap-[32px] mb-[48px]">
        <h1>Блог</h1>
        <p class="text__light-secondary text-[20px]">
            Мы занимаемся строительством, ремонтом и обслуживанием
            зданий. Мы выполняем работы разной сложности и
            обеспечиваем надежное поддержание ваших объектов в хорошем
            состоянии.
        </p>
        <div class="flex items-center justify-between">
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
                                <q-item-label>Photos</q-item-label>
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
    </div>
    <section>
        <div class="max-w-[1408px] mx-auto">
            <div
                class="flex flex-wrap justify-between gap-x-[32px] gap-y-[48px]"
            >
                <BlogItem
                    v-for="blog in 9"
                    :key="blog"
                    :blog="{ name: 'Строительный Взгляд' }"
                />
            </div>
        </div>
    </section>
</template>
