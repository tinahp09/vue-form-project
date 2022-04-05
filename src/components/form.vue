<template>
  <div id="main">
    <div class="signup">
      <form method="post" v-on:submit.prevent>
        <label for="" aria-hidden="true" id="label">فرم ثبت نام</label>
        <div class="form-group">
          <input
            type="text"
            name="text"
            placeholder="نام خود را وارد کنید"
            id="firstname-input"
            class="form-control"
            v-model="form.firstname"
          />
          <p
            v-if="!$v.form.firstname.required && $v.form.firstname.$dirty"
            class="text-right"
            id="span-text"
          >
            لطفا نام خود را وارد کنید
          </p>
        </div>
        <div class="form-group">
          <input
            type="text"
            name="text"
            placeholder="نام خانوادگی خود را وارد کنید"
            v-model="form.lastname"
            id="lastname-input"
            class="form-group"
          />
          <p
            v-if="!$v.form.lastname.required && $v.form.lastname.$dirty"
            class="text-right"
            id="span-text"
          >
            لطفا نام خانوادگی خود را وارد کنید
          </p>
        </div>

        <div class="form-group">
          <input
            type="text"
            name="age"
            placeholder="سن خود را وارد کنید"
            v-model="form.age"
            id="age-input"
          />
          <p
            v-if="!$v.form.age.required && $v.form.age.$dirty"
            class="text-right"
            id="span-text"
          >
            لطفا سن خود را وارد کنید
          </p>
        </div>

        <div class="form-group">
          <input
            type="text"
            name="text"
            placeholder="کد ملی خود را وارد کنید"
            v-model="form.nationalCode"
            id="code-input"
          />
          <p
            v-if="!$v.form.nationalCode.required && $v.form.nationalCode.$dirty"
            class="text-right"
            id="span-text"
          >
            لطفا کد ملی خود را وارد کنید
          </p>
        </div>

        <input
          type="text"
          name="text"
          placeholder="شغل خود را وارد کنید"
          v-model="form.job"
          required
          id="job-input"
          v-if="isMoreThan18"
        />
        <p
          v-if="!$v.form.job.required && $v.form.job.$dirty && isMoreThan18"
          class="text-right"
          id="span-text"
        >
          لطفا شغل خود را وارد کنید
        </p>

        <input
          type="text"
          name="text"
          placeholder="مدرک تحصیلی خود را وارد کنید"
          v-model="form.educationDegree"
          required
          id="deg-input"
          v-if="isMoreThan18"
        />
        <p
          v-if="
            !$v.form.educationDegree.required &&
            $v.form.educationDegree.$dirty &&
            isMoreThan18
          "
          class="text-right"
          id="span-text"
        >
          لطفا مدرک تحصیلی خود را وارد کنید
        </p>
        <input
          type="text"
          name="text"
          placeholder="نام مدرسه خود را وارد کنید"
          v-model="form.schoolName"
          required
          id="school-input"
          v-if="isBetween7and18"
        />
        <p
          v-if="
            !$v.form.schoolName.required &&
            $v.form.schoolName.$dirty &&
            isBetween7and18
          "
          class="text-right"
          id="span-text"
        >
          لطفا نام مدرسه خود را وارد کنید
        </p>
        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          value="accepted"
          unchecked-value="نیستم"
          class="px-5"
          v-if="isHeadOfHouse"
        >
          سرپرست خانواده هستم
        </b-form-checkbox>
        <button
          class="btn d-block mx-auto px-5"
          id="signup-btn"
          @click="submit()"
          type="submit"
        >
          ثبت نام
        </button>
        <br />
        <!-- <b-alert show dismissible variant="danger" v-if="errors.length > 0">
          <span v-for="error in errors" :key="error"> {{ error }} <br /> </span>
        </b-alert> -->
      </form>
    </div>
  </div>
</template>
<script>
import { required, alpha } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      form: {
        firstname: "",
        lastname: "",
        nationalCode: "",
        job: "",
        age: "",
        educationDegree: "",
        schoolName: "",
      },
    };
  },
  validations: {
    form: {
      firstname: {
        required,
      },
      lastname: {
        required,
        alpha,
      },
      age: {
        required,
        alpha,
      },
      nationalCode: {
        required,
        alpha,
      },
      job: {
        required,
        alpha,
      },
      educationDegree: {
        required,
        alpha,
      },
      schoolName: {
        required,
        alpha,
      },
    },
  },
  computed: {
    isMoreThan18() {
      if (this.form.age >= 18) {
        return true;
      } else {
        return false;
      }
    },
    isBetween7and18() {
      if (this.form.age > 7 && this.form.age < 18) {
        return true;
      } else {
        return false;
      }
    },
    isHeadOfHouse() {
      if (this.form.age > 18) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    submit() {
      console.log("form submitted");

      this.$v.$touch();

      if (!this.$v.$invalid) {
        console.log(this.form);
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
#span-text {
  text-align: right !important;
  font-size: 16px;
  color: rgb(216, 41, 41);
  padding-right: 25px;
  font-weight: 500;
}
#main {
  background: linear-gradient(-180deg, #82b4e2 0%, #3a6396 98%),
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