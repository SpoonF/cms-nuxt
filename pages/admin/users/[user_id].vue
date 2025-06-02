<script setup>
definePageMeta({
    layout: "admin",
});

const { user_id } = useRoute().params;
const accessToken = useCookie("access-token").value;
const { data: user } = await useFetch(
    "http://localhost:3001/api/admin/users/" + user_id,
    {
        headers: {
            Authorization: "Bearer " + accessToken,
        },
    }
);
</script>

<template>
    <div>
        <h1>Информация о пользователе: {{ user.name }}</h1>
        <ul>
            <li>Идентифкатор: {{ user.user_id }}</li>
            <li>Имя: {{ user.name }}</li>
            <li>Email: {{ user.email }}</li>
            <li>Пароль: {{ user.password }}</li>
        </ul>
    </div>
</template>
