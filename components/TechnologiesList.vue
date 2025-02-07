<script setup>
import { techList } from '~/data/tech';
</script>

<template>
  <div>
    <h1
      class="text-2xl text-violet-500 dark:text-violet-400 border-b-2 border-violet-500 dark:border-violet-400 mb-4 font-bold">
      {{ $t('technologies.title') }}
    </h1>
    <div class="tech-icons-container flex whitespace-nowrap overflow-auto">
      <UTooltip v-for="(item, index) in techList" :key="index" :text="item.name" :delay="500"
        :popper="{ arrow: true, placement: 'top' }">
        <UIcon :name="item.icon" class="tech-icon mr-2 mb-2 h-24 w-24" />
      </UTooltip>
    </div>
  </div>
</template>