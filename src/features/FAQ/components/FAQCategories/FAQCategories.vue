<script setup lang="ts">
import { ref } from 'vue'

const faqListItems = [
    'Каковы ваши расценки и как определяется стоимость проекта?',
    'Какой у вас опыт в этой области?',
    'Есть ли у вас лицензии и сертификаты?',
    'Как происходит процесс проектирования и утверждения?',
    'Каковы сроки завершения проекта?',
]

const selectedItemIdx = ref<number>(0)
</script>

<template>
    <ul class="flex flex-col gap-[32px]">
        <li
            v-for="(faqItem, idx) in faqListItems"
            :key="faqItem"
            :class="
                selectedItemIdx === idx
                    ? 'text__light-primary'
                    : 'text__light-secondary'
            "
            class="faq-category-text text-[20px] cursor-pointer transition-all max-w-[448px]"
            @click="selectedItemIdx = idx"
        >
            {{ faqItem }}
        </li>
    </ul>
</template>

<style scoped>
.faq-category-text:hover {
    color: var(--text__light-primary);
}
</style>
