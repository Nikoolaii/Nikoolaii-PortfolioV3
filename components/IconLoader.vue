<script setup>
import { techList } from '~/data/tech'
import { linkList } from '~/data/lists'

const allIcons = [
  ...techList.map((tech) => tech.icon),
  ...linkList.map((link) => link.icon),
  'twemoji:flag-france',
  'twemoji:flag-united-kingdom',
  'material-symbols:sunny-outline-rounded',
  'material-symbols:dark-mode-outline-rounded',
]
</script>

<template>
  <div style="display: none;">
    <!-- Précharge toutes les icônes en les rendant hors écran -->
    <UIcon v-for="icon in allIcons" :key="icon" :name="icon" />
  </div>
</template>
