<script setup lang="ts">
import { ServiceItemIcon } from 'src/shared'
import { ref, watch, onMounted } from 'vue'

// Пропсы для слайдов и видимых элементов
const props = defineProps<{
  slides: {name:string, img: string}[];
  visibleSlides?: number;
}>();

// Устанавливаем количество видимых слайдов с дефолтом
const visibleSlides = props.visibleSlides ?? 1;

// Референс на контейнер слайдов
const carouselContainer = ref<HTMLElement | null>(null);

// Размер одного слайда (будет вычисляться динамически)
let slideWidth = 0;

// Управление скроллом влево
const scrollLeft = () => {
  if (carouselContainer.value) {
    carouselContainer.value.scrollLeft -= slideWidth;
  }
};

// Управление скроллом вправо
const scrollRight = () => {
  if (carouselContainer.value) {
    carouselContainer.value.scrollLeft += slideWidth;
  }
};

// После монтирования компонента вычисляем ширину одного слайда
onMounted(() => {
  if (carouselContainer.value) {
    // Расчет ширины одного слайда (на основе общего размера контейнера и видимых слайдов)
    slideWidth = carouselContainer.value.offsetWidth / visibleSlides;
  }
});

</script>

<template>
    <div class="flex flex-nowrap items-center justify-beetween ">
        <div class="slider-width max-w-[300%] overflow-hidden">
            <!-- Обертка слайдов -->
            <div
                ref="carouselContainer"
                class="flex flex-nowrap overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
            >
                <!-- Слайды -->
                <div
                    ref="sliderElement"
                    v-for="(service, index) in slides"
                    :key="index"
                    class="snap-start"
                >
                    <ServiceItemIcon :service="service"></ServiceItemIcon>
                </div>
            </div>
        </div>

        <!-- Навигационные кнопки -->
        <div class="flex flex-nowrap gap-[16px]">
            <button
                @click="scrollLeft"
                class="w-[48px] h-[48px] bg__secondary rounded-full"
            >
                &#10094;
            </button>
            <button
                @click="scrollRight"
                class="w-[48px] h-[48px] bg__secondary rounded-full"
            >
                &#10095;
            </button>
        </div>
    </div>
</template>

<style scoped>
/* Стили для плавного перехода */
.slide-enter-active,
.slide-leave-active {
    transition: opacity 0.5s;
}

.slider-width {
    width: calc(100% - 48px * - 16px);
}
/* Скрытие полосы прокрутки (для кастомной прокрутки) */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none; /* IE и Edge */
  scrollbar-width: none; /* Firefox */
}

/* Плавный скролл */
.scroll-smooth {
  scroll-behavior: smooth;
}

/* Snap для плавного прокручивания к слайдам */
.snap-x {
  scroll-snap-type: x mandatory;
}
.snap-start {
  scroll-snap-align: start;
}

</style>
