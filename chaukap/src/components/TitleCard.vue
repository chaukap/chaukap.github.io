<template>
    <div class="title-card-container">
      <h1>Chandler Haukap</h1>
      <h2 class="pseudo-input">{{ title }}<span class="pseudo-cursor">{{ cursor }}</span></h2>
    </div>
</template>

<script>

var index = 1;
const titles = [
            "Software Developer",
            "Student",
            "(Aspiring) Data Scientist",
            "Plant Dad",
            "Hiker",
            "(Very Bad) Golfer",
            "Coffee Enthusiast"
          ]
const timePerTitleMilliseconds = 5000;
const transitionTimeMilliseconds = 1000;
const cursorBlinkMilliseconds = 700;

export default {
  name: 'TitleCard',
  data: function() {
      return {
          title: titles[0],
          cursor: "|"
      }
  },
  created: function() {
      setInterval(() => {
          this.transitionElement();
      }, timePerTitleMilliseconds);

      setInterval(() => {
          if(this.cursor.length > 0) {
              this.cursor = "";
          } else {
              this.cursor = "|";
          }
      }, cursorBlinkMilliseconds);
  },
  methods: {
    async transitionElement() {
      var oldTitleLength = this.title.length;
      while(this.title.length > 0) {
        this.title = this.title.substring(0, this.title.length - 1);
        await new Promise(r => setTimeout(r, transitionTimeMilliseconds/oldTitleLength));
      }

      var i = 1;
      while(this.title.length < titles[index].length) {
        this.title = titles[index].substring(0, i);
        await new Promise(r => setTimeout(r, transitionTimeMilliseconds/titles[index].length));
        i++;
      }
      
      index++;
      index = index % titles.length;
    }
  }
}

</script>


<style scoped>
.pseudo-cursor {
    font-size: 1.3em;
    font-weight: bolder;
    margin-left: 1px;
}
.pseudo-input {
  text-align: left;
}
h1 {
  color: white;
  font-size: 4em;
  margin-bottom: 0em;
}
h2 {
  color: rgb(201, 201, 201);
  margin-top: .1em;
  font-weight: bold;
}
.title-card-container {
  width: fit-content;
  margin: auto;
}

@media (max-width: 600px) {
  .pseudo-cursor {
    font-size: 1.1em;
  }
  h1 {
    font-size: 2em;
    top: 5%;
  }
  .pseudo-input {
    font-size: 1em;
  }
}
</style>