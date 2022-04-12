import Vue from "vue";
import axios from 'axios'
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    actions: {
        addPeople(context, data) {
            return axios.post('http://localhost:3000/people', data)

        },
        getPeople() {
            return axios.get('http://localhost:3000/people')
        },
        updatePeople(context, data) {
            return axios.put('http://localhost:3000/people/1', data)
        },
        deletePeople(context, data) {
            return axios.delete('http://localhost:3000/people/1', data)
        }
    }
})