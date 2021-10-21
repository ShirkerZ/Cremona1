<template>
  <f7-panel class="search-panel panel-init" right cover theme-dark>
    <f7-view>
      <f7-page>
        <f7-navbar>
          <f7-nav-left class="cross panel-close">
            <i class="icon f7-icons">chevron_left</i>
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
        <div class="results-container">
          <div class="results-counter">
            <div class="result-counter">
              <div class="counter-label">Programmi</div>
              <div class="counter">
                {{ foundPrograms ? foundPrograms.length : 0 }}
              </div>
            </div>

            <div class="divider"></div>

            <div class="result-counter">
              <div class="counter-label">Video</div>
              <div class="counter">
                {{ foundVideos ? foundVideos.length : 0 }}
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
  // width: 100vw;

  form {
    width: 100%;

    input {
      margin-left: 1rem;
    }
  }

  .results-container {
    padding: 0 0 1rem;

    .results-counter {
      background: #07345e38;
      padding: 0.5rem 1rem;
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
        background: var(--f7-text-color);
      }

      .result-counter {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .counter-label {
          // font-size: 1rem;
          text-transform: uppercase;
        }

        .counter {
          width: 50%;
          font-size: 1.5rem;
          color: #07345e;
          text-align: center;
        }
      }
    }
  }
}
</style>