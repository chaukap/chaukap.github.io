<template>
  <Background/>
  <div class="main-content">
    <TitleCard/>
    <div class="links">
      <div class="row">
        <div class="link-row">
          <GitHub/>
          <LinkedIn/>
        </div>
      </div>
      <div class="row">
        <div class="link-row">
          <Instagram/>
          <PersonalProject/>
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
import PersonalProject from './PersonalProject.vue'
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
    PersonalProject,
    Pinterest,
    Shriners
  }
}
</script>

<style scoped>
.center-link {
}
.main-content {
  align-content: center;
  width: 100%;
}
.links {
  margin: auto;
  display: grid;
  align-content: center;
  width: fit-content;
}
.link-row {
  display: flex;
  width: 100%;
}
.row {

}

@media (max-width: 600px) {
  .links {
  }
  .main-content {
  }
}
</style>
