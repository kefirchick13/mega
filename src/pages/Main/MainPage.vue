<script setup lang="ts">
import {
    MainHero,
    MainServices,
    MainProjects,
    MainNews,
    MainFaq,
    MainDescription,
    MainBlog,
} from 'src/features/Main/components'

import { FeedBack } from 'src/widgets'
</script>

<template>
    <div class="w-full px-[20px] max-w-[1408px] mx-auto lg:mx-[0px]">
        <MainHero />
        <MainServices />
        <MainProjects />
        <MainNews />
        <MainFaq />
        <MainDescription />
        <MainBlog />
        <FeedBack />
    </div>
</template>
