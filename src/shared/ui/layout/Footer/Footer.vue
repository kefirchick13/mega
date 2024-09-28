<script setup lang="ts">
import { ref } from 'vue'
interface Ilink {
    name: string
    link: string
}

const companyArray = ref<Ilink[]>([
    { name: 'История', link: '/story' },
    { name: 'Миссия', link: '/story' },
    { name: 'Статистика', link: '/story' },
    { name: 'Контакты', link: '/story' },
    { name: 'Вакансии', link: '/story' },
    { name: 'Политика конфиденциальности', link: '/story' },
    { name: 'Публичная оферта', link: '/story' },
])

const projects = ref<Ilink[]>([
    { name: 'Остоженка 25', link: '/story' },
    { name: 'Коробейников 18', link: '/story' },
    { name: 'Бакинская 26', link: '/story' },
    { name: 'Контакты', link: '/story' },
    { name: 'Верейская 5', link: '/story' },
    { name: 'Университетская 2', link: '/story' },
    { name: 'Часовая 21 Б', link: '/story' },
    { name: 'Плотников 2/8', link: '/story' },
    { name: 'Нахимовский 47', link: '/story' },
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
    <div class="flex gap-[32px] flex-nowrap my-[32px] px-[20px]">
        <div class="columns flex flex-nowrap flex-1 gap-[32px]">
            <div class="flex flex-col items-start">
                <p>Компания</p>
                <RouterLink
                    v-for="item in companyArray"
                    :to="item.link"
                    class="text__light-secondary max-w-[148px] pb-[16px]"
                >
                    <span>{{ item.name }}</span>
                </RouterLink>
            </div>
            <div class="flex flex-col items-start">
                <p>Проекты</p>
                <RouterLink
                    v-for="item in projects"
                    :to="item.link"
                    class="text__light-secondary max-w-[148px] pb-[16px]"
                    :item="item.name"
                >
                    <span>{{ item.name }}</span>
                </RouterLink>
            </div>
            <div class="flex flex-col items-start">
                <p>Социальные сети</p>
                <RouterLink
                    v-for="item in socialLinks"
                    :to="item.link"
                    class="text__light-secondary max-w-[148px] pb-[16px]"
                >
                    <span>{{ item.name }}</span>
                </RouterLink>
            </div>
            <div class="flex flex-col items-start">
                <p>Пресса</p>
                <RouterLink
                    v-for="item in news"
                    :to="item.link"
                    class="text__light-secondary max-w-[148px] pb-[16px]"
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
