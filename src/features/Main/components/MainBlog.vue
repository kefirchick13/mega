<script setup lang="ts">
import { QBtn } from 'quasar'
import Carousel from 'src/shared/ui/Carousel/Carousel.vue'
import { items } from '../mocks/items'
import ArrowRight from '@/shared/assets/icons/arrow-right.svg'
</script>

<template>
    <div class="flex justify-center py-[32px]">
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
</template>
