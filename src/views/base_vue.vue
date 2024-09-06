<script setup lang="ts">

import {isDarkMode} from "../controllers/dark_mode_controller.ts";
</script>

<template>
<div :class="{'dark': isDarkMode}"  class="bg-white dark:bg-[#2b2b2b] transition-colors duration-500 relative container h-screen w-screen">
<main>
  <slot>

  </slot>
</main>
</div>
</template>

<style scoped>

</style>