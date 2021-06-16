<template>
  <Background/>
  <div class="fixed">
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
import Shriners from './Shriners.vue'

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
  width: 60%;
}
.main-content {
  top: 10%;
  width: 100%;
  position: fixed;
}
.links {
  margin: auto;
  width: 100%;
  position: fixed;
  top: 35%
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
    top: 17%
  }
  .main-content {
    top: 5%;
  }
}
</style>
