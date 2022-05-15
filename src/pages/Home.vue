<template>
  <div>
    <DashboardLayout/>
  </div>
</template>

<script>
  import DashboardLayout from '../layout/DashboardLayout.vue'
export default {
  methods: {},

  data() {
    return {
      filterVal: false,
    };
  },
  components:{
    DashboardLayout
  }
};
</script>

<style scoped>
</style>