<template>
  <div id="main">
    <div class="signup">
      <form method="post" v-on:submit.prevent="submit">
        <label for="" aria-hidden="true" id="label">فرم ثبت نام</label>
        <input
          type="text"
          name="text"
          placeholder="نام خود را وارد کنید"
          v-model="firstname"
          required
          id="firstname-input"
        />
        <input
          type="text"
          name="text"
          placeholder="نام خانوادگی خود را وارد کنید"
          v-model="lastname"
          required
          id="lastname-input"
        />
        <input
          type="text"
          name="age"
          placeholder="سن خود را وارد کنید"
          v-model="age"
          required
          id="age-input"
        />

        <input
          type="text"
          name="text"
          placeholder="کد ملی خود را وارد کنید"
          v-model="nationalCode"
          required
          id="code-input"
        />
        <input
          type="text"
          name="text"
          placeholder="شغل خود را وارد کنید"
          v-model="job"
          required
          id="job-input"
          v-if="show"
        />
        <input
          type="text"
          name="text"
          placeholder="مدرک تحصیلی خود را وارد کنید"
          v-model="educationDegree"
          required
          id="deg-input"
          v-if="show"
        />
        <input
          type="text"
          name="text"
          placeholder="نام مدرسه خود را وارد کنید"
          v-model="schoolName"
          required
          id="school-input"
          v-if="showSchool"
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
      job: "",
      age: "",
      educationDegree: "",
      schoolName: "",
      show: false,
      showSchool: false,
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "مرد" },
        { value: "b", text: "زن" },
      ],
    };
  },
  methods: {
    submit() {
      let firstnameInput = document.getElementById("firstname-input");
      let lastnameInput = document.getElementById("lastname-input");
      let ageInput = document.getElementById("age-input");
      let codeInput = document.getElementById("code-input");
      let schoolName = document.getElementById("school-input");
      let jobInput = document.getElementById("job-input");
      let degInput = document.getElementById("deg-input");

      this.errors = [];
      if (!this.firstname) {
        this.errors.push("First name required!!");
        firstnameInput.classList.add("error");
      } else {
        firstnameInput.classList.remove("error");
      }
      if (!this.lastname) {
        this.errors.push("Last name required!!");
        lastnameInput.classList.add("error");
      } else {
        lastnameInput.classList.remove("error");
      }
      if (!this.age) {
        this.errors.push("Age required!!");
        ageInput.classList.add("error");
      } else {
        ageInput.classList.remove("error");
      }
      if (ageInput.value >= 18) {
        console.log("you are old enough");
        this.show = true;
        if (!jobInput || !degInput) {
          this.errors.push("Job or education degree is required");
        }
      } else if (ageInput.value < 18 && ageInput.value > 7) {
        this.showSchool = true;
        if (!schoolName) {
          this.errors.push("School name is required");
          // schoolName.classList.add("error");
        } else {
          schoolName.classList.remove("error");
        }
      }
      if (!this.nationalCode) {
        this.errors.push("National code required!!");
        codeInput.classList.add("error");
      } else {
        codeInput.classList.remove("error");
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
  height: 80%;
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
  text-align: right;
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