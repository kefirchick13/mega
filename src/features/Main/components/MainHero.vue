<script setup lang="ts">
import { QBtn } from 'quasar'
import ArrowRight from '@/shared/assets/icons/arrow-right.svg'
</script>
<template>
    <div class="container-block py-[32px] mx-auto lg:mx-[0px]">
        <article class="container__article">
            <h1
                class="text-[32px] leading-[42px] sm:leading-[64px] sm:text-[48px] text-center"
            >
                Построим, отремонтируем, обслужим.
            </h1>
            <p class="text__light-secondary">
                Мы занимаемся строительством, ремонтом и обслуживанием
                зданий. Мы выполняем работы разной сложности и
                обеспечиваем надежное поддержание ваших объектов в
                хорошем состоянии.`
            </p>
            <QBtn outline class="main-page__btn" size="md" style="font-size: 16px;">
                Проконсультироваться по проекту
                <ArrowRight class="ml-[8px]" />
            </QBtn>
        </article>
        <div class="container__image">
            <img src="" alt="" class="rounded-[16px] bg__secondary" />
        </div>
    </div>
</template>
<style scoped>
.container-block {
    display: flex;
    justify-content: space-between;
    gap:32px;
}

.contaier .main-page__btn {
    width: 100%;
}

.container__article {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 32px;
    flex-shrink: 1;
    flex-grow: 1;
}

.container__article p {
    text-align: center;
    font-size: 20px;
}

.container__image {
    display: none;
}

@media (min-width: 1024px) {
    .container {
        display: flex;
        flex-direction: row;
        gap: 32px;
        width: 100%;
        justify-content: space-between;
    }

    .container__article h1 {
        text-align: left;
    }

    .container__article p {
        text-align: left;
    }

    .main-page__btn {
        max-width: fit-content;
    }

    .container__image {
        display: block;
        flex-basis: 100%;
        flex-shrink: 1;
        min-height: 344px;
    }

    .container__image img {
        width: 100%;
        height: 100%;
        background-color: var(--color--grey-25);
    }
}
</style>
