<script setup lang="ts">
import { ref } from 'vue'
import { QInput } from 'quasar'
const formData = ref({ name: '', mobile: '', email: '' })
</script>
<template>
    <div>
        <h4 class="mb-[16px]">Укажите ваши контактные данные</h4>
        <QInput
            v-model="formData.name"
            class="mb-[16px]"
            placeholder="Ваше имя"
            rounded
            standout
        />
        <QInput
            v-model="formData.mobile"
            class="mb-[16px]"
            placeholder="Мобильный номер"
            rounded
            standout
        />
        <QInput
            v-model="formData.email"
            placeholder="Электронная почта"
            rounded
            standout
        />
    </div>
</template>
