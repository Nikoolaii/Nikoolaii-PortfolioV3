<script lang="ts" setup>
import {schoolTimeline, workTimeline} from '~/data/timeline';
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <timeline :timeline="workTimeline" :title="$t('timeline.title') + ' - '+ $t('timeline.work')" />
    <timeline :timeline="schoolTimeline" :title="$t('timeline.title') + ' - '+ $t('timeline.education')" />
  </div>
</template>

<style scoped>

</style>