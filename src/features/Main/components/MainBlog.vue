<script setup lang="ts">
import { QBtn } from 'quasar'
import { items } from '../mocks/items'
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
            <arrowRight class="ml-[8px]" />
        </QBtn>
    </div>
</template>
