<template>
  <article class="group cursor-pointer">
    <UCard class="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105">
      <template #header>
        <div class="space-y-2">
          <h2
            class="font-bold text-xl text-violet-500 dark:text-violet-400 group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors">
            {{ post.title }}
          </h2>
          <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Icon name="mdi:calendar" class="w-4 h-4" />
            <time :datetime="post.date">{{ formatDate(post.date) }}</time>
          </div>
          <div v-if="post.tags && post.tags.length > 0" class="flex flex-wrap gap-1">
            <span v-for="tag in post.tags" :key="tag"
              class="inline-block px-2 py-1 text-xs bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300 rounded-full">
              #{{ tag }}
            </span>
          </div>
        </div>
      </template>

      <div class="space-y-4">
        <p class="text-gray-600 dark:text-gray-300 line-clamp-3">
          {{ post.description }}
        </p>
      </div>

      <template #footer>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Icon name="mdi:account" class="w-4 h-4" />
            <span>{{ post.author }}</span>
          </div>
          <NuxtLink :to="`/posts/${locale}/${post._path.split('/').pop()}`"
            class="text-violet-500 hover:text-violet-600 dark:text-violet-400 dark:hover:text-violet-300 font-medium transition-colors inline-flex items-center gap-2">
            {{ $t('posts.read_more') }}
            <Icon name="mdi:arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>
      </template>
    </UCard>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface Post {
  _path: string
  title: string
  date: string
  description: string
  author: string
  tags?: string[]
}

interface Props {
  post: Post
}

defineProps<Props>()
const { locale } = useI18n()

const formatDate = (date: string) => {
  return new Intl.DateTimeFormat(locale.value === 'fr' ? 'fr-FR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
