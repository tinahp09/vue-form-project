<template>
  <div>
    <a class="btn btn-info" @click="go">Form</a>
  </div>
</template>

<script>
export default {
  methods: {
    go() {
      this.$router.push("/form");
    },
  },
};
</script>