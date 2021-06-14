<template>
  <h1>I'm revamping my site. Stay tuned!</h1>
  <TitleCard/>
</template>

<script>
import TitleCard from './TitleCard.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    TitleCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h1 {
  font-style:oblique;
  color:blue;
}
</style>
