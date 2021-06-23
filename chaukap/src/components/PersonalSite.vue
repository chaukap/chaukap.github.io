<template>
  <Background/>
    <div class="main-content">
      <TitleCard/>
    </div>
    <div class="links">
      <div class="center-link">
        <div class="row">
          <div class="link-row">
            <GitHub/>
            <LinkedIn/>
          </div>
        </div>
        <div class="row">
          <div class="link-row">
            <Instagram/>
            <Facebook/>
          </div>
        </div>
        <div class="row">
          <div class="link-row">
            <Pinterest/>
            <Shriners/>
          </div>
        </div>
      </div>
  </div>
  
</template>

<script>
import TitleCard from './TitleCard.vue'
import Background from './Background.vue'
import Instagram from './Instagram.vue'
import LinkedIn from './LinkedIn.vue'
import GitHub from './GitHub.vue'
import Facebook from './Facebook.vue'
import Pinterest from './Pinterest.vue'
import Shriners from './Berkeley.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    TitleCard,
    Background,
    Instagram,
    LinkedIn,
    GitHub,
    Facebook,
    Pinterest,
    Shriners
  }
}
</script>

<style scoped>
.center-link {
  margin: auto;
}
.main-content {
  top: 0.5em;
  width: 100%;
  position: fixed;
}
.links {
  margin: auto;
  width: 100%;
  position: fixed;
  top: 12em;
}
.link-row {
  position: relative;
  display: inline-flex;
}
.row {
  width: 100%
}

@media (max-width: 600px) {
  .links {
    top: 8em;
  }
  .main-content {
    top: 1em;
  }
}
</style>
