<script setup lang="ts"></script>
<template>
    <div class="grid grid-cols-6 service-container gap-[32px]">
        <div class="row-span-1 col-span-2 bg__secondary p-[24px]">
            <h3>Сантехнические работы</h3>
            <img
                style="bottom: 0; position: absolute"
                src="@/shared/assets/images/toilet.png"
            />
        </div>
        <div class="row-span-1 col-span-2 bg__secondary p-[24px]">
            <h3>Электромонтажные работы</h3>
            <img
                style="top: 0; position: absolute"
                src="@/shared/assets/images/lamps.png"
            />
        </div>
        <div class="row-span-1 col-span-2 bg__secondary p-[24px]">
            <h3>Вентиляция и отопление</h3>
            <img
                style="bottom: 0; position: absolute"
                src="@/shared/assets/images/conditioner.png"
            />
        </div>
        <div class="row-span-1 col-span-3 bg__secondary p-[24px]">
            <h3>Проектирование и планирование</h3>
            <img
                style="bottom: 0; position: absolute"
                src="@/shared/assets/images/macBook.png"
            />
        </div>
        <div class="row-span-1 col-span-3 bg__secondary p-[24px]">
            <h3>Капитальный ремонт</h3>
            <img
                style="bottom: 0; position: absolute"
                src="@/shared/assets/images/hammer.png"
            />
        </div>
    </div>
</template>
<style>
.service-container div {
    height: calc(100vh / 2.7);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
}
.service-container h3 {
    align-self: self-start;
}
.service-container img {
    max-height: 75%;
    align-self: self-end;
}
</style>
