<template>
  <div class="wrap">
    <layout-header />
    <div class="content">
      <router-view />
    </div>
    <layout-footer />
  </div>
</template>

<script>
import layoutHeader from "@/components/layout/header";
import layoutFooter from "@/components/layout/footer";
export default {
  name: "app",
  components: {
    layoutHeader,
    layoutFooter
  }
};
</script>
<style lang="scss">
@import "@/assets/scss/app.scss";
</style>
