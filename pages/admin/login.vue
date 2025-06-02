<script setup>
import { useAuthStore } from "~/store/auth.store";
import { useIsLoadingStore } from "~/store/loading.store";

useHead({
    title: "Login",
});

const emailRef = ref("");
const passwordRef = ref("");

const isLoadingStore = useIsLoadingStore();
const authStore = useAuthStore();
const router = useRouter();

const login = async (event) => {
    event.preventDefault();

    isLoadingStore.set(true);
    const data = await $fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
            email: emailRef,
            password: passwordRef,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    authStore.set({ token: data["access-token"] });
};
</script>

<template>
    <div class="flex items-center justify-center w-full min-h-200">
        <div class="rounded bg-sidebar w-1/4 p-5">
            <h1 class="text-2xl font-bold text-center mb-5">Авторизация</h1>
            <form @submit="login">
                <UiInput placeholder="Email" type="email" class="mb-3" v-model="emailRef" />
                <UiInput placeholder="Password" type="password" class="mb-3" v-model="passwordRef" />
                <UiButton class="w-full curs">Отправить</UiButton>
            </form>
        </div>
    </div>
</template>
