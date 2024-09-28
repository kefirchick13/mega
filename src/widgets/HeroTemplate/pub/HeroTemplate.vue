<script setup lang="ts"></script>

<template>
    <section class="max-w-[1408px] mx-auto px-[20px] mb-[48px]">
        <slot class="mb-[32px]" name="title" />
        <slot class="mb-[32px]" name="description" />
        <slot name="actions" />
    </section>
</template>
