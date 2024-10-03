<script setup lang="ts">
import { ProjectsScreen, ServicesScreen } from 'src/features'
import { Carousel } from 'src/shared/ui'
import { QBtn } from 'quasar'
import { AnswerBlocks } from 'src/features/FAQ/components/AnswerBlocks'
import arrowRight from 'src/shared/assets/icons/arrow-right.svg'
import { FeedBack } from 'src/widgets'
import { MainHero } from 'src/features/Main/components'
import { items } from './mocks/itmes'
import { answers } from './mocks/answers'
</script>
<template>
    <div class="w-full px-[20px] max-w-[1408px] mx-auto">
        <MainHero />
        <h2 class="mb-[48px] mt-[32px]">Наши услуги</h2>
        <ServicesScreen />
        <div class="w-full text-center">
            <QBtn :outline="true" size="md" class="normal-case"
                >Все услуги
                <arrowRight class="ml-[8px]" />
            </QBtn>
        </div>
        <h2 class="mt-[32px]">Наши проекты</h2>
        <p class="text__light-secondary mb-[48px]">
            То, чего мы не стыдимся. Наша гордость и усилия.
        </p>
        <ProjectsScreen class="w-full" />
        <div class="flex justify-center">
            <Carousel
                header="Новости"
                :items="items"
                class="mb-[16px]"
                :RouterLinkName="'NewsTypePage'"
            ></Carousel>
            <QBtn
                :outline="true"
                size="md"
                class="normal-case text-center mb-[32px]"
                >Больше новостей
                <arrowRight class="ml-[8px]" />
            </QBtn>
        </div>
        <div class="flex justify-center gap-[32px] py-[32px]">
            <div class="flex justify-beetween flex-nowrap">
                <h2 class="basis-2/5">Частые вопросы</h2>
                <AnswerBlocks :answers="answers" />
            </div>
            <QBtn :outline="true" size="md" class="normal-case"
                >Больше ответов
                <arrowRight class="ml-[8px]" />
            </QBtn>
        </div>
        <div class="flex py-[32px] gap-[32px]">
            <h2>
                Строительные проекты выполняются качественно и в срок,
                что особенно важно в сфере строительства и ремонта.
                Команда настоящих профессионалов всегда на связи,
                предлагает оптимальные решения и тщательно
                контролирует все этапы работ.
            </h2>
            <div class="flex items-center gap-[10px]">
                <div
                    class="bg__secondary rounded-full h-[64px] w-[64px]"
                ></div>
                <div>
                    <p class="m-[0px]">Наталья Савостьянова</p>
                    <p class="text__light-secondary m-[0px]">
                        Глава представительства Фалкондэйл Девелопмент
                        Лимитед
                    </p>
                </div>
            </div>
        </div>

        <div class="flex justify-center py-[32px]">
            <Carousel
                header="Блог"
                :items="items"
                class="mb-[16px]"
                :RouterLinkName="'BlogTypePage'"
            />
            <QBtn
                :outline="true"
                size="md"
                class="normal-case text-center"
                >Весь блог
                <arrowRight class="ml-[8px]" />
            </QBtn>
        </div>
        <FeedBack />
    </div>
</template>
