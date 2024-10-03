<script lang="ts" setup>

const Links = [
  // { name: 'Presentation', path: '/presentation' },
  // { name: 'Blog', path: '/blog' },
  // { name: 'Projects', path: '/projects' },
  // { name: 'Contact', path: '/contact' },
]

</script>

<template>
  <div>
    <u-link v-for="link in Links" :key="link.name" :to="link.path" class="mx-2">{{ link.name }}</u-link>
  </div>
</template>

<style scoped>

</style>