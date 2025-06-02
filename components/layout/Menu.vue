<script setup lang="ts">
import { MENU_DATA } from "./menu.data";
</script>

<template>
    <menu class="flex gap-2 justify-between">
        <li v-for="item in MENU_DATA" :key="item.name">
            <NuxtLink :to="item.url" class="bg-emerald-100 px-3 py-1 rounded-sm hover:bg-sky-100">{{ item.name }}</NuxtLink>
        </li>
    </menu>
</template>
