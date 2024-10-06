<script setup lang="ts">
import { ref } from 'vue'
import { QInput } from 'quasar'

const service = ref()
</script>
<template>
    <div>
        <h4 class="mb-[16px]">Укажите адрес вашего объекта.</h4>
        <QInput
            v-model="service"
            placeholder="г. Москва, ул. Остоженка 25 с.1"
            rounded
            standout
        />
    </div>
</template>
