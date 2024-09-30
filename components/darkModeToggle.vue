<script setup lang="ts">
import { ref } from 'vue';

const isDarkMode = ref(false);

if (typeof window !== 'undefined') {
  isDarkMode.value = localStorage.getItem('isDarkMode') === 'true';
}

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
    if (typeof window !== 'undefined') {
      localStorage.setItem('isDarkMode', 'true');
    }
  } else {
    document.documentElement.classList.remove('dark');
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isDarkMode');
    }
  }
};

// Ensure the class is set correctly on initial load
if (typeof window !== 'undefined') {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

defineExpose({
  isDarkMode,
  toggleDarkMode
});
</script>

<template>
  <button @click="toggleDarkMode" class="mt-4 px-4 py-2 bg-black text-white rounded transition-transform transform hover:scale-105 hover:bg-gray-800 dark:hover:bg-[#4e5254] duration-300 ease-in-out flex items-center justify-center">
    <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'" class="mr-2"></i>
    {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
  </button>
</template>

<style scoped>
</style>