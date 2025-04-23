<script lang="ts" setup>
import Technologies from '~/components/technologiesListVue.vue'
</script>

<template>
  <NuxtLayout>
    <div>
      <presentation />
      <info />
      <Technologies />
      <duo-timeline />
      <get_six />
      <!-- Ajout des 6 derniers repos GitHub -->
      <get-six-repos />
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
