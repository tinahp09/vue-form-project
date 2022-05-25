<template>
  <div>
    <h1 class="text-center text-danger">{{ name | toUppercase }}</h1>
    <h1 class="text-center text-danger">{{date|localDate}}</h1>
    <p class="text-center">Hello</p>
    <p class="text-center" v-html="$toBold('Hello')"></p>
  </div>
</template>

<script>
// import Car from "../plugins/Car";

export default {
  // beforeDestroy() {
  //   this.car.destroy()
  //   },
  methods: {},
  mounted() {},
  data() {
    return {
      car: null,
      filterVal: false,
      name: "tina",
      date: '2020-7-19'
    };
  },
  filters:{
    localDate(value) {
      return 'Starts on '+value
    }
  },
  created() {
    // let numbers = [2, 5, 6, 4, 3];
    // // let item = 9;
    // this.car = new Car("peradi", 20);
    // this.car.age();
    // function myFilter(array, num) {
    //   for (let i = 0; i < array.length; i++) {
    //     // console.log(array[i])
    //     for (let n = 0; n < array.length; n++) {
    //       // console.log(array[i])
    //       // console.log(array[n])
    //       if (array[n] + array[i] === num) {
    //         console.log(i);
    //         // console.log(n)
    //         // console.log('true')
    //       } else {
    //         console.log("false");
    //       }
    //     }
    //   }
    // }
    // myFilter(numbers, item);
    // function changeToReverse(number) {
    //   number = number + "";
    //   return number.split("").reverse().join("");
    // }
    // let item = 181;
    // let reversedNum = Number(changeToReverse(item));
    // console.log(reversedNum);
    // if (item == reversedNum) {
    //   console.log("true");
    // } else {
    //   console.log("fasle");
    // }
  },
};
</script>

<style scoped>
</style>