<script setup lang="ts">
import BlogItem from './components/BlogItem.vue'
import HeroTemplate from 'src/widgets/HeroTemplate/pub/HeroTemplate.vue'
import ArrowDown from 'src/shared/assets/icons/arrow-down.svg'
import { QBtn } from 'quasar'
</script>

<template>
    <div>
        <HeroTemplate>
            <template #title>
                <h1>Блог</h1>
            </template>
            <template #description>
                <p class="text__light-secondary text-[20px]">
                    Мы занимаемся строительством, ремонтом и
                    обслуживанием зданий. Мы выполняем работы разной
                    сложности и обеспечиваем надежное поддержание
                    ваших объектов в хорошем состоянии.
                </p>
            </template>
            <template #actions>
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-[16px]">
                        <QBtn>На карте</QBtn>
                        <QBtn outline>
                            <span class="text__light-secondary">
                                Все проекты
                            </span>
                            <ArrowDown
                                class="text__light-secondary ml-[3px]"
                            />
                        </QBtn>
                    </div>
                    <QBtn
                        outline
                        size="md"
                        class="flex items-center normal-case"
                    >
                        <span class="text__light-secondary">
                            Сортировка
                        </span>
                        <ArrowDown
                            class="text__light-secondary ml-[3px]"
                        />
                    </QBtn>
                </div>
            </template>
        </HeroTemplate>
        <section>
            <div class="max-w-[1408px] mx-auto px-[20px]">
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
    </div>
</template>
