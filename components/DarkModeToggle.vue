<script lang="ts" setup>
import {isDarkMode, toggleDarkMode} from '~/controllers/darkMode';
</script>

<template>
  <button class="mt-4 px-4 py-2 bg-gray-800 text-white rounded transition-transform transform hover:scale-105 hover:bg-gray-800 dark:hover:bg-gray-300 dark:bg-white duration-300 ease-in-out flex items-center justify-center" @click="toggleDarkMode">
    <font-awesome-icon :icon="isDarkMode ? 'sun' : 'moon'" class="h-5 dark:text-black text-white" />
  </button>
</template>

<style scoped>
</style>