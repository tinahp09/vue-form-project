import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);
import people from './People.js'
import accounts from './accounts'
export const store = new Vuex.Store({
    modules: { people, accounts }
})