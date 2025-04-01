<script setup>
import { techList } from '~/data/tech';
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const techIconsContainer = ref(null);

onMounted(() => {
  ScrollTrigger.create({
    // trigger: techIconsContainer.value,
    // start: 'top top',
    // end: () => `+=${techIconsContainer.value.scrollWidth - techIconsContainer.value.clientWidth}`,
    // pin: true,
    // scrub: true,
    // onUpdate: self => {
    //   if (self.progress === 1) {
    //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    //   }
    // }
    // Send a message to the console when the container is scrolled
    onUpdate: self => console.log(self.progress)
  });
});
</script>

<template>
  <div>
    <h1
      class="text-2xl text-violet-500 dark:text-violet-400 border-b-2 border-violet-500 dark:border-violet-400 mb-4 font-bold">
      {{ $t('technologies.title') }}
    </h1>
    <div ref="techIconsContainer" class="tech-icons-container flex whitespace-nowrap overflow-auto">
      <UTooltip v-for="(item, index) in techList" :key="index" :text="item.name" :delay="500"
        :popper="{ arrow: true, placement: 'top' }">
        <UIcon :name="item.icon" class="tech-icon mr-2 mb-2 h-24 w-24" />
      </UTooltip>
    </div>
  </div>
</template>