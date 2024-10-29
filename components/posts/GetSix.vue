<template>
  <h1
    class="text-2xl text-violet-500 dark:text-violet-400 border-b-2 border-violet-500 dark:border-violet-400 mb-4 font-bold">
    Posts</h1>
  <div class="grid grid-cols-3 gap-4">
    <ContentList v-slot="{ list }" :query="{
      sort: [{ date: -1 }],
      limit: 6
    }" path="/posts">
      <div v-for="post in list" :key="post._path" class="flex flex-col">
        <UCard class="flex flex-col flex-1">
          <template #header>
            <h2 class="font-bold text-violet-500 dark:text-violet-400">{{ post.title }}</h2>
            <h2>{{ formatDate(post.date) }}</h2>
          </template>
          <p class="flex-1 min-h-[70px]">{{ post.description }}</p>
          <template #footer>
            <ULink :to="post._path">Lire plus</ULink>
          </template>
        </UCard>
      </div>
    </ContentList>
  </div>
</template>

<script>
export default {
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