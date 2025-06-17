<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

// Fonction pour obtenir le chemin selon la langue
const getPath = () => {
  return `/posts/${locale.value === 'en' ? 'en' : 'fr'}/`
}
</script>

<template>
  <NuxtLayout>
    <div class="container mx-auto px-4 py-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-violet-500 dark:text-violet-400 mb-4">
          {{ $t('posts.title') }}
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {{ $t('posts.description') }}
        </p>
      </div>

      <!-- Posts Grid -->
      <ContentList :path="getPath()" :query="{
        sort: [{ date: -1 }],
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
    </div>
  </NuxtLayout>
</template>
