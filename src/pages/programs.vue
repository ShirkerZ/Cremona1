<template>
  <f7-page name="programs">
    <f7-navbar title="Programmi"></f7-navbar>
    <div class="programs-container">
      <div class="programs-list">
        <Program
          v-for="program of programList"
          :key="program.id"
          :id="program.id"
          :image="program.better_featured_image.source_url"
          :title="program.title.rendered"
          :content="program.content.rendered"
          :presentatore="program.presentatore"
          :small="true"
        />
      </div>
    </div>
  </f7-page>
</template>

<script>
import Program from "../components/Program.vue";
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
.programs-container {
  width: 100vw;
  padding: 1rem;
  box-sizing: border-box;
  .programs-list {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
  }
}
</style>

