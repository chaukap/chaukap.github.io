<template>
  <Link link="https://www.instagram.com/chans_been_busy/" description="Instagram"/>
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
    background-image: url("../assets/instagram.png");
}
</style>