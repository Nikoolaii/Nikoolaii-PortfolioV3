<script setup>
import { techList } from '~/data/tech'
import { onMounted, ref, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const techIconsContainer = ref(null)
const techIconsList = ref(null)

let animation = null

onMounted(() => {
  const el = techIconsList.value
  if (!el) return

  // Attendre un court moment pour s'assurer que les icônes sont correctement chargées
  setTimeout(() => {
    const listWidth = el.offsetWidth

    animation = gsap.to(el, {
      x: -listWidth,
      duration: 15,
      ease: 'linear',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % -listWidth)
      }
    })
  }, 300)
})

onUnmounted(() => {
  if (animation) animation.kill()
})
</script>


<template>
  <div>
    <h1
      class="text-2xl text-violet-500 dark:text-violet-400 border-b-2 border-violet-500 dark:border-violet-400 mb-4 font-bold">
      {{ $t('technologies.title') }}
    </h1>
    <div ref="techIconsContainer" class="tech-icons-container relative overflow-hidden" style="width: 100%;">
      <div ref="techIconsList" class="tech-icons-list flex" style="will-change: transform;">
        <template v-for="n in 2" :key="n">
          <div class="flex">
            <UTooltip v-for="(item, index) in techList" :key="n + '-' + index" :text="item.name" :delay="500"
              :popper="{ arrow: true, placement: 'top' }">
              <UIcon :name="item.icon" class="tech-icon mr-2 mb-2 h-24 w-24" />
            </UTooltip>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
