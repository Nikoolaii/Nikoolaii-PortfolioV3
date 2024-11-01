export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    setup() {
      const {t} = useI18n();
      return {t};
    }
  });
});