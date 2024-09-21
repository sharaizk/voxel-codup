// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: true,
  css: ["./assets/scss/app.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler", // or "modern"
        },
      },
    },
  },

  modules: ["@nuxtjs/google-fonts", "@pinia/nuxt", "@nuxt/image"],
  googleFonts: {
    families: {
      "Instrument+Sans": [100, 300, 400, 500, 700], // Specify font weights
    },
  },
});
