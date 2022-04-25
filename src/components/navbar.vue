<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info" id="nav">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item text="Lang" right id="nav-item">
              <a class="btn btn-light text-dark navText ml-2" @click="go"
                >ثبت نام</a
              >
              <a
                class="btn btn-light text-dark navText ml-2 px-3"
                @click="goLogin"
                >ورود</a
              >
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    go() {
      if (this.$route.path != "/form") {
        this.$router.push("/form");
      }
    },
    goLogin() {
      if (this.$route.path != "/loginUser") {
        this.$router.push("/loginUser");
      }
    },
  },
};
</script>
<style scoped>
#nav {
  height: 60%;
}
</style>