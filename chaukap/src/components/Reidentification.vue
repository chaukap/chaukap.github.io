<template>
  <Link link="https://chaukap.github.io/reidentifying-data/deanonymizing-data.html" description="An open letter to the Open Baltimore project"/>
</template>

<script>
import Link from './Link.vue'

export default {
  name: 'Pinterest',
  components: {
      Link
  }
}
</script>

<style scoped>
:deep(.link-container) {
    background-image: url("../assets/Baltimore.png");
}
</style>