// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {enabled: false},
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler"
        }
      }
    }
  },

  plugins: ['~/plugins/fontawesomePlugin.ts', "~/plugins/i18nPlugin.ts"],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
    {
      path: '~/components/presentation',
      pathPrefix: false,
    },
    {
      path: '~/components/posts',
      pathPrefix: false,
    }
  ],

  modules: ['@nuxt/ui', '@tresjs/nuxt', '@nuxt/content', '@nuxtjs/i18n'],

  i18n: {
    langDir: 'locales',
    locales: [
      {code: 'en', language: 'en-US', file: 'en.json'},
      {code: 'fr', language: 'fr-FR', file: 'fr.json'},
    ],
    lazy: true,
    strategy: 'no_prefix',
    defaultLocale: 'fr',
  },

  content: {
    documentDriven: true,
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nikolaï | Portfolio'
    }
  }
})