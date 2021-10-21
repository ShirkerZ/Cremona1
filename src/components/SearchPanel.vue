<template>
  <f7-panel class="search-panel panel-init" right cover theme-dark>
    <f7-view>
      <f7-page>
        <f7-navbar>
          <f7-nav-left class="cross panel-close">
            <i class="icon icon-back"></i>
          </f7-nav-left>
          <form @submit.prevent="handleSearch">
            <input
              type="text"
              v-model="query"
              placeholder="Cerca ora"
              autofocus
            />
          </form>
        </f7-navbar>
        <div class="results-container" v-if="foundPrograms || foundVideos">
          <div class="results-counter">
            <div class="result-counter">
              <div class="counter-label">Video</div>
              <div class="counter">
                {{ foundVideos.length }}
              </div>
            </div>
            <div class="divider"></div>
            <div class="result-counter">
              <div class="counter-label">Programmi</div>
              <div class="counter">
                {{ foundPrograms.length }}
              </div>
            </div>
          </div>
          <div class="results-videos">
            <ResultsPrograms :foundPrograms="foundPrograms" />
            <ResultsVideos :foundVideos="foundVideos" />
          </div>
        </div>
      </f7-page>
    </f7-view>
  </f7-panel>
</template>

<script>
import ResultsPrograms from "./ResultsPrograms.vue";
import ResultsVideos from "./ResultsVideos.vue";
import { useStore } from "framework7-vue";
import store from "../js/store.js";

export default {
  components: {
    ResultsPrograms,
    ResultsVideos,
  },

  setup() {
    let foundPrograms = useStore("foundPrograms");
    let foundVideos = useStore("foundVideos");

    return {
      foundPrograms,
      foundVideos,
    };
  },

  data() {
    return {
      query: null,
    };
  },

  methods: {
    handleSearch() {
      store.dispatch("fetchSearchProgram", this.query);
      store.dispatch("fetchSearchVideo", this.query);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-panel {
  width: 100vw;

  input {
    margin-left: 1rem;
  }

  .results-container {
    padding: 1rem 0;

    .results-counter {
      padding: 0 1rem;
      display: flex;
      align-items: center;
      gap: 0 1rem;
      justify-content: space-evenly;

      .divider {
        position: relative;
        width: 2px;
        min-height: 40px;
        height: 100%;
        max-height: 100%;
        background: white;
      }

      .result-counter {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .counter-label {
          font-size: 1rem;
        }

        .counter {
          width: 50%;
          font-size: 1rem;
          border: 1px solid #07345e;
          background: #07345e38;
          color: #07345e;
          border-radius: 2rem;
          text-align: center;
          margin-top: 0.5rem;
        }
      }
    }
  }
}
</style>