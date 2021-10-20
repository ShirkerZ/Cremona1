<template>
  <f7-page name="schedule">
    <f7-navbar title="Palinsesto"></f7-navbar>
    <DatePicker />
    <Schedule />
  </f7-page>
</template>

<script>
import DatePicker from "../components/DatePicker.vue";
import Schedule from "../components/Schedule.vue";

export default {
  components: {
    DatePicker,
    Schedule,
  },
};
</script>
