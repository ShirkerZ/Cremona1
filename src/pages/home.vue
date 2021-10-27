<template>
  <f7-page name="home">
    <Navbar />

    <Live />

    <div class="lists">
      <VideoList category="news" />
      <VideoList category="last" />
      <ProgramList />
      <VideoList category="sport" />
    </div>
  </f7-page>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Live from "../components/Live.vue";
import VideoList from "../components/VideoList.vue";
import ProgramList from "../components/ProgramList.vue";

export default {
  components: {
    Navbar,
    Live,
    VideoList,
    ProgramList,
  },
};
</script>

<style lang="scss" scoped>
.lists {
  padding-bottom: 1rem;
}
</style>