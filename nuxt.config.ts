// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  plugins: ['~/plugins/fontawesome.ts'],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
    {
      path: '~/components/presentation',
      pathPrefix: false,
    }
  ],

  modules: ['@nuxt/ui', '@tresjs/nuxt', '@nuxt/content'],
})