<style scoped></style>
<script lang="ts" setup>
import { OrbitControls, GLTFModel } from '@tresjs/cientos'
import { ref } from 'vue'

</script>

<template>
  <div class="w-96 h-96">
    <TresCanvas shadows>
      <OrbitControls 
        :autoRotate=true 
        :autoRotateSpeed=4
        :enableZoom="false"
      />
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