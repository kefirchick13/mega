<script setup lang="ts">
import { QBtn } from 'quasar'
import { items } from '../mocks/items'
import { Carousel } from 'src/shared'
import arrowRight from 'src/shared/assets/icons/arrow-right.svg'
</script>

<template>
    <div class="flex flex-col sm:flex-row justify-center">
        <Carousel
            header="Новости"
            :items="items"
            class="mb-[16px]"
            :RouterLinkName="'NewsTypePage'"
        />

        <QBtn
            :outline="true"
            size="md"
            class="normal-case text-center mb-[32px]"
            >Больше новостей
            <arrowRight class="ml-[8px]" />
        </QBtn>
    </div>
</template>
