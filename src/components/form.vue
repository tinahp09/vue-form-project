<template>
  <div id="main"></div>
</template>
<script>
export default {};
</script>
<style scoped>
#main {
  background: linear-gradient(-180deg, #85a2be 0%, #7ca7db 98%),
    radial-gradient(
      at top left,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
  background-blend-mode: screen;
  width: 350px;
  height: 500px;
  border-radius: 15px;
  box-shadow: 5px 20px 50px #000;
}
</style>