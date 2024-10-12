<script setup lang="ts">
import { QBtn } from 'quasar'
import { ServicesScreen } from 'src/features/Services'
import arrowRight from '@/shared/assets/icons/arrow-right.svg'
</script>

<template>
    <div class="py-[32px]">
    <h2 class="mb-[48px] ">Наши услуги</h2>
    <ServicesScreen />
    <div
        class="w-full text-center flex flex-col sm:flex-row justify-center"
    >
        <QBtn
            :outline="true"
            size="md"
            class="normal-case service-btn"
        >
            Все услуги
            <arrowRight class="ml-[8px]" />
        </QBtn>
    </div>
</div>
</template>
