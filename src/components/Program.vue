<template>
  <f7-link :href="`/program/${id}`" class="program" :class="{ small: small }">
    <div class="preview">
      <img :src="`${image}`" />
    </div>
    <div class="content">
      <div class="subtitle" v-html="title"></div>
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
    presentatore: String,
    small: Boolean
  },
};
</script>

<style lang="scss" scoped>
.program {
  min-width: 30vw;
  max-width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .preview {
    background: darkblue;
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

.small {
  min-width: 27vw;
  max-width: 27vw;

  .preview {
    width: 27vw;
    max-width: 27vw;
    height: 19vh;
  }
}
</style>