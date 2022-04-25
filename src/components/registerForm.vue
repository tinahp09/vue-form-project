<template>
  <div>
    <transition appear appear-active-class="animate__animated animate__fadeIn">
      <div id="main">
        <div class="signup mt-5">
          <b-form method="post" v-on:submit.prevent class="rtl" id="border">
            <b-row class="mt-5">
              <b-col>
                <DefaultInput
                  name="text"
                  placeholder="نام خود را وارد کنید"
                  id="firstname-input"
                  class="form-control mb-3"
                  v-model="form.firstname"
                  :disabled="disableInput"
                />
                <br />
                <p
                  v-if="!$v.form.firstname.required && $v.form.firstname.$dirty"
                  class="text-right"
                  id="span-text"
                >
                  لطفا نام خود را وارد کنید
                </p>
              </b-col>
              <b-col>
                <DefaultInput
                  name="text"
                  placeholder="نام خانوادگی خود را وارد کنید"
                  v-model="form.lastname"
                  id="lastname-input"
                  class="form-control mb-3"
                  :disabled="disableInput"
                />
                <p
                  v-if="!$v.form.lastname.required && $v.form.lastname.$dirty"
                  class="text-right"
                  id="span-text"
                >
                  لطفا نام خانوادگی خود را وارد کنید
                </p>
              </b-col>
            </b-row>

            <b-row>
              <b-col class="mb-3">
                <NumberInput
                  name="age"
                  placeholder="سن خود را وارد کنید"
                  v-model="form.age"
                  id="age-input"
                  class="form-control"
                  :disabled="disableInput"
                />
                <p
                  v-if="!$v.form.age.required && $v.form.age.$dirty"
                  class="text-right"
                  id="span-text"
                >
                  لطفا سن خود را وارد کنید
                </p>
              </b-col>
              <b-col class="mb-3">
                <NumberInput
                  name="text"
                  placeholder="کد ملی خود را وارد کنید"
                  v-model="form.nationalCode"
                  id="code-input"
                  class="form-control"
                  :disabled="disableInput"
                />

                <p
                  v-if="
                    !$v.form.nationalCode.required &&
                    $v.form.nationalCode.$dirty
                  "
                  class="text-right"
                  id="span-text"
                >
                  لطفا کد ملی خود را وارد کنید
                </p>
              </b-col>
            </b-row>

            <b-row>
              <b-col>
                <DefaultInput
                  name="text"
                  placeholder="شغل خود را وارد کنید"
                  v-model="form.job"
                  id="job-input"
                  v-if="isMoreThan18"
                  class="form-control"
                  :disabled="disableInput"
                />
                <p
                  v-if="
                    !$v.form.job.required && $v.form.job.$dirty && isMoreThan18
                  "
                  class="text-right"
                  id="span-text"
                >
                  لطفا شغل خود را وارد کنید
                </p>
              </b-col>
              <b-col>
                <DefaultInput
                  name="text"
                  placeholder="مدرک تحصیلی خود را وارد کنید"
                  v-model="form.educationDegree"
                  id="deg-input"
                  v-if="isMoreThan18"
                  class="form-control"
                  :disabled="disableInput"
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
              </b-col>
            </b-row>

            <b-row>
              <b-col cols="6" class="ml-auto">
                <DefaultInput
                  name="text"
                  placeholder="نام مدرسه خود را وارد کنید"
                  v-model="form.schoolName"
                  required
                  id="school-input"
                  v-if="isBetween7and18"
                  class="form-control"
                  :disabled="disableInput"
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
              </b-col>
            </b-row>

            <b-form-checkbox
              class="checkbox px-0 ml-4 mt-3"
              id="checkbox-1"
              name="checkbox-1"
              value="accepted"
              unchecked-value="نیستم"
              v-if="isHeadOfHouse"
            >
              سرپرست خانواده هستم
            </b-form-checkbox>
            <b-row>
              <button
                v-if="!form.id"
                class="btn btn-info mr-3 px-3 my-2"
                id="signup-btn"
                @click="submit()"
                type="submit"
              >
                {{ $t("register") }}
              </button>
              <div v-else>
                <button
                  class="btn btn-info mx-2 px-3 my-2"
                  @click="editBtn"
                  v-if="this.editButton === 'ویرایش'"
                  id="editBtn"
                >
                  {{ $t("edit") }}
                </button>
                <button
                  class="btn btn-success mx-2 px-3 my-2"
                  v-if="this.editButton === 'ذخیره'"
                  @click="saveInfo"
                  id="saveBtn"
                >
                  {{ $t("save") }}
                </button>
                <button
                  class="btn btn-danger mx-2 px-4 my-2"
                  v-if="this.deleteButton === 'حذف'"
                  @click="deleteBtn"
                  id="deleteBtn"
                >
                  {{ $t("delete") }}
                </button>
                <button
                  class="btn btn-danger mx-2 px-4 my-2"
                  v-if="this.deleteButton === 'کنسل'"
                  @click="cancelBtn"
                >
                  {{ $t("cancel") }}
                </button>
              </div>
            </b-row>
            <br />
          </b-form>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { required, requiredIf } from "vuelidate/lib/validators";
import "animate.css";
import { form } from "@/constant/variable.js";
import DefaultInput from "./DefaultInput.vue";
import NumberInput from "./NumberInputs.vue";
export default {
  components: {
    DefaultInput,
    NumberInput,
  },
  props: {
    formInfo: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {
      editButton: "ویرایش",
      deleteButton: "حذف",
      registerButton: "ثبت نام",
      inEditable: 1,
    };
  },
  validations: {
    form: {
      firstname: {
        required,
      },
      lastname: {
        required,
      },
      age: {
        required,
      },
      nationalCode: {
        required,
      },
      job: {
        required: requiredIf(function () {
          return this.isMoreThan18;
        }),
      },
      educationDegree: {
        required: requiredIf(function () {
          return this.isMoreThan18;
        }),
      },
      schoolName: {
        required: requiredIf(function () {
          return this.isBetween7and18;
        }),
      },
    },
  },
  computed: {
    disableInput() {
      if (this.form.id && this.inEditable === 1) {
        return true;
      } else {
        return false;
      }
    },
    form() {
      return this.formInfo;
    },
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
    async submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        await this.$store.dispatch("addPeople", this.form).then((res) => {
          if (res.status == 201) {
            this.$emit("addPeople", res.data);
            this.$swal("Successful insert");
            this.form = JSON.parse(form);
            this.$v.reset;
          }
        });
      }
    },
    editBtn() {
      this.editButton = "ذخیره";
      this.deleteButton = "کنسل";
      this.inEditable = 0;
    },
    saveInfo() {
      this.$store.dispatch("updatePeople", this.form);
      this.editButton = "ویرایش";
      this.deleteButton = "حذف";
      this.inEditable = 1;
    },
    cancelBtn() {
      this.editButton = "ویرایش";
      this.deleteButton = "حذف";
      this.inEditable = 1;
    },
    deleteBtn() {
      this.$swal({
        text: "آیا از حذف آیتم اطمینان دارید؟",
        showCancelButton: true,
        confirmButtonText: "بله",
        cancelButtonText: "خیر",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
      }).then((res) => {
        console.log(res);
        if (res.isConfirmed) {
          this.$store.dispatch("deletePeople", this.form).then((result) => {
            console.log(result);
            this.$emit("deletePeople", this.index);
          });
        }
      });
    },
  },
};
</script>
<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.rtl {
  direction: rtl;
}

#border {
  border: 1px solid #000;
  margin-top: 20px;
  padding: 0 20px;
  border-radius: 10px;
  background-color: aliceblue;
}
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
.signup {
  position: relative;
  width: 100%;
  height: 100%;
}
#label {
  color: #138496;
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
  width: 100%;
  height: 20px;
  background: #fff;
  border: 1px solid #000;
  outline: none;
  border-radius: 5px;
  padding: 20px 8px;
  float: right;
}
#checkbox-1 {
  padding: 20px 8px;
}
#signup-btn {
  color: white;
  font-weight: 400;
  font-size: 18px;
  margin-top: 30px;
  margin-left: auto;
  display: block;
}
#signup-btn:hover {
  color: #138496;
  background-color: white;
  transition: 0.9s;
  font-weight: 400;
  border: 2px solid #138496;
}
::placeholder {
  font-size: 17px;
  text-align: right;
}
</style>