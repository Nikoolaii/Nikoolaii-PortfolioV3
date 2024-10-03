<script lang="ts" setup>
import { isDarkMode, toggleDarkMode } from '~/controllers/darkMode';
</script>

<template>
    <div>
      <u-button
      :icon="isDarkMode ? 'material-symbols:sunny-outline-rounded' : 'material-symbols:dark-mode-outline-rounded'"
      color="violet" size="lg" variant="soft" @click="toggleDarkMode" />
    </div>
</template>