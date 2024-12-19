<script lang="ts" setup>
import {useI18n} from 'vue-i18n';

interface TimelineItem {
  title: string;
  subtitle: string;
  date: string;
  content: string | string[];
  tags: string[];
  type?: string;
}

const props = defineProps<{
  timeline: TimelineItem[];
  title: string;
}>();

const { t } = useI18n()


console.log(t('timeline.netim.content'))
</script>

<template>
  <div>
    <h1 class="text-2xl text-violet-500 dark:text-violet-400 border-b-2 border-violet-500 dark:border-violet-400 mb-4 font-bold">
      {{ title }}
    </h1>
    <ul>
      <li v-for="(item, index) in timeline" :key="index" class="mb-4">
        <h2 class="text-xl font-semibold">{{ t(item.title) }}</h2>
        <h3 class="text-lg text-gray-600">{{ item.subtitle }}</h3>
        <p v-if="item.type">{{ t(item.type) }}</p>
        <p class="text-sm text-gray-500">{{ item.date }}</p>
        <div v-if="Array.isArray(item.content)">
          <p v-for="(contentItem, contentIndex) in item.content" :key="contentIndex">{{ t(contentItem) }}</p>
        </div>
        <p v-else>{{ t(item.content) }}</p>
        <ul class="flex flex-wrap">
          <li v-for="(tag, tagIndex) in item.tags" :key="tagIndex" class="mr-2 mb-2 px-2 py-1 bg-violet-50 dark:bg-violet-950 text-violet-500 dark:text-violet-400 rounded">
            {{ tag }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Add any additional styling here */
</style>