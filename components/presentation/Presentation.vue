<script lang="ts" setup>
</script>

<template>
  <div class="relative">
    <svg class="absolute top-0 left-0 z-10 opacity-40" width="180" height="180">
      <circle cx="60" cy="60" r="50" fill="#a5b4fc" />
      <circle cx="120" cy="120" r="30" fill="#fbcfe8" />
    </svg>
    <div
      class="relative z-20 lg:grid lg:grid-cols-2 grid-cols-1 sm:items-center justify-items-center my-24 mx-auto border-4 border-white/40 rounded-3xl shadow-[0_10px_60px_10px_rgba(80,80,180,0.25)] backdrop-blur-md bg-white/10">
      <div class="w-full lg:w-auto p-8">
        <tree-js-model />
      </div>
      <div class="w-full lg:w-auto p-8 flex flex-col items-center">
        <title-presentation />
        <div class="mt-4 w-24 h-1 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-pulse">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
