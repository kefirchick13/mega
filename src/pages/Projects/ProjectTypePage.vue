<script setup lang="ts">
import { QBtn } from 'quasar'
import Carousel from 'src/shared/ui/Carousel/Carousel.vue'
import { items } from 'src/features/Services/mocks/items'
import ArrowRight from '@/shared/assets/icons/arrow-right.svg'
</script>
<template>
    <div
        class="w-full flex flex-col px-[20px] max-w-[1408px] mx-auto"
    >
        <div class="py-[32px]">
            <h1 class="mb-[48px]">Остоженка 25 с.1</h1>
            <div class="flex gap-[32px] mb-[48px]">
                <img
                    src=""
                    alt=""
                    class="flex-1 bg__secondary h-[344px] w-full object-cover rounded-[16px]"
                />
                <p class="flex-1">
                    Это историческое здание, расположенное в
                    престижном районе Москвы, на улице Остоженка,
                    известной своими элитными объектами недвижимости и
                    архитектурными памятниками. Здание находится в
                    Центральном административном округе города, вблизи
                    известных культурных и исторических объектов,
                    таких как Храм Христа Спасителя и Музей
                    изобразительных искусств имени Пушкина. Этот дом
                    является примером дореволюционной архитектуры,
                    сохранённой и адаптированной для современных нужд.
                    В рамках реконструкции и модернизации был проведён
                    комплекс работ по восстановлению фасада,
                    инженерных коммуникаций и улучшению внутренней
                    планировки, сохраняя при этом историческую
                    ценность объекта.
                </p>
            </div>
            <div class="flex gap-[32px] mb-[48px]">
                <div class="flex-1">
                    <h4 class="mb-[16px]">
                        Основные характеристики:
                    </h4>
                    <div class="flex justify-between" v-for="i in 4">
                        <p class="text__light-secondary">Тип</p>
                        <p>Жилое, коммерческое здание</p>
                    </div>
                </div>
                <div class="flex-1">
                    <h4 class="mb-[16px]">Выполненные работы:</h4>
                    <div>
                        <p v-for="(item, i) in 7">
                            {{ i + 1 }}. Реставрация фасада —
                            восстановлены исторические архитектурные
                            элементы и детали здания с целью
                            сохранения его оригинального внешнего
                            вида.
                        </p>
                    </div>
                </div>
            </div>
            <div class="grid sm:grid-cols-6 grid-cols-2 gap-[32px]">
                <img
                    src=""
                    alt=""
                    class="row-span-1 col-span-3 bg__secondary h-[344px] w-full object-cover rounded-[16px]"
                />
                <img
                    src=""
                    alt=""
                    class="row-span-1 col-span-3 bg__secondary h-[344px] w-full object-cover rounded-[16px]"
                />
                <img
                    src=""
                    alt=""
                    class="row-span-1 col-span-2 bg__secondary h-[344px] w-full object-cover rounded-[16px]"
                />
                <img
                    src=""
                    alt=""
                    class="row-span-1 col-span-2 bg__secondary h-[344px] w-full object-cover rounded-[16px]"
                />
                <img
                    src=""
                    alt=""
                    class="row-span-1 col-span-2 bg__secondary h-[344px] w-full object-cover rounded-[16px]"
                />
            </div>
        </div>
        <div class="flex justify-center w-full py-[32px]">
            <Carousel
                header="Блог"
                :items="items"
                class="mb-[16px]"
                :RouterLinkName="'BlogTypePage'"
            />
            <QBtn size="md" class="normal-case text-center" outline>
                <span>Весь блог</span>
                <ArrowRight class="ml-[8px]" />
            </QBtn>
        </div>
    </div>
</template>
