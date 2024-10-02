<script lang="ts" setup>
import { computed, ref } from 'vue'
import ArrowRight from 'src/shared/assets/icons/arrow-right.svg'

interface IProps {
    items: {
        name: string
        description?: string
        date: string
        img: string
        id: string
    }[]
    header: string
    RouterLinkName: string
}

const props = defineProps<IProps>()

// Состояния карусели
const currentSlide = ref(0)
const visibleSlides = ref(3) // Можно изменить по умолчанию количество отображаемых слайдов

// Количество слайдов
const totalSlides = computed(() =>
    Math.ceil(props.items.length / visibleSlides.value)
)

// Логика переключения слайдов
const next = () => {
    if (currentSlide.value < totalSlides.value - 1) {
        currentSlide.value++
    }
}

const prev = () => {
    if (currentSlide.value > 0) {
        currentSlide.value--
    }
}
</script>

<template>
    <div class="relative w-full py-[32px]">
        <div class="flex justify-between mb-4 w-full items-center">
            <h2>{{ props.header }}</h2>
            <div class="flex gap-[16px]">
                <button
                    @click="prev"
                    class="p-[15px] bg__secondary h-[48px] w-[48px] rounded-full"
                >
                    <ArrowRight class="rotate-180" />
                </button>
                <button
                    @click="next"
                    class="p-[15px] bg__secondary h-[48px] w-[48px] rounded-full"
                >
                    <ArrowRight />
                </button>
            </div>
        </div>
        <div class="overflow-hidden w-full">
            <div
                class="flex no-wrap transition-transform duration-300 carousel gap-[20px]"
                :style="{
                    transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)`,
                }"
            >
                <div
                    v-for="(project, index) in items"
                    :key="index"
                    class="flex-shrink-0 carousel-item flex flex-col h-full relative block"
                    :style="{
                        width: `calc((100% - 40px) / ${visibleSlides})`,
                    }"
                >
                    <RouterLink
                        :to="{
                            name: props.RouterLinkName,
                            params: { id: project.id },
                        }"
                    >
                        <img
                            :src="project.img || ''"
                            alt=""
                            class="bg__secondary rounded-[16px] h-full relative flex-1 mb-[16px]"
                        />
                        <div>
                            <h4 class="mb-[8px]">
                                {{ project.name }}
                            </h4>
                            <p
                                class="truncate max-w-[380px] text__light-secondary"
                            >
                                {{ project.date }}
                            </p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.block img {
    min-height: 380px;
}
</style>
