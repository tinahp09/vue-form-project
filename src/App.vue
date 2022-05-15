<template>
  <div id="app">
<<<<<<< HEAD
=======
   <!-- <div v-if="layout=='defaultLayout'">
      <default-layout>
        <router-view></router-view>
      </default-layout>
    </div>
    <div v-if="layout=='registerLogin'">
      <register-login>
        <router-view></router-view>
      </register-login>
    </div>
    <div v-if="layout=='dashboardLayout'">
      <dashboard-layout>
        <router-view></router-view>
      </dashboard-layout>
    </div>-->
>>>>>>> e4fa75da7a5d48557bf9fa0f2893ac54f0f824f6
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

