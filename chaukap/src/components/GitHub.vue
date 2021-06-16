<template>
  <Link link="https://github.com/chaukap" description="GitHub"/>
</template>

<script>
import Link from './Link.vue'

export default {
  name: 'GitHub',
  components: {
      Link
  }
}
</script>

<style scoped>
::v-deep .link-container {
    background-image: url("../assets/github.png");
}
</style>