<template>
  <div>
    <u-button v-for="link in linkList" :key="link.link" :href="link.link" :icon="link.icon" class="ml-3"
              color="violet" target="_blank" variant="soft"/>
  </div>
</template>
<script lang="ts" setup>
import {linkList as importedLinkList} from '~/data/lists.ts'

const linkList = ref(importedLinkList)
</script>