<script lang="ts" setup>
import { computed } from 'vue'
import { ProjectBlockItem } from 'src/shared/ui'

interface IProject {
    img?: string
    name: string
    description: string
}

const items = [
    {
        name: 'Остоженка 25 с.1',
        description:
            'Остоженка 25 — удобный офис в центре Москвы, где продумано всё для комфортной и эффективной работы.',
    },
    {
        name: 'Остоженка 25 с.1',
        description:
            'Остоженка 25 — удобный офис в центре Москвы, где продумано всё для комфортной и эффективной работы.',
    },
    {
        name: 'Остоженка 25 с.1',
        description:
            'Остоженка 25 — удобный офис в центре Москвы, где продумано всё для комфортной и эффективной работы.',
    },
    {
        name: 'Остоженка 25 с.1',
        description:
            'Остоженка 25 — удобный офис в центре Москвы, где продумано всё для комфортной и эффективной работы.',
    },
    {
        name: 'Остоженка 25 с.1',
        description:
            'Остоженка 25 — удобный офис в центре Москвы, где продумано всё для комфортной и эффективной работы.',
    },
    {
        name: 'Остоженка 25 с.1',
        description:
            'Остоженка 25 — удобный офис в центре Москвы, где продумано всё для комфортной и эффективной работы.',
    },
    {
        name: 'Остоженка 25 с.1',
        description:
            'Остоженка 25 — удобный офис в центре Москвы, где продумано всё для комфортной и эффективной работы.',
    },
]

// Функция для разбиения массива на строки по 2 и 3 элемента
const rows = computed(() => {
    const result: IProject[][] = []
    let temp: IProject[] = []

    items.forEach((item, index) => {
        const isEvenRow = Math.floor(result.length) % 2 === 1 // четная строка
        const limit = isEvenRow ? 2 : 3

        temp.push(item)

        if (temp.length === limit) {
            result.push(temp)
            temp = []
        }
    })

    // Если остались элементы, добавляем их в последний ряд
    if (temp.length > 0) {
        result.push(temp)
    }

    return result
})

// Функции для проверки типа ряда
const isOddRow = (rowIndex: number) => rowIndex % 2 === 0
const isEvenRow = (rowIndex: number) => rowIndex % 2 === 1
</script>

<template>
    <div class="table">
        <div
            v-for="(row, rowIndex) in rows"
            :key="rowIndex"
            class="row"
        >
            <div
                v-for="(item, itemIndex) in row"
                :key="itemIndex"
                class="cell"
                :class="{ two: isOddRow(rowIndex) }"
            >
                <ProjectBlockItem :project="item"></ProjectBlockItem>
            </div>
        </div>
    </div>
</template>

<style scoped>
.table {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 48px;
}

.row {
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: nowrap !important;
    flex: 0 1 auto; /* Без возможности роста, с уменьшением, базовый размер — по содержимому */
    gap: 32px;
}

.cell {
    width: 100%;
    height: 410px;
}
</style>
