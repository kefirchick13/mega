<script setup lang="ts">
import BlogScreen from 'src/features/Blog/BlogScreen.vue'
import { FeedBack } from 'src/widgets'
import { QBtn } from 'quasar'
import arrowRight from 'src/shared/assets/icons/arrow-right.svg'
</script>

<template>
    <div class="px-[20px] flex flex-col items-center">
        <BlogScreen />
        <FeedBack />
        <div>
            <QBtn
                :outline="true"
                size="md"
                class="normal-case text-center"
                >Весь блог<arrowRight class="ml-[8px]"
            /></QBtn>
        </div>
    </div>
</template>
