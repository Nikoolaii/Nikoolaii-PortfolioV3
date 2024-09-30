<script setup lang="ts">
import Password from "~/components/forms/password.vue";
import { isDarkMode } from "~/controllers/darkMode";

if (typeof window !== 'undefined') {
  localStorage.setItem('password', 'YesImThePassword');
}
</script>

<template>
  <div :class="{ 'dark': isDarkMode }" class="bg-white dark:bg-[#2b2b2b] transition-colors duration-500 relative">
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="circle w-96 h-96 bg-gray-200 dark:bg-[#3c3f41] rounded-full opacity-50 absolute top-10 left-10"></div>
      <div class="circle w-72 h-72 bg-gray-300 dark:bg-[#4e5254] rounded-full opacity-50 absolute bottom-20 right-20"></div>
      <div class="circle w-48 h-48 bg-gray-400 dark:bg-[#5a5d60] rounded-full opacity-50 absolute top-1/4 left-1/4"></div>
    </div>
    <div class="flex items-center justify-center h-screen text-black dark:text-[#a9b7c6] transition-colors duration-500 relative z-10">
      <div class="w-4/5 text-center">
        <h1 class="text-3xl font-bold mb-4">This website is under construct...</h1>
        <password />
      </div>
    </div>
  </div>
</template>

<style scoped>
.circle {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.circle:hover {
  transform: scale(1.1);
  opacity: 0.7;
}
</style>