<template>
  <div class="list-container">
    <div>
      <!-- Labels -->
      <div class="list-label" v-if="category == 'last'">
        Guarda le ultime puntate
      </div>
      <div class="list-label" v-if="category == 'news'">Ultime notizie</div>
      <div class="list-label" v-if="category == 'sport'">Sport</div>

      <!-- Videos List -->
      <div class="list-videos" v-if="videoList">
        <Video
          v-for="video of videoList"
          :key="video.id"
          :id="video.id"
          :image="video.better_featured_image.source_url"
          :title="video.title.rendered"
          :content="video.content.rendered"
        />
      </div>

      <!-- Skeleton -->
      <div class="skeleton-video-list" v-else>
        <div class="skeleton-video" v-for="skeleton of 5" :key="skeleton">
          <f7-skeleton-block class="skeleton-video-preview" effect="wave">
          </f7-skeleton-block>
          <div class="skeleton-video-content">
            <f7-skeleton-text class="skeleton-video-title" effect="wave">
              Lorem ipsum dolor sit consectetur.
            </f7-skeleton-text>
            <f7-skeleton-text class="skeleton-video-subtitle" effect="wave">
              Lorem ipsum dolor sit consectetur.
            </f7-skeleton-text>
          </div>
        </div>
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

  props: {
    category: String,
  },

  setup(props) {
    const category = props.category;
    let videoList = null;
    switch (category) {
      case "last":
        videoList = useStore("lastVideosList");
        break;
      case "news":
        videoList = useStore("newsList");
        break;
      case "sport":
        videoList = useStore("sportList");
        break;
    }

    return {
      videoList,
    };
  },

  mounted() {
    switch (this.category) {
      case "last":
        store.dispatch("fetchLastVideosList");
        break;

      case "news":
        store.dispatch("fetchNewsList");
        break;

      case "sport":
        store.dispatch("fetchSportList");
        break;
    }
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

  .list-videos {
    max-width: 100vw;
    overflow: scroll;
    display: flex;
    align-items: flex-start;
    padding: 0 1rem;
    gap: 0 1rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .skeleton-video-list {
    max-width: 100vw;
    overflow: scroll;
    display: flex;
    align-items: flex-start;
    padding: 0 1rem;
    gap: 0 1rem;

    &::-webkit-scrollbar {
      display: none;
    }

    .skeleton-video {
      min-width: 65vw;
      max-width: 250px;

      .skeleton-video-preview {
        height: 20vh;
        max-height: 150px;
      }

      .skeleton-video-content {
        padding-top: 0.5rem;

        .skeleton-video-title {
          font-size: 0.85rem;
        }
        .skeleton-video-subtitle {
          font-size: 0.75rem;
        }
      }
    }
  }
}
</style>

