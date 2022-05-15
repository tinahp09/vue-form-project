<template>
  <div>
    <div class="container">
      <RegisterForm v-if="isEmptyPeople" :formInfo="form" />
      <RegisterForm
        v-for="(item, index) in people"
        :key="item.id"
        :formInfo="item"
        @addPeople="addPeople"
        :index="index"
        @deletePeople="deletePeople"
      />
      <button class="btn btn-info mt-3 px-3" @click="addForm">
        اضافه کردن
      </button>
    </div>
  </div>
</template>

<script>
import RegisterForm from "../components/RegisterForm.vue";
import "animate.css";
import { form } from "@/constant/variable.js";
export default {
  components: {
    RegisterForm,
  },
  data() {
    return {
      people: [],
      form: JSON.parse(form),
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
  beforeCreate() {
console.log('beforeCreate')
  },
  async created() {
    window.addEventListener('mousedown',this.customeEvent)
    console.log('Create')
    await this.$store.dispatch("getPeople").then((res) => {
      this.people = res.data;
    });
    if (this.people.length === 0) {
      this.addForm();
    }
  },
  beforeDestroy() {
      this.form.destroy();
      window.removeEventListener("mousedown")

  },
  destroyed() {
  },
  methods: {
    customeEvent(){
      console.log('hiiiiiiiiiiiiijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjiii')
    },
    addForm() {
      this.people.push(JSON.parse(form));
    },
    addPeople(e) {
      this.people.pop();
      this.people.push(e);
    },
    deletePeople(index) {
      this.people.splice(index, 1);
    },
  },
};
</script>

<style scoped>
</style>