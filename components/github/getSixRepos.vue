<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const repos = ref<any[]>([])
const loading = ref(true)
const error = ref('')

const config = useRuntimeConfig()
const githubToken = config.public.githubToken
const githubUsername = 'Nikoolaii'

// Fonction utilitaire pour décoder du base64 côté client
function decodeBase64(str: string) {
  try {
    // Corrige les caractères non valides pour atob
    str = str.replace(/\s/g, '')
    return decodeURIComponent(
      Array.prototype.map
        .call(atob(str), (c: string) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        })
        .join('')
    )
  } catch {
    return ''
  }
}

const fetchRepos = async () => {
  try {
    const repoRes = await $fetch(
      `https://api.github.com/users/${githubUsername}/repos?sort=pushed&per_page=6&type=public`,
      {
        headers: {
          Authorization: `Bearer ${githubToken}`,
          Accept: 'application/vnd.github+json',
        },
      }
    )
    const reposWithReadme = await Promise.all(
      repoRes.map(async (repo: any) => {
        try {
          const readmeMeta = await $fetch(
            `https://api.github.com/repos/${githubUsername}/${repo.name}/readme`,
            {
              headers: {
                Authorization: `Bearer ${githubToken}`,
                Accept: 'application/vnd.github+json',
              },
            }
          )
          // Décodage base64 avec atob côté client
          const markdown = readmeMeta && readmeMeta.content
            ? decodeBase64(readmeMeta.content)
            : ''
          const { marked } = await import('marked')
          const readmeHtml = markdown ? marked.parse(markdown) : `<i>${t('github.no_readme')}</i>`
          return { ...repo, readmeHtml }
        } catch {
          return { ...repo, readmeHtml: `<i>${t('github.no_readme')}</i>` }
        }
      })
    )
    repos.value = reposWithReadme
  } catch (e) {
    error.value = t('github.error')
  } finally {
    loading.value = false
  }
}

onMounted(fetchRepos)
</script>

<template>
  <div class="my-10">
    <h1
      class="text-2xl text-violet-500 dark:text-violet-400 border-b-2 border-violet-500 dark:border-violet-400 mb-4 font-bold">
      {{ $t('github.latest_repos') }}
    </h1>
    <div v-if="loading" class="text-center py-8">{{ $t('github.loading') }}</div>
    <div v-else-if="error" class="text-red-500">{{ $t('github.error') }}</div>
    <div v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="repo in repos"
          :key="repo.id"
          class="border rounded-lg p-4 bg-white dark:bg-gray-900 shadow flex flex-col"
          style="max-height: 420px;"
        >
          <div class="flex items-center justify-between mb-2">
            <a :href="repo.html_url" target="_blank"
              class="font-bold text-violet-500 dark:text-violet-400 hover:underline">
              {{ repo.name }}
            </a>
            <span class="text-xs text-gray-400">{{ repo.language }}</span>
          </div>
          <div
            class="prose prose-sm max-w-none dark:prose-invert overflow-y-auto flex-1"
            style="max-height: 300px;"
            v-html="repo.readmeHtml"
          ></div>
        </div>
      </div>
      <div class="flex justify-center mt-6">
        <a href="https://github.com/Nikoolaii?tab=repositories" target="_blank"
          class="bg-violet-500 text-white px-4 py-2 rounded-md hover:bg-violet-600 transition">
          {{ $t('github.see_all') }}
        </a>
      </div>
    </div>
  </div>
</template>
