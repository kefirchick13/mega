<script setup lang="ts">
import { QBtn } from 'quasar'
import { AnswerBlocks } from 'src/features/FAQ/components/AnswerBlocks'
import { answers } from '../mocks/answers'
import arrowRight from '@/shared/assets/icons/arrow-right.svg'
</script>

<template>
    <div class="flex justify-center gap-[32px] py-[32px]">
        <div
            class="flex flex-col sm:flex-row justify-beetween flex-nowrap gap-[32px]"
        >
            <h2 class="sm:basis-2/5 text-center sm:text-start">
                Частые вопросы
            </h2>
            <AnswerBlocks :answers="answers" />
        </div>
        <div
        class="w-full text-center flex flex-col sm:flex-row justify-center"
    >
        <QBtn :outline="true" size="md" class="normal-case" >
            Больше ответов
            <arrowRight class="ml-[8px]" />
        </QBtn>
        </div>
    </div>
</template>
