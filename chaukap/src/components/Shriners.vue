<template>
  <Link link="https://www.shrinershospitalsforchildren.org/shc/donate" description="My Charity of Choice (not affiliated)"/>
</template>

<script>
import Link from './Link.vue'

export default {
  name: 'Shriners',
  components: {
      Link
  }
}
</script>

<style scoped>
::v-deep .link-container {
    background-image: url("../assets/Shriners.png");
}
</style>