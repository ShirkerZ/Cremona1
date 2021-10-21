<template>
  <f7-popup class="program-details">
    <f7-page>
      <f7-navbar>
        <f7-nav-left class="cross" @click="goBack">
          <i class="icon icon-back"></i>
        </f7-nav-left>
        <f7-nav-right>
          <f7-link
            icon-ios="f7:search"
            icon-aurora="f7:search"
            icon-md="material:search"
            panel-open="right"
          ></f7-link>
        </f7-nav-right>
      </f7-navbar>
      <div class="program-container">
        <div class="program-info" v-if="programDetails">
          <img
            :src="`${programDetails.better_featured_image.source_url}`"
            alt=""
          />
          <div class="veil"></div>
          <div class="content">
            <div class="title" v-html="programDetails.title.rendered"></div>
            <div
              @click="showLess = !showLess"
              :class="{ 'show-less': showLess }"
              class="description"
              v-html="programDetails.content.rendered"
            ></div>
          </div>
        </div>

        <!-- Skeleton program -->
        <div class="skeleton-program-container" v-else>
          <div class="skeleton-program-content">
            <f7-skeleton-text class="skeleton-program-title" effect="wave">
              Lorem ipsum dolor
            </f7-skeleton-text>
            <br />
            <f7-skeleton-text class="skeleton-program-subtitle" effect="wave">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, voluptatibus.
            </f7-skeleton-text>
          </div>
        </div>

        <div class="videos-container">
          <div class="videos-label">Puntate</div>
          <div class="videos" v-if="programVideos">
            <f7-link
              :href="`/video/${video.id}`"
              class="video"
              v-for="video of programVideos"
              :key="video.id"
            >
              <div class="preview">
                <img :src="`${video.better_featured_image.source_url}`" />
              </div>
              <div class="content">
                <p class="title" v-html="video.title.rendered"></p>
                <p class="subtitle" v-html="video.content.rendered"></p>
              </div>
            </f7-link>
          </div>

          <!-- Skeletone more videos -->
          <div class="skeleton-more-videos" v-else>
            <div class="skeleton-video" v-for="video of 3" :key="video">
              <f7-skeleton-block
                class="skeleton-video-preview"
                effect="wave"
              ></f7-skeleton-block>

              <div class="skeleton-video-content">
                <f7-skeleton-text class="skeleton-video-title" effect="wave">
                  Lorem ipsum dolor sit consectetur.
                </f7-skeleton-text>
                <f7-skeleton-text class="skeleton-video-subtitle" effect="wave">
                  Lorem ipsum dolor
                </f7-skeleton-text>
              </div>
            </div>
          </div>
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
    const programId = ref(f7route.params.id);
    const goBack = () => {
      f7router.back();
    };

    const programDetails = useStore("programDetails");
    const programVideos = useStore("programVideos");

    return {
      programId,
      goBack,
      programDetails,
      programVideos,
    };
  },

  props: {
    f7route: Object,
    f7router: Object,
  },

  data() {
    return {
      showLess: true,
    };
  },

  mounted() {
    store.dispatch("fetchProgramDetails", this.programId);
    store.dispatch("fetchProgramVideos");
  },
};
</script>

<style lang="scss">
.program-details {
  .program-info {
    .content {
      .description {
        p {
          margin: 0;
        }
      }
      .show-less {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        white-space: initial;
      }
    }
  }

  .videos-container {
    .subtitle {
      p {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        white-space: initial;
        margin: 0;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.program-details {
  .program-container {
    max-width: 100vw;
    .program-info {
      position: relative;
      height: 40vh;
      img {
        width: 100%;
        height: 40vh;
        position: absolute;
      }
      .veil {
        position: absolute;
        bottom: -1%;
        width: 100%;
        height: 40vh;
        background-image: linear-gradient(
          rgba(0, 0, 0, 0),
          rgba(18, 18, 18, 1)
        );
      }
      .content {
        position: absolute;
        bottom: 0;
        padding: 1rem;
        .title {
          position: relative;
          z-index: 10;
          font-size: 2rem;
          font-weight: 700;
          padding-top: 3rem;
        }
        .subtitle {
          font-size: 0.8rem;
          position: relative;
        }
      }
    }

    .videos-container {
      padding: 1rem;

      .videos-label {
        font-size: 1.1rem;
        font-weight: 500;
      }

      .videos {
        max-width: 100%;
        .video {
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
              font-size: 0.8rem;
              font-weight: 500;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }

            .subtitle {
              font-size: 0.7rem;
              text-align: left;
            }
          }
        }
      }
    }

    .skeleton-program-container {
      position: relative;
      height: 40vh;

      .skeleton-program-content {
        position: absolute;
        bottom: 0;
        padding: 1rem;

        .skeleton-program-title {
          font-size: 2rem;
          padding-top: 3rem;
        }

        .skeleton-program-subtitle {
          font-size: 0.8rem;
        }
      }
    }

    .skeleton-more-videos {
      .skeleton-video {
        display: flex;
        align-items: center;
        margin: 0.5rem 0;
        gap: 1rem;
        height: 15vh;
        max-height: 150px;

        .skeleton-video-preview {
          min-width: 50%;
          height: 15vh;
        }

        .skeleton-video-content {
          max-width: 50%;

          .skeleton-video-title {
            font-size: 0.85rem;
          }

          .skeleton-video-subtitle {
            font-size: 0.75rem;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>