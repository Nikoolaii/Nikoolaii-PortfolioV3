<template>
  <h1
    class="text-2xl text-violet-500 dark:text-violet-400 border-b-2 border-violet-500 dark:border-violet-400 mb-4 font-bold">
    Posts
  </h1>
  <ContentList :path="getPath()" :query="{
    sort: [{ date: -1 }],
    limit: 6,
  }">
    <template #default="{ list }">
      <div v-if="list.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PostCard v-for="post in list" :key="post._path" :post="post" />
      </div>
    </template>

    <template #not-found>
      <div class="text-center py-16">
        <Icon name="mdi:file-document-outline" class="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" />
        <h3 class="text-xl font-medium text-gray-500 dark:text-gray-400 mb-2">
          {{ $t('posts.no_posts') }}
        </h3>
      </div>
    </template>
  </ContentList>

  <div class="flex mx-auto w-full justify-center">
    <button
      class="mt-8 px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-600 dark:bg-violet-400 dark:hover:bg-violet-500 transition-colors"
      @click="$router.push('/posts')">
      {{ $t('posts.see_all') }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const getPath = () => {
  return `/posts/${locale.value === 'en' ? 'en' : 'fr'}/`
}
</script>
