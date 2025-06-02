<script setup>
definePageMeta({
    layout: "admin",
});

const list = useCookie("list", {
    default: () => [],
    watch: "shallow",
});

function add() {
    list.value?.push(Math.round(Math.random() * 1000));
    // list cookie not update with this change
}

function save() {
    if (list.value && list.value !== null) {
        list.value = [...list.value];
        // list cookie update with this change
    }
}
</script>

<template>
    <div>
        <h1>List</h1>
        <pre>{{ list }}</pre>
        <button @click="add">Add</button>
        <button @click="save">Save</button>
    </div>
</template>
