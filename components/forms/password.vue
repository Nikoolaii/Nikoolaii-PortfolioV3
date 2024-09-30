<script setup lang="ts">
import { ref } from 'vue';
import darkModeToggle from '../components/darkModeToggle.vue';

const password = ref('');
const passwordError = ref('');

const submitForm = () => {
  if (password.value === localStorage.getItem('password')) {
    // Redirect to the preview with vue router
    localStorage.setItem('connected', 'true');

    // Refresh the page
    location.reload();
  } else {
    passwordError.value = 'Wrong password';
  }
};
</script>

<template>
  <div class="p-4 max-w-md mx-auto bg-gray-100 dark:bg-[#3c3f41] rounded-lg shadow-md transition-colors duration-500">
    <span v-if="passwordError" class="text-red-500">{{ passwordError }}</span>
    <h1 class="text-xl font-bold mb-4 text-black dark:text-[#a9b7c6]">Find the password to discover the preview</h1>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label for="password" class="block text-sm font-medium text-black dark:text-[#a9b7c6]">Password:</label>
        <input v-model="password" type="password" id="password" name="password" class="mt-1 block w-full px-3 py-2 bg-white dark:bg-[#2b2b2b] border border-gray-300 dark:border-[#555555] rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black dark:focus:ring-[#a9b7c6] dark:focus:border-[#a9b7c6] transition-colors duration-500">
      </div>
      <div>
        <input type="submit" value="Submit" class="w-full px-4 py-2 bg-black text-white rounded-md shadow-sm hover:bg-gray-800 dark:hover:bg-[#4e5254] transition-colors duration-500">
      </div>
    </form>
    <div class="w-100" id="buttonDarkMode">
      <darkModeToggle/>
    </div>
  </div>
</template>

<style scoped>
#buttonDarkMode > button {
  width: 100%;
}
</style>