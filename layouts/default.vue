<template>
    <header class="bg-emerald-500">
        <div id="header" class="flex justify-between container mx-auto py-6">
            <LayoutSidebar />
            <ul>
                <li>
                    <NuxtLink to="/admin/login" class="bg-emerald-100 px-3 py-1 rounded-sm">Войти</NuxtLink>
                </li>
            </ul>
        </div>
    </header>

    <main>
        <div id="content" class="container mx-auto min-h-200">
            <slot />
        </div>
    </main>

    <footer>
        <div id="footer" class="container mx-auto">
            <p>All rights reserved &copy;</p>
        </div>
    </footer>
</template>
