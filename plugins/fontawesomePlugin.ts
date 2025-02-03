import {library, dom} from '@fortawesome/fontawesome-svg-core';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(faSun, faMoon);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);

  nuxtApp.hook('app:mounted', () => {
    dom.watch(); // Force le rechargement des icônes FontAwesome après le montage de l'application
  });

  nuxtApp.hook('page:finish', () => {
    dom.watch(); // Force le rechargement des icônes FontAwesome après chaque changement de route
  });
});