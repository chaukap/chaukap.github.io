<template>
  <Background/>
  <TitleCard/>
  <Link link="https://www.instagram.com/chans_been_busy/"/>
</template>

<script>
import TitleCard from './TitleCard.vue'
import Background from './Background.vue'
import Link from './Link.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    TitleCard,
    Background,
    Link
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
