<template>
  <Link link="https://reflectify.io/" description="My Spotify API hobby project, Reflectify"/>
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
    background-image: url("../assets/HobbyProjects.png");
}
</style>