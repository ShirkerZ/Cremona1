<template>
  <f7-page name="menu">
    <Navbar />

    <div class="links-container">
      <div class="main-links">
        <f7-link href="http://google.com" external>CR1 Diretta Plus</f7-link>
        <f7-link href="http://google.com" external>Facebook</f7-link>
        <f7-link href="http://google.com" external>Instagram</f7-link>
        <f7-link href="http://google.com" external>Youtube</f7-link>
        <f7-link href="http://google.com" external>Contatti</f7-link>
      </div>

      <div class="other-links">
        <f7-link href="http://google.com" external>Scopri gli studi</f7-link>
        <f7-link href="http://google.com" external>Terms of Use</f7-link>
        <f7-link href="http://google.com" external>Privacy Policy</f7-link>
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
      display: block;

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
      padding: 0.1rem 0;
    }
    .version {
      margin-top: 2rem;
      color: rgb(160, 160, 160);
    }
  }
}
</style>