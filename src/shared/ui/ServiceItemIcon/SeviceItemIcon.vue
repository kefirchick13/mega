<script setup lang="ts">
interface IProps {
    service: {
        img: string,
        name: string,
    }
}
const props = defineProps<IProps>()
</script>

<template>
    <div class="flex flex-col items-center"> <img :src="props.service.img" alt="" class="w-[64px] h-[64px] bg__secondary rounded-full mb-[8px]">
    <p class="truncate w-[128px] m-0">{{props.service.name}}</p>
    </div>
</template>
