<script lang="ts" setup>
const links = [{
  label: 'Nuxt UI',
  to: 'https://ui.nuxt.com/'
}, {
  label: 'Nuxt Docs',
  to: 'https://nuxt.com'
}, {
  label: 'Nuxt Studio',
  to: 'https://nuxt.studio'
}]
</script>

<template>
  <UFooter :links="links">
    <template #left>
      Copyright © {{ new Date().getFullYear() }}
    </template>

    <template #right>
      <UButton color="gray" icon="i-simple-icons-x" target="_blank" to="https://x.com/nuxt_js" variant="ghost" />
      <UButton color="gray" icon="i-simple-icons-discord" target="_blank" to="https://discord.com/invite/ps2h6QT" variant="ghost" />
      <UButton color="gray" icon="i-simple-icons-github" target="_blank" to="https://github.com/nuxt/nuxt" variant="ghost" />
    </template>
  </UFooter>
</template>

