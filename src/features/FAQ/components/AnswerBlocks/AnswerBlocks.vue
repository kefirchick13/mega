<script setup lang="ts">
import { AnswerBlockItem } from 'src/features/FAQ/components/AnswerBlockItem'
import { IAnswer } from 'src/shared/types/answer'

const props = defineProps<{ answers: IAnswer[] }>()
</script>

<template>
    <div class="flex flex-col flex-nowrap gap-[32px]">
        <AnswerBlockItem
            v-for="answers in props.answers"
            :header="answers.header"
            :description="answers.description"
        />
    </div>
</template>
