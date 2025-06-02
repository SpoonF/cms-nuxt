<script setup lang="ts">
const { adminDir } = defineProps({
    adminDir: {
        type: String,
        require: true,
    },
});
</script>

<template>
    <aside class="px-5 py-8 h-full relative w-full bd-sidebar">
        <NuxtLink to="/admin" class="mb-5 block">
            <NuxtImg src="/logo.png" alt="" width="100px" class="mx-auto" />
        </NuxtLink>
        <ul>
            <li><NuxtLink :to="adminDir">Панель управления</NuxtLink></li>
            <li>
                <NuxtLink :to="`${adminDir}/users`">Пользователи</NuxtLink>
                <ul>
                    <li>
                        <NuxtLink :to="`${adminDir}/users/add`">Добавить пользователя</NuxtLink>
                    </li>
                </ul>
            </li>
        </ul>
    </aside>
</template>
