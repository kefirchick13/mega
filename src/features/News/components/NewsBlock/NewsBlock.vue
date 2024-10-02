<script setup lang="ts">
import { INew } from 'src/shared/types/news'
const props = defineProps<{ project: INew }>()
</script>
<template>
    <div class="flex-shrink-0 h-full min-w-[400px] flex-1">
        <RouterLink
            :to="{ name: 'NewsTypePage', params: { id: project.id } }"
        >
            <img
                :src="props.project.img || ''"
                alt=""
                class="bg__secondary rounded-[16px] relative flex-1 h-[344px] mb-[16px]"
            />
            <div>
                <h4 class="mb-[8px]">{{ props.project.name }}</h4>
                <p
                    class="truncate max-w-[380px] text__light-secondary"
                >
                    {{ props.project.date }}
                </p>
            </div>
        </RouterLink>
    </div>
</template>
