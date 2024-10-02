<script setup lang="ts">
import { type Component, shallowRef } from 'vue'
import Order from '../FormComponents/Order.vue'
import Requisite from '../FormComponents/Requisite.vue'
import Connection from '../FormComponents/Сonnection.vue'
import { TabPanel } from 'src/widgets'

interface items {
    title: string
    component: Component
}

const dataArray = shallowRef<items[]>([
    { title: 'Оформление заказа', component: Order },
    { title: 'Связаться напрямую', component: Connection },
    { title: 'Реквизиты', component: Requisite },
])
</script>
<template>
    <TabPanel :tabs="dataArray"></TabPanel>
</template>
