<script setup lang="ts">
import { QBtn } from 'quasar'
import { answers } from '../mocks/answers'
import arrowRight from '@/shared/assets/icons/arrow-right.svg'
</script>

<template>
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
</template>
