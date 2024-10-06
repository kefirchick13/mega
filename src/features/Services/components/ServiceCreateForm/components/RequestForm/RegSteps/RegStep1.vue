<script setup lang="ts">
import { ref } from 'vue'
import { QInput } from 'quasar'

const service = ref()
</script>
<template>
    <div>
        <h4 class="mb-[16px]">Расскажите немного про вашу задачу</h4>
        <QInput
            v-model="service"
            placeholder="Разработка планировки."
            rounded
            standout
        />
    </div>
</template>
