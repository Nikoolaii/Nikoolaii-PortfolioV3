<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { isDarkMode, toggleDarkMode } from '~/controllers/darkMode'

const { setLocale, locale } = useI18n()

const changeLanguage = () => {
  setLocale(locale.value === 'en' ? 'fr' : 'en')
}
</script>

<template>
  <div>
    <u-button :icon="locale === 'en' ? 'twemoji:flag-france' : 'twemoji:flag-united-kingdom'" class="ml-3"
      color="violet" size="lg" variant="soft" @click="changeLanguage" />
    <u-button :icon="isDarkMode
      ? 'line-md:sun-rising-loop'
      : 'line-md:moon-simple'
      " class="ml-3" color="violet" size="lg" variant="soft" @click="toggleDarkMode" />
  </div>
</template>
