<template>
  <h1
    class="text-2xl text-violet-500 dark:text-violet-400 border-b-2 border-violet-500 dark:border-violet-400 mb-4 font-bold">
    Posts</h1>
  <div class="grid grid-cols-3 gap-4">
    <ContentList path="/posts" v-slot="{ list }">
      <div v-for="post in sortedPosts(list)" :key="post._path" class="col-span-1">
        <UCard>
          <template #header>
            <h2>{{ post.title }}</h2>
          </template>
          <p>{{ post.description }}</p>
        </UCard>
      </div>
    </ContentList>
  </div>
</template>

<script>
export default {
  methods: {
    sortedPosts(posts) {
      return posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 6);
    }
  }
}
</script>