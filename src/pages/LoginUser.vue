<template>
  <div class="wrapper">
    <form class="form-signin" v-on:submit.prevent>
      <h2 class="form-signin-heading">Please login</h2>
      <input
        type="text"
        class="form-control"
        name="password"
        placeholder="mobile"
        v-model="phoneNumber"
      />
      <p
        v-if="!$v.phoneNumber.required && $v.phoneNumber.$dirty"
        class="text-right"
        id="span-text"
      >
        لطفا موبایل را وارد کنید
      </p>
      <br />
      <button class="btn btn-lg btn-primary btn-block" @click="login">
        Login
      </button>
    </form>
  </div>
</template>
<script>
import { required, numeric } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      phoneNumber: "",
    };
  },
  created() {
    let array = [
      {
        content: [
          {
            class: "row row-cols-1 row-cols-md-2 row-cols-lg-3",
            content: [
              { type: "text", disabled: "false", label: "fullName" },
              { type: "checkbox", disabled: "false", label: "gender" },
            ],
          },
          {
            class: "row row-cols-1 row-cols-md-2 row-cols-lg-3",
            content: [
              { type: "text", disabled: "false", label: "mobile" },
              { type: "password", disabled: "false", label: "password" },
            ],
          },
        ],
      },
    ];

    let valueOnly = window._.flatMap(array, "content");
    console.log(valueOnly);
    let filteredVal = window._.filter(array, () => {
      for (let i = 0; i <= 1; i++) {
        let contents = valueOnly[i].content;
        console.log(contents);
        // for(let n =0; n<=1; n++) {
          let types = valueOnly[i].content[0].type;
          console.log(types);
        // }
      }
      
    });
    console.log(filteredVal);
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.phoneNumber);
    },
  },
  validations: {
    phoneNumber: {
      required,
      numeric,
    },
  },
};
</script>

<style scoped>
#wrapper {
  background-color: aliceblue !important;
}

.wrapper {
  margin-top: 80px;
  margin-bottom: 80px;
}
#span-text {
  text-align: right !important;
  font-size: 16px;
  color: rgb(216, 41, 41);
  padding-right: 25px;
  font-weight: 500;
}
.form-signin {
  max-width: 380px;
  padding: 15px 35px 45px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 30px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  font-size: 16px;
  height: auto;
  padding: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="password"] {
  margin-bottom: 20px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>