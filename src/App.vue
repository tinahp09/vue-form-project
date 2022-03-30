<template>
  <div id="app">
    <Form />
  </div>
</template>

<script>
import Form from "./components/form.vue";

export default {
  name: "App",
  components: {
    Form,
  },
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: "Jost", sans-serif;
  background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
}
</style>

