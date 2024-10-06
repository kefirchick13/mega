<script setup lang="ts">
import { QBtn } from 'quasar'
</script>
<template>
    <div
        class="flex flex-col sm:flex-row w-full gap-[32px] py-[32px]"
    >
        <div
            class="text-center flex-1 rounded-[16px] p-[24px] border border__grey-quarternary"
        >
            <h4 class="mb-[32px]">
                Много интересного о строительстве
            </h4>
            <RouterLink to="/blog">
                <QBtn
                    style="
                        color: #fff;
                        background-color: var(--color--blue-500);
                    "
                    >Перейти в блог</QBtn
                >
            </RouterLink>
        </div>
        <div
            class="text-center flex-1 rounded-[16px] p-[24px] border border__grey-quarternary"
        >
            <h4 class="mb-[32px]" style="">+7 966 378-95-98</h4>
            <QBtn style="background-color: var(--color--grey-25)"
                >Перезвоните мне</QBtn
            >
        </div>
        <div
            class="text-center flex-1 rounded-[16px] p-[24px] border border__grey-quarternary"
        >
            <h4 class="mb-[32px]">
                Есть заявка? Рассчитаем и обсудим
            </h4>
            <QBtn style="background-color: var(--color--grey-25)"
                >Оставить заявку</QBtn
            >
        </div>
    </div>
</template>
