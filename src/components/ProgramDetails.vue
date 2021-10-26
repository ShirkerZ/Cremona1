<template>
  <f7-popup class="program-details">
    <f7-page>
      <f7-navbar>
        <f7-nav-left class="cross" @click="goBack">
          <i class="icon f7-icons">chevron_left</i>
        </f7-nav-left>
        <div
          class="program-title"
          v-if="programDetails"
          v-html="programDetails.title.rendered"
        ></div>
        <f7-nav-right>
          <f7-link
            icon-ios="f7:search"
            icon-aurora="f7:search"
            icon-md="material:search"
            panel-open="right"
            @click="goBack"
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
            <div class="announcer" v-if="programDetails.presentatore">
              <strong>Presentato da: </strong>{{ programDetails.presentatore }}
            </div>
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

          <!-- Pagination -->
          <div class="pagination" v-if="pages && pages > 1">
            <i
              class="icon f7-icons"
              v-if="currentPage > 3"
              @click="currentPage = 1"
            >
              chevron_left_2
            </i>
            <i
              class="icon f7-icons"
              v-if="currentPage > 1"
              @click="currentPage--"
            >
              chevron_left
            </i>

            <button
              class="pagination-btn"
              :class="{ 'is-active': currentPage == btn }"
              v-for="btn of paginationRange"
              :key="btn"
              @click="currentPage = btn"
            >
              {{ btn }}
            </button>

            <i
              class="icon f7-icons"
              v-if="pages != currentPage"
              @click="currentPage++"
            >
              chevron_right
            </i>
            <i
              class="icon f7-icons"
              v-if="currentPage < pages - 2"
              @click="currentPage = pages"
            >
              chevron_right_2
            </i>
          </div>

          <!-- Related Videos -->
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
    const programDetails = useStore("programDetails");
    const programVideos = useStore("programVideos");

    const goBack = () => {
      f7router.back();
    };

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
      currentPage: 1,
      videosPerPage: 10,
      currentPageVideos: [],
      paginationRange: [],
      start: 0,
      end: 0,
    };
  },

  mounted() {
    store.dispatch("fetchProgramDetails", this.programId);
  },

  methods: {
    // Show only 5 pagination btn
    handlePagination() {
      let range = this.pageRange(this.currentPage, this.pages);
      this.start = range.start;
      this.end = range.end;
      this.paginationRange = [];
      for (let i = --this.start; i < this.end; i++) {
        this.paginationRange.push(i + 1);
      }
    },

    // Split videos array in smaller arrays
    splitAllVideosArray() {
      let allVideos = this.programDetails.videos;
      let currentPageVideos = [];

      for (let i = 0; i < allVideos.length; i += this.videosPerPage) {
        currentPageVideos.push(allVideos.slice(i, i + this.videosPerPage));
      }

      this.currentPageVideos = currentPageVideos;
    },

    // Set first, last btns in order to show alway 5 btn
    pageRange(currentPage, pages) {
      let start = currentPage - 2,
        end = currentPage + 2;

      if (end > pages) {
        start -= end - pages;
        end = pages;
      }
      if (start <= 0) {
        end += (start - 1) * -1;
        start = 1;
      }

      end = end > pages ? pages : end;

      return {
        start: start,
        end: end,
      };
    },
  },

  watch: {
    programDetails(newValue, oldValue) {
      this.handlePagination();
      this.splitAllVideosArray();
      store.dispatch(
        "fetchProgramVideos",
        this.currentPageVideos[this.currentPage - 1]
      );
    },

    currentPage(newValue, oldValue) {
      this.handlePagination();
      store.dispatch(
        "fetchProgramVideos",
        this.currentPageVideos[this.currentPage - 1]
      );
    },
  },

  computed: {
    pages() {
      if (this.programDetails && this.programDetails.videos) {
        let pages = Math.ceil(
          this.programDetails.videos.length / this.videosPerPage
        );
        return pages;
      }
      return;
    },
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
        overflow: hidden !important;
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
  .program-title {
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 700;
  }

  .program-container {
    max-width: 100vw;
    .program-info {
      position: relative;
      height: 40vh;
      img {
        width: 100%;
        height: 40vh;
        position: absolute;
        object-fit: cover;
      }
      .veil {
        position: absolute;
        bottom: -1%;
        width: 100%;
        height: 40vh;
        background-image: linear-gradient(rgba(0, 0, 0, 0), #021021);
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
        .description {
          font-size: 0.8rem;
          position: relative;
          overflow: scroll;
          max-height: 20vh;

          &::-webkit-scrollbar {
            display: none;
          }
        }
      }
    }

    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem 0;

      .pagination-btn {
        display: flex;
        justify-content: center;
        max-width: 2.5rem;
        padding: 0.5rem;
        margin: 0 0.2rem;
        border-radius: 0.2rem;
        color: var(--f7-text-color);
        background: var(--skeleton-color);
        border: none;
        outline: none;
      }

      .is-active {
        background: #13538b;
      }

      .icon {
        font-size: 1.5rem;
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