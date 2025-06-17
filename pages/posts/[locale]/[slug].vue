<script lang="ts" setup>
const route = useRoute()

// Récupération de la locale depuis l'URL
const postLocale = route.params.locale as string
const slug = route.params.slug as string

// Récupération du contenu du post
const { data: post } = await useAsyncData('post', () =>
  queryContent(`/posts/${postLocale}/${slug}`).findOne()
)

// Redirection si le post n'existe pas
if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found'
  })
}

// Fonction pour formater la date
const formatDate = (date: string) => {
  return new Intl.DateTimeFormat(postLocale === 'fr' ? 'fr-FR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

// Fonction pour obtenir l'estimation du temps de lecture
const getReadingTime = (content: unknown) => {
  const wordsPerMinute = 200
  const textContent = JSON.stringify(content).replace(/<[^>]*>/g, ' ')
  const words = textContent.split(' ').filter(word => word.length > 0).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return minutes
}
</script>

<template>
  <NuxtLayout>
    <div class="container mx-auto px-4 py-8 max-w-4xl">
      <!-- Breadcrumb -->
      <nav class="mb-8">
        <ol class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <li>
            <NuxtLink to="/" class="hover:text-violet-500 dark:hover:text-violet-400 transition-colors">
              {{ $t('nav.home') || 'Accueil' }}
            </NuxtLink>
          </li>
          <li>/</li>
          <li>
            <NuxtLink to="/posts" class="hover:text-violet-500 dark:hover:text-violet-400 transition-colors">
              {{ $t('posts.title') || 'Articles' }}
            </NuxtLink>
          </li>
          <li>/</li>
          <li class="text-gray-700 dark:text-gray-300">{{ post.title }}</li>
        </ol>
      </nav>

      <!-- Article Header -->
      <header class="mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          {{ post.title }}
        </h1>

        <div class="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
          <div class="flex items-center gap-2">
            <Icon name="mdi:account" class="w-5 h-5" />
            <span>{{ post.author }}</span>
          </div>

          <div class="flex items-center gap-2">
            <Icon name="mdi:calendar" class="w-5 h-5" />
            <time :datetime="post.date">{{ formatDate(post.date) }}</time>
          </div>

          <div class="flex items-center gap-2">
            <Icon name="mdi:clock-outline" class="w-5 h-5" />
            <span>{{ getReadingTime(post.body) }} min de lecture</span>
          </div>
        </div>

        <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
          {{ post.description }}
        </p>

        <!-- Tags -->
        <div v-if="post.tags && post.tags.length > 0" class="flex flex-wrap gap-2">
          <span v-for="tag in post.tags" :key="tag"
            class="inline-block px-3 py-1 text-sm bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300 rounded-full">
            #{{ tag }}
          </span>
        </div>
      </header>

      <!-- Article Content -->
      <article class="prose prose-lg prose-violet dark:prose-invert max-w-none">
        <ContentRenderer :value="post" />
      </article>

      <!-- Navigation -->
      <footer class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
          <NuxtLink to="/posts"
            class="inline-flex items-center gap-2 text-violet-500 hover:text-violet-600 dark:text-violet-400 dark:hover:text-violet-300 transition-colors">
            <Icon name="mdi:arrow-left" class="w-5 h-5" />
            {{ $t('posts.back_to_posts') || 'Retour aux articles' }}
          </NuxtLink>

          <!-- Boutons de partage -->
          <div class="flex items-center gap-2">
            <span class="text-sm text-gray-500 dark:text-gray-400 mr-2">Partager :</span>
            <a :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent($config.public.baseUrl + $route.fullPath)}`"
              target="_blank" rel="noopener noreferrer"
              class="p-2 text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="Partager sur Twitter">
              <Icon name="mdi:twitter" class="w-5 h-5" />
            </a>
            <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent($config.public.baseUrl + $route.fullPath)}`"
              target="_blank" rel="noopener noreferrer"
              class="p-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
              aria-label="Partager sur LinkedIn">
              <Icon name="mdi:linkedin" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  </NuxtLayout>
</template>

<style scoped>
/* Styles pour le contenu markdown */
:deep(.prose) {
  color: #374151;
}

.dark :deep(.prose) {
  color: #d1d5db;
}

:deep(.prose h1),
:deep(.prose h2),
:deep(.prose h3),
:deep(.prose h4),
:deep(.prose h5),
:deep(.prose h6) {
  color: #111827;
}

.dark :deep(.prose h1),
.dark :deep(.prose h2),
.dark :deep(.prose h3),
.dark :deep(.prose h4),
.dark :deep(.prose h5),
.dark :deep(.prose h6) {
  color: #ffffff;
}

:deep(.prose a) {
  color: #8b5cf6;
  text-decoration: none;
}

:deep(.prose a:hover) {
  color: #7c3aed;
  text-decoration: underline;
}

.dark :deep(.prose a) {
  color: #a78bfa;
}

.dark :deep(.prose a:hover) {
  color: #c4b5fd;
}

:deep(.prose code) {
  background-color: #f3f4f6;
  color: #7c3aed;
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
}

.dark :deep(.prose code) {
  background-color: #1f2937;
  color: #a78bfa;
}

:deep(.prose pre) {
  background-color: #111827;
  color: #f9fafb;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
}

.dark :deep(.prose pre) {
  background-color: #030712;
}

:deep(.prose pre code) {
  background-color: transparent;
  color: #f9fafb;
  padding: 0;
}

:deep(.prose blockquote) {
  border-left: 4px solid #8b5cf6;
  background-color: #faf5ff;
  padding-left: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin: 1rem 0;
  font-style: italic;
}

.dark :deep(.prose blockquote) {
  background-color: rgba(139, 92, 246, 0.1);
}

:deep(.prose table) {
  border-collapse: collapse;
  border: 1px solid #d1d5db;
}

.dark :deep(.prose table) {
  border-color: #4b5563;
}

:deep(.prose th),
:deep(.prose td) {
  border: 1px solid #d1d5db;
  padding: 0.75rem;
}

.dark :deep(.prose th),
.dark :deep(.prose td) {
  border-color: #4b5563;
}

:deep(.prose th) {
  background-color: #f3f4f6;
  font-weight: 600;
}

.dark :deep(.prose th) {
  background-color: #1f2937;
}
</style>
