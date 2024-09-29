<script setup lang="ts">
import {
    QBtnDropdown,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
} from 'quasar'
</script>
<template>
    <div
        class="flex items-center gap-[16px] w-full justify-between mb-[48px]"
    >
        <div class="flex items-center gap-[16px]">
            <QBtn>На карте</QBtn>
            <QBtnDropdown
                outline
                label="Сектор"
                dropdown-icon="expand_more"
                style="color: var(--color--grey-525)"
            >
                <q-list>
                    <q-item clickable v-close-popup>
                        <q-item-section>
                            <q-item-label>Photos</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </QBtnDropdown>
            <QBtnDropdown
                outline
                label="Статус проекта"
                dropdown-icon="expand_more"
                style="color: var(--color--grey-525)"
            >
                <q-list>
                    <q-item clickable v-close-popup>
                        <q-item-section>
                            <q-item-label>Photos</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </QBtnDropdown>
            <QBtnDropdown
                outline
                label="Локация"
                dropdown-icon="expand_more"
                style="color: var(--color--grey-525)"
            >
                <q-list>
                    <q-item clickable v-close-popup>
                        <q-item-section>
                            <q-item-label>Photos</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </QBtnDropdown>
            <QBtnDropdown
                outline
                label="Тип работ"
                dropdown-icon="expand_more"
                style="color: var(--color--grey-525)"
            >
                <q-list>
                    <q-item clickable v-close-popup>
                        <q-item-section>
                            <q-item-label>Photos</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </QBtnDropdown>
        </div>
        <QBtnDropdown
            outline
            label="Сортировка"
            dropdown-icon="expand_more"
            style="color: var(--color--grey-525)"
        >
            <q-list>
                <q-item clickable v-close-popup>
                    <q-item-section>
                        <q-item-label>Photos</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </QBtnDropdown>
    </div>
</template>
