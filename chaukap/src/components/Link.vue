<template>
    <a :href="link" target="_blank">
        <div class="link-container">
            <span class="hover-haze"></span>
        </div>
    </a>
</template>

<script>
export default {
  name: 'Link',
  props: {
      link: String
  }
}
</script>

<style scoped>
.link-container {
  background-image: url("../assets/instagram.png");
  background-size: 8em;
  width: 8em;
  height: 8em;
  border-radius: 2em;
  position: fixed;
  top: 50%;
  left: 50%;
  transition: 500ms;
}

.link-container:hover {
  background-size: 9em;
  width: 9em;
  height: 9em;
  margin-left: -0.5em;
  margin-top: -0.5em;
  transition: 500ms;
}

.hover-haze {
  background-color: rgb(79, 91, 173);
  width: 8em;
  height: 8em;
  border-radius: 2em;
  position: fixed;
  opacity: 0%;
  top: 50%;
  left: 50%;
  transition: 500ms;
}

.link-container:hover .hover-haze {
  width: 9em;
  height: 9em;
  margin-left: -0.5em;
  margin-top: -0.5em;
  opacity: 50%;
  transition: 500ms;
}

@media (max-width: 600px) {
  .link-container {
    background-size: 6em;
    width: 6em;
    height: 6em;
    border-radius: 1.5em;
  }

  .hover-haze {
    width: 6em;
    height: 6em;
    border-radius: 1.5em;
  }

  .link-container:hover {
    background-size: 7em;
    width: 7em;
    height: 7em;
    margin-left: -0.4em;
    margin-top: -0.4em;
  }

  .link-container:hover .hover-haze {
    width: 7em;
    height: 7em;
    margin-left: -0.4em;
    margin-top: -0.4em;
  }
}
</style>