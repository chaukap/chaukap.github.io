<template>
  <Link link="https://www.linkedin.com/in/chandler-haukap/" description="LinkedIn"/>
</template>

<script>
import Link from './Link.vue'

export default {
  name: 'LinkedIn',
  components: {
      Link
  }
}
</script>

<style scoped>
::v-deep .link-container {
    background-image: url("../assets/linkedin.png");
}
</style>