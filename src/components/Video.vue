<template>
  <f7-link v-if="id" :href="`/video/${id}`" class="video">
    <div class="preview">
      <img :src="`${image}`" />
    </div>
    <div class="content">
      <p class="title" v-html="title"></p>
      <div class="subtitle" v-html="content"></div>
    </div>
  </f7-link>
</template>

<script>
export default {
  props: {
    id: Number,
    image: String,
    title: String,
    content: String,
  },
};
</script>

<style lang="scss">
.video {
  .subtitle {
    p {
      display: inline-block;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 0;
    }
  }
}
</style>

<style lang="scss" scoped>
.video {
  min-width: 65vw;
  max-width: 250px;
  display: flex;
  flex-direction: column;

  @media screen and(min-width: 768px) {
    min-width: initial;
    width: 70vw;
  }

  .preview {
    width: 100%;
    height: 20vh;
    max-height: 150px;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .content {
    width: 100%;
    padding-top: 0.5rem;

    p {
      margin: 0;
      // color: rgb(243, 243, 243);
      color: var(--f7-color-primary);
    }

    .title {
      font-size: 0.85rem;
      font-weight: 500;
    }

    .subtitle {
      min-width: 0 !important;
      font-size: 0.75rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: rgb(243, 243, 243);
    }
  }
}
</style>