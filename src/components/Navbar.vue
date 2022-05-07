<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info" id="nav">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item text="Lang" right id="nav-item">
              <a
                v-if="showLogoutButton"
                class="btn btn-light text-dark navText ml-2"
                >خروج</a
              >
              <a
                v-if="showHomeButton"
                @click="goHome"
                class="btn btn-light text-dark navText ml-2 px-3"
                >خانه</a
              >
              <a
                v-if="showLoginButton"
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
  computed: {
    showHomeButton() {
      if (this.$route.path == "/form" || this.$route.path == "/loginUser") {
        return true;
      } else {
        return false;
      }
    },
    showLoginButton() {
      if (this.$route.path == "/loginUser" || this.$route.path == "/") {
        return true;
      } else {
        return false;
      }
    },
    showLogoutButton() {
      if (this.$route.path == "/form") {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    goRegister() {
      if (this.$route.path != "/form") {
        this.$router.push("/form");
      }
    },
    goLogin() {
      if (this.$route.path != "/loginUser") {
        this.$router.push("/loginUser");
      }
    },
    goHome() {
      if (this.$route.path != "/") {
        this.$router.push("/");
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