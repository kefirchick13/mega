<script setup lang="ts">
import { QBtn } from 'quasar'
import { ServicesScreen } from 'src/features/Services'
</script>

<template>
    <h2 class="mb-[48px] mt-[32px]">Наши услуги</h2>
    <ServicesScreen />
    <div class="w-full text-center">
        <QBtn :outline="true" size="md" class="normal-case"
            >Все услуги
            <arrowRight class="ml-[8px]" />
        </QBtn>
    </div>
</template>
