<script setup lang="ts">
import { QBtn, QIcon } from 'quasar'
import ArrowRight from '@/shared/assets/icons/arrow-right.svg'
</script>
<template>
    <div class="container py-[32px]">
        <div class="container__article">
            <h1 class="">Построим, отремонтируем, обслужим.</h1>
            <p class="text__light-secondary">
                Мы занимаемся строительством, ремонтом и обслуживанием
                зданий. Мы выполняем работы разной сложности и
                обеспечиваем надежное поддержание ваших объектов в
                хорошем состоянии.
            </p>
            <QBtn :outline="true" style="max-width: 330px" size="md">
                Проконсультироваться по проекту<ArrowRight
                    class="ml-[8px]"
            /></QBtn>
        </div>
        <div class="container__image">
            <img src="" alt="" class="rounded-[16px] bg__secondary" />
        </div>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    gap: 32px;
    width: 100%;
}
.container__article {
    display: flex;
    flex-direction: column;
    gap: 32px;
    flex-shrink: 1;
    flex-grow: 1;
}

.container__article h2 {
    font-size: 48px;
}

.container__image {
    flex-basis: 100%;
    flex-shrink: 1;
    min-height: 344px;
}
.container__image img {
    width: 100%;
    height: 100%;
    background-color: var(--color--grey-25);
}
</style>
