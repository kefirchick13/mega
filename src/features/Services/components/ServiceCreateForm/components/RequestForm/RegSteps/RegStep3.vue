<script setup lang="ts">
import { ref } from 'vue'
import { QCheckbox, QInput } from 'quasar'

const time24 = ref(false)
const time72 = ref(false)
const week = ref(false)
const custom = ref(false)

const customValue = ref('')
</script>
<template>
    <div>
        <h4 class="mb-[16px]">Установите сроки выполнения.</h4>
        <div class="flex flex-col gap-[32px]">
            <QCheckbox v-model="time24" label="В течении 24 часов" />
            <QCheckbox v-model="time72" label="В течении 72 часов" />
            <QCheckbox v-model="week" label="В течении недели" />
            <div class="flex">
                <QCheckbox v-model="custom" />
                <QInput
                    v-model="customValue"
                    class="ml-[16px]"
                    placeholder="Другое"
                    rounded
                    standout
                />
            </div>
        </div>
    </div>
</template>
