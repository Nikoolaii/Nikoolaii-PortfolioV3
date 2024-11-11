<template>
  <h1
      class="text-2xl text-violet-500 dark:text-violet-400 border-b-2 border-violet-500 dark:border-violet-400 mb-4 font-bold">
    Posts</h1>
  <div class="grid grid-cols-3 gap-4 my-5">
    <ContentList v-slot="{ list }" :path="getPath()" :query="{
      sort: [{ date: -1 }],
      limit: 6
    }">
      <div v-for="post in list" :key="post._path" class="flex flex-col">
        <UCard class="flex flex-col flex-1">
          <template #header>
            <h2 class="font-bold text-violet-500 dark:text-violet-400">{{ post.title }}</h2>
            <h2>{{ formatDate(post.date) }}</h2>
          </template>
          <p class="flex-1 min-h-[70px]">{{ post.description }}</p>
          <template #footer>
            <ULink :to="post._path">{{ $t("posts.read_more") }}</ULink>
          </template>
        </UCard>
      </div>
    </ContentList>
  </div>
  <div class="flex justify-center">
    <nuxt-link to="/posts">
      <button class="bg-violet-500 text-white px-4 py-2 rounded-md m2-4">{{ $t("posts.see_all") }}</button>
    </nuxt-link>
  </div>
</template>

<script>
import {useI18n} from 'vue-i18n';

export default {
  setup() {
    const {locale} = useI18n();

    const getPath = () => {
      console.log(`/posts/${locale.value === 'en' ? 'en' : 'fr'}`)
      return `/posts/${locale.value === 'en' ? 'en' : 'fr'}`;
    };

    return {
      locale,
      getPath
    };
  },
  methods: {
    formatDate(date) {
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(new Date(date));
    }
  }
}
</script>