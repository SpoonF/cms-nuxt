<script setup>
const ADMIN_DIR = "/admin";
</script>

<template>
    <section class="grid">
        <AdminSidebar :adminDir="ADMIN_DIR" />

        <main>
            <slot />
        </main>
    </section>
</template>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: 1fr 6fr;
    min-height: 100vh;
}
</style>
