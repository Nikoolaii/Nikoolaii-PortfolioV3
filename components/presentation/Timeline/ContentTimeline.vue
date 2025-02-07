<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TimelineItem {
  title: string;
  subtitle: string;
  date: string;
  content: string[];
  tags: string[];
  type?: string;
}

const props = defineProps<{
  timeline: TimelineItem[];
  title: string;
  direction: 'left' | 'right';
}>();

const { t } = useI18n();

const getContent = (item: TimelineItem) => {
  return item.content.map(contentKey => t(contentKey));
};

onMounted(async () => {
  await nextTick(); // Assurez-vous que les éléments sont rendus avant d'appliquer les animations

  gsap.utils.toArray('.timeline-item').forEach((item) => {
    gsap.fromTo(item,
      { opacity: 0, x: props.direction === 'left' ? -50 : 50 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          end: 'bottom 10%',
          toggleActions: 'play reverse play reverse',
        },
        duration: 1,
      }
    );
  });
});
</script>

<template>
  <div>
    <h1
      class="text-2xl text-violet-500 dark:text-violet-400 border-b-2 border-violet-500 dark:border-violet-400 mb-4 font-bold">
      {{ title }}
    </h1>
    <ul>
      <li v-for="(item, index) in timeline" :key="index" class="timeline-item mb-4">
        <h2 class="text-xl font-semibold">{{ t(item.title) }}</h2>
        <h3 class="text-lg text-gray-600">{{ item.subtitle }}</h3>
        <p v-if="item.type">{{ t(item.type) }}</p>
        <p class="text-sm text-gray-500">{{ item.date }}</p>
        <ul class="list-disc ml-4 mt-2 space-y-1">
          <li v-for="(contentItem, key) in getContent(item)" :key="key" class="text-gray-700 dark:text-gray-300">
            {{ contentItem }}
          </li>
        </ul>
        <ul class="flex flex-wrap">
          <li v-for="(tag, tagIndex) in item.tags" :key="tagIndex"
            class="mr-2 mb-2 px-2 py-1 bg-violet-50 dark:bg-violet-950 text-violet-500 dark:text-violet-400 rounded">
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