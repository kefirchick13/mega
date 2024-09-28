<script setup lang="ts">
import HeroTemplate from 'src/widgets/HeroTemplate/pub/HeroTemplate.vue'
import FAQList from 'src/features/FAQ/components/FAQList/FAQList.vue'
import FAQCategories from 'src/features/FAQ/components/FAQCategories/FAQCategories.vue'
</script>

<template>
    <div>
        <HeroTemplate>
            <template #title>
                <h1>Частые вопросы</h1>
            </template>
        </HeroTemplate>
        <section>
            <div class="flex flex-row gap-[32px]">
                <FAQCategories />
                <FAQList class="flex-1" />
            </div>
        </section>
    </div>
</template>
