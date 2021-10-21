<template>
  <f7-page name="schedule">
    <Navbar />
    <DatePicker />
    <Schedule />
  </f7-page>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import DatePicker from "../components/DatePicker.vue";
import Schedule from "../components/Schedule.vue";

export default {
  components: {
    Navbar,
    DatePicker,
    Schedule,
  },
};
</script>
