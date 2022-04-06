import Vue from "vue";
import axios from 'axios'
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {

    },
    mutations: {
        addPeople (formData) {
            return axios.post('http://localhost:3000/people', formData)
                .then(res => {
                    console.log(res);
                }).catch((err) => {
                    console.log(err);
                })

        }
    },
    actions: {
        addPeople(context) {
            context.commit('addPeople')
        }
    }
})