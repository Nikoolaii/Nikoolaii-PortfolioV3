<script setup>
import { techList } from '~/data/tech';
import { onMounted, ref, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const techIconsContainer = ref(null);

const isDivInViewport = (el) => {
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= window.innerHeight
  );
};

const handleGlobalWheel = (e) => {
  const el = techIconsContainer.value;
  if (!el) return;

  // Si la div est visible à l'écran
  if (isDivInViewport(el) && el.scrollWidth > el.clientWidth) {
    const delta = e.deltaY || e.deltaX;

    // Détection en cours de scroll de la div
    console.log('scrolling techIconsContainer');

    // Scroll vers la droite (descend)
    if (delta > 0) {
      if (el.scrollLeft + el.clientWidth < el.scrollWidth) {
        e.preventDefault();
        el.scrollLeft += delta;
      }
    }
    // Scroll vers la gauche (remonte)
    else if (delta < 0) {
      if (el.scrollLeft > 0) {
        e.preventDefault();
        el.scrollLeft += delta;
      }
    }
  }
};

onMounted(() => {
  window.addEventListener('wheel', handleGlobalWheel, { passive: false });
});
onUnmounted(() => {
  window.removeEventListener('wheel', handleGlobalWheel);
});
</script>

<template>
  <div>
    <h1
      class="text-2xl text-violet-500 dark:text-violet-400 border-b-2 border-violet-500 dark:border-violet-400 mb-4 font-bold">
      {{ $t('technologies.title') }}
    </h1>
    <div ref="techIconsContainer" class="tech-icons-container flex whitespace-nowrap overflow-hidden">
      <UTooltip v-for="(item, index) in techList" :key="index" :text="item.name" :delay="500"
        :popper="{ arrow: true, placement: 'top' }">
        <UIcon :name="item.icon" class="tech-icon mr-2 mb-2 h-24 w-24" />
      </UTooltip>
    </div>
  </div>
</template>