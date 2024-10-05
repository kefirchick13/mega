<script setup lang="ts">
import { QBtn } from 'quasar'
import { ServicesScreen } from 'src/features/Services'
import arrowRight from '@/shared/assets/icons/arrow-right.svg'
</script>

<template>
    <h2 class="mb-[48px] mt-[32px]">Наши услуги</h2>
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
</template>
