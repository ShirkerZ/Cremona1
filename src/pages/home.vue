<template>
  <f7-page name="home">
    <Navbar />

    <Live />

    <div class="lists">
      <NewsList />
      <VideoList />
      <ProgramList />
      <CategoryList />
    </div>
  </f7-page>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Live from "../components/Live.vue";
import NewsList from "../components/NewsList.vue";
import VideoList from "../components/VideoList.vue";
import ProgramList from "../components/ProgramList.vue";
import CategoryList from "../components/CategoryList.vue";

export default {
  components: {
    Navbar,
    Live,
    NewsList,
    VideoList,
    ProgramList,
    CategoryList,
  },
};
</script>
