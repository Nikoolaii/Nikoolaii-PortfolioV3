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

    // Précharge les icônes lorsque l'application est chargée
    if (process.client) {
      setTimeout(() => {
        allIcons.forEach((icon) => {
          const [collection, name] = icon.split(':')
          // Force le chargement de l'icône via le système de cache du navigateur
          fetch(`/node_modules/@iconify/icons-${collection}/${name}.svg`).catch(() => {}) // Ignore les erreurs silencieusement
        })
      }, 0)
    }
  },
})
