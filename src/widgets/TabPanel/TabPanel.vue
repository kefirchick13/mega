<script setup lang="ts">
import { type Component, ref } from 'vue'

interface items {
    title: string
    component: Component
    bind?: any
}

const activeIndex = ref(0)

const props = defineProps<{ tabs: items[] }>()
</script>
<template>
    <div class="flex gap-[32px] sm:flex-nowrap">
        <div class="flex flex-col items-start min-w-[448px]">
            <h4
                v-for="(data, index) in tabs"
                class="pb-[16px] trancate"
                :class="{
                    'text__light-secondary': index !== activeIndex,
                }"
                @click="() => (activeIndex = index)"
            >
                {{ data.title }}
            </h4>
        </div>
        <component :is="tabs[activeIndex].component" class="flex-1" />
    </div>
</template>
