<script setup lang="ts">
interface IProps {
    project: {
        img?: string
        name: string
        description: string
    }
}
const props = defineProps<IProps>()
</script>
<template>
    <div class="flex flex-col h-full relative">
        <img :src="project.img || ''" alt="" class="bg__secondary rounded-[16px] h-full relative flex-1 mb-[16px]" />
        <div>
            <h4 class="mb-[8px]">{{ project.name }}</h4>
            <p class="truncate max-w-[380px] text__light-secondary">{{ project.description }}</p>
        </div>
    </div>
</template>
