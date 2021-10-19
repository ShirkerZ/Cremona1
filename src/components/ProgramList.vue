<template>
  <div class="list-container">
    <div>
      <div class="list-label">I nostri programmi</div>
      <div class="list-program" v-if="programList">
        <Program
          v-for="program of programList"
          :key="program.id"
          :id="program.id"
          :image="program.better_featured_image.source_url"
          :title="program.title.rendered"
          :content="program.content.rendered"
          :presentatore="program.presentatore"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Program from "./Program.vue";
import { useStore } from "framework7-vue";
import store from "../js/store.js";

export default {
  components: {
    Program,
  },

  setup() {
    const programList = useStore("programList");

    return {
      programList,
    };
  },

  mounted() {
    store.dispatch("fetchProgramList");
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
    align-items: flex-start;
    padding: 0 1rem;
    gap: 0 1rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>

