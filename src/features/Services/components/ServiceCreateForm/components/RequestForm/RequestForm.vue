<script setup lang="ts">
import { QBtn } from 'quasar'
import ArrowRight from '@/shared/assets/icons/arrow-right.svg'
import { shallowRef, ref } from 'vue'
import RegStep1 from './RegSteps/RegStep1.vue'
import RegStep2 from './RegSteps/RegStep2.vue'
import RegStep3 from './RegSteps/RegStep3.vue'
import RegStep4 from './RegSteps/RegStep4.vue'
import RegStep5 from './RegSteps/RegStep5.vue'

const tabs = shallowRef([
    { name: 'Tab1', component: RegStep1 },
    {
        name: 'Tab2',
        component: RegStep2,
    },
    {
        name: 'Tab3',
        component: RegStep3,
    },
    {
        name: 'Tab4',
        component: RegStep4,
    },
    {
        name: 'Tab5',
        component: RegStep5,
    },
])

const activeTab = ref(0)
</script>
<template>
    <div>
        <KeepAlive class="mb-[32px]">
            <Component :is="tabs[activeTab].component" />
        </KeepAlive>
        <div class="flex justify-between w-full">
            <div>
                <QBtn
                    size="md"
                    class="normal-case text-center"
                    outline
                    @click="
                        () => {
                            if (activeTab !== 0) activeTab--
                        }
                    "
                >
                    <ArrowRight class="mr-[8px] rotate-180" />
                    <span>Начать заново</span>
                </QBtn>
            </div>
            <div>
                <QBtn
                    size="md"
                    class="normal-case text-center"
                    style="
                        color: white;
                        border: none;
                        background-color: var(
                            --color--grey-500
                        ) !important;
                    "
                    outline
                    @click="
                        () => {
                            if (activeTab < tabs.length - 1)
                                activeTab++
                        }
                    "
                >
                    <span>Продолжить</span>
                    <ArrowRight
                        class="ml-[8px]"
                        style="fill: white"
                    />
                </QBtn>
            </div>
        </div>
    </div>
</template>
