<template>
    <h1>Chandler Haukap</h1>
    <h2 class="pseudo-input">{{ title }}<span class="pseudo-cursor">{{ cursor }}</span></h2>
</template>

<script>

var index = 1;
const titles = [
            "Software Developer",
            "Student",
            "Data Scientist",
            "Plant Dad",
            "Hiker",
            "(Very Bad) Golfer",
            "Coffee Enthusiast"
          ]

export default {
  name: 'TitleCard',
  data: function() {
      return {
          title: titles[0],
          cursor: "l"
      }
  },
  mounted: function() {
      setInterval(() => {
          this.transitionElement();
      }, 7000);

      setInterval(() => {
          if(this.cursor.length > 0) {
              this.cursor = "";
          } else {
              this.cursor = "l";
          }
      }, 700);
  },
  methods: {
    async transitionElement() {
      var oldTitleLength = this.title.length;
      while(this.title.length > 0) {
        this.title = this.title.substring(0, this.title.length - 1);
        await new Promise(r => setTimeout(r, 1000/oldTitleLength));
      }

      var i = 1;
      while(this.title.length < titles[index].length) {
        this.title = titles[index].substring(0, i);
        await new Promise(r => setTimeout(r, 1000/titles[index].length));
        i++;
      }
      
      index++;
      index = index % titles.length;
    }
  }
}

</script>


<style scoped>
.pseudo-input {
    text-align: left;
}
.pseudo-cursor {
    font-size: 1.3em;
    font-weight: bolder;
    margin-left: 1px;
}
</style>