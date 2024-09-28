<script setup lang="ts">
import { AnswerBlockItem } from 'src/shared/ui/AnswerBlockItem'
import { IAnswer } from 'src/shared/types/answer'

const props = defineProps<{ answers: IAnswer[] }>()
</script>

<template>
    <div class="flex flex-col gap-[32px]">
        <AnswerBlockItem
            v-for="answers in props.answers"
            :header="answers.header"
            :description="answers.description"
        />
    </div>
</template>
