<script setup lang="ts">
import { FeedBack } from 'src/widgets/FeedBack'
import { QBtn } from 'quasar'
import arrowRight from 'src/shared/assets/icons/arrow-right.svg'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<template>
    <div class="px-[20px] max-w-[1408px] mx-auto">
        <div class="flex flex-col items-center gap-[48px] my-[32px]">
            <div>
                <QBtn
                    @click="router.go(-1)"
                    :outline="true"
                    size="md"
                    class="normal-case text-center"
                    ><arrowRight class="mr-[8px] rotate-180" />Назад к
                    блогам</QBtn
                >
            </div>
            <h1>Строительный взгляд</h1>
            <p class="text__light-secondary">30 сентября 2024 г.</p>
        </div>
        <div
            class="flex gap-4 items-start w-full bg-transparent mb-[48px]"
        >
            <div
                class="py-4 flex flex-col gap-4 items-start self-stretch relative w-full bg-transparent"
            >
                <div
                    class="overflow-hidden relative w-full h-[480px] bg-[#f7f7f7] rounded-[16px]"
                ></div>
                <p class="text-[15px] text-[#666666]">
                    Пустая фотография
                </p>
            </div>
            <p class="leading-6 text-base text-black">
                Когда дело касается строительства и ремонта, многие
                люди сталкиваются с огромным количеством вопросов и
                выборов, которые могут оказаться весьма запутанными.
                Как выбрать материалы, с чего начать ремонт, на что
                обратить внимание при выборе подрядчиков? В этой
                статье я хочу поделиться ключевыми моментами, которые
                помогут вам взглянуть на процесс с "строительного
                взгляда".
            </p>
            <div
                class="flex flex-col gap-4 items-start self-stretch relative w-full bg-transparent"
            >
                <h5 class="text-xl text-black">
                    Планирование — основа успеха
                </h5>

                <p class="leading-6 text-base text-black">
                    Перед началом любого строительного проекта важно
                    составить детальный план. Это включает
                    проектирование, расчет бюджета, выбор материалов и
                    специалистов. Чем лучше спланированы этапы работы,
                    тем меньше вероятность непредвиденных ситуаций,
                    которые могут вылиться в дополнительные расходы.
                </p>
            </div>

            <h5 class="text-xl text-black">
                Выбор материалов: не экономьте на качестве
            </h5>

            <p class="leading-6 text-base text-black">
                Очень часто желание сэкономить приводит к покупке
                дешевых материалов, которые быстро изнашиваются.
                Строительный взгляд подразумевает осознание, что
                качественные материалы могут стоить дороже, но они
                прослужат дольше и обеспечат надежность всей
                конструкции или отделки.
            </p>

            <h5 class="text-xl text-black">
                Время — ваш друг и враг
            </h5>

            <p class="leading-6 text-base text-black">
                Не пытайтесь закончить ремонт слишком быстро. Слишком
                быстрый темп работ может снизить качество исполнения.
                Однако и затягивание сроков часто говорит о
                неправильной организации работ. Важно найти баланс
                между качеством и скоростью.
            </p>

            <div class="w-full flex justify-center">
                <QBtn
                    :outline="true"
                    size="md"
                    class="normal-case text-center"
                    >Ремонт и Реставрация<arrowRight class="mr-[8px]"
                /></QBtn>
            </div>
        </div>

        <FeedBack></FeedBack>
    </div>
</template>
