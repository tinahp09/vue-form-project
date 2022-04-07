import Vue from "vue";
import axios from 'axios'
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    actions: {
        addPeople(context, data) {
            return axios.post('http://localhost:3000/people', data)

        }
    }
})