<template>
  <div>
    <Navbar />
    <slot/>
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue';
export default {
  name: "defaultLayout",
  components: {
    Navbar,
  },
};
</script>