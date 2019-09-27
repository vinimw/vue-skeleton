<template>
  <div class="input-button">
    <form @submit="updateInfo" v-on:submit.prevent>
      <input
        type="text"
        :placeholder="placeholderValue"
        class="input"
        v-model="inputInfo"
      />
      <button type="button" class="button" name="button" @click="updateInfo">
        {{ labelButton }}
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: "inputButton",
  props: {
    labelButton: {
      type: String,
      default: "Click"
    },
    valueInput: {
      type: String,
      default: ""
    },
    placeholderValue: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      inputInfo: ""
    };
  },
  mounted() {
    if (this.valueInput != "") {
      this.inputInfo = this.valueInput;
    }
  },
  watch: {
    valueInput() {
      this.inputInfo = this.valueInput;
    }
  },
  methods: {
    updateInfo() {
      this.$emit("inputValue", this.inputInfo);
      this.inputInfo = "";
      return false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/module/input-button.scss";
@import "@/assets/scss/module/inputs.scss";
@import "@/assets/scss/module/buttons.scss";
</style>
