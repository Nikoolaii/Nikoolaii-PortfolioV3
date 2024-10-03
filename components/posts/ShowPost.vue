<template>
  <div class="flex flex-row flex-wrap gap-4">
    <ContentList path="/posts" v-slot="{ list }">
      <div v-for="post in list" :key="post._path" class="w-1/3">
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