<template>
  <div id="app">
    <component :is="layoutName">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
// import Form from "./components/form.vue";
import defaultLayout from "./layout/defaultLayout.vue";

export default {
  name: "App",
  data() {
    return {
      layoutName: "defaultLayout",
    };
  },
  components: {
    defaultLayout,
  },
  created() {},
};
</script>

<style>
</style>

