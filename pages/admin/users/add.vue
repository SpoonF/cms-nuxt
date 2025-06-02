<script setup>
definePageMeta({
    layout: "admin",
});

const accessToken = useCookie("access-token").value;

const user = {
    name: "",
    email: "",
    password: "",
};

async function handlerFormSubmit(event) {
    event.preventDefault();

    await $fetch("http://localhost:3001/api/admin/users", {
        method: "POST",
        body: user,
        headers: {
            Authorization: "Bearer " + accessToken,
        },
    }).then(console.log);
}

function handleInput({ target }) {
    user[target.name] = target.value;
}
</script>

<template>
    <div>
        <h1>Добавить пользователя</h1>
        <form @submit="handlerFormSubmit">
            <input
                type="text"
                name="name"
                placeholder="Имя"
                :value="user.name"
                @input="handleInput"
                required
            />
            <input
                type="text"
                name="email"
                placeholder="Почта"
                :value="user.email"
                @input="handleInput"
                required
            />
            <input
                type="text"
                name="password"
                placeholder="Пароль"
                :value="user.password"
                @input="handleInput"
                required
            />
            <input type="submit" value="Отправить" />
        </form>
    </div>
</template>
