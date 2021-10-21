<template>
  <f7-page name="programs">
    <f7-navbar title="Programmi"></f7-navbar>
    <div class="programs-container">
      <div class="programs-list" v-if="programList">
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

      <!-- Skeleton program list -->
      <div class="skeleton-program-list" v-else>
        <div class="skeleton-program" v-for="skeleton of 9" :key="skeleton">
          <f7-skeleton-block class="skeleton-program-preview" effect="wave">
          </f7-skeleton-block>

          <div class="skeleton-program-content">
            <f7-skeleton-text class="skeleton-program-subtitle" effect="wave">
              Lorem ipsum dolor
            </f7-skeleton-text>
          </div>
        </div>
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

  .skeleton-program-list {
    max-width: 100vw;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 1rem;

    &::-webkit-scrollbar {
      display: none;
    }

    .skeleton-program {
      min-width: 27vw;
      max-width: 27vw;

      .skeleton-program-preview {
        width: 27vw;
        max-width: 27vw;
        height: 19vh;
        max-height: 150px;
      }

      .skeleton-program-content {
        padding-top: 0.5rem;

        .skeleton-program-subtitle {
          font-size: 0.75rem;
        }
      }
    }
  }
}
</style>

