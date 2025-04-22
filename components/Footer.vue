<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <footer class="dark:text-white p-4 text-center">
    <p>&copy; {{ new Date().getFullYear() }} - {{ t('footer') }}</p>
  </footer>
</template>
