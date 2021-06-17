<template>
  <div class="link-padding">
    <a :href="link" target="_blank">
      <div class="link-container" :title="description"></div>
    </a>
  </div>
  
</template>

<script>
export default {
  name: 'Link',
  props: {
      link: String,
      description: String
  }
}
</script>

<style scoped>
div {
  --icon-size: 10em;
  --expanded-size: 11em;
}

.link-padding {
  margin: 0.5em 6em;
  width: fit-content;
}
.link-container {
  background-size: var(--icon-size);
  width: var(--icon-size);
  height: var(--icon-size);
  border-radius: 2em;
  transition: 500ms;
}
.link-container:hover {
  background-size: var(--expanded-size);
  width: var(--expanded-size);
  height: var(--expanded-size);
  margin-left: -0.5em;
  margin-top: -0.5em;
  transition: 500ms;
}

@media (max-width: 1160px) {
  .link-container {
    border-radius: 1.5em;
  }
  .link-container:hover {
    margin-left: -0.4em;
    margin-top: -0.4em;
  }
  .link-padding {
    margin: .75em 2em;
  }

  div {
    --icon-size: 8em;
    --expanded-size: 9em;
  }
}

@media (max-width: 600px) {
  .link-container {
    border-radius: 1.5em;
  }
  .link-container:hover {
    margin-left: -0.4em;
    margin-top: -0.4em;
  }
  .link-padding {
    margin: 0.5em 0.5em;
  }
  div {
    --icon-size: 6em;
    --expanded-size: 7em;
  }
}

</style>