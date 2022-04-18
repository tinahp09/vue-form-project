<template>
  <input type="text" @input="handleInput" @keypress="onlyNumbers" />
</template>

<script>
export default {
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    onlyNumbers(event) {
      let keyCode = event.keyCode ? event.keyCode : event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        event.preventDefault();
      }
    },
  },
};
</script>