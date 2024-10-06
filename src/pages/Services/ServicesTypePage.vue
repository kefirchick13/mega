<script setup lang="ts">
import { ServiceCreateForm } from 'src/features/Services'
import { FeedBack } from 'src/widgets'
import { Carousel } from 'src/shared'
import { QBtn } from 'quasar'
import ArrowRight from '@/shared/assets/icons/arrow-right.svg'
import { items } from 'src/features/Services/mocks/items'
</script>
<template>
    <div class="max-w-[1408px] w-full px-[20px]">
        <ServiceCreateForm class="mt-[32px] w-full" />
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
        <FeedBack />
    </div>
</template>
