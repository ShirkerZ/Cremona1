<template>
  <f7-navbar>
    <f7-nav-left style="visibility: hidden">
      <f7-link></f7-link>
    </f7-nav-left>

    <div class="logo">
      <img src="../assets/images/logo-cremona1.svg" alt="" />
    </div>

    <f7-nav-right>
      <f7-link
        icon-ios="f7:search"
        icon-aurora="f7:search"
        icon-md="material:search"
        panel-open="right"
      >
      </f7-link>
    </f7-nav-right>
  </f7-navbar>
</template>

<style lang="scss" scoped>
.navbar {
  position: sticky;
}
.logo {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 70%;
  }
}
</style>