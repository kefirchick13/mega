<script setup lang="ts">
import { QBtn } from 'quasar'
import { items } from '../mocks/items'
</script>

<template>
    <div class="flex justify-center">
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
