<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
// import Form from "./components/form.vue";
import defaultLayout from "./layout/defaultLayout.vue";
import registerLogin from "./layout/registerLogin.vue";
import dashboardLayout from "./layout/DashboardLayout.vue";
export default {
  name: "App",
  data() {
    return {
      layoutName: "defaultLayout",
    };
  },
  components: {
    defaultLayout,
    registerLogin,
    dashboardLayout,
  },
  computed: {
    layout() {
      return this.$route.meta.layout
        ? this.$route.meta.layout
        : "defaultLayout";
    },
  },
};
</script>

<style>
</style>

