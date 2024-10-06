<script setup lang="ts">
import TabPanel from 'src/widgets/TabPanel/TabPanel.vue'
import { computed } from 'vue'
import { RequestForm } from './components/RequestForm'
import Support from './components/Support.vue'
const tabs = computed(() => [
    {
        title: 'Заказ',
        component: RequestForm,
        bind: null,
    },
    {
        title: 'Информация',
        component: Support,
        bind: null,
    },
])
</script>
<template>
    <TabPanel :tabs="tabs"></TabPanel>
</template>
