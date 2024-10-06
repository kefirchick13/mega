<script setup lang="ts">
import BlogItem from './components/BlogItem.vue'
import { QBtn } from 'quasar'
import arrowRight from 'src/shared/assets/icons/arrow-right.svg'
import {
    QBtnDropdown,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
} from 'quasar'
</script>

<template>
    <div class="my-[32px]">
        <div class="flex flex-col gap-[48px] mb-[48px]">
            <div class="flex flex-col gap-[32px]">
                <h1>Блог</h1>
                <p class="text__light-secondary text-[20px]">
                    Мы занимаемся строительством, ремонтом и
                    обслуживанием зданий. Мы выполняем работы разной
                    сложности и обеспечиваем надежное поддержание
                    ваших объектов в хорошем состоянии.
                </p>
            </div>
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
        </div>
        <section>
            <div class="max-w-[1408px] mx-auto mb-[32px]">
                <div
                    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[32px] gap-y-[48px] mb-[48px]"
                >
                    <BlogItem
                        v-for="blog in 9"
                        :key="blog"
                        :blog="{ name: 'Строительный Взгляд' }"
                    />
                </div>
            </div>
            <div class="flex justify-center">
                <QBtn
                    :outline="true"
                    size="md"
                    class="normal-case text-center"
                    >Показать еще<arrowRight class="ml-[8px]"
                /></QBtn>
            </div>
        </section>
    </div>
</template>
