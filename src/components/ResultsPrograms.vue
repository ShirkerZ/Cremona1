<template>
  <div class="result-programs-container" v-if="foundPrograms && foundPrograms.length">
    <div class="result-programs-label">Programmi</div>
    <div class="result-programs">
      <f7-link
        :href="`/program/${program.id}`"
        class="result-program"
        v-for="program of foundPrograms"
        :key="program.id"
      >
        <div class="preview">
          <img :src="`${program.better_featured_image.source_url}`" />
        </div>
        <div class="content">
          <div class="subtitle" v-html="program.title.rendered"></div>
        </div>
      </f7-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    foundPrograms: Object,
  },
};
</script>

<style lang="scss">
.result-programs-container {
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
.result-programs-container {
  padding: 0 1rem;

  .result-programs-label {
    font-size: 1.1rem;
    font-weight: 500;
    margin: 1rem 0;
  }
  .result-programs {
    max-width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    .result-program {
      min-width: 30vw;
      max-width: 30vw;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .preview {
        width: 30vw;
        max-width: 30vw;
        height: 23vh;
        max-height: 150px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .content {
        padding-top: 0.5rem;
        p {
          margin: 0;
        }

        .subtitle {
          font-size: 0.75rem;
          color: rgb(243, 243, 243);
        }
      }
    }
  }
}
</style>
