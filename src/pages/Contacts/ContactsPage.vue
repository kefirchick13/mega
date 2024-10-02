<script setup lang="ts">
import { FeedBack } from 'src/widgets'
import { ContactForm } from 'src/features/Contacts/components/ContactForm'
</script>
<template>
    <div class="w-full px-[20px]">
        <div class="my-[32px]">
            <h1 class="mb-[48px]">Контакты</h1>
            <ContactForm />
        </div>
        <FeedBack />
    </div>
</template>
