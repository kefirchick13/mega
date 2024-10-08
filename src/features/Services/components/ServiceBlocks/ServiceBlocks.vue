<script setup lang="ts"></script>
<template>
    <div
        class="grid sm:grid-cols-6 grid-cols-2 service-container gap-[32px]"
    >
        <div
            class="row-span-1 col-span-2 bg__secondary p-[24px] overflow-hidden"
            @click="() => $router.push('/services/create')"
        >
            <h3>Сантехнические работы</h3>
            <img
                style="
                    bottom: 0;
                    position: absolute;
                    width: 150px;
                    height: 270px;
                "
                src="@/shared/assets/images/toilet.png"
            />
        </div>
        <div
            class="row-span-1 col-span-2 bg__secondary p-[24px] overflow-hidden"
            @click="() => $router.push('/services/create')"
        >
            <h3>Электромонтажные работы</h3>
            <img
                style="
                    top: 0;
                    position: absolute;
                    width: 70px;
                    height: 288px;
                "
                src="@/shared/assets/images/lamps.png"
            />
        </div>
        <div
            class="row-span-1 col-span-2 bg__secondary p-[24px] overflow-hidden"
            @click="() => $router.push('/services/create')"
        >
            <h3>Вентиляция и отопление</h3>
            <img
                style="
                    bottom: 0;
                    position: absolute;
                    width: 277px;
                    height: 221px;
                "
                src="@/shared/assets/images/conditioner.png"
            />
        </div>
        <div
            class="row-span-1 col-span-2 sm:col-span-3 bg__secondary p-[24px] overflow-hidden"
            @click="() => $router.push('/services/create')"
        >
            <h3>Проектирование и планирование</h3>
            <img
                style="
                    bottom: 0;
                    position: absolute;
                    width: 380px;
                    height: 233px;
                "
                src="@/shared/assets/images/macBook.png"
            />
        </div>
        <div
            class="sm:row-span-1 col-span-2 sm:col-span-3 bg__secondary p-[24px] overflow-hidden"
            @click="() => $router.push('/services/create')"
        >
            <h3>Капитальный ремонт</h3>
            <img
                style="
                    bottom: 0;
                    position: absolute;
                    width: 310px;
                    height: 288px;
                "
                src="@/shared/assets/images/hammer.png"
            />
        </div>
    </div>
</template>
<style>
.service-container div {
    height: 344px;
    width: 100%;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    cursor: pointer;
}

.service-container h3 {
    align-self: self-start;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
}

@media (min-width: 640px) {
    .service-container h3 {
        max-width: 230px;
    }
}

.service-container img {
    object-position: left;
    margin-left: 100px;
    object-fit: cover;
    align-self: center;
}

@media (min-width: 1024px) {
    .service-container img {
        padding-left: 0px;
        align-self: self-end;
        object-fit: cover;
    }

    .service-container h3 {
        max-width: 350px;
    }
}
</style>
