<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import {isDarkMode} from '~/controllers/darkMode';

const loading = ref(true);

onMounted(() => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  loading.value = false;
});
</script>

<template>
  <div>
    <div v-if="loading" class="loader"><loader></loader></div>
    <div v-else :class="{'dark': isDarkMode}" class="bg-white dark:bg-gray-800 transition-colors duration-500 ease-in-out">
      <navbar/>
      <main>
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<style scoped>
.loader {
  /* Add your loader styles here */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  color: #000;
}
</style>