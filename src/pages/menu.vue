<template>
  <f7-page name="menu">
    <Navbar />

    <div class="links-container">
      <div class="main-links">
        <a href="http://google.com">CR1 Diretta Plus</a>
        <a href="http://google.com">Facebook</a>
        <a href="http://google.com">Instagram</a>
        <a href="http://google.com">Youtube</a>
        <a href="http://google.com">Contatti</a>
      </div>

      <div class="other-links">
        <a href="http://google.com">Scopri gli studi</a>
        <a href="http://google.com">Terms of Use</a>
        <a href="http://google.com">Privacy Policy</a>
        <div class="version">Iphone v2.5.8</div>
      </div>
    </div>
  </f7-page>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
.links-container {
  box-sizing: border-box;
  padding: 1rem;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .main-links,
  .other-links {
    display: flex;
    flex-direction: column;

    a {
      text-align: left;
      color: rgb(243, 243, 243);
    }
  }

  .main-links {
    font-size: 1rem;
    font-weight: 700;
    a {
      width: 100%;
      padding: 0.5rem 0;
      border-bottom: 1px solid #182534;
      &:last-child {
        border: none;
      }
    }
  }

  .other-links {
    font-size: 0.8rem;

    a {
        padding: .1rem 0;
    }
    .version {
      margin-top: 2rem;
      color: rgb(160, 160, 160);
    }
  }
}
</style>