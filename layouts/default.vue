<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { isDarkMode } from '~/controllers/darkMode'
import { sleep } from '@antfu/utils'
import Footer from '~/components/footer.vue'
import Navbar from '~/components/navbar.vue'

const loading = ref(true)

onMounted(async () => {
  await sleep(300)
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  loading.value = false
})
</script>

<template>
  <div>
    <div v-if="loading" class="loader"><loader /></div>
    <div v-else :class="{ dark: isDarkMode }" class="container mx-auto">
      <Navbar />
      <main>
        <slot></slot>
      </main>
      <Footer />
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
