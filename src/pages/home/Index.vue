<template>
  <div>
    <h1>Test page home</h1>
    <p>adssad: {{ info }}</p>
    <module-card />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import ModuleCard from "@/components/module/card";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    ModuleCard
  },
  computed: {
    ...mapState("initialize", ["info"])
  }
};
</script>

<style lang="scss" scoped></style>
