<template>
  <div class="list-container">
    <div>
      <div class="list-label">Ultime notizie</div>
      <div class="list-program">
        <Video
          v-for="video of videoList"
          :key="video.id"
          :id="video.id"
          :image="video.better_featured_image.source_url"
          :title="video.title.rendered"
          :content="video.content.rendered"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Video from "./Video.vue";
import { useStore } from "framework7-vue";
import store from "../js/store.js";

export default {
  components: {
    Video,
  },

  setup() {
    const videoList = useStore("videoList");

    return {
      videoList,
    };
  },

  mounted() {
    store.dispatch("fetchVideoList");
  },
};
</script>

<style lang="scss" scoped>
.list-container {
  width: 100vw;
  margin-top: 1rem;

  .list-label {
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0.5rem 0;
    padding: 0 1rem;
  }

  .list-program {
    max-width: 100vw;
    overflow: scroll;
    display: flex;
    padding: 0 1rem;
    gap: 0 1rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>

