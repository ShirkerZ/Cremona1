<template>
  <div class="live-container">
    <div v-if="live">
      <div class="live" v-html="live"></div>
    </div>
    <f7-skeleton-block
      v-else
      class="skeleton-live"
      effect="wave"
    ></f7-skeleton-block>
  </div>
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
.live-container {
  .live {
    width: 100%;
    min-height: 30vh;
    overflow: hidden;

    iframe {
      width: 100%;
    }

    @media screen and(min-width: 768px) {
      height: 45vh;
    }
  }

  .skeleton-live {
    width: 100%;
    height: 30vh;
  }
}
</style>