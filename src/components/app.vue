<template>
  <f7-app v-bind="f7params" theme-dark>
    <!-- Right panel with reveal effect-->
    <!-- <f7-panel right cover theme-dark>
      <f7-view>
        <f7-page>
          <f7-navbar title="Right Panel"></f7-navbar>
          <f7-block>Right panel content goes here</f7-block>
        </f7-page>
      </f7-view>
    </f7-panel> -->

    <SearchPanel />

    <!-- Views/Tabs container -->
    <f7-views tabs class="safe-areas">
      <!-- Tabbar for switching views-tabs -->
      <f7-toolbar tabbar labels bottom>
        <f7-link
          tab-link="#view-home"
          tab-link-active
          icon-ios="f7:play_circle"
          icon-aurora="f7:play_circle"
          icon-md="material:play_circle"
          text="Diretta"
        ></f7-link>
        <f7-link
          tab-link="#view-programs"
          icon-ios="f7:square_grid_2x2"
          icon-aurora="f7:square_grid_2x2"
          icon-md="material:grid_view"
          text="Programmi"
        ></f7-link>
        <f7-link
          tab-link="#view-schedule"
          icon-ios="f7:calendar"
          icon-aurora="f7:calendar"
          icon-md="material:calendar_today_outlined"
          text="Guida Tv"
        ></f7-link>
        <f7-link
          tab-link="#view-menu"
          icon-ios="f7:line_horizontal_3"
          icon-aurora="f7:line_horizontal_3"
          icon-md="material:menu"
          text="Menu"
        ></f7-link>
      </f7-toolbar>

      <!-- Your main view/tab, should have "view-main" class. It also has "tab-active" class -->
      <f7-view id="view-home" main tab tab-active url="/"></f7-view>

      <f7-view
        id="view-programs"
        name="programs"
        tab
        url="/programs/"
      ></f7-view>

      <f7-view
        id="view-schedule"
        name="schedule"
        tab
        url="/schedule/"
      ></f7-view>
      <f7-view id="view-menu" name="menu" tab url="/menu/"></f7-view>
    </f7-views>
  </f7-app>
</template>
<script>
import { ref, onMounted } from "vue";
import { f7, f7ready } from "framework7-vue";

import routes from "../js/routes.js";
import store from "../js/store";

import SearchPanel from "./SearchPanel.vue";

export default {
  components: {
    SearchPanel,
  },

  setup() {
    // Framework7 Parameters
    const f7params = {
      name: "Cremona1", // App name
      theme: "auto", // Automatic theme detection

      // App store
      store: store,
      // App routes
      routes: routes,
    };

    onMounted(() => {
      f7ready(() => {
        // Call F7 APIs here
      });
    });

    return {
      f7params,
    };
  },
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.f7-theme-color-bg-color {
  --f7-theme-color-bg-color: #041B39
}

:root {
--f7-color-primary: #041B39,
--f7-color-secondary: #021021,
--f7-theme-color-bg-color: #041B39
--f7-color-white: #041B39
}
</style>