// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",

    // debug: true,
    devtools: { enabled: true },

    modules: [
        "@nuxt/image",
        "@nuxtjs/tailwindcss",
        "shadcn-nuxt",
        "@nuxtjs/google-fonts",
        [
            "@nuxtjs/google-fonts",
            {
                families: {
                    Lato: {
                        wght: [300, 400, 700],
                        ital: [300],
                    },
                },
            },
        ],
        "@pinia/nuxt",
    ],
    shadcn: {
        prefix: "Ui",
        componentDir: "./components/ui",
    },
    pinia: {
        storesDirs: ["./store/**"],
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
