<template>
  <div>
    <Navbar />
    <RegisterForm v-if="isEmptyPeople" />
    <RegisterForm
      v-for="item in people"
      :key="item.id"
      :formInfo="item"
      @addPeople="addPeople"
    />
    <button class="btn btn-info mx-4 px-3 my-4" @click="addForm">
      اضافه کردن
    </button>
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue";
import RegisterForm from "../components/registerForm.vue";
export default {
  components: {
    RegisterForm,
    Navbar,
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
  methods: {
    addForm() {
      this.people.pop();
      this.people.push(this.form);
    },
  },
  created() {
    this.$store.dispatch("getPeople").then((res) => {
      this.people = res.data;
    });
  },
};
</script>

<style scoped>
</style>