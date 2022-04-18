<template>
  <input type="text" @input="handleInput" @keypress="controlChar" />
</template>
<script>
export default {
  data() {
    return {
      notPermisionKeyCode: [95, 45, 43, 42, 38, 37, 36, 35, 64, 63, 46],
    };
  },
  methods: {
    controlChar(e) {
      if (this.notPermisionKeyCode.includes(e.keyCode)) {
        e.preventDefault();
      }
      return true;
    },
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style scoped>
</style>