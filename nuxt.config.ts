import { defineNuxtConfig } from 'nuxt/config'

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

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },

  plugins: ['~/plugins/i18nPlugin.ts', '~/plugins/iconPreload.ts'],

  components: [
    { path: '~/components', pathPrefix: false },
    { path: '~/components/presentation', pathPrefix: false },
    { path: '~/components/posts', pathPrefix: false },
  ],

  modules: [
    '@nuxt/ui',
    '@tresjs/nuxt',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/icon', // Ajout explicite du module Nuxt Icon
  ],

  icon: {
    // Configuration améliorée pour résoudre les problèmes sur Vercel
    size: '24px', // Taille par défaut
    class: 'icon',
    serverBundle: {
      collections: ['twemoji', 'material-symbols', 'mdi'],
      includeIDs: [
        'mdi:language-php',
        'mdi:language-css3',
        'mdi:language-html5',
        'mdi:language-javascript',
        'mdi:language-typescript',
        'mdi:language-python',
        'mdi:font-awesome',
        'mdi:tailwind',
        'mdi:laravel',
        'mdi:symfony',
        'mdi:vuejs',
        'mdi:nuxt',
        'mdi:docker',
        'mdi:wordpress',
        'twemoji:flag-france',
        'twemoji:flag-united-kingdom',
        'material-symbols:sunny-outline-rounded',
        'material-symbols:dark-mode-outline-rounded',
      ],
    },
    ssr: true, // Force le rendu SSR des icônes
    alias: {
      // Ajouter des alias si nécessaire
    },
  },

  runtimeConfig: {
    public: {
      githubToken: process.env.GITHUB_TOKEN,
    },
  },

  i18n: {
    langDir: 'locales',
    locales: [
      { code: 'en', language: 'en-US', file: 'en.json' },
      { code: 'fr', language: 'fr-FR', file: 'fr.json' },
    ],
    lazy: true,
    strategy: 'no_prefix',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },

  content: {
    documentDriven: true,
    contentHead: false,
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nikolaï | Portfolio',
      script: [
        {
          hid: 'gtm',
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KV6NMD5Q');`,
          type: 'text/javascript',
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        gtm: ['innerHTML'],
        gtmBody: ['innerHTML'],
      },
    },
    bodyAttrs: {
      // Ajout du GTM noscript dans le body
      innerHTML: `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KV6NMD5Q"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`,
      'data-hid': 'gtmBody',
    },
  },
})
