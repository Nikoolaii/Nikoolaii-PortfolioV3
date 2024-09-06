<script setup lang="ts">
import { isDarkMode, toggleDarkMode } from '../controllers/dark_mode_controller';
</script>

<template>
  <button @click="toggleDarkMode" class="mt-4 px-4 py-2 bg-black text-white rounded transition-transform transform hover:scale-105 hover:bg-gray-800 dark:hover:bg-[#4e5254] duration-300 ease-in-out flex items-center justify-center">
    <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'" class="mr-2"></i>
    {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
  </button>
</template>

<style scoped>
</style>