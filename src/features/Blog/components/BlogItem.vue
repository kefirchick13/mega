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
    <div class="">
        <RouterLink
            :to="{
                name: 'BlogTypePage',
                params: { id: 7 },
            }"
        >
            <img
                :src="props.blog.img || ''"
                alt=""
                class="bg__secondary w-full object-cover relative rounded-[16px] h-[344px] mb-[16px]"
                style="outline: none"
            />
            <div>
                <h4
                    class="mb-[8px] text-[20px] leading-[23px] max-w-[380px] truncate"
                >
                    {{ props.blog.name }}
                </h4>
            </div>
        </RouterLink>
    </div>
</template>
