<template>
  <Link link="https://www.facebook.com/chandler.haukap" description="Facebook"/>
</template>

<script>
import Link from './Link.vue'

export default {
  name: 'Facebook',
  components: {
      Link
  }
}
</script>

<style scoped>
:deep(.link-container) {
    background-image: url("../assets/facebook.png");
}
</style>