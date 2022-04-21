<template>
  <Link link="https://chaukap.github.io/surveillance-in-bulk/warrants" description="A Report on Digital Warrants in the United States"/>
</template>

<script>
import Link from './Link.vue'

export default {
  name: 'PersonalProject',
  components: {
      Link
  }
}
</script>

<style scoped>
:deep(.link-container) {
    background-image: url("../assets/surveillance-in-bulk.png");
}
</style>