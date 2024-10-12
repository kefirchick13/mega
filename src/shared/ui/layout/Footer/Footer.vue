<script setup lang="ts">
import { ref } from 'vue'
interface Ilink {
    name: string
    link: string
}

const companyArray = ref<Ilink[]>([
    { name: 'История', link: '/about' },
    { name: 'Миссия', link: '/about' },
    { name: 'Статистика', link: '/about' },
    { name: 'Контакты', link: '/contacts' },
    { name: 'Вакансии', link: '/about' },
    { name: 'Политика конфиденциальности', link: '/policy' },
    { name: 'Публичная оферта', link: '/policy' },
])

const projects = ref<Ilink[]>([
    { name: 'Остоженка 25', link: '/projects' },
    { name: 'Коробейников 18', link: '/projects' },
    { name: 'Бакинская 26', link: '/projects' },
    { name: 'Контакты', link: '/projects' },
    { name: 'Верейская 5', link: '/projects' },
    { name: 'Университетская 2', link: '/projects' },
    { name: 'Часовая 21 Б', link: '/projects' },
    { name: 'Плотников 2/8', link: '/projects' },
    { name: 'Нахимовский 47', link: '/projects' },
])

const socialLinks = ref<Ilink[]>([
    { name: 'Вконтакте', link: '/story' },
    { name: 'Телеграм', link: '/story' },
])

const news = ref<Ilink[]>([
    { name: 'Новости', link: '/news' },
    { name: 'Блог', link: '/blog' },
])
</script>
<template>
    <div class="flex lg:flex-row flex-col-reverse gap-[32px] flex-nowrap py-[32px] px-[20px] ">
        <div class="columns flex flex-col sm:flex-row flex-nowrap gap-[32px] sm:items-start links-container flex-1">
            <div class="flex flex-col column-text w-full ">
                <p>Компания</p>
                <RouterLink
                    v-for="item in companyArray"
                    :to="item.link"
                    class="text__light-secondary max-w-[148px] truncate pb-[16px]"
                >
                    <span class=" truncate">{{ item.name }}</span>
                </RouterLink>
            </div>
            <div class="flex flex-col column-text">
                <p>Проекты</p>
                <RouterLink
                    v-for="item in projects"
                    :to="item.link"
                    class="text__light-secondary  max-w-[148px] truncate pb-[16px]"
                    :item="item.name"
                >
                    <span class=" truncate">{{ item.name }}</span>
                </RouterLink>
            </div>
            <div class="flex flex-col column-text">
                <p class="text-nowrap truncate">Социальные сети</p>
                <RouterLink
                    v-for="item in socialLinks"
                    :to="item.link"
                    class="text__light-secondary  max-w-[148px] truncate pb-[16px]"
                >
                    <span class=" truncate">{{ item.name }}</span>
                </RouterLink>
            </div>
            <div class="flex flex-col column-text">
                <p>Пресса</p>
                <RouterLink
                    v-for="item in news"
                    :to="item.link"
                    class="text__light-secondary max-w-[148px] truncate pb-[16px]"
                >
                    <span class=" truncate">{{ item.name }}</span>
                </RouterLink>
            </div>
        </div>
        <div class="container-width flex-1">
            <p class="text__light-secondary ">
                Все права на публикуемые на сайте megaconstructing.ru
                материалы принадлежат ООО «МЕГА» © 2023 — 2024.
            </p>
            <p class="text__light-secondary ">
                Пользователь уведомлен, что любые материалы,
                размещенные на сайте, являются объектами
                интеллектуальной собственности ООО «МЕГА»
                (правообладателя). Пользователь не вправе без
                предварительного письменного разрешения
                правообладателя осуществлять какие-либо действия с
                объектами интеллектуальной собственности, в противном
                случае, правообладатель оставляет за собой право на
                взыскание штрафов, предусмотренных законодательством
                РФ, а также на обращение в компетентные органы за
                защитой своих прав и законных интересов.
            </p>
            <p class="text__light-secondary ">
                Любая информация, представленная на данном сайте,
                носит исключительно информационный характер и ни при
                каких условиях не является публичной офертой,
                определяемой положениями статьи 437 ГК РФ.
            </p class="text__light-secondary ">
        </div>
    </div>
</template>
<style scoped>
.column-text{
    align-items: center;
    max-width: 148px;
}
.links-container{
    max-width: 100%;
    align-items: center;
}

@media (min-width: 1024px) {
    .links-container{
    max-width: calc(50% - 16px);
   
}
}
@media (min-width: 640px) {
    .column-text{
    align-items: start;
    max-width: 20%;
    }
    .column-text p, a, span{
        max-width: 100%;
    }
    .links-container{
    align-items: flex-start;
    }

}


</style>