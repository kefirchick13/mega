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
    <div class="flex lg:flex-row flex-col-reverse gap-[32px] flex-nowrap py-[32px] px-[20px] t">
        <div class="columns flex flex-col  sm:flex-row flex-nowrap flex-1 gap-[32px]">
            <div class="flex flex-col items-center sm:items-start">
                <p>Компания</p>
                <RouterLink
                    v-for="item in companyArray"
                    :to="item.link"
                    class="text__light-secondary max-w-[148px] truncate pb-[16px]"
                >
                    <span>{{ item.name }}</span>
                </RouterLink>
            </div>
            <div class="flex flex-col items-center sm:items-start">
                <p>Проекты</p>
                <RouterLink
                    v-for="item in projects"
                    :to="item.link"
                    class="text__light-secondary max-w-[148px] truncate pb-[16px]"
                    :item="item.name"
                >
                    <span>{{ item.name }}</span>
                </RouterLink>
            </div>
            <div class="flex flex-col items-center sm:items-start">
                <p class="text-nowrap">Социальные сети</p>
                <RouterLink
                    v-for="item in socialLinks"
                    :to="item.link"
                    class="text__light-secondary max-w-[148px] truncate pb-[16px]"
                >
                    <span>{{ item.name }}</span>
                </RouterLink>
            </div>
            <div class="flex flex-col items-center sm:items-start">
                <p>Пресса</p>
                <RouterLink
                    v-for="item in news"
                    :to="item.link"
                    class="text__light-secondary max-w-[148px] truncate pb-[16px]"
                >
                    <span>{{ item.name }}</span>
                </RouterLink>
            </div>
        </div>
        <div>
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
