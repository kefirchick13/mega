<script setup lang="ts">
import { IAnswer } from 'src/shared/types/answer'
const props = defineProps<IAnswer>()
</script>
<template>
    <div class="p-[24px] bg__secondary rounded-[16px]">
        <h4 class="mb-[16px] text-[24px]">{{ props.header }}</h4>
        <p class="text__light-secondary m-[0px]">
            {{ props.description }}
        </p>
    </div>
</template>
