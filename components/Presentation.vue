<script lang="ts" setup>
import TreeJsModel from "~/components/TreeJsModel.vue";
</script>

<template>
  <div class="lg:grid lg:grid-cols-2 grid-cols-1 sm:items-center justify-items-center my-2 mx-auto">
    <div class="w-full lg:w-auto">
      <tree-js-model />
    </div>
    <div class="w-full lg:w-auto">
      <title-presentation />
    </div>
  </div>
  <hr class="my-4" />
</template>

<style scoped></style>