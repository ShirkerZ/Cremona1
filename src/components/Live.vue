<template>
  <div class="live" v-html="live"></div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      live: null,
    };
  },

  mounted() {
    axios
      .get("https://www.cremona1.it/wp-json/wp/v2/live")
      .then((res) => (this.live = res.data.live));
  },
};
</script>

<style lang="scss" scoped>
.live {
  background: darkblue;
  width: 100%;
  min-height: 30vh;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 35vh;
  }

  @media screen and(min-width: 768px) {
    height: 45vh;
  }
}
</style>