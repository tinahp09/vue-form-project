<template>
  <div id="main">
    <div class="signup">
      <form method="post" v-on:submit.prevent="submit">
        <label for="" aria-hidden="true" id="label">فرم ثبت نام</label>
        <input
          type="text"
          name="text"
          placeholder="نام خود را وارد کنید.."
          v-model="firstname"
          required
          id="firstname-input"
        />
        <input
          type="text"
          name="text"
          placeholder="نام خانوادگی خود را وارد کنید.."
          v-model="lastname"
          required
          id="lastname-input"
        />
        <input
          type="text"
          name="age"
          placeholder="سن خود را وارد کنید.."
          v-model="age"
          required
          id="age-input"
        />
        <input
          type="text"
          name="text"
          placeholder="کد ملی خود را وارد کنید.."
          v-model="nationalCode"
          required
          id="code-input"
        />
        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          value="accepted"
          unchecked-value="نیستم"
          class="px-5"
        >
          سرپرست خانواده هستم
        </b-form-checkbox>
        <button
          class="btn d-block mx-auto px-5"
          id="signup-btn"
          @click.prevent="submit()"
        >
          ثبت نام
        </button>
        <br />
        <b-alert show dismissible variant="danger" v-if="errors.length > 0">
          <span v-for="error in errors" :key="error"> {{ error }} <br /> </span>
        </b-alert>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      errors: [],
      firstname: "",
      lastname: "",
      nationalCode: "",
      age: "",
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "مرد" },
        { value: "b", text: "زن" },
      ],
    };
  },
  methods: {
    submit() {
      this.errors = [];
      if (!this.firstname) {
        this.errors.push("First name required!!");
        document.getElementById("firstname-input").classList.add("error");
      } else {
        document.getElementById("firstname-input").classList.remove("error");
      }
      if (!this.lastname) {
        this.errors.push("Last name required!!");
        document.getElementById("lastname-input").classList.add("error");
      } else {
        document.getElementById("lastname-input").classList.remove("error");
      }
      if (!this.age) {
        this.errors.push("Age required!!");
        document.getElementById("age-input").classList.add("error");
      } else {
        document.getElementById("age-input").classList.remove("error");
      }
      if (!this.nationalCode) {
        this.errors.push("National code required!!");
        document.getElementById("code-input").classList.add("error");
      } else {
        document.getElementById("code-input").classList.remove("error");
      }
    },
  },
};
</script>
<style scoped>
#checkbox-1 {
  vertical-align: middle;
  float: right;
}
.error {
  border: 2px solid red;
}
#main {
  background: linear-gradient(-180deg, #7aaddd 0%, #386092 98%),
    radial-gradient(
      at top left,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
  background-blend-mode: screen;
  width: 350px;
  height: 550px;
  border-radius: 15px;
  box-shadow: 5px 20px 50px #000;
}
.signup {
  position: relative;
  width: 100%;
  height: 100%;
}
#label {
  color: #004085;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 2.3em;
  justify-content: center;
  display: flex;
  margin: 60px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}
input {
  width: 85%;
  height: 20px;
  background: #fff;
  justify-content: center;
  display: flex;
  margin: 20px auto;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 20px 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 10px 14px 12px;
}
#checkbox-1 {
  padding: 20px 8px;
}
#signup-btn {
  background-color: #004085;
  color: white;
  font-weight: 400;
  font-size: 18px;
  margin-top: 50px;
}
#signup-btn:hover {
  color: #004085;
  background-color: white;
  transition: 0.9s;
  font-weight: 400;
}
::placeholder {
  font-size: 17px;
  text-align: right;
}
</style>