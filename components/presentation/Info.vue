<script lang="ts" setup></script>

<template>
  <div class="my-5">
    <h1
      class="text-2xl text-violet-500 dark:text-violet-400 border-b-2 border-violet-500 dark:border-violet-400 mb-4 font-bold"
    >
      {{ $t('presentation.title') }}
    </h1>
    <p v-html="$t('presentation.presentation_description')"></p>
  </div>
</template>

<style scoped></style>
