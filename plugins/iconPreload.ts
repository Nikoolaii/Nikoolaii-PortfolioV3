import { techList } from '~/data/tech'
import { linkList } from '~/data/lists'

export default defineNuxtPlugin({
  name: 'icon-preloader',
  setup() {
    // Recueille toutes les icônes utilisées dans l'application
    const allIcons = [
      ...techList.map((tech) => tech.icon),
      ...linkList.map((link) => link.icon),
      'twemoji:flag-france',
      'twemoji:flag-united-kingdom',
      'material-symbols:sunny-outline-rounded',
      'material-symbols:dark-mode-outline-rounded',
    ]

    // Nous supprimons la logique de préchargement qui cause des erreurs 404
    // Le module @nuxt/icon se charge déjà de gérer le chargement des icônes correctement

    // Éventuellement pour débugger, on peut afficher les icônes qui seront utilisées
    if (process.dev) {
      console.log('Icons that will be used:', allIcons)
    }
  },
})
