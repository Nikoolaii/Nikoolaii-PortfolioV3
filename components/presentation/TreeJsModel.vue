<style scoped></style>
<script lang="ts" setup>
import { OrbitControls, GLTFModel } from '@tresjs/cientos'
import { ref, onMounted, onUnmounted } from 'vue'

const autoRotate = ref(false)
const autoRotateSpeed = ref(4)
let lastScrollTop = 0

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  if (scrollTop > lastScrollTop) {
    // Scrolling down
    autoRotateSpeed.value = 4
  } else {
    // Scrolling up
    autoRotateSpeed.value = -4
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop

  autoRotate.value = true
  setTimeout(() => {
    autoRotate.value = false
  }, 1000)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="w-96 h-96">
    <TresCanvas shadows>
      <OrbitControls :autoRotate="autoRotate" :autoRotateSpeed="autoRotateSpeed" />
      <Suspense>
        <GLTFModel path="/models/cute_mug/scene.gltf" />
      </Suspense>
      <TresDirectionalLight :intensity="1.5" :position="[70, 8, -70]" cast-shadow />
      <TresDirectionalLight :intensity="1.5" :position="[-70, 8, 70]" cast-shadow />
      <TresDirectionalLight :intensity="1.5" :position="[0, -70, 0]" cast-shadow />
      <TresDirectionalLight :intensity="1.5" :position="[0, 70, 0]" cast-shadow />
    </TresCanvas>
  </div>
</template>