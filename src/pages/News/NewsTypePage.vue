<script setup lang="ts">
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
    </div>
</template>
