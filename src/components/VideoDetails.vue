<template>
  <f7-popup class="video-details" swipe-to-close>
    <f7-page>
      <f7-navbar>
        <f7-nav-right class="cross" @click="goBack">
          <i class="icon icon-back"></i>
        </f7-nav-right>
      </f7-navbar>
      <div class="video-container" v-if="videoDetails">
        <div
          class="video"
          v-if="videoDetails"
          v-html="videoDetails.embed"
        ></div>
        <div class="details">
          <div class="title">{{ videoDetails.title.rendered }}</div>
          <div class="subtitle" v-html="videoDetails.content.rendered"></div>
        </div>
      </div>
      <div class="more-videos">
        <div class="more-videos-label">Guarda le altre puntate:</div>
        <div class="programs" v-if="videoAdvertise">
          <button
            @click="handleClick(video.id)"
            class="program"
            v-for="video of videoAdvertise"
            :key="video.id"
          >
            <div class="preview">
              <img :src="`${video.better_featured_image.source_url}`" />
            </div>
            <div class="content">
              <p class="title">{{ video.title.rendered }}</p>
              <p class="subtitle" v-html="video.content.rendered"></p>
            </div>
          </button>
        </div>
      </div>
    </f7-page>
  </f7-popup>
</template>

<script>
import { ref } from "vue";
import { useStore } from "framework7-vue";
import store from "../js/store.js";

export default {
  setup(props) {
    const { f7route, f7router } = props;
    const videoId = ref(f7route.params.id);
    const goBack = () => {
      f7router.back();
    };
    console.log("video id: ", videoId);
    const videoDetails = useStore("videoDetails");
    const videoAdvertise = useStore("videoAdvertise");

    return {
      videoId,
      goBack,
      videoDetails,
      videoAdvertise,
    };
  },

  props: {
    f7route: Object,
    f7router: Object,
  },

  mounted() {
    store.dispatch("fetchVideoDetails", this.videoId);
    store.dispatch("fetchVideoAdvertise");
  },

  watch: {
    videoId(newValue, oldValue) {
      store.dispatch("fetchVideoDetails", newValue);
      store.dispatch("fetchVideoAdvertise");
    },
  },

  methods: {
    handleClick(id) {
      this.videoId = id;
    },
  },
};
</script>

<style lang="scss">
.video-details {
  .video {
    iframe {
      width: 100%;
      height: 30vh;
    }
  }
  .subtitle {
    p {
      margin: 0;
    }
  }

  .more-videos {
    .subtitle {
      p {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin: 0;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.video-details {
  max-width: 100vw;
  .cross {
    margin-right: 0.5rem;
  }
  .video-container {
    .video {
      background: darkblue;
      width: 100%;
      min-height: 20vh;
    }
    .details {
      margin: 1rem 1rem 0;
      padding-bottom: 1rem;
      border-bottom: 1px solid gray;
      p {
        margin: 0;
      }

      .title {
        font-size: 1rem;
        font-weight: 500;
      }

      .subtitle {
        font-size: 0.75rem;
      }
    }
  }

  .more-videos {
    padding: 0 1rem;

    .more-videos-label {
      font-size: 1.1rem;
      font-weight: 500;
      margin: 1rem 0;
    }
    .programs {
      max-width: 100%;
      .program {
        max-width: 100%;
        background: none;
        border: none;
        outline: none;
        display: flex;
        align-items: center;
        margin: 0.5rem 0;
        gap: 1rem;
        height: 15vh;
        max-height: 150px;

        .preview {
          min-width: 50%;
          height: 15vh;
          background: darkblue;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .content {
          max-width: 50%;
          text-align: left;

          p {
            margin: 0;
            padding: 0.1rem 0;
            color: rgb(243, 243, 243);
          }

          .title {
            font-size: 0.85rem;
            font-weight: 500;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .subtitle {
            font-size: 0.75rem;
            text-align: left;
          }
        }
      }
    }
  }
}
</style>