<template>
  <div>
    <div class="container">
      <RegisterForm v-if="isEmptyPeople" :formInfo="form" />
      <RegisterForm
        v-for="item in people"
        :key="item.id"
        :formInfo="item"
        @addPeople="addPeople"
      />
      <button class="btn btn-info mt-3 px-3" @click="addForm">
        اضافه کردن
      </button>
    </div>
  </div>
</template>

<script>
import RegisterForm from "../components/registerForm.vue";
export default {
  components: {
    RegisterForm,
  },
  data() {
    return {
      people: [],
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
  computed: {
    isEmptyPeople() {
      if (this.people.length == 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  async created() {
    await this.$store.dispatch("getPeople").then((res) => {
      this.people = res.data;
    });
    if (this.people.length === 0) {
      this.addForm();
    }
  },
  methods: {
    addForm() {
      this.people.push({
        firstname: "",
        lastname: "",
        nationalCode: "",
        job: "",
        age: "",
        educationDegree: "",
        schoolName: "",
      });
    },
    addPeople(e) {
      this.people.pop();
      this.people.push(e);
    },
  },
};
</script>

<style scoped>
</style>