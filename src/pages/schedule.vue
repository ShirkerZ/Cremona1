<template>
  <f7-page name="schedule">
    <f7-navbar title="Palinsesto"></f7-navbar>
    <DatePicker />
    <Schedule v-if="schedule" :schedule="schedule" />
  </f7-page>
</template>

<script>
import DatePicker from "../components/DatePicker.vue";
import Schedule from "../components/Schedule.vue";
import { useStore } from "framework7-vue";
import store from "../js/store.js";

export default {
  components: {
    DatePicker,
    Schedule,
  },

  setup() {
    const schedule = useStore("schedule");

    return {
      schedule,
    };
  },

  mounted() {
    store.dispatch("fetchSchedule");
  },
};
</script>
