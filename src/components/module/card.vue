<template>
  <div class="card-info">
    <h3>Show Vuex info value: {{ info }}</h3>

    <input-button @inputValue="changeStateInfo" placeholderValue="Insert here a new word" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import InputButton from "@/components/state/inputButton";

export default {
  name: "card",
  data() {
    return {};
  },
  components: {
    InputButton
  },
  computed: {
    ...mapState("initialize", ["info"])
  },
  methods: {
    ...mapActions("initialize", ["changeInfo"]),

    changeStateInfo(value) {
      this.changeInfo(value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/module/cards.scss";
</style>
