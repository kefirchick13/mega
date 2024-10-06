<script setup lang="ts">
interface IProps {
    project: {
        img?: string
        name: string
        description: string
        id: number
    }
}
const props = defineProps<IProps>()
</script>
<template>
    <RouterLink :to="`/project/${props.project.id}`">
        <div class="flex flex-col h-full relative w-full">
            <img
                :src="project.img || ''"
                alt=""
                class="bg__secondary rounded-[16px] flex-1 w-full relative mb-[16px]"
            />
            <div>
                <h4 class="mb-[8px]">{{ project.name }}</h4>
                <p
                    class="truncate max-w-[420px] text__light-secondary"
                >
                    {{ project.description }}
                </p>
            </div>
        </div></RouterLink
    >
</template>
