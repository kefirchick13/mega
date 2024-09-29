<script setup lang="ts">
import { ProjectBlocks } from 'src/widgets'
import { QBtn } from 'quasar'
import arrowRight from 'src/shared/assets/icons/arrow-right.svg'
import ProjectFilters from './components/ProjectFilters.vue'
</script>
<template>
    <!-- filters -->
    <div class="flex justify-center pb-[32px]">
        <ProjectFilters />
        <ProjectBlocks class="pb-[48px]"></ProjectBlocks>
        <QBtn :outline="true" size="md" class="normal-case"
            >Больше проектов<arrowRight class="ml-[8px]"
        /></QBtn>
    </div>
</template>
