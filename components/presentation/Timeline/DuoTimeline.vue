<script lang="ts" setup>
import { schoolTimeline, workTimeline } from '~/data/timeline'
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <ContentTimeline
      :timeline="workTimeline"
      :title="$t('timeline.title') + ' - ' + $t('timeline.work')"
      direction="right"
    />
    <ContentTimeline
      :timeline="schoolTimeline"
      :title="$t('timeline.title') + ' - ' + $t('timeline.education')"
      direction="right"
    />
  </div>
</template>

<style scoped></style>
