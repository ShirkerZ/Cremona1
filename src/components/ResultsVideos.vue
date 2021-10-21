<template>
  <div class="result-videos-container" v-if="foundVideos && foundVideos.length">
    <div class="result-videos-label">Video</div>
    <div class="result-videos">
      <f7-link
        :href="`/video/${video.id}`"
        class="result-video"
        v-for="video of foundVideos"
        :key="video.id"
      >
        <div class="preview">
          <img :src="`${video.better_featured_image.source_url}`" />
        </div>
        <div class="content">
          <p class="title">{{ video.title.rendered }}</p>
          <p class="subtitle" v-html="video.content.rendered"></p>
        </div>
      </f7-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    foundVideos: Object,
  },
};
</script>

<style lang="scss">
.result-videos-container {
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
</style>

<style lang="scss" scoped>
.result-videos-container {
  padding: 0 1rem;

  .result-videos-label {
    font-size: 1.1rem;
    font-weight: 500;
    margin: 1rem 0;
  }
  .result-videos {
    max-width: 100%;
    .result-video {
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
</style>
