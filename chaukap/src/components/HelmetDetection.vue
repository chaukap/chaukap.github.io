<template>
  <Link link="https://chaukap.github.io/deep-learning-at-the-edge/helmet-detection" description="A YOLOv5 neural network that detects helment non-compliance at ski resorts"/>
</template>

<script>
import Link from './Link.vue'

export default {
  name: 'Instagram',
  components: {
      Link
  }
}
</script>

<style scoped>
:deep(.link-container) {
    background-image: url("../assets/HelmetDetection.png");
}
</style>