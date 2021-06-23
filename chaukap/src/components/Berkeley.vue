<template>
  <Link link="https://www.ischool.berkeley.edu/people/chandler-haukap" description="Berkeley"/>
</template>

<script>
import Link from './Link.vue'

export default {
  name: 'Berkeley',
  components: {
      Link
  }
}
</script>

<style scoped>
:deep(.link-container) {
    background-image: url("../assets/berkeley.png");
}
</style>