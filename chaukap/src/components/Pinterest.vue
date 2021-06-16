<template>
  <Link link="https://www.pinterest.com/chandler_haukap" description="Pinterest"/>
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
::v-deep .link-container {
    background-image: url("../assets/pinterest.png");
}
</style>