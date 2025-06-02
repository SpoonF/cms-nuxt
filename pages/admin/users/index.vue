<script setup>
import { useAuthStore } from "~/store/auth.store";

definePageMeta({
    layout: "admin",
});
const authStore = useAuthStore();
const { data: users } = await useFetch("http://localhost:3001/api/admin/users", {
    headers: {
        Authorization: "Bearer " + authStore.token,
    },
});
console.log(users);
</script>

<template>
    <div>
        <h1>Пользователи</h1>
        <ul>
            <li v-for="(user, index) in users" :key="index">
                Имя: {{ user.name }} <br />
                Возраст: {{ user.age }}
                <NuxtLink :to="'/admin/users/' + user.id">Показать</NuxtLink>
            </li>
        </ul>
    </div>
</template>
