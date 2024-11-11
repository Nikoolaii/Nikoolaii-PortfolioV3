<template>
  <div>
    <u-button v-for="link in linkList" :key="link.link" :to="link.link" :icon="link.icon" class="ml-3"
              color="violet" target="_blank" variant="soft"/>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import {linkList as importedLinkList} from '~/data/lists'

const linkList = ref(importedLinkList)
</script>