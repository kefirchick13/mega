<script setup lang="ts">
interface IBlog {
    blog: {
        name: string
        img?: string
    }
}

const props = defineProps<IBlog>()
</script>

<template>
    <div class="flex-1 shrink-0 min-w-[400px]">
        <img
            :src="props.blog.img || ''"
            alt=""
            class="bg__secondary border-none outline-none rounded-[16px] h-[344px] mb-[16px]"
        />
        <div>
            <h4 class="mb-[8px] text-[20px] leading-[23px]">
                {{ props.blog.name }}
            </h4>
        </div>
    </div>
</template>
